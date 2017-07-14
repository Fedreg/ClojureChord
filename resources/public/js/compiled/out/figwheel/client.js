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
var args48384 = [];
var len__27054__auto___48387 = arguments.length;
var i__27055__auto___48388 = (0);
while(true){
if((i__27055__auto___48388 < len__27054__auto___48387)){
args48384.push((arguments[i__27055__auto___48388]));

var G__48389 = (i__27055__auto___48388 + (1));
i__27055__auto___48388 = G__48389;
continue;
} else {
}
break;
}

var G__48386 = args48384.length;
switch (G__48386) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args48384.length)].join('')));

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
var len__27054__auto___48392 = arguments.length;
var i__27055__auto___48393 = (0);
while(true){
if((i__27055__auto___48393 < len__27054__auto___48392)){
args__27061__auto__.push((arguments[i__27055__auto___48393]));

var G__48394 = (i__27055__auto___48393 + (1));
i__27055__auto___48393 = G__48394;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq48391){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48391));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___48396 = arguments.length;
var i__27055__auto___48397 = (0);
while(true){
if((i__27055__auto___48397 < len__27054__auto___48396)){
args__27061__auto__.push((arguments[i__27055__auto___48397]));

var G__48398 = (i__27055__auto___48397 + (1));
i__27055__auto___48397 = G__48398;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq48395){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq48395));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__48399){
var map__48402 = p__48399;
var map__48402__$1 = ((((!((map__48402 == null)))?((((map__48402.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48402.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48402):map__48402);
var message = cljs.core.get.call(null,map__48402__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__48402__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28009__auto___48564 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___48564,ch){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___48564,ch){
return (function (state_48533){
var state_val_48534 = (state_48533[(1)]);
if((state_val_48534 === (7))){
var inst_48529 = (state_48533[(2)]);
var state_48533__$1 = state_48533;
var statearr_48535_48565 = state_48533__$1;
(statearr_48535_48565[(2)] = inst_48529);

(statearr_48535_48565[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (1))){
var state_48533__$1 = state_48533;
var statearr_48536_48566 = state_48533__$1;
(statearr_48536_48566[(2)] = null);

(statearr_48536_48566[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (4))){
var inst_48486 = (state_48533[(7)]);
var inst_48486__$1 = (state_48533[(2)]);
var state_48533__$1 = (function (){var statearr_48537 = state_48533;
(statearr_48537[(7)] = inst_48486__$1);

return statearr_48537;
})();
if(cljs.core.truth_(inst_48486__$1)){
var statearr_48538_48567 = state_48533__$1;
(statearr_48538_48567[(1)] = (5));

} else {
var statearr_48539_48568 = state_48533__$1;
(statearr_48539_48568[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (15))){
var inst_48493 = (state_48533[(8)]);
var inst_48508 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48493);
var inst_48509 = cljs.core.first.call(null,inst_48508);
var inst_48510 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_48509);
var inst_48511 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_48510)].join('');
var inst_48512 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_48511);
var state_48533__$1 = state_48533;
var statearr_48540_48569 = state_48533__$1;
(statearr_48540_48569[(2)] = inst_48512);

(statearr_48540_48569[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (13))){
var inst_48517 = (state_48533[(2)]);
var state_48533__$1 = state_48533;
var statearr_48541_48570 = state_48533__$1;
(statearr_48541_48570[(2)] = inst_48517);

(statearr_48541_48570[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (6))){
var state_48533__$1 = state_48533;
var statearr_48542_48571 = state_48533__$1;
(statearr_48542_48571[(2)] = null);

(statearr_48542_48571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (17))){
var inst_48515 = (state_48533[(2)]);
var state_48533__$1 = state_48533;
var statearr_48543_48572 = state_48533__$1;
(statearr_48543_48572[(2)] = inst_48515);

(statearr_48543_48572[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (3))){
var inst_48531 = (state_48533[(2)]);
var state_48533__$1 = state_48533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48533__$1,inst_48531);
} else {
if((state_val_48534 === (12))){
var inst_48492 = (state_48533[(9)]);
var inst_48506 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_48492,opts);
var state_48533__$1 = state_48533;
if(cljs.core.truth_(inst_48506)){
var statearr_48544_48573 = state_48533__$1;
(statearr_48544_48573[(1)] = (15));

} else {
var statearr_48545_48574 = state_48533__$1;
(statearr_48545_48574[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (2))){
var state_48533__$1 = state_48533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48533__$1,(4),ch);
} else {
if((state_val_48534 === (11))){
var inst_48493 = (state_48533[(8)]);
var inst_48498 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_48499 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_48493);
var inst_48500 = cljs.core.async.timeout.call(null,(1000));
var inst_48501 = [inst_48499,inst_48500];
var inst_48502 = (new cljs.core.PersistentVector(null,2,(5),inst_48498,inst_48501,null));
var state_48533__$1 = state_48533;
return cljs.core.async.ioc_alts_BANG_.call(null,state_48533__$1,(14),inst_48502);
} else {
if((state_val_48534 === (9))){
var inst_48493 = (state_48533[(8)]);
var inst_48519 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_48520 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_48493);
var inst_48521 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_48520);
var inst_48522 = [cljs.core.str("Not loading: "),cljs.core.str(inst_48521)].join('');
var inst_48523 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_48522);
var state_48533__$1 = (function (){var statearr_48546 = state_48533;
(statearr_48546[(10)] = inst_48519);

return statearr_48546;
})();
var statearr_48547_48575 = state_48533__$1;
(statearr_48547_48575[(2)] = inst_48523);

(statearr_48547_48575[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (5))){
var inst_48486 = (state_48533[(7)]);
var inst_48488 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_48489 = (new cljs.core.PersistentArrayMap(null,2,inst_48488,null));
var inst_48490 = (new cljs.core.PersistentHashSet(null,inst_48489,null));
var inst_48491 = figwheel.client.focus_msgs.call(null,inst_48490,inst_48486);
var inst_48492 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_48491);
var inst_48493 = cljs.core.first.call(null,inst_48491);
var inst_48494 = figwheel.client.autoload_QMARK_.call(null);
var state_48533__$1 = (function (){var statearr_48548 = state_48533;
(statearr_48548[(9)] = inst_48492);

(statearr_48548[(8)] = inst_48493);

return statearr_48548;
})();
if(cljs.core.truth_(inst_48494)){
var statearr_48549_48576 = state_48533__$1;
(statearr_48549_48576[(1)] = (8));

} else {
var statearr_48550_48577 = state_48533__$1;
(statearr_48550_48577[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (14))){
var inst_48504 = (state_48533[(2)]);
var state_48533__$1 = state_48533;
var statearr_48551_48578 = state_48533__$1;
(statearr_48551_48578[(2)] = inst_48504);

(statearr_48551_48578[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (16))){
var state_48533__$1 = state_48533;
var statearr_48552_48579 = state_48533__$1;
(statearr_48552_48579[(2)] = null);

(statearr_48552_48579[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (10))){
var inst_48525 = (state_48533[(2)]);
var state_48533__$1 = (function (){var statearr_48553 = state_48533;
(statearr_48553[(11)] = inst_48525);

return statearr_48553;
})();
var statearr_48554_48580 = state_48533__$1;
(statearr_48554_48580[(2)] = null);

(statearr_48554_48580[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48534 === (8))){
var inst_48492 = (state_48533[(9)]);
var inst_48496 = figwheel.client.reload_file_state_QMARK_.call(null,inst_48492,opts);
var state_48533__$1 = state_48533;
if(cljs.core.truth_(inst_48496)){
var statearr_48555_48581 = state_48533__$1;
(statearr_48555_48581[(1)] = (11));

} else {
var statearr_48556_48582 = state_48533__$1;
(statearr_48556_48582[(1)] = (12));

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
});})(c__28009__auto___48564,ch))
;
return ((function (switch__27988__auto__,c__28009__auto___48564,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____0 = (function (){
var statearr_48560 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48560[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__);

(statearr_48560[(1)] = (1));

return statearr_48560;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____1 = (function (state_48533){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_48533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e48561){if((e48561 instanceof Object)){
var ex__27992__auto__ = e48561;
var statearr_48562_48583 = state_48533;
(statearr_48562_48583[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48561;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48584 = state_48533;
state_48533 = G__48584;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__ = function(state_48533){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____1.call(this,state_48533);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___48564,ch))
})();
var state__28011__auto__ = (function (){var statearr_48563 = f__28010__auto__.call(null);
(statearr_48563[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___48564);

return statearr_48563;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___48564,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__48585_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__48585_SHARP_));
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
var base_path_48588 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_48588){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e48587){if((e48587 instanceof Error)){
var e = e48587;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_48588], null));
} else {
var e = e48587;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_48588))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__48589){
var map__48598 = p__48589;
var map__48598__$1 = ((((!((map__48598 == null)))?((((map__48598.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48598.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48598):map__48598);
var opts = map__48598__$1;
var build_id = cljs.core.get.call(null,map__48598__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__48598,map__48598__$1,opts,build_id){
return (function (p__48600){
var vec__48601 = p__48600;
var seq__48602 = cljs.core.seq.call(null,vec__48601);
var first__48603 = cljs.core.first.call(null,seq__48602);
var seq__48602__$1 = cljs.core.next.call(null,seq__48602);
var map__48604 = first__48603;
var map__48604__$1 = ((((!((map__48604 == null)))?((((map__48604.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48604.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48604):map__48604);
var msg = map__48604__$1;
var msg_name = cljs.core.get.call(null,map__48604__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48602__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__48601,seq__48602,first__48603,seq__48602__$1,map__48604,map__48604__$1,msg,msg_name,_,map__48598,map__48598__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__48601,seq__48602,first__48603,seq__48602__$1,map__48604,map__48604__$1,msg,msg_name,_,map__48598,map__48598__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__48598,map__48598__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__48612){
var vec__48613 = p__48612;
var seq__48614 = cljs.core.seq.call(null,vec__48613);
var first__48615 = cljs.core.first.call(null,seq__48614);
var seq__48614__$1 = cljs.core.next.call(null,seq__48614);
var map__48616 = first__48615;
var map__48616__$1 = ((((!((map__48616 == null)))?((((map__48616.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48616.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48616):map__48616);
var msg = map__48616__$1;
var msg_name = cljs.core.get.call(null,map__48616__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48614__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__48618){
var map__48630 = p__48618;
var map__48630__$1 = ((((!((map__48630 == null)))?((((map__48630.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48630.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48630):map__48630);
var on_compile_warning = cljs.core.get.call(null,map__48630__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__48630__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__48630,map__48630__$1,on_compile_warning,on_compile_fail){
return (function (p__48632){
var vec__48633 = p__48632;
var seq__48634 = cljs.core.seq.call(null,vec__48633);
var first__48635 = cljs.core.first.call(null,seq__48634);
var seq__48634__$1 = cljs.core.next.call(null,seq__48634);
var map__48636 = first__48635;
var map__48636__$1 = ((((!((map__48636 == null)))?((((map__48636.cljs$lang$protocol_mask$partition0$ & (64))) || (map__48636.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__48636):map__48636);
var msg = map__48636__$1;
var msg_name = cljs.core.get.call(null,map__48636__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__48634__$1;
var pred__48638 = cljs.core._EQ_;
var expr__48639 = msg_name;
if(cljs.core.truth_(pred__48638.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__48639))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__48638.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__48639))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__48630,map__48630__$1,on_compile_warning,on_compile_fail))
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
var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,msg_hist,msg_names,msg){
return (function (state_48867){
var state_val_48868 = (state_48867[(1)]);
if((state_val_48868 === (7))){
var inst_48787 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
if(cljs.core.truth_(inst_48787)){
var statearr_48869_48919 = state_48867__$1;
(statearr_48869_48919[(1)] = (8));

} else {
var statearr_48870_48920 = state_48867__$1;
(statearr_48870_48920[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (20))){
var inst_48861 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48871_48921 = state_48867__$1;
(statearr_48871_48921[(2)] = inst_48861);

(statearr_48871_48921[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (27))){
var inst_48857 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48872_48922 = state_48867__$1;
(statearr_48872_48922[(2)] = inst_48857);

(statearr_48872_48922[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (1))){
var inst_48780 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_48867__$1 = state_48867;
if(cljs.core.truth_(inst_48780)){
var statearr_48873_48923 = state_48867__$1;
(statearr_48873_48923[(1)] = (2));

} else {
var statearr_48874_48924 = state_48867__$1;
(statearr_48874_48924[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (24))){
var inst_48859 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48875_48925 = state_48867__$1;
(statearr_48875_48925[(2)] = inst_48859);

(statearr_48875_48925[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (4))){
var inst_48865 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_48867__$1,inst_48865);
} else {
if((state_val_48868 === (15))){
var inst_48863 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48876_48926 = state_48867__$1;
(statearr_48876_48926[(2)] = inst_48863);

(statearr_48876_48926[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (21))){
var inst_48816 = (state_48867[(2)]);
var inst_48817 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48818 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48817);
var state_48867__$1 = (function (){var statearr_48877 = state_48867;
(statearr_48877[(7)] = inst_48816);

return statearr_48877;
})();
var statearr_48878_48927 = state_48867__$1;
(statearr_48878_48927[(2)] = inst_48818);

(statearr_48878_48927[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (31))){
var inst_48846 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_48867__$1 = state_48867;
if(cljs.core.truth_(inst_48846)){
var statearr_48879_48928 = state_48867__$1;
(statearr_48879_48928[(1)] = (34));

} else {
var statearr_48880_48929 = state_48867__$1;
(statearr_48880_48929[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (32))){
var inst_48855 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48881_48930 = state_48867__$1;
(statearr_48881_48930[(2)] = inst_48855);

(statearr_48881_48930[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (33))){
var inst_48842 = (state_48867[(2)]);
var inst_48843 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48844 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48843);
var state_48867__$1 = (function (){var statearr_48882 = state_48867;
(statearr_48882[(8)] = inst_48842);

return statearr_48882;
})();
var statearr_48883_48931 = state_48867__$1;
(statearr_48883_48931[(2)] = inst_48844);

(statearr_48883_48931[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (13))){
var inst_48801 = figwheel.client.heads_up.clear.call(null);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(16),inst_48801);
} else {
if((state_val_48868 === (22))){
var inst_48822 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48823 = figwheel.client.heads_up.append_warning_message.call(null,inst_48822);
var state_48867__$1 = state_48867;
var statearr_48884_48932 = state_48867__$1;
(statearr_48884_48932[(2)] = inst_48823);

(statearr_48884_48932[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (36))){
var inst_48853 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48885_48933 = state_48867__$1;
(statearr_48885_48933[(2)] = inst_48853);

(statearr_48885_48933[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (29))){
var inst_48833 = (state_48867[(2)]);
var inst_48834 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48835 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48834);
var state_48867__$1 = (function (){var statearr_48886 = state_48867;
(statearr_48886[(9)] = inst_48833);

return statearr_48886;
})();
var statearr_48887_48934 = state_48867__$1;
(statearr_48887_48934[(2)] = inst_48835);

(statearr_48887_48934[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (6))){
var inst_48782 = (state_48867[(10)]);
var state_48867__$1 = state_48867;
var statearr_48888_48935 = state_48867__$1;
(statearr_48888_48935[(2)] = inst_48782);

(statearr_48888_48935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (28))){
var inst_48829 = (state_48867[(2)]);
var inst_48830 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48831 = figwheel.client.heads_up.display_warning.call(null,inst_48830);
var state_48867__$1 = (function (){var statearr_48889 = state_48867;
(statearr_48889[(11)] = inst_48829);

return statearr_48889;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(29),inst_48831);
} else {
if((state_val_48868 === (25))){
var inst_48827 = figwheel.client.heads_up.clear.call(null);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(28),inst_48827);
} else {
if((state_val_48868 === (34))){
var inst_48848 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(37),inst_48848);
} else {
if((state_val_48868 === (17))){
var inst_48807 = (state_48867[(2)]);
var inst_48808 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48809 = figwheel.client.auto_jump_to_error.call(null,opts,inst_48808);
var state_48867__$1 = (function (){var statearr_48890 = state_48867;
(statearr_48890[(12)] = inst_48807);

return statearr_48890;
})();
var statearr_48891_48936 = state_48867__$1;
(statearr_48891_48936[(2)] = inst_48809);

(statearr_48891_48936[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (3))){
var inst_48799 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_48867__$1 = state_48867;
if(cljs.core.truth_(inst_48799)){
var statearr_48892_48937 = state_48867__$1;
(statearr_48892_48937[(1)] = (13));

} else {
var statearr_48893_48938 = state_48867__$1;
(statearr_48893_48938[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (12))){
var inst_48795 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48894_48939 = state_48867__$1;
(statearr_48894_48939[(2)] = inst_48795);

(statearr_48894_48939[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (2))){
var inst_48782 = (state_48867[(10)]);
var inst_48782__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_48867__$1 = (function (){var statearr_48895 = state_48867;
(statearr_48895[(10)] = inst_48782__$1);

return statearr_48895;
})();
if(cljs.core.truth_(inst_48782__$1)){
var statearr_48896_48940 = state_48867__$1;
(statearr_48896_48940[(1)] = (5));

} else {
var statearr_48897_48941 = state_48867__$1;
(statearr_48897_48941[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (23))){
var inst_48825 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_48867__$1 = state_48867;
if(cljs.core.truth_(inst_48825)){
var statearr_48898_48942 = state_48867__$1;
(statearr_48898_48942[(1)] = (25));

} else {
var statearr_48899_48943 = state_48867__$1;
(statearr_48899_48943[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (35))){
var state_48867__$1 = state_48867;
var statearr_48900_48944 = state_48867__$1;
(statearr_48900_48944[(2)] = null);

(statearr_48900_48944[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (19))){
var inst_48820 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_48867__$1 = state_48867;
if(cljs.core.truth_(inst_48820)){
var statearr_48901_48945 = state_48867__$1;
(statearr_48901_48945[(1)] = (22));

} else {
var statearr_48902_48946 = state_48867__$1;
(statearr_48902_48946[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (11))){
var inst_48791 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48903_48947 = state_48867__$1;
(statearr_48903_48947[(2)] = inst_48791);

(statearr_48903_48947[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (9))){
var inst_48793 = figwheel.client.heads_up.clear.call(null);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(12),inst_48793);
} else {
if((state_val_48868 === (5))){
var inst_48784 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_48867__$1 = state_48867;
var statearr_48904_48948 = state_48867__$1;
(statearr_48904_48948[(2)] = inst_48784);

(statearr_48904_48948[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (14))){
var inst_48811 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_48867__$1 = state_48867;
if(cljs.core.truth_(inst_48811)){
var statearr_48905_48949 = state_48867__$1;
(statearr_48905_48949[(1)] = (18));

} else {
var statearr_48906_48950 = state_48867__$1;
(statearr_48906_48950[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (26))){
var inst_48837 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_48867__$1 = state_48867;
if(cljs.core.truth_(inst_48837)){
var statearr_48907_48951 = state_48867__$1;
(statearr_48907_48951[(1)] = (30));

} else {
var statearr_48908_48952 = state_48867__$1;
(statearr_48908_48952[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (16))){
var inst_48803 = (state_48867[(2)]);
var inst_48804 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48805 = figwheel.client.heads_up.display_exception.call(null,inst_48804);
var state_48867__$1 = (function (){var statearr_48909 = state_48867;
(statearr_48909[(13)] = inst_48803);

return statearr_48909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(17),inst_48805);
} else {
if((state_val_48868 === (30))){
var inst_48839 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48840 = figwheel.client.heads_up.display_warning.call(null,inst_48839);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(33),inst_48840);
} else {
if((state_val_48868 === (10))){
var inst_48797 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48910_48953 = state_48867__$1;
(statearr_48910_48953[(2)] = inst_48797);

(statearr_48910_48953[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (18))){
var inst_48813 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_48814 = figwheel.client.heads_up.display_exception.call(null,inst_48813);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(21),inst_48814);
} else {
if((state_val_48868 === (37))){
var inst_48850 = (state_48867[(2)]);
var state_48867__$1 = state_48867;
var statearr_48911_48954 = state_48867__$1;
(statearr_48911_48954[(2)] = inst_48850);

(statearr_48911_48954[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_48868 === (8))){
var inst_48789 = figwheel.client.heads_up.flash_loaded.call(null);
var state_48867__$1 = state_48867;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_48867__$1,(11),inst_48789);
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
});})(c__28009__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__27988__auto__,c__28009__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____0 = (function (){
var statearr_48915 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_48915[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__);

(statearr_48915[(1)] = (1));

return statearr_48915;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____1 = (function (state_48867){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_48867);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e48916){if((e48916 instanceof Object)){
var ex__27992__auto__ = e48916;
var statearr_48917_48955 = state_48867;
(statearr_48917_48955[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_48867);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e48916;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__48956 = state_48867;
state_48867 = G__48956;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__ = function(state_48867){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____1.call(this,state_48867);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,msg_hist,msg_names,msg))
})();
var state__28011__auto__ = (function (){var statearr_48918 = f__28010__auto__.call(null);
(statearr_48918[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_48918;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,msg_hist,msg_names,msg))
);

return c__28009__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28009__auto___49019 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___49019,ch){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___49019,ch){
return (function (state_49002){
var state_val_49003 = (state_49002[(1)]);
if((state_val_49003 === (1))){
var state_49002__$1 = state_49002;
var statearr_49004_49020 = state_49002__$1;
(statearr_49004_49020[(2)] = null);

(statearr_49004_49020[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (2))){
var state_49002__$1 = state_49002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49002__$1,(4),ch);
} else {
if((state_val_49003 === (3))){
var inst_49000 = (state_49002[(2)]);
var state_49002__$1 = state_49002;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49002__$1,inst_49000);
} else {
if((state_val_49003 === (4))){
var inst_48990 = (state_49002[(7)]);
var inst_48990__$1 = (state_49002[(2)]);
var state_49002__$1 = (function (){var statearr_49005 = state_49002;
(statearr_49005[(7)] = inst_48990__$1);

return statearr_49005;
})();
if(cljs.core.truth_(inst_48990__$1)){
var statearr_49006_49021 = state_49002__$1;
(statearr_49006_49021[(1)] = (5));

} else {
var statearr_49007_49022 = state_49002__$1;
(statearr_49007_49022[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (5))){
var inst_48990 = (state_49002[(7)]);
var inst_48992 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_48990);
var state_49002__$1 = state_49002;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49002__$1,(8),inst_48992);
} else {
if((state_val_49003 === (6))){
var state_49002__$1 = state_49002;
var statearr_49008_49023 = state_49002__$1;
(statearr_49008_49023[(2)] = null);

(statearr_49008_49023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (7))){
var inst_48998 = (state_49002[(2)]);
var state_49002__$1 = state_49002;
var statearr_49009_49024 = state_49002__$1;
(statearr_49009_49024[(2)] = inst_48998);

(statearr_49009_49024[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_49003 === (8))){
var inst_48994 = (state_49002[(2)]);
var state_49002__$1 = (function (){var statearr_49010 = state_49002;
(statearr_49010[(8)] = inst_48994);

return statearr_49010;
})();
var statearr_49011_49025 = state_49002__$1;
(statearr_49011_49025[(2)] = null);

(statearr_49011_49025[(1)] = (2));


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
});})(c__28009__auto___49019,ch))
;
return ((function (switch__27988__auto__,c__28009__auto___49019,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27989__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27989__auto____0 = (function (){
var statearr_49015 = [null,null,null,null,null,null,null,null,null];
(statearr_49015[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27989__auto__);

(statearr_49015[(1)] = (1));

return statearr_49015;
});
var figwheel$client$heads_up_plugin_$_state_machine__27989__auto____1 = (function (state_49002){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_49002);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e49016){if((e49016 instanceof Object)){
var ex__27992__auto__ = e49016;
var statearr_49017_49026 = state_49002;
(statearr_49017_49026[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49002);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49016;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49027 = state_49002;
state_49002 = G__49027;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27989__auto__ = function(state_49002){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27989__auto____1.call(this,state_49002);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27989__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27989__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___49019,ch))
})();
var state__28011__auto__ = (function (){var statearr_49018 = f__28010__auto__.call(null);
(statearr_49018[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___49019);

return statearr_49018;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___49019,ch))
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
var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__){
return (function (state_49048){
var state_val_49049 = (state_49048[(1)]);
if((state_val_49049 === (1))){
var inst_49043 = cljs.core.async.timeout.call(null,(3000));
var state_49048__$1 = state_49048;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49048__$1,(2),inst_49043);
} else {
if((state_val_49049 === (2))){
var inst_49045 = (state_49048[(2)]);
var inst_49046 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_49048__$1 = (function (){var statearr_49050 = state_49048;
(statearr_49050[(7)] = inst_49045);

return statearr_49050;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49048__$1,inst_49046);
} else {
return null;
}
}
});})(c__28009__auto__))
;
return ((function (switch__27988__auto__,c__28009__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____0 = (function (){
var statearr_49054 = [null,null,null,null,null,null,null,null];
(statearr_49054[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__);

(statearr_49054[(1)] = (1));

return statearr_49054;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____1 = (function (state_49048){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_49048);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e49055){if((e49055 instanceof Object)){
var ex__27992__auto__ = e49055;
var statearr_49056_49058 = state_49048;
(statearr_49056_49058[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49048);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49055;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49059 = state_49048;
state_49048 = G__49059;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__ = function(state_49048){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____1.call(this,state_49048);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_49057 = f__28010__auto__.call(null);
(statearr_49057[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_49057;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__))
);

return c__28009__auto__;
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
var c__28009__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto__,figwheel_version,temp__4657__auto__){
return (function (state_49082){
var state_val_49083 = (state_49082[(1)]);
if((state_val_49083 === (1))){
var inst_49076 = cljs.core.async.timeout.call(null,(2000));
var state_49082__$1 = state_49082;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_49082__$1,(2),inst_49076);
} else {
if((state_val_49083 === (2))){
var inst_49078 = (state_49082[(2)]);
var inst_49079 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_49080 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_49079);
var state_49082__$1 = (function (){var statearr_49084 = state_49082;
(statearr_49084[(7)] = inst_49078);

return statearr_49084;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_49082__$1,inst_49080);
} else {
return null;
}
}
});})(c__28009__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__27988__auto__,c__28009__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____0 = (function (){
var statearr_49088 = [null,null,null,null,null,null,null,null];
(statearr_49088[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__);

(statearr_49088[(1)] = (1));

return statearr_49088;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____1 = (function (state_49082){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_49082);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e49089){if((e49089 instanceof Object)){
var ex__27992__auto__ = e49089;
var statearr_49090_49092 = state_49082;
(statearr_49090_49092[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_49082);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e49089;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__49093 = state_49082;
state_49082 = G__49093;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__ = function(state_49082){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____1.call(this,state_49082);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28011__auto__ = (function (){var statearr_49091 = f__28010__auto__.call(null);
(statearr_49091[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_49091;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,figwheel_version,temp__4657__auto__))
);

return c__28009__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__49094){
var map__49098 = p__49094;
var map__49098__$1 = ((((!((map__49098 == null)))?((((map__49098.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49098.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49098):map__49098);
var file = cljs.core.get.call(null,map__49098__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__49098__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__49098__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__49100 = "";
var G__49100__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__49100),cljs.core.str("file "),cljs.core.str(file)].join(''):G__49100);
var G__49100__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__49100__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__49100__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__49100__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__49100__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__49101){
var map__49108 = p__49101;
var map__49108__$1 = ((((!((map__49108 == null)))?((((map__49108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49108):map__49108);
var ed = map__49108__$1;
var formatted_exception = cljs.core.get.call(null,map__49108__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__49108__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__49108__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__49110_49114 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__49111_49115 = null;
var count__49112_49116 = (0);
var i__49113_49117 = (0);
while(true){
if((i__49113_49117 < count__49112_49116)){
var msg_49118 = cljs.core._nth.call(null,chunk__49111_49115,i__49113_49117);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49118);

var G__49119 = seq__49110_49114;
var G__49120 = chunk__49111_49115;
var G__49121 = count__49112_49116;
var G__49122 = (i__49113_49117 + (1));
seq__49110_49114 = G__49119;
chunk__49111_49115 = G__49120;
count__49112_49116 = G__49121;
i__49113_49117 = G__49122;
continue;
} else {
var temp__4657__auto___49123 = cljs.core.seq.call(null,seq__49110_49114);
if(temp__4657__auto___49123){
var seq__49110_49124__$1 = temp__4657__auto___49123;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49110_49124__$1)){
var c__26790__auto___49125 = cljs.core.chunk_first.call(null,seq__49110_49124__$1);
var G__49126 = cljs.core.chunk_rest.call(null,seq__49110_49124__$1);
var G__49127 = c__26790__auto___49125;
var G__49128 = cljs.core.count.call(null,c__26790__auto___49125);
var G__49129 = (0);
seq__49110_49114 = G__49126;
chunk__49111_49115 = G__49127;
count__49112_49116 = G__49128;
i__49113_49117 = G__49129;
continue;
} else {
var msg_49130 = cljs.core.first.call(null,seq__49110_49124__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_49130);

var G__49131 = cljs.core.next.call(null,seq__49110_49124__$1);
var G__49132 = null;
var G__49133 = (0);
var G__49134 = (0);
seq__49110_49114 = G__49131;
chunk__49111_49115 = G__49132;
count__49112_49116 = G__49133;
i__49113_49117 = G__49134;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__49135){
var map__49138 = p__49135;
var map__49138__$1 = ((((!((map__49138 == null)))?((((map__49138.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49138.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49138):map__49138);
var w = map__49138__$1;
var message = cljs.core.get.call(null,map__49138__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__49150 = cljs.core.seq.call(null,plugins);
var chunk__49151 = null;
var count__49152 = (0);
var i__49153 = (0);
while(true){
if((i__49153 < count__49152)){
var vec__49154 = cljs.core._nth.call(null,chunk__49151,i__49153);
var k = cljs.core.nth.call(null,vec__49154,(0),null);
var plugin = cljs.core.nth.call(null,vec__49154,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49160 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49150,chunk__49151,count__49152,i__49153,pl_49160,vec__49154,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_49160.call(null,msg_hist);
});})(seq__49150,chunk__49151,count__49152,i__49153,pl_49160,vec__49154,k,plugin))
);
} else {
}

var G__49161 = seq__49150;
var G__49162 = chunk__49151;
var G__49163 = count__49152;
var G__49164 = (i__49153 + (1));
seq__49150 = G__49161;
chunk__49151 = G__49162;
count__49152 = G__49163;
i__49153 = G__49164;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__49150);
if(temp__4657__auto__){
var seq__49150__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49150__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__49150__$1);
var G__49165 = cljs.core.chunk_rest.call(null,seq__49150__$1);
var G__49166 = c__26790__auto__;
var G__49167 = cljs.core.count.call(null,c__26790__auto__);
var G__49168 = (0);
seq__49150 = G__49165;
chunk__49151 = G__49166;
count__49152 = G__49167;
i__49153 = G__49168;
continue;
} else {
var vec__49157 = cljs.core.first.call(null,seq__49150__$1);
var k = cljs.core.nth.call(null,vec__49157,(0),null);
var plugin = cljs.core.nth.call(null,vec__49157,(1),null);
if(cljs.core.truth_(plugin)){
var pl_49169 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__49150,chunk__49151,count__49152,i__49153,pl_49169,vec__49157,k,plugin,seq__49150__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_49169.call(null,msg_hist);
});})(seq__49150,chunk__49151,count__49152,i__49153,pl_49169,vec__49157,k,plugin,seq__49150__$1,temp__4657__auto__))
);
} else {
}

var G__49170 = cljs.core.next.call(null,seq__49150__$1);
var G__49171 = null;
var G__49172 = (0);
var G__49173 = (0);
seq__49150 = G__49170;
chunk__49151 = G__49171;
count__49152 = G__49172;
i__49153 = G__49173;
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
var args49174 = [];
var len__27054__auto___49181 = arguments.length;
var i__27055__auto___49182 = (0);
while(true){
if((i__27055__auto___49182 < len__27054__auto___49181)){
args49174.push((arguments[i__27055__auto___49182]));

var G__49183 = (i__27055__auto___49182 + (1));
i__27055__auto___49182 = G__49183;
continue;
} else {
}
break;
}

var G__49176 = args49174.length;
switch (G__49176) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args49174.length)].join('')));

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

var seq__49177_49185 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__49178_49186 = null;
var count__49179_49187 = (0);
var i__49180_49188 = (0);
while(true){
if((i__49180_49188 < count__49179_49187)){
var msg_49189 = cljs.core._nth.call(null,chunk__49178_49186,i__49180_49188);
figwheel.client.socket.handle_incoming_message.call(null,msg_49189);

var G__49190 = seq__49177_49185;
var G__49191 = chunk__49178_49186;
var G__49192 = count__49179_49187;
var G__49193 = (i__49180_49188 + (1));
seq__49177_49185 = G__49190;
chunk__49178_49186 = G__49191;
count__49179_49187 = G__49192;
i__49180_49188 = G__49193;
continue;
} else {
var temp__4657__auto___49194 = cljs.core.seq.call(null,seq__49177_49185);
if(temp__4657__auto___49194){
var seq__49177_49195__$1 = temp__4657__auto___49194;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__49177_49195__$1)){
var c__26790__auto___49196 = cljs.core.chunk_first.call(null,seq__49177_49195__$1);
var G__49197 = cljs.core.chunk_rest.call(null,seq__49177_49195__$1);
var G__49198 = c__26790__auto___49196;
var G__49199 = cljs.core.count.call(null,c__26790__auto___49196);
var G__49200 = (0);
seq__49177_49185 = G__49197;
chunk__49178_49186 = G__49198;
count__49179_49187 = G__49199;
i__49180_49188 = G__49200;
continue;
} else {
var msg_49201 = cljs.core.first.call(null,seq__49177_49195__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_49201);

var G__49202 = cljs.core.next.call(null,seq__49177_49195__$1);
var G__49203 = null;
var G__49204 = (0);
var G__49205 = (0);
seq__49177_49185 = G__49202;
chunk__49178_49186 = G__49203;
count__49179_49187 = G__49204;
i__49180_49188 = G__49205;
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
var len__27054__auto___49210 = arguments.length;
var i__27055__auto___49211 = (0);
while(true){
if((i__27055__auto___49211 < len__27054__auto___49210)){
args__27061__auto__.push((arguments[i__27055__auto___49211]));

var G__49212 = (i__27055__auto___49211 + (1));
i__27055__auto___49211 = G__49212;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__49207){
var map__49208 = p__49207;
var map__49208__$1 = ((((!((map__49208 == null)))?((((map__49208.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49208.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49208):map__49208);
var opts = map__49208__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq49206){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq49206));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e49214){if((e49214 instanceof Error)){
var e = e49214;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e49214;

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
return (function (p__49218){
var map__49219 = p__49218;
var map__49219__$1 = ((((!((map__49219 == null)))?((((map__49219.cljs$lang$protocol_mask$partition0$ & (64))) || (map__49219.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__49219):map__49219);
var msg_name = cljs.core.get.call(null,map__49219__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1500064941371