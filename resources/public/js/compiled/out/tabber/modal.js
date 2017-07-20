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
tabber.modal.ThemeSelectStyle = (function tabber$modal$ThemeSelectStyle(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"100px",new cljs.core.Keyword(null,"right","right",-452581833),"85px",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"16px",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)))].join('')], null);
});
tabber.modal.ThemeSelectItemStyle = (function tabber$modal$ThemeSelectItemStyle(item){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"margin","margin",-995903681),"10px 20px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,item,cljs.core.deref.call(null,tabber.state.colors)))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f3","f3",1954829043)):"")], null);
});
tabber.modal.SongSelectStyle = (function tabber$modal$SongSelectStyle(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tabber.state.currentPage),"Song Player"))?"visible":"hidden"),new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"16px",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),new cljs.core.Keyword(null,"padding","padding",1660304693),"10px 10px 30px",new cljs.core.Keyword(null,"marginLeft","marginLeft",-551287007),"85px",new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)))].join('')], null);
});
tabber.modal.SongSelectItemStyle = (function tabber$modal$SongSelectItemStyle(item){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"10px",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"pointer",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,item,cljs.core.deref.call(null,tabber.state.songTitle)))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f3","f3",1954829043)):"")], null);
});
tabber.modal.ModalStyle = (function tabber$modal$ModalStyle(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"paddingTop","paddingTop",-1088692345),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"zIndex","zIndex",-1588341609),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622)],[((cljs.core._EQ_.call(null,true,new cljs.core.Keyword(null,"showModal","showModal",-1664022078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?"translateX(0)":"translateX(420px)"),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),"all 0.3s ease","0","75px","400px",".95","1000","0","fixed",tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"menu","menu",352255198)),"100vh"]);
});
tabber.modal.ModalIcon = (function tabber$modal$ModalIcon(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalIconStyle.call(null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"showModal","showModal",-1664022078)], null),cljs.core.not.call(null,new cljs.core.Keyword(null,"showModal","showModal",-1664022078).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))));
})], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalIconHRStyle.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalIconHRStyle.call(null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalIconHRStyle.call(null)], null)], null)], null);
});
tabber.modal.SelectNewTheme = (function tabber$modal$SelectNewTheme(theme){
cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732)], null),theme);

return tabber.colorThemes.ChangeBackgroundColor.call(null);
});
tabber.modal.ThemeSelect = (function tabber$modal$ThemeSelect(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ThemeSelectStyle.call(null)], null),cljs.core.map.call(null,(function (p1__91661_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"span","span",1394872991),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ThemeSelectItemStyle.call(null,p1__91661_SHARP_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__91661_SHARP___$1){
return tabber.modal.SelectNewTheme.call(null,p1__91661_SHARP___$1.target.innerHTML);
})], null),p1__91661_SHARP_], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Dark","Light"], null))], null);
});
tabber.modal.SongTitles = (function tabber$modal$SongTitles(){
return cljs.core.map.call(null,(function (p1__91662_SHARP_){
return cljs.core.first.call(null,p1__91662_SHARP_);
}),tabber.songs.Songs);
});
tabber.modal.GrabSongByTitle = (function tabber$modal$GrabSongByTitle(title){
return cljs.core.first.call(null,cljs.core.filter.call(null,(function (p1__91663_SHARP_){
return cljs.core._EQ_.call(null,title,cljs.core.first.call(null,p1__91663_SHARP_));
}),tabber.songs.Songs));
});
tabber.modal.SelectNewSong = (function tabber$modal$SelectNewSong(title){
tabber.songViewer.FormatSong.call(null,tabber.modal.GrabSongByTitle.call(null,title));

cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),(0));

return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"songPlaying","songPlaying",-628116027)], null),false);
});
tabber.modal.SongSelect = (function tabber$modal$SongSelect(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.SongSelectStyle.call(null)], null),cljs.core.map.call(null,(function (p1__91664_SHARP_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),p1__91664_SHARP_,new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.SongSelectItemStyle.call(null,p1__91664_SHARP_),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (p1__91664_SHARP___$1){
return tabber.modal.SelectNewSong.call(null,p1__91664_SHARP___$1.target.innerHTML);
})], null),p1__91664_SHARP_], null);
}),tabber.modal.SongTitles.call(null))], null);
});
tabber.modal.PageSelector = (function tabber$modal$PageSelector(page){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"margin","margin",-995903681),"0 0 10px",new cljs.core.Keyword(null,"textDecoration","textDecoration",418180221),"none",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"22px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"currentPage","currentPage",1444569088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),page))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f3","f3",1954829043)):tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)))], null),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"currentPage","currentPage",1444569088)], null),page);
})], null),page], null);
});
tabber.modal.Modal = (function tabber$modal$Modal(){

return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.modal.ModalStyle.call(null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.ThemeSelect], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.PageSelector,"Chord Charts"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.PageSelector,"Song Player"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.SongSelect], null)], null);
});

//# sourceMappingURL=modal.js.map?rel=1500526711409