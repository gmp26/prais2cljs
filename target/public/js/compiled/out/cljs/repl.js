// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__32042){
var map__32067 = p__32042;
var map__32067__$1 = ((((!((map__32067 == null)))?((((map__32067.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32067.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32067):map__32067);
var m = map__32067__$1;
var n = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__32067__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str((function (){var temp__4657__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__4657__auto__)){
var ns = temp__4657__auto__;
return [cljs.core.str(ns),cljs.core.str("/")].join('');
} else {
return null;
}
})()),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32069_32091 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32070_32092 = null;
var count__32071_32093 = (0);
var i__32072_32094 = (0);
while(true){
if((i__32072_32094 < count__32071_32093)){
var f_32095 = cljs.core._nth.call(null,chunk__32070_32092,i__32072_32094);
cljs.core.println.call(null,"  ",f_32095);

var G__32096 = seq__32069_32091;
var G__32097 = chunk__32070_32092;
var G__32098 = count__32071_32093;
var G__32099 = (i__32072_32094 + (1));
seq__32069_32091 = G__32096;
chunk__32070_32092 = G__32097;
count__32071_32093 = G__32098;
i__32072_32094 = G__32099;
continue;
} else {
var temp__4657__auto___32100 = cljs.core.seq.call(null,seq__32069_32091);
if(temp__4657__auto___32100){
var seq__32069_32101__$1 = temp__4657__auto___32100;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32069_32101__$1)){
var c__25475__auto___32102 = cljs.core.chunk_first.call(null,seq__32069_32101__$1);
var G__32103 = cljs.core.chunk_rest.call(null,seq__32069_32101__$1);
var G__32104 = c__25475__auto___32102;
var G__32105 = cljs.core.count.call(null,c__25475__auto___32102);
var G__32106 = (0);
seq__32069_32091 = G__32103;
chunk__32070_32092 = G__32104;
count__32071_32093 = G__32105;
i__32072_32094 = G__32106;
continue;
} else {
var f_32107 = cljs.core.first.call(null,seq__32069_32101__$1);
cljs.core.println.call(null,"  ",f_32107);

var G__32108 = cljs.core.next.call(null,seq__32069_32101__$1);
var G__32109 = null;
var G__32110 = (0);
var G__32111 = (0);
seq__32069_32091 = G__32108;
chunk__32070_32092 = G__32109;
count__32071_32093 = G__32110;
i__32072_32094 = G__32111;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_32112 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__24664__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__24664__auto__)){
return or__24664__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_32112);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_32112)))?cljs.core.second.call(null,arglists_32112):arglists_32112));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/"),cljs.core.str(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,[cljs.core.str("\n  Please see http://clojure.org/special_forms#"),cljs.core.str(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__32073_32113 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__32074_32114 = null;
var count__32075_32115 = (0);
var i__32076_32116 = (0);
while(true){
if((i__32076_32116 < count__32075_32115)){
var vec__32077_32117 = cljs.core._nth.call(null,chunk__32074_32114,i__32076_32116);
var name_32118 = cljs.core.nth.call(null,vec__32077_32117,(0),null);
var map__32080_32119 = cljs.core.nth.call(null,vec__32077_32117,(1),null);
var map__32080_32120__$1 = ((((!((map__32080_32119 == null)))?((((map__32080_32119.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32080_32119.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32080_32119):map__32080_32119);
var doc_32121 = cljs.core.get.call(null,map__32080_32120__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32122 = cljs.core.get.call(null,map__32080_32120__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32118);

cljs.core.println.call(null," ",arglists_32122);

if(cljs.core.truth_(doc_32121)){
cljs.core.println.call(null," ",doc_32121);
} else {
}

var G__32123 = seq__32073_32113;
var G__32124 = chunk__32074_32114;
var G__32125 = count__32075_32115;
var G__32126 = (i__32076_32116 + (1));
seq__32073_32113 = G__32123;
chunk__32074_32114 = G__32124;
count__32075_32115 = G__32125;
i__32076_32116 = G__32126;
continue;
} else {
var temp__4657__auto___32127 = cljs.core.seq.call(null,seq__32073_32113);
if(temp__4657__auto___32127){
var seq__32073_32128__$1 = temp__4657__auto___32127;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32073_32128__$1)){
var c__25475__auto___32129 = cljs.core.chunk_first.call(null,seq__32073_32128__$1);
var G__32130 = cljs.core.chunk_rest.call(null,seq__32073_32128__$1);
var G__32131 = c__25475__auto___32129;
var G__32132 = cljs.core.count.call(null,c__25475__auto___32129);
var G__32133 = (0);
seq__32073_32113 = G__32130;
chunk__32074_32114 = G__32131;
count__32075_32115 = G__32132;
i__32076_32116 = G__32133;
continue;
} else {
var vec__32082_32134 = cljs.core.first.call(null,seq__32073_32128__$1);
var name_32135 = cljs.core.nth.call(null,vec__32082_32134,(0),null);
var map__32085_32136 = cljs.core.nth.call(null,vec__32082_32134,(1),null);
var map__32085_32137__$1 = ((((!((map__32085_32136 == null)))?((((map__32085_32136.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32085_32136.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32085_32136):map__32085_32136);
var doc_32138 = cljs.core.get.call(null,map__32085_32137__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_32139 = cljs.core.get.call(null,map__32085_32137__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_32135);

cljs.core.println.call(null," ",arglists_32139);

if(cljs.core.truth_(doc_32138)){
cljs.core.println.call(null," ",doc_32138);
} else {
}

var G__32140 = cljs.core.next.call(null,seq__32073_32128__$1);
var G__32141 = null;
var G__32142 = (0);
var G__32143 = (0);
seq__32073_32113 = G__32140;
chunk__32074_32114 = G__32141;
count__32075_32115 = G__32142;
i__32076_32116 = G__32143;
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
var specs = cljs.spec.fn_specs.call(null,cljs.core.symbol.call(null,[cljs.core.str(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(cljs.core.some.call(null,cljs.core.identity,cljs.core.vals.call(null,specs)))){
cljs.core.print.call(null,"Spec");

return cljs.core.run_BANG_.call(null,((function (specs,map__32067,map__32067__$1,m,n,nm){
return (function (p__32087){
var vec__32088 = p__32087;
var role = cljs.core.nth.call(null,vec__32088,(0),null);
var spec = cljs.core.nth.call(null,vec__32088,(1),null);
if(cljs.core.truth_((function (){var and__24652__auto__ = spec;
if(cljs.core.truth_(and__24652__auto__)){
return !(cljs.core._EQ_.call(null,spec,new cljs.core.Keyword("cljs.spec","unknown","cljs.spec/unknown",-1620309582)));
} else {
return and__24652__auto__;
}
})())){
return cljs.core.print.call(null,[cljs.core.str("\n "),cljs.core.str(cljs.core.name.call(null,role)),cljs.core.str(":")].join(''),cljs.spec.describe.call(null,spec));
} else {
return null;
}
});})(specs,map__32067,map__32067__$1,m,n,nm))
,specs);
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1629059129881