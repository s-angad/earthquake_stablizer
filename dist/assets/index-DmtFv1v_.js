(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function r(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function A0(s){return s&&s.__esModule&&Object.prototype.hasOwnProperty.call(s,"default")?s.default:s}var ku={exports:{}},Ja={},Bu={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cm;function Qx(){if(cm)return bt;cm=1;var s=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),f=Symbol.for("react.forward_ref"),h=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),x=Symbol.for("react.lazy"),S=Symbol.iterator;function g(k){return k===null||typeof k!="object"?null:(k=S&&k[S]||k["@@iterator"],typeof k=="function"?k:null)}var _={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,C={};function y(k,J,Le){this.props=k,this.context=J,this.refs=C,this.updater=Le||_}y.prototype.isReactComponent={},y.prototype.setState=function(k,J){if(typeof k!="object"&&typeof k!="function"&&k!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,k,J,"setState")},y.prototype.forceUpdate=function(k){this.updater.enqueueForceUpdate(this,k,"forceUpdate")};function v(){}v.prototype=y.prototype;function D(k,J,Le){this.props=k,this.context=J,this.refs=C,this.updater=Le||_}var U=D.prototype=new v;U.constructor=D,T(U,y.prototype),U.isPureReactComponent=!0;var R=Array.isArray,L=Object.prototype.hasOwnProperty,N={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function w(k,J,Le){var Xe,ze={},le=null,pe=null;if(J!=null)for(Xe in J.ref!==void 0&&(pe=J.ref),J.key!==void 0&&(le=""+J.key),J)L.call(J,Xe)&&!F.hasOwnProperty(Xe)&&(ze[Xe]=J[Xe]);var oe=arguments.length-2;if(oe===1)ze.children=Le;else if(1<oe){for(var De=Array(oe),Oe=0;Oe<oe;Oe++)De[Oe]=arguments[Oe+2];ze.children=De}if(k&&k.defaultProps)for(Xe in oe=k.defaultProps,oe)ze[Xe]===void 0&&(ze[Xe]=oe[Xe]);return{$$typeof:s,type:k,key:le,ref:pe,props:ze,_owner:N.current}}function P(k,J){return{$$typeof:s,type:k.type,key:J,ref:k.ref,props:k.props,_owner:k._owner}}function V(k){return typeof k=="object"&&k!==null&&k.$$typeof===s}function B(k){var J={"=":"=0",":":"=2"};return"$"+k.replace(/[=:]/g,function(Le){return J[Le]})}var j=/\/+/g;function re(k,J){return typeof k=="object"&&k!==null&&k.key!=null?B(""+k.key):J.toString(36)}function fe(k,J,Le,Xe,ze){var le=typeof k;(le==="undefined"||le==="boolean")&&(k=null);var pe=!1;if(k===null)pe=!0;else switch(le){case"string":case"number":pe=!0;break;case"object":switch(k.$$typeof){case s:case e:pe=!0}}if(pe)return pe=k,ze=ze(pe),k=Xe===""?"."+re(pe,0):Xe,R(ze)?(Le="",k!=null&&(Le=k.replace(j,"$&/")+"/"),fe(ze,J,Le,"",function(Oe){return Oe})):ze!=null&&(V(ze)&&(ze=P(ze,Le+(!ze.key||pe&&pe.key===ze.key?"":(""+ze.key).replace(j,"$&/")+"/")+k)),J.push(ze)),1;if(pe=0,Xe=Xe===""?".":Xe+":",R(k))for(var oe=0;oe<k.length;oe++){le=k[oe];var De=Xe+re(le,oe);pe+=fe(le,J,Le,De,ze)}else if(De=g(k),typeof De=="function")for(k=De.call(k),oe=0;!(le=k.next()).done;)le=le.value,De=Xe+re(le,oe++),pe+=fe(le,J,Le,De,ze);else if(le==="object")throw J=String(k),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(k).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return pe}function $(k,J,Le){if(k==null)return k;var Xe=[],ze=0;return fe(k,Xe,"","",function(le){return J.call(Le,le,ze++)}),Xe}function se(k){if(k._status===-1){var J=k._result;J=J(),J.then(function(Le){(k._status===0||k._status===-1)&&(k._status=1,k._result=Le)},function(Le){(k._status===0||k._status===-1)&&(k._status=2,k._result=Le)}),k._status===-1&&(k._status=0,k._result=J)}if(k._status===1)return k._result.default;throw k._result}var K={current:null},Y={transition:null},ie={ReactCurrentDispatcher:K,ReactCurrentBatchConfig:Y,ReactCurrentOwner:N};function ue(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:$,forEach:function(k,J,Le){$(k,function(){J.apply(this,arguments)},Le)},count:function(k){var J=0;return $(k,function(){J++}),J},toArray:function(k){return $(k,function(J){return J})||[]},only:function(k){if(!V(k))throw Error("React.Children.only expected to receive a single React element child.");return k}},bt.Component=y,bt.Fragment=t,bt.Profiler=o,bt.PureComponent=D,bt.StrictMode=r,bt.Suspense=h,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ie,bt.act=ue,bt.cloneElement=function(k,J,Le){if(k==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+k+".");var Xe=T({},k.props),ze=k.key,le=k.ref,pe=k._owner;if(J!=null){if(J.ref!==void 0&&(le=J.ref,pe=N.current),J.key!==void 0&&(ze=""+J.key),k.type&&k.type.defaultProps)var oe=k.type.defaultProps;for(De in J)L.call(J,De)&&!F.hasOwnProperty(De)&&(Xe[De]=J[De]===void 0&&oe!==void 0?oe[De]:J[De])}var De=arguments.length-2;if(De===1)Xe.children=Le;else if(1<De){oe=Array(De);for(var Oe=0;Oe<De;Oe++)oe[Oe]=arguments[Oe+2];Xe.children=oe}return{$$typeof:s,type:k.type,key:ze,ref:le,props:Xe,_owner:pe}},bt.createContext=function(k){return k={$$typeof:u,_currentValue:k,_currentValue2:k,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},k.Provider={$$typeof:l,_context:k},k.Consumer=k},bt.createElement=w,bt.createFactory=function(k){var J=w.bind(null,k);return J.type=k,J},bt.createRef=function(){return{current:null}},bt.forwardRef=function(k){return{$$typeof:f,render:k}},bt.isValidElement=V,bt.lazy=function(k){return{$$typeof:x,_payload:{_status:-1,_result:k},_init:se}},bt.memo=function(k,J){return{$$typeof:p,type:k,compare:J===void 0?null:J}},bt.startTransition=function(k){var J=Y.transition;Y.transition={};try{k()}finally{Y.transition=J}},bt.unstable_act=ue,bt.useCallback=function(k,J){return K.current.useCallback(k,J)},bt.useContext=function(k){return K.current.useContext(k)},bt.useDebugValue=function(){},bt.useDeferredValue=function(k){return K.current.useDeferredValue(k)},bt.useEffect=function(k,J){return K.current.useEffect(k,J)},bt.useId=function(){return K.current.useId()},bt.useImperativeHandle=function(k,J,Le){return K.current.useImperativeHandle(k,J,Le)},bt.useInsertionEffect=function(k,J){return K.current.useInsertionEffect(k,J)},bt.useLayoutEffect=function(k,J){return K.current.useLayoutEffect(k,J)},bt.useMemo=function(k,J){return K.current.useMemo(k,J)},bt.useReducer=function(k,J,Le){return K.current.useReducer(k,J,Le)},bt.useRef=function(k){return K.current.useRef(k)},bt.useState=function(k){return K.current.useState(k)},bt.useSyncExternalStore=function(k,J,Le){return K.current.useSyncExternalStore(k,J,Le)},bt.useTransition=function(){return K.current.useTransition()},bt.version="18.3.1",bt}var um;function Mf(){return um||(um=1,Bu.exports=Qx()),Bu.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dm;function ev(){if(dm)return Ja;dm=1;var s=Mf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,o=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(f,h,p){var x,S={},g=null,_=null;p!==void 0&&(g=""+p),h.key!==void 0&&(g=""+h.key),h.ref!==void 0&&(_=h.ref);for(x in h)r.call(h,x)&&!l.hasOwnProperty(x)&&(S[x]=h[x]);if(f&&f.defaultProps)for(x in h=f.defaultProps,h)S[x]===void 0&&(S[x]=h[x]);return{$$typeof:e,type:f,key:g,ref:_,props:S,_owner:o.current}}return Ja.Fragment=t,Ja.jsx=u,Ja.jsxs=u,Ja}var fm;function tv(){return fm||(fm=1,ku.exports=ev()),ku.exports}var M=tv(),tt=Mf();const R0=A0(tt);var _l={},zu={exports:{}},qn={},Vu={exports:{}},Hu={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hm;function nv(){return hm||(hm=1,(function(s){function e(Y,ie){var ue=Y.length;Y.push(ie);e:for(;0<ue;){var k=ue-1>>>1,J=Y[k];if(0<o(J,ie))Y[k]=ie,Y[ue]=J,ue=k;else break e}}function t(Y){return Y.length===0?null:Y[0]}function r(Y){if(Y.length===0)return null;var ie=Y[0],ue=Y.pop();if(ue!==ie){Y[0]=ue;e:for(var k=0,J=Y.length,Le=J>>>1;k<Le;){var Xe=2*(k+1)-1,ze=Y[Xe],le=Xe+1,pe=Y[le];if(0>o(ze,ue))le<J&&0>o(pe,ze)?(Y[k]=pe,Y[le]=ue,k=le):(Y[k]=ze,Y[Xe]=ue,k=Xe);else if(le<J&&0>o(pe,ue))Y[k]=pe,Y[le]=ue,k=le;else break e}}return ie}function o(Y,ie){var ue=Y.sortIndex-ie.sortIndex;return ue!==0?ue:Y.id-ie.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;s.unstable_now=function(){return l.now()}}else{var u=Date,f=u.now();s.unstable_now=function(){return u.now()-f}}var h=[],p=[],x=1,S=null,g=3,_=!1,T=!1,C=!1,y=typeof setTimeout=="function"?setTimeout:null,v=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function U(Y){for(var ie=t(p);ie!==null;){if(ie.callback===null)r(p);else if(ie.startTime<=Y)r(p),ie.sortIndex=ie.expirationTime,e(h,ie);else break;ie=t(p)}}function R(Y){if(C=!1,U(Y),!T)if(t(h)!==null)T=!0,se(L);else{var ie=t(p);ie!==null&&K(R,ie.startTime-Y)}}function L(Y,ie){T=!1,C&&(C=!1,v(w),w=-1),_=!0;var ue=g;try{for(U(ie),S=t(h);S!==null&&(!(S.expirationTime>ie)||Y&&!B());){var k=S.callback;if(typeof k=="function"){S.callback=null,g=S.priorityLevel;var J=k(S.expirationTime<=ie);ie=s.unstable_now(),typeof J=="function"?S.callback=J:S===t(h)&&r(h),U(ie)}else r(h);S=t(h)}if(S!==null)var Le=!0;else{var Xe=t(p);Xe!==null&&K(R,Xe.startTime-ie),Le=!1}return Le}finally{S=null,g=ue,_=!1}}var N=!1,F=null,w=-1,P=5,V=-1;function B(){return!(s.unstable_now()-V<P)}function j(){if(F!==null){var Y=s.unstable_now();V=Y;var ie=!0;try{ie=F(!0,Y)}finally{ie?re():(N=!1,F=null)}}else N=!1}var re;if(typeof D=="function")re=function(){D(j)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,$=fe.port2;fe.port1.onmessage=j,re=function(){$.postMessage(null)}}else re=function(){y(j,0)};function se(Y){F=Y,N||(N=!0,re())}function K(Y,ie){w=y(function(){Y(s.unstable_now())},ie)}s.unstable_IdlePriority=5,s.unstable_ImmediatePriority=1,s.unstable_LowPriority=4,s.unstable_NormalPriority=3,s.unstable_Profiling=null,s.unstable_UserBlockingPriority=2,s.unstable_cancelCallback=function(Y){Y.callback=null},s.unstable_continueExecution=function(){T||_||(T=!0,se(L))},s.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<Y?Math.floor(1e3/Y):5},s.unstable_getCurrentPriorityLevel=function(){return g},s.unstable_getFirstCallbackNode=function(){return t(h)},s.unstable_next=function(Y){switch(g){case 1:case 2:case 3:var ie=3;break;default:ie=g}var ue=g;g=ie;try{return Y()}finally{g=ue}},s.unstable_pauseExecution=function(){},s.unstable_requestPaint=function(){},s.unstable_runWithPriority=function(Y,ie){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var ue=g;g=Y;try{return ie()}finally{g=ue}},s.unstable_scheduleCallback=function(Y,ie,ue){var k=s.unstable_now();switch(typeof ue=="object"&&ue!==null?(ue=ue.delay,ue=typeof ue=="number"&&0<ue?k+ue:k):ue=k,Y){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=ue+J,Y={id:x++,callback:ie,priorityLevel:Y,startTime:ue,expirationTime:J,sortIndex:-1},ue>k?(Y.sortIndex=ue,e(p,Y),t(h)===null&&Y===t(p)&&(C?(v(w),w=-1):C=!0,K(R,ue-k))):(Y.sortIndex=J,e(h,Y),T||_||(T=!0,se(L))),Y},s.unstable_shouldYield=B,s.unstable_wrapCallback=function(Y){var ie=g;return function(){var ue=g;g=ie;try{return Y.apply(this,arguments)}finally{g=ue}}}})(Hu)),Hu}var pm;function iv(){return pm||(pm=1,Vu.exports=nv()),Vu.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var mm;function rv(){if(mm)return qn;mm=1;var s=Mf(),e=iv();function t(n){for(var i="https://reactjs.org/docs/error-decoder.html?invariant="+n,a=1;a<arguments.length;a++)i+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+n+"; visit "+i+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,o={};function l(n,i){u(n,i),u(n+"Capture",i)}function u(n,i){for(o[n]=i,n=0;n<i.length;n++)r.add(i[n])}var f=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),h=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,x={},S={};function g(n){return h.call(S,n)?!0:h.call(x,n)?!1:p.test(n)?S[n]=!0:(x[n]=!0,!1)}function _(n,i,a,c){if(a!==null&&a.type===0)return!1;switch(typeof i){case"function":case"symbol":return!0;case"boolean":return c?!1:a!==null?!a.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,i,a,c){if(i===null||typeof i>"u"||_(n,i,a,c))return!0;if(c)return!1;if(a!==null)switch(a.type){case 3:return!i;case 4:return i===!1;case 5:return isNaN(i);case 6:return isNaN(i)||1>i}return!1}function C(n,i,a,c,d,m,b){this.acceptsBooleans=i===2||i===3||i===4,this.attributeName=c,this.attributeNamespace=d,this.mustUseProperty=a,this.propertyName=n,this.type=i,this.sanitizeURL=m,this.removeEmptyString=b}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new C(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var i=n[0];y[i]=new C(i,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new C(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new C(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new C(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new C(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new C(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new C(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new C(n,5,!1,n.toLowerCase(),null,!1,!1)});var v=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var i=n.replace(v,D);y[i]=new C(i,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var i=n.replace(v,D);y[i]=new C(i,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var i=n.replace(v,D);y[i]=new C(i,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new C("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new C(n,1,!1,n.toLowerCase(),null,!0,!0)});function U(n,i,a,c){var d=y.hasOwnProperty(i)?y[i]:null;(d!==null?d.type!==0:c||!(2<i.length)||i[0]!=="o"&&i[0]!=="O"||i[1]!=="n"&&i[1]!=="N")&&(T(i,a,d,c)&&(a=null),c||d===null?g(i)&&(a===null?n.removeAttribute(i):n.setAttribute(i,""+a)):d.mustUseProperty?n[d.propertyName]=a===null?d.type===3?!1:"":a:(i=d.attributeName,c=d.attributeNamespace,a===null?n.removeAttribute(i):(d=d.type,a=d===3||d===4&&a===!0?"":""+a,c?n.setAttributeNS(c,i,a):n.setAttribute(i,a))))}var R=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),N=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),P=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),B=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),re=Symbol.for("react.suspense"),fe=Symbol.for("react.suspense_list"),$=Symbol.for("react.memo"),se=Symbol.for("react.lazy"),K=Symbol.for("react.offscreen"),Y=Symbol.iterator;function ie(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var ue=Object.assign,k;function J(n){if(k===void 0)try{throw Error()}catch(a){var i=a.stack.trim().match(/\n( *(at )?)/);k=i&&i[1]||""}return`
`+k+n}var Le=!1;function Xe(n,i){if(!n||Le)return"";Le=!0;var a=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(i)if(i=function(){throw Error()},Object.defineProperty(i.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(i,[])}catch(de){var c=de}Reflect.construct(n,[],i)}else{try{i.call()}catch(de){c=de}n.call(i.prototype)}else{try{throw Error()}catch(de){c=de}n()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var d=de.stack.split(`
`),m=c.stack.split(`
`),b=d.length-1,O=m.length-1;1<=b&&0<=O&&d[b]!==m[O];)O--;for(;1<=b&&0<=O;b--,O--)if(d[b]!==m[O]){if(b!==1||O!==1)do if(b--,O--,0>O||d[b]!==m[O]){var z=`
`+d[b].replace(" at new "," at ");return n.displayName&&z.includes("<anonymous>")&&(z=z.replace("<anonymous>",n.displayName)),z}while(1<=b&&0<=O);break}}}finally{Le=!1,Error.prepareStackTrace=a}return(n=n?n.displayName||n.name:"")?J(n):""}function ze(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Xe(n.type,!1),n;case 11:return n=Xe(n.type.render,!1),n;case 1:return n=Xe(n.type,!0),n;default:return""}}function le(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case F:return"Fragment";case N:return"Portal";case P:return"Profiler";case w:return"StrictMode";case re:return"Suspense";case fe:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case j:var i=n.render;return n=n.displayName,n||(n=i.displayName||i.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case $:return i=n.displayName||null,i!==null?i:le(n.type)||"Memo";case se:i=n._payload,n=n._init;try{return le(n(i))}catch{}}return null}function pe(n){var i=n.type;switch(n.tag){case 24:return"Cache";case 9:return(i.displayName||"Context")+".Consumer";case 10:return(i._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=i.render,n=n.displayName||n.name||"",i.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return i;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return le(i);case 8:return i===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i}return null}function oe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function De(n){var i=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(i==="checkbox"||i==="radio")}function Oe(n){var i=De(n)?"checked":"value",a=Object.getOwnPropertyDescriptor(n.constructor.prototype,i),c=""+n[i];if(!n.hasOwnProperty(i)&&typeof a<"u"&&typeof a.get=="function"&&typeof a.set=="function"){var d=a.get,m=a.set;return Object.defineProperty(n,i,{configurable:!0,get:function(){return d.call(this)},set:function(b){c=""+b,m.call(this,b)}}),Object.defineProperty(n,i,{enumerable:a.enumerable}),{getValue:function(){return c},setValue:function(b){c=""+b},stopTracking:function(){n._valueTracker=null,delete n[i]}}}}function je(n){n._valueTracker||(n._valueTracker=Oe(n))}function Rt(n){if(!n)return!1;var i=n._valueTracker;if(!i)return!0;var a=i.getValue(),c="";return n&&(c=De(n)?n.checked?"true":"false":n.value),n=c,n!==a?(i.setValue(n),!0):!1}function nt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function ht(n,i){var a=i.checked;return ue({},i,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:a??n._wrapperState.initialChecked})}function vt(n,i){var a=i.defaultValue==null?"":i.defaultValue,c=i.checked!=null?i.checked:i.defaultChecked;a=oe(i.value!=null?i.value:a),n._wrapperState={initialChecked:c,initialValue:a,controlled:i.type==="checkbox"||i.type==="radio"?i.checked!=null:i.value!=null}}function dt(n,i){i=i.checked,i!=null&&U(n,"checked",i,!1)}function lt(n,i){dt(n,i);var a=oe(i.value),c=i.type;if(a!=null)c==="number"?(a===0&&n.value===""||n.value!=a)&&(n.value=""+a):n.value!==""+a&&(n.value=""+a);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}i.hasOwnProperty("value")?Tt(n,i.type,a):i.hasOwnProperty("defaultValue")&&Tt(n,i.type,oe(i.defaultValue)),i.checked==null&&i.defaultChecked!=null&&(n.defaultChecked=!!i.defaultChecked)}function ut(n,i,a){if(i.hasOwnProperty("value")||i.hasOwnProperty("defaultValue")){var c=i.type;if(!(c!=="submit"&&c!=="reset"||i.value!==void 0&&i.value!==null))return;i=""+n._wrapperState.initialValue,a||i===n.value||(n.value=i),n.defaultValue=i}a=n.name,a!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,a!==""&&(n.name=a)}function Tt(n,i,a){(i!=="number"||nt(n.ownerDocument)!==n)&&(a==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+a&&(n.defaultValue=""+a))}var Nt=Array.isArray;function xt(n,i,a,c){if(n=n.options,i){i={};for(var d=0;d<a.length;d++)i["$"+a[d]]=!0;for(a=0;a<n.length;a++)d=i.hasOwnProperty("$"+n[a].value),n[a].selected!==d&&(n[a].selected=d),d&&c&&(n[a].defaultSelected=!0)}else{for(a=""+oe(a),i=null,d=0;d<n.length;d++){if(n[d].value===a){n[d].selected=!0,c&&(n[d].defaultSelected=!0);return}i!==null||n[d].disabled||(i=n[d])}i!==null&&(i.selected=!0)}}function St(n,i){if(i.dangerouslySetInnerHTML!=null)throw Error(t(91));return ue({},i,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,i){var a=i.value;if(a==null){if(a=i.children,i=i.defaultValue,a!=null){if(i!=null)throw Error(t(92));if(Nt(a)){if(1<a.length)throw Error(t(93));a=a[0]}i=a}i==null&&(i=""),a=i}n._wrapperState={initialValue:oe(a)}}function Yt(n,i){var a=oe(i.value),c=oe(i.defaultValue);a!=null&&(a=""+a,a!==n.value&&(n.value=a),i.defaultValue==null&&n.defaultValue!==a&&(n.defaultValue=a)),c!=null&&(n.defaultValue=""+c)}function Mt(n){var i=n.textContent;i===n._wrapperState.initialValue&&i!==""&&i!==null&&(n.value=i)}function I(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,i){return n==null||n==="http://www.w3.org/1999/xhtml"?I(i):n==="http://www.w3.org/2000/svg"&&i==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Z,Q=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(i,a,c,d){MSApp.execUnsafeLocalFunction(function(){return n(i,a,c,d)})}:n})(function(n,i){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=i;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+i.valueOf().toString()+"</svg>",i=Z.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;i.firstChild;)n.appendChild(i.firstChild)}});function he(n,i){if(i){var a=n.firstChild;if(a&&a===n.lastChild&&a.nodeType===3){a.nodeValue=i;return}}n.textContent=i}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(n){Ce.forEach(function(i){i=i+n.charAt(0).toUpperCase()+n.substring(1),Me[i]=Me[n]})});function me(n,i,a){return i==null||typeof i=="boolean"||i===""?"":a||typeof i!="number"||i===0||Me.hasOwnProperty(n)&&Me[n]?(""+i).trim():i+"px"}function xe(n,i){n=n.style;for(var a in i)if(i.hasOwnProperty(a)){var c=a.indexOf("--")===0,d=me(a,i[a],c);a==="float"&&(a="cssFloat"),c?n.setProperty(a,d):n[a]=d}}var Pe=ue({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Fe(n,i){if(i){if(Pe[n]&&(i.children!=null||i.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(i.dangerouslySetInnerHTML!=null){if(i.children!=null)throw Error(t(60));if(typeof i.dangerouslySetInnerHTML!="object"||!("__html"in i.dangerouslySetInnerHTML))throw Error(t(61))}if(i.style!=null&&typeof i.style!="object")throw Error(t(62))}}function Ie(n,i){if(n.indexOf("-")===-1)return typeof i.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function Ke(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var et=null,st=null,H=null;function Ae(n){if(n=Fa(n)){if(typeof et!="function")throw Error(t(280));var i=n.stateNode;i&&(i=Do(i),et(n.stateNode,n.type,i))}}function ge(n){st?H?H.push(n):H=[n]:st=n}function Ne(){if(st){var n=st,i=H;if(H=st=null,Ae(n),i)for(n=0;n<i.length;n++)Ae(i[n])}}function we(n,i){return n(i)}function ve(){}var We=!1;function He(n,i,a){if(We)return n(i,a);We=!0;try{return we(n,i,a)}finally{We=!1,(st!==null||H!==null)&&(ve(),Ne())}}function kt(n,i){var a=n.stateNode;if(a===null)return null;var c=Do(a);if(c===null)return null;a=c[i];e:switch(i){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(a&&typeof a!="function")throw Error(t(231,i,typeof a));return a}var Dt=!1;if(f)try{var an={};Object.defineProperty(an,"passive",{get:function(){Dt=!0}}),window.addEventListener("test",an,an),window.removeEventListener("test",an,an)}catch{Dt=!1}function Un(n,i,a,c,d,m,b,O,z){var de=Array.prototype.slice.call(arguments,3);try{i.apply(a,de)}catch(ye){this.onError(ye)}}var Yi=!1,qi=null,$i=!1,Ki=null,ya={onError:function(n){Yi=!0,qi=n}};function As(n,i,a,c,d,m,b,O,z){Yi=!1,qi=null,Un.apply(ya,arguments)}function Jr(n,i,a,c,d,m,b,O,z){if(As.apply(this,arguments),Yi){if(Yi){var de=qi;Yi=!1,qi=null}else throw Error(t(198));$i||($i=!0,Ki=de)}}function fn(n){var i=n,a=n;if(n.alternate)for(;i.return;)i=i.return;else{n=i;do i=n,(i.flags&4098)!==0&&(a=i.return),n=i.return;while(n)}return i.tag===3?a:null}function Zi(n){if(n.tag===13){var i=n.memoizedState;if(i===null&&(n=n.alternate,n!==null&&(i=n.memoizedState)),i!==null)return i.dehydrated}return null}function _r(n){if(fn(n)!==n)throw Error(t(188))}function Qr(n){var i=n.alternate;if(!i){if(i=fn(n),i===null)throw Error(t(188));return i!==n?null:n}for(var a=n,c=i;;){var d=a.return;if(d===null)break;var m=d.alternate;if(m===null){if(c=d.return,c!==null){a=c;continue}break}if(d.child===m.child){for(m=d.child;m;){if(m===a)return _r(d),n;if(m===c)return _r(d),i;m=m.sibling}throw Error(t(188))}if(a.return!==c.return)a=d,c=m;else{for(var b=!1,O=d.child;O;){if(O===a){b=!0,a=d,c=m;break}if(O===c){b=!0,c=d,a=m;break}O=O.sibling}if(!b){for(O=m.child;O;){if(O===a){b=!0,a=m,c=d;break}if(O===c){b=!0,c=m,a=d;break}O=O.sibling}if(!b)throw Error(t(189))}}if(a.alternate!==c)throw Error(t(190))}if(a.tag!==3)throw Error(t(188));return a.stateNode.current===a?n:i}function Ni(n){return n=Qr(n),n!==null?yr(n):null}function yr(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var i=yr(n);if(i!==null)return i;n=n.sibling}return null}var Pi=e.unstable_scheduleCallback,Sr=e.unstable_cancelCallback,It=e.unstable_shouldYield,qt=e.unstable_requestPaint,Ct=e.unstable_now,zn=e.unstable_getCurrentPriorityLevel,gi=e.unstable_ImmediatePriority,A=e.unstable_UserBlockingPriority,q=e.unstable_NormalPriority,ce=e.unstable_LowPriority,ne=e.unstable_IdlePriority,ee=null,Ee=null;function Ve(n){if(Ee&&typeof Ee.onCommitFiberRoot=="function")try{Ee.onCommitFiberRoot(ee,n,void 0,(n.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:pt,qe=Math.log,Qe=Math.LN2;function pt(n){return n>>>=0,n===0?32:31-(qe(n)/Qe|0)|0}var mt=64,Ze=4194304;function Lt(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Wt(n,i){var a=n.pendingLanes;if(a===0)return 0;var c=0,d=n.suspendedLanes,m=n.pingedLanes,b=a&268435455;if(b!==0){var O=b&~d;O!==0?c=Lt(O):(m&=b,m!==0&&(c=Lt(m)))}else b=a&~d,b!==0?c=Lt(b):m!==0&&(c=Lt(m));if(c===0)return 0;if(i!==0&&i!==c&&(i&d)===0&&(d=c&-c,m=i&-i,d>=m||d===16&&(m&4194240)!==0))return i;if((c&4)!==0&&(c|=a&16),i=n.entangledLanes,i!==0)for(n=n.entanglements,i&=c;0<i;)a=31-be(i),d=1<<a,c|=n[a],i&=~d;return c}function Qt(n,i){switch(n){case 1:case 2:case 4:return i+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function zt(n,i){for(var a=n.suspendedLanes,c=n.pingedLanes,d=n.expirationTimes,m=n.pendingLanes;0<m;){var b=31-be(m),O=1<<b,z=d[b];z===-1?((O&a)===0||(O&c)!==0)&&(d[b]=Qt(O,i)):z<=i&&(n.expiredLanes|=O),m&=~O}}function cn(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function ke(){var n=mt;return mt<<=1,(mt&4194240)===0&&(mt=64),n}function Sn(n){for(var i=[],a=0;31>a;a++)i.push(n);return i}function Et(n,i,a){n.pendingLanes|=i,i!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,i=31-be(i),n[i]=a}function Vn(n,i){var a=n.pendingLanes&~i;n.pendingLanes=i,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=i,n.mutableReadLanes&=i,n.entangledLanes&=i,i=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<a;){var d=31-be(a),m=1<<d;i[d]=0,c[d]=-1,n[d]=-1,a&=~m}}function Hn(n,i){var a=n.entangledLanes|=i;for(n=n.entanglements;a;){var c=31-be(a),d=1<<c;d&i|n[c]&i&&(n[c]|=i),a&=~d}}var wt=0;function Ji(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Bt,$t,xi,Vt,vi,Ii=!1,es=[],Mr=null,Er=null,Tr=null,Sa=new Map,Ma=new Map,wr=[],Sg="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function jf(n,i){switch(n){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Er=null;break;case"mouseover":case"mouseout":Tr=null;break;case"pointerover":case"pointerout":Sa.delete(i.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ma.delete(i.pointerId)}}function Ea(n,i,a,c,d,m){return n===null||n.nativeEvent!==m?(n={blockedOn:i,domEventName:a,eventSystemFlags:c,nativeEvent:m,targetContainers:[d]},i!==null&&(i=Fa(i),i!==null&&$t(i)),n):(n.eventSystemFlags|=c,i=n.targetContainers,d!==null&&i.indexOf(d)===-1&&i.push(d),n)}function Mg(n,i,a,c,d){switch(i){case"focusin":return Mr=Ea(Mr,n,i,a,c,d),!0;case"dragenter":return Er=Ea(Er,n,i,a,c,d),!0;case"mouseover":return Tr=Ea(Tr,n,i,a,c,d),!0;case"pointerover":var m=d.pointerId;return Sa.set(m,Ea(Sa.get(m)||null,n,i,a,c,d)),!0;case"gotpointercapture":return m=d.pointerId,Ma.set(m,Ea(Ma.get(m)||null,n,i,a,c,d)),!0}return!1}function Yf(n){var i=ts(n.target);if(i!==null){var a=fn(i);if(a!==null){if(i=a.tag,i===13){if(i=Zi(a),i!==null){n.blockedOn=i,vi(n.priority,function(){xi(a)});return}}else if(i===3&&a.stateNode.current.memoizedState.isDehydrated){n.blockedOn=a.tag===3?a.stateNode.containerInfo:null;return}}}n.blockedOn=null}function yo(n){if(n.blockedOn!==null)return!1;for(var i=n.targetContainers;0<i.length;){var a=dc(n.domEventName,n.eventSystemFlags,i[0],n.nativeEvent);if(a===null){a=n.nativeEvent;var c=new a.constructor(a.type,a);Re=c,a.target.dispatchEvent(c),Re=null}else return i=Fa(a),i!==null&&$t(i),n.blockedOn=a,!1;i.shift()}return!0}function qf(n,i,a){yo(n)&&a.delete(i)}function Eg(){Ii=!1,Mr!==null&&yo(Mr)&&(Mr=null),Er!==null&&yo(Er)&&(Er=null),Tr!==null&&yo(Tr)&&(Tr=null),Sa.forEach(qf),Ma.forEach(qf)}function Ta(n,i){n.blockedOn===i&&(n.blockedOn=null,Ii||(Ii=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Eg)))}function wa(n){function i(d){return Ta(d,n)}if(0<es.length){Ta(es[0],n);for(var a=1;a<es.length;a++){var c=es[a];c.blockedOn===n&&(c.blockedOn=null)}}for(Mr!==null&&Ta(Mr,n),Er!==null&&Ta(Er,n),Tr!==null&&Ta(Tr,n),Sa.forEach(i),Ma.forEach(i),a=0;a<wr.length;a++)c=wr[a],c.blockedOn===n&&(c.blockedOn=null);for(;0<wr.length&&(a=wr[0],a.blockedOn===null);)Yf(a),a.blockedOn===null&&wr.shift()}var Rs=R.ReactCurrentBatchConfig,So=!0;function Tg(n,i,a,c){var d=wt,m=Rs.transition;Rs.transition=null;try{wt=1,uc(n,i,a,c)}finally{wt=d,Rs.transition=m}}function wg(n,i,a,c){var d=wt,m=Rs.transition;Rs.transition=null;try{wt=4,uc(n,i,a,c)}finally{wt=d,Rs.transition=m}}function uc(n,i,a,c){if(So){var d=dc(n,i,a,c);if(d===null)Rc(n,i,c,Mo,a),jf(n,c);else if(Mg(d,n,i,a,c))c.stopPropagation();else if(jf(n,c),i&4&&-1<Sg.indexOf(n)){for(;d!==null;){var m=Fa(d);if(m!==null&&Bt(m),m=dc(n,i,a,c),m===null&&Rc(n,i,c,Mo,a),m===d)break;d=m}d!==null&&c.stopPropagation()}else Rc(n,i,c,null,a)}}var Mo=null;function dc(n,i,a,c){if(Mo=null,n=Ke(c),n=ts(n),n!==null)if(i=fn(n),i===null)n=null;else if(a=i.tag,a===13){if(n=Zi(i),n!==null)return n;n=null}else if(a===3){if(i.stateNode.current.memoizedState.isDehydrated)return i.tag===3?i.stateNode.containerInfo:null;n=null}else i!==n&&(n=null);return Mo=n,null}function $f(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(zn()){case gi:return 1;case A:return 4;case q:case ce:return 16;case ne:return 536870912;default:return 16}default:return 16}}var br=null,fc=null,Eo=null;function Kf(){if(Eo)return Eo;var n,i=fc,a=i.length,c,d="value"in br?br.value:br.textContent,m=d.length;for(n=0;n<a&&i[n]===d[n];n++);var b=a-n;for(c=1;c<=b&&i[a-c]===d[m-c];c++);return Eo=d.slice(n,1<c?1-c:void 0)}function To(n){var i=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&i===13&&(n=13)):n=i,n===10&&(n=13),32<=n||n===13?n:0}function wo(){return!0}function Zf(){return!1}function Qn(n){function i(a,c,d,m,b){this._reactName=a,this._targetInst=d,this.type=c,this.nativeEvent=m,this.target=b,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(a=n[O],this[O]=a?a(m):m[O]);return this.isDefaultPrevented=(m.defaultPrevented!=null?m.defaultPrevented:m.returnValue===!1)?wo:Zf,this.isPropagationStopped=Zf,this}return ue(i.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():typeof a.returnValue!="unknown"&&(a.returnValue=!1),this.isDefaultPrevented=wo)},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():typeof a.cancelBubble!="unknown"&&(a.cancelBubble=!0),this.isPropagationStopped=wo)},persist:function(){},isPersistent:wo}),i}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},hc=Qn(Cs),ba=ue({},Cs,{view:0,detail:0}),bg=Qn(ba),pc,mc,Aa,bo=ue({},ba,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:xc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Aa&&(Aa&&n.type==="mousemove"?(pc=n.screenX-Aa.screenX,mc=n.screenY-Aa.screenY):mc=pc=0,Aa=n),pc)},movementY:function(n){return"movementY"in n?n.movementY:mc}}),Jf=Qn(bo),Ag=ue({},bo,{dataTransfer:0}),Rg=Qn(Ag),Cg=ue({},ba,{relatedTarget:0}),gc=Qn(Cg),Ng=ue({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),Pg=Qn(Ng),Ig=ue({},Cs,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Lg=Qn(Ig),Dg=ue({},Cs,{data:0}),Qf=Qn(Dg),Ug={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Og={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Fg={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function kg(n){var i=this.nativeEvent;return i.getModifierState?i.getModifierState(n):(n=Fg[n])?!!i[n]:!1}function xc(){return kg}var Bg=ue({},ba,{key:function(n){if(n.key){var i=Ug[n.key]||n.key;if(i!=="Unidentified")return i}return n.type==="keypress"?(n=To(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Og[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:xc,charCode:function(n){return n.type==="keypress"?To(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?To(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),zg=Qn(Bg),Vg=ue({},bo,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),eh=Qn(Vg),Hg=ue({},ba,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:xc}),Gg=Qn(Hg),Wg=ue({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xg=Qn(Wg),jg=ue({},bo,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),Yg=Qn(jg),qg=[9,13,27,32],vc=f&&"CompositionEvent"in window,Ra=null;f&&"documentMode"in document&&(Ra=document.documentMode);var $g=f&&"TextEvent"in window&&!Ra,th=f&&(!vc||Ra&&8<Ra&&11>=Ra),nh=" ",ih=!1;function rh(n,i){switch(n){case"keyup":return qg.indexOf(i.keyCode)!==-1;case"keydown":return i.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function sh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ns=!1;function Kg(n,i){switch(n){case"compositionend":return sh(i);case"keypress":return i.which!==32?null:(ih=!0,nh);case"textInput":return n=i.data,n===nh&&ih?null:n;default:return null}}function Zg(n,i){if(Ns)return n==="compositionend"||!vc&&rh(n,i)?(n=Kf(),Eo=fc=br=null,Ns=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(i.ctrlKey||i.altKey||i.metaKey)||i.ctrlKey&&i.altKey){if(i.char&&1<i.char.length)return i.char;if(i.which)return String.fromCharCode(i.which)}return null;case"compositionend":return th&&i.locale!=="ko"?null:i.data;default:return null}}var Jg={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ah(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i==="input"?!!Jg[n.type]:i==="textarea"}function oh(n,i,a,c){ge(c),i=Po(i,"onChange"),0<i.length&&(a=new hc("onChange","change",null,a,c),n.push({event:a,listeners:i}))}var Ca=null,Na=null;function Qg(n){wh(n,0)}function Ao(n){var i=Us(n);if(Rt(i))return n}function ex(n,i){if(n==="change")return i}var lh=!1;if(f){var _c;if(f){var yc="oninput"in document;if(!yc){var ch=document.createElement("div");ch.setAttribute("oninput","return;"),yc=typeof ch.oninput=="function"}_c=yc}else _c=!1;lh=_c&&(!document.documentMode||9<document.documentMode)}function uh(){Ca&&(Ca.detachEvent("onpropertychange",dh),Na=Ca=null)}function dh(n){if(n.propertyName==="value"&&Ao(Na)){var i=[];oh(i,Na,n,Ke(n)),He(Qg,i)}}function tx(n,i,a){n==="focusin"?(uh(),Ca=i,Na=a,Ca.attachEvent("onpropertychange",dh)):n==="focusout"&&uh()}function nx(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Ao(Na)}function ix(n,i){if(n==="click")return Ao(i)}function rx(n,i){if(n==="input"||n==="change")return Ao(i)}function sx(n,i){return n===i&&(n!==0||1/n===1/i)||n!==n&&i!==i}var _i=typeof Object.is=="function"?Object.is:sx;function Pa(n,i){if(_i(n,i))return!0;if(typeof n!="object"||n===null||typeof i!="object"||i===null)return!1;var a=Object.keys(n),c=Object.keys(i);if(a.length!==c.length)return!1;for(c=0;c<a.length;c++){var d=a[c];if(!h.call(i,d)||!_i(n[d],i[d]))return!1}return!0}function fh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function hh(n,i){var a=fh(n);n=0;for(var c;a;){if(a.nodeType===3){if(c=n+a.textContent.length,n<=i&&c>=i)return{node:a,offset:i-n};n=c}e:{for(;a;){if(a.nextSibling){a=a.nextSibling;break e}a=a.parentNode}a=void 0}a=fh(a)}}function ph(n,i){return n&&i?n===i?!0:n&&n.nodeType===3?!1:i&&i.nodeType===3?ph(n,i.parentNode):"contains"in n?n.contains(i):n.compareDocumentPosition?!!(n.compareDocumentPosition(i)&16):!1:!1}function mh(){for(var n=window,i=nt();i instanceof n.HTMLIFrameElement;){try{var a=typeof i.contentWindow.location.href=="string"}catch{a=!1}if(a)n=i.contentWindow;else break;i=nt(n.document)}return i}function Sc(n){var i=n&&n.nodeName&&n.nodeName.toLowerCase();return i&&(i==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||i==="textarea"||n.contentEditable==="true")}function ax(n){var i=mh(),a=n.focusedElem,c=n.selectionRange;if(i!==a&&a&&a.ownerDocument&&ph(a.ownerDocument.documentElement,a)){if(c!==null&&Sc(a)){if(i=c.start,n=c.end,n===void 0&&(n=i),"selectionStart"in a)a.selectionStart=i,a.selectionEnd=Math.min(n,a.value.length);else if(n=(i=a.ownerDocument||document)&&i.defaultView||window,n.getSelection){n=n.getSelection();var d=a.textContent.length,m=Math.min(c.start,d);c=c.end===void 0?m:Math.min(c.end,d),!n.extend&&m>c&&(d=c,c=m,m=d),d=hh(a,m);var b=hh(a,c);d&&b&&(n.rangeCount!==1||n.anchorNode!==d.node||n.anchorOffset!==d.offset||n.focusNode!==b.node||n.focusOffset!==b.offset)&&(i=i.createRange(),i.setStart(d.node,d.offset),n.removeAllRanges(),m>c?(n.addRange(i),n.extend(b.node,b.offset)):(i.setEnd(b.node,b.offset),n.addRange(i)))}}for(i=[],n=a;n=n.parentNode;)n.nodeType===1&&i.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof a.focus=="function"&&a.focus(),a=0;a<i.length;a++)n=i[a],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var ox=f&&"documentMode"in document&&11>=document.documentMode,Ps=null,Mc=null,Ia=null,Ec=!1;function gh(n,i,a){var c=a.window===a?a.document:a.nodeType===9?a:a.ownerDocument;Ec||Ps==null||Ps!==nt(c)||(c=Ps,"selectionStart"in c&&Sc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Ia&&Pa(Ia,c)||(Ia=c,c=Po(Mc,"onSelect"),0<c.length&&(i=new hc("onSelect","select",null,i,a),n.push({event:i,listeners:c}),i.target=Ps)))}function Ro(n,i){var a={};return a[n.toLowerCase()]=i.toLowerCase(),a["Webkit"+n]="webkit"+i,a["Moz"+n]="moz"+i,a}var Is={animationend:Ro("Animation","AnimationEnd"),animationiteration:Ro("Animation","AnimationIteration"),animationstart:Ro("Animation","AnimationStart"),transitionend:Ro("Transition","TransitionEnd")},Tc={},xh={};f&&(xh=document.createElement("div").style,"AnimationEvent"in window||(delete Is.animationend.animation,delete Is.animationiteration.animation,delete Is.animationstart.animation),"TransitionEvent"in window||delete Is.transitionend.transition);function Co(n){if(Tc[n])return Tc[n];if(!Is[n])return n;var i=Is[n],a;for(a in i)if(i.hasOwnProperty(a)&&a in xh)return Tc[n]=i[a];return n}var vh=Co("animationend"),_h=Co("animationiteration"),yh=Co("animationstart"),Sh=Co("transitionend"),Mh=new Map,Eh="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Ar(n,i){Mh.set(n,i),l(i,[n])}for(var wc=0;wc<Eh.length;wc++){var bc=Eh[wc],lx=bc.toLowerCase(),cx=bc[0].toUpperCase()+bc.slice(1);Ar(lx,"on"+cx)}Ar(vh,"onAnimationEnd"),Ar(_h,"onAnimationIteration"),Ar(yh,"onAnimationStart"),Ar("dblclick","onDoubleClick"),Ar("focusin","onFocus"),Ar("focusout","onBlur"),Ar(Sh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var La="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),ux=new Set("cancel close invalid load scroll toggle".split(" ").concat(La));function Th(n,i,a){var c=n.type||"unknown-event";n.currentTarget=a,Jr(c,i,void 0,n),n.currentTarget=null}function wh(n,i){i=(i&4)!==0;for(var a=0;a<n.length;a++){var c=n[a],d=c.event;c=c.listeners;e:{var m=void 0;if(i)for(var b=c.length-1;0<=b;b--){var O=c[b],z=O.instance,de=O.currentTarget;if(O=O.listener,z!==m&&d.isPropagationStopped())break e;Th(d,O,de),m=z}else for(b=0;b<c.length;b++){if(O=c[b],z=O.instance,de=O.currentTarget,O=O.listener,z!==m&&d.isPropagationStopped())break e;Th(d,O,de),m=z}}}if($i)throw n=Ki,$i=!1,Ki=null,n}function Kt(n,i){var a=i[Dc];a===void 0&&(a=i[Dc]=new Set);var c=n+"__bubble";a.has(c)||(bh(i,n,2,!1),a.add(c))}function Ac(n,i,a){var c=0;i&&(c|=4),bh(a,n,c,i)}var No="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[No]){n[No]=!0,r.forEach(function(a){a!=="selectionchange"&&(ux.has(a)||Ac(a,!1,n),Ac(a,!0,n))});var i=n.nodeType===9?n:n.ownerDocument;i===null||i[No]||(i[No]=!0,Ac("selectionchange",!1,i))}}function bh(n,i,a,c){switch($f(i)){case 1:var d=Tg;break;case 4:d=wg;break;default:d=uc}a=d.bind(null,i,a,n),d=void 0,!Dt||i!=="touchstart"&&i!=="touchmove"&&i!=="wheel"||(d=!0),c?d!==void 0?n.addEventListener(i,a,{capture:!0,passive:d}):n.addEventListener(i,a,!0):d!==void 0?n.addEventListener(i,a,{passive:d}):n.addEventListener(i,a,!1)}function Rc(n,i,a,c,d){var m=c;if((i&1)===0&&(i&2)===0&&c!==null)e:for(;;){if(c===null)return;var b=c.tag;if(b===3||b===4){var O=c.stateNode.containerInfo;if(O===d||O.nodeType===8&&O.parentNode===d)break;if(b===4)for(b=c.return;b!==null;){var z=b.tag;if((z===3||z===4)&&(z=b.stateNode.containerInfo,z===d||z.nodeType===8&&z.parentNode===d))return;b=b.return}for(;O!==null;){if(b=ts(O),b===null)return;if(z=b.tag,z===5||z===6){c=m=b;continue e}O=O.parentNode}}c=c.return}He(function(){var de=m,ye=Ke(a),Se=[];e:{var _e=Mh.get(n);if(_e!==void 0){var Be=hc,Ye=n;switch(n){case"keypress":if(To(a)===0)break e;case"keydown":case"keyup":Be=zg;break;case"focusin":Ye="focus",Be=gc;break;case"focusout":Ye="blur",Be=gc;break;case"beforeblur":case"afterblur":Be=gc;break;case"click":if(a.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=Jf;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=Rg;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=Gg;break;case vh:case _h:case yh:Be=Pg;break;case Sh:Be=Xg;break;case"scroll":Be=bg;break;case"wheel":Be=Yg;break;case"copy":case"cut":case"paste":Be=Lg;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=eh}var $e=(i&4)!==0,ln=!$e&&n==="scroll",te=$e?_e!==null?_e+"Capture":null:_e;$e=[];for(var X=de,ae;X!==null;){ae=X;var Te=ae.stateNode;if(ae.tag===5&&Te!==null&&(ae=Te,te!==null&&(Te=kt(X,te),Te!=null&&$e.push(Ua(X,Te,ae)))),ln)break;X=X.return}0<$e.length&&(_e=new Be(_e,Ye,null,a,ye),Se.push({event:_e,listeners:$e}))}}if((i&7)===0){e:{if(_e=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",_e&&a!==Re&&(Ye=a.relatedTarget||a.fromElement)&&(ts(Ye)||Ye[Qi]))break e;if((Be||_e)&&(_e=ye.window===ye?ye:(_e=ye.ownerDocument)?_e.defaultView||_e.parentWindow:window,Be?(Ye=a.relatedTarget||a.toElement,Be=de,Ye=Ye?ts(Ye):null,Ye!==null&&(ln=fn(Ye),Ye!==ln||Ye.tag!==5&&Ye.tag!==6)&&(Ye=null)):(Be=null,Ye=de),Be!==Ye)){if($e=Jf,Te="onMouseLeave",te="onMouseEnter",X="mouse",(n==="pointerout"||n==="pointerover")&&($e=eh,Te="onPointerLeave",te="onPointerEnter",X="pointer"),ln=Be==null?_e:Us(Be),ae=Ye==null?_e:Us(Ye),_e=new $e(Te,X+"leave",Be,a,ye),_e.target=ln,_e.relatedTarget=ae,Te=null,ts(ye)===de&&($e=new $e(te,X+"enter",Ye,a,ye),$e.target=ae,$e.relatedTarget=ln,Te=$e),ln=Te,Be&&Ye)t:{for($e=Be,te=Ye,X=0,ae=$e;ae;ae=Ls(ae))X++;for(ae=0,Te=te;Te;Te=Ls(Te))ae++;for(;0<X-ae;)$e=Ls($e),X--;for(;0<ae-X;)te=Ls(te),ae--;for(;X--;){if($e===te||te!==null&&$e===te.alternate)break t;$e=Ls($e),te=Ls(te)}$e=null}else $e=null;Be!==null&&Ah(Se,_e,Be,$e,!1),Ye!==null&&ln!==null&&Ah(Se,ln,Ye,$e,!0)}}e:{if(_e=de?Us(de):window,Be=_e.nodeName&&_e.nodeName.toLowerCase(),Be==="select"||Be==="input"&&_e.type==="file")var Je=ex;else if(ah(_e))if(lh)Je=rx;else{Je=nx;var at=tx}else(Be=_e.nodeName)&&Be.toLowerCase()==="input"&&(_e.type==="checkbox"||_e.type==="radio")&&(Je=ix);if(Je&&(Je=Je(n,de))){oh(Se,Je,a,ye);break e}at&&at(n,_e,de),n==="focusout"&&(at=_e._wrapperState)&&at.controlled&&_e.type==="number"&&Tt(_e,"number",_e.value)}switch(at=de?Us(de):window,n){case"focusin":(ah(at)||at.contentEditable==="true")&&(Ps=at,Mc=de,Ia=null);break;case"focusout":Ia=Mc=Ps=null;break;case"mousedown":Ec=!0;break;case"contextmenu":case"mouseup":case"dragend":Ec=!1,gh(Se,a,ye);break;case"selectionchange":if(ox)break;case"keydown":case"keyup":gh(Se,a,ye)}var ot;if(vc)e:{switch(n){case"compositionstart":var ft="onCompositionStart";break e;case"compositionend":ft="onCompositionEnd";break e;case"compositionupdate":ft="onCompositionUpdate";break e}ft=void 0}else Ns?rh(n,a)&&(ft="onCompositionEnd"):n==="keydown"&&a.keyCode===229&&(ft="onCompositionStart");ft&&(th&&a.locale!=="ko"&&(Ns||ft!=="onCompositionStart"?ft==="onCompositionEnd"&&Ns&&(ot=Kf()):(br=ye,fc="value"in br?br.value:br.textContent,Ns=!0)),at=Po(de,ft),0<at.length&&(ft=new Qf(ft,n,null,a,ye),Se.push({event:ft,listeners:at}),ot?ft.data=ot:(ot=sh(a),ot!==null&&(ft.data=ot)))),(ot=$g?Kg(n,a):Zg(n,a))&&(de=Po(de,"onBeforeInput"),0<de.length&&(ye=new Qf("onBeforeInput","beforeinput",null,a,ye),Se.push({event:ye,listeners:de}),ye.data=ot))}wh(Se,i)})}function Ua(n,i,a){return{instance:n,listener:i,currentTarget:a}}function Po(n,i){for(var a=i+"Capture",c=[];n!==null;){var d=n,m=d.stateNode;d.tag===5&&m!==null&&(d=m,m=kt(n,a),m!=null&&c.unshift(Ua(n,m,d)),m=kt(n,i),m!=null&&c.push(Ua(n,m,d))),n=n.return}return c}function Ls(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ah(n,i,a,c,d){for(var m=i._reactName,b=[];a!==null&&a!==c;){var O=a,z=O.alternate,de=O.stateNode;if(z!==null&&z===c)break;O.tag===5&&de!==null&&(O=de,d?(z=kt(a,m),z!=null&&b.unshift(Ua(a,z,O))):d||(z=kt(a,m),z!=null&&b.push(Ua(a,z,O)))),a=a.return}b.length!==0&&n.push({event:i,listeners:b})}var dx=/\r\n?/g,fx=/\u0000|\uFFFD/g;function Rh(n){return(typeof n=="string"?n:""+n).replace(dx,`
`).replace(fx,"")}function Io(n,i,a){if(i=Rh(i),Rh(n)!==i&&a)throw Error(t(425))}function Lo(){}var Cc=null,Nc=null;function Pc(n,i){return n==="textarea"||n==="noscript"||typeof i.children=="string"||typeof i.children=="number"||typeof i.dangerouslySetInnerHTML=="object"&&i.dangerouslySetInnerHTML!==null&&i.dangerouslySetInnerHTML.__html!=null}var Ic=typeof setTimeout=="function"?setTimeout:void 0,hx=typeof clearTimeout=="function"?clearTimeout:void 0,Ch=typeof Promise=="function"?Promise:void 0,px=typeof queueMicrotask=="function"?queueMicrotask:typeof Ch<"u"?function(n){return Ch.resolve(null).then(n).catch(mx)}:Ic;function mx(n){setTimeout(function(){throw n})}function Lc(n,i){var a=i,c=0;do{var d=a.nextSibling;if(n.removeChild(a),d&&d.nodeType===8)if(a=d.data,a==="/$"){if(c===0){n.removeChild(d),wa(i);return}c--}else a!=="$"&&a!=="$?"&&a!=="$!"||c++;a=d}while(a);wa(i)}function Rr(n){for(;n!=null;n=n.nextSibling){var i=n.nodeType;if(i===1||i===3)break;if(i===8){if(i=n.data,i==="$"||i==="$!"||i==="$?")break;if(i==="/$")return null}}return n}function Nh(n){n=n.previousSibling;for(var i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="$"||a==="$!"||a==="$?"){if(i===0)return n;i--}else a==="/$"&&i++}n=n.previousSibling}return null}var Ds=Math.random().toString(36).slice(2),Li="__reactFiber$"+Ds,Oa="__reactProps$"+Ds,Qi="__reactContainer$"+Ds,Dc="__reactEvents$"+Ds,gx="__reactListeners$"+Ds,xx="__reactHandles$"+Ds;function ts(n){var i=n[Li];if(i)return i;for(var a=n.parentNode;a;){if(i=a[Qi]||a[Li]){if(a=i.alternate,i.child!==null||a!==null&&a.child!==null)for(n=Nh(n);n!==null;){if(a=n[Li])return a;n=Nh(n)}return i}n=a,a=n.parentNode}return null}function Fa(n){return n=n[Li]||n[Qi],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Us(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Do(n){return n[Oa]||null}var Uc=[],Os=-1;function Cr(n){return{current:n}}function Zt(n){0>Os||(n.current=Uc[Os],Uc[Os]=null,Os--)}function Xt(n,i){Os++,Uc[Os]=n.current,n.current=i}var Nr={},bn=Cr(Nr),Gn=Cr(!1),ns=Nr;function Fs(n,i){var a=n.type.contextTypes;if(!a)return Nr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===i)return c.__reactInternalMemoizedMaskedChildContext;var d={},m;for(m in a)d[m]=i[m];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=i,n.__reactInternalMemoizedMaskedChildContext=d),d}function Wn(n){return n=n.childContextTypes,n!=null}function Uo(){Zt(Gn),Zt(bn)}function Ph(n,i,a){if(bn.current!==Nr)throw Error(t(168));Xt(bn,i),Xt(Gn,a)}function Ih(n,i,a){var c=n.stateNode;if(i=i.childContextTypes,typeof c.getChildContext!="function")return a;c=c.getChildContext();for(var d in c)if(!(d in i))throw Error(t(108,pe(n)||"Unknown",d));return ue({},a,c)}function Oo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Nr,ns=bn.current,Xt(bn,n),Xt(Gn,Gn.current),!0}function Lh(n,i,a){var c=n.stateNode;if(!c)throw Error(t(169));a?(n=Ih(n,i,ns),c.__reactInternalMemoizedMergedChildContext=n,Zt(Gn),Zt(bn),Xt(bn,n)):Zt(Gn),Xt(Gn,a)}var er=null,Fo=!1,Oc=!1;function Dh(n){er===null?er=[n]:er.push(n)}function vx(n){Fo=!0,Dh(n)}function Pr(){if(!Oc&&er!==null){Oc=!0;var n=0,i=wt;try{var a=er;for(wt=1;n<a.length;n++){var c=a[n];do c=c(!0);while(c!==null)}er=null,Fo=!1}catch(d){throw er!==null&&(er=er.slice(n+1)),Pi(gi,Pr),d}finally{wt=i,Oc=!1}}return null}var ks=[],Bs=0,ko=null,Bo=0,oi=[],li=0,is=null,tr=1,nr="";function rs(n,i){ks[Bs++]=Bo,ks[Bs++]=ko,ko=n,Bo=i}function Uh(n,i,a){oi[li++]=tr,oi[li++]=nr,oi[li++]=is,is=n;var c=tr;n=nr;var d=32-be(c)-1;c&=~(1<<d),a+=1;var m=32-be(i)+d;if(30<m){var b=d-d%5;m=(c&(1<<b)-1).toString(32),c>>=b,d-=b,tr=1<<32-be(i)+d|a<<d|c,nr=m+n}else tr=1<<m|a<<d|c,nr=n}function Fc(n){n.return!==null&&(rs(n,1),Uh(n,1,0))}function kc(n){for(;n===ko;)ko=ks[--Bs],ks[Bs]=null,Bo=ks[--Bs],ks[Bs]=null;for(;n===is;)is=oi[--li],oi[li]=null,nr=oi[--li],oi[li]=null,tr=oi[--li],oi[li]=null}var ei=null,ti=null,en=!1,yi=null;function Oh(n,i){var a=fi(5,null,null,0);a.elementType="DELETED",a.stateNode=i,a.return=n,i=n.deletions,i===null?(n.deletions=[a],n.flags|=16):i.push(a)}function Fh(n,i){switch(n.tag){case 5:var a=n.type;return i=i.nodeType!==1||a.toLowerCase()!==i.nodeName.toLowerCase()?null:i,i!==null?(n.stateNode=i,ei=n,ti=Rr(i.firstChild),!0):!1;case 6:return i=n.pendingProps===""||i.nodeType!==3?null:i,i!==null?(n.stateNode=i,ei=n,ti=null,!0):!1;case 13:return i=i.nodeType!==8?null:i,i!==null?(a=is!==null?{id:tr,overflow:nr}:null,n.memoizedState={dehydrated:i,treeContext:a,retryLane:1073741824},a=fi(18,null,null,0),a.stateNode=i,a.return=n,n.child=a,ei=n,ti=null,!0):!1;default:return!1}}function Bc(n){return(n.mode&1)!==0&&(n.flags&128)===0}function zc(n){if(en){var i=ti;if(i){var a=i;if(!Fh(n,i)){if(Bc(n))throw Error(t(418));i=Rr(a.nextSibling);var c=ei;i&&Fh(n,i)?Oh(c,a):(n.flags=n.flags&-4097|2,en=!1,ei=n)}}else{if(Bc(n))throw Error(t(418));n.flags=n.flags&-4097|2,en=!1,ei=n}}}function kh(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function zo(n){if(n!==ei)return!1;if(!en)return kh(n),en=!0,!1;var i;if((i=n.tag!==3)&&!(i=n.tag!==5)&&(i=n.type,i=i!=="head"&&i!=="body"&&!Pc(n.type,n.memoizedProps)),i&&(i=ti)){if(Bc(n))throw Bh(),Error(t(418));for(;i;)Oh(n,i),i=Rr(i.nextSibling)}if(kh(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,i=0;n;){if(n.nodeType===8){var a=n.data;if(a==="/$"){if(i===0){ti=Rr(n.nextSibling);break e}i--}else a!=="$"&&a!=="$!"&&a!=="$?"||i++}n=n.nextSibling}ti=null}}else ti=ei?Rr(n.stateNode.nextSibling):null;return!0}function Bh(){for(var n=ti;n;)n=Rr(n.nextSibling)}function zs(){ti=ei=null,en=!1}function Vc(n){yi===null?yi=[n]:yi.push(n)}var _x=R.ReactCurrentBatchConfig;function ka(n,i,a){if(n=a.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(a._owner){if(a=a._owner,a){if(a.tag!==1)throw Error(t(309));var c=a.stateNode}if(!c)throw Error(t(147,n));var d=c,m=""+n;return i!==null&&i.ref!==null&&typeof i.ref=="function"&&i.ref._stringRef===m?i.ref:(i=function(b){var O=d.refs;b===null?delete O[m]:O[m]=b},i._stringRef=m,i)}if(typeof n!="string")throw Error(t(284));if(!a._owner)throw Error(t(290,n))}return n}function Vo(n,i){throw n=Object.prototype.toString.call(i),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(i).join(", ")+"}":n))}function zh(n){var i=n._init;return i(n._payload)}function Vh(n){function i(te,X){if(n){var ae=te.deletions;ae===null?(te.deletions=[X],te.flags|=16):ae.push(X)}}function a(te,X){if(!n)return null;for(;X!==null;)i(te,X),X=X.sibling;return null}function c(te,X){for(te=new Map;X!==null;)X.key!==null?te.set(X.key,X):te.set(X.index,X),X=X.sibling;return te}function d(te,X){return te=Br(te,X),te.index=0,te.sibling=null,te}function m(te,X,ae){return te.index=ae,n?(ae=te.alternate,ae!==null?(ae=ae.index,ae<X?(te.flags|=2,X):ae):(te.flags|=2,X)):(te.flags|=1048576,X)}function b(te){return n&&te.alternate===null&&(te.flags|=2),te}function O(te,X,ae,Te){return X===null||X.tag!==6?(X=Iu(ae,te.mode,Te),X.return=te,X):(X=d(X,ae),X.return=te,X)}function z(te,X,ae,Te){var Je=ae.type;return Je===F?ye(te,X,ae.props.children,Te,ae.key):X!==null&&(X.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&zh(Je)===X.type)?(Te=d(X,ae.props),Te.ref=ka(te,X,ae),Te.return=te,Te):(Te=dl(ae.type,ae.key,ae.props,null,te.mode,Te),Te.ref=ka(te,X,ae),Te.return=te,Te)}function de(te,X,ae,Te){return X===null||X.tag!==4||X.stateNode.containerInfo!==ae.containerInfo||X.stateNode.implementation!==ae.implementation?(X=Lu(ae,te.mode,Te),X.return=te,X):(X=d(X,ae.children||[]),X.return=te,X)}function ye(te,X,ae,Te,Je){return X===null||X.tag!==7?(X=fs(ae,te.mode,Te,Je),X.return=te,X):(X=d(X,ae),X.return=te,X)}function Se(te,X,ae){if(typeof X=="string"&&X!==""||typeof X=="number")return X=Iu(""+X,te.mode,ae),X.return=te,X;if(typeof X=="object"&&X!==null){switch(X.$$typeof){case L:return ae=dl(X.type,X.key,X.props,null,te.mode,ae),ae.ref=ka(te,null,X),ae.return=te,ae;case N:return X=Lu(X,te.mode,ae),X.return=te,X;case se:var Te=X._init;return Se(te,Te(X._payload),ae)}if(Nt(X)||ie(X))return X=fs(X,te.mode,ae,null),X.return=te,X;Vo(te,X)}return null}function _e(te,X,ae,Te){var Je=X!==null?X.key:null;if(typeof ae=="string"&&ae!==""||typeof ae=="number")return Je!==null?null:O(te,X,""+ae,Te);if(typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:return ae.key===Je?z(te,X,ae,Te):null;case N:return ae.key===Je?de(te,X,ae,Te):null;case se:return Je=ae._init,_e(te,X,Je(ae._payload),Te)}if(Nt(ae)||ie(ae))return Je!==null?null:ye(te,X,ae,Te,null);Vo(te,ae)}return null}function Be(te,X,ae,Te,Je){if(typeof Te=="string"&&Te!==""||typeof Te=="number")return te=te.get(ae)||null,O(X,te,""+Te,Je);if(typeof Te=="object"&&Te!==null){switch(Te.$$typeof){case L:return te=te.get(Te.key===null?ae:Te.key)||null,z(X,te,Te,Je);case N:return te=te.get(Te.key===null?ae:Te.key)||null,de(X,te,Te,Je);case se:var at=Te._init;return Be(te,X,ae,at(Te._payload),Je)}if(Nt(Te)||ie(Te))return te=te.get(ae)||null,ye(X,te,Te,Je,null);Vo(X,Te)}return null}function Ye(te,X,ae,Te){for(var Je=null,at=null,ot=X,ft=X=0,_n=null;ot!==null&&ft<ae.length;ft++){ot.index>ft?(_n=ot,ot=null):_n=ot.sibling;var Ft=_e(te,ot,ae[ft],Te);if(Ft===null){ot===null&&(ot=_n);break}n&&ot&&Ft.alternate===null&&i(te,ot),X=m(Ft,X,ft),at===null?Je=Ft:at.sibling=Ft,at=Ft,ot=_n}if(ft===ae.length)return a(te,ot),en&&rs(te,ft),Je;if(ot===null){for(;ft<ae.length;ft++)ot=Se(te,ae[ft],Te),ot!==null&&(X=m(ot,X,ft),at===null?Je=ot:at.sibling=ot,at=ot);return en&&rs(te,ft),Je}for(ot=c(te,ot);ft<ae.length;ft++)_n=Be(ot,te,ft,ae[ft],Te),_n!==null&&(n&&_n.alternate!==null&&ot.delete(_n.key===null?ft:_n.key),X=m(_n,X,ft),at===null?Je=_n:at.sibling=_n,at=_n);return n&&ot.forEach(function(zr){return i(te,zr)}),en&&rs(te,ft),Je}function $e(te,X,ae,Te){var Je=ie(ae);if(typeof Je!="function")throw Error(t(150));if(ae=Je.call(ae),ae==null)throw Error(t(151));for(var at=Je=null,ot=X,ft=X=0,_n=null,Ft=ae.next();ot!==null&&!Ft.done;ft++,Ft=ae.next()){ot.index>ft?(_n=ot,ot=null):_n=ot.sibling;var zr=_e(te,ot,Ft.value,Te);if(zr===null){ot===null&&(ot=_n);break}n&&ot&&zr.alternate===null&&i(te,ot),X=m(zr,X,ft),at===null?Je=zr:at.sibling=zr,at=zr,ot=_n}if(Ft.done)return a(te,ot),en&&rs(te,ft),Je;if(ot===null){for(;!Ft.done;ft++,Ft=ae.next())Ft=Se(te,Ft.value,Te),Ft!==null&&(X=m(Ft,X,ft),at===null?Je=Ft:at.sibling=Ft,at=Ft);return en&&rs(te,ft),Je}for(ot=c(te,ot);!Ft.done;ft++,Ft=ae.next())Ft=Be(ot,te,ft,Ft.value,Te),Ft!==null&&(n&&Ft.alternate!==null&&ot.delete(Ft.key===null?ft:Ft.key),X=m(Ft,X,ft),at===null?Je=Ft:at.sibling=Ft,at=Ft);return n&&ot.forEach(function(Jx){return i(te,Jx)}),en&&rs(te,ft),Je}function ln(te,X,ae,Te){if(typeof ae=="object"&&ae!==null&&ae.type===F&&ae.key===null&&(ae=ae.props.children),typeof ae=="object"&&ae!==null){switch(ae.$$typeof){case L:e:{for(var Je=ae.key,at=X;at!==null;){if(at.key===Je){if(Je=ae.type,Je===F){if(at.tag===7){a(te,at.sibling),X=d(at,ae.props.children),X.return=te,te=X;break e}}else if(at.elementType===Je||typeof Je=="object"&&Je!==null&&Je.$$typeof===se&&zh(Je)===at.type){a(te,at.sibling),X=d(at,ae.props),X.ref=ka(te,at,ae),X.return=te,te=X;break e}a(te,at);break}else i(te,at);at=at.sibling}ae.type===F?(X=fs(ae.props.children,te.mode,Te,ae.key),X.return=te,te=X):(Te=dl(ae.type,ae.key,ae.props,null,te.mode,Te),Te.ref=ka(te,X,ae),Te.return=te,te=Te)}return b(te);case N:e:{for(at=ae.key;X!==null;){if(X.key===at)if(X.tag===4&&X.stateNode.containerInfo===ae.containerInfo&&X.stateNode.implementation===ae.implementation){a(te,X.sibling),X=d(X,ae.children||[]),X.return=te,te=X;break e}else{a(te,X);break}else i(te,X);X=X.sibling}X=Lu(ae,te.mode,Te),X.return=te,te=X}return b(te);case se:return at=ae._init,ln(te,X,at(ae._payload),Te)}if(Nt(ae))return Ye(te,X,ae,Te);if(ie(ae))return $e(te,X,ae,Te);Vo(te,ae)}return typeof ae=="string"&&ae!==""||typeof ae=="number"?(ae=""+ae,X!==null&&X.tag===6?(a(te,X.sibling),X=d(X,ae),X.return=te,te=X):(a(te,X),X=Iu(ae,te.mode,Te),X.return=te,te=X),b(te)):a(te,X)}return ln}var Vs=Vh(!0),Hh=Vh(!1),Ho=Cr(null),Go=null,Hs=null,Hc=null;function Gc(){Hc=Hs=Go=null}function Wc(n){var i=Ho.current;Zt(Ho),n._currentValue=i}function Xc(n,i,a){for(;n!==null;){var c=n.alternate;if((n.childLanes&i)!==i?(n.childLanes|=i,c!==null&&(c.childLanes|=i)):c!==null&&(c.childLanes&i)!==i&&(c.childLanes|=i),n===a)break;n=n.return}}function Gs(n,i){Go=n,Hc=Hs=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&i)!==0&&(Xn=!0),n.firstContext=null)}function ci(n){var i=n._currentValue;if(Hc!==n)if(n={context:n,memoizedValue:i,next:null},Hs===null){if(Go===null)throw Error(t(308));Hs=n,Go.dependencies={lanes:0,firstContext:n}}else Hs=Hs.next=n;return i}var ss=null;function jc(n){ss===null?ss=[n]:ss.push(n)}function Gh(n,i,a,c){var d=i.interleaved;return d===null?(a.next=a,jc(i)):(a.next=d.next,d.next=a),i.interleaved=a,ir(n,c)}function ir(n,i){n.lanes|=i;var a=n.alternate;for(a!==null&&(a.lanes|=i),a=n,n=n.return;n!==null;)n.childLanes|=i,a=n.alternate,a!==null&&(a.childLanes|=i),a=n,n=n.return;return a.tag===3?a.stateNode:null}var Ir=!1;function Yc(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Wh(n,i){n=n.updateQueue,i.updateQueue===n&&(i.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function rr(n,i){return{eventTime:n,lane:i,tag:0,payload:null,callback:null,next:null}}function Lr(n,i,a){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ut&2)!==0){var d=c.pending;return d===null?i.next=i:(i.next=d.next,d.next=i),c.pending=i,ir(n,a)}return d=c.interleaved,d===null?(i.next=i,jc(c)):(i.next=d.next,d.next=i),c.interleaved=i,ir(n,a)}function Wo(n,i,a){if(i=i.updateQueue,i!==null&&(i=i.shared,(a&4194240)!==0)){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hn(n,a)}}function Xh(n,i){var a=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,a===c)){var d=null,m=null;if(a=a.firstBaseUpdate,a!==null){do{var b={eventTime:a.eventTime,lane:a.lane,tag:a.tag,payload:a.payload,callback:a.callback,next:null};m===null?d=m=b:m=m.next=b,a=a.next}while(a!==null);m===null?d=m=i:m=m.next=i}else d=m=i;a={baseState:c.baseState,firstBaseUpdate:d,lastBaseUpdate:m,shared:c.shared,effects:c.effects},n.updateQueue=a;return}n=a.lastBaseUpdate,n===null?a.firstBaseUpdate=i:n.next=i,a.lastBaseUpdate=i}function Xo(n,i,a,c){var d=n.updateQueue;Ir=!1;var m=d.firstBaseUpdate,b=d.lastBaseUpdate,O=d.shared.pending;if(O!==null){d.shared.pending=null;var z=O,de=z.next;z.next=null,b===null?m=de:b.next=de,b=z;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,O=ye.lastBaseUpdate,O!==b&&(O===null?ye.firstBaseUpdate=de:O.next=de,ye.lastBaseUpdate=z))}if(m!==null){var Se=d.baseState;b=0,ye=de=z=null,O=m;do{var _e=O.lane,Be=O.eventTime;if((c&_e)===_e){ye!==null&&(ye=ye.next={eventTime:Be,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ye=n,$e=O;switch(_e=i,Be=a,$e.tag){case 1:if(Ye=$e.payload,typeof Ye=="function"){Se=Ye.call(Be,Se,_e);break e}Se=Ye;break e;case 3:Ye.flags=Ye.flags&-65537|128;case 0:if(Ye=$e.payload,_e=typeof Ye=="function"?Ye.call(Be,Se,_e):Ye,_e==null)break e;Se=ue({},Se,_e);break e;case 2:Ir=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,_e=d.effects,_e===null?d.effects=[O]:_e.push(O))}else Be={eventTime:Be,lane:_e,tag:O.tag,payload:O.payload,callback:O.callback,next:null},ye===null?(de=ye=Be,z=Se):ye=ye.next=Be,b|=_e;if(O=O.next,O===null){if(O=d.shared.pending,O===null)break;_e=O,O=_e.next,_e.next=null,d.lastBaseUpdate=_e,d.shared.pending=null}}while(!0);if(ye===null&&(z=Se),d.baseState=z,d.firstBaseUpdate=de,d.lastBaseUpdate=ye,i=d.shared.interleaved,i!==null){d=i;do b|=d.lane,d=d.next;while(d!==i)}else m===null&&(d.shared.lanes=0);ls|=b,n.lanes=b,n.memoizedState=Se}}function jh(n,i,a){if(n=i.effects,i.effects=null,n!==null)for(i=0;i<n.length;i++){var c=n[i],d=c.callback;if(d!==null){if(c.callback=null,c=a,typeof d!="function")throw Error(t(191,d));d.call(c)}}}var Ba={},Di=Cr(Ba),za=Cr(Ba),Va=Cr(Ba);function as(n){if(n===Ba)throw Error(t(174));return n}function qc(n,i){switch(Xt(Va,i),Xt(za,n),Xt(Di,Ba),n=i.nodeType,n){case 9:case 11:i=(i=i.documentElement)?i.namespaceURI:E(null,"");break;default:n=n===8?i.parentNode:i,i=n.namespaceURI||null,n=n.tagName,i=E(i,n)}Zt(Di),Xt(Di,i)}function Ws(){Zt(Di),Zt(za),Zt(Va)}function Yh(n){as(Va.current);var i=as(Di.current),a=E(i,n.type);i!==a&&(Xt(za,n),Xt(Di,a))}function $c(n){za.current===n&&(Zt(Di),Zt(za))}var nn=Cr(0);function jo(n){for(var i=n;i!==null;){if(i.tag===13){var a=i.memoizedState;if(a!==null&&(a=a.dehydrated,a===null||a.data==="$?"||a.data==="$!"))return i}else if(i.tag===19&&i.memoizedProps.revealOrder!==void 0){if((i.flags&128)!==0)return i}else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return null;i=i.return}i.sibling.return=i.return,i=i.sibling}return null}var Kc=[];function Zc(){for(var n=0;n<Kc.length;n++)Kc[n]._workInProgressVersionPrimary=null;Kc.length=0}var Yo=R.ReactCurrentDispatcher,Jc=R.ReactCurrentBatchConfig,os=0,rn=null,hn=null,xn=null,qo=!1,Ha=!1,Ga=0,yx=0;function An(){throw Error(t(321))}function Qc(n,i){if(i===null)return!1;for(var a=0;a<i.length&&a<n.length;a++)if(!_i(n[a],i[a]))return!1;return!0}function eu(n,i,a,c,d,m){if(os=m,rn=i,i.memoizedState=null,i.updateQueue=null,i.lanes=0,Yo.current=n===null||n.memoizedState===null?Tx:wx,n=a(c,d),Ha){m=0;do{if(Ha=!1,Ga=0,25<=m)throw Error(t(301));m+=1,xn=hn=null,i.updateQueue=null,Yo.current=bx,n=a(c,d)}while(Ha)}if(Yo.current=Zo,i=hn!==null&&hn.next!==null,os=0,xn=hn=rn=null,qo=!1,i)throw Error(t(300));return n}function tu(){var n=Ga!==0;return Ga=0,n}function Ui(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return xn===null?rn.memoizedState=xn=n:xn=xn.next=n,xn}function ui(){if(hn===null){var n=rn.alternate;n=n!==null?n.memoizedState:null}else n=hn.next;var i=xn===null?rn.memoizedState:xn.next;if(i!==null)xn=i,hn=n;else{if(n===null)throw Error(t(310));hn=n,n={memoizedState:hn.memoizedState,baseState:hn.baseState,baseQueue:hn.baseQueue,queue:hn.queue,next:null},xn===null?rn.memoizedState=xn=n:xn=xn.next=n}return xn}function Wa(n,i){return typeof i=="function"?i(n):i}function nu(n){var i=ui(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=hn,d=c.baseQueue,m=a.pending;if(m!==null){if(d!==null){var b=d.next;d.next=m.next,m.next=b}c.baseQueue=d=m,a.pending=null}if(d!==null){m=d.next,c=c.baseState;var O=b=null,z=null,de=m;do{var ye=de.lane;if((os&ye)===ye)z!==null&&(z=z.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:n(c,de.action);else{var Se={lane:ye,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};z===null?(O=z=Se,b=c):z=z.next=Se,rn.lanes|=ye,ls|=ye}de=de.next}while(de!==null&&de!==m);z===null?b=c:z.next=O,_i(c,i.memoizedState)||(Xn=!0),i.memoizedState=c,i.baseState=b,i.baseQueue=z,a.lastRenderedState=c}if(n=a.interleaved,n!==null){d=n;do m=d.lane,rn.lanes|=m,ls|=m,d=d.next;while(d!==n)}else d===null&&(a.lanes=0);return[i.memoizedState,a.dispatch]}function iu(n){var i=ui(),a=i.queue;if(a===null)throw Error(t(311));a.lastRenderedReducer=n;var c=a.dispatch,d=a.pending,m=i.memoizedState;if(d!==null){a.pending=null;var b=d=d.next;do m=n(m,b.action),b=b.next;while(b!==d);_i(m,i.memoizedState)||(Xn=!0),i.memoizedState=m,i.baseQueue===null&&(i.baseState=m),a.lastRenderedState=m}return[m,c]}function qh(){}function $h(n,i){var a=rn,c=ui(),d=i(),m=!_i(c.memoizedState,d);if(m&&(c.memoizedState=d,Xn=!0),c=c.queue,ru(Jh.bind(null,a,c,n),[n]),c.getSnapshot!==i||m||xn!==null&&xn.memoizedState.tag&1){if(a.flags|=2048,Xa(9,Zh.bind(null,a,c,d,i),void 0,null),vn===null)throw Error(t(349));(os&30)!==0||Kh(a,i,d)}return d}function Kh(n,i,a){n.flags|=16384,n={getSnapshot:i,value:a},i=rn.updateQueue,i===null?(i={lastEffect:null,stores:null},rn.updateQueue=i,i.stores=[n]):(a=i.stores,a===null?i.stores=[n]:a.push(n))}function Zh(n,i,a,c){i.value=a,i.getSnapshot=c,Qh(i)&&ep(n)}function Jh(n,i,a){return a(function(){Qh(i)&&ep(n)})}function Qh(n){var i=n.getSnapshot;n=n.value;try{var a=i();return!_i(n,a)}catch{return!0}}function ep(n){var i=ir(n,1);i!==null&&Ti(i,n,1,-1)}function tp(n){var i=Ui();return typeof n=="function"&&(n=n()),i.memoizedState=i.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Wa,lastRenderedState:n},i.queue=n,n=n.dispatch=Ex.bind(null,rn,n),[i.memoizedState,n]}function Xa(n,i,a,c){return n={tag:n,create:i,destroy:a,deps:c,next:null},i=rn.updateQueue,i===null?(i={lastEffect:null,stores:null},rn.updateQueue=i,i.lastEffect=n.next=n):(a=i.lastEffect,a===null?i.lastEffect=n.next=n:(c=a.next,a.next=n,n.next=c,i.lastEffect=n)),n}function np(){return ui().memoizedState}function $o(n,i,a,c){var d=Ui();rn.flags|=n,d.memoizedState=Xa(1|i,a,void 0,c===void 0?null:c)}function Ko(n,i,a,c){var d=ui();c=c===void 0?null:c;var m=void 0;if(hn!==null){var b=hn.memoizedState;if(m=b.destroy,c!==null&&Qc(c,b.deps)){d.memoizedState=Xa(i,a,m,c);return}}rn.flags|=n,d.memoizedState=Xa(1|i,a,m,c)}function ip(n,i){return $o(8390656,8,n,i)}function ru(n,i){return Ko(2048,8,n,i)}function rp(n,i){return Ko(4,2,n,i)}function sp(n,i){return Ko(4,4,n,i)}function ap(n,i){if(typeof i=="function")return n=n(),i(n),function(){i(null)};if(i!=null)return n=n(),i.current=n,function(){i.current=null}}function op(n,i,a){return a=a!=null?a.concat([n]):null,Ko(4,4,ap.bind(null,i,n),a)}function su(){}function lp(n,i){var a=ui();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(a.memoizedState=[n,i],n)}function cp(n,i){var a=ui();i=i===void 0?null:i;var c=a.memoizedState;return c!==null&&i!==null&&Qc(i,c[1])?c[0]:(n=n(),a.memoizedState=[n,i],n)}function up(n,i,a){return(os&21)===0?(n.baseState&&(n.baseState=!1,Xn=!0),n.memoizedState=a):(_i(a,i)||(a=ke(),rn.lanes|=a,ls|=a,n.baseState=!0),i)}function Sx(n,i){var a=wt;wt=a!==0&&4>a?a:4,n(!0);var c=Jc.transition;Jc.transition={};try{n(!1),i()}finally{wt=a,Jc.transition=c}}function dp(){return ui().memoizedState}function Mx(n,i,a){var c=Fr(n);if(a={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null},fp(n))hp(i,a);else if(a=Gh(n,i,a,c),a!==null){var d=Fn();Ti(a,n,c,d),pp(a,i,c)}}function Ex(n,i,a){var c=Fr(n),d={lane:c,action:a,hasEagerState:!1,eagerState:null,next:null};if(fp(n))hp(i,d);else{var m=n.alternate;if(n.lanes===0&&(m===null||m.lanes===0)&&(m=i.lastRenderedReducer,m!==null))try{var b=i.lastRenderedState,O=m(b,a);if(d.hasEagerState=!0,d.eagerState=O,_i(O,b)){var z=i.interleaved;z===null?(d.next=d,jc(i)):(d.next=z.next,z.next=d),i.interleaved=d;return}}catch{}finally{}a=Gh(n,i,d,c),a!==null&&(d=Fn(),Ti(a,n,c,d),pp(a,i,c))}}function fp(n){var i=n.alternate;return n===rn||i!==null&&i===rn}function hp(n,i){Ha=qo=!0;var a=n.pending;a===null?i.next=i:(i.next=a.next,a.next=i),n.pending=i}function pp(n,i,a){if((a&4194240)!==0){var c=i.lanes;c&=n.pendingLanes,a|=c,i.lanes=a,Hn(n,a)}}var Zo={readContext:ci,useCallback:An,useContext:An,useEffect:An,useImperativeHandle:An,useInsertionEffect:An,useLayoutEffect:An,useMemo:An,useReducer:An,useRef:An,useState:An,useDebugValue:An,useDeferredValue:An,useTransition:An,useMutableSource:An,useSyncExternalStore:An,useId:An,unstable_isNewReconciler:!1},Tx={readContext:ci,useCallback:function(n,i){return Ui().memoizedState=[n,i===void 0?null:i],n},useContext:ci,useEffect:ip,useImperativeHandle:function(n,i,a){return a=a!=null?a.concat([n]):null,$o(4194308,4,ap.bind(null,i,n),a)},useLayoutEffect:function(n,i){return $o(4194308,4,n,i)},useInsertionEffect:function(n,i){return $o(4,2,n,i)},useMemo:function(n,i){var a=Ui();return i=i===void 0?null:i,n=n(),a.memoizedState=[n,i],n},useReducer:function(n,i,a){var c=Ui();return i=a!==void 0?a(i):i,c.memoizedState=c.baseState=i,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:i},c.queue=n,n=n.dispatch=Mx.bind(null,rn,n),[c.memoizedState,n]},useRef:function(n){var i=Ui();return n={current:n},i.memoizedState=n},useState:tp,useDebugValue:su,useDeferredValue:function(n){return Ui().memoizedState=n},useTransition:function(){var n=tp(!1),i=n[0];return n=Sx.bind(null,n[1]),Ui().memoizedState=n,[i,n]},useMutableSource:function(){},useSyncExternalStore:function(n,i,a){var c=rn,d=Ui();if(en){if(a===void 0)throw Error(t(407));a=a()}else{if(a=i(),vn===null)throw Error(t(349));(os&30)!==0||Kh(c,i,a)}d.memoizedState=a;var m={value:a,getSnapshot:i};return d.queue=m,ip(Jh.bind(null,c,m,n),[n]),c.flags|=2048,Xa(9,Zh.bind(null,c,m,a,i),void 0,null),a},useId:function(){var n=Ui(),i=vn.identifierPrefix;if(en){var a=nr,c=tr;a=(c&~(1<<32-be(c)-1)).toString(32)+a,i=":"+i+"R"+a,a=Ga++,0<a&&(i+="H"+a.toString(32)),i+=":"}else a=yx++,i=":"+i+"r"+a.toString(32)+":";return n.memoizedState=i},unstable_isNewReconciler:!1},wx={readContext:ci,useCallback:lp,useContext:ci,useEffect:ru,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:nu,useRef:np,useState:function(){return nu(Wa)},useDebugValue:su,useDeferredValue:function(n){var i=ui();return up(i,hn.memoizedState,n)},useTransition:function(){var n=nu(Wa)[0],i=ui().memoizedState;return[n,i]},useMutableSource:qh,useSyncExternalStore:$h,useId:dp,unstable_isNewReconciler:!1},bx={readContext:ci,useCallback:lp,useContext:ci,useEffect:ru,useImperativeHandle:op,useInsertionEffect:rp,useLayoutEffect:sp,useMemo:cp,useReducer:iu,useRef:np,useState:function(){return iu(Wa)},useDebugValue:su,useDeferredValue:function(n){var i=ui();return hn===null?i.memoizedState=n:up(i,hn.memoizedState,n)},useTransition:function(){var n=iu(Wa)[0],i=ui().memoizedState;return[n,i]},useMutableSource:qh,useSyncExternalStore:$h,useId:dp,unstable_isNewReconciler:!1};function Si(n,i){if(n&&n.defaultProps){i=ue({},i),n=n.defaultProps;for(var a in n)i[a]===void 0&&(i[a]=n[a]);return i}return i}function au(n,i,a,c){i=n.memoizedState,a=a(c,i),a=a==null?i:ue({},i,a),n.memoizedState=a,n.lanes===0&&(n.updateQueue.baseState=a)}var Jo={isMounted:function(n){return(n=n._reactInternals)?fn(n)===n:!1},enqueueSetState:function(n,i,a){n=n._reactInternals;var c=Fn(),d=Fr(n),m=rr(c,d);m.payload=i,a!=null&&(m.callback=a),i=Lr(n,m,d),i!==null&&(Ti(i,n,d,c),Wo(i,n,d))},enqueueReplaceState:function(n,i,a){n=n._reactInternals;var c=Fn(),d=Fr(n),m=rr(c,d);m.tag=1,m.payload=i,a!=null&&(m.callback=a),i=Lr(n,m,d),i!==null&&(Ti(i,n,d,c),Wo(i,n,d))},enqueueForceUpdate:function(n,i){n=n._reactInternals;var a=Fn(),c=Fr(n),d=rr(a,c);d.tag=2,i!=null&&(d.callback=i),i=Lr(n,d,c),i!==null&&(Ti(i,n,c,a),Wo(i,n,c))}};function mp(n,i,a,c,d,m,b){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,m,b):i.prototype&&i.prototype.isPureReactComponent?!Pa(a,c)||!Pa(d,m):!0}function gp(n,i,a){var c=!1,d=Nr,m=i.contextType;return typeof m=="object"&&m!==null?m=ci(m):(d=Wn(i)?ns:bn.current,c=i.contextTypes,m=(c=c!=null)?Fs(n,d):Nr),i=new i(a,m),n.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,i.updater=Jo,n.stateNode=i,i._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=d,n.__reactInternalMemoizedMaskedChildContext=m),i}function xp(n,i,a,c){n=i.state,typeof i.componentWillReceiveProps=="function"&&i.componentWillReceiveProps(a,c),typeof i.UNSAFE_componentWillReceiveProps=="function"&&i.UNSAFE_componentWillReceiveProps(a,c),i.state!==n&&Jo.enqueueReplaceState(i,i.state,null)}function ou(n,i,a,c){var d=n.stateNode;d.props=a,d.state=n.memoizedState,d.refs={},Yc(n);var m=i.contextType;typeof m=="object"&&m!==null?d.context=ci(m):(m=Wn(i)?ns:bn.current,d.context=Fs(n,m)),d.state=n.memoizedState,m=i.getDerivedStateFromProps,typeof m=="function"&&(au(n,i,m,a),d.state=n.memoizedState),typeof i.getDerivedStateFromProps=="function"||typeof d.getSnapshotBeforeUpdate=="function"||typeof d.UNSAFE_componentWillMount!="function"&&typeof d.componentWillMount!="function"||(i=d.state,typeof d.componentWillMount=="function"&&d.componentWillMount(),typeof d.UNSAFE_componentWillMount=="function"&&d.UNSAFE_componentWillMount(),i!==d.state&&Jo.enqueueReplaceState(d,d.state,null),Xo(n,a,d,c),d.state=n.memoizedState),typeof d.componentDidMount=="function"&&(n.flags|=4194308)}function Xs(n,i){try{var a="",c=i;do a+=ze(c),c=c.return;while(c);var d=a}catch(m){d=`
Error generating stack: `+m.message+`
`+m.stack}return{value:n,source:i,stack:d,digest:null}}function lu(n,i,a){return{value:n,source:null,stack:a??null,digest:i??null}}function cu(n,i){try{console.error(i.value)}catch(a){setTimeout(function(){throw a})}}var Ax=typeof WeakMap=="function"?WeakMap:Map;function vp(n,i,a){a=rr(-1,a),a.tag=3,a.payload={element:null};var c=i.value;return a.callback=function(){sl||(sl=!0,Tu=c),cu(n,i)},a}function _p(n,i,a){a=rr(-1,a),a.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var d=i.value;a.payload=function(){return c(d)},a.callback=function(){cu(n,i)}}var m=n.stateNode;return m!==null&&typeof m.componentDidCatch=="function"&&(a.callback=function(){cu(n,i),typeof c!="function"&&(Ur===null?Ur=new Set([this]):Ur.add(this));var b=i.stack;this.componentDidCatch(i.value,{componentStack:b!==null?b:""})}),a}function yp(n,i,a){var c=n.pingCache;if(c===null){c=n.pingCache=new Ax;var d=new Set;c.set(i,d)}else d=c.get(i),d===void 0&&(d=new Set,c.set(i,d));d.has(a)||(d.add(a),n=Vx.bind(null,n,i,a),i.then(n,n))}function Sp(n){do{var i;if((i=n.tag===13)&&(i=n.memoizedState,i=i!==null?i.dehydrated!==null:!0),i)return n;n=n.return}while(n!==null);return null}function Mp(n,i,a,c,d){return(n.mode&1)===0?(n===i?n.flags|=65536:(n.flags|=128,a.flags|=131072,a.flags&=-52805,a.tag===1&&(a.alternate===null?a.tag=17:(i=rr(-1,1),i.tag=2,Lr(a,i,1))),a.lanes|=1),n):(n.flags|=65536,n.lanes=d,n)}var Rx=R.ReactCurrentOwner,Xn=!1;function On(n,i,a,c){i.child=n===null?Hh(i,null,a,c):Vs(i,n.child,a,c)}function Ep(n,i,a,c,d){a=a.render;var m=i.ref;return Gs(i,d),c=eu(n,i,a,c,m,d),a=tu(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,sr(n,i,d)):(en&&a&&Fc(i),i.flags|=1,On(n,i,c,d),i.child)}function Tp(n,i,a,c,d){if(n===null){var m=a.type;return typeof m=="function"&&!Pu(m)&&m.defaultProps===void 0&&a.compare===null&&a.defaultProps===void 0?(i.tag=15,i.type=m,wp(n,i,m,c,d)):(n=dl(a.type,null,c,i,i.mode,d),n.ref=i.ref,n.return=i,i.child=n)}if(m=n.child,(n.lanes&d)===0){var b=m.memoizedProps;if(a=a.compare,a=a!==null?a:Pa,a(b,c)&&n.ref===i.ref)return sr(n,i,d)}return i.flags|=1,n=Br(m,c),n.ref=i.ref,n.return=i,i.child=n}function wp(n,i,a,c,d){if(n!==null){var m=n.memoizedProps;if(Pa(m,c)&&n.ref===i.ref)if(Xn=!1,i.pendingProps=c=m,(n.lanes&d)!==0)(n.flags&131072)!==0&&(Xn=!0);else return i.lanes=n.lanes,sr(n,i,d)}return uu(n,i,a,c,d)}function bp(n,i,a){var c=i.pendingProps,d=c.children,m=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((i.mode&1)===0)i.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Ys,ni),ni|=a;else{if((a&1073741824)===0)return n=m!==null?m.baseLanes|a:a,i.lanes=i.childLanes=1073741824,i.memoizedState={baseLanes:n,cachePool:null,transitions:null},i.updateQueue=null,Xt(Ys,ni),ni|=n,null;i.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=m!==null?m.baseLanes:a,Xt(Ys,ni),ni|=c}else m!==null?(c=m.baseLanes|a,i.memoizedState=null):c=a,Xt(Ys,ni),ni|=c;return On(n,i,d,a),i.child}function Ap(n,i){var a=i.ref;(n===null&&a!==null||n!==null&&n.ref!==a)&&(i.flags|=512,i.flags|=2097152)}function uu(n,i,a,c,d){var m=Wn(a)?ns:bn.current;return m=Fs(i,m),Gs(i,d),a=eu(n,i,a,c,m,d),c=tu(),n!==null&&!Xn?(i.updateQueue=n.updateQueue,i.flags&=-2053,n.lanes&=~d,sr(n,i,d)):(en&&c&&Fc(i),i.flags|=1,On(n,i,a,d),i.child)}function Rp(n,i,a,c,d){if(Wn(a)){var m=!0;Oo(i)}else m=!1;if(Gs(i,d),i.stateNode===null)el(n,i),gp(i,a,c),ou(i,a,c,d),c=!0;else if(n===null){var b=i.stateNode,O=i.memoizedProps;b.props=O;var z=b.context,de=a.contextType;typeof de=="object"&&de!==null?de=ci(de):(de=Wn(a)?ns:bn.current,de=Fs(i,de));var ye=a.getDerivedStateFromProps,Se=typeof ye=="function"||typeof b.getSnapshotBeforeUpdate=="function";Se||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==c||z!==de)&&xp(i,b,c,de),Ir=!1;var _e=i.memoizedState;b.state=_e,Xo(i,c,b,d),z=i.memoizedState,O!==c||_e!==z||Gn.current||Ir?(typeof ye=="function"&&(au(i,a,ye,c),z=i.memoizedState),(O=Ir||mp(i,a,O,c,_e,z,de))?(Se||typeof b.UNSAFE_componentWillMount!="function"&&typeof b.componentWillMount!="function"||(typeof b.componentWillMount=="function"&&b.componentWillMount(),typeof b.UNSAFE_componentWillMount=="function"&&b.UNSAFE_componentWillMount()),typeof b.componentDidMount=="function"&&(i.flags|=4194308)):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),i.memoizedProps=c,i.memoizedState=z),b.props=c,b.state=z,b.context=de,c=O):(typeof b.componentDidMount=="function"&&(i.flags|=4194308),c=!1)}else{b=i.stateNode,Wh(n,i),O=i.memoizedProps,de=i.type===i.elementType?O:Si(i.type,O),b.props=de,Se=i.pendingProps,_e=b.context,z=a.contextType,typeof z=="object"&&z!==null?z=ci(z):(z=Wn(a)?ns:bn.current,z=Fs(i,z));var Be=a.getDerivedStateFromProps;(ye=typeof Be=="function"||typeof b.getSnapshotBeforeUpdate=="function")||typeof b.UNSAFE_componentWillReceiveProps!="function"&&typeof b.componentWillReceiveProps!="function"||(O!==Se||_e!==z)&&xp(i,b,c,z),Ir=!1,_e=i.memoizedState,b.state=_e,Xo(i,c,b,d);var Ye=i.memoizedState;O!==Se||_e!==Ye||Gn.current||Ir?(typeof Be=="function"&&(au(i,a,Be,c),Ye=i.memoizedState),(de=Ir||mp(i,a,de,c,_e,Ye,z)||!1)?(ye||typeof b.UNSAFE_componentWillUpdate!="function"&&typeof b.componentWillUpdate!="function"||(typeof b.componentWillUpdate=="function"&&b.componentWillUpdate(c,Ye,z),typeof b.UNSAFE_componentWillUpdate=="function"&&b.UNSAFE_componentWillUpdate(c,Ye,z)),typeof b.componentDidUpdate=="function"&&(i.flags|=4),typeof b.getSnapshotBeforeUpdate=="function"&&(i.flags|=1024)):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),i.memoizedProps=c,i.memoizedState=Ye),b.props=c,b.state=Ye,b.context=z,c=de):(typeof b.componentDidUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=4),typeof b.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&_e===n.memoizedState||(i.flags|=1024),c=!1)}return du(n,i,a,c,m,d)}function du(n,i,a,c,d,m){Ap(n,i);var b=(i.flags&128)!==0;if(!c&&!b)return d&&Lh(i,a,!1),sr(n,i,m);c=i.stateNode,Rx.current=i;var O=b&&typeof a.getDerivedStateFromError!="function"?null:c.render();return i.flags|=1,n!==null&&b?(i.child=Vs(i,n.child,null,m),i.child=Vs(i,null,O,m)):On(n,i,O,m),i.memoizedState=c.state,d&&Lh(i,a,!0),i.child}function Cp(n){var i=n.stateNode;i.pendingContext?Ph(n,i.pendingContext,i.pendingContext!==i.context):i.context&&Ph(n,i.context,!1),qc(n,i.containerInfo)}function Np(n,i,a,c,d){return zs(),Vc(d),i.flags|=256,On(n,i,a,c),i.child}var fu={dehydrated:null,treeContext:null,retryLane:0};function hu(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pp(n,i,a){var c=i.pendingProps,d=nn.current,m=!1,b=(i.flags&128)!==0,O;if((O=b)||(O=n!==null&&n.memoizedState===null?!1:(d&2)!==0),O?(m=!0,i.flags&=-129):(n===null||n.memoizedState!==null)&&(d|=1),Xt(nn,d&1),n===null)return zc(i),n=i.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((i.mode&1)===0?i.lanes=1:n.data==="$!"?i.lanes=8:i.lanes=1073741824,null):(b=c.children,n=c.fallback,m?(c=i.mode,m=i.child,b={mode:"hidden",children:b},(c&1)===0&&m!==null?(m.childLanes=0,m.pendingProps=b):m=fl(b,c,0,null),n=fs(n,c,a,null),m.return=i,n.return=i,m.sibling=n,i.child=m,i.child.memoizedState=hu(a),i.memoizedState=fu,n):pu(i,b));if(d=n.memoizedState,d!==null&&(O=d.dehydrated,O!==null))return Cx(n,i,b,c,O,d,a);if(m){m=c.fallback,b=i.mode,d=n.child,O=d.sibling;var z={mode:"hidden",children:c.children};return(b&1)===0&&i.child!==d?(c=i.child,c.childLanes=0,c.pendingProps=z,i.deletions=null):(c=Br(d,z),c.subtreeFlags=d.subtreeFlags&14680064),O!==null?m=Br(O,m):(m=fs(m,b,a,null),m.flags|=2),m.return=i,c.return=i,c.sibling=m,i.child=c,c=m,m=i.child,b=n.child.memoizedState,b=b===null?hu(a):{baseLanes:b.baseLanes|a,cachePool:null,transitions:b.transitions},m.memoizedState=b,m.childLanes=n.childLanes&~a,i.memoizedState=fu,c}return m=n.child,n=m.sibling,c=Br(m,{mode:"visible",children:c.children}),(i.mode&1)===0&&(c.lanes=a),c.return=i,c.sibling=null,n!==null&&(a=i.deletions,a===null?(i.deletions=[n],i.flags|=16):a.push(n)),i.child=c,i.memoizedState=null,c}function pu(n,i){return i=fl({mode:"visible",children:i},n.mode,0,null),i.return=n,n.child=i}function Qo(n,i,a,c){return c!==null&&Vc(c),Vs(i,n.child,null,a),n=pu(i,i.pendingProps.children),n.flags|=2,i.memoizedState=null,n}function Cx(n,i,a,c,d,m,b){if(a)return i.flags&256?(i.flags&=-257,c=lu(Error(t(422))),Qo(n,i,b,c)):i.memoizedState!==null?(i.child=n.child,i.flags|=128,null):(m=c.fallback,d=i.mode,c=fl({mode:"visible",children:c.children},d,0,null),m=fs(m,d,b,null),m.flags|=2,c.return=i,m.return=i,c.sibling=m,i.child=c,(i.mode&1)!==0&&Vs(i,n.child,null,b),i.child.memoizedState=hu(b),i.memoizedState=fu,m);if((i.mode&1)===0)return Qo(n,i,b,null);if(d.data==="$!"){if(c=d.nextSibling&&d.nextSibling.dataset,c)var O=c.dgst;return c=O,m=Error(t(419)),c=lu(m,c,void 0),Qo(n,i,b,c)}if(O=(b&n.childLanes)!==0,Xn||O){if(c=vn,c!==null){switch(b&-b){case 4:d=2;break;case 16:d=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:d=32;break;case 536870912:d=268435456;break;default:d=0}d=(d&(c.suspendedLanes|b))!==0?0:d,d!==0&&d!==m.retryLane&&(m.retryLane=d,ir(n,d),Ti(c,n,d,-1))}return Nu(),c=lu(Error(t(421))),Qo(n,i,b,c)}return d.data==="$?"?(i.flags|=128,i.child=n.child,i=Hx.bind(null,n),d._reactRetry=i,null):(n=m.treeContext,ti=Rr(d.nextSibling),ei=i,en=!0,yi=null,n!==null&&(oi[li++]=tr,oi[li++]=nr,oi[li++]=is,tr=n.id,nr=n.overflow,is=i),i=pu(i,c.children),i.flags|=4096,i)}function Ip(n,i,a){n.lanes|=i;var c=n.alternate;c!==null&&(c.lanes|=i),Xc(n.return,i,a)}function mu(n,i,a,c,d){var m=n.memoizedState;m===null?n.memoizedState={isBackwards:i,rendering:null,renderingStartTime:0,last:c,tail:a,tailMode:d}:(m.isBackwards=i,m.rendering=null,m.renderingStartTime=0,m.last=c,m.tail=a,m.tailMode=d)}function Lp(n,i,a){var c=i.pendingProps,d=c.revealOrder,m=c.tail;if(On(n,i,c.children,a),c=nn.current,(c&2)!==0)c=c&1|2,i.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=i.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Ip(n,a,i);else if(n.tag===19)Ip(n,a,i);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===i)break e;for(;n.sibling===null;){if(n.return===null||n.return===i)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xt(nn,c),(i.mode&1)===0)i.memoizedState=null;else switch(d){case"forwards":for(a=i.child,d=null;a!==null;)n=a.alternate,n!==null&&jo(n)===null&&(d=a),a=a.sibling;a=d,a===null?(d=i.child,i.child=null):(d=a.sibling,a.sibling=null),mu(i,!1,d,a,m);break;case"backwards":for(a=null,d=i.child,i.child=null;d!==null;){if(n=d.alternate,n!==null&&jo(n)===null){i.child=d;break}n=d.sibling,d.sibling=a,a=d,d=n}mu(i,!0,a,null,m);break;case"together":mu(i,!1,null,null,void 0);break;default:i.memoizedState=null}return i.child}function el(n,i){(i.mode&1)===0&&n!==null&&(n.alternate=null,i.alternate=null,i.flags|=2)}function sr(n,i,a){if(n!==null&&(i.dependencies=n.dependencies),ls|=i.lanes,(a&i.childLanes)===0)return null;if(n!==null&&i.child!==n.child)throw Error(t(153));if(i.child!==null){for(n=i.child,a=Br(n,n.pendingProps),i.child=a,a.return=i;n.sibling!==null;)n=n.sibling,a=a.sibling=Br(n,n.pendingProps),a.return=i;a.sibling=null}return i.child}function Nx(n,i,a){switch(i.tag){case 3:Cp(i),zs();break;case 5:Yh(i);break;case 1:Wn(i.type)&&Oo(i);break;case 4:qc(i,i.stateNode.containerInfo);break;case 10:var c=i.type._context,d=i.memoizedProps.value;Xt(Ho,c._currentValue),c._currentValue=d;break;case 13:if(c=i.memoizedState,c!==null)return c.dehydrated!==null?(Xt(nn,nn.current&1),i.flags|=128,null):(a&i.child.childLanes)!==0?Pp(n,i,a):(Xt(nn,nn.current&1),n=sr(n,i,a),n!==null?n.sibling:null);Xt(nn,nn.current&1);break;case 19:if(c=(a&i.childLanes)!==0,(n.flags&128)!==0){if(c)return Lp(n,i,a);i.flags|=128}if(d=i.memoizedState,d!==null&&(d.rendering=null,d.tail=null,d.lastEffect=null),Xt(nn,nn.current),c)break;return null;case 22:case 23:return i.lanes=0,bp(n,i,a)}return sr(n,i,a)}var Dp,gu,Up,Op;Dp=function(n,i){for(var a=i.child;a!==null;){if(a.tag===5||a.tag===6)n.appendChild(a.stateNode);else if(a.tag!==4&&a.child!==null){a.child.return=a,a=a.child;continue}if(a===i)break;for(;a.sibling===null;){if(a.return===null||a.return===i)return;a=a.return}a.sibling.return=a.return,a=a.sibling}},gu=function(){},Up=function(n,i,a,c){var d=n.memoizedProps;if(d!==c){n=i.stateNode,as(Di.current);var m=null;switch(a){case"input":d=ht(n,d),c=ht(n,c),m=[];break;case"select":d=ue({},d,{value:void 0}),c=ue({},c,{value:void 0}),m=[];break;case"textarea":d=St(n,d),c=St(n,c),m=[];break;default:typeof d.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=Lo)}Fe(a,c);var b;a=null;for(de in d)if(!c.hasOwnProperty(de)&&d.hasOwnProperty(de)&&d[de]!=null)if(de==="style"){var O=d[de];for(b in O)O.hasOwnProperty(b)&&(a||(a={}),a[b]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(o.hasOwnProperty(de)?m||(m=[]):(m=m||[]).push(de,null));for(de in c){var z=c[de];if(O=d!=null?d[de]:void 0,c.hasOwnProperty(de)&&z!==O&&(z!=null||O!=null))if(de==="style")if(O){for(b in O)!O.hasOwnProperty(b)||z&&z.hasOwnProperty(b)||(a||(a={}),a[b]="");for(b in z)z.hasOwnProperty(b)&&O[b]!==z[b]&&(a||(a={}),a[b]=z[b])}else a||(m||(m=[]),m.push(de,a)),a=z;else de==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,O=O?O.__html:void 0,z!=null&&O!==z&&(m=m||[]).push(de,z)):de==="children"?typeof z!="string"&&typeof z!="number"||(m=m||[]).push(de,""+z):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(o.hasOwnProperty(de)?(z!=null&&de==="onScroll"&&Kt("scroll",n),m||O===z||(m=[])):(m=m||[]).push(de,z))}a&&(m=m||[]).push("style",a);var de=m;(i.updateQueue=de)&&(i.flags|=4)}},Op=function(n,i,a,c){a!==c&&(i.flags|=4)};function ja(n,i){if(!en)switch(n.tailMode){case"hidden":i=n.tail;for(var a=null;i!==null;)i.alternate!==null&&(a=i),i=i.sibling;a===null?n.tail=null:a.sibling=null;break;case"collapsed":a=n.tail;for(var c=null;a!==null;)a.alternate!==null&&(c=a),a=a.sibling;c===null?i||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Rn(n){var i=n.alternate!==null&&n.alternate.child===n.child,a=0,c=0;if(i)for(var d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags&14680064,c|=d.flags&14680064,d.return=n,d=d.sibling;else for(d=n.child;d!==null;)a|=d.lanes|d.childLanes,c|=d.subtreeFlags,c|=d.flags,d.return=n,d=d.sibling;return n.subtreeFlags|=c,n.childLanes=a,i}function Px(n,i,a){var c=i.pendingProps;switch(kc(i),i.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Rn(i),null;case 1:return Wn(i.type)&&Uo(),Rn(i),null;case 3:return c=i.stateNode,Ws(),Zt(Gn),Zt(bn),Zc(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(zo(i)?i.flags|=4:n===null||n.memoizedState.isDehydrated&&(i.flags&256)===0||(i.flags|=1024,yi!==null&&(Au(yi),yi=null))),gu(n,i),Rn(i),null;case 5:$c(i);var d=as(Va.current);if(a=i.type,n!==null&&i.stateNode!=null)Up(n,i,a,c,d),n.ref!==i.ref&&(i.flags|=512,i.flags|=2097152);else{if(!c){if(i.stateNode===null)throw Error(t(166));return Rn(i),null}if(n=as(Di.current),zo(i)){c=i.stateNode,a=i.type;var m=i.memoizedProps;switch(c[Li]=i,c[Oa]=m,n=(i.mode&1)!==0,a){case"dialog":Kt("cancel",c),Kt("close",c);break;case"iframe":case"object":case"embed":Kt("load",c);break;case"video":case"audio":for(d=0;d<La.length;d++)Kt(La[d],c);break;case"source":Kt("error",c);break;case"img":case"image":case"link":Kt("error",c),Kt("load",c);break;case"details":Kt("toggle",c);break;case"input":vt(c,m),Kt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!m.multiple},Kt("invalid",c);break;case"textarea":W(c,m),Kt("invalid",c)}Fe(a,m),d=null;for(var b in m)if(m.hasOwnProperty(b)){var O=m[b];b==="children"?typeof O=="string"?c.textContent!==O&&(m.suppressHydrationWarning!==!0&&Io(c.textContent,O,n),d=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(m.suppressHydrationWarning!==!0&&Io(c.textContent,O,n),d=["children",""+O]):o.hasOwnProperty(b)&&O!=null&&b==="onScroll"&&Kt("scroll",c)}switch(a){case"input":je(c),ut(c,m,!0);break;case"textarea":je(c),Mt(c);break;case"select":case"option":break;default:typeof m.onClick=="function"&&(c.onclick=Lo)}c=d,i.updateQueue=c,c!==null&&(i.flags|=4)}else{b=d.nodeType===9?d:d.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=I(a)),n==="http://www.w3.org/1999/xhtml"?a==="script"?(n=b.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=b.createElement(a,{is:c.is}):(n=b.createElement(a),a==="select"&&(b=n,c.multiple?b.multiple=!0:c.size&&(b.size=c.size))):n=b.createElementNS(n,a),n[Li]=i,n[Oa]=c,Dp(n,i,!1,!1),i.stateNode=n;e:{switch(b=Ie(a,c),a){case"dialog":Kt("cancel",n),Kt("close",n),d=c;break;case"iframe":case"object":case"embed":Kt("load",n),d=c;break;case"video":case"audio":for(d=0;d<La.length;d++)Kt(La[d],n);d=c;break;case"source":Kt("error",n),d=c;break;case"img":case"image":case"link":Kt("error",n),Kt("load",n),d=c;break;case"details":Kt("toggle",n),d=c;break;case"input":vt(n,c),d=ht(n,c),Kt("invalid",n);break;case"option":d=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},d=ue({},c,{value:void 0}),Kt("invalid",n);break;case"textarea":W(n,c),d=St(n,c),Kt("invalid",n);break;default:d=c}Fe(a,d),O=d;for(m in O)if(O.hasOwnProperty(m)){var z=O[m];m==="style"?xe(n,z):m==="dangerouslySetInnerHTML"?(z=z?z.__html:void 0,z!=null&&Q(n,z)):m==="children"?typeof z=="string"?(a!=="textarea"||z!=="")&&he(n,z):typeof z=="number"&&he(n,""+z):m!=="suppressContentEditableWarning"&&m!=="suppressHydrationWarning"&&m!=="autoFocus"&&(o.hasOwnProperty(m)?z!=null&&m==="onScroll"&&Kt("scroll",n):z!=null&&U(n,m,z,b))}switch(a){case"input":je(n),ut(n,c,!1);break;case"textarea":je(n),Mt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+oe(c.value));break;case"select":n.multiple=!!c.multiple,m=c.value,m!=null?xt(n,!!c.multiple,m,!1):c.defaultValue!=null&&xt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof d.onClick=="function"&&(n.onclick=Lo)}switch(a){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(i.flags|=4)}i.ref!==null&&(i.flags|=512,i.flags|=2097152)}return Rn(i),null;case 6:if(n&&i.stateNode!=null)Op(n,i,n.memoizedProps,c);else{if(typeof c!="string"&&i.stateNode===null)throw Error(t(166));if(a=as(Va.current),as(Di.current),zo(i)){if(c=i.stateNode,a=i.memoizedProps,c[Li]=i,(m=c.nodeValue!==a)&&(n=ei,n!==null))switch(n.tag){case 3:Io(c.nodeValue,a,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Io(c.nodeValue,a,(n.mode&1)!==0)}m&&(i.flags|=4)}else c=(a.nodeType===9?a:a.ownerDocument).createTextNode(c),c[Li]=i,i.stateNode=c}return Rn(i),null;case 13:if(Zt(nn),c=i.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(en&&ti!==null&&(i.mode&1)!==0&&(i.flags&128)===0)Bh(),zs(),i.flags|=98560,m=!1;else if(m=zo(i),c!==null&&c.dehydrated!==null){if(n===null){if(!m)throw Error(t(318));if(m=i.memoizedState,m=m!==null?m.dehydrated:null,!m)throw Error(t(317));m[Li]=i}else zs(),(i.flags&128)===0&&(i.memoizedState=null),i.flags|=4;Rn(i),m=!1}else yi!==null&&(Au(yi),yi=null),m=!0;if(!m)return i.flags&65536?i:null}return(i.flags&128)!==0?(i.lanes=a,i):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(i.child.flags|=8192,(i.mode&1)!==0&&(n===null||(nn.current&1)!==0?pn===0&&(pn=3):Nu())),i.updateQueue!==null&&(i.flags|=4),Rn(i),null);case 4:return Ws(),gu(n,i),n===null&&Da(i.stateNode.containerInfo),Rn(i),null;case 10:return Wc(i.type._context),Rn(i),null;case 17:return Wn(i.type)&&Uo(),Rn(i),null;case 19:if(Zt(nn),m=i.memoizedState,m===null)return Rn(i),null;if(c=(i.flags&128)!==0,b=m.rendering,b===null)if(c)ja(m,!1);else{if(pn!==0||n!==null&&(n.flags&128)!==0)for(n=i.child;n!==null;){if(b=jo(n),b!==null){for(i.flags|=128,ja(m,!1),c=b.updateQueue,c!==null&&(i.updateQueue=c,i.flags|=4),i.subtreeFlags=0,c=a,a=i.child;a!==null;)m=a,n=c,m.flags&=14680066,b=m.alternate,b===null?(m.childLanes=0,m.lanes=n,m.child=null,m.subtreeFlags=0,m.memoizedProps=null,m.memoizedState=null,m.updateQueue=null,m.dependencies=null,m.stateNode=null):(m.childLanes=b.childLanes,m.lanes=b.lanes,m.child=b.child,m.subtreeFlags=0,m.deletions=null,m.memoizedProps=b.memoizedProps,m.memoizedState=b.memoizedState,m.updateQueue=b.updateQueue,m.type=b.type,n=b.dependencies,m.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),a=a.sibling;return Xt(nn,nn.current&1|2),i.child}n=n.sibling}m.tail!==null&&Ct()>qs&&(i.flags|=128,c=!0,ja(m,!1),i.lanes=4194304)}else{if(!c)if(n=jo(b),n!==null){if(i.flags|=128,c=!0,a=n.updateQueue,a!==null&&(i.updateQueue=a,i.flags|=4),ja(m,!0),m.tail===null&&m.tailMode==="hidden"&&!b.alternate&&!en)return Rn(i),null}else 2*Ct()-m.renderingStartTime>qs&&a!==1073741824&&(i.flags|=128,c=!0,ja(m,!1),i.lanes=4194304);m.isBackwards?(b.sibling=i.child,i.child=b):(a=m.last,a!==null?a.sibling=b:i.child=b,m.last=b)}return m.tail!==null?(i=m.tail,m.rendering=i,m.tail=i.sibling,m.renderingStartTime=Ct(),i.sibling=null,a=nn.current,Xt(nn,c?a&1|2:a&1),i):(Rn(i),null);case 22:case 23:return Cu(),c=i.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(i.flags|=8192),c&&(i.mode&1)!==0?(ni&1073741824)!==0&&(Rn(i),i.subtreeFlags&6&&(i.flags|=8192)):Rn(i),null;case 24:return null;case 25:return null}throw Error(t(156,i.tag))}function Ix(n,i){switch(kc(i),i.tag){case 1:return Wn(i.type)&&Uo(),n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 3:return Ws(),Zt(Gn),Zt(bn),Zc(),n=i.flags,(n&65536)!==0&&(n&128)===0?(i.flags=n&-65537|128,i):null;case 5:return $c(i),null;case 13:if(Zt(nn),n=i.memoizedState,n!==null&&n.dehydrated!==null){if(i.alternate===null)throw Error(t(340));zs()}return n=i.flags,n&65536?(i.flags=n&-65537|128,i):null;case 19:return Zt(nn),null;case 4:return Ws(),null;case 10:return Wc(i.type._context),null;case 22:case 23:return Cu(),null;case 24:return null;default:return null}}var tl=!1,Cn=!1,Lx=typeof WeakSet=="function"?WeakSet:Set,Ge=null;function js(n,i){var a=n.ref;if(a!==null)if(typeof a=="function")try{a(null)}catch(c){on(n,i,c)}else a.current=null}function xu(n,i,a){try{a()}catch(c){on(n,i,c)}}var Fp=!1;function Dx(n,i){if(Cc=So,n=mh(),Sc(n)){if("selectionStart"in n)var a={start:n.selectionStart,end:n.selectionEnd};else e:{a=(a=n.ownerDocument)&&a.defaultView||window;var c=a.getSelection&&a.getSelection();if(c&&c.rangeCount!==0){a=c.anchorNode;var d=c.anchorOffset,m=c.focusNode;c=c.focusOffset;try{a.nodeType,m.nodeType}catch{a=null;break e}var b=0,O=-1,z=-1,de=0,ye=0,Se=n,_e=null;t:for(;;){for(var Be;Se!==a||d!==0&&Se.nodeType!==3||(O=b+d),Se!==m||c!==0&&Se.nodeType!==3||(z=b+c),Se.nodeType===3&&(b+=Se.nodeValue.length),(Be=Se.firstChild)!==null;)_e=Se,Se=Be;for(;;){if(Se===n)break t;if(_e===a&&++de===d&&(O=b),_e===m&&++ye===c&&(z=b),(Be=Se.nextSibling)!==null)break;Se=_e,_e=Se.parentNode}Se=Be}a=O===-1||z===-1?null:{start:O,end:z}}else a=null}a=a||{start:0,end:0}}else a=null;for(Nc={focusedElem:n,selectionRange:a},So=!1,Ge=i;Ge!==null;)if(i=Ge,n=i.child,(i.subtreeFlags&1028)!==0&&n!==null)n.return=i,Ge=n;else for(;Ge!==null;){i=Ge;try{var Ye=i.alternate;if((i.flags&1024)!==0)switch(i.tag){case 0:case 11:case 15:break;case 1:if(Ye!==null){var $e=Ye.memoizedProps,ln=Ye.memoizedState,te=i.stateNode,X=te.getSnapshotBeforeUpdate(i.elementType===i.type?$e:Si(i.type,$e),ln);te.__reactInternalSnapshotBeforeUpdate=X}break;case 3:var ae=i.stateNode.containerInfo;ae.nodeType===1?ae.textContent="":ae.nodeType===9&&ae.documentElement&&ae.removeChild(ae.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Te){on(i,i.return,Te)}if(n=i.sibling,n!==null){n.return=i.return,Ge=n;break}Ge=i.return}return Ye=Fp,Fp=!1,Ye}function Ya(n,i,a){var c=i.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var d=c=c.next;do{if((d.tag&n)===n){var m=d.destroy;d.destroy=void 0,m!==void 0&&xu(i,a,m)}d=d.next}while(d!==c)}}function nl(n,i){if(i=i.updateQueue,i=i!==null?i.lastEffect:null,i!==null){var a=i=i.next;do{if((a.tag&n)===n){var c=a.create;a.destroy=c()}a=a.next}while(a!==i)}}function vu(n){var i=n.ref;if(i!==null){var a=n.stateNode;switch(n.tag){case 5:n=a;break;default:n=a}typeof i=="function"?i(n):i.current=n}}function kp(n){var i=n.alternate;i!==null&&(n.alternate=null,kp(i)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(i=n.stateNode,i!==null&&(delete i[Li],delete i[Oa],delete i[Dc],delete i[gx],delete i[xx])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Bp(n){return n.tag===5||n.tag===3||n.tag===4}function zp(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Bp(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function _u(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.nodeType===8?a.parentNode.insertBefore(n,i):a.insertBefore(n,i):(a.nodeType===8?(i=a.parentNode,i.insertBefore(n,a)):(i=a,i.appendChild(n)),a=a._reactRootContainer,a!=null||i.onclick!==null||(i.onclick=Lo));else if(c!==4&&(n=n.child,n!==null))for(_u(n,i,a),n=n.sibling;n!==null;)_u(n,i,a),n=n.sibling}function yu(n,i,a){var c=n.tag;if(c===5||c===6)n=n.stateNode,i?a.insertBefore(n,i):a.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(yu(n,i,a),n=n.sibling;n!==null;)yu(n,i,a),n=n.sibling}var Mn=null,Mi=!1;function Dr(n,i,a){for(a=a.child;a!==null;)Vp(n,i,a),a=a.sibling}function Vp(n,i,a){if(Ee&&typeof Ee.onCommitFiberUnmount=="function")try{Ee.onCommitFiberUnmount(ee,a)}catch{}switch(a.tag){case 5:Cn||js(a,i);case 6:var c=Mn,d=Mi;Mn=null,Dr(n,i,a),Mn=c,Mi=d,Mn!==null&&(Mi?(n=Mn,a=a.stateNode,n.nodeType===8?n.parentNode.removeChild(a):n.removeChild(a)):Mn.removeChild(a.stateNode));break;case 18:Mn!==null&&(Mi?(n=Mn,a=a.stateNode,n.nodeType===8?Lc(n.parentNode,a):n.nodeType===1&&Lc(n,a),wa(n)):Lc(Mn,a.stateNode));break;case 4:c=Mn,d=Mi,Mn=a.stateNode.containerInfo,Mi=!0,Dr(n,i,a),Mn=c,Mi=d;break;case 0:case 11:case 14:case 15:if(!Cn&&(c=a.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){d=c=c.next;do{var m=d,b=m.destroy;m=m.tag,b!==void 0&&((m&2)!==0||(m&4)!==0)&&xu(a,i,b),d=d.next}while(d!==c)}Dr(n,i,a);break;case 1:if(!Cn&&(js(a,i),c=a.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=a.memoizedProps,c.state=a.memoizedState,c.componentWillUnmount()}catch(O){on(a,i,O)}Dr(n,i,a);break;case 21:Dr(n,i,a);break;case 22:a.mode&1?(Cn=(c=Cn)||a.memoizedState!==null,Dr(n,i,a),Cn=c):Dr(n,i,a);break;default:Dr(n,i,a)}}function Hp(n){var i=n.updateQueue;if(i!==null){n.updateQueue=null;var a=n.stateNode;a===null&&(a=n.stateNode=new Lx),i.forEach(function(c){var d=Gx.bind(null,n,c);a.has(c)||(a.add(c),c.then(d,d))})}}function Ei(n,i){var a=i.deletions;if(a!==null)for(var c=0;c<a.length;c++){var d=a[c];try{var m=n,b=i,O=b;e:for(;O!==null;){switch(O.tag){case 5:Mn=O.stateNode,Mi=!1;break e;case 3:Mn=O.stateNode.containerInfo,Mi=!0;break e;case 4:Mn=O.stateNode.containerInfo,Mi=!0;break e}O=O.return}if(Mn===null)throw Error(t(160));Vp(m,b,d),Mn=null,Mi=!1;var z=d.alternate;z!==null&&(z.return=null),d.return=null}catch(de){on(d,i,de)}}if(i.subtreeFlags&12854)for(i=i.child;i!==null;)Gp(i,n),i=i.sibling}function Gp(n,i){var a=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ei(i,n),Oi(n),c&4){try{Ya(3,n,n.return),nl(3,n)}catch($e){on(n,n.return,$e)}try{Ya(5,n,n.return)}catch($e){on(n,n.return,$e)}}break;case 1:Ei(i,n),Oi(n),c&512&&a!==null&&js(a,a.return);break;case 5:if(Ei(i,n),Oi(n),c&512&&a!==null&&js(a,a.return),n.flags&32){var d=n.stateNode;try{he(d,"")}catch($e){on(n,n.return,$e)}}if(c&4&&(d=n.stateNode,d!=null)){var m=n.memoizedProps,b=a!==null?a.memoizedProps:m,O=n.type,z=n.updateQueue;if(n.updateQueue=null,z!==null)try{O==="input"&&m.type==="radio"&&m.name!=null&&dt(d,m),Ie(O,b);var de=Ie(O,m);for(b=0;b<z.length;b+=2){var ye=z[b],Se=z[b+1];ye==="style"?xe(d,Se):ye==="dangerouslySetInnerHTML"?Q(d,Se):ye==="children"?he(d,Se):U(d,ye,Se,de)}switch(O){case"input":lt(d,m);break;case"textarea":Yt(d,m);break;case"select":var _e=d._wrapperState.wasMultiple;d._wrapperState.wasMultiple=!!m.multiple;var Be=m.value;Be!=null?xt(d,!!m.multiple,Be,!1):_e!==!!m.multiple&&(m.defaultValue!=null?xt(d,!!m.multiple,m.defaultValue,!0):xt(d,!!m.multiple,m.multiple?[]:"",!1))}d[Oa]=m}catch($e){on(n,n.return,$e)}}break;case 6:if(Ei(i,n),Oi(n),c&4){if(n.stateNode===null)throw Error(t(162));d=n.stateNode,m=n.memoizedProps;try{d.nodeValue=m}catch($e){on(n,n.return,$e)}}break;case 3:if(Ei(i,n),Oi(n),c&4&&a!==null&&a.memoizedState.isDehydrated)try{wa(i.containerInfo)}catch($e){on(n,n.return,$e)}break;case 4:Ei(i,n),Oi(n);break;case 13:Ei(i,n),Oi(n),d=n.child,d.flags&8192&&(m=d.memoizedState!==null,d.stateNode.isHidden=m,!m||d.alternate!==null&&d.alternate.memoizedState!==null||(Eu=Ct())),c&4&&Hp(n);break;case 22:if(ye=a!==null&&a.memoizedState!==null,n.mode&1?(Cn=(de=Cn)||ye,Ei(i,n),Cn=de):Ei(i,n),Oi(n),c&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!ye&&(n.mode&1)!==0)for(Ge=n,ye=n.child;ye!==null;){for(Se=Ge=ye;Ge!==null;){switch(_e=Ge,Be=_e.child,_e.tag){case 0:case 11:case 14:case 15:Ya(4,_e,_e.return);break;case 1:js(_e,_e.return);var Ye=_e.stateNode;if(typeof Ye.componentWillUnmount=="function"){c=_e,a=_e.return;try{i=c,Ye.props=i.memoizedProps,Ye.state=i.memoizedState,Ye.componentWillUnmount()}catch($e){on(c,a,$e)}}break;case 5:js(_e,_e.return);break;case 22:if(_e.memoizedState!==null){jp(Se);continue}}Be!==null?(Be.return=_e,Ge=Be):jp(Se)}ye=ye.sibling}e:for(ye=null,Se=n;;){if(Se.tag===5){if(ye===null){ye=Se;try{d=Se.stateNode,de?(m=d.style,typeof m.setProperty=="function"?m.setProperty("display","none","important"):m.display="none"):(O=Se.stateNode,z=Se.memoizedProps.style,b=z!=null&&z.hasOwnProperty("display")?z.display:null,O.style.display=me("display",b))}catch($e){on(n,n.return,$e)}}}else if(Se.tag===6){if(ye===null)try{Se.stateNode.nodeValue=de?"":Se.memoizedProps}catch($e){on(n,n.return,$e)}}else if((Se.tag!==22&&Se.tag!==23||Se.memoizedState===null||Se===n)&&Se.child!==null){Se.child.return=Se,Se=Se.child;continue}if(Se===n)break e;for(;Se.sibling===null;){if(Se.return===null||Se.return===n)break e;ye===Se&&(ye=null),Se=Se.return}ye===Se&&(ye=null),Se.sibling.return=Se.return,Se=Se.sibling}}break;case 19:Ei(i,n),Oi(n),c&4&&Hp(n);break;case 21:break;default:Ei(i,n),Oi(n)}}function Oi(n){var i=n.flags;if(i&2){try{e:{for(var a=n.return;a!==null;){if(Bp(a)){var c=a;break e}a=a.return}throw Error(t(160))}switch(c.tag){case 5:var d=c.stateNode;c.flags&32&&(he(d,""),c.flags&=-33);var m=zp(n);yu(n,m,d);break;case 3:case 4:var b=c.stateNode.containerInfo,O=zp(n);_u(n,O,b);break;default:throw Error(t(161))}}catch(z){on(n,n.return,z)}n.flags&=-3}i&4096&&(n.flags&=-4097)}function Ux(n,i,a){Ge=n,Wp(n)}function Wp(n,i,a){for(var c=(n.mode&1)!==0;Ge!==null;){var d=Ge,m=d.child;if(d.tag===22&&c){var b=d.memoizedState!==null||tl;if(!b){var O=d.alternate,z=O!==null&&O.memoizedState!==null||Cn;O=tl;var de=Cn;if(tl=b,(Cn=z)&&!de)for(Ge=d;Ge!==null;)b=Ge,z=b.child,b.tag===22&&b.memoizedState!==null?Yp(d):z!==null?(z.return=b,Ge=z):Yp(d);for(;m!==null;)Ge=m,Wp(m),m=m.sibling;Ge=d,tl=O,Cn=de}Xp(n)}else(d.subtreeFlags&8772)!==0&&m!==null?(m.return=d,Ge=m):Xp(n)}}function Xp(n){for(;Ge!==null;){var i=Ge;if((i.flags&8772)!==0){var a=i.alternate;try{if((i.flags&8772)!==0)switch(i.tag){case 0:case 11:case 15:Cn||nl(5,i);break;case 1:var c=i.stateNode;if(i.flags&4&&!Cn)if(a===null)c.componentDidMount();else{var d=i.elementType===i.type?a.memoizedProps:Si(i.type,a.memoizedProps);c.componentDidUpdate(d,a.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var m=i.updateQueue;m!==null&&jh(i,m,c);break;case 3:var b=i.updateQueue;if(b!==null){if(a=null,i.child!==null)switch(i.child.tag){case 5:a=i.child.stateNode;break;case 1:a=i.child.stateNode}jh(i,b,a)}break;case 5:var O=i.stateNode;if(a===null&&i.flags&4){a=O;var z=i.memoizedProps;switch(i.type){case"button":case"input":case"select":case"textarea":z.autoFocus&&a.focus();break;case"img":z.src&&(a.src=z.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(i.memoizedState===null){var de=i.alternate;if(de!==null){var ye=de.memoizedState;if(ye!==null){var Se=ye.dehydrated;Se!==null&&wa(Se)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Cn||i.flags&512&&vu(i)}catch(_e){on(i,i.return,_e)}}if(i===n){Ge=null;break}if(a=i.sibling,a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function jp(n){for(;Ge!==null;){var i=Ge;if(i===n){Ge=null;break}var a=i.sibling;if(a!==null){a.return=i.return,Ge=a;break}Ge=i.return}}function Yp(n){for(;Ge!==null;){var i=Ge;try{switch(i.tag){case 0:case 11:case 15:var a=i.return;try{nl(4,i)}catch(z){on(i,a,z)}break;case 1:var c=i.stateNode;if(typeof c.componentDidMount=="function"){var d=i.return;try{c.componentDidMount()}catch(z){on(i,d,z)}}var m=i.return;try{vu(i)}catch(z){on(i,m,z)}break;case 5:var b=i.return;try{vu(i)}catch(z){on(i,b,z)}}}catch(z){on(i,i.return,z)}if(i===n){Ge=null;break}var O=i.sibling;if(O!==null){O.return=i.return,Ge=O;break}Ge=i.return}}var Ox=Math.ceil,il=R.ReactCurrentDispatcher,Su=R.ReactCurrentOwner,di=R.ReactCurrentBatchConfig,Ut=0,vn=null,un=null,En=0,ni=0,Ys=Cr(0),pn=0,qa=null,ls=0,rl=0,Mu=0,$a=null,jn=null,Eu=0,qs=1/0,ar=null,sl=!1,Tu=null,Ur=null,al=!1,Or=null,ol=0,Ka=0,wu=null,ll=-1,cl=0;function Fn(){return(Ut&6)!==0?Ct():ll!==-1?ll:ll=Ct()}function Fr(n){return(n.mode&1)===0?1:(Ut&2)!==0&&En!==0?En&-En:_x.transition!==null?(cl===0&&(cl=ke()),cl):(n=wt,n!==0||(n=window.event,n=n===void 0?16:$f(n.type)),n)}function Ti(n,i,a,c){if(50<Ka)throw Ka=0,wu=null,Error(t(185));Et(n,a,c),((Ut&2)===0||n!==vn)&&(n===vn&&((Ut&2)===0&&(rl|=a),pn===4&&kr(n,En)),Yn(n,c),a===1&&Ut===0&&(i.mode&1)===0&&(qs=Ct()+500,Fo&&Pr()))}function Yn(n,i){var a=n.callbackNode;zt(n,i);var c=Wt(n,n===vn?En:0);if(c===0)a!==null&&Sr(a),n.callbackNode=null,n.callbackPriority=0;else if(i=c&-c,n.callbackPriority!==i){if(a!=null&&Sr(a),i===1)n.tag===0?vx($p.bind(null,n)):Dh($p.bind(null,n)),px(function(){(Ut&6)===0&&Pr()}),a=null;else{switch(Ji(c)){case 1:a=gi;break;case 4:a=A;break;case 16:a=q;break;case 536870912:a=ne;break;default:a=q}a=im(a,qp.bind(null,n))}n.callbackPriority=i,n.callbackNode=a}}function qp(n,i){if(ll=-1,cl=0,(Ut&6)!==0)throw Error(t(327));var a=n.callbackNode;if($s()&&n.callbackNode!==a)return null;var c=Wt(n,n===vn?En:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||i)i=ul(n,c);else{i=c;var d=Ut;Ut|=2;var m=Zp();(vn!==n||En!==i)&&(ar=null,qs=Ct()+500,us(n,i));do try{Bx();break}catch(O){Kp(n,O)}while(!0);Gc(),il.current=m,Ut=d,un!==null?i=0:(vn=null,En=0,i=pn)}if(i!==0){if(i===2&&(d=cn(n),d!==0&&(c=d,i=bu(n,d))),i===1)throw a=qa,us(n,0),kr(n,c),Yn(n,Ct()),a;if(i===6)kr(n,c);else{if(d=n.current.alternate,(c&30)===0&&!Fx(d)&&(i=ul(n,c),i===2&&(m=cn(n),m!==0&&(c=m,i=bu(n,m))),i===1))throw a=qa,us(n,0),kr(n,c),Yn(n,Ct()),a;switch(n.finishedWork=d,n.finishedLanes=c,i){case 0:case 1:throw Error(t(345));case 2:ds(n,jn,ar);break;case 3:if(kr(n,c),(c&130023424)===c&&(i=Eu+500-Ct(),10<i)){if(Wt(n,0)!==0)break;if(d=n.suspendedLanes,(d&c)!==c){Fn(),n.pingedLanes|=n.suspendedLanes&d;break}n.timeoutHandle=Ic(ds.bind(null,n,jn,ar),i);break}ds(n,jn,ar);break;case 4:if(kr(n,c),(c&4194240)===c)break;for(i=n.eventTimes,d=-1;0<c;){var b=31-be(c);m=1<<b,b=i[b],b>d&&(d=b),c&=~m}if(c=d,c=Ct()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*Ox(c/1960))-c,10<c){n.timeoutHandle=Ic(ds.bind(null,n,jn,ar),c);break}ds(n,jn,ar);break;case 5:ds(n,jn,ar);break;default:throw Error(t(329))}}}return Yn(n,Ct()),n.callbackNode===a?qp.bind(null,n):null}function bu(n,i){var a=$a;return n.current.memoizedState.isDehydrated&&(us(n,i).flags|=256),n=ul(n,i),n!==2&&(i=jn,jn=a,i!==null&&Au(i)),n}function Au(n){jn===null?jn=n:jn.push.apply(jn,n)}function Fx(n){for(var i=n;;){if(i.flags&16384){var a=i.updateQueue;if(a!==null&&(a=a.stores,a!==null))for(var c=0;c<a.length;c++){var d=a[c],m=d.getSnapshot;d=d.value;try{if(!_i(m(),d))return!1}catch{return!1}}}if(a=i.child,i.subtreeFlags&16384&&a!==null)a.return=i,i=a;else{if(i===n)break;for(;i.sibling===null;){if(i.return===null||i.return===n)return!0;i=i.return}i.sibling.return=i.return,i=i.sibling}}return!0}function kr(n,i){for(i&=~Mu,i&=~rl,n.suspendedLanes|=i,n.pingedLanes&=~i,n=n.expirationTimes;0<i;){var a=31-be(i),c=1<<a;n[a]=-1,i&=~c}}function $p(n){if((Ut&6)!==0)throw Error(t(327));$s();var i=Wt(n,0);if((i&1)===0)return Yn(n,Ct()),null;var a=ul(n,i);if(n.tag!==0&&a===2){var c=cn(n);c!==0&&(i=c,a=bu(n,c))}if(a===1)throw a=qa,us(n,0),kr(n,i),Yn(n,Ct()),a;if(a===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=i,ds(n,jn,ar),Yn(n,Ct()),null}function Ru(n,i){var a=Ut;Ut|=1;try{return n(i)}finally{Ut=a,Ut===0&&(qs=Ct()+500,Fo&&Pr())}}function cs(n){Or!==null&&Or.tag===0&&(Ut&6)===0&&$s();var i=Ut;Ut|=1;var a=di.transition,c=wt;try{if(di.transition=null,wt=1,n)return n()}finally{wt=c,di.transition=a,Ut=i,(Ut&6)===0&&Pr()}}function Cu(){ni=Ys.current,Zt(Ys)}function us(n,i){n.finishedWork=null,n.finishedLanes=0;var a=n.timeoutHandle;if(a!==-1&&(n.timeoutHandle=-1,hx(a)),un!==null)for(a=un.return;a!==null;){var c=a;switch(kc(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Uo();break;case 3:Ws(),Zt(Gn),Zt(bn),Zc();break;case 5:$c(c);break;case 4:Ws();break;case 13:Zt(nn);break;case 19:Zt(nn);break;case 10:Wc(c.type._context);break;case 22:case 23:Cu()}a=a.return}if(vn=n,un=n=Br(n.current,null),En=ni=i,pn=0,qa=null,Mu=rl=ls=0,jn=$a=null,ss!==null){for(i=0;i<ss.length;i++)if(a=ss[i],c=a.interleaved,c!==null){a.interleaved=null;var d=c.next,m=a.pending;if(m!==null){var b=m.next;m.next=d,c.next=b}a.pending=c}ss=null}return n}function Kp(n,i){do{var a=un;try{if(Gc(),Yo.current=Zo,qo){for(var c=rn.memoizedState;c!==null;){var d=c.queue;d!==null&&(d.pending=null),c=c.next}qo=!1}if(os=0,xn=hn=rn=null,Ha=!1,Ga=0,Su.current=null,a===null||a.return===null){pn=1,qa=i,un=null;break}e:{var m=n,b=a.return,O=a,z=i;if(i=En,O.flags|=32768,z!==null&&typeof z=="object"&&typeof z.then=="function"){var de=z,ye=O,Se=ye.tag;if((ye.mode&1)===0&&(Se===0||Se===11||Se===15)){var _e=ye.alternate;_e?(ye.updateQueue=_e.updateQueue,ye.memoizedState=_e.memoizedState,ye.lanes=_e.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Be=Sp(b);if(Be!==null){Be.flags&=-257,Mp(Be,b,O,m,i),Be.mode&1&&yp(m,de,i),i=Be,z=de;var Ye=i.updateQueue;if(Ye===null){var $e=new Set;$e.add(z),i.updateQueue=$e}else Ye.add(z);break e}else{if((i&1)===0){yp(m,de,i),Nu();break e}z=Error(t(426))}}else if(en&&O.mode&1){var ln=Sp(b);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),Mp(ln,b,O,m,i),Vc(Xs(z,O));break e}}m=z=Xs(z,O),pn!==4&&(pn=2),$a===null?$a=[m]:$a.push(m),m=b;do{switch(m.tag){case 3:m.flags|=65536,i&=-i,m.lanes|=i;var te=vp(m,z,i);Xh(m,te);break e;case 1:O=z;var X=m.type,ae=m.stateNode;if((m.flags&128)===0&&(typeof X.getDerivedStateFromError=="function"||ae!==null&&typeof ae.componentDidCatch=="function"&&(Ur===null||!Ur.has(ae)))){m.flags|=65536,i&=-i,m.lanes|=i;var Te=_p(m,O,i);Xh(m,Te);break e}}m=m.return}while(m!==null)}Qp(a)}catch(Je){i=Je,un===a&&a!==null&&(un=a=a.return);continue}break}while(!0)}function Zp(){var n=il.current;return il.current=Zo,n===null?Zo:n}function Nu(){(pn===0||pn===3||pn===2)&&(pn=4),vn===null||(ls&268435455)===0&&(rl&268435455)===0||kr(vn,En)}function ul(n,i){var a=Ut;Ut|=2;var c=Zp();(vn!==n||En!==i)&&(ar=null,us(n,i));do try{kx();break}catch(d){Kp(n,d)}while(!0);if(Gc(),Ut=a,il.current=c,un!==null)throw Error(t(261));return vn=null,En=0,pn}function kx(){for(;un!==null;)Jp(un)}function Bx(){for(;un!==null&&!It();)Jp(un)}function Jp(n){var i=nm(n.alternate,n,ni);n.memoizedProps=n.pendingProps,i===null?Qp(n):un=i,Su.current=null}function Qp(n){var i=n;do{var a=i.alternate;if(n=i.return,(i.flags&32768)===0){if(a=Px(a,i,ni),a!==null){un=a;return}}else{if(a=Ix(a,i),a!==null){a.flags&=32767,un=a;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{pn=6,un=null;return}}if(i=i.sibling,i!==null){un=i;return}un=i=n}while(i!==null);pn===0&&(pn=5)}function ds(n,i,a){var c=wt,d=di.transition;try{di.transition=null,wt=1,zx(n,i,a,c)}finally{di.transition=d,wt=c}return null}function zx(n,i,a,c){do $s();while(Or!==null);if((Ut&6)!==0)throw Error(t(327));a=n.finishedWork;var d=n.finishedLanes;if(a===null)return null;if(n.finishedWork=null,n.finishedLanes=0,a===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var m=a.lanes|a.childLanes;if(Vn(n,m),n===vn&&(un=vn=null,En=0),(a.subtreeFlags&2064)===0&&(a.flags&2064)===0||al||(al=!0,im(q,function(){return $s(),null})),m=(a.flags&15990)!==0,(a.subtreeFlags&15990)!==0||m){m=di.transition,di.transition=null;var b=wt;wt=1;var O=Ut;Ut|=4,Su.current=null,Dx(n,a),Gp(a,n),ax(Nc),So=!!Cc,Nc=Cc=null,n.current=a,Ux(a),qt(),Ut=O,wt=b,di.transition=m}else n.current=a;if(al&&(al=!1,Or=n,ol=d),m=n.pendingLanes,m===0&&(Ur=null),Ve(a.stateNode),Yn(n,Ct()),i!==null)for(c=n.onRecoverableError,a=0;a<i.length;a++)d=i[a],c(d.value,{componentStack:d.stack,digest:d.digest});if(sl)throw sl=!1,n=Tu,Tu=null,n;return(ol&1)!==0&&n.tag!==0&&$s(),m=n.pendingLanes,(m&1)!==0?n===wu?Ka++:(Ka=0,wu=n):Ka=0,Pr(),null}function $s(){if(Or!==null){var n=Ji(ol),i=di.transition,a=wt;try{if(di.transition=null,wt=16>n?16:n,Or===null)var c=!1;else{if(n=Or,Or=null,ol=0,(Ut&6)!==0)throw Error(t(331));var d=Ut;for(Ut|=4,Ge=n.current;Ge!==null;){var m=Ge,b=m.child;if((Ge.flags&16)!==0){var O=m.deletions;if(O!==null){for(var z=0;z<O.length;z++){var de=O[z];for(Ge=de;Ge!==null;){var ye=Ge;switch(ye.tag){case 0:case 11:case 15:Ya(8,ye,m)}var Se=ye.child;if(Se!==null)Se.return=ye,Ge=Se;else for(;Ge!==null;){ye=Ge;var _e=ye.sibling,Be=ye.return;if(kp(ye),ye===de){Ge=null;break}if(_e!==null){_e.return=Be,Ge=_e;break}Ge=Be}}}var Ye=m.alternate;if(Ye!==null){var $e=Ye.child;if($e!==null){Ye.child=null;do{var ln=$e.sibling;$e.sibling=null,$e=ln}while($e!==null)}}Ge=m}}if((m.subtreeFlags&2064)!==0&&b!==null)b.return=m,Ge=b;else e:for(;Ge!==null;){if(m=Ge,(m.flags&2048)!==0)switch(m.tag){case 0:case 11:case 15:Ya(9,m,m.return)}var te=m.sibling;if(te!==null){te.return=m.return,Ge=te;break e}Ge=m.return}}var X=n.current;for(Ge=X;Ge!==null;){b=Ge;var ae=b.child;if((b.subtreeFlags&2064)!==0&&ae!==null)ae.return=b,Ge=ae;else e:for(b=X;Ge!==null;){if(O=Ge,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:nl(9,O)}}catch(Je){on(O,O.return,Je)}if(O===b){Ge=null;break e}var Te=O.sibling;if(Te!==null){Te.return=O.return,Ge=Te;break e}Ge=O.return}}if(Ut=d,Pr(),Ee&&typeof Ee.onPostCommitFiberRoot=="function")try{Ee.onPostCommitFiberRoot(ee,n)}catch{}c=!0}return c}finally{wt=a,di.transition=i}}return!1}function em(n,i,a){i=Xs(a,i),i=vp(n,i,1),n=Lr(n,i,1),i=Fn(),n!==null&&(Et(n,1,i),Yn(n,i))}function on(n,i,a){if(n.tag===3)em(n,n,a);else for(;i!==null;){if(i.tag===3){em(i,n,a);break}else if(i.tag===1){var c=i.stateNode;if(typeof i.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Ur===null||!Ur.has(c))){n=Xs(a,n),n=_p(i,n,1),i=Lr(i,n,1),n=Fn(),i!==null&&(Et(i,1,n),Yn(i,n));break}}i=i.return}}function Vx(n,i,a){var c=n.pingCache;c!==null&&c.delete(i),i=Fn(),n.pingedLanes|=n.suspendedLanes&a,vn===n&&(En&a)===a&&(pn===4||pn===3&&(En&130023424)===En&&500>Ct()-Eu?us(n,0):Mu|=a),Yn(n,i)}function tm(n,i){i===0&&((n.mode&1)===0?i=1:(i=Ze,Ze<<=1,(Ze&130023424)===0&&(Ze=4194304)));var a=Fn();n=ir(n,i),n!==null&&(Et(n,i,a),Yn(n,a))}function Hx(n){var i=n.memoizedState,a=0;i!==null&&(a=i.retryLane),tm(n,a)}function Gx(n,i){var a=0;switch(n.tag){case 13:var c=n.stateNode,d=n.memoizedState;d!==null&&(a=d.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(i),tm(n,a)}var nm;nm=function(n,i,a){if(n!==null)if(n.memoizedProps!==i.pendingProps||Gn.current)Xn=!0;else{if((n.lanes&a)===0&&(i.flags&128)===0)return Xn=!1,Nx(n,i,a);Xn=(n.flags&131072)!==0}else Xn=!1,en&&(i.flags&1048576)!==0&&Uh(i,Bo,i.index);switch(i.lanes=0,i.tag){case 2:var c=i.type;el(n,i),n=i.pendingProps;var d=Fs(i,bn.current);Gs(i,a),d=eu(null,i,c,n,d,a);var m=tu();return i.flags|=1,typeof d=="object"&&d!==null&&typeof d.render=="function"&&d.$$typeof===void 0?(i.tag=1,i.memoizedState=null,i.updateQueue=null,Wn(c)?(m=!0,Oo(i)):m=!1,i.memoizedState=d.state!==null&&d.state!==void 0?d.state:null,Yc(i),d.updater=Jo,i.stateNode=d,d._reactInternals=i,ou(i,c,n,a),i=du(null,i,c,!0,m,a)):(i.tag=0,en&&m&&Fc(i),On(null,i,d,a),i=i.child),i;case 16:c=i.elementType;e:{switch(el(n,i),n=i.pendingProps,d=c._init,c=d(c._payload),i.type=c,d=i.tag=Xx(c),n=Si(c,n),d){case 0:i=uu(null,i,c,n,a);break e;case 1:i=Rp(null,i,c,n,a);break e;case 11:i=Ep(null,i,c,n,a);break e;case 14:i=Tp(null,i,c,Si(c.type,n),a);break e}throw Error(t(306,c,""))}return i;case 0:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Si(c,d),uu(n,i,c,d,a);case 1:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Si(c,d),Rp(n,i,c,d,a);case 3:e:{if(Cp(i),n===null)throw Error(t(387));c=i.pendingProps,m=i.memoizedState,d=m.element,Wh(n,i),Xo(i,c,null,a);var b=i.memoizedState;if(c=b.element,m.isDehydrated)if(m={element:c,isDehydrated:!1,cache:b.cache,pendingSuspenseBoundaries:b.pendingSuspenseBoundaries,transitions:b.transitions},i.updateQueue.baseState=m,i.memoizedState=m,i.flags&256){d=Xs(Error(t(423)),i),i=Np(n,i,c,a,d);break e}else if(c!==d){d=Xs(Error(t(424)),i),i=Np(n,i,c,a,d);break e}else for(ti=Rr(i.stateNode.containerInfo.firstChild),ei=i,en=!0,yi=null,a=Hh(i,null,c,a),i.child=a;a;)a.flags=a.flags&-3|4096,a=a.sibling;else{if(zs(),c===d){i=sr(n,i,a);break e}On(n,i,c,a)}i=i.child}return i;case 5:return Yh(i),n===null&&zc(i),c=i.type,d=i.pendingProps,m=n!==null?n.memoizedProps:null,b=d.children,Pc(c,d)?b=null:m!==null&&Pc(c,m)&&(i.flags|=32),Ap(n,i),On(n,i,b,a),i.child;case 6:return n===null&&zc(i),null;case 13:return Pp(n,i,a);case 4:return qc(i,i.stateNode.containerInfo),c=i.pendingProps,n===null?i.child=Vs(i,null,c,a):On(n,i,c,a),i.child;case 11:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Si(c,d),Ep(n,i,c,d,a);case 7:return On(n,i,i.pendingProps,a),i.child;case 8:return On(n,i,i.pendingProps.children,a),i.child;case 12:return On(n,i,i.pendingProps.children,a),i.child;case 10:e:{if(c=i.type._context,d=i.pendingProps,m=i.memoizedProps,b=d.value,Xt(Ho,c._currentValue),c._currentValue=b,m!==null)if(_i(m.value,b)){if(m.children===d.children&&!Gn.current){i=sr(n,i,a);break e}}else for(m=i.child,m!==null&&(m.return=i);m!==null;){var O=m.dependencies;if(O!==null){b=m.child;for(var z=O.firstContext;z!==null;){if(z.context===c){if(m.tag===1){z=rr(-1,a&-a),z.tag=2;var de=m.updateQueue;if(de!==null){de=de.shared;var ye=de.pending;ye===null?z.next=z:(z.next=ye.next,ye.next=z),de.pending=z}}m.lanes|=a,z=m.alternate,z!==null&&(z.lanes|=a),Xc(m.return,a,i),O.lanes|=a;break}z=z.next}}else if(m.tag===10)b=m.type===i.type?null:m.child;else if(m.tag===18){if(b=m.return,b===null)throw Error(t(341));b.lanes|=a,O=b.alternate,O!==null&&(O.lanes|=a),Xc(b,a,i),b=m.sibling}else b=m.child;if(b!==null)b.return=m;else for(b=m;b!==null;){if(b===i){b=null;break}if(m=b.sibling,m!==null){m.return=b.return,b=m;break}b=b.return}m=b}On(n,i,d.children,a),i=i.child}return i;case 9:return d=i.type,c=i.pendingProps.children,Gs(i,a),d=ci(d),c=c(d),i.flags|=1,On(n,i,c,a),i.child;case 14:return c=i.type,d=Si(c,i.pendingProps),d=Si(c.type,d),Tp(n,i,c,d,a);case 15:return wp(n,i,i.type,i.pendingProps,a);case 17:return c=i.type,d=i.pendingProps,d=i.elementType===c?d:Si(c,d),el(n,i),i.tag=1,Wn(c)?(n=!0,Oo(i)):n=!1,Gs(i,a),gp(i,c,d),ou(i,c,d,a),du(null,i,c,!0,n,a);case 19:return Lp(n,i,a);case 22:return bp(n,i,a)}throw Error(t(156,i.tag))};function im(n,i){return Pi(n,i)}function Wx(n,i,a,c){this.tag=n,this.key=a,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=i,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function fi(n,i,a,c){return new Wx(n,i,a,c)}function Pu(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Xx(n){if(typeof n=="function")return Pu(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===$)return 14}return 2}function Br(n,i){var a=n.alternate;return a===null?(a=fi(n.tag,i,n.key,n.mode),a.elementType=n.elementType,a.type=n.type,a.stateNode=n.stateNode,a.alternate=n,n.alternate=a):(a.pendingProps=i,a.type=n.type,a.flags=0,a.subtreeFlags=0,a.deletions=null),a.flags=n.flags&14680064,a.childLanes=n.childLanes,a.lanes=n.lanes,a.child=n.child,a.memoizedProps=n.memoizedProps,a.memoizedState=n.memoizedState,a.updateQueue=n.updateQueue,i=n.dependencies,a.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext},a.sibling=n.sibling,a.index=n.index,a.ref=n.ref,a}function dl(n,i,a,c,d,m){var b=2;if(c=n,typeof n=="function")Pu(n)&&(b=1);else if(typeof n=="string")b=5;else e:switch(n){case F:return fs(a.children,d,m,i);case w:b=8,d|=8;break;case P:return n=fi(12,a,i,d|2),n.elementType=P,n.lanes=m,n;case re:return n=fi(13,a,i,d),n.elementType=re,n.lanes=m,n;case fe:return n=fi(19,a,i,d),n.elementType=fe,n.lanes=m,n;case K:return fl(a,d,m,i);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:b=10;break e;case B:b=9;break e;case j:b=11;break e;case $:b=14;break e;case se:b=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return i=fi(b,a,i,d),i.elementType=n,i.type=c,i.lanes=m,i}function fs(n,i,a,c){return n=fi(7,n,c,i),n.lanes=a,n}function fl(n,i,a,c){return n=fi(22,n,c,i),n.elementType=K,n.lanes=a,n.stateNode={isHidden:!1},n}function Iu(n,i,a){return n=fi(6,n,null,i),n.lanes=a,n}function Lu(n,i,a){return i=fi(4,n.children!==null?n.children:[],n.key,i),i.lanes=a,i.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},i}function jx(n,i,a,c,d){this.tag=i,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Sn(0),this.expirationTimes=Sn(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Sn(0),this.identifierPrefix=c,this.onRecoverableError=d,this.mutableSourceEagerHydrationData=null}function Du(n,i,a,c,d,m,b,O,z){return n=new jx(n,i,a,O,z),i===1?(i=1,m===!0&&(i|=8)):i=0,m=fi(3,null,null,i),n.current=m,m.stateNode=n,m.memoizedState={element:c,isDehydrated:a,cache:null,transitions:null,pendingSuspenseBoundaries:null},Yc(m),n}function Yx(n,i,a){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:N,key:c==null?null:""+c,children:n,containerInfo:i,implementation:a}}function rm(n){if(!n)return Nr;n=n._reactInternals;e:{if(fn(n)!==n||n.tag!==1)throw Error(t(170));var i=n;do{switch(i.tag){case 3:i=i.stateNode.context;break e;case 1:if(Wn(i.type)){i=i.stateNode.__reactInternalMemoizedMergedChildContext;break e}}i=i.return}while(i!==null);throw Error(t(171))}if(n.tag===1){var a=n.type;if(Wn(a))return Ih(n,a,i)}return i}function sm(n,i,a,c,d,m,b,O,z){return n=Du(a,c,!0,n,d,m,b,O,z),n.context=rm(null),a=n.current,c=Fn(),d=Fr(a),m=rr(c,d),m.callback=i??null,Lr(a,m,d),n.current.lanes=d,Et(n,d,c),Yn(n,c),n}function hl(n,i,a,c){var d=i.current,m=Fn(),b=Fr(d);return a=rm(a),i.context===null?i.context=a:i.pendingContext=a,i=rr(m,b),i.payload={element:n},c=c===void 0?null:c,c!==null&&(i.callback=c),n=Lr(d,i,b),n!==null&&(Ti(n,d,b,m),Wo(n,d,b)),b}function pl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function am(n,i){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var a=n.retryLane;n.retryLane=a!==0&&a<i?a:i}}function Uu(n,i){am(n,i),(n=n.alternate)&&am(n,i)}function qx(){return null}var om=typeof reportError=="function"?reportError:function(n){console.error(n)};function Ou(n){this._internalRoot=n}ml.prototype.render=Ou.prototype.render=function(n){var i=this._internalRoot;if(i===null)throw Error(t(409));hl(n,i,null,null)},ml.prototype.unmount=Ou.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var i=n.containerInfo;cs(function(){hl(null,n,null,null)}),i[Qi]=null}};function ml(n){this._internalRoot=n}ml.prototype.unstable_scheduleHydration=function(n){if(n){var i=Vt();n={blockedOn:null,target:n,priority:i};for(var a=0;a<wr.length&&i!==0&&i<wr[a].priority;a++);wr.splice(a,0,n),a===0&&Yf(n)}};function Fu(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function gl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function lm(){}function $x(n,i,a,c,d){if(d){if(typeof c=="function"){var m=c;c=function(){var de=pl(b);m.call(de)}}var b=sm(i,c,n,0,null,!1,!1,"",lm);return n._reactRootContainer=b,n[Qi]=b.current,Da(n.nodeType===8?n.parentNode:n),cs(),b}for(;d=n.lastChild;)n.removeChild(d);if(typeof c=="function"){var O=c;c=function(){var de=pl(z);O.call(de)}}var z=Du(n,0,!1,null,null,!1,!1,"",lm);return n._reactRootContainer=z,n[Qi]=z.current,Da(n.nodeType===8?n.parentNode:n),cs(function(){hl(i,z,a,c)}),z}function xl(n,i,a,c,d){var m=a._reactRootContainer;if(m){var b=m;if(typeof d=="function"){var O=d;d=function(){var z=pl(b);O.call(z)}}hl(i,b,n,d)}else b=$x(a,i,n,d,c);return pl(b)}Bt=function(n){switch(n.tag){case 3:var i=n.stateNode;if(i.current.memoizedState.isDehydrated){var a=Lt(i.pendingLanes);a!==0&&(Hn(i,a|1),Yn(i,Ct()),(Ut&6)===0&&(qs=Ct()+500,Pr()))}break;case 13:cs(function(){var c=ir(n,1);if(c!==null){var d=Fn();Ti(c,n,1,d)}}),Uu(n,1)}},$t=function(n){if(n.tag===13){var i=ir(n,134217728);if(i!==null){var a=Fn();Ti(i,n,134217728,a)}Uu(n,134217728)}},xi=function(n){if(n.tag===13){var i=Fr(n),a=ir(n,i);if(a!==null){var c=Fn();Ti(a,n,i,c)}Uu(n,i)}},Vt=function(){return wt},vi=function(n,i){var a=wt;try{return wt=n,i()}finally{wt=a}},et=function(n,i,a){switch(i){case"input":if(lt(n,a),i=a.name,a.type==="radio"&&i!=null){for(a=n;a.parentNode;)a=a.parentNode;for(a=a.querySelectorAll("input[name="+JSON.stringify(""+i)+'][type="radio"]'),i=0;i<a.length;i++){var c=a[i];if(c!==n&&c.form===n.form){var d=Do(c);if(!d)throw Error(t(90));Rt(c),lt(c,d)}}}break;case"textarea":Yt(n,a);break;case"select":i=a.value,i!=null&&xt(n,!!a.multiple,i,!1)}},we=Ru,ve=cs;var Kx={usingClientEntryPoint:!1,Events:[Fa,Us,Do,ge,Ne,Ru]},Za={findFiberByHostInstance:ts,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Zx={bundleType:Za.bundleType,version:Za.version,rendererPackageName:Za.rendererPackageName,rendererConfig:Za.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Ni(n),n===null?null:n.stateNode},findFiberByHostInstance:Za.findFiberByHostInstance||qx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{ee=vl.inject(Zx),Ee=vl}catch{}}return qn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Kx,qn.createPortal=function(n,i){var a=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Fu(i))throw Error(t(200));return Yx(n,i,null,a)},qn.createRoot=function(n,i){if(!Fu(n))throw Error(t(299));var a=!1,c="",d=om;return i!=null&&(i.unstable_strictMode===!0&&(a=!0),i.identifierPrefix!==void 0&&(c=i.identifierPrefix),i.onRecoverableError!==void 0&&(d=i.onRecoverableError)),i=Du(n,1,!1,null,null,a,!1,c,d),n[Qi]=i.current,Da(n.nodeType===8?n.parentNode:n),new Ou(i)},qn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var i=n._reactInternals;if(i===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Ni(i),n=n===null?null:n.stateNode,n},qn.flushSync=function(n){return cs(n)},qn.hydrate=function(n,i,a){if(!gl(i))throw Error(t(200));return xl(null,n,i,!0,a)},qn.hydrateRoot=function(n,i,a){if(!Fu(n))throw Error(t(405));var c=a!=null&&a.hydratedSources||null,d=!1,m="",b=om;if(a!=null&&(a.unstable_strictMode===!0&&(d=!0),a.identifierPrefix!==void 0&&(m=a.identifierPrefix),a.onRecoverableError!==void 0&&(b=a.onRecoverableError)),i=sm(i,null,n,1,a??null,d,!1,m,b),n[Qi]=i.current,Da(n),c)for(n=0;n<c.length;n++)a=c[n],d=a._getVersion,d=d(a._source),i.mutableSourceEagerHydrationData==null?i.mutableSourceEagerHydrationData=[a,d]:i.mutableSourceEagerHydrationData.push(a,d);return new ml(i)},qn.render=function(n,i,a){if(!gl(i))throw Error(t(200));return xl(null,n,i,!1,a)},qn.unmountComponentAtNode=function(n){if(!gl(n))throw Error(t(40));return n._reactRootContainer?(cs(function(){xl(null,null,n,!1,function(){n._reactRootContainer=null,n[Qi]=null})}),!0):!1},qn.unstable_batchedUpdates=Ru,qn.unstable_renderSubtreeIntoContainer=function(n,i,a,c){if(!gl(a))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return xl(n,i,a,!1,c)},qn.version="18.3.1-next-f1338f8080-20240426",qn}var gm;function sv(){if(gm)return zu.exports;gm=1;function s(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(s)}catch(e){console.error(e)}}return s(),zu.exports=rv(),zu.exports}var xm;function av(){if(xm)return _l;xm=1;var s=sv();return _l.createRoot=s.createRoot,_l.hydrateRoot=s.hydrateRoot,_l}var ov=av();const lv=A0(ov),vm=100;function cv(){const[s,e]=tt.useState("MONITOR"),[t,r]=tt.useState("SYSTEM NORMAL"),[o,l]=tt.useState("NORMAL"),[u,f]=tt.useState(55),[h,p]=tt.useState(!1),[x,S]=tt.useState(!1),[g,_]=tt.useState(!1),[T,C]=tt.useState(!0),[y,v]=tt.useState(!1),[D,U]=tt.useState({timestamp:Date.now(),x:.02,y:.01,z:.98,gravityVector:.98,dynamicAcceleration:.03,vibrationIntensity:2,floorMotion:0,podMotion:0,isolationEfficiency:0}),[R,L]=tt.useState([]),[N,F]=tt.useState(.03),[w,P]=tt.useState([{id:"d1",name:"D1",engagement:0,status:"READY",forceExtender:0},{id:"d2",name:"D2",engagement:0,status:"READY",forceExtender:0},{id:"d3",name:"D3",engagement:0,status:"READY",forceExtender:0},{id:"d4",name:"D4",engagement:0,status:"READY",forceExtender:0}]),[V,B]=tt.useState({riskScore:4,riskLevel:"LOW",seismicConfidence:2,peakDynamicAcceleration:.03,detectionThreshold:.25,detectionLatency:38,responseTime:1.8,signalPattern:"NORMAL",equipmentStatus:"OPERATIONAL",responseMode:"MONITORING",floorMotion:0,podMotion:0,isolationEfficiency:0,isIsolationEnabled:!0}),[j,re]=tt.useState(null),[fe,$]=tt.useState([]),se=tt.useRef(0),K=tt.useRef([]),Y=tt.useRef(.03),ie=tt.useCallback((pe,oe,De)=>{const je=new Date().toTimeString().split(" ")[0],Rt={id:Math.random().toString(36).substring(2,9),timestamp:je,step:pe,message:oe,severity:De};$(nt=>[Rt,...nt.slice(0,49)])},[]),ue=tt.useCallback(()=>{K.current.forEach(pe=>clearTimeout(pe)),K.current=[]},[]);tt.useEffect(()=>{ie("MONITOR","ESDS Protected Pod Monitoring Active. Virtual Sensor streaming at 100 Hz.","info")},[ie]),tt.useEffect(()=>{if(x)return;const pe=setInterval(()=>{se.current+=.05;const oe=se.current;let De=(Math.random()-.5)*.015,Oe=(Math.random()-.5)*.015,je=(Math.random()-.5)*.015,Rt=0,nt=0,ht=0;const dt=T?s==="SECURE"||s==="RECOVERY"?88:T&&(s==="ISOLATE"||s==="PROTECT"||s==="SECURE"||s==="RECOVERY")?86:s==="DETECT"?25:0:0,lt=1-dt/100;if(o==="NORMAL")Rt=Math.sin(oe*2)*.015,nt=Math.cos(oe*1.5)*.01,ht=Math.sin(oe*3)*.015;else if(o==="PUMP_VIBRATION")Rt=Math.sin(oe*25)*.28*lt,nt=Math.cos(oe*24)*.25*lt,ht=Math.sin(oe*26)*.22*lt;else if(o==="MODERATE"){const E=u/100*lt;Rt=(Math.sin(oe*4.2)*.45+Math.sin(oe*8.5)*.25)*E,nt=(Math.cos(oe*3.8)*.4+Math.sin(oe*7.1)*.2)*E,ht=(Math.sin(oe*5)*.35+Math.cos(oe*9.2)*.15)*E}else if(o==="SEVERE"){const E=u/100*lt;Rt=(Math.sin(oe*3.5)*.95+Math.sin(oe*7.8)*.55+Math.cos(oe*12.1)*.3)*E,nt=(Math.cos(oe*4.1)*.85+Math.sin(oe*6.9)*.45+Math.sin(oe*11.5)*.25)*E,ht=(Math.sin(oe*4.8)*.75+Math.cos(oe*8.4)*.4+Math.cos(oe*13)*.2)*E}const ut=+(.02+Rt+De).toFixed(3),Tt=+(.01+nt+Oe).toFixed(3),Nt=+(.98+ht+je).toFixed(3),xt=.98,St=+Math.sqrt(ut*ut+Tt*Tt+(Nt-xt)*(Nt-xt)).toFixed(3),W=Math.min(100,Math.round(St*140)),Yt=o==="NORMAL"?2:Math.min(100,Math.round(u/100*78)),Mt=Math.round(Yt*(1-dt/100));St>Y.current&&(Y.current=St,F(St));const I={timestamp:Date.now(),x:ut,y:Tt,z:Nt,gravityVector:xt,dynamicAcceleration:St,vibrationIntensity:W,floorMotion:Yt,podMotion:Mt,isolationEfficiency:dt};U(I),B(E=>({...E,floorMotion:Yt,podMotion:Mt,isolationEfficiency:dt,isIsolationEnabled:T})),L(E=>{const Z=[...E,I];return Z.length>vm?Z.slice(Z.length-vm):Z})},30);return()=>clearInterval(pe)},[o,u,T,x,s]);const k=tt.useCallback((pe,oe)=>{ue(),_(!1),Y.current=.03,F(.03);const De=oe!==void 0?oe:pe==="MODERATE"?55:pe==="SEVERE"?88:pe==="PUMP_VIBRATION"?40:5;if(l(pe),f(De),p(!0),S(!1),pe==="NORMAL"){e("MONITOR"),r("SYSTEM NORMAL"),B({riskScore:4,riskLevel:"LOW",seismicConfidence:0,peakDynamicAcceleration:.03,detectionThreshold:.25,detectionLatency:38,responseTime:.1,signalPattern:"NORMAL",equipmentStatus:"OPERATIONAL",responseMode:"MONITORING",floorMotion:0,podMotion:0,isolationEfficiency:0,isIsolationEnabled:T}),re(null),P(lt=>lt.map(ut=>({...ut,engagement:0,status:T?"READY":"DISABLED",forceExtender:0}))),ie("MONITOR","System test initialized under NORMAL background conditions.","info");return}if(pe==="PUMP_VIBRATION"){e("DETECT"),r("ROUTINE VIBRATION — NO SEISMIC EVENT"),ie("DETECT","Vibration anomaly detected on sensor.","warning"),B(ut=>({...ut,riskScore:18,riskLevel:"LOW",seismicConfidence:8,peakDynamicAcceleration:.32,signalPattern:"ROUTINE_PUMP",equipmentStatus:"OPERATIONAL",responseMode:"FILTERING"}));const lt=setTimeout(()=>{e("MONITOR"),r("ROUTINE VIBRATION — NO SEISMIC EVENT"),ie("MONITOR","ROUTINE VIBRATION MATCHED: Dialyzer pump frequency filtered. Emergency dampening suppressed.","success"),p(!1)},2200);K.current.push(lt);return}const Oe=pe==="SEVERE",je=Oe?92:64;e("MONITOR"),r("SYSTEM NORMAL"),ie("MONITOR",`Initiating ${Oe?"SEVERE":"MODERATE"} earthquake simulation. Floor motion rising...`,"info");const Rt=setTimeout(()=>{if(e("DETECT"),!T){r("UNPROTECTED — HIGH SEISMIC MOTION"),ie("DETECT","SEISMIC MOTION DETECTED! ESDS ISOLATION IS OFF — Pod experiencing unmitigated shaking.","critical"),P(lt=>lt.map(ut=>({...ut,engagement:0,status:"DISABLED",forceExtender:0}))),B(lt=>({...lt,riskScore:je,riskLevel:"UNPROTECTED",equipmentStatus:"UNPROTECTED",responseMode:"DISABLED"}));return}r("SEISMIC ACTIVITY DETECTED"),ie("DETECT",`SEISMIC MOTION DETECTED! Dynamic acceleration > ${V.detectionThreshold}g threshold.`,"warning"),P(lt=>lt.map(ut=>({...ut,engagement:40,status:"ENGAGING",forceExtender:350}))),B(lt=>({...lt,riskScore:je,riskLevel:Oe?"CRITICAL":"HIGH",seismicConfidence:Oe?96:88,signalPattern:Oe?"CRITICAL SEISMIC EVENT":"SEISMIC EVENT",responseMode:Oe?"EMERGENCY PROTOCOL":"STABILIZE"}))},1500);if(!T){const lt=setTimeout(()=>{p(!1)},6e3);K.current.push(Rt,lt);return}const nt=setTimeout(()=>{e("ISOLATE"),r("SEISMIC ISOLATION ACTIVE"),ie("ISOLATE","SEISMIC ISOLATION ACTIVE: 4/4 Dampers active. Counteracting kinetic shaking.","warning");const lt={id:Math.random().toString(),level:Oe?"CRITICAL":"WARNING",title:Oe?"CRITICAL SEISMIC EVENT":"⚠ SEISMIC EVENT DETECTED",message:Oe?"High seismic activity detected! Emergency safety protocol active. Pod isolation active.":"Moderate seismic activity detected. ESDS Pod isolation initiated.",statusText:"PROTECTED",timestamp:new Date().toLocaleTimeString()};re(lt),P(ut=>ut.map(Tt=>({...Tt,engagement:100,status:"ACTIVE",forceExtender:Oe?1900:1250})))},3e3),ht=setTimeout(()=>{e("PROTECT"),r("SEISMIC ISOLATION ACTIVE"),ie("PROTECT","PATIENT SAFETY ZONE PROTECTION: Pod motion reduced by 86%. Floor motion isolated.","success")},5500),vt=setTimeout(()=>{e("SECURE"),r("EQUIPMENT SECURED"),ie("SECURE","EQUIPMENT SECURED: Pod stabilized. Dampers locked in safe state.","success"),B(lt=>({...lt,riskLevel:"CONTROLLED",equipmentStatus:"SECURED"})),P(lt=>lt.map(ut=>({...ut,engagement:100,status:"LOCKED",forceExtender:850})))},7500),dt=setTimeout(()=>{e("RECOVERY"),r("RECOVERY SUMMARY"),ie("RECOVERY","Earthquake simulation complete. Final Pod State: SECURED.","success"),p(!1),_(!0)},9500);K.current.push(Rt,nt,ht,vt,dt)},[ie,ue,T,V.detectionThreshold]),J=tt.useCallback(()=>{ue(),p(!1),S(!1),_(!1),l("NORMAL"),f(55),e("MONITOR"),r("SYSTEM NORMAL"),Y.current=.03,F(.03),B({riskScore:4,riskLevel:"LOW",seismicConfidence:0,peakDynamicAcceleration:.03,detectionThreshold:.25,detectionLatency:38,responseTime:1.8,signalPattern:"NORMAL",equipmentStatus:"OPERATIONAL",responseMode:"MONITORING",floorMotion:0,podMotion:0,isolationEfficiency:0,isIsolationEnabled:T}),re(null),P(pe=>pe.map(oe=>({...oe,engagement:0,status:T?"READY":"DISABLED",forceExtender:0}))),ie("MONITOR","System reset. ESDS Pod returned to normal monitoring mode.","info")},[ie,ue,T]),Le=tt.useCallback(()=>{S(pe=>!pe)},[]),Xe=tt.useCallback(()=>{re(null)},[]),ze=tt.useCallback(()=>{C(pe=>!pe)},[]),le=tt.useCallback(()=>{v(pe=>!pe)},[]);return{phase:s,systemStatus:t,activeScenario:o,intensity:u,isSimulating:h,isPaused:x,showRecoveryModal:g,isIsolationEnabled:T,compareMode:y,currentTelemetry:D,telemetryHistory:R,peakG:N,dampers:w,metrics:V,alert:j,eventLogs:fe,startSimulation:k,setIntensity:f,resetSystem:J,pauseSimulation:Le,acknowledgeAlert:Xe,setShowRecoveryModal:_,toggleIsolation:ze,toggleCompareMode:le}}/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const uv=s=>s.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase(),C0=(...s)=>s.filter((e,t,r)=>!!e&&e.trim()!==""&&r.indexOf(e)===t).join(" ").trim();/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var dv={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fv=tt.forwardRef(({color:s="currentColor",size:e=24,strokeWidth:t=2,absoluteStrokeWidth:r,className:o="",children:l,iconNode:u,...f},h)=>tt.createElement("svg",{ref:h,...dv,width:e,height:e,stroke:s,strokeWidth:r?Number(t)*24/Number(e):t,className:C0("lucide",o),...f},[...u.map(([p,x])=>tt.createElement(p,x)),...Array.isArray(l)?l:[l]]));/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jt=(s,e)=>{const t=tt.forwardRef(({className:r,...o},l)=>tt.createElement(fv,{ref:l,iconNode:e,className:C0(`lucide-${uv(s)}`,r),...o}));return t.displayName=`${s}`,t};/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hv=[["path",{d:"M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2",key:"169zse"}]],Ef=jt("Activity",hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const pv=[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]],mv=jt("ArrowRight",pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const gv=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],N0=jt("ChevronDown",gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const xv=[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]],vv=jt("ChevronUp",xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const _v=[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]],yv=jt("CircleCheckBig",_v);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Sv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],Tf=jt("CircleCheck",Sv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Mv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}]],Ev=jt("Circle",Mv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Tv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]],wv=jt("Clock",Tv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const bv=[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}],["path",{d:"M12 3v18",key:"108xh3"}]],P0=jt("Columns2",bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Av=[["rect",{width:"16",height:"16",x:"4",y:"4",rx:"2",key:"14l7u7"}],["rect",{width:"6",height:"6",x:"9",y:"9",rx:"1",key:"5aljv4"}],["path",{d:"M15 2v2",key:"13l42r"}],["path",{d:"M15 20v2",key:"15mkzm"}],["path",{d:"M2 15h2",key:"1gxd5l"}],["path",{d:"M2 9h2",key:"1bbxkp"}],["path",{d:"M20 15h2",key:"19e6y8"}],["path",{d:"M20 9h2",key:"19tzq7"}],["path",{d:"M9 2v2",key:"165o2o"}],["path",{d:"M9 20v2",key:"i2bqo8"}]],sc=jt("Cpu",Av);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Rv=[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]],Cv=jt("Eye",Rv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Nv=[["polygon",{points:"22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3",key:"1yg77f"}]],I0=jt("Filter",Nv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Pv=[["path",{d:"M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z",key:"c3ymky"}],["path",{d:"M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27",key:"1uw2ng"}]],Iv=jt("HeartPulse",Pv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Lv=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]],Dv=jt("Info",Lv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Uv=[["path",{d:"M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z",key:"zw3jo"}],["path",{d:"M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12",key:"1wduqc"}],["path",{d:"M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17",key:"kqbvx6"}]],L0=jt("Layers",Uv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Ov=[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]],Fv=jt("Lock",Ov);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const kv=[["path",{d:"M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8",key:"1357e3"}],["path",{d:"M3 3v5h5",key:"1xhq8a"}]],D0=jt("RotateCcw",kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Bv=[["rect",{width:"20",height:"8",x:"2",y:"2",rx:"2",ry:"2",key:"ngkwjq"}],["rect",{width:"20",height:"8",x:"2",y:"14",rx:"2",ry:"2",key:"iecqi9"}],["line",{x1:"6",x2:"6.01",y1:"6",y2:"6",key:"16zg32"}],["line",{x1:"6",x2:"6.01",y1:"18",y2:"18",key:"nzw8ys"}]],zv=jt("Server",Bv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Vv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]],mo=jt("ShieldAlert",Vv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Hv=[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]],mi=jt("ShieldCheck",Hv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Gv=[["line",{x1:"4",x2:"4",y1:"21",y2:"14",key:"1p332r"}],["line",{x1:"4",x2:"4",y1:"10",y2:"3",key:"gb41h5"}],["line",{x1:"12",x2:"12",y1:"21",y2:"12",key:"hf2csr"}],["line",{x1:"12",x2:"12",y1:"8",y2:"3",key:"1kfi7u"}],["line",{x1:"20",x2:"20",y1:"21",y2:"16",key:"1lhrwl"}],["line",{x1:"20",x2:"20",y1:"12",y2:"3",key:"16vvfq"}],["line",{x1:"2",x2:"6",y1:"14",y2:"14",key:"1uebub"}],["line",{x1:"10",x2:"14",y1:"8",y2:"8",key:"1yglbp"}],["line",{x1:"18",x2:"22",y1:"16",y2:"16",key:"1jxqpz"}]],Wv=jt("SlidersVertical",Gv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Xv=[["path",{d:"m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3",key:"wmoenq"}],["path",{d:"M12 9v4",key:"juzpu7"}],["path",{d:"M12 17h.01",key:"p32p05"}]],go=jt("TriangleAlert",Xv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jv=[["path",{d:"M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"knzxuh"}],["path",{d:"M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"2jd2cc"}],["path",{d:"M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1",key:"rd2r6e"}]],Yv=jt("Waves",jv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const qv=[["path",{d:"M12 20h.01",key:"zekei9"}],["path",{d:"M2 8.82a15 15 0 0 1 20 0",key:"dnpr2z"}],["path",{d:"M5 12.859a10 10 0 0 1 14 0",key:"1x1e6c"}],["path",{d:"M8.5 16.429a5 5 0 0 1 7 0",key:"1bycff"}]],$v=jt("Wifi",qv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Kv=[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]],Zv=jt("X",Kv);/**
 * @license lucide-react v0.475.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const Jv=[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]],Ss=jt("Zap",Jv),Qv=({systemStatus:s,phase:e,isSimulating:t,compareMode:r,onToggleCompareMode:o})=>{const[l,u]=tt.useState("");tt.useEffect(()=>{const p=()=>{u(new Date().toLocaleTimeString("en-US",{hour12:!0}))};p();const x=setInterval(p,1e3);return()=>clearInterval(x)},[]);const h=s.includes("UNPROTECTED")?{bg:"bg-rose-950/90 border-rose-500/70 text-rose-300 glow-critical",dot:"bg-rose-500 animate-ping",sub:"Unmitigated seismic motion"}:e==="MONITOR"&&s==="SYSTEM NORMAL"?{bg:"bg-emerald-950/80 border-emerald-500/40 text-emerald-400",dot:"bg-emerald-400 animate-pulse",sub:"All systems operational"}:s.includes("ROUTINE VIBRATION")?{bg:"bg-cyan-950/80 border-cyan-500/40 text-cyan-400",dot:"bg-cyan-400",sub:"Dialyzer pump noise filtered"}:e==="SECURE"||e==="RECOVERY"?{bg:"bg-emerald-950/90 border-emerald-400/60 text-emerald-300 glow-safe",dot:"bg-emerald-400 animate-ping",sub:"Equipment secured & locked"}:e==="DETECT"||e==="ISOLATE"||e==="PROTECT"?{bg:"bg-amber-950/90 border-amber-500/60 text-amber-300 glow-warning",dot:"bg-amber-400 animate-ping",sub:"Seismic isolation active"}:{bg:"bg-slate-800 border-slate-700 text-slate-300",dot:"bg-slate-400",sub:"Monitoring"};return M.jsxs("header",{className:"w-full bg-[#060a14]/95 border-b border-console-border px-4 lg:px-6 py-2 flex flex-wrap items-center justify-between gap-4 backdrop-blur-md sticky top-0 z-30 shadow-md",children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("div",{className:"p-2 rounded-xl bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 shadow-inner flex items-center justify-center",children:M.jsx(mi,{className:"w-6 h-6 text-cyan-400"})}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx("h1",{className:"text-lg lg:text-xl font-bold tracking-wider text-slate-100 font-sans",children:"ESDS"}),M.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950/80 border border-cyan-500/40 text-cyan-400 font-bold uppercase",children:"PROTECTED POD MVP"})]}),M.jsx("p",{className:"text-[11px] text-slate-400 tracking-wide uppercase font-semibold",children:"EARTHQUAKE-RESILIENT DIALYSIS SAFETY SYSTEM"})]})]}),M.jsx("div",{className:"flex items-center gap-3",children:M.jsxs("div",{className:`px-4 py-1.5 rounded-full border text-xs lg:text-sm font-mono font-bold uppercase flex items-center gap-2.5 transition-all duration-300 ${h.bg}`,children:[M.jsx("span",{className:`w-2.5 h-2.5 rounded-full ${h.dot}`}),M.jsxs("div",{className:"flex flex-col",children:[M.jsx("span",{children:s}),M.jsx("span",{className:"text-[9px] text-slate-300/80 font-normal lowercase tracking-normal -mt-0.5",children:h.sub})]})]})}),M.jsxs("div",{className:"flex items-center gap-4 text-xs font-mono text-slate-300",children:[M.jsxs("button",{onClick:o,className:`px-3 py-1.5 rounded-lg border font-mono text-xs font-bold flex items-center gap-1.5 transition-all shadow-md ${r?"bg-amber-950 border-amber-400 text-amber-300 ring-1 ring-amber-400 glow-warning":"bg-console-card border-console-border text-slate-200 hover:border-amber-500/40"}`,children:[M.jsx(P0,{className:"w-4 h-4 text-amber-400"}),M.jsx("span",{children:r?"🔀 COMPARE ESDS (SPLIT SCREEN)":"🔀 COMPARE ESDS MODE"})]}),M.jsxs("div",{className:"flex flex-col items-start px-2 py-0.5 border-l border-slate-800",children:[M.jsx("span",{className:"text-[9px] text-slate-400",children:"VIRTUAL SENSOR"}),M.jsxs("span",{className:"text-emerald-400 font-bold flex items-center gap-1",children:[M.jsx($v,{className:"w-3 h-3 animate-pulse"})," ONLINE"]})]}),M.jsxs("div",{className:"flex flex-col items-start px-2 py-0.5 border-l border-slate-800",children:[M.jsx("span",{className:"text-[9px] text-slate-400",children:"TIME"}),M.jsx("span",{className:"text-cyan-300 font-bold",children:l})]}),M.jsxs("div",{className:"flex flex-col items-start px-2 py-0.5 border-l border-slate-800",children:[M.jsx("span",{className:"text-[9px] text-slate-400",children:"MODE"}),M.jsx("span",{className:"text-amber-400 font-bold",children:"SIMULATION"})]})]})]})};/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const wf="185",e_=0,_m=1,t_=2,Wl=1,U0=2,oo=3,Kr=0,Jn=1,fr=2,pr=0,ua=1,ym=2,Sm=3,Mm=4,n_=5,vs=100,i_=101,r_=102,s_=103,a_=104,o_=200,l_=201,c_=202,u_=203,Cd=204,Nd=205,d_=206,f_=207,h_=208,p_=209,m_=210,g_=211,x_=212,v_=213,__=214,Pd=0,Id=1,Ld=2,ha=3,Dd=4,Ud=5,Od=6,Fd=7,O0=0,y_=1,S_=2,Hi=0,F0=1,k0=2,B0=3,z0=4,V0=5,H0=6,G0=7,W0=300,Ts=301,pa=302,Gu=303,Wu=304,ac=306,kd=1e3,hr=1001,Bd=1002,Tn=1003,M_=1004,yl=1005,Ln=1006,Xu=1007,Ms=1008,ai=1009,X0=1010,j0=1011,fo=1012,bf=1013,Xi=1014,zi=1015,gr=1016,Af=1017,Rf=1018,ho=1020,Y0=35902,q0=35899,$0=1021,K0=1022,Ci=1023,xr=1026,Es=1027,Z0=1028,Cf=1029,ws=1030,Nf=1031,Pf=1033,Xl=33776,jl=33777,Yl=33778,ql=33779,zd=35840,Vd=35841,Hd=35842,Gd=35843,Wd=36196,Xd=37492,jd=37496,Yd=37488,qd=37489,Kl=37490,$d=37491,Kd=37808,Zd=37809,Jd=37810,Qd=37811,ef=37812,tf=37813,nf=37814,rf=37815,sf=37816,af=37817,of=37818,lf=37819,cf=37820,uf=37821,df=36492,ff=36494,hf=36495,pf=36283,mf=36284,Zl=36285,gf=36286,E_=3200,xf=0,T_=1,qr="",pi="srgb",Jl="srgb-linear",Ql="linear",Ht="srgb",Ks=7680,Em=519,w_=512,b_=513,A_=514,If=515,R_=516,C_=517,Lf=518,N_=519,Tm=35044,wm="300 es",Vi=2e3,po=2001;function P_(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function ec(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function I_(){const s=ec("canvas");return s.style.display="block",s}const bm={};function Am(...s){const e="THREE."+s.shift();console.log(e,...s)}function J0(s){const e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function ct(...s){s=J0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function Ot(...s){s=J0(s);const e="THREE."+s.shift();{const t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function da(...s){const e=s.join(" ");e in bm||(bm[e]=!0,ct(...s))}function L_(s,e,t){return new Promise(function(r,o){function l(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:o();break;case s.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:r()}}setTimeout(l,t)})}const D_={[Pd]:Id,[Ld]:Od,[Dd]:Fd,[ha]:Ud,[Id]:Pd,[Od]:Ld,[Fd]:Dd,[Ud]:ha};class bs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const o=r[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const o=r.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ju=Math.PI/180,vf=180/Math.PI;function xo(){const s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(Nn[s&255]+Nn[s>>8&255]+Nn[s>>16&255]+Nn[s>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[r&255]+Nn[r>>8&255]+Nn[r>>16&255]+Nn[r>>24&255]).toLowerCase()}function At(s,e,t){return Math.max(e,Math.min(t,s))}function U_(s,e){return(s%e+e)%e}function Yu(s,e,t){return(1-t)*s+t*e}function Qa(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Vf=class Vf{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6],this.y=o[1]*t+o[4]*r+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*r-u*o+e.x,this.y=l*o+u*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Vf.prototype.isVector2=!0;let rt=Vf;class xa{constructor(e=0,t=0,r=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=o}static slerpFlat(e,t,r,o,l,u,f){let h=r[o+0],p=r[o+1],x=r[o+2],S=r[o+3],g=l[u+0],_=l[u+1],T=l[u+2],C=l[u+3];if(S!==C||h!==g||p!==_||x!==T){let y=h*g+p*_+x*T+S*C;y<0&&(g=-g,_=-_,T=-T,C=-C,y=-y);let v=1-f;if(y<.9995){const D=Math.acos(y),U=Math.sin(D);v=Math.sin(v*D)/U,f=Math.sin(f*D)/U,h=h*v+g*f,p=p*v+_*f,x=x*v+T*f,S=S*v+C*f}else{h=h*v+g*f,p=p*v+_*f,x=x*v+T*f,S=S*v+C*f;const D=1/Math.sqrt(h*h+p*p+x*x+S*S);h*=D,p*=D,x*=D,S*=D}}e[t]=h,e[t+1]=p,e[t+2]=x,e[t+3]=S}static multiplyQuaternionsFlat(e,t,r,o,l,u){const f=r[o],h=r[o+1],p=r[o+2],x=r[o+3],S=l[u],g=l[u+1],_=l[u+2],T=l[u+3];return e[t]=f*T+x*S+h*_-p*g,e[t+1]=h*T+x*g+p*S-f*_,e[t+2]=p*T+x*_+f*g-h*S,e[t+3]=x*T-f*S-h*g-p*_,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,o){return this._x=e,this._y=t,this._z=r,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,o=e._y,l=e._z,u=e._order,f=Math.cos,h=Math.sin,p=f(r/2),x=f(o/2),S=f(l/2),g=h(r/2),_=h(o/2),T=h(l/2);switch(u){case"XYZ":this._x=g*x*S+p*_*T,this._y=p*_*S-g*x*T,this._z=p*x*T+g*_*S,this._w=p*x*S-g*_*T;break;case"YXZ":this._x=g*x*S+p*_*T,this._y=p*_*S-g*x*T,this._z=p*x*T-g*_*S,this._w=p*x*S+g*_*T;break;case"ZXY":this._x=g*x*S-p*_*T,this._y=p*_*S+g*x*T,this._z=p*x*T+g*_*S,this._w=p*x*S-g*_*T;break;case"ZYX":this._x=g*x*S-p*_*T,this._y=p*_*S+g*x*T,this._z=p*x*T-g*_*S,this._w=p*x*S+g*_*T;break;case"YZX":this._x=g*x*S+p*_*T,this._y=p*_*S+g*x*T,this._z=p*x*T-g*_*S,this._w=p*x*S-g*_*T;break;case"XZY":this._x=g*x*S-p*_*T,this._y=p*_*S-g*x*T,this._z=p*x*T+g*_*S,this._w=p*x*S+g*_*T;break;default:ct("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,o=Math.sin(r);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],o=t[4],l=t[8],u=t[1],f=t[5],h=t[9],p=t[2],x=t[6],S=t[10],g=r+f+S;if(g>0){const _=.5/Math.sqrt(g+1);this._w=.25/_,this._x=(x-h)*_,this._y=(l-p)*_,this._z=(u-o)*_}else if(r>f&&r>S){const _=2*Math.sqrt(1+r-f-S);this._w=(x-h)/_,this._x=.25*_,this._y=(o+u)/_,this._z=(l+p)/_}else if(f>S){const _=2*Math.sqrt(1+f-r-S);this._w=(l-p)/_,this._x=(o+u)/_,this._y=.25*_,this._z=(h+x)/_}else{const _=2*Math.sqrt(1+S-r-f);this._w=(u-o)/_,this._x=(l+p)/_,this._y=(h+x)/_,this._z=.25*_}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const o=Math.min(1,t/r);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,o=e._y,l=e._z,u=e._w,f=t._x,h=t._y,p=t._z,x=t._w;return this._x=r*x+u*f+o*p-l*h,this._y=o*x+u*h+l*f-r*p,this._z=l*x+u*p+r*h-o*f,this._w=u*x-r*f-o*h-l*p,this._onChangeCallback(),this}slerp(e,t){let r=e._x,o=e._y,l=e._z,u=e._w,f=this.dot(e);f<0&&(r=-r,o=-o,l=-l,u=-u,f=-f);let h=1-t;if(f<.9995){const p=Math.acos(f),x=Math.sin(p);h=Math.sin(h*p)/x,t=Math.sin(t*p)/x,this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this._onChangeCallback()}else this._x=this._x*h+r*t,this._y=this._y*h+o*t,this._z=this._z*h+l*t,this._w=this._w*h+u*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),o=Math.sqrt(1-r),l=Math.sqrt(r);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hf=class Hf{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rm.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rm.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*r+l[6]*o,this.y=l[1]*t+l[4]*r+l[7]*o,this.z=l[2]*t+l[5]*r+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*r+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*r+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*r+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*r+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,r=this.y,o=this.z,l=e.x,u=e.y,f=e.z,h=e.w,p=2*(u*o-f*r),x=2*(f*t-l*o),S=2*(l*r-u*t);return this.x=t+h*p+u*S-f*x,this.y=r+h*x+f*p-l*S,this.z=o+h*S+l*x-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*r+l[8]*o,this.y=l[1]*t+l[5]*r+l[9]*o,this.z=l[2]*t+l[6]*r+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,o=e.y,l=e.z,u=t.x,f=t.y,h=t.z;return this.x=o*h-l*f,this.y=l*u-r*h,this.z=r*f-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return qu.copy(this).projectOnVector(e),this.sub(qu)}reflect(e){return this.sub(qu.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(At(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,o=this.z-e.z;return t*t+r*r+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const o=Math.sin(t)*e;return this.x=o*Math.sin(r),this.y=Math.cos(t)*e,this.z=o*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hf.prototype.isVector3=!0;let G=Hf;const qu=new G,Rm=new xa,Gf=class Gf{constructor(e,t,r,o,l,u,f,h,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p)}set(e,t,r,o,l,u,f,h,p){const x=this.elements;return x[0]=e,x[1]=o,x[2]=f,x[3]=t,x[4]=l,x[5]=h,x[6]=r,x[7]=u,x[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[3],h=r[6],p=r[1],x=r[4],S=r[7],g=r[2],_=r[5],T=r[8],C=o[0],y=o[3],v=o[6],D=o[1],U=o[4],R=o[7],L=o[2],N=o[5],F=o[8];return l[0]=u*C+f*D+h*L,l[3]=u*y+f*U+h*N,l[6]=u*v+f*R+h*F,l[1]=p*C+x*D+S*L,l[4]=p*y+x*U+S*N,l[7]=p*v+x*R+S*F,l[2]=g*C+_*D+T*L,l[5]=g*y+_*U+T*N,l[8]=g*v+_*R+T*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8];return t*u*x-t*f*p-r*l*x+r*f*h+o*l*p-o*u*h}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],S=x*u-f*p,g=f*h-x*l,_=p*l-u*h,T=t*S+r*g+o*_;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const C=1/T;return e[0]=S*C,e[1]=(o*p-x*r)*C,e[2]=(f*r-o*u)*C,e[3]=g*C,e[4]=(x*t-o*h)*C,e[5]=(o*l-f*t)*C,e[6]=_*C,e[7]=(r*h-p*t)*C,e[8]=(u*t-r*l)*C,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,o,l,u,f){const h=Math.cos(l),p=Math.sin(l);return this.set(r*h,r*p,-r*(h*u+p*f)+u+e,-o*p,o*h,-o*(-p*u+h*f)+f+t,0,0,1),this}scale(e,t){return da("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply($u.makeScale(e,t)),this}rotate(e){return da("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply($u.makeRotation(-e)),this}translate(e,t){return da("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply($u.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<9;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gf.prototype.isMatrix3=!0;let gt=Gf;const $u=new gt,Cm=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Nm=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function O_(){const s={enabled:!0,workingColorSpace:Jl,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Ht&&(o.r=mr(o.r),o.g=mr(o.g),o.b=mr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Ht&&(o.r=fa(o.r),o.g=fa(o.g),o.b=fa(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===qr?Ql:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return da("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return da("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Jl]:{primaries:e,whitePoint:r,transfer:Ql,toXYZ:Cm,fromXYZ:Nm,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:pi},outputColorSpaceConfig:{drawingBufferColorSpace:pi}},[pi]:{primaries:e,whitePoint:r,transfer:Ht,toXYZ:Cm,fromXYZ:Nm,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:pi}}}),s}const Pt=O_();function mr(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function fa(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}let Zs;class F_{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Zs===void 0&&(Zs=ec("canvas")),Zs.width=e.width,Zs.height=e.height;const o=Zs.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),r=Zs}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ec("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const o=r.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=mr(l[u]/255)*255;return r.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(mr(t[r]/255)*255):t[r]=mr(t[r]);return{data:t,width:e.width,height:e.height}}else return ct("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let k_=0;class Df{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:k_++}),this.uuid=xo(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,f=o.length;u<f;u++)o[u].isDataTexture?l.push(Ku(o[u].image)):l.push(Ku(o[u]))}else l=Ku(o);r.url=l}return t||(e.images[this.uuid]=r),r}}function Ku(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?F_.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(ct("Texture: Unable to serialize Texture."),{})}let B_=0;const Zu=new G;class Bn extends bs{constructor(e=Bn.DEFAULT_IMAGE,t=Bn.DEFAULT_MAPPING,r=hr,o=hr,l=Ln,u=Ms,f=Ci,h=ai,p=Bn.DEFAULT_ANISOTROPY,x=qr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:B_++}),this.uuid=xo(),this.name="",this.source=new Df(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=f,this.internalFormat=null,this.type=h,this.offset=new rt(0,0),this.repeat=new rt(1,1),this.center=new rt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=x,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Zu).x}get height(){return this.source.getSize(Zu).y}get depth(){return this.source.getSize(Zu).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){ct(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&r&&o.isVector2&&r.isVector2||o&&r&&o.isVector3&&r.isVector3||o&&r&&o.isMatrix3&&r.isMatrix3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==W0)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case kd:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case Bd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case kd:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case Bd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Bn.DEFAULT_IMAGE=null;Bn.DEFAULT_MAPPING=W0;Bn.DEFAULT_ANISOTROPY=1;const Wf=class Wf{constructor(e=0,t=0,r=0,o=1){this.x=e,this.y=t,this.z=r,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,o){return this.x=e,this.y=t,this.z=r,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*r+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*r+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*r+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*r+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,o,l;const h=e.elements,p=h[0],x=h[4],S=h[8],g=h[1],_=h[5],T=h[9],C=h[2],y=h[6],v=h[10];if(Math.abs(x-g)<.01&&Math.abs(S-C)<.01&&Math.abs(T-y)<.01){if(Math.abs(x+g)<.1&&Math.abs(S+C)<.1&&Math.abs(T+y)<.1&&Math.abs(p+_+v-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const U=(p+1)/2,R=(_+1)/2,L=(v+1)/2,N=(x+g)/4,F=(S+C)/4,w=(T+y)/4;return U>R&&U>L?U<.01?(r=0,o=.707106781,l=.707106781):(r=Math.sqrt(U),o=N/r,l=F/r):R>L?R<.01?(r=.707106781,o=0,l=.707106781):(o=Math.sqrt(R),r=N/o,l=w/o):L<.01?(r=.707106781,o=.707106781,l=0):(l=Math.sqrt(L),r=F/l,o=w/l),this.set(r,o,l,t),this}let D=Math.sqrt((y-T)*(y-T)+(S-C)*(S-C)+(g-x)*(g-x));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(S-C)/D,this.z=(g-x)/D,this.w=Math.acos((p+_+v-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(At(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Wf.prototype.isVector4=!0;let sn=Wf;class z_ extends bs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ln,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new sn(0,0,e,t),this.scissorTest=!1,this.viewport=new sn(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:r.depth},l=new Bn(o),u=r.count;for(let f=0;f<u;f++)this.textures[f]=l.clone(),this.textures[f].isRenderTargetTexture=!0,this.textures[f].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Ln,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=r,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new Df(o)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Gi extends z_{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Q0 extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class V_ extends Bn{constructor(e=null,t=1,r=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:o},this.magFilter=Tn,this.minFilter=Tn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const rc=class rc{constructor(e,t,r,o,l,u,f,h,p,x,S,g,_,T,C,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,o,l,u,f,h,p,x,S,g,_,T,C,y)}set(e,t,r,o,l,u,f,h,p,x,S,g,_,T,C,y){const v=this.elements;return v[0]=e,v[4]=t,v[8]=r,v[12]=o,v[1]=l,v[5]=u,v[9]=f,v[13]=h,v[2]=p,v[6]=x,v[10]=S,v[14]=g,v[3]=_,v[7]=T,v[11]=C,v[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new rc().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,o=1/Js.setFromMatrixColumn(e,0).length(),l=1/Js.setFromMatrixColumn(e,1).length(),u=1/Js.setFromMatrixColumn(e,2).length();return t[0]=r[0]*o,t[1]=r[1]*o,t[2]=r[2]*o,t[3]=0,t[4]=r[4]*l,t[5]=r[5]*l,t[6]=r[6]*l,t[7]=0,t[8]=r[8]*u,t[9]=r[9]*u,t[10]=r[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,o=e.y,l=e.z,u=Math.cos(r),f=Math.sin(r),h=Math.cos(o),p=Math.sin(o),x=Math.cos(l),S=Math.sin(l);if(e.order==="XYZ"){const g=u*x,_=u*S,T=f*x,C=f*S;t[0]=h*x,t[4]=-h*S,t[8]=p,t[1]=_+T*p,t[5]=g-C*p,t[9]=-f*h,t[2]=C-g*p,t[6]=T+_*p,t[10]=u*h}else if(e.order==="YXZ"){const g=h*x,_=h*S,T=p*x,C=p*S;t[0]=g+C*f,t[4]=T*f-_,t[8]=u*p,t[1]=u*S,t[5]=u*x,t[9]=-f,t[2]=_*f-T,t[6]=C+g*f,t[10]=u*h}else if(e.order==="ZXY"){const g=h*x,_=h*S,T=p*x,C=p*S;t[0]=g-C*f,t[4]=-u*S,t[8]=T+_*f,t[1]=_+T*f,t[5]=u*x,t[9]=C-g*f,t[2]=-u*p,t[6]=f,t[10]=u*h}else if(e.order==="ZYX"){const g=u*x,_=u*S,T=f*x,C=f*S;t[0]=h*x,t[4]=T*p-_,t[8]=g*p+C,t[1]=h*S,t[5]=C*p+g,t[9]=_*p-T,t[2]=-p,t[6]=f*h,t[10]=u*h}else if(e.order==="YZX"){const g=u*h,_=u*p,T=f*h,C=f*p;t[0]=h*x,t[4]=C-g*S,t[8]=T*S+_,t[1]=S,t[5]=u*x,t[9]=-f*x,t[2]=-p*x,t[6]=_*S+T,t[10]=g-C*S}else if(e.order==="XZY"){const g=u*h,_=u*p,T=f*h,C=f*p;t[0]=h*x,t[4]=-S,t[8]=p*x,t[1]=g*S+C,t[5]=u*x,t[9]=_*S-T,t[2]=T*S-_,t[6]=f*x,t[10]=C*S+g}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(H_,e,G_)}lookAt(e,t,r){const o=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Vr.crossVectors(r,ii),Vr.lengthSq()===0&&(Math.abs(r.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Vr.crossVectors(r,ii)),Vr.normalize(),Sl.crossVectors(ii,Vr),o[0]=Vr.x,o[4]=Sl.x,o[8]=ii.x,o[1]=Vr.y,o[5]=Sl.y,o[9]=ii.y,o[2]=Vr.z,o[6]=Sl.z,o[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,o=t.elements,l=this.elements,u=r[0],f=r[4],h=r[8],p=r[12],x=r[1],S=r[5],g=r[9],_=r[13],T=r[2],C=r[6],y=r[10],v=r[14],D=r[3],U=r[7],R=r[11],L=r[15],N=o[0],F=o[4],w=o[8],P=o[12],V=o[1],B=o[5],j=o[9],re=o[13],fe=o[2],$=o[6],se=o[10],K=o[14],Y=o[3],ie=o[7],ue=o[11],k=o[15];return l[0]=u*N+f*V+h*fe+p*Y,l[4]=u*F+f*B+h*$+p*ie,l[8]=u*w+f*j+h*se+p*ue,l[12]=u*P+f*re+h*K+p*k,l[1]=x*N+S*V+g*fe+_*Y,l[5]=x*F+S*B+g*$+_*ie,l[9]=x*w+S*j+g*se+_*ue,l[13]=x*P+S*re+g*K+_*k,l[2]=T*N+C*V+y*fe+v*Y,l[6]=T*F+C*B+y*$+v*ie,l[10]=T*w+C*j+y*se+v*ue,l[14]=T*P+C*re+y*K+v*k,l[3]=D*N+U*V+R*fe+L*Y,l[7]=D*F+U*B+R*$+L*ie,l[11]=D*w+U*j+R*se+L*ue,l[15]=D*P+U*re+R*K+L*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[12],u=e[1],f=e[5],h=e[9],p=e[13],x=e[2],S=e[6],g=e[10],_=e[14],T=e[3],C=e[7],y=e[11],v=e[15],D=h*_-p*g,U=f*_-p*S,R=f*g-h*S,L=u*_-p*x,N=u*g-h*x,F=u*S-f*x;return t*(C*D-y*U+v*R)-r*(T*D-y*L+v*N)+o*(T*U-C*L+v*F)-l*(T*R-C*N+y*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],o=e[8],l=e[1],u=e[5],f=e[9],h=e[2],p=e[6],x=e[10];return t*(u*x-f*p)-r*(l*x-f*h)+o*(l*p-u*h)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],o=e[2],l=e[3],u=e[4],f=e[5],h=e[6],p=e[7],x=e[8],S=e[9],g=e[10],_=e[11],T=e[12],C=e[13],y=e[14],v=e[15],D=t*f-r*u,U=t*h-o*u,R=t*p-l*u,L=r*h-o*f,N=r*p-l*f,F=o*p-l*h,w=x*C-S*T,P=x*y-g*T,V=x*v-_*T,B=S*y-g*C,j=S*v-_*C,re=g*v-_*y,fe=D*re-U*j+R*B+L*V-N*P+F*w;if(fe===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const $=1/fe;return e[0]=(f*re-h*j+p*B)*$,e[1]=(o*j-r*re-l*B)*$,e[2]=(C*F-y*N+v*L)*$,e[3]=(g*N-S*F-_*L)*$,e[4]=(h*V-u*re-p*P)*$,e[5]=(t*re-o*V+l*P)*$,e[6]=(y*R-T*F-v*U)*$,e[7]=(x*F-g*R+_*U)*$,e[8]=(u*j-f*V+p*w)*$,e[9]=(r*V-t*j-l*w)*$,e[10]=(T*N-C*R+v*D)*$,e[11]=(S*R-x*N-_*D)*$,e[12]=(f*P-u*B-h*w)*$,e[13]=(t*B-r*P+o*w)*$,e[14]=(C*U-T*L-y*D)*$,e[15]=(x*L-S*U+g*D)*$,this}scale(e){const t=this.elements,r=e.x,o=e.y,l=e.z;return t[0]*=r,t[4]*=o,t[8]*=l,t[1]*=r,t[5]*=o,t[9]*=l,t[2]*=r,t[6]*=o,t[10]*=l,t[3]*=r,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,o))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),o=Math.sin(t),l=1-r,u=e.x,f=e.y,h=e.z,p=l*u,x=l*f;return this.set(p*u+r,p*f-o*h,p*h+o*f,0,p*f+o*h,x*f+r,x*h-o*u,0,p*h-o*f,x*h+o*u,l*h*h+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,o,l,u){return this.set(1,r,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,r){const o=this.elements,l=t._x,u=t._y,f=t._z,h=t._w,p=l+l,x=u+u,S=f+f,g=l*p,_=l*x,T=l*S,C=u*x,y=u*S,v=f*S,D=h*p,U=h*x,R=h*S,L=r.x,N=r.y,F=r.z;return o[0]=(1-(C+v))*L,o[1]=(_+R)*L,o[2]=(T-U)*L,o[3]=0,o[4]=(_-R)*N,o[5]=(1-(g+v))*N,o[6]=(y+D)*N,o[7]=0,o[8]=(T+U)*F,o[9]=(y-D)*F,o[10]=(1-(g+C))*F,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,r){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return r.set(1,1,1),t.identity(),this;let u=Js.set(o[0],o[1],o[2]).length();const f=Js.set(o[4],o[5],o[6]).length(),h=Js.set(o[8],o[9],o[10]).length();l<0&&(u=-u),wi.copy(this);const p=1/u,x=1/f,S=1/h;return wi.elements[0]*=p,wi.elements[1]*=p,wi.elements[2]*=p,wi.elements[4]*=x,wi.elements[5]*=x,wi.elements[6]*=x,wi.elements[8]*=S,wi.elements[9]*=S,wi.elements[10]*=S,t.setFromRotationMatrix(wi),r.x=u,r.y=f,r.z=h,this}makePerspective(e,t,r,o,l,u,f=Vi,h=!1){const p=this.elements,x=2*l/(t-e),S=2*l/(r-o),g=(t+e)/(t-e),_=(r+o)/(r-o);let T,C;if(h)T=l/(u-l),C=u*l/(u-l);else if(f===Vi)T=-(u+l)/(u-l),C=-2*u*l/(u-l);else if(f===po)T=-u/(u-l),C=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=g,p[12]=0,p[1]=0,p[5]=S,p[9]=_,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,r,o,l,u,f=Vi,h=!1){const p=this.elements,x=2/(t-e),S=2/(r-o),g=-(t+e)/(t-e),_=-(r+o)/(r-o);let T,C;if(h)T=1/(u-l),C=u/(u-l);else if(f===Vi)T=-2/(u-l),C=-(u+l)/(u-l);else if(f===po)T=-1/(u-l),C=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+f);return p[0]=x,p[4]=0,p[8]=0,p[12]=g,p[1]=0,p[5]=S,p[9]=0,p[13]=_,p[2]=0,p[6]=0,p[10]=T,p[14]=C,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let o=0;o<16;o++)if(t[o]!==r[o])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};rc.prototype.isMatrix4=!0;let tn=rc;const Js=new G,wi=new tn,H_=new G(0,0,0),G_=new G(1,1,1),Vr=new G,Sl=new G,ii=new G,Pm=new tn,Im=new xa;class Zr{constructor(e=0,t=0,r=0,o=Zr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,o=this._order){return this._x=e,this._y=t,this._z=r,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const o=e.elements,l=o[0],u=o[4],f=o[8],h=o[1],p=o[5],x=o[9],S=o[2],g=o[6],_=o[10];switch(t){case"XYZ":this._y=Math.asin(At(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(-x,_),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(g,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._y=Math.atan2(f,_),this._z=Math.atan2(h,p)):(this._y=Math.atan2(-S,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(g,-1,1)),Math.abs(g)<.9999999?(this._y=Math.atan2(-S,_),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(h,l));break;case"ZYX":this._y=Math.asin(-At(S,-1,1)),Math.abs(S)<.9999999?(this._x=Math.atan2(g,_),this._z=Math.atan2(h,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(At(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(-x,p),this._y=Math.atan2(-S,l)):(this._x=0,this._y=Math.atan2(f,_));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(g,p),this._y=Math.atan2(f,l)):(this._x=Math.atan2(-x,_),this._y=0);break;default:ct("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Pm.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Pm,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Im.setFromEuler(this),this.setFromQuaternion(Im,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Zr.DEFAULT_ORDER="XYZ";class eg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let W_=0;const Lm=new G,Qs=new xa,or=new tn,Ml=new G,eo=new G,X_=new G,j_=new xa,Dm=new G(1,0,0),Um=new G(0,1,0),Om=new G(0,0,1),Fm={type:"added"},Y_={type:"removed"},ea={type:"childadded",child:null},Ju={type:"childremoved",child:null};class wn extends bs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:W_++}),this.uuid=xo(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=wn.DEFAULT_UP.clone();const e=new G,t=new Zr,r=new xa,o=new G(1,1,1);function l(){r.setFromEuler(t,!1)}function u(){t.setFromQuaternion(r,void 0,!1)}t._onChange(l),r._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new tn},normalMatrix:{value:new gt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=wn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new eg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.multiply(Qs),this}rotateOnWorldAxis(e,t){return Qs.setFromAxisAngle(e,t),this.quaternion.premultiply(Qs),this}rotateX(e){return this.rotateOnAxis(Dm,e)}rotateY(e){return this.rotateOnAxis(Um,e)}rotateZ(e){return this.rotateOnAxis(Om,e)}translateOnAxis(e,t){return Lm.copy(e).applyQuaternion(this.quaternion),this.position.add(Lm.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Dm,e)}translateY(e){return this.translateOnAxis(Um,e)}translateZ(e){return this.translateOnAxis(Om,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(or.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Ml.copy(e):Ml.set(e,t,r);const o=this.parent;this.updateWorldMatrix(!0,!1),eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?or.lookAt(eo,Ml,this.up):or.lookAt(Ml,eo,this.up),this.quaternion.setFromRotationMatrix(or),o&&(or.extractRotation(o.matrixWorld),Qs.setFromRotationMatrix(or),this.quaternion.premultiply(Qs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ot("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Fm),ea.child=e,this.dispatchEvent(ea),ea.child=null):Ot("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Y_),Ju.child=e,this.dispatchEvent(Ju),Ju.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),or.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),or.multiply(e.parent.matrixWorld)),e.applyMatrix4(or),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Fm),ea.child=e,this.dispatchEvent(ea),ea.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,o=this.children.length;r<o;r++){const u=this.children[r].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,e,X_),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(eo,j_,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*r-l[8]*o,l[13]+=r-l[1]*t-l[5]*r-l[9]*o,l[14]+=o-l[2]*t-l[6]*r-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,o=t.length;r<o;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const l=this.children;for(let u=0,f=l.length;u<f;u++)l[u].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,this.name!==""&&(o.name=this.name),this.castShadow===!0&&(o.castShadow=!0),this.receiveShadow===!0&&(o.receiveShadow=!0),this.visible===!1&&(o.visible=!1),this.frustumCulled===!1&&(o.frustumCulled=!1),this.renderOrder!==0&&(o.renderOrder=this.renderOrder),this.static!==!1&&(o.static=this.static),Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.matrixAutoUpdate===!1&&(o.matrixAutoUpdate=!1),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(f=>({...f,boundingBox:f.boundingBox?f.boundingBox.toJSON():void 0,boundingSphere:f.boundingSphere?f.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(f=>({...f})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(f,h){return f[h.uuid]===void 0&&(f[h.uuid]=h.toJSON(e)),h.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const f=this.geometry.parameters;if(f!==void 0&&f.shapes!==void 0){const h=f.shapes;if(Array.isArray(h))for(let p=0,x=h.length;p<x;p++){const S=h[p];l(e.shapes,S)}else l(e.shapes,h)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const f=[];for(let h=0,p=this.material.length;h<p;h++)f.push(l(e.materials,this.material[h]));o.material=f}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let f=0;f<this.children.length;f++)o.children.push(this.children[f].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let f=0;f<this.animations.length;f++){const h=this.animations[f];o.animations.push(l(e.animations,h))}}if(t){const f=u(e.geometries),h=u(e.materials),p=u(e.textures),x=u(e.images),S=u(e.shapes),g=u(e.skeletons),_=u(e.animations),T=u(e.nodes);f.length>0&&(r.geometries=f),h.length>0&&(r.materials=h),p.length>0&&(r.textures=p),x.length>0&&(r.images=x),S.length>0&&(r.shapes=S),g.length>0&&(r.skeletons=g),_.length>0&&(r.animations=_),T.length>0&&(r.nodes=T)}return r.object=o,r;function u(f){const h=[];for(const p in f){const x=f[p];delete x.metadata,h.push(x)}return h}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const o=e.children[r];this.add(o.clone())}return this}}wn.DEFAULT_UP=new G(0,1,0);wn.DEFAULT_MATRIX_AUTO_UPDATE=!0;wn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Zn extends wn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const q_={type:"move"};class Qu{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Zn,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Zn,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Zn,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let o=null,l=null,u=null;const f=this._targetRay,h=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const C of e.hand.values()){const y=t.getJointPose(C,r),v=this._getHandJoint(p,C);y!==null&&(v.matrix.fromArray(y.transform.matrix),v.matrix.decompose(v.position,v.rotation,v.scale),v.matrixWorldNeedsUpdate=!0,v.jointRadius=y.radius),v.visible=y!==null}const x=p.joints["index-finger-tip"],S=p.joints["thumb-tip"],g=x.position.distanceTo(S.position),_=.02,T=.005;p.inputState.pinching&&g>_+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&g<=_-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else h!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,r),l!==null&&(h.matrix.fromArray(l.transform.matrix),h.matrix.decompose(h.position,h.rotation,h.scale),h.matrixWorldNeedsUpdate=!0,l.linearVelocity?(h.hasLinearVelocity=!0,h.linearVelocity.copy(l.linearVelocity)):h.hasLinearVelocity=!1,l.angularVelocity?(h.hasAngularVelocity=!0,h.angularVelocity.copy(l.angularVelocity)):h.hasAngularVelocity=!1,h.eventsEnabled&&h.dispatchEvent({type:"gripUpdated",data:e,target:this})));f!==null&&(o=t.getPose(e.targetRaySpace,r),o===null&&l!==null&&(o=l),o!==null&&(f.matrix.fromArray(o.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,o.linearVelocity?(f.hasLinearVelocity=!0,f.linearVelocity.copy(o.linearVelocity)):f.hasLinearVelocity=!1,o.angularVelocity?(f.hasAngularVelocity=!0,f.angularVelocity.copy(o.angularVelocity)):f.hasAngularVelocity=!1,this.dispatchEvent(q_)))}return f!==null&&(f.visible=o!==null),h!==null&&(h.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Zn;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const tg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Hr={h:0,s:0,l:0},El={h:0,s:0,l:0};function ed(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}class yt{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Pt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,o=Pt.workingColorSpace){return this.r=e,this.g=t,this.b=r,Pt.colorSpaceToWorking(this,o),this}setHSL(e,t,r,o=Pt.workingColorSpace){if(e=U_(e,1),t=At(t,0,1),r=At(r,0,1),t===0)this.r=this.g=this.b=r;else{const l=r<=.5?r*(1+t):r+t-r*t,u=2*r-l;this.r=ed(u,l,e+1/3),this.g=ed(u,l,e),this.b=ed(u,l,e-1/3)}return Pt.colorSpaceToWorking(this,o),this}setStyle(e,t=pi){function r(l){l!==void 0&&parseFloat(l)<1&&ct("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],f=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(f))return r(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ct("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ct("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=pi){const r=tg[e.toLowerCase()];return r!==void 0?this.setHex(r,t):ct("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=mr(e.r),this.g=mr(e.g),this.b=mr(e.b),this}copyLinearToSRGB(e){return this.r=fa(e.r),this.g=fa(e.g),this.b=fa(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=pi){return Pt.workingToColorSpace(Pn.copy(this),e),Math.round(At(Pn.r*255,0,255))*65536+Math.round(At(Pn.g*255,0,255))*256+Math.round(At(Pn.b*255,0,255))}getHexString(e=pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Pt.workingColorSpace){Pt.workingToColorSpace(Pn.copy(this),t);const r=Pn.r,o=Pn.g,l=Pn.b,u=Math.max(r,o,l),f=Math.min(r,o,l);let h,p;const x=(f+u)/2;if(f===u)h=0,p=0;else{const S=u-f;switch(p=x<=.5?S/(u+f):S/(2-u-f),u){case r:h=(o-l)/S+(o<l?6:0);break;case o:h=(l-r)/S+2;break;case l:h=(r-o)/S+4;break}h/=6}return e.h=h,e.s=p,e.l=x,e}getRGB(e,t=Pt.workingColorSpace){return Pt.workingToColorSpace(Pn.copy(this),t),e.r=Pn.r,e.g=Pn.g,e.b=Pn.b,e}getStyle(e=pi){Pt.workingToColorSpace(Pn.copy(this),e);const t=Pn.r,r=Pn.g,o=Pn.b;return e!==pi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(o*255)})`}offsetHSL(e,t,r){return this.getHSL(Hr),this.setHSL(Hr.h+e,Hr.s+t,Hr.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Hr),e.getHSL(El);const r=Yu(Hr.h,El.h,t),o=Yu(Hr.s,El.s,t),l=Yu(Hr.l,El.l,t);return this.setHSL(r,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*r+l[6]*o,this.g=l[1]*t+l[4]*r+l[7]*o,this.b=l[2]*t+l[5]*r+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Pn=new yt;yt.NAMES=tg;class $_ extends wn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Zr,this.environmentIntensity=1,this.environmentRotation=new Zr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(t.object.environmentIntensity=this.environmentIntensity),t.object.environmentRotation=this.environmentRotation.toArray(),t}}const bi=new G,lr=new G,td=new G,cr=new G,ta=new G,na=new G,km=new G,nd=new G,id=new G,rd=new G,sd=new sn,ad=new sn,od=new sn;class Ri{constructor(e=new G,t=new G,r=new G){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,o){o.subVectors(r,t),bi.subVectors(e,t),o.cross(bi);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,r,o,l){bi.subVectors(o,t),lr.subVectors(r,t),td.subVectors(e,t);const u=bi.dot(bi),f=bi.dot(lr),h=bi.dot(td),p=lr.dot(lr),x=lr.dot(td),S=u*p-f*f;if(S===0)return l.set(0,0,0),null;const g=1/S,_=(p*h-f*x)*g,T=(u*x-f*h)*g;return l.set(1-_-T,T,_)}static containsPoint(e,t,r,o){return this.getBarycoord(e,t,r,o,cr)===null?!1:cr.x>=0&&cr.y>=0&&cr.x+cr.y<=1}static getInterpolation(e,t,r,o,l,u,f,h){return this.getBarycoord(e,t,r,o,cr)===null?(h.x=0,h.y=0,"z"in h&&(h.z=0),"w"in h&&(h.w=0),null):(h.setScalar(0),h.addScaledVector(l,cr.x),h.addScaledVector(u,cr.y),h.addScaledVector(f,cr.z),h)}static getInterpolatedAttribute(e,t,r,o,l,u){return sd.setScalar(0),ad.setScalar(0),od.setScalar(0),sd.fromBufferAttribute(e,t),ad.fromBufferAttribute(e,r),od.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(sd,l.x),u.addScaledVector(ad,l.y),u.addScaledVector(od,l.z),u}static isFrontFacing(e,t,r,o){return bi.subVectors(r,t),lr.subVectors(e,t),bi.cross(lr).dot(o)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,o){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,r,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return bi.subVectors(this.c,this.b),lr.subVectors(this.a,this.b),bi.cross(lr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Ri.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,o,l){return Ri.getInterpolation(e,this.a,this.b,this.c,t,r,o,l)}containsPoint(e){return Ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,o=this.b,l=this.c;let u,f;ta.subVectors(o,r),na.subVectors(l,r),nd.subVectors(e,r);const h=ta.dot(nd),p=na.dot(nd);if(h<=0&&p<=0)return t.copy(r);id.subVectors(e,o);const x=ta.dot(id),S=na.dot(id);if(x>=0&&S<=x)return t.copy(o);const g=h*S-x*p;if(g<=0&&h>=0&&x<=0)return u=h/(h-x),t.copy(r).addScaledVector(ta,u);rd.subVectors(e,l);const _=ta.dot(rd),T=na.dot(rd);if(T>=0&&_<=T)return t.copy(l);const C=_*p-h*T;if(C<=0&&p>=0&&T<=0)return f=p/(p-T),t.copy(r).addScaledVector(na,f);const y=x*T-_*S;if(y<=0&&S-x>=0&&_-T>=0)return km.subVectors(l,o),f=(S-x)/(S-x+(_-T)),t.copy(o).addScaledVector(km,f);const v=1/(y+C+g);return u=C*v,f=g*v,t.copy(r).addScaledVector(ta,u).addScaledVector(na,f)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class vo{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Ai.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Ai.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=Ai.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const l=r.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,f=l.count;u<f;u++)e.isMesh===!0?e.getVertexPosition(u,Ai):Ai.fromBufferAttribute(l,u),Ai.applyMatrix4(e.matrixWorld),this.expandByPoint(Ai);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Tl.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Tl.copy(r.boundingBox)),Tl.applyMatrix4(e.matrixWorld),this.union(Tl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Ai),Ai.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(to),wl.subVectors(this.max,to),ia.subVectors(e.a,to),ra.subVectors(e.b,to),sa.subVectors(e.c,to),Gr.subVectors(ra,ia),Wr.subVectors(sa,ra),hs.subVectors(ia,sa);let t=[0,-Gr.z,Gr.y,0,-Wr.z,Wr.y,0,-hs.z,hs.y,Gr.z,0,-Gr.x,Wr.z,0,-Wr.x,hs.z,0,-hs.x,-Gr.y,Gr.x,0,-Wr.y,Wr.x,0,-hs.y,hs.x,0];return!ld(t,ia,ra,sa,wl)||(t=[1,0,0,0,1,0,0,0,1],!ld(t,ia,ra,sa,wl))?!1:(bl.crossVectors(Gr,Wr),t=[bl.x,bl.y,bl.z],ld(t,ia,ra,sa,wl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ai).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ai).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(ur[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),ur[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),ur[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),ur[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),ur[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),ur[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),ur[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),ur[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(ur),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const ur=[new G,new G,new G,new G,new G,new G,new G,new G],Ai=new G,Tl=new vo,ia=new G,ra=new G,sa=new G,Gr=new G,Wr=new G,hs=new G,to=new G,wl=new G,bl=new G,ps=new G;function ld(s,e,t,r,o){for(let l=0,u=s.length-3;l<=u;l+=3){ps.fromArray(s,l);const f=o.x*Math.abs(ps.x)+o.y*Math.abs(ps.y)+o.z*Math.abs(ps.z),h=e.dot(ps),p=t.dot(ps),x=r.dot(ps);if(Math.max(-Math.max(h,p,x),Math.min(h,p,x))>f)return!1}return!0}const dn=new G,Al=new rt;let K_=0;class Wi extends bs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:K_++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Tm,this.updateRanges=[],this.gpuType=zi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[r+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)Al.fromBufferAttribute(this,t),Al.applyMatrix3(e),this.setXY(t,Al.x,Al.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix3(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyMatrix4(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.applyNormalMatrix(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)dn.fromBufferAttribute(this,t),dn.transformDirection(e),this.setXYZ(t,dn.x,dn.y,dn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=Qa(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=$n(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Qa(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Qa(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Qa(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Qa(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,o){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array),o=$n(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this}setXYZW(e,t,r,o,l){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),r=$n(r,this.array),o=$n(o,this.array),l=$n(l,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Tm&&(e.usage=this.usage),e}dispose(){this.dispatchEvent({type:"dispose"})}}class ng extends Wi{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class ig extends Wi{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Jt extends Wi{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Z_=new vo,no=new G,cd=new G;class oc{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Z_.setFromPoints(e).getCenter(r);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,r.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;no.subVectors(e,this.center);const t=no.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),o=(r-this.radius)*.5;this.center.addScaledVector(no,o/r),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(cd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(no.copy(e.center).add(cd)),this.expandByPoint(no.copy(e.center).sub(cd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let J_=0;const hi=new tn,ud=new wn,aa=new G,ri=new vo,io=new vo,yn=new G;class Dn extends bs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:J_++}),this.uuid=xo(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(P_(e)?ig:ng)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const l=new gt().getNormalMatrix(e);r.applyNormalMatrix(l),r.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return hi.makeRotationFromQuaternion(e),this.applyMatrix4(hi),this}rotateX(e){return hi.makeRotationX(e),this.applyMatrix4(hi),this}rotateY(e){return hi.makeRotationY(e),this.applyMatrix4(hi),this}rotateZ(e){return hi.makeRotationZ(e),this.applyMatrix4(hi),this}translate(e,t,r){return hi.makeTranslation(e,t,r),this.applyMatrix4(hi),this}scale(e,t,r){return hi.makeScale(e,t,r),this.applyMatrix4(hi),this}lookAt(e){return ud.lookAt(e),ud.updateMatrix(),this.applyMatrix4(ud.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(aa).negate(),this.translate(aa.x,aa.y,aa.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];r.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Jt(r,3))}else{const r=Math.min(e.length,t.count);for(let o=0;o<r;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&ct("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new vo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,o=t.length;r<o;r++){const l=t[r];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ot('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new oc);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ot("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const f=t[l];io.setFromBufferAttribute(f),this.morphTargetsRelative?(yn.addVectors(ri.min,io.min),ri.expandByPoint(yn),yn.addVectors(ri.max,io.max),ri.expandByPoint(yn)):(ri.expandByPoint(io.min),ri.expandByPoint(io.max))}ri.getCenter(r);let o=0;for(let l=0,u=e.count;l<u;l++)yn.fromBufferAttribute(e,l),o=Math.max(o,r.distanceToSquared(yn));if(t)for(let l=0,u=t.length;l<u;l++){const f=t[l],h=this.morphTargetsRelative;for(let p=0,x=f.count;p<x;p++)yn.fromBufferAttribute(f,p),h&&(aa.fromBufferAttribute(e,p),yn.add(aa)),o=Math.max(o,r.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Ot('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ot("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==r.count)&&(u=new Wi(new Float32Array(4*r.count),4),this.setAttribute("tangent",u));const f=[],h=[];for(let w=0;w<r.count;w++)f[w]=new G,h[w]=new G;const p=new G,x=new G,S=new G,g=new rt,_=new rt,T=new rt,C=new G,y=new G;function v(w,P,V){p.fromBufferAttribute(r,w),x.fromBufferAttribute(r,P),S.fromBufferAttribute(r,V),g.fromBufferAttribute(l,w),_.fromBufferAttribute(l,P),T.fromBufferAttribute(l,V),x.sub(p),S.sub(p),_.sub(g),T.sub(g);const B=1/(_.x*T.y-T.x*_.y);isFinite(B)&&(C.copy(x).multiplyScalar(T.y).addScaledVector(S,-_.y).multiplyScalar(B),y.copy(S).multiplyScalar(_.x).addScaledVector(x,-T.x).multiplyScalar(B),f[w].add(C),f[P].add(C),f[V].add(C),h[w].add(y),h[P].add(y),h[V].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let w=0,P=D.length;w<P;++w){const V=D[w],B=V.start,j=V.count;for(let re=B,fe=B+j;re<fe;re+=3)v(e.getX(re+0),e.getX(re+1),e.getX(re+2))}const U=new G,R=new G,L=new G,N=new G;function F(w){L.fromBufferAttribute(o,w),N.copy(L);const P=f[w];U.copy(P),U.sub(L.multiplyScalar(L.dot(P))).normalize(),R.crossVectors(N,P);const B=R.dot(h[w])<0?-1:1;u.setXYZW(w,U.x,U.y,U.z,B)}for(let w=0,P=D.length;w<P;++w){const V=D[w],B=V.start,j=V.count;for(let re=B,fe=B+j;re<fe;re+=3)F(e.getX(re+0)),F(e.getX(re+1)),F(e.getX(re+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Wi(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let g=0,_=r.count;g<_;g++)r.setXYZ(g,0,0,0);const o=new G,l=new G,u=new G,f=new G,h=new G,p=new G,x=new G,S=new G;if(e)for(let g=0,_=e.count;g<_;g+=3){const T=e.getX(g+0),C=e.getX(g+1),y=e.getX(g+2);o.fromBufferAttribute(t,T),l.fromBufferAttribute(t,C),u.fromBufferAttribute(t,y),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),f.fromBufferAttribute(r,T),h.fromBufferAttribute(r,C),p.fromBufferAttribute(r,y),f.add(x),h.add(x),p.add(x),r.setXYZ(T,f.x,f.y,f.z),r.setXYZ(C,h.x,h.y,h.z),r.setXYZ(y,p.x,p.y,p.z)}else for(let g=0,_=t.count;g<_;g+=3)o.fromBufferAttribute(t,g+0),l.fromBufferAttribute(t,g+1),u.fromBufferAttribute(t,g+2),x.subVectors(u,l),S.subVectors(o,l),x.cross(S),r.setXYZ(g+0,x.x,x.y,x.z),r.setXYZ(g+1,x.x,x.y,x.z),r.setXYZ(g+2,x.x,x.y,x.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(f,h){const p=f.array,x=f.itemSize,S=f.normalized,g=new p.constructor(h.length*x);let _=0,T=0;for(let C=0,y=h.length;C<y;C++){f.isInterleavedBufferAttribute?_=h[C]*f.data.stride+f.offset:_=h[C]*x;for(let v=0;v<x;v++)g[T++]=p[_++]}return new Wi(g,x,S)}if(this.index===null)return ct("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Dn,r=this.index.array,o=this.attributes;for(const f in o){const h=o[f],p=e(h,r);t.setAttribute(f,p)}const l=this.morphAttributes;for(const f in l){const h=[],p=l[f];for(let x=0,S=p.length;x<S;x++){const g=p[x],_=e(g,r);h.push(_)}t.morphAttributes[f]=h}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let f=0,h=u.length;f<h;f++){const p=u[f];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const h=this.parameters;for(const p in h)h[p]!==void 0&&(e[p]=h[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const h in r){const p=r[h];e.data.attributes[h]=p.toJSON(e.data)}const o={};let l=!1;for(const h in this.morphAttributes){const p=this.morphAttributes[h],x=[];for(let S=0,g=p.length;S<g;S++){const _=p[S];x.push(_.toJSON(e.data))}x.length>0&&(o[h]=x,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const f=this.boundingSphere;return f!==null&&(e.data.boundingSphere=f.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const o=e.attributes;for(const p in o){const x=o[p];this.setAttribute(p,x.clone(t))}const l=e.morphAttributes;for(const p in l){const x=[],S=l[p];for(let g=0,_=S.length;g<_;g++)x.push(S[g].clone(t));this.morphAttributes[p]=x}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,x=u.length;p<x;p++){const S=u[p];this.addGroup(S.start,S.count,S.materialIndex)}const f=e.boundingBox;f!==null&&(this.boundingBox=f.clone());const h=e.boundingSphere;return h!==null&&(this.boundingSphere=h.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}let Q_=0;class va extends bs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Q_++}),this.uuid=xo(),this.name="",this.type="Material",this.blending=ua,this.side=Kr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Cd,this.blendDst=Nd,this.blendEquation=vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=ha,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Em,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ks,this.stencilZFail=Ks,this.stencilZPass=Ks,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){ct(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){ct(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(r):o&&o.isVector2&&r&&r.isVector2||o&&o.isEuler&&r&&r.isEuler||o&&o.isVector3&&r&&r.isVector3?o.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.shadowSide!==null&&(r.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),this.blending!==ua&&(r.blending=this.blending),this.side!==Kr&&(r.side=this.side),this.vertexColors===!0&&(r.vertexColors=!0),this.opacity<1&&(r.opacity=this.opacity),this.transparent===!0&&(r.transparent=!0),this.blendSrc!==Cd&&(r.blendSrc=this.blendSrc),this.blendDst!==Nd&&(r.blendDst=this.blendDst),this.blendEquation!==vs&&(r.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(r.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(r.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(r.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(r.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(r.blendAlpha=this.blendAlpha),this.depthFunc!==ha&&(r.depthFunc=this.depthFunc),this.depthTest===!1&&(r.depthTest=this.depthTest),this.depthWrite===!1&&(r.depthWrite=this.depthWrite),this.colorWrite===!1&&(r.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(r.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==Em&&(r.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(r.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(r.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Ks&&(r.stencilFail=this.stencilFail),this.stencilZFail!==Ks&&(r.stencilZFail=this.stencilZFail),this.stencilZPass!==Ks&&(r.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(r.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(r.rotation=this.rotation),this.polygonOffset===!0&&(r.polygonOffset=!0),this.polygonOffsetFactor!==0&&(r.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(r.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(r.linewidth=this.linewidth),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.dithering===!0&&(r.dithering=!0),this.alphaTest>0&&(r.alphaTest=this.alphaTest),this.alphaHash===!0&&(r.alphaHash=!0),this.alphaToCoverage===!0&&(r.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(r.premultipliedAlpha=!0),this.forceSinglePass===!0&&(r.forceSinglePass=!0),this.allowOverride===!1&&(r.allowOverride=!1),this.wireframe===!0&&(r.wireframe=!0),this.wireframeLinewidth>1&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(r.flatShading=!0),this.visible===!1&&(r.visible=!1),this.toneMapped===!1&&(r.toneMapped=!1),this.fog===!1&&(r.fog=!1),Object.keys(this.userData).length>0&&(r.userData=this.userData);function o(l){const u=[];for(const f in l){const h=l[f];delete h.metadata,u.push(h)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(r.textures=l),u.length>0&&(r.images=u)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new rt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new rt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const o=t.length;r=new Array(o);for(let l=0;l!==o;++l)r[l]=t[l].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const dr=new G,dd=new G,Rl=new G,Xr=new G,fd=new G,Cl=new G,hd=new G;class rg{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,dr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=dr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(dr.copy(this.origin).addScaledVector(this.direction,t),dr.distanceToSquared(e))}distanceSqToSegment(e,t,r,o){dd.copy(e).add(t).multiplyScalar(.5),Rl.copy(t).sub(e).normalize(),Xr.copy(this.origin).sub(dd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Rl),f=Xr.dot(this.direction),h=-Xr.dot(Rl),p=Xr.lengthSq(),x=Math.abs(1-u*u);let S,g,_,T;if(x>0)if(S=u*h-f,g=u*f-h,T=l*x,S>=0)if(g>=-T)if(g<=T){const C=1/x;S*=C,g*=C,_=S*(S+u*g+2*f)+g*(u*S+g+2*h)+p}else g=l,S=Math.max(0,-(u*g+f)),_=-S*S+g*(g+2*h)+p;else g=-l,S=Math.max(0,-(u*g+f)),_=-S*S+g*(g+2*h)+p;else g<=-T?(S=Math.max(0,-(-u*l+f)),g=S>0?-l:Math.min(Math.max(-l,-h),l),_=-S*S+g*(g+2*h)+p):g<=T?(S=0,g=Math.min(Math.max(-l,-h),l),_=g*(g+2*h)+p):(S=Math.max(0,-(u*l+f)),g=S>0?l:Math.min(Math.max(-l,-h),l),_=-S*S+g*(g+2*h)+p);else g=u>0?-l:l,S=Math.max(0,-(u*g+f)),_=-S*S+g*(g+2*h)+p;return r&&r.copy(this.origin).addScaledVector(this.direction,S),o&&o.copy(dd).addScaledVector(Rl,g),_}intersectSphere(e,t){dr.subVectors(e.center,this.origin);const r=dr.dot(this.direction),o=dr.dot(dr)-r*r,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),f=r-u,h=r+u;return h<0?null:f<0?this.at(h,t):this.at(f,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,o,l,u,f,h;const p=1/this.direction.x,x=1/this.direction.y,S=1/this.direction.z,g=this.origin;return p>=0?(r=(e.min.x-g.x)*p,o=(e.max.x-g.x)*p):(r=(e.max.x-g.x)*p,o=(e.min.x-g.x)*p),x>=0?(l=(e.min.y-g.y)*x,u=(e.max.y-g.y)*x):(l=(e.max.y-g.y)*x,u=(e.min.y-g.y)*x),r>u||l>o||((l>r||isNaN(r))&&(r=l),(u<o||isNaN(o))&&(o=u),S>=0?(f=(e.min.z-g.z)*S,h=(e.max.z-g.z)*S):(f=(e.max.z-g.z)*S,h=(e.min.z-g.z)*S),r>h||f>o)||((f>r||r!==r)&&(r=f),(h<o||o!==o)&&(o=h),o<0)?null:this.at(r>=0?r:o,t)}intersectsBox(e){return this.intersectBox(e,dr)!==null}intersectTriangle(e,t,r,o,l){fd.subVectors(t,e),Cl.subVectors(r,e),hd.crossVectors(fd,Cl);let u=this.direction.dot(hd),f;if(u>0){if(o)return null;f=1}else if(u<0)f=-1,u=-u;else return null;Xr.subVectors(this.origin,e);const h=f*this.direction.dot(Cl.crossVectors(Xr,Cl));if(h<0)return null;const p=f*this.direction.dot(fd.cross(Xr));if(p<0||h+p>u)return null;const x=-f*Xr.dot(hd);return x<0?null:this.at(x/u,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class _s extends va{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.combine=O0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bm=new tn,ms=new rg,Nl=new oc,zm=new G,Pl=new G,Il=new G,Ll=new G,pd=new G,Dl=new G,Vm=new G,Ul=new G;class it extends wn{constructor(e=new Dn,t=new _s){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}getVertexPosition(e,t){const r=this.geometry,o=r.attributes.position,l=r.morphAttributes.position,u=r.morphTargetsRelative;t.fromBufferAttribute(o,e);const f=this.morphTargetInfluences;if(l&&f){Dl.set(0,0,0);for(let h=0,p=l.length;h<p;h++){const x=f[h],S=l[h];x!==0&&(pd.fromBufferAttribute(S,e),u?Dl.addScaledVector(pd,x):Dl.addScaledVector(pd.sub(t),x))}t.add(Dl)}return t}raycast(e,t){const r=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Nl.copy(r.boundingSphere),Nl.applyMatrix4(l),ms.copy(e.ray).recast(e.near),!(Nl.containsPoint(ms.origin)===!1&&(ms.intersectSphere(Nl,zm)===null||ms.origin.distanceToSquared(zm)>(e.far-e.near)**2))&&(Bm.copy(l).invert(),ms.copy(e.ray).applyMatrix4(Bm),!(r.boundingBox!==null&&ms.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ms)))}_computeIntersections(e,t,r){let o;const l=this.geometry,u=this.material,f=l.index,h=l.attributes.position,p=l.attributes.uv,x=l.attributes.uv1,S=l.attributes.normal,g=l.groups,_=l.drawRange;if(f!==null)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const y=g[T],v=u[y.materialIndex],D=Math.max(y.start,_.start),U=Math.min(f.count,Math.min(y.start+y.count,_.start+_.count));for(let R=D,L=U;R<L;R+=3){const N=f.getX(R),F=f.getX(R+1),w=f.getX(R+2);o=Ol(this,v,e,r,p,x,S,N,F,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,_.start),C=Math.min(f.count,_.start+_.count);for(let y=T,v=C;y<v;y+=3){const D=f.getX(y),U=f.getX(y+1),R=f.getX(y+2);o=Ol(this,u,e,r,p,x,S,D,U,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(h!==void 0)if(Array.isArray(u))for(let T=0,C=g.length;T<C;T++){const y=g[T],v=u[y.materialIndex],D=Math.max(y.start,_.start),U=Math.min(h.count,Math.min(y.start+y.count,_.start+_.count));for(let R=D,L=U;R<L;R+=3){const N=R,F=R+1,w=R+2;o=Ol(this,v,e,r,p,x,S,N,F,w),o&&(o.faceIndex=Math.floor(R/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const T=Math.max(0,_.start),C=Math.min(h.count,_.start+_.count);for(let y=T,v=C;y<v;y+=3){const D=y,U=y+1,R=y+2;o=Ol(this,u,e,r,p,x,S,D,U,R),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function ey(s,e,t,r,o,l,u,f){let h;if(e.side===Jn?h=r.intersectTriangle(u,l,o,!0,f):h=r.intersectTriangle(o,l,u,e.side===Kr,f),h===null)return null;Ul.copy(f),Ul.applyMatrix4(s.matrixWorld);const p=t.ray.origin.distanceTo(Ul);return p<t.near||p>t.far?null:{distance:p,point:Ul.clone(),object:s}}function Ol(s,e,t,r,o,l,u,f,h,p){s.getVertexPosition(f,Pl),s.getVertexPosition(h,Il),s.getVertexPosition(p,Ll);const x=ey(s,e,t,r,Pl,Il,Ll,Vm);if(x){const S=new G;Ri.getBarycoord(Vm,Pl,Il,Ll,S),o&&(x.uv=Ri.getInterpolatedAttribute(o,f,h,p,S,new rt)),l&&(x.uv1=Ri.getInterpolatedAttribute(l,f,h,p,S,new rt)),u&&(x.normal=Ri.getInterpolatedAttribute(u,f,h,p,S,new G),x.normal.dot(r.direction)>0&&x.normal.multiplyScalar(-1));const g={a:f,b:h,c:p,normal:new G,materialIndex:0};Ri.getNormal(Pl,Il,Ll,g.normal),x.face=g,x.barycoord=S}return x}class ty extends Bn{constructor(e=null,t=1,r=1,o,l,u,f,h,p=Tn,x=Tn,S,g){super(null,u,f,h,p,x,o,l,S,g),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const md=new G,ny=new G,iy=new gt;class xs{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,o){return this.normal.set(e,t,r),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const o=md.subVectors(r,t).cross(ny.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const o=e.delta(md),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return r===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||iy.getNormalMatrix(e),o=this.coplanarPoint(md).applyMatrix4(e),l=this.normal.applyMatrix3(r).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const gs=new oc,ry=new rt(.5,.5),Fl=new G;class Uf{constructor(e=new xs,t=new xs,r=new xs,o=new xs,l=new xs,u=new xs){this.planes=[e,t,r,o,l,u]}set(e,t,r,o,l,u){const f=this.planes;return f[0].copy(e),f[1].copy(t),f[2].copy(r),f[3].copy(o),f[4].copy(l),f[5].copy(u),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Vi,r=!1){const o=this.planes,l=e.elements,u=l[0],f=l[1],h=l[2],p=l[3],x=l[4],S=l[5],g=l[6],_=l[7],T=l[8],C=l[9],y=l[10],v=l[11],D=l[12],U=l[13],R=l[14],L=l[15];if(o[0].setComponents(p-u,_-x,v-T,L-D).normalize(),o[1].setComponents(p+u,_+x,v+T,L+D).normalize(),o[2].setComponents(p+f,_+S,v+C,L+U).normalize(),o[3].setComponents(p-f,_-S,v-C,L-U).normalize(),r)o[4].setComponents(h,g,y,R).normalize(),o[5].setComponents(p-h,_-g,v-y,L-R).normalize();else if(o[4].setComponents(p-h,_-g,v-y,L-R).normalize(),t===Vi)o[5].setComponents(p+h,_+g,v+y,L+R).normalize();else if(t===po)o[5].setComponents(h,g,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),gs.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),gs.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(gs)}intersectsSprite(e){gs.center.set(0,0,0);const t=ry.distanceTo(e.center);return gs.radius=.7071067811865476+t,gs.applyMatrix4(e.matrixWorld),this.intersectsSphere(gs)}intersectsSphere(e){const t=this.planes,r=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(r)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const o=t[r];if(Fl.x=o.normal.x>0?e.max.x:e.min.x,Fl.y=o.normal.y>0?e.max.y:e.min.y,Fl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Fl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Of extends va{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new yt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const tc=new G,nc=new G,Hm=new tn,ro=new rg,kl=new oc,gd=new G,Gm=new G;class sg extends wn{constructor(e=new Dn,t=new Of){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[0];for(let o=1,l=t.count;o<l;o++)tc.fromBufferAttribute(t,o-1),nc.fromBufferAttribute(t,o),r[o]=r[o-1],r[o]+=tc.distanceTo(nc);e.setAttribute("lineDistance",new Jt(r,1))}else ct("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(e,t){const r=this.geometry,o=this.matrixWorld,l=e.params.Line.threshold,u=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),kl.copy(r.boundingSphere),kl.applyMatrix4(o),kl.radius+=l,e.ray.intersectsSphere(kl)===!1)return;Hm.copy(o).invert(),ro.copy(e.ray).applyMatrix4(Hm);const f=l/((this.scale.x+this.scale.y+this.scale.z)/3),h=f*f,p=this.isLineSegments?2:1,x=r.index,g=r.attributes.position;if(x!==null){const _=Math.max(0,u.start),T=Math.min(x.count,u.start+u.count);for(let C=_,y=T-1;C<y;C+=p){const v=x.getX(C),D=x.getX(C+1),U=Bl(this,e,ro,h,v,D,C);U&&t.push(U)}if(this.isLineLoop){const C=x.getX(T-1),y=x.getX(_),v=Bl(this,e,ro,h,C,y,T-1);v&&t.push(v)}}else{const _=Math.max(0,u.start),T=Math.min(g.count,u.start+u.count);for(let C=_,y=T-1;C<y;C+=p){const v=Bl(this,e,ro,h,C,C+1,C);v&&t.push(v)}if(this.isLineLoop){const C=Bl(this,e,ro,h,T-1,_,T-1);C&&t.push(C)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const o=t[r[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const f=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[f]=l}}}}}function Bl(s,e,t,r,o,l,u){const f=s.geometry.attributes.position;if(tc.fromBufferAttribute(f,o),nc.fromBufferAttribute(f,l),t.distanceSqToSegment(tc,nc,gd,Gm)>r)return;gd.applyMatrix4(s.matrixWorld);const p=e.ray.origin.distanceTo(gd);if(!(p<e.near||p>e.far))return{distance:p,point:Gm.clone().applyMatrix4(s.matrixWorld),index:u,face:null,faceIndex:null,barycoord:null,object:s}}const Wm=new G,Xm=new G;class sy extends sg{constructor(e,t){super(e,t),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,r=[];for(let o=0,l=t.count;o<l;o+=2)Wm.fromBufferAttribute(t,o),Xm.fromBufferAttribute(t,o+1),r[o]=o===0?0:r[o-1],r[o+1]=r[o]+Wm.distanceTo(Xm);e.setAttribute("lineDistance",new Jt(r,1))}else ct("LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}class ag extends Bn{constructor(e=[],t=Ts,r,o,l,u,f,h,p,x){super(e,t,r,o,l,u,f,h,p,x),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class ma extends Bn{constructor(e,t,r=Xi,o,l,u,f=Tn,h=Tn,p,x=xr,S=1){if(x!==xr&&x!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const g={width:e,height:t,depth:S};super(g,o,l,u,f,h,x,r,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Df(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class ay extends ma{constructor(e,t=Xi,r=Ts,o,l,u=Tn,f=Tn,h,p=xr){const x={width:e,height:e,depth:1},S=[x,x,x,x,x,x];super(e,e,t,r,o,l,u,f,h,p),this.image=S,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class og extends Bn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Gt extends Dn{constructor(e=1,t=1,r=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:o,heightSegments:l,depthSegments:u};const f=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const h=[],p=[],x=[],S=[];let g=0,_=0;T("z","y","x",-1,-1,r,t,e,u,l,0),T("z","y","x",1,-1,r,t,-e,u,l,1),T("x","z","y",1,1,e,r,t,o,u,2),T("x","z","y",1,-1,e,r,-t,o,u,3),T("x","y","z",1,-1,e,t,r,o,l,4),T("x","y","z",-1,-1,e,t,-r,o,l,5),this.setIndex(h),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(S,2));function T(C,y,v,D,U,R,L,N,F,w,P){const V=R/F,B=L/w,j=R/2,re=L/2,fe=N/2,$=F+1,se=w+1;let K=0,Y=0;const ie=new G;for(let ue=0;ue<se;ue++){const k=ue*B-re;for(let J=0;J<$;J++){const Le=J*V-j;ie[C]=Le*D,ie[y]=k*U,ie[v]=fe,p.push(ie.x,ie.y,ie.z),ie[C]=0,ie[y]=0,ie[v]=N>0?1:-1,x.push(ie.x,ie.y,ie.z),S.push(J/F),S.push(1-ue/w),K+=1}}for(let ue=0;ue<w;ue++)for(let k=0;k<F;k++){const J=g+k+$*ue,Le=g+k+$*(ue+1),Xe=g+(k+1)+$*(ue+1),ze=g+(k+1)+$*ue;h.push(J,Le,ze),h.push(Le,Xe,ze),Y+=6}f.addGroup(_,Y,P),_+=Y,g+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Gt(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kn extends Dn{constructor(e=1,t=1,r=1,o=32,l=1,u=!1,f=0,h=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:o,heightSegments:l,openEnded:u,thetaStart:f,thetaLength:h};const p=this;o=Math.floor(o),l=Math.floor(l);const x=[],S=[],g=[],_=[];let T=0;const C=[],y=r/2;let v=0;D(),u===!1&&(e>0&&U(!0),t>0&&U(!1)),this.setIndex(x),this.setAttribute("position",new Jt(S,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(_,2));function D(){const R=new G,L=new G;let N=0;const F=(t-e)/r;for(let w=0;w<=l;w++){const P=[],V=w/l,B=V*(t-e)+e;for(let j=0;j<=o;j++){const re=j/o,fe=re*h+f,$=Math.sin(fe),se=Math.cos(fe);L.x=B*$,L.y=-V*r+y,L.z=B*se,S.push(L.x,L.y,L.z),R.set($,F,se).normalize(),g.push(R.x,R.y,R.z),_.push(re,1-V),P.push(T++)}C.push(P)}for(let w=0;w<o;w++)for(let P=0;P<l;P++){const V=C[P][w],B=C[P+1][w],j=C[P+1][w+1],re=C[P][w+1];(e>0||P!==0)&&(x.push(V,B,re),N+=3),(t>0||P!==l-1)&&(x.push(B,j,re),N+=3)}p.addGroup(v,N,0),v+=N}function U(R){const L=T,N=new rt,F=new G;let w=0;const P=R===!0?e:t,V=R===!0?1:-1;for(let j=1;j<=o;j++)S.push(0,y*V,0),g.push(0,V,0),_.push(.5,.5),T++;const B=T;for(let j=0;j<=o;j++){const fe=j/o*h+f,$=Math.cos(fe),se=Math.sin(fe);F.x=P*se,F.y=y*V,F.z=P*$,S.push(F.x,F.y,F.z),g.push(0,V,0),N.x=$*.5+.5,N.y=se*.5*V+.5,_.push(N.x,N.y),T++}for(let j=0;j<o;j++){const re=L+j,fe=B+j;R===!0?x.push(fe,fe+1,re):x.push(fe+1,fe,re),w+=3}p.addGroup(v,w,R===!0?1:2),v+=w}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kn(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class vr{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){ct("Curve: .getPoint() not implemented.")}getPointAt(e,t){const r=this.getUtoTmapping(e);return this.getPoint(r,t)}getPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPoint(r/e));return t}getSpacedPoints(e=5){const t=[];for(let r=0;r<=e;r++)t.push(this.getPointAt(r/e));return t}getLength(){const e=this.getLengths();return e[e.length-1]}getLengths(e=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===e+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;const t=[];let r,o=this.getPoint(0),l=0;t.push(0);for(let u=1;u<=e;u++)r=this.getPoint(u/e),l+=r.distanceTo(o),t.push(l),o=r;return this.cacheArcLengths=t,t}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(e,t=null){const r=this.getLengths();let o=0;const l=r.length;let u;t?u=t:u=e*r[l-1];let f=0,h=l-1,p;for(;f<=h;)if(o=Math.floor(f+(h-f)/2),p=r[o]-u,p<0)f=o+1;else if(p>0)h=o-1;else{h=o;break}if(o=h,r[o]===u)return o/(l-1);const x=r[o],g=r[o+1]-x,_=(u-x)/g;return(o+_)/(l-1)}getTangent(e,t){let o=e-1e-4,l=e+1e-4;o<0&&(o=0),l>1&&(l=1);const u=this.getPoint(o),f=this.getPoint(l),h=t||(u.isVector2?new rt:new G);return h.copy(f).sub(u).normalize(),h}getTangentAt(e,t){const r=this.getUtoTmapping(e);return this.getTangent(r,t)}computeFrenetFrames(e,t=!1){const r=new G,o=[],l=[],u=[],f=new G,h=new tn;for(let _=0;_<=e;_++){const T=_/e;o[_]=this.getTangentAt(T,new G)}l[0]=new G,u[0]=new G;let p=Number.MAX_VALUE;const x=Math.abs(o[0].x),S=Math.abs(o[0].y),g=Math.abs(o[0].z);x<=p&&(p=x,r.set(1,0,0)),S<=p&&(p=S,r.set(0,1,0)),g<=p&&r.set(0,0,1),f.crossVectors(o[0],r).normalize(),l[0].crossVectors(o[0],f),u[0].crossVectors(o[0],l[0]);for(let _=1;_<=e;_++){if(l[_]=l[_-1].clone(),u[_]=u[_-1].clone(),f.crossVectors(o[_-1],o[_]),f.length()>Number.EPSILON){f.normalize();const T=Math.acos(At(o[_-1].dot(o[_]),-1,1));l[_].applyMatrix4(h.makeRotationAxis(f,T))}u[_].crossVectors(o[_],l[_])}if(t===!0){let _=Math.acos(At(l[0].dot(l[e]),-1,1));_/=e,o[0].dot(f.crossVectors(l[0],l[e]))>0&&(_=-_);for(let T=1;T<=e;T++)l[T].applyMatrix4(h.makeRotationAxis(o[T],_*T)),u[T].crossVectors(o[T],l[T])}return{tangents:o,normals:l,binormals:u}}clone(){return new this.constructor().copy(this)}copy(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}toJSON(){const e={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return e.arcLengthDivisions=this.arcLengthDivisions,e.type=this.type,e}fromJSON(e){return this.arcLengthDivisions=e.arcLengthDivisions,this}}class lg extends vr{constructor(e=0,t=0,r=1,o=1,l=0,u=Math.PI*2,f=!1,h=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=e,this.aY=t,this.xRadius=r,this.yRadius=o,this.aStartAngle=l,this.aEndAngle=u,this.aClockwise=f,this.aRotation=h}getPoint(e,t=new rt){const r=t,o=Math.PI*2;let l=this.aEndAngle-this.aStartAngle;const u=Math.abs(l)<Number.EPSILON;for(;l<0;)l+=o;for(;l>o;)l-=o;l<Number.EPSILON&&(u?l=0:l=o),this.aClockwise===!0&&!u&&(l===o?l=-o:l=l-o);const f=this.aStartAngle+e*l;let h=this.aX+this.xRadius*Math.cos(f),p=this.aY+this.yRadius*Math.sin(f);if(this.aRotation!==0){const x=Math.cos(this.aRotation),S=Math.sin(this.aRotation),g=h-this.aX,_=p-this.aY;h=g*x-_*S+this.aX,p=g*S+_*x+this.aY}return r.set(h,p)}copy(e){return super.copy(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}toJSON(){const e=super.toJSON();return e.aX=this.aX,e.aY=this.aY,e.xRadius=this.xRadius,e.yRadius=this.yRadius,e.aStartAngle=this.aStartAngle,e.aEndAngle=this.aEndAngle,e.aClockwise=this.aClockwise,e.aRotation=this.aRotation,e}fromJSON(e){return super.fromJSON(e),this.aX=e.aX,this.aY=e.aY,this.xRadius=e.xRadius,this.yRadius=e.yRadius,this.aStartAngle=e.aStartAngle,this.aEndAngle=e.aEndAngle,this.aClockwise=e.aClockwise,this.aRotation=e.aRotation,this}}class oy extends lg{constructor(e,t,r,o,l,u){super(e,t,r,r,o,l,u),this.isArcCurve=!0,this.type="ArcCurve"}}function Ff(){let s=0,e=0,t=0,r=0;function o(l,u,f,h){s=l,e=f,t=-3*l+3*u-2*f-h,r=2*l-2*u+f+h}return{initCatmullRom:function(l,u,f,h,p){o(u,f,p*(f-l),p*(h-u))},initNonuniformCatmullRom:function(l,u,f,h,p,x,S){let g=(u-l)/p-(f-l)/(p+x)+(f-u)/x,_=(f-u)/x-(h-u)/(x+S)+(h-f)/S;g*=x,_*=x,o(u,f,g,_)},calc:function(l){const u=l*l,f=u*l;return s+e*l+t*u+r*f}}}const jm=new G,Ym=new G,xd=new Ff,vd=new Ff,_d=new Ff;class _f extends vr{constructor(e=[],t=!1,r="centripetal",o=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=e,this.closed=t,this.curveType=r,this.tension=o}getPoint(e,t=new G){const r=t,o=this.points,l=o.length,u=(l-(this.closed?0:1))*e;let f=Math.floor(u),h=u-f;this.closed?f+=f>0?0:(Math.floor(Math.abs(f)/l)+1)*l:h===0&&f===l-1&&(f=l-2,h=1);let p,x;this.closed||f>0?p=o[(f-1)%l]:(Ym.subVectors(o[0],o[1]).add(o[0]),p=Ym);const S=o[f%l],g=o[(f+1)%l];if(this.closed||f+2<l?x=o[(f+2)%l]:(jm.subVectors(o[l-1],o[l-2]).add(o[l-1]),x=jm),this.curveType==="centripetal"||this.curveType==="chordal"){const _=this.curveType==="chordal"?.5:.25;let T=Math.pow(p.distanceToSquared(S),_),C=Math.pow(S.distanceToSquared(g),_),y=Math.pow(g.distanceToSquared(x),_);C<1e-4&&(C=1),T<1e-4&&(T=C),y<1e-4&&(y=C),xd.initNonuniformCatmullRom(p.x,S.x,g.x,x.x,T,C,y),vd.initNonuniformCatmullRom(p.y,S.y,g.y,x.y,T,C,y),_d.initNonuniformCatmullRom(p.z,S.z,g.z,x.z,T,C,y)}else this.curveType==="catmullrom"&&(xd.initCatmullRom(p.x,S.x,g.x,x.x,this.tension),vd.initCatmullRom(p.y,S.y,g.y,x.y,this.tension),_d.initCatmullRom(p.z,S.z,g.z,x.z,this.tension));return r.set(xd.calc(h),vd.calc(h),_d.calc(h)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e.closed=this.closed,e.curveType=this.curveType,e.tension=this.tension,e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new G().fromArray(o))}return this.closed=e.closed,this.curveType=e.curveType,this.tension=e.tension,this}}function qm(s,e,t,r,o){const l=(r-e)*.5,u=(o-t)*.5,f=s*s,h=s*f;return(2*t-2*r+l+u)*h+(-3*t+3*r-2*l-u)*f+l*s+t}function ly(s,e){const t=1-s;return t*t*e}function cy(s,e){return 2*(1-s)*s*e}function uy(s,e){return s*s*e}function co(s,e,t,r){return ly(s,e)+cy(s,t)+uy(s,r)}function dy(s,e){const t=1-s;return t*t*t*e}function fy(s,e){const t=1-s;return 3*t*t*s*e}function hy(s,e){return 3*(1-s)*s*s*e}function py(s,e){return s*s*s*e}function uo(s,e,t,r,o){return dy(s,e)+fy(s,t)+hy(s,r)+py(s,o)}class my extends vr{constructor(e=new rt,t=new rt,r=new rt,o=new rt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new rt){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(uo(e,o.x,l.x,u.x,f.x),uo(e,o.y,l.y,u.y,f.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class gy extends vr{constructor(e=new G,t=new G,r=new G,o=new G){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=e,this.v1=t,this.v2=r,this.v3=o}getPoint(e,t=new G){const r=t,o=this.v0,l=this.v1,u=this.v2,f=this.v3;return r.set(uo(e,o.x,l.x,u.x,f.x),uo(e,o.y,l.y,u.y,f.y),uo(e,o.z,l.z,u.z,f.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this.v3.copy(e.v3),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e.v3=this.v3.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this.v3.fromArray(e.v3),this}}class xy extends vr{constructor(e=new rt,t=new rt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=e,this.v2=t}getPoint(e,t=new rt){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new rt){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class vy extends vr{constructor(e=new G,t=new G){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=e,this.v2=t}getPoint(e,t=new G){const r=t;return e===1?r.copy(this.v2):(r.copy(this.v2).sub(this.v1),r.multiplyScalar(e).add(this.v1)),r}getPointAt(e,t){return this.getPoint(e,t)}getTangent(e,t=new G){return t.subVectors(this.v2,this.v1).normalize()}getTangentAt(e,t){return this.getTangent(e,t)}copy(e){return super.copy(e),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class _y extends vr{constructor(e=new rt,t=new rt,r=new rt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new rt){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(co(e,o.x,l.x,u.x),co(e,o.y,l.y,u.y)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class cg extends vr{constructor(e=new G,t=new G,r=new G){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=e,this.v1=t,this.v2=r}getPoint(e,t=new G){const r=t,o=this.v0,l=this.v1,u=this.v2;return r.set(co(e,o.x,l.x,u.x),co(e,o.y,l.y,u.y),co(e,o.z,l.z,u.z)),r}copy(e){return super.copy(e),this.v0.copy(e.v0),this.v1.copy(e.v1),this.v2.copy(e.v2),this}toJSON(){const e=super.toJSON();return e.v0=this.v0.toArray(),e.v1=this.v1.toArray(),e.v2=this.v2.toArray(),e}fromJSON(e){return super.fromJSON(e),this.v0.fromArray(e.v0),this.v1.fromArray(e.v1),this.v2.fromArray(e.v2),this}}class yy extends vr{constructor(e=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=e}getPoint(e,t=new rt){const r=t,o=this.points,l=(o.length-1)*e,u=Math.floor(l),f=l-u,h=o[u===0?u:u-1],p=o[u],x=o[u>o.length-2?o.length-1:u+1],S=o[u>o.length-3?o.length-1:u+2];return r.set(qm(f,h.x,p.x,x.x,S.x),qm(f,h.y,p.y,x.y,S.y)),r}copy(e){super.copy(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(o.clone())}return this}toJSON(){const e=super.toJSON();e.points=[];for(let t=0,r=this.points.length;t<r;t++){const o=this.points[t];e.points.push(o.toArray())}return e}fromJSON(e){super.fromJSON(e),this.points=[];for(let t=0,r=e.points.length;t<r;t++){const o=e.points[t];this.points.push(new rt().fromArray(o))}return this}}var Sy=Object.freeze({__proto__:null,ArcCurve:oy,CatmullRomCurve3:_f,CubicBezierCurve:my,CubicBezierCurve3:gy,EllipseCurve:lg,LineCurve:xy,LineCurve3:vy,QuadraticBezierCurve:_y,QuadraticBezierCurve3:cg,SplineCurve:yy});class _o extends Dn{constructor(e=1,t=1,r=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:o};const l=e/2,u=t/2,f=Math.floor(r),h=Math.floor(o),p=f+1,x=h+1,S=e/f,g=t/h,_=[],T=[],C=[],y=[];for(let v=0;v<x;v++){const D=v*g-u;for(let U=0;U<p;U++){const R=U*S-l;T.push(R,-D,0),C.push(0,0,1),y.push(U/f),y.push(1-v/h)}}for(let v=0;v<h;v++)for(let D=0;D<f;D++){const U=D+p*v,R=D+p*(v+1),L=D+1+p*(v+1),N=D+1+p*v;_.push(U,R,N),_.push(R,L,N)}this.setIndex(_),this.setAttribute("position",new Jt(T,3)),this.setAttribute("normal",new Jt(C,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new _o(e.width,e.height,e.widthSegments,e.heightSegments)}}class Yr extends Dn{constructor(e=1,t=32,r=16,o=0,l=Math.PI*2,u=0,f=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:o,phiLength:l,thetaStart:u,thetaLength:f},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const h=Math.min(u+f,Math.PI);let p=0;const x=[],S=new G,g=new G,_=[],T=[],C=[],y=[];for(let v=0;v<=r;v++){const D=[],U=v/r,R=u+U*f,L=e*Math.cos(R),N=Math.sqrt(e*e-L*L);let F=0;v===0&&u===0?F=.5/t:v===r&&h===Math.PI&&(F=-.5/t);for(let w=0;w<=t;w++){const P=w/t,V=o+P*l;S.x=-N*Math.cos(V),S.y=L,S.z=N*Math.sin(V),T.push(S.x,S.y,S.z),g.copy(S).normalize(),C.push(g.x,g.y,g.z),y.push(P+F,1-U),D.push(p++)}x.push(D)}for(let v=0;v<r;v++)for(let D=0;D<t;D++){const U=x[v][D+1],R=x[v][D],L=x[v+1][D],N=x[v+1][D+1];(v!==0||u>0)&&_.push(U,R,N),(v!==r-1||h<Math.PI)&&_.push(R,L,N)}this.setIndex(_),this.setAttribute("position",new Jt(T,3)),this.setAttribute("normal",new Jt(C,3)),this.setAttribute("uv",new Jt(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Yr(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class kf extends Dn{constructor(e=1,t=.4,r=12,o=48,l=Math.PI*2,u=0,f=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:o,arc:l,thetaStart:u,thetaLength:f},r=Math.floor(r),o=Math.floor(o);const h=[],p=[],x=[],S=[],g=new G,_=new G,T=new G;for(let C=0;C<=r;C++){const y=u+C/r*f;for(let v=0;v<=o;v++){const D=v/o*l;_.x=(e+t*Math.cos(y))*Math.cos(D),_.y=(e+t*Math.cos(y))*Math.sin(D),_.z=t*Math.sin(y),p.push(_.x,_.y,_.z),g.x=e*Math.cos(D),g.y=e*Math.sin(D),T.subVectors(_,g).normalize(),x.push(T.x,T.y,T.z),S.push(v/o),S.push(C/r)}}for(let C=1;C<=r;C++)for(let y=1;y<=o;y++){const v=(o+1)*C+y-1,D=(o+1)*(C-1)+y-1,U=(o+1)*(C-1)+y,R=(o+1)*C+y;h.push(v,D,R),h.push(D,U,R)}this.setIndex(h),this.setAttribute("position",new Jt(p,3)),this.setAttribute("normal",new Jt(x,3)),this.setAttribute("uv",new Jt(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new kf(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc)}}class ic extends Dn{constructor(e=new cg(new G(-1,-1,0),new G(-1,1,0),new G(1,1,0)),t=64,r=1,o=8,l=!1){super(),this.type="TubeGeometry",this.parameters={path:e,tubularSegments:t,radius:r,radialSegments:o,closed:l};const u=e.computeFrenetFrames(t,l);this.tangents=u.tangents,this.normals=u.normals,this.binormals=u.binormals;const f=new G,h=new G,p=new rt;let x=new G;const S=[],g=[],_=[],T=[];C(),this.setIndex(T),this.setAttribute("position",new Jt(S,3)),this.setAttribute("normal",new Jt(g,3)),this.setAttribute("uv",new Jt(_,2));function C(){for(let U=0;U<t;U++)y(U);y(l===!1?t:0),D(),v()}function y(U){x=e.getPointAt(U/t,x);const R=u.normals[U],L=u.binormals[U];for(let N=0;N<=o;N++){const F=N/o*Math.PI*2,w=Math.sin(F),P=-Math.cos(F);h.x=P*R.x+w*L.x,h.y=P*R.y+w*L.y,h.z=P*R.z+w*L.z,h.normalize(),g.push(h.x,h.y,h.z),f.x=x.x+r*h.x,f.y=x.y+r*h.y,f.z=x.z+r*h.z,S.push(f.x,f.y,f.z)}}function v(){for(let U=1;U<=t;U++)for(let R=1;R<=o;R++){const L=(o+1)*(U-1)+(R-1),N=(o+1)*U+(R-1),F=(o+1)*U+R,w=(o+1)*(U-1)+R;T.push(L,N,w),T.push(N,F,w)}}function D(){for(let U=0;U<=t;U++)for(let R=0;R<=o;R++)p.x=U/t,p.y=R/o,_.push(p.x,p.y)}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}toJSON(){const e=super.toJSON();return e.path=this.parameters.path.toJSON(),e}static fromJSON(e){return new ic(new Sy[e.path.type]().fromJSON(e.path),e.tubularSegments,e.radius,e.radialSegments,e.closed)}}function ga(s){const e={};for(const t in s){e[t]={};for(const r in s[t]){const o=s[t][r];if($m(o))o.isRenderTargetTexture?(ct("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=o.clone();else if(Array.isArray(o))if($m(o[0])){const l=[];for(let u=0,f=o.length;u<f;u++)l[u]=o[u].clone();e[t][r]=l}else e[t][r]=o.slice();else e[t][r]=o}}return e}function kn(s){const e={};for(let t=0;t<s.length;t++){const r=ga(s[t]);for(const o in r)e[o]=r[o]}return e}function $m(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function My(s){const e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function ug(s){const e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Pt.workingColorSpace}const Ey={clone:ga,merge:kn};var Ty=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,wy=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends va{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ty,this.fragmentShader=wy,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ga(e.uniforms),this.uniformsGroups=My(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const o in this.extensions)this.extensions[o]===!0&&(r[o]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const o=e.uniforms[r];switch(this.uniforms[r]={},o.type){case"t":this.uniforms[r].value=t[o.value]||null;break;case"c":this.uniforms[r].value=new yt().setHex(o.value);break;case"v2":this.uniforms[r].value=new rt().fromArray(o.value);break;case"v3":this.uniforms[r].value=new G().fromArray(o.value);break;case"v4":this.uniforms[r].value=new sn().fromArray(o.value);break;case"m3":this.uniforms[r].value=new gt().fromArray(o.value);break;case"m4":this.uniforms[r].value=new tn().fromArray(o.value);break;default:this.uniforms[r].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class by extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class In extends va{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=xf,this.normalScale=new rt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Zr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Ay extends In{constructor(e){super(),this.isMeshPhysicalMaterial=!0,this.defines={STANDARD:"",PHYSICAL:""},this.type="MeshPhysicalMaterial",this.anisotropyRotation=0,this.anisotropyMap=null,this.clearcoatMap=null,this.clearcoatRoughness=0,this.clearcoatRoughnessMap=null,this.clearcoatNormalScale=new rt(1,1),this.clearcoatNormalMap=null,this.ior=1.5,Object.defineProperty(this,"reflectivity",{get:function(){return At(2.5*(this.ior-1)/(this.ior+1),0,1)},set:function(t){this.ior=(1+.4*t)/(1-.4*t)}}),this.iridescenceMap=null,this.iridescenceIOR=1.3,this.iridescenceThicknessRange=[100,400],this.iridescenceThicknessMap=null,this.sheenColor=new yt(0),this.sheenColorMap=null,this.sheenRoughness=1,this.sheenRoughnessMap=null,this.transmissionMap=null,this.thickness=0,this.thicknessMap=null,this.attenuationDistance=1/0,this.attenuationColor=new yt(1,1,1),this.specularIntensity=1,this.specularIntensityMap=null,this.specularColor=new yt(1,1,1),this.specularColorMap=null,this._anisotropy=0,this._clearcoat=0,this._dispersion=0,this._iridescence=0,this._sheen=0,this._transmission=0,this.setValues(e)}get anisotropy(){return this._anisotropy}set anisotropy(e){this._anisotropy>0!=e>0&&this.version++,this._anisotropy=e}get clearcoat(){return this._clearcoat}set clearcoat(e){this._clearcoat>0!=e>0&&this.version++,this._clearcoat=e}get iridescence(){return this._iridescence}set iridescence(e){this._iridescence>0!=e>0&&this.version++,this._iridescence=e}get dispersion(){return this._dispersion}set dispersion(e){this._dispersion>0!=e>0&&this.version++,this._dispersion=e}get sheen(){return this._sheen}set sheen(e){this._sheen>0!=e>0&&this.version++,this._sheen=e}get transmission(){return this._transmission}set transmission(e){this._transmission>0!=e>0&&this.version++,this._transmission=e}copy(e){return super.copy(e),this.defines={STANDARD:"",PHYSICAL:""},this.anisotropy=e.anisotropy,this.anisotropyRotation=e.anisotropyRotation,this.anisotropyMap=e.anisotropyMap,this.clearcoat=e.clearcoat,this.clearcoatMap=e.clearcoatMap,this.clearcoatRoughness=e.clearcoatRoughness,this.clearcoatRoughnessMap=e.clearcoatRoughnessMap,this.clearcoatNormalMap=e.clearcoatNormalMap,this.clearcoatNormalScale.copy(e.clearcoatNormalScale),this.dispersion=e.dispersion,this.ior=e.ior,this.iridescence=e.iridescence,this.iridescenceMap=e.iridescenceMap,this.iridescenceIOR=e.iridescenceIOR,this.iridescenceThicknessRange=[...e.iridescenceThicknessRange],this.iridescenceThicknessMap=e.iridescenceThicknessMap,this.sheen=e.sheen,this.sheenColor.copy(e.sheenColor),this.sheenColorMap=e.sheenColorMap,this.sheenRoughness=e.sheenRoughness,this.sheenRoughnessMap=e.sheenRoughnessMap,this.transmission=e.transmission,this.transmissionMap=e.transmissionMap,this.thickness=e.thickness,this.thicknessMap=e.thicknessMap,this.attenuationDistance=e.attenuationDistance,this.attenuationColor.copy(e.attenuationColor),this.specularIntensity=e.specularIntensity,this.specularIntensityMap=e.specularIntensityMap,this.specularColor.copy(e.specularColor),this.specularColorMap=e.specularColorMap,this}}class Ry extends va{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=E_,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Cy extends va{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class Bf extends wn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}dispose(){this.dispatchEvent({type:"dispose"})}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const yd=new tn,Km=new G,Zm=new G;class dg{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new rt(512,512),this.mapType=ai,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uf,this._frameExtents=new rt(1,1),this._viewportCount=1,this._viewports=[new sn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,r=this.matrix;Km.setFromMatrixPosition(e.matrixWorld),t.position.copy(Km),Zm.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zm),t.updateMatrixWorld(),yd.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(yd,t.coordinateSystem,t.reversedDepth),t.coordinateSystem===po||t.reversedDepth?r.set(.5,0,0,.5,0,.5,0,.5,0,0,1,0,0,0,0,1):r.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),r.multiply(yd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.intensity!==1&&(e.intensity=this.intensity),this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const zl=new G,Vl=new xa,Fi=new G;class fg extends wn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Vi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(zl,Vl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Vl,Fi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(zl,Vl,Fi),Fi.x===1&&Fi.y===1&&Fi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(zl,Vl,Fi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const jr=new G,Jm=new rt,Qm=new rt;class si extends fg{constructor(e=50,t=1,r=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=vf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ju*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return vf*2*Math.atan(Math.tan(ju*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){jr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(jr.x,jr.y).multiplyScalar(-e/jr.z),jr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(jr.x,jr.y).multiplyScalar(-e/jr.z)}getViewSize(e,t){return this.getViewBounds(e,Jm,Qm),t.subVectors(Qm,Jm)}setViewOffset(e,t,r,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(ju*.5*this.fov)/this.zoom,r=2*t,o=this.aspect*r,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const h=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/h,t-=u.offsetY*r/p,o*=u.width/h,r*=u.height/p}const f=this.filmOffset;f!==0&&(l+=e*f/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ny extends dg{constructor(){super(new si(90,1,.5,500)),this.isPointLightShadow=!0}}class e0 extends Bf{constructor(e,t,r=0,o=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=o,this.shadow=new Ny}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class zf extends fg{constructor(e=-1,t=1,r=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=r-e,u=r+e,f=o+t,h=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,x=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,f-=x*this.view.offsetY,h=f-x*this.view.height}this.projectionMatrix.makeOrthographic(l,u,f,h,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class Py extends dg{constructor(){super(new zf(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Iy extends Bf{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(wn.DEFAULT_UP),this.updateMatrix(),this.target=new wn,this.shadow=new Py}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}class Ly extends Bf{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const oa=-90,la=1;class Dy extends wn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new si(oa,la,e,t);o.layers=this.layers,this.add(o);const l=new si(oa,la,e,t);l.layers=this.layers,this.add(l);const u=new si(oa,la,e,t);u.layers=this.layers,this.add(u);const f=new si(oa,la,e,t);f.layers=this.layers,this.add(f);const h=new si(oa,la,e,t);h.layers=this.layers,this.add(h);const p=new si(oa,la,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,o,l,u,f,h]=t;for(const p of t)this.remove(p);if(e===Vi)r.up.set(0,1,0),r.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),f.up.set(0,1,0),f.lookAt(0,0,1),h.up.set(0,1,0),h.lookAt(0,0,-1);else if(e===po)r.up.set(0,-1,0),r.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),f.up.set(0,-1,0),f.lookAt(0,0,1),h.up.set(0,-1,0),h.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,f,h,p,x]=this.children,S=e.getRenderTarget(),g=e.getActiveCubeFace(),_=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const C=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(r,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(r,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(r,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),r.texture.generateMipmaps=C,e.setRenderTarget(r,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,x),e.setRenderTarget(S,g,_),e.xr.enabled=T,r.texture.needsPMREMUpdate=!0}}class Uy extends si{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Xf=class Xf{constructor(e,t,r,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=r,l[3]=o,this}};Xf.prototype.isMatrix2=!0;let t0=Xf;class Oy extends sy{constructor(e=10,t=10,r=4473924,o=8947848){r=new yt(r),o=new yt(o);const l=t/2,u=e/t,f=e/2,h=[],p=[];for(let g=0,_=0,T=-f;g<=t;g++,T+=u){h.push(-f,0,T,f,0,T),h.push(T,0,-f,T,0,f);const C=g===l?r:o;C.toArray(p,_),_+=3,C.toArray(p,_),_+=3,C.toArray(p,_),_+=3,C.toArray(p,_),_+=3}const x=new Dn;x.setAttribute("position",new Jt(h,3)),x.setAttribute("color",new Jt(p,3));const S=new Of({vertexColors:!0,toneMapped:!1});super(x,S),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}function n0(s,e,t,r){const o=Fy(r);switch(t){case $0:return s*e;case Z0:return s*e/o.components*o.byteLength;case Cf:return s*e/o.components*o.byteLength;case ws:return s*e*2/o.components*o.byteLength;case Nf:return s*e*2/o.components*o.byteLength;case K0:return s*e*3/o.components*o.byteLength;case Ci:return s*e*4/o.components*o.byteLength;case Pf:return s*e*4/o.components*o.byteLength;case Xl:case jl:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Yl:case ql:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Vd:case Gd:return Math.max(s,16)*Math.max(e,8)/4;case zd:case Hd:return Math.max(s,8)*Math.max(e,8)/2;case Wd:case Xd:case Yd:case qd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case jd:case Kl:case $d:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Kd:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Zd:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Jd:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case Qd:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case ef:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case tf:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case nf:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case rf:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case sf:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case af:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case of:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case lf:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case cf:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case uf:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case df:case ff:case hf:return Math.ceil(s/4)*Math.ceil(e/4)*16;case pf:case mf:return Math.ceil(s/4)*Math.ceil(e/4)*8;case Zl:case gf:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function Fy(s){switch(s){case ai:case X0:return{byteLength:1,components:1};case fo:case j0:case gr:return{byteLength:2,components:1};case Af:case Rf:return{byteLength:2,components:4};case Xi:case bf:case zi:return{byteLength:4,components:1};case Y0:case q0:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:wf}}));typeof window<"u"&&(window.__THREE__?ct("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=wf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function hg(){let s=null,e=!1,t=null,r=null;function o(l,u){t(l,u),r=s.requestAnimationFrame(o)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(o),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){s=l}}}function ky(s){const e=new WeakMap;function t(f,h){const p=f.array,x=f.usage,S=p.byteLength,g=s.createBuffer();s.bindBuffer(h,g),s.bufferData(h,p,x),f.onUploadCallback();let _;if(p instanceof Float32Array)_=s.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)_=s.HALF_FLOAT;else if(p instanceof Uint16Array)f.isFloat16BufferAttribute?_=s.HALF_FLOAT:_=s.UNSIGNED_SHORT;else if(p instanceof Int16Array)_=s.SHORT;else if(p instanceof Uint32Array)_=s.UNSIGNED_INT;else if(p instanceof Int32Array)_=s.INT;else if(p instanceof Int8Array)_=s.BYTE;else if(p instanceof Uint8Array)_=s.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)_=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:g,type:_,bytesPerElement:p.BYTES_PER_ELEMENT,version:f.version,size:S}}function r(f,h,p){const x=h.array,S=h.updateRanges;if(s.bindBuffer(p,f),S.length===0)s.bufferSubData(p,0,x);else{S.sort((_,T)=>_.start-T.start);let g=0;for(let _=1;_<S.length;_++){const T=S[g],C=S[_];C.start<=T.start+T.count+1?T.count=Math.max(T.count,C.start+C.count-T.start):(++g,S[g]=C)}S.length=g+1;for(let _=0,T=S.length;_<T;_++){const C=S[_];s.bufferSubData(p,C.start*x.BYTES_PER_ELEMENT,x,C.start,C.count)}h.clearUpdateRanges()}h.onUploadCallback()}function o(f){return f.isInterleavedBufferAttribute&&(f=f.data),e.get(f)}function l(f){f.isInterleavedBufferAttribute&&(f=f.data);const h=e.get(f);h&&(s.deleteBuffer(h.buffer),e.delete(f))}function u(f,h){if(f.isInterleavedBufferAttribute&&(f=f.data),f.isGLBufferAttribute){const x=e.get(f);(!x||x.version<f.version)&&e.set(f,{buffer:f.buffer,type:f.type,bytesPerElement:f.elementSize,version:f.version});return}const p=e.get(f);if(p===void 0)e.set(f,t(f,h));else if(p.version<f.version){if(p.size!==f.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(p.buffer,f,h),p.version=f.version}}return{get:o,remove:l,update:u}}var By=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,zy=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,Vy=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Hy=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Gy=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Wy=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Xy=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,jy=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Yy=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,qy=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,$y=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,Ky=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Zy=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Jy=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Qy=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,eS=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,tS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,nS=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,iS=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,rS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,sS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,aS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,oS=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,lS=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,cS=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,uS=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,dS=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,fS=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,hS=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,pS=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,mS="gl_FragColor = linearToOutputTexel( gl_FragColor );",gS=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,xS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,vS=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,_S=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,yS=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,SS=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,MS=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ES=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,TS=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,wS=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bS=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,AS=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,RS=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,CS=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,NS=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,PS=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,IS=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LS=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DS=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,US=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,OS=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,FS=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,kS=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,BS=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,zS=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,VS=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,HS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,GS=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,WS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,XS=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,jS=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,YS=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,qS=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,$S=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KS=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,ZS=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,JS=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,QS=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,eM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,tM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,nM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,iM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,rM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,sM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,aM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,oM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,lM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,cM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,uM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,dM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,fM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,hM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,pM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,mM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,gM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,vM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,_M=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,yM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,SM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,MM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,EM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,TM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,wM=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,bM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,AM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,RM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,CM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,NM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,PM=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,IM=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,LM=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,DM=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,UM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,OM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,FM=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,kM=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const BM=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,zM=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,VM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,HM=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,GM=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WM=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,XM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,jM=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,YM=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,qM=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,$M=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,KM=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZM=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,JM=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,QM=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,eE=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tE=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nE=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iE=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,rE=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sE=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,aE=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,oE=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,lE=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cE=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,uE=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,dE=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,fE=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hE=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,pE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,mE=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,gE=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,xE=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,vE=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,_t={alphahash_fragment:By,alphahash_pars_fragment:zy,alphamap_fragment:Vy,alphamap_pars_fragment:Hy,alphatest_fragment:Gy,alphatest_pars_fragment:Wy,aomap_fragment:Xy,aomap_pars_fragment:jy,batching_pars_vertex:Yy,batching_vertex:qy,begin_vertex:$y,beginnormal_vertex:Ky,bsdfs:Zy,iridescence_fragment:Jy,bumpmap_pars_fragment:Qy,clipping_planes_fragment:eS,clipping_planes_pars_fragment:tS,clipping_planes_pars_vertex:nS,clipping_planes_vertex:iS,color_fragment:rS,color_pars_fragment:sS,color_pars_vertex:aS,color_vertex:oS,common:lS,cube_uv_reflection_fragment:cS,defaultnormal_vertex:uS,displacementmap_pars_vertex:dS,displacementmap_vertex:fS,emissivemap_fragment:hS,emissivemap_pars_fragment:pS,colorspace_fragment:mS,colorspace_pars_fragment:gS,envmap_fragment:xS,envmap_common_pars_fragment:vS,envmap_pars_fragment:_S,envmap_pars_vertex:yS,envmap_physical_pars_fragment:PS,envmap_vertex:SS,fog_vertex:MS,fog_pars_vertex:ES,fog_fragment:TS,fog_pars_fragment:wS,gradientmap_pars_fragment:bS,lightmap_pars_fragment:AS,lights_lambert_fragment:RS,lights_lambert_pars_fragment:CS,lights_pars_begin:NS,lights_toon_fragment:IS,lights_toon_pars_fragment:LS,lights_phong_fragment:DS,lights_phong_pars_fragment:US,lights_physical_fragment:OS,lights_physical_pars_fragment:FS,lights_fragment_begin:kS,lights_fragment_maps:BS,lights_fragment_end:zS,lightprobes_pars_fragment:VS,logdepthbuf_fragment:HS,logdepthbuf_pars_fragment:GS,logdepthbuf_pars_vertex:WS,logdepthbuf_vertex:XS,map_fragment:jS,map_pars_fragment:YS,map_particle_fragment:qS,map_particle_pars_fragment:$S,metalnessmap_fragment:KS,metalnessmap_pars_fragment:ZS,morphinstance_vertex:JS,morphcolor_vertex:QS,morphnormal_vertex:eM,morphtarget_pars_vertex:tM,morphtarget_vertex:nM,normal_fragment_begin:iM,normal_fragment_maps:rM,normal_pars_fragment:sM,normal_pars_vertex:aM,normal_vertex:oM,normalmap_pars_fragment:lM,clearcoat_normal_fragment_begin:cM,clearcoat_normal_fragment_maps:uM,clearcoat_pars_fragment:dM,iridescence_pars_fragment:fM,opaque_fragment:hM,packing:pM,premultiplied_alpha_fragment:mM,project_vertex:gM,dithering_fragment:xM,dithering_pars_fragment:vM,roughnessmap_fragment:_M,roughnessmap_pars_fragment:yM,shadowmap_pars_fragment:SM,shadowmap_pars_vertex:MM,shadowmap_vertex:EM,shadowmask_pars_fragment:TM,skinbase_vertex:wM,skinning_pars_vertex:bM,skinning_vertex:AM,skinnormal_vertex:RM,specularmap_fragment:CM,specularmap_pars_fragment:NM,tonemapping_fragment:PM,tonemapping_pars_fragment:IM,transmission_fragment:LM,transmission_pars_fragment:DM,uv_pars_fragment:UM,uv_pars_vertex:OM,uv_vertex:FM,worldpos_vertex:kM,background_vert:BM,background_frag:zM,backgroundCube_vert:VM,backgroundCube_frag:HM,cube_vert:GM,cube_frag:WM,depth_vert:XM,depth_frag:jM,distance_vert:YM,distance_frag:qM,equirect_vert:$M,equirect_frag:KM,linedashed_vert:ZM,linedashed_frag:JM,meshbasic_vert:QM,meshbasic_frag:eE,meshlambert_vert:tE,meshlambert_frag:nE,meshmatcap_vert:iE,meshmatcap_frag:rE,meshnormal_vert:sE,meshnormal_frag:aE,meshphong_vert:oE,meshphong_frag:lE,meshphysical_vert:cE,meshphysical_frag:uE,meshtoon_vert:dE,meshtoon_frag:fE,points_vert:hE,points_frag:pE,shadow_vert:mE,shadow_frag:gE,sprite_vert:xE,sprite_frag:vE},Ue={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new rt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new rt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Bi={basic:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:kn([Ue.common,Ue.specularmap,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:kn([Ue.common,Ue.envmap,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.roughnessmap,Ue.metalnessmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:kn([Ue.common,Ue.aomap,Ue.lightmap,Ue.emissivemap,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.gradientmap,Ue.fog,Ue.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,Ue.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:kn([Ue.points,Ue.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:kn([Ue.common,Ue.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:kn([Ue.common,Ue.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:kn([Ue.common,Ue.bumpmap,Ue.normalmap,Ue.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:kn([Ue.sprite,Ue.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:kn([Ue.common,Ue.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:kn([Ue.lights,Ue.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Bi.physical={uniforms:kn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new rt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new rt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new rt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const Hl={r:0,b:0,g:0},_E=new tn,pg=new gt;pg.set(-1,0,0,0,1,0,0,0,1);function yE(s,e,t,r,o,l){const u=new yt(0);let f=o===!0?0:1,h,p,x=null,S=0,g=null;function _(D){let U=D.isScene===!0?D.background:null;if(U&&U.isTexture){const R=D.backgroundBlurriness>0;U=e.get(U,R)}return U}function T(D){let U=!1;const R=_(D);R===null?y(u,f):R&&R.isColor&&(y(R,1),U=!0);const L=s.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(s.autoClear||U)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function C(D,U){const R=_(U);R&&(R.isCubeTexture||R.mapping===ac)?(p===void 0&&(p=new it(new Gt(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:ga(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Jn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,N,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=U.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(_E.makeRotationFromEuler(U.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(pg),p.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Ht,(x!==R||S!==R.version||g!==s.toneMapping)&&(p.material.needsUpdate=!0,x=R,S=R.version,g=s.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(h===void 0&&(h=new it(new _o(2,2),new ji({name:"BackgroundMaterial",uniforms:ga(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Kr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),Object.defineProperty(h.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(h)),h.material.uniforms.t2D.value=R,h.material.uniforms.backgroundIntensity.value=U.backgroundIntensity,h.material.toneMapped=Pt.getTransfer(R.colorSpace)!==Ht,R.matrixAutoUpdate===!0&&R.updateMatrix(),h.material.uniforms.uvTransform.value.copy(R.matrix),(x!==R||S!==R.version||g!==s.toneMapping)&&(h.material.needsUpdate=!0,x=R,S=R.version,g=s.toneMapping),h.layers.enableAll(),D.unshift(h,h.geometry,h.material,0,0,null))}function y(D,U){D.getRGB(Hl,ug(s)),t.buffers.color.setClear(Hl.r,Hl.g,Hl.b,U,l)}function v(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,U=1){u.set(D),f=U,y(u,f)},getClearAlpha:function(){return f},setClearAlpha:function(D){f=D,y(u,f)},render:T,addToRenderList:C,dispose:v}}function SE(s,e){const t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},o=g(null);let l=o,u=!1;function f(B,j,re,fe,$){let se=!1;const K=S(B,fe,re,j);l!==K&&(l=K,p(l.object)),se=_(B,fe,re,$),se&&T(B,fe,re,$),$!==null&&e.update($,s.ELEMENT_ARRAY_BUFFER),(se||u)&&(u=!1,R(B,j,re,fe),$!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get($).buffer))}function h(){return s.createVertexArray()}function p(B){return s.bindVertexArray(B)}function x(B){return s.deleteVertexArray(B)}function S(B,j,re,fe){const $=fe.wireframe===!0;let se=r[j.id];se===void 0&&(se={},r[j.id]=se);const K=B.isInstancedMesh===!0?B.id:0;let Y=se[K];Y===void 0&&(Y={},se[K]=Y);let ie=Y[re.id];ie===void 0&&(ie={},Y[re.id]=ie);let ue=ie[$];return ue===void 0&&(ue=g(h()),ie[$]=ue),ue}function g(B){const j=[],re=[],fe=[];for(let $=0;$<t;$++)j[$]=0,re[$]=0,fe[$]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:re,attributeDivisors:fe,object:B,attributes:{},index:null}}function _(B,j,re,fe){const $=l.attributes,se=j.attributes;let K=0;const Y=re.getAttributes();for(const ie in Y)if(Y[ie].location>=0){const k=$[ie];let J=se[ie];if(J===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(J=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(J=B.instanceColor)),k===void 0||k.attribute!==J||J&&k.data!==J.data)return!0;K++}return l.attributesNum!==K||l.index!==fe}function T(B,j,re,fe){const $={},se=j.attributes;let K=0;const Y=re.getAttributes();for(const ie in Y)if(Y[ie].location>=0){let k=se[ie];k===void 0&&(ie==="instanceMatrix"&&B.instanceMatrix&&(k=B.instanceMatrix),ie==="instanceColor"&&B.instanceColor&&(k=B.instanceColor));const J={};J.attribute=k,k&&k.data&&(J.data=k.data),$[ie]=J,K++}l.attributes=$,l.attributesNum=K,l.index=fe}function C(){const B=l.newAttributes;for(let j=0,re=B.length;j<re;j++)B[j]=0}function y(B){v(B,0)}function v(B,j){const re=l.newAttributes,fe=l.enabledAttributes,$=l.attributeDivisors;re[B]=1,fe[B]===0&&(s.enableVertexAttribArray(B),fe[B]=1),$[B]!==j&&(s.vertexAttribDivisor(B,j),$[B]=j)}function D(){const B=l.newAttributes,j=l.enabledAttributes;for(let re=0,fe=j.length;re<fe;re++)j[re]!==B[re]&&(s.disableVertexAttribArray(re),j[re]=0)}function U(B,j,re,fe,$,se,K){K===!0?s.vertexAttribIPointer(B,j,re,$,se):s.vertexAttribPointer(B,j,re,fe,$,se)}function R(B,j,re,fe){C();const $=fe.attributes,se=re.getAttributes(),K=j.defaultAttributeValues;for(const Y in se){const ie=se[Y];if(ie.location>=0){let ue=$[Y];if(ue===void 0&&(Y==="instanceMatrix"&&B.instanceMatrix&&(ue=B.instanceMatrix),Y==="instanceColor"&&B.instanceColor&&(ue=B.instanceColor)),ue!==void 0){const k=ue.normalized,J=ue.itemSize,Le=e.get(ue);if(Le===void 0)continue;const Xe=Le.buffer,ze=Le.type,le=Le.bytesPerElement,pe=ze===s.INT||ze===s.UNSIGNED_INT||ue.gpuType===bf;if(ue.isInterleavedBufferAttribute){const oe=ue.data,De=oe.stride,Oe=ue.offset;if(oe.isInstancedInterleavedBuffer){for(let je=0;je<ie.locationSize;je++)v(ie.location+je,oe.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let je=0;je<ie.locationSize;je++)y(ie.location+je);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let je=0;je<ie.locationSize;je++)U(ie.location+je,J/ie.locationSize,ze,k,De*le,(Oe+J/ie.locationSize*je)*le,pe)}else{if(ue.isInstancedBufferAttribute){for(let oe=0;oe<ie.locationSize;oe++)v(ie.location+oe,ue.meshPerAttribute);B.isInstancedMesh!==!0&&fe._maxInstanceCount===void 0&&(fe._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let oe=0;oe<ie.locationSize;oe++)y(ie.location+oe);s.bindBuffer(s.ARRAY_BUFFER,Xe);for(let oe=0;oe<ie.locationSize;oe++)U(ie.location+oe,J/ie.locationSize,ze,k,J*le,J/ie.locationSize*oe*le,pe)}}else if(K!==void 0){const k=K[Y];if(k!==void 0)switch(k.length){case 2:s.vertexAttrib2fv(ie.location,k);break;case 3:s.vertexAttrib3fv(ie.location,k);break;case 4:s.vertexAttrib4fv(ie.location,k);break;default:s.vertexAttrib1fv(ie.location,k)}}}}D()}function L(){P();for(const B in r){const j=r[B];for(const re in j){const fe=j[re];for(const $ in fe){const se=fe[$];for(const K in se)x(se[K].object),delete se[K];delete fe[$]}}delete r[B]}}function N(B){if(r[B.id]===void 0)return;const j=r[B.id];for(const re in j){const fe=j[re];for(const $ in fe){const se=fe[$];for(const K in se)x(se[K].object),delete se[K];delete fe[$]}}delete r[B.id]}function F(B){for(const j in r){const re=r[j];for(const fe in re){const $=re[fe];if($[B.id]===void 0)continue;const se=$[B.id];for(const K in se)x(se[K].object),delete se[K];delete $[B.id]}}}function w(B){for(const j in r){const re=r[j],fe=B.isInstancedMesh===!0?B.id:0,$=re[fe];if($!==void 0){for(const se in $){const K=$[se];for(const Y in K)x(K[Y].object),delete K[Y];delete $[se]}delete re[fe],Object.keys(re).length===0&&delete r[j]}}}function P(){V(),u=!0,l!==o&&(l=o,p(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:f,reset:P,resetDefaultState:V,dispose:L,releaseStatesOfGeometry:N,releaseStatesOfObject:w,releaseStatesOfProgram:F,initAttributes:C,enableAttribute:y,disableUnusedAttributes:D}}function ME(s,e,t){let r;function o(h){r=h}function l(h,p){s.drawArrays(r,h,p),t.update(p,r,1)}function u(h,p,x){x!==0&&(s.drawArraysInstanced(r,h,p,x),t.update(p,r,x))}function f(h,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,h,0,p,0,x);let g=0;for(let _=0;_<x;_++)g+=p[_];t.update(g,r,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=f}function EE(s,e,t,r){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");o=s.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(F){return!(F!==Ci&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function f(F){const w=F===gr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==ai&&r.convert(F)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE)&&F!==zi&&!w)}function h(F){if(F==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const x=h(p);x!==p&&(ct("WebGLRenderer:",p,"not supported, using",x,"instead."),p=x);const S=t.logarithmicDepthBuffer===!0,g=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&g===!1&&ct("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const _=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),T=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),C=s.getParameter(s.MAX_TEXTURE_SIZE),y=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),v=s.getParameter(s.MAX_VERTEX_ATTRIBS),D=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),U=s.getParameter(s.MAX_VARYING_VECTORS),R=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),L=s.getParameter(s.MAX_SAMPLES),N=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:h,textureFormatReadable:u,textureTypeReadable:f,precision:p,logarithmicDepthBuffer:S,reversedDepthBuffer:g,maxTextures:_,maxVertexTextures:T,maxTextureSize:C,maxCubemapSize:y,maxAttributes:v,maxVertexUniforms:D,maxVaryings:U,maxFragmentUniforms:R,maxSamples:L,samples:N}}function TE(s){const e=this;let t=null,r=0,o=!1,l=!1;const u=new xs,f=new gt,h={value:null,needsUpdate:!1};this.uniform=h,this.numPlanes=0,this.numIntersection=0,this.init=function(S,g){const _=S.length!==0||g||r!==0||o;return o=g,r=S.length,_},this.beginShadows=function(){l=!0,x(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(S,g){t=x(S,g,0)},this.setState=function(S,g,_){const T=S.clippingPlanes,C=S.clipIntersection,y=S.clipShadows,v=s.get(S);if(!o||T===null||T.length===0||l&&!y)l?x(null):p();else{const D=l?0:r,U=D*4;let R=v.clippingState||null;h.value=R,R=x(T,g,U,_);for(let L=0;L!==U;++L)R[L]=t[L];v.clippingState=R,this.numIntersection=C?this.numPlanes:0,this.numPlanes+=D}};function p(){h.value!==t&&(h.value=t,h.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function x(S,g,_,T){const C=S!==null?S.length:0;let y=null;if(C!==0){if(y=h.value,T!==!0||y===null){const v=_+C*4,D=g.matrixWorldInverse;f.getNormalMatrix(D),(y===null||y.length<v)&&(y=new Float32Array(v));for(let U=0,R=_;U!==C;++U,R+=4)u.copy(S[U]).applyMatrix4(D,f),u.normal.toArray(y,R),y[R+3]=u.constant}h.value=y,h.needsUpdate=!0}return e.numPlanes=C,e.numIntersection=0,y}}const $r=4,i0=[.125,.215,.35,.446,.526,.582],ys=20,wE=256,so=new zf,r0=new yt;let Sd=null,Md=0,Ed=0,Td=!1;const bE=new G;class s0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,o=100,l={}){const{size:u=256,position:f=bE}=l;Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const h=this._allocateTargets();return h.depthBuffer=!0,this._sceneToCubeUV(e,r,o,h,f),t>0&&this._blur(h,0,0,t),this._applyPMREM(h),this._cleanup(h),h}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=l0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=o0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Sd,Md,Ed),this._renderer.xr.enabled=Td,e.scissorTest=!1,ca(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ts||e.mapping===pa?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Sd=this._renderer.getRenderTarget(),Md=this._renderer.getActiveCubeFace(),Ed=this._renderer.getActiveMipmapLevel(),Td=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Ln,minFilter:Ln,generateMipmaps:!1,type:gr,format:Ci,colorSpace:Jl,depthBuffer:!1},o=a0(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=a0(e,t,r);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=AE(l)),this._blurMaterial=CE(l,e,t),this._ggxMaterial=RE(l,e,t)}return o}_compileMaterial(e){const t=new it(new Dn,e);this._renderer.compile(t,so)}_sceneToCubeUV(e,t,r,o,l){const h=new si(90,1,t,r),p=[1,-1,1,1,1,1],x=[1,1,1,-1,-1,-1],S=this._renderer,g=S.autoClear,_=S.toneMapping;S.getClearColor(r0),S.toneMapping=Hi,S.autoClear=!1,S.state.buffers.depth.getReversed()&&(S.setRenderTarget(o),S.clearDepth(),S.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new it(new Gt,new _s({name:"PMREM.Background",side:Jn,depthWrite:!1,depthTest:!1})));const C=this._backgroundBox,y=C.material;let v=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,v=!0):(y.color.copy(r0),v=!0);for(let U=0;U<6;U++){const R=U%3;R===0?(h.up.set(0,p[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x+x[U],l.y,l.z)):R===1?(h.up.set(0,0,p[U]),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y+x[U],l.z)):(h.up.set(0,p[U],0),h.position.set(l.x,l.y,l.z),h.lookAt(l.x,l.y,l.z+x[U]));const L=this._cubeSize;ca(o,R*L,U>2?L:0,L,L),S.setRenderTarget(o),v&&S.render(C,h),S.render(e,h)}S.toneMapping=_,S.autoClear=g,e.background=D}_textureToCubeUV(e,t){const r=this._renderer,o=e.mapping===Ts||e.mapping===pa;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=l0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=o0());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const f=l.uniforms;f.envMap.value=e;const h=this._cubeSize;ca(t,0,0,3*h,2*h),r.setRenderTarget(t),r.render(u,so)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=r}_applyGGXFilter(e,t,r){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,f=this._lodMeshes[r];f.material=u;const h=u.uniforms,p=r/(this._lodMeshes.length-1),x=t/(this._lodMeshes.length-1),S=Math.sqrt(p*p-x*x),g=0+p*1.25,_=S*g,{_lodMax:T}=this,C=this._sizeLods[r],y=3*C*(r>T-$r?r-T+$r:0),v=4*(this._cubeSize-C);h.envMap.value=e.texture,h.roughness.value=_,h.mipInt.value=T-t,ca(l,y,v,3*C,2*C),o.setRenderTarget(l),o.render(f,so),h.envMap.value=l.texture,h.roughness.value=0,h.mipInt.value=T-r,ca(e,y,v,3*C,2*C),o.setRenderTarget(e),o.render(f,so)}_blur(e,t,r,o,l){const u=this._pingPongRenderTarget;this._halfBlur(e,u,t,r,o,"latitudinal",l),this._halfBlur(u,e,r,r,o,"longitudinal",l)}_halfBlur(e,t,r,o,l,u,f){const h=this._renderer,p=this._blurMaterial;u!=="latitudinal"&&u!=="longitudinal"&&Ot("blur direction must be either latitudinal or longitudinal!");const x=3,S=this._lodMeshes[o];S.material=p;const g=p.uniforms,_=this._sizeLods[r]-1,T=isFinite(l)?Math.PI/(2*_):2*Math.PI/(2*ys-1),C=l/T,y=isFinite(l)?1+Math.floor(x*C):ys;y>ys&&ct(`sigmaRadians, ${l}, is too large and will clip, as it requested ${y} samples when the maximum is set to ${ys}`);const v=[];let D=0;for(let F=0;F<ys;++F){const w=F/C,P=Math.exp(-w*w/2);v.push(P),F===0?D+=P:F<y&&(D+=2*P)}for(let F=0;F<v.length;F++)v[F]=v[F]/D;g.envMap.value=e.texture,g.samples.value=y,g.weights.value=v,g.latitudinal.value=u==="latitudinal",f&&(g.poleAxis.value=f);const{_lodMax:U}=this;g.dTheta.value=T,g.mipInt.value=U-r;const R=this._sizeLods[o],L=3*R*(o>U-$r?o-U+$r:0),N=4*(this._cubeSize-R);ca(t,L,N,3*R,2*R),h.setRenderTarget(t),h.render(S,so)}}function AE(s){const e=[],t=[],r=[];let o=s;const l=s-$r+1+i0.length;for(let u=0;u<l;u++){const f=Math.pow(2,o);e.push(f);let h=1/f;u>s-$r?h=i0[u-s+$r-1]:u===0&&(h=0),t.push(h);const p=1/(f-2),x=-p,S=1+p,g=[x,x,S,x,S,S,x,x,S,S,x,S],_=6,T=6,C=3,y=2,v=1,D=new Float32Array(C*T*_),U=new Float32Array(y*T*_),R=new Float32Array(v*T*_);for(let N=0;N<_;N++){const F=N%3*2/3-1,w=N>2?0:-1,P=[F,w,0,F+2/3,w,0,F+2/3,w+1,0,F,w,0,F+2/3,w+1,0,F,w+1,0];D.set(P,C*T*N),U.set(g,y*T*N);const V=[N,N,N,N,N,N];R.set(V,v*T*N)}const L=new Dn;L.setAttribute("position",new Wi(D,C)),L.setAttribute("uv",new Wi(U,y)),L.setAttribute("faceIndex",new Wi(R,v)),r.push(new it(L,null)),o>$r&&o--}return{lodMeshes:r,sizeLods:e,sigmas:t}}function a0(s,e,t){const r=new Gi(s,e,t);return r.texture.mapping=ac,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ca(s,e,t,r,o){s.viewport.set(e,t,r,o),s.scissor.set(e,t,r,o)}function RE(s,e,t){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:wE,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:lc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function CE(s,e,t){const r=new Float32Array(ys),o=new G(0,1,0);return new ji({name:"SphericalGaussianBlur",defines:{n:ys,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:r},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:o}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function o0(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function l0(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:lc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:pr,depthTest:!1,depthWrite:!1})}function lc(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}class mg extends Gi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},o=[r,r,r,r,r,r];this.texture=new ag(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},o=new Gt(5,5,5),l=new ji({name:"CubemapFromEquirect",uniforms:ga(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Jn,blending:pr});l.uniforms.tEquirect.value=t;const u=new it(o,l),f=t.minFilter;return t.minFilter===Ms&&(t.minFilter=Ln),new Dy(1,10,this).update(e,u),t.minFilter=f,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,r=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,r,o);e.setRenderTarget(l)}}function NE(s){let e=new WeakMap,t=new WeakMap,r=null;function o(g,_=!1){return g==null?null:_?u(g):l(g)}function l(g){if(g&&g.isTexture){const _=g.mapping;if(_===Gu||_===Wu)if(e.has(g)){const T=e.get(g).texture;return f(T,g.mapping)}else{const T=g.image;if(T&&T.height>0){const C=new mg(T.height);return C.fromEquirectangularTexture(s,g),e.set(g,C),g.addEventListener("dispose",p),f(C.texture,g.mapping)}else return null}}return g}function u(g){if(g&&g.isTexture){const _=g.mapping,T=_===Gu||_===Wu,C=_===Ts||_===pa;if(T||C){let y=t.get(g);const v=y!==void 0?y.texture.pmremVersion:0;if(g.isRenderTargetTexture&&g.pmremVersion!==v)return r===null&&(r=new s0(s)),y=T?r.fromEquirectangular(g,y):r.fromCubemap(g,y),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),y.texture;if(y!==void 0)return y.texture;{const D=g.image;return T&&D&&D.height>0||C&&D&&h(D)?(r===null&&(r=new s0(s)),y=T?r.fromEquirectangular(g):r.fromCubemap(g),y.texture.pmremVersion=g.pmremVersion,t.set(g,y),g.addEventListener("dispose",x),y.texture):null}}}return g}function f(g,_){return _===Gu?g.mapping=Ts:_===Wu&&(g.mapping=pa),g}function h(g){let _=0;const T=6;for(let C=0;C<T;C++)g[C]!==void 0&&_++;return _===T}function p(g){const _=g.target;_.removeEventListener("dispose",p);const T=e.get(_);T!==void 0&&(e.delete(_),T.dispose())}function x(g){const _=g.target;_.removeEventListener("dispose",x);const T=t.get(_);T!==void 0&&(t.delete(_),T.dispose())}function S(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:o,dispose:S}}function PE(s){const e={};function t(r){if(e[r]!==void 0)return e[r];const o=s.getExtension(r);return e[r]=o,o}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const o=t(r);return o===null&&da("WebGLRenderer: "+r+" extension not supported."),o}}}function IE(s,e,t,r){const o={},l=new WeakMap;function u(S){const g=S.target;g.index!==null&&e.remove(g.index);for(const T in g.attributes)e.remove(g.attributes[T]);g.removeEventListener("dispose",u),delete o[g.id];const _=l.get(g);_&&(e.remove(_),l.delete(g)),r.releaseStatesOfGeometry(g),g.isInstancedBufferGeometry===!0&&delete g._maxInstanceCount,t.memory.geometries--}function f(S,g){return o[g.id]===!0||(g.addEventListener("dispose",u),o[g.id]=!0,t.memory.geometries++),g}function h(S){const g=S.attributes;for(const _ in g)e.update(g[_],s.ARRAY_BUFFER)}function p(S){const g=[],_=S.index,T=S.attributes.position;let C=0;if(T===void 0)return;if(_!==null){const D=_.array;C=_.version;for(let U=0,R=D.length;U<R;U+=3){const L=D[U+0],N=D[U+1],F=D[U+2];g.push(L,N,N,F,F,L)}}else{const D=T.array;C=T.version;for(let U=0,R=D.length/3-1;U<R;U+=3){const L=U+0,N=U+1,F=U+2;g.push(L,N,N,F,F,L)}}const y=new(T.count>=65535?ig:ng)(g,1);y.version=C;const v=l.get(S);v&&e.remove(v),l.set(S,y)}function x(S){const g=l.get(S);if(g){const _=S.index;_!==null&&g.version<_.version&&p(S)}else p(S);return l.get(S)}return{get:f,update:h,getWireframeAttribute:x}}function LE(s,e,t){let r;function o(S){r=S}let l,u;function f(S){l=S.type,u=S.bytesPerElement}function h(S,g){s.drawElements(r,g,l,S*u),t.update(g,r,1)}function p(S,g,_){_!==0&&(s.drawElementsInstanced(r,g,l,S*u,_),t.update(g,r,_))}function x(S,g,_){if(_===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,g,0,l,S,0,_);let C=0;for(let y=0;y<_;y++)C+=g[y];t.update(C,r,1)}this.setMode=o,this.setIndex=f,this.render=h,this.renderInstances=p,this.renderMultiDraw=x}function DE(s){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(l,u,f){switch(t.calls++,u){case s.TRIANGLES:t.triangles+=f*(l/3);break;case s.LINES:t.lines+=f*(l/2);break;case s.LINE_STRIP:t.lines+=f*(l-1);break;case s.LINE_LOOP:t.lines+=f*l;break;case s.POINTS:t.points+=f*l;break;default:Ot("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:r}}function UE(s,e,t){const r=new WeakMap,o=new sn;function l(u,f,h){const p=u.morphTargetInfluences,x=f.morphAttributes.position||f.morphAttributes.normal||f.morphAttributes.color,S=x!==void 0?x.length:0;let g=r.get(f);if(g===void 0||g.count!==S){let V=function(){w.dispose(),r.delete(f),f.removeEventListener("dispose",V)};var _=V;g!==void 0&&g.texture.dispose();const T=f.morphAttributes.position!==void 0,C=f.morphAttributes.normal!==void 0,y=f.morphAttributes.color!==void 0,v=f.morphAttributes.position||[],D=f.morphAttributes.normal||[],U=f.morphAttributes.color||[];let R=0;T===!0&&(R=1),C===!0&&(R=2),y===!0&&(R=3);let L=f.attributes.position.count*R,N=1;L>e.maxTextureSize&&(N=Math.ceil(L/e.maxTextureSize),L=e.maxTextureSize);const F=new Float32Array(L*N*4*S),w=new Q0(F,L,N,S);w.type=zi,w.needsUpdate=!0;const P=R*4;for(let B=0;B<S;B++){const j=v[B],re=D[B],fe=U[B],$=L*N*4*B;for(let se=0;se<j.count;se++){const K=se*P;T===!0&&(o.fromBufferAttribute(j,se),F[$+K+0]=o.x,F[$+K+1]=o.y,F[$+K+2]=o.z,F[$+K+3]=0),C===!0&&(o.fromBufferAttribute(re,se),F[$+K+4]=o.x,F[$+K+5]=o.y,F[$+K+6]=o.z,F[$+K+7]=0),y===!0&&(o.fromBufferAttribute(fe,se),F[$+K+8]=o.x,F[$+K+9]=o.y,F[$+K+10]=o.z,F[$+K+11]=fe.itemSize===4?o.w:1)}}g={count:S,texture:w,size:new rt(L,N)},r.set(f,g),f.addEventListener("dispose",V)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)h.getUniforms().setValue(s,"morphTexture",u.morphTexture,t);else{let T=0;for(let y=0;y<p.length;y++)T+=p[y];const C=f.morphTargetsRelative?1:1-T;h.getUniforms().setValue(s,"morphTargetBaseInfluence",C),h.getUniforms().setValue(s,"morphTargetInfluences",p)}h.getUniforms().setValue(s,"morphTargetsTexture",g.texture,t),h.getUniforms().setValue(s,"morphTargetsTextureSize",g.size)}return{update:l}}function OE(s,e,t,r,o){let l=new WeakMap;function u(p){const x=o.render.frame,S=p.geometry,g=e.get(p,S);if(l.get(g)!==x&&(e.update(g),l.set(g,x)),p.isInstancedMesh&&(p.hasEventListener("dispose",h)===!1&&p.addEventListener("dispose",h),l.get(p)!==x&&(t.update(p.instanceMatrix,s.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,s.ARRAY_BUFFER),l.set(p,x))),p.isSkinnedMesh){const _=p.skeleton;l.get(_)!==x&&(_.update(),l.set(_,x))}return g}function f(){l=new WeakMap}function h(p){const x=p.target;x.removeEventListener("dispose",h),r.releaseStatesOfObject(x),t.remove(x.instanceMatrix),x.instanceColor!==null&&t.remove(x.instanceColor)}return{update:u,dispose:f}}const FE={[F0]:"LINEAR_TONE_MAPPING",[k0]:"REINHARD_TONE_MAPPING",[B0]:"CINEON_TONE_MAPPING",[z0]:"ACES_FILMIC_TONE_MAPPING",[H0]:"AGX_TONE_MAPPING",[G0]:"NEUTRAL_TONE_MAPPING",[V0]:"CUSTOM_TONE_MAPPING"};function kE(s,e,t,r,o,l){const u=new Gi(e,t,{type:s,depthBuffer:o,stencilBuffer:l,samples:r?4:0,depthTexture:o?new ma(e,t):void 0}),f=new Gi(e,t,{type:gr,depthBuffer:!1,stencilBuffer:!1}),h=new Dn;h.setAttribute("position",new Jt([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Jt([0,2,0,0,2,0],2));const p=new by({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new it(h,p),S=new zf(-1,1,1,-1,0,1);let g=null,_=null,T=!1,C,y=null,v=[],D=!1;this.setSize=function(U,R){u.setSize(U,R),f.setSize(U,R);for(let L=0;L<v.length;L++){const N=v[L];N.setSize&&N.setSize(U,R)}},this.setEffects=function(U){v=U,D=v.length>0&&v[0].isRenderPass===!0;const R=u.width,L=u.height;for(let N=0;N<v.length;N++){const F=v[N];F.setSize&&F.setSize(R,L)}},this.begin=function(U,R){if(T||U.toneMapping===Hi&&v.length===0)return!1;if(y=R,R!==null){const L=R.width,N=R.height;(u.width!==L||u.height!==N)&&this.setSize(L,N)}return D===!1&&U.setRenderTarget(u),C=U.toneMapping,U.toneMapping=Hi,!0},this.hasRenderPass=function(){return D},this.end=function(U,R){U.toneMapping=C,T=!0;let L=u,N=f;for(let F=0;F<v.length;F++){const w=v[F];if(w.enabled!==!1&&(w.render(U,N,L,R),w.needsSwap!==!1)){const P=L;L=N,N=P}}if(g!==U.outputColorSpace||_!==U.toneMapping){g=U.outputColorSpace,_=U.toneMapping,p.defines={},Pt.getTransfer(g)===Ht&&(p.defines.SRGB_TRANSFER="");const F=FE[_];F&&(p.defines[F]=""),p.needsUpdate=!0}p.uniforms.tDiffuse.value=L.texture,U.setRenderTarget(y),U.render(x,S),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){u.depthTexture&&u.depthTexture.dispose(),u.dispose(),f.dispose(),h.dispose(),p.dispose()}}const gg=new Bn,yf=new ma(1,1),xg=new Q0,vg=new V_,_g=new ag,c0=[],u0=[],d0=new Float32Array(16),f0=new Float32Array(9),h0=new Float32Array(4);function _a(s,e,t){const r=s[0];if(r<=0||r>0)return s;const o=e*t;let l=c0[o];if(l===void 0&&(l=new Float32Array(o),c0[o]=l),e!==0){r.toArray(l,0);for(let u=1,f=0;u!==e;++u)f+=t,s[u].toArray(l,f)}return l}function mn(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function gn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function cc(s,e){let t=u0[e];t===void 0&&(t=new Int32Array(e),u0[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function BE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function zE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2fv(this.addr,e),gn(t,e)}}function VE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;s.uniform3fv(this.addr,e),gn(t,e)}}function HE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4fv(this.addr,e),gn(t,e)}}function GE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;h0.set(r),s.uniformMatrix2fv(this.addr,!1,h0),gn(t,r)}}function WE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;f0.set(r),s.uniformMatrix3fv(this.addr,!1,f0),gn(t,r)}}function XE(s,e){const t=this.cache,r=e.elements;if(r===void 0){if(mn(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,r))return;d0.set(r),s.uniformMatrix4fv(this.addr,!1,d0),gn(t,r)}}function jE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function YE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2iv(this.addr,e),gn(t,e)}}function qE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3iv(this.addr,e),gn(t,e)}}function $E(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4iv(this.addr,e),gn(t,e)}}function KE(s,e){const t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function ZE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;s.uniform2uiv(this.addr,e),gn(t,e)}}function JE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;s.uniform3uiv(this.addr,e),gn(t,e)}}function QE(s,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;s.uniform4uiv(this.addr,e),gn(t,e)}}function e1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o);let l;this.type===s.SAMPLER_2D_SHADOW?(yf.compareFunction=t.isReversedDepthBuffer()?Lf:If,l=yf):l=gg,t.setTexture2D(e||l,o)}function t1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture3D(e||vg,o)}function n1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTextureCube(e||_g,o)}function i1(s,e,t){const r=this.cache,o=t.allocateTextureUnit();r[0]!==o&&(s.uniform1i(this.addr,o),r[0]=o),t.setTexture2DArray(e||xg,o)}function r1(s){switch(s){case 5126:return BE;case 35664:return zE;case 35665:return VE;case 35666:return HE;case 35674:return GE;case 35675:return WE;case 35676:return XE;case 5124:case 35670:return jE;case 35667:case 35671:return YE;case 35668:case 35672:return qE;case 35669:case 35673:return $E;case 5125:return KE;case 36294:return ZE;case 36295:return JE;case 36296:return QE;case 35678:case 36198:case 36298:case 36306:case 35682:return e1;case 35679:case 36299:case 36307:return t1;case 35680:case 36300:case 36308:case 36293:return n1;case 36289:case 36303:case 36311:case 36292:return i1}}function s1(s,e){s.uniform1fv(this.addr,e)}function a1(s,e){const t=_a(e,this.size,2);s.uniform2fv(this.addr,t)}function o1(s,e){const t=_a(e,this.size,3);s.uniform3fv(this.addr,t)}function l1(s,e){const t=_a(e,this.size,4);s.uniform4fv(this.addr,t)}function c1(s,e){const t=_a(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function u1(s,e){const t=_a(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function d1(s,e){const t=_a(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function f1(s,e){s.uniform1iv(this.addr,e)}function h1(s,e){s.uniform2iv(this.addr,e)}function p1(s,e){s.uniform3iv(this.addr,e)}function m1(s,e){s.uniform4iv(this.addr,e)}function g1(s,e){s.uniform1uiv(this.addr,e)}function x1(s,e){s.uniform2uiv(this.addr,e)}function v1(s,e){s.uniform3uiv(this.addr,e)}function _1(s,e){s.uniform4uiv(this.addr,e)}function y1(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));let u;this.type===s.SAMPLER_2D_SHADOW?u=yf:u=gg;for(let f=0;f!==o;++f)t.setTexture2D(e[f]||u,l[f])}function S1(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||vg,l[u])}function M1(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||_g,l[u])}function E1(s,e,t){const r=this.cache,o=e.length,l=cc(t,o);mn(r,l)||(s.uniform1iv(this.addr,l),gn(r,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||xg,l[u])}function T1(s){switch(s){case 5126:return s1;case 35664:return a1;case 35665:return o1;case 35666:return l1;case 35674:return c1;case 35675:return u1;case 35676:return d1;case 5124:case 35670:return f1;case 35667:case 35671:return h1;case 35668:case 35672:return p1;case 35669:case 35673:return m1;case 5125:return g1;case 36294:return x1;case 36295:return v1;case 36296:return _1;case 35678:case 36198:case 36298:case 36306:case 35682:return y1;case 35679:case 36299:case 36307:return S1;case 35680:case 36300:case 36308:case 36293:return M1;case 36289:case 36303:case 36311:case 36292:return E1}}class w1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=r1(t.type)}}class b1{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=T1(t.type)}}class A1{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const f=o[l];f.setValue(e,t[f.id],r)}}}const wd=/(\w+)(\])?(\[|\.)?/g;function p0(s,e){s.seq.push(e),s.map[e.id]=e}function R1(s,e,t){const r=s.name,o=r.length;for(wd.lastIndex=0;;){const l=wd.exec(r),u=wd.lastIndex;let f=l[1];const h=l[2]==="]",p=l[3];if(h&&(f=f|0),p===void 0||p==="["&&u+2===o){p0(t,p===void 0?new w1(f,s,e):new b1(f,s,e));break}else{let S=t.map[f];S===void 0&&(S=new A1(f),p0(t,S)),t=S}}}class $l{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<r;++u){const f=e.getActiveUniform(t,u),h=e.getUniformLocation(t,f.name);R1(f,h,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,r,o){const l=this.map[t];l!==void 0&&l.setValue(e,r,o)}setOptional(e,t,r){const o=t[r];o!==void 0&&this.setValue(e,r,o)}static upload(e,t,r,o){for(let l=0,u=t.length;l!==u;++l){const f=t[l],h=r[f.id];h.needsUpdate!==!1&&f.setValue(e,h.value,o)}}static seqWithValue(e,t){const r=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&r.push(u)}return r}}function m0(s,e,t){const r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}const C1=37297;let N1=0;function P1(s,e){const t=s.split(`
`),r=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const f=u+1;r.push(`${f===e?">":" "} ${f}: ${t[u]}`)}return r.join(`
`)}const g0=new gt;function I1(s){Pt._getMatrix(g0,Pt.workingColorSpace,s);const e=`mat3( ${g0.elements.map(t=>t.toFixed(4))} )`;switch(Pt.getTransfer(s)){case Ql:return[e,"LinearTransferOETF"];case Ht:return[e,"sRGBTransferOETF"];default:return ct("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function x0(s,e,t){const r=s.getShaderParameter(e,s.COMPILE_STATUS),l=(s.getShaderInfoLog(e)||"").trim();if(r&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const f=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+P1(s.getShaderSource(e),f)}else return l}function L1(s,e){const t=I1(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const D1={[F0]:"Linear",[k0]:"Reinhard",[B0]:"Cineon",[z0]:"ACESFilmic",[H0]:"AgX",[G0]:"Neutral",[V0]:"Custom"};function U1(s,e){const t=D1[e];return t===void 0?(ct("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Gl=new G;function O1(){Pt.getLuminanceCoefficients(Gl);const s=Gl.x.toFixed(4),e=Gl.y.toFixed(4),t=Gl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function F1(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(lo).join(`
`)}function k1(s){const e=[];for(const t in s){const r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function B1(s,e){const t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let o=0;o<r;o++){const l=s.getActiveAttrib(e,o),u=l.name;let f=1;l.type===s.FLOAT_MAT2&&(f=2),l.type===s.FLOAT_MAT3&&(f=3),l.type===s.FLOAT_MAT4&&(f=4),t[u]={type:l.type,location:s.getAttribLocation(e,u),locationSize:f}}return t}function lo(s){return s!==""}function v0(s,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function _0(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const z1=/^[ \t]*#include +<([\w\d./]+)>/gm;function Sf(s){return s.replace(z1,H1)}const V1=new Map;function H1(s,e){let t=_t[e];if(t===void 0){const r=V1.get(e);if(r!==void 0)t=_t[r],ct('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Sf(t)}const G1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function y0(s){return s.replace(G1,W1)}function W1(s,e,t,r){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=r.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function S0(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const X1={[Wl]:"SHADOWMAP_TYPE_PCF",[oo]:"SHADOWMAP_TYPE_VSM"};function j1(s){return X1[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const Y1={[Ts]:"ENVMAP_TYPE_CUBE",[pa]:"ENVMAP_TYPE_CUBE",[ac]:"ENVMAP_TYPE_CUBE_UV"};function q1(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":Y1[s.envMapMode]||"ENVMAP_TYPE_CUBE"}const $1={[pa]:"ENVMAP_MODE_REFRACTION"};function K1(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":$1[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}const Z1={[O0]:"ENVMAP_BLENDING_MULTIPLY",[y_]:"ENVMAP_BLENDING_MIX",[S_]:"ENVMAP_BLENDING_ADD"};function J1(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":Z1[s.combine]||"ENVMAP_BLENDING_NONE"}function Q1(s){const e=s.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function eT(s,e,t,r){const o=s.getContext(),l=t.defines;let u=t.vertexShader,f=t.fragmentShader;const h=j1(t),p=q1(t),x=K1(t),S=J1(t),g=Q1(t),_=F1(t),T=k1(l),C=o.createProgram();let y,v,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(lo).join(`
`),y.length>0&&(y+=`
`),v=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(lo).join(`
`),v.length>0&&(v+=`
`)):(y=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+x:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(lo).join(`
`),v=[S0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+x:"",t.envMap?"#define "+S:"",g?"#define CUBEUV_TEXEL_WIDTH "+g.texelWidth:"",g?"#define CUBEUV_TEXEL_HEIGHT "+g.texelHeight:"",g?"#define CUBEUV_MAX_MIP "+g.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+h:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Hi?"#define TONE_MAPPING":"",t.toneMapping!==Hi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Hi?U1("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,L1("linearToOutputTexel",t.outputColorSpace),O1(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(lo).join(`
`)),u=Sf(u),u=v0(u,t),u=_0(u,t),f=Sf(f),f=v0(f,t),f=_0(f,t),u=y0(u),f=y0(f),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[_,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,v=["#define varying in",t.glslVersion===wm?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===wm?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+v);const U=D+y+u,R=D+v+f,L=m0(o,o.VERTEX_SHADER,U),N=m0(o,o.FRAGMENT_SHADER,R);o.attachShader(C,L),o.attachShader(C,N),t.index0AttributeName!==void 0?o.bindAttribLocation(C,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(C,0,"position"),o.linkProgram(C);function F(B){if(s.debug.checkShaderErrors){const j=o.getProgramInfoLog(C)||"",re=o.getShaderInfoLog(L)||"",fe=o.getShaderInfoLog(N)||"",$=j.trim(),se=re.trim(),K=fe.trim();let Y=!0,ie=!0;if(o.getProgramParameter(C,o.LINK_STATUS)===!1)if(Y=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(o,C,L,N);else{const ue=x0(o,L,"vertex"),k=x0(o,N,"fragment");Ot("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(C,o.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+$+`
`+ue+`
`+k)}else $!==""?ct("WebGLProgram: Program Info Log:",$):(se===""||K==="")&&(ie=!1);ie&&(B.diagnostics={runnable:Y,programLog:$,vertexShader:{log:se,prefix:y},fragmentShader:{log:K,prefix:v}})}o.deleteShader(L),o.deleteShader(N),w=new $l(o,C),P=B1(o,C)}let w;this.getUniforms=function(){return w===void 0&&F(this),w};let P;this.getAttributes=function(){return P===void 0&&F(this),P};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(C,C1)),V},this.destroy=function(){r.releaseStatesOfProgram(this),o.deleteProgram(C),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=N1++,this.cacheKey=e,this.usedTimes=1,this.program=C,this.vertexShader=L,this.fragmentShader=N,this}let tT=0;class nT{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new iT(e),t.set(e,r)),r}}class iT{constructor(e){this.id=tT++,this.code=e,this.usedTimes=0}}function rT(s){return s===ws||s===Kl||s===Zl}function sT(s,e,t,r,o,l){const u=new eg,f=new nT,h=new Set,p=[],x=new Map,S=r.logarithmicDepthBuffer;let g=r.precision;const _={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return h.add(w),w===0?"uv":`uv${w}`}function C(w,P,V,B,j,re){const fe=B.fog,$=j.geometry,se=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?B.environment:null,K=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||se,K),ie=Y&&Y.mapping===ac?Y.image.height:null,ue=_[w.type];w.precision!==null&&(g=r.getMaxPrecision(w.precision),g!==w.precision&&ct("WebGLProgram.getParameters:",w.precision,"not supported, using",g,"instead."));const k=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,J=k!==void 0?k.length:0;let Le=0;$.morphAttributes.position!==void 0&&(Le=1),$.morphAttributes.normal!==void 0&&(Le=2),$.morphAttributes.color!==void 0&&(Le=3);let Xe,ze,le,pe;if(ue){const He=Bi[ue];Xe=He.vertexShader,ze=He.fragmentShader}else{Xe=w.vertexShader,ze=w.fragmentShader;const He=f.getVertexShaderStage(w),kt=f.getFragmentShaderStage(w);f.update(w,He,kt),le=He.id,pe=kt.id}const oe=s.getRenderTarget(),De=s.state.buffers.depth.getReversed(),Oe=j.isInstancedMesh===!0,je=j.isBatchedMesh===!0,Rt=!!w.map,nt=!!w.matcap,ht=!!Y,vt=!!w.aoMap,dt=!!w.lightMap,lt=!!w.bumpMap&&w.wireframe===!1,ut=!!w.normalMap,Tt=!!w.displacementMap,Nt=!!w.emissiveMap,xt=!!w.metalnessMap,St=!!w.roughnessMap,W=w.anisotropy>0,Yt=w.clearcoat>0,Mt=w.dispersion>0,I=w.iridescence>0,E=w.sheen>0,Z=w.transmission>0,Q=W&&!!w.anisotropyMap,he=Yt&&!!w.clearcoatMap,Me=Yt&&!!w.clearcoatNormalMap,Ce=Yt&&!!w.clearcoatRoughnessMap,me=I&&!!w.iridescenceMap,xe=I&&!!w.iridescenceThicknessMap,Pe=E&&!!w.sheenColorMap,Fe=E&&!!w.sheenRoughnessMap,Ie=!!w.specularMap,Re=!!w.specularColorMap,Ke=!!w.specularIntensityMap,et=Z&&!!w.transmissionMap,st=Z&&!!w.thicknessMap,H=!!w.gradientMap,Ae=!!w.alphaMap,ge=w.alphaTest>0,Ne=!!w.alphaHash,we=!!w.extensions;let ve=Hi;w.toneMapped&&(oe===null||oe.isXRRenderTarget===!0)&&(ve=s.toneMapping);const We={shaderID:ue,shaderType:w.type,shaderName:w.name,vertexShader:Xe,fragmentShader:ze,defines:w.defines,customVertexShaderID:le,customFragmentShaderID:pe,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:g,batching:je,batchingColor:je&&j._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&j.instanceColor!==null,instancingMorph:Oe&&j.morphTexture!==null,outputColorSpace:oe===null?s.outputColorSpace:oe.isXRRenderTarget===!0?oe.texture.colorSpace:Pt.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Rt,matcap:nt,envMap:ht,envMapMode:ht&&Y.mapping,envMapCubeUVHeight:ie,aoMap:vt,lightMap:dt,bumpMap:lt,normalMap:ut,displacementMap:Tt,emissiveMap:Nt,normalMapObjectSpace:ut&&w.normalMapType===T_,normalMapTangentSpace:ut&&w.normalMapType===xf,packedNormalMap:ut&&w.normalMapType===xf&&rT(w.normalMap.format),metalnessMap:xt,roughnessMap:St,anisotropy:W,anisotropyMap:Q,clearcoat:Yt,clearcoatMap:he,clearcoatNormalMap:Me,clearcoatRoughnessMap:Ce,dispersion:Mt,iridescence:I,iridescenceMap:me,iridescenceThicknessMap:xe,sheen:E,sheenColorMap:Pe,sheenRoughnessMap:Fe,specularMap:Ie,specularColorMap:Re,specularIntensityMap:Ke,transmission:Z,transmissionMap:et,thicknessMap:st,gradientMap:H,opaque:w.transparent===!1&&w.blending===ua&&w.alphaToCoverage===!1,alphaMap:Ae,alphaTest:ge,alphaHash:Ne,combine:w.combine,mapUv:Rt&&T(w.map.channel),aoMapUv:vt&&T(w.aoMap.channel),lightMapUv:dt&&T(w.lightMap.channel),bumpMapUv:lt&&T(w.bumpMap.channel),normalMapUv:ut&&T(w.normalMap.channel),displacementMapUv:Tt&&T(w.displacementMap.channel),emissiveMapUv:Nt&&T(w.emissiveMap.channel),metalnessMapUv:xt&&T(w.metalnessMap.channel),roughnessMapUv:St&&T(w.roughnessMap.channel),anisotropyMapUv:Q&&T(w.anisotropyMap.channel),clearcoatMapUv:he&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:Me&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:Ce&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:me&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:xe&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Pe&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(w.sheenRoughnessMap.channel),specularMapUv:Ie&&T(w.specularMap.channel),specularColorMapUv:Re&&T(w.specularColorMap.channel),specularIntensityMapUv:Ke&&T(w.specularIntensityMap.channel),transmissionMapUv:et&&T(w.transmissionMap.channel),thicknessMapUv:st&&T(w.thicknessMap.channel),alphaMapUv:Ae&&T(w.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(ut||W),vertexNormals:!!$.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!$.attributes.uv&&(Rt||Ae),fog:!!fe,useFog:w.fog===!0,fogExp2:!!fe&&fe.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||$.attributes.normal===void 0&&ut===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:S,reversedDepthBuffer:De,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:$.attributes.position!==void 0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:Le,numDirLights:P.directional.length,numPointLights:P.point.length,numSpotLights:P.spot.length,numSpotLightMaps:P.spotLightMap.length,numRectAreaLights:P.rectArea.length,numHemiLights:P.hemi.length,numDirLightShadows:P.directionalShadowMap.length,numPointLightShadows:P.pointShadowMap.length,numSpotLightShadows:P.spotShadowMap.length,numSpotLightShadowsWithMaps:P.numSpotLightShadowsWithMaps,numLightProbes:P.numLightProbes,numLightProbeGrids:re.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:s.shadowMap.enabled&&V.length>0,shadowMapType:s.shadowMap.type,toneMapping:ve,decodeVideoTexture:Rt&&w.map.isVideoTexture===!0&&Pt.getTransfer(w.map.colorSpace)===Ht,decodeVideoTextureEmissive:Nt&&w.emissiveMap.isVideoTexture===!0&&Pt.getTransfer(w.emissiveMap.colorSpace)===Ht,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===fr,flipSided:w.side===Jn,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:we&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(we&&w.extensions.multiDraw===!0||je)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return We.vertexUv1s=h.has(1),We.vertexUv2s=h.has(2),We.vertexUv3s=h.has(3),h.clear(),We}function y(w){const P=[];if(w.shaderID?P.push(w.shaderID):(P.push(w.customVertexShaderID),P.push(w.customFragmentShaderID)),w.defines!==void 0)for(const V in w.defines)P.push(V),P.push(w.defines[V]);return w.isRawShaderMaterial===!1&&(v(P,w),D(P,w),P.push(s.outputColorSpace)),P.push(w.customProgramCacheKey),P.join()}function v(w,P){w.push(P.precision),w.push(P.outputColorSpace),w.push(P.envMapMode),w.push(P.envMapCubeUVHeight),w.push(P.mapUv),w.push(P.alphaMapUv),w.push(P.lightMapUv),w.push(P.aoMapUv),w.push(P.bumpMapUv),w.push(P.normalMapUv),w.push(P.displacementMapUv),w.push(P.emissiveMapUv),w.push(P.metalnessMapUv),w.push(P.roughnessMapUv),w.push(P.anisotropyMapUv),w.push(P.clearcoatMapUv),w.push(P.clearcoatNormalMapUv),w.push(P.clearcoatRoughnessMapUv),w.push(P.iridescenceMapUv),w.push(P.iridescenceThicknessMapUv),w.push(P.sheenColorMapUv),w.push(P.sheenRoughnessMapUv),w.push(P.specularMapUv),w.push(P.specularColorMapUv),w.push(P.specularIntensityMapUv),w.push(P.transmissionMapUv),w.push(P.thicknessMapUv),w.push(P.combine),w.push(P.fogExp2),w.push(P.sizeAttenuation),w.push(P.morphTargetsCount),w.push(P.morphAttributeCount),w.push(P.numDirLights),w.push(P.numPointLights),w.push(P.numSpotLights),w.push(P.numSpotLightMaps),w.push(P.numHemiLights),w.push(P.numRectAreaLights),w.push(P.numDirLightShadows),w.push(P.numPointLightShadows),w.push(P.numSpotLightShadows),w.push(P.numSpotLightShadowsWithMaps),w.push(P.numLightProbes),w.push(P.shadowMapType),w.push(P.toneMapping),w.push(P.numClippingPlanes),w.push(P.numClipIntersection),w.push(P.depthPacking)}function D(w,P){u.disableAll(),P.instancing&&u.enable(0),P.instancingColor&&u.enable(1),P.instancingMorph&&u.enable(2),P.matcap&&u.enable(3),P.envMap&&u.enable(4),P.normalMapObjectSpace&&u.enable(5),P.normalMapTangentSpace&&u.enable(6),P.clearcoat&&u.enable(7),P.iridescence&&u.enable(8),P.alphaTest&&u.enable(9),P.vertexColors&&u.enable(10),P.vertexAlphas&&u.enable(11),P.vertexUv1s&&u.enable(12),P.vertexUv2s&&u.enable(13),P.vertexUv3s&&u.enable(14),P.vertexTangents&&u.enable(15),P.anisotropy&&u.enable(16),P.alphaHash&&u.enable(17),P.batching&&u.enable(18),P.dispersion&&u.enable(19),P.batchingColor&&u.enable(20),P.gradientMap&&u.enable(21),P.packedNormalMap&&u.enable(22),P.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),P.fog&&u.enable(0),P.useFog&&u.enable(1),P.flatShading&&u.enable(2),P.logarithmicDepthBuffer&&u.enable(3),P.reversedDepthBuffer&&u.enable(4),P.skinning&&u.enable(5),P.morphTargets&&u.enable(6),P.morphNormals&&u.enable(7),P.morphColors&&u.enable(8),P.premultipliedAlpha&&u.enable(9),P.shadowMapEnabled&&u.enable(10),P.doubleSided&&u.enable(11),P.flipSided&&u.enable(12),P.useDepthPacking&&u.enable(13),P.dithering&&u.enable(14),P.transmission&&u.enable(15),P.sheen&&u.enable(16),P.opaque&&u.enable(17),P.pointsUvs&&u.enable(18),P.decodeVideoTexture&&u.enable(19),P.decodeVideoTextureEmissive&&u.enable(20),P.alphaToCoverage&&u.enable(21),P.numLightProbeGrids>0&&u.enable(22),P.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function U(w){const P=_[w.type];let V;if(P){const B=Bi[P];V=Ey.clone(B.uniforms)}else V=w.uniforms;return V}function R(w,P){let V=x.get(P);return V!==void 0?++V.usedTimes:(V=new eT(s,P,w,o),p.push(V),x.set(P,V)),V}function L(w){if(--w.usedTimes===0){const P=p.indexOf(w);p[P]=p[p.length-1],p.pop(),x.delete(w.cacheKey),w.destroy()}}function N(w){f.remove(w)}function F(){f.dispose()}return{getParameters:C,getProgramCacheKey:y,getUniforms:U,acquireProgram:R,releaseProgram:L,releaseShaderCache:N,programs:p,dispose:F}}function aT(){let s=new WeakMap;function e(u){return s.has(u)}function t(u){let f=s.get(u);return f===void 0&&(f={},s.set(u,f)),f}function r(u){s.delete(u)}function o(u,f,h){s.get(u)[f]=h}function l(){s=new WeakMap}return{has:e,get:t,remove:r,update:o,dispose:l}}function oT(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function M0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function E0(){const s=[];let e=0;const t=[],r=[],o=[];function l(){e=0,t.length=0,r.length=0,o.length=0}function u(g){let _=0;return g.isInstancedMesh&&(_+=2),g.isSkinnedMesh&&(_+=1),_}function f(g,_,T,C,y,v){let D=s[e];return D===void 0?(D={id:g.id,object:g,geometry:_,material:T,materialVariant:u(g),groupOrder:C,renderOrder:g.renderOrder,z:y,group:v},s[e]=D):(D.id=g.id,D.object=g,D.geometry=_,D.material=T,D.materialVariant=u(g),D.groupOrder=C,D.renderOrder=g.renderOrder,D.z=y,D.group=v),e++,D}function h(g,_,T,C,y,v){const D=f(g,_,T,C,y,v);T.transmission>0?r.push(D):T.transparent===!0?o.push(D):t.push(D)}function p(g,_,T,C,y,v){const D=f(g,_,T,C,y,v);T.transmission>0?r.unshift(D):T.transparent===!0?o.unshift(D):t.unshift(D)}function x(g,_,T){t.length>1&&t.sort(g||oT),r.length>1&&r.sort(_||M0),o.length>1&&o.sort(_||M0),T&&(t.reverse(),r.reverse(),o.reverse())}function S(){for(let g=e,_=s.length;g<_;g++){const T=s[g];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:r,transparent:o,init:l,push:h,unshift:p,finish:S,sort:x}}function lT(){let s=new WeakMap;function e(r,o){const l=s.get(r);let u;return l===void 0?(u=new E0,s.set(r,[u])):o>=l.length?(u=new E0,l.push(u)):u=l[o],u}function t(){s=new WeakMap}return{get:e,dispose:t}}function cT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new G,color:new yt};break;case"SpotLight":t={position:new G,direction:new G,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new G,halfWidth:new G,halfHeight:new G};break}return s[e.id]=t,t}}}function uT(){const s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new rt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}let dT=0;function fT(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function hT(s){const e=new cT,t=uT(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)r.probe.push(new G);const o=new G,l=new tn,u=new tn;function f(p){let x=0,S=0,g=0;for(let P=0;P<9;P++)r.probe[P].set(0,0,0);let _=0,T=0,C=0,y=0,v=0,D=0,U=0,R=0,L=0,N=0,F=0;p.sort(fT);for(let P=0,V=p.length;P<V;P++){const B=p[P],j=B.color,re=B.intensity,fe=B.distance;let $=null;if(B.shadow&&B.shadow.map&&(B.shadow.map.texture.format===ws?$=B.shadow.map.texture:$=B.shadow.map.depthTexture||B.shadow.map.texture),B.isAmbientLight)x+=j.r*re,S+=j.g*re,g+=j.b*re;else if(B.isLightProbe){for(let se=0;se<9;se++)r.probe[se].addScaledVector(B.sh.coefficients[se],re);F++}else if(B.isDirectionalLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),B.castShadow){const K=B.shadow,Y=t.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.directionalShadow[_]=Y,r.directionalShadowMap[_]=$,r.directionalShadowMatrix[_]=B.shadow.matrix,D++}r.directional[_]=se,_++}else if(B.isSpotLight){const se=e.get(B);se.position.setFromMatrixPosition(B.matrixWorld),se.color.copy(j).multiplyScalar(re),se.distance=fe,se.coneCos=Math.cos(B.angle),se.penumbraCos=Math.cos(B.angle*(1-B.penumbra)),se.decay=B.decay,r.spot[C]=se;const K=B.shadow;if(B.map&&(r.spotLightMap[L]=B.map,L++,K.updateMatrices(B),B.castShadow&&N++),r.spotLightMatrix[C]=K.matrix,B.castShadow){const Y=t.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,r.spotShadow[C]=Y,r.spotShadowMap[C]=$,R++}C++}else if(B.isRectAreaLight){const se=e.get(B);se.color.copy(j).multiplyScalar(re),se.halfWidth.set(B.width*.5,0,0),se.halfHeight.set(0,B.height*.5,0),r.rectArea[y]=se,y++}else if(B.isPointLight){const se=e.get(B);if(se.color.copy(B.color).multiplyScalar(B.intensity),se.distance=B.distance,se.decay=B.decay,B.castShadow){const K=B.shadow,Y=t.get(B);Y.shadowIntensity=K.intensity,Y.shadowBias=K.bias,Y.shadowNormalBias=K.normalBias,Y.shadowRadius=K.radius,Y.shadowMapSize=K.mapSize,Y.shadowCameraNear=K.camera.near,Y.shadowCameraFar=K.camera.far,r.pointShadow[T]=Y,r.pointShadowMap[T]=$,r.pointShadowMatrix[T]=B.shadow.matrix,U++}r.point[T]=se,T++}else if(B.isHemisphereLight){const se=e.get(B);se.skyColor.copy(B.color).multiplyScalar(re),se.groundColor.copy(B.groundColor).multiplyScalar(re),r.hemi[v]=se,v++}}y>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Ue.LTC_FLOAT_1,r.rectAreaLTC2=Ue.LTC_FLOAT_2):(r.rectAreaLTC1=Ue.LTC_HALF_1,r.rectAreaLTC2=Ue.LTC_HALF_2)),r.ambient[0]=x,r.ambient[1]=S,r.ambient[2]=g;const w=r.hash;(w.directionalLength!==_||w.pointLength!==T||w.spotLength!==C||w.rectAreaLength!==y||w.hemiLength!==v||w.numDirectionalShadows!==D||w.numPointShadows!==U||w.numSpotShadows!==R||w.numSpotMaps!==L||w.numLightProbes!==F)&&(r.directional.length=_,r.spot.length=C,r.rectArea.length=y,r.point.length=T,r.hemi.length=v,r.directionalShadow.length=D,r.directionalShadowMap.length=D,r.pointShadow.length=U,r.pointShadowMap.length=U,r.spotShadow.length=R,r.spotShadowMap.length=R,r.directionalShadowMatrix.length=D,r.pointShadowMatrix.length=U,r.spotLightMatrix.length=R+L-N,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=N,r.numLightProbes=F,w.directionalLength=_,w.pointLength=T,w.spotLength=C,w.rectAreaLength=y,w.hemiLength=v,w.numDirectionalShadows=D,w.numPointShadows=U,w.numSpotShadows=R,w.numSpotMaps=L,w.numLightProbes=F,r.version=dT++)}function h(p,x){let S=0,g=0,_=0,T=0,C=0;const y=x.matrixWorldInverse;for(let v=0,D=p.length;v<D;v++){const U=p[v];if(U.isDirectionalLight){const R=r.directional[S];R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),S++}else if(U.isSpotLight){const R=r.spot[_];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),R.direction.setFromMatrixPosition(U.matrixWorld),o.setFromMatrixPosition(U.target.matrixWorld),R.direction.sub(o),R.direction.transformDirection(y),_++}else if(U.isRectAreaLight){const R=r.rectArea[T];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),u.identity(),l.copy(U.matrixWorld),l.premultiply(y),u.extractRotation(l),R.halfWidth.set(U.width*.5,0,0),R.halfHeight.set(0,U.height*.5,0),R.halfWidth.applyMatrix4(u),R.halfHeight.applyMatrix4(u),T++}else if(U.isPointLight){const R=r.point[g];R.position.setFromMatrixPosition(U.matrixWorld),R.position.applyMatrix4(y),g++}else if(U.isHemisphereLight){const R=r.hemi[C];R.direction.setFromMatrixPosition(U.matrixWorld),R.direction.transformDirection(y),C++}}}return{setup:f,setupView:h,state:r}}function T0(s){const e=new hT(s),t=[],r=[],o=[];function l(g){S.camera=g,t.length=0,r.length=0,o.length=0}function u(g){t.push(g)}function f(g){r.push(g)}function h(g){o.push(g)}function p(){e.setup(t)}function x(g){e.setupView(t,g)}const S={lightsArray:t,shadowsArray:r,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:S,setupLights:p,setupLightsView:x,pushLight:u,pushShadow:f,pushLightProbeGrid:h}}function pT(s){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let f;return u===void 0?(f=new T0(s),e.set(o,[f])):l>=u.length?(f=new T0(s),u.push(f)):f=u[l],f}function r(){e=new WeakMap}return{get:t,dispose:r}}const mT=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,gT=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,xT=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],vT=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],w0=new tn,ao=new G,bd=new G;function _T(s,e,t){let r=new Uf;const o=new rt,l=new rt,u=new sn,f=new Ry,h=new Cy,p={},x=t.maxTextureSize,S={[Kr]:Jn,[Jn]:Kr,[fr]:fr},g=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new rt},radius:{value:4}},vertexShader:mT,fragmentShader:gT}),_=g.clone();_.defines.HORIZONTAL_PASS=1;const T=new Dn;T.setAttribute("position",new Wi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const C=new it(T,g),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Wl;let v=this.type;this.render=function(N,F,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||N.length===0)return;this.type===U0&&(ct("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),this.type=Wl);const P=s.getRenderTarget(),V=s.getActiveCubeFace(),B=s.getActiveMipmapLevel(),j=s.state;j.setBlending(pr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const re=v!==this.type;re&&F.traverse(function(fe){fe.material&&(Array.isArray(fe.material)?fe.material.forEach($=>$.needsUpdate=!0):fe.material.needsUpdate=!0)});for(let fe=0,$=N.length;fe<$;fe++){const se=N[fe],K=se.shadow;if(K===void 0){ct("WebGLShadowMap:",se,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;o.copy(K.mapSize);const Y=K.getFrameExtents();o.multiply(Y),l.copy(K.mapSize),(o.x>x||o.y>x)&&(o.x>x&&(l.x=Math.floor(x/Y.x),o.x=l.x*Y.x,K.mapSize.x=l.x),o.y>x&&(l.y=Math.floor(x/Y.y),o.y=l.y*Y.y,K.mapSize.y=l.y));const ie=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=ie,K.map===null||re===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===oo){if(se.isPointLight){ct("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Gi(o.x,o.y,{format:ws,type:gr,minFilter:Ln,magFilter:Ln,generateMipmaps:!1}),K.map.texture.name=se.name+".shadowMap",K.map.depthTexture=new ma(o.x,o.y,zi),K.map.depthTexture.name=se.name+".shadowMapDepth",K.map.depthTexture.format=xr,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Tn,K.map.depthTexture.magFilter=Tn}else se.isPointLight?(K.map=new mg(o.x),K.map.depthTexture=new ay(o.x,Xi)):(K.map=new Gi(o.x,o.y),K.map.depthTexture=new ma(o.x,o.y,Xi)),K.map.depthTexture.name=se.name+".shadowMap",K.map.depthTexture.format=xr,this.type===Wl?(K.map.depthTexture.compareFunction=ie?Lf:If,K.map.depthTexture.minFilter=Ln,K.map.depthTexture.magFilter=Ln):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=Tn,K.map.depthTexture.magFilter=Tn);K.camera.updateProjectionMatrix()}const ue=K.map.isWebGLCubeRenderTarget?6:1;for(let k=0;k<ue;k++){if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,k),s.clear();else{k===0&&(s.setRenderTarget(K.map),s.clear());const J=K.getViewport(k);u.set(l.x*J.x,l.y*J.y,l.x*J.z,l.y*J.w),j.viewport(u)}if(se.isPointLight){const J=K.camera,Le=K.matrix,Xe=se.distance||J.far;Xe!==J.far&&(J.far=Xe,J.updateProjectionMatrix()),ao.setFromMatrixPosition(se.matrixWorld),J.position.copy(ao),bd.copy(J.position),bd.add(xT[k]),J.up.copy(vT[k]),J.lookAt(bd),J.updateMatrixWorld(),Le.makeTranslation(-ao.x,-ao.y,-ao.z),w0.multiplyMatrices(J.projectionMatrix,J.matrixWorldInverse),K._frustum.setFromProjectionMatrix(w0,J.coordinateSystem,J.reversedDepth)}else K.updateMatrices(se);r=K.getFrustum(),R(F,w,K.camera,se,this.type)}K.isPointLightShadow!==!0&&this.type===oo&&D(K,w),K.needsUpdate=!1}v=this.type,y.needsUpdate=!1,s.setRenderTarget(P,V,B)};function D(N,F){const w=e.update(C);g.defines.VSM_SAMPLES!==N.blurSamples&&(g.defines.VSM_SAMPLES=N.blurSamples,_.defines.VSM_SAMPLES=N.blurSamples,g.needsUpdate=!0,_.needsUpdate=!0),N.mapPass===null&&(N.mapPass=new Gi(o.x,o.y,{format:ws,type:gr})),g.uniforms.shadow_pass.value=N.map.depthTexture,g.uniforms.resolution.value=N.mapSize,g.uniforms.radius.value=N.radius,s.setRenderTarget(N.mapPass),s.clear(),s.renderBufferDirect(F,null,w,g,C,null),_.uniforms.shadow_pass.value=N.mapPass.texture,_.uniforms.resolution.value=N.mapSize,_.uniforms.radius.value=N.radius,s.setRenderTarget(N.map),s.clear(),s.renderBufferDirect(F,null,w,_,C,null)}function U(N,F,w,P){let V=null;const B=w.isPointLight===!0?N.customDistanceMaterial:N.customDepthMaterial;if(B!==void 0)V=B;else if(V=w.isPointLight===!0?h:f,s.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const j=V.uuid,re=F.uuid;let fe=p[j];fe===void 0&&(fe={},p[j]=fe);let $=fe[re];$===void 0&&($=V.clone(),fe[re]=$,F.addEventListener("dispose",L)),V=$}if(V.visible=F.visible,V.wireframe=F.wireframe,P===oo?V.side=F.shadowSide!==null?F.shadowSide:F.side:V.side=F.shadowSide!==null?F.shadowSide:S[F.side],V.alphaMap=F.alphaMap,V.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,V.map=F.map,V.clipShadows=F.clipShadows,V.clippingPlanes=F.clippingPlanes,V.clipIntersection=F.clipIntersection,V.displacementMap=F.displacementMap,V.displacementScale=F.displacementScale,V.displacementBias=F.displacementBias,V.wireframeLinewidth=F.wireframeLinewidth,V.linewidth=F.linewidth,w.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const j=s.properties.get(V);j.light=w}return V}function R(N,F,w,P,V){if(N.visible===!1)return;if(N.layers.test(F.layers)&&(N.isMesh||N.isLine||N.isPoints)&&(N.castShadow||N.receiveShadow&&V===oo)&&(!N.frustumCulled||r.intersectsObject(N))){N.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,N.matrixWorld);const re=e.update(N),fe=N.material;if(Array.isArray(fe)){const $=re.groups;for(let se=0,K=$.length;se<K;se++){const Y=$[se],ie=fe[Y.materialIndex];if(ie&&ie.visible){const ue=U(N,ie,P,V);N.onBeforeShadow(s,N,F,w,re,ue,Y),s.renderBufferDirect(w,null,re,ue,N,Y),N.onAfterShadow(s,N,F,w,re,ue,Y)}}}else if(fe.visible){const $=U(N,fe,P,V);N.onBeforeShadow(s,N,F,w,re,$,null),s.renderBufferDirect(w,null,re,$,N,null),N.onAfterShadow(s,N,F,w,re,$,null)}}const j=N.children;for(let re=0,fe=j.length;re<fe;re++)R(j[re],F,w,P,V)}function L(N){N.target.removeEventListener("dispose",L);for(const w in p){const P=p[w],V=N.target.uuid;V in P&&(P[V].dispose(),delete P[V])}}}function yT(s,e){function t(){let H=!1;const Ae=new sn;let ge=null;const Ne=new sn(0,0,0,0);return{setMask:function(we){ge!==we&&!H&&(s.colorMask(we,we,we,we),ge=we)},setLocked:function(we){H=we},setClear:function(we,ve,We,He,kt){kt===!0&&(we*=He,ve*=He,We*=He),Ae.set(we,ve,We,He),Ne.equals(Ae)===!1&&(s.clearColor(we,ve,We,He),Ne.copy(Ae))},reset:function(){H=!1,ge=null,Ne.set(-1,0,0,0)}}}function r(){let H=!1,Ae=!1,ge=null,Ne=null,we=null;return{setReversed:function(ve){if(Ae!==ve){const We=e.get("EXT_clip_control");ve?We.clipControlEXT(We.LOWER_LEFT_EXT,We.ZERO_TO_ONE_EXT):We.clipControlEXT(We.LOWER_LEFT_EXT,We.NEGATIVE_ONE_TO_ONE_EXT),Ae=ve;const He=we;we=null,this.setClear(He)}},getReversed:function(){return Ae},setTest:function(ve){ve?oe(s.DEPTH_TEST):De(s.DEPTH_TEST)},setMask:function(ve){ge!==ve&&!H&&(s.depthMask(ve),ge=ve)},setFunc:function(ve){if(Ae&&(ve=D_[ve]),Ne!==ve){switch(ve){case Pd:s.depthFunc(s.NEVER);break;case Id:s.depthFunc(s.ALWAYS);break;case Ld:s.depthFunc(s.LESS);break;case ha:s.depthFunc(s.LEQUAL);break;case Dd:s.depthFunc(s.EQUAL);break;case Ud:s.depthFunc(s.GEQUAL);break;case Od:s.depthFunc(s.GREATER);break;case Fd:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ne=ve}},setLocked:function(ve){H=ve},setClear:function(ve){we!==ve&&(we=ve,Ae&&(ve=1-ve),s.clearDepth(ve))},reset:function(){H=!1,ge=null,Ne=null,we=null,Ae=!1}}}function o(){let H=!1,Ae=null,ge=null,Ne=null,we=null,ve=null,We=null,He=null,kt=null;return{setTest:function(Dt){H||(Dt?oe(s.STENCIL_TEST):De(s.STENCIL_TEST))},setMask:function(Dt){Ae!==Dt&&!H&&(s.stencilMask(Dt),Ae=Dt)},setFunc:function(Dt,an,Un){(ge!==Dt||Ne!==an||we!==Un)&&(s.stencilFunc(Dt,an,Un),ge=Dt,Ne=an,we=Un)},setOp:function(Dt,an,Un){(ve!==Dt||We!==an||He!==Un)&&(s.stencilOp(Dt,an,Un),ve=Dt,We=an,He=Un)},setLocked:function(Dt){H=Dt},setClear:function(Dt){kt!==Dt&&(s.clearStencil(Dt),kt=Dt)},reset:function(){H=!1,Ae=null,ge=null,Ne=null,we=null,ve=null,We=null,He=null,kt=null}}}const l=new t,u=new r,f=new o,h=new WeakMap,p=new WeakMap;let x={},S={},g={},_=new WeakMap,T=[],C=null,y=!1,v=null,D=null,U=null,R=null,L=null,N=null,F=null,w=new yt(0,0,0),P=0,V=!1,B=null,j=null,re=null,fe=null,$=null;const se=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let K=!1,Y=0;const ie=s.getParameter(s.VERSION);ie.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(ie)[1]),K=Y>=1):ie.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(ie)[1]),K=Y>=2);let ue=null,k={};const J=s.getParameter(s.SCISSOR_BOX),Le=s.getParameter(s.VIEWPORT),Xe=new sn().fromArray(J),ze=new sn().fromArray(Le);function le(H,Ae,ge,Ne){const we=new Uint8Array(4),ve=s.createTexture();s.bindTexture(H,ve),s.texParameteri(H,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(H,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let We=0;We<ge;We++)H===s.TEXTURE_3D||H===s.TEXTURE_2D_ARRAY?s.texImage3D(Ae,0,s.RGBA,1,1,Ne,0,s.RGBA,s.UNSIGNED_BYTE,we):s.texImage2D(Ae+We,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,we);return ve}const pe={};pe[s.TEXTURE_2D]=le(s.TEXTURE_2D,s.TEXTURE_2D,1),pe[s.TEXTURE_CUBE_MAP]=le(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),pe[s.TEXTURE_2D_ARRAY]=le(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),pe[s.TEXTURE_3D]=le(s.TEXTURE_3D,s.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),f.setClear(0),oe(s.DEPTH_TEST),u.setFunc(ha),lt(!1),ut(_m),oe(s.CULL_FACE),vt(pr);function oe(H){x[H]!==!0&&(s.enable(H),x[H]=!0)}function De(H){x[H]!==!1&&(s.disable(H),x[H]=!1)}function Oe(H,Ae){return g[H]!==Ae?(s.bindFramebuffer(H,Ae),g[H]=Ae,H===s.DRAW_FRAMEBUFFER&&(g[s.FRAMEBUFFER]=Ae),H===s.FRAMEBUFFER&&(g[s.DRAW_FRAMEBUFFER]=Ae),!0):!1}function je(H,Ae){let ge=T,Ne=!1;if(H){ge=_.get(Ae),ge===void 0&&(ge=[],_.set(Ae,ge));const we=H.textures;if(ge.length!==we.length||ge[0]!==s.COLOR_ATTACHMENT0){for(let ve=0,We=we.length;ve<We;ve++)ge[ve]=s.COLOR_ATTACHMENT0+ve;ge.length=we.length,Ne=!0}}else ge[0]!==s.BACK&&(ge[0]=s.BACK,Ne=!0);Ne&&s.drawBuffers(ge)}function Rt(H){return C!==H?(s.useProgram(H),C=H,!0):!1}const nt={[vs]:s.FUNC_ADD,[i_]:s.FUNC_SUBTRACT,[r_]:s.FUNC_REVERSE_SUBTRACT};nt[s_]=s.MIN,nt[a_]=s.MAX;const ht={[o_]:s.ZERO,[l_]:s.ONE,[c_]:s.SRC_COLOR,[Cd]:s.SRC_ALPHA,[m_]:s.SRC_ALPHA_SATURATE,[h_]:s.DST_COLOR,[d_]:s.DST_ALPHA,[u_]:s.ONE_MINUS_SRC_COLOR,[Nd]:s.ONE_MINUS_SRC_ALPHA,[p_]:s.ONE_MINUS_DST_COLOR,[f_]:s.ONE_MINUS_DST_ALPHA,[g_]:s.CONSTANT_COLOR,[x_]:s.ONE_MINUS_CONSTANT_COLOR,[v_]:s.CONSTANT_ALPHA,[__]:s.ONE_MINUS_CONSTANT_ALPHA};function vt(H,Ae,ge,Ne,we,ve,We,He,kt,Dt){if(H===pr){y===!0&&(De(s.BLEND),y=!1);return}if(y===!1&&(oe(s.BLEND),y=!0),H!==n_){if(H!==v||Dt!==V){if((D!==vs||L!==vs)&&(s.blendEquation(s.FUNC_ADD),D=vs,L=vs),Dt)switch(H){case ua:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ym:s.blendFunc(s.ONE,s.ONE);break;case Sm:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case Mm:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:Ot("WebGLState: Invalid blending: ",H);break}else switch(H){case ua:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case ym:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case Sm:Ot("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Mm:Ot("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ot("WebGLState: Invalid blending: ",H);break}U=null,R=null,N=null,F=null,w.set(0,0,0),P=0,v=H,V=Dt}return}we=we||Ae,ve=ve||ge,We=We||Ne,(Ae!==D||we!==L)&&(s.blendEquationSeparate(nt[Ae],nt[we]),D=Ae,L=we),(ge!==U||Ne!==R||ve!==N||We!==F)&&(s.blendFuncSeparate(ht[ge],ht[Ne],ht[ve],ht[We]),U=ge,R=Ne,N=ve,F=We),(He.equals(w)===!1||kt!==P)&&(s.blendColor(He.r,He.g,He.b,kt),w.copy(He),P=kt),v=H,V=!1}function dt(H,Ae){H.side===fr?De(s.CULL_FACE):oe(s.CULL_FACE);let ge=H.side===Jn;Ae&&(ge=!ge),lt(ge),H.blending===ua&&H.transparent===!1?vt(pr):vt(H.blending,H.blendEquation,H.blendSrc,H.blendDst,H.blendEquationAlpha,H.blendSrcAlpha,H.blendDstAlpha,H.blendColor,H.blendAlpha,H.premultipliedAlpha),u.setFunc(H.depthFunc),u.setTest(H.depthTest),u.setMask(H.depthWrite),l.setMask(H.colorWrite);const Ne=H.stencilWrite;f.setTest(Ne),Ne&&(f.setMask(H.stencilWriteMask),f.setFunc(H.stencilFunc,H.stencilRef,H.stencilFuncMask),f.setOp(H.stencilFail,H.stencilZFail,H.stencilZPass)),Nt(H.polygonOffset,H.polygonOffsetFactor,H.polygonOffsetUnits),H.alphaToCoverage===!0?oe(s.SAMPLE_ALPHA_TO_COVERAGE):De(s.SAMPLE_ALPHA_TO_COVERAGE)}function lt(H){B!==H&&(H?s.frontFace(s.CW):s.frontFace(s.CCW),B=H)}function ut(H){H!==e_?(oe(s.CULL_FACE),H!==j&&(H===_m?s.cullFace(s.BACK):H===t_?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):De(s.CULL_FACE),j=H}function Tt(H){H!==re&&(K&&s.lineWidth(H),re=H)}function Nt(H,Ae,ge){H?(oe(s.POLYGON_OFFSET_FILL),(fe!==Ae||$!==ge)&&(fe=Ae,$=ge,u.getReversed()&&(Ae=-Ae),s.polygonOffset(Ae,ge))):De(s.POLYGON_OFFSET_FILL)}function xt(H){H?oe(s.SCISSOR_TEST):De(s.SCISSOR_TEST)}function St(H){H===void 0&&(H=s.TEXTURE0+se-1),ue!==H&&(s.activeTexture(H),ue=H)}function W(H,Ae,ge){ge===void 0&&(ue===null?ge=s.TEXTURE0+se-1:ge=ue);let Ne=k[ge];Ne===void 0&&(Ne={type:void 0,texture:void 0},k[ge]=Ne),(Ne.type!==H||Ne.texture!==Ae)&&(ue!==ge&&(s.activeTexture(ge),ue=ge),s.bindTexture(H,Ae||pe[H]),Ne.type=H,Ne.texture=Ae)}function Yt(){const H=k[ue];H!==void 0&&H.type!==void 0&&(s.bindTexture(H.type,null),H.type=void 0,H.texture=void 0)}function Mt(){try{s.compressedTexImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function I(){try{s.compressedTexImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function E(){try{s.texSubImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function Z(){try{s.texSubImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function Q(){try{s.compressedTexSubImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function he(){try{s.compressedTexSubImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function Me(){try{s.texStorage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function Ce(){try{s.texStorage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function me(){try{s.texImage2D(...arguments)}catch(H){Ot("WebGLState:",H)}}function xe(){try{s.texImage3D(...arguments)}catch(H){Ot("WebGLState:",H)}}function Pe(H){return S[H]!==void 0?S[H]:s.getParameter(H)}function Fe(H,Ae){S[H]!==Ae&&(s.pixelStorei(H,Ae),S[H]=Ae)}function Ie(H){Xe.equals(H)===!1&&(s.scissor(H.x,H.y,H.z,H.w),Xe.copy(H))}function Re(H){ze.equals(H)===!1&&(s.viewport(H.x,H.y,H.z,H.w),ze.copy(H))}function Ke(H,Ae){let ge=p.get(Ae);ge===void 0&&(ge=new WeakMap,p.set(Ae,ge));let Ne=ge.get(H);Ne===void 0&&(Ne=s.getUniformBlockIndex(Ae,H.name),ge.set(H,Ne))}function et(H,Ae){const Ne=p.get(Ae).get(H);h.get(Ae)!==Ne&&(s.uniformBlockBinding(Ae,Ne,H.__bindingPointIndex),h.set(Ae,Ne))}function st(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),u.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),x={},S={},ue=null,k={},g={},_=new WeakMap,T=[],C=null,y=!1,v=null,D=null,U=null,R=null,L=null,N=null,F=null,w=new yt(0,0,0),P=0,V=!1,B=null,j=null,re=null,fe=null,$=null,Xe.set(0,0,s.canvas.width,s.canvas.height),ze.set(0,0,s.canvas.width,s.canvas.height),l.reset(),u.reset(),f.reset()}return{buffers:{color:l,depth:u,stencil:f},enable:oe,disable:De,bindFramebuffer:Oe,drawBuffers:je,useProgram:Rt,setBlending:vt,setMaterial:dt,setFlipSided:lt,setCullFace:ut,setLineWidth:Tt,setPolygonOffset:Nt,setScissorTest:xt,activeTexture:St,bindTexture:W,unbindTexture:Yt,compressedTexImage2D:Mt,compressedTexImage3D:I,texImage2D:me,texImage3D:xe,pixelStorei:Fe,getParameter:Pe,updateUBOMapping:Ke,uniformBlockBinding:et,texStorage2D:Me,texStorage3D:Ce,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:Q,compressedTexSubImage3D:he,scissor:Ie,viewport:Re,reset:st}}function ST(s,e,t,r,o,l,u){const f=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new rt,x=new WeakMap,S=new Set;let g;const _=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function C(I,E){return T?new OffscreenCanvas(I,E):ec("canvas")}function y(I,E,Z){let Q=1;const he=Mt(I);if((he.width>Z||he.height>Z)&&(Q=Z/Math.max(he.width,he.height)),Q<1)if(typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&I instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&I instanceof ImageBitmap||typeof VideoFrame<"u"&&I instanceof VideoFrame){const Me=Math.floor(Q*he.width),Ce=Math.floor(Q*he.height);g===void 0&&(g=C(Me,Ce));const me=E?C(Me,Ce):g;return me.width=Me,me.height=Ce,me.getContext("2d").drawImage(I,0,0,Me,Ce),ct("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Me+"x"+Ce+")."),me}else return"data"in I&&ct("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),I;return I}function v(I){return I.generateMipmaps}function D(I){s.generateMipmap(I)}function U(I){return I.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:I.isWebGL3DRenderTarget?s.TEXTURE_3D:I.isWebGLArrayRenderTarget||I.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function R(I,E,Z,Q,he,Me=!1){if(I!==null){if(s[I]!==void 0)return s[I];ct("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+I+"'")}let Ce;Q&&(Ce=e.get("EXT_texture_norm16"),Ce||ct("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let me=E;if(E===s.RED&&(Z===s.FLOAT&&(me=s.R32F),Z===s.HALF_FLOAT&&(me=s.R16F),Z===s.UNSIGNED_BYTE&&(me=s.R8),Z===s.UNSIGNED_SHORT&&Ce&&(me=Ce.R16_EXT),Z===s.SHORT&&Ce&&(me=Ce.R16_SNORM_EXT)),E===s.RED_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.R8UI),Z===s.UNSIGNED_SHORT&&(me=s.R16UI),Z===s.UNSIGNED_INT&&(me=s.R32UI),Z===s.BYTE&&(me=s.R8I),Z===s.SHORT&&(me=s.R16I),Z===s.INT&&(me=s.R32I)),E===s.RG&&(Z===s.FLOAT&&(me=s.RG32F),Z===s.HALF_FLOAT&&(me=s.RG16F),Z===s.UNSIGNED_BYTE&&(me=s.RG8),Z===s.UNSIGNED_SHORT&&Ce&&(me=Ce.RG16_EXT),Z===s.SHORT&&Ce&&(me=Ce.RG16_SNORM_EXT)),E===s.RG_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RG8UI),Z===s.UNSIGNED_SHORT&&(me=s.RG16UI),Z===s.UNSIGNED_INT&&(me=s.RG32UI),Z===s.BYTE&&(me=s.RG8I),Z===s.SHORT&&(me=s.RG16I),Z===s.INT&&(me=s.RG32I)),E===s.RGB_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RGB8UI),Z===s.UNSIGNED_SHORT&&(me=s.RGB16UI),Z===s.UNSIGNED_INT&&(me=s.RGB32UI),Z===s.BYTE&&(me=s.RGB8I),Z===s.SHORT&&(me=s.RGB16I),Z===s.INT&&(me=s.RGB32I)),E===s.RGBA_INTEGER&&(Z===s.UNSIGNED_BYTE&&(me=s.RGBA8UI),Z===s.UNSIGNED_SHORT&&(me=s.RGBA16UI),Z===s.UNSIGNED_INT&&(me=s.RGBA32UI),Z===s.BYTE&&(me=s.RGBA8I),Z===s.SHORT&&(me=s.RGBA16I),Z===s.INT&&(me=s.RGBA32I)),E===s.RGB&&(Z===s.UNSIGNED_SHORT&&Ce&&(me=Ce.RGB16_EXT),Z===s.SHORT&&Ce&&(me=Ce.RGB16_SNORM_EXT),Z===s.UNSIGNED_INT_5_9_9_9_REV&&(me=s.RGB9_E5),Z===s.UNSIGNED_INT_10F_11F_11F_REV&&(me=s.R11F_G11F_B10F)),E===s.RGBA){const xe=Me?Ql:Pt.getTransfer(he);Z===s.FLOAT&&(me=s.RGBA32F),Z===s.HALF_FLOAT&&(me=s.RGBA16F),Z===s.UNSIGNED_BYTE&&(me=xe===Ht?s.SRGB8_ALPHA8:s.RGBA8),Z===s.UNSIGNED_SHORT&&Ce&&(me=Ce.RGBA16_EXT),Z===s.SHORT&&Ce&&(me=Ce.RGBA16_SNORM_EXT),Z===s.UNSIGNED_SHORT_4_4_4_4&&(me=s.RGBA4),Z===s.UNSIGNED_SHORT_5_5_5_1&&(me=s.RGB5_A1)}return(me===s.R16F||me===s.R32F||me===s.RG16F||me===s.RG32F||me===s.RGBA16F||me===s.RGBA32F)&&e.get("EXT_color_buffer_float"),me}function L(I,E){let Z;return I?E===null||E===Xi||E===ho?Z=s.DEPTH24_STENCIL8:E===zi?Z=s.DEPTH32F_STENCIL8:E===fo&&(Z=s.DEPTH24_STENCIL8,ct("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Xi||E===ho?Z=s.DEPTH_COMPONENT24:E===zi?Z=s.DEPTH_COMPONENT32F:E===fo&&(Z=s.DEPTH_COMPONENT16),Z}function N(I,E){return v(I)===!0||I.isFramebufferTexture&&I.minFilter!==Tn&&I.minFilter!==Ln?Math.log2(Math.max(E.width,E.height))+1:I.mipmaps!==void 0&&I.mipmaps.length>0?I.mipmaps.length:I.isCompressedTexture&&Array.isArray(I.image)?E.mipmaps.length:1}function F(I){const E=I.target;E.removeEventListener("dispose",F),P(E),E.isVideoTexture&&x.delete(E),E.isHTMLTexture&&S.delete(E)}function w(I){const E=I.target;E.removeEventListener("dispose",w),B(E)}function P(I){const E=r.get(I);if(E.__webglInit===void 0)return;const Z=I.source,Q=_.get(Z);if(Q){const he=Q[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&V(I),Object.keys(Q).length===0&&_.delete(Z)}r.remove(I)}function V(I){const E=r.get(I);s.deleteTexture(E.__webglTexture);const Z=I.source,Q=_.get(Z);delete Q[E.__cacheKey],u.memory.textures--}function B(I){const E=r.get(I);if(I.depthTexture&&(I.depthTexture.dispose(),r.remove(I.depthTexture)),I.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(E.__webglFramebuffer[Q]))for(let he=0;he<E.__webglFramebuffer[Q].length;he++)s.deleteFramebuffer(E.__webglFramebuffer[Q][he]);else s.deleteFramebuffer(E.__webglFramebuffer[Q]);E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer[Q])}else{if(Array.isArray(E.__webglFramebuffer))for(let Q=0;Q<E.__webglFramebuffer.length;Q++)s.deleteFramebuffer(E.__webglFramebuffer[Q]);else s.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&s.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&s.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let Q=0;Q<E.__webglColorRenderbuffer.length;Q++)E.__webglColorRenderbuffer[Q]&&s.deleteRenderbuffer(E.__webglColorRenderbuffer[Q]);E.__webglDepthRenderbuffer&&s.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=I.textures;for(let Q=0,he=Z.length;Q<he;Q++){const Me=r.get(Z[Q]);Me.__webglTexture&&(s.deleteTexture(Me.__webglTexture),u.memory.textures--),r.remove(Z[Q])}r.remove(I)}let j=0;function re(){j=0}function fe(){return j}function $(I){j=I}function se(){const I=j;return I>=o.maxTextures&&ct("WebGLTextures: Trying to use "+I+" texture units while this GPU supports only "+o.maxTextures),j+=1,I}function K(I){const E=[];return E.push(I.wrapS),E.push(I.wrapT),E.push(I.wrapR||0),E.push(I.magFilter),E.push(I.minFilter),E.push(I.anisotropy),E.push(I.internalFormat),E.push(I.format),E.push(I.type),E.push(I.generateMipmaps),E.push(I.premultiplyAlpha),E.push(I.flipY),E.push(I.unpackAlignment),E.push(I.colorSpace),E.join()}function Y(I,E){const Z=r.get(I);if(I.isVideoTexture&&W(I),I.isRenderTargetTexture===!1&&I.isExternalTexture!==!0&&I.version>0&&Z.__version!==I.version){const Q=I.image;if(Q===null)ct("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)ct("WebGLRenderer: Texture marked for update but image is incomplete");else{De(Z,I,E);return}}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,Z.__webglTexture,s.TEXTURE0+E)}function ie(I,E){const Z=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){De(Z,I,E);return}else I.isExternalTexture&&(Z.__webglTexture=I.sourceTexture?I.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,Z.__webglTexture,s.TEXTURE0+E)}function ue(I,E){const Z=r.get(I);if(I.isRenderTargetTexture===!1&&I.version>0&&Z.__version!==I.version){De(Z,I,E);return}t.bindTexture(s.TEXTURE_3D,Z.__webglTexture,s.TEXTURE0+E)}function k(I,E){const Z=r.get(I);if(I.isCubeDepthTexture!==!0&&I.version>0&&Z.__version!==I.version){Oe(Z,I,E);return}t.bindTexture(s.TEXTURE_CUBE_MAP,Z.__webglTexture,s.TEXTURE0+E)}const J={[kd]:s.REPEAT,[hr]:s.CLAMP_TO_EDGE,[Bd]:s.MIRRORED_REPEAT},Le={[Tn]:s.NEAREST,[M_]:s.NEAREST_MIPMAP_NEAREST,[yl]:s.NEAREST_MIPMAP_LINEAR,[Ln]:s.LINEAR,[Xu]:s.LINEAR_MIPMAP_NEAREST,[Ms]:s.LINEAR_MIPMAP_LINEAR},Xe={[w_]:s.NEVER,[N_]:s.ALWAYS,[b_]:s.LESS,[If]:s.LEQUAL,[A_]:s.EQUAL,[Lf]:s.GEQUAL,[R_]:s.GREATER,[C_]:s.NOTEQUAL};function ze(I,E){if(E.type===zi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Ln||E.magFilter===Xu||E.magFilter===yl||E.magFilter===Ms||E.minFilter===Ln||E.minFilter===Xu||E.minFilter===yl||E.minFilter===Ms)&&ct("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(I,s.TEXTURE_WRAP_S,J[E.wrapS]),s.texParameteri(I,s.TEXTURE_WRAP_T,J[E.wrapT]),(I===s.TEXTURE_3D||I===s.TEXTURE_2D_ARRAY)&&s.texParameteri(I,s.TEXTURE_WRAP_R,J[E.wrapR]),s.texParameteri(I,s.TEXTURE_MAG_FILTER,Le[E.magFilter]),s.texParameteri(I,s.TEXTURE_MIN_FILTER,Le[E.minFilter]),E.compareFunction&&(s.texParameteri(I,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(I,s.TEXTURE_COMPARE_FUNC,Xe[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Tn||E.minFilter!==yl&&E.minFilter!==Ms||E.type===zi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||r.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");s.texParameterf(I,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),r.get(E).__currentAnisotropy=E.anisotropy}}}function le(I,E){let Z=!1;I.__webglInit===void 0&&(I.__webglInit=!0,E.addEventListener("dispose",F));const Q=E.source;let he=_.get(Q);he===void 0&&(he={},_.set(Q,he));const Me=K(E);if(Me!==I.__cacheKey){he[Me]===void 0&&(he[Me]={texture:s.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),he[Me].usedTimes++;const Ce=he[I.__cacheKey];Ce!==void 0&&(he[I.__cacheKey].usedTimes--,Ce.usedTimes===0&&V(E)),I.__cacheKey=Me,I.__webglTexture=he[Me].texture}return Z}function pe(I,E,Z){return Math.floor(Math.floor(I/Z)/E)}function oe(I,E,Z,Q){const Me=I.updateRanges;if(Me.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,E.width,E.height,Z,Q,E.data);else{Me.sort((Fe,Ie)=>Fe.start-Ie.start);let Ce=0;for(let Fe=1;Fe<Me.length;Fe++){const Ie=Me[Ce],Re=Me[Fe],Ke=Ie.start+Ie.count,et=pe(Re.start,E.width,4),st=pe(Ie.start,E.width,4);Re.start<=Ke+1&&et===st&&pe(Re.start+Re.count-1,E.width,4)===et?Ie.count=Math.max(Ie.count,Re.start+Re.count-Ie.start):(++Ce,Me[Ce]=Re)}Me.length=Ce+1;const me=t.getParameter(s.UNPACK_ROW_LENGTH),xe=t.getParameter(s.UNPACK_SKIP_PIXELS),Pe=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,E.width);for(let Fe=0,Ie=Me.length;Fe<Ie;Fe++){const Re=Me[Fe],Ke=Math.floor(Re.start/4),et=Math.ceil(Re.count/4),st=Ke%E.width,H=Math.floor(Ke/E.width),Ae=et,ge=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,st),t.pixelStorei(s.UNPACK_SKIP_ROWS,H),t.texSubImage2D(s.TEXTURE_2D,0,st,H,Ae,ge,Z,Q,E.data)}I.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,me),t.pixelStorei(s.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(s.UNPACK_SKIP_ROWS,Pe)}}function De(I,E,Z){let Q=s.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(Q=s.TEXTURE_2D_ARRAY),E.isData3DTexture&&(Q=s.TEXTURE_3D);const he=le(I,E),Me=E.source;t.bindTexture(Q,I.__webglTexture,s.TEXTURE0+Z);const Ce=r.get(Me);if(Me.version!==Ce.__version||he===!0){if(t.activeTexture(s.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=Pt.getPrimaries(Pt.workingColorSpace),Ne=E.colorSpace===qr?null:Pt.getPrimaries(E.colorSpace),we=E.colorSpace===qr||ge===Ne?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,we)}t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=y(E.image,!1,o.maxTextureSize);xe=Yt(E,xe);const Pe=l.convert(E.format,E.colorSpace),Fe=l.convert(E.type);let Ie=R(E.internalFormat,Pe,Fe,E.normalized,E.colorSpace,E.isVideoTexture);ze(Q,E);let Re;const Ke=E.mipmaps,et=E.isVideoTexture!==!0,st=Ce.__version===void 0||he===!0,H=Me.dataReady,Ae=N(E,xe);if(E.isDepthTexture)Ie=L(E.format===Es,E.type),st&&(et?t.texStorage2D(s.TEXTURE_2D,1,Ie,xe.width,xe.height):t.texImage2D(s.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Pe,Fe,null));else if(E.isDataTexture)if(Ke.length>0){et&&st&&t.texStorage2D(s.TEXTURE_2D,Ae,Ie,Ke[0].width,Ke[0].height);for(let ge=0,Ne=Ke.length;ge<Ne;ge++)Re=Ke[ge],et?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Fe,Re.data):t.texImage2D(s.TEXTURE_2D,ge,Ie,Re.width,Re.height,0,Pe,Fe,Re.data);E.generateMipmaps=!1}else et?(st&&t.texStorage2D(s.TEXTURE_2D,Ae,Ie,xe.width,xe.height),H&&oe(E,xe,Pe,Fe)):t.texImage2D(s.TEXTURE_2D,0,Ie,xe.width,xe.height,0,Pe,Fe,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){et&&st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ie,Ke[0].width,Ke[0].height,xe.depth);for(let ge=0,Ne=Ke.length;ge<Ne;ge++)if(Re=Ke[ge],E.format!==Ci)if(Pe!==null)if(et){if(H)if(E.layerUpdates.size>0){const we=n0(Re.width,Re.height,E.format,E.type);for(const ve of E.layerUpdates){const We=Re.data.subarray(ve*we/Re.data.BYTES_PER_ELEMENT,(ve+1)*we/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,ve,Re.width,Re.height,1,Pe,We)}E.clearLayerUpdates()}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,xe.depth,Pe,Re.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Re.width,Re.height,xe.depth,0,Re.data,0,0);else ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else et?H&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,xe.depth,Pe,Fe,Re.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ge,Ie,Re.width,Re.height,xe.depth,0,Pe,Fe,Re.data)}else{et&&st&&t.texStorage2D(s.TEXTURE_2D,Ae,Ie,Ke[0].width,Ke[0].height);for(let ge=0,Ne=Ke.length;ge<Ne;ge++)Re=Ke[ge],E.format!==Ci?Pe!==null?et?H&&t.compressedTexSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Re.data):t.compressedTexImage2D(s.TEXTURE_2D,ge,Ie,Re.width,Re.height,0,Re.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):et?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Re.width,Re.height,Pe,Fe,Re.data):t.texImage2D(s.TEXTURE_2D,ge,Ie,Re.width,Re.height,0,Pe,Fe,Re.data)}else if(E.isDataArrayTexture)if(et){if(st&&t.texStorage3D(s.TEXTURE_2D_ARRAY,Ae,Ie,xe.width,xe.height,xe.depth),H)if(E.layerUpdates.size>0){const ge=n0(xe.width,xe.height,E.format,E.type);for(const Ne of E.layerUpdates){const we=xe.data.subarray(Ne*ge/xe.data.BYTES_PER_ELEMENT,(Ne+1)*ge/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ne,xe.width,xe.height,1,Pe,Fe,we)}E.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Pe,Fe,xe.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Ie,xe.width,xe.height,xe.depth,0,Pe,Fe,xe.data);else if(E.isData3DTexture)et?(st&&t.texStorage3D(s.TEXTURE_3D,Ae,Ie,xe.width,xe.height,xe.depth),H&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Pe,Fe,xe.data)):t.texImage3D(s.TEXTURE_3D,0,Ie,xe.width,xe.height,xe.depth,0,Pe,Fe,xe.data);else if(E.isFramebufferTexture){if(st)if(et)t.texStorage2D(s.TEXTURE_2D,Ae,Ie,xe.width,xe.height);else{let ge=xe.width,Ne=xe.height;for(let we=0;we<Ae;we++)t.texImage2D(s.TEXTURE_2D,we,Ie,ge,Ne,0,Pe,Fe,null),ge>>=1,Ne>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in s){const ge=s.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),xe.parentNode!==ge){ge.appendChild(xe),S.add(E),ge.onpaint=Ne=>{const we=Ne.changedElements;for(const ve of S)we.includes(ve.image)&&(ve.needsUpdate=!0)},ge.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,xe);else{const we=s.RGBA,ve=s.RGBA,We=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,we,ve,We,xe)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(et&&st){const ge=Mt(Ke[0]);t.texStorage2D(s.TEXTURE_2D,Ae,Ie,ge.width,ge.height)}for(let ge=0,Ne=Ke.length;ge<Ne;ge++)Re=Ke[ge],et?H&&t.texSubImage2D(s.TEXTURE_2D,ge,0,0,Pe,Fe,Re):t.texImage2D(s.TEXTURE_2D,ge,Ie,Pe,Fe,Re);E.generateMipmaps=!1}else if(et){if(st){const ge=Mt(xe);t.texStorage2D(s.TEXTURE_2D,Ae,Ie,ge.width,ge.height)}H&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,Pe,Fe,xe)}else t.texImage2D(s.TEXTURE_2D,0,Ie,Pe,Fe,xe);v(E)&&D(Q),Ce.__version=Me.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function Oe(I,E,Z){if(E.image.length!==6)return;const Q=le(I,E),he=E.source;t.bindTexture(s.TEXTURE_CUBE_MAP,I.__webglTexture,s.TEXTURE0+Z);const Me=r.get(he);if(he.version!==Me.__version||Q===!0){t.activeTexture(s.TEXTURE0+Z);const Ce=Pt.getPrimaries(Pt.workingColorSpace),me=E.colorSpace===qr?null:Pt.getPrimaries(E.colorSpace),xe=E.colorSpace===qr||Ce===me?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Pe=E.isCompressedTexture||E.image[0].isCompressedTexture,Fe=E.image[0]&&E.image[0].isDataTexture,Ie=[];for(let ve=0;ve<6;ve++)!Pe&&!Fe?Ie[ve]=y(E.image[ve],!0,o.maxCubemapSize):Ie[ve]=Fe?E.image[ve].image:E.image[ve],Ie[ve]=Yt(E,Ie[ve]);const Re=Ie[0],Ke=l.convert(E.format,E.colorSpace),et=l.convert(E.type),st=R(E.internalFormat,Ke,et,E.normalized,E.colorSpace),H=E.isVideoTexture!==!0,Ae=Me.__version===void 0||Q===!0,ge=he.dataReady;let Ne=N(E,Re);ze(s.TEXTURE_CUBE_MAP,E);let we;if(Pe){H&&Ae&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,st,Re.width,Re.height);for(let ve=0;ve<6;ve++){we=Ie[ve].mipmaps;for(let We=0;We<we.length;We++){const He=we[We];E.format!==Ci?Ke!==null?H?ge&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,He.width,He.height,Ke,He.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,st,He.width,He.height,0,He.data):ct("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,0,0,He.width,He.height,Ke,et,He.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We,st,He.width,He.height,0,Ke,et,He.data)}}}else{if(we=E.mipmaps,H&&Ae){we.length>0&&Ne++;const ve=Mt(Ie[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ne,st,ve.width,ve.height)}for(let ve=0;ve<6;ve++)if(Fe){H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ie[ve].width,Ie[ve].height,Ke,et,Ie[ve].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Ie[ve].width,Ie[ve].height,0,Ke,et,Ie[ve].data);for(let We=0;We<we.length;We++){const kt=we[We].image[ve].image;H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,kt.width,kt.height,Ke,et,kt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,st,kt.width,kt.height,0,Ke,et,kt.data)}}else{H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,0,0,Ke,et,Ie[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0,st,Ke,et,Ie[ve]);for(let We=0;We<we.length;We++){const He=we[We];H?ge&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,0,0,Ke,et,He.image[ve]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+ve,We+1,st,Ke,et,He.image[ve])}}}v(E)&&D(s.TEXTURE_CUBE_MAP),Me.__version=he.version,E.onUpdate&&E.onUpdate(E)}I.__version=E.version}function je(I,E,Z,Q,he,Me){const Ce=l.convert(Z.format,Z.colorSpace),me=l.convert(Z.type),xe=R(Z.internalFormat,Ce,me,Z.normalized,Z.colorSpace),Pe=r.get(E),Fe=r.get(Z);if(Fe.__renderTarget=E,!Pe.__hasExternalTextures){const Ie=Math.max(1,E.width>>Me),Re=Math.max(1,E.height>>Me);he===s.TEXTURE_3D||he===s.TEXTURE_2D_ARRAY?t.texImage3D(he,Me,xe,Ie,Re,E.depth,0,Ce,me,null):t.texImage2D(he,Me,xe,Ie,Re,0,Ce,me,null)}t.bindFramebuffer(s.FRAMEBUFFER,I),St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,Q,he,Fe.__webglTexture,0,xt(E)):(he===s.TEXTURE_2D||he>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,Q,he,Fe.__webglTexture,Me),t.bindFramebuffer(s.FRAMEBUFFER,null)}function Rt(I,E,Z){if(s.bindRenderbuffer(s.RENDERBUFFER,I),E.depthBuffer){const Q=E.depthTexture,he=Q&&Q.isDepthTexture?Q.type:null,Me=L(E.stencilBuffer,he),Ce=E.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;St(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(E),Me,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(E),Me,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,Me,E.width,E.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Ce,s.RENDERBUFFER,I)}else{const Q=E.textures;for(let he=0;he<Q.length;he++){const Me=Q[he],Ce=l.convert(Me.format,Me.colorSpace),me=l.convert(Me.type),xe=R(Me.internalFormat,Ce,me,Me.normalized,Me.colorSpace);St(E)?f.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,xt(E),xe,E.width,E.height):Z?s.renderbufferStorageMultisample(s.RENDERBUFFER,xt(E),xe,E.width,E.height):s.renderbufferStorage(s.RENDERBUFFER,xe,E.width,E.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function nt(I,E,Z){const Q=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,I),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=r.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),Q){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",F)),he.__webglTexture===void 0){he.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,he.__webglTexture),ze(s.TEXTURE_CUBE_MAP,E.depthTexture);const Pe=l.convert(E.depthTexture.format),Fe=l.convert(E.depthTexture.type);let Ie;E.depthTexture.format===xr?Ie=s.DEPTH_COMPONENT24:E.depthTexture.format===Es&&(Ie=s.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ie,E.width,E.height,0,Pe,Fe,null)}}else Y(E.depthTexture,0);const Me=he.__webglTexture,Ce=xt(E),me=Q?s.TEXTURE_CUBE_MAP_POSITIVE_X+Z:s.TEXTURE_2D,xe=E.depthTexture.format===Es?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(E.depthTexture.format===xr)St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,me,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,xe,me,Me,0);else if(E.depthTexture.format===Es)St(E)?f.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,xe,me,Me,0,Ce):s.framebufferTexture2D(s.FRAMEBUFFER,xe,me,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function ht(I){const E=r.get(I),Z=I.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==I.depthTexture){const Q=I.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),Q){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,Q.removeEventListener("dispose",he)};Q.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=Q}if(I.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let Q=0;Q<6;Q++)nt(E.__webglFramebuffer[Q],I,Q);else{const Q=I.texture.mipmaps;Q&&Q.length>0?nt(E.__webglFramebuffer[0],I,0):nt(E.__webglFramebuffer,I,0)}else if(Z){E.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[Q]),E.__webglDepthbuffer[Q]===void 0)E.__webglDepthbuffer[Q]=s.createRenderbuffer(),Rt(E.__webglDepthbuffer[Q],I,!1);else{const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer[Q];s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Me)}}else{const Q=I.texture.mipmaps;if(Q&&Q.length>0?t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=s.createRenderbuffer(),Rt(E.__webglDepthbuffer,I,!1);else{const he=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=E.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,Me),s.framebufferRenderbuffer(s.FRAMEBUFFER,he,s.RENDERBUFFER,Me)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function vt(I,E,Z){const Q=r.get(I);E!==void 0&&je(Q.__webglFramebuffer,I,I.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),Z!==void 0&&ht(I)}function dt(I){const E=I.texture,Z=r.get(I),Q=r.get(E);I.addEventListener("dispose",w);const he=I.textures,Me=I.isWebGLCubeRenderTarget===!0,Ce=he.length>1;if(Ce||(Q.__webglTexture===void 0&&(Q.__webglTexture=s.createTexture()),Q.__version=E.version,u.memory.textures++),Me){Z.__webglFramebuffer=[];for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[me]=[];for(let xe=0;xe<E.mipmaps.length;xe++)Z.__webglFramebuffer[me][xe]=s.createFramebuffer()}else Z.__webglFramebuffer[me]=s.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let me=0;me<E.mipmaps.length;me++)Z.__webglFramebuffer[me]=s.createFramebuffer()}else Z.__webglFramebuffer=s.createFramebuffer();if(Ce)for(let me=0,xe=he.length;me<xe;me++){const Pe=r.get(he[me]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=s.createTexture(),u.memory.textures++)}if(I.samples>0&&St(I)===!1){Z.__webglMultisampledFramebuffer=s.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let me=0;me<he.length;me++){const xe=he[me];Z.__webglColorRenderbuffer[me]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,Z.__webglColorRenderbuffer[me]);const Pe=l.convert(xe.format,xe.colorSpace),Fe=l.convert(xe.type),Ie=R(xe.internalFormat,Pe,Fe,xe.normalized,xe.colorSpace,I.isXRRenderTarget===!0),Re=xt(I);s.renderbufferStorageMultisample(s.RENDERBUFFER,Re,Ie,I.width,I.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+me,s.RENDERBUFFER,Z.__webglColorRenderbuffer[me])}s.bindRenderbuffer(s.RENDERBUFFER,null),I.depthBuffer&&(Z.__webglDepthRenderbuffer=s.createRenderbuffer(),Rt(Z.__webglDepthRenderbuffer,I,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(Me){t.bindTexture(s.TEXTURE_CUBE_MAP,Q.__webglTexture),ze(s.TEXTURE_CUBE_MAP,E);for(let me=0;me<6;me++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)je(Z.__webglFramebuffer[me][xe],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,xe);else je(Z.__webglFramebuffer[me],I,E,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+me,0);v(E)&&D(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let me=0,xe=he.length;me<xe;me++){const Pe=he[me],Fe=r.get(Pe);let Ie=s.TEXTURE_2D;(I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(Ie=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Ie,Fe.__webglTexture),ze(Ie,Pe),je(Z.__webglFramebuffer,I,Pe,s.COLOR_ATTACHMENT0+me,Ie,0),v(Pe)&&D(Ie)}t.unbindTexture()}else{let me=s.TEXTURE_2D;if((I.isWebGL3DRenderTarget||I.isWebGLArrayRenderTarget)&&(me=I.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(me,Q.__webglTexture),ze(me,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)je(Z.__webglFramebuffer[xe],I,E,s.COLOR_ATTACHMENT0,me,xe);else je(Z.__webglFramebuffer,I,E,s.COLOR_ATTACHMENT0,me,0);v(E)&&D(me),t.unbindTexture()}I.depthBuffer&&ht(I)}function lt(I){const E=I.textures;for(let Z=0,Q=E.length;Z<Q;Z++){const he=E[Z];if(v(he)){const Me=U(I),Ce=r.get(he).__webglTexture;t.bindTexture(Me,Ce),D(Me),t.unbindTexture()}}}const ut=[],Tt=[];function Nt(I){if(I.samples>0){if(St(I)===!1){const E=I.textures,Z=I.width,Q=I.height;let he=s.COLOR_BUFFER_BIT;const Me=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Ce=r.get(I),me=E.length>1;if(me)for(let Pe=0;Pe<E.length;Pe++)t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const xe=I.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Pe=0;Pe<E.length;Pe++){if(I.resolveDepthBuffer&&(I.depthBuffer&&(he|=s.DEPTH_BUFFER_BIT),I.stencilBuffer&&I.resolveStencilBuffer&&(he|=s.STENCIL_BUFFER_BIT)),me){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const Fe=r.get(E[Pe]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Fe,0)}s.blitFramebuffer(0,0,Z,Q,0,0,Z,Q,he,s.NEAREST),h===!0&&(ut.length=0,Tt.length=0,ut.push(s.COLOR_ATTACHMENT0+Pe),I.depthBuffer&&I.resolveDepthBuffer===!1&&(ut.push(Me),Tt.push(Me),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Tt)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,ut))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),me)for(let Pe=0;Pe<E.length;Pe++){t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.RENDERBUFFER,Ce.__webglColorRenderbuffer[Pe]);const Fe=r.get(E[Pe]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Ce.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+Pe,s.TEXTURE_2D,Fe,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(I.depthBuffer&&I.resolveDepthBuffer===!1&&h){const E=I.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[E])}}}function xt(I){return Math.min(o.maxSamples,I.samples)}function St(I){const E=r.get(I);return I.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(I){const E=u.render.frame;x.get(I)!==E&&(x.set(I,E),I.update())}function Yt(I,E){const Z=I.colorSpace,Q=I.format,he=I.type;return I.isCompressedTexture===!0||I.isVideoTexture===!0||Z!==Jl&&Z!==qr&&(Pt.getTransfer(Z)===Ht?(Q!==Ci||he!==ai)&&ct("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ot("WebGLTextures: Unsupported texture color space:",Z)),E}function Mt(I){return typeof HTMLImageElement<"u"&&I instanceof HTMLImageElement?(p.width=I.naturalWidth||I.width,p.height=I.naturalHeight||I.height):typeof VideoFrame<"u"&&I instanceof VideoFrame?(p.width=I.displayWidth,p.height=I.displayHeight):(p.width=I.width,p.height=I.height),p}this.allocateTextureUnit=se,this.resetTextureUnits=re,this.getTextureUnits=fe,this.setTextureUnits=$,this.setTexture2D=Y,this.setTexture2DArray=ie,this.setTexture3D=ue,this.setTextureCube=k,this.rebindTextures=vt,this.setupRenderTarget=dt,this.updateRenderTargetMipmap=lt,this.updateMultisampleRenderTarget=Nt,this.setupDepthRenderbuffer=ht,this.setupFrameBufferTexture=je,this.useMultisampledRTT=St,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function MT(s,e){function t(r,o=qr){let l;const u=Pt.getTransfer(o);if(r===ai)return s.UNSIGNED_BYTE;if(r===Af)return s.UNSIGNED_SHORT_4_4_4_4;if(r===Rf)return s.UNSIGNED_SHORT_5_5_5_1;if(r===Y0)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===q0)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===X0)return s.BYTE;if(r===j0)return s.SHORT;if(r===fo)return s.UNSIGNED_SHORT;if(r===bf)return s.INT;if(r===Xi)return s.UNSIGNED_INT;if(r===zi)return s.FLOAT;if(r===gr)return s.HALF_FLOAT;if(r===$0)return s.ALPHA;if(r===K0)return s.RGB;if(r===Ci)return s.RGBA;if(r===xr)return s.DEPTH_COMPONENT;if(r===Es)return s.DEPTH_STENCIL;if(r===Z0)return s.RED;if(r===Cf)return s.RED_INTEGER;if(r===ws)return s.RG;if(r===Nf)return s.RG_INTEGER;if(r===Pf)return s.RGBA_INTEGER;if(r===Xl||r===jl||r===Yl||r===ql)if(u===Ht)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(r===Xl)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(r===Xl)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===jl)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Yl)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===ql)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===zd||r===Vd||r===Hd||r===Gd)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(r===zd)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===Vd)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===Hd)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Gd)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Wd||r===Xd||r===jd||r===Yd||r===qd||r===Kl||r===$d)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(r===Wd||r===Xd)return u===Ht?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(r===jd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(r===Yd)return l.COMPRESSED_R11_EAC;if(r===qd)return l.COMPRESSED_SIGNED_R11_EAC;if(r===Kl)return l.COMPRESSED_RG11_EAC;if(r===$d)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Kd||r===Zd||r===Jd||r===Qd||r===ef||r===tf||r===nf||r===rf||r===sf||r===af||r===of||r===lf||r===cf||r===uf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(r===Kd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Zd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Jd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===Qd)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===ef)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===tf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===nf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===rf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===sf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===af)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===of)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===lf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===cf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===uf)return u===Ht?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===df||r===ff||r===hf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(r===df)return u===Ht?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===ff)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===hf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===pf||r===mf||r===Zl||r===gf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(r===pf)return l.COMPRESSED_RED_RGTC1_EXT;if(r===mf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zl)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===gf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ho?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}const ET=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,TT=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class wT{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new og(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new ji({vertexShader:ET,fragmentShader:TT,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new it(new _o(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class bT extends bs{constructor(e,t){super();const r=this;let o=null,l=1,u=null,f="local-floor",h=1,p=null,x=null,S=null,g=null,_=null,T=null;const C=typeof XRWebGLBinding<"u",y=new wT,v={},D=t.getContextAttributes();let U=null,R=null;const L=[],N=[],F=new rt;let w=null;const P=new si;P.viewport=new sn;const V=new si;V.viewport=new sn;const B=[P,V],j=new Uy;let re=null,fe=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let pe=L[le];return pe===void 0&&(pe=new Qu,L[le]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(le){let pe=L[le];return pe===void 0&&(pe=new Qu,L[le]=pe),pe.getGripSpace()},this.getHand=function(le){let pe=L[le];return pe===void 0&&(pe=new Qu,L[le]=pe),pe.getHandSpace()};function $(le){const pe=N.indexOf(le.inputSource);if(pe===-1)return;const oe=L[pe];oe!==void 0&&(oe.update(le.inputSource,le.frame,p||u),oe.dispatchEvent({type:le.type,data:le.inputSource}))}function se(){o.removeEventListener("select",$),o.removeEventListener("selectstart",$),o.removeEventListener("selectend",$),o.removeEventListener("squeeze",$),o.removeEventListener("squeezestart",$),o.removeEventListener("squeezeend",$),o.removeEventListener("end",se),o.removeEventListener("inputsourceschange",K);for(let le=0;le<L.length;le++){const pe=N[le];pe!==null&&(N[le]=null,L[le].disconnect(pe))}re=null,fe=null,y.reset();for(const le in v)delete v[le];e.setRenderTarget(U),_=null,g=null,S=null,o=null,R=null,ze.stop(),r.isPresenting=!1,e.setPixelRatio(w),e.setSize(F.width,F.height,!1),r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,r.isPresenting===!0&&ct("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){f=le,r.isPresenting===!0&&ct("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(le){p=le},this.getBaseLayer=function(){return g!==null?g:_},this.getBinding=function(){return S===null&&C&&(S=new XRWebGLBinding(o,t)),S},this.getFrame=function(){return T},this.getSession=function(){return o},this.setSession=async function(le){if(o=le,o!==null){if(U=e.getRenderTarget(),o.addEventListener("select",$),o.addEventListener("selectstart",$),o.addEventListener("selectend",$),o.addEventListener("squeeze",$),o.addEventListener("squeezestart",$),o.addEventListener("squeezeend",$),o.addEventListener("end",se),o.addEventListener("inputsourceschange",K),D.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(F),C&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,De=null,Oe=null;D.depth&&(Oe=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,oe=D.stencil?Es:xr,De=D.stencil?ho:Xi);const je={colorFormat:t.RGBA8,depthFormat:Oe,scaleFactor:l};S=this.getBinding(),g=S.createProjectionLayer(je),o.updateRenderState({layers:[g]}),e.setPixelRatio(1),e.setSize(g.textureWidth,g.textureHeight,!1),R=new Gi(g.textureWidth,g.textureHeight,{format:Ci,type:ai,depthTexture:new ma(g.textureWidth,g.textureHeight,De,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:g.ignoreDepthValues===!1,resolveStencilBuffer:g.ignoreDepthValues===!1})}else{const oe={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};_=new XRWebGLLayer(o,t,oe),o.updateRenderState({baseLayer:_}),e.setPixelRatio(1),e.setSize(_.framebufferWidth,_.framebufferHeight,!1),R=new Gi(_.framebufferWidth,_.framebufferHeight,{format:Ci,type:ai,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(h),p=null,u=await o.requestReferenceSpace(f),ze.setContext(o),ze.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function K(le){for(let pe=0;pe<le.removed.length;pe++){const oe=le.removed[pe],De=N.indexOf(oe);De>=0&&(N[De]=null,L[De].disconnect(oe))}for(let pe=0;pe<le.added.length;pe++){const oe=le.added[pe];let De=N.indexOf(oe);if(De===-1){for(let je=0;je<L.length;je++)if(je>=N.length){N.push(oe),De=je;break}else if(N[je]===null){N[je]=oe,De=je;break}if(De===-1)break}const Oe=L[De];Oe&&Oe.connect(oe)}}const Y=new G,ie=new G;function ue(le,pe,oe){Y.setFromMatrixPosition(pe.matrixWorld),ie.setFromMatrixPosition(oe.matrixWorld);const De=Y.distanceTo(ie),Oe=pe.projectionMatrix.elements,je=oe.projectionMatrix.elements,Rt=Oe[14]/(Oe[10]-1),nt=Oe[14]/(Oe[10]+1),ht=(Oe[9]+1)/Oe[5],vt=(Oe[9]-1)/Oe[5],dt=(Oe[8]-1)/Oe[0],lt=(je[8]+1)/je[0],ut=Rt*dt,Tt=Rt*lt,Nt=De/(-dt+lt),xt=Nt*-dt;if(pe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(xt),le.translateZ(Nt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),Oe[10]===-1)le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const St=Rt+Nt,W=nt+Nt,Yt=ut-xt,Mt=Tt+(De-xt),I=ht*nt/W*St,E=vt*nt/W*St;le.projectionMatrix.makePerspective(Yt,Mt,I,E,St,W),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function k(le,pe){pe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(pe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(o===null)return;let pe=le.near,oe=le.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(oe=y.depthFar)),j.near=V.near=P.near=pe,j.far=V.far=P.far=oe,(re!==j.near||fe!==j.far)&&(o.updateRenderState({depthNear:j.near,depthFar:j.far}),re=j.near,fe=j.far),j.layers.mask=le.layers.mask|6,P.layers.mask=j.layers.mask&-5,V.layers.mask=j.layers.mask&-3;const De=le.parent,Oe=j.cameras;k(j,De);for(let je=0;je<Oe.length;je++)k(Oe[je],De);Oe.length===2?ue(j,P,V):j.projectionMatrix.copy(P.projectionMatrix),J(le,j,De)};function J(le,pe,oe){oe===null?le.matrix.copy(pe.matrixWorld):(le.matrix.copy(oe.matrixWorld),le.matrix.invert(),le.matrix.multiply(pe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=vf*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return j},this.getFoveation=function(){if(!(g===null&&_===null))return h},this.setFoveation=function(le){h=le,g!==null&&(g.fixedFoveation=le),_!==null&&_.fixedFoveation!==void 0&&(_.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(j)},this.getCameraTexture=function(le){return v[le]};let Le=null;function Xe(le,pe){if(x=pe.getViewerPose(p||u),T=pe,x!==null){const oe=x.views;_!==null&&(e.setRenderTargetFramebuffer(R,_.framebuffer),e.setRenderTarget(R));let De=!1;oe.length!==j.cameras.length&&(j.cameras.length=0,De=!0);for(let nt=0;nt<oe.length;nt++){const ht=oe[nt];let vt=null;if(_!==null)vt=_.getViewport(ht);else{const lt=S.getViewSubImage(g,ht);vt=lt.viewport,nt===0&&(e.setRenderTargetTextures(R,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(R))}let dt=B[nt];dt===void 0&&(dt=new si,dt.layers.enable(nt),dt.viewport=new sn,B[nt]=dt),dt.matrix.fromArray(ht.transform.matrix),dt.matrix.decompose(dt.position,dt.quaternion,dt.scale),dt.projectionMatrix.fromArray(ht.projectionMatrix),dt.projectionMatrixInverse.copy(dt.projectionMatrix).invert(),dt.viewport.set(vt.x,vt.y,vt.width,vt.height),nt===0&&(j.matrix.copy(dt.matrix),j.matrix.decompose(j.position,j.quaternion,j.scale)),De===!0&&j.cameras.push(dt)}const Oe=o.enabledFeatures;if(Oe&&Oe.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&C){S=r.getBinding();const nt=S.getDepthInformation(oe[0]);nt&&nt.isValid&&nt.texture&&y.init(nt,o.renderState)}if(Oe&&Oe.includes("camera-access")&&C){e.state.unbindTexture(),S=r.getBinding();for(let nt=0;nt<oe.length;nt++){const ht=oe[nt].camera;if(ht){let vt=v[ht];vt||(vt=new og,v[ht]=vt);const dt=S.getCameraImage(ht);vt.sourceTexture=dt}}}}for(let oe=0;oe<L.length;oe++){const De=N[oe],Oe=L[oe];De!==null&&Oe!==void 0&&Oe.update(De,pe,p||u)}Le&&Le(le,pe),pe.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:pe}),T=null}const ze=new hg;ze.setAnimationLoop(Xe),this.setAnimationLoop=function(le){Le=le},this.dispose=function(){}}}const AT=new tn,yg=new gt;yg.set(-1,0,0,0,1,0,0,0,1);function RT(s,e){function t(y,v){y.matrixAutoUpdate===!0&&y.updateMatrix(),v.value.copy(y.matrix)}function r(y,v){v.color.getRGB(y.fogColor.value,ug(s)),v.isFog?(y.fogNear.value=v.near,y.fogFar.value=v.far):v.isFogExp2&&(y.fogDensity.value=v.density)}function o(y,v,D,U,R){v.isNodeMaterial?v.uniformsNeedUpdate=!1:v.isMeshBasicMaterial?l(y,v):v.isMeshLambertMaterial?(l(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshToonMaterial?(l(y,v),S(y,v)):v.isMeshPhongMaterial?(l(y,v),x(y,v),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)):v.isMeshStandardMaterial?(l(y,v),g(y,v),v.isMeshPhysicalMaterial&&_(y,v,R)):v.isMeshMatcapMaterial?(l(y,v),T(y,v)):v.isMeshDepthMaterial?l(y,v):v.isMeshDistanceMaterial?(l(y,v),C(y,v)):v.isMeshNormalMaterial?l(y,v):v.isLineBasicMaterial?(u(y,v),v.isLineDashedMaterial&&f(y,v)):v.isPointsMaterial?h(y,v,D,U):v.isSpriteMaterial?p(y,v):v.isShadowMaterial?(y.color.value.copy(v.color),y.opacity.value=v.opacity):v.isShaderMaterial&&(v.uniformsNeedUpdate=!1)}function l(y,v){y.opacity.value=v.opacity,v.color&&y.diffuse.value.copy(v.color),v.emissive&&y.emissive.value.copy(v.emissive).multiplyScalar(v.emissiveIntensity),v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.bumpMap&&(y.bumpMap.value=v.bumpMap,t(v.bumpMap,y.bumpMapTransform),y.bumpScale.value=v.bumpScale,v.side===Jn&&(y.bumpScale.value*=-1)),v.normalMap&&(y.normalMap.value=v.normalMap,t(v.normalMap,y.normalMapTransform),y.normalScale.value.copy(v.normalScale),v.side===Jn&&y.normalScale.value.negate()),v.displacementMap&&(y.displacementMap.value=v.displacementMap,t(v.displacementMap,y.displacementMapTransform),y.displacementScale.value=v.displacementScale,y.displacementBias.value=v.displacementBias),v.emissiveMap&&(y.emissiveMap.value=v.emissiveMap,t(v.emissiveMap,y.emissiveMapTransform)),v.specularMap&&(y.specularMap.value=v.specularMap,t(v.specularMap,y.specularMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest);const D=e.get(v),U=D.envMap,R=D.envMapRotation;U&&(y.envMap.value=U,y.envMapRotation.value.setFromMatrix4(AT.makeRotationFromEuler(R)).transpose(),U.isCubeTexture&&U.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(yg),y.reflectivity.value=v.reflectivity,y.ior.value=v.ior,y.refractionRatio.value=v.refractionRatio),v.lightMap&&(y.lightMap.value=v.lightMap,y.lightMapIntensity.value=v.lightMapIntensity,t(v.lightMap,y.lightMapTransform)),v.aoMap&&(y.aoMap.value=v.aoMap,y.aoMapIntensity.value=v.aoMapIntensity,t(v.aoMap,y.aoMapTransform))}function u(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform))}function f(y,v){y.dashSize.value=v.dashSize,y.totalSize.value=v.dashSize+v.gapSize,y.scale.value=v.scale}function h(y,v,D,U){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.size.value=v.size*D,y.scale.value=U*.5,v.map&&(y.map.value=v.map,t(v.map,y.uvTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function p(y,v){y.diffuse.value.copy(v.color),y.opacity.value=v.opacity,y.rotation.value=v.rotation,v.map&&(y.map.value=v.map,t(v.map,y.mapTransform)),v.alphaMap&&(y.alphaMap.value=v.alphaMap,t(v.alphaMap,y.alphaMapTransform)),v.alphaTest>0&&(y.alphaTest.value=v.alphaTest)}function x(y,v){y.specular.value.copy(v.specular),y.shininess.value=Math.max(v.shininess,1e-4)}function S(y,v){v.gradientMap&&(y.gradientMap.value=v.gradientMap)}function g(y,v){y.metalness.value=v.metalness,v.metalnessMap&&(y.metalnessMap.value=v.metalnessMap,t(v.metalnessMap,y.metalnessMapTransform)),y.roughness.value=v.roughness,v.roughnessMap&&(y.roughnessMap.value=v.roughnessMap,t(v.roughnessMap,y.roughnessMapTransform)),v.envMap&&(y.envMapIntensity.value=v.envMapIntensity)}function _(y,v,D){y.ior.value=v.ior,v.sheen>0&&(y.sheenColor.value.copy(v.sheenColor).multiplyScalar(v.sheen),y.sheenRoughness.value=v.sheenRoughness,v.sheenColorMap&&(y.sheenColorMap.value=v.sheenColorMap,t(v.sheenColorMap,y.sheenColorMapTransform)),v.sheenRoughnessMap&&(y.sheenRoughnessMap.value=v.sheenRoughnessMap,t(v.sheenRoughnessMap,y.sheenRoughnessMapTransform))),v.clearcoat>0&&(y.clearcoat.value=v.clearcoat,y.clearcoatRoughness.value=v.clearcoatRoughness,v.clearcoatMap&&(y.clearcoatMap.value=v.clearcoatMap,t(v.clearcoatMap,y.clearcoatMapTransform)),v.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=v.clearcoatRoughnessMap,t(v.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),v.clearcoatNormalMap&&(y.clearcoatNormalMap.value=v.clearcoatNormalMap,t(v.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(v.clearcoatNormalScale),v.side===Jn&&y.clearcoatNormalScale.value.negate())),v.dispersion>0&&(y.dispersion.value=v.dispersion),v.iridescence>0&&(y.iridescence.value=v.iridescence,y.iridescenceIOR.value=v.iridescenceIOR,y.iridescenceThicknessMinimum.value=v.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=v.iridescenceThicknessRange[1],v.iridescenceMap&&(y.iridescenceMap.value=v.iridescenceMap,t(v.iridescenceMap,y.iridescenceMapTransform)),v.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=v.iridescenceThicknessMap,t(v.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),v.transmission>0&&(y.transmission.value=v.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),v.transmissionMap&&(y.transmissionMap.value=v.transmissionMap,t(v.transmissionMap,y.transmissionMapTransform)),y.thickness.value=v.thickness,v.thicknessMap&&(y.thicknessMap.value=v.thicknessMap,t(v.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=v.attenuationDistance,y.attenuationColor.value.copy(v.attenuationColor)),v.anisotropy>0&&(y.anisotropyVector.value.set(v.anisotropy*Math.cos(v.anisotropyRotation),v.anisotropy*Math.sin(v.anisotropyRotation)),v.anisotropyMap&&(y.anisotropyMap.value=v.anisotropyMap,t(v.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=v.specularIntensity,y.specularColor.value.copy(v.specularColor),v.specularColorMap&&(y.specularColorMap.value=v.specularColorMap,t(v.specularColorMap,y.specularColorMapTransform)),v.specularIntensityMap&&(y.specularIntensityMap.value=v.specularIntensityMap,t(v.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,v){v.matcap&&(y.matcap.value=v.matcap)}function C(y,v){const D=e.get(v).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:o}}function CT(s,e,t,r){let o={},l={},u=[];const f=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function h(R,L){const N=L.program;r.uniformBlockBinding(R,N)}function p(R,L){let N=o[R.id];N===void 0&&(y(R),N=x(R),o[R.id]=N,R.addEventListener("dispose",D));const F=L.program;r.updateUBOMapping(R,F);const w=e.render.frame;l[R.id]!==w&&(g(R),l[R.id]=w)}function x(R){const L=S();R.__bindingPointIndex=L;const N=s.createBuffer(),F=R.__size,w=R.usage;return s.bindBuffer(s.UNIFORM_BUFFER,N),s.bufferData(s.UNIFORM_BUFFER,F,w),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,L,N),N}function S(){for(let R=0;R<f;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ot("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function g(R){const L=o[R.id],N=R.uniforms,F=R.__cache;s.bindBuffer(s.UNIFORM_BUFFER,L);for(let w=0,P=N.length;w<P;w++){const V=N[w];if(Array.isArray(V))for(let B=0,j=V.length;B<j;B++)_(V[B],w,B,F);else _(V,w,0,F)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function _(R,L,N,F){if(C(R,L,N,F)===!0){const w=R.__offset,P=R.value;if(Array.isArray(P)){let V=0;for(let B=0;B<P.length;B++){const j=P[B],re=v(j);T(j,R.__data,V),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(V+=re.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(P,R.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,w,R.__data)}}function T(R,L,N){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,N)}function C(R,L,N,F){const w=R.value,P=L+"_"+N;if(F[P]===void 0)return typeof w=="number"||typeof w=="boolean"?F[P]=w:ArrayBuffer.isView(w)?F[P]=w.slice():F[P]=w.clone(),!0;{const V=F[P];if(typeof w=="number"||typeof w=="boolean"){if(V!==w)return F[P]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(V.equals(w)===!1)return V.copy(w),!0}}return!1}function y(R){const L=R.uniforms;let N=0;const F=16;for(let P=0,V=L.length;P<V;P++){const B=Array.isArray(L[P])?L[P]:[L[P]];for(let j=0,re=B.length;j<re;j++){const fe=B[j],$=Array.isArray(fe.value)?fe.value:[fe.value];for(let se=0,K=$.length;se<K;se++){const Y=$[se],ie=v(Y),ue=N%F,k=ue%ie.boundary,J=ue+k;N+=k,J!==0&&F-J<ie.storage&&(N+=F-J),fe.__data=new Float32Array(ie.storage/Float32Array.BYTES_PER_ELEMENT),fe.__offset=N,N+=ie.storage}}}const w=N%F;return w>0&&(N+=F-w),R.__size=N,R.__cache={},this}function v(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?ct("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):ct("WebGLRenderer: Unsupported uniform value type.",R),L}function D(R){const L=R.target;L.removeEventListener("dispose",D);const N=u.indexOf(L.__bindingPointIndex);u.splice(N,1),s.deleteBuffer(o[L.id]),delete o[L.id],delete l[L.id]}function U(){for(const R in o)s.deleteBuffer(o[R]);u=[],o={},l={}}return{bind:h,update:p,dispose:U}}const NT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ki=null;function PT(){return ki===null&&(ki=new ty(NT,16,16,ws,gr),ki.name="DFG_LUT",ki.minFilter=Ln,ki.magFilter=Ln,ki.wrapS=hr,ki.wrapT=hr,ki.generateMipmaps=!1,ki.needsUpdate=!0),ki}class IT{constructor(e={}){const{canvas:t=I_(),context:r=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:f=!1,premultipliedAlpha:h=!0,preserveDrawingBuffer:p=!1,powerPreference:x="default",failIfMajorPerformanceCaveat:S=!1,reversedDepthBuffer:g=!1,outputBufferType:_=ai}=e;this.isWebGLRenderer=!0;let T;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=r.getContextAttributes().alpha}else T=u;const C=_,y=new Set([Pf,Nf,Cf]),v=new Set([ai,Xi,fo,ho,Af,Rf]),D=new Uint32Array(4),U=new Int32Array(4),R=new G;let L=null,N=null;const F=[],w=[];let P=null;this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Hi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let B=!1,j=null,re=null,fe=null,$=null;this._outputColorSpace=pi;let se=0,K=0,Y=null,ie=-1,ue=null;const k=new sn,J=new sn;let Le=null;const Xe=new yt(0);let ze=0,le=t.width,pe=t.height,oe=1,De=null,Oe=null;const je=new sn(0,0,le,pe),Rt=new sn(0,0,le,pe);let nt=!1;const ht=new Uf;let vt=!1,dt=!1;const lt=new tn,ut=new G,Tt=new sn,Nt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let xt=!1;function St(){return Y===null?oe:1}let W=r;function Yt(A,q){return t.getContext(A,q)}try{const A={alpha:!0,depth:o,stencil:l,antialias:f,premultipliedAlpha:h,preserveDrawingBuffer:p,powerPreference:x,failIfMajorPerformanceCaveat:S};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${wf}`),t.addEventListener("webglcontextlost",kt,!1),t.addEventListener("webglcontextrestored",Dt,!1),t.addEventListener("webglcontextcreationerror",an,!1),W===null){const q="webgl2";if(W=Yt(q,A),W===null)throw Yt(q)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}}catch(A){throw Ot("WebGLRenderer: "+A.message),A}let Mt,I,E,Z,Q,he,Me,Ce,me,xe,Pe,Fe,Ie,Re,Ke,et,st,H,Ae,ge,Ne,we,ve;function We(){Mt=new PE(W),Mt.init(),Ne=new MT(W,Mt),I=new EE(W,Mt,e,Ne),E=new yT(W,Mt),I.reversedDepthBuffer&&g&&E.buffers.depth.setReversed(!0),re=W.createFramebuffer(),fe=W.createFramebuffer(),$=W.createFramebuffer(),Z=new DE(W),Q=new aT,he=new ST(W,Mt,E,Q,I,Ne,Z),Me=new NE(V),Ce=new ky(W),we=new SE(W,Ce),me=new IE(W,Ce,Z,we),xe=new OE(W,me,Ce,we,Z),H=new UE(W,I,he),Ke=new TE(Q),Pe=new sT(V,Me,Mt,I,we,Ke),Fe=new RT(V,Q),Ie=new lT,Re=new pT(Mt),st=new yE(V,Me,E,xe,T,h),et=new _T(V,xe,I),ve=new CT(W,Z,I,E),Ae=new ME(W,Mt,Z),ge=new LE(W,Mt,Z),Z.programs=Pe.programs,V.capabilities=I,V.extensions=Mt,V.properties=Q,V.renderLists=Ie,V.shadowMap=et,V.state=E,V.info=Z}We(),C!==ai&&(P=new kE(C,t.width,t.height,f,o,l));const He=new bT(V,W);this.xr=He,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const A=Mt.get("WEBGL_lose_context");A&&A.loseContext()},this.forceContextRestore=function(){const A=Mt.get("WEBGL_lose_context");A&&A.restoreContext()},this.getPixelRatio=function(){return oe},this.setPixelRatio=function(A){A!==void 0&&(oe=A,this.setSize(le,pe,!1))},this.getSize=function(A){return A.set(le,pe)},this.setSize=function(A,q,ce=!0){if(He.isPresenting){ct("WebGLRenderer: Can't change size while VR device is presenting.");return}le=A,pe=q,t.width=Math.floor(A*oe),t.height=Math.floor(q*oe),ce===!0&&(t.style.width=A+"px",t.style.height=q+"px"),P!==null&&P.setSize(t.width,t.height),this.setViewport(0,0,A,q)},this.getDrawingBufferSize=function(A){return A.set(le*oe,pe*oe).floor()},this.setDrawingBufferSize=function(A,q,ce){le=A,pe=q,oe=ce,t.width=Math.floor(A*ce),t.height=Math.floor(q*ce),this.setViewport(0,0,A,q)},this.setEffects=function(A){if(C===ai){Ot("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(A){for(let q=0;q<A.length;q++)if(A[q].isOutputPass===!0){ct("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}P.setEffects(A||[])},this.getCurrentViewport=function(A){return A.copy(k)},this.getViewport=function(A){return A.copy(je)},this.setViewport=function(A,q,ce,ne){A.isVector4?je.set(A.x,A.y,A.z,A.w):je.set(A,q,ce,ne),E.viewport(k.copy(je).multiplyScalar(oe).round())},this.getScissor=function(A){return A.copy(Rt)},this.setScissor=function(A,q,ce,ne){A.isVector4?Rt.set(A.x,A.y,A.z,A.w):Rt.set(A,q,ce,ne),E.scissor(J.copy(Rt).multiplyScalar(oe).round())},this.getScissorTest=function(){return nt},this.setScissorTest=function(A){E.setScissorTest(nt=A)},this.setOpaqueSort=function(A){De=A},this.setTransparentSort=function(A){Oe=A},this.getClearColor=function(A){return A.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(A=!0,q=!0,ce=!0){let ne=0;if(A){let ee=!1;if(Y!==null){const Ee=Y.texture.format;ee=y.has(Ee)}if(ee){const Ee=Y.texture.type,Ve=v.has(Ee),be=st.getClearColor(),qe=st.getClearAlpha(),Qe=be.r,pt=be.g,mt=be.b;Ve?(D[0]=Qe,D[1]=pt,D[2]=mt,D[3]=qe,W.clearBufferuiv(W.COLOR,0,D)):(U[0]=Qe,U[1]=pt,U[2]=mt,U[3]=qe,W.clearBufferiv(W.COLOR,0,U))}else ne|=W.COLOR_BUFFER_BIT}q&&(ne|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ce&&(ne|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ne!==0&&W.clear(ne)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(A){A.setRenderer(this),j=A},this.dispose=function(){t.removeEventListener("webglcontextlost",kt,!1),t.removeEventListener("webglcontextrestored",Dt,!1),t.removeEventListener("webglcontextcreationerror",an,!1),st.dispose(),Ie.dispose(),Re.dispose(),Q.dispose(),Me.dispose(),xe.dispose(),we.dispose(),ve.dispose(),Pe.dispose(),He.dispose(),He.removeEventListener("sessionstart",As),He.removeEventListener("sessionend",Jr),fn.stop()};function kt(A){A.preventDefault(),Am("WebGLRenderer: Context Lost."),B=!0}function Dt(){Am("WebGLRenderer: Context Restored."),B=!1;const A=Z.autoReset,q=et.enabled,ce=et.autoUpdate,ne=et.needsUpdate,ee=et.type;We(),Z.autoReset=A,et.enabled=q,et.autoUpdate=ce,et.needsUpdate=ne,et.type=ee}function an(A){Ot("WebGLRenderer: A WebGL context could not be created. Reason: ",A.statusMessage)}function Un(A){const q=A.target;q.removeEventListener("dispose",Un),Yi(q)}function Yi(A){qi(A),Q.remove(A)}function qi(A){const q=Q.get(A).programs;q!==void 0&&(q.forEach(function(ce){Pe.releaseProgram(ce)}),A.isShaderMaterial&&Pe.releaseShaderCache(A))}this.renderBufferDirect=function(A,q,ce,ne,ee,Ee){q===null&&(q=Nt);const Ve=ee.isMesh&&ee.matrixWorld.determinantAffine()<0,be=Ct(A,q,ce,ne,ee);E.setMaterial(ne,Ve);let qe=ce.index,Qe=1;if(ne.wireframe===!0){if(qe=me.getWireframeAttribute(ce),qe===void 0)return;Qe=2}const pt=ce.drawRange,mt=ce.attributes.position;let Ze=pt.start*Qe,Lt=(pt.start+pt.count)*Qe;Ee!==null&&(Ze=Math.max(Ze,Ee.start*Qe),Lt=Math.min(Lt,(Ee.start+Ee.count)*Qe)),qe!==null?(Ze=Math.max(Ze,0),Lt=Math.min(Lt,qe.count)):mt!=null&&(Ze=Math.max(Ze,0),Lt=Math.min(Lt,mt.count));const Wt=Lt-Ze;if(Wt<0||Wt===1/0)return;we.setup(ee,ne,be,ce,qe);let Qt,zt=Ae;if(qe!==null&&(Qt=Ce.get(qe),zt=ge,zt.setIndex(Qt)),ee.isMesh)ne.wireframe===!0?(E.setLineWidth(ne.wireframeLinewidth*St()),zt.setMode(W.LINES)):zt.setMode(W.TRIANGLES);else if(ee.isLine){let cn=ne.linewidth;cn===void 0&&(cn=1),E.setLineWidth(cn*St()),ee.isLineSegments?zt.setMode(W.LINES):ee.isLineLoop?zt.setMode(W.LINE_LOOP):zt.setMode(W.LINE_STRIP)}else ee.isPoints?zt.setMode(W.POINTS):ee.isSprite&&zt.setMode(W.TRIANGLES);if(ee.isBatchedMesh)if(Mt.get("WEBGL_multi_draw"))zt.renderMultiDraw(ee._multiDrawStarts,ee._multiDrawCounts,ee._multiDrawCount);else{const cn=ee._multiDrawStarts,ke=ee._multiDrawCounts,Sn=ee._multiDrawCount,Et=qe?Ce.get(qe).bytesPerElement:1,Vn=Q.get(ne).currentProgram.getUniforms();for(let Hn=0;Hn<Sn;Hn++)Vn.setValue(W,"_gl_DrawID",Hn),zt.render(cn[Hn]/Et,ke[Hn])}else if(ee.isInstancedMesh)zt.renderInstances(Ze,Wt,ee.count);else if(ce.isInstancedBufferGeometry){const cn=ce._maxInstanceCount!==void 0?ce._maxInstanceCount:1/0,ke=Math.min(ce.instanceCount,cn);zt.renderInstances(Ze,Wt,ke)}else zt.render(Ze,Wt)};function $i(A,q,ce){A.transparent===!0&&A.side===fr&&A.forceSinglePass===!1?(A.side=Jn,A.needsUpdate=!0,Pi(A,q,ce),A.side=Kr,A.needsUpdate=!0,Pi(A,q,ce),A.side=fr):Pi(A,q,ce)}this.compile=function(A,q,ce=null){ce===null&&(ce=A),N=Re.get(ce),N.init(q),w.push(N),ce.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),A!==ce&&A.traverseVisible(function(ee){ee.isLight&&ee.layers.test(q.layers)&&(N.pushLight(ee),ee.castShadow&&N.pushShadow(ee))}),N.setupLights();const ne=new Set;return A.traverse(function(ee){if(!(ee.isMesh||ee.isPoints||ee.isLine||ee.isSprite))return;const Ee=ee.material;if(Ee)if(Array.isArray(Ee))for(let Ve=0;Ve<Ee.length;Ve++){const be=Ee[Ve];$i(be,ce,ee),ne.add(be)}else $i(Ee,ce,ee),ne.add(Ee)}),N=w.pop(),ne},this.compileAsync=function(A,q,ce=null){const ne=this.compile(A,q,ce);return new Promise(ee=>{function Ee(){if(ne.forEach(function(Ve){Q.get(Ve).currentProgram.isReady()&&ne.delete(Ve)}),ne.size===0){ee(A);return}setTimeout(Ee,10)}Mt.get("KHR_parallel_shader_compile")!==null?Ee():setTimeout(Ee,10)})};let Ki=null;function ya(A){Ki&&Ki(A)}function As(){fn.stop()}function Jr(){fn.start()}const fn=new hg;fn.setAnimationLoop(ya),typeof self<"u"&&fn.setContext(self),this.setAnimationLoop=function(A){Ki=A,He.setAnimationLoop(A),A===null?fn.stop():fn.start()},He.addEventListener("sessionstart",As),He.addEventListener("sessionend",Jr),this.render=function(A,q){if(q!==void 0&&q.isCamera!==!0){Ot("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;j!==null&&j.renderStart(A,q);const ce=He.enabled===!0&&He.isPresenting===!0,ne=P!==null&&(Y===null||ce)&&P.begin(V,Y);if(A.matrixWorldAutoUpdate===!0&&A.updateMatrixWorld(),q.parent===null&&q.matrixWorldAutoUpdate===!0&&q.updateMatrixWorld(),He.enabled===!0&&He.isPresenting===!0&&(P===null||P.isCompositing()===!1)&&(He.cameraAutoUpdate===!0&&He.updateCamera(q),q=He.getCamera()),A.isScene===!0&&A.onBeforeRender(V,A,q,Y),N=Re.get(A,w.length),N.init(q),N.state.textureUnits=he.getTextureUnits(),w.push(N),lt.multiplyMatrices(q.projectionMatrix,q.matrixWorldInverse),ht.setFromProjectionMatrix(lt,Vi,q.reversedDepth),dt=this.localClippingEnabled,vt=Ke.init(this.clippingPlanes,dt),L=Ie.get(A,F.length),L.init(),F.push(L),He.enabled===!0&&He.isPresenting===!0){const Ve=V.xr.getDepthSensingMesh();Ve!==null&&Zi(Ve,q,-1/0,V.sortObjects)}Zi(A,q,0,V.sortObjects),L.finish(),V.sortObjects===!0&&L.sort(De,Oe,q.reversedDepth),xt=He.enabled===!1||He.isPresenting===!1||He.hasDepthSensing()===!1,xt&&st.addToRenderList(L,A),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),vt===!0&&Ke.beginShadows();const ee=N.state.shadowsArray;if(et.render(ee,A,q),vt===!0&&Ke.endShadows(),(ne&&P.hasRenderPass())===!1){const Ve=L.opaque,be=L.transmissive;if(N.setupLights(),q.isArrayCamera){const qe=q.cameras;if(be.length>0)for(let Qe=0,pt=qe.length;Qe<pt;Qe++){const mt=qe[Qe];Qr(Ve,be,A,mt)}xt&&st.render(A);for(let Qe=0,pt=qe.length;Qe<pt;Qe++){const mt=qe[Qe];_r(L,A,mt,mt.viewport)}}else be.length>0&&Qr(Ve,be,A,q),xt&&st.render(A),_r(L,A,q)}Y!==null&&K===0&&(he.updateMultisampleRenderTarget(Y),he.updateRenderTargetMipmap(Y)),ne&&P.end(V),A.isScene===!0&&A.onAfterRender(V,A,q),we.resetDefaultState(),ie=-1,ue=null,w.pop(),w.length>0?(N=w[w.length-1],he.setTextureUnits(N.state.textureUnits),vt===!0&&Ke.setGlobalState(V.clippingPlanes,N.state.camera)):N=null,F.pop(),F.length>0?L=F[F.length-1]:L=null,j!==null&&j.renderEnd()};function Zi(A,q,ce,ne){if(A.visible===!1)return;if(A.layers.test(q.layers)){if(A.isGroup)ce=A.renderOrder;else if(A.isLOD)A.autoUpdate===!0&&A.update(q);else if(A.isLightProbeGrid)N.pushLightProbeGrid(A);else if(A.isLight)N.pushLight(A),A.castShadow&&N.pushShadow(A);else if(A.isSprite){if(!A.frustumCulled||ht.intersectsSprite(A)){ne&&Tt.setFromMatrixPosition(A.matrixWorld).applyMatrix4(lt);const Ve=xe.update(A),be=A.material;be.visible&&L.push(A,Ve,be,ce,Tt.z,null)}}else if((A.isMesh||A.isLine||A.isPoints)&&(!A.frustumCulled||ht.intersectsObject(A))){const Ve=xe.update(A),be=A.material;if(ne&&(A.boundingSphere!==void 0?(A.boundingSphere===null&&A.computeBoundingSphere(),Tt.copy(A.boundingSphere.center)):(Ve.boundingSphere===null&&Ve.computeBoundingSphere(),Tt.copy(Ve.boundingSphere.center)),Tt.applyMatrix4(A.matrixWorld).applyMatrix4(lt)),Array.isArray(be)){const qe=Ve.groups;for(let Qe=0,pt=qe.length;Qe<pt;Qe++){const mt=qe[Qe],Ze=be[mt.materialIndex];Ze&&Ze.visible&&L.push(A,Ve,Ze,ce,Tt.z,mt)}}else be.visible&&L.push(A,Ve,be,ce,Tt.z,null)}}const Ee=A.children;for(let Ve=0,be=Ee.length;Ve<be;Ve++)Zi(Ee[Ve],q,ce,ne)}function _r(A,q,ce,ne){const{opaque:ee,transmissive:Ee,transparent:Ve}=A;N.setupLightsView(ce),vt===!0&&Ke.setGlobalState(V.clippingPlanes,ce),ne&&E.viewport(k.copy(ne)),ee.length>0&&Ni(ee,q,ce),Ee.length>0&&Ni(Ee,q,ce),Ve.length>0&&Ni(Ve,q,ce),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Qr(A,q,ce,ne){if((ce.isScene===!0?ce.overrideMaterial:null)!==null)return;if(N.state.transmissionRenderTarget[ne.id]===void 0){const Ze=Mt.has("EXT_color_buffer_half_float")||Mt.has("EXT_color_buffer_float");N.state.transmissionRenderTarget[ne.id]=new Gi(1,1,{generateMipmaps:!0,type:Ze?gr:ai,minFilter:Ms,samples:Math.max(4,I.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Pt.workingColorSpace})}const Ee=N.state.transmissionRenderTarget[ne.id],Ve=ne.viewport||k;Ee.setSize(Ve.z*V.transmissionResolutionScale,Ve.w*V.transmissionResolutionScale);const be=V.getRenderTarget(),qe=V.getActiveCubeFace(),Qe=V.getActiveMipmapLevel();V.setRenderTarget(Ee),V.getClearColor(Xe),ze=V.getClearAlpha(),ze<1&&V.setClearColor(16777215,.5),V.clear(),xt&&st.render(ce);const pt=V.toneMapping;V.toneMapping=Hi;const mt=ne.viewport;if(ne.viewport!==void 0&&(ne.viewport=void 0),N.setupLightsView(ne),vt===!0&&Ke.setGlobalState(V.clippingPlanes,ne),Ni(A,ce,ne),he.updateMultisampleRenderTarget(Ee),he.updateRenderTargetMipmap(Ee),Mt.has("WEBGL_multisampled_render_to_texture")===!1){let Ze=!1;for(let Lt=0,Wt=q.length;Lt<Wt;Lt++){const Qt=q[Lt],{object:zt,geometry:cn,material:ke,group:Sn}=Qt;if(ke.side===fr&&zt.layers.test(ne.layers)){const Et=ke.side;ke.side=Jn,ke.needsUpdate=!0,yr(zt,ce,ne,cn,ke,Sn),ke.side=Et,ke.needsUpdate=!0,Ze=!0}}Ze===!0&&(he.updateMultisampleRenderTarget(Ee),he.updateRenderTargetMipmap(Ee))}V.setRenderTarget(be,qe,Qe),V.setClearColor(Xe,ze),mt!==void 0&&(ne.viewport=mt),V.toneMapping=pt}function Ni(A,q,ce){const ne=q.isScene===!0?q.overrideMaterial:null;for(let ee=0,Ee=A.length;ee<Ee;ee++){const Ve=A[ee],{object:be,geometry:qe,group:Qe}=Ve;let pt=Ve.material;pt.allowOverride===!0&&ne!==null&&(pt=ne),be.layers.test(ce.layers)&&yr(be,q,ce,qe,pt,Qe)}}function yr(A,q,ce,ne,ee,Ee){A.onBeforeRender(V,q,ce,ne,ee,Ee),A.modelViewMatrix.multiplyMatrices(ce.matrixWorldInverse,A.matrixWorld),A.normalMatrix.getNormalMatrix(A.modelViewMatrix),ee.onBeforeRender(V,q,ce,ne,A,Ee),ee.transparent===!0&&ee.side===fr&&ee.forceSinglePass===!1?(ee.side=Jn,ee.needsUpdate=!0,V.renderBufferDirect(ce,q,ne,ee,A,Ee),ee.side=Kr,ee.needsUpdate=!0,V.renderBufferDirect(ce,q,ne,ee,A,Ee),ee.side=fr):V.renderBufferDirect(ce,q,ne,ee,A,Ee),A.onAfterRender(V,q,ce,ne,ee,Ee)}function Pi(A,q,ce){q.isScene!==!0&&(q=Nt);const ne=Q.get(A),ee=N.state.lights,Ee=N.state.shadowsArray,Ve=ee.state.version,be=Pe.getParameters(A,ee.state,Ee,q,ce,N.state.lightProbeGridArray),qe=Pe.getProgramCacheKey(be);let Qe=ne.programs;ne.environment=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?q.environment:null,ne.fog=q.fog;const pt=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap;ne.envMap=Me.get(A.envMap||ne.environment,pt),ne.envMapRotation=ne.environment!==null&&A.envMap===null?q.environmentRotation:A.envMapRotation,Qe===void 0&&(A.addEventListener("dispose",Un),Qe=new Map,ne.programs=Qe);let mt=Qe.get(qe);if(mt!==void 0){if(ne.currentProgram===mt&&ne.lightsStateVersion===Ve)return It(A,be),mt}else be.uniforms=Pe.getUniforms(A),j!==null&&A.isNodeMaterial&&j.build(A,ce,be),A.onBeforeCompile(be,V),mt=Pe.acquireProgram(be,qe),Qe.set(qe,mt),ne.uniforms=be.uniforms;const Ze=ne.uniforms;return(!A.isShaderMaterial&&!A.isRawShaderMaterial||A.clipping===!0)&&(Ze.clippingPlanes=Ke.uniform),It(A,be),ne.needsLights=gi(A),ne.lightsStateVersion=Ve,ne.needsLights&&(Ze.ambientLightColor.value=ee.state.ambient,Ze.lightProbe.value=ee.state.probe,Ze.directionalLights.value=ee.state.directional,Ze.directionalLightShadows.value=ee.state.directionalShadow,Ze.spotLights.value=ee.state.spot,Ze.spotLightShadows.value=ee.state.spotShadow,Ze.rectAreaLights.value=ee.state.rectArea,Ze.ltc_1.value=ee.state.rectAreaLTC1,Ze.ltc_2.value=ee.state.rectAreaLTC2,Ze.pointLights.value=ee.state.point,Ze.pointLightShadows.value=ee.state.pointShadow,Ze.hemisphereLights.value=ee.state.hemi,Ze.directionalShadowMatrix.value=ee.state.directionalShadowMatrix,Ze.spotLightMatrix.value=ee.state.spotLightMatrix,Ze.spotLightMap.value=ee.state.spotLightMap,Ze.pointShadowMatrix.value=ee.state.pointShadowMatrix),ne.lightProbeGrid=N.state.lightProbeGridArray.length>0,ne.currentProgram=mt,ne.uniformsList=null,mt}function Sr(A){if(A.uniformsList===null){const q=A.currentProgram.getUniforms();A.uniformsList=$l.seqWithValue(q.seq,A.uniforms)}return A.uniformsList}function It(A,q){const ce=Q.get(A);ce.outputColorSpace=q.outputColorSpace,ce.batching=q.batching,ce.batchingColor=q.batchingColor,ce.instancing=q.instancing,ce.instancingColor=q.instancingColor,ce.instancingMorph=q.instancingMorph,ce.skinning=q.skinning,ce.morphTargets=q.morphTargets,ce.morphNormals=q.morphNormals,ce.morphColors=q.morphColors,ce.morphTargetsCount=q.morphTargetsCount,ce.numClippingPlanes=q.numClippingPlanes,ce.numIntersection=q.numClipIntersection,ce.vertexAlphas=q.vertexAlphas,ce.vertexTangents=q.vertexTangents,ce.toneMapping=q.toneMapping}function qt(A,q){if(A.length===0)return null;if(A.length===1)return A[0].texture!==null?A[0]:null;R.setFromMatrixPosition(q.matrixWorld);for(let ce=0,ne=A.length;ce<ne;ce++){const ee=A[ce];if(ee.texture!==null&&ee.boundingBox.containsPoint(R))return ee}return null}function Ct(A,q,ce,ne,ee){q.isScene!==!0&&(q=Nt),he.resetTextureUnits();const Ee=q.fog,Ve=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial?q.environment:null,be=Y===null?V.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Pt.workingColorSpace,qe=ne.isMeshStandardMaterial||ne.isMeshLambertMaterial&&!ne.envMap||ne.isMeshPhongMaterial&&!ne.envMap,Qe=Me.get(ne.envMap||Ve,qe),pt=ne.vertexColors===!0&&!!ce.attributes.color&&ce.attributes.color.itemSize===4,mt=!!ce.attributes.tangent&&(!!ne.normalMap||ne.anisotropy>0),Ze=!!ce.morphAttributes.position,Lt=!!ce.morphAttributes.normal,Wt=!!ce.morphAttributes.color;let Qt=Hi;ne.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=V.toneMapping);const zt=ce.morphAttributes.position||ce.morphAttributes.normal||ce.morphAttributes.color,cn=zt!==void 0?zt.length:0,ke=Q.get(ne),Sn=N.state.lights;if(vt===!0&&(dt===!0||A!==ue)){const Vt=A===ue&&ne.id===ie;Ke.setState(ne,A,Vt)}let Et=!1;ne.version===ke.__version?(ke.needsLights&&ke.lightsStateVersion!==Sn.state.version||ke.outputColorSpace!==be||ee.isBatchedMesh&&ke.batching===!1||!ee.isBatchedMesh&&ke.batching===!0||ee.isBatchedMesh&&ke.batchingColor===!0&&ee.colorTexture===null||ee.isBatchedMesh&&ke.batchingColor===!1&&ee.colorTexture!==null||ee.isInstancedMesh&&ke.instancing===!1||!ee.isInstancedMesh&&ke.instancing===!0||ee.isSkinnedMesh&&ke.skinning===!1||!ee.isSkinnedMesh&&ke.skinning===!0||ee.isInstancedMesh&&ke.instancingColor===!0&&ee.instanceColor===null||ee.isInstancedMesh&&ke.instancingColor===!1&&ee.instanceColor!==null||ee.isInstancedMesh&&ke.instancingMorph===!0&&ee.morphTexture===null||ee.isInstancedMesh&&ke.instancingMorph===!1&&ee.morphTexture!==null||ke.envMap!==Qe||ne.fog===!0&&ke.fog!==Ee||ke.numClippingPlanes!==void 0&&(ke.numClippingPlanes!==Ke.numPlanes||ke.numIntersection!==Ke.numIntersection)||ke.vertexAlphas!==pt||ke.vertexTangents!==mt||ke.morphTargets!==Ze||ke.morphNormals!==Lt||ke.morphColors!==Wt||ke.toneMapping!==Qt||ke.morphTargetsCount!==cn||!!ke.lightProbeGrid!=N.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,ke.__version=ne.version);let Vn=ke.currentProgram;Et===!0&&(Vn=Pi(ne,q,ee),j&&ne.isNodeMaterial&&j.onUpdateProgram(ne,Vn,ke));let Hn=!1,wt=!1,Ji=!1;const Bt=Vn.getUniforms(),$t=ke.uniforms;if(E.useProgram(Vn.program)&&(Hn=!0,wt=!0,Ji=!0),ne.id!==ie&&(ie=ne.id,wt=!0),ke.needsLights){const Vt=qt(N.state.lightProbeGridArray,ee);ke.lightProbeGrid!==Vt&&(ke.lightProbeGrid=Vt,wt=!0)}if(Hn||ue!==A){E.buffers.depth.getReversed()&&A.reversedDepth!==!0&&(A._reversedDepth=!0,A.updateProjectionMatrix()),Bt.setValue(W,"projectionMatrix",A.projectionMatrix),Bt.setValue(W,"viewMatrix",A.matrixWorldInverse);const vi=Bt.map.cameraPosition;vi!==void 0&&vi.setValue(W,ut.setFromMatrixPosition(A.matrixWorld)),I.logarithmicDepthBuffer&&Bt.setValue(W,"logDepthBufFC",2/(Math.log(A.far+1)/Math.LN2)),(ne.isMeshPhongMaterial||ne.isMeshToonMaterial||ne.isMeshLambertMaterial||ne.isMeshBasicMaterial||ne.isMeshStandardMaterial||ne.isShaderMaterial)&&Bt.setValue(W,"isOrthographic",A.isOrthographicCamera===!0),ue!==A&&(ue=A,wt=!0,Ji=!0)}if(ke.needsLights&&(Sn.state.directionalShadowMap.length>0&&Bt.setValue(W,"directionalShadowMap",Sn.state.directionalShadowMap,he),Sn.state.spotShadowMap.length>0&&Bt.setValue(W,"spotShadowMap",Sn.state.spotShadowMap,he),Sn.state.pointShadowMap.length>0&&Bt.setValue(W,"pointShadowMap",Sn.state.pointShadowMap,he)),ee.isSkinnedMesh){Bt.setOptional(W,ee,"bindMatrix"),Bt.setOptional(W,ee,"bindMatrixInverse");const Vt=ee.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),Bt.setValue(W,"boneTexture",Vt.boneTexture,he))}ee.isBatchedMesh&&(Bt.setOptional(W,ee,"batchingTexture"),Bt.setValue(W,"batchingTexture",ee._matricesTexture,he),Bt.setOptional(W,ee,"batchingIdTexture"),Bt.setValue(W,"batchingIdTexture",ee._indirectTexture,he),Bt.setOptional(W,ee,"batchingColorTexture"),ee._colorsTexture!==null&&Bt.setValue(W,"batchingColorTexture",ee._colorsTexture,he));const xi=ce.morphAttributes;if((xi.position!==void 0||xi.normal!==void 0||xi.color!==void 0)&&H.update(ee,ce,Vn),(wt||ke.receiveShadow!==ee.receiveShadow)&&(ke.receiveShadow=ee.receiveShadow,Bt.setValue(W,"receiveShadow",ee.receiveShadow)),(ne.isMeshStandardMaterial||ne.isMeshLambertMaterial||ne.isMeshPhongMaterial)&&ne.envMap===null&&q.environment!==null&&($t.envMapIntensity.value=q.environmentIntensity),$t.dfgLUT!==void 0&&($t.dfgLUT.value=PT()),wt){if(Bt.setValue(W,"toneMappingExposure",V.toneMappingExposure),ke.needsLights&&zn($t,Ji),Ee&&ne.fog===!0&&Fe.refreshFogUniforms($t,Ee),Fe.refreshMaterialUniforms($t,ne,oe,pe,N.state.transmissionRenderTarget[A.id]),ke.needsLights&&ke.lightProbeGrid){const Vt=ke.lightProbeGrid;$t.probesSH.value=Vt.texture,$t.probesMin.value.copy(Vt.boundingBox.min),$t.probesMax.value.copy(Vt.boundingBox.max),$t.probesResolution.value.copy(Vt.resolution)}$l.upload(W,Sr(ke),$t,he)}if(ne.isShaderMaterial&&ne.uniformsNeedUpdate===!0&&($l.upload(W,Sr(ke),$t,he),ne.uniformsNeedUpdate=!1),ne.isSpriteMaterial&&Bt.setValue(W,"center",ee.center),Bt.setValue(W,"modelViewMatrix",ee.modelViewMatrix),Bt.setValue(W,"normalMatrix",ee.normalMatrix),Bt.setValue(W,"modelMatrix",ee.matrixWorld),ne.uniformsGroups!==void 0){const Vt=ne.uniformsGroups;for(let vi=0,Ii=Vt.length;vi<Ii;vi++){const es=Vt[vi];ve.update(es,Vn),ve.bind(es,Vn)}}return Vn}function zn(A,q){A.ambientLightColor.needsUpdate=q,A.lightProbe.needsUpdate=q,A.directionalLights.needsUpdate=q,A.directionalLightShadows.needsUpdate=q,A.pointLights.needsUpdate=q,A.pointLightShadows.needsUpdate=q,A.spotLights.needsUpdate=q,A.spotLightShadows.needsUpdate=q,A.rectAreaLights.needsUpdate=q,A.hemisphereLights.needsUpdate=q}function gi(A){return A.isMeshLambertMaterial||A.isMeshToonMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isShadowMaterial||A.isShaderMaterial&&A.lights===!0}this.getActiveCubeFace=function(){return se},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(A,q,ce){const ne=Q.get(A);ne.__autoAllocateDepthBuffer=A.resolveDepthBuffer===!1,ne.__autoAllocateDepthBuffer===!1&&(ne.__useRenderToTexture=!1),Q.get(A.texture).__webglTexture=q,Q.get(A.depthTexture).__webglTexture=ne.__autoAllocateDepthBuffer?void 0:ce,ne.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(A,q){const ce=Q.get(A);ce.__webglFramebuffer=q,ce.__useDefaultFramebuffer=q===void 0},this.setRenderTarget=function(A,q=0,ce=0){Y=A,se=q,K=ce;let ne=null,ee=!1,Ee=!1;if(A){const be=Q.get(A);if(be.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,be.__webglFramebuffer),k.copy(A.viewport),J.copy(A.scissor),Le=A.scissorTest,E.viewport(k),E.scissor(J),E.setScissorTest(Le),ie=-1;return}else if(be.__webglFramebuffer===void 0)he.setupRenderTarget(A);else if(be.__hasExternalTextures)he.rebindTextures(A,Q.get(A.texture).__webglTexture,Q.get(A.depthTexture).__webglTexture);else if(A.depthBuffer){const pt=A.depthTexture;if(be.__boundDepthTexture!==pt){if(pt!==null&&Q.has(pt)&&(A.width!==pt.image.width||A.height!==pt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(A)}}const qe=A.texture;(qe.isData3DTexture||qe.isDataArrayTexture||qe.isCompressedArrayTexture)&&(Ee=!0);const Qe=Q.get(A).__webglFramebuffer;A.isWebGLCubeRenderTarget?(Array.isArray(Qe[q])?ne=Qe[q][ce]:ne=Qe[q],ee=!0):A.samples>0&&he.useMultisampledRTT(A)===!1?ne=Q.get(A).__webglMultisampledFramebuffer:Array.isArray(Qe)?ne=Qe[ce]:ne=Qe,k.copy(A.viewport),J.copy(A.scissor),Le=A.scissorTest}else k.copy(je).multiplyScalar(oe).floor(),J.copy(Rt).multiplyScalar(oe).floor(),Le=nt;if(ce!==0&&(ne=re),E.bindFramebuffer(W.FRAMEBUFFER,ne)&&E.drawBuffers(A,ne),E.viewport(k),E.scissor(J),E.setScissorTest(Le),ee){const be=Q.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+q,be.__webglTexture,ce)}else if(Ee){const be=q;for(let qe=0;qe<A.textures.length;qe++){const Qe=Q.get(A.textures[qe]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+qe,Qe.__webglTexture,ce,be)}}else if(A!==null&&ce!==0){const be=Q.get(A.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,be.__webglTexture,ce)}ie=-1},this.readRenderTargetPixels=function(A,q,ce,ne,ee,Ee,Ve,be=0){if(!(A&&A.isWebGLRenderTarget)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let qe=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe){E.bindFramebuffer(W.FRAMEBUFFER,qe);try{const Qe=A.textures[be],pt=Qe.format,mt=Qe.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+be),!I.textureFormatReadable(pt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!I.textureTypeReadable(mt)){Ot("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}q>=0&&q<=A.width-ne&&ce>=0&&ce<=A.height-ee&&W.readPixels(q,ce,ne,ee,Ne.convert(pt),Ne.convert(mt),Ee)}finally{const Qe=Y!==null?Q.get(Y).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(A,q,ce,ne,ee,Ee,Ve,be=0){if(!(A&&A.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let qe=Q.get(A).__webglFramebuffer;if(A.isWebGLCubeRenderTarget&&Ve!==void 0&&(qe=qe[Ve]),qe)if(q>=0&&q<=A.width-ne&&ce>=0&&ce<=A.height-ee){E.bindFramebuffer(W.FRAMEBUFFER,qe);const Qe=A.textures[be],pt=Qe.format,mt=Qe.type;if(A.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+be),!I.textureFormatReadable(pt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!I.textureTypeReadable(mt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ze=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,Ze),W.bufferData(W.PIXEL_PACK_BUFFER,Ee.byteLength,W.STREAM_READ),W.readPixels(q,ce,ne,ee,Ne.convert(pt),Ne.convert(mt),0);const Lt=Y!==null?Q.get(Y).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,Lt);const Wt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await L_(W,Wt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,Ze),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Ee),W.deleteBuffer(Ze),W.deleteSync(Wt),Ee}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(A,q=null,ce=0){const ne=Math.pow(2,-ce),ee=Math.floor(A.image.width*ne),Ee=Math.floor(A.image.height*ne),Ve=q!==null?q.x:0,be=q!==null?q.y:0;he.setTexture2D(A,0),W.copyTexSubImage2D(W.TEXTURE_2D,ce,0,0,Ve,be,ee,Ee),E.unbindTexture()},this.copyTextureToTexture=function(A,q,ce=null,ne=null,ee=0,Ee=0){let Ve,be,qe,Qe,pt,mt,Ze,Lt,Wt;const Qt=A.isCompressedTexture?A.mipmaps[Ee]:A.image;if(ce!==null)Ve=ce.max.x-ce.min.x,be=ce.max.y-ce.min.y,qe=ce.isBox3?ce.max.z-ce.min.z:1,Qe=ce.min.x,pt=ce.min.y,mt=ce.isBox3?ce.min.z:0;else{const $t=Math.pow(2,-ee);Ve=Math.floor(Qt.width*$t),be=Math.floor(Qt.height*$t),A.isDataArrayTexture?qe=Qt.depth:A.isData3DTexture?qe=Math.floor(Qt.depth*$t):qe=1,Qe=0,pt=0,mt=0}ne!==null?(Ze=ne.x,Lt=ne.y,Wt=ne.z):(Ze=0,Lt=0,Wt=0);const zt=Ne.convert(q.format),cn=Ne.convert(q.type);let ke;q.isData3DTexture?(he.setTexture3D(q,0),ke=W.TEXTURE_3D):q.isDataArrayTexture||q.isCompressedArrayTexture?(he.setTexture2DArray(q,0),ke=W.TEXTURE_2D_ARRAY):(he.setTexture2D(q,0),ke=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,q.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,q.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,q.unpackAlignment);const Sn=E.getParameter(W.UNPACK_ROW_LENGTH),Et=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Vn=E.getParameter(W.UNPACK_SKIP_PIXELS),Hn=E.getParameter(W.UNPACK_SKIP_ROWS),wt=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Qt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Qt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Qe),E.pixelStorei(W.UNPACK_SKIP_ROWS,pt),E.pixelStorei(W.UNPACK_SKIP_IMAGES,mt);const Ji=A.isDataArrayTexture||A.isData3DTexture,Bt=q.isDataArrayTexture||q.isData3DTexture;if(A.isDepthTexture){const $t=Q.get(A),xi=Q.get(q),Vt=Q.get($t.__renderTarget),vi=Q.get(xi.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Vt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,vi.__webglFramebuffer);for(let Ii=0;Ii<qe;Ii++)Ji&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Q.get(A).__webglTexture,ee,mt+Ii),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Q.get(q).__webglTexture,Ee,Wt+Ii)),W.blitFramebuffer(Qe,pt,Ve,be,Ze,Lt,Ve,be,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ee!==0||A.isRenderTargetTexture||Q.has(A)){const $t=Q.get(A),xi=Q.get(q);E.bindFramebuffer(W.READ_FRAMEBUFFER,fe),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,$);for(let Vt=0;Vt<qe;Vt++)Ji?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,$t.__webglTexture,ee,mt+Vt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,$t.__webglTexture,ee),Bt?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,xi.__webglTexture,Ee,Wt+Vt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,xi.__webglTexture,Ee),ee!==0?W.blitFramebuffer(Qe,pt,Ve,be,Ze,Lt,Ve,be,W.COLOR_BUFFER_BIT,W.NEAREST):Bt?W.copyTexSubImage3D(ke,Ee,Ze,Lt,Wt+Vt,Qe,pt,Ve,be):W.copyTexSubImage2D(ke,Ee,Ze,Lt,Qe,pt,Ve,be);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else Bt?A.isDataTexture||A.isData3DTexture?W.texSubImage3D(ke,Ee,Ze,Lt,Wt,Ve,be,qe,zt,cn,Qt.data):q.isCompressedArrayTexture?W.compressedTexSubImage3D(ke,Ee,Ze,Lt,Wt,Ve,be,qe,zt,Qt.data):W.texSubImage3D(ke,Ee,Ze,Lt,Wt,Ve,be,qe,zt,cn,Qt):A.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Ee,Ze,Lt,Ve,be,zt,cn,Qt.data):A.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Ee,Ze,Lt,Qt.width,Qt.height,zt,Qt.data):W.texSubImage2D(W.TEXTURE_2D,Ee,Ze,Lt,Ve,be,zt,cn,Qt);E.pixelStorei(W.UNPACK_ROW_LENGTH,Sn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Et),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Vn),E.pixelStorei(W.UNPACK_SKIP_ROWS,Hn),E.pixelStorei(W.UNPACK_SKIP_IMAGES,wt),Ee===0&&q.generateMipmaps&&W.generateMipmap(ke),E.unbindTexture()},this.initRenderTarget=function(A){Q.get(A).__webglFramebuffer===void 0&&he.setupRenderTarget(A)},this.initTexture=function(A){A.isCubeTexture?he.setTextureCube(A,0):A.isData3DTexture?he.setTexture3D(A,0):A.isDataArrayTexture||A.isCompressedArrayTexture?he.setTexture2DArray(A,0):he.setTexture2D(A,0),E.unbindTexture()},this.resetState=function(){se=0,K=0,Y=null,E.reset(),we.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Vi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Pt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Pt._getUnpackColorSpace()}}const Ad=({isolated:s,telemetry:e,dampers:t,phase:r})=>{const o=tt.useRef(null),l=tt.useRef(null),u=tt.useRef(null),f=tt.useRef(null),h=tt.useRef(null),p=tt.useRef(null),x=tt.useRef(null),S=tt.useRef(null),g=tt.useRef([]),_=tt.useRef([]),T=tt.useRef(null),C=tt.useRef(null),y=tt.useRef(!1),v=tt.useRef({x:0,y:0}),D=tt.useRef({theta:.25,phi:Math.PI/4.8,radius:10.2}),U=r==="DETECT",R=r==="SECURE"||r==="RECOVERY";return tt.useEffect(()=>{const L=o.current;if(!L)return;const N=L.clientWidth||640,F=L.clientHeight||400,w=new $_;l.current=w,w.background=new yt(330004);const P=new si(34,N/F,.1,100);f.current=P;const V=()=>{const{theta:It,phi:qt,radius:Ct}=D.current;P.position.x=Ct*Math.sin(qt)*Math.sin(It),P.position.y=Ct*Math.cos(qt)+.15,P.position.z=Ct*Math.sin(qt)*Math.cos(It),P.lookAt(0,.15,0)};V();const B=new IT({antialias:!0,alpha:!0});for(B.setSize(N,F),B.setPixelRatio(Math.min(window.devicePixelRatio,2)),B.shadowMap.enabled=!0,B.shadowMap.type=U0,u.current=B;L.firstChild;)L.removeChild(L.firstChild);L.appendChild(B.domElement);const j=new Ly(16777215,1.4);w.add(j);const re=new Iy(16777215,2.6);re.position.set(8,14,10),re.castShadow=!0,re.shadow.mapSize.width=1024,re.shadow.mapSize.height=1024,w.add(re);const fe=new e0(14742270,4.2,10);fe.position.set(0,1.8,0),w.add(fe);const $=new e0(440020,3.2,12);$.position.set(-6,2.5,4),w.add($);const se=new In({color:13358561,metalness:.95,roughness:.12}),K=new In({color:1976635,metalness:.85,roughness:.3}),Y=new In({color:3359061,metalness:.8,roughness:.25}),ie=new In({color:593174,metalness:.5,roughness:.4}),ue=new Ay({color:s?3718648:16281969,transmission:.88,opacity:.28,transparent:!0,roughness:.04,ior:1.52,reflectivity:.95,clearcoat:.85}),k=new In({color:1981023,roughness:.4}),J=new In({color:165063,roughness:.3}),Le=new In({color:14870768,roughness:.45}),Xe=new In({color:3718648,roughness:.35}),ze=new In({color:16317180,roughness:.15,metalness:.15}),le=new _s({color:223649});S.current=new it(new _o(1.1,.65),le);const pe=new Zn;h.current=pe,w.add(pe);const oe=new it(new Gt(14,.25,8),ie);oe.position.set(0,-1.75,0),oe.receiveShadow=!0,pe.add(oe);const De=new Oy(14,14,165063,1977674);De.position.set(0,-1.61,0),pe.add(De);const Oe=[];for(let It=-6;It<=6;It+=.3)Oe.push(new G(It,-1.48,3.2));const je=new Dn().setFromPoints(Oe),Rt=new Of({color:15680580,linewidth:3}),nt=new sg(je,Rt);x.current=nt,pe.add(nt);const ht=new Zn;w.add(ht);const vt=new it(new Gt(10.2,.22,4.8),K);vt.position.set(0,-1.48,0),ht.add(vt);const dt=new it(new Gt(9.6,.25,4.4),Y);dt.position.set(0,-1.08,0),dt.castShadow=!0,dt.receiveShadow=!0,ht.add(dt),g.current=[],_.current=[],[-3.6,-1.2,1.2,3.6].forEach(It=>{const qt=new Zn;qt.position.set(It,-1.35,1.9);const Ct=new it(new Gt(1.1,.28,.95),K);qt.add(Ct);const zn=new Zn,gi=new it(new Kn(.25,.25,.4,20),se);gi.position.y=.24,zn.add(gi);const A=[];for(let Ee=0;Ee<=Math.PI*6;Ee+=.2)A.push(new G(Math.cos(Ee)*.2,Ee/(Math.PI*6)*.36-.18,Math.sin(Ee)*.2));const q=new _f(A),ce=new ic(q,36,.03,8,!1),ne=new it(ce,K);ne.position.y=.24,zn.add(ne),qt.add(zn),_.current.push(zn);const ee=new it(new kf(.32,.04,12,24),new _s({color:3718648}));ee.rotation.x=Math.PI/2,ee.position.y=.42,qt.add(ee),g.current.push(ee),ht.add(qt)});const ut=new Zn;p.current=ut,w.add(ut);const Tt=6.8,Nt=2.8,xt=3.2,St=new Zn;[[-Tt/2,xt/2],[Tt/2,xt/2],[-Tt/2,-xt/2],[Tt/2,-xt/2]].forEach(([It,qt])=>{const Ct=new it(new Kn(.15,.15,Nt,16),se);Ct.position.set(It,.45,qt),St.add(Ct);const zn=new it(new Yr(.18,16,16),se);zn.position.set(It,.45+Nt/2,qt),St.add(zn);const gi=new it(new Yr(.18,16,16),se);gi.position.set(It,.45-Nt/2,qt),St.add(gi)});const W=new it(new Kn(.12,.12,Tt,16),se);W.rotation.z=Math.PI/2,W.position.set(0,.45+Nt/2,xt/2),St.add(W);const Yt=new it(new Kn(.12,.12,Tt,16),se);Yt.rotation.z=Math.PI/2,Yt.position.set(0,.45+Nt/2,-xt/2),St.add(Yt);const Mt=new it(new Kn(.12,.12,Tt,16),se);Mt.rotation.z=Math.PI/2,Mt.position.set(0,.45-Nt/2,xt/2),St.add(Mt);const I=new it(new Kn(.12,.12,Tt,16),se);I.rotation.z=Math.PI/2,I.position.set(0,.45-Nt/2,-xt/2),St.add(I),ut.add(St);const E=new it(new Gt(Tt,Nt,xt),ue);E.position.set(0,.45,0),ut.add(E);const Z=new it(new Gt(4.8,.06,.25),new _s({color:14742270}));Z.position.set(0,1.82,0),ut.add(Z);const Q=new Zn;Q.position.set(-1.5,-.55,.1);const he=new it(new Gt(3,.38,1.4),k);he.castShadow=!0,Q.add(he);const Me=new it(new Gt(1,.14,1.35),k);Me.position.set(-1,.28,0),Me.rotation.z=Math.PI/12,Q.add(Me);const Ce=new it(new Gt(2.9,.22,1.35),J);Ce.position.y=.38,Q.add(Ce);const me=new it(new Gt(.65,.18,1),new In({color:16317180}));me.position.set(-1.1,.52,0),Q.add(me);const xe=new it(new Gt(1.8,.2,.06),se);xe.position.set(0,.56,.72),Q.add(xe);const Pe=new it(new Gt(1.8,.2,.06),se);Pe.position.set(0,.56,-.72),Q.add(Pe),[[-1.3,.6],[1.3,.6],[-1.3,-.6],[1.3,-.6]].forEach(([It,qt])=>{const Ct=new it(new Kn(.05,.05,.35,8),K);Ct.position.set(It,-.36,qt),Q.add(Ct);const zn=new it(new Yr(.07,8,8),K);zn.position.set(It,-.54,qt),Q.add(zn)});const Fe=new Zn,Ie=new it(new Yr(.32,24,24),Le);Ie.position.set(-1.1,.78,0),Fe.add(Ie);const Re=new it(new Gt(.07,.16,.09),Le);Re.position.set(-1.1,.78,.32),Fe.add(Re);const Ke=new it(new Yr(.34,24,24,0,Math.PI*2,0,Math.PI/2.2),new In({color:165063}));Ke.position.set(-1.1,.8,0),Fe.add(Ke);const et=new it(new Kn(.11,.13,.2,12),Le);et.position.set(-.85,.7,0),Fe.add(et);const st=new it(new Gt(1.2,.3,.9),Le);st.position.set(-.2,.64,0),Fe.add(st);const H=new it(new Gt(1.2,.25,.85),Le);H.position.set(.9,.58,0),Fe.add(H);const Ae=new it(new Gt(2.1,.32,1.2),Xe);Ae.position.set(.3,.64,0),Fe.add(Ae);const ge=new it(new Kn(.065,.06,.45,12),Le);ge.rotation.z=Math.PI/2,ge.position.set(.35,.65,.55),Fe.add(ge);const Ne=new it(new Gt(.14,.04,.16),Le);Ne.position.set(.6,.65,.55),Fe.add(Ne),Q.add(Fe),ut.add(Q);const we=new Zn;we.position.set(1.7,-.15,.05);const ve=new it(new Gt(1.5,2.3,1.4),ze);ve.castShadow=!0,we.add(ve);const We=new it(new Gt(1.2,.75,.1),K);We.position.set(0,.7,.72),we.add(We),S.current&&(S.current.position.set(0,.7,.78),we.add(S.current));const He=new it(new Kn(.035,.035,1,8),se);He.position.set(0,1.5,.3),we.add(He);const kt=new it(new Gt(.22,.4,.12),new In({color:3718648,transparent:!0,opacity:.85}));kt.position.set(-.35,1.75,.3),we.add(kt);const Dt=new it(new Gt(.22,.45,.12),new In({color:15680580,transparent:!0,opacity:.85}));Dt.position.set(.35,1.75,.3),we.add(Dt);const an=new Zn;T.current=an;const Un=new it(new Kn(.3,.3,.08,16),K);Un.rotation.x=Math.PI/2,an.add(Un);const Yi=new it(new Gt(.5,.06,.03),se);an.add(Yi),an.position.set(-.35,-.1,.72),we.add(an);const qi=new it(new Kn(.14,.14,.9,16),new In({color:165063}));qi.position.set(.85,.15,0),we.add(qi),ut.add(we);const $i=[new G(-1.4,.1,.7),new G(-.5,.2,.6),new G(.4,.05,.5),new G(2.3,.15,0)],Ki=new _f($i),ya=new ic(Ki,24,.035,8,!1),As=new it(ya,new _s({color:15680580}));ut.add(As);const Jr=new it(new Gt(.3,.3,.15),new In({color:440020}));Jr.position.set(3.45,.6,0),ut.add(Jr);const fn=new it(new Yr(.07,8,8),new _s({color:440020}));fn.position.set(3.45,.78,.08),C.current=fn,ut.add(fn);const Zi=It=>{y.current=!0,v.current={x:It.clientX,y:It.clientY}},_r=It=>{if(!y.current)return;const qt=It.clientX-v.current.x,Ct=It.clientY-v.current.y;D.current.theta-=qt*.008,D.current.phi=Math.max(Math.PI/12,Math.min(Math.PI/2.2,D.current.phi-Ct*.008)),v.current={x:It.clientX,y:It.clientY},V()},Qr=()=>{y.current=!1},Ni=It=>{It.preventDefault(),D.current.radius=Math.max(6.5,Math.min(15,D.current.radius+It.deltaY*.005)),V()};L.addEventListener("pointerdown",Zi),window.addEventListener("pointermove",_r),window.addEventListener("pointerup",Qr),L.addEventListener("wheel",Ni,{passive:!1});let yr;const Pi=()=>{yr=requestAnimationFrame(Pi),T.current&&U&&(T.current.rotation.z+=.12),u.current&&l.current&&f.current&&u.current.render(l.current,f.current)};Pi();const Sr=()=>{if(!L||!u.current||!f.current)return;const It=L.clientWidth||640,qt=L.clientHeight||400;f.current.aspect=It/qt,f.current.updateProjectionMatrix(),u.current.setSize(It,qt)};return window.addEventListener("resize",Sr),()=>{cancelAnimationFrame(yr),L.removeEventListener("pointerdown",Zi),window.removeEventListener("pointermove",_r),window.removeEventListener("pointerup",Qr),L.removeEventListener("wheel",Ni),window.removeEventListener("resize",Sr),B.dispose()}},[s]),tt.useEffect(()=>{const L=e.floorMotion/100*.75,N=e.podMotion/100*.65,F=e.x*L,w=e.x*N,P=e.y*N/2,V=e.x*(N/4);if(h.current&&(h.current.position.x=F),p.current&&(p.current.position.x=w,p.current.position.y=P,p.current.rotation.z=V),C.current){const B=C.current.material;U?B.color.setHex(16096779):R?B.color.setHex(1096065):B.color.setHex(440020)}if(g.current.forEach((B,j)=>{const re=t[j],fe=B.material,$=_.current[j];s?re.status==="ACTIVE"||re.status==="LOCKED"?(fe.color.setHex(1096065),$&&($.position.y=-.08)):re.status==="ENGAGING"?(fe.color.setHex(16096779),$&&($.position.y=-.04)):(fe.color.setHex(3718648),$&&($.position.y=0)):(fe.color.setHex(4674921),$&&($.position.y=0))}),x.current){const B=x.current.geometry,j=B.attributes.position;if(j){const re=Array.from({length:j.count},(fe,$)=>{const se=-6+$*.3,K=-1.48+Math.sin(se*4+Date.now()*.01)*(e.floorMotion/100)*.3;return new G(se,K,3.2)});B.setFromPoints(re),B.computeBoundingSphere()}}},[e,t,s,U,R]),M.jsx("div",{ref:o,className:"w-full h-full min-h-[400px] relative overflow-hidden rounded-xl cursor-grab active:cursor-grabbing"})},LT=({phase:s,telemetry:e,dampers:t,isSimulating:r,peakG:o,isIsolationEnabled:l,compareMode:u})=>{const f=s==="SECURE"||s==="RECOVERY";return M.jsxs("div",{className:"relative w-full h-[500px] lg:h-[540px] rounded-xl bg-console-panel border border-console-border overflow-hidden flex flex-col justify-between p-4 shadow-2xl",children:[M.jsx("div",{className:"absolute inset-0 opacity-15 pointer-events-none bg-[radial-gradient(#1e2d4a_1px,transparent_1px)] [background-size:16px_16px]"}),M.jsxs("div",{className:"relative z-10 flex items-center justify-between bg-console-card/90 border border-console-border px-3.5 py-2 rounded-lg backdrop-blur-md font-mono text-xs",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(mi,{className:"w-4 h-4 text-cyan-400 animate-pulse"}),M.jsx("span",{className:"text-slate-100 font-bold tracking-wider uppercase",children:u?"🔀 DUAL POD SYNCHRONIZED COMPARISON MODE (WITHOUT ESDS vs WITH ESDS)":"PROTECTED DIALYSIS POD"}),M.jsx("span",{className:"text-[10px] text-slate-400 font-normal hidden sm:inline",children:"• Real-Time Three.js 3D Digital Twin Simulation (Interactive Orbit Enabled)"})]}),M.jsxs("div",{className:"flex items-center gap-4 text-slate-400",children:[M.jsxs("span",{children:["ISOLATION: ",M.jsx("strong",{className:l?"text-emerald-400 font-bold":"text-rose-400 font-bold",children:l?"ACTIVE (ON)":"DISABLED (OFF)"})]}),M.jsxs("span",{className:"hidden sm:inline",children:["PEAK G: ",M.jsxs("strong",{className:"text-amber-400 font-mono",children:[o.toFixed(2),"g"]})]})]})]}),u?M.jsxs("div",{className:"relative flex-1 grid grid-cols-2 gap-4 items-center justify-center my-1 select-none",children:[M.jsxs("div",{className:"relative flex flex-col items-center justify-center h-full border border-rose-500/40 rounded-xl bg-rose-950/20 p-2 overflow-hidden",children:[M.jsxs("div",{className:"absolute top-2 left-2 z-10 bg-rose-950/90 border border-rose-500/60 px-2.5 py-0.5 rounded text-[10px] font-mono text-rose-300 font-bold flex items-center gap-1",children:[M.jsx(go,{className:"w-3 h-3 text-rose-400"}),M.jsx("span",{children:"WITHOUT ESDS (ISOLATION OFF)"})]}),M.jsx(Ad,{isolated:!1,telemetry:e,dampers:t,phase:s}),M.jsxs("div",{className:"w-full flex justify-between text-[10px] font-mono text-rose-300 px-2 pt-1 border-t border-rose-900/40 z-10",children:[M.jsxs("span",{children:["POD MOTION: ",M.jsxs("strong",{children:["HIGH (",e.floorMotion,"%)"]})]}),M.jsx("span",{className:"font-bold text-rose-400",children:"UNPROTECTED"})]})]}),M.jsxs("div",{className:"relative flex flex-col items-center justify-center h-full border border-emerald-500/40 rounded-xl bg-emerald-950/20 p-2 overflow-hidden",children:[M.jsxs("div",{className:"absolute top-2 left-2 z-10 bg-emerald-950/90 border border-emerald-500/60 px-2.5 py-0.5 rounded text-[10px] font-mono text-emerald-300 font-bold flex items-center gap-1",children:[M.jsx(mi,{className:"w-3 h-3 text-emerald-400"}),M.jsx("span",{children:"WITH ESDS (ISOLATION ON)"})]}),M.jsx(Ad,{isolated:!0,telemetry:e,dampers:t,phase:s}),M.jsxs("div",{className:"w-full flex justify-between text-[10px] font-mono text-emerald-300 px-2 pt-1 border-t border-emerald-900/40 z-10",children:[M.jsxs("span",{children:["POD MOTION: ",M.jsxs("strong",{children:["LOW (",e.podMotion,"%)"]})]}),M.jsx("span",{className:"font-bold text-emerald-400",children:"PROTECTED"})]})]})]}):M.jsxs("div",{className:"relative flex-1 flex items-center justify-center my-1 select-none overflow-hidden",children:[M.jsx(Ad,{isolated:l,telemetry:e,dampers:t,phase:s}),M.jsxs("div",{className:"absolute top-10 left-10 flex items-center gap-2 bg-console-card/95 border border-emerald-500/50 px-3.5 py-2 rounded-lg shadow-2xl backdrop-blur-md text-xs font-mono text-emerald-300 pointer-events-none z-10",children:[M.jsx(mi,{className:"w-4 h-4 text-emerald-400 animate-pulse"}),M.jsx("span",{className:"font-bold tracking-wider",children:"PATIENT SAFETY ZONE"})]}),M.jsxs("div",{className:"absolute top-10 right-10 flex items-center gap-2 bg-console-card/95 border border-cyan-500/50 px-3.5 py-2 rounded-lg shadow-2xl backdrop-blur-md text-xs font-mono text-cyan-300 pointer-events-none z-10",children:[M.jsx(sc,{className:"w-4 h-4 text-cyan-400 animate-pulse"}),M.jsx("span",{children:"DIALYSIS MACHINE"})]}),M.jsxs("div",{className:"absolute bottom-16 left-1/2 -translate-x-1/2 flex items-center gap-6 bg-console-card/90 border border-slate-700/80 px-4 py-1.5 rounded-lg shadow-xl backdrop-blur text-[11px] font-mono text-slate-300 pointer-events-none z-10",children:[M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(Ss,{className:"w-3 h-3 text-emerald-400"})," D1"]}),M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(Ss,{className:"w-3 h-3 text-emerald-400"})," D2"]}),M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(Ss,{className:"w-3 h-3 text-emerald-400"})," D3"]}),M.jsxs("span",{className:"flex items-center gap-1",children:[M.jsx(Ss,{className:"w-3 h-3 text-emerald-400"})," D4"]})]}),f&&l&&M.jsxs("div",{className:"absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-emerald-950/95 border border-emerald-400 px-6 py-4 rounded-xl shadow-2xl backdrop-blur-md flex items-center gap-3 animate-fade-in glow-safe z-20",children:[M.jsx(mi,{className:"w-8 h-8 text-emerald-400 animate-bounce"}),M.jsxs("div",{children:[M.jsx("h3",{className:"text-emerald-300 font-mono font-bold text-sm lg:text-base tracking-wider uppercase",children:"EQUIPMENT SECURED"}),M.jsx("p",{className:"text-emerald-400/80 text-xs font-mono",children:"Seismic Isolation Locked • Patient Safety Zone Protected"})]})]})]}),M.jsxs("div",{className:"relative z-10 flex items-center justify-between text-[11px] font-mono text-slate-400 pt-2 border-t border-console-border/60",children:[M.jsxs("span",{className:"flex items-center gap-1.5",children:[M.jsx(Iv,{className:"w-3.5 h-3.5 text-cyan-400"}),"PROTECTED DIALYSIS POD • THREE.JS 3D DIGITAL TWIN"]}),M.jsx("span",{className:"text-slate-500 hidden sm:inline",children:"WebGL 3D RENDER ENGINE"})]})]})},DT=({telemetry:s,metrics:e,peakG:t})=>{const r=s.dynamicAcceleration>e.detectionThreshold;return s.isolationEfficiency>50,M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-2 gap-4 h-full",children:[M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between shadow-lg space-y-3",children:[M.jsx("div",{className:"flex items-center justify-between pb-2 border-b border-console-border",children:M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(sc,{className:"w-4 h-4 text-cyan-400"}),M.jsx("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase",children:"SENSOR READINGS"})]})}),M.jsxs("div",{className:"grid grid-cols-2 gap-3 font-mono",children:[M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2.5 rounded-lg flex flex-col justify-between",children:[M.jsx("span",{className:"text-[10px] text-slate-400",children:"DYNAMIC ACCELERATION"}),M.jsx("div",{className:"my-1",children:M.jsxs("span",{className:`text-lg lg:text-xl font-extrabold ${r?"text-amber-400":"text-amber-300"}`,children:[s.dynamicAcceleration.toFixed(2)," g"]})}),M.jsxs("span",{className:"text-[9px] text-slate-500",children:["Threshold: ",e.detectionThreshold," g"]})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2.5 rounded-lg flex flex-col justify-between",children:[M.jsx("span",{className:"text-[10px] text-slate-400",children:"VIBRATION LEVEL"}),M.jsx("div",{className:"my-1",children:M.jsxs("span",{className:"text-lg lg:text-xl font-extrabold text-rose-400",children:[s.vibrationIntensity,"%"]})}),M.jsx("div",{className:"w-full h-1 bg-slate-800 rounded-full overflow-hidden",children:M.jsx("div",{className:"h-full bg-rose-500 transition-all duration-150",style:{width:`${s.vibrationIntensity}%`}})})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2.5 rounded-lg flex flex-col justify-between",children:[M.jsx("span",{className:"text-[10px] text-slate-400",children:"RISK LEVEL"}),M.jsxs("div",{className:"my-1 flex items-center gap-1.5 font-bold text-sm lg:text-base text-amber-400 uppercase",children:[M.jsx("span",{children:e.riskLevel}),e.riskLevel!=="LOW"&&M.jsx(go,{className:"w-3.5 h-3.5 text-amber-400 animate-pulse"})]})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2.5 rounded-lg flex flex-col justify-between",children:[M.jsx("span",{className:"text-[10px] text-slate-400",children:"SENSOR STATUS"}),M.jsxs("div",{className:"my-1 flex items-center gap-1.5 font-bold text-sm lg:text-base text-emerald-400 uppercase",children:[M.jsx("span",{children:"ONLINE"}),M.jsx("span",{className:"w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"})]})]})]})]}),M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between shadow-lg space-y-3",children:[M.jsx("div",{className:"flex items-center justify-between pb-2 border-b border-console-border",children:M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(Ef,{className:"w-4 h-4 text-cyan-400"}),M.jsxs("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase",children:["MOTION COMPARISON ",M.jsx("span",{className:"text-[10px] text-slate-400 font-normal lowercase",children:"(simulated)"})]})]})}),M.jsxs("div",{className:"space-y-3 font-mono",children:[M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[M.jsx("span",{className:"text-slate-300",children:"FLOOR MOTION"}),M.jsxs("span",{className:"font-bold text-rose-400",children:[s.floorMotion,"%"]})]}),M.jsx("div",{className:"w-full h-2 rounded-full bg-slate-900 overflow-hidden",children:M.jsx("div",{className:"h-full bg-rose-500 transition-all duration-150",style:{width:`${Math.min(100,s.floorMotion)}%`}})})]}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex justify-between text-xs mb-1",children:[M.jsx("span",{className:"text-slate-300",children:"POD MOTION"}),M.jsxs("span",{className:"font-bold text-emerald-400",children:[s.podMotion,"%"]})]}),M.jsx("div",{className:"w-full h-2 rounded-full bg-slate-900 overflow-hidden",children:M.jsx("div",{className:"h-full bg-emerald-500 transition-all duration-150",style:{width:`${Math.min(100,s.podMotion)}%`}})})]}),M.jsxs("div",{className:"bg-emerald-950/40 border border-emerald-800/60 p-2.5 rounded-lg flex items-center justify-between text-xs font-bold text-emerald-300",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(mi,{className:"w-4 h-4 text-emerald-400"}),M.jsx("span",{children:"ISOLATION EFFICIENCY"})]}),M.jsxs("span",{className:"text-sm font-extrabold text-emerald-400",children:[s.isolationEfficiency,"%"]})]})]})]})]})},UT=({history:s,metrics:e,phase:t})=>{const r=tt.useRef(null);return tt.useEffect(()=>{const o=r.current;if(!o)return;const l=o.getContext("2d");if(!l)return;const u=o.getBoundingClientRect(),f=window.devicePixelRatio||1;o.width=u.width*f,o.height=u.height*f,l.scale(f,f);const h=u.width,p=u.height;l.clearRect(0,0,h,p),l.strokeStyle="rgba(30, 45, 74, 0.4)",l.lineWidth=1;const x=4,S=8;for(let U=0;U<=x;U++){const R=p/x*U;l.beginPath(),l.moveTo(0,R),l.lineTo(h,R),l.stroke()}for(let U=0;U<=S;U++){const R=h/S*U;l.beginPath(),l.moveTo(R,0),l.lineTo(R,p),l.stroke()}if(s.length<2)return;const g=p/2,_=(p-20)/1.2,T=g-e.detectionThreshold*_;l.strokeStyle="rgba(245, 158, 11, 0.5)",l.setLineDash([4,4]),l.beginPath(),l.moveTo(0,T),l.lineTo(h,T),l.stroke(),l.setLineDash([]);const C=h/(s.length-1);l.strokeStyle="#f59e0b",l.lineWidth=2.2,l.beginPath(),s.forEach((U,R)=>{const L=R*C,N=(R%2===0?1:-1)*U.dynamicAcceleration,F=g-N*_;R===0?l.moveTo(L,F):l.lineTo(L,F)}),l.stroke();const y=s[s.length-1],v=(s.length-1)*C,D=g-y.dynamicAcceleration*_;l.fillStyle=y.dynamicAcceleration>e.detectionThreshold?"#ef4444":"#f59e0b",l.beginPath(),l.arc(v,D,4,0,Math.PI*2),l.fill()},[s,e,t]),M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between h-full shadow-lg",children:[M.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-console-border mb-2",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(Yv,{className:"w-4 h-4 text-cyan-400"}),M.jsxs("div",{children:[M.jsx("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase",children:"LIVE VIBRATION WAVEFORM"}),M.jsx("span",{className:"text-[10px] text-slate-400 font-normal",children:"Real-time acceleration data"})]})]}),M.jsx("span",{className:"text-[10px] font-mono text-cyan-400 font-bold",children:"100 Hz STREAM"})]}),M.jsxs("div",{className:"relative w-full h-[120px] lg:h-[130px] bg-console-card/90 border border-console-border rounded-lg overflow-hidden flex",children:[M.jsxs("div",{className:"flex flex-col justify-between py-1 px-1.5 font-mono text-[9px] text-slate-500 border-r border-console-border/60 bg-slate-950/60",children:[M.jsx("span",{children:"0.5g"}),M.jsx("span",{children:"0"}),M.jsx("span",{children:"-0.5g"})]}),M.jsx("div",{className:"relative flex-1 h-full",children:M.jsx("canvas",{ref:r,className:"w-full h-full block"})})]}),M.jsxs("div",{className:"flex justify-between items-center text-[10px] font-mono text-slate-500 pt-1",children:[M.jsx("span",{children:"TIME →"}),M.jsx("span",{className:"text-amber-400",children:"THRESHOLD: 0.25g"})]})]})},b0=[{num:1,id:"MONITOR",title:"MONITOR",desc:"Monitoring environment"},{num:2,id:"DETECT",title:"DETECT",desc:"Seismic activity detected"},{num:3,id:"ISOLATE",title:"ISOLATE",desc:"Isolation system activating"},{num:4,id:"PROTECT",title:"PROTECT",desc:"Protecting patient & equipment"},{num:5,id:"SECURE",title:"SECURE",desc:"Equipment secured"}],OT=({activeScenario:s,intensity:e,isSimulating:t,isIsolationEnabled:r,compareMode:o,phase:l,onStartSimulation:u,onSetIntensity:f,onResetSystem:h,onToggleIsolation:p,onToggleCompareMode:x})=>{const S=b0.findIndex(g=>g.id===l);return M.jsxs("div",{className:"flex flex-col gap-4 h-full",children:[M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border shadow-xl space-y-3",children:[M.jsxs("div",{className:"flex items-center justify-between pb-2 border-b border-console-border",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(Ss,{className:"w-4 h-4 text-cyan-400"}),M.jsx("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase",children:"EARTHQUAKE SIMULATOR"})]}),M.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-amber-950/80 text-amber-400 border border-amber-500/30 font-bold",children:"DEMO CONTROLS"})]}),M.jsxs("div",{className:"bg-console-card/90 border border-console-border p-2.5 rounded-lg",children:[M.jsxs("div",{className:"flex items-center justify-between font-mono text-xs mb-1.5",children:[M.jsxs("span",{className:"text-slate-300 font-bold flex items-center gap-1.5",children:[M.jsx(mi,{className:"w-4 h-4 text-cyan-400"})," ESDS ISOLATION:"]}),M.jsx("span",{className:`font-bold ${r?"text-emerald-400":"text-rose-400"}`,children:r?"ACTIVE (ON)":"DISABLED (OFF)"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-2 font-mono text-xs",children:[M.jsx("button",{onClick:p,className:`py-1.5 rounded font-bold transition-all flex items-center justify-center gap-1 ${r?"bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200":"bg-rose-950 border border-rose-500 text-rose-300 glow-critical"}`,children:M.jsx("span",{children:"[ OFF ] UNPROTECTED"})}),M.jsx("button",{onClick:p,className:`py-1.5 rounded font-bold transition-all flex items-center justify-center gap-1 ${r?"bg-emerald-950 border border-emerald-500 text-emerald-300 glow-safe":"bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200"}`,children:M.jsx("span",{children:"[ ON ] PROTECTED"})})]})]}),M.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[M.jsxs("button",{onClick:()=>u("NORMAL"),className:`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${s==="NORMAL"&&!t?"bg-emerald-950/90 border-emerald-500/60 text-emerald-300 ring-1 ring-emerald-500/50":"bg-console-card/80 border-console-border text-slate-300 hover:border-slate-600"}`,children:[M.jsx("div",{children:"NORMAL"}),M.jsx("div",{className:"text-[10px] text-slate-400 font-normal",children:"5%"})]}),M.jsxs("button",{onClick:()=>u("MODERATE"),className:`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${s==="MODERATE"?"bg-amber-950/90 border-amber-500/60 text-amber-300 ring-1 ring-amber-500/50":"bg-console-card/80 border-console-border text-slate-300 hover:border-amber-500/40"}`,children:[M.jsx("div",{children:"MODERATE"}),M.jsx("div",{className:"text-[10px] text-amber-400 font-normal",children:"55%"})]}),M.jsxs("button",{onClick:()=>u("SEVERE"),className:`py-2 px-2 rounded-lg border font-mono text-xs font-bold text-center transition-all ${s==="SEVERE"?"bg-rose-950/90 border-rose-500/60 text-rose-300 ring-1 ring-rose-500/50":"bg-console-card/80 border-console-border text-slate-300 hover:border-rose-500/40"}`,children:[M.jsx("div",{children:"SEVERE"}),M.jsx("div",{className:"text-[10px] text-rose-400 font-normal",children:"88%"})]})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2.5 rounded-lg",children:[M.jsxs("div",{className:"flex items-center justify-between text-xs font-mono mb-1",children:[M.jsxs("span",{className:"text-slate-300 flex items-center gap-1.5 font-semibold",children:[M.jsx(Wv,{className:"w-3.5 h-3.5 text-cyan-400"})," INTENSITY"]}),M.jsxs("span",{className:"text-amber-400 font-bold text-xs font-mono",children:[e,"%"]})]}),M.jsx("input",{type:"range",min:"0",max:"100",value:e,onChange:g=>f(parseInt(g.target.value,10)),className:"w-full h-2 bg-slate-900 rounded-lg appearance-none cursor-pointer accent-amber-400 border border-slate-800"})]}),M.jsxs("button",{onClick:()=>u(e>70?"SEVERE":e>20?"MODERATE":"NORMAL",e),disabled:t,className:`w-full py-3 px-4 rounded-xl font-mono font-extrabold text-xs lg:text-sm uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-xl ${t?"bg-slate-800 text-slate-500 cursor-not-allowed border border-slate-700":"bg-gradient-to-r from-amber-500 via-amber-600 to-amber-500 hover:from-amber-400 hover:to-amber-500 text-slate-950 border border-amber-300 glow-warning"}`,children:[M.jsx(Ss,{className:"w-5 h-5 fill-current animate-pulse"}),M.jsx("span",{children:"⚡ SIMULATE EARTHQUAKE"})]}),M.jsxs("div",{className:"grid grid-cols-3 gap-1.5 text-[11px] font-mono",children:[M.jsxs("button",{onClick:h,className:"py-1.5 px-2 rounded-lg bg-console-card border border-console-border text-slate-300 hover:border-slate-600 font-semibold flex items-center justify-center gap-1",children:[M.jsx(D0,{className:"w-3 h-3 text-cyan-400"}),M.jsx("span",{children:"RESET"})]}),M.jsxs("button",{onClick:()=>u("PUMP_VIBRATION"),disabled:t,className:"py-1.5 px-2 rounded-lg bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 hover:bg-cyan-900 font-semibold flex items-center justify-center gap-1 truncate",children:[M.jsx(I0,{className:"w-3 h-3 text-cyan-400"}),M.jsx("span",{children:"VIBE TEST"})]}),M.jsxs("button",{onClick:x,className:`py-1.5 px-2 rounded-lg border font-semibold flex items-center justify-center gap-1 truncate ${o?"bg-amber-950 border-amber-400 text-amber-300":"bg-console-card border-console-border text-slate-300 hover:border-amber-400"}`,children:[M.jsx(P0,{className:"w-3 h-3 text-amber-400"}),M.jsx("span",{children:"COMPARE"})]})]})]}),M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border shadow-xl space-y-3 flex-1 flex flex-col justify-between",children:[M.jsx("div",{className:"flex items-center justify-between pb-2 border-b border-console-border",children:M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(mo,{className:"w-4 h-4 text-cyan-400"}),M.jsx("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-100 tracking-wide uppercase",children:"SYSTEM RESPONSE"})]})}),M.jsx("div",{className:"space-y-2 flex-1 flex flex-col justify-between font-mono text-xs",children:b0.map((g,_)=>{const T=g.id===l,C=_<S||l==="RECOVERY";let y="bg-console-card/60 border-console-border text-slate-400",v="text-slate-500 border-slate-700 bg-slate-900",D=M.jsx(Ev,{className:"w-4 h-4 text-slate-600"});return T?(y="bg-amber-950/80 border-amber-400 text-amber-200 ring-1 ring-amber-400 glow-warning",v="text-slate-950 font-bold bg-amber-400 border-amber-300",D=M.jsx("span",{className:"w-3 h-3 rounded-full bg-amber-400 animate-ping"})):C&&(y="bg-emerald-950/40 border-emerald-800/60 text-emerald-300",v="text-emerald-300 bg-emerald-950 border-emerald-700",D=M.jsx(Tf,{className:"w-4 h-4 text-emerald-400"})),M.jsxs("div",{className:`p-2.5 rounded-lg border flex items-center justify-between transition-all duration-300 ${y}`,children:[M.jsxs("div",{className:"flex items-center gap-3",children:[M.jsx("span",{className:`w-5 h-5 rounded-full border text-[10px] flex items-center justify-center font-bold ${v}`,children:g.num}),M.jsxs("div",{children:[M.jsx("div",{className:"font-bold uppercase tracking-wider text-xs",children:g.title}),M.jsx("div",{className:"text-[10px] text-slate-400",children:g.desc})]})]}),M.jsx("div",{children:D})]},g.id)})})]})]})},FT=({metrics:s,dampers:e,phase:t,peakG:r})=>{const o=s.riskScore>60,l=s.riskScore>25,u=e.filter(f=>f.status!=="READY").length;return M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border flex flex-col justify-between h-full",children:[M.jsxs("div",{className:"flex items-center justify-between pb-2.5 border-b border-console-border mb-3",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(sc,{className:"w-4 h-4 text-emerald-400"}),M.jsx("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase",children:"ESDS DECISION ENGINE / SAFETY ASSESSMENT"})]}),M.jsx("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 border border-emerald-500/30",children:"ALGORITHM ACTIVE"})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-3",children:[M.jsxs("div",{className:`p-3 rounded-lg border flex flex-col justify-between transition-all ${o?"bg-rose-950/50 border-rose-500/60 text-rose-200 glow-critical":l?"bg-amber-950/50 border-amber-500/60 text-amber-200 glow-warning":"bg-console-card/80 border-console-border text-slate-200"}`,children:[M.jsxs("div",{className:"flex items-center justify-between text-[11px] font-mono text-slate-400",children:[M.jsx("span",{children:"RISK SCORE"}),o?M.jsx(mo,{className:"w-4 h-4 text-rose-400 animate-pulse"}):M.jsx(mi,{className:"w-4 h-4 text-emerald-400"})]}),M.jsxs("div",{className:"my-1",children:[M.jsx("span",{className:"font-mono text-2xl lg:text-3xl font-extrabold tracking-tight",children:s.riskScore}),M.jsx("span",{className:"text-xs font-mono text-slate-400",children:" / 100"})]}),M.jsx("div",{className:"w-full h-1.5 rounded-full bg-slate-900 overflow-hidden",children:M.jsx("div",{className:`h-full transition-all duration-300 ${o?"bg-rose-500":l?"bg-amber-500":"bg-emerald-500"}`,style:{width:`${s.riskScore}%`}})})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-3 rounded-lg flex flex-col justify-between",children:[M.jsx("div",{className:"text-[11px] font-mono text-slate-400",children:"SEISMIC CONFIDENCE"}),M.jsx("div",{className:"my-1",children:M.jsxs("span",{className:"font-mono text-2xl lg:text-3xl font-extrabold text-cyan-300",children:[s.seismicConfidence,"%"]})}),M.jsx("span",{className:"text-[10px] font-mono text-slate-400",children:"S/P Wave Spectral Match"})]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-3 mb-3",children:[M.jsxs("div",{className:"bg-console-card/60 border border-console-border p-2.5 rounded-lg",children:[M.jsx("span",{className:"text-[10px] font-mono text-slate-400 block mb-1",children:"SYSTEM RESPONSE"}),M.jsx("span",{className:`font-mono text-xs lg:text-sm font-bold px-2 py-0.5 rounded inline-block border ${s.responseMode==="STABILIZE"||s.responseMode==="EMERGENCY PROTOCOL"?"bg-emerald-950/80 border-emerald-500 text-emerald-300 animate-pulse":s.responseMode==="FILTERING"?"bg-cyan-950/80 border-cyan-500 text-cyan-300":"bg-slate-800 border-slate-700 text-slate-300"}`,children:s.responseMode})]}),M.jsxs("div",{className:"bg-console-card/60 border border-console-border p-2.5 rounded-lg",children:[M.jsx("span",{className:"text-[10px] font-mono text-slate-400 block mb-1",children:"STABILIZATION"}),M.jsx("span",{className:`font-mono text-xs lg:text-sm font-bold px-2 py-0.5 rounded inline-block border ${u>0?"bg-emerald-950/80 border-emerald-500 text-emerald-300":"bg-slate-800 border-slate-700 text-slate-400"}`,children:u>0?`ACTIVE (${u}/4 DAMPERS)`:"READY (0/4 ACTIVE)"})]})]}),M.jsxs("div",{className:"bg-slate-900/60 border border-slate-800 p-2.5 rounded-lg text-xs font-mono text-slate-300 flex items-center justify-between",children:[M.jsx("span",{className:"text-slate-400",children:"SIGNAL CLASSIFICATION:"}),M.jsx("span",{className:"font-semibold text-cyan-400",children:s.signalPattern})]})]})},Rd=[{id:"MONITOR",num:"01",label:"MONITOR",sub:"Scanning environment",icon:M.jsx(Cv,{className:"w-4 h-4"})},{id:"DETECT",num:"02",label:"DETECT",sub:"Seismic activity found",icon:M.jsx(Ef,{className:"w-4 h-4"})},{id:"ISOLATE",num:"03",label:"ISOLATE",sub:"Isolation systems active",icon:M.jsx(mo,{className:"w-4 h-4"})},{id:"PROTECT",num:"04",label:"PROTECT",sub:"Patient & equipment safe",icon:M.jsx(mi,{className:"w-4 h-4"})},{id:"SECURE",num:"05",label:"SECURE",sub:"System in secured state",icon:M.jsx(Fv,{className:"w-4 h-4"})}],kT=({currentPhase:s})=>{const e=Rd.findIndex(t=>t.id===s);return M.jsx("div",{className:"panel-glass rounded-xl p-3 border border-console-border w-full shadow-lg",children:M.jsx("div",{className:"flex flex-col sm:flex-row items-center justify-between gap-2 font-mono text-xs",children:Rd.map((t,r)=>{const o=t.id===s,l=r<e||s==="RECOVERY";let u="bg-console-card/60 border-console-border text-slate-400",f="bg-slate-900 text-slate-500 border-slate-700";return o?(u=t.id==="ISOLATE"||t.id==="PROTECT"||t.id==="SECURE"?"bg-emerald-950/90 border-emerald-400 text-emerald-200 glow-safe ring-1 ring-emerald-400":"bg-amber-950/90 border-amber-400 text-amber-200 glow-warning ring-1 ring-amber-400",f="bg-amber-400 text-slate-950 font-bold border-amber-300"):l&&(u="bg-emerald-950/40 border-emerald-800/60 text-emerald-300",f="bg-emerald-950 text-emerald-300 border-emerald-700"),M.jsxs(R0.Fragment,{children:[M.jsxs("div",{className:`flex-1 w-full p-2.5 rounded-lg border flex items-center gap-2.5 transition-all duration-300 ${u}`,children:[M.jsx("div",{className:`w-7 h-7 rounded-full border flex items-center justify-center font-bold flex-shrink-0 ${f}`,children:t.icon}),M.jsxs("div",{className:"truncate",children:[M.jsx("div",{className:"font-bold text-xs uppercase tracking-wider",children:t.label}),M.jsx("div",{className:"text-[10px] text-slate-400 truncate",children:t.sub})]})]}),r<Rd.length-1&&M.jsx(mv,{className:"hidden sm:block w-4 h-4 text-slate-600 flex-shrink-0"})]},t.id)})})})},BT=({metrics:s,onTriggerDemo:e,isSimulating:t})=>{const r=s.signalPattern==="ROUTINE_PUMP";return M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border",children:[M.jsxs("div",{className:"flex flex-wrap items-center justify-between gap-2 pb-3 border-b border-console-border mb-3",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(I0,{className:"w-4 h-4 text-cyan-400"}),M.jsx("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase",children:"INTELLIGENT SIGNAL FILTERING / FALSE-POSITIVE PREVENTION"})]}),M.jsxs("button",{onClick:e,disabled:t,className:"px-2.5 py-1 rounded bg-cyan-950 border border-cyan-500/50 text-cyan-300 hover:bg-cyan-900 font-mono text-[11px] font-semibold flex items-center gap-1.5 transition-colors",children:[M.jsx(Ss,{className:"w-3 h-3 text-cyan-400"}),M.jsx("span",{children:"TEST PUMP VIBRATION FILTER"})]})]}),M.jsxs("div",{className:"grid grid-cols-1 sm:grid-cols-5 gap-2 text-center font-mono text-xs mb-3",children:[M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2 rounded-lg",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"01 SENSE"}),M.jsx("span",{className:"text-slate-200 font-semibold",children:"ADXL345 Stream"})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2 rounded-lg",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"02 FILTER"}),M.jsx("span",{className:"text-cyan-400 font-semibold",children:"Bandpass (0.5-15Hz)"})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2 rounded-lg",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"03 VERIFY"}),M.jsx("span",{className:"text-slate-200 font-semibold",children:"Spectrum & S-Wave"})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2 rounded-lg",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"04 CLASSIFY"}),M.jsx("span",{className:`font-semibold ${r?"text-amber-400":"text-emerald-400"}`,children:r?"ROUTINE PUMP":"SEISMIC / NORMAL"})]}),M.jsxs("div",{className:"bg-console-card/80 border border-console-border p-2 rounded-lg",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"05 RESPOND"}),M.jsx("span",{className:"text-emerald-400 font-semibold",children:r?"SUPPRESS ALARM":"SAFE / ACTION"})]})]}),M.jsxs("div",{className:"bg-slate-900/80 border border-slate-800 p-2.5 rounded-lg text-[11px] font-mono text-slate-300 flex items-start gap-2",children:[M.jsx(mi,{className:"w-4 h-4 text-emerald-400 shrink-0 mt-0.5"}),M.jsxs("p",{className:"leading-relaxed",children:[M.jsx("strong",{children:"Why this matters:"})," ESDS is not a naive threshold trigger (",M.jsx("code",{className:"text-cyan-300 font-mono",children:"IF vibe > 0.25g → shutdown"}),"). High-frequency blood pump rotation (25Hz) is intelligently recognized and filtered, preventing costly false alarms and false dialysis machine shutdowns."]})]})]})},zT=({logs:s})=>M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border flex flex-col h-full",children:[M.jsxs("div",{className:"flex items-center justify-between pb-3 border-b border-console-border mb-3 shrink-0",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(wv,{className:"w-4 h-4 text-cyan-400"}),M.jsx("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase",children:"SYSTEM EVENT TIMELINE LOG"})]}),M.jsxs("span",{className:"text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400",children:["AUDIT TRAIL (",s.length,")"]})]}),M.jsx("div",{className:"flex-1 overflow-y-auto max-h-[260px] lg:max-h-[320px] space-y-2 pr-1",children:s.length===0?M.jsx("div",{className:"text-center text-slate-500 py-8 font-mono text-xs",children:"No events logged yet. System in baseline monitoring."}):s.map(e=>{let t="bg-slate-800 border-slate-700 text-slate-300",r=M.jsx(Dv,{className:"w-3.5 h-3.5 text-cyan-400 shrink-0"});return e.severity==="critical"?(t="bg-rose-950/80 border-rose-500/50 text-rose-300",r=M.jsx(mo,{className:"w-3.5 h-3.5 text-rose-400 shrink-0"})):e.severity==="warning"?(t="bg-amber-950/80 border-amber-500/50 text-amber-300",r=M.jsx(go,{className:"w-3.5 h-3.5 text-amber-400 shrink-0"})):e.severity==="success"&&(t="bg-emerald-950/80 border-emerald-500/50 text-emerald-300",r=M.jsx(yv,{className:"w-3.5 h-3.5 text-emerald-400 shrink-0"})),M.jsxs("div",{className:"p-2.5 rounded-lg bg-console-card/70 border border-console-border/80 flex items-start gap-2.5 font-mono text-xs transition-colors hover:bg-console-card",children:[M.jsx("div",{className:"mt-0.5",children:r}),M.jsxs("div",{className:"flex-1 min-w-0",children:[M.jsxs("div",{className:"flex items-center justify-between mb-1 gap-2",children:[M.jsx("span",{className:"text-cyan-300 font-semibold text-[11px]",children:e.timestamp}),M.jsx("span",{className:`text-[10px] px-1.5 py-0.2 rounded border font-bold uppercase ${t}`,children:e.step})]}),M.jsx("p",{className:"text-slate-300 leading-normal text-[11px] font-mono break-words",children:e.message})]})]},e.id)})})]}),VT=()=>{const[s,e]=tt.useState(!0);return M.jsxs("div",{className:"panel-glass rounded-xl p-4 border border-console-border w-full",children:[M.jsxs("div",{onClick:()=>e(!s),className:"flex items-center justify-between cursor-pointer select-none pb-2 border-b border-console-border",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(L0,{className:"w-4 h-4 text-cyan-400"}),M.jsx("h2",{className:"font-mono font-bold text-xs lg:text-sm text-slate-200 tracking-wide uppercase",children:"TECHNICAL SYSTEM ARCHITECTURE & FUTURE HARDWARE ROADMAP"})]}),M.jsxs("div",{className:"flex items-center gap-2 text-slate-400 text-xs font-mono",children:[M.jsx("span",{children:s?"COLLAPSE":"EXPAND"}),s?M.jsx(vv,{className:"w-4 h-4"}):M.jsx(N0,{className:"w-4 h-4"})]})]}),s&&M.jsxs("div",{className:"mt-4 space-y-4 font-mono text-xs animate-fade-in",children:[M.jsxs("div",{children:[M.jsx("span",{className:"text-[11px] text-slate-400 block mb-2 font-bold uppercase tracking-wider",children:"1. SOFTWARE DATA PIPELINE (CURRENT MVP)"}),M.jsxs("div",{className:"grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2 text-center",children:[M.jsxs("div",{className:"bg-console-card p-2 rounded border border-console-border text-[11px]",children:[M.jsx("span",{className:"text-cyan-400 block font-bold",children:"VIRTUAL SENSOR"}),M.jsx("span",{className:"text-slate-400 text-[10px]",children:"3-Axis Generator"})]}),M.jsxs("div",{className:"bg-console-card p-2 rounded border border-console-border text-[11px]",children:[M.jsx("span",{className:"text-cyan-400 block font-bold",children:"DATA STREAM"}),M.jsx("span",{className:"text-slate-400 text-[10px]",children:"100Hz Telemetry"})]}),M.jsxs("div",{className:"bg-console-card p-2 rounded border border-console-border text-[11px]",children:[M.jsx("span",{className:"text-cyan-400 block font-bold",children:"BANDPASS FILTER"}),M.jsx("span",{className:"text-slate-400 text-[10px]",children:"0.5 - 15 Hz"})]}),M.jsxs("div",{className:"bg-console-card p-2 rounded border border-console-border text-[11px]",children:[M.jsx("span",{className:"text-amber-400 block font-bold",children:"DETECTION"}),M.jsx("span",{className:"text-slate-400 text-[10px]",children:"Threshold Check"})]}),M.jsxs("div",{className:"bg-console-card p-2 rounded border border-console-border text-[11px]",children:[M.jsx("span",{className:"text-amber-400 block font-bold",children:"RISK ENGINE"}),M.jsx("span",{className:"text-slate-400 text-[10px]",children:"Score 0-100"})]}),M.jsxs("div",{className:"bg-console-card p-2 rounded border border-console-border text-[11px]",children:[M.jsx("span",{className:"text-emerald-400 block font-bold",children:"STABILIZE"}),M.jsx("span",{className:"text-slate-400 text-[10px]",children:"Active Dampers"})]}),M.jsxs("div",{className:"bg-console-card p-2 rounded border border-console-border text-[11px]",children:[M.jsx("span",{className:"text-emerald-400 block font-bold",children:"EVENT LOG"}),M.jsx("span",{className:"text-slate-400 text-[10px]",children:"Audit Trail"})]})]})]}),M.jsxs("div",{children:[M.jsx("span",{className:"text-[11px] text-slate-400 block mb-2 font-bold uppercase tracking-wider",children:"2. PRODUCTION HARDWARE ROADMAP MAPPING"}),M.jsxs("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-3",children:[M.jsxs("div",{className:"p-3 rounded-lg bg-console-card/80 border border-cyan-500/30",children:[M.jsxs("div",{className:"flex items-center gap-2 text-cyan-300 font-bold mb-2",children:[M.jsx(sc,{className:"w-4 h-4 text-cyan-400"}),M.jsx("span",{children:"CURRENT MVP (SOFTWARE SIMULATION)"})]}),M.jsxs("ul",{className:"space-y-1.5 text-slate-300 text-[11px]",children:[M.jsxs("li",{children:["• ",M.jsx("strong",{children:"Framework:"})," React + TypeScript + Vite"]}),M.jsxs("li",{children:["• ",M.jsx("strong",{children:"Graphics & Physics:"})," SVG Digital Twin + HTML5 Canvas oscilloscope"]}),M.jsxs("li",{children:["• ",M.jsx("strong",{children:"Engine:"})," Realtime 100Hz mathematical harmonic oscillator tick loop"]}),M.jsxs("li",{children:["• ",M.jsx("strong",{children:"State Machine:"})," 8-phase automatic safety controller"]})]})]}),M.jsxs("div",{className:"p-3 rounded-lg bg-console-card/80 border border-emerald-500/30",children:[M.jsxs("div",{className:"flex items-center gap-2 text-emerald-300 font-bold mb-2",children:[M.jsx(zv,{className:"w-4 h-4 text-emerald-400"}),M.jsx("span",{children:"FUTURE PHYSICAL HARDWARE IMPLEMENTATION"})]}),M.jsxs("ul",{className:"space-y-1.5 text-slate-300 text-[11px]",children:[M.jsxs("li",{children:["• ",M.jsx("strong",{children:"Microcontroller:"})," ESP32 Dual-Core 240MHz RISC-V"]}),M.jsxs("li",{children:["• ",M.jsx("strong",{children:"Sensor:"})," ADXL345 3-Axis Digital MEMS Accelerometer (I2C/SPI)"]}),M.jsxs("li",{children:["• ",M.jsx("strong",{children:"Actuators:"})," 4 Electro-Hydraulic Active Dampers + Base Electro-Magnet Lock"]}),M.jsxs("li",{children:["• ",M.jsx("strong",{children:"Interface:"})," Optocoupled Emergency Stop Relay to Dialysis Machine"]}),M.jsxs("li",{children:["• ",M.jsx("strong",{children:"Connectivity:"})," Wi-Fi / LoRaWAN IoT telemetry to Hospital ICU Hub"]})]})]})]})]})]})]})},HT=({alert:s,onDismiss:e})=>{if(!s||s.level==="NONE")return null;const t=s.level==="CRITICAL";return M.jsx("div",{className:`fixed top-16 right-4 lg:right-6 z-50 max-w-md w-full p-4 rounded-xl border shadow-2xl backdrop-blur-md transition-all duration-300 animate-slide-in ${t?"bg-rose-950/95 border-rose-500 text-rose-100 glow-critical":"bg-amber-950/95 border-amber-500 text-amber-100 glow-warning"}`,children:M.jsxs("div",{className:"flex items-start justify-between gap-3",children:[M.jsxs("div",{className:"flex items-start gap-3",children:[M.jsx("div",{className:`p-2 rounded-lg ${t?"bg-rose-900/80 text-rose-300 animate-pulse":"bg-amber-900/80 text-amber-300"}`,children:t?M.jsx(mo,{className:"w-6 h-6"}):M.jsx(go,{className:"w-6 h-6"})}),M.jsxs("div",{children:[M.jsx("h3",{className:"font-mono font-bold text-sm lg:text-base tracking-wider uppercase flex items-center gap-2",children:s.title}),M.jsx("p",{className:"text-xs font-mono text-slate-200 mt-1 leading-relaxed",children:s.message}),M.jsxs("div",{className:"mt-2 flex items-center gap-2 font-mono text-[11px]",children:[M.jsx("span",{className:"text-slate-400",children:"STATUS:"}),M.jsxs("span",{className:"px-2 py-0.5 rounded bg-emerald-950 border border-emerald-500/50 text-emerald-300 font-bold flex items-center gap-1",children:[M.jsx(Tf,{className:"w-3 h-3 text-emerald-400"}),s.statusText]}),M.jsx("span",{className:"text-slate-400 ml-auto",children:s.timestamp})]})]})]}),M.jsx("button",{onClick:e,className:"p-1 rounded text-slate-400 hover:text-slate-100 hover:bg-slate-800/60 transition-colors",children:M.jsx(Zv,{className:"w-4 h-4"})})]})})},GT=({isOpen:s,onClose:e,metrics:t,peakG:r,scenario:o})=>s?M.jsx("div",{className:"fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md animate-fade-in",children:M.jsxs("div",{className:"w-full max-w-lg bg-[#080d1a] border border-emerald-500/60 rounded-2xl p-6 shadow-2xl space-y-5 glow-safe",children:[M.jsxs("div",{className:"flex items-center gap-3 border-b border-console-border pb-4",children:[M.jsx("div",{className:"p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/40 text-emerald-400",children:M.jsx(mi,{className:"w-7 h-7 animate-bounce"})}),M.jsxs("div",{children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(Tf,{className:"w-4 h-4 text-emerald-400"}),M.jsx("h2",{className:"text-base lg:text-lg font-mono font-extrabold text-emerald-300 uppercase tracking-wider",children:"EVENT COMPLETE • EQUIPMENT SECURED"})]}),M.jsx("p",{className:"text-xs text-slate-400 font-mono mt-0.5",children:"ESDS seismic isolation response completed successfully."})]})]}),M.jsxs("div",{className:"grid grid-cols-2 gap-3 font-mono",children:[M.jsxs("div",{className:"bg-console-card p-3 rounded-xl border border-console-border",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"SCENARIO INTENSITY"}),M.jsx("span",{className:"text-sm font-bold text-amber-400",children:o})]}),M.jsxs("div",{className:"bg-console-card p-3 rounded-xl border border-console-border",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"PEAK DYNAMIC ACCEL"}),M.jsxs("span",{className:"text-sm font-bold text-cyan-400",children:[r.toFixed(2)," g"]})]}),M.jsxs("div",{className:"bg-console-card p-3 rounded-xl border border-console-border",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"POD MOTION REDUCTION"}),M.jsxs("span",{className:"text-sm font-bold text-emerald-400",children:[t.isolationEfficiency,"% REDUCTION"]})]}),M.jsxs("div",{className:"bg-console-card p-3 rounded-xl border border-console-border",children:[M.jsx("span",{className:"text-[10px] text-slate-400 block",children:"PATIENT SAFETY ZONE"}),M.jsx("span",{className:"text-sm font-bold text-emerald-400",children:"PROTECTED"})]})]}),M.jsxs("div",{className:"p-3 rounded-lg bg-emerald-950/40 border border-emerald-800/40 font-mono text-[11px] text-emerald-300/90 flex items-center gap-2",children:[M.jsx(Ef,{className:"w-4 h-4 text-emerald-400 flex-shrink-0"}),M.jsx("span",{children:"Simulated Digital Twin Performance. ESDS isolation locked in secured state."})]}),M.jsxs("button",{onClick:e,className:"w-full py-3 px-4 rounded-xl bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-mono text-xs lg:text-sm font-extrabold uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg transition-all",children:[M.jsx(D0,{className:"w-4 h-4"}),M.jsx("span",{children:"RETURN TO MONITORING"})]})]})}):null;function WT(){const{phase:s,systemStatus:e,activeScenario:t,intensity:r,isSimulating:o,isPaused:l,showRecoveryModal:u,isIsolationEnabled:f,compareMode:h,currentTelemetry:p,telemetryHistory:x,peakG:S,dampers:g,metrics:_,alert:T,eventLogs:C,startSimulation:y,setIntensity:v,resetSystem:D,pauseSimulation:U,acknowledgeAlert:R,toggleIsolation:L,toggleCompareMode:N}=cv();return M.jsxs("div",{className:"min-h-screen bg-[#060a14] text-slate-100 font-sans flex flex-col justify-between selection:bg-cyan-500/30",children:[M.jsx(HT,{alert:T,onDismiss:R}),M.jsx(GT,{isOpen:u,onClose:D,metrics:_,peakG:S,scenario:t}),M.jsx(Qv,{systemStatus:e,phase:s,isSimulating:o,compareMode:h,onToggleCompareMode:N}),M.jsxs("main",{className:"flex-1 w-full max-w-[1750px] mx-auto p-3 sm:p-4 lg:p-5 space-y-4",children:[M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",children:[M.jsx("div",{className:"lg:col-span-7 xl:col-span-8 flex flex-col",children:M.jsx(LT,{phase:s,telemetry:p,dampers:g,isSimulating:o,peakG:S,isIsolationEnabled:f,compareMode:h})}),M.jsx("div",{className:"lg:col-span-5 xl:col-span-4 flex flex-col",children:M.jsx(OT,{activeScenario:t,intensity:r,isSimulating:o,isPaused:l,isIsolationEnabled:f,compareMode:h,phase:s,onStartSimulation:y,onSetIntensity:v,onResetSystem:D,onPauseSimulation:U,onToggleIsolation:L,onToggleCompareMode:N})})]}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",children:[M.jsx("div",{className:"lg:col-span-8 flex flex-col",children:M.jsx(DT,{telemetry:p,metrics:_,peakG:S})}),M.jsx("div",{className:"lg:col-span-4 flex flex-col",children:M.jsx(UT,{history:x,metrics:_,phase:s})})]}),M.jsx(kT,{currentPhase:s,isSimulating:o}),M.jsxs("details",{className:"group w-full bg-console-card/60 border border-console-border rounded-xl p-4 transition-all",children:[M.jsxs("summary",{className:"flex items-center justify-between cursor-pointer font-mono font-bold text-xs lg:text-sm text-slate-300 uppercase select-none",children:[M.jsxs("div",{className:"flex items-center gap-2",children:[M.jsx(L0,{className:"w-4 h-4 text-cyan-400"}),M.jsx("span",{children:"TECHNICAL DETAILS & HARDWARE ROADMAP"})]}),M.jsx("div",{className:"flex items-center gap-1 text-slate-400 group-open:rotate-180 transition-transform",children:M.jsx(N0,{className:"w-4 h-4"})})]}),M.jsxs("div",{className:"mt-4 space-y-4 pt-4 border-t border-console-border",children:[M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch",children:[M.jsx("div",{className:"lg:col-span-6",children:M.jsx(FT,{metrics:_,dampers:g,phase:s,peakG:S})}),M.jsx("div",{className:"lg:col-span-6",children:M.jsx(BT,{metrics:_,onTriggerDemo:()=>y("PUMP_VIBRATION"),isSimulating:o})})]}),M.jsxs("div",{className:"grid grid-cols-1 lg:grid-cols-12 gap-4 items-start",children:[M.jsx("div",{className:"lg:col-span-7",children:M.jsx(zT,{logs:C})}),M.jsx("div",{className:"lg:col-span-5",children:M.jsx(VT,{})})]})]})]})]}),M.jsx("footer",{className:"w-full bg-[#040711] border-t border-console-border px-4 py-2 text-center font-mono text-[11px] text-slate-500",children:M.jsxs("div",{className:"max-w-[1750px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2",children:[M.jsxs("span",{className:"flex items-center gap-1.5 text-slate-400",children:[M.jsx(mi,{className:"w-3.5 h-3.5 text-cyan-400"}),"SOFTWARE DIGITAL TWIN • CONCEPTUAL MVP"]}),M.jsxs("span",{className:"text-amber-400/90 font-semibold flex items-center gap-1.5",children:[M.jsx(go,{className:"w-3.5 h-3.5 text-amber-400"}),"THIS IS A SIMULATION. NOT CONNECTED TO REAL MEDICAL EQUIPMENT."]}),M.jsx("span",{className:"text-slate-400 font-bold",children:"ESDS PROTECTED POD MVP v1.0"})]})})]})}lv.createRoot(document.getElementById("root")).render(M.jsx(R0.StrictMode,{children:M.jsx(WT,{})}));
