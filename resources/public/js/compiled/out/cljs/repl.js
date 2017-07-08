// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__58489){
var map__58514 = p__58489;
var map__58514__$1 = ((((!((map__58514 == null)))?((((map__58514.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58514.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58514):map__58514);
var m = map__58514__$1;
var n = cljs.core.get.call(null,map__58514__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__58514__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__58516_58538 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58517_58539 = null;
var count__58518_58540 = (0);
var i__58519_58541 = (0);
while(true){
if((i__58519_58541 < count__58518_58540)){
var f_58542 = cljs.core._nth.call(null,chunk__58517_58539,i__58519_58541);
cljs.core.println.call(null,"  ",f_58542);

var G__58543 = seq__58516_58538;
var G__58544 = chunk__58517_58539;
var G__58545 = count__58518_58540;
var G__58546 = (i__58519_58541 + (1));
seq__58516_58538 = G__58543;
chunk__58517_58539 = G__58544;
count__58518_58540 = G__58545;
i__58519_58541 = G__58546;
continue;
} else {
var temp__4657__auto___58547 = cljs.core.seq.call(null,seq__58516_58538);
if(temp__4657__auto___58547){
var seq__58516_58548__$1 = temp__4657__auto___58547;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58516_58548__$1)){
var c__26790__auto___58549 = cljs.core.chunk_first.call(null,seq__58516_58548__$1);
var G__58550 = cljs.core.chunk_rest.call(null,seq__58516_58548__$1);
var G__58551 = c__26790__auto___58549;
var G__58552 = cljs.core.count.call(null,c__26790__auto___58549);
var G__58553 = (0);
seq__58516_58538 = G__58550;
chunk__58517_58539 = G__58551;
count__58518_58540 = G__58552;
i__58519_58541 = G__58553;
continue;
} else {
var f_58554 = cljs.core.first.call(null,seq__58516_58548__$1);
cljs.core.println.call(null,"  ",f_58554);

var G__58555 = cljs.core.next.call(null,seq__58516_58548__$1);
var G__58556 = null;
var G__58557 = (0);
var G__58558 = (0);
seq__58516_58538 = G__58555;
chunk__58517_58539 = G__58556;
count__58518_58540 = G__58557;
i__58519_58541 = G__58558;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_58559 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_58559);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_58559)))?cljs.core.second.call(null,arglists_58559):arglists_58559));
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
var seq__58520_58560 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__58521_58561 = null;
var count__58522_58562 = (0);
var i__58523_58563 = (0);
while(true){
if((i__58523_58563 < count__58522_58562)){
var vec__58524_58564 = cljs.core._nth.call(null,chunk__58521_58561,i__58523_58563);
var name_58565 = cljs.core.nth.call(null,vec__58524_58564,(0),null);
var map__58527_58566 = cljs.core.nth.call(null,vec__58524_58564,(1),null);
var map__58527_58567__$1 = ((((!((map__58527_58566 == null)))?((((map__58527_58566.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58527_58566.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58527_58566):map__58527_58566);
var doc_58568 = cljs.core.get.call(null,map__58527_58567__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58569 = cljs.core.get.call(null,map__58527_58567__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58565);

cljs.core.println.call(null," ",arglists_58569);

if(cljs.core.truth_(doc_58568)){
cljs.core.println.call(null," ",doc_58568);
} else {
}

var G__58570 = seq__58520_58560;
var G__58571 = chunk__58521_58561;
var G__58572 = count__58522_58562;
var G__58573 = (i__58523_58563 + (1));
seq__58520_58560 = G__58570;
chunk__58521_58561 = G__58571;
count__58522_58562 = G__58572;
i__58523_58563 = G__58573;
continue;
} else {
var temp__4657__auto___58574 = cljs.core.seq.call(null,seq__58520_58560);
if(temp__4657__auto___58574){
var seq__58520_58575__$1 = temp__4657__auto___58574;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58520_58575__$1)){
var c__26790__auto___58576 = cljs.core.chunk_first.call(null,seq__58520_58575__$1);
var G__58577 = cljs.core.chunk_rest.call(null,seq__58520_58575__$1);
var G__58578 = c__26790__auto___58576;
var G__58579 = cljs.core.count.call(null,c__26790__auto___58576);
var G__58580 = (0);
seq__58520_58560 = G__58577;
chunk__58521_58561 = G__58578;
count__58522_58562 = G__58579;
i__58523_58563 = G__58580;
continue;
} else {
var vec__58529_58581 = cljs.core.first.call(null,seq__58520_58575__$1);
var name_58582 = cljs.core.nth.call(null,vec__58529_58581,(0),null);
var map__58532_58583 = cljs.core.nth.call(null,vec__58529_58581,(1),null);
var map__58532_58584__$1 = ((((!((map__58532_58583 == null)))?((((map__58532_58583.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58532_58583.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58532_58583):map__58532_58583);
var doc_58585 = cljs.core.get.call(null,map__58532_58584__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_58586 = cljs.core.get.call(null,map__58532_58584__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_58582);

cljs.core.println.call(null," ",arglists_58586);

if(cljs.core.truth_(doc_58585)){
cljs.core.println.call(null," ",doc_58585);
} else {
}

var G__58587 = cljs.core.next.call(null,seq__58520_58575__$1);
var G__58588 = null;
var G__58589 = (0);
var G__58590 = (0);
seq__58520_58560 = G__58587;
chunk__58521_58561 = G__58588;
count__58522_58562 = G__58589;
i__58523_58563 = G__58590;
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

var seq__58534 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__58535 = null;
var count__58536 = (0);
var i__58537 = (0);
while(true){
if((i__58537 < count__58536)){
var role = cljs.core._nth.call(null,chunk__58535,i__58537);
var temp__4657__auto___58591__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___58591__$1)){
var spec_58592 = temp__4657__auto___58591__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_58592));
} else {
}

var G__58593 = seq__58534;
var G__58594 = chunk__58535;
var G__58595 = count__58536;
var G__58596 = (i__58537 + (1));
seq__58534 = G__58593;
chunk__58535 = G__58594;
count__58536 = G__58595;
i__58537 = G__58596;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__58534);
if(temp__4657__auto____$1){
var seq__58534__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__58534__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__58534__$1);
var G__58597 = cljs.core.chunk_rest.call(null,seq__58534__$1);
var G__58598 = c__26790__auto__;
var G__58599 = cljs.core.count.call(null,c__26790__auto__);
var G__58600 = (0);
seq__58534 = G__58597;
chunk__58535 = G__58598;
count__58536 = G__58599;
i__58537 = G__58600;
continue;
} else {
var role = cljs.core.first.call(null,seq__58534__$1);
var temp__4657__auto___58601__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___58601__$2)){
var spec_58602 = temp__4657__auto___58601__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_58602));
} else {
}

var G__58603 = cljs.core.next.call(null,seq__58534__$1);
var G__58604 = null;
var G__58605 = (0);
var G__58606 = (0);
seq__58534 = G__58603;
chunk__58535 = G__58604;
count__58536 = G__58605;
i__58537 = G__58606;
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

//# sourceMappingURL=repl.js.map?rel=1499548771150