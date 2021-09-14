// Compiled by ClojureScript 1.9.36 {}
goog.provide('cljs_http.core');
goog.require('cljs.core');
goog.require('goog.net.ErrorCode');
goog.require('goog.net.EventType');
goog.require('cljs.core.async');
goog.require('cljs_http.util');
goog.require('goog.net.Jsonp');
goog.require('clojure.string');
goog.require('goog.net.XhrIo');
cljs_http.core.pending_requests = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
/**
 * Attempt to close the given channel and abort the pending HTTP request
 *   with which it is associated.
 */
cljs_http.core.abort_BANG_ = (function cljs_http$core$abort_BANG_(channel){
var temp__4657__auto__ = cljs.core.deref.call(null,cljs_http.core.pending_requests).call(null,channel);
if(cljs.core.truth_(temp__4657__auto__)){
var req = temp__4657__auto__;
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

cljs.core.async.close_BANG_.call(null,channel);

if(cljs.core.truth_(req.hasOwnProperty("abort"))){
return req.abort();
} else {
return new cljs.core.Keyword(null,"jsonp","jsonp",226119588).cljs$core$IFn$_invoke$arity$1(req).cancel(new cljs.core.Keyword(null,"request","request",1772954723).cljs$core$IFn$_invoke$arity$1(req));
}
} else {
return null;
}
});
cljs_http.core.aborted_QMARK_ = (function cljs_http$core$aborted_QMARK_(xhr){
return cljs.core._EQ_.call(null,xhr.getLastErrorCode(),goog.net.ErrorCode.ABORT);
});
/**
 * Takes an XhrIo object and applies the default-headers to it.
 */
cljs_http.core.apply_default_headers_BANG_ = (function cljs_http$core$apply_default_headers_BANG_(xhr,headers){
var formatted_h = cljs.core.zipmap.call(null,cljs.core.map.call(null,cljs_http.util.camelize,cljs.core.keys.call(null,headers)),cljs.core.vals.call(null,headers));
return cljs.core.dorun.call(null,cljs.core.map.call(null,((function (formatted_h){
return (function (p__32861){
var vec__32862 = p__32861;
var k = cljs.core.nth.call(null,vec__32862,(0),null);
var v = cljs.core.nth.call(null,vec__32862,(1),null);
return xhr.headers.set(k,v);
});})(formatted_h))
,formatted_h));
});
/**
 * Takes an XhrIo object and sets response-type if not nil.
 */
cljs_http.core.apply_response_type_BANG_ = (function cljs_http$core$apply_response_type_BANG_(xhr,response_type){
return xhr.setResponseType((function (){var G__32866 = response_type;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"array-buffer","array-buffer",519008380),G__32866)){
return goog.net.XhrIo.ResponseType.ARRAY_BUFFER;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"blob","blob",1636965233),G__32866)){
return goog.net.XhrIo.ResponseType.BLOB;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"document","document",-1329188687),G__32866)){
return goog.net.XhrIo.ResponseType.DOCUMENT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"text","text",-1790561697),G__32866)){
return goog.net.XhrIo.ResponseType.TEXT;
} else {
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"default","default",-1987822328),G__32866)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
if(cljs.core._EQ_.call(null,null,G__32866)){
return goog.net.XhrIo.ResponseType.DEFAULT;
} else {
throw (new Error([cljs.core.str("No matching clause: "),cljs.core.str(response_type)].join('')));

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
cljs_http.core.build_xhr = (function cljs_http$core$build_xhr(p__32867){
var map__32871 = p__32867;
var map__32871__$1 = ((((!((map__32871 == null)))?((((map__32871.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32871.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32871):map__32871);
var request = map__32871__$1;
var with_credentials_QMARK_ = cljs.core.get.call(null,map__32871__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var default_headers = cljs.core.get.call(null,map__32871__$1,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094));
var response_type = cljs.core.get.call(null,map__32871__$1,new cljs.core.Keyword(null,"response-type","response-type",-1493770458));
var timeout = (function (){var or__24663__auto__ = new cljs.core.Keyword(null,"timeout","timeout",-318625318).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return (0);
}
})();
var send_credentials = (((with_credentials_QMARK_ == null))?true:with_credentials_QMARK_);
var G__32873 = (new goog.net.XhrIo());
cljs_http.core.apply_default_headers_BANG_.call(null,G__32873,default_headers);

cljs_http.core.apply_response_type_BANG_.call(null,G__32873,response_type);

G__32873.setTimeoutInterval(timeout);

G__32873.setWithCredentials(send_credentials);

return G__32873;
});
cljs_http.core.error_kw = cljs.core.PersistentHashMap.fromArrays([(0),(7),(1),(4),(6),(3),(2),(9),(5),(8)],[new cljs.core.Keyword(null,"no-error","no-error",1984610064),new cljs.core.Keyword(null,"abort","abort",521193198),new cljs.core.Keyword(null,"access-denied","access-denied",959449406),new cljs.core.Keyword(null,"custom-error","custom-error",-1565161123),new cljs.core.Keyword(null,"http-error","http-error",-1040049553),new cljs.core.Keyword(null,"ff-silent-error","ff-silent-error",189390514),new cljs.core.Keyword(null,"file-not-found","file-not-found",-65398940),new cljs.core.Keyword(null,"offline","offline",-107631935),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"timeout","timeout",-318625318)]);
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.xhr = (function cljs_http$core$xhr(p__32874){
var map__32901 = p__32874;
var map__32901__$1 = ((((!((map__32901 == null)))?((((map__32901.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32901.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32901):map__32901);
var request = map__32901__$1;
var request_method = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
var body = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"body","body",-2049205669));
var with_credentials_QMARK_ = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"with-credentials?","with-credentials?",-1773202222));
var cancel = cljs.core.get.call(null,map__32901__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var channel = cljs.core.async.chan.call(null);
var request_url = cljs_http.util.build_url.call(null,request);
var method = cljs.core.name.call(null,(function (){var or__24663__auto__ = request_method;
if(cljs.core.truth_(or__24663__auto__)){
return or__24663__auto__;
} else {
return new cljs.core.Keyword(null,"get","get",1683182755);
}
})());
var headers__$1 = cljs_http.util.build_headers.call(null,headers);
var xhr__$1 = cljs_http.core.build_xhr.call(null,request);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,xhr__$1);

xhr__$1.listen(goog.net.EventType.COMPLETE,((function (channel,request_url,method,headers__$1,xhr__$1,map__32901,map__32901__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (evt){
var target = evt.target;
var response = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"status","status",-1997798413),target.getStatus(),new cljs.core.Keyword(null,"success","success",1890645906),target.isSuccess(),new cljs.core.Keyword(null,"body","body",-2049205669),target.getResponse(),new cljs.core.Keyword(null,"headers","headers",-835030129),cljs_http.util.parse_headers.call(null,target.getAllResponseHeaders()),new cljs.core.Keyword(null,"trace-redirects","trace-redirects",-1149427907),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [request_url,target.getLastUri()], null),new cljs.core.Keyword(null,"error-code","error-code",180497232),cljs_http.core.error_kw.call(null,target.getLastErrorCode()),new cljs.core.Keyword(null,"error-text","error-text",2021893718),target.getLastError()], null);
if(cljs.core.not.call(null,cljs_http.core.aborted_QMARK_.call(null,xhr__$1))){
cljs.core.async.put_BANG_.call(null,channel,response);
} else {
}

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,request_url,method,headers__$1,xhr__$1,map__32901,map__32901__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

xhr__$1.send(request_url,method,body,headers__$1);

if(cljs.core.truth_(cancel)){
var c__28444__auto___32927 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___32927,channel,request_url,method,headers__$1,xhr__$1,map__32901,map__32901__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___32927,channel,request_url,method,headers__$1,xhr__$1,map__32901,map__32901__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function (state_32913){
var state_val_32914 = (state_32913[(1)]);
if((state_val_32914 === (1))){
var state_32913__$1 = state_32913;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32913__$1,(2),cancel);
} else {
if((state_val_32914 === (2))){
var inst_32904 = (state_32913[(2)]);
var inst_32905 = xhr__$1.isComplete();
var inst_32906 = cljs.core.not.call(null,inst_32905);
var state_32913__$1 = (function (){var statearr_32915 = state_32913;
(statearr_32915[(7)] = inst_32904);

return statearr_32915;
})();
if(inst_32906){
var statearr_32916_32928 = state_32913__$1;
(statearr_32916_32928[(1)] = (3));

} else {
var statearr_32917_32929 = state_32913__$1;
(statearr_32917_32929[(1)] = (4));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (3))){
var inst_32908 = xhr__$1.abort();
var state_32913__$1 = state_32913;
var statearr_32918_32930 = state_32913__$1;
(statearr_32918_32930[(2)] = inst_32908);

(statearr_32918_32930[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (4))){
var state_32913__$1 = state_32913;
var statearr_32919_32931 = state_32913__$1;
(statearr_32919_32931[(2)] = null);

(statearr_32919_32931[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32914 === (5))){
var inst_32911 = (state_32913[(2)]);
var state_32913__$1 = state_32913;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32913__$1,inst_32911);
} else {
return null;
}
}
}
}
}
});})(c__28444__auto___32927,channel,request_url,method,headers__$1,xhr__$1,map__32901,map__32901__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
;
return ((function (switch__28332__auto__,c__28444__auto___32927,channel,request_url,method,headers__$1,xhr__$1,map__32901,map__32901__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel){
return (function() {
var cljs_http$core$xhr_$_state_machine__28333__auto__ = null;
var cljs_http$core$xhr_$_state_machine__28333__auto____0 = (function (){
var statearr_32923 = [null,null,null,null,null,null,null,null];
(statearr_32923[(0)] = cljs_http$core$xhr_$_state_machine__28333__auto__);

(statearr_32923[(1)] = (1));

return statearr_32923;
});
var cljs_http$core$xhr_$_state_machine__28333__auto____1 = (function (state_32913){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_32913);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e32924){if((e32924 instanceof Object)){
var ex__28336__auto__ = e32924;
var statearr_32925_32932 = state_32913;
(statearr_32925_32932[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32913);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32924;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32933 = state_32913;
state_32913 = G__32933;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs_http$core$xhr_$_state_machine__28333__auto__ = function(state_32913){
switch(arguments.length){
case 0:
return cljs_http$core$xhr_$_state_machine__28333__auto____0.call(this);
case 1:
return cljs_http$core$xhr_$_state_machine__28333__auto____1.call(this,state_32913);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$xhr_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$xhr_$_state_machine__28333__auto____0;
cljs_http$core$xhr_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$xhr_$_state_machine__28333__auto____1;
return cljs_http$core$xhr_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___32927,channel,request_url,method,headers__$1,xhr__$1,map__32901,map__32901__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
})();
var state__28446__auto__ = (function (){var statearr_32926 = f__28445__auto__.call(null);
(statearr_32926[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___32927);

return statearr_32926;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___32927,channel,request_url,method,headers__$1,xhr__$1,map__32901,map__32901__$1,request,request_method,headers,body,with_credentials_QMARK_,cancel))
);

} else {
}

return channel;
});
/**
 * Execute the JSONP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.jsonp = (function cljs_http$core$jsonp(p__32934){
var map__32951 = p__32934;
var map__32951__$1 = ((((!((map__32951 == null)))?((((map__32951.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32951.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32951):map__32951);
var request = map__32951__$1;
var timeout = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318));
var callback_name = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"callback-name","callback-name",336964714));
var cancel = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"cancel","cancel",-1964088360));
var keywordize_keys_QMARK_ = cljs.core.get.call(null,map__32951__$1,new cljs.core.Keyword(null,"keywordize-keys?","keywordize-keys?",-254545987),true);
var channel = cljs.core.async.chan.call(null);
var jsonp__$1 = (new goog.net.Jsonp(cljs_http.util.build_url.call(null,request),callback_name));
jsonp__$1.setRequestTimeout(timeout);

var req_32967 = jsonp__$1.send(null,((function (channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_success_callback(data){
var response = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),(200),new cljs.core.Keyword(null,"success","success",1890645906),true,new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.js__GT_clj.call(null,data,new cljs.core.Keyword(null,"keywordize-keys","keywordize-keys",1310784252),keywordize_keys_QMARK_)], null);
cljs.core.async.put_BANG_.call(null,channel,response);

cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
,((function (channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function cljs_http$core$jsonp_$_error_callback(){
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.dissoc,channel);

if(cljs.core.truth_(cancel)){
cljs.core.async.close_BANG_.call(null,cancel);
} else {
}

return cljs.core.async.close_BANG_.call(null,channel);
});})(channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);
cljs.core.swap_BANG_.call(null,cljs_http.core.pending_requests,cljs.core.assoc,channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"jsonp","jsonp",226119588),jsonp__$1,new cljs.core.Keyword(null,"request","request",1772954723),req_32967], null));

if(cljs.core.truth_(cancel)){
var c__28444__auto___32968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__28444__auto___32968,req_32967,channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (){
var f__28445__auto__ = (function (){var switch__28332__auto__ = ((function (c__28444__auto___32968,req_32967,channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function (state_32957){
var state_val_32958 = (state_32957[(1)]);
if((state_val_32958 === (1))){
var state_32957__$1 = state_32957;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_32957__$1,(2),cancel);
} else {
if((state_val_32958 === (2))){
var inst_32954 = (state_32957[(2)]);
var inst_32955 = jsonp__$1.cancel(req_32967);
var state_32957__$1 = (function (){var statearr_32959 = state_32957;
(statearr_32959[(7)] = inst_32954);

return statearr_32959;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_32957__$1,inst_32955);
} else {
return null;
}
}
});})(c__28444__auto___32968,req_32967,channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
;
return ((function (switch__28332__auto__,c__28444__auto___32968,req_32967,channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_){
return (function() {
var cljs_http$core$jsonp_$_state_machine__28333__auto__ = null;
var cljs_http$core$jsonp_$_state_machine__28333__auto____0 = (function (){
var statearr_32963 = [null,null,null,null,null,null,null,null];
(statearr_32963[(0)] = cljs_http$core$jsonp_$_state_machine__28333__auto__);

(statearr_32963[(1)] = (1));

return statearr_32963;
});
var cljs_http$core$jsonp_$_state_machine__28333__auto____1 = (function (state_32957){
while(true){
var ret_value__28334__auto__ = (function (){try{while(true){
var result__28335__auto__ = switch__28332__auto__.call(null,state_32957);
if(cljs.core.keyword_identical_QMARK_.call(null,result__28335__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28335__auto__;
}
break;
}
}catch (e32964){if((e32964 instanceof Object)){
var ex__28336__auto__ = e32964;
var statearr_32965_32969 = state_32957;
(statearr_32965_32969[(5)] = ex__28336__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_32957);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__28334__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32970 = state_32957;
state_32957 = G__32970;
continue;
} else {
return ret_value__28334__auto__;
}
break;
}
});
cljs_http$core$jsonp_$_state_machine__28333__auto__ = function(state_32957){
switch(arguments.length){
case 0:
return cljs_http$core$jsonp_$_state_machine__28333__auto____0.call(this);
case 1:
return cljs_http$core$jsonp_$_state_machine__28333__auto____1.call(this,state_32957);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs_http$core$jsonp_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$0 = cljs_http$core$jsonp_$_state_machine__28333__auto____0;
cljs_http$core$jsonp_$_state_machine__28333__auto__.cljs$core$IFn$_invoke$arity$1 = cljs_http$core$jsonp_$_state_machine__28333__auto____1;
return cljs_http$core$jsonp_$_state_machine__28333__auto__;
})()
;})(switch__28332__auto__,c__28444__auto___32968,req_32967,channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
})();
var state__28446__auto__ = (function (){var statearr_32966 = f__28445__auto__.call(null);
(statearr_32966[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__28444__auto___32968);

return statearr_32966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__28446__auto__);
});})(c__28444__auto___32968,req_32967,channel,jsonp__$1,map__32951,map__32951__$1,request,timeout,callback_name,cancel,keywordize_keys_QMARK_))
);

} else {
}

return channel;
});
/**
 * Execute the HTTP request corresponding to the given Ring request
 *   map and return a core.async channel.
 */
cljs_http.core.request = (function cljs_http$core$request(p__32971){
var map__32974 = p__32971;
var map__32974__$1 = ((((!((map__32974 == null)))?((((map__32974.cljs$lang$protocol_mask$partition0$ & (64))) || (map__32974.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__32974):map__32974);
var request__$1 = map__32974__$1;
var request_method = cljs.core.get.call(null,map__32974__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core._EQ_.call(null,request_method,new cljs.core.Keyword(null,"jsonp","jsonp",226119588))){
return cljs_http.core.jsonp.call(null,request__$1);
} else {
return cljs_http.core.xhr.call(null,request__$1);
}
});

//# sourceMappingURL=core.js.map?rel=1629049570025