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
var len__27054__auto___71855 = arguments.length;
var i__27055__auto___71856 = (0);
while(true){
if((i__27055__auto___71856 < len__27054__auto___71855)){
args__27061__auto__.push((arguments[i__27055__auto___71856]));

var G__71857 = (i__27055__auto___71856 + (1));
i__27055__auto___71856 = G__71857;
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

devtools.format.render_markup.cljs$lang$applyTo = (function (seq71854){
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71854));
});

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71859 = arguments.length;
var i__27055__auto___71860 = (0);
while(true){
if((i__27055__auto___71860 < len__27054__auto___71859)){
args__27061__auto__.push((arguments[i__27055__auto___71860]));

var G__71861 = (i__27055__auto___71860 + (1));
i__27055__auto___71860 = G__71861;
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

devtools.format.make_template.cljs$lang$applyTo = (function (seq71858){
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71858));
});

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71863 = arguments.length;
var i__27055__auto___71864 = (0);
while(true){
if((i__27055__auto___71864 < len__27054__auto___71863)){
args__27061__auto__.push((arguments[i__27055__auto___71864]));

var G__71865 = (i__27055__auto___71864 + (1));
i__27055__auto___71864 = G__71865;
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

devtools.format.make_group.cljs$lang$applyTo = (function (seq71862){
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71862));
});

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71867 = arguments.length;
var i__27055__auto___71868 = (0);
while(true){
if((i__27055__auto___71868 < len__27054__auto___71867)){
args__27061__auto__.push((arguments[i__27055__auto___71868]));

var G__71869 = (i__27055__auto___71868 + (1));
i__27055__auto___71868 = G__71869;
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

devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq71866){
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71866));
});

devtools.format.template = (function devtools$format$template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71871 = arguments.length;
var i__27055__auto___71872 = (0);
while(true){
if((i__27055__auto___71872 < len__27054__auto___71871)){
args__27061__auto__.push((arguments[i__27055__auto___71872]));

var G__71873 = (i__27055__auto___71872 + (1));
i__27055__auto___71872 = G__71873;
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

devtools.format.template.cljs$lang$applyTo = (function (seq71870){
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71870));
});

devtools.format.group = (function devtools$format$group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71875 = arguments.length;
var i__27055__auto___71876 = (0);
while(true){
if((i__27055__auto___71876 < len__27054__auto___71875)){
args__27061__auto__.push((arguments[i__27055__auto___71876]));

var G__71877 = (i__27055__auto___71876 + (1));
i__27055__auto___71876 = G__71877;
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

devtools.format.group.cljs$lang$applyTo = (function (seq71874){
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71874));
});

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71879 = arguments.length;
var i__27055__auto___71880 = (0);
while(true){
if((i__27055__auto___71880 < len__27054__auto___71879)){
args__27061__auto__.push((arguments[i__27055__auto___71880]));

var G__71881 = (i__27055__auto___71880 + (1));
i__27055__auto___71880 = G__71881;
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

devtools.format.surrogate.cljs$lang$applyTo = (function (seq71878){
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71878));
});

devtools.format.reference = (function devtools$format$reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71889 = arguments.length;
var i__27055__auto___71890 = (0);
while(true){
if((i__27055__auto___71890 < len__27054__auto___71889)){
args__27061__auto__.push((arguments[i__27055__auto___71890]));

var G__71891 = (i__27055__auto___71890 + (1));
i__27055__auto___71890 = G__71891;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__71885){
var vec__71886 = p__71885;
var state_override = cljs.core.nth.call(null,vec__71886,(0),null);
devtools.format.setup_BANG_.call(null);

return cljs.core.apply.call(null,devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,((function (vec__71886,state_override){
return (function (p1__71882_SHARP_){
return cljs.core.merge.call(null,p1__71882_SHARP_,state_override);
});})(vec__71886,state_override))
], null));
});

devtools.format.reference.cljs$lang$maxFixedArity = (1);

devtools.format.reference.cljs$lang$applyTo = (function (seq71883){
var G__71884 = cljs.core.first.call(null,seq71883);
var seq71883__$1 = cljs.core.next.call(null,seq71883);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic(G__71884,seq71883__$1);
});

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_.call(null);

return devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"ol","ol",932524051),new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615),devtools.format.make_template_fn.call(null,new cljs.core.Keyword(null,"li","li",723558921),new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955),devtools.format.make_reference_fn.call(null,target)));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71893 = arguments.length;
var i__27055__auto___71894 = (0);
while(true){
if((i__27055__auto___71894 < len__27054__auto___71893)){
args__27061__auto__.push((arguments[i__27055__auto___71894]));

var G__71895 = (i__27055__auto___71894 + (1));
i__27055__auto___71894 = G__71895;
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

devtools.format.build_header.cljs$lang$applyTo = (function (seq71892){
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq71892));
});

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___71898 = arguments.length;
var i__27055__auto___71899 = (0);
while(true){
if((i__27055__auto___71899 < len__27054__auto___71898)){
args__27061__auto__.push((arguments[i__27055__auto___71899]));

var G__71900 = (i__27055__auto___71899 + (1));
i__27055__auto___71899 = G__71900;
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

devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq71896){
var G__71897 = cljs.core.first.call(null,seq71896);
var seq71896__$1 = cljs.core.next.call(null,seq71896);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic(G__71897,seq71896__$1);
});


//# sourceMappingURL=format.js.map?rel=1499924876747