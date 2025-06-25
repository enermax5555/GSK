function iw(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function my(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var gy={exports:{}},uo={};/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var cp=Object.getOwnPropertySymbols,sw=Object.prototype.hasOwnProperty,ow=Object.prototype.propertyIsEnumerable;function aw(t){if(t==null)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}function lw(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de",Object.getOwnPropertyNames(t)[0]==="5")return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;var r=Object.getOwnPropertyNames(e).map(function(s){return e[s]});if(r.join("")!=="0123456789")return!1;var i={};return"abcdefghijklmnopqrst".split("").forEach(function(s){i[s]=s}),Object.keys(Object.assign({},i)).join("")==="abcdefghijklmnopqrst"}catch{return!1}}var yy=lw()?Object.assign:function(t,e){for(var n,r=aw(t),i,s=1;s<arguments.length;s++){n=Object(arguments[s]);for(var o in n)sw.call(n,o)&&(r[o]=n[o]);if(cp){i=cp(n);for(var l=0;l<i.length;l++)ow.call(n,i[l])&&(r[i[l]]=n[i[l]])}}return r},vy={exports:{}},ie={};/** @license React v17.0.2
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Rh=yy,Ai=60103,_y=60106;ie.Fragment=60107;ie.StrictMode=60108;ie.Profiler=60114;var Ey=60109,wy=60110,Ty=60112;ie.Suspense=60113;var Iy=60115,Sy=60116;if(typeof Symbol=="function"&&Symbol.for){var Et=Symbol.for;Ai=Et("react.element"),_y=Et("react.portal"),ie.Fragment=Et("react.fragment"),ie.StrictMode=Et("react.strict_mode"),ie.Profiler=Et("react.profiler"),Ey=Et("react.provider"),wy=Et("react.context"),Ty=Et("react.forward_ref"),ie.Suspense=Et("react.suspense"),Iy=Et("react.memo"),Sy=Et("react.lazy")}var hp=typeof Symbol=="function"&&Symbol.iterator;function uw(t){return t===null||typeof t!="object"?null:(t=hp&&t[hp]||t["@@iterator"],typeof t=="function"?t:null)}function co(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var xy={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Cy={};function Ri(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||xy}Ri.prototype.isReactComponent={};Ri.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error(co(85));this.updater.enqueueSetState(this,t,e,"setState")};Ri.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Ay(){}Ay.prototype=Ri.prototype;function Ph(t,e,n){this.props=t,this.context=e,this.refs=Cy,this.updater=n||xy}var kh=Ph.prototype=new Ay;kh.constructor=Ph;Rh(kh,Ri.prototype);kh.isPureReactComponent=!0;var Nh={current:null},Ry=Object.prototype.hasOwnProperty,Py={key:!0,ref:!0,__self:!0,__source:!0};function ky(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)Ry.call(e,r)&&!Py.hasOwnProperty(r)&&(i[r]=e[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var u=Array(l),h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}if(t&&t.defaultProps)for(r in l=t.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:Ai,type:t,key:s,ref:o,props:i,_owner:Nh.current}}function cw(t,e){return{$$typeof:Ai,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function bh(t){return typeof t=="object"&&t!==null&&t.$$typeof===Ai}function hw(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var dp=/\/+/g;function Cu(t,e){return typeof t=="object"&&t!==null&&t.key!=null?hw(""+t.key):e.toString(36)}function ma(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case Ai:case _y:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Cu(o,0):r,Array.isArray(i)?(n="",t!=null&&(n=t.replace(dp,"$&/")+"/"),ma(i,e,n,"",function(h){return h})):i!=null&&(bh(i)&&(i=cw(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(dp,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Array.isArray(t))for(var l=0;l<t.length;l++){s=t[l];var u=r+Cu(s,l);o+=ma(s,e,n,u,i)}else if(u=uw(t),typeof u=="function")for(t=u.call(t),l=0;!(s=t.next()).done;)s=s.value,u=r+Cu(s,l++),o+=ma(s,e,n,u,i);else if(s==="object")throw e=""+t,Error(co(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e));return o}function Go(t,e,n){if(t==null)return t;var r=[],i=0;return ma(t,r,"","",function(s){return e.call(n,s,i++)}),r}function dw(t){if(t._status===-1){var e=t._result;e=e(),t._status=0,t._result=e,e.then(function(n){t._status===0&&(n=n.default,t._status=1,t._result=n)},function(n){t._status===0&&(t._status=2,t._result=n)})}if(t._status===1)return t._result;throw t._result}var Ny={current:null};function an(){var t=Ny.current;if(t===null)throw Error(co(321));return t}var fw={ReactCurrentDispatcher:Ny,ReactCurrentBatchConfig:{transition:0},ReactCurrentOwner:Nh,IsSomeRendererActing:{current:!1},assign:Rh};ie.Children={map:Go,forEach:function(t,e,n){Go(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Go(t,function(){e++}),e},toArray:function(t){return Go(t,function(e){return e})||[]},only:function(t){if(!bh(t))throw Error(co(143));return t}};ie.Component=Ri;ie.PureComponent=Ph;ie.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fw;ie.cloneElement=function(t,e,n){if(t==null)throw Error(co(267,t));var r=Rh({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Nh.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var l=t.type.defaultProps;for(u in e)Ry.call(e,u)&&!Py.hasOwnProperty(u)&&(r[u]=e[u]===void 0&&l!==void 0?l[u]:e[u])}var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){l=Array(u);for(var h=0;h<u;h++)l[h]=arguments[h+2];r.children=l}return{$$typeof:Ai,type:t.type,key:i,ref:s,props:r,_owner:o}};ie.createContext=function(t,e){return e===void 0&&(e=null),t={$$typeof:wy,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider={$$typeof:Ey,_context:t},t.Consumer=t};ie.createElement=ky;ie.createFactory=function(t){var e=ky.bind(null,t);return e.type=t,e};ie.createRef=function(){return{current:null}};ie.forwardRef=function(t){return{$$typeof:Ty,render:t}};ie.isValidElement=bh;ie.lazy=function(t){return{$$typeof:Sy,_payload:{_status:-1,_result:t},_init:dw}};ie.memo=function(t,e){return{$$typeof:Iy,type:t,compare:e===void 0?null:e}};ie.useCallback=function(t,e){return an().useCallback(t,e)};ie.useContext=function(t,e){return an().useContext(t,e)};ie.useDebugValue=function(){};ie.useEffect=function(t,e){return an().useEffect(t,e)};ie.useImperativeHandle=function(t,e,n){return an().useImperativeHandle(t,e,n)};ie.useLayoutEffect=function(t,e){return an().useLayoutEffect(t,e)};ie.useMemo=function(t,e){return an().useMemo(t,e)};ie.useReducer=function(t,e,n){return an().useReducer(t,e,n)};ie.useRef=function(t){return an().useRef(t)};ie.useState=function(t){return an().useState(t)};ie.version="17.0.2";vy.exports=ie;var j=vy.exports;const by=my(j),pw=iw({__proto__:null,default:by},[j]);/** @license React v17.0.2
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mw=j,Oy=60103;uo.Fragment=60107;if(typeof Symbol=="function"&&Symbol.for){var fp=Symbol.for;Oy=fp("react.element"),uo.Fragment=fp("react.fragment")}var gw=mw.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,yw=Object.prototype.hasOwnProperty,vw={key:!0,ref:!0,__self:!0,__source:!0};function Dy(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)yw.call(e,r)&&!vw.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:Oy,type:t,key:s,ref:o,props:i,_owner:gw.current}}uo.jsx=Dy;uo.jsxs=Dy;gy.exports=uo;var p=gy.exports,Ly={exports:{}},vt={},Vy={exports:{}},My={};/** @license React v0.20.2
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){var e,n,r,i;if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,l=o.now();t.unstable_now=function(){return o.now()-l}}if(typeof window>"u"||typeof MessageChannel!="function"){var u=null,h=null,f=function(){if(u!==null)try{var B=t.unstable_now();u(!0,B),u=null}catch(W){throw setTimeout(f,0),W}};e=function(B){u!==null?setTimeout(e,0,B):(u=B,setTimeout(f,0))},n=function(B,W){h=setTimeout(B,W)},r=function(){clearTimeout(h)},t.unstable_shouldYield=function(){return!1},i=t.unstable_forceFrameRate=function(){}}else{var v=window.setTimeout,g=window.clearTimeout;if(typeof console<"u"){var C=window.cancelAnimationFrame;typeof window.requestAnimationFrame!="function"&&console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"),typeof C!="function"&&console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills")}var b=!1,O=null,y=-1,w=5,I=0;t.unstable_shouldYield=function(){return t.unstable_now()>=I},i=function(){},t.unstable_forceFrameRate=function(B){0>B||125<B?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):w=0<B?Math.floor(1e3/B):5};var R=new MessageChannel,N=R.port2;R.port1.onmessage=function(){if(O!==null){var B=t.unstable_now();I=B+w;try{O(!0,B)?N.postMessage(null):(b=!1,O=null)}catch(W){throw N.postMessage(null),W}}else b=!1},e=function(B){O=B,b||(b=!0,N.postMessage(null))},n=function(B,W){y=v(function(){B(t.unstable_now())},W)},r=function(){g(y),y=-1}}function z(B,W){var q=B.length;B.push(W);e:for(;;){var de=q-1>>>1,fe=B[de];if(fe!==void 0&&0<_(fe,W))B[de]=W,B[q]=fe,q=de;else break e}}function V(B){return B=B[0],B===void 0?null:B}function S(B){var W=B[0];if(W!==void 0){var q=B.pop();if(q!==W){B[0]=q;e:for(var de=0,fe=B.length;de<fe;){var Wt=2*(de+1)-1,lt=B[Wt],nr=Wt+1,un=B[nr];if(lt!==void 0&&0>_(lt,q))un!==void 0&&0>_(un,lt)?(B[de]=un,B[nr]=q,de=nr):(B[de]=lt,B[Wt]=q,de=Wt);else if(un!==void 0&&0>_(un,q))B[de]=un,B[nr]=q,de=nr;else break e}}return W}return null}function _(B,W){var q=B.sortIndex-W.sortIndex;return q!==0?q:B.id-W.id}var E=[],x=[],A=1,P=null,T=3,Ze=!1,at=!1,er=!1;function $t(B){for(var W=V(x);W!==null;){if(W.callback===null)S(x);else if(W.startTime<=B)S(x),W.sortIndex=W.expirationTime,z(E,W);else break;W=V(x)}}function Ht(B){if(er=!1,$t(B),!at)if(V(E)!==null)at=!0,e(tr);else{var W=V(x);W!==null&&n(Ht,W.startTime-B)}}function tr(B,W){at=!1,er&&(er=!1,r()),Ze=!0;var q=T;try{for($t(W),P=V(E);P!==null&&(!(P.expirationTime>W)||B&&!t.unstable_shouldYield());){var de=P.callback;if(typeof de=="function"){P.callback=null,T=P.priorityLevel;var fe=de(P.expirationTime<=W);W=t.unstable_now(),typeof fe=="function"?P.callback=fe:P===V(E)&&S(E),$t(W)}else S(E);P=V(E)}if(P!==null)var Wt=!0;else{var lt=V(x);lt!==null&&n(Ht,lt.startTime-W),Wt=!1}return Wt}finally{P=null,T=q,Ze=!1}}var Po=i;t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(B){B.callback=null},t.unstable_continueExecution=function(){at||Ze||(at=!0,e(tr))},t.unstable_getCurrentPriorityLevel=function(){return T},t.unstable_getFirstCallbackNode=function(){return V(E)},t.unstable_next=function(B){switch(T){case 1:case 2:case 3:var W=3;break;default:W=T}var q=T;T=W;try{return B()}finally{T=q}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=Po,t.unstable_runWithPriority=function(B,W){switch(B){case 1:case 2:case 3:case 4:case 5:break;default:B=3}var q=T;T=B;try{return W()}finally{T=q}},t.unstable_scheduleCallback=function(B,W,q){var de=t.unstable_now();switch(typeof q=="object"&&q!==null?(q=q.delay,q=typeof q=="number"&&0<q?de+q:de):q=de,B){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=q+fe,B={id:A++,callback:W,priorityLevel:B,startTime:q,expirationTime:fe,sortIndex:-1},q>de?(B.sortIndex=q,z(x,B),V(E)===null&&B===V(x)&&(er?r():er=!0,n(Ht,q-de))):(B.sortIndex=fe,z(E,B),at||Ze||(at=!0,e(tr))),B},t.unstable_wrapCallback=function(B){var W=T;return function(){var q=T;T=W;try{return B.apply(this,arguments)}finally{T=q}}}})(My);Vy.exports=My;var _w=Vy.exports;/** @license React v17.0.2
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sl=j,he=yy,ke=_w;function M(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}if(!Sl)throw Error(M(227));var jy=new Set,Fs={};function Cr(t,e){gi(t,e),gi(t+"Capture",e)}function gi(t,e){for(Fs[t]=e,t=0;t<e.length;t++)jy.add(e[t])}var nn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Ew=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,pp=Object.prototype.hasOwnProperty,mp={},gp={};function ww(t){return pp.call(gp,t)?!0:pp.call(mp,t)?!1:Ew.test(t)?gp[t]=!0:(mp[t]=!0,!1)}function Tw(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function Iw(t,e,n,r){if(e===null||typeof e>"u"||Tw(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Je(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Le={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Le[t]=new Je(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Le[e]=new Je(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Le[t]=new Je(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Le[t]=new Je(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Le[t]=new Je(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Le[t]=new Je(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Le[t]=new Je(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Le[t]=new Je(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Le[t]=new Je(t,5,!1,t.toLowerCase(),null,!1,!1)});var Oh=/[\-:]([a-z])/g;function Dh(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(Oh,Dh);Le[e]=new Je(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(Oh,Dh);Le[e]=new Je(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(Oh,Dh);Le[e]=new Je(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Le[t]=new Je(t,1,!1,t.toLowerCase(),null,!1,!1)});Le.xlinkHref=new Je("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Le[t]=new Je(t,1,!1,t.toLowerCase(),null,!0,!0)});function Lh(t,e,n,r){var i=Le.hasOwnProperty(e)?Le[e]:null,s=i!==null?i.type===0:r?!1:!(!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N");s||(Iw(e,n,i,r)&&(n=null),r||i===null?ww(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var Ar=Sl.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,ds=60103,ur=60106,mn=60107,Vh=60108,Ts=60114,Mh=60109,jh=60110,xl=60112,Is=60113,La=60120,Cl=60115,Uh=60116,Fh=60121,Bh=60128,Uy=60129,zh=60130,cc=60131;if(typeof Symbol=="function"&&Symbol.for){var Re=Symbol.for;ds=Re("react.element"),ur=Re("react.portal"),mn=Re("react.fragment"),Vh=Re("react.strict_mode"),Ts=Re("react.profiler"),Mh=Re("react.provider"),jh=Re("react.context"),xl=Re("react.forward_ref"),Is=Re("react.suspense"),La=Re("react.suspense_list"),Cl=Re("react.memo"),Uh=Re("react.lazy"),Fh=Re("react.block"),Re("react.scope"),Bh=Re("react.opaque.id"),Uy=Re("react.debug_trace_mode"),zh=Re("react.offscreen"),cc=Re("react.legacy_hidden")}var yp=typeof Symbol=="function"&&Symbol.iterator;function Zi(t){return t===null||typeof t!="object"?null:(t=yp&&t[yp]||t["@@iterator"],typeof t=="function"?t:null)}var Au;function fs(t){if(Au===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Au=e&&e[1]||""}return`
`+Au+t}var Ru=!1;function Qo(t,e){if(!t||Ru)return"";Ru=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,l=s.length-1;1<=o&&0<=l&&i[o]!==s[l];)l--;for(;1<=o&&0<=l;o--,l--)if(i[o]!==s[l]){if(o!==1||l!==1)do if(o--,l--,0>l||i[o]!==s[l])return`
`+i[o].replace(" at new "," at ");while(1<=o&&0<=l);break}}}finally{Ru=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?fs(t):""}function Sw(t){switch(t.tag){case 5:return fs(t.type);case 16:return fs("Lazy");case 13:return fs("Suspense");case 19:return fs("SuspenseList");case 0:case 2:case 15:return t=Qo(t.type,!1),t;case 11:return t=Qo(t.type.render,!1),t;case 22:return t=Qo(t.type._render,!1),t;case 1:return t=Qo(t.type,!0),t;default:return""}}function ei(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case mn:return"Fragment";case ur:return"Portal";case Ts:return"Profiler";case Vh:return"StrictMode";case Is:return"Suspense";case La:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case jh:return(t.displayName||"Context")+".Consumer";case Mh:return(t._context.displayName||"Context")+".Provider";case xl:var e=t.render;return e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case Cl:return ei(t.type);case Fh:return ei(t._render);case Uh:e=t._payload,t=t._init;try{return ei(t(e))}catch{}}return null}function jn(t){switch(typeof t){case"boolean":case"number":case"object":case"string":case"undefined":return t;default:return""}}function Fy(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function xw(t){var e=Fy(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Yo(t){t._valueTracker||(t._valueTracker=xw(t))}function By(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=Fy(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function Va(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function hc(t,e){var n=e.checked;return he({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function vp(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=jn(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function zy(t,e){e=e.checked,e!=null&&Lh(t,"checked",e,!1)}function dc(t,e){zy(t,e);var n=jn(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?fc(t,e.type,n):e.hasOwnProperty("defaultValue")&&fc(t,e.type,jn(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function _p(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function fc(t,e,n){(e!=="number"||Va(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}function Cw(t){var e="";return Sl.Children.forEach(t,function(n){n!=null&&(e+=n)}),e}function pc(t,e){return t=he({children:void 0},e),(e=Cw(e.children))&&(t.children=e),t}function ti(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+jn(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function mc(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(M(91));return he({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Ep(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(M(92));if(Array.isArray(n)){if(!(1>=n.length))throw Error(M(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:jn(n)}}function $y(t,e){var n=jn(e.value),r=jn(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function wp(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}var gc={html:"http://www.w3.org/1999/xhtml",mathml:"http://www.w3.org/1998/Math/MathML",svg:"http://www.w3.org/2000/svg"};function Hy(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function yc(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Hy(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Xo,Wy=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!==gc.svg||"innerHTML"in t)t.innerHTML=e;else{for(Xo=Xo||document.createElement("div"),Xo.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Xo.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function Bs(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var Ss={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Aw=["Webkit","ms","Moz","O"];Object.keys(Ss).forEach(function(t){Aw.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),Ss[e]=Ss[t]})});function qy(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||Ss.hasOwnProperty(t)&&Ss[t]?(""+e).trim():e+"px"}function Ky(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=qy(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var Rw=he({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vc(t,e){if(e){if(Rw[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(M(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(M(60));if(!(typeof e.dangerouslySetInnerHTML=="object"&&"__html"in e.dangerouslySetInnerHTML))throw Error(M(61))}if(e.style!=null&&typeof e.style!="object")throw Error(M(62))}}function _c(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}function $h(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var Ec=null,ni=null,ri=null;function Tp(t){if(t=fo(t)){if(typeof Ec!="function")throw Error(M(280));var e=t.stateNode;e&&(e=bl(e),Ec(t.stateNode,t.type,e))}}function Gy(t){ni?ri?ri.push(t):ri=[t]:ni=t}function Qy(){if(ni){var t=ni,e=ri;if(ri=ni=null,Tp(t),e)for(t=0;t<e.length;t++)Tp(e[t])}}function Hh(t,e){return t(e)}function Yy(t,e,n,r,i){return t(e,n,r,i)}function Wh(){}var Xy=Hh,cr=!1,Pu=!1;function qh(){(ni!==null||ri!==null)&&(Wh(),Qy())}function Pw(t,e,n){if(Pu)return t(e,n);Pu=!0;try{return Xy(t,e,n)}finally{Pu=!1,qh()}}function zs(t,e){var n=t.stateNode;if(n===null)return null;var r=bl(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(M(231,e,typeof n));return n}var wc=!1;if(nn)try{var es={};Object.defineProperty(es,"passive",{get:function(){wc=!0}}),window.addEventListener("test",es,es),window.removeEventListener("test",es,es)}catch{wc=!1}function kw(t,e,n,r,i,s,o,l,u){var h=Array.prototype.slice.call(arguments,3);try{e.apply(n,h)}catch(f){this.onError(f)}}var xs=!1,Ma=null,ja=!1,Tc=null,Nw={onError:function(t){xs=!0,Ma=t}};function bw(t,e,n,r,i,s,o,l,u){xs=!1,Ma=null,kw.apply(Nw,arguments)}function Ow(t,e,n,r,i,s,o,l,u){if(bw.apply(this,arguments),xs){if(xs){var h=Ma;xs=!1,Ma=null}else throw Error(M(198));ja||(ja=!0,Tc=h)}}function Rr(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&1026&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function Jy(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Ip(t){if(Rr(t)!==t)throw Error(M(188))}function Dw(t){var e=t.alternate;if(!e){if(e=Rr(t),e===null)throw Error(M(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Ip(i),t;if(s===r)return Ip(i),e;s=s.sibling}throw Error(M(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,l=i.child;l;){if(l===n){o=!0,n=i,r=s;break}if(l===r){o=!0,r=i,n=s;break}l=l.sibling}if(!o){for(l=s.child;l;){if(l===n){o=!0,n=s,r=i;break}if(l===r){o=!0,r=s,n=i;break}l=l.sibling}if(!o)throw Error(M(189))}}if(n.alternate!==r)throw Error(M(190))}if(n.tag!==3)throw Error(M(188));return n.stateNode.current===n?t:e}function Zy(t){if(t=Dw(t),!t)return null;for(var e=t;;){if(e.tag===5||e.tag===6)return e;if(e.child)e.child.return=e,e=e.child;else{if(e===t)break;for(;!e.sibling;){if(!e.return||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}}return null}function Sp(t,e){for(var n=t.alternate;e!==null;){if(e===t||e===n)return!0;e=e.return}return!1}var ev,Kh,tv,nv,Ic=!1,Rt=[],Cn=null,An=null,Rn=null,$s=new Map,Hs=new Map,ts=[],xp="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sc(t,e,n,r,i){return{blockedOn:t,domEventName:e,eventSystemFlags:n|16,nativeEvent:i,targetContainers:[r]}}function Cp(t,e){switch(t){case"focusin":case"focusout":Cn=null;break;case"dragenter":case"dragleave":An=null;break;case"mouseover":case"mouseout":Rn=null;break;case"pointerover":case"pointerout":$s.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Hs.delete(e.pointerId)}}function ns(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t=Sc(e,n,r,i,s),e!==null&&(e=fo(e),e!==null&&Kh(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function Lw(t,e,n,r,i){switch(e){case"focusin":return Cn=ns(Cn,t,e,n,r,i),!0;case"dragenter":return An=ns(An,t,e,n,r,i),!0;case"mouseover":return Rn=ns(Rn,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return $s.set(s,ns($s.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Hs.set(s,ns(Hs.get(s)||null,t,e,n,r,i)),!0}return!1}function Vw(t){var e=hr(t.target);if(e!==null){var n=Rr(e);if(n!==null){if(e=n.tag,e===13){if(e=Jy(n),e!==null){t.blockedOn=e,nv(t.lanePriority,function(){ke.unstable_runWithPriority(t.priority,function(){tv(n)})});return}}else if(e===3&&n.stateNode.hydrate){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function ga(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=Xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null)return e=fo(n),e!==null&&Kh(e),t.blockedOn=n,!1;e.shift()}return!0}function Ap(t,e,n){ga(t)&&n.delete(e)}function Mw(){for(Ic=!1;0<Rt.length;){var t=Rt[0];if(t.blockedOn!==null){t=fo(t.blockedOn),t!==null&&ev(t);break}for(var e=t.targetContainers;0<e.length;){var n=Xh(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n!==null){t.blockedOn=n;break}e.shift()}t.blockedOn===null&&Rt.shift()}Cn!==null&&ga(Cn)&&(Cn=null),An!==null&&ga(An)&&(An=null),Rn!==null&&ga(Rn)&&(Rn=null),$s.forEach(Ap),Hs.forEach(Ap)}function rs(t,e){t.blockedOn===e&&(t.blockedOn=null,Ic||(Ic=!0,ke.unstable_scheduleCallback(ke.unstable_NormalPriority,Mw)))}function rv(t){function e(i){return rs(i,t)}if(0<Rt.length){rs(Rt[0],t);for(var n=1;n<Rt.length;n++){var r=Rt[n];r.blockedOn===t&&(r.blockedOn=null)}}for(Cn!==null&&rs(Cn,t),An!==null&&rs(An,t),Rn!==null&&rs(Rn,t),$s.forEach(e),Hs.forEach(e),n=0;n<ts.length;n++)r=ts[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<ts.length&&(n=ts[0],n.blockedOn===null);)Vw(n),n.blockedOn===null&&ts.shift()}function Jo(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Kr={animationend:Jo("Animation","AnimationEnd"),animationiteration:Jo("Animation","AnimationIteration"),animationstart:Jo("Animation","AnimationStart"),transitionend:Jo("Transition","TransitionEnd")},ku={},iv={};nn&&(iv=document.createElement("div").style,"AnimationEvent"in window||(delete Kr.animationend.animation,delete Kr.animationiteration.animation,delete Kr.animationstart.animation),"TransitionEvent"in window||delete Kr.transitionend.transition);function Al(t){if(ku[t])return ku[t];if(!Kr[t])return t;var e=Kr[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in iv)return ku[t]=e[n];return t}var sv=Al("animationend"),ov=Al("animationiteration"),av=Al("animationstart"),lv=Al("transitionend"),uv=new Map,Gh=new Map,jw=["abort","abort",sv,"animationEnd",ov,"animationIteration",av,"animationStart","canplay","canPlay","canplaythrough","canPlayThrough","durationchange","durationChange","emptied","emptied","encrypted","encrypted","ended","ended","error","error","gotpointercapture","gotPointerCapture","load","load","loadeddata","loadedData","loadedmetadata","loadedMetadata","loadstart","loadStart","lostpointercapture","lostPointerCapture","playing","playing","progress","progress","seeking","seeking","stalled","stalled","suspend","suspend","timeupdate","timeUpdate",lv,"transitionEnd","waiting","waiting"];function Qh(t,e){for(var n=0;n<t.length;n+=2){var r=t[n],i=t[n+1];i="on"+(i[0].toUpperCase()+i.slice(1)),Gh.set(r,e),uv.set(r,i),Cr(i,[r])}}var Uw=ke.unstable_now;Uw();var ae=8;function Br(t){if(1&t)return ae=15,1;if(2&t)return ae=14,2;if(4&t)return ae=13,4;var e=24&t;return e!==0?(ae=12,e):t&32?(ae=11,32):(e=192&t,e!==0?(ae=10,e):t&256?(ae=9,256):(e=3584&t,e!==0?(ae=8,e):t&4096?(ae=7,4096):(e=4186112&t,e!==0?(ae=6,e):(e=62914560&t,e!==0?(ae=5,e):t&67108864?(ae=4,67108864):t&134217728?(ae=3,134217728):(e=805306368&t,e!==0?(ae=2,e):1073741824&t?(ae=1,1073741824):(ae=8,t))))))}function Fw(t){switch(t){case 99:return 15;case 98:return 10;case 97:case 96:return 8;case 95:return 2;default:return 0}}function Bw(t){switch(t){case 15:case 14:return 99;case 13:case 12:case 11:case 10:return 98;case 9:case 8:case 7:case 6:case 4:case 5:return 97;case 3:case 2:case 1:return 95;case 0:return 90;default:throw Error(M(358,t))}}function Ws(t,e){var n=t.pendingLanes;if(n===0)return ae=0;var r=0,i=0,s=t.expiredLanes,o=t.suspendedLanes,l=t.pingedLanes;if(s!==0)r=s,i=ae=15;else if(s=n&134217727,s!==0){var u=s&~o;u!==0?(r=Br(u),i=ae):(l&=s,l!==0&&(r=Br(l),i=ae))}else s=n&~o,s!==0?(r=Br(s),i=ae):l!==0&&(r=Br(l),i=ae);if(r===0)return 0;if(r=31-Un(r),r=n&((0>r?0:1<<r)<<1)-1,e!==0&&e!==r&&!(e&o)){if(Br(e),i<=ae)return e;ae=i}if(e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-Un(e),i=1<<n,r|=t[n],e&=~i;return r}function cv(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function Ua(t,e){switch(t){case 15:return 1;case 14:return 2;case 12:return t=zr(24&~e),t===0?Ua(10,e):t;case 10:return t=zr(192&~e),t===0?Ua(8,e):t;case 8:return t=zr(3584&~e),t===0&&(t=zr(4186112&~e),t===0&&(t=512)),t;case 2:return e=zr(805306368&~e),e===0&&(e=268435456),e}throw Error(M(358,t))}function zr(t){return t&-t}function Nu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Rl(t,e,n){t.pendingLanes|=e;var r=e-1;t.suspendedLanes&=r,t.pingedLanes&=r,t=t.eventTimes,e=31-Un(e),t[e]=n}var Un=Math.clz32?Math.clz32:Hw,zw=Math.log,$w=Math.LN2;function Hw(t){return t===0?32:31-(zw(t)/$w|0)|0}var Ww=ke.unstable_UserBlockingPriority,qw=ke.unstable_runWithPriority,ya=!0;function Kw(t,e,n,r){cr||Wh();var i=Yh,s=cr;cr=!0;try{Yy(i,t,e,n,r)}finally{(cr=s)||qh()}}function Gw(t,e,n,r){qw(Ww,Yh.bind(null,t,e,n,r))}function Yh(t,e,n,r){if(ya){var i;if((i=(e&4)===0)&&0<Rt.length&&-1<xp.indexOf(t))t=Sc(null,t,e,n,r),Rt.push(t);else{var s=Xh(t,e,n,r);if(s===null)i&&Cp(t,r);else{if(i){if(-1<xp.indexOf(t)){t=Sc(s,t,e,n,r),Rt.push(t);return}if(Lw(s,t,e,n,r))return;Cp(t,r)}Iv(t,e,r,null,n)}}}}function Xh(t,e,n,r){var i=$h(r);if(i=hr(i),i!==null){var s=Rr(i);if(s===null)i=null;else{var o=s.tag;if(o===13){if(i=Jy(s),i!==null)return i;i=null}else if(o===3){if(s.stateNode.hydrate)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null)}}return Iv(t,e,r,i,n),null}var En=null,Jh=null,va=null;function hv(){if(va)return va;var t,e=Jh,n=e.length,r,i="value"in En?En.value:En.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return va=i.slice(t,1<r?1-r:void 0)}function _a(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function Zo(){return!0}function Rp(){return!1}function dt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var l in t)t.hasOwnProperty(l)&&(n=t[l],this[l]=n?n(s):s[l]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?Zo:Rp,this.isPropagationStopped=Rp,this}return he(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Zo)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Zo)},persist:function(){},isPersistent:Zo}),e}var Pi={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Zh=dt(Pi),ho=he({},Pi,{view:0,detail:0}),Qw=dt(ho),bu,Ou,is,Pl=he({},ho,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ed,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==is&&(is&&t.type==="mousemove"?(bu=t.screenX-is.screenX,Ou=t.screenY-is.screenY):Ou=bu=0,is=t),bu)},movementY:function(t){return"movementY"in t?t.movementY:Ou}}),Pp=dt(Pl),Yw=he({},Pl,{dataTransfer:0}),Xw=dt(Yw),Jw=he({},ho,{relatedTarget:0}),Du=dt(Jw),Zw=he({},Pi,{animationName:0,elapsedTime:0,pseudoElement:0}),e1=dt(Zw),t1=he({},Pi,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),n1=dt(t1),r1=he({},Pi,{data:0}),kp=dt(r1),i1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},s1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},o1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function a1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=o1[t])?!!e[t]:!1}function ed(){return a1}var l1=he({},ho,{key:function(t){if(t.key){var e=i1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=_a(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?s1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ed,charCode:function(t){return t.type==="keypress"?_a(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?_a(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),u1=dt(l1),c1=he({},Pl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Np=dt(c1),h1=he({},ho,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ed}),d1=dt(h1),f1=he({},Pi,{propertyName:0,elapsedTime:0,pseudoElement:0}),p1=dt(f1),m1=he({},Pl,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),g1=dt(m1),y1=[9,13,27,32],td=nn&&"CompositionEvent"in window,Cs=null;nn&&"documentMode"in document&&(Cs=document.documentMode);var v1=nn&&"TextEvent"in window&&!Cs,dv=nn&&(!td||Cs&&8<Cs&&11>=Cs),bp=String.fromCharCode(32),Op=!1;function fv(t,e){switch(t){case"keyup":return y1.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function pv(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Gr=!1;function _1(t,e){switch(t){case"compositionend":return pv(e);case"keypress":return e.which!==32?null:(Op=!0,bp);case"textInput":return t=e.data,t===bp&&Op?null:t;default:return null}}function E1(t,e){if(Gr)return t==="compositionend"||!td&&fv(t,e)?(t=hv(),va=Jh=En=null,Gr=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return dv&&e.locale!=="ko"?null:e.data;default:return null}}var w1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Dp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!w1[t.type]:e==="textarea"}function mv(t,e,n,r){Gy(r),e=Fa(e,"onChange"),0<e.length&&(n=new Zh("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var As=null,qs=null;function T1(t){Ev(t,0)}function kl(t){var e=Yr(t);if(By(e))return t}function I1(t,e){if(t==="change")return e}var gv=!1;if(nn){var Lu;if(nn){var Vu="oninput"in document;if(!Vu){var Lp=document.createElement("div");Lp.setAttribute("oninput","return;"),Vu=typeof Lp.oninput=="function"}Lu=Vu}else Lu=!1;gv=Lu&&(!document.documentMode||9<document.documentMode)}function Vp(){As&&(As.detachEvent("onpropertychange",yv),qs=As=null)}function yv(t){if(t.propertyName==="value"&&kl(qs)){var e=[];if(mv(e,qs,t,$h(t)),t=T1,cr)t(e);else{cr=!0;try{Hh(t,e)}finally{cr=!1,qh()}}}}function S1(t,e,n){t==="focusin"?(Vp(),As=e,qs=n,As.attachEvent("onpropertychange",yv)):t==="focusout"&&Vp()}function x1(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return kl(qs)}function C1(t,e){if(t==="click")return kl(e)}function A1(t,e){if(t==="input"||t==="change")return kl(e)}function R1(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var ft=typeof Object.is=="function"?Object.is:R1,P1=Object.prototype.hasOwnProperty;function Ks(t,e){if(ft(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++)if(!P1.call(e,n[r])||!ft(t[n[r]],e[n[r]]))return!1;return!0}function Mp(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function jp(t,e){var n=Mp(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Mp(n)}}function vv(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?vv(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function Up(){for(var t=window,e=Va();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Va(t.document)}return e}function xc(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}var k1=nn&&"documentMode"in document&&11>=document.documentMode,Qr=null,Cc=null,Rs=null,Ac=!1;function Fp(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;Ac||Qr==null||Qr!==Va(r)||(r=Qr,"selectionStart"in r&&xc(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Rs&&Ks(Rs,r)||(Rs=r,r=Fa(Cc,"onSelect"),0<r.length&&(e=new Zh("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Qr)))}Qh("cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focusin focus focusout blur input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "),0);Qh("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "),1);Qh(jw,2);for(var Bp="change selectionchange textInput compositionstart compositionend compositionupdate".split(" "),Mu=0;Mu<Bp.length;Mu++)Gh.set(Bp[Mu],0);gi("onMouseEnter",["mouseout","mouseover"]);gi("onMouseLeave",["mouseout","mouseover"]);gi("onPointerEnter",["pointerout","pointerover"]);gi("onPointerLeave",["pointerout","pointerover"]);Cr("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Cr("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Cr("onBeforeInput",["compositionend","keypress","textInput","paste"]);Cr("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Cr("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ps="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),_v=new Set("cancel close invalid load scroll toggle".split(" ").concat(ps));function zp(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,Ow(r,e,void 0,t),t.currentTarget=null}function Ev(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var l=r[o],u=l.instance,h=l.currentTarget;if(l=l.listener,u!==s&&i.isPropagationStopped())break e;zp(i,l,h),s=u}else for(o=0;o<r.length;o++){if(l=r[o],u=l.instance,h=l.currentTarget,l=l.listener,u!==s&&i.isPropagationStopped())break e;zp(i,l,h),s=u}}}if(ja)throw t=Tc,ja=!1,Tc=null,t}function ue(t,e){var n=xv(e),r=t+"__bubble";n.has(r)||(Tv(e,t,2,!1),n.add(r))}var $p="_reactListening"+Math.random().toString(36).slice(2);function wv(t){t[$p]||(t[$p]=!0,jy.forEach(function(e){_v.has(e)||Hp(e,!1,t,null),Hp(e,!0,t,null)}))}function Hp(t,e,n,r){var i=4<arguments.length&&arguments[4]!==void 0?arguments[4]:0,s=n;if(t==="selectionchange"&&n.nodeType!==9&&(s=n.ownerDocument),r!==null&&!e&&_v.has(t)){if(t!=="scroll")return;i|=2,s=r}var o=xv(s),l=t+"__"+(e?"capture":"bubble");o.has(l)||(e&&(i|=4),Tv(s,t,i,e),o.add(l))}function Tv(t,e,n,r){var i=Gh.get(e);switch(i===void 0?2:i){case 0:i=Kw;break;case 1:i=Gw;break;default:i=Yh}n=i.bind(null,e,n,t),i=void 0,!wc||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function Iv(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var u=o.tag;if((u===3||u===4)&&(u=o.stateNode.containerInfo,u===i||u.nodeType===8&&u.parentNode===i))return;o=o.return}for(;l!==null;){if(o=hr(l),o===null)return;if(u=o.tag,u===5||u===6){r=s=o;continue e}l=l.parentNode}}r=r.return}Pw(function(){var h=s,f=$h(n),v=[];e:{var g=uv.get(t);if(g!==void 0){var C=Zh,b=t;switch(t){case"keypress":if(_a(n)===0)break e;case"keydown":case"keyup":C=u1;break;case"focusin":b="focus",C=Du;break;case"focusout":b="blur",C=Du;break;case"beforeblur":case"afterblur":C=Du;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":C=Pp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":C=Xw;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":C=d1;break;case sv:case ov:case av:C=e1;break;case lv:C=p1;break;case"scroll":C=Qw;break;case"wheel":C=g1;break;case"copy":case"cut":case"paste":C=n1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":C=Np}var O=(e&4)!==0,y=!O&&t==="scroll",w=O?g!==null?g+"Capture":null:g;O=[];for(var I=h,R;I!==null;){R=I;var N=R.stateNode;if(R.tag===5&&N!==null&&(R=N,w!==null&&(N=zs(I,w),N!=null&&O.push(Gs(I,N,R)))),y)break;I=I.return}0<O.length&&(g=new C(g,b,null,n,f),v.push({event:g,listeners:O}))}}if(!(e&7)){e:{if(g=t==="mouseover"||t==="pointerover",C=t==="mouseout"||t==="pointerout",g&&!(e&16)&&(b=n.relatedTarget||n.fromElement)&&(hr(b)||b[ki]))break e;if((C||g)&&(g=f.window===f?f:(g=f.ownerDocument)?g.defaultView||g.parentWindow:window,C?(b=n.relatedTarget||n.toElement,C=h,b=b?hr(b):null,b!==null&&(y=Rr(b),b!==y||b.tag!==5&&b.tag!==6)&&(b=null)):(C=null,b=h),C!==b)){if(O=Pp,N="onMouseLeave",w="onMouseEnter",I="mouse",(t==="pointerout"||t==="pointerover")&&(O=Np,N="onPointerLeave",w="onPointerEnter",I="pointer"),y=C==null?g:Yr(C),R=b==null?g:Yr(b),g=new O(N,I+"leave",C,n,f),g.target=y,g.relatedTarget=R,N=null,hr(f)===h&&(O=new O(w,I+"enter",b,n,f),O.target=R,O.relatedTarget=y,N=O),y=N,C&&b)t:{for(O=C,w=b,I=0,R=O;R;R=Fr(R))I++;for(R=0,N=w;N;N=Fr(N))R++;for(;0<I-R;)O=Fr(O),I--;for(;0<R-I;)w=Fr(w),R--;for(;I--;){if(O===w||w!==null&&O===w.alternate)break t;O=Fr(O),w=Fr(w)}O=null}else O=null;C!==null&&Wp(v,g,C,O,!1),b!==null&&y!==null&&Wp(v,y,b,O,!0)}}e:{if(g=h?Yr(h):window,C=g.nodeName&&g.nodeName.toLowerCase(),C==="select"||C==="input"&&g.type==="file")var z=I1;else if(Dp(g))if(gv)z=A1;else{z=x1;var V=S1}else(C=g.nodeName)&&C.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(z=C1);if(z&&(z=z(t,h))){mv(v,z,n,f);break e}V&&V(t,g,h),t==="focusout"&&(V=g._wrapperState)&&V.controlled&&g.type==="number"&&fc(g,"number",g.value)}switch(V=h?Yr(h):window,t){case"focusin":(Dp(V)||V.contentEditable==="true")&&(Qr=V,Cc=h,Rs=null);break;case"focusout":Rs=Cc=Qr=null;break;case"mousedown":Ac=!0;break;case"contextmenu":case"mouseup":case"dragend":Ac=!1,Fp(v,n,f);break;case"selectionchange":if(k1)break;case"keydown":case"keyup":Fp(v,n,f)}var S;if(td)e:{switch(t){case"compositionstart":var _="onCompositionStart";break e;case"compositionend":_="onCompositionEnd";break e;case"compositionupdate":_="onCompositionUpdate";break e}_=void 0}else Gr?fv(t,n)&&(_="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(_="onCompositionStart");_&&(dv&&n.locale!=="ko"&&(Gr||_!=="onCompositionStart"?_==="onCompositionEnd"&&Gr&&(S=hv()):(En=f,Jh="value"in En?En.value:En.textContent,Gr=!0)),V=Fa(h,_),0<V.length&&(_=new kp(_,t,null,n,f),v.push({event:_,listeners:V}),S?_.data=S:(S=pv(n),S!==null&&(_.data=S)))),(S=v1?_1(t,n):E1(t,n))&&(h=Fa(h,"onBeforeInput"),0<h.length&&(f=new kp("onBeforeInput","beforeinput",null,n,f),v.push({event:f,listeners:h}),f.data=S))}Ev(v,e)})}function Gs(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Fa(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=zs(t,n),s!=null&&r.unshift(Gs(t,s,i)),s=zs(t,e),s!=null&&r.push(Gs(t,s,i))),t=t.return}return r}function Fr(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Wp(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var l=n,u=l.alternate,h=l.stateNode;if(u!==null&&u===r)break;l.tag===5&&h!==null&&(l=h,i?(u=zs(n,s),u!=null&&o.unshift(Gs(n,u,l))):i||(u=zs(n,s),u!=null&&o.push(Gs(n,u,l)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}function Ba(){}var ju=null,Uu=null;function Sv(t,e){switch(t){case"button":case"input":case"select":case"textarea":return!!e.autoFocus}return!1}function Rc(t,e){return t==="textarea"||t==="option"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var qp=typeof setTimeout=="function"?setTimeout:void 0,N1=typeof clearTimeout=="function"?clearTimeout:void 0;function nd(t){t.nodeType===1?t.textContent="":t.nodeType===9&&(t=t.body,t!=null&&(t.textContent=""))}function ii(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break}return t}function Kp(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Fu=0;function b1(t){return{$$typeof:Bh,toString:t,valueOf:t}}var Nl=Math.random().toString(36).slice(2),wn="__reactFiber$"+Nl,za="__reactProps$"+Nl,ki="__reactContainer$"+Nl,Gp="__reactEvents$"+Nl;function hr(t){var e=t[wn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[ki]||n[wn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Kp(t);t!==null;){if(n=t[wn])return n;t=Kp(t)}return e}t=n,n=t.parentNode}return null}function fo(t){return t=t[wn]||t[ki],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Yr(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(M(33))}function bl(t){return t[za]||null}function xv(t){var e=t[Gp];return e===void 0&&(e=t[Gp]=new Set),e}var Pc=[],Xr=-1;function Yn(t){return{current:t}}function ce(t){0>Xr||(t.current=Pc[Xr],Pc[Xr]=null,Xr--)}function ve(t,e){Xr++,Pc[Xr]=t.current,t.current=e}var Fn={},qe=Yn(Fn),it=Yn(!1),vr=Fn;function yi(t,e){var n=t.type.contextTypes;if(!n)return Fn;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function st(t){return t=t.childContextTypes,t!=null}function $a(){ce(it),ce(qe)}function Qp(t,e,n){if(qe.current!==Fn)throw Error(M(168));ve(qe,e),ve(it,n)}function Cv(t,e,n){var r=t.stateNode;if(t=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(M(108,ei(e)||"Unknown",i));return he({},n,r)}function Ea(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Fn,vr=qe.current,ve(qe,t),ve(it,it.current),!0}function Yp(t,e,n){var r=t.stateNode;if(!r)throw Error(M(169));n?(t=Cv(t,e,vr),r.__reactInternalMemoizedMergedChildContext=t,ce(it),ce(qe),ve(qe,t)):ce(it),ve(it,n)}var rd=null,mr=null,O1=ke.unstable_runWithPriority,id=ke.unstable_scheduleCallback,kc=ke.unstable_cancelCallback,D1=ke.unstable_shouldYield,Xp=ke.unstable_requestPaint,Nc=ke.unstable_now,L1=ke.unstable_getCurrentPriorityLevel,Ol=ke.unstable_ImmediatePriority,Av=ke.unstable_UserBlockingPriority,Rv=ke.unstable_NormalPriority,Pv=ke.unstable_LowPriority,kv=ke.unstable_IdlePriority,Bu={},V1=Xp!==void 0?Xp:function(){},Gt=null,wa=null,zu=!1,Jp=Nc(),He=1e4>Jp?Nc:function(){return Nc()-Jp};function vi(){switch(L1()){case Ol:return 99;case Av:return 98;case Rv:return 97;case Pv:return 96;case kv:return 95;default:throw Error(M(332))}}function Nv(t){switch(t){case 99:return Ol;case 98:return Av;case 97:return Rv;case 96:return Pv;case 95:return kv;default:throw Error(M(332))}}function _r(t,e){return t=Nv(t),O1(t,e)}function Qs(t,e,n){return t=Nv(t),id(t,e,n)}function Ft(){if(wa!==null){var t=wa;wa=null,kc(t)}bv()}function bv(){if(!zu&&Gt!==null){zu=!0;var t=0;try{var e=Gt;_r(99,function(){for(;t<e.length;t++){var n=e[t];do n=n(!0);while(n!==null)}}),Gt=null}catch(n){throw Gt!==null&&(Gt=Gt.slice(t+1)),id(Ol,Ft),n}finally{zu=!1}}}var M1=Ar.ReactCurrentBatchConfig;function wt(t,e){if(t&&t.defaultProps){e=he({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var Ha=Yn(null),Wa=null,Jr=null,qa=null;function sd(){qa=Jr=Wa=null}function od(t){var e=Ha.current;ce(Ha),t.type._context._currentValue=e}function Ov(t,e){for(;t!==null;){var n=t.alternate;if((t.childLanes&e)===e){if(n===null||(n.childLanes&e)===e)break;n.childLanes|=e}else t.childLanes|=e,n!==null&&(n.childLanes|=e);t=t.return}}function si(t,e){Wa=t,qa=Jr=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tt=!0),t.firstContext=null)}function gt(t,e){if(qa!==t&&e!==!1&&e!==0)if((typeof e!="number"||e===1073741823)&&(qa=t,e=1073741823),e={context:t,observedBits:e,next:null},Jr===null){if(Wa===null)throw Error(M(308));Jr=e,Wa.dependencies={lanes:0,firstContext:e,responders:null}}else Jr=Jr.next=e;return t._currentValue}var pn=!1;function ad(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null},effects:null}}function Dv(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Pn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function kn(t,e){if(t=t.updateQueue,t!==null){t=t.shared;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}}function Zp(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function Ys(t,e,n,r){var i=t.updateQueue;pn=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var u=l,h=u.next;u.next=null,o===null?s=h:o.next=h,o=u;var f=t.alternate;if(f!==null){f=f.updateQueue;var v=f.lastBaseUpdate;v!==o&&(v===null?f.firstBaseUpdate=h:v.next=h,f.lastBaseUpdate=u)}}if(s!==null){v=i.baseState,o=0,f=h=u=null;do{l=s.lane;var g=s.eventTime;if((r&l)===l){f!==null&&(f=f.next={eventTime:g,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var C=t,b=s;switch(l=e,g=n,b.tag){case 1:if(C=b.payload,typeof C=="function"){v=C.call(g,v,l);break e}v=C;break e;case 3:C.flags=C.flags&-4097|64;case 0:if(C=b.payload,l=typeof C=="function"?C.call(g,v,l):C,l==null)break e;v=he({},v,l);break e;case 2:pn=!0}}s.callback!==null&&(t.flags|=32,l=i.effects,l===null?i.effects=[s]:l.push(s))}else g={eventTime:g,lane:l,tag:s.tag,payload:s.payload,callback:s.callback,next:null},f===null?(h=f=g,u=v):f=f.next=g,o|=l;if(s=s.next,s===null){if(l=i.shared.pending,l===null)break;s=l.next,l.next=null,i.lastBaseUpdate=l,i.shared.pending=null}}while(1);f===null&&(u=v),i.baseState=u,i.firstBaseUpdate=h,i.lastBaseUpdate=f,mo|=o,t.lanes=o,t.memoizedState=v}}function em(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(M(191,i));i.call(r)}}}var Lv=new Sl.Component().refs;function Ka(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:he({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Dl={isMounted:function(t){return(t=t._reactInternals)?Rr(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=ht(),i=Nn(t),s=Pn(r,i);s.payload=e,n!=null&&(s.callback=n),kn(t,s),bn(t,i,r)},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=ht(),i=Nn(t),s=Pn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),kn(t,s),bn(t,i,r)},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=ht(),r=Nn(t),i=Pn(n,r);i.tag=2,e!=null&&(i.callback=e),kn(t,i),bn(t,r,n)}};function tm(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!Ks(n,r)||!Ks(i,s):!0}function Vv(t,e,n){var r=!1,i=Fn,s=e.contextType;return typeof s=="object"&&s!==null?s=gt(s):(i=st(e)?vr:qe.current,r=e.contextTypes,s=(r=r!=null)?yi(t,i):Fn),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Dl,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function nm(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Dl.enqueueReplaceState(e,e.state,null)}function bc(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=Lv,ad(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=gt(s):(s=st(e)?vr:qe.current,i.context=yi(t,s)),Ys(t,n,i,r),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Ka(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Dl.enqueueReplaceState(i,i.state,null),Ys(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4)}var ea=Array.isArray;function ss(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(M(309));var r=n.stateNode}if(!r)throw Error(M(147,t));var i=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===i?e.ref:(e=function(s){var o=r.refs;o===Lv&&(o=r.refs={}),s===null?delete o[i]:o[i]=s},e._stringRef=i,e)}if(typeof t!="string")throw Error(M(284));if(!n._owner)throw Error(M(290,t))}return t}function ta(t,e){if(t.type!=="textarea")throw Error(M(31,Object.prototype.toString.call(e)==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":e))}function Mv(t){function e(y,w){if(t){var I=y.lastEffect;I!==null?(I.nextEffect=w,y.lastEffect=w):y.firstEffect=y.lastEffect=w,w.nextEffect=null,w.flags=8}}function n(y,w){if(!t)return null;for(;w!==null;)e(y,w),w=w.sibling;return null}function r(y,w){for(y=new Map;w!==null;)w.key!==null?y.set(w.key,w):y.set(w.index,w),w=w.sibling;return y}function i(y,w){return y=zn(y,w),y.index=0,y.sibling=null,y}function s(y,w,I){return y.index=I,t?(I=y.alternate,I!==null?(I=I.index,I<w?(y.flags=2,w):I):(y.flags=2,w)):w}function o(y){return t&&y.alternate===null&&(y.flags=2),y}function l(y,w,I,R){return w===null||w.tag!==6?(w=Ku(I,y.mode,R),w.return=y,w):(w=i(w,I),w.return=y,w)}function u(y,w,I,R){return w!==null&&w.elementType===I.type?(R=i(w,I.props),R.ref=ss(y,w,I),R.return=y,R):(R=xa(I.type,I.key,I.props,null,y.mode,R),R.ref=ss(y,w,I),R.return=y,R)}function h(y,w,I,R){return w===null||w.tag!==4||w.stateNode.containerInfo!==I.containerInfo||w.stateNode.implementation!==I.implementation?(w=Gu(I,y.mode,R),w.return=y,w):(w=i(w,I.children||[]),w.return=y,w)}function f(y,w,I,R,N){return w===null||w.tag!==7?(w=ui(I,y.mode,R,N),w.return=y,w):(w=i(w,I),w.return=y,w)}function v(y,w,I){if(typeof w=="string"||typeof w=="number")return w=Ku(""+w,y.mode,I),w.return=y,w;if(typeof w=="object"&&w!==null){switch(w.$$typeof){case ds:return I=xa(w.type,w.key,w.props,null,y.mode,I),I.ref=ss(y,null,w),I.return=y,I;case ur:return w=Gu(w,y.mode,I),w.return=y,w}if(ea(w)||Zi(w))return w=ui(w,y.mode,I,null),w.return=y,w;ta(y,w)}return null}function g(y,w,I,R){var N=w!==null?w.key:null;if(typeof I=="string"||typeof I=="number")return N!==null?null:l(y,w,""+I,R);if(typeof I=="object"&&I!==null){switch(I.$$typeof){case ds:return I.key===N?I.type===mn?f(y,w,I.props.children,R,N):u(y,w,I,R):null;case ur:return I.key===N?h(y,w,I,R):null}if(ea(I)||Zi(I))return N!==null?null:f(y,w,I,R,null);ta(y,I)}return null}function C(y,w,I,R,N){if(typeof R=="string"||typeof R=="number")return y=y.get(I)||null,l(w,y,""+R,N);if(typeof R=="object"&&R!==null){switch(R.$$typeof){case ds:return y=y.get(R.key===null?I:R.key)||null,R.type===mn?f(w,y,R.props.children,N,R.key):u(w,y,R,N);case ur:return y=y.get(R.key===null?I:R.key)||null,h(w,y,R,N)}if(ea(R)||Zi(R))return y=y.get(I)||null,f(w,y,R,N,null);ta(w,R)}return null}function b(y,w,I,R){for(var N=null,z=null,V=w,S=w=0,_=null;V!==null&&S<I.length;S++){V.index>S?(_=V,V=null):_=V.sibling;var E=g(y,V,I[S],R);if(E===null){V===null&&(V=_);break}t&&V&&E.alternate===null&&e(y,V),w=s(E,w,S),z===null?N=E:z.sibling=E,z=E,V=_}if(S===I.length)return n(y,V),N;if(V===null){for(;S<I.length;S++)V=v(y,I[S],R),V!==null&&(w=s(V,w,S),z===null?N=V:z.sibling=V,z=V);return N}for(V=r(y,V);S<I.length;S++)_=C(V,y,S,I[S],R),_!==null&&(t&&_.alternate!==null&&V.delete(_.key===null?S:_.key),w=s(_,w,S),z===null?N=_:z.sibling=_,z=_);return t&&V.forEach(function(x){return e(y,x)}),N}function O(y,w,I,R){var N=Zi(I);if(typeof N!="function")throw Error(M(150));if(I=N.call(I),I==null)throw Error(M(151));for(var z=N=null,V=w,S=w=0,_=null,E=I.next();V!==null&&!E.done;S++,E=I.next()){V.index>S?(_=V,V=null):_=V.sibling;var x=g(y,V,E.value,R);if(x===null){V===null&&(V=_);break}t&&V&&x.alternate===null&&e(y,V),w=s(x,w,S),z===null?N=x:z.sibling=x,z=x,V=_}if(E.done)return n(y,V),N;if(V===null){for(;!E.done;S++,E=I.next())E=v(y,E.value,R),E!==null&&(w=s(E,w,S),z===null?N=E:z.sibling=E,z=E);return N}for(V=r(y,V);!E.done;S++,E=I.next())E=C(V,y,S,E.value,R),E!==null&&(t&&E.alternate!==null&&V.delete(E.key===null?S:E.key),w=s(E,w,S),z===null?N=E:z.sibling=E,z=E);return t&&V.forEach(function(A){return e(y,A)}),N}return function(y,w,I,R){var N=typeof I=="object"&&I!==null&&I.type===mn&&I.key===null;N&&(I=I.props.children);var z=typeof I=="object"&&I!==null;if(z)switch(I.$$typeof){case ds:e:{for(z=I.key,N=w;N!==null;){if(N.key===z){switch(N.tag){case 7:if(I.type===mn){n(y,N.sibling),w=i(N,I.props.children),w.return=y,y=w;break e}break;default:if(N.elementType===I.type){n(y,N.sibling),w=i(N,I.props),w.ref=ss(y,N,I),w.return=y,y=w;break e}}n(y,N);break}else e(y,N);N=N.sibling}I.type===mn?(w=ui(I.props.children,y.mode,R,I.key),w.return=y,y=w):(R=xa(I.type,I.key,I.props,null,y.mode,R),R.ref=ss(y,w,I),R.return=y,y=R)}return o(y);case ur:e:{for(N=I.key;w!==null;){if(w.key===N)if(w.tag===4&&w.stateNode.containerInfo===I.containerInfo&&w.stateNode.implementation===I.implementation){n(y,w.sibling),w=i(w,I.children||[]),w.return=y,y=w;break e}else{n(y,w);break}else e(y,w);w=w.sibling}w=Gu(I,y.mode,R),w.return=y,y=w}return o(y)}if(typeof I=="string"||typeof I=="number")return I=""+I,w!==null&&w.tag===6?(n(y,w.sibling),w=i(w,I),w.return=y,y=w):(n(y,w),w=Ku(I,y.mode,R),w.return=y,y=w),o(y);if(ea(I))return b(y,w,I,R);if(Zi(I))return O(y,w,I,R);if(z&&ta(y,I),typeof I>"u"&&!N)switch(y.tag){case 1:case 22:case 0:case 11:case 15:throw Error(M(152,ei(y.type)||"Component"))}return n(y,w)}}var Ga=Mv(!0),jv=Mv(!1),po={},Nt=Yn(po),Xs=Yn(po),Js=Yn(po);function dr(t){if(t===po)throw Error(M(174));return t}function Oc(t,e){switch(ve(Js,e),ve(Xs,t),ve(Nt,po),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:yc(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=yc(e,t)}ce(Nt),ve(Nt,e)}function _i(){ce(Nt),ce(Xs),ce(Js)}function rm(t){dr(Js.current);var e=dr(Nt.current),n=yc(e,t.type);e!==n&&(ve(Xs,t),ve(Nt,n))}function ld(t){Xs.current===t&&(ce(Nt),ce(Xs))}var ge=Yn(0);function Qa(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&64)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Yt=null,Tn=null,bt=!1;function Uv(t,e){var n=pt(5,null,null,0);n.elementType="DELETED",n.type="DELETED",n.stateNode=e,n.return=t,n.flags=8,t.lastEffect!==null?(t.lastEffect.nextEffect=n,t.lastEffect=n):t.firstEffect=t.lastEffect=n}function im(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,!0):!1;case 13:return!1;default:return!1}}function Dc(t){if(bt){var e=Tn;if(e){var n=e;if(!im(t,e)){if(e=ii(n.nextSibling),!e||!im(t,e)){t.flags=t.flags&-1025|2,bt=!1,Yt=t;return}Uv(Yt,n)}Yt=t,Tn=ii(e.firstChild)}else t.flags=t.flags&-1025|2,bt=!1,Yt=t}}function sm(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;Yt=t}function na(t){if(t!==Yt)return!1;if(!bt)return sm(t),bt=!0,!1;var e=t.type;if(t.tag!==5||e!=="head"&&e!=="body"&&!Rc(e,t.memoizedProps))for(e=Tn;e;)Uv(t,e),e=ii(e.nextSibling);if(sm(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(M(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Tn=ii(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Tn=null}}else Tn=Yt?ii(t.stateNode.nextSibling):null;return!0}function $u(){Tn=Yt=null,bt=!1}var oi=[];function ud(){for(var t=0;t<oi.length;t++)oi[t]._workInProgressVersionPrimary=null;oi.length=0}var Ps=Ar.ReactCurrentDispatcher,mt=Ar.ReactCurrentBatchConfig,Zs=0,Ee=null,Be=null,be=null,Ya=!1,ks=!1;function et(){throw Error(M(321))}function cd(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!ft(t[n],e[n]))return!1;return!0}function hd(t,e,n,r,i,s){if(Zs=s,Ee=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Ps.current=t===null||t.memoizedState===null?U1:F1,t=n(r,i),ks){s=0;do{if(ks=!1,!(25>s))throw Error(M(301));s+=1,be=Be=null,e.updateQueue=null,Ps.current=B1,t=n(r,i)}while(ks)}if(Ps.current=el,e=Be!==null&&Be.next!==null,Zs=0,be=Be=Ee=null,Ya=!1,e)throw Error(M(300));return t}function fr(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return be===null?Ee.memoizedState=be=t:be=be.next=t,be}function Pr(){if(Be===null){var t=Ee.alternate;t=t!==null?t.memoizedState:null}else t=Be.next;var e=be===null?Ee.memoizedState:be.next;if(e!==null)be=e,Be=t;else{if(t===null)throw Error(M(310));Be=t,t={memoizedState:Be.memoizedState,baseState:Be.baseState,baseQueue:Be.baseQueue,queue:Be.queue,next:null},be===null?Ee.memoizedState=be=t:be=be.next=t}return be}function Pt(t,e){return typeof e=="function"?e(t):e}function os(t){var e=Pr(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=Be,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){i=i.next,r=r.baseState;var l=o=s=null,u=i;do{var h=u.lane;if((Zs&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null}),r=u.eagerReducer===t?u.eagerState:t(r,u.action);else{var f={lane:h,action:u.action,eagerReducer:u.eagerReducer,eagerState:u.eagerState,next:null};l===null?(o=l=f,s=r):l=l.next=f,Ee.lanes|=h,mo|=h}u=u.next}while(u!==null&&u!==i);l===null?s=r:l.next=o,ft(r,e.memoizedState)||(Tt=!0),e.memoizedState=r,e.baseState=s,e.baseQueue=l,n.lastRenderedState=r}return[e.memoizedState,n.dispatch]}function as(t){var e=Pr(),n=e.queue;if(n===null)throw Error(M(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);ft(s,e.memoizedState)||(Tt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function om(t,e,n){var r=e._getVersion;r=r(e._source);var i=e._workInProgressVersionPrimary;if(i!==null?t=i===r:(t=t.mutableReadLanes,(t=(Zs&t)===t)&&(e._workInProgressVersionPrimary=r,oi.push(e))),t)return n(e._source);throw oi.push(e),Error(M(350))}function Fv(t,e,n,r){var i=Xe;if(i===null)throw Error(M(349));var s=e._getVersion,o=s(e._source),l=Ps.current,u=l.useState(function(){return om(i,e,n)}),h=u[1],f=u[0];u=be;var v=t.memoizedState,g=v.refs,C=g.getSnapshot,b=v.source;v=v.subscribe;var O=Ee;return t.memoizedState={refs:g,source:e,subscribe:r},l.useEffect(function(){g.getSnapshot=n,g.setSnapshot=h;var y=s(e._source);if(!ft(o,y)){y=n(e._source),ft(f,y)||(h(y),y=Nn(O),i.mutableReadLanes|=y&i.pendingLanes),y=i.mutableReadLanes,i.entangledLanes|=y;for(var w=i.entanglements,I=y;0<I;){var R=31-Un(I),N=1<<R;w[R]|=y,I&=~N}}},[n,e,r]),l.useEffect(function(){return r(e._source,function(){var y=g.getSnapshot,w=g.setSnapshot;try{w(y(e._source));var I=Nn(O);i.mutableReadLanes|=I&i.pendingLanes}catch(R){w(function(){throw R})}})},[e,r]),ft(C,n)&&ft(b,e)&&ft(v,r)||(t={pending:null,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:f},t.dispatch=h=pd.bind(null,Ee,t),u.queue=t,u.baseQueue=null,f=om(i,e,n),u.memoizedState=u.baseState=f),f}function Bv(t,e,n){var r=Pr();return Fv(r,t,e,n)}function ls(t){var e=fr();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t=e.queue={pending:null,dispatch:null,lastRenderedReducer:Pt,lastRenderedState:t},t=t.dispatch=pd.bind(null,Ee,t),[e.memoizedState,t]}function Xa(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=Ee.updateQueue,e===null?(e={lastEffect:null},Ee.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function am(t){var e=fr();return t={current:t},e.memoizedState=t}function Ja(){return Pr().memoizedState}function Lc(t,e,n,r){var i=fr();Ee.flags|=t,i.memoizedState=Xa(1|e,n,void 0,r===void 0?null:r)}function dd(t,e,n,r){var i=Pr();r=r===void 0?null:r;var s=void 0;if(Be!==null){var o=Be.memoizedState;if(s=o.destroy,r!==null&&cd(r,o.deps)){Xa(e,n,s,r);return}}Ee.flags|=t,i.memoizedState=Xa(1|e,n,s,r)}function lm(t,e){return Lc(516,4,t,e)}function Za(t,e){return dd(516,4,t,e)}function zv(t,e){return dd(4,2,t,e)}function $v(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function Hv(t,e,n){return n=n!=null?n.concat([t]):null,dd(4,2,$v.bind(null,e,t),n)}function fd(){}function Wv(t,e){var n=Pr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cd(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function qv(t,e){var n=Pr();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&cd(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function j1(t,e){var n=vi();_r(98>n?98:n,function(){t(!0)}),_r(97<n?97:n,function(){var r=mt.transition;mt.transition=1;try{t(!1),e()}finally{mt.transition=r}})}function pd(t,e,n){var r=ht(),i=Nn(t),s={lane:i,action:n,eagerReducer:null,eagerState:null,next:null},o=e.pending;if(o===null?s.next=s:(s.next=o.next,o.next=s),e.pending=s,o=t.alternate,t===Ee||o!==null&&o===Ee)ks=Ya=!0;else{if(t.lanes===0&&(o===null||o.lanes===0)&&(o=e.lastRenderedReducer,o!==null))try{var l=e.lastRenderedState,u=o(l,n);if(s.eagerReducer=o,s.eagerState=u,ft(u,l))return}catch{}finally{}bn(t,i,r)}}var el={readContext:gt,useCallback:et,useContext:et,useEffect:et,useImperativeHandle:et,useLayoutEffect:et,useMemo:et,useReducer:et,useRef:et,useState:et,useDebugValue:et,useDeferredValue:et,useTransition:et,useMutableSource:et,useOpaqueIdentifier:et,unstable_isNewReconciler:!1},U1={readContext:gt,useCallback:function(t,e){return fr().memoizedState=[t,e===void 0?null:e],t},useContext:gt,useEffect:lm,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,Lc(4,2,$v.bind(null,e,t),n)},useLayoutEffect:function(t,e){return Lc(4,2,t,e)},useMemo:function(t,e){var n=fr();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=fr();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t=r.queue={pending:null,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},t=t.dispatch=pd.bind(null,Ee,t),[r.memoizedState,t]},useRef:am,useState:ls,useDebugValue:fd,useDeferredValue:function(t){var e=ls(t),n=e[0],r=e[1];return lm(function(){var i=mt.transition;mt.transition=1;try{r(t)}finally{mt.transition=i}},[t]),n},useTransition:function(){var t=ls(!1),e=t[0];return t=j1.bind(null,t[1]),am(t),[t,e]},useMutableSource:function(t,e,n){var r=fr();return r.memoizedState={refs:{getSnapshot:e,setSnapshot:null},source:t,subscribe:n},Fv(r,t,e,n)},useOpaqueIdentifier:function(){if(bt){var t=!1,e=b1(function(){throw t||(t=!0,n("r:"+(Fu++).toString(36))),Error(M(355))}),n=ls(e)[1];return!(Ee.mode&2)&&(Ee.flags|=516,Xa(5,function(){n("r:"+(Fu++).toString(36))},void 0,null)),e}return e="r:"+(Fu++).toString(36),ls(e),e},unstable_isNewReconciler:!1},F1={readContext:gt,useCallback:Wv,useContext:gt,useEffect:Za,useImperativeHandle:Hv,useLayoutEffect:zv,useMemo:qv,useReducer:os,useRef:Ja,useState:function(){return os(Pt)},useDebugValue:fd,useDeferredValue:function(t){var e=os(Pt),n=e[0],r=e[1];return Za(function(){var i=mt.transition;mt.transition=1;try{r(t)}finally{mt.transition=i}},[t]),n},useTransition:function(){var t=os(Pt)[0];return[Ja().current,t]},useMutableSource:Bv,useOpaqueIdentifier:function(){return os(Pt)[0]},unstable_isNewReconciler:!1},B1={readContext:gt,useCallback:Wv,useContext:gt,useEffect:Za,useImperativeHandle:Hv,useLayoutEffect:zv,useMemo:qv,useReducer:as,useRef:Ja,useState:function(){return as(Pt)},useDebugValue:fd,useDeferredValue:function(t){var e=as(Pt),n=e[0],r=e[1];return Za(function(){var i=mt.transition;mt.transition=1;try{r(t)}finally{mt.transition=i}},[t]),n},useTransition:function(){var t=as(Pt)[0];return[Ja().current,t]},useMutableSource:Bv,useOpaqueIdentifier:function(){return as(Pt)[0]},unstable_isNewReconciler:!1},z1=Ar.ReactCurrentOwner,Tt=!1;function nt(t,e,n,r){e.child=t===null?jv(e,null,n,r):Ga(e,t.child,n,r)}function um(t,e,n,r,i){n=n.render;var s=e.ref;return si(e,i),r=hd(t,e,n,r,s,i),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Xt(t,e,i)):(e.flags|=1,nt(t,e,r,i),e.child)}function cm(t,e,n,r,i,s){if(t===null){var o=n.type;return typeof o=="function"&&!Ed(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=o,Kv(t,e,o,r,i,s)):(t=xa(n.type,null,r,e,e.mode,s),t.ref=e.ref,t.return=e,e.child=t)}return o=t.child,!(i&s)&&(i=o.memoizedProps,n=n.compare,n=n!==null?n:Ks,n(i,r)&&t.ref===e.ref)?Xt(t,e,s):(e.flags|=1,t=zn(o,r),t.ref=e.ref,t.return=e,e.child=t)}function Kv(t,e,n,r,i,s){if(t!==null&&Ks(t.memoizedProps,r)&&t.ref===e.ref)if(Tt=!1,(s&i)!==0)t.flags&16384&&(Tt=!0);else return e.lanes=t.lanes,Xt(t,e,s);return Vc(t,e,n,r,s)}function Hu(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden"||r.mode==="unstable-defer-without-hiding")if(!(e.mode&4))e.memoizedState={baseLanes:0},ia(e,n);else if(n&1073741824)e.memoizedState={baseLanes:0},ia(e,s!==null?s.baseLanes:n);else return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t},ia(e,t),null;else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,ia(e,r);return nt(t,e,i,n),e.child}function Gv(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=128)}function Vc(t,e,n,r,i){var s=st(n)?vr:qe.current;return s=yi(e,s),si(e,i),n=hd(t,e,n,r,s,i),t!==null&&!Tt?(e.updateQueue=t.updateQueue,e.flags&=-517,t.lanes&=~i,Xt(t,e,i)):(e.flags|=1,nt(t,e,n,i),e.child)}function hm(t,e,n,r,i){if(st(n)){var s=!0;Ea(e)}else s=!1;if(si(e,i),e.stateNode===null)t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),Vv(e,n,r),bc(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,l=e.memoizedProps;o.props=l;var u=o.context,h=n.contextType;typeof h=="object"&&h!==null?h=gt(h):(h=st(n)?vr:qe.current,h=yi(e,h));var f=n.getDerivedStateFromProps,v=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";v||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==r||u!==h)&&nm(e,o,r,h),pn=!1;var g=e.memoizedState;o.state=g,Ys(e,r,o,i),u=e.memoizedState,l!==r||g!==u||it.current||pn?(typeof f=="function"&&(Ka(e,n,f,r),u=e.memoizedState),(l=pn||tm(e,n,l,r,g,u,h))?(v||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4)):(typeof o.componentDidMount=="function"&&(e.flags|=4),e.memoizedProps=r,e.memoizedState=u),o.props=r,o.state=u,o.context=h,r=l):(typeof o.componentDidMount=="function"&&(e.flags|=4),r=!1)}else{o=e.stateNode,Dv(t,e),l=e.memoizedProps,h=e.type===e.elementType?l:wt(e.type,l),o.props=h,v=e.pendingProps,g=o.context,u=n.contextType,typeof u=="object"&&u!==null?u=gt(u):(u=st(n)?vr:qe.current,u=yi(e,u));var C=n.getDerivedStateFromProps;(f=typeof C=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(l!==v||g!==u)&&nm(e,o,r,u),pn=!1,g=e.memoizedState,o.state=g,Ys(e,r,o,i);var b=e.memoizedState;l!==v||g!==b||it.current||pn?(typeof C=="function"&&(Ka(e,n,C,r),b=e.memoizedState),(h=pn||tm(e,n,h,r,g,b,u))?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,b,u),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,b,u)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=256)):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=256),e.memoizedProps=r,e.memoizedState=b),o.props=r,o.state=b,o.context=u,r=h):(typeof o.componentDidUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||l===t.memoizedProps&&g===t.memoizedState||(e.flags|=256),r=!1)}return Mc(t,e,n,r,s,i)}function Mc(t,e,n,r,i,s){Gv(t,e);var o=(e.flags&64)!==0;if(!r&&!o)return i&&Yp(e,n,!1),Xt(t,e,s);r=e.stateNode,z1.current=e;var l=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=Ga(e,t.child,null,s),e.child=Ga(e,null,l,s)):nt(t,e,l,s),e.memoizedState=r.state,i&&Yp(e,n,!0),e.child}function dm(t){var e=t.stateNode;e.pendingContext?Qp(t,e.pendingContext,e.pendingContext!==e.context):e.context&&Qp(t,e.context,!1),Oc(t,e.containerInfo)}var ra={dehydrated:null,retryLane:0};function fm(t,e,n){var r=e.pendingProps,i=ge.current,s=!1,o;return(o=(e.flags&64)!==0)||(o=t!==null&&t.memoizedState===null?!1:(i&2)!==0),o?(s=!0,e.flags&=-65):t!==null&&t.memoizedState===null||r.fallback===void 0||r.unstable_avoidThisFallback===!0||(i|=1),ve(ge,i&1),t===null?(r.fallback!==void 0&&Dc(e),t=r.children,i=r.fallback,s?(t=pm(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=ra,t):typeof r.unstable_expectedLoadTime=="number"?(t=pm(e,t,i,n),e.child.memoizedState={baseLanes:n},e.memoizedState=ra,e.lanes=33554432,t):(n=wd({mode:"visible",children:t},e.mode,n,null),n.return=e,e.child=n)):t.memoizedState!==null?s?(r=gm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=ra,r):(n=mm(t,e,r.children,n),e.memoizedState=null,n):s?(r=gm(t,e,r.children,r.fallback,n),s=e.child,i=t.child.memoizedState,s.memoizedState=i===null?{baseLanes:n}:{baseLanes:i.baseLanes|n},s.childLanes=t.childLanes&~n,e.memoizedState=ra,r):(n=mm(t,e,r.children,n),e.memoizedState=null,n)}function pm(t,e,n,r){var i=t.mode,s=t.child;return e={mode:"hidden",children:e},!(i&2)&&s!==null?(s.childLanes=0,s.pendingProps=e):s=wd(e,i,0,null),n=ui(n,i,r,null),s.return=t,n.return=t,s.sibling=n,t.child=s,n}function mm(t,e,n,r){var i=t.child;return t=i.sibling,n=zn(i,{mode:"visible",children:n}),!(e.mode&2)&&(n.lanes=r),n.return=e,n.sibling=null,t!==null&&(t.nextEffect=null,t.flags=8,e.firstEffect=e.lastEffect=t),e.child=n}function gm(t,e,n,r,i){var s=e.mode,o=t.child;t=o.sibling;var l={mode:"hidden",children:n};return!(s&2)&&e.child!==o?(n=e.child,n.childLanes=0,n.pendingProps=l,o=n.lastEffect,o!==null?(e.firstEffect=n.firstEffect,e.lastEffect=o,o.nextEffect=null):e.firstEffect=e.lastEffect=null):n=zn(o,l),t!==null?r=zn(t,r):(r=ui(r,s,i,null),r.flags|=2),r.return=e,n.return=e,n.sibling=r,e.child=n,r}function ym(t,e){t.lanes|=e;var n=t.alternate;n!==null&&(n.lanes|=e),Ov(t.return,e)}function Wu(t,e,n,r,i,s){var o=t.memoizedState;o===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i,lastEffect:s}:(o.isBackwards=e,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i,o.lastEffect=s)}function vm(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(nt(t,e,r.children,n),r=ge.current,r&2)r=r&1|2,e.flags|=64;else{if(t!==null&&t.flags&64)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&ym(t,n);else if(t.tag===19)ym(t,n);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(ve(ge,r),!(e.mode&2))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&Qa(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),Wu(e,!1,i,n,s,e.lastEffect);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&Qa(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}Wu(e,!0,n,null,s,e.lastEffect);break;case"together":Wu(e,!1,null,null,void 0,e.lastEffect);break;default:e.memoizedState=null}return e.child}function Xt(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),mo|=e.lanes,n&e.childLanes){if(t!==null&&e.child!==t.child)throw Error(M(153));if(e.child!==null){for(t=e.child,n=zn(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=zn(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}return null}var Qv,jc,Yv,Xv;Qv=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};jc=function(){};Yv=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,dr(Nt.current);var s=null;switch(n){case"input":i=hc(t,i),r=hc(t,r),s=[];break;case"option":i=pc(t,i),r=pc(t,r),s=[];break;case"select":i=he({},i,{value:void 0}),r=he({},r,{value:void 0}),s=[];break;case"textarea":i=mc(t,i),r=mc(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Ba)}vc(n,r);var o;n=null;for(h in i)if(!r.hasOwnProperty(h)&&i.hasOwnProperty(h)&&i[h]!=null)if(h==="style"){var l=i[h];for(o in l)l.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else h!=="dangerouslySetInnerHTML"&&h!=="children"&&h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&h!=="autoFocus"&&(Fs.hasOwnProperty(h)?s||(s=[]):(s=s||[]).push(h,null));for(h in r){var u=r[h];if(l=i!=null?i[h]:void 0,r.hasOwnProperty(h)&&u!==l&&(u!=null||l!=null))if(h==="style")if(l){for(o in l)!l.hasOwnProperty(o)||u&&u.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in u)u.hasOwnProperty(o)&&l[o]!==u[o]&&(n||(n={}),n[o]=u[o])}else n||(s||(s=[]),s.push(h,n)),n=u;else h==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,l=l?l.__html:void 0,u!=null&&l!==u&&(s=s||[]).push(h,u)):h==="children"?typeof u!="string"&&typeof u!="number"||(s=s||[]).push(h,""+u):h!=="suppressContentEditableWarning"&&h!=="suppressHydrationWarning"&&(Fs.hasOwnProperty(h)?(u!=null&&h==="onScroll"&&ue("scroll",t),s||l===u||(s=[])):typeof u=="object"&&u!==null&&u.$$typeof===Bh?u.toString():(s=s||[]).push(h,u))}n&&(s=s||[]).push("style",n);var h=s;(e.updateQueue=h)&&(e.flags|=4)}};Xv=function(t,e,n,r){n!==r&&(e.flags|=4)};function us(t,e){if(!bt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function $1(t,e,n){var r=e.pendingProps;switch(e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return null;case 1:return st(e.type)&&$a(),null;case 3:return _i(),ce(it),ce(qe),ud(),r=e.stateNode,r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(na(e)?e.flags|=4:r.hydrate||(e.flags|=256)),jc(e),null;case 5:ld(e);var i=dr(Js.current);if(n=e.type,t!==null&&e.stateNode!=null)Yv(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=128);else{if(!r){if(e.stateNode===null)throw Error(M(166));return null}if(t=dr(Nt.current),na(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[wn]=e,r[za]=s,n){case"dialog":ue("cancel",r),ue("close",r);break;case"iframe":case"object":case"embed":ue("load",r);break;case"video":case"audio":for(t=0;t<ps.length;t++)ue(ps[t],r);break;case"source":ue("error",r);break;case"img":case"image":case"link":ue("error",r),ue("load",r);break;case"details":ue("toggle",r);break;case"input":vp(r,s),ue("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},ue("invalid",r);break;case"textarea":Ep(r,s),ue("invalid",r)}vc(n,s),t=null;for(var o in s)s.hasOwnProperty(o)&&(i=s[o],o==="children"?typeof i=="string"?r.textContent!==i&&(t=["children",i]):typeof i=="number"&&r.textContent!==""+i&&(t=["children",""+i]):Fs.hasOwnProperty(o)&&i!=null&&o==="onScroll"&&ue("scroll",r));switch(n){case"input":Yo(r),_p(r,s,!0);break;case"textarea":Yo(r),wp(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Ba)}r=t,e.updateQueue=r,r!==null&&(e.flags|=4)}else{switch(o=i.nodeType===9?i:i.ownerDocument,t===gc.html&&(t=Hy(n)),t===gc.html?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[wn]=e,t[za]=r,Qv(t,e,!1,!1),e.stateNode=t,o=_c(n,r),n){case"dialog":ue("cancel",t),ue("close",t),i=r;break;case"iframe":case"object":case"embed":ue("load",t),i=r;break;case"video":case"audio":for(i=0;i<ps.length;i++)ue(ps[i],t);i=r;break;case"source":ue("error",t),i=r;break;case"img":case"image":case"link":ue("error",t),ue("load",t),i=r;break;case"details":ue("toggle",t),i=r;break;case"input":vp(t,r),i=hc(t,r),ue("invalid",t);break;case"option":i=pc(t,r);break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=he({},r,{value:void 0}),ue("invalid",t);break;case"textarea":Ep(t,r),i=mc(t,r),ue("invalid",t);break;default:i=r}vc(n,i);var l=i;for(s in l)if(l.hasOwnProperty(s)){var u=l[s];s==="style"?Ky(t,u):s==="dangerouslySetInnerHTML"?(u=u?u.__html:void 0,u!=null&&Wy(t,u)):s==="children"?typeof u=="string"?(n!=="textarea"||u!=="")&&Bs(t,u):typeof u=="number"&&Bs(t,""+u):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Fs.hasOwnProperty(s)?u!=null&&s==="onScroll"&&ue("scroll",t):u!=null&&Lh(t,s,u,o))}switch(n){case"input":Yo(t),_p(t,r,!1);break;case"textarea":Yo(t),wp(t);break;case"option":r.value!=null&&t.setAttribute("value",""+jn(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?ti(t,!!r.multiple,s,!1):r.defaultValue!=null&&ti(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Ba)}Sv(n,r)&&(e.flags|=4)}e.ref!==null&&(e.flags|=128)}return null;case 6:if(t&&e.stateNode!=null)Xv(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(M(166));n=dr(Js.current),dr(Nt.current),na(e)?(r=e.stateNode,n=e.memoizedProps,r[wn]=e,r.nodeValue!==n&&(e.flags|=4)):(r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[wn]=e,e.stateNode=r)}return null;case 13:return ce(ge),r=e.memoizedState,e.flags&64?(e.lanes=n,e):(r=r!==null,n=!1,t===null?e.memoizedProps.fallback!==void 0&&na(e):n=t.memoizedState!==null,r&&!n&&e.mode&2&&(t===null&&e.memoizedProps.unstable_avoidThisFallback!==!0||ge.current&1?De===0&&(De=3):((De===0||De===3)&&(De=4),Xe===null||!(mo&134217727)&&!(bi&134217727)||ai(Xe,We))),(r||n)&&(e.flags|=4),null);case 4:return _i(),jc(e),t===null&&wv(e.stateNode.containerInfo),null;case 10:return od(e),null;case 17:return st(e.type)&&$a(),null;case 19:if(ce(ge),r=e.memoizedState,r===null)return null;if(s=(e.flags&64)!==0,o=r.rendering,o===null)if(s)us(r,!1);else{if(De!==0||t!==null&&t.flags&64)for(t=e.child;t!==null;){if(o=Qa(t),o!==null){for(e.flags|=64,us(r,!1),s=o.updateQueue,s!==null&&(e.updateQueue=s,e.flags|=4),r.lastEffect===null&&(e.firstEffect=null),e.lastEffect=r.lastEffect,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=2,s.nextEffect=null,s.firstEffect=null,s.lastEffect=null,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return ve(ge,ge.current&1|2),e.child}t=t.sibling}r.tail!==null&&He()>Hc&&(e.flags|=64,s=!0,us(r,!1),e.lanes=33554432)}else{if(!s)if(t=Qa(o),t!==null){if(e.flags|=64,s=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),us(r,!0),r.tail===null&&r.tailMode==="hidden"&&!o.alternate&&!bt)return e=e.lastEffect=r.lastEffect,e!==null&&(e.nextEffect=null),null}else 2*He()-r.renderingStartTime>Hc&&n!==1073741824&&(e.flags|=64,s=!0,us(r,!1),e.lanes=33554432);r.isBackwards?(o.sibling=e.child,e.child=o):(n=r.last,n!==null?n.sibling=o:e.child=o,r.last=o)}return r.tail!==null?(n=r.tail,r.rendering=n,r.tail=n.sibling,r.lastEffect=e.lastEffect,r.renderingStartTime=He(),n.sibling=null,e=ge.current,ve(ge,s?e&1|2:e&1),n):null;case 23:case 24:return _d(),t!==null&&t.memoizedState!==null!=(e.memoizedState!==null)&&r.mode!=="unstable-defer-without-hiding"&&(e.flags|=4),null}throw Error(M(156,e.tag))}function H1(t){switch(t.tag){case 1:st(t.type)&&$a();var e=t.flags;return e&4096?(t.flags=e&-4097|64,t):null;case 3:if(_i(),ce(it),ce(qe),ud(),e=t.flags,e&64)throw Error(M(285));return t.flags=e&-4097|64,t;case 5:return ld(t),null;case 13:return ce(ge),e=t.flags,e&4096?(t.flags=e&-4097|64,t):null;case 19:return ce(ge),null;case 4:return _i(),null;case 10:return od(t),null;case 23:case 24:return _d(),null;default:return null}}function md(t,e){try{var n="",r=e;do n+=Sw(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i}}function Uc(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var W1=typeof WeakMap=="function"?WeakMap:Map;function Jv(t,e,n){n=Pn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){nl||(nl=!0,Wc=r),Uc(t,e)},n}function Zv(t,e,n){n=Pn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return Uc(t,e),r(i)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){typeof r!="function"&&(kt===null?kt=new Set([this]):kt.add(this),Uc(t,e));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}var q1=typeof WeakSet=="function"?WeakSet:Set;function _m(t){var e=t.ref;if(e!==null)if(typeof e=="function")try{e(null)}catch(n){On(t,n)}else e.current=null}function K1(t,e){switch(e.tag){case 0:case 11:case 15:case 22:return;case 1:if(e.flags&256&&t!==null){var n=t.memoizedProps,r=t.memoizedState;t=e.stateNode,e=t.getSnapshotBeforeUpdate(e.elementType===e.type?n:wt(e.type,n),r),t.__reactInternalSnapshotBeforeUpdate=e}return;case 3:e.flags&256&&nd(e.stateNode.containerInfo);return;case 5:case 6:case 4:case 17:return}throw Error(M(163))}function G1(t,e,n){switch(n.tag){case 0:case 11:case 15:case 22:if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{if((t.tag&3)===3){var r=t.create;t.destroy=r()}t=t.next}while(t!==e)}if(e=n.updateQueue,e=e!==null?e.lastEffect:null,e!==null){t=e=e.next;do{var i=t;r=i.next,i=i.tag,i&4&&i&1&&(l_(n,t),nT(n,t)),t=r}while(t!==e)}return;case 1:t=n.stateNode,n.flags&4&&(e===null?t.componentDidMount():(r=n.elementType===n.type?e.memoizedProps:wt(n.type,e.memoizedProps),t.componentDidUpdate(r,e.memoizedState,t.__reactInternalSnapshotBeforeUpdate))),e=n.updateQueue,e!==null&&em(n,e,t);return;case 3:if(e=n.updateQueue,e!==null){if(t=null,n.child!==null)switch(n.child.tag){case 5:t=n.child.stateNode;break;case 1:t=n.child.stateNode}em(n,e,t)}return;case 5:t=n.stateNode,e===null&&n.flags&4&&Sv(n.type,n.memoizedProps)&&t.focus();return;case 6:return;case 4:return;case 12:return;case 13:n.memoizedState===null&&(n=n.alternate,n!==null&&(n=n.memoizedState,n!==null&&(n=n.dehydrated,n!==null&&rv(n))));return;case 19:case 17:case 20:case 21:case 23:case 24:return}throw Error(M(163))}function Em(t,e){for(var n=t;;){if(n.tag===5){var r=n.stateNode;if(e)r=r.style,typeof r.setProperty=="function"?r.setProperty("display","none","important"):r.display="none";else{r=n.stateNode;var i=n.memoizedProps.style;i=i!=null&&i.hasOwnProperty("display")?i.display:null,r.style.display=qy("display",i)}}else if(n.tag===6)n.stateNode.nodeValue=e?"":n.memoizedProps;else if((n.tag!==23&&n.tag!==24||n.memoizedState===null||n===t)&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}}function wm(t,e){if(mr&&typeof mr.onCommitFiberUnmount=="function")try{mr.onCommitFiberUnmount(rd,e)}catch{}switch(e.tag){case 0:case 11:case 14:case 15:case 22:if(t=e.updateQueue,t!==null&&(t=t.lastEffect,t!==null)){var n=t=t.next;do{var r=n,i=r.destroy;if(r=r.tag,i!==void 0)if(r&4)l_(e,n);else{r=e;try{i()}catch(s){On(r,s)}}n=n.next}while(n!==t)}break;case 1:if(_m(e),t=e.stateNode,typeof t.componentWillUnmount=="function")try{t.props=e.memoizedProps,t.state=e.memoizedState,t.componentWillUnmount()}catch(s){On(e,s)}break;case 5:_m(e);break;case 4:e_(t,e)}}function Tm(t){t.alternate=null,t.child=null,t.dependencies=null,t.firstEffect=null,t.lastEffect=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.return=null,t.updateQueue=null}function Im(t){return t.tag===5||t.tag===3||t.tag===4}function Sm(t){e:{for(var e=t.return;e!==null;){if(Im(e))break e;e=e.return}throw Error(M(160))}var n=e;switch(e=n.stateNode,n.tag){case 5:var r=!1;break;case 3:e=e.containerInfo,r=!0;break;case 4:e=e.containerInfo,r=!0;break;default:throw Error(M(161))}n.flags&16&&(Bs(e,""),n.flags&=-17);e:t:for(n=t;;){for(;n.sibling===null;){if(n.return===null||Im(n.return)){n=null;break e}n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue t;n.child.return=n,n=n.child}if(!(n.flags&2)){n=n.stateNode;break e}}r?Fc(t,n,e):Bc(t,n,e)}function Fc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Ba));else if(r!==4&&(t=t.child,t!==null))for(Fc(t,e,n),t=t.sibling;t!==null;)Fc(t,e,n),t=t.sibling}function Bc(t,e,n){var r=t.tag,i=r===5||r===6;if(i)t=i?t.stateNode:t.stateNode.instance,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Bc(t,e,n),t=t.sibling;t!==null;)Bc(t,e,n),t=t.sibling}function e_(t,e){for(var n=e,r=!1,i,s;;){if(!r){r=n.return;e:for(;;){if(r===null)throw Error(M(160));switch(i=r.stateNode,r.tag){case 5:s=!1;break e;case 3:i=i.containerInfo,s=!0;break e;case 4:i=i.containerInfo,s=!0;break e}r=r.return}r=!0}if(n.tag===5||n.tag===6){e:for(var o=t,l=n,u=l;;)if(wm(o,u),u.child!==null&&u.tag!==4)u.child.return=u,u=u.child;else{if(u===l)break e;for(;u.sibling===null;){if(u.return===null||u.return===l)break e;u=u.return}u.sibling.return=u.return,u=u.sibling}s?(o=i,l=n.stateNode,o.nodeType===8?o.parentNode.removeChild(l):o.removeChild(l)):i.removeChild(n.stateNode)}else if(n.tag===4){if(n.child!==null){i=n.stateNode.containerInfo,s=!0,n.child.return=n,n=n.child;continue}}else if(wm(t,n),n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return,n.tag===4&&(r=!1)}n.sibling.return=n.return,n=n.sibling}}function qu(t,e){switch(e.tag){case 0:case 11:case 14:case 15:case 22:var n=e.updateQueue;if(n=n!==null?n.lastEffect:null,n!==null){var r=n=n.next;do(r.tag&3)===3&&(t=r.destroy,r.destroy=void 0,t!==void 0&&t()),r=r.next;while(r!==n)}return;case 1:return;case 5:if(n=e.stateNode,n!=null){r=e.memoizedProps;var i=t!==null?t.memoizedProps:r;t=e.type;var s=e.updateQueue;if(e.updateQueue=null,s!==null){for(n[za]=r,t==="input"&&r.type==="radio"&&r.name!=null&&zy(n,r),_c(t,i),e=_c(t,r),i=0;i<s.length;i+=2){var o=s[i],l=s[i+1];o==="style"?Ky(n,l):o==="dangerouslySetInnerHTML"?Wy(n,l):o==="children"?Bs(n,l):Lh(n,o,l,e)}switch(t){case"input":dc(n,r);break;case"textarea":$y(n,r);break;case"select":t=n._wrapperState.wasMultiple,n._wrapperState.wasMultiple=!!r.multiple,s=r.value,s!=null?ti(n,!!r.multiple,s,!1):t!==!!r.multiple&&(r.defaultValue!=null?ti(n,!!r.multiple,r.defaultValue,!0):ti(n,!!r.multiple,r.multiple?[]:"",!1))}}}return;case 6:if(e.stateNode===null)throw Error(M(162));e.stateNode.nodeValue=e.memoizedProps;return;case 3:n=e.stateNode,n.hydrate&&(n.hydrate=!1,rv(n.containerInfo));return;case 12:return;case 13:e.memoizedState!==null&&(vd=He(),Em(e.child,!0)),xm(e);return;case 19:xm(e);return;case 17:return;case 23:case 24:Em(e,e.memoizedState!==null);return}throw Error(M(163))}function xm(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new q1),e.forEach(function(r){var i=sT.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function Q1(t,e){return t!==null&&(t=t.memoizedState,t===null||t.dehydrated!==null)?(e=e.memoizedState,e!==null&&e.dehydrated===null):!1}var Y1=Math.ceil,tl=Ar.ReactCurrentDispatcher,gd=Ar.ReactCurrentOwner,Y=0,Xe=null,Ce=null,We=0,Er=0,zc=Yn(0),De=0,Ll=null,Ni=0,mo=0,bi=0,yd=0,$c=null,vd=0,Hc=1/0;function Oi(){Hc=He()+500}var H=null,nl=!1,Wc=null,kt=null,Bn=!1,Ns=null,ms=90,qc=[],Kc=[],en=null,bs=0,Gc=null,Ta=-1,Qt=0,Ia=0,Os=null,Sa=!1;function ht(){return Y&48?He():Ta!==-1?Ta:Ta=He()}function Nn(t){if(t=t.mode,!(t&2))return 1;if(!(t&4))return vi()===99?1:2;if(Qt===0&&(Qt=Ni),M1.transition!==0){Ia!==0&&(Ia=$c!==null?$c.pendingLanes:0),t=Qt;var e=4186112&~Ia;return e&=-e,e===0&&(t=4186112&~t,e=t&-t,e===0&&(e=8192)),e}return t=vi(),Y&4&&t===98?t=Ua(12,Qt):(t=Fw(t),t=Ua(t,Qt)),t}function bn(t,e,n){if(50<bs)throw bs=0,Gc=null,Error(M(185));if(t=Vl(t,e),t===null)return null;Rl(t,e,n),t===Xe&&(bi|=e,De===4&&ai(t,We));var r=vi();e===1?Y&8&&!(Y&48)?Qc(t):(yt(t,n),Y===0&&(Oi(),Ft())):(!(Y&4)||r!==98&&r!==99||(en===null?en=new Set([t]):en.add(t)),yt(t,n)),$c=t}function Vl(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}function yt(t,e){for(var n=t.callbackNode,r=t.suspendedLanes,i=t.pingedLanes,s=t.expirationTimes,o=t.pendingLanes;0<o;){var l=31-Un(o),u=1<<l,h=s[l];if(h===-1){if(!(u&r)||u&i){h=e,Br(u);var f=ae;s[l]=10<=f?h+250:6<=f?h+5e3:-1}}else h<=e&&(t.expiredLanes|=u);o&=~u}if(r=Ws(t,t===Xe?We:0),e=ae,r===0)n!==null&&(n!==Bu&&kc(n),t.callbackNode=null,t.callbackPriority=0);else{if(n!==null){if(t.callbackPriority===e)return;n!==Bu&&kc(n)}e===15?(n=Qc.bind(null,t),Gt===null?(Gt=[n],wa=id(Ol,bv)):Gt.push(n),n=Bu):e===14?n=Qs(99,Qc.bind(null,t)):(n=Bw(e),n=Qs(n,t_.bind(null,t))),t.callbackPriority=e,t.callbackNode=n}}function t_(t){if(Ta=-1,Ia=Qt=0,Y&48)throw Error(M(327));var e=t.callbackNode;if(Xn()&&t.callbackNode!==e)return null;var n=Ws(t,t===Xe?We:0);if(n===0)return null;var r=n,i=Y;Y|=16;var s=s_();(Xe!==t||We!==r)&&(Oi(),li(t,r));do try{Z1();break}catch(l){i_(t,l)}while(1);if(sd(),tl.current=s,Y=i,Ce!==null?r=0:(Xe=null,We=0,r=De),Ni&bi)li(t,0);else if(r!==0){if(r===2&&(Y|=64,t.hydrate&&(t.hydrate=!1,nd(t.containerInfo)),n=cv(t),n!==0&&(r=gs(t,n))),r===1)throw e=Ll,li(t,0),ai(t,n),yt(t,He()),e;switch(t.finishedWork=t.current.alternate,t.finishedLanes=n,r){case 0:case 1:throw Error(M(345));case 2:ar(t);break;case 3:if(ai(t,n),(n&62914560)===n&&(r=vd+500-He(),10<r)){if(Ws(t,0)!==0)break;if(i=t.suspendedLanes,(i&n)!==n){ht(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=qp(ar.bind(null,t),r);break}ar(t);break;case 4:if(ai(t,n),(n&4186112)===n)break;for(r=t.eventTimes,i=-1;0<n;){var o=31-Un(n);s=1<<o,o=r[o],o>i&&(i=o),n&=~s}if(n=i,n=He()-n,n=(120>n?120:480>n?480:1080>n?1080:1920>n?1920:3e3>n?3e3:4320>n?4320:1960*Y1(n/1960))-n,10<n){t.timeoutHandle=qp(ar.bind(null,t),n);break}ar(t);break;case 5:ar(t);break;default:throw Error(M(329))}}return yt(t,He()),t.callbackNode===e?t_.bind(null,t):null}function ai(t,e){for(e&=~yd,e&=~bi,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-Un(e),r=1<<n;t[n]=-1,e&=~r}}function Qc(t){if(Y&48)throw Error(M(327));if(Xn(),t===Xe&&t.expiredLanes&We){var e=We,n=gs(t,e);Ni&bi&&(e=Ws(t,e),n=gs(t,e))}else e=Ws(t,0),n=gs(t,e);if(t.tag!==0&&n===2&&(Y|=64,t.hydrate&&(t.hydrate=!1,nd(t.containerInfo)),e=cv(t),e!==0&&(n=gs(t,e))),n===1)throw n=Ll,li(t,0),ai(t,e),yt(t,He()),n;return t.finishedWork=t.current.alternate,t.finishedLanes=e,ar(t),yt(t,He()),null}function X1(){if(en!==null){var t=en;en=null,t.forEach(function(e){e.expiredLanes|=24&e.pendingLanes,yt(e,He())})}Ft()}function n_(t,e){var n=Y;Y|=1;try{return t(e)}finally{Y=n,Y===0&&(Oi(),Ft())}}function r_(t,e){var n=Y;Y&=-2,Y|=8;try{return t(e)}finally{Y=n,Y===0&&(Oi(),Ft())}}function ia(t,e){ve(zc,Er),Er|=e,Ni|=e}function _d(){Er=zc.current,ce(zc)}function li(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,N1(n)),Ce!==null)for(n=Ce.return;n!==null;){var r=n;switch(r.tag){case 1:r=r.type.childContextTypes,r!=null&&$a();break;case 3:_i(),ce(it),ce(qe),ud();break;case 5:ld(r);break;case 4:_i();break;case 13:ce(ge);break;case 19:ce(ge);break;case 10:od(r);break;case 23:case 24:_d()}n=n.return}Xe=t,Ce=zn(t.current,null),We=Er=Ni=e,De=0,Ll=null,yd=bi=mo=0}function i_(t,e){do{var n=Ce;try{if(sd(),Ps.current=el,Ya){for(var r=Ee.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}Ya=!1}if(Zs=0,be=Be=Ee=null,ks=!1,gd.current=null,n===null||n.return===null){De=1,Ll=e,Ce=null;break}e:{var s=t,o=n.return,l=n,u=e;if(e=We,l.flags|=2048,l.firstEffect=l.lastEffect=null,u!==null&&typeof u=="object"&&typeof u.then=="function"){var h=u;if(!(l.mode&2)){var f=l.alternate;f?(l.updateQueue=f.updateQueue,l.memoizedState=f.memoizedState,l.lanes=f.lanes):(l.updateQueue=null,l.memoizedState=null)}var v=(ge.current&1)!==0,g=o;do{var C;if(C=g.tag===13){var b=g.memoizedState;if(b!==null)C=b.dehydrated!==null;else{var O=g.memoizedProps;C=O.fallback===void 0?!1:O.unstable_avoidThisFallback!==!0?!0:!v}}if(C){var y=g.updateQueue;if(y===null){var w=new Set;w.add(h),g.updateQueue=w}else y.add(h);if(!(g.mode&2)){if(g.flags|=64,l.flags|=16384,l.flags&=-2981,l.tag===1)if(l.alternate===null)l.tag=17;else{var I=Pn(-1,1);I.tag=2,kn(l,I)}l.lanes|=1;break e}u=void 0,l=e;var R=s.pingCache;if(R===null?(R=s.pingCache=new W1,u=new Set,R.set(h,u)):(u=R.get(h),u===void 0&&(u=new Set,R.set(h,u))),!u.has(l)){u.add(l);var N=iT.bind(null,s,h,l);h.then(N,N)}g.flags|=4096,g.lanes=e;break e}g=g.return}while(g!==null);u=Error((ei(l.type)||"A React component")+` suspended while rendering, but no fallback UI was specified.

Add a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display.`)}De!==5&&(De=2),u=md(u,l),g=o;do{switch(g.tag){case 3:s=u,g.flags|=4096,e&=-e,g.lanes|=e;var z=Jv(g,s,e);Zp(g,z);break e;case 1:s=u;var V=g.type,S=g.stateNode;if(!(g.flags&64)&&(typeof V.getDerivedStateFromError=="function"||S!==null&&typeof S.componentDidCatch=="function"&&(kt===null||!kt.has(S)))){g.flags|=4096,e&=-e,g.lanes|=e;var _=Zv(g,s,e);Zp(g,_);break e}}g=g.return}while(g!==null)}a_(n)}catch(E){e=E,Ce===n&&n!==null&&(Ce=n=n.return);continue}break}while(1)}function s_(){var t=tl.current;return tl.current=el,t===null?el:t}function gs(t,e){var n=Y;Y|=16;var r=s_();Xe===t&&We===e||li(t,e);do try{J1();break}catch(i){i_(t,i)}while(1);if(sd(),Y=n,tl.current=r,Ce!==null)throw Error(M(261));return Xe=null,We=0,De}function J1(){for(;Ce!==null;)o_(Ce)}function Z1(){for(;Ce!==null&&!D1();)o_(Ce)}function o_(t){var e=u_(t.alternate,t,Er);t.memoizedProps=t.pendingProps,e===null?a_(t):Ce=e,gd.current=null}function a_(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&2048){if(n=H1(e),n!==null){n.flags&=2047,Ce=n;return}t!==null&&(t.firstEffect=t.lastEffect=null,t.flags|=2048)}else{if(n=$1(n,e,Er),n!==null){Ce=n;return}if(n=e,n.tag!==24&&n.tag!==23||n.memoizedState===null||Er&1073741824||!(n.mode&4)){for(var r=0,i=n.child;i!==null;)r|=i.lanes|i.childLanes,i=i.sibling;n.childLanes=r}t!==null&&!(t.flags&2048)&&(t.firstEffect===null&&(t.firstEffect=e.firstEffect),e.lastEffect!==null&&(t.lastEffect!==null&&(t.lastEffect.nextEffect=e.firstEffect),t.lastEffect=e.lastEffect),1<e.flags&&(t.lastEffect!==null?t.lastEffect.nextEffect=e:t.firstEffect=e,t.lastEffect=e))}if(e=e.sibling,e!==null){Ce=e;return}Ce=e=t}while(e!==null);De===0&&(De=5)}function ar(t){var e=vi();return _r(99,eT.bind(null,t,e)),null}function eT(t,e){do Xn();while(Ns!==null);if(Y&48)throw Error(M(327));var n=t.finishedWork;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(M(177));t.callbackNode=null;var r=n.lanes|n.childLanes,i=r,s=t.pendingLanes&~i;t.pendingLanes=i,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=i,t.mutableReadLanes&=i,t.entangledLanes&=i,i=t.entanglements;for(var o=t.eventTimes,l=t.expirationTimes;0<s;){var u=31-Un(s),h=1<<u;i[u]=0,o[u]=-1,l[u]=-1,s&=~h}if(en!==null&&!(r&24)&&en.has(t)&&en.delete(t),t===Xe&&(Ce=Xe=null,We=0),1<n.flags?n.lastEffect!==null?(n.lastEffect.nextEffect=n,r=n.firstEffect):r=n:r=n.firstEffect,r!==null){if(i=Y,Y|=32,gd.current=null,ju=ya,o=Up(),xc(o)){if("selectionStart"in o)l={start:o.selectionStart,end:o.selectionEnd};else e:if(l=(l=o.ownerDocument)&&l.defaultView||window,(h=l.getSelection&&l.getSelection())&&h.rangeCount!==0){l=h.anchorNode,s=h.anchorOffset,u=h.focusNode,h=h.focusOffset;try{l.nodeType,u.nodeType}catch{l=null;break e}var f=0,v=-1,g=-1,C=0,b=0,O=o,y=null;t:for(;;){for(var w;O!==l||s!==0&&O.nodeType!==3||(v=f+s),O!==u||h!==0&&O.nodeType!==3||(g=f+h),O.nodeType===3&&(f+=O.nodeValue.length),(w=O.firstChild)!==null;)y=O,O=w;for(;;){if(O===o)break t;if(y===l&&++C===s&&(v=f),y===u&&++b===h&&(g=f),(w=O.nextSibling)!==null)break;O=y,y=O.parentNode}O=w}l=v===-1||g===-1?null:{start:v,end:g}}else l=null;l=l||{start:0,end:0}}else l=null;Uu={focusedElem:o,selectionRange:l},ya=!1,Os=null,Sa=!1,H=r;do try{tT()}catch(E){if(H===null)throw Error(M(330));On(H,E),H=H.nextEffect}while(H!==null);Os=null,H=r;do try{for(o=t;H!==null;){var I=H.flags;if(I&16&&Bs(H.stateNode,""),I&128){var R=H.alternate;if(R!==null){var N=R.ref;N!==null&&(typeof N=="function"?N(null):N.current=null)}}switch(I&1038){case 2:Sm(H),H.flags&=-3;break;case 6:Sm(H),H.flags&=-3,qu(H.alternate,H);break;case 1024:H.flags&=-1025;break;case 1028:H.flags&=-1025,qu(H.alternate,H);break;case 4:qu(H.alternate,H);break;case 8:l=H,e_(o,l);var z=l.alternate;Tm(l),z!==null&&Tm(z)}H=H.nextEffect}}catch(E){if(H===null)throw Error(M(330));On(H,E),H=H.nextEffect}while(H!==null);if(N=Uu,R=Up(),I=N.focusedElem,o=N.selectionRange,R!==I&&I&&I.ownerDocument&&vv(I.ownerDocument.documentElement,I)){for(o!==null&&xc(I)&&(R=o.start,N=o.end,N===void 0&&(N=R),"selectionStart"in I?(I.selectionStart=R,I.selectionEnd=Math.min(N,I.value.length)):(N=(R=I.ownerDocument||document)&&R.defaultView||window,N.getSelection&&(N=N.getSelection(),l=I.textContent.length,z=Math.min(o.start,l),o=o.end===void 0?z:Math.min(o.end,l),!N.extend&&z>o&&(l=o,o=z,z=l),l=jp(I,z),s=jp(I,o),l&&s&&(N.rangeCount!==1||N.anchorNode!==l.node||N.anchorOffset!==l.offset||N.focusNode!==s.node||N.focusOffset!==s.offset)&&(R=R.createRange(),R.setStart(l.node,l.offset),N.removeAllRanges(),z>o?(N.addRange(R),N.extend(s.node,s.offset)):(R.setEnd(s.node,s.offset),N.addRange(R)))))),R=[],N=I;N=N.parentNode;)N.nodeType===1&&R.push({element:N,left:N.scrollLeft,top:N.scrollTop});for(typeof I.focus=="function"&&I.focus(),I=0;I<R.length;I++)N=R[I],N.element.scrollLeft=N.left,N.element.scrollTop=N.top}ya=!!ju,Uu=ju=null,t.current=n,H=r;do try{for(I=t;H!==null;){var V=H.flags;if(V&36&&G1(I,H.alternate,H),V&128){R=void 0;var S=H.ref;if(S!==null){var _=H.stateNode;switch(H.tag){case 5:R=_;break;default:R=_}typeof S=="function"?S(R):S.current=R}}H=H.nextEffect}}catch(E){if(H===null)throw Error(M(330));On(H,E),H=H.nextEffect}while(H!==null);H=null,V1(),Y=i}else t.current=n;if(Bn)Bn=!1,Ns=t,ms=e;else for(H=r;H!==null;)e=H.nextEffect,H.nextEffect=null,H.flags&8&&(V=H,V.sibling=null,V.stateNode=null),H=e;if(r=t.pendingLanes,r===0&&(kt=null),r===1?t===Gc?bs++:(bs=0,Gc=t):bs=0,n=n.stateNode,mr&&typeof mr.onCommitFiberRoot=="function")try{mr.onCommitFiberRoot(rd,n,void 0,(n.current.flags&64)===64)}catch{}if(yt(t,He()),nl)throw nl=!1,t=Wc,Wc=null,t;return Y&8||Ft(),null}function tT(){for(;H!==null;){var t=H.alternate;Sa||Os===null||(H.flags&8?Sp(H,Os)&&(Sa=!0):H.tag===13&&Q1(t,H)&&Sp(H,Os)&&(Sa=!0));var e=H.flags;e&256&&K1(t,H),!(e&512)||Bn||(Bn=!0,Qs(97,function(){return Xn(),null})),H=H.nextEffect}}function Xn(){if(ms!==90){var t=97<ms?97:ms;return ms=90,_r(t,rT)}return!1}function nT(t,e){qc.push(e,t),Bn||(Bn=!0,Qs(97,function(){return Xn(),null}))}function l_(t,e){Kc.push(e,t),Bn||(Bn=!0,Qs(97,function(){return Xn(),null}))}function rT(){if(Ns===null)return!1;var t=Ns;if(Ns=null,Y&48)throw Error(M(331));var e=Y;Y|=32;var n=Kc;Kc=[];for(var r=0;r<n.length;r+=2){var i=n[r],s=n[r+1],o=i.destroy;if(i.destroy=void 0,typeof o=="function")try{o()}catch(u){if(s===null)throw Error(M(330));On(s,u)}}for(n=qc,qc=[],r=0;r<n.length;r+=2){i=n[r],s=n[r+1];try{var l=i.create;i.destroy=l()}catch(u){if(s===null)throw Error(M(330));On(s,u)}}for(l=t.current.firstEffect;l!==null;)t=l.nextEffect,l.nextEffect=null,l.flags&8&&(l.sibling=null,l.stateNode=null),l=t;return Y=e,Ft(),!0}function Cm(t,e,n){e=md(n,e),e=Jv(t,e,1),kn(t,e),e=ht(),t=Vl(t,1),t!==null&&(Rl(t,1,e),yt(t,e))}function On(t,e){if(t.tag===3)Cm(t,t,e);else for(var n=t.return;n!==null;){if(n.tag===3){Cm(n,t,e);break}else if(n.tag===1){var r=n.stateNode;if(typeof n.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r))){t=md(e,t);var i=Zv(n,t,1);if(kn(n,i),i=ht(),n=Vl(n,1),n!==null)Rl(n,1,i),yt(n,i);else if(typeof r.componentDidCatch=="function"&&(kt===null||!kt.has(r)))try{r.componentDidCatch(e,t)}catch{}break}}n=n.return}}function iT(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=ht(),t.pingedLanes|=t.suspendedLanes&n,Xe===t&&(We&n)===n&&(De===4||De===3&&(We&62914560)===We&&500>He()-vd?li(t,0):yd|=n),yt(t,e)}function sT(t,e){var n=t.stateNode;n!==null&&n.delete(e),e=0,e===0&&(e=t.mode,e&2?e&4?(Qt===0&&(Qt=Ni),e=zr(62914560&~Qt),e===0&&(e=4194304)):e=vi()===99?1:2:e=1),n=ht(),t=Vl(t,e),t!==null&&(Rl(t,e,n),yt(t,n))}var u_;u_=function(t,e,n){var r=e.lanes;if(t!==null)if(t.memoizedProps!==e.pendingProps||it.current)Tt=!0;else if(n&r)Tt=!!(t.flags&16384);else{switch(Tt=!1,e.tag){case 3:dm(e),$u();break;case 5:rm(e);break;case 1:st(e.type)&&Ea(e);break;case 4:Oc(e,e.stateNode.containerInfo);break;case 10:r=e.memoizedProps.value;var i=e.type._context;ve(Ha,i._currentValue),i._currentValue=r;break;case 13:if(e.memoizedState!==null)return n&e.child.childLanes?fm(t,e,n):(ve(ge,ge.current&1),e=Xt(t,e,n),e!==null?e.sibling:null);ve(ge,ge.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&64){if(r)return vm(t,e,n);e.flags|=64}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),ve(ge,ge.current),r)break;return null;case 23:case 24:return e.lanes=0,Hu(t,e,n)}return Xt(t,e,n)}else Tt=!1;switch(e.lanes=0,e.tag){case 2:if(r=e.type,t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,i=yi(e,qe.current),si(e,n),i=hd(null,e,r,t,i,n),e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0){if(e.tag=1,e.memoizedState=null,e.updateQueue=null,st(r)){var s=!0;Ea(e)}else s=!1;e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,ad(e);var o=r.getDerivedStateFromProps;typeof o=="function"&&Ka(e,r,o,t),i.updater=Dl,e.stateNode=i,i._reactInternals=e,bc(e,r,t,n),e=Mc(null,e,r,!0,s,n)}else e.tag=0,nt(null,e,i,n),e=e.child;return e;case 16:i=e.elementType;e:{switch(t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),t=e.pendingProps,s=i._init,i=s(i._payload),e.type=i,s=e.tag=aT(i),t=wt(i,t),s){case 0:e=Vc(null,e,i,t,n);break e;case 1:e=hm(null,e,i,t,n);break e;case 11:e=um(null,e,i,t,n);break e;case 14:e=cm(null,e,i,wt(i.type,t),r,n);break e}throw Error(M(306,i,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),Vc(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),hm(t,e,r,i,n);case 3:if(dm(e),r=e.updateQueue,t===null||r===null)throw Error(M(282));if(r=e.pendingProps,i=e.memoizedState,i=i!==null?i.element:null,Dv(t,e),Ys(e,r,null,n),r=e.memoizedState.element,r===i)$u(),e=Xt(t,e,n);else{if(i=e.stateNode,(s=i.hydrate)&&(Tn=ii(e.stateNode.containerInfo.firstChild),Yt=e,s=bt=!0),s){if(t=i.mutableSourceEagerHydrationData,t!=null)for(i=0;i<t.length;i+=2)s=t[i],s._workInProgressVersionPrimary=t[i+1],oi.push(s);for(n=jv(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|1024,n=n.sibling}else nt(t,e,r,n),$u();e=e.child}return e;case 5:return rm(e),t===null&&Dc(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,Rc(r,i)?o=null:s!==null&&Rc(r,s)&&(e.flags|=16),Gv(t,e),nt(t,e,o,n),e.child;case 6:return t===null&&Dc(e),null;case 13:return fm(t,e,n);case 4:return Oc(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=Ga(e,null,r,n):nt(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),um(t,e,r,i,n);case 7:return nt(t,e,e.pendingProps,n),e.child;case 8:return nt(t,e,e.pendingProps.children,n),e.child;case 12:return nt(t,e,e.pendingProps.children,n),e.child;case 10:e:{r=e.type._context,i=e.pendingProps,o=e.memoizedProps,s=i.value;var l=e.type._context;if(ve(Ha,l._currentValue),l._currentValue=s,o!==null)if(l=o.value,s=ft(l,s)?0:(typeof r._calculateChangedBits=="function"?r._calculateChangedBits(l,s):1073741823)|0,s===0){if(o.children===i.children&&!it.current){e=Xt(t,e,n);break e}}else for(l=e.child,l!==null&&(l.return=e);l!==null;){var u=l.dependencies;if(u!==null){o=l.child;for(var h=u.firstContext;h!==null;){if(h.context===r&&h.observedBits&s){l.tag===1&&(h=Pn(-1,n&-n),h.tag=2,kn(l,h)),l.lanes|=n,h=l.alternate,h!==null&&(h.lanes|=n),Ov(l.return,n),u.lanes|=n;break}h=h.next}}else o=l.tag===10&&l.type===e.type?null:l.child;if(o!==null)o.return=l;else for(o=l;o!==null;){if(o===e){o=null;break}if(l=o.sibling,l!==null){l.return=o.return,o=l;break}o=o.return}l=o}nt(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,s=e.pendingProps,r=s.children,si(e,n),i=gt(i,s.unstable_observedBits),r=r(i),e.flags|=1,nt(t,e,r,n),e.child;case 14:return i=e.type,s=wt(i,e.pendingProps),s=wt(i.type,s),cm(t,e,i,s,r,n);case 15:return Kv(t,e,e.type,e.pendingProps,r,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:wt(r,i),t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2),e.tag=1,st(r)?(t=!0,Ea(e)):t=!1,si(e,n),Vv(e,r,i),bc(e,r,i,n),Mc(null,e,r,!0,t,n);case 19:return vm(t,e,n);case 23:return Hu(t,e,n);case 24:return Hu(t,e,n)}throw Error(M(156,e.tag))};function oT(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.flags=0,this.lastEffect=this.firstEffect=this.nextEffect=null,this.childLanes=this.lanes=0,this.alternate=null}function pt(t,e,n,r){return new oT(t,e,n,r)}function Ed(t){return t=t.prototype,!(!t||!t.isReactComponent)}function aT(t){if(typeof t=="function")return Ed(t)?1:0;if(t!=null){if(t=t.$$typeof,t===xl)return 11;if(t===Cl)return 14}return 2}function zn(t,e){var n=t.alternate;return n===null?(n=pt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.nextEffect=null,n.firstEffect=null,n.lastEffect=null),n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function xa(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")Ed(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case mn:return ui(n.children,i,s,e);case Uy:o=8,i|=16;break;case Vh:o=8,i|=1;break;case Ts:return t=pt(12,n,e,i|8),t.elementType=Ts,t.type=Ts,t.lanes=s,t;case Is:return t=pt(13,n,e,i),t.type=Is,t.elementType=Is,t.lanes=s,t;case La:return t=pt(19,n,e,i),t.elementType=La,t.lanes=s,t;case zh:return wd(n,i,s,e);case cc:return t=pt(24,n,e,i),t.elementType=cc,t.lanes=s,t;default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case Mh:o=10;break e;case jh:o=9;break e;case xl:o=11;break e;case Cl:o=14;break e;case Uh:o=16,r=null;break e;case Fh:o=22;break e}throw Error(M(130,t==null?t:typeof t,""))}return e=pt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function ui(t,e,n,r){return t=pt(7,t,r,e),t.lanes=n,t}function wd(t,e,n,r){return t=pt(23,t,r,e),t.elementType=zh,t.lanes=n,t}function Ku(t,e,n){return t=pt(6,t,null,e),t.lanes=n,t}function Gu(t,e,n){return e=pt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function lT(t,e,n){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.pendingContext=this.context=null,this.hydrate=n,this.callbackNode=null,this.callbackPriority=0,this.eventTimes=Nu(0),this.expirationTimes=Nu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Nu(0),this.mutableSourceEagerHydrationData=null}function uT(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ur,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function rl(t,e,n,r){var i=e.current,s=ht(),o=Nn(i);e:if(n){n=n._reactInternals;t:{if(Rr(n)!==n||n.tag!==1)throw Error(M(170));var l=n;do{switch(l.tag){case 3:l=l.stateNode.context;break t;case 1:if(st(l.type)){l=l.stateNode.__reactInternalMemoizedMergedChildContext;break t}}l=l.return}while(l!==null);throw Error(M(171))}if(n.tag===1){var u=n.type;if(st(u)){n=Cv(n,u,l);break e}}n=l}else n=Fn;return e.context===null?e.context=n:e.pendingContext=n,e=Pn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),kn(i,e),bn(i,o,s),o}function Qu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Am(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function Td(t,e){Am(t,e),(t=t.alternate)&&Am(t,e)}function cT(){return null}function Id(t,e,n){var r=n!=null&&n.hydrationOptions!=null&&n.hydrationOptions.mutableSources||null;if(n=new lT(t,e,n!=null&&n.hydrate===!0),e=pt(3,null,null,e===2?7:e===1?3:0),n.current=e,e.stateNode=n,ad(e),t[ki]=n.current,wv(t.nodeType===8?t.parentNode:t),r)for(t=0;t<r.length;t++){e=r[t];var i=e._getVersion;i=i(e._source),n.mutableSourceEagerHydrationData==null?n.mutableSourceEagerHydrationData=[e,i]:n.mutableSourceEagerHydrationData.push(e,i)}this._internalRoot=n}Id.prototype.render=function(t){rl(t,this._internalRoot,null,null)};Id.prototype.unmount=function(){var t=this._internalRoot,e=t.containerInfo;rl(null,t,null,function(){e[ki]=null})};function go(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function hT(t,e){if(e||(e=t?t.nodeType===9?t.documentElement:t.firstChild:null,e=!(!e||e.nodeType!==1||!e.hasAttribute("data-reactroot"))),!e)for(var n;n=t.lastChild;)t.removeChild(n);return new Id(t,0,e?{hydrate:!0}:void 0)}function Ml(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s._internalRoot;if(typeof i=="function"){var l=i;i=function(){var h=Qu(o);l.call(h)}}rl(e,o,t,i)}else{if(s=n._reactRootContainer=hT(n,r),o=s._internalRoot,typeof i=="function"){var u=i;i=function(){var h=Qu(o);u.call(h)}}r_(function(){rl(e,o,t,i)})}return Qu(o)}ev=function(t){if(t.tag===13){var e=ht();bn(t,4,e),Td(t,4)}};Kh=function(t){if(t.tag===13){var e=ht();bn(t,67108864,e),Td(t,67108864)}};tv=function(t){if(t.tag===13){var e=ht(),n=Nn(t);bn(t,n,e),Td(t,n)}};nv=function(t,e){return e()};Ec=function(t,e,n){switch(e){case"input":if(dc(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=bl(r);if(!i)throw Error(M(90));By(r),dc(r,i)}}}break;case"textarea":$y(t,n);break;case"select":e=n.value,e!=null&&ti(t,!!n.multiple,e,!1)}};Hh=n_;Yy=function(t,e,n,r,i){var s=Y;Y|=4;try{return _r(98,t.bind(null,e,n,r,i))}finally{Y=s,Y===0&&(Oi(),Ft())}};Wh=function(){!(Y&49)&&(X1(),Xn())};Xy=function(t,e){var n=Y;Y|=2;try{return t(e)}finally{Y=n,Y===0&&(Oi(),Ft())}};function c_(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!go(e))throw Error(M(200));return uT(t,e,null,n)}var dT={Events:[fo,Yr,bl,Gy,Qy,Xn,{current:!1}]},cs={findFiberByHostInstance:hr,bundleType:0,version:"17.0.2",rendererPackageName:"react-dom"},fT={bundleType:cs.bundleType,version:cs.version,rendererPackageName:cs.rendererPackageName,rendererConfig:cs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ar.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=Zy(t),t===null?null:t.stateNode},findFiberByHostInstance:cs.findFiberByHostInstance||cT,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var sa=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!sa.isDisabled&&sa.supportsFiber)try{rd=sa.inject(fT),mr=sa}catch{}}vt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dT;vt.createPortal=c_;vt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(M(188)):Error(M(268,Object.keys(t)));return t=Zy(e),t=t===null?null:t.stateNode,t};vt.flushSync=function(t,e){var n=Y;if(n&48)return t(e);Y|=1;try{if(t)return _r(99,t.bind(null,e))}finally{Y=n,Ft()}};vt.hydrate=function(t,e,n){if(!go(e))throw Error(M(200));return Ml(null,t,e,!0,n)};vt.render=function(t,e,n){if(!go(e))throw Error(M(200));return Ml(null,t,e,!1,n)};vt.unmountComponentAtNode=function(t){if(!go(t))throw Error(M(40));return t._reactRootContainer?(r_(function(){Ml(null,null,t,!1,function(){t._reactRootContainer=null,t[ki]=null})}),!0):!1};vt.unstable_batchedUpdates=n_;vt.unstable_createPortal=function(t,e){return c_(t,e,2<arguments.length&&arguments[2]!==void 0?arguments[2]:null)};vt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!go(n))throw Error(M(200));if(t==null||t._reactInternals===void 0)throw Error(M(38));return Ml(t,e,n,!1,r)};vt.version="17.0.2";function h_(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(h_)}catch(t){console.error(t)}}h_(),Ly.exports=vt;var pT=Ly.exports;const mT=my(pT);/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function eo(){return eo=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},eo.apply(this,arguments)}var In;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(In||(In={}));const Rm="popstate";function gT(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:l}=r.location;return Yc("",{pathname:s,search:o,hash:l},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:il(i)}return vT(e,n,null,t)}function Ie(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function d_(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function yT(){return Math.random().toString(36).substr(2,8)}function Pm(t,e){return{usr:t.state,key:t.key,idx:e}}function Yc(t,e,n,r){return n===void 0&&(n=null),eo({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?Di(e):e,{state:n,key:e&&e.key||r||yT()})}function il(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function Di(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function vT(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,l=In.Pop,u=null,h=f();h==null&&(h=0,o.replaceState(eo({},o.state,{idx:h}),""));function f(){return(o.state||{idx:null}).idx}function v(){l=In.Pop;let y=f(),w=y==null?null:y-h;h=y,u&&u({action:l,location:O.location,delta:w})}function g(y,w){l=In.Push;let I=Yc(O.location,y,w);n&&n(I,y),h=f()+1;let R=Pm(I,h),N=O.createHref(I);try{o.pushState(R,"",N)}catch(z){if(z instanceof DOMException&&z.name==="DataCloneError")throw z;i.location.assign(N)}s&&u&&u({action:l,location:O.location,delta:1})}function C(y,w){l=In.Replace;let I=Yc(O.location,y,w);n&&n(I,y),h=f();let R=Pm(I,h),N=O.createHref(I);o.replaceState(R,"",N),s&&u&&u({action:l,location:O.location,delta:0})}function b(y){let w=i.location.origin!=="null"?i.location.origin:i.location.href,I=typeof y=="string"?y:il(y);return I=I.replace(/ $/,"%20"),Ie(w,"No window.location.(origin|href) available to create URL for href: "+I),new URL(I,w)}let O={get action(){return l},get location(){return t(i,o)},listen(y){if(u)throw new Error("A history only accepts one active listener");return i.addEventListener(Rm,v),u=y,()=>{i.removeEventListener(Rm,v),u=null}},createHref(y){return e(i,y)},createURL:b,encodeLocation(y){let w=b(y);return{pathname:w.pathname,search:w.search,hash:w.hash}},push:g,replace:C,go(y){return o.go(y)}};return O}var km;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(km||(km={}));function _T(t,e,n){return n===void 0&&(n="/"),ET(t,e,n,!1)}function ET(t,e,n,r){let i=typeof e=="string"?Di(e):e,s=Sd(i.pathname||"/",n);if(s==null)return null;let o=f_(t);wT(o);let l=null;for(let u=0;l==null&&u<o.length;++u){let h=bT(s);l=kT(o[u],h,r)}return l}function f_(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,l)=>{let u={relativePath:l===void 0?s.path||"":l,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};u.relativePath.startsWith("/")&&(Ie(u.relativePath.startsWith(r),'Absolute route path "'+u.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),u.relativePath=u.relativePath.slice(r.length));let h=Dn([r,u.relativePath]),f=n.concat(u);s.children&&s.children.length>0&&(Ie(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+h+'".')),f_(s.children,e,f,h)),!(s.path==null&&!s.index)&&e.push({path:h,score:RT(h,s.index),routesMeta:f})};return t.forEach((s,o)=>{var l;if(s.path===""||!((l=s.path)!=null&&l.includes("?")))i(s,o);else for(let u of p_(s.path))i(s,o,u)}),e}function p_(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=p_(r.join("/")),l=[];return l.push(...o.map(u=>u===""?s:[s,u].join("/"))),i&&l.push(...o),l.map(u=>t.startsWith("/")&&u===""?"/":u)}function wT(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:PT(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const TT=/^:[\w-]+$/,IT=3,ST=2,xT=1,CT=10,AT=-2,Nm=t=>t==="*";function RT(t,e){let n=t.split("/"),r=n.length;return n.some(Nm)&&(r+=AT),e&&(r+=ST),n.filter(i=>!Nm(i)).reduce((i,s)=>i+(TT.test(s)?IT:s===""?xT:CT),r)}function PT(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function kT(t,e,n){n===void 0&&(n=!1);let{routesMeta:r}=t,i={},s="/",o=[];for(let l=0;l<r.length;++l){let u=r[l],h=l===r.length-1,f=s==="/"?e:e.slice(s.length)||"/",v=bm({path:u.relativePath,caseSensitive:u.caseSensitive,end:h},f),g=u.route;if(!v&&h&&n&&!r[r.length-1].route.index&&(v=bm({path:u.relativePath,caseSensitive:u.caseSensitive,end:!1},f)),!v)return null;Object.assign(i,v.params),o.push({params:i,pathname:Dn([s,v.pathname]),pathnameBase:VT(Dn([s,v.pathnameBase])),route:g}),v.pathnameBase!=="/"&&(s=Dn([s,v.pathnameBase]))}return o}function bm(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=NT(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((h,f,v)=>{let{paramName:g,isOptional:C}=f;if(g==="*"){let O=l[v]||"";o=s.slice(0,s.length-O.length).replace(/(.)\/+$/,"$1")}const b=l[v];return C&&!b?h[g]=void 0:h[g]=(b||"").replace(/%2F/g,"/"),h},{}),pathname:s,pathnameBase:o,pattern:t}}function NT(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),d_(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(o,l,u)=>(r.push({paramName:l,isOptional:u!=null}),u?"/?([^\\/]+)?":"/([^\\/]+)"));return t.endsWith("*")?(r.push({paramName:"*"}),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function bT(t){try{return t.split("/").map(e=>decodeURIComponent(e).replace(/\//g,"%2F")).join("/")}catch(e){return d_(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function Sd(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function OT(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?Di(t):t;return{pathname:n?n.startsWith("/")?n:DT(n,e):e,search:MT(r),hash:jT(i)}}function DT(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function Yu(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function LT(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function m_(t,e){let n=LT(t);return e?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function g_(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=Di(t):(i=eo({},t),Ie(!i.pathname||!i.pathname.includes("?"),Yu("?","pathname","search",i)),Ie(!i.pathname||!i.pathname.includes("#"),Yu("#","pathname","hash",i)),Ie(!i.search||!i.search.includes("#"),Yu("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,l;if(o==null)l=n;else{let v=e.length-1;if(!r&&o.startsWith("..")){let g=o.split("/");for(;g[0]==="..";)g.shift(),v-=1;i.pathname=g.join("/")}l=v>=0?e[v]:"/"}let u=OT(i,l),h=o&&o!=="/"&&o.endsWith("/"),f=(s||o===".")&&n.endsWith("/");return!u.pathname.endsWith("/")&&(h||f)&&(u.pathname+="/"),u}const Dn=t=>t.join("/").replace(/\/\/+/g,"/"),VT=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MT=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,jT=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;function UT(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.internal=="boolean"&&"data"in t}const y_=["post","put","patch","delete"];new Set(y_);const FT=["get",...y_];new Set(FT);/**
 * React Router v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function to(){return to=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},to.apply(this,arguments)}const xd=j.createContext(null),BT=j.createContext(null),kr=j.createContext(null),jl=j.createContext(null),Nr=j.createContext({outlet:null,matches:[],isDataRoute:!1}),v_=j.createContext(null);function zT(t,e){let{relative:n}=e===void 0?{}:e;yo()||Ie(!1);let{basename:r,navigator:i}=j.useContext(kr),{hash:s,pathname:o,search:l}=w_(t,{relative:n}),u=o;return r!=="/"&&(u=o==="/"?r:Dn([r,o])),i.createHref({pathname:u,search:l,hash:s})}function yo(){return j.useContext(jl)!=null}function vo(){return yo()||Ie(!1),j.useContext(jl).location}function __(t){j.useContext(kr).static||j.useLayoutEffect(t)}function E_(){let{isDataRoute:t}=j.useContext(Nr);return t?tI():$T()}function $T(){yo()||Ie(!1);let t=j.useContext(xd),{basename:e,future:n,navigator:r}=j.useContext(kr),{matches:i}=j.useContext(Nr),{pathname:s}=vo(),o=JSON.stringify(m_(i,n.v7_relativeSplatPath)),l=j.useRef(!1);return __(()=>{l.current=!0}),j.useCallback(function(h,f){if(f===void 0&&(f={}),!l.current)return;if(typeof h=="number"){r.go(h);return}let v=g_(h,JSON.parse(o),s,f.relative==="path");t==null&&e!=="/"&&(v.pathname=v.pathname==="/"?e:Dn([e,v.pathname])),(f.replace?r.replace:r.push)(v,f.state,f)},[e,r,o,s,t])}function w_(t,e){let{relative:n}=e===void 0?{}:e,{future:r}=j.useContext(kr),{matches:i}=j.useContext(Nr),{pathname:s}=vo(),o=JSON.stringify(m_(i,r.v7_relativeSplatPath));return j.useMemo(()=>g_(t,JSON.parse(o),s,n==="path"),[t,o,s,n])}function HT(t,e){return WT(t,e)}function WT(t,e,n,r){yo()||Ie(!1);let{navigator:i}=j.useContext(kr),{matches:s}=j.useContext(Nr),o=s[s.length-1],l=o?o.params:{};o&&o.pathname;let u=o?o.pathnameBase:"/";o&&o.route;let h=vo(),f;if(e){var v;let y=typeof e=="string"?Di(e):e;u==="/"||(v=y.pathname)!=null&&v.startsWith(u)||Ie(!1),f=y}else f=h;let g=f.pathname||"/",C=g;if(u!=="/"){let y=u.replace(/^\//,"").split("/");C="/"+g.replace(/^\//,"").split("/").slice(y.length).join("/")}let b=_T(t,{pathname:C}),O=YT(b&&b.map(y=>Object.assign({},y,{params:Object.assign({},l,y.params),pathname:Dn([u,i.encodeLocation?i.encodeLocation(y.pathname).pathname:y.pathname]),pathnameBase:y.pathnameBase==="/"?u:Dn([u,i.encodeLocation?i.encodeLocation(y.pathnameBase).pathname:y.pathnameBase])})),s,n,r);return e&&O?j.createElement(jl.Provider,{value:{location:to({pathname:"/",search:"",hash:"",state:null,key:"default"},f),navigationType:In.Pop}},O):O}function qT(){let t=eI(),e=UT(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return j.createElement(j.Fragment,null,j.createElement("h2",null,"Unexpected Application Error!"),j.createElement("h3",{style:{fontStyle:"italic"}},e),n?j.createElement("pre",{style:i},n):null,s)}const KT=j.createElement(qT,null);class GT extends j.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location||n.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error!==void 0?e.error:n.error,location:n.location,revalidation:e.revalidation||n.revalidation}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error!==void 0?j.createElement(Nr.Provider,{value:this.props.routeContext},j.createElement(v_.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function QT(t){let{routeContext:e,match:n,children:r}=t,i=j.useContext(xd);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),j.createElement(Nr.Provider,{value:e},r)}function YT(t,e,n,r){var i;if(e===void 0&&(e=[]),n===void 0&&(n=null),r===void 0&&(r=null),t==null){var s;if(!n)return null;if(n.errors)t=n.matches;else if((s=r)!=null&&s.v7_partialHydration&&e.length===0&&!n.initialized&&n.matches.length>0)t=n.matches;else return null}let o=t,l=(i=n)==null?void 0:i.errors;if(l!=null){let f=o.findIndex(v=>v.route.id&&(l==null?void 0:l[v.route.id])!==void 0);f>=0||Ie(!1),o=o.slice(0,Math.min(o.length,f+1))}let u=!1,h=-1;if(n&&r&&r.v7_partialHydration)for(let f=0;f<o.length;f++){let v=o[f];if((v.route.HydrateFallback||v.route.hydrateFallbackElement)&&(h=f),v.route.id){let{loaderData:g,errors:C}=n,b=v.route.loader&&g[v.route.id]===void 0&&(!C||C[v.route.id]===void 0);if(v.route.lazy||b){u=!0,h>=0?o=o.slice(0,h+1):o=[o[0]];break}}}return o.reduceRight((f,v,g)=>{let C,b=!1,O=null,y=null;n&&(C=l&&v.route.id?l[v.route.id]:void 0,O=v.route.errorElement||KT,u&&(h<0&&g===0?(nI("route-fallback",!1),b=!0,y=null):h===g&&(b=!0,y=v.route.hydrateFallbackElement||null)));let w=e.concat(o.slice(0,g+1)),I=()=>{let R;return C?R=O:b?R=y:v.route.Component?R=j.createElement(v.route.Component,null):v.route.element?R=v.route.element:R=f,j.createElement(QT,{match:v,routeContext:{outlet:f,matches:w,isDataRoute:n!=null},children:R})};return n&&(v.route.ErrorBoundary||v.route.errorElement||g===0)?j.createElement(GT,{location:n.location,revalidation:n.revalidation,component:O,error:C,children:I(),routeContext:{outlet:null,matches:w,isDataRoute:!0}}):I()},null)}var T_=function(t){return t.UseBlocker="useBlocker",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t}(T_||{}),sl=function(t){return t.UseBlocker="useBlocker",t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator",t.UseNavigateStable="useNavigate",t.UseRouteId="useRouteId",t}(sl||{});function XT(t){let e=j.useContext(xd);return e||Ie(!1),e}function JT(t){let e=j.useContext(BT);return e||Ie(!1),e}function ZT(t){let e=j.useContext(Nr);return e||Ie(!1),e}function I_(t){let e=ZT(),n=e.matches[e.matches.length-1];return n.route.id||Ie(!1),n.route.id}function eI(){var t;let e=j.useContext(v_),n=JT(sl.UseRouteError),r=I_(sl.UseRouteError);return e!==void 0?e:(t=n.errors)==null?void 0:t[r]}function tI(){let{router:t}=XT(T_.UseNavigateStable),e=I_(sl.UseNavigateStable),n=j.useRef(!1);return __(()=>{n.current=!0}),j.useCallback(function(i,s){s===void 0&&(s={}),n.current&&(typeof i=="number"?t.navigate(i):t.navigate(i,to({fromRouteId:e},s)))},[t,e])}const Om={};function nI(t,e,n){!e&&!Om[t]&&(Om[t]=!0)}function rI(t,e){t==null||t.v7_startTransition,(t==null?void 0:t.v7_relativeSplatPath)===void 0&&(!e||e.v7_relativeSplatPath),e&&(e.v7_fetcherPersist,e.v7_normalizeFormMethod,e.v7_partialHydration,e.v7_skipActionErrorRevalidation)}function tt(t){Ie(!1)}function iI(t){let{basename:e="/",children:n=null,location:r,navigationType:i=In.Pop,navigator:s,static:o=!1,future:l}=t;yo()&&Ie(!1);let u=e.replace(/^\/*/,"/"),h=j.useMemo(()=>({basename:u,navigator:s,static:o,future:to({v7_relativeSplatPath:!1},l)}),[u,l,s,o]);typeof r=="string"&&(r=Di(r));let{pathname:f="/",search:v="",hash:g="",state:C=null,key:b="default"}=r,O=j.useMemo(()=>{let y=Sd(f,u);return y==null?null:{location:{pathname:y,search:v,hash:g,state:C,key:b},navigationType:i}},[u,f,v,g,C,b,i]);return O==null?null:j.createElement(kr.Provider,{value:h},j.createElement(jl.Provider,{children:n,value:O}))}function sI(t){let{children:e,location:n}=t;return HT(Xc(e),n)}new Promise(()=>{});function Xc(t,e){e===void 0&&(e=[]);let n=[];return j.Children.forEach(t,(r,i)=>{if(!j.isValidElement(r))return;let s=[...e,i];if(r.type===j.Fragment){n.push.apply(n,Xc(r.props.children,s));return}r.type!==tt&&Ie(!1),!r.props.index||!r.props.children||Ie(!1);let o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(o.children=Xc(r.props.children,s)),n.push(o)}),n}/**
 * React Router DOM v6.30.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Jc(){return Jc=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Jc.apply(this,arguments)}function oI(t,e){if(t==null)return{};var n={},r=Object.keys(t),i,s;for(s=0;s<r.length;s++)i=r[s],!(e.indexOf(i)>=0)&&(n[i]=t[i]);return n}function aI(t){return!!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function lI(t,e){return t.button===0&&(!e||e==="_self")&&!aI(t)}const uI=["onClick","relative","reloadDocument","replace","state","target","to","preventScrollReset","viewTransition"],cI="6";try{window.__reactRouterVersion=cI}catch{}const hI="startTransition",Dm=pw[hI];function dI(t){let{basename:e,children:n,future:r,window:i}=t,s=j.useRef();s.current==null&&(s.current=gT({window:i,v5Compat:!0}));let o=s.current,[l,u]=j.useState({action:o.action,location:o.location}),{v7_startTransition:h}=r||{},f=j.useCallback(v=>{h&&Dm?Dm(()=>u(v)):u(v)},[u,h]);return j.useLayoutEffect(()=>o.listen(f),[o,f]),j.useEffect(()=>rI(r),[r]),j.createElement(iI,{basename:e,children:n,location:l.location,navigationType:l.action,navigator:o,future:r})}const fI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",pI=/^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,Se=j.forwardRef(function(e,n){let{onClick:r,relative:i,reloadDocument:s,replace:o,state:l,target:u,to:h,preventScrollReset:f,viewTransition:v}=e,g=oI(e,uI),{basename:C}=j.useContext(kr),b,O=!1;if(typeof h=="string"&&pI.test(h)&&(b=h,fI))try{let R=new URL(window.location.href),N=h.startsWith("//")?new URL(R.protocol+h):new URL(h),z=Sd(N.pathname,C);N.origin===R.origin&&z!=null?h=z+N.search+N.hash:O=!0}catch{}let y=zT(h,{relative:i}),w=mI(h,{replace:o,state:l,target:u,preventScrollReset:f,relative:i,viewTransition:v});function I(R){r&&r(R),R.defaultPrevented||w(R)}return j.createElement("a",Jc({},g,{href:b||y,onClick:O||s?r:I,ref:n,target:u}))});var Lm;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmit="useSubmit",t.UseSubmitFetcher="useSubmitFetcher",t.UseFetcher="useFetcher",t.useViewTransitionState="useViewTransitionState"})(Lm||(Lm={}));var Vm;(function(t){t.UseFetcher="useFetcher",t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(Vm||(Vm={}));function mI(t,e){let{target:n,replace:r,state:i,preventScrollReset:s,relative:o,viewTransition:l}=e===void 0?{}:e,u=E_(),h=vo(),f=w_(t,{relative:o});return j.useCallback(v=>{if(lI(v,n)){v.preventDefault();let g=r!==void 0?r:il(h)===il(f);u(t,{replace:g,state:i,preventScrollReset:s,relative:o,viewTransition:l})}},[h,u,f,r,i,n,t,s,o,l])}const gI=()=>{const[t,e]=j.useState(!1),n=vo(),r=s=>n.pathname===s,i=[{path:"/",label:"Home"},{path:"/about",label:"About"},{path:"/services",label:"Services"},{path:"/gallery",label:"Gallery"},{path:"/contact",label:"Contact"}];return p.jsx("nav",{className:"bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"flex justify-between h-16",children:[p.jsx("div",{className:"flex items-center",children:p.jsx(Se,{to:"/",className:"text-white text-xl font-bold",children:"GSK App"})}),p.jsxs("div",{className:"hidden md:flex items-center space-x-8",children:[i.map(s=>p.jsx(Se,{to:s.path,className:`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${r(s.path)?"bg-white/20 text-white":"text-white/80 hover:text-white hover:bg-white/10"}`,children:s.label},s.path)),p.jsx(Se,{to:"/login",className:"bg-white text-blue-600 px-4 py-2 rounded-md text-sm font-medium hover:bg-gray-100 transition-colors duration-200",children:"Login"})]}),p.jsx("div",{className:"md:hidden flex items-center",children:p.jsx("button",{onClick:()=>e(!t),className:"text-white hover:text-gray-300 focus:outline-none focus:text-gray-300",children:p.jsx("svg",{className:"h-6 w-6 fill-current",viewBox:"0 0 24 24",children:t?p.jsx("path",{d:"M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"}):p.jsx("path",{d:"M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"})})})})]}),t&&p.jsx("div",{className:"md:hidden",children:p.jsxs("div",{className:"px-2 pt-2 pb-3 space-y-1 sm:px-3",children:[i.map(s=>p.jsx(Se,{to:s.path,className:`block px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${r(s.path)?"bg-white/20 text-white":"text-white/80 hover:text-white hover:bg-white/10"}`,onClick:()=>e(!1),children:s.label},s.path)),p.jsx(Se,{to:"/login",className:"block bg-white text-blue-600 px-3 py-2 rounded-md text-base font-medium hover:bg-gray-100 transition-colors duration-200",onClick:()=>e(!1),children:"Login"})]})})]})})},yI=()=>p.jsx("footer",{className:"bg-gray-900 text-white",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12",children:[p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8",children:[p.jsxs("div",{className:"space-y-4",children:[p.jsx("h3",{className:"text-lg font-bold",children:"GSK App"}),p.jsx("p",{className:"text-gray-300",children:"A modern React application with Firebase integration and admin panel."})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h4",{className:"text-md font-semibold",children:"Quick Links"}),p.jsxs("ul",{className:"space-y-2",children:[p.jsx("li",{children:p.jsx(Se,{to:"/",className:"text-gray-300 hover:text-white transition-colors",children:"Home"})}),p.jsx("li",{children:p.jsx(Se,{to:"/about",className:"text-gray-300 hover:text-white transition-colors",children:"About"})}),p.jsx("li",{children:p.jsx(Se,{to:"/services",className:"text-gray-300 hover:text-white transition-colors",children:"Services"})}),p.jsx("li",{children:p.jsx(Se,{to:"/contact",className:"text-gray-300 hover:text-white transition-colors",children:"Contact"})})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h4",{className:"text-md font-semibold",children:"Services"}),p.jsxs("ul",{className:"space-y-2",children:[p.jsx("li",{children:p.jsx("span",{className:"text-gray-300",children:"Web Development"})}),p.jsx("li",{children:p.jsx("span",{className:"text-gray-300",children:"App Development"})}),p.jsx("li",{children:p.jsx("span",{className:"text-gray-300",children:"Consulting"})}),p.jsx("li",{children:p.jsx("span",{className:"text-gray-300",children:"Support"})})]})]}),p.jsxs("div",{className:"space-y-4",children:[p.jsx("h4",{className:"text-md font-semibold",children:"Contact"}),p.jsxs("div",{className:"text-gray-300 space-y-2",children:[p.jsx("p",{children:"📧 info@gskapp.com"}),p.jsx("p",{children:"📱 +1 (555) 123-4567"}),p.jsx("p",{children:"📍 123 Tech Street, City"})]})]})]}),p.jsx("div",{className:"border-t border-gray-700 mt-8 pt-8 text-center",children:p.jsx("p",{className:"text-gray-300",children:"© 2025 GSK App. All rights reserved."})})]})}),Mm=()=>p.jsxs(p.Fragment,{children:[p.jsx("section",{className:"bg-gradient-to-br from-blue-50 to-indigo-100 py-20",children:p.jsx("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:p.jsxs("div",{className:"text-center",children:[p.jsxs("h1",{className:"text-4xl md:text-6xl font-bold text-gray-900 mb-6",children:["Welcome to ",p.jsx("span",{className:"text-blue-600",children:"GSK App"})]}),p.jsx("p",{className:"text-xl text-gray-600 mb-8 max-w-3xl mx-auto",children:"A modern React application with Firebase authentication, admin panel, and beautiful UI components built with Tailwind CSS."}),p.jsxs("div",{className:"flex flex-col sm:flex-row gap-4 justify-center",children:[p.jsx(Se,{to:"/services",className:"bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200",children:"Explore Services"}),p.jsx(Se,{to:"/contact",className:"border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200",children:"Get in Touch"})]})]})})}),p.jsx("section",{className:"py-20 bg-white",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"Key Features"}),p.jsx("p",{className:"text-lg text-gray-600",children:"Everything you need for a modern web application"})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[p.jsxs("div",{className:"text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200",children:[p.jsx("div",{className:"w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4",children:p.jsx("span",{className:"text-2xl",children:"🔥"})}),p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Firebase Integration"}),p.jsx("p",{className:"text-gray-600",children:"Full Firebase authentication, Firestore database, and storage capabilities."})]}),p.jsxs("div",{className:"text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200",children:[p.jsx("div",{className:"w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4",children:p.jsx("span",{className:"text-2xl",children:"⚡"})}),p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Lightning Fast"}),p.jsx("p",{className:"text-gray-600",children:"Built with Vite for fast development and optimized production builds."})]}),p.jsxs("div",{className:"text-center p-6 rounded-lg hover:shadow-lg transition-shadow duration-200",children:[p.jsx("div",{className:"w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4",children:p.jsx("span",{className:"text-2xl",children:"🎨"})}),p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Modern Design"}),p.jsx("p",{className:"text-gray-600",children:"Beautiful, responsive UI built with Tailwind CSS and modern design principles."})]})]})]})}),p.jsx("section",{className:"py-20 bg-gray-50",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center",children:[p.jsx("h2",{className:"text-3xl md:text-4xl font-bold text-gray-900 mb-4",children:"Ready to Get Started?"}),p.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Join us today and experience the power of modern web development."}),p.jsx(Se,{to:"/register",className:"bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-200 inline-block",children:"Sign Up Now"})]})})]}),vI=()=>p.jsx("div",{className:"py-20",children:p.jsxs("div",{className:"max-w-4xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:"About GSK App"}),p.jsx("p",{className:"text-xl text-gray-600",children:"Learn more about our mission, vision, and the team behind this innovative platform."})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Our Story"}),p.jsx("p",{className:"text-gray-600 mb-4",children:"GSK App was born from the idea of creating a modern, scalable web application that combines the power of React, Firebase, and beautiful design principles."}),p.jsx("p",{className:"text-gray-600",children:"We believe in building applications that are not only functional but also provide an exceptional user experience across all devices and platforms."})]}),p.jsxs("div",{className:"bg-gradient-to-br from-blue-50 to-indigo-100 p-8 rounded-lg",children:[p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-4",children:"Key Values"}),p.jsxs("ul",{className:"space-y-2 text-gray-600",children:[p.jsx("li",{children:"✨ Innovation & Excellence"}),p.jsx("li",{children:"🚀 Performance & Speed"}),p.jsx("li",{children:"🎨 Beautiful Design"}),p.jsx("li",{children:"🔒 Security & Privacy"}),p.jsx("li",{children:"📱 Mobile-First Approach"})]})]})]})]})}),_I=({title:t,description:e,icon:n,onClick:r})=>p.jsxs("div",{className:"border border-gray-200 rounded-lg p-6 shadow-sm hover:shadow-lg transition-shadow duration-200 cursor-pointer bg-white hover:bg-gray-50",onClick:r,children:[n&&p.jsx("div",{className:"text-3xl mb-4",children:n}),p.jsx("h3",{className:"text-xl font-semibold mb-3 text-gray-900",children:t}),p.jsx("p",{className:"text-gray-600 leading-relaxed",children:e})]}),EI=()=>{const t=[{title:"Web Development",description:"Modern, responsive websites built with the latest technologies and best practices.",icon:"🌐"},{title:"Mobile Apps",description:"Native and cross-platform mobile applications for iOS and Android.",icon:"📱"},{title:"Cloud Solutions",description:"Scalable cloud infrastructure and deployment solutions for your applications.",icon:"☁️"},{title:"UI/UX Design",description:"Beautiful, user-centered designs that provide exceptional user experiences.",icon:"🎨"},{title:"Consulting",description:"Expert advice and guidance for your technology and business decisions.",icon:"💡"},{title:"Support & Maintenance",description:"Ongoing support and maintenance to keep your applications running smoothly.",icon:"🔧"}];return p.jsx("div",{className:"py-20",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:"Our Services"}),p.jsx("p",{className:"text-xl text-gray-600 max-w-3xl mx-auto",children:"We offer comprehensive technology solutions to help your business grow and succeed in the digital world."})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((e,n)=>p.jsx(_I,{title:e.title,description:e.description,icon:e.icon,onClick:()=>alert(`Learn more about ${e.title}`)},n))}),p.jsxs("div",{className:"text-center mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12",children:[p.jsx("h2",{className:"text-3xl font-bold text-gray-900 mb-4",children:"Ready to Get Started?"}),p.jsx("p",{className:"text-lg text-gray-600 mb-8",children:"Contact us today to discuss your project and see how we can help."}),p.jsx(Se,{to:"/contact",className:"bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 inline-block",children:"Contact Us"})]})]})})},wI=({onSubmit:t})=>{const[e,n]=j.useState(""),[r,i]=j.useState(""),[s,o]=j.useState(""),[l,u]=j.useState(!1),[h,f]=j.useState(!1),[v,g]=j.useState(null),C=async b=>{if(b.preventDefault(),g(null),f(!1),u(!0),!e||!r||!s){g("Please fill in all fields."),u(!1);return}try{t?await t({name:e,email:r,message:s}):await new Promise(O=>setTimeout(O,1e3)),f(!0),n(""),i(""),o("")}catch{g("Failed to send message. Please try again.")}finally{u(!1)}};return p.jsxs("form",{onSubmit:C,className:"space-y-6",children:[p.jsxs("div",{children:[p.jsx("label",{htmlFor:"name",className:"block text-sm font-medium text-gray-700 mb-2",children:"Full Name"}),p.jsx("input",{type:"text",id:"name",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"Your full name",value:e,onChange:b=>n(b.target.value),required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"email",className:"block text-sm font-medium text-gray-700 mb-2",children:"Email Address"}),p.jsx("input",{type:"email",id:"email",className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors",placeholder:"your@email.com",value:r,onChange:b=>i(b.target.value),required:!0})]}),p.jsxs("div",{children:[p.jsx("label",{htmlFor:"message",className:"block text-sm font-medium text-gray-700 mb-2",children:"Message"}),p.jsx("textarea",{id:"message",rows:4,className:"w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-vertical",placeholder:"Tell us about your project or question...",value:s,onChange:b=>o(b.target.value),required:!0})]}),v&&p.jsx("div",{className:"bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg",children:v}),h&&p.jsx("div",{className:"bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg",children:"Thank you! Your message has been sent successfully."}),p.jsx("button",{type:"submit",disabled:l,className:`w-full py-3 px-6 rounded-lg font-semibold transition-colors ${l?"bg-gray-400 cursor-not-allowed":"bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"} text-white`,children:l?"Sending...":"Send Message"})]})},TI=()=>p.jsx("div",{className:"py-20",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:"Contact Us"}),p.jsx("p",{className:"text-xl text-gray-600",children:"Get in touch with us. We'd love to hear from you!"})]}),p.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-2 gap-12",children:[p.jsxs("div",{children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Get in Touch"}),p.jsxs("div",{className:"space-y-6",children:[p.jsxs("div",{className:"flex items-start",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx("span",{className:"text-2xl",children:"📧"})}),p.jsxs("div",{className:"ml-3",children:[p.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Email"}),p.jsx("p",{className:"text-gray-600",children:"info@gskapp.com"})]})]}),p.jsxs("div",{className:"flex items-start",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx("span",{className:"text-2xl",children:"📱"})}),p.jsxs("div",{className:"ml-3",children:[p.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Phone"}),p.jsx("p",{className:"text-gray-600",children:"+1 (555) 123-4567"})]})]}),p.jsxs("div",{className:"flex items-start",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx("span",{className:"text-2xl",children:"📍"})}),p.jsxs("div",{className:"ml-3",children:[p.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Office"}),p.jsxs("p",{className:"text-gray-600",children:["123 Tech Street",p.jsx("br",{}),"Innovation City, IC 12345"]})]})]}),p.jsxs("div",{className:"flex items-start",children:[p.jsx("div",{className:"flex-shrink-0",children:p.jsx("span",{className:"text-2xl",children:"🕒"})}),p.jsxs("div",{className:"ml-3",children:[p.jsx("h3",{className:"text-lg font-medium text-gray-900",children:"Business Hours"}),p.jsxs("p",{className:"text-gray-600",children:["Monday - Friday: 9:00 AM - 6:00 PM",p.jsx("br",{}),"Saturday: 10:00 AM - 4:00 PM"]})]})]})]})]}),p.jsxs("div",{className:"bg-gray-50 p-8 rounded-lg",children:[p.jsx("h2",{className:"text-2xl font-bold text-gray-900 mb-6",children:"Send us a Message"}),p.jsx(wI,{})]})]})]})}),II=({imageUrl:t,alt:e,link:n,label:r})=>p.jsxs("a",{href:n,className:"block overflow-hidden rounded shadow hover:shadow-lg transition group",target:"_blank",rel:"noopener noreferrer",children:[p.jsx("img",{src:t,alt:e||"",className:"w-full h-48 object-cover transform group-hover:scale-105 transition"}),r&&p.jsx("div",{className:"p-2 text-center bg-white",children:p.jsx("span",{className:"font-medium",children:r})})]}),SI=()=>{const t=[{imageUrl:"https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=300&fit=crop",title:"E-commerce Platform",link:"#"},{imageUrl:"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=300&fit=crop",title:"Dashboard Analytics",link:"#"},{imageUrl:"https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=300&fit=crop",title:"Mobile App Design",link:"#"},{imageUrl:"https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=300&fit=crop",title:"Corporate Website",link:"#"},{imageUrl:"https://images.unsplash.com/photo-1590479773265-7464e5d48118?w=400&h=300&fit=crop",title:"SaaS Platform",link:"#"},{imageUrl:"https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",title:"Portfolio Website",link:"#"}];return p.jsx("div",{className:"py-20",children:p.jsxs("div",{className:"max-w-7xl mx-auto px-4 sm:px-6 lg:px-8",children:[p.jsxs("div",{className:"text-center mb-16",children:[p.jsx("h1",{className:"text-4xl md:text-5xl font-bold text-gray-900 mb-6",children:"Our Work"}),p.jsx("p",{className:"text-xl text-gray-600",children:"Take a look at some of our recent projects and achievements."})]}),p.jsx("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",children:t.map((e,n)=>p.jsx(II,{imageUrl:e.imageUrl,alt:e.title,link:e.link,label:e.title},n))}),p.jsx("div",{className:"mt-20 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-12",children:p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-8 text-center",children:[p.jsxs("div",{children:[p.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:"50+"}),p.jsx("div",{className:"text-gray-600",children:"Projects Completed"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:"30+"}),p.jsx("div",{className:"text-gray-600",children:"Happy Clients"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:"5+"}),p.jsx("div",{className:"text-gray-600",children:"Years Experience"})]}),p.jsxs("div",{children:[p.jsx("div",{className:"text-3xl font-bold text-blue-600 mb-2",children:"24/7"}),p.jsx("div",{className:"text-gray-600",children:"Support"})]})]})})]})})},xI=()=>{};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S_=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},CI=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],l=t[n++],u=((i&7)<<18|(s&63)<<12|(o&63)<<6|l&63)-65536;e[r++]=String.fromCharCode(55296+(u>>10)),e[r++]=String.fromCharCode(56320+(u&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},x_={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,l=o?t[i+1]:0,u=i+2<t.length,h=u?t[i+2]:0,f=s>>2,v=(s&3)<<4|l>>4;let g=(l&15)<<2|h>>6,C=h&63;u||(C=64,o||(g=64)),r.push(n[f],n[v],n[g],n[C])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(S_(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):CI(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],l=i<t.length?n[t.charAt(i)]:0;++i;const h=i<t.length?n[t.charAt(i)]:64;++i;const v=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||l==null||h==null||v==null)throw new AI;const g=s<<2|l>>4;if(r.push(g),h!==64){const C=l<<4&240|h>>2;if(r.push(C),v!==64){const b=h<<6&192|v;r.push(b)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class AI extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const RI=function(t){const e=S_(t);return x_.encodeByteArray(e,!0)},ol=function(t){return RI(t).replace(/\./g,"")},C_=function(t){try{return x_.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function PI(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kI=()=>PI().__FIREBASE_DEFAULTS__,NI=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},bI=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&C_(t[1]);return e&&JSON.parse(e)},Ul=()=>{try{return xI()||kI()||NI()||bI()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},A_=t=>{var e,n;return(n=(e=Ul())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},R_=t=>{const e=A_(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},P_=()=>{var t;return(t=Ul())===null||t===void 0?void 0:t.config},k_=t=>{var e;return(e=Ul())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class OI{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t){return t.endsWith(".cloudworkstations.dev")}async function Cd(t){return(await fetch(t,{credentials:"include"})).ok}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N_(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),l="";return[ol(JSON.stringify(n)),ol(JSON.stringify(o)),l].join(".")}const Ds={};function DI(){const t={prod:[],emulator:[]};for(const e of Object.keys(Ds))Ds[e]?t.emulator.push(e):t.prod.push(e);return t}function LI(t){let e=document.getElementById(t),n=!1;return e||(e=document.createElement("div"),e.setAttribute("id",t),n=!0),{created:n,element:e}}let jm=!1;function Ad(t,e){if(typeof window>"u"||typeof document>"u"||!br(window.location.host)||Ds[t]===e||Ds[t]||jm)return;Ds[t]=e;function n(g){return`__firebase__banner__${g}`}const r="__firebase__banner",s=DI().prod.length>0;function o(){const g=document.getElementById(r);g&&g.remove()}function l(g){g.style.display="flex",g.style.background="#7faaf0",g.style.position="fixed",g.style.bottom="5px",g.style.left="5px",g.style.padding=".5em",g.style.borderRadius="5px",g.style.alignItems="center"}function u(g,C){g.setAttribute("width","24"),g.setAttribute("id",C),g.setAttribute("height","24"),g.setAttribute("viewBox","0 0 24 24"),g.setAttribute("fill","none"),g.style.marginLeft="-6px"}function h(){const g=document.createElement("span");return g.style.cursor="pointer",g.style.marginLeft="16px",g.style.fontSize="24px",g.innerHTML=" &times;",g.onclick=()=>{jm=!0,o()},g}function f(g,C){g.setAttribute("id",C),g.innerText="Learn more",g.href="https://firebase.google.com/docs/studio/preview-apps#preview-backend",g.setAttribute("target","__blank"),g.style.paddingLeft="5px",g.style.textDecoration="underline"}function v(){const g=LI(r),C=n("text"),b=document.getElementById(C)||document.createElement("span"),O=n("learnmore"),y=document.getElementById(O)||document.createElement("a"),w=n("preprendIcon"),I=document.getElementById(w)||document.createElementNS("http://www.w3.org/2000/svg","svg");if(g.created){const R=g.element;l(R),f(y,O);const N=h();u(I,w),R.append(I,b,y,N),document.body.appendChild(R)}s?(b.innerText="Preview backend disconnected.",I.innerHTML=`<g clip-path="url(#clip0_6013_33858)">
<path d="M4.8 17.6L12 5.6L19.2 17.6H4.8ZM6.91667 16.4H17.0833L12 7.93333L6.91667 16.4ZM12 15.6C12.1667 15.6 12.3056 15.5444 12.4167 15.4333C12.5389 15.3111 12.6 15.1667 12.6 15C12.6 14.8333 12.5389 14.6944 12.4167 14.5833C12.3056 14.4611 12.1667 14.4 12 14.4C11.8333 14.4 11.6889 14.4611 11.5667 14.5833C11.4556 14.6944 11.4 14.8333 11.4 15C11.4 15.1667 11.4556 15.3111 11.5667 15.4333C11.6889 15.5444 11.8333 15.6 12 15.6ZM11.4 13.6H12.6V10.4H11.4V13.6Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6013_33858">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`):(I.innerHTML=`<g clip-path="url(#clip0_6083_34804)">
<path d="M11.4 15.2H12.6V11.2H11.4V15.2ZM12 10C12.1667 10 12.3056 9.94444 12.4167 9.83333C12.5389 9.71111 12.6 9.56667 12.6 9.4C12.6 9.23333 12.5389 9.09444 12.4167 8.98333C12.3056 8.86111 12.1667 8.8 12 8.8C11.8333 8.8 11.6889 8.86111 11.5667 8.98333C11.4556 9.09444 11.4 9.23333 11.4 9.4C11.4 9.56667 11.4556 9.71111 11.5667 9.83333C11.6889 9.94444 11.8333 10 12 10ZM12 18.4C11.1222 18.4 10.2944 18.2333 9.51667 17.9C8.73889 17.5667 8.05556 17.1111 7.46667 16.5333C6.88889 15.9444 6.43333 15.2611 6.1 14.4833C5.76667 13.7056 5.6 12.8778 5.6 12C5.6 11.1111 5.76667 10.2833 6.1 9.51667C6.43333 8.73889 6.88889 8.06111 7.46667 7.48333C8.05556 6.89444 8.73889 6.43333 9.51667 6.1C10.2944 5.76667 11.1222 5.6 12 5.6C12.8889 5.6 13.7167 5.76667 14.4833 6.1C15.2611 6.43333 15.9389 6.89444 16.5167 7.48333C17.1056 8.06111 17.5667 8.73889 17.9 9.51667C18.2333 10.2833 18.4 11.1111 18.4 12C18.4 12.8778 18.2333 13.7056 17.9 14.4833C17.5667 15.2611 17.1056 15.9444 16.5167 16.5333C15.9389 17.1111 15.2611 17.5667 14.4833 17.9C13.7167 18.2333 12.8889 18.4 12 18.4ZM12 17.2C13.4444 17.2 14.6722 16.6944 15.6833 15.6833C16.6944 14.6722 17.2 13.4444 17.2 12C17.2 10.5556 16.6944 9.32778 15.6833 8.31667C14.6722 7.30555 13.4444 6.8 12 6.8C10.5556 6.8 9.32778 7.30555 8.31667 8.31667C7.30556 9.32778 6.8 10.5556 6.8 12C6.8 13.4444 7.30556 14.6722 8.31667 15.6833C9.32778 16.6944 10.5556 17.2 12 17.2Z" fill="#212121"/>
</g>
<defs>
<clipPath id="clip0_6083_34804">
<rect width="24" height="24" fill="white"/>
</clipPath>
</defs>`,b.innerText="Preview backend running in this workspace."),b.setAttribute("id",C)}document.readyState==="loading"?window.addEventListener("DOMContentLoaded",v):v()}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ke(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VI(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ke())}function MI(){var t;const e=(t=Ul())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jI(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function UI(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function FI(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function BI(){const t=Ke();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function zI(){return!MI()&&!!navigator.userAgent&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function $I(){try{return typeof indexedDB=="object"}catch{return!1}}function HI(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WI="FirebaseError";class Bt extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=WI,Object.setPrototypeOf(this,Bt.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,_o.prototype.create)}}class _o{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?qI(s,r):"Error",l=`${this.serviceName}: ${o} (${i}).`;return new Bt(i,l,r)}}function qI(t,e){return t.replace(KI,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const KI=/\{\$([^}]+)}/g;function GI(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function wr(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(Um(s)&&Um(o)){if(!wr(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function Um(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function ys(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function vs(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function QI(t,e){const n=new YI(t,e);return n.subscribe.bind(n)}class YI{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");XI(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Xu),i.error===void 0&&(i.error=Xu),i.complete===void 0&&(i.complete=Xu);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function XI(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Xu(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(t){return t&&t._delegate?t._delegate:t}class $n{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class JI{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new OI;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(eS(e))try{this.getOrInitializeService({instanceIdentifier:lr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=lr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=lr){return this.instances.has(e)}getOptions(e=lr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const l=this.normalizeInstanceIdentifier(s);r===l&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:ZI(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=lr){return this.component?this.component.multipleInstances?e:lr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function ZI(t){return t===lr?void 0:t}function eS(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tS{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new JI(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ee;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(ee||(ee={}));const nS={debug:ee.DEBUG,verbose:ee.VERBOSE,info:ee.INFO,warn:ee.WARN,error:ee.ERROR,silent:ee.SILENT},rS=ee.INFO,iS={[ee.DEBUG]:"log",[ee.VERBOSE]:"log",[ee.INFO]:"info",[ee.WARN]:"warn",[ee.ERROR]:"error"},sS=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=iS[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Rd{constructor(e){this.name=e,this._logLevel=rS,this._logHandler=sS,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in ee))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?nS[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,ee.DEBUG,...e),this._logHandler(this,ee.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,ee.VERBOSE,...e),this._logHandler(this,ee.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,ee.INFO,...e),this._logHandler(this,ee.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,ee.WARN,...e),this._logHandler(this,ee.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,ee.ERROR,...e),this._logHandler(this,ee.ERROR,...e)}}const oS=(t,e)=>e.some(n=>t instanceof n);let Fm,Bm;function aS(){return Fm||(Fm=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function lS(){return Bm||(Bm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const b_=new WeakMap,Zc=new WeakMap,O_=new WeakMap,Ju=new WeakMap,Pd=new WeakMap;function uS(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Ln(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&b_.set(n,t)}).catch(()=>{}),Pd.set(e,t),e}function cS(t){if(Zc.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});Zc.set(t,e)}let eh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Zc.get(t);if(e==="objectStoreNames")return t.objectStoreNames||O_.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Ln(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hS(t){eh=t(eh)}function dS(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(Zu(this),e,...n);return O_.set(r,e.sort?e.sort():[e]),Ln(r)}:lS().includes(t)?function(...e){return t.apply(Zu(this),e),Ln(b_.get(this))}:function(...e){return Ln(t.apply(Zu(this),e))}}function fS(t){return typeof t=="function"?dS(t):(t instanceof IDBTransaction&&cS(t),oS(t,aS())?new Proxy(t,eh):t)}function Ln(t){if(t instanceof IDBRequest)return uS(t);if(Ju.has(t))return Ju.get(t);const e=fS(t);return e!==t&&(Ju.set(t,e),Pd.set(e,t)),e}const Zu=t=>Pd.get(t);function pS(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),l=Ln(o);return r&&o.addEventListener("upgradeneeded",u=>{r(Ln(o.result),u.oldVersion,u.newVersion,Ln(o.transaction),u)}),n&&o.addEventListener("blocked",u=>n(u.oldVersion,u.newVersion,u)),l.then(u=>{s&&u.addEventListener("close",()=>s()),i&&u.addEventListener("versionchange",h=>i(h.oldVersion,h.newVersion,h))}).catch(()=>{}),l}const mS=["get","getKey","getAll","getAllKeys","count"],gS=["put","add","delete","clear"],ec=new Map;function zm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ec.get(e))return ec.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=gS.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||mS.includes(n)))return;const s=async function(o,...l){const u=this.transaction(o,i?"readwrite":"readonly");let h=u.store;return r&&(h=h.index(l.shift())),(await Promise.all([h[n](...l),i&&u.done]))[0]};return ec.set(e,s),s}hS(t=>({...t,get:(e,n,r)=>zm(e,n)||t.get(e,n,r),has:(e,n)=>!!zm(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yS{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(vS(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function vS(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const th="@firebase/app",$m="0.13.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rn=new Rd("@firebase/app"),_S="@firebase/app-compat",ES="@firebase/analytics-compat",wS="@firebase/analytics",TS="@firebase/app-check-compat",IS="@firebase/app-check",SS="@firebase/auth",xS="@firebase/auth-compat",CS="@firebase/database",AS="@firebase/data-connect",RS="@firebase/database-compat",PS="@firebase/functions",kS="@firebase/functions-compat",NS="@firebase/installations",bS="@firebase/installations-compat",OS="@firebase/messaging",DS="@firebase/messaging-compat",LS="@firebase/performance",VS="@firebase/performance-compat",MS="@firebase/remote-config",jS="@firebase/remote-config-compat",US="@firebase/storage",FS="@firebase/storage-compat",BS="@firebase/firestore",zS="@firebase/ai",$S="@firebase/firestore-compat",HS="firebase",WS="11.9.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const nh="[DEFAULT]",qS={[th]:"fire-core",[_S]:"fire-core-compat",[wS]:"fire-analytics",[ES]:"fire-analytics-compat",[IS]:"fire-app-check",[TS]:"fire-app-check-compat",[SS]:"fire-auth",[xS]:"fire-auth-compat",[CS]:"fire-rtdb",[AS]:"fire-data-connect",[RS]:"fire-rtdb-compat",[PS]:"fire-fn",[kS]:"fire-fn-compat",[NS]:"fire-iid",[bS]:"fire-iid-compat",[OS]:"fire-fcm",[DS]:"fire-fcm-compat",[LS]:"fire-perf",[VS]:"fire-perf-compat",[MS]:"fire-rc",[jS]:"fire-rc-compat",[US]:"fire-gcs",[FS]:"fire-gcs-compat",[BS]:"fire-fst",[$S]:"fire-fst-compat",[zS]:"fire-vertex","fire-js":"fire-js",[HS]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const al=new Map,KS=new Map,rh=new Map;function Hm(t,e){try{t.container.addComponent(e)}catch(n){rn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Tr(t){const e=t.name;if(rh.has(e))return rn.debug(`There were multiple attempts to register component ${e}.`),!1;rh.set(e,t);for(const n of al.values())Hm(n,t);for(const n of KS.values())Hm(n,t);return!0}function Fl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function ct(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GS={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Vn=new _o("app","Firebase",GS);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QS{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new $n("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Vn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Or=WS;function D_(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:nh,automaticDataCollectionEnabled:!0},e),i=r.name;if(typeof i!="string"||!i)throw Vn.create("bad-app-name",{appName:String(i)});if(n||(n=P_()),!n)throw Vn.create("no-options");const s=al.get(i);if(s){if(wr(n,s.options)&&wr(r,s.config))return s;throw Vn.create("duplicate-app",{appName:i})}const o=new tS(i);for(const u of rh.values())o.addComponent(u);const l=new QS(n,r,o);return al.set(i,l),l}function kd(t=nh){const e=al.get(t);if(!e&&t===nh&&P_())return D_();if(!e)throw Vn.create("no-app",{appName:t});return e}function Ot(t,e,n){var r;let i=(r=qS[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const l=[`Unable to register library "${i}" with version "${e}":`];s&&l.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&l.push("and"),o&&l.push(`version name "${e}" contains illegal characters (whitespace or "/")`),rn.warn(l.join(" "));return}Tr(new $n(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YS="firebase-heartbeat-database",XS=1,no="firebase-heartbeat-store";let tc=null;function L_(){return tc||(tc=pS(YS,XS,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(no)}catch(n){console.warn(n)}}}}).catch(t=>{throw Vn.create("idb-open",{originalErrorMessage:t.message})})),tc}async function JS(t){try{const n=(await L_()).transaction(no),r=await n.objectStore(no).get(V_(t));return await n.done,r}catch(e){if(e instanceof Bt)rn.warn(e.message);else{const n=Vn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});rn.warn(n.message)}}}async function Wm(t,e){try{const r=(await L_()).transaction(no,"readwrite");await r.objectStore(no).put(e,V_(t)),await r.done}catch(n){if(n instanceof Bt)rn.warn(n.message);else{const r=Vn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});rn.warn(r.message)}}}function V_(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZS=1024,ex=30;class tx{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rx(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),s=qm();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===s||this._heartbeatsCache.heartbeats.some(o=>o.date===s))return;if(this._heartbeatsCache.heartbeats.push({date:s,agent:i}),this._heartbeatsCache.heartbeats.length>ex){const o=ix(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(r){rn.warn(r)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=qm(),{heartbeatsToSend:r,unsentEntries:i}=nx(this._heartbeatsCache.heartbeats),s=ol(JSON.stringify({version:2,heartbeats:r}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}catch(n){return rn.warn(n),""}}}function qm(){return new Date().toISOString().substring(0,10)}function nx(t,e=ZS){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),Km(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Km(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rx{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return $I()?HI().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await JS(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Wm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Km(t){return ol(JSON.stringify({version:2,heartbeats:t})).length}function ix(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let r=1;r<t.length;r++)t[r].date<n&&(n=t[r].date,e=r);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sx(t){Tr(new $n("platform-logger",e=>new yS(e),"PRIVATE")),Tr(new $n("heartbeat",e=>new tx(e),"PRIVATE")),Ot(th,$m,t),Ot(th,$m,"esm2017"),Ot("fire-js","")}sx("");function Nd(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function M_(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const ox=M_,j_=new _o("auth","Firebase",M_());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ll=new Rd("@firebase/auth");function ax(t,...e){ll.logLevel<=ee.WARN&&ll.warn(`Auth (${Or}): ${t}`,...e)}function Ca(t,...e){ll.logLevel<=ee.ERROR&&ll.error(`Auth (${Or}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,...e){throw bd(t,...e)}function Dt(t,...e){return bd(t,...e)}function U_(t,e,n){const r=Object.assign(Object.assign({},ox()),{[e]:n});return new _o("auth","Firebase",r).create(e,{appName:t.name})}function tn(t){return U_(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function bd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return j_.create(t,...e)}function G(t,e,...n){if(!t)throw bd(e,...n)}function Jt(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ca(e),new Error(e)}function sn(t,e){t||Jt(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ih(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function lx(){return Gm()==="http:"||Gm()==="https:"}function Gm(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ux(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(lx()||UI()||"connection"in navigator)?navigator.onLine:!0}function cx(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wo{constructor(e,n){this.shortDelay=e,this.longDelay=n,sn(n>e,"Short delay should be less than long delay!"),this.isMobile=VI()||FI()}get(){return ux()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Od(t,e){sn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Jt("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Jt("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Jt("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hx={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dx=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],fx=new wo(3e4,6e4);function Jn(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Zn(t,e,n,r,i={}){return B_(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const l=Eo(Object.assign({key:t.config.apiKey},o)).slice(1),u=await t._getAdditionalHeaders();u["Content-Type"]="application/json",t.languageCode&&(u["X-Firebase-Locale"]=t.languageCode);const h=Object.assign({method:e,headers:u},s);return jI()||(h.referrerPolicy="no-referrer"),t.emulatorConfig&&br(t.emulatorConfig.host)&&(h.credentials="include"),F_.fetch()(await z_(t,t.config.apiHost,n,l),h)})}async function B_(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},hx),e);try{const i=new mx(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw oa(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const l=s.ok?o.errorMessage:o.error.message,[u,h]=l.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw oa(t,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw oa(t,"email-already-in-use",o);if(u==="USER_DISABLED")throw oa(t,"user-disabled",o);const f=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(h)throw U_(t,f,h);xt(t,f)}}catch(i){if(i instanceof Bt)throw i;xt(t,"network-request-failed",{message:String(i)})}}async function To(t,e,n,r,i={}){const s=await Zn(t,e,n,r,i);return"mfaPendingCredential"in s&&xt(t,"multi-factor-auth-required",{_serverResponse:s}),s}async function z_(t,e,n,r){const i=`${e}${n}?${r}`,s=t,o=s.config.emulator?Od(t.config,i):`${t.config.apiScheme}://${i}`;return dx.includes(n)&&(await s._persistenceManagerAvailable,s._getPersistenceType()==="COOKIE")?s._getPersistence()._getFinalTarget(o).toString():o}function px(t){switch(t){case"ENFORCE":return"ENFORCE";case"AUDIT":return"AUDIT";case"OFF":return"OFF";default:return"ENFORCEMENT_STATE_UNSPECIFIED"}}class mx{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Dt(this.auth,"network-request-failed")),fx.get())})}}function oa(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=Dt(t,e,r);return i.customData._tokenResponse=n,i}function Qm(t){return t!==void 0&&t.enterprise!==void 0}class gx{constructor(e){if(this.siteKey="",this.recaptchaEnforcementState=[],e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.recaptchaEnforcementState=e.recaptchaEnforcementState}getProviderEnforcementState(e){if(!this.recaptchaEnforcementState||this.recaptchaEnforcementState.length===0)return null;for(const n of this.recaptchaEnforcementState)if(n.provider&&n.provider===e)return px(n.enforcementState);return null}isProviderEnabled(e){return this.getProviderEnforcementState(e)==="ENFORCE"||this.getProviderEnforcementState(e)==="AUDIT"}isAnyProviderEnabled(){return this.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")||this.isProviderEnabled("PHONE_PROVIDER")}}async function yx(t,e){return Zn(t,"GET","/v2/recaptchaConfig",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function vx(t,e){return Zn(t,"POST","/v1/accounts:delete",e)}async function ul(t,e){return Zn(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ls(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function _x(t,e=!1){const n=ln(t),r=await n.getIdToken(e),i=Dd(r);G(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:Ls(nc(i.auth_time)),issuedAtTime:Ls(nc(i.iat)),expirationTime:Ls(nc(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function nc(t){return Number(t)*1e3}function Dd(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ca("JWT malformed, contained fewer than 3 sections"),null;try{const i=C_(n);return i?JSON.parse(i):(Ca("Failed to decode base64 JWT payload"),null)}catch(i){return Ca("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ym(t){const e=Dd(t);return G(e,"internal-error"),G(typeof e.exp<"u","internal-error"),G(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ro(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Bt&&Ex(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function Ex({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wx{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sh{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ls(this.lastLoginAt),this.creationTime=Ls(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function cl(t){var e;const n=t.auth,r=await t.getIdToken(),i=await ro(t,ul(n,{idToken:r}));G(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?$_(s.providerUserInfo):[],l=Ix(t.providerData,o),u=t.isAnonymous,h=!(t.email&&s.passwordHash)&&!(l!=null&&l.length),f=u?h:!1,v={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:l,metadata:new sh(s.createdAt,s.lastLoginAt),isAnonymous:f};Object.assign(t,v)}async function Tx(t){const e=ln(t);await cl(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function Ix(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function $_(t){return t.map(e=>{var{providerId:n}=e,r=Nd(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Sx(t,e){const n=await B_(t,{},async()=>{const r=Eo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=await z_(t,i,"/v1/token",`key=${s}`),l=await t._getAdditionalHeaders();l["Content-Type"]="application/x-www-form-urlencoded";const u={method:"POST",headers:l,body:r};return t.emulatorConfig&&br(t.emulatorConfig.host)&&(u.credentials="include"),F_.fetch()(o,u)});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function xx(t,e){return Zn(t,"POST","/v2/accounts:revokeToken",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){G(e.idToken,"internal-error"),G(typeof e.idToken<"u","internal-error"),G(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ym(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){G(e.length!==0,"internal-error");const n=Ym(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(G(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Sx(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new ci;return r&&(G(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(G(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(G(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ci,this.toJSON())}_performRefresh(){return Jt("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(t,e){G(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class It{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nd(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new wx(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new sh(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await ro(this,this.stsTokenManager.getToken(this.auth,e));return G(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return _x(this,e)}reload(){return Tx(this)}_assign(e){this!==e&&(G(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new It(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){G(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await cl(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(ct(this.auth.app))return Promise.reject(tn(this.auth));const e=await this.getIdToken();return await ro(this,vx(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,l,u,h,f;const v=(r=n.displayName)!==null&&r!==void 0?r:void 0,g=(i=n.email)!==null&&i!==void 0?i:void 0,C=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,b=(o=n.photoURL)!==null&&o!==void 0?o:void 0,O=(l=n.tenantId)!==null&&l!==void 0?l:void 0,y=(u=n._redirectEventId)!==null&&u!==void 0?u:void 0,w=(h=n.createdAt)!==null&&h!==void 0?h:void 0,I=(f=n.lastLoginAt)!==null&&f!==void 0?f:void 0,{uid:R,emailVerified:N,isAnonymous:z,providerData:V,stsTokenManager:S}=n;G(R&&S,e,"internal-error");const _=ci.fromJSON(this.name,S);G(typeof R=="string",e,"internal-error"),fn(v,e.name),fn(g,e.name),G(typeof N=="boolean",e,"internal-error"),G(typeof z=="boolean",e,"internal-error"),fn(C,e.name),fn(b,e.name),fn(O,e.name),fn(y,e.name),fn(w,e.name),fn(I,e.name);const E=new It({uid:R,auth:e,email:g,emailVerified:N,displayName:v,isAnonymous:z,photoURL:b,phoneNumber:C,tenantId:O,stsTokenManager:_,createdAt:w,lastLoginAt:I});return V&&Array.isArray(V)&&(E.providerData=V.map(x=>Object.assign({},x))),y&&(E._redirectEventId=y),E}static async _fromIdTokenResponse(e,n,r=!1){const i=new ci;i.updateFromServerResponse(n);const s=new It({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await cl(s),s}static async _fromGetAccountInfoResponse(e,n,r){const i=n.users[0];G(i.localId!==void 0,"internal-error");const s=i.providerUserInfo!==void 0?$_(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(s!=null&&s.length),l=new ci;l.updateFromIdToken(r);const u=new It({uid:i.localId,auth:e,stsTokenManager:l,isAnonymous:o}),h={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:s,metadata:new sh(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(s!=null&&s.length)};return Object.assign(u,h),u}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xm=new Map;function Zt(t){sn(t instanceof Function,"Expected a class definition");let e=Xm.get(t);return e?(sn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Xm.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}H_.type="NONE";const Jm=H_;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Aa(t,e,n){return`firebase:${t}:${e}:${n}`}class hi{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=Aa(this.userKey,i.apiKey,s),this.fullPersistenceKey=Aa("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await ul(this.auth,{idToken:e}).catch(()=>{});return n?It._fromGetAccountInfoResponse(this.auth,n,e):null}return It._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new hi(Zt(Jm),e,r);const i=(await Promise.all(n.map(async h=>{if(await h._isAvailable())return h}))).filter(h=>h);let s=i[0]||Zt(Jm);const o=Aa(r,e.config.apiKey,e.name);let l=null;for(const h of n)try{const f=await h._get(o);if(f){let v;if(typeof f=="string"){const g=await ul(e,{idToken:f}).catch(()=>{});if(!g)break;v=await It._fromGetAccountInfoResponse(e,g,f)}else v=It._fromJSON(e,f);h!==s&&(l=v),s=h;break}}catch{}const u=i.filter(h=>h._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new hi(s,e,r):(s=u[0],l&&await s._set(o,l.toJSON()),await Promise.all(n.map(async h=>{if(h!==s)try{await h._remove(o)}catch{}})),new hi(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zm(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(G_(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(W_(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Y_(e))return"Blackberry";if(X_(e))return"Webos";if(q_(e))return"Safari";if((e.includes("chrome/")||K_(e))&&!e.includes("edge/"))return"Chrome";if(Q_(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function W_(t=Ke()){return/firefox\//i.test(t)}function q_(t=Ke()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function K_(t=Ke()){return/crios\//i.test(t)}function G_(t=Ke()){return/iemobile/i.test(t)}function Q_(t=Ke()){return/android/i.test(t)}function Y_(t=Ke()){return/blackberry/i.test(t)}function X_(t=Ke()){return/webos/i.test(t)}function Ld(t=Ke()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function Cx(t=Ke()){var e;return Ld(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Ax(){return BI()&&document.documentMode===10}function J_(t=Ke()){return Ld(t)||Q_(t)||X_(t)||Y_(t)||/windows phone/i.test(t)||G_(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z_(t,e=[]){let n;switch(t){case"Browser":n=Zm(Ke());break;case"Worker":n=`${Zm(Ke())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Or}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rx{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,l)=>{try{const u=e(s);o(u)}catch(u){l(u)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Px(t,e={}){return Zn(t,"GET","/v2/passwordPolicy",Jn(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kx=6;class Nx{constructor(e){var n,r,i,s;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:kx,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=e.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=e.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,r,i,s,o,l;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,u),this.validatePasswordCharacterOptions(e,u),u.isValid&&(u.isValid=(n=u.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(l=u.containsNonAlphanumericCharacter)!==null&&l!==void 0?l:!0),u}validatePasswordLengthOptions(e,n){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(n.meetsMinPasswordLength=e.length>=r),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let r;for(let i=0;i<e.length;i++)r=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(e,n,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bx{constructor(e,n,r,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new eg(this),this.idTokenSubscription=new eg(this),this.beforeStateQueue=new Rx(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=j_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(s=>this._resolvePersistenceManagerAvailable=s)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=Zt(n)),this._initializationPromise=this.queue(async()=>{var r,i,s;if(!this._deleted&&(this.persistenceManager=await hi.create(this,e),(r=this._resolvePersistenceManagerAvailable)===null||r===void 0||r.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await ul(this,{idToken:e}),r=await It._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(r)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(ct(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(l=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(l,l))}):this.directlySetCurrentUser(null)}const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,l=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(e);(!o||o===l)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return G(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await cl(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=cx()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(ct(this.app))return Promise.reject(tn(this));const n=e?ln(e):null;return n&&G(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&G(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return ct(this.app)?Promise.reject(tn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return ct(this.app)?Promise.reject(tn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(Zt(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Px(this),n=new Nx(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new _o("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const r=this.onAuthStateChanged(()=>{r(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(r.tenantId=this.tenantId),await xx(this,r)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&Zt(e)||this._popupRedirectResolver;G(n,this,"argument-error"),this.redirectPersistenceManager=await hi.create(this,[Zt(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n);let o=!1;const l=this._isInitialized?Promise.resolve():this._initializationPromise;if(G(l,this,"internal-error"),l.then(()=>{o||s(this.currentUser)}),typeof n=="function"){const u=e.addObserver(n,r,i);return()=>{o=!0,u()}}else{const u=e.addObserver(n);return()=>{o=!0,u()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return G(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Z_(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&ax(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Dr(t){return ln(t)}class eg{constructor(e){this.auth=e,this.observer=null,this.addObserver=QI(n=>this.observer=n)}get next(){return G(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Bl={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function Ox(t){Bl=t}function e0(t){return Bl.loadJS(t)}function Dx(){return Bl.recaptchaEnterpriseScript}function Lx(){return Bl.gapiScript}function Vx(t){return`__${t}${Math.floor(Math.random()*1e6)}`}class Mx{constructor(){this.enterprise=new jx}ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}class jx{ready(e){e()}execute(e,n){return Promise.resolve("token")}render(e,n){return""}}const Ux="recaptcha-enterprise",t0="NO_RECAPTCHA";class Fx{constructor(e){this.type=Ux,this.auth=Dr(e)}async verify(e="verify",n=!1){async function r(s){if(!n){if(s.tenantId==null&&s._agentRecaptchaConfig!=null)return s._agentRecaptchaConfig.siteKey;if(s.tenantId!=null&&s._tenantRecaptchaConfigs[s.tenantId]!==void 0)return s._tenantRecaptchaConfigs[s.tenantId].siteKey}return new Promise(async(o,l)=>{yx(s,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(u=>{if(u.recaptchaKey===void 0)l(new Error("recaptcha Enterprise site key undefined"));else{const h=new gx(u);return s.tenantId==null?s._agentRecaptchaConfig=h:s._tenantRecaptchaConfigs[s.tenantId]=h,o(h.siteKey)}}).catch(u=>{l(u)})})}function i(s,o,l){const u=window.grecaptcha;Qm(u)?u.enterprise.ready(()=>{u.enterprise.execute(s,{action:e}).then(h=>{o(h)}).catch(()=>{o(t0)})}):l(Error("No reCAPTCHA enterprise script loaded."))}return this.auth.settings.appVerificationDisabledForTesting?new Mx().execute("siteKey",{action:"verify"}):new Promise((s,o)=>{r(this.auth).then(l=>{if(!n&&Qm(window.grecaptcha))i(l,s,o);else{if(typeof window>"u"){o(new Error("RecaptchaVerifier is only supported in browser"));return}let u=Dx();u.length!==0&&(u+=l),e0(u).then(()=>{i(l,s,o)}).catch(h=>{o(h)})}}).catch(l=>{o(l)})})}}async function hs(t,e,n,r=!1,i=!1){const s=new Fx(t);let o;if(i)o=t0;else try{o=await s.verify(n)}catch{o=await s.verify(n,!0)}const l=Object.assign({},e);if(n==="mfaSmsEnrollment"||n==="mfaSmsSignIn"){if("phoneEnrollmentInfo"in l){const u=l.phoneEnrollmentInfo.phoneNumber,h=l.phoneEnrollmentInfo.recaptchaToken;Object.assign(l,{phoneEnrollmentInfo:{phoneNumber:u,recaptchaToken:h,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}else if("phoneSignInInfo"in l){const u=l.phoneSignInInfo.recaptchaToken;Object.assign(l,{phoneSignInInfo:{recaptchaToken:u,captchaResponse:o,clientType:"CLIENT_TYPE_WEB",recaptchaVersion:"RECAPTCHA_ENTERPRISE"}})}return l}return r?Object.assign(l,{captchaResp:o}):Object.assign(l,{captchaResponse:o}),Object.assign(l,{clientType:"CLIENT_TYPE_WEB"}),Object.assign(l,{recaptchaVersion:"RECAPTCHA_ENTERPRISE"}),l}async function oh(t,e,n,r,i){var s,o;if(i==="EMAIL_PASSWORD_PROVIDER")if(!((s=t._getRecaptchaConfig())===null||s===void 0)&&s.isProviderEnabled("EMAIL_PASSWORD_PROVIDER")){const l=await hs(t,e,n,n==="getOobCode");return r(t,l)}else return r(t,e).catch(async l=>{if(l.code==="auth/missing-recaptcha-token"){console.log(`${n} is protected by reCAPTCHA Enterprise for this project. Automatically triggering the reCAPTCHA flow and restarting the flow.`);const u=await hs(t,e,n,n==="getOobCode");return r(t,u)}else return Promise.reject(l)});else if(i==="PHONE_PROVIDER")if(!((o=t._getRecaptchaConfig())===null||o===void 0)&&o.isProviderEnabled("PHONE_PROVIDER")){const l=await hs(t,e,n);return r(t,l).catch(async u=>{var h;if(((h=t._getRecaptchaConfig())===null||h===void 0?void 0:h.getProviderEnforcementState("PHONE_PROVIDER"))==="AUDIT"&&(u.code==="auth/missing-recaptcha-token"||u.code==="auth/invalid-app-credential")){console.log(`Failed to verify with reCAPTCHA Enterprise. Automatically triggering the reCAPTCHA v2 flow to complete the ${n} flow.`);const f=await hs(t,e,n,!1,!0);return r(t,f)}return Promise.reject(u)})}else{const l=await hs(t,e,n,!1,!0);return r(t,l)}else return Promise.reject(i+" provider is not supported.")}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bx(t,e){const n=Fl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(wr(s,e??{}))return i;xt(i,"already-initialized")}return n.initialize({options:e})}function zx(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(Zt);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function $x(t,e,n){const r=Dr(t);G(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=n0(e),{host:o,port:l}=Hx(e),u=l===null?"":`:${l}`,h={url:`${s}//${o}${u}/`},f=Object.freeze({host:o,port:l,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!r._canInitEmulator){G(r.config.emulator&&r.emulatorConfig,r,"emulator-config-failed"),G(wr(h,r.config.emulator)&&wr(f,r.emulatorConfig),r,"emulator-config-failed");return}r.config.emulator=h,r.emulatorConfig=f,r.settings.appVerificationDisabledForTesting=!0,br(o)?(Cd(`${s}//${o}${u}`),Ad("Auth",!0)):i||Wx()}function n0(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Hx(t){const e=n0(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:tg(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:tg(o)}}}function tg(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Wx(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vd{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return Jt("not implemented")}_getIdTokenResponse(e){return Jt("not implemented")}_linkToIdToken(e,n){return Jt("not implemented")}_getReauthenticationResolver(e){return Jt("not implemented")}}async function qx(t,e){return Zn(t,"POST","/v1/accounts:signUp",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Kx(t,e){return To(t,"POST","/v1/accounts:signInWithPassword",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Gx(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}async function Qx(t,e){return To(t,"POST","/v1/accounts:signInWithEmailLink",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io extends Vd{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new io(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new io(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":const n={returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,n,"signInWithPassword",Kx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Gx(e,{email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":const r={idToken:n,returnSecureToken:!0,email:this._email,password:this._password,clientType:"CLIENT_TYPE_WEB"};return oh(e,r,"signUpPassword",qx,"EMAIL_PASSWORD_PROVIDER");case"emailLink":return Qx(e,{idToken:n,email:this._email,oobCode:this._password});default:xt(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(t,e){return To(t,"POST","/v1/accounts:signInWithIdp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yx="http://localhost";class Ir extends Vd{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ir(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nd(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new Ir(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return di(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,di(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,di(e,n)}buildRequest(){const e={requestUri:Yx,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Eo(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xx(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Jx(t){const e=ys(vs(t)).link,n=e?ys(vs(e)).deep_link_id:null,r=ys(vs(t)).deep_link_id;return(r?ys(vs(r)).link:null)||r||n||e||t}class Md{constructor(e){var n,r,i,s,o,l;const u=ys(vs(e)),h=(n=u.apiKey)!==null&&n!==void 0?n:null,f=(r=u.oobCode)!==null&&r!==void 0?r:null,v=Xx((i=u.mode)!==null&&i!==void 0?i:null);G(h&&f&&v,"argument-error"),this.apiKey=h,this.operation=v,this.code=f,this.continueUrl=(s=u.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=u.lang)!==null&&o!==void 0?o:null,this.tenantId=(l=u.tenantId)!==null&&l!==void 0?l:null}static parseLink(e){const n=Jx(e);try{return new Md(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.providerId=Li.PROVIDER_ID}static credential(e,n){return io._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Md.parseLink(n);return G(r,"argument-error"),io._fromEmailAndCode(e,r.code,r.tenantId)}}Li.PROVIDER_ID="password";Li.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Li.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class r0{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io extends r0{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gn extends Io{constructor(){super("facebook.com")}static credential(e){return Ir._fromParams({providerId:gn.PROVIDER_ID,signInMethod:gn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return gn.credentialFromTaggedObject(e)}static credentialFromError(e){return gn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return gn.credential(e.oauthAccessToken)}catch{return null}}}gn.FACEBOOK_SIGN_IN_METHOD="facebook.com";gn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Io{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ir._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return yn.credential(n,r)}catch{return null}}}yn.GOOGLE_SIGN_IN_METHOD="google.com";yn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vn extends Io{constructor(){super("github.com")}static credential(e){return Ir._fromParams({providerId:vn.PROVIDER_ID,signInMethod:vn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vn.credentialFromTaggedObject(e)}static credentialFromError(e){return vn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return vn.credential(e.oauthAccessToken)}catch{return null}}}vn.GITHUB_SIGN_IN_METHOD="github.com";vn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n extends Io{constructor(){super("twitter.com")}static credential(e,n){return Ir._fromParams({providerId:_n.PROVIDER_ID,signInMethod:_n.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return _n.credentialFromTaggedObject(e)}static credentialFromError(e){return _n.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return _n.credential(n,r)}catch{return null}}}_n.TWITTER_SIGN_IN_METHOD="twitter.com";_n.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Zx(t,e){return To(t,"POST","/v1/accounts:signUp",Jn(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await It._fromIdTokenResponse(e,r,i),o=ng(r);return new Sr({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=ng(r);return new Sr({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function ng(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl extends Bt{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,hl.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new hl(e,n,r,i)}}function i0(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?hl._fromErrorAndOperation(t,s,e,r):s})}async function eC(t,e,n=!1){const r=await ro(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Sr._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tC(t,e,n=!1){const{auth:r}=t;if(ct(r.app))return Promise.reject(tn(r));const i="reauthenticate";try{const s=await ro(t,i0(r,i,e,t),n);G(s.idToken,r,"internal-error");const o=Dd(s.idToken);G(o,r,"internal-error");const{sub:l}=o;return G(t.uid===l,r,"user-mismatch"),Sr._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&xt(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function s0(t,e,n=!1){if(ct(t.app))return Promise.reject(tn(t));const r="signIn",i=await i0(t,r,e),s=await Sr._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function nC(t,e){return s0(Dr(t),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function o0(t){const e=Dr(t);e._getPasswordPolicyInternal()&&await e._updatePasswordPolicy()}async function rC(t,e,n){if(ct(t.app))return Promise.reject(tn(t));const r=Dr(t),o=await oh(r,{returnSecureToken:!0,email:e,password:n,clientType:"CLIENT_TYPE_WEB"},"signUpPassword",Zx,"EMAIL_PASSWORD_PROVIDER").catch(u=>{throw u.code==="auth/password-does-not-meet-requirements"&&o0(t),u}),l=await Sr._fromIdTokenResponse(r,"signIn",o);return await r._updateCurrentUser(l.user),l}function iC(t,e,n){return ct(t.app)?Promise.reject(tn(t)):nC(ln(t),Li.credential(e,n)).catch(async r=>{throw r.code==="auth/password-does-not-meet-requirements"&&o0(t),r})}function sC(t,e,n,r){return ln(t).onIdTokenChanged(e,n,r)}function oC(t,e,n){return ln(t).beforeAuthStateChanged(e,n)}const dl="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class a0{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(dl,"1"),this.storage.removeItem(dl),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aC=1e3,lC=10;class l0 extends a0{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=J_(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,l,u)=>{this.notifyListeners(o,u)});return}const r=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Ax()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,lC):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},aC)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}l0.type="LOCAL";const uC=l0;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u0 extends a0{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}u0.type="SESSION";const c0=u0;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cC(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new zl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const l=Array.from(o).map(async h=>h(n.origin,s)),u=await cC(l);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}zl.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((l,u)=>{const h=jd("",20);i.port1.start();const f=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(v){const g=v;if(g.data.eventId===h)switch(g.data.status){case"ack":clearTimeout(f),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),l(g.data.response);break;default:clearTimeout(f),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:h,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lt(){return window}function dC(t){Lt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h0(){return typeof Lt().WorkerGlobalScope<"u"&&typeof Lt().importScripts=="function"}async function fC(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function pC(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function mC(){return h0()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0="firebaseLocalStorageDb",gC=1,fl="firebaseLocalStorage",f0="fbase_key";class So{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function $l(t,e){return t.transaction([fl],e?"readwrite":"readonly").objectStore(fl)}function yC(){const t=indexedDB.deleteDatabase(d0);return new So(t).toPromise()}function ah(){const t=indexedDB.open(d0,gC);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(fl,{keyPath:f0})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(fl)?e(r):(r.close(),await yC(),e(await ah()))})})}async function rg(t,e,n){const r=$l(t,!0).put({[f0]:e,value:n});return new So(r).toPromise()}async function vC(t,e){const n=$l(t,!1).get(e),r=await new So(n).toPromise();return r===void 0?null:r.value}function ig(t,e){const n=$l(t,!0).delete(e);return new So(n).toPromise()}const _C=800,EC=3;class p0{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await ah(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>EC)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return h0()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=zl._getInstance(mC()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await fC(),!this.activeServiceWorker)return;this.sender=new hC(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||pC()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ah();return await rg(e,dl,"1"),await ig(e,dl),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>rg(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>vC(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>ig(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=$l(i,!1).getAll();return new So(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;if(e.length!==0)for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),_C)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}p0.type="LOCAL";const wC=p0;new wo(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TC(t,e){return e?Zt(e):(G(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ud extends Vd{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return di(e,this._buildIdpRequest())}_linkToIdToken(e,n){return di(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return di(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function IC(t){return s0(t.auth,new Ud(t),t.bypassAuthState)}function SC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),tC(n,new Ud(t),t.bypassAuthState)}async function xC(t){const{auth:e,user:n}=t;return G(n,e,"internal-error"),eC(n,new Ud(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class m0{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:l}=e;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(l)(u))}catch(h){this.reject(h)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return IC;case"linkViaPopup":case"linkViaRedirect":return xC;case"reauthViaPopup":case"reauthViaRedirect":return SC;default:xt(this.auth,"internal-error")}}resolve(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){sn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const CC=new wo(2e3,1e4);class Zr extends m0{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Zr.currentPopupAction&&Zr.currentPopupAction.cancel(),Zr.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return G(e,this.auth,"internal-error"),e}async onExecution(){sn(this.filter.length===1,"Popup operations only handle one event");const e=jd();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Dt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Dt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Zr.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Dt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CC.get())};e()}}Zr.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AC="pendingRedirect",Ra=new Map;class RC extends m0{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ra.get(this.auth._key());if(!e){try{const r=await PC(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ra.set(this.auth._key(),e)}return this.bypassAuthState||Ra.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function PC(t,e){const n=bC(e),r=NC(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function kC(t,e){Ra.set(t._key(),e)}function NC(t){return Zt(t._redirectPersistence)}function bC(t){return Aa(AC,t.config.apiKey,t.name)}async function OC(t,e,n=!1){if(ct(t.app))return Promise.reject(tn(t));const r=Dr(t),i=TC(r,e),o=await new RC(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DC=10*60*1e3;class LC{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!VC(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!g0(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Dt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=DC&&this.cachedEventUids.clear(),this.cachedEventUids.has(sg(e))}saveEventToCache(e){this.cachedEventUids.add(sg(e)),this.lastProcessedEventTime=Date.now()}}function sg(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function g0({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function VC(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return g0(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function MC(t,e={}){return Zn(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jC=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,UC=/^https?/;async function FC(t){if(t.config.emulator)return;const{authorizedDomains:e}=await MC(t);for(const n of e)try{if(BC(n))return}catch{}xt(t,"unauthorized-domain")}function BC(t){const e=ih(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!UC.test(n))return!1;if(jC.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zC=new wo(3e4,6e4);function og(){const t=Lt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function $C(t){return new Promise((e,n)=>{var r,i,s;function o(){og(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{og(),n(Dt(t,"network-request-failed"))},timeout:zC.get()})}if(!((i=(r=Lt().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Lt().gapi)===null||s===void 0)&&s.load)o();else{const l=Vx("iframefcb");return Lt()[l]=()=>{gapi.load?o():n(Dt(t,"network-request-failed"))},e0(`${Lx()}?onload=${l}`).catch(u=>n(u))}}).catch(e=>{throw Pa=null,e})}let Pa=null;function HC(t){return Pa=Pa||$C(t),Pa}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const WC=new wo(5e3,15e3),qC="__/auth/iframe",KC="emulator/auth/iframe",GC={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},QC=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function YC(t){const e=t.config;G(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Od(e,KC):`https://${t.config.authDomain}/${qC}`,r={apiKey:e.apiKey,appName:t.name,v:Or},i=QC.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Eo(r).slice(1)}`}async function XC(t){const e=await HC(t),n=Lt().gapi;return G(n,t,"internal-error"),e.open({where:document.body,url:YC(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:GC,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=Dt(t,"network-request-failed"),l=Lt().setTimeout(()=>{s(o)},WC.get());function u(){Lt().clearTimeout(l),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JC={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},ZC=500,eA=600,tA="_blank",nA="http://localhost";class ag{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function rA(t,e,n,r=ZC,i=eA){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let l="";const u=Object.assign(Object.assign({},JC),{width:r.toString(),height:i.toString(),top:s,left:o}),h=Ke().toLowerCase();n&&(l=K_(h)?tA:n),W_(h)&&(e=e||nA,u.scrollbars="yes");const f=Object.entries(u).reduce((g,[C,b])=>`${g}${C}=${b},`,"");if(Cx(h)&&l!=="_self")return iA(e||"",l),new ag(null);const v=window.open(e||"",l,f);G(v,t,"popup-blocked");try{v.focus()}catch{}return new ag(v)}function iA(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sA="__/auth/handler",oA="emulator/auth/handler",aA=encodeURIComponent("fac");async function lg(t,e,n,r,i,s){G(t.config.authDomain,t,"auth-domain-config-required"),G(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Or,eventId:i};if(e instanceof r0){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",GI(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[f,v]of Object.entries(s||{}))o[f]=v}if(e instanceof Io){const f=e.getScopes().filter(v=>v!=="");f.length>0&&(o.scopes=f.join(","))}t.tenantId&&(o.tid=t.tenantId);const l=o;for(const f of Object.keys(l))l[f]===void 0&&delete l[f];const u=await t._getAppCheckToken(),h=u?`#${aA}=${encodeURIComponent(u)}`:"";return`${lA(t)}?${Eo(l).slice(1)}${h}`}function lA({config:t}){return t.emulator?Od(t,oA):`https://${t.authDomain}/${sA}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rc="webStorageSupport";class uA{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=c0,this._completeRedirectFn=OC,this._overrideRedirectResult=kC}async _openPopup(e,n,r,i){var s;sn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await lg(e,n,r,ih(),i);return rA(e,o,jd())}async _openRedirect(e,n,r,i){await this._originValidation(e);const s=await lg(e,n,r,ih(),i);return dC(s),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(sn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await XC(e),r=new LC(e);return n.register("authEvent",i=>(G(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(rc,{type:rc},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[rc];o!==void 0&&n(!!o),xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=FC(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return J_()||q_()||Ld()}}const cA=uA;var ug="@firebase/auth",cg="1.10.7";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hA{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){G(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dA(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function fA(t){Tr(new $n("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),s=e.getProvider("app-check-internal"),{apiKey:o,authDomain:l}=r.options;G(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:l,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Z_(t)},h=new bx(r,i,s,u);return zx(h,n),h},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Tr(new $n("auth-internal",e=>{const n=Dr(e.getProvider("auth").getImmediate());return(r=>new hA(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ot(ug,cg,dA(t)),Ot(ug,cg,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pA=5*60,mA=k_("authIdTokenMaxAge")||pA;let hg=null;const gA=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>mA)return;const i=n==null?void 0:n.token;hg!==i&&(hg=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function Fd(t=kd()){const e=Fl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=Bx(t,{popupRedirectResolver:cA,persistence:[wC,uC,c0]}),r=k_("authTokenSyncURL");if(r&&typeof isSecureContext=="boolean"&&isSecureContext){const s=new URL(r,location.origin);if(location.origin===s.origin){const o=gA(s.toString());oC(n,o,()=>o(n.currentUser)),sC(n,l=>o(l))}}const i=A_("auth");return i&&$x(n,`http://${i}`),n}function yA(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}Ox({loadJS(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=Dt("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",yA().appendChild(r)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});fA("Browser");const vA=async(t,e)=>{try{const n=Fd();return(await iC(n,t,e)).user}catch(n){throw new Error(n.message)}},_A=async(t,e)=>{try{const n=Fd();return(await rC(n,t,e)).user}catch(n){throw new Error(n.message)}},EA=async()=>(console.warn("getUsers should be implemented as a backend API call"),[]),wA=async t=>(console.warn("deleteUser should be implemented as a backend API call"),{success:!0}),TA=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(""),o=E_(),l=async u=>{u.preventDefault();try{await vA(t,n),o("/admin/dashboard")}catch{s("Invalid email or password")}};return p.jsx("div",{className:"flex items-center justify-center h-screen bg-gray-100",children:p.jsxs("form",{onSubmit:l,className:"bg-white p-6 rounded shadow-md",children:[p.jsx("h2",{className:"text-2xl mb-4",children:"Admin Login"}),i&&p.jsx("p",{className:"text-red-500 mb-4",children:i}),p.jsxs("div",{className:"mb-4",children:[p.jsx("label",{className:"block text-gray-700",children:"Email"}),p.jsx("input",{type:"email",value:t,onChange:u=>e(u.target.value),className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",required:!0})]}),p.jsxs("div",{className:"mb-4",children:[p.jsx("label",{className:"block text-gray-700",children:"Password"}),p.jsx("input",{type:"password",value:n,onChange:u=>r(u.target.value),className:"mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-blue-500 focus:ring focus:ring-blue-200",required:!0})]}),p.jsx("button",{type:"submit",className:"w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600",children:"Login"})]})})},IA=()=>{const[t,e]=j.useState(""),[n,r]=j.useState(""),[i,s]=j.useState(null),o=async l=>{l.preventDefault(),s(null);try{await _A(t,n)}catch(u){s(u.message)}};return p.jsxs("form",{onSubmit:o,className:"max-w-sm mx-auto mt-10 space-y-4",children:[p.jsx("h2",{className:"text-xl font-bold",children:"Register"}),p.jsx("input",{className:"w-full border p-2",type:"email",placeholder:"Email",value:t,onChange:l=>e(l.target.value),required:!0}),p.jsx("input",{className:"w-full border p-2",type:"password",placeholder:"Password",value:n,onChange:l=>r(l.target.value),required:!0}),i&&p.jsx("div",{className:"text-red-500",children:i}),p.jsx("button",{className:"w-full bg-green-600 text-white p-2 rounded",type:"submit",children:"Register"})]})},SA=()=>p.jsx("div",{className:"flex items-center justify-center h-screen",children:p.jsx("h1",{className:"text-4xl font-bold",children:"404 - Page Not Found"})}),Bd=()=>p.jsx("nav",{className:"bg-gray-800 p-4",children:p.jsxs("div",{className:"container mx-auto flex justify-between items-center",children:[p.jsx("div",{className:"text-white text-lg font-bold",children:"Admin Panel"}),p.jsxs("div",{className:"space-x-4",children:[p.jsx(Se,{to:"/admin/dashboard",className:"text-gray-300 hover:text-white",children:"Dashboard"}),p.jsx(Se,{to:"/admin/manage-content",className:"text-gray-300 hover:text-white",children:"Manage Content"}),p.jsx(Se,{to:"/admin/manage-users",className:"text-gray-300 hover:text-white",children:"Manage Users"})]})]})}),xA=()=>p.jsxs("div",{className:"flex flex-col min-h-screen bg-gray-100",children:[p.jsx(Bd,{}),p.jsx("main",{className:"flex-grow p-8",children:p.jsxs("div",{className:"max-w-4xl mx-auto",children:[p.jsxs("div",{className:"text-center mb-12",children:[p.jsx("h1",{className:"text-4xl font-bold text-gray-900 mb-4",children:"Admin Dashboard"}),p.jsx("p",{className:"text-xl text-gray-600",children:"Welcome to the administration panel. Choose an option below to get started."})]}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-8",children:[p.jsxs(Se,{to:"/admin/dashboard",className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center",children:[p.jsx("div",{className:"text-4xl mb-4",children:"📊"}),p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Dashboard"}),p.jsx("p",{className:"text-gray-600",children:"View analytics and system overview"})]}),p.jsxs(Se,{to:"/admin/users",className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center",children:[p.jsx("div",{className:"text-4xl mb-4",children:"👥"}),p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Manage Users"}),p.jsx("p",{className:"text-gray-600",children:"Add, edit, and manage user accounts"})]}),p.jsxs(Se,{to:"/admin/content",className:"bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 text-center",children:[p.jsx("div",{className:"text-4xl mb-4",children:"📝"}),p.jsx("h3",{className:"text-xl font-semibold text-gray-900 mb-2",children:"Manage Content"}),p.jsx("p",{className:"text-gray-600",children:"Update website content and settings"})]})]})]})})]}),CA=()=>p.jsxs("div",{className:"min-h-screen bg-gray-100",children:[p.jsx(Bd,{}),p.jsxs("div",{className:"p-6",children:[p.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Admin Dashboard"}),p.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",children:[p.jsxs("div",{className:"bg-white p-4 rounded shadow",children:[p.jsx("h2",{className:"font-semibold",children:"Total Users"}),p.jsx("p",{className:"text-lg",children:"150"})]}),p.jsxs("div",{className:"bg-white p-4 rounded shadow",children:[p.jsx("h2",{className:"font-semibold",children:"Total Posts"}),p.jsx("p",{className:"text-lg",children:"75"})]}),p.jsxs("div",{className:"bg-white p-4 rounded shadow",children:[p.jsx("h2",{className:"font-semibold",children:"Total Comments"}),p.jsx("p",{className:"text-lg",children:"300"})]})]}),p.jsxs("div",{className:"mt-6",children:[p.jsx("h2",{className:"text-xl font-bold",children:"Quick Links"}),p.jsxs("ul",{className:"list-disc pl-5",children:[p.jsx("li",{children:p.jsx("a",{href:"/admin/manage-content",className:"text-blue-500",children:"Manage Content"})}),p.jsx("li",{children:p.jsx("a",{href:"/admin/manage-users",className:"text-blue-500",children:"Manage Users"})})]})]})]})]}),AA=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0);j.useEffect(()=>{(async()=>{const o=await EA();e(o),r(!1)})()},[]);const i=async s=>{await wA(),e(t.filter(o=>o.id!==s))};return n?p.jsx("div",{children:"Loading..."}):p.jsxs("div",{children:[p.jsx(Bd,{}),p.jsx("h1",{className:"text-2xl font-bold mb-4",children:"Manage Users"}),p.jsxs("table",{className:"min-w-full bg-white",children:[p.jsx("thead",{children:p.jsxs("tr",{children:[p.jsx("th",{className:"py-2 px-4 border-b",children:"User ID"}),p.jsx("th",{className:"py-2 px-4 border-b",children:"Email"}),p.jsx("th",{className:"py-2 px-4 border-b",children:"Actions"})]})}),p.jsx("tbody",{children:t.map(s=>p.jsxs("tr",{children:[p.jsx("td",{className:"py-2 px-4 border-b",children:s.id}),p.jsx("td",{className:"py-2 px-4 border-b",children:s.email}),p.jsx("td",{className:"py-2 px-4 border-b",children:p.jsx("button",{className:"text-red-500 hover:text-red-700",onClick:()=>i(s.id),children:"Delete"})})]},s.id))})]})]})};var RA="firebase",PA="11.9.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ot(RA,PA,"app");var dg=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var Mn,y0;(function(){var t;/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/function e(S,_){function E(){}E.prototype=_.prototype,S.D=_.prototype,S.prototype=new E,S.prototype.constructor=S,S.C=function(x,A,P){for(var T=Array(arguments.length-2),Ze=2;Ze<arguments.length;Ze++)T[Ze-2]=arguments[Ze];return _.prototype[A].apply(x,T)}}function n(){this.blockSize=-1}function r(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}e(r,n),r.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0};function i(S,_,E){E||(E=0);var x=Array(16);if(typeof _=="string")for(var A=0;16>A;++A)x[A]=_.charCodeAt(E++)|_.charCodeAt(E++)<<8|_.charCodeAt(E++)<<16|_.charCodeAt(E++)<<24;else for(A=0;16>A;++A)x[A]=_[E++]|_[E++]<<8|_[E++]<<16|_[E++]<<24;_=S.g[0],E=S.g[1],A=S.g[2];var P=S.g[3],T=_+(P^E&(A^P))+x[0]+3614090360&4294967295;_=E+(T<<7&4294967295|T>>>25),T=P+(A^_&(E^A))+x[1]+3905402710&4294967295,P=_+(T<<12&4294967295|T>>>20),T=A+(E^P&(_^E))+x[2]+606105819&4294967295,A=P+(T<<17&4294967295|T>>>15),T=E+(_^A&(P^_))+x[3]+3250441966&4294967295,E=A+(T<<22&4294967295|T>>>10),T=_+(P^E&(A^P))+x[4]+4118548399&4294967295,_=E+(T<<7&4294967295|T>>>25),T=P+(A^_&(E^A))+x[5]+1200080426&4294967295,P=_+(T<<12&4294967295|T>>>20),T=A+(E^P&(_^E))+x[6]+2821735955&4294967295,A=P+(T<<17&4294967295|T>>>15),T=E+(_^A&(P^_))+x[7]+4249261313&4294967295,E=A+(T<<22&4294967295|T>>>10),T=_+(P^E&(A^P))+x[8]+1770035416&4294967295,_=E+(T<<7&4294967295|T>>>25),T=P+(A^_&(E^A))+x[9]+2336552879&4294967295,P=_+(T<<12&4294967295|T>>>20),T=A+(E^P&(_^E))+x[10]+4294925233&4294967295,A=P+(T<<17&4294967295|T>>>15),T=E+(_^A&(P^_))+x[11]+2304563134&4294967295,E=A+(T<<22&4294967295|T>>>10),T=_+(P^E&(A^P))+x[12]+1804603682&4294967295,_=E+(T<<7&4294967295|T>>>25),T=P+(A^_&(E^A))+x[13]+4254626195&4294967295,P=_+(T<<12&4294967295|T>>>20),T=A+(E^P&(_^E))+x[14]+2792965006&4294967295,A=P+(T<<17&4294967295|T>>>15),T=E+(_^A&(P^_))+x[15]+1236535329&4294967295,E=A+(T<<22&4294967295|T>>>10),T=_+(A^P&(E^A))+x[1]+4129170786&4294967295,_=E+(T<<5&4294967295|T>>>27),T=P+(E^A&(_^E))+x[6]+3225465664&4294967295,P=_+(T<<9&4294967295|T>>>23),T=A+(_^E&(P^_))+x[11]+643717713&4294967295,A=P+(T<<14&4294967295|T>>>18),T=E+(P^_&(A^P))+x[0]+3921069994&4294967295,E=A+(T<<20&4294967295|T>>>12),T=_+(A^P&(E^A))+x[5]+3593408605&4294967295,_=E+(T<<5&4294967295|T>>>27),T=P+(E^A&(_^E))+x[10]+38016083&4294967295,P=_+(T<<9&4294967295|T>>>23),T=A+(_^E&(P^_))+x[15]+3634488961&4294967295,A=P+(T<<14&4294967295|T>>>18),T=E+(P^_&(A^P))+x[4]+3889429448&4294967295,E=A+(T<<20&4294967295|T>>>12),T=_+(A^P&(E^A))+x[9]+568446438&4294967295,_=E+(T<<5&4294967295|T>>>27),T=P+(E^A&(_^E))+x[14]+3275163606&4294967295,P=_+(T<<9&4294967295|T>>>23),T=A+(_^E&(P^_))+x[3]+4107603335&4294967295,A=P+(T<<14&4294967295|T>>>18),T=E+(P^_&(A^P))+x[8]+1163531501&4294967295,E=A+(T<<20&4294967295|T>>>12),T=_+(A^P&(E^A))+x[13]+2850285829&4294967295,_=E+(T<<5&4294967295|T>>>27),T=P+(E^A&(_^E))+x[2]+4243563512&4294967295,P=_+(T<<9&4294967295|T>>>23),T=A+(_^E&(P^_))+x[7]+1735328473&4294967295,A=P+(T<<14&4294967295|T>>>18),T=E+(P^_&(A^P))+x[12]+2368359562&4294967295,E=A+(T<<20&4294967295|T>>>12),T=_+(E^A^P)+x[5]+4294588738&4294967295,_=E+(T<<4&4294967295|T>>>28),T=P+(_^E^A)+x[8]+2272392833&4294967295,P=_+(T<<11&4294967295|T>>>21),T=A+(P^_^E)+x[11]+1839030562&4294967295,A=P+(T<<16&4294967295|T>>>16),T=E+(A^P^_)+x[14]+4259657740&4294967295,E=A+(T<<23&4294967295|T>>>9),T=_+(E^A^P)+x[1]+2763975236&4294967295,_=E+(T<<4&4294967295|T>>>28),T=P+(_^E^A)+x[4]+1272893353&4294967295,P=_+(T<<11&4294967295|T>>>21),T=A+(P^_^E)+x[7]+4139469664&4294967295,A=P+(T<<16&4294967295|T>>>16),T=E+(A^P^_)+x[10]+3200236656&4294967295,E=A+(T<<23&4294967295|T>>>9),T=_+(E^A^P)+x[13]+681279174&4294967295,_=E+(T<<4&4294967295|T>>>28),T=P+(_^E^A)+x[0]+3936430074&4294967295,P=_+(T<<11&4294967295|T>>>21),T=A+(P^_^E)+x[3]+3572445317&4294967295,A=P+(T<<16&4294967295|T>>>16),T=E+(A^P^_)+x[6]+76029189&4294967295,E=A+(T<<23&4294967295|T>>>9),T=_+(E^A^P)+x[9]+3654602809&4294967295,_=E+(T<<4&4294967295|T>>>28),T=P+(_^E^A)+x[12]+3873151461&4294967295,P=_+(T<<11&4294967295|T>>>21),T=A+(P^_^E)+x[15]+530742520&4294967295,A=P+(T<<16&4294967295|T>>>16),T=E+(A^P^_)+x[2]+3299628645&4294967295,E=A+(T<<23&4294967295|T>>>9),T=_+(A^(E|~P))+x[0]+4096336452&4294967295,_=E+(T<<6&4294967295|T>>>26),T=P+(E^(_|~A))+x[7]+1126891415&4294967295,P=_+(T<<10&4294967295|T>>>22),T=A+(_^(P|~E))+x[14]+2878612391&4294967295,A=P+(T<<15&4294967295|T>>>17),T=E+(P^(A|~_))+x[5]+4237533241&4294967295,E=A+(T<<21&4294967295|T>>>11),T=_+(A^(E|~P))+x[12]+1700485571&4294967295,_=E+(T<<6&4294967295|T>>>26),T=P+(E^(_|~A))+x[3]+2399980690&4294967295,P=_+(T<<10&4294967295|T>>>22),T=A+(_^(P|~E))+x[10]+4293915773&4294967295,A=P+(T<<15&4294967295|T>>>17),T=E+(P^(A|~_))+x[1]+2240044497&4294967295,E=A+(T<<21&4294967295|T>>>11),T=_+(A^(E|~P))+x[8]+1873313359&4294967295,_=E+(T<<6&4294967295|T>>>26),T=P+(E^(_|~A))+x[15]+4264355552&4294967295,P=_+(T<<10&4294967295|T>>>22),T=A+(_^(P|~E))+x[6]+2734768916&4294967295,A=P+(T<<15&4294967295|T>>>17),T=E+(P^(A|~_))+x[13]+1309151649&4294967295,E=A+(T<<21&4294967295|T>>>11),T=_+(A^(E|~P))+x[4]+4149444226&4294967295,_=E+(T<<6&4294967295|T>>>26),T=P+(E^(_|~A))+x[11]+3174756917&4294967295,P=_+(T<<10&4294967295|T>>>22),T=A+(_^(P|~E))+x[2]+718787259&4294967295,A=P+(T<<15&4294967295|T>>>17),T=E+(P^(A|~_))+x[9]+3951481745&4294967295,S.g[0]=S.g[0]+_&4294967295,S.g[1]=S.g[1]+(A+(T<<21&4294967295|T>>>11))&4294967295,S.g[2]=S.g[2]+A&4294967295,S.g[3]=S.g[3]+P&4294967295}r.prototype.u=function(S,_){_===void 0&&(_=S.length);for(var E=_-this.blockSize,x=this.B,A=this.h,P=0;P<_;){if(A==0)for(;P<=E;)i(this,S,P),P+=this.blockSize;if(typeof S=="string"){for(;P<_;)if(x[A++]=S.charCodeAt(P++),A==this.blockSize){i(this,x),A=0;break}}else for(;P<_;)if(x[A++]=S[P++],A==this.blockSize){i(this,x),A=0;break}}this.h=A,this.o+=_},r.prototype.v=function(){var S=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);S[0]=128;for(var _=1;_<S.length-8;++_)S[_]=0;var E=8*this.o;for(_=S.length-8;_<S.length;++_)S[_]=E&255,E/=256;for(this.u(S),S=Array(16),_=E=0;4>_;++_)for(var x=0;32>x;x+=8)S[E++]=this.g[_]>>>x&255;return S};function s(S,_){var E=l;return Object.prototype.hasOwnProperty.call(E,S)?E[S]:E[S]=_(S)}function o(S,_){this.h=_;for(var E=[],x=!0,A=S.length-1;0<=A;A--){var P=S[A]|0;x&&P==_||(E[A]=P,x=!1)}this.g=E}var l={};function u(S){return-128<=S&&128>S?s(S,function(_){return new o([_|0],0>_?-1:0)}):new o([S|0],0>S?-1:0)}function h(S){if(isNaN(S)||!isFinite(S))return v;if(0>S)return y(h(-S));for(var _=[],E=1,x=0;S>=E;x++)_[x]=S/E|0,E*=4294967296;return new o(_,0)}function f(S,_){if(S.length==0)throw Error("number format error: empty string");if(_=_||10,2>_||36<_)throw Error("radix out of range: "+_);if(S.charAt(0)=="-")return y(f(S.substring(1),_));if(0<=S.indexOf("-"))throw Error('number format error: interior "-" character');for(var E=h(Math.pow(_,8)),x=v,A=0;A<S.length;A+=8){var P=Math.min(8,S.length-A),T=parseInt(S.substring(A,A+P),_);8>P?(P=h(Math.pow(_,P)),x=x.j(P).add(h(T))):(x=x.j(E),x=x.add(h(T)))}return x}var v=u(0),g=u(1),C=u(16777216);t=o.prototype,t.m=function(){if(O(this))return-y(this).m();for(var S=0,_=1,E=0;E<this.g.length;E++){var x=this.i(E);S+=(0<=x?x:4294967296+x)*_,_*=4294967296}return S},t.toString=function(S){if(S=S||10,2>S||36<S)throw Error("radix out of range: "+S);if(b(this))return"0";if(O(this))return"-"+y(this).toString(S);for(var _=h(Math.pow(S,6)),E=this,x="";;){var A=N(E,_).g;E=w(E,A.j(_));var P=((0<E.g.length?E.g[0]:E.h)>>>0).toString(S);if(E=A,b(E))return P+x;for(;6>P.length;)P="0"+P;x=P+x}},t.i=function(S){return 0>S?0:S<this.g.length?this.g[S]:this.h};function b(S){if(S.h!=0)return!1;for(var _=0;_<S.g.length;_++)if(S.g[_]!=0)return!1;return!0}function O(S){return S.h==-1}t.l=function(S){return S=w(this,S),O(S)?-1:b(S)?0:1};function y(S){for(var _=S.g.length,E=[],x=0;x<_;x++)E[x]=~S.g[x];return new o(E,~S.h).add(g)}t.abs=function(){return O(this)?y(this):this},t.add=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],x=0,A=0;A<=_;A++){var P=x+(this.i(A)&65535)+(S.i(A)&65535),T=(P>>>16)+(this.i(A)>>>16)+(S.i(A)>>>16);x=T>>>16,P&=65535,T&=65535,E[A]=T<<16|P}return new o(E,E[E.length-1]&-2147483648?-1:0)};function w(S,_){return S.add(y(_))}t.j=function(S){if(b(this)||b(S))return v;if(O(this))return O(S)?y(this).j(y(S)):y(y(this).j(S));if(O(S))return y(this.j(y(S)));if(0>this.l(C)&&0>S.l(C))return h(this.m()*S.m());for(var _=this.g.length+S.g.length,E=[],x=0;x<2*_;x++)E[x]=0;for(x=0;x<this.g.length;x++)for(var A=0;A<S.g.length;A++){var P=this.i(x)>>>16,T=this.i(x)&65535,Ze=S.i(A)>>>16,at=S.i(A)&65535;E[2*x+2*A]+=T*at,I(E,2*x+2*A),E[2*x+2*A+1]+=P*at,I(E,2*x+2*A+1),E[2*x+2*A+1]+=T*Ze,I(E,2*x+2*A+1),E[2*x+2*A+2]+=P*Ze,I(E,2*x+2*A+2)}for(x=0;x<_;x++)E[x]=E[2*x+1]<<16|E[2*x];for(x=_;x<2*_;x++)E[x]=0;return new o(E,0)};function I(S,_){for(;(S[_]&65535)!=S[_];)S[_+1]+=S[_]>>>16,S[_]&=65535,_++}function R(S,_){this.g=S,this.h=_}function N(S,_){if(b(_))throw Error("division by zero");if(b(S))return new R(v,v);if(O(S))return _=N(y(S),_),new R(y(_.g),y(_.h));if(O(_))return _=N(S,y(_)),new R(y(_.g),_.h);if(30<S.g.length){if(O(S)||O(_))throw Error("slowDivide_ only works with positive integers.");for(var E=g,x=_;0>=x.l(S);)E=z(E),x=z(x);var A=V(E,1),P=V(x,1);for(x=V(x,2),E=V(E,2);!b(x);){var T=P.add(x);0>=T.l(S)&&(A=A.add(E),P=T),x=V(x,1),E=V(E,1)}return _=w(S,A.j(_)),new R(A,_)}for(A=v;0<=S.l(_);){for(E=Math.max(1,Math.floor(S.m()/_.m())),x=Math.ceil(Math.log(E)/Math.LN2),x=48>=x?1:Math.pow(2,x-48),P=h(E),T=P.j(_);O(T)||0<T.l(S);)E-=x,P=h(E),T=P.j(_);b(P)&&(P=g),A=A.add(P),S=w(S,T)}return new R(A,S)}t.A=function(S){return N(this,S).h},t.and=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],x=0;x<_;x++)E[x]=this.i(x)&S.i(x);return new o(E,this.h&S.h)},t.or=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],x=0;x<_;x++)E[x]=this.i(x)|S.i(x);return new o(E,this.h|S.h)},t.xor=function(S){for(var _=Math.max(this.g.length,S.g.length),E=[],x=0;x<_;x++)E[x]=this.i(x)^S.i(x);return new o(E,this.h^S.h)};function z(S){for(var _=S.g.length+1,E=[],x=0;x<_;x++)E[x]=S.i(x)<<1|S.i(x-1)>>>31;return new o(E,S.h)}function V(S,_){var E=_>>5;_%=32;for(var x=S.g.length-E,A=[],P=0;P<x;P++)A[P]=0<_?S.i(P+E)>>>_|S.i(P+E+1)<<32-_:S.i(P+E);return new o(A,S.h)}r.prototype.digest=r.prototype.v,r.prototype.reset=r.prototype.s,r.prototype.update=r.prototype.u,y0=r,o.prototype.add=o.prototype.add,o.prototype.multiply=o.prototype.j,o.prototype.modulo=o.prototype.A,o.prototype.compare=o.prototype.l,o.prototype.toNumber=o.prototype.m,o.prototype.toString=o.prototype.toString,o.prototype.getBits=o.prototype.i,o.fromNumber=h,o.fromString=f,Mn=o}).apply(typeof dg<"u"?dg:typeof self<"u"?self:typeof window<"u"?window:{});var aa=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/var v0,_s,_0,ka,lh,E0,w0,T0;(function(){var t,e=typeof Object.defineProperties=="function"?Object.defineProperty:function(a,c,d){return a==Array.prototype||a==Object.prototype||(a[c]=d.value),a};function n(a){a=[typeof globalThis=="object"&&globalThis,a,typeof window=="object"&&window,typeof self=="object"&&self,typeof aa=="object"&&aa];for(var c=0;c<a.length;++c){var d=a[c];if(d&&d.Math==Math)return d}throw Error("Cannot find global object")}var r=n(this);function i(a,c){if(c)e:{var d=r;a=a.split(".");for(var m=0;m<a.length-1;m++){var k=a[m];if(!(k in d))break e;d=d[k]}a=a[a.length-1],m=d[a],c=c(m),c!=m&&c!=null&&e(d,a,{configurable:!0,writable:!0,value:c})}}function s(a,c){a instanceof String&&(a+="");var d=0,m=!1,k={next:function(){if(!m&&d<a.length){var D=d++;return{value:c(D,a[D]),done:!1}}return m=!0,{done:!0,value:void 0}}};return k[Symbol.iterator]=function(){return k},k}i("Array.prototype.values",function(a){return a||function(){return s(this,function(c,d){return d})}});/** @license

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/var o=o||{},l=this||self;function u(a){var c=typeof a;return c=c!="object"?c:a?Array.isArray(a)?"array":c:"null",c=="array"||c=="object"&&typeof a.length=="number"}function h(a){var c=typeof a;return c=="object"&&a!=null||c=="function"}function f(a,c,d){return a.call.apply(a.bind,arguments)}function v(a,c,d){if(!a)throw Error();if(2<arguments.length){var m=Array.prototype.slice.call(arguments,2);return function(){var k=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(k,m),a.apply(c,k)}}return function(){return a.apply(c,arguments)}}function g(a,c,d){return g=Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?f:v,g.apply(null,arguments)}function C(a,c){var d=Array.prototype.slice.call(arguments,1);return function(){var m=d.slice();return m.push.apply(m,arguments),a.apply(this,m)}}function b(a,c){function d(){}d.prototype=c.prototype,a.aa=c.prototype,a.prototype=new d,a.prototype.constructor=a,a.Qb=function(m,k,D){for(var U=Array(arguments.length-2),oe=2;oe<arguments.length;oe++)U[oe-2]=arguments[oe];return c.prototype[k].apply(m,U)}}function O(a){const c=a.length;if(0<c){const d=Array(c);for(let m=0;m<c;m++)d[m]=a[m];return d}return[]}function y(a,c){for(let d=1;d<arguments.length;d++){const m=arguments[d];if(u(m)){const k=a.length||0,D=m.length||0;a.length=k+D;for(let U=0;U<D;U++)a[k+U]=m[U]}else a.push(m)}}class w{constructor(c,d){this.i=c,this.j=d,this.h=0,this.g=null}get(){let c;return 0<this.h?(this.h--,c=this.g,this.g=c.next,c.next=null):c=this.i(),c}}function I(a){return/^[\s\xa0]*$/.test(a)}function R(){var a=l.navigator;return a&&(a=a.userAgent)?a:""}function N(a){return N[" "](a),a}N[" "]=function(){};var z=R().indexOf("Gecko")!=-1&&!(R().toLowerCase().indexOf("webkit")!=-1&&R().indexOf("Edge")==-1)&&!(R().indexOf("Trident")!=-1||R().indexOf("MSIE")!=-1)&&R().indexOf("Edge")==-1;function V(a,c,d){for(const m in a)c.call(d,a[m],m,a)}function S(a,c){for(const d in a)c.call(void 0,a[d],d,a)}function _(a){const c={};for(const d in a)c[d]=a[d];return c}const E="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function x(a,c){let d,m;for(let k=1;k<arguments.length;k++){m=arguments[k];for(d in m)a[d]=m[d];for(let D=0;D<E.length;D++)d=E[D],Object.prototype.hasOwnProperty.call(m,d)&&(a[d]=m[d])}}function A(a){var c=1;a=a.split(":");const d=[];for(;0<c&&a.length;)d.push(a.shift()),c--;return a.length&&d.push(a.join(":")),d}function P(a){l.setTimeout(()=>{throw a},0)}function T(){var a=tr;let c=null;return a.g&&(c=a.g,a.g=a.g.next,a.g||(a.h=null),c.next=null),c}class Ze{constructor(){this.h=this.g=null}add(c,d){const m=at.get();m.set(c,d),this.h?this.h.next=m:this.g=m,this.h=m}}var at=new w(()=>new er,a=>a.reset());class er{constructor(){this.next=this.g=this.h=null}set(c,d){this.h=c,this.g=d,this.next=null}reset(){this.next=this.g=this.h=null}}let $t,Ht=!1,tr=new Ze,Po=()=>{const a=l.Promise.resolve(void 0);$t=()=>{a.then(B)}};var B=()=>{for(var a;a=T();){try{a.h.call(a.g)}catch(d){P(d)}var c=at;c.j(a),100>c.h&&(c.h++,a.next=c.g,c.g=a)}Ht=!1};function W(){this.s=this.s,this.C=this.C}W.prototype.s=!1,W.prototype.ma=function(){this.s||(this.s=!0,this.N())},W.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()};function q(a,c){this.type=a,this.g=this.target=c,this.defaultPrevented=!1}q.prototype.h=function(){this.defaultPrevented=!0};var de=function(){if(!l.addEventListener||!Object.defineProperty)return!1;var a=!1,c=Object.defineProperty({},"passive",{get:function(){a=!0}});try{const d=()=>{};l.addEventListener("test",d,c),l.removeEventListener("test",d,c)}catch{}return a}();function fe(a,c){if(q.call(this,a?a.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,a){var d=this.type=a.type,m=a.changedTouches&&a.changedTouches.length?a.changedTouches[0]:null;if(this.target=a.target||a.srcElement,this.g=c,c=a.relatedTarget){if(z){e:{try{N(c.nodeName);var k=!0;break e}catch{}k=!1}k||(c=null)}}else d=="mouseover"?c=a.fromElement:d=="mouseout"&&(c=a.toElement);this.relatedTarget=c,m?(this.clientX=m.clientX!==void 0?m.clientX:m.pageX,this.clientY=m.clientY!==void 0?m.clientY:m.pageY,this.screenX=m.screenX||0,this.screenY=m.screenY||0):(this.clientX=a.clientX!==void 0?a.clientX:a.pageX,this.clientY=a.clientY!==void 0?a.clientY:a.pageY,this.screenX=a.screenX||0,this.screenY=a.screenY||0),this.button=a.button,this.key=a.key||"",this.ctrlKey=a.ctrlKey,this.altKey=a.altKey,this.shiftKey=a.shiftKey,this.metaKey=a.metaKey,this.pointerId=a.pointerId||0,this.pointerType=typeof a.pointerType=="string"?a.pointerType:Wt[a.pointerType]||"",this.state=a.state,this.i=a,a.defaultPrevented&&fe.aa.h.call(this)}}b(fe,q);var Wt={2:"touch",3:"pen",4:"mouse"};fe.prototype.h=function(){fe.aa.h.call(this);var a=this.i;a.preventDefault?a.preventDefault():a.returnValue=!1};var lt="closure_listenable_"+(1e6*Math.random()|0),nr=0;function un(a,c,d,m,k){this.listener=a,this.proxy=null,this.src=c,this.type=d,this.capture=!!m,this.ha=k,this.key=++nr,this.da=this.fa=!1}function ko(a){a.da=!0,a.listener=null,a.proxy=null,a.src=null,a.ha=null}function No(a){this.src=a,this.g={},this.h=0}No.prototype.add=function(a,c,d,m,k){var D=a.toString();a=this.g[D],a||(a=this.g[D]=[],this.h++);var U=ru(a,c,m,k);return-1<U?(c=a[U],d||(c.fa=!1)):(c=new un(c,this.src,D,!!m,k),c.fa=d,a.push(c)),c};function nu(a,c){var d=c.type;if(d in a.g){var m=a.g[d],k=Array.prototype.indexOf.call(m,c,void 0),D;(D=0<=k)&&Array.prototype.splice.call(m,k,1),D&&(ko(c),a.g[d].length==0&&(delete a.g[d],a.h--))}}function ru(a,c,d,m){for(var k=0;k<a.length;++k){var D=a[k];if(!D.da&&D.listener==c&&D.capture==!!d&&D.ha==m)return k}return-1}var iu="closure_lm_"+(1e6*Math.random()|0),su={};function cf(a,c,d,m,k){if(m&&m.once)return df(a,c,d,m,k);if(Array.isArray(c)){for(var D=0;D<c.length;D++)cf(a,c[D],d,m,k);return null}return d=uu(d),a&&a[lt]?a.K(c,d,h(m)?!!m.capture:!!m,k):hf(a,c,d,!1,m,k)}function hf(a,c,d,m,k,D){if(!c)throw Error("Invalid event type");var U=h(k)?!!k.capture:!!k,oe=au(a);if(oe||(a[iu]=oe=new No(a)),d=oe.add(c,d,m,U,D),d.proxy)return d;if(m=kE(),d.proxy=m,m.src=a,m.listener=d,a.addEventListener)de||(k=U),k===void 0&&(k=!1),a.addEventListener(c.toString(),m,k);else if(a.attachEvent)a.attachEvent(pf(c.toString()),m);else if(a.addListener&&a.removeListener)a.addListener(m);else throw Error("addEventListener and attachEvent are unavailable.");return d}function kE(){function a(d){return c.call(a.src,a.listener,d)}const c=NE;return a}function df(a,c,d,m,k){if(Array.isArray(c)){for(var D=0;D<c.length;D++)df(a,c[D],d,m,k);return null}return d=uu(d),a&&a[lt]?a.L(c,d,h(m)?!!m.capture:!!m,k):hf(a,c,d,!0,m,k)}function ff(a,c,d,m,k){if(Array.isArray(c))for(var D=0;D<c.length;D++)ff(a,c[D],d,m,k);else m=h(m)?!!m.capture:!!m,d=uu(d),a&&a[lt]?(a=a.i,c=String(c).toString(),c in a.g&&(D=a.g[c],d=ru(D,d,m,k),-1<d&&(ko(D[d]),Array.prototype.splice.call(D,d,1),D.length==0&&(delete a.g[c],a.h--)))):a&&(a=au(a))&&(c=a.g[c.toString()],a=-1,c&&(a=ru(c,d,m,k)),(d=-1<a?c[a]:null)&&ou(d))}function ou(a){if(typeof a!="number"&&a&&!a.da){var c=a.src;if(c&&c[lt])nu(c.i,a);else{var d=a.type,m=a.proxy;c.removeEventListener?c.removeEventListener(d,m,a.capture):c.detachEvent?c.detachEvent(pf(d),m):c.addListener&&c.removeListener&&c.removeListener(m),(d=au(c))?(nu(d,a),d.h==0&&(d.src=null,c[iu]=null)):ko(a)}}}function pf(a){return a in su?su[a]:su[a]="on"+a}function NE(a,c){if(a.da)a=!0;else{c=new fe(c,this);var d=a.listener,m=a.ha||a.src;a.fa&&ou(a),a=d.call(m,c)}return a}function au(a){return a=a[iu],a instanceof No?a:null}var lu="__closure_events_fn_"+(1e9*Math.random()>>>0);function uu(a){return typeof a=="function"?a:(a[lu]||(a[lu]=function(c){return a.handleEvent(c)}),a[lu])}function Me(){W.call(this),this.i=new No(this),this.M=this,this.F=null}b(Me,W),Me.prototype[lt]=!0,Me.prototype.removeEventListener=function(a,c,d,m){ff(this,a,c,d,m)};function Ge(a,c){var d,m=a.F;if(m)for(d=[];m;m=m.F)d.push(m);if(a=a.M,m=c.type||c,typeof c=="string")c=new q(c,a);else if(c instanceof q)c.target=c.target||a;else{var k=c;c=new q(m,a),x(c,k)}if(k=!0,d)for(var D=d.length-1;0<=D;D--){var U=c.g=d[D];k=bo(U,m,!0,c)&&k}if(U=c.g=a,k=bo(U,m,!0,c)&&k,k=bo(U,m,!1,c)&&k,d)for(D=0;D<d.length;D++)U=c.g=d[D],k=bo(U,m,!1,c)&&k}Me.prototype.N=function(){if(Me.aa.N.call(this),this.i){var a=this.i,c;for(c in a.g){for(var d=a.g[c],m=0;m<d.length;m++)ko(d[m]);delete a.g[c],a.h--}}this.F=null},Me.prototype.K=function(a,c,d,m){return this.i.add(String(a),c,!1,d,m)},Me.prototype.L=function(a,c,d,m){return this.i.add(String(a),c,!0,d,m)};function bo(a,c,d,m){if(c=a.i.g[String(c)],!c)return!0;c=c.concat();for(var k=!0,D=0;D<c.length;++D){var U=c[D];if(U&&!U.da&&U.capture==d){var oe=U.listener,Ne=U.ha||U.src;U.fa&&nu(a.i,U),k=oe.call(Ne,m)!==!1&&k}}return k&&!m.defaultPrevented}function mf(a,c,d){if(typeof a=="function")d&&(a=g(a,d));else if(a&&typeof a.handleEvent=="function")a=g(a.handleEvent,a);else throw Error("Invalid listener argument");return 2147483647<Number(c)?-1:l.setTimeout(a,c||0)}function gf(a){a.g=mf(()=>{a.g=null,a.i&&(a.i=!1,gf(a))},a.l);const c=a.h;a.h=null,a.m.apply(null,c)}class bE extends W{constructor(c,d){super(),this.m=c,this.l=d,this.h=null,this.i=!1,this.g=null}j(c){this.h=arguments,this.g?this.i=!0:gf(this)}N(){super.N(),this.g&&(l.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Fi(a){W.call(this),this.h=a,this.g={}}b(Fi,W);var yf=[];function vf(a){V(a.g,function(c,d){this.g.hasOwnProperty(d)&&ou(c)},a),a.g={}}Fi.prototype.N=function(){Fi.aa.N.call(this),vf(this)},Fi.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var cu=l.JSON.stringify,OE=l.JSON.parse,DE=class{stringify(a){return l.JSON.stringify(a,void 0)}parse(a){return l.JSON.parse(a,void 0)}};function hu(){}hu.prototype.h=null;function _f(a){return a.h||(a.h=a.i())}function Ef(){}var Bi={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function du(){q.call(this,"d")}b(du,q);function fu(){q.call(this,"c")}b(fu,q);var rr={},wf=null;function Oo(){return wf=wf||new Me}rr.La="serverreachability";function Tf(a){q.call(this,rr.La,a)}b(Tf,q);function zi(a){const c=Oo();Ge(c,new Tf(c))}rr.STAT_EVENT="statevent";function If(a,c){q.call(this,rr.STAT_EVENT,a),this.stat=c}b(If,q);function Qe(a){const c=Oo();Ge(c,new If(c,a))}rr.Ma="timingevent";function Sf(a,c){q.call(this,rr.Ma,a),this.size=c}b(Sf,q);function $i(a,c){if(typeof a!="function")throw Error("Fn must not be null and must be a function");return l.setTimeout(function(){a()},c)}function Hi(){this.g=!0}Hi.prototype.xa=function(){this.g=!1};function LE(a,c,d,m,k,D){a.info(function(){if(a.g)if(D)for(var U="",oe=D.split("&"),Ne=0;Ne<oe.length;Ne++){var se=oe[Ne].split("=");if(1<se.length){var je=se[0];se=se[1];var Ue=je.split("_");U=2<=Ue.length&&Ue[1]=="type"?U+(je+"="+se+"&"):U+(je+"=redacted&")}}else U=null;else U=D;return"XMLHTTP REQ ("+m+") [attempt "+k+"]: "+c+`
`+d+`
`+U})}function VE(a,c,d,m,k,D,U){a.info(function(){return"XMLHTTP RESP ("+m+") [ attempt "+k+"]: "+c+`
`+d+`
`+D+" "+U})}function Vr(a,c,d,m){a.info(function(){return"XMLHTTP TEXT ("+c+"): "+jE(a,d)+(m?" "+m:"")})}function ME(a,c){a.info(function(){return"TIMEOUT: "+c})}Hi.prototype.info=function(){};function jE(a,c){if(!a.g)return c;if(!c)return null;try{var d=JSON.parse(c);if(d){for(a=0;a<d.length;a++)if(Array.isArray(d[a])){var m=d[a];if(!(2>m.length)){var k=m[1];if(Array.isArray(k)&&!(1>k.length)){var D=k[0];if(D!="noop"&&D!="stop"&&D!="close")for(var U=1;U<k.length;U++)k[U]=""}}}}return cu(d)}catch{return c}}var Do={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},xf={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"},pu;function Lo(){}b(Lo,hu),Lo.prototype.g=function(){return new XMLHttpRequest},Lo.prototype.i=function(){return{}},pu=new Lo;function cn(a,c,d,m){this.j=a,this.i=c,this.l=d,this.R=m||1,this.U=new Fi(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new Cf}function Cf(){this.i=null,this.g="",this.h=!1}var Af={},mu={};function gu(a,c,d){a.L=1,a.v=Uo(qt(c)),a.m=d,a.P=!0,Rf(a,null)}function Rf(a,c){a.F=Date.now(),Vo(a),a.A=qt(a.v);var d=a.A,m=a.R;Array.isArray(m)||(m=[String(m)]),zf(d.i,"t",m),a.C=0,d=a.j.J,a.h=new Cf,a.g=op(a.j,d?c:null,!a.m),0<a.O&&(a.M=new bE(g(a.Y,a,a.g),a.O)),c=a.U,d=a.g,m=a.ca;var k="readystatechange";Array.isArray(k)||(k&&(yf[0]=k.toString()),k=yf);for(var D=0;D<k.length;D++){var U=cf(d,k[D],m||c.handleEvent,!1,c.h||c);if(!U)break;c.g[U.key]=U}c=a.H?_(a.H):{},a.m?(a.u||(a.u="POST"),c["Content-Type"]="application/x-www-form-urlencoded",a.g.ea(a.A,a.u,a.m,c)):(a.u="GET",a.g.ea(a.A,a.u,null,c)),zi(),LE(a.i,a.u,a.A,a.l,a.R,a.m)}cn.prototype.ca=function(a){a=a.target;const c=this.M;c&&Kt(a)==3?c.j():this.Y(a)},cn.prototype.Y=function(a){try{if(a==this.g)e:{const Ue=Kt(this.g);var c=this.g.Ba();const Ur=this.g.Z();if(!(3>Ue)&&(Ue!=3||this.g&&(this.h.h||this.g.oa()||Qf(this.g)))){this.J||Ue!=4||c==7||(c==8||0>=Ur?zi(3):zi(2)),yu(this);var d=this.g.Z();this.X=d;t:if(Pf(this)){var m=Qf(this.g);a="";var k=m.length,D=Kt(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ir(this),Wi(this);var U="";break t}this.h.i=new l.TextDecoder}for(c=0;c<k;c++)this.h.h=!0,a+=this.h.i.decode(m[c],{stream:!(D&&c==k-1)});m.length=0,this.h.g+=a,this.C=0,U=this.h.g}else U=this.g.oa();if(this.o=d==200,VE(this.i,this.u,this.A,this.l,this.R,Ue,d),this.o){if(this.T&&!this.K){t:{if(this.g){var oe,Ne=this.g;if((oe=Ne.g?Ne.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(oe)){var se=oe;break t}}se=null}if(d=se)Vr(this.i,this.l,d,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,vu(this,d);else{this.o=!1,this.s=3,Qe(12),ir(this),Wi(this);break e}}if(this.P){d=!0;let _t;for(;!this.J&&this.C<U.length;)if(_t=UE(this,U),_t==mu){Ue==4&&(this.s=4,Qe(14),d=!1),Vr(this.i,this.l,null,"[Incomplete Response]");break}else if(_t==Af){this.s=4,Qe(15),Vr(this.i,this.l,U,"[Invalid Chunk]"),d=!1;break}else Vr(this.i,this.l,_t,null),vu(this,_t);if(Pf(this)&&this.C!=0&&(this.h.g=this.h.g.slice(this.C),this.C=0),Ue!=4||U.length!=0||this.h.h||(this.s=1,Qe(16),d=!1),this.o=this.o&&d,!d)Vr(this.i,this.l,U,"[Invalid Chunked Response]"),ir(this),Wi(this);else if(0<U.length&&!this.W){this.W=!0;var je=this.j;je.g==this&&je.ba&&!je.M&&(je.j.info("Great, no buffering proxy detected. Bytes received: "+U.length),Su(je),je.M=!0,Qe(11))}}else Vr(this.i,this.l,U,null),vu(this,U);Ue==4&&ir(this),this.o&&!this.J&&(Ue==4?np(this.j,this):(this.o=!1,Vo(this)))}else nw(this.g),d==400&&0<U.indexOf("Unknown SID")?(this.s=3,Qe(12)):(this.s=0,Qe(13)),ir(this),Wi(this)}}}catch{}finally{}};function Pf(a){return a.g?a.u=="GET"&&a.L!=2&&a.j.Ca:!1}function UE(a,c){var d=a.C,m=c.indexOf(`
`,d);return m==-1?mu:(d=Number(c.substring(d,m)),isNaN(d)?Af:(m+=1,m+d>c.length?mu:(c=c.slice(m,m+d),a.C=m+d,c)))}cn.prototype.cancel=function(){this.J=!0,ir(this)};function Vo(a){a.S=Date.now()+a.I,kf(a,a.I)}function kf(a,c){if(a.B!=null)throw Error("WatchDog timer not null");a.B=$i(g(a.ba,a),c)}function yu(a){a.B&&(l.clearTimeout(a.B),a.B=null)}cn.prototype.ba=function(){this.B=null;const a=Date.now();0<=a-this.S?(ME(this.i,this.A),this.L!=2&&(zi(),Qe(17)),ir(this),this.s=2,Wi(this)):kf(this,this.S-a)};function Wi(a){a.j.G==0||a.J||np(a.j,a)}function ir(a){yu(a);var c=a.M;c&&typeof c.ma=="function"&&c.ma(),a.M=null,vf(a.U),a.g&&(c=a.g,a.g=null,c.abort(),c.ma())}function vu(a,c){try{var d=a.j;if(d.G!=0&&(d.g==a||_u(d.h,a))){if(!a.K&&_u(d.h,a)&&d.G==3){try{var m=d.Da.g.parse(c)}catch{m=null}if(Array.isArray(m)&&m.length==3){var k=m;if(k[0]==0){e:if(!d.u){if(d.g)if(d.g.F+3e3<a.F)Wo(d),$o(d);else break e;Iu(d),Qe(18)}}else d.za=k[1],0<d.za-d.T&&37500>k[2]&&d.F&&d.v==0&&!d.C&&(d.C=$i(g(d.Za,d),6e3));if(1>=Of(d.h)&&d.ca){try{d.ca()}catch{}d.ca=void 0}}else or(d,11)}else if((a.K||d.g==a)&&Wo(d),!I(c))for(k=d.Da.g.parse(c),c=0;c<k.length;c++){let se=k[c];if(d.T=se[0],se=se[1],d.G==2)if(se[0]=="c"){d.K=se[1],d.ia=se[2];const je=se[3];je!=null&&(d.la=je,d.j.info("VER="+d.la));const Ue=se[4];Ue!=null&&(d.Aa=Ue,d.j.info("SVER="+d.Aa));const Ur=se[5];Ur!=null&&typeof Ur=="number"&&0<Ur&&(m=1.5*Ur,d.L=m,d.j.info("backChannelRequestTimeoutMs_="+m)),m=d;const _t=a.g;if(_t){const Ko=_t.g?_t.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(Ko){var D=m.h;D.g||Ko.indexOf("spdy")==-1&&Ko.indexOf("quic")==-1&&Ko.indexOf("h2")==-1||(D.j=D.l,D.g=new Set,D.h&&(Eu(D,D.h),D.h=null))}if(m.D){const xu=_t.g?_t.g.getResponseHeader("X-HTTP-Session-Id"):null;xu&&(m.ya=xu,le(m.I,m.D,xu))}}d.G=3,d.l&&d.l.ua(),d.ba&&(d.R=Date.now()-a.F,d.j.info("Handshake RTT: "+d.R+"ms")),m=d;var U=a;if(m.qa=sp(m,m.J?m.ia:null,m.W),U.K){Df(m.h,U);var oe=U,Ne=m.L;Ne&&(oe.I=Ne),oe.B&&(yu(oe),Vo(oe)),m.g=U}else ep(m);0<d.i.length&&Ho(d)}else se[0]!="stop"&&se[0]!="close"||or(d,7);else d.G==3&&(se[0]=="stop"||se[0]=="close"?se[0]=="stop"?or(d,7):Tu(d):se[0]!="noop"&&d.l&&d.l.ta(se),d.v=0)}}zi(4)}catch{}}var FE=class{constructor(a,c){this.g=a,this.map=c}};function Nf(a){this.l=a||10,l.PerformanceNavigationTiming?(a=l.performance.getEntriesByType("navigation"),a=0<a.length&&(a[0].nextHopProtocol=="hq"||a[0].nextHopProtocol=="h2")):a=!!(l.chrome&&l.chrome.loadTimes&&l.chrome.loadTimes()&&l.chrome.loadTimes().wasFetchedViaSpdy),this.j=a?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function bf(a){return a.h?!0:a.g?a.g.size>=a.j:!1}function Of(a){return a.h?1:a.g?a.g.size:0}function _u(a,c){return a.h?a.h==c:a.g?a.g.has(c):!1}function Eu(a,c){a.g?a.g.add(c):a.h=c}function Df(a,c){a.h&&a.h==c?a.h=null:a.g&&a.g.has(c)&&a.g.delete(c)}Nf.prototype.cancel=function(){if(this.i=Lf(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const a of this.g.values())a.cancel();this.g.clear()}};function Lf(a){if(a.h!=null)return a.i.concat(a.h.D);if(a.g!=null&&a.g.size!==0){let c=a.i;for(const d of a.g.values())c=c.concat(d.D);return c}return O(a.i)}function BE(a){if(a.V&&typeof a.V=="function")return a.V();if(typeof Map<"u"&&a instanceof Map||typeof Set<"u"&&a instanceof Set)return Array.from(a.values());if(typeof a=="string")return a.split("");if(u(a)){for(var c=[],d=a.length,m=0;m<d;m++)c.push(a[m]);return c}c=[],d=0;for(m in a)c[d++]=a[m];return c}function zE(a){if(a.na&&typeof a.na=="function")return a.na();if(!a.V||typeof a.V!="function"){if(typeof Map<"u"&&a instanceof Map)return Array.from(a.keys());if(!(typeof Set<"u"&&a instanceof Set)){if(u(a)||typeof a=="string"){var c=[];a=a.length;for(var d=0;d<a;d++)c.push(d);return c}c=[],d=0;for(const m in a)c[d++]=m;return c}}}function Vf(a,c){if(a.forEach&&typeof a.forEach=="function")a.forEach(c,void 0);else if(u(a)||typeof a=="string")Array.prototype.forEach.call(a,c,void 0);else for(var d=zE(a),m=BE(a),k=m.length,D=0;D<k;D++)c.call(void 0,m[D],d&&d[D],a)}var Mf=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $E(a,c){if(a){a=a.split("&");for(var d=0;d<a.length;d++){var m=a[d].indexOf("="),k=null;if(0<=m){var D=a[d].substring(0,m);k=a[d].substring(m+1)}else D=a[d];c(D,k?decodeURIComponent(k.replace(/\+/g," ")):"")}}}function sr(a){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,a instanceof sr){this.h=a.h,Mo(this,a.j),this.o=a.o,this.g=a.g,jo(this,a.s),this.l=a.l;var c=a.i,d=new Gi;d.i=c.i,c.g&&(d.g=new Map(c.g),d.h=c.h),jf(this,d),this.m=a.m}else a&&(c=String(a).match(Mf))?(this.h=!1,Mo(this,c[1]||"",!0),this.o=qi(c[2]||""),this.g=qi(c[3]||"",!0),jo(this,c[4]),this.l=qi(c[5]||"",!0),jf(this,c[6]||"",!0),this.m=qi(c[7]||"")):(this.h=!1,this.i=new Gi(null,this.h))}sr.prototype.toString=function(){var a=[],c=this.j;c&&a.push(Ki(c,Uf,!0),":");var d=this.g;return(d||c=="file")&&(a.push("//"),(c=this.o)&&a.push(Ki(c,Uf,!0),"@"),a.push(encodeURIComponent(String(d)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),d=this.s,d!=null&&a.push(":",String(d))),(d=this.l)&&(this.g&&d.charAt(0)!="/"&&a.push("/"),a.push(Ki(d,d.charAt(0)=="/"?qE:WE,!0))),(d=this.i.toString())&&a.push("?",d),(d=this.m)&&a.push("#",Ki(d,GE)),a.join("")};function qt(a){return new sr(a)}function Mo(a,c,d){a.j=d?qi(c,!0):c,a.j&&(a.j=a.j.replace(/:$/,""))}function jo(a,c){if(c){if(c=Number(c),isNaN(c)||0>c)throw Error("Bad port number "+c);a.s=c}else a.s=null}function jf(a,c,d){c instanceof Gi?(a.i=c,QE(a.i,a.h)):(d||(c=Ki(c,KE)),a.i=new Gi(c,a.h))}function le(a,c,d){a.i.set(c,d)}function Uo(a){return le(a,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),a}function qi(a,c){return a?c?decodeURI(a.replace(/%25/g,"%2525")):decodeURIComponent(a):""}function Ki(a,c,d){return typeof a=="string"?(a=encodeURI(a).replace(c,HE),d&&(a=a.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),a):null}function HE(a){return a=a.charCodeAt(0),"%"+(a>>4&15).toString(16)+(a&15).toString(16)}var Uf=/[#\/\?@]/g,WE=/[#\?:]/g,qE=/[#\?]/g,KE=/[#\?@]/g,GE=/#/g;function Gi(a,c){this.h=this.g=null,this.i=a||null,this.j=!!c}function hn(a){a.g||(a.g=new Map,a.h=0,a.i&&$E(a.i,function(c,d){a.add(decodeURIComponent(c.replace(/\+/g," ")),d)}))}t=Gi.prototype,t.add=function(a,c){hn(this),this.i=null,a=Mr(this,a);var d=this.g.get(a);return d||this.g.set(a,d=[]),d.push(c),this.h+=1,this};function Ff(a,c){hn(a),c=Mr(a,c),a.g.has(c)&&(a.i=null,a.h-=a.g.get(c).length,a.g.delete(c))}function Bf(a,c){return hn(a),c=Mr(a,c),a.g.has(c)}t.forEach=function(a,c){hn(this),this.g.forEach(function(d,m){d.forEach(function(k){a.call(c,k,m,this)},this)},this)},t.na=function(){hn(this);const a=Array.from(this.g.values()),c=Array.from(this.g.keys()),d=[];for(let m=0;m<c.length;m++){const k=a[m];for(let D=0;D<k.length;D++)d.push(c[m])}return d},t.V=function(a){hn(this);let c=[];if(typeof a=="string")Bf(this,a)&&(c=c.concat(this.g.get(Mr(this,a))));else{a=Array.from(this.g.values());for(let d=0;d<a.length;d++)c=c.concat(a[d])}return c},t.set=function(a,c){return hn(this),this.i=null,a=Mr(this,a),Bf(this,a)&&(this.h-=this.g.get(a).length),this.g.set(a,[c]),this.h+=1,this},t.get=function(a,c){return a?(a=this.V(a),0<a.length?String(a[0]):c):c};function zf(a,c,d){Ff(a,c),0<d.length&&(a.i=null,a.g.set(Mr(a,c),O(d)),a.h+=d.length)}t.toString=function(){if(this.i)return this.i;if(!this.g)return"";const a=[],c=Array.from(this.g.keys());for(var d=0;d<c.length;d++){var m=c[d];const D=encodeURIComponent(String(m)),U=this.V(m);for(m=0;m<U.length;m++){var k=D;U[m]!==""&&(k+="="+encodeURIComponent(String(U[m]))),a.push(k)}}return this.i=a.join("&")};function Mr(a,c){return c=String(c),a.j&&(c=c.toLowerCase()),c}function QE(a,c){c&&!a.j&&(hn(a),a.i=null,a.g.forEach(function(d,m){var k=m.toLowerCase();m!=k&&(Ff(this,m),zf(this,k,d))},a)),a.j=c}function YE(a,c){const d=new Hi;if(l.Image){const m=new Image;m.onload=C(dn,d,"TestLoadImage: loaded",!0,c,m),m.onerror=C(dn,d,"TestLoadImage: error",!1,c,m),m.onabort=C(dn,d,"TestLoadImage: abort",!1,c,m),m.ontimeout=C(dn,d,"TestLoadImage: timeout",!1,c,m),l.setTimeout(function(){m.ontimeout&&m.ontimeout()},1e4),m.src=a}else c(!1)}function XE(a,c){const d=new Hi,m=new AbortController,k=setTimeout(()=>{m.abort(),dn(d,"TestPingServer: timeout",!1,c)},1e4);fetch(a,{signal:m.signal}).then(D=>{clearTimeout(k),D.ok?dn(d,"TestPingServer: ok",!0,c):dn(d,"TestPingServer: server error",!1,c)}).catch(()=>{clearTimeout(k),dn(d,"TestPingServer: error",!1,c)})}function dn(a,c,d,m,k){try{k&&(k.onload=null,k.onerror=null,k.onabort=null,k.ontimeout=null),m(d)}catch{}}function JE(){this.g=new DE}function ZE(a,c,d){const m=d||"";try{Vf(a,function(k,D){let U=k;h(k)&&(U=cu(k)),c.push(m+D+"="+encodeURIComponent(U))})}catch(k){throw c.push(m+"type="+encodeURIComponent("_badmap")),k}}function Fo(a){this.l=a.Ub||null,this.j=a.eb||!1}b(Fo,hu),Fo.prototype.g=function(){return new Bo(this.l,this.j)},Fo.prototype.i=function(a){return function(){return a}}({});function Bo(a,c){Me.call(this),this.D=a,this.o=c,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}b(Bo,Me),t=Bo.prototype,t.open=function(a,c){if(this.readyState!=0)throw this.abort(),Error("Error reopening a connection");this.B=a,this.A=c,this.readyState=1,Yi(this)},t.send=function(a){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const c={headers:this.u,method:this.B,credentials:this.m,cache:void 0};a&&(c.body=a),(this.D||l).fetch(new Request(this.A,c)).then(this.Sa.bind(this),this.ga.bind(this))},t.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Qi(this)),this.readyState=0},t.Sa=function(a){if(this.g&&(this.l=a,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=a.headers,this.readyState=2,Yi(this)),this.g&&(this.readyState=3,Yi(this),this.g)))if(this.responseType==="arraybuffer")a.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(typeof l.ReadableStream<"u"&&"body"in a){if(this.j=a.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;$f(this)}else a.text().then(this.Ra.bind(this),this.ga.bind(this))};function $f(a){a.j.read().then(a.Pa.bind(a)).catch(a.ga.bind(a))}t.Pa=function(a){if(this.g){if(this.o&&a.value)this.response.push(a.value);else if(!this.o){var c=a.value?a.value:new Uint8Array(0);(c=this.v.decode(c,{stream:!a.done}))&&(this.response=this.responseText+=c)}a.done?Qi(this):Yi(this),this.readyState==3&&$f(this)}},t.Ra=function(a){this.g&&(this.response=this.responseText=a,Qi(this))},t.Qa=function(a){this.g&&(this.response=a,Qi(this))},t.ga=function(){this.g&&Qi(this)};function Qi(a){a.readyState=4,a.l=null,a.j=null,a.v=null,Yi(a)}t.setRequestHeader=function(a,c){this.u.append(a,c)},t.getResponseHeader=function(a){return this.h&&this.h.get(a.toLowerCase())||""},t.getAllResponseHeaders=function(){if(!this.h)return"";const a=[],c=this.h.entries();for(var d=c.next();!d.done;)d=d.value,a.push(d[0]+": "+d[1]),d=c.next();return a.join(`\r
`)};function Yi(a){a.onreadystatechange&&a.onreadystatechange.call(a)}Object.defineProperty(Bo.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(a){this.m=a?"include":"same-origin"}});function Hf(a){let c="";return V(a,function(d,m){c+=m,c+=":",c+=d,c+=`\r
`}),c}function wu(a,c,d){e:{for(m in d){var m=!1;break e}m=!0}m||(d=Hf(d),typeof a=="string"?d!=null&&encodeURIComponent(String(d)):le(a,c,d))}function me(a){Me.call(this),this.headers=new Map,this.o=a||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}b(me,Me);var ew=/^https?$/i,tw=["POST","PUT"];t=me.prototype,t.Ha=function(a){this.J=a},t.ea=function(a,c,d,m){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+a);c=c?c.toUpperCase():"GET",this.D=a,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():pu.g(),this.v=this.o?_f(this.o):_f(pu),this.g.onreadystatechange=g(this.Ea,this);try{this.B=!0,this.g.open(c,String(a),!0),this.B=!1}catch(D){Wf(this,D);return}if(a=d||"",d=new Map(this.headers),m)if(Object.getPrototypeOf(m)===Object.prototype)for(var k in m)d.set(k,m[k]);else if(typeof m.keys=="function"&&typeof m.get=="function")for(const D of m.keys())d.set(D,m.get(D));else throw Error("Unknown input type for opt_headers: "+String(m));m=Array.from(d.keys()).find(D=>D.toLowerCase()=="content-type"),k=l.FormData&&a instanceof l.FormData,!(0<=Array.prototype.indexOf.call(tw,c,void 0))||m||k||d.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[D,U]of d)this.g.setRequestHeader(D,U);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Gf(this),this.u=!0,this.g.send(a),this.u=!1}catch(D){Wf(this,D)}};function Wf(a,c){a.h=!1,a.g&&(a.j=!0,a.g.abort(),a.j=!1),a.l=c,a.m=5,qf(a),zo(a)}function qf(a){a.A||(a.A=!0,Ge(a,"complete"),Ge(a,"error"))}t.abort=function(a){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=a||7,Ge(this,"complete"),Ge(this,"abort"),zo(this))},t.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),zo(this,!0)),me.aa.N.call(this)},t.Ea=function(){this.s||(this.B||this.u||this.j?Kf(this):this.bb())},t.bb=function(){Kf(this)};function Kf(a){if(a.h&&typeof o<"u"&&(!a.v[1]||Kt(a)!=4||a.Z()!=2)){if(a.u&&Kt(a)==4)mf(a.Ea,0,a);else if(Ge(a,"readystatechange"),Kt(a)==4){a.h=!1;try{const U=a.Z();e:switch(U){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var c=!0;break e;default:c=!1}var d;if(!(d=c)){var m;if(m=U===0){var k=String(a.D).match(Mf)[1]||null;!k&&l.self&&l.self.location&&(k=l.self.location.protocol.slice(0,-1)),m=!ew.test(k?k.toLowerCase():"")}d=m}if(d)Ge(a,"complete"),Ge(a,"success");else{a.m=6;try{var D=2<Kt(a)?a.g.statusText:""}catch{D=""}a.l=D+" ["+a.Z()+"]",qf(a)}}finally{zo(a)}}}}function zo(a,c){if(a.g){Gf(a);const d=a.g,m=a.v[0]?()=>{}:null;a.g=null,a.v=null,c||Ge(a,"ready");try{d.onreadystatechange=m}catch{}}}function Gf(a){a.I&&(l.clearTimeout(a.I),a.I=null)}t.isActive=function(){return!!this.g};function Kt(a){return a.g?a.g.readyState:0}t.Z=function(){try{return 2<Kt(this)?this.g.status:-1}catch{return-1}},t.oa=function(){try{return this.g?this.g.responseText:""}catch{return""}},t.Oa=function(a){if(this.g){var c=this.g.responseText;return a&&c.indexOf(a)==0&&(c=c.substring(a.length)),OE(c)}};function Qf(a){try{if(!a.g)return null;if("response"in a.g)return a.g.response;switch(a.H){case"":case"text":return a.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in a.g)return a.g.mozResponseArrayBuffer}return null}catch{return null}}function nw(a){const c={};a=(a.g&&2<=Kt(a)&&a.g.getAllResponseHeaders()||"").split(`\r
`);for(let m=0;m<a.length;m++){if(I(a[m]))continue;var d=A(a[m]);const k=d[0];if(d=d[1],typeof d!="string")continue;d=d.trim();const D=c[k]||[];c[k]=D,D.push(d)}S(c,function(m){return m.join(", ")})}t.Ba=function(){return this.m},t.Ka=function(){return typeof this.l=="string"?this.l:String(this.l)};function Xi(a,c,d){return d&&d.internalChannelParams&&d.internalChannelParams[a]||c}function Yf(a){this.Aa=0,this.i=[],this.j=new Hi,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Xi("failFast",!1,a),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Xi("baseRetryDelayMs",5e3,a),this.cb=Xi("retryDelaySeedMs",1e4,a),this.Wa=Xi("forwardChannelMaxRetries",2,a),this.wa=Xi("forwardChannelRequestTimeoutMs",2e4,a),this.pa=a&&a.xmlHttpFactory||void 0,this.Xa=a&&a.Tb||void 0,this.Ca=a&&a.useFetchStreams||!1,this.L=void 0,this.J=a&&a.supportsCrossDomainXhr||!1,this.K="",this.h=new Nf(a&&a.concurrentRequestLimit),this.Da=new JE,this.P=a&&a.fastHandshake||!1,this.O=a&&a.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=a&&a.Rb||!1,a&&a.xa&&this.j.xa(),a&&a.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&a&&a.detectBufferingProxy||!1,this.ja=void 0,a&&a.longPollingTimeout&&0<a.longPollingTimeout&&(this.ja=a.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}t=Yf.prototype,t.la=8,t.G=1,t.connect=function(a,c,d,m){Qe(0),this.W=a,this.H=c||{},d&&m!==void 0&&(this.H.OSID=d,this.H.OAID=m),this.F=this.X,this.I=sp(this,null,this.W),Ho(this)};function Tu(a){if(Xf(a),a.G==3){var c=a.U++,d=qt(a.I);if(le(d,"SID",a.K),le(d,"RID",c),le(d,"TYPE","terminate"),Ji(a,d),c=new cn(a,a.j,c),c.L=2,c.v=Uo(qt(d)),d=!1,l.navigator&&l.navigator.sendBeacon)try{d=l.navigator.sendBeacon(c.v.toString(),"")}catch{}!d&&l.Image&&(new Image().src=c.v,d=!0),d||(c.g=op(c.j,null),c.g.ea(c.v)),c.F=Date.now(),Vo(c)}ip(a)}function $o(a){a.g&&(Su(a),a.g.cancel(),a.g=null)}function Xf(a){$o(a),a.u&&(l.clearTimeout(a.u),a.u=null),Wo(a),a.h.cancel(),a.s&&(typeof a.s=="number"&&l.clearTimeout(a.s),a.s=null)}function Ho(a){if(!bf(a.h)&&!a.s){a.s=!0;var c=a.Ga;$t||Po(),Ht||($t(),Ht=!0),tr.add(c,a),a.B=0}}function rw(a,c){return Of(a.h)>=a.h.j-(a.s?1:0)?!1:a.s?(a.i=c.D.concat(a.i),!0):a.G==1||a.G==2||a.B>=(a.Va?0:a.Wa)?!1:(a.s=$i(g(a.Ga,a,c),rp(a,a.B)),a.B++,!0)}t.Ga=function(a){if(this.s)if(this.s=null,this.G==1){if(!a){this.U=Math.floor(1e5*Math.random()),a=this.U++;const k=new cn(this,this.j,a);let D=this.o;if(this.S&&(D?(D=_(D),x(D,this.S)):D=this.S),this.m!==null||this.O||(k.H=D,D=null),this.P)e:{for(var c=0,d=0;d<this.i.length;d++){t:{var m=this.i[d];if("__data__"in m.map&&(m=m.map.__data__,typeof m=="string")){m=m.length;break t}m=void 0}if(m===void 0)break;if(c+=m,4096<c){c=d;break e}if(c===4096||d===this.i.length-1){c=d+1;break e}}c=1e3}else c=1e3;c=Zf(this,k,c),d=qt(this.I),le(d,"RID",a),le(d,"CVER",22),this.D&&le(d,"X-HTTP-Session-Id",this.D),Ji(this,d),D&&(this.O?c="headers="+encodeURIComponent(String(Hf(D)))+"&"+c:this.m&&wu(d,this.m,D)),Eu(this.h,k),this.Ua&&le(d,"TYPE","init"),this.P?(le(d,"$req",c),le(d,"SID","null"),k.T=!0,gu(k,d,null)):gu(k,d,c),this.G=2}}else this.G==3&&(a?Jf(this,a):this.i.length==0||bf(this.h)||Jf(this))};function Jf(a,c){var d;c?d=c.l:d=a.U++;const m=qt(a.I);le(m,"SID",a.K),le(m,"RID",d),le(m,"AID",a.T),Ji(a,m),a.m&&a.o&&wu(m,a.m,a.o),d=new cn(a,a.j,d,a.B+1),a.m===null&&(d.H=a.o),c&&(a.i=c.D.concat(a.i)),c=Zf(a,d,1e3),d.I=Math.round(.5*a.wa)+Math.round(.5*a.wa*Math.random()),Eu(a.h,d),gu(d,m,c)}function Ji(a,c){a.H&&V(a.H,function(d,m){le(c,m,d)}),a.l&&Vf({},function(d,m){le(c,m,d)})}function Zf(a,c,d){d=Math.min(a.i.length,d);var m=a.l?g(a.l.Na,a.l,a):null;e:{var k=a.i;let D=-1;for(;;){const U=["count="+d];D==-1?0<d?(D=k[0].g,U.push("ofs="+D)):D=0:U.push("ofs="+D);let oe=!0;for(let Ne=0;Ne<d;Ne++){let se=k[Ne].g;const je=k[Ne].map;if(se-=D,0>se)D=Math.max(0,k[Ne].g-100),oe=!1;else try{ZE(je,U,"req"+se+"_")}catch{m&&m(je)}}if(oe){m=U.join("&");break e}}}return a=a.i.splice(0,d),c.D=a,m}function ep(a){if(!a.g&&!a.u){a.Y=1;var c=a.Fa;$t||Po(),Ht||($t(),Ht=!0),tr.add(c,a),a.v=0}}function Iu(a){return a.g||a.u||3<=a.v?!1:(a.Y++,a.u=$i(g(a.Fa,a),rp(a,a.v)),a.v++,!0)}t.Fa=function(){if(this.u=null,tp(this),this.ba&&!(this.M||this.g==null||0>=this.R)){var a=2*this.R;this.j.info("BP detection timer enabled: "+a),this.A=$i(g(this.ab,this),a)}},t.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Qe(10),$o(this),tp(this))};function Su(a){a.A!=null&&(l.clearTimeout(a.A),a.A=null)}function tp(a){a.g=new cn(a,a.j,"rpc",a.Y),a.m===null&&(a.g.H=a.o),a.g.O=0;var c=qt(a.qa);le(c,"RID","rpc"),le(c,"SID",a.K),le(c,"AID",a.T),le(c,"CI",a.F?"0":"1"),!a.F&&a.ja&&le(c,"TO",a.ja),le(c,"TYPE","xmlhttp"),Ji(a,c),a.m&&a.o&&wu(c,a.m,a.o),a.L&&(a.g.I=a.L);var d=a.g;a=a.ia,d.L=1,d.v=Uo(qt(c)),d.m=null,d.P=!0,Rf(d,a)}t.Za=function(){this.C!=null&&(this.C=null,$o(this),Iu(this),Qe(19))};function Wo(a){a.C!=null&&(l.clearTimeout(a.C),a.C=null)}function np(a,c){var d=null;if(a.g==c){Wo(a),Su(a),a.g=null;var m=2}else if(_u(a.h,c))d=c.D,Df(a.h,c),m=1;else return;if(a.G!=0){if(c.o)if(m==1){d=c.m?c.m.length:0,c=Date.now()-c.F;var k=a.B;m=Oo(),Ge(m,new Sf(m,d)),Ho(a)}else ep(a);else if(k=c.s,k==3||k==0&&0<c.X||!(m==1&&rw(a,c)||m==2&&Iu(a)))switch(d&&0<d.length&&(c=a.h,c.i=c.i.concat(d)),k){case 1:or(a,5);break;case 4:or(a,10);break;case 3:or(a,6);break;default:or(a,2)}}}function rp(a,c){let d=a.Ta+Math.floor(Math.random()*a.cb);return a.isActive()||(d*=2),d*c}function or(a,c){if(a.j.info("Error code "+c),c==2){var d=g(a.fb,a),m=a.Xa;const k=!m;m=new sr(m||"//www.google.com/images/cleardot.gif"),l.location&&l.location.protocol=="http"||Mo(m,"https"),Uo(m),k?YE(m.toString(),d):XE(m.toString(),d)}else Qe(2);a.G=0,a.l&&a.l.sa(c),ip(a),Xf(a)}t.fb=function(a){a?(this.j.info("Successfully pinged google.com"),Qe(2)):(this.j.info("Failed to ping google.com"),Qe(1))};function ip(a){if(a.G=0,a.ka=[],a.l){const c=Lf(a.h);(c.length!=0||a.i.length!=0)&&(y(a.ka,c),y(a.ka,a.i),a.h.i.length=0,O(a.i),a.i.length=0),a.l.ra()}}function sp(a,c,d){var m=d instanceof sr?qt(d):new sr(d);if(m.g!="")c&&(m.g=c+"."+m.g),jo(m,m.s);else{var k=l.location;m=k.protocol,c=c?c+"."+k.hostname:k.hostname,k=+k.port;var D=new sr(null);m&&Mo(D,m),c&&(D.g=c),k&&jo(D,k),d&&(D.l=d),m=D}return d=a.D,c=a.ya,d&&c&&le(m,d,c),le(m,"VER",a.la),Ji(a,m),m}function op(a,c,d){if(c&&!a.J)throw Error("Can't create secondary domain capable XhrIo object.");return c=a.Ca&&!a.pa?new me(new Fo({eb:d})):new me(a.pa),c.Ha(a.J),c}t.isActive=function(){return!!this.l&&this.l.isActive(this)};function ap(){}t=ap.prototype,t.ua=function(){},t.ta=function(){},t.sa=function(){},t.ra=function(){},t.isActive=function(){return!0},t.Na=function(){};function qo(){}qo.prototype.g=function(a,c){return new ut(a,c)};function ut(a,c){Me.call(this),this.g=new Yf(c),this.l=a,this.h=c&&c.messageUrlParams||null,a=c&&c.messageHeaders||null,c&&c.clientProtocolHeaderRequired&&(a?a["X-Client-Protocol"]="webchannel":a={"X-Client-Protocol":"webchannel"}),this.g.o=a,a=c&&c.initMessageHeaders||null,c&&c.messageContentType&&(a?a["X-WebChannel-Content-Type"]=c.messageContentType:a={"X-WebChannel-Content-Type":c.messageContentType}),c&&c.va&&(a?a["X-WebChannel-Client-Profile"]=c.va:a={"X-WebChannel-Client-Profile":c.va}),this.g.S=a,(a=c&&c.Sb)&&!I(a)&&(this.g.m=a),this.v=c&&c.supportsCrossDomainXhr||!1,this.u=c&&c.sendRawJson||!1,(c=c&&c.httpSessionIdParam)&&!I(c)&&(this.g.D=c,a=this.h,a!==null&&c in a&&(a=this.h,c in a&&delete a[c])),this.j=new jr(this)}b(ut,Me),ut.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},ut.prototype.close=function(){Tu(this.g)},ut.prototype.o=function(a){var c=this.g;if(typeof a=="string"){var d={};d.__data__=a,a=d}else this.u&&(d={},d.__data__=cu(a),a=d);c.i.push(new FE(c.Ya++,a)),c.G==3&&Ho(c)},ut.prototype.N=function(){this.g.l=null,delete this.j,Tu(this.g),delete this.g,ut.aa.N.call(this)};function lp(a){du.call(this),a.__headers__&&(this.headers=a.__headers__,this.statusCode=a.__status__,delete a.__headers__,delete a.__status__);var c=a.__sm__;if(c){e:{for(const d in c){a=d;break e}a=void 0}(this.i=a)&&(a=this.i,c=c!==null&&a in c?c[a]:void 0),this.data=c}else this.data=a}b(lp,du);function up(){fu.call(this),this.status=1}b(up,fu);function jr(a){this.g=a}b(jr,ap),jr.prototype.ua=function(){Ge(this.g,"a")},jr.prototype.ta=function(a){Ge(this.g,new lp(a))},jr.prototype.sa=function(a){Ge(this.g,new up)},jr.prototype.ra=function(){Ge(this.g,"b")},qo.prototype.createWebChannel=qo.prototype.g,ut.prototype.send=ut.prototype.o,ut.prototype.open=ut.prototype.m,ut.prototype.close=ut.prototype.close,T0=function(){return new qo},w0=function(){return Oo()},E0=rr,lh={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},Do.NO_ERROR=0,Do.TIMEOUT=8,Do.HTTP_ERROR=6,ka=Do,xf.COMPLETE="complete",_0=xf,Ef.EventType=Bi,Bi.OPEN="a",Bi.CLOSE="b",Bi.ERROR="c",Bi.MESSAGE="d",Me.prototype.listen=Me.prototype.K,_s=Ef,me.prototype.listenOnce=me.prototype.L,me.prototype.getLastError=me.prototype.Ka,me.prototype.getLastErrorCode=me.prototype.Ba,me.prototype.getStatus=me.prototype.Z,me.prototype.getResponseJson=me.prototype.Oa,me.prototype.getResponseText=me.prototype.oa,me.prototype.send=me.prototype.ea,me.prototype.setWithCredentials=me.prototype.Ha,v0=me}).apply(typeof aa<"u"?aa:typeof self<"u"?self:typeof window<"u"?window:{});const fg="@firebase/firestore",pg="4.7.17";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ze{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}ze.UNAUTHENTICATED=new ze(null),ze.GOOGLE_CREDENTIALS=new ze("google-credentials-uid"),ze.FIRST_PARTY=new ze("first-party-uid"),ze.MOCK_USER=new ze("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Vi="11.9.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xr=new Rd("@firebase/firestore");function $r(){return xr.logLevel}function $(t,...e){if(xr.logLevel<=ee.DEBUG){const n=e.map(zd);xr.debug(`Firestore (${Vi}): ${t}`,...n)}}function on(t,...e){if(xr.logLevel<=ee.ERROR){const n=e.map(zd);xr.error(`Firestore (${Vi}): ${t}`,...n)}}function Ei(t,...e){if(xr.logLevel<=ee.WARN){const n=e.map(zd);xr.warn(`Firestore (${Vi}): ${t}`,...n)}}function zd(t){if(typeof t=="string")return t;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/return function(n){return JSON.stringify(n)}(t)}catch{return t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t,e,n){let r="Unexpected state";typeof e=="string"?r=e:n=e,I0(t,r,n)}function I0(t,e,n){let r=`FIRESTORE (${Vi}) INTERNAL ASSERTION FAILED: ${e} (ID: ${t.toString(16)})`;if(n!==void 0)try{r+=" CONTEXT: "+JSON.stringify(n)}catch{r+=" CONTEXT: "+n}throw on(r),new Error(r)}function pe(t,e,n,r){let i="Unexpected state";typeof n=="string"?i=n:r=n,t||I0(e,i,r)}function ne(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class K extends Bt{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gr{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S0{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class kA{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(ze.UNAUTHENTICATED))}shutdown(){}}class NA{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bA{constructor(e){this.t=e,this.currentUser=ze.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){pe(this.o===void 0,42304);let r=this.i;const i=u=>this.i!==r?(r=this.i,n(u)):Promise.resolve();let s=new gr;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new gr,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;e.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},l=u=>{$("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.o&&(this.auth.addAuthTokenListener(this.o),o())};this.t.onInit(u=>l(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?l(u):($("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new gr)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?($("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(pe(typeof r.accessToken=="string",31837,{l:r}),new S0(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return pe(e===null||typeof e=="string",2055,{h:e}),new ze(e)}}class OA{constructor(e,n,r){this.P=e,this.T=n,this.I=r,this.type="FirstParty",this.user=ze.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class DA{constructor(e,n,r){this.P=e,this.T=n,this.I=r}getToken(){return Promise.resolve(new OA(this.P,this.T,this.I))}start(e,n){e.enqueueRetryable(()=>n(ze.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class mg{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class LA{constructor(e,n){this.V=n,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,ct(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,n){pe(this.o===void 0,3512);const r=s=>{s.error!=null&&$("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.m;return this.m=s.token,$("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{$("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.V.getImmediate({optional:!0});s?i(s):$("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new mg(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(pe(typeof n.token=="string",44558,{tokenResult:n}),this.m=n.token,new mg(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VA(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x0(){return new TextEncoder}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MA{static newId(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=62*Math.floor(4.129032258064516);let r="";for(;r.length<20;){const i=VA(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%62))}return r}}function Z(t,e){return t<e?-1:t>e?1:0}function uh(t,e){let n=0;for(;n<t.length&&n<e.length;){const r=t.codePointAt(n),i=e.codePointAt(n);if(r!==i){if(r<128&&i<128)return Z(r,i);{const s=x0(),o=jA(s.encode(gg(t,n)),s.encode(gg(e,n)));return o!==0?o:Z(r,i)}}n+=r>65535?2:1}return Z(t.length,e.length)}function gg(t,e){return t.codePointAt(e)>65535?t.substring(e,e+2):t.substring(e,e+1)}function jA(t,e){for(let n=0;n<t.length&&n<e.length;++n)if(t[n]!==e[n])return Z(t[n],e[n]);return Z(t.length,e.length)}function wi(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yg=-62135596800,vg=1e6;class ot{static now(){return ot.fromMillis(Date.now())}static fromDate(e){return ot.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor((e-1e3*n)*vg);return new ot(n,r)}constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new K(F.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<yg)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new K(F.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/vg}_compareTo(e){return this.seconds===e.seconds?Z(this.nanoseconds,e.nanoseconds):Z(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds-yg;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{static fromTimestamp(e){return new X(e)}static min(){return new X(new ot(0,0))}static max(){return new X(new ot(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _g="__name__";class Ct{constructor(e,n,r){n===void 0?n=0:n>e.length&&J(637,{offset:n,range:e.length}),r===void 0?r=e.length-n:r>e.length-n&&J(1746,{length:r,range:e.length-n}),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return Ct.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof Ct?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=Ct.compareSegments(e.get(i),n.get(i));if(s!==0)return s}return Z(e.length,n.length)}static compareSegments(e,n){const r=Ct.isNumericId(e),i=Ct.isNumericId(n);return r&&!i?-1:!r&&i?1:r&&i?Ct.extractNumericId(e).compare(Ct.extractNumericId(n)):uh(e,n)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return Mn.fromString(e.substring(4,e.length-2))}}class ye extends Ct{construct(e,n,r){return new ye(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new K(F.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new ye(n)}static emptyPath(){return new ye([])}}const UA=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ye extends Ct{construct(e,n,r){return new Ye(e,n,r)}static isValidIdentifier(e){return UA.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ye.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)===_g}static keyField(){return new Ye([_g])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new K(F.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const l=e[i];if(l==="\\"){if(i+1===e.length)throw new K(F.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const u=e[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new K(F.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=u,i+=2}else l==="`"?(o=!o,i++):l!=="."||o?(r+=l,i++):(s(),i++)}if(s(),o)throw new K(F.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Ye(n)}static emptyPath(){return new Ye([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e){this.path=e}static fromPath(e){return new Q(ye.fromString(e))}static fromName(e){return new Q(ye.fromString(e).popFirst(5))}static empty(){return new Q(ye.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&ye.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return ye.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Q(new ye(e.slice()))}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=-1;function FA(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=X.fromTimestamp(r===1e9?new ot(n+1,0):new ot(n,r));return new Hn(i,Q.empty(),e)}function BA(t){return new Hn(t.readTime,t.key,so)}class Hn{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Hn(X.min(),Q.empty(),so)}static max(){return new Hn(X.max(),Q.empty(),so)}}function zA(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=Q.comparator(t.documentKey,e.documentKey),n!==0?n:Z(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class HA{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hl(t){if(t.code!==F.FAILED_PRECONDITION||t.message!==$A)throw t;$("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&J(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new L((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof L?n:L.resolve(n)}catch(n){return L.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):L.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):L.reject(n)}static resolve(e){return new L((n,r)=>{n(e)})}static reject(e){return new L((n,r)=>{r(e)})}static waitFor(e){return new L((n,r)=>{let i=0,s=0,o=!1;e.forEach(l=>{++i,l.next(()=>{++s,o&&s===i&&n()},u=>r(u))}),o=!0,s===i&&n()})}static or(e){let n=L.resolve(!1);for(const r of e)n=n.next(i=>i?L.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new L((r,i)=>{const s=e.length,o=new Array(s);let l=0;for(let u=0;u<s;u++){const h=u;n(e[h]).next(f=>{o[h]=f,++l,l===s&&r(o)},f=>i(f))}})}static doWhile(e,n){return new L((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function WA(t){const e=t.match(/Android ([\d.]+)/i),n=e?e[1].split(".").slice(0,2).join("."):"-1";return Number(n)}function Mi(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ue(r),this.ce=r=>n.writeSequenceNumber(r))}ue(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ce&&this.ce(e),e}}Wl.le=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qA=-1;function ql(t){return t==null}function ch(t){return t===0&&1/t==-1/0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const C0="";function KA(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Eg(e)),e=GA(t.get(n),e);return Eg(e)}function GA(t,e){let n=e;const r=t.length;for(let i=0;i<r;i++){const s=t.charAt(i);switch(s){case"\0":n+="";break;case C0:n+="";break;default:n+=s}}return n}function Eg(t){return t+C0+""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wg(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function xo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function QA(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class we{constructor(e,n){this.comparator=e,this.root=n||Oe.EMPTY}insert(e,n){return new we(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,Oe.BLACK,null,null))}remove(e){return new we(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Oe.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new la(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new la(this.root,e,this.comparator,!1)}getReverseIterator(){return new la(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new la(this.root,e,this.comparator,!0)}}class la{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Oe{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??Oe.RED,this.left=i??Oe.EMPTY,this.right=s??Oe.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new Oe(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Oe.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return Oe.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Oe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Oe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw J(43730,{key:this.key,value:this.value});if(this.right.isRed())throw J(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw J(27949);return e+(this.isRed()?0:1)}}Oe.EMPTY=null,Oe.RED=!0,Oe.BLACK=!1;Oe.EMPTY=new class{constructor(){this.size=0}get key(){throw J(57766)}get value(){throw J(16141)}get color(){throw J(16727)}get left(){throw J(29726)}get right(){throw J(36894)}copy(e,n,r,i,s){return this}insert(e,n,r){return new Oe(e,n)}remove(e,n){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(e){this.comparator=e,this.data=new we(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Tg(this.data.getIterator())}getIteratorFrom(e){return new Tg(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Ae)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Ae(this.comparator);return n.data=e,n}}class Tg{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sn{constructor(e){this.fields=e,e.sort(Ye.comparator)}static empty(){return new Sn([])}unionWith(e){let n=new Ae(Ye.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Sn(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return wi(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A0 extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new A0("Invalid base64 string: "+s):s}}(e);return new Ve(n)}static fromUint8Array(e){const n=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(e);return new Ve(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(n){return btoa(n)}(this.binaryString)}toUint8Array(){return function(n){const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return Z(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ve.EMPTY_BYTE_STRING=new Ve("");const YA=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Wn(t){if(pe(!!t,39018),typeof t=="string"){let e=0;const n=YA.exec(t);if(pe(!!n,46558,{timestamp:t}),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:_e(t.seconds),nanos:_e(t.nanos)}}function _e(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function qn(t){return typeof t=="string"?Ve.fromBase64String(t):Ve.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0="server_timestamp",P0="__type__",k0="__previous_value__",N0="__local_write_time__";function $d(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[P0])===null||n===void 0?void 0:n.stringValue)===R0}function Kl(t){const e=t.mapValue.fields[k0];return $d(e)?Kl(e):e}function oo(t){const e=Wn(t.mapValue.fields[N0].timestampValue);return new ot(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XA{constructor(e,n,r,i,s,o,l,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=l,this.longPollingOptions=u,this.useFetchStreams=h,this.isUsingEmulator=f}}const pl="(default)";class ao{constructor(e,n){this.projectId=e,this.database=n||pl}static empty(){return new ao("","")}get isDefaultDatabase(){return this.database===pl}isEqual(e){return e instanceof ao&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const JA="__type__",b0="__max__",ua={mapValue:{fields:{__type__:{stringValue:b0}}}},ZA="__vector__",hh="value";function Kn(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?$d(t)?4:tR(t)?9007199254740991:eR(t)?10:11:J(28295,{value:t})}function Mt(t,e){if(t===e)return!0;const n=Kn(t);if(n!==Kn(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oo(t).isEqual(oo(e));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=Wn(i.timestampValue),l=Wn(s.timestampValue);return o.seconds===l.seconds&&o.nanos===l.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(i,s){return qn(i.bytesValue).isEqual(qn(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(i,s){return _e(i.geoPointValue.latitude)===_e(s.geoPointValue.latitude)&&_e(i.geoPointValue.longitude)===_e(s.geoPointValue.longitude)}(t,e);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return _e(i.integerValue)===_e(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=_e(i.doubleValue),l=_e(s.doubleValue);return o===l?ch(o)===ch(l):isNaN(o)&&isNaN(l)}return!1}(t,e);case 9:return wi(t.arrayValue.values||[],e.arrayValue.values||[],Mt);case 10:case 11:return function(i,s){const o=i.mapValue.fields||{},l=s.mapValue.fields||{};if(wg(o)!==wg(l))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(l[u]===void 0||!Mt(o[u],l[u])))return!1;return!0}(t,e);default:return J(52216,{left:t})}}function lo(t,e){return(t.values||[]).find(n=>Mt(n,e))!==void 0}function Ti(t,e){if(t===e)return 0;const n=Kn(t),r=Kn(e);if(n!==r)return Z(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return Z(t.booleanValue,e.booleanValue);case 2:return function(s,o){const l=_e(s.integerValue||s.doubleValue),u=_e(o.integerValue||o.doubleValue);return l<u?-1:l>u?1:l===u?0:isNaN(l)?isNaN(u)?0:-1:1}(t,e);case 3:return Ig(t.timestampValue,e.timestampValue);case 4:return Ig(oo(t),oo(e));case 5:return uh(t.stringValue,e.stringValue);case 6:return function(s,o){const l=qn(s),u=qn(o);return l.compareTo(u)}(t.bytesValue,e.bytesValue);case 7:return function(s,o){const l=s.split("/"),u=o.split("/");for(let h=0;h<l.length&&h<u.length;h++){const f=Z(l[h],u[h]);if(f!==0)return f}return Z(l.length,u.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,o){const l=Z(_e(s.latitude),_e(o.latitude));return l!==0?l:Z(_e(s.longitude),_e(o.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return Sg(t.arrayValue,e.arrayValue);case 10:return function(s,o){var l,u,h,f;const v=s.fields||{},g=o.fields||{},C=(l=v[hh])===null||l===void 0?void 0:l.arrayValue,b=(u=g[hh])===null||u===void 0?void 0:u.arrayValue,O=Z(((h=C==null?void 0:C.values)===null||h===void 0?void 0:h.length)||0,((f=b==null?void 0:b.values)===null||f===void 0?void 0:f.length)||0);return O!==0?O:Sg(C,b)}(t.mapValue,e.mapValue);case 11:return function(s,o){if(s===ua.mapValue&&o===ua.mapValue)return 0;if(s===ua.mapValue)return 1;if(o===ua.mapValue)return-1;const l=s.fields||{},u=Object.keys(l),h=o.fields||{},f=Object.keys(h);u.sort(),f.sort();for(let v=0;v<u.length&&v<f.length;++v){const g=uh(u[v],f[v]);if(g!==0)return g;const C=Ti(l[u[v]],h[f[v]]);if(C!==0)return C}return Z(u.length,f.length)}(t.mapValue,e.mapValue);default:throw J(23264,{Pe:n})}}function Ig(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return Z(t,e);const n=Wn(t),r=Wn(e),i=Z(n.seconds,r.seconds);return i!==0?i:Z(n.nanos,r.nanos)}function Sg(t,e){const n=t.values||[],r=e.values||[];for(let i=0;i<n.length&&i<r.length;++i){const s=Ti(n[i],r[i]);if(s)return s}return Z(n.length,r.length)}function Ii(t){return dh(t)}function dh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(n){const r=Wn(n);return`time(${r.seconds},${r.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?function(n){return qn(n).toBase64()}(t.bytesValue):"referenceValue"in t?function(n){return Q.fromName(n).toString()}(t.referenceValue):"geoPointValue"in t?function(n){return`geo(${n.latitude},${n.longitude})`}(t.geoPointValue):"arrayValue"in t?function(n){let r="[",i=!0;for(const s of n.values||[])i?i=!1:r+=",",r+=dh(s);return r+"]"}(t.arrayValue):"mapValue"in t?function(n){const r=Object.keys(n.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${dh(n.fields[o])}`;return i+"}"}(t.mapValue):J(61005,{value:t})}function Na(t){switch(Kn(t)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const e=Kl(t);return e?16+Na(e):16;case 5:return 2*t.stringValue.length;case 6:return qn(t.bytesValue).approximateByteSize();case 7:return t.referenceValue.length;case 9:return function(r){return(r.values||[]).reduce((i,s)=>i+Na(s),0)}(t.arrayValue);case 10:case 11:return function(r){let i=0;return xo(r.fields,(s,o)=>{i+=s.length+Na(o)}),i}(t.mapValue);default:throw J(13486,{value:t})}}function fh(t){return!!t&&"integerValue"in t}function Hd(t){return!!t&&"arrayValue"in t}function xg(t){return!!t&&"nullValue"in t}function Cg(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ic(t){return!!t&&"mapValue"in t}function eR(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{})[JA])===null||n===void 0?void 0:n.stringValue)===ZA}function Vs(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return xo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=Vs(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=Vs(t.arrayValue.values[n]);return e}return Object.assign({},t)}function tR(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue===b0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(e){this.value=e}static empty(){return new At({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!ic(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=Vs(n)}setAll(e){let n=Ye.emptyPath(),r={},i=[];e.forEach((o,l)=>{if(!n.isImmediateParentOf(l)){const u=this.getFieldsMap(n);this.applyChanges(u,r,i),r={},i=[],n=l.popLast()}o?r[l.lastSegment()]=Vs(o):i.push(l.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());ic(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return Mt(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];ic(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){xo(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new At(Vs(this.value))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $e{constructor(e,n,r,i,s,o,l){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=l}static newInvalidDocument(e){return new $e(e,0,X.min(),X.min(),X.min(),At.empty(),0)}static newFoundDocument(e,n,r,i){return new $e(e,1,n,X.min(),r,i,0)}static newNoDocument(e,n){return new $e(e,2,n,X.min(),X.min(),At.empty(),0)}static newUnknownDocument(e,n){return new $e(e,3,n,X.min(),X.min(),At.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(X.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=At.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=At.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=X.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof $e&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new $e(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ml{constructor(e,n){this.position=e,this.inclusive=n}}function Ag(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=Q.comparator(Q.fromName(o.referenceValue),n.key):r=Ti(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Rg(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Mt(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gl{constructor(e,n="asc"){this.field=e,this.dir=n}}function nR(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O0{}class xe extends O0{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new iR(e,n,r):n==="array-contains"?new aR(e,r):n==="in"?new lR(e,r):n==="not-in"?new uR(e,r):n==="array-contains-any"?new cR(e,r):new xe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new sR(e,r):new oR(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&n.nullValue===void 0&&this.matchesComparison(Ti(n,this.value)):n!==null&&Kn(this.value)===Kn(n)&&this.matchesComparison(Ti(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return J(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class jt extends O0{constructor(e,n){super(),this.filters=e,this.op=n,this.Te=null}static create(e,n){return new jt(e,n)}matches(e){return D0(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.Te!==null||(this.Te=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.Te}getFilters(){return Object.assign([],this.filters)}}function D0(t){return t.op==="and"}function L0(t){return rR(t)&&D0(t)}function rR(t){for(const e of t.filters)if(e instanceof jt)return!1;return!0}function ph(t){if(t instanceof xe)return t.field.canonicalString()+t.op.toString()+Ii(t.value);if(L0(t))return t.filters.map(e=>ph(e)).join(",");{const e=t.filters.map(n=>ph(n)).join(",");return`${t.op}(${e})`}}function V0(t,e){return t instanceof xe?function(r,i){return i instanceof xe&&r.op===i.op&&r.field.isEqual(i.field)&&Mt(r.value,i.value)}(t,e):t instanceof jt?function(r,i){return i instanceof jt&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,l)=>s&&V0(o,i.filters[l]),!0):!1}(t,e):void J(19439)}function M0(t){return t instanceof xe?function(n){return`${n.field.canonicalString()} ${n.op} ${Ii(n.value)}`}(t):t instanceof jt?function(n){return n.op.toString()+" {"+n.getFilters().map(M0).join(" ,")+"}"}(t):"Filter"}class iR extends xe{constructor(e,n,r){super(e,n,r),this.key=Q.fromName(r.referenceValue)}matches(e){const n=Q.comparator(e.key,this.key);return this.matchesComparison(n)}}class sR extends xe{constructor(e,n){super(e,"in",n),this.keys=j0("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class oR extends xe{constructor(e,n){super(e,"not-in",n),this.keys=j0("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function j0(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>Q.fromName(r.referenceValue))}class aR extends xe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Hd(n)&&lo(n.arrayValue,this.value)}}class lR extends xe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&lo(this.value.arrayValue,n)}}class uR extends xe{constructor(e,n){super(e,"not-in",n)}matches(e){if(lo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&n.nullValue===void 0&&!lo(this.value.arrayValue,n)}}class cR extends xe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Hd(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>lo(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hR{constructor(e,n=null,r=[],i=[],s=null,o=null,l=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=l,this.Ie=null}}function Pg(t,e=null,n=[],r=[],i=null,s=null,o=null){return new hR(t,e,n,r,i,s,o)}function Wd(t){const e=ne(t);if(e.Ie===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>ph(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),ql(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Ii(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Ii(r)).join(",")),e.Ie=n}return e.Ie}function qd(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!nR(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!V0(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Rg(t.startAt,e.startAt)&&Rg(t.endAt,e.endAt)}function mh(t){return Q.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gl{constructor(e,n=null,r=[],i=[],s=null,o="F",l=null,u=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=l,this.endAt=u,this.Ee=null,this.de=null,this.Ae=null,this.startAt,this.endAt}}function dR(t,e,n,r,i,s,o,l){return new Gl(t,e,n,r,i,s,o,l)}function U0(t){return new Gl(t)}function kg(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function fR(t){return t.collectionGroup!==null}function Ms(t){const e=ne(t);if(e.Ee===null){e.Ee=[];const n=new Set;for(const s of e.explicitOrderBy)e.Ee.push(s),n.add(s.field.canonicalString());const r=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";(function(o){let l=new Ae(Ye.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(h=>{h.isInequality()&&(l=l.add(h.field))})}),l})(e).forEach(s=>{n.has(s.canonicalString())||s.isKeyField()||e.Ee.push(new gl(s,r))}),n.has(Ye.keyField().canonicalString())||e.Ee.push(new gl(Ye.keyField(),r))}return e.Ee}function Vt(t){const e=ne(t);return e.de||(e.de=pR(e,Ms(t))),e.de}function pR(t,e){if(t.limitType==="F")return Pg(t.path,t.collectionGroup,e,t.filters,t.limit,t.startAt,t.endAt);{e=e.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new gl(i.field,s)});const n=t.endAt?new ml(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new ml(t.startAt.position,t.startAt.inclusive):null;return Pg(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}}function gh(t,e,n){return new Gl(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Ql(t,e){return qd(Vt(t),Vt(e))&&t.limitType===e.limitType}function F0(t){return`${Wd(Vt(t))}|lt:${t.limitType}`}function Hr(t){return`Query(target=${function(n){let r=n.path.canonicalString();return n.collectionGroup!==null&&(r+=" collectionGroup="+n.collectionGroup),n.filters.length>0&&(r+=`, filters: [${n.filters.map(i=>M0(i)).join(", ")}]`),ql(n.limit)||(r+=", limit: "+n.limit),n.orderBy.length>0&&(r+=`, orderBy: [${n.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),n.startAt&&(r+=", startAt: ",r+=n.startAt.inclusive?"b:":"a:",r+=n.startAt.position.map(i=>Ii(i)).join(",")),n.endAt&&(r+=", endAt: ",r+=n.endAt.inclusive?"a:":"b:",r+=n.endAt.position.map(i=>Ii(i)).join(",")),`Target(${r})`}(Vt(t))}; limitType=${t.limitType})`}function Yl(t,e){return e.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):Q.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(t,e)&&function(r,i){for(const s of Ms(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(t,e)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(t,e)&&function(r,i){return!(r.startAt&&!function(o,l,u){const h=Ag(o,l,u);return o.inclusive?h<=0:h<0}(r.startAt,Ms(r),i)||r.endAt&&!function(o,l,u){const h=Ag(o,l,u);return o.inclusive?h>=0:h>0}(r.endAt,Ms(r),i))}(t,e)}function mR(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function B0(t){return(e,n)=>{let r=!1;for(const i of Ms(t)){const s=gR(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function gR(t,e,n){const r=t.field.isKeyField()?Q.comparator(e.key,n.key):function(s,o,l){const u=o.data.field(s),h=l.data.field(s);return u!==null&&h!==null?Ti(u,h):J(42886)}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return J(19790,{direction:t.dir})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){xo(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return QA(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yR=new we(Q.comparator);function Gn(){return yR}const z0=new we(Q.comparator);function Es(...t){let e=z0;for(const n of t)e=e.insert(n.key,n);return e}function vR(t){let e=z0;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function pr(){return js()}function $0(){return js()}function js(){return new Lr(t=>t.toString(),(t,e)=>t.isEqual(e))}const _R=new Ae(Q.comparator);function re(...t){let e=_R;for(const n of t)e=e.add(n);return e}const ER=new Ae(Z);function wR(){return ER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function TR(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:ch(e)?"-0":e}}function IR(t){return{integerValue:""+t}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xl{constructor(){this._=void 0}}function SR(t,e,n){return t instanceof yh?function(i,s){const o={fields:{[P0]:{stringValue:R0},[N0]:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&$d(s)&&(s=Kl(s)),s&&(o.fields[k0]=s),{mapValue:o}}(n,e):t instanceof yl?H0(t,e):t instanceof vl?W0(t,e):function(i,s){const o=CR(i,s),l=Ng(o)+Ng(i.Re);return fh(o)&&fh(i.Re)?IR(l):TR(i.serializer,l)}(t,e)}function xR(t,e,n){return t instanceof yl?H0(t,e):t instanceof vl?W0(t,e):n}function CR(t,e){return t instanceof vh?function(r){return fh(r)||function(s){return!!s&&"doubleValue"in s}(r)}(e)?e:{integerValue:0}:null}class yh extends Xl{}class yl extends Xl{constructor(e){super(),this.elements=e}}function H0(t,e){const n=q0(e);for(const r of t.elements)n.some(i=>Mt(i,r))||n.push(r);return{arrayValue:{values:n}}}class vl extends Xl{constructor(e){super(),this.elements=e}}function W0(t,e){let n=q0(e);for(const r of t.elements)n=n.filter(i=>!Mt(i,r));return{arrayValue:{values:n}}}class vh extends Xl{constructor(e,n){super(),this.serializer=e,this.Re=n}}function Ng(t){return _e(t.integerValue||t.doubleValue)}function q0(t){return Hd(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function AR(t,e){return t.field.isEqual(e.field)&&function(r,i){return r instanceof yl&&i instanceof yl||r instanceof vl&&i instanceof vl?wi(r.elements,i.elements,Mt):r instanceof vh&&i instanceof vh?Mt(r.Re,i.Re):r instanceof yh&&i instanceof yh}(t.transform,e.transform)}class yr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new yr}static exists(e){return new yr(void 0,e)}static updateTime(e){return new yr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function ba(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class Kd{}function K0(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new PR(t.key,yr.none()):new Gd(t.key,t.data,yr.none());{const n=t.data,r=At.empty();let i=new Ae(Ye.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Jl(t.key,r,new Sn(i.toArray()),yr.none())}}function RR(t,e,n){t instanceof Gd?function(i,s,o){const l=i.value.clone(),u=Og(i.fieldTransforms,s,o.transformResults);l.setAll(u),s.convertToFoundDocument(o.version,l).setHasCommittedMutations()}(t,e,n):t instanceof Jl?function(i,s,o){if(!ba(i.precondition,s))return void s.convertToUnknownDocument(o.version);const l=Og(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(G0(i)),u.setAll(l),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(t,e,n):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,e,n)}function Us(t,e,n,r){return t instanceof Gd?function(s,o,l,u){if(!ba(s.precondition,o))return l;const h=s.value.clone(),f=Dg(s.fieldTransforms,u,o);return h.setAll(f),o.convertToFoundDocument(o.version,h).setHasLocalMutations(),null}(t,e,n,r):t instanceof Jl?function(s,o,l,u){if(!ba(s.precondition,o))return l;const h=Dg(s.fieldTransforms,u,o),f=o.data;return f.setAll(G0(s)),f.setAll(h),o.convertToFoundDocument(o.version,f).setHasLocalMutations(),l===null?null:l.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(t,e,n,r):function(s,o,l){return ba(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):l}(t,e,n)}function bg(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&wi(r,i,(s,o)=>AR(s,o))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Gd extends Kd{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Jl extends Kd{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function G0(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Og(t,e,n){const r=new Map;pe(t.length===n.length,32656,{Ve:n.length,me:t.length});for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,l=e.data.field(s.field);r.set(s.field,xR(o,l,n[i]))}return r}function Dg(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,SR(s,o,e))}return r}class PR extends Kd{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kR{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&RR(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Us(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=$0();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let l=this.applyToLocalView(o,s.mutatedFields);l=n.has(i.key)?null:l;const u=K0(o,l);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(X.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),re())}isEqual(e){return this.batchId===e.batchId&&wi(this.mutations,e.mutations,(n,r)=>bg(n,r))&&wi(this.baseMutations,e.baseMutations,(n,r)=>bg(n,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NR{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bR{constructor(e,n){this.count=e,this.unchangedNames=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Te,te;function Q0(t){if(t===void 0)return on("GRPC error has no .code"),F.UNKNOWN;switch(t){case Te.OK:return F.OK;case Te.CANCELLED:return F.CANCELLED;case Te.UNKNOWN:return F.UNKNOWN;case Te.DEADLINE_EXCEEDED:return F.DEADLINE_EXCEEDED;case Te.RESOURCE_EXHAUSTED:return F.RESOURCE_EXHAUSTED;case Te.INTERNAL:return F.INTERNAL;case Te.UNAVAILABLE:return F.UNAVAILABLE;case Te.UNAUTHENTICATED:return F.UNAUTHENTICATED;case Te.INVALID_ARGUMENT:return F.INVALID_ARGUMENT;case Te.NOT_FOUND:return F.NOT_FOUND;case Te.ALREADY_EXISTS:return F.ALREADY_EXISTS;case Te.PERMISSION_DENIED:return F.PERMISSION_DENIED;case Te.FAILED_PRECONDITION:return F.FAILED_PRECONDITION;case Te.ABORTED:return F.ABORTED;case Te.OUT_OF_RANGE:return F.OUT_OF_RANGE;case Te.UNIMPLEMENTED:return F.UNIMPLEMENTED;case Te.DATA_LOSS:return F.DATA_LOSS;default:return J(39323,{code:t})}}(te=Te||(Te={}))[te.OK=0]="OK",te[te.CANCELLED=1]="CANCELLED",te[te.UNKNOWN=2]="UNKNOWN",te[te.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",te[te.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",te[te.NOT_FOUND=5]="NOT_FOUND",te[te.ALREADY_EXISTS=6]="ALREADY_EXISTS",te[te.PERMISSION_DENIED=7]="PERMISSION_DENIED",te[te.UNAUTHENTICATED=16]="UNAUTHENTICATED",te[te.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",te[te.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",te[te.ABORTED=10]="ABORTED",te[te.OUT_OF_RANGE=11]="OUT_OF_RANGE",te[te.UNIMPLEMENTED=12]="UNIMPLEMENTED",te[te.INTERNAL=13]="INTERNAL",te[te.UNAVAILABLE=14]="UNAVAILABLE",te[te.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OR=new Mn([4294967295,4294967295],0);function Lg(t){const e=x0().encode(t),n=new y0;return n.update(e),new Uint8Array(n.digest())}function Vg(t){const e=new DataView(t.buffer),n=e.getUint32(0,!0),r=e.getUint32(4,!0),i=e.getUint32(8,!0),s=e.getUint32(12,!0);return[new Mn([n,r],0),new Mn([i,s],0)]}class Qd{constructor(e,n,r){if(this.bitmap=e,this.padding=n,this.hashCount=r,n<0||n>=8)throw new ws(`Invalid padding: ${n}`);if(r<0)throw new ws(`Invalid hash count: ${r}`);if(e.length>0&&this.hashCount===0)throw new ws(`Invalid hash count: ${r}`);if(e.length===0&&n!==0)throw new ws(`Invalid padding when bitmap length is 0: ${n}`);this.pe=8*e.length-n,this.ye=Mn.fromNumber(this.pe)}we(e,n,r){let i=e.add(n.multiply(Mn.fromNumber(r)));return i.compare(OR)===1&&(i=new Mn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.ye).toNumber()}be(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(this.pe===0)return!1;const n=Lg(e),[r,i]=Vg(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);if(!this.be(o))return!1}return!0}static create(e,n,r){const i=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),o=new Qd(s,i,n);return r.forEach(l=>o.insert(l)),o}insert(e){if(this.pe===0)return;const n=Lg(e),[r,i]=Vg(n);for(let s=0;s<this.hashCount;s++){const o=this.we(r,i,s);this.Se(o)}}Se(e){const n=Math.floor(e/8),r=e%8;this.bitmap[n]|=1<<r}}class ws extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zl{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Co.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Zl(X.min(),i,new we(Z),Gn(),re())}}class Co{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Co(r,n,re(),re(),re())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oa{constructor(e,n,r,i){this.De=e,this.removedTargetIds=n,this.key=r,this.ve=i}}class Y0{constructor(e,n){this.targetId=e,this.Ce=n}}class X0{constructor(e,n,r=Ve.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class Mg{constructor(){this.Fe=0,this.Me=jg(),this.xe=Ve.EMPTY_BYTE_STRING,this.Oe=!1,this.Ne=!0}get current(){return this.Oe}get resumeToken(){return this.xe}get Be(){return this.Fe!==0}get Le(){return this.Ne}ke(e){e.approximateByteSize()>0&&(this.Ne=!0,this.xe=e)}qe(){let e=re(),n=re(),r=re();return this.Me.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:J(38017,{changeType:s})}}),new Co(this.xe,this.Oe,e,n,r)}Qe(){this.Ne=!1,this.Me=jg()}$e(e,n){this.Ne=!0,this.Me=this.Me.insert(e,n)}Ue(e){this.Ne=!0,this.Me=this.Me.remove(e)}Ke(){this.Fe+=1}We(){this.Fe-=1,pe(this.Fe>=0,3241,{Fe:this.Fe})}Ge(){this.Ne=!0,this.Oe=!0}}class DR{constructor(e){this.ze=e,this.je=new Map,this.He=Gn(),this.Je=ca(),this.Ye=ca(),this.Ze=new we(Z)}Xe(e){for(const n of e.De)e.ve&&e.ve.isFoundDocument()?this.et(n,e.ve):this.tt(n,e.key,e.ve);for(const n of e.removedTargetIds)this.tt(n,e.key,e.ve)}nt(e){this.forEachTarget(e,n=>{const r=this.rt(n);switch(e.state){case 0:this.it(n)&&r.ke(e.resumeToken);break;case 1:r.We(),r.Be||r.Qe(),r.ke(e.resumeToken);break;case 2:r.We(),r.Be||this.removeTarget(n);break;case 3:this.it(n)&&(r.Ge(),r.ke(e.resumeToken));break;case 4:this.it(n)&&(this.st(n),r.ke(e.resumeToken));break;default:J(56790,{state:e.state})}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.je.forEach((r,i)=>{this.it(i)&&n(i)})}ot(e){const n=e.targetId,r=e.Ce.count,i=this._t(n);if(i){const s=i.target;if(mh(s))if(r===0){const o=new Q(s.path);this.tt(n,o,$e.newNoDocument(o,X.min()))}else pe(r===1,20013,{expectedCount:r});else{const o=this.ut(n);if(o!==r){const l=this.ct(e),u=l?this.lt(l,e,o):1;if(u!==0){this.st(n);const h=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ze=this.Ze.insert(n,h)}}}}}ct(e){const n=e.Ce.unchangedNames;if(!n||!n.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=n;let o,l;try{o=qn(r).toUint8Array()}catch(u){if(u instanceof A0)return Ei("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{l=new Qd(o,i,s)}catch(u){return Ei(u instanceof ws?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return l.pe===0?null:l}lt(e,n,r){return n.Ce.count===r-this.Tt(e,n.targetId)?0:2}Tt(e,n){const r=this.ze.getRemoteKeysForTarget(n);let i=0;return r.forEach(s=>{const o=this.ze.Pt(),l=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;e.mightContain(l)||(this.tt(n,s,null),i++)}),i}It(e){const n=new Map;this.je.forEach((s,o)=>{const l=this._t(o);if(l){if(s.current&&mh(l.target)){const u=new Q(l.target.path);this.Et(u).has(o)||this.dt(o,u)||this.tt(o,u,$e.newNoDocument(u,e))}s.Le&&(n.set(o,s.qe()),s.Qe())}});let r=re();this.Ye.forEach((s,o)=>{let l=!0;o.forEachWhile(u=>{const h=this._t(u);return!h||h.purpose==="TargetPurposeLimboResolution"||(l=!1,!1)}),l&&(r=r.add(s))}),this.He.forEach((s,o)=>o.setReadTime(e));const i=new Zl(e,n,this.Ze,this.He,r);return this.He=Gn(),this.Je=ca(),this.Ye=ca(),this.Ze=new we(Z),i}et(e,n){if(!this.it(e))return;const r=this.dt(e,n.key)?2:0;this.rt(e).$e(n.key,r),this.He=this.He.insert(n.key,n),this.Je=this.Je.insert(n.key,this.Et(n.key).add(e)),this.Ye=this.Ye.insert(n.key,this.At(n.key).add(e))}tt(e,n,r){if(!this.it(e))return;const i=this.rt(e);this.dt(e,n)?i.$e(n,1):i.Ue(n),this.Ye=this.Ye.insert(n,this.At(n).delete(e)),this.Ye=this.Ye.insert(n,this.At(n).add(e)),r&&(this.He=this.He.insert(n,r))}removeTarget(e){this.je.delete(e)}ut(e){const n=this.rt(e).qe();return this.ze.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ke(e){this.rt(e).Ke()}rt(e){let n=this.je.get(e);return n||(n=new Mg,this.je.set(e,n)),n}At(e){let n=this.Ye.get(e);return n||(n=new Ae(Z),this.Ye=this.Ye.insert(e,n)),n}Et(e){let n=this.Je.get(e);return n||(n=new Ae(Z),this.Je=this.Je.insert(e,n)),n}it(e){const n=this._t(e)!==null;return n||$("WatchChangeAggregator","Detected inactive target",e),n}_t(e){const n=this.je.get(e);return n&&n.Be?null:this.ze.Rt(e)}st(e){this.je.set(e,new Mg),this.ze.getRemoteKeysForTarget(e).forEach(n=>{this.tt(e,n,null)})}dt(e,n){return this.ze.getRemoteKeysForTarget(e).has(n)}}function ca(){return new we(Q.comparator)}function jg(){return new we(Q.comparator)}const LR=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),VR=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),MR=(()=>({and:"AND",or:"OR"}))();class jR{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function _h(t,e){return t.useProto3Json||ql(e)?e:{value:e}}function UR(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function FR(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function fi(t){return pe(!!t,49232),X.fromTimestamp(function(n){const r=Wn(n);return new ot(r.seconds,r.nanos)}(t))}function BR(t,e){return Eh(t,e).canonicalString()}function Eh(t,e){const n=function(i){return new ye(["projects",i.projectId,"databases",i.database])}(t).child("documents");return e===void 0?n:n.child(e)}function J0(t){const e=ye.fromString(t);return pe(rE(e),10190,{key:e.toString()}),e}function sc(t,e){const n=J0(e);if(n.get(1)!==t.databaseId.projectId)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new K(F.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new Q(eE(n))}function Z0(t,e){return BR(t.databaseId,e)}function zR(t){const e=J0(t);return e.length===4?ye.emptyPath():eE(e)}function Ug(t){return new ye(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function eE(t){return pe(t.length>4&&t.get(4)==="documents",29091,{key:t.toString()}),t.popFirst(5)}function $R(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(h){return h==="NO_CHANGE"?0:h==="ADD"?1:h==="REMOVE"?2:h==="CURRENT"?3:h==="RESET"?4:J(39313,{state:h})}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(h,f){return h.useProto3Json?(pe(f===void 0||typeof f=="string",58123),Ve.fromBase64String(f||"")):(pe(f===void 0||f instanceof Buffer||f instanceof Uint8Array,16193),Ve.fromUint8Array(f||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,l=o&&function(h){const f=h.code===void 0?F.UNKNOWN:Q0(h.code);return new K(f,h.message||"")}(o);n=new X0(r,i,s,l||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=sc(t,r.document.name),s=fi(r.document.updateTime),o=r.document.createTime?fi(r.document.createTime):X.min(),l=new At({mapValue:{fields:r.document.fields}}),u=$e.newFoundDocument(i,s,o,l),h=r.targetIds||[],f=r.removedTargetIds||[];n=new Oa(h,f,u.key,u)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=sc(t,r.document),s=r.readTime?fi(r.readTime):X.min(),o=$e.newNoDocument(i,s),l=r.removedTargetIds||[];n=new Oa([],l,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=sc(t,r.document),s=r.removedTargetIds||[];n=new Oa([],s,i,null)}else{if(!("filter"in e))return J(11601,{Vt:e});{e.filter;const r=e.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new bR(i,s),l=r.targetId;n=new Y0(l,o)}}return n}function HR(t,e){return{documents:[Z0(t,e.path)]}}function WR(t,e){const n={structuredQuery:{}},r=e.path;let i;e.collectionGroup!==null?(i=r,n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(i=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=Z0(t,i);const s=function(h){if(h.length!==0)return nE(jt.create(h,"and"))}(e.filters);s&&(n.structuredQuery.where=s);const o=function(h){if(h.length!==0)return h.map(f=>function(g){return{field:Wr(g.field),direction:GR(g.dir)}}(f))}(e.orderBy);o&&(n.structuredQuery.orderBy=o);const l=_h(t,e.limit);return l!==null&&(n.structuredQuery.limit=l),e.startAt&&(n.structuredQuery.startAt=function(h){return{before:h.inclusive,values:h.position}}(e.startAt)),e.endAt&&(n.structuredQuery.endAt=function(h){return{before:!h.inclusive,values:h.position}}(e.endAt)),{gt:n,parent:i}}function qR(t){let e=zR(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){pe(r===1,65062);const f=n.from[0];f.allDescendants?i=f.collectionId:e=e.child(f.collectionId)}let s=[];n.where&&(s=function(v){const g=tE(v);return g instanceof jt&&L0(g)?g.getFilters():[g]}(n.where));let o=[];n.orderBy&&(o=function(v){return v.map(g=>function(b){return new gl(qr(b.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(b.direction))}(g))}(n.orderBy));let l=null;n.limit&&(l=function(v){let g;return g=typeof v=="object"?v.value:v,ql(g)?null:g}(n.limit));let u=null;n.startAt&&(u=function(v){const g=!!v.before,C=v.values||[];return new ml(C,g)}(n.startAt));let h=null;return n.endAt&&(h=function(v){const g=!v.before,C=v.values||[];return new ml(C,g)}(n.endAt)),dR(e,i,o,s,l,"F",u,h)}function KR(t,e){const n=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return J(28987,{purpose:i})}}(e.purpose);return n==null?null:{"goog-listen-tags":n}}function tE(t){return t.unaryFilter!==void 0?function(n){switch(n.unaryFilter.op){case"IS_NAN":const r=qr(n.unaryFilter.field);return xe.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=qr(n.unaryFilter.field);return xe.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=qr(n.unaryFilter.field);return xe.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=qr(n.unaryFilter.field);return xe.create(o,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return J(61313);default:return J(60726)}}(t):t.fieldFilter!==void 0?function(n){return xe.create(qr(n.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return J(58110);default:return J(50506)}}(n.fieldFilter.op),n.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(n){return jt.create(n.compositeFilter.filters.map(r=>tE(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return J(1026)}}(n.compositeFilter.op))}(t):J(30097,{filter:t})}function GR(t){return LR[t]}function QR(t){return VR[t]}function YR(t){return MR[t]}function Wr(t){return{fieldPath:t.canonicalString()}}function qr(t){return Ye.fromServerFormat(t.fieldPath)}function nE(t){return t instanceof xe?function(n){if(n.op==="=="){if(Cg(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NAN"}};if(xg(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NULL"}}}else if(n.op==="!="){if(Cg(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NAN"}};if(xg(n.value))return{unaryFilter:{field:Wr(n.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Wr(n.field),op:QR(n.op),value:n.value}}}(t):t instanceof jt?function(n){const r=n.getFilters().map(i=>nE(i));return r.length===1?r[0]:{compositeFilter:{op:YR(n.op),filters:r}}}(t):J(54877,{filter:t})}function rE(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n,r,i,s=X.min(),o=X.min(),l=Ve.EMPTY_BYTE_STRING,u=null){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=l,this.expectedCount=u}withSequenceNumber(e){return new xn(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,n){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new xn(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XR{constructor(e){this.wt=e}}function JR(t){const e=qR({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?gh(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZR{constructor(){this.Cn=new eP}addToCollectionParentIndex(e,n){return this.Cn.add(n),L.resolve()}getCollectionParents(e,n){return L.resolve(this.Cn.getEntries(n))}addFieldIndex(e,n){return L.resolve()}deleteFieldIndex(e,n){return L.resolve()}deleteAllFieldIndexes(e){return L.resolve()}createTargetIndexes(e,n){return L.resolve()}getDocumentsMatchingTarget(e,n){return L.resolve(null)}getIndexType(e,n){return L.resolve(0)}getFieldIndexes(e,n){return L.resolve([])}getNextCollectionGroupToUpdate(e){return L.resolve(null)}getMinOffset(e,n){return L.resolve(Hn.min())}getMinOffsetFromCollectionGroup(e,n){return L.resolve(Hn.min())}updateCollectionGroup(e,n,r){return L.resolve()}updateIndexEntries(e,n){return L.resolve()}}class eP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Ae(ye.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Ae(ye.comparator)).toArray()}}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fg={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},iE=41943040;class rt{static withCacheSize(e){return new rt(e,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,n,r){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=n,this.maximumSequenceNumbersToCollect=r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */rt.DEFAULT_COLLECTION_PERCENTILE=10,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,rt.DEFAULT=new rt(iE,rt.DEFAULT_COLLECTION_PERCENTILE,rt.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),rt.DISABLED=new rt(-1,0,0);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e){this.ur=e}next(){return this.ur+=2,this.ur}static cr(){return new Si(0)}static lr(){return new Si(-1)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bg="LruGarbageCollector",tP=1048576;function zg([t,e],[n,r]){const i=Z(t,n);return i===0?Z(e,r):i}class nP{constructor(e){this.Er=e,this.buffer=new Ae(zg),this.dr=0}Ar(){return++this.dr}Rr(e){const n=[e,this.Ar()];if(this.buffer.size<this.Er)this.buffer=this.buffer.add(n);else{const r=this.buffer.last();zg(n,r)<0&&(this.buffer=this.buffer.delete(r).add(n))}}get maxValue(){return this.buffer.last()[0]}}class rP{constructor(e,n,r){this.garbageCollector=e,this.asyncQueue=n,this.localStore=r,this.Vr=null}start(){this.garbageCollector.params.cacheSizeCollectionThreshold!==-1&&this.mr(6e4)}stop(){this.Vr&&(this.Vr.cancel(),this.Vr=null)}get started(){return this.Vr!==null}mr(e){$(Bg,`Garbage collection scheduled in ${e}ms`),this.Vr=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Vr=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(n){Mi(n)?$(Bg,"Ignoring IndexedDB error during garbage collection: ",n):await Hl(n)}await this.mr(3e5)})}}class iP{constructor(e,n){this.gr=e,this.params=n}calculateTargetCount(e,n){return this.gr.pr(e).next(r=>Math.floor(n/100*r))}nthSequenceNumber(e,n){if(n===0)return L.resolve(Wl.le);const r=new nP(n);return this.gr.forEachTarget(e,i=>r.Rr(i.sequenceNumber)).next(()=>this.gr.yr(e,i=>r.Rr(i))).next(()=>r.maxValue)}removeTargets(e,n,r){return this.gr.removeTargets(e,n,r)}removeOrphanedDocuments(e,n){return this.gr.removeOrphanedDocuments(e,n)}collect(e,n){return this.params.cacheSizeCollectionThreshold===-1?($("LruGarbageCollector","Garbage collection skipped; disabled"),L.resolve(Fg)):this.getCacheSize(e).next(r=>r<this.params.cacheSizeCollectionThreshold?($("LruGarbageCollector",`Garbage collection skipped; Cache size ${r} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Fg):this.wr(e,n))}getCacheSize(e){return this.gr.getCacheSize(e)}wr(e,n){let r,i,s,o,l,u,h;const f=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(v=>(v>this.params.maximumSequenceNumbersToCollect?($("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${v}`),i=this.params.maximumSequenceNumbersToCollect):i=v,o=Date.now(),this.nthSequenceNumber(e,i))).next(v=>(r=v,l=Date.now(),this.removeTargets(e,r,n))).next(v=>(s=v,u=Date.now(),this.removeOrphanedDocuments(e,r))).next(v=>(h=Date.now(),$r()<=ee.DEBUG&&$("LruGarbageCollector",`LRU Garbage Collection
	Counted targets in ${o-f}ms
	Determined least recently used ${i} in `+(l-o)+`ms
	Removed ${s} targets in `+(u-l)+`ms
	Removed ${v} documents in `+(h-u)+`ms
Total Duration: ${h-f}ms`),L.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:s,documentsRemoved:v})))}}function sP(t,e){return new iP(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(){this.changes=new Lr(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,$e.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?L.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class aP{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Us(r.mutation,i,Sn.empty(),ot.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,re()).next(()=>r))}getLocalViewOfDocuments(e,n,r=re()){const i=pr();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=Es();return s.forEach((l,u)=>{o=o.insert(l,u.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=pr();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,re()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,l)=>{n.set(o,l)})})}computeViews(e,n,r,i){let s=Gn();const o=js(),l=function(){return js()}();return n.forEach((u,h)=>{const f=r.get(h.key);i.has(h.key)&&(f===void 0||f.mutation instanceof Jl)?s=s.insert(h.key,h):f!==void 0?(o.set(h.key,f.mutation.getFieldMask()),Us(f.mutation,h,f.mutation.getFieldMask(),ot.now())):o.set(h.key,Sn.empty())}),this.recalculateAndSaveOverlays(e,s).next(u=>(u.forEach((h,f)=>o.set(h,f)),n.forEach((h,f)=>{var v;return l.set(h,new aP(f,(v=o.get(h))!==null&&v!==void 0?v:null))}),l))}recalculateAndSaveOverlays(e,n){const r=js();let i=new we((o,l)=>o-l),s=re();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const l of o)l.keys().forEach(u=>{const h=n.get(u);if(h===null)return;let f=r.get(u)||Sn.empty();f=l.applyToLocalView(h,f),r.set(u,f);const v=(i.get(l.batchId)||re()).add(u);i=i.insert(l.batchId,v)})}).next(()=>{const o=[],l=i.getReverseIterator();for(;l.hasNext();){const u=l.getNext(),h=u.key,f=u.value,v=$0();f.forEach(g=>{if(!s.has(g)){const C=K0(n.get(g),r.get(g));C!==null&&v.set(g,C),s=s.add(g)}}),o.push(this.documentOverlayCache.saveOverlays(e,h,v))}return L.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r,i){return function(o){return Q.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):fR(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r,i):this.getDocumentsMatchingCollectionQuery(e,n,r,i)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):L.resolve(pr());let l=so,u=s;return o.next(h=>L.forEach(h,(f,v)=>(l<v.largestBatchId&&(l=v.largestBatchId),s.get(f)?L.resolve():this.remoteDocumentCache.getEntry(e,f).next(g=>{u=u.insert(f,g)}))).next(()=>this.populateOverlays(e,h,s)).next(()=>this.computeViews(e,u,h,re())).next(f=>({batchId:l,changes:vR(f)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new Q(n)).next(r=>{let i=Es();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r,i){const s=n.collectionGroup;let o=Es();return this.indexManager.getCollectionParents(e,s).next(l=>L.forEach(l,u=>{const h=function(v,g){return new Gl(g,null,v.explicitOrderBy.slice(),v.filters.slice(),v.limit,v.limitType,v.startAt,v.endAt)}(n,u.child(s));return this.getDocumentsMatchingCollectionQuery(e,h,r,i).next(f=>{f.forEach((v,g)=>{o=o.insert(v,g)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(e,n,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s,i))).next(o=>{s.forEach((u,h)=>{const f=h.getKey();o.get(f)===null&&(o=o.insert(f,$e.newInvalidDocument(f)))});let l=Es();return o.forEach((u,h)=>{const f=s.get(u);f!==void 0&&Us(f.mutation,h,Sn.empty(),ot.now()),Yl(n,h)&&(l=l.insert(u,h))}),l})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uP{constructor(e){this.serializer=e,this.kr=new Map,this.qr=new Map}getBundleMetadata(e,n){return L.resolve(this.kr.get(n))}saveBundleMetadata(e,n){return this.kr.set(n.id,function(i){return{id:i.id,version:i.version,createTime:fi(i.createTime)}}(n)),L.resolve()}getNamedQuery(e,n){return L.resolve(this.qr.get(n))}saveNamedQuery(e,n){return this.qr.set(n.name,function(i){return{name:i.name,query:JR(i.bundledQuery),readTime:fi(i.readTime)}}(n)),L.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cP{constructor(){this.overlays=new we(Q.comparator),this.Qr=new Map}getOverlay(e,n){return L.resolve(this.overlays.get(n))}getOverlays(e,n){const r=pr();return L.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.St(e,n,s)}),L.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.Qr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.Qr.delete(r)),L.resolve()}getOverlaysForCollection(e,n,r){const i=pr(),s=n.length+1,o=new Q(n.child("")),l=this.overlays.getIteratorFrom(o);for(;l.hasNext();){const u=l.getNext().value,h=u.getKey();if(!n.isPrefixOf(h.path))break;h.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return L.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new we((h,f)=>h-f);const o=this.overlays.getIterator();for(;o.hasNext();){const h=o.getNext().value;if(h.getKey().getCollectionGroup()===n&&h.largestBatchId>r){let f=s.get(h.largestBatchId);f===null&&(f=pr(),s=s.insert(h.largestBatchId,f)),f.set(h.getKey(),h)}}const l=pr(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((h,f)=>l.set(h,f)),!(l.size()>=i)););return L.resolve(l)}St(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.Qr.get(i.largestBatchId).delete(r.key);this.Qr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NR(n,r));let s=this.Qr.get(n);s===void 0&&(s=re(),this.Qr.set(n,s)),this.Qr.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hP{constructor(){this.sessionToken=Ve.EMPTY_BYTE_STRING}getSessionToken(e){return L.resolve(this.sessionToken)}setSessionToken(e,n){return this.sessionToken=n,L.resolve()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yd{constructor(){this.$r=new Ae(Pe.Ur),this.Kr=new Ae(Pe.Wr)}isEmpty(){return this.$r.isEmpty()}addReference(e,n){const r=new Pe(e,n);this.$r=this.$r.add(r),this.Kr=this.Kr.add(r)}Gr(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.zr(new Pe(e,n))}jr(e,n){e.forEach(r=>this.removeReference(r,n))}Hr(e){const n=new Q(new ye([])),r=new Pe(n,e),i=new Pe(n,e+1),s=[];return this.Kr.forEachInRange([r,i],o=>{this.zr(o),s.push(o.key)}),s}Jr(){this.$r.forEach(e=>this.zr(e))}zr(e){this.$r=this.$r.delete(e),this.Kr=this.Kr.delete(e)}Yr(e){const n=new Q(new ye([])),r=new Pe(n,e),i=new Pe(n,e+1);let s=re();return this.Kr.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Pe(e,0),r=this.$r.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Pe{constructor(e,n){this.key=e,this.Zr=n}static Ur(e,n){return Q.comparator(e.key,n.key)||Z(e.Zr,n.Zr)}static Wr(e,n){return Z(e.Zr,n.Zr)||Q.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.nr=1,this.Xr=new Ae(Pe.Ur)}checkEmpty(e){return L.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.nr;this.nr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new kR(s,n,r,i);this.mutationQueue.push(o);for(const l of i)this.Xr=this.Xr.add(new Pe(l.key,s)),this.indexManager.addToCollectionParentIndex(e,l.key.path.popLast());return L.resolve(o)}lookupMutationBatch(e,n){return L.resolve(this.ei(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ti(r),s=i<0?0:i;return L.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return L.resolve(this.mutationQueue.length===0?qA:this.nr-1)}getAllMutationBatches(e){return L.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Pe(n,0),i=new Pe(n,Number.POSITIVE_INFINITY),s=[];return this.Xr.forEachInRange([r,i],o=>{const l=this.ei(o.Zr);s.push(l)}),L.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Ae(Z);return n.forEach(i=>{const s=new Pe(i,0),o=new Pe(i,Number.POSITIVE_INFINITY);this.Xr.forEachInRange([s,o],l=>{r=r.add(l.Zr)})}),L.resolve(this.ni(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;Q.isDocumentKey(s)||(s=s.child(""));const o=new Pe(new Q(s),0);let l=new Ae(Z);return this.Xr.forEachWhile(u=>{const h=u.key.path;return!!r.isPrefixOf(h)&&(h.length===i&&(l=l.add(u.Zr)),!0)},o),L.resolve(this.ni(l))}ni(e){const n=[];return e.forEach(r=>{const i=this.ei(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){pe(this.ri(n.batchId,"removed")===0,55003),this.mutationQueue.shift();let r=this.Xr;return L.forEach(n.mutations,i=>{const s=new Pe(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.Xr=r})}sr(e){}containsKey(e,n){const r=new Pe(n,0),i=this.Xr.firstAfterOrEqual(r);return L.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,L.resolve()}ri(e,n){return this.ti(e)}ti(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ei(e){const n=this.ti(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fP{constructor(e){this.ii=e,this.docs=function(){return new we(Q.comparator)}(),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.ii(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return L.resolve(r?r.document.mutableCopy():$e.newInvalidDocument(n))}getEntries(e,n){let r=Gn();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():$e.newInvalidDocument(i))}),L.resolve(r)}getDocumentsMatchingQuery(e,n,r,i){let s=Gn();const o=n.path,l=new Q(o.child("__id-9223372036854775808__")),u=this.docs.getIteratorFrom(l);for(;u.hasNext();){const{key:h,value:{document:f}}=u.getNext();if(!o.isPrefixOf(h.path))break;h.path.length>o.length+1||zA(BA(f),r)<=0||(i.has(f.key)||Yl(n,f))&&(s=s.insert(f.key,f.mutableCopy()))}return L.resolve(s)}getAllFromCollectionGroup(e,n,r,i){J(9500)}si(e,n){return L.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new pP(this)}getSize(e){return L.resolve(this.size)}}class pP extends oP{constructor(e){super(),this.Br=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Br.addEntry(e,i)):this.Br.removeEntry(r)}),L.waitFor(n)}getFromCache(e,n){return this.Br.getEntry(e,n)}getAllFromCache(e,n){return this.Br.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mP{constructor(e){this.persistence=e,this.oi=new Lr(n=>Wd(n),qd),this.lastRemoteSnapshotVersion=X.min(),this.highestTargetId=0,this._i=0,this.ai=new Yd,this.targetCount=0,this.ui=Si.cr()}forEachTarget(e,n){return this.oi.forEach((r,i)=>n(i)),L.resolve()}getLastRemoteSnapshotVersion(e){return L.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return L.resolve(this._i)}allocateTargetId(e){return this.highestTargetId=this.ui.next(),L.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this._i&&(this._i=n),L.resolve()}Tr(e){this.oi.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ui=new Si(n),this.highestTargetId=n),e.sequenceNumber>this._i&&(this._i=e.sequenceNumber)}addTargetData(e,n){return this.Tr(n),this.targetCount+=1,L.resolve()}updateTargetData(e,n){return this.Tr(n),L.resolve()}removeTargetData(e,n){return this.oi.delete(n.target),this.ai.Hr(n.targetId),this.targetCount-=1,L.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.oi.forEach((o,l)=>{l.sequenceNumber<=n&&r.get(l.targetId)===null&&(this.oi.delete(o),s.push(this.removeMatchingKeysForTargetId(e,l.targetId)),i++)}),L.waitFor(s).next(()=>i)}getTargetCount(e){return L.resolve(this.targetCount)}getTargetData(e,n){const r=this.oi.get(n)||null;return L.resolve(r)}addMatchingKeys(e,n,r){return this.ai.Gr(n,r),L.resolve()}removeMatchingKeys(e,n,r){this.ai.jr(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),L.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.ai.Hr(n),L.resolve()}getMatchingKeysForTargetId(e,n){const r=this.ai.Yr(n);return L.resolve(r)}containsKey(e,n){return L.resolve(this.ai.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sE{constructor(e,n){this.ci={},this.overlays={},this.li=new Wl(0),this.hi=!1,this.hi=!0,this.Pi=new hP,this.referenceDelegate=e(this),this.Ti=new mP(this),this.indexManager=new ZR,this.remoteDocumentCache=function(i){return new fP(i)}(r=>this.referenceDelegate.Ii(r)),this.serializer=new XR(n),this.Ei=new uP(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.hi=!1,Promise.resolve()}get started(){return this.hi}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new cP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.ci[e.toKey()];return r||(r=new dP(n,this.referenceDelegate),this.ci[e.toKey()]=r),r}getGlobalsCache(){return this.Pi}getTargetCache(){return this.Ti}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ei}runTransaction(e,n,r){$("MemoryPersistence","Starting transaction:",e);const i=new gP(this.li.next());return this.referenceDelegate.di(),r(i).next(s=>this.referenceDelegate.Ai(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ri(e,n){return L.or(Object.values(this.ci).map(r=>()=>r.containsKey(e,n)))}}class gP extends HA{constructor(e){super(),this.currentSequenceNumber=e}}class Xd{constructor(e){this.persistence=e,this.Vi=new Yd,this.mi=null}static fi(e){return new Xd(e)}get gi(){if(this.mi)return this.mi;throw J(60996)}addReference(e,n,r){return this.Vi.addReference(r,n),this.gi.delete(r.toString()),L.resolve()}removeReference(e,n,r){return this.Vi.removeReference(r,n),this.gi.add(r.toString()),L.resolve()}markPotentiallyOrphaned(e,n){return this.gi.add(n.toString()),L.resolve()}removeTarget(e,n){this.Vi.Hr(n.targetId).forEach(i=>this.gi.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.gi.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}di(){this.mi=new Set}Ai(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return L.forEach(this.gi,r=>{const i=Q.fromPath(r);return this.pi(e,i).next(s=>{s||n.removeEntry(i,X.min())})}).next(()=>(this.mi=null,n.apply(e)))}updateLimboDocument(e,n){return this.pi(e,n).next(r=>{r?this.gi.delete(n.toString()):this.gi.add(n.toString())})}Ii(e){return 0}pi(e,n){return L.or([()=>L.resolve(this.Vi.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ri(e,n)])}}class _l{constructor(e,n){this.persistence=e,this.yi=new Lr(r=>KA(r.path),(r,i)=>r.isEqual(i)),this.garbageCollector=sP(this,n)}static fi(e,n){return new _l(e,n)}di(){}Ai(e){return L.resolve()}forEachTarget(e,n){return this.persistence.getTargetCache().forEachTarget(e,n)}pr(e){const n=this.br(e);return this.persistence.getTargetCache().getTargetCount(e).next(r=>n.next(i=>r+i))}br(e){let n=0;return this.yr(e,r=>{n++}).next(()=>n)}yr(e,n){return L.forEach(this.yi,(r,i)=>this.Dr(e,r,i).next(s=>s?L.resolve():n(i)))}removeTargets(e,n,r){return this.persistence.getTargetCache().removeTargets(e,n,r)}removeOrphanedDocuments(e,n){let r=0;const i=this.persistence.getRemoteDocumentCache(),s=i.newChangeBuffer();return i.si(e,o=>this.Dr(e,o,n).next(l=>{l||(r++,s.removeEntry(o,X.min()))})).next(()=>s.apply(e)).next(()=>r)}markPotentiallyOrphaned(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}removeTarget(e,n){const r=n.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,r)}addReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}removeReference(e,n,r){return this.yi.set(r,e.currentSequenceNumber),L.resolve()}updateLimboDocument(e,n){return this.yi.set(n,e.currentSequenceNumber),L.resolve()}Ii(e){let n=e.key.toString().length;return e.isFoundDocument()&&(n+=Na(e.data.value)),n}Dr(e,n,r){return L.or([()=>this.persistence.Ri(e,n),()=>this.persistence.getTargetCache().containsKey(e,n),()=>{const i=this.yi.get(n);return L.resolve(i!==void 0&&i>r)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jd{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.ds=r,this.As=i}static Rs(e,n){let r=re(),i=re();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new Jd(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yP{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vP{constructor(){this.Vs=!1,this.fs=!1,this.gs=100,this.ps=function(){return zI()?8:WA(Ke())>0?6:4}()}initialize(e,n){this.ys=e,this.indexManager=n,this.Vs=!0}getDocumentsMatchingQuery(e,n,r,i){const s={result:null};return this.ws(e,n).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.bs(e,n,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new yP;return this.Ss(e,n,o).next(l=>{if(s.result=l,this.fs)return this.Ds(e,n,o,l.size)})}).next(()=>s.result)}Ds(e,n,r,i){return r.documentReadCount<this.gs?($r()<=ee.DEBUG&&$("QueryEngine","SDK will not create cache indexes for query:",Hr(n),"since it only creates cache indexes for collection contains","more than or equal to",this.gs,"documents"),L.resolve()):($r()<=ee.DEBUG&&$("QueryEngine","Query:",Hr(n),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.ps*i?($r()<=ee.DEBUG&&$("QueryEngine","The SDK decides to create cache indexes for query:",Hr(n),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Vt(n))):L.resolve())}ws(e,n){if(kg(n))return L.resolve(null);let r=Vt(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=gh(n,null,"F"),r=Vt(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=re(...s);return this.ys.getDocuments(e,o).next(l=>this.indexManager.getMinOffset(e,r).next(u=>{const h=this.vs(n,l);return this.Cs(n,h,o,u.readTime)?this.ws(e,gh(n,null,"F")):this.Fs(e,h,n,u)}))})))}bs(e,n,r,i){return kg(n)||i.isEqual(X.min())?L.resolve(null):this.ys.getDocuments(e,r).next(s=>{const o=this.vs(n,s);return this.Cs(n,o,r,i)?L.resolve(null):($r()<=ee.DEBUG&&$("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Hr(n)),this.Fs(e,o,n,FA(i,so)).next(l=>l))})}vs(e,n){let r=new Ae(B0(e));return n.forEach((i,s)=>{Yl(e,s)&&(r=r.add(s))}),r}Cs(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Ss(e,n,r){return $r()<=ee.DEBUG&&$("QueryEngine","Using full collection scan to execute query:",Hr(n)),this.ys.getDocumentsMatchingQuery(e,n,Hn.min(),r)}Fs(e,n,r,i){return this.ys.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zd="LocalStore",_P=3e8;class EP{constructor(e,n,r,i){this.persistence=e,this.Ms=n,this.serializer=i,this.xs=new we(Z),this.Os=new Lr(s=>Wd(s),qd),this.Ns=new Map,this.Bs=e.getRemoteDocumentCache(),this.Ti=e.getTargetCache(),this.Ei=e.getBundleCache(),this.Ls(r)}Ls(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new lP(this.Bs,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Bs.setIndexManager(this.indexManager),this.Ms.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.xs))}}function wP(t,e,n,r){return new EP(t,e,n,r)}async function oE(t,e){const n=ne(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Ls(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],l=[];let u=re();for(const h of i){o.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}for(const h of s){l.push(h.batchId);for(const f of h.mutations)u=u.add(f.key)}return n.localDocuments.getDocuments(r,u).next(h=>({ks:h,removedBatchIds:o,addedBatchIds:l}))})})}function aE(t){const e=ne(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Ti.getLastRemoteSnapshotVersion(n))}function TP(t,e){const n=ne(t),r=e.snapshotVersion;let i=n.xs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Bs.newChangeBuffer({trackRemovals:!0});i=n.xs;const l=[];e.targetChanges.forEach((f,v)=>{const g=i.get(v);if(!g)return;l.push(n.Ti.removeMatchingKeys(s,f.removedDocuments,v).next(()=>n.Ti.addMatchingKeys(s,f.addedDocuments,v)));let C=g.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.get(v)!==null?C=C.withResumeToken(Ve.EMPTY_BYTE_STRING,X.min()).withLastLimboFreeSnapshotVersion(X.min()):f.resumeToken.approximateByteSize()>0&&(C=C.withResumeToken(f.resumeToken,r)),i=i.insert(v,C),function(O,y,w){return O.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-O.snapshotVersion.toMicroseconds()>=_P?!0:w.addedDocuments.size+w.modifiedDocuments.size+w.removedDocuments.size>0}(g,C,f)&&l.push(n.Ti.updateTargetData(s,C))});let u=Gn(),h=re();if(e.documentUpdates.forEach(f=>{e.resolvedLimboDocuments.has(f)&&l.push(n.persistence.referenceDelegate.updateLimboDocument(s,f))}),l.push(IP(s,o,e.documentUpdates).next(f=>{u=f.qs,h=f.Qs})),!r.isEqual(X.min())){const f=n.Ti.getLastRemoteSnapshotVersion(s).next(v=>n.Ti.setTargetsMetadata(s,s.currentSequenceNumber,r));l.push(f)}return L.waitFor(l).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,u,h)).next(()=>u)}).then(s=>(n.xs=i,s))}function IP(t,e,n){let r=re(),i=re();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=Gn();return n.forEach((l,u)=>{const h=s.get(l);u.isFoundDocument()!==h.isFoundDocument()&&(i=i.add(l)),u.isNoDocument()&&u.version.isEqual(X.min())?(e.removeEntry(l,u.readTime),o=o.insert(l,u)):!h.isValidDocument()||u.version.compareTo(h.version)>0||u.version.compareTo(h.version)===0&&h.hasPendingWrites?(e.addEntry(u),o=o.insert(l,u)):$(Zd,"Ignoring outdated watch update for ",l,". Current version:",h.version," Watch version:",u.version)}),{qs:o,Qs:i}})}function SP(t,e){const n=ne(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Ti.getTargetData(r,e).next(s=>s?(i=s,L.resolve(i)):n.Ti.allocateTargetId(r).next(o=>(i=new xn(e,o,"TargetPurposeListen",r.currentSequenceNumber),n.Ti.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.xs.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.xs=n.xs.insert(r.targetId,r),n.Os.set(e,r.targetId)),r})}async function wh(t,e,n){const r=ne(t),i=r.xs.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Mi(o))throw o;$(Zd,`Failed to update sequence numbers for target ${e}: ${o}`)}r.xs=r.xs.remove(e),r.Os.delete(i.target)}function $g(t,e,n){const r=ne(t);let i=X.min(),s=re();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,h,f){const v=ne(u),g=v.Os.get(f);return g!==void 0?L.resolve(v.xs.get(g)):v.Ti.getTargetData(h,f)}(r,o,Vt(e)).next(l=>{if(l)return i=l.lastLimboFreeSnapshotVersion,r.Ti.getMatchingKeysForTargetId(o,l.targetId).next(u=>{s=u})}).next(()=>r.Ms.getDocumentsMatchingQuery(o,e,n?i:X.min(),n?s:re())).next(l=>(xP(r,mR(e),l),{documents:l,$s:s})))}function xP(t,e,n){let r=t.Ns.get(e)||X.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ns.set(e,r)}class Hg{constructor(){this.activeTargetIds=wR()}js(e){this.activeTargetIds=this.activeTargetIds.add(e)}Hs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}zs(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class CP{constructor(){this.xo=new Hg,this.Oo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e,n=!0){return n&&this.xo.js(e),this.Oo[e]||"not-current"}updateQueryState(e,n,r){this.Oo[e]=n}removeLocalQueryTarget(e){this.xo.Hs(e)}isLocalQueryTarget(e){return this.xo.activeTargetIds.has(e)}clearQueryState(e){delete this.Oo[e]}getAllActiveQueryTargets(){return this.xo.activeTargetIds}isActiveQueryTarget(e){return this.xo.activeTargetIds.has(e)}start(){return this.xo=new Hg,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AP{No(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wg="ConnectivityMonitor";class qg{constructor(){this.Bo=()=>this.Lo(),this.ko=()=>this.qo(),this.Qo=[],this.$o()}No(e){this.Qo.push(e)}shutdown(){window.removeEventListener("online",this.Bo),window.removeEventListener("offline",this.ko)}$o(){window.addEventListener("online",this.Bo),window.addEventListener("offline",this.ko)}Lo(){$(Wg,"Network connectivity changed: AVAILABLE");for(const e of this.Qo)e(0)}qo(){$(Wg,"Network connectivity changed: UNAVAILABLE");for(const e of this.Qo)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha=null;function Th(){return ha===null?ha=function(){return 268435456+Math.round(2147483648*Math.random())}():ha++,"0x"+ha.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oc="RestConnection",RP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class PP{get Uo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http",r=encodeURIComponent(this.databaseId.projectId),i=encodeURIComponent(this.databaseId.database);this.Ko=n+"://"+e.host,this.Wo=`projects/${r}/databases/${i}`,this.Go=this.databaseId.database===pl?`project_id=${r}`:`project_id=${r}&database_id=${i}`}zo(e,n,r,i,s){const o=Th(),l=this.jo(e,n.toUriEncodedString());$(oc,`Sending RPC '${e}' ${o}:`,l,r);const u={"google-cloud-resource-prefix":this.Wo,"x-goog-request-params":this.Go};this.Ho(u,i,s);const{host:h}=new URL(l),f=br(h);return this.Jo(e,l,u,r,f).then(v=>($(oc,`Received RPC '${e}' ${o}: `,v),v),v=>{throw Ei(oc,`RPC '${e}' ${o} failed with error: `,v,"url: ",l,"request:",r),v})}Yo(e,n,r,i,s,o){return this.zo(e,n,r,i,s)}Ho(e,n,r){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+Vi}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}jo(e,n){const r=RP[e];return`${this.Ko}/v1/${n}:${r}`}terminate(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kP{constructor(e){this.Zo=e.Zo,this.Xo=e.Xo}e_(e){this.t_=e}n_(e){this.r_=e}i_(e){this.s_=e}onMessage(e){this.o_=e}close(){this.Xo()}send(e){this.Zo(e)}__(){this.t_()}a_(){this.r_()}u_(e){this.s_(e)}c_(e){this.o_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe="WebChannelConnection";class NP extends PP{constructor(e){super(e),this.l_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}Jo(e,n,r,i,s){const o=Th();return new Promise((l,u)=>{const h=new v0;h.setWithCredentials(!0),h.listenOnce(_0.COMPLETE,()=>{try{switch(h.getLastErrorCode()){case ka.NO_ERROR:const v=h.getResponseJson();$(Fe,`XHR for RPC '${e}' ${o} received:`,JSON.stringify(v)),l(v);break;case ka.TIMEOUT:$(Fe,`RPC '${e}' ${o} timed out`),u(new K(F.DEADLINE_EXCEEDED,"Request time out"));break;case ka.HTTP_ERROR:const g=h.getStatus();if($(Fe,`RPC '${e}' ${o} failed with status:`,g,"response text:",h.getResponseText()),g>0){let C=h.getResponseJson();Array.isArray(C)&&(C=C[0]);const b=C==null?void 0:C.error;if(b&&b.status&&b.message){const O=function(w){const I=w.toLowerCase().replace(/_/g,"-");return Object.values(F).indexOf(I)>=0?I:F.UNKNOWN}(b.status);u(new K(O,b.message))}else u(new K(F.UNKNOWN,"Server responded with status "+h.getStatus()))}else u(new K(F.UNAVAILABLE,"Connection failed."));break;default:J(9055,{h_:e,streamId:o,P_:h.getLastErrorCode(),T_:h.getLastError()})}}finally{$(Fe,`RPC '${e}' ${o} completed.`)}});const f=JSON.stringify(i);$(Fe,`RPC '${e}' ${o} sending request:`,i),h.send(n,"POST",f,r,15)})}I_(e,n,r){const i=Th(),s=[this.Ko,"/","google.firestore.v1.Firestore","/",e,"/channel"],o=T0(),l=w0(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},h=this.longPollingOptions.timeoutSeconds;h!==void 0&&(u.longPollingTimeout=Math.round(1e3*h)),this.useFetchStreams&&(u.useFetchStreams=!0),this.Ho(u.initMessageHeaders,n,r),u.encodeInitMessageHeaders=!0;const f=s.join("");$(Fe,`Creating RPC '${e}' stream ${i}: ${f}`,u);const v=o.createWebChannel(f,u);this.E_(v);let g=!1,C=!1;const b=new kP({Zo:y=>{C?$(Fe,`Not sending because RPC '${e}' stream ${i} is closed:`,y):(g||($(Fe,`Opening RPC '${e}' stream ${i} transport.`),v.open(),g=!0),$(Fe,`RPC '${e}' stream ${i} sending:`,y),v.send(y))},Xo:()=>v.close()}),O=(y,w,I)=>{y.listen(w,R=>{try{I(R)}catch(N){setTimeout(()=>{throw N},0)}})};return O(v,_s.EventType.OPEN,()=>{C||($(Fe,`RPC '${e}' stream ${i} transport opened.`),b.__())}),O(v,_s.EventType.CLOSE,()=>{C||(C=!0,$(Fe,`RPC '${e}' stream ${i} transport closed`),b.u_(),this.d_(v))}),O(v,_s.EventType.ERROR,y=>{C||(C=!0,Ei(Fe,`RPC '${e}' stream ${i} transport errored. Name:`,y.name,"Message:",y.message),b.u_(new K(F.UNAVAILABLE,"The operation could not be completed")))}),O(v,_s.EventType.MESSAGE,y=>{var w;if(!C){const I=y.data[0];pe(!!I,16349);const R=I,N=(R==null?void 0:R.error)||((w=R[0])===null||w===void 0?void 0:w.error);if(N){$(Fe,`RPC '${e}' stream ${i} received error:`,N);const z=N.status;let V=function(E){const x=Te[E];if(x!==void 0)return Q0(x)}(z),S=N.message;V===void 0&&(V=F.INTERNAL,S="Unknown error status: "+z+" with message "+N.message),C=!0,b.u_(new K(V,S)),v.close()}else $(Fe,`RPC '${e}' stream ${i} received:`,I),b.c_(I)}}),O(l,E0.STAT_EVENT,y=>{y.stat===lh.PROXY?$(Fe,`RPC '${e}' stream ${i} detected buffering proxy`):y.stat===lh.NOPROXY&&$(Fe,`RPC '${e}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{b.a_()},0),b}terminate(){this.l_.forEach(e=>e.close()),this.l_=[]}E_(e){this.l_.push(e)}d_(e){this.l_=this.l_.filter(n=>n===e)}}function ac(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lE(t){return new jR(t,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uE{constructor(e,n,r=1e3,i=1.5,s=6e4){this.xi=e,this.timerId=n,this.A_=r,this.R_=i,this.V_=s,this.m_=0,this.f_=null,this.g_=Date.now(),this.reset()}reset(){this.m_=0}p_(){this.m_=this.V_}y_(e){this.cancel();const n=Math.floor(this.m_+this.w_()),r=Math.max(0,Date.now()-this.g_),i=Math.max(0,n-r);i>0&&$("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.m_} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.f_=this.xi.enqueueAfterDelay(this.timerId,i,()=>(this.g_=Date.now(),e())),this.m_*=this.R_,this.m_<this.A_&&(this.m_=this.A_),this.m_>this.V_&&(this.m_=this.V_)}b_(){this.f_!==null&&(this.f_.skipDelay(),this.f_=null)}cancel(){this.f_!==null&&(this.f_.cancel(),this.f_=null)}w_(){return(Math.random()-.5)*this.m_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kg="PersistentStream";class bP{constructor(e,n,r,i,s,o,l,u){this.xi=e,this.S_=r,this.D_=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=l,this.listener=u,this.state=0,this.v_=0,this.C_=null,this.F_=null,this.stream=null,this.M_=0,this.x_=new uE(e,n)}O_(){return this.state===1||this.state===5||this.N_()}N_(){return this.state===2||this.state===3}start(){this.M_=0,this.state!==4?this.auth():this.B_()}async stop(){this.O_()&&await this.close(0)}L_(){this.state=0,this.x_.reset()}k_(){this.N_()&&this.C_===null&&(this.C_=this.xi.enqueueAfterDelay(this.S_,6e4,()=>this.q_()))}Q_(e){this.U_(),this.stream.send(e)}async q_(){if(this.N_())return this.close(0)}U_(){this.C_&&(this.C_.cancel(),this.C_=null)}K_(){this.F_&&(this.F_.cancel(),this.F_=null)}async close(e,n){this.U_(),this.K_(),this.x_.cancel(),this.v_++,e!==4?this.x_.reset():n&&n.code===F.RESOURCE_EXHAUSTED?(on(n.toString()),on("Using maximum backoff delay to prevent overloading the backend."),this.x_.p_()):n&&n.code===F.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.W_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.i_(n)}W_(){}auth(){this.state=1;const e=this.G_(this.v_),n=this.v_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.v_===n&&this.z_(r,i)},r=>{e(()=>{const i=new K(F.UNKNOWN,"Fetching auth token failed: "+r.message);return this.j_(i)})})}z_(e,n){const r=this.G_(this.v_);this.stream=this.H_(e,n),this.stream.e_(()=>{r(()=>this.listener.e_())}),this.stream.n_(()=>{r(()=>(this.state=2,this.F_=this.xi.enqueueAfterDelay(this.D_,1e4,()=>(this.N_()&&(this.state=3),Promise.resolve())),this.listener.n_()))}),this.stream.i_(i=>{r(()=>this.j_(i))}),this.stream.onMessage(i=>{r(()=>++this.M_==1?this.J_(i):this.onNext(i))})}B_(){this.state=5,this.x_.y_(async()=>{this.state=0,this.start()})}j_(e){return $(Kg,`close with error: ${e}`),this.stream=null,this.close(4,e)}G_(e){return n=>{this.xi.enqueueAndForget(()=>this.v_===e?n():($(Kg,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class OP extends bP{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.serializer=s}H_(e,n){return this.connection.I_("Listen",e,n)}J_(e){return this.onNext(e)}onNext(e){this.x_.reset();const n=$R(this.serializer,e),r=function(s){if(!("targetChange"in s))return X.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?X.min():o.readTime?fi(o.readTime):X.min()}(e);return this.listener.Y_(n,r)}Z_(e){const n={};n.database=Ug(this.serializer),n.addTarget=function(s,o){let l;const u=o.target;if(l=mh(u)?{documents:HR(s,u)}:{query:WR(s,u).gt},l.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){l.resumeToken=FR(s,o.resumeToken);const h=_h(s,o.expectedCount);h!==null&&(l.expectedCount=h)}else if(o.snapshotVersion.compareTo(X.min())>0){l.readTime=UR(s,o.snapshotVersion.toTimestamp());const h=_h(s,o.expectedCount);h!==null&&(l.expectedCount=h)}return l}(this.serializer,e);const r=KR(this.serializer,e);r&&(n.labels=r),this.Q_(n)}X_(e){const n={};n.database=Ug(this.serializer),n.removeTarget=e,this.Q_(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{}class LP extends DP{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=i,this.sa=!1}oa(){if(this.sa)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.")}zo(e,n,r,i){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.zo(e,Eh(n,r),i,s,o)).catch(s=>{throw s.name==="FirebaseError"?(s.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new K(F.UNKNOWN,s.toString())})}Yo(e,n,r,i,s){return this.oa(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([o,l])=>this.connection.Yo(e,Eh(n,r),i,o,l,s)).catch(o=>{throw o.name==="FirebaseError"?(o.code===F.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),o):new K(F.UNKNOWN,o.toString())})}terminate(){this.sa=!0,this.connection.terminate()}}class VP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this._a=0,this.aa=null,this.ua=!0}ca(){this._a===0&&(this.la("Unknown"),this.aa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.aa=null,this.ha("Backend didn't respond within 10 seconds."),this.la("Offline"),Promise.resolve())))}Pa(e){this.state==="Online"?this.la("Unknown"):(this._a++,this._a>=1&&(this.Ta(),this.ha(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.la("Offline")))}set(e){this.Ta(),this._a=0,e==="Online"&&(this.ua=!1),this.la(e)}la(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ha(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ua?(on(n),this.ua=!1):$("OnlineStateTracker",n)}Ta(){this.aa!==null&&(this.aa.cancel(),this.aa=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="RemoteStore";class MP{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Ia=[],this.Ea=new Map,this.da=new Set,this.Aa=[],this.Ra=s,this.Ra.No(o=>{r.enqueueAndForget(async()=>{Ro(this)&&($(xi,"Restarting streams for network reachability change."),await async function(u){const h=ne(u);h.da.add(4),await Ao(h),h.Va.set("Unknown"),h.da.delete(4),await eu(h)}(this))})}),this.Va=new VP(r,i)}}async function eu(t){if(Ro(t))for(const e of t.Aa)await e(!0)}async function Ao(t){for(const e of t.Aa)await e(!1)}function cE(t,e){const n=ne(t);n.Ea.has(e.targetId)||(n.Ea.set(e.targetId,e),rf(n)?nf(n):ji(n).N_()&&tf(n,e))}function ef(t,e){const n=ne(t),r=ji(n);n.Ea.delete(e),r.N_()&&hE(n,e),n.Ea.size===0&&(r.N_()?r.k_():Ro(n)&&n.Va.set("Unknown"))}function tf(t,e){if(t.ma.Ke(e.targetId),e.resumeToken.approximateByteSize()>0||e.snapshotVersion.compareTo(X.min())>0){const n=t.remoteSyncer.getRemoteKeysForTarget(e.targetId).size;e=e.withExpectedCount(n)}ji(t).Z_(e)}function hE(t,e){t.ma.Ke(e),ji(t).X_(e)}function nf(t){t.ma=new DR({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Rt:e=>t.Ea.get(e)||null,Pt:()=>t.datastore.serializer.databaseId}),ji(t).start(),t.Va.ca()}function rf(t){return Ro(t)&&!ji(t).O_()&&t.Ea.size>0}function Ro(t){return ne(t).da.size===0}function dE(t){t.ma=void 0}async function jP(t){t.Va.set("Online")}async function UP(t){t.Ea.forEach((e,n)=>{tf(t,e)})}async function FP(t,e){dE(t),rf(t)?(t.Va.Pa(e),nf(t)):t.Va.set("Unknown")}async function BP(t,e,n){if(t.Va.set("Online"),e instanceof X0&&e.state===2&&e.cause)try{await async function(i,s){const o=s.cause;for(const l of s.targetIds)i.Ea.has(l)&&(await i.remoteSyncer.rejectListen(l,o),i.Ea.delete(l),i.ma.removeTarget(l))}(t,e)}catch(r){$(xi,"Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Gg(t,r)}else if(e instanceof Oa?t.ma.Xe(e):e instanceof Y0?t.ma.ot(e):t.ma.nt(e),!n.isEqual(X.min()))try{const r=await aE(t.localStore);n.compareTo(r)>=0&&await function(s,o){const l=s.ma.It(o);return l.targetChanges.forEach((u,h)=>{if(u.resumeToken.approximateByteSize()>0){const f=s.Ea.get(h);f&&s.Ea.set(h,f.withResumeToken(u.resumeToken,o))}}),l.targetMismatches.forEach((u,h)=>{const f=s.Ea.get(u);if(!f)return;s.Ea.set(u,f.withResumeToken(Ve.EMPTY_BYTE_STRING,f.snapshotVersion)),hE(s,u);const v=new xn(f.target,u,h,f.sequenceNumber);tf(s,v)}),s.remoteSyncer.applyRemoteEvent(l)}(t,n)}catch(r){$(xi,"Failed to raise snapshot:",r),await Gg(t,r)}}async function Gg(t,e,n){if(!Mi(e))throw e;t.da.add(1),await Ao(t),t.Va.set("Offline"),n||(n=()=>aE(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{$(xi,"Retrying IndexedDB access"),await n(),t.da.delete(1),await eu(t)})}async function Qg(t,e){const n=ne(t);n.asyncQueue.verifyOperationInProgress(),$(xi,"RemoteStore received new credentials");const r=Ro(n);n.da.add(3),await Ao(n),r&&n.Va.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.da.delete(3),await eu(n)}async function zP(t,e){const n=ne(t);e?(n.da.delete(2),await eu(n)):e||(n.da.add(2),await Ao(n),n.Va.set("Unknown"))}function ji(t){return t.fa||(t.fa=function(n,r,i){const s=ne(n);return s.oa(),new OP(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(t.datastore,t.asyncQueue,{e_:jP.bind(null,t),n_:UP.bind(null,t),i_:FP.bind(null,t),Y_:BP.bind(null,t)}),t.Aa.push(async e=>{e?(t.fa.L_(),rf(t)?nf(t):t.Va.set("Unknown")):(await t.fa.stop(),dE(t))})),t.fa}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new gr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,l=new sf(e,n,o,i,s);return l.start(r),l}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new K(F.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function fE(t,e){if(on("AsyncQueue",`${e}: ${t}`),Mi(t))return new K(F.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pi{static emptySet(e){return new pi(e.comparator)}constructor(e){this.comparator=e?(n,r)=>e(n,r)||Q.comparator(n.key,r.key):(n,r)=>Q.comparator(n.key,r.key),this.keyedMap=Es(),this.sortedSet=new we(this.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof pi)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new pi;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(){this.pa=new we(Q.comparator)}track(e){const n=e.doc.key,r=this.pa.get(n);r?e.type!==0&&r.type===3?this.pa=this.pa.insert(n,e):e.type===3&&r.type!==1?this.pa=this.pa.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.pa=this.pa.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.pa=this.pa.remove(n):e.type===1&&r.type===2?this.pa=this.pa.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.pa=this.pa.insert(n,{type:2,doc:e.doc}):J(63341,{Vt:e,ya:r}):this.pa=this.pa.insert(n,e)}wa(){const e=[];return this.pa.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ci{constructor(e,n,r,i,s,o,l,u,h){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=l,this.excludesMetadataChanges=u,this.hasCachedResults=h}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(l=>{o.push({type:0,doc:l})}),new Ci(e,n,pi.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Ql(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(){this.ba=void 0,this.Sa=[]}Da(){return this.Sa.some(e=>e.va())}}class HP{constructor(){this.queries=Xg(),this.onlineState="Unknown",this.Ca=new Set}terminate(){(function(n,r){const i=ne(n),s=i.queries;i.queries=Xg(),s.forEach((o,l)=>{for(const u of l.Sa)u.onError(r)})})(this,new K(F.ABORTED,"Firestore shutting down"))}}function Xg(){return new Lr(t=>F0(t),Ql)}async function WP(t,e){const n=ne(t);let r=3;const i=e.query;let s=n.queries.get(i);s?!s.Da()&&e.va()&&(r=2):(s=new $P,r=e.va()?0:1);try{switch(r){case 0:s.ba=await n.onListen(i,!0);break;case 1:s.ba=await n.onListen(i,!1);break;case 2:await n.onFirstRemoteStoreListen(i)}}catch(o){const l=fE(o,`Initialization of query '${Hr(e.query)}' failed`);return void e.onError(l)}n.queries.set(i,s),s.Sa.push(e),e.Fa(n.onlineState),s.ba&&e.Ma(s.ba)&&of(n)}async function qP(t,e){const n=ne(t),r=e.query;let i=3;const s=n.queries.get(r);if(s){const o=s.Sa.indexOf(e);o>=0&&(s.Sa.splice(o,1),s.Sa.length===0?i=e.va()?0:1:!s.Da()&&e.va()&&(i=2))}switch(i){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function KP(t,e){const n=ne(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const l of o.Sa)l.Ma(i)&&(r=!0);o.ba=i}}r&&of(n)}function GP(t,e,n){const r=ne(t),i=r.queries.get(e);if(i)for(const s of i.Sa)s.onError(n);r.queries.delete(e)}function of(t){t.Ca.forEach(e=>{e.next()})}var Ih,Jg;(Jg=Ih||(Ih={})).xa="default",Jg.Cache="cache";class QP{constructor(e,n,r){this.query=e,this.Oa=n,this.Na=!1,this.Ba=null,this.onlineState="Unknown",this.options=r||{}}Ma(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ci(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Na?this.La(e)&&(this.Oa.next(e),n=!0):this.ka(e,this.onlineState)&&(this.qa(e),n=!0),this.Ba=e,n}onError(e){this.Oa.error(e)}Fa(e){this.onlineState=e;let n=!1;return this.Ba&&!this.Na&&this.ka(this.Ba,e)&&(this.qa(this.Ba),n=!0),n}ka(e,n){if(!e.fromCache||!this.va())return!0;const r=n!=="Offline";return(!this.options.Qa||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}La(e){if(e.docChanges.length>0)return!0;const n=this.Ba&&this.Ba.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}qa(e){e=Ci.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Na=!0,this.Oa.next(e)}va(){return this.options.source!==Ih.Cache}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pE{constructor(e){this.key=e}}class mE{constructor(e){this.key=e}}class YP{constructor(e,n){this.query=e,this.Ha=n,this.Ja=null,this.hasCachedResults=!1,this.current=!1,this.Ya=re(),this.mutatedKeys=re(),this.Za=B0(e),this.Xa=new pi(this.Za)}get eu(){return this.Ha}tu(e,n){const r=n?n.nu:new Yg,i=n?n.Xa:this.Xa;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,l=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,h=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((f,v)=>{const g=i.get(f),C=Yl(this.query,v)?v:null,b=!!g&&this.mutatedKeys.has(g.key),O=!!C&&(C.hasLocalMutations||this.mutatedKeys.has(C.key)&&C.hasCommittedMutations);let y=!1;g&&C?g.data.isEqual(C.data)?b!==O&&(r.track({type:3,doc:C}),y=!0):this.ru(g,C)||(r.track({type:2,doc:C}),y=!0,(u&&this.Za(C,u)>0||h&&this.Za(C,h)<0)&&(l=!0)):!g&&C?(r.track({type:0,doc:C}),y=!0):g&&!C&&(r.track({type:1,doc:g}),y=!0,(u||h)&&(l=!0)),y&&(C?(o=o.add(C),s=O?s.add(f):s.delete(f)):(o=o.delete(f),s=s.delete(f)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const f=this.query.limitType==="F"?o.last():o.first();o=o.delete(f.key),s=s.delete(f.key),r.track({type:1,doc:f})}return{Xa:o,nu:r,Cs:l,mutatedKeys:s}}ru(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r,i){const s=this.Xa;this.Xa=e.Xa,this.mutatedKeys=e.mutatedKeys;const o=e.nu.wa();o.sort((f,v)=>function(C,b){const O=y=>{switch(y){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return J(20277,{Vt:y})}};return O(C)-O(b)}(f.type,v.type)||this.Za(f.doc,v.doc)),this.iu(r),i=i!=null&&i;const l=n&&!i?this.su():[],u=this.Ya.size===0&&this.current&&!i?1:0,h=u!==this.Ja;return this.Ja=u,o.length!==0||h?{snapshot:new Ci(this.query,e.Xa,s,o,e.mutatedKeys,u===0,h,!1,!!r&&r.resumeToken.approximateByteSize()>0),ou:l}:{ou:l}}Fa(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Xa:this.Xa,nu:new Yg,mutatedKeys:this.mutatedKeys,Cs:!1},!1)):{ou:[]}}_u(e){return!this.Ha.has(e)&&!!this.Xa.has(e)&&!this.Xa.get(e).hasLocalMutations}iu(e){e&&(e.addedDocuments.forEach(n=>this.Ha=this.Ha.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.Ha=this.Ha.delete(n)),this.current=e.current)}su(){if(!this.current)return[];const e=this.Ya;this.Ya=re(),this.Xa.forEach(r=>{this._u(r.key)&&(this.Ya=this.Ya.add(r.key))});const n=[];return e.forEach(r=>{this.Ya.has(r)||n.push(new mE(r))}),this.Ya.forEach(r=>{e.has(r)||n.push(new pE(r))}),n}au(e){this.Ha=e.$s,this.Ya=re();const n=this.tu(e.documents);return this.applyChanges(n,!0)}uu(){return Ci.fromInitialDocuments(this.query,this.Xa,this.mutatedKeys,this.Ja===0,this.hasCachedResults)}}const af="SyncEngine";class XP{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class JP{constructor(e){this.key=e,this.cu=!1}}class ZP{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.lu={},this.hu=new Lr(l=>F0(l),Ql),this.Pu=new Map,this.Tu=new Set,this.Iu=new we(Q.comparator),this.Eu=new Map,this.du=new Yd,this.Au={},this.Ru=new Map,this.Vu=Si.lr(),this.onlineState="Unknown",this.mu=void 0}get isPrimaryClient(){return this.mu===!0}}async function ek(t,e,n=!0){const r=EE(t);let i;const s=r.hu.get(e);return s?(r.sharedClientState.addLocalQueryTarget(s.targetId),i=s.view.uu()):i=await gE(r,e,n,!0),i}async function tk(t,e){const n=EE(t);await gE(n,e,!0,!1)}async function gE(t,e,n,r){const i=await SP(t.localStore,Vt(e)),s=i.targetId,o=t.sharedClientState.addLocalQueryTarget(s,n);let l;return r&&(l=await nk(t,e,s,o==="current",i.resumeToken)),t.isPrimaryClient&&n&&cE(t.remoteStore,i),l}async function nk(t,e,n,r,i){t.fu=(v,g,C)=>async function(O,y,w,I){let R=y.view.tu(w);R.Cs&&(R=await $g(O.localStore,y.query,!1).then(({documents:S})=>y.view.tu(S,R)));const N=I&&I.targetChanges.get(y.targetId),z=I&&I.targetMismatches.get(y.targetId)!=null,V=y.view.applyChanges(R,O.isPrimaryClient,N,z);return ey(O,y.targetId,V.ou),V.snapshot}(t,v,g,C);const s=await $g(t.localStore,e,!0),o=new YP(e,s.$s),l=o.tu(s.documents),u=Co.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),h=o.applyChanges(l,t.isPrimaryClient,u);ey(t,n,h.ou);const f=new XP(e,n,o);return t.hu.set(e,f),t.Pu.has(n)?t.Pu.get(n).push(e):t.Pu.set(n,[e]),h.snapshot}async function rk(t,e,n){const r=ne(t),i=r.hu.get(e),s=r.Pu.get(i.targetId);if(s.length>1)return r.Pu.set(i.targetId,s.filter(o=>!Ql(o,e))),void r.hu.delete(e);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(i.targetId),r.sharedClientState.isActiveQueryTarget(i.targetId)||await wh(r.localStore,i.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(i.targetId),n&&ef(r.remoteStore,i.targetId),Sh(r,i.targetId)}).catch(Hl)):(Sh(r,i.targetId),await wh(r.localStore,i.targetId,!0))}async function ik(t,e){const n=ne(t),r=n.hu.get(e),i=n.Pu.get(r.targetId);n.isPrimaryClient&&i.length===1&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),ef(n.remoteStore,r.targetId))}async function yE(t,e){const n=ne(t);try{const r=await TP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.Eu.get(s);o&&(pe(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1,22616),i.addedDocuments.size>0?o.cu=!0:i.modifiedDocuments.size>0?pe(o.cu,14607):i.removedDocuments.size>0&&(pe(o.cu,42227),o.cu=!1))}),await _E(n,r,e)}catch(r){await Hl(r)}}function Zg(t,e,n){const r=ne(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.hu.forEach((s,o)=>{const l=o.view.Fa(e);l.snapshot&&i.push(l.snapshot)}),function(o,l){const u=ne(o);u.onlineState=l;let h=!1;u.queries.forEach((f,v)=>{for(const g of v.Sa)g.Fa(l)&&(h=!0)}),h&&of(u)}(r.eventManager,e),i.length&&r.lu.Y_(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function sk(t,e,n){const r=ne(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Eu.get(e),s=i&&i.key;if(s){let o=new we(Q.comparator);o=o.insert(s,$e.newNoDocument(s,X.min()));const l=re().add(s),u=new Zl(X.min(),new Map,new we(Z),o,l);await yE(r,u),r.Iu=r.Iu.remove(s),r.Eu.delete(e),lf(r)}else await wh(r.localStore,e,!1).then(()=>Sh(r,e,n)).catch(Hl)}function Sh(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.Pu.get(e))t.hu.delete(r),n&&t.lu.gu(r,n);t.Pu.delete(e),t.isPrimaryClient&&t.du.Hr(e).forEach(r=>{t.du.containsKey(r)||vE(t,r)})}function vE(t,e){t.Tu.delete(e.path.canonicalString());const n=t.Iu.get(e);n!==null&&(ef(t.remoteStore,n),t.Iu=t.Iu.remove(e),t.Eu.delete(n),lf(t))}function ey(t,e,n){for(const r of n)r instanceof pE?(t.du.addReference(r.key,e),ok(t,r)):r instanceof mE?($(af,"Document no longer in limbo: "+r.key),t.du.removeReference(r.key,e),t.du.containsKey(r.key)||vE(t,r.key)):J(19791,{pu:r})}function ok(t,e){const n=e.key,r=n.path.canonicalString();t.Iu.get(n)||t.Tu.has(r)||($(af,"New document in limbo: "+n),t.Tu.add(r),lf(t))}function lf(t){for(;t.Tu.size>0&&t.Iu.size<t.maxConcurrentLimboResolutions;){const e=t.Tu.values().next().value;t.Tu.delete(e);const n=new Q(ye.fromString(e)),r=t.Vu.next();t.Eu.set(r,new JP(n)),t.Iu=t.Iu.insert(n,r),cE(t.remoteStore,new xn(Vt(U0(n.path)),r,"TargetPurposeLimboResolution",Wl.le))}}async function _E(t,e,n){const r=ne(t),i=[],s=[],o=[];r.hu.isEmpty()||(r.hu.forEach((l,u)=>{o.push(r.fu(u,e,n).then(h=>{var f;if((h||n)&&r.isPrimaryClient){const v=h?!h.fromCache:(f=n==null?void 0:n.targetChanges.get(u.targetId))===null||f===void 0?void 0:f.current;r.sharedClientState.updateQueryState(u.targetId,v?"current":"not-current")}if(h){i.push(h);const v=Jd.Rs(u.targetId,h);s.push(v)}}))}),await Promise.all(o),r.lu.Y_(i),await async function(u,h){const f=ne(u);try{await f.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>L.forEach(h,g=>L.forEach(g.ds,C=>f.persistence.referenceDelegate.addReference(v,g.targetId,C)).next(()=>L.forEach(g.As,C=>f.persistence.referenceDelegate.removeReference(v,g.targetId,C)))))}catch(v){if(!Mi(v))throw v;$(Zd,"Failed to update sequence numbers: "+v)}for(const v of h){const g=v.targetId;if(!v.fromCache){const C=f.xs.get(g),b=C.snapshotVersion,O=C.withLastLimboFreeSnapshotVersion(b);f.xs=f.xs.insert(g,O)}}}(r.localStore,s))}async function ak(t,e){const n=ne(t);if(!n.currentUser.isEqual(e)){$(af,"User change. New user:",e.toKey());const r=await oE(n.localStore,e);n.currentUser=e,function(s,o){s.Ru.forEach(l=>{l.forEach(u=>{u.reject(new K(F.CANCELLED,o))})}),s.Ru.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await _E(n,r.ks)}}function lk(t,e){const n=ne(t),r=n.Eu.get(e);if(r&&r.cu)return re().add(r.key);{let i=re();const s=n.Pu.get(e);if(!s)return i;for(const o of s){const l=n.hu.get(o);i=i.unionWith(l.view.eu)}return i}}function EE(t){const e=ne(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=yE.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=lk.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=sk.bind(null,e),e.lu.Y_=KP.bind(null,e.eventManager),e.lu.gu=GP.bind(null,e.eventManager),e}class El{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=lE(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Su(e),await this.persistence.start(),this.localStore=this.Du(e),this.gcScheduler=this.vu(e,this.localStore),this.indexBackfillerScheduler=this.Cu(e,this.localStore)}vu(e,n){return null}Cu(e,n){return null}Du(e){return wP(this.persistence,new vP,e.initialUser,this.serializer)}Su(e){return new sE(Xd.fi,this.serializer)}bu(e){return new CP}async terminate(){var e,n;(e=this.gcScheduler)===null||e===void 0||e.stop(),(n=this.indexBackfillerScheduler)===null||n===void 0||n.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}El.provider={build:()=>new El};class uk extends El{constructor(e){super(),this.cacheSizeBytes=e}vu(e,n){pe(this.persistence.referenceDelegate instanceof _l,46915);const r=this.persistence.referenceDelegate.garbageCollector;return new rP(r,e.asyncQueue,n)}Su(e){const n=this.cacheSizeBytes!==void 0?rt.withCacheSize(this.cacheSizeBytes):rt.DEFAULT;return new sE(r=>_l.fi(r,n),this.serializer)}}class xh{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Zg(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=ak.bind(null,this.syncEngine),await zP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return function(){return new HP}()}createDatastore(e){const n=lE(e.databaseInfo.databaseId),r=function(s){return new NP(s)}(e.databaseInfo);return function(s,o,l,u){return new LP(s,o,l,u)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return function(r,i,s,o,l){return new MP(r,i,s,o,l)}(this.localStore,this.datastore,e.asyncQueue,n=>Zg(this.syncEngine,n,0),function(){return qg.C()?new qg:new AP}())}createSyncEngine(e,n){return function(i,s,o,l,u,h,f){const v=new ZP(i,s,o,l,u,h);return f&&(v.mu=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}async terminate(){var e,n;await async function(i){const s=ne(i);$(xi,"RemoteStore shutting down."),s.da.add(5),await Ao(s),s.Ra.shutdown(),s.Va.set("Unknown")}(this.remoteStore),(e=this.datastore)===null||e===void 0||e.terminate(),(n=this.eventManager)===null||n===void 0||n.terminate()}}xh.provider={build:()=>new xh};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ck{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.Mu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.Mu(this.observer.error,e):on("Uncaught Error in snapshot listener:",e.toString()))}xu(){this.muted=!0}Mu(e,n){setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qn="FirestoreClient";class hk{constructor(e,n,r,i,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=ze.UNAUTHENTICATED,this.clientId=MA.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(r,async o=>{$(Qn,"Received user=",o.uid),await this.authCredentialListener(o),this.user=o}),this.appCheckCredentials.start(r,o=>($(Qn,"Received new app check token=",o),this.appCheckCredentialListener(o,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new gr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=fE(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function lc(t,e){t.asyncQueue.verifyOperationInProgress(),$(Qn,"Initializing OfflineComponentProvider");const n=t.configuration;await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await oE(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function ty(t,e){t.asyncQueue.verifyOperationInProgress();const n=await dk(t);$(Qn,"Initializing OnlineComponentProvider"),await e.initialize(n,t.configuration),t.setCredentialChangeListener(r=>Qg(e.remoteStore,r)),t.setAppCheckTokenChangeListener((r,i)=>Qg(e.remoteStore,i)),t._onlineComponents=e}async function dk(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){$(Qn,"Using user provided OfflineComponentProvider");try{await lc(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!function(i){return i.name==="FirebaseError"?i.code===F.FAILED_PRECONDITION||i.code===F.UNIMPLEMENTED:!(typeof DOMException<"u"&&i instanceof DOMException)||i.code===22||i.code===20||i.code===11}(n))throw n;Ei("Error using user provided cache. Falling back to memory cache: "+n),await lc(t,new El)}}else $(Qn,"Using default OfflineComponentProvider"),await lc(t,new uk(void 0));return t._offlineComponents}async function fk(t){return t._onlineComponents||(t._uninitializedComponentsProvider?($(Qn,"Using user provided OnlineComponentProvider"),await ty(t,t._uninitializedComponentsProvider._online)):($(Qn,"Using default OnlineComponentProvider"),await ty(t,new xh))),t._onlineComponents}async function pk(t){const e=await fk(t),n=e.eventManager;return n.onListen=ek.bind(null,e.syncEngine),n.onUnlisten=rk.bind(null,e.syncEngine),n.onFirstRemoteStoreListen=tk.bind(null,e.syncEngine),n.onLastRemoteStoreUnlisten=ik.bind(null,e.syncEngine),n}function mk(t,e,n={}){const r=new gr;return t.asyncQueue.enqueueAndForget(async()=>function(s,o,l,u,h){const f=new ck({next:g=>{f.xu(),o.enqueueAndForget(()=>qP(s,v)),g.fromCache&&u.source==="server"?h.reject(new K(F.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):h.resolve(g)},error:g=>h.reject(g)}),v=new QP(l,f,{includeMetadataChanges:!0,Qa:!0});return WP(s,v)}(await pk(t),t.asyncQueue,e,n,r)),r.promise}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wE(t){const e={};return t.timeoutSeconds!==void 0&&(e.timeoutSeconds=t.timeoutSeconds),e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ny=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gk(t,e,n){if(!n)throw new K(F.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function yk(t,e,n,r){if(e===!0&&r===!0)throw new K(F.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function ry(t){if(Q.isDocumentKey(t))throw new K(F.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function vk(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(r){return r.constructor?r.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":J(12329,{type:typeof t})}function Ch(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new K(F.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=vk(t);throw new K(F.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TE="firestore.googleapis.com",iy=!0;class sy{constructor(e){var n,r;if(e.host===void 0){if(e.ssl!==void 0)throw new K(F.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=TE,this.ssl=iy}else this.host=e.host,this.ssl=(n=e.ssl)!==null&&n!==void 0?n:iy;if(this.isUsingEmulator=e.emulatorOptions!==void 0,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=iE;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<tP)throw new K(F.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}yk("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=wE((r=e.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new K(F.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,e.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}class uf{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sy({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new K(F.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!=="notTerminated"}_setSettings(e){if(this._settingsFrozen)throw new K(F.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sy(e),this._emulatorOptions=e.emulatorOptions||{},e.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new kA;switch(r.type){case"firstParty":return new DA(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new K(F.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask==="notTerminated"&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){this._terminateTask==="notTerminated"?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(n){const r=ny.get(n);r&&($("ComponentProvider","Removing Datastore"),ny.delete(n),r.terminate())}(this),Promise.resolve()}}function _k(t,e,n,r={}){var i;t=Ch(t,uf);const s=br(e),o=t._getSettings(),l=Object.assign(Object.assign({},o),{emulatorOptions:t._getEmulatorOptions()}),u=`${e}:${n}`;s&&(Cd(`https://${u}`),Ad("Firestore",!0)),o.host!==TE&&o.host!==u&&Ei("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const h=Object.assign(Object.assign({},o),{host:u,ssl:s,emulatorOptions:r});if(!wr(h,l)&&(t._setSettings(h),r.mockUserToken)){let f,v;if(typeof r.mockUserToken=="string")f=r.mockUserToken,v=ze.MOCK_USER;else{f=N_(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const g=r.mockUserToken.sub||r.mockUserToken.user_id;if(!g)throw new K(F.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");v=new ze(g)}t._authCredentials=new NA(new S0(f,v))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new tu(this.firestore,e,this._query)}}class Ui{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new mi(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ui(this.firestore,e,this._key)}}class mi extends tu{constructor(e,n,r){super(e,n,U0(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ui(this.firestore,null,new Q(e))}withConverter(e){return new mi(this.firestore,e,this._path)}}function Ek(t,e,...n){if(t=ln(t),gk("collection","path",e),t instanceof uf){const r=ye.fromString(e,...n);return ry(r),new mi(t,null,r)}{if(!(t instanceof Ui||t instanceof mi))throw new K(F.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(ye.fromString(e,...n));return ry(r),new mi(t.firestore,null,r)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oy="AsyncQueue";class ay{constructor(e=Promise.resolve()){this.Ju=[],this.Yu=!1,this.Zu=[],this.Xu=null,this.ec=!1,this.tc=!1,this.nc=[],this.x_=new uE(this,"async_queue_retry"),this.rc=()=>{const r=ac();r&&$(oy,"Visibility state changed to "+r.visibilityState),this.x_.b_()},this.sc=e;const n=ac();n&&typeof n.addEventListener=="function"&&n.addEventListener("visibilitychange",this.rc)}get isShuttingDown(){return this.Yu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.oc(),this._c(e)}enterRestrictedMode(e){if(!this.Yu){this.Yu=!0,this.tc=e||!1;const n=ac();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.rc)}}enqueue(e){if(this.oc(),this.Yu)return new Promise(()=>{});const n=new gr;return this._c(()=>this.Yu&&this.tc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Ju.push(e),this.ac()))}async ac(){if(this.Ju.length!==0){try{await this.Ju[0](),this.Ju.shift(),this.x_.reset()}catch(e){if(!Mi(e))throw e;$(oy,"Operation failed with retryable error: "+e)}this.Ju.length>0&&this.x_.y_(()=>this.ac())}}_c(e){const n=this.sc.then(()=>(this.ec=!0,e().catch(r=>{throw this.Xu=r,this.ec=!1,on("INTERNAL UNHANDLED ERROR: ",ly(r)),r}).then(r=>(this.ec=!1,r))));return this.sc=n,n}enqueueAfterDelay(e,n,r){this.oc(),this.nc.indexOf(e)>-1&&(n=0);const i=sf.createAndSchedule(this,e,n,r,s=>this.uc(s));return this.Zu.push(i),i}oc(){this.Xu&&J(47125,{cc:ly(this.Xu)})}verifyOperationInProgress(){}async lc(){let e;do e=this.sc,await e;while(e!==this.sc)}hc(e){for(const n of this.Zu)if(n.timerId===e)return!0;return!1}Pc(e){return this.lc().then(()=>{this.Zu.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Zu)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.lc()})}Tc(e){this.nc.push(e)}uc(e){const n=this.Zu.indexOf(e);this.Zu.splice(n,1)}}function ly(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+`
`+t.stack),e}class IE extends uf{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new ay,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new ay(e),this._firestoreClient=void 0,await e}}}function wk(t,e){const n=typeof t=="object"?t:kd(),r=typeof t=="string"?t:e||pl,i=Fl(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=R_("firestore");s&&_k(i,...s)}return i}function Tk(t){if(t._terminated)throw new K(F.FAILED_PRECONDITION,"The client has already been terminated.");return t._firestoreClient||Ik(t),t._firestoreClient}function Ik(t){var e,n,r;const i=t._freezeSettings(),s=function(l,u,h,f){return new XA(l,u,h,f.host,f.ssl,f.experimentalForceLongPolling,f.experimentalAutoDetectLongPolling,wE(f.experimentalLongPollingOptions),f.useFetchStreams,f.isUsingEmulator)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,i);t._componentsProvider||!((n=i.localCache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._componentsProvider={_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider}),t._firestoreClient=new hk(t._authCredentials,t._appCheckCredentials,t._queue,s,t._componentsProvider&&function(l){const u=l==null?void 0:l._online.build();return{_offline:l==null?void 0:l._offline.build(u),_online:u}}(t._componentsProvider))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wl(Ve.fromBase64String(e))}catch(n){throw new K(F.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new wl(Ve.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new K(F.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ye(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sk{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new K(F.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new K(F.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return Z(this._lat,e._lat)||Z(this._long,e._long)}}/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xk{constructor(e){this._values=(e||[]).map(n=>n)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(r,i){if(r.length!==i.length)return!1;for(let s=0;s<r.length;++s)if(r[s]!==i[s])return!1;return!0}(this._values,e._values)}}const Ck=new RegExp("[~\\*/\\[\\]]");function Ak(t,e,n){if(e.search(Ck)>=0)throw uy(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new SE(...e.split("."))._internalPath}catch{throw uy(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function uy(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let l=`Function ${e}() called with invalid data`;n&&(l+=" (via `toFirestore()`)"),l+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new K(F.INVALID_ARGUMENT,l+t+u)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xE{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ui(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new Rk(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(CE("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class Rk extends xE{data(){return super.data()}}function CE(t,e){return typeof e=="string"?Ak(t,e):e instanceof SE?e._internalPath:e._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pk(t){if(t.limitType==="L"&&t.explicitOrderBy.length===0)throw new K(F.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class kk{convertValue(e,n="none"){switch(Kn(e)){case 0:return null;case 1:return e.booleanValue;case 2:return _e(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(qn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 11:return this.convertObject(e.mapValue,n);case 10:return this.convertVectorValue(e.mapValue);default:throw J(62114,{value:e})}}convertObject(e,n){return this.convertObjectMap(e.fields,n)}convertObjectMap(e,n="none"){const r={};return xo(e,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertVectorValue(e){var n,r,i;const s=(i=(r=(n=e.fields)===null||n===void 0?void 0:n[hh].arrayValue)===null||r===void 0?void 0:r.values)===null||i===void 0?void 0:i.map(o=>_e(o.doubleValue));return new xk(s)}convertGeoPoint(e){return new Sk(_e(e.latitude),_e(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=Kl(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oo(e));default:return null}}convertTimestamp(e){const n=Wn(e);return new ot(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=ye.fromString(e);pe(rE(r),9688,{name:e});const i=new ao(r.get(1),r.get(3)),s=new Q(r.popFirst(5));return i.isEqual(n)||on(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class Nk extends xE{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new Da(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(CE("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class Da extends Nk{data(e={}){return super.data(e)}}class bk{constructor(e,n,r,i){this._firestore=e,this._userDataWriter=n,this._snapshot=i,this.metadata=new da(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const e=[];return this.forEach(n=>e.push(n)),e}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(e,n){this._snapshot.docs.forEach(r=>{e.call(n,new Da(this._firestore,this._userDataWriter,r.key,r,new da(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const n=!!e.includeMetadataChanges;if(n&&this._snapshot.excludesMetadataChanges)throw new K(F.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===n||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(l=>{const u=new Da(i._firestore,i._userDataWriter,l.doc.key,l.doc,new da(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);return l.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(l=>s||l.type!==3).map(l=>{const u=new Da(i._firestore,i._userDataWriter,l.doc.key,l.doc,new da(i._snapshot.mutatedKeys.has(l.doc.key),i._snapshot.fromCache),i.query.converter);let h=-1,f=-1;return l.type!==0&&(h=o.indexOf(l.doc.key),o=o.delete(l.doc.key)),l.type!==1&&(o=o.add(l.doc),f=o.indexOf(l.doc.key)),{type:Ok(l.type),doc:u,oldIndex:h,newIndex:f}})}}(this,n),this._cachedChangesIncludeMetadataChanges=n),this._cachedChanges}}function Ok(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return J(61501,{type:t})}}class Dk extends kk{constructor(e){super(),this.firestore=e}convertBytes(e){return new wl(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ui(this.firestore,null,n)}}function Lk(t){t=Ch(t,tu);const e=Ch(t.firestore,IE),n=Tk(e),r=new Dk(e);return Pk(t._query),mk(n,t._query).then(i=>new bk(e,r,t,i))}(function(e,n=!0){(function(i){Vi=i})(Or),Tr(new $n("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),l=new IE(new bA(r.getProvider("auth-internal")),new LA(o,r.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new K(F.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ao(h.options.projectId,f)}(o,i),o);return s=Object.assign({useFetchStreams:n},s),l._setSettings(s),l},"PUBLIC").setMultipleInstances(!0)),Ot(fg,pg,e),Ot(fg,pg,"esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const AE="firebasestorage.googleapis.com",Vk="storageBucket",Mk=2*60*1e3,jk=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zt extends Bt{constructor(e,n,r=0){super(uc(e),`Firebase Storage: ${n} (${uc(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,zt.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return uc(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var Ut;(function(t){t.UNKNOWN="unknown",t.OBJECT_NOT_FOUND="object-not-found",t.BUCKET_NOT_FOUND="bucket-not-found",t.PROJECT_NOT_FOUND="project-not-found",t.QUOTA_EXCEEDED="quota-exceeded",t.UNAUTHENTICATED="unauthenticated",t.UNAUTHORIZED="unauthorized",t.UNAUTHORIZED_APP="unauthorized-app",t.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",t.INVALID_CHECKSUM="invalid-checksum",t.CANCELED="canceled",t.INVALID_EVENT_NAME="invalid-event-name",t.INVALID_URL="invalid-url",t.INVALID_DEFAULT_BUCKET="invalid-default-bucket",t.NO_DEFAULT_BUCKET="no-default-bucket",t.CANNOT_SLICE_BLOB="cannot-slice-blob",t.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",t.NO_DOWNLOAD_URL="no-download-url",t.INVALID_ARGUMENT="invalid-argument",t.INVALID_ARGUMENT_COUNT="invalid-argument-count",t.APP_DELETED="app-deleted",t.INVALID_ROOT_OPERATION="invalid-root-operation",t.INVALID_FORMAT="invalid-format",t.INTERNAL_ERROR="internal-error",t.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(Ut||(Ut={}));function uc(t){return"storage/"+t}function Uk(){const t="An unknown error occurred, please check the error payload for server response.";return new zt(Ut.UNKNOWN,t)}function Fk(){return new zt(Ut.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function Bk(){return new zt(Ut.CANCELED,"User canceled the upload/download.")}function zk(t){return new zt(Ut.INVALID_URL,"Invalid URL '"+t+"'.")}function $k(t){return new zt(Ut.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+t+"'.")}function cy(t){return new zt(Ut.INVALID_ARGUMENT,t)}function RE(){return new zt(Ut.APP_DELETED,"The Firebase app was deleted.")}function Hk(t){return new zt(Ut.INVALID_ROOT_OPERATION,"The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=St.makeFromUrl(e,n)}catch{return new St(e,"")}if(r.path==="")return r;throw $k(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(N){N.path.charAt(N.path.length-1)==="/"&&(N.path_=N.path_.slice(0,-1))}const o="(/(.*))?$",l=new RegExp("^gs://"+i+o,"i"),u={bucket:1,path:3};function h(N){N.path_=decodeURIComponent(N.path)}const f="v[A-Za-z0-9_]+",v=n.replace(/[.]/g,"\\."),g="(/([^?#]*).*)?$",C=new RegExp(`^https?://${v}/${f}/b/${i}/o${g}`,"i"),b={bucket:1,path:3},O=n===AE?"(?:storage.googleapis.com|storage.cloud.google.com)":n,y="([^?#]*)",w=new RegExp(`^https?://${O}/${i}/${y}`,"i"),R=[{regex:l,indices:u,postModify:s},{regex:C,indices:b,postModify:h},{regex:w,indices:{bucket:1,path:2},postModify:h}];for(let N=0;N<R.length;N++){const z=R[N],V=z.regex.exec(e);if(V){const S=V[z.indices.bucket];let _=V[z.indices.path];_||(_=""),r=new St(S,_),z.postModify(r);break}}if(r==null)throw zk(e);return r}}class Wk{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qk(t,e,n){let r=1,i=null,s=null,o=!1,l=0;function u(){return l===2}let h=!1;function f(...y){h||(h=!0,e.apply(null,y))}function v(y){i=setTimeout(()=>{i=null,t(C,u())},y)}function g(){s&&clearTimeout(s)}function C(y,...w){if(h){g();return}if(y){g(),f.call(null,y,...w);return}if(u()||o){g(),f.call(null,y,...w);return}r<64&&(r*=2);let R;l===1?(l=2,R=0):R=(r+Math.random())*1e3,v(R)}let b=!1;function O(y){b||(b=!0,g(),!h&&(i!==null?(y||(l=2),clearTimeout(i),v(0)):y||(l=1)))}return v(0),s=setTimeout(()=>{o=!0,O(!0)},n),O}function Kk(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gk(t){return t!==void 0}function hy(t,e,n,r){if(r<e)throw cy(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw cy(`Invalid value for '${t}'. Expected ${n} or less.`)}function Qk(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}var Tl;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(Tl||(Tl={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yk(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xk{constructor(e,n,r,i,s,o,l,u,h,f,v,g=!0,C=!1){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=l,this.errorCallback_=u,this.timeout_=h,this.progressCallback_=f,this.connectionFactory_=v,this.retry=g,this.isUsingEmulator=C,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((b,O)=>{this.resolve_=b,this.reject_=O,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new fa(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=l=>{const u=l.loaded,h=l.lengthComputable?l.total:-1;this.progressCallback_!==null&&this.progressCallback_(u,h)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.isUsingEmulator,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const l=s.getErrorCode()===Tl.NO_ERROR,u=s.getStatus();if(!l||Yk(u,this.additionalRetryCodes_)&&this.retry){const f=s.getErrorCode()===Tl.ABORT;r(!1,new fa(!1,null,f));return}const h=this.successCodes_.indexOf(u)!==-1;r(!0,new fa(h,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,l=i.connection;if(i.wasSuccessCode)try{const u=this.callback_(l,l.getResponse());Gk(u)?s(u):s()}catch(u){o(u)}else if(l!==null){const u=Uk();u.serverResponse=l.getErrorText(),this.errorCallback_?o(this.errorCallback_(l,u)):o(u)}else if(i.canceled){const u=this.appDelete_?RE():Bk();o(u)}else{const u=Fk();o(u)}};this.canceled_?n(!1,new fa(!1,null,!0)):this.backoffId_=qk(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&Kk(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class fa{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function Jk(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function Zk(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function eN(t,e){e&&(t["X-Firebase-GMPID"]=e)}function tN(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function nN(t,e,n,r,i,s,o=!0,l=!1){const u=Qk(t.urlParams),h=t.url+u,f=Object.assign({},t.headers);return eN(f,e),Jk(f,n),Zk(f,s),tN(f,r),new Xk(h,t.method,f,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o,l)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rN(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function iN(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e,n){this._service=e,n instanceof St?this._location=n:this._location=St.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Il(e,n)}get root(){const e=new St(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return iN(this._location.path)}get storage(){return this._service}get parent(){const e=rN(this._location.path);if(e===null)return null;const n=new St(this._location.bucket,e);return new Il(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw Hk(e)}}function dy(t,e){const n=e==null?void 0:e[Vk];return n==null?null:St.makeFromBucketSpec(n,t)}function sN(t,e,n,r={}){t.host=`${e}:${n}`;const i=br(e);i&&(Cd(`https://${t.host}/b`),Ad("Storage",!0)),t._isUsingEmulator=!0,t._protocol=i?"https":"http";const{mockUserToken:s}=r;s&&(t._overrideAuthToken=typeof s=="string"?s:N_(s,t.app.options.projectId))}class oN{constructor(e,n,r,i,s,o=!1){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._isUsingEmulator=o,this._bucket=null,this._host=AE,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Mk,this._maxUploadRetryTime=jk,this._requests=new Set,i!=null?this._bucket=St.makeFromBucketSpec(i,this._host):this._bucket=dy(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=St.makeFromBucketSpec(this._url,e):this._bucket=dy(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){hy("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){hy("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){if(ct(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Il(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new Wk(RE());{const o=nN(e,this._appId,r,i,n,this._firebaseVersion,s,this._isUsingEmulator);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const fy="@firebase/storage",py="0.13.13";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PE="storage";function aN(t=kd(),e){t=ln(t);const r=Fl(t,PE).getImmediate({identifier:e}),i=R_("storage");return i&&lN(r,...i),r}function lN(t,e,n,r={}){sN(t,e,n,r)}function uN(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new oN(n,r,i,e,Or)}function cN(){Tr(new $n(PE,uN,"PUBLIC").setMultipleInstances(!0)),Ot(fy,py,""),Ot(fy,py,"esm2017")}cN();const hN={apiKey:"demo-api-key",authDomain:"demo-project.firebaseapp.com",projectId:"demo-project",storageBucket:"demo-project.appspot.com",messagingSenderId:"123456789",appId:"1:123456789:web:abcdef123456789"};let pa=null,Ah=null,dN=null,fN=null;try{pa=D_(hN),Ah=wk(pa),dN=aN(pa),fN=Fd(pa)}catch{console.warn("Firebase initialization failed. Using mock services for development.")}const pN=async()=>{if(!Ah)return console.warn("Firestore not available. Returning mock data."),[];try{return(await Lk(Ek(Ah,"content"))).docs.map(e=>({id:e.id,...e.data()}))}catch(t){return console.warn("Error fetching content:",t),[]}};function mN(t,e){return console.warn("updateContent called but Firebase not properly configured"),Promise.resolve()}const gN=()=>{const[t,e]=j.useState([]),[n,r]=j.useState(!0),[i,s]=j.useState(null);j.useEffect(()=>{(async()=>{try{const u=await pN();e(u)}catch{s("Failed to load content")}finally{r(!1)}})()},[]);const o=async(l,u)=>{try{await mN(l,u),e(h=>h.map(f=>f.id===l?{...f,...u}:f))}catch{s("Failed to update content")}};return n?p.jsx("div",{children:"Loading..."}):i?p.jsx("div",{children:i}):p.jsxs("div",{className:"p-4",children:[p.jsx("h1",{className:"text-2xl font-bold",children:"Manage Content"}),p.jsx("ul",{className:"mt-4",children:t.map(l=>p.jsxs("li",{className:"mb-4",children:[p.jsx("h2",{className:"text-xl",children:l.title}),p.jsx("p",{children:l.description}),p.jsx("button",{onClick:()=>o(l.id,{title:"Updated Title",description:"Updated Description"}),className:"mt-2 bg-blue-500 text-white px-4 py-2 rounded",children:"Update"})]},l.id))})]})},yN=()=>p.jsx(dI,{children:p.jsxs("div",{className:"min-h-screen flex flex-col bg-gray-50",children:[p.jsx(gI,{}),p.jsx("main",{className:"flex-grow",children:p.jsxs(sI,{children:[p.jsx(tt,{path:"/",element:p.jsx(Mm,{})}),p.jsx(tt,{path:"/home",element:p.jsx(Mm,{})}),p.jsx(tt,{path:"/about",element:p.jsx(vI,{})}),p.jsx(tt,{path:"/services",element:p.jsx(EI,{})}),p.jsx(tt,{path:"/contact",element:p.jsx(TI,{})}),p.jsx(tt,{path:"/gallery",element:p.jsx(SI,{})}),p.jsx(tt,{path:"/login",element:p.jsx(TA,{})}),p.jsx(tt,{path:"/register",element:p.jsx(IA,{})}),p.jsx(tt,{path:"/admin",element:p.jsx(xA,{})}),p.jsx(tt,{path:"/admin/dashboard",element:p.jsx(CA,{})}),p.jsx(tt,{path:"/admin/users",element:p.jsx(AA,{})}),p.jsx(tt,{path:"/admin/content",element:p.jsx(gN,{})}),p.jsx(tt,{path:"*",element:p.jsx(SA,{})})]})}),p.jsx(yI,{})]})});mT.render(p.jsx(by.StrictMode,{children:p.jsx(yN,{})}),document.getElementById("root"));
//# sourceMappingURL=index-555473d7.js.map
