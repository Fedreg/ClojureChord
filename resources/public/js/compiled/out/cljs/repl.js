// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36391){
var map__36416 = p__36391;
var map__36416__$1 = ((((!((map__36416 == null)))?((((map__36416.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36416.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36416):map__36416);
var m = map__36416__$1;
var n = cljs.core.get.call(null,map__36416__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36416__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36418_36440 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36419_36441 = null;
var count__36420_36442 = (0);
var i__36421_36443 = (0);
while(true){
if((i__36421_36443 < count__36420_36442)){
var f_36444 = cljs.core._nth.call(null,chunk__36419_36441,i__36421_36443);
cljs.core.println.call(null,"  ",f_36444);

var G__36445 = seq__36418_36440;
var G__36446 = chunk__36419_36441;
var G__36447 = count__36420_36442;
var G__36448 = (i__36421_36443 + (1));
seq__36418_36440 = G__36445;
chunk__36419_36441 = G__36446;
count__36420_36442 = G__36447;
i__36421_36443 = G__36448;
continue;
} else {
var temp__4657__auto___36449 = cljs.core.seq.call(null,seq__36418_36440);
if(temp__4657__auto___36449){
var seq__36418_36450__$1 = temp__4657__auto___36449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36418_36450__$1)){
var c__26790__auto___36451 = cljs.core.chunk_first.call(null,seq__36418_36450__$1);
var G__36452 = cljs.core.chunk_rest.call(null,seq__36418_36450__$1);
var G__36453 = c__26790__auto___36451;
var G__36454 = cljs.core.count.call(null,c__26790__auto___36451);
var G__36455 = (0);
seq__36418_36440 = G__36452;
chunk__36419_36441 = G__36453;
count__36420_36442 = G__36454;
i__36421_36443 = G__36455;
continue;
} else {
var f_36456 = cljs.core.first.call(null,seq__36418_36450__$1);
cljs.core.println.call(null,"  ",f_36456);

var G__36457 = cljs.core.next.call(null,seq__36418_36450__$1);
var G__36458 = null;
var G__36459 = (0);
var G__36460 = (0);
seq__36418_36440 = G__36457;
chunk__36419_36441 = G__36458;
count__36420_36442 = G__36459;
i__36421_36443 = G__36460;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36461 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36461);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36461)))?cljs.core.second.call(null,arglists_36461):arglists_36461));
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
var seq__36422_36462 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36423_36463 = null;
var count__36424_36464 = (0);
var i__36425_36465 = (0);
while(true){
if((i__36425_36465 < count__36424_36464)){
var vec__36426_36466 = cljs.core._nth.call(null,chunk__36423_36463,i__36425_36465);
var name_36467 = cljs.core.nth.call(null,vec__36426_36466,(0),null);
var map__36429_36468 = cljs.core.nth.call(null,vec__36426_36466,(1),null);
var map__36429_36469__$1 = ((((!((map__36429_36468 == null)))?((((map__36429_36468.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36429_36468.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36429_36468):map__36429_36468);
var doc_36470 = cljs.core.get.call(null,map__36429_36469__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36471 = cljs.core.get.call(null,map__36429_36469__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36467);

cljs.core.println.call(null," ",arglists_36471);

if(cljs.core.truth_(doc_36470)){
cljs.core.println.call(null," ",doc_36470);
} else {
}

var G__36472 = seq__36422_36462;
var G__36473 = chunk__36423_36463;
var G__36474 = count__36424_36464;
var G__36475 = (i__36425_36465 + (1));
seq__36422_36462 = G__36472;
chunk__36423_36463 = G__36473;
count__36424_36464 = G__36474;
i__36425_36465 = G__36475;
continue;
} else {
var temp__4657__auto___36476 = cljs.core.seq.call(null,seq__36422_36462);
if(temp__4657__auto___36476){
var seq__36422_36477__$1 = temp__4657__auto___36476;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36422_36477__$1)){
var c__26790__auto___36478 = cljs.core.chunk_first.call(null,seq__36422_36477__$1);
var G__36479 = cljs.core.chunk_rest.call(null,seq__36422_36477__$1);
var G__36480 = c__26790__auto___36478;
var G__36481 = cljs.core.count.call(null,c__26790__auto___36478);
var G__36482 = (0);
seq__36422_36462 = G__36479;
chunk__36423_36463 = G__36480;
count__36424_36464 = G__36481;
i__36425_36465 = G__36482;
continue;
} else {
var vec__36431_36483 = cljs.core.first.call(null,seq__36422_36477__$1);
var name_36484 = cljs.core.nth.call(null,vec__36431_36483,(0),null);
var map__36434_36485 = cljs.core.nth.call(null,vec__36431_36483,(1),null);
var map__36434_36486__$1 = ((((!((map__36434_36485 == null)))?((((map__36434_36485.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36434_36485.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36434_36485):map__36434_36485);
var doc_36487 = cljs.core.get.call(null,map__36434_36486__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36488 = cljs.core.get.call(null,map__36434_36486__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36484);

cljs.core.println.call(null," ",arglists_36488);

if(cljs.core.truth_(doc_36487)){
cljs.core.println.call(null," ",doc_36487);
} else {
}

var G__36489 = cljs.core.next.call(null,seq__36422_36477__$1);
var G__36490 = null;
var G__36491 = (0);
var G__36492 = (0);
seq__36422_36462 = G__36489;
chunk__36423_36463 = G__36490;
count__36424_36464 = G__36491;
i__36425_36465 = G__36492;
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

var seq__36436 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36437 = null;
var count__36438 = (0);
var i__36439 = (0);
while(true){
if((i__36439 < count__36438)){
var role = cljs.core._nth.call(null,chunk__36437,i__36439);
var temp__4657__auto___36493__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36493__$1)){
var spec_36494 = temp__4657__auto___36493__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36494));
} else {
}

var G__36495 = seq__36436;
var G__36496 = chunk__36437;
var G__36497 = count__36438;
var G__36498 = (i__36439 + (1));
seq__36436 = G__36495;
chunk__36437 = G__36496;
count__36438 = G__36497;
i__36439 = G__36498;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__36436);
if(temp__4657__auto____$1){
var seq__36436__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36436__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__36436__$1);
var G__36499 = cljs.core.chunk_rest.call(null,seq__36436__$1);
var G__36500 = c__26790__auto__;
var G__36501 = cljs.core.count.call(null,c__26790__auto__);
var G__36502 = (0);
seq__36436 = G__36499;
chunk__36437 = G__36500;
count__36438 = G__36501;
i__36439 = G__36502;
continue;
} else {
var role = cljs.core.first.call(null,seq__36436__$1);
var temp__4657__auto___36503__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___36503__$2)){
var spec_36504 = temp__4657__auto___36503__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_36504));
} else {
}

var G__36505 = cljs.core.next.call(null,seq__36436__$1);
var G__36506 = null;
var G__36507 = (0);
var G__36508 = (0);
seq__36436 = G__36505;
chunk__36437 = G__36506;
count__36438 = G__36507;
i__36439 = G__36508;
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

//# sourceMappingURL=repl.js.map?rel=1499543342201