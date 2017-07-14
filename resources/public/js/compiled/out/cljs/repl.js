// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38908){
var map__38933 = p__38908;
var map__38933__$1 = ((((!((map__38933 == null)))?((((map__38933.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38933.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38933):map__38933);
var m = map__38933__$1;
var n = cljs.core.get.call(null,map__38933__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38933__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38935_38957 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38936_38958 = null;
var count__38937_38959 = (0);
var i__38938_38960 = (0);
while(true){
if((i__38938_38960 < count__38937_38959)){
var f_38961 = cljs.core._nth.call(null,chunk__38936_38958,i__38938_38960);
cljs.core.println.call(null,"  ",f_38961);

var G__38962 = seq__38935_38957;
var G__38963 = chunk__38936_38958;
var G__38964 = count__38937_38959;
var G__38965 = (i__38938_38960 + (1));
seq__38935_38957 = G__38962;
chunk__38936_38958 = G__38963;
count__38937_38959 = G__38964;
i__38938_38960 = G__38965;
continue;
} else {
var temp__4657__auto___38966 = cljs.core.seq.call(null,seq__38935_38957);
if(temp__4657__auto___38966){
var seq__38935_38967__$1 = temp__4657__auto___38966;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38935_38967__$1)){
var c__26790__auto___38968 = cljs.core.chunk_first.call(null,seq__38935_38967__$1);
var G__38969 = cljs.core.chunk_rest.call(null,seq__38935_38967__$1);
var G__38970 = c__26790__auto___38968;
var G__38971 = cljs.core.count.call(null,c__26790__auto___38968);
var G__38972 = (0);
seq__38935_38957 = G__38969;
chunk__38936_38958 = G__38970;
count__38937_38959 = G__38971;
i__38938_38960 = G__38972;
continue;
} else {
var f_38973 = cljs.core.first.call(null,seq__38935_38967__$1);
cljs.core.println.call(null,"  ",f_38973);

var G__38974 = cljs.core.next.call(null,seq__38935_38967__$1);
var G__38975 = null;
var G__38976 = (0);
var G__38977 = (0);
seq__38935_38957 = G__38974;
chunk__38936_38958 = G__38975;
count__38937_38959 = G__38976;
i__38938_38960 = G__38977;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38978 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38978);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38978)))?cljs.core.second.call(null,arglists_38978):arglists_38978));
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
var seq__38939_38979 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38940_38980 = null;
var count__38941_38981 = (0);
var i__38942_38982 = (0);
while(true){
if((i__38942_38982 < count__38941_38981)){
var vec__38943_38983 = cljs.core._nth.call(null,chunk__38940_38980,i__38942_38982);
var name_38984 = cljs.core.nth.call(null,vec__38943_38983,(0),null);
var map__38946_38985 = cljs.core.nth.call(null,vec__38943_38983,(1),null);
var map__38946_38986__$1 = ((((!((map__38946_38985 == null)))?((((map__38946_38985.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38946_38985.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38946_38985):map__38946_38985);
var doc_38987 = cljs.core.get.call(null,map__38946_38986__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38988 = cljs.core.get.call(null,map__38946_38986__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38984);

cljs.core.println.call(null," ",arglists_38988);

if(cljs.core.truth_(doc_38987)){
cljs.core.println.call(null," ",doc_38987);
} else {
}

var G__38989 = seq__38939_38979;
var G__38990 = chunk__38940_38980;
var G__38991 = count__38941_38981;
var G__38992 = (i__38942_38982 + (1));
seq__38939_38979 = G__38989;
chunk__38940_38980 = G__38990;
count__38941_38981 = G__38991;
i__38942_38982 = G__38992;
continue;
} else {
var temp__4657__auto___38993 = cljs.core.seq.call(null,seq__38939_38979);
if(temp__4657__auto___38993){
var seq__38939_38994__$1 = temp__4657__auto___38993;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38939_38994__$1)){
var c__26790__auto___38995 = cljs.core.chunk_first.call(null,seq__38939_38994__$1);
var G__38996 = cljs.core.chunk_rest.call(null,seq__38939_38994__$1);
var G__38997 = c__26790__auto___38995;
var G__38998 = cljs.core.count.call(null,c__26790__auto___38995);
var G__38999 = (0);
seq__38939_38979 = G__38996;
chunk__38940_38980 = G__38997;
count__38941_38981 = G__38998;
i__38942_38982 = G__38999;
continue;
} else {
var vec__38948_39000 = cljs.core.first.call(null,seq__38939_38994__$1);
var name_39001 = cljs.core.nth.call(null,vec__38948_39000,(0),null);
var map__38951_39002 = cljs.core.nth.call(null,vec__38948_39000,(1),null);
var map__38951_39003__$1 = ((((!((map__38951_39002 == null)))?((((map__38951_39002.cljs$lang$protocol_mask$partition0$ & (64))) || (map__38951_39002.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38951_39002):map__38951_39002);
var doc_39004 = cljs.core.get.call(null,map__38951_39003__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_39005 = cljs.core.get.call(null,map__38951_39003__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_39001);

cljs.core.println.call(null," ",arglists_39005);

if(cljs.core.truth_(doc_39004)){
cljs.core.println.call(null," ",doc_39004);
} else {
}

var G__39006 = cljs.core.next.call(null,seq__38939_38994__$1);
var G__39007 = null;
var G__39008 = (0);
var G__39009 = (0);
seq__38939_38979 = G__39006;
chunk__38940_38980 = G__39007;
count__38941_38981 = G__39008;
i__38942_38982 = G__39009;
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

var seq__38953 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38954 = null;
var count__38955 = (0);
var i__38956 = (0);
while(true){
if((i__38956 < count__38955)){
var role = cljs.core._nth.call(null,chunk__38954,i__38956);
var temp__4657__auto___39010__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39010__$1)){
var spec_39011 = temp__4657__auto___39010__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39011));
} else {
}

var G__39012 = seq__38953;
var G__39013 = chunk__38954;
var G__39014 = count__38955;
var G__39015 = (i__38956 + (1));
seq__38953 = G__39012;
chunk__38954 = G__39013;
count__38955 = G__39014;
i__38956 = G__39015;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__38953);
if(temp__4657__auto____$1){
var seq__38953__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38953__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__38953__$1);
var G__39016 = cljs.core.chunk_rest.call(null,seq__38953__$1);
var G__39017 = c__26790__auto__;
var G__39018 = cljs.core.count.call(null,c__26790__auto__);
var G__39019 = (0);
seq__38953 = G__39016;
chunk__38954 = G__39017;
count__38955 = G__39018;
i__38956 = G__39019;
continue;
} else {
var role = cljs.core.first.call(null,seq__38953__$1);
var temp__4657__auto___39020__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___39020__$2)){
var spec_39021 = temp__4657__auto___39020__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_39021));
} else {
}

var G__39022 = cljs.core.next.call(null,seq__38953__$1);
var G__39023 = null;
var G__39024 = (0);
var G__39025 = (0);
seq__38953 = G__39022;
chunk__38954 = G__39023;
count__38955 = G__39024;
i__38956 = G__39025;
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

//# sourceMappingURL=repl.js.map?rel=1500064913349