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
var x45418_45419 = value;
x45418_45419.devtools$protocols$IGroup$ = true;


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
var x45423_45424 = value;
x45423_45424.devtools$protocols$ITemplate$ = true;


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
var x45428_45429 = value;
x45428_45429.devtools$protocols$ISurrogate$ = true;


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
var len__27054__auto___45437 = arguments.length;
var i__27055__auto___45438 = (0);
while(true){
if((i__27055__auto___45438 < len__27054__auto___45437)){
args__27061__auto__.push((arguments[i__27055__auto___45438]));

var G__45439 = (i__27055__auto___45438 + (1));
i__27055__auto___45438 = G__45439;
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
var seq__45433_45440 = cljs.core.seq.call(null,items);
var chunk__45434_45441 = null;
var count__45435_45442 = (0);
var i__45436_45443 = (0);
while(true){
if((i__45436_45443 < count__45435_45442)){
var item_45444 = cljs.core._nth.call(null,chunk__45434_45441,i__45436_45443);
if(cljs.core.some_QMARK_.call(null,item_45444)){
if(cljs.core.coll_QMARK_.call(null,item_45444)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_45444)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_45444));
}
} else {
}

var G__45445 = seq__45433_45440;
var G__45446 = chunk__45434_45441;
var G__45447 = count__45435_45442;
var G__45448 = (i__45436_45443 + (1));
seq__45433_45440 = G__45445;
chunk__45434_45441 = G__45446;
count__45435_45442 = G__45447;
i__45436_45443 = G__45448;
continue;
} else {
var temp__4657__auto___45449 = cljs.core.seq.call(null,seq__45433_45440);
if(temp__4657__auto___45449){
var seq__45433_45450__$1 = temp__4657__auto___45449;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45433_45450__$1)){
var c__26790__auto___45451 = cljs.core.chunk_first.call(null,seq__45433_45450__$1);
var G__45452 = cljs.core.chunk_rest.call(null,seq__45433_45450__$1);
var G__45453 = c__26790__auto___45451;
var G__45454 = cljs.core.count.call(null,c__26790__auto___45451);
var G__45455 = (0);
seq__45433_45440 = G__45452;
chunk__45434_45441 = G__45453;
count__45435_45442 = G__45454;
i__45436_45443 = G__45455;
continue;
} else {
var item_45456 = cljs.core.first.call(null,seq__45433_45450__$1);
if(cljs.core.some_QMARK_.call(null,item_45456)){
if(cljs.core.coll_QMARK_.call(null,item_45456)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_45456)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_45456));
}
} else {
}

var G__45457 = cljs.core.next.call(null,seq__45433_45450__$1);
var G__45458 = null;
var G__45459 = (0);
var G__45460 = (0);
seq__45433_45440 = G__45457;
chunk__45434_45441 = G__45458;
count__45435_45442 = G__45459;
i__45436_45443 = G__45460;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq45432){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq45432));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__27061__auto__ = [];
var len__27054__auto___45468 = arguments.length;
var i__27055__auto___45469 = (0);
while(true){
if((i__27055__auto___45469 < len__27054__auto___45468)){
args__27061__auto__.push((arguments[i__27055__auto___45469]));

var G__45470 = (i__27055__auto___45469 + (1));
i__27055__auto___45469 = G__45470;
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
var seq__45464_45471 = cljs.core.seq.call(null,children);
var chunk__45465_45472 = null;
var count__45466_45473 = (0);
var i__45467_45474 = (0);
while(true){
if((i__45467_45474 < count__45466_45473)){
var child_45475 = cljs.core._nth.call(null,chunk__45465_45472,i__45467_45474);
if(cljs.core.some_QMARK_.call(null,child_45475)){
if(cljs.core.coll_QMARK_.call(null,child_45475)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_45475))));
} else {
var temp__4655__auto___45476 = devtools.formatters.helpers.pref.call(null,child_45475);
if(cljs.core.truth_(temp__4655__auto___45476)){
var child_value_45477 = temp__4655__auto___45476;
template.push(child_value_45477);
} else {
}
}
} else {
}

var G__45478 = seq__45464_45471;
var G__45479 = chunk__45465_45472;
var G__45480 = count__45466_45473;
var G__45481 = (i__45467_45474 + (1));
seq__45464_45471 = G__45478;
chunk__45465_45472 = G__45479;
count__45466_45473 = G__45480;
i__45467_45474 = G__45481;
continue;
} else {
var temp__4657__auto___45482 = cljs.core.seq.call(null,seq__45464_45471);
if(temp__4657__auto___45482){
var seq__45464_45483__$1 = temp__4657__auto___45482;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__45464_45483__$1)){
var c__26790__auto___45484 = cljs.core.chunk_first.call(null,seq__45464_45483__$1);
var G__45485 = cljs.core.chunk_rest.call(null,seq__45464_45483__$1);
var G__45486 = c__26790__auto___45484;
var G__45487 = cljs.core.count.call(null,c__26790__auto___45484);
var G__45488 = (0);
seq__45464_45471 = G__45485;
chunk__45465_45472 = G__45486;
count__45466_45473 = G__45487;
i__45467_45474 = G__45488;
continue;
} else {
var child_45489 = cljs.core.first.call(null,seq__45464_45483__$1);
if(cljs.core.some_QMARK_.call(null,child_45489)){
if(cljs.core.coll_QMARK_.call(null,child_45489)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_45489))));
} else {
var temp__4655__auto___45490 = devtools.formatters.helpers.pref.call(null,child_45489);
if(cljs.core.truth_(temp__4655__auto___45490)){
var child_value_45491 = temp__4655__auto___45490;
template.push(child_value_45491);
} else {
}
}
} else {
}

var G__45492 = cljs.core.next.call(null,seq__45464_45483__$1);
var G__45493 = null;
var G__45494 = (0);
var G__45495 = (0);
seq__45464_45471 = G__45492;
chunk__45465_45472 = G__45493;
count__45466_45473 = G__45494;
i__45467_45474 = G__45495;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq45461){
var G__45462 = cljs.core.first.call(null,seq45461);
var seq45461__$1 = cljs.core.next.call(null,seq45461);
var G__45463 = cljs.core.first.call(null,seq45461__$1);
var seq45461__$2 = cljs.core.next.call(null,seq45461__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__45462,G__45463,seq45461__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___45498 = arguments.length;
var i__27055__auto___45499 = (0);
while(true){
if((i__27055__auto___45499 < len__27054__auto___45498)){
args__27061__auto__.push((arguments[i__27055__auto___45499]));

var G__45500 = (i__27055__auto___45499 + (1));
i__27055__auto___45499 = G__45500;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq45496){
var G__45497 = cljs.core.first.call(null,seq45496);
var seq45496__$1 = cljs.core.next.call(null,seq45496);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45497,seq45496__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__27061__auto__ = [];
var len__27054__auto___45503 = arguments.length;
var i__27055__auto___45504 = (0);
while(true){
if((i__27055__auto___45504 < len__27054__auto___45503)){
args__27061__auto__.push((arguments[i__27055__auto___45504]));

var G__45505 = (i__27055__auto___45504 + (1));
i__27055__auto___45504 = G__45505;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq45501){
var G__45502 = cljs.core.first.call(null,seq45501);
var seq45501__$1 = cljs.core.next.call(null,seq45501);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__45502,seq45501__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var args45506 = [];
var len__27054__auto___45511 = arguments.length;
var i__27055__auto___45512 = (0);
while(true){
if((i__27055__auto___45512 < len__27054__auto___45511)){
args45506.push((arguments[i__27055__auto___45512]));

var G__45513 = (i__27055__auto___45512 + (1));
i__27055__auto___45512 = G__45513;
continue;
} else {
}
break;
}

var G__45508 = args45506.length;
switch (G__45508) {
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
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args45506.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj45510 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__25979__auto__ = start_index;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (0);
}
})()};
return obj45510;
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
var len__27054__auto___45521 = arguments.length;
var i__27055__auto___45522 = (0);
while(true){
if((i__27055__auto___45522 < len__27054__auto___45521)){
args__27061__auto__.push((arguments[i__27055__auto___45522]));

var G__45523 = (i__27055__auto___45522 + (1));
i__27055__auto___45522 = G__45523;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__45517){
var vec__45518 = p__45517;
var state_override_fn = cljs.core.nth.call(null,vec__45518,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq45515){
var G__45516 = cljs.core.first.call(null,seq45515);
var seq45515__$1 = cljs.core.next.call(null,seq45515);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__45516,seq45515__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__26965__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_45527_45530 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_45528_45531 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_45527_45530,_STAR_print_fn_STAR_45528_45531,sb__26965__auto__){
return (function (x__26966__auto__){
return sb__26965__auto__.append(x__26966__auto__);
});})(_STAR_print_newline_STAR_45527_45530,_STAR_print_fn_STAR_45528_45531,sb__26965__auto__))
;

try{var _STAR_print_level_STAR_45529_45532 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_45529_45532;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_45528_45531;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_45527_45530;
}
return [cljs.core.str(sb__26965__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_45534 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_45534;
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
var G__45536 = name;
switch (G__45536) {
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
var vec__45541 = tag;
var html_tag = cljs.core.nth.call(null,vec__45541,(0),null);
var style = cljs.core.nth.call(null,vec__45541,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_45545 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_45545;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_45548 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_45549 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_45549;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_45548;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("result of markup rendering must be a template,\n"),cljs.core.str("resolved to "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str("initial value: "),cljs.core.str(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str("\n"),cljs.core.str("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__45550 = initial_value;
var G__45551 = value.call(null);
initial_value = G__45550;
value = G__45551;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__45552 = initial_value;
var G__45553 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__45552;
value = G__45553;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__45554 = initial_value;
var G__45555 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__45554;
value = G__45555;
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

//# sourceMappingURL=templating.js.map?rel=1499706556190