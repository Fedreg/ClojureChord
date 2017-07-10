// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('goog.string');
goog.require('goog.async.Deferred');
goog.require('goog.Uri');
goog.require('goog.net.jsloader');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('clojure.set');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__25979__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__25979__auto__){
return or__25979__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return (goog.dependencies_.nameToPath[ns]);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return (goog.dependencies_.written[figwheel.client.file_reloading.name__GT_path.call(null,ns)]);
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__25979__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__39377_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__39377_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([name], true));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.fromArray([parent_ns], true));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__39382 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__39383 = null;
var count__39384 = (0);
var i__39385 = (0);
while(true){
if((i__39385 < count__39384)){
var n = cljs.core._nth.call(null,chunk__39383,i__39385);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39386 = seq__39382;
var G__39387 = chunk__39383;
var G__39388 = count__39384;
var G__39389 = (i__39385 + (1));
seq__39382 = G__39386;
chunk__39383 = G__39387;
count__39384 = G__39388;
i__39385 = G__39389;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39382);
if(temp__4657__auto__){
var seq__39382__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39382__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__39382__$1);
var G__39390 = cljs.core.chunk_rest.call(null,seq__39382__$1);
var G__39391 = c__26790__auto__;
var G__39392 = cljs.core.count.call(null,c__26790__auto__);
var G__39393 = (0);
seq__39382 = G__39390;
chunk__39383 = G__39391;
count__39384 = G__39392;
i__39385 = G__39393;
continue;
} else {
var n = cljs.core.first.call(null,seq__39382__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__39394 = cljs.core.next.call(null,seq__39382__$1);
var G__39395 = null;
var G__39396 = (0);
var G__39397 = (0);
seq__39382 = G__39394;
chunk__39383 = G__39395;
count__39384 = G__39396;
i__39385 = G__39397;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__39448_39459 = cljs.core.seq.call(null,deps);
var chunk__39449_39460 = null;
var count__39450_39461 = (0);
var i__39451_39462 = (0);
while(true){
if((i__39451_39462 < count__39450_39461)){
var dep_39463 = cljs.core._nth.call(null,chunk__39449_39460,i__39451_39462);
topo_sort_helper_STAR_.call(null,dep_39463,(depth + (1)),state);

var G__39464 = seq__39448_39459;
var G__39465 = chunk__39449_39460;
var G__39466 = count__39450_39461;
var G__39467 = (i__39451_39462 + (1));
seq__39448_39459 = G__39464;
chunk__39449_39460 = G__39465;
count__39450_39461 = G__39466;
i__39451_39462 = G__39467;
continue;
} else {
var temp__4657__auto___39468 = cljs.core.seq.call(null,seq__39448_39459);
if(temp__4657__auto___39468){
var seq__39448_39469__$1 = temp__4657__auto___39468;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39448_39469__$1)){
var c__26790__auto___39470 = cljs.core.chunk_first.call(null,seq__39448_39469__$1);
var G__39471 = cljs.core.chunk_rest.call(null,seq__39448_39469__$1);
var G__39472 = c__26790__auto___39470;
var G__39473 = cljs.core.count.call(null,c__26790__auto___39470);
var G__39474 = (0);
seq__39448_39459 = G__39471;
chunk__39449_39460 = G__39472;
count__39450_39461 = G__39473;
i__39451_39462 = G__39474;
continue;
} else {
var dep_39475 = cljs.core.first.call(null,seq__39448_39469__$1);
topo_sort_helper_STAR_.call(null,dep_39475,(depth + (1)),state);

var G__39476 = cljs.core.next.call(null,seq__39448_39469__$1);
var G__39477 = null;
var G__39478 = (0);
var G__39479 = (0);
seq__39448_39459 = G__39476;
chunk__39449_39460 = G__39477;
count__39450_39461 = G__39478;
i__39451_39462 = G__39479;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__39452){
var vec__39456 = p__39452;
var seq__39457 = cljs.core.seq.call(null,vec__39456);
var first__39458 = cljs.core.first.call(null,seq__39457);
var seq__39457__$1 = cljs.core.next.call(null,seq__39457);
var x = first__39458;
var xs = seq__39457__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__39456,seq__39457,first__39458,seq__39457__$1,x,xs,get_deps__$1){
return (function (p1__39398_SHARP_){
return clojure.set.difference.call(null,p1__39398_SHARP_,x);
});})(vec__39456,seq__39457,first__39458,seq__39457__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str(goog.basePath),cljs.core.str(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str(goog.basePath),cljs.core.str(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__39492 = cljs.core.seq.call(null,provides);
var chunk__39493 = null;
var count__39494 = (0);
var i__39495 = (0);
while(true){
if((i__39495 < count__39494)){
var prov = cljs.core._nth.call(null,chunk__39493,i__39495);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39496_39504 = cljs.core.seq.call(null,requires);
var chunk__39497_39505 = null;
var count__39498_39506 = (0);
var i__39499_39507 = (0);
while(true){
if((i__39499_39507 < count__39498_39506)){
var req_39508 = cljs.core._nth.call(null,chunk__39497_39505,i__39499_39507);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39508,prov);

var G__39509 = seq__39496_39504;
var G__39510 = chunk__39497_39505;
var G__39511 = count__39498_39506;
var G__39512 = (i__39499_39507 + (1));
seq__39496_39504 = G__39509;
chunk__39497_39505 = G__39510;
count__39498_39506 = G__39511;
i__39499_39507 = G__39512;
continue;
} else {
var temp__4657__auto___39513 = cljs.core.seq.call(null,seq__39496_39504);
if(temp__4657__auto___39513){
var seq__39496_39514__$1 = temp__4657__auto___39513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39496_39514__$1)){
var c__26790__auto___39515 = cljs.core.chunk_first.call(null,seq__39496_39514__$1);
var G__39516 = cljs.core.chunk_rest.call(null,seq__39496_39514__$1);
var G__39517 = c__26790__auto___39515;
var G__39518 = cljs.core.count.call(null,c__26790__auto___39515);
var G__39519 = (0);
seq__39496_39504 = G__39516;
chunk__39497_39505 = G__39517;
count__39498_39506 = G__39518;
i__39499_39507 = G__39519;
continue;
} else {
var req_39520 = cljs.core.first.call(null,seq__39496_39514__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39520,prov);

var G__39521 = cljs.core.next.call(null,seq__39496_39514__$1);
var G__39522 = null;
var G__39523 = (0);
var G__39524 = (0);
seq__39496_39504 = G__39521;
chunk__39497_39505 = G__39522;
count__39498_39506 = G__39523;
i__39499_39507 = G__39524;
continue;
}
} else {
}
}
break;
}

var G__39525 = seq__39492;
var G__39526 = chunk__39493;
var G__39527 = count__39494;
var G__39528 = (i__39495 + (1));
seq__39492 = G__39525;
chunk__39493 = G__39526;
count__39494 = G__39527;
i__39495 = G__39528;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__39492);
if(temp__4657__auto__){
var seq__39492__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39492__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__39492__$1);
var G__39529 = cljs.core.chunk_rest.call(null,seq__39492__$1);
var G__39530 = c__26790__auto__;
var G__39531 = cljs.core.count.call(null,c__26790__auto__);
var G__39532 = (0);
seq__39492 = G__39529;
chunk__39493 = G__39530;
count__39494 = G__39531;
i__39495 = G__39532;
continue;
} else {
var prov = cljs.core.first.call(null,seq__39492__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__39500_39533 = cljs.core.seq.call(null,requires);
var chunk__39501_39534 = null;
var count__39502_39535 = (0);
var i__39503_39536 = (0);
while(true){
if((i__39503_39536 < count__39502_39535)){
var req_39537 = cljs.core._nth.call(null,chunk__39501_39534,i__39503_39536);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39537,prov);

var G__39538 = seq__39500_39533;
var G__39539 = chunk__39501_39534;
var G__39540 = count__39502_39535;
var G__39541 = (i__39503_39536 + (1));
seq__39500_39533 = G__39538;
chunk__39501_39534 = G__39539;
count__39502_39535 = G__39540;
i__39503_39536 = G__39541;
continue;
} else {
var temp__4657__auto___39542__$1 = cljs.core.seq.call(null,seq__39500_39533);
if(temp__4657__auto___39542__$1){
var seq__39500_39543__$1 = temp__4657__auto___39542__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39500_39543__$1)){
var c__26790__auto___39544 = cljs.core.chunk_first.call(null,seq__39500_39543__$1);
var G__39545 = cljs.core.chunk_rest.call(null,seq__39500_39543__$1);
var G__39546 = c__26790__auto___39544;
var G__39547 = cljs.core.count.call(null,c__26790__auto___39544);
var G__39548 = (0);
seq__39500_39533 = G__39545;
chunk__39501_39534 = G__39546;
count__39502_39535 = G__39547;
i__39503_39536 = G__39548;
continue;
} else {
var req_39549 = cljs.core.first.call(null,seq__39500_39543__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_39549,prov);

var G__39550 = cljs.core.next.call(null,seq__39500_39543__$1);
var G__39551 = null;
var G__39552 = (0);
var G__39553 = (0);
seq__39500_39533 = G__39550;
chunk__39501_39534 = G__39551;
count__39502_39535 = G__39552;
i__39503_39536 = G__39553;
continue;
}
} else {
}
}
break;
}

var G__39554 = cljs.core.next.call(null,seq__39492__$1);
var G__39555 = null;
var G__39556 = (0);
var G__39557 = (0);
seq__39492 = G__39554;
chunk__39493 = G__39555;
count__39494 = G__39556;
i__39495 = G__39557;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel$client$file_reloading$figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__39562_39566 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__39563_39567 = null;
var count__39564_39568 = (0);
var i__39565_39569 = (0);
while(true){
if((i__39565_39569 < count__39564_39568)){
var ns_39570 = cljs.core._nth.call(null,chunk__39563_39567,i__39565_39569);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39570);

var G__39571 = seq__39562_39566;
var G__39572 = chunk__39563_39567;
var G__39573 = count__39564_39568;
var G__39574 = (i__39565_39569 + (1));
seq__39562_39566 = G__39571;
chunk__39563_39567 = G__39572;
count__39564_39568 = G__39573;
i__39565_39569 = G__39574;
continue;
} else {
var temp__4657__auto___39575 = cljs.core.seq.call(null,seq__39562_39566);
if(temp__4657__auto___39575){
var seq__39562_39576__$1 = temp__4657__auto___39575;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39562_39576__$1)){
var c__26790__auto___39577 = cljs.core.chunk_first.call(null,seq__39562_39576__$1);
var G__39578 = cljs.core.chunk_rest.call(null,seq__39562_39576__$1);
var G__39579 = c__26790__auto___39577;
var G__39580 = cljs.core.count.call(null,c__26790__auto___39577);
var G__39581 = (0);
seq__39562_39566 = G__39578;
chunk__39563_39567 = G__39579;
count__39564_39568 = G__39580;
i__39565_39569 = G__39581;
continue;
} else {
var ns_39582 = cljs.core.first.call(null,seq__39562_39576__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_39582);

var G__39583 = cljs.core.next.call(null,seq__39562_39576__$1);
var G__39584 = null;
var G__39585 = (0);
var G__39586 = (0);
seq__39562_39566 = G__39583;
chunk__39563_39567 = G__39584;
count__39564_39568 = G__39585;
i__39565_39569 = G__39586;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__25979__auto__ = goog.require__;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__39587__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__39587 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__39588__i = 0, G__39588__a = new Array(arguments.length -  0);
while (G__39588__i < G__39588__a.length) {G__39588__a[G__39588__i] = arguments[G__39588__i + 0]; ++G__39588__i;}
  args = new cljs.core.IndexedSeq(G__39588__a,0);
} 
return G__39587__delegate.call(this,args);};
G__39587.cljs$lang$maxFixedArity = 0;
G__39587.cljs$lang$applyTo = (function (arglist__39589){
var args = cljs.core.seq(arglist__39589);
return G__39587__delegate(args);
});
G__39587.cljs$core$IFn$_invoke$arity$variadic = G__39587__delegate;
return G__39587;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
;
}
});
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var deferred = goog.net.jsloader.load(figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
deferred.addCallback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(deferred))
);

return deferred.addErrback(((function (deferred){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(deferred))
);
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__39590 = cljs.core._EQ_;
var expr__39591 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__39590.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__39591))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__39590,expr__39591){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__39590,expr__39591))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__39590,expr__39591){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e39593){if((e39593 instanceof Error)){
var e = e39593;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39593;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__39590,expr__39591))
} else {
if(cljs.core.truth_(pred__39590.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__39591))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__39590.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__39591))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__39590.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__39591))){
return ((function (pred__39590,expr__39591){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e39594){if((e39594 instanceof Error)){
var e = e39594;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e39594;

}
}})());
});
;})(pred__39590,expr__39591))
} else {
return ((function (pred__39590,expr__39591){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__39590,expr__39591))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__39595,callback){
var map__39598 = p__39595;
var map__39598__$1 = ((((!((map__39598 == null)))?((((map__39598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39598):map__39598);
var file_msg = map__39598__$1;
var request_url = cljs.core.get.call(null,map__39598__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__39598,map__39598__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__39598,map__39598__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__){
return (function (state_39622){
var state_val_39623 = (state_39622[(1)]);
if((state_val_39623 === (7))){
var inst_39618 = (state_39622[(2)]);
var state_39622__$1 = state_39622;
var statearr_39624_39644 = state_39622__$1;
(statearr_39624_39644[(2)] = inst_39618);

(statearr_39624_39644[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (1))){
var state_39622__$1 = state_39622;
var statearr_39625_39645 = state_39622__$1;
(statearr_39625_39645[(2)] = null);

(statearr_39625_39645[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (4))){
var inst_39602 = (state_39622[(7)]);
var inst_39602__$1 = (state_39622[(2)]);
var state_39622__$1 = (function (){var statearr_39626 = state_39622;
(statearr_39626[(7)] = inst_39602__$1);

return statearr_39626;
})();
if(cljs.core.truth_(inst_39602__$1)){
var statearr_39627_39646 = state_39622__$1;
(statearr_39627_39646[(1)] = (5));

} else {
var statearr_39628_39647 = state_39622__$1;
(statearr_39628_39647[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (6))){
var state_39622__$1 = state_39622;
var statearr_39629_39648 = state_39622__$1;
(statearr_39629_39648[(2)] = null);

(statearr_39629_39648[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (3))){
var inst_39620 = (state_39622[(2)]);
var state_39622__$1 = state_39622;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39622__$1,inst_39620);
} else {
if((state_val_39623 === (2))){
var state_39622__$1 = state_39622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39622__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_39623 === (11))){
var inst_39614 = (state_39622[(2)]);
var state_39622__$1 = (function (){var statearr_39630 = state_39622;
(statearr_39630[(8)] = inst_39614);

return statearr_39630;
})();
var statearr_39631_39649 = state_39622__$1;
(statearr_39631_39649[(2)] = null);

(statearr_39631_39649[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (9))){
var inst_39608 = (state_39622[(9)]);
var inst_39606 = (state_39622[(10)]);
var inst_39610 = inst_39608.call(null,inst_39606);
var state_39622__$1 = state_39622;
var statearr_39632_39650 = state_39622__$1;
(statearr_39632_39650[(2)] = inst_39610);

(statearr_39632_39650[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (5))){
var inst_39602 = (state_39622[(7)]);
var inst_39604 = figwheel.client.file_reloading.blocking_load.call(null,inst_39602);
var state_39622__$1 = state_39622;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39622__$1,(8),inst_39604);
} else {
if((state_val_39623 === (10))){
var inst_39606 = (state_39622[(10)]);
var inst_39612 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_39606);
var state_39622__$1 = state_39622;
var statearr_39633_39651 = state_39622__$1;
(statearr_39633_39651[(2)] = inst_39612);

(statearr_39633_39651[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39623 === (8))){
var inst_39602 = (state_39622[(7)]);
var inst_39608 = (state_39622[(9)]);
var inst_39606 = (state_39622[(2)]);
var inst_39607 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_39608__$1 = cljs.core.get.call(null,inst_39607,inst_39602);
var state_39622__$1 = (function (){var statearr_39634 = state_39622;
(statearr_39634[(9)] = inst_39608__$1);

(statearr_39634[(10)] = inst_39606);

return statearr_39634;
})();
if(cljs.core.truth_(inst_39608__$1)){
var statearr_39635_39652 = state_39622__$1;
(statearr_39635_39652[(1)] = (9));

} else {
var statearr_39636_39653 = state_39622__$1;
(statearr_39636_39653[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__28009__auto__))
;
return ((function (switch__27988__auto__,c__28009__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$state_machine__27989__auto____0 = (function (){
var statearr_39640 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_39640[(0)] = figwheel$client$file_reloading$state_machine__27989__auto__);

(statearr_39640[(1)] = (1));

return statearr_39640;
});
var figwheel$client$file_reloading$state_machine__27989__auto____1 = (function (state_39622){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_39622);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e39641){if((e39641 instanceof Object)){
var ex__27992__auto__ = e39641;
var statearr_39642_39654 = state_39622;
(statearr_39642_39654[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39622);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39655 = state_39622;
state_39622 = G__39655;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27989__auto__ = function(state_39622){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27989__auto____1.call(this,state_39622);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27989__auto____0;
figwheel$client$file_reloading$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27989__auto____1;
return figwheel$client$file_reloading$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_39643 = f__28010__auto__.call(null);
(statearr_39643[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_39643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__))
);

return c__28009__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__39656,callback){
var map__39659 = p__39656;
var map__39659__$1 = ((((!((map__39659 == null)))?((((map__39659.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39659.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39659):map__39659);
var file_msg = map__39659__$1;
var namespace = cljs.core.get.call(null,map__39659__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__39659,map__39659__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__39659,map__39659__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__39661){
var map__39664 = p__39661;
var map__39664__$1 = ((((!((map__39664 == null)))?((((map__39664.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39664.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39664):map__39664);
var file_msg = map__39664__$1;
var namespace = cljs.core.get.call(null,map__39664__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__39666){
var map__39669 = p__39666;
var map__39669__$1 = ((((!((map__39669 == null)))?((((map__39669.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39669.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39669):map__39669);
var file_msg = map__39669__$1;
var namespace = cljs.core.get.call(null,map__39669__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__25967__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__25967__auto__){
var or__25979__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__25967__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__39671,callback){
var map__39674 = p__39671;
var map__39674__$1 = ((((!((map__39674 == null)))?((((map__39674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39674):map__39674);
var file_msg = map__39674__$1;
var request_url = cljs.core.get.call(null,map__39674__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__39674__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Figwheel: Not trying to load file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__28009__auto___39778 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___39778,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___39778,out){
return (function (state_39760){
var state_val_39761 = (state_39760[(1)]);
if((state_val_39761 === (1))){
var inst_39734 = cljs.core.seq.call(null,files);
var inst_39735 = cljs.core.first.call(null,inst_39734);
var inst_39736 = cljs.core.next.call(null,inst_39734);
var inst_39737 = files;
var state_39760__$1 = (function (){var statearr_39762 = state_39760;
(statearr_39762[(7)] = inst_39737);

(statearr_39762[(8)] = inst_39735);

(statearr_39762[(9)] = inst_39736);

return statearr_39762;
})();
var statearr_39763_39779 = state_39760__$1;
(statearr_39763_39779[(2)] = null);

(statearr_39763_39779[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39761 === (2))){
var inst_39743 = (state_39760[(10)]);
var inst_39737 = (state_39760[(7)]);
var inst_39742 = cljs.core.seq.call(null,inst_39737);
var inst_39743__$1 = cljs.core.first.call(null,inst_39742);
var inst_39744 = cljs.core.next.call(null,inst_39742);
var inst_39745 = (inst_39743__$1 == null);
var inst_39746 = cljs.core.not.call(null,inst_39745);
var state_39760__$1 = (function (){var statearr_39764 = state_39760;
(statearr_39764[(10)] = inst_39743__$1);

(statearr_39764[(11)] = inst_39744);

return statearr_39764;
})();
if(inst_39746){
var statearr_39765_39780 = state_39760__$1;
(statearr_39765_39780[(1)] = (4));

} else {
var statearr_39766_39781 = state_39760__$1;
(statearr_39766_39781[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39761 === (3))){
var inst_39758 = (state_39760[(2)]);
var state_39760__$1 = state_39760;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39760__$1,inst_39758);
} else {
if((state_val_39761 === (4))){
var inst_39743 = (state_39760[(10)]);
var inst_39748 = figwheel.client.file_reloading.reload_js_file.call(null,inst_39743);
var state_39760__$1 = state_39760;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39760__$1,(7),inst_39748);
} else {
if((state_val_39761 === (5))){
var inst_39754 = cljs.core.async.close_BANG_.call(null,out);
var state_39760__$1 = state_39760;
var statearr_39767_39782 = state_39760__$1;
(statearr_39767_39782[(2)] = inst_39754);

(statearr_39767_39782[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39761 === (6))){
var inst_39756 = (state_39760[(2)]);
var state_39760__$1 = state_39760;
var statearr_39768_39783 = state_39760__$1;
(statearr_39768_39783[(2)] = inst_39756);

(statearr_39768_39783[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39761 === (7))){
var inst_39744 = (state_39760[(11)]);
var inst_39750 = (state_39760[(2)]);
var inst_39751 = cljs.core.async.put_BANG_.call(null,out,inst_39750);
var inst_39737 = inst_39744;
var state_39760__$1 = (function (){var statearr_39769 = state_39760;
(statearr_39769[(7)] = inst_39737);

(statearr_39769[(12)] = inst_39751);

return statearr_39769;
})();
var statearr_39770_39784 = state_39760__$1;
(statearr_39770_39784[(2)] = null);

(statearr_39770_39784[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__28009__auto___39778,out))
;
return ((function (switch__27988__auto__,c__28009__auto___39778,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0 = (function (){
var statearr_39774 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39774[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__);

(statearr_39774[(1)] = (1));

return statearr_39774;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1 = (function (state_39760){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_39760);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e39775){if((e39775 instanceof Object)){
var ex__27992__auto__ = e39775;
var statearr_39776_39785 = state_39760;
(statearr_39776_39785[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39760);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39775;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39786 = state_39760;
state_39760 = G__39786;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__ = function(state_39760){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1.call(this,state_39760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___39778,out))
})();
var state__28011__auto__ = (function (){var statearr_39777 = f__28010__auto__.call(null);
(statearr_39777[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___39778);

return statearr_39777;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___39778,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__39787,opts){
var map__39791 = p__39787;
var map__39791__$1 = ((((!((map__39791 == null)))?((((map__39791.cljs$lang$protocol_mask$partition0$ & (64))) || (map__39791.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39791):map__39791);
var eval_body__$1 = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__39791__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__25967__auto__ = eval_body__$1;
if(cljs.core.truth_(and__25967__auto__)){
return typeof eval_body__$1 === 'string';
} else {
return and__25967__auto__;
}
})())){
var code = eval_body__$1;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str("Evaling file "),cljs.core.str(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e39793){var e = e39793;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Unable to evaluate "),cljs.core.str(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__4655__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__39794_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39794_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__4655__auto__)){
var file_msg = temp__4655__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__39803){
var vec__39804 = p__39803;
var k = cljs.core.nth.call(null,vec__39804,(0),null);
var v = cljs.core.nth.call(null,vec__39804,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__39807){
var vec__39808 = p__39807;
var k = cljs.core.nth.call(null,vec__39808,(0),null);
var v = cljs.core.nth.call(null,vec__39808,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__39814,p__39815){
var map__40062 = p__39814;
var map__40062__$1 = ((((!((map__40062 == null)))?((((map__40062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40062):map__40062);
var opts = map__40062__$1;
var before_jsload = cljs.core.get.call(null,map__40062__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__40062__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__40062__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__40063 = p__39815;
var map__40063__$1 = ((((!((map__40063 == null)))?((((map__40063.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40063.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40063):map__40063);
var msg = map__40063__$1;
var files = cljs.core.get.call(null,map__40063__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__40063__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__40063__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_40216){
var state_val_40217 = (state_40216[(1)]);
if((state_val_40217 === (7))){
var inst_40078 = (state_40216[(7)]);
var inst_40080 = (state_40216[(8)]);
var inst_40077 = (state_40216[(9)]);
var inst_40079 = (state_40216[(10)]);
var inst_40085 = cljs.core._nth.call(null,inst_40078,inst_40080);
var inst_40086 = figwheel.client.file_reloading.eval_body.call(null,inst_40085,opts);
var inst_40087 = (inst_40080 + (1));
var tmp40218 = inst_40078;
var tmp40219 = inst_40077;
var tmp40220 = inst_40079;
var inst_40077__$1 = tmp40219;
var inst_40078__$1 = tmp40218;
var inst_40079__$1 = tmp40220;
var inst_40080__$1 = inst_40087;
var state_40216__$1 = (function (){var statearr_40221 = state_40216;
(statearr_40221[(7)] = inst_40078__$1);

(statearr_40221[(8)] = inst_40080__$1);

(statearr_40221[(9)] = inst_40077__$1);

(statearr_40221[(11)] = inst_40086);

(statearr_40221[(10)] = inst_40079__$1);

return statearr_40221;
})();
var statearr_40222_40308 = state_40216__$1;
(statearr_40222_40308[(2)] = null);

(statearr_40222_40308[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (20))){
var inst_40120 = (state_40216[(12)]);
var inst_40128 = figwheel.client.file_reloading.sort_files.call(null,inst_40120);
var state_40216__$1 = state_40216;
var statearr_40223_40309 = state_40216__$1;
(statearr_40223_40309[(2)] = inst_40128);

(statearr_40223_40309[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (27))){
var state_40216__$1 = state_40216;
var statearr_40224_40310 = state_40216__$1;
(statearr_40224_40310[(2)] = null);

(statearr_40224_40310[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (1))){
var inst_40069 = (state_40216[(13)]);
var inst_40066 = before_jsload.call(null,files);
var inst_40067 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_40068 = (function (){return ((function (inst_40069,inst_40066,inst_40067,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39811_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39811_SHARP_);
});
;})(inst_40069,inst_40066,inst_40067,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40069__$1 = cljs.core.filter.call(null,inst_40068,files);
var inst_40070 = cljs.core.not_empty.call(null,inst_40069__$1);
var state_40216__$1 = (function (){var statearr_40225 = state_40216;
(statearr_40225[(14)] = inst_40067);

(statearr_40225[(13)] = inst_40069__$1);

(statearr_40225[(15)] = inst_40066);

return statearr_40225;
})();
if(cljs.core.truth_(inst_40070)){
var statearr_40226_40311 = state_40216__$1;
(statearr_40226_40311[(1)] = (2));

} else {
var statearr_40227_40312 = state_40216__$1;
(statearr_40227_40312[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (24))){
var state_40216__$1 = state_40216;
var statearr_40228_40313 = state_40216__$1;
(statearr_40228_40313[(2)] = null);

(statearr_40228_40313[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (39))){
var inst_40170 = (state_40216[(16)]);
var state_40216__$1 = state_40216;
var statearr_40229_40314 = state_40216__$1;
(statearr_40229_40314[(2)] = inst_40170);

(statearr_40229_40314[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (46))){
var inst_40211 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
var statearr_40230_40315 = state_40216__$1;
(statearr_40230_40315[(2)] = inst_40211);

(statearr_40230_40315[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (4))){
var inst_40114 = (state_40216[(2)]);
var inst_40115 = cljs.core.List.EMPTY;
var inst_40116 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_40115);
var inst_40117 = (function (){return ((function (inst_40114,inst_40115,inst_40116,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39812_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__39812_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__39812_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__39812_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_40114,inst_40115,inst_40116,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40118 = cljs.core.filter.call(null,inst_40117,files);
var inst_40119 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_40120 = cljs.core.concat.call(null,inst_40118,inst_40119);
var state_40216__$1 = (function (){var statearr_40231 = state_40216;
(statearr_40231[(12)] = inst_40120);

(statearr_40231[(17)] = inst_40114);

(statearr_40231[(18)] = inst_40116);

return statearr_40231;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_40232_40316 = state_40216__$1;
(statearr_40232_40316[(1)] = (16));

} else {
var statearr_40233_40317 = state_40216__$1;
(statearr_40233_40317[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (15))){
var inst_40104 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
var statearr_40234_40318 = state_40216__$1;
(statearr_40234_40318[(2)] = inst_40104);

(statearr_40234_40318[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (21))){
var inst_40130 = (state_40216[(19)]);
var inst_40130__$1 = (state_40216[(2)]);
var inst_40131 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_40130__$1);
var state_40216__$1 = (function (){var statearr_40235 = state_40216;
(statearr_40235[(19)] = inst_40130__$1);

return statearr_40235;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_40216__$1,(22),inst_40131);
} else {
if((state_val_40217 === (31))){
var inst_40214 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_40216__$1,inst_40214);
} else {
if((state_val_40217 === (32))){
var inst_40170 = (state_40216[(16)]);
var inst_40175 = inst_40170.cljs$lang$protocol_mask$partition0$;
var inst_40176 = (inst_40175 & (64));
var inst_40177 = inst_40170.cljs$core$ISeq$;
var inst_40178 = (inst_40176) || (inst_40177);
var state_40216__$1 = state_40216;
if(cljs.core.truth_(inst_40178)){
var statearr_40236_40319 = state_40216__$1;
(statearr_40236_40319[(1)] = (35));

} else {
var statearr_40237_40320 = state_40216__$1;
(statearr_40237_40320[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (40))){
var inst_40191 = (state_40216[(20)]);
var inst_40190 = (state_40216[(2)]);
var inst_40191__$1 = cljs.core.get.call(null,inst_40190,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_40192 = cljs.core.get.call(null,inst_40190,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_40193 = cljs.core.not_empty.call(null,inst_40191__$1);
var state_40216__$1 = (function (){var statearr_40238 = state_40216;
(statearr_40238[(21)] = inst_40192);

(statearr_40238[(20)] = inst_40191__$1);

return statearr_40238;
})();
if(cljs.core.truth_(inst_40193)){
var statearr_40239_40321 = state_40216__$1;
(statearr_40239_40321[(1)] = (41));

} else {
var statearr_40240_40322 = state_40216__$1;
(statearr_40240_40322[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (33))){
var state_40216__$1 = state_40216;
var statearr_40241_40323 = state_40216__$1;
(statearr_40241_40323[(2)] = false);

(statearr_40241_40323[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (13))){
var inst_40090 = (state_40216[(22)]);
var inst_40094 = cljs.core.chunk_first.call(null,inst_40090);
var inst_40095 = cljs.core.chunk_rest.call(null,inst_40090);
var inst_40096 = cljs.core.count.call(null,inst_40094);
var inst_40077 = inst_40095;
var inst_40078 = inst_40094;
var inst_40079 = inst_40096;
var inst_40080 = (0);
var state_40216__$1 = (function (){var statearr_40242 = state_40216;
(statearr_40242[(7)] = inst_40078);

(statearr_40242[(8)] = inst_40080);

(statearr_40242[(9)] = inst_40077);

(statearr_40242[(10)] = inst_40079);

return statearr_40242;
})();
var statearr_40243_40324 = state_40216__$1;
(statearr_40243_40324[(2)] = null);

(statearr_40243_40324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (22))){
var inst_40133 = (state_40216[(23)]);
var inst_40134 = (state_40216[(24)]);
var inst_40138 = (state_40216[(25)]);
var inst_40130 = (state_40216[(19)]);
var inst_40133__$1 = (state_40216[(2)]);
var inst_40134__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40133__$1);
var inst_40135 = (function (){var all_files = inst_40130;
var res_SINGLEQUOTE_ = inst_40133__$1;
var res = inst_40134__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_40133,inst_40134,inst_40138,inst_40130,inst_40133__$1,inst_40134__$1,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__39813_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__39813_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_40133,inst_40134,inst_40138,inst_40130,inst_40133__$1,inst_40134__$1,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40136 = cljs.core.filter.call(null,inst_40135,inst_40133__$1);
var inst_40137 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_40138__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_40137);
var inst_40139 = cljs.core.not_empty.call(null,inst_40138__$1);
var state_40216__$1 = (function (){var statearr_40244 = state_40216;
(statearr_40244[(23)] = inst_40133__$1);

(statearr_40244[(24)] = inst_40134__$1);

(statearr_40244[(25)] = inst_40138__$1);

(statearr_40244[(26)] = inst_40136);

return statearr_40244;
})();
if(cljs.core.truth_(inst_40139)){
var statearr_40245_40325 = state_40216__$1;
(statearr_40245_40325[(1)] = (23));

} else {
var statearr_40246_40326 = state_40216__$1;
(statearr_40246_40326[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (36))){
var state_40216__$1 = state_40216;
var statearr_40247_40327 = state_40216__$1;
(statearr_40247_40327[(2)] = false);

(statearr_40247_40327[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (41))){
var inst_40191 = (state_40216[(20)]);
var inst_40195 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_40196 = cljs.core.map.call(null,inst_40195,inst_40191);
var inst_40197 = cljs.core.pr_str.call(null,inst_40196);
var inst_40198 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_40197)].join('');
var inst_40199 = figwheel.client.utils.log.call(null,inst_40198);
var state_40216__$1 = state_40216;
var statearr_40248_40328 = state_40216__$1;
(statearr_40248_40328[(2)] = inst_40199);

(statearr_40248_40328[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (43))){
var inst_40192 = (state_40216[(21)]);
var inst_40202 = (state_40216[(2)]);
var inst_40203 = cljs.core.not_empty.call(null,inst_40192);
var state_40216__$1 = (function (){var statearr_40249 = state_40216;
(statearr_40249[(27)] = inst_40202);

return statearr_40249;
})();
if(cljs.core.truth_(inst_40203)){
var statearr_40250_40329 = state_40216__$1;
(statearr_40250_40329[(1)] = (44));

} else {
var statearr_40251_40330 = state_40216__$1;
(statearr_40251_40330[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (29))){
var inst_40133 = (state_40216[(23)]);
var inst_40170 = (state_40216[(16)]);
var inst_40134 = (state_40216[(24)]);
var inst_40138 = (state_40216[(25)]);
var inst_40130 = (state_40216[(19)]);
var inst_40136 = (state_40216[(26)]);
var inst_40166 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_40169 = (function (){var all_files = inst_40130;
var res_SINGLEQUOTE_ = inst_40133;
var res = inst_40134;
var files_not_loaded = inst_40136;
var dependencies_that_loaded = inst_40138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40133,inst_40170,inst_40134,inst_40138,inst_40130,inst_40136,inst_40166,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40168){
var map__40252 = p__40168;
var map__40252__$1 = ((((!((map__40252 == null)))?((((map__40252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40252):map__40252);
var namespace = cljs.core.get.call(null,map__40252__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40133,inst_40170,inst_40134,inst_40138,inst_40130,inst_40136,inst_40166,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40170__$1 = cljs.core.group_by.call(null,inst_40169,inst_40136);
var inst_40172 = (inst_40170__$1 == null);
var inst_40173 = cljs.core.not.call(null,inst_40172);
var state_40216__$1 = (function (){var statearr_40254 = state_40216;
(statearr_40254[(16)] = inst_40170__$1);

(statearr_40254[(28)] = inst_40166);

return statearr_40254;
})();
if(inst_40173){
var statearr_40255_40331 = state_40216__$1;
(statearr_40255_40331[(1)] = (32));

} else {
var statearr_40256_40332 = state_40216__$1;
(statearr_40256_40332[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (44))){
var inst_40192 = (state_40216[(21)]);
var inst_40205 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_40192);
var inst_40206 = cljs.core.pr_str.call(null,inst_40205);
var inst_40207 = [cljs.core.str("not required: "),cljs.core.str(inst_40206)].join('');
var inst_40208 = figwheel.client.utils.log.call(null,inst_40207);
var state_40216__$1 = state_40216;
var statearr_40257_40333 = state_40216__$1;
(statearr_40257_40333[(2)] = inst_40208);

(statearr_40257_40333[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (6))){
var inst_40111 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
var statearr_40258_40334 = state_40216__$1;
(statearr_40258_40334[(2)] = inst_40111);

(statearr_40258_40334[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (28))){
var inst_40136 = (state_40216[(26)]);
var inst_40163 = (state_40216[(2)]);
var inst_40164 = cljs.core.not_empty.call(null,inst_40136);
var state_40216__$1 = (function (){var statearr_40259 = state_40216;
(statearr_40259[(29)] = inst_40163);

return statearr_40259;
})();
if(cljs.core.truth_(inst_40164)){
var statearr_40260_40335 = state_40216__$1;
(statearr_40260_40335[(1)] = (29));

} else {
var statearr_40261_40336 = state_40216__$1;
(statearr_40261_40336[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (25))){
var inst_40134 = (state_40216[(24)]);
var inst_40150 = (state_40216[(2)]);
var inst_40151 = cljs.core.not_empty.call(null,inst_40134);
var state_40216__$1 = (function (){var statearr_40262 = state_40216;
(statearr_40262[(30)] = inst_40150);

return statearr_40262;
})();
if(cljs.core.truth_(inst_40151)){
var statearr_40263_40337 = state_40216__$1;
(statearr_40263_40337[(1)] = (26));

} else {
var statearr_40264_40338 = state_40216__$1;
(statearr_40264_40338[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (34))){
var inst_40185 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
if(cljs.core.truth_(inst_40185)){
var statearr_40265_40339 = state_40216__$1;
(statearr_40265_40339[(1)] = (38));

} else {
var statearr_40266_40340 = state_40216__$1;
(statearr_40266_40340[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (17))){
var state_40216__$1 = state_40216;
var statearr_40267_40341 = state_40216__$1;
(statearr_40267_40341[(2)] = recompile_dependents);

(statearr_40267_40341[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (3))){
var state_40216__$1 = state_40216;
var statearr_40268_40342 = state_40216__$1;
(statearr_40268_40342[(2)] = null);

(statearr_40268_40342[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (12))){
var inst_40107 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
var statearr_40269_40343 = state_40216__$1;
(statearr_40269_40343[(2)] = inst_40107);

(statearr_40269_40343[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (2))){
var inst_40069 = (state_40216[(13)]);
var inst_40076 = cljs.core.seq.call(null,inst_40069);
var inst_40077 = inst_40076;
var inst_40078 = null;
var inst_40079 = (0);
var inst_40080 = (0);
var state_40216__$1 = (function (){var statearr_40270 = state_40216;
(statearr_40270[(7)] = inst_40078);

(statearr_40270[(8)] = inst_40080);

(statearr_40270[(9)] = inst_40077);

(statearr_40270[(10)] = inst_40079);

return statearr_40270;
})();
var statearr_40271_40344 = state_40216__$1;
(statearr_40271_40344[(2)] = null);

(statearr_40271_40344[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (23))){
var inst_40133 = (state_40216[(23)]);
var inst_40134 = (state_40216[(24)]);
var inst_40138 = (state_40216[(25)]);
var inst_40130 = (state_40216[(19)]);
var inst_40136 = (state_40216[(26)]);
var inst_40141 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_40143 = (function (){var all_files = inst_40130;
var res_SINGLEQUOTE_ = inst_40133;
var res = inst_40134;
var files_not_loaded = inst_40136;
var dependencies_that_loaded = inst_40138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40133,inst_40134,inst_40138,inst_40130,inst_40136,inst_40141,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40142){
var map__40272 = p__40142;
var map__40272__$1 = ((((!((map__40272 == null)))?((((map__40272.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40272.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40272):map__40272);
var request_url = cljs.core.get.call(null,map__40272__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40133,inst_40134,inst_40138,inst_40130,inst_40136,inst_40141,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40144 = cljs.core.reverse.call(null,inst_40138);
var inst_40145 = cljs.core.map.call(null,inst_40143,inst_40144);
var inst_40146 = cljs.core.pr_str.call(null,inst_40145);
var inst_40147 = figwheel.client.utils.log.call(null,inst_40146);
var state_40216__$1 = (function (){var statearr_40274 = state_40216;
(statearr_40274[(31)] = inst_40141);

return statearr_40274;
})();
var statearr_40275_40345 = state_40216__$1;
(statearr_40275_40345[(2)] = inst_40147);

(statearr_40275_40345[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (35))){
var state_40216__$1 = state_40216;
var statearr_40276_40346 = state_40216__$1;
(statearr_40276_40346[(2)] = true);

(statearr_40276_40346[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (19))){
var inst_40120 = (state_40216[(12)]);
var inst_40126 = figwheel.client.file_reloading.expand_files.call(null,inst_40120);
var state_40216__$1 = state_40216;
var statearr_40277_40347 = state_40216__$1;
(statearr_40277_40347[(2)] = inst_40126);

(statearr_40277_40347[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (11))){
var state_40216__$1 = state_40216;
var statearr_40278_40348 = state_40216__$1;
(statearr_40278_40348[(2)] = null);

(statearr_40278_40348[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (9))){
var inst_40109 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
var statearr_40279_40349 = state_40216__$1;
(statearr_40279_40349[(2)] = inst_40109);

(statearr_40279_40349[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (5))){
var inst_40080 = (state_40216[(8)]);
var inst_40079 = (state_40216[(10)]);
var inst_40082 = (inst_40080 < inst_40079);
var inst_40083 = inst_40082;
var state_40216__$1 = state_40216;
if(cljs.core.truth_(inst_40083)){
var statearr_40280_40350 = state_40216__$1;
(statearr_40280_40350[(1)] = (7));

} else {
var statearr_40281_40351 = state_40216__$1;
(statearr_40281_40351[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (14))){
var inst_40090 = (state_40216[(22)]);
var inst_40099 = cljs.core.first.call(null,inst_40090);
var inst_40100 = figwheel.client.file_reloading.eval_body.call(null,inst_40099,opts);
var inst_40101 = cljs.core.next.call(null,inst_40090);
var inst_40077 = inst_40101;
var inst_40078 = null;
var inst_40079 = (0);
var inst_40080 = (0);
var state_40216__$1 = (function (){var statearr_40282 = state_40216;
(statearr_40282[(7)] = inst_40078);

(statearr_40282[(32)] = inst_40100);

(statearr_40282[(8)] = inst_40080);

(statearr_40282[(9)] = inst_40077);

(statearr_40282[(10)] = inst_40079);

return statearr_40282;
})();
var statearr_40283_40352 = state_40216__$1;
(statearr_40283_40352[(2)] = null);

(statearr_40283_40352[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (45))){
var state_40216__$1 = state_40216;
var statearr_40284_40353 = state_40216__$1;
(statearr_40284_40353[(2)] = null);

(statearr_40284_40353[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (26))){
var inst_40133 = (state_40216[(23)]);
var inst_40134 = (state_40216[(24)]);
var inst_40138 = (state_40216[(25)]);
var inst_40130 = (state_40216[(19)]);
var inst_40136 = (state_40216[(26)]);
var inst_40153 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_40155 = (function (){var all_files = inst_40130;
var res_SINGLEQUOTE_ = inst_40133;
var res = inst_40134;
var files_not_loaded = inst_40136;
var dependencies_that_loaded = inst_40138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40133,inst_40134,inst_40138,inst_40130,inst_40136,inst_40153,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__40154){
var map__40285 = p__40154;
var map__40285__$1 = ((((!((map__40285 == null)))?((((map__40285.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40285.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40285):map__40285);
var namespace = cljs.core.get.call(null,map__40285__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__40285__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40133,inst_40134,inst_40138,inst_40130,inst_40136,inst_40153,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40156 = cljs.core.map.call(null,inst_40155,inst_40134);
var inst_40157 = cljs.core.pr_str.call(null,inst_40156);
var inst_40158 = figwheel.client.utils.log.call(null,inst_40157);
var inst_40159 = (function (){var all_files = inst_40130;
var res_SINGLEQUOTE_ = inst_40133;
var res = inst_40134;
var files_not_loaded = inst_40136;
var dependencies_that_loaded = inst_40138;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40133,inst_40134,inst_40138,inst_40130,inst_40136,inst_40153,inst_40155,inst_40156,inst_40157,inst_40158,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_40133,inst_40134,inst_40138,inst_40130,inst_40136,inst_40153,inst_40155,inst_40156,inst_40157,inst_40158,state_val_40217,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_40160 = setTimeout(inst_40159,(10));
var state_40216__$1 = (function (){var statearr_40287 = state_40216;
(statearr_40287[(33)] = inst_40158);

(statearr_40287[(34)] = inst_40153);

return statearr_40287;
})();
var statearr_40288_40354 = state_40216__$1;
(statearr_40288_40354[(2)] = inst_40160);

(statearr_40288_40354[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (16))){
var state_40216__$1 = state_40216;
var statearr_40289_40355 = state_40216__$1;
(statearr_40289_40355[(2)] = reload_dependents);

(statearr_40289_40355[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (38))){
var inst_40170 = (state_40216[(16)]);
var inst_40187 = cljs.core.apply.call(null,cljs.core.hash_map,inst_40170);
var state_40216__$1 = state_40216;
var statearr_40290_40356 = state_40216__$1;
(statearr_40290_40356[(2)] = inst_40187);

(statearr_40290_40356[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (30))){
var state_40216__$1 = state_40216;
var statearr_40291_40357 = state_40216__$1;
(statearr_40291_40357[(2)] = null);

(statearr_40291_40357[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (10))){
var inst_40090 = (state_40216[(22)]);
var inst_40092 = cljs.core.chunked_seq_QMARK_.call(null,inst_40090);
var state_40216__$1 = state_40216;
if(inst_40092){
var statearr_40292_40358 = state_40216__$1;
(statearr_40292_40358[(1)] = (13));

} else {
var statearr_40293_40359 = state_40216__$1;
(statearr_40293_40359[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (18))){
var inst_40124 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
if(cljs.core.truth_(inst_40124)){
var statearr_40294_40360 = state_40216__$1;
(statearr_40294_40360[(1)] = (19));

} else {
var statearr_40295_40361 = state_40216__$1;
(statearr_40295_40361[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (42))){
var state_40216__$1 = state_40216;
var statearr_40296_40362 = state_40216__$1;
(statearr_40296_40362[(2)] = null);

(statearr_40296_40362[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (37))){
var inst_40182 = (state_40216[(2)]);
var state_40216__$1 = state_40216;
var statearr_40297_40363 = state_40216__$1;
(statearr_40297_40363[(2)] = inst_40182);

(statearr_40297_40363[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_40217 === (8))){
var inst_40090 = (state_40216[(22)]);
var inst_40077 = (state_40216[(9)]);
var inst_40090__$1 = cljs.core.seq.call(null,inst_40077);
var state_40216__$1 = (function (){var statearr_40298 = state_40216;
(statearr_40298[(22)] = inst_40090__$1);

return statearr_40298;
})();
if(inst_40090__$1){
var statearr_40299_40364 = state_40216__$1;
(statearr_40299_40364[(1)] = (10));

} else {
var statearr_40300_40365 = state_40216__$1;
(statearr_40300_40365[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27988__auto__,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0 = (function (){
var statearr_40304 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_40304[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__);

(statearr_40304[(1)] = (1));

return statearr_40304;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1 = (function (state_40216){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_40216);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e40305){if((e40305 instanceof Object)){
var ex__27992__auto__ = e40305;
var statearr_40306_40366 = state_40216;
(statearr_40306_40366[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_40216);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e40305;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__40367 = state_40216;
state_40216 = G__40367;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__ = function(state_40216){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1.call(this,state_40216);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28011__auto__ = (function (){var statearr_40307 = f__28010__auto__.call(null);
(statearr_40307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_40307;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,map__40062,map__40062__$1,opts,before_jsload,on_jsload,reload_dependents,map__40063,map__40063__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28009__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__40370,link){
var map__40373 = p__40370;
var map__40373__$1 = ((((!((map__40373 == null)))?((((map__40373.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40373.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40373):map__40373);
var file = cljs.core.get.call(null,map__40373__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__40373,map__40373__$1,file){
return (function (p1__40368_SHARP_,p2__40369_SHARP_){
if(cljs.core._EQ_.call(null,p1__40368_SHARP_,p2__40369_SHARP_)){
return p1__40368_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__40373,map__40373__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__40379){
var map__40380 = p__40379;
var map__40380__$1 = ((((!((map__40380 == null)))?((((map__40380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40380):map__40380);
var match_length = cljs.core.get.call(null,map__40380__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__40380__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__40375_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__40375_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__4657__auto__)){
var res = temp__4657__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__40382_SHARP_,p2__40383_SHARP_){
return cljs.core.assoc.call(null,p1__40382_SHARP_,cljs.core.get.call(null,p2__40383_SHARP_,key),p2__40383_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__4655__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__4655__auto__)){
var link = temp__4655__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__4655__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__4655__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_40384 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_40384);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_40384);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__40385,p__40386){
var map__40391 = p__40385;
var map__40391__$1 = ((((!((map__40391 == null)))?((((map__40391.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40391.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40391):map__40391);
var on_cssload = cljs.core.get.call(null,map__40391__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__40392 = p__40386;
var map__40392__$1 = ((((!((map__40392 == null)))?((((map__40392.cljs$lang$protocol_mask$partition0$ & (64))) || (map__40392.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__40392):map__40392);
var files_msg = map__40392__$1;
var files = cljs.core.get.call(null,map__40392__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__4657__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__4657__auto__)){
var f_datas = temp__4657__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1499706497966