// Compiled by ClojureScript 1.9.229 {}
goog.provide('devtools.defaults');
goog.require('cljs.core');
devtools.defaults.known_features = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatters","formatters",-1875637118),new cljs.core.Keyword(null,"hints","hints",-991113151),new cljs.core.Keyword(null,"async","async",1050769601)], null);
devtools.defaults.default_features = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"formatters","formatters",-1875637118)], null);
devtools.defaults.feature_groups = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),devtools.defaults.known_features,new cljs.core.Keyword(null,"default","default",-1987822328),devtools.defaults.default_features], null);
