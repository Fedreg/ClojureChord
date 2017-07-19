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
var o__37614__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37614__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37614__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37614__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37613__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37613__auto__,"make_template");
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
var o__37614__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37614__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37614__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37614__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37613__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37613__auto__,"make_group");
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
var o__37614__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37614__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37614__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37614__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37613__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37613__auto__,"make_reference");
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
var o__37614__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37614__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37614__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37614__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37613__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37613__auto__,"make_surrogate");
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
var o__37614__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37614__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37614__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37614__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37613__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37613__auto__,"render_markup");
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
var o__37614__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37614__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37614__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37614__auto____$1,"markup");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37613__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37613__auto__,"_LT_header_GT_");
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
var o__37614__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37614__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37614__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37614__auto____$1,"markup");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37613__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37613__auto__,"_LT_standard_body_GT_");
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
var len__29802__auto___37635 = arguments.length;
var i__29803__auto___37636 = (0);
while(true){
if((i__29803__auto___37636 < len__29802__auto___37635)){
args__29809__auto__.push((arguments[i__29803__auto___37636]));

var G__37637 = (i__29803__auto___37636 + (1));
i__29803__auto___37636 = G__37637;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37634){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37634));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37639 = arguments.length;
var i__29803__auto___37640 = (0);
while(true){
if((i__29803__auto___37640 < len__29802__auto___37639)){
args__29809__auto__.push((arguments[i__29803__auto___37640]));

var G__37641 = (i__29803__auto___37640 + (1));
i__29803__auto___37640 = G__37641;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq37638){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37638));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37643 = arguments.length;
var i__29803__auto___37644 = (0);
while(true){
if((i__29803__auto___37644 < len__29802__auto___37643)){
args__29809__auto__.push((arguments[i__29803__auto___37644]));

var G__37645 = (i__29803__auto___37644 + (1));
i__29803__auto___37644 = G__37645;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq37642){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37642));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37647 = arguments.length;
var i__29803__auto___37648 = (0);
while(true){
if((i__29803__auto___37648 < len__29802__auto___37647)){
args__29809__auto__.push((arguments[i__29803__auto___37648]));

var G__37649 = (i__29803__auto___37648 + (1));
i__29803__auto___37648 = G__37649;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37646){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37646));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37651 = arguments.length;
var i__29803__auto___37652 = (0);
while(true){
if((i__29803__auto___37652 < len__29802__auto___37651)){
args__29809__auto__.push((arguments[i__29803__auto___37652]));

var G__37653 = (i__29803__auto___37652 + (1));
i__29803__auto___37652 = G__37653;
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

devtools.format.template.cljs$lang$applyTo = (function (seq37650){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37650));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37655 = arguments.length;
var i__29803__auto___37656 = (0);
while(true){
if((i__29803__auto___37656 < len__29802__auto___37655)){
args__29809__auto__.push((arguments[i__29803__auto___37656]));

var G__37657 = (i__29803__auto___37656 + (1));
i__29803__auto___37656 = G__37657;
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

devtools.format.group.cljs$lang$applyTo = (function (seq37654){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37654));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37659 = arguments.length;
var i__29803__auto___37660 = (0);
while(true){
if((i__29803__auto___37660 < len__29802__auto___37659)){
args__29809__auto__.push((arguments[i__29803__auto___37660]));

var G__37661 = (i__29803__auto___37660 + (1));
i__29803__auto___37660 = G__37661;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37658){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37658));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37669 = arguments.length;
var i__29803__auto___37670 = (0);
while(true){
if((i__29803__auto___37670 < len__29802__auto___37669)){
args__29809__auto__.push((arguments[i__29803__auto___37670]));

var G__37671 = (i__29803__auto___37670 + (1));
i__29803__auto___37670 = G__37671;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37665){
var vec__37666 = p__37665;
var state_override = cljs.core.nth.call(null,vec__37666,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37666,state_override){
return (function (p1__37662_SHARP_){
return cljs.core.merge.call(null,p1__37662_SHARP_,state_override);
});})(vec__37666,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37663){
var G__37664 = cljs.core.first.call(null,seq37663);
var seq37663__$1 = cljs.core.next.call(null,seq37663);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37664,seq37663__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37673 = arguments.length;
var i__29803__auto___37674 = (0);
while(true){
if((i__29803__auto___37674 < len__29802__auto___37673)){
args__29809__auto__.push((arguments[i__29803__auto___37674]));

var G__37675 = (i__29803__auto___37674 + (1));
i__29803__auto___37674 = G__37675;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq37672){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37672));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37678 = arguments.length;
var i__29803__auto___37679 = (0);
while(true){
if((i__29803__auto___37679 < len__29802__auto___37678)){
args__29809__auto__.push((arguments[i__29803__auto___37679]));

var G__37680 = (i__29803__auto___37679 + (1));
i__29803__auto___37679 = G__37680;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37676){
var G__37677 = cljs.core.first.call(null,seq37676);
var seq37676__$1 = cljs.core.next.call(null,seq37676);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37677,seq37676__$1);
});


//# sourceMappingURL=format.js.map?rel=1500435981984