// Compiled by ClojureScript 1.9.229 {}
goog.provide('reagent.dom');
goog.require('cljs.core');
goog.require('reagent.impl.util');
goog.require('reagent.interop');
goog.require('reagent.ratom');
goog.require('reagent.impl.template');
goog.require('reagent.impl.batching');
goog.require('cljsjs.react.dom');
goog.require('reagent.debug');
if(typeof reagent.dom.imported !== 'undefined'){
} else {
reagent.dom.imported = null;
}
reagent.dom.module = (function reagent$dom$module(){
if(cljs.core.some_QMARK_.call(null,reagent.dom.imported)){
return reagent.dom.imported;
} else {
if(typeof ReactDOM !== 'undefined'){
return reagent.dom.imported = ReactDOM;
} else {
if(typeof require !== 'undefined'){
var or__25979__auto__ = reagent.dom.imported = require("react-dom");
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
throw (new Error("require('react-dom') failed"));
}
} else {
throw (new Error("js/ReactDOM is missing"));

}
}
}
});
if(typeof reagent.dom.roots !== 'undefined'){
} else {
reagent.dom.roots = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
reagent.dom.unmount_comp = (function reagent$dom$unmount_comp(container){
cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.dissoc,container);

return (reagent.dom.module.call(null)["unmountComponentAtNode"])(container);
});
reagent.dom.render_comp = (function reagent$dom$render_comp(comp,container,callback){
var _STAR_always_update_STAR_51855 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_51855){
return (function (){
var _STAR_always_update_STAR_51856 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_51856;
}});})(_STAR_always_update_STAR_51855))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_51855;
}});
reagent.dom.re_render_component = (function reagent$dom$re_render_component(comp,container){
return reagent.dom.render_comp.call(null,comp,container,null);
});
/**
 * Render a Reagent component into the DOM. The first argument may be
 *   either a vector (using Reagent's Hiccup syntax), or a React element. The second argument should be a DOM node.
 * 
 *   Optionally takes a callback that is called when the component is in place.
 * 
 *   Returns the mounted component instance.
 */
reagent.dom.render = (function reagent$dom$render(var_args){
var args51857 = [];
var len__27054__auto___51860 = arguments.length;
var i__27055__auto___51861 = (0);
while(true){
if((i__27055__auto___51861 < len__27054__auto___51860)){
args51857.push((arguments[i__27055__auto___51861]));

var G__51862 = (i__27055__auto___51861 + (1));
i__27055__auto___51861 = G__51862;
continue;
} else {
}
break;
}

var G__51859 = args51857.length;
switch (G__51859) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args51857.length)].join('')));

}
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$2 = (function (comp,container){
return reagent.dom.render.call(null,comp,container,null);
});

reagent.dom.render.cljs$core$IFn$_invoke$arity$3 = (function (comp,container,callback){
reagent.ratom.flush_BANG_.call(null);

var f = (function (){
return reagent.impl.template.as_element.call(null,((cljs.core.fn_QMARK_.call(null,comp))?comp.call(null):comp));
});
return reagent.dom.render_comp.call(null,f,container,callback);
});

reagent.dom.render.cljs$lang$maxFixedArity = 3;

reagent.dom.unmount_component_at_node = (function reagent$dom$unmount_component_at_node(container){
return reagent.dom.unmount_comp.call(null,container);
});
/**
 * Returns the root DOM node of a mounted component.
 */
reagent.dom.dom_node = (function reagent$dom$dom_node(this$){
return (reagent.dom.module.call(null)["findDOMNode"])(this$);
});
/**
 * Force re-rendering of all mounted Reagent components. This is
 *   probably only useful in a development environment, when you want to
 *   update components in response to some dynamic changes to code.
 * 
 *   Note that force-update-all may not update root components. This
 *   happens if a component 'foo' is mounted with `(render [foo])` (since
 *   functions are passed by value, and not by reference, in
 *   ClojureScript). To get around this you'll have to introduce a layer
 *   of indirection, for example by using `(render [#'foo])` instead.
 */
reagent.dom.force_update_all = (function reagent$dom$force_update_all(){
reagent.ratom.flush_BANG_.call(null);

var seq__51868_51872 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__51869_51873 = null;
var count__51870_51874 = (0);
var i__51871_51875 = (0);
while(true){
if((i__51871_51875 < count__51870_51874)){
var v_51876 = cljs.core._nth.call(null,chunk__51869_51873,i__51871_51875);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_51876);

var G__51877 = seq__51868_51872;
var G__51878 = chunk__51869_51873;
var G__51879 = count__51870_51874;
var G__51880 = (i__51871_51875 + (1));
seq__51868_51872 = G__51877;
chunk__51869_51873 = G__51878;
count__51870_51874 = G__51879;
i__51871_51875 = G__51880;
continue;
} else {
var temp__4657__auto___51881 = cljs.core.seq.call(null,seq__51868_51872);
if(temp__4657__auto___51881){
var seq__51868_51882__$1 = temp__4657__auto___51881;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__51868_51882__$1)){
var c__26790__auto___51883 = cljs.core.chunk_first.call(null,seq__51868_51882__$1);
var G__51884 = cljs.core.chunk_rest.call(null,seq__51868_51882__$1);
var G__51885 = c__26790__auto___51883;
var G__51886 = cljs.core.count.call(null,c__26790__auto___51883);
var G__51887 = (0);
seq__51868_51872 = G__51884;
chunk__51869_51873 = G__51885;
count__51870_51874 = G__51886;
i__51871_51875 = G__51887;
continue;
} else {
var v_51888 = cljs.core.first.call(null,seq__51868_51882__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_51888);

var G__51889 = cljs.core.next.call(null,seq__51868_51882__$1);
var G__51890 = null;
var G__51891 = (0);
var G__51892 = (0);
seq__51868_51872 = G__51889;
chunk__51869_51873 = G__51890;
count__51870_51874 = G__51891;
i__51871_51875 = G__51892;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1499548751593