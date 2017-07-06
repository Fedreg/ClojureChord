// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.formatters.budgeting');
goog.require('cljs.core');
goog.require('devtools.formatters.templating');
goog.require('devtools.formatters.state');
goog.require('devtools.formatters.helpers');
goog.require('devtools.formatters.markup');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = ((typeof WeakSet !== 'undefined')?(new WeakSet()):cljs.core.volatile_BANG_.call(null,cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.conj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__37079__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__37079__auto__,"add").call(o__37079__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_.call(null,devtools.formatters.budgeting.over_budget_values,cljs.core.disj.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__37079__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__37079__auto__,"delete").call(o__37079__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_.call(null,devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_.call(null,cljs.core.deref.call(null,devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__37079__auto__ = devtools.formatters.budgeting.over_budget_values;
return goog.object.get(o__37079__auto__,"has").call(o__37079__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
return (cljs.core.apply.call(null,cljs.core.max,cljs.core.map.call(null,devtools$formatters$budgeting$determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_.call(null,json_ml)){
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
return true;
} else {
return cljs.core.some.call(null,devtools$formatters$budgeting$has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second.call(null,object_reference);
var _ = ((cljs.core.object_QMARK_.call(null,data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = goog.object.get(data,"config");
var G__40160 = data;
var target__37098__auto__ = G__40160;
if(cljs.core.truth_(target__37098__auto__)){
} else {
throw (new Error([cljs.core.str("Assert failed: "),cljs.core.str([cljs.core.str("unable to locate object path "),cljs.core.str(null),cljs.core.str(" in "),cljs.core.str(G__40160)].join('')),cljs.core.str("\n"),cljs.core.str("target__37098__auto__")].join('')));
}

goog.object.set(target__37098__auto__,cljs.core.last.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["config"], null)),devtools.formatters.state.set_depth_budget.call(null,config,depth_budget));

return G__40160;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if(!((depth_budget < (0)))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_.call(null,json_ml)){
var new_depth_budget_40169 = (depth_budget - (1));
if(cljs.core.truth_(devtools.formatters.budgeting.object_reference_QMARK_.call(null,json_ml))){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_.call(null,json_ml,new_depth_budget_40169);
} else {
var seq__40165_40170 = cljs.core.seq.call(null,json_ml);
var chunk__40166_40171 = null;
var count__40167_40172 = (0);
var i__40168_40173 = (0);
while(true){
if((i__40168_40173 < count__40167_40172)){
var item_40174 = cljs.core._nth.call(null,chunk__40166_40171,i__40168_40173);
devtools$formatters$budgeting$distribute_budget_BANG_.call(null,item_40174,new_depth_budget_40169);

var G__40175 = seq__40165_40170;
var G__40176 = chunk__40166_40171;
var G__40177 = count__40167_40172;
var G__40178 = (i__40168_40173 + (1));
seq__40165_40170 = G__40175;
chunk__40166_40171 = G__40176;
count__40167_40172 = G__40177;
i__40168_40173 = G__40178;
continue;
} else {
var temp__4657__auto___40179 = cljs.core.seq.call(null,seq__40165_40170);
if(temp__4657__auto___40179){
var seq__40165_40180__$1 = temp__4657__auto___40179;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__40165_40180__$1)){
var c__26790__auto___40181 = cljs.core.chunk_first.call(null,seq__40165_40180__$1);
var G__40182 = cljs.core.chunk_rest.call(null,seq__40165_40180__$1);
var G__40183 = c__26790__auto___40181;
var G__40184 = cljs.core.count.call(null,c__26790__auto___40181);
var G__40185 = (0);
seq__40165_40170 = G__40182;
chunk__40166_40171 = G__40183;
count__40167_40172 = G__40184;
i__40168_40173 = G__40185;
continue;
} else {
var item_40186 = cljs.core.first.call(null,seq__40165_40180__$1);
devtools$formatters$budgeting$distribute_budget_BANG_.call(null,item_40186,new_depth_budget_40169);

var G__40187 = cljs.core.next.call(null,seq__40165_40180__$1);
var G__40188 = null;
var G__40189 = (0);
var G__40190 = (0);
seq__40165_40170 = G__40187;
chunk__40166_40171 = G__40188;
count__40167_40172 = G__40189;
i__40168_40173 = G__40190;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_.call(null,value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_.call(null,value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__4655__auto__ = devtools.formatters.helpers.pref.call(null,new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__4655__auto__)){
var initial_hierarchy_depth_budget = temp__4655__auto__;
var remaining_depth_budget = (function (){var or__25979__auto__ = devtools.formatters.state.get_depth_budget.call(null);
if(cljs.core.truth_(or__25979__auto__)){
return or__25979__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth.call(null,json_ml);
var final_QMARK_ = cljs.core.not.call(null,devtools.formatters.budgeting.has_any_object_reference_QMARK_.call(null,json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_.call(null,json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup.call(null,devtools.formatters.markup._LT_header_expander_GT_.call(null,value));
devtools.formatters.budgeting.add_over_budget_value_BANG_.call(null,value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=budgeting.js.map?rel=1499270889396