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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__34357_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__34357_SHARP_));
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
var seq__34362 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__34363 = null;
var count__34364 = (0);
var i__34365 = (0);
while(true){
if((i__34365 < count__34364)){
var n = cljs.core._nth.call(null,chunk__34363,i__34365);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34366 = seq__34362;
var G__34367 = chunk__34363;
var G__34368 = count__34364;
var G__34369 = (i__34365 + (1));
seq__34362 = G__34366;
chunk__34363 = G__34367;
count__34364 = G__34368;
i__34365 = G__34369;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34362);
if(temp__4657__auto__){
var seq__34362__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34362__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__34362__$1);
var G__34370 = cljs.core.chunk_rest.call(null,seq__34362__$1);
var G__34371 = c__26790__auto__;
var G__34372 = cljs.core.count.call(null,c__26790__auto__);
var G__34373 = (0);
seq__34362 = G__34370;
chunk__34363 = G__34371;
count__34364 = G__34372;
i__34365 = G__34373;
continue;
} else {
var n = cljs.core.first.call(null,seq__34362__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__34374 = cljs.core.next.call(null,seq__34362__$1);
var G__34375 = null;
var G__34376 = (0);
var G__34377 = (0);
seq__34362 = G__34374;
chunk__34363 = G__34375;
count__34364 = G__34376;
i__34365 = G__34377;
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

var seq__34428_34439 = cljs.core.seq.call(null,deps);
var chunk__34429_34440 = null;
var count__34430_34441 = (0);
var i__34431_34442 = (0);
while(true){
if((i__34431_34442 < count__34430_34441)){
var dep_34443 = cljs.core._nth.call(null,chunk__34429_34440,i__34431_34442);
topo_sort_helper_STAR_.call(null,dep_34443,(depth + (1)),state);

var G__34444 = seq__34428_34439;
var G__34445 = chunk__34429_34440;
var G__34446 = count__34430_34441;
var G__34447 = (i__34431_34442 + (1));
seq__34428_34439 = G__34444;
chunk__34429_34440 = G__34445;
count__34430_34441 = G__34446;
i__34431_34442 = G__34447;
continue;
} else {
var temp__4657__auto___34448 = cljs.core.seq.call(null,seq__34428_34439);
if(temp__4657__auto___34448){
var seq__34428_34449__$1 = temp__4657__auto___34448;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34428_34449__$1)){
var c__26790__auto___34450 = cljs.core.chunk_first.call(null,seq__34428_34449__$1);
var G__34451 = cljs.core.chunk_rest.call(null,seq__34428_34449__$1);
var G__34452 = c__26790__auto___34450;
var G__34453 = cljs.core.count.call(null,c__26790__auto___34450);
var G__34454 = (0);
seq__34428_34439 = G__34451;
chunk__34429_34440 = G__34452;
count__34430_34441 = G__34453;
i__34431_34442 = G__34454;
continue;
} else {
var dep_34455 = cljs.core.first.call(null,seq__34428_34449__$1);
topo_sort_helper_STAR_.call(null,dep_34455,(depth + (1)),state);

var G__34456 = cljs.core.next.call(null,seq__34428_34449__$1);
var G__34457 = null;
var G__34458 = (0);
var G__34459 = (0);
seq__34428_34439 = G__34456;
chunk__34429_34440 = G__34457;
count__34430_34441 = G__34458;
i__34431_34442 = G__34459;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__34432){
var vec__34436 = p__34432;
var seq__34437 = cljs.core.seq.call(null,vec__34436);
var first__34438 = cljs.core.first.call(null,seq__34437);
var seq__34437__$1 = cljs.core.next.call(null,seq__34437);
var x = first__34438;
var xs = seq__34437__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__34436,seq__34437,first__34438,seq__34437__$1,x,xs,get_deps__$1){
return (function (p1__34378_SHARP_){
return clojure.set.difference.call(null,p1__34378_SHARP_,x);
});})(vec__34436,seq__34437,first__34438,seq__34437__$1,x,xs,get_deps__$1))
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
var seq__34472 = cljs.core.seq.call(null,provides);
var chunk__34473 = null;
var count__34474 = (0);
var i__34475 = (0);
while(true){
if((i__34475 < count__34474)){
var prov = cljs.core._nth.call(null,chunk__34473,i__34475);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34476_34484 = cljs.core.seq.call(null,requires);
var chunk__34477_34485 = null;
var count__34478_34486 = (0);
var i__34479_34487 = (0);
while(true){
if((i__34479_34487 < count__34478_34486)){
var req_34488 = cljs.core._nth.call(null,chunk__34477_34485,i__34479_34487);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34488,prov);

var G__34489 = seq__34476_34484;
var G__34490 = chunk__34477_34485;
var G__34491 = count__34478_34486;
var G__34492 = (i__34479_34487 + (1));
seq__34476_34484 = G__34489;
chunk__34477_34485 = G__34490;
count__34478_34486 = G__34491;
i__34479_34487 = G__34492;
continue;
} else {
var temp__4657__auto___34493 = cljs.core.seq.call(null,seq__34476_34484);
if(temp__4657__auto___34493){
var seq__34476_34494__$1 = temp__4657__auto___34493;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34476_34494__$1)){
var c__26790__auto___34495 = cljs.core.chunk_first.call(null,seq__34476_34494__$1);
var G__34496 = cljs.core.chunk_rest.call(null,seq__34476_34494__$1);
var G__34497 = c__26790__auto___34495;
var G__34498 = cljs.core.count.call(null,c__26790__auto___34495);
var G__34499 = (0);
seq__34476_34484 = G__34496;
chunk__34477_34485 = G__34497;
count__34478_34486 = G__34498;
i__34479_34487 = G__34499;
continue;
} else {
var req_34500 = cljs.core.first.call(null,seq__34476_34494__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34500,prov);

var G__34501 = cljs.core.next.call(null,seq__34476_34494__$1);
var G__34502 = null;
var G__34503 = (0);
var G__34504 = (0);
seq__34476_34484 = G__34501;
chunk__34477_34485 = G__34502;
count__34478_34486 = G__34503;
i__34479_34487 = G__34504;
continue;
}
} else {
}
}
break;
}

var G__34505 = seq__34472;
var G__34506 = chunk__34473;
var G__34507 = count__34474;
var G__34508 = (i__34475 + (1));
seq__34472 = G__34505;
chunk__34473 = G__34506;
count__34474 = G__34507;
i__34475 = G__34508;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__34472);
if(temp__4657__auto__){
var seq__34472__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34472__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__34472__$1);
var G__34509 = cljs.core.chunk_rest.call(null,seq__34472__$1);
var G__34510 = c__26790__auto__;
var G__34511 = cljs.core.count.call(null,c__26790__auto__);
var G__34512 = (0);
seq__34472 = G__34509;
chunk__34473 = G__34510;
count__34474 = G__34511;
i__34475 = G__34512;
continue;
} else {
var prov = cljs.core.first.call(null,seq__34472__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__34480_34513 = cljs.core.seq.call(null,requires);
var chunk__34481_34514 = null;
var count__34482_34515 = (0);
var i__34483_34516 = (0);
while(true){
if((i__34483_34516 < count__34482_34515)){
var req_34517 = cljs.core._nth.call(null,chunk__34481_34514,i__34483_34516);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34517,prov);

var G__34518 = seq__34480_34513;
var G__34519 = chunk__34481_34514;
var G__34520 = count__34482_34515;
var G__34521 = (i__34483_34516 + (1));
seq__34480_34513 = G__34518;
chunk__34481_34514 = G__34519;
count__34482_34515 = G__34520;
i__34483_34516 = G__34521;
continue;
} else {
var temp__4657__auto___34522__$1 = cljs.core.seq.call(null,seq__34480_34513);
if(temp__4657__auto___34522__$1){
var seq__34480_34523__$1 = temp__4657__auto___34522__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34480_34523__$1)){
var c__26790__auto___34524 = cljs.core.chunk_first.call(null,seq__34480_34523__$1);
var G__34525 = cljs.core.chunk_rest.call(null,seq__34480_34523__$1);
var G__34526 = c__26790__auto___34524;
var G__34527 = cljs.core.count.call(null,c__26790__auto___34524);
var G__34528 = (0);
seq__34480_34513 = G__34525;
chunk__34481_34514 = G__34526;
count__34482_34515 = G__34527;
i__34483_34516 = G__34528;
continue;
} else {
var req_34529 = cljs.core.first.call(null,seq__34480_34523__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_34529,prov);

var G__34530 = cljs.core.next.call(null,seq__34480_34523__$1);
var G__34531 = null;
var G__34532 = (0);
var G__34533 = (0);
seq__34480_34513 = G__34530;
chunk__34481_34514 = G__34531;
count__34482_34515 = G__34532;
i__34483_34516 = G__34533;
continue;
}
} else {
}
}
break;
}

var G__34534 = cljs.core.next.call(null,seq__34472__$1);
var G__34535 = null;
var G__34536 = (0);
var G__34537 = (0);
seq__34472 = G__34534;
chunk__34473 = G__34535;
count__34474 = G__34536;
i__34475 = G__34537;
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
var seq__34542_34546 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__34543_34547 = null;
var count__34544_34548 = (0);
var i__34545_34549 = (0);
while(true){
if((i__34545_34549 < count__34544_34548)){
var ns_34550 = cljs.core._nth.call(null,chunk__34543_34547,i__34545_34549);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34550);

var G__34551 = seq__34542_34546;
var G__34552 = chunk__34543_34547;
var G__34553 = count__34544_34548;
var G__34554 = (i__34545_34549 + (1));
seq__34542_34546 = G__34551;
chunk__34543_34547 = G__34552;
count__34544_34548 = G__34553;
i__34545_34549 = G__34554;
continue;
} else {
var temp__4657__auto___34555 = cljs.core.seq.call(null,seq__34542_34546);
if(temp__4657__auto___34555){
var seq__34542_34556__$1 = temp__4657__auto___34555;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__34542_34556__$1)){
var c__26790__auto___34557 = cljs.core.chunk_first.call(null,seq__34542_34556__$1);
var G__34558 = cljs.core.chunk_rest.call(null,seq__34542_34556__$1);
var G__34559 = c__26790__auto___34557;
var G__34560 = cljs.core.count.call(null,c__26790__auto___34557);
var G__34561 = (0);
seq__34542_34546 = G__34558;
chunk__34543_34547 = G__34559;
count__34544_34548 = G__34560;
i__34545_34549 = G__34561;
continue;
} else {
var ns_34562 = cljs.core.first.call(null,seq__34542_34556__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_34562);

var G__34563 = cljs.core.next.call(null,seq__34542_34556__$1);
var G__34564 = null;
var G__34565 = (0);
var G__34566 = (0);
seq__34542_34546 = G__34563;
chunk__34543_34547 = G__34564;
count__34544_34548 = G__34565;
i__34545_34549 = G__34566;
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
var G__34567__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__34567 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__34568__i = 0, G__34568__a = new Array(arguments.length -  0);
while (G__34568__i < G__34568__a.length) {G__34568__a[G__34568__i] = arguments[G__34568__i + 0]; ++G__34568__i;}
  args = new cljs.core.IndexedSeq(G__34568__a,0);
} 
return G__34567__delegate.call(this,args);};
G__34567.cljs$lang$maxFixedArity = 0;
G__34567.cljs$lang$applyTo = (function (arglist__34569){
var args = cljs.core.seq(arglist__34569);
return G__34567__delegate(args);
});
G__34567.cljs$core$IFn$_invoke$arity$variadic = G__34567__delegate;
return G__34567;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__34570 = cljs.core._EQ_;
var expr__34571 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__34570.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__34571))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__34570,expr__34571){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__34570,expr__34571))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__34570,expr__34571){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e34573){if((e34573 instanceof Error)){
var e = e34573;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34573;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__34570,expr__34571))
} else {
if(cljs.core.truth_(pred__34570.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__34571))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34570.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__34571))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__34570.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__34571))){
return ((function (pred__34570,expr__34571){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e34574){if((e34574 instanceof Error)){
var e = e34574;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e34574;

}
}})());
});
;})(pred__34570,expr__34571))
} else {
return ((function (pred__34570,expr__34571){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__34570,expr__34571))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__34575,callback){
var map__34578 = p__34575;
var map__34578__$1 = ((((!((map__34578 == null)))?((((map__34578.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34578.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34578):map__34578);
var file_msg = map__34578__$1;
var request_url = cljs.core.get.call(null,map__34578__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__34578,map__34578__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__34578,map__34578__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__){
return (function (state_34602){
var state_val_34603 = (state_34602[(1)]);
if((state_val_34603 === (7))){
var inst_34598 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
var statearr_34604_34624 = state_34602__$1;
(statearr_34604_34624[(2)] = inst_34598);

(statearr_34604_34624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (1))){
var state_34602__$1 = state_34602;
var statearr_34605_34625 = state_34602__$1;
(statearr_34605_34625[(2)] = null);

(statearr_34605_34625[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (4))){
var inst_34582 = (state_34602[(7)]);
var inst_34582__$1 = (state_34602[(2)]);
var state_34602__$1 = (function (){var statearr_34606 = state_34602;
(statearr_34606[(7)] = inst_34582__$1);

return statearr_34606;
})();
if(cljs.core.truth_(inst_34582__$1)){
var statearr_34607_34626 = state_34602__$1;
(statearr_34607_34626[(1)] = (5));

} else {
var statearr_34608_34627 = state_34602__$1;
(statearr_34608_34627[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (6))){
var state_34602__$1 = state_34602;
var statearr_34609_34628 = state_34602__$1;
(statearr_34609_34628[(2)] = null);

(statearr_34609_34628[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (3))){
var inst_34600 = (state_34602[(2)]);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34602__$1,inst_34600);
} else {
if((state_val_34603 === (2))){
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34602__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_34603 === (11))){
var inst_34594 = (state_34602[(2)]);
var state_34602__$1 = (function (){var statearr_34610 = state_34602;
(statearr_34610[(8)] = inst_34594);

return statearr_34610;
})();
var statearr_34611_34629 = state_34602__$1;
(statearr_34611_34629[(2)] = null);

(statearr_34611_34629[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (9))){
var inst_34588 = (state_34602[(9)]);
var inst_34586 = (state_34602[(10)]);
var inst_34590 = inst_34588.call(null,inst_34586);
var state_34602__$1 = state_34602;
var statearr_34612_34630 = state_34602__$1;
(statearr_34612_34630[(2)] = inst_34590);

(statearr_34612_34630[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (5))){
var inst_34582 = (state_34602[(7)]);
var inst_34584 = figwheel.client.file_reloading.blocking_load.call(null,inst_34582);
var state_34602__$1 = state_34602;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34602__$1,(8),inst_34584);
} else {
if((state_val_34603 === (10))){
var inst_34586 = (state_34602[(10)]);
var inst_34592 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_34586);
var state_34602__$1 = state_34602;
var statearr_34613_34631 = state_34602__$1;
(statearr_34613_34631[(2)] = inst_34592);

(statearr_34613_34631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34603 === (8))){
var inst_34588 = (state_34602[(9)]);
var inst_34582 = (state_34602[(7)]);
var inst_34586 = (state_34602[(2)]);
var inst_34587 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_34588__$1 = cljs.core.get.call(null,inst_34587,inst_34582);
var state_34602__$1 = (function (){var statearr_34614 = state_34602;
(statearr_34614[(9)] = inst_34588__$1);

(statearr_34614[(10)] = inst_34586);

return statearr_34614;
})();
if(cljs.core.truth_(inst_34588__$1)){
var statearr_34615_34632 = state_34602__$1;
(statearr_34615_34632[(1)] = (9));

} else {
var statearr_34616_34633 = state_34602__$1;
(statearr_34616_34633[(1)] = (10));

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
});})(c__28171__auto__))
;
return ((function (switch__28150__auto__,c__28171__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28151__auto__ = null;
var figwheel$client$file_reloading$state_machine__28151__auto____0 = (function (){
var statearr_34620 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34620[(0)] = figwheel$client$file_reloading$state_machine__28151__auto__);

(statearr_34620[(1)] = (1));

return statearr_34620;
});
var figwheel$client$file_reloading$state_machine__28151__auto____1 = (function (state_34602){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_34602);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e34621){if((e34621 instanceof Object)){
var ex__28154__auto__ = e34621;
var statearr_34622_34634 = state_34602;
(statearr_34622_34634[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34602);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34621;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34635 = state_34602;
state_34602 = G__34635;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28151__auto__ = function(state_34602){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28151__auto____1.call(this,state_34602);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28151__auto____0;
figwheel$client$file_reloading$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28151__auto____1;
return figwheel$client$file_reloading$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_34623 = f__28172__auto__.call(null);
(statearr_34623[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_34623;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__))
);

return c__28171__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__34636,callback){
var map__34639 = p__34636;
var map__34639__$1 = ((((!((map__34639 == null)))?((((map__34639.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34639.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34639):map__34639);
var file_msg = map__34639__$1;
var namespace = cljs.core.get.call(null,map__34639__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__34639,map__34639__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__34639,map__34639__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__34641){
var map__34644 = p__34641;
var map__34644__$1 = ((((!((map__34644 == null)))?((((map__34644.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34644.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34644):map__34644);
var file_msg = map__34644__$1;
var namespace = cljs.core.get.call(null,map__34644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__34646){
var map__34649 = p__34646;
var map__34649__$1 = ((((!((map__34649 == null)))?((((map__34649.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34649.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34649):map__34649);
var file_msg = map__34649__$1;
var namespace = cljs.core.get.call(null,map__34649__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__34651,callback){
var map__34654 = p__34651;
var map__34654__$1 = ((((!((map__34654 == null)))?((((map__34654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34654):map__34654);
var file_msg = map__34654__$1;
var request_url = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__34654__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28171__auto___34758 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___34758,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___34758,out){
return (function (state_34740){
var state_val_34741 = (state_34740[(1)]);
if((state_val_34741 === (1))){
var inst_34714 = cljs.core.seq.call(null,files);
var inst_34715 = cljs.core.first.call(null,inst_34714);
var inst_34716 = cljs.core.next.call(null,inst_34714);
var inst_34717 = files;
var state_34740__$1 = (function (){var statearr_34742 = state_34740;
(statearr_34742[(7)] = inst_34716);

(statearr_34742[(8)] = inst_34717);

(statearr_34742[(9)] = inst_34715);

return statearr_34742;
})();
var statearr_34743_34759 = state_34740__$1;
(statearr_34743_34759[(2)] = null);

(statearr_34743_34759[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (2))){
var inst_34717 = (state_34740[(8)]);
var inst_34723 = (state_34740[(10)]);
var inst_34722 = cljs.core.seq.call(null,inst_34717);
var inst_34723__$1 = cljs.core.first.call(null,inst_34722);
var inst_34724 = cljs.core.next.call(null,inst_34722);
var inst_34725 = (inst_34723__$1 == null);
var inst_34726 = cljs.core.not.call(null,inst_34725);
var state_34740__$1 = (function (){var statearr_34744 = state_34740;
(statearr_34744[(11)] = inst_34724);

(statearr_34744[(10)] = inst_34723__$1);

return statearr_34744;
})();
if(inst_34726){
var statearr_34745_34760 = state_34740__$1;
(statearr_34745_34760[(1)] = (4));

} else {
var statearr_34746_34761 = state_34740__$1;
(statearr_34746_34761[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (3))){
var inst_34738 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34740__$1,inst_34738);
} else {
if((state_val_34741 === (4))){
var inst_34723 = (state_34740[(10)]);
var inst_34728 = figwheel.client.file_reloading.reload_js_file.call(null,inst_34723);
var state_34740__$1 = state_34740;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34740__$1,(7),inst_34728);
} else {
if((state_val_34741 === (5))){
var inst_34734 = cljs.core.async.close_BANG_.call(null,out);
var state_34740__$1 = state_34740;
var statearr_34747_34762 = state_34740__$1;
(statearr_34747_34762[(2)] = inst_34734);

(statearr_34747_34762[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (6))){
var inst_34736 = (state_34740[(2)]);
var state_34740__$1 = state_34740;
var statearr_34748_34763 = state_34740__$1;
(statearr_34748_34763[(2)] = inst_34736);

(statearr_34748_34763[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34741 === (7))){
var inst_34724 = (state_34740[(11)]);
var inst_34730 = (state_34740[(2)]);
var inst_34731 = cljs.core.async.put_BANG_.call(null,out,inst_34730);
var inst_34717 = inst_34724;
var state_34740__$1 = (function (){var statearr_34749 = state_34740;
(statearr_34749[(8)] = inst_34717);

(statearr_34749[(12)] = inst_34731);

return statearr_34749;
})();
var statearr_34750_34764 = state_34740__$1;
(statearr_34750_34764[(2)] = null);

(statearr_34750_34764[(1)] = (2));


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
});})(c__28171__auto___34758,out))
;
return ((function (switch__28150__auto__,c__28171__auto___34758,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0 = (function (){
var statearr_34754 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34754[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__);

(statearr_34754[(1)] = (1));

return statearr_34754;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1 = (function (state_34740){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_34740);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e34755){if((e34755 instanceof Object)){
var ex__28154__auto__ = e34755;
var statearr_34756_34765 = state_34740;
(statearr_34756_34765[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34740);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34755;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34766 = state_34740;
state_34740 = G__34766;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__ = function(state_34740){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1.call(this,state_34740);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___34758,out))
})();
var state__28173__auto__ = (function (){var statearr_34757 = f__28172__auto__.call(null);
(statearr_34757[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___34758);

return statearr_34757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___34758,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__34767,opts){
var map__34771 = p__34767;
var map__34771__$1 = ((((!((map__34771 == null)))?((((map__34771.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34771.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34771):map__34771);
var eval_body__$1 = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__34771__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e34773){var e = e34773;
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
return (function (p1__34774_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34774_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__34783){
var vec__34784 = p__34783;
var k = cljs.core.nth.call(null,vec__34784,(0),null);
var v = cljs.core.nth.call(null,vec__34784,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__34787){
var vec__34788 = p__34787;
var k = cljs.core.nth.call(null,vec__34788,(0),null);
var v = cljs.core.nth.call(null,vec__34788,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__34794,p__34795){
var map__35042 = p__34794;
var map__35042__$1 = ((((!((map__35042 == null)))?((((map__35042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35042):map__35042);
var opts = map__35042__$1;
var before_jsload = cljs.core.get.call(null,map__35042__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__35042__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__35042__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__35043 = p__34795;
var map__35043__$1 = ((((!((map__35043 == null)))?((((map__35043.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35043.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35043):map__35043);
var msg = map__35043__$1;
var files = cljs.core.get.call(null,map__35043__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__35043__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__35043__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_35196){
var state_val_35197 = (state_35196[(1)]);
if((state_val_35197 === (7))){
var inst_35057 = (state_35196[(7)]);
var inst_35060 = (state_35196[(8)]);
var inst_35058 = (state_35196[(9)]);
var inst_35059 = (state_35196[(10)]);
var inst_35065 = cljs.core._nth.call(null,inst_35058,inst_35060);
var inst_35066 = figwheel.client.file_reloading.eval_body.call(null,inst_35065,opts);
var inst_35067 = (inst_35060 + (1));
var tmp35198 = inst_35057;
var tmp35199 = inst_35058;
var tmp35200 = inst_35059;
var inst_35057__$1 = tmp35198;
var inst_35058__$1 = tmp35199;
var inst_35059__$1 = tmp35200;
var inst_35060__$1 = inst_35067;
var state_35196__$1 = (function (){var statearr_35201 = state_35196;
(statearr_35201[(7)] = inst_35057__$1);

(statearr_35201[(8)] = inst_35060__$1);

(statearr_35201[(9)] = inst_35058__$1);

(statearr_35201[(10)] = inst_35059__$1);

(statearr_35201[(11)] = inst_35066);

return statearr_35201;
})();
var statearr_35202_35288 = state_35196__$1;
(statearr_35202_35288[(2)] = null);

(statearr_35202_35288[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (20))){
var inst_35100 = (state_35196[(12)]);
var inst_35108 = figwheel.client.file_reloading.sort_files.call(null,inst_35100);
var state_35196__$1 = state_35196;
var statearr_35203_35289 = state_35196__$1;
(statearr_35203_35289[(2)] = inst_35108);

(statearr_35203_35289[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (27))){
var state_35196__$1 = state_35196;
var statearr_35204_35290 = state_35196__$1;
(statearr_35204_35290[(2)] = null);

(statearr_35204_35290[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (1))){
var inst_35049 = (state_35196[(13)]);
var inst_35046 = before_jsload.call(null,files);
var inst_35047 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_35048 = (function (){return ((function (inst_35049,inst_35046,inst_35047,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34791_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34791_SHARP_);
});
;})(inst_35049,inst_35046,inst_35047,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35049__$1 = cljs.core.filter.call(null,inst_35048,files);
var inst_35050 = cljs.core.not_empty.call(null,inst_35049__$1);
var state_35196__$1 = (function (){var statearr_35205 = state_35196;
(statearr_35205[(14)] = inst_35047);

(statearr_35205[(15)] = inst_35046);

(statearr_35205[(13)] = inst_35049__$1);

return statearr_35205;
})();
if(cljs.core.truth_(inst_35050)){
var statearr_35206_35291 = state_35196__$1;
(statearr_35206_35291[(1)] = (2));

} else {
var statearr_35207_35292 = state_35196__$1;
(statearr_35207_35292[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (24))){
var state_35196__$1 = state_35196;
var statearr_35208_35293 = state_35196__$1;
(statearr_35208_35293[(2)] = null);

(statearr_35208_35293[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (39))){
var inst_35150 = (state_35196[(16)]);
var state_35196__$1 = state_35196;
var statearr_35209_35294 = state_35196__$1;
(statearr_35209_35294[(2)] = inst_35150);

(statearr_35209_35294[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (46))){
var inst_35191 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
var statearr_35210_35295 = state_35196__$1;
(statearr_35210_35295[(2)] = inst_35191);

(statearr_35210_35295[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (4))){
var inst_35094 = (state_35196[(2)]);
var inst_35095 = cljs.core.List.EMPTY;
var inst_35096 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_35095);
var inst_35097 = (function (){return ((function (inst_35094,inst_35095,inst_35096,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34792_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__34792_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__34792_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__34792_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_35094,inst_35095,inst_35096,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35098 = cljs.core.filter.call(null,inst_35097,files);
var inst_35099 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_35100 = cljs.core.concat.call(null,inst_35098,inst_35099);
var state_35196__$1 = (function (){var statearr_35211 = state_35196;
(statearr_35211[(17)] = inst_35096);

(statearr_35211[(18)] = inst_35094);

(statearr_35211[(12)] = inst_35100);

return statearr_35211;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_35212_35296 = state_35196__$1;
(statearr_35212_35296[(1)] = (16));

} else {
var statearr_35213_35297 = state_35196__$1;
(statearr_35213_35297[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (15))){
var inst_35084 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
var statearr_35214_35298 = state_35196__$1;
(statearr_35214_35298[(2)] = inst_35084);

(statearr_35214_35298[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (21))){
var inst_35110 = (state_35196[(19)]);
var inst_35110__$1 = (state_35196[(2)]);
var inst_35111 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_35110__$1);
var state_35196__$1 = (function (){var statearr_35215 = state_35196;
(statearr_35215[(19)] = inst_35110__$1);

return statearr_35215;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35196__$1,(22),inst_35111);
} else {
if((state_val_35197 === (31))){
var inst_35194 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35196__$1,inst_35194);
} else {
if((state_val_35197 === (32))){
var inst_35150 = (state_35196[(16)]);
var inst_35155 = inst_35150.cljs$lang$protocol_mask$partition0$;
var inst_35156 = (inst_35155 & (64));
var inst_35157 = inst_35150.cljs$core$ISeq$;
var inst_35158 = (inst_35156) || (inst_35157);
var state_35196__$1 = state_35196;
if(cljs.core.truth_(inst_35158)){
var statearr_35216_35299 = state_35196__$1;
(statearr_35216_35299[(1)] = (35));

} else {
var statearr_35217_35300 = state_35196__$1;
(statearr_35217_35300[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (40))){
var inst_35171 = (state_35196[(20)]);
var inst_35170 = (state_35196[(2)]);
var inst_35171__$1 = cljs.core.get.call(null,inst_35170,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_35172 = cljs.core.get.call(null,inst_35170,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_35173 = cljs.core.not_empty.call(null,inst_35171__$1);
var state_35196__$1 = (function (){var statearr_35218 = state_35196;
(statearr_35218[(21)] = inst_35172);

(statearr_35218[(20)] = inst_35171__$1);

return statearr_35218;
})();
if(cljs.core.truth_(inst_35173)){
var statearr_35219_35301 = state_35196__$1;
(statearr_35219_35301[(1)] = (41));

} else {
var statearr_35220_35302 = state_35196__$1;
(statearr_35220_35302[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (33))){
var state_35196__$1 = state_35196;
var statearr_35221_35303 = state_35196__$1;
(statearr_35221_35303[(2)] = false);

(statearr_35221_35303[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (13))){
var inst_35070 = (state_35196[(22)]);
var inst_35074 = cljs.core.chunk_first.call(null,inst_35070);
var inst_35075 = cljs.core.chunk_rest.call(null,inst_35070);
var inst_35076 = cljs.core.count.call(null,inst_35074);
var inst_35057 = inst_35075;
var inst_35058 = inst_35074;
var inst_35059 = inst_35076;
var inst_35060 = (0);
var state_35196__$1 = (function (){var statearr_35222 = state_35196;
(statearr_35222[(7)] = inst_35057);

(statearr_35222[(8)] = inst_35060);

(statearr_35222[(9)] = inst_35058);

(statearr_35222[(10)] = inst_35059);

return statearr_35222;
})();
var statearr_35223_35304 = state_35196__$1;
(statearr_35223_35304[(2)] = null);

(statearr_35223_35304[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (22))){
var inst_35113 = (state_35196[(23)]);
var inst_35110 = (state_35196[(19)]);
var inst_35118 = (state_35196[(24)]);
var inst_35114 = (state_35196[(25)]);
var inst_35113__$1 = (state_35196[(2)]);
var inst_35114__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35113__$1);
var inst_35115 = (function (){var all_files = inst_35110;
var res_SINGLEQUOTE_ = inst_35113__$1;
var res = inst_35114__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_35113,inst_35110,inst_35118,inst_35114,inst_35113__$1,inst_35114__$1,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__34793_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__34793_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_35113,inst_35110,inst_35118,inst_35114,inst_35113__$1,inst_35114__$1,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35116 = cljs.core.filter.call(null,inst_35115,inst_35113__$1);
var inst_35117 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_35118__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_35117);
var inst_35119 = cljs.core.not_empty.call(null,inst_35118__$1);
var state_35196__$1 = (function (){var statearr_35224 = state_35196;
(statearr_35224[(23)] = inst_35113__$1);

(statearr_35224[(26)] = inst_35116);

(statearr_35224[(24)] = inst_35118__$1);

(statearr_35224[(25)] = inst_35114__$1);

return statearr_35224;
})();
if(cljs.core.truth_(inst_35119)){
var statearr_35225_35305 = state_35196__$1;
(statearr_35225_35305[(1)] = (23));

} else {
var statearr_35226_35306 = state_35196__$1;
(statearr_35226_35306[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (36))){
var state_35196__$1 = state_35196;
var statearr_35227_35307 = state_35196__$1;
(statearr_35227_35307[(2)] = false);

(statearr_35227_35307[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (41))){
var inst_35171 = (state_35196[(20)]);
var inst_35175 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_35176 = cljs.core.map.call(null,inst_35175,inst_35171);
var inst_35177 = cljs.core.pr_str.call(null,inst_35176);
var inst_35178 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_35177)].join('');
var inst_35179 = figwheel.client.utils.log.call(null,inst_35178);
var state_35196__$1 = state_35196;
var statearr_35228_35308 = state_35196__$1;
(statearr_35228_35308[(2)] = inst_35179);

(statearr_35228_35308[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (43))){
var inst_35172 = (state_35196[(21)]);
var inst_35182 = (state_35196[(2)]);
var inst_35183 = cljs.core.not_empty.call(null,inst_35172);
var state_35196__$1 = (function (){var statearr_35229 = state_35196;
(statearr_35229[(27)] = inst_35182);

return statearr_35229;
})();
if(cljs.core.truth_(inst_35183)){
var statearr_35230_35309 = state_35196__$1;
(statearr_35230_35309[(1)] = (44));

} else {
var statearr_35231_35310 = state_35196__$1;
(statearr_35231_35310[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (29))){
var inst_35113 = (state_35196[(23)]);
var inst_35110 = (state_35196[(19)]);
var inst_35116 = (state_35196[(26)]);
var inst_35118 = (state_35196[(24)]);
var inst_35150 = (state_35196[(16)]);
var inst_35114 = (state_35196[(25)]);
var inst_35146 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_35149 = (function (){var all_files = inst_35110;
var res_SINGLEQUOTE_ = inst_35113;
var res = inst_35114;
var files_not_loaded = inst_35116;
var dependencies_that_loaded = inst_35118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35113,inst_35110,inst_35116,inst_35118,inst_35150,inst_35114,inst_35146,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35148){
var map__35232 = p__35148;
var map__35232__$1 = ((((!((map__35232 == null)))?((((map__35232.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35232.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35232):map__35232);
var namespace = cljs.core.get.call(null,map__35232__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35113,inst_35110,inst_35116,inst_35118,inst_35150,inst_35114,inst_35146,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35150__$1 = cljs.core.group_by.call(null,inst_35149,inst_35116);
var inst_35152 = (inst_35150__$1 == null);
var inst_35153 = cljs.core.not.call(null,inst_35152);
var state_35196__$1 = (function (){var statearr_35234 = state_35196;
(statearr_35234[(28)] = inst_35146);

(statearr_35234[(16)] = inst_35150__$1);

return statearr_35234;
})();
if(inst_35153){
var statearr_35235_35311 = state_35196__$1;
(statearr_35235_35311[(1)] = (32));

} else {
var statearr_35236_35312 = state_35196__$1;
(statearr_35236_35312[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (44))){
var inst_35172 = (state_35196[(21)]);
var inst_35185 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_35172);
var inst_35186 = cljs.core.pr_str.call(null,inst_35185);
var inst_35187 = [cljs.core.str("not required: "),cljs.core.str(inst_35186)].join('');
var inst_35188 = figwheel.client.utils.log.call(null,inst_35187);
var state_35196__$1 = state_35196;
var statearr_35237_35313 = state_35196__$1;
(statearr_35237_35313[(2)] = inst_35188);

(statearr_35237_35313[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (6))){
var inst_35091 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
var statearr_35238_35314 = state_35196__$1;
(statearr_35238_35314[(2)] = inst_35091);

(statearr_35238_35314[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (28))){
var inst_35116 = (state_35196[(26)]);
var inst_35143 = (state_35196[(2)]);
var inst_35144 = cljs.core.not_empty.call(null,inst_35116);
var state_35196__$1 = (function (){var statearr_35239 = state_35196;
(statearr_35239[(29)] = inst_35143);

return statearr_35239;
})();
if(cljs.core.truth_(inst_35144)){
var statearr_35240_35315 = state_35196__$1;
(statearr_35240_35315[(1)] = (29));

} else {
var statearr_35241_35316 = state_35196__$1;
(statearr_35241_35316[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (25))){
var inst_35114 = (state_35196[(25)]);
var inst_35130 = (state_35196[(2)]);
var inst_35131 = cljs.core.not_empty.call(null,inst_35114);
var state_35196__$1 = (function (){var statearr_35242 = state_35196;
(statearr_35242[(30)] = inst_35130);

return statearr_35242;
})();
if(cljs.core.truth_(inst_35131)){
var statearr_35243_35317 = state_35196__$1;
(statearr_35243_35317[(1)] = (26));

} else {
var statearr_35244_35318 = state_35196__$1;
(statearr_35244_35318[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (34))){
var inst_35165 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
if(cljs.core.truth_(inst_35165)){
var statearr_35245_35319 = state_35196__$1;
(statearr_35245_35319[(1)] = (38));

} else {
var statearr_35246_35320 = state_35196__$1;
(statearr_35246_35320[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (17))){
var state_35196__$1 = state_35196;
var statearr_35247_35321 = state_35196__$1;
(statearr_35247_35321[(2)] = recompile_dependents);

(statearr_35247_35321[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (3))){
var state_35196__$1 = state_35196;
var statearr_35248_35322 = state_35196__$1;
(statearr_35248_35322[(2)] = null);

(statearr_35248_35322[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (12))){
var inst_35087 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
var statearr_35249_35323 = state_35196__$1;
(statearr_35249_35323[(2)] = inst_35087);

(statearr_35249_35323[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (2))){
var inst_35049 = (state_35196[(13)]);
var inst_35056 = cljs.core.seq.call(null,inst_35049);
var inst_35057 = inst_35056;
var inst_35058 = null;
var inst_35059 = (0);
var inst_35060 = (0);
var state_35196__$1 = (function (){var statearr_35250 = state_35196;
(statearr_35250[(7)] = inst_35057);

(statearr_35250[(8)] = inst_35060);

(statearr_35250[(9)] = inst_35058);

(statearr_35250[(10)] = inst_35059);

return statearr_35250;
})();
var statearr_35251_35324 = state_35196__$1;
(statearr_35251_35324[(2)] = null);

(statearr_35251_35324[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (23))){
var inst_35113 = (state_35196[(23)]);
var inst_35110 = (state_35196[(19)]);
var inst_35116 = (state_35196[(26)]);
var inst_35118 = (state_35196[(24)]);
var inst_35114 = (state_35196[(25)]);
var inst_35121 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_35123 = (function (){var all_files = inst_35110;
var res_SINGLEQUOTE_ = inst_35113;
var res = inst_35114;
var files_not_loaded = inst_35116;
var dependencies_that_loaded = inst_35118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35113,inst_35110,inst_35116,inst_35118,inst_35114,inst_35121,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35122){
var map__35252 = p__35122;
var map__35252__$1 = ((((!((map__35252 == null)))?((((map__35252.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35252.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35252):map__35252);
var request_url = cljs.core.get.call(null,map__35252__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35113,inst_35110,inst_35116,inst_35118,inst_35114,inst_35121,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35124 = cljs.core.reverse.call(null,inst_35118);
var inst_35125 = cljs.core.map.call(null,inst_35123,inst_35124);
var inst_35126 = cljs.core.pr_str.call(null,inst_35125);
var inst_35127 = figwheel.client.utils.log.call(null,inst_35126);
var state_35196__$1 = (function (){var statearr_35254 = state_35196;
(statearr_35254[(31)] = inst_35121);

return statearr_35254;
})();
var statearr_35255_35325 = state_35196__$1;
(statearr_35255_35325[(2)] = inst_35127);

(statearr_35255_35325[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (35))){
var state_35196__$1 = state_35196;
var statearr_35256_35326 = state_35196__$1;
(statearr_35256_35326[(2)] = true);

(statearr_35256_35326[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (19))){
var inst_35100 = (state_35196[(12)]);
var inst_35106 = figwheel.client.file_reloading.expand_files.call(null,inst_35100);
var state_35196__$1 = state_35196;
var statearr_35257_35327 = state_35196__$1;
(statearr_35257_35327[(2)] = inst_35106);

(statearr_35257_35327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (11))){
var state_35196__$1 = state_35196;
var statearr_35258_35328 = state_35196__$1;
(statearr_35258_35328[(2)] = null);

(statearr_35258_35328[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (9))){
var inst_35089 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
var statearr_35259_35329 = state_35196__$1;
(statearr_35259_35329[(2)] = inst_35089);

(statearr_35259_35329[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (5))){
var inst_35060 = (state_35196[(8)]);
var inst_35059 = (state_35196[(10)]);
var inst_35062 = (inst_35060 < inst_35059);
var inst_35063 = inst_35062;
var state_35196__$1 = state_35196;
if(cljs.core.truth_(inst_35063)){
var statearr_35260_35330 = state_35196__$1;
(statearr_35260_35330[(1)] = (7));

} else {
var statearr_35261_35331 = state_35196__$1;
(statearr_35261_35331[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (14))){
var inst_35070 = (state_35196[(22)]);
var inst_35079 = cljs.core.first.call(null,inst_35070);
var inst_35080 = figwheel.client.file_reloading.eval_body.call(null,inst_35079,opts);
var inst_35081 = cljs.core.next.call(null,inst_35070);
var inst_35057 = inst_35081;
var inst_35058 = null;
var inst_35059 = (0);
var inst_35060 = (0);
var state_35196__$1 = (function (){var statearr_35262 = state_35196;
(statearr_35262[(7)] = inst_35057);

(statearr_35262[(32)] = inst_35080);

(statearr_35262[(8)] = inst_35060);

(statearr_35262[(9)] = inst_35058);

(statearr_35262[(10)] = inst_35059);

return statearr_35262;
})();
var statearr_35263_35332 = state_35196__$1;
(statearr_35263_35332[(2)] = null);

(statearr_35263_35332[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (45))){
var state_35196__$1 = state_35196;
var statearr_35264_35333 = state_35196__$1;
(statearr_35264_35333[(2)] = null);

(statearr_35264_35333[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (26))){
var inst_35113 = (state_35196[(23)]);
var inst_35110 = (state_35196[(19)]);
var inst_35116 = (state_35196[(26)]);
var inst_35118 = (state_35196[(24)]);
var inst_35114 = (state_35196[(25)]);
var inst_35133 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_35135 = (function (){var all_files = inst_35110;
var res_SINGLEQUOTE_ = inst_35113;
var res = inst_35114;
var files_not_loaded = inst_35116;
var dependencies_that_loaded = inst_35118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35113,inst_35110,inst_35116,inst_35118,inst_35114,inst_35133,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__35134){
var map__35265 = p__35134;
var map__35265__$1 = ((((!((map__35265 == null)))?((((map__35265.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35265.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35265):map__35265);
var namespace = cljs.core.get.call(null,map__35265__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__35265__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35113,inst_35110,inst_35116,inst_35118,inst_35114,inst_35133,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35136 = cljs.core.map.call(null,inst_35135,inst_35114);
var inst_35137 = cljs.core.pr_str.call(null,inst_35136);
var inst_35138 = figwheel.client.utils.log.call(null,inst_35137);
var inst_35139 = (function (){var all_files = inst_35110;
var res_SINGLEQUOTE_ = inst_35113;
var res = inst_35114;
var files_not_loaded = inst_35116;
var dependencies_that_loaded = inst_35118;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35113,inst_35110,inst_35116,inst_35118,inst_35114,inst_35133,inst_35135,inst_35136,inst_35137,inst_35138,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_35113,inst_35110,inst_35116,inst_35118,inst_35114,inst_35133,inst_35135,inst_35136,inst_35137,inst_35138,state_val_35197,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_35140 = setTimeout(inst_35139,(10));
var state_35196__$1 = (function (){var statearr_35267 = state_35196;
(statearr_35267[(33)] = inst_35138);

(statearr_35267[(34)] = inst_35133);

return statearr_35267;
})();
var statearr_35268_35334 = state_35196__$1;
(statearr_35268_35334[(2)] = inst_35140);

(statearr_35268_35334[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (16))){
var state_35196__$1 = state_35196;
var statearr_35269_35335 = state_35196__$1;
(statearr_35269_35335[(2)] = reload_dependents);

(statearr_35269_35335[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (38))){
var inst_35150 = (state_35196[(16)]);
var inst_35167 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35150);
var state_35196__$1 = state_35196;
var statearr_35270_35336 = state_35196__$1;
(statearr_35270_35336[(2)] = inst_35167);

(statearr_35270_35336[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (30))){
var state_35196__$1 = state_35196;
var statearr_35271_35337 = state_35196__$1;
(statearr_35271_35337[(2)] = null);

(statearr_35271_35337[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (10))){
var inst_35070 = (state_35196[(22)]);
var inst_35072 = cljs.core.chunked_seq_QMARK_.call(null,inst_35070);
var state_35196__$1 = state_35196;
if(inst_35072){
var statearr_35272_35338 = state_35196__$1;
(statearr_35272_35338[(1)] = (13));

} else {
var statearr_35273_35339 = state_35196__$1;
(statearr_35273_35339[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (18))){
var inst_35104 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
if(cljs.core.truth_(inst_35104)){
var statearr_35274_35340 = state_35196__$1;
(statearr_35274_35340[(1)] = (19));

} else {
var statearr_35275_35341 = state_35196__$1;
(statearr_35275_35341[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (42))){
var state_35196__$1 = state_35196;
var statearr_35276_35342 = state_35196__$1;
(statearr_35276_35342[(2)] = null);

(statearr_35276_35342[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (37))){
var inst_35162 = (state_35196[(2)]);
var state_35196__$1 = state_35196;
var statearr_35277_35343 = state_35196__$1;
(statearr_35277_35343[(2)] = inst_35162);

(statearr_35277_35343[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35197 === (8))){
var inst_35070 = (state_35196[(22)]);
var inst_35057 = (state_35196[(7)]);
var inst_35070__$1 = cljs.core.seq.call(null,inst_35057);
var state_35196__$1 = (function (){var statearr_35278 = state_35196;
(statearr_35278[(22)] = inst_35070__$1);

return statearr_35278;
})();
if(inst_35070__$1){
var statearr_35279_35344 = state_35196__$1;
(statearr_35279_35344[(1)] = (10));

} else {
var statearr_35280_35345 = state_35196__$1;
(statearr_35280_35345[(1)] = (11));

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
});})(c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28150__auto__,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0 = (function (){
var statearr_35284 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35284[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__);

(statearr_35284[(1)] = (1));

return statearr_35284;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1 = (function (state_35196){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_35196);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e35285){if((e35285 instanceof Object)){
var ex__28154__auto__ = e35285;
var statearr_35286_35346 = state_35196;
(statearr_35286_35346[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35196);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35285;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35347 = state_35196;
state_35196 = G__35347;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__ = function(state_35196){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1.call(this,state_35196);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28173__auto__ = (function (){var statearr_35287 = f__28172__auto__.call(null);
(statearr_35287[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_35287;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__,map__35042,map__35042__$1,opts,before_jsload,on_jsload,reload_dependents,map__35043,map__35043__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28171__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__35350,link){
var map__35353 = p__35350;
var map__35353__$1 = ((((!((map__35353 == null)))?((((map__35353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35353):map__35353);
var file = cljs.core.get.call(null,map__35353__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__35353,map__35353__$1,file){
return (function (p1__35348_SHARP_,p2__35349_SHARP_){
if(cljs.core._EQ_.call(null,p1__35348_SHARP_,p2__35349_SHARP_)){
return p1__35348_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__35353,map__35353__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__35359){
var map__35360 = p__35359;
var map__35360__$1 = ((((!((map__35360 == null)))?((((map__35360.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35360.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35360):map__35360);
var match_length = cljs.core.get.call(null,map__35360__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__35360__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__35355_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__35355_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__35362_SHARP_,p2__35363_SHARP_){
return cljs.core.assoc.call(null,p1__35362_SHARP_,cljs.core.get.call(null,p2__35363_SHARP_,key),p2__35363_SHARP_);
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
var loaded_f_datas_35364 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_35364);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_35364);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__35365,p__35366){
var map__35371 = p__35365;
var map__35371__$1 = ((((!((map__35371 == null)))?((((map__35371.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35371.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35371):map__35371);
var on_cssload = cljs.core.get.call(null,map__35371__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__35372 = p__35366;
var map__35372__$1 = ((((!((map__35372 == null)))?((((map__35372.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35372.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35372):map__35372);
var files_msg = map__35372__$1;
var files = cljs.core.get.call(null,map__35372__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1499543337747