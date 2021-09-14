// Compiled by ClojureScript 1.9.36 {}
goog.provide('prais2.load_edn');
goog.require('cljs.core');
goog.require('cljs_http.client');
goog.require('cljs.core.async');
goog.require('prais2.content');
cljs.core.enable_console_print_BANG_.call(null);
/**
 * Adds tagged literals depending on the presence of certain keys
 */
prais2.load_edn.decorate = (function prais2$load_edn$decorate(m){
var ks = cljs.core.vec.call(null,cljs.core.keys.call(null,m));
if(cljs.core.truth_(cljs.core.some.call(null,((function (ks){
return (function (p1__45617_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"h-name","h-name",1046194554),p1__45617_SHARP_);
});})(ks))
,ks))){
return [cljs.core.str("#prais2.content/Row"),cljs.core.str(m)].join('');
} else {
throw (new Error("The entry is not a row."));

}
});
/**
 * Translates data into defrecords implementations for a suitable datasource
 */
prais2.load_edn.decoder = (function prais2$load_edn$decoder(data){
return cljs.core.into.call(null,cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__25443__auto__ = (function prais2$load_edn$decoder_$_iter__45636(s__45637){
return (new cljs.core.LazySeq(null,(function (){
var s__45637__$1 = s__45637;
while(true){
var temp__4657__auto__ = cljs.core.seq.call(null,s__45637__$1);
if(temp__4657__auto__){
var s__45637__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__45637__$2)){
var c__25441__auto__ = cljs.core.chunk_first.call(null,s__45637__$2);
var size__25442__auto__ = cljs.core.count.call(null,c__25441__auto__);
var b__45639 = cljs.core.chunk_buffer.call(null,size__25442__auto__);
if((function (){var i__45638 = (0);
while(true){
if((i__45638 < size__25442__auto__)){
var vec__45646 = cljs.core._nth.call(null,c__25441__auto__,i__45638);
var k = cljs.core.nth.call(null,vec__45646,(0),null);
var v = cljs.core.nth.call(null,vec__45646,(1),null);
cljs.core.chunk_append.call(null,b__45639,(function (){var decorated = cljs.core.mapv.call(null,((function (i__45638,vec__45646,k,v,c__25441__auto__,size__25442__auto__,b__45639,s__45637__$2,temp__4657__auto__){
return (function (p1__45618_SHARP_){
return prais2.load_edn.decorate.call(null,p1__45618_SHARP_);
});})(i__45638,vec__45646,k,v,c__25441__auto__,size__25442__auto__,b__45639,s__45637__$2,temp__4657__auto__))
,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.call(null,((function (i__45638,decorated,vec__45646,k,v,c__25441__auto__,size__25442__auto__,b__45639,s__45637__$2,temp__4657__auto__){
return (function (p1__45619_SHARP_){
return cljs.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),prais2.content.edn_readers], null),p1__45619_SHARP_);
});})(i__45638,decorated,vec__45646,k,v,c__25441__auto__,size__25442__auto__,b__45639,s__45637__$2,temp__4657__auto__))
,decorated)], null);
})());

var G__45652 = (i__45638 + (1));
i__45638 = G__45652;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45639),prais2$load_edn$decoder_$_iter__45636.call(null,cljs.core.chunk_rest.call(null,s__45637__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__45639),null);
}
} else {
var vec__45649 = cljs.core.first.call(null,s__45637__$2);
var k = cljs.core.nth.call(null,vec__45649,(0),null);
var v = cljs.core.nth.call(null,vec__45649,(1),null);
return cljs.core.cons.call(null,(function (){var decorated = cljs.core.mapv.call(null,((function (vec__45649,k,v,s__45637__$2,temp__4657__auto__){
return (function (p1__45618_SHARP_){
return prais2.load_edn.decorate.call(null,p1__45618_SHARP_);
});})(vec__45649,k,v,s__45637__$2,temp__4657__auto__))
,v);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.mapv.call(null,((function (decorated,vec__45649,k,v,s__45637__$2,temp__4657__auto__){
return (function (p1__45619_SHARP_){
return cljs.reader.read_string.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"readers","readers",-2118263030),prais2.content.edn_readers], null),p1__45619_SHARP_);
});})(decorated,vec__45649,k,v,s__45637__$2,temp__4657__auto__))
,decorated)], null);
})(),prais2$load_edn$decoder_$_iter__45636.call(null,cljs.core.rest.call(null,s__45637__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__25443__auto__.call(null,data);
})());
});
prais2.load_edn.make_remote_call = (function prais2$load_edn$make_remote_call(endpoint){
console.log("start of make-remote-call");

var c__28444__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto__){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto__){
return (function (state_45685){
var state_val_45686 = (state_45685[(1)]);
if((state_val_45686 === (1))){
var inst_45674 = [new cljs.core.Keyword(null,"as","as",1148689641)];
var inst_45675 = [new cljs.core.Keyword(null,"auto","auto",-566279492)];
var inst_45676 = cljs.core.PersistentHashMap.fromArrays(inst_45674,inst_45675);
var inst_45677 = cljs_http.client.get.call(null,endpoint,inst_45676);
var state_45685__$1 = state_45685;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_45685__$1,(2),inst_45677);
} else {
if((state_val_45686 === (2))){
var inst_45679 = (state_45685[(2)]);
var inst_45680 = console.log("before printing response in make-remote-call");
var inst_45681 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_45679);
var inst_45682 = console.log(inst_45681);
var inst_45683 = new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(inst_45679);
var state_45685__$1 = (function (){var statearr_45687 = state_45685;
(statearr_45687[(7)] = inst_45682);

(statearr_45687[(8)] = inst_45680);

return statearr_45687;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_45685__$1,inst_45683);
} else {
return null;
}
}
});})(c__28444__auto__))
;
return ((function (switch__28332__auto__,c__28444__auto__){
return (function() {
var prais2$load_edn$make_remote_call_$_state_machine__28333__auto__ = null;
var prais2$load_edn$make_remote_call_$_state_machine__28333__auto____0 = (function (){
var statearr_45691 = [null,null,null,null,null,null,null,null,null];
(statearr_45691[(0)] = prais2$load_edn$make_remote_call_$_state_machine__28333__auto__);

(statearr_45691[(1)] = (1));

return statearr_45691;
});
var prais2$load_edn$make_remote_call_$_state_machine__28333__auto____1 = (function (state_45685){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_45685);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e45692){if((e45692 instanceof Object)){
var ex__28336__auto__ = e45692;
var statearr_45693_45695 = state_45685;
(statearr_45693_45695[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_45685);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e45692;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__45696 = state_45685;
state_45685 = G__45696;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
prais2$load_edn$make_remote_call_$_state_machine__28333__auto__ = function(state_45685){
switch(arguments.length){
case 0:
return prais2$load_edn$make_remote_call_$_state_machine__28333__auto____0.call(this);
case 1:
return prais2$load_edn$make_remote_call_$_state_machine__28333__auto____1.call(this,state_45685);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
prais2$load_edn$make_remote_call_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = prais2$load_edn$make_remote_call_$_state_machine__28333__auto____0;
prais2$load_edn$make_remote_call_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = prais2$load_edn$make_remote_call_$_state_machine__28333__auto____1;
return prais2$load_edn$make_remote_call_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto__))
})();
var state__28446__auto__ = (function (){var statearr_45694 = f__28445__auto__.call(null);
(statearr_45694[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto__);

return statearr_45694;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto__))
);

return c__28444__auto__;
});

//# sourceMappingURL=load_edn.js.map?rel=1629050856737