// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__70286){
var map__70311 = p__70286;
var map__70311__$1 = ((((!((map__70311 == null)))?((((map__70311.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70311.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70311):map__70311);
var m = map__70311__$1;
var n = cljs.core.get.call(null,map__70311__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__70311__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70313_70335 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70314_70336 = null;
var count__70315_70337 = (0);
var i__70316_70338 = (0);
while(true){
if((i__70316_70338 < count__70315_70337)){
var f_70339 = cljs.core._nth.call(null,chunk__70314_70336,i__70316_70338);
cljs.core.println.call(null,"  ",f_70339);

var G__70340 = seq__70313_70335;
var G__70341 = chunk__70314_70336;
var G__70342 = count__70315_70337;
var G__70343 = (i__70316_70338 + (1));
seq__70313_70335 = G__70340;
chunk__70314_70336 = G__70341;
count__70315_70337 = G__70342;
i__70316_70338 = G__70343;
continue;
} else {
var temp__4657__auto___70344 = cljs.core.seq.call(null,seq__70313_70335);
if(temp__4657__auto___70344){
var seq__70313_70345__$1 = temp__4657__auto___70344;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70313_70345__$1)){
var c__26790__auto___70346 = cljs.core.chunk_first.call(null,seq__70313_70345__$1);
var G__70347 = cljs.core.chunk_rest.call(null,seq__70313_70345__$1);
var G__70348 = c__26790__auto___70346;
var G__70349 = cljs.core.count.call(null,c__26790__auto___70346);
var G__70350 = (0);
seq__70313_70335 = G__70347;
chunk__70314_70336 = G__70348;
count__70315_70337 = G__70349;
i__70316_70338 = G__70350;
continue;
} else {
var f_70351 = cljs.core.first.call(null,seq__70313_70345__$1);
cljs.core.println.call(null,"  ",f_70351);

var G__70352 = cljs.core.next.call(null,seq__70313_70345__$1);
var G__70353 = null;
var G__70354 = (0);
var G__70355 = (0);
seq__70313_70335 = G__70352;
chunk__70314_70336 = G__70353;
count__70315_70337 = G__70354;
i__70316_70338 = G__70355;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_70356 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_70356);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_70356)))?cljs.core.second.call(null,arglists_70356):arglists_70356));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__70317_70357 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__70318_70358 = null;
var count__70319_70359 = (0);
var i__70320_70360 = (0);
while(true){
if((i__70320_70360 < count__70319_70359)){
var vec__70321_70361 = cljs.core._nth.call(null,chunk__70318_70358,i__70320_70360);
var name_70362 = cljs.core.nth.call(null,vec__70321_70361,(0),null);
var map__70324_70363 = cljs.core.nth.call(null,vec__70321_70361,(1),null);
var map__70324_70364__$1 = ((((!((map__70324_70363 == null)))?((((map__70324_70363.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70324_70363.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70324_70363):map__70324_70363);
var doc_70365 = cljs.core.get.call(null,map__70324_70364__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70366 = cljs.core.get.call(null,map__70324_70364__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_70362);

cljs.core.println.call(null," ",arglists_70366);

if(cljs.core.truth_(doc_70365)){
cljs.core.println.call(null," ",doc_70365);
} else {
}

var G__70367 = seq__70317_70357;
var G__70368 = chunk__70318_70358;
var G__70369 = count__70319_70359;
var G__70370 = (i__70320_70360 + (1));
seq__70317_70357 = G__70367;
chunk__70318_70358 = G__70368;
count__70319_70359 = G__70369;
i__70320_70360 = G__70370;
continue;
} else {
var temp__4657__auto___70371 = cljs.core.seq.call(null,seq__70317_70357);
if(temp__4657__auto___70371){
var seq__70317_70372__$1 = temp__4657__auto___70371;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70317_70372__$1)){
var c__26790__auto___70373 = cljs.core.chunk_first.call(null,seq__70317_70372__$1);
var G__70374 = cljs.core.chunk_rest.call(null,seq__70317_70372__$1);
var G__70375 = c__26790__auto___70373;
var G__70376 = cljs.core.count.call(null,c__26790__auto___70373);
var G__70377 = (0);
seq__70317_70357 = G__70374;
chunk__70318_70358 = G__70375;
count__70319_70359 = G__70376;
i__70320_70360 = G__70377;
continue;
} else {
var vec__70326_70378 = cljs.core.first.call(null,seq__70317_70372__$1);
var name_70379 = cljs.core.nth.call(null,vec__70326_70378,(0),null);
var map__70329_70380 = cljs.core.nth.call(null,vec__70326_70378,(1),null);
var map__70329_70381__$1 = ((((!((map__70329_70380 == null)))?((((map__70329_70380.cljs$lang$protocol_mask$partition0$ & (64))) || (map__70329_70380.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__70329_70380):map__70329_70380);
var doc_70382 = cljs.core.get.call(null,map__70329_70381__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_70383 = cljs.core.get.call(null,map__70329_70381__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_70379);

cljs.core.println.call(null," ",arglists_70383);

if(cljs.core.truth_(doc_70382)){
cljs.core.println.call(null," ",doc_70382);
} else {
}

var G__70384 = cljs.core.next.call(null,seq__70317_70372__$1);
var G__70385 = null;
var G__70386 = (0);
var G__70387 = (0);
seq__70317_70357 = G__70384;
chunk__70318_70358 = G__70385;
count__70319_70359 = G__70386;
i__70320_70360 = G__70387;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__4657__auto__ = cljs.spec.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__4657__auto__)){
var fnspec = temp__4657__auto__;
cljs.core.print.call(null,"Spec");

var seq__70331 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__70332 = null;
var count__70333 = (0);
var i__70334 = (0);
while(true){
if((i__70334 < count__70333)){
var role = cljs.core._nth.call(null,chunk__70332,i__70334);
var temp__4657__auto___70388__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___70388__$1)){
var spec_70389 = temp__4657__auto___70388__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_70389));
} else {
}

var G__70390 = seq__70331;
var G__70391 = chunk__70332;
var G__70392 = count__70333;
var G__70393 = (i__70334 + (1));
seq__70331 = G__70390;
chunk__70332 = G__70391;
count__70333 = G__70392;
i__70334 = G__70393;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__70331);
if(temp__4657__auto____$1){
var seq__70331__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__70331__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__70331__$1);
var G__70394 = cljs.core.chunk_rest.call(null,seq__70331__$1);
var G__70395 = c__26790__auto__;
var G__70396 = cljs.core.count.call(null,c__26790__auto__);
var G__70397 = (0);
seq__70331 = G__70394;
chunk__70332 = G__70395;
count__70333 = G__70396;
i__70334 = G__70397;
continue;
} else {
var role = cljs.core.first.call(null,seq__70331__$1);
var temp__4657__auto___70398__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___70398__$2)){
var spec_70399 = temp__4657__auto___70398__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_70399));
} else {
}

var G__70400 = cljs.core.next.call(null,seq__70331__$1);
var G__70401 = null;
var G__70402 = (0);
var G__70403 = (0);
seq__70331 = G__70400;
chunk__70332 = G__70401;
count__70333 = G__70402;
i__70334 = G__70403;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1499924873481