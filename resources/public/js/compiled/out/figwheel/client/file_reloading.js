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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__68252_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__68252_SHARP_));
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
var seq__68257 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__68258 = null;
var count__68259 = (0);
var i__68260 = (0);
while(true){
if((i__68260 < count__68259)){
var n = cljs.core._nth.call(null,chunk__68258,i__68260);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__68261 = seq__68257;
var G__68262 = chunk__68258;
var G__68263 = count__68259;
var G__68264 = (i__68260 + (1));
seq__68257 = G__68261;
chunk__68258 = G__68262;
count__68259 = G__68263;
i__68260 = G__68264;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__68257);
if(temp__4657__auto__){
var seq__68257__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68257__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__68257__$1);
var G__68265 = cljs.core.chunk_rest.call(null,seq__68257__$1);
var G__68266 = c__26790__auto__;
var G__68267 = cljs.core.count.call(null,c__26790__auto__);
var G__68268 = (0);
seq__68257 = G__68265;
chunk__68258 = G__68266;
count__68259 = G__68267;
i__68260 = G__68268;
continue;
} else {
var n = cljs.core.first.call(null,seq__68257__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__68269 = cljs.core.next.call(null,seq__68257__$1);
var G__68270 = null;
var G__68271 = (0);
var G__68272 = (0);
seq__68257 = G__68269;
chunk__68258 = G__68270;
count__68259 = G__68271;
i__68260 = G__68272;
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

var seq__68323_68334 = cljs.core.seq.call(null,deps);
var chunk__68324_68335 = null;
var count__68325_68336 = (0);
var i__68326_68337 = (0);
while(true){
if((i__68326_68337 < count__68325_68336)){
var dep_68338 = cljs.core._nth.call(null,chunk__68324_68335,i__68326_68337);
topo_sort_helper_STAR_.call(null,dep_68338,(depth + (1)),state);

var G__68339 = seq__68323_68334;
var G__68340 = chunk__68324_68335;
var G__68341 = count__68325_68336;
var G__68342 = (i__68326_68337 + (1));
seq__68323_68334 = G__68339;
chunk__68324_68335 = G__68340;
count__68325_68336 = G__68341;
i__68326_68337 = G__68342;
continue;
} else {
var temp__4657__auto___68343 = cljs.core.seq.call(null,seq__68323_68334);
if(temp__4657__auto___68343){
var seq__68323_68344__$1 = temp__4657__auto___68343;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68323_68344__$1)){
var c__26790__auto___68345 = cljs.core.chunk_first.call(null,seq__68323_68344__$1);
var G__68346 = cljs.core.chunk_rest.call(null,seq__68323_68344__$1);
var G__68347 = c__26790__auto___68345;
var G__68348 = cljs.core.count.call(null,c__26790__auto___68345);
var G__68349 = (0);
seq__68323_68334 = G__68346;
chunk__68324_68335 = G__68347;
count__68325_68336 = G__68348;
i__68326_68337 = G__68349;
continue;
} else {
var dep_68350 = cljs.core.first.call(null,seq__68323_68344__$1);
topo_sort_helper_STAR_.call(null,dep_68350,(depth + (1)),state);

var G__68351 = cljs.core.next.call(null,seq__68323_68344__$1);
var G__68352 = null;
var G__68353 = (0);
var G__68354 = (0);
seq__68323_68334 = G__68351;
chunk__68324_68335 = G__68352;
count__68325_68336 = G__68353;
i__68326_68337 = G__68354;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__68327){
var vec__68331 = p__68327;
var seq__68332 = cljs.core.seq.call(null,vec__68331);
var first__68333 = cljs.core.first.call(null,seq__68332);
var seq__68332__$1 = cljs.core.next.call(null,seq__68332);
var x = first__68333;
var xs = seq__68332__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__68331,seq__68332,first__68333,seq__68332__$1,x,xs,get_deps__$1){
return (function (p1__68273_SHARP_){
return clojure.set.difference.call(null,p1__68273_SHARP_,x);
});})(vec__68331,seq__68332,first__68333,seq__68332__$1,x,xs,get_deps__$1))
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
var seq__68367 = cljs.core.seq.call(null,provides);
var chunk__68368 = null;
var count__68369 = (0);
var i__68370 = (0);
while(true){
if((i__68370 < count__68369)){
var prov = cljs.core._nth.call(null,chunk__68368,i__68370);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__68371_68379 = cljs.core.seq.call(null,requires);
var chunk__68372_68380 = null;
var count__68373_68381 = (0);
var i__68374_68382 = (0);
while(true){
if((i__68374_68382 < count__68373_68381)){
var req_68383 = cljs.core._nth.call(null,chunk__68372_68380,i__68374_68382);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_68383,prov);

var G__68384 = seq__68371_68379;
var G__68385 = chunk__68372_68380;
var G__68386 = count__68373_68381;
var G__68387 = (i__68374_68382 + (1));
seq__68371_68379 = G__68384;
chunk__68372_68380 = G__68385;
count__68373_68381 = G__68386;
i__68374_68382 = G__68387;
continue;
} else {
var temp__4657__auto___68388 = cljs.core.seq.call(null,seq__68371_68379);
if(temp__4657__auto___68388){
var seq__68371_68389__$1 = temp__4657__auto___68388;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68371_68389__$1)){
var c__26790__auto___68390 = cljs.core.chunk_first.call(null,seq__68371_68389__$1);
var G__68391 = cljs.core.chunk_rest.call(null,seq__68371_68389__$1);
var G__68392 = c__26790__auto___68390;
var G__68393 = cljs.core.count.call(null,c__26790__auto___68390);
var G__68394 = (0);
seq__68371_68379 = G__68391;
chunk__68372_68380 = G__68392;
count__68373_68381 = G__68393;
i__68374_68382 = G__68394;
continue;
} else {
var req_68395 = cljs.core.first.call(null,seq__68371_68389__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_68395,prov);

var G__68396 = cljs.core.next.call(null,seq__68371_68389__$1);
var G__68397 = null;
var G__68398 = (0);
var G__68399 = (0);
seq__68371_68379 = G__68396;
chunk__68372_68380 = G__68397;
count__68373_68381 = G__68398;
i__68374_68382 = G__68399;
continue;
}
} else {
}
}
break;
}

var G__68400 = seq__68367;
var G__68401 = chunk__68368;
var G__68402 = count__68369;
var G__68403 = (i__68370 + (1));
seq__68367 = G__68400;
chunk__68368 = G__68401;
count__68369 = G__68402;
i__68370 = G__68403;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__68367);
if(temp__4657__auto__){
var seq__68367__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68367__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__68367__$1);
var G__68404 = cljs.core.chunk_rest.call(null,seq__68367__$1);
var G__68405 = c__26790__auto__;
var G__68406 = cljs.core.count.call(null,c__26790__auto__);
var G__68407 = (0);
seq__68367 = G__68404;
chunk__68368 = G__68405;
count__68369 = G__68406;
i__68370 = G__68407;
continue;
} else {
var prov = cljs.core.first.call(null,seq__68367__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__68375_68408 = cljs.core.seq.call(null,requires);
var chunk__68376_68409 = null;
var count__68377_68410 = (0);
var i__68378_68411 = (0);
while(true){
if((i__68378_68411 < count__68377_68410)){
var req_68412 = cljs.core._nth.call(null,chunk__68376_68409,i__68378_68411);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_68412,prov);

var G__68413 = seq__68375_68408;
var G__68414 = chunk__68376_68409;
var G__68415 = count__68377_68410;
var G__68416 = (i__68378_68411 + (1));
seq__68375_68408 = G__68413;
chunk__68376_68409 = G__68414;
count__68377_68410 = G__68415;
i__68378_68411 = G__68416;
continue;
} else {
var temp__4657__auto___68417__$1 = cljs.core.seq.call(null,seq__68375_68408);
if(temp__4657__auto___68417__$1){
var seq__68375_68418__$1 = temp__4657__auto___68417__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68375_68418__$1)){
var c__26790__auto___68419 = cljs.core.chunk_first.call(null,seq__68375_68418__$1);
var G__68420 = cljs.core.chunk_rest.call(null,seq__68375_68418__$1);
var G__68421 = c__26790__auto___68419;
var G__68422 = cljs.core.count.call(null,c__26790__auto___68419);
var G__68423 = (0);
seq__68375_68408 = G__68420;
chunk__68376_68409 = G__68421;
count__68377_68410 = G__68422;
i__68378_68411 = G__68423;
continue;
} else {
var req_68424 = cljs.core.first.call(null,seq__68375_68418__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_68424,prov);

var G__68425 = cljs.core.next.call(null,seq__68375_68418__$1);
var G__68426 = null;
var G__68427 = (0);
var G__68428 = (0);
seq__68375_68408 = G__68425;
chunk__68376_68409 = G__68426;
count__68377_68410 = G__68427;
i__68378_68411 = G__68428;
continue;
}
} else {
}
}
break;
}

var G__68429 = cljs.core.next.call(null,seq__68367__$1);
var G__68430 = null;
var G__68431 = (0);
var G__68432 = (0);
seq__68367 = G__68429;
chunk__68368 = G__68430;
count__68369 = G__68431;
i__68370 = G__68432;
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
var seq__68437_68441 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__68438_68442 = null;
var count__68439_68443 = (0);
var i__68440_68444 = (0);
while(true){
if((i__68440_68444 < count__68439_68443)){
var ns_68445 = cljs.core._nth.call(null,chunk__68438_68442,i__68440_68444);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_68445);

var G__68446 = seq__68437_68441;
var G__68447 = chunk__68438_68442;
var G__68448 = count__68439_68443;
var G__68449 = (i__68440_68444 + (1));
seq__68437_68441 = G__68446;
chunk__68438_68442 = G__68447;
count__68439_68443 = G__68448;
i__68440_68444 = G__68449;
continue;
} else {
var temp__4657__auto___68450 = cljs.core.seq.call(null,seq__68437_68441);
if(temp__4657__auto___68450){
var seq__68437_68451__$1 = temp__4657__auto___68450;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__68437_68451__$1)){
var c__26790__auto___68452 = cljs.core.chunk_first.call(null,seq__68437_68451__$1);
var G__68453 = cljs.core.chunk_rest.call(null,seq__68437_68451__$1);
var G__68454 = c__26790__auto___68452;
var G__68455 = cljs.core.count.call(null,c__26790__auto___68452);
var G__68456 = (0);
seq__68437_68441 = G__68453;
chunk__68438_68442 = G__68454;
count__68439_68443 = G__68455;
i__68440_68444 = G__68456;
continue;
} else {
var ns_68457 = cljs.core.first.call(null,seq__68437_68451__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_68457);

var G__68458 = cljs.core.next.call(null,seq__68437_68451__$1);
var G__68459 = null;
var G__68460 = (0);
var G__68461 = (0);
seq__68437_68441 = G__68458;
chunk__68438_68442 = G__68459;
count__68439_68443 = G__68460;
i__68440_68444 = G__68461;
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
var G__68462__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__68462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__68463__i = 0, G__68463__a = new Array(arguments.length -  0);
while (G__68463__i < G__68463__a.length) {G__68463__a[G__68463__i] = arguments[G__68463__i + 0]; ++G__68463__i;}
  args = new cljs.core.IndexedSeq(G__68463__a,0);
} 
return G__68462__delegate.call(this,args);};
G__68462.cljs$lang$maxFixedArity = 0;
G__68462.cljs$lang$applyTo = (function (arglist__68464){
var args = cljs.core.seq(arglist__68464);
return G__68462__delegate(args);
});
G__68462.cljs$core$IFn$_invoke$arity$variadic = G__68462__delegate;
return G__68462;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__68465 = cljs.core._EQ_;
var expr__68466 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__68465.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__68466))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__68465,expr__68466){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__68465,expr__68466))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__68465,expr__68466){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e68468){if((e68468 instanceof Error)){
var e = e68468;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e68468;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__68465,expr__68466))
} else {
if(cljs.core.truth_(pred__68465.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__68466))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__68465.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__68466))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__68465.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__68466))){
return ((function (pred__68465,expr__68466){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e68469){if((e68469 instanceof Error)){
var e = e68469;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e68469;

}
}})());
});
;})(pred__68465,expr__68466))
} else {
return ((function (pred__68465,expr__68466){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__68465,expr__68466))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__68470,callback){
var map__68473 = p__68470;
var map__68473__$1 = ((((!((map__68473 == null)))?((((map__68473.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68473.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68473):map__68473);
var file_msg = map__68473__$1;
var request_url = cljs.core.get.call(null,map__68473__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__68473,map__68473__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__68473,map__68473__$1,file_msg,request_url))
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
return (function (state_68497){
var state_val_68498 = (state_68497[(1)]);
if((state_val_68498 === (7))){
var inst_68493 = (state_68497[(2)]);
var state_68497__$1 = state_68497;
var statearr_68499_68519 = state_68497__$1;
(statearr_68499_68519[(2)] = inst_68493);

(statearr_68499_68519[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68498 === (1))){
var state_68497__$1 = state_68497;
var statearr_68500_68520 = state_68497__$1;
(statearr_68500_68520[(2)] = null);

(statearr_68500_68520[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68498 === (4))){
var inst_68477 = (state_68497[(7)]);
var inst_68477__$1 = (state_68497[(2)]);
var state_68497__$1 = (function (){var statearr_68501 = state_68497;
(statearr_68501[(7)] = inst_68477__$1);

return statearr_68501;
})();
if(cljs.core.truth_(inst_68477__$1)){
var statearr_68502_68521 = state_68497__$1;
(statearr_68502_68521[(1)] = (5));

} else {
var statearr_68503_68522 = state_68497__$1;
(statearr_68503_68522[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68498 === (6))){
var state_68497__$1 = state_68497;
var statearr_68504_68523 = state_68497__$1;
(statearr_68504_68523[(2)] = null);

(statearr_68504_68523[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68498 === (3))){
var inst_68495 = (state_68497[(2)]);
var state_68497__$1 = state_68497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68497__$1,inst_68495);
} else {
if((state_val_68498 === (2))){
var state_68497__$1 = state_68497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68497__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_68498 === (11))){
var inst_68489 = (state_68497[(2)]);
var state_68497__$1 = (function (){var statearr_68505 = state_68497;
(statearr_68505[(8)] = inst_68489);

return statearr_68505;
})();
var statearr_68506_68524 = state_68497__$1;
(statearr_68506_68524[(2)] = null);

(statearr_68506_68524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68498 === (9))){
var inst_68483 = (state_68497[(9)]);
var inst_68481 = (state_68497[(10)]);
var inst_68485 = inst_68483.call(null,inst_68481);
var state_68497__$1 = state_68497;
var statearr_68507_68525 = state_68497__$1;
(statearr_68507_68525[(2)] = inst_68485);

(statearr_68507_68525[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68498 === (5))){
var inst_68477 = (state_68497[(7)]);
var inst_68479 = figwheel.client.file_reloading.blocking_load.call(null,inst_68477);
var state_68497__$1 = state_68497;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68497__$1,(8),inst_68479);
} else {
if((state_val_68498 === (10))){
var inst_68481 = (state_68497[(10)]);
var inst_68487 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_68481);
var state_68497__$1 = state_68497;
var statearr_68508_68526 = state_68497__$1;
(statearr_68508_68526[(2)] = inst_68487);

(statearr_68508_68526[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68498 === (8))){
var inst_68483 = (state_68497[(9)]);
var inst_68477 = (state_68497[(7)]);
var inst_68481 = (state_68497[(2)]);
var inst_68482 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_68483__$1 = cljs.core.get.call(null,inst_68482,inst_68477);
var state_68497__$1 = (function (){var statearr_68509 = state_68497;
(statearr_68509[(9)] = inst_68483__$1);

(statearr_68509[(10)] = inst_68481);

return statearr_68509;
})();
if(cljs.core.truth_(inst_68483__$1)){
var statearr_68510_68527 = state_68497__$1;
(statearr_68510_68527[(1)] = (9));

} else {
var statearr_68511_68528 = state_68497__$1;
(statearr_68511_68528[(1)] = (10));

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
var statearr_68515 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_68515[(0)] = figwheel$client$file_reloading$state_machine__27989__auto__);

(statearr_68515[(1)] = (1));

return statearr_68515;
});
var figwheel$client$file_reloading$state_machine__27989__auto____1 = (function (state_68497){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_68497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e68516){if((e68516 instanceof Object)){
var ex__27992__auto__ = e68516;
var statearr_68517_68529 = state_68497;
(statearr_68517_68529[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68516;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68530 = state_68497;
state_68497 = G__68530;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27989__auto__ = function(state_68497){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27989__auto____1.call(this,state_68497);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27989__auto____0;
figwheel$client$file_reloading$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27989__auto____1;
return figwheel$client$file_reloading$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_68518 = f__28010__auto__.call(null);
(statearr_68518[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_68518;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__68531,callback){
var map__68534 = p__68531;
var map__68534__$1 = ((((!((map__68534 == null)))?((((map__68534.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68534.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68534):map__68534);
var file_msg = map__68534__$1;
var namespace = cljs.core.get.call(null,map__68534__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__68534,map__68534__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__68534,map__68534__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__68536){
var map__68539 = p__68536;
var map__68539__$1 = ((((!((map__68539 == null)))?((((map__68539.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68539.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68539):map__68539);
var file_msg = map__68539__$1;
var namespace = cljs.core.get.call(null,map__68539__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__68541){
var map__68544 = p__68541;
var map__68544__$1 = ((((!((map__68544 == null)))?((((map__68544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68544):map__68544);
var file_msg = map__68544__$1;
var namespace = cljs.core.get.call(null,map__68544__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__68546,callback){
var map__68549 = p__68546;
var map__68549__$1 = ((((!((map__68549 == null)))?((((map__68549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68549):map__68549);
var file_msg = map__68549__$1;
var request_url = cljs.core.get.call(null,map__68549__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__68549__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28009__auto___68653 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___68653,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___68653,out){
return (function (state_68635){
var state_val_68636 = (state_68635[(1)]);
if((state_val_68636 === (1))){
var inst_68609 = cljs.core.seq.call(null,files);
var inst_68610 = cljs.core.first.call(null,inst_68609);
var inst_68611 = cljs.core.next.call(null,inst_68609);
var inst_68612 = files;
var state_68635__$1 = (function (){var statearr_68637 = state_68635;
(statearr_68637[(7)] = inst_68612);

(statearr_68637[(8)] = inst_68611);

(statearr_68637[(9)] = inst_68610);

return statearr_68637;
})();
var statearr_68638_68654 = state_68635__$1;
(statearr_68638_68654[(2)] = null);

(statearr_68638_68654[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68636 === (2))){
var inst_68612 = (state_68635[(7)]);
var inst_68618 = (state_68635[(10)]);
var inst_68617 = cljs.core.seq.call(null,inst_68612);
var inst_68618__$1 = cljs.core.first.call(null,inst_68617);
var inst_68619 = cljs.core.next.call(null,inst_68617);
var inst_68620 = (inst_68618__$1 == null);
var inst_68621 = cljs.core.not.call(null,inst_68620);
var state_68635__$1 = (function (){var statearr_68639 = state_68635;
(statearr_68639[(11)] = inst_68619);

(statearr_68639[(10)] = inst_68618__$1);

return statearr_68639;
})();
if(inst_68621){
var statearr_68640_68655 = state_68635__$1;
(statearr_68640_68655[(1)] = (4));

} else {
var statearr_68641_68656 = state_68635__$1;
(statearr_68641_68656[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68636 === (3))){
var inst_68633 = (state_68635[(2)]);
var state_68635__$1 = state_68635;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_68635__$1,inst_68633);
} else {
if((state_val_68636 === (4))){
var inst_68618 = (state_68635[(10)]);
var inst_68623 = figwheel.client.file_reloading.reload_js_file.call(null,inst_68618);
var state_68635__$1 = state_68635;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_68635__$1,(7),inst_68623);
} else {
if((state_val_68636 === (5))){
var inst_68629 = cljs.core.async.close_BANG_.call(null,out);
var state_68635__$1 = state_68635;
var statearr_68642_68657 = state_68635__$1;
(statearr_68642_68657[(2)] = inst_68629);

(statearr_68642_68657[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68636 === (6))){
var inst_68631 = (state_68635[(2)]);
var state_68635__$1 = state_68635;
var statearr_68643_68658 = state_68635__$1;
(statearr_68643_68658[(2)] = inst_68631);

(statearr_68643_68658[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_68636 === (7))){
var inst_68619 = (state_68635[(11)]);
var inst_68625 = (state_68635[(2)]);
var inst_68626 = cljs.core.async.put_BANG_.call(null,out,inst_68625);
var inst_68612 = inst_68619;
var state_68635__$1 = (function (){var statearr_68644 = state_68635;
(statearr_68644[(7)] = inst_68612);

(statearr_68644[(12)] = inst_68626);

return statearr_68644;
})();
var statearr_68645_68659 = state_68635__$1;
(statearr_68645_68659[(2)] = null);

(statearr_68645_68659[(1)] = (2));


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
});})(c__28009__auto___68653,out))
;
return ((function (switch__27988__auto__,c__28009__auto___68653,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0 = (function (){
var statearr_68649 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_68649[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__);

(statearr_68649[(1)] = (1));

return statearr_68649;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1 = (function (state_68635){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_68635);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e68650){if((e68650 instanceof Object)){
var ex__27992__auto__ = e68650;
var statearr_68651_68660 = state_68635;
(statearr_68651_68660[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_68635);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e68650;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__68661 = state_68635;
state_68635 = G__68661;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__ = function(state_68635){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1.call(this,state_68635);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___68653,out))
})();
var state__28011__auto__ = (function (){var statearr_68652 = f__28010__auto__.call(null);
(statearr_68652[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___68653);

return statearr_68652;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___68653,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__68662,opts){
var map__68666 = p__68662;
var map__68666__$1 = ((((!((map__68666 == null)))?((((map__68666.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68666.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68666):map__68666);
var eval_body__$1 = cljs.core.get.call(null,map__68666__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__68666__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e68668){var e = e68668;
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
return (function (p1__68669_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__68669_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__68678){
var vec__68679 = p__68678;
var k = cljs.core.nth.call(null,vec__68679,(0),null);
var v = cljs.core.nth.call(null,vec__68679,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__68682){
var vec__68683 = p__68682;
var k = cljs.core.nth.call(null,vec__68683,(0),null);
var v = cljs.core.nth.call(null,vec__68683,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__68689,p__68690){
var map__68937 = p__68689;
var map__68937__$1 = ((((!((map__68937 == null)))?((((map__68937.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68937.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68937):map__68937);
var opts = map__68937__$1;
var before_jsload = cljs.core.get.call(null,map__68937__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__68937__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__68937__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__68938 = p__68690;
var map__68938__$1 = ((((!((map__68938 == null)))?((((map__68938.cljs$lang$protocol_mask$partition0$ & (64))) || (map__68938.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__68938):map__68938);
var msg = map__68938__$1;
var files = cljs.core.get.call(null,map__68938__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__68938__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__68938__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_69091){
var state_val_69092 = (state_69091[(1)]);
if((state_val_69092 === (7))){
var inst_68954 = (state_69091[(7)]);
var inst_68955 = (state_69091[(8)]);
var inst_68953 = (state_69091[(9)]);
var inst_68952 = (state_69091[(10)]);
var inst_68960 = cljs.core._nth.call(null,inst_68953,inst_68955);
var inst_68961 = figwheel.client.file_reloading.eval_body.call(null,inst_68960,opts);
var inst_68962 = (inst_68955 + (1));
var tmp69093 = inst_68954;
var tmp69094 = inst_68953;
var tmp69095 = inst_68952;
var inst_68952__$1 = tmp69095;
var inst_68953__$1 = tmp69094;
var inst_68954__$1 = tmp69093;
var inst_68955__$1 = inst_68962;
var state_69091__$1 = (function (){var statearr_69096 = state_69091;
(statearr_69096[(7)] = inst_68954__$1);

(statearr_69096[(8)] = inst_68955__$1);

(statearr_69096[(9)] = inst_68953__$1);

(statearr_69096[(10)] = inst_68952__$1);

(statearr_69096[(11)] = inst_68961);

return statearr_69096;
})();
var statearr_69097_69183 = state_69091__$1;
(statearr_69097_69183[(2)] = null);

(statearr_69097_69183[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (20))){
var inst_68995 = (state_69091[(12)]);
var inst_69003 = figwheel.client.file_reloading.sort_files.call(null,inst_68995);
var state_69091__$1 = state_69091;
var statearr_69098_69184 = state_69091__$1;
(statearr_69098_69184[(2)] = inst_69003);

(statearr_69098_69184[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (27))){
var state_69091__$1 = state_69091;
var statearr_69099_69185 = state_69091__$1;
(statearr_69099_69185[(2)] = null);

(statearr_69099_69185[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (1))){
var inst_68944 = (state_69091[(13)]);
var inst_68941 = before_jsload.call(null,files);
var inst_68942 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_68943 = (function (){return ((function (inst_68944,inst_68941,inst_68942,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__68686_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__68686_SHARP_);
});
;})(inst_68944,inst_68941,inst_68942,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68944__$1 = cljs.core.filter.call(null,inst_68943,files);
var inst_68945 = cljs.core.not_empty.call(null,inst_68944__$1);
var state_69091__$1 = (function (){var statearr_69100 = state_69091;
(statearr_69100[(14)] = inst_68941);

(statearr_69100[(15)] = inst_68942);

(statearr_69100[(13)] = inst_68944__$1);

return statearr_69100;
})();
if(cljs.core.truth_(inst_68945)){
var statearr_69101_69186 = state_69091__$1;
(statearr_69101_69186[(1)] = (2));

} else {
var statearr_69102_69187 = state_69091__$1;
(statearr_69102_69187[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (24))){
var state_69091__$1 = state_69091;
var statearr_69103_69188 = state_69091__$1;
(statearr_69103_69188[(2)] = null);

(statearr_69103_69188[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (39))){
var inst_69045 = (state_69091[(16)]);
var state_69091__$1 = state_69091;
var statearr_69104_69189 = state_69091__$1;
(statearr_69104_69189[(2)] = inst_69045);

(statearr_69104_69189[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (46))){
var inst_69086 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
var statearr_69105_69190 = state_69091__$1;
(statearr_69105_69190[(2)] = inst_69086);

(statearr_69105_69190[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (4))){
var inst_68989 = (state_69091[(2)]);
var inst_68990 = cljs.core.List.EMPTY;
var inst_68991 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_68990);
var inst_68992 = (function (){return ((function (inst_68989,inst_68990,inst_68991,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__68687_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__68687_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__68687_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__68687_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_68989,inst_68990,inst_68991,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_68993 = cljs.core.filter.call(null,inst_68992,files);
var inst_68994 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_68995 = cljs.core.concat.call(null,inst_68993,inst_68994);
var state_69091__$1 = (function (){var statearr_69106 = state_69091;
(statearr_69106[(17)] = inst_68989);

(statearr_69106[(18)] = inst_68991);

(statearr_69106[(12)] = inst_68995);

return statearr_69106;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_69107_69191 = state_69091__$1;
(statearr_69107_69191[(1)] = (16));

} else {
var statearr_69108_69192 = state_69091__$1;
(statearr_69108_69192[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (15))){
var inst_68979 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
var statearr_69109_69193 = state_69091__$1;
(statearr_69109_69193[(2)] = inst_68979);

(statearr_69109_69193[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (21))){
var inst_69005 = (state_69091[(19)]);
var inst_69005__$1 = (state_69091[(2)]);
var inst_69006 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_69005__$1);
var state_69091__$1 = (function (){var statearr_69110 = state_69091;
(statearr_69110[(19)] = inst_69005__$1);

return statearr_69110;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_69091__$1,(22),inst_69006);
} else {
if((state_val_69092 === (31))){
var inst_69089 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_69091__$1,inst_69089);
} else {
if((state_val_69092 === (32))){
var inst_69045 = (state_69091[(16)]);
var inst_69050 = inst_69045.cljs$lang$protocol_mask$partition0$;
var inst_69051 = (inst_69050 & (64));
var inst_69052 = inst_69045.cljs$core$ISeq$;
var inst_69053 = (inst_69051) || (inst_69052);
var state_69091__$1 = state_69091;
if(cljs.core.truth_(inst_69053)){
var statearr_69111_69194 = state_69091__$1;
(statearr_69111_69194[(1)] = (35));

} else {
var statearr_69112_69195 = state_69091__$1;
(statearr_69112_69195[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (40))){
var inst_69066 = (state_69091[(20)]);
var inst_69065 = (state_69091[(2)]);
var inst_69066__$1 = cljs.core.get.call(null,inst_69065,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_69067 = cljs.core.get.call(null,inst_69065,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_69068 = cljs.core.not_empty.call(null,inst_69066__$1);
var state_69091__$1 = (function (){var statearr_69113 = state_69091;
(statearr_69113[(20)] = inst_69066__$1);

(statearr_69113[(21)] = inst_69067);

return statearr_69113;
})();
if(cljs.core.truth_(inst_69068)){
var statearr_69114_69196 = state_69091__$1;
(statearr_69114_69196[(1)] = (41));

} else {
var statearr_69115_69197 = state_69091__$1;
(statearr_69115_69197[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (33))){
var state_69091__$1 = state_69091;
var statearr_69116_69198 = state_69091__$1;
(statearr_69116_69198[(2)] = false);

(statearr_69116_69198[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (13))){
var inst_68965 = (state_69091[(22)]);
var inst_68969 = cljs.core.chunk_first.call(null,inst_68965);
var inst_68970 = cljs.core.chunk_rest.call(null,inst_68965);
var inst_68971 = cljs.core.count.call(null,inst_68969);
var inst_68952 = inst_68970;
var inst_68953 = inst_68969;
var inst_68954 = inst_68971;
var inst_68955 = (0);
var state_69091__$1 = (function (){var statearr_69117 = state_69091;
(statearr_69117[(7)] = inst_68954);

(statearr_69117[(8)] = inst_68955);

(statearr_69117[(9)] = inst_68953);

(statearr_69117[(10)] = inst_68952);

return statearr_69117;
})();
var statearr_69118_69199 = state_69091__$1;
(statearr_69118_69199[(2)] = null);

(statearr_69118_69199[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (22))){
var inst_69008 = (state_69091[(23)]);
var inst_69005 = (state_69091[(19)]);
var inst_69009 = (state_69091[(24)]);
var inst_69013 = (state_69091[(25)]);
var inst_69008__$1 = (state_69091[(2)]);
var inst_69009__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_69008__$1);
var inst_69010 = (function (){var all_files = inst_69005;
var res_SINGLEQUOTE_ = inst_69008__$1;
var res = inst_69009__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_69008,inst_69005,inst_69009,inst_69013,inst_69008__$1,inst_69009__$1,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__68688_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__68688_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_69008,inst_69005,inst_69009,inst_69013,inst_69008__$1,inst_69009__$1,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69011 = cljs.core.filter.call(null,inst_69010,inst_69008__$1);
var inst_69012 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_69013__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_69012);
var inst_69014 = cljs.core.not_empty.call(null,inst_69013__$1);
var state_69091__$1 = (function (){var statearr_69119 = state_69091;
(statearr_69119[(23)] = inst_69008__$1);

(statearr_69119[(26)] = inst_69011);

(statearr_69119[(24)] = inst_69009__$1);

(statearr_69119[(25)] = inst_69013__$1);

return statearr_69119;
})();
if(cljs.core.truth_(inst_69014)){
var statearr_69120_69200 = state_69091__$1;
(statearr_69120_69200[(1)] = (23));

} else {
var statearr_69121_69201 = state_69091__$1;
(statearr_69121_69201[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (36))){
var state_69091__$1 = state_69091;
var statearr_69122_69202 = state_69091__$1;
(statearr_69122_69202[(2)] = false);

(statearr_69122_69202[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (41))){
var inst_69066 = (state_69091[(20)]);
var inst_69070 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_69071 = cljs.core.map.call(null,inst_69070,inst_69066);
var inst_69072 = cljs.core.pr_str.call(null,inst_69071);
var inst_69073 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_69072)].join('');
var inst_69074 = figwheel.client.utils.log.call(null,inst_69073);
var state_69091__$1 = state_69091;
var statearr_69123_69203 = state_69091__$1;
(statearr_69123_69203[(2)] = inst_69074);

(statearr_69123_69203[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (43))){
var inst_69067 = (state_69091[(21)]);
var inst_69077 = (state_69091[(2)]);
var inst_69078 = cljs.core.not_empty.call(null,inst_69067);
var state_69091__$1 = (function (){var statearr_69124 = state_69091;
(statearr_69124[(27)] = inst_69077);

return statearr_69124;
})();
if(cljs.core.truth_(inst_69078)){
var statearr_69125_69204 = state_69091__$1;
(statearr_69125_69204[(1)] = (44));

} else {
var statearr_69126_69205 = state_69091__$1;
(statearr_69126_69205[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (29))){
var inst_69008 = (state_69091[(23)]);
var inst_69045 = (state_69091[(16)]);
var inst_69005 = (state_69091[(19)]);
var inst_69011 = (state_69091[(26)]);
var inst_69009 = (state_69091[(24)]);
var inst_69013 = (state_69091[(25)]);
var inst_69041 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_69044 = (function (){var all_files = inst_69005;
var res_SINGLEQUOTE_ = inst_69008;
var res = inst_69009;
var files_not_loaded = inst_69011;
var dependencies_that_loaded = inst_69013;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69008,inst_69045,inst_69005,inst_69011,inst_69009,inst_69013,inst_69041,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__69043){
var map__69127 = p__69043;
var map__69127__$1 = ((((!((map__69127 == null)))?((((map__69127.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69127.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69127):map__69127);
var namespace = cljs.core.get.call(null,map__69127__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69008,inst_69045,inst_69005,inst_69011,inst_69009,inst_69013,inst_69041,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69045__$1 = cljs.core.group_by.call(null,inst_69044,inst_69011);
var inst_69047 = (inst_69045__$1 == null);
var inst_69048 = cljs.core.not.call(null,inst_69047);
var state_69091__$1 = (function (){var statearr_69129 = state_69091;
(statearr_69129[(16)] = inst_69045__$1);

(statearr_69129[(28)] = inst_69041);

return statearr_69129;
})();
if(inst_69048){
var statearr_69130_69206 = state_69091__$1;
(statearr_69130_69206[(1)] = (32));

} else {
var statearr_69131_69207 = state_69091__$1;
(statearr_69131_69207[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (44))){
var inst_69067 = (state_69091[(21)]);
var inst_69080 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_69067);
var inst_69081 = cljs.core.pr_str.call(null,inst_69080);
var inst_69082 = [cljs.core.str("not required: "),cljs.core.str(inst_69081)].join('');
var inst_69083 = figwheel.client.utils.log.call(null,inst_69082);
var state_69091__$1 = state_69091;
var statearr_69132_69208 = state_69091__$1;
(statearr_69132_69208[(2)] = inst_69083);

(statearr_69132_69208[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (6))){
var inst_68986 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
var statearr_69133_69209 = state_69091__$1;
(statearr_69133_69209[(2)] = inst_68986);

(statearr_69133_69209[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (28))){
var inst_69011 = (state_69091[(26)]);
var inst_69038 = (state_69091[(2)]);
var inst_69039 = cljs.core.not_empty.call(null,inst_69011);
var state_69091__$1 = (function (){var statearr_69134 = state_69091;
(statearr_69134[(29)] = inst_69038);

return statearr_69134;
})();
if(cljs.core.truth_(inst_69039)){
var statearr_69135_69210 = state_69091__$1;
(statearr_69135_69210[(1)] = (29));

} else {
var statearr_69136_69211 = state_69091__$1;
(statearr_69136_69211[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (25))){
var inst_69009 = (state_69091[(24)]);
var inst_69025 = (state_69091[(2)]);
var inst_69026 = cljs.core.not_empty.call(null,inst_69009);
var state_69091__$1 = (function (){var statearr_69137 = state_69091;
(statearr_69137[(30)] = inst_69025);

return statearr_69137;
})();
if(cljs.core.truth_(inst_69026)){
var statearr_69138_69212 = state_69091__$1;
(statearr_69138_69212[(1)] = (26));

} else {
var statearr_69139_69213 = state_69091__$1;
(statearr_69139_69213[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (34))){
var inst_69060 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
if(cljs.core.truth_(inst_69060)){
var statearr_69140_69214 = state_69091__$1;
(statearr_69140_69214[(1)] = (38));

} else {
var statearr_69141_69215 = state_69091__$1;
(statearr_69141_69215[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (17))){
var state_69091__$1 = state_69091;
var statearr_69142_69216 = state_69091__$1;
(statearr_69142_69216[(2)] = recompile_dependents);

(statearr_69142_69216[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (3))){
var state_69091__$1 = state_69091;
var statearr_69143_69217 = state_69091__$1;
(statearr_69143_69217[(2)] = null);

(statearr_69143_69217[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (12))){
var inst_68982 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
var statearr_69144_69218 = state_69091__$1;
(statearr_69144_69218[(2)] = inst_68982);

(statearr_69144_69218[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (2))){
var inst_68944 = (state_69091[(13)]);
var inst_68951 = cljs.core.seq.call(null,inst_68944);
var inst_68952 = inst_68951;
var inst_68953 = null;
var inst_68954 = (0);
var inst_68955 = (0);
var state_69091__$1 = (function (){var statearr_69145 = state_69091;
(statearr_69145[(7)] = inst_68954);

(statearr_69145[(8)] = inst_68955);

(statearr_69145[(9)] = inst_68953);

(statearr_69145[(10)] = inst_68952);

return statearr_69145;
})();
var statearr_69146_69219 = state_69091__$1;
(statearr_69146_69219[(2)] = null);

(statearr_69146_69219[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (23))){
var inst_69008 = (state_69091[(23)]);
var inst_69005 = (state_69091[(19)]);
var inst_69011 = (state_69091[(26)]);
var inst_69009 = (state_69091[(24)]);
var inst_69013 = (state_69091[(25)]);
var inst_69016 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_69018 = (function (){var all_files = inst_69005;
var res_SINGLEQUOTE_ = inst_69008;
var res = inst_69009;
var files_not_loaded = inst_69011;
var dependencies_that_loaded = inst_69013;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69008,inst_69005,inst_69011,inst_69009,inst_69013,inst_69016,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__69017){
var map__69147 = p__69017;
var map__69147__$1 = ((((!((map__69147 == null)))?((((map__69147.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69147.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69147):map__69147);
var request_url = cljs.core.get.call(null,map__69147__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69008,inst_69005,inst_69011,inst_69009,inst_69013,inst_69016,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69019 = cljs.core.reverse.call(null,inst_69013);
var inst_69020 = cljs.core.map.call(null,inst_69018,inst_69019);
var inst_69021 = cljs.core.pr_str.call(null,inst_69020);
var inst_69022 = figwheel.client.utils.log.call(null,inst_69021);
var state_69091__$1 = (function (){var statearr_69149 = state_69091;
(statearr_69149[(31)] = inst_69016);

return statearr_69149;
})();
var statearr_69150_69220 = state_69091__$1;
(statearr_69150_69220[(2)] = inst_69022);

(statearr_69150_69220[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (35))){
var state_69091__$1 = state_69091;
var statearr_69151_69221 = state_69091__$1;
(statearr_69151_69221[(2)] = true);

(statearr_69151_69221[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (19))){
var inst_68995 = (state_69091[(12)]);
var inst_69001 = figwheel.client.file_reloading.expand_files.call(null,inst_68995);
var state_69091__$1 = state_69091;
var statearr_69152_69222 = state_69091__$1;
(statearr_69152_69222[(2)] = inst_69001);

(statearr_69152_69222[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (11))){
var state_69091__$1 = state_69091;
var statearr_69153_69223 = state_69091__$1;
(statearr_69153_69223[(2)] = null);

(statearr_69153_69223[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (9))){
var inst_68984 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
var statearr_69154_69224 = state_69091__$1;
(statearr_69154_69224[(2)] = inst_68984);

(statearr_69154_69224[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (5))){
var inst_68954 = (state_69091[(7)]);
var inst_68955 = (state_69091[(8)]);
var inst_68957 = (inst_68955 < inst_68954);
var inst_68958 = inst_68957;
var state_69091__$1 = state_69091;
if(cljs.core.truth_(inst_68958)){
var statearr_69155_69225 = state_69091__$1;
(statearr_69155_69225[(1)] = (7));

} else {
var statearr_69156_69226 = state_69091__$1;
(statearr_69156_69226[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (14))){
var inst_68965 = (state_69091[(22)]);
var inst_68974 = cljs.core.first.call(null,inst_68965);
var inst_68975 = figwheel.client.file_reloading.eval_body.call(null,inst_68974,opts);
var inst_68976 = cljs.core.next.call(null,inst_68965);
var inst_68952 = inst_68976;
var inst_68953 = null;
var inst_68954 = (0);
var inst_68955 = (0);
var state_69091__$1 = (function (){var statearr_69157 = state_69091;
(statearr_69157[(7)] = inst_68954);

(statearr_69157[(8)] = inst_68955);

(statearr_69157[(9)] = inst_68953);

(statearr_69157[(32)] = inst_68975);

(statearr_69157[(10)] = inst_68952);

return statearr_69157;
})();
var statearr_69158_69227 = state_69091__$1;
(statearr_69158_69227[(2)] = null);

(statearr_69158_69227[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (45))){
var state_69091__$1 = state_69091;
var statearr_69159_69228 = state_69091__$1;
(statearr_69159_69228[(2)] = null);

(statearr_69159_69228[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (26))){
var inst_69008 = (state_69091[(23)]);
var inst_69005 = (state_69091[(19)]);
var inst_69011 = (state_69091[(26)]);
var inst_69009 = (state_69091[(24)]);
var inst_69013 = (state_69091[(25)]);
var inst_69028 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_69030 = (function (){var all_files = inst_69005;
var res_SINGLEQUOTE_ = inst_69008;
var res = inst_69009;
var files_not_loaded = inst_69011;
var dependencies_that_loaded = inst_69013;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69008,inst_69005,inst_69011,inst_69009,inst_69013,inst_69028,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__69029){
var map__69160 = p__69029;
var map__69160__$1 = ((((!((map__69160 == null)))?((((map__69160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69160):map__69160);
var namespace = cljs.core.get.call(null,map__69160__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__69160__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69008,inst_69005,inst_69011,inst_69009,inst_69013,inst_69028,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69031 = cljs.core.map.call(null,inst_69030,inst_69009);
var inst_69032 = cljs.core.pr_str.call(null,inst_69031);
var inst_69033 = figwheel.client.utils.log.call(null,inst_69032);
var inst_69034 = (function (){var all_files = inst_69005;
var res_SINGLEQUOTE_ = inst_69008;
var res = inst_69009;
var files_not_loaded = inst_69011;
var dependencies_that_loaded = inst_69013;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69008,inst_69005,inst_69011,inst_69009,inst_69013,inst_69028,inst_69030,inst_69031,inst_69032,inst_69033,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_69008,inst_69005,inst_69011,inst_69009,inst_69013,inst_69028,inst_69030,inst_69031,inst_69032,inst_69033,state_val_69092,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_69035 = setTimeout(inst_69034,(10));
var state_69091__$1 = (function (){var statearr_69162 = state_69091;
(statearr_69162[(33)] = inst_69028);

(statearr_69162[(34)] = inst_69033);

return statearr_69162;
})();
var statearr_69163_69229 = state_69091__$1;
(statearr_69163_69229[(2)] = inst_69035);

(statearr_69163_69229[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (16))){
var state_69091__$1 = state_69091;
var statearr_69164_69230 = state_69091__$1;
(statearr_69164_69230[(2)] = reload_dependents);

(statearr_69164_69230[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (38))){
var inst_69045 = (state_69091[(16)]);
var inst_69062 = cljs.core.apply.call(null,cljs.core.hash_map,inst_69045);
var state_69091__$1 = state_69091;
var statearr_69165_69231 = state_69091__$1;
(statearr_69165_69231[(2)] = inst_69062);

(statearr_69165_69231[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (30))){
var state_69091__$1 = state_69091;
var statearr_69166_69232 = state_69091__$1;
(statearr_69166_69232[(2)] = null);

(statearr_69166_69232[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (10))){
var inst_68965 = (state_69091[(22)]);
var inst_68967 = cljs.core.chunked_seq_QMARK_.call(null,inst_68965);
var state_69091__$1 = state_69091;
if(inst_68967){
var statearr_69167_69233 = state_69091__$1;
(statearr_69167_69233[(1)] = (13));

} else {
var statearr_69168_69234 = state_69091__$1;
(statearr_69168_69234[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (18))){
var inst_68999 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
if(cljs.core.truth_(inst_68999)){
var statearr_69169_69235 = state_69091__$1;
(statearr_69169_69235[(1)] = (19));

} else {
var statearr_69170_69236 = state_69091__$1;
(statearr_69170_69236[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (42))){
var state_69091__$1 = state_69091;
var statearr_69171_69237 = state_69091__$1;
(statearr_69171_69237[(2)] = null);

(statearr_69171_69237[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (37))){
var inst_69057 = (state_69091[(2)]);
var state_69091__$1 = state_69091;
var statearr_69172_69238 = state_69091__$1;
(statearr_69172_69238[(2)] = inst_69057);

(statearr_69172_69238[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_69092 === (8))){
var inst_68965 = (state_69091[(22)]);
var inst_68952 = (state_69091[(10)]);
var inst_68965__$1 = cljs.core.seq.call(null,inst_68952);
var state_69091__$1 = (function (){var statearr_69173 = state_69091;
(statearr_69173[(22)] = inst_68965__$1);

return statearr_69173;
})();
if(inst_68965__$1){
var statearr_69174_69239 = state_69091__$1;
(statearr_69174_69239[(1)] = (10));

} else {
var statearr_69175_69240 = state_69091__$1;
(statearr_69175_69240[(1)] = (11));

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
});})(c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27988__auto__,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0 = (function (){
var statearr_69179 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_69179[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__);

(statearr_69179[(1)] = (1));

return statearr_69179;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1 = (function (state_69091){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_69091);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e69180){if((e69180 instanceof Object)){
var ex__27992__auto__ = e69180;
var statearr_69181_69241 = state_69091;
(statearr_69181_69241[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_69091);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e69180;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__69242 = state_69091;
state_69091 = G__69242;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__ = function(state_69091){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1.call(this,state_69091);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28011__auto__ = (function (){var statearr_69182 = f__28010__auto__.call(null);
(statearr_69182[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_69182;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,map__68937,map__68937__$1,opts,before_jsload,on_jsload,reload_dependents,map__68938,map__68938__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28009__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__69245,link){
var map__69248 = p__69245;
var map__69248__$1 = ((((!((map__69248 == null)))?((((map__69248.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69248.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69248):map__69248);
var file = cljs.core.get.call(null,map__69248__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__69248,map__69248__$1,file){
return (function (p1__69243_SHARP_,p2__69244_SHARP_){
if(cljs.core._EQ_.call(null,p1__69243_SHARP_,p2__69244_SHARP_)){
return p1__69243_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__69248,map__69248__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__69254){
var map__69255 = p__69254;
var map__69255__$1 = ((((!((map__69255 == null)))?((((map__69255.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69255.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69255):map__69255);
var match_length = cljs.core.get.call(null,map__69255__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__69255__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__69250_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__69250_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__69257_SHARP_,p2__69258_SHARP_){
return cljs.core.assoc.call(null,p1__69257_SHARP_,cljs.core.get.call(null,p2__69258_SHARP_,key),p2__69258_SHARP_);
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
var loaded_f_datas_69259 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_69259);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_69259);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__69260,p__69261){
var map__69266 = p__69260;
var map__69266__$1 = ((((!((map__69266 == null)))?((((map__69266.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69266.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69266):map__69266);
var on_cssload = cljs.core.get.call(null,map__69266__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__69267 = p__69261;
var map__69267__$1 = ((((!((map__69267 == null)))?((((map__69267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__69267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__69267):map__69267);
var files_msg = map__69267__$1;
var files = cljs.core.get.call(null,map__69267__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1499924868712