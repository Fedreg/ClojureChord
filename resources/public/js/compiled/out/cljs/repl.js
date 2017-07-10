// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__41411){
var map__41436 = p__41411;
var map__41436__$1 = ((((!((map__41436 == null)))?((((map__41436.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41436.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41436):map__41436);
var m = map__41436__$1;
var n = cljs.core.get.call(null,map__41436__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__41436__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__41438_41460 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41439_41461 = null;
var count__41440_41462 = (0);
var i__41441_41463 = (0);
while(true){
if((i__41441_41463 < count__41440_41462)){
var f_41464 = cljs.core._nth.call(null,chunk__41439_41461,i__41441_41463);
cljs.core.println.call(null,"  ",f_41464);

var G__41465 = seq__41438_41460;
var G__41466 = chunk__41439_41461;
var G__41467 = count__41440_41462;
var G__41468 = (i__41441_41463 + (1));
seq__41438_41460 = G__41465;
chunk__41439_41461 = G__41466;
count__41440_41462 = G__41467;
i__41441_41463 = G__41468;
continue;
} else {
var temp__4657__auto___41469 = cljs.core.seq.call(null,seq__41438_41460);
if(temp__4657__auto___41469){
var seq__41438_41470__$1 = temp__4657__auto___41469;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41438_41470__$1)){
var c__26790__auto___41471 = cljs.core.chunk_first.call(null,seq__41438_41470__$1);
var G__41472 = cljs.core.chunk_rest.call(null,seq__41438_41470__$1);
var G__41473 = c__26790__auto___41471;
var G__41474 = cljs.core.count.call(null,c__26790__auto___41471);
var G__41475 = (0);
seq__41438_41460 = G__41472;
chunk__41439_41461 = G__41473;
count__41440_41462 = G__41474;
i__41441_41463 = G__41475;
continue;
} else {
var f_41476 = cljs.core.first.call(null,seq__41438_41470__$1);
cljs.core.println.call(null,"  ",f_41476);

var G__41477 = cljs.core.next.call(null,seq__41438_41470__$1);
var G__41478 = null;
var G__41479 = (0);
var G__41480 = (0);
seq__41438_41460 = G__41477;
chunk__41439_41461 = G__41478;
count__41440_41462 = G__41479;
i__41441_41463 = G__41480;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_41481 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_41481);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_41481)))?cljs.core.second.call(null,arglists_41481):arglists_41481));
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
var seq__41442_41482 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__41443_41483 = null;
var count__41444_41484 = (0);
var i__41445_41485 = (0);
while(true){
if((i__41445_41485 < count__41444_41484)){
var vec__41446_41486 = cljs.core._nth.call(null,chunk__41443_41483,i__41445_41485);
var name_41487 = cljs.core.nth.call(null,vec__41446_41486,(0),null);
var map__41449_41488 = cljs.core.nth.call(null,vec__41446_41486,(1),null);
var map__41449_41489__$1 = ((((!((map__41449_41488 == null)))?((((map__41449_41488.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41449_41488.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41449_41488):map__41449_41488);
var doc_41490 = cljs.core.get.call(null,map__41449_41489__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41491 = cljs.core.get.call(null,map__41449_41489__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41487);

cljs.core.println.call(null," ",arglists_41491);

if(cljs.core.truth_(doc_41490)){
cljs.core.println.call(null," ",doc_41490);
} else {
}

var G__41492 = seq__41442_41482;
var G__41493 = chunk__41443_41483;
var G__41494 = count__41444_41484;
var G__41495 = (i__41445_41485 + (1));
seq__41442_41482 = G__41492;
chunk__41443_41483 = G__41493;
count__41444_41484 = G__41494;
i__41445_41485 = G__41495;
continue;
} else {
var temp__4657__auto___41496 = cljs.core.seq.call(null,seq__41442_41482);
if(temp__4657__auto___41496){
var seq__41442_41497__$1 = temp__4657__auto___41496;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41442_41497__$1)){
var c__26790__auto___41498 = cljs.core.chunk_first.call(null,seq__41442_41497__$1);
var G__41499 = cljs.core.chunk_rest.call(null,seq__41442_41497__$1);
var G__41500 = c__26790__auto___41498;
var G__41501 = cljs.core.count.call(null,c__26790__auto___41498);
var G__41502 = (0);
seq__41442_41482 = G__41499;
chunk__41443_41483 = G__41500;
count__41444_41484 = G__41501;
i__41445_41485 = G__41502;
continue;
} else {
var vec__41451_41503 = cljs.core.first.call(null,seq__41442_41497__$1);
var name_41504 = cljs.core.nth.call(null,vec__41451_41503,(0),null);
var map__41454_41505 = cljs.core.nth.call(null,vec__41451_41503,(1),null);
var map__41454_41506__$1 = ((((!((map__41454_41505 == null)))?((((map__41454_41505.cljs$lang$protocol_mask$partition0$ & (64))) || (map__41454_41505.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__41454_41505):map__41454_41505);
var doc_41507 = cljs.core.get.call(null,map__41454_41506__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_41508 = cljs.core.get.call(null,map__41454_41506__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_41504);

cljs.core.println.call(null," ",arglists_41508);

if(cljs.core.truth_(doc_41507)){
cljs.core.println.call(null," ",doc_41507);
} else {
}

var G__41509 = cljs.core.next.call(null,seq__41442_41497__$1);
var G__41510 = null;
var G__41511 = (0);
var G__41512 = (0);
seq__41442_41482 = G__41509;
chunk__41443_41483 = G__41510;
count__41444_41484 = G__41511;
i__41445_41485 = G__41512;
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

var seq__41456 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__41457 = null;
var count__41458 = (0);
var i__41459 = (0);
while(true){
if((i__41459 < count__41458)){
var role = cljs.core._nth.call(null,chunk__41457,i__41459);
var temp__4657__auto___41513__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41513__$1)){
var spec_41514 = temp__4657__auto___41513__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41514));
} else {
}

var G__41515 = seq__41456;
var G__41516 = chunk__41457;
var G__41517 = count__41458;
var G__41518 = (i__41459 + (1));
seq__41456 = G__41515;
chunk__41457 = G__41516;
count__41458 = G__41517;
i__41459 = G__41518;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__41456);
if(temp__4657__auto____$1){
var seq__41456__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__41456__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__41456__$1);
var G__41519 = cljs.core.chunk_rest.call(null,seq__41456__$1);
var G__41520 = c__26790__auto__;
var G__41521 = cljs.core.count.call(null,c__26790__auto__);
var G__41522 = (0);
seq__41456 = G__41519;
chunk__41457 = G__41520;
count__41458 = G__41521;
i__41459 = G__41522;
continue;
} else {
var role = cljs.core.first.call(null,seq__41456__$1);
var temp__4657__auto___41523__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___41523__$2)){
var spec_41524 = temp__4657__auto___41523__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_41524));
} else {
}

var G__41525 = cljs.core.next.call(null,seq__41456__$1);
var G__41526 = null;
var G__41527 = (0);
var G__41528 = (0);
seq__41456 = G__41525;
chunk__41457 = G__41526;
count__41458 = G__41527;
i__41459 = G__41528;
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

//# sourceMappingURL=repl.js.map?rel=1499706515282