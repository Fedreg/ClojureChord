// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__90891){
var map__90892 = p__90891;
var map__90892__$1 = ((((!((map__90892 == null)))?((((map__90892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90892):map__90892);
var m = map__90892__$1;
var n = cljs.core.get.call(null,map__90892__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__90892__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5278__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5278__auto__)){
var ns = temp__5278__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/")].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__90894_90916 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__90895_90917 = null;
var count__90896_90918 = (0);
var i__90897_90919 = (0);
while(true){
if((i__90897_90919 < count__90896_90918)){
var f_90920 = cljs.core._nth.call(null,chunk__90895_90917,i__90897_90919);
cljs.core.println.call(null,"  ",f_90920);

var G__90921 = seq__90894_90916;
var G__90922 = chunk__90895_90917;
var G__90923 = count__90896_90918;
var G__90924 = (i__90897_90919 + (1));
seq__90894_90916 = G__90921;
chunk__90895_90917 = G__90922;
count__90896_90918 = G__90923;
i__90897_90919 = G__90924;
continue;
} else {
var temp__5278__auto___90925 = cljs.core.seq.call(null,seq__90894_90916);
if(temp__5278__auto___90925){
var seq__90894_90926__$1 = temp__5278__auto___90925;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90894_90926__$1)){
var c__29481__auto___90927 = cljs.core.chunk_first.call(null,seq__90894_90926__$1);
var G__90928 = cljs.core.chunk_rest.call(null,seq__90894_90926__$1);
var G__90929 = c__29481__auto___90927;
var G__90930 = cljs.core.count.call(null,c__29481__auto___90927);
var G__90931 = (0);
seq__90894_90916 = G__90928;
chunk__90895_90917 = G__90929;
count__90896_90918 = G__90930;
i__90897_90919 = G__90931;
continue;
} else {
var f_90932 = cljs.core.first.call(null,seq__90894_90926__$1);
cljs.core.println.call(null,"  ",f_90932);

var G__90933 = cljs.core.next.call(null,seq__90894_90926__$1);
var G__90934 = null;
var G__90935 = (0);
var G__90936 = (0);
seq__90894_90916 = G__90933;
chunk__90895_90917 = G__90934;
count__90896_90918 = G__90935;
i__90897_90919 = G__90936;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_90937 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28569__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_90937);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_90937)))?cljs.core.second.call(null,arglists_90937):arglists_90937));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n  Please see http://clojure.org/special_forms#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
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
var seq__90898_90938 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__90899_90939 = null;
var count__90900_90940 = (0);
var i__90901_90941 = (0);
while(true){
if((i__90901_90941 < count__90900_90940)){
var vec__90902_90942 = cljs.core._nth.call(null,chunk__90899_90939,i__90901_90941);
var name_90943 = cljs.core.nth.call(null,vec__90902_90942,(0),null);
var map__90905_90944 = cljs.core.nth.call(null,vec__90902_90942,(1),null);
var map__90905_90945__$1 = ((((!((map__90905_90944 == null)))?((((map__90905_90944.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90905_90944.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90905_90944):map__90905_90944);
var doc_90946 = cljs.core.get.call(null,map__90905_90945__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_90947 = cljs.core.get.call(null,map__90905_90945__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_90943);

cljs.core.println.call(null," ",arglists_90947);

if(cljs.core.truth_(doc_90946)){
cljs.core.println.call(null," ",doc_90946);
} else {
}

var G__90948 = seq__90898_90938;
var G__90949 = chunk__90899_90939;
var G__90950 = count__90900_90940;
var G__90951 = (i__90901_90941 + (1));
seq__90898_90938 = G__90948;
chunk__90899_90939 = G__90949;
count__90900_90940 = G__90950;
i__90901_90941 = G__90951;
continue;
} else {
var temp__5278__auto___90952 = cljs.core.seq.call(null,seq__90898_90938);
if(temp__5278__auto___90952){
var seq__90898_90953__$1 = temp__5278__auto___90952;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90898_90953__$1)){
var c__29481__auto___90954 = cljs.core.chunk_first.call(null,seq__90898_90953__$1);
var G__90955 = cljs.core.chunk_rest.call(null,seq__90898_90953__$1);
var G__90956 = c__29481__auto___90954;
var G__90957 = cljs.core.count.call(null,c__29481__auto___90954);
var G__90958 = (0);
seq__90898_90938 = G__90955;
chunk__90899_90939 = G__90956;
count__90900_90940 = G__90957;
i__90901_90941 = G__90958;
continue;
} else {
var vec__90907_90959 = cljs.core.first.call(null,seq__90898_90953__$1);
var name_90960 = cljs.core.nth.call(null,vec__90907_90959,(0),null);
var map__90910_90961 = cljs.core.nth.call(null,vec__90907_90959,(1),null);
var map__90910_90962__$1 = ((((!((map__90910_90961 == null)))?((((map__90910_90961.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__90910_90961.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__90910_90961):map__90910_90961);
var doc_90963 = cljs.core.get.call(null,map__90910_90962__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_90964 = cljs.core.get.call(null,map__90910_90962__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_90960);

cljs.core.println.call(null," ",arglists_90964);

if(cljs.core.truth_(doc_90963)){
cljs.core.println.call(null," ",doc_90963);
} else {
}

var G__90965 = cljs.core.next.call(null,seq__90898_90953__$1);
var G__90966 = null;
var G__90967 = (0);
var G__90968 = (0);
seq__90898_90938 = G__90965;
chunk__90899_90939 = G__90966;
count__90900_90940 = G__90967;
i__90901_90941 = G__90968;
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
var temp__5278__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5278__auto__)){
var fnspec = temp__5278__auto__;
cljs.core.print.call(null,"Spec");

var seq__90912 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__90913 = null;
var count__90914 = (0);
var i__90915 = (0);
while(true){
if((i__90915 < count__90914)){
var role = cljs.core._nth.call(null,chunk__90913,i__90915);
var temp__5278__auto___90969__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___90969__$1)){
var spec_90970 = temp__5278__auto___90969__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_90970));
} else {
}

var G__90971 = seq__90912;
var G__90972 = chunk__90913;
var G__90973 = count__90914;
var G__90974 = (i__90915 + (1));
seq__90912 = G__90971;
chunk__90913 = G__90972;
count__90914 = G__90973;
i__90915 = G__90974;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__90912);
if(temp__5278__auto____$1){
var seq__90912__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__90912__$1)){
var c__29481__auto__ = cljs.core.chunk_first.call(null,seq__90912__$1);
var G__90975 = cljs.core.chunk_rest.call(null,seq__90912__$1);
var G__90976 = c__29481__auto__;
var G__90977 = cljs.core.count.call(null,c__29481__auto__);
var G__90978 = (0);
seq__90912 = G__90975;
chunk__90913 = G__90976;
count__90914 = G__90977;
i__90915 = G__90978;
continue;
} else {
var role = cljs.core.first.call(null,seq__90912__$1);
var temp__5278__auto___90979__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___90979__$2)){
var spec_90980 = temp__5278__auto___90979__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_90980));
} else {
}

var G__90981 = cljs.core.next.call(null,seq__90912__$1);
var G__90982 = null;
var G__90983 = (0);
var G__90984 = (0);
seq__90912 = G__90981;
chunk__90913 = G__90982;
count__90914 = G__90983;
i__90915 = G__90984;
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

//# sourceMappingURL=repl.js.map?rel=1500526710318