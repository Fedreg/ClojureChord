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
var args36210 = [];
var len__27054__auto___36213 = arguments.length;
var i__27055__auto___36214 = (0);
while(true){
if((i__27055__auto___36214 < len__27054__auto___36213)){
args36210.push((arguments[i__27055__auto___36214]));

var G__36215 = (i__27055__auto___36214 + (1));
i__27055__auto___36214 = G__36215;
continue;
} else {
}
break;
}

var G__36212 = args36210.length;
switch (G__36212) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36210.length)].join('')));

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
var len__27054__auto___36218 = arguments.length;
var i__27055__auto___36219 = (0);
while(true){
if((i__27055__auto___36219 < len__27054__auto___36218)){
args__27061__auto__.push((arguments[i__27055__auto___36219]));

var G__36220 = (i__27055__auto___36219 + (1));
i__27055__auto___36219 = G__36220;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36217){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36217));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36222 = arguments.length;
var i__27055__auto___36223 = (0);
while(true){
if((i__27055__auto___36223 < len__27054__auto___36222)){
args__27061__auto__.push((arguments[i__27055__auto___36223]));

var G__36224 = (i__27055__auto___36223 + (1));
i__27055__auto___36223 = G__36224;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36221){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36221));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36225){
var map__36228 = p__36225;
var map__36228__$1 = ((((!((map__36228 == null)))?((((map__36228.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36228.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36228):map__36228);
var message = cljs.core.get.call(null,map__36228__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36228__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28842__auto___36390 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___36390,ch){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___36390,ch){
return (function (state_36359){
var state_val_36360 = (state_36359[(1)]);
if((state_val_36360 === (7))){
var inst_36355 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
var statearr_36361_36391 = state_36359__$1;
(statearr_36361_36391[(2)] = inst_36355);

(statearr_36361_36391[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (1))){
var state_36359__$1 = state_36359;
var statearr_36362_36392 = state_36359__$1;
(statearr_36362_36392[(2)] = null);

(statearr_36362_36392[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (4))){
var inst_36312 = (state_36359[(7)]);
var inst_36312__$1 = (state_36359[(2)]);
var state_36359__$1 = (function (){var statearr_36363 = state_36359;
(statearr_36363[(7)] = inst_36312__$1);

return statearr_36363;
})();
if(cljs.core.truth_(inst_36312__$1)){
var statearr_36364_36393 = state_36359__$1;
(statearr_36364_36393[(1)] = (5));

} else {
var statearr_36365_36394 = state_36359__$1;
(statearr_36365_36394[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (15))){
var inst_36319 = (state_36359[(8)]);
var inst_36334 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36319);
var inst_36335 = cljs.core.first.call(null,inst_36334);
var inst_36336 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36335);
var inst_36337 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36336)].join('');
var inst_36338 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36337);
var state_36359__$1 = state_36359;
var statearr_36366_36395 = state_36359__$1;
(statearr_36366_36395[(2)] = inst_36338);

(statearr_36366_36395[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (13))){
var inst_36343 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
var statearr_36367_36396 = state_36359__$1;
(statearr_36367_36396[(2)] = inst_36343);

(statearr_36367_36396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (6))){
var state_36359__$1 = state_36359;
var statearr_36368_36397 = state_36359__$1;
(statearr_36368_36397[(2)] = null);

(statearr_36368_36397[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (17))){
var inst_36341 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
var statearr_36369_36398 = state_36359__$1;
(statearr_36369_36398[(2)] = inst_36341);

(statearr_36369_36398[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (3))){
var inst_36357 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36359__$1,inst_36357);
} else {
if((state_val_36360 === (12))){
var inst_36318 = (state_36359[(9)]);
var inst_36332 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36318,opts);
var state_36359__$1 = state_36359;
if(cljs.core.truth_(inst_36332)){
var statearr_36370_36399 = state_36359__$1;
(statearr_36370_36399[(1)] = (15));

} else {
var statearr_36371_36400 = state_36359__$1;
(statearr_36371_36400[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (2))){
var state_36359__$1 = state_36359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36359__$1,(4),ch);
} else {
if((state_val_36360 === (11))){
var inst_36319 = (state_36359[(8)]);
var inst_36324 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36325 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36319);
var inst_36326 = cljs.core.async.timeout.call(null,(1000));
var inst_36327 = [inst_36325,inst_36326];
var inst_36328 = (new cljs.core.PersistentVector(null,2,(5),inst_36324,inst_36327,null));
var state_36359__$1 = state_36359;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36359__$1,(14),inst_36328);
} else {
if((state_val_36360 === (9))){
var inst_36319 = (state_36359[(8)]);
var inst_36345 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36346 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36319);
var inst_36347 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36346);
var inst_36348 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36347)].join('');
var inst_36349 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36348);
var state_36359__$1 = (function (){var statearr_36372 = state_36359;
(statearr_36372[(10)] = inst_36345);

return statearr_36372;
})();
var statearr_36373_36401 = state_36359__$1;
(statearr_36373_36401[(2)] = inst_36349);

(statearr_36373_36401[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (5))){
var inst_36312 = (state_36359[(7)]);
var inst_36314 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36315 = (new cljs.core.PersistentArrayMap(null,2,inst_36314,null));
var inst_36316 = (new cljs.core.PersistentHashSet(null,inst_36315,null));
var inst_36317 = figwheel.client.focus_msgs.call(null,inst_36316,inst_36312);
var inst_36318 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36317);
var inst_36319 = cljs.core.first.call(null,inst_36317);
var inst_36320 = figwheel.client.autoload_QMARK_.call(null);
var state_36359__$1 = (function (){var statearr_36374 = state_36359;
(statearr_36374[(9)] = inst_36318);

(statearr_36374[(8)] = inst_36319);

return statearr_36374;
})();
if(cljs.core.truth_(inst_36320)){
var statearr_36375_36402 = state_36359__$1;
(statearr_36375_36402[(1)] = (8));

} else {
var statearr_36376_36403 = state_36359__$1;
(statearr_36376_36403[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (14))){
var inst_36330 = (state_36359[(2)]);
var state_36359__$1 = state_36359;
var statearr_36377_36404 = state_36359__$1;
(statearr_36377_36404[(2)] = inst_36330);

(statearr_36377_36404[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (16))){
var state_36359__$1 = state_36359;
var statearr_36378_36405 = state_36359__$1;
(statearr_36378_36405[(2)] = null);

(statearr_36378_36405[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (10))){
var inst_36351 = (state_36359[(2)]);
var state_36359__$1 = (function (){var statearr_36379 = state_36359;
(statearr_36379[(11)] = inst_36351);

return statearr_36379;
})();
var statearr_36380_36406 = state_36359__$1;
(statearr_36380_36406[(2)] = null);

(statearr_36380_36406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36360 === (8))){
var inst_36318 = (state_36359[(9)]);
var inst_36322 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36318,opts);
var state_36359__$1 = state_36359;
if(cljs.core.truth_(inst_36322)){
var statearr_36381_36407 = state_36359__$1;
(statearr_36381_36407[(1)] = (11));

} else {
var statearr_36382_36408 = state_36359__$1;
(statearr_36382_36408[(1)] = (12));

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
});})(c__28842__auto___36390,ch))
;
return ((function (switch__28730__auto__,c__28842__auto___36390,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28731__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28731__auto____0 = (function (){
var statearr_36386 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36386[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28731__auto__);

(statearr_36386[(1)] = (1));

return statearr_36386;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28731__auto____1 = (function (state_36359){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_36359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e36387){if((e36387 instanceof Object)){
var ex__28734__auto__ = e36387;
var statearr_36388_36409 = state_36359;
(statearr_36388_36409[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36387;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36410 = state_36359;
state_36359 = G__36410;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28731__auto__ = function(state_36359){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28731__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28731__auto____1.call(this,state_36359);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28731__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28731__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___36390,ch))
})();
var state__28844__auto__ = (function (){var statearr_36389 = f__28843__auto__.call(null);
(statearr_36389[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___36390);

return statearr_36389;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___36390,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__36411_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__36411_SHARP_));
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
var base_path_36414 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_36414){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e36413){if((e36413 instanceof Error)){
var e = e36413;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_36414], null));
} else {
var e = e36413;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_36414))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__36415){
var map__36424 = p__36415;
var map__36424__$1 = ((((!((map__36424 == null)))?((((map__36424.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36424.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36424):map__36424);
var opts = map__36424__$1;
var build_id = cljs.core.get.call(null,map__36424__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__36424,map__36424__$1,opts,build_id){
return (function (p__36426){
var vec__36427 = p__36426;
var seq__36428 = cljs.core.seq.call(null,vec__36427);
var first__36429 = cljs.core.first.call(null,seq__36428);
var seq__36428__$1 = cljs.core.next.call(null,seq__36428);
var map__36430 = first__36429;
var map__36430__$1 = ((((!((map__36430 == null)))?((((map__36430.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36430.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36430):map__36430);
var msg = map__36430__$1;
var msg_name = cljs.core.get.call(null,map__36430__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36428__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__36427,seq__36428,first__36429,seq__36428__$1,map__36430,map__36430__$1,msg,msg_name,_,map__36424,map__36424__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__36427,seq__36428,first__36429,seq__36428__$1,map__36430,map__36430__$1,msg,msg_name,_,map__36424,map__36424__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__36424,map__36424__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__36438){
var vec__36439 = p__36438;
var seq__36440 = cljs.core.seq.call(null,vec__36439);
var first__36441 = cljs.core.first.call(null,seq__36440);
var seq__36440__$1 = cljs.core.next.call(null,seq__36440);
var map__36442 = first__36441;
var map__36442__$1 = ((((!((map__36442 == null)))?((((map__36442.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36442.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36442):map__36442);
var msg = map__36442__$1;
var msg_name = cljs.core.get.call(null,map__36442__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36440__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__36444){
var map__36456 = p__36444;
var map__36456__$1 = ((((!((map__36456 == null)))?((((map__36456.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36456.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36456):map__36456);
var on_compile_warning = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__36456__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__36456,map__36456__$1,on_compile_warning,on_compile_fail){
return (function (p__36458){
var vec__36459 = p__36458;
var seq__36460 = cljs.core.seq.call(null,vec__36459);
var first__36461 = cljs.core.first.call(null,seq__36460);
var seq__36460__$1 = cljs.core.next.call(null,seq__36460);
var map__36462 = first__36461;
var map__36462__$1 = ((((!((map__36462 == null)))?((((map__36462.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36462.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36462):map__36462);
var msg = map__36462__$1;
var msg_name = cljs.core.get.call(null,map__36462__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__36460__$1;
var pred__36464 = cljs.core._EQ_;
var expr__36465 = msg_name;
if(cljs.core.truth_(pred__36464.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__36465))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__36464.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__36465))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__36456,map__36456__$1,on_compile_warning,on_compile_fail))
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
var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__,msg_hist,msg_names,msg){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__,msg_hist,msg_names,msg){
return (function (state_36693){
var state_val_36694 = (state_36693[(1)]);
if((state_val_36694 === (7))){
var inst_36613 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36613)){
var statearr_36695_36745 = state_36693__$1;
(statearr_36695_36745[(1)] = (8));

} else {
var statearr_36696_36746 = state_36693__$1;
(statearr_36696_36746[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (20))){
var inst_36687 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36697_36747 = state_36693__$1;
(statearr_36697_36747[(2)] = inst_36687);

(statearr_36697_36747[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (27))){
var inst_36683 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36698_36748 = state_36693__$1;
(statearr_36698_36748[(2)] = inst_36683);

(statearr_36698_36748[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (1))){
var inst_36606 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36606)){
var statearr_36699_36749 = state_36693__$1;
(statearr_36699_36749[(1)] = (2));

} else {
var statearr_36700_36750 = state_36693__$1;
(statearr_36700_36750[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (24))){
var inst_36685 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36701_36751 = state_36693__$1;
(statearr_36701_36751[(2)] = inst_36685);

(statearr_36701_36751[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (4))){
var inst_36691 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36693__$1,inst_36691);
} else {
if((state_val_36694 === (15))){
var inst_36689 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36702_36752 = state_36693__$1;
(statearr_36702_36752[(2)] = inst_36689);

(statearr_36702_36752[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (21))){
var inst_36642 = (state_36693[(2)]);
var inst_36643 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36644 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36643);
var state_36693__$1 = (function (){var statearr_36703 = state_36693;
(statearr_36703[(7)] = inst_36642);

return statearr_36703;
})();
var statearr_36704_36753 = state_36693__$1;
(statearr_36704_36753[(2)] = inst_36644);

(statearr_36704_36753[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (31))){
var inst_36672 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36672)){
var statearr_36705_36754 = state_36693__$1;
(statearr_36705_36754[(1)] = (34));

} else {
var statearr_36706_36755 = state_36693__$1;
(statearr_36706_36755[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (32))){
var inst_36681 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36707_36756 = state_36693__$1;
(statearr_36707_36756[(2)] = inst_36681);

(statearr_36707_36756[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (33))){
var inst_36668 = (state_36693[(2)]);
var inst_36669 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36670 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36669);
var state_36693__$1 = (function (){var statearr_36708 = state_36693;
(statearr_36708[(8)] = inst_36668);

return statearr_36708;
})();
var statearr_36709_36757 = state_36693__$1;
(statearr_36709_36757[(2)] = inst_36670);

(statearr_36709_36757[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (13))){
var inst_36627 = figwheel.client.heads_up.clear.call(null);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(16),inst_36627);
} else {
if((state_val_36694 === (22))){
var inst_36648 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36649 = figwheel.client.heads_up.append_warning_message.call(null,inst_36648);
var state_36693__$1 = state_36693;
var statearr_36710_36758 = state_36693__$1;
(statearr_36710_36758[(2)] = inst_36649);

(statearr_36710_36758[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (36))){
var inst_36679 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36711_36759 = state_36693__$1;
(statearr_36711_36759[(2)] = inst_36679);

(statearr_36711_36759[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (29))){
var inst_36659 = (state_36693[(2)]);
var inst_36660 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36661 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36660);
var state_36693__$1 = (function (){var statearr_36712 = state_36693;
(statearr_36712[(9)] = inst_36659);

return statearr_36712;
})();
var statearr_36713_36760 = state_36693__$1;
(statearr_36713_36760[(2)] = inst_36661);

(statearr_36713_36760[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (6))){
var inst_36608 = (state_36693[(10)]);
var state_36693__$1 = state_36693;
var statearr_36714_36761 = state_36693__$1;
(statearr_36714_36761[(2)] = inst_36608);

(statearr_36714_36761[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (28))){
var inst_36655 = (state_36693[(2)]);
var inst_36656 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36657 = figwheel.client.heads_up.display_warning.call(null,inst_36656);
var state_36693__$1 = (function (){var statearr_36715 = state_36693;
(statearr_36715[(11)] = inst_36655);

return statearr_36715;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(29),inst_36657);
} else {
if((state_val_36694 === (25))){
var inst_36653 = figwheel.client.heads_up.clear.call(null);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(28),inst_36653);
} else {
if((state_val_36694 === (34))){
var inst_36674 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(37),inst_36674);
} else {
if((state_val_36694 === (17))){
var inst_36633 = (state_36693[(2)]);
var inst_36634 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36635 = figwheel.client.auto_jump_to_error.call(null,opts,inst_36634);
var state_36693__$1 = (function (){var statearr_36716 = state_36693;
(statearr_36716[(12)] = inst_36633);

return statearr_36716;
})();
var statearr_36717_36762 = state_36693__$1;
(statearr_36717_36762[(2)] = inst_36635);

(statearr_36717_36762[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (3))){
var inst_36625 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36625)){
var statearr_36718_36763 = state_36693__$1;
(statearr_36718_36763[(1)] = (13));

} else {
var statearr_36719_36764 = state_36693__$1;
(statearr_36719_36764[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (12))){
var inst_36621 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36720_36765 = state_36693__$1;
(statearr_36720_36765[(2)] = inst_36621);

(statearr_36720_36765[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (2))){
var inst_36608 = (state_36693[(10)]);
var inst_36608__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_36693__$1 = (function (){var statearr_36721 = state_36693;
(statearr_36721[(10)] = inst_36608__$1);

return statearr_36721;
})();
if(cljs.core.truth_(inst_36608__$1)){
var statearr_36722_36766 = state_36693__$1;
(statearr_36722_36766[(1)] = (5));

} else {
var statearr_36723_36767 = state_36693__$1;
(statearr_36723_36767[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (23))){
var inst_36651 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36651)){
var statearr_36724_36768 = state_36693__$1;
(statearr_36724_36768[(1)] = (25));

} else {
var statearr_36725_36769 = state_36693__$1;
(statearr_36725_36769[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (35))){
var state_36693__$1 = state_36693;
var statearr_36726_36770 = state_36693__$1;
(statearr_36726_36770[(2)] = null);

(statearr_36726_36770[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (19))){
var inst_36646 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36646)){
var statearr_36727_36771 = state_36693__$1;
(statearr_36727_36771[(1)] = (22));

} else {
var statearr_36728_36772 = state_36693__$1;
(statearr_36728_36772[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (11))){
var inst_36617 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36729_36773 = state_36693__$1;
(statearr_36729_36773[(2)] = inst_36617);

(statearr_36729_36773[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (9))){
var inst_36619 = figwheel.client.heads_up.clear.call(null);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(12),inst_36619);
} else {
if((state_val_36694 === (5))){
var inst_36610 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_36693__$1 = state_36693;
var statearr_36730_36774 = state_36693__$1;
(statearr_36730_36774[(2)] = inst_36610);

(statearr_36730_36774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (14))){
var inst_36637 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36637)){
var statearr_36731_36775 = state_36693__$1;
(statearr_36731_36775[(1)] = (18));

} else {
var statearr_36732_36776 = state_36693__$1;
(statearr_36732_36776[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (26))){
var inst_36663 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_36693__$1 = state_36693;
if(cljs.core.truth_(inst_36663)){
var statearr_36733_36777 = state_36693__$1;
(statearr_36733_36777[(1)] = (30));

} else {
var statearr_36734_36778 = state_36693__$1;
(statearr_36734_36778[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (16))){
var inst_36629 = (state_36693[(2)]);
var inst_36630 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36631 = figwheel.client.heads_up.display_exception.call(null,inst_36630);
var state_36693__$1 = (function (){var statearr_36735 = state_36693;
(statearr_36735[(13)] = inst_36629);

return statearr_36735;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(17),inst_36631);
} else {
if((state_val_36694 === (30))){
var inst_36665 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36666 = figwheel.client.heads_up.display_warning.call(null,inst_36665);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(33),inst_36666);
} else {
if((state_val_36694 === (10))){
var inst_36623 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36736_36779 = state_36693__$1;
(statearr_36736_36779[(2)] = inst_36623);

(statearr_36736_36779[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (18))){
var inst_36639 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_36640 = figwheel.client.heads_up.display_exception.call(null,inst_36639);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(21),inst_36640);
} else {
if((state_val_36694 === (37))){
var inst_36676 = (state_36693[(2)]);
var state_36693__$1 = state_36693;
var statearr_36737_36780 = state_36693__$1;
(statearr_36737_36780[(2)] = inst_36676);

(statearr_36737_36780[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36694 === (8))){
var inst_36615 = figwheel.client.heads_up.flash_loaded.call(null);
var state_36693__$1 = state_36693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36693__$1,(11),inst_36615);
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
});})(c__28842__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__28730__auto__,c__28842__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto____0 = (function (){
var statearr_36741 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36741[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto__);

(statearr_36741[(1)] = (1));

return statearr_36741;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto____1 = (function (state_36693){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_36693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e36742){if((e36742 instanceof Object)){
var ex__28734__auto__ = e36742;
var statearr_36743_36781 = state_36693;
(statearr_36743_36781[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36742;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36782 = state_36693;
state_36693 = G__36782;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto__ = function(state_36693){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto____1.call(this,state_36693);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__,msg_hist,msg_names,msg))
})();
var state__28844__auto__ = (function (){var statearr_36744 = f__28843__auto__.call(null);
(statearr_36744[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_36744;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__,msg_hist,msg_names,msg))
);

return c__28842__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28842__auto___36845 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto___36845,ch){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto___36845,ch){
return (function (state_36828){
var state_val_36829 = (state_36828[(1)]);
if((state_val_36829 === (1))){
var state_36828__$1 = state_36828;
var statearr_36830_36846 = state_36828__$1;
(statearr_36830_36846[(2)] = null);

(statearr_36830_36846[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (2))){
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(4),ch);
} else {
if((state_val_36829 === (3))){
var inst_36826 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36828__$1,inst_36826);
} else {
if((state_val_36829 === (4))){
var inst_36816 = (state_36828[(7)]);
var inst_36816__$1 = (state_36828[(2)]);
var state_36828__$1 = (function (){var statearr_36831 = state_36828;
(statearr_36831[(7)] = inst_36816__$1);

return statearr_36831;
})();
if(cljs.core.truth_(inst_36816__$1)){
var statearr_36832_36847 = state_36828__$1;
(statearr_36832_36847[(1)] = (5));

} else {
var statearr_36833_36848 = state_36828__$1;
(statearr_36833_36848[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (5))){
var inst_36816 = (state_36828[(7)]);
var inst_36818 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_36816);
var state_36828__$1 = state_36828;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36828__$1,(8),inst_36818);
} else {
if((state_val_36829 === (6))){
var state_36828__$1 = state_36828;
var statearr_36834_36849 = state_36828__$1;
(statearr_36834_36849[(2)] = null);

(statearr_36834_36849[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (7))){
var inst_36824 = (state_36828[(2)]);
var state_36828__$1 = state_36828;
var statearr_36835_36850 = state_36828__$1;
(statearr_36835_36850[(2)] = inst_36824);

(statearr_36835_36850[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36829 === (8))){
var inst_36820 = (state_36828[(2)]);
var state_36828__$1 = (function (){var statearr_36836 = state_36828;
(statearr_36836[(8)] = inst_36820);

return statearr_36836;
})();
var statearr_36837_36851 = state_36828__$1;
(statearr_36837_36851[(2)] = null);

(statearr_36837_36851[(1)] = (2));


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
});})(c__28842__auto___36845,ch))
;
return ((function (switch__28730__auto__,c__28842__auto___36845,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28731__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28731__auto____0 = (function (){
var statearr_36841 = [null,null,null,null,null,null,null,null,null];
(statearr_36841[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28731__auto__);

(statearr_36841[(1)] = (1));

return statearr_36841;
});
var figwheel$client$heads_up_plugin_$_state_machine__28731__auto____1 = (function (state_36828){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_36828);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e36842){if((e36842 instanceof Object)){
var ex__28734__auto__ = e36842;
var statearr_36843_36852 = state_36828;
(statearr_36843_36852[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36828);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36842;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36853 = state_36828;
state_36828 = G__36853;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28731__auto__ = function(state_36828){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28731__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28731__auto____1.call(this,state_36828);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28731__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28731__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto___36845,ch))
})();
var state__28844__auto__ = (function (){var statearr_36844 = f__28843__auto__.call(null);
(statearr_36844[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto___36845);

return statearr_36844;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto___36845,ch))
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
var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__){
return (function (state_36874){
var state_val_36875 = (state_36874[(1)]);
if((state_val_36875 === (1))){
var inst_36869 = cljs.core.async.timeout.call(null,(3000));
var state_36874__$1 = state_36874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36874__$1,(2),inst_36869);
} else {
if((state_val_36875 === (2))){
var inst_36871 = (state_36874[(2)]);
var inst_36872 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_36874__$1 = (function (){var statearr_36876 = state_36874;
(statearr_36876[(7)] = inst_36871);

return statearr_36876;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36874__$1,inst_36872);
} else {
return null;
}
}
});})(c__28842__auto__))
;
return ((function (switch__28730__auto__,c__28842__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__28731__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__28731__auto____0 = (function (){
var statearr_36880 = [null,null,null,null,null,null,null,null];
(statearr_36880[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28731__auto__);

(statearr_36880[(1)] = (1));

return statearr_36880;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28731__auto____1 = (function (state_36874){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_36874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e36881){if((e36881 instanceof Object)){
var ex__28734__auto__ = e36881;
var statearr_36882_36884 = state_36874;
(statearr_36882_36884[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36881;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36885 = state_36874;
state_36874 = G__36885;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28731__auto__ = function(state_36874){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28731__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28731__auto____1.call(this,state_36874);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28731__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28731__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__))
})();
var state__28844__auto__ = (function (){var statearr_36883 = f__28843__auto__.call(null);
(statearr_36883[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_36883;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__))
);

return c__28842__auto__;
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
var c__28842__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28842__auto__,figwheel_version,temp__4657__auto__){
return (function (){
var f__28843__auto__ = (function (){var switch__28730__auto__ = ((function (c__28842__auto__,figwheel_version,temp__4657__auto__){
return (function (state_36908){
var state_val_36909 = (state_36908[(1)]);
if((state_val_36909 === (1))){
var inst_36902 = cljs.core.async.timeout.call(null,(2000));
var state_36908__$1 = state_36908;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36908__$1,(2),inst_36902);
} else {
if((state_val_36909 === (2))){
var inst_36904 = (state_36908[(2)]);
var inst_36905 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_36906 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_36905);
var state_36908__$1 = (function (){var statearr_36910 = state_36908;
(statearr_36910[(7)] = inst_36904);

return statearr_36910;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36908__$1,inst_36906);
} else {
return null;
}
}
});})(c__28842__auto__,figwheel_version,temp__4657__auto__))
;
return ((function (switch__28730__auto__,c__28842__auto__,figwheel_version,temp__4657__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto____0 = (function (){
var statearr_36914 = [null,null,null,null,null,null,null,null];
(statearr_36914[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto__);

(statearr_36914[(1)] = (1));

return statearr_36914;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto____1 = (function (state_36908){
while(true){
var ret_value__28732__auto__ = (function (){try{while(true){
var result__28733__auto__ = switch__28730__auto__.call(null,state_36908);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28733__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28733__auto__;
}
break;
}
}catch (e36915){if((e36915 instanceof Object)){
var ex__28734__auto__ = e36915;
var statearr_36916_36918 = state_36908;
(statearr_36916_36918[(5)] = ex__28734__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36908);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36915;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28732__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36919 = state_36908;
state_36908 = G__36919;
continue;
} else {
return ret_value__28732__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto__ = function(state_36908){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto____1.call(this,state_36908);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28731__auto__;
})()
;})(switch__28730__auto__,c__28842__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28844__auto__ = (function (){var statearr_36917 = f__28843__auto__.call(null);
(statearr_36917[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28842__auto__);

return statearr_36917;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28844__auto__);
});})(c__28842__auto__,figwheel_version,temp__4657__auto__))
);

return c__28842__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__36920){
var map__36924 = p__36920;
var map__36924__$1 = ((((!((map__36924 == null)))?((((map__36924.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36924.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36924):map__36924);
var file = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__36924__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__36926 = "";
var G__36926__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__36926),cljs.core.str("file "),cljs.core.str(file)].join(''):G__36926);
var G__36926__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__36926__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__36926__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__36926__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__36926__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__36927){
var map__36934 = p__36927;
var map__36934__$1 = ((((!((map__36934 == null)))?((((map__36934.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36934.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36934):map__36934);
var ed = map__36934__$1;
var formatted_exception = cljs.core.get.call(null,map__36934__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__36934__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__36934__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__36936_36940 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__36937_36941 = null;
var count__36938_36942 = (0);
var i__36939_36943 = (0);
while(true){
if((i__36939_36943 < count__36938_36942)){
var msg_36944 = cljs.core._nth.call(null,chunk__36937_36941,i__36939_36943);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36944);

var G__36945 = seq__36936_36940;
var G__36946 = chunk__36937_36941;
var G__36947 = count__36938_36942;
var G__36948 = (i__36939_36943 + (1));
seq__36936_36940 = G__36945;
chunk__36937_36941 = G__36946;
count__36938_36942 = G__36947;
i__36939_36943 = G__36948;
continue;
} else {
var temp__4657__auto___36949 = cljs.core.seq.call(null,seq__36936_36940);
if(temp__4657__auto___36949){
var seq__36936_36950__$1 = temp__4657__auto___36949;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36936_36950__$1)){
var c__26790__auto___36951 = cljs.core.chunk_first.call(null,seq__36936_36950__$1);
var G__36952 = cljs.core.chunk_rest.call(null,seq__36936_36950__$1);
var G__36953 = c__26790__auto___36951;
var G__36954 = cljs.core.count.call(null,c__26790__auto___36951);
var G__36955 = (0);
seq__36936_36940 = G__36952;
chunk__36937_36941 = G__36953;
count__36938_36942 = G__36954;
i__36939_36943 = G__36955;
continue;
} else {
var msg_36956 = cljs.core.first.call(null,seq__36936_36950__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_36956);

var G__36957 = cljs.core.next.call(null,seq__36936_36950__$1);
var G__36958 = null;
var G__36959 = (0);
var G__36960 = (0);
seq__36936_36940 = G__36957;
chunk__36937_36941 = G__36958;
count__36938_36942 = G__36959;
i__36939_36943 = G__36960;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__36961){
var map__36964 = p__36961;
var map__36964__$1 = ((((!((map__36964 == null)))?((((map__36964.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36964.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36964):map__36964);
var w = map__36964__$1;
var message = cljs.core.get.call(null,map__36964__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__36976 = cljs.core.seq.call(null,plugins);
var chunk__36977 = null;
var count__36978 = (0);
var i__36979 = (0);
while(true){
if((i__36979 < count__36978)){
var vec__36980 = cljs.core._nth.call(null,chunk__36977,i__36979);
var k = cljs.core.nth.call(null,vec__36980,(0),null);
var plugin = cljs.core.nth.call(null,vec__36980,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36986 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36976,chunk__36977,count__36978,i__36979,pl_36986,vec__36980,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_36986.call(null,msg_hist);
});})(seq__36976,chunk__36977,count__36978,i__36979,pl_36986,vec__36980,k,plugin))
);
} else {
}

var G__36987 = seq__36976;
var G__36988 = chunk__36977;
var G__36989 = count__36978;
var G__36990 = (i__36979 + (1));
seq__36976 = G__36987;
chunk__36977 = G__36988;
count__36978 = G__36989;
i__36979 = G__36990;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__36976);
if(temp__4657__auto__){
var seq__36976__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36976__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__36976__$1);
var G__36991 = cljs.core.chunk_rest.call(null,seq__36976__$1);
var G__36992 = c__26790__auto__;
var G__36993 = cljs.core.count.call(null,c__26790__auto__);
var G__36994 = (0);
seq__36976 = G__36991;
chunk__36977 = G__36992;
count__36978 = G__36993;
i__36979 = G__36994;
continue;
} else {
var vec__36983 = cljs.core.first.call(null,seq__36976__$1);
var k = cljs.core.nth.call(null,vec__36983,(0),null);
var plugin = cljs.core.nth.call(null,vec__36983,(1),null);
if(cljs.core.truth_(plugin)){
var pl_36995 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__36976,chunk__36977,count__36978,i__36979,pl_36995,vec__36983,k,plugin,seq__36976__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_36995.call(null,msg_hist);
});})(seq__36976,chunk__36977,count__36978,i__36979,pl_36995,vec__36983,k,plugin,seq__36976__$1,temp__4657__auto__))
);
} else {
}

var G__36996 = cljs.core.next.call(null,seq__36976__$1);
var G__36997 = null;
var G__36998 = (0);
var G__36999 = (0);
seq__36976 = G__36996;
chunk__36977 = G__36997;
count__36978 = G__36998;
i__36979 = G__36999;
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
var args37000 = [];
var len__27054__auto___37007 = arguments.length;
var i__27055__auto___37008 = (0);
while(true){
if((i__27055__auto___37008 < len__27054__auto___37007)){
args37000.push((arguments[i__27055__auto___37008]));

var G__37009 = (i__27055__auto___37008 + (1));
i__27055__auto___37008 = G__37009;
continue;
} else {
}
break;
}

var G__37002 = args37000.length;
switch (G__37002) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37000.length)].join('')));

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

var seq__37003_37011 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37004_37012 = null;
var count__37005_37013 = (0);
var i__37006_37014 = (0);
while(true){
if((i__37006_37014 < count__37005_37013)){
var msg_37015 = cljs.core._nth.call(null,chunk__37004_37012,i__37006_37014);
figwheel.client.socket.handle_incoming_message.call(null,msg_37015);

var G__37016 = seq__37003_37011;
var G__37017 = chunk__37004_37012;
var G__37018 = count__37005_37013;
var G__37019 = (i__37006_37014 + (1));
seq__37003_37011 = G__37016;
chunk__37004_37012 = G__37017;
count__37005_37013 = G__37018;
i__37006_37014 = G__37019;
continue;
} else {
var temp__4657__auto___37020 = cljs.core.seq.call(null,seq__37003_37011);
if(temp__4657__auto___37020){
var seq__37003_37021__$1 = temp__4657__auto___37020;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37003_37021__$1)){
var c__26790__auto___37022 = cljs.core.chunk_first.call(null,seq__37003_37021__$1);
var G__37023 = cljs.core.chunk_rest.call(null,seq__37003_37021__$1);
var G__37024 = c__26790__auto___37022;
var G__37025 = cljs.core.count.call(null,c__26790__auto___37022);
var G__37026 = (0);
seq__37003_37011 = G__37023;
chunk__37004_37012 = G__37024;
count__37005_37013 = G__37025;
i__37006_37014 = G__37026;
continue;
} else {
var msg_37027 = cljs.core.first.call(null,seq__37003_37021__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37027);

var G__37028 = cljs.core.next.call(null,seq__37003_37021__$1);
var G__37029 = null;
var G__37030 = (0);
var G__37031 = (0);
seq__37003_37011 = G__37028;
chunk__37004_37012 = G__37029;
count__37005_37013 = G__37030;
i__37006_37014 = G__37031;
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
var len__27054__auto___37036 = arguments.length;
var i__27055__auto___37037 = (0);
while(true){
if((i__27055__auto___37037 < len__27054__auto___37036)){
args__27061__auto__.push((arguments[i__27055__auto___37037]));

var G__37038 = (i__27055__auto___37037 + (1));
i__27055__auto___37037 = G__37038;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37033){
var map__37034 = p__37033;
var map__37034__$1 = ((((!((map__37034 == null)))?((((map__37034.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37034.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37034):map__37034);
var opts = map__37034__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37032){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37032));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37040){if((e37040 instanceof Error)){
var e = e37040;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37040;

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
return (function (p__37044){
var map__37045 = p__37044;
var map__37045__$1 = ((((!((map__37045 == null)))?((((map__37045.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37045.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37045):map__37045);
var msg_name = cljs.core.get.call(null,map__37045__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1499270879391