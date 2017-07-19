// Compiled by ClojureScript 1.9.671 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__36804){
var map__36805 = p__36804;
var map__36805__$1 = ((((!((map__36805 == null)))?((((map__36805.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36805.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36805):map__36805);
var m = map__36805__$1;
var n = cljs.core.get.call(null,map__36805__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__36805__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__36807_36829 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36808_36830 = null;
var count__36809_36831 = (0);
var i__36810_36832 = (0);
while(true){
if((i__36810_36832 < count__36809_36831)){
var f_36833 = cljs.core._nth.call(null,chunk__36808_36830,i__36810_36832);
cljs.core.println.call(null,"  ",f_36833);

var G__36834 = seq__36807_36829;
var G__36835 = chunk__36808_36830;
var G__36836 = count__36809_36831;
var G__36837 = (i__36810_36832 + (1));
seq__36807_36829 = G__36834;
chunk__36808_36830 = G__36835;
count__36809_36831 = G__36836;
i__36810_36832 = G__36837;
continue;
} else {
var temp__5278__auto___36838 = cljs.core.seq.call(null,seq__36807_36829);
if(temp__5278__auto___36838){
var seq__36807_36839__$1 = temp__5278__auto___36838;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36807_36839__$1)){
var c__29481__auto___36840 = cljs.core.chunk_first.call(null,seq__36807_36839__$1);
var G__36841 = cljs.core.chunk_rest.call(null,seq__36807_36839__$1);
var G__36842 = c__29481__auto___36840;
var G__36843 = cljs.core.count.call(null,c__29481__auto___36840);
var G__36844 = (0);
seq__36807_36829 = G__36841;
chunk__36808_36830 = G__36842;
count__36809_36831 = G__36843;
i__36810_36832 = G__36844;
continue;
} else {
var f_36845 = cljs.core.first.call(null,seq__36807_36839__$1);
cljs.core.println.call(null,"  ",f_36845);

var G__36846 = cljs.core.next.call(null,seq__36807_36839__$1);
var G__36847 = null;
var G__36848 = (0);
var G__36849 = (0);
seq__36807_36829 = G__36846;
chunk__36808_36830 = G__36847;
count__36809_36831 = G__36848;
i__36810_36832 = G__36849;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_36850 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__28569__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_36850);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_36850)))?cljs.core.second.call(null,arglists_36850):arglists_36850));
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
var seq__36811_36851 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__36812_36852 = null;
var count__36813_36853 = (0);
var i__36814_36854 = (0);
while(true){
if((i__36814_36854 < count__36813_36853)){
var vec__36815_36855 = cljs.core._nth.call(null,chunk__36812_36852,i__36814_36854);
var name_36856 = cljs.core.nth.call(null,vec__36815_36855,(0),null);
var map__36818_36857 = cljs.core.nth.call(null,vec__36815_36855,(1),null);
var map__36818_36858__$1 = ((((!((map__36818_36857 == null)))?((((map__36818_36857.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36818_36857.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36818_36857):map__36818_36857);
var doc_36859 = cljs.core.get.call(null,map__36818_36858__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36860 = cljs.core.get.call(null,map__36818_36858__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36856);

cljs.core.println.call(null," ",arglists_36860);

if(cljs.core.truth_(doc_36859)){
cljs.core.println.call(null," ",doc_36859);
} else {
}

var G__36861 = seq__36811_36851;
var G__36862 = chunk__36812_36852;
var G__36863 = count__36813_36853;
var G__36864 = (i__36814_36854 + (1));
seq__36811_36851 = G__36861;
chunk__36812_36852 = G__36862;
count__36813_36853 = G__36863;
i__36814_36854 = G__36864;
continue;
} else {
var temp__5278__auto___36865 = cljs.core.seq.call(null,seq__36811_36851);
if(temp__5278__auto___36865){
var seq__36811_36866__$1 = temp__5278__auto___36865;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36811_36866__$1)){
var c__29481__auto___36867 = cljs.core.chunk_first.call(null,seq__36811_36866__$1);
var G__36868 = cljs.core.chunk_rest.call(null,seq__36811_36866__$1);
var G__36869 = c__29481__auto___36867;
var G__36870 = cljs.core.count.call(null,c__29481__auto___36867);
var G__36871 = (0);
seq__36811_36851 = G__36868;
chunk__36812_36852 = G__36869;
count__36813_36853 = G__36870;
i__36814_36854 = G__36871;
continue;
} else {
var vec__36820_36872 = cljs.core.first.call(null,seq__36811_36866__$1);
var name_36873 = cljs.core.nth.call(null,vec__36820_36872,(0),null);
var map__36823_36874 = cljs.core.nth.call(null,vec__36820_36872,(1),null);
var map__36823_36875__$1 = ((((!((map__36823_36874 == null)))?((((map__36823_36874.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36823_36874.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36823_36874):map__36823_36874);
var doc_36876 = cljs.core.get.call(null,map__36823_36875__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_36877 = cljs.core.get.call(null,map__36823_36875__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_36873);

cljs.core.println.call(null," ",arglists_36877);

if(cljs.core.truth_(doc_36876)){
cljs.core.println.call(null," ",doc_36876);
} else {
}

var G__36878 = cljs.core.next.call(null,seq__36811_36866__$1);
var G__36879 = null;
var G__36880 = (0);
var G__36881 = (0);
seq__36811_36851 = G__36878;
chunk__36812_36852 = G__36879;
count__36813_36853 = G__36880;
i__36814_36854 = G__36881;
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

var seq__36825 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__36826 = null;
var count__36827 = (0);
var i__36828 = (0);
while(true){
if((i__36828 < count__36827)){
var role = cljs.core._nth.call(null,chunk__36826,i__36828);
var temp__5278__auto___36882__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___36882__$1)){
var spec_36883 = temp__5278__auto___36882__$1;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_36883));
} else {
}

var G__36884 = seq__36825;
var G__36885 = chunk__36826;
var G__36886 = count__36827;
var G__36887 = (i__36828 + (1));
seq__36825 = G__36884;
chunk__36826 = G__36885;
count__36827 = G__36886;
i__36828 = G__36887;
continue;
} else {
var temp__5278__auto____$1 = cljs.core.seq.call(null,seq__36825);
if(temp__5278__auto____$1){
var seq__36825__$1 = temp__5278__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36825__$1)){
var c__29481__auto__ = cljs.core.chunk_first.call(null,seq__36825__$1);
var G__36888 = cljs.core.chunk_rest.call(null,seq__36825__$1);
var G__36889 = c__29481__auto__;
var G__36890 = cljs.core.count.call(null,c__29481__auto__);
var G__36891 = (0);
seq__36825 = G__36888;
chunk__36826 = G__36889;
count__36827 = G__36890;
i__36828 = G__36891;
continue;
} else {
var role = cljs.core.first.call(null,seq__36825__$1);
var temp__5278__auto___36892__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5278__auto___36892__$2)){
var spec_36893 = temp__5278__auto___36892__$2;
cljs.core.print.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''),cljs.spec.alpha.describe.call(null,spec_36893));
} else {
}

var G__36894 = cljs.core.next.call(null,seq__36825__$1);
var G__36895 = null;
var G__36896 = (0);
var G__36897 = (0);
seq__36825 = G__36894;
chunk__36826 = G__36895;
count__36827 = G__36896;
i__36828 = G__36897;
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

//# sourceMappingURL=repl.js.map?rel=1500435980444