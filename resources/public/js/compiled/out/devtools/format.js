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
var o__42715__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__42715__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__42715__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__42715__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__42714__auto__ = temp__4657__auto____$2;
return goog.object.get(o__42714__auto__,"make_template");
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
var o__42715__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__42715__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__42715__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__42715__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__42714__auto__ = temp__4657__auto____$2;
return goog.object.get(o__42714__auto__,"make_group");
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
var o__42715__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__42715__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__42715__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__42715__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__42714__auto__ = temp__4657__auto____$2;
return goog.object.get(o__42714__auto__,"make_reference");
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
var o__42715__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__42715__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__42715__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__42715__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__42714__auto__ = temp__4657__auto____$2;
return goog.object.get(o__42714__auto__,"make_surrogate");
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
var o__42715__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__42715__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__42715__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__42715__auto____$1,"templating");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__42714__auto__ = temp__4657__auto____$2;
return goog.object.get(o__42714__auto__,"render_markup");
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
var o__42715__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__42715__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__42715__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__42715__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__42714__auto__ = temp__4657__auto____$2;
return goog.object.get(o__42714__auto__,"_LT_header_GT_");
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
var o__42715__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__42715__auto__,"formatters");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__42715__auto____$1 = temp__4657__auto____$1;
var temp__4657__auto____$2 = goog.object.get(o__42715__auto____$1,"markup");
if(cljs.core.truth_(temp__4657__auto____$2)){
var o__42714__auto__ = temp__4657__auto____$2;
return goog.object.get(o__42714__auto__,"_LT_standard_body_GT_");
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
var len__27054__auto___42736 = arguments.length;
var i__27055__auto___42737 = (0);
while(true){
if((i__27055__auto___42737 < len__27054__auto___42736)){
args__27061__auto__.push((arguments[i__27055__auto___42737]));

var G__42738 = (i__27055__auto___42737 + (1));
i__27055__auto___42737 = G__42738;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq42735){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42735));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42740 = arguments.length;
var i__27055__auto___42741 = (0);
while(true){
if((i__27055__auto___42741 < len__27054__auto___42740)){
args__27061__auto__.push((arguments[i__27055__auto___42741]));

var G__42742 = (i__27055__auto___42741 + (1));
i__27055__auto___42741 = G__42742;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq42739){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42739));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42744 = arguments.length;
var i__27055__auto___42745 = (0);
while(true){
if((i__27055__auto___42745 < len__27054__auto___42744)){
args__27061__auto__.push((arguments[i__27055__auto___42745]));

var G__42746 = (i__27055__auto___42745 + (1));
i__27055__auto___42745 = G__42746;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq42743){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42743));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42748 = arguments.length;
var i__27055__auto___42749 = (0);
while(true){
if((i__27055__auto___42749 < len__27054__auto___42748)){
args__27061__auto__.push((arguments[i__27055__auto___42749]));

var G__42750 = (i__27055__auto___42749 + (1));
i__27055__auto___42749 = G__42750;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq42747){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42747));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42752 = arguments.length;
var i__27055__auto___42753 = (0);
while(true){
if((i__27055__auto___42753 < len__27054__auto___42752)){
args__27061__auto__.push((arguments[i__27055__auto___42753]));

var G__42754 = (i__27055__auto___42753 + (1));
i__27055__auto___42753 = G__42754;
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

devtools.format.template.cljs$lang$applyTo = (function (seq42751){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42751));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42756 = arguments.length;
var i__27055__auto___42757 = (0);
while(true){
if((i__27055__auto___42757 < len__27054__auto___42756)){
args__27061__auto__.push((arguments[i__27055__auto___42757]));

var G__42758 = (i__27055__auto___42757 + (1));
i__27055__auto___42757 = G__42758;
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

devtools.format.group.cljs$lang$applyTo = (function (seq42755){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42755));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42760 = arguments.length;
var i__27055__auto___42761 = (0);
while(true){
if((i__27055__auto___42761 < len__27054__auto___42760)){
args__27061__auto__.push((arguments[i__27055__auto___42761]));

var G__42762 = (i__27055__auto___42761 + (1));
i__27055__auto___42761 = G__42762;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq42759){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42759));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42770 = arguments.length;
var i__27055__auto___42771 = (0);
while(true){
if((i__27055__auto___42771 < len__27054__auto___42770)){
args__27061__auto__.push((arguments[i__27055__auto___42771]));

var G__42772 = (i__27055__auto___42771 + (1));
i__27055__auto___42771 = G__42772;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__42766){
var vec__42767 = p__42766;
var state_override = cljs.core.nth.call(null,vec__42767,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__42767,state_override){
return (function (p1__42763_SHARP_){
return cljs.core.merge.call(null,p1__42763_SHARP_,state_override);
});})(vec__42767,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq42764){
var G__42765 = cljs.core.first.call(null,seq42764);
var seq42764__$1 = cljs.core.next.call(null,seq42764);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__42765,seq42764__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42774 = arguments.length;
var i__27055__auto___42775 = (0);
while(true){
if((i__27055__auto___42775 < len__27054__auto___42774)){
args__27061__auto__.push((arguments[i__27055__auto___42775]));

var G__42776 = (i__27055__auto___42775 + (1));
i__27055__auto___42775 = G__42776;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq42773){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42773));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42779 = arguments.length;
var i__27055__auto___42780 = (0);
while(true){
if((i__27055__auto___42780 < len__27054__auto___42779)){
args__27061__auto__.push((arguments[i__27055__auto___42780]));

var G__42781 = (i__27055__auto___42780 + (1));
i__27055__auto___42780 = G__42781;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq42777){
var G__42778 = cljs.core.first.call(null,seq42777);
var seq42777__$1 = cljs.core.next.call(null,seq42777);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__42778,seq42777__$1);
});


//# sourceMappingURL=format.js.map?rel=1499706525283