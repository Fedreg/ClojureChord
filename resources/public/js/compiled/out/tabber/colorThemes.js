// Compiled by ClojureScript 1.9.229 {}
goog.provide('tabber.colorThemes');
goog.require('cljs.core');
goog.require('tabber.state');
tabber.colorThemes.grey = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"f1","f1",1714532389),new cljs.core.Keyword(null,"t2","t2",-748855222),new cljs.core.Keyword(null,"bcgrnd","bcgrnd",1237045166),new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"f3","f3",1954829043),new cljs.core.Keyword(null,"f2","f2",396168596),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"t1","t1",24972444),new cljs.core.Keyword(null,"f4","f4",990968764),new cljs.core.Keyword(null,"menu","menu",352255198)],["#fd2e58","#000","#333","#474747","#f1e7de","#a8a7a7","#444","#fff","#efa93a","#222"]);
tabber.colorThemes.light = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"f1","f1",1714532389),new cljs.core.Keyword(null,"t2","t2",-748855222),new cljs.core.Keyword(null,"bcgrnd","bcgrnd",1237045166),new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"f3","f3",1954829043),new cljs.core.Keyword(null,"f2","f2",396168596),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"t1","t1",24972444),new cljs.core.Keyword(null,"f4","f4",990968764),new cljs.core.Keyword(null,"menu","menu",352255198)],["#5dd7ef","#222","#eee","#fff","#5d8eef","#a8a7a7","#ccc","#000","#cc527a","#ddd"]);
tabber.colorThemes.contrast = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"f1","f1",1714532389),new cljs.core.Keyword(null,"t2","t2",-748855222),new cljs.core.Keyword(null,"bcgrnd","bcgrnd",1237045166),new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"f3","f3",1954829043),new cljs.core.Keyword(null,"f2","f2",396168596),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"t1","t1",24972444),new cljs.core.Keyword(null,"f4","f4",990968764),new cljs.core.Keyword(null,"menu","menu",352255198)],["#5dd7ef","#222","#eee","#000","#5d8eef","#a8a7a7","#ccc","#000","#cc527a","#ddd"]);
tabber.colorThemes.dark = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"f1","f1",1714532389),new cljs.core.Keyword(null,"t2","t2",-748855222),new cljs.core.Keyword(null,"bcgrnd","bcgrnd",1237045166),new cljs.core.Keyword(null,"chart","chart",1173225425),new cljs.core.Keyword(null,"f3","f3",1954829043),new cljs.core.Keyword(null,"f2","f2",396168596),new cljs.core.Keyword(null,"fx","fx",-1237829572),new cljs.core.Keyword(null,"t1","t1",24972444),new cljs.core.Keyword(null,"f4","f4",990968764),new cljs.core.Keyword(null,"menu","menu",352255198)],["#203fcd","#333","#000","#111","#5d8eef","#a8a7a7","#444","#fff","#194162","#111"]);
tabber.colorThemes.ReturnColors = (function tabber$colorThemes$ReturnColors(value){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),"dark")){
return cljs.core.get.call(null,tabber.colorThemes.dark,value);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),"light")){
return cljs.core.get.call(null,tabber.colorThemes.light,value);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),"grey")){
return cljs.core.get.call(null,tabber.colorThemes.grey,value);
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),"contrast")){
return cljs.core.get.call(null,tabber.colorThemes.contrast,value);
} else {
return "";

}
}
}
}
});

//# sourceMappingURL=colorThemes.js.map?rel=1499925603166