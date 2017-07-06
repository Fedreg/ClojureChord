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
var _STAR_always_update_STAR_27728 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = true;

try{return (reagent.dom.module.call(null)["render"])(comp.call(null),container,((function (_STAR_always_update_STAR_27728){
return (function (){
var _STAR_always_update_STAR_27729 = reagent.impl.util._STAR_always_update_STAR_;
reagent.impl.util._STAR_always_update_STAR_ = false;

try{cljs.core.swap_BANG_.call(null,reagent.dom.roots,cljs.core.assoc,container,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [comp,container], null));

reagent.impl.batching.flush_after_render.call(null);

if(cljs.core.some_QMARK_.call(null,callback)){
return callback.call(null);
} else {
return null;
}
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27729;
}});})(_STAR_always_update_STAR_27728))
);
}finally {reagent.impl.util._STAR_always_update_STAR_ = _STAR_always_update_STAR_27728;
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
var args27730 = [];
var len__27054__auto___27733 = arguments.length;
var i__27055__auto___27734 = (0);
while(true){
if((i__27055__auto___27734 < len__27054__auto___27733)){
args27730.push((arguments[i__27055__auto___27734]));

var G__27735 = (i__27055__auto___27734 + (1));
i__27055__auto___27734 = G__27735;
continue;
} else {
}
break;
}

var G__27732 = args27730.length;
switch (G__27732) {
case 2:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return reagent.dom.render.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args27730.length)].join('')));

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

var seq__27741_27745 = cljs.core.seq.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,reagent.dom.roots)));
var chunk__27742_27746 = null;
var count__27743_27747 = (0);
var i__27744_27748 = (0);
while(true){
if((i__27744_27748 < count__27743_27747)){
var v_27749 = cljs.core._nth.call(null,chunk__27742_27746,i__27744_27748);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27749);

var G__27750 = seq__27741_27745;
var G__27751 = chunk__27742_27746;
var G__27752 = count__27743_27747;
var G__27753 = (i__27744_27748 + (1));
seq__27741_27745 = G__27750;
chunk__27742_27746 = G__27751;
count__27743_27747 = G__27752;
i__27744_27748 = G__27753;
continue;
} else {
var temp__4657__auto___27754 = cljs.core.seq.call(null,seq__27741_27745);
if(temp__4657__auto___27754){
var seq__27741_27755__$1 = temp__4657__auto___27754;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__27741_27755__$1)){
var c__26790__auto___27756 = cljs.core.chunk_first.call(null,seq__27741_27755__$1);
var G__27757 = cljs.core.chunk_rest.call(null,seq__27741_27755__$1);
var G__27758 = c__26790__auto___27756;
var G__27759 = cljs.core.count.call(null,c__26790__auto___27756);
var G__27760 = (0);
seq__27741_27745 = G__27757;
chunk__27742_27746 = G__27758;
count__27743_27747 = G__27759;
i__27744_27748 = G__27760;
continue;
} else {
var v_27761 = cljs.core.first.call(null,seq__27741_27755__$1);
cljs.core.apply.call(null,reagent.dom.re_render_component,v_27761);

var G__27762 = cljs.core.next.call(null,seq__27741_27755__$1);
var G__27763 = null;
var G__27764 = (0);
var G__27765 = (0);
seq__27741_27745 = G__27762;
chunk__27742_27746 = G__27763;
count__27743_27747 = G__27764;
i__27744_27748 = G__27765;
continue;
}
} else {
}
}
break;
}

return "Updated";
});

//# sourceMappingURL=dom.js.map?rel=1499270863393