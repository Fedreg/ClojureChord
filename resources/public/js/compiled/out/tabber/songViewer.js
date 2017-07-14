// Compiled by ClojureScript 1.9.229 {}
goog.provide('tabber.songViewer');
goog.require('cljs.core');
goog.require('tabber.state');
goog.require('tabber.colorThemes');
goog.require('tabber.chordChart');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
tabber.songViewer.BeatCounterStyle = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"25px",new cljs.core.Keyword(null,"left","left",-399115937),"calc(50% - 150px)",new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"80px"], null);
tabber.songViewer.CurrentChordStyle = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(1.5)",new cljs.core.Keyword(null,"willChange","willChange",1140317432),"transform",new cljs.core.Keyword(null,"width","width",-384071477),"1vw",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"200px",new cljs.core.Keyword(null,"left","left",-399115937),"calc(50% - 250px)"], null);
tabber.songViewer.GetReadyStyle = (function tabber$songViewer$GetReadyStyle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"margin","margin",-995903681),"70px 0 0 70px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"30px",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444))], null);
});
tabber.songViewer.OnDeckChordStyle = (function tabber$songViewer$OnDeckChordStyle(upper){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.9)",new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),upper,new cljs.core.Keyword(null,"right","right",-452581833),"20px"], null);
});
tabber.songViewer.ChordPreviewListStyle = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"-150px",new cljs.core.Keyword(null,"left","left",-399115937),"-60px",new cljs.core.Keyword(null,"transform","transform",1381301764),"scale(0.5)",new cljs.core.Keyword(null,"height","height",1025178622),"1000px",new cljs.core.Keyword(null,"padding","padding",1660304693),"10px",new cljs.core.Keyword(null,"overflow","overflow",2058931880),"scroll"], null);
tabber.songViewer.SongTitleStyle = (function tabber$songViewer$SongTitleStyle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),new cljs.core.Keyword(null,"position","position",-2011731912),"fixed",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),"50px"], null);
});
tabber.songViewer.StartButtonStyle = (function tabber$songViewer$StartButtonStyle(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622)],[tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),"25px","100px","none","50px","fixed","24px","1px solid #777","40px"]);
});
tabber.songViewer.TempoButtonStyle = (function tabber$songViewer$TempoButtonStyle(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"background","background",-863952629),"none",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"-10px",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"30px"], null);
});
tabber.songViewer.TempoDisplayStyle = (function tabber$songViewer$TempoDisplayStyle(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"left","left",-399115937)],[tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)),"20px","200px","space-between","flex","fixed","30px","50px","calc(50% - 100px)"]);
});
tabber.songViewer.FormatSong = (function tabber$songViewer$FormatSong(songInfo){
cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"songTitle","songTitle",518417240)], null),cljs.core.first.call(null,cljs.core.first.call(null,songInfo)));

cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null),cljs.core.second.call(null,cljs.core.first.call(null,songInfo)));

return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"song","song",-62793121)], null),cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["X","X","4"], null),cljs.core.map.call(null,(function (p1__55434_SHARP_){
return clojure.string.split.call(null,p1__55434_SHARP_,/\//);
}),cljs.core.filter.call(null,(function (p1__55433_SHARP_){
return !(clojure.string.blank_QMARK_.call(null,p1__55433_SHARP_));
}),cljs.core.mapcat.call(null,(function (p1__55432_SHARP_){
return clojure.string.split.call(null,p1__55432_SHARP_,/ /);
}),cljs.core.drop.call(null,(2),cljs.core.first.call(null,songInfo)))))));
});
tabber.songViewer.Tempo = (function tabber$songViewer$Tempo(){
return ((1000) * ((60) / cljs.core.deref.call(null,tabber.state.tempo)));
});
tabber.songViewer.StartBeatCounter = (function tabber$songViewer$StartBeatCounter(){
var numberOfBeats = (parseInt(cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,tabber.state.song),cljs.core.deref.call(null,tabber.state.index)))) + (1));
if((cljs.core.deref.call(null,tabber.state.beat) < numberOfBeats)){
return setTimeout(((function (numberOfBeats){
return (function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beat","beat",-817854366)], null),cljs.core.inc).call(null,tabber$songViewer$StartBeatCounter.call(null));
});})(numberOfBeats))
,tabber.songViewer.Tempo.call(null));
} else {
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"beat","beat",-817854366)], null),(1)).call(null,cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),cljs.core.inc),tabber$songViewer$StartBeatCounter.call(null));
}
});
tabber.songViewer.BeatCounter = (function tabber$songViewer$BeatCounter(){
cljs.core.deref.call(null,tabber.state.beat);

var range = cljs.core.range.call(null,(1),(parseInt(cljs.core.last.call(null,cljs.core.nth.call(null,cljs.core.deref.call(null,tabber.state.song),cljs.core.deref.call(null,tabber.state.index)))) + (1)));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.BeatCounterStyle], null),cljs.core.map.call(null,((function (range){
return (function (e){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"paddingLeft","paddingLeft",262720813),"20px",new cljs.core.Keyword(null,"color","color",1011675173),((cljs.core._EQ_.call(null,e,cljs.core.deref.call(null,tabber.state.beat)))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f1","f1",1714532389)):tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)))], null)], null),e], null);
});})(range))
,range)], null);
});
tabber.songViewer.SongChordFilter = (function tabber$songViewer$SongChordFilter(collection,thisSong,thisIndex){
var key = cljs.core.first.call(null,cljs.core.nth.call(null,thisSong,thisIndex));
var quality = cljs.core.second.call(null,cljs.core.nth.call(null,thisSong,thisIndex));
return cljs.core.filter.call(null,((function (key,quality){
return (function (p1__55435_SHARP_){
return (cljs.core._EQ_.call(null,key,cljs.core.first.call(null,p1__55435_SHARP_))) && (cljs.core._EQ_.call(null,quality,cljs.core.second.call(null,p1__55435_SHARP_)));
});})(key,quality))
,collection);
});
tabber.songViewer.ChordPreviewList = (function tabber$songViewer$ChordPreviewList(){
var songChords = cljs.core.into.call(null,cljs.core.PersistentHashSet.EMPTY,cljs.core.distinct.call(null,cljs.core.map.call(null,(function (p1__55436_SHARP_){
return cljs.core.take.call(null,(2),p1__55436_SHARP_);
}),cljs.core.drop.call(null,(2),cljs.core.deref.call(null,tabber.state.song)))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.ChordPreviewListStyle], null),cljs.core.map.call(null,tabber.chordChart.ChordChart,cljs.core.filter.call(null,((function (songChords){
return (function (p1__55437_SHARP_){
return cljs.core.contains_QMARK_.call(null,songChords,cljs.core.take.call(null,(2),p1__55437_SHARP_));
});})(songChords))
,cljs.core.deref.call(null,tabber.state.chords)))], null);
});
tabber.songViewer.CurrentChord = (function tabber$songViewer$CurrentChord(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.CurrentChordStyle], null),((cljs.core._EQ_.call(null,(0),cljs.core.deref.call(null,tabber.state.index)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.GetReadyStyle.call(null)], null),"Get Ready!"], null):cljs.core.map.call(null,tabber.chordChart.ChordChart,tabber.songViewer.SongChordFilter.call(null,cljs.core.deref.call(null,tabber.state.chords),cljs.core.deref.call(null,tabber.state.song),cljs.core.deref.call(null,tabber.state.index))))], null);
});
tabber.songViewer.OnDeckChord = (function tabber$songViewer$OnDeckChord(num,upper){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.OnDeckChordStyle.call(null,upper)], null),((((num + cljs.core.deref.call(null,tabber.state.index)) < cljs.core.count.call(null,cljs.core.deref.call(null,tabber.state.song))))?cljs.core.map.call(null,tabber.chordChart.ChordChart,tabber.songViewer.SongChordFilter.call(null,cljs.core.deref.call(null,tabber.state.chords),cljs.core.deref.call(null,tabber.state.song),(num + cljs.core.deref.call(null,tabber.state.index)))):"")], null);
});
tabber.songViewer.SongTitle = (function tabber$songViewer$SongTitle(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1","h1",-1896887462),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.SongTitleStyle.call(null)], null),cljs.core.deref.call(null,tabber.state.songTitle)], null);
});
tabber.songViewer.StartButton = (function tabber$songViewer$StartButton(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915)], null),(0));

return tabber.songViewer.StartBeatCounter.call(null);
}),new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.StartButtonStyle.call(null)], null),"START"], null);
});
tabber.songViewer.TempoButton = (function tabber$songViewer$TempoButton(operator){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onClick","onClick",-1991238530),(function (){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tempo","tempo",-1555208453)], null),operator,(5));
}),new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.TempoButtonStyle.call(null)], null),((cljs.core._EQ_.call(null,operator,cljs.core._PLUS_))?"+":"-")], null);
});
tabber.songViewer.TempoDisplay = (function tabber$songViewer$TempoDisplay(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.songViewer.TempoDisplayStyle.call(null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.TempoButton,cljs.core._], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"BPM: ",cljs.core.deref.call(null,tabber.state.tempo)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.TempoButton,cljs.core._PLUS_], null)], null);
});
tabber.songViewer.SongPage = (function tabber$songViewer$SongPage(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.SongTitle], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.TempoDisplay], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.CurrentChord], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.OnDeckChord,(1),"100px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.OnDeckChord,(2),"300px"], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.BeatCounter], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.ChordPreviewList], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.songViewer.StartButton], null)], null);
});

//# sourceMappingURL=songViewer.js.map?rel=1500065493987