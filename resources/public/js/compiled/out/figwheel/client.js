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
var args56894 = [];
var len__27054__auto___56897 = arguments.length;
var i__27055__auto___56898 = (0);
while(true){
if((i__27055__auto___56898 < len__27054__auto___56897)){
args56894.push((arguments[i__27055__auto___56898]));

var G__56899 = (i__27055__auto___56898 + (1));
i__27055__auto___56898 = G__56899;
continue;
} else {
}
break;
}

var G__56896 = args56894.length;
switch (G__56896) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args56894.length)].join('')));

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
var len__27054__auto___56902 = arguments.length;
var i__27055__auto___56903 = (0);
while(true){
if((i__27055__auto___56903 < len__27054__auto___56902)){
args__27061__auto__.push((arguments[i__27055__auto___56903]));

var G__56904 = (i__27055__auto___56903 + (1));
i__27055__auto___56903 = G__56904;
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

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq56901){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56901));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__27061__auto__ = [];
var len__27054__auto___56906 = arguments.length;
var i__27055__auto___56907 = (0);
while(true){
if((i__27055__auto___56907 < len__27054__auto___56906)){
args__27061__auto__.push((arguments[i__27055__auto___56907]));

var G__56908 = (i__27055__auto___56907 + (1));
i__27055__auto___56907 = G__56908;
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

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq56905){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq56905));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__56909){
var map__56912 = p__56909;
var map__56912__$1 = ((((!((map__56912 == null)))?((((map__56912.cljs$lang$protocol_mask$partition0$ & (64))) || (map__56912.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__56912):map__56912);
var message = cljs.core.get.call(null,map__56912__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__56912__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
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
var c__28009__auto___57074 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___57074,ch){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___57074,ch){
return (function (state_57043){
var state_val_57044 = (state_57043[(1)]);
if((state_val_57044 === (7))){
var inst_57039 = (state_57043[(2)]);
var state_57043__$1 = state_57043;
var statearr_57045_57075 = state_57043__$1;
(statearr_57045_57075[(2)] = inst_57039);

(statearr_57045_57075[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (1))){
var state_57043__$1 = state_57043;
var statearr_57046_57076 = state_57043__$1;
(statearr_57046_57076[(2)] = null);

(statearr_57046_57076[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (4))){
var inst_56996 = (state_57043[(7)]);
var inst_56996__$1 = (state_57043[(2)]);
var state_57043__$1 = (function (){var statearr_57047 = state_57043;
(statearr_57047[(7)] = inst_56996__$1);

return statearr_57047;
})();
if(cljs.core.truth_(inst_56996__$1)){
var statearr_57048_57077 = state_57043__$1;
(statearr_57048_57077[(1)] = (5));

} else {
var statearr_57049_57078 = state_57043__$1;
(statearr_57049_57078[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (15))){
var inst_57003 = (state_57043[(8)]);
var inst_57018 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_57003);
var inst_57019 = cljs.core.first.call(null,inst_57018);
var inst_57020 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_57019);
var inst_57021 = [cljs.core.str("Figwheel: Not loading code with warnings - "),cljs.core.str(inst_57020)].join('');
var inst_57022 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_57021);
var state_57043__$1 = state_57043;
var statearr_57050_57079 = state_57043__$1;
(statearr_57050_57079[(2)] = inst_57022);

(statearr_57050_57079[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (13))){
var inst_57027 = (state_57043[(2)]);
var state_57043__$1 = state_57043;
var statearr_57051_57080 = state_57043__$1;
(statearr_57051_57080[(2)] = inst_57027);

(statearr_57051_57080[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (6))){
var state_57043__$1 = state_57043;
var statearr_57052_57081 = state_57043__$1;
(statearr_57052_57081[(2)] = null);

(statearr_57052_57081[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (17))){
var inst_57025 = (state_57043[(2)]);
var state_57043__$1 = state_57043;
var statearr_57053_57082 = state_57043__$1;
(statearr_57053_57082[(2)] = inst_57025);

(statearr_57053_57082[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (3))){
var inst_57041 = (state_57043[(2)]);
var state_57043__$1 = state_57043;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57043__$1,inst_57041);
} else {
if((state_val_57044 === (12))){
var inst_57002 = (state_57043[(9)]);
var inst_57016 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_57002,opts);
var state_57043__$1 = state_57043;
if(cljs.core.truth_(inst_57016)){
var statearr_57054_57083 = state_57043__$1;
(statearr_57054_57083[(1)] = (15));

} else {
var statearr_57055_57084 = state_57043__$1;
(statearr_57055_57084[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (2))){
var state_57043__$1 = state_57043;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57043__$1,(4),ch);
} else {
if((state_val_57044 === (11))){
var inst_57003 = (state_57043[(8)]);
var inst_57008 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_57009 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_57003);
var inst_57010 = cljs.core.async.timeout.call(null,(1000));
var inst_57011 = [inst_57009,inst_57010];
var inst_57012 = (new cljs.core.PersistentVector(null,2,(5),inst_57008,inst_57011,null));
var state_57043__$1 = state_57043;
return cljs.core.async.ioc_alts_BANG_.call(null,state_57043__$1,(14),inst_57012);
} else {
if((state_val_57044 === (9))){
var inst_57003 = (state_57043[(8)]);
var inst_57029 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_57030 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_57003);
var inst_57031 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_57030);
var inst_57032 = [cljs.core.str("Not loading: "),cljs.core.str(inst_57031)].join('');
var inst_57033 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_57032);
var state_57043__$1 = (function (){var statearr_57056 = state_57043;
(statearr_57056[(10)] = inst_57029);

return statearr_57056;
})();
var statearr_57057_57085 = state_57043__$1;
(statearr_57057_57085[(2)] = inst_57033);

(statearr_57057_57085[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (5))){
var inst_56996 = (state_57043[(7)]);
var inst_56998 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_56999 = (new cljs.core.PersistentArrayMap(null,2,inst_56998,null));
var inst_57000 = (new cljs.core.PersistentHashSet(null,inst_56999,null));
var inst_57001 = figwheel.client.focus_msgs.call(null,inst_57000,inst_56996);
var inst_57002 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_57001);
var inst_57003 = cljs.core.first.call(null,inst_57001);
var inst_57004 = figwheel.client.autoload_QMARK_.call(null);
var state_57043__$1 = (function (){var statearr_57058 = state_57043;
(statearr_57058[(9)] = inst_57002);

(statearr_57058[(8)] = inst_57003);

return statearr_57058;
})();
if(cljs.core.truth_(inst_57004)){
var statearr_57059_57086 = state_57043__$1;
(statearr_57059_57086[(1)] = (8));

} else {
var statearr_57060_57087 = state_57043__$1;
(statearr_57060_57087[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (14))){
var inst_57014 = (state_57043[(2)]);
var state_57043__$1 = state_57043;
var statearr_57061_57088 = state_57043__$1;
(statearr_57061_57088[(2)] = inst_57014);

(statearr_57061_57088[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (16))){
var state_57043__$1 = state_57043;
var statearr_57062_57089 = state_57043__$1;
(statearr_57062_57089[(2)] = null);

(statearr_57062_57089[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (10))){
var inst_57035 = (state_57043[(2)]);
var state_57043__$1 = (function (){var statearr_57063 = state_57043;
(statearr_57063[(11)] = inst_57035);

return statearr_57063;
})();
var statearr_57064_57090 = state_57043__$1;
(statearr_57064_57090[(2)] = null);

(statearr_57064_57090[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57044 === (8))){
var inst_57002 = (state_57043[(9)]);
var inst_57006 = figwheel.client.reload_file_state_QMARK_.call(null,inst_57002,opts);
var state_57043__$1 = state_57043;
if(cljs.core.truth_(inst_57006)){
var statearr_57065_57091 = state_57043__$1;
(statearr_57065_57091[(1)] = (11));

} else {
var statearr_57066_57092 = state_57043__$1;
(statearr_57066_57092[(1)] = (12));

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
});})(c__28009__auto___57074,ch))
;
return ((function (switch__27988__auto__,c__28009__auto___57074,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____0 = (function (){
var statearr_57070 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57070[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__);

(statearr_57070[(1)] = (1));

return statearr_57070;
});
var figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____1 = (function (state_57043){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_57043);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e57071){if((e57071 instanceof Object)){
var ex__27992__auto__ = e57071;
var statearr_57072_57093 = state_57043;
(statearr_57072_57093[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57043);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57071;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57094 = state_57043;
state_57043 = G__57094;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__ = function(state_57043){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____1.call(this,state_57043);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__27989__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___57074,ch))
})();
var state__28011__auto__ = (function (){var statearr_57073 = f__28010__auto__.call(null);
(statearr_57073[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___57074);

return statearr_57073;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___57074,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__57095_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__57095_SHARP_));
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
var base_path_57098 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_57098){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e57097){if((e57097 instanceof Error)){
var e = e57097;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_57098], null));
} else {
var e = e57097;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_57098))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__57099){
var map__57108 = p__57099;
var map__57108__$1 = ((((!((map__57108 == null)))?((((map__57108.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57108.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57108):map__57108);
var opts = map__57108__$1;
var build_id = cljs.core.get.call(null,map__57108__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__57108,map__57108__$1,opts,build_id){
return (function (p__57110){
var vec__57111 = p__57110;
var seq__57112 = cljs.core.seq.call(null,vec__57111);
var first__57113 = cljs.core.first.call(null,seq__57112);
var seq__57112__$1 = cljs.core.next.call(null,seq__57112);
var map__57114 = first__57113;
var map__57114__$1 = ((((!((map__57114 == null)))?((((map__57114.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57114.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57114):map__57114);
var msg = map__57114__$1;
var msg_name = cljs.core.get.call(null,map__57114__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57112__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__57111,seq__57112,first__57113,seq__57112__$1,map__57114,map__57114__$1,msg,msg_name,_,map__57108,map__57108__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__57111,seq__57112,first__57113,seq__57112__$1,map__57114,map__57114__$1,msg,msg_name,_,map__57108,map__57108__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__57108,map__57108__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__57122){
var vec__57123 = p__57122;
var seq__57124 = cljs.core.seq.call(null,vec__57123);
var first__57125 = cljs.core.first.call(null,seq__57124);
var seq__57124__$1 = cljs.core.next.call(null,seq__57124);
var map__57126 = first__57125;
var map__57126__$1 = ((((!((map__57126 == null)))?((((map__57126.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57126.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57126):map__57126);
var msg = map__57126__$1;
var msg_name = cljs.core.get.call(null,map__57126__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57124__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__57128){
var map__57140 = p__57128;
var map__57140__$1 = ((((!((map__57140 == null)))?((((map__57140.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57140.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57140):map__57140);
var on_compile_warning = cljs.core.get.call(null,map__57140__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__57140__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__57140,map__57140__$1,on_compile_warning,on_compile_fail){
return (function (p__57142){
var vec__57143 = p__57142;
var seq__57144 = cljs.core.seq.call(null,vec__57143);
var first__57145 = cljs.core.first.call(null,seq__57144);
var seq__57144__$1 = cljs.core.next.call(null,seq__57144);
var map__57146 = first__57145;
var map__57146__$1 = ((((!((map__57146 == null)))?((((map__57146.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57146.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57146):map__57146);
var msg = map__57146__$1;
var msg_name = cljs.core.get.call(null,map__57146__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__57144__$1;
var pred__57148 = cljs.core._EQ_;
var expr__57149 = msg_name;
if(cljs.core.truth_(pred__57148.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__57149))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__57148.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__57149))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__57140,map__57140__$1,on_compile_warning,on_compile_fail))
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
return (function (state_57377){
var state_val_57378 = (state_57377[(1)]);
if((state_val_57378 === (7))){
var inst_57297 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57297)){
var statearr_57379_57429 = state_57377__$1;
(statearr_57379_57429[(1)] = (8));

} else {
var statearr_57380_57430 = state_57377__$1;
(statearr_57380_57430[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (20))){
var inst_57371 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57381_57431 = state_57377__$1;
(statearr_57381_57431[(2)] = inst_57371);

(statearr_57381_57431[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (27))){
var inst_57367 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57382_57432 = state_57377__$1;
(statearr_57382_57432[(2)] = inst_57367);

(statearr_57382_57432[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (1))){
var inst_57290 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57290)){
var statearr_57383_57433 = state_57377__$1;
(statearr_57383_57433[(1)] = (2));

} else {
var statearr_57384_57434 = state_57377__$1;
(statearr_57384_57434[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (24))){
var inst_57369 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57385_57435 = state_57377__$1;
(statearr_57385_57435[(2)] = inst_57369);

(statearr_57385_57435[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (4))){
var inst_57375 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57377__$1,inst_57375);
} else {
if((state_val_57378 === (15))){
var inst_57373 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57386_57436 = state_57377__$1;
(statearr_57386_57436[(2)] = inst_57373);

(statearr_57386_57436[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (21))){
var inst_57326 = (state_57377[(2)]);
var inst_57327 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57328 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57327);
var state_57377__$1 = (function (){var statearr_57387 = state_57377;
(statearr_57387[(7)] = inst_57326);

return statearr_57387;
})();
var statearr_57388_57437 = state_57377__$1;
(statearr_57388_57437[(2)] = inst_57328);

(statearr_57388_57437[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (31))){
var inst_57356 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57356)){
var statearr_57389_57438 = state_57377__$1;
(statearr_57389_57438[(1)] = (34));

} else {
var statearr_57390_57439 = state_57377__$1;
(statearr_57390_57439[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (32))){
var inst_57365 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57391_57440 = state_57377__$1;
(statearr_57391_57440[(2)] = inst_57365);

(statearr_57391_57440[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (33))){
var inst_57352 = (state_57377[(2)]);
var inst_57353 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57354 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57353);
var state_57377__$1 = (function (){var statearr_57392 = state_57377;
(statearr_57392[(8)] = inst_57352);

return statearr_57392;
})();
var statearr_57393_57441 = state_57377__$1;
(statearr_57393_57441[(2)] = inst_57354);

(statearr_57393_57441[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (13))){
var inst_57311 = figwheel.client.heads_up.clear.call(null);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(16),inst_57311);
} else {
if((state_val_57378 === (22))){
var inst_57332 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57333 = figwheel.client.heads_up.append_warning_message.call(null,inst_57332);
var state_57377__$1 = state_57377;
var statearr_57394_57442 = state_57377__$1;
(statearr_57394_57442[(2)] = inst_57333);

(statearr_57394_57442[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (36))){
var inst_57363 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57395_57443 = state_57377__$1;
(statearr_57395_57443[(2)] = inst_57363);

(statearr_57395_57443[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (29))){
var inst_57343 = (state_57377[(2)]);
var inst_57344 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57345 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57344);
var state_57377__$1 = (function (){var statearr_57396 = state_57377;
(statearr_57396[(9)] = inst_57343);

return statearr_57396;
})();
var statearr_57397_57444 = state_57377__$1;
(statearr_57397_57444[(2)] = inst_57345);

(statearr_57397_57444[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (6))){
var inst_57292 = (state_57377[(10)]);
var state_57377__$1 = state_57377;
var statearr_57398_57445 = state_57377__$1;
(statearr_57398_57445[(2)] = inst_57292);

(statearr_57398_57445[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (28))){
var inst_57339 = (state_57377[(2)]);
var inst_57340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57341 = figwheel.client.heads_up.display_warning.call(null,inst_57340);
var state_57377__$1 = (function (){var statearr_57399 = state_57377;
(statearr_57399[(11)] = inst_57339);

return statearr_57399;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(29),inst_57341);
} else {
if((state_val_57378 === (25))){
var inst_57337 = figwheel.client.heads_up.clear.call(null);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(28),inst_57337);
} else {
if((state_val_57378 === (34))){
var inst_57358 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(37),inst_57358);
} else {
if((state_val_57378 === (17))){
var inst_57317 = (state_57377[(2)]);
var inst_57318 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57319 = figwheel.client.auto_jump_to_error.call(null,opts,inst_57318);
var state_57377__$1 = (function (){var statearr_57400 = state_57377;
(statearr_57400[(12)] = inst_57317);

return statearr_57400;
})();
var statearr_57401_57446 = state_57377__$1;
(statearr_57401_57446[(2)] = inst_57319);

(statearr_57401_57446[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (3))){
var inst_57309 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57309)){
var statearr_57402_57447 = state_57377__$1;
(statearr_57402_57447[(1)] = (13));

} else {
var statearr_57403_57448 = state_57377__$1;
(statearr_57403_57448[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (12))){
var inst_57305 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57404_57449 = state_57377__$1;
(statearr_57404_57449[(2)] = inst_57305);

(statearr_57404_57449[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (2))){
var inst_57292 = (state_57377[(10)]);
var inst_57292__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_57377__$1 = (function (){var statearr_57405 = state_57377;
(statearr_57405[(10)] = inst_57292__$1);

return statearr_57405;
})();
if(cljs.core.truth_(inst_57292__$1)){
var statearr_57406_57450 = state_57377__$1;
(statearr_57406_57450[(1)] = (5));

} else {
var statearr_57407_57451 = state_57377__$1;
(statearr_57407_57451[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (23))){
var inst_57335 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57335)){
var statearr_57408_57452 = state_57377__$1;
(statearr_57408_57452[(1)] = (25));

} else {
var statearr_57409_57453 = state_57377__$1;
(statearr_57409_57453[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (35))){
var state_57377__$1 = state_57377;
var statearr_57410_57454 = state_57377__$1;
(statearr_57410_57454[(2)] = null);

(statearr_57410_57454[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (19))){
var inst_57330 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57330)){
var statearr_57411_57455 = state_57377__$1;
(statearr_57411_57455[(1)] = (22));

} else {
var statearr_57412_57456 = state_57377__$1;
(statearr_57412_57456[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (11))){
var inst_57301 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57413_57457 = state_57377__$1;
(statearr_57413_57457[(2)] = inst_57301);

(statearr_57413_57457[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (9))){
var inst_57303 = figwheel.client.heads_up.clear.call(null);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(12),inst_57303);
} else {
if((state_val_57378 === (5))){
var inst_57294 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_57377__$1 = state_57377;
var statearr_57414_57458 = state_57377__$1;
(statearr_57414_57458[(2)] = inst_57294);

(statearr_57414_57458[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (14))){
var inst_57321 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57321)){
var statearr_57415_57459 = state_57377__$1;
(statearr_57415_57459[(1)] = (18));

} else {
var statearr_57416_57460 = state_57377__$1;
(statearr_57416_57460[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (26))){
var inst_57347 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_57377__$1 = state_57377;
if(cljs.core.truth_(inst_57347)){
var statearr_57417_57461 = state_57377__$1;
(statearr_57417_57461[(1)] = (30));

} else {
var statearr_57418_57462 = state_57377__$1;
(statearr_57418_57462[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (16))){
var inst_57313 = (state_57377[(2)]);
var inst_57314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57315 = figwheel.client.heads_up.display_exception.call(null,inst_57314);
var state_57377__$1 = (function (){var statearr_57419 = state_57377;
(statearr_57419[(13)] = inst_57313);

return statearr_57419;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(17),inst_57315);
} else {
if((state_val_57378 === (30))){
var inst_57349 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57350 = figwheel.client.heads_up.display_warning.call(null,inst_57349);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(33),inst_57350);
} else {
if((state_val_57378 === (10))){
var inst_57307 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57420_57463 = state_57377__$1;
(statearr_57420_57463[(2)] = inst_57307);

(statearr_57420_57463[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (18))){
var inst_57323 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_57324 = figwheel.client.heads_up.display_exception.call(null,inst_57323);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(21),inst_57324);
} else {
if((state_val_57378 === (37))){
var inst_57360 = (state_57377[(2)]);
var state_57377__$1 = state_57377;
var statearr_57421_57464 = state_57377__$1;
(statearr_57421_57464[(2)] = inst_57360);

(statearr_57421_57464[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57378 === (8))){
var inst_57299 = figwheel.client.heads_up.flash_loaded.call(null);
var state_57377__$1 = state_57377;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57377__$1,(11),inst_57299);
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
var statearr_57425 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_57425[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__);

(statearr_57425[(1)] = (1));

return statearr_57425;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____1 = (function (state_57377){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_57377);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e57426){if((e57426 instanceof Object)){
var ex__27992__auto__ = e57426;
var statearr_57427_57465 = state_57377;
(statearr_57427_57465[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57377);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57426;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57466 = state_57377;
state_57377 = G__57466;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__ = function(state_57377){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____1.call(this,state_57377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,msg_hist,msg_names,msg))
})();
var state__28011__auto__ = (function (){var statearr_57428 = f__28010__auto__.call(null);
(statearr_57428[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_57428;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto__,msg_hist,msg_names,msg))
);

return c__28009__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__28009__auto___57529 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28009__auto___57529,ch){
return (function (){
var f__28010__auto__ = (function (){var switch__27988__auto__ = ((function (c__28009__auto___57529,ch){
return (function (state_57512){
var state_val_57513 = (state_57512[(1)]);
if((state_val_57513 === (1))){
var state_57512__$1 = state_57512;
var statearr_57514_57530 = state_57512__$1;
(statearr_57514_57530[(2)] = null);

(statearr_57514_57530[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (2))){
var state_57512__$1 = state_57512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57512__$1,(4),ch);
} else {
if((state_val_57513 === (3))){
var inst_57510 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57512__$1,inst_57510);
} else {
if((state_val_57513 === (4))){
var inst_57500 = (state_57512[(7)]);
var inst_57500__$1 = (state_57512[(2)]);
var state_57512__$1 = (function (){var statearr_57515 = state_57512;
(statearr_57515[(7)] = inst_57500__$1);

return statearr_57515;
})();
if(cljs.core.truth_(inst_57500__$1)){
var statearr_57516_57531 = state_57512__$1;
(statearr_57516_57531[(1)] = (5));

} else {
var statearr_57517_57532 = state_57512__$1;
(statearr_57517_57532[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (5))){
var inst_57500 = (state_57512[(7)]);
var inst_57502 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_57500);
var state_57512__$1 = state_57512;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57512__$1,(8),inst_57502);
} else {
if((state_val_57513 === (6))){
var state_57512__$1 = state_57512;
var statearr_57518_57533 = state_57512__$1;
(statearr_57518_57533[(2)] = null);

(statearr_57518_57533[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (7))){
var inst_57508 = (state_57512[(2)]);
var state_57512__$1 = state_57512;
var statearr_57519_57534 = state_57512__$1;
(statearr_57519_57534[(2)] = inst_57508);

(statearr_57519_57534[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_57513 === (8))){
var inst_57504 = (state_57512[(2)]);
var state_57512__$1 = (function (){var statearr_57520 = state_57512;
(statearr_57520[(8)] = inst_57504);

return statearr_57520;
})();
var statearr_57521_57535 = state_57512__$1;
(statearr_57521_57535[(2)] = null);

(statearr_57521_57535[(1)] = (2));


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
});})(c__28009__auto___57529,ch))
;
return ((function (switch__27988__auto__,c__28009__auto___57529,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__27989__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__27989__auto____0 = (function (){
var statearr_57525 = [null,null,null,null,null,null,null,null,null];
(statearr_57525[(0)] = figwheel$client$heads_up_plugin_$_state_machine__27989__auto__);

(statearr_57525[(1)] = (1));

return statearr_57525;
});
var figwheel$client$heads_up_plugin_$_state_machine__27989__auto____1 = (function (state_57512){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_57512);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e57526){if((e57526 instanceof Object)){
var ex__27992__auto__ = e57526;
var statearr_57527_57536 = state_57512;
(statearr_57527_57536[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57512);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57526;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57537 = state_57512;
state_57512 = G__57537;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__27989__auto__ = function(state_57512){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__27989__auto____1.call(this,state_57512);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$heads_up_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__27989__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__27989__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto___57529,ch))
})();
var state__28011__auto__ = (function (){var statearr_57528 = f__28010__auto__.call(null);
(statearr_57528[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto___57529);

return statearr_57528;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28011__auto__);
});})(c__28009__auto___57529,ch))
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
return (function (state_57558){
var state_val_57559 = (state_57558[(1)]);
if((state_val_57559 === (1))){
var inst_57553 = cljs.core.async.timeout.call(null,(3000));
var state_57558__$1 = state_57558;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57558__$1,(2),inst_57553);
} else {
if((state_val_57559 === (2))){
var inst_57555 = (state_57558[(2)]);
var inst_57556 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_57558__$1 = (function (){var statearr_57560 = state_57558;
(statearr_57560[(7)] = inst_57555);

return statearr_57560;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57558__$1,inst_57556);
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
var statearr_57564 = [null,null,null,null,null,null,null,null];
(statearr_57564[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__);

(statearr_57564[(1)] = (1));

return statearr_57564;
});
var figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____1 = (function (state_57558){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_57558);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e57565){if((e57565 instanceof Object)){
var ex__27992__auto__ = e57565;
var statearr_57566_57568 = state_57558;
(statearr_57566_57568[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57558);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57565;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57569 = state_57558;
state_57558 = G__57569;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__ = function(state_57558){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____1.call(this,state_57558);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__27989__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__))
})();
var state__28011__auto__ = (function (){var statearr_57567 = f__28010__auto__.call(null);
(statearr_57567[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_57567;
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
return (function (state_57592){
var state_val_57593 = (state_57592[(1)]);
if((state_val_57593 === (1))){
var inst_57586 = cljs.core.async.timeout.call(null,(2000));
var state_57592__$1 = state_57592;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_57592__$1,(2),inst_57586);
} else {
if((state_val_57593 === (2))){
var inst_57588 = (state_57592[(2)]);
var inst_57589 = [cljs.core.str("Figwheel Client Version <strong>"),cljs.core.str(figwheel.client._figwheel_version_),cljs.core.str("</strong> is not equal to "),cljs.core.str("Figwheel Sidecar Version <strong>"),cljs.core.str(figwheel_version),cljs.core.str("</strong>"),cljs.core.str(".  Shutting down Websocket Connection!"),cljs.core.str("<h4>To fix try:</h4>"),cljs.core.str("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_57590 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_57589);
var state_57592__$1 = (function (){var statearr_57594 = state_57592;
(statearr_57594[(7)] = inst_57588);

return statearr_57594;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_57592__$1,inst_57590);
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
var statearr_57598 = [null,null,null,null,null,null,null,null];
(statearr_57598[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__);

(statearr_57598[(1)] = (1));

return statearr_57598;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____1 = (function (state_57592){
while(true){
var ret_value__27990__auto__ = (function (){try{while(true){
var result__27991__auto__ = switch__27988__auto__.call(null,state_57592);
if(cljs.core.keyword_identical_QMARK_.call(null,result__27991__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__27991__auto__;
}
break;
}
}catch (e57599){if((e57599 instanceof Object)){
var ex__27992__auto__ = e57599;
var statearr_57600_57602 = state_57592;
(statearr_57600_57602[(5)] = ex__27992__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_57592);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e57599;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__27990__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__57603 = state_57592;
state_57592 = G__57603;
continue;
} else {
return ret_value__27990__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__ = function(state_57592){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____1.call(this,state_57592);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__27989__auto__;
})()
;})(switch__27988__auto__,c__28009__auto__,figwheel_version,temp__4657__auto__))
})();
var state__28011__auto__ = (function (){var statearr_57601 = f__28010__auto__.call(null);
(statearr_57601[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28009__auto__);

return statearr_57601;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__57604){
var map__57608 = p__57604;
var map__57608__$1 = ((((!((map__57608 == null)))?((((map__57608.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57608.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57608):map__57608);
var file = cljs.core.get.call(null,map__57608__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__57608__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__57608__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__57610 = "";
var G__57610__$1 = (cljs.core.truth_(file)?[cljs.core.str(G__57610),cljs.core.str("file "),cljs.core.str(file)].join(''):G__57610);
var G__57610__$2 = (cljs.core.truth_(line)?[cljs.core.str(G__57610__$1),cljs.core.str(" at line "),cljs.core.str(line)].join(''):G__57610__$1);
if(cljs.core.truth_((function (){var and__25967__auto__ = line;
if(cljs.core.truth_(and__25967__auto__)){
return column;
} else {
return and__25967__auto__;
}
})())){
return [cljs.core.str(G__57610__$2),cljs.core.str(", column "),cljs.core.str(column)].join('');
} else {
return G__57610__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__57611){
var map__57618 = p__57611;
var map__57618__$1 = ((((!((map__57618 == null)))?((((map__57618.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57618.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57618):map__57618);
var ed = map__57618__$1;
var formatted_exception = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__57618__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__57620_57624 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__57621_57625 = null;
var count__57622_57626 = (0);
var i__57623_57627 = (0);
while(true){
if((i__57623_57627 < count__57622_57626)){
var msg_57628 = cljs.core._nth.call(null,chunk__57621_57625,i__57623_57627);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_57628);

var G__57629 = seq__57620_57624;
var G__57630 = chunk__57621_57625;
var G__57631 = count__57622_57626;
var G__57632 = (i__57623_57627 + (1));
seq__57620_57624 = G__57629;
chunk__57621_57625 = G__57630;
count__57622_57626 = G__57631;
i__57623_57627 = G__57632;
continue;
} else {
var temp__4657__auto___57633 = cljs.core.seq.call(null,seq__57620_57624);
if(temp__4657__auto___57633){
var seq__57620_57634__$1 = temp__4657__auto___57633;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57620_57634__$1)){
var c__26790__auto___57635 = cljs.core.chunk_first.call(null,seq__57620_57634__$1);
var G__57636 = cljs.core.chunk_rest.call(null,seq__57620_57634__$1);
var G__57637 = c__26790__auto___57635;
var G__57638 = cljs.core.count.call(null,c__26790__auto___57635);
var G__57639 = (0);
seq__57620_57624 = G__57636;
chunk__57621_57625 = G__57637;
count__57622_57626 = G__57638;
i__57623_57627 = G__57639;
continue;
} else {
var msg_57640 = cljs.core.first.call(null,seq__57620_57634__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_57640);

var G__57641 = cljs.core.next.call(null,seq__57620_57634__$1);
var G__57642 = null;
var G__57643 = (0);
var G__57644 = (0);
seq__57620_57624 = G__57641;
chunk__57621_57625 = G__57642;
count__57622_57626 = G__57643;
i__57623_57627 = G__57644;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__57645){
var map__57648 = p__57645;
var map__57648__$1 = ((((!((map__57648 == null)))?((((map__57648.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57648.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57648):map__57648);
var w = map__57648__$1;
var message = cljs.core.get.call(null,map__57648__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
var seq__57660 = cljs.core.seq.call(null,plugins);
var chunk__57661 = null;
var count__57662 = (0);
var i__57663 = (0);
while(true){
if((i__57663 < count__57662)){
var vec__57664 = cljs.core._nth.call(null,chunk__57661,i__57663);
var k = cljs.core.nth.call(null,vec__57664,(0),null);
var plugin = cljs.core.nth.call(null,vec__57664,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57670 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57660,chunk__57661,count__57662,i__57663,pl_57670,vec__57664,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_57670.call(null,msg_hist);
});})(seq__57660,chunk__57661,count__57662,i__57663,pl_57670,vec__57664,k,plugin))
);
} else {
}

var G__57671 = seq__57660;
var G__57672 = chunk__57661;
var G__57673 = count__57662;
var G__57674 = (i__57663 + (1));
seq__57660 = G__57671;
chunk__57661 = G__57672;
count__57662 = G__57673;
i__57663 = G__57674;
continue;
} else {
var temp__4657__auto__ = cljs.core.seq.call(null,seq__57660);
if(temp__4657__auto__){
var seq__57660__$1 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57660__$1)){
var c__26790__auto__ = cljs.core.chunk_first.call(null,seq__57660__$1);
var G__57675 = cljs.core.chunk_rest.call(null,seq__57660__$1);
var G__57676 = c__26790__auto__;
var G__57677 = cljs.core.count.call(null,c__26790__auto__);
var G__57678 = (0);
seq__57660 = G__57675;
chunk__57661 = G__57676;
count__57662 = G__57677;
i__57663 = G__57678;
continue;
} else {
var vec__57667 = cljs.core.first.call(null,seq__57660__$1);
var k = cljs.core.nth.call(null,vec__57667,(0),null);
var plugin = cljs.core.nth.call(null,vec__57667,(1),null);
if(cljs.core.truth_(plugin)){
var pl_57679 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__57660,chunk__57661,count__57662,i__57663,pl_57679,vec__57667,k,plugin,seq__57660__$1,temp__4657__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_57679.call(null,msg_hist);
});})(seq__57660,chunk__57661,count__57662,i__57663,pl_57679,vec__57667,k,plugin,seq__57660__$1,temp__4657__auto__))
);
} else {
}

var G__57680 = cljs.core.next.call(null,seq__57660__$1);
var G__57681 = null;
var G__57682 = (0);
var G__57683 = (0);
seq__57660 = G__57680;
chunk__57661 = G__57681;
count__57662 = G__57682;
i__57663 = G__57683;
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
var args57684 = [];
var len__27054__auto___57691 = arguments.length;
var i__27055__auto___57692 = (0);
while(true){
if((i__27055__auto___57692 < len__27054__auto___57691)){
args57684.push((arguments[i__27055__auto___57692]));

var G__57693 = (i__27055__auto___57692 + (1));
i__27055__auto___57692 = G__57693;
continue;
} else {
}
break;
}

var G__57686 = args57684.length;
switch (G__57686) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args57684.length)].join('')));

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

var seq__57687_57695 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__57688_57696 = null;
var count__57689_57697 = (0);
var i__57690_57698 = (0);
while(true){
if((i__57690_57698 < count__57689_57697)){
var msg_57699 = cljs.core._nth.call(null,chunk__57688_57696,i__57690_57698);
figwheel.client.socket.handle_incoming_message.call(null,msg_57699);

var G__57700 = seq__57687_57695;
var G__57701 = chunk__57688_57696;
var G__57702 = count__57689_57697;
var G__57703 = (i__57690_57698 + (1));
seq__57687_57695 = G__57700;
chunk__57688_57696 = G__57701;
count__57689_57697 = G__57702;
i__57690_57698 = G__57703;
continue;
} else {
var temp__4657__auto___57704 = cljs.core.seq.call(null,seq__57687_57695);
if(temp__4657__auto___57704){
var seq__57687_57705__$1 = temp__4657__auto___57704;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__57687_57705__$1)){
var c__26790__auto___57706 = cljs.core.chunk_first.call(null,seq__57687_57705__$1);
var G__57707 = cljs.core.chunk_rest.call(null,seq__57687_57705__$1);
var G__57708 = c__26790__auto___57706;
var G__57709 = cljs.core.count.call(null,c__26790__auto___57706);
var G__57710 = (0);
seq__57687_57695 = G__57707;
chunk__57688_57696 = G__57708;
count__57689_57697 = G__57709;
i__57690_57698 = G__57710;
continue;
} else {
var msg_57711 = cljs.core.first.call(null,seq__57687_57705__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_57711);

var G__57712 = cljs.core.next.call(null,seq__57687_57705__$1);
var G__57713 = null;
var G__57714 = (0);
var G__57715 = (0);
seq__57687_57695 = G__57712;
chunk__57688_57696 = G__57713;
count__57689_57697 = G__57714;
i__57690_57698 = G__57715;
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
var len__27054__auto___57720 = arguments.length;
var i__27055__auto___57721 = (0);
while(true){
if((i__27055__auto___57721 < len__27054__auto___57720)){
args__27061__auto__.push((arguments[i__27055__auto___57721]));

var G__57722 = (i__27055__auto___57721 + (1));
i__27055__auto___57721 = G__57722;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((0) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__27062__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__57717){
var map__57718 = p__57717;
var map__57718__$1 = ((((!((map__57718 == null)))?((((map__57718.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57718.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57718):map__57718);
var opts = map__57718__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq57716){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq57716));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e57724){if((e57724 instanceof Error)){
var e = e57724;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e57724;

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
return (function (p__57728){
var map__57729 = p__57728;
var map__57729__$1 = ((((!((map__57729 == null)))?((((map__57729.cljs$lang$protocol_mask$partition0$ & (64))) || (map__57729.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__57729):map__57729);
var msg_name = cljs.core.get.call(null,map__57729__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1500065526998