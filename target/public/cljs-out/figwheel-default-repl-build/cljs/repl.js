// Compiled by ClojureScript 1.10.758 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__18706){
var map__18707 = p__18706;
var map__18707__$1 = (((((!((map__18707 == null))))?(((((map__18707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18707.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18707):map__18707);
var m = map__18707__$1;
var n = cljs.core.get.call(null,map__18707__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__18707__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,(function (){var or__4126__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})());

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18709_18741 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18710_18742 = null;
var count__18711_18743 = (0);
var i__18712_18744 = (0);
while(true){
if((i__18712_18744 < count__18711_18743)){
var f_18745 = cljs.core._nth.call(null,chunk__18710_18742,i__18712_18744);
cljs.core.println.call(null,"  ",f_18745);


var G__18746 = seq__18709_18741;
var G__18747 = chunk__18710_18742;
var G__18748 = count__18711_18743;
var G__18749 = (i__18712_18744 + (1));
seq__18709_18741 = G__18746;
chunk__18710_18742 = G__18747;
count__18711_18743 = G__18748;
i__18712_18744 = G__18749;
continue;
} else {
var temp__5735__auto___18750 = cljs.core.seq.call(null,seq__18709_18741);
if(temp__5735__auto___18750){
var seq__18709_18751__$1 = temp__5735__auto___18750;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18709_18751__$1)){
var c__4556__auto___18752 = cljs.core.chunk_first.call(null,seq__18709_18751__$1);
var G__18753 = cljs.core.chunk_rest.call(null,seq__18709_18751__$1);
var G__18754 = c__4556__auto___18752;
var G__18755 = cljs.core.count.call(null,c__4556__auto___18752);
var G__18756 = (0);
seq__18709_18741 = G__18753;
chunk__18710_18742 = G__18754;
count__18711_18743 = G__18755;
i__18712_18744 = G__18756;
continue;
} else {
var f_18757 = cljs.core.first.call(null,seq__18709_18751__$1);
cljs.core.println.call(null,"  ",f_18757);


var G__18758 = cljs.core.next.call(null,seq__18709_18751__$1);
var G__18759 = null;
var G__18760 = (0);
var G__18761 = (0);
seq__18709_18741 = G__18758;
chunk__18710_18742 = G__18759;
count__18711_18743 = G__18760;
i__18712_18744 = G__18761;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_18762 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4126__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_18762);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_18762)))?cljs.core.second.call(null,arglists_18762):arglists_18762));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Spec");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__18713_18763 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__18714_18764 = null;
var count__18715_18765 = (0);
var i__18716_18766 = (0);
while(true){
if((i__18716_18766 < count__18715_18765)){
var vec__18727_18767 = cljs.core._nth.call(null,chunk__18714_18764,i__18716_18766);
var name_18768 = cljs.core.nth.call(null,vec__18727_18767,(0),null);
var map__18730_18769 = cljs.core.nth.call(null,vec__18727_18767,(1),null);
var map__18730_18770__$1 = (((((!((map__18730_18769 == null))))?(((((map__18730_18769.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18730_18769.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18730_18769):map__18730_18769);
var doc_18771 = cljs.core.get.call(null,map__18730_18770__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18772 = cljs.core.get.call(null,map__18730_18770__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18768);

cljs.core.println.call(null," ",arglists_18772);

if(cljs.core.truth_(doc_18771)){
cljs.core.println.call(null," ",doc_18771);
} else {
}


var G__18773 = seq__18713_18763;
var G__18774 = chunk__18714_18764;
var G__18775 = count__18715_18765;
var G__18776 = (i__18716_18766 + (1));
seq__18713_18763 = G__18773;
chunk__18714_18764 = G__18774;
count__18715_18765 = G__18775;
i__18716_18766 = G__18776;
continue;
} else {
var temp__5735__auto___18777 = cljs.core.seq.call(null,seq__18713_18763);
if(temp__5735__auto___18777){
var seq__18713_18778__$1 = temp__5735__auto___18777;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18713_18778__$1)){
var c__4556__auto___18779 = cljs.core.chunk_first.call(null,seq__18713_18778__$1);
var G__18780 = cljs.core.chunk_rest.call(null,seq__18713_18778__$1);
var G__18781 = c__4556__auto___18779;
var G__18782 = cljs.core.count.call(null,c__4556__auto___18779);
var G__18783 = (0);
seq__18713_18763 = G__18780;
chunk__18714_18764 = G__18781;
count__18715_18765 = G__18782;
i__18716_18766 = G__18783;
continue;
} else {
var vec__18732_18784 = cljs.core.first.call(null,seq__18713_18778__$1);
var name_18785 = cljs.core.nth.call(null,vec__18732_18784,(0),null);
var map__18735_18786 = cljs.core.nth.call(null,vec__18732_18784,(1),null);
var map__18735_18787__$1 = (((((!((map__18735_18786 == null))))?(((((map__18735_18786.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18735_18786.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18735_18786):map__18735_18786);
var doc_18788 = cljs.core.get.call(null,map__18735_18787__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_18789 = cljs.core.get.call(null,map__18735_18787__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_18785);

cljs.core.println.call(null," ",arglists_18789);

if(cljs.core.truth_(doc_18788)){
cljs.core.println.call(null," ",doc_18788);
} else {
}


var G__18790 = cljs.core.next.call(null,seq__18713_18778__$1);
var G__18791 = null;
var G__18792 = (0);
var G__18793 = (0);
seq__18713_18763 = G__18790;
chunk__18714_18764 = G__18791;
count__18715_18765 = G__18792;
i__18716_18766 = G__18793;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n)),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.call(null,"Spec");

var seq__18737 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__18738 = null;
var count__18739 = (0);
var i__18740 = (0);
while(true){
if((i__18740 < count__18739)){
var role = cljs.core._nth.call(null,chunk__18738,i__18740);
var temp__5735__auto___18794__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18794__$1)){
var spec_18795 = temp__5735__auto___18794__$1;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18795));
} else {
}


var G__18796 = seq__18737;
var G__18797 = chunk__18738;
var G__18798 = count__18739;
var G__18799 = (i__18740 + (1));
seq__18737 = G__18796;
chunk__18738 = G__18797;
count__18739 = G__18798;
i__18740 = G__18799;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq.call(null,seq__18737);
if(temp__5735__auto____$1){
var seq__18737__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__18737__$1)){
var c__4556__auto__ = cljs.core.chunk_first.call(null,seq__18737__$1);
var G__18800 = cljs.core.chunk_rest.call(null,seq__18737__$1);
var G__18801 = c__4556__auto__;
var G__18802 = cljs.core.count.call(null,c__4556__auto__);
var G__18803 = (0);
seq__18737 = G__18800;
chunk__18738 = G__18801;
count__18739 = G__18802;
i__18740 = G__18803;
continue;
} else {
var role = cljs.core.first.call(null,seq__18737__$1);
var temp__5735__auto___18804__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5735__auto___18804__$2)){
var spec_18805 = temp__5735__auto___18804__$2;
cljs.core.print.call(null,["\n ",cljs.core.name.call(null,role),":"].join(''),cljs.spec.alpha.describe.call(null,spec_18805));
} else {
}


var G__18806 = cljs.core.next.call(null,seq__18737__$1);
var G__18807 = null;
var G__18808 = (0);
var G__18809 = (0);
seq__18737 = G__18806;
chunk__18738 = G__18807;
count__18739 = G__18808;
i__18740 = G__18809;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.call(null,"js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})());
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__18810 = cljs.core.conj.call(null,via,t);
var G__18811 = cljs.core.ex_cause.call(null,t);
via = G__18810;
t = G__18811;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek.call(null,via);
return cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec.call(null,cljs.core.map.call(null,base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data.call(null,root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data.call(null,o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})());
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__18814 = datafied_throwable;
var map__18814__$1 = (((((!((map__18814 == null))))?(((((map__18814.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18814.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18814):map__18814);
var via = cljs.core.get.call(null,map__18814__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.call(null,map__18814__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.call(null,map__18814__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__18815 = cljs.core.last.call(null,via);
var map__18815__$1 = (((((!((map__18815 == null))))?(((((map__18815.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18815.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18815):map__18815);
var type = cljs.core.get.call(null,map__18815__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.call(null,map__18815__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.call(null,map__18815__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__18816 = data;
var map__18816__$1 = (((((!((map__18816 == null))))?(((((map__18816.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18816.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18816):map__18816);
var problems = cljs.core.get.call(null,map__18816__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.call(null,map__18816__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.call(null,map__18816__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__18817 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,via));
var map__18817__$1 = (((((!((map__18817 == null))))?(((((map__18817.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18817.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18817):map__18817);
var top_data = map__18817__$1;
var source = cljs.core.get.call(null,map__18817__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.call(null,(function (){var G__18822 = phase;
var G__18822__$1 = (((G__18822 instanceof cljs.core.Keyword))?G__18822.fqn:null);
switch (G__18822__$1) {
case "read-source":
var map__18823 = data;
var map__18823__$1 = (((((!((map__18823 == null))))?(((((map__18823.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18823.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18823):map__18823);
var line = cljs.core.get.call(null,map__18823__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18823__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__18825 = cljs.core.merge.call(null,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second.call(null,via)),top_data);
var G__18825__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18825,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18825);
var G__18825__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18825__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18825__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18825__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18825__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__18826 = top_data;
var G__18826__$1 = (cljs.core.truth_(source)?cljs.core.assoc.call(null,G__18826,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__18826);
var G__18826__$2 = (cljs.core.truth_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,source))?cljs.core.dissoc.call(null,G__18826__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__18826__$1);
var G__18826__$3 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18826__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18826__$2);
var G__18826__$4 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18826__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18826__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18826__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18826__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__18827 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18827,(0),null);
var method = cljs.core.nth.call(null,vec__18827,(1),null);
var file = cljs.core.nth.call(null,vec__18827,(2),null);
var line = cljs.core.nth.call(null,vec__18827,(3),null);
var G__18830 = top_data;
var G__18830__$1 = (cljs.core.truth_(line)?cljs.core.assoc.call(null,G__18830,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__18830);
var G__18830__$2 = (cljs.core.truth_(file)?cljs.core.assoc.call(null,G__18830__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__18830__$1);
var G__18830__$3 = (cljs.core.truth_((function (){var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
})())?cljs.core.assoc.call(null,G__18830__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__18830__$2);
var G__18830__$4 = (cljs.core.truth_(type)?cljs.core.assoc.call(null,G__18830__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__18830__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.call(null,G__18830__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__18830__$4;
}

break;
case "execution":
var vec__18831 = cljs.core.first.call(null,trace);
var source__$1 = cljs.core.nth.call(null,vec__18831,(0),null);
var method = cljs.core.nth.call(null,vec__18831,(1),null);
var file = cljs.core.nth.call(null,vec__18831,(2),null);
var line = cljs.core.nth.call(null,vec__18831,(3),null);
var file__$1 = cljs.core.first.call(null,cljs.core.remove.call(null,(function (p1__18813_SHARP_){
var or__4126__auto__ = (p1__18813_SHARP_ == null);
if(or__4126__auto__){
return or__4126__auto__;
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null).call(null,p1__18813_SHARP_);
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4126__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return line;
}
})();
var G__18834 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__18834__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.call(null,G__18834,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__18834);
var G__18834__$2 = (cljs.core.truth_(message)?cljs.core.assoc.call(null,G__18834__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__18834__$1);
var G__18834__$3 = (cljs.core.truth_((function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
var and__4115__auto__ = source__$1;
if(cljs.core.truth_(and__4115__auto__)){
return method;
} else {
return and__4115__auto__;
}
}
})())?cljs.core.assoc.call(null,G__18834__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4126__auto__ = fn;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__18834__$2);
var G__18834__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.call(null,G__18834__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__18834__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.call(null,G__18834__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__18834__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18822__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__18838){
var map__18839 = p__18838;
var map__18839__$1 = (((((!((map__18839 == null))))?(((((map__18839.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__18839.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__18839):map__18839);
var triage_data = map__18839__$1;
var phase = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.call(null,map__18839__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = source;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4126__auto__ = line;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name.call(null,(function (){var or__4126__auto__ = class$;
if(cljs.core.truth_(or__4126__auto__)){
return or__4126__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__18841 = phase;
var G__18841__$1 = (((G__18841 instanceof cljs.core.Keyword))?G__18841.fqn:null);
switch (G__18841__$1) {
case "read-source":
return format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause);

break;
case "macro-syntax-check":
return format.call(null,"Syntax error macroexpanding %sat (%s).\n%s",(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,(cljs.core.truth_(spec)?(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18842_18851 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18843_18852 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18844_18853 = true;
var _STAR_print_fn_STAR__temp_val__18845_18854 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18844_18853);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18845_18854);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18836_SHARP_){
return cljs.core.dissoc.call(null,p1__18836_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18843_18852);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18842_18851);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})():format.call(null,"%s\n",cause)));

break;
case "macroexpansion":
return format.call(null,"Unexpected error%s macroexpanding %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compile-syntax-check":
return format.call(null,"Syntax error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "compilation":
return format.call(null,"Unexpected error%s compiling %sat (%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);

break;
case "read-eval-result":
return format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "print-eval-result":
return format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause);

break;
case "execution":
if(cljs.core.truth_(spec)){
return format.call(null,"Execution error - invalid arguments to %s at (%s).\n%s",symbol,loc,(function (){var sb__4667__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__18846_18855 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__18847_18856 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__18848_18857 = true;
var _STAR_print_fn_STAR__temp_val__18849_18858 = (function (x__4668__auto__){
return sb__4667__auto__.append(x__4668__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__18848_18857);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__18849_18858);

try{cljs.spec.alpha.explain_out.call(null,cljs.core.update.call(null,spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.call(null,(function (p1__18837_SHARP_){
return cljs.core.dissoc.call(null,p1__18837_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__18847_18856);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__18846_18855);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4667__auto__);
})());
} else {
return format.call(null,"Execution error%s at %s(%s).\n%s\n",cause_type,(cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):""),loc,cause);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__18841__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str.call(null,cljs.repl.ex_triage.call(null,cljs.repl.Error__GT_map.call(null,error)));
});

//# sourceMappingURL=repl.js.map
