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
var len__27054__auto___59795 = arguments.length;
var i__27055__auto___59796 = (0);
while(true){
if((i__27055__auto___59796 < len__27054__auto___59795)){
args__27061__auto__.push((arguments[i__27055__auto___59796]));

var G__59797 = (i__27055__auto___59796 + (1));
i__27055__auto___59796 = G__59797;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq59794){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59794));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59799 = arguments.length;
var i__27055__auto___59800 = (0);
while(true){
if((i__27055__auto___59800 < len__27054__auto___59799)){
args__27061__auto__.push((arguments[i__27055__auto___59800]));

var G__59801 = (i__27055__auto___59800 + (1));
i__27055__auto___59800 = G__59801;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq59798){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59798));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59803 = arguments.length;
var i__27055__auto___59804 = (0);
while(true){
if((i__27055__auto___59804 < len__27054__auto___59803)){
args__27061__auto__.push((arguments[i__27055__auto___59804]));

var G__59805 = (i__27055__auto___59804 + (1));
i__27055__auto___59804 = G__59805;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq59802){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59802));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59807 = arguments.length;
var i__27055__auto___59808 = (0);
while(true){
if((i__27055__auto___59808 < len__27054__auto___59807)){
args__27061__auto__.push((arguments[i__27055__auto___59808]));

var G__59809 = (i__27055__auto___59808 + (1));
i__27055__auto___59808 = G__59809;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq59806){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59806));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59811 = arguments.length;
var i__27055__auto___59812 = (0);
while(true){
if((i__27055__auto___59812 < len__27054__auto___59811)){
args__27061__auto__.push((arguments[i__27055__auto___59812]));

var G__59813 = (i__27055__auto___59812 + (1));
i__27055__auto___59812 = G__59813;
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

devtools.format.template.cljs$lang$applyTo = (function (seq59810){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59810));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59815 = arguments.length;
var i__27055__auto___59816 = (0);
while(true){
if((i__27055__auto___59816 < len__27054__auto___59815)){
args__27061__auto__.push((arguments[i__27055__auto___59816]));

var G__59817 = (i__27055__auto___59816 + (1));
i__27055__auto___59816 = G__59817;
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

devtools.format.group.cljs$lang$applyTo = (function (seq59814){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59814));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59819 = arguments.length;
var i__27055__auto___59820 = (0);
while(true){
if((i__27055__auto___59820 < len__27054__auto___59819)){
args__27061__auto__.push((arguments[i__27055__auto___59820]));

var G__59821 = (i__27055__auto___59820 + (1));
i__27055__auto___59820 = G__59821;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq59818){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59818));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59829 = arguments.length;
var i__27055__auto___59830 = (0);
while(true){
if((i__27055__auto___59830 < len__27054__auto___59829)){
args__27061__auto__.push((arguments[i__27055__auto___59830]));

var G__59831 = (i__27055__auto___59830 + (1));
i__27055__auto___59830 = G__59831;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__59825){
var vec__59826 = p__59825;
var state_override = cljs.core.nth.call(null,vec__59826,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__59826,state_override){
return (function (p1__59822_SHARP_){
return cljs.core.merge.call(null,p1__59822_SHARP_,state_override);
});})(vec__59826,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq59823){
var G__59824 = cljs.core.first.call(null,seq59823);
var seq59823__$1 = cljs.core.next.call(null,seq59823);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__59824,seq59823__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59833 = arguments.length;
var i__27055__auto___59834 = (0);
while(true){
if((i__27055__auto___59834 < len__27054__auto___59833)){
args__27061__auto__.push((arguments[i__27055__auto___59834]));

var G__59835 = (i__27055__auto___59834 + (1));
i__27055__auto___59834 = G__59835;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq59832){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59832));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59838 = arguments.length;
var i__27055__auto___59839 = (0);
while(true){
if((i__27055__auto___59839 < len__27054__auto___59838)){
args__27061__auto__.push((arguments[i__27055__auto___59839]));

var G__59840 = (i__27055__auto___59839 + (1));
i__27055__auto___59839 = G__59840;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq59836){
var G__59837 = cljs.core.first.call(null,seq59836);
var seq59836__$1 = cljs.core.next.call(null,seq59836);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__59837,seq59836__$1);
});


//# sourceMappingURL=format.js.map?rel=1499548773441