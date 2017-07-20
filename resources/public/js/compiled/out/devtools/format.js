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
var len__29802__auto___92040 = arguments.length;
var i__29803__auto___92041 = (0);
while(true){
if((i__29803__auto___92041 < len__29802__auto___92040)){
args__29809__auto__.push((arguments[i__29803__auto___92041]));

var G__92042 = (i__29803__auto___92041 + (1));
i__29803__auto___92041 = G__92042;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq92039){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92039));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92044 = arguments.length;
var i__29803__auto___92045 = (0);
while(true){
if((i__29803__auto___92045 < len__29802__auto___92044)){
args__29809__auto__.push((arguments[i__29803__auto___92045]));

var G__92046 = (i__29803__auto___92045 + (1));
i__29803__auto___92045 = G__92046;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq92043){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92043));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92048 = arguments.length;
var i__29803__auto___92049 = (0);
while(true){
if((i__29803__auto___92049 < len__29802__auto___92048)){
args__29809__auto__.push((arguments[i__29803__auto___92049]));

var G__92050 = (i__29803__auto___92049 + (1));
i__29803__auto___92049 = G__92050;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq92047){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92047));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92052 = arguments.length;
var i__29803__auto___92053 = (0);
while(true){
if((i__29803__auto___92053 < len__29802__auto___92052)){
args__29809__auto__.push((arguments[i__29803__auto___92053]));

var G__92054 = (i__29803__auto___92053 + (1));
i__29803__auto___92053 = G__92054;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq92051){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92051));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92056 = arguments.length;
var i__29803__auto___92057 = (0);
while(true){
if((i__29803__auto___92057 < len__29802__auto___92056)){
args__29809__auto__.push((arguments[i__29803__auto___92057]));

var G__92058 = (i__29803__auto___92057 + (1));
i__29803__auto___92057 = G__92058;
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

devtools.format.template.cljs$lang$applyTo = (function (seq92055){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92055));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92060 = arguments.length;
var i__29803__auto___92061 = (0);
while(true){
if((i__29803__auto___92061 < len__29802__auto___92060)){
args__29809__auto__.push((arguments[i__29803__auto___92061]));

var G__92062 = (i__29803__auto___92061 + (1));
i__29803__auto___92061 = G__92062;
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

devtools.format.group.cljs$lang$applyTo = (function (seq92059){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92059));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92064 = arguments.length;
var i__29803__auto___92065 = (0);
while(true){
if((i__29803__auto___92065 < len__29802__auto___92064)){
args__29809__auto__.push((arguments[i__29803__auto___92065]));

var G__92066 = (i__29803__auto___92065 + (1));
i__29803__auto___92065 = G__92066;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq92063){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92063));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92074 = arguments.length;
var i__29803__auto___92075 = (0);
while(true){
if((i__29803__auto___92075 < len__29802__auto___92074)){
args__29809__auto__.push((arguments[i__29803__auto___92075]));

var G__92076 = (i__29803__auto___92075 + (1));
i__29803__auto___92075 = G__92076;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__92070){
var vec__92071 = p__92070;
var state_override = cljs.core.nth.call(null,vec__92071,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__92071,state_override){
return (function (p1__92067_SHARP_){
return cljs.core.merge.call(null,p1__92067_SHARP_,state_override);
});})(vec__92071,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq92068){
var G__92069 = cljs.core.first.call(null,seq92068);
var seq92068__$1 = cljs.core.next.call(null,seq92068);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__92069,seq92068__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92078 = arguments.length;
var i__29803__auto___92079 = (0);
while(true){
if((i__29803__auto___92079 < len__29802__auto___92078)){
args__29809__auto__.push((arguments[i__29803__auto___92079]));

var G__92080 = (i__29803__auto___92079 + (1));
i__29803__auto___92079 = G__92080;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq92077){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq92077));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___92083 = arguments.length;
var i__29803__auto___92084 = (0);
while(true){
if((i__29803__auto___92084 < len__29802__auto___92083)){
args__29809__auto__.push((arguments[i__29803__auto___92084]));

var G__92085 = (i__29803__auto___92084 + (1));
i__29803__auto___92084 = G__92085;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq92081){
var G__92082 = cljs.core.first.call(null,seq92081);
var seq92081__$1 = cljs.core.next.call(null,seq92081);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__92082,seq92081__$1);
});


//# sourceMappingURL=format.js.map?rel=1500526712456