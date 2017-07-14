// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.templating');
goog.require('cljs.core');
goog.require('cljs.pprint');
goog.require('clojure.walk');
goog.require('devtools.util');
goog.require('devtools.protocols');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.state');
goog.require('clojure.string');
devtools.formatters.templating.mark_as_group_BANG_ = (function devtools$formatters$templating$mark_as_group_BANG_(value){
var x42928_42929 = value;
x42928_42929.devtools$protocols$IGroup$ = true;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$IGroup$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.IGroup,value);
}
});
devtools.formatters.templating.mark_as_template_BANG_ = (function devtools$formatters$templating$mark_as_template_BANG_(value){
var x42933_42934 = value;
x42933_42934.devtools$protocols$ITemplate$ = true;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ITemplate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ITemplate,value);
}
});
devtools.formatters.templating.mark_as_surrogate_BANG_ = (function devtools$formatters$templating$mark_as_surrogate_BANG_(value){
var x42938_42939 = value;
x42938_42939.devtools$protocols$ISurrogate$ = true;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || (value.devtools$protocols$ISurrogate$)){
return true;
} else {
if((!value.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,devtools.protocols.ISurrogate,value);
}
});
devtools.formatters.templating.reference_QMARK_ = (function devtools$formatters$templating$reference_QMARK_(value){
var and__25967__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__25967__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__25967__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42947 = arguments.length;
var i__27055__auto___42948 = (0);
while(true){
if((i__27055__auto___42948 < len__27054__auto___42947)){
args__27061__auto__.push((arguments[i__27055__auto___42948]));

var G__42949 = (i__27055__auto___42948 + (1));
i__27055__auto___42948 = G__42949;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__42943_42950 = cljs.core.seq.call(null,items);
var chunk__42944_42951 = null;
var count__42945_42952 = (0);
var i__42946_42953 = (0);
while(true){
if((i__42946_42953 < count__42945_42952)){
var item_42954 = cljs.core._nth.call(null,chunk__42944_42951,i__42946_42953);
if(cljs.core.some_QMARK_.call(null,item_42954)){
if(cljs.core.coll_QMARK_.call(null,item_42954)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_42954)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_42954));
}
} else {
}

var G__42955 = seq__42943_42950;
var G__42956 = chunk__42944_42951;
var G__42957 = count__42945_42952;
var G__42958 = (i__42946_42953 + (1));
seq__42943_42950 = G__42955;
chunk__42944_42951 = G__42956;
count__42945_42952 = G__42957;
i__42946_42953 = G__42958;
continue;
} else {
var temp__4657__auto___42959 = cljs.core.seq.call(null,seq__42943_42950);
if(temp__4657__auto___42959){
var seq__42943_42960__$1 = temp__4657__auto___42959;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42943_42960__$1)){
var c__26790__auto___42961 = cljs.core.chunk_first.call(null,seq__42943_42960__$1);
var G__42962 = cljs.core.chunk_rest.call(null,seq__42943_42960__$1);
var G__42963 = c__26790__auto___42961;
var G__42964 = cljs.core.count.call(null,c__26790__auto___42961);
var G__42965 = (0);
seq__42943_42950 = G__42962;
chunk__42944_42951 = G__42963;
count__42945_42952 = G__42964;
i__42946_42953 = G__42965;
continue;
} else {
var item_42966 = cljs.core.first.call(null,seq__42943_42960__$1);
if(cljs.core.some_QMARK_.call(null,item_42966)){
if(cljs.core.coll_QMARK_.call(null,item_42966)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_42966)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_42966));
}
} else {
}

var G__42967 = cljs.core.next.call(null,seq__42943_42960__$1);
var G__42968 = null;
var G__42969 = (0);
var G__42970 = (0);
seq__42943_42950 = G__42967;
chunk__42944_42951 = G__42968;
count__42945_42952 = G__42969;
i__42946_42953 = G__42970;
continue;
}
} else {
}
}
break;
}

return group;
});

devtools.formatters.templating.make_group.cljs$lang$maxFixedArity = (0);

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq42942){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq42942));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___42978 = arguments.length;
var i__27055__auto___42979 = (0);
while(true){
if((i__27055__auto___42979 < len__27054__auto___42978)){
args__27061__auto__.push((arguments[i__27055__auto___42979]));

var G__42980 = (i__27055__auto___42979 + (1));
i__27055__auto___42979 = G__42980;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((2) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__27062__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__42974_42981 = cljs.core.seq.call(null,children);
var chunk__42975_42982 = null;
var count__42976_42983 = (0);
var i__42977_42984 = (0);
while(true){
if((i__42977_42984 < count__42976_42983)){
var child_42985 = cljs.core._nth.call(null,chunk__42975_42982,i__42977_42984);
if(cljs.core.some_QMARK_.call(null,child_42985)){
if(cljs.core.coll_QMARK_.call(null,child_42985)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_42985))));
} else {
var temp__4655__auto___42986 = devtools.formatters.helpers.pref.call(null,child_42985);
if(cljs.core.truth_(temp__4655__auto___42986)){
var child_value_42987 = temp__4655__auto___42986;
template.push(child_value_42987);
} else {
}
}
} else {
}

var G__42988 = seq__42974_42981;
var G__42989 = chunk__42975_42982;
var G__42990 = count__42976_42983;
var G__42991 = (i__42977_42984 + (1));
seq__42974_42981 = G__42988;
chunk__42975_42982 = G__42989;
count__42976_42983 = G__42990;
i__42977_42984 = G__42991;
continue;
} else {
var temp__4657__auto___42992 = cljs.core.seq.call(null,seq__42974_42981);
if(temp__4657__auto___42992){
var seq__42974_42993__$1 = temp__4657__auto___42992;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__42974_42993__$1)){
var c__26790__auto___42994 = cljs.core.chunk_first.call(null,seq__42974_42993__$1);
var G__42995 = cljs.core.chunk_rest.call(null,seq__42974_42993__$1);
var G__42996 = c__26790__auto___42994;
var G__42997 = cljs.core.count.call(null,c__26790__auto___42994);
var G__42998 = (0);
seq__42974_42981 = G__42995;
chunk__42975_42982 = G__42996;
count__42976_42983 = G__42997;
i__42977_42984 = G__42998;
continue;
} else {
var child_42999 = cljs.core.first.call(null,seq__42974_42993__$1);
if(cljs.core.some_QMARK_.call(null,child_42999)){
if(cljs.core.coll_QMARK_.call(null,child_42999)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_42999))));
} else {
var temp__4655__auto___43000 = devtools.formatters.helpers.pref.call(null,child_42999);
if(cljs.core.truth_(temp__4655__auto___43000)){
var child_value_43001 = temp__4655__auto___43000;
template.push(child_value_43001);
} else {
}
}
} else {
}

var G__43002 = cljs.core.next.call(null,seq__42974_42993__$1);
var G__43003 = null;
var G__43004 = (0);
var G__43005 = (0);
seq__42974_42981 = G__43002;
chunk__42975_42982 = G__43003;
count__42976_42983 = G__43004;
i__42977_42984 = G__43005;
continue;
}
} else {
}
}
break;
}

return template;
});

devtools.formatters.templating.make_template.cljs$lang$maxFixedArity = (2);

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq42971){
var G__42972 = cljs.core.first.call(null,seq42971);
var seq42971__$1 = cljs.core.next.call(null,seq42971);
var G__42973 = cljs.core.first.call(null,seq42971__$1);
var seq42971__$2 = cljs.core.next.call(null,seq42971__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__42972,G__42973,seq42971__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___43008 = arguments.length;
var i__27055__auto___43009 = (0);
while(true){
if((i__27055__auto___43009 < len__27054__auto___43008)){
args__27061__auto__.push((arguments[i__27055__auto___43009]));

var G__43010 = (i__27055__auto___43009 + (1));
i__27055__auto___43009 = G__43010;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq43006){
var G__43007 = cljs.core.first.call(null,seq43006);
var seq43006__$1 = cljs.core.next.call(null,seq43006);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43007,seq43006__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___43013 = arguments.length;
var i__27055__auto___43014 = (0);
while(true){
if((i__27055__auto___43014 < len__27054__auto___43013)){
args__27061__auto__.push((arguments[i__27055__auto___43014]));

var G__43015 = (i__27055__auto___43014 + (1));
i__27055__auto___43014 = G__43015;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq43011){
var G__43012 = cljs.core.first.call(null,seq43011);
var seq43011__$1 = cljs.core.next.call(null,seq43011);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__43012,seq43011__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args43016 = [];
var len__27054__auto___43021 = arguments.length;
var i__27055__auto___43022 = (0);
while(true){
if((i__27055__auto___43022 < len__27054__auto___43021)){
args43016.push((arguments[i__27055__auto___43022]));

var G__43023 = (i__27055__auto___43022 + (1));
i__27055__auto___43022 = G__43023;
continue;
} else {
}
break;
}

var G__43018 = args43016.length;
switch (G__43018) {
case 1:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args43016.length)].join('')));

}
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$1 = (function (object){
return devtools.formatters.templating.make_surrogate.call(null,object,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$2 = (function (object,header){
return devtools.formatters.templating.make_surrogate.call(null,object,header,null);
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$3 = (function (object,header,body){
return devtools.formatters.templating.make_surrogate.call(null,object,header,body,(0));
});

devtools.formatters.templating.make_surrogate.cljs$core$IFn$_invoke$arity$4 = (function (object,header,body,start_index){
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj43020 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25979__auto__ = start_index;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})()};
return obj43020;
})());
});

devtools.formatters.templating.make_surrogate.cljs$lang$maxFixedArity = 4;

devtools.formatters.templating.get_surrogate_target = (function devtools$formatters$templating$get_surrogate_target(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"target");
});
devtools.formatters.templating.get_surrogate_header = (function devtools$formatters$templating$get_surrogate_header(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"header");
});
devtools.formatters.templating.get_surrogate_body = (function devtools$formatters$templating$get_surrogate_body(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"body");
});
devtools.formatters.templating.get_surrogate_start_index = (function devtools$formatters$templating$get_surrogate_start_index(surrogate){
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,surrogate))){
} else {
throw (new Error("Assert failed: (surrogate? surrogate)"));
}

return goog.object.get(surrogate,"startIndex");
});
devtools.formatters.templating.make_reference = (function devtools$formatters$templating$make_reference(var_args){
var args__27061__auto__ = [];
var len__27054__auto___43031 = arguments.length;
var i__27055__auto___43032 = (0);
while(true){
if((i__27055__auto___43032 < len__27054__auto___43031)){
args__27061__auto__.push((arguments[i__27055__auto___43032]));

var G__43033 = (i__27055__auto___43032 + (1));
i__27055__auto___43032 = G__43033;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__43027){
var vec__43028 = p__43027;
var state_override_fn = cljs.core.nth.call(null,vec__43028,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((cljs.core.some_QMARK_.call(null,state_override_fn))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq43025){
var G__43026 = cljs.core.first.call(null,seq43025);
var seq43025__$1 = cljs.core.next.call(null,seq43025);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__43026,seq43025__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_43037_43040 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_43038_43041 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_43037_43040,_STAR_print_fn_STAR_43038_43041,sb__26965__auto__){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_43037_43040,_STAR_print_fn_STAR_43038_43041,sb__26965__auto__))
;

try{var _STAR_print_level_STAR_43039_43042 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_43039_43042;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_43038_43041;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_43037_43040;
}
return [cljs.core.str(sb__26965__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_43044 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_43044;
}});
devtools.formatters.templating.add_stack_separators = (function devtools$formatters$templating$add_stack_separators(stack){
return cljs.core.interpose.call(null,"-------------",stack);
});
devtools.formatters.templating.replace_fns_with_markers = (function devtools$formatters$templating$replace_fns_with_markers(stack){
var f = (function (v){
if(cljs.core.fn_QMARK_.call(null,v)){
return "##fn##";
} else {
return v;
}
});
return clojure.walk.prewalk.call(null,f,stack);
});
devtools.formatters.templating.pprint_render_calls = (function devtools$formatters$templating$pprint_render_calls(stack){
return cljs.core.map.call(null,devtools.formatters.templating.pprint_str,stack);
});
devtools.formatters.templating.pprint_render_stack = (function devtools$formatters$templating$pprint_render_stack(stack){
return clojure.string.join.call(null,"\n",devtools.formatters.templating.add_stack_separators.call(null,devtools.formatters.templating.pprint_render_calls.call(null,devtools.formatters.templating.replace_fns_with_markers.call(null,cljs.core.reverse.call(null,stack)))));
});
devtools.formatters.templating.pprint_render_path = (function devtools$formatters$templating$pprint_render_path(path){
return devtools.formatters.templating.pprint_str.call(null,path);
});
devtools.formatters.templating.assert_markup_error = (function devtools$formatters$templating$assert_markup_error(msg){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str(msg),cljs.core.str("\n"),cljs.core.str("Render path: "),cljs.core.str(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str("\n"),cljs.core.str("Render stack:\n"),cljs.core.str(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__43046 = name;
switch (G__43046) {
case "surrogate":
var obj = cljs.core.first.call(null,args);
var converted_args = cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.rest.call(null,args));
return cljs.core.apply.call(null,devtools.formatters.templating.make_surrogate,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null),converted_args));

break;
case "reference":
var obj = cljs.core.first.call(null,args);
var converted_obj = (cljs.core.truth_(devtools.formatters.templating.surrogate_markup_QMARK_.call(null,obj))?devtools.formatters.templating.render_json_ml_STAR_.call(null,obj):obj);
return cljs.core.apply.call(null,devtools.formatters.templating.make_reference,cljs.core.concat.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [converted_obj], null),cljs.core.rest.call(null,args)));

break;
default:
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("no matching special tag name: '"),cljs.core.str(name),cljs.core.str("'")].join(''));

}
});
devtools.formatters.templating.emptyish_QMARK_ = (function devtools$formatters$templating$emptyish_QMARK_(v){
if((cljs.core.seqable_QMARK_.call(null,v)) || (cljs.core.array_QMARK_.call(null,v)) || (typeof v === 'string')){
return cljs.core.empty_QMARK_.call(null,v);
} else {
return false;
}
});
devtools.formatters.templating.render_subtree = (function devtools$formatters$templating$render_subtree(tag,children){
var vec__43051 = tag;
var html_tag = cljs.core.nth.call(null,vec__43051,(0),null);
var style = cljs.core.nth.call(null,vec__43051,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_43055 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str("invalid json-ml markup at "),cljs.core.str(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_43055;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_43058 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_43059 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_43059;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_43058;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__43060 = initial_value;
var G__43061 = value.call(null);
initial_value = G__43060;
value = G__43061;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__43062 = initial_value;
var G__43063 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__43062;
value = G__43063;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__43064 = initial_value;
var G__43065 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__43064;
value = G__43065;
continue;
} else {
if(cljs.core.truth_(devtools.formatters.templating.template_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.surrogate_QMARK_.call(null,value))){
return value;
} else {
if(cljs.core.truth_(devtools.formatters.templating.reference_QMARK_.call(null,value))){
return value;
} else {
return devtools.formatters.templating.assert_failed_markup_rendering.call(null,initial_value,value);

}
}
}
}
}
}
break;
}
});
devtools.formatters.templating.render_markup = (function devtools$formatters$templating$render_markup(value){
return devtools.formatters.templating.render_markup_STAR_.call(null,value,value);
});

//# sourceMappingURL=templating.js.map?rel=1500064925186