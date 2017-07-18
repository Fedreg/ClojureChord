// Compiled by ClojureScript 1.9.671 {}
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
var x39733_39734 = value;
x39733_39734.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.group_QMARK_ = (function devtools$formatters$templating$group_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$IGroup$))){
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
var x39736_39737 = value;
x39736_39737.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.template_QMARK_ = (function devtools$formatters$templating$template_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ITemplate$))){
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
var x39739_39740 = value;
x39739_39740.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


return value;
});
devtools.formatters.templating.surrogate_QMARK_ = (function devtools$formatters$templating$surrogate_QMARK_(value){
if(!((value == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === value.devtools$protocols$ISurrogate$))){
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
var and__28557__auto__ = devtools.formatters.templating.group_QMARK_.call(null,value);
if(cljs.core.truth_(and__28557__auto__)){
return cljs.core._EQ_.call(null,(value[(0)]),"object");
} else {
return and__28557__auto__;
}
});
devtools.formatters.templating.make_group = (function devtools$formatters$templating$make_group(var_args){
var args__29809__auto__ = [];
var len__29802__auto___39747 = arguments.length;
var i__29803__auto___39748 = (0);
while(true){
if((i__29803__auto___39748 < len__29802__auto___39747)){
args__29809__auto__.push((arguments[i__29803__auto___39748]));

var G__39749 = (i__29803__auto___39748 + (1));
i__29803__auto___39748 = G__39749;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (items){
var group = devtools.formatters.templating.mark_as_group_BANG_.call(null,[]);
var seq__39743_39750 = cljs.core.seq.call(null,items);
var chunk__39744_39751 = null;
var count__39745_39752 = (0);
var i__39746_39753 = (0);
while(true){
if((i__39746_39753 < count__39745_39752)){
var item_39754 = cljs.core._nth.call(null,chunk__39744_39751,i__39746_39753);
if(!((item_39754 == null))){
if(cljs.core.coll_QMARK_.call(null,item_39754)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39754)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39754));
}
} else {
}

var G__39755 = seq__39743_39750;
var G__39756 = chunk__39744_39751;
var G__39757 = count__39745_39752;
var G__39758 = (i__39746_39753 + (1));
seq__39743_39750 = G__39755;
chunk__39744_39751 = G__39756;
count__39745_39752 = G__39757;
i__39746_39753 = G__39758;
continue;
} else {
var temp__5278__auto___39759 = cljs.core.seq.call(null,seq__39743_39750);
if(temp__5278__auto___39759){
var seq__39743_39760__$1 = temp__5278__auto___39759;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39743_39760__$1)){
var c__29481__auto___39761 = cljs.core.chunk_first.call(null,seq__39743_39760__$1);
var G__39762 = cljs.core.chunk_rest.call(null,seq__39743_39760__$1);
var G__39763 = c__29481__auto___39761;
var G__39764 = cljs.core.count.call(null,c__29481__auto___39761);
var G__39765 = (0);
seq__39743_39750 = G__39762;
chunk__39744_39751 = G__39763;
count__39745_39752 = G__39764;
i__39746_39753 = G__39765;
continue;
} else {
var item_39766 = cljs.core.first.call(null,seq__39743_39760__$1);
if(!((item_39766 == null))){
if(cljs.core.coll_QMARK_.call(null,item_39766)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_39766)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_39766));
}
} else {
}

var G__39767 = cljs.core.next.call(null,seq__39743_39760__$1);
var G__39768 = null;
var G__39769 = (0);
var G__39770 = (0);
seq__39743_39750 = G__39767;
chunk__39744_39751 = G__39768;
count__39745_39752 = G__39769;
i__39746_39753 = G__39770;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq39742){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39742));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___39778 = arguments.length;
var i__29803__auto___39779 = (0);
while(true){
if((i__29803__auto___39779 < len__29802__auto___39778)){
args__29809__auto__.push((arguments[i__29803__auto___39779]));

var G__39780 = (i__29803__auto___39779 + (1));
i__29803__auto___39779 = G__39780;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((2) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((2)),(0),null)):null);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29810__auto__);
});

devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (tag,style,children){
var tag__$1 = devtools.formatters.helpers.pref.call(null,tag);
var style__$1 = devtools.formatters.helpers.pref.call(null,style);
var template = devtools.formatters.templating.mark_as_template_BANG_.call(null,[tag__$1,((cljs.core.empty_QMARK_.call(null,style__$1))?({}):({"style": style__$1}))]);
var seq__39774_39781 = cljs.core.seq.call(null,children);
var chunk__39775_39782 = null;
var count__39776_39783 = (0);
var i__39777_39784 = (0);
while(true){
if((i__39777_39784 < count__39776_39783)){
var child_39785 = cljs.core._nth.call(null,chunk__39775_39782,i__39777_39784);
if(!((child_39785 == null))){
if(cljs.core.coll_QMARK_.call(null,child_39785)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39785))));
} else {
var temp__5276__auto___39786 = devtools.formatters.helpers.pref.call(null,child_39785);
if(cljs.core.truth_(temp__5276__auto___39786)){
var child_value_39787 = temp__5276__auto___39786;
template.push(child_value_39787);
} else {
}
}
} else {
}

var G__39788 = seq__39774_39781;
var G__39789 = chunk__39775_39782;
var G__39790 = count__39776_39783;
var G__39791 = (i__39777_39784 + (1));
seq__39774_39781 = G__39788;
chunk__39775_39782 = G__39789;
count__39776_39783 = G__39790;
i__39777_39784 = G__39791;
continue;
} else {
var temp__5278__auto___39792 = cljs.core.seq.call(null,seq__39774_39781);
if(temp__5278__auto___39792){
var seq__39774_39793__$1 = temp__5278__auto___39792;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39774_39793__$1)){
var c__29481__auto___39794 = cljs.core.chunk_first.call(null,seq__39774_39793__$1);
var G__39795 = cljs.core.chunk_rest.call(null,seq__39774_39793__$1);
var G__39796 = c__29481__auto___39794;
var G__39797 = cljs.core.count.call(null,c__29481__auto___39794);
var G__39798 = (0);
seq__39774_39781 = G__39795;
chunk__39775_39782 = G__39796;
count__39776_39783 = G__39797;
i__39777_39784 = G__39798;
continue;
} else {
var child_39799 = cljs.core.first.call(null,seq__39774_39793__$1);
if(!((child_39799 == null))){
if(cljs.core.coll_QMARK_.call(null,child_39799)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_39799))));
} else {
var temp__5276__auto___39800 = devtools.formatters.helpers.pref.call(null,child_39799);
if(cljs.core.truth_(temp__5276__auto___39800)){
var child_value_39801 = temp__5276__auto___39800;
template.push(child_value_39801);
} else {
}
}
} else {
}

var G__39802 = cljs.core.next.call(null,seq__39774_39793__$1);
var G__39803 = null;
var G__39804 = (0);
var G__39805 = (0);
seq__39774_39781 = G__39802;
chunk__39775_39782 = G__39803;
count__39776_39783 = G__39804;
i__39777_39784 = G__39805;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq39771){
var G__39772 = cljs.core.first.call(null,seq39771);
var seq39771__$1 = cljs.core.next.call(null,seq39771);
var G__39773 = cljs.core.first.call(null,seq39771__$1);
var seq39771__$2 = cljs.core.next.call(null,seq39771__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__39772,G__39773,seq39771__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___39808 = arguments.length;
var i__29803__auto___39809 = (0);
while(true){
if((i__29803__auto___39809 < len__29802__auto___39808)){
args__29809__auto__.push((arguments[i__29803__auto___39809]));

var G__39810 = (i__29803__auto___39809 + (1));
i__29803__auto___39809 = G__39810;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,templates){
return devtools.formatters.templating.mark_as_template_BANG_.call(null,goog.object.get(template,"concat").apply(template,cljs.core.into_array.call(null,cljs.core.map.call(null,cljs.core.into_array,cljs.core.keep.call(null,devtools.formatters.helpers.pref,templates)))));
});

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq39806){
var G__39807 = cljs.core.first.call(null,seq39806);
var seq39806__$1 = cljs.core.next.call(null,seq39806);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39807,seq39806__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___39813 = arguments.length;
var i__29803__auto___39814 = (0);
while(true){
if((i__29803__auto___39814 < len__29802__auto___39813)){
args__29809__auto__.push((arguments[i__29803__auto___39814]));

var G__39815 = (i__29803__auto___39814 + (1));
i__29803__auto___39814 = G__39815;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (template,args){
return devtools.formatters.templating.concat_templates_BANG_.call(null,template,args);
});

devtools.formatters.templating.extend_template_BANG_.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq39811){
var G__39812 = cljs.core.first.call(null,seq39811);
var seq39811__$1 = cljs.core.next.call(null,seq39811);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__39812,seq39811__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__39817 = arguments.length;
switch (G__39817) {
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj39819 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28569__auto__ = start_index;
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return (0);
}
})()};
return obj39819;
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
var args__29809__auto__ = [];
var len__29802__auto___39827 = arguments.length;
var i__29803__auto___39828 = (0);
while(true){
if((i__29803__auto___39828 < len__29802__auto___39827)){
args__29809__auto__.push((arguments[i__29803__auto___39828]));

var G__39829 = (i__29803__auto___39828 + (1));
i__29803__auto___39828 = G__39829;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__39823){
var vec__39824 = p__39823;
var state_override_fn = cljs.core.nth.call(null,vec__39824,(0),null);
if(((state_override_fn == null)) || (cljs.core.fn_QMARK_.call(null,state_override_fn))){
} else {
throw (new Error("Assert failed: (or (nil? state-override-fn) (fn? state-override-fn))"));
}

if((object == null)){
return devtools.formatters.templating.make_template.call(null,new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.Keyword(null,"nil-style","nil-style",-1505044832),new cljs.core.Keyword(null,"nil-label","nil-label",-587789203));
} else {
var sub_state = ((!((state_override_fn == null)))?state_override_fn.call(null,devtools.formatters.state.get_current_state.call(null)):devtools.formatters.state.get_current_state.call(null));
return devtools.formatters.templating.make_group.call(null,"object",({"object": object, "config": sub_state}));
}
});

devtools.formatters.templating.make_reference.cljs$lang$maxFixedArity = (1);

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq39821){
var G__39822 = cljs.core.first.call(null,seq39821);
var seq39821__$1 = cljs.core.next.call(null,seq39821);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__39822,seq39821__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__29673__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_39830_39833 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_39831_39834 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_39830_39833,_STAR_print_fn_STAR_39831_39834,sb__29673__auto__){
return (function (x__29674__auto__){
return sb__29673__auto__.append(x__29674__auto__);
});})(_STAR_print_newline_STAR_39830_39833,_STAR_print_fn_STAR_39831_39834,sb__29673__auto__))
;

try{var _STAR_print_level_STAR_39832_39835 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39832_39835;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_39831_39834;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_39830_39833;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29673__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_39836 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_39836;
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
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render path: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_path.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Render stack:\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_render_stack.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.surrogate_markup_QMARK_ = (function devtools$formatters$templating$surrogate_markup_QMARK_(markup){
return (cljs.core.sequential_QMARK_.call(null,markup)) && (cljs.core._EQ_.call(null,cljs.core.first.call(null,markup),"surrogate"));
});
devtools.formatters.templating.render_special = (function devtools$formatters$templating$render_special(name,args){
var G__39837 = name;
switch (G__39837) {
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
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("no matching special tag name: '"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'")].join(''));

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
var vec__39839 = tag;
var html_tag = cljs.core.nth.call(null,vec__39839,(0),null);
var style = cljs.core.nth.call(null,vec__39839,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_39842 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,cljs.core.first.call(null,markup));

try{var tag = devtools.formatters.helpers.pref.call(null,cljs.core.first.call(null,markup));
if(typeof tag === 'string'){
return devtools.formatters.templating.render_special.call(null,tag,cljs.core.rest.call(null,markup));
} else {
if(cljs.core.sequential_QMARK_.call(null,tag)){
return devtools.formatters.templating.render_subtree.call(null,tag,cljs.core.rest.call(null,markup));
} else {
return devtools.formatters.templating.assert_markup_error.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("invalid json-ml markup at "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.print_preview.call(null,markup)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(":")].join(''));

}
}
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39842;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_39843 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_39844 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_39844;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_39843;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__39845 = initial_value;
var G__39846 = value.call(null);
initial_value = G__39845;
value = G__39846;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__39847 = initial_value;
var G__39848 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__39847;
value = G__39848;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__39849 = initial_value;
var G__39850 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__39849;
value = G__39850;
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

//# sourceMappingURL=templating.js.map?rel=1500333158279