// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.format');
goog.require('cljs.core');
goog.require('devtools.context');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

devtools.format._header = (function devtools$format$_header(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._header[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._header["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-header",value);
}
}
}
});

devtools.format._has_body = (function devtools$format$_has_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._has_body[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-has-body",value);
}
}
}
});

devtools.format._body = (function devtools$format$_body(value){
if((!((value == null))) && (!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
var x__26642__auto__ = (((value == null))?null:value);
var m__26643__auto__ = (devtools.format._body[goog.typeOf(x__26642__auto__)]);
if(!((m__26643__auto__ == null))){
return m__26643__auto__.call(null,value);
} else {
var m__26643__auto____$1 = (devtools.format._body["_"]);
if(!((m__26643__auto____$1 == null))){
return m__26643__auto____$1.call(null,value);
} else {
throw cljs.core.missing_protocol.call(null,"IDevtoolsFormat.-body",value);
}
}
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
devtools.format._STAR_setup_done_STAR_ = true;

devtools.format.make_template_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40223__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40223__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40222__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40222__auto__,"make_template");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40223__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40223__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40222__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40222__auto__,"make_group");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40223__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40223__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40222__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40222__auto__,"make_reference");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40223__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40223__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40222__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40222__auto__,"make_surrogate");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40223__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40223__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40222__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40222__auto__,"render_markup");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40223__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40223__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40222__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40222__auto__,"_LT_header_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__4657__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40223__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__40223__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__40222__auto__ = temp__4657__auto____$2;
return goog.object.get(o__40222__auto__,"_LT_standard_body_GT_");
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57750 = arguments.length;
var i__27055__auto___57751 = (0);
while(true){
if((i__27055__auto___57751 < len__27054__auto___57750)){
args__27061__auto__.push((arguments[i__27055__auto___57751]));

var G__57752 = (i__27055__auto___57751 + (1));
i__27055__auto___57751 = G__57752;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq57749){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57749));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57754 = arguments.length;
var i__27055__auto___57755 = (0);
while(true){
if((i__27055__auto___57755 < len__27054__auto___57754)){
args__27061__auto__.push((arguments[i__27055__auto___57755]));

var G__57756 = (i__27055__auto___57755 + (1));
i__27055__auto___57755 = G__57756;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq57753){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57753));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57758 = arguments.length;
var i__27055__auto___57759 = (0);
while(true){
if((i__27055__auto___57759 < len__27054__auto___57758)){
args__27061__auto__.push((arguments[i__27055__auto___57759]));

var G__57760 = (i__27055__auto___57759 + (1));
i__27055__auto___57759 = G__57760;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq57757){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57757));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57762 = arguments.length;
var i__27055__auto___57763 = (0);
while(true){
if((i__27055__auto___57763 < len__27054__auto___57762)){
args__27061__auto__.push((arguments[i__27055__auto___57763]));

var G__57764 = (i__27055__auto___57763 + (1));
i__27055__auto___57763 = G__57764;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq57761){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57761));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57766 = arguments.length;
var i__27055__auto___57767 = (0);
while(true){
if((i__27055__auto___57767 < len__27054__auto___57766)){
args__27061__auto__.push((arguments[i__27055__auto___57767]));

var G__57768 = (i__27055__auto___57767 + (1));
i__27055__auto___57767 = G__57768;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq57765){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57765));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57770 = arguments.length;
var i__27055__auto___57771 = (0);
while(true){
if((i__27055__auto___57771 < len__27054__auto___57770)){
args__27061__auto__.push((arguments[i__27055__auto___57771]));

var G__57772 = (i__27055__auto___57771 + (1));
i__27055__auto___57771 = G__57772;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq57769){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57769));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57774 = arguments.length;
var i__27055__auto___57775 = (0);
while(true){
if((i__27055__auto___57775 < len__27054__auto___57774)){
args__27061__auto__.push((arguments[i__27055__auto___57775]));

var G__57776 = (i__27055__auto___57775 + (1));
i__27055__auto___57775 = G__57776;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq57773){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57773));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57784 = arguments.length;
var i__27055__auto___57785 = (0);
while(true){
if((i__27055__auto___57785 < len__27054__auto___57784)){
args__27061__auto__.push((arguments[i__27055__auto___57785]));

var G__57786 = (i__27055__auto___57785 + (1));
i__27055__auto___57785 = G__57786;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__57780){
var vec__57781 = p__57780;
var state_override = cljs.core.nth.call(null,vec__57781,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__57781,state_override){
return (function (p1__57777_SHARP_){
return cljs.core.merge.call(null,p1__57777_SHARP_,state_override);
});})(vec__57781,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq57778){
var G__57779 = cljs.core.first.call(null,seq57778);
var seq57778__$1 = cljs.core.next.call(null,seq57778);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__57779,seq57778__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57788 = arguments.length;
var i__27055__auto___57789 = (0);
while(true){
if((i__27055__auto___57789 < len__27054__auto___57788)){
args__27061__auto__.push((arguments[i__27055__auto___57789]));

var G__57790 = (i__27055__auto___57789 + (1));
i__27055__auto___57789 = G__57790;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq57787){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57787));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___57793 = arguments.length;
var i__27055__auto___57794 = (0);
while(true){
if((i__27055__auto___57794 < len__27054__auto___57793)){
args__27061__auto__.push((arguments[i__27055__auto___57794]));

var G__57795 = (i__27055__auto___57794 + (1));
i__27055__auto___57794 = G__57795;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq57791){
var G__57792 = cljs.core.first.call(null,seq57791);
var seq57791__$1 = cljs.core.next.call(null,seq57791);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__57792,seq57791__$1);
});


//# sourceMappingURL=format.js.map?rel=1500065528914