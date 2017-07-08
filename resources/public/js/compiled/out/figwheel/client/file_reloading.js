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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__56455_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__56455_SHARP_));
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
var seq__56460 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__56461 = null;
var count__56462 = (0);
var i__56463 = (0);
while(true){
if((i__56463 < count__56462)){
var n = cljs.core._nth.call(null,chunk__56461,i__56463);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__56464 = seq__56460;
var G__56465 = chunk__56461;
var G__56466 = count__56462;
var G__56467 = (i__56463 + (1));
seq__56460 = G__56464;
chunk__56461 = G__56465;
count__56462 = G__56466;
i__56463 = G__56467;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56460);
if(temp__4657__auto__){
var seq__56460__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56460__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__56460__$1);
var G__56468 = cljs.core.chunk_rest.call(null,seq__56460__$1);
var G__56469 = c__26790__auto__;
var G__56470 = cljs.core.count.call(null,c__26790__auto__);
var G__56471 = (0);
seq__56460 = G__56468;
chunk__56461 = G__56469;
count__56462 = G__56470;
i__56463 = G__56471;
continue;
} else {
var n = cljs.core.first.call(null,seq__56460__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__56472 = cljs.core.next.call(null,seq__56460__$1);
var G__56473 = null;
var G__56474 = (0);
var G__56475 = (0);
seq__56460 = G__56472;
chunk__56461 = G__56473;
count__56462 = G__56474;
i__56463 = G__56475;
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

var seq__56526_56537 = cljs.core.seq.call(null,deps);
var chunk__56527_56538 = null;
var count__56528_56539 = (0);
var i__56529_56540 = (0);
while(true){
if((i__56529_56540 < count__56528_56539)){
var dep_56541 = cljs.core._nth.call(null,chunk__56527_56538,i__56529_56540);
topo_sort_helper_STAR_.call(null,dep_56541,(depth + (1)),state);

var G__56542 = seq__56526_56537;
var G__56543 = chunk__56527_56538;
var G__56544 = count__56528_56539;
var G__56545 = (i__56529_56540 + (1));
seq__56526_56537 = G__56542;
chunk__56527_56538 = G__56543;
count__56528_56539 = G__56544;
i__56529_56540 = G__56545;
continue;
} else {
var temp__4657__auto___56546 = cljs.core.seq.call(null,seq__56526_56537);
if(temp__4657__auto___56546){
var seq__56526_56547__$1 = temp__4657__auto___56546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56526_56547__$1)){
var c__26790__auto___56548 = cljs.core.chunk_first.call(null,seq__56526_56547__$1);
var G__56549 = cljs.core.chunk_rest.call(null,seq__56526_56547__$1);
var G__56550 = c__26790__auto___56548;
var G__56551 = cljs.core.count.call(null,c__26790__auto___56548);
var G__56552 = (0);
seq__56526_56537 = G__56549;
chunk__56527_56538 = G__56550;
count__56528_56539 = G__56551;
i__56529_56540 = G__56552;
continue;
} else {
var dep_56553 = cljs.core.first.call(null,seq__56526_56547__$1);
topo_sort_helper_STAR_.call(null,dep_56553,(depth + (1)),state);

var G__56554 = cljs.core.next.call(null,seq__56526_56547__$1);
var G__56555 = null;
var G__56556 = (0);
var G__56557 = (0);
seq__56526_56537 = G__56554;
chunk__56527_56538 = G__56555;
count__56528_56539 = G__56556;
i__56529_56540 = G__56557;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__56530){
var vec__56534 = p__56530;
var seq__56535 = cljs.core.seq.call(null,vec__56534);
var first__56536 = cljs.core.first.call(null,seq__56535);
var seq__56535__$1 = cljs.core.next.call(null,seq__56535);
var x = first__56536;
var xs = seq__56535__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__56534,seq__56535,first__56536,seq__56535__$1,x,xs,get_deps__$1){
return (function (p1__56476_SHARP_){
return clojure.set.difference.call(null,p1__56476_SHARP_,x);
});})(vec__56534,seq__56535,first__56536,seq__56535__$1,x,xs,get_deps__$1))
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
var seq__56570 = cljs.core.seq.call(null,provides);
var chunk__56571 = null;
var count__56572 = (0);
var i__56573 = (0);
while(true){
if((i__56573 < count__56572)){
var prov = cljs.core._nth.call(null,chunk__56571,i__56573);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__56574_56582 = cljs.core.seq.call(null,requires);
var chunk__56575_56583 = null;
var count__56576_56584 = (0);
var i__56577_56585 = (0);
while(true){
if((i__56577_56585 < count__56576_56584)){
var req_56586 = cljs.core._nth.call(null,chunk__56575_56583,i__56577_56585);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56586,prov);

var G__56587 = seq__56574_56582;
var G__56588 = chunk__56575_56583;
var G__56589 = count__56576_56584;
var G__56590 = (i__56577_56585 + (1));
seq__56574_56582 = G__56587;
chunk__56575_56583 = G__56588;
count__56576_56584 = G__56589;
i__56577_56585 = G__56590;
continue;
} else {
var temp__4657__auto___56591 = cljs.core.seq.call(null,seq__56574_56582);
if(temp__4657__auto___56591){
var seq__56574_56592__$1 = temp__4657__auto___56591;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56574_56592__$1)){
var c__26790__auto___56593 = cljs.core.chunk_first.call(null,seq__56574_56592__$1);
var G__56594 = cljs.core.chunk_rest.call(null,seq__56574_56592__$1);
var G__56595 = c__26790__auto___56593;
var G__56596 = cljs.core.count.call(null,c__26790__auto___56593);
var G__56597 = (0);
seq__56574_56582 = G__56594;
chunk__56575_56583 = G__56595;
count__56576_56584 = G__56596;
i__56577_56585 = G__56597;
continue;
} else {
var req_56598 = cljs.core.first.call(null,seq__56574_56592__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56598,prov);

var G__56599 = cljs.core.next.call(null,seq__56574_56592__$1);
var G__56600 = null;
var G__56601 = (0);
var G__56602 = (0);
seq__56574_56582 = G__56599;
chunk__56575_56583 = G__56600;
count__56576_56584 = G__56601;
i__56577_56585 = G__56602;
continue;
}
} else {
}
}
break;
}

var G__56603 = seq__56570;
var G__56604 = chunk__56571;
var G__56605 = count__56572;
var G__56606 = (i__56573 + (1));
seq__56570 = G__56603;
chunk__56571 = G__56604;
count__56572 = G__56605;
i__56573 = G__56606;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__56570);
if(temp__4657__auto__){
var seq__56570__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56570__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__56570__$1);
var G__56607 = cljs.core.chunk_rest.call(null,seq__56570__$1);
var G__56608 = c__26790__auto__;
var G__56609 = cljs.core.count.call(null,c__26790__auto__);
var G__56610 = (0);
seq__56570 = G__56607;
chunk__56571 = G__56608;
count__56572 = G__56609;
i__56573 = G__56610;
continue;
} else {
var prov = cljs.core.first.call(null,seq__56570__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__56578_56611 = cljs.core.seq.call(null,requires);
var chunk__56579_56612 = null;
var count__56580_56613 = (0);
var i__56581_56614 = (0);
while(true){
if((i__56581_56614 < count__56580_56613)){
var req_56615 = cljs.core._nth.call(null,chunk__56579_56612,i__56581_56614);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56615,prov);

var G__56616 = seq__56578_56611;
var G__56617 = chunk__56579_56612;
var G__56618 = count__56580_56613;
var G__56619 = (i__56581_56614 + (1));
seq__56578_56611 = G__56616;
chunk__56579_56612 = G__56617;
count__56580_56613 = G__56618;
i__56581_56614 = G__56619;
continue;
} else {
var temp__4657__auto___56620__$1 = cljs.core.seq.call(null,seq__56578_56611);
if(temp__4657__auto___56620__$1){
var seq__56578_56621__$1 = temp__4657__auto___56620__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56578_56621__$1)){
var c__26790__auto___56622 = cljs.core.chunk_first.call(null,seq__56578_56621__$1);
var G__56623 = cljs.core.chunk_rest.call(null,seq__56578_56621__$1);
var G__56624 = c__26790__auto___56622;
var G__56625 = cljs.core.count.call(null,c__26790__auto___56622);
var G__56626 = (0);
seq__56578_56611 = G__56623;
chunk__56579_56612 = G__56624;
count__56580_56613 = G__56625;
i__56581_56614 = G__56626;
continue;
} else {
var req_56627 = cljs.core.first.call(null,seq__56578_56621__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_56627,prov);

var G__56628 = cljs.core.next.call(null,seq__56578_56621__$1);
var G__56629 = null;
var G__56630 = (0);
var G__56631 = (0);
seq__56578_56611 = G__56628;
chunk__56579_56612 = G__56629;
count__56580_56613 = G__56630;
i__56581_56614 = G__56631;
continue;
}
} else {
}
}
break;
}

var G__56632 = cljs.core.next.call(null,seq__56570__$1);
var G__56633 = null;
var G__56634 = (0);
var G__56635 = (0);
seq__56570 = G__56632;
chunk__56571 = G__56633;
count__56572 = G__56634;
i__56573 = G__56635;
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
var seq__56640_56644 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__56641_56645 = null;
var count__56642_56646 = (0);
var i__56643_56647 = (0);
while(true){
if((i__56643_56647 < count__56642_56646)){
var ns_56648 = cljs.core._nth.call(null,chunk__56641_56645,i__56643_56647);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_56648);

var G__56649 = seq__56640_56644;
var G__56650 = chunk__56641_56645;
var G__56651 = count__56642_56646;
var G__56652 = (i__56643_56647 + (1));
seq__56640_56644 = G__56649;
chunk__56641_56645 = G__56650;
count__56642_56646 = G__56651;
i__56643_56647 = G__56652;
continue;
} else {
var temp__4657__auto___56653 = cljs.core.seq.call(null,seq__56640_56644);
if(temp__4657__auto___56653){
var seq__56640_56654__$1 = temp__4657__auto___56653;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56640_56654__$1)){
var c__26790__auto___56655 = cljs.core.chunk_first.call(null,seq__56640_56654__$1);
var G__56656 = cljs.core.chunk_rest.call(null,seq__56640_56654__$1);
var G__56657 = c__26790__auto___56655;
var G__56658 = cljs.core.count.call(null,c__26790__auto___56655);
var G__56659 = (0);
seq__56640_56644 = G__56656;
chunk__56641_56645 = G__56657;
count__56642_56646 = G__56658;
i__56643_56647 = G__56659;
continue;
} else {
var ns_56660 = cljs.core.first.call(null,seq__56640_56654__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_56660);

var G__56661 = cljs.core.next.call(null,seq__56640_56654__$1);
var G__56662 = null;
var G__56663 = (0);
var G__56664 = (0);
seq__56640_56644 = G__56661;
chunk__56641_56645 = G__56662;
count__56642_56646 = G__56663;
i__56643_56647 = G__56664;
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
var G__56665__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__56665 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__56666__i = 0, G__56666__a = new Array(arguments.length -  0);
while (G__56666__i < G__56666__a.length) {G__56666__a[G__56666__i] = arguments[G__56666__i + 0]; ++G__56666__i;}
  args = new cljs.core.IndexedSeq(G__56666__a,0);
} 
return G__56665__delegate.call(this,args);};
G__56665.cljs$lang$maxFixedArity = 0;
G__56665.cljs$lang$applyTo = (function (arglist__56667){
var args = cljs.core.seq(arglist__56667);
return G__56665__delegate(args);
});
G__56665.cljs$core$IFn$_invoke$arity$variadic = G__56665__delegate;
return G__56665;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__56668 = cljs.core._EQ_;
var expr__56669 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__56668.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__56669))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__56668,expr__56669){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__56668,expr__56669))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__56668,expr__56669){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e56671){if((e56671 instanceof Error)){
var e = e56671;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e56671;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__56668,expr__56669))
} else {
if(cljs.core.truth_(pred__56668.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__56669))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__56668.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__56669))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__56668.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__56669))){
return ((function (pred__56668,expr__56669){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e56672){if((e56672 instanceof Error)){
var e = e56672;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e56672;

}
}})());
});
;})(pred__56668,expr__56669))
} else {
return ((function (pred__56668,expr__56669){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__56668,expr__56669))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__56673,callback){
var map__56676 = p__56673;
var map__56676__$1 = ((((!((map__56676 == null)))?((((map__56676.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56676.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56676):map__56676);
var file_msg = map__56676__$1;
var request_url = cljs.core.get.call(null,map__56676__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__56676,map__56676__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__56676,map__56676__$1,file_msg,request_url))
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
return (function (state_56700){
var state_val_56701 = (state_56700[(1)]);
if((state_val_56701 === (7))){
var inst_56696 = (state_56700[(2)]);
var state_56700__$1 = state_56700;
var statearr_56702_56722 = state_56700__$1;
(statearr_56702_56722[(2)] = inst_56696);

(statearr_56702_56722[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56701 === (1))){
var state_56700__$1 = state_56700;
var statearr_56703_56723 = state_56700__$1;
(statearr_56703_56723[(2)] = null);

(statearr_56703_56723[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56701 === (4))){
var inst_56680 = (state_56700[(7)]);
var inst_56680__$1 = (state_56700[(2)]);
var state_56700__$1 = (function (){var statearr_56704 = state_56700;
(statearr_56704[(7)] = inst_56680__$1);

return statearr_56704;
})();
if(cljs.core.truth_(inst_56680__$1)){
var statearr_56705_56724 = state_56700__$1;
(statearr_56705_56724[(1)] = (5));

} else {
var statearr_56706_56725 = state_56700__$1;
(statearr_56706_56725[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56701 === (6))){
var state_56700__$1 = state_56700;
var statearr_56707_56726 = state_56700__$1;
(statearr_56707_56726[(2)] = null);

(statearr_56707_56726[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56701 === (3))){
var inst_56698 = (state_56700[(2)]);
var state_56700__$1 = state_56700;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56700__$1,inst_56698);
} else {
if((state_val_56701 === (2))){
var state_56700__$1 = state_56700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56700__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_56701 === (11))){
var inst_56692 = (state_56700[(2)]);
var state_56700__$1 = (function (){var statearr_56708 = state_56700;
(statearr_56708[(8)] = inst_56692);

return statearr_56708;
})();
var statearr_56709_56727 = state_56700__$1;
(statearr_56709_56727[(2)] = null);

(statearr_56709_56727[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56701 === (9))){
var inst_56686 = (state_56700[(9)]);
var inst_56684 = (state_56700[(10)]);
var inst_56688 = inst_56686.call(null,inst_56684);
var state_56700__$1 = state_56700;
var statearr_56710_56728 = state_56700__$1;
(statearr_56710_56728[(2)] = inst_56688);

(statearr_56710_56728[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56701 === (5))){
var inst_56680 = (state_56700[(7)]);
var inst_56682 = figwheel.client.file_reloading.blocking_load.call(null,inst_56680);
var state_56700__$1 = state_56700;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56700__$1,(8),inst_56682);
} else {
if((state_val_56701 === (10))){
var inst_56684 = (state_56700[(10)]);
var inst_56690 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_56684);
var state_56700__$1 = state_56700;
var statearr_56711_56729 = state_56700__$1;
(statearr_56711_56729[(2)] = inst_56690);

(statearr_56711_56729[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56701 === (8))){
var inst_56686 = (state_56700[(9)]);
var inst_56680 = (state_56700[(7)]);
var inst_56684 = (state_56700[(2)]);
var inst_56685 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_56686__$1 = cljs.core.get.call(null,inst_56685,inst_56680);
var state_56700__$1 = (function (){var statearr_56712 = state_56700;
(statearr_56712[(9)] = inst_56686__$1);

(statearr_56712[(10)] = inst_56684);

return statearr_56712;
})();
if(cljs.core.truth_(inst_56686__$1)){
var statearr_56713_56730 = state_56700__$1;
(statearr_56713_56730[(1)] = (9));

} else {
var statearr_56714_56731 = state_56700__$1;
(statearr_56714_56731[(1)] = (10));

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
var statearr_56718 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_56718[(0)] = figwheel$client$file_reloading$state_machine__28151__auto__);

(statearr_56718[(1)] = (1));

return statearr_56718;
});
var figwheel$client$file_reloading$state_machine__28151__auto____1 = (function (state_56700){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_56700);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e56719){if((e56719 instanceof Object)){
var ex__28154__auto__ = e56719;
var statearr_56720_56732 = state_56700;
(statearr_56720_56732[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56700);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56719;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56733 = state_56700;
state_56700 = G__56733;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__28151__auto__ = function(state_56700){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__28151__auto____1.call(this,state_56700);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__28151__auto____0;
figwheel$client$file_reloading$state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__28151__auto____1;
return figwheel$client$file_reloading$state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_56721 = f__28172__auto__.call(null);
(statearr_56721[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_56721;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__56734,callback){
var map__56737 = p__56734;
var map__56737__$1 = ((((!((map__56737 == null)))?((((map__56737.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56737.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56737):map__56737);
var file_msg = map__56737__$1;
var namespace = cljs.core.get.call(null,map__56737__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__56737,map__56737__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__56737,map__56737__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__56739){
var map__56742 = p__56739;
var map__56742__$1 = ((((!((map__56742 == null)))?((((map__56742.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56742.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56742):map__56742);
var file_msg = map__56742__$1;
var namespace = cljs.core.get.call(null,map__56742__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__56744){
var map__56747 = p__56744;
var map__56747__$1 = ((((!((map__56747 == null)))?((((map__56747.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56747.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56747):map__56747);
var file_msg = map__56747__$1;
var namespace = cljs.core.get.call(null,map__56747__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__56749,callback){
var map__56752 = p__56749;
var map__56752__$1 = ((((!((map__56752 == null)))?((((map__56752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56752):map__56752);
var file_msg = map__56752__$1;
var request_url = cljs.core.get.call(null,map__56752__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__56752__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28171__auto___56856 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___56856,out){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___56856,out){
return (function (state_56838){
var state_val_56839 = (state_56838[(1)]);
if((state_val_56839 === (1))){
var inst_56812 = cljs.core.seq.call(null,files);
var inst_56813 = cljs.core.first.call(null,inst_56812);
var inst_56814 = cljs.core.next.call(null,inst_56812);
var inst_56815 = files;
var state_56838__$1 = (function (){var statearr_56840 = state_56838;
(statearr_56840[(7)] = inst_56813);

(statearr_56840[(8)] = inst_56815);

(statearr_56840[(9)] = inst_56814);

return statearr_56840;
})();
var statearr_56841_56857 = state_56838__$1;
(statearr_56841_56857[(2)] = null);

(statearr_56841_56857[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56839 === (2))){
var inst_56815 = (state_56838[(8)]);
var inst_56821 = (state_56838[(10)]);
var inst_56820 = cljs.core.seq.call(null,inst_56815);
var inst_56821__$1 = cljs.core.first.call(null,inst_56820);
var inst_56822 = cljs.core.next.call(null,inst_56820);
var inst_56823 = (inst_56821__$1 == null);
var inst_56824 = cljs.core.not.call(null,inst_56823);
var state_56838__$1 = (function (){var statearr_56842 = state_56838;
(statearr_56842[(11)] = inst_56822);

(statearr_56842[(10)] = inst_56821__$1);

return statearr_56842;
})();
if(inst_56824){
var statearr_56843_56858 = state_56838__$1;
(statearr_56843_56858[(1)] = (4));

} else {
var statearr_56844_56859 = state_56838__$1;
(statearr_56844_56859[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56839 === (3))){
var inst_56836 = (state_56838[(2)]);
var state_56838__$1 = state_56838;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_56838__$1,inst_56836);
} else {
if((state_val_56839 === (4))){
var inst_56821 = (state_56838[(10)]);
var inst_56826 = figwheel.client.file_reloading.reload_js_file.call(null,inst_56821);
var state_56838__$1 = state_56838;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_56838__$1,(7),inst_56826);
} else {
if((state_val_56839 === (5))){
var inst_56832 = cljs.core.async.close_BANG_.call(null,out);
var state_56838__$1 = state_56838;
var statearr_56845_56860 = state_56838__$1;
(statearr_56845_56860[(2)] = inst_56832);

(statearr_56845_56860[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56839 === (6))){
var inst_56834 = (state_56838[(2)]);
var state_56838__$1 = state_56838;
var statearr_56846_56861 = state_56838__$1;
(statearr_56846_56861[(2)] = inst_56834);

(statearr_56846_56861[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_56839 === (7))){
var inst_56822 = (state_56838[(11)]);
var inst_56828 = (state_56838[(2)]);
var inst_56829 = cljs.core.async.put_BANG_.call(null,out,inst_56828);
var inst_56815 = inst_56822;
var state_56838__$1 = (function (){var statearr_56847 = state_56838;
(statearr_56847[(12)] = inst_56829);

(statearr_56847[(8)] = inst_56815);

return statearr_56847;
})();
var statearr_56848_56862 = state_56838__$1;
(statearr_56848_56862[(2)] = null);

(statearr_56848_56862[(1)] = (2));


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
});})(c__28171__auto___56856,out))
;
return ((function (switch__28150__auto__,c__28171__auto___56856,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0 = (function (){
var statearr_56852 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_56852[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__);

(statearr_56852[(1)] = (1));

return statearr_56852;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1 = (function (state_56838){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_56838);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e56853){if((e56853 instanceof Object)){
var ex__28154__auto__ = e56853;
var statearr_56854_56863 = state_56838;
(statearr_56854_56863[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_56838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e56853;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__56864 = state_56838;
state_56838 = G__56864;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__ = function(state_56838){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1.call(this,state_56838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___56856,out))
})();
var state__28173__auto__ = (function (){var statearr_56855 = f__28172__auto__.call(null);
(statearr_56855[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___56856);

return statearr_56855;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___56856,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__56865,opts){
var map__56869 = p__56865;
var map__56869__$1 = ((((!((map__56869 == null)))?((((map__56869.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56869.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56869):map__56869);
var eval_body__$1 = cljs.core.get.call(null,map__56869__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__56869__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e56871){var e = e56871;
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
return (function (p1__56872_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56872_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__56881){
var vec__56882 = p__56881;
var k = cljs.core.nth.call(null,vec__56882,(0),null);
var v = cljs.core.nth.call(null,vec__56882,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__56885){
var vec__56886 = p__56885;
var k = cljs.core.nth.call(null,vec__56886,(0),null);
var v = cljs.core.nth.call(null,vec__56886,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__56892,p__56893){
var map__57140 = p__56892;
var map__57140__$1 = ((((!((map__57140 == null)))?((((map__57140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57140):map__57140);
var opts = map__57140__$1;
var before_jsload = cljs.core.get.call(null,map__57140__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__57140__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__57140__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__57141 = p__56893;
var map__57141__$1 = ((((!((map__57141 == null)))?((((map__57141.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57141.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57141):map__57141);
var msg = map__57141__$1;
var files = cljs.core.get.call(null,map__57141__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__57141__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__57141__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_57294){
var state_val_57295 = (state_57294[(1)]);
if((state_val_57295 === (7))){
var inst_57157 = (state_57294[(7)]);
var inst_57158 = (state_57294[(8)]);
var inst_57155 = (state_57294[(9)]);
var inst_57156 = (state_57294[(10)]);
var inst_57163 = cljs.core._nth.call(null,inst_57156,inst_57158);
var inst_57164 = figwheel.client.file_reloading.eval_body.call(null,inst_57163,opts);
var inst_57165 = (inst_57158 + (1));
var tmp57296 = inst_57157;
var tmp57297 = inst_57155;
var tmp57298 = inst_57156;
var inst_57155__$1 = tmp57297;
var inst_57156__$1 = tmp57298;
var inst_57157__$1 = tmp57296;
var inst_57158__$1 = inst_57165;
var state_57294__$1 = (function (){var statearr_57299 = state_57294;
(statearr_57299[(7)] = inst_57157__$1);

(statearr_57299[(8)] = inst_57158__$1);

(statearr_57299[(9)] = inst_57155__$1);

(statearr_57299[(10)] = inst_57156__$1);

(statearr_57299[(11)] = inst_57164);

return statearr_57299;
})();
var statearr_57300_57386 = state_57294__$1;
(statearr_57300_57386[(2)] = null);

(statearr_57300_57386[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (20))){
var inst_57198 = (state_57294[(12)]);
var inst_57206 = figwheel.client.file_reloading.sort_files.call(null,inst_57198);
var state_57294__$1 = state_57294;
var statearr_57301_57387 = state_57294__$1;
(statearr_57301_57387[(2)] = inst_57206);

(statearr_57301_57387[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (27))){
var state_57294__$1 = state_57294;
var statearr_57302_57388 = state_57294__$1;
(statearr_57302_57388[(2)] = null);

(statearr_57302_57388[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (1))){
var inst_57147 = (state_57294[(13)]);
var inst_57144 = before_jsload.call(null,files);
var inst_57145 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_57146 = (function (){return ((function (inst_57147,inst_57144,inst_57145,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56889_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56889_SHARP_);
});
;})(inst_57147,inst_57144,inst_57145,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57147__$1 = cljs.core.filter.call(null,inst_57146,files);
var inst_57148 = cljs.core.not_empty.call(null,inst_57147__$1);
var state_57294__$1 = (function (){var statearr_57303 = state_57294;
(statearr_57303[(13)] = inst_57147__$1);

(statearr_57303[(14)] = inst_57145);

(statearr_57303[(15)] = inst_57144);

return statearr_57303;
})();
if(cljs.core.truth_(inst_57148)){
var statearr_57304_57389 = state_57294__$1;
(statearr_57304_57389[(1)] = (2));

} else {
var statearr_57305_57390 = state_57294__$1;
(statearr_57305_57390[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (24))){
var state_57294__$1 = state_57294;
var statearr_57306_57391 = state_57294__$1;
(statearr_57306_57391[(2)] = null);

(statearr_57306_57391[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (39))){
var inst_57248 = (state_57294[(16)]);
var state_57294__$1 = state_57294;
var statearr_57307_57392 = state_57294__$1;
(statearr_57307_57392[(2)] = inst_57248);

(statearr_57307_57392[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (46))){
var inst_57289 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
var statearr_57308_57393 = state_57294__$1;
(statearr_57308_57393[(2)] = inst_57289);

(statearr_57308_57393[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (4))){
var inst_57192 = (state_57294[(2)]);
var inst_57193 = cljs.core.List.EMPTY;
var inst_57194 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_57193);
var inst_57195 = (function (){return ((function (inst_57192,inst_57193,inst_57194,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56890_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__56890_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__56890_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__56890_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_57192,inst_57193,inst_57194,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57196 = cljs.core.filter.call(null,inst_57195,files);
var inst_57197 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_57198 = cljs.core.concat.call(null,inst_57196,inst_57197);
var state_57294__$1 = (function (){var statearr_57309 = state_57294;
(statearr_57309[(17)] = inst_57192);

(statearr_57309[(18)] = inst_57194);

(statearr_57309[(12)] = inst_57198);

return statearr_57309;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_57310_57394 = state_57294__$1;
(statearr_57310_57394[(1)] = (16));

} else {
var statearr_57311_57395 = state_57294__$1;
(statearr_57311_57395[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (15))){
var inst_57182 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
var statearr_57312_57396 = state_57294__$1;
(statearr_57312_57396[(2)] = inst_57182);

(statearr_57312_57396[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (21))){
var inst_57208 = (state_57294[(19)]);
var inst_57208__$1 = (state_57294[(2)]);
var inst_57209 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_57208__$1);
var state_57294__$1 = (function (){var statearr_57313 = state_57294;
(statearr_57313[(19)] = inst_57208__$1);

return statearr_57313;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57294__$1,(22),inst_57209);
} else {
if((state_val_57295 === (31))){
var inst_57292 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57294__$1,inst_57292);
} else {
if((state_val_57295 === (32))){
var inst_57248 = (state_57294[(16)]);
var inst_57253 = inst_57248.cljs$lang$protocol_mask$partition0$;
var inst_57254 = (inst_57253 & (64));
var inst_57255 = inst_57248.cljs$core$ISeq$;
var inst_57256 = (inst_57254) || (inst_57255);
var state_57294__$1 = state_57294;
if(cljs.core.truth_(inst_57256)){
var statearr_57314_57397 = state_57294__$1;
(statearr_57314_57397[(1)] = (35));

} else {
var statearr_57315_57398 = state_57294__$1;
(statearr_57315_57398[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (40))){
var inst_57269 = (state_57294[(20)]);
var inst_57268 = (state_57294[(2)]);
var inst_57269__$1 = cljs.core.get.call(null,inst_57268,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_57270 = cljs.core.get.call(null,inst_57268,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_57271 = cljs.core.not_empty.call(null,inst_57269__$1);
var state_57294__$1 = (function (){var statearr_57316 = state_57294;
(statearr_57316[(21)] = inst_57270);

(statearr_57316[(20)] = inst_57269__$1);

return statearr_57316;
})();
if(cljs.core.truth_(inst_57271)){
var statearr_57317_57399 = state_57294__$1;
(statearr_57317_57399[(1)] = (41));

} else {
var statearr_57318_57400 = state_57294__$1;
(statearr_57318_57400[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (33))){
var state_57294__$1 = state_57294;
var statearr_57319_57401 = state_57294__$1;
(statearr_57319_57401[(2)] = false);

(statearr_57319_57401[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (13))){
var inst_57168 = (state_57294[(22)]);
var inst_57172 = cljs.core.chunk_first.call(null,inst_57168);
var inst_57173 = cljs.core.chunk_rest.call(null,inst_57168);
var inst_57174 = cljs.core.count.call(null,inst_57172);
var inst_57155 = inst_57173;
var inst_57156 = inst_57172;
var inst_57157 = inst_57174;
var inst_57158 = (0);
var state_57294__$1 = (function (){var statearr_57320 = state_57294;
(statearr_57320[(7)] = inst_57157);

(statearr_57320[(8)] = inst_57158);

(statearr_57320[(9)] = inst_57155);

(statearr_57320[(10)] = inst_57156);

return statearr_57320;
})();
var statearr_57321_57402 = state_57294__$1;
(statearr_57321_57402[(2)] = null);

(statearr_57321_57402[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (22))){
var inst_57212 = (state_57294[(23)]);
var inst_57211 = (state_57294[(24)]);
var inst_57208 = (state_57294[(19)]);
var inst_57216 = (state_57294[(25)]);
var inst_57211__$1 = (state_57294[(2)]);
var inst_57212__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_57211__$1);
var inst_57213 = (function (){var all_files = inst_57208;
var res_SINGLEQUOTE_ = inst_57211__$1;
var res = inst_57212__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_57212,inst_57211,inst_57208,inst_57216,inst_57211__$1,inst_57212__$1,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__56891_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__56891_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_57212,inst_57211,inst_57208,inst_57216,inst_57211__$1,inst_57212__$1,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57214 = cljs.core.filter.call(null,inst_57213,inst_57211__$1);
var inst_57215 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_57216__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_57215);
var inst_57217 = cljs.core.not_empty.call(null,inst_57216__$1);
var state_57294__$1 = (function (){var statearr_57322 = state_57294;
(statearr_57322[(23)] = inst_57212__$1);

(statearr_57322[(24)] = inst_57211__$1);

(statearr_57322[(25)] = inst_57216__$1);

(statearr_57322[(26)] = inst_57214);

return statearr_57322;
})();
if(cljs.core.truth_(inst_57217)){
var statearr_57323_57403 = state_57294__$1;
(statearr_57323_57403[(1)] = (23));

} else {
var statearr_57324_57404 = state_57294__$1;
(statearr_57324_57404[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (36))){
var state_57294__$1 = state_57294;
var statearr_57325_57405 = state_57294__$1;
(statearr_57325_57405[(2)] = false);

(statearr_57325_57405[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (41))){
var inst_57269 = (state_57294[(20)]);
var inst_57273 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_57274 = cljs.core.map.call(null,inst_57273,inst_57269);
var inst_57275 = cljs.core.pr_str.call(null,inst_57274);
var inst_57276 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_57275)].join('');
var inst_57277 = figwheel.client.utils.log.call(null,inst_57276);
var state_57294__$1 = state_57294;
var statearr_57326_57406 = state_57294__$1;
(statearr_57326_57406[(2)] = inst_57277);

(statearr_57326_57406[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (43))){
var inst_57270 = (state_57294[(21)]);
var inst_57280 = (state_57294[(2)]);
var inst_57281 = cljs.core.not_empty.call(null,inst_57270);
var state_57294__$1 = (function (){var statearr_57327 = state_57294;
(statearr_57327[(27)] = inst_57280);

return statearr_57327;
})();
if(cljs.core.truth_(inst_57281)){
var statearr_57328_57407 = state_57294__$1;
(statearr_57328_57407[(1)] = (44));

} else {
var statearr_57329_57408 = state_57294__$1;
(statearr_57329_57408[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (29))){
var inst_57212 = (state_57294[(23)]);
var inst_57211 = (state_57294[(24)]);
var inst_57208 = (state_57294[(19)]);
var inst_57216 = (state_57294[(25)]);
var inst_57214 = (state_57294[(26)]);
var inst_57248 = (state_57294[(16)]);
var inst_57244 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_57247 = (function (){var all_files = inst_57208;
var res_SINGLEQUOTE_ = inst_57211;
var res = inst_57212;
var files_not_loaded = inst_57214;
var dependencies_that_loaded = inst_57216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57212,inst_57211,inst_57208,inst_57216,inst_57214,inst_57248,inst_57244,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__57246){
var map__57330 = p__57246;
var map__57330__$1 = ((((!((map__57330 == null)))?((((map__57330.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57330.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57330):map__57330);
var namespace = cljs.core.get.call(null,map__57330__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57212,inst_57211,inst_57208,inst_57216,inst_57214,inst_57248,inst_57244,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57248__$1 = cljs.core.group_by.call(null,inst_57247,inst_57214);
var inst_57250 = (inst_57248__$1 == null);
var inst_57251 = cljs.core.not.call(null,inst_57250);
var state_57294__$1 = (function (){var statearr_57332 = state_57294;
(statearr_57332[(28)] = inst_57244);

(statearr_57332[(16)] = inst_57248__$1);

return statearr_57332;
})();
if(inst_57251){
var statearr_57333_57409 = state_57294__$1;
(statearr_57333_57409[(1)] = (32));

} else {
var statearr_57334_57410 = state_57294__$1;
(statearr_57334_57410[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (44))){
var inst_57270 = (state_57294[(21)]);
var inst_57283 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_57270);
var inst_57284 = cljs.core.pr_str.call(null,inst_57283);
var inst_57285 = [cljs.core.str("not required: "),cljs.core.str(inst_57284)].join('');
var inst_57286 = figwheel.client.utils.log.call(null,inst_57285);
var state_57294__$1 = state_57294;
var statearr_57335_57411 = state_57294__$1;
(statearr_57335_57411[(2)] = inst_57286);

(statearr_57335_57411[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (6))){
var inst_57189 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
var statearr_57336_57412 = state_57294__$1;
(statearr_57336_57412[(2)] = inst_57189);

(statearr_57336_57412[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (28))){
var inst_57214 = (state_57294[(26)]);
var inst_57241 = (state_57294[(2)]);
var inst_57242 = cljs.core.not_empty.call(null,inst_57214);
var state_57294__$1 = (function (){var statearr_57337 = state_57294;
(statearr_57337[(29)] = inst_57241);

return statearr_57337;
})();
if(cljs.core.truth_(inst_57242)){
var statearr_57338_57413 = state_57294__$1;
(statearr_57338_57413[(1)] = (29));

} else {
var statearr_57339_57414 = state_57294__$1;
(statearr_57339_57414[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (25))){
var inst_57212 = (state_57294[(23)]);
var inst_57228 = (state_57294[(2)]);
var inst_57229 = cljs.core.not_empty.call(null,inst_57212);
var state_57294__$1 = (function (){var statearr_57340 = state_57294;
(statearr_57340[(30)] = inst_57228);

return statearr_57340;
})();
if(cljs.core.truth_(inst_57229)){
var statearr_57341_57415 = state_57294__$1;
(statearr_57341_57415[(1)] = (26));

} else {
var statearr_57342_57416 = state_57294__$1;
(statearr_57342_57416[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (34))){
var inst_57263 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
if(cljs.core.truth_(inst_57263)){
var statearr_57343_57417 = state_57294__$1;
(statearr_57343_57417[(1)] = (38));

} else {
var statearr_57344_57418 = state_57294__$1;
(statearr_57344_57418[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (17))){
var state_57294__$1 = state_57294;
var statearr_57345_57419 = state_57294__$1;
(statearr_57345_57419[(2)] = recompile_dependents);

(statearr_57345_57419[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (3))){
var state_57294__$1 = state_57294;
var statearr_57346_57420 = state_57294__$1;
(statearr_57346_57420[(2)] = null);

(statearr_57346_57420[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (12))){
var inst_57185 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
var statearr_57347_57421 = state_57294__$1;
(statearr_57347_57421[(2)] = inst_57185);

(statearr_57347_57421[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (2))){
var inst_57147 = (state_57294[(13)]);
var inst_57154 = cljs.core.seq.call(null,inst_57147);
var inst_57155 = inst_57154;
var inst_57156 = null;
var inst_57157 = (0);
var inst_57158 = (0);
var state_57294__$1 = (function (){var statearr_57348 = state_57294;
(statearr_57348[(7)] = inst_57157);

(statearr_57348[(8)] = inst_57158);

(statearr_57348[(9)] = inst_57155);

(statearr_57348[(10)] = inst_57156);

return statearr_57348;
})();
var statearr_57349_57422 = state_57294__$1;
(statearr_57349_57422[(2)] = null);

(statearr_57349_57422[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (23))){
var inst_57212 = (state_57294[(23)]);
var inst_57211 = (state_57294[(24)]);
var inst_57208 = (state_57294[(19)]);
var inst_57216 = (state_57294[(25)]);
var inst_57214 = (state_57294[(26)]);
var inst_57219 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_57221 = (function (){var all_files = inst_57208;
var res_SINGLEQUOTE_ = inst_57211;
var res = inst_57212;
var files_not_loaded = inst_57214;
var dependencies_that_loaded = inst_57216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57212,inst_57211,inst_57208,inst_57216,inst_57214,inst_57219,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__57220){
var map__57350 = p__57220;
var map__57350__$1 = ((((!((map__57350 == null)))?((((map__57350.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57350.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57350):map__57350);
var request_url = cljs.core.get.call(null,map__57350__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57212,inst_57211,inst_57208,inst_57216,inst_57214,inst_57219,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57222 = cljs.core.reverse.call(null,inst_57216);
var inst_57223 = cljs.core.map.call(null,inst_57221,inst_57222);
var inst_57224 = cljs.core.pr_str.call(null,inst_57223);
var inst_57225 = figwheel.client.utils.log.call(null,inst_57224);
var state_57294__$1 = (function (){var statearr_57352 = state_57294;
(statearr_57352[(31)] = inst_57219);

return statearr_57352;
})();
var statearr_57353_57423 = state_57294__$1;
(statearr_57353_57423[(2)] = inst_57225);

(statearr_57353_57423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (35))){
var state_57294__$1 = state_57294;
var statearr_57354_57424 = state_57294__$1;
(statearr_57354_57424[(2)] = true);

(statearr_57354_57424[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (19))){
var inst_57198 = (state_57294[(12)]);
var inst_57204 = figwheel.client.file_reloading.expand_files.call(null,inst_57198);
var state_57294__$1 = state_57294;
var statearr_57355_57425 = state_57294__$1;
(statearr_57355_57425[(2)] = inst_57204);

(statearr_57355_57425[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (11))){
var state_57294__$1 = state_57294;
var statearr_57356_57426 = state_57294__$1;
(statearr_57356_57426[(2)] = null);

(statearr_57356_57426[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (9))){
var inst_57187 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
var statearr_57357_57427 = state_57294__$1;
(statearr_57357_57427[(2)] = inst_57187);

(statearr_57357_57427[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (5))){
var inst_57157 = (state_57294[(7)]);
var inst_57158 = (state_57294[(8)]);
var inst_57160 = (inst_57158 < inst_57157);
var inst_57161 = inst_57160;
var state_57294__$1 = state_57294;
if(cljs.core.truth_(inst_57161)){
var statearr_57358_57428 = state_57294__$1;
(statearr_57358_57428[(1)] = (7));

} else {
var statearr_57359_57429 = state_57294__$1;
(statearr_57359_57429[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (14))){
var inst_57168 = (state_57294[(22)]);
var inst_57177 = cljs.core.first.call(null,inst_57168);
var inst_57178 = figwheel.client.file_reloading.eval_body.call(null,inst_57177,opts);
var inst_57179 = cljs.core.next.call(null,inst_57168);
var inst_57155 = inst_57179;
var inst_57156 = null;
var inst_57157 = (0);
var inst_57158 = (0);
var state_57294__$1 = (function (){var statearr_57360 = state_57294;
(statearr_57360[(7)] = inst_57157);

(statearr_57360[(8)] = inst_57158);

(statearr_57360[(9)] = inst_57155);

(statearr_57360[(32)] = inst_57178);

(statearr_57360[(10)] = inst_57156);

return statearr_57360;
})();
var statearr_57361_57430 = state_57294__$1;
(statearr_57361_57430[(2)] = null);

(statearr_57361_57430[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (45))){
var state_57294__$1 = state_57294;
var statearr_57362_57431 = state_57294__$1;
(statearr_57362_57431[(2)] = null);

(statearr_57362_57431[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (26))){
var inst_57212 = (state_57294[(23)]);
var inst_57211 = (state_57294[(24)]);
var inst_57208 = (state_57294[(19)]);
var inst_57216 = (state_57294[(25)]);
var inst_57214 = (state_57294[(26)]);
var inst_57231 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_57233 = (function (){var all_files = inst_57208;
var res_SINGLEQUOTE_ = inst_57211;
var res = inst_57212;
var files_not_loaded = inst_57214;
var dependencies_that_loaded = inst_57216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57212,inst_57211,inst_57208,inst_57216,inst_57214,inst_57231,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__57232){
var map__57363 = p__57232;
var map__57363__$1 = ((((!((map__57363 == null)))?((((map__57363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57363):map__57363);
var namespace = cljs.core.get.call(null,map__57363__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__57363__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57212,inst_57211,inst_57208,inst_57216,inst_57214,inst_57231,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57234 = cljs.core.map.call(null,inst_57233,inst_57212);
var inst_57235 = cljs.core.pr_str.call(null,inst_57234);
var inst_57236 = figwheel.client.utils.log.call(null,inst_57235);
var inst_57237 = (function (){var all_files = inst_57208;
var res_SINGLEQUOTE_ = inst_57211;
var res = inst_57212;
var files_not_loaded = inst_57214;
var dependencies_that_loaded = inst_57216;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57212,inst_57211,inst_57208,inst_57216,inst_57214,inst_57231,inst_57233,inst_57234,inst_57235,inst_57236,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_57212,inst_57211,inst_57208,inst_57216,inst_57214,inst_57231,inst_57233,inst_57234,inst_57235,inst_57236,state_val_57295,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_57238 = setTimeout(inst_57237,(10));
var state_57294__$1 = (function (){var statearr_57365 = state_57294;
(statearr_57365[(33)] = inst_57236);

(statearr_57365[(34)] = inst_57231);

return statearr_57365;
})();
var statearr_57366_57432 = state_57294__$1;
(statearr_57366_57432[(2)] = inst_57238);

(statearr_57366_57432[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (16))){
var state_57294__$1 = state_57294;
var statearr_57367_57433 = state_57294__$1;
(statearr_57367_57433[(2)] = reload_dependents);

(statearr_57367_57433[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (38))){
var inst_57248 = (state_57294[(16)]);
var inst_57265 = cljs.core.apply.call(null,cljs.core.hash_map,inst_57248);
var state_57294__$1 = state_57294;
var statearr_57368_57434 = state_57294__$1;
(statearr_57368_57434[(2)] = inst_57265);

(statearr_57368_57434[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (30))){
var state_57294__$1 = state_57294;
var statearr_57369_57435 = state_57294__$1;
(statearr_57369_57435[(2)] = null);

(statearr_57369_57435[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (10))){
var inst_57168 = (state_57294[(22)]);
var inst_57170 = cljs.core.chunked_seq_QMARK_.call(null,inst_57168);
var state_57294__$1 = state_57294;
if(inst_57170){
var statearr_57370_57436 = state_57294__$1;
(statearr_57370_57436[(1)] = (13));

} else {
var statearr_57371_57437 = state_57294__$1;
(statearr_57371_57437[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (18))){
var inst_57202 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
if(cljs.core.truth_(inst_57202)){
var statearr_57372_57438 = state_57294__$1;
(statearr_57372_57438[(1)] = (19));

} else {
var statearr_57373_57439 = state_57294__$1;
(statearr_57373_57439[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (42))){
var state_57294__$1 = state_57294;
var statearr_57374_57440 = state_57294__$1;
(statearr_57374_57440[(2)] = null);

(statearr_57374_57440[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (37))){
var inst_57260 = (state_57294[(2)]);
var state_57294__$1 = state_57294;
var statearr_57375_57441 = state_57294__$1;
(statearr_57375_57441[(2)] = inst_57260);

(statearr_57375_57441[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57295 === (8))){
var inst_57155 = (state_57294[(9)]);
var inst_57168 = (state_57294[(22)]);
var inst_57168__$1 = cljs.core.seq.call(null,inst_57155);
var state_57294__$1 = (function (){var statearr_57376 = state_57294;
(statearr_57376[(22)] = inst_57168__$1);

return statearr_57376;
})();
if(inst_57168__$1){
var statearr_57377_57442 = state_57294__$1;
(statearr_57377_57442[(1)] = (10));

} else {
var statearr_57378_57443 = state_57294__$1;
(statearr_57378_57443[(1)] = (11));

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
});})(c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__28150__auto__,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0 = (function (){
var statearr_57382 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57382[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__);

(statearr_57382[(1)] = (1));

return statearr_57382;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1 = (function (state_57294){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_57294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e57383){if((e57383 instanceof Object)){
var ex__28154__auto__ = e57383;
var statearr_57384_57444 = state_57294;
(statearr_57384_57444[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57383;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57445 = state_57294;
state_57294 = G__57445;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__ = function(state_57294){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1.call(this,state_57294);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28173__auto__ = (function (){var statearr_57385 = f__28172__auto__.call(null);
(statearr_57385[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_57385;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__,map__57140,map__57140__$1,opts,before_jsload,on_jsload,reload_dependents,map__57141,map__57141__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28171__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__57448,link){
var map__57451 = p__57448;
var map__57451__$1 = ((((!((map__57451 == null)))?((((map__57451.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57451.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57451):map__57451);
var file = cljs.core.get.call(null,map__57451__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__57451,map__57451__$1,file){
return (function (p1__57446_SHARP_,p2__57447_SHARP_){
if(cljs.core._EQ_.call(null,p1__57446_SHARP_,p2__57447_SHARP_)){
return p1__57446_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__57451,map__57451__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__57457){
var map__57458 = p__57457;
var map__57458__$1 = ((((!((map__57458 == null)))?((((map__57458.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57458.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57458):map__57458);
var match_length = cljs.core.get.call(null,map__57458__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__57458__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__57453_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__57453_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__57460_SHARP_,p2__57461_SHARP_){
return cljs.core.assoc.call(null,p1__57460_SHARP_,cljs.core.get.call(null,p2__57461_SHARP_,key),p2__57461_SHARP_);
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
var loaded_f_datas_57462 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_57462);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_57462);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__57463,p__57464){
var map__57469 = p__57463;
var map__57469__$1 = ((((!((map__57469 == null)))?((((map__57469.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57469.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57469):map__57469);
var on_cssload = cljs.core.get.call(null,map__57469__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__57470 = p__57464;
var map__57470__$1 = ((((!((map__57470 == null)))?((((map__57470.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57470.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57470):map__57470);
var files_msg = map__57470__$1;
var files = cljs.core.get.call(null,map__57470__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1499548766841