// Compiled by ClojureScript 1.9.229 {}
goog.provide('tabber.core');
goog.require('cljs.core');
goog.require('tabber.chords');
goog.require('reagent.core');
goog.require('tabber.colorThemes');
goog.require('tabber.songViewer');
goog.require('tabber.chordChart');
goog.require('tabber.state');
goog.require('tabber.modal');
goog.require('clojure.string');
tabber.core.Chords = (function tabber$core$Chords(){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"marginTop","marginTop",-1403015220),"100px",new cljs.core.Keyword(null,"textAlign","textAlign",-711351626),"center"], null)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.ModalIcon], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.modal.Modal], null),((cljs.core._EQ_.call(null,"Chord Charts",new cljs.core.Keyword(null,"currentPage","currentPage",1444569088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?tabber.chordChart.ChordChartPage.call(null):((cljs.core._EQ_.call(null,"Song Player",new cljs.core.Keyword(null,"currentPage","currentPage",1444569088).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,tabber.state.app_state))))?tabber.songViewer.SongPage.call(null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"Error, please reload"], null)
))], null);
});
reagent.core.render_component.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [tabber.core.Chords], null),document.getElementById("app"));
tabber.core.on_js_reload = (function tabber$core$on_js_reload(){
return null;
});

//# sourceMappingURL=core.js.map?rel=1499924891847