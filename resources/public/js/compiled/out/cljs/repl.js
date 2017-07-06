// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32400){
var map__32425 = p__32400;
var map__32425__$1 = ((((!((map__32425 == null)))?((((map__32425.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32425.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32425):map__32425);
var m = map__32425__$1;
var n = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32425__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__32427_32449 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32428_32450 = null;
var count__32429_32451 = (0);
var i__32430_32452 = (0);
while(true){
if((i__32430_32452 < count__32429_32451)){
var f_32453 = cljs.core._nth.call(null,chunk__32428_32450,i__32430_32452);
cljs.core.println.call(null,"  ",f_32453);

var G__32454 = seq__32427_32449;
var G__32455 = chunk__32428_32450;
var G__32456 = count__32429_32451;
var G__32457 = (i__32430_32452 + (1));
seq__32427_32449 = G__32454;
chunk__32428_32450 = G__32455;
count__32429_32451 = G__32456;
i__32430_32452 = G__32457;
continue;
} else {
var temp__4657__auto___32458 = cljs.core.seq.call(null,seq__32427_32449);
if(temp__4657__auto___32458){
var seq__32427_32459__$1 = temp__4657__auto___32458;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32427_32459__$1)){
var c__26790__auto___32460 = cljs.core.chunk_first.call(null,seq__32427_32459__$1);
var G__32461 = cljs.core.chunk_rest.call(null,seq__32427_32459__$1);
var G__32462 = c__26790__auto___32460;
var G__32463 = cljs.core.count.call(null,c__26790__auto___32460);
var G__32464 = (0);
seq__32427_32449 = G__32461;
chunk__32428_32450 = G__32462;
count__32429_32451 = G__32463;
i__32430_32452 = G__32464;
continue;
} else {
var f_32465 = cljs.core.first.call(null,seq__32427_32459__$1);
cljs.core.println.call(null,"  ",f_32465);

var G__32466 = cljs.core.next.call(null,seq__32427_32459__$1);
var G__32467 = null;
var G__32468 = (0);
var G__32469 = (0);
seq__32427_32449 = G__32466;
chunk__32428_32450 = G__32467;
count__32429_32451 = G__32468;
i__32430_32452 = G__32469;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32470 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32470);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32470)))?cljs.core.second.call(null,arglists_32470):arglists_32470));
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
var seq__32431_32471 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32432_32472 = null;
var count__32433_32473 = (0);
var i__32434_32474 = (0);
while(true){
if((i__32434_32474 < count__32433_32473)){
var vec__32435_32475 = cljs.core._nth.call(null,chunk__32432_32472,i__32434_32474);
var name_32476 = cljs.core.nth.call(null,vec__32435_32475,(0),null);
var map__32438_32477 = cljs.core.nth.call(null,vec__32435_32475,(1),null);
var map__32438_32478__$1 = ((((!((map__32438_32477 == null)))?((((map__32438_32477.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32438_32477.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32438_32477):map__32438_32477);
var doc_32479 = cljs.core.get.call(null,map__32438_32478__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32480 = cljs.core.get.call(null,map__32438_32478__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32476);

cljs.core.println.call(null," ",arglists_32480);

if(cljs.core.truth_(doc_32479)){
cljs.core.println.call(null," ",doc_32479);
} else {
}

var G__32481 = seq__32431_32471;
var G__32482 = chunk__32432_32472;
var G__32483 = count__32433_32473;
var G__32484 = (i__32434_32474 + (1));
seq__32431_32471 = G__32481;
chunk__32432_32472 = G__32482;
count__32433_32473 = G__32483;
i__32434_32474 = G__32484;
continue;
} else {
var temp__4657__auto___32485 = cljs.core.seq.call(null,seq__32431_32471);
if(temp__4657__auto___32485){
var seq__32431_32486__$1 = temp__4657__auto___32485;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32431_32486__$1)){
var c__26790__auto___32487 = cljs.core.chunk_first.call(null,seq__32431_32486__$1);
var G__32488 = cljs.core.chunk_rest.call(null,seq__32431_32486__$1);
var G__32489 = c__26790__auto___32487;
var G__32490 = cljs.core.count.call(null,c__26790__auto___32487);
var G__32491 = (0);
seq__32431_32471 = G__32488;
chunk__32432_32472 = G__32489;
count__32433_32473 = G__32490;
i__32434_32474 = G__32491;
continue;
} else {
var vec__32440_32492 = cljs.core.first.call(null,seq__32431_32486__$1);
var name_32493 = cljs.core.nth.call(null,vec__32440_32492,(0),null);
var map__32443_32494 = cljs.core.nth.call(null,vec__32440_32492,(1),null);
var map__32443_32495__$1 = ((((!((map__32443_32494 == null)))?((((map__32443_32494.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32443_32494.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32443_32494):map__32443_32494);
var doc_32496 = cljs.core.get.call(null,map__32443_32495__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32497 = cljs.core.get.call(null,map__32443_32495__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32493);

cljs.core.println.call(null," ",arglists_32497);

if(cljs.core.truth_(doc_32496)){
cljs.core.println.call(null," ",doc_32496);
} else {
}

var G__32498 = cljs.core.next.call(null,seq__32431_32486__$1);
var G__32499 = null;
var G__32500 = (0);
var G__32501 = (0);
seq__32431_32471 = G__32498;
chunk__32432_32472 = G__32499;
count__32433_32473 = G__32500;
i__32434_32474 = G__32501;
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

var seq__32445 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__32446 = null;
var count__32447 = (0);
var i__32448 = (0);
while(true){
if((i__32448 < count__32447)){
var role = cljs.core._nth.call(null,chunk__32446,i__32448);
var temp__4657__auto___32502__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32502__$1)){
var spec_32503 = temp__4657__auto___32502__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32503));
} else {
}

var G__32504 = seq__32445;
var G__32505 = chunk__32446;
var G__32506 = count__32447;
var G__32507 = (i__32448 + (1));
seq__32445 = G__32504;
chunk__32446 = G__32505;
count__32447 = G__32506;
i__32448 = G__32507;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__32445);
if(temp__4657__auto____$1){
var seq__32445__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32445__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__32445__$1);
var G__32508 = cljs.core.chunk_rest.call(null,seq__32445__$1);
var G__32509 = c__26790__auto__;
var G__32510 = cljs.core.count.call(null,c__26790__auto__);
var G__32511 = (0);
seq__32445 = G__32508;
chunk__32446 = G__32509;
count__32447 = G__32510;
i__32448 = G__32511;
continue;
} else {
var role = cljs.core.first.call(null,seq__32445__$1);
var temp__4657__auto___32512__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___32512__$2)){
var spec_32513 = temp__4657__auto___32512__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_32513));
} else {
}

var G__32514 = cljs.core.next.call(null,seq__32445__$1);
var G__32515 = null;
var G__32516 = (0);
var G__32517 = (0);
seq__32445 = G__32514;
chunk__32446 = G__32515;
count__32447 = G__32516;
i__32448 = G__32517;
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

//# sourceMappingURL=repl.js.map?rel=1499366859327