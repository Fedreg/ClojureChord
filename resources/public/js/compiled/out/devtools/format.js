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
var o__37613__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37613__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37613__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37613__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37612__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37612__auto__,"make_template");
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
var o__37613__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37613__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37613__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37613__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37612__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37612__auto__,"make_group");
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
var o__37613__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37613__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37613__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37613__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37612__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37612__auto__,"make_reference");
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
var o__37613__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37613__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37613__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37613__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37612__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37612__auto__,"make_surrogate");
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
var o__37613__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37613__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37613__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37613__auto____$1,"templating");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37612__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37612__auto__,"render_markup");
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
var o__37613__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37613__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37613__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37613__auto____$1,"markup");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37612__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37612__auto__,"_LT_header_GT_");
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
var o__37613__auto__ = temp__5278__auto__;
var temp__5278__auto____$1 = goog.object.get(o__37613__auto__,"formatters");
if(cljs.core.truth_(temp__5278__auto____$1)){
var o__37613__auto____$1 = temp__5278__auto____$1;
var temp__5278__auto____$2 = goog.object.get(o__37613__auto____$1,"markup");
if(cljs.core.truth_(temp__5278__auto____$2)){
var o__37612__auto__ = temp__5278__auto____$2;
return goog.object.get(o__37612__auto__,"_LT_standard_body_GT_");
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
var len__29802__auto___37634 = arguments.length;
var i__29803__auto___37635 = (0);
while(true){
if((i__29803__auto___37635 < len__29802__auto___37634)){
args__29809__auto__.push((arguments[i__29803__auto___37635]));

var G__37636 = (i__29803__auto___37635 + (1));
i__29803__auto___37635 = G__37636;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq37633){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37633));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37638 = arguments.length;
var i__29803__auto___37639 = (0);
while(true){
if((i__29803__auto___37639 < len__29802__auto___37638)){
args__29809__auto__.push((arguments[i__29803__auto___37639]));

var G__37640 = (i__29803__auto___37639 + (1));
i__29803__auto___37639 = G__37640;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq37637){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37637));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37642 = arguments.length;
var i__29803__auto___37643 = (0);
while(true){
if((i__29803__auto___37643 < len__29802__auto___37642)){
args__29809__auto__.push((arguments[i__29803__auto___37643]));

var G__37644 = (i__29803__auto___37643 + (1));
i__29803__auto___37643 = G__37644;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq37641){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37641));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37646 = arguments.length;
var i__29803__auto___37647 = (0);
while(true){
if((i__29803__auto___37647 < len__29802__auto___37646)){
args__29809__auto__.push((arguments[i__29803__auto___37647]));

var G__37648 = (i__29803__auto___37647 + (1));
i__29803__auto___37647 = G__37648;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq37645){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37645));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37650 = arguments.length;
var i__29803__auto___37651 = (0);
while(true){
if((i__29803__auto___37651 < len__29802__auto___37650)){
args__29809__auto__.push((arguments[i__29803__auto___37651]));

var G__37652 = (i__29803__auto___37651 + (1));
i__29803__auto___37651 = G__37652;
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

devtools.format.template.cljs$lang$applyTo = (function (seq37649){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37649));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37654 = arguments.length;
var i__29803__auto___37655 = (0);
while(true){
if((i__29803__auto___37655 < len__29802__auto___37654)){
args__29809__auto__.push((arguments[i__29803__auto___37655]));

var G__37656 = (i__29803__auto___37655 + (1));
i__29803__auto___37655 = G__37656;
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

devtools.format.group.cljs$lang$applyTo = (function (seq37653){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37653));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37658 = arguments.length;
var i__29803__auto___37659 = (0);
while(true){
if((i__29803__auto___37659 < len__29802__auto___37658)){
args__29809__auto__.push((arguments[i__29803__auto___37659]));

var G__37660 = (i__29803__auto___37659 + (1));
i__29803__auto___37659 = G__37660;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq37657){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37657));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37668 = arguments.length;
var i__29803__auto___37669 = (0);
while(true){
if((i__29803__auto___37669 < len__29802__auto___37668)){
args__29809__auto__.push((arguments[i__29803__auto___37669]));

var G__37670 = (i__29803__auto___37669 + (1));
i__29803__auto___37669 = G__37670;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__37664){
var vec__37665 = p__37664;
var state_override = cljs.core.nth.call(null,vec__37665,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__37665,state_override){
return (function (p1__37661_SHARP_){
return cljs.core.merge.call(null,p1__37661_SHARP_,state_override);
});})(vec__37665,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq37662){
var G__37663 = cljs.core.first.call(null,seq37662);
var seq37662__$1 = cljs.core.next.call(null,seq37662);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__37663,seq37662__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37672 = arguments.length;
var i__29803__auto___37673 = (0);
while(true){
if((i__29803__auto___37673 < len__29802__auto___37672)){
args__29809__auto__.push((arguments[i__29803__auto___37673]));

var G__37674 = (i__29803__auto___37673 + (1));
i__29803__auto___37673 = G__37674;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq37671){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37671));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___37677 = arguments.length;
var i__29803__auto___37678 = (0);
while(true){
if((i__29803__auto___37678 < len__29802__auto___37677)){
args__29809__auto__.push((arguments[i__29803__auto___37678]));

var G__37679 = (i__29803__auto___37678 + (1));
i__29803__auto___37678 = G__37679;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq37675){
var G__37676 = cljs.core.first.call(null,seq37675);
var seq37675__$1 = cljs.core.next.call(null,seq37675);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__37676,seq37675__$1);
});


//# sourceMappingURL=format.js.map?rel=1500333151513