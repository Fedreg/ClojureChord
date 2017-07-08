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
var args58928 = [];
var len__27054__auto___58931 = arguments.length;
var i__27055__auto___58932 = (0);
while(true){
if((i__27055__auto___58932 < len__27054__auto___58931)){
args58928.push((arguments[i__27055__auto___58932]));

var G__58933 = (i__27055__auto___58932 + (1));
i__27055__auto___58932 = G__58933;
continue;
} else {
}
break;
}

var G__58930 = args58928.length;
switch (G__58930) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args58928.length)].join('')));

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
var len__27054__auto___58936 = arguments.length;
var i__27055__auto___58937 = (0);
while(true){
if((i__27055__auto___58937 < len__27054__auto___58936)){
args__27061__auto__.push((arguments[i__27055__auto___58937]));

var G__58938 = (i__27055__auto___58937 + (1));
i__27055__auto___58937 = G__58938;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq58935){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58935));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___58940 = arguments.length;
var i__27055__auto___58941 = (0);
while(true){
if((i__27055__auto___58941 < len__27054__auto___58940)){
args__27061__auto__.push((arguments[i__27055__auto___58941]));

var G__58942 = (i__27055__auto___58941 + (1));
i__27055__auto___58941 = G__58942;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq58939){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq58939));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__58943){
var map__58946 = p__58943;
var map__58946__$1 = ((((!((map__58946 == null)))?((((map__58946.cljs$lang$protocol_mask$partition0$ & (64))) || (map__58946.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__58946):map__58946);
var message = cljs.core.get.call(null,map__58946__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__58946__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28171__auto___59108 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___59108,ch){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___59108,ch){
return (function (state_59077){
var state_val_59078 = (state_59077[(1)]);
if((state_val_59078 === (7))){
var inst_59073 = (state_59077[(2)]);
var state_59077__$1 = state_59077;
var statearr_59079_59109 = state_59077__$1;
(statearr_59079_59109[(2)] = inst_59073);

(statearr_59079_59109[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (1))){
var state_59077__$1 = state_59077;
var statearr_59080_59110 = state_59077__$1;
(statearr_59080_59110[(2)] = null);

(statearr_59080_59110[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (4))){
var inst_59030 = (state_59077[(7)]);
var inst_59030__$1 = (state_59077[(2)]);
var state_59077__$1 = (function (){var statearr_59081 = state_59077;
(statearr_59081[(7)] = inst_59030__$1);

return statearr_59081;
})();
if(cljs.core.truth_(inst_59030__$1)){
var statearr_59082_59111 = state_59077__$1;
(statearr_59082_59111[(1)] = (5));

} else {
var statearr_59083_59112 = state_59077__$1;
(statearr_59083_59112[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (15))){
var inst_59037 = (state_59077[(8)]);
var inst_59052 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59037);
var inst_59053 = cljs.core.first.call(null,inst_59052);
var inst_59054 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_59053);
var inst_59055 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_59054)].join('');
var inst_59056 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_59055);
var state_59077__$1 = state_59077;
var statearr_59084_59113 = state_59077__$1;
(statearr_59084_59113[(2)] = inst_59056);

(statearr_59084_59113[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (13))){
var inst_59061 = (state_59077[(2)]);
var state_59077__$1 = state_59077;
var statearr_59085_59114 = state_59077__$1;
(statearr_59085_59114[(2)] = inst_59061);

(statearr_59085_59114[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (6))){
var state_59077__$1 = state_59077;
var statearr_59086_59115 = state_59077__$1;
(statearr_59086_59115[(2)] = null);

(statearr_59086_59115[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (17))){
var inst_59059 = (state_59077[(2)]);
var state_59077__$1 = state_59077;
var statearr_59087_59116 = state_59077__$1;
(statearr_59087_59116[(2)] = inst_59059);

(statearr_59087_59116[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (3))){
var inst_59075 = (state_59077[(2)]);
var state_59077__$1 = state_59077;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59077__$1,inst_59075);
} else {
if((state_val_59078 === (12))){
var inst_59036 = (state_59077[(9)]);
var inst_59050 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_59036,opts);
var state_59077__$1 = state_59077;
if(cljs.core.truth_(inst_59050)){
var statearr_59088_59117 = state_59077__$1;
(statearr_59088_59117[(1)] = (15));

} else {
var statearr_59089_59118 = state_59077__$1;
(statearr_59089_59118[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (2))){
var state_59077__$1 = state_59077;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59077__$1,(4),ch);
} else {
if((state_val_59078 === (11))){
var inst_59037 = (state_59077[(8)]);
var inst_59042 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_59043 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_59037);
var inst_59044 = cljs.core.async.timeout.call(null,(1000));
var inst_59045 = [inst_59043,inst_59044];
var inst_59046 = (new cljs.core.PersistentVector(null,2,(5),inst_59042,inst_59045,null));
var state_59077__$1 = state_59077;
return cljs.core.async.ioc_alts_BANG_.call(null,state_59077__$1,(14),inst_59046);
} else {
if((state_val_59078 === (9))){
var inst_59037 = (state_59077[(8)]);
var inst_59063 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_59064 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_59037);
var inst_59065 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_59064);
var inst_59066 = [cljs.core.str("Not loading: "),cljs.core.str(inst_59065)].join('');
var inst_59067 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_59066);
var state_59077__$1 = (function (){var statearr_59090 = state_59077;
(statearr_59090[(10)] = inst_59063);

return statearr_59090;
})();
var statearr_59091_59119 = state_59077__$1;
(statearr_59091_59119[(2)] = inst_59067);

(statearr_59091_59119[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (5))){
var inst_59030 = (state_59077[(7)]);
var inst_59032 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_59033 = (new cljs.core.PersistentArrayMap(null,2,inst_59032,null));
var inst_59034 = (new cljs.core.PersistentHashSet(null,inst_59033,null));
var inst_59035 = figwheel.client.focus_msgs.call(null,inst_59034,inst_59030);
var inst_59036 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_59035);
var inst_59037 = cljs.core.first.call(null,inst_59035);
var inst_59038 = figwheel.client.autoload_QMARK_.call(null);
var state_59077__$1 = (function (){var statearr_59092 = state_59077;
(statearr_59092[(9)] = inst_59036);

(statearr_59092[(8)] = inst_59037);

return statearr_59092;
})();
if(cljs.core.truth_(inst_59038)){
var statearr_59093_59120 = state_59077__$1;
(statearr_59093_59120[(1)] = (8));

} else {
var statearr_59094_59121 = state_59077__$1;
(statearr_59094_59121[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (14))){
var inst_59048 = (state_59077[(2)]);
var state_59077__$1 = state_59077;
var statearr_59095_59122 = state_59077__$1;
(statearr_59095_59122[(2)] = inst_59048);

(statearr_59095_59122[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (16))){
var state_59077__$1 = state_59077;
var statearr_59096_59123 = state_59077__$1;
(statearr_59096_59123[(2)] = null);

(statearr_59096_59123[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (10))){
var inst_59069 = (state_59077[(2)]);
var state_59077__$1 = (function (){var statearr_59097 = state_59077;
(statearr_59097[(11)] = inst_59069);

return statearr_59097;
})();
var statearr_59098_59124 = state_59077__$1;
(statearr_59098_59124[(2)] = null);

(statearr_59098_59124[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59078 === (8))){
var inst_59036 = (state_59077[(9)]);
var inst_59040 = figwheel.client.reload_file_state_QMARK_.call(null,inst_59036,opts);
var state_59077__$1 = state_59077;
if(cljs.core.truth_(inst_59040)){
var statearr_59099_59125 = state_59077__$1;
(statearr_59099_59125[(1)] = (11));

} else {
var statearr_59100_59126 = state_59077__$1;
(statearr_59100_59126[(1)] = (12));

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
});})(c__28171__auto___59108,ch))
;
return ((function (switch__28150__auto__,c__28171__auto___59108,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_59104 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59104[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__);

(statearr_59104[(1)] = (1));

return statearr_59104;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1 = (function (state_59077){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_59077);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e59105){if((e59105 instanceof Object)){
var ex__28154__auto__ = e59105;
var statearr_59106_59127 = state_59077;
(statearr_59106_59127[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59077);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59105;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59128 = state_59077;
state_59077 = G__59128;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__ = function(state_59077){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1.call(this,state_59077);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___59108,ch))
})();
var state__28173__auto__ = (function (){var statearr_59107 = f__28172__auto__.call(null);
(statearr_59107[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___59108);

return statearr_59107;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___59108,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__59129_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__59129_SHARP_));
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
var base_path_59132 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_59132){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e59131){if((e59131 instanceof Error)){
var e = e59131;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_59132], null));
} else {
var e = e59131;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_59132))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__59133){
var map__59142 = p__59133;
var map__59142__$1 = ((((!((map__59142 == null)))?((((map__59142.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59142.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59142):map__59142);
var opts = map__59142__$1;
var build_id = cljs.core.get.call(null,map__59142__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__59142,map__59142__$1,opts,build_id){
return (function (p__59144){
var vec__59145 = p__59144;
var seq__59146 = cljs.core.seq.call(null,vec__59145);
var first__59147 = cljs.core.first.call(null,seq__59146);
var seq__59146__$1 = cljs.core.next.call(null,seq__59146);
var map__59148 = first__59147;
var map__59148__$1 = ((((!((map__59148 == null)))?((((map__59148.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59148.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59148):map__59148);
var msg = map__59148__$1;
var msg_name = cljs.core.get.call(null,map__59148__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59146__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__59145,seq__59146,first__59147,seq__59146__$1,map__59148,map__59148__$1,msg,msg_name,_,map__59142,map__59142__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__59145,seq__59146,first__59147,seq__59146__$1,map__59148,map__59148__$1,msg,msg_name,_,map__59142,map__59142__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__59142,map__59142__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__59156){
var vec__59157 = p__59156;
var seq__59158 = cljs.core.seq.call(null,vec__59157);
var first__59159 = cljs.core.first.call(null,seq__59158);
var seq__59158__$1 = cljs.core.next.call(null,seq__59158);
var map__59160 = first__59159;
var map__59160__$1 = ((((!((map__59160 == null)))?((((map__59160.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59160.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59160):map__59160);
var msg = map__59160__$1;
var msg_name = cljs.core.get.call(null,map__59160__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59158__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__59162){
var map__59174 = p__59162;
var map__59174__$1 = ((((!((map__59174 == null)))?((((map__59174.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59174.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59174):map__59174);
var on_compile_warning = cljs.core.get.call(null,map__59174__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__59174__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__59174,map__59174__$1,on_compile_warning,on_compile_fail){
return (function (p__59176){
var vec__59177 = p__59176;
var seq__59178 = cljs.core.seq.call(null,vec__59177);
var first__59179 = cljs.core.first.call(null,seq__59178);
var seq__59178__$1 = cljs.core.next.call(null,seq__59178);
var map__59180 = first__59179;
var map__59180__$1 = ((((!((map__59180 == null)))?((((map__59180.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59180.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59180):map__59180);
var msg = map__59180__$1;
var msg_name = cljs.core.get.call(null,map__59180__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__59178__$1;
var pred__59182 = cljs.core._EQ_;
var expr__59183 = msg_name;
if(cljs.core.truth_(pred__59182.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__59183))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__59182.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__59183))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__59174,map__59174__$1,on_compile_warning,on_compile_fail))
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
var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__,msg_hist,msg_names,msg){
return (function (state_59411){
var state_val_59412 = (state_59411[(1)]);
if((state_val_59412 === (7))){
var inst_59331 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
if(cljs.core.truth_(inst_59331)){
var statearr_59413_59463 = state_59411__$1;
(statearr_59413_59463[(1)] = (8));

} else {
var statearr_59414_59464 = state_59411__$1;
(statearr_59414_59464[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (20))){
var inst_59405 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59415_59465 = state_59411__$1;
(statearr_59415_59465[(2)] = inst_59405);

(statearr_59415_59465[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (27))){
var inst_59401 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59416_59466 = state_59411__$1;
(statearr_59416_59466[(2)] = inst_59401);

(statearr_59416_59466[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (1))){
var inst_59324 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_59411__$1 = state_59411;
if(cljs.core.truth_(inst_59324)){
var statearr_59417_59467 = state_59411__$1;
(statearr_59417_59467[(1)] = (2));

} else {
var statearr_59418_59468 = state_59411__$1;
(statearr_59418_59468[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (24))){
var inst_59403 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59419_59469 = state_59411__$1;
(statearr_59419_59469[(2)] = inst_59403);

(statearr_59419_59469[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (4))){
var inst_59409 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59411__$1,inst_59409);
} else {
if((state_val_59412 === (15))){
var inst_59407 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59420_59470 = state_59411__$1;
(statearr_59420_59470[(2)] = inst_59407);

(statearr_59420_59470[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (21))){
var inst_59360 = (state_59411[(2)]);
var inst_59361 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59362 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59361);
var state_59411__$1 = (function (){var statearr_59421 = state_59411;
(statearr_59421[(7)] = inst_59360);

return statearr_59421;
})();
var statearr_59422_59471 = state_59411__$1;
(statearr_59422_59471[(2)] = inst_59362);

(statearr_59422_59471[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (31))){
var inst_59390 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_59411__$1 = state_59411;
if(cljs.core.truth_(inst_59390)){
var statearr_59423_59472 = state_59411__$1;
(statearr_59423_59472[(1)] = (34));

} else {
var statearr_59424_59473 = state_59411__$1;
(statearr_59424_59473[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (32))){
var inst_59399 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59425_59474 = state_59411__$1;
(statearr_59425_59474[(2)] = inst_59399);

(statearr_59425_59474[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (33))){
var inst_59386 = (state_59411[(2)]);
var inst_59387 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59388 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59387);
var state_59411__$1 = (function (){var statearr_59426 = state_59411;
(statearr_59426[(8)] = inst_59386);

return statearr_59426;
})();
var statearr_59427_59475 = state_59411__$1;
(statearr_59427_59475[(2)] = inst_59388);

(statearr_59427_59475[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (13))){
var inst_59345 = figwheel.client.heads_up.clear.call(null);
var state_59411__$1 = state_59411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(16),inst_59345);
} else {
if((state_val_59412 === (22))){
var inst_59366 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59367 = figwheel.client.heads_up.append_warning_message.call(null,inst_59366);
var state_59411__$1 = state_59411;
var statearr_59428_59476 = state_59411__$1;
(statearr_59428_59476[(2)] = inst_59367);

(statearr_59428_59476[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (36))){
var inst_59397 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59429_59477 = state_59411__$1;
(statearr_59429_59477[(2)] = inst_59397);

(statearr_59429_59477[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (29))){
var inst_59377 = (state_59411[(2)]);
var inst_59378 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59379 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59378);
var state_59411__$1 = (function (){var statearr_59430 = state_59411;
(statearr_59430[(9)] = inst_59377);

return statearr_59430;
})();
var statearr_59431_59478 = state_59411__$1;
(statearr_59431_59478[(2)] = inst_59379);

(statearr_59431_59478[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (6))){
var inst_59326 = (state_59411[(10)]);
var state_59411__$1 = state_59411;
var statearr_59432_59479 = state_59411__$1;
(statearr_59432_59479[(2)] = inst_59326);

(statearr_59432_59479[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (28))){
var inst_59373 = (state_59411[(2)]);
var inst_59374 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59375 = figwheel.client.heads_up.display_warning.call(null,inst_59374);
var state_59411__$1 = (function (){var statearr_59433 = state_59411;
(statearr_59433[(11)] = inst_59373);

return statearr_59433;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(29),inst_59375);
} else {
if((state_val_59412 === (25))){
var inst_59371 = figwheel.client.heads_up.clear.call(null);
var state_59411__$1 = state_59411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(28),inst_59371);
} else {
if((state_val_59412 === (34))){
var inst_59392 = figwheel.client.heads_up.flash_loaded.call(null);
var state_59411__$1 = state_59411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(37),inst_59392);
} else {
if((state_val_59412 === (17))){
var inst_59351 = (state_59411[(2)]);
var inst_59352 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59353 = figwheel.client.auto_jump_to_error.call(null,opts,inst_59352);
var state_59411__$1 = (function (){var statearr_59434 = state_59411;
(statearr_59434[(12)] = inst_59351);

return statearr_59434;
})();
var statearr_59435_59480 = state_59411__$1;
(statearr_59435_59480[(2)] = inst_59353);

(statearr_59435_59480[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (3))){
var inst_59343 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_59411__$1 = state_59411;
if(cljs.core.truth_(inst_59343)){
var statearr_59436_59481 = state_59411__$1;
(statearr_59436_59481[(1)] = (13));

} else {
var statearr_59437_59482 = state_59411__$1;
(statearr_59437_59482[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (12))){
var inst_59339 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59438_59483 = state_59411__$1;
(statearr_59438_59483[(2)] = inst_59339);

(statearr_59438_59483[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (2))){
var inst_59326 = (state_59411[(10)]);
var inst_59326__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_59411__$1 = (function (){var statearr_59439 = state_59411;
(statearr_59439[(10)] = inst_59326__$1);

return statearr_59439;
})();
if(cljs.core.truth_(inst_59326__$1)){
var statearr_59440_59484 = state_59411__$1;
(statearr_59440_59484[(1)] = (5));

} else {
var statearr_59441_59485 = state_59411__$1;
(statearr_59441_59485[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (23))){
var inst_59369 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_59411__$1 = state_59411;
if(cljs.core.truth_(inst_59369)){
var statearr_59442_59486 = state_59411__$1;
(statearr_59442_59486[(1)] = (25));

} else {
var statearr_59443_59487 = state_59411__$1;
(statearr_59443_59487[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (35))){
var state_59411__$1 = state_59411;
var statearr_59444_59488 = state_59411__$1;
(statearr_59444_59488[(2)] = null);

(statearr_59444_59488[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (19))){
var inst_59364 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_59411__$1 = state_59411;
if(cljs.core.truth_(inst_59364)){
var statearr_59445_59489 = state_59411__$1;
(statearr_59445_59489[(1)] = (22));

} else {
var statearr_59446_59490 = state_59411__$1;
(statearr_59446_59490[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (11))){
var inst_59335 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59447_59491 = state_59411__$1;
(statearr_59447_59491[(2)] = inst_59335);

(statearr_59447_59491[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (9))){
var inst_59337 = figwheel.client.heads_up.clear.call(null);
var state_59411__$1 = state_59411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(12),inst_59337);
} else {
if((state_val_59412 === (5))){
var inst_59328 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_59411__$1 = state_59411;
var statearr_59448_59492 = state_59411__$1;
(statearr_59448_59492[(2)] = inst_59328);

(statearr_59448_59492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (14))){
var inst_59355 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_59411__$1 = state_59411;
if(cljs.core.truth_(inst_59355)){
var statearr_59449_59493 = state_59411__$1;
(statearr_59449_59493[(1)] = (18));

} else {
var statearr_59450_59494 = state_59411__$1;
(statearr_59450_59494[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (26))){
var inst_59381 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_59411__$1 = state_59411;
if(cljs.core.truth_(inst_59381)){
var statearr_59451_59495 = state_59411__$1;
(statearr_59451_59495[(1)] = (30));

} else {
var statearr_59452_59496 = state_59411__$1;
(statearr_59452_59496[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (16))){
var inst_59347 = (state_59411[(2)]);
var inst_59348 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59349 = figwheel.client.heads_up.display_exception.call(null,inst_59348);
var state_59411__$1 = (function (){var statearr_59453 = state_59411;
(statearr_59453[(13)] = inst_59347);

return statearr_59453;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(17),inst_59349);
} else {
if((state_val_59412 === (30))){
var inst_59383 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59384 = figwheel.client.heads_up.display_warning.call(null,inst_59383);
var state_59411__$1 = state_59411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(33),inst_59384);
} else {
if((state_val_59412 === (10))){
var inst_59341 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59454_59497 = state_59411__$1;
(statearr_59454_59497[(2)] = inst_59341);

(statearr_59454_59497[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (18))){
var inst_59357 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_59358 = figwheel.client.heads_up.display_exception.call(null,inst_59357);
var state_59411__$1 = state_59411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(21),inst_59358);
} else {
if((state_val_59412 === (37))){
var inst_59394 = (state_59411[(2)]);
var state_59411__$1 = state_59411;
var statearr_59455_59498 = state_59411__$1;
(statearr_59455_59498[(2)] = inst_59394);

(statearr_59455_59498[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59412 === (8))){
var inst_59333 = figwheel.client.heads_up.flash_loaded.call(null);
var state_59411__$1 = state_59411;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59411__$1,(11),inst_59333);
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
});})(c__28171__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28150__auto__,c__28171__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____0 = (function (){
var statearr_59459 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_59459[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__);

(statearr_59459[(1)] = (1));

return statearr_59459;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1 = (function (state_59411){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_59411);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e59460){if((e59460 instanceof Object)){
var ex__28154__auto__ = e59460;
var statearr_59461_59499 = state_59411;
(statearr_59461_59499[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59411);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59500 = state_59411;
state_59411 = G__59500;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__ = function(state_59411){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1.call(this,state_59411);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,msg_hist,msg_names,msg))
})();
var state__28173__auto__ = (function (){var statearr_59462 = f__28172__auto__.call(null);
(statearr_59462[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_59462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__,msg_hist,msg_names,msg))
);

return c__28171__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28171__auto___59563 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___59563,ch){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___59563,ch){
return (function (state_59546){
var state_val_59547 = (state_59546[(1)]);
if((state_val_59547 === (1))){
var state_59546__$1 = state_59546;
var statearr_59548_59564 = state_59546__$1;
(statearr_59548_59564[(2)] = null);

(statearr_59548_59564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59547 === (2))){
var state_59546__$1 = state_59546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59546__$1,(4),ch);
} else {
if((state_val_59547 === (3))){
var inst_59544 = (state_59546[(2)]);
var state_59546__$1 = state_59546;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59546__$1,inst_59544);
} else {
if((state_val_59547 === (4))){
var inst_59534 = (state_59546[(7)]);
var inst_59534__$1 = (state_59546[(2)]);
var state_59546__$1 = (function (){var statearr_59549 = state_59546;
(statearr_59549[(7)] = inst_59534__$1);

return statearr_59549;
})();
if(cljs.core.truth_(inst_59534__$1)){
var statearr_59550_59565 = state_59546__$1;
(statearr_59550_59565[(1)] = (5));

} else {
var statearr_59551_59566 = state_59546__$1;
(statearr_59551_59566[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59547 === (5))){
var inst_59534 = (state_59546[(7)]);
var inst_59536 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_59534);
var state_59546__$1 = state_59546;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59546__$1,(8),inst_59536);
} else {
if((state_val_59547 === (6))){
var state_59546__$1 = state_59546;
var statearr_59552_59567 = state_59546__$1;
(statearr_59552_59567[(2)] = null);

(statearr_59552_59567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59547 === (7))){
var inst_59542 = (state_59546[(2)]);
var state_59546__$1 = state_59546;
var statearr_59553_59568 = state_59546__$1;
(statearr_59553_59568[(2)] = inst_59542);

(statearr_59553_59568[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_59547 === (8))){
var inst_59538 = (state_59546[(2)]);
var state_59546__$1 = (function (){var statearr_59554 = state_59546;
(statearr_59554[(8)] = inst_59538);

return statearr_59554;
})();
var statearr_59555_59569 = state_59546__$1;
(statearr_59555_59569[(2)] = null);

(statearr_59555_59569[(1)] = (2));


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
});})(c__28171__auto___59563,ch))
;
return ((function (switch__28150__auto__,c__28171__auto___59563,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_59559 = [null,null,null,null,null,null,null,null,null];
(statearr_59559[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28151__auto__);

(statearr_59559[(1)] = (1));

return statearr_59559;
});
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1 = (function (state_59546){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_59546);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e59560){if((e59560 instanceof Object)){
var ex__28154__auto__ = e59560;
var statearr_59561_59570 = state_59546;
(statearr_59561_59570[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59546);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59560;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59571 = state_59546;
state_59546 = G__59571;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__ = function(state_59546){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1.call(this,state_59546);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___59563,ch))
})();
var state__28173__auto__ = (function (){var statearr_59562 = f__28172__auto__.call(null);
(statearr_59562[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___59563);

return statearr_59562;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___59563,ch))
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
var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__){
return (function (state_59592){
var state_val_59593 = (state_59592[(1)]);
if((state_val_59593 === (1))){
var inst_59587 = cljs.core.async.timeout.call(null,(3000));
var state_59592__$1 = state_59592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59592__$1,(2),inst_59587);
} else {
if((state_val_59593 === (2))){
var inst_59589 = (state_59592[(2)]);
var inst_59590 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_59592__$1 = (function (){var statearr_59594 = state_59592;
(statearr_59594[(7)] = inst_59589);

return statearr_59594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59592__$1,inst_59590);
} else {
return null;
}
}
});})(c__28171__auto__))
;
return ((function (switch__28150__auto__,c__28171__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_59598 = [null,null,null,null,null,null,null,null];
(statearr_59598[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__);

(statearr_59598[(1)] = (1));

return statearr_59598;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1 = (function (state_59592){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_59592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e59599){if((e59599 instanceof Object)){
var ex__28154__auto__ = e59599;
var statearr_59600_59602 = state_59592;
(statearr_59600_59602[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59603 = state_59592;
state_59592 = G__59603;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__ = function(state_59592){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1.call(this,state_59592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_59601 = f__28172__auto__.call(null);
(statearr_59601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_59601;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__))
);

return c__28171__auto__;
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
var c__28171__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto__,figwheel_version,temp__4657__auto__){
return (function (state_59626){
var state_val_59627 = (state_59626[(1)]);
if((state_val_59627 === (1))){
var inst_59620 = cljs.core.async.timeout.call(null,(2000));
var state_59626__$1 = state_59626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_59626__$1,(2),inst_59620);
} else {
if((state_val_59627 === (2))){
var inst_59622 = (state_59626[(2)]);
var inst_59623 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_59624 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_59623);
var state_59626__$1 = (function (){var statearr_59628 = state_59626;
(statearr_59628[(7)] = inst_59622);

return statearr_59628;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_59626__$1,inst_59624);
} else {
return null;
}
}
});})(c__28171__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28150__auto__,c__28171__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_59632 = [null,null,null,null,null,null,null,null];
(statearr_59632[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__);

(statearr_59632[(1)] = (1));

return statearr_59632;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1 = (function (state_59626){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_59626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e59633){if((e59633 instanceof Object)){
var ex__28154__auto__ = e59633;
var statearr_59634_59636 = state_59626;
(statearr_59634_59636[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_59626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e59633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__59637 = state_59626;
state_59626 = G__59637;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__ = function(state_59626){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1.call(this,state_59626);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28173__auto__ = (function (){var statearr_59635 = f__28172__auto__.call(null);
(statearr_59635[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_59635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__,figwheel_version,temp__4657__auto__))
);

return c__28171__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__59638){
var map__59642 = p__59638;
var map__59642__$1 = ((((!((map__59642 == null)))?((((map__59642.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59642.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59642):map__59642);
var file = cljs.core.get.call(null,map__59642__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__59642__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__59642__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__59644 = "";
var G__59644__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__59644),cljs.core.str("file "),cljs.core.str(file)].join(''):G__59644);
var G__59644__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__59644__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__59644__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__59644__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__59644__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__59645){
var map__59652 = p__59645;
var map__59652__$1 = ((((!((map__59652 == null)))?((((map__59652.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59652.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59652):map__59652);
var ed = map__59652__$1;
var formatted_exception = cljs.core.get.call(null,map__59652__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__59652__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__59652__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__59654_59658 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__59655_59659 = null;
var count__59656_59660 = (0);
var i__59657_59661 = (0);
while(true){
if((i__59657_59661 < count__59656_59660)){
var msg_59662 = cljs.core._nth.call(null,chunk__59655_59659,i__59657_59661);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_59662);

var G__59663 = seq__59654_59658;
var G__59664 = chunk__59655_59659;
var G__59665 = count__59656_59660;
var G__59666 = (i__59657_59661 + (1));
seq__59654_59658 = G__59663;
chunk__59655_59659 = G__59664;
count__59656_59660 = G__59665;
i__59657_59661 = G__59666;
continue;
} else {
var temp__4657__auto___59667 = cljs.core.seq.call(null,seq__59654_59658);
if(temp__4657__auto___59667){
var seq__59654_59668__$1 = temp__4657__auto___59667;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59654_59668__$1)){
var c__26790__auto___59669 = cljs.core.chunk_first.call(null,seq__59654_59668__$1);
var G__59670 = cljs.core.chunk_rest.call(null,seq__59654_59668__$1);
var G__59671 = c__26790__auto___59669;
var G__59672 = cljs.core.count.call(null,c__26790__auto___59669);
var G__59673 = (0);
seq__59654_59658 = G__59670;
chunk__59655_59659 = G__59671;
count__59656_59660 = G__59672;
i__59657_59661 = G__59673;
continue;
} else {
var msg_59674 = cljs.core.first.call(null,seq__59654_59668__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_59674);

var G__59675 = cljs.core.next.call(null,seq__59654_59668__$1);
var G__59676 = null;
var G__59677 = (0);
var G__59678 = (0);
seq__59654_59658 = G__59675;
chunk__59655_59659 = G__59676;
count__59656_59660 = G__59677;
i__59657_59661 = G__59678;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__59679){
var map__59682 = p__59679;
var map__59682__$1 = ((((!((map__59682 == null)))?((((map__59682.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59682.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59682):map__59682);
var w = map__59682__$1;
var message = cljs.core.get.call(null,map__59682__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__59694 = cljs.core.seq.call(null,plugins);
var chunk__59695 = null;
var count__59696 = (0);
var i__59697 = (0);
while(true){
if((i__59697 < count__59696)){
var vec__59698 = cljs.core._nth.call(null,chunk__59695,i__59697);
var k = cljs.core.nth.call(null,vec__59698,(0),null);
var plugin = cljs.core.nth.call(null,vec__59698,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59704 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__59694,chunk__59695,count__59696,i__59697,pl_59704,vec__59698,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_59704.call(null,msg_hist);
});})(seq__59694,chunk__59695,count__59696,i__59697,pl_59704,vec__59698,k,plugin))
);
} else {
}

var G__59705 = seq__59694;
var G__59706 = chunk__59695;
var G__59707 = count__59696;
var G__59708 = (i__59697 + (1));
seq__59694 = G__59705;
chunk__59695 = G__59706;
count__59696 = G__59707;
i__59697 = G__59708;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__59694);
if(temp__4657__auto__){
var seq__59694__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59694__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__59694__$1);
var G__59709 = cljs.core.chunk_rest.call(null,seq__59694__$1);
var G__59710 = c__26790__auto__;
var G__59711 = cljs.core.count.call(null,c__26790__auto__);
var G__59712 = (0);
seq__59694 = G__59709;
chunk__59695 = G__59710;
count__59696 = G__59711;
i__59697 = G__59712;
continue;
} else {
var vec__59701 = cljs.core.first.call(null,seq__59694__$1);
var k = cljs.core.nth.call(null,vec__59701,(0),null);
var plugin = cljs.core.nth.call(null,vec__59701,(1),null);
if(cljs.core.truth_(plugin)){
var pl_59713 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__59694,chunk__59695,count__59696,i__59697,pl_59713,vec__59701,k,plugin,seq__59694__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_59713.call(null,msg_hist);
});})(seq__59694,chunk__59695,count__59696,i__59697,pl_59713,vec__59701,k,plugin,seq__59694__$1,temp__4657__auto__))
);
} else {
}

var G__59714 = cljs.core.next.call(null,seq__59694__$1);
var G__59715 = null;
var G__59716 = (0);
var G__59717 = (0);
seq__59694 = G__59714;
chunk__59695 = G__59715;
count__59696 = G__59716;
i__59697 = G__59717;
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
var args59718 = [];
var len__27054__auto___59725 = arguments.length;
var i__27055__auto___59726 = (0);
while(true){
if((i__27055__auto___59726 < len__27054__auto___59725)){
args59718.push((arguments[i__27055__auto___59726]));

var G__59727 = (i__27055__auto___59726 + (1));
i__27055__auto___59726 = G__59727;
continue;
} else {
}
break;
}

var G__59720 = args59718.length;
switch (G__59720) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args59718.length)].join('')));

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

var seq__59721_59729 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__59722_59730 = null;
var count__59723_59731 = (0);
var i__59724_59732 = (0);
while(true){
if((i__59724_59732 < count__59723_59731)){
var msg_59733 = cljs.core._nth.call(null,chunk__59722_59730,i__59724_59732);
figwheel.client.socket.handle_incoming_message.call(null,msg_59733);

var G__59734 = seq__59721_59729;
var G__59735 = chunk__59722_59730;
var G__59736 = count__59723_59731;
var G__59737 = (i__59724_59732 + (1));
seq__59721_59729 = G__59734;
chunk__59722_59730 = G__59735;
count__59723_59731 = G__59736;
i__59724_59732 = G__59737;
continue;
} else {
var temp__4657__auto___59738 = cljs.core.seq.call(null,seq__59721_59729);
if(temp__4657__auto___59738){
var seq__59721_59739__$1 = temp__4657__auto___59738;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__59721_59739__$1)){
var c__26790__auto___59740 = cljs.core.chunk_first.call(null,seq__59721_59739__$1);
var G__59741 = cljs.core.chunk_rest.call(null,seq__59721_59739__$1);
var G__59742 = c__26790__auto___59740;
var G__59743 = cljs.core.count.call(null,c__26790__auto___59740);
var G__59744 = (0);
seq__59721_59729 = G__59741;
chunk__59722_59730 = G__59742;
count__59723_59731 = G__59743;
i__59724_59732 = G__59744;
continue;
} else {
var msg_59745 = cljs.core.first.call(null,seq__59721_59739__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_59745);

var G__59746 = cljs.core.next.call(null,seq__59721_59739__$1);
var G__59747 = null;
var G__59748 = (0);
var G__59749 = (0);
seq__59721_59729 = G__59746;
chunk__59722_59730 = G__59747;
count__59723_59731 = G__59748;
i__59724_59732 = G__59749;
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
var len__27054__auto___59754 = arguments.length;
var i__27055__auto___59755 = (0);
while(true){
if((i__27055__auto___59755 < len__27054__auto___59754)){
args__27061__auto__.push((arguments[i__27055__auto___59755]));

var G__59756 = (i__27055__auto___59755 + (1));
i__27055__auto___59755 = G__59756;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__59751){
var map__59752 = p__59751;
var map__59752__$1 = ((((!((map__59752 == null)))?((((map__59752.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59752.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59752):map__59752);
var opts = map__59752__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq59750){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq59750));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e59758){if((e59758 instanceof Error)){
var e = e59758;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e59758;

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
return (function (p__59762){
var map__59763 = p__59762;
var map__59763__$1 = ((((!((map__59763 == null)))?((((map__59763.cljs$lang$protocol_mask$partition0$ & (64))) || (map__59763.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__59763):map__59763);
var msg_name = cljs.core.get.call(null,map__59763__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1499548772769