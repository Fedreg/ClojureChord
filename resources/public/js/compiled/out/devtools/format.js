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
var len__27054__auto___40244 = arguments.length;
var i__27055__auto___40245 = (0);
while(true){
if((i__27055__auto___40245 < len__27054__auto___40244)){
args__27061__auto__.push((arguments[i__27055__auto___40245]));

var G__40246 = (i__27055__auto___40245 + (1));
i__27055__auto___40245 = G__40246;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq40243){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40243));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40248 = arguments.length;
var i__27055__auto___40249 = (0);
while(true){
if((i__27055__auto___40249 < len__27054__auto___40248)){
args__27061__auto__.push((arguments[i__27055__auto___40249]));

var G__40250 = (i__27055__auto___40249 + (1));
i__27055__auto___40249 = G__40250;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq40247){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40247));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40252 = arguments.length;
var i__27055__auto___40253 = (0);
while(true){
if((i__27055__auto___40253 < len__27054__auto___40252)){
args__27061__auto__.push((arguments[i__27055__auto___40253]));

var G__40254 = (i__27055__auto___40253 + (1));
i__27055__auto___40253 = G__40254;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq40251){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40251));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40256 = arguments.length;
var i__27055__auto___40257 = (0);
while(true){
if((i__27055__auto___40257 < len__27054__auto___40256)){
args__27061__auto__.push((arguments[i__27055__auto___40257]));

var G__40258 = (i__27055__auto___40257 + (1));
i__27055__auto___40257 = G__40258;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq40255){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40255));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40260 = arguments.length;
var i__27055__auto___40261 = (0);
while(true){
if((i__27055__auto___40261 < len__27054__auto___40260)){
args__27061__auto__.push((arguments[i__27055__auto___40261]));

var G__40262 = (i__27055__auto___40261 + (1));
i__27055__auto___40261 = G__40262;
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

devtools.format.template.cljs$lang$applyTo = (function (seq40259){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40259));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40264 = arguments.length;
var i__27055__auto___40265 = (0);
while(true){
if((i__27055__auto___40265 < len__27054__auto___40264)){
args__27061__auto__.push((arguments[i__27055__auto___40265]));

var G__40266 = (i__27055__auto___40265 + (1));
i__27055__auto___40265 = G__40266;
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

devtools.format.group.cljs$lang$applyTo = (function (seq40263){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40263));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40268 = arguments.length;
var i__27055__auto___40269 = (0);
while(true){
if((i__27055__auto___40269 < len__27054__auto___40268)){
args__27061__auto__.push((arguments[i__27055__auto___40269]));

var G__40270 = (i__27055__auto___40269 + (1));
i__27055__auto___40269 = G__40270;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq40267){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40267));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40278 = arguments.length;
var i__27055__auto___40279 = (0);
while(true){
if((i__27055__auto___40279 < len__27054__auto___40278)){
args__27061__auto__.push((arguments[i__27055__auto___40279]));

var G__40280 = (i__27055__auto___40279 + (1));
i__27055__auto___40279 = G__40280;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__40274){
var vec__40275 = p__40274;
var state_override = cljs.core.nth.call(null,vec__40275,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__40275,state_override){
return (function (p1__40271_SHARP_){
return cljs.core.merge.call(null,p1__40271_SHARP_,state_override);
});})(vec__40275,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq40272){
var G__40273 = cljs.core.first.call(null,seq40272);
var seq40272__$1 = cljs.core.next.call(null,seq40272);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__40273,seq40272__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40282 = arguments.length;
var i__27055__auto___40283 = (0);
while(true){
if((i__27055__auto___40283 < len__27054__auto___40282)){
args__27061__auto__.push((arguments[i__27055__auto___40283]));

var G__40284 = (i__27055__auto___40283 + (1));
i__27055__auto___40283 = G__40284;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq40281){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq40281));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___40287 = arguments.length;
var i__27055__auto___40288 = (0);
while(true){
if((i__27055__auto___40288 < len__27054__auto___40287)){
args__27061__auto__.push((arguments[i__27055__auto___40288]));

var G__40289 = (i__27055__auto___40288 + (1));
i__27055__auto___40288 = G__40289;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq40285){
var G__40286 = cljs.core.first.call(null,seq40285);
var seq40285__$1 = cljs.core.next.call(null,seq40285);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__40286,seq40285__$1);
});


//# sourceMappingURL=format.js.map?rel=1500064915650