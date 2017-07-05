// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__35771){
var map__35796 = p__35771;
var map__35796__$1 = ((((!((map__35796 == null)))?((((map__35796.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35796.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35796):map__35796);
var m = map__35796__$1;
var n = cljs.core.get.call(null,map__35796__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__35796__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__35798_35820 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35799_35821 = null;
var count__35800_35822 = (0);
var i__35801_35823 = (0);
while(true){
if((i__35801_35823 < count__35800_35822)){
var f_35824 = cljs.core._nth.call(null,chunk__35799_35821,i__35801_35823);
cljs.core.println.call(null,"  ",f_35824);

var G__35825 = seq__35798_35820;
var G__35826 = chunk__35799_35821;
var G__35827 = count__35800_35822;
var G__35828 = (i__35801_35823 + (1));
seq__35798_35820 = G__35825;
chunk__35799_35821 = G__35826;
count__35800_35822 = G__35827;
i__35801_35823 = G__35828;
continue;
} else {
var temp__4657__auto___35829 = cljs.core.seq.call(null,seq__35798_35820);
if(temp__4657__auto___35829){
var seq__35798_35830__$1 = temp__4657__auto___35829;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35798_35830__$1)){
var c__26790__auto___35831 = cljs.core.chunk_first.call(null,seq__35798_35830__$1);
var G__35832 = cljs.core.chunk_rest.call(null,seq__35798_35830__$1);
var G__35833 = c__26790__auto___35831;
var G__35834 = cljs.core.count.call(null,c__26790__auto___35831);
var G__35835 = (0);
seq__35798_35820 = G__35832;
chunk__35799_35821 = G__35833;
count__35800_35822 = G__35834;
i__35801_35823 = G__35835;
continue;
} else {
var f_35836 = cljs.core.first.call(null,seq__35798_35830__$1);
cljs.core.println.call(null,"  ",f_35836);

var G__35837 = cljs.core.next.call(null,seq__35798_35830__$1);
var G__35838 = null;
var G__35839 = (0);
var G__35840 = (0);
seq__35798_35820 = G__35837;
chunk__35799_35821 = G__35838;
count__35800_35822 = G__35839;
i__35801_35823 = G__35840;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_35841 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__25979__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_35841);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_35841)))?cljs.core.second.call(null,arglists_35841):arglists_35841));
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
var seq__35802_35842 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__35803_35843 = null;
var count__35804_35844 = (0);
var i__35805_35845 = (0);
while(true){
if((i__35805_35845 < count__35804_35844)){
var vec__35806_35846 = cljs.core._nth.call(null,chunk__35803_35843,i__35805_35845);
var name_35847 = cljs.core.nth.call(null,vec__35806_35846,(0),null);
var map__35809_35848 = cljs.core.nth.call(null,vec__35806_35846,(1),null);
var map__35809_35849__$1 = ((((!((map__35809_35848 == null)))?((((map__35809_35848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35809_35848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35809_35848):map__35809_35848);
var doc_35850 = cljs.core.get.call(null,map__35809_35849__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35851 = cljs.core.get.call(null,map__35809_35849__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35847);

cljs.core.println.call(null," ",arglists_35851);

if(cljs.core.truth_(doc_35850)){
cljs.core.println.call(null," ",doc_35850);
} else {
}

var G__35852 = seq__35802_35842;
var G__35853 = chunk__35803_35843;
var G__35854 = count__35804_35844;
var G__35855 = (i__35805_35845 + (1));
seq__35802_35842 = G__35852;
chunk__35803_35843 = G__35853;
count__35804_35844 = G__35854;
i__35805_35845 = G__35855;
continue;
} else {
var temp__4657__auto___35856 = cljs.core.seq.call(null,seq__35802_35842);
if(temp__4657__auto___35856){
var seq__35802_35857__$1 = temp__4657__auto___35856;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35802_35857__$1)){
var c__26790__auto___35858 = cljs.core.chunk_first.call(null,seq__35802_35857__$1);
var G__35859 = cljs.core.chunk_rest.call(null,seq__35802_35857__$1);
var G__35860 = c__26790__auto___35858;
var G__35861 = cljs.core.count.call(null,c__26790__auto___35858);
var G__35862 = (0);
seq__35802_35842 = G__35859;
chunk__35803_35843 = G__35860;
count__35804_35844 = G__35861;
i__35805_35845 = G__35862;
continue;
} else {
var vec__35811_35863 = cljs.core.first.call(null,seq__35802_35857__$1);
var name_35864 = cljs.core.nth.call(null,vec__35811_35863,(0),null);
var map__35814_35865 = cljs.core.nth.call(null,vec__35811_35863,(1),null);
var map__35814_35866__$1 = ((((!((map__35814_35865 == null)))?((((map__35814_35865.cljs$lang$protocol_mask$partition0$ & (64))) || (map__35814_35865.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35814_35865):map__35814_35865);
var doc_35867 = cljs.core.get.call(null,map__35814_35866__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_35868 = cljs.core.get.call(null,map__35814_35866__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_35864);

cljs.core.println.call(null," ",arglists_35868);

if(cljs.core.truth_(doc_35867)){
cljs.core.println.call(null," ",doc_35867);
} else {
}

var G__35869 = cljs.core.next.call(null,seq__35802_35857__$1);
var G__35870 = null;
var G__35871 = (0);
var G__35872 = (0);
seq__35802_35842 = G__35869;
chunk__35803_35843 = G__35870;
count__35804_35844 = G__35871;
i__35805_35845 = G__35872;
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

var seq__35816 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__35817 = null;
var count__35818 = (0);
var i__35819 = (0);
while(true){
if((i__35819 < count__35818)){
var role = cljs.core._nth.call(null,chunk__35817,i__35819);
var temp__4657__auto___35873__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35873__$1)){
var spec_35874 = temp__4657__auto___35873__$1;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35874));
} else {
}

var G__35875 = seq__35816;
var G__35876 = chunk__35817;
var G__35877 = count__35818;
var G__35878 = (i__35819 + (1));
seq__35816 = G__35875;
chunk__35817 = G__35876;
count__35818 = G__35877;
i__35819 = G__35878;
continue;
} else {
var temp__4657__auto____$1 = cljs.core.seq.call(null,seq__35816);
if(temp__4657__auto____$1){
var seq__35816__$1 = temp__4657__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35816__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__35816__$1);
var G__35879 = cljs.core.chunk_rest.call(null,seq__35816__$1);
var G__35880 = c__26790__auto__;
var G__35881 = cljs.core.count.call(null,c__26790__auto__);
var G__35882 = (0);
seq__35816 = G__35879;
chunk__35817 = G__35880;
count__35818 = G__35881;
i__35819 = G__35882;
continue;
} else {
var role = cljs.core.first.call(null,seq__35816__$1);
var temp__4657__auto___35883__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__4657__auto___35883__$2)){
var spec_35884 = temp__4657__auto___35883__$2;
cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec_35884));
} else {
}

var G__35885 = cljs.core.next.call(null,seq__35816__$1);
var G__35886 = null;
var G__35887 = (0);
var G__35888 = (0);
seq__35816 = G__35885;
chunk__35817 = G__35886;
count__35818 = G__35887;
i__35819 = G__35888;
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

//# sourceMappingURL=repl.js.map?rel=1499270877908