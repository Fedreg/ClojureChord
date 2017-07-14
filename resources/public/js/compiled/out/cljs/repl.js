// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__56455){
var map__56480 = p__56455;
var map__56480__$1 = ((((!((map__56480 == null)))?((((map__56480.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56480.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56480):map__56480);
var m = map__56480__$1;
var n = cljs.core.get.call(null,map__56480__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__56480__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__56482_56504 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56483_56505 = null;
var count__56484_56506 = (0);
var i__56485_56507 = (0);
while(true){
if((i__56485_56507 < count__56484_56506)){
var f_56508 = cljs.core._nth.call(null,chunk__56483_56505,i__56485_56507);
cljs.core.println.call(null,"  ",f_56508);

var G__56509 = seq__56482_56504;
var G__56510 = chunk__56483_56505;
var G__56511 = count__56484_56506;
var G__56512 = (i__56485_56507 + (1));
seq__56482_56504 = G__56509;
chunk__56483_56505 = G__56510;
count__56484_56506 = G__56511;
i__56485_56507 = G__56512;
continue;
} else {
var temp__4657__auto___56513 = cljs.core.seq.call(null,seq__56482_56504);
if(temp__4657__auto___56513){
var seq__56482_56514__$1 = temp__4657__auto___56513;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56482_56514__$1)){
var c__26790__auto___56515 = cljs.core.chunk_first.call(null,seq__56482_56514__$1);
var G__56516 = cljs.core.chunk_rest.call(null,seq__56482_56514__$1);
var G__56517 = c__26790__auto___56515;
var G__56518 = cljs.core.count.call(null,c__26790__auto___56515);
var G__56519 = (0);
seq__56482_56504 = G__56516;
chunk__56483_56505 = G__56517;
count__56484_56506 = G__56518;
i__56485_56507 = G__56519;
continue;
} else {
var f_56520 = cljs.core.first.call(null,seq__56482_56514__$1);
cljs.core.println.call(null,"  ",f_56520);

var G__56521 = cljs.core.next.call(null,seq__56482_56514__$1);
var G__56522 = null;
var G__56523 = (0);
var G__56524 = (0);
seq__56482_56504 = G__56521;
chunk__56483_56505 = G__56522;
count__56484_56506 = G__56523;
i__56485_56507 = G__56524;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_56525 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_56525);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_56525)))?cljs.core.second.call(null,arglists_56525):arglists_56525));
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
var seq__56486_56526 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__56487_56527 = null;
var count__56488_56528 = (0);
var i__56489_56529 = (0);
while(true){
if((i__56489_56529 < count__56488_56528)){
var vec__56490_56530 = cljs.core._nth.call(null,chunk__56487_56527,i__56489_56529);
var name_56531 = cljs.core.nth.call(null,vec__56490_56530,(0),null);
var map__56493_56532 = cljs.core.nth.call(null,vec__56490_56530,(1),null);
var map__56493_56533__$1 = ((((!((map__56493_56532 == null)))?((((map__56493_56532.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56493_56532.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56493_56532):map__56493_56532);
var doc_56534 = cljs.core.get.call(null,map__56493_56533__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56535 = cljs.core.get.call(null,map__56493_56533__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56531);

cljs.core.println.call(null," ",arglists_56535);

if(cljs.core.truth_(doc_56534)){
cljs.core.println.call(null," ",doc_56534);
} else {
}

var G__56536 = seq__56486_56526;
var G__56537 = chunk__56487_56527;
var G__56538 = count__56488_56528;
var G__56539 = (i__56489_56529 + (1));
seq__56486_56526 = G__56536;
chunk__56487_56527 = G__56537;
count__56488_56528 = G__56538;
i__56489_56529 = G__56539;
continue;
} else {
var temp__4657__auto___56540 = cljs.core.seq.call(null,seq__56486_56526);
if(temp__4657__auto___56540){
var seq__56486_56541__$1 = temp__4657__auto___56540;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56486_56541__$1)){
var c__26790__auto___56542 = cljs.core.chunk_first.call(null,seq__56486_56541__$1);
var G__56543 = cljs.core.chunk_rest.call(null,seq__56486_56541__$1);
var G__56544 = c__26790__auto___56542;
var G__56545 = cljs.core.count.call(null,c__26790__auto___56542);
var G__56546 = (0);
seq__56486_56526 = G__56543;
chunk__56487_56527 = G__56544;
count__56488_56528 = G__56545;
i__56489_56529 = G__56546;
continue;
} else {
var vec__56495_56547 = cljs.core.first.call(null,seq__56486_56541__$1);
var name_56548 = cljs.core.nth.call(null,vec__56495_56547,(0),null);
var map__56498_56549 = cljs.core.nth.call(null,vec__56495_56547,(1),null);
var map__56498_56550__$1 = ((((!((map__56498_56549 == null)))?((((map__56498_56549.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56498_56549.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56498_56549):map__56498_56549);
var doc_56551 = cljs.core.get.call(null,map__56498_56550__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_56552 = cljs.core.get.call(null,map__56498_56550__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_56548);

cljs.core.println.call(null," ",arglists_56552);

if(cljs.core.truth_(doc_56551)){
cljs.core.println.call(null," ",doc_56551);
} else {
}

var G__56553 = cljs.core.next.call(null,seq__56486_56541__$1);
var G__56554 = null;
var G__56555 = (0);
var G__56556 = (0);
seq__56486_56526 = G__56553;
chunk__56487_56527 = G__56554;
count__56488_56528 = G__56555;
i__56489_56529 = G__56556;
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

var seq__56500 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__56501 = null;
var count__56502 = (0);
var i__56503 = (0);
while(true){
if((i__56503 < count__56502)){
var role = cljs.core._nth.call(null,chunk__56501,i__56503);
var temp__4657__auto___56557__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___56557__$1)){
var spec_56558 = temp__4657__auto___56557__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_56558));
} else {
}

var G__56559 = seq__56500;
var G__56560 = chunk__56501;
var G__56561 = count__56502;
var G__56562 = (i__56503 + (1));
seq__56500 = G__56559;
chunk__56501 = G__56560;
count__56502 = G__56561;
i__56503 = G__56562;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__56500);
if(temp__4657__auto____$1){
var seq__56500__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__56500__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__56500__$1);
var G__56563 = cljs.core.chunk_rest.call(null,seq__56500__$1);
var G__56564 = c__26790__auto__;
var G__56565 = cljs.core.count.call(null,c__26790__auto__);
var G__56566 = (0);
seq__56500 = G__56563;
chunk__56501 = G__56564;
count__56502 = G__56565;
i__56503 = G__56566;
continue;
} else {
var role = cljs.core.first.call(null,seq__56500__$1);
var temp__4657__auto___56567__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___56567__$2)){
var spec_56568 = temp__4657__auto___56567__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_56568));
} else {
}

var G__56569 = cljs.core.next.call(null,seq__56500__$1);
var G__56570 = null;
var G__56571 = (0);
var G__56572 = (0);
seq__56500 = G__56569;
chunk__56501 = G__56570;
count__56502 = G__56571;
i__56503 = G__56572;
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

//# sourceMappingURL=repl.js.map?rel=1500065518943