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
var args36830 = [];
var len__27054__auto___36833 = arguments.length;
var i__27055__auto___36834 = (0);
while(true){
if((i__27055__auto___36834 < len__27054__auto___36833)){
args36830.push((arguments[i__27055__auto___36834]));

var G__36835 = (i__27055__auto___36834 + (1));
i__27055__auto___36834 = G__36835;
continue;
} else {
}
break;
}

var G__36832 = args36830.length;
switch (G__36832) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args36830.length)].join('')));

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
var len__27054__auto___36838 = arguments.length;
var i__27055__auto___36839 = (0);
while(true){
if((i__27055__auto___36839 < len__27054__auto___36838)){
args__27061__auto__.push((arguments[i__27055__auto___36839]));

var G__36840 = (i__27055__auto___36839 + (1));
i__27055__auto___36839 = G__36840;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq36837){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36837));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___36842 = arguments.length;
var i__27055__auto___36843 = (0);
while(true){
if((i__27055__auto___36843 < len__27054__auto___36842)){
args__27061__auto__.push((arguments[i__27055__auto___36843]));

var G__36844 = (i__27055__auto___36843 + (1));
i__27055__auto___36843 = G__36844;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq36841){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq36841));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__36845){
var map__36848 = p__36845;
var map__36848__$1 = ((((!((map__36848 == null)))?((((map__36848.cljs$lang$protocol_mask$partition0$ & (64))) || (map__36848.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36848):map__36848);
var message = cljs.core.get.call(null,map__36848__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__36848__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28171__auto___37010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___37010,ch){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___37010,ch){
return (function (state_36979){
var state_val_36980 = (state_36979[(1)]);
if((state_val_36980 === (7))){
var inst_36975 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_36981_37011 = state_36979__$1;
(statearr_36981_37011[(2)] = inst_36975);

(statearr_36981_37011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (1))){
var state_36979__$1 = state_36979;
var statearr_36982_37012 = state_36979__$1;
(statearr_36982_37012[(2)] = null);

(statearr_36982_37012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (4))){
var inst_36932 = (state_36979[(7)]);
var inst_36932__$1 = (state_36979[(2)]);
var state_36979__$1 = (function (){var statearr_36983 = state_36979;
(statearr_36983[(7)] = inst_36932__$1);

return statearr_36983;
})();
if(cljs.core.truth_(inst_36932__$1)){
var statearr_36984_37013 = state_36979__$1;
(statearr_36984_37013[(1)] = (5));

} else {
var statearr_36985_37014 = state_36979__$1;
(statearr_36985_37014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (15))){
var inst_36939 = (state_36979[(8)]);
var inst_36954 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36939);
var inst_36955 = cljs.core.first.call(null,inst_36954);
var inst_36956 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_36955);
var inst_36957 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_36956)].join('');
var inst_36958 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_36957);
var state_36979__$1 = state_36979;
var statearr_36986_37015 = state_36979__$1;
(statearr_36986_37015[(2)] = inst_36958);

(statearr_36986_37015[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (13))){
var inst_36963 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_36987_37016 = state_36979__$1;
(statearr_36987_37016[(2)] = inst_36963);

(statearr_36987_37016[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (6))){
var state_36979__$1 = state_36979;
var statearr_36988_37017 = state_36979__$1;
(statearr_36988_37017[(2)] = null);

(statearr_36988_37017[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (17))){
var inst_36961 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_36989_37018 = state_36979__$1;
(statearr_36989_37018[(2)] = inst_36961);

(statearr_36989_37018[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (3))){
var inst_36977 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36979__$1,inst_36977);
} else {
if((state_val_36980 === (12))){
var inst_36938 = (state_36979[(9)]);
var inst_36952 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_36938,opts);
var state_36979__$1 = state_36979;
if(cljs.core.truth_(inst_36952)){
var statearr_36990_37019 = state_36979__$1;
(statearr_36990_37019[(1)] = (15));

} else {
var statearr_36991_37020 = state_36979__$1;
(statearr_36991_37020[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (2))){
var state_36979__$1 = state_36979;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36979__$1,(4),ch);
} else {
if((state_val_36980 === (11))){
var inst_36939 = (state_36979[(8)]);
var inst_36944 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_36945 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_36939);
var inst_36946 = cljs.core.async.timeout.call(null,(1000));
var inst_36947 = [inst_36945,inst_36946];
var inst_36948 = (new cljs.core.PersistentVector(null,2,(5),inst_36944,inst_36947,null));
var state_36979__$1 = state_36979;
return cljs.core.async.ioc_alts_BANG_.call(null,state_36979__$1,(14),inst_36948);
} else {
if((state_val_36980 === (9))){
var inst_36939 = (state_36979[(8)]);
var inst_36965 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_36966 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_36939);
var inst_36967 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_36966);
var inst_36968 = [cljs.core.str("Not loading: "),cljs.core.str(inst_36967)].join('');
var inst_36969 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_36968);
var state_36979__$1 = (function (){var statearr_36992 = state_36979;
(statearr_36992[(10)] = inst_36965);

return statearr_36992;
})();
var statearr_36993_37021 = state_36979__$1;
(statearr_36993_37021[(2)] = inst_36969);

(statearr_36993_37021[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (5))){
var inst_36932 = (state_36979[(7)]);
var inst_36934 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_36935 = (new cljs.core.PersistentArrayMap(null,2,inst_36934,null));
var inst_36936 = (new cljs.core.PersistentHashSet(null,inst_36935,null));
var inst_36937 = figwheel.client.focus_msgs.call(null,inst_36936,inst_36932);
var inst_36938 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_36937);
var inst_36939 = cljs.core.first.call(null,inst_36937);
var inst_36940 = figwheel.client.autoload_QMARK_.call(null);
var state_36979__$1 = (function (){var statearr_36994 = state_36979;
(statearr_36994[(9)] = inst_36938);

(statearr_36994[(8)] = inst_36939);

return statearr_36994;
})();
if(cljs.core.truth_(inst_36940)){
var statearr_36995_37022 = state_36979__$1;
(statearr_36995_37022[(1)] = (8));

} else {
var statearr_36996_37023 = state_36979__$1;
(statearr_36996_37023[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (14))){
var inst_36950 = (state_36979[(2)]);
var state_36979__$1 = state_36979;
var statearr_36997_37024 = state_36979__$1;
(statearr_36997_37024[(2)] = inst_36950);

(statearr_36997_37024[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (16))){
var state_36979__$1 = state_36979;
var statearr_36998_37025 = state_36979__$1;
(statearr_36998_37025[(2)] = null);

(statearr_36998_37025[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (10))){
var inst_36971 = (state_36979[(2)]);
var state_36979__$1 = (function (){var statearr_36999 = state_36979;
(statearr_36999[(11)] = inst_36971);

return statearr_36999;
})();
var statearr_37000_37026 = state_36979__$1;
(statearr_37000_37026[(2)] = null);

(statearr_37000_37026[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36980 === (8))){
var inst_36938 = (state_36979[(9)]);
var inst_36942 = figwheel.client.reload_file_state_QMARK_.call(null,inst_36938,opts);
var state_36979__$1 = state_36979;
if(cljs.core.truth_(inst_36942)){
var statearr_37001_37027 = state_36979__$1;
(statearr_37001_37027[(1)] = (11));

} else {
var statearr_37002_37028 = state_36979__$1;
(statearr_37002_37028[(1)] = (12));

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
});})(c__28171__auto___37010,ch))
;
return ((function (switch__28150__auto__,c__28171__auto___37010,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_37006 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37006[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__);

(statearr_37006[(1)] = (1));

return statearr_37006;
});
var figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1 = (function (state_36979){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_36979);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e37007){if((e37007 instanceof Object)){
var ex__28154__auto__ = e37007;
var statearr_37008_37029 = state_36979;
(statearr_37008_37029[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36979);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37030 = state_36979;
state_36979 = G__37030;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__ = function(state_36979){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1.call(this,state_36979);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__28151__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___37010,ch))
})();
var state__28173__auto__ = (function (){var statearr_37009 = f__28172__auto__.call(null);
(statearr_37009[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___37010);

return statearr_37009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___37010,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__37031_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__37031_SHARP_));
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
var base_path_37034 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_37034){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e37033){if((e37033 instanceof Error)){
var e = e37033;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_37034], null));
} else {
var e = e37033;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_37034))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__37035){
var map__37044 = p__37035;
var map__37044__$1 = ((((!((map__37044 == null)))?((((map__37044.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37044.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37044):map__37044);
var opts = map__37044__$1;
var build_id = cljs.core.get.call(null,map__37044__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__37044,map__37044__$1,opts,build_id){
return (function (p__37046){
var vec__37047 = p__37046;
var seq__37048 = cljs.core.seq.call(null,vec__37047);
var first__37049 = cljs.core.first.call(null,seq__37048);
var seq__37048__$1 = cljs.core.next.call(null,seq__37048);
var map__37050 = first__37049;
var map__37050__$1 = ((((!((map__37050 == null)))?((((map__37050.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37050.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37050):map__37050);
var msg = map__37050__$1;
var msg_name = cljs.core.get.call(null,map__37050__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37048__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__37047,seq__37048,first__37049,seq__37048__$1,map__37050,map__37050__$1,msg,msg_name,_,map__37044,map__37044__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__37047,seq__37048,first__37049,seq__37048__$1,map__37050,map__37050__$1,msg,msg_name,_,map__37044,map__37044__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__37044,map__37044__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__37058){
var vec__37059 = p__37058;
var seq__37060 = cljs.core.seq.call(null,vec__37059);
var first__37061 = cljs.core.first.call(null,seq__37060);
var seq__37060__$1 = cljs.core.next.call(null,seq__37060);
var map__37062 = first__37061;
var map__37062__$1 = ((((!((map__37062 == null)))?((((map__37062.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37062.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37062):map__37062);
var msg = map__37062__$1;
var msg_name = cljs.core.get.call(null,map__37062__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37060__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__37064){
var map__37076 = p__37064;
var map__37076__$1 = ((((!((map__37076 == null)))?((((map__37076.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37076.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37076):map__37076);
var on_compile_warning = cljs.core.get.call(null,map__37076__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__37076__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__37076,map__37076__$1,on_compile_warning,on_compile_fail){
return (function (p__37078){
var vec__37079 = p__37078;
var seq__37080 = cljs.core.seq.call(null,vec__37079);
var first__37081 = cljs.core.first.call(null,seq__37080);
var seq__37080__$1 = cljs.core.next.call(null,seq__37080);
var map__37082 = first__37081;
var map__37082__$1 = ((((!((map__37082 == null)))?((((map__37082.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37082.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37082):map__37082);
var msg = map__37082__$1;
var msg_name = cljs.core.get.call(null,map__37082__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__37080__$1;
var pred__37084 = cljs.core._EQ_;
var expr__37085 = msg_name;
if(cljs.core.truth_(pred__37084.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__37085))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__37084.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__37085))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__37076,map__37076__$1,on_compile_warning,on_compile_fail))
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
return (function (state_37313){
var state_val_37314 = (state_37313[(1)]);
if((state_val_37314 === (7))){
var inst_37233 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37233)){
var statearr_37315_37365 = state_37313__$1;
(statearr_37315_37365[(1)] = (8));

} else {
var statearr_37316_37366 = state_37313__$1;
(statearr_37316_37366[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (20))){
var inst_37307 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37317_37367 = state_37313__$1;
(statearr_37317_37367[(2)] = inst_37307);

(statearr_37317_37367[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (27))){
var inst_37303 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37318_37368 = state_37313__$1;
(statearr_37318_37368[(2)] = inst_37303);

(statearr_37318_37368[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (1))){
var inst_37226 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37226)){
var statearr_37319_37369 = state_37313__$1;
(statearr_37319_37369[(1)] = (2));

} else {
var statearr_37320_37370 = state_37313__$1;
(statearr_37320_37370[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (24))){
var inst_37305 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37321_37371 = state_37313__$1;
(statearr_37321_37371[(2)] = inst_37305);

(statearr_37321_37371[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (4))){
var inst_37311 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37313__$1,inst_37311);
} else {
if((state_val_37314 === (15))){
var inst_37309 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37322_37372 = state_37313__$1;
(statearr_37322_37372[(2)] = inst_37309);

(statearr_37322_37372[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (21))){
var inst_37262 = (state_37313[(2)]);
var inst_37263 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37264 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37263);
var state_37313__$1 = (function (){var statearr_37323 = state_37313;
(statearr_37323[(7)] = inst_37262);

return statearr_37323;
})();
var statearr_37324_37373 = state_37313__$1;
(statearr_37324_37373[(2)] = inst_37264);

(statearr_37324_37373[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (31))){
var inst_37292 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37292)){
var statearr_37325_37374 = state_37313__$1;
(statearr_37325_37374[(1)] = (34));

} else {
var statearr_37326_37375 = state_37313__$1;
(statearr_37326_37375[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (32))){
var inst_37301 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37327_37376 = state_37313__$1;
(statearr_37327_37376[(2)] = inst_37301);

(statearr_37327_37376[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (33))){
var inst_37288 = (state_37313[(2)]);
var inst_37289 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37290 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37289);
var state_37313__$1 = (function (){var statearr_37328 = state_37313;
(statearr_37328[(8)] = inst_37288);

return statearr_37328;
})();
var statearr_37329_37377 = state_37313__$1;
(statearr_37329_37377[(2)] = inst_37290);

(statearr_37329_37377[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (13))){
var inst_37247 = figwheel.client.heads_up.clear.call(null);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(16),inst_37247);
} else {
if((state_val_37314 === (22))){
var inst_37268 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37269 = figwheel.client.heads_up.append_warning_message.call(null,inst_37268);
var state_37313__$1 = state_37313;
var statearr_37330_37378 = state_37313__$1;
(statearr_37330_37378[(2)] = inst_37269);

(statearr_37330_37378[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (36))){
var inst_37299 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37331_37379 = state_37313__$1;
(statearr_37331_37379[(2)] = inst_37299);

(statearr_37331_37379[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (29))){
var inst_37279 = (state_37313[(2)]);
var inst_37280 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37281 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37280);
var state_37313__$1 = (function (){var statearr_37332 = state_37313;
(statearr_37332[(9)] = inst_37279);

return statearr_37332;
})();
var statearr_37333_37380 = state_37313__$1;
(statearr_37333_37380[(2)] = inst_37281);

(statearr_37333_37380[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (6))){
var inst_37228 = (state_37313[(10)]);
var state_37313__$1 = state_37313;
var statearr_37334_37381 = state_37313__$1;
(statearr_37334_37381[(2)] = inst_37228);

(statearr_37334_37381[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (28))){
var inst_37275 = (state_37313[(2)]);
var inst_37276 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37277 = figwheel.client.heads_up.display_warning.call(null,inst_37276);
var state_37313__$1 = (function (){var statearr_37335 = state_37313;
(statearr_37335[(11)] = inst_37275);

return statearr_37335;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(29),inst_37277);
} else {
if((state_val_37314 === (25))){
var inst_37273 = figwheel.client.heads_up.clear.call(null);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(28),inst_37273);
} else {
if((state_val_37314 === (34))){
var inst_37294 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(37),inst_37294);
} else {
if((state_val_37314 === (17))){
var inst_37253 = (state_37313[(2)]);
var inst_37254 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37255 = figwheel.client.auto_jump_to_error.call(null,opts,inst_37254);
var state_37313__$1 = (function (){var statearr_37336 = state_37313;
(statearr_37336[(12)] = inst_37253);

return statearr_37336;
})();
var statearr_37337_37382 = state_37313__$1;
(statearr_37337_37382[(2)] = inst_37255);

(statearr_37337_37382[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (3))){
var inst_37245 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37245)){
var statearr_37338_37383 = state_37313__$1;
(statearr_37338_37383[(1)] = (13));

} else {
var statearr_37339_37384 = state_37313__$1;
(statearr_37339_37384[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (12))){
var inst_37241 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37340_37385 = state_37313__$1;
(statearr_37340_37385[(2)] = inst_37241);

(statearr_37340_37385[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (2))){
var inst_37228 = (state_37313[(10)]);
var inst_37228__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_37313__$1 = (function (){var statearr_37341 = state_37313;
(statearr_37341[(10)] = inst_37228__$1);

return statearr_37341;
})();
if(cljs.core.truth_(inst_37228__$1)){
var statearr_37342_37386 = state_37313__$1;
(statearr_37342_37386[(1)] = (5));

} else {
var statearr_37343_37387 = state_37313__$1;
(statearr_37343_37387[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (23))){
var inst_37271 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37271)){
var statearr_37344_37388 = state_37313__$1;
(statearr_37344_37388[(1)] = (25));

} else {
var statearr_37345_37389 = state_37313__$1;
(statearr_37345_37389[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (35))){
var state_37313__$1 = state_37313;
var statearr_37346_37390 = state_37313__$1;
(statearr_37346_37390[(2)] = null);

(statearr_37346_37390[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (19))){
var inst_37266 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37266)){
var statearr_37347_37391 = state_37313__$1;
(statearr_37347_37391[(1)] = (22));

} else {
var statearr_37348_37392 = state_37313__$1;
(statearr_37348_37392[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (11))){
var inst_37237 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37349_37393 = state_37313__$1;
(statearr_37349_37393[(2)] = inst_37237);

(statearr_37349_37393[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (9))){
var inst_37239 = figwheel.client.heads_up.clear.call(null);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(12),inst_37239);
} else {
if((state_val_37314 === (5))){
var inst_37230 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_37313__$1 = state_37313;
var statearr_37350_37394 = state_37313__$1;
(statearr_37350_37394[(2)] = inst_37230);

(statearr_37350_37394[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (14))){
var inst_37257 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37257)){
var statearr_37351_37395 = state_37313__$1;
(statearr_37351_37395[(1)] = (18));

} else {
var statearr_37352_37396 = state_37313__$1;
(statearr_37352_37396[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (26))){
var inst_37283 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_37313__$1 = state_37313;
if(cljs.core.truth_(inst_37283)){
var statearr_37353_37397 = state_37313__$1;
(statearr_37353_37397[(1)] = (30));

} else {
var statearr_37354_37398 = state_37313__$1;
(statearr_37354_37398[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (16))){
var inst_37249 = (state_37313[(2)]);
var inst_37250 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37251 = figwheel.client.heads_up.display_exception.call(null,inst_37250);
var state_37313__$1 = (function (){var statearr_37355 = state_37313;
(statearr_37355[(13)] = inst_37249);

return statearr_37355;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(17),inst_37251);
} else {
if((state_val_37314 === (30))){
var inst_37285 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37286 = figwheel.client.heads_up.display_warning.call(null,inst_37285);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(33),inst_37286);
} else {
if((state_val_37314 === (10))){
var inst_37243 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37356_37399 = state_37313__$1;
(statearr_37356_37399[(2)] = inst_37243);

(statearr_37356_37399[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (18))){
var inst_37259 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_37260 = figwheel.client.heads_up.display_exception.call(null,inst_37259);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(21),inst_37260);
} else {
if((state_val_37314 === (37))){
var inst_37296 = (state_37313[(2)]);
var state_37313__$1 = state_37313;
var statearr_37357_37400 = state_37313__$1;
(statearr_37357_37400[(2)] = inst_37296);

(statearr_37357_37400[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37314 === (8))){
var inst_37235 = figwheel.client.heads_up.flash_loaded.call(null);
var state_37313__$1 = state_37313;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37313__$1,(11),inst_37235);
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
var statearr_37361 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37361[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__);

(statearr_37361[(1)] = (1));

return statearr_37361;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1 = (function (state_37313){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_37313);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e37362){if((e37362 instanceof Object)){
var ex__28154__auto__ = e37362;
var statearr_37363_37401 = state_37313;
(statearr_37363_37401[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37313);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37362;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37402 = state_37313;
state_37313 = G__37402;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__ = function(state_37313){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1.call(this,state_37313);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,msg_hist,msg_names,msg))
})();
var state__28173__auto__ = (function (){var statearr_37364 = f__28172__auto__.call(null);
(statearr_37364[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_37364;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto__,msg_hist,msg_names,msg))
);

return c__28171__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28171__auto___37465 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28171__auto___37465,ch){
return (function (){
var f__28172__auto__ = (function (){var switch__28150__auto__ = ((function (c__28171__auto___37465,ch){
return (function (state_37448){
var state_val_37449 = (state_37448[(1)]);
if((state_val_37449 === (1))){
var state_37448__$1 = state_37448;
var statearr_37450_37466 = state_37448__$1;
(statearr_37450_37466[(2)] = null);

(statearr_37450_37466[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (2))){
var state_37448__$1 = state_37448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37448__$1,(4),ch);
} else {
if((state_val_37449 === (3))){
var inst_37446 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37448__$1,inst_37446);
} else {
if((state_val_37449 === (4))){
var inst_37436 = (state_37448[(7)]);
var inst_37436__$1 = (state_37448[(2)]);
var state_37448__$1 = (function (){var statearr_37451 = state_37448;
(statearr_37451[(7)] = inst_37436__$1);

return statearr_37451;
})();
if(cljs.core.truth_(inst_37436__$1)){
var statearr_37452_37467 = state_37448__$1;
(statearr_37452_37467[(1)] = (5));

} else {
var statearr_37453_37468 = state_37448__$1;
(statearr_37453_37468[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (5))){
var inst_37436 = (state_37448[(7)]);
var inst_37438 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_37436);
var state_37448__$1 = state_37448;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37448__$1,(8),inst_37438);
} else {
if((state_val_37449 === (6))){
var state_37448__$1 = state_37448;
var statearr_37454_37469 = state_37448__$1;
(statearr_37454_37469[(2)] = null);

(statearr_37454_37469[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (7))){
var inst_37444 = (state_37448[(2)]);
var state_37448__$1 = state_37448;
var statearr_37455_37470 = state_37448__$1;
(statearr_37455_37470[(2)] = inst_37444);

(statearr_37455_37470[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37449 === (8))){
var inst_37440 = (state_37448[(2)]);
var state_37448__$1 = (function (){var statearr_37456 = state_37448;
(statearr_37456[(8)] = inst_37440);

return statearr_37456;
})();
var statearr_37457_37471 = state_37448__$1;
(statearr_37457_37471[(2)] = null);

(statearr_37457_37471[(1)] = (2));


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
});})(c__28171__auto___37465,ch))
;
return ((function (switch__28150__auto__,c__28171__auto___37465,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0 = (function (){
var statearr_37461 = [null,null,null,null,null,null,null,null,null];
(statearr_37461[(0)] = figwheel$client$heads_up_plugin_$_state_machine__28151__auto__);

(statearr_37461[(1)] = (1));

return statearr_37461;
});
var figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1 = (function (state_37448){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_37448);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e37462){if((e37462 instanceof Object)){
var ex__28154__auto__ = e37462;
var statearr_37463_37472 = state_37448;
(statearr_37463_37472[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37448);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37473 = state_37448;
state_37448 = G__37473;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__ = function(state_37448){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1.call(this,state_37448);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__28151__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__28151__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto___37465,ch))
})();
var state__28173__auto__ = (function (){var statearr_37464 = f__28172__auto__.call(null);
(statearr_37464[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto___37465);

return statearr_37464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28173__auto__);
});})(c__28171__auto___37465,ch))
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
return (function (state_37494){
var state_val_37495 = (state_37494[(1)]);
if((state_val_37495 === (1))){
var inst_37489 = cljs.core.async.timeout.call(null,(3000));
var state_37494__$1 = state_37494;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37494__$1,(2),inst_37489);
} else {
if((state_val_37495 === (2))){
var inst_37491 = (state_37494[(2)]);
var inst_37492 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_37494__$1 = (function (){var statearr_37496 = state_37494;
(statearr_37496[(7)] = inst_37491);

return statearr_37496;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37494__$1,inst_37492);
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
var statearr_37500 = [null,null,null,null,null,null,null,null];
(statearr_37500[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__);

(statearr_37500[(1)] = (1));

return statearr_37500;
});
var figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1 = (function (state_37494){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_37494);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e37501){if((e37501 instanceof Object)){
var ex__28154__auto__ = e37501;
var statearr_37502_37504 = state_37494;
(statearr_37502_37504[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37494);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37501;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37505 = state_37494;
state_37494 = G__37505;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__ = function(state_37494){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1.call(this,state_37494);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__28151__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__))
})();
var state__28173__auto__ = (function (){var statearr_37503 = f__28172__auto__.call(null);
(statearr_37503[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_37503;
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
return (function (state_37528){
var state_val_37529 = (state_37528[(1)]);
if((state_val_37529 === (1))){
var inst_37522 = cljs.core.async.timeout.call(null,(2000));
var state_37528__$1 = state_37528;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37528__$1,(2),inst_37522);
} else {
if((state_val_37529 === (2))){
var inst_37524 = (state_37528[(2)]);
var inst_37525 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_37526 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_37525);
var state_37528__$1 = (function (){var statearr_37530 = state_37528;
(statearr_37530[(7)] = inst_37524);

return statearr_37530;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37528__$1,inst_37526);
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
var statearr_37534 = [null,null,null,null,null,null,null,null];
(statearr_37534[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__);

(statearr_37534[(1)] = (1));

return statearr_37534;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1 = (function (state_37528){
while(true){
var ret_value__28152__auto__ = (function (){try{while(true){
var result__28153__auto__ = switch__28150__auto__.call(null,state_37528);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28153__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28153__auto__;
}
break;
}
}catch (e37535){if((e37535 instanceof Object)){
var ex__28154__auto__ = e37535;
var statearr_37536_37538 = state_37528;
(statearr_37536_37538[(5)] = ex__28154__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37528);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37535;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28152__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37539 = state_37528;
state_37528 = G__37539;
continue;
} else {
return ret_value__28152__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__ = function(state_37528){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1.call(this,state_37528);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__28151__auto__;
})()
;})(switch__28150__auto__,c__28171__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28173__auto__ = (function (){var statearr_37537 = f__28172__auto__.call(null);
(statearr_37537[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28171__auto__);

return statearr_37537;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__37540){
var map__37544 = p__37540;
var map__37544__$1 = ((((!((map__37544 == null)))?((((map__37544.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37544.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37544):map__37544);
var file = cljs.core.get.call(null,map__37544__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37544__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37544__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37546 = "";
var G__37546__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__37546),cljs.core.str("file "),cljs.core.str(file)].join(''):G__37546);
var G__37546__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__37546__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__37546__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__37546__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__37546__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__37547){
var map__37554 = p__37547;
var map__37554__$1 = ((((!((map__37554 == null)))?((((map__37554.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37554.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37554):map__37554);
var ed = map__37554__$1;
var formatted_exception = cljs.core.get.call(null,map__37554__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__37554__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__37554__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__37556_37560 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__37557_37561 = null;
var count__37558_37562 = (0);
var i__37559_37563 = (0);
while(true){
if((i__37559_37563 < count__37558_37562)){
var msg_37564 = cljs.core._nth.call(null,chunk__37557_37561,i__37559_37563);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37564);

var G__37565 = seq__37556_37560;
var G__37566 = chunk__37557_37561;
var G__37567 = count__37558_37562;
var G__37568 = (i__37559_37563 + (1));
seq__37556_37560 = G__37565;
chunk__37557_37561 = G__37566;
count__37558_37562 = G__37567;
i__37559_37563 = G__37568;
continue;
} else {
var temp__4657__auto___37569 = cljs.core.seq.call(null,seq__37556_37560);
if(temp__4657__auto___37569){
var seq__37556_37570__$1 = temp__4657__auto___37569;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37556_37570__$1)){
var c__26790__auto___37571 = cljs.core.chunk_first.call(null,seq__37556_37570__$1);
var G__37572 = cljs.core.chunk_rest.call(null,seq__37556_37570__$1);
var G__37573 = c__26790__auto___37571;
var G__37574 = cljs.core.count.call(null,c__26790__auto___37571);
var G__37575 = (0);
seq__37556_37560 = G__37572;
chunk__37557_37561 = G__37573;
count__37558_37562 = G__37574;
i__37559_37563 = G__37575;
continue;
} else {
var msg_37576 = cljs.core.first.call(null,seq__37556_37570__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_37576);

var G__37577 = cljs.core.next.call(null,seq__37556_37570__$1);
var G__37578 = null;
var G__37579 = (0);
var G__37580 = (0);
seq__37556_37560 = G__37577;
chunk__37557_37561 = G__37578;
count__37558_37562 = G__37579;
i__37559_37563 = G__37580;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__37581){
var map__37584 = p__37581;
var map__37584__$1 = ((((!((map__37584 == null)))?((((map__37584.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37584.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37584):map__37584);
var w = map__37584__$1;
var message = cljs.core.get.call(null,map__37584__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__37596 = cljs.core.seq.call(null,plugins);
var chunk__37597 = null;
var count__37598 = (0);
var i__37599 = (0);
while(true){
if((i__37599 < count__37598)){
var vec__37600 = cljs.core._nth.call(null,chunk__37597,i__37599);
var k = cljs.core.nth.call(null,vec__37600,(0),null);
var plugin = cljs.core.nth.call(null,vec__37600,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37606 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37596,chunk__37597,count__37598,i__37599,pl_37606,vec__37600,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_37606.call(null,msg_hist);
});})(seq__37596,chunk__37597,count__37598,i__37599,pl_37606,vec__37600,k,plugin))
);
} else {
}

var G__37607 = seq__37596;
var G__37608 = chunk__37597;
var G__37609 = count__37598;
var G__37610 = (i__37599 + (1));
seq__37596 = G__37607;
chunk__37597 = G__37608;
count__37598 = G__37609;
i__37599 = G__37610;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__37596);
if(temp__4657__auto__){
var seq__37596__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37596__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__37596__$1);
var G__37611 = cljs.core.chunk_rest.call(null,seq__37596__$1);
var G__37612 = c__26790__auto__;
var G__37613 = cljs.core.count.call(null,c__26790__auto__);
var G__37614 = (0);
seq__37596 = G__37611;
chunk__37597 = G__37612;
count__37598 = G__37613;
i__37599 = G__37614;
continue;
} else {
var vec__37603 = cljs.core.first.call(null,seq__37596__$1);
var k = cljs.core.nth.call(null,vec__37603,(0),null);
var plugin = cljs.core.nth.call(null,vec__37603,(1),null);
if(cljs.core.truth_(plugin)){
var pl_37615 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__37596,chunk__37597,count__37598,i__37599,pl_37615,vec__37603,k,plugin,seq__37596__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_37615.call(null,msg_hist);
});})(seq__37596,chunk__37597,count__37598,i__37599,pl_37615,vec__37603,k,plugin,seq__37596__$1,temp__4657__auto__))
);
} else {
}

var G__37616 = cljs.core.next.call(null,seq__37596__$1);
var G__37617 = null;
var G__37618 = (0);
var G__37619 = (0);
seq__37596 = G__37616;
chunk__37597 = G__37617;
count__37598 = G__37618;
i__37599 = G__37619;
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
var args37620 = [];
var len__27054__auto___37627 = arguments.length;
var i__27055__auto___37628 = (0);
while(true){
if((i__27055__auto___37628 < len__27054__auto___37627)){
args37620.push((arguments[i__27055__auto___37628]));

var G__37629 = (i__27055__auto___37628 + (1));
i__27055__auto___37628 = G__37629;
continue;
} else {
}
break;
}

var G__37622 = args37620.length;
switch (G__37622) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args37620.length)].join('')));

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

var seq__37623_37631 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__37624_37632 = null;
var count__37625_37633 = (0);
var i__37626_37634 = (0);
while(true){
if((i__37626_37634 < count__37625_37633)){
var msg_37635 = cljs.core._nth.call(null,chunk__37624_37632,i__37626_37634);
figwheel.client.socket.handle_incoming_message.call(null,msg_37635);

var G__37636 = seq__37623_37631;
var G__37637 = chunk__37624_37632;
var G__37638 = count__37625_37633;
var G__37639 = (i__37626_37634 + (1));
seq__37623_37631 = G__37636;
chunk__37624_37632 = G__37637;
count__37625_37633 = G__37638;
i__37626_37634 = G__37639;
continue;
} else {
var temp__4657__auto___37640 = cljs.core.seq.call(null,seq__37623_37631);
if(temp__4657__auto___37640){
var seq__37623_37641__$1 = temp__4657__auto___37640;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37623_37641__$1)){
var c__26790__auto___37642 = cljs.core.chunk_first.call(null,seq__37623_37641__$1);
var G__37643 = cljs.core.chunk_rest.call(null,seq__37623_37641__$1);
var G__37644 = c__26790__auto___37642;
var G__37645 = cljs.core.count.call(null,c__26790__auto___37642);
var G__37646 = (0);
seq__37623_37631 = G__37643;
chunk__37624_37632 = G__37644;
count__37625_37633 = G__37645;
i__37626_37634 = G__37646;
continue;
} else {
var msg_37647 = cljs.core.first.call(null,seq__37623_37641__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_37647);

var G__37648 = cljs.core.next.call(null,seq__37623_37641__$1);
var G__37649 = null;
var G__37650 = (0);
var G__37651 = (0);
seq__37623_37631 = G__37648;
chunk__37624_37632 = G__37649;
count__37625_37633 = G__37650;
i__37626_37634 = G__37651;
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
var len__27054__auto___37656 = arguments.length;
var i__27055__auto___37657 = (0);
while(true){
if((i__27055__auto___37657 < len__27054__auto___37656)){
args__27061__auto__.push((arguments[i__27055__auto___37657]));

var G__37658 = (i__27055__auto___37657 + (1));
i__27055__auto___37657 = G__37658;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__37653){
var map__37654 = p__37653;
var map__37654__$1 = ((((!((map__37654 == null)))?((((map__37654.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37654.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37654):map__37654);
var opts = map__37654__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq37652){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37652));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e37660){if((e37660 instanceof Error)){
var e = e37660;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e37660;

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
return (function (p__37664){
var map__37665 = p__37664;
var map__37665__$1 = ((((!((map__37665 == null)))?((((map__37665.cljs$lang$protocol_mask$partition0$ & (64))) || (map__37665.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37665):map__37665);
var msg_name = cljs.core.get.call(null,map__37665__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1499543344702