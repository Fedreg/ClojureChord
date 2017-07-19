// Compiled by ClojureScript 1.9.671 {}
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
var x__29288__auto__ = (((value == null))?null:value);
var m__29289__auto__ = (devtools.format._header[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,value);
} else {
var m__29289__auto____$1 = (devtools.format._header["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,value);
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
var x__29288__auto__ = (((value == null))?null:value);
var m__29289__auto__ = (devtools.format._has_body[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,value);
} else {
var m__29289__auto____$1 = (devtools.format._has_body["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,value);
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
var x__29288__auto__ = (((value == null))?null:value);
var m__29289__auto__ = (devtools.format._body[goog.typeOf(x__29288__auto__)]);
if(!((m__29289__auto__ == null))){
return m__29289__auto__.call(null,value);
} else {
var m__29289__auto____$1 = (devtools.format._body["_"]);
if(!((m__29289__auto____$1 == null))){
return m__29289__auto____$1.call(null,value);
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

devtools.format.make_template_fn = (function (){var temp__5278__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5278__auto__)){
var o__38336__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__38336__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__38336__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__38336__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__38335__auto__ = temp__5278__auto____$2;
return goog.object.get(o__38335__auto__,"make_template");
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

devtools.format.make_group_fn = (function (){var temp__5278__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5278__auto__)){
var o__38336__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__38336__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__38336__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__38336__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__38335__auto__ = temp__5278__auto____$2;
return goog.object.get(o__38335__auto__,"make_group");
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

devtools.format.make_reference_fn = (function (){var temp__5278__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5278__auto__)){
var o__38336__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__38336__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__38336__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__38336__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__38335__auto__ = temp__5278__auto____$2;
return goog.object.get(o__38335__auto__,"make_reference");
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

devtools.format.make_surrogate_fn = (function (){var temp__5278__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5278__auto__)){
var o__38336__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__38336__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__38336__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__38336__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__38335__auto__ = temp__5278__auto____$2;
return goog.object.get(o__38335__auto__,"make_surrogate");
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

devtools.format.render_markup_fn = (function (){var temp__5278__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5278__auto__)){
var o__38336__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__38336__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__38336__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__38336__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__38335__auto__ = temp__5278__auto____$2;
return goog.object.get(o__38335__auto__,"render_markup");
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

devtools.format._LT_header_GT__fn = (function (){var temp__5278__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5278__auto__)){
var o__38336__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__38336__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__38336__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__38336__auto____$1,"markup");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__38335__auto__ = temp__5278__auto____$2;
return goog.object.get(o__38335__auto__,"_LT_header_GT_");
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

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5278__auto__ = goog.object.get(devtools.context.get_root.call(null),"devtools");
if(cljs.core.truth_(temp__5278__auto__)){
var o__38336__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__38336__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__38336__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__38336__auto____$1,"markup");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__38335__auto__ = temp__5278__auto____$2;
return goog.object.get(o__38335__auto__,"_LT_standard_body_GT_");
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
var args__29809__auto__ = [];
var len__29802__auto___38401 = arguments.length;
var i__29803__auto___38402 = (0);
while(true){
if((i__29803__auto___38402 < len__29802__auto___38401)){
args__29809__auto__.push((arguments[i__29803__auto___38402]));

var G__38403 = (i__29803__auto___38402 + (1));
i__29803__auto___38402 = G__38403;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.render_markup_fn,args);
});

devtools.format.render_markup.cljs$lang$maxFixedArity = (0);

devtools.format.render_markup.cljs$lang$applyTo = (function (seq38400){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38400));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38405 = arguments.length;
var i__29803__auto___38406 = (0);
while(true){
if((i__29803__auto___38406 < len__29802__auto___38405)){
args__29809__auto__.push((arguments[i__29803__auto___38406]));

var G__38407 = (i__29803__auto___38406 + (1));
i__29803__auto___38406 = G__38407;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.make_template.cljs$lang$maxFixedArity = (0);

devtools.format.make_template.cljs$lang$applyTo = (function (seq38404){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38404));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38409 = arguments.length;
var i__29803__auto___38410 = (0);
while(true){
if((i__29803__auto___38410 < len__29802__auto___38409)){
args__29809__auto__.push((arguments[i__29803__auto___38410]));

var G__38411 = (i__29803__auto___38410 + (1));
i__29803__auto___38410 = G__38411;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.make_group.cljs$lang$maxFixedArity = (0);

devtools.format.make_group.cljs$lang$applyTo = (function (seq38408){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38408));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38413 = arguments.length;
var i__29803__auto___38414 = (0);
while(true){
if((i__29803__auto___38414 < len__29802__auto___38413)){
args__29809__auto__.push((arguments[i__29803__auto___38414]));

var G__38415 = (i__29803__auto___38414 + (1));
i__29803__auto___38414 = G__38415;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq38412){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38412));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38417 = arguments.length;
var i__29803__auto___38418 = (0);
while(true){
if((i__29803__auto___38418 < len__29802__auto___38417)){
args__29809__auto__.push((arguments[i__29803__auto___38418]));

var G__38419 = (i__29803__auto___38418 + (1));
i__29803__auto___38418 = G__38419;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_template_fn,args);
});

devtools.format.template.cljs$lang$maxFixedArity = (0);

devtools.format.template.cljs$lang$applyTo = (function (seq38416){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38416));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38421 = arguments.length;
var i__29803__auto___38422 = (0);
while(true){
if((i__29803__auto___38422 < len__29802__auto___38421)){
args__29809__auto__.push((arguments[i__29803__auto___38422]));

var G__38423 = (i__29803__auto___38422 + (1));
i__29803__auto___38422 = G__38423;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_group_fn,args);
});

devtools.format.group.cljs$lang$maxFixedArity = (0);

devtools.format.group.cljs$lang$applyTo = (function (seq38420){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38420));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38425 = arguments.length;
var i__29803__auto___38426 = (0);
while(true){
if((i__29803__auto___38426 < len__29802__auto___38425)){
args__29809__auto__.push((arguments[i__29803__auto___38426]));

var G__38427 = (i__29803__auto___38426 + (1));
i__29803__auto___38426 = G__38427;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_surrogate_fn,args);
});

devtools.format.surrogate.cljs$lang$maxFixedArity = (0);

devtools.format.surrogate.cljs$lang$applyTo = (function (seq38424){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38424));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38435 = arguments.length;
var i__29803__auto___38436 = (0);
while(true){
if((i__29803__auto___38436 < len__29802__auto___38435)){
args__29809__auto__.push((arguments[i__29803__auto___38436]));

var G__38437 = (i__29803__auto___38436 + (1));
i__29803__auto___38436 = G__38437;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38431){
var vec__38432 = p__38431;
var state_override = cljs.core.nth.call(null,vec__38432,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__38432,state_override){
return (function (p1__38428_SHARP_){
return cljs.core.merge.call(null,p1__38428_SHARP_,state_override);
});})(vec__38432,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq38429){
var G__38430 = cljs.core.first.call(null,seq38429);
var seq38429__$1 = cljs.core.next.call(null,seq38429);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__38430,seq38429__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38439 = arguments.length;
var i__29803__auto___38440 = (0);
while(true){
if((i__29803__auto___38440 < len__29802__auto___38439)){
args__29809__auto__.push((arguments[i__29803__auto___38440]));

var G__38441 = (i__29803__auto___38440 + (1));
i__29803__auto___38440 = G__38441;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_.call(null);

return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_header_GT__fn,args));
});

devtools.format.build_header.cljs$lang$maxFixedArity = (0);

devtools.format.build_header.cljs$lang$applyTo = (function (seq38438){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38438));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38444 = arguments.length;
var i__29803__auto___38445 = (0);
while(true){
if((i__29803__auto___38445 < len__29802__auto___38444)){
args__29809__auto__.push((arguments[i__29803__auto___38445]));

var G__38446 = (i__29803__auto___38445 + (1));
i__29803__auto___38445 = G__38446;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_.call(null);

var args = cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.call(null,(function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.call(null,cljs.core.apply.call(null,devtools.format._LT_standard_body_GT__fn,args));
});

devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1);

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq38442){
var G__38443 = cljs.core.first.call(null,seq38442);
var seq38442__$1 = cljs.core.next.call(null,seq38442);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__38443,seq38442__$1);
});


//# sourceMappingURL=format.js.map?rel=1500449675871