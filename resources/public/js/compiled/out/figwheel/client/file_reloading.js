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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__30299_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__30299_SHARP_));
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
var seq__30304 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__30305 = null;
var count__30306 = (0);
var i__30307 = (0);
while(true){
if((i__30307 < count__30306)){
var n = cljs.core._nth.call(null,chunk__30305,i__30307);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30308 = seq__30304;
var G__30309 = chunk__30305;
var G__30310 = count__30306;
var G__30311 = (i__30307 + (1));
seq__30304 = G__30308;
chunk__30305 = G__30309;
count__30306 = G__30310;
i__30307 = G__30311;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30304);
if(temp__4657__auto__){
var seq__30304__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30304__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__30304__$1);
var G__30312 = cljs.core.chunk_rest.call(null,seq__30304__$1);
var G__30313 = c__26790__auto__;
var G__30314 = cljs.core.count.call(null,c__26790__auto__);
var G__30315 = (0);
seq__30304 = G__30312;
chunk__30305 = G__30313;
count__30306 = G__30314;
i__30307 = G__30315;
continue;
} else {
var n = cljs.core.first.call(null,seq__30304__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__30316 = cljs.core.next.call(null,seq__30304__$1);
var G__30317 = null;
var G__30318 = (0);
var G__30319 = (0);
seq__30304 = G__30316;
chunk__30305 = G__30317;
count__30306 = G__30318;
i__30307 = G__30319;
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

var seq__30370_30381 = cljs.core.seq.call(null,deps);
var chunk__30371_30382 = null;
var count__30372_30383 = (0);
var i__30373_30384 = (0);
while(true){
if((i__30373_30384 < count__30372_30383)){
var dep_30385 = cljs.core._nth.call(null,chunk__30371_30382,i__30373_30384);
topo_sort_helper_STAR_.call(null,dep_30385,(depth + (1)),state);

var G__30386 = seq__30370_30381;
var G__30387 = chunk__30371_30382;
var G__30388 = count__30372_30383;
var G__30389 = (i__30373_30384 + (1));
seq__30370_30381 = G__30386;
chunk__30371_30382 = G__30387;
count__30372_30383 = G__30388;
i__30373_30384 = G__30389;
continue;
} else {
var temp__4657__auto___30390 = cljs.core.seq.call(null,seq__30370_30381);
if(temp__4657__auto___30390){
var seq__30370_30391__$1 = temp__4657__auto___30390;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30370_30391__$1)){
var c__26790__auto___30392 = cljs.core.chunk_first.call(null,seq__30370_30391__$1);
var G__30393 = cljs.core.chunk_rest.call(null,seq__30370_30391__$1);
var G__30394 = c__26790__auto___30392;
var G__30395 = cljs.core.count.call(null,c__26790__auto___30392);
var G__30396 = (0);
seq__30370_30381 = G__30393;
chunk__30371_30382 = G__30394;
count__30372_30383 = G__30395;
i__30373_30384 = G__30396;
continue;
} else {
var dep_30397 = cljs.core.first.call(null,seq__30370_30391__$1);
topo_sort_helper_STAR_.call(null,dep_30397,(depth + (1)),state);

var G__30398 = cljs.core.next.call(null,seq__30370_30391__$1);
var G__30399 = null;
var G__30400 = (0);
var G__30401 = (0);
seq__30370_30381 = G__30398;
chunk__30371_30382 = G__30399;
count__30372_30383 = G__30400;
i__30373_30384 = G__30401;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__30374){
var vec__30378 = p__30374;
var seq__30379 = cljs.core.seq.call(null,vec__30378);
var first__30380 = cljs.core.first.call(null,seq__30379);
var seq__30379__$1 = cljs.core.next.call(null,seq__30379);
var x = first__30380;
var xs = seq__30379__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__30378,seq__30379,first__30380,seq__30379__$1,x,xs,get_deps__$1){
return (function (p1__30320_SHARP_){
return clojure.set.difference.call(null,p1__30320_SHARP_,x);
});})(vec__30378,seq__30379,first__30380,seq__30379__$1,x,xs,get_deps__$1))
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
var seq__30414 = cljs.core.seq.call(null,provides);
var chunk__30415 = null;
var count__30416 = (0);
var i__30417 = (0);
while(true){
if((i__30417 < count__30416)){
var prov = cljs.core._nth.call(null,chunk__30415,i__30417);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30418_30426 = cljs.core.seq.call(null,requires);
var chunk__30419_30427 = null;
var count__30420_30428 = (0);
var i__30421_30429 = (0);
while(true){
if((i__30421_30429 < count__30420_30428)){
var req_30430 = cljs.core._nth.call(null,chunk__30419_30427,i__30421_30429);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30430,prov);

var G__30431 = seq__30418_30426;
var G__30432 = chunk__30419_30427;
var G__30433 = count__30420_30428;
var G__30434 = (i__30421_30429 + (1));
seq__30418_30426 = G__30431;
chunk__30419_30427 = G__30432;
count__30420_30428 = G__30433;
i__30421_30429 = G__30434;
continue;
} else {
var temp__4657__auto___30435 = cljs.core.seq.call(null,seq__30418_30426);
if(temp__4657__auto___30435){
var seq__30418_30436__$1 = temp__4657__auto___30435;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30418_30436__$1)){
var c__26790__auto___30437 = cljs.core.chunk_first.call(null,seq__30418_30436__$1);
var G__30438 = cljs.core.chunk_rest.call(null,seq__30418_30436__$1);
var G__30439 = c__26790__auto___30437;
var G__30440 = cljs.core.count.call(null,c__26790__auto___30437);
var G__30441 = (0);
seq__30418_30426 = G__30438;
chunk__30419_30427 = G__30439;
count__30420_30428 = G__30440;
i__30421_30429 = G__30441;
continue;
} else {
var req_30442 = cljs.core.first.call(null,seq__30418_30436__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30442,prov);

var G__30443 = cljs.core.next.call(null,seq__30418_30436__$1);
var G__30444 = null;
var G__30445 = (0);
var G__30446 = (0);
seq__30418_30426 = G__30443;
chunk__30419_30427 = G__30444;
count__30420_30428 = G__30445;
i__30421_30429 = G__30446;
continue;
}
} else {
}
}
break;
}

var G__30447 = seq__30414;
var G__30448 = chunk__30415;
var G__30449 = count__30416;
var G__30450 = (i__30417 + (1));
seq__30414 = G__30447;
chunk__30415 = G__30448;
count__30416 = G__30449;
i__30417 = G__30450;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__30414);
if(temp__4657__auto__){
var seq__30414__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30414__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__30414__$1);
var G__30451 = cljs.core.chunk_rest.call(null,seq__30414__$1);
var G__30452 = c__26790__auto__;
var G__30453 = cljs.core.count.call(null,c__26790__auto__);
var G__30454 = (0);
seq__30414 = G__30451;
chunk__30415 = G__30452;
count__30416 = G__30453;
i__30417 = G__30454;
continue;
} else {
var prov = cljs.core.first.call(null,seq__30414__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__30422_30455 = cljs.core.seq.call(null,requires);
var chunk__30423_30456 = null;
var count__30424_30457 = (0);
var i__30425_30458 = (0);
while(true){
if((i__30425_30458 < count__30424_30457)){
var req_30459 = cljs.core._nth.call(null,chunk__30423_30456,i__30425_30458);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30459,prov);

var G__30460 = seq__30422_30455;
var G__30461 = chunk__30423_30456;
var G__30462 = count__30424_30457;
var G__30463 = (i__30425_30458 + (1));
seq__30422_30455 = G__30460;
chunk__30423_30456 = G__30461;
count__30424_30457 = G__30462;
i__30425_30458 = G__30463;
continue;
} else {
var temp__4657__auto___30464__$1 = cljs.core.seq.call(null,seq__30422_30455);
if(temp__4657__auto___30464__$1){
var seq__30422_30465__$1 = temp__4657__auto___30464__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30422_30465__$1)){
var c__26790__auto___30466 = cljs.core.chunk_first.call(null,seq__30422_30465__$1);
var G__30467 = cljs.core.chunk_rest.call(null,seq__30422_30465__$1);
var G__30468 = c__26790__auto___30466;
var G__30469 = cljs.core.count.call(null,c__26790__auto___30466);
var G__30470 = (0);
seq__30422_30455 = G__30467;
chunk__30423_30456 = G__30468;
count__30424_30457 = G__30469;
i__30425_30458 = G__30470;
continue;
} else {
var req_30471 = cljs.core.first.call(null,seq__30422_30465__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_30471,prov);

var G__30472 = cljs.core.next.call(null,seq__30422_30465__$1);
var G__30473 = null;
var G__30474 = (0);
var G__30475 = (0);
seq__30422_30455 = G__30472;
chunk__30423_30456 = G__30473;
count__30424_30457 = G__30474;
i__30425_30458 = G__30475;
continue;
}
} else {
}
}
break;
}

var G__30476 = cljs.core.next.call(null,seq__30414__$1);
var G__30477 = null;
var G__30478 = (0);
var G__30479 = (0);
seq__30414 = G__30476;
chunk__30415 = G__30477;
count__30416 = G__30478;
i__30417 = G__30479;
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
var seq__30484_30488 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__30485_30489 = null;
var count__30486_30490 = (0);
var i__30487_30491 = (0);
while(true){
if((i__30487_30491 < count__30486_30490)){
var ns_30492 = cljs.core._nth.call(null,chunk__30485_30489,i__30487_30491);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30492);

var G__30493 = seq__30484_30488;
var G__30494 = chunk__30485_30489;
var G__30495 = count__30486_30490;
var G__30496 = (i__30487_30491 + (1));
seq__30484_30488 = G__30493;
chunk__30485_30489 = G__30494;
count__30486_30490 = G__30495;
i__30487_30491 = G__30496;
continue;
} else {
var temp__4657__auto___30497 = cljs.core.seq.call(null,seq__30484_30488);
if(temp__4657__auto___30497){
var seq__30484_30498__$1 = temp__4657__auto___30497;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__30484_30498__$1)){
var c__26790__auto___30499 = cljs.core.chunk_first.call(null,seq__30484_30498__$1);
var G__30500 = cljs.core.chunk_rest.call(null,seq__30484_30498__$1);
var G__30501 = c__26790__auto___30499;
var G__30502 = cljs.core.count.call(null,c__26790__auto___30499);
var G__30503 = (0);
seq__30484_30488 = G__30500;
chunk__30485_30489 = G__30501;
count__30486_30490 = G__30502;
i__30487_30491 = G__30503;
continue;
} else {
var ns_30504 = cljs.core.first.call(null,seq__30484_30498__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_30504);

var G__30505 = cljs.core.next.call(null,seq__30484_30498__$1);
var G__30506 = null;
var G__30507 = (0);
var G__30508 = (0);
seq__30484_30488 = G__30505;
chunk__30485_30489 = G__30506;
count__30486_30490 = G__30507;
i__30487_30491 = G__30508;
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
var G__30509__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__30509 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__30510__i = 0, G__30510__a = new Array(arguments.length -  0);
while (G__30510__i < G__30510__a.length) {G__30510__a[G__30510__i] = arguments[G__30510__i + 0]; ++G__30510__i;}
  args = new cljs.core.IndexedSeq(G__30510__a,0);
} 
return G__30509__delegate.call(this,args);};
G__30509.cljs$lang$maxFixedArity = 0;
G__30509.cljs$lang$applyTo = (function (arglist__30511){
var args = cljs.core.seq(arglist__30511);
return G__30509__delegate(args);
});
G__30509.cljs$core$IFn$_invoke$arity$variadic = G__30509__delegate;
return G__30509;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__30512 = cljs.core._EQ_;
var expr__30513 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__30512.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__30513))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__30512,expr__30513){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__30512,expr__30513))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__30512,expr__30513){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e30515){if((e30515 instanceof Error)){
var e = e30515;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30515;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__30512,expr__30513))
} else {
if(cljs.core.truth_(pred__30512.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__30513))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__30512.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__30513))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__30512.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__30513))){
return ((function (pred__30512,expr__30513){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e30516){if((e30516 instanceof Error)){
var e = e30516;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e30516;

}
}})());
});
;})(pred__30512,expr__30513))
} else {
return ((function (pred__30512,expr__30513){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__30512,expr__30513))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__30517,callback){
var map__30520 = p__30517;
var map__30520__$1 = ((((!((map__30520 == null)))?((((map__30520.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30520.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30520):map__30520);
var file_msg = map__30520__$1;
var request_url = cljs.core.get.call(null,map__30520__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__30520,map__30520__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__30520,map__30520__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__30220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30220__auto__){
return (function (){
var f__30221__auto__ = (function (){var switch__30199__auto__ = ((function (c__30220__auto__){
return (function (state_30544){
var state_val_30545 = (state_30544[(1)]);
if((state_val_30545 === (7))){
var inst_30540 = (state_30544[(2)]);
var state_30544__$1 = state_30544;
var statearr_30546_30566 = state_30544__$1;
(statearr_30546_30566[(2)] = inst_30540);

(statearr_30546_30566[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (1))){
var state_30544__$1 = state_30544;
var statearr_30547_30567 = state_30544__$1;
(statearr_30547_30567[(2)] = null);

(statearr_30547_30567[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (4))){
var inst_30524 = (state_30544[(7)]);
var inst_30524__$1 = (state_30544[(2)]);
var state_30544__$1 = (function (){var statearr_30548 = state_30544;
(statearr_30548[(7)] = inst_30524__$1);

return statearr_30548;
})();
if(cljs.core.truth_(inst_30524__$1)){
var statearr_30549_30568 = state_30544__$1;
(statearr_30549_30568[(1)] = (5));

} else {
var statearr_30550_30569 = state_30544__$1;
(statearr_30550_30569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (6))){
var state_30544__$1 = state_30544;
var statearr_30551_30570 = state_30544__$1;
(statearr_30551_30570[(2)] = null);

(statearr_30551_30570[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (3))){
var inst_30542 = (state_30544[(2)]);
var state_30544__$1 = state_30544;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30544__$1,inst_30542);
} else {
if((state_val_30545 === (2))){
var state_30544__$1 = state_30544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30544__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_30545 === (11))){
var inst_30536 = (state_30544[(2)]);
var state_30544__$1 = (function (){var statearr_30552 = state_30544;
(statearr_30552[(8)] = inst_30536);

return statearr_30552;
})();
var statearr_30553_30571 = state_30544__$1;
(statearr_30553_30571[(2)] = null);

(statearr_30553_30571[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (9))){
var inst_30528 = (state_30544[(9)]);
var inst_30530 = (state_30544[(10)]);
var inst_30532 = inst_30530.call(null,inst_30528);
var state_30544__$1 = state_30544;
var statearr_30554_30572 = state_30544__$1;
(statearr_30554_30572[(2)] = inst_30532);

(statearr_30554_30572[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (5))){
var inst_30524 = (state_30544[(7)]);
var inst_30526 = figwheel.client.file_reloading.blocking_load.call(null,inst_30524);
var state_30544__$1 = state_30544;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30544__$1,(8),inst_30526);
} else {
if((state_val_30545 === (10))){
var inst_30528 = (state_30544[(9)]);
var inst_30534 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_30528);
var state_30544__$1 = state_30544;
var statearr_30555_30573 = state_30544__$1;
(statearr_30555_30573[(2)] = inst_30534);

(statearr_30555_30573[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30545 === (8))){
var inst_30530 = (state_30544[(10)]);
var inst_30524 = (state_30544[(7)]);
var inst_30528 = (state_30544[(2)]);
var inst_30529 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_30530__$1 = cljs.core.get.call(null,inst_30529,inst_30524);
var state_30544__$1 = (function (){var statearr_30556 = state_30544;
(statearr_30556[(9)] = inst_30528);

(statearr_30556[(10)] = inst_30530__$1);

return statearr_30556;
})();
if(cljs.core.truth_(inst_30530__$1)){
var statearr_30557_30574 = state_30544__$1;
(statearr_30557_30574[(1)] = (9));

} else {
var statearr_30558_30575 = state_30544__$1;
(statearr_30558_30575[(1)] = (10));

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
});})(c__30220__auto__))
;
return ((function (switch__30199__auto__,c__30220__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__30200__auto__ = null;
var figwheel$client$file_reloading$state_machine__30200__auto____0 = (function (){
var statearr_30562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_30562[(0)] = figwheel$client$file_reloading$state_machine__30200__auto__);

(statearr_30562[(1)] = (1));

return statearr_30562;
});
var figwheel$client$file_reloading$state_machine__30200__auto____1 = (function (state_30544){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__.call(null,state_30544);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e30563){if((e30563 instanceof Object)){
var ex__30203__auto__ = e30563;
var statearr_30564_30576 = state_30544;
(statearr_30564_30576[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30544);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30563;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30577 = state_30544;
state_30544 = G__30577;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__30200__auto__ = function(state_30544){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__30200__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__30200__auto____1.call(this,state_30544);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__30200__auto____0;
figwheel$client$file_reloading$state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__30200__auto____1;
return figwheel$client$file_reloading$state_machine__30200__auto__;
})()
;})(switch__30199__auto__,c__30220__auto__))
})();
var state__30222__auto__ = (function (){var statearr_30565 = f__30221__auto__.call(null);
(statearr_30565[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30220__auto__);

return statearr_30565;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30222__auto__);
});})(c__30220__auto__))
);

return c__30220__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__30578,callback){
var map__30581 = p__30578;
var map__30581__$1 = ((((!((map__30581 == null)))?((((map__30581.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30581.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30581):map__30581);
var file_msg = map__30581__$1;
var namespace = cljs.core.get.call(null,map__30581__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__30581,map__30581__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__30581,map__30581__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__30583){
var map__30586 = p__30583;
var map__30586__$1 = ((((!((map__30586 == null)))?((((map__30586.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30586.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30586):map__30586);
var file_msg = map__30586__$1;
var namespace = cljs.core.get.call(null,map__30586__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__30588){
var map__30591 = p__30588;
var map__30591__$1 = ((((!((map__30591 == null)))?((((map__30591.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30591.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30591):map__30591);
var file_msg = map__30591__$1;
var namespace = cljs.core.get.call(null,map__30591__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__30593,callback){
var map__30596 = p__30593;
var map__30596__$1 = ((((!((map__30596 == null)))?((((map__30596.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30596.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30596):map__30596);
var file_msg = map__30596__$1;
var request_url = cljs.core.get.call(null,map__30596__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__30596__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__30220__auto___30700 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30220__auto___30700,out){
return (function (){
var f__30221__auto__ = (function (){var switch__30199__auto__ = ((function (c__30220__auto___30700,out){
return (function (state_30682){
var state_val_30683 = (state_30682[(1)]);
if((state_val_30683 === (1))){
var inst_30656 = cljs.core.seq.call(null,files);
var inst_30657 = cljs.core.first.call(null,inst_30656);
var inst_30658 = cljs.core.next.call(null,inst_30656);
var inst_30659 = files;
var state_30682__$1 = (function (){var statearr_30684 = state_30682;
(statearr_30684[(7)] = inst_30659);

(statearr_30684[(8)] = inst_30658);

(statearr_30684[(9)] = inst_30657);

return statearr_30684;
})();
var statearr_30685_30701 = state_30682__$1;
(statearr_30685_30701[(2)] = null);

(statearr_30685_30701[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (2))){
var inst_30659 = (state_30682[(7)]);
var inst_30665 = (state_30682[(10)]);
var inst_30664 = cljs.core.seq.call(null,inst_30659);
var inst_30665__$1 = cljs.core.first.call(null,inst_30664);
var inst_30666 = cljs.core.next.call(null,inst_30664);
var inst_30667 = (inst_30665__$1 == null);
var inst_30668 = cljs.core.not.call(null,inst_30667);
var state_30682__$1 = (function (){var statearr_30686 = state_30682;
(statearr_30686[(11)] = inst_30666);

(statearr_30686[(10)] = inst_30665__$1);

return statearr_30686;
})();
if(inst_30668){
var statearr_30687_30702 = state_30682__$1;
(statearr_30687_30702[(1)] = (4));

} else {
var statearr_30688_30703 = state_30682__$1;
(statearr_30688_30703[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (3))){
var inst_30680 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_30682__$1,inst_30680);
} else {
if((state_val_30683 === (4))){
var inst_30665 = (state_30682[(10)]);
var inst_30670 = figwheel.client.file_reloading.reload_js_file.call(null,inst_30665);
var state_30682__$1 = state_30682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_30682__$1,(7),inst_30670);
} else {
if((state_val_30683 === (5))){
var inst_30676 = cljs.core.async.close_BANG_.call(null,out);
var state_30682__$1 = state_30682;
var statearr_30689_30704 = state_30682__$1;
(statearr_30689_30704[(2)] = inst_30676);

(statearr_30689_30704[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (6))){
var inst_30678 = (state_30682[(2)]);
var state_30682__$1 = state_30682;
var statearr_30690_30705 = state_30682__$1;
(statearr_30690_30705[(2)] = inst_30678);

(statearr_30690_30705[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30683 === (7))){
var inst_30666 = (state_30682[(11)]);
var inst_30672 = (state_30682[(2)]);
var inst_30673 = cljs.core.async.put_BANG_.call(null,out,inst_30672);
var inst_30659 = inst_30666;
var state_30682__$1 = (function (){var statearr_30691 = state_30682;
(statearr_30691[(7)] = inst_30659);

(statearr_30691[(12)] = inst_30673);

return statearr_30691;
})();
var statearr_30692_30706 = state_30682__$1;
(statearr_30692_30706[(2)] = null);

(statearr_30692_30706[(1)] = (2));


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
});})(c__30220__auto___30700,out))
;
return ((function (switch__30199__auto__,c__30220__auto___30700,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto____0 = (function (){
var statearr_30696 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30696[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto__);

(statearr_30696[(1)] = (1));

return statearr_30696;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto____1 = (function (state_30682){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__.call(null,state_30682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e30697){if((e30697 instanceof Object)){
var ex__30203__auto__ = e30697;
var statearr_30698_30707 = state_30682;
(statearr_30698_30707[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_30682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30697;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__30708 = state_30682;
state_30682 = G__30708;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto__ = function(state_30682){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto____1.call(this,state_30682);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__30200__auto__;
})()
;})(switch__30199__auto__,c__30220__auto___30700,out))
})();
var state__30222__auto__ = (function (){var statearr_30699 = f__30221__auto__.call(null);
(statearr_30699[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30220__auto___30700);

return statearr_30699;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30222__auto__);
});})(c__30220__auto___30700,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__30709,opts){
var map__30713 = p__30709;
var map__30713__$1 = ((((!((map__30713 == null)))?((((map__30713.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30713.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30713):map__30713);
var eval_body__$1 = cljs.core.get.call(null,map__30713__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__30713__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e30715){var e = e30715;
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
return (function (p1__30716_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30716_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__30725){
var vec__30726 = p__30725;
var k = cljs.core.nth.call(null,vec__30726,(0),null);
var v = cljs.core.nth.call(null,vec__30726,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__30729){
var vec__30730 = p__30729;
var k = cljs.core.nth.call(null,vec__30730,(0),null);
var v = cljs.core.nth.call(null,vec__30730,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__30736,p__30737){
var map__30984 = p__30736;
var map__30984__$1 = ((((!((map__30984 == null)))?((((map__30984.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30984.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30984):map__30984);
var opts = map__30984__$1;
var before_jsload = cljs.core.get.call(null,map__30984__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__30984__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__30984__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__30985 = p__30737;
var map__30985__$1 = ((((!((map__30985 == null)))?((((map__30985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__30985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__30985):map__30985);
var msg = map__30985__$1;
var files = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__30985__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__30220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__30221__auto__ = (function (){var switch__30199__auto__ = ((function (c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_31138){
var state_val_31139 = (state_31138[(1)]);
if((state_val_31139 === (7))){
var inst_31002 = (state_31138[(7)]);
var inst_31000 = (state_31138[(8)]);
var inst_31001 = (state_31138[(9)]);
var inst_30999 = (state_31138[(10)]);
var inst_31007 = cljs.core._nth.call(null,inst_31000,inst_31002);
var inst_31008 = figwheel.client.file_reloading.eval_body.call(null,inst_31007,opts);
var inst_31009 = (inst_31002 + (1));
var tmp31140 = inst_31000;
var tmp31141 = inst_31001;
var tmp31142 = inst_30999;
var inst_30999__$1 = tmp31142;
var inst_31000__$1 = tmp31140;
var inst_31001__$1 = tmp31141;
var inst_31002__$1 = inst_31009;
var state_31138__$1 = (function (){var statearr_31143 = state_31138;
(statearr_31143[(7)] = inst_31002__$1);

(statearr_31143[(8)] = inst_31000__$1);

(statearr_31143[(11)] = inst_31008);

(statearr_31143[(9)] = inst_31001__$1);

(statearr_31143[(10)] = inst_30999__$1);

return statearr_31143;
})();
var statearr_31144_31230 = state_31138__$1;
(statearr_31144_31230[(2)] = null);

(statearr_31144_31230[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (20))){
var inst_31042 = (state_31138[(12)]);
var inst_31050 = figwheel.client.file_reloading.sort_files.call(null,inst_31042);
var state_31138__$1 = state_31138;
var statearr_31145_31231 = state_31138__$1;
(statearr_31145_31231[(2)] = inst_31050);

(statearr_31145_31231[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (27))){
var state_31138__$1 = state_31138;
var statearr_31146_31232 = state_31138__$1;
(statearr_31146_31232[(2)] = null);

(statearr_31146_31232[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (1))){
var inst_30991 = (state_31138[(13)]);
var inst_30988 = before_jsload.call(null,files);
var inst_30989 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_30990 = (function (){return ((function (inst_30991,inst_30988,inst_30989,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30733_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30733_SHARP_);
});
;})(inst_30991,inst_30988,inst_30989,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_30991__$1 = cljs.core.filter.call(null,inst_30990,files);
var inst_30992 = cljs.core.not_empty.call(null,inst_30991__$1);
var state_31138__$1 = (function (){var statearr_31147 = state_31138;
(statearr_31147[(14)] = inst_30989);

(statearr_31147[(13)] = inst_30991__$1);

(statearr_31147[(15)] = inst_30988);

return statearr_31147;
})();
if(cljs.core.truth_(inst_30992)){
var statearr_31148_31233 = state_31138__$1;
(statearr_31148_31233[(1)] = (2));

} else {
var statearr_31149_31234 = state_31138__$1;
(statearr_31149_31234[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (24))){
var state_31138__$1 = state_31138;
var statearr_31150_31235 = state_31138__$1;
(statearr_31150_31235[(2)] = null);

(statearr_31150_31235[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (39))){
var inst_31092 = (state_31138[(16)]);
var state_31138__$1 = state_31138;
var statearr_31151_31236 = state_31138__$1;
(statearr_31151_31236[(2)] = inst_31092);

(statearr_31151_31236[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (46))){
var inst_31133 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31152_31237 = state_31138__$1;
(statearr_31152_31237[(2)] = inst_31133);

(statearr_31152_31237[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (4))){
var inst_31036 = (state_31138[(2)]);
var inst_31037 = cljs.core.List.EMPTY;
var inst_31038 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_31037);
var inst_31039 = (function (){return ((function (inst_31036,inst_31037,inst_31038,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30734_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__30734_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__30734_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__30734_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_31036,inst_31037,inst_31038,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31040 = cljs.core.filter.call(null,inst_31039,files);
var inst_31041 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_31042 = cljs.core.concat.call(null,inst_31040,inst_31041);
var state_31138__$1 = (function (){var statearr_31153 = state_31138;
(statearr_31153[(17)] = inst_31038);

(statearr_31153[(18)] = inst_31036);

(statearr_31153[(12)] = inst_31042);

return statearr_31153;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_31154_31238 = state_31138__$1;
(statearr_31154_31238[(1)] = (16));

} else {
var statearr_31155_31239 = state_31138__$1;
(statearr_31155_31239[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (15))){
var inst_31026 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31156_31240 = state_31138__$1;
(statearr_31156_31240[(2)] = inst_31026);

(statearr_31156_31240[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (21))){
var inst_31052 = (state_31138[(19)]);
var inst_31052__$1 = (state_31138[(2)]);
var inst_31053 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_31052__$1);
var state_31138__$1 = (function (){var statearr_31157 = state_31138;
(statearr_31157[(19)] = inst_31052__$1);

return statearr_31157;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_31138__$1,(22),inst_31053);
} else {
if((state_val_31139 === (31))){
var inst_31136 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_31138__$1,inst_31136);
} else {
if((state_val_31139 === (32))){
var inst_31092 = (state_31138[(16)]);
var inst_31097 = inst_31092.cljs$lang$protocol_mask$partition0$;
var inst_31098 = (inst_31097 & (64));
var inst_31099 = inst_31092.cljs$core$ISeq$;
var inst_31100 = (inst_31098) || (inst_31099);
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31100)){
var statearr_31158_31241 = state_31138__$1;
(statearr_31158_31241[(1)] = (35));

} else {
var statearr_31159_31242 = state_31138__$1;
(statearr_31159_31242[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (40))){
var inst_31113 = (state_31138[(20)]);
var inst_31112 = (state_31138[(2)]);
var inst_31113__$1 = cljs.core.get.call(null,inst_31112,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_31114 = cljs.core.get.call(null,inst_31112,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_31115 = cljs.core.not_empty.call(null,inst_31113__$1);
var state_31138__$1 = (function (){var statearr_31160 = state_31138;
(statearr_31160[(21)] = inst_31114);

(statearr_31160[(20)] = inst_31113__$1);

return statearr_31160;
})();
if(cljs.core.truth_(inst_31115)){
var statearr_31161_31243 = state_31138__$1;
(statearr_31161_31243[(1)] = (41));

} else {
var statearr_31162_31244 = state_31138__$1;
(statearr_31162_31244[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (33))){
var state_31138__$1 = state_31138;
var statearr_31163_31245 = state_31138__$1;
(statearr_31163_31245[(2)] = false);

(statearr_31163_31245[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (13))){
var inst_31012 = (state_31138[(22)]);
var inst_31016 = cljs.core.chunk_first.call(null,inst_31012);
var inst_31017 = cljs.core.chunk_rest.call(null,inst_31012);
var inst_31018 = cljs.core.count.call(null,inst_31016);
var inst_30999 = inst_31017;
var inst_31000 = inst_31016;
var inst_31001 = inst_31018;
var inst_31002 = (0);
var state_31138__$1 = (function (){var statearr_31164 = state_31138;
(statearr_31164[(7)] = inst_31002);

(statearr_31164[(8)] = inst_31000);

(statearr_31164[(9)] = inst_31001);

(statearr_31164[(10)] = inst_30999);

return statearr_31164;
})();
var statearr_31165_31246 = state_31138__$1;
(statearr_31165_31246[(2)] = null);

(statearr_31165_31246[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (22))){
var inst_31060 = (state_31138[(23)]);
var inst_31052 = (state_31138[(19)]);
var inst_31056 = (state_31138[(24)]);
var inst_31055 = (state_31138[(25)]);
var inst_31055__$1 = (state_31138[(2)]);
var inst_31056__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31055__$1);
var inst_31057 = (function (){var all_files = inst_31052;
var res_SINGLEQUOTE_ = inst_31055__$1;
var res = inst_31056__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_31060,inst_31052,inst_31056,inst_31055,inst_31055__$1,inst_31056__$1,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__30735_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__30735_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_31060,inst_31052,inst_31056,inst_31055,inst_31055__$1,inst_31056__$1,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31058 = cljs.core.filter.call(null,inst_31057,inst_31055__$1);
var inst_31059 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_31060__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_31059);
var inst_31061 = cljs.core.not_empty.call(null,inst_31060__$1);
var state_31138__$1 = (function (){var statearr_31166 = state_31138;
(statearr_31166[(26)] = inst_31058);

(statearr_31166[(23)] = inst_31060__$1);

(statearr_31166[(24)] = inst_31056__$1);

(statearr_31166[(25)] = inst_31055__$1);

return statearr_31166;
})();
if(cljs.core.truth_(inst_31061)){
var statearr_31167_31247 = state_31138__$1;
(statearr_31167_31247[(1)] = (23));

} else {
var statearr_31168_31248 = state_31138__$1;
(statearr_31168_31248[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (36))){
var state_31138__$1 = state_31138;
var statearr_31169_31249 = state_31138__$1;
(statearr_31169_31249[(2)] = false);

(statearr_31169_31249[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (41))){
var inst_31113 = (state_31138[(20)]);
var inst_31117 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_31118 = cljs.core.map.call(null,inst_31117,inst_31113);
var inst_31119 = cljs.core.pr_str.call(null,inst_31118);
var inst_31120 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_31119)].join('');
var inst_31121 = figwheel.client.utils.log.call(null,inst_31120);
var state_31138__$1 = state_31138;
var statearr_31170_31250 = state_31138__$1;
(statearr_31170_31250[(2)] = inst_31121);

(statearr_31170_31250[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (43))){
var inst_31114 = (state_31138[(21)]);
var inst_31124 = (state_31138[(2)]);
var inst_31125 = cljs.core.not_empty.call(null,inst_31114);
var state_31138__$1 = (function (){var statearr_31171 = state_31138;
(statearr_31171[(27)] = inst_31124);

return statearr_31171;
})();
if(cljs.core.truth_(inst_31125)){
var statearr_31172_31251 = state_31138__$1;
(statearr_31172_31251[(1)] = (44));

} else {
var statearr_31173_31252 = state_31138__$1;
(statearr_31173_31252[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (29))){
var inst_31058 = (state_31138[(26)]);
var inst_31092 = (state_31138[(16)]);
var inst_31060 = (state_31138[(23)]);
var inst_31052 = (state_31138[(19)]);
var inst_31056 = (state_31138[(24)]);
var inst_31055 = (state_31138[(25)]);
var inst_31088 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_31091 = (function (){var all_files = inst_31052;
var res_SINGLEQUOTE_ = inst_31055;
var res = inst_31056;
var files_not_loaded = inst_31058;
var dependencies_that_loaded = inst_31060;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31092,inst_31060,inst_31052,inst_31056,inst_31055,inst_31088,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31090){
var map__31174 = p__31090;
var map__31174__$1 = ((((!((map__31174 == null)))?((((map__31174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31174):map__31174);
var namespace = cljs.core.get.call(null,map__31174__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31092,inst_31060,inst_31052,inst_31056,inst_31055,inst_31088,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31092__$1 = cljs.core.group_by.call(null,inst_31091,inst_31058);
var inst_31094 = (inst_31092__$1 == null);
var inst_31095 = cljs.core.not.call(null,inst_31094);
var state_31138__$1 = (function (){var statearr_31176 = state_31138;
(statearr_31176[(16)] = inst_31092__$1);

(statearr_31176[(28)] = inst_31088);

return statearr_31176;
})();
if(inst_31095){
var statearr_31177_31253 = state_31138__$1;
(statearr_31177_31253[(1)] = (32));

} else {
var statearr_31178_31254 = state_31138__$1;
(statearr_31178_31254[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (44))){
var inst_31114 = (state_31138[(21)]);
var inst_31127 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_31114);
var inst_31128 = cljs.core.pr_str.call(null,inst_31127);
var inst_31129 = [cljs.core.str("not required: "),cljs.core.str(inst_31128)].join('');
var inst_31130 = figwheel.client.utils.log.call(null,inst_31129);
var state_31138__$1 = state_31138;
var statearr_31179_31255 = state_31138__$1;
(statearr_31179_31255[(2)] = inst_31130);

(statearr_31179_31255[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (6))){
var inst_31033 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31180_31256 = state_31138__$1;
(statearr_31180_31256[(2)] = inst_31033);

(statearr_31180_31256[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (28))){
var inst_31058 = (state_31138[(26)]);
var inst_31085 = (state_31138[(2)]);
var inst_31086 = cljs.core.not_empty.call(null,inst_31058);
var state_31138__$1 = (function (){var statearr_31181 = state_31138;
(statearr_31181[(29)] = inst_31085);

return statearr_31181;
})();
if(cljs.core.truth_(inst_31086)){
var statearr_31182_31257 = state_31138__$1;
(statearr_31182_31257[(1)] = (29));

} else {
var statearr_31183_31258 = state_31138__$1;
(statearr_31183_31258[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (25))){
var inst_31056 = (state_31138[(24)]);
var inst_31072 = (state_31138[(2)]);
var inst_31073 = cljs.core.not_empty.call(null,inst_31056);
var state_31138__$1 = (function (){var statearr_31184 = state_31138;
(statearr_31184[(30)] = inst_31072);

return statearr_31184;
})();
if(cljs.core.truth_(inst_31073)){
var statearr_31185_31259 = state_31138__$1;
(statearr_31185_31259[(1)] = (26));

} else {
var statearr_31186_31260 = state_31138__$1;
(statearr_31186_31260[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (34))){
var inst_31107 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31107)){
var statearr_31187_31261 = state_31138__$1;
(statearr_31187_31261[(1)] = (38));

} else {
var statearr_31188_31262 = state_31138__$1;
(statearr_31188_31262[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (17))){
var state_31138__$1 = state_31138;
var statearr_31189_31263 = state_31138__$1;
(statearr_31189_31263[(2)] = recompile_dependents);

(statearr_31189_31263[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (3))){
var state_31138__$1 = state_31138;
var statearr_31190_31264 = state_31138__$1;
(statearr_31190_31264[(2)] = null);

(statearr_31190_31264[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (12))){
var inst_31029 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31191_31265 = state_31138__$1;
(statearr_31191_31265[(2)] = inst_31029);

(statearr_31191_31265[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (2))){
var inst_30991 = (state_31138[(13)]);
var inst_30998 = cljs.core.seq.call(null,inst_30991);
var inst_30999 = inst_30998;
var inst_31000 = null;
var inst_31001 = (0);
var inst_31002 = (0);
var state_31138__$1 = (function (){var statearr_31192 = state_31138;
(statearr_31192[(7)] = inst_31002);

(statearr_31192[(8)] = inst_31000);

(statearr_31192[(9)] = inst_31001);

(statearr_31192[(10)] = inst_30999);

return statearr_31192;
})();
var statearr_31193_31266 = state_31138__$1;
(statearr_31193_31266[(2)] = null);

(statearr_31193_31266[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (23))){
var inst_31058 = (state_31138[(26)]);
var inst_31060 = (state_31138[(23)]);
var inst_31052 = (state_31138[(19)]);
var inst_31056 = (state_31138[(24)]);
var inst_31055 = (state_31138[(25)]);
var inst_31063 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_31065 = (function (){var all_files = inst_31052;
var res_SINGLEQUOTE_ = inst_31055;
var res = inst_31056;
var files_not_loaded = inst_31058;
var dependencies_that_loaded = inst_31060;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31060,inst_31052,inst_31056,inst_31055,inst_31063,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31064){
var map__31194 = p__31064;
var map__31194__$1 = ((((!((map__31194 == null)))?((((map__31194.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31194.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31194):map__31194);
var request_url = cljs.core.get.call(null,map__31194__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31060,inst_31052,inst_31056,inst_31055,inst_31063,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31066 = cljs.core.reverse.call(null,inst_31060);
var inst_31067 = cljs.core.map.call(null,inst_31065,inst_31066);
var inst_31068 = cljs.core.pr_str.call(null,inst_31067);
var inst_31069 = figwheel.client.utils.log.call(null,inst_31068);
var state_31138__$1 = (function (){var statearr_31196 = state_31138;
(statearr_31196[(31)] = inst_31063);

return statearr_31196;
})();
var statearr_31197_31267 = state_31138__$1;
(statearr_31197_31267[(2)] = inst_31069);

(statearr_31197_31267[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (35))){
var state_31138__$1 = state_31138;
var statearr_31198_31268 = state_31138__$1;
(statearr_31198_31268[(2)] = true);

(statearr_31198_31268[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (19))){
var inst_31042 = (state_31138[(12)]);
var inst_31048 = figwheel.client.file_reloading.expand_files.call(null,inst_31042);
var state_31138__$1 = state_31138;
var statearr_31199_31269 = state_31138__$1;
(statearr_31199_31269[(2)] = inst_31048);

(statearr_31199_31269[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (11))){
var state_31138__$1 = state_31138;
var statearr_31200_31270 = state_31138__$1;
(statearr_31200_31270[(2)] = null);

(statearr_31200_31270[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (9))){
var inst_31031 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31201_31271 = state_31138__$1;
(statearr_31201_31271[(2)] = inst_31031);

(statearr_31201_31271[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (5))){
var inst_31002 = (state_31138[(7)]);
var inst_31001 = (state_31138[(9)]);
var inst_31004 = (inst_31002 < inst_31001);
var inst_31005 = inst_31004;
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31005)){
var statearr_31202_31272 = state_31138__$1;
(statearr_31202_31272[(1)] = (7));

} else {
var statearr_31203_31273 = state_31138__$1;
(statearr_31203_31273[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (14))){
var inst_31012 = (state_31138[(22)]);
var inst_31021 = cljs.core.first.call(null,inst_31012);
var inst_31022 = figwheel.client.file_reloading.eval_body.call(null,inst_31021,opts);
var inst_31023 = cljs.core.next.call(null,inst_31012);
var inst_30999 = inst_31023;
var inst_31000 = null;
var inst_31001 = (0);
var inst_31002 = (0);
var state_31138__$1 = (function (){var statearr_31204 = state_31138;
(statearr_31204[(7)] = inst_31002);

(statearr_31204[(8)] = inst_31000);

(statearr_31204[(32)] = inst_31022);

(statearr_31204[(9)] = inst_31001);

(statearr_31204[(10)] = inst_30999);

return statearr_31204;
})();
var statearr_31205_31274 = state_31138__$1;
(statearr_31205_31274[(2)] = null);

(statearr_31205_31274[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (45))){
var state_31138__$1 = state_31138;
var statearr_31206_31275 = state_31138__$1;
(statearr_31206_31275[(2)] = null);

(statearr_31206_31275[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (26))){
var inst_31058 = (state_31138[(26)]);
var inst_31060 = (state_31138[(23)]);
var inst_31052 = (state_31138[(19)]);
var inst_31056 = (state_31138[(24)]);
var inst_31055 = (state_31138[(25)]);
var inst_31075 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_31077 = (function (){var all_files = inst_31052;
var res_SINGLEQUOTE_ = inst_31055;
var res = inst_31056;
var files_not_loaded = inst_31058;
var dependencies_that_loaded = inst_31060;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31060,inst_31052,inst_31056,inst_31055,inst_31075,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__31076){
var map__31207 = p__31076;
var map__31207__$1 = ((((!((map__31207 == null)))?((((map__31207.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31207.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31207):map__31207);
var namespace = cljs.core.get.call(null,map__31207__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__31207__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31060,inst_31052,inst_31056,inst_31055,inst_31075,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31078 = cljs.core.map.call(null,inst_31077,inst_31056);
var inst_31079 = cljs.core.pr_str.call(null,inst_31078);
var inst_31080 = figwheel.client.utils.log.call(null,inst_31079);
var inst_31081 = (function (){var all_files = inst_31052;
var res_SINGLEQUOTE_ = inst_31055;
var res = inst_31056;
var files_not_loaded = inst_31058;
var dependencies_that_loaded = inst_31060;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31060,inst_31052,inst_31056,inst_31055,inst_31075,inst_31077,inst_31078,inst_31079,inst_31080,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_31058,inst_31060,inst_31052,inst_31056,inst_31055,inst_31075,inst_31077,inst_31078,inst_31079,inst_31080,state_val_31139,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_31082 = setTimeout(inst_31081,(10));
var state_31138__$1 = (function (){var statearr_31209 = state_31138;
(statearr_31209[(33)] = inst_31075);

(statearr_31209[(34)] = inst_31080);

return statearr_31209;
})();
var statearr_31210_31276 = state_31138__$1;
(statearr_31210_31276[(2)] = inst_31082);

(statearr_31210_31276[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (16))){
var state_31138__$1 = state_31138;
var statearr_31211_31277 = state_31138__$1;
(statearr_31211_31277[(2)] = reload_dependents);

(statearr_31211_31277[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (38))){
var inst_31092 = (state_31138[(16)]);
var inst_31109 = cljs.core.apply.call(null,cljs.core.hash_map,inst_31092);
var state_31138__$1 = state_31138;
var statearr_31212_31278 = state_31138__$1;
(statearr_31212_31278[(2)] = inst_31109);

(statearr_31212_31278[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (30))){
var state_31138__$1 = state_31138;
var statearr_31213_31279 = state_31138__$1;
(statearr_31213_31279[(2)] = null);

(statearr_31213_31279[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (10))){
var inst_31012 = (state_31138[(22)]);
var inst_31014 = cljs.core.chunked_seq_QMARK_.call(null,inst_31012);
var state_31138__$1 = state_31138;
if(inst_31014){
var statearr_31214_31280 = state_31138__$1;
(statearr_31214_31280[(1)] = (13));

} else {
var statearr_31215_31281 = state_31138__$1;
(statearr_31215_31281[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (18))){
var inst_31046 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
if(cljs.core.truth_(inst_31046)){
var statearr_31216_31282 = state_31138__$1;
(statearr_31216_31282[(1)] = (19));

} else {
var statearr_31217_31283 = state_31138__$1;
(statearr_31217_31283[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (42))){
var state_31138__$1 = state_31138;
var statearr_31218_31284 = state_31138__$1;
(statearr_31218_31284[(2)] = null);

(statearr_31218_31284[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (37))){
var inst_31104 = (state_31138[(2)]);
var state_31138__$1 = state_31138;
var statearr_31219_31285 = state_31138__$1;
(statearr_31219_31285[(2)] = inst_31104);

(statearr_31219_31285[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31139 === (8))){
var inst_31012 = (state_31138[(22)]);
var inst_30999 = (state_31138[(10)]);
var inst_31012__$1 = cljs.core.seq.call(null,inst_30999);
var state_31138__$1 = (function (){var statearr_31220 = state_31138;
(statearr_31220[(22)] = inst_31012__$1);

return statearr_31220;
})();
if(inst_31012__$1){
var statearr_31221_31286 = state_31138__$1;
(statearr_31221_31286[(1)] = (10));

} else {
var statearr_31222_31287 = state_31138__$1;
(statearr_31222_31287[(1)] = (11));

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
});})(c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__30199__auto__,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto____0 = (function (){
var statearr_31226 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31226[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto__);

(statearr_31226[(1)] = (1));

return statearr_31226;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto____1 = (function (state_31138){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__.call(null,state_31138);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e31227){if((e31227 instanceof Object)){
var ex__30203__auto__ = e31227;
var statearr_31228_31288 = state_31138;
(statearr_31228_31288[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_31138);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31227;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__31289 = state_31138;
state_31138 = G__31289;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto__ = function(state_31138){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto____1.call(this,state_31138);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__30200__auto__;
})()
;})(switch__30199__auto__,c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__30222__auto__ = (function (){var statearr_31229 = f__30221__auto__.call(null);
(statearr_31229[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30220__auto__);

return statearr_31229;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30222__auto__);
});})(c__30220__auto__,map__30984,map__30984__$1,opts,before_jsload,on_jsload,reload_dependents,map__30985,map__30985__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__30220__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__31292,link){
var map__31295 = p__31292;
var map__31295__$1 = ((((!((map__31295 == null)))?((((map__31295.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31295.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31295):map__31295);
var file = cljs.core.get.call(null,map__31295__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__31295,map__31295__$1,file){
return (function (p1__31290_SHARP_,p2__31291_SHARP_){
if(cljs.core._EQ_.call(null,p1__31290_SHARP_,p2__31291_SHARP_)){
return p1__31290_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__31295,map__31295__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__31301){
var map__31302 = p__31301;
var map__31302__$1 = ((((!((map__31302 == null)))?((((map__31302.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31302.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31302):map__31302);
var match_length = cljs.core.get.call(null,map__31302__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__31302__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__31297_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__31297_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__31304_SHARP_,p2__31305_SHARP_){
return cljs.core.assoc.call(null,p1__31304_SHARP_,cljs.core.get.call(null,p2__31305_SHARP_,key),p2__31305_SHARP_);
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
var loaded_f_datas_31306 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_31306);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_31306);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__31307,p__31308){
var map__31313 = p__31307;
var map__31313__$1 = ((((!((map__31313 == null)))?((((map__31313.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31313.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31313):map__31313);
var on_cssload = cljs.core.get.call(null,map__31313__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__31314 = p__31308;
var map__31314__$1 = ((((!((map__31314 == null)))?((((map__31314.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31314.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31314):map__31314);
var files_msg = map__31314__$1;
var files = cljs.core.get.call(null,map__31314__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1499366856654