// Compiled by ClojureScript 1.9.229 {}
goog.provide('tabber.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tabber.chords');
if(typeof tabber.state.app_state !== 'undefined'){
} else {
tabber.state.app_state = reagent.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"chords","chords",234981817),tabber.chords.chordList,new cljs.core.Keyword(null,"key","key",-1516042587),"A",new cljs.core.Keyword(null,"quality","quality",147850199),"All",new cljs.core.Keyword(null,"showModal","showModal",-1664022078),false,new cljs.core.Keyword(null,"colors","colors",1157174732),"light"], null));
}

//# sourceMappingURL=state.js.map?rel=1499543345295