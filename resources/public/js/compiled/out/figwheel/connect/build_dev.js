// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.connect.build_dev');
goog.require('cljs.core');
goog.require('figwheel.client');
goog.require('tabber.core');
goog.require('figwheel.client.utils');
figwheel.client.start.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),(function() { 
var G__59787__delegate = function (x){
if(cljs.core.truth_(tabber.core.on_js_reload)){
return cljs.core.apply.call(null,tabber.core.on_js_reload,x);
} else {
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: :on-jsload hook 'tabber.core/on-js-reload' is missing");
}
};
var G__59787 = function (var_args){
var x = null;
if (arguments.length > 0) {
var G__59788__i = 0, G__59788__a = new Array(arguments.length -  0);
while (G__59788__i < G__59788__a.length) {G__59788__a[G__59788__i] = arguments[G__59788__i + 0]; ++G__59788__i;}
  x = new cljs.core.IndexedSeq(G__59788__a,0);
} 
return G__59787__delegate.call(this,x);};
G__59787.cljs$lang$maxFixedArity = 0;
G__59787.cljs$lang$applyTo = (function (arglist__59789){
var x = cljs.core.seq(arglist__59789);
return G__59787__delegate(x);
});
G__59787.cljs$core$IFn$_invoke$arity$variadic = G__59787__delegate;
return G__59787;
})()
,new cljs.core.Keyword(null,"open-urls","open-urls",-1478664930),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http://localhost:3449/index.html"], null),new cljs.core.Keyword(null,"build-id","build-id",1642831089),"dev",new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),"ws://localhost:3451/figwheel-ws"], null));

//# sourceMappingURL=build_dev.js.map?rel=1499548773054