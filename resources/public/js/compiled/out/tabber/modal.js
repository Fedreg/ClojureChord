// Compiled by ClojureScript 1.9.229 {}
goog.provide('tabber.modal');
goog.require('cljs.core');
goog.require('tabber.state');
goog.require('tabber.colorThemes');
cljs.core.enable_console_print_BANG_.call(null);
cljs.core.print.call(null,tabber.colorThemes.light);
tabber.modal.ModalIcon = (function tabber$modal$ModalIcon(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"25px",new cljs.core.Keyword(null,"right","right",-452581833),"25px",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"transform","transform",1381301764),((cljs.core._EQ_.call(null,true,new cljs.core.Keyword(null,"showModal","showModal",-1664022078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?"translateX(-320px) rotate(90deg)":"translateX(0) rotate(0)"),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1001),new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showModal","showModal",-1664022078)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"showModal","showModal",-1664022078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"6px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"6px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#fff",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"6px"], null)], null)], null)], null);
});
tabber.modal.ThemeSelect = (function tabber$modal$ThemeSelect(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"16px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#333",new cljs.core.Keyword(null,"-webkitAppearance","-webkitAppearance",-1794369576),"none",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #fff"], null),new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__45696_SHARP_){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732)], null),p1__45696_SHARP_.target.value);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"grey"], null),"Grey"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"light"], null),"Light"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"dark"], null),"Dark"], null)], null);
});
tabber.modal.Modal = (function tabber$modal$Modal(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622)],[((cljs.core._EQ_.call(null,true,new cljs.core.Keyword(null,"showModal","showModal",-1664022078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?"translateX(0)":"translateX(420px)"),"#fff","all 0.3s ease","0","75px","400px","1000","0","fixed","#222","100vh"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Select Theme (Not operational yet!)"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.ThemeSelect], null)], null);
});

//# sourceMappingURL=modal.js.map?rel=1499363809074