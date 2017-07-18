// Compiled by ClojureScript 1.9.671 {}
goog.provide('tabber.modal');
goog.require('cljs.core');
goog.require('tabber.state');
goog.require('tabber.songs');
goog.require('tabber.songViewer');
goog.require('tabber.colorThemes');
tabber.modal.ModalIconStyle = (function tabber$modal$ModalIconStyle(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"25px",new cljs.core.Keyword(null,"right","right",-452581833),"25px",new cljs.core.Keyword(null,"width","width",-384071477),"20px",new cljs.core.Keyword(null,"transform","transform",1381301764),((cljs.core._EQ_.call(null,true,new cljs.core.Keyword(null,"showModal","showModal",-1664022078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?"translateX(-320px) rotate(270deg)":"translateX(0) rotate(0)"),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),(1001),new cljs.core.Keyword(null,"transition","transition",765692007),"all 0.3s ease",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer"], null);
});
tabber.modal.ModalIconHRStyle = (function tabber$modal$ModalIconHRStyle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"6px"], null);
});
tabber.modal.ThemeSelectStyle = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"16px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#333",new cljs.core.Keyword(null,"-webkitAppearance","-webkitAppearance",-1794369576),"none",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #fff"], null);
tabber.modal.SongSelectStyle = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"25px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"16px",new cljs.core.Keyword(null,"color","color",1011675173),"#fff",new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"20px",new cljs.core.Keyword(null,"background","background",-863952629),"#333",new cljs.core.Keyword(null,"-webkitAppearance","-webkitAppearance",-1794369576),"none",new cljs.core.Keyword(null,"border","border",1444987323),"1px solid #fff"], null);
tabber.modal.ModalStyle = (function tabber$modal$ModalStyle(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622)],[((cljs.core._EQ_.call(null,true,new cljs.core.Keyword(null,"showModal","showModal",-1664022078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?"translateX(0)":"translateX(420px)"),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),"all 0.3s ease","0","75px","400px",".90","1000","0","fixed",tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"menu","menu",352255198)),"100vh"]);
});
tabber.modal.ModalIcon = (function tabber$modal$ModalIcon(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalIconStyle.call(null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showModal","showModal",-1664022078)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"showModal","showModal",-1664022078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalIconHRStyle.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalIconHRStyle.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalIconHRStyle.call(null)], null)], null)], null);
});
tabber.modal.ThemeSelect = (function tabber$modal$ThemeSelect(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ThemeSelectStyle,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34165_SHARP_){
cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732)], null),p1__34165_SHARP_.target.value);

return tabber.colorThemes.ChangeBackgroundColor.call(null);
})], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"dark"], null),"Dark"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),"light"], null),"Light"], null)], null);
});
tabber.modal.SongTitles = (function tabber$modal$SongTitles(){
return cljs.core.map.call(null,(function (p1__34166_SHARP_){
return cljs.core.first.call(null,p1__34166_SHARP_);
}),tabber.songs.Songs);
});
tabber.modal.GrabSongByTitle = (function tabber$modal$GrabSongByTitle(title){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__34167_SHARP_){
return cljs.core._EQ_.call(null,title,cljs.core.first.call(null,p1__34167_SHARP_));
}),tabber.songs.Songs));
});
tabber.modal.SongSelect = (function tabber$modal$SongSelect(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.SongSelectStyle,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (p1__34168_SHARP_){
tabber.songViewer.FormatSong.call(null,tabber.modal.GrabSongByTitle.call(null,p1__34168_SHARP_.target.value));

cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),(0));

return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beat","beat",-817854366)], null),(0));
})], null),cljs.core.map.call(null,(function (p1__34169_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),p1__34169_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),p1__34169_SHARP_], null),p1__34169_SHARP_], null);
}),tabber.modal.SongTitles.call(null))], null);
});
tabber.modal.PageSelector = (function tabber$modal$PageSelector(page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"20px 50px",new cljs.core.Keyword(null,"textDecoration","textDecoration",418180221),"none",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"currentPage","currentPage",1444569088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),page))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f3","f3",1954829043)):tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"currentPage","currentPage",1444569088)], null),page);
})], null),page], null);
});
tabber.modal.Modal = (function tabber$modal$Modal(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalStyle.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Select Theme"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.ThemeSelect], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.PageSelector,"Chord Charts"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.PageSelector,"Song Player"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.SongSelect], null)], null);
});

//# sourceMappingURL=modal.js.map?rel=1500403420100