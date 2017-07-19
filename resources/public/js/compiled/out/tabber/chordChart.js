// Compiled by ClojureScript 1.9.671 {}
goog.provide('tabber.chordChart');
goog.require('cljs.core');
goog.require('tabber.state');
goog.require('cljs.spec.alpha');
goog.require('tabber.colorThemes');
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("tabber.chordChart","chordName","tabber.chordChart/chordName",1269231719),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("tabber.chordChart","quality","tabber.chordChart/quality",-555928243),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null),cljs.core.string_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("tabber.chordChart","bar","tabber.chordChart/bar",1936359102),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword("tabber.chordChart","fret","tabber.chordChart/fret",-1971629590),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword("tabber.chordChart","empty","tabber.chordChart/empty",2146317176),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tabber.chordChart","fret","tabber.chordChart/fret",-1971629590),new cljs.core.Keyword("tabber.chordChart","empty","tabber.chordChart/empty",2146317176)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Symbol("cljs.core","nil?","cljs.core/nil?",945071861,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,cljs.core.nil_QMARK_], null),null));
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("tabber.chordChart","string","tabber.chordChart/string",1667567420),new cljs.core.Symbol("cljs.core","keyword?","cljs.core/keyword?",713156450,null),cljs.core.keyword_QMARK_);
cljs.spec.alpha.def_impl.call(null,new cljs.core.Keyword("tabber.chordChart","note","tabber.chordChart/note",1861281338),cljs.core.list(new cljs.core.Symbol("cljs.spec.alpha","or","cljs.spec.alpha/or",-831679639,null),new cljs.core.Keyword("tabber.chordChart","fret","tabber.chordChart/fret",-1971629590),new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Keyword("tabber.chordChart","empty","tabber.chordChart/empty",2146317176),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)),cljs.spec.alpha.or_spec_impl.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tabber.chordChart","fret","tabber.chordChart/fret",-1971629590),new cljs.core.Keyword("tabber.chordChart","empty","tabber.chordChart/empty",2146317176)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol("cljs.core","int?","cljs.core/int?",50730120,null),new cljs.core.Symbol("cljs.core","string?","cljs.core/string?",-2072921719,null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.int_QMARK_,cljs.core.string_QMARK_], null),null));
tabber.chordChart.FretFingerMarkerStyle = (function tabber$chordChart$FretFingerMarkerStyle(string,fret,finger){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"borderRadius","borderRadius",-1505621083),new cljs.core.Keyword(null,"transition","transition",765692007),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"boxShadow","boxShadow",-1591689862),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622)],["10px","all 0.3s ease",tabber.chordChart.fretX.call(null,string),"20px","center",tabber.chordChart.fretY.call(null,fret),"absolute","14px","5px 5px 10px rgba(0,0,0,0.3)",tabber.chordChart.fingerColor.call(null,finger),"20px"]);
});
tabber.chordChart.HorizontalStringsStyle = (function tabber$chordChart$HorizontalStringsStyle(upper){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),"#333",new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),upper], null);
});
tabber.chordChart.VerticalFretlineStyle = (function tabber$chordChart$VerticalFretlineStyle(Yoffset){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"0",new cljs.core.Keyword(null,"left","left",-399115937),Yoffset,new cljs.core.Keyword(null,"height","height",1025178622),"150px",new cljs.core.Keyword(null,"width","width",-384071477),"50px",new cljs.core.Keyword(null,"borderLeft","borderLeft",-1938358443),"1px solid #333"], null);
});
tabber.chordChart.NutStyle = (function tabber$chordChart$NutStyle(){
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"-1px",new cljs.core.Keyword(null,"right","right",-452581833),"-5px",new cljs.core.Keyword(null,"width","width",-384071477),"5px",new cljs.core.Keyword(null,"height","height",1025178622),"152px",new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222))], null);
});
tabber.chordChart.ChordChartStyle = (function tabber$chordChart$ChordChartStyle(){
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative",new cljs.core.Keyword(null,"width","width",-384071477),"200px",new cljs.core.Keyword(null,"minWidth","minWidth",-204293526),"200px",new cljs.core.Keyword(null,"height","height",1025178622),"150px",new cljs.core.Keyword(null,"border","border",1444987323),[cljs.core.str.cljs$core$IFn$_invoke$arity$1("1px solid "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)))].join(''),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"chart","chart",1173225425)),new cljs.core.Keyword(null,"margin","margin",-995903681),"50px"], null);
});
tabber.chordChart.ChordChartNameStyle = (function tabber$chordChart$ChordChartNameStyle(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"top","top",-1856271961),"-50px",new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"30px",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444))], null);
});
tabber.chordChart.ChordChartBarStyle = (function tabber$chordChart$ChordChartBarStyle(){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"bottom","bottom",-1550509018),"-35px",new cljs.core.Keyword(null,"right","right",-452581833),"0",new cljs.core.Keyword(null,"color","color",1011675173),tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222)),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),"15px"], null);
});
tabber.chordChart.KeyButtonStyle = (function tabber$chordChart$KeyButtonStyle(key){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[((cljs.core._EQ_.call(null,key,cljs.core.deref.call(null,tabber.state.musKey)))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)):tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222))),"40px","pointer","5px","20px","1px solid #555",((cljs.core._EQ_.call(null,key,cljs.core.deref.call(null,tabber.state.musKey)))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f1","f1",1714532389)):"rgba(0,0,0,0)"),"35px","5px"]);
});
tabber.chordChart.QualityButtonStyle = (function tabber$chordChart$QualityButtonStyle(quality){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"padding","padding",1660304693),new cljs.core.Keyword(null,"fontSize","fontSize",919623033),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"backgroundColor","backgroundColor",1738438491),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"margin","margin",-995903681)],[((cljs.core._EQ_.call(null,quality,cljs.core.deref.call(null,tabber.state.quality)))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t1","t1",24972444)):tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"t2","t2",-748855222))),"30px","pointer","5px","14px","1px solid #555",((cljs.core._EQ_.call(null,quality,cljs.core.deref.call(null,tabber.state.quality)))?tabber.colorThemes.ReturnColors.call(null,new cljs.core.Keyword(null,"f1","f1",1714532389)):"rgba(0,0,0,0)"),"30px","5px"]);
});
tabber.chordChart.fretX = (function tabber$chordChart$fretX(string){

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
tabber.chordChart.fretY = (function tabber$chordChart$fretY(fret){

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
tabber.chordChart.fingerColor = (function tabber$chordChart$fingerColor(finger){

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
tabber.chordChart.FretFingerMarker = (function tabber$chordChart$FretFingerMarker(string,notes){

if(cljs.core.truth_((function (){var and__28557__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","string","tabber.chordChart/string",1667567420),string);
if(cljs.core.truth_(and__28557__auto__)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","note","tabber.chordChart/note",1861281338),notes);
} else {
return and__28557__auto__;
}
})())){
var vec__31617 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(notes),cljs.core.str.cljs$core$IFn$_invoke$arity$1((0))].join('');
var fret = cljs.core.nth.call(null,vec__31617,(0),null);
var finger = cljs.core.nth.call(null,vec__31617,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.FretFingerMarkerStyle.call(null,string,fret,finger)], null),finger], null);
} else {
return null;
}
});
tabber.chordChart.HorizontalStrings = (function tabber$chordChart$HorizontalStrings(){

return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.HorizontalStringsStyle.call(null,"30px")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.HorizontalStringsStyle.call(null,"28px")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.HorizontalStringsStyle.call(null,"28px")], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hr","hr",1377740067),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.HorizontalStringsStyle.call(null,"28px")], null)], null)], null);
});
tabber.chordChart.VerticalFretLine = (function tabber$chordChart$VerticalFretLine(Yoffset){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.VerticalFretlineStyle.call(null,Yoffset)], null)], null);
});
tabber.chordChart.Nut = (function tabber$chordChart$Nut(){

return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.NutStyle.call(null)], null)], null);
});
tabber.chordChart.ChordChart = (function tabber$chordChart$ChordChart(chord){

var vec__31620 = chord;
var chordName = cljs.core.nth.call(null,vec__31620,(0),null);
var quality = cljs.core.nth.call(null,vec__31620,(1),null);
var e6 = cljs.core.nth.call(null,vec__31620,(2),null);
var a = cljs.core.nth.call(null,vec__31620,(3),null);
var d = cljs.core.nth.call(null,vec__31620,(4),null);
var g = cljs.core.nth.call(null,vec__31620,(5),null);
var b = cljs.core.nth.call(null,vec__31620,(6),null);
var e = cljs.core.nth.call(null,vec__31620,(7),null);
var bar = cljs.core.nth.call(null,vec__31620,(8),null);
if(cljs.core.truth_((function (){var and__28557__auto__ = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","chordName","tabber.chordChart/chordName",1269231719),chordName);
if(cljs.core.truth_(and__28557__auto__)){
var and__28557__auto____$1 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","quality","tabber.chordChart/quality",-555928243),quality);
if(cljs.core.truth_(and__28557__auto____$1)){
var and__28557__auto____$2 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","note","tabber.chordChart/note",1861281338),e6);
if(cljs.core.truth_(and__28557__auto____$2)){
var and__28557__auto____$3 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","note","tabber.chordChart/note",1861281338),a);
if(cljs.core.truth_(and__28557__auto____$3)){
var and__28557__auto____$4 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","note","tabber.chordChart/note",1861281338),d);
if(cljs.core.truth_(and__28557__auto____$4)){
var and__28557__auto____$5 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","note","tabber.chordChart/note",1861281338),g);
if(cljs.core.truth_(and__28557__auto____$5)){
var and__28557__auto____$6 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","note","tabber.chordChart/note",1861281338),b);
if(cljs.core.truth_(and__28557__auto____$6)){
var and__28557__auto____$7 = cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","note","tabber.chordChart/note",1861281338),e);
if(cljs.core.truth_(and__28557__auto____$7)){
return cljs.spec.alpha.valid_QMARK_.call(null,new cljs.core.Keyword("tabber.chordChart","bar","tabber.chordChart/bar",1936359102),bar);
} else {
return and__28557__auto____$7;
}
} else {
return and__28557__auto____$6;
}
} else {
return and__28557__auto____$5;
}
} else {
return and__28557__auto____$4;
}
} else {
return and__28557__auto____$3;
}
} else {
return and__28557__auto____$2;
}
} else {
return and__28557__auto____$1;
}
} else {
return and__28557__auto__;
}
})())){
return new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.ChordChartStyle.call(null),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.rand_int.call(null,(1000))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.ChordChartNameStyle.call(null)], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(chordName),cljs.core.str.cljs$core$IFn$_invoke$arity$1(quality)].join('')], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.HorizontalStrings], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.Nut], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.VerticalFretLine,"50px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.VerticalFretLine,"100px"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.VerticalFretLine,"150px"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.FretFingerMarker,new cljs.core.Keyword(null,"e6","e6",810914252),e6], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.FretFingerMarker,new cljs.core.Keyword(null,"a","a",-2123407586),a], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.FretFingerMarker,new cljs.core.Keyword(null,"d","d",1972142424),d], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.FretFingerMarker,new cljs.core.Keyword(null,"g","g",1738089905),g], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.FretFingerMarker,new cljs.core.Keyword(null,"b","b",1482224470),b], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.chordChart.FretFingerMarker,new cljs.core.Keyword(null,"e","e",1381269198),e], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.ChordChartBarStyle.call(null)], null),((!(cljs.core._EQ_.call(null,null,bar)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1("bar "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(bar)].join(''):"")], null)], null);
} else {
return null;
}
});
tabber.chordChart.KeyButton = (function tabber$chordChart$KeyButton(key){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.KeyButtonStyle.call(null,key),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587)], null),key);
})], null),key], null);
});
tabber.chordChart.QualityButton = (function tabber$chordChart$QualityButton(quality){

return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"style","style",-496642736),tabber.chordChart.QualityButtonStyle.call(null,quality),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (e){
return cljs.core.swap_BANG_.call(null,tabber.state.app_state,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"quality","quality",147850199)], null),quality);
})], null),quality], null);
});
tabber.chordChart.keyList = new cljs.core.PersistentVector(null, 15, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","A","Ab","B","Bb","C","C#","D","Db","E","Eb","F","F#","G","G#"], null);
tabber.chordChart.qualityList = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, ["All","M","m","6","7","M7","m7"], null);
tabber.chordChart.KeyFilter = (function tabber$chordChart$KeyFilter(collection){

if((cljs.core._EQ_.call(null,cljs.core.deref.call(null,tabber.state.musKey),"All")) && (cljs.core._EQ_.call(null,cljs.core.deref.call(null,tabber.state.quality),"All"))){
return collection;
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,tabber.state.musKey),"All")){
return cljs.core.filter.call(null,(function (p1__31623_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__31623_SHARP_),cljs.core.deref.call(null,tabber.state.quality));
}),collection);
} else {
if(cljs.core._EQ_.call(null,cljs.core.deref.call(null,tabber.state.quality),"All")){
return cljs.core.filter.call(null,(function (p1__31624_SHARP_){
return cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__31624_SHARP_),cljs.core.deref.call(null,tabber.state.musKey));
}),collection);
} else {
return cljs.core.filter.call(null,(function (p1__31625_SHARP_){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,p1__31625_SHARP_),cljs.core.deref.call(null,tabber.state.musKey))) && (cljs.core._EQ_.call(null,cljs.core.second.call(null,p1__31625_SHARP_),cljs.core.deref.call(null,tabber.state.quality)));
}),collection);

}
}
}
});
tabber.chordChart.ChordChartPage = (function tabber$chordChart$ChordChartPage(){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,tabber.chordChart.KeyButton,tabber.chordChart.keyList),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),cljs.core.map.call(null,tabber.chordChart.QualityButton,tabber.chordChart.qualityList)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"display","display",242065432),"flex",new cljs.core.Keyword(null,"justifyContent","justifyContent",885406515),"center",new cljs.core.Keyword(null,"flexWrap","flexWrap",-1972563518),"wrap",new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"50px"], null)], null),cljs.core.map.call(null,tabber.chordChart.ChordChart,tabber.chordChart.KeyFilter.call(null,cljs.core.deref.call(null,tabber.state.chords)))], null)], null);
});

//# sourceMappingURL=chordChart.js.map?rel=1500435972714