// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.munging');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('devtools.util');
goog.require('devtools.context');
goog.require('goog.object');
goog.require('goog.string.StringBuffer');
devtools.munging.dollar_replacement = "~\uFE69~";
devtools.munging.max_fixed_arity_to_scan = (64);
devtools.munging.get_global_scope = (function devtools$munging$get_global_scope(){
return devtools.context.get_root.call(null);
});
devtools.munging.js_reserved_QMARK_ = (function devtools$munging$js_reserved_QMARK_(x){
var temp__4655__auto__ = (function (){var temp__4657__auto__ = goog.object.get(devtools.munging.get_global_scope.call(null),"cljs");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"core");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40222__auto__ = temp__4657__auto____$1;
return goog.object.get(o__40222__auto__,"js_reserved_QMARK_");
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var js_reserved_fn = temp__4655__auto__;
return js_reserved_fn.call(null,x);
} else {
return null;
}
});
devtools.munging.get_fn_source_safely = (function devtools$munging$get_fn_source_safely(f){
try{var o__40210__auto__ = f;
return goog.object.get(o__40210__auto__,"toString").call(o__40210__auto__);
}catch (e59676){var _ = e59676;
return "";
}});
devtools.munging.get_fn_fixed_arity = (function devtools$munging$get_fn_fixed_arity(f,n){
return goog.object.get(f,[cljs.core.str("cljs$core$IFn$_invoke$arity$"),cljs.core.str(n)].join(''));
});
devtools.munging.get_fn_variadic_arity = (function devtools$munging$get_fn_variadic_arity(f){
return goog.object.get(f,[cljs.core.str("cljs$core$IFn$_invoke$arity$variadic")].join(''));
});
devtools.munging.get_fn_max_fixed_arity = (function devtools$munging$get_fn_max_fixed_arity(f){
return goog.object.get(f,"cljs$lang$maxFixedArity");
});
devtools.munging.get_type_name = (function devtools$munging$get_type_name(t){
var sb = (new goog.string.StringBuffer());
var writer = (new cljs.core.StringBufferWriter(sb));
try{var o__40210__auto___59679 = t;
goog.object.get(o__40210__auto___59679,"cljs$lang$ctorPrWriter").call(o__40210__auto___59679,t,writer);
}catch (e59678){var __59680 = e59678;
}
cljs.core._flush.call(null,writer);

return [cljs.core.str(sb)].join('');
});
/**
 * Given a character with a single digit converts it into a subscript character.
 *   Zero chracter maps to unicode 'SUBSCRIPT ZERO' (U+2080).
 */
devtools.munging.char_to_subscript = (function devtools$munging$char_to_subscript(char$){
if(typeof char$ === 'string'){
} else {
throw (new Error("Assert failed: (string? char)"));
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,char$),(1))){
} else {
throw (new Error("Assert failed: (= (count char) 1)"));
}

var char_code = (function (){var o__40210__auto__ = (new String(char$));
return goog.object.get(o__40210__auto__,"charCodeAt").call(o__40210__auto__,(0));
})();
var num_code = (char_code - (48));
var subscript_code = ((8320) + num_code);
var o__40210__auto__ = String;
return goog.object.get(o__40210__auto__,"fromCharCode").call(o__40210__auto__,subscript_code);
});
/**
 * Given a subscript number converts it into a string representation consisting of unicode subscript characters (digits).
 */
devtools.munging.make_subscript = (function devtools$munging$make_subscript(subscript){
if(typeof subscript === 'number'){
} else {
throw (new Error("Assert failed: (number? subscript)"));
}

return clojure.string.join.call(null,cljs.core.map.call(null,devtools.munging.char_to_subscript,[cljs.core.str(subscript)].join('')));
});
/**
 * Given a character with a single digit converts it into a superscript character.
 *   Zero chracter maps to unicode 'SUPERSCRIPT ZERO' (U+2070).
 */
devtools.munging.char_to_superscript = (function devtools$munging$char_to_superscript(char$){
if(typeof char$ === 'string'){
} else {
throw (new Error("Assert failed: (string? char)"));
}

if(cljs.core._EQ_.call(null,cljs.core.count.call(null,char$),(1))){
} else {
throw (new Error("Assert failed: (= (count char) 1)"));
}

var char_code = (function (){var o__40210__auto__ = (new String(char$));
return goog.object.get(o__40210__auto__,"charCodeAt").call(o__40210__auto__,(0));
})();
var num_code = (char_code - (48));
var superscript_code = (function (){var G__59682 = num_code;
switch (G__59682) {
case (1):
return (185);

break;
case (2):
return (178);

break;
case (3):
return (179);

break;
default:
return ((8304) + num_code);

}
})();
var o__40210__auto__ = String;
return goog.object.get(o__40210__auto__,"fromCharCode").call(o__40210__auto__,superscript_code);
});
/**
 * Given a superscript number converts it into a string representation consisting of unicode superscript characters (digits).
 */
devtools.munging.make_superscript = (function devtools$munging$make_superscript(superscript){
if(typeof superscript === 'number'){
} else {
throw (new Error("Assert failed: (number? superscript)"));
}

return clojure.string.join.call(null,cljs.core.map.call(null,devtools.munging.char_to_superscript,[cljs.core.str(superscript)].join('')));
});
/**
 * Given a Javascript name answers if the name was likely generated by ClojureScript.
 *   We use a simple heuristic here:
 *  The name must contain at least two separate dollars because we assume two-segment namespaces.
 */
devtools.munging.cljs_fn_name_QMARK_ = (function devtools$munging$cljs_fn_name_QMARK_(munged_name){
if(typeof munged_name === 'string'){
return cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,/^[^$]*\$[^$]+\$.*$/,munged_name));
} else {
return null;
}
});
/**
 * Given a function source code parses out [name args]. Note that both strings are still munged.
 *   Suitable for further processing.
 * 
 *   For exampe for input below the function will return ["devtools_sample$core$hello" "name, unused_param"]:
 * 
 *   function devtools_sample$core$hello(name, unused_param){
 *  return [cljs.core.str("hello, "),cljs.core.str(name),cljs.core.str("!")].join('');
 *   }
 *   
 */
devtools.munging.parse_fn_source = (function devtools$munging$parse_fn_source(fn_source){
var temp__4655__auto__ = cljs.core.second.call(null,cljs.core.re_find.call(null,/function\s(.*?)\{/,fn_source));
if(cljs.core.truth_(temp__4655__auto__)){
var meat = temp__4655__auto__;
var temp__4655__auto____$1 = cljs.core.re_find.call(null,/(.*?)\((.*)\)/,meat);
if(cljs.core.truth_(temp__4655__auto____$1)){
var match = temp__4655__auto____$1;
return cljs.core.rest.call(null,match);
} else {
return null;
}
} else {
return null;
}
});
devtools.munging.trivial_fn_source_QMARK_ = (function devtools$munging$trivial_fn_source_QMARK_(fn_source){
if(typeof fn_source === 'string'){
} else {
throw (new Error("Assert failed: (string? fn-source)"));
}

return (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,/function\s*\(\s*\)\s*\{\s*\}\s*/,fn_source))) || (cljs.core.some_QMARK_.call(null,cljs.core.re_matches.call(null,/function.*\(\)\s*\{\s*\[native code\]\s*\}\s*/,fn_source)));
});
/**
 * Given a Javascript function object returns true if the function looks like a ClojureScript function.
 * 
 *   Uses various heuristics:
 *  1. must be fn? (is javascript function or satisfies Fn and IFn protocols)
 *  2. and name must be cljs-fn-name? (name can come from f.name or parsed out of function source)
 *  3. or if anonymous function, must be non-trivial
 */
devtools.munging.cljs_fn_QMARK_ = (function devtools$munging$cljs_fn_QMARK_(f){
if(cljs.core.truth_((function (){try{return cljs.core.fn_QMARK_.call(null,f);
}catch (e59688){var e__40235__auto__ = e59688;
return false;
}})())){
var name = goog.object.get(f,cljs.core.name);
if(!(cljs.core.empty_QMARK_.call(null,name))){
return devtools.munging.cljs_fn_name_QMARK_.call(null,name);
} else {
var fn_source = devtools.munging.get_fn_source_safely.call(null,f);
var vec__59689 = devtools.munging.parse_fn_source.call(null,fn_source);
var name__$1 = cljs.core.nth.call(null,vec__59689,(0),null);
if(!(cljs.core.empty_QMARK_.call(null,name__$1))){
return devtools.munging.cljs_fn_name_QMARK_.call(null,name__$1);
} else {
return cljs.core.not.call(null,devtools.munging.trivial_fn_source_QMARK_.call(null,fn_source));
}
}
} else {
return null;
}
});
/**
 * Standard cljs.core/demunge is too agresive in replacing dollars.
 *   This wrapper function works around it by leaving dollars intact.
 */
devtools.munging.dollar_preserving_demunge = (function devtools$munging$dollar_preserving_demunge(munged_name){
return clojure.string.replace.call(null,cljs.core.demunge.call(null,clojure.string.replace.call(null,munged_name,"$",devtools.munging.dollar_replacement)),devtools.munging.dollar_replacement,"$");
});
devtools.munging.revert_reserved = (function devtools$munging$revert_reserved(s){
var or__25979__auto__ = (function (){var temp__4655__auto__ = cljs.core.re_matches.call(null,/(.*)\$/,s);
if(cljs.core.truth_(temp__4655__auto__)){
var m = temp__4655__auto__;
if(cljs.core.truth_(devtools.munging.js_reserved_QMARK_.call(null,cljs.core.second.call(null,m)))){
return cljs.core.second.call(null,m);
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return s;
}
});
devtools.munging.reserved_aware_demunge = (function devtools$munging$reserved_aware_demunge(munged_name){
return devtools.munging.revert_reserved.call(null,devtools.munging.dollar_preserving_demunge.call(null,munged_name));
});
devtools.munging.proper_demunge = (function devtools$munging$proper_demunge(munged_name){
return devtools.munging.reserved_aware_demunge.call(null,munged_name);
});
devtools.munging.proper_arg_demunge = (function devtools$munging$proper_arg_demunge(munged_arg_name){
return clojure.string.replace.call(null,devtools.munging.proper_demunge.call(null,munged_arg_name),/^-(.*)$/,"_$1");
});
devtools.munging.proper_ns_demunge = (function devtools$munging$proper_ns_demunge(munged_ns_name){
return clojure.string.replace.call(null,devtools.munging.proper_demunge.call(null,munged_ns_name),"$",".");
});
devtools.munging.ns_exists_QMARK_ = (function devtools$munging$ns_exists_QMARK_(ns_module_name){
if(typeof ns_module_name === 'string'){
} else {
throw (new Error("Assert failed: (string? ns-module-name)"));
}

var temp__4655__auto__ = (function (){var temp__4657__auto__ = goog.object.get(devtools.munging.get_global_scope.call(null),"goog");
if(cljs.core.truth_(temp__4657__auto__)){
var o__40223__auto__ = temp__4657__auto__;
var temp__4657__auto____$1 = goog.object.get(o__40223__auto__,"dependencies_");
if(cljs.core.truth_(temp__4657__auto____$1)){
var o__40222__auto__ = temp__4657__auto____$1;
return goog.object.get(o__40222__auto__,"nameToPath");
} else {
return null;
}
} else {
return null;
}
})();
if(cljs.core.truth_(temp__4655__auto__)){
var goog_namespaces = temp__4655__auto__;
return cljs.core.some_QMARK_.call(null,goog.object.get(goog_namespaces,ns_module_name));
} else {
return null;
}
});
/**
 * Given a name broken into namespace parts returns [detected-ns remaining-parts],
 *   where detected-ns is a string representing longest detected existing namespace and
 *   remaining-parts is a vector of remaing input parts not included in the detected-ns concatenation.
 * 
 *   For given input ["cljs" "core" "first"] returns ["cljs.core" ["first"]] (asumming cljs.core exists)
 */
devtools.munging.detect_namespace_prefix = (function devtools$munging$detect_namespace_prefix(var_args){
var args__27061__auto__ = [];
var len__27054__auto___59698 = arguments.length;
var i__27055__auto___59699 = (0);
while(true){
if((i__27055__auto___59699 < len__27054__auto___59698)){
args__27061__auto__.push((arguments[i__27055__auto___59699]));

var G__59700 = (i__27055__auto___59699 + (1));
i__27055__auto___59699 = G__59700;
continue;
} else {
}
break;
}

var argseq__27062__auto__ = ((((1) < args__27061__auto__.length))?(new cljs.core.IndexedSeq(args__27061__auto__.slice((1)),(0),null)):null);
return devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__27062__auto__);
});

devtools.munging.detect_namespace_prefix.cljs$core$IFn$_invoke$arity$variadic = (function (tokens,p__59694){
var vec__59695 = p__59694;
var ns_detector = cljs.core.nth.call(null,vec__59695,(0),null);
var effective_detector = (function (){var or__25979__auto__ = ns_detector;
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return devtools.munging.ns_exists_QMARK_;
}
})();
var name_tokens = cljs.core.PersistentVector.EMPTY;
