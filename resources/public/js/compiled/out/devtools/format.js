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
var o__37732__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37732__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37732__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37732__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37731__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37731__auto__,"make_template");
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
var o__37732__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37732__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37732__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37732__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37731__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37731__auto__,"make_group");
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
var o__37732__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37732__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37732__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37732__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37731__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37731__auto__,"make_reference");
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
var o__37732__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37732__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37732__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37732__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37731__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37731__auto__,"make_surrogate");
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
var o__37732__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37732__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37732__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37732__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37731__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37731__auto__,"render_markup");
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
var o__37732__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37732__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37732__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37732__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37731__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37731__auto__,"_LT_header_GT_");
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
var o__37732__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__37732__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__37732__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__37732__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__37731__auto__ = temp__4657__auto____$2;
return goog.object.get(o__37731__auto__,"_LT_standard_body_GT_");
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
var len__27054__auto___37753 = arguments.length;
var i__27055__auto___37754 = (0);
while(true){
if((i__27055__auto___37754 < len__27054__auto___37753)){
args__27061__auto__.push((arguments[i__27055__auto___37754]));

var G__37755 = (i__27055__auto___37754 + (1));
i__27055__auto___37754 = G__37755;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37752){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37752));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37757 = arguments.length;
var i__27055__auto___37758 = (0);
while(true){
if((i__27055__auto___37758 < len__27054__auto___37757)){
args__27061__auto__.push((arguments[i__27055__auto___37758]));

var G__37759 = (i__27055__auto___37758 + (1));
i__27055__auto___37758 = G__37759;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq37756){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37756));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37761 = arguments.length;
var i__27055__auto___37762 = (0);
while(true){
if((i__27055__auto___37762 < len__27054__auto___37761)){
args__27061__auto__.push((arguments[i__27055__auto___37762]));

var G__37763 = (i__27055__auto___37762 + (1));
i__27055__auto___37762 = G__37763;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq37760){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37760));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37765 = arguments.length;
var i__27055__auto___37766 = (0);
while(true){
if((i__27055__auto___37766 < len__27054__auto___37765)){
args__27061__auto__.push((arguments[i__27055__auto___37766]));

var G__37767 = (i__27055__auto___37766 + (1));
i__27055__auto___37766 = G__37767;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37764){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37764));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37769 = arguments.length;
var i__27055__auto___37770 = (0);
while(true){
if((i__27055__auto___37770 < len__27054__auto___37769)){
args__27061__auto__.push((arguments[i__27055__auto___37770]));

var G__37771 = (i__27055__auto___37770 + (1));
i__27055__auto___37770 = G__37771;
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

devtools.format.template.cljs$lang$applyTo = (function (seq37768){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37768));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37773 = arguments.length;
var i__27055__auto___37774 = (0);
while(true){
if((i__27055__auto___37774 < len__27054__auto___37773)){
args__27061__auto__.push((arguments[i__27055__auto___37774]));

var G__37775 = (i__27055__auto___37774 + (1));
i__27055__auto___37774 = G__37775;
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

devtools.format.group.cljs$lang$applyTo = (function (seq37772){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37772));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37777 = arguments.length;
var i__27055__auto___37778 = (0);
while(true){
if((i__27055__auto___37778 < len__27054__auto___37777)){
args__27061__auto__.push((arguments[i__27055__auto___37778]));

var G__37779 = (i__27055__auto___37778 + (1));
i__27055__auto___37778 = G__37779;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37776){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37776));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37787 = arguments.length;
var i__27055__auto___37788 = (0);
while(true){
if((i__27055__auto___37788 < len__27054__auto___37787)){
args__27061__auto__.push((arguments[i__27055__auto___37788]));

var G__37789 = (i__27055__auto___37788 + (1));
i__27055__auto___37788 = G__37789;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37783){
var vec__37784 = p__37783;
var state_override = cljs.core.nth.call(null,vec__37784,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37784,state_override){
return (function (p1__37780_SHARP_){
return cljs.core.merge.call(null,p1__37780_SHARP_,state_override);
});})(vec__37784,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37781){
var G__37782 = cljs.core.first.call(null,seq37781);
var seq37781__$1 = cljs.core.next.call(null,seq37781);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37782,seq37781__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37791 = arguments.length;
var i__27055__auto___37792 = (0);
while(true){
if((i__27055__auto___37792 < len__27054__auto___37791)){
args__27061__auto__.push((arguments[i__27055__auto___37792]));

var G__37793 = (i__27055__auto___37792 + (1));
i__27055__auto___37792 = G__37793;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq37790){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37790));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___37796 = arguments.length;
var i__27055__auto___37797 = (0);
while(true){
if((i__27055__auto___37797 < len__27054__auto___37796)){
args__27061__auto__.push((arguments[i__27055__auto___37797]));

var G__37798 = (i__27055__auto___37797 + (1));
i__27055__auto___37797 = G__37798;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37794){
var G__37795 = cljs.core.first.call(null,seq37794);
var seq37794__$1 = cljs.core.next.call(null,seq37794);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37795,seq37794__$1);
});


//# sourceMappingURL=format.js.map?rel=1499543390217