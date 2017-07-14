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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__54412_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__54412_SHARP_));
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
var seq__54417 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__54418 = null;
var count__54419 = (0);
var i__54420 = (0);
while(true){
if((i__54420 < count__54419)){
var n = cljs.core._nth.call(null,chunk__54418,i__54420);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54421 = seq__54417;
var G__54422 = chunk__54418;
var G__54423 = count__54419;
var G__54424 = (i__54420 + (1));
seq__54417 = G__54421;
chunk__54418 = G__54422;
count__54419 = G__54423;
i__54420 = G__54424;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54417);
if(temp__4657__auto__){
var seq__54417__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54417__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__54417__$1);
var G__54425 = cljs.core.chunk_rest.call(null,seq__54417__$1);
var G__54426 = c__26790__auto__;
var G__54427 = cljs.core.count.call(null,c__26790__auto__);
var G__54428 = (0);
seq__54417 = G__54425;
chunk__54418 = G__54426;
count__54419 = G__54427;
i__54420 = G__54428;
continue;
} else {
var n = cljs.core.first.call(null,seq__54417__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__54429 = cljs.core.next.call(null,seq__54417__$1);
var G__54430 = null;
var G__54431 = (0);
var G__54432 = (0);
seq__54417 = G__54429;
chunk__54418 = G__54430;
count__54419 = G__54431;
i__54420 = G__54432;
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

var seq__54483_54494 = cljs.core.seq.call(null,deps);
var chunk__54484_54495 = null;
var count__54485_54496 = (0);
var i__54486_54497 = (0);
while(true){
if((i__54486_54497 < count__54485_54496)){
var dep_54498 = cljs.core._nth.call(null,chunk__54484_54495,i__54486_54497);
topo_sort_helper_STAR_.call(null,dep_54498,(depth + (1)),state);

var G__54499 = seq__54483_54494;
var G__54500 = chunk__54484_54495;
var G__54501 = count__54485_54496;
var G__54502 = (i__54486_54497 + (1));
seq__54483_54494 = G__54499;
chunk__54484_54495 = G__54500;
count__54485_54496 = G__54501;
i__54486_54497 = G__54502;
continue;
} else {
var temp__4657__auto___54503 = cljs.core.seq.call(null,seq__54483_54494);
if(temp__4657__auto___54503){
var seq__54483_54504__$1 = temp__4657__auto___54503;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54483_54504__$1)){
var c__26790__auto___54505 = cljs.core.chunk_first.call(null,seq__54483_54504__$1);
var G__54506 = cljs.core.chunk_rest.call(null,seq__54483_54504__$1);
var G__54507 = c__26790__auto___54505;
var G__54508 = cljs.core.count.call(null,c__26790__auto___54505);
var G__54509 = (0);
seq__54483_54494 = G__54506;
chunk__54484_54495 = G__54507;
count__54485_54496 = G__54508;
i__54486_54497 = G__54509;
continue;
} else {
var dep_54510 = cljs.core.first.call(null,seq__54483_54504__$1);
topo_sort_helper_STAR_.call(null,dep_54510,(depth + (1)),state);

var G__54511 = cljs.core.next.call(null,seq__54483_54504__$1);
var G__54512 = null;
var G__54513 = (0);
var G__54514 = (0);
seq__54483_54494 = G__54511;
chunk__54484_54495 = G__54512;
count__54485_54496 = G__54513;
i__54486_54497 = G__54514;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__54487){
var vec__54491 = p__54487;
var seq__54492 = cljs.core.seq.call(null,vec__54491);
var first__54493 = cljs.core.first.call(null,seq__54492);
var seq__54492__$1 = cljs.core.next.call(null,seq__54492);
var x = first__54493;
var xs = seq__54492__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__54491,seq__54492,first__54493,seq__54492__$1,x,xs,get_deps__$1){
return (function (p1__54433_SHARP_){
return clojure.set.difference.call(null,p1__54433_SHARP_,x);
});})(vec__54491,seq__54492,first__54493,seq__54492__$1,x,xs,get_deps__$1))
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
var seq__54527 = cljs.core.seq.call(null,provides);
var chunk__54528 = null;
var count__54529 = (0);
var i__54530 = (0);
while(true){
if((i__54530 < count__54529)){
var prov = cljs.core._nth.call(null,chunk__54528,i__54530);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54531_54539 = cljs.core.seq.call(null,requires);
var chunk__54532_54540 = null;
var count__54533_54541 = (0);
var i__54534_54542 = (0);
while(true){
if((i__54534_54542 < count__54533_54541)){
var req_54543 = cljs.core._nth.call(null,chunk__54532_54540,i__54534_54542);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54543,prov);

var G__54544 = seq__54531_54539;
var G__54545 = chunk__54532_54540;
var G__54546 = count__54533_54541;
var G__54547 = (i__54534_54542 + (1));
seq__54531_54539 = G__54544;
chunk__54532_54540 = G__54545;
count__54533_54541 = G__54546;
i__54534_54542 = G__54547;
continue;
} else {
var temp__4657__auto___54548 = cljs.core.seq.call(null,seq__54531_54539);
if(temp__4657__auto___54548){
var seq__54531_54549__$1 = temp__4657__auto___54548;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54531_54549__$1)){
var c__26790__auto___54550 = cljs.core.chunk_first.call(null,seq__54531_54549__$1);
var G__54551 = cljs.core.chunk_rest.call(null,seq__54531_54549__$1);
var G__54552 = c__26790__auto___54550;
var G__54553 = cljs.core.count.call(null,c__26790__auto___54550);
var G__54554 = (0);
seq__54531_54539 = G__54551;
chunk__54532_54540 = G__54552;
count__54533_54541 = G__54553;
i__54534_54542 = G__54554;
continue;
} else {
var req_54555 = cljs.core.first.call(null,seq__54531_54549__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54555,prov);

var G__54556 = cljs.core.next.call(null,seq__54531_54549__$1);
var G__54557 = null;
var G__54558 = (0);
var G__54559 = (0);
seq__54531_54539 = G__54556;
chunk__54532_54540 = G__54557;
count__54533_54541 = G__54558;
i__54534_54542 = G__54559;
continue;
}
} else {
}
}
break;
}

var G__54560 = seq__54527;
var G__54561 = chunk__54528;
var G__54562 = count__54529;
var G__54563 = (i__54530 + (1));
seq__54527 = G__54560;
chunk__54528 = G__54561;
count__54529 = G__54562;
i__54530 = G__54563;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__54527);
if(temp__4657__auto__){
var seq__54527__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54527__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__54527__$1);
var G__54564 = cljs.core.chunk_rest.call(null,seq__54527__$1);
var G__54565 = c__26790__auto__;
var G__54566 = cljs.core.count.call(null,c__26790__auto__);
var G__54567 = (0);
seq__54527 = G__54564;
chunk__54528 = G__54565;
count__54529 = G__54566;
i__54530 = G__54567;
continue;
} else {
var prov = cljs.core.first.call(null,seq__54527__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__54535_54568 = cljs.core.seq.call(null,requires);
var chunk__54536_54569 = null;
var count__54537_54570 = (0);
var i__54538_54571 = (0);
while(true){
if((i__54538_54571 < count__54537_54570)){
var req_54572 = cljs.core._nth.call(null,chunk__54536_54569,i__54538_54571);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54572,prov);

var G__54573 = seq__54535_54568;
var G__54574 = chunk__54536_54569;
var G__54575 = count__54537_54570;
var G__54576 = (i__54538_54571 + (1));
seq__54535_54568 = G__54573;
chunk__54536_54569 = G__54574;
count__54537_54570 = G__54575;
i__54538_54571 = G__54576;
continue;
} else {
var temp__4657__auto___54577__$1 = cljs.core.seq.call(null,seq__54535_54568);
if(temp__4657__auto___54577__$1){
var seq__54535_54578__$1 = temp__4657__auto___54577__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54535_54578__$1)){
var c__26790__auto___54579 = cljs.core.chunk_first.call(null,seq__54535_54578__$1);
var G__54580 = cljs.core.chunk_rest.call(null,seq__54535_54578__$1);
var G__54581 = c__26790__auto___54579;
var G__54582 = cljs.core.count.call(null,c__26790__auto___54579);
var G__54583 = (0);
seq__54535_54568 = G__54580;
chunk__54536_54569 = G__54581;
count__54537_54570 = G__54582;
i__54538_54571 = G__54583;
continue;
} else {
var req_54584 = cljs.core.first.call(null,seq__54535_54578__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_54584,prov);

var G__54585 = cljs.core.next.call(null,seq__54535_54578__$1);
var G__54586 = null;
var G__54587 = (0);
var G__54588 = (0);
seq__54535_54568 = G__54585;
chunk__54536_54569 = G__54586;
count__54537_54570 = G__54587;
i__54538_54571 = G__54588;
continue;
}
} else {
}
}
break;
}

var G__54589 = cljs.core.next.call(null,seq__54527__$1);
var G__54590 = null;
var G__54591 = (0);
var G__54592 = (0);
seq__54527 = G__54589;
chunk__54528 = G__54590;
count__54529 = G__54591;
i__54530 = G__54592;
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
var seq__54597_54601 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__54598_54602 = null;
var count__54599_54603 = (0);
var i__54600_54604 = (0);
while(true){
if((i__54600_54604 < count__54599_54603)){
var ns_54605 = cljs.core._nth.call(null,chunk__54598_54602,i__54600_54604);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54605);

var G__54606 = seq__54597_54601;
var G__54607 = chunk__54598_54602;
var G__54608 = count__54599_54603;
var G__54609 = (i__54600_54604 + (1));
seq__54597_54601 = G__54606;
chunk__54598_54602 = G__54607;
count__54599_54603 = G__54608;
i__54600_54604 = G__54609;
continue;
} else {
var temp__4657__auto___54610 = cljs.core.seq.call(null,seq__54597_54601);
if(temp__4657__auto___54610){
var seq__54597_54611__$1 = temp__4657__auto___54610;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__54597_54611__$1)){
var c__26790__auto___54612 = cljs.core.chunk_first.call(null,seq__54597_54611__$1);
var G__54613 = cljs.core.chunk_rest.call(null,seq__54597_54611__$1);
var G__54614 = c__26790__auto___54612;
var G__54615 = cljs.core.count.call(null,c__26790__auto___54612);
var G__54616 = (0);
seq__54597_54601 = G__54613;
chunk__54598_54602 = G__54614;
count__54599_54603 = G__54615;
i__54600_54604 = G__54616;
continue;
} else {
var ns_54617 = cljs.core.first.call(null,seq__54597_54611__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_54617);

var G__54618 = cljs.core.next.call(null,seq__54597_54611__$1);
var G__54619 = null;
var G__54620 = (0);
var G__54621 = (0);
seq__54597_54601 = G__54618;
chunk__54598_54602 = G__54619;
count__54599_54603 = G__54620;
i__54600_54604 = G__54621;
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
var G__54622__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__54622 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__54623__i = 0, G__54623__a = new Array(arguments.length -  0);
while (G__54623__i < G__54623__a.length) {G__54623__a[G__54623__i] = arguments[G__54623__i + 0]; ++G__54623__i;}
  args = new cljs.core.IndexedSeq(G__54623__a,0);
} 
return G__54622__delegate.call(this,args);};
G__54622.cljs$lang$maxFixedArity = 0;
G__54622.cljs$lang$applyTo = (function (arglist__54624){
var args = cljs.core.seq(arglist__54624);
return G__54622__delegate(args);
});
G__54622.cljs$core$IFn$_invoke$arity$variadic = G__54622__delegate;
return G__54622;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__54625 = cljs.core._EQ_;
var expr__54626 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__54625.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__54626))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__54625,expr__54626){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__54625,expr__54626))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__54625,expr__54626){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e54628){if((e54628 instanceof Error)){
var e = e54628;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54628;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__54625,expr__54626))
} else {
if(cljs.core.truth_(pred__54625.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__54626))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__54625.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__54626))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__54625.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__54626))){
return ((function (pred__54625,expr__54626){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e54629){if((e54629 instanceof Error)){
var e = e54629;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e54629;

}
}})());
});
;})(pred__54625,expr__54626))
} else {
return ((function (pred__54625,expr__54626){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__54625,expr__54626))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__54630,callback){
var map__54633 = p__54630;
var map__54633__$1 = ((((!((map__54633 == null)))?((((map__54633.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54633.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54633):map__54633);
var file_msg = map__54633__$1;
var request_url = cljs.core.get.call(null,map__54633__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__54633,map__54633__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__54633,map__54633__$1,file_msg,request_url))
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
return (function (state_54657){
var state_val_54658 = (state_54657[(1)]);
if((state_val_54658 === (7))){
var inst_54653 = (state_54657[(2)]);
var state_54657__$1 = state_54657;
var statearr_54659_54679 = state_54657__$1;
(statearr_54659_54679[(2)] = inst_54653);

(statearr_54659_54679[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (1))){
var state_54657__$1 = state_54657;
var statearr_54660_54680 = state_54657__$1;
(statearr_54660_54680[(2)] = null);

(statearr_54660_54680[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (4))){
var inst_54637 = (state_54657[(7)]);
var inst_54637__$1 = (state_54657[(2)]);
var state_54657__$1 = (function (){var statearr_54661 = state_54657;
(statearr_54661[(7)] = inst_54637__$1);

return statearr_54661;
})();
if(cljs.core.truth_(inst_54637__$1)){
var statearr_54662_54681 = state_54657__$1;
(statearr_54662_54681[(1)] = (5));

} else {
var statearr_54663_54682 = state_54657__$1;
(statearr_54663_54682[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (6))){
var state_54657__$1 = state_54657;
var statearr_54664_54683 = state_54657__$1;
(statearr_54664_54683[(2)] = null);

(statearr_54664_54683[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (3))){
var inst_54655 = (state_54657[(2)]);
var state_54657__$1 = state_54657;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54657__$1,inst_54655);
} else {
if((state_val_54658 === (2))){
var state_54657__$1 = state_54657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54657__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_54658 === (11))){
var inst_54649 = (state_54657[(2)]);
var state_54657__$1 = (function (){var statearr_54665 = state_54657;
(statearr_54665[(8)] = inst_54649);

return statearr_54665;
})();
var statearr_54666_54684 = state_54657__$1;
(statearr_54666_54684[(2)] = null);

(statearr_54666_54684[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (9))){
var inst_54641 = (state_54657[(9)]);
var inst_54643 = (state_54657[(10)]);
var inst_54645 = inst_54643.call(null,inst_54641);
var state_54657__$1 = state_54657;
var statearr_54667_54685 = state_54657__$1;
(statearr_54667_54685[(2)] = inst_54645);

(statearr_54667_54685[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (5))){
var inst_54637 = (state_54657[(7)]);
var inst_54639 = figwheel.client.file_reloading.blocking_load.call(null,inst_54637);
var state_54657__$1 = state_54657;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54657__$1,(8),inst_54639);
} else {
if((state_val_54658 === (10))){
var inst_54641 = (state_54657[(9)]);
var inst_54647 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_54641);
var state_54657__$1 = state_54657;
var statearr_54668_54686 = state_54657__$1;
(statearr_54668_54686[(2)] = inst_54647);

(statearr_54668_54686[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54658 === (8))){
var inst_54643 = (state_54657[(10)]);
var inst_54637 = (state_54657[(7)]);
var inst_54641 = (state_54657[(2)]);
var inst_54642 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_54643__$1 = cljs.core.get.call(null,inst_54642,inst_54637);
var state_54657__$1 = (function (){var statearr_54669 = state_54657;
(statearr_54669[(9)] = inst_54641);

(statearr_54669[(10)] = inst_54643__$1);

return statearr_54669;
})();
if(cljs.core.truth_(inst_54643__$1)){
var statearr_54670_54687 = state_54657__$1;
(statearr_54670_54687[(1)] = (9));

} else {
var statearr_54671_54688 = state_54657__$1;
(statearr_54671_54688[(1)] = (10));

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
var statearr_54675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_54675[(0)] = figwheel$client$file_reloading$state_machine__27989__auto__);

(statearr_54675[(1)] = (1));

return statearr_54675;
});
var figwheel$client$file_reloading$state_machine__27989__auto____1 = (function (state_54657){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_54657);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e54676){if((e54676 instanceof Object)){
var ex__27992__auto__ = e54676;
var statearr_54677_54689 = state_54657;
(statearr_54677_54689[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54657);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54676;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54690 = state_54657;
state_54657 = G__54690;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27989__auto__ = function(state_54657){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27989__auto____1.call(this,state_54657);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27989__auto____0;
figwheel$client$file_reloading$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27989__auto____1;
return figwheel$client$file_reloading$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_54678 = f__28010__auto__.call(null);
(statearr_54678[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_54678;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__54691,callback){
var map__54694 = p__54691;
var map__54694__$1 = ((((!((map__54694 == null)))?((((map__54694.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54694.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54694):map__54694);
var file_msg = map__54694__$1;
var namespace = cljs.core.get.call(null,map__54694__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__54694,map__54694__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__54694,map__54694__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__54696){
var map__54699 = p__54696;
var map__54699__$1 = ((((!((map__54699 == null)))?((((map__54699.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54699.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54699):map__54699);
var file_msg = map__54699__$1;
var namespace = cljs.core.get.call(null,map__54699__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__54701){
var map__54704 = p__54701;
var map__54704__$1 = ((((!((map__54704 == null)))?((((map__54704.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54704.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54704):map__54704);
var file_msg = map__54704__$1;
var namespace = cljs.core.get.call(null,map__54704__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__54706,callback){
var map__54709 = p__54706;
var map__54709__$1 = ((((!((map__54709 == null)))?((((map__54709.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54709.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54709):map__54709);
var file_msg = map__54709__$1;
var request_url = cljs.core.get.call(null,map__54709__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__54709__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28009__auto___54813 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___54813,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___54813,out){
return (function (state_54795){
var state_val_54796 = (state_54795[(1)]);
if((state_val_54796 === (1))){
var inst_54769 = cljs.core.seq.call(null,files);
var inst_54770 = cljs.core.first.call(null,inst_54769);
var inst_54771 = cljs.core.next.call(null,inst_54769);
var inst_54772 = files;
var state_54795__$1 = (function (){var statearr_54797 = state_54795;
(statearr_54797[(7)] = inst_54772);

(statearr_54797[(8)] = inst_54770);

(statearr_54797[(9)] = inst_54771);

return statearr_54797;
})();
var statearr_54798_54814 = state_54795__$1;
(statearr_54798_54814[(2)] = null);

(statearr_54798_54814[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54796 === (2))){
var inst_54778 = (state_54795[(10)]);
var inst_54772 = (state_54795[(7)]);
var inst_54777 = cljs.core.seq.call(null,inst_54772);
var inst_54778__$1 = cljs.core.first.call(null,inst_54777);
var inst_54779 = cljs.core.next.call(null,inst_54777);
var inst_54780 = (inst_54778__$1 == null);
var inst_54781 = cljs.core.not.call(null,inst_54780);
var state_54795__$1 = (function (){var statearr_54799 = state_54795;
(statearr_54799[(10)] = inst_54778__$1);

(statearr_54799[(11)] = inst_54779);

return statearr_54799;
})();
if(inst_54781){
var statearr_54800_54815 = state_54795__$1;
(statearr_54800_54815[(1)] = (4));

} else {
var statearr_54801_54816 = state_54795__$1;
(statearr_54801_54816[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54796 === (3))){
var inst_54793 = (state_54795[(2)]);
var state_54795__$1 = state_54795;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_54795__$1,inst_54793);
} else {
if((state_val_54796 === (4))){
var inst_54778 = (state_54795[(10)]);
var inst_54783 = figwheel.client.file_reloading.reload_js_file.call(null,inst_54778);
var state_54795__$1 = state_54795;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_54795__$1,(7),inst_54783);
} else {
if((state_val_54796 === (5))){
var inst_54789 = cljs.core.async.close_BANG_.call(null,out);
var state_54795__$1 = state_54795;
var statearr_54802_54817 = state_54795__$1;
(statearr_54802_54817[(2)] = inst_54789);

(statearr_54802_54817[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54796 === (6))){
var inst_54791 = (state_54795[(2)]);
var state_54795__$1 = state_54795;
var statearr_54803_54818 = state_54795__$1;
(statearr_54803_54818[(2)] = inst_54791);

(statearr_54803_54818[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_54796 === (7))){
var inst_54779 = (state_54795[(11)]);
var inst_54785 = (state_54795[(2)]);
var inst_54786 = cljs.core.async.put_BANG_.call(null,out,inst_54785);
var inst_54772 = inst_54779;
var state_54795__$1 = (function (){var statearr_54804 = state_54795;
(statearr_54804[(12)] = inst_54786);

(statearr_54804[(7)] = inst_54772);

return statearr_54804;
})();
var statearr_54805_54819 = state_54795__$1;
(statearr_54805_54819[(2)] = null);

(statearr_54805_54819[(1)] = (2));


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
});})(c__28009__auto___54813,out))
;
return ((function (switch__27988__auto__,c__28009__auto___54813,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0 = (function (){
var statearr_54809 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_54809[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__);

(statearr_54809[(1)] = (1));

return statearr_54809;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1 = (function (state_54795){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_54795);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e54810){if((e54810 instanceof Object)){
var ex__27992__auto__ = e54810;
var statearr_54811_54820 = state_54795;
(statearr_54811_54820[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_54795);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e54810;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__54821 = state_54795;
state_54795 = G__54821;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__ = function(state_54795){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1.call(this,state_54795);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___54813,out))
})();
var state__28011__auto__ = (function (){var statearr_54812 = f__28010__auto__.call(null);
(statearr_54812[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___54813);

return statearr_54812;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___54813,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__54822,opts){
var map__54826 = p__54822;
var map__54826__$1 = ((((!((map__54826 == null)))?((((map__54826.cljs$lang$protocol_mask$partition0$ & (64))) || (map__54826.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__54826):map__54826);
var eval_body__$1 = cljs.core.get.call(null,map__54826__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__54826__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e54828){var e = e54828;
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
return (function (p1__54829_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54829_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__54838){
var vec__54839 = p__54838;
var k = cljs.core.nth.call(null,vec__54839,(0),null);
var v = cljs.core.nth.call(null,vec__54839,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__54842){
var vec__54843 = p__54842;
var k = cljs.core.nth.call(null,vec__54843,(0),null);
var v = cljs.core.nth.call(null,vec__54843,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__54849,p__54850){
var map__55097 = p__54849;
var map__55097__$1 = ((((!((map__55097 == null)))?((((map__55097.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55097.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55097):map__55097);
var opts = map__55097__$1;
var before_jsload = cljs.core.get.call(null,map__55097__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__55097__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__55097__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__55098 = p__54850;
var map__55098__$1 = ((((!((map__55098 == null)))?((((map__55098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55098):map__55098);
var msg = map__55098__$1;
var files = cljs.core.get.call(null,map__55098__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__55098__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__55098__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_55251){
var state_val_55252 = (state_55251[(1)]);
if((state_val_55252 === (7))){
var inst_55112 = (state_55251[(7)]);
var inst_55114 = (state_55251[(8)]);
var inst_55113 = (state_55251[(9)]);
var inst_55115 = (state_55251[(10)]);
var inst_55120 = cljs.core._nth.call(null,inst_55113,inst_55115);
var inst_55121 = figwheel.client.file_reloading.eval_body.call(null,inst_55120,opts);
var inst_55122 = (inst_55115 + (1));
var tmp55253 = inst_55112;
var tmp55254 = inst_55114;
var tmp55255 = inst_55113;
var inst_55112__$1 = tmp55253;
var inst_55113__$1 = tmp55255;
var inst_55114__$1 = tmp55254;
var inst_55115__$1 = inst_55122;
var state_55251__$1 = (function (){var statearr_55256 = state_55251;
(statearr_55256[(7)] = inst_55112__$1);

(statearr_55256[(8)] = inst_55114__$1);

(statearr_55256[(9)] = inst_55113__$1);

(statearr_55256[(11)] = inst_55121);

(statearr_55256[(10)] = inst_55115__$1);

return statearr_55256;
})();
var statearr_55257_55343 = state_55251__$1;
(statearr_55257_55343[(2)] = null);

(statearr_55257_55343[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (20))){
var inst_55155 = (state_55251[(12)]);
var inst_55163 = figwheel.client.file_reloading.sort_files.call(null,inst_55155);
var state_55251__$1 = state_55251;
var statearr_55258_55344 = state_55251__$1;
(statearr_55258_55344[(2)] = inst_55163);

(statearr_55258_55344[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (27))){
var state_55251__$1 = state_55251;
var statearr_55259_55345 = state_55251__$1;
(statearr_55259_55345[(2)] = null);

(statearr_55259_55345[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (1))){
var inst_55104 = (state_55251[(13)]);
var inst_55101 = before_jsload.call(null,files);
var inst_55102 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_55103 = (function (){return ((function (inst_55104,inst_55101,inst_55102,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54846_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__54846_SHARP_);
});
;})(inst_55104,inst_55101,inst_55102,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55104__$1 = cljs.core.filter.call(null,inst_55103,files);
var inst_55105 = cljs.core.not_empty.call(null,inst_55104__$1);
var state_55251__$1 = (function (){var statearr_55260 = state_55251;
(statearr_55260[(14)] = inst_55101);

(statearr_55260[(13)] = inst_55104__$1);

(statearr_55260[(15)] = inst_55102);

return statearr_55260;
})();
if(cljs.core.truth_(inst_55105)){
var statearr_55261_55346 = state_55251__$1;
(statearr_55261_55346[(1)] = (2));

} else {
var statearr_55262_55347 = state_55251__$1;
(statearr_55262_55347[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (24))){
var state_55251__$1 = state_55251;
var statearr_55263_55348 = state_55251__$1;
(statearr_55263_55348[(2)] = null);

(statearr_55263_55348[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (39))){
var inst_55205 = (state_55251[(16)]);
var state_55251__$1 = state_55251;
var statearr_55264_55349 = state_55251__$1;
(statearr_55264_55349[(2)] = inst_55205);

(statearr_55264_55349[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (46))){
var inst_55246 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
var statearr_55265_55350 = state_55251__$1;
(statearr_55265_55350[(2)] = inst_55246);

(statearr_55265_55350[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (4))){
var inst_55149 = (state_55251[(2)]);
var inst_55150 = cljs.core.List.EMPTY;
var inst_55151 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_55150);
var inst_55152 = (function (){return ((function (inst_55149,inst_55150,inst_55151,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54847_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__54847_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__54847_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__54847_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_55149,inst_55150,inst_55151,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55153 = cljs.core.filter.call(null,inst_55152,files);
var inst_55154 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_55155 = cljs.core.concat.call(null,inst_55153,inst_55154);
var state_55251__$1 = (function (){var statearr_55266 = state_55251;
(statearr_55266[(17)] = inst_55151);

(statearr_55266[(18)] = inst_55149);

(statearr_55266[(12)] = inst_55155);

return statearr_55266;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_55267_55351 = state_55251__$1;
(statearr_55267_55351[(1)] = (16));

} else {
var statearr_55268_55352 = state_55251__$1;
(statearr_55268_55352[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (15))){
var inst_55139 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
var statearr_55269_55353 = state_55251__$1;
(statearr_55269_55353[(2)] = inst_55139);

(statearr_55269_55353[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (21))){
var inst_55165 = (state_55251[(19)]);
var inst_55165__$1 = (state_55251[(2)]);
var inst_55166 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_55165__$1);
var state_55251__$1 = (function (){var statearr_55270 = state_55251;
(statearr_55270[(19)] = inst_55165__$1);

return statearr_55270;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_55251__$1,(22),inst_55166);
} else {
if((state_val_55252 === (31))){
var inst_55249 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_55251__$1,inst_55249);
} else {
if((state_val_55252 === (32))){
var inst_55205 = (state_55251[(16)]);
var inst_55210 = inst_55205.cljs$lang$protocol_mask$partition0$;
var inst_55211 = (inst_55210 & (64));
var inst_55212 = inst_55205.cljs$core$ISeq$;
var inst_55213 = (inst_55211) || (inst_55212);
var state_55251__$1 = state_55251;
if(cljs.core.truth_(inst_55213)){
var statearr_55271_55354 = state_55251__$1;
(statearr_55271_55354[(1)] = (35));

} else {
var statearr_55272_55355 = state_55251__$1;
(statearr_55272_55355[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (40))){
var inst_55226 = (state_55251[(20)]);
var inst_55225 = (state_55251[(2)]);
var inst_55226__$1 = cljs.core.get.call(null,inst_55225,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_55227 = cljs.core.get.call(null,inst_55225,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_55228 = cljs.core.not_empty.call(null,inst_55226__$1);
var state_55251__$1 = (function (){var statearr_55273 = state_55251;
(statearr_55273[(20)] = inst_55226__$1);

(statearr_55273[(21)] = inst_55227);

return statearr_55273;
})();
if(cljs.core.truth_(inst_55228)){
var statearr_55274_55356 = state_55251__$1;
(statearr_55274_55356[(1)] = (41));

} else {
var statearr_55275_55357 = state_55251__$1;
(statearr_55275_55357[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (33))){
var state_55251__$1 = state_55251;
var statearr_55276_55358 = state_55251__$1;
(statearr_55276_55358[(2)] = false);

(statearr_55276_55358[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (13))){
var inst_55125 = (state_55251[(22)]);
var inst_55129 = cljs.core.chunk_first.call(null,inst_55125);
var inst_55130 = cljs.core.chunk_rest.call(null,inst_55125);
var inst_55131 = cljs.core.count.call(null,inst_55129);
var inst_55112 = inst_55130;
var inst_55113 = inst_55129;
var inst_55114 = inst_55131;
var inst_55115 = (0);
var state_55251__$1 = (function (){var statearr_55277 = state_55251;
(statearr_55277[(7)] = inst_55112);

(statearr_55277[(8)] = inst_55114);

(statearr_55277[(9)] = inst_55113);

(statearr_55277[(10)] = inst_55115);

return statearr_55277;
})();
var statearr_55278_55359 = state_55251__$1;
(statearr_55278_55359[(2)] = null);

(statearr_55278_55359[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (22))){
var inst_55169 = (state_55251[(23)]);
var inst_55168 = (state_55251[(24)]);
var inst_55165 = (state_55251[(19)]);
var inst_55173 = (state_55251[(25)]);
var inst_55168__$1 = (state_55251[(2)]);
var inst_55169__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55168__$1);
var inst_55170 = (function (){var all_files = inst_55165;
var res_SINGLEQUOTE_ = inst_55168__$1;
var res = inst_55169__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_55169,inst_55168,inst_55165,inst_55173,inst_55168__$1,inst_55169__$1,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__54848_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__54848_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_55169,inst_55168,inst_55165,inst_55173,inst_55168__$1,inst_55169__$1,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55171 = cljs.core.filter.call(null,inst_55170,inst_55168__$1);
var inst_55172 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_55173__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_55172);
var inst_55174 = cljs.core.not_empty.call(null,inst_55173__$1);
var state_55251__$1 = (function (){var statearr_55279 = state_55251;
(statearr_55279[(23)] = inst_55169__$1);

(statearr_55279[(26)] = inst_55171);

(statearr_55279[(24)] = inst_55168__$1);

(statearr_55279[(25)] = inst_55173__$1);

return statearr_55279;
})();
if(cljs.core.truth_(inst_55174)){
var statearr_55280_55360 = state_55251__$1;
(statearr_55280_55360[(1)] = (23));

} else {
var statearr_55281_55361 = state_55251__$1;
(statearr_55281_55361[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (36))){
var state_55251__$1 = state_55251;
var statearr_55282_55362 = state_55251__$1;
(statearr_55282_55362[(2)] = false);

(statearr_55282_55362[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (41))){
var inst_55226 = (state_55251[(20)]);
var inst_55230 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_55231 = cljs.core.map.call(null,inst_55230,inst_55226);
var inst_55232 = cljs.core.pr_str.call(null,inst_55231);
var inst_55233 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_55232)].join('');
var inst_55234 = figwheel.client.utils.log.call(null,inst_55233);
var state_55251__$1 = state_55251;
var statearr_55283_55363 = state_55251__$1;
(statearr_55283_55363[(2)] = inst_55234);

(statearr_55283_55363[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (43))){
var inst_55227 = (state_55251[(21)]);
var inst_55237 = (state_55251[(2)]);
var inst_55238 = cljs.core.not_empty.call(null,inst_55227);
var state_55251__$1 = (function (){var statearr_55284 = state_55251;
(statearr_55284[(27)] = inst_55237);

return statearr_55284;
})();
if(cljs.core.truth_(inst_55238)){
var statearr_55285_55364 = state_55251__$1;
(statearr_55285_55364[(1)] = (44));

} else {
var statearr_55286_55365 = state_55251__$1;
(statearr_55286_55365[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (29))){
var inst_55169 = (state_55251[(23)]);
var inst_55205 = (state_55251[(16)]);
var inst_55171 = (state_55251[(26)]);
var inst_55168 = (state_55251[(24)]);
var inst_55165 = (state_55251[(19)]);
var inst_55173 = (state_55251[(25)]);
var inst_55201 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_55204 = (function (){var all_files = inst_55165;
var res_SINGLEQUOTE_ = inst_55168;
var res = inst_55169;
var files_not_loaded = inst_55171;
var dependencies_that_loaded = inst_55173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55169,inst_55205,inst_55171,inst_55168,inst_55165,inst_55173,inst_55201,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55203){
var map__55287 = p__55203;
var map__55287__$1 = ((((!((map__55287 == null)))?((((map__55287.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55287.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55287):map__55287);
var namespace = cljs.core.get.call(null,map__55287__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55169,inst_55205,inst_55171,inst_55168,inst_55165,inst_55173,inst_55201,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55205__$1 = cljs.core.group_by.call(null,inst_55204,inst_55171);
var inst_55207 = (inst_55205__$1 == null);
var inst_55208 = cljs.core.not.call(null,inst_55207);
var state_55251__$1 = (function (){var statearr_55289 = state_55251;
(statearr_55289[(28)] = inst_55201);

(statearr_55289[(16)] = inst_55205__$1);

return statearr_55289;
})();
if(inst_55208){
var statearr_55290_55366 = state_55251__$1;
(statearr_55290_55366[(1)] = (32));

} else {
var statearr_55291_55367 = state_55251__$1;
(statearr_55291_55367[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (44))){
var inst_55227 = (state_55251[(21)]);
var inst_55240 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_55227);
var inst_55241 = cljs.core.pr_str.call(null,inst_55240);
var inst_55242 = [cljs.core.str("not required: "),cljs.core.str(inst_55241)].join('');
var inst_55243 = figwheel.client.utils.log.call(null,inst_55242);
var state_55251__$1 = state_55251;
var statearr_55292_55368 = state_55251__$1;
(statearr_55292_55368[(2)] = inst_55243);

(statearr_55292_55368[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (6))){
var inst_55146 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
var statearr_55293_55369 = state_55251__$1;
(statearr_55293_55369[(2)] = inst_55146);

(statearr_55293_55369[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (28))){
var inst_55171 = (state_55251[(26)]);
var inst_55198 = (state_55251[(2)]);
var inst_55199 = cljs.core.not_empty.call(null,inst_55171);
var state_55251__$1 = (function (){var statearr_55294 = state_55251;
(statearr_55294[(29)] = inst_55198);

return statearr_55294;
})();
if(cljs.core.truth_(inst_55199)){
var statearr_55295_55370 = state_55251__$1;
(statearr_55295_55370[(1)] = (29));

} else {
var statearr_55296_55371 = state_55251__$1;
(statearr_55296_55371[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (25))){
var inst_55169 = (state_55251[(23)]);
var inst_55185 = (state_55251[(2)]);
var inst_55186 = cljs.core.not_empty.call(null,inst_55169);
var state_55251__$1 = (function (){var statearr_55297 = state_55251;
(statearr_55297[(30)] = inst_55185);

return statearr_55297;
})();
if(cljs.core.truth_(inst_55186)){
var statearr_55298_55372 = state_55251__$1;
(statearr_55298_55372[(1)] = (26));

} else {
var statearr_55299_55373 = state_55251__$1;
(statearr_55299_55373[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (34))){
var inst_55220 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
if(cljs.core.truth_(inst_55220)){
var statearr_55300_55374 = state_55251__$1;
(statearr_55300_55374[(1)] = (38));

} else {
var statearr_55301_55375 = state_55251__$1;
(statearr_55301_55375[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (17))){
var state_55251__$1 = state_55251;
var statearr_55302_55376 = state_55251__$1;
(statearr_55302_55376[(2)] = recompile_dependents);

(statearr_55302_55376[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (3))){
var state_55251__$1 = state_55251;
var statearr_55303_55377 = state_55251__$1;
(statearr_55303_55377[(2)] = null);

(statearr_55303_55377[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (12))){
var inst_55142 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
var statearr_55304_55378 = state_55251__$1;
(statearr_55304_55378[(2)] = inst_55142);

(statearr_55304_55378[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (2))){
var inst_55104 = (state_55251[(13)]);
var inst_55111 = cljs.core.seq.call(null,inst_55104);
var inst_55112 = inst_55111;
var inst_55113 = null;
var inst_55114 = (0);
var inst_55115 = (0);
var state_55251__$1 = (function (){var statearr_55305 = state_55251;
(statearr_55305[(7)] = inst_55112);

(statearr_55305[(8)] = inst_55114);

(statearr_55305[(9)] = inst_55113);

(statearr_55305[(10)] = inst_55115);

return statearr_55305;
})();
var statearr_55306_55379 = state_55251__$1;
(statearr_55306_55379[(2)] = null);

(statearr_55306_55379[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (23))){
var inst_55169 = (state_55251[(23)]);
var inst_55171 = (state_55251[(26)]);
var inst_55168 = (state_55251[(24)]);
var inst_55165 = (state_55251[(19)]);
var inst_55173 = (state_55251[(25)]);
var inst_55176 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_55178 = (function (){var all_files = inst_55165;
var res_SINGLEQUOTE_ = inst_55168;
var res = inst_55169;
var files_not_loaded = inst_55171;
var dependencies_that_loaded = inst_55173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55169,inst_55171,inst_55168,inst_55165,inst_55173,inst_55176,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55177){
var map__55307 = p__55177;
var map__55307__$1 = ((((!((map__55307 == null)))?((((map__55307.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55307.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55307):map__55307);
var request_url = cljs.core.get.call(null,map__55307__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55169,inst_55171,inst_55168,inst_55165,inst_55173,inst_55176,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55179 = cljs.core.reverse.call(null,inst_55173);
var inst_55180 = cljs.core.map.call(null,inst_55178,inst_55179);
var inst_55181 = cljs.core.pr_str.call(null,inst_55180);
var inst_55182 = figwheel.client.utils.log.call(null,inst_55181);
var state_55251__$1 = (function (){var statearr_55309 = state_55251;
(statearr_55309[(31)] = inst_55176);

return statearr_55309;
})();
var statearr_55310_55380 = state_55251__$1;
(statearr_55310_55380[(2)] = inst_55182);

(statearr_55310_55380[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (35))){
var state_55251__$1 = state_55251;
var statearr_55311_55381 = state_55251__$1;
(statearr_55311_55381[(2)] = true);

(statearr_55311_55381[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (19))){
var inst_55155 = (state_55251[(12)]);
var inst_55161 = figwheel.client.file_reloading.expand_files.call(null,inst_55155);
var state_55251__$1 = state_55251;
var statearr_55312_55382 = state_55251__$1;
(statearr_55312_55382[(2)] = inst_55161);

(statearr_55312_55382[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (11))){
var state_55251__$1 = state_55251;
var statearr_55313_55383 = state_55251__$1;
(statearr_55313_55383[(2)] = null);

(statearr_55313_55383[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (9))){
var inst_55144 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
var statearr_55314_55384 = state_55251__$1;
(statearr_55314_55384[(2)] = inst_55144);

(statearr_55314_55384[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (5))){
var inst_55114 = (state_55251[(8)]);
var inst_55115 = (state_55251[(10)]);
var inst_55117 = (inst_55115 < inst_55114);
var inst_55118 = inst_55117;
var state_55251__$1 = state_55251;
if(cljs.core.truth_(inst_55118)){
var statearr_55315_55385 = state_55251__$1;
(statearr_55315_55385[(1)] = (7));

} else {
var statearr_55316_55386 = state_55251__$1;
(statearr_55316_55386[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (14))){
var inst_55125 = (state_55251[(22)]);
var inst_55134 = cljs.core.first.call(null,inst_55125);
var inst_55135 = figwheel.client.file_reloading.eval_body.call(null,inst_55134,opts);
var inst_55136 = cljs.core.next.call(null,inst_55125);
var inst_55112 = inst_55136;
var inst_55113 = null;
var inst_55114 = (0);
var inst_55115 = (0);
var state_55251__$1 = (function (){var statearr_55317 = state_55251;
(statearr_55317[(7)] = inst_55112);

(statearr_55317[(8)] = inst_55114);

(statearr_55317[(9)] = inst_55113);

(statearr_55317[(32)] = inst_55135);

(statearr_55317[(10)] = inst_55115);

return statearr_55317;
})();
var statearr_55318_55387 = state_55251__$1;
(statearr_55318_55387[(2)] = null);

(statearr_55318_55387[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (45))){
var state_55251__$1 = state_55251;
var statearr_55319_55388 = state_55251__$1;
(statearr_55319_55388[(2)] = null);

(statearr_55319_55388[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (26))){
var inst_55169 = (state_55251[(23)]);
var inst_55171 = (state_55251[(26)]);
var inst_55168 = (state_55251[(24)]);
var inst_55165 = (state_55251[(19)]);
var inst_55173 = (state_55251[(25)]);
var inst_55188 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_55190 = (function (){var all_files = inst_55165;
var res_SINGLEQUOTE_ = inst_55168;
var res = inst_55169;
var files_not_loaded = inst_55171;
var dependencies_that_loaded = inst_55173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55169,inst_55171,inst_55168,inst_55165,inst_55173,inst_55188,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__55189){
var map__55320 = p__55189;
var map__55320__$1 = ((((!((map__55320 == null)))?((((map__55320.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55320.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55320):map__55320);
var namespace = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__55320__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55169,inst_55171,inst_55168,inst_55165,inst_55173,inst_55188,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55191 = cljs.core.map.call(null,inst_55190,inst_55169);
var inst_55192 = cljs.core.pr_str.call(null,inst_55191);
var inst_55193 = figwheel.client.utils.log.call(null,inst_55192);
var inst_55194 = (function (){var all_files = inst_55165;
var res_SINGLEQUOTE_ = inst_55168;
var res = inst_55169;
var files_not_loaded = inst_55171;
var dependencies_that_loaded = inst_55173;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55169,inst_55171,inst_55168,inst_55165,inst_55173,inst_55188,inst_55190,inst_55191,inst_55192,inst_55193,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_55169,inst_55171,inst_55168,inst_55165,inst_55173,inst_55188,inst_55190,inst_55191,inst_55192,inst_55193,state_val_55252,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_55195 = setTimeout(inst_55194,(10));
var state_55251__$1 = (function (){var statearr_55322 = state_55251;
(statearr_55322[(33)] = inst_55193);

(statearr_55322[(34)] = inst_55188);

return statearr_55322;
})();
var statearr_55323_55389 = state_55251__$1;
(statearr_55323_55389[(2)] = inst_55195);

(statearr_55323_55389[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (16))){
var state_55251__$1 = state_55251;
var statearr_55324_55390 = state_55251__$1;
(statearr_55324_55390[(2)] = reload_dependents);

(statearr_55324_55390[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (38))){
var inst_55205 = (state_55251[(16)]);
var inst_55222 = cljs.core.apply.call(null,cljs.core.hash_map,inst_55205);
var state_55251__$1 = state_55251;
var statearr_55325_55391 = state_55251__$1;
(statearr_55325_55391[(2)] = inst_55222);

(statearr_55325_55391[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (30))){
var state_55251__$1 = state_55251;
var statearr_55326_55392 = state_55251__$1;
(statearr_55326_55392[(2)] = null);

(statearr_55326_55392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (10))){
var inst_55125 = (state_55251[(22)]);
var inst_55127 = cljs.core.chunked_seq_QMARK_.call(null,inst_55125);
var state_55251__$1 = state_55251;
if(inst_55127){
var statearr_55327_55393 = state_55251__$1;
(statearr_55327_55393[(1)] = (13));

} else {
var statearr_55328_55394 = state_55251__$1;
(statearr_55328_55394[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (18))){
var inst_55159 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
if(cljs.core.truth_(inst_55159)){
var statearr_55329_55395 = state_55251__$1;
(statearr_55329_55395[(1)] = (19));

} else {
var statearr_55330_55396 = state_55251__$1;
(statearr_55330_55396[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (42))){
var state_55251__$1 = state_55251;
var statearr_55331_55397 = state_55251__$1;
(statearr_55331_55397[(2)] = null);

(statearr_55331_55397[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (37))){
var inst_55217 = (state_55251[(2)]);
var state_55251__$1 = state_55251;
var statearr_55332_55398 = state_55251__$1;
(statearr_55332_55398[(2)] = inst_55217);

(statearr_55332_55398[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_55252 === (8))){
var inst_55125 = (state_55251[(22)]);
var inst_55112 = (state_55251[(7)]);
var inst_55125__$1 = cljs.core.seq.call(null,inst_55112);
var state_55251__$1 = (function (){var statearr_55333 = state_55251;
(statearr_55333[(22)] = inst_55125__$1);

return statearr_55333;
})();
if(inst_55125__$1){
var statearr_55334_55399 = state_55251__$1;
(statearr_55334_55399[(1)] = (10));

} else {
var statearr_55335_55400 = state_55251__$1;
(statearr_55335_55400[(1)] = (11));

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
});})(c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27988__auto__,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0 = (function (){
var statearr_55339 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_55339[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__);

(statearr_55339[(1)] = (1));

return statearr_55339;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1 = (function (state_55251){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_55251);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e55340){if((e55340 instanceof Object)){
var ex__27992__auto__ = e55340;
var statearr_55341_55401 = state_55251;
(statearr_55341_55401[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_55251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e55340;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__55402 = state_55251;
state_55251 = G__55402;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__ = function(state_55251){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1.call(this,state_55251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28011__auto__ = (function (){var statearr_55342 = f__28010__auto__.call(null);
(statearr_55342[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_55342;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,map__55097,map__55097__$1,opts,before_jsload,on_jsload,reload_dependents,map__55098,map__55098__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28009__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__55405,link){
var map__55408 = p__55405;
var map__55408__$1 = ((((!((map__55408 == null)))?((((map__55408.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55408.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55408):map__55408);
var file = cljs.core.get.call(null,map__55408__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__55408,map__55408__$1,file){
return (function (p1__55403_SHARP_,p2__55404_SHARP_){
if(cljs.core._EQ_.call(null,p1__55403_SHARP_,p2__55404_SHARP_)){
return p1__55403_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__55408,map__55408__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__55414){
var map__55415 = p__55414;
var map__55415__$1 = ((((!((map__55415 == null)))?((((map__55415.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55415.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55415):map__55415);
var match_length = cljs.core.get.call(null,map__55415__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__55415__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__55410_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__55410_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__55417_SHARP_,p2__55418_SHARP_){
return cljs.core.assoc.call(null,p1__55417_SHARP_,cljs.core.get.call(null,p2__55418_SHARP_,key),p2__55418_SHARP_);
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
var loaded_f_datas_55419 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_55419);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_55419);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__55420,p__55421){
var map__55426 = p__55420;
var map__55426__$1 = ((((!((map__55426 == null)))?((((map__55426.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55426.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55426):map__55426);
var on_cssload = cljs.core.get.call(null,map__55426__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__55427 = p__55421;
var map__55427__$1 = ((((!((map__55427 == null)))?((((map__55427.cljs$lang$protocol_mask$partition0$ & (64))) || (map__55427.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__55427):map__55427);
var files_msg = map__55427__$1;
var files = cljs.core.get.call(null,map__55427__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1500065489579