// Compiled by ClojureScript 1.9.671 {}
goog.provide('devtools.core');
goog.require('cljs.core');
goog.require('devtools.prefs');
goog.require('devtools.hints');
goog.require('devtools.defaults');
goog.require('devtools.formatters');
goog.require('devtools.async');
goog.require('devtools.toolbox');
goog.require('devtools.util');
devtools.core.is_feature_available_QMARK_ = (function devtools$core$is_feature_available_QMARK_(feature){
var G__39216 = feature;
var G__39216__$1 = (((G__39216 instanceof cljs.core.Keyword))?G__39216.fqn:null);
switch (G__39216__$1) {
case "formatters":
return devtools.formatters.available_QMARK_.call(null);

break;
case "hints":
return devtools.hints.available_QMARK_.call(null);

break;
case "async":
return devtools.async.available_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39216__$1)].join('')));

}
});
devtools.core.available_QMARK_ = (function devtools$core$available_QMARK_(var_args){
var G__39219 = arguments.length;
switch (G__39219) {
case 0:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.available_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.available_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_available_QMARK_,features);
}
});

devtools.core.available_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.is_feature_installed_QMARK_ = (function devtools$core$is_feature_installed_QMARK_(feature){
var G__39221 = feature;
var G__39221__$1 = (((G__39221 instanceof cljs.core.Keyword))?G__39221.fqn:null);
switch (G__39221__$1) {
case "formatters":
return devtools.formatters.installed_QMARK_.call(null);

break;
case "hints":
return devtools.hints.installed_QMARK_.call(null);

break;
case "async":
return devtools.async.installed_QMARK_.call(null);

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("No matching clause: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39221__$1)].join('')));

}
});
devtools.core.installed_QMARK_ = (function devtools$core$installed_QMARK_(var_args){
var G__39224 = arguments.length;
switch (G__39224) {
case 0:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.installed_QMARK_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.installed_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
if(cljs.core.empty_QMARK_.call(null,features)){
return false;
} else {
return cljs.core.every_QMARK_.call(null,devtools.core.is_feature_installed_QMARK_,features);
}
});

devtools.core.installed_QMARK_.cljs$lang$maxFixedArity = 1;

devtools.core.install_BANG_ = (function devtools$core$install_BANG_(var_args){
var G__39227 = arguments.length;
switch (G__39227) {
case 0:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$0 = (function (){
return devtools.core.install_BANG_.call(null,devtools.prefs.pref.call(null,new cljs.core.Keyword(null,"features-to-install","features-to-install",102899261)));
});

devtools.core.install_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (features_desc){
if(cljs.core.truth_(devtools.util.under_advanced_build_QMARK_.call(null))){
return devtools.util.display_advanced_build_warning_if_needed_BANG_.call(null);
} else {
var features = devtools.util.resolve_features_BANG_.call(null,features_desc,devtools.defaults.feature_groups);
devtools.util.display_banner_if_needed_BANG_.call(null,features,devtools.defaults.feature_groups);

devtools.util.print_config_overrides_if_requested_BANG_.call(null,"config overrides prior install:\n");

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"formatters","formatters",-1875637118),features,devtools.core.is_feature_available_QMARK_,devtools.formatters.install_BANG_);

devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"hints","hints",-991113151),features,devtools.core.is_feature_available_QMARK_,devtools.hints.install_BANG_);

return devtools.util.install_feature_BANG_.call(null,new cljs.core.Keyword(null,"async","async",1050769601),features,devtools.core.is_feature_available_QMARK_,devtools.async.install_BANG_);
}
});

devtools.core.install_BANG_.cljs$lang$maxFixedArity = 1;

devtools.core.uninstall_BANG_ = (function devtools$core$uninstall_BANG_(){
devtools.formatters.uninstall_BANG_.call(null);

devtools.hints.uninstall_BANG_.call(null);

return devtools.async.uninstall_BANG_.call(null);
});
devtools.core.set_prefs_BANG_ = (function devtools$core$set_prefs_BANG_(new_prefs){
return devtools.prefs.set_prefs_BANG_.call(null,new_prefs);
});
devtools.core.get_prefs = (function devtools$core$get_prefs(){
return devtools.prefs.get_prefs.call(null);
});
devtools.core.set_pref_BANG_ = (function devtools$core$set_pref_BANG_(pref,val){
return devtools.prefs.set_pref_BANG_.call(null,pref,val);
});
devtools.core.enable_BANG_ = (function devtools$core$enable_BANG_(){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> remove the call")].join(''));
});
devtools.core.disable_BANG_ = (function devtools$core$disable_BANG_(){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> remove the call")].join(''));
});
devtools.core.set_single_feature_BANG_ = (function devtools$core$set_single_feature_BANG_(_feature,_val){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/set-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_single_feature_BANG_ = (function devtools$core$enable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.disable_single_feature_BANG_ = (function devtools$core$disable_single_feature_BANG_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable-single-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});
devtools.core.enable_feature_BANG_ = (function devtools$core$enable_feature_BANG_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___39230 = arguments.length;
var i__29803__auto___39231 = (0);
while(true){
if((i__29803__auto___39231 < len__29802__auto___39230)){
args__29809__auto__.push((arguments[i__29803__auto___39231]));

var G__39232 = (i__29803__auto___39231 + (1));
i__29803__auto___39231 = G__39232;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/enable-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.enable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.enable_feature_BANG_.cljs$lang$applyTo = (function (seq39229){
return devtools.core.enable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39229));
});

devtools.core.disable_feature_BANG_ = (function devtools$core$disable_feature_BANG_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___39234 = arguments.length;
var i__29803__auto___39235 = (0);
while(true){
if((i__29803__auto___39235 < len__29802__auto___39234)){
args__29809__auto__.push((arguments[i__29803__auto___39235]));

var G__39236 = (i__29803__auto___39235 + (1));
i__29803__auto___39235 = G__39236;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/disable-feature! was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use (devtools.core/install! features) to install custom features")].join(''));
});

devtools.core.disable_feature_BANG_.cljs$lang$maxFixedArity = (0);

devtools.core.disable_feature_BANG_.cljs$lang$applyTo = (function (seq39233){
return devtools.core.disable_feature_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39233));
});

devtools.core.single_feature_available_QMARK_ = (function devtools$core$single_feature_available_QMARK_(_feature){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/single-feature-available? was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use devtools.core/is-feature-available? instead")].join(''));
});
devtools.core.feature_available_QMARK_ = (function devtools$core$feature_available_QMARK_(var_args){
var args__29809__auto__ = [];
var len__29802__auto___39238 = arguments.length;
var i__29803__auto___39239 = (0);
while(true){
if((i__29803__auto___39239 < len__29802__auto___39238)){
args__29809__auto__.push((arguments[i__29803__auto___39239]));

var G__39240 = (i__29803__auto___39239 + (1));
i__29803__auto___39239 = G__39240;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((0) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((0)),(0),null)):null);
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(argseq__29810__auto__);
});

devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (_features){
return console.warn([cljs.core.str.cljs$core$IFn$_invoke$arity$1("devtools.core/feature-available? was removed "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("and has no effect in "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(devtools.util.make_lib_info.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("=> use devtools.core/is-feature-available? instead")].join(''));
});

devtools.core.feature_available_QMARK_.cljs$lang$maxFixedArity = (0);

devtools.core.feature_available_QMARK_.cljs$lang$applyTo = (function (seq39237){
return devtools.core.feature_available_QMARK_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39237));
});


//# sourceMappingURL=core.js.map?rel=1500449679499