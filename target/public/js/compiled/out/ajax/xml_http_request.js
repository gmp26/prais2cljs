// Compiled by ClojureScript 1.9.36 {}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),new cljs.core.Keyword(null,"not-initialized","not-initialized",-1937378906),(1),new cljs.core.Keyword(null,"connection-established","connection-established",-1403749733),(2),new cljs.core.Keyword(null,"request-received","request-received",2110590540),(3),new cljs.core.Keyword(null,"processing-request","processing-request",-264947221),(4),new cljs.core.Keyword(null,"response-ready","response-ready",245208276)], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__31954,handler){
var map__31955 = p__31954;
var map__31955__$1 = ((((!((map__31955 == null)))?((((map__31955.cljs$lang$protocol_mask$partition0$ & (64))) || (map__31955.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__31955):map__31955);
var uri = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
var method = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"method","method",55703592));
var body = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var headers = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var timeout = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),(0));
var with_credentials = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"with-credentials","with-credentials",-1163127235),false);
var response_format = cljs.core.get.call(null,map__31955__$1,new cljs.core.Keyword(null,"response-format","response-format",1664465322));
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__31955,map__31955__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__31953_SHARP_){
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"response-ready","response-ready",245208276),ajax.xml_http_request.ready_state.call(null,p1__31953_SHARP_))){
return handler.call(null,this$__$1);
} else {
return null;
}
});})(this$__$1,map__31955,map__31955__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___31967 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___31967)){
var response_type_31968 = temp__4657__auto___31967;
this$__$1.responseType = cljs.core.name.call(null,response_type_31968);
} else {
}

var seq__31957_31969 = cljs.core.seq.call(null,headers);
var chunk__31958_31970 = null;
var count__31959_31971 = (0);
var i__31960_31972 = (0);
while(true){
if((i__31960_31972 < count__31959_31971)){
var vec__31961_31973 = cljs.core._nth.call(null,chunk__31958_31970,i__31960_31972);
var k_31974 = cljs.core.nth.call(null,vec__31961_31973,(0),null);
var v_31975 = cljs.core.nth.call(null,vec__31961_31973,(1),null);
this$__$1.setRequestHeader(k_31974,v_31975);

var G__31976 = seq__31957_31969;
var G__31977 = chunk__31958_31970;
var G__31978 = count__31959_31971;
var G__31979 = (i__31960_31972 + (1));
seq__31957_31969 = G__31976;
chunk__31958_31970 = G__31977;
count__31959_31971 = G__31978;
i__31960_31972 = G__31979;
continue;
} else {
var temp__4657__auto___31980 = cljs.core.seq.call(null,seq__31957_31969);
if(temp__4657__auto___31980){
var seq__31957_31981__$1 = temp__4657__auto___31980;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__31957_31981__$1)){
var c__25474__auto___31982 = cljs.core.chunk_first.call(null,seq__31957_31981__$1);
var G__31983 = cljs.core.chunk_rest.call(null,seq__31957_31981__$1);
var G__31984 = c__25474__auto___31982;
var G__31985 = cljs.core.count.call(null,c__25474__auto___31982);
var G__31986 = (0);
seq__31957_31969 = G__31983;
chunk__31958_31970 = G__31984;
count__31959_31971 = G__31985;
i__31960_31972 = G__31986;
continue;
} else {
var vec__31964_31987 = cljs.core.first.call(null,seq__31957_31981__$1);
var k_31988 = cljs.core.nth.call(null,vec__31964_31987,(0),null);
var v_31989 = cljs.core.nth.call(null,vec__31964_31987,(1),null);
this$__$1.setRequestHeader(k_31988,v_31989);

var G__31990 = cljs.core.next.call(null,seq__31957_31981__$1);
var G__31991 = null;
var G__31992 = (0);
var G__31993 = (0);
seq__31957_31969 = G__31990;
chunk__31958_31970 = G__31991;
count__31959_31971 = G__31992;
i__31960_31972 = G__31993;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__24663__auto__ = body;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = true;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.call(null,(0),this$__$1.readyState);
});

//# sourceMappingURL=xml_http_request.js.map?rel=1629049566207