// Compiled by ClojureScript 1.10.329 {}
goog.provide('prais2.comparator');
goog.require('cljs.core');
/**
 * merge a comparator with one on another sort column
 */
prais2.comparator.compare_merge = (function prais2$comparator$compare_merge(comparator,p__21483){
var vec__21484 = p__21483;
var column_key = cljs.core.nth.call(null,vec__21484,(0),null);
var order = cljs.core.nth.call(null,vec__21484,(1),null);
return ((function (vec__21484,column_key,order){
return (function (row1,row2){
var comp1 = comparator.call(null,row1,row2);
if(cljs.core.not_EQ_.call(null,comp1,(0))){
return comp1;
} else {
var cell1 = column_key.call(null,row1);
var cell2 = column_key.call(null,row2);
if(cljs.core.truth_(order)){
return cljs.core.compare.call(null,cell1,cell2);
} else {
return cljs.core.compare.call(null,cell2,cell1);
}
}
});
;})(vec__21484,column_key,order))
});
/**
 * return a sort-by key-fn which operates on all sort-columns
 */
prais2.comparator.compare_all = (function prais2$comparator$compare_all(sort_columns){
return cljs.core.reduce.call(null,(function (p1__21487_SHARP_,p2__21488_SHARP_){
return prais2.comparator.compare_merge.call(null,p1__21487_SHARP_,p2__21488_SHARP_);
}),cljs.core.constantly.call(null,(0)),sort_columns);
});
/**
 * sort a data table
 */
prais2.comparator.sort_column = (function prais2$comparator$sort_column(data,sort_columns){
return cljs.core.assoc.call(null,data,new cljs.core.Keyword(null,"rows","rows",850049680),cljs.core.sort.call(null,prais2.comparator.compare_all.call(null,sort_columns),new cljs.core.Keyword(null,"rows","rows",850049680).cljs$core$IFn$_invoke$arity$1(data)));
});
prais2.comparator.sort_columns = cljs.core.atom.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-name","h-name",1046194554),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h-code","h-code",1404858483),false], null)], null));

//# sourceMappingURL=comparator.js.map
