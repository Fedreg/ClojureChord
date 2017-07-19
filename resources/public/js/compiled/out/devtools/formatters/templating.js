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
var x38641_38642 = value;
x38641_38642.devtools$protocols$IGroup$ = cljs.core.PROTOCOL_SENTINEL;


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
var x38644_38645 = value;
x38644_38645.devtools$protocols$ITemplate$ = cljs.core.PROTOCOL_SENTINEL;


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
var x38647_38648 = value;
x38647_38648.devtools$protocols$ISurrogate$ = cljs.core.PROTOCOL_SENTINEL;


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
var len__29802__auto___38655 = arguments.length;
var i__29803__auto___38656 = (0);
while(true){
if((i__29803__auto___38656 < len__29802__auto___38655)){
args__29809__auto__.push((arguments[i__29803__auto___38656]));

var G__38657 = (i__29803__auto___38656 + (1));
i__29803__auto___38656 = G__38657;
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
var seq__38651_38658 = cljs.core.seq.call(null,items);
var chunk__38652_38659 = null;
var count__38653_38660 = (0);
var i__38654_38661 = (0);
while(true){
if((i__38654_38661 < count__38653_38660)){
var item_38662 = cljs.core._nth.call(null,chunk__38652_38659,i__38654_38661);
if(!((item_38662 == null))){
if(cljs.core.coll_QMARK_.call(null,item_38662)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38662)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38662));
}
} else {
}

var G__38663 = seq__38651_38658;
var G__38664 = chunk__38652_38659;
var G__38665 = count__38653_38660;
var G__38666 = (i__38654_38661 + (1));
seq__38651_38658 = G__38663;
chunk__38652_38659 = G__38664;
count__38653_38660 = G__38665;
i__38654_38661 = G__38666;
continue;
} else {
var temp__5278__auto___38667 = cljs.core.seq.call(null,seq__38651_38658);
if(temp__5278__auto___38667){
var seq__38651_38668__$1 = temp__5278__auto___38667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38651_38668__$1)){
var c__29481__auto___38669 = cljs.core.chunk_first.call(null,seq__38651_38668__$1);
var G__38670 = cljs.core.chunk_rest.call(null,seq__38651_38668__$1);
var G__38671 = c__29481__auto___38669;
var G__38672 = cljs.core.count.call(null,c__29481__auto___38669);
var G__38673 = (0);
seq__38651_38658 = G__38670;
chunk__38652_38659 = G__38671;
count__38653_38660 = G__38672;
i__38654_38661 = G__38673;
continue;
} else {
var item_38674 = cljs.core.first.call(null,seq__38651_38668__$1);
if(!((item_38674 == null))){
if(cljs.core.coll_QMARK_.call(null,item_38674)){
(group["push"]).apply(group,devtools.formatters.templating.mark_as_group_BANG_.call(null,cljs.core.into_array.call(null,item_38674)));
} else {
group.push(devtools.formatters.helpers.pref.call(null,item_38674));
}
} else {
}

var G__38675 = cljs.core.next.call(null,seq__38651_38668__$1);
var G__38676 = null;
var G__38677 = (0);
var G__38678 = (0);
seq__38651_38658 = G__38675;
chunk__38652_38659 = G__38676;
count__38653_38660 = G__38677;
i__38654_38661 = G__38678;
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

devtools.formatters.templating.make_group.cljs$lang$applyTo = (function (seq38650){
return devtools.formatters.templating.make_group.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38650));
});

devtools.formatters.templating.make_template = (function devtools$formatters$templating$make_template(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38686 = arguments.length;
var i__29803__auto___38687 = (0);
while(true){
if((i__29803__auto___38687 < len__29802__auto___38686)){
args__29809__auto__.push((arguments[i__29803__auto___38687]));

var G__38688 = (i__29803__auto___38687 + (1));
i__29803__auto___38687 = G__38688;
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
var seq__38682_38689 = cljs.core.seq.call(null,children);
var chunk__38683_38690 = null;
var count__38684_38691 = (0);
var i__38685_38692 = (0);
while(true){
if((i__38685_38692 < count__38684_38691)){
var child_38693 = cljs.core._nth.call(null,chunk__38683_38690,i__38685_38692);
if(!((child_38693 == null))){
if(cljs.core.coll_QMARK_.call(null,child_38693)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38693))));
} else {
var temp__5276__auto___38694 = devtools.formatters.helpers.pref.call(null,child_38693);
if(cljs.core.truth_(temp__5276__auto___38694)){
var child_value_38695 = temp__5276__auto___38694;
template.push(child_value_38695);
} else {
}
}
} else {
}

var G__38696 = seq__38682_38689;
var G__38697 = chunk__38683_38690;
var G__38698 = count__38684_38691;
var G__38699 = (i__38685_38692 + (1));
seq__38682_38689 = G__38696;
chunk__38683_38690 = G__38697;
count__38684_38691 = G__38698;
i__38685_38692 = G__38699;
continue;
} else {
var temp__5278__auto___38700 = cljs.core.seq.call(null,seq__38682_38689);
if(temp__5278__auto___38700){
var seq__38682_38701__$1 = temp__5278__auto___38700;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38682_38701__$1)){
var c__29481__auto___38702 = cljs.core.chunk_first.call(null,seq__38682_38701__$1);
var G__38703 = cljs.core.chunk_rest.call(null,seq__38682_38701__$1);
var G__38704 = c__29481__auto___38702;
var G__38705 = cljs.core.count.call(null,c__29481__auto___38702);
var G__38706 = (0);
seq__38682_38689 = G__38703;
chunk__38683_38690 = G__38704;
count__38684_38691 = G__38705;
i__38685_38692 = G__38706;
continue;
} else {
var child_38707 = cljs.core.first.call(null,seq__38682_38701__$1);
if(!((child_38707 == null))){
if(cljs.core.coll_QMARK_.call(null,child_38707)){
(template["push"]).apply(template,devtools.formatters.templating.mark_as_template_BANG_.call(null,cljs.core.into_array.call(null,cljs.core.keep.call(null,devtools.formatters.helpers.pref,child_38707))));
} else {
var temp__5276__auto___38708 = devtools.formatters.helpers.pref.call(null,child_38707);
if(cljs.core.truth_(temp__5276__auto___38708)){
var child_value_38709 = temp__5276__auto___38708;
template.push(child_value_38709);
} else {
}
}
} else {
}

var G__38710 = cljs.core.next.call(null,seq__38682_38701__$1);
var G__38711 = null;
var G__38712 = (0);
var G__38713 = (0);
seq__38682_38689 = G__38710;
chunk__38683_38690 = G__38711;
count__38684_38691 = G__38712;
i__38685_38692 = G__38713;
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

devtools.formatters.templating.make_template.cljs$lang$applyTo = (function (seq38679){
var G__38680 = cljs.core.first.call(null,seq38679);
var seq38679__$1 = cljs.core.next.call(null,seq38679);
var G__38681 = cljs.core.first.call(null,seq38679__$1);
var seq38679__$2 = cljs.core.next.call(null,seq38679__$1);
return devtools.formatters.templating.make_template.cljs$core$IFn$_invoke$arity$variadic(G__38680,G__38681,seq38679__$2);
});

devtools.formatters.templating.concat_templates_BANG_ = (function devtools$formatters$templating$concat_templates_BANG_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38716 = arguments.length;
var i__29803__auto___38717 = (0);
while(true){
if((i__29803__auto___38717 < len__29802__auto___38716)){
args__29809__auto__.push((arguments[i__29803__auto___38717]));

var G__38718 = (i__29803__auto___38717 + (1));
i__29803__auto___38717 = G__38718;
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

devtools.formatters.templating.concat_templates_BANG_.cljs$lang$applyTo = (function (seq38714){
var G__38715 = cljs.core.first.call(null,seq38714);
var seq38714__$1 = cljs.core.next.call(null,seq38714);
return devtools.formatters.templating.concat_templates_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38715,seq38714__$1);
});

devtools.formatters.templating.extend_template_BANG_ = (function devtools$formatters$templating$extend_template_BANG_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___38721 = arguments.length;
var i__29803__auto___38722 = (0);
while(true){
if((i__29803__auto___38722 < len__29802__auto___38721)){
args__29809__auto__.push((arguments[i__29803__auto___38722]));

var G__38723 = (i__29803__auto___38722 + (1));
i__29803__auto___38722 = G__38723;
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

devtools.formatters.templating.extend_template_BANG_.cljs$lang$applyTo = (function (seq38719){
var G__38720 = cljs.core.first.call(null,seq38719);
var seq38719__$1 = cljs.core.next.call(null,seq38719);
return devtools.formatters.templating.extend_template_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__38720,seq38719__$1);
});

devtools.formatters.templating.make_surrogate = (function devtools$formatters$templating$make_surrogate(var_args){
var G__38725 = arguments.length;
switch (G__38725) {
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
return devtools.formatters.templating.mark_as_surrogate_BANG_.call(null,(function (){var obj38727 = {"target":object,"header":header,"body":body,"startIndex":(function (){var or__28569__auto__ = start_index;
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return (0);
}
})()};
return obj38727;
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
var len__29802__auto___38735 = arguments.length;
var i__29803__auto___38736 = (0);
while(true){
if((i__29803__auto___38736 < len__29802__auto___38735)){
args__29809__auto__.push((arguments[i__29803__auto___38736]));

var G__38737 = (i__29803__auto___38736 + (1));
i__29803__auto___38736 = G__38737;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((1) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((1)),(0),null)):null);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__29810__auto__);
});

devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__38731){
var vec__38732 = p__38731;
var state_override_fn = cljs.core.nth.call(null,vec__38732,(0),null);
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

devtools.formatters.templating.make_reference.cljs$lang$applyTo = (function (seq38729){
var G__38730 = cljs.core.first.call(null,seq38729);
var seq38729__$1 = cljs.core.next.call(null,seq38729);
return devtools.formatters.templating.make_reference.cljs$core$IFn$_invoke$arity$variadic(G__38730,seq38729__$1);
});

devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.PersistentVector.EMPTY;
devtools.formatters.templating.pprint_str = (function devtools$formatters$templating$pprint_str(markup){
var sb__29673__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR_38738_38741 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR_38739_38742 = cljs.core._STAR_print_fn_STAR_;
cljs.core._STAR_print_newline_STAR_ = true;

cljs.core._STAR_print_fn_STAR_ = ((function (_STAR_print_newline_STAR_38738_38741,_STAR_print_fn_STAR_38739_38742,sb__29673__auto__){
return (function (x__29674__auto__){
return sb__29673__auto__.append(x__29674__auto__);
});})(_STAR_print_newline_STAR_38738_38741,_STAR_print_fn_STAR_38739_38742,sb__29673__auto__))
;

try{var _STAR_print_level_STAR_38740_38743 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (300);

try{cljs.pprint.pprint.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38740_38743;
}}finally {cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR_38739_38742;

cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR_38738_38741;
}
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__29673__auto__)].join('');
});
devtools.formatters.templating.print_preview = (function devtools$formatters$templating$print_preview(markup){
var _STAR_print_level_STAR_38744 = cljs.core._STAR_print_level_STAR_;
cljs.core._STAR_print_level_STAR_ = (1);

try{return cljs.core.pr_str.call(null,markup);
}finally {cljs.core._STAR_print_level_STAR_ = _STAR_print_level_STAR_38744;
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
var G__38745 = name;
switch (G__38745) {
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
var vec__38747 = tag;
var html_tag = cljs.core.nth.call(null,vec__38747,(0),null);
var style = cljs.core.nth.call(null,vec__38747,(1),null);
return cljs.core.apply.call(null,devtools.formatters.templating.make_template,html_tag,style,cljs.core.map.call(null,devtools.formatters.templating.render_json_ml_STAR_,cljs.core.remove.call(null,devtools.formatters.templating.emptyish_QMARK_,cljs.core.map.call(null,devtools.formatters.helpers.pref,children))));
});
devtools.formatters.templating.render_json_ml_STAR_ = (function devtools$formatters$templating$render_json_ml_STAR_(markup){
if(!(cljs.core.sequential_QMARK_.call(null,markup))){
return markup;
} else {
var _STAR_current_render_path_STAR_38750 = devtools.formatters.templating._STAR_current_render_path_STAR_;
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
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38750;
}}
});
devtools.formatters.templating.render_json_ml = (function devtools$formatters$templating$render_json_ml(markup){
var _STAR_current_render_stack_STAR_38751 = devtools.formatters.templating._STAR_current_render_stack_STAR_;
var _STAR_current_render_path_STAR_38752 = devtools.formatters.templating._STAR_current_render_path_STAR_;
devtools.formatters.templating._STAR_current_render_stack_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_stack_STAR_,markup);

devtools.formatters.templating._STAR_current_render_path_STAR_ = cljs.core.conj.call(null,devtools.formatters.templating._STAR_current_render_path_STAR_,"<render-json-ml>");

try{return devtools.formatters.templating.render_json_ml_STAR_.call(null,markup);
}finally {devtools.formatters.templating._STAR_current_render_path_STAR_ = _STAR_current_render_path_STAR_38752;

devtools.formatters.templating._STAR_current_render_stack_STAR_ = _STAR_current_render_stack_STAR_38751;
}});
devtools.formatters.templating.assert_failed_markup_rendering = (function devtools$formatters$templating$assert_failed_markup_rendering(initial_value,value){
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Assert failed: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("result of markup rendering must be a template,\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("resolved to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,value)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("initial value: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.formatters.templating.pprint_str.call(null,initial_value))].join('')),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\n"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("false")].join('')));

});
devtools.formatters.templating.render_markup_STAR_ = (function devtools$formatters$templating$render_markup_STAR_(initial_value,value){
while(true){
if(cljs.core.fn_QMARK_.call(null,value)){
var G__38753 = initial_value;
var G__38754 = value.call(null);
initial_value = G__38753;
value = G__38754;
continue;
} else {
if((value instanceof cljs.core.Keyword)){
var G__38755 = initial_value;
var G__38756 = devtools.formatters.helpers.pref.call(null,value);
initial_value = G__38755;
value = G__38756;
continue;
} else {
if(cljs.core.sequential_QMARK_.call(null,value)){
var G__38757 = initial_value;
var G__38758 = devtools.formatters.templating.render_json_ml.call(null,value);
initial_value = G__38757;
value = G__38758;
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

//# sourceMappingURL=templating.js.map?rel=1500449677554