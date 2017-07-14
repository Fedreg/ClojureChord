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
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__47046_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__47046_SHARP_));
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
var seq__47051 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__47052 = null;
var count__47053 = (0);
var i__47054 = (0);
while(true){
if((i__47054 < count__47053)){
var n = cljs.core._nth.call(null,chunk__47052,i__47054);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47055 = seq__47051;
var G__47056 = chunk__47052;
var G__47057 = count__47053;
var G__47058 = (i__47054 + (1));
seq__47051 = G__47055;
chunk__47052 = G__47056;
count__47053 = G__47057;
i__47054 = G__47058;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47051);
if(temp__4657__auto__){
var seq__47051__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47051__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__47051__$1);
var G__47059 = cljs.core.chunk_rest.call(null,seq__47051__$1);
var G__47060 = c__26790__auto__;
var G__47061 = cljs.core.count.call(null,c__26790__auto__);
var G__47062 = (0);
seq__47051 = G__47059;
chunk__47052 = G__47060;
count__47053 = G__47061;
i__47054 = G__47062;
continue;
} else {
var n = cljs.core.first.call(null,seq__47051__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__47063 = cljs.core.next.call(null,seq__47051__$1);
var G__47064 = null;
var G__47065 = (0);
var G__47066 = (0);
seq__47051 = G__47063;
chunk__47052 = G__47064;
count__47053 = G__47065;
i__47054 = G__47066;
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

var seq__47117_47128 = cljs.core.seq.call(null,deps);
var chunk__47118_47129 = null;
var count__47119_47130 = (0);
var i__47120_47131 = (0);
while(true){
if((i__47120_47131 < count__47119_47130)){
var dep_47132 = cljs.core._nth.call(null,chunk__47118_47129,i__47120_47131);
topo_sort_helper_STAR_.call(null,dep_47132,(depth + (1)),state);

var G__47133 = seq__47117_47128;
var G__47134 = chunk__47118_47129;
var G__47135 = count__47119_47130;
var G__47136 = (i__47120_47131 + (1));
seq__47117_47128 = G__47133;
chunk__47118_47129 = G__47134;
count__47119_47130 = G__47135;
i__47120_47131 = G__47136;
continue;
} else {
var temp__4657__auto___47137 = cljs.core.seq.call(null,seq__47117_47128);
if(temp__4657__auto___47137){
var seq__47117_47138__$1 = temp__4657__auto___47137;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47117_47138__$1)){
var c__26790__auto___47139 = cljs.core.chunk_first.call(null,seq__47117_47138__$1);
var G__47140 = cljs.core.chunk_rest.call(null,seq__47117_47138__$1);
var G__47141 = c__26790__auto___47139;
var G__47142 = cljs.core.count.call(null,c__26790__auto___47139);
var G__47143 = (0);
seq__47117_47128 = G__47140;
chunk__47118_47129 = G__47141;
count__47119_47130 = G__47142;
i__47120_47131 = G__47143;
continue;
} else {
var dep_47144 = cljs.core.first.call(null,seq__47117_47138__$1);
topo_sort_helper_STAR_.call(null,dep_47144,(depth + (1)),state);

var G__47145 = cljs.core.next.call(null,seq__47117_47138__$1);
var G__47146 = null;
var G__47147 = (0);
var G__47148 = (0);
seq__47117_47128 = G__47145;
chunk__47118_47129 = G__47146;
count__47119_47130 = G__47147;
i__47120_47131 = G__47148;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__47121){
var vec__47125 = p__47121;
var seq__47126 = cljs.core.seq.call(null,vec__47125);
var first__47127 = cljs.core.first.call(null,seq__47126);
var seq__47126__$1 = cljs.core.next.call(null,seq__47126);
var x = first__47127;
var xs = seq__47126__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__47125,seq__47126,first__47127,seq__47126__$1,x,xs,get_deps__$1){
return (function (p1__47067_SHARP_){
return clojure.set.difference.call(null,p1__47067_SHARP_,x);
});})(vec__47125,seq__47126,first__47127,seq__47126__$1,x,xs,get_deps__$1))
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
var seq__47161 = cljs.core.seq.call(null,provides);
var chunk__47162 = null;
var count__47163 = (0);
var i__47164 = (0);
while(true){
if((i__47164 < count__47163)){
var prov = cljs.core._nth.call(null,chunk__47162,i__47164);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47165_47173 = cljs.core.seq.call(null,requires);
var chunk__47166_47174 = null;
var count__47167_47175 = (0);
var i__47168_47176 = (0);
while(true){
if((i__47168_47176 < count__47167_47175)){
var req_47177 = cljs.core._nth.call(null,chunk__47166_47174,i__47168_47176);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47177,prov);

var G__47178 = seq__47165_47173;
var G__47179 = chunk__47166_47174;
var G__47180 = count__47167_47175;
var G__47181 = (i__47168_47176 + (1));
seq__47165_47173 = G__47178;
chunk__47166_47174 = G__47179;
count__47167_47175 = G__47180;
i__47168_47176 = G__47181;
continue;
} else {
var temp__4657__auto___47182 = cljs.core.seq.call(null,seq__47165_47173);
if(temp__4657__auto___47182){
var seq__47165_47183__$1 = temp__4657__auto___47182;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47165_47183__$1)){
var c__26790__auto___47184 = cljs.core.chunk_first.call(null,seq__47165_47183__$1);
var G__47185 = cljs.core.chunk_rest.call(null,seq__47165_47183__$1);
var G__47186 = c__26790__auto___47184;
var G__47187 = cljs.core.count.call(null,c__26790__auto___47184);
var G__47188 = (0);
seq__47165_47173 = G__47185;
chunk__47166_47174 = G__47186;
count__47167_47175 = G__47187;
i__47168_47176 = G__47188;
continue;
} else {
var req_47189 = cljs.core.first.call(null,seq__47165_47183__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47189,prov);

var G__47190 = cljs.core.next.call(null,seq__47165_47183__$1);
var G__47191 = null;
var G__47192 = (0);
var G__47193 = (0);
seq__47165_47173 = G__47190;
chunk__47166_47174 = G__47191;
count__47167_47175 = G__47192;
i__47168_47176 = G__47193;
continue;
}
} else {
}
}
break;
}

var G__47194 = seq__47161;
var G__47195 = chunk__47162;
var G__47196 = count__47163;
var G__47197 = (i__47164 + (1));
seq__47161 = G__47194;
chunk__47162 = G__47195;
count__47163 = G__47196;
i__47164 = G__47197;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__47161);
if(temp__4657__auto__){
var seq__47161__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47161__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__47161__$1);
var G__47198 = cljs.core.chunk_rest.call(null,seq__47161__$1);
var G__47199 = c__26790__auto__;
var G__47200 = cljs.core.count.call(null,c__26790__auto__);
var G__47201 = (0);
seq__47161 = G__47198;
chunk__47162 = G__47199;
count__47163 = G__47200;
i__47164 = G__47201;
continue;
} else {
var prov = cljs.core.first.call(null,seq__47161__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__47169_47202 = cljs.core.seq.call(null,requires);
var chunk__47170_47203 = null;
var count__47171_47204 = (0);
var i__47172_47205 = (0);
while(true){
if((i__47172_47205 < count__47171_47204)){
var req_47206 = cljs.core._nth.call(null,chunk__47170_47203,i__47172_47205);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47206,prov);

var G__47207 = seq__47169_47202;
var G__47208 = chunk__47170_47203;
var G__47209 = count__47171_47204;
var G__47210 = (i__47172_47205 + (1));
seq__47169_47202 = G__47207;
chunk__47170_47203 = G__47208;
count__47171_47204 = G__47209;
i__47172_47205 = G__47210;
continue;
} else {
var temp__4657__auto___47211__$1 = cljs.core.seq.call(null,seq__47169_47202);
if(temp__4657__auto___47211__$1){
var seq__47169_47212__$1 = temp__4657__auto___47211__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47169_47212__$1)){
var c__26790__auto___47213 = cljs.core.chunk_first.call(null,seq__47169_47212__$1);
var G__47214 = cljs.core.chunk_rest.call(null,seq__47169_47212__$1);
var G__47215 = c__26790__auto___47213;
var G__47216 = cljs.core.count.call(null,c__26790__auto___47213);
var G__47217 = (0);
seq__47169_47202 = G__47214;
chunk__47170_47203 = G__47215;
count__47171_47204 = G__47216;
i__47172_47205 = G__47217;
continue;
} else {
var req_47218 = cljs.core.first.call(null,seq__47169_47212__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_47218,prov);

var G__47219 = cljs.core.next.call(null,seq__47169_47212__$1);
var G__47220 = null;
var G__47221 = (0);
var G__47222 = (0);
seq__47169_47202 = G__47219;
chunk__47170_47203 = G__47220;
count__47171_47204 = G__47221;
i__47172_47205 = G__47222;
continue;
}
} else {
}
}
break;
}

var G__47223 = cljs.core.next.call(null,seq__47161__$1);
var G__47224 = null;
var G__47225 = (0);
var G__47226 = (0);
seq__47161 = G__47223;
chunk__47162 = G__47224;
count__47163 = G__47225;
i__47164 = G__47226;
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
var seq__47231_47235 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__47232_47236 = null;
var count__47233_47237 = (0);
var i__47234_47238 = (0);
while(true){
if((i__47234_47238 < count__47233_47237)){
var ns_47239 = cljs.core._nth.call(null,chunk__47232_47236,i__47234_47238);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47239);

var G__47240 = seq__47231_47235;
var G__47241 = chunk__47232_47236;
var G__47242 = count__47233_47237;
var G__47243 = (i__47234_47238 + (1));
seq__47231_47235 = G__47240;
chunk__47232_47236 = G__47241;
count__47233_47237 = G__47242;
i__47234_47238 = G__47243;
continue;
} else {
var temp__4657__auto___47244 = cljs.core.seq.call(null,seq__47231_47235);
if(temp__4657__auto___47244){
var seq__47231_47245__$1 = temp__4657__auto___47244;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__47231_47245__$1)){
var c__26790__auto___47246 = cljs.core.chunk_first.call(null,seq__47231_47245__$1);
var G__47247 = cljs.core.chunk_rest.call(null,seq__47231_47245__$1);
var G__47248 = c__26790__auto___47246;
var G__47249 = cljs.core.count.call(null,c__26790__auto___47246);
var G__47250 = (0);
seq__47231_47235 = G__47247;
chunk__47232_47236 = G__47248;
count__47233_47237 = G__47249;
i__47234_47238 = G__47250;
continue;
} else {
var ns_47251 = cljs.core.first.call(null,seq__47231_47245__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_47251);

var G__47252 = cljs.core.next.call(null,seq__47231_47245__$1);
var G__47253 = null;
var G__47254 = (0);
var G__47255 = (0);
seq__47231_47235 = G__47252;
chunk__47232_47236 = G__47253;
count__47233_47237 = G__47254;
i__47234_47238 = G__47255;
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
var G__47256__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__47256 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__47257__i = 0, G__47257__a = new Array(arguments.length -  0);
while (G__47257__i < G__47257__a.length) {G__47257__a[G__47257__i] = arguments[G__47257__i + 0]; ++G__47257__i;}
  args = new cljs.core.IndexedSeq(G__47257__a,0);
} 
return G__47256__delegate.call(this,args);};
G__47256.cljs$lang$maxFixedArity = 0;
G__47256.cljs$lang$applyTo = (function (arglist__47258){
var args = cljs.core.seq(arglist__47258);
return G__47256__delegate(args);
});
G__47256.cljs$core$IFn$_invoke$arity$variadic = G__47256__delegate;
return G__47256;
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
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__47259 = cljs.core._EQ_;
var expr__47260 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__47259.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__47260))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str(node_path_lib.sep),cljs.core.str(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__47259,expr__47260){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__47259,expr__47260))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__47259,expr__47260){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e47262){if((e47262 instanceof Error)){
var e = e47262;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47262;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__47259,expr__47260))
} else {
if(cljs.core.truth_(pred__47259.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__47260))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__47259.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__47260))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__47259.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__47260))){
return ((function (pred__47259,expr__47260){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e47263){if((e47263 instanceof Error)){
var e = e47263;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e47263;

}
}})());
});
;})(pred__47259,expr__47260))
} else {
return ((function (pred__47259,expr__47260){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__47259,expr__47260))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__47264,callback){
var map__47267 = p__47264;
var map__47267__$1 = ((((!((map__47267 == null)))?((((map__47267.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47267.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47267):map__47267);
var file_msg = map__47267__$1;
var request_url = cljs.core.get.call(null,map__47267__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Attempting to load "),cljs.core.str(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__47267,map__47267__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,[cljs.core.str("FigWheel: Successfully loaded "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),[cljs.core.str("Figwheel: Error loading file "),cljs.core.str(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__47267,map__47267__$1,file_msg,request_url))
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
return (function (state_47291){
var state_val_47292 = (state_47291[(1)]);
if((state_val_47292 === (7))){
var inst_47287 = (state_47291[(2)]);
var state_47291__$1 = state_47291;
var statearr_47293_47313 = state_47291__$1;
(statearr_47293_47313[(2)] = inst_47287);

(statearr_47293_47313[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47292 === (1))){
var state_47291__$1 = state_47291;
var statearr_47294_47314 = state_47291__$1;
(statearr_47294_47314[(2)] = null);

(statearr_47294_47314[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47292 === (4))){
var inst_47271 = (state_47291[(7)]);
var inst_47271__$1 = (state_47291[(2)]);
var state_47291__$1 = (function (){var statearr_47295 = state_47291;
(statearr_47295[(7)] = inst_47271__$1);

return statearr_47295;
})();
if(cljs.core.truth_(inst_47271__$1)){
var statearr_47296_47315 = state_47291__$1;
(statearr_47296_47315[(1)] = (5));

} else {
var statearr_47297_47316 = state_47291__$1;
(statearr_47297_47316[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47292 === (6))){
var state_47291__$1 = state_47291;
var statearr_47298_47317 = state_47291__$1;
(statearr_47298_47317[(2)] = null);

(statearr_47298_47317[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47292 === (3))){
var inst_47289 = (state_47291[(2)]);
var state_47291__$1 = state_47291;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47291__$1,inst_47289);
} else {
if((state_val_47292 === (2))){
var state_47291__$1 = state_47291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47291__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_47292 === (11))){
var inst_47283 = (state_47291[(2)]);
var state_47291__$1 = (function (){var statearr_47299 = state_47291;
(statearr_47299[(8)] = inst_47283);

return statearr_47299;
})();
var statearr_47300_47318 = state_47291__$1;
(statearr_47300_47318[(2)] = null);

(statearr_47300_47318[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47292 === (9))){
var inst_47277 = (state_47291[(9)]);
var inst_47275 = (state_47291[(10)]);
var inst_47279 = inst_47277.call(null,inst_47275);
var state_47291__$1 = state_47291;
var statearr_47301_47319 = state_47291__$1;
(statearr_47301_47319[(2)] = inst_47279);

(statearr_47301_47319[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47292 === (5))){
var inst_47271 = (state_47291[(7)]);
var inst_47273 = figwheel.client.file_reloading.blocking_load.call(null,inst_47271);
var state_47291__$1 = state_47291;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47291__$1,(8),inst_47273);
} else {
if((state_val_47292 === (10))){
var inst_47275 = (state_47291[(10)]);
var inst_47281 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_47275);
var state_47291__$1 = state_47291;
var statearr_47302_47320 = state_47291__$1;
(statearr_47302_47320[(2)] = inst_47281);

(statearr_47302_47320[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47292 === (8))){
var inst_47277 = (state_47291[(9)]);
var inst_47271 = (state_47291[(7)]);
var inst_47275 = (state_47291[(2)]);
var inst_47276 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_47277__$1 = cljs.core.get.call(null,inst_47276,inst_47271);
var state_47291__$1 = (function (){var statearr_47303 = state_47291;
(statearr_47303[(9)] = inst_47277__$1);

(statearr_47303[(10)] = inst_47275);

return statearr_47303;
})();
if(cljs.core.truth_(inst_47277__$1)){
var statearr_47304_47321 = state_47291__$1;
(statearr_47304_47321[(1)] = (9));

} else {
var statearr_47305_47322 = state_47291__$1;
(statearr_47305_47322[(1)] = (10));

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
var statearr_47309 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_47309[(0)] = figwheel$client$file_reloading$state_machine__27989__auto__);

(statearr_47309[(1)] = (1));

return statearr_47309;
});
var figwheel$client$file_reloading$state_machine__27989__auto____1 = (function (state_47291){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_47291);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e47310){if((e47310 instanceof Object)){
var ex__27992__auto__ = e47310;
var statearr_47311_47323 = state_47291;
(statearr_47311_47323[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47291);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47310;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47324 = state_47291;
state_47291 = G__47324;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__27989__auto__ = function(state_47291){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__27989__auto____1.call(this,state_47291);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__27989__auto____0;
figwheel$client$file_reloading$state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__27989__auto____1;
return figwheel$client$file_reloading$state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_47312 = f__28010__auto__.call(null);
(statearr_47312[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_47312;
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
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__47325,callback){
var map__47328 = p__47325;
var map__47328__$1 = ((((!((map__47328 == null)))?((((map__47328.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47328.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47328):map__47328);
var file_msg = map__47328__$1;
var namespace = cljs.core.get.call(null,map__47328__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__47328,map__47328__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__47328,map__47328__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__47330){
var map__47333 = p__47330;
var map__47333__$1 = ((((!((map__47333 == null)))?((((map__47333.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47333.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47333):map__47333);
var file_msg = map__47333__$1;
var namespace = cljs.core.get.call(null,map__47333__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__47335){
var map__47338 = p__47335;
var map__47338__$1 = ((((!((map__47338 == null)))?((((map__47338.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47338.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47338):map__47338);
var file_msg = map__47338__$1;
var namespace = cljs.core.get.call(null,map__47338__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__47340,callback){
var map__47343 = p__47340;
var map__47343__$1 = ((((!((map__47343 == null)))?((((map__47343.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47343.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47343):map__47343);
var file_msg = map__47343__$1;
var request_url = cljs.core.get.call(null,map__47343__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__47343__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__28009__auto___47447 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___47447,out){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___47447,out){
return (function (state_47429){
var state_val_47430 = (state_47429[(1)]);
if((state_val_47430 === (1))){
var inst_47403 = cljs.core.seq.call(null,files);
var inst_47404 = cljs.core.first.call(null,inst_47403);
var inst_47405 = cljs.core.next.call(null,inst_47403);
var inst_47406 = files;
var state_47429__$1 = (function (){var statearr_47431 = state_47429;
(statearr_47431[(7)] = inst_47405);

(statearr_47431[(8)] = inst_47404);

(statearr_47431[(9)] = inst_47406);

return statearr_47431;
})();
var statearr_47432_47448 = state_47429__$1;
(statearr_47432_47448[(2)] = null);

(statearr_47432_47448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (2))){
var inst_47412 = (state_47429[(10)]);
var inst_47406 = (state_47429[(9)]);
var inst_47411 = cljs.core.seq.call(null,inst_47406);
var inst_47412__$1 = cljs.core.first.call(null,inst_47411);
var inst_47413 = cljs.core.next.call(null,inst_47411);
var inst_47414 = (inst_47412__$1 == null);
var inst_47415 = cljs.core.not.call(null,inst_47414);
var state_47429__$1 = (function (){var statearr_47433 = state_47429;
(statearr_47433[(10)] = inst_47412__$1);

(statearr_47433[(11)] = inst_47413);

return statearr_47433;
})();
if(inst_47415){
var statearr_47434_47449 = state_47429__$1;
(statearr_47434_47449[(1)] = (4));

} else {
var statearr_47435_47450 = state_47429__$1;
(statearr_47435_47450[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (3))){
var inst_47427 = (state_47429[(2)]);
var state_47429__$1 = state_47429;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47429__$1,inst_47427);
} else {
if((state_val_47430 === (4))){
var inst_47412 = (state_47429[(10)]);
var inst_47417 = figwheel.client.file_reloading.reload_js_file.call(null,inst_47412);
var state_47429__$1 = state_47429;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47429__$1,(7),inst_47417);
} else {
if((state_val_47430 === (5))){
var inst_47423 = cljs.core.async.close_BANG_.call(null,out);
var state_47429__$1 = state_47429;
var statearr_47436_47451 = state_47429__$1;
(statearr_47436_47451[(2)] = inst_47423);

(statearr_47436_47451[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (6))){
var inst_47425 = (state_47429[(2)]);
var state_47429__$1 = state_47429;
var statearr_47437_47452 = state_47429__$1;
(statearr_47437_47452[(2)] = inst_47425);

(statearr_47437_47452[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47430 === (7))){
var inst_47413 = (state_47429[(11)]);
var inst_47419 = (state_47429[(2)]);
var inst_47420 = cljs.core.async.put_BANG_.call(null,out,inst_47419);
var inst_47406 = inst_47413;
var state_47429__$1 = (function (){var statearr_47438 = state_47429;
(statearr_47438[(12)] = inst_47420);

(statearr_47438[(9)] = inst_47406);

return statearr_47438;
})();
var statearr_47439_47453 = state_47429__$1;
(statearr_47439_47453[(2)] = null);

(statearr_47439_47453[(1)] = (2));


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
});})(c__28009__auto___47447,out))
;
return ((function (switch__27988__auto__,c__28009__auto___47447,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0 = (function (){
var statearr_47443 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47443[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__);

(statearr_47443[(1)] = (1));

return statearr_47443;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1 = (function (state_47429){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_47429);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e47444){if((e47444 instanceof Object)){
var ex__27992__auto__ = e47444;
var statearr_47445_47454 = state_47429;
(statearr_47445_47454[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47429);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47444;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__47455 = state_47429;
state_47429 = G__47455;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__ = function(state_47429){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1.call(this,state_47429);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___47447,out))
})();
var state__28011__auto__ = (function (){var statearr_47446 = f__28010__auto__.call(null);
(statearr_47446[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___47447);

return statearr_47446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___47447,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__47456,opts){
var map__47460 = p__47456;
var map__47460__$1 = ((((!((map__47460 == null)))?((((map__47460.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47460.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47460):map__47460);
var eval_body__$1 = cljs.core.get.call(null,map__47460__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__47460__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
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
}catch (e47462){var e = e47462;
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
return (function (p1__47463_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47463_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__47472){
var vec__47473 = p__47472;
var k = cljs.core.nth.call(null,vec__47473,(0),null);
var v = cljs.core.nth.call(null,vec__47473,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__47476){
var vec__47477 = p__47476;
var k = cljs.core.nth.call(null,vec__47477,(0),null);
var v = cljs.core.nth.call(null,vec__47477,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__47483,p__47484){
var map__47731 = p__47483;
var map__47731__$1 = ((((!((map__47731 == null)))?((((map__47731.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47731.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47731):map__47731);
var opts = map__47731__$1;
var before_jsload = cljs.core.get.call(null,map__47731__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__47731__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__47731__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__47732 = p__47484;
var map__47732__$1 = ((((!((map__47732 == null)))?((((map__47732.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47732.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47732):map__47732);
var msg = map__47732__$1;
var files = cljs.core.get.call(null,map__47732__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__47732__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__47732__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_47885){
var state_val_47886 = (state_47885[(1)]);
if((state_val_47886 === (7))){
var inst_47749 = (state_47885[(7)]);
var inst_47748 = (state_47885[(8)]);
var inst_47747 = (state_47885[(9)]);
var inst_47746 = (state_47885[(10)]);
var inst_47754 = cljs.core._nth.call(null,inst_47747,inst_47749);
var inst_47755 = figwheel.client.file_reloading.eval_body.call(null,inst_47754,opts);
var inst_47756 = (inst_47749 + (1));
var tmp47887 = inst_47748;
var tmp47888 = inst_47747;
var tmp47889 = inst_47746;
var inst_47746__$1 = tmp47889;
var inst_47747__$1 = tmp47888;
var inst_47748__$1 = tmp47887;
var inst_47749__$1 = inst_47756;
var state_47885__$1 = (function (){var statearr_47890 = state_47885;
(statearr_47890[(7)] = inst_47749__$1);

(statearr_47890[(8)] = inst_47748__$1);

(statearr_47890[(9)] = inst_47747__$1);

(statearr_47890[(10)] = inst_47746__$1);

(statearr_47890[(11)] = inst_47755);

return statearr_47890;
})();
var statearr_47891_47977 = state_47885__$1;
(statearr_47891_47977[(2)] = null);

(statearr_47891_47977[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (20))){
var inst_47789 = (state_47885[(12)]);
var inst_47797 = figwheel.client.file_reloading.sort_files.call(null,inst_47789);
var state_47885__$1 = state_47885;
var statearr_47892_47978 = state_47885__$1;
(statearr_47892_47978[(2)] = inst_47797);

(statearr_47892_47978[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (27))){
var state_47885__$1 = state_47885;
var statearr_47893_47979 = state_47885__$1;
(statearr_47893_47979[(2)] = null);

(statearr_47893_47979[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (1))){
var inst_47738 = (state_47885[(13)]);
var inst_47735 = before_jsload.call(null,files);
var inst_47736 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_47737 = (function (){return ((function (inst_47738,inst_47735,inst_47736,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47480_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47480_SHARP_);
});
;})(inst_47738,inst_47735,inst_47736,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47738__$1 = cljs.core.filter.call(null,inst_47737,files);
var inst_47739 = cljs.core.not_empty.call(null,inst_47738__$1);
var state_47885__$1 = (function (){var statearr_47894 = state_47885;
(statearr_47894[(14)] = inst_47736);

(statearr_47894[(15)] = inst_47735);

(statearr_47894[(13)] = inst_47738__$1);

return statearr_47894;
})();
if(cljs.core.truth_(inst_47739)){
var statearr_47895_47980 = state_47885__$1;
(statearr_47895_47980[(1)] = (2));

} else {
var statearr_47896_47981 = state_47885__$1;
(statearr_47896_47981[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (24))){
var state_47885__$1 = state_47885;
var statearr_47897_47982 = state_47885__$1;
(statearr_47897_47982[(2)] = null);

(statearr_47897_47982[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (39))){
var inst_47839 = (state_47885[(16)]);
var state_47885__$1 = state_47885;
var statearr_47898_47983 = state_47885__$1;
(statearr_47898_47983[(2)] = inst_47839);

(statearr_47898_47983[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (46))){
var inst_47880 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
var statearr_47899_47984 = state_47885__$1;
(statearr_47899_47984[(2)] = inst_47880);

(statearr_47899_47984[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (4))){
var inst_47783 = (state_47885[(2)]);
var inst_47784 = cljs.core.List.EMPTY;
var inst_47785 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_47784);
var inst_47786 = (function (){return ((function (inst_47783,inst_47784,inst_47785,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47481_SHARP_){
var and__25967__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__47481_SHARP_);
if(cljs.core.truth_(and__25967__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__47481_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__47481_SHARP_)));
} else {
return and__25967__auto__;
}
});
;})(inst_47783,inst_47784,inst_47785,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47787 = cljs.core.filter.call(null,inst_47786,files);
var inst_47788 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_47789 = cljs.core.concat.call(null,inst_47787,inst_47788);
var state_47885__$1 = (function (){var statearr_47900 = state_47885;
(statearr_47900[(17)] = inst_47783);

(statearr_47900[(18)] = inst_47785);

(statearr_47900[(12)] = inst_47789);

return statearr_47900;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_47901_47985 = state_47885__$1;
(statearr_47901_47985[(1)] = (16));

} else {
var statearr_47902_47986 = state_47885__$1;
(statearr_47902_47986[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (15))){
var inst_47773 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
var statearr_47903_47987 = state_47885__$1;
(statearr_47903_47987[(2)] = inst_47773);

(statearr_47903_47987[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (21))){
var inst_47799 = (state_47885[(19)]);
var inst_47799__$1 = (state_47885[(2)]);
var inst_47800 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_47799__$1);
var state_47885__$1 = (function (){var statearr_47904 = state_47885;
(statearr_47904[(19)] = inst_47799__$1);

return statearr_47904;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_47885__$1,(22),inst_47800);
} else {
if((state_val_47886 === (31))){
var inst_47883 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_47885__$1,inst_47883);
} else {
if((state_val_47886 === (32))){
var inst_47839 = (state_47885[(16)]);
var inst_47844 = inst_47839.cljs$lang$protocol_mask$partition0$;
var inst_47845 = (inst_47844 & (64));
var inst_47846 = inst_47839.cljs$core$ISeq$;
var inst_47847 = (inst_47845) || (inst_47846);
var state_47885__$1 = state_47885;
if(cljs.core.truth_(inst_47847)){
var statearr_47905_47988 = state_47885__$1;
(statearr_47905_47988[(1)] = (35));

} else {
var statearr_47906_47989 = state_47885__$1;
(statearr_47906_47989[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (40))){
var inst_47860 = (state_47885[(20)]);
var inst_47859 = (state_47885[(2)]);
var inst_47860__$1 = cljs.core.get.call(null,inst_47859,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_47861 = cljs.core.get.call(null,inst_47859,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_47862 = cljs.core.not_empty.call(null,inst_47860__$1);
var state_47885__$1 = (function (){var statearr_47907 = state_47885;
(statearr_47907[(20)] = inst_47860__$1);

(statearr_47907[(21)] = inst_47861);

return statearr_47907;
})();
if(cljs.core.truth_(inst_47862)){
var statearr_47908_47990 = state_47885__$1;
(statearr_47908_47990[(1)] = (41));

} else {
var statearr_47909_47991 = state_47885__$1;
(statearr_47909_47991[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (33))){
var state_47885__$1 = state_47885;
var statearr_47910_47992 = state_47885__$1;
(statearr_47910_47992[(2)] = false);

(statearr_47910_47992[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (13))){
var inst_47759 = (state_47885[(22)]);
var inst_47763 = cljs.core.chunk_first.call(null,inst_47759);
var inst_47764 = cljs.core.chunk_rest.call(null,inst_47759);
var inst_47765 = cljs.core.count.call(null,inst_47763);
var inst_47746 = inst_47764;
var inst_47747 = inst_47763;
var inst_47748 = inst_47765;
var inst_47749 = (0);
var state_47885__$1 = (function (){var statearr_47911 = state_47885;
(statearr_47911[(7)] = inst_47749);

(statearr_47911[(8)] = inst_47748);

(statearr_47911[(9)] = inst_47747);

(statearr_47911[(10)] = inst_47746);

return statearr_47911;
})();
var statearr_47912_47993 = state_47885__$1;
(statearr_47912_47993[(2)] = null);

(statearr_47912_47993[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (22))){
var inst_47803 = (state_47885[(23)]);
var inst_47799 = (state_47885[(19)]);
var inst_47802 = (state_47885[(24)]);
var inst_47807 = (state_47885[(25)]);
var inst_47802__$1 = (state_47885[(2)]);
var inst_47803__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47802__$1);
var inst_47804 = (function (){var all_files = inst_47799;
var res_SINGLEQUOTE_ = inst_47802__$1;
var res = inst_47803__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_47803,inst_47799,inst_47802,inst_47807,inst_47802__$1,inst_47803__$1,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__47482_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__47482_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_47803,inst_47799,inst_47802,inst_47807,inst_47802__$1,inst_47803__$1,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47805 = cljs.core.filter.call(null,inst_47804,inst_47802__$1);
var inst_47806 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_47807__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_47806);
var inst_47808 = cljs.core.not_empty.call(null,inst_47807__$1);
var state_47885__$1 = (function (){var statearr_47913 = state_47885;
(statearr_47913[(23)] = inst_47803__$1);

(statearr_47913[(26)] = inst_47805);

(statearr_47913[(24)] = inst_47802__$1);

(statearr_47913[(25)] = inst_47807__$1);

return statearr_47913;
})();
if(cljs.core.truth_(inst_47808)){
var statearr_47914_47994 = state_47885__$1;
(statearr_47914_47994[(1)] = (23));

} else {
var statearr_47915_47995 = state_47885__$1;
(statearr_47915_47995[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (36))){
var state_47885__$1 = state_47885;
var statearr_47916_47996 = state_47885__$1;
(statearr_47916_47996[(2)] = false);

(statearr_47916_47996[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (41))){
var inst_47860 = (state_47885[(20)]);
var inst_47864 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_47865 = cljs.core.map.call(null,inst_47864,inst_47860);
var inst_47866 = cljs.core.pr_str.call(null,inst_47865);
var inst_47867 = [cljs.core.str("figwheel-no-load meta-data: "),cljs.core.str(inst_47866)].join('');
var inst_47868 = figwheel.client.utils.log.call(null,inst_47867);
var state_47885__$1 = state_47885;
var statearr_47917_47997 = state_47885__$1;
(statearr_47917_47997[(2)] = inst_47868);

(statearr_47917_47997[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (43))){
var inst_47861 = (state_47885[(21)]);
var inst_47871 = (state_47885[(2)]);
var inst_47872 = cljs.core.not_empty.call(null,inst_47861);
var state_47885__$1 = (function (){var statearr_47918 = state_47885;
(statearr_47918[(27)] = inst_47871);

return statearr_47918;
})();
if(cljs.core.truth_(inst_47872)){
var statearr_47919_47998 = state_47885__$1;
(statearr_47919_47998[(1)] = (44));

} else {
var statearr_47920_47999 = state_47885__$1;
(statearr_47920_47999[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (29))){
var inst_47803 = (state_47885[(23)]);
var inst_47799 = (state_47885[(19)]);
var inst_47805 = (state_47885[(26)]);
var inst_47839 = (state_47885[(16)]);
var inst_47802 = (state_47885[(24)]);
var inst_47807 = (state_47885[(25)]);
var inst_47835 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_47838 = (function (){var all_files = inst_47799;
var res_SINGLEQUOTE_ = inst_47802;
var res = inst_47803;
var files_not_loaded = inst_47805;
var dependencies_that_loaded = inst_47807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47803,inst_47799,inst_47805,inst_47839,inst_47802,inst_47807,inst_47835,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47837){
var map__47921 = p__47837;
var map__47921__$1 = ((((!((map__47921 == null)))?((((map__47921.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47921.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47921):map__47921);
var namespace = cljs.core.get.call(null,map__47921__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47803,inst_47799,inst_47805,inst_47839,inst_47802,inst_47807,inst_47835,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47839__$1 = cljs.core.group_by.call(null,inst_47838,inst_47805);
var inst_47841 = (inst_47839__$1 == null);
var inst_47842 = cljs.core.not.call(null,inst_47841);
var state_47885__$1 = (function (){var statearr_47923 = state_47885;
(statearr_47923[(28)] = inst_47835);

(statearr_47923[(16)] = inst_47839__$1);

return statearr_47923;
})();
if(inst_47842){
var statearr_47924_48000 = state_47885__$1;
(statearr_47924_48000[(1)] = (32));

} else {
var statearr_47925_48001 = state_47885__$1;
(statearr_47925_48001[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (44))){
var inst_47861 = (state_47885[(21)]);
var inst_47874 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_47861);
var inst_47875 = cljs.core.pr_str.call(null,inst_47874);
var inst_47876 = [cljs.core.str("not required: "),cljs.core.str(inst_47875)].join('');
var inst_47877 = figwheel.client.utils.log.call(null,inst_47876);
var state_47885__$1 = state_47885;
var statearr_47926_48002 = state_47885__$1;
(statearr_47926_48002[(2)] = inst_47877);

(statearr_47926_48002[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (6))){
var inst_47780 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
var statearr_47927_48003 = state_47885__$1;
(statearr_47927_48003[(2)] = inst_47780);

(statearr_47927_48003[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (28))){
var inst_47805 = (state_47885[(26)]);
var inst_47832 = (state_47885[(2)]);
var inst_47833 = cljs.core.not_empty.call(null,inst_47805);
var state_47885__$1 = (function (){var statearr_47928 = state_47885;
(statearr_47928[(29)] = inst_47832);

return statearr_47928;
})();
if(cljs.core.truth_(inst_47833)){
var statearr_47929_48004 = state_47885__$1;
(statearr_47929_48004[(1)] = (29));

} else {
var statearr_47930_48005 = state_47885__$1;
(statearr_47930_48005[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (25))){
var inst_47803 = (state_47885[(23)]);
var inst_47819 = (state_47885[(2)]);
var inst_47820 = cljs.core.not_empty.call(null,inst_47803);
var state_47885__$1 = (function (){var statearr_47931 = state_47885;
(statearr_47931[(30)] = inst_47819);

return statearr_47931;
})();
if(cljs.core.truth_(inst_47820)){
var statearr_47932_48006 = state_47885__$1;
(statearr_47932_48006[(1)] = (26));

} else {
var statearr_47933_48007 = state_47885__$1;
(statearr_47933_48007[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (34))){
var inst_47854 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
if(cljs.core.truth_(inst_47854)){
var statearr_47934_48008 = state_47885__$1;
(statearr_47934_48008[(1)] = (38));

} else {
var statearr_47935_48009 = state_47885__$1;
(statearr_47935_48009[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (17))){
var state_47885__$1 = state_47885;
var statearr_47936_48010 = state_47885__$1;
(statearr_47936_48010[(2)] = recompile_dependents);

(statearr_47936_48010[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (3))){
var state_47885__$1 = state_47885;
var statearr_47937_48011 = state_47885__$1;
(statearr_47937_48011[(2)] = null);

(statearr_47937_48011[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (12))){
var inst_47776 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
var statearr_47938_48012 = state_47885__$1;
(statearr_47938_48012[(2)] = inst_47776);

(statearr_47938_48012[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (2))){
var inst_47738 = (state_47885[(13)]);
var inst_47745 = cljs.core.seq.call(null,inst_47738);
var inst_47746 = inst_47745;
var inst_47747 = null;
var inst_47748 = (0);
var inst_47749 = (0);
var state_47885__$1 = (function (){var statearr_47939 = state_47885;
(statearr_47939[(7)] = inst_47749);

(statearr_47939[(8)] = inst_47748);

(statearr_47939[(9)] = inst_47747);

(statearr_47939[(10)] = inst_47746);

return statearr_47939;
})();
var statearr_47940_48013 = state_47885__$1;
(statearr_47940_48013[(2)] = null);

(statearr_47940_48013[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (23))){
var inst_47803 = (state_47885[(23)]);
var inst_47799 = (state_47885[(19)]);
var inst_47805 = (state_47885[(26)]);
var inst_47802 = (state_47885[(24)]);
var inst_47807 = (state_47885[(25)]);
var inst_47810 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_47812 = (function (){var all_files = inst_47799;
var res_SINGLEQUOTE_ = inst_47802;
var res = inst_47803;
var files_not_loaded = inst_47805;
var dependencies_that_loaded = inst_47807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47803,inst_47799,inst_47805,inst_47802,inst_47807,inst_47810,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47811){
var map__47941 = p__47811;
var map__47941__$1 = ((((!((map__47941 == null)))?((((map__47941.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47941.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47941):map__47941);
var request_url = cljs.core.get.call(null,map__47941__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47803,inst_47799,inst_47805,inst_47802,inst_47807,inst_47810,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47813 = cljs.core.reverse.call(null,inst_47807);
var inst_47814 = cljs.core.map.call(null,inst_47812,inst_47813);
var inst_47815 = cljs.core.pr_str.call(null,inst_47814);
var inst_47816 = figwheel.client.utils.log.call(null,inst_47815);
var state_47885__$1 = (function (){var statearr_47943 = state_47885;
(statearr_47943[(31)] = inst_47810);

return statearr_47943;
})();
var statearr_47944_48014 = state_47885__$1;
(statearr_47944_48014[(2)] = inst_47816);

(statearr_47944_48014[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (35))){
var state_47885__$1 = state_47885;
var statearr_47945_48015 = state_47885__$1;
(statearr_47945_48015[(2)] = true);

(statearr_47945_48015[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (19))){
var inst_47789 = (state_47885[(12)]);
var inst_47795 = figwheel.client.file_reloading.expand_files.call(null,inst_47789);
var state_47885__$1 = state_47885;
var statearr_47946_48016 = state_47885__$1;
(statearr_47946_48016[(2)] = inst_47795);

(statearr_47946_48016[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (11))){
var state_47885__$1 = state_47885;
var statearr_47947_48017 = state_47885__$1;
(statearr_47947_48017[(2)] = null);

(statearr_47947_48017[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (9))){
var inst_47778 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
var statearr_47948_48018 = state_47885__$1;
(statearr_47948_48018[(2)] = inst_47778);

(statearr_47948_48018[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (5))){
var inst_47749 = (state_47885[(7)]);
var inst_47748 = (state_47885[(8)]);
var inst_47751 = (inst_47749 < inst_47748);
var inst_47752 = inst_47751;
var state_47885__$1 = state_47885;
if(cljs.core.truth_(inst_47752)){
var statearr_47949_48019 = state_47885__$1;
(statearr_47949_48019[(1)] = (7));

} else {
var statearr_47950_48020 = state_47885__$1;
(statearr_47950_48020[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (14))){
var inst_47759 = (state_47885[(22)]);
var inst_47768 = cljs.core.first.call(null,inst_47759);
var inst_47769 = figwheel.client.file_reloading.eval_body.call(null,inst_47768,opts);
var inst_47770 = cljs.core.next.call(null,inst_47759);
var inst_47746 = inst_47770;
var inst_47747 = null;
var inst_47748 = (0);
var inst_47749 = (0);
var state_47885__$1 = (function (){var statearr_47951 = state_47885;
(statearr_47951[(7)] = inst_47749);

(statearr_47951[(8)] = inst_47748);

(statearr_47951[(9)] = inst_47747);

(statearr_47951[(10)] = inst_47746);

(statearr_47951[(32)] = inst_47769);

return statearr_47951;
})();
var statearr_47952_48021 = state_47885__$1;
(statearr_47952_48021[(2)] = null);

(statearr_47952_48021[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (45))){
var state_47885__$1 = state_47885;
var statearr_47953_48022 = state_47885__$1;
(statearr_47953_48022[(2)] = null);

(statearr_47953_48022[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (26))){
var inst_47803 = (state_47885[(23)]);
var inst_47799 = (state_47885[(19)]);
var inst_47805 = (state_47885[(26)]);
var inst_47802 = (state_47885[(24)]);
var inst_47807 = (state_47885[(25)]);
var inst_47822 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_47824 = (function (){var all_files = inst_47799;
var res_SINGLEQUOTE_ = inst_47802;
var res = inst_47803;
var files_not_loaded = inst_47805;
var dependencies_that_loaded = inst_47807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47803,inst_47799,inst_47805,inst_47802,inst_47807,inst_47822,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__47823){
var map__47954 = p__47823;
var map__47954__$1 = ((((!((map__47954 == null)))?((((map__47954.cljs$lang$protocol_mask$partition0$ & (64))) || (map__47954.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__47954):map__47954);
var namespace = cljs.core.get.call(null,map__47954__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__47954__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47803,inst_47799,inst_47805,inst_47802,inst_47807,inst_47822,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47825 = cljs.core.map.call(null,inst_47824,inst_47803);
var inst_47826 = cljs.core.pr_str.call(null,inst_47825);
var inst_47827 = figwheel.client.utils.log.call(null,inst_47826);
var inst_47828 = (function (){var all_files = inst_47799;
var res_SINGLEQUOTE_ = inst_47802;
var res = inst_47803;
var files_not_loaded = inst_47805;
var dependencies_that_loaded = inst_47807;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47803,inst_47799,inst_47805,inst_47802,inst_47807,inst_47822,inst_47824,inst_47825,inst_47826,inst_47827,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_47803,inst_47799,inst_47805,inst_47802,inst_47807,inst_47822,inst_47824,inst_47825,inst_47826,inst_47827,state_val_47886,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_47829 = setTimeout(inst_47828,(10));
var state_47885__$1 = (function (){var statearr_47956 = state_47885;
(statearr_47956[(33)] = inst_47822);

(statearr_47956[(34)] = inst_47827);

return statearr_47956;
})();
var statearr_47957_48023 = state_47885__$1;
(statearr_47957_48023[(2)] = inst_47829);

(statearr_47957_48023[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (16))){
var state_47885__$1 = state_47885;
var statearr_47958_48024 = state_47885__$1;
(statearr_47958_48024[(2)] = reload_dependents);

(statearr_47958_48024[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (38))){
var inst_47839 = (state_47885[(16)]);
var inst_47856 = cljs.core.apply.call(null,cljs.core.hash_map,inst_47839);
var state_47885__$1 = state_47885;
var statearr_47959_48025 = state_47885__$1;
(statearr_47959_48025[(2)] = inst_47856);

(statearr_47959_48025[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (30))){
var state_47885__$1 = state_47885;
var statearr_47960_48026 = state_47885__$1;
(statearr_47960_48026[(2)] = null);

(statearr_47960_48026[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (10))){
var inst_47759 = (state_47885[(22)]);
var inst_47761 = cljs.core.chunked_seq_QMARK_.call(null,inst_47759);
var state_47885__$1 = state_47885;
if(inst_47761){
var statearr_47961_48027 = state_47885__$1;
(statearr_47961_48027[(1)] = (13));

} else {
var statearr_47962_48028 = state_47885__$1;
(statearr_47962_48028[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (18))){
var inst_47793 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
if(cljs.core.truth_(inst_47793)){
var statearr_47963_48029 = state_47885__$1;
(statearr_47963_48029[(1)] = (19));

} else {
var statearr_47964_48030 = state_47885__$1;
(statearr_47964_48030[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (42))){
var state_47885__$1 = state_47885;
var statearr_47965_48031 = state_47885__$1;
(statearr_47965_48031[(2)] = null);

(statearr_47965_48031[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (37))){
var inst_47851 = (state_47885[(2)]);
var state_47885__$1 = state_47885;
var statearr_47966_48032 = state_47885__$1;
(statearr_47966_48032[(2)] = inst_47851);

(statearr_47966_48032[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_47886 === (8))){
var inst_47759 = (state_47885[(22)]);
var inst_47746 = (state_47885[(10)]);
var inst_47759__$1 = cljs.core.seq.call(null,inst_47746);
var state_47885__$1 = (function (){var statearr_47967 = state_47885;
(statearr_47967[(22)] = inst_47759__$1);

return statearr_47967;
})();
if(inst_47759__$1){
var statearr_47968_48033 = state_47885__$1;
(statearr_47968_48033[(1)] = (10));

} else {
var statearr_47969_48034 = state_47885__$1;
(statearr_47969_48034[(1)] = (11));

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
});})(c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__27988__auto__,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0 = (function (){
var statearr_47973 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_47973[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__);

(statearr_47973[(1)] = (1));

return statearr_47973;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1 = (function (state_47885){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_47885);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e47974){if((e47974 instanceof Object)){
var ex__27992__auto__ = e47974;
var statearr_47975_48035 = state_47885;
(statearr_47975_48035[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_47885);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e47974;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48036 = state_47885;
state_47885 = G__48036;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__ = function(state_47885){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1.call(this,state_47885);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__28011__auto__ = (function (){var statearr_47976 = f__28010__auto__.call(null);
(statearr_47976[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_47976;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,map__47731,map__47731__$1,opts,before_jsload,on_jsload,reload_dependents,map__47732,map__47732__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__28009__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str(location.protocol),cljs.core.str("//")].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__48039,link){
var map__48042 = p__48039;
var map__48042__$1 = ((((!((map__48042 == null)))?((((map__48042.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48042.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48042):map__48042);
var file = cljs.core.get.call(null,map__48042__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__4657__auto__ = link.href;
if(cljs.core.truth_(temp__4657__auto__)){
var link_href = temp__4657__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__4657__auto__,map__48042,map__48042__$1,file){
return (function (p1__48037_SHARP_,p2__48038_SHARP_){
if(cljs.core._EQ_.call(null,p1__48037_SHARP_,p2__48038_SHARP_)){
return p1__48037_SHARP_;
} else {
return false;
}
});})(link_href,temp__4657__auto__,map__48042,map__48042__$1,file))
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
var temp__4657__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__48048){
var map__48049 = p__48048;
var map__48049__$1 = ((((!((map__48049 == null)))?((((map__48049.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48049.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48049):map__48049);
var match_length = cljs.core.get.call(null,map__48049__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__48049__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__48044_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__48044_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__48051_SHARP_,p2__48052_SHARP_){
return cljs.core.assoc.call(null,p1__48051_SHARP_,cljs.core.get.call(null,p2__48052_SHARP_,key),p2__48052_SHARP_);
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
var loaded_f_datas_48053 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_48053);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_48053);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__48054,p__48055){
var map__48060 = p__48054;
var map__48060__$1 = ((((!((map__48060 == null)))?((((map__48060.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48060.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48060):map__48060);
var on_cssload = cljs.core.get.call(null,map__48060__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__48061 = p__48055;
var map__48061__$1 = ((((!((map__48061 == null)))?((((map__48061.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48061.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48061):map__48061);
var files_msg = map__48061__$1;
var files = cljs.core.get.call(null,map__48061__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1500064938983