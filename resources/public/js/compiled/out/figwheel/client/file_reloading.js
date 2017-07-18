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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__36175_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__36175_SHARP_));
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
var seq__36176 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__36177 = null;
var count__36178 = (0);
var i__36179 = (0);
while(true){
if((i__36179 < count__36178)){
var n = cljs.core._nth.call(null,chunk__36177,i__36179);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36180 = seq__36176;
var G__36181 = chunk__36177;
var G__36182 = count__36178;
var G__36183 = (i__36179 + (1));
seq__36176 = G__36180;
chunk__36177 = G__36181;
count__36178 = G__36182;
i__36179 = G__36183;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__36176);
if(temp__5278__auto__){
var seq__36176__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36176__$1)){
var c__29481__auto__ = cljs.core.chunk_first.call(null,seq__36176__$1);
var G__36184 = cljs.core.chunk_rest.call(null,seq__36176__$1);
var G__36185 = c__29481__auto__;
var G__36186 = cljs.core.count.call(null,c__29481__auto__);
var G__36187 = (0);
seq__36176 = G__36184;
chunk__36177 = G__36185;
count__36178 = G__36186;
i__36179 = G__36187;
continue;
} else {
var n = cljs.core.first.call(null,seq__36176__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__36188 = cljs.core.next.call(null,seq__36176__$1);
var G__36189 = null;
var G__36190 = (0);
var G__36191 = (0);
seq__36176 = G__36188;
chunk__36177 = G__36189;
count__36178 = G__36190;
i__36179 = G__36191;
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

var seq__36201_36209 = cljs.core.seq.call(null,deps);
var chunk__36202_36210 = null;
var count__36203_36211 = (0);
var i__36204_36212 = (0);
while(true){
if((i__36204_36212 < count__36203_36211)){
var dep_36213 = cljs.core._nth.call(null,chunk__36202_36210,i__36204_36212);
topo_sort_helper_STAR_.call(null,dep_36213,(depth + (1)),state);

var G__36214 = seq__36201_36209;
var G__36215 = chunk__36202_36210;
var G__36216 = count__36203_36211;
var G__36217 = (i__36204_36212 + (1));
seq__36201_36209 = G__36214;
chunk__36202_36210 = G__36215;
count__36203_36211 = G__36216;
i__36204_36212 = G__36217;
continue;
} else {
var temp__5278__auto___36218 = cljs.core.seq.call(null,seq__36201_36209);
if(temp__5278__auto___36218){
var seq__36201_36219__$1 = temp__5278__auto___36218;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36201_36219__$1)){
var c__29481__auto___36220 = cljs.core.chunk_first.call(null,seq__36201_36219__$1);
var G__36221 = cljs.core.chunk_rest.call(null,seq__36201_36219__$1);
var G__36222 = c__29481__auto___36220;
var G__36223 = cljs.core.count.call(null,c__29481__auto___36220);
var G__36224 = (0);
seq__36201_36209 = G__36221;
chunk__36202_36210 = G__36222;
count__36203_36211 = G__36223;
i__36204_36212 = G__36224;
continue;
} else {
var dep_36225 = cljs.core.first.call(null,seq__36201_36219__$1);
topo_sort_helper_STAR_.call(null,dep_36225,(depth + (1)),state);

var G__36226 = cljs.core.next.call(null,seq__36201_36219__$1);
var G__36227 = null;
var G__36228 = (0);
var G__36229 = (0);
seq__36201_36209 = G__36226;
chunk__36202_36210 = G__36227;
count__36203_36211 = G__36228;
i__36204_36212 = G__36229;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__36205){
var vec__36206 = p__36205;
var seq__36207 = cljs.core.seq.call(null,vec__36206);
var first__36208 = cljs.core.first.call(null,seq__36207);
var seq__36207__$1 = cljs.core.next.call(null,seq__36207);
var x = first__36208;
var xs = seq__36207__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__36206,seq__36207,first__36208,seq__36207__$1,x,xs,get_deps__$1){
return (function (p1__36192_SHARP_){
return clojure.set.difference.call(null,p1__36192_SHARP_,x);
});})(vec__36206,seq__36207,first__36208,seq__36207__$1,x,xs,get_deps__$1))
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
var seq__36230 = cljs.core.seq.call(null,provides);
var chunk__36231 = null;
var count__36232 = (0);
var i__36233 = (0);
while(true){
if((i__36233 < count__36232)){
var prov = cljs.core._nth.call(null,chunk__36231,i__36233);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36234_36242 = cljs.core.seq.call(null,requires);
var chunk__36235_36243 = null;
var count__36236_36244 = (0);
var i__36237_36245 = (0);
while(true){
if((i__36237_36245 < count__36236_36244)){
var req_36246 = cljs.core._nth.call(null,chunk__36235_36243,i__36237_36245);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36246,prov);

var G__36247 = seq__36234_36242;
var G__36248 = chunk__36235_36243;
var G__36249 = count__36236_36244;
var G__36250 = (i__36237_36245 + (1));
seq__36234_36242 = G__36247;
chunk__36235_36243 = G__36248;
count__36236_36244 = G__36249;
i__36237_36245 = G__36250;
continue;
} else {
var temp__5278__auto___36251 = cljs.core.seq.call(null,seq__36234_36242);
if(temp__5278__auto___36251){
var seq__36234_36252__$1 = temp__5278__auto___36251;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36234_36252__$1)){
var c__29481__auto___36253 = cljs.core.chunk_first.call(null,seq__36234_36252__$1);
var G__36254 = cljs.core.chunk_rest.call(null,seq__36234_36252__$1);
var G__36255 = c__29481__auto___36253;
var G__36256 = cljs.core.count.call(null,c__29481__auto___36253);
var G__36257 = (0);
seq__36234_36242 = G__36254;
chunk__36235_36243 = G__36255;
count__36236_36244 = G__36256;
i__36237_36245 = G__36257;
continue;
} else {
var req_36258 = cljs.core.first.call(null,seq__36234_36252__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36258,prov);

var G__36259 = cljs.core.next.call(null,seq__36234_36252__$1);
var G__36260 = null;
var G__36261 = (0);
var G__36262 = (0);
seq__36234_36242 = G__36259;
chunk__36235_36243 = G__36260;
count__36236_36244 = G__36261;
i__36237_36245 = G__36262;
continue;
}
} else {
}
}
break;
}

var G__36263 = seq__36230;
var G__36264 = chunk__36231;
var G__36265 = count__36232;
var G__36266 = (i__36233 + (1));
seq__36230 = G__36263;
chunk__36231 = G__36264;
count__36232 = G__36265;
i__36233 = G__36266;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__36230);
if(temp__5278__auto__){
var seq__36230__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36230__$1)){
var c__29481__auto__ = cljs.core.chunk_first.call(null,seq__36230__$1);
var G__36267 = cljs.core.chunk_rest.call(null,seq__36230__$1);
var G__36268 = c__29481__auto__;
var G__36269 = cljs.core.count.call(null,c__29481__auto__);
var G__36270 = (0);
seq__36230 = G__36267;
chunk__36231 = G__36268;
count__36232 = G__36269;
i__36233 = G__36270;
continue;
} else {
var prov = cljs.core.first.call(null,seq__36230__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__36238_36271 = cljs.core.seq.call(null,requires);
var chunk__36239_36272 = null;
var count__36240_36273 = (0);
var i__36241_36274 = (0);
while(true){
if((i__36241_36274 < count__36240_36273)){
var req_36275 = cljs.core._nth.call(null,chunk__36239_36272,i__36241_36274);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36275,prov);

var G__36276 = seq__36238_36271;
var G__36277 = chunk__36239_36272;
var G__36278 = count__36240_36273;
var G__36279 = (i__36241_36274 + (1));
seq__36238_36271 = G__36276;
chunk__36239_36272 = G__36277;
count__36240_36273 = G__36278;
i__36241_36274 = G__36279;
continue;
} else {
var temp__5278__auto___36280__$1 = cljs.core.seq.call(null,seq__36238_36271);
if(temp__5278__auto___36280__$1){
var seq__36238_36281__$1 = temp__5278__auto___36280__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36238_36281__$1)){
var c__29481__auto___36282 = cljs.core.chunk_first.call(null,seq__36238_36281__$1);
var G__36283 = cljs.core.chunk_rest.call(null,seq__36238_36281__$1);
var G__36284 = c__29481__auto___36282;
var G__36285 = cljs.core.count.call(null,c__29481__auto___36282);
var G__36286 = (0);
seq__36238_36271 = G__36283;
chunk__36239_36272 = G__36284;
count__36240_36273 = G__36285;
i__36241_36274 = G__36286;
continue;
} else {
var req_36287 = cljs.core.first.call(null,seq__36238_36281__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_36287,prov);

var G__36288 = cljs.core.next.call(null,seq__36238_36281__$1);
var G__36289 = null;
var G__36290 = (0);
var G__36291 = (0);
seq__36238_36271 = G__36288;
chunk__36239_36272 = G__36289;
count__36240_36273 = G__36290;
i__36241_36274 = G__36291;
continue;
}
} else {
}
}
break;
}

var G__36292 = cljs.core.next.call(null,seq__36230__$1);
var G__36293 = null;
var G__36294 = (0);
var G__36295 = (0);
seq__36230 = G__36292;
chunk__36231 = G__36293;
count__36232 = G__36294;
i__36233 = G__36295;
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
var seq__36296_36300 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__36297_36301 = null;
var count__36298_36302 = (0);
var i__36299_36303 = (0);
while(true){
if((i__36299_36303 < count__36298_36302)){
var ns_36304 = cljs.core._nth.call(null,chunk__36297_36301,i__36299_36303);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36304);

var G__36305 = seq__36296_36300;
var G__36306 = chunk__36297_36301;
var G__36307 = count__36298_36302;
var G__36308 = (i__36299_36303 + (1));
seq__36296_36300 = G__36305;
chunk__36297_36301 = G__36306;
count__36298_36302 = G__36307;
i__36299_36303 = G__36308;
continue;
} else {
var temp__5278__auto___36309 = cljs.core.seq.call(null,seq__36296_36300);
if(temp__5278__auto___36309){
var seq__36296_36310__$1 = temp__5278__auto___36309;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36296_36310__$1)){
var c__29481__auto___36311 = cljs.core.chunk_first.call(null,seq__36296_36310__$1);
var G__36312 = cljs.core.chunk_rest.call(null,seq__36296_36310__$1);
var G__36313 = c__29481__auto___36311;
var G__36314 = cljs.core.count.call(null,c__29481__auto___36311);
var G__36315 = (0);
seq__36296_36300 = G__36312;
chunk__36297_36301 = G__36313;
count__36298_36302 = G__36314;
i__36299_36303 = G__36315;
continue;
} else {
var ns_36316 = cljs.core.first.call(null,seq__36296_36310__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_36316);

var G__36317 = cljs.core.next.call(null,seq__36296_36310__$1);
var G__36318 = null;
var G__36319 = (0);
var G__36320 = (0);
seq__36296_36300 = G__36317;
chunk__36297_36301 = G__36318;
count__36298_36302 = G__36319;
i__36299_36303 = G__36320;
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
var G__36321__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__36321 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__36322__i = 0, G__36322__a = new Array(arguments.length -  0);
while (G__36322__i < G__36322__a.length) {G__36322__a[G__36322__i] = arguments[G__36322__i + 0]; ++G__36322__i;}
  args = new cljs.core.IndexedSeq(G__36322__a,0,null);
} 
return G__36321__delegate.call(this,args);};
G__36321.cljs$lang$maxFixedArity = 0;
G__36321.cljs$lang$applyTo = (function (arglist__36323){
var args = cljs.core.seq(arglist__36323);
return G__36321__delegate(args);
});
G__36321.cljs$core$IFn$_invoke$arity$variadic = G__36321__delegate;
return G__36321;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__36324 = cljs.core._EQ_;
var expr__36325 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__36324.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__36325))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__36324,expr__36325){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__36324,expr__36325))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__36324,expr__36325){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e36327){if((e36327 instanceof Error)){
var e = e36327;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36327;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__36324,expr__36325))
} else {
if(cljs.core.truth_(pred__36324.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__36325))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36324.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__36325))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__36324.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__36325))){
return ((function (pred__36324,expr__36325){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e36328){if((e36328 instanceof Error)){
var e = e36328;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e36328;

}
}})());
});
;})(pred__36324,expr__36325))
} else {
return ((function (pred__36324,expr__36325){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__36324,expr__36325))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__36329,callback){
var map__36330 = p__36329;
var map__36330__$1 = ((((!((map__36330 == null)))?((((map__36330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36330.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36330):map__36330);
var file_msg = map__36330__$1;
var request_url = cljs.core.get.call(null,map__36330__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Attempting to load "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__36330,map__36330__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("FigWheel: Successfully loaded "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Error loading file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__36330,map__36330__$1,file_msg,request_url))
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
return (function (state_36354){
var state_val_36355 = (state_36354[(1)]);
if((state_val_36355 === (7))){
var inst_36350 = (state_36354[(2)]);
var state_36354__$1 = state_36354;
var statearr_36356_36373 = state_36354__$1;
(statearr_36356_36373[(2)] = inst_36350);

(statearr_36356_36373[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36355 === (1))){
var state_36354__$1 = state_36354;
var statearr_36357_36374 = state_36354__$1;
(statearr_36357_36374[(2)] = null);

(statearr_36357_36374[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36355 === (4))){
var inst_36334 = (state_36354[(7)]);
var inst_36334__$1 = (state_36354[(2)]);
var state_36354__$1 = (function (){var statearr_36358 = state_36354;
(statearr_36358[(7)] = inst_36334__$1);

return statearr_36358;
})();
if(cljs.core.truth_(inst_36334__$1)){
var statearr_36359_36375 = state_36354__$1;
(statearr_36359_36375[(1)] = (5));

} else {
var statearr_36360_36376 = state_36354__$1;
(statearr_36360_36376[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36355 === (6))){
var state_36354__$1 = state_36354;
var statearr_36361_36377 = state_36354__$1;
(statearr_36361_36377[(2)] = null);

(statearr_36361_36377[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36355 === (3))){
var inst_36352 = (state_36354[(2)]);
var state_36354__$1 = state_36354;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36354__$1,inst_36352);
} else {
if((state_val_36355 === (2))){
var state_36354__$1 = state_36354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36354__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_36355 === (11))){
var inst_36346 = (state_36354[(2)]);
var state_36354__$1 = (function (){var statearr_36362 = state_36354;
(statearr_36362[(8)] = inst_36346);

return statearr_36362;
})();
var statearr_36363_36378 = state_36354__$1;
(statearr_36363_36378[(2)] = null);

(statearr_36363_36378[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36355 === (9))){
var inst_36340 = (state_36354[(9)]);
var inst_36338 = (state_36354[(10)]);
var inst_36342 = inst_36340.call(null,inst_36338);
var state_36354__$1 = state_36354;
var statearr_36364_36379 = state_36354__$1;
(statearr_36364_36379[(2)] = inst_36342);

(statearr_36364_36379[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36355 === (5))){
var inst_36334 = (state_36354[(7)]);
var inst_36336 = figwheel.client.file_reloading.blocking_load.call(null,inst_36334);
var state_36354__$1 = state_36354;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36354__$1,(8),inst_36336);
} else {
if((state_val_36355 === (10))){
var inst_36338 = (state_36354[(10)]);
var inst_36344 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_36338);
var state_36354__$1 = state_36354;
var statearr_36365_36380 = state_36354__$1;
(statearr_36365_36380[(2)] = inst_36344);

(statearr_36365_36380[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36355 === (8))){
var inst_36334 = (state_36354[(7)]);
var inst_36340 = (state_36354[(9)]);
var inst_36338 = (state_36354[(2)]);
var inst_36339 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_36340__$1 = cljs.core.get.call(null,inst_36339,inst_36334);
var state_36354__$1 = (function (){var statearr_36366 = state_36354;
(statearr_36366[(9)] = inst_36340__$1);

(statearr_36366[(10)] = inst_36338);

return statearr_36366;
})();
if(cljs.core.truth_(inst_36340__$1)){
var statearr_36367_36381 = state_36354__$1;
(statearr_36367_36381[(1)] = (9));

} else {
var statearr_36368_36382 = state_36354__$1;
(statearr_36368_36382[(1)] = (10));

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
var statearr_36369 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36369[(0)] = figwheel$client$file_reloading$state_machine__32869__auto__);

(statearr_36369[(1)] = (1));

return statearr_36369;
});
var figwheel$client$file_reloading$state_machine__32869__auto____1 = (function (state_36354){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_36354);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e36370){if((e36370 instanceof Object)){
var ex__32872__auto__ = e36370;
var statearr_36371_36383 = state_36354;
(statearr_36371_36383[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36354);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36370;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36384 = state_36354;
state_36354 = G__36384;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__32869__auto__ = function(state_36354){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__32869__auto____1.call(this,state_36354);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__32869__auto____0;
figwheel$client$file_reloading$state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__32869__auto____1;
return figwheel$client$file_reloading$state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_36372 = f__32959__auto__.call(null);
(statearr_36372[(6)] = c__32958__auto__);

return statearr_36372;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__36385,callback){
var map__36386 = p__36385;
var map__36386__$1 = ((((!((map__36386 == null)))?((((map__36386.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36386.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36386):map__36386);
var file_msg = map__36386__$1;
var namespace = cljs.core.get.call(null,map__36386__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__36386,map__36386__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__36386,map__36386__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__36388){
var map__36389 = p__36388;
var map__36389__$1 = ((((!((map__36389 == null)))?((((map__36389.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36389.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36389):map__36389);
var file_msg = map__36389__$1;
var namespace = cljs.core.get.call(null,map__36389__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__36391){
var map__36392 = p__36391;
var map__36392__$1 = ((((!((map__36392 == null)))?((((map__36392.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36392.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36392):map__36392);
var file_msg = map__36392__$1;
var namespace = cljs.core.get.call(null,map__36392__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__36394,callback){
var map__36395 = p__36394;
var map__36395__$1 = ((((!((map__36395 == null)))?((((map__36395.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36395.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36395):map__36395);
var file_msg = map__36395__$1;
var request_url = cljs.core.get.call(null,map__36395__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__36395__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__32958__auto___36445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___36445,out){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___36445,out){
return (function (state_36430){
var state_val_36431 = (state_36430[(1)]);
if((state_val_36431 === (1))){
var inst_36404 = cljs.core.seq.call(null,files);
var inst_36405 = cljs.core.first.call(null,inst_36404);
var inst_36406 = cljs.core.next.call(null,inst_36404);
var inst_36407 = files;
var state_36430__$1 = (function (){var statearr_36432 = state_36430;
(statearr_36432[(7)] = inst_36405);

(statearr_36432[(8)] = inst_36407);

(statearr_36432[(9)] = inst_36406);

return statearr_36432;
})();
var statearr_36433_36446 = state_36430__$1;
(statearr_36433_36446[(2)] = null);

(statearr_36433_36446[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (2))){
var inst_36413 = (state_36430[(10)]);
var inst_36407 = (state_36430[(8)]);
var inst_36412 = cljs.core.seq.call(null,inst_36407);
var inst_36413__$1 = cljs.core.first.call(null,inst_36412);
var inst_36414 = cljs.core.next.call(null,inst_36412);
var inst_36415 = (inst_36413__$1 == null);
var inst_36416 = cljs.core.not.call(null,inst_36415);
var state_36430__$1 = (function (){var statearr_36434 = state_36430;
(statearr_36434[(10)] = inst_36413__$1);

(statearr_36434[(11)] = inst_36414);

return statearr_36434;
})();
if(inst_36416){
var statearr_36435_36447 = state_36430__$1;
(statearr_36435_36447[(1)] = (4));

} else {
var statearr_36436_36448 = state_36430__$1;
(statearr_36436_36448[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (3))){
var inst_36428 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36430__$1,inst_36428);
} else {
if((state_val_36431 === (4))){
var inst_36413 = (state_36430[(10)]);
var inst_36418 = figwheel.client.file_reloading.reload_js_file.call(null,inst_36413);
var state_36430__$1 = state_36430;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36430__$1,(7),inst_36418);
} else {
if((state_val_36431 === (5))){
var inst_36424 = cljs.core.async.close_BANG_.call(null,out);
var state_36430__$1 = state_36430;
var statearr_36437_36449 = state_36430__$1;
(statearr_36437_36449[(2)] = inst_36424);

(statearr_36437_36449[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (6))){
var inst_36426 = (state_36430[(2)]);
var state_36430__$1 = state_36430;
var statearr_36438_36450 = state_36430__$1;
(statearr_36438_36450[(2)] = inst_36426);

(statearr_36438_36450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36431 === (7))){
var inst_36414 = (state_36430[(11)]);
var inst_36420 = (state_36430[(2)]);
var inst_36421 = cljs.core.async.put_BANG_.call(null,out,inst_36420);
var inst_36407 = inst_36414;
var state_36430__$1 = (function (){var statearr_36439 = state_36430;
(statearr_36439[(8)] = inst_36407);

(statearr_36439[(12)] = inst_36421);

return statearr_36439;
})();
var statearr_36440_36451 = state_36430__$1;
(statearr_36440_36451[(2)] = null);

(statearr_36440_36451[(1)] = (2));


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
});})(c__32958__auto___36445,out))
;
return ((function (switch__32868__auto__,c__32958__auto___36445,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____0 = (function (){
var statearr_36441 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36441[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__);

(statearr_36441[(1)] = (1));

return statearr_36441;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____1 = (function (state_36430){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_36430);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e36442){if((e36442 instanceof Object)){
var ex__32872__auto__ = e36442;
var statearr_36443_36452 = state_36430;
(statearr_36443_36452[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36430);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36442;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36453 = state_36430;
state_36430 = G__36453;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__ = function(state_36430){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____1.call(this,state_36430);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___36445,out))
})();
var state__32960__auto__ = (function (){var statearr_36444 = f__32959__auto__.call(null);
(statearr_36444[(6)] = c__32958__auto___36445);

return statearr_36444;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___36445,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__36454,opts){
var map__36455 = p__36454;
var map__36455__$1 = ((((!((map__36455 == null)))?((((map__36455.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36455.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36455):map__36455);
var eval_body = cljs.core.get.call(null,map__36455__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__36455__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e36457){var e = e36457;
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
return (function (p1__36458_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36458_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__36459){
var vec__36460 = p__36459;
var k = cljs.core.nth.call(null,vec__36460,(0),null);
var v = cljs.core.nth.call(null,vec__36460,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__36463){
var vec__36464 = p__36463;
var k = cljs.core.nth.call(null,vec__36464,(0),null);
var v = cljs.core.nth.call(null,vec__36464,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__36470,p__36471){
var map__36472 = p__36470;
var map__36472__$1 = ((((!((map__36472 == null)))?((((map__36472.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36472.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36472):map__36472);
var opts = map__36472__$1;
var before_jsload = cljs.core.get.call(null,map__36472__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__36472__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__36472__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__36473 = p__36471;
var map__36473__$1 = ((((!((map__36473 == null)))?((((map__36473.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36473.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36473):map__36473);
var msg = map__36473__$1;
var files = cljs.core.get.call(null,map__36473__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__36473__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__36473__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_36627){
var state_val_36628 = (state_36627[(1)]);
if((state_val_36628 === (7))){
var inst_36489 = (state_36627[(7)]);
var inst_36488 = (state_36627[(8)]);
var inst_36490 = (state_36627[(9)]);
var inst_36487 = (state_36627[(10)]);
var inst_36495 = cljs.core._nth.call(null,inst_36488,inst_36490);
var inst_36496 = figwheel.client.file_reloading.eval_body.call(null,inst_36495,opts);
var inst_36497 = (inst_36490 + (1));
var tmp36629 = inst_36489;
var tmp36630 = inst_36488;
var tmp36631 = inst_36487;
var inst_36487__$1 = tmp36631;
var inst_36488__$1 = tmp36630;
var inst_36489__$1 = tmp36629;
var inst_36490__$1 = inst_36497;
var state_36627__$1 = (function (){var statearr_36632 = state_36627;
(statearr_36632[(7)] = inst_36489__$1);

(statearr_36632[(8)] = inst_36488__$1);

(statearr_36632[(9)] = inst_36490__$1);

(statearr_36632[(11)] = inst_36496);

(statearr_36632[(10)] = inst_36487__$1);

return statearr_36632;
})();
var statearr_36633_36716 = state_36627__$1;
(statearr_36633_36716[(2)] = null);

(statearr_36633_36716[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (20))){
var inst_36530 = (state_36627[(12)]);
var inst_36538 = figwheel.client.file_reloading.sort_files.call(null,inst_36530);
var state_36627__$1 = state_36627;
var statearr_36634_36717 = state_36627__$1;
(statearr_36634_36717[(2)] = inst_36538);

(statearr_36634_36717[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (27))){
var state_36627__$1 = state_36627;
var statearr_36635_36718 = state_36627__$1;
(statearr_36635_36718[(2)] = null);

(statearr_36635_36718[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (1))){
var inst_36479 = (state_36627[(13)]);
var inst_36476 = before_jsload.call(null,files);
var inst_36477 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_36478 = (function (){return ((function (inst_36479,inst_36476,inst_36477,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36467_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36467_SHARP_);
});
;})(inst_36479,inst_36476,inst_36477,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36479__$1 = cljs.core.filter.call(null,inst_36478,files);
var inst_36480 = cljs.core.not_empty.call(null,inst_36479__$1);
var state_36627__$1 = (function (){var statearr_36636 = state_36627;
(statearr_36636[(14)] = inst_36477);

(statearr_36636[(15)] = inst_36476);

(statearr_36636[(13)] = inst_36479__$1);

return statearr_36636;
})();
if(cljs.core.truth_(inst_36480)){
var statearr_36637_36719 = state_36627__$1;
(statearr_36637_36719[(1)] = (2));

} else {
var statearr_36638_36720 = state_36627__$1;
(statearr_36638_36720[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (24))){
var state_36627__$1 = state_36627;
var statearr_36639_36721 = state_36627__$1;
(statearr_36639_36721[(2)] = null);

(statearr_36639_36721[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (39))){
var inst_36580 = (state_36627[(16)]);
var state_36627__$1 = state_36627;
var statearr_36640_36722 = state_36627__$1;
(statearr_36640_36722[(2)] = inst_36580);

(statearr_36640_36722[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (46))){
var inst_36622 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
var statearr_36641_36723 = state_36627__$1;
(statearr_36641_36723[(2)] = inst_36622);

(statearr_36641_36723[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (4))){
var inst_36524 = (state_36627[(2)]);
var inst_36525 = cljs.core.List.EMPTY;
var inst_36526 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_36525);
var inst_36527 = (function (){return ((function (inst_36524,inst_36525,inst_36526,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36468_SHARP_){
var and__28557__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__36468_SHARP_);
if(cljs.core.truth_(and__28557__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__36468_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__36468_SHARP_)));
} else {
return and__28557__auto__;
}
});
;})(inst_36524,inst_36525,inst_36526,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36528 = cljs.core.filter.call(null,inst_36527,files);
var inst_36529 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_36530 = cljs.core.concat.call(null,inst_36528,inst_36529);
var state_36627__$1 = (function (){var statearr_36642 = state_36627;
(statearr_36642[(12)] = inst_36530);

(statearr_36642[(17)] = inst_36526);

(statearr_36642[(18)] = inst_36524);

return statearr_36642;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_36643_36724 = state_36627__$1;
(statearr_36643_36724[(1)] = (16));

} else {
var statearr_36644_36725 = state_36627__$1;
(statearr_36644_36725[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (15))){
var inst_36514 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
var statearr_36645_36726 = state_36627__$1;
(statearr_36645_36726[(2)] = inst_36514);

(statearr_36645_36726[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (21))){
var inst_36540 = (state_36627[(19)]);
var inst_36540__$1 = (state_36627[(2)]);
var inst_36541 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_36540__$1);
var state_36627__$1 = (function (){var statearr_36646 = state_36627;
(statearr_36646[(19)] = inst_36540__$1);

return statearr_36646;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36627__$1,(22),inst_36541);
} else {
if((state_val_36628 === (31))){
var inst_36625 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36627__$1,inst_36625);
} else {
if((state_val_36628 === (32))){
var inst_36580 = (state_36627[(16)]);
var inst_36585 = inst_36580.cljs$lang$protocol_mask$partition0$;
var inst_36586 = (inst_36585 & (64));
var inst_36587 = inst_36580.cljs$core$ISeq$;
var inst_36588 = (cljs.core.PROTOCOL_SENTINEL === inst_36587);
var inst_36589 = (inst_36586) || (inst_36588);
var state_36627__$1 = state_36627;
if(cljs.core.truth_(inst_36589)){
var statearr_36647_36727 = state_36627__$1;
(statearr_36647_36727[(1)] = (35));

} else {
var statearr_36648_36728 = state_36627__$1;
(statearr_36648_36728[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (40))){
var inst_36602 = (state_36627[(20)]);
var inst_36601 = (state_36627[(2)]);
var inst_36602__$1 = cljs.core.get.call(null,inst_36601,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_36603 = cljs.core.get.call(null,inst_36601,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_36604 = cljs.core.not_empty.call(null,inst_36602__$1);
var state_36627__$1 = (function (){var statearr_36649 = state_36627;
(statearr_36649[(21)] = inst_36603);

(statearr_36649[(20)] = inst_36602__$1);

return statearr_36649;
})();
if(cljs.core.truth_(inst_36604)){
var statearr_36650_36729 = state_36627__$1;
(statearr_36650_36729[(1)] = (41));

} else {
var statearr_36651_36730 = state_36627__$1;
(statearr_36651_36730[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (33))){
var state_36627__$1 = state_36627;
var statearr_36652_36731 = state_36627__$1;
(statearr_36652_36731[(2)] = false);

(statearr_36652_36731[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (13))){
var inst_36500 = (state_36627[(22)]);
var inst_36504 = cljs.core.chunk_first.call(null,inst_36500);
var inst_36505 = cljs.core.chunk_rest.call(null,inst_36500);
var inst_36506 = cljs.core.count.call(null,inst_36504);
var inst_36487 = inst_36505;
var inst_36488 = inst_36504;
var inst_36489 = inst_36506;
var inst_36490 = (0);
var state_36627__$1 = (function (){var statearr_36653 = state_36627;
(statearr_36653[(7)] = inst_36489);

(statearr_36653[(8)] = inst_36488);

(statearr_36653[(9)] = inst_36490);

(statearr_36653[(10)] = inst_36487);

return statearr_36653;
})();
var statearr_36654_36732 = state_36627__$1;
(statearr_36654_36732[(2)] = null);

(statearr_36654_36732[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (22))){
var inst_36543 = (state_36627[(23)]);
var inst_36540 = (state_36627[(19)]);
var inst_36548 = (state_36627[(24)]);
var inst_36544 = (state_36627[(25)]);
var inst_36543__$1 = (state_36627[(2)]);
var inst_36544__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36543__$1);
var inst_36545 = (function (){var all_files = inst_36540;
var res_SINGLEQUOTE_ = inst_36543__$1;
var res = inst_36544__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_36543,inst_36540,inst_36548,inst_36544,inst_36543__$1,inst_36544__$1,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__36469_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__36469_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_36543,inst_36540,inst_36548,inst_36544,inst_36543__$1,inst_36544__$1,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36546 = cljs.core.filter.call(null,inst_36545,inst_36543__$1);
var inst_36547 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_36548__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_36547);
var inst_36549 = cljs.core.not_empty.call(null,inst_36548__$1);
var state_36627__$1 = (function (){var statearr_36655 = state_36627;
(statearr_36655[(23)] = inst_36543__$1);

(statearr_36655[(26)] = inst_36546);

(statearr_36655[(24)] = inst_36548__$1);

(statearr_36655[(25)] = inst_36544__$1);

return statearr_36655;
})();
if(cljs.core.truth_(inst_36549)){
var statearr_36656_36733 = state_36627__$1;
(statearr_36656_36733[(1)] = (23));

} else {
var statearr_36657_36734 = state_36627__$1;
(statearr_36657_36734[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (36))){
var state_36627__$1 = state_36627;
var statearr_36658_36735 = state_36627__$1;
(statearr_36658_36735[(2)] = false);

(statearr_36658_36735[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (41))){
var inst_36602 = (state_36627[(20)]);
var inst_36606 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_36607 = cljs.core.map.call(null,inst_36606,inst_36602);
var inst_36608 = cljs.core.pr_str.call(null,inst_36607);
var inst_36609 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("figwheel-no-load meta-data: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36608)].join('');
var inst_36610 = figwheel.client.utils.log.call(null,inst_36609);
var state_36627__$1 = state_36627;
var statearr_36659_36736 = state_36627__$1;
(statearr_36659_36736[(2)] = inst_36610);

(statearr_36659_36736[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (43))){
var inst_36603 = (state_36627[(21)]);
var inst_36613 = (state_36627[(2)]);
var inst_36614 = cljs.core.not_empty.call(null,inst_36603);
var state_36627__$1 = (function (){var statearr_36660 = state_36627;
(statearr_36660[(27)] = inst_36613);

return statearr_36660;
})();
if(cljs.core.truth_(inst_36614)){
var statearr_36661_36737 = state_36627__$1;
(statearr_36661_36737[(1)] = (44));

} else {
var statearr_36662_36738 = state_36627__$1;
(statearr_36662_36738[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (29))){
var inst_36543 = (state_36627[(23)]);
var inst_36546 = (state_36627[(26)]);
var inst_36540 = (state_36627[(19)]);
var inst_36548 = (state_36627[(24)]);
var inst_36544 = (state_36627[(25)]);
var inst_36580 = (state_36627[(16)]);
var inst_36576 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_36579 = (function (){var all_files = inst_36540;
var res_SINGLEQUOTE_ = inst_36543;
var res = inst_36544;
var files_not_loaded = inst_36546;
var dependencies_that_loaded = inst_36548;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36543,inst_36546,inst_36540,inst_36548,inst_36544,inst_36580,inst_36576,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36578){
var map__36663 = p__36578;
var map__36663__$1 = ((((!((map__36663 == null)))?((((map__36663.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36663.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36663):map__36663);
var namespace = cljs.core.get.call(null,map__36663__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36543,inst_36546,inst_36540,inst_36548,inst_36544,inst_36580,inst_36576,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36580__$1 = cljs.core.group_by.call(null,inst_36579,inst_36546);
var inst_36582 = (inst_36580__$1 == null);
var inst_36583 = cljs.core.not.call(null,inst_36582);
var state_36627__$1 = (function (){var statearr_36665 = state_36627;
(statearr_36665[(28)] = inst_36576);

(statearr_36665[(16)] = inst_36580__$1);

return statearr_36665;
})();
if(inst_36583){
var statearr_36666_36739 = state_36627__$1;
(statearr_36666_36739[(1)] = (32));

} else {
var statearr_36667_36740 = state_36627__$1;
(statearr_36667_36740[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (44))){
var inst_36603 = (state_36627[(21)]);
var inst_36616 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36603);
var inst_36617 = cljs.core.pr_str.call(null,inst_36616);
var inst_36618 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("not required: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_36617)].join('');
var inst_36619 = figwheel.client.utils.log.call(null,inst_36618);
var state_36627__$1 = state_36627;
var statearr_36668_36741 = state_36627__$1;
(statearr_36668_36741[(2)] = inst_36619);

(statearr_36668_36741[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (6))){
var inst_36521 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
var statearr_36669_36742 = state_36627__$1;
(statearr_36669_36742[(2)] = inst_36521);

(statearr_36669_36742[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (28))){
var inst_36546 = (state_36627[(26)]);
var inst_36573 = (state_36627[(2)]);
var inst_36574 = cljs.core.not_empty.call(null,inst_36546);
var state_36627__$1 = (function (){var statearr_36670 = state_36627;
(statearr_36670[(29)] = inst_36573);

return statearr_36670;
})();
if(cljs.core.truth_(inst_36574)){
var statearr_36671_36743 = state_36627__$1;
(statearr_36671_36743[(1)] = (29));

} else {
var statearr_36672_36744 = state_36627__$1;
(statearr_36672_36744[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (25))){
var inst_36544 = (state_36627[(25)]);
var inst_36560 = (state_36627[(2)]);
var inst_36561 = cljs.core.not_empty.call(null,inst_36544);
var state_36627__$1 = (function (){var statearr_36673 = state_36627;
(statearr_36673[(30)] = inst_36560);

return statearr_36673;
})();
if(cljs.core.truth_(inst_36561)){
var statearr_36674_36745 = state_36627__$1;
(statearr_36674_36745[(1)] = (26));

} else {
var statearr_36675_36746 = state_36627__$1;
(statearr_36675_36746[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (34))){
var inst_36596 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
if(cljs.core.truth_(inst_36596)){
var statearr_36676_36747 = state_36627__$1;
(statearr_36676_36747[(1)] = (38));

} else {
var statearr_36677_36748 = state_36627__$1;
(statearr_36677_36748[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (17))){
var state_36627__$1 = state_36627;
var statearr_36678_36749 = state_36627__$1;
(statearr_36678_36749[(2)] = recompile_dependents);

(statearr_36678_36749[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (3))){
var state_36627__$1 = state_36627;
var statearr_36679_36750 = state_36627__$1;
(statearr_36679_36750[(2)] = null);

(statearr_36679_36750[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (12))){
var inst_36517 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
var statearr_36680_36751 = state_36627__$1;
(statearr_36680_36751[(2)] = inst_36517);

(statearr_36680_36751[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (2))){
var inst_36479 = (state_36627[(13)]);
var inst_36486 = cljs.core.seq.call(null,inst_36479);
var inst_36487 = inst_36486;
var inst_36488 = null;
var inst_36489 = (0);
var inst_36490 = (0);
var state_36627__$1 = (function (){var statearr_36681 = state_36627;
(statearr_36681[(7)] = inst_36489);

(statearr_36681[(8)] = inst_36488);

(statearr_36681[(9)] = inst_36490);

(statearr_36681[(10)] = inst_36487);

return statearr_36681;
})();
var statearr_36682_36752 = state_36627__$1;
(statearr_36682_36752[(2)] = null);

(statearr_36682_36752[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (23))){
var inst_36543 = (state_36627[(23)]);
var inst_36546 = (state_36627[(26)]);
var inst_36540 = (state_36627[(19)]);
var inst_36548 = (state_36627[(24)]);
var inst_36544 = (state_36627[(25)]);
var inst_36551 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_36553 = (function (){var all_files = inst_36540;
var res_SINGLEQUOTE_ = inst_36543;
var res = inst_36544;
var files_not_loaded = inst_36546;
var dependencies_that_loaded = inst_36548;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36543,inst_36546,inst_36540,inst_36548,inst_36544,inst_36551,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36552){
var map__36683 = p__36552;
var map__36683__$1 = ((((!((map__36683 == null)))?((((map__36683.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36683.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36683):map__36683);
var request_url = cljs.core.get.call(null,map__36683__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36543,inst_36546,inst_36540,inst_36548,inst_36544,inst_36551,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36554 = cljs.core.reverse.call(null,inst_36548);
var inst_36555 = cljs.core.map.call(null,inst_36553,inst_36554);
var inst_36556 = cljs.core.pr_str.call(null,inst_36555);
var inst_36557 = figwheel.client.utils.log.call(null,inst_36556);
var state_36627__$1 = (function (){var statearr_36685 = state_36627;
(statearr_36685[(31)] = inst_36551);

return statearr_36685;
})();
var statearr_36686_36753 = state_36627__$1;
(statearr_36686_36753[(2)] = inst_36557);

(statearr_36686_36753[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (35))){
var state_36627__$1 = state_36627;
var statearr_36687_36754 = state_36627__$1;
(statearr_36687_36754[(2)] = true);

(statearr_36687_36754[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (19))){
var inst_36530 = (state_36627[(12)]);
var inst_36536 = figwheel.client.file_reloading.expand_files.call(null,inst_36530);
var state_36627__$1 = state_36627;
var statearr_36688_36755 = state_36627__$1;
(statearr_36688_36755[(2)] = inst_36536);

(statearr_36688_36755[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (11))){
var state_36627__$1 = state_36627;
var statearr_36689_36756 = state_36627__$1;
(statearr_36689_36756[(2)] = null);

(statearr_36689_36756[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (9))){
var inst_36519 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
var statearr_36690_36757 = state_36627__$1;
(statearr_36690_36757[(2)] = inst_36519);

(statearr_36690_36757[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (5))){
var inst_36489 = (state_36627[(7)]);
var inst_36490 = (state_36627[(9)]);
var inst_36492 = (inst_36490 < inst_36489);
var inst_36493 = inst_36492;
var state_36627__$1 = state_36627;
if(cljs.core.truth_(inst_36493)){
var statearr_36691_36758 = state_36627__$1;
(statearr_36691_36758[(1)] = (7));

} else {
var statearr_36692_36759 = state_36627__$1;
(statearr_36692_36759[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (14))){
var inst_36500 = (state_36627[(22)]);
var inst_36509 = cljs.core.first.call(null,inst_36500);
var inst_36510 = figwheel.client.file_reloading.eval_body.call(null,inst_36509,opts);
var inst_36511 = cljs.core.next.call(null,inst_36500);
var inst_36487 = inst_36511;
var inst_36488 = null;
var inst_36489 = (0);
var inst_36490 = (0);
var state_36627__$1 = (function (){var statearr_36693 = state_36627;
(statearr_36693[(7)] = inst_36489);

(statearr_36693[(32)] = inst_36510);

(statearr_36693[(8)] = inst_36488);

(statearr_36693[(9)] = inst_36490);

(statearr_36693[(10)] = inst_36487);

return statearr_36693;
})();
var statearr_36694_36760 = state_36627__$1;
(statearr_36694_36760[(2)] = null);

(statearr_36694_36760[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (45))){
var state_36627__$1 = state_36627;
var statearr_36695_36761 = state_36627__$1;
(statearr_36695_36761[(2)] = null);

(statearr_36695_36761[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (26))){
var inst_36543 = (state_36627[(23)]);
var inst_36546 = (state_36627[(26)]);
var inst_36540 = (state_36627[(19)]);
var inst_36548 = (state_36627[(24)]);
var inst_36544 = (state_36627[(25)]);
var inst_36563 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_36565 = (function (){var all_files = inst_36540;
var res_SINGLEQUOTE_ = inst_36543;
var res = inst_36544;
var files_not_loaded = inst_36546;
var dependencies_that_loaded = inst_36548;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36543,inst_36546,inst_36540,inst_36548,inst_36544,inst_36563,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__36564){
var map__36696 = p__36564;
var map__36696__$1 = ((((!((map__36696 == null)))?((((map__36696.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36696.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36696):map__36696);
var namespace = cljs.core.get.call(null,map__36696__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__36696__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36543,inst_36546,inst_36540,inst_36548,inst_36544,inst_36563,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36566 = cljs.core.map.call(null,inst_36565,inst_36544);
var inst_36567 = cljs.core.pr_str.call(null,inst_36566);
var inst_36568 = figwheel.client.utils.log.call(null,inst_36567);
var inst_36569 = (function (){var all_files = inst_36540;
var res_SINGLEQUOTE_ = inst_36543;
var res = inst_36544;
var files_not_loaded = inst_36546;
var dependencies_that_loaded = inst_36548;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36543,inst_36546,inst_36540,inst_36548,inst_36544,inst_36563,inst_36565,inst_36566,inst_36567,inst_36568,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_36543,inst_36546,inst_36540,inst_36548,inst_36544,inst_36563,inst_36565,inst_36566,inst_36567,inst_36568,state_val_36628,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_36570 = setTimeout(inst_36569,(10));
var state_36627__$1 = (function (){var statearr_36698 = state_36627;
(statearr_36698[(33)] = inst_36568);

(statearr_36698[(34)] = inst_36563);

return statearr_36698;
})();
var statearr_36699_36762 = state_36627__$1;
(statearr_36699_36762[(2)] = inst_36570);

(statearr_36699_36762[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (16))){
var state_36627__$1 = state_36627;
var statearr_36700_36763 = state_36627__$1;
(statearr_36700_36763[(2)] = reload_dependents);

(statearr_36700_36763[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (38))){
var inst_36580 = (state_36627[(16)]);
var inst_36598 = cljs.core.apply.call(null,cljs.core.hash_map,inst_36580);
var state_36627__$1 = state_36627;
var statearr_36701_36764 = state_36627__$1;
(statearr_36701_36764[(2)] = inst_36598);

(statearr_36701_36764[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (30))){
var state_36627__$1 = state_36627;
var statearr_36702_36765 = state_36627__$1;
(statearr_36702_36765[(2)] = null);

(statearr_36702_36765[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (10))){
var inst_36500 = (state_36627[(22)]);
var inst_36502 = cljs.core.chunked_seq_QMARK_.call(null,inst_36500);
var state_36627__$1 = state_36627;
if(inst_36502){
var statearr_36703_36766 = state_36627__$1;
(statearr_36703_36766[(1)] = (13));

} else {
var statearr_36704_36767 = state_36627__$1;
(statearr_36704_36767[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (18))){
var inst_36534 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
if(cljs.core.truth_(inst_36534)){
var statearr_36705_36768 = state_36627__$1;
(statearr_36705_36768[(1)] = (19));

} else {
var statearr_36706_36769 = state_36627__$1;
(statearr_36706_36769[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (42))){
var state_36627__$1 = state_36627;
var statearr_36707_36770 = state_36627__$1;
(statearr_36707_36770[(2)] = null);

(statearr_36707_36770[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (37))){
var inst_36593 = (state_36627[(2)]);
var state_36627__$1 = state_36627;
var statearr_36708_36771 = state_36627__$1;
(statearr_36708_36771[(2)] = inst_36593);

(statearr_36708_36771[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36628 === (8))){
var inst_36500 = (state_36627[(22)]);
var inst_36487 = (state_36627[(10)]);
var inst_36500__$1 = cljs.core.seq.call(null,inst_36487);
var state_36627__$1 = (function (){var statearr_36709 = state_36627;
(statearr_36709[(22)] = inst_36500__$1);

return statearr_36709;
})();
if(inst_36500__$1){
var statearr_36710_36772 = state_36627__$1;
(statearr_36710_36772[(1)] = (10));

} else {
var statearr_36711_36773 = state_36627__$1;
(statearr_36711_36773[(1)] = (11));

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
});})(c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__32868__auto__,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____0 = (function (){
var statearr_36712 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36712[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__);

(statearr_36712[(1)] = (1));

return statearr_36712;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____1 = (function (state_36627){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_36627);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e36713){if((e36713 instanceof Object)){
var ex__32872__auto__ = e36713;
var statearr_36714_36774 = state_36627;
(statearr_36714_36774[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36627);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36713;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36775 = state_36627;
state_36627 = G__36775;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__ = function(state_36627){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____1.call(this,state_36627);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__32960__auto__ = (function (){var statearr_36715 = f__32959__auto__.call(null);
(statearr_36715[(6)] = c__32958__auto__);

return statearr_36715;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__,map__36472,map__36472__$1,opts,before_jsload,on_jsload,reload_dependents,map__36473,map__36473__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__32958__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),cljs.core.str.cljs$core$IFn$_invoke$arity$1("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__36778,link){
var map__36779 = p__36778;
var map__36779__$1 = ((((!((map__36779 == null)))?((((map__36779.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36779.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36779):map__36779);
var file = cljs.core.get.call(null,map__36779__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5278__auto__ = link.href;
if(cljs.core.truth_(temp__5278__auto__)){
var link_href = temp__5278__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5278__auto__,map__36779,map__36779__$1,file){
return (function (p1__36776_SHARP_,p2__36777_SHARP_){
if(cljs.core._EQ_.call(null,p1__36776_SHARP_,p2__36777_SHARP_)){
return p1__36776_SHARP_;
} else {
return false;
}
});})(link_href,temp__5278__auto__,map__36779,map__36779__$1,file))
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
var temp__5278__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__36782){
var map__36783 = p__36782;
var map__36783__$1 = ((((!((map__36783 == null)))?((((map__36783.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36783.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36783):map__36783);
var match_length = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__36783__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__36781_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__36781_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__36785_SHARP_,p2__36786_SHARP_){
return cljs.core.assoc.call(null,p1__36785_SHARP_,cljs.core.get.call(null,p2__36786_SHARP_,key),p2__36786_SHARP_);
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
var loaded_f_datas_36787 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_36787);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_36787);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__36788,p__36789){
var map__36790 = p__36788;
var map__36790__$1 = ((((!((map__36790 == null)))?((((map__36790.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36790.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36790):map__36790);
var on_cssload = cljs.core.get.call(null,map__36790__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__36791 = p__36789;
var map__36791__$1 = ((((!((map__36791 == null)))?((((map__36791.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36791.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36791):map__36791);
var files_msg = map__36791__$1;
var files = cljs.core.get.call(null,map__36791__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1500333149455