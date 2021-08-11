// Compiled by ClojureScript 1.9.36 {:static-fns true, :optimize-constants true}
goog.provide('prais2.utils');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('rum.core');
/**
 * value to pixel string
 */
prais2.utils.px = (function prais2$utils$px(value){
return [cljs.core.str(value),cljs.core.str("px")].join('');
});
/**
 * value to percent string
 */
prais2.utils.pc = (function prais2$utils$pc(value){
if(cljs.core.truth_(value)){
return clojure.string.replace([cljs.core.str(value.toPrecision((3))),cljs.core.str("%")].join(''),/[.]0?0/,"");
} else {
return null;
}
});
/**
 * tack !important on a string value
 */
prais2.utils.important = (function prais2$utils$important(str_val){
return [cljs.core.str(str_val),cljs.core.str(" !important")].join('');
});
/**
 * useful for mapping react keys to a content vector
 */
prais2.utils.key_with = (function prais2$utils$key_with(a,b){
return rum.core.with_key(b,a);
});
