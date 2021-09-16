// Compiled by ClojureScript 1.10.329 {:static-fns true, :optimize-constants true}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('goog.net.EventType');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.XhrIo');
goog.require('goog.net.Jsonp');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('clojure.string');
cljs_http.core.pending_requests = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__5753__auto__ = (function (){var fexpr__19262 = cljs.core.deref(cljs_http.core.pending_requests);
return (fexpr__19262.cljs$core$IFn$_invoke$arity$1 ? fexpr__19262.cljs$core$IFn$_invoke$arity$1(channel) : fexpr__19262.call(null,channel));
})();
if(cljs.core.truth_(temp__5753__auto__)){
var req = temp__5753__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_(channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return cljs.core.cst$kw$jsonp.cljs$core$IFn$_invoke$arity$1(req).cancel(cljs.core.cst$kw$request.cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs_http.util.camelize,cljs.core.keys(headers)),cljs.core.vals(headers));
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (formatted_h){
return (function (p__19263){
var vec__19264 = p__19263;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19264,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__19264,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__19267 = response_type;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$array_DASH_buffer,G__19267)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$blob,G__19267)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$document,G__19267)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$text,G__19267)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$default,G__19267)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__19267)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__19267)].join('')));

}
}
}
}
}
}
})());
});
/**
 * Builds an XhrIo object from the request parameters.
 */
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__19268){
var map__19269 = p__19268;
var map__19269__$1 = ((((!((map__19269 == null)))?(((((map__19269.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19269.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19269):map__19269);
var request = map__19269__$1;
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19269__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var default_headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19269__$1,cljs.core.cst$kw$default_DASH_headers);
var response_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19269__$1,cljs.core.cst$kw$response_DASH_type);
var timeout = (function (){var or__3936__auto__ = cljs.core.cst$kw$timeout.cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__19271 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_(G__19271,default_headers);

cljs_http.core.apply_response_type_BANG_(G__19271,response_type);

G__19271.setTimeoutInterval(timeout);

G__19271.setWithCredentials(send_credentials);

return G__19271;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[cljs.core.cst$kw$no_DASH_error,cljs.core.cst$kw$abort,cljs.core.cst$kw$access_DASH_denied,cljs.core.cst$kw$custom_DASH_error,cljs.core.cst$kw$http_DASH_error,cljs.core.cst$kw$ff_DASH_silent_DASH_error,cljs.core.cst$kw$file_DASH_not_DASH_found,cljs.core.cst$kw$offline,cljs.core.cst$kw$exception,cljs.core.cst$kw$timeout]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__19272){
var map__19273 = p__19272;
var map__19273__$1 = ((((!((map__19273 == null)))?(((((map__19273.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19273.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19273):map__19273);
var request = map__19273__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$request_DASH_method);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$headers);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$body);
var with_credentials_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$with_DASH_credentials_QMARK_);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$cancel);
var progress = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19273__$1,cljs.core.cst$kw$progress);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var request_url = cljs_http.util.build_url(request);
var method = cljs.core.name((function (){var or__3936__auto__ = request_method;
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return cljs.core.cst$kw$get;
}
})());
var headers__$1 = cljs_http.util.build_headers(headers);
var xhr = cljs_http.core.build_xhr(request);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr);

xhr.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$status,target.getStatus(),cljs.core.cst$kw$success,target.isSuccess(),cljs.core.cst$kw$body,target.getResponse(),cljs.core.cst$kw$headers,cljs_http.util.parse_headers(target.getAllResponseHeaders()),cljs.core.cst$kw$trace_DASH_redirects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),cljs.core.cst$kw$error_DASH_code,(function (){var G__19275 = target.getLastErrorCode();
return (cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1 ? cljs_http.core.error_kw.cljs$core$IFn$_invoke$arity$1(G__19275) : cljs_http.core.error_kw.call(null,G__19275));
})(),cljs.core.cst$kw$error_DASH_text,target.getLastError()], null);
if(cljs.core.not(cljs_http.core.aborted_QMARK_(xhr))){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

if(cljs.core.truth_(progress)){
var listener_19299 = ((function (channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (direction,evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(progress,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$direction,direction,cljs.core.cst$kw$loaded,evt.loaded], null),(cljs.core.truth_(evt.lengthComputable)?new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$total,evt.total], null):null)], 0)));
});})(channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
var G__19276_19300 = xhr;
G__19276_19300.setProgressEventsEnabled(true);

G__19276_19300.listen(goog.net.EventType.UPLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19299,cljs.core.cst$kw$upload));

G__19276_19300.listen(goog.net.EventType.DOWNLOAD_PROGRESS,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(listener_19299,cljs.core.cst$kw$download));

} else {
}

xhr.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__16485__auto___19301 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___19301,channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___19301,channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function (state_19287){
var state_val_19288 = (state_19287[(1)]);
if((state_val_19288 === (1))){
var state_19287__$1 = state_19287;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19287__$1,(2),cancel);
} else {
if((state_val_19288 === (2))){
var inst_19278 = (state_19287[(2)]);
var inst_19279 = xhr.isComplete();
var inst_19280 = cljs.core.not(inst_19279);
var state_19287__$1 = (function (){var statearr_19289 = state_19287;
(statearr_19289[(7)] = inst_19278);

return statearr_19289;
})();
if(inst_19280){
var statearr_19290_19302 = state_19287__$1;
(statearr_19290_19302[(1)] = (3));

} else {
var statearr_19291_19303 = state_19287__$1;
(statearr_19291_19303[(1)] = (4));

}

return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (3))){
var inst_19282 = xhr.abort();
var state_19287__$1 = state_19287;
var statearr_19292_19304 = state_19287__$1;
(statearr_19292_19304[(2)] = inst_19282);

(statearr_19292_19304[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (4))){
var state_19287__$1 = state_19287;
var statearr_19293_19305 = state_19287__$1;
(statearr_19293_19305[(2)] = null);

(statearr_19293_19305[(1)] = (5));


return cljs.core.cst$kw$recur;
} else {
if((state_val_19288 === (5))){
var inst_19285 = (state_19287[(2)]);
var state_19287__$1 = state_19287;
return cljs.core.async.impl.ioc_helpers.return_chan(state_19287__$1,inst_19285);
} else {
return null;
}
}
}
}
}
});})(c__16485__auto___19301,channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
;
return ((function (switch__16410__auto__,c__16485__auto___19301,channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress){
return (function() {
var cljs_http$core$xhr_$_state_machine__16411__auto__ = null;
var cljs_http$core$xhr_$_state_machine__16411__auto____0 = (function (){
var statearr_19294 = [null,null,null,null,null,null,null,null];
(statearr_19294[(0)] = cljs_http$core$xhr_$_state_machine__16411__auto__);

(statearr_19294[(1)] = (1));

return statearr_19294;
});
var cljs_http$core$xhr_$_state_machine__16411__auto____1 = (function (state_19287){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_19287);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e19295){var ex__16414__auto__ = e19295;
var statearr_19296_19306 = state_19287;
(statearr_19296_19306[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_19287[(4)]))){
var statearr_19297_19307 = state_19287;
(statearr_19297_19307[(1)] = cljs.core.first((state_19287[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__19308 = state_19287;
state_19287 = G__19308;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__16411__auto__ = function(state_19287){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__16411__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__16411__auto____1.call(this,state_19287);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__16411__auto____0;
cljs_http$core$xhr_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__16411__auto____1;
return cljs_http$core$xhr_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___19301,channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
})();
var state__16487__auto__ = (function (){var statearr_19298 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_19298[(6)] = c__16485__auto___19301);

return statearr_19298;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___19301,channel,request_url,method,headers__$1,xhr,map__19273,map__19273__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel,progress))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__19309){
var map__19310 = p__19309;
var map__19310__$1 = ((((!((map__19310 == null)))?(((((map__19310.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19310.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19310):map__19310);
var request = map__19310__$1;
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19310__$1,cljs.core.cst$kw$timeout);
var callback_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19310__$1,cljs.core.cst$kw$callback_DASH_name);
var cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19310__$1,cljs.core.cst$kw$cancel);
var keywordize_keys_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__19310__$1,cljs.core.cst$kw$keywordize_DASH_keys_QMARK_,true);
var channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var jsonp = (new goog.net.Jsonp(cljs_http.util.build_url(request),callback_name));
jsonp.setRequestTimeout(timeout);

var req_19324 = jsonp.send(null,((function (channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$status,(200),cljs.core.cst$kw$success,true,cljs.core.cst$kw$body,cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$variadic(data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.cst$kw$keywordize_DASH_keys,keywordize_keys_QMARK_], 0))], null);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(channel,response);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_(cancel);
} else {
}

return cljs.core.async.close_BANG_(channel);
});})(channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$jsonp,jsonp,cljs.core.cst$kw$request,req_19324], null));

if(cljs.core.truth_(cancel)){
var c__16485__auto___19325 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (c__16485__auto___19325,req_19324,channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__16486__auto__ = (function (){var switch__16410__auto__ = ((function (c__16485__auto___19325,req_19324,channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_19316){
var state_val_19317 = (state_19316[(1)]);
if((state_val_19317 === (1))){
var state_19316__$1 = state_19316;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_19316__$1,(2),cancel);
} else {
if((state_val_19317 === (2))){
var inst_19313 = (state_19316[(2)]);
var inst_19314 = jsonp.cancel(req_19324);
var state_19316__$1 = (function (){var statearr_19318 = state_19316;
(statearr_19318[(7)] = inst_19313);

return statearr_19318;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_19316__$1,inst_19314);
} else {
return null;
}
}
});})(c__16485__auto___19325,req_19324,channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__16410__auto__,c__16485__auto___19325,req_19324,channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__16411__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__16411__auto____0 = (function (){
var statearr_19319 = [null,null,null,null,null,null,null,null];
(statearr_19319[(0)] = cljs_http$core$jsonp_$_state_machine__16411__auto__);

(statearr_19319[(1)] = (1));

return statearr_19319;
});
var cljs_http$core$jsonp_$_state_machine__16411__auto____1 = (function (state_19316){
while(true){
var ret_value__16412__auto__ = (function (){try{while(true){
var result__16413__auto__ = switch__16410__auto__(state_19316);
if(cljs.core.keyword_identical_QMARK_(result__16413__auto__,cljs.core.cst$kw$recur)){
continue;
} else {
return result__16413__auto__;
}
break;
}
}catch (e19320){var ex__16414__auto__ = e19320;
var statearr_19321_19326 = state_19316;
(statearr_19321_19326[(2)] = ex__16414__auto__);


if(cljs.core.seq((state_19316[(4)]))){
var statearr_19322_19327 = state_19316;
(statearr_19322_19327[(1)] = cljs.core.first((state_19316[(4)])));

} else {
throw ex__16414__auto__;
}

return cljs.core.cst$kw$recur;
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__16412__auto__,cljs.core.cst$kw$recur)){
var G__19328 = state_19316;
state_19316 = G__19328;
continue;
} else {
return ret_value__16412__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__16411__auto__ = function(state_19316){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__16411__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__16411__auto____1.call(this,state_19316);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__16411__auto____0;
cljs_http$core$jsonp_$_state_machine__16411__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__16411__auto____1;
return cljs_http$core$jsonp_$_state_machine__16411__auto__;
})()
;})(switch__16410__auto__,c__16485__auto___19325,req_19324,channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__16487__auto__ = (function (){var statearr_19323 = (f__16486__auto__.cljs$core$IFn$_invoke$arity$0 ? f__16486__auto__.cljs$core$IFn$_invoke$arity$0() : f__16486__auto__.call(null));
(statearr_19323[(6)] = c__16485__auto___19325);

return statearr_19323;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__16487__auto__);
});})(c__16485__auto___19325,req_19324,channel,jsonp,map__19310,map__19310__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__19329){
var map__19330 = p__19329;
var map__19330__$1 = ((((!((map__19330 == null)))?(((((map__19330.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__19330.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__19330):map__19330);
var request = map__19330__$1;
var request_method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__19330__$1,cljs.core.cst$kw$request_DASH_method);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(request_method,cljs.core.cst$kw$jsonp)){
return cljs_http.core.jsonp(request);
} else {
return cljs_http.core.xhr(request);
}
});
