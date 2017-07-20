// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
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
var or__28569__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__28569__auto__){
return or__28569__auto__;
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
var or__28569__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 10, ["svgpan.SvgPan",null,"far.out",null,"cljs.nodejs",null,"testDep.bar",null,"someprotopackage.TestPackageTypes",null,"goog",null,"an.existing.path",null,"cljs.core",null,"ns",null,"dup.base",null], null), null).call(null,name);
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return cljs.core.some.call(null,cljs.core.partial.call(null,goog.string.startsWith,name),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["goog.","cljs.","clojure.","fake.","proto2."], null));
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__90260_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__90260_SHARP_));
}),goog.object.getKeys((goog.dependencies_.requires[figwheel.client.file_reloading.name__GT_path.call(null,ns)]))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
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
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
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
var seq__90261 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__90262 = null;
var count__90263 = (0);
var i__90264 = (0);
while(true){
if((i__90264 < count__90263)){
var n = cljs.core._nth.call(null,chunk__90262,i__90264);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__90265 = seq__90261;
var G__90266 = chunk__90262;
var G__90267 = count__90263;
var G__90268 = (i__90264 + (1));
seq__90261 = G__90265;
chunk__90262 = G__90266;
count__90263 = G__90267;
i__90264 = G__90268;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__90261);
if(temp__5278__auto__){
var seq__90261__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90261__$1)){
var c__29481__auto__ = cljs.core.chunk_first.call(null,seq__90261__$1);
var G__90269 = cljs.core.chunk_rest.call(null,seq__90261__$1);
var G__90270 = c__29481__auto__;
var G__90271 = cljs.core.count.call(null,c__29481__auto__);
var G__90272 = (0);
seq__90261 = G__90269;
chunk__90262 = G__90270;
count__90263 = G__90271;
i__90264 = G__90272;
continue;
} else {
var n = cljs.core.first.call(null,seq__90261__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__90273 = cljs.core.next.call(null,seq__90261__$1);
var G__90274 = null;
var G__90275 = (0);
var G__90276 = (0);
seq__90261 = G__90273;
chunk__90262 = G__90274;
count__90263 = G__90275;
i__90264 = G__90276;
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

var seq__90286_90294 = cljs.core.seq.call(null,deps);
var chunk__90287_90295 = null;
var count__90288_90296 = (0);
var i__90289_90297 = (0);
while(true){
if((i__90289_90297 < count__90288_90296)){
var dep_90298 = cljs.core._nth.call(null,chunk__90287_90295,i__90289_90297);
topo_sort_helper_STAR_.call(null,dep_90298,(depth + (1)),state);

var G__90299 = seq__90286_90294;
var G__90300 = chunk__90287_90295;
var G__90301 = count__90288_90296;
var G__90302 = (i__90289_90297 + (1));
seq__90286_90294 = G__90299;
chunk__90287_90295 = G__90300;
count__90288_90296 = G__90301;
i__90289_90297 = G__90302;
continue;
} else {
var temp__5278__auto___90303 = cljs.core.seq.call(null,seq__90286_90294);
if(temp__5278__auto___90303){
var seq__90286_90304__$1 = temp__5278__auto___90303;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90286_90304__$1)){
var c__29481__auto___90305 = cljs.core.chunk_first.call(null,seq__90286_90304__$1);
var G__90306 = cljs.core.chunk_rest.call(null,seq__90286_90304__$1);
var G__90307 = c__29481__auto___90305;
var G__90308 = cljs.core.count.call(null,c__29481__auto___90305);
var G__90309 = (0);
seq__90286_90294 = G__90306;
chunk__90287_90295 = G__90307;
count__90288_90296 = G__90308;
i__90289_90297 = G__90309;
continue;
} else {
var dep_90310 = cljs.core.first.call(null,seq__90286_90304__$1);
topo_sort_helper_STAR_.call(null,dep_90310,(depth + (1)),state);

var G__90311 = cljs.core.next.call(null,seq__90286_90304__$1);
var G__90312 = null;
var G__90313 = (0);
var G__90314 = (0);
seq__90286_90294 = G__90311;
chunk__90287_90295 = G__90312;
count__90288_90296 = G__90313;
i__90289_90297 = G__90314;
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
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__90290){
var vec__90291 = p__90290;
var seq__90292 = cljs.core.seq.call(null,vec__90291);
var first__90293 = cljs.core.first.call(null,seq__90292);
var seq__90292__$1 = cljs.core.next.call(null,seq__90292);
var x = first__90293;
var xs = seq__90292__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__90291,seq__90292,first__90293,seq__90292__$1,x,xs,get_deps__$1){
return (function (p1__90277_SHARP_){
return clojure.set.difference.call(null,p1__90277_SHARP_,x);
});})(vec__90291,seq__90292,first__90293,seq__90292__$1,x,xs,get_deps__$1))
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

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__90315 = cljs.core.seq.call(null,provides);
var chunk__90316 = null;
var count__90317 = (0);
var i__90318 = (0);
while(true){
if((i__90318 < count__90317)){
var prov = cljs.core._nth.call(null,chunk__90316,i__90318);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__90319_90327 = cljs.core.seq.call(null,requires);
var chunk__90320_90328 = null;
var count__90321_90329 = (0);
var i__90322_90330 = (0);
while(true){
if((i__90322_90330 < count__90321_90329)){
var req_90331 = cljs.core._nth.call(null,chunk__90320_90328,i__90322_90330);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90331,prov);

var G__90332 = seq__90319_90327;
var G__90333 = chunk__90320_90328;
var G__90334 = count__90321_90329;
var G__90335 = (i__90322_90330 + (1));
seq__90319_90327 = G__90332;
chunk__90320_90328 = G__90333;
count__90321_90329 = G__90334;
i__90322_90330 = G__90335;
continue;
} else {
var temp__5278__auto___90336 = cljs.core.seq.call(null,seq__90319_90327);
if(temp__5278__auto___90336){
var seq__90319_90337__$1 = temp__5278__auto___90336;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90319_90337__$1)){
var c__29481__auto___90338 = cljs.core.chunk_first.call(null,seq__90319_90337__$1);
var G__90339 = cljs.core.chunk_rest.call(null,seq__90319_90337__$1);
var G__90340 = c__29481__auto___90338;
var G__90341 = cljs.core.count.call(null,c__29481__auto___90338);
var G__90342 = (0);
seq__90319_90327 = G__90339;
chunk__90320_90328 = G__90340;
count__90321_90329 = G__90341;
i__90322_90330 = G__90342;
continue;
} else {
var req_90343 = cljs.core.first.call(null,seq__90319_90337__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90343,prov);

var G__90344 = cljs.core.next.call(null,seq__90319_90337__$1);
var G__90345 = null;
var G__90346 = (0);
var G__90347 = (0);
seq__90319_90327 = G__90344;
chunk__90320_90328 = G__90345;
count__90321_90329 = G__90346;
i__90322_90330 = G__90347;
continue;
}
} else {
}
}
break;
}

var G__90348 = seq__90315;
var G__90349 = chunk__90316;
var G__90350 = count__90317;
var G__90351 = (i__90318 + (1));
seq__90315 = G__90348;
chunk__90316 = G__90349;
count__90317 = G__90350;
i__90318 = G__90351;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__90315);
if(temp__5278__auto__){
var seq__90315__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90315__$1)){
var c__29481__auto__ = cljs.core.chunk_first.call(null,seq__90315__$1);
var G__90352 = cljs.core.chunk_rest.call(null,seq__90315__$1);
var G__90353 = c__29481__auto__;
var G__90354 = cljs.core.count.call(null,c__29481__auto__);
var G__90355 = (0);
seq__90315 = G__90352;
chunk__90316 = G__90353;
count__90317 = G__90354;
i__90318 = G__90355;
continue;
} else {
var prov = cljs.core.first.call(null,seq__90315__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__90323_90356 = cljs.core.seq.call(null,requires);
var chunk__90324_90357 = null;
var count__90325_90358 = (0);
var i__90326_90359 = (0);
while(true){
if((i__90326_90359 < count__90325_90358)){
var req_90360 = cljs.core._nth.call(null,chunk__90324_90357,i__90326_90359);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90360,prov);

var G__90361 = seq__90323_90356;
var G__90362 = chunk__90324_90357;
var G__90363 = count__90325_90358;
var G__90364 = (i__90326_90359 + (1));
seq__90323_90356 = G__90361;
chunk__90324_90357 = G__90362;
count__90325_90358 = G__90363;
i__90326_90359 = G__90364;
continue;
} else {
var temp__5278__auto___90365__$1 = cljs.core.seq.call(null,seq__90323_90356);
if(temp__5278__auto___90365__$1){
var seq__90323_90366__$1 = temp__5278__auto___90365__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90323_90366__$1)){
var c__29481__auto___90367 = cljs.core.chunk_first.call(null,seq__90323_90366__$1);
var G__90368 = cljs.core.chunk_rest.call(null,seq__90323_90366__$1);
var G__90369 = c__29481__auto___90367;
var G__90370 = cljs.core.count.call(null,c__29481__auto___90367);
var G__90371 = (0);
seq__90323_90356 = G__90368;
chunk__90324_90357 = G__90369;
count__90325_90358 = G__90370;
i__90326_90359 = G__90371;
continue;
} else {
var req_90372 = cljs.core.first.call(null,seq__90323_90366__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_90372,prov);

var G__90373 = cljs.core.next.call(null,seq__90323_90366__$1);
var G__90374 = null;
var G__90375 = (0);
var G__90376 = (0);
seq__90323_90356 = G__90373;
chunk__90324_90357 = G__90374;
count__90325_90358 = G__90375;
i__90326_90359 = G__90376;
continue;
}
} else {
}
}
break;
}

var G__90377 = cljs.core.next.call(null,seq__90315__$1);
var G__90378 = null;
var G__90379 = (0);
var G__90380 = (0);
seq__90315 = G__90377;
chunk__90316 = G__90378;
count__90317 = G__90379;
i__90318 = G__90380;
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
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__90381_90385 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__90382_90386 = null;
var count__90383_90387 = (0);
var i__90384_90388 = (0);
while(true){
if((i__90384_90388 < count__90383_90387)){
var ns_90389 = cljs.core._nth.call(null,chunk__90382_90386,i__90384_90388);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_90389);

var G__90390 = seq__90381_90385;
var G__90391 = chunk__90382_90386;
var G__90392 = count__90383_90387;
var G__90393 = (i__90384_90388 + (1));
seq__90381_90385 = G__90390;
chunk__90382_90386 = G__90391;
count__90383_90387 = G__90392;
i__90384_90388 = G__90393;
continue;
} else {
var temp__5278__auto___90394 = cljs.core.seq.call(null,seq__90381_90385);
if(temp__5278__auto___90394){
var seq__90381_90395__$1 = temp__5278__auto___90394;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90381_90395__$1)){
var c__29481__auto___90396 = cljs.core.chunk_first.call(null,seq__90381_90395__$1);
var G__90397 = cljs.core.chunk_rest.call(null,seq__90381_90395__$1);
var G__90398 = c__29481__auto___90396;
var G__90399 = cljs.core.count.call(null,c__29481__auto___90396);
var G__90400 = (0);
seq__90381_90385 = G__90397;
chunk__90382_90386 = G__90398;
count__90383_90387 = G__90399;
i__90384_90388 = G__90400;
continue;
} else {
var ns_90401 = cljs.core.first.call(null,seq__90381_90395__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_90401);

var G__90402 = cljs.core.next.call(null,seq__90381_90395__$1);
var G__90403 = null;
var G__90404 = (0);
var G__90405 = (0);
seq__90381_90385 = G__90402;
chunk__90382_90386 = G__90403;
count__90383_90387 = G__90404;
i__90384_90388 = G__90405;
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
goog.require_figwheel_backup_ = (function (){var or__28569__auto__ = goog.require__;
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
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
var G__90406__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__90406 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__90407__i = 0, G__90407__a = new Array(arguments.length -  0);
while (G__90407__i < G__90407__a.length) {G__90407__a[G__90407__i] = arguments[G__90407__i + 0]; ++G__90407__i;}
  args = new cljs.core.IndexedSeq(G__90407__a,0,null);
} 
return G__90406__delegate.call(this,args);};
G__90406.cljs$lang$maxFixedArity = 0;
G__90406.cljs$lang$applyTo = (function (arglist__90408){
var args = cljs.core.seq(arglist__90408);
return G__90406__delegate(args);
});
G__90406.cljs$core$IFn$_invoke$arity$variadic = G__90406__delegate;
return G__90406;
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
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__90409 = cljs.core._EQ_;
var expr__90410 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__90409.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__90410))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__90409,expr__90410){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__90409,expr__90410))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__90409,expr__90410){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e90412){if((e90412 instanceof Error)){
var e = e90412;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e90412;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__90409,expr__90410))
} else {
if(cljs.core.truth_(pred__90409.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__90410))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__90409.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__90410))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__90409.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__90410))){
return ((function (pred__90409,expr__90410){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e90413){if((e90413 instanceof Error)){
var e = e90413;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e90413;

}
}})());
});
;})(pred__90409,expr__90410))
} else {
return ((function (pred__90409,expr__90410){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__90409,expr__90410))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__90414,callback){
var map__90415 = p__90414;
var map__90415__$1 = ((((!((map__90415 == null)))?((((map__90415.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90415.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90415):map__90415);
var file_msg = map__90415__$1;
var request_url = cljs.core.get.call(null,map__90415__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__90415,map__90415__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__90415,map__90415__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__){
return (function (state_90439){
var state_val_90440 = (state_90439[(1)]);
if((state_val_90440 === (7))){
var inst_90435 = (state_90439[(2)]);
var state_90439__$1 = state_90439;
var statearr_90441_90458 = state_90439__$1;
(statearr_90441_90458[(2)] = inst_90435);

(statearr_90441_90458[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90440 === (1))){
var state_90439__$1 = state_90439;
var statearr_90442_90459 = state_90439__$1;
(statearr_90442_90459[(2)] = null);

(statearr_90442_90459[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90440 === (4))){
var inst_90419 = (state_90439[(7)]);
var inst_90419__$1 = (state_90439[(2)]);
var state_90439__$1 = (function (){var statearr_90443 = state_90439;
(statearr_90443[(7)] = inst_90419__$1);

return statearr_90443;
})();
if(cljs.core.truth_(inst_90419__$1)){
var statearr_90444_90460 = state_90439__$1;
(statearr_90444_90460[(1)] = (5));

} else {
var statearr_90445_90461 = state_90439__$1;
(statearr_90445_90461[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90440 === (6))){
var state_90439__$1 = state_90439;
var statearr_90446_90462 = state_90439__$1;
(statearr_90446_90462[(2)] = null);

(statearr_90446_90462[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90440 === (3))){
var inst_90437 = (state_90439[(2)]);
var state_90439__$1 = state_90439;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90439__$1,inst_90437);
} else {
if((state_val_90440 === (2))){
var state_90439__$1 = state_90439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90439__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_90440 === (11))){
var inst_90431 = (state_90439[(2)]);
var state_90439__$1 = (function (){var statearr_90447 = state_90439;
(statearr_90447[(8)] = inst_90431);

return statearr_90447;
})();
var statearr_90448_90463 = state_90439__$1;
(statearr_90448_90463[(2)] = null);

(statearr_90448_90463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90440 === (9))){
var inst_90423 = (state_90439[(9)]);
var inst_90425 = (state_90439[(10)]);
var inst_90427 = inst_90425.call(null,inst_90423);
var state_90439__$1 = state_90439;
var statearr_90449_90464 = state_90439__$1;
(statearr_90449_90464[(2)] = inst_90427);

(statearr_90449_90464[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90440 === (5))){
var inst_90419 = (state_90439[(7)]);
var inst_90421 = figwheel.client.file_reloading.blocking_load.call(null,inst_90419);
var state_90439__$1 = state_90439;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90439__$1,(8),inst_90421);
} else {
if((state_val_90440 === (10))){
var inst_90423 = (state_90439[(9)]);
var inst_90429 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_90423);
var state_90439__$1 = state_90439;
var statearr_90450_90465 = state_90439__$1;
(statearr_90450_90465[(2)] = inst_90429);

(statearr_90450_90465[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90440 === (8))){
var inst_90425 = (state_90439[(10)]);
var inst_90419 = (state_90439[(7)]);
var inst_90423 = (state_90439[(2)]);
var inst_90424 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_90425__$1 = cljs.core.get.call(null,inst_90424,inst_90419);
var state_90439__$1 = (function (){var statearr_90451 = state_90439;
(statearr_90451[(9)] = inst_90423);

(statearr_90451[(10)] = inst_90425__$1);

return statearr_90451;
})();
if(cljs.core.truth_(inst_90425__$1)){
var statearr_90452_90466 = state_90439__$1;
(statearr_90452_90466[(1)] = (9));

} else {
var statearr_90453_90467 = state_90439__$1;
(statearr_90453_90467[(1)] = (10));

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
});})(c__32958__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__32869__auto__ = null;
var figwheel$client$file_reloading$state_machine__32869__auto____0 = (function (){
var statearr_90454 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_90454[(0)] = figwheel$client$file_reloading$state_machine__32869__auto__);

(statearr_90454[(1)] = (1));

return statearr_90454;
});
var figwheel$client$file_reloading$state_machine__32869__auto____1 = (function (state_90439){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_90439);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e90455){if((e90455 instanceof Object)){
var ex__32872__auto__ = e90455;
var statearr_90456_90468 = state_90439;
(statearr_90456_90468[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90439);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90455;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90469 = state_90439;
state_90439 = G__90469;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32869__auto__ = function(state_90439){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32869__auto____1.call(this,state_90439);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32869__auto____0;
figwheel$client$file_reloading$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32869__auto____1;
return figwheel$client$file_reloading$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_90457 = f__32959__auto__.call(null);
(statearr_90457[(6)] = c__32958__auto__);

return statearr_90457;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__))
);

return c__32958__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__90470,callback){
var map__90471 = p__90470;
var map__90471__$1 = ((((!((map__90471 == null)))?((((map__90471.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90471.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90471):map__90471);
var file_msg = map__90471__$1;
var namespace = cljs.core.get.call(null,map__90471__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__90471,map__90471__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__90471,map__90471__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__90473){
var map__90474 = p__90473;
var map__90474__$1 = ((((!((map__90474 == null)))?((((map__90474.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90474.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90474):map__90474);
var file_msg = map__90474__$1;
var namespace = cljs.core.get.call(null,map__90474__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__90476){
var map__90477 = p__90476;
var map__90477__$1 = ((((!((map__90477 == null)))?((((map__90477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90477.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90477):map__90477);
var file_msg = map__90477__$1;
var namespace = cljs.core.get.call(null,map__90477__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__28557__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__28557__auto__){
var or__28569__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
var or__28569__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__28569__auto____$1)){
return or__28569__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__28557__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__90479,callback){
var map__90480 = p__90479;
var map__90480__$1 = ((((!((map__90480 == null)))?((((map__90480.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90480.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90480):map__90480);
var file_msg = map__90480__$1;
var request_url = cljs.core.get.call(null,map__90480__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__90480__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not trying to load file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

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
var c__32958__auto___90530 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___90530,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___90530,out){
return (function (state_90515){
var state_val_90516 = (state_90515[(1)]);
if((state_val_90516 === (1))){
var inst_90489 = cljs.core.seq.call(null,files);
var inst_90490 = cljs.core.first.call(null,inst_90489);
var inst_90491 = cljs.core.next.call(null,inst_90489);
var inst_90492 = files;
var state_90515__$1 = (function (){var statearr_90517 = state_90515;
(statearr_90517[(7)] = inst_90491);

(statearr_90517[(8)] = inst_90492);

(statearr_90517[(9)] = inst_90490);

return statearr_90517;
})();
var statearr_90518_90531 = state_90515__$1;
(statearr_90518_90531[(2)] = null);

(statearr_90518_90531[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90516 === (2))){
var inst_90498 = (state_90515[(10)]);
var inst_90492 = (state_90515[(8)]);
var inst_90497 = cljs.core.seq.call(null,inst_90492);
var inst_90498__$1 = cljs.core.first.call(null,inst_90497);
var inst_90499 = cljs.core.next.call(null,inst_90497);
var inst_90500 = (inst_90498__$1 == null);
var inst_90501 = cljs.core.not.call(null,inst_90500);
var state_90515__$1 = (function (){var statearr_90519 = state_90515;
(statearr_90519[(10)] = inst_90498__$1);

(statearr_90519[(11)] = inst_90499);

return statearr_90519;
})();
if(inst_90501){
var statearr_90520_90532 = state_90515__$1;
(statearr_90520_90532[(1)] = (4));

} else {
var statearr_90521_90533 = state_90515__$1;
(statearr_90521_90533[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90516 === (3))){
var inst_90513 = (state_90515[(2)]);
var state_90515__$1 = state_90515;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90515__$1,inst_90513);
} else {
if((state_val_90516 === (4))){
var inst_90498 = (state_90515[(10)]);
var inst_90503 = figwheel.client.file_reloading.reload_js_file.call(null,inst_90498);
var state_90515__$1 = state_90515;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90515__$1,(7),inst_90503);
} else {
if((state_val_90516 === (5))){
var inst_90509 = cljs.core.async.close_BANG_.call(null,out);
var state_90515__$1 = state_90515;
var statearr_90522_90534 = state_90515__$1;
(statearr_90522_90534[(2)] = inst_90509);

(statearr_90522_90534[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90516 === (6))){
var inst_90511 = (state_90515[(2)]);
var state_90515__$1 = state_90515;
var statearr_90523_90535 = state_90515__$1;
(statearr_90523_90535[(2)] = inst_90511);

(statearr_90523_90535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90516 === (7))){
var inst_90499 = (state_90515[(11)]);
var inst_90505 = (state_90515[(2)]);
var inst_90506 = cljs.core.async.put_BANG_.call(null,out,inst_90505);
var inst_90492 = inst_90499;
var state_90515__$1 = (function (){var statearr_90524 = state_90515;
(statearr_90524[(12)] = inst_90506);

(statearr_90524[(8)] = inst_90492);

return statearr_90524;
})();
var statearr_90525_90536 = state_90515__$1;
(statearr_90525_90536[(2)] = null);

(statearr_90525_90536[(1)] = (2));


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
});})(c__32958__auto___90530,out))
;
return ((function (switch__32868__auto__,c__32958__auto___90530,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____0 = (function (){
var statearr_90526 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90526[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__);

(statearr_90526[(1)] = (1));

return statearr_90526;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____1 = (function (state_90515){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_90515);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e90527){if((e90527 instanceof Object)){
var ex__32872__auto__ = e90527;
var statearr_90528_90537 = state_90515;
(statearr_90528_90537[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90515);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90527;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90538 = state_90515;
state_90515 = G__90538;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__ = function(state_90515){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____1.call(this,state_90515);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___90530,out))
})();
var state__32960__auto__ = (function (){var statearr_90529 = f__32959__auto__.call(null);
(statearr_90529[(6)] = c__32958__auto___90530);

return statearr_90529;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___90530,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__90539,opts){
var map__90540 = p__90539;
var map__90540__$1 = ((((!((map__90540 == null)))?((((map__90540.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90540.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90540):map__90540);
var eval_body = cljs.core.get.call(null,map__90540__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__90540__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__28557__auto__ = eval_body;
if(cljs.core.truth_(and__28557__auto__)){
return typeof eval_body === 'string';
} else {
return and__28557__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Evaling file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e90542){var e = e90542;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Unable to evaluate "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5276__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__90543_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__90543_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5276__auto__)){
var file_msg = temp__5276__auto__;
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
return cljs.core.map.call(null,(function (p__90544){
var vec__90545 = p__90544;
var k = cljs.core.nth.call(null,vec__90545,(0),null);
var v = cljs.core.nth.call(null,vec__90545,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__90548){
var vec__90549 = p__90548;
var k = cljs.core.nth.call(null,vec__90549,(0),null);
var v = cljs.core.nth.call(null,vec__90549,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__90555,p__90556){
var map__90557 = p__90555;
var map__90557__$1 = ((((!((map__90557 == null)))?((((map__90557.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90557.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90557):map__90557);
var opts = map__90557__$1;
var before_jsload = cljs.core.get.call(null,map__90557__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__90557__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__90557__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__90558 = p__90556;
var map__90558__$1 = ((((!((map__90558 == null)))?((((map__90558.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90558.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90558):map__90558);
var msg = map__90558__$1;
var files = cljs.core.get.call(null,map__90558__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__90558__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__90558__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_90712){
var state_val_90713 = (state_90712[(1)]);
if((state_val_90713 === (7))){
var inst_90574 = (state_90712[(7)]);
var inst_90572 = (state_90712[(8)]);
var inst_90575 = (state_90712[(9)]);
var inst_90573 = (state_90712[(10)]);
var inst_90580 = cljs.core._nth.call(null,inst_90573,inst_90575);
var inst_90581 = figwheel.client.file_reloading.eval_body.call(null,inst_90580,opts);
var inst_90582 = (inst_90575 + (1));
var tmp90714 = inst_90574;
var tmp90715 = inst_90572;
var tmp90716 = inst_90573;
var inst_90572__$1 = tmp90715;
var inst_90573__$1 = tmp90716;
var inst_90574__$1 = tmp90714;
var inst_90575__$1 = inst_90582;
var state_90712__$1 = (function (){var statearr_90717 = state_90712;
(statearr_90717[(7)] = inst_90574__$1);

(statearr_90717[(8)] = inst_90572__$1);

(statearr_90717[(11)] = inst_90581);

(statearr_90717[(9)] = inst_90575__$1);

(statearr_90717[(10)] = inst_90573__$1);

return statearr_90717;
})();
var statearr_90718_90801 = state_90712__$1;
(statearr_90718_90801[(2)] = null);

(statearr_90718_90801[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (20))){
var inst_90615 = (state_90712[(12)]);
var inst_90623 = figwheel.client.file_reloading.sort_files.call(null,inst_90615);
var state_90712__$1 = state_90712;
var statearr_90719_90802 = state_90712__$1;
(statearr_90719_90802[(2)] = inst_90623);

(statearr_90719_90802[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (27))){
var state_90712__$1 = state_90712;
var statearr_90720_90803 = state_90712__$1;
(statearr_90720_90803[(2)] = null);

(statearr_90720_90803[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (1))){
var inst_90564 = (state_90712[(13)]);
var inst_90561 = before_jsload.call(null,files);
var inst_90562 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_90563 = (function (){return ((function (inst_90564,inst_90561,inst_90562,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90552_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__90552_SHARP_);
});
;})(inst_90564,inst_90561,inst_90562,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90564__$1 = cljs.core.filter.call(null,inst_90563,files);
var inst_90565 = cljs.core.not_empty.call(null,inst_90564__$1);
var state_90712__$1 = (function (){var statearr_90721 = state_90712;
(statearr_90721[(14)] = inst_90562);

(statearr_90721[(15)] = inst_90561);

(statearr_90721[(13)] = inst_90564__$1);

return statearr_90721;
})();
if(cljs.core.truth_(inst_90565)){
var statearr_90722_90804 = state_90712__$1;
(statearr_90722_90804[(1)] = (2));

} else {
var statearr_90723_90805 = state_90712__$1;
(statearr_90723_90805[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (24))){
var state_90712__$1 = state_90712;
var statearr_90724_90806 = state_90712__$1;
(statearr_90724_90806[(2)] = null);

(statearr_90724_90806[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (39))){
var inst_90665 = (state_90712[(16)]);
var state_90712__$1 = state_90712;
var statearr_90725_90807 = state_90712__$1;
(statearr_90725_90807[(2)] = inst_90665);

(statearr_90725_90807[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (46))){
var inst_90707 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
var statearr_90726_90808 = state_90712__$1;
(statearr_90726_90808[(2)] = inst_90707);

(statearr_90726_90808[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (4))){
var inst_90609 = (state_90712[(2)]);
var inst_90610 = cljs.core.List.EMPTY;
var inst_90611 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_90610);
var inst_90612 = (function (){return ((function (inst_90609,inst_90610,inst_90611,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90553_SHARP_){
var and__28557__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__90553_SHARP_);
if(cljs.core.truth_(and__28557__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__90553_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__90553_SHARP_)));
} else {
return and__28557__auto__;
}
});
;})(inst_90609,inst_90610,inst_90611,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90613 = cljs.core.filter.call(null,inst_90612,files);
var inst_90614 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_90615 = cljs.core.concat.call(null,inst_90613,inst_90614);
var state_90712__$1 = (function (){var statearr_90727 = state_90712;
(statearr_90727[(12)] = inst_90615);

(statearr_90727[(17)] = inst_90609);

(statearr_90727[(18)] = inst_90611);

return statearr_90727;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_90728_90809 = state_90712__$1;
(statearr_90728_90809[(1)] = (16));

} else {
var statearr_90729_90810 = state_90712__$1;
(statearr_90729_90810[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (15))){
var inst_90599 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
var statearr_90730_90811 = state_90712__$1;
(statearr_90730_90811[(2)] = inst_90599);

(statearr_90730_90811[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (21))){
var inst_90625 = (state_90712[(19)]);
var inst_90625__$1 = (state_90712[(2)]);
var inst_90626 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_90625__$1);
var state_90712__$1 = (function (){var statearr_90731 = state_90712;
(statearr_90731[(19)] = inst_90625__$1);

return statearr_90731;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_90712__$1,(22),inst_90626);
} else {
if((state_val_90713 === (31))){
var inst_90710 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_90712__$1,inst_90710);
} else {
if((state_val_90713 === (32))){
var inst_90665 = (state_90712[(16)]);
var inst_90670 = inst_90665.cljs$lang$protocol_mask$partition0$;
var inst_90671 = (inst_90670 & (64));
var inst_90672 = inst_90665.cljs$core$ISeq$;
var inst_90673 = (cljs.core.PROTOCOL_SENTINEL === inst_90672);
var inst_90674 = (inst_90671) || (inst_90673);
var state_90712__$1 = state_90712;
if(cljs.core.truth_(inst_90674)){
var statearr_90732_90812 = state_90712__$1;
(statearr_90732_90812[(1)] = (35));

} else {
var statearr_90733_90813 = state_90712__$1;
(statearr_90733_90813[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (40))){
var inst_90687 = (state_90712[(20)]);
var inst_90686 = (state_90712[(2)]);
var inst_90687__$1 = cljs.core.get.call(null,inst_90686,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_90688 = cljs.core.get.call(null,inst_90686,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_90689 = cljs.core.not_empty.call(null,inst_90687__$1);
var state_90712__$1 = (function (){var statearr_90734 = state_90712;
(statearr_90734[(21)] = inst_90688);

(statearr_90734[(20)] = inst_90687__$1);

return statearr_90734;
})();
if(cljs.core.truth_(inst_90689)){
var statearr_90735_90814 = state_90712__$1;
(statearr_90735_90814[(1)] = (41));

} else {
var statearr_90736_90815 = state_90712__$1;
(statearr_90736_90815[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (33))){
var state_90712__$1 = state_90712;
var statearr_90737_90816 = state_90712__$1;
(statearr_90737_90816[(2)] = false);

(statearr_90737_90816[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (13))){
var inst_90585 = (state_90712[(22)]);
var inst_90589 = cljs.core.chunk_first.call(null,inst_90585);
var inst_90590 = cljs.core.chunk_rest.call(null,inst_90585);
var inst_90591 = cljs.core.count.call(null,inst_90589);
var inst_90572 = inst_90590;
var inst_90573 = inst_90589;
var inst_90574 = inst_90591;
var inst_90575 = (0);
var state_90712__$1 = (function (){var statearr_90738 = state_90712;
(statearr_90738[(7)] = inst_90574);

(statearr_90738[(8)] = inst_90572);

(statearr_90738[(9)] = inst_90575);

(statearr_90738[(10)] = inst_90573);

return statearr_90738;
})();
var statearr_90739_90817 = state_90712__$1;
(statearr_90739_90817[(2)] = null);

(statearr_90739_90817[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (22))){
var inst_90625 = (state_90712[(19)]);
var inst_90633 = (state_90712[(23)]);
var inst_90628 = (state_90712[(24)]);
var inst_90629 = (state_90712[(25)]);
var inst_90628__$1 = (state_90712[(2)]);
var inst_90629__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_90628__$1);
var inst_90630 = (function (){var all_files = inst_90625;
var res_SINGLEQUOTE_ = inst_90628__$1;
var res = inst_90629__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_90625,inst_90633,inst_90628,inst_90629,inst_90628__$1,inst_90629__$1,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__90554_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__90554_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_90625,inst_90633,inst_90628,inst_90629,inst_90628__$1,inst_90629__$1,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90631 = cljs.core.filter.call(null,inst_90630,inst_90628__$1);
var inst_90632 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_90633__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_90632);
var inst_90634 = cljs.core.not_empty.call(null,inst_90633__$1);
var state_90712__$1 = (function (){var statearr_90740 = state_90712;
(statearr_90740[(26)] = inst_90631);

(statearr_90740[(23)] = inst_90633__$1);

(statearr_90740[(24)] = inst_90628__$1);

(statearr_90740[(25)] = inst_90629__$1);

return statearr_90740;
})();
if(cljs.core.truth_(inst_90634)){
var statearr_90741_90818 = state_90712__$1;
(statearr_90741_90818[(1)] = (23));

} else {
var statearr_90742_90819 = state_90712__$1;
(statearr_90742_90819[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (36))){
var state_90712__$1 = state_90712;
var statearr_90743_90820 = state_90712__$1;
(statearr_90743_90820[(2)] = false);

(statearr_90743_90820[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (41))){
var inst_90687 = (state_90712[(20)]);
var inst_90691 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_90692 = cljs.core.map.call(null,inst_90691,inst_90687);
var inst_90693 = cljs.core.pr_str.call(null,inst_90692);
var inst_90694 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_90693)].join('');
var inst_90695 = figwheel.client.utils.log.call(null,inst_90694);
var state_90712__$1 = state_90712;
var statearr_90744_90821 = state_90712__$1;
(statearr_90744_90821[(2)] = inst_90695);

(statearr_90744_90821[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (43))){
var inst_90688 = (state_90712[(21)]);
var inst_90698 = (state_90712[(2)]);
var inst_90699 = cljs.core.not_empty.call(null,inst_90688);
var state_90712__$1 = (function (){var statearr_90745 = state_90712;
(statearr_90745[(27)] = inst_90698);

return statearr_90745;
})();
if(cljs.core.truth_(inst_90699)){
var statearr_90746_90822 = state_90712__$1;
(statearr_90746_90822[(1)] = (44));

} else {
var statearr_90747_90823 = state_90712__$1;
(statearr_90747_90823[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (29))){
var inst_90625 = (state_90712[(19)]);
var inst_90665 = (state_90712[(16)]);
var inst_90631 = (state_90712[(26)]);
var inst_90633 = (state_90712[(23)]);
var inst_90628 = (state_90712[(24)]);
var inst_90629 = (state_90712[(25)]);
var inst_90661 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_90664 = (function (){var all_files = inst_90625;
var res_SINGLEQUOTE_ = inst_90628;
var res = inst_90629;
var files_not_loaded = inst_90631;
var dependencies_that_loaded = inst_90633;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90625,inst_90665,inst_90631,inst_90633,inst_90628,inst_90629,inst_90661,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__90663){
var map__90748 = p__90663;
var map__90748__$1 = ((((!((map__90748 == null)))?((((map__90748.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90748.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90748):map__90748);
var namespace = cljs.core.get.call(null,map__90748__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90625,inst_90665,inst_90631,inst_90633,inst_90628,inst_90629,inst_90661,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90665__$1 = cljs.core.group_by.call(null,inst_90664,inst_90631);
var inst_90667 = (inst_90665__$1 == null);
var inst_90668 = cljs.core.not.call(null,inst_90667);
var state_90712__$1 = (function (){var statearr_90750 = state_90712;
(statearr_90750[(16)] = inst_90665__$1);

(statearr_90750[(28)] = inst_90661);

return statearr_90750;
})();
if(inst_90668){
var statearr_90751_90824 = state_90712__$1;
(statearr_90751_90824[(1)] = (32));

} else {
var statearr_90752_90825 = state_90712__$1;
(statearr_90752_90825[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (44))){
var inst_90688 = (state_90712[(21)]);
var inst_90701 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_90688);
var inst_90702 = cljs.core.pr_str.call(null,inst_90701);
var inst_90703 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_90702)].join('');
var inst_90704 = figwheel.client.utils.log.call(null,inst_90703);
var state_90712__$1 = state_90712;
var statearr_90753_90826 = state_90712__$1;
(statearr_90753_90826[(2)] = inst_90704);

(statearr_90753_90826[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (6))){
var inst_90606 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
var statearr_90754_90827 = state_90712__$1;
(statearr_90754_90827[(2)] = inst_90606);

(statearr_90754_90827[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (28))){
var inst_90631 = (state_90712[(26)]);
var inst_90658 = (state_90712[(2)]);
var inst_90659 = cljs.core.not_empty.call(null,inst_90631);
var state_90712__$1 = (function (){var statearr_90755 = state_90712;
(statearr_90755[(29)] = inst_90658);

return statearr_90755;
})();
if(cljs.core.truth_(inst_90659)){
var statearr_90756_90828 = state_90712__$1;
(statearr_90756_90828[(1)] = (29));

} else {
var statearr_90757_90829 = state_90712__$1;
(statearr_90757_90829[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (25))){
var inst_90629 = (state_90712[(25)]);
var inst_90645 = (state_90712[(2)]);
var inst_90646 = cljs.core.not_empty.call(null,inst_90629);
var state_90712__$1 = (function (){var statearr_90758 = state_90712;
(statearr_90758[(30)] = inst_90645);

return statearr_90758;
})();
if(cljs.core.truth_(inst_90646)){
var statearr_90759_90830 = state_90712__$1;
(statearr_90759_90830[(1)] = (26));

} else {
var statearr_90760_90831 = state_90712__$1;
(statearr_90760_90831[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (34))){
var inst_90681 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
if(cljs.core.truth_(inst_90681)){
var statearr_90761_90832 = state_90712__$1;
(statearr_90761_90832[(1)] = (38));

} else {
var statearr_90762_90833 = state_90712__$1;
(statearr_90762_90833[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (17))){
var state_90712__$1 = state_90712;
var statearr_90763_90834 = state_90712__$1;
(statearr_90763_90834[(2)] = recompile_dependents);

(statearr_90763_90834[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (3))){
var state_90712__$1 = state_90712;
var statearr_90764_90835 = state_90712__$1;
(statearr_90764_90835[(2)] = null);

(statearr_90764_90835[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (12))){
var inst_90602 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
var statearr_90765_90836 = state_90712__$1;
(statearr_90765_90836[(2)] = inst_90602);

(statearr_90765_90836[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (2))){
var inst_90564 = (state_90712[(13)]);
var inst_90571 = cljs.core.seq.call(null,inst_90564);
var inst_90572 = inst_90571;
var inst_90573 = null;
var inst_90574 = (0);
var inst_90575 = (0);
var state_90712__$1 = (function (){var statearr_90766 = state_90712;
(statearr_90766[(7)] = inst_90574);

(statearr_90766[(8)] = inst_90572);

(statearr_90766[(9)] = inst_90575);

(statearr_90766[(10)] = inst_90573);

return statearr_90766;
})();
var statearr_90767_90837 = state_90712__$1;
(statearr_90767_90837[(2)] = null);

(statearr_90767_90837[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (23))){
var inst_90625 = (state_90712[(19)]);
var inst_90631 = (state_90712[(26)]);
var inst_90633 = (state_90712[(23)]);
var inst_90628 = (state_90712[(24)]);
var inst_90629 = (state_90712[(25)]);
var inst_90636 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_90638 = (function (){var all_files = inst_90625;
var res_SINGLEQUOTE_ = inst_90628;
var res = inst_90629;
var files_not_loaded = inst_90631;
var dependencies_that_loaded = inst_90633;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90625,inst_90631,inst_90633,inst_90628,inst_90629,inst_90636,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__90637){
var map__90768 = p__90637;
var map__90768__$1 = ((((!((map__90768 == null)))?((((map__90768.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90768.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90768):map__90768);
var request_url = cljs.core.get.call(null,map__90768__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90625,inst_90631,inst_90633,inst_90628,inst_90629,inst_90636,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90639 = cljs.core.reverse.call(null,inst_90633);
var inst_90640 = cljs.core.map.call(null,inst_90638,inst_90639);
var inst_90641 = cljs.core.pr_str.call(null,inst_90640);
var inst_90642 = figwheel.client.utils.log.call(null,inst_90641);
var state_90712__$1 = (function (){var statearr_90770 = state_90712;
(statearr_90770[(31)] = inst_90636);

return statearr_90770;
})();
var statearr_90771_90838 = state_90712__$1;
(statearr_90771_90838[(2)] = inst_90642);

(statearr_90771_90838[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (35))){
var state_90712__$1 = state_90712;
var statearr_90772_90839 = state_90712__$1;
(statearr_90772_90839[(2)] = true);

(statearr_90772_90839[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (19))){
var inst_90615 = (state_90712[(12)]);
var inst_90621 = figwheel.client.file_reloading.expand_files.call(null,inst_90615);
var state_90712__$1 = state_90712;
var statearr_90773_90840 = state_90712__$1;
(statearr_90773_90840[(2)] = inst_90621);

(statearr_90773_90840[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (11))){
var state_90712__$1 = state_90712;
var statearr_90774_90841 = state_90712__$1;
(statearr_90774_90841[(2)] = null);

(statearr_90774_90841[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (9))){
var inst_90604 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
var statearr_90775_90842 = state_90712__$1;
(statearr_90775_90842[(2)] = inst_90604);

(statearr_90775_90842[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (5))){
var inst_90574 = (state_90712[(7)]);
var inst_90575 = (state_90712[(9)]);
var inst_90577 = (inst_90575 < inst_90574);
var inst_90578 = inst_90577;
var state_90712__$1 = state_90712;
if(cljs.core.truth_(inst_90578)){
var statearr_90776_90843 = state_90712__$1;
(statearr_90776_90843[(1)] = (7));

} else {
var statearr_90777_90844 = state_90712__$1;
(statearr_90777_90844[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (14))){
var inst_90585 = (state_90712[(22)]);
var inst_90594 = cljs.core.first.call(null,inst_90585);
var inst_90595 = figwheel.client.file_reloading.eval_body.call(null,inst_90594,opts);
var inst_90596 = cljs.core.next.call(null,inst_90585);
var inst_90572 = inst_90596;
var inst_90573 = null;
var inst_90574 = (0);
var inst_90575 = (0);
var state_90712__$1 = (function (){var statearr_90778 = state_90712;
(statearr_90778[(7)] = inst_90574);

(statearr_90778[(32)] = inst_90595);

(statearr_90778[(8)] = inst_90572);

(statearr_90778[(9)] = inst_90575);

(statearr_90778[(10)] = inst_90573);

return statearr_90778;
})();
var statearr_90779_90845 = state_90712__$1;
(statearr_90779_90845[(2)] = null);

(statearr_90779_90845[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (45))){
var state_90712__$1 = state_90712;
var statearr_90780_90846 = state_90712__$1;
(statearr_90780_90846[(2)] = null);

(statearr_90780_90846[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (26))){
var inst_90625 = (state_90712[(19)]);
var inst_90631 = (state_90712[(26)]);
var inst_90633 = (state_90712[(23)]);
var inst_90628 = (state_90712[(24)]);
var inst_90629 = (state_90712[(25)]);
var inst_90648 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_90650 = (function (){var all_files = inst_90625;
var res_SINGLEQUOTE_ = inst_90628;
var res = inst_90629;
var files_not_loaded = inst_90631;
var dependencies_that_loaded = inst_90633;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90625,inst_90631,inst_90633,inst_90628,inst_90629,inst_90648,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__90649){
var map__90781 = p__90649;
var map__90781__$1 = ((((!((map__90781 == null)))?((((map__90781.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90781.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90781):map__90781);
var namespace = cljs.core.get.call(null,map__90781__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__90781__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90625,inst_90631,inst_90633,inst_90628,inst_90629,inst_90648,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90651 = cljs.core.map.call(null,inst_90650,inst_90629);
var inst_90652 = cljs.core.pr_str.call(null,inst_90651);
var inst_90653 = figwheel.client.utils.log.call(null,inst_90652);
var inst_90654 = (function (){var all_files = inst_90625;
var res_SINGLEQUOTE_ = inst_90628;
var res = inst_90629;
var files_not_loaded = inst_90631;
var dependencies_that_loaded = inst_90633;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90625,inst_90631,inst_90633,inst_90628,inst_90629,inst_90648,inst_90650,inst_90651,inst_90652,inst_90653,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_90625,inst_90631,inst_90633,inst_90628,inst_90629,inst_90648,inst_90650,inst_90651,inst_90652,inst_90653,state_val_90713,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_90655 = setTimeout(inst_90654,(10));
var state_90712__$1 = (function (){var statearr_90783 = state_90712;
(statearr_90783[(33)] = inst_90653);

(statearr_90783[(34)] = inst_90648);

return statearr_90783;
})();
var statearr_90784_90847 = state_90712__$1;
(statearr_90784_90847[(2)] = inst_90655);

(statearr_90784_90847[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (16))){
var state_90712__$1 = state_90712;
var statearr_90785_90848 = state_90712__$1;
(statearr_90785_90848[(2)] = reload_dependents);

(statearr_90785_90848[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (38))){
var inst_90665 = (state_90712[(16)]);
var inst_90683 = cljs.core.apply.call(null,cljs.core.hash_map,inst_90665);
var state_90712__$1 = state_90712;
var statearr_90786_90849 = state_90712__$1;
(statearr_90786_90849[(2)] = inst_90683);

(statearr_90786_90849[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (30))){
var state_90712__$1 = state_90712;
var statearr_90787_90850 = state_90712__$1;
(statearr_90787_90850[(2)] = null);

(statearr_90787_90850[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (10))){
var inst_90585 = (state_90712[(22)]);
var inst_90587 = cljs.core.chunked_seq_QMARK_.call(null,inst_90585);
var state_90712__$1 = state_90712;
if(inst_90587){
var statearr_90788_90851 = state_90712__$1;
(statearr_90788_90851[(1)] = (13));

} else {
var statearr_90789_90852 = state_90712__$1;
(statearr_90789_90852[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (18))){
var inst_90619 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
if(cljs.core.truth_(inst_90619)){
var statearr_90790_90853 = state_90712__$1;
(statearr_90790_90853[(1)] = (19));

} else {
var statearr_90791_90854 = state_90712__$1;
(statearr_90791_90854[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (42))){
var state_90712__$1 = state_90712;
var statearr_90792_90855 = state_90712__$1;
(statearr_90792_90855[(2)] = null);

(statearr_90792_90855[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (37))){
var inst_90678 = (state_90712[(2)]);
var state_90712__$1 = state_90712;
var statearr_90793_90856 = state_90712__$1;
(statearr_90793_90856[(2)] = inst_90678);

(statearr_90793_90856[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_90713 === (8))){
var inst_90585 = (state_90712[(22)]);
var inst_90572 = (state_90712[(8)]);
var inst_90585__$1 = cljs.core.seq.call(null,inst_90572);
var state_90712__$1 = (function (){var statearr_90794 = state_90712;
(statearr_90794[(22)] = inst_90585__$1);

return statearr_90794;
})();
if(inst_90585__$1){
var statearr_90795_90857 = state_90712__$1;
(statearr_90795_90857[(1)] = (10));

} else {
var statearr_90796_90858 = state_90712__$1;
(statearr_90796_90858[(1)] = (11));

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
});})(c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32868__auto__,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____0 = (function (){
var statearr_90797 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_90797[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__);

(statearr_90797[(1)] = (1));

return statearr_90797;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____1 = (function (state_90712){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_90712);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e90798){if((e90798 instanceof Object)){
var ex__32872__auto__ = e90798;
var statearr_90799_90859 = state_90712;
(statearr_90799_90859[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_90712);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e90798;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__90860 = state_90712;
state_90712 = G__90860;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__ = function(state_90712){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____1.call(this,state_90712);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32960__auto__ = (function (){var statearr_90800 = f__32959__auto__.call(null);
(statearr_90800[(6)] = c__32958__auto__);

return statearr_90800;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__,map__90557,map__90557__$1,opts,before_jsload,on_jsload,reload_dependents,map__90558,map__90558__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32958__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__90863,link){
var map__90864 = p__90863;
var map__90864__$1 = ((((!((map__90864 == null)))?((((map__90864.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90864.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90864):map__90864);
var file = cljs.core.get.call(null,map__90864__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__90864,map__90864__$1,file){
return (function (p1__90861_SHARP_,p2__90862_SHARP_){
if(cljs.core._EQ_.call(null,p1__90861_SHARP_,p2__90862_SHARP_)){
return p1__90861_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__90864,map__90864__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__90867){
var map__90868 = p__90867;
var map__90868__$1 = ((((!((map__90868 == null)))?((((map__90868.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90868.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90868):map__90868);
var match_length = cljs.core.get.call(null,map__90868__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__90868__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__90866_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__90866_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5278__auto__)){
var res = temp__5278__auto__;
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__90870_SHARP_,p2__90871_SHARP_){
return cljs.core.assoc.call(null,p1__90870_SHARP_,cljs.core.get.call(null,p2__90871_SHARP_,key),p2__90871_SHARP_);
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
var temp__5276__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5276__auto__)){
var link = temp__5276__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5276__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5276__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_90872 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_90872);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_90872);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__90873,p__90874){
var map__90875 = p__90873;
var map__90875__$1 = ((((!((map__90875 == null)))?((((map__90875.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90875.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90875):map__90875);
var on_cssload = cljs.core.get.call(null,map__90875__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__90876 = p__90874;
var map__90876__$1 = ((((!((map__90876 == null)))?((((map__90876.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90876.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90876):map__90876);
var files_msg = map__90876__$1;
var files = cljs.core.get.call(null,map__90876__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5278__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5278__auto__)){
var f_datas = temp__5278__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1500526696506