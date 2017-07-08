// Compiled by ClojureScript 1.9.229 {}
goog.provide('cljs.spec');
goog.require('cljs.core');
goog.require('cljs.core');
goog.require('goog.object');
goog.require('clojure.walk');
goog.require('cljs.spec.impl.gen');
goog.require('clojure.string');
cljs.spec.MAX_INT = (9007199254740991);
/**
 * A soft limit on how many times a branching spec (or/alt/* /opt-keys/multi-spec)
 *   can be recursed through during generation. After this a
 *   non-recursive branch will be chosen.
 */
cljs.spec._STAR_recursion_limit_STAR_ = (4);
/**
 * The number of times an anonymous fn specified by fspec will be (generatively) tested during conform
 */
cljs.spec._STAR_fspec_iterations_STAR_ = (21);
/**
 * The number of items validated in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_check_limit_STAR_ = (101);
/**
 * The number of errors reported by explain in a collection spec'ed with 'every'
 */
cljs.spec._STAR_coll_error_limit_STAR_ = (20);

/**
 * @interface
 */
cljs.spec.Spec = function(){};

cljs.spec.conform_STAR_ = (function cljs$spec$conform_STAR_(spec,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$conform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$conform_STAR_$arity$2(spec,x);
} else {
var x__26642__auto__ = (((spec == null))?null:spec);
var m__26643__auto__ = (cljs.spec.conform_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,spec,x);
} else {
var m__26643__auto____$1 = (cljs.spec.conform_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,spec,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.conform*",spec);
}
}
}
});

cljs.spec.unform_STAR_ = (function cljs$spec$unform_STAR_(spec,y){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$unform_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$unform_STAR_$arity$2(spec,y);
} else {
var x__26642__auto__ = (((spec == null))?null:spec);
var m__26643__auto__ = (cljs.spec.unform_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,spec,y);
} else {
var m__26643__auto____$1 = (cljs.spec.unform_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,spec,y);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.unform*",spec);
}
}
}
});

cljs.spec.explain_STAR_ = (function cljs$spec$explain_STAR_(spec,path,via,in$,x){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$explain_STAR_$arity$5 == null)))){
return spec.cljs$spec$Spec$explain_STAR_$arity$5(spec,path,via,in$,x);
} else {
var x__26642__auto__ = (((spec == null))?null:spec);
var m__26643__auto__ = (cljs.spec.explain_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,spec,path,via,in$,x);
} else {
var m__26643__auto____$1 = (cljs.spec.explain_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,spec,path,via,in$,x);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.explain*",spec);
}
}
}
});

cljs.spec.gen_STAR_ = (function cljs$spec$gen_STAR_(spec,overrides,path,rmap){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$gen_STAR_$arity$4 == null)))){
return spec.cljs$spec$Spec$gen_STAR_$arity$4(spec,overrides,path,rmap);
} else {
var x__26642__auto__ = (((spec == null))?null:spec);
var m__26643__auto__ = (cljs.spec.gen_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,spec,overrides,path,rmap);
} else {
var m__26643__auto____$1 = (cljs.spec.gen_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,spec,overrides,path,rmap);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.gen*",spec);
}
}
}
});

cljs.spec.with_gen_STAR_ = (function cljs$spec$with_gen_STAR_(spec,gfn){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$with_gen_STAR_$arity$2 == null)))){
return spec.cljs$spec$Spec$with_gen_STAR_$arity$2(spec,gfn);
} else {
var x__26642__auto__ = (((spec == null))?null:spec);
var m__26643__auto__ = (cljs.spec.with_gen_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,spec,gfn);
} else {
var m__26643__auto____$1 = (cljs.spec.with_gen_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,spec,gfn);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.with-gen*",spec);
}
}
}
});

cljs.spec.describe_STAR_ = (function cljs$spec$describe_STAR_(spec){
if((!((spec == null))) && (!((spec.cljs$spec$Spec$describe_STAR_$arity$1 == null)))){
return spec.cljs$spec$Spec$describe_STAR_$arity$1(spec);
} else {
var x__26642__auto__ = (((spec == null))?null:spec);
var m__26643__auto__ = (cljs.spec.describe_STAR_[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,spec);
} else {
var m__26643__auto____$1 = (cljs.spec.describe_STAR_["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,spec);
} else {
throw cljs.core.missing_protocol.call(null,"Spec.describe*",spec);
}
}
}
});

if(typeof cljs.spec.registry_ref !== 'undefined'){
} else {
cljs.spec.registry_ref = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
cljs.spec.named_QMARK_ = (function cljs$spec$named_QMARK_(x){
if(!((x == null))){
if(((x.cljs$lang$protocol_mask$partition1$ & (4096))) || (x.cljs$core$INamed$)){
return true;
} else {
return false;
}
} else {
return false;
}
});
cljs.spec.with_name = (function cljs$spec$with_name(spec,name){
return cljs.core.with_meta.call(null,spec,cljs.core.assoc.call(null,cljs.core.meta.call(null,spec),new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006),name));
});
cljs.spec.spec_name = (function cljs$spec$spec_name(spec){
if((spec instanceof cljs.core.Keyword)){
return spec;
} else {
if(((!((spec == null)))?((((spec.cljs$lang$protocol_mask$partition0$ & (131072))) || (spec.cljs$core$IMeta$))?true:false):false)){
return new cljs.core.Keyword("cljs.spec","name","cljs.spec/name",-1902005006).cljs$core$IFn$_invoke$arity$1(cljs.core.meta.call(null,spec));
} else {
return null;
}
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, nil if not found, k if k not Named
 */
cljs.spec.reg_resolve = (function cljs$spec$reg_resolve(k){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,k))){
var reg = cljs.core.deref.call(null,cljs.spec.registry_ref);
var spec = k;
while(true){
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec))){
var G__57695 = cljs.core.get.call(null,reg,spec);
spec = G__57695;
continue;
} else {
if(cljs.core.truth_(spec)){
return cljs.spec.with_name.call(null,spec,k);
} else {
return null;
}
}
break;
}
} else {
return k;
}
});
/**
 * returns the spec/regex at end of alias chain starting with k, throws if not found, k if k not ident
 */
cljs.spec.reg_resolve_BANG_ = (function cljs$spec$reg_resolve_BANG_(k){
if(cljs.core.ident_QMARK_.call(null,k)){
var or__25979__auto__ = cljs.spec.reg_resolve.call(null,k);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(k)].join('')));
}
} else {
return k;
}
});
/**
 * returns x if x is a spec object, else logical false
 */
cljs.spec.spec_QMARK_ = (function cljs$spec$spec_QMARK_(x){
var and__25967__auto__ = ((!((x == null)))?(((false) || (x.cljs$spec$Spec$))?true:false):false);
if(and__25967__auto__){
return x;
} else {
return and__25967__auto__;
}
});
/**
 * returns x if x is a (clojure.spec) regex op, else logical false
 */
cljs.spec.regex_QMARK_ = (function cljs$spec$regex_QMARK_(x){
var and__25967__auto__ = new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(x);
if(cljs.core.truth_(and__25967__auto__)){
return x;
} else {
return and__25967__auto__;
}
});
/**
 * spec-or-k must be a spec, regex or resolvable kw/sym, else returns nil.
 */
cljs.spec.maybe_spec = (function cljs$spec$maybe_spec(spec_or_k){
var s = (function (){var or__25979__auto__ = cljs.spec.spec_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
var or__25979__auto____$2 = (function (){var and__25967__auto__ = cljs.spec.named_QMARK_.call(null,spec_or_k);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.spec.reg_resolve.call(null,spec_or_k);
} else {
return and__25967__auto__;
}
})();
if(cljs.core.truth_(or__25979__auto____$2)){
return or__25979__auto____$2;
} else {
return null;
}
}
}
})();
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,s))){
return cljs.spec.with_name.call(null,cljs.spec.regex_spec_impl.call(null,s,null),cljs.spec.spec_name.call(null,s));
} else {
return s;
}
});
/**
 * spec-or-k must be a spec, regex or kw/sym, else returns nil. Throws if unresolvable kw/sym
 */
cljs.spec.the_spec = (function cljs$spec$the_spec(spec_or_k){
var or__25979__auto__ = cljs.spec.maybe_spec.call(null,spec_or_k);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,spec_or_k))){
throw (new Error([cljs.core.str("Unable to resolve spec: "),cljs.core.str(spec_or_k)].join('')));
} else {
return null;
}
}
});
cljs.spec.specize = (function cljs$spec$specize(s){
var or__25979__auto__ = cljs.spec.the_spec.call(null,s);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.spec.spec_impl.call(null,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582),s,null,null);
}
});
/**
 * Given a spec and a value, returns :clojure.spec/invalid if value does not match spec,
 *   else the (possibly destructured) value.
 */
cljs.spec.conform = (function cljs$spec$conform(spec,x){
return cljs.spec.conform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * Given a spec and a value created by or compliant with a call to
 *   'conform' with the same spec, returns a value with all conform
 * destructuring undone.
 */
cljs.spec.unform = (function cljs$spec$unform(spec,x){
return cljs.spec.unform_STAR_.call(null,cljs.spec.specize.call(null,spec),x);
});
/**
 * returns the spec as data
 */
cljs.spec.form = (function cljs$spec$form(spec){
return cljs.spec.describe_STAR_.call(null,cljs.spec.specize.call(null,spec));
});
cljs.spec.abbrev = (function cljs$spec$abbrev(form){
if(cljs.core.seq_QMARK_.call(null,form)){
return clojure.walk.postwalk.call(null,(function (form__$1){
if(cljs.core.truth_((function (){var and__25967__auto__ = (form__$1 instanceof cljs.core.Symbol);
if(and__25967__auto__){
return cljs.core.namespace.call(null,form__$1);
} else {
return and__25967__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form__$1));
} else {
if((cljs.core.seq_QMARK_.call(null,form__$1)) && (cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"fn","fn",465265323,null),cljs.core.first.call(null,form__$1))) && (cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"%","%",-950237169,null)], null),cljs.core.second.call(null,form__$1)))){
return cljs.core.last.call(null,form__$1);
} else {
return form__$1;

}
}
}),form);
} else {
if(cljs.core.truth_((function (){var and__25967__auto__ = (form instanceof cljs.core.Symbol);
if(and__25967__auto__){
return cljs.core.namespace.call(null,form);
} else {
return and__25967__auto__;
}
})())){
return cljs.core.symbol.call(null,cljs.core.name.call(null,form));
} else {
return form;

}
}
});
/**
 * returns an abbreviated description of the spec as data
 */
cljs.spec.describe = (function cljs$spec$describe(spec){
return cljs.spec.abbrev.call(null,cljs.spec.form.call(null,spec));
});
/**
 * Takes a spec and a no-arg, generator-returning fn and returns a version of that spec that uses that generator
 */
cljs.spec.with_gen = (function cljs$spec$with_gen(spec,gen_fn){
var spec__$1 = cljs.spec.reg_resolve.call(null,spec);
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,spec__$1))){
return cljs.core.assoc.call(null,spec__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727),gen_fn);
} else {
return cljs.spec.with_gen_STAR_.call(null,cljs.spec.specize.call(null,spec__$1),gen_fn);
}
});
cljs.spec.explain_data_STAR_ = (function cljs$spec$explain_data_STAR_(spec,path,via,in$,x){
var temp__4657__auto__ = cljs.spec.explain_STAR_.call(null,cljs.spec.specize.call(null,spec),path,via,in$,x);
if(cljs.core.truth_(temp__4657__auto__)){
var probs = temp__4657__auto__;
if(cljs.core.empty_QMARK_.call(null,probs)){
return null;
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),probs], null);
}
} else {
return null;
}
});
/**
 * Given a spec and a value x which ought to conform, returns nil if x
 *   conforms, else a map with at least the key ::problems whose value is
 *   a collection of problem-maps, where problem-map has at least :path :pred and :val
 *   keys describing the predicate and the value that failed at that
 *   path.
 */
cljs.spec.explain_data = (function cljs$spec$explain_data(spec,x){
return cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,x);
});
/**
 * prints an explanation to *out*.
 */
cljs.spec.explain_out = (function cljs$spec$explain_out(ed){
if(cljs.core.truth_(ed)){
return cljs.core.print.call(null,(function (){var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57740_57780 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57741_57781 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57740_57780,_STAR_print_fn_STAR_57741_57781,sb__26965__auto__){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_57740_57780,_STAR_print_fn_STAR_57741_57781,sb__26965__auto__))
;

try{var seq__57742_57782 = cljs.core.seq.call(null,new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678).cljs$core$IFn$_invoke$arity$1(ed));
var chunk__57743_57783 = null;
var count__57744_57784 = (0);
var i__57745_57785 = (0);
while(true){
if((i__57745_57785 < count__57744_57784)){
var map__57746_57786 = cljs.core._nth.call(null,chunk__57743_57783,i__57745_57785);
var map__57746_57787__$1 = ((((!((map__57746_57786 == null)))?((((map__57746_57786.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57746_57786.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57746_57786):map__57746_57786);
var prob_57788 = map__57746_57787__$1;
var path_57789 = cljs.core.get.call(null,map__57746_57787__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_57790 = cljs.core.get.call(null,map__57746_57787__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_57791 = cljs.core.get.call(null,map__57746_57787__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_57792 = cljs.core.get.call(null,map__57746_57787__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_57793 = cljs.core.get.call(null,map__57746_57787__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_57794 = cljs.core.get.call(null,map__57746_57787__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_57794)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_57794),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_57791);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_57793)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_57793)));
}

if(cljs.core.empty_QMARK_.call(null,path_57789)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_57789));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_57790));

if(cljs.core.truth_(reason_57792)){
cljs.core.print.call(null,", ",reason_57792);
} else {
}

var seq__57748_57795 = cljs.core.seq.call(null,prob_57788);
var chunk__57749_57796 = null;
var count__57750_57797 = (0);
var i__57751_57798 = (0);
while(true){
if((i__57751_57798 < count__57750_57797)){
var vec__57752_57799 = cljs.core._nth.call(null,chunk__57749_57796,i__57751_57798);
var k_57800 = cljs.core.nth.call(null,vec__57752_57799,(0),null);
var v_57801 = cljs.core.nth.call(null,vec__57752_57799,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_57800))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_57800)," ");

cljs.core.pr.call(null,v_57801);
}

var G__57802 = seq__57748_57795;
var G__57803 = chunk__57749_57796;
var G__57804 = count__57750_57797;
var G__57805 = (i__57751_57798 + (1));
seq__57748_57795 = G__57802;
chunk__57749_57796 = G__57803;
count__57750_57797 = G__57804;
i__57751_57798 = G__57805;
continue;
} else {
var temp__4657__auto___57806 = cljs.core.seq.call(null,seq__57748_57795);
if(temp__4657__auto___57806){
var seq__57748_57807__$1 = temp__4657__auto___57806;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57748_57807__$1)){
var c__26790__auto___57808 = cljs.core.chunk_first.call(null,seq__57748_57807__$1);
var G__57809 = cljs.core.chunk_rest.call(null,seq__57748_57807__$1);
var G__57810 = c__26790__auto___57808;
var G__57811 = cljs.core.count.call(null,c__26790__auto___57808);
var G__57812 = (0);
seq__57748_57795 = G__57809;
chunk__57749_57796 = G__57810;
count__57750_57797 = G__57811;
i__57751_57798 = G__57812;
continue;
} else {
var vec__57755_57813 = cljs.core.first.call(null,seq__57748_57807__$1);
var k_57814 = cljs.core.nth.call(null,vec__57755_57813,(0),null);
var v_57815 = cljs.core.nth.call(null,vec__57755_57813,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_57814))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_57814)," ");

cljs.core.pr.call(null,v_57815);
}

var G__57816 = cljs.core.next.call(null,seq__57748_57807__$1);
var G__57817 = null;
var G__57818 = (0);
var G__57819 = (0);
seq__57748_57795 = G__57816;
chunk__57749_57796 = G__57817;
count__57750_57797 = G__57818;
i__57751_57798 = G__57819;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__57820 = seq__57742_57782;
var G__57821 = chunk__57743_57783;
var G__57822 = count__57744_57784;
var G__57823 = (i__57745_57785 + (1));
seq__57742_57782 = G__57820;
chunk__57743_57783 = G__57821;
count__57744_57784 = G__57822;
i__57745_57785 = G__57823;
continue;
} else {
var temp__4657__auto___57824 = cljs.core.seq.call(null,seq__57742_57782);
if(temp__4657__auto___57824){
var seq__57742_57825__$1 = temp__4657__auto___57824;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57742_57825__$1)){
var c__26790__auto___57826 = cljs.core.chunk_first.call(null,seq__57742_57825__$1);
var G__57827 = cljs.core.chunk_rest.call(null,seq__57742_57825__$1);
var G__57828 = c__26790__auto___57826;
var G__57829 = cljs.core.count.call(null,c__26790__auto___57826);
var G__57830 = (0);
seq__57742_57782 = G__57827;
chunk__57743_57783 = G__57828;
count__57744_57784 = G__57829;
i__57745_57785 = G__57830;
continue;
} else {
var map__57758_57831 = cljs.core.first.call(null,seq__57742_57825__$1);
var map__57758_57832__$1 = ((((!((map__57758_57831 == null)))?((((map__57758_57831.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57758_57831.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57758_57831):map__57758_57831);
var prob_57833 = map__57758_57832__$1;
var path_57834 = cljs.core.get.call(null,map__57758_57832__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var pred_57835 = cljs.core.get.call(null,map__57758_57832__$1,new cljs.core.Keyword(null,"pred","pred",1927423397));
var val_57836 = cljs.core.get.call(null,map__57758_57832__$1,new cljs.core.Keyword(null,"val","val",128701612));
var reason_57837 = cljs.core.get.call(null,map__57758_57832__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759));
var via_57838 = cljs.core.get.call(null,map__57758_57832__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var in_57839 = cljs.core.get.call(null,map__57758_57832__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
if(cljs.core.empty_QMARK_.call(null,in_57839)){
} else {
cljs.core.print.call(null,"In:",cljs.core.pr_str.call(null,in_57839),"");
}

cljs.core.print.call(null,"val: ");

cljs.core.pr.call(null,val_57836);

cljs.core.print.call(null," fails");

if(cljs.core.empty_QMARK_.call(null,via_57838)){
} else {
cljs.core.print.call(null," spec:",cljs.core.pr_str.call(null,cljs.core.last.call(null,via_57838)));
}

if(cljs.core.empty_QMARK_.call(null,path_57834)){
} else {
cljs.core.print.call(null," at:",cljs.core.pr_str.call(null,path_57834));
}

cljs.core.print.call(null," predicate: ");

cljs.core.pr.call(null,cljs.spec.abbrev.call(null,pred_57835));

if(cljs.core.truth_(reason_57837)){
cljs.core.print.call(null,", ",reason_57837);
} else {
}

var seq__57760_57840 = cljs.core.seq.call(null,prob_57833);
var chunk__57761_57841 = null;
var count__57762_57842 = (0);
var i__57763_57843 = (0);
while(true){
if((i__57763_57843 < count__57762_57842)){
var vec__57764_57844 = cljs.core._nth.call(null,chunk__57761_57841,i__57763_57843);
var k_57845 = cljs.core.nth.call(null,vec__57764_57844,(0),null);
var v_57846 = cljs.core.nth.call(null,vec__57764_57844,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_57845))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_57845)," ");

cljs.core.pr.call(null,v_57846);
}

var G__57847 = seq__57760_57840;
var G__57848 = chunk__57761_57841;
var G__57849 = count__57762_57842;
var G__57850 = (i__57763_57843 + (1));
seq__57760_57840 = G__57847;
chunk__57761_57841 = G__57848;
count__57762_57842 = G__57849;
i__57763_57843 = G__57850;
continue;
} else {
var temp__4657__auto___57851__$1 = cljs.core.seq.call(null,seq__57760_57840);
if(temp__4657__auto___57851__$1){
var seq__57760_57852__$1 = temp__4657__auto___57851__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57760_57852__$1)){
var c__26790__auto___57853 = cljs.core.chunk_first.call(null,seq__57760_57852__$1);
var G__57854 = cljs.core.chunk_rest.call(null,seq__57760_57852__$1);
var G__57855 = c__26790__auto___57853;
var G__57856 = cljs.core.count.call(null,c__26790__auto___57853);
var G__57857 = (0);
seq__57760_57840 = G__57854;
chunk__57761_57841 = G__57855;
count__57762_57842 = G__57856;
i__57763_57843 = G__57857;
continue;
} else {
var vec__57767_57858 = cljs.core.first.call(null,seq__57760_57852__$1);
var k_57859 = cljs.core.nth.call(null,vec__57767_57858,(0),null);
var v_57860 = cljs.core.nth.call(null,vec__57767_57858,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"pred","pred",1927423397),null,new cljs.core.Keyword(null,"via","via",-1904457336),null,new cljs.core.Keyword(null,"val","val",128701612),null,new cljs.core.Keyword(null,"reason","reason",-2070751759),null,new cljs.core.Keyword(null,"in","in",-1531184865),null], null), null).call(null,k_57859))){
} else {
cljs.core.print.call(null,"\n\t",cljs.core.pr_str.call(null,k_57859)," ");

cljs.core.pr.call(null,v_57860);
}

var G__57861 = cljs.core.next.call(null,seq__57760_57852__$1);
var G__57862 = null;
var G__57863 = (0);
var G__57864 = (0);
seq__57760_57840 = G__57861;
chunk__57761_57841 = G__57862;
count__57762_57842 = G__57863;
i__57763_57843 = G__57864;
continue;
}
} else {
}
}
break;
}

cljs.core.newline.call(null);

var G__57865 = cljs.core.next.call(null,seq__57742_57825__$1);
var G__57866 = null;
var G__57867 = (0);
var G__57868 = (0);
seq__57742_57782 = G__57865;
chunk__57743_57783 = G__57866;
count__57744_57784 = G__57867;
i__57745_57785 = G__57868;
continue;
}
} else {
}
}
break;
}

var seq__57770_57869 = cljs.core.seq.call(null,ed);
var chunk__57771_57870 = null;
var count__57772_57871 = (0);
var i__57773_57872 = (0);
while(true){
if((i__57773_57872 < count__57772_57871)){
var vec__57774_57873 = cljs.core._nth.call(null,chunk__57771_57870,i__57773_57872);
var k_57874 = cljs.core.nth.call(null,vec__57774_57873,(0),null);
var v_57875 = cljs.core.nth.call(null,vec__57774_57873,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_57874))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_57874)," ");

cljs.core.pr.call(null,v_57875);

cljs.core.newline.call(null);
}

var G__57876 = seq__57770_57869;
var G__57877 = chunk__57771_57870;
var G__57878 = count__57772_57871;
var G__57879 = (i__57773_57872 + (1));
seq__57770_57869 = G__57876;
chunk__57771_57870 = G__57877;
count__57772_57871 = G__57878;
i__57773_57872 = G__57879;
continue;
} else {
var temp__4657__auto___57880 = cljs.core.seq.call(null,seq__57770_57869);
if(temp__4657__auto___57880){
var seq__57770_57881__$1 = temp__4657__auto___57880;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57770_57881__$1)){
var c__26790__auto___57882 = cljs.core.chunk_first.call(null,seq__57770_57881__$1);
var G__57883 = cljs.core.chunk_rest.call(null,seq__57770_57881__$1);
var G__57884 = c__26790__auto___57882;
var G__57885 = cljs.core.count.call(null,c__26790__auto___57882);
var G__57886 = (0);
seq__57770_57869 = G__57883;
chunk__57771_57870 = G__57884;
count__57772_57871 = G__57885;
i__57773_57872 = G__57886;
continue;
} else {
var vec__57777_57887 = cljs.core.first.call(null,seq__57770_57881__$1);
var k_57888 = cljs.core.nth.call(null,vec__57777_57887,(0),null);
var v_57889 = cljs.core.nth.call(null,vec__57777_57887,(1),null);
if(cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","problems","cljs.spec/problems",608491678),null], null), null).call(null,k_57888))){
} else {
cljs.core.print.call(null,cljs.core.pr_str.call(null,k_57888)," ");

cljs.core.pr.call(null,v_57889);

cljs.core.newline.call(null);
}

var G__57890 = cljs.core.next.call(null,seq__57770_57881__$1);
var G__57891 = null;
var G__57892 = (0);
var G__57893 = (0);
seq__57770_57869 = G__57890;
chunk__57771_57870 = G__57891;
count__57772_57871 = G__57892;
i__57773_57872 = G__57893;
continue;
}
} else {
}
}
break;
}
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57741_57781;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57740_57780;
}
return [cljs.core.str(sb__26965__auto__)].join('');
})());
} else {
return cljs.core.println.call(null,"Success!");
}
});
/**
 * Given a spec and a value that fails to conform, prints an explanation to *out*.
 */
cljs.spec.explain = (function cljs$spec$explain(spec,x){
return cljs.spec.explain_out.call(null,cljs.spec.explain_data.call(null,spec,x));
});
/**
 * Given a spec and a value that fails to conform, returns an explanation as a string.
 */
cljs.spec.explain_str = (function cljs$spec$explain_str(spec,x){
var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57896_57898 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57897_57899 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57896_57898,_STAR_print_fn_STAR_57897_57899,sb__26965__auto__){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_57896_57898,_STAR_print_fn_STAR_57897_57899,sb__26965__auto__))
;

try{cljs.spec.explain.call(null,spec,x);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57897_57899;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57896_57898;
}
return [cljs.core.str(sb__26965__auto__)].join('');
});
cljs.spec.gensub = (function cljs$spec$gensub(spec,overrides,path,rmap,form){
var spec__$1 = cljs.spec.specize.call(null,spec);
var temp__4655__auto__ = (function (){var or__25979__auto__ = (function (){var temp__4657__auto__ = (function (){var or__25979__auto__ = cljs.core.get.call(null,overrides,(function (){var or__25979__auto__ = cljs.spec.spec_name.call(null,spec__$1);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return spec__$1;
}
})());
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.get.call(null,overrides,path);
}
})();
if(cljs.core.truth_(temp__4657__auto__)){
var gfn = temp__4657__auto__;
return gfn.call(null);
} else {
return null;
}
})();
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.spec.gen_STAR_.call(null,spec__$1,overrides,path,rmap);
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var g = temp__4655__auto__;
return cljs.spec.impl.gen.such_that.call(null,((function (g,temp__4655__auto__,spec__$1){
return (function (p1__57900_SHARP_){
return cljs.spec.valid_QMARK_.call(null,spec__$1,p1__57900_SHARP_);
});})(g,temp__4655__auto__,spec__$1))
,g,(100));
} else {
throw (new Error([cljs.core.str("Unable to construct gen at: "),cljs.core.str(path),cljs.core.str(" for: "),cljs.core.str(cljs.spec.abbrev.call(null,form))].join('')));
}
});
/**
 * Given a spec, returns the generator for it, or throws if none can
 *   be constructed. Optionally an overrides map can be provided which
 *   should map spec names or paths (vectors of keywords) to no-arg
 *   generator-creating fns. These will be used instead of the generators at those
 *   names/paths. Note that parent generator (in the spec or overrides
 *   map) will supersede those of any subtrees. A generator for a regex
 *   op must always return a sequential collection (i.e. a generator for
 *   s/? should return either an empty sequence/vector or a
 *   sequence/vector with one item in it)
 */
cljs.spec.gen = (function cljs$spec$gen(var_args){
var args57901 = [];
var len__27054__auto___57904 = arguments.length;
var i__27055__auto___57905 = (0);
while(true){
if((i__27055__auto___57905 < len__27054__auto___57904)){
args57901.push((arguments[i__27055__auto___57905]));

var G__57906 = (i__27055__auto___57905 + (1));
i__27055__auto___57905 = G__57906;
continue;
} else {
}
break;
}

var G__57903 = args57901.length;
switch (G__57903) {
case 1:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.gen.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57901.length)].join('')));

}
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.gen.call(null,spec,null);
});

cljs.spec.gen.cljs$core$IFn$_invoke$arity$2 = (function (spec,overrides){
return cljs.spec.gensub.call(null,spec,overrides,cljs.core.PersistentVector.EMPTY,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086),cljs.spec._STAR_recursion_limit_STAR_], null),spec);
});

cljs.spec.gen.cljs$lang$maxFixedArity = 2;

/**
 * Do not call this directly, use 'def'
 */
cljs.spec.def_impl = (function cljs$spec$def_impl(k,form,spec){
if(cljs.core.truth_((function (){var and__25967__auto__ = cljs.spec.named_QMARK_.call(null,k);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.namespace.call(null,k);
} else {
return and__25967__auto__;
}
})())){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str("k must be namespaced keyword or resolveable symbol"),cljs.core.str("\n"),cljs.core.str("(c/and (named? k) (namespace k))")].join('')));
}

var spec__$1 = (cljs.core.truth_((function (){var or__25979__auto__ = cljs.spec.spec_QMARK_.call(null,spec);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = cljs.spec.regex_QMARK_.call(null,spec);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.registry_ref),spec);
}
}
})())?spec:cljs.spec.spec_impl.call(null,form,spec,null,null));
cljs.core.swap_BANG_.call(null,cljs.spec.registry_ref,cljs.core.assoc,k,spec__$1);

return k;
});
/**
 * returns the registry map, prefer 'get-spec' to lookup a spec by name
 */
cljs.spec.registry = (function cljs$spec$registry(){
return cljs.core.deref.call(null,cljs.spec.registry_ref);
});
/**
 * Returns a symbol from a symbol or var
 */
cljs.spec.__GT_sym = (function cljs$spec$__GT_sym(x){
if(cljs.core.var_QMARK_.call(null,x)){
return x.sym;
} else {
return x;
}
});
/**
 * Returns spec registered for keyword/symbol/var k, or nil.
 */
cljs.spec.get_spec = (function cljs$spec$get_spec(k){
return cljs.core.get.call(null,cljs.spec.registry.call(null),(((k instanceof cljs.core.Keyword))?k:cljs.spec.__GT_sym.call(null,k)));
});
cljs.spec.macroexpand_check = (function cljs$spec$macroexpand_check(v,args){
var specs = cljs.spec.get_spec.call(null,v);
var temp__4657__auto__ = new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs);
if(cljs.core.truth_(temp__4657__auto__)){
var arg_spec = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.conform.call(null,arg_spec,args))){
var ed = cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,arg_spec,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576)], null),(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,arg_spec);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [name], null);
} else {
return cljs.core.PersistentVector.EMPTY;
}
})(),cljs.core.PersistentVector.EMPTY,args),new cljs.core.Keyword("cljs.spec","args","cljs.spec/args",-367019609),args);
throw (new Error([cljs.core.str("Call to "),cljs.core.str(cljs.spec.__GT_sym.call(null,v)),cljs.core.str(" did not conform to spec:\n"),cljs.core.str((function (){var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_57910_57912 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_57911_57913 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_57910_57912,_STAR_print_fn_STAR_57911_57913,sb__26965__auto__,ed,arg_spec,temp__4657__auto__,specs){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_57910_57912,_STAR_print_fn_STAR_57911_57913,sb__26965__auto__,ed,arg_spec,temp__4657__auto__,specs))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_57911_57913;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_57910_57912;
}
return [cljs.core.str(sb__26965__auto__)].join('');
})())].join('')));
} else {
return null;
}
} else {
return null;
}
});
cljs.spec.recur_limit_QMARK_ = (function cljs$spec$recur_limit_QMARK_(rmap,id,path,k){
return ((cljs.core.get.call(null,rmap,id) > new cljs.core.Keyword("cljs.spec","recursion-limit","cljs.spec/recursion-limit",-630131086).cljs$core$IFn$_invoke$arity$1(rmap))) && (cljs.core.contains_QMARK_.call(null,cljs.core.set.call(null,path),k));
});
cljs.spec.inck = (function cljs$spec$inck(m,k){
return cljs.core.assoc.call(null,m,k,((function (){var or__25979__auto__ = cljs.core.get.call(null,m,k);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})() + (1)));
});
cljs.spec.dt = (function cljs$spec$dt(var_args){
var args57914 = [];
var len__27054__auto___57917 = arguments.length;
var i__27055__auto___57918 = (0);
while(true){
if((i__27055__auto___57918 < len__27054__auto___57917)){
args57914.push((arguments[i__27055__auto___57918]));

var G__57919 = (i__27055__auto___57918 + (1));
i__27055__auto___57918 = G__57919;
continue;
} else {
}
break;
}

var G__57916 = args57914.length;
switch (G__57916) {
case 3:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.dt.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57914.length)].join('')));

}
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$3 = (function (pred,x,form){
return cljs.spec.dt.call(null,pred,x,form,null);
});

cljs.spec.dt.cljs$core$IFn$_invoke$arity$4 = (function (pred,x,form,cpred_QMARK_){
if(cljs.core.truth_(pred)){
var temp__4655__auto__ = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(temp__4655__auto__)){
var spec = temp__4655__auto__;
return cljs.spec.conform.call(null,spec,x);
} else {
if(cljs.core.ifn_QMARK_.call(null,pred)){
if(cljs.core.truth_(cpred_QMARK_)){
return pred.call(null,x);
} else {
if(cljs.core.truth_(pred.call(null,x))){
return x;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
} else {
throw (new Error([cljs.core.str(cljs.core.pr_str.call(null,form)),cljs.core.str(" is not a fn, expected predicate fn")].join('')));
}
}
} else {
return x;
}
});

cljs.spec.dt.cljs$lang$maxFixedArity = 4;

/**
 * Helper function that returns true when x is valid for spec.
 */
cljs.spec.valid_QMARK_ = (function cljs$spec$valid_QMARK_(var_args){
var args57921 = [];
var len__27054__auto___57924 = arguments.length;
var i__27055__auto___57925 = (0);
while(true){
if((i__27055__auto___57925 < len__27054__auto___57924)){
args57921.push((arguments[i__27055__auto___57925]));

var G__57926 = (i__27055__auto___57925 + (1));
i__27055__auto___57925 = G__57926;
continue;
} else {
}
break;
}

var G__57923 = args57921.length;
switch (G__57923) {
case 2:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57921.length)].join('')));

}
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (spec,x){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
});

cljs.spec.valid_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (spec,x,form){
return cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,spec,x,form));
});

cljs.spec.valid_QMARK_.cljs$lang$maxFixedArity = 3;

cljs.spec.explain_1 = (function cljs$spec$explain_1(form,pred,path,via,in$,v){
var pred__$1 = cljs.spec.maybe_spec.call(null,pred);
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred__$1))){
return cljs.spec.explain_STAR_.call(null,pred__$1,path,(function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,pred__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})(),in$,v);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form),new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});
/**
 * Do not call this directly, use 'spec' with a map argument
 */
cljs.spec.map_spec_impl = (function cljs$spec$map_spec_impl(p__57931){
var map__57962 = p__57931;
var map__57962__$1 = ((((!((map__57962 == null)))?((((map__57962.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57962.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57962):map__57962);
var argm = map__57962__$1;
var opt = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"opt","opt",-794706369));
var req_un = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"req-un","req-un",1074571008));
var opt_un = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"opt-un","opt-un",883442496));
var gfn = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"gfn","gfn",791517474));
var pred_exprs = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"pred-exprs","pred-exprs",1792271395));
var opt_keys = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"opt-keys","opt-keys",1262688261));
var req_specs = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"req-specs","req-specs",553962313));
var req = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"req","req",-326448303));
var req_keys = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"req-keys","req-keys",514319221));
var opt_specs = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"opt-specs","opt-specs",-384905450));
var pred_forms = cljs.core.get.call(null,map__57962__$1,new cljs.core.Keyword(null,"pred-forms","pred-forms",172611832));
var keys_pred = cljs.core.apply.call(null,cljs.core.every_pred,pred_exprs);
var k__GT_s = cljs.core.zipmap.call(null,cljs.core.concat.call(null,req_keys,opt_keys),cljs.core.concat.call(null,req_specs,opt_specs));
var keys__GT_specs = ((function (keys_pred,k__GT_s,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__57928_SHARP_){
var or__25979__auto__ = k__GT_s.call(null,p1__57928_SHARP_);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return p1__57928_SHARP_;
}
});})(keys_pred,k__GT_s,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var id = cljs.core.random_uuid.call(null);
if(typeof cljs.spec.t_cljs$spec57964 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec57964 = (function (opt,map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,map__57962,opt_keys,req_specs,keys__GT_specs,p__57931,req,id,req_keys,opt_specs,k__GT_s,pred_forms,meta57965){
this.opt = opt;
this.map_spec_impl = map_spec_impl;
this.req_un = req_un;
this.opt_un = opt_un;
this.gfn = gfn;
this.pred_exprs = pred_exprs;
this.keys_pred = keys_pred;
this.argm = argm;
this.map__57962 = map__57962;
this.opt_keys = opt_keys;
this.req_specs = req_specs;
this.keys__GT_specs = keys__GT_specs;
this.p__57931 = p__57931;
this.req = req;
this.id = id;
this.req_keys = req_keys;
this.opt_specs = opt_specs;
this.k__GT_s = k__GT_s;
this.pred_forms = pred_forms;
this.meta57965 = meta57965;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec57964.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_57966,meta57965__$1){
var self__ = this;
var _57966__$1 = this;
return (new cljs.spec.t_cljs$spec57964(self__.opt,self__.map_spec_impl,self__.req_un,self__.opt_un,self__.gfn,self__.pred_exprs,self__.keys_pred,self__.argm,self__.map__57962,self__.opt_keys,self__.req_specs,self__.keys__GT_specs,self__.p__57931,self__.req,self__.id,self__.req_keys,self__.opt_specs,self__.k__GT_s,self__.pred_forms,meta57965__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_57966){
var self__ = this;
var _57966__$1 = this;
return self__.meta57965;
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec57964.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.keys_pred.call(null,m))){
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__57970 = cljs.core.keys.call(null,m);
var vec__57971 = G__57970;
var seq__57972 = cljs.core.seq.call(null,vec__57971);
var first__57973 = cljs.core.first.call(null,seq__57972);
var seq__57972__$1 = cljs.core.next.call(null,seq__57972);
var k = first__57973;
var ks = seq__57972__$1;
var keys = vec__57971;
var ret__$1 = ret;
var G__57970__$1 = G__57970;
while(true){
var ret__$2 = ret__$1;
var vec__57974 = G__57970__$1;
var seq__57975 = cljs.core.seq.call(null,vec__57974);
var first__57976 = cljs.core.first.call(null,seq__57975);
var seq__57975__$1 = cljs.core.next.call(null,seq__57975);
var k__$1 = first__57976;
var ks__$1 = seq__57975__$1;
var keys__$1 = vec__57974;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var v = cljs.core.get.call(null,m,k__$1);
var cv = cljs.spec.conform.call(null,self__.keys__GT_specs.call(null,k__$1),v);
if(cljs.core._EQ_.call(null,cv,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__57992 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,cv));
var G__57993 = ks__$1;
ret__$1 = G__57992;
G__57970__$1 = G__57993;
continue;
}
} else {
var G__57994 = ret__$2;
var G__57995 = ks__$1;
ret__$1 = G__57994;
G__57970__$1 = G__57995;
continue;
}
} else {
return ret__$2;
}
break;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,m){
var self__ = this;
var ___$1 = this;
var reg = cljs.spec.registry.call(null);
var ret = m;
var G__57980 = cljs.core.keys.call(null,m);
var vec__57981 = G__57980;
var seq__57982 = cljs.core.seq.call(null,vec__57981);
var first__57983 = cljs.core.first.call(null,seq__57982);
var seq__57982__$1 = cljs.core.next.call(null,seq__57982);
var k = first__57983;
var ks = seq__57982__$1;
var keys = vec__57981;
var ret__$1 = ret;
var G__57980__$1 = G__57980;
while(true){
var ret__$2 = ret__$1;
var vec__57984 = G__57980__$1;
var seq__57985 = cljs.core.seq.call(null,vec__57984);
var first__57986 = cljs.core.first.call(null,seq__57985);
var seq__57985__$1 = cljs.core.next.call(null,seq__57985);
var k__$1 = first__57986;
var ks__$1 = seq__57985__$1;
var keys__$1 = vec__57984;
if(cljs.core.truth_(keys__$1)){
if(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k__$1))){
var cv = cljs.core.get.call(null,m,k__$1);
var v = cljs.spec.unform.call(null,self__.keys__GT_specs.call(null,k__$1),cv);
var G__57996 = (((cv === v))?ret__$2:cljs.core.assoc.call(null,ret__$2,k__$1,v));
var G__57997 = ks__$1;
ret__$1 = G__57996;
G__57980__$1 = G__57997;
continue;
} else {
var G__57998 = ret__$2;
var G__57999 = ks__$1;
ret__$1 = G__57998;
G__57980__$1 = G__57999;
continue;
}
} else {
return ret__$2;
}
break;
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.map_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"map?","map?",-1780568534,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var reg = cljs.spec.registry.call(null);
return cljs.core.apply.call(null,cljs.core.concat,(function (){var temp__4657__auto__ = cljs.core.seq.call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (pred,form){
if(cljs.core.truth_(pred.call(null,x))){
return null;
} else {
return cljs.spec.abbrev.call(null,form);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,self__.pred_exprs,self__.pred_forms)));
if(temp__4657__auto__){
var probs = temp__4657__auto__;
return cljs.core.map.call(null,((function (probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__57929_SHARP_){
return cljs.core.identity.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),p1__57929_SHARP_,new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null));
});})(probs,temp__4657__auto__,reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,probs);
} else {
return null;
}
})(),cljs.core.map.call(null,((function (reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p__57987){
var vec__57988 = p__57987;
var k = cljs.core.nth.call(null,vec__57988,(0),null);
var v = cljs.core.nth.call(null,vec__57988,(1),null);
if(cljs.core.truth_((function (){var or__25979__auto__ = !(cljs.core.contains_QMARK_.call(null,reg,self__.keys__GT_specs.call(null,k)));
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.spec.valid_QMARK_.call(null,self__.keys__GT_specs.call(null,k),v,k);
}
})())){
return null;
} else {
return cljs.spec.explain_1.call(null,self__.keys__GT_specs.call(null,k),self__.keys__GT_specs.call(null,k),cljs.core.conj.call(null,path,k),via,cljs.core.conj.call(null,in$,k),v);
}
});})(reg,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,cljs.core.seq.call(null,x)));
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
var gen = ((function (rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var ogen = ((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (k,s){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return cljs.spec.gensub.call(null,s,overrides,cljs.core.conj.call(null,path,k),rmap__$1,k);
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
,null)))], null);
}
});})(rmap__$1,gen,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;
var req_gens = cljs.core.map.call(null,gen,self__.req_keys,self__.req_specs);
var opt_gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,ogen,self__.opt_keys,self__.opt_specs));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,cljs.core.concat.call(null,req_gens,opt_gens))){
var reqs = cljs.core.zipmap.call(null,self__.req_keys,req_gens);
var opts = cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,opt_gens);
return cljs.spec.impl.gen.bind.call(null,cljs.spec.impl.gen.choose.call(null,(0),cljs.core.count.call(null,opts)),((function (reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (p1__57930_SHARP_){
var args = cljs.core.concat.call(null,cljs.core.seq.call(null,reqs),((cljs.core.seq.call(null,opts))?cljs.core.shuffle.call(null,cljs.core.seq.call(null,opts)):null));
return cljs.core.apply.call(null,cljs.spec.impl.gen.hash_map,cljs.core.apply.call(null,cljs.core.concat,cljs.core.take.call(null,(p1__57930_SHARP_ + cljs.core.count.call(null,reqs)),args)));
});})(reqs,opts,rmap__$1,gen,ogen,req_gens,opt_gens,___$1,keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
);
} else {
return null;
}
}
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.map_spec_impl.call(null,cljs.core.assoc.call(null,self__.argm,new cljs.core.Keyword(null,"gfn","gfn",791517474),gfn__$1));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","keys","cljs.spec/keys",-927379584,null),(function (){var G__57991 = cljs.core.PersistentVector.EMPTY;
var G__57991__$1 = (cljs.core.truth_(self__.req)?cljs.core.conj.call(null,G__57991,new cljs.core.Keyword(null,"req","req",-326448303),self__.req):G__57991);
var G__57991__$2 = (cljs.core.truth_(self__.opt)?cljs.core.conj.call(null,G__57991__$1,new cljs.core.Keyword(null,"opt","opt",-794706369),self__.opt):G__57991__$1);
var G__57991__$3 = (cljs.core.truth_(self__.req_un)?cljs.core.conj.call(null,G__57991__$2,new cljs.core.Keyword(null,"req-un","req-un",1074571008),self__.req_un):G__57991__$2);
if(cljs.core.truth_(self__.opt_un)){
return cljs.core.conj.call(null,G__57991__$3,new cljs.core.Keyword(null,"opt-un","opt-un",883442496),self__.opt_un);
} else {
return G__57991__$3;
}
})());
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.getBasis = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (){
return new cljs.core.PersistentVector(null, 20, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"opt","opt",845825158,null),cljs.core.with_meta(new cljs.core.Symbol(null,"map-spec-impl","map-spec-impl",-1682885722,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"opt","opt",845825158,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"argm","argm",-181546357,null)], null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a map argument"], null)),new cljs.core.Symbol(null,"req-un","req-un",-1579864761,null),new cljs.core.Symbol(null,"opt-un","opt-un",-1770993273,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"pred-exprs","pred-exprs",-862164374,null),new cljs.core.Symbol(null,"keys-pred","keys-pred",-1795451030,null),new cljs.core.Symbol(null,"argm","argm",-181546357,null),new cljs.core.Symbol(null,"map__57962","map__57962",-390906965,null),new cljs.core.Symbol(null,"opt-keys","opt-keys",-1391747508,null),new cljs.core.Symbol(null,"req-specs","req-specs",-2100473456,null),new cljs.core.Symbol(null,"keys->specs","keys->specs",-97897643,null),new cljs.core.Symbol(null,"p__57931","p__57931",-1422258056,null),new cljs.core.Symbol(null,"req","req",1314083224,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"req-keys","req-keys",-2140116548,null),new cljs.core.Symbol(null,"opt-specs","opt-specs",1255626077,null),new cljs.core.Symbol(null,"k->s","k->s",-1685112801,null),new cljs.core.Symbol(null,"pred-forms","pred-forms",1813143359,null),new cljs.core.Symbol(null,"meta57965","meta57965",1217151856,null)], null);
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.t_cljs$spec57964.cljs$lang$type = true;

cljs.spec.t_cljs$spec57964.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec57964";

cljs.spec.t_cljs$spec57964.cljs$lang$ctorPrWriter = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec57964");
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

cljs.spec.__GT_t_cljs$spec57964 = ((function (keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms){
return (function cljs$spec$map_spec_impl_$___GT_t_cljs$spec57964(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,map__57962__$2,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,p__57931__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta57965){
return (new cljs.spec.t_cljs$spec57964(opt__$1,map_spec_impl__$1,req_un__$1,opt_un__$1,gfn__$1,pred_exprs__$1,keys_pred__$1,argm__$1,map__57962__$2,opt_keys__$1,req_specs__$1,keys__GT_specs__$1,p__57931__$1,req__$1,id__$1,req_keys__$1,opt_specs__$1,k__GT_s__$1,pred_forms__$1,meta57965));
});})(keys_pred,k__GT_s,keys__GT_specs,id,map__57962,map__57962__$1,argm,opt,req_un,opt_un,gfn,pred_exprs,opt_keys,req_specs,req,req_keys,opt_specs,pred_forms))
;

}

return (new cljs.spec.t_cljs$spec57964(opt,cljs$spec$map_spec_impl,req_un,opt_un,gfn,pred_exprs,keys_pred,argm,map__57962__$1,opt_keys,req_specs,keys__GT_specs,p__57931,req,id,req_keys,opt_specs,k__GT_s,pred_forms,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'spec'
 */
cljs.spec.spec_impl = (function cljs$spec$spec_impl(var_args){
var args58000 = [];
var len__27054__auto___58008 = arguments.length;
var i__27055__auto___58009 = (0);
while(true){
if((i__27055__auto___58009 < len__27054__auto___58008)){
args58000.push((arguments[i__27055__auto___58009]));

var G__58010 = (i__27055__auto___58009 + (1));
i__27055__auto___58009 = G__58010;
continue;
} else {
}
break;
}

var G__58002 = args58000.length;
switch (G__58002) {
case 4:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58000.length)].join('')));

}
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,gfn,cpred_QMARK_){
return cljs.spec.spec_impl.call(null,form,pred,gfn,cpred_QMARK_,null);
});

cljs.spec.spec_impl.cljs$core$IFn$_invoke$arity$5 = (function (form,pred,gfn,cpred_QMARK_,unc){
if(cljs.core.truth_(cljs.spec.spec_QMARK_.call(null,pred))){
var G__58003 = pred;
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__58003,gfn);
} else {
return G__58003;
}
} else {
if(cljs.core.truth_(cljs.spec.regex_QMARK_.call(null,pred))){
return cljs.spec.regex_spec_impl.call(null,pred,gfn);
} else {
if(cljs.core.truth_(cljs.spec.named_QMARK_.call(null,pred))){
var G__58004 = cljs.spec.the_spec.call(null,pred);
if(cljs.core.truth_(gfn)){
return cljs.spec.with_gen.call(null,G__58004,gfn);
} else {
return G__58004;
}
} else {
if(typeof cljs.spec.t_cljs$spec58005 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec58005 = (function (form,pred,gfn,cpred_QMARK_,unc,meta58006){
this.form = form;
this.pred = pred;
this.gfn = gfn;
this.cpred_QMARK_ = cpred_QMARK_;
this.unc = unc;
this.meta58006 = meta58006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58007,meta58006__$1){
var self__ = this;
var _58007__$1 = this;
return (new cljs.spec.t_cljs$spec58005(self__.form,self__.pred,self__.gfn,self__.cpred_QMARK_,self__.unc,meta58006__$1));
});

cljs.spec.t_cljs$spec58005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58007){
var self__ = this;
var _58007__$1 = this;
return self__.meta58006;
});

cljs.spec.t_cljs$spec58005.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58005.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_);
});

cljs.spec.t_cljs$spec58005.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.cpred_QMARK_)){
if(cljs.core.truth_(self__.unc)){
return self__.unc.call(null,x);
} else {
throw (new Error("no unform fn for conformer"));
}
} else {
return x;
}
});

cljs.spec.t_cljs$spec58005.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cljs.spec.dt.call(null,self__.pred,x,self__.form,self__.cpred_QMARK_))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
});

cljs.spec.t_cljs$spec58005.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,___$1,___$2,___$3){
var self__ = this;
var ___$4 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.gen_for_pred.call(null,self__.pred);
}
});

cljs.spec.t_cljs$spec58005.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.spec_impl.call(null,self__.form,self__.pred,gfn__$1,self__.cpred_QMARK_,self__.unc);
});

cljs.spec.t_cljs$spec58005.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.form;
});

cljs.spec.t_cljs$spec58005.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"cpred?","cpred?",35589515,null),new cljs.core.Symbol(null,"unc","unc",-465250751,null),new cljs.core.Symbol(null,"meta58006","meta58006",-713516645,null)], null);
});

cljs.spec.t_cljs$spec58005.cljs$lang$type = true;

cljs.spec.t_cljs$spec58005.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58005";

cljs.spec.t_cljs$spec58005.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58005");
});

cljs.spec.__GT_t_cljs$spec58005 = (function cljs$spec$__GT_t_cljs$spec58005(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta58006){
return (new cljs.spec.t_cljs$spec58005(form__$1,pred__$1,gfn__$1,cpred_QMARK___$1,unc__$1,meta58006));
});

}

return (new cljs.spec.t_cljs$spec58005(form,pred,gfn,cpred_QMARK_,unc,cljs.core.PersistentArrayMap.EMPTY));

}
}
}
});

cljs.spec.spec_impl.cljs$lang$maxFixedArity = 5;

/**
 * Do not call this directly, use 'multi-spec'
 */
cljs.spec.multi_spec_impl = (function cljs$spec$multi_spec_impl(var_args){
var args58017 = [];
var len__27054__auto___58031 = arguments.length;
var i__27055__auto___58032 = (0);
while(true){
if((i__27055__auto___58032 < len__27054__auto___58031)){
args58017.push((arguments[i__27055__auto___58032]));

var G__58033 = (i__27055__auto___58032 + (1));
i__27055__auto___58032 = G__58033;
continue;
} else {
}
break;
}

var G__58019 = args58017.length;
switch (G__58019) {
case 3:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58017.length)].join('')));

}
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,mmvar,retag){
return cljs.spec.multi_spec_impl.call(null,form,mmvar,retag,null);
});

cljs.spec.multi_spec_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,mmvar,retag,gfn){
var id = cljs.core.random_uuid.call(null);
var predx = ((function (id){
return (function (p1__58012_SHARP_){
var mm = cljs.core.deref.call(null,mmvar);
var and__25967__auto__ = cljs.core.contains_QMARK_.call(null,cljs.core.methods$.call(null,mm),cljs.core._dispatch_fn.call(null,mm).call(null,p1__58012_SHARP_));
if(and__25967__auto__){
return mm.call(null,p1__58012_SHARP_);
} else {
return and__25967__auto__;
}
});})(id))
;
var dval = ((function (id,predx){
return (function (p1__58013_SHARP_){
return cljs.core._dispatch_fn.call(null,cljs.core.deref.call(null,mmvar)).call(null,p1__58013_SHARP_);
});})(id,predx))
;
var tag = (((retag instanceof cljs.core.Keyword))?((function (id,predx,dval){
return (function (p1__58014_SHARP_,p2__58015_SHARP_){
return cljs.core.assoc.call(null,p1__58014_SHARP_,retag,p2__58015_SHARP_);
});})(id,predx,dval))
:retag);
if(typeof cljs.spec.t_cljs$spec58020 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec58020 = (function (form,mmvar,retag,gfn,id,predx,dval,tag,meta58021){
this.form = form;
this.mmvar = mmvar;
this.retag = retag;
this.gfn = gfn;
this.id = id;
this.predx = predx;
this.dval = dval;
this.tag = tag;
this.meta58021 = meta58021;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58020.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,predx,dval,tag){
return (function (_58022,meta58021__$1){
var self__ = this;
var _58022__$1 = this;
return (new cljs.spec.t_cljs$spec58020(self__.form,self__.mmvar,self__.retag,self__.gfn,self__.id,self__.predx,self__.dval,self__.tag,meta58021__$1));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,predx,dval,tag){
return (function (_58022){
var self__ = this;
var _58022__$1 = this;
return self__.meta58021;
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58020.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.dt.call(null,pred,x,self__.form);
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,x){
var self__ = this;
var ___$1 = this;
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.unform.call(null,pred,x);
} else {
throw (new Error([cljs.core.str("No method of: "),cljs.core.str(self__.form),cljs.core.str(" for dispatch value: "),cljs.core.str(self__.dval.call(null,x))].join('')));
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,predx,dval,tag){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var dv = self__.dval.call(null,x);
var path__$1 = cljs.core.conj.call(null,path,dv);
var temp__4655__auto__ = self__.predx.call(null,x);
if(cljs.core.truth_(temp__4655__auto__)){
var pred = temp__4655__auto__;
return cljs.spec.explain_1.call(null,self__.form,pred,path__$1,via,in$,x);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,self__.form),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"reason","reason",-2070751759),"no method",new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,predx,dval,tag){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,predx,dval,tag){
return (function (p__58023){
var vec__58024 = p__58023;
var k = cljs.core.nth.call(null,vec__58024,(0),null);
var f = cljs.core.nth.call(null,vec__58024,(1),null);
var p = f.call(null,null);
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,p,vec__58024,k,f,___$1,id,predx,dval,tag){
return (function (){
return cljs.spec.impl.gen.fmap.call(null,((function (rmap__$1,p,vec__58024,k,f,___$1,id,predx,dval,tag){
return (function (p1__58016_SHARP_){
return self__.tag.call(null,p1__58016_SHARP_,k);
});})(rmap__$1,p,vec__58024,k,f,___$1,id,predx,dval,tag))
,cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,cljs.core._conj.call(null,(function (){var x__26813__auto__ = self__.form;
return cljs.core._conj.call(null,(function (){var x__26813__auto____$1 = k;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto____$1);
})(),x__26813__auto__);
})(),new cljs.core.Symbol(null,"method","method",1696235119,null))));
});})(rmap__$1,p,vec__58024,k,f,___$1,id,predx,dval,tag))
,null)));
}
});})(___$1,id,predx,dval,tag))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,cljs.core.remove.call(null,((function (gen,___$1,id,predx,dval,tag){
return (function (p__58027){
var vec__58028 = p__58027;
var k = cljs.core.nth.call(null,vec__58028,(0),null);
return cljs.core._EQ_.call(null,k,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
});})(gen,___$1,id,predx,dval,tag))
,cljs.core.methods$.call(null,cljs.core.deref.call(null,self__.mmvar)))));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.spec.impl.gen.one_of.call(null,gs);
} else {
return null;
}
}
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,predx,dval,tag){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.multi_spec_impl.call(null,self__.form,self__.mmvar,self__.retag,gfn__$1);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,predx,dval,tag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","multi-spec","cljs.spec/multi-spec",-2053297814,null)),(function (){var x__26813__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})())));
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.getBasis = ((function (id,predx,dval,tag){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"mmvar","mmvar",-1714325675,null),new cljs.core.Symbol(null,"retag","retag",528972725,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"predx","predx",2063470948,null),new cljs.core.Symbol(null,"dval","dval",835211877,null),new cljs.core.Symbol(null,"tag","tag",350170304,null),new cljs.core.Symbol(null,"meta58021","meta58021",1076815259,null)], null);
});})(id,predx,dval,tag))
;

cljs.spec.t_cljs$spec58020.cljs$lang$type = true;

cljs.spec.t_cljs$spec58020.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58020";

cljs.spec.t_cljs$spec58020.cljs$lang$ctorPrWriter = ((function (id,predx,dval,tag){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58020");
});})(id,predx,dval,tag))
;

cljs.spec.__GT_t_cljs$spec58020 = ((function (id,predx,dval,tag){
return (function cljs$spec$__GT_t_cljs$spec58020(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta58021){
return (new cljs.spec.t_cljs$spec58020(form__$1,mmvar__$1,retag__$1,gfn__$1,id__$1,predx__$1,dval__$1,tag__$1,meta58021));
});})(id,predx,dval,tag))
;

}

return (new cljs.spec.t_cljs$spec58020(form,mmvar,retag,gfn,id,predx,dval,tag,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.multi_spec_impl.cljs$lang$maxFixedArity = 4;

/**
 * Do not call this directly, use 'tuple'
 */
cljs.spec.tuple_impl = (function cljs$spec$tuple_impl(var_args){
var args58035 = [];
var len__27054__auto___58041 = arguments.length;
var i__27055__auto___58042 = (0);
while(true){
if((i__27055__auto___58042 < len__27054__auto___58041)){
args58035.push((arguments[i__27055__auto___58042]));

var G__58043 = (i__27055__auto___58042 + (1));
i__27055__auto___58042 = G__58043;
continue;
} else {
}
break;
}

var G__58037 = args58035.length;
switch (G__58037) {
case 2:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58035.length)].join('')));

}
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$2 = (function (forms,preds){
return cljs.spec.tuple_impl.call(null,forms,preds,null);
});

cljs.spec.tuple_impl.cljs$core$IFn$_invoke$arity$3 = (function (forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec58038 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec58038 = (function (forms,preds,gfn,meta58039){
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta58039 = meta58039;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58038.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58040,meta58039__$1){
var self__ = this;
var _58040__$1 = this;
return (new cljs.spec.t_cljs$spec58038(self__.forms,self__.preds,self__.gfn,meta58039__$1));
});

cljs.spec.t_cljs$spec58038.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58040){
var self__ = this;
var _58040__$1 = this;
return self__.meta58039;
});

cljs.spec.t_cljs$spec58038.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58038.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(!((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var v = x.call(null,i);
var cv = cljs.spec.dt.call(null,self__.preds.call(null,i),v,self__.forms.call(null,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__58045 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,cv));
var G__58046 = (i + (1));
ret = G__58045;
i = G__58046;
continue;
}
}
break;
}
}
});

cljs.spec.t_cljs$spec58038.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if((cljs.core.vector_QMARK_.call(null,x)) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds)))){
} else {
throw (new Error("Assert failed: (c/and (vector? x) (= (count x) (count preds)))"));
}

var ret = x;
var i = (0);
while(true){
if(cljs.core._EQ_.call(null,i,cljs.core.count.call(null,x))){
return ret;
} else {
var cv = x.call(null,i);
var v = cljs.spec.unform.call(null,self__.preds.call(null,i),cv);
var G__58047 = (((cv === v))?ret:cljs.core.assoc.call(null,ret,i,v));
var G__58048 = (i + (1));
ret = G__58047;
i = G__58048;
continue;
}
break;
}
});

cljs.spec.t_cljs$spec58038.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(!(cljs.core.vector_QMARK_.call(null,x))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"vector?","vector?",-61367869,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.not_EQ_.call(null,cljs.core.count.call(null,x),cljs.core.count.call(null,self__.preds))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__26813__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),(function (){var x__26813__auto__ = cljs.core.count.call(null,self__.preds);
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (i,form,pred){
var v = x.call(null,i);
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,v))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,i),via,cljs.core.conj.call(null,in$,i),v);
}
});})(___$1))
,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.forms,self__.preds));

}
}
});

cljs.spec.t_cljs$spec58038.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1){
return (function (i,p,f){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,i),rmap,f);
});})(___$1))
;
var gs = cljs.core.map.call(null,gen,cljs.core.range.call(null,cljs.core.count.call(null,self__.preds)),self__.preds,self__.forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gs)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,gs);
} else {
return null;
}
}
});

cljs.spec.t_cljs$spec58038.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.tuple_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec58038.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","tuple","cljs.spec/tuple",500419708,null)),self__.forms)));
});

cljs.spec.t_cljs$spec58038.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta58039","meta58039",-1635292174,null)], null);
});

cljs.spec.t_cljs$spec58038.cljs$lang$type = true;

cljs.spec.t_cljs$spec58038.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58038";

cljs.spec.t_cljs$spec58038.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58038");
});

cljs.spec.__GT_t_cljs$spec58038 = (function cljs$spec$__GT_t_cljs$spec58038(forms__$1,preds__$1,gfn__$1,meta58039){
return (new cljs.spec.t_cljs$spec58038(forms__$1,preds__$1,gfn__$1,meta58039));
});

}

return (new cljs.spec.t_cljs$spec58038(forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.tuple_impl.cljs$lang$maxFixedArity = 3;

cljs.spec.tagged_ret = (function cljs$spec$tagged_ret(v){
var x58050 = v;
x58050.cljs$core$IMapEntry$ = true;

x58050.cljs$core$IMapEntry$_key$arity$1 = ((function (x58050){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(0));
});})(x58050))
;

x58050.cljs$core$IMapEntry$_val$arity$1 = ((function (x58050){
return (function (_){
var ___$1 = this;
return cljs.core._nth.call(null,v,(1));
});})(x58050))
;

return x58050;
});
/**
 * Do not call this directly, use 'or'
 */
cljs.spec.or_spec_impl = (function cljs$spec$or_spec_impl(keys,forms,preds,gfn){
var id = cljs.core.random_uuid.call(null);
var kps = cljs.core.zipmap.call(null,keys,preds);
var cform = ((function (id,kps){
return (function (x){
var i = (0);
while(true){
if((i < cljs.core.count.call(null,preds))){
var pred = preds.call(null,i);
var ret = cljs.spec.dt.call(null,pred,x,cljs.core.nth.call(null,forms,i));
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret)){
var G__58065 = (i + (1));
i = G__58065;
continue;
} else {
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [keys.call(null,i),ret], null));
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
break;
}
});})(id,kps))
;
if(typeof cljs.spec.t_cljs$spec58058 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec58058 = (function (or_spec_impl,keys,forms,preds,gfn,id,kps,cform,meta58059){
this.or_spec_impl = or_spec_impl;
this.keys = keys;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.id = id;
this.kps = kps;
this.cform = cform;
this.meta58059 = meta58059;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58058.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (id,kps,cform){
return (function (_58060,meta58059__$1){
var self__ = this;
var _58060__$1 = this;
return (new cljs.spec.t_cljs$spec58058(self__.or_spec_impl,self__.keys,self__.forms,self__.preds,self__.gfn,self__.id,self__.kps,self__.cform,meta58059__$1));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (id,kps,cform){
return (function (_58060){
var self__ = this;
var _58060__$1 = this;
return self__.meta58059;
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58058.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return self__.cform.call(null,x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,p__58061){
var self__ = this;
var vec__58062 = p__58061;
var k = cljs.core.nth.call(null,vec__58062,(0),null);
var x = cljs.core.nth.call(null,vec__58062,(1),null);
var ___$1 = this;
return cljs.spec.unform.call(null,self__.kps.call(null,k),x);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (id,kps,cform){
return (function (this$,path,via,in$,x){
var self__ = this;
var this$__$1 = this;
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,this$__$1,x))){
return null;
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (this$__$1,id,kps,cform){
return (function (k,form,pred){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,pred,x))){
return null;
} else {
return cljs.spec.explain_1.call(null,form,pred,cljs.core.conj.call(null,path,k),via,in$,x);
}
});})(this$__$1,id,kps,cform))
,self__.keys,self__.forms,self__.preds));
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (id,kps,cform){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var gen = ((function (___$1,id,kps,cform){
return (function (k,p,f){
var rmap__$1 = cljs.spec.inck.call(null,rmap,self__.id);
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,self__.id,path,k))){
return null;
} else {
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (rmap__$1,___$1,id,kps,cform){
return (function (){
return cljs.spec.gensub.call(null,p,overrides,cljs.core.conj.call(null,path,k),rmap__$1,f);
});})(rmap__$1,___$1,id,kps,cform))
,null)));
}
});})(___$1,id,kps,cform))
;
var gs = cljs.core.remove.call(null,cljs.core.nil_QMARK_,cljs.core.map.call(null,gen,self__.keys,self__.preds,self__.forms));
if(cljs.core.empty_QMARK_.call(null,gs)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gs);
}
}
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (id,kps,cform){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.or_spec_impl.call(null,self__.keys,self__.forms,self__.preds,gfn__$1);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (id,kps,cform){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","or","cljs.spec/or",1200597689,null)),cljs.core.mapcat.call(null,cljs.core.vector,self__.keys,self__.forms))));
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.getBasis = ((function (id,kps,cform){
return (function (){
return new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"or-spec-impl","or-spec-impl",-1412945461,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'or'"], null)),new cljs.core.Symbol(null,"keys","keys",-1586012071,null),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"kps","kps",-1157342767,null),new cljs.core.Symbol(null,"cform","cform",1319506748,null),new cljs.core.Symbol(null,"meta58059","meta58059",-930513163,null)], null);
});})(id,kps,cform))
;

cljs.spec.t_cljs$spec58058.cljs$lang$type = true;

cljs.spec.t_cljs$spec58058.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58058";

cljs.spec.t_cljs$spec58058.cljs$lang$ctorPrWriter = ((function (id,kps,cform){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58058");
});})(id,kps,cform))
;

cljs.spec.__GT_t_cljs$spec58058 = ((function (id,kps,cform){
return (function cljs$spec$or_spec_impl_$___GT_t_cljs$spec58058(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta58059){
return (new cljs.spec.t_cljs$spec58058(or_spec_impl__$1,keys__$1,forms__$1,preds__$1,gfn__$1,id__$1,kps__$1,cform__$1,meta58059));
});})(id,kps,cform))
;

}

return (new cljs.spec.t_cljs$spec58058(cljs$spec$or_spec_impl,keys,forms,preds,gfn,id,kps,cform,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.and_preds = (function cljs$spec$and_preds(x,preds,forms){
var ret = x;
var G__58092 = preds;
var vec__58094 = G__58092;
var seq__58095 = cljs.core.seq.call(null,vec__58094);
var first__58096 = cljs.core.first.call(null,seq__58095);
var seq__58095__$1 = cljs.core.next.call(null,seq__58095);
var pred = first__58096;
var preds__$1 = seq__58095__$1;
var G__58093 = forms;
var vec__58097 = G__58093;
var seq__58098 = cljs.core.seq.call(null,vec__58097);
var first__58099 = cljs.core.first.call(null,seq__58098);
var seq__58098__$1 = cljs.core.next.call(null,seq__58098);
var form = first__58099;
var forms__$1 = seq__58098__$1;
var ret__$1 = ret;
var G__58092__$1 = G__58092;
var G__58093__$1 = G__58093;
while(true){
var ret__$2 = ret__$1;
var vec__58100 = G__58092__$1;
var seq__58101 = cljs.core.seq.call(null,vec__58100);
var first__58102 = cljs.core.first.call(null,seq__58101);
var seq__58101__$1 = cljs.core.next.call(null,seq__58101);
var pred__$1 = first__58102;
var preds__$2 = seq__58101__$1;
var vec__58103 = G__58093__$1;
var seq__58104 = cljs.core.seq.call(null,vec__58103);
var first__58105 = cljs.core.first.call(null,seq__58104);
var seq__58104__$1 = cljs.core.next.call(null,seq__58104);
var form__$1 = first__58105;
var forms__$2 = seq__58104__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__58106 = nret;
var G__58107 = preds__$2;
var G__58108 = forms__$2;
ret__$1 = G__58106;
G__58092__$1 = G__58107;
G__58093__$1 = G__58108;
continue;
}
} else {
return ret__$2;
}
break;
}
});
cljs.spec.explain_pred_list = (function cljs$spec$explain_pred_list(forms,preds,path,via,in$,x){
var ret = x;
var G__58135 = forms;
var vec__58137 = G__58135;
var seq__58138 = cljs.core.seq.call(null,vec__58137);
var first__58139 = cljs.core.first.call(null,seq__58138);
var seq__58138__$1 = cljs.core.next.call(null,seq__58138);
var form = first__58139;
var forms__$1 = seq__58138__$1;
var G__58136 = preds;
var vec__58140 = G__58136;
var seq__58141 = cljs.core.seq.call(null,vec__58140);
var first__58142 = cljs.core.first.call(null,seq__58141);
var seq__58141__$1 = cljs.core.next.call(null,seq__58141);
var pred = first__58142;
var preds__$1 = seq__58141__$1;
var ret__$1 = ret;
var G__58135__$1 = G__58135;
var G__58136__$1 = G__58136;
while(true){
var ret__$2 = ret__$1;
var vec__58143 = G__58135__$1;
var seq__58144 = cljs.core.seq.call(null,vec__58143);
var first__58145 = cljs.core.first.call(null,seq__58144);
var seq__58144__$1 = cljs.core.next.call(null,seq__58144);
var form__$1 = first__58145;
var forms__$2 = seq__58144__$1;
var vec__58146 = G__58136__$1;
var seq__58147 = cljs.core.seq.call(null,vec__58146);
var first__58148 = cljs.core.first.call(null,seq__58147);
var seq__58147__$1 = cljs.core.next.call(null,seq__58147);
var pred__$1 = first__58148;
var preds__$2 = seq__58147__$1;
if(cljs.core.truth_(pred__$1)){
var nret = cljs.spec.dt.call(null,pred__$1,ret__$2,form__$1);
if(cljs.core.not_EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),nret)){
var G__58149 = nret;
var G__58150 = forms__$2;
var G__58151 = preds__$2;
ret__$1 = G__58149;
G__58135__$1 = G__58150;
G__58136__$1 = G__58151;
continue;
} else {
return cljs.spec.explain_1.call(null,form__$1,pred__$1,path,via,in$,ret__$2);
}
} else {
return null;
}
break;
}
});
/**
 * Do not call this directly, use 'and'
 */
cljs.spec.and_spec_impl = (function cljs$spec$and_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec58157 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec58157 = (function (and_spec_impl,forms,preds,gfn,meta58158){
this.and_spec_impl = and_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta58158 = meta58158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58159,meta58158__$1){
var self__ = this;
var _58159__$1 = this;
return (new cljs.spec.t_cljs$spec58157(self__.and_spec_impl,self__.forms,self__.preds,self__.gfn,meta58158__$1));
});

cljs.spec.t_cljs$spec58157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58159){
var self__ = this;
var _58159__$1 = this;
return self__.meta58158;
});

cljs.spec.t_cljs$spec58157.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58157.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.and_preds.call(null,x,self__.preds,self__.forms);
});

cljs.spec.t_cljs$spec58157.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.call(null,((function (___$1){
return (function (p1__58153_SHARP_,p2__58152_SHARP_){
return cljs.spec.unform.call(null,p2__58152_SHARP_,p1__58153_SHARP_);
});})(___$1))
,x,cljs.core.reverse.call(null,self__.preds));
});

cljs.spec.t_cljs$spec58157.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.explain_pred_list.call(null,self__.forms,self__.preds,path,via,in$,x);
});

cljs.spec.t_cljs$spec58157.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.gensub.call(null,cljs.core.first.call(null,self__.preds),overrides,path,rmap,cljs.core.first.call(null,self__.forms));
}
});

cljs.spec.t_cljs$spec58157.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.and_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec58157.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","and","cljs.spec/and",-7296553,null)),self__.forms)));
});

cljs.spec.t_cljs$spec58157.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"and-spec-impl","and-spec-impl",1127339973,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'and'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta58158","meta58158",1300887040,null)], null);
});

cljs.spec.t_cljs$spec58157.cljs$lang$type = true;

cljs.spec.t_cljs$spec58157.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58157";

cljs.spec.t_cljs$spec58157.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58157");
});

cljs.spec.__GT_t_cljs$spec58157 = (function cljs$spec$and_spec_impl_$___GT_t_cljs$spec58157(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta58158){
return (new cljs.spec.t_cljs$spec58157(and_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta58158));
});

}

return (new cljs.spec.t_cljs$spec58157(cljs$spec$and_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.coll_prob = (function cljs$spec$coll_prob(x,kfn,kform,distinct,count,min_count,max_count,path,via,in$){
var pred = (function (){var or__25979__auto__ = kfn;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.coll_QMARK_;
}
})();
var kform__$1 = (function (){var or__25979__auto__ = kform;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Symbol("cljs.core","coll?","cljs.core/coll?",1208130522,null);
}
})();
if(cljs.core.not.call(null,cljs.spec.valid_QMARK_.call(null,pred,x))){
return cljs.spec.explain_1.call(null,kform__$1,pred,path,via,in$,x);
} else {
if(cljs.core.truth_((function (){var and__25967__auto__ = distinct;
if(cljs.core.truth_(and__25967__auto__)){
return (!(cljs.core.empty_QMARK_.call(null,x))) && (cljs.core.not.call(null,cljs.core.apply.call(null,cljs.core.distinct_QMARK_,x)));
} else {
return and__25967__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"distinct?","distinct?",-1684357959,null),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__25967__auto__ = count;
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.not_EQ_.call(null,count,cljs.core.bounded_count.call(null,count,x));
} else {
return and__25967__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","=","cljs.core/=",-1891498332,null)),(function (){var x__26813__auto__ = count;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),(function (){var x__26813__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","count","cljs.core/count",-921270233,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol(null,"%","%",-950237169,null)))));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
if(cljs.core.truth_((function (){var and__25967__auto__ = (function (){var or__25979__auto__ = min_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return max_count;
}
})();
if(cljs.core.truth_(and__25967__auto__)){
return !((((function (){var or__25979__auto__ = min_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})() <= cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x))) && ((cljs.core.bounded_count.call(null,(cljs.core.truth_(max_count)?(max_count + (1)):min_count),x) <= (function (){var or__25979__auto__ = max_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.spec.MAX_INT;
}
})())));
} else {
return and__25967__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.core","<=","cljs.core/<=",1677001748,null)),(function (){var x__26813__auto__ = (function (){var or__25979__auto__ = min_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),(function (){var x__26813__auto__ = cljs.core.count.call(null,cljs.core.unquote.call(null,new cljs.core.Symbol(null,"%","%",-950237169,null)));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),(function (){var x__26813__auto__ = (function (){var or__25979__auto__ = max_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Symbol("js","Number.MAX_SAFE_INTEGER","js/Number.MAX_SAFE_INTEGER",-1535627560,null);
}
})();
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})()))),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
return null;
}
}
}
}
});
/**
 * Do not call this directly, use 'merge'
 */
cljs.spec.merge_spec_impl = (function cljs$spec$merge_spec_impl(forms,preds,gfn){
if(typeof cljs.spec.t_cljs$spec58171 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec58171 = (function (merge_spec_impl,forms,preds,gfn,meta58172){
this.merge_spec_impl = merge_spec_impl;
this.forms = forms;
this.preds = preds;
this.gfn = gfn;
this.meta58172 = meta58172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58173,meta58172__$1){
var self__ = this;
var _58173__$1 = this;
return (new cljs.spec.t_cljs$spec58171(self__.merge_spec_impl,self__.forms,self__.preds,self__.gfn,meta58172__$1));
});

cljs.spec.t_cljs$spec58171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58173){
var self__ = this;
var _58173__$1 = this;
return self__.meta58172;
});

cljs.spec.t_cljs$spec58171.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58171.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
var ms = cljs.core.map.call(null,((function (___$1){
return (function (p1__58160_SHARP_,p2__58161_SHARP_){
return cljs.spec.dt.call(null,p1__58160_SHARP_,x,p2__58161_SHARP_);
});})(___$1))
,self__.preds,self__.forms);
if(cljs.core.truth_(cljs.core.some.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),null], null), null),ms))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
return cljs.core.apply.call(null,cljs.core.merge,ms);
}
});

cljs.spec.t_cljs$spec58171.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.merge,cljs.core.map.call(null,((function (___$1){
return (function (p1__58162_SHARP_){
return cljs.spec.unform.call(null,p1__58162_SHARP_,x);
});})(___$1))
,cljs.core.reverse.call(null,self__.preds)));
});

cljs.spec.t_cljs$spec58171.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (___$1){
return (function (p1__58163_SHARP_,p2__58164_SHARP_){
return cljs.spec.explain_1.call(null,p1__58163_SHARP_,p2__58164_SHARP_,path,via,in$,x);
});})(___$1))
,self__.forms,self__.preds));
});

cljs.spec.t_cljs$spec58171.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.fmap.call(null,((function (___$1){
return (function (p1__58165_SHARP_){
return cljs.core.apply.call(null,cljs.core.merge,p1__58165_SHARP_);
});})(___$1))
,cljs.core.apply.call(null,cljs.spec.impl.gen.tuple,cljs.core.map.call(null,((function (___$1){
return (function (p1__58166_SHARP_,p2__58167_SHARP_){
return cljs.spec.gensub.call(null,p1__58166_SHARP_,overrides,path,rmap,p2__58167_SHARP_);
});})(___$1))
,self__.preds,self__.forms)));
}
});

cljs.spec.t_cljs$spec58171.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.merge_spec_impl.call(null,self__.forms,self__.preds,gfn__$1);
});

cljs.spec.t_cljs$spec58171.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","merge","cljs.spec/merge",-838422687,null)),self__.forms)));
});

cljs.spec.t_cljs$spec58171.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"merge-spec-impl","merge-spec-impl",397115684,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'merge'"], null)),new cljs.core.Symbol(null,"forms","forms",-608443419,null),new cljs.core.Symbol(null,"preds","preds",150921777,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta58172","meta58172",-2028599438,null)], null);
});

cljs.spec.t_cljs$spec58171.cljs$lang$type = true;

cljs.spec.t_cljs$spec58171.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58171";

cljs.spec.t_cljs$spec58171.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58171");
});

cljs.spec.__GT_t_cljs$spec58171 = (function cljs$spec$merge_spec_impl_$___GT_t_cljs$spec58171(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta58172){
return (new cljs.spec.t_cljs$spec58171(merge_spec_impl__$1,forms__$1,preds__$1,gfn__$1,meta58172));
});

}

return (new cljs.spec.t_cljs$spec58171(cljs$spec$merge_spec_impl,forms,preds,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Do not call this directly, use 'every', 'every-kv', 'coll-of' or 'map-of'
 */
cljs.spec.every_impl = (function cljs$spec$every_impl(var_args){
var args58178 = [];
var len__27054__auto___58203 = arguments.length;
var i__27055__auto___58204 = (0);
while(true){
if((i__27055__auto___58204 < len__27054__auto___58203)){
args58178.push((arguments[i__27055__auto___58204]));

var G__58205 = (i__27055__auto___58204 + (1));
i__27055__auto___58204 = G__58205;
continue;
} else {
}
break;
}

var G__58180 = args58178.length;
switch (G__58180) {
case 3:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58178.length)].join('')));

}
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$3 = (function (form,pred,opts){
return cljs.spec.every_impl.call(null,form,pred,opts,null);
});

cljs.spec.every_impl.cljs$core$IFn$_invoke$arity$4 = (function (form,pred,p__58181,gfn){
var map__58182 = p__58181;
var map__58182__$1 = ((((!((map__58182 == null)))?((((map__58182.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58182.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58182):map__58182);
var opts = map__58182__$1;
var max_count = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword(null,"max-count","max-count",1539185305));
var kfn = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword("cljs.spec","kfn","cljs.spec/kfn",293196937));
var gen_max = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword(null,"gen-max","gen-max",-793680445),(20));
var conform_all = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword("cljs.spec","conform-all","cljs.spec/conform-all",-1945029907));
var conform_keys = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword(null,"conform-keys","conform-keys",-1800041814));
var distinct = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword(null,"distinct","distinct",-1788879121));
var kind_form = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword("cljs.spec","kind-form","cljs.spec/kind-form",997489303));
var gen_into = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword(null,"into","into",-150836029),cljs.core.PersistentVector.EMPTY);
var count = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword(null,"count","count",2139924085));
var min_count = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword(null,"min-count","min-count",1594709013));
var kind = cljs.core.get.call(null,map__58182__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var conform_into = gen_into;
var check_QMARK_ = ((function (conform_into,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__58174_SHARP_){
return cljs.spec.valid_QMARK_.call(null,pred,p1__58174_SHARP_);
});})(conform_into,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var kfn__$1 = (function (){var or__25979__auto__ = kfn;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return ((function (or__25979__auto__,conform_into,check_QMARK_,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
return i;
});
;})(or__25979__auto__,conform_into,check_QMARK_,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
}
})();
var addcv = ((function (conform_into,check_QMARK_,kfn__$1,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
return cljs.core.conj.call(null,ret,cv);
});})(conform_into,check_QMARK_,kfn__$1,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
var vec__58184 = ((cljs.core.map_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map_QMARK_,new cljs.core.Symbol("cljs.core","map?","cljs.core/map?",-1390345523,null)], null):((cljs.core.vector_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.vector_QMARK_,new cljs.core.Symbol("cljs.core","vector?","cljs.core/vector?",-1550392028,null)], null):((cljs.core.list_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.list_QMARK_,new cljs.core.Symbol("cljs.core","list?","cljs.core/list?",-684796618,null)], null):((cljs.core.set_QMARK_.call(null,kind))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.set_QMARK_,new cljs.core.Symbol("cljs.core","set?","cljs.core/set?",-1176684971,null)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seqable_QMARK_,new cljs.core.Symbol("cljs.core","seqable?","cljs.core/seqable?",-745394886,null)], null)
))));
var kindfn = cljs.core.nth.call(null,vec__58184,(0),null);
var kindform = cljs.core.nth.call(null,vec__58184,(1),null);
var cfns = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (x){
if((cljs.core.vector_QMARK_.call(null,x)) && ((cljs.core.not.call(null,conform_into)) || (cljs.core.vector_QMARK_.call(null,conform_into)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.identity,((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if((v === cv)){
return ret;
} else {
return cljs.core.assoc.call(null,ret,i,cv);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.truth_((function (){var and__25967__auto__ = cljs.core.map_QMARK_.call(null,x);
if(and__25967__auto__){
var or__25979__auto__ = (function (){var and__25967__auto____$1 = kind;
if(cljs.core.truth_(and__25967__auto____$1)){
return cljs.core.not.call(null,conform_into);
} else {
return and__25967__auto____$1;
}
})();
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.map_QMARK_.call(null,conform_into);
}
} else {
return and__25967__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(conform_keys)?cljs.core.empty:cljs.core.identity),((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (ret,i,v,cv){
if(((v === cv)) && (cljs.core.not.call(null,conform_keys))){
return ret;
} else {
return cljs.core.assoc.call(null,ret,cljs.core.nth.call(null,(cljs.core.truth_(conform_keys)?cv:v),(0)),cljs.core.nth.call(null,cv,(1)));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.identity], null);
} else {
if(cljs.core.list_QMARK_.call(null,x)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.empty,addcv,cljs.core.reverse], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__58175_SHARP_){
return cljs.core.empty.call(null,(function (){var or__25979__auto__ = conform_into;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return p1__58175_SHARP_;
}
})());
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,addcv,cljs.core.identity], null);

}
}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;
if(typeof cljs.spec.t_cljs$spec58187 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec58187 = (function (form,max_count,check_QMARK_,gfn,gen_max,pred,p__58181,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn,gen_into,map__58182,count,min_count,opts,kind,vec__58184,conform_all,conform_into,meta58188){
this.form = form;
this.max_count = max_count;
this.check_QMARK_ = check_QMARK_;
this.gfn = gfn;
this.gen_max = gen_max;
this.pred = pred;
this.p__58181 = p__58181;
this.kindform = kindform;
this.conform_keys = conform_keys;
this.kind_form = kind_form;
this.addcv = addcv;
this.cfns = cfns;
this.distinct = distinct;
this.kindfn = kindfn;
this.kfn = kfn;
this.gen_into = gen_into;
this.map__58182 = map__58182;
this.count = count;
this.min_count = min_count;
this.opts = opts;
this.kind = kind;
this.vec__58184 = vec__58184;
this.conform_all = conform_all;
this.conform_into = conform_into;
this.meta58188 = meta58188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_58189,meta58188__$1){
var self__ = this;
var _58189__$1 = this;
return (new cljs.spec.t_cljs$spec58187(self__.form,self__.max_count,self__.check_QMARK_,self__.gfn,self__.gen_max,self__.pred,self__.p__58181,self__.kindform,self__.conform_keys,self__.kind_form,self__.addcv,self__.cfns,self__.distinct,self__.kindfn,self__.kfn,self__.gen_into,self__.map__58182,self__.count,self__.min_count,self__.opts,self__.kind,self__.vec__58184,self__.conform_all,self__.conform_into,meta58188__$1));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_58189){
var self__ = this;
var _58189__$1 = this;
return self__.meta58188;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58187.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,null,null,null))){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
if(cljs.core.truth_(self__.conform_all)){
var vec__58190 = self__.cfns.call(null,x);
var init = cljs.core.nth.call(null,vec__58190,(0),null);
var add = cljs.core.nth.call(null,vec__58190,(1),null);
var complete = cljs.core.nth.call(null,vec__58190,(2),null);
var ret = init.call(null,x);
var i = (0);
var G__58196 = cljs.core.seq.call(null,x);
var vec__58197 = G__58196;
var seq__58198 = cljs.core.seq.call(null,vec__58197);
var first__58199 = cljs.core.first.call(null,seq__58198);
var seq__58198__$1 = cljs.core.next.call(null,seq__58198);
var v = first__58199;
var vs = seq__58198__$1;
var vseq = vec__58197;
var ret__$1 = ret;
var i__$1 = i;
var G__58196__$1 = G__58196;
while(true){
var ret__$2 = ret__$1;
var i__$2 = i__$1;
var vec__58200 = G__58196__$1;
var seq__58201 = cljs.core.seq.call(null,vec__58200);
var first__58202 = cljs.core.first.call(null,seq__58201);
var seq__58201__$1 = cljs.core.next.call(null,seq__58201);
var v__$1 = first__58202;
var vs__$1 = seq__58201__$1;
var vseq__$1 = vec__58200;
if(vseq__$1){
var cv = cljs.spec.dt.call(null,self__.pred,v__$1,null);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cv)){
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
} else {
var G__58207 = add.call(null,ret__$2,i__$2,v__$1,cv);
var G__58208 = (i__$2 + (1));
var G__58209 = vs__$1;
ret__$1 = G__58207;
i__$1 = G__58208;
G__58196__$1 = G__58209;
continue;
}
} else {
return complete.call(null,ret__$2);
}
break;
}
} else {
if(cljs.core.indexed_QMARK_.call(null,x)){
var step = (function (){var x__26310__auto__ = (1);
var y__26311__auto__ = cljs.core.long$.call(null,(cljs.core.count.call(null,x) / cljs.spec._STAR_coll_check_limit_STAR_));
return ((x__26310__auto__ > y__26311__auto__) ? x__26310__auto__ : y__26311__auto__);
})();
var i = (0);
while(true){
if((i >= cljs.core.count.call(null,x))){
return x;
} else {
if(cljs.core.truth_(self__.check_QMARK_.call(null,cljs.core.nth.call(null,x,i)))){
var G__58210 = (i + step);
i = G__58210;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
} else {
var or__25979__auto__ = (function (){var and__25967__auto__ = cljs.core.every_QMARK_.call(null,self__.check_QMARK_,cljs.core.take.call(null,cljs.spec._STAR_coll_check_limit_STAR_,x));
if(and__25967__auto__){
return x;
} else {
return and__25967__auto__;
}
})();
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}

}
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,x){
var self__ = this;
var ___$1 = this;
return x;
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
var or__25979__auto__ = cljs.spec.coll_prob.call(null,x,self__.kind,self__.kind_form,self__.distinct,self__.count,self__.min_count,self__.max_count,path,via,in$);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.apply.call(null,cljs.core.concat,(cljs.core.truth_(self__.conform_all)?cljs.core.identity:cljs.core.partial.call(null,cljs.core.take,cljs.spec._STAR_coll_error_limit_STAR_)).call(null,cljs.core.keep.call(null,cljs.core.identity,cljs.core.map.call(null,((function (or__25979__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (i,v){
var k = self__.kfn.call(null,i,v);
if(cljs.core.truth_(self__.check_QMARK_.call(null,v))){
return null;
} else {
var prob = cljs.spec.explain_1.call(null,self__.form,self__.pred,path,via,cljs.core.conj.call(null,in$,k),v);
return prob;
}
});})(or__25979__auto__,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.core.range.call(null),x))));
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
var pgen = cljs.spec.gensub.call(null,self__.pred,overrides,path,rmap,self__.form);
return cljs.spec.impl.gen.bind.call(null,(cljs.core.truth_(self__.gen_into)?cljs.spec.impl.gen.return$.call(null,cljs.core.empty.call(null,self__.gen_into)):(cljs.core.truth_(self__.kind)?cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__58176_SHARP_){
if(cljs.core.empty_QMARK_.call(null,p1__58176_SHARP_)){
return p1__58176_SHARP_;
} else {
return cljs.core.empty.call(null,p1__58176_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,cljs.spec.gensub.call(null,self__.kind,overrides,path,rmap,self__.form)):cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY)
)),((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (init){
return cljs.spec.impl.gen.fmap.call(null,((function (pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (p1__58177_SHARP_){
if(cljs.core.vector_QMARK_.call(null,init)){
return p1__58177_SHARP_;
} else {
return cljs.core.into.call(null,init,p1__58177_SHARP_);
}
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
,(cljs.core.truth_(self__.distinct)?(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"num-elements","num-elements",1960422107),self__.count,new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null)):cljs.spec.impl.gen.vector_distinct.call(null,pgen,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(function (){var or__25979__auto__ = self__.min_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(function (){var or__25979__auto__ = self__.max_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var x__26310__auto__ = self__.gen_max;
var y__26311__auto__ = ((2) * (function (){var or__25979__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return (0);
}
})());
return ((x__26310__auto__ > y__26311__auto__) ? x__26310__auto__ : y__26311__auto__);
}
})(),new cljs.core.Keyword(null,"max-tries","max-tries",-1824441792),(100)], null))):(cljs.core.truth_(self__.count)?cljs.spec.impl.gen.vector.call(null,pgen,self__.count):(cljs.core.truth_((function (){var or__25979__auto__ = self__.min_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return self__.max_count;
}
})())?cljs.spec.impl.gen.vector.call(null,pgen,(function (){var or__25979__auto__ = self__.min_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})(),(function (){var or__25979__auto__ = self__.max_count;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var x__26310__auto__ = self__.gen_max;
var y__26311__auto__ = ((2) * (function (){var or__25979__auto____$1 = self__.min_count;
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return (0);
}
})());
return ((x__26310__auto__ > y__26311__auto__) ? x__26310__auto__ : y__26311__auto__);
}
})()):cljs.spec.impl.gen.vector.call(null,pgen,(0),self__.gen_max)
))));
});})(pgen,___$1,conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
);
}
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return cljs.spec.every_impl.call(null,self__.form,self__.pred,self__.opts,gfn__$1);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","every","cljs.spec/every",-1899705480,null)),(function (){var x__26813__auto__ = self__.form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),cljs.core.mapcat.call(null,cljs.core.identity,self__.opts))));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.getBasis = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (){
return new cljs.core.PersistentVector(null, 25, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"form","form",16469056,null),new cljs.core.Symbol(null,"max-count","max-count",-1115250464,null),new cljs.core.Symbol(null,"check?","check?",409539557,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"gen-max","gen-max",846851082,null),new cljs.core.Symbol(null,"pred","pred",-727012372,null),new cljs.core.Symbol(null,"p__58181","p__58181",727721680,null),new cljs.core.Symbol(null,"kindform","kindform",839835536,null),new cljs.core.Symbol(null,"conform-keys","conform-keys",-159510287,null),new cljs.core.Symbol(null,"kind-form","kind-form",1155997457,null),new cljs.core.Symbol(null,"addcv","addcv",-1552991247,null),new cljs.core.Symbol(null,"cfns","cfns",1335482066,null),new cljs.core.Symbol(null,"distinct","distinct",-148347594,null),new cljs.core.Symbol(null,"kindfn","kindfn",1062796440,null),new cljs.core.Symbol(null,"kfn","kfn",729311001,null),new cljs.core.Symbol(null,"gen-into","gen-into",592640985,null),new cljs.core.Symbol(null,"map__58182","map__58182",1204088347,null),new cljs.core.Symbol(null,"count","count",-514511684,null),new cljs.core.Symbol(null,"min-count","min-count",-1059726756,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"kind","kind",923265724,null),new cljs.core.Symbol(null,"vec__58184","vec__58184",589124669,null),new cljs.core.Symbol(null,"conform-all","conform-all",-980179459,null),new cljs.core.Symbol(null,"conform-into","conform-into",-1039113729,null),new cljs.core.Symbol(null,"meta58188","meta58188",1231310387,null)], null);
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.t_cljs$spec58187.cljs$lang$type = true;

cljs.spec.t_cljs$spec58187.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58187";

cljs.spec.t_cljs$spec58187.cljs$lang$ctorPrWriter = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58187");
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

cljs.spec.__GT_t_cljs$spec58187 = ((function (conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind){
return (function cljs$spec$__GT_t_cljs$spec58187(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__58181__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,map__58182__$2,count__$1,min_count__$1,opts__$1,kind__$1,vec__58184__$1,conform_all__$1,conform_into__$1,meta58188){
return (new cljs.spec.t_cljs$spec58187(form__$1,max_count__$1,check_QMARK___$1,gfn__$1,gen_max__$1,pred__$1,p__58181__$1,kindform__$1,conform_keys__$1,kind_form__$1,addcv__$1,cfns__$1,distinct__$1,kindfn__$1,kfn__$2,gen_into__$1,map__58182__$2,count__$1,min_count__$1,opts__$1,kind__$1,vec__58184__$1,conform_all__$1,conform_into__$1,meta58188));
});})(conform_into,check_QMARK_,kfn__$1,addcv,vec__58184,kindfn,kindform,cfns,map__58182,map__58182__$1,opts,max_count,kfn,gen_max,conform_all,conform_keys,distinct,kind_form,gen_into,count,min_count,kind))
;

}

return (new cljs.spec.t_cljs$spec58187(form,max_count,check_QMARK_,gfn,gen_max,pred,p__58181,kindform,conform_keys,kind_form,addcv,cfns,distinct,kindfn,kfn__$1,gen_into,map__58182__$1,count,min_count,opts,kind,vec__58184,conform_all,conform_into,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.spec.every_impl.cljs$lang$maxFixedArity = 4;

cljs.spec.accept = (function cljs$spec$accept(x){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword(null,"ret","ret",-468222814),x], null);
});
cljs.spec.accept_QMARK_ = (function cljs$spec$accept_QMARK_(p__58211){
var map__58214 = p__58211;
var map__58214__$1 = ((((!((map__58214 == null)))?((((map__58214.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58214.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58214):map__58214);
var op = cljs.core.get.call(null,map__58214__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
return cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),op);
});
cljs.spec.pcat_STAR_ = (function cljs$spec$pcat_STAR_(p__58216){
var map__58228 = p__58216;
var map__58228__$1 = ((((!((map__58228 == null)))?((((map__58228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58228):map__58228);
var vec__58229 = cljs.core.get.call(null,map__58228__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__58230 = cljs.core.seq.call(null,vec__58229);
var first__58231 = cljs.core.first.call(null,seq__58230);
var seq__58230__$1 = cljs.core.next.call(null,seq__58230);
var p1 = first__58231;
var pr = seq__58230__$1;
var ps = vec__58229;
var vec__58232 = cljs.core.get.call(null,map__58228__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__58233 = cljs.core.seq.call(null,vec__58232);
var first__58234 = cljs.core.first.call(null,seq__58233);
var seq__58233__$1 = cljs.core.next.call(null,seq__58233);
var k1 = first__58234;
var kr = seq__58233__$1;
var ks = vec__58232;
var vec__58235 = cljs.core.get.call(null,map__58228__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var seq__58236 = cljs.core.seq.call(null,vec__58235);
var first__58237 = cljs.core.first.call(null,seq__58236);
var seq__58236__$1 = cljs.core.next.call(null,seq__58236);
var f1 = first__58237;
var fr = seq__58236__$1;
var forms = vec__58235;
var ret = cljs.core.get.call(null,map__58228__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var rep_PLUS_ = cljs.core.get.call(null,map__58228__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,ps)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
var rp = new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1);
var ret__$1 = cljs.core.conj.call(null,ret,(cljs.core.truth_(ks)?cljs.core.PersistentArrayMap.fromArray([k1,rp], true, false):rp));
if(pr){
return cljs$spec$pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),fr,new cljs.core.Keyword(null,"ret","ret",-468222814),ret__$1], null));
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),ret,new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"rep+","rep+",-281382396),rep_PLUS_], null);
}
} else {
return null;
}
});
cljs.spec.pcat = (function cljs$spec$pcat(var_args){
var args__27061__auto__ = [];
var len__27054__auto___58240 = arguments.length;
var i__27055__auto___58241 = (0);
while(true){
if((i__27055__auto___58241 < len__27054__auto___58240)){
args__27061__auto__.push((arguments[i__27055__auto___58241]));

var G__58242 = (i__27055__auto___58241 + (1));
i__27055__auto___58241 = G__58242;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY], null));
});

cljs.spec.pcat.cljs$lang$maxFixedArity = (0);

cljs.spec.pcat.cljs$lang$applyTo = (function (seq58239){
return cljs.spec.pcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58239));
});

/**
 * Do not call this directly, use 'cat'
 */
cljs.spec.cat_impl = (function cljs$spec$cat_impl(ks,ps,forms){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"ps","ps",292358046),ps,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentArrayMap.EMPTY], null));
});
cljs.spec.rep_STAR_ = (function cljs$spec$rep_STAR_(p1,p2,ret,splice,form){
if(cljs.core.truth_(p1)){
var r = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),new cljs.core.Keyword(null,"p2","p2",905500641),p2,new cljs.core.Keyword(null,"splice","splice",449588165),splice,new cljs.core.Keyword(null,"forms","forms",2045992350),form,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null)], null);
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p2,new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.conj.call(null,ret,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)));
} else {
return cljs.core.assoc.call(null,r,new cljs.core.Keyword(null,"p1","p1",-936759954),p1,new cljs.core.Keyword(null,"ret","ret",-468222814),ret);
}
} else {
return null;
}
});
/**
 * Do not call this directly, use '*'
 */
cljs.spec.rep_impl = (function cljs$spec$rep_impl(form,p){
return cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,false,form);
});
/**
 * Do not call this directly, use '+'
 */
cljs.spec.rep_PLUS_impl = (function cljs$spec$rep_PLUS_impl(form,p){
return cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.rep_STAR_.call(null,p,p,cljs.core.PersistentVector.EMPTY,true,form)], null),new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.vec.call(null,cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,(function (){var x__26813__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),(function (){var x__26813__auto__ = cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null)),(function (){var x__26813__auto__ = form;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})())));
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})())))),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"rep+","rep+",-281382396),form], null));
});
/**
 * Do not call this directly, use '&'
 */
cljs.spec.amp_impl = (function cljs$spec$amp_impl(re,preds,pred_forms){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),new cljs.core.Keyword(null,"p1","p1",-936759954),re,new cljs.core.Keyword(null,"ps","ps",292358046),preds,new cljs.core.Keyword(null,"forms","forms",2045992350),pred_forms], null);
});
cljs.spec.filter_alt = (function cljs$spec$filter_alt(ps,ks,forms,f){
if(cljs.core.truth_((function (){var or__25979__auto__ = ks;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return forms;
}
})())){
var pks = cljs.core.filter.call(null,(function (p1__58243_SHARP_){
return f.call(null,cljs.core.first.call(null,p1__58243_SHARP_));
}),cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__25979__auto__ = cljs.core.seq.call(null,ks);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__25979__auto__ = cljs.core.seq.call(null,forms);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})()));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.first,pks)),(cljs.core.truth_(ks)?cljs.core.seq.call(null,cljs.core.map.call(null,cljs.core.second,pks)):null),(cljs.core.truth_(forms)?cljs.core.seq.call(null,cljs.core.map.call(null,((function (pks){
return (function (p1__58244_SHARP_){
return cljs.core.nth.call(null,p1__58244_SHARP_,(2));
});})(pks))
,pks)):null)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq.call(null,cljs.core.filter.call(null,f,ps)),ks,forms], null);
}
});
cljs.spec.alt_STAR_ = (function cljs$spec$alt_STAR_(ps,ks,forms){
var vec__58254 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.core.identity);
var vec__58257 = cljs.core.nth.call(null,vec__58254,(0),null);
var seq__58258 = cljs.core.seq.call(null,vec__58257);
var first__58259 = cljs.core.first.call(null,seq__58258);
var seq__58258__$1 = cljs.core.next.call(null,seq__58258);
var p1 = first__58259;
var pr = seq__58258__$1;
var ps__$1 = vec__58257;
var vec__58260 = cljs.core.nth.call(null,vec__58254,(1),null);
var k1 = cljs.core.nth.call(null,vec__58260,(0),null);
var ks__$1 = vec__58260;
var forms__$1 = cljs.core.nth.call(null,vec__58254,(2),null);
if(cljs.core.truth_(ps__$1)){
var ret = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204),new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),new cljs.core.Keyword(null,"ps","ps",292358046),ps__$1,new cljs.core.Keyword(null,"ks","ks",1900203942),ks__$1,new cljs.core.Keyword(null,"forms","forms",2045992350),forms__$1], null);
if((pr == null)){
if(cljs.core.truth_(k1)){
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p1))){
return cljs.spec.accept.call(null,cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k1,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(p1)], null)));
} else {
return ret;
}
} else {
return p1;
}
} else {
return ret;
}
} else {
return null;
}
});
cljs.spec.alts = (function cljs$spec$alts(var_args){
var args__27061__auto__ = [];
var len__27054__auto___58264 = arguments.length;
var i__27055__auto___58265 = (0);
while(true){
if((i__27055__auto___58265 < len__27054__auto___58264)){
args__27061__auto__.push((arguments[i__27055__auto___58265]));

var G__58266 = (i__27055__auto___58265 + (1));
i__27055__auto___58265 = G__58266;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic = (function (ps){
return cljs.spec.alt_STAR_.call(null,ps,null,null);
});

cljs.spec.alts.cljs$lang$maxFixedArity = (0);

cljs.spec.alts.cljs$lang$applyTo = (function (seq58263){
return cljs.spec.alts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58263));
});

cljs.spec.alt2 = (function cljs$spec$alt2(p1,p2){
if(cljs.core.truth_((function (){var and__25967__auto__ = p1;
if(cljs.core.truth_(and__25967__auto__)){
return p2;
} else {
return and__25967__auto__;
}
})())){
return cljs.spec.alts.call(null,p1,p2);
} else {
var or__25979__auto__ = p1;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return p2;
}
}
});
/**
 * Do not call this directly, use 'alt'
 */
cljs.spec.alt_impl = (function cljs$spec$alt_impl(ks,ps,forms){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,ps,ks,forms),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.random_uuid.call(null));
});
/**
 * Do not call this directly, use '?'
 */
cljs.spec.maybe_impl = (function cljs$spec$maybe_impl(p,form){
return cljs.core.assoc.call(null,cljs.spec.alt_STAR_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p,cljs.spec.accept.call(null,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))], null),null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [form,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718)], null)),new cljs.core.Keyword(null,"maybe","maybe",-314397560),form);
});
cljs.spec.noret_QMARK_ = (function cljs$spec$noret_QMARK_(p1,pret){
var or__25979__auto__ = cljs.core._EQ_.call(null,pret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718));
if(or__25979__auto__){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = (function (){var and__25967__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),null], null), null).call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(cljs.spec.reg_resolve_BANG_.call(null,p1)));
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core.empty_QMARK_.call(null,pret);
} else {
return and__25967__auto__;
}
})();
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
return null;
}
}
});
cljs.spec.accept_nil_QMARK_ = (function cljs$spec$accept_nil_QMARK_(p){
var map__58270 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__58270__$1 = ((((!((map__58270 == null)))?((((map__58270.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58270.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58270):map__58270);
var p__$1 = map__58270__$1;
var op = cljs.core.get.call(null,map__58270__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__58270__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var p1 = cljs.core.get.call(null,map__58270__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__58270__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var forms = cljs.core.get.call(null,map__58270__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__58272 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__58272)){
return true;
} else {
if(cljs.core._EQ_.call(null,null,G__58272)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__58272)){
var and__25967__auto__ = cljs$spec$accept_nil_QMARK_.call(null,p1);
if(cljs.core.truth_(and__25967__auto__)){
var or__25979__auto__ = cljs.spec.noret_QMARK_.call(null,p1,cljs.spec.preturn.call(null,p1));
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var ret = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1),ps,cljs.core.next.call(null,forms));
return cljs.core.not_EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
}
} else {
return and__25967__auto__;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__58272)){
var or__25979__auto__ = (p1 === p2);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs$spec$accept_nil_QMARK_.call(null,p1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__58272)){
return cljs.core.every_QMARK_.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__58272)){
return cljs.core.some.call(null,cljs$spec$accept_nil_QMARK_,ps);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.preturn = (function cljs$spec$preturn(p){
var map__58291 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__58291__$1 = ((((!((map__58291 == null)))?((((map__58291.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58291.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58291):map__58291);
var p__$1 = map__58291__$1;
var vec__58292 = cljs.core.get.call(null,map__58291__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__58293 = cljs.core.seq.call(null,vec__58292);
var first__58294 = cljs.core.first.call(null,seq__58293);
var seq__58293__$1 = cljs.core.next.call(null,seq__58293);
var p0 = first__58294;
var pr = seq__58293__$1;
var ps = vec__58292;
var vec__58295 = cljs.core.get.call(null,map__58291__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__58295,(0),null);
var ks = vec__58295;
var op = cljs.core.get.call(null,map__58291__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__58291__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__58291__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__58291__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var G__58299 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__58299)){
return ret;
} else {
if(cljs.core._EQ_.call(null,null,G__58299)){
return null;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__58299)){
var pret = cljs$spec$preturn.call(null,p1);
if(cljs.core.truth_(cljs.spec.noret_QMARK_.call(null,p1,pret))){
return new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718);
} else {
return cljs.spec.and_preds.call(null,pret,ps,forms);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__58299)){
return cljs.spec.add_ret.call(null,p1,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__58299)){
return cljs.spec.add_ret.call(null,p0,ret,k);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__58299)){
var vec__58300 = cljs.spec.filter_alt.call(null,ps,ks,forms,cljs.spec.accept_nil_QMARK_);
var vec__58303 = cljs.core.nth.call(null,vec__58300,(0),null);
var p0__$1 = cljs.core.nth.call(null,vec__58303,(0),null);
var vec__58306 = cljs.core.nth.call(null,vec__58300,(1),null);
var k0 = cljs.core.nth.call(null,vec__58306,(0),null);
var r = (((p0__$1 == null))?new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718):cljs$spec$preturn.call(null,p0__$1));
if(cljs.core.truth_(k0)){
return cljs.spec.tagged_ret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k0,r], null));
} else {
return r;
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.op_unform = (function cljs$spec$op_unform(p,x){
var map__58325 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__58325__$1 = ((((!((map__58325 == null)))?((((map__58325.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58325.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58325):map__58325);
var p__$1 = map__58325__$1;
var vec__58326 = cljs.core.get.call(null,map__58325__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__58327 = cljs.core.seq.call(null,vec__58326);
var first__58328 = cljs.core.first.call(null,seq__58327);
var seq__58327__$1 = cljs.core.next.call(null,seq__58327);
var p0 = first__58328;
var pr = seq__58327__$1;
var ps = vec__58326;
var vec__58329 = cljs.core.get.call(null,map__58325__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var k = cljs.core.nth.call(null,vec__58329,(0),null);
var ks = vec__58329;
var op = cljs.core.get.call(null,map__58325__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__58325__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var ret = cljs.core.get.call(null,map__58325__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var forms = cljs.core.get.call(null,map__58325__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var rep_PLUS_ = cljs.core.get.call(null,map__58325__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__58325__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
var kps = cljs.core.zipmap.call(null,ks,ps);
var G__58333 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__58333)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null);
} else {
if(cljs.core._EQ_.call(null,null,G__58333)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p__$1,x)], null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__58333)){
var px = cljs.core.reduce.call(null,((function (G__58333,map__58325,map__58325__$1,p__$1,vec__58326,seq__58327,first__58328,seq__58327__$1,p0,pr,ps,vec__58329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__58310_SHARP_,p2__58309_SHARP_){
return cljs.spec.unform.call(null,p2__58309_SHARP_,p1__58310_SHARP_);
});})(G__58333,map__58325,map__58325__$1,p__$1,vec__58326,seq__58327,first__58328,seq__58327__$1,p0,pr,ps,vec__58329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x,cljs.core.reverse.call(null,ps));
return cljs$spec$op_unform.call(null,p1,px);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__58333)){
return cljs.core.mapcat.call(null,((function (G__58333,map__58325,map__58325__$1,p__$1,vec__58326,seq__58327,first__58328,seq__58327__$1,p0,pr,ps,vec__58329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__58311_SHARP_){
return cljs$spec$op_unform.call(null,p1,p1__58311_SHARP_);
});})(G__58333,map__58325,map__58325__$1,p__$1,vec__58326,seq__58327,first__58328,seq__58327__$1,p0,pr,ps,vec__58329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__58333)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core.mapcat.call(null,((function (G__58333,map__58325,map__58325__$1,p__$1,vec__58326,seq__58327,first__58328,seq__58327__$1,p0,pr,ps,vec__58329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (p1__58312_SHARP_){
return cljs$spec$op_unform.call(null,p0,p1__58312_SHARP_);
});})(G__58333,map__58325,map__58325__$1,p__$1,vec__58326,seq__58327,first__58328,seq__58327__$1,p0,pr,ps,vec__58329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,x);
} else {
return cljs.core.mapcat.call(null,((function (G__58333,map__58325,map__58325__$1,p__$1,vec__58326,seq__58327,first__58328,seq__58327__$1,p0,pr,ps,vec__58329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps){
return (function (k__$1){
if(cljs.core.contains_QMARK_.call(null,x,k__$1)){
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),cljs.core.get.call(null,x,k__$1));
} else {
return null;
}
});})(G__58333,map__58325,map__58325__$1,p__$1,vec__58326,seq__58327,first__58328,seq__58327__$1,p0,pr,ps,vec__58329,k,ks,op,p1,ret,forms,rep_PLUS_,maybe,kps))
,ks);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__58333)){
if(cljs.core.truth_(maybe)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.unform.call(null,p0,x)], null);
} else {
var vec__58334 = x;
var k__$1 = cljs.core.nth.call(null,vec__58334,(0),null);
var v = cljs.core.nth.call(null,vec__58334,(1),null);
return cljs$spec$op_unform.call(null,kps.call(null,k__$1),v);
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.add_ret = (function cljs$spec$add_ret(p,r,k){
var map__58340 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__58340__$1 = ((((!((map__58340 == null)))?((((map__58340.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58340.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58340):map__58340);
var p__$1 = map__58340__$1;
var op = cljs.core.get.call(null,map__58340__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__58340__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var splice = cljs.core.get.call(null,map__58340__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var prop = ((function (map__58340,map__58340__$1,p__$1,op,ps,splice){
return (function (){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core.empty_QMARK_.call(null,ret)){
return r;
} else {
return (cljs.core.truth_(splice)?cljs.core.into:cljs.core.conj).call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
});})(map__58340,map__58340__$1,p__$1,op,ps,splice))
;
var G__58342 = op;
if(cljs.core._EQ_.call(null,null,G__58342)){
return r;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__58342)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__58342)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__58342)){
var ret = cljs.spec.preturn.call(null,p__$1);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return r;
} else {
return cljs.core.conj.call(null,r,(cljs.core.truth_(k)?cljs.core.PersistentArrayMap.fromArray([k,ret], true, false):ret));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__58342)){
return prop.call(null);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__58342)){
return prop.call(null);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
});
cljs.spec.deriv = (function cljs$spec$deriv(p,x){
var map__58353 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__58353__$1 = ((((!((map__58353 == null)))?((((map__58353.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58353.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58353):map__58353);
var p__$1 = map__58353__$1;
var vec__58354 = cljs.core.get.call(null,map__58353__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var seq__58355 = cljs.core.seq.call(null,vec__58354);
var first__58356 = cljs.core.first.call(null,seq__58355);
var seq__58355__$1 = cljs.core.next.call(null,seq__58355);
var p0 = first__58356;
var pr = seq__58355__$1;
var ps = vec__58354;
var vec__58357 = cljs.core.get.call(null,map__58353__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var seq__58358 = cljs.core.seq.call(null,vec__58357);
var first__58359 = cljs.core.first.call(null,seq__58358);
var seq__58358__$1 = cljs.core.next.call(null,seq__58358);
var k0 = first__58359;
var kr = seq__58358__$1;
var ks = vec__58357;
var op = cljs.core.get.call(null,map__58353__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var p1 = cljs.core.get.call(null,map__58353__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__58353__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__58353__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__58353__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var forms = cljs.core.get.call(null,map__58353__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
if(cljs.core.truth_(p__$1)){
var G__58361 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__58361)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__58361)){
var ret__$1 = cljs.spec.dt.call(null,p__$1,x,p__$1);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),ret__$1)){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__58361)){
var temp__4657__auto__ = cljs$spec$deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4657__auto__)){
var p1__$1 = temp__4657__auto__;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p1__$1))){
var ret__$1 = cljs.spec.and_preds.call(null,cljs.spec.preturn.call(null,p1__$1),ps,cljs.core.next.call(null,forms));
if(cljs.core._EQ_.call(null,ret__$1,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
return cljs.spec.accept.call(null,ret__$1);
}
} else {
return cljs.spec.amp_impl.call(null,p1__$1,ps,forms);
}
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__58361)){
return cljs.spec.alt2.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),cljs.core.cons.call(null,cljs$spec$deriv.call(null,p0,x),pr),new cljs.core.Keyword(null,"ks","ks",1900203942),ks,new cljs.core.Keyword(null,"forms","forms",2045992350),forms,new cljs.core.Keyword(null,"ret","ret",-468222814),ret], null)),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p0))?cljs$spec$deriv.call(null,cljs.spec.pcat_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"ps","ps",292358046),pr,new cljs.core.Keyword(null,"ks","ks",1900203942),kr,new cljs.core.Keyword(null,"forms","forms",2045992350),cljs.core.next.call(null,forms),new cljs.core.Keyword(null,"ret","ret",-468222814),cljs.spec.add_ret.call(null,p0,ret,k0)], null)),x):null));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__58361)){
return cljs.spec.alt_STAR_.call(null,cljs.core.map.call(null,((function (G__58361,map__58353,map__58353__$1,p__$1,vec__58354,seq__58355,first__58356,seq__58355__$1,p0,pr,ps,vec__58357,seq__58358,first__58359,seq__58358__$1,k0,kr,ks,op,p1,p2,ret,splice,forms){
return (function (p1__58343_SHARP_){
return cljs$spec$deriv.call(null,p1__58343_SHARP_,x);
});})(G__58361,map__58353,map__58353__$1,p__$1,vec__58354,seq__58355,first__58356,seq__58355__$1,p0,pr,ps,vec__58357,seq__58358,first__58359,seq__58358__$1,k0,kr,ks,op,p1,p2,ret,splice,forms))
,ps),ks,forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__58361)){
return cljs.spec.alt2.call(null,cljs.spec.rep_STAR_.call(null,cljs$spec$deriv.call(null,p1,x),p2,ret,splice,forms),(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))?cljs$spec$deriv.call(null,cljs.spec.rep_STAR_.call(null,p2,p2,cljs.spec.add_ret.call(null,p1,ret,null),splice,forms),x):null));
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_describe = (function cljs$spec$op_describe(p){
var map__58365 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__58365__$1 = ((((!((map__58365 == null)))?((((map__58365.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58365.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58365):map__58365);
var p__$1 = map__58365__$1;
var op = cljs.core.get.call(null,map__58365__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__58365__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__58365__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__58365__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__58365__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__58365__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var rep_PLUS_ = cljs.core.get.call(null,map__58365__$1,new cljs.core.Keyword(null,"rep+","rep+",-281382396));
var maybe = cljs.core.get.call(null,map__58365__$1,new cljs.core.Keyword(null,"maybe","maybe",-314397560));
if(cljs.core.truth_(p__$1)){
var G__58367 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__58367)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__58367)){
return p__$1;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__58367)){
return cljs.core.list_STAR_.call(null,new cljs.core.Symbol("clojure.spec","&","clojure.spec/&",-770935491,null),cljs$spec$op_describe.call(null,p1),forms);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__58367)){
if(cljs.core.truth_(rep_PLUS_)){
return cljs.core._conj.call(null,(function (){var x__26813__auto__ = rep_PLUS_;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","cat","cljs.spec/cat",850003863,null),cljs.core.mapcat.call(null,cljs.core.vector,(function (){var or__25979__auto__ = cljs.core.seq.call(null,ks);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,new cljs.core.Keyword(null,"_","_",1453416199));
}
})(),forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__58367)){
if(cljs.core.truth_(maybe)){
return cljs.core._conj.call(null,(function (){var x__26813__auto__ = maybe;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),new cljs.core.Symbol("cljs.spec","?","cljs.spec/?",-1542560017,null));
} else {
return cljs.core.cons.call(null,new cljs.core.Symbol("cljs.spec","alt","cljs.spec/alt",157113396,null),cljs.core.mapcat.call(null,cljs.core.vector,ks,forms));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__58367)){
var x__26813__auto__ = (cljs.core.truth_(splice)?new cljs.core.Symbol("cljs.spec","+","cljs.spec/+",-342318319,null):new cljs.core.Symbol("cljs.spec","*","cljs.spec/*",-858366320,null));
return cljs.core._conj.call(null,(function (){var x__26813__auto____$1 = forms;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto____$1);
})(),x__26813__auto__);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.op_explain = (function cljs$spec$op_explain(form,p,path,via,in$,input){
var vec__58381 = input;
var x = cljs.core.nth.call(null,vec__58381,(0),null);
var input__$1 = vec__58381;
var map__58384 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__58384__$1 = ((((!((map__58384 == null)))?((((map__58384.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58384.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58384):map__58384);
var p__$1 = map__58384__$1;
var op = cljs.core.get.call(null,map__58384__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var ps = cljs.core.get.call(null,map__58384__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var ks = cljs.core.get.call(null,map__58384__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var forms = cljs.core.get.call(null,map__58384__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var splice = cljs.core.get.call(null,map__58384__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var p1 = cljs.core.get.call(null,map__58384__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var p2 = cljs.core.get.call(null,map__58384__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var via__$1 = (function (){var temp__4655__auto__ = cljs.spec.spec_name.call(null,p__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var name = temp__4655__auto__;
return cljs.core.conj.call(null,via,name);
} else {
return via;
}
})();
var insufficient = ((function (vec__58381,x,input__$1,map__58384,map__58384__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1){
return (function (path__$1,form__$1){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path__$1,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Insufficient input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,form__$1),new cljs.core.Keyword(null,"val","val",128701612),cljs.core.List.EMPTY,new cljs.core.Keyword(null,"via","via",-1904457336),via__$1,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
});})(vec__58381,x,input__$1,map__58384,map__58384__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1))
;
if(cljs.core.truth_(p__$1)){
var G__58386 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__58386)){
return null;
} else {
if(cljs.core._EQ_.call(null,null,G__58386)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,form);
} else {
return cljs.spec.explain_1.call(null,form,p__$1,path,via__$1,in$,x);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__58386)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p1))){
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1));
} else {
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p1));
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p1,x);
if(cljs.core.truth_(temp__4655__auto__)){
var p1__$1 = temp__4655__auto__;
return cljs.spec.explain_pred_list.call(null,forms,ps,path,via__$1,in$,cljs.spec.preturn.call(null,p1__$1));
} else {
return cljs$spec$op_explain.call(null,cljs.spec.op_describe.call(null,p1),p1,path,via__$1,in$,input__$1);
}
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__58386)){
var pkfs = cljs.core.map.call(null,cljs.core.vector,ps,(function (){var or__25979__auto__ = cljs.core.seq.call(null,ks);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__25979__auto__ = cljs.core.seq.call(null,forms);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
var vec__58387 = ((cljs.core._EQ_.call(null,(1),cljs.core.count.call(null,pkfs)))?cljs.core.first.call(null,pkfs):cljs.core.first.call(null,cljs.core.remove.call(null,((function (pkfs,G__58386,vec__58381,x,input__$1,map__58384,map__58384__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (p__58390){
var vec__58391 = p__58390;
var p__$2 = cljs.core.nth.call(null,vec__58391,(0),null);
return cljs.spec.accept_nil_QMARK_.call(null,p__$2);
});})(pkfs,G__58386,vec__58381,x,input__$1,map__58384,map__58384__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,pkfs)));
var pred = cljs.core.nth.call(null,vec__58387,(0),null);
var k = cljs.core.nth.call(null,vec__58387,(1),null);
var form__$1 = cljs.core.nth.call(null,vec__58387,(2),null);
var path__$1 = (cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path);
var form__$2 = (function (){var or__25979__auto__ = form__$1;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})();
if((cljs.core.empty_QMARK_.call(null,input__$1)) && (cljs.core.not.call(null,pred))){
return insufficient.call(null,path__$1,form__$2);
} else {
return cljs$spec$op_explain.call(null,form__$2,pred,path__$1,via__$1,in$,input__$1);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__58386)){
if(cljs.core.empty_QMARK_.call(null,input__$1)){
return insufficient.call(null,path,cljs.spec.op_describe.call(null,p__$1));
} else {
return cljs.core.apply.call(null,cljs.core.concat,cljs.core.map.call(null,((function (G__58386,vec__58381,x,input__$1,map__58384,map__58384__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient){
return (function (k,form__$1,pred){
return cljs$spec$op_explain.call(null,(function (){var or__25979__auto__ = form__$1;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.spec.op_describe.call(null,pred);
}
})(),pred,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),via__$1,in$,input__$1);
});})(G__58386,vec__58381,x,input__$1,map__58384,map__58384__$1,p__$1,op,ps,ks,forms,splice,p1,p2,via__$1,insufficient))
,(function (){var or__25979__auto__ = cljs.core.seq.call(null,ks);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__25979__auto__ = cljs.core.seq.call(null,forms);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),ps));
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__58386)){
return cljs$spec$op_explain.call(null,(((p1 === p2))?forms:cljs.spec.op_describe.call(null,p1)),p1,path,via__$1,in$,input__$1);
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
});
cljs.spec.re_gen = (function cljs$spec$re_gen(p,overrides,path,rmap,f){
var map__58400 = cljs.spec.reg_resolve_BANG_.call(null,p);
var map__58400__$1 = ((((!((map__58400 == null)))?((((map__58400.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58400.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58400):map__58400);
var p__$1 = map__58400__$1;
var ps = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword(null,"ps","ps",292358046));
var forms = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword(null,"forms","forms",2045992350));
var p2 = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword(null,"p2","p2",905500641));
var ret = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword(null,"ret","ret",-468222814));
var splice = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword(null,"splice","splice",449588165));
var ks = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword(null,"ks","ks",1900203942));
var p1 = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword(null,"p1","p1",-936759954));
var gfn = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword("cljs.spec","gfn","cljs.spec/gfn",-432034727));
var id = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var op = cljs.core.get.call(null,map__58400__$1,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204));
var rmap__$1 = (cljs.core.truth_(id)?cljs.spec.inck.call(null,rmap,id):rmap);
var ggens = ((function (map__58400,map__58400__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (ps__$1,ks__$1,forms__$1){
var gen = ((function (map__58400,map__58400__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (p__$2,k,f__$1){
if(cljs.core.truth_((function (){var and__25967__auto__ = rmap__$1;
if(cljs.core.truth_(and__25967__auto__)){
var and__25967__auto____$1 = id;
if(cljs.core.truth_(and__25967__auto____$1)){
var and__25967__auto____$2 = k;
if(cljs.core.truth_(and__25967__auto____$2)){
return cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,path,k);
} else {
return and__25967__auto____$2;
}
} else {
return and__25967__auto____$1;
}
} else {
return and__25967__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(id)){
return cljs.spec.impl.gen.delay_impl.call(null,(new cljs.core.Delay(((function (map__58400,map__58400__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1){
return (function (){
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__25979__auto__ = f__$1;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return p__$2;
}
})());
});})(map__58400,map__58400__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
,null)));
} else {
return cljs$spec$re_gen.call(null,p__$2,overrides,(cljs.core.truth_(k)?cljs.core.conj.call(null,path,k):path),rmap__$1,(function (){var or__25979__auto__ = f__$1;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return p__$2;
}
})());
}
}
});})(map__58400,map__58400__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
return cljs.core.map.call(null,gen,ps__$1,(function (){var or__25979__auto__ = cljs.core.seq.call(null,ks__$1);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})(),(function (){var or__25979__auto__ = cljs.core.seq.call(null,forms__$1);
if(or__25979__auto__){
return or__25979__auto__;
} else {
return cljs.core.repeat.call(null,null);
}
})());
});})(map__58400,map__58400__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1))
;
var or__25979__auto__ = (function (){var temp__4657__auto__ = cljs.core.get.call(null,overrides,path);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
var G__58403 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"accept","accept",1874130431),G__58403)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
if(cljs.core._EQ_.call(null,null,G__58403)){
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return g;

}
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
var or__25979__auto____$1 = (cljs.core.truth_(gfn)?gfn.call(null):null);
if(cljs.core.truth_(or__25979__auto____$1)){
return or__25979__auto____$1;
} else {
if(cljs.core.truth_(p__$1)){
var G__58404 = op;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","accept","cljs.spec/accept",-1753298186),G__58404)){
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
return cljs.spec.impl.gen.return$.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ret], null));
}
} else {
if(cljs.core._EQ_.call(null,null,G__58404)){
var temp__4657__auto__ = cljs.spec.gensub.call(null,p__$1,overrides,path,rmap__$1,f);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,cljs.core.vector,g);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","amp","cljs.spec/amp",-1217943932),G__58404)){
return cljs$spec$re_gen.call(null,p1,overrides,path,rmap__$1,cljs.spec.op_describe.call(null,p1));
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649),G__58404)){
var gens = ggens.call(null,ps,ks,forms);
if(cljs.core.every_QMARK_.call(null,cljs.core.identity,gens)){
return cljs.core.apply.call(null,cljs.spec.impl.gen.cat,gens);
} else {
return null;
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","alt","cljs.spec/alt",-1483418131),G__58404)){
var gens = cljs.core.remove.call(null,cljs.core.nil_QMARK_,ggens.call(null,ps,ks,forms));
if(cljs.core.empty_QMARK_.call(null,gens)){
return null;
} else {
return cljs.spec.impl.gen.one_of.call(null,gens);
}
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","rep","cljs.spec/rep",-556916491),G__58404)){
if(cljs.core.truth_(cljs.spec.recur_limit_QMARK_.call(null,rmap__$1,id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),id))){
return cljs.spec.impl.gen.return$.call(null,cljs.core.PersistentVector.EMPTY);
} else {
var temp__4657__auto__ = cljs$spec$re_gen.call(null,p2,overrides,path,rmap__$1,forms);
if(cljs.core.truth_(temp__4657__auto__)){
var g = temp__4657__auto__;
return cljs.spec.impl.gen.fmap.call(null,((function (g,temp__4657__auto__,G__58404,or__25979__auto____$1,or__25979__auto__,map__58400,map__58400__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens){
return (function (p1__58394_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__58394_SHARP_);
});})(g,temp__4657__auto__,G__58404,or__25979__auto____$1,or__25979__auto__,map__58400,map__58400__$1,p__$1,ps,forms,p2,ret,splice,ks,p1,gfn,id,op,rmap__$1,ggens))
,cljs.spec.impl.gen.vector.call(null,g));
} else {
return null;
}
}
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(op)].join('')));

}
}
}
}
}
}
} else {
return null;
}
}
}
});
cljs.spec.re_conform = (function cljs$spec$re_conform(p,p__58405){
while(true){
var vec__58409 = p__58405;
var seq__58410 = cljs.core.seq.call(null,vec__58409);
var first__58411 = cljs.core.first.call(null,seq__58410);
var seq__58410__$1 = cljs.core.next.call(null,seq__58410);
var x = first__58411;
var xs = seq__58410__$1;
var data = vec__58409;
if(cljs.core.empty_QMARK_.call(null,data)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p))){
var ret = cljs.spec.preturn.call(null,p);
if(cljs.core._EQ_.call(null,ret,new cljs.core.Keyword("cljs.spec","nil","cljs.spec/nil",1576652718))){
return null;
} else {
return ret;
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p,x);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__58412 = dp;
var G__58413 = xs;
p = G__58412;
p__58405 = G__58413;
continue;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
}
break;
}
});
cljs.spec.re_explain = (function cljs$spec$re_explain(path,via,in$,re,input){
var p = re;
var G__58427 = input;
var vec__58428 = G__58427;
var seq__58429 = cljs.core.seq.call(null,vec__58428);
var first__58430 = cljs.core.first.call(null,seq__58429);
var seq__58429__$1 = cljs.core.next.call(null,seq__58429);
var x = first__58430;
var xs = seq__58429__$1;
var data = vec__58428;
var i = (0);
var p__$1 = p;
var G__58427__$1 = G__58427;
var i__$1 = i;
while(true){
var p__$2 = p__$1;
var vec__58431 = G__58427__$1;
var seq__58432 = cljs.core.seq.call(null,vec__58431);
var first__58433 = cljs.core.first.call(null,seq__58432);
var seq__58432__$1 = cljs.core.next.call(null,seq__58432);
var x__$1 = first__58433;
var xs__$1 = seq__58432__$1;
var data__$1 = vec__58431;
var i__$2 = i__$1;
if(cljs.core.empty_QMARK_.call(null,data__$1)){
if(cljs.core.truth_(cljs.spec.accept_nil_QMARK_.call(null,p__$2))){
return null;
} else {
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,in$,null);
}
} else {
var temp__4655__auto__ = cljs.spec.deriv.call(null,p__$2,x__$1);
if(cljs.core.truth_(temp__4655__auto__)){
var dp = temp__4655__auto__;
var G__58434 = dp;
var G__58435 = xs__$1;
var G__58436 = (i__$2 + (1));
p__$1 = G__58434;
G__58427__$1 = G__58435;
i__$1 = G__58436;
continue;
} else {
if(cljs.core.truth_(cljs.spec.accept_QMARK_.call(null,p__$2))){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","op","cljs.spec/op",939378204).cljs$core$IFn$_invoke$arity$1(p__$2),new cljs.core.Keyword("cljs.spec","pcat","cljs.spec/pcat",-1959753649))){
return cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,re)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
} else {
var or__25979__auto__ = cljs.spec.op_explain.call(null,cljs.spec.op_describe.call(null,p__$2),p__$2,path,via,cljs.core.conj.call(null,in$,i__$2),cljs.core.seq.call(null,data__$1));
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"reason","reason",-2070751759),"Extra input",new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,p__$2)),new cljs.core.Keyword(null,"val","val",128701612),data__$1,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),cljs.core.conj.call(null,in$,i__$2)], null)], null);
}
}
}
}
break;
}
});
/**
 * Do not call this directly, use 'spec' with a regex op argument
 */
cljs.spec.regex_spec_impl = (function cljs$spec$regex_spec_impl(re,gfn){
if(typeof cljs.spec.t_cljs$spec58440 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
*/
cljs.spec.t_cljs$spec58440 = (function (regex_spec_impl,re,gfn,meta58441){
this.regex_spec_impl = regex_spec_impl;
this.re = re;
this.gfn = gfn;
this.meta58441 = meta58441;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58440.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_58442,meta58441__$1){
var self__ = this;
var _58442__$1 = this;
return (new cljs.spec.t_cljs$spec58440(self__.regex_spec_impl,self__.re,self__.gfn,meta58441__$1));
});

cljs.spec.t_cljs$spec58440.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_58442){
var self__ = this;
var _58442__$1 = this;
return self__.meta58441;
});

cljs.spec.t_cljs$spec58440.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58440.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_conform.call(null,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});

cljs.spec.t_cljs$spec58440.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = (function (_,x){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_unform.call(null,self__.re,x);
});

cljs.spec.t_cljs$spec58440.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = (function (_,path,via,in$,x){
var self__ = this;
var ___$1 = this;
if(((x == null)) || (cljs.core.coll_QMARK_.call(null,x))){
return cljs.spec.re_explain.call(null,path,via,in$,self__.re,cljs.core.seq.call(null,x));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.spec.abbrev.call(null,cljs.spec.op_describe.call(null,self__.re)),new cljs.core.Keyword(null,"val","val",128701612),x,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});

cljs.spec.t_cljs$spec58440.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = (function (_,overrides,path,rmap){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.re_gen.call(null,self__.re,overrides,path,rmap,cljs.spec.op_describe.call(null,self__.re));
}
});

cljs.spec.t_cljs$spec58440.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.regex_spec_impl.call(null,self__.re,gfn__$1);
});

cljs.spec.t_cljs$spec58440.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.spec.op_describe.call(null,self__.re);
});

cljs.spec.t_cljs$spec58440.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"regex-spec-impl","regex-spec-impl",1541266692,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'spec' with a regex op argument"], null)),new cljs.core.Symbol(null,"re","re",1869207729,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"meta58441","meta58441",1193128888,null)], null);
});

cljs.spec.t_cljs$spec58440.cljs$lang$type = true;

cljs.spec.t_cljs$spec58440.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58440";

cljs.spec.t_cljs$spec58440.cljs$lang$ctorPrWriter = (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58440");
});

cljs.spec.__GT_t_cljs$spec58440 = (function cljs$spec$regex_spec_impl_$___GT_t_cljs$spec58440(regex_spec_impl__$1,re__$1,gfn__$1,meta58441){
return (new cljs.spec.t_cljs$spec58440(regex_spec_impl__$1,re__$1,gfn__$1,meta58441));
});

}

return (new cljs.spec.t_cljs$spec58440(cljs$spec$regex_spec_impl,re,gfn,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.call_valid_QMARK_ = (function cljs$spec$call_valid_QMARK_(f,specs,args){
var cargs = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs),args);
if(cljs.core._EQ_.call(null,cargs,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537))){
return null;
} else {
var ret = cljs.core.apply.call(null,f,args);
var cret = cljs.spec.conform.call(null,new cljs.core.Keyword(null,"ret","ret",-468222814).cljs$core$IFn$_invoke$arity$1(specs),ret);
var and__25967__auto__ = cljs.core.not_EQ_.call(null,cret,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537));
if(and__25967__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs))){
return cljs.spec.valid_QMARK_.call(null,new cljs.core.Keyword(null,"fn","fn",-1175266204).cljs$core$IFn$_invoke$arity$1(specs),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return true;
}
} else {
return and__25967__auto__;
}
}
});
/**
 * returns f if valid, else smallest
 */
cljs.spec.validate_fn = (function cljs$spec$validate_fn(f,specs,iters){
var g = cljs.spec.gen.call(null,new cljs.core.Keyword(null,"args","args",1315556576).cljs$core$IFn$_invoke$arity$1(specs));
var prop = cljs.spec.impl.gen.for_all_STAR_.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [g], null),((function (g){
return (function (p1__58443_SHARP_){
return cljs.spec.call_valid_QMARK_.call(null,f,specs,p1__58443_SHARP_);
});})(g))
);
var ret = cljs.spec.impl.gen.quick_check.call(null,iters,prop);
var temp__4655__auto__ = new cljs.core.Keyword(null,"smallest","smallest",-152623883).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shrunk","shrunk",-2041664412).cljs$core$IFn$_invoke$arity$1(ret));
if(cljs.core.truth_(temp__4655__auto__)){
var vec__58447 = temp__4655__auto__;
var smallest = cljs.core.nth.call(null,vec__58447,(0),null);
return smallest;
} else {
return f;
}
});
/**
 * Do not call this directly, use 'fspec'
 */
cljs.spec.fspec_impl = (function cljs$spec$fspec_impl(argspec,aform,retspec,rform,fnspec,fform,gfn){
var specs = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"args","args",1315556576),argspec,new cljs.core.Keyword(null,"ret","ret",-468222814),retspec,new cljs.core.Keyword(null,"fn","fn",-1175266204),fnspec], null);
if(typeof cljs.spec.t_cljs$spec58456 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.spec.Spec}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.ILookup}
*/
cljs.spec.t_cljs$spec58456 = (function (fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,meta58457){
this.fspec_impl = fspec_impl;
this.argspec = argspec;
this.aform = aform;
this.retspec = retspec;
this.rform = rform;
this.fnspec = fnspec;
this.fform = fform;
this.gfn = gfn;
this.specs = specs;
this.meta58457 = meta58457;
this.cljs$lang$protocol_mask$partition0$ = 393472;
this.cljs$lang$protocol_mask$partition1$ = 0;
})
cljs.spec.t_cljs$spec58456.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (specs){
return (function (_58458,meta58457__$1){
var self__ = this;
var _58458__$1 = this;
return (new cljs.spec.t_cljs$spec58456(self__.fspec_impl,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,self__.gfn,self__.specs,meta58457__$1));
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (specs){
return (function (_58458){
var self__ = this;
var _58458__$1 = this;
return self__.meta58457;
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$core$ILookup$_lookup$arity$2 = ((function (specs){
return (function (this$,k){
var self__ = this;
var this$__$1 = this;
return cljs.core.get.call(null,self__.specs,k);
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$core$ILookup$_lookup$arity$3 = ((function (specs){
return (function (_,k,not_found){
var self__ = this;
var ___$1 = this;
return cljs.core.get.call(null,self__.specs,k,not_found);
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$spec$Spec$ = true;

cljs.spec.t_cljs$spec58456.prototype.cljs$spec$Spec$conform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
if((f === cljs.spec.validate_fn.call(null,f,self__.specs,cljs.spec._STAR_fspec_iterations_STAR_))){
return f;
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
} else {
return new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537);
}
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$spec$Spec$unform_STAR_$arity$2 = ((function (specs){
return (function (_,f){
var self__ = this;
var ___$1 = this;
return f;
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$spec$Spec$explain_STAR_$arity$5 = ((function (specs){
return (function (_,path,via,in$,f){
var self__ = this;
var ___$1 = this;
if(cljs.core.ifn_QMARK_.call(null,f)){
var args = cljs.spec.validate_fn.call(null,f,self__.specs,(100));
if((f === args)){
return null;
} else {
var ret = (function (){try{return cljs.core.apply.call(null,f,args);
}catch (e58459){if((e58459 instanceof Error)){
var t = e58459;
return t;
} else {
throw e58459;

}
}})();
if((ret instanceof Error)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.list(new cljs.core.Symbol(null,"apply","apply",-1334050276,null),new cljs.core.Symbol(null,"fn","fn",465265323,null)),new cljs.core.Keyword(null,"val","val",128701612),args,new cljs.core.Keyword(null,"reason","reason",-2070751759),ret.message,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
} else {
var cret = cljs.spec.dt.call(null,self__.retspec,ret,self__.rform);
if(cljs.core._EQ_.call(null,new cljs.core.Keyword("cljs.spec","invalid","cljs.spec/invalid",551677537),cret)){
return cljs.spec.explain_1.call(null,self__.rform,self__.retspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"ret","ret",-468222814)),via,in$,ret);
} else {
if(cljs.core.truth_(self__.fnspec)){
var cargs = cljs.spec.conform.call(null,self__.argspec,args);
return cljs.spec.explain_1.call(null,self__.fform,self__.fnspec,cljs.core.conj.call(null,path,new cljs.core.Keyword(null,"fn","fn",-1175266204)),via,in$,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"args","args",1315556576),cargs,new cljs.core.Keyword(null,"ret","ret",-468222814),cret], null));
} else {
return null;
}
}
}
}
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"path","path",-188191168),path,new cljs.core.Keyword(null,"pred","pred",1927423397),new cljs.core.Symbol(null,"ifn?","ifn?",-2106461064,null),new cljs.core.Keyword(null,"val","val",128701612),f,new cljs.core.Keyword(null,"via","via",-1904457336),via,new cljs.core.Keyword(null,"in","in",-1531184865),in$], null)], null);
}
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$spec$Spec$gen_STAR_$arity$4 = ((function (specs){
return (function (_,overrides,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.gfn)){
return self__.gfn.call(null);
} else {
return cljs.spec.impl.gen.return$.call(null,((function (___$3,specs){
return (function() { 
var G__58462__delegate = function (args){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,self__.argspec,args))){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str((function (){var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_58460_58463 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_58461_58464 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_58460_58463,_STAR_print_fn_STAR_58461_58464,sb__26965__auto__,___$3,specs){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_58460_58463,_STAR_print_fn_STAR_58461_58464,sb__26965__auto__,___$3,specs))
;

try{cljs.spec.explain.call(null,self__.argspec,args);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_58461_58464;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_58460_58463;
}
return [cljs.core.str(sb__26965__auto__)].join('');
})()),cljs.core.str("\n"),cljs.core.str("(valid? argspec args)")].join('')));
}

return cljs.spec.impl.gen.generate.call(null,cljs.spec.gen.call(null,self__.retspec,overrides));
};
var G__58462 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__58465__i = 0, G__58465__a = new Array(arguments.length -  0);
while (G__58465__i < G__58465__a.length) {G__58465__a[G__58465__i] = arguments[G__58465__i + 0]; ++G__58465__i;}
  args = new cljs.core.IndexedSeq(G__58465__a,0);
} 
return G__58462__delegate.call(this,args);};
G__58462.cljs$lang$maxFixedArity = 0;
G__58462.cljs$lang$applyTo = (function (arglist__58466){
var args = cljs.core.seq(arglist__58466);
return G__58462__delegate(args);
});
G__58462.cljs$core$IFn$_invoke$arity$variadic = G__58462__delegate;
return G__58462;
})()
;})(___$3,specs))
);
}
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$spec$Spec$with_gen_STAR_$arity$2 = ((function (specs){
return (function (_,gfn__$1){
var self__ = this;
var ___$1 = this;
return self__.fspec_impl.call(null,self__.argspec,self__.aform,self__.retspec,self__.rform,self__.fnspec,self__.fform,gfn__$1);
});})(specs))
;

cljs.spec.t_cljs$spec58456.prototype.cljs$spec$Spec$describe_STAR_$arity$1 = ((function (specs){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.sequence.call(null,cljs.core.seq.call(null,cljs.core.concat.call(null,cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Symbol("cljs.spec","fspec","cljs.spec/fspec",982220571,null)),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"args","args",1315556576)),(function (){var x__26813__auto__ = self__.aform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"ret","ret",-468222814)),(function (){var x__26813__auto__ = self__.rform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})(),cljs.core._conj.call(null,cljs.core.List.EMPTY,new cljs.core.Keyword(null,"fn","fn",-1175266204)),(function (){var x__26813__auto__ = self__.fform;
return cljs.core._conj.call(null,cljs.core.List.EMPTY,x__26813__auto__);
})())));
});})(specs))
;

cljs.spec.t_cljs$spec58456.getBasis = ((function (specs){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.with_meta(new cljs.core.Symbol(null,"fspec-impl","fspec-impl",897021908,null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"skip-wiki","skip-wiki",-2018833298),true,new cljs.core.Keyword(null,"arglists","arglists",1661989754),cljs.core.list(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.list(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null)], null))),new cljs.core.Keyword(null,"doc","doc",1913296891),"Do not call this directly, use 'fspec'"], null)),new cljs.core.Symbol(null,"argspec","argspec",-1207762746,null),new cljs.core.Symbol(null,"aform","aform",531303525,null),new cljs.core.Symbol(null,"retspec","retspec",-920025354,null),new cljs.core.Symbol(null,"rform","rform",-1420499912,null),new cljs.core.Symbol(null,"fnspec","fnspec",-1865712406,null),new cljs.core.Symbol(null,"fform","fform",-176049972,null),new cljs.core.Symbol(null,"gfn","gfn",-1862918295,null),new cljs.core.Symbol(null,"specs","specs",-1227865028,null),new cljs.core.Symbol(null,"meta58457","meta58457",1133909334,null)], null);
});})(specs))
;

cljs.spec.t_cljs$spec58456.cljs$lang$type = true;

cljs.spec.t_cljs$spec58456.cljs$lang$ctorStr = "cljs.spec/t_cljs$spec58456";

cljs.spec.t_cljs$spec58456.cljs$lang$ctorPrWriter = ((function (specs){
return (function (this__26585__auto__,writer__26586__auto__,opt__26587__auto__){
return cljs.core._write.call(null,writer__26586__auto__,"cljs.spec/t_cljs$spec58456");
});})(specs))
;

cljs.spec.__GT_t_cljs$spec58456 = ((function (specs){
return (function cljs$spec$fspec_impl_$___GT_t_cljs$spec58456(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta58457){
return (new cljs.spec.t_cljs$spec58456(fspec_impl__$1,argspec__$1,aform__$1,retspec__$1,rform__$1,fnspec__$1,fform__$1,gfn__$1,specs__$1,meta58457));
});})(specs))
;

}

return (new cljs.spec.t_cljs$spec58456(cljs$spec$fspec_impl,argspec,aform,retspec,rform,fnspec,fform,gfn,specs,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.spec.def_impl.call(null,new cljs.core.Keyword("cljs.spec","kvs->map","cljs.spec/kvs->map",-1189105441),cljs.core.list(new cljs.core.Symbol("cljs.spec","conformer","cljs.spec/conformer",-236330417,null),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58467#","p1__58467#",2013408587,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","zipmap","cljs.core/zipmap",-1902130674,null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__58467#","p1__58467#",2013408587,null)),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__58467#","p1__58467#",2013408587,null)))),cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58468#","p1__58468#",-731704231,null)], null),cljs.core.list(new cljs.core.Symbol("cljs.core","map","cljs.core/map",-338988913,null),cljs.core.list(new cljs.core.Symbol("cljs.core","fn","cljs.core/fn",-1065745098,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"k","k",-505765866,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"v","v",1661996586,null)], null)),new cljs.core.Symbol(null,"p1__58468#","p1__58468#",-731704231,null)))),cljs.spec.spec_impl.call(null,cljs.core.list(new cljs.core.Symbol(null,"fn*","fn*",-752876845,null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p1__58467#","p1__58467#",2013408587,null)], null),cljs.core.list(new cljs.core.Symbol(null,"zipmap","zipmap",-690049687,null),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),new cljs.core.Symbol(null,"p1__58467#","p1__58467#",2013408587,null)),cljs.core.list(new cljs.core.Symbol(null,"map","map",-1282745308,null),new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),new cljs.core.Symbol(null,"p1__58467#","p1__58467#",2013408587,null)))),(function (p1__58467_SHARP_){
return cljs.core.zipmap.call(null,cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),p1__58467_SHARP_),cljs.core.map.call(null,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),p1__58467_SHARP_));
}),null,true,(function (p1__58468_SHARP_){
return cljs.core.map.call(null,(function (p__58469){
var vec__58470 = p__58469;
var k = cljs.core.nth.call(null,vec__58470,(0),null);
var v = cljs.core.nth.call(null,vec__58470,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("cljs.spec","k","cljs.spec/k",668466950),k,new cljs.core.Keyword("cljs.spec","v","cljs.spec/v",-1491964132),v], null);
}),p1__58468_SHARP_);
})));
/**
 * generates a number (default 10) of values compatible with spec and maps conform over them,
 *   returning a sequence of [val conformed-val] tuples. Optionally takes
 *   a generator overrides map as per gen
 */
cljs.spec.exercise = (function cljs$spec$exercise(var_args){
var args58474 = [];
var len__27054__auto___58477 = arguments.length;
var i__27055__auto___58478 = (0);
while(true){
if((i__27055__auto___58478 < len__27054__auto___58477)){
args58474.push((arguments[i__27055__auto___58478]));

var G__58479 = (i__27055__auto___58478 + (1));
i__27055__auto___58478 = G__58479;
continue;
} else {
}
break;
}

var G__58476 = args58474.length;
switch (G__58476) {
case 1:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58474.length)].join('')));

}
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$1 = (function (spec){
return cljs.spec.exercise.call(null,spec,(10));
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$2 = (function (spec,n){
return cljs.spec.exercise.call(null,spec,n,null);
});

cljs.spec.exercise.cljs$core$IFn$_invoke$arity$3 = (function (spec,n,overrides){
return cljs.core.map.call(null,(function (p1__58473_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__58473_SHARP_,cljs.spec.conform.call(null,spec,p1__58473_SHARP_)],null));
}),cljs.spec.impl.gen.sample.call(null,cljs.spec.gen.call(null,spec,overrides),n));
});

cljs.spec.exercise.cljs$lang$maxFixedArity = 3;

/**
 * Return true if inst at or after start and before end
 */
cljs.spec.inst_in_range_QMARK_ = (function cljs$spec$inst_in_range_QMARK_(start,end,inst){
var and__25967__auto__ = cljs.core.inst_QMARK_.call(null,inst);
if(and__25967__auto__){
var t = cljs.core.inst_ms.call(null,inst);
return ((cljs.core.inst_ms.call(null,start) <= t)) && ((t < cljs.core.inst_ms.call(null,end)));
} else {
return and__25967__auto__;
}
});
/**
 * Return true if start <= val and val < end
 */
cljs.spec.int_in_range_QMARK_ = (function cljs$spec$int_in_range_QMARK_(start,end,val){
if(cljs.core.integer_QMARK_.call(null,val)){
return ((start <= val)) && ((val < end));
} else {
if((val instanceof goog.math.Long)){
var and__25967__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__25967__auto__)){
return val.lessThan(end);
} else {
return and__25967__auto__;
}
} else {
if((val instanceof goog.math.Integer)){
var and__25967__auto__ = start.lessThanOrEqual(val);
if(cljs.core.truth_(and__25967__auto__)){
return val.lessThan(end);
} else {
return and__25967__auto__;
}
} else {
return false;

}
}
}
});
if(typeof cljs.spec._STAR_compile_asserts_STAR_ !== 'undefined'){
} else {
/**
 * If true, compiler will enable spec asserts, which are then
 * subject to runtime control via check-asserts? If false, compiler
 * will eliminate all spec assert overhead. See 'assert'.
 * Initially set to the negation of the ':elide-asserts' compiler option.
 * Defaults to true.
 */
cljs.spec._STAR_compile_asserts_STAR_ = true;
}
if(typeof cljs.spec._STAR_runtime_asserts_STAR_ !== 'undefined'){
} else {
cljs.spec._STAR_runtime_asserts_STAR_ = false;
}
/**
 * Returns the value set by check-asserts.
 */
cljs.spec.check_asserts_QMARK_ = (function cljs$spec$check_asserts_QMARK_(){
return cljs.spec._STAR_runtime_asserts_STAR_;
});
/**
 * Enable or disable spec asserts that have been compiled
 * with '*compile-asserts*' true.  See 'assert'.
 * Initially set to boolean value of cljs.spec/*runtime-asserts*.
 * Defaults to false.
 */
cljs.spec.check_asserts = (function cljs$spec$check_asserts(flag){
return cljs.spec._STAR_runtime_asserts_STAR_ = flag;
});
/**
 * Do not call this directly, use 'assert'.
 */
cljs.spec.assert_STAR_ = (function cljs$spec$assert_STAR_(spec,x){
if(cljs.core.truth_(cljs.spec.valid_QMARK_.call(null,spec,x))){
return x;
} else {
var ed = cljs.core.merge.call(null,cljs.core.assoc.call(null,cljs.spec.explain_data_STAR_.call(null,spec,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentVector.EMPTY,x),new cljs.core.Keyword("cljs.spec","failure","cljs.spec/failure",1931120592),new cljs.core.Keyword(null,"assertion-failed","assertion-failed",-970534477)));
throw (new Error([cljs.core.str("Spec assertion failed\n"),cljs.core.str((function (){var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_58483_58485 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_58484_58486 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_58483_58485,_STAR_print_fn_STAR_58484_58486,sb__26965__auto__,ed){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_58483_58485,_STAR_print_fn_STAR_58484_58486,sb__26965__auto__,ed))
;

try{cljs.spec.explain_out.call(null,ed);
}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_58484_58486;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_58483_58485;
}
return [cljs.core.str(sb__26965__auto__)].join('');
})())].join('')));
}
});

//# sourceMappingURL=spec.js.map?rel=1499548770861