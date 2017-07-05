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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33454_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33454_SHARP_));
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
var seq__33459 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33460 = null;
var count__33461 = (0);
var i__33462 = (0);
while(true){
if((i__33462 < count__33461)){
var n = cljs.core._nth.call(null,chunk__33460,i__33462);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33463 = seq__33459;
var G__33464 = chunk__33460;
var G__33465 = count__33461;
var G__33466 = (i__33462 + (1));
seq__33459 = G__33463;
chunk__33460 = G__33464;
count__33461 = G__33465;
i__33462 = G__33466;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33459);
if(temp__4657__auto__){
var seq__33459__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33459__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33459__$1);
var G__33467 = cljs.core.chunk_rest.call(null,seq__33459__$1);
var G__33468 = c__26790__auto__;
var G__33469 = cljs.core.count.call(null,c__26790__auto__);
var G__33470 = (0);
seq__33459 = G__33467;
chunk__33460 = G__33468;
count__33461 = G__33469;
i__33462 = G__33470;
continue;
} else {
var n = cljs.core.first.call(null,seq__33459__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33471 = cljs.core.next.call(null,seq__33459__$1);
var G__33472 = null;
var G__33473 = (0);
var G__33474 = (0);
seq__33459 = G__33471;
chunk__33460 = G__33472;
count__33461 = G__33473;
i__33462 = G__33474;
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

var seq__33525_33536 = cljs.core.seq.call(null,deps);
var chunk__33526_33537 = null;
var count__33527_33538 = (0);
var i__33528_33539 = (0);
while(true){
if((i__33528_33539 < count__33527_33538)){
var dep_33540 = cljs.core._nth.call(null,chunk__33526_33537,i__33528_33539);
topo_sort_helper_STAR_.call(null,dep_33540,(depth + (1)),state);

var G__33541 = seq__33525_33536;
var G__33542 = chunk__33526_33537;
var G__33543 = count__33527_33538;
var G__33544 = (i__33528_33539 + (1));
seq__33525_33536 = G__33541;
chunk__33526_33537 = G__33542;
count__33527_33538 = G__33543;
i__33528_33539 = G__33544;
continue;
} else {
var temp__4657__auto___33545 = cljs.core.seq.call(null,seq__33525_33536);
if(temp__4657__auto___33545){
var seq__33525_33546__$1 = temp__4657__auto___33545;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33525_33546__$1)){
var c__26790__auto___33547 = cljs.core.chunk_first.call(null,seq__33525_33546__$1);
var G__33548 = cljs.core.chunk_rest.call(null,seq__33525_33546__$1);
var G__33549 = c__26790__auto___33547;
var G__33550 = cljs.core.count.call(null,c__26790__auto___33547);
var G__33551 = (0);
seq__33525_33536 = G__33548;
chunk__33526_33537 = G__33549;
count__33527_33538 = G__33550;
i__33528_33539 = G__33551;
continue;
} else {
var dep_33552 = cljs.core.first.call(null,seq__33525_33546__$1);
topo_sort_helper_STAR_.call(null,dep_33552,(depth + (1)),state);

var G__33553 = cljs.core.next.call(null,seq__33525_33546__$1);
var G__33554 = null;
var G__33555 = (0);
var G__33556 = (0);
seq__33525_33536 = G__33553;
chunk__33526_33537 = G__33554;
count__33527_33538 = G__33555;
i__33528_33539 = G__33556;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33529){
var vec__33533 = p__33529;
var seq__33534 = cljs.core.seq.call(null,vec__33533);
var first__33535 = cljs.core.first.call(null,seq__33534);
var seq__33534__$1 = cljs.core.next.call(null,seq__33534);
var x = first__33535;
var xs = seq__33534__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33533,seq__33534,first__33535,seq__33534__$1,x,xs,get_deps__$1){
return (function (p1__33475_SHARP_){
return clojure.set.difference.call(null,p1__33475_SHARP_,x);
});})(vec__33533,seq__33534,first__33535,seq__33534__$1,x,xs,get_deps__$1))
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
var seq__33569 = cljs.core.seq.call(null,provides);
var chunk__33570 = null;
var count__33571 = (0);
var i__33572 = (0);
while(true){
if((i__33572 < count__33571)){
var prov = cljs.core._nth.call(null,chunk__33570,i__33572);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33573_33581 = cljs.core.seq.call(null,requires);
var chunk__33574_33582 = null;
var count__33575_33583 = (0);
var i__33576_33584 = (0);
while(true){
if((i__33576_33584 < count__33575_33583)){
var req_33585 = cljs.core._nth.call(null,chunk__33574_33582,i__33576_33584);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33585,prov);

var G__33586 = seq__33573_33581;
var G__33587 = chunk__33574_33582;
var G__33588 = count__33575_33583;
var G__33589 = (i__33576_33584 + (1));
seq__33573_33581 = G__33586;
chunk__33574_33582 = G__33587;
count__33575_33583 = G__33588;
i__33576_33584 = G__33589;
continue;
} else {
var temp__4657__auto___33590 = cljs.core.seq.call(null,seq__33573_33581);
if(temp__4657__auto___33590){
var seq__33573_33591__$1 = temp__4657__auto___33590;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33573_33591__$1)){
var c__26790__auto___33592 = cljs.core.chunk_first.call(null,seq__33573_33591__$1);
var G__33593 = cljs.core.chunk_rest.call(null,seq__33573_33591__$1);
var G__33594 = c__26790__auto___33592;
var G__33595 = cljs.core.count.call(null,c__26790__auto___33592);
var G__33596 = (0);
seq__33573_33581 = G__33593;
chunk__33574_33582 = G__33594;
count__33575_33583 = G__33595;
i__33576_33584 = G__33596;
continue;
} else {
var req_33597 = cljs.core.first.call(null,seq__33573_33591__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33597,prov);

var G__33598 = cljs.core.next.call(null,seq__33573_33591__$1);
var G__33599 = null;
var G__33600 = (0);
var G__33601 = (0);
seq__33573_33581 = G__33598;
chunk__33574_33582 = G__33599;
count__33575_33583 = G__33600;
i__33576_33584 = G__33601;
continue;
}
} else {
}
}
break;
}

var G__33602 = seq__33569;
var G__33603 = chunk__33570;
var G__33604 = count__33571;
var G__33605 = (i__33572 + (1));
seq__33569 = G__33602;
chunk__33570 = G__33603;
count__33571 = G__33604;
i__33572 = G__33605;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33569);
if(temp__4657__auto__){
var seq__33569__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33569__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33569__$1);
var G__33606 = cljs.core.chunk_rest.call(null,seq__33569__$1);
var G__33607 = c__26790__auto__;
var G__33608 = cljs.core.count.call(null,c__26790__auto__);
var G__33609 = (0);
seq__33569 = G__33606;
chunk__33570 = G__33607;
count__33571 = G__33608;
i__33572 = G__33609;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33569__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33577_33610 = cljs.core.seq.call(null,requires);
var chunk__33578_33611 = null;
var count__33579_33612 = (0);
var i__33580_33613 = (0);
while(true){
if((i__33580_33613 < count__33579_33612)){
var req_33614 = cljs.core._nth.call(null,chunk__33578_33611,i__33580_33613);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33614,prov);

var G__33615 = seq__33577_33610;
var G__33616 = chunk__33578_33611;
var G__33617 = count__33579_33612;
var G__33618 = (i__33580_33613 + (1));
seq__33577_33610 = G__33615;
chunk__33578_33611 = G__33616;
count__33579_33612 = G__33617;
i__33580_33613 = G__33618;
continue;
} else {
var temp__4657__auto___33619__$1 = cljs.core.seq.call(null,seq__33577_33610);
if(temp__4657__auto___33619__$1){
var seq__33577_33620__$1 = temp__4657__auto___33619__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33577_33620__$1)){
var c__26790__auto___33621 = cljs.core.chunk_first.call(null,seq__33577_33620__$1);
var G__33622 = cljs.core.chunk_rest.call(null,seq__33577_33620__$1);
var G__33623 = c__26790__auto___33621;
var G__33624 = cljs.core.count.call(null,c__26790__auto___33621);
var G__33625 = (0);
seq__33577_33610 = G__33622;
chunk__33578_33611 = G__33623;
count__33579_33612 = G__33624;
i__33580_33613 = G__33625;
continue;
} else {
var req_33626 = cljs.core.first.call(null,seq__33577_33620__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33626,prov);

var G__33627 = cljs.core.next.call(null,seq__33577_33620__$1);
var G__33628 = null;
var G__33629 = (0);
var G__33630 = (0);
seq__33577_33610 = G__33627;
chunk__33578_33611 = G__33628;
count__33579_33612 = G__33629;
i__33580_33613 = G__33630;
continue;
}
} else {
}
}
break;
}

var G__33631 = cljs.core.next.call(null,seq__33569__$1);
var G__33632 = null;
var G__33633 = (0);
var G__33634 = (0);
seq__33569 = G__33631;
chunk__33570 = G__33632;
count__33571 = G__33633;
i__33572 = G__33634;
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
var seq__33639_33643 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33640_33644 = null;
var count__33641_33645 = (0);
var i__33642_33646 = (0);
while(true){
if((i__33642_33646 < count__33641_33645)){
var ns_33647 = cljs.core._nth.call(null,chunk__33640_33644,i__33642_33646);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33647);

var G__33648 = seq__33639_33643;
var G__33649 = chunk__33640_33644;
var G__33650 = count__33641_33645;
var G__33651 = (i__33642_33646 + (1));
seq__33639_33643 = G__33648;
chunk__33640_33644 = G__33649;
count__33641_33645 = G__33650;
i__33642_33646 = G__33651;
continue;
} else {
var temp__4657__auto___33652 = cljs.core.seq.call(null,seq__33639_33643);
if(temp__4657__auto___33652){
var seq__33639_33653__$1 = temp__4657__auto___33652;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33639_33653__$1)){
var c__26790__auto___33654 = cljs.core.chunk_first.call(null,seq__33639_33653__$1);
var G__33655 = cljs.core.chunk_rest.call(null,seq__33639_33653__$1);
var G__33656 = c__26790__auto___33654;
var G__33657 = cljs.core.count.call(null,c__26790__auto___33654);
var G__33658 = (0);
seq__33639_33643 = G__33655;
chunk__33640_33644 = G__33656;
count__33641_33645 = G__33657;
i__33642_33646 = G__33658;
continue;
} else {
var ns_33659 = cljs.core.first.call(null,seq__33639_33653__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33659);

var G__33660 = cljs.core.next.call(null,seq__33639_33653__$1);
var G__33661 = null;
var G__33662 = (0);
var G__33663 = (0);
seq__33639_33643 = G__33660;
chunk__33640_33644 = G__33661;
count__33641_33645 = G__33662;
i__33642_33646 = G__33663;
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
var G__33664__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33664 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33665__i = 0, G__33665__a = new Array(arguments.length -  0);
while (G__33665__i < G__33665__a.length) {G__33665__a[G__33665__i] = arguments[G__33665__i + 0]; ++G__33665__i;}
  args = new cljs.core.IndexedSeq(G__33665__a,0);
} 
return G__33664__delegate.call(this,args);};
G__33664.cljs$lang$maxFixedArity = 0;
G__33664.cljs$lang$applyTo = (function (arglist__33666){
var args = cljs.core.seq(arglist__33666);
return G__33664__delegate(args);
});
G__33664.cljs$core$IFn$_invoke$arity$variadic = G__33664__delegate;
return G__33664;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33667 = cljs.core._EQ_;
var expr__33668 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33667.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33668))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__33667,expr__33668){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__33667,expr__33668))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__33667,expr__33668){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33670){if((e33670 instanceof Error)){
var e = e33670;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33670;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__33667,expr__33668))
} else {
if(cljs.core.truth_(pred__33667.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33668))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33667.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__33668))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__33667.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33668))){
return ((function (pred__33667,expr__33668){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33671){if((e33671 instanceof Error)){
var e = e33671;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33671;

}
}})());
});
;})(pred__33667,expr__33668))
} else {
return ((function (pred__33667,expr__33668){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33667,expr__33668))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33672,callback){
var map__33675 = p__33672;
var map__33675__$1 = ((((!((map__33675 == null)))?((((map__33675.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33675.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33675):map__33675);
var file_msg = map__33675__$1;
var request_url = cljs.core.get.call(null,map__33675__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__33675,map__33675__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33675,map__33675__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__){
return (function (state_33699){
var state_val_33700 = (state_33699[(1)]);
if((state_val_33700 === (7))){
var inst_33695 = (state_33699[(2)]);
var state_33699__$1 = state_33699;
var statearr_33701_33721 = state_33699__$1;
(statearr_33701_33721[(2)] = inst_33695);

(statearr_33701_33721[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (1))){
var state_33699__$1 = state_33699;
var statearr_33702_33722 = state_33699__$1;
(statearr_33702_33722[(2)] = null);

(statearr_33702_33722[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (4))){
var inst_33679 = (state_33699[(7)]);
var inst_33679__$1 = (state_33699[(2)]);
var state_33699__$1 = (function (){var statearr_33703 = state_33699;
(statearr_33703[(7)] = inst_33679__$1);

return statearr_33703;
})();
if(cljs.core.truth_(inst_33679__$1)){
var statearr_33704_33723 = state_33699__$1;
(statearr_33704_33723[(1)] = (5));

} else {
var statearr_33705_33724 = state_33699__$1;
(statearr_33705_33724[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (6))){
var state_33699__$1 = state_33699;
var statearr_33706_33725 = state_33699__$1;
(statearr_33706_33725[(2)] = null);

(statearr_33706_33725[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (3))){
var inst_33697 = (state_33699[(2)]);
var state_33699__$1 = state_33699;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33699__$1,inst_33697);
} else {
if((state_val_33700 === (2))){
var state_33699__$1 = state_33699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33699__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33700 === (11))){
var inst_33691 = (state_33699[(2)]);
var state_33699__$1 = (function (){var statearr_33707 = state_33699;
(statearr_33707[(8)] = inst_33691);

return statearr_33707;
})();
var statearr_33708_33726 = state_33699__$1;
(statearr_33708_33726[(2)] = null);

(statearr_33708_33726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (9))){
var inst_33685 = (state_33699[(9)]);
var inst_33683 = (state_33699[(10)]);
var inst_33687 = inst_33685.call(null,inst_33683);
var state_33699__$1 = state_33699;
var statearr_33709_33727 = state_33699__$1;
(statearr_33709_33727[(2)] = inst_33687);

(statearr_33709_33727[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (5))){
var inst_33679 = (state_33699[(7)]);
var inst_33681 = figwheel.client.file_reloading.blocking_load.call(null,inst_33679);
var state_33699__$1 = state_33699;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33699__$1,(8),inst_33681);
} else {
if((state_val_33700 === (10))){
var inst_33683 = (state_33699[(10)]);
var inst_33689 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33683);
var state_33699__$1 = state_33699;
var statearr_33710_33728 = state_33699__$1;
(statearr_33710_33728[(2)] = inst_33689);

(statearr_33710_33728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33700 === (8))){
var inst_33679 = (state_33699[(7)]);
var inst_33685 = (state_33699[(9)]);
var inst_33683 = (state_33699[(2)]);
var inst_33684 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33685__$1 = cljs.core.get.call(null,inst_33684,inst_33679);
var state_33699__$1 = (function (){var statearr_33711 = state_33699;
(statearr_33711[(9)] = inst_33685__$1);

(statearr_33711[(10)] = inst_33683);

return statearr_33711;
})();
if(cljs.core.truth_(inst_33685__$1)){
var statearr_33712_33729 = state_33699__$1;
(statearr_33712_33729[(1)] = (9));

} else {
var statearr_33713_33730 = state_33699__$1;
(statearr_33713_33730[(1)] = (10));

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
});})(c__28842__auto__))
;
return ((function (switch__28730__auto__,c__28842__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__28731__auto__ = null;
var figwheel$client$file_reloading$state_machine__28731__auto____0 = (function (){
var statearr_33717 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33717[(0)] = figwheel$client$file_reloading$state_machine__28731__auto__);

(statearr_33717[(1)] = (1));

return statearr_33717;
});
var figwheel$client$file_reloading$state_machine__28731__auto____1 = (function (state_33699){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_33699);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e33718){if((e33718 instanceof Object)){
var ex__28734__auto__ = e33718;
var statearr_33719_33731 = state_33699;
(statearr_33719_33731[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33699);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33718;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33732 = state_33699;
state_33699 = G__33732;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28731__auto__ = function(state_33699){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28731__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28731__auto____1.call(this,state_33699);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28731__auto____0;
figwheel$client$file_reloading$state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28731__auto____1;
return figwheel$client$file_reloading$state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__))
})();
var state__28844__auto__ = (function (){var statearr_33720 = f__28843__auto__.call(null);
(statearr_33720[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_33720;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__))
);

return c__28842__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33733,callback){
var map__33736 = p__33733;
var map__33736__$1 = ((((!((map__33736 == null)))?((((map__33736.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33736.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33736):map__33736);
var file_msg = map__33736__$1;
var namespace = cljs.core.get.call(null,map__33736__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33736,map__33736__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33736,map__33736__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33738){
var map__33741 = p__33738;
var map__33741__$1 = ((((!((map__33741 == null)))?((((map__33741.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33741.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33741):map__33741);
var file_msg = map__33741__$1;
var namespace = cljs.core.get.call(null,map__33741__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33743){
var map__33746 = p__33743;
var map__33746__$1 = ((((!((map__33746 == null)))?((((map__33746.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33746.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33746):map__33746);
var file_msg = map__33746__$1;
var namespace = cljs.core.get.call(null,map__33746__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33748,callback){
var map__33751 = p__33748;
var map__33751__$1 = ((((!((map__33751 == null)))?((((map__33751.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33751.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33751):map__33751);
var file_msg = map__33751__$1;
var request_url = cljs.core.get.call(null,map__33751__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33751__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28842__auto___33855 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___33855,out){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___33855,out){
return (function (state_33837){
var state_val_33838 = (state_33837[(1)]);
if((state_val_33838 === (1))){
var inst_33811 = cljs.core.seq.call(null,files);
var inst_33812 = cljs.core.first.call(null,inst_33811);
var inst_33813 = cljs.core.next.call(null,inst_33811);
var inst_33814 = files;
var state_33837__$1 = (function (){var statearr_33839 = state_33837;
(statearr_33839[(7)] = inst_33813);

(statearr_33839[(8)] = inst_33812);

(statearr_33839[(9)] = inst_33814);

return statearr_33839;
})();
var statearr_33840_33856 = state_33837__$1;
(statearr_33840_33856[(2)] = null);

(statearr_33840_33856[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (2))){
var inst_33820 = (state_33837[(10)]);
var inst_33814 = (state_33837[(9)]);
var inst_33819 = cljs.core.seq.call(null,inst_33814);
var inst_33820__$1 = cljs.core.first.call(null,inst_33819);
var inst_33821 = cljs.core.next.call(null,inst_33819);
var inst_33822 = (inst_33820__$1 == null);
var inst_33823 = cljs.core.not.call(null,inst_33822);
var state_33837__$1 = (function (){var statearr_33841 = state_33837;
(statearr_33841[(10)] = inst_33820__$1);

(statearr_33841[(11)] = inst_33821);

return statearr_33841;
})();
if(inst_33823){
var statearr_33842_33857 = state_33837__$1;
(statearr_33842_33857[(1)] = (4));

} else {
var statearr_33843_33858 = state_33837__$1;
(statearr_33843_33858[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (3))){
var inst_33835 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33837__$1,inst_33835);
} else {
if((state_val_33838 === (4))){
var inst_33820 = (state_33837[(10)]);
var inst_33825 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33820);
var state_33837__$1 = state_33837;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33837__$1,(7),inst_33825);
} else {
if((state_val_33838 === (5))){
var inst_33831 = cljs.core.async.close_BANG_.call(null,out);
var state_33837__$1 = state_33837;
var statearr_33844_33859 = state_33837__$1;
(statearr_33844_33859[(2)] = inst_33831);

(statearr_33844_33859[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (6))){
var inst_33833 = (state_33837[(2)]);
var state_33837__$1 = state_33837;
var statearr_33845_33860 = state_33837__$1;
(statearr_33845_33860[(2)] = inst_33833);

(statearr_33845_33860[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33838 === (7))){
var inst_33821 = (state_33837[(11)]);
var inst_33827 = (state_33837[(2)]);
var inst_33828 = cljs.core.async.put_BANG_.call(null,out,inst_33827);
var inst_33814 = inst_33821;
var state_33837__$1 = (function (){var statearr_33846 = state_33837;
(statearr_33846[(12)] = inst_33828);

(statearr_33846[(9)] = inst_33814);

return statearr_33846;
})();
var statearr_33847_33861 = state_33837__$1;
(statearr_33847_33861[(2)] = null);

(statearr_33847_33861[(1)] = (2));


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
});})(c__28842__auto___33855,out))
;
return ((function (switch__28730__auto__,c__28842__auto___33855,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto____0 = (function (){
var statearr_33851 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33851[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto__);

(statearr_33851[(1)] = (1));

return statearr_33851;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto____1 = (function (state_33837){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_33837);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e33852){if((e33852 instanceof Object)){
var ex__28734__auto__ = e33852;
var statearr_33853_33862 = state_33837;
(statearr_33853_33862[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33837);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33852;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33863 = state_33837;
state_33837 = G__33863;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto__ = function(state_33837){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto____1.call(this,state_33837);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___33855,out))
})();
var state__28844__auto__ = (function (){var statearr_33854 = f__28843__auto__.call(null);
(statearr_33854[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___33855);

return statearr_33854;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___33855,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33864,opts){
var map__33868 = p__33864;
var map__33868__$1 = ((((!((map__33868 == null)))?((((map__33868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33868):map__33868);
var eval_body__$1 = cljs.core.get.call(null,map__33868__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33868__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e33870){var e = e33870;
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
return (function (p1__33871_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33871_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__33880){
var vec__33881 = p__33880;
var k = cljs.core.nth.call(null,vec__33881,(0),null);
var v = cljs.core.nth.call(null,vec__33881,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33884){
var vec__33885 = p__33884;
var k = cljs.core.nth.call(null,vec__33885,(0),null);
var v = cljs.core.nth.call(null,vec__33885,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33891,p__33892){
var map__34139 = p__33891;
var map__34139__$1 = ((((!((map__34139 == null)))?((((map__34139.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34139.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34139):map__34139);
var opts = map__34139__$1;
var before_jsload = cljs.core.get.call(null,map__34139__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__34139__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__34139__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__34140 = p__33892;
var map__34140__$1 = ((((!((map__34140 == null)))?((((map__34140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34140):map__34140);
var msg = map__34140__$1;
var files = cljs.core.get.call(null,map__34140__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__34140__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__34140__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_34293){
var state_val_34294 = (state_34293[(1)]);
if((state_val_34294 === (7))){
var inst_34156 = (state_34293[(7)]);
var inst_34157 = (state_34293[(8)]);
var inst_34155 = (state_34293[(9)]);
var inst_34154 = (state_34293[(10)]);
var inst_34162 = cljs.core._nth.call(null,inst_34155,inst_34157);
var inst_34163 = figwheel.client.file_reloading.eval_body.call(null,inst_34162,opts);
var inst_34164 = (inst_34157 + (1));
var tmp34295 = inst_34156;
var tmp34296 = inst_34155;
var tmp34297 = inst_34154;
var inst_34154__$1 = tmp34297;
var inst_34155__$1 = tmp34296;
var inst_34156__$1 = tmp34295;
var inst_34157__$1 = inst_34164;
var state_34293__$1 = (function (){var statearr_34298 = state_34293;
(statearr_34298[(7)] = inst_34156__$1);

(statearr_34298[(8)] = inst_34157__$1);

(statearr_34298[(9)] = inst_34155__$1);

(statearr_34298[(10)] = inst_34154__$1);

(statearr_34298[(11)] = inst_34163);

return statearr_34298;
})();
var statearr_34299_34385 = state_34293__$1;
(statearr_34299_34385[(2)] = null);

(statearr_34299_34385[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (20))){
var inst_34197 = (state_34293[(12)]);
var inst_34205 = figwheel.client.file_reloading.sort_files.call(null,inst_34197);
var state_34293__$1 = state_34293;
var statearr_34300_34386 = state_34293__$1;
(statearr_34300_34386[(2)] = inst_34205);

(statearr_34300_34386[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (27))){
var state_34293__$1 = state_34293;
var statearr_34301_34387 = state_34293__$1;
(statearr_34301_34387[(2)] = null);

(statearr_34301_34387[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (1))){
var inst_34146 = (state_34293[(13)]);
var inst_34143 = before_jsload.call(null,files);
var inst_34144 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_34145 = (function (){return ((function (inst_34146,inst_34143,inst_34144,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33888_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33888_SHARP_);
});
;})(inst_34146,inst_34143,inst_34144,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34146__$1 = cljs.core.filter.call(null,inst_34145,files);
var inst_34147 = cljs.core.not_empty.call(null,inst_34146__$1);
var state_34293__$1 = (function (){var statearr_34302 = state_34293;
(statearr_34302[(14)] = inst_34144);

(statearr_34302[(13)] = inst_34146__$1);

(statearr_34302[(15)] = inst_34143);

return statearr_34302;
})();
if(cljs.core.truth_(inst_34147)){
var statearr_34303_34388 = state_34293__$1;
(statearr_34303_34388[(1)] = (2));

} else {
var statearr_34304_34389 = state_34293__$1;
(statearr_34304_34389[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (24))){
var state_34293__$1 = state_34293;
var statearr_34305_34390 = state_34293__$1;
(statearr_34305_34390[(2)] = null);

(statearr_34305_34390[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (39))){
var inst_34247 = (state_34293[(16)]);
var state_34293__$1 = state_34293;
var statearr_34306_34391 = state_34293__$1;
(statearr_34306_34391[(2)] = inst_34247);

(statearr_34306_34391[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (46))){
var inst_34288 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
var statearr_34307_34392 = state_34293__$1;
(statearr_34307_34392[(2)] = inst_34288);

(statearr_34307_34392[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (4))){
var inst_34191 = (state_34293[(2)]);
var inst_34192 = cljs.core.List.EMPTY;
var inst_34193 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_34192);
var inst_34194 = (function (){return ((function (inst_34191,inst_34192,inst_34193,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33889_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33889_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33889_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33889_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_34191,inst_34192,inst_34193,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34195 = cljs.core.filter.call(null,inst_34194,files);
var inst_34196 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_34197 = cljs.core.concat.call(null,inst_34195,inst_34196);
var state_34293__$1 = (function (){var statearr_34308 = state_34293;
(statearr_34308[(17)] = inst_34193);

(statearr_34308[(12)] = inst_34197);

(statearr_34308[(18)] = inst_34191);

return statearr_34308;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_34309_34393 = state_34293__$1;
(statearr_34309_34393[(1)] = (16));

} else {
var statearr_34310_34394 = state_34293__$1;
(statearr_34310_34394[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (15))){
var inst_34181 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
var statearr_34311_34395 = state_34293__$1;
(statearr_34311_34395[(2)] = inst_34181);

(statearr_34311_34395[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (21))){
var inst_34207 = (state_34293[(19)]);
var inst_34207__$1 = (state_34293[(2)]);
var inst_34208 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_34207__$1);
var state_34293__$1 = (function (){var statearr_34312 = state_34293;
(statearr_34312[(19)] = inst_34207__$1);

return statearr_34312;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34293__$1,(22),inst_34208);
} else {
if((state_val_34294 === (31))){
var inst_34291 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34293__$1,inst_34291);
} else {
if((state_val_34294 === (32))){
var inst_34247 = (state_34293[(16)]);
var inst_34252 = inst_34247.cljs$lang$protocol_mask$partition0$;
var inst_34253 = (inst_34252 & (64));
var inst_34254 = inst_34247.cljs$core$ISeq$;
var inst_34255 = (inst_34253) || (inst_34254);
var state_34293__$1 = state_34293;
if(cljs.core.truth_(inst_34255)){
var statearr_34313_34396 = state_34293__$1;
(statearr_34313_34396[(1)] = (35));

} else {
var statearr_34314_34397 = state_34293__$1;
(statearr_34314_34397[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (40))){
var inst_34268 = (state_34293[(20)]);
var inst_34267 = (state_34293[(2)]);
var inst_34268__$1 = cljs.core.get.call(null,inst_34267,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_34269 = cljs.core.get.call(null,inst_34267,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_34270 = cljs.core.not_empty.call(null,inst_34268__$1);
var state_34293__$1 = (function (){var statearr_34315 = state_34293;
(statearr_34315[(21)] = inst_34269);

(statearr_34315[(20)] = inst_34268__$1);

return statearr_34315;
})();
if(cljs.core.truth_(inst_34270)){
var statearr_34316_34398 = state_34293__$1;
(statearr_34316_34398[(1)] = (41));

} else {
var statearr_34317_34399 = state_34293__$1;
(statearr_34317_34399[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (33))){
var state_34293__$1 = state_34293;
var statearr_34318_34400 = state_34293__$1;
(statearr_34318_34400[(2)] = false);

(statearr_34318_34400[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (13))){
var inst_34167 = (state_34293[(22)]);
var inst_34171 = cljs.core.chunk_first.call(null,inst_34167);
var inst_34172 = cljs.core.chunk_rest.call(null,inst_34167);
var inst_34173 = cljs.core.count.call(null,inst_34171);
var inst_34154 = inst_34172;
var inst_34155 = inst_34171;
var inst_34156 = inst_34173;
var inst_34157 = (0);
var state_34293__$1 = (function (){var statearr_34319 = state_34293;
(statearr_34319[(7)] = inst_34156);

(statearr_34319[(8)] = inst_34157);

(statearr_34319[(9)] = inst_34155);

(statearr_34319[(10)] = inst_34154);

return statearr_34319;
})();
var statearr_34320_34401 = state_34293__$1;
(statearr_34320_34401[(2)] = null);

(statearr_34320_34401[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (22))){
var inst_34210 = (state_34293[(23)]);
var inst_34211 = (state_34293[(24)]);
var inst_34207 = (state_34293[(19)]);
var inst_34215 = (state_34293[(25)]);
var inst_34210__$1 = (state_34293[(2)]);
var inst_34211__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34210__$1);
var inst_34212 = (function (){var all_files = inst_34207;
var res_SINGLEQUOTE_ = inst_34210__$1;
var res = inst_34211__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_34210,inst_34211,inst_34207,inst_34215,inst_34210__$1,inst_34211__$1,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33890_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33890_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_34210,inst_34211,inst_34207,inst_34215,inst_34210__$1,inst_34211__$1,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34213 = cljs.core.filter.call(null,inst_34212,inst_34210__$1);
var inst_34214 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_34215__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_34214);
var inst_34216 = cljs.core.not_empty.call(null,inst_34215__$1);
var state_34293__$1 = (function (){var statearr_34321 = state_34293;
(statearr_34321[(23)] = inst_34210__$1);

(statearr_34321[(24)] = inst_34211__$1);

(statearr_34321[(26)] = inst_34213);

(statearr_34321[(25)] = inst_34215__$1);

return statearr_34321;
})();
if(cljs.core.truth_(inst_34216)){
var statearr_34322_34402 = state_34293__$1;
(statearr_34322_34402[(1)] = (23));

} else {
var statearr_34323_34403 = state_34293__$1;
(statearr_34323_34403[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (36))){
var state_34293__$1 = state_34293;
var statearr_34324_34404 = state_34293__$1;
(statearr_34324_34404[(2)] = false);

(statearr_34324_34404[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (41))){
var inst_34268 = (state_34293[(20)]);
var inst_34272 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_34273 = cljs.core.map.call(null,inst_34272,inst_34268);
var inst_34274 = cljs.core.pr_str.call(null,inst_34273);
var inst_34275 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_34274)].join('');
var inst_34276 = figwheel.client.utils.log.call(null,inst_34275);
var state_34293__$1 = state_34293;
var statearr_34325_34405 = state_34293__$1;
(statearr_34325_34405[(2)] = inst_34276);

(statearr_34325_34405[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (43))){
var inst_34269 = (state_34293[(21)]);
var inst_34279 = (state_34293[(2)]);
var inst_34280 = cljs.core.not_empty.call(null,inst_34269);
var state_34293__$1 = (function (){var statearr_34326 = state_34293;
(statearr_34326[(27)] = inst_34279);

return statearr_34326;
})();
if(cljs.core.truth_(inst_34280)){
var statearr_34327_34406 = state_34293__$1;
(statearr_34327_34406[(1)] = (44));

} else {
var statearr_34328_34407 = state_34293__$1;
(statearr_34328_34407[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (29))){
var inst_34210 = (state_34293[(23)]);
var inst_34211 = (state_34293[(24)]);
var inst_34213 = (state_34293[(26)]);
var inst_34207 = (state_34293[(19)]);
var inst_34247 = (state_34293[(16)]);
var inst_34215 = (state_34293[(25)]);
var inst_34243 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_34246 = (function (){var all_files = inst_34207;
var res_SINGLEQUOTE_ = inst_34210;
var res = inst_34211;
var files_not_loaded = inst_34213;
var dependencies_that_loaded = inst_34215;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34210,inst_34211,inst_34213,inst_34207,inst_34247,inst_34215,inst_34243,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34245){
var map__34329 = p__34245;
var map__34329__$1 = ((((!((map__34329 == null)))?((((map__34329.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34329.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34329):map__34329);
var namespace = cljs.core.get.call(null,map__34329__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34210,inst_34211,inst_34213,inst_34207,inst_34247,inst_34215,inst_34243,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34247__$1 = cljs.core.group_by.call(null,inst_34246,inst_34213);
var inst_34249 = (inst_34247__$1 == null);
var inst_34250 = cljs.core.not.call(null,inst_34249);
var state_34293__$1 = (function (){var statearr_34331 = state_34293;
(statearr_34331[(28)] = inst_34243);

(statearr_34331[(16)] = inst_34247__$1);

return statearr_34331;
})();
if(inst_34250){
var statearr_34332_34408 = state_34293__$1;
(statearr_34332_34408[(1)] = (32));

} else {
var statearr_34333_34409 = state_34293__$1;
(statearr_34333_34409[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (44))){
var inst_34269 = (state_34293[(21)]);
var inst_34282 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34269);
var inst_34283 = cljs.core.pr_str.call(null,inst_34282);
var inst_34284 = [cljs.core.str("not required: "),cljs.core.str(inst_34283)].join('');
var inst_34285 = figwheel.client.utils.log.call(null,inst_34284);
var state_34293__$1 = state_34293;
var statearr_34334_34410 = state_34293__$1;
(statearr_34334_34410[(2)] = inst_34285);

(statearr_34334_34410[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (6))){
var inst_34188 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
var statearr_34335_34411 = state_34293__$1;
(statearr_34335_34411[(2)] = inst_34188);

(statearr_34335_34411[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (28))){
var inst_34213 = (state_34293[(26)]);
var inst_34240 = (state_34293[(2)]);
var inst_34241 = cljs.core.not_empty.call(null,inst_34213);
var state_34293__$1 = (function (){var statearr_34336 = state_34293;
(statearr_34336[(29)] = inst_34240);

return statearr_34336;
})();
if(cljs.core.truth_(inst_34241)){
var statearr_34337_34412 = state_34293__$1;
(statearr_34337_34412[(1)] = (29));

} else {
var statearr_34338_34413 = state_34293__$1;
(statearr_34338_34413[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (25))){
var inst_34211 = (state_34293[(24)]);
var inst_34227 = (state_34293[(2)]);
var inst_34228 = cljs.core.not_empty.call(null,inst_34211);
var state_34293__$1 = (function (){var statearr_34339 = state_34293;
(statearr_34339[(30)] = inst_34227);

return statearr_34339;
})();
if(cljs.core.truth_(inst_34228)){
var statearr_34340_34414 = state_34293__$1;
(statearr_34340_34414[(1)] = (26));

} else {
var statearr_34341_34415 = state_34293__$1;
(statearr_34341_34415[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (34))){
var inst_34262 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
if(cljs.core.truth_(inst_34262)){
var statearr_34342_34416 = state_34293__$1;
(statearr_34342_34416[(1)] = (38));

} else {
var statearr_34343_34417 = state_34293__$1;
(statearr_34343_34417[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (17))){
var state_34293__$1 = state_34293;
var statearr_34344_34418 = state_34293__$1;
(statearr_34344_34418[(2)] = recompile_dependents);

(statearr_34344_34418[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (3))){
var state_34293__$1 = state_34293;
var statearr_34345_34419 = state_34293__$1;
(statearr_34345_34419[(2)] = null);

(statearr_34345_34419[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (12))){
var inst_34184 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
var statearr_34346_34420 = state_34293__$1;
(statearr_34346_34420[(2)] = inst_34184);

(statearr_34346_34420[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (2))){
var inst_34146 = (state_34293[(13)]);
var inst_34153 = cljs.core.seq.call(null,inst_34146);
var inst_34154 = inst_34153;
var inst_34155 = null;
var inst_34156 = (0);
var inst_34157 = (0);
var state_34293__$1 = (function (){var statearr_34347 = state_34293;
(statearr_34347[(7)] = inst_34156);

(statearr_34347[(8)] = inst_34157);

(statearr_34347[(9)] = inst_34155);

(statearr_34347[(10)] = inst_34154);

return statearr_34347;
})();
var statearr_34348_34421 = state_34293__$1;
(statearr_34348_34421[(2)] = null);

(statearr_34348_34421[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (23))){
var inst_34210 = (state_34293[(23)]);
var inst_34211 = (state_34293[(24)]);
var inst_34213 = (state_34293[(26)]);
var inst_34207 = (state_34293[(19)]);
var inst_34215 = (state_34293[(25)]);
var inst_34218 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_34220 = (function (){var all_files = inst_34207;
var res_SINGLEQUOTE_ = inst_34210;
var res = inst_34211;
var files_not_loaded = inst_34213;
var dependencies_that_loaded = inst_34215;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34210,inst_34211,inst_34213,inst_34207,inst_34215,inst_34218,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34219){
var map__34349 = p__34219;
var map__34349__$1 = ((((!((map__34349 == null)))?((((map__34349.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34349.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34349):map__34349);
var request_url = cljs.core.get.call(null,map__34349__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34210,inst_34211,inst_34213,inst_34207,inst_34215,inst_34218,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34221 = cljs.core.reverse.call(null,inst_34215);
var inst_34222 = cljs.core.map.call(null,inst_34220,inst_34221);
var inst_34223 = cljs.core.pr_str.call(null,inst_34222);
var inst_34224 = figwheel.client.utils.log.call(null,inst_34223);
var state_34293__$1 = (function (){var statearr_34351 = state_34293;
(statearr_34351[(31)] = inst_34218);

return statearr_34351;
})();
var statearr_34352_34422 = state_34293__$1;
(statearr_34352_34422[(2)] = inst_34224);

(statearr_34352_34422[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (35))){
var state_34293__$1 = state_34293;
var statearr_34353_34423 = state_34293__$1;
(statearr_34353_34423[(2)] = true);

(statearr_34353_34423[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (19))){
var inst_34197 = (state_34293[(12)]);
var inst_34203 = figwheel.client.file_reloading.expand_files.call(null,inst_34197);
var state_34293__$1 = state_34293;
var statearr_34354_34424 = state_34293__$1;
(statearr_34354_34424[(2)] = inst_34203);

(statearr_34354_34424[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (11))){
var state_34293__$1 = state_34293;
var statearr_34355_34425 = state_34293__$1;
(statearr_34355_34425[(2)] = null);

(statearr_34355_34425[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (9))){
var inst_34186 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
var statearr_34356_34426 = state_34293__$1;
(statearr_34356_34426[(2)] = inst_34186);

(statearr_34356_34426[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (5))){
var inst_34156 = (state_34293[(7)]);
var inst_34157 = (state_34293[(8)]);
var inst_34159 = (inst_34157 < inst_34156);
var inst_34160 = inst_34159;
var state_34293__$1 = state_34293;
if(cljs.core.truth_(inst_34160)){
var statearr_34357_34427 = state_34293__$1;
(statearr_34357_34427[(1)] = (7));

} else {
var statearr_34358_34428 = state_34293__$1;
(statearr_34358_34428[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (14))){
var inst_34167 = (state_34293[(22)]);
var inst_34176 = cljs.core.first.call(null,inst_34167);
var inst_34177 = figwheel.client.file_reloading.eval_body.call(null,inst_34176,opts);
var inst_34178 = cljs.core.next.call(null,inst_34167);
var inst_34154 = inst_34178;
var inst_34155 = null;
var inst_34156 = (0);
var inst_34157 = (0);
var state_34293__$1 = (function (){var statearr_34359 = state_34293;
(statearr_34359[(7)] = inst_34156);

(statearr_34359[(8)] = inst_34157);

(statearr_34359[(9)] = inst_34155);

(statearr_34359[(10)] = inst_34154);

(statearr_34359[(32)] = inst_34177);

return statearr_34359;
})();
var statearr_34360_34429 = state_34293__$1;
(statearr_34360_34429[(2)] = null);

(statearr_34360_34429[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (45))){
var state_34293__$1 = state_34293;
var statearr_34361_34430 = state_34293__$1;
(statearr_34361_34430[(2)] = null);

(statearr_34361_34430[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (26))){
var inst_34210 = (state_34293[(23)]);
var inst_34211 = (state_34293[(24)]);
var inst_34213 = (state_34293[(26)]);
var inst_34207 = (state_34293[(19)]);
var inst_34215 = (state_34293[(25)]);
var inst_34230 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_34232 = (function (){var all_files = inst_34207;
var res_SINGLEQUOTE_ = inst_34210;
var res = inst_34211;
var files_not_loaded = inst_34213;
var dependencies_that_loaded = inst_34215;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34210,inst_34211,inst_34213,inst_34207,inst_34215,inst_34230,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__34231){
var map__34362 = p__34231;
var map__34362__$1 = ((((!((map__34362 == null)))?((((map__34362.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34362.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34362):map__34362);
var namespace = cljs.core.get.call(null,map__34362__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__34362__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34210,inst_34211,inst_34213,inst_34207,inst_34215,inst_34230,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34233 = cljs.core.map.call(null,inst_34232,inst_34211);
var inst_34234 = cljs.core.pr_str.call(null,inst_34233);
var inst_34235 = figwheel.client.utils.log.call(null,inst_34234);
var inst_34236 = (function (){var all_files = inst_34207;
var res_SINGLEQUOTE_ = inst_34210;
var res = inst_34211;
var files_not_loaded = inst_34213;
var dependencies_that_loaded = inst_34215;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34210,inst_34211,inst_34213,inst_34207,inst_34215,inst_34230,inst_34232,inst_34233,inst_34234,inst_34235,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_34210,inst_34211,inst_34213,inst_34207,inst_34215,inst_34230,inst_34232,inst_34233,inst_34234,inst_34235,state_val_34294,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_34237 = setTimeout(inst_34236,(10));
var state_34293__$1 = (function (){var statearr_34364 = state_34293;
(statearr_34364[(33)] = inst_34235);

(statearr_34364[(34)] = inst_34230);

return statearr_34364;
})();
var statearr_34365_34431 = state_34293__$1;
(statearr_34365_34431[(2)] = inst_34237);

(statearr_34365_34431[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (16))){
var state_34293__$1 = state_34293;
var statearr_34366_34432 = state_34293__$1;
(statearr_34366_34432[(2)] = reload_dependents);

(statearr_34366_34432[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (38))){
var inst_34247 = (state_34293[(16)]);
var inst_34264 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34247);
var state_34293__$1 = state_34293;
var statearr_34367_34433 = state_34293__$1;
(statearr_34367_34433[(2)] = inst_34264);

(statearr_34367_34433[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (30))){
var state_34293__$1 = state_34293;
var statearr_34368_34434 = state_34293__$1;
(statearr_34368_34434[(2)] = null);

(statearr_34368_34434[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (10))){
var inst_34167 = (state_34293[(22)]);
var inst_34169 = cljs.core.chunked_seq_QMARK_.call(null,inst_34167);
var state_34293__$1 = state_34293;
if(inst_34169){
var statearr_34369_34435 = state_34293__$1;
(statearr_34369_34435[(1)] = (13));

} else {
var statearr_34370_34436 = state_34293__$1;
(statearr_34370_34436[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (18))){
var inst_34201 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
if(cljs.core.truth_(inst_34201)){
var statearr_34371_34437 = state_34293__$1;
(statearr_34371_34437[(1)] = (19));

} else {
var statearr_34372_34438 = state_34293__$1;
(statearr_34372_34438[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (42))){
var state_34293__$1 = state_34293;
var statearr_34373_34439 = state_34293__$1;
(statearr_34373_34439[(2)] = null);

(statearr_34373_34439[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (37))){
var inst_34259 = (state_34293[(2)]);
var state_34293__$1 = state_34293;
var statearr_34374_34440 = state_34293__$1;
(statearr_34374_34440[(2)] = inst_34259);

(statearr_34374_34440[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34294 === (8))){
var inst_34167 = (state_34293[(22)]);
var inst_34154 = (state_34293[(10)]);
var inst_34167__$1 = cljs.core.seq.call(null,inst_34154);
var state_34293__$1 = (function (){var statearr_34375 = state_34293;
(statearr_34375[(22)] = inst_34167__$1);

return statearr_34375;
})();
if(inst_34167__$1){
var statearr_34376_34441 = state_34293__$1;
(statearr_34376_34441[(1)] = (10));

} else {
var statearr_34377_34442 = state_34293__$1;
(statearr_34377_34442[(1)] = (11));

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
});})(c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28730__auto__,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto____0 = (function (){
var statearr_34381 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34381[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto__);

(statearr_34381[(1)] = (1));

return statearr_34381;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto____1 = (function (state_34293){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_34293);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e34382){if((e34382 instanceof Object)){
var ex__28734__auto__ = e34382;
var statearr_34383_34443 = state_34293;
(statearr_34383_34443[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34293);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34382;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34444 = state_34293;
state_34293 = G__34444;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto__ = function(state_34293){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto____1.call(this,state_34293);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28844__auto__ = (function (){var statearr_34384 = f__28843__auto__.call(null);
(statearr_34384[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_34384;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__,map__34139,map__34139__$1,opts,before_jsload,on_jsload,reload_dependents,map__34140,map__34140__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28842__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34447,link){
var map__34450 = p__34447;
var map__34450__$1 = ((((!((map__34450 == null)))?((((map__34450.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34450.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34450):map__34450);
var file = cljs.core.get.call(null,map__34450__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__34450,map__34450__$1,file){
return (function (p1__34445_SHARP_,p2__34446_SHARP_){
if(cljs.core._EQ_.call(null,p1__34445_SHARP_,p2__34446_SHARP_)){
return p1__34445_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__34450,map__34450__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34456){
var map__34457 = p__34456;
var map__34457__$1 = ((((!((map__34457 == null)))?((((map__34457.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34457.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34457):map__34457);
var match_length = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34457__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34452_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34452_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34459_SHARP_,p2__34460_SHARP_){
return cljs.core.assoc.call(null,p1__34459_SHARP_,cljs.core.get.call(null,p2__34460_SHARP_,key),p2__34460_SHARP_);
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
var loaded_f_datas_34461 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34461);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34461);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34462,p__34463){
var map__34468 = p__34462;
var map__34468__$1 = ((((!((map__34468 == null)))?((((map__34468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34468):map__34468);
var on_cssload = cljs.core.get.call(null,map__34468__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34469 = p__34463;
var map__34469__$1 = ((((!((map__34469 == null)))?((((map__34469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__34469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34469):map__34469);
var files_msg = map__34469__$1;
var files = cljs.core.get.call(null,map__34469__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1499270874212