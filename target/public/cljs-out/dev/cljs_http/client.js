// Compiled by ClojureScript 1.10.329 {}
goog.provide('cljs_http.client');
goog.require('cljs.core');
goog.require('cljs_http.core');
goog.require('cljs_http.util');
goog.require('cljs.core.async');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.Uri');
goog.require('no.en.core');
cljs_http.client.if_pos = (function cljs_http$client$if_pos(v){
if(cljs.core.truth_((function (){var and__3925__auto__ = v;
if(cljs.core.truth_(and__3925__auto__)){
return (v > (0));
} else {
return and__3925__auto__;
}
})())){
return v;
} else {
return null;
}
});
cljs_http.client.acc_param = (function cljs_http$client$acc_param(o,v){
if(cljs.core.coll_QMARK_.call(null,o)){
return cljs.core.conj.call(null,o,v);
} else {
if(!((o == null))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [o,v], null);
} else {
return v;

}
}
});
/**
 * Parse `s` as query params and return a hash map.
 */
cljs_http.client.parse_query_params = (function cljs_http$client$parse_query_params(s){
if(!(clojure.string.blank_QMARK_.call(null,s))){
return cljs.core.reduce.call(null,(function (p1__20823_SHARP_,p2__20822_SHARP_){
var vec__20824 = clojure.string.split.call(null,p2__20822_SHARP_,/=/);
var k = cljs.core.nth.call(null,vec__20824,(0),null);
var v = cljs.core.nth.call(null,vec__20824,(1),null);
return cljs.core.update.call(null,p1__20823_SHARP_,cljs.core.keyword.call(null,no.en.core.url_decode.call(null,k)),cljs_http.client.acc_param,no.en.core.url_decode.call(null,v));
}),cljs.core.PersistentArrayMap.EMPTY,clojure.string.split.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(s)].join(''),/&/));
} else {
return null;
}
});
/**
 * Parse `url` into a hash map.
 */
cljs_http.client.parse_url = (function cljs_http$client$parse_url(url){
if(!(clojure.string.blank_QMARK_.call(null,url))){
var uri = goog.Uri.parse(url);
var query_data = uri.getQueryData();
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"scheme","scheme",90199613),cljs.core.keyword.call(null,uri.getScheme()),new cljs.core.Keyword(null,"server-name","server-name",-1012104295),uri.getDomain(),new cljs.core.Keyword(null,"server-port","server-port",663745648),cljs_http.client.if_pos.call(null,uri.getPort()),new cljs.core.Keyword(null,"uri","uri",-774711847),uri.getPath(),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),((cljs.core.not.call(null,query_data.isEmpty()))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join(''):null),new cljs.core.Keyword(null,"query-params","query-params",900640534),((cljs.core.not.call(null,query_data.isEmpty()))?cljs_http.client.parse_query_params.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(query_data)].join('')):null)], null);
} else {
return null;
}
});
cljs_http.client.unexceptional_status_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [(205),null,(206),null,(300),null,(204),null,(307),null,(303),null,(301),null,(201),null,(302),null,(202),null,(200),null,(203),null,(207),null], null), null);
cljs_http.client.encode_val = (function cljs_http$client$encode_val(k,v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,cljs.core.name.call(null,k))),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(no.en.core.url_encode.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('')))].join('');
});
cljs_http.client.encode_vals = (function cljs_http$client$encode_vals(k,vs){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,(function (p1__20827_SHARP_){
return cljs_http.client.encode_val.call(null,k,p1__20827_SHARP_);
}),vs));
});
cljs_http.client.encode_param = (function cljs_http$client$encode_param(p__20828){
var vec__20829 = p__20828;
var k = cljs.core.nth.call(null,vec__20829,(0),null);
var v = cljs.core.nth.call(null,vec__20829,(1),null);
if(cljs.core.coll_QMARK_.call(null,v)){
return cljs_http.client.encode_vals.call(null,k,v);
} else {
return cljs_http.client.encode_val.call(null,k,v);
}
});
cljs_http.client.generate_query_string = (function cljs_http$client$generate_query_string(params){
return clojure.string.join.call(null,"&",cljs.core.map.call(null,cljs_http.client.encode_param,params));
});
cljs_http.client.regex_char_esc_smap = (function (){var esc_chars = "()*&^%$#!+";
return cljs.core.zipmap.call(null,esc_chars,cljs.core.map.call(null,((function (esc_chars){
return (function (p1__20832_SHARP_){
return ["\\",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__20832_SHARP_)].join('');
});})(esc_chars))
,esc_chars));
})();
/**
 * Escape special characters -- for content-type.
 */
cljs_http.client.escape_special = (function cljs_http$client$escape_special(string){
return cljs.core.reduce.call(null,cljs.core.str,cljs.core.replace.call(null,cljs_http.client.regex_char_esc_smap,string));
});
/**
 * Decocde the :body of `response` with `decode-fn` if the content type matches.
 */
cljs_http.client.decode_body = (function cljs_http$client$decode_body(response,decode_fn,content_type,request_method){
if(cljs.core.truth_((function (){var and__3925__auto__ = cljs.core.not_EQ_.call(null,new cljs.core.Keyword(null,"head","head",-771383919),request_method);
if(and__3925__auto__){
var and__3925__auto____$1 = cljs.core.not_EQ_.call(null,(204),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(response));
if(and__3925__auto____$1){
return cljs.core.re_find.call(null,cljs.core.re_pattern.call(null,["(?i)",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs_http.client.escape_special.call(null,content_type))].join('')),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.call(null,new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(response),"content-type",""))].join(''));
} else {
return and__3925__auto____$1;
}
} else {
return and__3925__auto__;
}
})())){
return cljs.core.update_in.call(null,response,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"body","body",-2049205669)], null),decode_fn);
} else {
return response;
}
});
/**
 * Encode :edn-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_edn_params = (function cljs_http$client$wrap_edn_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"edn-params","edn-params",894273052).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/edn"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"edn-params","edn-params",894273052)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs.core.pr_str.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/edn responses.
 */
cljs_http.client.wrap_edn_response = (function cljs_http$client$wrap_edn_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__20833_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20833_SHARP_,cljs.reader.read_string,"application/edn",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_default_headers = (function cljs_http$client$wrap_default_headers(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20840 = arguments.length;
var i__4519__auto___20841 = (0);
while(true){
if((i__4519__auto___20841 < len__4518__auto___20840)){
args__4521__auto__.push((arguments[i__4519__auto___20841]));

var G__20842 = (i__4519__auto___20841 + (1));
i__4519__auto___20841 = G__20842;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.wrap_default_headers.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20836){
var vec__20837 = p__20836;
var default_headers = cljs.core.nth.call(null,vec__20837,(0),null);
return ((function (vec__20837,default_headers){
return (function (request){
var temp__5751__auto__ = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"default-headers","default-headers",-43146094).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return default_headers;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var default_headers__$1 = temp__5751__auto__;
return client.call(null,cljs.core.assoc.call(null,request,new cljs.core.Keyword(null,"default-headers","default-headers",-43146094),default_headers__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20837,default_headers))
});

cljs_http.client.wrap_default_headers.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_default_headers.cljs$lang$applyTo = (function (seq20834){
var G__20835 = cljs.core.first.call(null,seq20834);
var seq20834__$1 = cljs.core.next.call(null,seq20834);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20835,seq20834__$1);
});

cljs_http.client.wrap_accept = (function cljs_http$client$wrap_accept(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20849 = arguments.length;
var i__4519__auto___20850 = (0);
while(true){
if((i__4519__auto___20850 < len__4518__auto___20849)){
args__4521__auto__.push((arguments[i__4519__auto___20850]));

var G__20851 = (i__4519__auto___20850 + (1));
i__4519__auto___20850 = G__20851;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.wrap_accept.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20845){
var vec__20846 = p__20845;
var accept = cljs.core.nth.call(null,vec__20846,(0),null);
return ((function (vec__20846,accept){
return (function (request){
var temp__5751__auto__ = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"accept","accept",1874130431).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return accept;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var accept__$1 = temp__5751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"accept"], null),accept__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20846,accept))
});

cljs_http.client.wrap_accept.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_accept.cljs$lang$applyTo = (function (seq20843){
var G__20844 = cljs.core.first.call(null,seq20843);
var seq20843__$1 = cljs.core.next.call(null,seq20843);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20844,seq20843__$1);
});

cljs_http.client.wrap_content_type = (function cljs_http$client$wrap_content_type(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20858 = arguments.length;
var i__4519__auto___20859 = (0);
while(true){
if((i__4519__auto___20859 < len__4518__auto___20858)){
args__4521__auto__.push((arguments[i__4519__auto___20859]));

var G__20860 = (i__4519__auto___20859 + (1));
i__4519__auto___20859 = G__20860;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.wrap_content_type.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20854){
var vec__20855 = p__20854;
var content_type = cljs.core.nth.call(null,vec__20855,(0),null);
return ((function (vec__20855,content_type){
return (function (request){
var temp__5751__auto__ = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"content-type","content-type",-508222634).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return content_type;
}
})();
if(cljs.core.truth_(temp__5751__auto__)){
var content_type__$1 = temp__5751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,request,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"content-type"], null),content_type__$1));
} else {
return client.call(null,request);
}
});
;})(vec__20855,content_type))
});

cljs_http.client.wrap_content_type.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_content_type.cljs$lang$applyTo = (function (seq20852){
var G__20853 = cljs.core.first.call(null,seq20852);
var seq20852__$1 = cljs.core.next.call(null,seq20852);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20853,seq20852__$1);
});

cljs_http.client.default_transit_opts = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"encoding","encoding",1728578272),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"decoding","decoding",-568180903),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140),cljs.core.PersistentArrayMap.EMPTY], null);
/**
 * Encode :transit-params in the `request` :body and set the appropriate
 *   Content Type header.
 * 
 *   A :transit-opts map can be optionally provided with the following keys:
 * 
 *   :encoding                #{:json, :json-verbose}
 *   :decoding                #{:json, :json-verbose}
 *   :encoding/decoding-opts  appropriate map of options to be passed to
 *                         transit writer/reader, respectively.
 */
cljs_http.client.wrap_transit_params = (function cljs_http$client$wrap_transit_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"transit-params","transit-params",357261095).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var map__20861 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20861__$1 = ((((!((map__20861 == null)))?(((((map__20861.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20861.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20861):map__20861);
var encoding = cljs.core.get.call(null,map__20861__$1,new cljs.core.Keyword(null,"encoding","encoding",1728578272));
var encoding_opts = cljs.core.get.call(null,map__20861__$1,new cljs.core.Keyword(null,"encoding-opts","encoding-opts",-1805664631));
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/transit+json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"transit-params","transit-params",357261095)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.transit_encode.call(null,params,encoding,encoding_opts)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/transit+json responses.
 */
cljs_http.client.wrap_transit_response = (function cljs_http$client$wrap_transit_response(client){
return (function (request){
var map__20865 = cljs.core.merge.call(null,cljs_http.client.default_transit_opts,new cljs.core.Keyword(null,"transit-opts","transit-opts",1104386010).cljs$core$IFn$_invoke$arity$1(request));
var map__20865__$1 = ((((!((map__20865 == null)))?(((((map__20865.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20865.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20865):map__20865);
var decoding = cljs.core.get.call(null,map__20865__$1,new cljs.core.Keyword(null,"decoding","decoding",-568180903));
var decoding_opts = cljs.core.get.call(null,map__20865__$1,new cljs.core.Keyword(null,"decoding-opts","decoding-opts",1050289140));
var transit_decode = ((function (map__20865,map__20865__$1,decoding,decoding_opts){
return (function (p1__20863_SHARP_){
return cljs_http.util.transit_decode.call(null,p1__20863_SHARP_,decoding,decoding_opts);
});})(map__20865,map__20865__$1,decoding,decoding_opts))
;
return cljs.core.async.map.call(null,((function (map__20865,map__20865__$1,decoding,decoding_opts,transit_decode){
return (function (p1__20864_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20864_SHARP_,transit_decode,"application/transit+json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
});})(map__20865,map__20865__$1,decoding,decoding_opts,transit_decode))
,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
/**
 * Encode :json-params in the `request` :body and set the appropriate
 *   Content Type header.
 */
cljs_http.client.wrap_json_params = (function cljs_http$client$wrap_json_params(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"json-params","json-params",-1112693596).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var params = temp__5751__auto__;
var headers = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/json"], null),new cljs.core.Keyword(null,"headers","headers",-835030129).cljs$core$IFn$_invoke$arity$1(request));
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"json-params","json-params",-1112693596)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.util.json_encode.call(null,params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers));
} else {
return client.call(null,request);
}
});
});
/**
 * Decode application/json responses.
 */
cljs_http.client.wrap_json_response = (function cljs_http$client$wrap_json_response(client){
return (function (request){
return cljs.core.async.map.call(null,(function (p1__20867_SHARP_){
return cljs_http.client.decode_body.call(null,p1__20867_SHARP_,cljs_http.util.json_decode,"application/json",new cljs.core.Keyword(null,"request-method","request-method",1764796830).cljs$core$IFn$_invoke$arity$1(request));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [client.call(null,request)], null));
});
});
cljs_http.client.wrap_query_params = (function cljs_http$client$wrap_query_params(client){
return (function (p__20868){
var map__20869 = p__20868;
var map__20869__$1 = ((((!((map__20869 == null)))?(((((map__20869.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20869.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20869):map__20869);
var req = map__20869__$1;
var query_params = cljs.core.get.call(null,map__20869__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
if(cljs.core.truth_(query_params)){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"query-params","query-params",900640534)),new cljs.core.Keyword(null,"query-string","query-string",-1018845061),cljs_http.client.generate_query_string.call(null,query_params)));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_form_params = (function cljs_http$client$wrap_form_params(client){
return (function (p__20871){
var map__20872 = p__20871;
var map__20872__$1 = ((((!((map__20872 == null)))?(((((map__20872.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20872.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20872):map__20872);
var request = map__20872__$1;
var form_params = cljs.core.get.call(null,map__20872__$1,new cljs.core.Keyword(null,"form-params","form-params",1884296467));
var request_method = cljs.core.get.call(null,map__20872__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
var headers = cljs.core.get.call(null,map__20872__$1,new cljs.core.Keyword(null,"headers","headers",-835030129));
if(cljs.core.truth_((function (){var and__3925__auto__ = form_params;
if(cljs.core.truth_(and__3925__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3925__auto__;
}
})())){
var headers__$1 = cljs.core.merge.call(null,new cljs.core.PersistentArrayMap(null, 1, ["content-type","application/x-www-form-urlencoded"], null),headers);
return client.call(null,cljs.core.assoc.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"form-params","form-params",1884296467)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_query_string.call(null,form_params)),new cljs.core.Keyword(null,"headers","headers",-835030129),headers__$1));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.generate_form_data = (function cljs_http$client$generate_form_data(params){
var form_data = (new FormData());
var seq__20874_20884 = cljs.core.seq.call(null,params);
var chunk__20875_20885 = null;
var count__20876_20886 = (0);
var i__20877_20887 = (0);
while(true){
if((i__20877_20887 < count__20876_20886)){
var vec__20878_20888 = cljs.core._nth.call(null,chunk__20875_20885,i__20877_20887);
var k_20889 = cljs.core.nth.call(null,vec__20878_20888,(0),null);
var v_20890 = cljs.core.nth.call(null,vec__20878_20888,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_20890)){
form_data.append(cljs.core.name.call(null,k_20889),cljs.core.first.call(null,v_20890),cljs.core.second.call(null,v_20890));
} else {
form_data.append(cljs.core.name.call(null,k_20889),v_20890);
}


var G__20891 = seq__20874_20884;
var G__20892 = chunk__20875_20885;
var G__20893 = count__20876_20886;
var G__20894 = (i__20877_20887 + (1));
seq__20874_20884 = G__20891;
chunk__20875_20885 = G__20892;
count__20876_20886 = G__20893;
i__20877_20887 = G__20894;
continue;
} else {
var temp__5753__auto___20895 = cljs.core.seq.call(null,seq__20874_20884);
if(temp__5753__auto___20895){
var seq__20874_20896__$1 = temp__5753__auto___20895;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__20874_20896__$1)){
var c__4338__auto___20897 = cljs.core.chunk_first.call(null,seq__20874_20896__$1);
var G__20898 = cljs.core.chunk_rest.call(null,seq__20874_20896__$1);
var G__20899 = c__4338__auto___20897;
var G__20900 = cljs.core.count.call(null,c__4338__auto___20897);
var G__20901 = (0);
seq__20874_20884 = G__20898;
chunk__20875_20885 = G__20899;
count__20876_20886 = G__20900;
i__20877_20887 = G__20901;
continue;
} else {
var vec__20881_20902 = cljs.core.first.call(null,seq__20874_20896__$1);
var k_20903 = cljs.core.nth.call(null,vec__20881_20902,(0),null);
var v_20904 = cljs.core.nth.call(null,vec__20881_20902,(1),null);
if(cljs.core.coll_QMARK_.call(null,v_20904)){
form_data.append(cljs.core.name.call(null,k_20903),cljs.core.first.call(null,v_20904),cljs.core.second.call(null,v_20904));
} else {
form_data.append(cljs.core.name.call(null,k_20903),v_20904);
}


var G__20905 = cljs.core.next.call(null,seq__20874_20896__$1);
var G__20906 = null;
var G__20907 = (0);
var G__20908 = (0);
seq__20874_20884 = G__20905;
chunk__20875_20885 = G__20906;
count__20876_20886 = G__20907;
i__20877_20887 = G__20908;
continue;
}
} else {
}
}
break;
}

return form_data;
});
cljs_http.client.wrap_multipart_params = (function cljs_http$client$wrap_multipart_params(client){
return (function (p__20909){
var map__20910 = p__20909;
var map__20910__$1 = ((((!((map__20910 == null)))?(((((map__20910.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20910.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20910):map__20910);
var request = map__20910__$1;
var multipart_params = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707));
var request_method = cljs.core.get.call(null,map__20910__$1,new cljs.core.Keyword(null,"request-method","request-method",1764796830));
if(cljs.core.truth_((function (){var and__3925__auto__ = multipart_params;
if(cljs.core.truth_(and__3925__auto__)){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"patch","patch",380775109),null,new cljs.core.Keyword(null,"delete","delete",-1768633620),null,new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"put","put",1299772570),null], null), null).call(null,request_method);
} else {
return and__3925__auto__;
}
})())){
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,request,new cljs.core.Keyword(null,"multipart-params","multipart-params",-1033508707)),new cljs.core.Keyword(null,"body","body",-2049205669),cljs_http.client.generate_form_data.call(null,multipart_params)));
} else {
return client.call(null,request);
}
});
});
cljs_http.client.wrap_method = (function cljs_http$client$wrap_method(client){
return (function (req){
var temp__5751__auto__ = new cljs.core.Keyword(null,"method","method",55703592).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5751__auto__)){
var m = temp__5751__auto__;
return client.call(null,cljs.core.assoc.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"method","method",55703592)),new cljs.core.Keyword(null,"request-method","request-method",1764796830),m));
} else {
return client.call(null,req);
}
});
});
cljs_http.client.wrap_server_name = (function cljs_http$client$wrap_server_name(client,server_name){
return (function (p1__20912_SHARP_){
return client.call(null,cljs.core.assoc.call(null,p1__20912_SHARP_,new cljs.core.Keyword(null,"server-name","server-name",-1012104295),server_name));
});
});
cljs_http.client.wrap_url = (function cljs_http$client$wrap_url(client){
return (function (p__20914){
var map__20915 = p__20914;
var map__20915__$1 = ((((!((map__20915 == null)))?(((((map__20915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__20915.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__20915):map__20915);
var req = map__20915__$1;
var query_params = cljs.core.get.call(null,map__20915__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var temp__5751__auto__ = cljs_http.client.parse_url.call(null,new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(req));
if(cljs.core.truth_(temp__5751__auto__)){
var spec = temp__5751__auto__;
return client.call(null,cljs.core.update_in.call(null,cljs.core.dissoc.call(null,cljs.core.merge.call(null,req,spec),new cljs.core.Keyword(null,"url","url",276297046)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"query-params","query-params",900640534)], null),((function (spec,temp__5751__auto__,map__20915,map__20915__$1,req,query_params){
return (function (p1__20913_SHARP_){
return cljs.core.merge.call(null,p1__20913_SHARP_,query_params);
});})(spec,temp__5751__auto__,map__20915,map__20915__$1,req,query_params))
));
} else {
return client.call(null,req);
}
});
});
/**
 * Middleware converting the :basic-auth option or `credentials` into
 *   an Authorization header.
 */
cljs_http.client.wrap_basic_auth = (function cljs_http$client$wrap_basic_auth(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20923 = arguments.length;
var i__4519__auto___20924 = (0);
while(true){
if((i__4519__auto___20924 < len__4518__auto___20923)){
args__4521__auto__.push((arguments[i__4519__auto___20924]));

var G__20925 = (i__4519__auto___20924 + (1));
i__4519__auto___20924 = G__20925;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.wrap_basic_auth.cljs$core$IFn$_invoke$arity$variadic = (function (client,p__20919){
var vec__20920 = p__20919;
var credentials = cljs.core.nth.call(null,vec__20920,(0),null);
return ((function (vec__20920,credentials){
return (function (req){
var credentials__$1 = (function (){var or__3936__auto__ = new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(or__3936__auto__)){
return or__3936__auto__;
} else {
return credentials;
}
})();
if(!(cljs.core.empty_QMARK_.call(null,credentials__$1))){
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"basic-auth","basic-auth",-673163332)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),cljs_http.util.basic_auth.call(null,credentials__$1)));
} else {
return client.call(null,req);
}
});
;})(vec__20920,credentials))
});

cljs_http.client.wrap_basic_auth.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.wrap_basic_auth.cljs$lang$applyTo = (function (seq20917){
var G__20918 = cljs.core.first.call(null,seq20917);
var seq20917__$1 = cljs.core.next.call(null,seq20917);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20918,seq20917__$1);
});

/**
 * Middleware converting the :oauth-token option into an Authorization header.
 */
cljs_http.client.wrap_oauth = (function cljs_http$client$wrap_oauth(client){
return (function (req){
var temp__5751__auto__ = new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191).cljs$core$IFn$_invoke$arity$1(req);
if(cljs.core.truth_(temp__5751__auto__)){
var oauth_token = temp__5751__auto__;
return client.call(null,cljs.core.assoc_in.call(null,cljs.core.dissoc.call(null,req,new cljs.core.Keyword(null,"oauth-token","oauth-token",311415191)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"headers","headers",-835030129),"authorization"], null),["Bearer ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(oauth_token)].join('')));
} else {
return client.call(null,req);
}
});
});
/**
 * Pipe the response-channel into the request-map's
 * custom channel (e.g. to enable transducers)
 */
cljs_http.client.wrap_channel_from_request_map = (function cljs_http$client$wrap_channel_from_request_map(client){
return (function (request){
var temp__5751__auto__ = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(request);
if(cljs.core.truth_(temp__5751__auto__)){
var custom_channel = temp__5751__auto__;
return cljs.core.async.pipe.call(null,client.call(null,request),custom_channel);
} else {
return client.call(null,request);
}
});
});
/**
 * Returns a batteries-included HTTP request function coresponding to the given
 * core client. See client/request
 */
cljs_http.client.wrap_request = (function cljs_http$client$wrap_request(request){
return cljs_http.client.wrap_default_headers.call(null,cljs_http.client.wrap_channel_from_request_map.call(null,cljs_http.client.wrap_url.call(null,cljs_http.client.wrap_method.call(null,cljs_http.client.wrap_oauth.call(null,cljs_http.client.wrap_basic_auth.call(null,cljs_http.client.wrap_query_params.call(null,cljs_http.client.wrap_content_type.call(null,cljs_http.client.wrap_json_response.call(null,cljs_http.client.wrap_json_params.call(null,cljs_http.client.wrap_transit_response.call(null,cljs_http.client.wrap_transit_params.call(null,cljs_http.client.wrap_edn_response.call(null,cljs_http.client.wrap_edn_params.call(null,cljs_http.client.wrap_multipart_params.call(null,cljs_http.client.wrap_form_params.call(null,cljs_http.client.wrap_accept.call(null,request)))))))))))))))));
});
/**
 * Executes the HTTP request corresponding to the given map and returns the
 * response map for corresponding to the resulting HTTP response.
 * 
 * In addition to the standard Ring request keys, the following keys are also
 * recognized:
 * * :url
 * * :method
 * * :query-params
 */
cljs_http.client.request = cljs_http.client.wrap_request.call(null,cljs_http.core.request);
/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.delete$ = (function cljs_http$client$delete(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20932 = arguments.length;
var i__4519__auto___20933 = (0);
while(true){
if((i__4519__auto___20933 < len__4518__auto___20932)){
args__4521__auto__.push((arguments[i__4519__auto___20933]));

var G__20934 = (i__4519__auto___20933 + (1));
i__4519__auto___20933 = G__20934;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.delete$.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20928){
var vec__20929 = p__20928;
var req = cljs.core.nth.call(null,vec__20929,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"delete","delete",-1768633620),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.delete$.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.delete$.cljs$lang$applyTo = (function (seq20926){
var G__20927 = cljs.core.first.call(null,seq20926);
var seq20926__$1 = cljs.core.next.call(null,seq20926);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20927,seq20926__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.get = (function cljs_http$client$get(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20941 = arguments.length;
var i__4519__auto___20942 = (0);
while(true){
if((i__4519__auto___20942 < len__4518__auto___20941)){
args__4521__auto__.push((arguments[i__4519__auto___20942]));

var G__20943 = (i__4519__auto___20942 + (1));
i__4519__auto___20942 = G__20943;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.get.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20937){
var vec__20938 = p__20937;
var req = cljs.core.nth.call(null,vec__20938,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.get.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.get.cljs$lang$applyTo = (function (seq20935){
var G__20936 = cljs.core.first.call(null,seq20935);
var seq20935__$1 = cljs.core.next.call(null,seq20935);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20936,seq20935__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.head = (function cljs_http$client$head(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20950 = arguments.length;
var i__4519__auto___20951 = (0);
while(true){
if((i__4519__auto___20951 < len__4518__auto___20950)){
args__4521__auto__.push((arguments[i__4519__auto___20951]));

var G__20952 = (i__4519__auto___20951 + (1));
i__4519__auto___20951 = G__20952;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.head.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20946){
var vec__20947 = p__20946;
var req = cljs.core.nth.call(null,vec__20947,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"head","head",-771383919),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.head.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.head.cljs$lang$applyTo = (function (seq20944){
var G__20945 = cljs.core.first.call(null,seq20944);
var seq20944__$1 = cljs.core.next.call(null,seq20944);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20945,seq20944__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.jsonp = (function cljs_http$client$jsonp(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20959 = arguments.length;
var i__4519__auto___20960 = (0);
while(true){
if((i__4519__auto___20960 < len__4518__auto___20959)){
args__4521__auto__.push((arguments[i__4519__auto___20960]));

var G__20961 = (i__4519__auto___20960 + (1));
i__4519__auto___20960 = G__20961;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.jsonp.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20955){
var vec__20956 = p__20955;
var req = cljs.core.nth.call(null,vec__20956,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"jsonp","jsonp",226119588),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.jsonp.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.jsonp.cljs$lang$applyTo = (function (seq20953){
var G__20954 = cljs.core.first.call(null,seq20953);
var seq20953__$1 = cljs.core.next.call(null,seq20953);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20954,seq20953__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.move = (function cljs_http$client$move(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20968 = arguments.length;
var i__4519__auto___20969 = (0);
while(true){
if((i__4519__auto___20969 < len__4518__auto___20968)){
args__4521__auto__.push((arguments[i__4519__auto___20969]));

var G__20970 = (i__4519__auto___20969 + (1));
i__4519__auto___20969 = G__20970;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.move.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20964){
var vec__20965 = p__20964;
var req = cljs.core.nth.call(null,vec__20965,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.move.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.move.cljs$lang$applyTo = (function (seq20962){
var G__20963 = cljs.core.first.call(null,seq20962);
var seq20962__$1 = cljs.core.next.call(null,seq20962);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20963,seq20962__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.options = (function cljs_http$client$options(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20977 = arguments.length;
var i__4519__auto___20978 = (0);
while(true){
if((i__4519__auto___20978 < len__4518__auto___20977)){
args__4521__auto__.push((arguments[i__4519__auto___20978]));

var G__20979 = (i__4519__auto___20978 + (1));
i__4519__auto___20978 = G__20979;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.options.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20973){
var vec__20974 = p__20973;
var req = cljs.core.nth.call(null,vec__20974,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.options.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.options.cljs$lang$applyTo = (function (seq20971){
var G__20972 = cljs.core.first.call(null,seq20971);
var seq20971__$1 = cljs.core.next.call(null,seq20971);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20972,seq20971__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.patch = (function cljs_http$client$patch(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20986 = arguments.length;
var i__4519__auto___20987 = (0);
while(true){
if((i__4519__auto___20987 < len__4518__auto___20986)){
args__4521__auto__.push((arguments[i__4519__auto___20987]));

var G__20988 = (i__4519__auto___20987 + (1));
i__4519__auto___20987 = G__20988;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.patch.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20982){
var vec__20983 = p__20982;
var req = cljs.core.nth.call(null,vec__20983,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"patch","patch",380775109),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.patch.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.patch.cljs$lang$applyTo = (function (seq20980){
var G__20981 = cljs.core.first.call(null,seq20980);
var seq20980__$1 = cljs.core.next.call(null,seq20980);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20981,seq20980__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.post = (function cljs_http$client$post(var_args){
var args__4521__auto__ = [];
var len__4518__auto___20995 = arguments.length;
var i__4519__auto___20996 = (0);
while(true){
if((i__4519__auto___20996 < len__4518__auto___20995)){
args__4521__auto__.push((arguments[i__4519__auto___20996]));

var G__20997 = (i__4519__auto___20996 + (1));
i__4519__auto___20996 = G__20997;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.post.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__20991){
var vec__20992 = p__20991;
var req = cljs.core.nth.call(null,vec__20992,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.post.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.post.cljs$lang$applyTo = (function (seq20989){
var G__20990 = cljs.core.first.call(null,seq20989);
var seq20989__$1 = cljs.core.next.call(null,seq20989);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20990,seq20989__$1);
});

/**
 * Like #'request, but sets the :method and :url as appropriate.
 */
cljs_http.client.put = (function cljs_http$client$put(var_args){
var args__4521__auto__ = [];
var len__4518__auto___21004 = arguments.length;
var i__4519__auto___21005 = (0);
while(true){
if((i__4519__auto___21005 < len__4518__auto___21004)){
args__4521__auto__.push((arguments[i__4519__auto___21005]));

var G__21006 = (i__4519__auto___21005 + (1));
i__4519__auto___21005 = G__21006;
continue;
} else {
}
break;
}

var argseq__4522__auto__ = ((((1) < args__4521__auto__.length))?(new cljs.core.IndexedSeq(args__4521__auto__.slice((1)),(0),null)):null);
return cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4522__auto__);
});

cljs_http.client.put.cljs$core$IFn$_invoke$arity$variadic = (function (url,p__21000){
var vec__21001 = p__21000;
var req = cljs.core.nth.call(null,vec__21001,(0),null);
return cljs_http.client.request.call(null,cljs.core.merge.call(null,req,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"put","put",1299772570),new cljs.core.Keyword(null,"url","url",276297046),url], null)));
});

cljs_http.client.put.cljs$lang$maxFixedArity = (1);

/** @this {Function} */
cljs_http.client.put.cljs$lang$applyTo = (function (seq20998){
var G__20999 = cljs.core.first.call(null,seq20998);
var seq20998__$1 = cljs.core.next.call(null,seq20998);
var self__4505__auto__ = this;
return self__4505__auto__.cljs$core$IFn$_invoke$arity$variadic(G__20999,seq20998__$1);
});


//# sourceMappingURL=client.js.map
