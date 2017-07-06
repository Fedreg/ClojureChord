// Compiled by ClojureScript 1.9.229 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('cljs.core.async');
goog.require('goog.object');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('figwheel.client.utils');
goog.require('cljs.repl');
goog.require('figwheel.client.heads_up');
goog.require('cljs.reader');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var args32839 = [];
var len__27054__auto___32842 = arguments.length;
var i__27055__auto___32843 = (0);
while(true){
if((i__27055__auto___32843 < len__27054__auto___32842)){
args32839.push((arguments[i__27055__auto___32843]));

var G__32844 = (i__27055__auto___32843 + (1));
i__27055__auto___32843 = G__32844;
continue;
} else {
}
break;
}

var G__32841 = args32839.length;
switch (G__32841) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args32839.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),args], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___32847 = arguments.length;
var i__27055__auto___32848 = (0);
while(true){
if((i__27055__auto___32848 < len__27054__auto___32847)){
args__27061__auto__.push((arguments[i__27055__auto___32848]));

var G__32849 = (i__27055__auto___32848 + (1));
i__27055__auto___32848 = G__32849;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq32846){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32846));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___32851 = arguments.length;
var i__27055__auto___32852 = (0);
while(true){
if((i__27055__auto___32852 < len__27054__auto___32851)){
args__27061__auto__.push((arguments[i__27055__auto___32852]));

var G__32853 = (i__27055__auto___32852 + (1));
i__27055__auto___32852 = G__32853;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq32850){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32850));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Figwheel autoloading "),cljs.core.str((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method. 
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 *   
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel$client$get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__32854){
var map__32857 = p__32854;
var map__32857__$1 = ((((!((map__32857 == null)))?((((map__32857.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32857.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32857):map__32857);
var message = cljs.core.get.call(null,map__32857__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__32857__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str(class$),cljs.core.str(" : "),cljs.core.str(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__25979__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__25967__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__25967__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__25967__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__30220__auto___33019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30220__auto___33019,ch){
return (function (){
var f__30221__auto__ = (function (){var switch__30199__auto__ = ((function (c__30220__auto___33019,ch){
return (function (state_32988){
var state_val_32989 = (state_32988[(1)]);
if((state_val_32989 === (7))){
var inst_32984 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32990_33020 = state_32988__$1;
(statearr_32990_33020[(2)] = inst_32984);

(statearr_32990_33020[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (1))){
var state_32988__$1 = state_32988;
var statearr_32991_33021 = state_32988__$1;
(statearr_32991_33021[(2)] = null);

(statearr_32991_33021[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (4))){
var inst_32941 = (state_32988[(7)]);
var inst_32941__$1 = (state_32988[(2)]);
var state_32988__$1 = (function (){var statearr_32992 = state_32988;
(statearr_32992[(7)] = inst_32941__$1);

return statearr_32992;
})();
if(cljs.core.truth_(inst_32941__$1)){
var statearr_32993_33022 = state_32988__$1;
(statearr_32993_33022[(1)] = (5));

} else {
var statearr_32994_33023 = state_32988__$1;
(statearr_32994_33023[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (15))){
var inst_32948 = (state_32988[(8)]);
var inst_32963 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32948);
var inst_32964 = cljs.core.first.call(null,inst_32963);
var inst_32965 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_32964);
var inst_32966 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_32965)].join('');
var inst_32967 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_32966);
var state_32988__$1 = state_32988;
var statearr_32995_33024 = state_32988__$1;
(statearr_32995_33024[(2)] = inst_32967);

(statearr_32995_33024[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (13))){
var inst_32972 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32996_33025 = state_32988__$1;
(statearr_32996_33025[(2)] = inst_32972);

(statearr_32996_33025[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (6))){
var state_32988__$1 = state_32988;
var statearr_32997_33026 = state_32988__$1;
(statearr_32997_33026[(2)] = null);

(statearr_32997_33026[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (17))){
var inst_32970 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_32998_33027 = state_32988__$1;
(statearr_32998_33027[(2)] = inst_32970);

(statearr_32998_33027[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (3))){
var inst_32986 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32988__$1,inst_32986);
} else {
if((state_val_32989 === (12))){
var inst_32947 = (state_32988[(9)]);
var inst_32961 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_32947,opts);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32961)){
var statearr_32999_33028 = state_32988__$1;
(statearr_32999_33028[(1)] = (15));

} else {
var statearr_33000_33029 = state_32988__$1;
(statearr_33000_33029[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (2))){
var state_32988__$1 = state_32988;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32988__$1,(4),ch);
} else {
if((state_val_32989 === (11))){
var inst_32948 = (state_32988[(8)]);
var inst_32953 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_32954 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_32948);
var inst_32955 = cljs.core.async.timeout.call(null,(1000));
var inst_32956 = [inst_32954,inst_32955];
var inst_32957 = (new cljs.core.PersistentVector(null,2,(5),inst_32953,inst_32956,null));
var state_32988__$1 = state_32988;
return cljs.core.async.ioc_alts_BANG_.call(null,state_32988__$1,(14),inst_32957);
} else {
if((state_val_32989 === (9))){
var inst_32948 = (state_32988[(8)]);
var inst_32974 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_32975 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_32948);
var inst_32976 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_32975);
var inst_32977 = [cljs.core.str("Not loading: "),cljs.core.str(inst_32976)].join('');
var inst_32978 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_32977);
var state_32988__$1 = (function (){var statearr_33001 = state_32988;
(statearr_33001[(10)] = inst_32974);

return statearr_33001;
})();
var statearr_33002_33030 = state_32988__$1;
(statearr_33002_33030[(2)] = inst_32978);

(statearr_33002_33030[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (5))){
var inst_32941 = (state_32988[(7)]);
var inst_32943 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_32944 = (new cljs.core.PersistentArrayMap(null,2,inst_32943,null));
var inst_32945 = (new cljs.core.PersistentHashSet(null,inst_32944,null));
var inst_32946 = figwheel.client.focus_msgs.call(null,inst_32945,inst_32941);
var inst_32947 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_32946);
var inst_32948 = cljs.core.first.call(null,inst_32946);
var inst_32949 = figwheel.client.autoload_QMARK_.call(null);
var state_32988__$1 = (function (){var statearr_33003 = state_32988;
(statearr_33003[(9)] = inst_32947);

(statearr_33003[(8)] = inst_32948);

return statearr_33003;
})();
if(cljs.core.truth_(inst_32949)){
var statearr_33004_33031 = state_32988__$1;
(statearr_33004_33031[(1)] = (8));

} else {
var statearr_33005_33032 = state_32988__$1;
(statearr_33005_33032[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (14))){
var inst_32959 = (state_32988[(2)]);
var state_32988__$1 = state_32988;
var statearr_33006_33033 = state_32988__$1;
(statearr_33006_33033[(2)] = inst_32959);

(statearr_33006_33033[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (16))){
var state_32988__$1 = state_32988;
var statearr_33007_33034 = state_32988__$1;
(statearr_33007_33034[(2)] = null);

(statearr_33007_33034[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (10))){
var inst_32980 = (state_32988[(2)]);
var state_32988__$1 = (function (){var statearr_33008 = state_32988;
(statearr_33008[(11)] = inst_32980);

return statearr_33008;
})();
var statearr_33009_33035 = state_32988__$1;
(statearr_33009_33035[(2)] = null);

(statearr_33009_33035[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32989 === (8))){
var inst_32947 = (state_32988[(9)]);
var inst_32951 = figwheel.client.reload_file_state_QMARK_.call(null,inst_32947,opts);
var state_32988__$1 = state_32988;
if(cljs.core.truth_(inst_32951)){
var statearr_33010_33036 = state_32988__$1;
(statearr_33010_33036[(1)] = (11));

} else {
var statearr_33011_33037 = state_32988__$1;
(statearr_33011_33037[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30220__auto___33019,ch))
;
return ((function (switch__30199__auto__,c__30220__auto___33019,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__30200__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__30200__auto____0 = (function (){
var statearr_33015 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33015[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__30200__auto__);

(statearr_33015[(1)] = (1));

return statearr_33015;
});
var figwheel$client$file_reloader_plugin_$_state_machine__30200__auto____1 = (function (state_32988){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__.call(null,state_32988);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e33016){if((e33016 instanceof Object)){
var ex__30203__auto__ = e33016;
var statearr_33017_33038 = state_32988;
(statearr_33017_33038[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32988);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33039 = state_32988;
state_32988 = G__33039;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__30200__auto__ = function(state_32988){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__30200__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__30200__auto____1.call(this,state_32988);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__30200__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__30200__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__30200__auto__;
})()
;})(switch__30199__auto__,c__30220__auto___33019,ch))
})();
var state__30222__auto__ = (function (){var statearr_33018 = f__30221__auto__.call(null);
(statearr_33018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30220__auto___33019);

return statearr_33018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30222__auto__);
});})(c__30220__auto___33019,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__33040_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__33040_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_33043 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_33043){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e33042){if((e33042 instanceof Error)){
var e = e33042;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_33043], null));
} else {
var e = e33042;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_33043))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__33044){
var map__33053 = p__33044;
var map__33053__$1 = ((((!((map__33053 == null)))?((((map__33053.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33053.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33053):map__33053);
var opts = map__33053__$1;
var build_id = cljs.core.get.call(null,map__33053__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__33053,map__33053__$1,opts,build_id){
return (function (p__33055){
var vec__33056 = p__33055;
var seq__33057 = cljs.core.seq.call(null,vec__33056);
var first__33058 = cljs.core.first.call(null,seq__33057);
var seq__33057__$1 = cljs.core.next.call(null,seq__33057);
var map__33059 = first__33058;
var map__33059__$1 = ((((!((map__33059 == null)))?((((map__33059.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33059.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33059):map__33059);
var msg = map__33059__$1;
var msg_name = cljs.core.get.call(null,map__33059__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33057__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__33056,seq__33057,first__33058,seq__33057__$1,map__33059,map__33059__$1,msg,msg_name,_,map__33053,map__33053__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__33056,seq__33057,first__33058,seq__33057__$1,map__33059,map__33059__$1,msg,msg_name,_,map__33053,map__33053__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__33053,map__33053__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__33067){
var vec__33068 = p__33067;
var seq__33069 = cljs.core.seq.call(null,vec__33068);
var first__33070 = cljs.core.first.call(null,seq__33069);
var seq__33069__$1 = cljs.core.next.call(null,seq__33069);
var map__33071 = first__33070;
var map__33071__$1 = ((((!((map__33071 == null)))?((((map__33071.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33071.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33071):map__33071);
var msg = map__33071__$1;
var msg_name = cljs.core.get.call(null,map__33071__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33069__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__33073){
var map__33085 = p__33073;
var map__33085__$1 = ((((!((map__33085 == null)))?((((map__33085.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33085.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33085):map__33085);
var on_compile_warning = cljs.core.get.call(null,map__33085__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__33085__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__33085,map__33085__$1,on_compile_warning,on_compile_fail){
return (function (p__33087){
var vec__33088 = p__33087;
var seq__33089 = cljs.core.seq.call(null,vec__33088);
var first__33090 = cljs.core.first.call(null,seq__33089);
var seq__33089__$1 = cljs.core.next.call(null,seq__33089);
var map__33091 = first__33090;
var map__33091__$1 = ((((!((map__33091 == null)))?((((map__33091.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33091.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33091):map__33091);
var msg = map__33091__$1;
var msg_name = cljs.core.get.call(null,map__33091__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__33089__$1;
var pred__33093 = cljs.core._EQ_;
var expr__33094 = msg_name;
if(cljs.core.truth_(pred__33093.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__33094))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__33093.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__33094))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__33085,map__33085__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__30220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30220__auto__,msg_hist,msg_names,msg){
return (function (){
var f__30221__auto__ = (function (){var switch__30199__auto__ = ((function (c__30220__auto__,msg_hist,msg_names,msg){
return (function (state_33322){
var state_val_33323 = (state_33322[(1)]);
if((state_val_33323 === (7))){
var inst_33242 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33242)){
var statearr_33324_33374 = state_33322__$1;
(statearr_33324_33374[(1)] = (8));

} else {
var statearr_33325_33375 = state_33322__$1;
(statearr_33325_33375[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (20))){
var inst_33316 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33326_33376 = state_33322__$1;
(statearr_33326_33376[(2)] = inst_33316);

(statearr_33326_33376[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (27))){
var inst_33312 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33327_33377 = state_33322__$1;
(statearr_33327_33377[(2)] = inst_33312);

(statearr_33327_33377[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (1))){
var inst_33235 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33235)){
var statearr_33328_33378 = state_33322__$1;
(statearr_33328_33378[(1)] = (2));

} else {
var statearr_33329_33379 = state_33322__$1;
(statearr_33329_33379[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (24))){
var inst_33314 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33330_33380 = state_33322__$1;
(statearr_33330_33380[(2)] = inst_33314);

(statearr_33330_33380[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (4))){
var inst_33320 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33322__$1,inst_33320);
} else {
if((state_val_33323 === (15))){
var inst_33318 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33331_33381 = state_33322__$1;
(statearr_33331_33381[(2)] = inst_33318);

(statearr_33331_33381[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (21))){
var inst_33271 = (state_33322[(2)]);
var inst_33272 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33273 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33272);
var state_33322__$1 = (function (){var statearr_33332 = state_33322;
(statearr_33332[(7)] = inst_33271);

return statearr_33332;
})();
var statearr_33333_33382 = state_33322__$1;
(statearr_33333_33382[(2)] = inst_33273);

(statearr_33333_33382[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (31))){
var inst_33301 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33301)){
var statearr_33334_33383 = state_33322__$1;
(statearr_33334_33383[(1)] = (34));

} else {
var statearr_33335_33384 = state_33322__$1;
(statearr_33335_33384[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (32))){
var inst_33310 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33336_33385 = state_33322__$1;
(statearr_33336_33385[(2)] = inst_33310);

(statearr_33336_33385[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (33))){
var inst_33297 = (state_33322[(2)]);
var inst_33298 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33299 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33298);
var state_33322__$1 = (function (){var statearr_33337 = state_33322;
(statearr_33337[(8)] = inst_33297);

return statearr_33337;
})();
var statearr_33338_33386 = state_33322__$1;
(statearr_33338_33386[(2)] = inst_33299);

(statearr_33338_33386[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (13))){
var inst_33256 = figwheel.client.heads_up.clear.call(null);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(16),inst_33256);
} else {
if((state_val_33323 === (22))){
var inst_33277 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33278 = figwheel.client.heads_up.append_warning_message.call(null,inst_33277);
var state_33322__$1 = state_33322;
var statearr_33339_33387 = state_33322__$1;
(statearr_33339_33387[(2)] = inst_33278);

(statearr_33339_33387[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (36))){
var inst_33308 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33340_33388 = state_33322__$1;
(statearr_33340_33388[(2)] = inst_33308);

(statearr_33340_33388[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (29))){
var inst_33288 = (state_33322[(2)]);
var inst_33289 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33290 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33289);
var state_33322__$1 = (function (){var statearr_33341 = state_33322;
(statearr_33341[(9)] = inst_33288);

return statearr_33341;
})();
var statearr_33342_33389 = state_33322__$1;
(statearr_33342_33389[(2)] = inst_33290);

(statearr_33342_33389[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (6))){
var inst_33237 = (state_33322[(10)]);
var state_33322__$1 = state_33322;
var statearr_33343_33390 = state_33322__$1;
(statearr_33343_33390[(2)] = inst_33237);

(statearr_33343_33390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (28))){
var inst_33284 = (state_33322[(2)]);
var inst_33285 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33286 = figwheel.client.heads_up.display_warning.call(null,inst_33285);
var state_33322__$1 = (function (){var statearr_33344 = state_33322;
(statearr_33344[(11)] = inst_33284);

return statearr_33344;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(29),inst_33286);
} else {
if((state_val_33323 === (25))){
var inst_33282 = figwheel.client.heads_up.clear.call(null);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(28),inst_33282);
} else {
if((state_val_33323 === (34))){
var inst_33303 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(37),inst_33303);
} else {
if((state_val_33323 === (17))){
var inst_33262 = (state_33322[(2)]);
var inst_33263 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33264 = figwheel.client.auto_jump_to_error.call(null,opts,inst_33263);
var state_33322__$1 = (function (){var statearr_33345 = state_33322;
(statearr_33345[(12)] = inst_33262);

return statearr_33345;
})();
var statearr_33346_33391 = state_33322__$1;
(statearr_33346_33391[(2)] = inst_33264);

(statearr_33346_33391[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (3))){
var inst_33254 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33254)){
var statearr_33347_33392 = state_33322__$1;
(statearr_33347_33392[(1)] = (13));

} else {
var statearr_33348_33393 = state_33322__$1;
(statearr_33348_33393[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (12))){
var inst_33250 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33349_33394 = state_33322__$1;
(statearr_33349_33394[(2)] = inst_33250);

(statearr_33349_33394[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (2))){
var inst_33237 = (state_33322[(10)]);
var inst_33237__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_33322__$1 = (function (){var statearr_33350 = state_33322;
(statearr_33350[(10)] = inst_33237__$1);

return statearr_33350;
})();
if(cljs.core.truth_(inst_33237__$1)){
var statearr_33351_33395 = state_33322__$1;
(statearr_33351_33395[(1)] = (5));

} else {
var statearr_33352_33396 = state_33322__$1;
(statearr_33352_33396[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (23))){
var inst_33280 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33280)){
var statearr_33353_33397 = state_33322__$1;
(statearr_33353_33397[(1)] = (25));

} else {
var statearr_33354_33398 = state_33322__$1;
(statearr_33354_33398[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (35))){
var state_33322__$1 = state_33322;
var statearr_33355_33399 = state_33322__$1;
(statearr_33355_33399[(2)] = null);

(statearr_33355_33399[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (19))){
var inst_33275 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33275)){
var statearr_33356_33400 = state_33322__$1;
(statearr_33356_33400[(1)] = (22));

} else {
var statearr_33357_33401 = state_33322__$1;
(statearr_33357_33401[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (11))){
var inst_33246 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33358_33402 = state_33322__$1;
(statearr_33358_33402[(2)] = inst_33246);

(statearr_33358_33402[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (9))){
var inst_33248 = figwheel.client.heads_up.clear.call(null);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(12),inst_33248);
} else {
if((state_val_33323 === (5))){
var inst_33239 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_33322__$1 = state_33322;
var statearr_33359_33403 = state_33322__$1;
(statearr_33359_33403[(2)] = inst_33239);

(statearr_33359_33403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (14))){
var inst_33266 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33266)){
var statearr_33360_33404 = state_33322__$1;
(statearr_33360_33404[(1)] = (18));

} else {
var statearr_33361_33405 = state_33322__$1;
(statearr_33361_33405[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (26))){
var inst_33292 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_33322__$1 = state_33322;
if(cljs.core.truth_(inst_33292)){
var statearr_33362_33406 = state_33322__$1;
(statearr_33362_33406[(1)] = (30));

} else {
var statearr_33363_33407 = state_33322__$1;
(statearr_33363_33407[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (16))){
var inst_33258 = (state_33322[(2)]);
var inst_33259 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33260 = figwheel.client.heads_up.display_exception.call(null,inst_33259);
var state_33322__$1 = (function (){var statearr_33364 = state_33322;
(statearr_33364[(13)] = inst_33258);

return statearr_33364;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(17),inst_33260);
} else {
if((state_val_33323 === (30))){
var inst_33294 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33295 = figwheel.client.heads_up.display_warning.call(null,inst_33294);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(33),inst_33295);
} else {
if((state_val_33323 === (10))){
var inst_33252 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33365_33408 = state_33322__$1;
(statearr_33365_33408[(2)] = inst_33252);

(statearr_33365_33408[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (18))){
var inst_33268 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_33269 = figwheel.client.heads_up.display_exception.call(null,inst_33268);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(21),inst_33269);
} else {
if((state_val_33323 === (37))){
var inst_33305 = (state_33322[(2)]);
var state_33322__$1 = state_33322;
var statearr_33366_33409 = state_33322__$1;
(statearr_33366_33409[(2)] = inst_33305);

(statearr_33366_33409[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33323 === (8))){
var inst_33244 = figwheel.client.heads_up.flash_loaded.call(null);
var state_33322__$1 = state_33322;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33322__$1,(11),inst_33244);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__30220__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__30199__auto__,c__30220__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto____0 = (function (){
var statearr_33370 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33370[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto__);

(statearr_33370[(1)] = (1));

return statearr_33370;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto____1 = (function (state_33322){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__.call(null,state_33322);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e33371){if((e33371 instanceof Object)){
var ex__30203__auto__ = e33371;
var statearr_33372_33410 = state_33322;
(statearr_33372_33410[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33322);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33371;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33411 = state_33322;
state_33322 = G__33411;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto__ = function(state_33322){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto____1.call(this,state_33322);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__30200__auto__;
})()
;})(switch__30199__auto__,c__30220__auto__,msg_hist,msg_names,msg))
})();
var state__30222__auto__ = (function (){var statearr_33373 = f__30221__auto__.call(null);
(statearr_33373[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30220__auto__);

return statearr_33373;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30222__auto__);
});})(c__30220__auto__,msg_hist,msg_names,msg))
);

return c__30220__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__30220__auto___33474 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30220__auto___33474,ch){
return (function (){
var f__30221__auto__ = (function (){var switch__30199__auto__ = ((function (c__30220__auto___33474,ch){
return (function (state_33457){
var state_val_33458 = (state_33457[(1)]);
if((state_val_33458 === (1))){
var state_33457__$1 = state_33457;
var statearr_33459_33475 = state_33457__$1;
(statearr_33459_33475[(2)] = null);

(statearr_33459_33475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (2))){
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33457__$1,(4),ch);
} else {
if((state_val_33458 === (3))){
var inst_33455 = (state_33457[(2)]);
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33457__$1,inst_33455);
} else {
if((state_val_33458 === (4))){
var inst_33445 = (state_33457[(7)]);
var inst_33445__$1 = (state_33457[(2)]);
var state_33457__$1 = (function (){var statearr_33460 = state_33457;
(statearr_33460[(7)] = inst_33445__$1);

return statearr_33460;
})();
if(cljs.core.truth_(inst_33445__$1)){
var statearr_33461_33476 = state_33457__$1;
(statearr_33461_33476[(1)] = (5));

} else {
var statearr_33462_33477 = state_33457__$1;
(statearr_33462_33477[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (5))){
var inst_33445 = (state_33457[(7)]);
var inst_33447 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_33445);
var state_33457__$1 = state_33457;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33457__$1,(8),inst_33447);
} else {
if((state_val_33458 === (6))){
var state_33457__$1 = state_33457;
var statearr_33463_33478 = state_33457__$1;
(statearr_33463_33478[(2)] = null);

(statearr_33463_33478[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (7))){
var inst_33453 = (state_33457[(2)]);
var state_33457__$1 = state_33457;
var statearr_33464_33479 = state_33457__$1;
(statearr_33464_33479[(2)] = inst_33453);

(statearr_33464_33479[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33458 === (8))){
var inst_33449 = (state_33457[(2)]);
var state_33457__$1 = (function (){var statearr_33465 = state_33457;
(statearr_33465[(8)] = inst_33449);

return statearr_33465;
})();
var statearr_33466_33480 = state_33457__$1;
(statearr_33466_33480[(2)] = null);

(statearr_33466_33480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
});})(c__30220__auto___33474,ch))
;
return ((function (switch__30199__auto__,c__30220__auto___33474,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__30200__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__30200__auto____0 = (function (){
var statearr_33470 = [null,null,null,null,null,null,null,null,null];
(statearr_33470[(0)] = figwheel$client$heads_up_plugin_$_state_machine__30200__auto__);

(statearr_33470[(1)] = (1));

return statearr_33470;
});
var figwheel$client$heads_up_plugin_$_state_machine__30200__auto____1 = (function (state_33457){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__.call(null,state_33457);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e33471){if((e33471 instanceof Object)){
var ex__30203__auto__ = e33471;
var statearr_33472_33481 = state_33457;
(statearr_33472_33481[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33457);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33471;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33482 = state_33457;
state_33457 = G__33482;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__30200__auto__ = function(state_33457){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__30200__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__30200__auto____1.call(this,state_33457);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__30200__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__30200__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__30200__auto__;
})()
;})(switch__30199__auto__,c__30220__auto___33474,ch))
})();
var state__30222__auto__ = (function (){var statearr_33473 = f__30221__auto__.call(null);
(statearr_33473[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30220__auto___33474);

return statearr_33473;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30222__auto__);
});})(c__30220__auto___33474,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30220__auto__){
return (function (){
var f__30221__auto__ = (function (){var switch__30199__auto__ = ((function (c__30220__auto__){
return (function (state_33503){
var state_val_33504 = (state_33503[(1)]);
if((state_val_33504 === (1))){
var inst_33498 = cljs.core.async.timeout.call(null,(3000));
var state_33503__$1 = state_33503;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33503__$1,(2),inst_33498);
} else {
if((state_val_33504 === (2))){
var inst_33500 = (state_33503[(2)]);
var inst_33501 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_33503__$1 = (function (){var statearr_33505 = state_33503;
(statearr_33505[(7)] = inst_33500);

return statearr_33505;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33503__$1,inst_33501);
} else {
return null;
}
}
});})(c__30220__auto__))
;
return ((function (switch__30199__auto__,c__30220__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__30200__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__30200__auto____0 = (function (){
var statearr_33509 = [null,null,null,null,null,null,null,null];
(statearr_33509[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__30200__auto__);

(statearr_33509[(1)] = (1));

return statearr_33509;
});
var figwheel$client$enforce_project_plugin_$_state_machine__30200__auto____1 = (function (state_33503){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__.call(null,state_33503);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e33510){if((e33510 instanceof Object)){
var ex__30203__auto__ = e33510;
var statearr_33511_33513 = state_33503;
(statearr_33511_33513[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33503);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33510;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33514 = state_33503;
state_33503 = G__33514;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__30200__auto__ = function(state_33503){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__30200__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__30200__auto____1.call(this,state_33503);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__30200__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__30200__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__30200__auto__;
})()
;})(switch__30199__auto__,c__30220__auto__))
})();
var state__30222__auto__ = (function (){var statearr_33512 = f__30221__auto__.call(null);
(statearr_33512[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30220__auto__);

return statearr_33512;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30222__auto__);
});})(c__30220__auto__))
);

return c__30220__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__4657__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__4657__auto__)){
var figwheel_version = temp__4657__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__30220__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__30220__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__30221__auto__ = (function (){var switch__30199__auto__ = ((function (c__30220__auto__,figwheel_version,temp__4657__auto__){
return (function (state_33537){
var state_val_33538 = (state_33537[(1)]);
if((state_val_33538 === (1))){
var inst_33531 = cljs.core.async.timeout.call(null,(2000));
var state_33537__$1 = state_33537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33537__$1,(2),inst_33531);
} else {
if((state_val_33538 === (2))){
var inst_33533 = (state_33537[(2)]);
var inst_33534 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_33535 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_33534);
var state_33537__$1 = (function (){var statearr_33539 = state_33537;
(statearr_33539[(7)] = inst_33533);

return statearr_33539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33537__$1,inst_33535);
} else {
return null;
}
}
});})(c__30220__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__30199__auto__,c__30220__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto____0 = (function (){
var statearr_33543 = [null,null,null,null,null,null,null,null];
(statearr_33543[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto__);

(statearr_33543[(1)] = (1));

return statearr_33543;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto____1 = (function (state_33537){
while(true){
var ret_value__30201__auto__ = (function (){try{while(true){
var result__30202__auto__ = switch__30199__auto__.call(null,state_33537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__30202__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__30202__auto__;
}
break;
}
}catch (e33544){if((e33544 instanceof Object)){
var ex__30203__auto__ = e33544;
var statearr_33545_33547 = state_33537;
(statearr_33545_33547[(5)] = ex__30203__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33544;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__30201__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33548 = state_33537;
state_33537 = G__33548;
continue;
} else {
return ret_value__30201__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto__ = function(state_33537){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto____1.call(this,state_33537);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__30200__auto__;
})()
;})(switch__30199__auto__,c__30220__auto__,figwheel_version,temp__4657__auto__))
})();
var state__30222__auto__ = (function (){var statearr_33546 = f__30221__auto__.call(null);
(statearr_33546[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__30220__auto__);

return statearr_33546;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__30222__auto__);
});})(c__30220__auto__,figwheel_version,temp__4657__auto__))
);

return c__30220__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__33549){
var map__33553 = p__33549;
var map__33553__$1 = ((((!((map__33553 == null)))?((((map__33553.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33553.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33553):map__33553);
var file = cljs.core.get.call(null,map__33553__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__33553__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__33553__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__33555 = "";
var G__33555__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__33555),cljs.core.str("file "),cljs.core.str(file)].join(''):G__33555);
var G__33555__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__33555__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__33555__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__33555__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__33555__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__33556){
var map__33563 = p__33556;
var map__33563__$1 = ((((!((map__33563 == null)))?((((map__33563.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33563.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33563):map__33563);
var ed = map__33563__$1;
var formatted_exception = cljs.core.get.call(null,map__33563__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__33563__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__33563__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__33565_33569 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__33566_33570 = null;
var count__33567_33571 = (0);
var i__33568_33572 = (0);
while(true){
if((i__33568_33572 < count__33567_33571)){
var msg_33573 = cljs.core._nth.call(null,chunk__33566_33570,i__33568_33572);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33573);

var G__33574 = seq__33565_33569;
var G__33575 = chunk__33566_33570;
var G__33576 = count__33567_33571;
var G__33577 = (i__33568_33572 + (1));
seq__33565_33569 = G__33574;
chunk__33566_33570 = G__33575;
count__33567_33571 = G__33576;
i__33568_33572 = G__33577;
continue;
} else {
var temp__4657__auto___33578 = cljs.core.seq.call(null,seq__33565_33569);
if(temp__4657__auto___33578){
var seq__33565_33579__$1 = temp__4657__auto___33578;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33565_33579__$1)){
var c__26790__auto___33580 = cljs.core.chunk_first.call(null,seq__33565_33579__$1);
var G__33581 = cljs.core.chunk_rest.call(null,seq__33565_33579__$1);
var G__33582 = c__26790__auto___33580;
var G__33583 = cljs.core.count.call(null,c__26790__auto___33580);
var G__33584 = (0);
seq__33565_33569 = G__33581;
chunk__33566_33570 = G__33582;
count__33567_33571 = G__33583;
i__33568_33572 = G__33584;
continue;
} else {
var msg_33585 = cljs.core.first.call(null,seq__33565_33579__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_33585);

var G__33586 = cljs.core.next.call(null,seq__33565_33579__$1);
var G__33587 = null;
var G__33588 = (0);
var G__33589 = (0);
seq__33565_33569 = G__33586;
chunk__33566_33570 = G__33587;
count__33567_33571 = G__33588;
i__33568_33572 = G__33589;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str("Error on "),cljs.core.str(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__33590){
var map__33593 = p__33590;
var map__33593__$1 = ((((!((map__33593 == null)))?((((map__33593.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33593.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33593):map__33593);
var w = map__33593__$1;
var message = cljs.core.get.call(null,map__33593__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str("Figwheel: Compile Warning - "),cljs.core.str(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str(" in "),cljs.core.str(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str("ws://"),cljs.core.str((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__25967__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__25967__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__33605 = cljs.core.seq.call(null,plugins);
var chunk__33606 = null;
var count__33607 = (0);
var i__33608 = (0);
while(true){
if((i__33608 < count__33607)){
var vec__33609 = cljs.core._nth.call(null,chunk__33606,i__33608);
var k = cljs.core.nth.call(null,vec__33609,(0),null);
var plugin = cljs.core.nth.call(null,vec__33609,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33615 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33605,chunk__33606,count__33607,i__33608,pl_33615,vec__33609,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_33615.call(null,msg_hist);
});})(seq__33605,chunk__33606,count__33607,i__33608,pl_33615,vec__33609,k,plugin))
);
} else {
}

var G__33616 = seq__33605;
var G__33617 = chunk__33606;
var G__33618 = count__33607;
var G__33619 = (i__33608 + (1));
seq__33605 = G__33616;
chunk__33606 = G__33617;
count__33607 = G__33618;
i__33608 = G__33619;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__33605);
if(temp__4657__auto__){
var seq__33605__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33605__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__33605__$1);
var G__33620 = cljs.core.chunk_rest.call(null,seq__33605__$1);
var G__33621 = c__26790__auto__;
var G__33622 = cljs.core.count.call(null,c__26790__auto__);
var G__33623 = (0);
seq__33605 = G__33620;
chunk__33606 = G__33621;
count__33607 = G__33622;
i__33608 = G__33623;
continue;
} else {
var vec__33612 = cljs.core.first.call(null,seq__33605__$1);
var k = cljs.core.nth.call(null,vec__33612,(0),null);
var plugin = cljs.core.nth.call(null,vec__33612,(1),null);
if(cljs.core.truth_(plugin)){
var pl_33624 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__33605,chunk__33606,count__33607,i__33608,pl_33624,vec__33612,k,plugin,seq__33605__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_33624.call(null,msg_hist);
});})(seq__33605,chunk__33606,count__33607,i__33608,pl_33624,vec__33612,k,plugin,seq__33605__$1,temp__4657__auto__))
);
} else {
}

var G__33625 = cljs.core.next.call(null,seq__33605__$1);
var G__33626 = null;
var G__33627 = (0);
var G__33628 = (0);
seq__33605 = G__33625;
chunk__33606 = G__33626;
count__33607 = G__33627;
i__33608 = G__33628;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var args33629 = [];
var len__27054__auto___33636 = arguments.length;
var i__27055__auto___33637 = (0);
while(true){
if((i__27055__auto___33637 < len__27054__auto___33636)){
args33629.push((arguments[i__27055__auto___33637]));

var G__33638 = (i__27055__auto___33637 + (1));
i__27055__auto___33637 = G__33638;
continue;
} else {
}
break;
}

var G__33631 = args33629.length;
switch (G__33631) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args33629.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__33632_33640 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__33633_33641 = null;
var count__33634_33642 = (0);
var i__33635_33643 = (0);
while(true){
if((i__33635_33643 < count__33634_33642)){
var msg_33644 = cljs.core._nth.call(null,chunk__33633_33641,i__33635_33643);
figwheel.client.socket.handle_incoming_message.call(null,msg_33644);

var G__33645 = seq__33632_33640;
var G__33646 = chunk__33633_33641;
var G__33647 = count__33634_33642;
var G__33648 = (i__33635_33643 + (1));
seq__33632_33640 = G__33645;
chunk__33633_33641 = G__33646;
count__33634_33642 = G__33647;
i__33635_33643 = G__33648;
continue;
} else {
var temp__4657__auto___33649 = cljs.core.seq.call(null,seq__33632_33640);
if(temp__4657__auto___33649){
var seq__33632_33650__$1 = temp__4657__auto___33649;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33632_33650__$1)){
var c__26790__auto___33651 = cljs.core.chunk_first.call(null,seq__33632_33650__$1);
var G__33652 = cljs.core.chunk_rest.call(null,seq__33632_33650__$1);
var G__33653 = c__26790__auto___33651;
var G__33654 = cljs.core.count.call(null,c__26790__auto___33651);
var G__33655 = (0);
seq__33632_33640 = G__33652;
chunk__33633_33641 = G__33653;
count__33634_33642 = G__33654;
i__33635_33643 = G__33655;
continue;
} else {
var msg_33656 = cljs.core.first.call(null,seq__33632_33650__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_33656);

var G__33657 = cljs.core.next.call(null,seq__33632_33650__$1);
var G__33658 = null;
var G__33659 = (0);
var G__33660 = (0);
seq__33632_33640 = G__33657;
chunk__33633_33641 = G__33658;
count__33634_33642 = G__33659;
i__33635_33643 = G__33660;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
}));
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__27061__auto__ = [];
var len__27054__auto___33665 = arguments.length;
var i__27055__auto___33666 = (0);
while(true){
if((i__27055__auto___33666 < len__27054__auto___33665)){
args__27061__auto__.push((arguments[i__27055__auto___33666]));

var G__33667 = (i__27055__auto___33666 + (1));
i__27055__auto___33666 = G__33667;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__33662){
var map__33663 = p__33662;
var map__33663__$1 = ((((!((map__33663 == null)))?((((map__33663.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33663.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33663):map__33663);
var opts = map__33663__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq33661){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq33661));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e33669){if((e33669 instanceof Error)){
var e = e33669;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e33669;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__33673){
var map__33674 = p__33673;
var map__33674__$1 = ((((!((map__33674 == null)))?((((map__33674.cljs$lang$protocol_mask$partition0$ & (64))) || (map__33674.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33674):map__33674);
var msg_name = cljs.core.get.call(null,map__33674__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1499366860691