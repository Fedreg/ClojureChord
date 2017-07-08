// Compiled by ClojureScript 1.9.229 {}
goog.provide('tabber.core');
goog.require('cljs.core');
goog.require('tabber.chords');
goog.require('reagent.core');
goog.require('tabber.colorThemes');
goog.require('tabber.state');
goog.require('tabber.modal');
goog.require('clojure.string');
cljs.core.enable_console_print_BANG_.call(null);
tabber.core.ChangeBackgroundColor = (function tabber$core$ChangeBackgroundColor(){
return document.body.style.backgroundColor = tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"bcgrnd","bcgrnd",1237045166));
});
tabber.core.fretX = (function tabber$core$fretX(string){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e6","e6",810914252),string)){
return "-10px";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"a","a",-2123407586),string)){
return "20px";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"d","d",1972142424),string)){
return "50px";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"g","g",1738089905),string)){
return "80px";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"b","b",1482224470),string)){
return "110px";
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"e","e",1381269198),string)){
return "140px";
} else {
return "0";

}
}
}
}
}
}
});
tabber.core.fretY = (function tabber$core$fretY(fret){
if(cljs.core._EQ_.call(null,"0",fret)){
return "-30px";
} else {
if(cljs.core._EQ_.call(null,"1",fret)){
return "15px";
} else {
if(cljs.core._EQ_.call(null,"2",fret)){
return "65px";
} else {
if(cljs.core._EQ_.call(null,"3",fret)){
return "115px";
} else {
if(cljs.core._EQ_.call(null,"4",fret)){
return "165px";
} else {
return "-30px";

}
}
}
}
}
});
tabber.core.fingerColor = (function tabber$core$fingerColor(finger){
tabber.core.ChangeBackgroundColor.call(null);

if(cljs.core._EQ_.call(null,"1",finger)){
return tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f1","f1",1714532389));
} else {
if(cljs.core._EQ_.call(null,"2",finger)){
return tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f2","f2",396168596));
} else {
if(cljs.core._EQ_.call(null,"3",finger)){
return tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f3","f3",1954829043));
} else {
if(cljs.core._EQ_.call(null,"4",finger)){
return tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f4","f4",990968764));
} else {
return tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"fx","fx",-1237829572));

}
}
}
}
});
tabber.core.FretFingerMarker = (function tabber$core$FretFingerMarker(string,notes){
var vec__62870 = [cljs.core.str(notes),cljs.core.str((0))].join('');
var fret = cljs.core.nth.call(null,vec__62870,(0),null);
var finger = cljs.core.nth.call(null,vec__62870,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"boxShadow","boxShadow",-1591689862),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622)],["10px","all 0.3s ease",tabber.core.fretX.call(null,string),"20px","center",tabber.core.fretY.call(null,fret),"absolute","14px","5px 5px 10px rgba(0,0,0,0.3)",tabber.core.fingerColor.call(null,finger),"20px"])], null),finger], null);
});
tabber.core.HorizontalStrings = (function tabber$core$HorizontalStrings(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#333",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"30px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#333",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"28px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#333",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"28px"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#333",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"28px"], null)], null)], null)], null);
});
tabber.core.VerticalFretLine = (function tabber$core$VerticalFretLine(Yoffset){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),Yoffset,new cljs.core.Keyword(null,"height","height",1025178622),"150px",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),"1px solid #333"], null)], null)], null);
});
tabber.core.Nut = (function tabber$core$Nut(){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"-1px",new cljs.core.Keyword(null,"right","right",-452581833),"-5px",new cljs.core.Keyword(null,"width","width",-384071477),"5px",new cljs.core.Keyword(null,"height","height",1025178622),"152px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222))], null)], null)], null);
});
tabber.core.ChordChart = (function tabber$core$ChordChart(chord){
var vec__62876 = chord;
var chordName = cljs.core.nth.call(null,vec__62876,(0),null);
var quality = cljs.core.nth.call(null,vec__62876,(1),null);
var e6 = cljs.core.nth.call(null,vec__62876,(2),null);
var a = cljs.core.nth.call(null,vec__62876,(3),null);
var d = cljs.core.nth.call(null,vec__62876,(4),null);
var g = cljs.core.nth.call(null,vec__62876,(5),null);
var b = cljs.core.nth.call(null,vec__62876,(6),null);
var e = cljs.core.nth.call(null,vec__62876,(7),null);
var bar = cljs.core.nth.call(null,vec__62876,(8),null);
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"150px",new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str("1px solid "),cljs.core.str(tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)))].join(''),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"chart","chart",1173225425)),new cljs.core.Keyword(null,"margin","margin",-995903681),"50px"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"-50px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"30px",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444))], null)], null),[cljs.core.str(chordName),cljs.core.str(quality)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.HorizontalStrings], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.Nut], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.VerticalFretLine,"50px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.VerticalFretLine,"100px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.VerticalFretLine,"150px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.FretFingerMarker,new cljs.core.Keyword(null,"e6","e6",810914252),e6], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.FretFingerMarker,new cljs.core.Keyword(null,"a","a",-2123407586),a], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.FretFingerMarker,new cljs.core.Keyword(null,"d","d",1972142424),d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.FretFingerMarker,new cljs.core.Keyword(null,"g","g",1738089905),g], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.FretFingerMarker,new cljs.core.Keyword(null,"b","b",1482224470),b], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.FretFingerMarker,new cljs.core.Keyword(null,"e","e",1381269198),e], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-35px",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"15px"], null)], null),((!(cljs.core._EQ_.call(null,null,bar)))?[cljs.core.str("bar "),cljs.core.str(bar)].join(''):"")], null)], null);
});
tabber.core.KeyButton = (function tabber$core$KeyButton(key){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),"40px","pointer","5px","20px","1px solid #555",((cljs.core._EQ_.call(null,key,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f1","f1",1714532389)):"rgba(0,0,0,0)"),"35px","5px 10px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),key);
})], null),key], null);
});
tabber.core.QualityButton = (function tabber$core$QualityButton(quality){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)),"30px","pointer","5px","14px","1px solid #555",((cljs.core._EQ_.call(null,quality,new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f1","f1",1714532389)):"rgba(0,0,0,0)"),"25px","5px 10px"]),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quality","quality",147850199)], null),quality);
})], null),quality], null);
});
tabber.core.keyList = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","A","Ab","B","Bb","C","C#","D","Db","E","Eb","F","F#","G","G#"], null);
tabber.core.qualityList = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","M","m","6","7","M7","m7"], null);
tabber.core.KeyFilter = (function tabber$core$KeyFilter(collection){
var key = new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
var quality = new cljs.core.Keyword(null,"quality","quality",147850199).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state));
if((cljs.core._EQ_.call(null,key,"All")) && (cljs.core._EQ_.call(null,quality,"All"))){
return collection;
} else {
if(cljs.core._EQ_.call(null,key,"All")){
return cljs.core.filter.call(null,((function (key,quality){
return (function (p1__62879_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__62879_SHARP_),quality);
});})(key,quality))
,collection);
} else {
if(cljs.core._EQ_.call(null,quality,"All")){
return cljs.core.filter.call(null,((function (key,quality){
return (function (p1__62880_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__62880_SHARP_),key);
});})(key,quality))
,collection);
} else {
return cljs.core.filter.call(null,((function (key,quality){
return (function (p1__62881_SHARP_){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__62881_SHARP_),key)) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__62881_SHARP_),quality));
});})(key,quality))
,collection);

}
}
}
});
tabber.core.Chords = (function tabber$core$Chords(){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"100px",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.ModalIcon], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.Modal], null),cljs.core.map.call(null,tabber.core.KeyButton,tabber.core.keyList),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,tabber.core.QualityButton,tabber.core.qualityList)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),"wrap",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"50px"], null)], null),cljs.core.map.call(null,tabber.core.ChordChart,tabber.core.KeyFilter.call(null,new cljs.core.Keyword(null,"chords","chords",234981817).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))], null)], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.Chords], null),document.getElementById("app"));
tabber.core.on_js_reload = (function tabber$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1499548840941