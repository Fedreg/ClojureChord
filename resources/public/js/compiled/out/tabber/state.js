// Compiled by ClojureScript 1.9.229 {}
goog.provide('tabber.state');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('tabber.chords');
tabber.state.HeyJude = cljs.core.list("Hey Jude",cljs.core.list("D","M",(4)),cljs.core.list("A","M",(4)),cljs.core.list("A","7",(4)),cljs.core.list("D","M",(4)),cljs.core.list("G","M",(4)),cljs.core.list("D","M",(4)),cljs.core.list("A","7",(4)),cljs.core.list("D","M",(4)),cljs.core.list("D","M",(4)),cljs.core.list("A","M",(4)),cljs.core.list("A","7",(4)),cljs.core.list("D","M",(4)),cljs.core.list("G","M",(4)),cljs.core.list("D","M",(4)),cljs.core.list("A","7",(4)),cljs.core.list("D","M",(4)));
if(typeof tabber.state.app_state !== 'undefined'){
} else {
tabber.state.app_state = reagent.core.atom.call(null,cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"currentPage","currentPage",1444569088),new cljs.core.Keyword(null,"beat","beat",-817854366),new cljs.core.Keyword(null,"showModal","showModal",-1664022078),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.Keyword(null,"quality","quality",147850199),new cljs.core.Keyword(null,"chords","chords",234981817),new cljs.core.Keyword(null,"tempo","tempo",-1555208453),new cljs.core.Keyword(null,"song","song",-62793121)],["Chord Charts",(1),false,"A",(1),"dark","All",tabber.chords.chordList,(80),tabber.state.HeyJude]));
}

//# sourceMappingURL=state.js.map?rel=1499706467256