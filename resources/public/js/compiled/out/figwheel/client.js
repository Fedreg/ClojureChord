// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.10";
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__91180 = arguments.length;
switch (G__91180) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

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
var args__29809__auto__ = [];
var len__29802__auto___91183 = arguments.length;
var i__29803__auto___91184 = (0);
while(true){
if((i__29803__auto___91184 < len__29802__auto___91183)){
args__29809__auto__.push((arguments[i__29803__auto___91184]));

var G__91185 = (i__29803__auto___91184 + (1));
i__29803__auto___91184 = G__91185;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq91182){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91182));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__29809__auto__ = [];
var len__29802__auto___91187 = arguments.length;
var i__29803__auto___91188 = (0);
while(true){
if((i__29803__auto___91188 < len__29802__auto___91187)){
args__29809__auto__.push((arguments[i__29803__auto___91188]));

var G__91189 = (i__29803__auto___91188 + (1));
i__29803__auto___91188 = G__91189;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq91186){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91186));
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
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)")].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel autoloading "),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

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
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__91190){
var map__91191 = p__91190;
var map__91191__$1 = ((((!((map__91191 == null)))?((((map__91191.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91191.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91191):map__91191);
var message = cljs.core.get.call(null,map__91191__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__91191__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" : "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__28569__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__28557__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__28557__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__28557__auto__;
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
var c__32958__auto___91270 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___91270,ch){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___91270,ch){
return (function (state_91242){
var state_val_91243 = (state_91242[(1)]);
if((state_val_91243 === (7))){
var inst_91238 = (state_91242[(2)]);
var state_91242__$1 = state_91242;
var statearr_91244_91271 = state_91242__$1;
(statearr_91244_91271[(2)] = inst_91238);

(statearr_91244_91271[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (1))){
var state_91242__$1 = state_91242;
var statearr_91245_91272 = state_91242__$1;
(statearr_91245_91272[(2)] = null);

(statearr_91245_91272[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (4))){
var inst_91195 = (state_91242[(7)]);
var inst_91195__$1 = (state_91242[(2)]);
var state_91242__$1 = (function (){var statearr_91246 = state_91242;
(statearr_91246[(7)] = inst_91195__$1);

return statearr_91246;
})();
if(cljs.core.truth_(inst_91195__$1)){
var statearr_91247_91273 = state_91242__$1;
(statearr_91247_91273[(1)] = (5));

} else {
var statearr_91248_91274 = state_91242__$1;
(statearr_91248_91274[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (15))){
var inst_91202 = (state_91242[(8)]);
var inst_91217 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_91202);
var inst_91218 = cljs.core.first.call(null,inst_91217);
var inst_91219 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_91218);
var inst_91220 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Not loading code with warnings - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91219)].join('');
var inst_91221 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_91220);
var state_91242__$1 = state_91242;
var statearr_91249_91275 = state_91242__$1;
(statearr_91249_91275[(2)] = inst_91221);

(statearr_91249_91275[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (13))){
var inst_91226 = (state_91242[(2)]);
var state_91242__$1 = state_91242;
var statearr_91250_91276 = state_91242__$1;
(statearr_91250_91276[(2)] = inst_91226);

(statearr_91250_91276[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (6))){
var state_91242__$1 = state_91242;
var statearr_91251_91277 = state_91242__$1;
(statearr_91251_91277[(2)] = null);

(statearr_91251_91277[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (17))){
var inst_91224 = (state_91242[(2)]);
var state_91242__$1 = state_91242;
var statearr_91252_91278 = state_91242__$1;
(statearr_91252_91278[(2)] = inst_91224);

(statearr_91252_91278[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (3))){
var inst_91240 = (state_91242[(2)]);
var state_91242__$1 = state_91242;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91242__$1,inst_91240);
} else {
if((state_val_91243 === (12))){
var inst_91201 = (state_91242[(9)]);
var inst_91215 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_91201,opts);
var state_91242__$1 = state_91242;
if(cljs.core.truth_(inst_91215)){
var statearr_91253_91279 = state_91242__$1;
(statearr_91253_91279[(1)] = (15));

} else {
var statearr_91254_91280 = state_91242__$1;
(statearr_91254_91280[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (2))){
var state_91242__$1 = state_91242;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91242__$1,(4),ch);
} else {
if((state_val_91243 === (11))){
var inst_91202 = (state_91242[(8)]);
var inst_91207 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_91208 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_91202);
var inst_91209 = cljs.core.async.timeout.call(null,(1000));
var inst_91210 = [inst_91208,inst_91209];
var inst_91211 = (new cljs.core.PersistentVector(null,2,(5),inst_91207,inst_91210,null));
var state_91242__$1 = state_91242;
return cljs.core.async.ioc_alts_BANG_.call(null,state_91242__$1,(14),inst_91211);
} else {
if((state_val_91243 === (9))){
var inst_91202 = (state_91242[(8)]);
var inst_91228 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_91229 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_91202);
var inst_91230 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_91229);
var inst_91231 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Not loading: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_91230)].join('');
var inst_91232 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_91231);
var state_91242__$1 = (function (){var statearr_91255 = state_91242;
(statearr_91255[(10)] = inst_91228);

return statearr_91255;
})();
var statearr_91256_91281 = state_91242__$1;
(statearr_91256_91281[(2)] = inst_91232);

(statearr_91256_91281[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (5))){
var inst_91195 = (state_91242[(7)]);
var inst_91197 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_91198 = (new cljs.core.PersistentArrayMap(null,2,inst_91197,null));
var inst_91199 = (new cljs.core.PersistentHashSet(null,inst_91198,null));
var inst_91200 = figwheel.client.focus_msgs.call(null,inst_91199,inst_91195);
var inst_91201 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_91200);
var inst_91202 = cljs.core.first.call(null,inst_91200);
var inst_91203 = figwheel.client.autoload_QMARK_.call(null);
var state_91242__$1 = (function (){var statearr_91257 = state_91242;
(statearr_91257[(9)] = inst_91201);

(statearr_91257[(8)] = inst_91202);

return statearr_91257;
})();
if(cljs.core.truth_(inst_91203)){
var statearr_91258_91282 = state_91242__$1;
(statearr_91258_91282[(1)] = (8));

} else {
var statearr_91259_91283 = state_91242__$1;
(statearr_91259_91283[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (14))){
var inst_91213 = (state_91242[(2)]);
var state_91242__$1 = state_91242;
var statearr_91260_91284 = state_91242__$1;
(statearr_91260_91284[(2)] = inst_91213);

(statearr_91260_91284[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (16))){
var state_91242__$1 = state_91242;
var statearr_91261_91285 = state_91242__$1;
(statearr_91261_91285[(2)] = null);

(statearr_91261_91285[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (10))){
var inst_91234 = (state_91242[(2)]);
var state_91242__$1 = (function (){var statearr_91262 = state_91242;
(statearr_91262[(11)] = inst_91234);

return statearr_91262;
})();
var statearr_91263_91286 = state_91242__$1;
(statearr_91263_91286[(2)] = null);

(statearr_91263_91286[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91243 === (8))){
var inst_91201 = (state_91242[(9)]);
var inst_91205 = figwheel.client.reload_file_state_QMARK_.call(null,inst_91201,opts);
var state_91242__$1 = state_91242;
if(cljs.core.truth_(inst_91205)){
var statearr_91264_91287 = state_91242__$1;
(statearr_91264_91287[(1)] = (11));

} else {
var statearr_91265_91288 = state_91242__$1;
(statearr_91265_91288[(1)] = (12));

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
});})(c__32958__auto___91270,ch))
;
return ((function (switch__32868__auto__,c__32958__auto___91270,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__32869__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__32869__auto____0 = (function (){
var statearr_91266 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91266[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__32869__auto__);

(statearr_91266[(1)] = (1));

return statearr_91266;
});
var figwheel$client$file_reloader_plugin_$_state_machine__32869__auto____1 = (function (state_91242){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_91242);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e91267){if((e91267 instanceof Object)){
var ex__32872__auto__ = e91267;
var statearr_91268_91289 = state_91242;
(statearr_91268_91289[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91267;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91290 = state_91242;
state_91242 = G__91290;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__32869__auto__ = function(state_91242){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__32869__auto____1.call(this,state_91242);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__32869__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__32869__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___91270,ch))
})();
var state__32960__auto__ = (function (){var statearr_91269 = f__32959__auto__.call(null);
(statearr_91269[(6)] = c__32958__auto___91270);

return statearr_91269;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___91270,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__91291_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__91291_SHARP_));
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
var base_path_91293 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_91293){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e91292){if((e91292 instanceof Error)){
var e = e91292;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_91293], null));
} else {
var e = e91292;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_91293))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__91294){
var map__91295 = p__91294;
var map__91295__$1 = ((((!((map__91295 == null)))?((((map__91295.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91295.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91295):map__91295);
var opts = map__91295__$1;
var build_id = cljs.core.get.call(null,map__91295__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__91295,map__91295__$1,opts,build_id){
return (function (p__91297){
var vec__91298 = p__91297;
var seq__91299 = cljs.core.seq.call(null,vec__91298);
var first__91300 = cljs.core.first.call(null,seq__91299);
var seq__91299__$1 = cljs.core.next.call(null,seq__91299);
var map__91301 = first__91300;
var map__91301__$1 = ((((!((map__91301 == null)))?((((map__91301.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91301.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91301):map__91301);
var msg = map__91301__$1;
var msg_name = cljs.core.get.call(null,map__91301__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__91299__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__91298,seq__91299,first__91300,seq__91299__$1,map__91301,map__91301__$1,msg,msg_name,_,map__91295,map__91295__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__91298,seq__91299,first__91300,seq__91299__$1,map__91301,map__91301__$1,msg,msg_name,_,map__91295,map__91295__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__91295,map__91295__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__91303){
var vec__91304 = p__91303;
var seq__91305 = cljs.core.seq.call(null,vec__91304);
var first__91306 = cljs.core.first.call(null,seq__91305);
var seq__91305__$1 = cljs.core.next.call(null,seq__91305);
var map__91307 = first__91306;
var map__91307__$1 = ((((!((map__91307 == null)))?((((map__91307.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91307.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91307):map__91307);
var msg = map__91307__$1;
var msg_name = cljs.core.get.call(null,map__91307__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__91305__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__91309){
var map__91310 = p__91309;
var map__91310__$1 = ((((!((map__91310 == null)))?((((map__91310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91310.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91310):map__91310);
var on_compile_warning = cljs.core.get.call(null,map__91310__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__91310__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__91310,map__91310__$1,on_compile_warning,on_compile_fail){
return (function (p__91312){
var vec__91313 = p__91312;
var seq__91314 = cljs.core.seq.call(null,vec__91313);
var first__91315 = cljs.core.first.call(null,seq__91314);
var seq__91314__$1 = cljs.core.next.call(null,seq__91314);
var map__91316 = first__91315;
var map__91316__$1 = ((((!((map__91316 == null)))?((((map__91316.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91316.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91316):map__91316);
var msg = map__91316__$1;
var msg_name = cljs.core.get.call(null,map__91316__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__91314__$1;
var pred__91318 = cljs.core._EQ_;
var expr__91319 = msg_name;
if(cljs.core.truth_(pred__91318.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__91319))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__91318.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__91319))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__91310,map__91310__$1,on_compile_warning,on_compile_fail))
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
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__,msg_hist,msg_names,msg){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__,msg_hist,msg_names,msg){
return (function (state_91408){
var state_val_91409 = (state_91408[(1)]);
if((state_val_91409 === (7))){
var inst_91328 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
if(cljs.core.truth_(inst_91328)){
var statearr_91410_91457 = state_91408__$1;
(statearr_91410_91457[(1)] = (8));

} else {
var statearr_91411_91458 = state_91408__$1;
(statearr_91411_91458[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (20))){
var inst_91402 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91412_91459 = state_91408__$1;
(statearr_91412_91459[(2)] = inst_91402);

(statearr_91412_91459[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (27))){
var inst_91398 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91413_91460 = state_91408__$1;
(statearr_91413_91460[(2)] = inst_91398);

(statearr_91413_91460[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (1))){
var inst_91321 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_91408__$1 = state_91408;
if(cljs.core.truth_(inst_91321)){
var statearr_91414_91461 = state_91408__$1;
(statearr_91414_91461[(1)] = (2));

} else {
var statearr_91415_91462 = state_91408__$1;
(statearr_91415_91462[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (24))){
var inst_91400 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91416_91463 = state_91408__$1;
(statearr_91416_91463[(2)] = inst_91400);

(statearr_91416_91463[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (4))){
var inst_91406 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91408__$1,inst_91406);
} else {
if((state_val_91409 === (15))){
var inst_91404 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91417_91464 = state_91408__$1;
(statearr_91417_91464[(2)] = inst_91404);

(statearr_91417_91464[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (21))){
var inst_91357 = (state_91408[(2)]);
var inst_91358 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91359 = figwheel.client.auto_jump_to_error.call(null,opts,inst_91358);
var state_91408__$1 = (function (){var statearr_91418 = state_91408;
(statearr_91418[(7)] = inst_91357);

return statearr_91418;
})();
var statearr_91419_91465 = state_91408__$1;
(statearr_91419_91465[(2)] = inst_91359);

(statearr_91419_91465[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (31))){
var inst_91387 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_91408__$1 = state_91408;
if(cljs.core.truth_(inst_91387)){
var statearr_91420_91466 = state_91408__$1;
(statearr_91420_91466[(1)] = (34));

} else {
var statearr_91421_91467 = state_91408__$1;
(statearr_91421_91467[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (32))){
var inst_91396 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91422_91468 = state_91408__$1;
(statearr_91422_91468[(2)] = inst_91396);

(statearr_91422_91468[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (33))){
var inst_91383 = (state_91408[(2)]);
var inst_91384 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91385 = figwheel.client.auto_jump_to_error.call(null,opts,inst_91384);
var state_91408__$1 = (function (){var statearr_91423 = state_91408;
(statearr_91423[(8)] = inst_91383);

return statearr_91423;
})();
var statearr_91424_91469 = state_91408__$1;
(statearr_91424_91469[(2)] = inst_91385);

(statearr_91424_91469[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (13))){
var inst_91342 = figwheel.client.heads_up.clear.call(null);
var state_91408__$1 = state_91408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(16),inst_91342);
} else {
if((state_val_91409 === (22))){
var inst_91363 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91364 = figwheel.client.heads_up.append_warning_message.call(null,inst_91363);
var state_91408__$1 = state_91408;
var statearr_91425_91470 = state_91408__$1;
(statearr_91425_91470[(2)] = inst_91364);

(statearr_91425_91470[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (36))){
var inst_91394 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91426_91471 = state_91408__$1;
(statearr_91426_91471[(2)] = inst_91394);

(statearr_91426_91471[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (29))){
var inst_91374 = (state_91408[(2)]);
var inst_91375 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91376 = figwheel.client.auto_jump_to_error.call(null,opts,inst_91375);
var state_91408__$1 = (function (){var statearr_91427 = state_91408;
(statearr_91427[(9)] = inst_91374);

return statearr_91427;
})();
var statearr_91428_91472 = state_91408__$1;
(statearr_91428_91472[(2)] = inst_91376);

(statearr_91428_91472[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (6))){
var inst_91323 = (state_91408[(10)]);
var state_91408__$1 = state_91408;
var statearr_91429_91473 = state_91408__$1;
(statearr_91429_91473[(2)] = inst_91323);

(statearr_91429_91473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (28))){
var inst_91370 = (state_91408[(2)]);
var inst_91371 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91372 = figwheel.client.heads_up.display_warning.call(null,inst_91371);
var state_91408__$1 = (function (){var statearr_91430 = state_91408;
(statearr_91430[(11)] = inst_91370);

return statearr_91430;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(29),inst_91372);
} else {
if((state_val_91409 === (25))){
var inst_91368 = figwheel.client.heads_up.clear.call(null);
var state_91408__$1 = state_91408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(28),inst_91368);
} else {
if((state_val_91409 === (34))){
var inst_91389 = figwheel.client.heads_up.flash_loaded.call(null);
var state_91408__$1 = state_91408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(37),inst_91389);
} else {
if((state_val_91409 === (17))){
var inst_91348 = (state_91408[(2)]);
var inst_91349 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91350 = figwheel.client.auto_jump_to_error.call(null,opts,inst_91349);
var state_91408__$1 = (function (){var statearr_91431 = state_91408;
(statearr_91431[(12)] = inst_91348);

return statearr_91431;
})();
var statearr_91432_91474 = state_91408__$1;
(statearr_91432_91474[(2)] = inst_91350);

(statearr_91432_91474[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (3))){
var inst_91340 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_91408__$1 = state_91408;
if(cljs.core.truth_(inst_91340)){
var statearr_91433_91475 = state_91408__$1;
(statearr_91433_91475[(1)] = (13));

} else {
var statearr_91434_91476 = state_91408__$1;
(statearr_91434_91476[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (12))){
var inst_91336 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91435_91477 = state_91408__$1;
(statearr_91435_91477[(2)] = inst_91336);

(statearr_91435_91477[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (2))){
var inst_91323 = (state_91408[(10)]);
var inst_91323__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_91408__$1 = (function (){var statearr_91436 = state_91408;
(statearr_91436[(10)] = inst_91323__$1);

return statearr_91436;
})();
if(cljs.core.truth_(inst_91323__$1)){
var statearr_91437_91478 = state_91408__$1;
(statearr_91437_91478[(1)] = (5));

} else {
var statearr_91438_91479 = state_91408__$1;
(statearr_91438_91479[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (23))){
var inst_91366 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_91408__$1 = state_91408;
if(cljs.core.truth_(inst_91366)){
var statearr_91439_91480 = state_91408__$1;
(statearr_91439_91480[(1)] = (25));

} else {
var statearr_91440_91481 = state_91408__$1;
(statearr_91440_91481[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (35))){
var state_91408__$1 = state_91408;
var statearr_91441_91482 = state_91408__$1;
(statearr_91441_91482[(2)] = null);

(statearr_91441_91482[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (19))){
var inst_91361 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_91408__$1 = state_91408;
if(cljs.core.truth_(inst_91361)){
var statearr_91442_91483 = state_91408__$1;
(statearr_91442_91483[(1)] = (22));

} else {
var statearr_91443_91484 = state_91408__$1;
(statearr_91443_91484[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (11))){
var inst_91332 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91444_91485 = state_91408__$1;
(statearr_91444_91485[(2)] = inst_91332);

(statearr_91444_91485[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (9))){
var inst_91334 = figwheel.client.heads_up.clear.call(null);
var state_91408__$1 = state_91408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(12),inst_91334);
} else {
if((state_val_91409 === (5))){
var inst_91325 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_91408__$1 = state_91408;
var statearr_91445_91486 = state_91408__$1;
(statearr_91445_91486[(2)] = inst_91325);

(statearr_91445_91486[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (14))){
var inst_91352 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_91408__$1 = state_91408;
if(cljs.core.truth_(inst_91352)){
var statearr_91446_91487 = state_91408__$1;
(statearr_91446_91487[(1)] = (18));

} else {
var statearr_91447_91488 = state_91408__$1;
(statearr_91447_91488[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (26))){
var inst_91378 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_91408__$1 = state_91408;
if(cljs.core.truth_(inst_91378)){
var statearr_91448_91489 = state_91408__$1;
(statearr_91448_91489[(1)] = (30));

} else {
var statearr_91449_91490 = state_91408__$1;
(statearr_91449_91490[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (16))){
var inst_91344 = (state_91408[(2)]);
var inst_91345 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91346 = figwheel.client.heads_up.display_exception.call(null,inst_91345);
var state_91408__$1 = (function (){var statearr_91450 = state_91408;
(statearr_91450[(13)] = inst_91344);

return statearr_91450;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(17),inst_91346);
} else {
if((state_val_91409 === (30))){
var inst_91380 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91381 = figwheel.client.heads_up.display_warning.call(null,inst_91380);
var state_91408__$1 = state_91408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(33),inst_91381);
} else {
if((state_val_91409 === (10))){
var inst_91338 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91451_91491 = state_91408__$1;
(statearr_91451_91491[(2)] = inst_91338);

(statearr_91451_91491[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (18))){
var inst_91354 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_91355 = figwheel.client.heads_up.display_exception.call(null,inst_91354);
var state_91408__$1 = state_91408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(21),inst_91355);
} else {
if((state_val_91409 === (37))){
var inst_91391 = (state_91408[(2)]);
var state_91408__$1 = state_91408;
var statearr_91452_91492 = state_91408__$1;
(statearr_91452_91492[(2)] = inst_91391);

(statearr_91452_91492[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91409 === (8))){
var inst_91330 = figwheel.client.heads_up.flash_loaded.call(null);
var state_91408__$1 = state_91408;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91408__$1,(11),inst_91330);
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
});})(c__32958__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__32868__auto__,c__32958__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto____0 = (function (){
var statearr_91453 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_91453[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto__);

(statearr_91453[(1)] = (1));

return statearr_91453;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto____1 = (function (state_91408){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_91408);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e91454){if((e91454 instanceof Object)){
var ex__32872__auto__ = e91454;
var statearr_91455_91493 = state_91408;
(statearr_91455_91493[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91408);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91454;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91494 = state_91408;
state_91408 = G__91494;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto__ = function(state_91408){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto____1.call(this,state_91408);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__,msg_hist,msg_names,msg))
})();
var state__32960__auto__ = (function (){var statearr_91456 = f__32959__auto__.call(null);
(statearr_91456[(6)] = c__32958__auto__);

return statearr_91456;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__,msg_hist,msg_names,msg))
);

return c__32958__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__32958__auto___91523 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto___91523,ch){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto___91523,ch){
return (function (state_91509){
var state_val_91510 = (state_91509[(1)]);
if((state_val_91510 === (1))){
var state_91509__$1 = state_91509;
var statearr_91511_91524 = state_91509__$1;
(statearr_91511_91524[(2)] = null);

(statearr_91511_91524[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91510 === (2))){
var state_91509__$1 = state_91509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91509__$1,(4),ch);
} else {
if((state_val_91510 === (3))){
var inst_91507 = (state_91509[(2)]);
var state_91509__$1 = state_91509;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91509__$1,inst_91507);
} else {
if((state_val_91510 === (4))){
var inst_91497 = (state_91509[(7)]);
var inst_91497__$1 = (state_91509[(2)]);
var state_91509__$1 = (function (){var statearr_91512 = state_91509;
(statearr_91512[(7)] = inst_91497__$1);

return statearr_91512;
})();
if(cljs.core.truth_(inst_91497__$1)){
var statearr_91513_91525 = state_91509__$1;
(statearr_91513_91525[(1)] = (5));

} else {
var statearr_91514_91526 = state_91509__$1;
(statearr_91514_91526[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91510 === (5))){
var inst_91497 = (state_91509[(7)]);
var inst_91499 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_91497);
var state_91509__$1 = state_91509;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91509__$1,(8),inst_91499);
} else {
if((state_val_91510 === (6))){
var state_91509__$1 = state_91509;
var statearr_91515_91527 = state_91509__$1;
(statearr_91515_91527[(2)] = null);

(statearr_91515_91527[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91510 === (7))){
var inst_91505 = (state_91509[(2)]);
var state_91509__$1 = state_91509;
var statearr_91516_91528 = state_91509__$1;
(statearr_91516_91528[(2)] = inst_91505);

(statearr_91516_91528[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_91510 === (8))){
var inst_91501 = (state_91509[(2)]);
var state_91509__$1 = (function (){var statearr_91517 = state_91509;
(statearr_91517[(8)] = inst_91501);

return statearr_91517;
})();
var statearr_91518_91529 = state_91509__$1;
(statearr_91518_91529[(2)] = null);

(statearr_91518_91529[(1)] = (2));


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
});})(c__32958__auto___91523,ch))
;
return ((function (switch__32868__auto__,c__32958__auto___91523,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__32869__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__32869__auto____0 = (function (){
var statearr_91519 = [null,null,null,null,null,null,null,null,null];
(statearr_91519[(0)] = figwheel$client$heads_up_plugin_$_state_machine__32869__auto__);

(statearr_91519[(1)] = (1));

return statearr_91519;
});
var figwheel$client$heads_up_plugin_$_state_machine__32869__auto____1 = (function (state_91509){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_91509);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e91520){if((e91520 instanceof Object)){
var ex__32872__auto__ = e91520;
var statearr_91521_91530 = state_91509;
(statearr_91521_91530[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91509);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91520;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91531 = state_91509;
state_91509 = G__91531;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__32869__auto__ = function(state_91509){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__32869__auto____1.call(this,state_91509);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__32869__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__32869__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto___91523,ch))
})();
var state__32960__auto__ = (function (){var statearr_91522 = f__32959__auto__.call(null);
(statearr_91522[(6)] = c__32958__auto___91523);

return statearr_91522;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto___91523,ch))
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
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__){
return (function (state_91537){
var state_val_91538 = (state_91537[(1)]);
if((state_val_91538 === (1))){
var inst_91532 = cljs.core.async.timeout.call(null,(3000));
var state_91537__$1 = state_91537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91537__$1,(2),inst_91532);
} else {
if((state_val_91538 === (2))){
var inst_91534 = (state_91537[(2)]);
var inst_91535 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_91537__$1 = (function (){var statearr_91539 = state_91537;
(statearr_91539[(7)] = inst_91534);

return statearr_91539;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91537__$1,inst_91535);
} else {
return null;
}
}
});})(c__32958__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__32869__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__32869__auto____0 = (function (){
var statearr_91540 = [null,null,null,null,null,null,null,null];
(statearr_91540[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__32869__auto__);

(statearr_91540[(1)] = (1));

return statearr_91540;
});
var figwheel$client$enforce_project_plugin_$_state_machine__32869__auto____1 = (function (state_91537){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_91537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e91541){if((e91541 instanceof Object)){
var ex__32872__auto__ = e91541;
var statearr_91542_91544 = state_91537;
(statearr_91542_91544[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91541;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91545 = state_91537;
state_91537 = G__91545;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__32869__auto__ = function(state_91537){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__32869__auto____1.call(this,state_91537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__32869__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__32869__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_91543 = f__32959__auto__.call(null);
(statearr_91543[(6)] = c__32958__auto__);

return statearr_91543;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__))
);

return c__32958__auto__;
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
var temp__5278__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5278__auto__)){
var figwheel_version = temp__5278__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__,figwheel_version,temp__5278__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__,figwheel_version,temp__5278__auto__){
return (function (state_91552){
var state_val_91553 = (state_91552[(1)]);
if((state_val_91553 === (1))){
var inst_91546 = cljs.core.async.timeout.call(null,(2000));
var state_91552__$1 = state_91552;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_91552__$1,(2),inst_91546);
} else {
if((state_val_91553 === (2))){
var inst_91548 = (state_91552[(2)]);
var inst_91549 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Client Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong> is not equal to "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel Sidecar Version <strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</strong>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(".  Shutting down Websocket Connection!"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<h4>To fix try:</h4>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>")].join('');
var inst_91550 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_91549);
var state_91552__$1 = (function (){var statearr_91554 = state_91552;
(statearr_91554[(7)] = inst_91548);

return statearr_91554;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_91552__$1,inst_91550);
} else {
return null;
}
}
});})(c__32958__auto__,figwheel_version,temp__5278__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__,figwheel_version,temp__5278__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto____0 = (function (){
var statearr_91555 = [null,null,null,null,null,null,null,null];
(statearr_91555[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto__);

(statearr_91555[(1)] = (1));

return statearr_91555;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto____1 = (function (state_91552){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_91552);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e91556){if((e91556 instanceof Object)){
var ex__32872__auto__ = e91556;
var statearr_91557_91559 = state_91552;
(statearr_91557_91559[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_91552);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e91556;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__91560 = state_91552;
state_91552 = G__91560;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto__ = function(state_91552){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto____1.call(this,state_91552);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__,figwheel_version,temp__5278__auto__))
})();
var state__32960__auto__ = (function (){var statearr_91558 = f__32959__auto__.call(null);
(statearr_91558[(6)] = c__32958__auto__);

return statearr_91558;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__,figwheel_version,temp__5278__auto__))
);

return c__32958__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__91561){
var map__91562 = p__91561;
var map__91562__$1 = ((((!((map__91562 == null)))?((((map__91562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91562.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91562):map__91562);
var file = cljs.core.get.call(null,map__91562__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__91562__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__91562__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__91564 = "";
var G__91564__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91564),cljs.core.str.cljs$core$IFn$_invoke$arity$1("file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__91564);
var G__91564__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91564__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__91564__$1);
if(cljs.core.truth_((function (){var and__28557__auto__ = line;
if(cljs.core.truth_(and__28557__auto__)){
return column;
} else {
return and__28557__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__91564__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__91564__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__91565){
var map__91566 = p__91565;
var map__91566__$1 = ((((!((map__91566 == null)))?((((map__91566.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91566.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91566):map__91566);
var ed = map__91566__$1;
var formatted_exception = cljs.core.get.call(null,map__91566__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__91566__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__91566__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__91568_91572 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__91569_91573 = null;
var count__91570_91574 = (0);
var i__91571_91575 = (0);
while(true){
if((i__91571_91575 < count__91570_91574)){
var msg_91576 = cljs.core._nth.call(null,chunk__91569_91573,i__91571_91575);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_91576);

var G__91577 = seq__91568_91572;
var G__91578 = chunk__91569_91573;
var G__91579 = count__91570_91574;
var G__91580 = (i__91571_91575 + (1));
seq__91568_91572 = G__91577;
chunk__91569_91573 = G__91578;
count__91570_91574 = G__91579;
i__91571_91575 = G__91580;
continue;
} else {
var temp__5278__auto___91581 = cljs.core.seq.call(null,seq__91568_91572);
if(temp__5278__auto___91581){
var seq__91568_91582__$1 = temp__5278__auto___91581;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91568_91582__$1)){
var c__29481__auto___91583 = cljs.core.chunk_first.call(null,seq__91568_91582__$1);
var G__91584 = cljs.core.chunk_rest.call(null,seq__91568_91582__$1);
var G__91585 = c__29481__auto___91583;
var G__91586 = cljs.core.count.call(null,c__29481__auto___91583);
var G__91587 = (0);
seq__91568_91572 = G__91584;
chunk__91569_91573 = G__91585;
count__91570_91574 = G__91586;
i__91571_91575 = G__91587;
continue;
} else {
var msg_91588 = cljs.core.first.call(null,seq__91568_91582__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_91588);

var G__91589 = cljs.core.next.call(null,seq__91568_91582__$1);
var G__91590 = null;
var G__91591 = (0);
var G__91592 = (0);
seq__91568_91572 = G__91589;
chunk__91569_91573 = G__91590;
count__91570_91574 = G__91591;
i__91571_91575 = G__91592;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Error on "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__91593){
var map__91594 = p__91593;
var map__91594__$1 = ((((!((map__91594 == null)))?((((map__91594.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91594.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91594):map__91594);
var w = map__91594__$1;
var message = cljs.core.get.call(null,map__91594__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Figwheel: Compile Warning - "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/js/compiled/out/figwheel/client.cljs",33,1,357,357,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/js/compiled/out/figwheel/client.cljs",30,1,349,349,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("ws://"),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("/figwheel-ws")].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__28557__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__28557__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__28557__auto__;
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
var seq__91596 = cljs.core.seq.call(null,plugins);
var chunk__91597 = null;
var count__91598 = (0);
var i__91599 = (0);
while(true){
if((i__91599 < count__91598)){
var vec__91600 = cljs.core._nth.call(null,chunk__91597,i__91599);
var k = cljs.core.nth.call(null,vec__91600,(0),null);
var plugin = cljs.core.nth.call(null,vec__91600,(1),null);
if(cljs.core.truth_(plugin)){
var pl_91606 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__91596,chunk__91597,count__91598,i__91599,pl_91606,vec__91600,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_91606.call(null,msg_hist);
});})(seq__91596,chunk__91597,count__91598,i__91599,pl_91606,vec__91600,k,plugin))
);
} else {
}

var G__91607 = seq__91596;
var G__91608 = chunk__91597;
var G__91609 = count__91598;
var G__91610 = (i__91599 + (1));
seq__91596 = G__91607;
chunk__91597 = G__91608;
count__91598 = G__91609;
i__91599 = G__91610;
continue;
} else {
var temp__5278__auto__ = cljs.core.seq.call(null,seq__91596);
if(temp__5278__auto__){
var seq__91596__$1 = temp__5278__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91596__$1)){
var c__29481__auto__ = cljs.core.chunk_first.call(null,seq__91596__$1);
var G__91611 = cljs.core.chunk_rest.call(null,seq__91596__$1);
var G__91612 = c__29481__auto__;
var G__91613 = cljs.core.count.call(null,c__29481__auto__);
var G__91614 = (0);
seq__91596 = G__91611;
chunk__91597 = G__91612;
count__91598 = G__91613;
i__91599 = G__91614;
continue;
} else {
var vec__91603 = cljs.core.first.call(null,seq__91596__$1);
var k = cljs.core.nth.call(null,vec__91603,(0),null);
var plugin = cljs.core.nth.call(null,vec__91603,(1),null);
if(cljs.core.truth_(plugin)){
var pl_91615 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__91596,chunk__91597,count__91598,i__91599,pl_91615,vec__91603,k,plugin,seq__91596__$1,temp__5278__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_91615.call(null,msg_hist);
});})(seq__91596,chunk__91597,count__91598,i__91599,pl_91615,vec__91603,k,plugin,seq__91596__$1,temp__5278__auto__))
);
} else {
}

var G__91616 = cljs.core.next.call(null,seq__91596__$1);
var G__91617 = null;
var G__91618 = (0);
var G__91619 = (0);
seq__91596 = G__91616;
chunk__91597 = G__91617;
count__91598 = G__91618;
i__91599 = G__91619;
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
var G__91621 = arguments.length;
switch (G__91621) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__91622_91627 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__91623_91628 = null;
var count__91624_91629 = (0);
var i__91625_91630 = (0);
while(true){
if((i__91625_91630 < count__91624_91629)){
var msg_91631 = cljs.core._nth.call(null,chunk__91623_91628,i__91625_91630);
figwheel.client.socket.handle_incoming_message.call(null,msg_91631);

var G__91632 = seq__91622_91627;
var G__91633 = chunk__91623_91628;
var G__91634 = count__91624_91629;
var G__91635 = (i__91625_91630 + (1));
seq__91622_91627 = G__91632;
chunk__91623_91628 = G__91633;
count__91624_91629 = G__91634;
i__91625_91630 = G__91635;
continue;
} else {
var temp__5278__auto___91636 = cljs.core.seq.call(null,seq__91622_91627);
if(temp__5278__auto___91636){
var seq__91622_91637__$1 = temp__5278__auto___91636;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__91622_91637__$1)){
var c__29481__auto___91638 = cljs.core.chunk_first.call(null,seq__91622_91637__$1);
var G__91639 = cljs.core.chunk_rest.call(null,seq__91622_91637__$1);
var G__91640 = c__29481__auto___91638;
var G__91641 = cljs.core.count.call(null,c__29481__auto___91638);
var G__91642 = (0);
seq__91622_91627 = G__91639;
chunk__91623_91628 = G__91640;
count__91624_91629 = G__91641;
i__91625_91630 = G__91642;
continue;
} else {
var msg_91643 = cljs.core.first.call(null,seq__91622_91637__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_91643);

var G__91644 = cljs.core.next.call(null,seq__91622_91637__$1);
var G__91645 = null;
var G__91646 = (0);
var G__91647 = (0);
seq__91622_91627 = G__91644;
chunk__91623_91628 = G__91645;
count__91624_91629 = G__91646;
i__91625_91630 = G__91647;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__29809__auto__ = [];
var len__29802__auto___91652 = arguments.length;
var i__29803__auto___91653 = (0);
while(true){
if((i__29803__auto___91653 < len__29802__auto___91652)){
args__29809__auto__.push((arguments[i__29803__auto___91653]));

var G__91654 = (i__29803__auto___91653 + (1));
i__29803__auto___91653 = G__91654;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__91649){
var map__91650 = p__91649;
var map__91650__$1 = ((((!((map__91650 == null)))?((((map__91650.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91650.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91650):map__91650);
var opts = map__91650__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq91648){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq91648));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e91655){if((e91655 instanceof Error)){
var e = e91655;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e91655;

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
return (function (p__91656){
var map__91657 = p__91656;
var map__91657__$1 = ((((!((map__91657 == null)))?((((map__91657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__91657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__91657):map__91657);
var msg_name = cljs.core.get.call(null,map__91657__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1500526711280