// Compiled by ClojureScript 1.9.671 {}
goog.provide('figwheel.client.heads_up');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('cljs.core.async');
goog.require('goog.string');
goog.require('goog.dom.dataset');
goog.require('goog.object');
goog.require('goog.dom');
goog.require('cljs.pprint');

figwheel.client.heads_up.node = (function figwheel$client$heads_up$node(var_args){
var args__29809__auto__ = [];
var len__29802__auto___36917 = arguments.length;
var i__29803__auto___36918 = (0);
while(true){
if((i__29803__auto___36918 < len__29802__auto___36917)){
args__29809__auto__.push((arguments[i__29803__auto___36918]));

var G__36919 = (i__29803__auto___36918 + (1));
i__29803__auto___36918 = G__36919;
continue;
} else {
}
break;
}

var argseq__29810__auto__ = ((((2) < args__29809__auto__.length))?(new cljs.core.IndexedSeq(args__29809__auto__.slice((2)),(0),null)):null);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__29810__auto__);
});

figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic = (function (t,attrs,children){
var e = document.createElement(cljs.core.name.call(null,t));
var seq__36909_36920 = cljs.core.seq.call(null,cljs.core.keys.call(null,attrs));
var chunk__36910_36921 = null;
var count__36911_36922 = (0);
var i__36912_36923 = (0);
while(true){
if((i__36912_36923 < count__36911_36922)){
var k_36924 = cljs.core._nth.call(null,chunk__36910_36921,i__36912_36923);
e.setAttribute(cljs.core.name.call(null,k_36924),cljs.core.get.call(null,attrs,k_36924));

var G__36925 = seq__36909_36920;
var G__36926 = chunk__36910_36921;
var G__36927 = count__36911_36922;
var G__36928 = (i__36912_36923 + (1));
seq__36909_36920 = G__36925;
chunk__36910_36921 = G__36926;
count__36911_36922 = G__36927;
i__36912_36923 = G__36928;
continue;
} else {
var temp__5278__auto___36929 = cljs.core.seq.call(null,seq__36909_36920);
if(temp__5278__auto___36929){
var seq__36909_36930__$1 = temp__5278__auto___36929;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36909_36930__$1)){
var c__29481__auto___36931 = cljs.core.chunk_first.call(null,seq__36909_36930__$1);
var G__36932 = cljs.core.chunk_rest.call(null,seq__36909_36930__$1);
var G__36933 = c__29481__auto___36931;
var G__36934 = cljs.core.count.call(null,c__29481__auto___36931);
var G__36935 = (0);
seq__36909_36920 = G__36932;
chunk__36910_36921 = G__36933;
count__36911_36922 = G__36934;
i__36912_36923 = G__36935;
continue;
} else {
var k_36936 = cljs.core.first.call(null,seq__36909_36930__$1);
e.setAttribute(cljs.core.name.call(null,k_36936),cljs.core.get.call(null,attrs,k_36936));

var G__36937 = cljs.core.next.call(null,seq__36909_36930__$1);
var G__36938 = null;
var G__36939 = (0);
var G__36940 = (0);
seq__36909_36920 = G__36937;
chunk__36910_36921 = G__36938;
count__36911_36922 = G__36939;
i__36912_36923 = G__36940;
continue;
}
} else {
}
}
break;
}

var seq__36913_36941 = cljs.core.seq.call(null,children);
var chunk__36914_36942 = null;
var count__36915_36943 = (0);
var i__36916_36944 = (0);
while(true){
if((i__36916_36944 < count__36915_36943)){
var ch_36945 = cljs.core._nth.call(null,chunk__36914_36942,i__36916_36944);
e.appendChild(ch_36945);

var G__36946 = seq__36913_36941;
var G__36947 = chunk__36914_36942;
var G__36948 = count__36915_36943;
var G__36949 = (i__36916_36944 + (1));
seq__36913_36941 = G__36946;
chunk__36914_36942 = G__36947;
count__36915_36943 = G__36948;
i__36916_36944 = G__36949;
continue;
} else {
var temp__5278__auto___36950 = cljs.core.seq.call(null,seq__36913_36941);
if(temp__5278__auto___36950){
var seq__36913_36951__$1 = temp__5278__auto___36950;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__36913_36951__$1)){
var c__29481__auto___36952 = cljs.core.chunk_first.call(null,seq__36913_36951__$1);
var G__36953 = cljs.core.chunk_rest.call(null,seq__36913_36951__$1);
var G__36954 = c__29481__auto___36952;
var G__36955 = cljs.core.count.call(null,c__29481__auto___36952);
var G__36956 = (0);
seq__36913_36941 = G__36953;
chunk__36914_36942 = G__36954;
count__36915_36943 = G__36955;
i__36916_36944 = G__36956;
continue;
} else {
var ch_36957 = cljs.core.first.call(null,seq__36913_36951__$1);
e.appendChild(ch_36957);

var G__36958 = cljs.core.next.call(null,seq__36913_36951__$1);
var G__36959 = null;
var G__36960 = (0);
var G__36961 = (0);
seq__36913_36941 = G__36958;
chunk__36914_36942 = G__36959;
count__36915_36943 = G__36960;
i__36916_36944 = G__36961;
continue;
}
} else {
}
}
break;
}

return e;
});

figwheel.client.heads_up.node.cljs$lang$maxFixedArity = (2);

figwheel.client.heads_up.node.cljs$lang$applyTo = (function (seq36906){
var G__36907 = cljs.core.first.call(null,seq36906);
var seq36906__$1 = cljs.core.next.call(null,seq36906);
var G__36908 = cljs.core.first.call(null,seq36906__$1);
var seq36906__$2 = cljs.core.next.call(null,seq36906__$1);
return figwheel.client.heads_up.node.cljs$core$IFn$_invoke$arity$variadic(G__36907,G__36908,seq36906__$2);
});

if(typeof figwheel.client.heads_up.heads_up_event_dispatch !== 'undefined'){
} else {
figwheel.client.heads_up.heads_up_event_dispatch = (function (){var method_table__29601__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__29602__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var method_cache__29603__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__29604__auto__ = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__29605__auto__ = cljs.core.get.call(null,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),cljs.core.get_global_hierarchy.call(null));
return (new cljs.core.MultiFn(cljs.core.symbol.call(null,"figwheel.client.heads-up","heads-up-event-dispatch"),((function (method_table__29601__auto__,prefer_table__29602__auto__,method_cache__29603__auto__,cached_hierarchy__29604__auto__,hierarchy__29605__auto__){
return (function (dataset){
return dataset.figwheelEvent;
});})(method_table__29601__auto__,prefer_table__29602__auto__,method_cache__29603__auto__,cached_hierarchy__29604__auto__,hierarchy__29605__auto__))
,new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__29605__auto__,method_table__29601__auto__,prefer_table__29602__auto__,method_cache__29603__auto__,cached_hierarchy__29604__auto__));
})();
}
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_){
return cljs.core.PersistentArrayMap.EMPTY;
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"file-selected",(function (dataset){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),dataset.fileName,new cljs.core.Keyword(null,"file-line","file-line",-1228823138),dataset.fileLine,new cljs.core.Keyword(null,"file-column","file-column",1543934780),dataset.fileColumn], null));
}));
cljs.core._add_method.call(null,figwheel.client.heads_up.heads_up_event_dispatch,"close-heads-up",(function (dataset){
return figwheel.client.heads_up.clear.call(null);
}));
figwheel.client.heads_up.ancestor_nodes = (function figwheel$client$heads_up$ancestor_nodes(el){
return cljs.core.iterate.call(null,(function (e){
return e.parentNode;
}),el);
});
figwheel.client.heads_up.get_dataset = (function figwheel$client$heads_up$get_dataset(el){
return cljs.core.first.call(null,cljs.core.keep.call(null,(function (x){
if(cljs.core.truth_(x.dataset.figwheelEvent)){
return x.dataset;
} else {
return null;
}
}),cljs.core.take.call(null,(4),figwheel.client.heads_up.ancestor_nodes.call(null,el))));
});
figwheel.client.heads_up.heads_up_onclick_handler = (function figwheel$client$heads_up$heads_up_onclick_handler(event){
var dataset = figwheel.client.heads_up.get_dataset.call(null,event.target);
event.preventDefault();

if(cljs.core.truth_(dataset)){
return figwheel.client.heads_up.heads_up_event_dispatch.call(null,dataset);
} else {
return null;
}
});
figwheel.client.heads_up.ensure_container = (function figwheel$client$heads_up$ensure_container(){
var cont_id = "figwheel-heads-up-container";
var content_id = "figwheel-heads-up-content-area";
if(cljs.core.not.call(null,document.querySelector([cljs.core.str.cljs$core$IFn$_invoke$arity$1("#"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cont_id)].join('')))){
var el_36962 = figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cont_id,new cljs.core.Keyword(null,"style","style",-496642736),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("-webkit-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-moz-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("-o-transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("transition: all 0.2s ease-in-out;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("border-top: 1px solid #f5f5f5;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-shadow: 0px 0px 1px #aaaaaa;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #333;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 0px 10px 0px 70px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: fixed;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("bottom: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("opacity: 0.0;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("box-sizing: border-box;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 10000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: left;")].join('')], null));
el_36962.onclick = figwheel.client.heads_up.heads_up_onclick_handler;

el_36962.innerHTML = figwheel.client.heads_up.cljs_logo_svg;

el_36962.appendChild(figwheel.client.heads_up.node.call(null,new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),content_id], null)));

document.body.appendChild(el_36962);
} else {
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"container-el","container-el",109664205),document.getElementById(cont_id),new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187),document.getElementById(content_id)], null);
});
figwheel.client.heads_up.set_style_BANG_ = (function figwheel$client$heads_up$set_style_BANG_(p__36963,st_map){
var map__36964 = p__36963;
var map__36964__$1 = ((((!((map__36964 == null)))?((((map__36964.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36964.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36964):map__36964);
var container_el = cljs.core.get.call(null,map__36964__$1,new cljs.core.Keyword(null,"container-el","container-el",109664205));
return cljs.core.mapv.call(null,((function (map__36964,map__36964__$1,container_el){
return (function (p__36966){
var vec__36967 = p__36966;
var k = cljs.core.nth.call(null,vec__36967,(0),null);
var v = cljs.core.nth.call(null,vec__36967,(1),null);
return (container_el.style[cljs.core.name.call(null,k)] = v);
});})(map__36964,map__36964__$1,container_el))
,st_map);
});
figwheel.client.heads_up.set_content_BANG_ = (function figwheel$client$heads_up$set_content_BANG_(p__36970,dom_str){
var map__36971 = p__36970;
var map__36971__$1 = ((((!((map__36971 == null)))?((((map__36971.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36971.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36971):map__36971);
var c = map__36971__$1;
var content_area_el = cljs.core.get.call(null,map__36971__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML = dom_str;
});
figwheel.client.heads_up.get_content = (function figwheel$client$heads_up$get_content(p__36973){
var map__36974 = p__36973;
var map__36974__$1 = ((((!((map__36974 == null)))?((((map__36974.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36974.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__36974):map__36974);
var content_area_el = cljs.core.get.call(null,map__36974__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
return content_area_el.innerHTML;
});
figwheel.client.heads_up.close_link = (function figwheel$client$heads_up$close_link(){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<a style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("float: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 18px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-decoration: none;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: right;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 30px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: rgba(84,84,84, 0.5);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" href=\"#\"  data-figwheel-event=\"close-heads-up\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("x"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</a>")].join('');
});
figwheel.client.heads_up.display_heads_up = (function figwheel$client$heads_up$display_heads_up(style,msg){
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__){
return (function (state_36991){
var state_val_36992 = (state_36991[(1)]);
if((state_val_36992 === (1))){
var inst_36976 = (state_36991[(7)]);
var inst_36976__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_36977 = [new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"paddingBottom","paddingBottom",-916694489),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_36978 = ["10px","10px","100%","68px","1.0"];
var inst_36979 = cljs.core.PersistentHashMap.fromArrays(inst_36977,inst_36978);
var inst_36980 = cljs.core.merge.call(null,inst_36979,style);
var inst_36981 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36976__$1,inst_36980);
var inst_36982 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_36976__$1,msg);
var inst_36983 = cljs.core.async.timeout.call(null,(300));
var state_36991__$1 = (function (){var statearr_36993 = state_36991;
(statearr_36993[(7)] = inst_36976__$1);

(statearr_36993[(8)] = inst_36982);

(statearr_36993[(9)] = inst_36981);

return statearr_36993;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36991__$1,(2),inst_36983);
} else {
if((state_val_36992 === (2))){
var inst_36976 = (state_36991[(7)]);
var inst_36985 = (state_36991[(2)]);
var inst_36986 = [new cljs.core.Keyword(null,"height","height",1025178622)];
var inst_36987 = ["auto"];
var inst_36988 = cljs.core.PersistentHashMap.fromArrays(inst_36986,inst_36987);
var inst_36989 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_36976,inst_36988);
var state_36991__$1 = (function (){var statearr_36994 = state_36991;
(statearr_36994[(10)] = inst_36985);

return statearr_36994;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36991__$1,inst_36989);
} else {
return null;
}
}
});})(c__32958__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__){
return (function() {
var figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto__ = null;
var figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto____0 = (function (){
var statearr_36995 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_36995[(0)] = figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto__);

(statearr_36995[(1)] = (1));

return statearr_36995;
});
var figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto____1 = (function (state_36991){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_36991);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e36996){if((e36996 instanceof Object)){
var ex__32872__auto__ = e36996;
var statearr_36997_36999 = state_36991;
(statearr_36997_36999[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36996;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37000 = state_36991;
state_36991 = G__37000;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto__ = function(state_36991){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto____1.call(this,state_36991);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto____0;
figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto____1;
return figwheel$client$heads_up$display_heads_up_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_36998 = f__32959__auto__.call(null);
(statearr_36998[(6)] = c__32958__auto__);

return statearr_36998;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__))
);

return c__32958__auto__;
});
figwheel.client.heads_up.heading = (function figwheel$client$heads_up$heading(var_args){
var G__37002 = arguments.length;
switch (G__37002) {
case 1:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str.cljs$core$IFn$_invoke$arity$1("Invalid arity: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$1 = (function (s){
return figwheel.client.heads_up.heading.call(null,s,"");
});

figwheel.client.heads_up.heading.cljs$core$IFn$_invoke$arity$2 = (function (s,sub_head){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("line-height: 26px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-bottom: 2px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding-top: 1px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(s),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" <span style=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1("display: inline-block;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(sub_head),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span></div>")].join('');
});

figwheel.client.heads_up.heading.cljs$lang$maxFixedArity = 2;

figwheel.client.heads_up.file_selector_div = (function figwheel$client$heads_up$file_selector_div(file_name,line_number,column_number,msg){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"cursor: pointer;\" data-figwheel-event=\"file-selected\" data-file-name=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_name),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-line=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\" data-file-column=\""),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});
figwheel.client.heads_up.format_line = (function figwheel$client$heads_up$format_line(msg,p__37004){
var map__37005 = p__37004;
var map__37005__$1 = ((((!((map__37005 == null)))?((((map__37005.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37005.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37005):map__37005);
var file = cljs.core.get.call(null,map__37005__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37005__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37005__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg__$1 = goog.string.htmlEscape(msg);
if(cljs.core.truth_((function (){var or__28569__auto__ = file;
if(cljs.core.truth_(or__28569__auto__)){
return or__28569__auto__;
} else {
return line;
}
})())){
return figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg__$1);
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
}
});
figwheel.client.heads_up.escape = (function figwheel$client$heads_up$escape(x){
return goog.string.htmlEscape(x);
});
figwheel.client.heads_up.pad_line_number = (function figwheel$client$heads_up$pad_line_number(n,line_number){
var len = cljs.core.count.call(null,cljs.core.fnil.call(null,cljs.core.str,"").call(null,line_number));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((((len < n))?cljs.core.apply.call(null,cljs.core.str,cljs.core.repeat.call(null,(n - len)," ")):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number)].join('');
});
figwheel.client.heads_up.inline_error_line = (function figwheel$client$heads_up$inline_error_line(style,line_number,line){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(style),cljs.core.str.cljs$core$IFn$_invoke$arity$1("'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style='color: #757575;'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_number),cljs.core.str.cljs$core$IFn$_invoke$arity$1("  </span>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,line)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join('');
});
figwheel.client.heads_up.format_inline_error_line = (function figwheel$client$heads_up$format_inline_error_line(p__37007){
var vec__37008 = p__37007;
var typ = cljs.core.nth.call(null,vec__37008,(0),null);
var line_number = cljs.core.nth.call(null,vec__37008,(1),null);
var line = cljs.core.nth.call(null,vec__37008,(2),null);
var pred__37011 = cljs.core._EQ_;
var expr__37012 = typ;
if(cljs.core.truth_(pred__37011.call(null,new cljs.core.Keyword(null,"code-line","code-line",-2138627853),expr__37012))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #999;",line_number,line);
} else {
if(cljs.core.truth_(pred__37011.call(null,new cljs.core.Keyword(null,"error-in-code","error-in-code",-1661931357),expr__37012))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #ccc; font-weight: bold;",line_number,line);
} else {
if(cljs.core.truth_(pred__37011.call(null,new cljs.core.Keyword(null,"error-message","error-message",1756021561),expr__37012))){
return figwheel.client.heads_up.inline_error_line.call(null,"color: #D07D7D;",line_number,line);
} else {
return figwheel.client.heads_up.inline_error_line.call(null,"color: #666;",line_number,line);
}
}
}
});
figwheel.client.heads_up.pad_line_numbers = (function figwheel$client$heads_up$pad_line_numbers(inline_error){
var max_line_number_length = cljs.core.count.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.call(null,cljs.core.max,cljs.core.map.call(null,cljs.core.second,inline_error)))].join(''));
return cljs.core.map.call(null,((function (max_line_number_length){
return (function (p1__37014_SHARP_){
return cljs.core.update_in.call(null,p1__37014_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1)], null),cljs.core.partial.call(null,figwheel.client.heads_up.pad_line_number,max_line_number_length));
});})(max_line_number_length))
,inline_error);
});
figwheel.client.heads_up.format_inline_error = (function figwheel$client$heads_up$format_inline_error(inline_error){
var lines = cljs.core.map.call(null,figwheel.client.heads_up.format_inline_error_line,figwheel.client.heads_up.pad_line_numbers.call(null,inline_error));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre style='whitespace:pre; overflow-x: scroll; display:block; font-family:monospace; font-size:0.8em; border-radius: 3px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" line-height: 1.1em; padding: 10px; background-color: rgb(24,26,38); margin-right: 5px'>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,"\n",lines)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join('');
});
figwheel.client.heads_up.flatten_exception = (function figwheel$client$heads_up$flatten_exception(p1__37015_SHARP_){
return cljs.core.take_while.call(null,cljs.core.some_QMARK_,cljs.core.iterate.call(null,new cljs.core.Keyword(null,"cause","cause",231901252),p1__37015_SHARP_));
});
figwheel.client.heads_up.exception__GT_display_data = (function figwheel$client$heads_up$exception__GT_display_data(p__37018){
var map__37019 = p__37018;
var map__37019__$1 = ((((!((map__37019 == null)))?((((map__37019.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37019.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37019):map__37019);
var exception = map__37019__$1;
var message = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var failed_loading_clj_file = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"failed-loading-clj-file","failed-loading-clj-file",-1682536481));
var reader_exception = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"reader-exception","reader-exception",-1938323098));
var file = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var column = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var failed_compiling = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"failed-compiling","failed-compiling",1768639503));
var error_inline = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var line = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"line","line",212345235));
var class$ = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var analysis_exception = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"analysis-exception","analysis-exception",591623285));
var display_ex_data = cljs.core.get.call(null,map__37019__$1,new cljs.core.Keyword(null,"display-ex-data","display-ex-data",-1611558730));
var last_message = (cljs.core.truth_((function (){var and__28557__auto__ = file;
if(cljs.core.truth_(and__28557__auto__)){
return line;
} else {
return and__28557__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),(cljs.core.truth_(failed_loading_clj_file)?"Couldn't load Clojure file":(cljs.core.truth_(analysis_exception)?"Could not Analyze":(cljs.core.truth_(reader_exception)?"Could not Read":(cljs.core.truth_(failed_compiling)?"Could not Compile":"Compile Exception"
)))),new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37019,map__37019__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__37016_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37016_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__37019,map__37019__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,(cljs.core.truth_(message)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(class$)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,class$)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": ")].join(''):"")),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''),(cljs.core.truth_(display_ex_data)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<pre>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.utils.pprint_to_string.call(null,display_ex_data)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</pre>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null):cljs.core.map.call(null,((function (last_message,map__37019,map__37019__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data){
return (function (p1__37017_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(p1__37017_SHARP_))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(": "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(p1__37017_SHARP_)))].join('');
});})(last_message,map__37019,map__37019__$1,exception,message,failed_loading_clj_file,reader_exception,file,column,failed_compiling,error_inline,line,class$,analysis_exception,display_ex_data))
,figwheel.client.heads_up.flatten_exception.call(null,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(exception))))),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.auto_notify_source_file_line = (function figwheel$client$heads_up$auto_notify_source_file_line(p__37021){
var map__37022 = p__37021;
var map__37022__$1 = ((((!((map__37022 == null)))?((((map__37022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37022.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37022):map__37022);
var file = cljs.core.get.call(null,map__37022__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37022__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37022__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"file-selected",new cljs.core.Keyword(null,"file-name","file-name",-1654217259),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''),new cljs.core.Keyword(null,"file-line","file-line",-1228823138),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''),new cljs.core.Keyword(null,"file-column","file-column",1543934780),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('')], null));
});
figwheel.client.heads_up.display_exception = (function figwheel$client$heads_up$display_exception(exception_data){
var map__37025 = figwheel.client.heads_up.exception__GT_display_data.call(null,exception_data);
var map__37025__$1 = ((((!((map__37025 == null)))?((((map__37025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37025.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37025):map__37025);
var head = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37025__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 161, 161, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.warning_data__GT_display_data = (function figwheel$client$heads_up$warning_data__GT_display_data(p__37028){
var map__37029 = p__37028;
var map__37029__$1 = ((((!((map__37029 == null)))?((((map__37029.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37029.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37029):map__37029);
var warning_data = map__37029__$1;
var file = cljs.core.get.call(null,map__37029__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37029__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37029__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var message = cljs.core.get.call(null,map__37029__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var error_inline = cljs.core.get.call(null,map__37029__$1,new cljs.core.Keyword(null,"error-inline","error-inline",1073987185));
var last_message = (cljs.core.truth_((function (){var and__28557__auto__ = file;
if(cljs.core.truth_(and__28557__auto__)){
return line;
} else {
return and__28557__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" of file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):(cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Please see "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):null
));
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"head","head",-771383919),"Compile Warning",new cljs.core.Keyword(null,"sub-head","sub-head",1930649117),file,new cljs.core.Keyword(null,"messages","messages",345434482),cljs.core.concat.call(null,cljs.core.map.call(null,((function (last_message,map__37029,map__37029__$1,warning_data,file,line,column,message,error_inline){
return (function (p1__37027_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37027_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('');
});})(last_message,map__37029,map__37029__$1,warning_data,file,line,column,message,error_inline))
,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_(message)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<span style=\"font-weight:bold;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</span>")].join(''):null),(((cljs.core.count.call(null,error_inline) > (0)))?figwheel.client.heads_up.format_inline_error.call(null,error_inline):null)], null)),(cljs.core.truth_(last_message)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [[cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div style=\"color: #AD4F4F; padding-top: 3px; margin-bottom: 10px;\">"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.escape.call(null,last_message)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join('')], null):null)),new cljs.core.Keyword(null,"file","file",-1269645878),file,new cljs.core.Keyword(null,"line","line",212345235),line,new cljs.core.Keyword(null,"column","column",2078222095),column], null);
});
figwheel.client.heads_up.display_system_warning = (function figwheel$client$heads_up$display_system_warning(header,msg){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,header)),cljs.core.str.cljs$core$IFn$_invoke$arity$1("<div>"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg),cljs.core.str.cljs$core$IFn$_invoke$arity$1("</div>")].join(''));
});
figwheel.client.heads_up.display_warning = (function figwheel$client$heads_up$display_warning(warning_data){
var map__37031 = figwheel.client.heads_up.warning_data__GT_display_data.call(null,warning_data);
var map__37031__$1 = ((((!((map__37031 == null)))?((((map__37031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37031):map__37031);
var head = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"head","head",-771383919));
var sub_head = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"sub-head","sub-head",1930649117));
var messages = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"messages","messages",345434482));
var last_message = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"last-message","last-message",-2087778135));
var file = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37031__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var msg = cljs.core.apply.call(null,cljs.core.str,messages);
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(255, 220, 110, 0.95)"], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.close_link.call(null)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.heading.call(null,head,sub_head)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.heads_up.file_selector_div.call(null,file,line,column,msg))].join(''));
});
figwheel.client.heads_up.format_warning_message = (function figwheel$client$heads_up$format_warning_message(p__37033){
var map__37034 = p__37033;
var map__37034__$1 = ((((!((map__37034 == null)))?((((map__37034.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37034.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37034):map__37034);
var warning_data = map__37034__$1;
var message = cljs.core.get.call(null,map__37034__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37034__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37034__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37034__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__37036 = message;
var G__37036__$1 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37036),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" at line "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__37036);
var G__37036__$2 = (cljs.core.truth_((function (){var and__28557__auto__ = line;
if(cljs.core.truth_(and__28557__auto__)){
return column;
} else {
return and__28557__auto__;
}
})())?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37036__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(", column "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):G__37036__$1);
if(cljs.core.truth_(file)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37036__$2),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" in file "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join('');
} else {
return G__37036__$2;
}
});
figwheel.client.heads_up.append_warning_message = (function figwheel$client$heads_up$append_warning_message(p__37037){
var map__37038 = p__37037;
var map__37038__$1 = ((((!((map__37038 == null)))?((((map__37038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37038.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37038):map__37038);
var warning_data = map__37038__$1;
var message = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var file = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__37038__$1,new cljs.core.Keyword(null,"column","column",2078222095));
if(cljs.core.truth_(message)){
var map__37040 = figwheel.client.heads_up.ensure_container.call(null);
var map__37040__$1 = ((((!((map__37040 == null)))?((((map__37040.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37040.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37040):map__37040);
var content_area_el = cljs.core.get.call(null,map__37040__$1,new cljs.core.Keyword(null,"content-area-el","content-area-el",742757187));
var el = goog.dom.createElement("div");
var child_count = goog.dom.getChildren(content_area_el).length;
if((child_count < (6))){
el.innerHTML = figwheel.client.heads_up.format_line.call(null,figwheel.client.heads_up.format_warning_message.call(null,warning_data),warning_data);

return goog.dom.append(content_area_el,el);
} else {
var temp__5278__auto__ = goog.dom.getLastElementChild(content_area_el);
if(cljs.core.truth_(temp__5278__auto__)){
var last_child = temp__5278__auto__;
var temp__5276__auto__ = goog.dom.dataset.get(last_child,"figwheel_count");
if(cljs.core.truth_(temp__5276__auto__)){
var message_count = temp__5276__auto__;
var message_count__$1 = (parseInt(message_count) + (1));
goog.dom.dataset.set(last_child,"figwheel_count",message_count__$1);

return last_child.innerHTML = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message_count__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" more warnings have not been displayed ...")].join('');
} else {
return goog.dom.append(content_area_el,goog.dom.createDom("div",({"data-figwheel_count": (1), "style": "margin-top: 3px; font-weight: bold"}),"1 more warning that has not been displayed ..."));
}
} else {
return null;
}
}
} else {
return null;
}
});
figwheel.client.heads_up.clear = (function figwheel$client$heads_up$clear(){
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__){
return (function (state_37059){
var state_val_37060 = (state_37059[(1)]);
if((state_val_37060 === (1))){
var inst_37042 = (state_37059[(7)]);
var inst_37042__$1 = figwheel.client.heads_up.ensure_container.call(null);
var inst_37043 = [new cljs.core.Keyword(null,"opacity","opacity",397153780)];
var inst_37044 = ["0.0"];
var inst_37045 = cljs.core.PersistentHashMap.fromArrays(inst_37043,inst_37044);
var inst_37046 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37042__$1,inst_37045);
var inst_37047 = cljs.core.async.timeout.call(null,(300));
var state_37059__$1 = (function (){var statearr_37061 = state_37059;
(statearr_37061[(7)] = inst_37042__$1);

(statearr_37061[(8)] = inst_37046);

return statearr_37061;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37059__$1,(2),inst_37047);
} else {
if((state_val_37060 === (2))){
var inst_37042 = (state_37059[(7)]);
var inst_37049 = (state_37059[(2)]);
var inst_37050 = [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"minHeight","minHeight",-1635998980),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491)];
var inst_37051 = ["auto","0px","0px","0px 10px 0px 70px","0px","transparent"];
var inst_37052 = cljs.core.PersistentHashMap.fromArrays(inst_37050,inst_37051);
var inst_37053 = figwheel.client.heads_up.set_style_BANG_.call(null,inst_37042,inst_37052);
var inst_37054 = cljs.core.async.timeout.call(null,(200));
var state_37059__$1 = (function (){var statearr_37062 = state_37059;
(statearr_37062[(9)] = inst_37049);

(statearr_37062[(10)] = inst_37053);

return statearr_37062;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37059__$1,(3),inst_37054);
} else {
if((state_val_37060 === (3))){
var inst_37042 = (state_37059[(7)]);
var inst_37056 = (state_37059[(2)]);
var inst_37057 = figwheel.client.heads_up.set_content_BANG_.call(null,inst_37042,"");
var state_37059__$1 = (function (){var statearr_37063 = state_37059;
(statearr_37063[(11)] = inst_37056);

return statearr_37063;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37059__$1,inst_37057);
} else {
return null;
}
}
}
});})(c__32958__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__){
return (function() {
var figwheel$client$heads_up$clear_$_state_machine__32869__auto__ = null;
var figwheel$client$heads_up$clear_$_state_machine__32869__auto____0 = (function (){
var statearr_37064 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37064[(0)] = figwheel$client$heads_up$clear_$_state_machine__32869__auto__);

(statearr_37064[(1)] = (1));

return statearr_37064;
});
var figwheel$client$heads_up$clear_$_state_machine__32869__auto____1 = (function (state_37059){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_37059);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e37065){if((e37065 instanceof Object)){
var ex__32872__auto__ = e37065;
var statearr_37066_37068 = state_37059;
(statearr_37066_37068[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37059);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37065;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37069 = state_37059;
state_37059 = G__37069;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$heads_up$clear_$_state_machine__32869__auto__ = function(state_37059){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$clear_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$heads_up$clear_$_state_machine__32869__auto____1.call(this,state_37059);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$clear_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$clear_$_state_machine__32869__auto____0;
figwheel$client$heads_up$clear_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$clear_$_state_machine__32869__auto____1;
return figwheel$client$heads_up$clear_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_37067 = f__32959__auto__.call(null);
(statearr_37067[(6)] = c__32958__auto__);

return statearr_37067;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__))
);

return c__32958__auto__;
});
figwheel.client.heads_up.display_loaded_start = (function figwheel$client$heads_up$display_loaded_start(){
return figwheel.client.heads_up.display_heads_up.call(null,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"rgba(211,234,172,1.0)",new cljs.core.Keyword(null,"width","width",-384071477),"68px",new cljs.core.Keyword(null,"height","height",1025178622),"68px",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"0px",new cljs.core.Keyword(null,"paddingRight","paddingRight",-1642313463),"0px",new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),"35px"], null),"");
});
figwheel.client.heads_up.flash_loaded = (function figwheel$client$heads_up$flash_loaded(){
var c__32958__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__32958__auto__){
return (function (){
var f__32959__auto__ = (function (){var switch__32868__auto__ = ((function (c__32958__auto__){
return (function (state_37080){
var state_val_37081 = (state_37080[(1)]);
if((state_val_37081 === (1))){
var inst_37070 = figwheel.client.heads_up.display_loaded_start.call(null);
var state_37080__$1 = state_37080;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37080__$1,(2),inst_37070);
} else {
if((state_val_37081 === (2))){
var inst_37072 = (state_37080[(2)]);
var inst_37073 = cljs.core.async.timeout.call(null,(400));
var state_37080__$1 = (function (){var statearr_37082 = state_37080;
(statearr_37082[(7)] = inst_37072);

return statearr_37082;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37080__$1,(3),inst_37073);
} else {
if((state_val_37081 === (3))){
var inst_37075 = (state_37080[(2)]);
var inst_37076 = figwheel.client.heads_up.clear.call(null);
var state_37080__$1 = (function (){var statearr_37083 = state_37080;
(statearr_37083[(8)] = inst_37075);

return statearr_37083;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37080__$1,(4),inst_37076);
} else {
if((state_val_37081 === (4))){
var inst_37078 = (state_37080[(2)]);
var state_37080__$1 = state_37080;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37080__$1,inst_37078);
} else {
return null;
}
}
}
}
});})(c__32958__auto__))
;
return ((function (switch__32868__auto__,c__32958__auto__){
return (function() {
var figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto__ = null;
var figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto____0 = (function (){
var statearr_37084 = [null,null,null,null,null,null,null,null,null];
(statearr_37084[(0)] = figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto__);

(statearr_37084[(1)] = (1));

return statearr_37084;
});
var figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto____1 = (function (state_37080){
while(true){
var ret_value__32870__auto__ = (function (){try{while(true){
var result__32871__auto__ = switch__32868__auto__.call(null,state_37080);
if(cljs.core.keyword_identical_QMARK_.call(null,result__32871__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__32871__auto__;
}
break;
}
}catch (e37085){if((e37085 instanceof Object)){
var ex__32872__auto__ = e37085;
var statearr_37086_37088 = state_37080;
(statearr_37086_37088[(5)] = ex__32872__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37080);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37085;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__32870__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37089 = state_37080;
state_37080 = G__37089;
continue;
} else {
return ret_value__32870__auto__;
}
break;
}
});
figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto__ = function(state_37080){
switch(arguments.length){
case 0:
return figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto____0.call(this);
case 1:
return figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto____1.call(this,state_37080);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto____0;
figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto____1;
return figwheel$client$heads_up$flash_loaded_$_state_machine__32869__auto__;
})()
;})(switch__32868__auto__,c__32958__auto__))
})();
var state__32960__auto__ = (function (){var statearr_37087 = f__32959__auto__.call(null);
(statearr_37087[(6)] = c__32958__auto__);

return statearr_37087;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__32960__auto__);
});})(c__32958__auto__))
);

return c__32958__auto__;
});
figwheel.client.heads_up.cljs_logo_svg = "<?xml version='1.0' encoding='utf-8'?>\n<!DOCTYPE svg PUBLIC '-//W3C//DTD SVG 1.1//EN' 'http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd'>\n<svg width='49px' height='49px' style='position:absolute; top:9px; left: 10px;' version='1.1'\n  xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px'\n  viewBox='0 0 428 428' enable-background='new 0 0 428 428' xml:space='preserve'>\n<circle fill='#fff' cx='213' cy='214' r='213' />\n<g>\n<path fill='#96CA4B' d='M122,266.6c-12.7,0-22.3-3.7-28.9-11.1c-6.6-7.4-9.9-18-9.9-31.8c0-14.1,3.4-24.9,10.3-32.5\n  s16.8-11.4,29.9-11.4c8.8,0,16.8,1.6,23.8,4.9l-5.4,14.3c-7.5-2.9-13.7-4.4-18.6-4.4c-14.5,0-21.7,9.6-21.7,28.8\n  c0,9.4,1.8,16.4,5.4,21.2c3.6,4.7,8.9,7.1,15.9,7.1c7.9,0,15.4-2,22.5-5.9v15.5c-3.2,1.9-6.6,3.2-10.2,4\n  C131.5,266.2,127.1,266.6,122,266.6z'/>\n<path fill='#96CA4B' d='M194.4,265.1h-17.8V147.3h17.8V265.1z'/>\n<path fill='#5F7FBF' d='M222.9,302.3c-5.3,0-9.8-0.6-13.3-1.9v-14.1c3.4,0.9,6.9,1.4,10.5,1.4c7.6,0,11.4-4.3,11.4-12.9v-93.5h17.8\n  v94.7c0,8.6-2.3,15.2-6.8,19.6C237.9,300.1,231.4,302.3,222.9,302.3z M230.4,159.2c0-3.2,0.9-5.6,2.6-7.3c1.7-1.7,4.2-2.6,7.5-2.6\n  c3.1,0,5.6,0.9,7.3,2.6c1.7,1.7,2.6,4.2,2.6,7.3c0,3-0.9,5.4-2.6,7.2c-1.7,1.7-4.2,2.6-7.3,2.6c-3.2,0-5.7-0.9-7.5-2.6\n  C231.2,164.6,230.4,162.2,230.4,159.2z'/>\n<path fill='#5F7FBF' d='M342.5,241.3c0,8.2-3,14.4-8.9,18.8c-6,4.4-14.5,6.5-25.6,6.5c-11.2,0-20.1-1.7-26.9-5.1v-15.4\n  c9.8,4.5,19,6.8,27.5,6.8c10.9,0,16.4-3.3,16.4-9.9c0-2.1-0.6-3.9-1.8-5.3c-1.2-1.4-3.2-2.9-6-4.4c-2.8-1.5-6.6-3.2-11.6-5.1\n  c-9.6-3.7-16.2-7.5-19.6-11.2c-3.4-3.7-5.1-8.6-5.1-14.5c0-7.2,2.9-12.7,8.7-16.7c5.8-4,13.6-5.9,23.6-5.9c9.8,0,19.1,2,27.9,6\n  l-5.8,13.4c-9-3.7-16.6-5.6-22.8-5.6c-9.4,0-14.1,2.7-14.1,8c0,2.6,1.2,4.8,3.7,6.7c2.4,1.8,7.8,4.3,16,7.5\n  c6.9,2.7,11.9,5.1,15.1,7.3c3.1,2.2,5.4,4.8,7,7.7C341.7,233.7,342.5,237.2,342.5,241.3z'/>\n</g>\n<path fill='#96CA4B' stroke='#96CA4B' stroke-width='6' stroke-miterlimit='10' d='M197,392.7c-91.2-8.1-163-85-163-178.3\n  S105.8,44.3,197,36.2V16.1c-102.3,8.2-183,94-183,198.4s80.7,190.2,183,198.4V392.7z'/>\n<path fill='#5F7FBF' stroke='#5F7FBF' stroke-width='6' stroke-miterlimit='10' d='M229,16.1v20.1c91.2,8.1,163,85,163,178.3\n  s-71.8,170.2-163,178.3v20.1c102.3-8.2,183-94,183-198.4S331.3,24.3,229,16.1z'/>\n</svg>";
figwheel.client.heads_up.close_bad_compile_screen = (function figwheel$client$heads_up$close_bad_compile_screen(){
var temp__5278__auto__ = document.getElementById("figwheelFailScreen");
if(cljs.core.truth_(temp__5278__auto__)){
var el = temp__5278__auto__;
return goog.dom.removeNode(el);
} else {
return null;
}
});
figwheel.client.heads_up.bad_compile_screen = (function figwheel$client$heads_up$bad_compile_screen(){
var body = (goog.dom.getElementsByTagNameAndClass("body")[(0)]);
figwheel.client.heads_up.close_bad_compile_screen.call(null);

return goog.dom.append(body,goog.dom.createDom("div",({"id": "figwheelFailScreen", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("background-color: rgba(24, 26, 38, 0.95);"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: absolute;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("z-index: 9000;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("height: 100vh;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("top: 0px; left: 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-family: monospace")].join('')}),goog.dom.createDom("div",({"class": "message", "style": [cljs.core.str.cljs$core$IFn$_invoke$arity$1("color: #FFF5DB;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("width: 100vw;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin: auto;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("margin-top: 10px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("text-align: center; "),cljs.core.str.cljs$core$IFn$_invoke$arity$1("padding: 2px 0px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("font-size: 13px;"),cljs.core.str.cljs$core$IFn$_invoke$arity$1("position: relative")].join('')}),goog.dom.createDom("a",({"onclick": ((function (body){
return (function (e){
e.preventDefault();

return figwheel.client.heads_up.close_bad_compile_screen.call(null);
});})(body))
, "href": "javascript:", "style": "position: absolute; right: 10px; top: 10px; color: #666"}),"X"),goog.dom.createDom("h2",({"style": "color: #FFF5DB"}),"Figwheel Says: Your code didn't compile."),goog.dom.createDom("div",({"style": "font-size: 12px"}),goog.dom.createDom("p",({"style": "color: #D07D7D;"}),"Keep trying. This page will auto-refresh when your code compiles successfully.")))));
});

//# sourceMappingURL=heads_up.js.map?rel=1500333150169