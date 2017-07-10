// Compiled by ClojureScript 1.9.229 {}
goog.provide('tabber.songViewer');
goog.require('cljs.core');
goog.require('tabber.state');
goog.require('tabber.colorThemes');
goog.require('tabber.chordChart');
cljs.core.enable_console_print_BANG_.call(null);
tabber.songViewer.Tempo = (function tabber$songViewer$Tempo(){
return ((1000) * ((60) / new cljs.core.Keyword(null,"tempo","tempo",-1555208453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))));
});
cljs.core.print.call(null,tabber.songViewer.Tempo.call(null));
tabber.songViewer.StartBeatCounter = (function tabber$songViewer$StartBeatCounter(){
var song = new cljs.core.Keyword(null,"song","song",-62793121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
var beat = new cljs.core.Keyword(null,"beat","beat",-817854366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
var index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
var numberOfBeats = cljs.core.last.call(null,cljs.core.nth.call(null,song,index));
if((beat <= numberOfBeats)){
return setTimeout(((function (song,beat,index,numberOfBeats){
return (function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beat","beat",-817854366)], null),cljs.core.inc).call(null,tabber$songViewer$StartBeatCounter.call(null));
});})(song,beat,index,numberOfBeats))
,tabber.songViewer.Tempo.call(null));
} else {
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beat","beat",-817854366)], null),(1));
}
});
tabber.songViewer.StartSong = (function tabber$songViewer$StartSong(){
var song = new cljs.core.Keyword(null,"song","song",-62793121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
var index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
if((index < cljs.core.count.call(null,song))){
return setTimeout(((function (song,index){
return (function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core.inc).call(null,tabber$songViewer$StartSong.call(null),tabber.songViewer.StartBeatCounter.call(null));
});})(song,index))
,(tabber.songViewer.Tempo.call(null) * cljs.core.last.call(null,cljs.core.nth.call(null,song,index))));
} else {
return null;
}
});
tabber.songViewer.BeatCounter = (function tabber$songViewer$BeatCounter(){
var beat = new cljs.core.Keyword(null,"beat","beat",-817854366).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
var index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
var song = new cljs.core.Keyword(null,"song","song",-62793121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
var range = cljs.core.range.call(null,(1),(cljs.core.last.call(null,cljs.core.nth.call(null,song,index)) + (1)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"25px",new cljs.core.Keyword(null,"left","left",-399115937),"25px",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"80px"], null)], null),cljs.core.map.call(null,((function (beat,index,song,range){
return (function (e){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"20px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,e,beat))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f1","f1",1714532389)):tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)))], null)], null),e], null);
});})(beat,index,song,range))
,range)], null);
});
tabber.songViewer.SongChordFilter = (function tabber$songViewer$SongChordFilter(collection,song,index){
var key = cljs.core.first.call(null,cljs.core.nth.call(null,song,index));
var quality = cljs.core.second.call(null,cljs.core.nth.call(null,song,index));
return cljs.core.filter.call(null,((function (key,quality){
return (function (p1__34192_SHARP_){
return (cljs.core._EQ_.call(null,key,cljs.core.first.call(null,p1__34192_SHARP_))) && (cljs.core._EQ_.call(null,quality,cljs.core.second.call(null,p1__34192_SHARP_)));
});})(key,quality))
,collection);
});
tabber.songViewer.CurrentChord = (function tabber$songViewer$CurrentChord(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1.5)",new cljs.core.Keyword(null,"width","width",-384071477),"1vw",new cljs.core.Keyword(null,"margin","margin",-995903681),"250px 0 0 20%"], null)], null),cljs.core.map.call(null,tabber.chordChart.ChordChart,tabber.songViewer.SongChordFilter.call(null,new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),new cljs.core.Keyword(null,"song","song",-62793121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))], null);
});
tabber.songViewer.OnDeckChord = (function tabber$songViewer$OnDeckChord(num,upper){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.9)",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),upper,new cljs.core.Keyword(null,"right","right",-452581833),"10%"], null)], null),((((num + new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))) < cljs.core.count.call(null,new cljs.core.Keyword(null,"song","song",-62793121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)))))?cljs.core.map.call(null,tabber.chordChart.ChordChart,tabber.songViewer.SongChordFilter.call(null,new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),new cljs.core.Keyword(null,"song","song",-62793121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),(num + new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))):"")], null);
});
tabber.songViewer.SongTitle = (function tabber$songViewer$SongTitle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"50px"], null)], null),cljs.core.nth.call(null,new cljs.core.Keyword(null,"song","song",-62793121).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state)),(0))], null);
});
tabber.songViewer.StartButton = (function tabber$songViewer$StartButton(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),(1));

tabber.songViewer.StartSong.call(null);

return tabber.songViewer.StartBeatCounter.call(null);
}),new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),"25px","100px","none","fixed","24px","1px solid #777","40px","calc(50% - 50px)"])], null),"START"], null);
});
tabber.songViewer.TempoButton = (function tabber$songViewer$TempoButton(operator){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null),operator,(5));
}),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"-10px",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"30px"], null)], null),((cljs.core._EQ_.call(null,operator,cljs.core._PLUS_))?"+":"-")], null);
});
tabber.songViewer.TempoDisplay = (function tabber$songViewer$TempoDisplay(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)),"20px","200px","space-between","flex","fixed","30px","50px","calc(50% - 100px)"])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.TempoButton,cljs.core._], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BPM: ",new cljs.core.Keyword(null,"tempo","tempo",-1555208453).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.TempoButton,cljs.core._PLUS_], null)], null);
});
tabber.songViewer.SongPage = (function tabber$songViewer$SongPage(){
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.SongTitle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.TempoDisplay], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.CurrentChord], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.OnDeckChord,(1),"100px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.OnDeckChord,(2),"300px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.BeatCounter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.StartButton], null)], null);
});

//# sourceMappingURL=songViewer.js.map?rel=1499706251667