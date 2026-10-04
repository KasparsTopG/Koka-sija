(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();/**
* @vue/shared v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function vl(n){const t=Object.create(null);for(const e of n.split(","))t[e]=1;return e=>e in t}const re={},Ci=[],En=()=>{},Gu=()=>!1,uo=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&(n.charCodeAt(2)>122||n.charCodeAt(2)<97),ho=n=>n.startsWith("onUpdate:"),we=Object.assign,xl=(n,t)=>{const e=n.indexOf(t);e>-1&&n.splice(e,1)},Uf=Object.prototype.hasOwnProperty,Qt=(n,t)=>Uf.call(n,t),Ft=Array.isArray,li=n=>nr(n)==="[object Map]",Jr=n=>nr(n)==="[object Set]",ic=n=>nr(n)==="[object Date]",Ht=n=>typeof n=="function",pe=n=>typeof n=="string",bn=n=>typeof n=="symbol",se=n=>n!==null&&typeof n=="object",ku=n=>(se(n)||Ht(n))&&Ht(n.then)&&Ht(n.catch),Wu=Object.prototype.toString,nr=n=>Wu.call(n),Nf=n=>nr(n).slice(8,-1),Xu=n=>nr(n)==="[object Object]",Ml=n=>pe(n)&&n!=="NaN"&&n[0]!=="-"&&""+parseInt(n,10)===n,Hs=vl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),fo=n=>{const t=Object.create(null);return e=>t[e]||(t[e]=n(e))},Ff=/-\w/g,ln=fo(n=>n.replace(Ff,t=>t.slice(1).toUpperCase())),Of=/\B([A-Z])/g,Oi=fo(n=>n.replace(Of,"-$1").toLowerCase()),qu=fo(n=>n.charAt(0).toUpperCase()+n.slice(1)),Co=fo(n=>n?`on${qu(n)}`:""),xn=(n,t)=>!Object.is(n,t),kr=(n,...t)=>{for(let e=0;e<n.length;e++)n[e](...t)},Yu=(n,t,e,i=!1)=>{Object.defineProperty(n,t,{configurable:!0,enumerable:!1,writable:i,value:e})},Sl=n=>{const t=parseFloat(n);return isNaN(t)?n:t};let sc;const po=()=>sc||(sc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function El(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++){const i=n[e],s=pe(i)?Vf(i):El(i);if(s)for(const r in s)t[r]=s[r]}return t}else if(pe(n)||se(n))return n}const Bf=/;(?![^(]*\))/g,zf=/:([^]+)/,Hf=/"(?:[^"\\]|\\[^])*"|'(?:[^'\\]|\\[^])*'|\\[^]|\/\*[^]*?\*\//g;function Vf(n){const t={};return n.replace(Hf,e=>e.startsWith("/*")?"":e).split(Bf).forEach(e=>{if(e){const i=e.split(zf);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function yl(n){let t="";if(pe(n))t=n;else if(Ft(n))for(let e=0;e<n.length;e++){const i=yl(n[e]);i&&(t+=i+" ")}else if(se(n))for(const e in n)n[e]&&(t+=e+" ");return t.trim()}const Gf="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",kf=vl(Gf);function ju(n){return!!n||n===""}function Wf(n,t,e){if(n.length!==t.length)return!1;let i=!0;for(let s=0;i&&s<n.length;s++)i=mo(n[s],t[s],e);return i}function rc(n,t,e){if(n.size!==t.size)return!1;const i=Array.from(t),s=new Uint8Array(i.length);for(const r of n){let o=-1;for(let a=0;a<i.length;a++)if(!s[a]&&mo(r,i[a],e)){o=a;break}if(o<0)return!1;s[o]=1}return!0}function Xf(n,t,e){let i=li(n),s=li(t);if(i||s||(i=Jr(n),s=Jr(t),i||s))return i&&s?rc(n,t,e):!1;const r=Object.keys(n).length,o=Object.keys(t).length;if(r!==o)return!1;for(const a in n){const l=n.hasOwnProperty(a),c=t.hasOwnProperty(a);if(l&&!c||!l&&c||!mo(n[a],t[a],e))return!1}return String(n)===String(t)}function oc(n,t,e,i){e||(e=[new Map,new Map]);const[s,r]=e;if(s.has(n)||r.has(t))return s.get(n)===t&&r.get(t)===n;s.set(n,t),r.set(t,n);const o=i(n,t,e);return s.delete(n),r.delete(t),o}function mo(n,t,e){if(n===t)return!0;let i=ic(n),s=ic(t);return i||s?i&&s?n.getTime()===t.getTime():!1:(i=bn(n),s=bn(t),i||s?n===t:(i=Ft(n),s=Ft(t),i||s?i&&s?oc(n,t,e,Wf):!1:(i=se(n),s=se(t),i||s?!i||!s?!1:oc(n,t,e,Xf):String(n)===String(t))))}const Ku=n=>!!(n&&n.__v_isRef===!0),Ge=n=>pe(n)?n:n==null?"":Ft(n)||se(n)&&(n.toString===Wu||!Ht(n.toString))?Ku(n)?Ge(n.value):JSON.stringify(n,$u,2):String(n),$u=(n,t)=>Ku(t)?$u(n,t.value):li(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((e,[i,s],r)=>(e[Po(i,r)+" =>"]=s,e),{})}:Jr(t)?{[`Set(${t.size})`]:[...t.values()].map(e=>Po(e))}:bn(t)?Po(t):se(t)&&!Ft(t)&&!Xu(t)?String(t):t,Po=(n,t="")=>{var e;return bn(n)?`Symbol(${(e=n.description)!=null?e:t})`:n};/**
* @vue/reactivity v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Me;class qf{constructor(t=!1){this.detached=t,this._active=!0,this._on=0,this.effects=[],this.cleanups=[],this._isPaused=!1,this._warnOnRun=!0,this.__v_skip=!0,!t&&Me&&(Me.active?(this.parent=Me,this.index=(Me.scopes||(Me.scopes=[])).push(this)-1):(this._active=!1,this._warnOnRun=!1))}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let t,e;if(this.scopes){const i=this.scopes.slice();for(t=0,e=i.length;t<e;t++)i[t].pause()}for(t=0,e=this.effects.length;t<e;t++)this.effects[t].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let t,e;if(this.scopes){const s=this.scopes.slice();for(t=0,e=s.length;t<e;t++)s[t].resume()}const i=this.effects.slice();for(t=0,e=i.length;t<e;t++)i[t].resume()}}run(t){if(this._active){const e=Me;try{return Me=this,t()}finally{Me=e}}}on(){++this._on===1&&(this.prevScope=Me,Me=this)}off(){if(this._on>0&&--this._on===0){if(Me===this)Me=this.prevScope;else{let t=Me;for(;t;){if(t.prevScope===this){t.prevScope=this.prevScope;break}t=t.prevScope}}this.prevScope=void 0}}stop(t){if(this._active){this._active=!1;let e,i;for(e=0,i=this.effects.length;e<i;e++)this.effects[e].stop();for(this.effects.length=0,e=0,i=this.cleanups.length;e<i;e++)this.cleanups[e]();if(this.cleanups.length=0,this.scopes){const s=this.scopes.slice();for(e=0,i=s.length;e<i;e++)s[e].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!t){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0}}}function Yf(){return Me}let ae;const Do=new WeakSet;class Zu{constructor(t){this.fn=t,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,Me&&(Me.active?Me.effects.push(this):this.flags&=-2)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Do.has(this)&&(Do.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Qu(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,ac(this),th(this);const t=ae,e=cn;ae=this,cn=!0;try{return this.fn()}finally{eh(this),ae=t,cn=e,this.flags&=-3}}stop(){if(this.flags&1){for(let t=this.deps;t;t=t.nextDep)Al(t);this.deps=this.depsTail=void 0,ac(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Do.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Sa(this)&&this.run()}get dirty(){return Sa(this)}}let Ju=0,Vs,Gs;function Qu(n,t=!1){if(n.flags|=8,t){n.next=Gs,Gs=n;return}n.next=Vs,Vs=n}function Tl(){Ju++}function bl(){if(--Ju>0)return;if(Gs){let t=Gs;for(Gs=void 0;t;){const e=t.next;t.next=void 0,t.flags&=-9,t=e}}let n;for(;Vs;){let t=Vs;for(Vs=void 0;t;){const e=t.next;if(t.next=void 0,t.flags&=-9,t.flags&1)try{t.trigger()}catch(i){n||(n=i)}t=e}}if(n)throw n}function th(n){for(let t=n.deps;t;t=t.nextDep)t.version=-1,t.prevActiveLink=t.dep.activeLink,t.dep.activeLink=t}function eh(n){let t,e=n.depsTail,i=e;for(;i;){const s=i.prevDep;i.version===-1?(i===e&&(e=s),Al(i),jf(i)):t=i,i.dep.activeLink=i.prevActiveLink,i.prevActiveLink=void 0,i=s}n.deps=t,n.depsTail=e}function Sa(n){for(let t=n.deps;t;t=t.nextDep)if(t.dep.version!==t.version||t.dep.computed&&(nh(t.dep.computed)||t.dep.version!==t.version))return!0;return!!n._dirty}function nh(n){if(n.flags&4&&!(n.flags&16)||(n.flags&=-17,n.globalVersion===js)||(n.globalVersion=js,!n.isSSR&&n.flags&128&&(!n.deps&&!n._dirty||!Sa(n))))return;n.flags|=2;const t=n.dep,e=ae,i=cn;ae=n,cn=!0;try{th(n);const s=n.fn(n._value);(t.version===0||xn(s,n._value))&&(n.flags|=128,n._value=s,t.version++)}catch(s){throw t.version++,s}finally{ae=e,cn=i,eh(n),n.flags&=-3}}function Al(n,t=!1){const{dep:e,prevSub:i,nextSub:s}=n;if(i&&(i.nextSub=s,n.prevSub=void 0),s&&(s.prevSub=i,n.nextSub=void 0),e.subs===n&&(e.subs=i,!i&&e.computed)){e.computed.flags&=-5;for(let r=e.computed.deps;r;r=r.nextDep)Al(r,!0)}!t&&!--e.sc&&e.map&&e.map.delete(e.key)}function jf(n){const{prevDep:t,nextDep:e}=n;t&&(t.nextDep=e,n.prevDep=void 0),e&&(e.prevDep=t,n.nextDep=void 0)}let cn=!0;const ih=[];function qn(){ih.push(cn),cn=!1}function Yn(){const n=ih.pop();cn=n===void 0?!0:n}function ac(n){const{cleanup:t}=n;if(n.cleanup=void 0,t){const e=ae;ae=void 0;try{t()}finally{ae=e}}}let js=0;class Kf{constructor(t,e){this.sub=t,this.dep=e,this.version=e.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class wl{constructor(t){this.computed=t,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0,this.__v_skip=!0}track(t){if(!ae||!cn||ae===this.computed)return;let e=this.activeLink;if(e===void 0||e.sub!==ae)e=this.activeLink=new Kf(ae,this),ae.deps?(e.prevDep=ae.depsTail,ae.depsTail.nextDep=e,ae.depsTail=e):ae.deps=ae.depsTail=e,sh(e);else if(e.version===-1&&(e.version=this.version,e.nextDep)){const i=e.nextDep;i.prevDep=e.prevDep,e.prevDep&&(e.prevDep.nextDep=i),e.prevDep=ae.depsTail,e.nextDep=void 0,ae.depsTail.nextDep=e,ae.depsTail=e,ae.deps===e&&(ae.deps=i)}return e}trigger(t){this.version++,js++,this.notify(t)}notify(t){Tl();try{for(let e=this.subs;e;e=e.prevSub)e.sub.notify()&&e.sub.dep.notify()}finally{bl()}}}function sh(n){if(n.dep.sc++,n.sub.flags&4){const t=n.dep.computed;if(t&&!n.dep.subs){t.flags|=20;for(let i=t.deps;i;i=i.nextDep)sh(i)}const e=n.dep.subs;e!==n&&(n.prevSub=e,e&&(e.nextSub=n)),n.dep.subs=n}}const Ea=new WeakMap,Li=Symbol(""),ya=Symbol(""),Ks=Symbol("");function be(n,t,e){if(cn&&ae){let i=Ea.get(n);i||Ea.set(n,i=new Map);let s=i.get(e);s||(i.set(e,s=new wl),s.map=i,s.key=e),s.track()}}function Hn(n,t,e,i,s,r){const o=Ea.get(n);if(!o){js++;return}const a=l=>{l&&l.trigger()};if(Tl(),t==="clear")o.forEach(a);else{const l=Ft(n),c=l&&Ml(e);if(l&&e==="length"){const u=Number(i);o.forEach((h,d)=>{(d==="length"||d===Ks||!bn(d)&&d>=u)&&a(h)})}else switch((e!==void 0||o.has(void 0))&&a(o.get(e)),c&&a(o.get(Ks)),t){case"add":l?c&&a(o.get("length")):(a(o.get(Li)),li(n)&&a(o.get(ya)));break;case"delete":l||(a(o.get(Li)),li(n)&&a(o.get(ya)));break;case"set":li(n)&&a(o.get(Li));break}}bl()}function Hi(n){const t=Jt(n);return t===n||(be(t,"iterate",Ks),$e(n))?t:An(n)?ci(n)?t.map(e=>fi(Je(e))):t.map(fi):t.map(Je)}function _o(n){return be(n=Jt(n),"iterate",Ks),n}function _n(n,t){return An(n)?fi(ci(n)?Je(t):t):Je(t)}const $f={__proto__:null,[Symbol.iterator](){return Lo(this,Symbol.iterator,n=>_n(this,n))},concat(...n){return Hi(this).concat(...n.map(t=>Ft(t)?Hi(t):t))},entries(){return Lo(this,"entries",n=>(n[1]=_n(this,n[1]),n))},every(n,t){return Dn(this,"every",n,t,void 0,arguments)},filter(n,t){return Dn(this,"filter",n,t,e=>e.map(i=>_n(this,i)),arguments)},find(n,t){return Dn(this,"find",n,t,e=>_n(this,e),arguments)},findIndex(n,t){return Dn(this,"findIndex",n,t,void 0,arguments)},findLast(n,t){return Dn(this,"findLast",n,t,e=>_n(this,e),arguments)},findLastIndex(n,t){return Dn(this,"findLastIndex",n,t,void 0,arguments)},forEach(n,t){return Dn(this,"forEach",n,t,void 0,arguments)},includes(...n){return Io(this,"includes",n)},indexOf(...n){return Io(this,"indexOf",n)},join(n){return Hi(this).join(n)},lastIndexOf(...n){return Io(this,"lastIndexOf",n)},map(n,t){return Dn(this,"map",n,t,void 0,arguments)},pop(){return ws(this,"pop")},push(...n){return ws(this,"push",n)},reduce(n,...t){return lc(this,"reduce",n,t)},reduceRight(n,...t){return lc(this,"reduceRight",n,t)},shift(){return ws(this,"shift")},some(n,t){return Dn(this,"some",n,t,void 0,arguments)},splice(...n){return ws(this,"splice",n)},toReversed(){return Hi(this).toReversed()},toSorted(n){return Hi(this).toSorted(n)},toSpliced(...n){return Hi(this).toSpliced(...n)},unshift(...n){return ws(this,"unshift",n)},values(){return Lo(this,"values",n=>_n(this,n))}};function Lo(n,t,e){const i=_o(n),s=i[t]();return i!==n&&!$e(n)&&(s._next=s.next,s.next=()=>{const r=s._next();return r.done||(r.value=e(r.value)),r}),s}const Zf=Array.prototype;function Dn(n,t,e,i,s,r){const o=_o(n),a=o!==n&&!$e(n),l=o[t];if(l!==Zf[t]){const h=l.apply(n,r);return a?Je(h):h}let c=e;o!==n&&(a?c=function(h,d){return e.call(this,_n(n,h),d,n)}:e.length>2&&(c=function(h,d){return e.call(this,h,d,n)}));const u=l.call(o,c,i);return a&&s?s(u):u}function lc(n,t,e,i){const s=_o(n),r=s!==n&&!$e(n);let o=e,a=!1;s!==n&&(r?(a=i.length===0,o=function(c,u,h){return a&&(a=!1,c=_n(n,c)),e.call(this,c,_n(n,u),h,n)}):e.length>3&&(o=function(c,u,h){return e.call(this,c,u,h,n)}));const l=s[t](o,...i);return a?_n(n,l):l}function Io(n,t,e){const i=Jt(n);be(i,"iterate",Ks);const s=i[t](...e);return(s===-1||s===!1)&&Pl(e[0])?(e[0]=Jt(e[0]),i[t](...e)):s}function ws(n,t,e=[]){qn(),Tl();const i=Jt(n)[t].apply(n,e);return bl(),Yn(),i}const Jf=vl("__proto__,__v_isRef,__isVue"),rh=new Set(Object.getOwnPropertyNames(Symbol).filter(n=>n!=="arguments"&&n!=="caller").map(n=>Symbol[n]).filter(bn));function Qf(n){bn(n)||(n=String(n));const t=Jt(this);return be(t,"has",n),t.hasOwnProperty(n)}class oh{constructor(t=!1,e=!1){this._isReadonly=t,this._isShallow=e}get(t,e,i){if(e==="__v_skip")return t.__v_skip;const s=this._isReadonly,r=this._isShallow;if(e==="__v_isReactive")return!s;if(e==="__v_isReadonly")return s;if(e==="__v_isShallow")return r;if(e==="__v_raw")return i===(s?r?cd:uh:r?ch:lh).get(t)||Object.getPrototypeOf(t)===Object.getPrototypeOf(i)?t:void 0;const o=Ft(t);if(!s){let l;if(o&&(l=$f[e]))return l;if(e==="hasOwnProperty")return Qf}const a=Reflect.get(t,e,Ae(t)?t:i);if((bn(e)?rh.has(e):Jf(e))||(s||be(t,"get",e),r))return a;if(Ae(a)){const l=o&&Ml(e)?a:a.value;return s&&se(l)?ba(l):l}return se(a)?s?ba(a):$s(a):a}}class ah extends oh{constructor(t=!1){super(!1,t)}set(t,e,i,s){let r=t[e];const o=Ft(t)&&Ml(e);if(!this._isShallow){const c=An(r);if(!$e(i)&&!An(i)&&(r=Jt(r),i=Jt(i)),!o&&Ae(r)&&!Ae(i))return c||(r.value=i),!0}const a=o?Number(e)<t.length:Qt(t,e),l=Reflect.set(t,e,i,Ae(t)?t:s);return t===Jt(s)&&l&&(a?xn(i,r)&&Hn(t,"set",e,i):Hn(t,"add",e,i)),l}deleteProperty(t,e){const i=Qt(t,e);t[e];const s=Reflect.deleteProperty(t,e);return s&&i&&Hn(t,"delete",e,void 0),s}has(t,e){const i=Reflect.has(t,e);return(!bn(e)||!rh.has(e))&&be(t,"has",e),i}ownKeys(t){return be(t,"iterate",Ft(t)?"length":Li),Reflect.ownKeys(t)}}class td extends oh{constructor(t=!1){super(!0,t)}set(t,e){return!0}deleteProperty(t,e){return!0}}const ed=new ah,nd=new td,id=new ah(!0);const Ta=n=>n,ur=n=>Reflect.getPrototypeOf(n);function sd(n,t,e){return function(...i){const s=this.__v_raw,r=Jt(s),o=li(r),a=n==="entries"||n===Symbol.iterator&&o,l=n==="keys"&&o,c=s[n](...i),u=e?Ta:t?fi:Je;return!t&&be(r,"iterate",l?ya:Li),we(Object.create(c),{next(){const{value:h,done:d}=c.next();return d?{value:h,done:d}:{value:a?[u(h[0]),u(h[1])]:u(h),done:d}}})}}function hr(n){return function(...t){return n==="delete"?!1:n==="clear"?void 0:this}}function rd(n,t){const e={get(s){const r=this.__v_raw,o=Jt(r),a=Jt(s);n||(xn(s,a)&&be(o,"get",s),be(o,"get",a));const{has:l}=ur(o),c=t?Ta:n?fi:Je;if(l.call(o,s))return c(r.get(s));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(s)},get size(){const s=this.__v_raw;return!n&&be(Jt(s),"iterate",Li),s.size},has(s){const r=this.__v_raw,o=Jt(r),a=Jt(s);return n||(xn(s,a)&&be(o,"has",s),be(o,"has",a)),s===a?r.has(s):r.has(s)||r.has(a)},forEach(s,r){const o=this,a=o.__v_raw,l=Jt(a),c=t?Ta:n?fi:Je;return!n&&be(l,"iterate",Li),a.forEach((u,h)=>s.call(r,c(u),c(h),o))}};return we(e,n?{add:hr("add"),set:hr("set"),delete:hr("delete"),clear:hr("clear")}:{add(s){const r=Jt(this),o=ur(r),a=Jt(s),l=!t&&!$e(s)&&!An(s)?a:s;return o.has.call(r,l)||xn(s,l)&&o.has.call(r,s)||xn(a,l)&&o.has.call(r,a)||(r.add(l),Hn(r,"add",l,l)),this},set(s,r){!t&&!$e(r)&&!An(r)&&(r=Jt(r));const o=Jt(this),{has:a,get:l}=ur(o);let c=a.call(o,s);c||(s=Jt(s),c=a.call(o,s));const u=l.call(o,s);return o.set(s,r),c?xn(r,u)&&Hn(o,"set",s,r):Hn(o,"add",s,r),this},delete(s){const r=Jt(this),{has:o,get:a}=ur(r);let l=o.call(r,s);l||(s=Jt(s),l=o.call(r,s)),a&&a.call(r,s);const c=r.delete(s);return l&&Hn(r,"delete",s,void 0),c},clear(){const s=Jt(this),r=s.size!==0,o=s.clear();return r&&Hn(s,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(s=>{e[s]=sd(s,n,t)}),e}function Rl(n,t){const e=rd(n,t);return(i,s,r)=>s==="__v_isReactive"?!n:s==="__v_isReadonly"?n:s==="__v_raw"?i:Reflect.get(Qt(e,s)&&s in i?e:i,s,r)}const od={get:Rl(!1,!1)},ad={get:Rl(!1,!0)},ld={get:Rl(!0,!1)};const lh=new WeakMap,ch=new WeakMap,uh=new WeakMap,cd=new WeakMap;function ud(n){switch(n){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function $s(n){return An(n)?n:Cl(n,!1,ed,od,lh)}function hd(n){return Cl(n,!1,id,ad,ch)}function ba(n){return Cl(n,!0,nd,ld,uh)}function Cl(n,t,e,i,s){if(!se(n)||n.__v_raw&&!(t&&n.__v_isReactive)||n.__v_skip||!Object.isExtensible(n))return n;const r=s.get(n);if(r)return r;const o=ud(Nf(n));if(o===0)return n;const a=new Proxy(n,o===2?i:e);return s.set(n,a),a}function ci(n){return An(n)?ci(n.__v_raw):!!(n&&n.__v_isReactive)}function An(n){return!!(n&&n.__v_isReadonly)}function $e(n){return!!(n&&n.__v_isShallow)}function Pl(n){return n?!!n.__v_raw:!1}function Jt(n){const t=n&&n.__v_raw;return t?Jt(t):n}function fd(n){return!Qt(n,"__v_skip")&&Object.isExtensible(n)&&Yu(n,"__v_skip",!0),n}const Je=n=>se(n)?$s(n):n,fi=n=>se(n)?ba(n):n;function Ae(n){return n?n.__v_isRef===!0:!1}function is(n){return dd(n,!1)}function dd(n,t){return Ae(n)?n:new pd(n,t)}class pd{constructor(t,e){this.dep=new wl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=e?t:Jt(t),this._value=e?t:Je(t),this.__v_isShallow=e}get value(){return this.dep.track(),this._value}set value(t){const e=this._rawValue,i=this.__v_isShallow||$e(t)||An(t);t=i?t:Jt(t),xn(t,e)&&(this._rawValue=t,this._value=i?t:Je(t),this.dep.trigger())}}function md(n){return Ae(n)?n.value:n}const _d={get:(n,t,e)=>t==="__v_raw"?n:md(Reflect.get(n,t,e)),set:(n,t,e,i)=>{const s=n[t];return Ae(s)&&!Ae(e)?(s.value=e,!0):Reflect.set(n,t,e,i)}};function hh(n){return ci(n)?n:new Proxy(n,_d)}class gd{constructor(t,e,i){this.fn=t,this.setter=e,this._value=void 0,this.dep=new wl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=js-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!e,this.isSSR=i}notify(){if(this.flags|=16,!(this.flags&8)&&ae!==this)return Qu(this,!0),!0}get value(){const t=this.dep.track();return nh(this),t&&(t.version=this.dep.version),this._value}set value(t){this.setter&&this.setter(t)}}function vd(n,t,e=!1){let i,s;return Ht(n)?i=n:(i=n.get,s=n.set),new gd(i,s,e)}const fr={},Qr=new WeakMap;let Ti;function xd(n,t=!1,e=Ti){if(e){let i=Qr.get(e);i||Qr.set(e,i=[]),i.push(n)}}function Md(n,t,e=re){const{immediate:i,deep:s,once:r,scheduler:o,augmentJob:a,call:l}=e,c=S=>s?S:$e(S)||s===!1||s===0?Vn(S,1):Vn(S);let u,h,d,m,v=!1,_=!1;if(Ae(n)?(h=()=>n.value,v=$e(n)):ci(n)?(h=()=>c(n),v=!0):Ft(n)?(_=!0,v=n.some(S=>ci(S)||$e(S)),h=()=>n.map(S=>{if(Ae(S))return S.value;if(ci(S))return c(S);if(Ht(S))return l?l(S,2):S()})):Ht(n)?t?h=l?()=>l(n,2):n:h=()=>{if(d){qn();try{d()}finally{Yn()}}const S=Ti;Ti=u;try{return l?l(n,3,[m]):n(m)}finally{Ti=S}}:h=En,t&&s){const S=h,z=s===!0?1/0:s;h=()=>Vn(S(),z)}const p=Yf(),f=()=>{u.stop(),p&&p.active&&xl(p.effects,u)};if(r&&t){const S=t;t=(...z)=>{const L=S(...z);return f(),L}}let w=_?new Array(n.length).fill(fr):fr;const A=S=>{if(!(!(u.flags&1)||!u.dirty&&!S))if(t){const z=u.run();if(S||s||v||(_?z.some((L,P)=>xn(L,w[P])):xn(z,w))){d&&d();const L=Ti;Ti=u;try{const P=[z,w===fr?void 0:_&&w[0]===fr?[]:w,m];w=z,l?l(t,3,P):t(...P)}finally{Ti=L}}}else u.run()};return a&&a(A),u=new Zu(h),u.scheduler=o?()=>o(A,!1):A,m=S=>xd(S,!1,u),d=u.onStop=()=>{const S=Qr.get(u);if(S){if(l)l(S,4);else for(const z of S)z();Qr.delete(u)}},t?i?A(!0):w=u.run():o?o(A.bind(null,!0),!0):u.run(),f.pause=u.pause.bind(u),f.resume=u.resume.bind(u),f.stop=f,f}function Vn(n,t=1/0,e){if(t<=0||!se(n)||n.__v_skip||(e=e||new Map,(e.get(n)||0)>=t))return n;if(e.set(n,t),t--,Ae(n))Vn(n.value,t,e);else if(Ft(n))for(let i=0;i<n.length;i++)Vn(n[i],t,e);else if(Jr(n)||li(n))n.forEach(i=>{Vn(i,t,e)});else if(Xu(n)){for(const i in n)Vn(n[i],t,e);for(const i of Object.getOwnPropertySymbols(n))Object.prototype.propertyIsEnumerable.call(n,i)&&Vn(n[i],t,e)}return n}/**
* @vue/runtime-core v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ir(n,t,e,i){try{return i?n(...i):n()}catch(s){go(s,t,e)}}function hn(n,t,e,i){if(Ht(n)){const s=ir(n,t,e,i);return s&&ku(s)&&s.catch(r=>{go(r,t,e)}),s}if(Ft(n)){const s=[];for(let r=0;r<n.length;r++)s.push(hn(n[r],t,e,i));return s}}function go(n,t,e,i=!0){const s=t?t.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=t&&t.appContext.config||re;if(t){let a=t.parent;const l=t.proxy,c=`https://vuejs.org/error-reference/#runtime-${e}`;for(;a;){const u=a.ec;if(u){for(let h=0;h<u.length;h++)if(u[h](n,l,c)===!1)return}a=a.parent}if(r){qn(),ir(r,null,10,[n,l,c]),Yn();return}}Sd(n,e,s,i,o)}function Sd(n,t,e,i=!0,s=!1){if(s)throw n;console.error(n)}const Pe=[];let mn=-1;const ls=[];let ri=null,ss=0;const fh=Promise.resolve();let to=null;function Ed(n){const t=to||fh;return n?t.then(this?n.bind(this):n):t}function yd(n){let t=mn+1,e=Pe.length;for(;t<e;){const i=t+e>>>1,s=Pe[i],r=Zs(s);r<n||r===n&&s.flags&2?t=i+1:e=i}return t}function Dl(n){if(!(n.flags&1)){const t=Zs(n),e=Pe[Pe.length-1];!e||!(n.flags&2)&&t>=Zs(e)?Pe.push(n):Pe.splice(yd(t),0,n),n.flags|=1,dh()}}function dh(){to||(to=fh.then(mh))}function Td(n){if(!Ft(n))ri&&n.id===-1?ri.splice(ss+1,0,n):n.flags&1||(ls.push(n),n.flags|=1);else for(let t=0;t<n.length;t++)ls.push(n[t]);dh()}function cc(n,t,e=mn+1){for(;e<Pe.length;e++){const i=Pe[e];if(i&&i.flags&2){if(n&&i.id!==n.uid)continue;Pe.splice(e,1),e--,i.flags&4&&(i.flags&=-2),i(),i.flags&4||(i.flags&=-2)}}}function ph(n){if(ls.length){const t=[...new Set(ls)].sort((e,i)=>Zs(e)-Zs(i));if(ls.length=0,ri){for(let e=0;e<t.length;e++)ri.push(t[e]);return}for(ri=t,ss=0;ss<ri.length;ss++){const e=ri[ss];e.flags&4&&(e.flags&=-2),e.flags&8||e(),e.flags&=-2}ri=null,ss=0}}const Zs=n=>n.id==null?n.flags&2?-1:1/0:n.id;function mh(n){try{for(mn=0;mn<Pe.length;mn++){const t=Pe[mn];t&&!(t.flags&8)&&(t.flags&4&&(t.flags&=-2),ir(t,t.i,t.i?15:14),t.flags&4||(t.flags&=-2))}}finally{for(;mn<Pe.length;mn++){const t=Pe[mn];t&&(t.flags&=-2)}mn=-1,Pe.length=0,ph(),to=null,(Pe.length||ls.length)&&mh()}}let Ke=null,_h=null;function eo(n){const t=Ke;return Ke=n,_h=n&&n.type.__scopeId||null,t}function bd(n,t=Ke,e){if(!t||n._n)return n;const i=(...s)=>{i._d&&Mc(-1);const r=eo(t),o=Ii.length;let a;try{a=n(...s)}finally{for(let l=Ii.length;l>o;l--)Vh();eo(r),i._d&&Mc(1)}return a};return i._n=!0,i._c=!0,i._d=!0,i}function Vi(n,t){if(Ke===null)return n;const e=Eo(Ke),i=n.dirs||(n.dirs=[]);for(let s=0;s<t.length;s++){let[r,o,a,l=re]=t[s];r&&(Ht(r)&&(r={mounted:r,updated:r}),r.deep&&Vn(o),i.push({dir:r,instance:e,value:o,oldValue:void 0,arg:a,modifiers:l}))}return n}function _i(n,t,e,i){const s=n.dirs,r=t&&t.dirs;for(let o=0;o<s.length;o++){const a=s[o];r&&(a.oldValue=r[o].value);let l=a.dir[i];l&&(qn(),hn(l,e,8,[n.el,a,n,t]),Yn())}}function Ad(n,t){if(Le){let e=Le.provides;const i=Le.parent&&Le.parent.provides;i===e&&(e=Le.provides=Object.create(i)),e[n]=t}}function Wr(n,t,e=!1){const i=Tp();if(i||cs){let s=cs?cs._context.provides:i?i.parent==null||i.ce?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:void 0;if(s&&n in s)return s[n];if(arguments.length>1)return e&&Ht(t)?t.call(i&&i.proxy):t}}const wd=Symbol.for("v-scx"),Rd=()=>Wr(wd);function ks(n,t,e){return gh(n,t,e)}function gh(n,t,e=re){const{immediate:i,deep:s,flush:r,once:o}=e,a=we({},e),l=t&&i||!t&&r!=="post";let c;if(tr){if(r==="sync"){const m=Rd();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=En,m.resume=En,m.pause=En,m}}const u=Le;a.call=(m,v,_)=>hn(m,u,v,_);let h=!1;r==="post"?a.scheduler=m=>{Fe(m,u&&u.suspense)}:r!=="sync"&&(h=!0,a.scheduler=(m,v)=>{v?m():Dl(m)}),a.augmentJob=m=>{t&&(m.flags|=4),h&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const d=Md(n,t,a);return tr&&(c?c.push(d):l&&d()),d}function Cd(n,t,e){const i=this.proxy,s=pe(n)?n.includes(".")?vh(i,n):()=>i[n]:n.bind(i,i);let r;Ht(t)?r=t:(r=t.handler,e=t);const o=sr(this),a=gh(s,r.bind(i),e);return o(),a}function vh(n,t){const e=t.split(".");return()=>{let i=n;for(let s=0;s<e.length&&i;s++)i=i[e[s]];return i}}const Pd=Symbol("_vte"),vo=n=>n.__isTeleport,Uo=Symbol("_leaveCb");function Dd(n){let t=n[0];if(n.length>1){for(const e of n)if(e.type!==jn){t=e;break}}return t}function xh(n){if(!Il(n))return vo(n.type)&&n.children?Dd(n.children):n;if(n.component)return n.component.subTree;const{shapeFlag:t,children:e}=n;if(e){if(t&16)return e[0];if(t&32&&Ht(e.default))return e.default()}}function Ll(n,t){if(n.shapeFlag&6&&n.component){n.transition=t;const e=n.component.subTree;Ll(vo(e.type)&&xh(e)||e,t)}else n.shapeFlag&128?(n.ssContent.transition=t.clone(n.ssContent),n.ssFallback.transition=t.clone(n.ssFallback)):n.transition=t}function Mh(n){n.ids=[n.ids[0]+n.ids[2]+++"-",0,0]}function uc(n,t){let e;return!!((e=Object.getOwnPropertyDescriptor(n,t))&&!e.configurable)}const no=new WeakMap;function Ws(n,t,e,i,s=!1){if(Ft(n)){n.forEach((_,p)=>Ws(_,t&&(Ft(t)?t[p]:t),e,i,s));return}if(Xs(i)&&!s){i.shapeFlag&512&&i.type.__asyncResolved&&i.component.subTree.component&&Ws(n,t,e,i.component.subTree);return}const r=i.shapeFlag&4?Eo(i.component):i.el,o=s?null:r,{i:a,r:l}=n,c=t&&t.r,u=a.refs===re?a.refs={}:a.refs,h=a.setupState,d=Jt(h),m=h===re?Gu:_=>uc(u,_)?!1:Qt(d,_),v=(_,p)=>!(p&&uc(u,p));if(c!=null&&c!==l){if(hc(t),pe(c))u[c]=null,m(c)&&(h[c]=null);else if(Ae(c)){const _=t;v(c,_.k)&&(c.value=null),_.k&&(u[_.k]=null)}}if(Ht(l))ir(l,a,12,[o,u]);else{const _=pe(l),p=Ae(l);if(_||p){const f=()=>{if(n.f){const w=_?m(l)?h[l]:u[l]:v()||!n.k?l.value:u[n.k];if(s)Ft(w)&&xl(w,r);else if(Ft(w))w.includes(r)||w.push(r);else if(_)u[l]=[r],m(l)&&(h[l]=u[l]);else{const A=[r];v(l,n.k)&&(l.value=A),n.k&&(u[n.k]=A)}}else _?(u[l]=o,m(l)&&(h[l]=o)):p&&(v(l,n.k)&&(l.value=o),n.k&&(u[n.k]=o))};if(o){const w=()=>{f(),no.delete(n)};w.id=-1,no.set(n,w),Fe(w,e)}else hc(n),f()}}}function hc(n){const t=no.get(n);t&&(t.flags|=8,no.delete(n))}po().requestIdleCallback;po().cancelIdleCallback;const Xs=n=>!!n.type.__asyncLoader,Il=n=>n.type.__isKeepAlive;function Ld(n,t){Sh(n,"a",t)}function Id(n,t){Sh(n,"da",t)}function Sh(n,t,e=Le){const i=n.__wdc||(n.__wdc=()=>{let s=e;for(;s;){if(s.isDeactivated)return;s=s.parent}return n()});if(xo(t,i,e),e){let s=e.parent;for(;s&&s.parent;)Il(s.parent.vnode)&&Ud(i,t,e,s),s=s.parent}}function Ud(n,t,e,i){const s=xo(t,n,i,!0);yh(()=>{xl(i[t],s)},e)}function xo(n,t,e=Le,i=!1){if(e){const s=e[n]||(e[n]=[]),r=t.__weh||(t.__weh=(...o)=>{qn();const a=sr(e),l=hn(t,e,n,o);return a(),Yn(),l});return i?s.unshift(r):s.push(r),r}}const $n=n=>(t,e=Le)=>{(!tr||n==="sp")&&xo(n,(...i)=>t(...i),e)},Nd=$n("bm"),Ul=$n("m"),Fd=$n("bu"),Od=$n("u"),Eh=$n("bum"),yh=$n("um"),Bd=$n("sp"),zd=$n("rtg"),Hd=$n("rtc");function Vd(n,t=Le){xo("ec",n,t)}const Gd=Symbol.for("v-ndc");function kd(n,t,e,i){let s;const r=e,o=Ft(n);if(o||pe(n)){const a=o&&ci(n);let l=!1,c=!1;a&&(l=!$e(n),c=An(n),n=_o(n)),s=new Array(n.length);for(let u=0,h=n.length;u<h;u++)s[u]=t(l?c?fi(Je(n[u])):Je(n[u]):n[u],u,void 0,r)}else if(typeof n=="number"){s=new Array(n);for(let a=0;a<n;a++)s[a]=t(a+1,a,void 0,r)}else if(se(n))if(n[Symbol.iterator])s=Array.from(n,(a,l)=>t(a,l,void 0,r));else{const a=Object.keys(n);s=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];s[l]=t(n[u],u,l,r)}}else s=[];return s}const Aa=n=>n?Xh(n)?Eo(n):Aa(n.parent):null,qs=we(Object.create(null),{$:n=>n,$el:n=>n.vnode.el,$data:n=>n.data,$props:n=>n.props,$attrs:n=>n.attrs,$slots:n=>n.slots,$refs:n=>n.refs,$parent:n=>Aa(n.parent),$root:n=>Aa(n.root),$host:n=>n.ce,$emit:n=>n.emit,$options:n=>bh(n),$forceUpdate:n=>n.f||(n.f=()=>{Dl(n.update)}),$nextTick:n=>n.n||(n.n=Ed.bind(n.proxy)),$watch:n=>Cd.bind(n)}),No=(n,t)=>n!==re&&!n.__isScriptSetup&&Qt(n,t),Wd={get({_:n},t){if(t==="__v_skip")return!0;const{ctx:e,setupState:i,data:s,props:r,accessCache:o,type:a,appContext:l}=n;if(t[0]!=="$"){const d=o[t];if(d!==void 0)switch(d){case 1:return i[t];case 2:return s[t];case 4:return e[t];case 3:return r[t]}else{if(No(i,t))return o[t]=1,i[t];if(s!==re&&Qt(s,t))return o[t]=2,s[t];if(Qt(r,t))return o[t]=3,r[t];if(e!==re&&Qt(e,t))return o[t]=4,e[t];wa&&(o[t]=0)}}const c=qs[t];let u,h;if(c)return t==="$attrs"&&be(n.attrs,"get",""),c(n);if((u=a.__cssModules)&&(u=u[t]))return u;if(e!==re&&Qt(e,t))return o[t]=4,e[t];if(h=l.config.globalProperties,Qt(h,t))return h[t]},set({_:n},t,e){const{data:i,setupState:s,ctx:r}=n;return No(s,t)?(s[t]=e,!0):i!==re&&Qt(i,t)?(i[t]=e,!0):Qt(n.props,t)||t[0]==="$"&&t.slice(1)in n?!1:(r[t]=e,!0)},has({_:{data:n,setupState:t,accessCache:e,ctx:i,appContext:s,props:r,type:o}},a){let l;return!!(e[a]||n!==re&&a[0]!=="$"&&Qt(n,a)||No(t,a)||Qt(r,a)||Qt(i,a)||Qt(qs,a)||Qt(s.config.globalProperties,a)||(l=o.__cssModules)&&l[a])},defineProperty(n,t,e){return e.get!=null?n._.accessCache[t]=0:Qt(e,"value")&&this.set(n,t,e.value,null),Reflect.defineProperty(n,t,e)}};function fc(n){return Ft(n)?n.reduce((t,e)=>(t[e]=null,t),{}):n}let wa=!0;function Xd(n){const t=bh(n),e=n.proxy,i=n.ctx;wa=!1,t.beforeCreate&&dc(t.beforeCreate,n,"bc");const{data:s,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:h,mounted:d,beforeUpdate:m,updated:v,activated:_,deactivated:p,beforeDestroy:f,beforeUnmount:w,destroyed:A,unmounted:S,render:z,renderTracked:L,renderTriggered:P,errorCaptured:F,serverPrefetch:T,expose:E,inheritAttrs:D,components:Q,directives:Y,filters:it}=t;if(c&&qd(c,i,null),o)for(const J in o){const H=o[J];Ht(H)&&(i[J]=H.bind(e))}if(s){const J=s.call(e,e);se(J)&&(n.data=$s(J))}if(wa=!0,r)for(const J in r){const H=r[J],ft=Ht(H)?H.bind(e,e):Ht(H.get)?H.get.bind(e,e):En,Mt=!Ht(H)&&Ht(H.set)?H.set.bind(e):En,yt=Pp({get:ft,set:Mt});Object.defineProperty(i,J,{enumerable:!0,configurable:!0,get:()=>yt.value,set:Dt=>yt.value=Dt})}if(a)for(const J in a)Th(a[J],i,e,J);if(l){const J=Ht(l)?l.call(e):l;Reflect.ownKeys(J).forEach(H=>{Ad(H,J[H])})}u&&dc(u,n,"c");function Z(J,H){Ft(H)?H.forEach(ft=>J(ft.bind(e))):H&&J(H.bind(e))}if(Z(Nd,h),Z(Ul,d),Z(Fd,m),Z(Od,v),Z(Ld,_),Z(Id,p),Z(Vd,F),Z(Hd,L),Z(zd,P),Z(Eh,w),Z(yh,S),Z(Bd,T),Ft(E))if(E.length){const J=n.exposed||(n.exposed={});E.forEach(H=>{Object.defineProperty(J,H,{get:()=>e[H],set:ft=>e[H]=ft,enumerable:!0})})}else n.exposed||(n.exposed={});z&&n.render===En&&(n.render=z),D!=null&&(n.inheritAttrs=D),Q&&(n.components=Q),Y&&(n.directives=Y),T&&Mh(n)}function qd(n,t,e=En){Ft(n)&&(n=Ra(n));for(const i in n){const s=n[i];let r;se(s)?"default"in s?r=Wr(s.from||i,s.default,!0):r=Wr(s.from||i):r=Wr(s),Ae(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):t[i]=r}}function dc(n,t,e){hn(Ft(n)?n.map(i=>i.bind(t.proxy)):n.bind(t.proxy),t,e)}function Th(n,t,e,i){let s=i.includes(".")?vh(e,i):()=>e[i];if(pe(n)){const r=t[n];Ht(r)&&ks(s,r)}else if(Ht(n))ks(s,n.bind(e));else if(se(n))if(Ft(n))n.forEach(r=>Th(r,t,e,i));else{const r=Ht(n.handler)?n.handler.bind(e):t[n.handler];Ht(r)&&ks(s,r,n)}}function bh(n){const t=n.type,{mixins:e,extends:i}=t,{mixins:s,optionsCache:r,config:{optionMergeStrategies:o}}=n.appContext,a=r.get(t);let l;return a?l=a:!s.length&&!e&&!i?l=t:(l={},s.length&&s.forEach(c=>io(l,c,o,!0)),io(l,t,o)),se(t)&&r.set(t,l),l}function io(n,t,e,i=!1){const{mixins:s,extends:r}=t;r&&io(n,r,e,!0),s&&s.forEach(o=>io(n,o,e,!0));for(const o in t)if(!(i&&o==="expose")){const a=Yd[o]||e&&e[o];n[o]=a?a(n[o],t[o]):t[o]}return n}const Yd={data:pc,props:mc,emits:mc,methods:Ns,computed:Ns,beforeCreate:Re,created:Re,beforeMount:Re,mounted:Re,beforeUpdate:Re,updated:Re,beforeDestroy:Re,beforeUnmount:Re,destroyed:Re,unmounted:Re,activated:Re,deactivated:Re,errorCaptured:Re,serverPrefetch:Re,components:Ns,directives:Ns,watch:Kd,provide:pc,inject:jd};function pc(n,t){return t?n?function(){return we(Ht(n)?n.call(this,this):n,Ht(t)?t.call(this,this):t)}:t:n}function jd(n,t){return Ns(Ra(n),Ra(t))}function Ra(n){if(Ft(n)){const t={};for(let e=0;e<n.length;e++)t[n[e]]=n[e];return t}return n}function Re(n,t){return n?[...new Set([].concat(n,t))]:t}function Ns(n,t){return n?we(Object.create(null),n,t):t}function mc(n,t){return n?Ft(n)&&Ft(t)?[...new Set([...n,...t])]:we(Object.create(null),fc(n),fc(t??{})):t}function Kd(n,t){if(!n)return t;if(!t)return n;const e=we(Object.create(null),n);for(const i in t)e[i]=Re(n[i],t[i]);return e}function Ah(){return{app:null,config:{isNativeTag:Gu,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $d=0;function Zd(n,t){return function(i,s=null){Ht(i)||(i=we({},i)),s!=null&&!se(s)&&(s=null);const r=Ah(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:$d++,_component:i,_props:s,_container:null,_context:r,_instance:null,version:Dp,get config(){return r.config},set config(u){},use(u,...h){return o.has(u)||(u&&Ht(u.install)?(o.add(u),u.install(c,...h)):Ht(u)&&(o.add(u),u(c,...h))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,h){return h?(r.components[u]=h,c):r.components[u]},directive(u,h){return h?(r.directives[u]=h,c):r.directives[u]},mount(u,h,d){if(!l){const m=c._ceVNode||yn(i,s);return m.appContext=r,d===!0?d="svg":d===!1&&(d=void 0),n(m,u,d),l=!0,c._container=u,u.__vue_app__=c,Eo(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(hn(a,c._instance,16),n(null,c._container),delete c._container.__vue_app__)},provide(u,h){return r.provides[u]=h,c},runWithContext(u){const h=cs;cs=c;try{return u()}finally{cs=h}}};return c}}let cs=null;const Jd=(n,t)=>t==="modelValue"||t==="model-value"?n.modelModifiers:n[`${t}Modifiers`]||n[`${ln(t)}Modifiers`]||n[`${Oi(t)}Modifiers`];function Qd(n,t,...e){if(n.isUnmounted)return;const i=n.vnode.props||re;let s=e;const r=t.startsWith("update:"),o=r&&Jd(i,t.slice(7));o&&(o.trim&&(s=e.map(u=>pe(u)?u.trim():u)),o.number&&(s=s.map(Sl)));let a,l=i[a=Co(t)]||i[a=Co(ln(t))];!l&&r&&(l=i[a=Co(Oi(t))]),l&&hn(l,n,6,s);const c=i[a+"Once"];if(c){if(!n.emitted)n.emitted={};else if(n.emitted[a])return;n.emitted[a]=!0,hn(c,n,6,s)}}const tp=new WeakMap;function wh(n,t,e=!1){const i=e?tp:t.emitsCache,s=i.get(n);if(s!==void 0)return s;const r=n.emits;let o={},a=!1;if(!Ht(n)){const l=c=>{const u=wh(c,t,!0);u&&(a=!0,we(o,u))};!e&&t.mixins.length&&t.mixins.forEach(l),n.extends&&l(n.extends),n.mixins&&n.mixins.forEach(l)}return!r&&!a?(se(n)&&i.set(n,null),null):(Ft(r)?r.forEach(l=>o[l]=null):we(o,r),se(n)&&i.set(n,o),o)}function Mo(n,t){return!n||!uo(t)?!1:(t=t.slice(2),t=t==="Once"?t:t.replace(/Once$/,""),Qt(n,t[0].toLowerCase()+t.slice(1))||Qt(n,Oi(t))||Qt(n,t))}function _c(n){const{type:t,vnode:e,proxy:i,withProxy:s,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:h,data:d,setupState:m,ctx:v,inheritAttrs:_}=n,p=eo(n);let f,w;try{if(e.shapeFlag&4){const S=s||i,z=S;f=gn(c.call(z,S,u,h,m,d,v)),w=a}else{const S=t;f=gn(S.length>1?S(h,{attrs:a,slots:o,emit:l}):S(h,null)),w=t.props?a:ep(a)}}catch(S){Ii.length=0,go(S,n,1),f=yn(jn)}let A=f;if(w&&_!==!1){const S=Object.keys(w),{shapeFlag:z}=A;S.length&&z&7&&(r&&S.some(ho)&&(w=np(w,r)),A=ps(A,w,!1,!0))}if(e.dirs&&(A=ps(A,null,!1,!0),A.dirs=A.dirs?A.dirs.concat(e.dirs):e.dirs),e.transition){const S=vo(A.type)&&xh(A)||A;Ll(S,e.transition)}return f=A,eo(p),f}const ep=n=>{let t;for(const e in n)(e==="class"||e==="style"||uo(e))&&((t||(t={}))[e]=n[e]);return t},np=(n,t)=>{const e={};for(const i in n)(!ho(i)||!(i.slice(9)in t))&&(e[i]=n[i]);return e};function ip(n,t,e){const{props:i,children:s,component:r}=n,{props:o,children:a,patchFlag:l}=t,c=r.emitsOptions;if(t.dirs||t.transition)return!0;if(e&&l>=0){if(l&1024)return!0;if(l&16)return i?gc(i,o,c):!!o;if(l&8){const u=t.dynamicProps;for(let h=0;h<u.length;h++){const d=u[h];if(Rh(o,i,d)&&!Mo(c,d))return!0}}}else return(s||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?gc(i,o,c):!0:!!o;return!1}function gc(n,t,e){const i=Object.keys(t);if(i.length!==Object.keys(n).length)return!0;for(let s=0;s<i.length;s++){const r=i[s];if(Rh(t,n,r)&&!Mo(e,r))return!0}return!1}function Rh(n,t,e){const i=n[e],s=t[e];return e==="style"&&se(i)&&se(s)?!mo(i,s):i!==s}function sp({vnode:n,parent:t,suspense:e},i){for(;t;){const s=t.subTree;if(s.suspense&&s.suspense.activeBranch===n&&(s.suspense.vnode.el=s.el=i,n=s),s===n)(n=t.vnode).el=i,t=t.parent;else break}e&&e.activeBranch===n&&(e.vnode.el=i)}const Ch={},Ph=()=>Object.create(Ch),Dh=n=>Object.getPrototypeOf(n)===Ch;function rp(n,t,e,i=!1){const s={},r=Ph();n.propsDefaults=Object.create(null),Lh(n,t,s,r);for(const o in n.propsOptions[0])o in s||(s[o]=void 0);e?n.props=i?s:hd(s):n.type.props?n.props=s:n.props=r,n.attrs=r}function op(n,t,e,i){const{props:s,attrs:r,vnode:{patchFlag:o}}=n,a=Jt(s),[l]=n.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=n.vnode.dynamicProps;for(let h=0;h<u.length;h++){let d=u[h];if(Mo(n.emitsOptions,d))continue;const m=t[d];if(l)if(Qt(r,d))m!==r[d]&&(r[d]=m,c=!0);else{const v=ln(d);s[v]=Ca(l,a,v,m,n,!1)}else m!==r[d]&&(r[d]=m,c=!0)}}}else{Lh(n,t,s,r)&&(c=!0);let u;for(const h in a)(!t||!Qt(t,h)&&((u=Oi(h))===h||!Qt(t,u)))&&(l?e&&(e[h]!==void 0||e[u]!==void 0)&&(s[h]=Ca(l,a,h,void 0,n,!0)):delete s[h]);if(r!==a)for(const h in r)(!t||!Qt(t,h))&&(delete r[h],c=!0)}c&&Hn(n.attrs,"set","")}function Lh(n,t,e,i){const[s,r]=n.propsOptions;let o=!1,a;if(t)for(let l in t){if(Hs(l))continue;const c=t[l];let u;s&&Qt(s,u=ln(l))?!r||!r.includes(u)?e[u]=c:(a||(a={}))[u]=c:Mo(n.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(r){const l=Jt(e),c=a||re;for(let u=0;u<r.length;u++){const h=r[u];e[h]=Ca(s,l,h,c[h],n,!Qt(c,h))}}return o}function Ca(n,t,e,i,s,r){const o=n[e];if(o!=null){const a=Qt(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ht(l)){const{propsDefaults:c}=s;if(e in c)i=c[e];else{const u=sr(s);i=c[e]=l.call(null,t),u()}}else i=l;s.ce&&s.ce._setProp(e,i)}o[0]&&(r&&!a?i=!1:o[1]&&(i===""||i===Oi(e))&&(i=!0))}return i}const ap=new WeakMap;function Ih(n,t,e=!1){const i=e?ap:t.propsCache,s=i.get(n);if(s)return s;const r=n.props,o={},a=[];let l=!1;if(!Ht(n)){const u=h=>{l=!0;const[d,m]=Ih(h,t,!0);we(o,d),m&&a.push(...m)};!e&&t.mixins.length&&t.mixins.forEach(u),n.extends&&u(n.extends),n.mixins&&n.mixins.forEach(u)}if(!r&&!l)return se(n)&&i.set(n,Ci),Ci;if(Ft(r))for(let u=0;u<r.length;u++){const h=ln(r[u]);vc(h)&&(o[h]=re)}else if(r)for(const u in r){const h=ln(u);if(vc(h)){const d=r[u],m=o[h]=Ft(d)||Ht(d)?{type:d}:we({},d),v=m.type;let _=!1,p=!0;if(Ft(v))for(let f=0;f<v.length;++f){const w=v[f],A=Ht(w)&&w.name;if(A==="Boolean"){_=!0;break}else A==="String"&&(p=!1)}else _=Ht(v)&&v.name==="Boolean";m[0]=_,m[1]=p,(_||Qt(m,"default"))&&a.push(h)}}const c=[o,a];return se(n)&&i.set(n,c),c}function vc(n){return n[0]!=="$"&&!Hs(n)}const Nl=n=>n==="_"||n==="_ctx"||n==="$stable",Fl=n=>Ft(n)?n.map(gn):[gn(n)],lp=(n,t,e)=>{if(t._n)return t;const i=bd((...s)=>Fl(t(...s)),e);return i._c=!1,i},Uh=(n,t,e)=>{const i=n._ctx;for(const s in n){if(Nl(s))continue;const r=n[s];if(Ht(r))t[s]=lp(s,r,i);else if(r!=null){const o=Fl(r);t[s]=()=>o}}},Nh=(n,t)=>{const e=Fl(t);n.slots.default=()=>e},Fh=(n,t,e)=>{for(const i in t)(e||!Nl(i))&&(n[i]=t[i])},cp=(n,t,e)=>{const i=n.slots=Ph();if(n.vnode.shapeFlag&32){const s=t._;s?(Fh(i,t,e),e&&Yu(i,"_",s,!0)):Uh(t,i)}else t&&Nh(n,t)},up=(n,t,e)=>{const{vnode:i,slots:s}=n;let r=!0,o=re;if(i.shapeFlag&32){const a=t._;a?e&&a===1?r=!1:Fh(s,t,e):(r=!t.$stable,Uh(t,s)),o=t}else t&&(Nh(n,t),o={default:1});if(r)for(const a in s)!Nl(a)&&o[a]==null&&delete s[a]},Fe=mp;function hp(n){return fp(n)}function fp(n,t){const e=po();e.__VUE__=!0;const{insert:i,remove:s,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:h,nextSibling:d,setScopeId:m=En,insertStaticContent:v}=n,_=(b,C,y,et=null,X=null,q=null,K=void 0,st=null,j=!!C.dynamicChildren)=>{if(b===C)return;b&&!Rs(b,C)&&(et=pt(b),Dt(b,X,q,!0),b=null),C.patchFlag===-2&&(j=!1,C.dynamicChildren=null),C.dynamicChildren&&b&&b.dynamicChildren&&b.dynamicChildren.hasOnce&&(C.dynamicChildren===Ci&&(C.dynamicChildren=[]),C.dynamicChildren.hasOnce=!0);const{type:x,ref:g,shapeFlag:R}=C;switch(x){case So:p(b,C,y,et);break;case jn:f(b,C,y,et);break;case Oo:b==null&&w(C,y,et,K);break;case on:Q(b,C,y,et,X,q,K,st,j);break;default:R&1?z(b,C,y,et,X,q,K,st,j):R&6?Y(b,C,y,et,X,q,K,st,j):(R&64||R&128)&&x.process(b,C,y,et,X,q,K,st,j,Bt)}g!=null&&X?Ws(g,b&&b.ref,q,C||b,!C):g==null&&b&&b.ref!=null&&Ws(b.ref,null,q,b,!0)},p=(b,C,y,et)=>{if(b==null)i(C.el=a(C.children),y,et);else{const X=C.el=b.el;C.children!==b.children&&c(X,C.children)}},f=(b,C,y,et)=>{b==null?i(C.el=l(C.children||""),y,et):C.el=b.el},w=(b,C,y,et)=>{[b.el,b.anchor]=v(b.children,C,y,et,b.el,b.anchor)},A=({el:b,anchor:C},y,et)=>{let X;for(;b&&b!==C;)X=d(b),i(b,y,et),b=X;i(C,y,et)},S=({el:b,anchor:C})=>{let y;for(;b&&b!==C;)y=d(b),s(b),b=y;s(C)},z=(b,C,y,et,X,q,K,st,j)=>{if(C.type==="svg"?K="svg":C.type==="math"&&(K="mathml"),b==null)L(C,y,et,X,q,K,st,j);else{const x=b.el&&b.el._isVueCE?b.el:null;try{x&&x._beginPatch(),T(b,C,X,q,K,st,j)}finally{x&&x._endPatch()}}},L=(b,C,y,et,X,q,K,st)=>{let j,x;const{props:g,shapeFlag:R,transition:O,dirs:G}=b;if(j=b.el=o(b.type,q,g&&g.is,g),R&8?u(j,b.children):R&16&&F(b.children,j,null,et,X,Fo(b,q),K,st),G&&_i(b,null,et,"created"),P(j,b,b.scopeId,K,et),g){for(const ht in g)ht!=="value"&&!Hs(ht)&&r(j,ht,null,g[ht],q,et);"value"in g&&r(j,"value",null,g.value,q),(x=g.onVnodeBeforeMount)&&dn(x,et,b)}G&&_i(b,null,et,"beforeMount");const V=dp(X,O);V&&O.beforeEnter(j),i(j,C,y),((x=g&&g.onVnodeMounted)||V||G)&&Fe(()=>{try{x&&dn(x,et,b),V&&O.enter(j),G&&_i(b,null,et,"mounted")}finally{}},X)},P=(b,C,y,et,X)=>{if(y&&m(b,y),et)for(let q=0;q<et.length;q++)m(b,et[q]);if(X){let q=X.subTree;if(C===q||Hh(q.type)&&(q.ssContent===C||q.ssFallback===C)){const K=X.vnode;P(b,K,K.scopeId,K.slotScopeIds,X.parent)}}},F=(b,C,y,et,X,q,K,st,j=0)=>{for(let x=j;x<b.length;x++){const g=b[x]=st?zn(b[x]):gn(b[x]);_(null,g,C,y,et,X,q,K,st)}},T=(b,C,y,et,X,q,K)=>{const st=C.el=b.el;let{patchFlag:j,dynamicChildren:x,dirs:g}=C;j|=b.patchFlag&16;const R=b.props||re,O=C.props||re;let G;if(y&&gi(y,!1),(G=O.onVnodeBeforeUpdate)&&dn(G,y,C,b),g&&_i(C,b,y,"beforeUpdate"),y&&gi(y,!0),x&&(!b.dynamicChildren||b.dynamicChildren.length!==x.length)&&(j=0,K=!1,x=null),(R.innerHTML&&O.innerHTML==null||R.textContent&&O.textContent==null)&&u(st,""),x?E(b.dynamicChildren,x,st,y,et,Fo(C,X),q):K||H(b,C,st,null,y,et,Fo(C,X),q,!1),j>0){if(j&16)D(st,R,O,y,X);else if(j&2&&R.class!==O.class&&r(st,"class",null,O.class,X),j&4&&r(st,"style",R.style,O.style,X),j&8){const V=C.dynamicProps;for(let ht=0;ht<V.length;ht++){const ot=V[ht],ct=R[ot],Pt=O[ot];(Pt!==ct||ot==="value")&&r(st,ot,ct,Pt,X,y)}}j&1&&b.children!==C.children&&u(st,C.children)}else!K&&x==null&&D(st,R,O,y,X);((G=O.onVnodeUpdated)||g)&&Fe(()=>{G&&dn(G,y,C,b),g&&_i(C,b,y,"updated")},et)},E=(b,C,y,et,X,q,K)=>{for(let st=0;st<C.length;st++){const j=b[st],x=C[st],g=j.el&&(j.type===on||!Rs(j,x)||j.shapeFlag&198)?h(j.el):y;_(j,x,g,null,et,X,q,K,!0)}},D=(b,C,y,et,X)=>{if(C!==y){if(C!==re)for(const q in C)!Hs(q)&&!(q in y)&&r(b,q,C[q],null,X,et);for(const q in y){if(Hs(q))continue;const K=y[q],st=C[q];K!==st&&q!=="value"&&r(b,q,st,K,X,et)}"value"in y&&r(b,"value",C.value,y.value,X)}},Q=(b,C,y,et,X,q,K,st,j)=>{const x=C.el=b?b.el:a(""),g=C.anchor=b?b.anchor:a("");let{patchFlag:R,dynamicChildren:O,slotScopeIds:G}=C;G&&(st=st?st.concat(G):G),b==null?(i(x,y,et),i(g,y,et),F(C.children||[],y,g,X,q,K,st,j)):R>0&&R&64&&O&&b.dynamicChildren&&b.dynamicChildren.length===O.length?(E(b.dynamicChildren,O,y,X,q,K,st),(C.key!=null||X&&C===X.subTree)&&Oh(b,C,!0)):H(b,C,y,g,X,q,K,st,j)},Y=(b,C,y,et,X,q,K,st,j)=>{C.slotScopeIds=st,b==null?C.shapeFlag&512?X.ctx.activate(C,y,et,K,j):it(C,y,et,X,q,K,j):rt(b,C,j)},it=(b,C,y,et,X,q,K)=>{const st=b.component=yp(b,et,X);if(Il(b)&&(st.ctx.renderer=Bt),bp(st,!1,K),st.asyncDep){if(X&&X.registerDep(st,Z,K),!b.el){const j=st.subTree=yn(jn);f(null,j,C,y),b.placeholder=j.el}}else Z(st,b,C,y,X,q,K)},rt=(b,C,y)=>{const et=C.component=b.component;if(ip(b,C,y))if(et.asyncDep&&!et.asyncResolved){C.el=b.el,J(et,C,y);return}else et.next=C,et.update();else C.el=b.el,et.vnode=C},Z=(b,C,y,et,X,q,K)=>{const st=()=>{if(b.isMounted){let{next:R,bu:O,u:G,parent:V,vnode:ht}=b;{const _t=Bh(b);if(_t){R&&(R.el=ht.el,J(b,R,K)),_t.asyncDep.then(()=>{Fe(()=>{b.isUnmounted||x()},X)});return}}let ot=R,ct;gi(b,!1),R?(R.el=ht.el,J(b,R,K)):R=ht,O&&kr(O),(ct=R.props&&R.props.onVnodeBeforeUpdate)&&dn(ct,V,R,ht),gi(b,!0);const Pt=_c(b),at=b.subTree;b.subTree=Pt,_(at,Pt,h(at.el),pt(at),b,X,q),R.el=Pt.el,ot===null&&sp(b,Pt.el),G&&Fe(G,X),(ct=R.props&&R.props.onVnodeUpdated)&&Fe(()=>dn(ct,V,R,ht),X)}else{let R;const{el:O,props:G}=C,{bm:V,m:ht,parent:ot,root:ct,type:Pt}=b,at=Xs(C);gi(b,!1),V&&kr(V),!at&&(R=G&&G.onVnodeBeforeMount)&&dn(R,ot,C),gi(b,!0);{ct.ce&&ct.ce._hasShadowRoot()&&ct.ce._injectChildStyle(Pt,b.parent?b.parent.type:void 0);const _t=b.subTree=_c(b);_(null,_t,y,et,b,X,q),C.el=_t.el}if(ht&&Fe(ht,X),!at&&(R=G&&G.onVnodeMounted)){const _t=C;Fe(()=>dn(R,ot,_t),X)}(C.shapeFlag&256||ot&&Xs(ot.vnode)&&ot.vnode.shapeFlag&256)&&b.a&&Fe(b.a,X),b.isMounted=!0,C=y=et=null}};b.scope.on();const j=b.effect=new Zu(st);b.scope.off();const x=b.update=j.run.bind(j),g=b.job=j.runIfDirty.bind(j);g.i=b,g.id=b.uid,j.scheduler=()=>Dl(g),gi(b,!0),x()},J=(b,C,y)=>{C.component=b;const et=b.vnode.props;b.vnode=C,b.next=null,op(b,C.props,et,y),up(b,C.children,y),qn(),cc(b),Yn()},H=(b,C,y,et,X,q,K,st,j=!1)=>{const x=b&&b.children,g=b?b.shapeFlag:0,R=C.children,{patchFlag:O,shapeFlag:G}=C;if(O>0){if(O&128){Mt(x,R,y,et,X,q,K,st,j);return}else if(O&256){ft(x,R,y,et,X,q,K,st,j);return}}G&8?(g&16&&Et(x,X,q),R!==x&&u(y,R)):g&16?G&16?Mt(x,R,y,et,X,q,K,st,j):Et(x,X,q,!0):(g&8&&u(y,""),G&16&&F(R,y,et,X,q,K,st,j))},ft=(b,C,y,et,X,q,K,st,j)=>{b=b||Ci,C=C||Ci;const x=b.length,g=C.length,R=Math.min(x,g);let O;for(O=0;O<R;O++){const G=C[O]=j?zn(C[O]):gn(C[O]);_(b[O],G,y,null,X,q,K,st,j)}x>g?Et(b,X,q,!0,!1,R):F(C,y,et,X,q,K,st,j,R)},Mt=(b,C,y,et,X,q,K,st,j)=>{let x=0;const g=C.length;let R=b.length-1,O=g-1;for(;x<=R&&x<=O;){const G=b[x],V=C[x]=j?zn(C[x]):gn(C[x]);if(Rs(G,V))_(G,V,y,null,X,q,K,st,j);else break;x++}for(;x<=R&&x<=O;){const G=b[R],V=C[O]=j?zn(C[O]):gn(C[O]);if(Rs(G,V))_(G,V,y,null,X,q,K,st,j);else break;R--,O--}if(x>R){if(x<=O){const G=O+1,V=G<g?C[G].el:et;for(;x<=O;)_(null,C[x]=j?zn(C[x]):gn(C[x]),y,V,X,q,K,st,j),x++}}else if(x>O)for(;x<=R;)Dt(b[x],X,q,!0),x++;else{const G=x,V=x,ht=new Map;for(x=V;x<=O;x++){const dt=C[x]=j?zn(C[x]):gn(C[x]);dt.key!=null&&ht.set(dt.key,x)}let ot,ct=0;const Pt=O-V+1;let at=!1,_t=0;const Rt=new Array(Pt);for(x=0;x<Pt;x++)Rt[x]=0;for(x=G;x<=R;x++){const dt=b[x];if(ct>=Pt){Dt(dt,X,q,!0);continue}let Nt;if(dt.key!=null)Nt=ht.get(dt.key);else for(ot=V;ot<=O;ot++)if(Rt[ot-V]===0&&Rs(dt,C[ot])){Nt=ot;break}Nt===void 0?Dt(dt,X,q,!0):(Rt[Nt-V]=x+1,Nt>=_t?_t=Nt:at=!0,_(dt,C[Nt],y,null,X,q,K,st,j),ct++)}const Lt=at?pp(Rt):Ci;for(ot=Lt.length-1,x=Pt-1;x>=0;x--){const dt=V+x,Nt=C[dt],zt=C[dt+1],te=dt+1<g?zt.el||zh(zt):et;Rt[x]===0?_(null,Nt,y,te,X,q,K,st,j):at&&(ot<0||x!==Lt[ot]?yt(Nt,y,te,2):ot--)}}},yt=(b,C,y,et,X=null)=>{const{el:q,type:K,transition:st,children:j,shapeFlag:x}=b;if(x&6){yt(b.component.subTree,C,y,et);return}if(x&128){b.suspense.move(C,y,et);return}if(x&64){K.move(b,C,y,Bt);return}if(K===on){i(q,C,y);for(let R=0;R<j.length;R++)yt(j[R],C,y,et);i(b.anchor,C,y);return}if(K===Oo){A(b,C,y);return}if(et!==2&&x&1&&st)if(et===0)st.persisted&&!q[Uo]?i(q,C,y):(st.beforeEnter(q),i(q,C,y),Fe(()=>st.enter(q),X));else{const{leave:R,delayLeave:O,afterLeave:G}=st,V=()=>{b.ctx.isUnmounted?s(q):i(q,C,y)},ht=()=>{const ot=q._isLeaving||!!q[Uo];q._isLeaving&&q[Uo](!0),st.persisted&&!ot?V():R(q,()=>{V(),G&&G()})};O?O(q,V,ht):ht()}else i(q,C,y)},Dt=(b,C,y,et=!1,X=!1)=>{const{type:q,props:K,ref:st,children:j,dynamicChildren:x,shapeFlag:g,patchFlag:R,dirs:O,cacheIndex:G,memo:V}=b;if((R===-2||x&&x.hasOnce)&&(X=!1),st!=null&&(qn(),Ws(st,null,y,b,!0),Yn()),G!=null&&(!b.ctx||b.ctx===C)&&(C.renderCache[G]=void 0),g&256){C.ctx.deactivate(b);return}const ht=g&1&&O,ot=!Xs(b);let ct;if(ot&&(ct=K&&K.onVnodeBeforeUnmount)&&dn(ct,C,b),g&6)lt(b.component,y,et);else{if(g&128){b.suspense.unmount(y,et);return}ht&&_i(b,null,C,"beforeUnmount"),g&64?b.type.remove(b,C,y,Bt,et):x&&!x.hasOnce&&(q!==on||R>0&&R&64)?Et(x,C,y,!1,!0):(q===on&&R&384||!X&&g&16)&&Et(j,C,y),et&&Kt(b)}const Pt=V!=null&&G==null;(ot&&(ct=K&&K.onVnodeUnmounted)||ht||Pt)&&Fe(()=>{ct&&dn(ct,C,b),ht&&_i(b,null,C,"unmounted"),Pt&&(b.el=null)},y)},Kt=b=>{const{type:C,el:y,anchor:et,transition:X}=b;if(C===on){tt(y,et);return}if(C===Oo){S(b),X&&!X.persisted&&X.afterLeave&&X.afterLeave();return}const q=()=>{s(y),X&&!X.persisted&&X.afterLeave&&X.afterLeave()};if(b.shapeFlag&1&&X&&!X.persisted){const{leave:K,delayLeave:st}=X,j=()=>K(y,q);st?st(b.el,q,j):j()}else q()},tt=(b,C)=>{let y;for(;b!==C;)y=d(b),s(b),b=y;s(C)},lt=(b,C,y)=>{const{bum:et,scope:X,job:q,subTree:K,um:st,m:j,a:x}=b;xc(j),xc(x),et&&kr(et),X.stop(),q?(q.flags|=8,Dt(K,b,C,y)):b.vnode.el&&K&&(K.transition=b.vnode.transition,Dt(K,b,C,y)),st&&Fe(st,C),Fe(()=>{b.isUnmounted=!0},C)},Et=(b,C,y,et=!1,X=!1,q=0)=>{for(let K=q;K<b.length;K++)Dt(b[K],C,y,et,X)},pt=b=>{if(b.shapeFlag&6)return pt(b.component.subTree);if(b.shapeFlag&128)return b.suspense.next();const C=d(b.anchor||b.el),y=C&&C[Pd];return y?d(y):C};let Ct=!1;const Ut=(b,C,y)=>{let et;b==null?C._vnode&&(Dt(C._vnode,null,null,!0),et=C._vnode.component):_(C._vnode||null,b,C,null,null,null,y),C._vnode=b,Ct||(Ct=!0,cc(et),ph(),Ct=!1)},Bt={p:_,um:Dt,m:yt,r:Kt,mt:it,mc:F,pc:H,pbc:E,n:pt,o:n};return{render:Ut,hydrate:void 0,createApp:Zd(Ut)}}function Fo({type:n,props:t},e){return e==="svg"&&n==="foreignObject"||e==="mathml"&&n==="annotation-xml"&&t&&t.encoding&&t.encoding.includes("html")?void 0:e}function gi({effect:n,job:t},e){e?(n.flags|=32,t.flags|=4):(n.flags&=-33,t.flags&=-5)}function dp(n,t){return(!n||n&&!n.pendingBranch)&&t&&!t.persisted}function Oh(n,t,e=!1){const i=n.children,s=t.children;if(Ft(i)&&Ft(s))for(let r=0;r<i.length;r++){const o=i[r];let a=s[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=s[r]=zn(s[r]),a.el=o.el),!e&&a.patchFlag!==-2&&Oh(o,a)),a.type===So&&(a.patchFlag===-1&&(a=s[r]=zn(a)),a.el=o.el),a.type===jn&&!a.el&&(a.el=o.el)}}function pp(n){const t=n.slice(),e=[0];let i,s,r,o,a;const l=n.length;for(i=0;i<l;i++){const c=n[i];if(c!==0){if(s=e[e.length-1],n[s]<c){t[i]=s,e.push(i);continue}for(r=0,o=e.length-1;r<o;)a=r+o>>1,n[e[a]]<c?r=a+1:o=a;c<n[e[r]]&&(r>0&&(t[i]=e[r-1]),e[r]=i)}}for(r=e.length,o=e[r-1];r-- >0;)e[r]=o,o=t[o];return e}function Bh(n){const t=n.subTree.component;if(t)return t.asyncDep&&!t.asyncResolved?t:Bh(t)}function xc(n){if(n)for(let t=0;t<n.length;t++)n[t].flags|=8}function zh(n){if(n.placeholder)return n.placeholder;const t=n.component;return t?zh(t.subTree):null}const Hh=n=>n.__isSuspense;function mp(n,t){t&&t.pendingBranch?Ft(n)?t.effects.push(...n):t.effects.push(n):Td(n)}const on=Symbol.for("v-fgt"),So=Symbol.for("v-txt"),jn=Symbol.for("v-cmt"),Oo=Symbol.for("v-stc"),Ii=[];let ke=null;function rn(n=!1){Ii.push(ke=n?null:[])}function Vh(){Ii.pop(),ke=Ii[Ii.length-1]||null}let Js=1;function Mc(n,t=!1){Js+=n,n<0&&ke&&t&&(ke.hasOnce=!0)}function Gh(n){return n.dynamicChildren=Js>0?ke||Ci:null,Vh(),Js>0&&ke&&ke.push(n),n}function pn(n,t,e,i,s,r){return Gh(It(n,t,e,i,s,r,!0))}function _p(n,t,e,i,s){return Gh(yn(n,t,e,i,s,!0))}function kh(n){return n?n.__v_isVNode===!0:!1}function Rs(n,t){return n.type===t.type&&n.key===t.key}const Wh=({key:n})=>n??null,Xr=({ref:n,ref_key:t,ref_for:e})=>(typeof n=="number"&&(n=""+n),n!=null?pe(n)||Ae(n)||Ht(n)?{i:Ke,r:n,k:t,f:!!e}:n:null);function It(n,t=null,e=null,i=0,s=null,r=n===on?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:n,props:t,key:t&&Wh(t),ref:t&&Xr(t),scopeId:_h,slotScopeIds:null,children:e,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:Ke};return a?(so(l,e),r&128&&n.normalize(l)):e&&(l.shapeFlag|=pe(e)?8:16),Js>0&&!o&&ke&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ke.push(l),l}const yn=gp;function gp(n,t=null,e=null,i=0,s=null,r=!1){if((!n||n===Gd)&&(n=jn),kh(n)){const a=ps(n,t,!0);return e&&so(a,e),Js>0&&!r&&ke&&(a.shapeFlag&6?ke[ke.indexOf(n)]=a:ke.push(a)),a.patchFlag=-2,a}if(Cp(n)&&(n=n.__vccOpts),t){t=vp(t);let{class:a,style:l}=t;a&&!pe(a)&&(t.class=yl(a)),se(l)&&(Pl(l)&&!Ft(l)&&(l=we({},l)),t.style=El(l))}const o=pe(n)?1:Hh(n)?128:vo(n)?64:se(n)?4:Ht(n)?2:0;return It(n,t,e,i,s,o,r,!0)}function vp(n){return n?Pl(n)||Dh(n)?we({},n):n:null}function ps(n,t,e=!1,i=!1){const{props:s,ref:r,patchFlag:o,children:a,transition:l}=n,c=t?Mp(s||{},t):s,u={__v_isVNode:!0,__v_skip:!0,type:n.type,props:c,key:c&&Wh(c),ref:t&&t.ref?e&&r?Ft(r)?r.concat(Xr(t)):[r,Xr(t)]:Xr(t):r,scopeId:n.scopeId,slotScopeIds:n.slotScopeIds,children:a,target:n.target,targetStart:n.targetStart,targetAnchor:n.targetAnchor,staticCount:n.staticCount,shapeFlag:n.shapeFlag,patchFlag:t&&n.type!==on?o===-1?16:o|16:o,dynamicProps:n.dynamicProps,dynamicChildren:n.dynamicChildren,appContext:n.appContext,dirs:n.dirs,transition:l,component:n.component,suspense:n.suspense,ssContent:n.ssContent&&ps(n.ssContent),ssFallback:n.ssFallback&&ps(n.ssFallback),placeholder:n.placeholder,el:n.el,anchor:n.anchor,ctx:n.ctx,ce:n.ce,cacheIndex:n.cacheIndex};return l&&i&&Ll(u,l.clone(u)),u}function bi(n=" ",t=0){return yn(So,null,n,t)}function xp(n="",t=!1){return t?(rn(),_p(jn,null,n)):yn(jn,null,n)}function gn(n){return n==null||typeof n=="boolean"?yn(jn):Ft(n)?yn(on,null,n.slice()):kh(n)?zn(n):yn(So,null,String(n))}function zn(n){return n.el===null&&n.patchFlag!==-1||n.memo?n:ps(n)}function so(n,t){let e=0;const{shapeFlag:i}=n;if(t==null)t=null;else if(Ft(t))e=16;else if(typeof t=="object")if(i&65){const s=t.default;s&&(s._c&&(s._d=!1),so(n,s()),s._c&&(s._d=!0));return}else{e=32;const s=t._;!s&&!Dh(t)?t._ctx=Ke:s===3&&Ke&&(Ke.slots._===1?t._=1:(t._=2,n.patchFlag|=1024))}else if(Ht(t)){if(i&65){so(n,{default:t});return}t={default:t,_ctx:Ke},e=32}else t=String(t),i&64?(e=16,t=[bi(t)]):e=8;n.children=t,n.shapeFlag|=e}function Mp(...n){const t={};for(let e=0;e<n.length;e++){const i=n[e];for(const s in i)if(s==="class")t.class!==i.class&&(t.class=yl([t.class,i.class]));else if(s==="style")t.style=El([t.style,i.style]);else if(uo(s)){const r=t[s],o=i[s];o&&r!==o&&!(Ft(r)&&r.includes(o))?t[s]=r?[].concat(r,o):o:o==null&&r==null&&!ho(s)&&(t[s]=o)}else s!==""&&(t[s]=i[s])}return t}function dn(n,t,e,i=null){hn(n,t,7,[e,i])}const Sp=Ah();let Ep=0;function yp(n,t,e){const i=n.type,s=(t?t.appContext:n.appContext)||Sp,r={uid:Ep++,vnode:n,type:i,parent:t,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new qf(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(s.provides),ids:t?t.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ih(i,s),emitsOptions:wh(i,s),emit:null,emitted:null,propsDefaults:re,inheritAttrs:i.inheritAttrs,ctx:re,data:re,props:re,attrs:re,slots:re,refs:re,setupState:re,setupContext:null,suspense:e,suspenseId:e?e.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=Qd.bind(null,r),n.ce&&n.ce(r),r}let Le=null;const Tp=()=>Le||Ke;let ro,Qs;{const n=po(),t=(e,i)=>{let s;return(s=n[e])||(s=n[e]=[]),s.push(i),r=>{s.length>1?s.forEach(o=>o(r)):s[0](r)}};ro=t("__VUE_INSTANCE_SETTERS__",e=>Le=e),Qs=t("__VUE_SSR_SETTERS__",e=>tr=e)}const sr=n=>{const t=Le;return ro(n),n.scope.on(),()=>{n.scope.off(),ro(t)}},Sc=()=>{Le&&Le.scope.off(),ro(null)};function Xh(n){return n.vnode.shapeFlag&4}let tr=!1;function bp(n,t=!1,e=!1){t&&Qs(t);const{props:i,children:s}=n.vnode,r=Xh(n);rp(n,i,r,t),cp(n,s,e||t);const o=r?Ap(n,t):void 0;return t&&Qs(!1),o}function Ap(n,t){const e=n.type;n.accessCache=Object.create(null),n.proxy=new Proxy(n.ctx,Wd);const{setup:i}=e;if(i){qn();const s=n.setupContext=i.length>1?Rp(n):null,r=sr(n),o=ir(i,n,0,[n.props,s]),a=ku(o);if(Yn(),r(),(a||n.sp)&&!Xs(n)&&Mh(n),a){if(o.then(Sc,Sc),t)return o.then(l=>{Qs(!0);try{Ec(n,l,t)}finally{Qs(!1)}}).catch(l=>{go(l,n,0)});n.asyncDep=o}else Ec(n,o)}else qh(n)}function Ec(n,t,e){Ht(t)?n.type.__ssrInlineRender?n.ssrRender=t:n.render=t:se(t)&&(n.setupState=hh(t)),qh(n)}function qh(n,t,e){const i=n.type;n.render||(n.render=i.render||En);{const s=sr(n);qn();try{Xd(n)}finally{Yn(),s()}}}const wp={get(n,t){return be(n,"get",""),n[t]}};function Rp(n){const t=e=>{n.exposed=e||{}};return{attrs:new Proxy(n.attrs,wp),slots:n.slots,emit:n.emit,expose:t}}function Eo(n){return n.exposed?n.exposeProxy||(n.exposeProxy=new Proxy(hh(fd(n.exposed)),{get(t,e){if(e in t)return t[e];if(e in qs)return qs[e](n)},has(t,e){return e in t||e in qs}})):n.proxy}function Cp(n){return Ht(n)&&"__vccOpts"in n}const Pp=(n,t)=>vd(n,t,tr),Dp="3.5.43";/**
* @vue/runtime-dom v3.5.43
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Pa;const yc=typeof window<"u"&&window.trustedTypes;if(yc)try{Pa=yc.createPolicy("vue",{createHTML:n=>n})}catch{}const Yh=Pa?n=>Pa.createHTML(n):n=>n,Lp="http://www.w3.org/2000/svg",Ip="http://www.w3.org/1998/Math/MathML",Bn=typeof document<"u"?document:null,Tc=Bn&&Bn.createElement("template"),Up={insert:(n,t,e)=>{t.insertBefore(n,e||null)},remove:n=>{const t=n.parentNode;t&&t.removeChild(n)},createElement:(n,t,e,i)=>{const s=t==="svg"?Bn.createElementNS(Lp,n):t==="mathml"?Bn.createElementNS(Ip,n):e?Bn.createElement(n,{is:e}):Bn.createElement(n);return n==="select"&&i&&i.multiple!=null&&s.setAttribute("multiple",i.multiple),s},createText:n=>Bn.createTextNode(n),createComment:n=>Bn.createComment(n),setText:(n,t)=>{n.nodeValue=t},setElementText:(n,t)=>{n.textContent=t},parentNode:n=>n.parentNode,nextSibling:n=>n.nextSibling,querySelector:n=>Bn.querySelector(n),setScopeId(n,t){n.setAttribute(t,"")},insertStaticContent(n,t,e,i,s,r){const o=e?e.previousSibling:t.lastChild;if(s&&(s===r||s.nextSibling))for(;t.insertBefore(s.cloneNode(!0),e),!(s===r||!(s=s.nextSibling)););else{Tc.innerHTML=Yh(i==="svg"?`<svg>${n}</svg>`:i==="mathml"?`<math>${n}</math>`:n);const a=Tc.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}t.insertBefore(a,e)}return[o?o.nextSibling:t.firstChild,e?e.previousSibling:t.lastChild]}},Np=Symbol("_vtc");function Fp(n,t,e){const i=n[Np];i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?n.removeAttribute("class"):e?n.setAttribute("class",t):n.className=t}const bc=Symbol("_vod"),Op=Symbol("_vsh"),Bp=Symbol(""),zp=/(?:^|;)\s*display\s*:/;function Hp(n,t,e){const i=n.style,s=pe(e);let r=!1;if(e&&!s){if(t)if(pe(t))for(const o of t.split(";")){const a=o.slice(0,o.indexOf(":")).trim();e[a]==null&&Fs(i,a,"")}else for(const o in t)e[o]==null&&Fs(i,o,"");for(const o in e){o==="display"&&(r=!0);const a=e[o];a!=null?Gp(n,o,!pe(t)&&t?t[o]:void 0,a)||Fs(i,o,a):Fs(i,o,"")}}else if(s){if(t!==e){const o=i[Bp];o&&(e+=";"+o),i.cssText=e,r=zp.test(e)}}else t&&n.removeAttribute("style");bc in n&&(n[bc]=r?i.display:"",n[Op]&&(i.display="none"))}const dr=/\s*!important$/;function Fs(n,t,e){if(Ft(e))e.forEach(i=>Fs(n,t,i));else if(e==null&&(e=""),t.startsWith("--"))dr.test(e)?n.setProperty(t,e.replace(dr,""),"important"):n.setProperty(t,e);else{const i=Vp(n,t);dr.test(e)?n.setProperty(Oi(i),e.replace(dr,""),"important"):n[i]=e}}const Ac=["Webkit","Moz","ms"],Bo={};function Vp(n,t){const e=Bo[t];if(e)return e;let i=ln(t);if(i!=="filter"&&i in n)return Bo[t]=i;i=qu(i);for(let s=0;s<Ac.length;s++){const r=Ac[s]+i;if(r in n)return Bo[t]=r}return t}function Gp(n,t,e,i){return n.tagName==="TEXTAREA"&&(t==="width"||t==="height")&&pe(i)&&e===i}const wc="http://www.w3.org/1999/xlink";function Rc(n,t,e,i,s,r=kf(t)){i&&t.startsWith("xlink:")?e==null?n.removeAttributeNS(wc,t.slice(6,t.length)):n.setAttributeNS(wc,t,e):e==null||r&&!ju(e)?n.removeAttribute(t):n.setAttribute(t,r?"":bn(e)?String(e):e)}function Cc(n,t,e,i,s){if(t==="innerHTML"||t==="textContent"){e!=null&&(n[t]=t==="innerHTML"?Yh(e):e);return}const r=n.tagName;if(t==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?n.getAttribute("value")||"":n.value,l=e==null?n.type==="checkbox"?"on":"":String(e);(a!==l||!("_value"in n))&&(n.value=l),e==null&&n.removeAttribute(t),n._value=e;return}let o=!1;if(e===""||e==null){const a=typeof n[t];a==="boolean"?e=ju(e):e==null&&a==="string"?(e="",o=!0):a==="number"&&(e=0,o=!0)}try{n[t]=e}catch{}o&&n.removeAttribute(s||t)}function rs(n,t,e,i){n.addEventListener(t,e,i)}function kp(n,t,e,i){n.removeEventListener(t,e,i)}const Pc=Symbol("_vei");function Wp(n,t,e,i,s=null){const r=n[Pc]||(n[Pc]={}),o=r[t];if(i&&o)o.value=i;else{const[a,l]=Yp(t);if(i){const c=r[t]=$p(i,s);rs(n,a,c,l)}else o&&(kp(n,a,o,l),r[t]=void 0)}}const Xp=/(Once|Passive|Capture)$/,qp=/^on:?(?:Once|Passive|Capture)$/;function Yp(n){let t,e;for(;(e=n.match(Xp))&&!qp.test(n);)t||(t={}),n=n.slice(0,n.length-e[1].length),t[e[1].toLowerCase()]=!0;return[n[2]===":"?n.slice(3):Oi(n.slice(2)),t]}let zo=0;const jp=Promise.resolve(),Kp=()=>zo||(jp.then(()=>zo=0),zo=Date.now());function $p(n,t){const e=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=e.attached)return;const s=e.value;if(Ft(s)){const r=i.stopImmediatePropagation;i.stopImmediatePropagation=()=>{r.call(i),i._stopped=!0};const o=s.slice(),a=[i];for(let l=0;l<o.length&&!i._stopped;l++){const c=o[l];c&&hn(c,t,5,a)}}else hn(s,t,5,[i])};return e.value=n,e.attached=Kp(),e}const Dc=n=>n.charCodeAt(0)===111&&n.charCodeAt(1)===110&&n.charCodeAt(2)>96&&n.charCodeAt(2)<123,Zp=(n,t,e,i,s,r)=>{const o=s==="svg";t==="class"?Fp(n,i,o):t==="style"?Hp(n,e,i):uo(t)?ho(t)||Wp(n,t,e,i,r):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Jp(n,t,i,o))?(Cc(n,t,i),!n.tagName.includes("-")&&(t==="value"||t==="checked"||t==="selected")&&Rc(n,t,i,o,r,t!=="value")):n._isVueCE&&(Qp(n,t)||n._def.__asyncLoader&&(/[A-Z]/.test(t)||!pe(i)))?Cc(n,ln(t),i,r,t):(t==="true-value"?n._trueValue=i:t==="false-value"&&(n._falseValue=i),Rc(n,t,i,o))};function Jp(n,t,e,i){if(i)return!!(t==="innerHTML"||t==="textContent"||t in n&&Dc(t)&&Ht(e));if(t==="spellcheck"||t==="draggable"||t==="translate"||t==="autocorrect"||t==="sandbox"&&n.tagName==="IFRAME"||t==="form"||t==="list"&&n.tagName==="INPUT"||t==="type"&&n.tagName==="TEXTAREA")return!1;if(t==="width"||t==="height"){const s=n.tagName;if(s==="IMG"||s==="VIDEO"||s==="CANVAS"||s==="SOURCE")return!1}return Dc(t)&&pe(e)?!1:t in n}function Qp(n,t){const e=n._def.props;if(!e)return!1;const i=ln(t);return Array.isArray(e)?e.some(s=>ln(s)===i):Object.keys(e).some(s=>ln(s)===i)}const Lc=n=>{const t=n.props["onUpdate:modelValue"]||!1;return Ft(t)?e=>kr(t,e):t};function tm(n){n.target.composing=!0}function Ic(n){const t=n.target;t.composing&&(t.composing=!1,t.dispatchEvent(new Event("input")))}const pr=Symbol("_assign"),mr=Symbol("_initialValue");function Ho(n,t,e){return t&&(n=n.trim()),e&&(n=Sl(n)),n}const Gi={created(n,{modifiers:{lazy:t,trim:e,number:i}},s){n.parentNode&&(n.type==="text"?n[mr]=n.defaultValue.replace(/[\r\n]/g,""):n.type==="textarea"&&(n[mr]=n.defaultValue.replace(/\r\n?/g,`
`))),n[pr]=Lc(s);const r=i||s.props&&s.props.type==="number";rs(n,t?"change":"input",o=>{o.target.composing||n[pr](Ho(n.value,e,r))}),(e||r)&&rs(n,"change",()=>{n.value=Ho(n.value,e,r)}),t||(rs(n,"compositionstart",tm),rs(n,"compositionend",Ic),rs(n,"change",Ic))},mounted(n,{value:t,modifiers:{trim:e,number:i}}){const s=t??"",r=n[mr];delete n[mr],r!==void 0&&(n.type==="text"||n.type==="textarea")&&n.value!==r?n[pr](Ho(n.value,e,i)):n.value=s},beforeUpdate(n,{value:t,oldValue:e,modifiers:{lazy:i,trim:s,number:r}},o){if(n[pr]=Lc(o),n.composing)return;const a=(r||n.type==="number")&&!/^0\d/.test(n.value)?Sl(n.value):n.value,l=t??"";if(a===l)return;const c=n.getRootNode();(c instanceof Document||c instanceof ShadowRoot)&&c.activeElement===n&&n.type!=="range"&&(i&&t===e||s&&n.value.trim()===l)||(n.value=l)}},em=["ctrl","shift","alt","meta"],nm={stop:n=>n.stopPropagation(),prevent:n=>n.preventDefault(),self:n=>n.target!==n.currentTarget,ctrl:n=>!n.ctrlKey,shift:n=>!n.shiftKey,alt:n=>!n.altKey,meta:n=>!n.metaKey,left:n=>"button"in n&&n.button!==0,middle:n=>"button"in n&&n.button!==1,right:n=>"button"in n&&n.button!==2,exact:(n,t)=>em.some(e=>n[`${e}Key`]&&!t.includes(e))},im=(n,t)=>{if(!n)return n;const e=n._withMods||(n._withMods={}),i=t.join(".");return e[i]||(e[i]=(s,...r)=>{for(let o=0;o<t.length;o++){const a=nm[t[o]];if(a&&a(s,t))return}return n(s,...r)})},sm=we({patchProp:Zp},Up);let Uc;function rm(){return Uc||(Uc=hp(sm))}const om=(...n)=>{const t=rm().createApp(...n),{mount:e}=t;return t.mount=i=>{const s=lm(i);if(!s)return;const r=t._component;!Ht(r)&&!r.render&&!r.template&&(r.template=s.innerHTML),s.nodeType===1&&(s.textContent="");const o=e(s,!1,am(s));return s instanceof Element&&(s.removeAttribute("v-cloak"),s.setAttribute("data-v-app","")),o},t};function am(n){if(n instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&n instanceof MathMLElement)return"mathml"}function lm(n){return pe(n)?document.querySelector(n):n}/**
 * @license
 * Copyright 2010-2024 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Ol="170",us={ROTATE:0,DOLLY:1,PAN:2},os={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},cm=0,Nc=1,um=2,jh=1,hm=2,On=3,di=0,Oe=1,Gn=2,ui=0,hs=1,Fc=2,Oc=3,Bc=4,fm=5,wi=100,dm=101,pm=102,mm=103,_m=104,gm=200,vm=201,xm=202,Mm=203,Da=204,La=205,Sm=206,Em=207,ym=208,Tm=209,bm=210,Am=211,wm=212,Rm=213,Cm=214,Ia=0,Ua=1,Na=2,ms=3,Fa=4,Oa=5,Ba=6,za=7,Kh=0,Pm=1,Dm=2,hi=0,Lm=1,Im=2,Um=3,Nm=4,Fm=5,Om=6,Bm=7,$h=300,_s=301,gs=302,Ha=303,Va=304,yo=306,Ga=1e3,Pi=1001,ka=1002,un=1003,zm=1004,_r=1005,Mn=1006,Vo=1007,Di=1008,Kn=1009,Zh=1010,Jh=1011,er=1012,Bl=1013,Ui=1014,kn=1015,rr=1016,zl=1017,Hl=1018,vs=1020,Qh=35902,tf=1021,ef=1022,an=1023,nf=1024,sf=1025,fs=1026,xs=1027,rf=1028,Vl=1029,of=1030,Gl=1031,kl=1033,qr=33776,Yr=33777,jr=33778,Kr=33779,Wa=35840,Xa=35841,qa=35842,Ya=35843,ja=36196,Ka=37492,$a=37496,Za=37808,Ja=37809,Qa=37810,tl=37811,el=37812,nl=37813,il=37814,sl=37815,rl=37816,ol=37817,al=37818,ll=37819,cl=37820,ul=37821,$r=36492,hl=36494,fl=36495,af=36283,dl=36284,pl=36285,ml=36286,Hm=3200,Vm=3201,lf=0,Gm=1,ai="",qe="srgb",Ss="srgb-linear",To="linear",ne="srgb",ki=7680,zc=519,km=512,Wm=513,Xm=514,cf=515,qm=516,Ym=517,jm=518,Km=519,Hc=35044,Vc="300 es",Wn=2e3,oo=2001;class Bi{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){if(this._listeners===void 0)return!1;const i=this._listeners;return i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){if(this._listeners===void 0)return;const s=this._listeners[t];if(s!==void 0){const r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){if(this._listeners===void 0)return;const i=this._listeners[t.type];if(i!==void 0){t.target=this;const s=i.slice(0);for(let r=0,o=s.length;r<o;r++)s[r].call(this,t);t.target=null}}}const ye=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Ys=Math.PI/180,_l=180/Math.PI;function or(){const n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(ye[n&255]+ye[n>>8&255]+ye[n>>16&255]+ye[n>>24&255]+"-"+ye[t&255]+ye[t>>8&255]+"-"+ye[t>>16&15|64]+ye[t>>24&255]+"-"+ye[e&63|128]+ye[e>>8&255]+"-"+ye[e>>16&255]+ye[e>>24&255]+ye[i&255]+ye[i>>8&255]+ye[i>>16&255]+ye[i>>24&255]).toLowerCase()}function De(n,t,e){return Math.max(t,Math.min(e,n))}function $m(n,t){return(n%t+t)%t}function Go(n,t,e){return(1-e)*n+e*t}function Cs(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function Ue(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}const Zm={DEG2RAD:Ys};class Wt{constructor(t=0,e=0){Wt.prototype.isVector2=!0,this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){const e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){const i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,o=this.y-t.y;return this.x=r*i-o*s+t.x,this.y=r*s+o*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class kt{constructor(t,e,i,s,r,o,a,l,c){kt.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c)}set(t,e,i,s,r,o,a,l,c){const u=this.elements;return u[0]=t,u[1]=s,u[2]=a,u[3]=e,u[4]=r,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){const e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],h=i[7],d=i[2],m=i[5],v=i[8],_=s[0],p=s[3],f=s[6],w=s[1],A=s[4],S=s[7],z=s[2],L=s[5],P=s[8];return r[0]=o*_+a*w+l*z,r[3]=o*p+a*A+l*L,r[6]=o*f+a*S+l*P,r[1]=c*_+u*w+h*z,r[4]=c*p+u*A+h*L,r[7]=c*f+u*S+h*P,r[2]=d*_+m*w+v*z,r[5]=d*p+m*A+v*L,r[8]=d*f+m*S+v*P,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8];return e*o*u-e*a*c-i*r*u+i*a*l+s*r*c-s*o*l}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=u*o-a*c,d=a*l-u*r,m=c*r-o*l,v=e*h+i*d+s*m;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/v;return t[0]=h*_,t[1]=(s*c-u*i)*_,t[2]=(a*i-s*o)*_,t[3]=d*_,t[4]=(u*e-s*l)*_,t[5]=(s*r-a*e)*_,t[6]=m*_,t[7]=(i*l-c*e)*_,t[8]=(o*e-i*r)*_,this}transpose(){let t;const e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){const e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,o,a){const l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*o+c*a)+o+t,-s*c,s*l,-s*(-c*o+l*a)+a+e,0,0,1),this}scale(t,e){return this.premultiply(ko.makeScale(t,e)),this}rotate(t){return this.premultiply(ko.makeRotation(-t)),this}translate(t,e){return this.premultiply(ko.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}}const ko=new kt;function uf(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function ao(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function Jm(){const n=ao("canvas");return n.style.display="block",n}const Gc={};function Os(n){n in Gc||(Gc[n]=!0,console.warn(n))}function Qm(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function t_(n){const t=n.elements;t[2]=.5*t[2]+.5*t[3],t[6]=.5*t[6]+.5*t[7],t[10]=.5*t[10]+.5*t[11],t[14]=.5*t[14]+.5*t[15]}function e_(n){const t=n.elements;t[11]===-1?(t[10]=-t[10]-1,t[14]=-t[14]):(t[10]=-t[10],t[14]=-t[14]+1)}const Yt={enabled:!0,workingColorSpace:Ss,spaces:{},convert:function(n,t,e){return this.enabled===!1||t===e||!t||!e||(this.spaces[t].transfer===ne&&(n.r=Xn(n.r),n.g=Xn(n.g),n.b=Xn(n.b)),this.spaces[t].primaries!==this.spaces[e].primaries&&(n.applyMatrix3(this.spaces[t].toXYZ),n.applyMatrix3(this.spaces[e].fromXYZ)),this.spaces[e].transfer===ne&&(n.r=ds(n.r),n.g=ds(n.g),n.b=ds(n.b))),n},fromWorkingColorSpace:function(n,t){return this.convert(n,this.workingColorSpace,t)},toWorkingColorSpace:function(n,t){return this.convert(n,t,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===ai?To:this.spaces[n].transfer},getLuminanceCoefficients:function(n,t=this.workingColorSpace){return n.fromArray(this.spaces[t].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,t,e){return n.copy(this.spaces[t].toXYZ).multiply(this.spaces[e].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace}};function Xn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function ds(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const kc=[.64,.33,.3,.6,.15,.06],Wc=[.2126,.7152,.0722],Xc=[.3127,.329],qc=new kt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Yc=new kt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Yt.define({[Ss]:{primaries:kc,whitePoint:Xc,transfer:To,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,workingColorSpaceConfig:{unpackColorSpace:qe},outputColorSpaceConfig:{drawingBufferColorSpace:qe}},[qe]:{primaries:kc,whitePoint:Xc,transfer:ne,toXYZ:qc,fromXYZ:Yc,luminanceCoefficients:Wc,outputColorSpaceConfig:{drawingBufferColorSpace:qe}}});let Wi;class n_{static getDataURL(t){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let e;if(t instanceof HTMLCanvasElement)e=t;else{Wi===void 0&&(Wi=ao("canvas")),Wi.width=t.width,Wi.height=t.height;const i=Wi.getContext("2d");t instanceof ImageData?i.putImageData(t,0,0):i.drawImage(t,0,0,t.width,t.height),e=Wi}return e.width>2048||e.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",t),e.toDataURL("image/jpeg",.6)):e.toDataURL("image/png")}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){const e=ao("canvas");e.width=t.width,e.height=t.height;const i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);const s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let o=0;o<r.length;o++)r[o]=Xn(r[o]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){const e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Xn(e[i]/255)*255):e[i]=Xn(e[i]);return{data:e,width:t.width,height:t.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}}let i_=0;class hf{constructor(t=null){this.isSource=!0,Object.defineProperty(this,"id",{value:i_++}),this.uuid=or(),this.data=t,this.dataReady=!0,this.version=0}set needsUpdate(t){t===!0&&this.version++}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];const i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let o=0,a=s.length;o<a;o++)s[o].isDataTexture?r.push(Wo(s[o].image)):r.push(Wo(s[o]))}else r=Wo(s);i.url=r}return e||(t.images[this.uuid]=i),i}}function Wo(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?n_.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let s_=0;class Be extends Bi{constructor(t=Be.DEFAULT_IMAGE,e=Be.DEFAULT_MAPPING,i=Pi,s=Pi,r=Mn,o=Di,a=an,l=Kn,c=Be.DEFAULT_ANISOTROPY,u=ai){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:s_++}),this.uuid=or(),this.name="",this.source=new hf(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Wt(0,0),this.repeat=new Wt(1,1),this.center=new Wt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new kt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=u,this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.pmremVersion=0}get image(){return this.source.data}set image(t=null){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}toJSON(t){const e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==$h)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case Ga:t.x=t.x-Math.floor(t.x);break;case Pi:t.x=t.x<0?0:1;break;case ka:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case Ga:t.y=t.y-Math.floor(t.y);break;case Pi:t.y=t.y<0?0:1;break;case ka:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}}Be.DEFAULT_IMAGE=null;Be.DEFAULT_MAPPING=$h;Be.DEFAULT_ANISOTROPY=1;class de{constructor(t=0,e=0,i=0,s=1){de.prototype.isVector4=!0,this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=this.w,o=t.elements;return this.x=o[0]*e+o[4]*i+o[8]*s+o[12]*r,this.y=o[1]*e+o[5]*i+o[9]*s+o[13]*r,this.z=o[2]*e+o[6]*i+o[10]*s+o[14]*r,this.w=o[3]*e+o[7]*i+o[11]*s+o[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);const e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r;const l=t.elements,c=l[0],u=l[4],h=l[8],d=l[1],m=l[5],v=l[9],_=l[2],p=l[6],f=l[10];if(Math.abs(u-d)<.01&&Math.abs(h-_)<.01&&Math.abs(v-p)<.01){if(Math.abs(u+d)<.1&&Math.abs(h+_)<.1&&Math.abs(v+p)<.1&&Math.abs(c+m+f-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;const A=(c+1)/2,S=(m+1)/2,z=(f+1)/2,L=(u+d)/4,P=(h+_)/4,F=(v+p)/4;return A>S&&A>z?A<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(A),s=L/i,r=P/i):S>z?S<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(S),i=L/s,r=F/s):z<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(z),i=P/r,s=F/r),this.set(i,s,r,e),this}let w=Math.sqrt((p-v)*(p-v)+(h-_)*(h-_)+(d-u)*(d-u));return Math.abs(w)<.001&&(w=1),this.x=(p-v)/w,this.y=(h-_)/w,this.z=(d-u)/w,this.w=Math.acos((c+m+f-1)/2),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this.w=Math.max(t.w,Math.min(e.w,this.w)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this.w=Math.max(t,Math.min(e,this.w)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class r_ extends Bi{constructor(t=1,e=1,i={}){super(),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=1,this.scissor=new de(0,0,t,e),this.scissorTest=!1,this.viewport=new de(0,0,t,e);const s={width:t,height:e,depth:1};i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Mn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1},i);const r=new Be(s,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace);r.flipY=!1,r.generateMipmaps=i.generateMipmaps,r.internalFormat=i.internalFormat,this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=r.clone(),this.textures[a].isRenderTargetTexture=!0;this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.depthTexture=i.depthTexture,this.samples=i.samples}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i;this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let i=0,s=t.textures.length;i<s;i++)this.textures[i]=t.textures[i].clone(),this.textures[i].isRenderTargetTexture=!0;const e=Object.assign({},t.texture.image);return this.texture.source=new hf(e),this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,t.depthTexture!==null&&(this.depthTexture=t.depthTexture.clone()),this.samples=t.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ni extends r_{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}}class ff extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}}class o_ extends Be{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=un,this.minFilter=un,this.wrapR=Pi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Fi{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,o,a){let l=i[s+0],c=i[s+1],u=i[s+2],h=i[s+3];const d=r[o+0],m=r[o+1],v=r[o+2],_=r[o+3];if(a===0){t[e+0]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h;return}if(a===1){t[e+0]=d,t[e+1]=m,t[e+2]=v,t[e+3]=_;return}if(h!==_||l!==d||c!==m||u!==v){let p=1-a;const f=l*d+c*m+u*v+h*_,w=f>=0?1:-1,A=1-f*f;if(A>Number.EPSILON){const z=Math.sqrt(A),L=Math.atan2(z,f*w);p=Math.sin(p*L)/z,a=Math.sin(a*L)/z}const S=a*w;if(l=l*p+d*S,c=c*p+m*S,u=u*p+v*S,h=h*p+_*S,p===1-a){const z=1/Math.sqrt(l*l+c*c+u*u+h*h);l*=z,c*=z,u*=z,h*=z}}t[e]=l,t[e+1]=c,t[e+2]=u,t[e+3]=h}static multiplyQuaternionsFlat(t,e,i,s,r,o){const a=i[s],l=i[s+1],c=i[s+2],u=i[s+3],h=r[o],d=r[o+1],m=r[o+2],v=r[o+3];return t[e]=a*v+u*h+l*m-c*d,t[e+1]=l*v+u*d+c*h-a*m,t[e+2]=c*v+u*m+a*d-l*h,t[e+3]=u*v-a*h-l*d-c*m,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){const i=t._x,s=t._y,r=t._z,o=t._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(s/2),h=a(r/2),d=l(i/2),m=l(s/2),v=l(r/2);switch(o){case"XYZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"YXZ":this._x=d*u*h+c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"ZXY":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h-d*m*v;break;case"ZYX":this._x=d*u*h-c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h+d*m*v;break;case"YZX":this._x=d*u*h+c*m*v,this._y=c*m*h+d*u*v,this._z=c*u*v-d*m*h,this._w=c*u*h-d*m*v;break;case"XZY":this._x=d*u*h-c*m*v,this._y=c*m*h-d*u*v,this._z=c*u*v+d*m*h,this._w=c*u*h+d*m*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){const i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){const e=t.elements,i=e[0],s=e[4],r=e[8],o=e[1],a=e[5],l=e[9],c=e[2],u=e[6],h=e[10],d=i+a+h;if(d>0){const m=.5/Math.sqrt(d+1);this._w=.25/m,this._x=(u-l)*m,this._y=(r-c)*m,this._z=(o-s)*m}else if(i>a&&i>h){const m=2*Math.sqrt(1+i-a-h);this._w=(u-l)/m,this._x=.25*m,this._y=(s+o)/m,this._z=(r+c)/m}else if(a>h){const m=2*Math.sqrt(1+a-i-h);this._w=(r-c)/m,this._x=(s+o)/m,this._y=.25*m,this._z=(l+u)/m}else{const m=2*Math.sqrt(1+h-i-a);this._w=(o-s)/m,this._x=(r+c)/m,this._y=(l+u)/m,this._z=.25*m}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<Number.EPSILON?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(De(this.dot(t),-1,1)))}rotateTowards(t,e){const i=this.angleTo(t);if(i===0)return this;const s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){const i=t._x,s=t._y,r=t._z,o=t._w,a=e._x,l=e._y,c=e._z,u=e._w;return this._x=i*u+o*a+s*c-r*l,this._y=s*u+o*l+r*a-i*c,this._z=r*u+o*c+i*l-s*a,this._w=o*u-i*a-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){if(e===0)return this;if(e===1)return this.copy(t);const i=this._x,s=this._y,r=this._z,o=this._w;let a=o*t._w+i*t._x+s*t._y+r*t._z;if(a<0?(this._w=-t._w,this._x=-t._x,this._y=-t._y,this._z=-t._z,a=-a):this.copy(t),a>=1)return this._w=o,this._x=i,this._y=s,this._z=r,this;const l=1-a*a;if(l<=Number.EPSILON){const m=1-e;return this._w=m*o+e*this._w,this._x=m*i+e*this._x,this._y=m*s+e*this._y,this._z=m*r+e*this._z,this.normalize(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),h=Math.sin((1-e)*u)/c,d=Math.sin(e*u)/c;return this._w=o*h+this._w*d,this._x=i*h+this._x*d,this._y=s*h+this._y*d,this._z=r*h+this._z*d,this._onChangeCallback(),this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){const t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(t=0,e=0,i=0){B.prototype.isVector3=!0,this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(jc.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(jc.setFromAxisAngle(t,e))}applyMatrix3(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){const e=this.x,i=this.y,s=this.z,r=t.elements,o=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*o,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*o,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*o,this}applyQuaternion(t){const e=this.x,i=this.y,s=this.z,r=t.x,o=t.y,a=t.z,l=t.w,c=2*(o*s-a*i),u=2*(a*e-r*s),h=2*(r*i-o*e);return this.x=e+l*c+o*h-a*u,this.y=i+l*u+a*c-r*h,this.z=s+l*h+r*u-o*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){const e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Math.max(t.x,Math.min(e.x,this.x)),this.y=Math.max(t.y,Math.min(e.y,this.y)),this.z=Math.max(t.z,Math.min(e.z,this.z)),this}clampScalar(t,e){return this.x=Math.max(t,Math.min(e,this.x)),this.y=Math.max(t,Math.min(e,this.y)),this.z=Math.max(t,Math.min(e,this.z)),this}clampLength(t,e){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(t,Math.min(e,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){const i=t.x,s=t.y,r=t.z,o=e.x,a=e.y,l=e.z;return this.x=s*l-r*a,this.y=r*o-i*l,this.z=i*a-s*o,this}projectOnVector(t){const e=t.lengthSq();if(e===0)return this.set(0,0,0);const i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return Xo.copy(this).projectOnVector(t),this.sub(Xo)}reflect(t){return this.sub(Xo.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){const e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;const i=this.dot(t)/e;return Math.acos(De(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){const e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){const s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){const e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){const e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Xo=new B,jc=new Fi;class ar{constructor(t=new B(1/0,1/0,1/0),e=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(en.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(en.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){const i=en.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);const i=t.geometry;if(i!==void 0){const r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let o=0,a=r.count;o<a;o++)t.isMesh===!0?t.getVertexPosition(o,en):en.fromBufferAttribute(r,o),en.applyMatrix4(t.matrixWorld),this.expandByPoint(en);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),gr.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),gr.copy(i.boundingBox)),gr.applyMatrix4(t.matrixWorld),this.union(gr)}const s=t.children;for(let r=0,o=s.length;r<o;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,en),en.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Ps),vr.subVectors(this.max,Ps),Xi.subVectors(t.a,Ps),qi.subVectors(t.b,Ps),Yi.subVectors(t.c,Ps),Qn.subVectors(qi,Xi),ti.subVectors(Yi,qi),vi.subVectors(Xi,Yi);let e=[0,-Qn.z,Qn.y,0,-ti.z,ti.y,0,-vi.z,vi.y,Qn.z,0,-Qn.x,ti.z,0,-ti.x,vi.z,0,-vi.x,-Qn.y,Qn.x,0,-ti.y,ti.x,0,-vi.y,vi.x,0];return!qo(e,Xi,qi,Yi,vr)||(e=[1,0,0,0,1,0,0,0,1],!qo(e,Xi,qi,Yi,vr))?!1:(xr.crossVectors(Qn,ti),e=[xr.x,xr.y,xr.z],qo(e,Xi,qi,Yi,vr))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,en).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(en).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Ln[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Ln[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Ln[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Ln[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Ln[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Ln[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Ln[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Ln[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Ln),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}}const Ln=[new B,new B,new B,new B,new B,new B,new B,new B],en=new B,gr=new ar,Xi=new B,qi=new B,Yi=new B,Qn=new B,ti=new B,vi=new B,Ps=new B,vr=new B,xr=new B,xi=new B;function qo(n,t,e,i,s){for(let r=0,o=n.length-3;r<=o;r+=3){xi.fromArray(n,r);const a=s.x*Math.abs(xi.x)+s.y*Math.abs(xi.y)+s.z*Math.abs(xi.z),l=t.dot(xi),c=e.dot(xi),u=i.dot(xi);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const a_=new ar,Ds=new B,Yo=new B;class bo{constructor(t=new B,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){const i=this.center;e!==void 0?i.copy(e):a_.setFromPoints(t).getCenter(i);let s=0;for(let r=0,o=t.length;r<o;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){const e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){const i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Ds.subVectors(t,this.center);const e=Ds.lengthSq();if(e>this.radius*this.radius){const i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Ds,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(Yo.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Ds.copy(t.center).add(Yo)),this.expandByPoint(Ds.copy(t.center).sub(Yo))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}}const In=new B,jo=new B,Mr=new B,ei=new B,Ko=new B,Sr=new B,$o=new B;class Wl{constructor(t=new B,e=new B(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,In)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);const i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){const e=In.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(In.copy(this.origin).addScaledVector(this.direction,e),In.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){jo.copy(t).add(e).multiplyScalar(.5),Mr.copy(e).sub(t).normalize(),ei.copy(this.origin).sub(jo);const r=t.distanceTo(e)*.5,o=-this.direction.dot(Mr),a=ei.dot(this.direction),l=-ei.dot(Mr),c=ei.lengthSq(),u=Math.abs(1-o*o);let h,d,m,v;if(u>0)if(h=o*l-a,d=o*a-l,v=r*u,h>=0)if(d>=-v)if(d<=v){const _=1/u;h*=_,d*=_,m=h*(h+o*d+2*a)+d*(o*h+d+2*l)+c}else d=r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d=-r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;else d<=-v?(h=Math.max(0,-(-o*r+a)),d=h>0?-r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c):d<=v?(h=0,d=Math.min(Math.max(-r,-l),r),m=d*(d+2*l)+c):(h=Math.max(0,-(o*r+a)),d=h>0?r:Math.min(Math.max(-r,-l),r),m=-h*h+d*(d+2*l)+c);else d=o>0?-r:r,h=Math.max(0,-(o*d+a)),m=-h*h+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,h),s&&s.copy(jo).addScaledVector(Mr,d),m}intersectSphere(t,e){In.subVectors(t.center,this.origin);const i=In.dot(this.direction),s=In.dot(In)-i*i,r=t.radius*t.radius;if(s>r)return null;const o=Math.sqrt(r-s),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,e):this.at(a,e)}intersectsSphere(t){return this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){const e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){const i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){const e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,h=1/this.direction.z,d=this.origin;return c>=0?(i=(t.min.x-d.x)*c,s=(t.max.x-d.x)*c):(i=(t.max.x-d.x)*c,s=(t.min.x-d.x)*c),u>=0?(r=(t.min.y-d.y)*u,o=(t.max.y-d.y)*u):(r=(t.max.y-d.y)*u,o=(t.min.y-d.y)*u),i>o||r>s||((r>i||isNaN(i))&&(i=r),(o<s||isNaN(s))&&(s=o),h>=0?(a=(t.min.z-d.z)*h,l=(t.max.z-d.z)*h):(a=(t.max.z-d.z)*h,l=(t.min.z-d.z)*h),i>l||a>s)||((a>i||i!==i)&&(i=a),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,In)!==null}intersectTriangle(t,e,i,s,r){Ko.subVectors(e,t),Sr.subVectors(i,t),$o.crossVectors(Ko,Sr);let o=this.direction.dot($o),a;if(o>0){if(s)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ei.subVectors(this.origin,t);const l=a*this.direction.dot(Sr.crossVectors(ei,Sr));if(l<0)return null;const c=a*this.direction.dot(Ko.cross(ei));if(c<0||l+c>o)return null;const u=-a*ei.dot($o);return u<0?null:this.at(u/o,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class he{constructor(t,e,i,s,r,o,a,l,c,u,h,d,m,v,_,p){he.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,o,a,l,c,u,h,d,m,v,_,p)}set(t,e,i,s,r,o,a,l,c,u,h,d,m,v,_,p){const f=this.elements;return f[0]=t,f[4]=e,f[8]=i,f[12]=s,f[1]=r,f[5]=o,f[9]=a,f[13]=l,f[2]=c,f[6]=u,f[10]=h,f[14]=d,f[3]=m,f[7]=v,f[11]=_,f[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new he().fromArray(this.elements)}copy(t){const e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){const e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){const e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){const e=this.elements,i=t.elements,s=1/ji.setFromMatrixColumn(t,0).length(),r=1/ji.setFromMatrixColumn(t,1).length(),o=1/ji.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*o,e[9]=i[9]*o,e[10]=i[10]*o,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){const e=this.elements,i=t.x,s=t.y,r=t.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(s),c=Math.sin(s),u=Math.cos(r),h=Math.sin(r);if(t.order==="XYZ"){const d=o*u,m=o*h,v=a*u,_=a*h;e[0]=l*u,e[4]=-l*h,e[8]=c,e[1]=m+v*c,e[5]=d-_*c,e[9]=-a*l,e[2]=_-d*c,e[6]=v+m*c,e[10]=o*l}else if(t.order==="YXZ"){const d=l*u,m=l*h,v=c*u,_=c*h;e[0]=d+_*a,e[4]=v*a-m,e[8]=o*c,e[1]=o*h,e[5]=o*u,e[9]=-a,e[2]=m*a-v,e[6]=_+d*a,e[10]=o*l}else if(t.order==="ZXY"){const d=l*u,m=l*h,v=c*u,_=c*h;e[0]=d-_*a,e[4]=-o*h,e[8]=v+m*a,e[1]=m+v*a,e[5]=o*u,e[9]=_-d*a,e[2]=-o*c,e[6]=a,e[10]=o*l}else if(t.order==="ZYX"){const d=o*u,m=o*h,v=a*u,_=a*h;e[0]=l*u,e[4]=v*c-m,e[8]=d*c+_,e[1]=l*h,e[5]=_*c+d,e[9]=m*c-v,e[2]=-c,e[6]=a*l,e[10]=o*l}else if(t.order==="YZX"){const d=o*l,m=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=_-d*h,e[8]=v*h+m,e[1]=h,e[5]=o*u,e[9]=-a*u,e[2]=-c*u,e[6]=m*h+v,e[10]=d-_*h}else if(t.order==="XZY"){const d=o*l,m=o*c,v=a*l,_=a*c;e[0]=l*u,e[4]=-h,e[8]=c*u,e[1]=d*h+_,e[5]=o*u,e[9]=m*h-v,e[2]=v*h-m,e[6]=a*u,e[10]=_*h+d}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(l_,t,c_)}lookAt(t,e,i){const s=this.elements;return He.subVectors(t,e),He.lengthSq()===0&&(He.z=1),He.normalize(),ni.crossVectors(i,He),ni.lengthSq()===0&&(Math.abs(i.z)===1?He.x+=1e-4:He.z+=1e-4,He.normalize(),ni.crossVectors(i,He)),ni.normalize(),Er.crossVectors(He,ni),s[0]=ni.x,s[4]=Er.x,s[8]=He.x,s[1]=ni.y,s[5]=Er.y,s[9]=He.y,s[2]=ni.z,s[6]=Er.z,s[10]=He.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){const i=t.elements,s=e.elements,r=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],h=i[5],d=i[9],m=i[13],v=i[2],_=i[6],p=i[10],f=i[14],w=i[3],A=i[7],S=i[11],z=i[15],L=s[0],P=s[4],F=s[8],T=s[12],E=s[1],D=s[5],Q=s[9],Y=s[13],it=s[2],rt=s[6],Z=s[10],J=s[14],H=s[3],ft=s[7],Mt=s[11],yt=s[15];return r[0]=o*L+a*E+l*it+c*H,r[4]=o*P+a*D+l*rt+c*ft,r[8]=o*F+a*Q+l*Z+c*Mt,r[12]=o*T+a*Y+l*J+c*yt,r[1]=u*L+h*E+d*it+m*H,r[5]=u*P+h*D+d*rt+m*ft,r[9]=u*F+h*Q+d*Z+m*Mt,r[13]=u*T+h*Y+d*J+m*yt,r[2]=v*L+_*E+p*it+f*H,r[6]=v*P+_*D+p*rt+f*ft,r[10]=v*F+_*Q+p*Z+f*Mt,r[14]=v*T+_*Y+p*J+f*yt,r[3]=w*L+A*E+S*it+z*H,r[7]=w*P+A*D+S*rt+z*ft,r[11]=w*F+A*Q+S*Z+z*Mt,r[15]=w*T+A*Y+S*J+z*yt,this}multiplyScalar(t){const e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){const t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],o=t[1],a=t[5],l=t[9],c=t[13],u=t[2],h=t[6],d=t[10],m=t[14],v=t[3],_=t[7],p=t[11],f=t[15];return v*(+r*l*h-s*c*h-r*a*d+i*c*d+s*a*m-i*l*m)+_*(+e*l*m-e*c*d+r*o*d-s*o*m+s*c*u-r*l*u)+p*(+e*c*h-e*a*m-r*o*h+i*o*m+r*a*u-i*c*u)+f*(-s*a*u-e*l*h+e*a*d+s*o*h-i*o*d+i*l*u)}transpose(){const t=this.elements;let e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){const s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){const t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],o=t[4],a=t[5],l=t[6],c=t[7],u=t[8],h=t[9],d=t[10],m=t[11],v=t[12],_=t[13],p=t[14],f=t[15],w=h*p*c-_*d*c+_*l*m-a*p*m-h*l*f+a*d*f,A=v*d*c-u*p*c-v*l*m+o*p*m+u*l*f-o*d*f,S=u*_*c-v*h*c+v*a*m-o*_*m-u*a*f+o*h*f,z=v*h*l-u*_*l-v*a*d+o*_*d+u*a*p-o*h*p,L=e*w+i*A+s*S+r*z;if(L===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const P=1/L;return t[0]=w*P,t[1]=(_*d*r-h*p*r-_*s*m+i*p*m+h*s*f-i*d*f)*P,t[2]=(a*p*r-_*l*r+_*s*c-i*p*c-a*s*f+i*l*f)*P,t[3]=(h*l*r-a*d*r-h*s*c+i*d*c+a*s*m-i*l*m)*P,t[4]=A*P,t[5]=(u*p*r-v*d*r+v*s*m-e*p*m-u*s*f+e*d*f)*P,t[6]=(v*l*r-o*p*r-v*s*c+e*p*c+o*s*f-e*l*f)*P,t[7]=(o*d*r-u*l*r+u*s*c-e*d*c-o*s*m+e*l*m)*P,t[8]=S*P,t[9]=(v*h*r-u*_*r-v*i*m+e*_*m+u*i*f-e*h*f)*P,t[10]=(o*_*r-v*a*r+v*i*c-e*_*c-o*i*f+e*a*f)*P,t[11]=(u*a*r-o*h*r-u*i*c+e*h*c+o*i*m-e*a*m)*P,t[12]=z*P,t[13]=(u*_*s-v*h*s+v*i*d-e*_*d-u*i*p+e*h*p)*P,t[14]=(v*a*s-o*_*s-v*i*l+e*_*l+o*i*p-e*a*p)*P,t[15]=(o*h*s-u*a*s+u*i*l-e*h*l-o*i*d+e*a*d)*P,this}scale(t){const e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){const t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){const e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){const e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){const i=Math.cos(e),s=Math.sin(e),r=1-i,o=t.x,a=t.y,l=t.z,c=r*o,u=r*a;return this.set(c*o+i,c*a-s*l,c*l+s*a,0,c*a+s*l,u*a+i,u*l-s*o,0,c*l-s*a,u*l+s*o,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,o){return this.set(1,i,r,0,t,1,o,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){const s=this.elements,r=e._x,o=e._y,a=e._z,l=e._w,c=r+r,u=o+o,h=a+a,d=r*c,m=r*u,v=r*h,_=o*u,p=o*h,f=a*h,w=l*c,A=l*u,S=l*h,z=i.x,L=i.y,P=i.z;return s[0]=(1-(_+f))*z,s[1]=(m+S)*z,s[2]=(v-A)*z,s[3]=0,s[4]=(m-S)*L,s[5]=(1-(d+f))*L,s[6]=(p+w)*L,s[7]=0,s[8]=(v+A)*P,s[9]=(p-w)*P,s[10]=(1-(d+_))*P,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){const s=this.elements;let r=ji.set(s[0],s[1],s[2]).length();const o=ji.set(s[4],s[5],s[6]).length(),a=ji.set(s[8],s[9],s[10]).length();this.determinant()<0&&(r=-r),t.x=s[12],t.y=s[13],t.z=s[14],nn.copy(this);const c=1/r,u=1/o,h=1/a;return nn.elements[0]*=c,nn.elements[1]*=c,nn.elements[2]*=c,nn.elements[4]*=u,nn.elements[5]*=u,nn.elements[6]*=u,nn.elements[8]*=h,nn.elements[9]*=h,nn.elements[10]*=h,e.setFromRotationMatrix(nn),i.x=r,i.y=o,i.z=a,this}makePerspective(t,e,i,s,r,o,a=Wn){const l=this.elements,c=2*r/(e-t),u=2*r/(i-s),h=(e+t)/(e-t),d=(i+s)/(i-s);let m,v;if(a===Wn)m=-(o+r)/(o-r),v=-2*o*r/(o-r);else if(a===oo)m=-o/(o-r),v=-o*r/(o-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=m,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(t,e,i,s,r,o,a=Wn){const l=this.elements,c=1/(e-t),u=1/(i-s),h=1/(o-r),d=(e+t)*c,m=(i+s)*u;let v,_;if(a===Wn)v=(o+r)*h,_=-2*h;else if(a===oo)v=r*h,_=-1*h;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-m,l[2]=0,l[6]=0,l[10]=_,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(t){const e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){const i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}}const ji=new B,nn=new he,l_=new B(0,0,0),c_=new B(1,1,1),ni=new B,Er=new B,He=new B,Kc=new he,$c=new Fi;class wn{constructor(t=0,e=0,i=0,s=wn.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){const s=t.elements,r=s[0],o=s[4],a=s[8],l=s[1],c=s[5],u=s[9],h=s[2],d=s[6],m=s[10];switch(e){case"XYZ":this._y=Math.asin(De(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,m),this._z=Math.atan2(-o,r)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-De(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,m),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-h,r),this._z=0);break;case"ZXY":this._x=Math.asin(De(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-h,m),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-De(h,-1,1)),Math.abs(h)<.9999999?(this._x=Math.atan2(d,m),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(De(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-h,r)):(this._x=0,this._y=Math.atan2(a,m));break;case"XZY":this._z=Math.asin(-De(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,r)):(this._x=Math.atan2(-u,m),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return Kc.makeRotationFromQuaternion(t),this.setFromRotationMatrix(Kc,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return $c.setFromEuler(this),this.setFromQuaternion($c,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}wn.DEFAULT_ORDER="XYZ";class df{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}}let u_=0;const Zc=new B,Ki=new Fi,Un=new he,yr=new B,Ls=new B,h_=new B,f_=new Fi,Jc=new B(1,0,0),Qc=new B(0,1,0),tu=new B(0,0,1),eu={type:"added"},d_={type:"removed"},$i={type:"childadded",child:null},Zo={type:"childremoved",child:null};class Se extends Bi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:u_++}),this.uuid=or(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Se.DEFAULT_UP.clone();const t=new B,e=new wn,i=new Fi,s=new B(1,1,1);function r(){i.setFromEuler(e,!1)}function o(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new he},normalMatrix:{value:new kt}}),this.matrix=new he,this.matrixWorld=new he,this.matrixAutoUpdate=Se.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new df,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.multiply(Ki),this}rotateOnWorldAxis(t,e){return Ki.setFromAxisAngle(t,e),this.quaternion.premultiply(Ki),this}rotateX(t){return this.rotateOnAxis(Jc,t)}rotateY(t){return this.rotateOnAxis(Qc,t)}rotateZ(t){return this.rotateOnAxis(tu,t)}translateOnAxis(t,e){return Zc.copy(t).applyQuaternion(this.quaternion),this.position.add(Zc.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(Jc,t)}translateY(t){return this.translateOnAxis(Qc,t)}translateZ(t){return this.translateOnAxis(tu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Un.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?yr.copy(t):yr.set(t,e,i);const s=this.parent;this.updateWorldMatrix(!0,!1),Ls.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Un.lookAt(Ls,yr,this.up):Un.lookAt(yr,Ls,this.up),this.quaternion.setFromRotationMatrix(Un),s&&(Un.extractRotation(s.matrixWorld),Ki.setFromRotationMatrix(Un),this.quaternion.premultiply(Ki.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(eu),$i.child=t,this.dispatchEvent($i),$i.child=null):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(d_),Zo.child=t,this.dispatchEvent(Zo),Zo.child=null),this}removeFromParent(){const t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Un.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Un.multiply(t.parent.matrixWorld)),t.applyMatrix4(Un),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(eu),$i.child=t,this.dispatchEvent($i),$i.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){const o=this.children[i].getObjectByProperty(t,e);if(o!==void 0)return o}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,t,h_),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Ls,f_,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);const e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}traverse(t){t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){const e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);const e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e){const i=this.parent;if(t===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),e===!0){const s=this.children;for(let r=0,o=s.length;r<o;r++)s[r].updateWorldMatrix(!1,!0)}}toJSON(t){const e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,this.name!==""&&(s.name=this.name),this.castShadow===!0&&(s.castShadow=!0),this.receiveShadow===!0&&(s.receiveShadow=!0),this.visible===!1&&(s.visible=!1),this.frustumCulled===!1&&(s.frustumCulled=!1),this.renderOrder!==0&&(s.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(s.matrixAutoUpdate=!1),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.visibility=this._visibility,s.active=this._active,s.bounds=this._bounds.map(a=>({boxInitialized:a.boxInitialized,boxMin:a.box.min.toArray(),boxMax:a.box.max.toArray(),sphereInitialized:a.sphereInitialized,sphereRadius:a.sphere.radius,sphereCenter:a.sphere.center.toArray()})),s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.geometryCount=this._geometryCount,s.matricesTexture=this._matricesTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere={center:s.boundingSphere.center.toArray(),radius:s.boundingSphere.radius}),this.boundingBox!==null&&(s.boundingBox={min:s.boundingBox.min.toArray(),max:s.boundingBox.max.toArray()}));function r(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const h=l[c];r(t.shapes,h)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(r(t.materials,this.material[l]));s.material=a}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let a=0;a<this.children.length;a++)s.children.push(this.children[a].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];s.animations.push(r(t.animations,l))}}if(e){const a=o(t.geometries),l=o(t.materials),c=o(t.textures),u=o(t.images),h=o(t.shapes),d=o(t.skeletons),m=o(t.animations),v=o(t.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),h.length>0&&(i.shapes=h),d.length>0&&(i.skeletons=d),m.length>0&&(i.animations=m),v.length>0&&(i.nodes=v)}return i.object=s,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){const s=t.children[i];this.add(s.clone())}return this}}Se.DEFAULT_UP=new B(0,1,0);Se.DEFAULT_MATRIX_AUTO_UPDATE=!0;Se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const sn=new B,Nn=new B,Jo=new B,Fn=new B,Zi=new B,Ji=new B,nu=new B,Qo=new B,ta=new B,ea=new B,na=new de,ia=new de,sa=new de;class je{constructor(t=new B,e=new B,i=new B){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),sn.subVectors(t,e),s.cross(sn);const r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){sn.subVectors(s,e),Nn.subVectors(i,e),Jo.subVectors(t,e);const o=sn.dot(sn),a=sn.dot(Nn),l=sn.dot(Jo),c=Nn.dot(Nn),u=Nn.dot(Jo),h=o*c-a*a;if(h===0)return r.set(0,0,0),null;const d=1/h,m=(c*l-a*u)*d,v=(o*u-a*l)*d;return r.set(1-m-v,v,m)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Fn)===null?!1:Fn.x>=0&&Fn.y>=0&&Fn.x+Fn.y<=1}static getInterpolation(t,e,i,s,r,o,a,l){return this.getBarycoord(t,e,i,s,Fn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Fn.x),l.addScaledVector(o,Fn.y),l.addScaledVector(a,Fn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,o){return na.setScalar(0),ia.setScalar(0),sa.setScalar(0),na.fromBufferAttribute(t,e),ia.fromBufferAttribute(t,i),sa.fromBufferAttribute(t,s),o.setScalar(0),o.addScaledVector(na,r.x),o.addScaledVector(ia,r.y),o.addScaledVector(sa,r.z),o}static isFrontFacing(t,e,i,s){return sn.subVectors(i,e),Nn.subVectors(t,e),sn.cross(Nn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return sn.subVectors(this.c,this.b),Nn.subVectors(this.a,this.b),sn.cross(Nn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return je.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return je.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return je.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return je.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return je.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){const i=this.a,s=this.b,r=this.c;let o,a;Zi.subVectors(s,i),Ji.subVectors(r,i),Qo.subVectors(t,i);const l=Zi.dot(Qo),c=Ji.dot(Qo);if(l<=0&&c<=0)return e.copy(i);ta.subVectors(t,s);const u=Zi.dot(ta),h=Ji.dot(ta);if(u>=0&&h<=u)return e.copy(s);const d=l*h-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),e.copy(i).addScaledVector(Zi,o);ea.subVectors(t,r);const m=Zi.dot(ea),v=Ji.dot(ea);if(v>=0&&m<=v)return e.copy(r);const _=m*c-l*v;if(_<=0&&c>=0&&v<=0)return a=c/(c-v),e.copy(i).addScaledVector(Ji,a);const p=u*v-m*h;if(p<=0&&h-u>=0&&m-v>=0)return nu.subVectors(r,s),a=(h-u)/(h-u+(m-v)),e.copy(s).addScaledVector(nu,a);const f=1/(p+_+d);return o=_*f,a=d*f,e.copy(i).addScaledVector(Zi,o).addScaledVector(Ji,a)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}}const pf={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ii={h:0,s:0,l:0},Tr={h:0,s:0,l:0};function ra(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}class qt{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){const s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=qe){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Yt.toWorkingColorSpace(this,e),this}setRGB(t,e,i,s=Yt.workingColorSpace){return this.r=t,this.g=e,this.b=i,Yt.toWorkingColorSpace(this,s),this}setHSL(t,e,i,s=Yt.workingColorSpace){if(t=$m(t,1),e=De(e,0,1),i=De(i,0,1),e===0)this.r=this.g=this.b=i;else{const r=i<=.5?i*(1+e):i+e-i*e,o=2*i-r;this.r=ra(o,r,t+1/3),this.g=ra(o,r,t),this.b=ra(o,r,t-1/3)}return Yt.toWorkingColorSpace(this,s),this}setStyle(t,e=qe){function i(r){r!==void 0&&parseFloat(r)<1&&console.warn("THREE.Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r;const o=s[1],a=s[2];switch(o){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:console.warn("THREE.Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){const r=s[1],o=r.length;if(o===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(o===6)return this.setHex(parseInt(r,16),e);console.warn("THREE.Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=qe){const i=pf[t.toLowerCase()];return i!==void 0?this.setHex(i,e):console.warn("THREE.Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Xn(t.r),this.g=Xn(t.g),this.b=Xn(t.b),this}copyLinearToSRGB(t){return this.r=ds(t.r),this.g=ds(t.g),this.b=ds(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=qe){return Yt.fromWorkingColorSpace(Te.copy(this),t),Math.round(De(Te.r*255,0,255))*65536+Math.round(De(Te.g*255,0,255))*256+Math.round(De(Te.b*255,0,255))}getHexString(t=qe){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Yt.workingColorSpace){Yt.fromWorkingColorSpace(Te.copy(this),e);const i=Te.r,s=Te.g,r=Te.b,o=Math.max(i,s,r),a=Math.min(i,s,r);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const h=o-a;switch(c=u<=.5?h/(o+a):h/(2-o-a),o){case i:l=(s-r)/h+(s<r?6:0);break;case s:l=(r-i)/h+2;break;case r:l=(i-s)/h+4;break}l/=6}return t.h=l,t.s=c,t.l=u,t}getRGB(t,e=Yt.workingColorSpace){return Yt.fromWorkingColorSpace(Te.copy(this),e),t.r=Te.r,t.g=Te.g,t.b=Te.b,t}getStyle(t=qe){Yt.fromWorkingColorSpace(Te.copy(this),t);const e=Te.r,i=Te.g,s=Te.b;return t!==qe?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ii),this.setHSL(ii.h+t,ii.s+e,ii.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ii),t.getHSL(Tr);const i=Go(ii.h,Tr.h,e),s=Go(ii.s,Tr.s,e),r=Go(ii.l,Tr.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){const e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Te=new qt;qt.NAMES=pf;let p_=0;class Es extends Bi{static get type(){return"Material"}get type(){return this.constructor.type}set type(t){}constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:p_++}),this.uuid=or(),this.name="",this.blending=hs,this.side=di,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Da,this.blendDst=La,this.blendEquation=wi,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new qt(0,0,0),this.blendAlpha=0,this.depthFunc=ms,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zc,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ki,this.stencilZFail=ki,this.stencilZPass=ki,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(const e in t){const i=t[e];if(i===void 0){console.warn(`THREE.Material: parameter '${e}' has value of undefined.`);continue}const s=this[e];if(s===void 0){console.warn(`THREE.Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){const e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==hs&&(i.blending=this.blending),this.side!==di&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==Da&&(i.blendSrc=this.blendSrc),this.blendDst!==La&&(i.blendDst=this.blendDst),this.blendEquation!==wi&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==ms&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==zc&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==ki&&(i.stencilFail=this.stencilFail),this.stencilZFail!==ki&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==ki&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){const o=[];for(const a in r){const l=r[a];delete l.metadata,o.push(l)}return o}if(e){const r=s(t.textures),o=s(t.images);r.length>0&&(i.textures=r),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;const e=t.clippingPlanes;let i=null;if(e!==null){const s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}onBuild(){console.warn("Material: onBuild() has been removed.")}}class mf extends Es{static get type(){return"MeshBasicMaterial"}constructor(t){super(),this.isMeshBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.combine=Kh,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}}const me=new B,br=new Wt;class Tn{constructor(t,e,i=!1){if(Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Hc,this.updateRanges=[],this.gpuType=kn,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)br.fromBufferAttribute(this,e),br.applyMatrix3(t),this.setXY(e,br.x,br.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix3(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyMatrix4(t),this.setXYZ(e,me.x,me.y,me.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.applyNormalMatrix(t),this.setXYZ(e,me.x,me.y,me.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)me.fromBufferAttribute(this,e),me.transformDirection(t),this.setXYZ(e,me.x,me.y,me.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=Cs(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=Ue(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=Cs(e,this.array)),e}setX(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=Cs(e,this.array)),e}setY(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=Cs(e,this.array)),e}setZ(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=Cs(e,this.array)),e}setW(t,e){return this.normalized&&(e=Ue(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=Ue(e,this.array),i=Ue(i,this.array),s=Ue(s,this.array),r=Ue(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(t.name=this.name),this.usage!==Hc&&(t.usage=this.usage),t}}class _f extends Tn{constructor(t,e,i){super(new Uint16Array(t),e,i)}}class gf extends Tn{constructor(t,e,i){super(new Uint32Array(t),e,i)}}class Ze extends Tn{constructor(t,e,i){super(new Float32Array(t),e,i)}}let m_=0;const Xe=new he,oa=new Se,Qi=new B,Ve=new ar,Is=new ar,xe=new B;class Rn extends Bi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:m_++}),this.uuid=or(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new(uf(t)?gf:_f)(t,1):this.index=t,this}setIndirect(t){return this.indirect=t,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){const e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const r=new kt().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(t){return Xe.makeRotationFromQuaternion(t),this.applyMatrix4(Xe),this}rotateX(t){return Xe.makeRotationX(t),this.applyMatrix4(Xe),this}rotateY(t){return Xe.makeRotationY(t),this.applyMatrix4(Xe),this}rotateZ(t){return Xe.makeRotationZ(t),this.applyMatrix4(Xe),this}translate(t,e,i){return Xe.makeTranslation(t,e,i),this.applyMatrix4(Xe),this}scale(t,e,i){return Xe.makeScale(t,e,i),this.applyMatrix4(Xe),this}lookAt(t){return oa.lookAt(t),oa.updateMatrix(),this.applyMatrix4(oa.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Qi).negate(),this.translate(Qi.x,Qi.y,Qi.z),this}setFromPoints(t){const e=this.getAttribute("position");if(e===void 0){const i=[];for(let s=0,r=t.length;s<r;s++){const o=t[s];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ze(i,3))}else{for(let i=0,s=e.count;i<s;i++){const r=t[i];e.setXYZ(i,r.x,r.y,r.z||0)}t.length>e.count&&console.warn("THREE.BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ar);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){const r=e[i];Ve.setFromBufferAttribute(r),this.morphTargetsRelative?(xe.addVectors(this.boundingBox.min,Ve.min),this.boundingBox.expandByPoint(xe),xe.addVectors(this.boundingBox.max,Ve.max),this.boundingBox.expandByPoint(xe)):(this.boundingBox.expandByPoint(Ve.min),this.boundingBox.expandByPoint(Ve.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new bo);const t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){console.error("THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new B,1/0);return}if(t){const i=this.boundingSphere.center;if(Ve.setFromBufferAttribute(t),e)for(let r=0,o=e.length;r<o;r++){const a=e[r];Is.setFromBufferAttribute(a),this.morphTargetsRelative?(xe.addVectors(Ve.min,Is.min),Ve.expandByPoint(xe),xe.addVectors(Ve.max,Is.max),Ve.expandByPoint(xe)):(Ve.expandByPoint(Is.min),Ve.expandByPoint(Is.max))}Ve.getCenter(i);let s=0;for(let r=0,o=t.count;r<o;r++)xe.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(xe));if(e)for(let r=0,o=e.length;r<o;r++){const a=e[r],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)xe.fromBufferAttribute(a,c),l&&(Qi.fromBufferAttribute(t,c),xe.add(Qi)),s=Math.max(s,i.distanceToSquared(xe))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.position,s=e.normal,r=e.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new Tn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let F=0;F<i.count;F++)a[F]=new B,l[F]=new B;const c=new B,u=new B,h=new B,d=new Wt,m=new Wt,v=new Wt,_=new B,p=new B;function f(F,T,E){c.fromBufferAttribute(i,F),u.fromBufferAttribute(i,T),h.fromBufferAttribute(i,E),d.fromBufferAttribute(r,F),m.fromBufferAttribute(r,T),v.fromBufferAttribute(r,E),u.sub(c),h.sub(c),m.sub(d),v.sub(d);const D=1/(m.x*v.y-v.x*m.y);isFinite(D)&&(_.copy(u).multiplyScalar(v.y).addScaledVector(h,-m.y).multiplyScalar(D),p.copy(h).multiplyScalar(m.x).addScaledVector(u,-v.x).multiplyScalar(D),a[F].add(_),a[T].add(_),a[E].add(_),l[F].add(p),l[T].add(p),l[E].add(p))}let w=this.groups;w.length===0&&(w=[{start:0,count:t.count}]);for(let F=0,T=w.length;F<T;++F){const E=w[F],D=E.start,Q=E.count;for(let Y=D,it=D+Q;Y<it;Y+=3)f(t.getX(Y+0),t.getX(Y+1),t.getX(Y+2))}const A=new B,S=new B,z=new B,L=new B;function P(F){z.fromBufferAttribute(s,F),L.copy(z);const T=a[F];A.copy(T),A.sub(z.multiplyScalar(z.dot(T))).normalize(),S.crossVectors(L,T);const D=S.dot(l[F])<0?-1:1;o.setXYZW(F,A.x,A.y,A.z,D)}for(let F=0,T=w.length;F<T;++F){const E=w[F],D=E.start,Q=E.count;for(let Y=D,it=D+Q;Y<it;Y+=3)P(t.getX(Y+0)),P(t.getX(Y+1)),P(t.getX(Y+2))}}computeVertexNormals(){const t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new Tn(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let d=0,m=i.count;d<m;d++)i.setXYZ(d,0,0,0);const s=new B,r=new B,o=new B,a=new B,l=new B,c=new B,u=new B,h=new B;if(t)for(let d=0,m=t.count;d<m;d+=3){const v=t.getX(d+0),_=t.getX(d+1),p=t.getX(d+2);s.fromBufferAttribute(e,v),r.fromBufferAttribute(e,_),o.fromBufferAttribute(e,p),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,_),c.fromBufferAttribute(i,p),a.add(u),l.add(u),c.add(u),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(_,l.x,l.y,l.z),i.setXYZ(p,c.x,c.y,c.z)}else for(let d=0,m=e.count;d<m;d+=3)s.fromBufferAttribute(e,d+0),r.fromBufferAttribute(e,d+1),o.fromBufferAttribute(e,d+2),u.subVectors(o,r),h.subVectors(s,r),u.cross(h),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)xe.fromBufferAttribute(t,e),xe.normalize(),t.setXYZ(e,xe.x,xe.y,xe.z)}toNonIndexed(){function t(a,l){const c=a.array,u=a.itemSize,h=a.normalized,d=new c.constructor(l.length*u);let m=0,v=0;for(let _=0,p=l.length;_<p;_++){a.isInterleavedBufferAttribute?m=l[_]*a.data.stride+a.offset:m=l[_]*u;for(let f=0;f<u;f++)d[v++]=c[m++]}return new Tn(d,u,h)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const e=new Rn,i=this.index.array,s=this.attributes;for(const a in s){const l=s[a],c=t(l,i);e.setAttribute(a,c)}const r=this.morphAttributes;for(const a in r){const l=[],c=r[a];for(let u=0,h=c.length;u<h;u++){const d=c[u],m=t(d,i);l.push(m)}e.morphAttributes[a]=l}e.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){const t={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.type,this.name!==""&&(t.name=this.name),Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};const e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});const i=this.attributes;for(const l in i){const c=i[l];t.data.attributes[l]=c.toJSON(t.data)}const s={};let r=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let h=0,d=c.length;h<d;h++){const m=c[h];u.push(m.toJSON(t.data))}u.length>0&&(s[l]=u,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(t.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(t.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const e={};this.name=t.name;const i=t.index;i!==null&&this.setIndex(i.clone(e));const s=t.attributes;for(const c in s){const u=s[c];this.setAttribute(c,u.clone(e))}const r=t.morphAttributes;for(const c in r){const u=[],h=r[c];for(let d=0,m=h.length;d<m;d++)u.push(h[d].clone(e));this.morphAttributes[c]=u}this.morphTargetsRelative=t.morphTargetsRelative;const o=t.groups;for(let c=0,u=o.length;c<u;c++){const h=o[c];this.addGroup(h.start,h.count,h.materialIndex)}const a=t.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const iu=new he,Mi=new Wl,Ar=new bo,su=new B,wr=new B,Rr=new B,Cr=new B,aa=new B,Pr=new B,ru=new B,Dr=new B;class Sn extends Se{constructor(t=new Rn,e=new mf){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}getVertexPosition(t,e){const i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,o=i.morphTargetsRelative;e.fromBufferAttribute(s,t);const a=this.morphTargetInfluences;if(r&&a){Pr.set(0,0,0);for(let l=0,c=r.length;l<c;l++){const u=a[l],h=r[l];u!==0&&(aa.fromBufferAttribute(h,t),o?Pr.addScaledVector(aa,u):Pr.addScaledVector(aa.sub(e),u))}e.add(Pr)}return e}raycast(t,e){const i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ar.copy(i.boundingSphere),Ar.applyMatrix4(r),Mi.copy(t.ray).recast(t.near),!(Ar.containsPoint(Mi.origin)===!1&&(Mi.intersectSphere(Ar,su)===null||Mi.origin.distanceToSquared(su)>(t.far-t.near)**2))&&(iu.copy(r).invert(),Mi.copy(t.ray).applyMatrix4(iu),!(i.boundingBox!==null&&Mi.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Mi)))}_computeIntersections(t,e,i){let s;const r=this.geometry,o=this.material,a=r.index,l=r.attributes.position,c=r.attributes.uv,u=r.attributes.uv1,h=r.attributes.normal,d=r.groups,m=r.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=o[p.materialIndex],w=Math.max(p.start,m.start),A=Math.min(a.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,z=A;S<z;S+=3){const L=a.getX(S),P=a.getX(S+1),F=a.getX(S+2);s=Lr(this,f,t,i,c,u,h,L,P,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(a.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const w=a.getX(p),A=a.getX(p+1),S=a.getX(p+2);s=Lr(this,o,t,i,c,u,h,w,A,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,_=d.length;v<_;v++){const p=d[v],f=o[p.materialIndex],w=Math.max(p.start,m.start),A=Math.min(l.count,Math.min(p.start+p.count,m.start+m.count));for(let S=w,z=A;S<z;S+=3){const L=S,P=S+1,F=S+2;s=Lr(this,f,t,i,c,u,h,L,P,F),s&&(s.faceIndex=Math.floor(S/3),s.face.materialIndex=p.materialIndex,e.push(s))}}else{const v=Math.max(0,m.start),_=Math.min(l.count,m.start+m.count);for(let p=v,f=_;p<f;p+=3){const w=p,A=p+1,S=p+2;s=Lr(this,o,t,i,c,u,h,w,A,S),s&&(s.faceIndex=Math.floor(p/3),e.push(s))}}}}function __(n,t,e,i,s,r,o,a){let l;if(t.side===Oe?l=i.intersectTriangle(o,r,s,!0,a):l=i.intersectTriangle(s,r,o,t.side===di,a),l===null)return null;Dr.copy(a),Dr.applyMatrix4(n.matrixWorld);const c=e.ray.origin.distanceTo(Dr);return c<e.near||c>e.far?null:{distance:c,point:Dr.clone(),object:n}}function Lr(n,t,e,i,s,r,o,a,l,c){n.getVertexPosition(a,wr),n.getVertexPosition(l,Rr),n.getVertexPosition(c,Cr);const u=__(n,t,e,i,wr,Rr,Cr,ru);if(u){const h=new B;je.getBarycoord(ru,wr,Rr,Cr,h),s&&(u.uv=je.getInterpolatedAttribute(s,a,l,c,h,new Wt)),r&&(u.uv1=je.getInterpolatedAttribute(r,a,l,c,h,new Wt)),o&&(u.normal=je.getInterpolatedAttribute(o,a,l,c,h,new B),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const d={a,b:l,c,normal:new B,materialIndex:0};je.getNormal(wr,Rr,Cr,d.normal),u.face=d,u.barycoord=h}return u}class ys extends Rn{constructor(t=1,e=1,i=1,s=1,r=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:o};const a=this;s=Math.floor(s),r=Math.floor(r),o=Math.floor(o);const l=[],c=[],u=[],h=[];let d=0,m=0;v("z","y","x",-1,-1,i,e,t,o,r,0),v("z","y","x",1,-1,i,e,-t,o,r,1),v("x","z","y",1,1,t,i,e,s,o,2),v("x","z","y",1,-1,t,i,-e,s,o,3),v("x","y","z",1,-1,t,e,i,s,r,4),v("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new Ze(c,3)),this.setAttribute("normal",new Ze(u,3)),this.setAttribute("uv",new Ze(h,2));function v(_,p,f,w,A,S,z,L,P,F,T){const E=S/P,D=z/F,Q=S/2,Y=z/2,it=L/2,rt=P+1,Z=F+1;let J=0,H=0;const ft=new B;for(let Mt=0;Mt<Z;Mt++){const yt=Mt*D-Y;for(let Dt=0;Dt<rt;Dt++){const Kt=Dt*E-Q;ft[_]=Kt*w,ft[p]=yt*A,ft[f]=it,c.push(ft.x,ft.y,ft.z),ft[_]=0,ft[p]=0,ft[f]=L>0?1:-1,u.push(ft.x,ft.y,ft.z),h.push(Dt/P),h.push(1-Mt/F),J+=1}}for(let Mt=0;Mt<F;Mt++)for(let yt=0;yt<P;yt++){const Dt=d+yt+rt*Mt,Kt=d+yt+rt*(Mt+1),tt=d+(yt+1)+rt*(Mt+1),lt=d+(yt+1)+rt*Mt;l.push(Dt,Kt,lt),l.push(Kt,tt,lt),H+=6}a.addGroup(m,H,T),m+=H,d+=J}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new ys(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}}function Ms(n){const t={};for(const e in n){t[e]={};for(const i in n[e]){const s=n[e][i];s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)?s.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone():Array.isArray(s)?t[e][i]=s.slice():t[e][i]=s}}return t}function Ce(n){const t={};for(let e=0;e<n.length;e++){const i=Ms(n[e]);for(const s in i)t[s]=i[s]}return t}function g_(n){const t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function vf(n){const t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Yt.workingColorSpace}const v_={clone:Ms,merge:Ce};var x_=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,M_=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class pi extends Es{static get type(){return"ShaderMaterial"}constructor(t){super(),this.isShaderMaterial=!0,this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=x_,this.fragmentShader=M_,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Ms(t.uniforms),this.uniformsGroups=g_(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this}toJSON(t){const e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(const s in this.uniforms){const o=this.uniforms[s].value;o&&o.isTexture?e.uniforms[s]={type:"t",value:o.toJSON(t).uuid}:o&&o.isColor?e.uniforms[s]={type:"c",value:o.getHex()}:o&&o.isVector2?e.uniforms[s]={type:"v2",value:o.toArray()}:o&&o.isVector3?e.uniforms[s]={type:"v3",value:o.toArray()}:o&&o.isVector4?e.uniforms[s]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?e.uniforms[s]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?e.uniforms[s]={type:"m4",value:o.toArray()}:e.uniforms[s]={value:o}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;const i={};for(const s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}}class xf extends Se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new he,this.projectionMatrix=new he,this.projectionMatrixInverse=new he,this.coordinateSystem=Wn}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(t,e){super.updateWorldMatrix(t,e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const si=new B,ou=new Wt,au=new Wt;class Ye extends xf{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){const e=.5*this.getFilmHeight()/t;this.fov=_l*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){const t=Math.tan(Ys*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return _l*2*Math.atan(Math.tan(Ys*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){si.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(si.x,si.y).multiplyScalar(-t/si.z),si.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(si.x,si.y).multiplyScalar(-t/si.z)}getViewSize(t,e){return this.getViewBounds(t,ou,au),e.subVectors(au,ou)}setViewOffset(t,e,i,s,r,o){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=this.near;let e=t*Math.tan(Ys*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;r+=o.offsetX*s/l,e-=o.offsetY*i/c,s*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(r+=t*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}}const ts=-90,es=1;class S_ extends Se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ye(ts,es,t,e);s.layers=this.layers,this.add(s);const r=new Ye(ts,es,t,e);r.layers=this.layers,this.add(r);const o=new Ye(ts,es,t,e);o.layers=this.layers,this.add(o);const a=new Ye(ts,es,t,e);a.layers=this.layers,this.add(a);const l=new Ye(ts,es,t,e);l.layers=this.layers,this.add(l);const c=new Ye(ts,es,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const t=this.coordinateSystem,e=this.children.concat(),[i,s,r,o,a,l]=e;for(const c of e)this.remove(c);if(t===Wn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===oo)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(const c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());const[r,o,a,l,c,u]=this.children,h=t.getRenderTarget(),d=t.getActiveCubeFace(),m=t.getActiveMipmapLevel(),v=t.xr.enabled;t.xr.enabled=!1;const _=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,t.setRenderTarget(i,0,s),t.render(e,r),t.setRenderTarget(i,1,s),t.render(e,o),t.setRenderTarget(i,2,s),t.render(e,a),t.setRenderTarget(i,3,s),t.render(e,l),t.setRenderTarget(i,4,s),t.render(e,c),i.texture.generateMipmaps=_,t.setRenderTarget(i,5,s),t.render(e,u),t.setRenderTarget(h,d,m),t.xr.enabled=v,i.texture.needsPMREMUpdate=!0}}class Mf extends Be{constructor(t,e,i,s,r,o,a,l,c,u){t=t!==void 0?t:[],e=e!==void 0?e:_s,super(t,e,i,s,r,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}}class E_ extends Ni{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;const i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Mf(s,e.mapping,e.wrapS,e.wrapT,e.magFilter,e.minFilter,e.format,e.type,e.anisotropy,e.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=e.generateMipmaps!==void 0?e.generateMipmaps:!1,this.texture.minFilter=e.minFilter!==void 0?e.minFilter:Mn}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ys(5,5,5),r=new pi({name:"CubemapFromEquirect",uniforms:Ms(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Oe,blending:ui});r.uniforms.tEquirect.value=e;const o=new Sn(s,r),a=e.minFilter;return e.minFilter===Di&&(e.minFilter=Mn),new S_(1,10,this).update(t,o),e.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(t,e,i,s){const r=t.getRenderTarget();for(let o=0;o<6;o++)t.setRenderTarget(this,o),t.clear(e,i,s);t.setRenderTarget(r)}}const la=new B,y_=new B,T_=new kt;class oi{constructor(t=new B(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){const s=la.subVectors(i,e).cross(y_.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){const t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e){const i=t.delta(la),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;const r=-(t.start.dot(this.normal)+this.constant)/s;return r<0||r>1?null:e.copy(t.start).addScaledVector(i,r)}intersectsLine(t){const e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){const i=e||T_.getNormalMatrix(t),s=this.coplanarPoint(la).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Si=new bo,Ir=new B;class Xl{constructor(t=new oi,e=new oi,i=new oi,s=new oi,r=new oi,o=new oi){this.planes=[t,e,i,s,r,o]}set(t,e,i,s,r,o){const a=this.planes;return a[0].copy(t),a[1].copy(e),a[2].copy(i),a[3].copy(s),a[4].copy(r),a[5].copy(o),this}copy(t){const e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=Wn){const i=this.planes,s=t.elements,r=s[0],o=s[1],a=s[2],l=s[3],c=s[4],u=s[5],h=s[6],d=s[7],m=s[8],v=s[9],_=s[10],p=s[11],f=s[12],w=s[13],A=s[14],S=s[15];if(i[0].setComponents(l-r,d-c,p-m,S-f).normalize(),i[1].setComponents(l+r,d+c,p+m,S+f).normalize(),i[2].setComponents(l+o,d+u,p+v,S+w).normalize(),i[3].setComponents(l-o,d-u,p-v,S-w).normalize(),i[4].setComponents(l-a,d-h,p-_,S-A).normalize(),e===Wn)i[5].setComponents(l+a,d+h,p+_,S+A).normalize();else if(e===oo)i[5].setComponents(a,h,_,A).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Si.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{const e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Si.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Si)}intersectsSprite(t){return Si.center.set(0,0,0),Si.radius=.7071067811865476,Si.applyMatrix4(t.matrixWorld),this.intersectsSphere(Si)}intersectsSphere(t){const e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){const e=this.planes;for(let i=0;i<6;i++){const s=e[i];if(Ir.x=s.normal.x>0?t.max.x:t.min.x,Ir.y=s.normal.y>0?t.max.y:t.min.y,Ir.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Ir)<0)return!1}return!0}containsPoint(t){const e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Sf(){let n=null,t=!1,e=null,i=null;function s(r,o){e(r,o),i=n.requestAnimationFrame(s)}return{start:function(){t!==!0&&e!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function b_(n){const t=new WeakMap;function e(a,l){const c=a.array,u=a.usage,h=c.byteLength,d=n.createBuffer();n.bindBuffer(l,d),n.bufferData(l,c,u),a.onUploadCallback();let m;if(c instanceof Float32Array)m=n.FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?m=n.HALF_FLOAT:m=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)m=n.SHORT;else if(c instanceof Uint32Array)m=n.UNSIGNED_INT;else if(c instanceof Int32Array)m=n.INT;else if(c instanceof Int8Array)m=n.BYTE;else if(c instanceof Uint8Array)m=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)m=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:d,type:m,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:h}}function i(a,l,c){const u=l.array,h=l.updateRanges;if(n.bindBuffer(c,a),h.length===0)n.bufferSubData(c,0,u);else{h.sort((m,v)=>m.start-v.start);let d=0;for(let m=1;m<h.length;m++){const v=h[d],_=h[m];_.start<=v.start+v.count+1?v.count=Math.max(v.count,_.start+_.count-v.start):(++d,h[d]=_)}h.length=d+1;for(let m=0,v=h.length;m<v;m++){const _=h[m];n.bufferSubData(c,_.start*u.BYTES_PER_ELEMENT,u,_.start,_.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(a){return a.isInterleavedBufferAttribute&&(a=a.data),t.get(a)}function r(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=t.get(a);l&&(n.deleteBuffer(l.buffer),t.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const u=t.get(a);(!u||u.version<a.version)&&t.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=t.get(a);if(c===void 0)t.set(a,e(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:s,remove:r,update:o}}class Ao extends Rn{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};const r=t/2,o=e/2,a=Math.floor(i),l=Math.floor(s),c=a+1,u=l+1,h=t/a,d=e/l,m=[],v=[],_=[],p=[];for(let f=0;f<u;f++){const w=f*d-o;for(let A=0;A<c;A++){const S=A*h-r;v.push(S,-w,0),_.push(0,0,1),p.push(A/a),p.push(1-f/l)}}for(let f=0;f<l;f++)for(let w=0;w<a;w++){const A=w+c*f,S=w+c*(f+1),z=w+1+c*(f+1),L=w+1+c*f;m.push(A,S,L),m.push(S,z,L)}this.setIndex(m),this.setAttribute("position",new Ze(v,3)),this.setAttribute("normal",new Ze(_,3)),this.setAttribute("uv",new Ze(p,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new Ao(t.width,t.height,t.widthSegments,t.heightSegments)}}var A_=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,w_=`#ifdef USE_ALPHAHASH
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
#endif`,R_=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,C_=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,P_=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,D_=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,L_=`#ifdef USE_AOMAP
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
#endif`,I_=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,U_=`#ifdef USE_BATCHING
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
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,N_=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,F_=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,O_=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,B_=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,z_=`#ifdef USE_IRIDESCENCE
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
#endif`,H_=`#ifdef USE_BUMPMAP
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
#endif`,V_=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,G_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,k_=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,W_=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,X_=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,q_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,Y_=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,j_=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,K_=`#define PI 3.141592653589793
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
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
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
} // validated`,$_=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Z_=`vec3 transformedNormal = objectNormal;
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
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,J_=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Q_=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,tg=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,eg=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ng="gl_FragColor = linearToOutputTexel( gl_FragColor );",ig=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,sg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,rg=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,og=`#ifdef USE_ENVMAP
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
#endif`,ag=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,lg=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,cg=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,ug=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,hg=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,fg=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dg=`#ifdef USE_GRADIENTMAP
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
}`,pg=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,mg=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,_g=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,gg=`uniform bool receiveShadow;
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
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
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
#endif`,vg=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
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
#endif`,xg=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Mg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,Sg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Eg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yg=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
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
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
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
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
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
#endif`,Tg=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
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
		float v = 0.5 / ( gv + gl );
		return saturate(v);
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
	vec3 f0 = material.specularColor;
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
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
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
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
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
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
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
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,bg=`
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
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
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
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
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
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Ag=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
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
#endif`,wg=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Rg=`#if defined( USE_LOGDEPTHBUF )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Cg=`#if defined( USE_LOGDEPTHBUF )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Pg=`#ifdef USE_LOGDEPTHBUF
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Dg=`#ifdef USE_LOGDEPTHBUF
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Lg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ig=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Ug=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,Ng=`#if defined( USE_POINTS_UV )
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
#endif`,Fg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Og=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Bg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,zg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Hg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Vg=`#ifdef USE_MORPHTARGETS
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
#endif`,Gg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,kg=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
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
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,Wg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,Xg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,qg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Yg=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,jg=`#ifdef USE_NORMALMAP
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
#endif`,Kg=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,$g=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Zg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Jg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Qg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,tv=`vec3 packNormalToRGB( const in vec3 normal ) {
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
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,ev=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,nv=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,iv=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,sv=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rv=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,ov=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,av=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
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
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
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
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
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
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		
		float lightToPositionLength = length( lightToPosition );
		if ( lightToPositionLength - shadowCameraFar <= 0.0 && lightToPositionLength - shadowCameraNear >= 0.0 ) {
			float dp = ( lightToPositionLength - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
			#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
				vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
				shadow = (
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
					texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
				) * ( 1.0 / 9.0 );
			#else
				shadow = texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
#endif`,lv=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,cv=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
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
#endif`,uv=`float getShadowMask() {
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
	#if NUM_POINT_LIGHT_SHADOWS > 0
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
}`,hv=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,fv=`#ifdef USE_SKINNING
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
#endif`,dv=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,pv=`#ifdef USE_SKINNING
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
#endif`,mv=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,_v=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gv=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vv=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,xv=`#ifdef USE_TRANSMISSION
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
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Mv=`#ifdef USE_TRANSMISSION
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
#endif`,Sv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Ev=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yv=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,Tv=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const bv=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Av=`uniform sampler2D t2D;
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
}`,wv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Rv=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Cv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Pv=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dv=`#include <common>
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
}`,Lv=`#if DEPTH_PACKING == 3200
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
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Iv=`#define DISTANCE
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
}`,Uv=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Nv=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Fv=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Ov=`uniform float scale;
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
}`,Bv=`uniform vec3 diffuse;
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
}`,zv=`#include <common>
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
}`,Hv=`uniform vec3 diffuse;
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
}`,Vv=`#define LAMBERT
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
}`,Gv=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,kv=`#define MATCAP
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
}`,Wv=`#define MATCAP
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
}`,Xv=`#define NORMAL
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
}`,qv=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
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
	gl_FragColor = vec4( packNormalToRGB( normal ), diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Yv=`#define PHONG
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
}`,jv=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
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
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
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
}`,Kv=`#define STANDARD
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
}`,$v=`#define STANDARD
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
#include <packing>
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
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecularDirect + sheenSpecularIndirect;
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
}`,Zv=`#define TOON
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
}`,Jv=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
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
}`,Qv=`uniform float size;
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
}`,t0=`uniform vec3 diffuse;
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
}`,e0=`#include <common>
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
}`,n0=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
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
}`,i0=`uniform float rotation;
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
}`,s0=`uniform vec3 diffuse;
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
}`,Xt={alphahash_fragment:A_,alphahash_pars_fragment:w_,alphamap_fragment:R_,alphamap_pars_fragment:C_,alphatest_fragment:P_,alphatest_pars_fragment:D_,aomap_fragment:L_,aomap_pars_fragment:I_,batching_pars_vertex:U_,batching_vertex:N_,begin_vertex:F_,beginnormal_vertex:O_,bsdfs:B_,iridescence_fragment:z_,bumpmap_pars_fragment:H_,clipping_planes_fragment:V_,clipping_planes_pars_fragment:G_,clipping_planes_pars_vertex:k_,clipping_planes_vertex:W_,color_fragment:X_,color_pars_fragment:q_,color_pars_vertex:Y_,color_vertex:j_,common:K_,cube_uv_reflection_fragment:$_,defaultnormal_vertex:Z_,displacementmap_pars_vertex:J_,displacementmap_vertex:Q_,emissivemap_fragment:tg,emissivemap_pars_fragment:eg,colorspace_fragment:ng,colorspace_pars_fragment:ig,envmap_fragment:sg,envmap_common_pars_fragment:rg,envmap_pars_fragment:og,envmap_pars_vertex:ag,envmap_physical_pars_fragment:vg,envmap_vertex:lg,fog_vertex:cg,fog_pars_vertex:ug,fog_fragment:hg,fog_pars_fragment:fg,gradientmap_pars_fragment:dg,lightmap_pars_fragment:pg,lights_lambert_fragment:mg,lights_lambert_pars_fragment:_g,lights_pars_begin:gg,lights_toon_fragment:xg,lights_toon_pars_fragment:Mg,lights_phong_fragment:Sg,lights_phong_pars_fragment:Eg,lights_physical_fragment:yg,lights_physical_pars_fragment:Tg,lights_fragment_begin:bg,lights_fragment_maps:Ag,lights_fragment_end:wg,logdepthbuf_fragment:Rg,logdepthbuf_pars_fragment:Cg,logdepthbuf_pars_vertex:Pg,logdepthbuf_vertex:Dg,map_fragment:Lg,map_pars_fragment:Ig,map_particle_fragment:Ug,map_particle_pars_fragment:Ng,metalnessmap_fragment:Fg,metalnessmap_pars_fragment:Og,morphinstance_vertex:Bg,morphcolor_vertex:zg,morphnormal_vertex:Hg,morphtarget_pars_vertex:Vg,morphtarget_vertex:Gg,normal_fragment_begin:kg,normal_fragment_maps:Wg,normal_pars_fragment:Xg,normal_pars_vertex:qg,normal_vertex:Yg,normalmap_pars_fragment:jg,clearcoat_normal_fragment_begin:Kg,clearcoat_normal_fragment_maps:$g,clearcoat_pars_fragment:Zg,iridescence_pars_fragment:Jg,opaque_fragment:Qg,packing:tv,premultiplied_alpha_fragment:ev,project_vertex:nv,dithering_fragment:iv,dithering_pars_fragment:sv,roughnessmap_fragment:rv,roughnessmap_pars_fragment:ov,shadowmap_pars_fragment:av,shadowmap_pars_vertex:lv,shadowmap_vertex:cv,shadowmask_pars_fragment:uv,skinbase_vertex:hv,skinning_pars_vertex:fv,skinning_vertex:dv,skinnormal_vertex:pv,specularmap_fragment:mv,specularmap_pars_fragment:_v,tonemapping_fragment:gv,tonemapping_pars_fragment:vv,transmission_fragment:xv,transmission_pars_fragment:Mv,uv_pars_fragment:Sv,uv_pars_vertex:Ev,uv_vertex:yv,worldpos_vertex:Tv,background_vert:bv,background_frag:Av,backgroundCube_vert:wv,backgroundCube_frag:Rv,cube_vert:Cv,cube_frag:Pv,depth_vert:Dv,depth_frag:Lv,distanceRGBA_vert:Iv,distanceRGBA_frag:Uv,equirect_vert:Nv,equirect_frag:Fv,linedashed_vert:Ov,linedashed_frag:Bv,meshbasic_vert:zv,meshbasic_frag:Hv,meshlambert_vert:Vv,meshlambert_frag:Gv,meshmatcap_vert:kv,meshmatcap_frag:Wv,meshnormal_vert:Xv,meshnormal_frag:qv,meshphong_vert:Yv,meshphong_frag:jv,meshphysical_vert:Kv,meshphysical_frag:$v,meshtoon_vert:Zv,meshtoon_frag:Jv,points_vert:Qv,points_frag:t0,shadow_vert:e0,shadow_frag:n0,sprite_vert:i0,sprite_frag:s0},mt={common:{diffuse:{value:new qt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new kt}},envmap:{envMap:{value:null},envMapRotation:{value:new kt},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new kt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new kt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new kt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new kt},normalScale:{value:new Wt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new kt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new kt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new kt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new kt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new qt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new qt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0},uvTransform:{value:new kt}},sprite:{diffuse:{value:new qt(16777215)},opacity:{value:1},center:{value:new Wt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new kt},alphaMap:{value:null},alphaMapTransform:{value:new kt},alphaTest:{value:0}}},vn={basic:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.fog]),vertexShader:Xt.meshbasic_vert,fragmentShader:Xt.meshbasic_frag},lambert:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshlambert_vert,fragmentShader:Xt.meshlambert_frag},phong:{uniforms:Ce([mt.common,mt.specularmap,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},specular:{value:new qt(1118481)},shininess:{value:30}}]),vertexShader:Xt.meshphong_vert,fragmentShader:Xt.meshphong_frag},standard:{uniforms:Ce([mt.common,mt.envmap,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.roughnessmap,mt.metalnessmap,mt.fog,mt.lights,{emissive:{value:new qt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag},toon:{uniforms:Ce([mt.common,mt.aomap,mt.lightmap,mt.emissivemap,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.gradientmap,mt.fog,mt.lights,{emissive:{value:new qt(0)}}]),vertexShader:Xt.meshtoon_vert,fragmentShader:Xt.meshtoon_frag},matcap:{uniforms:Ce([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,mt.fog,{matcap:{value:null}}]),vertexShader:Xt.meshmatcap_vert,fragmentShader:Xt.meshmatcap_frag},points:{uniforms:Ce([mt.points,mt.fog]),vertexShader:Xt.points_vert,fragmentShader:Xt.points_frag},dashed:{uniforms:Ce([mt.common,mt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Xt.linedashed_vert,fragmentShader:Xt.linedashed_frag},depth:{uniforms:Ce([mt.common,mt.displacementmap]),vertexShader:Xt.depth_vert,fragmentShader:Xt.depth_frag},normal:{uniforms:Ce([mt.common,mt.bumpmap,mt.normalmap,mt.displacementmap,{opacity:{value:1}}]),vertexShader:Xt.meshnormal_vert,fragmentShader:Xt.meshnormal_frag},sprite:{uniforms:Ce([mt.sprite,mt.fog]),vertexShader:Xt.sprite_vert,fragmentShader:Xt.sprite_frag},background:{uniforms:{uvTransform:{value:new kt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Xt.background_vert,fragmentShader:Xt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new kt}},vertexShader:Xt.backgroundCube_vert,fragmentShader:Xt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Xt.cube_vert,fragmentShader:Xt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Xt.equirect_vert,fragmentShader:Xt.equirect_frag},distanceRGBA:{uniforms:Ce([mt.common,mt.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Xt.distanceRGBA_vert,fragmentShader:Xt.distanceRGBA_frag},shadow:{uniforms:Ce([mt.lights,mt.fog,{color:{value:new qt(0)},opacity:{value:1}}]),vertexShader:Xt.shadow_vert,fragmentShader:Xt.shadow_frag}};vn.physical={uniforms:Ce([vn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new kt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new kt},clearcoatNormalScale:{value:new Wt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new kt},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new kt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new kt},sheen:{value:0},sheenColor:{value:new qt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new kt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new kt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new kt},transmissionSamplerSize:{value:new Wt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new kt},attenuationDistance:{value:0},attenuationColor:{value:new qt(0)},specularColor:{value:new qt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new kt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new kt},anisotropyVector:{value:new Wt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new kt}}]),vertexShader:Xt.meshphysical_vert,fragmentShader:Xt.meshphysical_frag};const Ur={r:0,b:0,g:0},Ei=new wn,r0=new he;function o0(n,t,e,i,s,r,o){const a=new qt(0);let l=r===!0?0:1,c,u,h=null,d=0,m=null;function v(w){let A=w.isScene===!0?w.background:null;return A&&A.isTexture&&(A=(w.backgroundBlurriness>0?e:t).get(A)),A}function _(w){let A=!1;const S=v(w);S===null?f(a,l):S&&S.isColor&&(f(S,1),A=!0);const z=n.xr.getEnvironmentBlendMode();z==="additive"?i.buffers.color.setClear(0,0,0,1,o):z==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(n.autoClear||A)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function p(w,A){const S=v(A);S&&(S.isCubeTexture||S.mapping===yo)?(u===void 0&&(u=new Sn(new ys(1,1,1),new pi({name:"BackgroundCubeMaterial",uniforms:Ms(vn.backgroundCube.uniforms),vertexShader:vn.backgroundCube.vertexShader,fragmentShader:vn.backgroundCube.fragmentShader,side:Oe,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(z,L,P){this.matrixWorld.copyPosition(P.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),s.update(u)),Ei.copy(A.backgroundRotation),Ei.x*=-1,Ei.y*=-1,Ei.z*=-1,S.isCubeTexture&&S.isRenderTargetTexture===!1&&(Ei.y*=-1,Ei.z*=-1),u.material.uniforms.envMap.value=S,u.material.uniforms.flipEnvMap.value=S.isCubeTexture&&S.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=A.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,u.material.uniforms.backgroundRotation.value.setFromMatrix4(r0.makeRotationFromEuler(Ei)),u.material.toneMapped=Yt.getTransfer(S.colorSpace)!==ne,(h!==S||d!==S.version||m!==n.toneMapping)&&(u.material.needsUpdate=!0,h=S,d=S.version,m=n.toneMapping),u.layers.enableAll(),w.unshift(u,u.geometry,u.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new Sn(new Ao(2,2),new pi({name:"BackgroundMaterial",uniforms:Ms(vn.background.uniforms),vertexShader:vn.background.vertexShader,fragmentShader:vn.background.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),s.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=A.backgroundIntensity,c.material.toneMapped=Yt.getTransfer(S.colorSpace)!==ne,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(h!==S||d!==S.version||m!==n.toneMapping)&&(c.material.needsUpdate=!0,h=S,d=S.version,m=n.toneMapping),c.layers.enableAll(),w.unshift(c,c.geometry,c.material,0,0,null))}function f(w,A){w.getRGB(Ur,vf(n)),i.buffers.color.setClear(Ur.r,Ur.g,Ur.b,A,o)}return{getClearColor:function(){return a},setClearColor:function(w,A=1){a.set(w),l=A,f(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(w){l=w,f(a,l)},render:_,addToRenderList:p}}function a0(n,t){const e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=d(null);let r=s,o=!1;function a(E,D,Q,Y,it){let rt=!1;const Z=h(Y,Q,D);r!==Z&&(r=Z,c(r.object)),rt=m(E,Y,Q,it),rt&&v(E,Y,Q,it),it!==null&&t.update(it,n.ELEMENT_ARRAY_BUFFER),(rt||o)&&(o=!1,S(E,D,Q,Y),it!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(it).buffer))}function l(){return n.createVertexArray()}function c(E){return n.bindVertexArray(E)}function u(E){return n.deleteVertexArray(E)}function h(E,D,Q){const Y=Q.wireframe===!0;let it=i[E.id];it===void 0&&(it={},i[E.id]=it);let rt=it[D.id];rt===void 0&&(rt={},it[D.id]=rt);let Z=rt[Y];return Z===void 0&&(Z=d(l()),rt[Y]=Z),Z}function d(E){const D=[],Q=[],Y=[];for(let it=0;it<e;it++)D[it]=0,Q[it]=0,Y[it]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:D,enabledAttributes:Q,attributeDivisors:Y,object:E,attributes:{},index:null}}function m(E,D,Q,Y){const it=r.attributes,rt=D.attributes;let Z=0;const J=Q.getAttributes();for(const H in J)if(J[H].location>=0){const Mt=it[H];let yt=rt[H];if(yt===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(yt=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(yt=E.instanceColor)),Mt===void 0||Mt.attribute!==yt||yt&&Mt.data!==yt.data)return!0;Z++}return r.attributesNum!==Z||r.index!==Y}function v(E,D,Q,Y){const it={},rt=D.attributes;let Z=0;const J=Q.getAttributes();for(const H in J)if(J[H].location>=0){let Mt=rt[H];Mt===void 0&&(H==="instanceMatrix"&&E.instanceMatrix&&(Mt=E.instanceMatrix),H==="instanceColor"&&E.instanceColor&&(Mt=E.instanceColor));const yt={};yt.attribute=Mt,Mt&&Mt.data&&(yt.data=Mt.data),it[H]=yt,Z++}r.attributes=it,r.attributesNum=Z,r.index=Y}function _(){const E=r.newAttributes;for(let D=0,Q=E.length;D<Q;D++)E[D]=0}function p(E){f(E,0)}function f(E,D){const Q=r.newAttributes,Y=r.enabledAttributes,it=r.attributeDivisors;Q[E]=1,Y[E]===0&&(n.enableVertexAttribArray(E),Y[E]=1),it[E]!==D&&(n.vertexAttribDivisor(E,D),it[E]=D)}function w(){const E=r.newAttributes,D=r.enabledAttributes;for(let Q=0,Y=D.length;Q<Y;Q++)D[Q]!==E[Q]&&(n.disableVertexAttribArray(Q),D[Q]=0)}function A(E,D,Q,Y,it,rt,Z){Z===!0?n.vertexAttribIPointer(E,D,Q,it,rt):n.vertexAttribPointer(E,D,Q,Y,it,rt)}function S(E,D,Q,Y){_();const it=Y.attributes,rt=Q.getAttributes(),Z=D.defaultAttributeValues;for(const J in rt){const H=rt[J];if(H.location>=0){let ft=it[J];if(ft===void 0&&(J==="instanceMatrix"&&E.instanceMatrix&&(ft=E.instanceMatrix),J==="instanceColor"&&E.instanceColor&&(ft=E.instanceColor)),ft!==void 0){const Mt=ft.normalized,yt=ft.itemSize,Dt=t.get(ft);if(Dt===void 0)continue;const Kt=Dt.buffer,tt=Dt.type,lt=Dt.bytesPerElement,Et=tt===n.INT||tt===n.UNSIGNED_INT||ft.gpuType===Bl;if(ft.isInterleavedBufferAttribute){const pt=ft.data,Ct=pt.stride,Ut=ft.offset;if(pt.isInstancedInterleavedBuffer){for(let Bt=0;Bt<H.locationSize;Bt++)f(H.location+Bt,pt.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=pt.meshPerAttribute*pt.count)}else for(let Bt=0;Bt<H.locationSize;Bt++)p(H.location+Bt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let Bt=0;Bt<H.locationSize;Bt++)A(H.location+Bt,yt/H.locationSize,tt,Mt,Ct*lt,(Ut+yt/H.locationSize*Bt)*lt,Et)}else{if(ft.isInstancedBufferAttribute){for(let pt=0;pt<H.locationSize;pt++)f(H.location+pt,ft.meshPerAttribute);E.isInstancedMesh!==!0&&Y._maxInstanceCount===void 0&&(Y._maxInstanceCount=ft.meshPerAttribute*ft.count)}else for(let pt=0;pt<H.locationSize;pt++)p(H.location+pt);n.bindBuffer(n.ARRAY_BUFFER,Kt);for(let pt=0;pt<H.locationSize;pt++)A(H.location+pt,yt/H.locationSize,tt,Mt,yt*lt,yt/H.locationSize*pt*lt,Et)}}else if(Z!==void 0){const Mt=Z[J];if(Mt!==void 0)switch(Mt.length){case 2:n.vertexAttrib2fv(H.location,Mt);break;case 3:n.vertexAttrib3fv(H.location,Mt);break;case 4:n.vertexAttrib4fv(H.location,Mt);break;default:n.vertexAttrib1fv(H.location,Mt)}}}}w()}function z(){F();for(const E in i){const D=i[E];for(const Q in D){const Y=D[Q];for(const it in Y)u(Y[it].object),delete Y[it];delete D[Q]}delete i[E]}}function L(E){if(i[E.id]===void 0)return;const D=i[E.id];for(const Q in D){const Y=D[Q];for(const it in Y)u(Y[it].object),delete Y[it];delete D[Q]}delete i[E.id]}function P(E){for(const D in i){const Q=i[D];if(Q[E.id]===void 0)continue;const Y=Q[E.id];for(const it in Y)u(Y[it].object),delete Y[it];delete Q[E.id]}}function F(){T(),o=!0,r!==s&&(r=s,c(r.object))}function T(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:a,reset:F,resetDefaultState:T,dispose:z,releaseStatesOfGeometry:L,releaseStatesOfProgram:P,initAttributes:_,enableAttribute:p,disableUnusedAttributes:w}}function l0(n,t,e){let i;function s(c){i=c}function r(c,u){n.drawArrays(i,c,u),e.update(u,i,1)}function o(c,u,h){h!==0&&(n.drawArraysInstanced(i,c,u,h),e.update(u,i,h))}function a(c,u,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,u,0,h);let m=0;for(let v=0;v<h;v++)m+=u[v];e.update(m,i,1)}function l(c,u,h,d){if(h===0)return;const m=t.get("WEBGL_multi_draw");if(m===null)for(let v=0;v<c.length;v++)o(c[v],u[v],d[v]);else{m.multiDrawArraysInstancedWEBGL(i,c,0,u,0,d,0,h);let v=0;for(let _=0;_<h;_++)v+=u[_]*d[_];e.update(v,i,1)}}this.setMode=s,this.render=r,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function c0(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){const P=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(P.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function o(P){return!(P!==an&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(P){const F=P===rr&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(P!==Kn&&i.convert(P)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE)&&P!==kn&&!F)}function l(P){if(P==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";P="mediump"}return P==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp";const u=l(c);u!==c&&(console.warn("THREE.WebGLRenderer:",c,"not supported, using",u,"instead."),c=u);const h=e.logarithmicDepthBuffer===!0,d=e.reverseDepthBuffer===!0&&t.has("EXT_clip_control"),m=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=n.getParameter(n.MAX_TEXTURE_SIZE),p=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),f=n.getParameter(n.MAX_VERTEX_ATTRIBS),w=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),A=n.getParameter(n.MAX_VARYING_VECTORS),S=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),z=v>0,L=n.getParameter(n.MAX_SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:h,reverseDepthBuffer:d,maxTextures:m,maxVertexTextures:v,maxTextureSize:_,maxCubemapSize:p,maxAttributes:f,maxVertexUniforms:w,maxVaryings:A,maxFragmentUniforms:S,vertexTextures:z,maxSamples:L}}function u0(n){const t=this;let e=null,i=0,s=!1,r=!1;const o=new oi,a=new kt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(h,d){const m=h.length!==0||d||i!==0||s;return s=d,i=h.length,m},this.beginShadows=function(){r=!0,u(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(h,d){e=u(h,d,0)},this.setState=function(h,d,m){const v=h.clippingPlanes,_=h.clipIntersection,p=h.clipShadows,f=n.get(h);if(!s||v===null||v.length===0||r&&!p)r?u(null):c();else{const w=r?0:i,A=w*4;let S=f.clippingState||null;l.value=S,S=u(v,d,A,m);for(let z=0;z!==A;++z)S[z]=e[z];f.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=w}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function u(h,d,m,v){const _=h!==null?h.length:0;let p=null;if(_!==0){if(p=l.value,v!==!0||p===null){const f=m+_*4,w=d.matrixWorldInverse;a.getNormalMatrix(w),(p===null||p.length<f)&&(p=new Float32Array(f));for(let A=0,S=m;A!==_;++A,S+=4)o.copy(h[A]).applyMatrix4(w,a),o.normal.toArray(p,S),p[S+3]=o.constant}l.value=p,l.needsUpdate=!0}return t.numPlanes=_,t.numIntersection=0,p}}function h0(n){let t=new WeakMap;function e(o,a){return a===Ha?o.mapping=_s:a===Va&&(o.mapping=gs),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===Ha||a===Va)if(t.has(o)){const l=t.get(o).texture;return e(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new E_(l.height);return c.fromEquirectangularTexture(n,o),t.set(o,c),o.addEventListener("dispose",s),e(c.texture,o.mapping)}else return null}}return o}function s(o){const a=o.target;a.removeEventListener("dispose",s);const l=t.get(a);l!==void 0&&(t.delete(a),l.dispose())}function r(){t=new WeakMap}return{get:i,dispose:r}}class Ef extends xf{constructor(t=-1,e=1,i=1,s=-1,r=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=o,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let r=i-t,o=i+t,a=s+e,l=s-e;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,o=r+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(r,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){const e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}}const as=4,lu=[.125,.215,.35,.446,.526,.582],Ri=20,ca=new Ef,cu=new qt;let ua=null,ha=0,fa=0,da=!1;const Ai=(1+Math.sqrt(5))/2,ns=1/Ai,uu=[new B(-Ai,ns,0),new B(Ai,ns,0),new B(-ns,0,Ai),new B(ns,0,Ai),new B(0,Ai,-ns),new B(0,Ai,ns),new B(-1,1,-1),new B(1,1,-1),new B(-1,1,1),new B(1,1,1)];class hu{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(t,e=0,i=.1,s=100){ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(256);const r=this._allocateTargets();return r.depthBuffer=!0,this._sceneToCubeUV(t,i,s,r),e>0&&this._blur(r,0,0,e),this._applyPMREM(r),this._cleanup(r),r}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=pu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=du(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodPlanes.length;t++)this._lodPlanes[t].dispose()}_cleanup(t){this._renderer.setRenderTarget(ua,ha,fa),this._renderer.xr.enabled=da,t.scissorTest=!1,Nr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===_s||t.mapping===gs?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),ua=this._renderer.getRenderTarget(),ha=this._renderer.getActiveCubeFace(),fa=this._renderer.getActiveMipmapLevel(),da=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Mn,minFilter:Mn,generateMipmaps:!1,type:rr,format:an,colorSpace:Ss,depthBuffer:!1},s=fu(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=fu(t,e,i);const{_lodMax:r}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=f0(r)),this._blurMaterial=d0(r,t,e)}return s}_compileMaterial(t){const e=new Sn(this._lodPlanes[0],t);this._renderer.compile(e,ca)}_sceneToCubeUV(t,e,i,s){const a=new Ye(90,1,e,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,d=u.toneMapping;u.getClearColor(cu),u.toneMapping=hi,u.autoClear=!1;const m=new mf({name:"PMREM.Background",side:Oe,depthWrite:!1,depthTest:!1}),v=new Sn(new ys,m);let _=!1;const p=t.background;p?p.isColor&&(m.color.copy(p),t.background=null,_=!0):(m.color.copy(cu),_=!0);for(let f=0;f<6;f++){const w=f%3;w===0?(a.up.set(0,l[f],0),a.lookAt(c[f],0,0)):w===1?(a.up.set(0,0,l[f]),a.lookAt(0,c[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,c[f]));const A=this._cubeSize;Nr(s,w*A,f>2?A:0,A,A),u.setRenderTarget(s),_&&u.render(v,a),u.render(t,a)}v.geometry.dispose(),v.material.dispose(),u.toneMapping=d,u.autoClear=h,t.background=p}_textureToCubeUV(t,e){const i=this._renderer,s=t.mapping===_s||t.mapping===gs;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=pu()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=du());const r=s?this._cubemapMaterial:this._equirectMaterial,o=new Sn(this._lodPlanes[0],r),a=r.uniforms;a.envMap.value=t;const l=this._cubeSize;Nr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(o,ca)}_applyPMREM(t){const e=this._renderer,i=e.autoClear;e.autoClear=!1;const s=this._lodPlanes.length;for(let r=1;r<s;r++){const o=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),a=uu[(s-r-1)%uu.length];this._blur(t,r-1,r,o,a)}e.autoClear=i}_blur(t,e,i,s,r){const o=this._pingPongRenderTarget;this._halfBlur(t,o,e,i,s,"latitudinal",r),this._halfBlur(o,t,i,i,s,"longitudinal",r)}_halfBlur(t,e,i,s,r,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,h=new Sn(this._lodPlanes[s],c),d=c.uniforms,m=this._sizeLods[i]-1,v=isFinite(r)?Math.PI/(2*m):2*Math.PI/(2*Ri-1),_=r/v,p=isFinite(r)?1+Math.floor(u*_):Ri;p>Ri&&console.warn(`sigmaRadians, ${r}, is too large and will clip, as it requested ${p} samples when the maximum is set to ${Ri}`);const f=[];let w=0;for(let P=0;P<Ri;++P){const F=P/_,T=Math.exp(-F*F/2);f.push(T),P===0?w+=T:P<p&&(w+=2*T)}for(let P=0;P<f.length;P++)f[P]=f[P]/w;d.envMap.value=t.texture,d.samples.value=p,d.weights.value=f,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:A}=this;d.dTheta.value=v,d.mipInt.value=A-i;const S=this._sizeLods[s],z=3*S*(s>A-as?s-A+as:0),L=4*(this._cubeSize-S);Nr(e,z,L,3*S,2*S),l.setRenderTarget(e),l.render(h,ca)}}function f0(n){const t=[],e=[],i=[];let s=n;const r=n-as+1+lu.length;for(let o=0;o<r;o++){const a=Math.pow(2,s);e.push(a);let l=1/a;o>n-as?l=lu[o-n+as-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,h=1+c,d=[u,u,h,u,h,h,u,u,h,h,u,h],m=6,v=6,_=3,p=2,f=1,w=new Float32Array(_*v*m),A=new Float32Array(p*v*m),S=new Float32Array(f*v*m);for(let L=0;L<m;L++){const P=L%3*2/3-1,F=L>2?0:-1,T=[P,F,0,P+2/3,F,0,P+2/3,F+1,0,P,F,0,P+2/3,F+1,0,P,F+1,0];w.set(T,_*v*L),A.set(d,p*v*L);const E=[L,L,L,L,L,L];S.set(E,f*v*L)}const z=new Rn;z.setAttribute("position",new Tn(w,_)),z.setAttribute("uv",new Tn(A,p)),z.setAttribute("faceIndex",new Tn(S,f)),t.push(z),s>as&&s--}return{lodPlanes:t,sizeLods:e,sigmas:i}}function fu(n,t,e){const i=new Ni(n,t,e);return i.texture.mapping=yo,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Nr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function d0(n,t,e){const i=new Float32Array(Ri),s=new B(0,1,0);return new pi({name:"SphericalGaussianBlur",defines:{n:Ri,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:s}},vertexShader:ql(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function du(){return new pi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:ql(),fragmentShader:`

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
		`,blending:ui,depthTest:!1,depthWrite:!1})}function pu(){return new pi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:ql(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:ui,depthTest:!1,depthWrite:!1})}function ql(){return`

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
	`}function p0(n){let t=new WeakMap,e=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Ha||l===Va,u=l===_s||l===gs;if(c||u){let h=t.get(a);const d=h!==void 0?h.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==d)return e===null&&(e=new hu(n)),h=c?e.fromEquirectangular(a,h):e.fromCubemap(a,h),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),h.texture;if(h!==void 0)return h.texture;{const m=a.image;return c&&m&&m.height>0||u&&m&&s(m)?(e===null&&(e=new hu(n)),h=c?e.fromEquirectangular(a):e.fromCubemap(a),h.texture.pmremVersion=a.pmremVersion,t.set(a,h),a.addEventListener("dispose",r),h.texture):null}}}return a}function s(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function r(a){const l=a.target;l.removeEventListener("dispose",r);const c=t.get(l);c!==void 0&&(t.delete(l),c.dispose())}function o(){t=new WeakMap,e!==null&&(e.dispose(),e=null)}return{get:i,dispose:o}}function m0(n){const t={};function e(i){if(t[i]!==void 0)return t[i];let s;switch(i){case"WEBGL_depth_texture":s=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":s=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":s=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":s=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:s=n.getExtension(i)}return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){const s=e(i);return s===null&&Os("THREE.WebGLRenderer: "+i+" extension not supported."),s}}}function _0(n,t,e,i){const s={},r=new WeakMap;function o(h){const d=h.target;d.index!==null&&t.remove(d.index);for(const v in d.attributes)t.remove(d.attributes[v]);for(const v in d.morphAttributes){const _=d.morphAttributes[v];for(let p=0,f=_.length;p<f;p++)t.remove(_[p])}d.removeEventListener("dispose",o),delete s[d.id];const m=r.get(d);m&&(t.remove(m),r.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,e.memory.geometries--}function a(h,d){return s[d.id]===!0||(d.addEventListener("dispose",o),s[d.id]=!0,e.memory.geometries++),d}function l(h){const d=h.attributes;for(const v in d)t.update(d[v],n.ARRAY_BUFFER);const m=h.morphAttributes;for(const v in m){const _=m[v];for(let p=0,f=_.length;p<f;p++)t.update(_[p],n.ARRAY_BUFFER)}}function c(h){const d=[],m=h.index,v=h.attributes.position;let _=0;if(m!==null){const w=m.array;_=m.version;for(let A=0,S=w.length;A<S;A+=3){const z=w[A+0],L=w[A+1],P=w[A+2];d.push(z,L,L,P,P,z)}}else if(v!==void 0){const w=v.array;_=v.version;for(let A=0,S=w.length/3-1;A<S;A+=3){const z=A+0,L=A+1,P=A+2;d.push(z,L,L,P,P,z)}}else return;const p=new(uf(d)?gf:_f)(d,1);p.version=_;const f=r.get(h);f&&t.remove(f),r.set(h,p)}function u(h){const d=r.get(h);if(d){const m=h.index;m!==null&&d.version<m.version&&c(h)}else c(h);return r.get(h)}return{get:a,update:l,getWireframeAttribute:u}}function g0(n,t,e){let i;function s(d){i=d}let r,o;function a(d){r=d.type,o=d.bytesPerElement}function l(d,m){n.drawElements(i,m,r,d*o),e.update(m,i,1)}function c(d,m,v){v!==0&&(n.drawElementsInstanced(i,m,r,d*o,v),e.update(m,i,v))}function u(d,m,v){if(v===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,m,0,r,d,0,v);let p=0;for(let f=0;f<v;f++)p+=m[f];e.update(p,i,1)}function h(d,m,v,_){if(v===0)return;const p=t.get("WEBGL_multi_draw");if(p===null)for(let f=0;f<d.length;f++)c(d[f]/o,m[f],_[f]);else{p.multiDrawElementsInstancedWEBGL(i,m,0,r,d,0,_,0,v);let f=0;for(let w=0;w<v;w++)f+=m[w]*_[w];e.update(f,i,1)}}this.setMode=s,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=u,this.renderMultiDrawInstances=h}function v0(n){const t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,o,a){switch(e.calls++,o){case n.TRIANGLES:e.triangles+=a*(r/3);break;case n.LINES:e.lines+=a*(r/2);break;case n.LINE_STRIP:e.lines+=a*(r-1);break;case n.LINE_LOOP:e.lines+=a*r;break;case n.POINTS:e.points+=a*r;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function x0(n,t,e){const i=new WeakMap,s=new de;function r(o,a,l){const c=o.morphTargetInfluences,u=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,h=u!==void 0?u.length:0;let d=i.get(a);if(d===void 0||d.count!==h){let E=function(){F.dispose(),i.delete(a),a.removeEventListener("dispose",E)};var m=E;d!==void 0&&d.texture.dispose();const v=a.morphAttributes.position!==void 0,_=a.morphAttributes.normal!==void 0,p=a.morphAttributes.color!==void 0,f=a.morphAttributes.position||[],w=a.morphAttributes.normal||[],A=a.morphAttributes.color||[];let S=0;v===!0&&(S=1),_===!0&&(S=2),p===!0&&(S=3);let z=a.attributes.position.count*S,L=1;z>t.maxTextureSize&&(L=Math.ceil(z/t.maxTextureSize),z=t.maxTextureSize);const P=new Float32Array(z*L*4*h),F=new ff(P,z,L,h);F.type=kn,F.needsUpdate=!0;const T=S*4;for(let D=0;D<h;D++){const Q=f[D],Y=w[D],it=A[D],rt=z*L*4*D;for(let Z=0;Z<Q.count;Z++){const J=Z*T;v===!0&&(s.fromBufferAttribute(Q,Z),P[rt+J+0]=s.x,P[rt+J+1]=s.y,P[rt+J+2]=s.z,P[rt+J+3]=0),_===!0&&(s.fromBufferAttribute(Y,Z),P[rt+J+4]=s.x,P[rt+J+5]=s.y,P[rt+J+6]=s.z,P[rt+J+7]=0),p===!0&&(s.fromBufferAttribute(it,Z),P[rt+J+8]=s.x,P[rt+J+9]=s.y,P[rt+J+10]=s.z,P[rt+J+11]=it.itemSize===4?s.w:1)}}d={count:h,texture:F,size:new Wt(z,L)},i.set(a,d),a.addEventListener("dispose",E)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",o.morphTexture,e);else{let v=0;for(let p=0;p<c.length;p++)v+=c[p];const _=a.morphTargetsRelative?1:1-v;l.getUniforms().setValue(n,"morphTargetBaseInfluence",_),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",d.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",d.size)}return{update:r}}function M0(n,t,e,i){let s=new WeakMap;function r(l){const c=i.render.frame,u=l.geometry,h=t.get(l,u);if(s.get(h)!==c&&(t.update(h),s.set(h,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),s.get(l)!==c&&(e.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&e.update(l.instanceColor,n.ARRAY_BUFFER),s.set(l,c))),l.isSkinnedMesh){const d=l.skeleton;s.get(d)!==c&&(d.update(),s.set(d,c))}return h}function o(){s=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),e.remove(c.instanceMatrix),c.instanceColor!==null&&e.remove(c.instanceColor)}return{update:r,dispose:o}}class yf extends Be{constructor(t,e,i,s,r,o,a,l,c,u=fs){if(u!==fs&&u!==xs)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===fs&&(i=Ui),i===void 0&&u===xs&&(i=vs),super(null,s,r,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:t,height:e},this.magFilter=a!==void 0?a:un,this.minFilter=l!==void 0?l:un,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.compareFunction=t.compareFunction,this}toJSON(t){const e=super.toJSON(t);return this.compareFunction!==null&&(e.compareFunction=this.compareFunction),e}}const Tf=new Be,mu=new yf(1,1),bf=new ff,Af=new o_,wf=new Mf,_u=[],gu=[],vu=new Float32Array(16),xu=new Float32Array(9),Mu=new Float32Array(4);function Ts(n,t,e){const i=n[0];if(i<=0||i>0)return n;const s=t*e;let r=_u[s];if(r===void 0&&(r=new Float32Array(s),_u[s]=r),t!==0){i.toArray(r,0);for(let o=1,a=0;o!==t;++o)a+=e,n[o].toArray(r,a)}return r}function ge(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function ve(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function wo(n,t){let e=gu[t];e===void 0&&(e=new Int32Array(t),gu[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function S0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function E0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2fv(this.addr,t),ve(e,t)}}function y0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(ge(e,t))return;n.uniform3fv(this.addr,t),ve(e,t)}}function T0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4fv(this.addr,t),ve(e,t)}}function b0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;Mu.set(i),n.uniformMatrix2fv(this.addr,!1,Mu),ve(e,i)}}function A0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;xu.set(i),n.uniformMatrix3fv(this.addr,!1,xu),ve(e,i)}}function w0(n,t){const e=this.cache,i=t.elements;if(i===void 0){if(ge(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),ve(e,t)}else{if(ge(e,i))return;vu.set(i),n.uniformMatrix4fv(this.addr,!1,vu),ve(e,i)}}function R0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function C0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2iv(this.addr,t),ve(e,t)}}function P0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3iv(this.addr,t),ve(e,t)}}function D0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4iv(this.addr,t),ve(e,t)}}function L0(n,t){const e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function I0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(ge(e,t))return;n.uniform2uiv(this.addr,t),ve(e,t)}}function U0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(ge(e,t))return;n.uniform3uiv(this.addr,t),ve(e,t)}}function N0(n,t){const e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(ge(e,t))return;n.uniform4uiv(this.addr,t),ve(e,t)}}function F0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(mu.compareFunction=cf,r=mu):r=Tf,e.setTexture2D(t||r,s)}function O0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||Af,s)}function B0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||wf,s)}function z0(n,t,e){const i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||bf,s)}function H0(n){switch(n){case 5126:return S0;case 35664:return E0;case 35665:return y0;case 35666:return T0;case 35674:return b0;case 35675:return A0;case 35676:return w0;case 5124:case 35670:return R0;case 35667:case 35671:return C0;case 35668:case 35672:return P0;case 35669:case 35673:return D0;case 5125:return L0;case 36294:return I0;case 36295:return U0;case 36296:return N0;case 35678:case 36198:case 36298:case 36306:case 35682:return F0;case 35679:case 36299:case 36307:return O0;case 35680:case 36300:case 36308:case 36293:return B0;case 36289:case 36303:case 36311:case 36292:return z0}}function V0(n,t){n.uniform1fv(this.addr,t)}function G0(n,t){const e=Ts(t,this.size,2);n.uniform2fv(this.addr,e)}function k0(n,t){const e=Ts(t,this.size,3);n.uniform3fv(this.addr,e)}function W0(n,t){const e=Ts(t,this.size,4);n.uniform4fv(this.addr,e)}function X0(n,t){const e=Ts(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function q0(n,t){const e=Ts(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function Y0(n,t){const e=Ts(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function j0(n,t){n.uniform1iv(this.addr,t)}function K0(n,t){n.uniform2iv(this.addr,t)}function $0(n,t){n.uniform3iv(this.addr,t)}function Z0(n,t){n.uniform4iv(this.addr,t)}function J0(n,t){n.uniform1uiv(this.addr,t)}function Q0(n,t){n.uniform2uiv(this.addr,t)}function tx(n,t){n.uniform3uiv(this.addr,t)}function ex(n,t){n.uniform4uiv(this.addr,t)}function nx(n,t,e){const i=this.cache,s=t.length,r=wo(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture2D(t[o]||Tf,r[o])}function ix(n,t,e){const i=this.cache,s=t.length,r=wo(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture3D(t[o]||Af,r[o])}function sx(n,t,e){const i=this.cache,s=t.length,r=wo(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTextureCube(t[o]||wf,r[o])}function rx(n,t,e){const i=this.cache,s=t.length,r=wo(e,s);ge(i,r)||(n.uniform1iv(this.addr,r),ve(i,r));for(let o=0;o!==s;++o)e.setTexture2DArray(t[o]||bf,r[o])}function ox(n){switch(n){case 5126:return V0;case 35664:return G0;case 35665:return k0;case 35666:return W0;case 35674:return X0;case 35675:return q0;case 35676:return Y0;case 5124:case 35670:return j0;case 35667:case 35671:return K0;case 35668:case 35672:return $0;case 35669:case 35673:return Z0;case 5125:return J0;case 36294:return Q0;case 36295:return tx;case 36296:return ex;case 35678:case 36198:case 36298:case 36306:case 35682:return nx;case 35679:case 36299:case 36307:return ix;case 35680:case 36300:case 36308:case 36293:return sx;case 36289:case 36303:case 36311:case 36292:return rx}}class ax{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=H0(e.type)}}class lx{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=ox(e.type)}}class cx{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){const s=this.seq;for(let r=0,o=s.length;r!==o;++r){const a=s[r];a.setValue(t,e[a.id],i)}}}const pa=/(\w+)(\])?(\[|\.)?/g;function Su(n,t){n.seq.push(t),n.map[t.id]=t}function ux(n,t,e){const i=n.name,s=i.length;for(pa.lastIndex=0;;){const r=pa.exec(i),o=pa.lastIndex;let a=r[1];const l=r[2]==="]",c=r[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===s){Su(e,c===void 0?new ax(a,n,t):new lx(a,n,t));break}else{let h=e.map[a];h===void 0&&(h=new cx(a),Su(e,h)),e=h}}}class Zr{constructor(t,e){this.seq=[],this.map={};const i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let s=0;s<i;++s){const r=t.getActiveUniform(e,s),o=t.getUniformLocation(e,r.name);ux(r,o,this)}}setValue(t,e,i,s){const r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){const s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,o=e.length;r!==o;++r){const a=e[r],l=i[a.id];l.needsUpdate!==!1&&a.setValue(t,l.value,s)}}static seqWithValue(t,e){const i=[];for(let s=0,r=t.length;s!==r;++s){const o=t[s];o.id in e&&i.push(o)}return i}}function Eu(n,t,e){const i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}const hx=37297;let fx=0;function dx(n,t){const e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let o=s;o<r;o++){const a=o+1;i.push(`${a===t?">":" "} ${a}: ${e[o]}`)}return i.join(`
`)}const yu=new kt;function px(n){Yt._getMatrix(yu,Yt.workingColorSpace,n);const t=`mat3( ${yu.elements.map(e=>e.toFixed(4))} )`;switch(Yt.getTransfer(n)){case To:return[t,"LinearTransferOETF"];case ne:return[t,"sRGBTransferOETF"];default:return console.warn("THREE.WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function Tu(n,t,e){const i=n.getShaderParameter(t,n.COMPILE_STATUS),s=n.getShaderInfoLog(t).trim();if(i&&s==="")return"";const r=/ERROR: 0:(\d+)/.exec(s);if(r){const o=parseInt(r[1]);return e.toUpperCase()+`

`+s+`

`+dx(n.getShaderSource(t),o)}else return s}function mx(n,t){const e=px(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function _x(n,t){let e;switch(t){case Lm:e="Linear";break;case Im:e="Reinhard";break;case Um:e="Cineon";break;case Nm:e="ACESFilmic";break;case Om:e="AgX";break;case Bm:e="Neutral";break;case Fm:e="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",t),e="Linear"}return"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}const Fr=new B;function gx(){Yt.getLuminanceCoefficients(Fr);const n=Fr.x.toFixed(4),t=Fr.y.toFixed(4),e=Fr.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function vx(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Bs).join(`
`)}function xx(n){const t=[];for(const e in n){const i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function Mx(n,t){const e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){const r=n.getActiveAttrib(t,s),o=r.name;let a=1;r.type===n.FLOAT_MAT2&&(a=2),r.type===n.FLOAT_MAT3&&(a=3),r.type===n.FLOAT_MAT4&&(a=4),e[o]={type:r.type,location:n.getAttribLocation(t,o),locationSize:a}}return e}function Bs(n){return n!==""}function bu(n,t){const e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Au(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}const Sx=/^[ \t]*#include +<([\w\d./]+)>/gm;function gl(n){return n.replace(Sx,yx)}const Ex=new Map;function yx(n,t){let e=Xt[t];if(e===void 0){const i=Ex.get(t);if(i!==void 0)e=Xt[i],console.warn('THREE.WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("Can not resolve #include <"+t+">")}return gl(e)}const Tx=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function wu(n){return n.replace(Tx,bx)}function bx(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Ru(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function Ax(n){let t="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===jh?t="SHADOWMAP_TYPE_PCF":n.shadowMapType===hm?t="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===On&&(t="SHADOWMAP_TYPE_VSM"),t}function wx(n){let t="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case _s:case gs:t="ENVMAP_TYPE_CUBE";break;case yo:t="ENVMAP_TYPE_CUBE_UV";break}return t}function Rx(n){let t="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case gs:t="ENVMAP_MODE_REFRACTION";break}return t}function Cx(n){let t="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case Kh:t="ENVMAP_BLENDING_MULTIPLY";break;case Pm:t="ENVMAP_BLENDING_MIX";break;case Dm:t="ENVMAP_BLENDING_ADD";break}return t}function Px(n){const t=n.envMapCubeUVHeight;if(t===null)return null;const e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),7*16)),texelHeight:i,maxMip:e}}function Dx(n,t,e,i){const s=n.getContext(),r=e.defines;let o=e.vertexShader,a=e.fragmentShader;const l=Ax(e),c=wx(e),u=Rx(e),h=Cx(e),d=Px(e),m=vx(e),v=xx(r),_=s.createProgram();let p,f,w=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Bs).join(`
`),p.length>0&&(p+=`
`),f=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v].filter(Bs).join(`
`),f.length>0&&(f+=`
`)):(p=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+u:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Bs).join(`
`),f=[Ru(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,v,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+u:"",e.envMap?"#define "+h:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor||e.batchingColor?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",e.reverseDepthBuffer?"#define USE_REVERSEDEPTHBUF":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==hi?"#define TONE_MAPPING":"",e.toneMapping!==hi?Xt.tonemapping_pars_fragment:"",e.toneMapping!==hi?_x("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",Xt.colorspace_pars_fragment,mx("linearToOutputTexel",e.outputColorSpace),gx(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(Bs).join(`
`)),o=gl(o),o=bu(o,e),o=Au(o,e),a=gl(a),a=bu(a,e),a=Au(a,e),o=wu(o),a=wu(a),e.isRawShaderMaterial!==!0&&(w=`#version 300 es
`,p=[m,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,f=["#define varying in",e.glslVersion===Vc?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Vc?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const A=w+p+o,S=w+f+a,z=Eu(s,s.VERTEX_SHADER,A),L=Eu(s,s.FRAGMENT_SHADER,S);s.attachShader(_,z),s.attachShader(_,L),e.index0AttributeName!==void 0?s.bindAttribLocation(_,0,e.index0AttributeName):e.morphTargets===!0&&s.bindAttribLocation(_,0,"position"),s.linkProgram(_);function P(D){if(n.debug.checkShaderErrors){const Q=s.getProgramInfoLog(_).trim(),Y=s.getShaderInfoLog(z).trim(),it=s.getShaderInfoLog(L).trim();let rt=!0,Z=!0;if(s.getProgramParameter(_,s.LINK_STATUS)===!1)if(rt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,_,z,L);else{const J=Tu(s,z,"vertex"),H=Tu(s,L,"fragment");console.error("THREE.WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(_,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+Q+`
`+J+`
`+H)}else Q!==""?console.warn("THREE.WebGLProgram: Program Info Log:",Q):(Y===""||it==="")&&(Z=!1);Z&&(D.diagnostics={runnable:rt,programLog:Q,vertexShader:{log:Y,prefix:p},fragmentShader:{log:it,prefix:f}})}s.deleteShader(z),s.deleteShader(L),F=new Zr(s,_),T=Mx(s,_)}let F;this.getUniforms=function(){return F===void 0&&P(this),F};let T;this.getAttributes=function(){return T===void 0&&P(this),T};let E=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return E===!1&&(E=s.getProgramParameter(_,hx)),E},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(_),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=fx++,this.cacheKey=t,this.usedTimes=1,this.program=_,this.vertexShader=z,this.fragmentShader=L,this}let Lx=0;class Ix{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t){const e=t.vertexShader,i=t.fragmentShader,s=this._getShaderStage(e),r=this._getShaderStage(i),o=this._getShaderCacheForMaterial(t);return o.has(s)===!1&&(o.add(s),s.usedTimes++),o.has(r)===!1&&(o.add(r),r.usedTimes++),this}remove(t){const e=this.materialCache.get(t);for(const i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderID(t){return this._getShaderStage(t.vertexShader).id}getFragmentShaderID(t){return this._getShaderStage(t.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){const e=this.materialCache;let i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){const e=this.shaderCache;let i=e.get(t);return i===void 0&&(i=new Ux(t),e.set(t,i)),i}}class Ux{constructor(t){this.id=Lx++,this.code=t,this.usedTimes=0}}function Nx(n,t,e,i,s,r,o){const a=new df,l=new Ix,c=new Set,u=[],h=s.logarithmicDepthBuffer,d=s.vertexTextures;let m=s.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function _(T){return c.add(T),T===0?"uv":`uv${T}`}function p(T,E,D,Q,Y){const it=Q.fog,rt=Y.geometry,Z=T.isMeshStandardMaterial?Q.environment:null,J=(T.isMeshStandardMaterial?e:t).get(T.envMap||Z),H=J&&J.mapping===yo?J.image.height:null,ft=v[T.type];T.precision!==null&&(m=s.getMaxPrecision(T.precision),m!==T.precision&&console.warn("THREE.WebGLProgram.getParameters:",T.precision,"not supported, using",m,"instead."));const Mt=rt.morphAttributes.position||rt.morphAttributes.normal||rt.morphAttributes.color,yt=Mt!==void 0?Mt.length:0;let Dt=0;rt.morphAttributes.position!==void 0&&(Dt=1),rt.morphAttributes.normal!==void 0&&(Dt=2),rt.morphAttributes.color!==void 0&&(Dt=3);let Kt,tt,lt,Et;if(ft){const ee=vn[ft];Kt=ee.vertexShader,tt=ee.fragmentShader}else Kt=T.vertexShader,tt=T.fragmentShader,l.update(T),lt=l.getVertexShaderID(T),Et=l.getFragmentShaderID(T);const pt=n.getRenderTarget(),Ct=n.state.buffers.depth.getReversed(),Ut=Y.isInstancedMesh===!0,Bt=Y.isBatchedMesh===!0,ue=!!T.map,b=!!T.matcap,C=!!J,y=!!T.aoMap,et=!!T.lightMap,X=!!T.bumpMap,q=!!T.normalMap,K=!!T.displacementMap,st=!!T.emissiveMap,j=!!T.metalnessMap,x=!!T.roughnessMap,g=T.anisotropy>0,R=T.clearcoat>0,O=T.dispersion>0,G=T.iridescence>0,V=T.sheen>0,ht=T.transmission>0,ot=g&&!!T.anisotropyMap,ct=R&&!!T.clearcoatMap,Pt=R&&!!T.clearcoatNormalMap,at=R&&!!T.clearcoatRoughnessMap,_t=G&&!!T.iridescenceMap,Rt=G&&!!T.iridescenceThicknessMap,Lt=V&&!!T.sheenColorMap,dt=V&&!!T.sheenRoughnessMap,Nt=!!T.specularMap,zt=!!T.specularColorMap,te=!!T.specularIntensityMap,I=ht&&!!T.transmissionMap,gt=ht&&!!T.thicknessMap,$=!!T.gradientMap,nt=!!T.alphaMap,St=T.alphaTest>0,vt=!!T.alphaHash,Vt=!!T.extensions;let fe=hi;T.toneMapped&&(pt===null||pt.isXRRenderTarget===!0)&&(fe=n.toneMapping);const Ee={shaderID:ft,shaderType:T.type,shaderName:T.name,vertexShader:Kt,fragmentShader:tt,defines:T.defines,customVertexShaderID:lt,customFragmentShaderID:Et,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:m,batching:Bt,batchingColor:Bt&&Y._colorsTexture!==null,instancing:Ut,instancingColor:Ut&&Y.instanceColor!==null,instancingMorph:Ut&&Y.morphTexture!==null,supportsVertexTextures:d,outputColorSpace:pt===null?n.outputColorSpace:pt.isXRRenderTarget===!0?pt.texture.colorSpace:Ss,alphaToCoverage:!!T.alphaToCoverage,map:ue,matcap:b,envMap:C,envMapMode:C&&J.mapping,envMapCubeUVHeight:H,aoMap:y,lightMap:et,bumpMap:X,normalMap:q,displacementMap:d&&K,emissiveMap:st,normalMapObjectSpace:q&&T.normalMapType===Gm,normalMapTangentSpace:q&&T.normalMapType===lf,metalnessMap:j,roughnessMap:x,anisotropy:g,anisotropyMap:ot,clearcoat:R,clearcoatMap:ct,clearcoatNormalMap:Pt,clearcoatRoughnessMap:at,dispersion:O,iridescence:G,iridescenceMap:_t,iridescenceThicknessMap:Rt,sheen:V,sheenColorMap:Lt,sheenRoughnessMap:dt,specularMap:Nt,specularColorMap:zt,specularIntensityMap:te,transmission:ht,transmissionMap:I,thicknessMap:gt,gradientMap:$,opaque:T.transparent===!1&&T.blending===hs&&T.alphaToCoverage===!1,alphaMap:nt,alphaTest:St,alphaHash:vt,combine:T.combine,mapUv:ue&&_(T.map.channel),aoMapUv:y&&_(T.aoMap.channel),lightMapUv:et&&_(T.lightMap.channel),bumpMapUv:X&&_(T.bumpMap.channel),normalMapUv:q&&_(T.normalMap.channel),displacementMapUv:K&&_(T.displacementMap.channel),emissiveMapUv:st&&_(T.emissiveMap.channel),metalnessMapUv:j&&_(T.metalnessMap.channel),roughnessMapUv:x&&_(T.roughnessMap.channel),anisotropyMapUv:ot&&_(T.anisotropyMap.channel),clearcoatMapUv:ct&&_(T.clearcoatMap.channel),clearcoatNormalMapUv:Pt&&_(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:at&&_(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_t&&_(T.iridescenceMap.channel),iridescenceThicknessMapUv:Rt&&_(T.iridescenceThicknessMap.channel),sheenColorMapUv:Lt&&_(T.sheenColorMap.channel),sheenRoughnessMapUv:dt&&_(T.sheenRoughnessMap.channel),specularMapUv:Nt&&_(T.specularMap.channel),specularColorMapUv:zt&&_(T.specularColorMap.channel),specularIntensityMapUv:te&&_(T.specularIntensityMap.channel),transmissionMapUv:I&&_(T.transmissionMap.channel),thicknessMapUv:gt&&_(T.thicknessMap.channel),alphaMapUv:nt&&_(T.alphaMap.channel),vertexTangents:!!rt.attributes.tangent&&(q||g),vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!rt.attributes.color&&rt.attributes.color.itemSize===4,pointsUvs:Y.isPoints===!0&&!!rt.attributes.uv&&(ue||nt),fog:!!it,useFog:T.fog===!0,fogExp2:!!it&&it.isFogExp2,flatShading:T.flatShading===!0,sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:h,reverseDepthBuffer:Ct,skinning:Y.isSkinnedMesh===!0,morphTargets:rt.morphAttributes.position!==void 0,morphNormals:rt.morphAttributes.normal!==void 0,morphColors:rt.morphAttributes.color!==void 0,morphTargetsCount:yt,morphTextureStride:Dt,numDirLights:E.directional.length,numPointLights:E.point.length,numSpotLights:E.spot.length,numSpotLightMaps:E.spotLightMap.length,numRectAreaLights:E.rectArea.length,numHemiLights:E.hemi.length,numDirLightShadows:E.directionalShadowMap.length,numPointLightShadows:E.pointShadowMap.length,numSpotLightShadows:E.spotShadowMap.length,numSpotLightShadowsWithMaps:E.numSpotLightShadowsWithMaps,numLightProbes:E.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:T.dithering,shadowMapEnabled:n.shadowMap.enabled&&D.length>0,shadowMapType:n.shadowMap.type,toneMapping:fe,decodeVideoTexture:ue&&T.map.isVideoTexture===!0&&Yt.getTransfer(T.map.colorSpace)===ne,decodeVideoTextureEmissive:st&&T.emissiveMap.isVideoTexture===!0&&Yt.getTransfer(T.emissiveMap.colorSpace)===ne,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Gn,flipSided:T.side===Oe,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:Vt&&T.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Vt&&T.extensions.multiDraw===!0||Bt)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ee.vertexUv1s=c.has(1),Ee.vertexUv2s=c.has(2),Ee.vertexUv3s=c.has(3),c.clear(),Ee}function f(T){const E=[];if(T.shaderID?E.push(T.shaderID):(E.push(T.customVertexShaderID),E.push(T.customFragmentShaderID)),T.defines!==void 0)for(const D in T.defines)E.push(D),E.push(T.defines[D]);return T.isRawShaderMaterial===!1&&(w(E,T),A(E,T),E.push(n.outputColorSpace)),E.push(T.customProgramCacheKey),E.join()}function w(T,E){T.push(E.precision),T.push(E.outputColorSpace),T.push(E.envMapMode),T.push(E.envMapCubeUVHeight),T.push(E.mapUv),T.push(E.alphaMapUv),T.push(E.lightMapUv),T.push(E.aoMapUv),T.push(E.bumpMapUv),T.push(E.normalMapUv),T.push(E.displacementMapUv),T.push(E.emissiveMapUv),T.push(E.metalnessMapUv),T.push(E.roughnessMapUv),T.push(E.anisotropyMapUv),T.push(E.clearcoatMapUv),T.push(E.clearcoatNormalMapUv),T.push(E.clearcoatRoughnessMapUv),T.push(E.iridescenceMapUv),T.push(E.iridescenceThicknessMapUv),T.push(E.sheenColorMapUv),T.push(E.sheenRoughnessMapUv),T.push(E.specularMapUv),T.push(E.specularColorMapUv),T.push(E.specularIntensityMapUv),T.push(E.transmissionMapUv),T.push(E.thicknessMapUv),T.push(E.combine),T.push(E.fogExp2),T.push(E.sizeAttenuation),T.push(E.morphTargetsCount),T.push(E.morphAttributeCount),T.push(E.numDirLights),T.push(E.numPointLights),T.push(E.numSpotLights),T.push(E.numSpotLightMaps),T.push(E.numHemiLights),T.push(E.numRectAreaLights),T.push(E.numDirLightShadows),T.push(E.numPointLightShadows),T.push(E.numSpotLightShadows),T.push(E.numSpotLightShadowsWithMaps),T.push(E.numLightProbes),T.push(E.shadowMapType),T.push(E.toneMapping),T.push(E.numClippingPlanes),T.push(E.numClipIntersection),T.push(E.depthPacking)}function A(T,E){a.disableAll(),E.supportsVertexTextures&&a.enable(0),E.instancing&&a.enable(1),E.instancingColor&&a.enable(2),E.instancingMorph&&a.enable(3),E.matcap&&a.enable(4),E.envMap&&a.enable(5),E.normalMapObjectSpace&&a.enable(6),E.normalMapTangentSpace&&a.enable(7),E.clearcoat&&a.enable(8),E.iridescence&&a.enable(9),E.alphaTest&&a.enable(10),E.vertexColors&&a.enable(11),E.vertexAlphas&&a.enable(12),E.vertexUv1s&&a.enable(13),E.vertexUv2s&&a.enable(14),E.vertexUv3s&&a.enable(15),E.vertexTangents&&a.enable(16),E.anisotropy&&a.enable(17),E.alphaHash&&a.enable(18),E.batching&&a.enable(19),E.dispersion&&a.enable(20),E.batchingColor&&a.enable(21),T.push(a.mask),a.disableAll(),E.fog&&a.enable(0),E.useFog&&a.enable(1),E.flatShading&&a.enable(2),E.logarithmicDepthBuffer&&a.enable(3),E.reverseDepthBuffer&&a.enable(4),E.skinning&&a.enable(5),E.morphTargets&&a.enable(6),E.morphNormals&&a.enable(7),E.morphColors&&a.enable(8),E.premultipliedAlpha&&a.enable(9),E.shadowMapEnabled&&a.enable(10),E.doubleSided&&a.enable(11),E.flipSided&&a.enable(12),E.useDepthPacking&&a.enable(13),E.dithering&&a.enable(14),E.transmission&&a.enable(15),E.sheen&&a.enable(16),E.opaque&&a.enable(17),E.pointsUvs&&a.enable(18),E.decodeVideoTexture&&a.enable(19),E.decodeVideoTextureEmissive&&a.enable(20),E.alphaToCoverage&&a.enable(21),T.push(a.mask)}function S(T){const E=v[T.type];let D;if(E){const Q=vn[E];D=v_.clone(Q.uniforms)}else D=T.uniforms;return D}function z(T,E){let D;for(let Q=0,Y=u.length;Q<Y;Q++){const it=u[Q];if(it.cacheKey===E){D=it,++D.usedTimes;break}}return D===void 0&&(D=new Dx(n,E,T,r),u.push(D)),D}function L(T){if(--T.usedTimes===0){const E=u.indexOf(T);u[E]=u[u.length-1],u.pop(),T.destroy()}}function P(T){l.remove(T)}function F(){l.dispose()}return{getParameters:p,getProgramCacheKey:f,getUniforms:S,acquireProgram:z,releaseProgram:L,releaseShaderCache:P,programs:u,dispose:F}}function Fx(){let n=new WeakMap;function t(o){return n.has(o)}function e(o){let a=n.get(o);return a===void 0&&(a={},n.set(o,a)),a}function i(o){n.delete(o)}function s(o,a,l){n.get(o)[a]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Ox(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.z!==t.z?n.z-t.z:n.id-t.id}function Cu(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Pu(){const n=[];let t=0;const e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function o(h,d,m,v,_,p){let f=n[t];return f===void 0?(f={id:h.id,object:h,geometry:d,material:m,groupOrder:v,renderOrder:h.renderOrder,z:_,group:p},n[t]=f):(f.id=h.id,f.object=h,f.geometry=d,f.material=m,f.groupOrder=v,f.renderOrder=h.renderOrder,f.z=_,f.group=p),t++,f}function a(h,d,m,v,_,p){const f=o(h,d,m,v,_,p);m.transmission>0?i.push(f):m.transparent===!0?s.push(f):e.push(f)}function l(h,d,m,v,_,p){const f=o(h,d,m,v,_,p);m.transmission>0?i.unshift(f):m.transparent===!0?s.unshift(f):e.unshift(f)}function c(h,d){e.length>1&&e.sort(h||Ox),i.length>1&&i.sort(d||Cu),s.length>1&&s.sort(d||Cu)}function u(){for(let h=t,d=n.length;h<d;h++){const m=n[h];if(m.id===null)break;m.id=null,m.object=null,m.geometry=null,m.material=null,m.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:a,unshift:l,finish:u,sort:c}}function Bx(){let n=new WeakMap;function t(i,s){const r=n.get(i);let o;return r===void 0?(o=new Pu,n.set(i,[o])):s>=r.length?(o=new Pu,r.push(o)):o=r[s],o}function e(){n=new WeakMap}return{get:t,dispose:e}}function zx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={direction:new B,color:new qt};break;case"SpotLight":e={position:new B,direction:new B,color:new qt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new B,color:new qt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new B,skyColor:new qt,groundColor:new qt};break;case"RectAreaLight":e={color:new qt,position:new B,halfWidth:new B,halfHeight:new B};break}return n[t.id]=e,e}}}function Hx(){const n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Wt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}let Vx=0;function Gx(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function kx(n){const t=new zx,e=Hx(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new B);const s=new B,r=new he,o=new he;function a(c){let u=0,h=0,d=0;for(let T=0;T<9;T++)i.probe[T].set(0,0,0);let m=0,v=0,_=0,p=0,f=0,w=0,A=0,S=0,z=0,L=0,P=0;c.sort(Gx);for(let T=0,E=c.length;T<E;T++){const D=c[T],Q=D.color,Y=D.intensity,it=D.distance,rt=D.shadow&&D.shadow.map?D.shadow.map.texture:null;if(D.isAmbientLight)u+=Q.r*Y,h+=Q.g*Y,d+=Q.b*Y;else if(D.isLightProbe){for(let Z=0;Z<9;Z++)i.probe[Z].addScaledVector(D.sh.coefficients[Z],Y);P++}else if(D.isDirectionalLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),D.castShadow){const J=D.shadow,H=e.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.directionalShadow[m]=H,i.directionalShadowMap[m]=rt,i.directionalShadowMatrix[m]=D.shadow.matrix,w++}i.directional[m]=Z,m++}else if(D.isSpotLight){const Z=t.get(D);Z.position.setFromMatrixPosition(D.matrixWorld),Z.color.copy(Q).multiplyScalar(Y),Z.distance=it,Z.coneCos=Math.cos(D.angle),Z.penumbraCos=Math.cos(D.angle*(1-D.penumbra)),Z.decay=D.decay,i.spot[_]=Z;const J=D.shadow;if(D.map&&(i.spotLightMap[z]=D.map,z++,J.updateMatrices(D),D.castShadow&&L++),i.spotLightMatrix[_]=J.matrix,D.castShadow){const H=e.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,i.spotShadow[_]=H,i.spotShadowMap[_]=rt,S++}_++}else if(D.isRectAreaLight){const Z=t.get(D);Z.color.copy(Q).multiplyScalar(Y),Z.halfWidth.set(D.width*.5,0,0),Z.halfHeight.set(0,D.height*.5,0),i.rectArea[p]=Z,p++}else if(D.isPointLight){const Z=t.get(D);if(Z.color.copy(D.color).multiplyScalar(D.intensity),Z.distance=D.distance,Z.decay=D.decay,D.castShadow){const J=D.shadow,H=e.get(D);H.shadowIntensity=J.intensity,H.shadowBias=J.bias,H.shadowNormalBias=J.normalBias,H.shadowRadius=J.radius,H.shadowMapSize=J.mapSize,H.shadowCameraNear=J.camera.near,H.shadowCameraFar=J.camera.far,i.pointShadow[v]=H,i.pointShadowMap[v]=rt,i.pointShadowMatrix[v]=D.shadow.matrix,A++}i.point[v]=Z,v++}else if(D.isHemisphereLight){const Z=t.get(D);Z.skyColor.copy(D.color).multiplyScalar(Y),Z.groundColor.copy(D.groundColor).multiplyScalar(Y),i.hemi[f]=Z,f++}}p>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=mt.LTC_FLOAT_1,i.rectAreaLTC2=mt.LTC_FLOAT_2):(i.rectAreaLTC1=mt.LTC_HALF_1,i.rectAreaLTC2=mt.LTC_HALF_2)),i.ambient[0]=u,i.ambient[1]=h,i.ambient[2]=d;const F=i.hash;(F.directionalLength!==m||F.pointLength!==v||F.spotLength!==_||F.rectAreaLength!==p||F.hemiLength!==f||F.numDirectionalShadows!==w||F.numPointShadows!==A||F.numSpotShadows!==S||F.numSpotMaps!==z||F.numLightProbes!==P)&&(i.directional.length=m,i.spot.length=_,i.rectArea.length=p,i.point.length=v,i.hemi.length=f,i.directionalShadow.length=w,i.directionalShadowMap.length=w,i.pointShadow.length=A,i.pointShadowMap.length=A,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=w,i.pointShadowMatrix.length=A,i.spotLightMatrix.length=S+z-L,i.spotLightMap.length=z,i.numSpotLightShadowsWithMaps=L,i.numLightProbes=P,F.directionalLength=m,F.pointLength=v,F.spotLength=_,F.rectAreaLength=p,F.hemiLength=f,F.numDirectionalShadows=w,F.numPointShadows=A,F.numSpotShadows=S,F.numSpotMaps=z,F.numLightProbes=P,i.version=Vx++)}function l(c,u){let h=0,d=0,m=0,v=0,_=0;const p=u.matrixWorldInverse;for(let f=0,w=c.length;f<w;f++){const A=c[f];if(A.isDirectionalLight){const S=i.directional[h];S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),h++}else if(A.isSpotLight){const S=i.spot[m];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),S.direction.setFromMatrixPosition(A.matrixWorld),s.setFromMatrixPosition(A.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(p),m++}else if(A.isRectAreaLight){const S=i.rectArea[v];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),o.identity(),r.copy(A.matrixWorld),r.premultiply(p),o.extractRotation(r),S.halfWidth.set(A.width*.5,0,0),S.halfHeight.set(0,A.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),v++}else if(A.isPointLight){const S=i.point[d];S.position.setFromMatrixPosition(A.matrixWorld),S.position.applyMatrix4(p),d++}else if(A.isHemisphereLight){const S=i.hemi[_];S.direction.setFromMatrixPosition(A.matrixWorld),S.direction.transformDirection(p),_++}}}return{setup:a,setupView:l,state:i}}function Du(n){const t=new kx(n),e=[],i=[];function s(u){c.camera=u,e.length=0,i.length=0}function r(u){e.push(u)}function o(u){i.push(u)}function a(){t.setup(e)}function l(u){t.setupView(e,u)}const c={lightsArray:e,shadowsArray:i,camera:null,lights:t,transmissionRenderTarget:{}};return{init:s,state:c,setupLights:a,setupLightsView:l,pushLight:r,pushShadow:o}}function Wx(n){let t=new WeakMap;function e(s,r=0){const o=t.get(s);let a;return o===void 0?(a=new Du(n),t.set(s,[a])):r>=o.length?(a=new Du(n),o.push(a)):a=o[r],a}function i(){t=new WeakMap}return{get:e,dispose:i}}class Xx extends Es{static get type(){return"MeshDepthMaterial"}constructor(t){super(),this.isMeshDepthMaterial=!0,this.depthPacking=Hm,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}}class qx extends Es{static get type(){return"MeshDistanceMaterial"}constructor(t){super(),this.isMeshDistanceMaterial=!0,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}}const Yx=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,jx=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function Kx(n,t,e){let i=new Xl;const s=new Wt,r=new Wt,o=new de,a=new Xx({depthPacking:Vm}),l=new qx,c={},u=e.maxTextureSize,h={[di]:Oe,[Oe]:di,[Gn]:Gn},d=new pi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Wt},radius:{value:4}},vertexShader:Yx,fragmentShader:jx}),m=d.clone();m.defines.HORIZONTAL_PASS=1;const v=new Rn;v.setAttribute("position",new Tn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new Sn(v,d),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=jh;let f=this.type;this.render=function(L,P,F){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||L.length===0)return;const T=n.getRenderTarget(),E=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),Q=n.state;Q.setBlending(ui),Q.buffers.color.setClear(1,1,1,1),Q.buffers.depth.setTest(!0),Q.setScissorTest(!1);const Y=f!==On&&this.type===On,it=f===On&&this.type!==On;for(let rt=0,Z=L.length;rt<Z;rt++){const J=L[rt],H=J.shadow;if(H===void 0){console.warn("THREE.WebGLShadowMap:",J,"has no shadow.");continue}if(H.autoUpdate===!1&&H.needsUpdate===!1)continue;s.copy(H.mapSize);const ft=H.getFrameExtents();if(s.multiply(ft),r.copy(H.mapSize),(s.x>u||s.y>u)&&(s.x>u&&(r.x=Math.floor(u/ft.x),s.x=r.x*ft.x,H.mapSize.x=r.x),s.y>u&&(r.y=Math.floor(u/ft.y),s.y=r.y*ft.y,H.mapSize.y=r.y)),H.map===null||Y===!0||it===!0){const yt=this.type!==On?{minFilter:un,magFilter:un}:{};H.map!==null&&H.map.dispose(),H.map=new Ni(s.x,s.y,yt),H.map.texture.name=J.name+".shadowMap",H.camera.updateProjectionMatrix()}n.setRenderTarget(H.map),n.clear();const Mt=H.getViewportCount();for(let yt=0;yt<Mt;yt++){const Dt=H.getViewport(yt);o.set(r.x*Dt.x,r.y*Dt.y,r.x*Dt.z,r.y*Dt.w),Q.viewport(o),H.updateMatrices(J,yt),i=H.getFrustum(),S(P,F,H.camera,J,this.type)}H.isPointLightShadow!==!0&&this.type===On&&w(H,F),H.needsUpdate=!1}f=this.type,p.needsUpdate=!1,n.setRenderTarget(T,E,D)};function w(L,P){const F=t.update(_);d.defines.VSM_SAMPLES!==L.blurSamples&&(d.defines.VSM_SAMPLES=L.blurSamples,m.defines.VSM_SAMPLES=L.blurSamples,d.needsUpdate=!0,m.needsUpdate=!0),L.mapPass===null&&(L.mapPass=new Ni(s.x,s.y)),d.uniforms.shadow_pass.value=L.map.texture,d.uniforms.resolution.value=L.mapSize,d.uniforms.radius.value=L.radius,n.setRenderTarget(L.mapPass),n.clear(),n.renderBufferDirect(P,null,F,d,_,null),m.uniforms.shadow_pass.value=L.mapPass.texture,m.uniforms.resolution.value=L.mapSize,m.uniforms.radius.value=L.radius,n.setRenderTarget(L.map),n.clear(),n.renderBufferDirect(P,null,F,m,_,null)}function A(L,P,F,T){let E=null;const D=F.isPointLight===!0?L.customDistanceMaterial:L.customDepthMaterial;if(D!==void 0)E=D;else if(E=F.isPointLight===!0?l:a,n.localClippingEnabled&&P.clipShadows===!0&&Array.isArray(P.clippingPlanes)&&P.clippingPlanes.length!==0||P.displacementMap&&P.displacementScale!==0||P.alphaMap&&P.alphaTest>0||P.map&&P.alphaTest>0){const Q=E.uuid,Y=P.uuid;let it=c[Q];it===void 0&&(it={},c[Q]=it);let rt=it[Y];rt===void 0&&(rt=E.clone(),it[Y]=rt,P.addEventListener("dispose",z)),E=rt}if(E.visible=P.visible,E.wireframe=P.wireframe,T===On?E.side=P.shadowSide!==null?P.shadowSide:P.side:E.side=P.shadowSide!==null?P.shadowSide:h[P.side],E.alphaMap=P.alphaMap,E.alphaTest=P.alphaTest,E.map=P.map,E.clipShadows=P.clipShadows,E.clippingPlanes=P.clippingPlanes,E.clipIntersection=P.clipIntersection,E.displacementMap=P.displacementMap,E.displacementScale=P.displacementScale,E.displacementBias=P.displacementBias,E.wireframeLinewidth=P.wireframeLinewidth,E.linewidth=P.linewidth,F.isPointLight===!0&&E.isMeshDistanceMaterial===!0){const Q=n.properties.get(E);Q.light=F}return E}function S(L,P,F,T,E){if(L.visible===!1)return;if(L.layers.test(P.layers)&&(L.isMesh||L.isLine||L.isPoints)&&(L.castShadow||L.receiveShadow&&E===On)&&(!L.frustumCulled||i.intersectsObject(L))){L.modelViewMatrix.multiplyMatrices(F.matrixWorldInverse,L.matrixWorld);const Y=t.update(L),it=L.material;if(Array.isArray(it)){const rt=Y.groups;for(let Z=0,J=rt.length;Z<J;Z++){const H=rt[Z],ft=it[H.materialIndex];if(ft&&ft.visible){const Mt=A(L,ft,T,E);L.onBeforeShadow(n,L,P,F,Y,Mt,H),n.renderBufferDirect(F,null,Y,Mt,L,H),L.onAfterShadow(n,L,P,F,Y,Mt,H)}}}else if(it.visible){const rt=A(L,it,T,E);L.onBeforeShadow(n,L,P,F,Y,rt,null),n.renderBufferDirect(F,null,Y,rt,L,null),L.onAfterShadow(n,L,P,F,Y,rt,null)}}const Q=L.children;for(let Y=0,it=Q.length;Y<it;Y++)S(Q[Y],P,F,T,E)}function z(L){L.target.removeEventListener("dispose",z);for(const F in c){const T=c[F],E=L.target.uuid;E in T&&(T[E].dispose(),delete T[E])}}}const $x={[Ia]:Ua,[Na]:Ba,[Fa]:za,[ms]:Oa,[Ua]:Ia,[Ba]:Na,[za]:Fa,[Oa]:ms};function Zx(n,t){function e(){let I=!1;const gt=new de;let $=null;const nt=new de(0,0,0,0);return{setMask:function(St){$!==St&&!I&&(n.colorMask(St,St,St,St),$=St)},setLocked:function(St){I=St},setClear:function(St,vt,Vt,fe,Ee){Ee===!0&&(St*=fe,vt*=fe,Vt*=fe),gt.set(St,vt,Vt,fe),nt.equals(gt)===!1&&(n.clearColor(St,vt,Vt,fe),nt.copy(gt))},reset:function(){I=!1,$=null,nt.set(-1,0,0,0)}}}function i(){let I=!1,gt=!1,$=null,nt=null,St=null;return{setReversed:function(vt){if(gt!==vt){const Vt=t.get("EXT_clip_control");gt?Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.ZERO_TO_ONE_EXT):Vt.clipControlEXT(Vt.LOWER_LEFT_EXT,Vt.NEGATIVE_ONE_TO_ONE_EXT);const fe=St;St=null,this.setClear(fe)}gt=vt},getReversed:function(){return gt},setTest:function(vt){vt?pt(n.DEPTH_TEST):Ct(n.DEPTH_TEST)},setMask:function(vt){$!==vt&&!I&&(n.depthMask(vt),$=vt)},setFunc:function(vt){if(gt&&(vt=$x[vt]),nt!==vt){switch(vt){case Ia:n.depthFunc(n.NEVER);break;case Ua:n.depthFunc(n.ALWAYS);break;case Na:n.depthFunc(n.LESS);break;case ms:n.depthFunc(n.LEQUAL);break;case Fa:n.depthFunc(n.EQUAL);break;case Oa:n.depthFunc(n.GEQUAL);break;case Ba:n.depthFunc(n.GREATER);break;case za:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}nt=vt}},setLocked:function(vt){I=vt},setClear:function(vt){St!==vt&&(gt&&(vt=1-vt),n.clearDepth(vt),St=vt)},reset:function(){I=!1,$=null,nt=null,St=null,gt=!1}}}function s(){let I=!1,gt=null,$=null,nt=null,St=null,vt=null,Vt=null,fe=null,Ee=null;return{setTest:function(ee){I||(ee?pt(n.STENCIL_TEST):Ct(n.STENCIL_TEST))},setMask:function(ee){gt!==ee&&!I&&(n.stencilMask(ee),gt=ee)},setFunc:function(ee,Qe,Cn){($!==ee||nt!==Qe||St!==Cn)&&(n.stencilFunc(ee,Qe,Cn),$=ee,nt=Qe,St=Cn)},setOp:function(ee,Qe,Cn){(vt!==ee||Vt!==Qe||fe!==Cn)&&(n.stencilOp(ee,Qe,Cn),vt=ee,Vt=Qe,fe=Cn)},setLocked:function(ee){I=ee},setClear:function(ee){Ee!==ee&&(n.clearStencil(ee),Ee=ee)},reset:function(){I=!1,gt=null,$=null,nt=null,St=null,vt=null,Vt=null,fe=null,Ee=null}}}const r=new e,o=new i,a=new s,l=new WeakMap,c=new WeakMap;let u={},h={},d=new WeakMap,m=[],v=null,_=!1,p=null,f=null,w=null,A=null,S=null,z=null,L=null,P=new qt(0,0,0),F=0,T=!1,E=null,D=null,Q=null,Y=null,it=null;const rt=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Z=!1,J=0;const H=n.getParameter(n.VERSION);H.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(H)[1]),Z=J>=1):H.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),Z=J>=2);let ft=null,Mt={};const yt=n.getParameter(n.SCISSOR_BOX),Dt=n.getParameter(n.VIEWPORT),Kt=new de().fromArray(yt),tt=new de().fromArray(Dt);function lt(I,gt,$,nt){const St=new Uint8Array(4),vt=n.createTexture();n.bindTexture(I,vt),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let Vt=0;Vt<$;Vt++)I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY?n.texImage3D(gt,0,n.RGBA,1,1,nt,0,n.RGBA,n.UNSIGNED_BYTE,St):n.texImage2D(gt+Vt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,St);return vt}const Et={};Et[n.TEXTURE_2D]=lt(n.TEXTURE_2D,n.TEXTURE_2D,1),Et[n.TEXTURE_CUBE_MAP]=lt(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),Et[n.TEXTURE_2D_ARRAY]=lt(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),Et[n.TEXTURE_3D]=lt(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),o.setClear(1),a.setClear(0),pt(n.DEPTH_TEST),o.setFunc(ms),X(!1),q(Nc),pt(n.CULL_FACE),y(ui);function pt(I){u[I]!==!0&&(n.enable(I),u[I]=!0)}function Ct(I){u[I]!==!1&&(n.disable(I),u[I]=!1)}function Ut(I,gt){return h[I]!==gt?(n.bindFramebuffer(I,gt),h[I]=gt,I===n.DRAW_FRAMEBUFFER&&(h[n.FRAMEBUFFER]=gt),I===n.FRAMEBUFFER&&(h[n.DRAW_FRAMEBUFFER]=gt),!0):!1}function Bt(I,gt){let $=m,nt=!1;if(I){$=d.get(gt),$===void 0&&($=[],d.set(gt,$));const St=I.textures;if($.length!==St.length||$[0]!==n.COLOR_ATTACHMENT0){for(let vt=0,Vt=St.length;vt<Vt;vt++)$[vt]=n.COLOR_ATTACHMENT0+vt;$.length=St.length,nt=!0}}else $[0]!==n.BACK&&($[0]=n.BACK,nt=!0);nt&&n.drawBuffers($)}function ue(I){return v!==I?(n.useProgram(I),v=I,!0):!1}const b={[wi]:n.FUNC_ADD,[dm]:n.FUNC_SUBTRACT,[pm]:n.FUNC_REVERSE_SUBTRACT};b[mm]=n.MIN,b[_m]=n.MAX;const C={[gm]:n.ZERO,[vm]:n.ONE,[xm]:n.SRC_COLOR,[Da]:n.SRC_ALPHA,[bm]:n.SRC_ALPHA_SATURATE,[ym]:n.DST_COLOR,[Sm]:n.DST_ALPHA,[Mm]:n.ONE_MINUS_SRC_COLOR,[La]:n.ONE_MINUS_SRC_ALPHA,[Tm]:n.ONE_MINUS_DST_COLOR,[Em]:n.ONE_MINUS_DST_ALPHA,[Am]:n.CONSTANT_COLOR,[wm]:n.ONE_MINUS_CONSTANT_COLOR,[Rm]:n.CONSTANT_ALPHA,[Cm]:n.ONE_MINUS_CONSTANT_ALPHA};function y(I,gt,$,nt,St,vt,Vt,fe,Ee,ee){if(I===ui){_===!0&&(Ct(n.BLEND),_=!1);return}if(_===!1&&(pt(n.BLEND),_=!0),I!==fm){if(I!==p||ee!==T){if((f!==wi||S!==wi)&&(n.blendEquation(n.FUNC_ADD),f=wi,S=wi),ee)switch(I){case hs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.ONE,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case hs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Fc:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Oc:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Bc:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}w=null,A=null,z=null,L=null,P.set(0,0,0),F=0,p=I,T=ee}return}St=St||gt,vt=vt||$,Vt=Vt||nt,(gt!==f||St!==S)&&(n.blendEquationSeparate(b[gt],b[St]),f=gt,S=St),($!==w||nt!==A||vt!==z||Vt!==L)&&(n.blendFuncSeparate(C[$],C[nt],C[vt],C[Vt]),w=$,A=nt,z=vt,L=Vt),(fe.equals(P)===!1||Ee!==F)&&(n.blendColor(fe.r,fe.g,fe.b,Ee),P.copy(fe),F=Ee),p=I,T=!1}function et(I,gt){I.side===Gn?Ct(n.CULL_FACE):pt(n.CULL_FACE);let $=I.side===Oe;gt&&($=!$),X($),I.blending===hs&&I.transparent===!1?y(ui):y(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),r.setMask(I.colorWrite);const nt=I.stencilWrite;a.setTest(nt),nt&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),st(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?pt(n.SAMPLE_ALPHA_TO_COVERAGE):Ct(n.SAMPLE_ALPHA_TO_COVERAGE)}function X(I){E!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),E=I)}function q(I){I!==cm?(pt(n.CULL_FACE),I!==D&&(I===Nc?n.cullFace(n.BACK):I===um?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Ct(n.CULL_FACE),D=I}function K(I){I!==Q&&(Z&&n.lineWidth(I),Q=I)}function st(I,gt,$){I?(pt(n.POLYGON_OFFSET_FILL),(Y!==gt||it!==$)&&(n.polygonOffset(gt,$),Y=gt,it=$)):Ct(n.POLYGON_OFFSET_FILL)}function j(I){I?pt(n.SCISSOR_TEST):Ct(n.SCISSOR_TEST)}function x(I){I===void 0&&(I=n.TEXTURE0+rt-1),ft!==I&&(n.activeTexture(I),ft=I)}function g(I,gt,$){$===void 0&&(ft===null?$=n.TEXTURE0+rt-1:$=ft);let nt=Mt[$];nt===void 0&&(nt={type:void 0,texture:void 0},Mt[$]=nt),(nt.type!==I||nt.texture!==gt)&&(ft!==$&&(n.activeTexture($),ft=$),n.bindTexture(I,gt||Et[I]),nt.type=I,nt.texture=gt)}function R(){const I=Mt[ft];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function O(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function G(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function V(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ht(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ot(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ct(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Pt(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function at(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function _t(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Rt(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Lt(I){Kt.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),Kt.copy(I))}function dt(I){tt.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),tt.copy(I))}function Nt(I,gt){let $=c.get(gt);$===void 0&&($=new WeakMap,c.set(gt,$));let nt=$.get(I);nt===void 0&&(nt=n.getUniformBlockIndex(gt,I.name),$.set(I,nt))}function zt(I,gt){const nt=c.get(gt).get(I);l.get(gt)!==nt&&(n.uniformBlockBinding(gt,nt,I.__bindingPointIndex),l.set(gt,nt))}function te(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),o.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),u={},ft=null,Mt={},h={},d=new WeakMap,m=[],v=null,_=!1,p=null,f=null,w=null,A=null,S=null,z=null,L=null,P=new qt(0,0,0),F=0,T=!1,E=null,D=null,Q=null,Y=null,it=null,Kt.set(0,0,n.canvas.width,n.canvas.height),tt.set(0,0,n.canvas.width,n.canvas.height),r.reset(),o.reset(),a.reset()}return{buffers:{color:r,depth:o,stencil:a},enable:pt,disable:Ct,bindFramebuffer:Ut,drawBuffers:Bt,useProgram:ue,setBlending:y,setMaterial:et,setFlipSided:X,setCullFace:q,setLineWidth:K,setPolygonOffset:st,setScissorTest:j,activeTexture:x,bindTexture:g,unbindTexture:R,compressedTexImage2D:O,compressedTexImage3D:G,texImage2D:_t,texImage3D:Rt,updateUBOMapping:Nt,uniformBlockBinding:zt,texStorage2D:Pt,texStorage3D:at,texSubImage2D:V,texSubImage3D:ht,compressedTexSubImage2D:ot,compressedTexSubImage3D:ct,scissor:Lt,viewport:dt,reset:te}}function Lu(n,t,e,i){const s=Jx(i);switch(e){case tf:return n*t;case nf:return n*t;case sf:return n*t*2;case rf:return n*t/s.components*s.byteLength;case Vl:return n*t/s.components*s.byteLength;case of:return n*t*2/s.components*s.byteLength;case Gl:return n*t*2/s.components*s.byteLength;case ef:return n*t*3/s.components*s.byteLength;case an:return n*t*4/s.components*s.byteLength;case kl:return n*t*4/s.components*s.byteLength;case qr:case Yr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case jr:case Kr:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Xa:case Ya:return Math.max(n,16)*Math.max(t,8)/4;case Wa:case qa:return Math.max(n,8)*Math.max(t,8)/2;case ja:case Ka:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case $a:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Za:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Ja:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Qa:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case tl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case el:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case nl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case il:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case sl:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case rl:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ol:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case al:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case ll:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case cl:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case ul:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case $r:case hl:case fl:return Math.ceil(n/4)*Math.ceil(t/4)*16;case af:case dl:return Math.ceil(n/4)*Math.ceil(t/4)*8;case pl:case ml:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function Jx(n){switch(n){case Kn:case Zh:return{byteLength:1,components:1};case er:case Jh:case rr:return{byteLength:2,components:1};case zl:case Hl:return{byteLength:2,components:4};case Ui:case Bl:case kn:return{byteLength:4,components:1};case Qh:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${n}.`)}function Qx(n,t,e,i,s,r,o){const a=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new Wt,u=new WeakMap;let h;const d=new WeakMap;let m=!1;try{m=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(x,g){return m?new OffscreenCanvas(x,g):ao("canvas")}function _(x,g,R){let O=1;const G=j(x);if((G.width>R||G.height>R)&&(O=R/Math.max(G.width,G.height)),O<1)if(typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&x instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&x instanceof ImageBitmap||typeof VideoFrame<"u"&&x instanceof VideoFrame){const V=Math.floor(O*G.width),ht=Math.floor(O*G.height);h===void 0&&(h=v(V,ht));const ot=g?v(V,ht):h;return ot.width=V,ot.height=ht,ot.getContext("2d").drawImage(x,0,0,V,ht),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+G.width+"x"+G.height+") to ("+V+"x"+ht+")."),ot}else return"data"in x&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+G.width+"x"+G.height+")."),x;return x}function p(x){return x.generateMipmaps}function f(x){n.generateMipmap(x)}function w(x){return x.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:x.isWebGL3DRenderTarget?n.TEXTURE_3D:x.isWebGLArrayRenderTarget||x.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function A(x,g,R,O,G=!1){if(x!==null){if(n[x]!==void 0)return n[x];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+x+"'")}let V=g;if(g===n.RED&&(R===n.FLOAT&&(V=n.R32F),R===n.HALF_FLOAT&&(V=n.R16F),R===n.UNSIGNED_BYTE&&(V=n.R8)),g===n.RED_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.R8UI),R===n.UNSIGNED_SHORT&&(V=n.R16UI),R===n.UNSIGNED_INT&&(V=n.R32UI),R===n.BYTE&&(V=n.R8I),R===n.SHORT&&(V=n.R16I),R===n.INT&&(V=n.R32I)),g===n.RG&&(R===n.FLOAT&&(V=n.RG32F),R===n.HALF_FLOAT&&(V=n.RG16F),R===n.UNSIGNED_BYTE&&(V=n.RG8)),g===n.RG_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RG8UI),R===n.UNSIGNED_SHORT&&(V=n.RG16UI),R===n.UNSIGNED_INT&&(V=n.RG32UI),R===n.BYTE&&(V=n.RG8I),R===n.SHORT&&(V=n.RG16I),R===n.INT&&(V=n.RG32I)),g===n.RGB_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RGB8UI),R===n.UNSIGNED_SHORT&&(V=n.RGB16UI),R===n.UNSIGNED_INT&&(V=n.RGB32UI),R===n.BYTE&&(V=n.RGB8I),R===n.SHORT&&(V=n.RGB16I),R===n.INT&&(V=n.RGB32I)),g===n.RGBA_INTEGER&&(R===n.UNSIGNED_BYTE&&(V=n.RGBA8UI),R===n.UNSIGNED_SHORT&&(V=n.RGBA16UI),R===n.UNSIGNED_INT&&(V=n.RGBA32UI),R===n.BYTE&&(V=n.RGBA8I),R===n.SHORT&&(V=n.RGBA16I),R===n.INT&&(V=n.RGBA32I)),g===n.RGB&&R===n.UNSIGNED_INT_5_9_9_9_REV&&(V=n.RGB9_E5),g===n.RGBA){const ht=G?To:Yt.getTransfer(O);R===n.FLOAT&&(V=n.RGBA32F),R===n.HALF_FLOAT&&(V=n.RGBA16F),R===n.UNSIGNED_BYTE&&(V=ht===ne?n.SRGB8_ALPHA8:n.RGBA8),R===n.UNSIGNED_SHORT_4_4_4_4&&(V=n.RGBA4),R===n.UNSIGNED_SHORT_5_5_5_1&&(V=n.RGB5_A1)}return(V===n.R16F||V===n.R32F||V===n.RG16F||V===n.RG32F||V===n.RGBA16F||V===n.RGBA32F)&&t.get("EXT_color_buffer_float"),V}function S(x,g){let R;return x?g===null||g===Ui||g===vs?R=n.DEPTH24_STENCIL8:g===kn?R=n.DEPTH32F_STENCIL8:g===er&&(R=n.DEPTH24_STENCIL8,console.warn("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):g===null||g===Ui||g===vs?R=n.DEPTH_COMPONENT24:g===kn?R=n.DEPTH_COMPONENT32F:g===er&&(R=n.DEPTH_COMPONENT16),R}function z(x,g){return p(x)===!0||x.isFramebufferTexture&&x.minFilter!==un&&x.minFilter!==Mn?Math.log2(Math.max(g.width,g.height))+1:x.mipmaps!==void 0&&x.mipmaps.length>0?x.mipmaps.length:x.isCompressedTexture&&Array.isArray(x.image)?g.mipmaps.length:1}function L(x){const g=x.target;g.removeEventListener("dispose",L),F(g),g.isVideoTexture&&u.delete(g)}function P(x){const g=x.target;g.removeEventListener("dispose",P),E(g)}function F(x){const g=i.get(x);if(g.__webglInit===void 0)return;const R=x.source,O=d.get(R);if(O){const G=O[g.__cacheKey];G.usedTimes--,G.usedTimes===0&&T(x),Object.keys(O).length===0&&d.delete(R)}i.remove(x)}function T(x){const g=i.get(x);n.deleteTexture(g.__webglTexture);const R=x.source,O=d.get(R);delete O[g.__cacheKey],o.memory.textures--}function E(x){const g=i.get(x);if(x.depthTexture&&(x.depthTexture.dispose(),i.remove(x.depthTexture)),x.isWebGLCubeRenderTarget)for(let O=0;O<6;O++){if(Array.isArray(g.__webglFramebuffer[O]))for(let G=0;G<g.__webglFramebuffer[O].length;G++)n.deleteFramebuffer(g.__webglFramebuffer[O][G]);else n.deleteFramebuffer(g.__webglFramebuffer[O]);g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer[O])}else{if(Array.isArray(g.__webglFramebuffer))for(let O=0;O<g.__webglFramebuffer.length;O++)n.deleteFramebuffer(g.__webglFramebuffer[O]);else n.deleteFramebuffer(g.__webglFramebuffer);if(g.__webglDepthbuffer&&n.deleteRenderbuffer(g.__webglDepthbuffer),g.__webglMultisampledFramebuffer&&n.deleteFramebuffer(g.__webglMultisampledFramebuffer),g.__webglColorRenderbuffer)for(let O=0;O<g.__webglColorRenderbuffer.length;O++)g.__webglColorRenderbuffer[O]&&n.deleteRenderbuffer(g.__webglColorRenderbuffer[O]);g.__webglDepthRenderbuffer&&n.deleteRenderbuffer(g.__webglDepthRenderbuffer)}const R=x.textures;for(let O=0,G=R.length;O<G;O++){const V=i.get(R[O]);V.__webglTexture&&(n.deleteTexture(V.__webglTexture),o.memory.textures--),i.remove(R[O])}i.remove(x)}let D=0;function Q(){D=0}function Y(){const x=D;return x>=s.maxTextures&&console.warn("THREE.WebGLTextures: Trying to use "+x+" texture units while this GPU supports only "+s.maxTextures),D+=1,x}function it(x){const g=[];return g.push(x.wrapS),g.push(x.wrapT),g.push(x.wrapR||0),g.push(x.magFilter),g.push(x.minFilter),g.push(x.anisotropy),g.push(x.internalFormat),g.push(x.format),g.push(x.type),g.push(x.generateMipmaps),g.push(x.premultiplyAlpha),g.push(x.flipY),g.push(x.unpackAlignment),g.push(x.colorSpace),g.join()}function rt(x,g){const R=i.get(x);if(x.isVideoTexture&&K(x),x.isRenderTargetTexture===!1&&x.version>0&&R.__version!==x.version){const O=x.image;if(O===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(O.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{tt(R,x,g);return}}e.bindTexture(n.TEXTURE_2D,R.__webglTexture,n.TEXTURE0+g)}function Z(x,g){const R=i.get(x);if(x.version>0&&R.__version!==x.version){tt(R,x,g);return}e.bindTexture(n.TEXTURE_2D_ARRAY,R.__webglTexture,n.TEXTURE0+g)}function J(x,g){const R=i.get(x);if(x.version>0&&R.__version!==x.version){tt(R,x,g);return}e.bindTexture(n.TEXTURE_3D,R.__webglTexture,n.TEXTURE0+g)}function H(x,g){const R=i.get(x);if(x.version>0&&R.__version!==x.version){lt(R,x,g);return}e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+g)}const ft={[Ga]:n.REPEAT,[Pi]:n.CLAMP_TO_EDGE,[ka]:n.MIRRORED_REPEAT},Mt={[un]:n.NEAREST,[zm]:n.NEAREST_MIPMAP_NEAREST,[_r]:n.NEAREST_MIPMAP_LINEAR,[Mn]:n.LINEAR,[Vo]:n.LINEAR_MIPMAP_NEAREST,[Di]:n.LINEAR_MIPMAP_LINEAR},yt={[km]:n.NEVER,[Km]:n.ALWAYS,[Wm]:n.LESS,[cf]:n.LEQUAL,[Xm]:n.EQUAL,[jm]:n.GEQUAL,[qm]:n.GREATER,[Ym]:n.NOTEQUAL};function Dt(x,g){if(g.type===kn&&t.has("OES_texture_float_linear")===!1&&(g.magFilter===Mn||g.magFilter===Vo||g.magFilter===_r||g.magFilter===Di||g.minFilter===Mn||g.minFilter===Vo||g.minFilter===_r||g.minFilter===Di)&&console.warn("THREE.WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(x,n.TEXTURE_WRAP_S,ft[g.wrapS]),n.texParameteri(x,n.TEXTURE_WRAP_T,ft[g.wrapT]),(x===n.TEXTURE_3D||x===n.TEXTURE_2D_ARRAY)&&n.texParameteri(x,n.TEXTURE_WRAP_R,ft[g.wrapR]),n.texParameteri(x,n.TEXTURE_MAG_FILTER,Mt[g.magFilter]),n.texParameteri(x,n.TEXTURE_MIN_FILTER,Mt[g.minFilter]),g.compareFunction&&(n.texParameteri(x,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(x,n.TEXTURE_COMPARE_FUNC,yt[g.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(g.magFilter===un||g.minFilter!==_r&&g.minFilter!==Di||g.type===kn&&t.has("OES_texture_float_linear")===!1)return;if(g.anisotropy>1||i.get(g).__currentAnisotropy){const R=t.get("EXT_texture_filter_anisotropic");n.texParameterf(x,R.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(g.anisotropy,s.getMaxAnisotropy())),i.get(g).__currentAnisotropy=g.anisotropy}}}function Kt(x,g){let R=!1;x.__webglInit===void 0&&(x.__webglInit=!0,g.addEventListener("dispose",L));const O=g.source;let G=d.get(O);G===void 0&&(G={},d.set(O,G));const V=it(g);if(V!==x.__cacheKey){G[V]===void 0&&(G[V]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,R=!0),G[V].usedTimes++;const ht=G[x.__cacheKey];ht!==void 0&&(G[x.__cacheKey].usedTimes--,ht.usedTimes===0&&T(g)),x.__cacheKey=V,x.__webglTexture=G[V].texture}return R}function tt(x,g,R){let O=n.TEXTURE_2D;(g.isDataArrayTexture||g.isCompressedArrayTexture)&&(O=n.TEXTURE_2D_ARRAY),g.isData3DTexture&&(O=n.TEXTURE_3D);const G=Kt(x,g),V=g.source;e.bindTexture(O,x.__webglTexture,n.TEXTURE0+R);const ht=i.get(V);if(V.version!==ht.__version||G===!0){e.activeTexture(n.TEXTURE0+R);const ot=Yt.getPrimaries(Yt.workingColorSpace),ct=g.colorSpace===ai?null:Yt.getPrimaries(g.colorSpace),Pt=g.colorSpace===ai||ot===ct?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Pt);let at=_(g.image,!1,s.maxTextureSize);at=st(g,at);const _t=r.convert(g.format,g.colorSpace),Rt=r.convert(g.type);let Lt=A(g.internalFormat,_t,Rt,g.colorSpace,g.isVideoTexture);Dt(O,g);let dt;const Nt=g.mipmaps,zt=g.isVideoTexture!==!0,te=ht.__version===void 0||G===!0,I=V.dataReady,gt=z(g,at);if(g.isDepthTexture)Lt=S(g.format===xs,g.type),te&&(zt?e.texStorage2D(n.TEXTURE_2D,1,Lt,at.width,at.height):e.texImage2D(n.TEXTURE_2D,0,Lt,at.width,at.height,0,_t,Rt,null));else if(g.isDataTexture)if(Nt.length>0){zt&&te&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,Nt[0].width,Nt[0].height);for(let $=0,nt=Nt.length;$<nt;$++)dt=Nt[$],zt?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,dt.width,dt.height,_t,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,$,Lt,dt.width,dt.height,0,_t,Rt,dt.data);g.generateMipmaps=!1}else zt?(te&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,at.width,at.height),I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,at.width,at.height,_t,Rt,at.data)):e.texImage2D(n.TEXTURE_2D,0,Lt,at.width,at.height,0,_t,Rt,at.data);else if(g.isCompressedTexture)if(g.isCompressedArrayTexture){zt&&te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,Nt[0].width,Nt[0].height,at.depth);for(let $=0,nt=Nt.length;$<nt;$++)if(dt=Nt[$],g.format!==an)if(_t!==null)if(zt){if(I)if(g.layerUpdates.size>0){const St=Lu(dt.width,dt.height,g.format,g.type);for(const vt of g.layerUpdates){const Vt=dt.data.subarray(vt*St/dt.data.BYTES_PER_ELEMENT,(vt+1)*St/dt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,vt,dt.width,dt.height,1,_t,Vt)}g.clearLayerUpdates()}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,at.depth,_t,dt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,$,Lt,dt.width,dt.height,at.depth,0,dt.data,0,0);else console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else zt?I&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,$,0,0,0,dt.width,dt.height,at.depth,_t,Rt,dt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,$,Lt,dt.width,dt.height,at.depth,0,_t,Rt,dt.data)}else{zt&&te&&e.texStorage2D(n.TEXTURE_2D,gt,Lt,Nt[0].width,Nt[0].height);for(let $=0,nt=Nt.length;$<nt;$++)dt=Nt[$],g.format!==an?_t!==null?zt?I&&e.compressedTexSubImage2D(n.TEXTURE_2D,$,0,0,dt.width,dt.height,_t,dt.data):e.compressedTexImage2D(n.TEXTURE_2D,$,Lt,dt.width,dt.height,0,dt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):zt?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,dt.width,dt.height,_t,Rt,dt.data):e.texImage2D(n.TEXTURE_2D,$,Lt,dt.width,dt.height,0,_t,Rt,dt.data)}else if(g.isDataArrayTexture)if(zt){if(te&&e.texStorage3D(n.TEXTURE_2D_ARRAY,gt,Lt,at.width,at.height,at.depth),I)if(g.layerUpdates.size>0){const $=Lu(at.width,at.height,g.format,g.type);for(const nt of g.layerUpdates){const St=at.data.subarray(nt*$/at.data.BYTES_PER_ELEMENT,(nt+1)*$/at.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,nt,at.width,at.height,1,_t,Rt,St)}g.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,at.width,at.height,at.depth,_t,Rt,at.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,Lt,at.width,at.height,at.depth,0,_t,Rt,at.data);else if(g.isData3DTexture)zt?(te&&e.texStorage3D(n.TEXTURE_3D,gt,Lt,at.width,at.height,at.depth),I&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,at.width,at.height,at.depth,_t,Rt,at.data)):e.texImage3D(n.TEXTURE_3D,0,Lt,at.width,at.height,at.depth,0,_t,Rt,at.data);else if(g.isFramebufferTexture){if(te)if(zt)e.texStorage2D(n.TEXTURE_2D,gt,Lt,at.width,at.height);else{let $=at.width,nt=at.height;for(let St=0;St<gt;St++)e.texImage2D(n.TEXTURE_2D,St,Lt,$,nt,0,_t,Rt,null),$>>=1,nt>>=1}}else if(Nt.length>0){if(zt&&te){const $=j(Nt[0]);e.texStorage2D(n.TEXTURE_2D,gt,Lt,$.width,$.height)}for(let $=0,nt=Nt.length;$<nt;$++)dt=Nt[$],zt?I&&e.texSubImage2D(n.TEXTURE_2D,$,0,0,_t,Rt,dt):e.texImage2D(n.TEXTURE_2D,$,Lt,_t,Rt,dt);g.generateMipmaps=!1}else if(zt){if(te){const $=j(at);e.texStorage2D(n.TEXTURE_2D,gt,Lt,$.width,$.height)}I&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,_t,Rt,at)}else e.texImage2D(n.TEXTURE_2D,0,Lt,_t,Rt,at);p(g)&&f(O),ht.__version=V.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function lt(x,g,R){if(g.image.length!==6)return;const O=Kt(x,g),G=g.source;e.bindTexture(n.TEXTURE_CUBE_MAP,x.__webglTexture,n.TEXTURE0+R);const V=i.get(G);if(G.version!==V.__version||O===!0){e.activeTexture(n.TEXTURE0+R);const ht=Yt.getPrimaries(Yt.workingColorSpace),ot=g.colorSpace===ai?null:Yt.getPrimaries(g.colorSpace),ct=g.colorSpace===ai||ht===ot?n.NONE:n.BROWSER_DEFAULT_WEBGL;n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,g.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,g.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,g.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,ct);const Pt=g.isCompressedTexture||g.image[0].isCompressedTexture,at=g.image[0]&&g.image[0].isDataTexture,_t=[];for(let nt=0;nt<6;nt++)!Pt&&!at?_t[nt]=_(g.image[nt],!0,s.maxCubemapSize):_t[nt]=at?g.image[nt].image:g.image[nt],_t[nt]=st(g,_t[nt]);const Rt=_t[0],Lt=r.convert(g.format,g.colorSpace),dt=r.convert(g.type),Nt=A(g.internalFormat,Lt,dt,g.colorSpace),zt=g.isVideoTexture!==!0,te=V.__version===void 0||O===!0,I=G.dataReady;let gt=z(g,Rt);Dt(n.TEXTURE_CUBE_MAP,g);let $;if(Pt){zt&&te&&e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Nt,Rt.width,Rt.height);for(let nt=0;nt<6;nt++){$=_t[nt].mipmaps;for(let St=0;St<$.length;St++){const vt=$[St];g.format!==an?Lt!==null?zt?I&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,0,0,vt.width,vt.height,Lt,vt.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,Nt,vt.width,vt.height,0,vt.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,0,0,vt.width,vt.height,Lt,dt,vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St,Nt,vt.width,vt.height,0,Lt,dt,vt.data)}}}else{if($=g.mipmaps,zt&&te){$.length>0&&gt++;const nt=j(_t[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,gt,Nt,nt.width,nt.height)}for(let nt=0;nt<6;nt++)if(at){zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,_t[nt].width,_t[nt].height,Lt,dt,_t[nt].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Nt,_t[nt].width,_t[nt].height,0,Lt,dt,_t[nt].data);for(let St=0;St<$.length;St++){const Vt=$[St].image[nt].image;zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,0,0,Vt.width,Vt.height,Lt,dt,Vt.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,Nt,Vt.width,Vt.height,0,Lt,dt,Vt.data)}}else{zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,0,0,Lt,dt,_t[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,0,Nt,Lt,dt,_t[nt]);for(let St=0;St<$.length;St++){const vt=$[St];zt?I&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,0,0,Lt,dt,vt.image[nt]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+nt,St+1,Nt,Lt,dt,vt.image[nt])}}}p(g)&&f(n.TEXTURE_CUBE_MAP),V.__version=G.version,g.onUpdate&&g.onUpdate(g)}x.__version=g.version}function Et(x,g,R,O,G,V){const ht=r.convert(R.format,R.colorSpace),ot=r.convert(R.type),ct=A(R.internalFormat,ht,ot,R.colorSpace),Pt=i.get(g),at=i.get(R);if(at.__renderTarget=g,!Pt.__hasExternalTextures){const _t=Math.max(1,g.width>>V),Rt=Math.max(1,g.height>>V);G===n.TEXTURE_3D||G===n.TEXTURE_2D_ARRAY?e.texImage3D(G,V,ct,_t,Rt,g.depth,0,ht,ot,null):e.texImage2D(G,V,ct,_t,Rt,0,ht,ot,null)}e.bindFramebuffer(n.FRAMEBUFFER,x),q(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,O,G,at.__webglTexture,0,X(g)):(G===n.TEXTURE_2D||G>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&G<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,O,G,at.__webglTexture,V),e.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(x,g,R){if(n.bindRenderbuffer(n.RENDERBUFFER,x),g.depthBuffer){const O=g.depthTexture,G=O&&O.isDepthTexture?O.type:null,V=S(g.stencilBuffer,G),ht=g.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ot=X(g);q(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ot,V,g.width,g.height):R?n.renderbufferStorageMultisample(n.RENDERBUFFER,ot,V,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,V,g.width,g.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,ht,n.RENDERBUFFER,x)}else{const O=g.textures;for(let G=0;G<O.length;G++){const V=O[G],ht=r.convert(V.format,V.colorSpace),ot=r.convert(V.type),ct=A(V.internalFormat,ht,ot,V.colorSpace),Pt=X(g);R&&q(g)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,Pt,ct,g.width,g.height):q(g)?a.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Pt,ct,g.width,g.height):n.renderbufferStorage(n.RENDERBUFFER,ct,g.width,g.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function Ct(x,g){if(g&&g.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(e.bindFramebuffer(n.FRAMEBUFFER,x),!(g.depthTexture&&g.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const O=i.get(g.depthTexture);O.__renderTarget=g,(!O.__webglTexture||g.depthTexture.image.width!==g.width||g.depthTexture.image.height!==g.height)&&(g.depthTexture.image.width=g.width,g.depthTexture.image.height=g.height,g.depthTexture.needsUpdate=!0),rt(g.depthTexture,0);const G=O.__webglTexture,V=X(g);if(g.depthTexture.format===fs)q(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,G,0);else if(g.depthTexture.format===xs)q(g)?a.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0,V):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,G,0);else throw new Error("Unknown depthTexture format")}function Ut(x){const g=i.get(x),R=x.isWebGLCubeRenderTarget===!0;if(g.__boundDepthTexture!==x.depthTexture){const O=x.depthTexture;if(g.__depthDisposeCallback&&g.__depthDisposeCallback(),O){const G=()=>{delete g.__boundDepthTexture,delete g.__depthDisposeCallback,O.removeEventListener("dispose",G)};O.addEventListener("dispose",G),g.__depthDisposeCallback=G}g.__boundDepthTexture=O}if(x.depthTexture&&!g.__autoAllocateDepthBuffer){if(R)throw new Error("target.depthTexture not supported in Cube render targets");Ct(g.__webglFramebuffer,x)}else if(R){g.__webglDepthbuffer=[];for(let O=0;O<6;O++)if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer[O]),g.__webglDepthbuffer[O]===void 0)g.__webglDepthbuffer[O]=n.createRenderbuffer(),pt(g.__webglDepthbuffer[O],x,!1);else{const G=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,V=g.__webglDepthbuffer[O];n.bindRenderbuffer(n.RENDERBUFFER,V),n.framebufferRenderbuffer(n.FRAMEBUFFER,G,n.RENDERBUFFER,V)}}else if(e.bindFramebuffer(n.FRAMEBUFFER,g.__webglFramebuffer),g.__webglDepthbuffer===void 0)g.__webglDepthbuffer=n.createRenderbuffer(),pt(g.__webglDepthbuffer,x,!1);else{const O=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,G=g.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,G),n.framebufferRenderbuffer(n.FRAMEBUFFER,O,n.RENDERBUFFER,G)}e.bindFramebuffer(n.FRAMEBUFFER,null)}function Bt(x,g,R){const O=i.get(x);g!==void 0&&Et(O.__webglFramebuffer,x,x.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),R!==void 0&&Ut(x)}function ue(x){const g=x.texture,R=i.get(x),O=i.get(g);x.addEventListener("dispose",P);const G=x.textures,V=x.isWebGLCubeRenderTarget===!0,ht=G.length>1;if(ht||(O.__webglTexture===void 0&&(O.__webglTexture=n.createTexture()),O.__version=g.version,o.memory.textures++),V){R.__webglFramebuffer=[];for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer[ot]=[];for(let ct=0;ct<g.mipmaps.length;ct++)R.__webglFramebuffer[ot][ct]=n.createFramebuffer()}else R.__webglFramebuffer[ot]=n.createFramebuffer()}else{if(g.mipmaps&&g.mipmaps.length>0){R.__webglFramebuffer=[];for(let ot=0;ot<g.mipmaps.length;ot++)R.__webglFramebuffer[ot]=n.createFramebuffer()}else R.__webglFramebuffer=n.createFramebuffer();if(ht)for(let ot=0,ct=G.length;ot<ct;ot++){const Pt=i.get(G[ot]);Pt.__webglTexture===void 0&&(Pt.__webglTexture=n.createTexture(),o.memory.textures++)}if(x.samples>0&&q(x)===!1){R.__webglMultisampledFramebuffer=n.createFramebuffer(),R.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,R.__webglMultisampledFramebuffer);for(let ot=0;ot<G.length;ot++){const ct=G[ot];R.__webglColorRenderbuffer[ot]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,R.__webglColorRenderbuffer[ot]);const Pt=r.convert(ct.format,ct.colorSpace),at=r.convert(ct.type),_t=A(ct.internalFormat,Pt,at,ct.colorSpace,x.isXRRenderTarget===!0),Rt=X(x);n.renderbufferStorageMultisample(n.RENDERBUFFER,Rt,_t,x.width,x.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ot,n.RENDERBUFFER,R.__webglColorRenderbuffer[ot])}n.bindRenderbuffer(n.RENDERBUFFER,null),x.depthBuffer&&(R.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(R.__webglDepthRenderbuffer,x,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(V){e.bindTexture(n.TEXTURE_CUBE_MAP,O.__webglTexture),Dt(n.TEXTURE_CUBE_MAP,g);for(let ot=0;ot<6;ot++)if(g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)Et(R.__webglFramebuffer[ot][ct],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,ct);else Et(R.__webglFramebuffer[ot],x,g,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ot,0);p(g)&&f(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(ht){for(let ot=0,ct=G.length;ot<ct;ot++){const Pt=G[ot],at=i.get(Pt);e.bindTexture(n.TEXTURE_2D,at.__webglTexture),Dt(n.TEXTURE_2D,Pt),Et(R.__webglFramebuffer,x,Pt,n.COLOR_ATTACHMENT0+ot,n.TEXTURE_2D,0),p(Pt)&&f(n.TEXTURE_2D)}e.unbindTexture()}else{let ot=n.TEXTURE_2D;if((x.isWebGL3DRenderTarget||x.isWebGLArrayRenderTarget)&&(ot=x.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(ot,O.__webglTexture),Dt(ot,g),g.mipmaps&&g.mipmaps.length>0)for(let ct=0;ct<g.mipmaps.length;ct++)Et(R.__webglFramebuffer[ct],x,g,n.COLOR_ATTACHMENT0,ot,ct);else Et(R.__webglFramebuffer,x,g,n.COLOR_ATTACHMENT0,ot,0);p(g)&&f(ot),e.unbindTexture()}x.depthBuffer&&Ut(x)}function b(x){const g=x.textures;for(let R=0,O=g.length;R<O;R++){const G=g[R];if(p(G)){const V=w(x),ht=i.get(G).__webglTexture;e.bindTexture(V,ht),f(V),e.unbindTexture()}}}const C=[],y=[];function et(x){if(x.samples>0){if(q(x)===!1){const g=x.textures,R=x.width,O=x.height;let G=n.COLOR_BUFFER_BIT;const V=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ht=i.get(x),ot=g.length>1;if(ot)for(let ct=0;ct<g.length;ct++)e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,ht.__webglMultisampledFramebuffer),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglFramebuffer);for(let ct=0;ct<g.length;ct++){if(x.resolveDepthBuffer&&(x.depthBuffer&&(G|=n.DEPTH_BUFFER_BIT),x.stencilBuffer&&x.resolveStencilBuffer&&(G|=n.STENCIL_BUFFER_BIT)),ot){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);const Pt=i.get(g[ct]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Pt,0)}n.blitFramebuffer(0,0,R,O,0,0,R,O,G,n.NEAREST),l===!0&&(C.length=0,y.length=0,C.push(n.COLOR_ATTACHMENT0+ct),x.depthBuffer&&x.resolveDepthBuffer===!1&&(C.push(V),y.push(V),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,y)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,C))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ot)for(let ct=0;ct<g.length;ct++){e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.RENDERBUFFER,ht.__webglColorRenderbuffer[ct]);const Pt=i.get(g[ct]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,ht.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ct,n.TEXTURE_2D,Pt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,ht.__webglMultisampledFramebuffer)}else if(x.depthBuffer&&x.resolveDepthBuffer===!1&&l){const g=x.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[g])}}}function X(x){return Math.min(s.maxSamples,x.samples)}function q(x){const g=i.get(x);return x.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&g.__useRenderToTexture!==!1}function K(x){const g=o.render.frame;u.get(x)!==g&&(u.set(x,g),x.update())}function st(x,g){const R=x.colorSpace,O=x.format,G=x.type;return x.isCompressedTexture===!0||x.isVideoTexture===!0||R!==Ss&&R!==ai&&(Yt.getTransfer(R)===ne?(O!==an||G!==Kn)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",R)),g}function j(x){return typeof HTMLImageElement<"u"&&x instanceof HTMLImageElement?(c.width=x.naturalWidth||x.width,c.height=x.naturalHeight||x.height):typeof VideoFrame<"u"&&x instanceof VideoFrame?(c.width=x.displayWidth,c.height=x.displayHeight):(c.width=x.width,c.height=x.height),c}this.allocateTextureUnit=Y,this.resetTextureUnits=Q,this.setTexture2D=rt,this.setTexture2DArray=Z,this.setTexture3D=J,this.setTextureCube=H,this.rebindTextures=Bt,this.setupRenderTarget=ue,this.updateRenderTargetMipmap=b,this.updateMultisampleRenderTarget=et,this.setupDepthRenderbuffer=Ut,this.setupFrameBufferTexture=Et,this.useMultisampledRTT=q}function tM(n,t){function e(i,s=ai){let r;const o=Yt.getTransfer(s);if(i===Kn)return n.UNSIGNED_BYTE;if(i===zl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Hl)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Qh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Zh)return n.BYTE;if(i===Jh)return n.SHORT;if(i===er)return n.UNSIGNED_SHORT;if(i===Bl)return n.INT;if(i===Ui)return n.UNSIGNED_INT;if(i===kn)return n.FLOAT;if(i===rr)return n.HALF_FLOAT;if(i===tf)return n.ALPHA;if(i===ef)return n.RGB;if(i===an)return n.RGBA;if(i===nf)return n.LUMINANCE;if(i===sf)return n.LUMINANCE_ALPHA;if(i===fs)return n.DEPTH_COMPONENT;if(i===xs)return n.DEPTH_STENCIL;if(i===rf)return n.RED;if(i===Vl)return n.RED_INTEGER;if(i===of)return n.RG;if(i===Gl)return n.RG_INTEGER;if(i===kl)return n.RGBA_INTEGER;if(i===qr||i===Yr||i===jr||i===Kr)if(o===ne)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===qr)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Kr)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===qr)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Yr)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===jr)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Kr)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Wa||i===Xa||i===qa||i===Ya)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Wa)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Xa)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===qa)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ya)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===ja||i===Ka||i===$a)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===ja||i===Ka)return o===ne?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===$a)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(i===Za||i===Ja||i===Qa||i===tl||i===el||i===nl||i===il||i===sl||i===rl||i===ol||i===al||i===ll||i===cl||i===ul)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===Za)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Ja)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Qa)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===tl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===el)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===nl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===il)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===sl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===rl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ol)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===al)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===ll)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===cl)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===ul)return o===ne?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===$r||i===hl||i===fl)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===$r)return o===ne?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===hl)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===fl)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===af||i===dl||i===pl||i===ml)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===$r)return r.COMPRESSED_RED_RGTC1_EXT;if(i===dl)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===pl)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===ml)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===vs?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}class eM extends Ye{constructor(t=[]){super(),this.isArrayCamera=!0,this.cameras=t}}class zs extends Se{constructor(){super(),this.isGroup=!0,this.type="Group"}}const nM={type:"move"};class ma{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zs,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zs,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zs,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){const e=this._hand;if(e)for(const i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){o=!0;for(const _ of t.hand.values()){const p=e.getJointPose(_,i),f=this._getHandJoint(c,_);p!==null&&(f.matrix.fromArray(p.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=p.radius),f.visible=p!==null}const u=c.joints["index-finger-tip"],h=c.joints["thumb-tip"],d=u.position.distanceTo(h.position),m=.02,v=.005;c.inputState.pinching&&d>m+v?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&d<=m-v&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(a.matrix.fromArray(s.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,s.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(s.linearVelocity)):a.hasLinearVelocity=!1,s.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(s.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(nM)))}return a!==null&&(a.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){const i=new zs;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}}const iM=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,sM=`
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

}`;class rM{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e,i){if(this.texture===null){const s=new Be,r=t.properties.get(s);r.__webglTexture=e.texture,(e.depthNear!=i.depthNear||e.depthFar!=i.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=s}}getMesh(t){if(this.texture!==null&&this.mesh===null){const e=t.cameras[0].viewport,i=new pi({vertexShader:iM,fragmentShader:sM,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new Sn(new Ao(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class oM extends Bi{constructor(t,e){super();const i=this;let s=null,r=1,o=null,a="local-floor",l=1,c=null,u=null,h=null,d=null,m=null,v=null;const _=new rM,p=e.getContextAttributes();let f=null,w=null;const A=[],S=[],z=new Wt;let L=null;const P=new Ye;P.viewport=new de;const F=new Ye;F.viewport=new de;const T=[P,F],E=new eM;let D=null,Q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(tt){let lt=A[tt];return lt===void 0&&(lt=new ma,A[tt]=lt),lt.getTargetRaySpace()},this.getControllerGrip=function(tt){let lt=A[tt];return lt===void 0&&(lt=new ma,A[tt]=lt),lt.getGripSpace()},this.getHand=function(tt){let lt=A[tt];return lt===void 0&&(lt=new ma,A[tt]=lt),lt.getHandSpace()};function Y(tt){const lt=S.indexOf(tt.inputSource);if(lt===-1)return;const Et=A[lt];Et!==void 0&&(Et.update(tt.inputSource,tt.frame,c||o),Et.dispatchEvent({type:tt.type,data:tt.inputSource}))}function it(){s.removeEventListener("select",Y),s.removeEventListener("selectstart",Y),s.removeEventListener("selectend",Y),s.removeEventListener("squeeze",Y),s.removeEventListener("squeezestart",Y),s.removeEventListener("squeezeend",Y),s.removeEventListener("end",it),s.removeEventListener("inputsourceschange",rt);for(let tt=0;tt<A.length;tt++){const lt=S[tt];lt!==null&&(S[tt]=null,A[tt].disconnect(lt))}D=null,Q=null,_.reset(),t.setRenderTarget(f),m=null,d=null,h=null,s=null,w=null,Kt.stop(),i.isPresenting=!1,t.setPixelRatio(L),t.setSize(z.width,z.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(tt){r=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(tt){a=tt,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(tt){c=tt},this.getBaseLayer=function(){return d!==null?d:m},this.getBinding=function(){return h},this.getFrame=function(){return v},this.getSession=function(){return s},this.setSession=async function(tt){if(s=tt,s!==null){if(f=t.getRenderTarget(),s.addEventListener("select",Y),s.addEventListener("selectstart",Y),s.addEventListener("selectend",Y),s.addEventListener("squeeze",Y),s.addEventListener("squeezestart",Y),s.addEventListener("squeezeend",Y),s.addEventListener("end",it),s.addEventListener("inputsourceschange",rt),p.xrCompatible!==!0&&await e.makeXRCompatible(),L=t.getPixelRatio(),t.getSize(z),s.renderState.layers===void 0){const lt={antialias:p.antialias,alpha:!0,depth:p.depth,stencil:p.stencil,framebufferScaleFactor:r};m=new XRWebGLLayer(s,e,lt),s.updateRenderState({baseLayer:m}),t.setPixelRatio(1),t.setSize(m.framebufferWidth,m.framebufferHeight,!1),w=new Ni(m.framebufferWidth,m.framebufferHeight,{format:an,type:Kn,colorSpace:t.outputColorSpace,stencilBuffer:p.stencil})}else{let lt=null,Et=null,pt=null;p.depth&&(pt=p.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,lt=p.stencil?xs:fs,Et=p.stencil?vs:Ui);const Ct={colorFormat:e.RGBA8,depthFormat:pt,scaleFactor:r};h=new XRWebGLBinding(s,e),d=h.createProjectionLayer(Ct),s.updateRenderState({layers:[d]}),t.setPixelRatio(1),t.setSize(d.textureWidth,d.textureHeight,!1),w=new Ni(d.textureWidth,d.textureHeight,{format:an,type:Kn,depthTexture:new yf(d.textureWidth,d.textureHeight,Et,void 0,void 0,void 0,void 0,void 0,void 0,lt),stencilBuffer:p.stencil,colorSpace:t.outputColorSpace,samples:p.antialias?4:0,resolveDepthBuffer:d.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await s.requestReferenceSpace(a),Kt.setContext(s),Kt.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return _.getDepthTexture()};function rt(tt){for(let lt=0;lt<tt.removed.length;lt++){const Et=tt.removed[lt],pt=S.indexOf(Et);pt>=0&&(S[pt]=null,A[pt].disconnect(Et))}for(let lt=0;lt<tt.added.length;lt++){const Et=tt.added[lt];let pt=S.indexOf(Et);if(pt===-1){for(let Ut=0;Ut<A.length;Ut++)if(Ut>=S.length){S.push(Et),pt=Ut;break}else if(S[Ut]===null){S[Ut]=Et,pt=Ut;break}if(pt===-1)break}const Ct=A[pt];Ct&&Ct.connect(Et)}}const Z=new B,J=new B;function H(tt,lt,Et){Z.setFromMatrixPosition(lt.matrixWorld),J.setFromMatrixPosition(Et.matrixWorld);const pt=Z.distanceTo(J),Ct=lt.projectionMatrix.elements,Ut=Et.projectionMatrix.elements,Bt=Ct[14]/(Ct[10]-1),ue=Ct[14]/(Ct[10]+1),b=(Ct[9]+1)/Ct[5],C=(Ct[9]-1)/Ct[5],y=(Ct[8]-1)/Ct[0],et=(Ut[8]+1)/Ut[0],X=Bt*y,q=Bt*et,K=pt/(-y+et),st=K*-y;if(lt.matrixWorld.decompose(tt.position,tt.quaternion,tt.scale),tt.translateX(st),tt.translateZ(K),tt.matrixWorld.compose(tt.position,tt.quaternion,tt.scale),tt.matrixWorldInverse.copy(tt.matrixWorld).invert(),Ct[10]===-1)tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse);else{const j=Bt+K,x=ue+K,g=X-st,R=q+(pt-st),O=b*ue/x*j,G=C*ue/x*j;tt.projectionMatrix.makePerspective(g,R,O,G,j,x),tt.projectionMatrixInverse.copy(tt.projectionMatrix).invert()}}function ft(tt,lt){lt===null?tt.matrixWorld.copy(tt.matrix):tt.matrixWorld.multiplyMatrices(lt.matrixWorld,tt.matrix),tt.matrixWorldInverse.copy(tt.matrixWorld).invert()}this.updateCamera=function(tt){if(s===null)return;let lt=tt.near,Et=tt.far;_.texture!==null&&(_.depthNear>0&&(lt=_.depthNear),_.depthFar>0&&(Et=_.depthFar)),E.near=F.near=P.near=lt,E.far=F.far=P.far=Et,(D!==E.near||Q!==E.far)&&(s.updateRenderState({depthNear:E.near,depthFar:E.far}),D=E.near,Q=E.far),P.layers.mask=tt.layers.mask|2,F.layers.mask=tt.layers.mask|4,E.layers.mask=P.layers.mask|F.layers.mask;const pt=tt.parent,Ct=E.cameras;ft(E,pt);for(let Ut=0;Ut<Ct.length;Ut++)ft(Ct[Ut],pt);Ct.length===2?H(E,P,F):E.projectionMatrix.copy(P.projectionMatrix),Mt(tt,E,pt)};function Mt(tt,lt,Et){Et===null?tt.matrix.copy(lt.matrixWorld):(tt.matrix.copy(Et.matrixWorld),tt.matrix.invert(),tt.matrix.multiply(lt.matrixWorld)),tt.matrix.decompose(tt.position,tt.quaternion,tt.scale),tt.updateMatrixWorld(!0),tt.projectionMatrix.copy(lt.projectionMatrix),tt.projectionMatrixInverse.copy(lt.projectionMatrixInverse),tt.isPerspectiveCamera&&(tt.fov=_l*2*Math.atan(1/tt.projectionMatrix.elements[5]),tt.zoom=1)}this.getCamera=function(){return E},this.getFoveation=function(){if(!(d===null&&m===null))return l},this.setFoveation=function(tt){l=tt,d!==null&&(d.fixedFoveation=tt),m!==null&&m.fixedFoveation!==void 0&&(m.fixedFoveation=tt)},this.hasDepthSensing=function(){return _.texture!==null},this.getDepthSensingMesh=function(){return _.getMesh(E)};let yt=null;function Dt(tt,lt){if(u=lt.getViewerPose(c||o),v=lt,u!==null){const Et=u.views;m!==null&&(t.setRenderTargetFramebuffer(w,m.framebuffer),t.setRenderTarget(w));let pt=!1;Et.length!==E.cameras.length&&(E.cameras.length=0,pt=!0);for(let Ut=0;Ut<Et.length;Ut++){const Bt=Et[Ut];let ue=null;if(m!==null)ue=m.getViewport(Bt);else{const C=h.getViewSubImage(d,Bt);ue=C.viewport,Ut===0&&(t.setRenderTargetTextures(w,C.colorTexture,d.ignoreDepthValues?void 0:C.depthStencilTexture),t.setRenderTarget(w))}let b=T[Ut];b===void 0&&(b=new Ye,b.layers.enable(Ut),b.viewport=new de,T[Ut]=b),b.matrix.fromArray(Bt.transform.matrix),b.matrix.decompose(b.position,b.quaternion,b.scale),b.projectionMatrix.fromArray(Bt.projectionMatrix),b.projectionMatrixInverse.copy(b.projectionMatrix).invert(),b.viewport.set(ue.x,ue.y,ue.width,ue.height),Ut===0&&(E.matrix.copy(b.matrix),E.matrix.decompose(E.position,E.quaternion,E.scale)),pt===!0&&E.cameras.push(b)}const Ct=s.enabledFeatures;if(Ct&&Ct.includes("depth-sensing")){const Ut=h.getDepthInformation(Et[0]);Ut&&Ut.isValid&&Ut.texture&&_.init(t,Ut,s.renderState)}}for(let Et=0;Et<A.length;Et++){const pt=S[Et],Ct=A[Et];pt!==null&&Ct!==void 0&&Ct.update(pt,lt,c||o)}yt&&yt(tt,lt),lt.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:lt}),v=null}const Kt=new Sf;Kt.setAnimationLoop(Dt),this.setAnimationLoop=function(tt){yt=tt},this.dispose=function(){}}}const yi=new wn,aM=new he;function lM(n,t){function e(p,f){p.matrixAutoUpdate===!0&&p.updateMatrix(),f.value.copy(p.matrix)}function i(p,f){f.color.getRGB(p.fogColor.value,vf(n)),f.isFog?(p.fogNear.value=f.near,p.fogFar.value=f.far):f.isFogExp2&&(p.fogDensity.value=f.density)}function s(p,f,w,A,S){f.isMeshBasicMaterial||f.isMeshLambertMaterial?r(p,f):f.isMeshToonMaterial?(r(p,f),h(p,f)):f.isMeshPhongMaterial?(r(p,f),u(p,f)):f.isMeshStandardMaterial?(r(p,f),d(p,f),f.isMeshPhysicalMaterial&&m(p,f,S)):f.isMeshMatcapMaterial?(r(p,f),v(p,f)):f.isMeshDepthMaterial?r(p,f):f.isMeshDistanceMaterial?(r(p,f),_(p,f)):f.isMeshNormalMaterial?r(p,f):f.isLineBasicMaterial?(o(p,f),f.isLineDashedMaterial&&a(p,f)):f.isPointsMaterial?l(p,f,w,A):f.isSpriteMaterial?c(p,f):f.isShadowMaterial?(p.color.value.copy(f.color),p.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function r(p,f){p.opacity.value=f.opacity,f.color&&p.diffuse.value.copy(f.color),f.emissive&&p.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.bumpMap&&(p.bumpMap.value=f.bumpMap,e(f.bumpMap,p.bumpMapTransform),p.bumpScale.value=f.bumpScale,f.side===Oe&&(p.bumpScale.value*=-1)),f.normalMap&&(p.normalMap.value=f.normalMap,e(f.normalMap,p.normalMapTransform),p.normalScale.value.copy(f.normalScale),f.side===Oe&&p.normalScale.value.negate()),f.displacementMap&&(p.displacementMap.value=f.displacementMap,e(f.displacementMap,p.displacementMapTransform),p.displacementScale.value=f.displacementScale,p.displacementBias.value=f.displacementBias),f.emissiveMap&&(p.emissiveMap.value=f.emissiveMap,e(f.emissiveMap,p.emissiveMapTransform)),f.specularMap&&(p.specularMap.value=f.specularMap,e(f.specularMap,p.specularMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest);const w=t.get(f),A=w.envMap,S=w.envMapRotation;A&&(p.envMap.value=A,yi.copy(S),yi.x*=-1,yi.y*=-1,yi.z*=-1,A.isCubeTexture&&A.isRenderTargetTexture===!1&&(yi.y*=-1,yi.z*=-1),p.envMapRotation.value.setFromMatrix4(aM.makeRotationFromEuler(yi)),p.flipEnvMap.value=A.isCubeTexture&&A.isRenderTargetTexture===!1?-1:1,p.reflectivity.value=f.reflectivity,p.ior.value=f.ior,p.refractionRatio.value=f.refractionRatio),f.lightMap&&(p.lightMap.value=f.lightMap,p.lightMapIntensity.value=f.lightMapIntensity,e(f.lightMap,p.lightMapTransform)),f.aoMap&&(p.aoMap.value=f.aoMap,p.aoMapIntensity.value=f.aoMapIntensity,e(f.aoMap,p.aoMapTransform))}function o(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform))}function a(p,f){p.dashSize.value=f.dashSize,p.totalSize.value=f.dashSize+f.gapSize,p.scale.value=f.scale}function l(p,f,w,A){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.size.value=f.size*w,p.scale.value=A*.5,f.map&&(p.map.value=f.map,e(f.map,p.uvTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function c(p,f){p.diffuse.value.copy(f.color),p.opacity.value=f.opacity,p.rotation.value=f.rotation,f.map&&(p.map.value=f.map,e(f.map,p.mapTransform)),f.alphaMap&&(p.alphaMap.value=f.alphaMap,e(f.alphaMap,p.alphaMapTransform)),f.alphaTest>0&&(p.alphaTest.value=f.alphaTest)}function u(p,f){p.specular.value.copy(f.specular),p.shininess.value=Math.max(f.shininess,1e-4)}function h(p,f){f.gradientMap&&(p.gradientMap.value=f.gradientMap)}function d(p,f){p.metalness.value=f.metalness,f.metalnessMap&&(p.metalnessMap.value=f.metalnessMap,e(f.metalnessMap,p.metalnessMapTransform)),p.roughness.value=f.roughness,f.roughnessMap&&(p.roughnessMap.value=f.roughnessMap,e(f.roughnessMap,p.roughnessMapTransform)),f.envMap&&(p.envMapIntensity.value=f.envMapIntensity)}function m(p,f,w){p.ior.value=f.ior,f.sheen>0&&(p.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),p.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(p.sheenColorMap.value=f.sheenColorMap,e(f.sheenColorMap,p.sheenColorMapTransform)),f.sheenRoughnessMap&&(p.sheenRoughnessMap.value=f.sheenRoughnessMap,e(f.sheenRoughnessMap,p.sheenRoughnessMapTransform))),f.clearcoat>0&&(p.clearcoat.value=f.clearcoat,p.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(p.clearcoatMap.value=f.clearcoatMap,e(f.clearcoatMap,p.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,e(f.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(p.clearcoatNormalMap.value=f.clearcoatNormalMap,e(f.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===Oe&&p.clearcoatNormalScale.value.negate())),f.dispersion>0&&(p.dispersion.value=f.dispersion),f.iridescence>0&&(p.iridescence.value=f.iridescence,p.iridescenceIOR.value=f.iridescenceIOR,p.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(p.iridescenceMap.value=f.iridescenceMap,e(f.iridescenceMap,p.iridescenceMapTransform)),f.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=f.iridescenceThicknessMap,e(f.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),f.transmission>0&&(p.transmission.value=f.transmission,p.transmissionSamplerMap.value=w.texture,p.transmissionSamplerSize.value.set(w.width,w.height),f.transmissionMap&&(p.transmissionMap.value=f.transmissionMap,e(f.transmissionMap,p.transmissionMapTransform)),p.thickness.value=f.thickness,f.thicknessMap&&(p.thicknessMap.value=f.thicknessMap,e(f.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=f.attenuationDistance,p.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(p.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(p.anisotropyMap.value=f.anisotropyMap,e(f.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=f.specularIntensity,p.specularColor.value.copy(f.specularColor),f.specularColorMap&&(p.specularColorMap.value=f.specularColorMap,e(f.specularColorMap,p.specularColorMapTransform)),f.specularIntensityMap&&(p.specularIntensityMap.value=f.specularIntensityMap,e(f.specularIntensityMap,p.specularIntensityMapTransform))}function v(p,f){f.matcap&&(p.matcap.value=f.matcap)}function _(p,f){const w=t.get(f).light;p.referencePosition.value.setFromMatrixPosition(w.matrixWorld),p.nearDistance.value=w.shadow.camera.near,p.farDistance.value=w.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function cM(n,t,e,i){let s={},r={},o=[];const a=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(w,A){const S=A.program;i.uniformBlockBinding(w,S)}function c(w,A){let S=s[w.id];S===void 0&&(v(w),S=u(w),s[w.id]=S,w.addEventListener("dispose",p));const z=A.program;i.updateUBOMapping(w,z);const L=t.render.frame;r[w.id]!==L&&(d(w),r[w.id]=L)}function u(w){const A=h();w.__bindingPointIndex=A;const S=n.createBuffer(),z=w.__size,L=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,z,L),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,A,S),S}function h(){for(let w=0;w<a;w++)if(o.indexOf(w)===-1)return o.push(w),w;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(w){const A=s[w.id],S=w.uniforms,z=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,A);for(let L=0,P=S.length;L<P;L++){const F=Array.isArray(S[L])?S[L]:[S[L]];for(let T=0,E=F.length;T<E;T++){const D=F[T];if(m(D,L,T,z)===!0){const Q=D.__offset,Y=Array.isArray(D.value)?D.value:[D.value];let it=0;for(let rt=0;rt<Y.length;rt++){const Z=Y[rt],J=_(Z);typeof Z=="number"||typeof Z=="boolean"?(D.__data[0]=Z,n.bufferSubData(n.UNIFORM_BUFFER,Q+it,D.__data)):Z.isMatrix3?(D.__data[0]=Z.elements[0],D.__data[1]=Z.elements[1],D.__data[2]=Z.elements[2],D.__data[3]=0,D.__data[4]=Z.elements[3],D.__data[5]=Z.elements[4],D.__data[6]=Z.elements[5],D.__data[7]=0,D.__data[8]=Z.elements[6],D.__data[9]=Z.elements[7],D.__data[10]=Z.elements[8],D.__data[11]=0):(Z.toArray(D.__data,it),it+=J.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,Q,D.__data)}}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function m(w,A,S,z){const L=w.value,P=A+"_"+S;if(z[P]===void 0)return typeof L=="number"||typeof L=="boolean"?z[P]=L:z[P]=L.clone(),!0;{const F=z[P];if(typeof L=="number"||typeof L=="boolean"){if(F!==L)return z[P]=L,!0}else if(F.equals(L)===!1)return F.copy(L),!0}return!1}function v(w){const A=w.uniforms;let S=0;const z=16;for(let P=0,F=A.length;P<F;P++){const T=Array.isArray(A[P])?A[P]:[A[P]];for(let E=0,D=T.length;E<D;E++){const Q=T[E],Y=Array.isArray(Q.value)?Q.value:[Q.value];for(let it=0,rt=Y.length;it<rt;it++){const Z=Y[it],J=_(Z),H=S%z,ft=H%J.boundary,Mt=H+ft;S+=ft,Mt!==0&&z-Mt<J.storage&&(S+=z-Mt),Q.__data=new Float32Array(J.storage/Float32Array.BYTES_PER_ELEMENT),Q.__offset=S,S+=J.storage}}}const L=S%z;return L>0&&(S+=z-L),w.__size=S,w.__cache={},this}function _(w){const A={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(A.boundary=4,A.storage=4):w.isVector2?(A.boundary=8,A.storage=8):w.isVector3||w.isColor?(A.boundary=16,A.storage=12):w.isVector4?(A.boundary=16,A.storage=16):w.isMatrix3?(A.boundary=48,A.storage=48):w.isMatrix4?(A.boundary=64,A.storage=64):w.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",w),A}function p(w){const A=w.target;A.removeEventListener("dispose",p);const S=o.indexOf(A.__bindingPointIndex);o.splice(S,1),n.deleteBuffer(s[A.id]),delete s[A.id],delete r[A.id]}function f(){for(const w in s)n.deleteBuffer(s[w]);o=[],s={},r={}}return{bind:l,update:c,dispose:f}}class uM{constructor(t={}){const{canvas:e=Jm(),context:i=null,depth:s=!0,stencil:r=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:h=!1,reverseDepthBuffer:d=!1}=t;this.isWebGLRenderer=!0;let m;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");m=i.getContextAttributes().alpha}else m=o;const v=new Uint32Array(4),_=new Int32Array(4);let p=null,f=null;const w=[],A=[];this.domElement=e,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this._outputColorSpace=qe,this.toneMapping=hi,this.toneMappingExposure=1;const S=this;let z=!1,L=0,P=0,F=null,T=-1,E=null;const D=new de,Q=new de;let Y=null;const it=new qt(0);let rt=0,Z=e.width,J=e.height,H=1,ft=null,Mt=null;const yt=new de(0,0,Z,J),Dt=new de(0,0,Z,J);let Kt=!1;const tt=new Xl;let lt=!1,Et=!1;const pt=new he,Ct=new he,Ut=new B,Bt=new de,ue={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let b=!1;function C(){return F===null?H:1}let y=i;function et(M,U){return e.getContext(M,U)}try{const M={alpha:!0,depth:s,stencil:r,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:h};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${Ol}`),e.addEventListener("webglcontextlost",nt,!1),e.addEventListener("webglcontextrestored",St,!1),e.addEventListener("webglcontextcreationerror",vt,!1),y===null){const U="webgl2";if(y=et(U,M),y===null)throw et(U)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(M){throw console.error("THREE.WebGLRenderer: "+M.message),M}let X,q,K,st,j,x,g,R,O,G,V,ht,ot,ct,Pt,at,_t,Rt,Lt,dt,Nt,zt,te,I;function gt(){X=new m0(y),X.init(),zt=new tM(y,X),q=new c0(y,X,t,zt),K=new Zx(y,X),q.reverseDepthBuffer&&d&&K.buffers.depth.setReversed(!0),st=new v0(y),j=new Fx,x=new Qx(y,X,K,j,q,zt,st),g=new h0(S),R=new p0(S),O=new b_(y),te=new a0(y,O),G=new _0(y,O,st,te),V=new M0(y,G,O,st),Lt=new x0(y,q,x),at=new u0(j),ht=new Nx(S,g,R,X,q,te,at),ot=new lM(S,j),ct=new Bx,Pt=new Wx(X),Rt=new o0(S,g,R,K,V,m,l),_t=new Kx(S,V,q),I=new cM(y,st,q,K),dt=new l0(y,X,st),Nt=new g0(y,X,st),st.programs=ht.programs,S.capabilities=q,S.extensions=X,S.properties=j,S.renderLists=ct,S.shadowMap=_t,S.state=K,S.info=st}gt();const $=new oM(S,y);this.xr=$,this.getContext=function(){return y},this.getContextAttributes=function(){return y.getContextAttributes()},this.forceContextLoss=function(){const M=X.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){const M=X.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(M){M!==void 0&&(H=M,this.setSize(Z,J,!1))},this.getSize=function(M){return M.set(Z,J)},this.setSize=function(M,U,k=!0){if($.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}Z=M,J=U,e.width=Math.floor(M*H),e.height=Math.floor(U*H),k===!0&&(e.style.width=M+"px",e.style.height=U+"px"),this.setViewport(0,0,M,U)},this.getDrawingBufferSize=function(M){return M.set(Z*H,J*H).floor()},this.setDrawingBufferSize=function(M,U,k){Z=M,J=U,H=k,e.width=Math.floor(M*k),e.height=Math.floor(U*k),this.setViewport(0,0,M,U)},this.getCurrentViewport=function(M){return M.copy(D)},this.getViewport=function(M){return M.copy(yt)},this.setViewport=function(M,U,k,W){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,U,k,W),K.viewport(D.copy(yt).multiplyScalar(H).round())},this.getScissor=function(M){return M.copy(Dt)},this.setScissor=function(M,U,k,W){M.isVector4?Dt.set(M.x,M.y,M.z,M.w):Dt.set(M,U,k,W),K.scissor(Q.copy(Dt).multiplyScalar(H).round())},this.getScissorTest=function(){return Kt},this.setScissorTest=function(M){K.setScissorTest(Kt=M)},this.setOpaqueSort=function(M){ft=M},this.setTransparentSort=function(M){Mt=M},this.getClearColor=function(M){return M.copy(Rt.getClearColor())},this.setClearColor=function(){Rt.setClearColor.apply(Rt,arguments)},this.getClearAlpha=function(){return Rt.getClearAlpha()},this.setClearAlpha=function(){Rt.setClearAlpha.apply(Rt,arguments)},this.clear=function(M=!0,U=!0,k=!0){let W=0;if(M){let N=!1;if(F!==null){const ut=F.texture.format;N=ut===kl||ut===Gl||ut===Vl}if(N){const ut=F.texture.type,xt=ut===Kn||ut===Ui||ut===er||ut===vs||ut===zl||ut===Hl,Tt=Rt.getClearColor(),bt=Rt.getClearAlpha(),Ot=Tt.r,Gt=Tt.g,At=Tt.b;xt?(v[0]=Ot,v[1]=Gt,v[2]=At,v[3]=bt,y.clearBufferuiv(y.COLOR,0,v)):(_[0]=Ot,_[1]=Gt,_[2]=At,_[3]=bt,y.clearBufferiv(y.COLOR,0,_))}else W|=y.COLOR_BUFFER_BIT}U&&(W|=y.DEPTH_BUFFER_BIT),k&&(W|=y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),y.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){e.removeEventListener("webglcontextlost",nt,!1),e.removeEventListener("webglcontextrestored",St,!1),e.removeEventListener("webglcontextcreationerror",vt,!1),ct.dispose(),Pt.dispose(),j.dispose(),g.dispose(),R.dispose(),V.dispose(),te.dispose(),I.dispose(),ht.dispose(),$.dispose(),$.removeEventListener("sessionstart",Kl),$.removeEventListener("sessionend",$l),mi.stop()};function nt(M){M.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),z=!0}function St(){console.log("THREE.WebGLRenderer: Context Restored."),z=!1;const M=st.autoReset,U=_t.enabled,k=_t.autoUpdate,W=_t.needsUpdate,N=_t.type;gt(),st.autoReset=M,_t.enabled=U,_t.autoUpdate=k,_t.needsUpdate=W,_t.type=N}function vt(M){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function Vt(M){const U=M.target;U.removeEventListener("dispose",Vt),fe(U)}function fe(M){Ee(M),j.remove(M)}function Ee(M){const U=j.get(M).programs;U!==void 0&&(U.forEach(function(k){ht.releaseProgram(k)}),M.isShaderMaterial&&ht.releaseShaderCache(M))}this.renderBufferDirect=function(M,U,k,W,N,ut){U===null&&(U=ue);const xt=N.isMesh&&N.matrixWorld.determinant()<0,Tt=Df(M,U,k,W,N);K.setMaterial(W,xt);let bt=k.index,Ot=1;if(W.wireframe===!0){if(bt=G.getWireframeAttribute(k),bt===void 0)return;Ot=2}const Gt=k.drawRange,At=k.attributes.position;let jt=Gt.start*Ot,oe=(Gt.start+Gt.count)*Ot;ut!==null&&(jt=Math.max(jt,ut.start*Ot),oe=Math.min(oe,(ut.start+ut.count)*Ot)),bt!==null?(jt=Math.max(jt,0),oe=Math.min(oe,bt.count)):At!=null&&(jt=Math.max(jt,0),oe=Math.min(oe,At.count));const le=oe-jt;if(le<0||le===1/0)return;te.setup(N,W,Tt,k,bt);let Ie,$t=dt;if(bt!==null&&(Ie=O.get(bt),$t=Nt,$t.setIndex(Ie)),N.isMesh)W.wireframe===!0?(K.setLineWidth(W.wireframeLinewidth*C()),$t.setMode(y.LINES)):$t.setMode(y.TRIANGLES);else if(N.isLine){let wt=W.linewidth;wt===void 0&&(wt=1),K.setLineWidth(wt*C()),N.isLineSegments?$t.setMode(y.LINES):N.isLineLoop?$t.setMode(y.LINE_LOOP):$t.setMode(y.LINE_STRIP)}else N.isPoints?$t.setMode(y.POINTS):N.isSprite&&$t.setMode(y.TRIANGLES);if(N.isBatchedMesh)if(N._multiDrawInstances!==null)$t.renderMultiDrawInstances(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount,N._multiDrawInstances);else if(X.get("WEBGL_multi_draw"))$t.renderMultiDraw(N._multiDrawStarts,N._multiDrawCounts,N._multiDrawCount);else{const wt=N._multiDrawStarts,Pn=N._multiDrawCounts,Zt=N._multiDrawCount,tn=bt?O.get(bt).bytesPerElement:1,zi=j.get(W).currentProgram.getUniforms();for(let ze=0;ze<Zt;ze++)zi.setValue(y,"_gl_DrawID",ze),$t.render(wt[ze]/tn,Pn[ze])}else if(N.isInstancedMesh)$t.renderInstances(jt,le,N.count);else if(k.isInstancedBufferGeometry){const wt=k._maxInstanceCount!==void 0?k._maxInstanceCount:1/0,Pn=Math.min(k.instanceCount,wt);$t.renderInstances(jt,le,Pn)}else $t.render(jt,le)};function ee(M,U,k){M.transparent===!0&&M.side===Gn&&M.forceSinglePass===!1?(M.side=Oe,M.needsUpdate=!0,cr(M,U,k),M.side=di,M.needsUpdate=!0,cr(M,U,k),M.side=Gn):cr(M,U,k)}this.compile=function(M,U,k=null){k===null&&(k=M),f=Pt.get(k),f.init(U),A.push(f),k.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),M!==k&&M.traverseVisible(function(N){N.isLight&&N.layers.test(U.layers)&&(f.pushLight(N),N.castShadow&&f.pushShadow(N))}),f.setupLights();const W=new Set;return M.traverse(function(N){if(!(N.isMesh||N.isPoints||N.isLine||N.isSprite))return;const ut=N.material;if(ut)if(Array.isArray(ut))for(let xt=0;xt<ut.length;xt++){const Tt=ut[xt];ee(Tt,k,N),W.add(Tt)}else ee(ut,k,N),W.add(ut)}),A.pop(),f=null,W},this.compileAsync=function(M,U,k=null){const W=this.compile(M,U,k);return new Promise(N=>{function ut(){if(W.forEach(function(xt){j.get(xt).currentProgram.isReady()&&W.delete(xt)}),W.size===0){N(M);return}setTimeout(ut,10)}X.get("KHR_parallel_shader_compile")!==null?ut():setTimeout(ut,10)})};let Qe=null;function Cn(M){Qe&&Qe(M)}function Kl(){mi.stop()}function $l(){mi.start()}const mi=new Sf;mi.setAnimationLoop(Cn),typeof self<"u"&&mi.setContext(self),this.setAnimationLoop=function(M){Qe=M,$.setAnimationLoop(M),M===null?mi.stop():mi.start()},$.addEventListener("sessionstart",Kl),$.addEventListener("sessionend",$l),this.render=function(M,U){if(U!==void 0&&U.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(z===!0)return;if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),U.parent===null&&U.matrixWorldAutoUpdate===!0&&U.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&($.cameraAutoUpdate===!0&&$.updateCamera(U),U=$.getCamera()),M.isScene===!0&&M.onBeforeRender(S,M,U,F),f=Pt.get(M,A.length),f.init(U),A.push(f),Ct.multiplyMatrices(U.projectionMatrix,U.matrixWorldInverse),tt.setFromProjectionMatrix(Ct),Et=this.localClippingEnabled,lt=at.init(this.clippingPlanes,Et),p=ct.get(M,w.length),p.init(),w.push(p),$.enabled===!0&&$.isPresenting===!0){const ut=S.xr.getDepthSensingMesh();ut!==null&&Ro(ut,U,-1/0,S.sortObjects)}Ro(M,U,0,S.sortObjects),p.finish(),S.sortObjects===!0&&p.sort(ft,Mt),b=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,b&&Rt.addToRenderList(p,M),this.info.render.frame++,lt===!0&&at.beginShadows();const k=f.state.shadowsArray;_t.render(k,M,U),lt===!0&&at.endShadows(),this.info.autoReset===!0&&this.info.reset();const W=p.opaque,N=p.transmissive;if(f.setupLights(),U.isArrayCamera){const ut=U.cameras;if(N.length>0)for(let xt=0,Tt=ut.length;xt<Tt;xt++){const bt=ut[xt];Jl(W,N,M,bt)}b&&Rt.render(M);for(let xt=0,Tt=ut.length;xt<Tt;xt++){const bt=ut[xt];Zl(p,M,bt,bt.viewport)}}else N.length>0&&Jl(W,N,M,U),b&&Rt.render(M),Zl(p,M,U);F!==null&&(x.updateMultisampleRenderTarget(F),x.updateRenderTargetMipmap(F)),M.isScene===!0&&M.onAfterRender(S,M,U),te.resetDefaultState(),T=-1,E=null,A.pop(),A.length>0?(f=A[A.length-1],lt===!0&&at.setGlobalState(S.clippingPlanes,f.state.camera)):f=null,w.pop(),w.length>0?p=w[w.length-1]:p=null};function Ro(M,U,k,W){if(M.visible===!1)return;if(M.layers.test(U.layers)){if(M.isGroup)k=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(U);else if(M.isLight)f.pushLight(M),M.castShadow&&f.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||tt.intersectsSprite(M)){W&&Bt.setFromMatrixPosition(M.matrixWorld).applyMatrix4(Ct);const xt=V.update(M),Tt=M.material;Tt.visible&&p.push(M,xt,Tt,k,Bt.z,null)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||tt.intersectsObject(M))){const xt=V.update(M),Tt=M.material;if(W&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Bt.copy(M.boundingSphere.center)):(xt.boundingSphere===null&&xt.computeBoundingSphere(),Bt.copy(xt.boundingSphere.center)),Bt.applyMatrix4(M.matrixWorld).applyMatrix4(Ct)),Array.isArray(Tt)){const bt=xt.groups;for(let Ot=0,Gt=bt.length;Ot<Gt;Ot++){const At=bt[Ot],jt=Tt[At.materialIndex];jt&&jt.visible&&p.push(M,xt,jt,k,Bt.z,At)}}else Tt.visible&&p.push(M,xt,Tt,k,Bt.z,null)}}const ut=M.children;for(let xt=0,Tt=ut.length;xt<Tt;xt++)Ro(ut[xt],U,k,W)}function Zl(M,U,k,W){const N=M.opaque,ut=M.transmissive,xt=M.transparent;f.setupLightsView(k),lt===!0&&at.setGlobalState(S.clippingPlanes,k),W&&K.viewport(D.copy(W)),N.length>0&&lr(N,U,k),ut.length>0&&lr(ut,U,k),xt.length>0&&lr(xt,U,k),K.buffers.depth.setTest(!0),K.buffers.depth.setMask(!0),K.buffers.color.setMask(!0),K.setPolygonOffset(!1)}function Jl(M,U,k,W){if((k.isScene===!0?k.overrideMaterial:null)!==null)return;f.state.transmissionRenderTarget[W.id]===void 0&&(f.state.transmissionRenderTarget[W.id]=new Ni(1,1,{generateMipmaps:!0,type:X.has("EXT_color_buffer_half_float")||X.has("EXT_color_buffer_float")?rr:Kn,minFilter:Di,samples:4,stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Yt.workingColorSpace}));const ut=f.state.transmissionRenderTarget[W.id],xt=W.viewport||D;ut.setSize(xt.z,xt.w);const Tt=S.getRenderTarget();S.setRenderTarget(ut),S.getClearColor(it),rt=S.getClearAlpha(),rt<1&&S.setClearColor(16777215,.5),S.clear(),b&&Rt.render(k);const bt=S.toneMapping;S.toneMapping=hi;const Ot=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),f.setupLightsView(W),lt===!0&&at.setGlobalState(S.clippingPlanes,W),lr(M,k,W),x.updateMultisampleRenderTarget(ut),x.updateRenderTargetMipmap(ut),X.has("WEBGL_multisampled_render_to_texture")===!1){let Gt=!1;for(let At=0,jt=U.length;At<jt;At++){const oe=U[At],le=oe.object,Ie=oe.geometry,$t=oe.material,wt=oe.group;if($t.side===Gn&&le.layers.test(W.layers)){const Pn=$t.side;$t.side=Oe,$t.needsUpdate=!0,Ql(le,k,W,Ie,$t,wt),$t.side=Pn,$t.needsUpdate=!0,Gt=!0}}Gt===!0&&(x.updateMultisampleRenderTarget(ut),x.updateRenderTargetMipmap(ut))}S.setRenderTarget(Tt),S.setClearColor(it,rt),Ot!==void 0&&(W.viewport=Ot),S.toneMapping=bt}function lr(M,U,k){const W=U.isScene===!0?U.overrideMaterial:null;for(let N=0,ut=M.length;N<ut;N++){const xt=M[N],Tt=xt.object,bt=xt.geometry,Ot=W===null?xt.material:W,Gt=xt.group;Tt.layers.test(k.layers)&&Ql(Tt,U,k,bt,Ot,Gt)}}function Ql(M,U,k,W,N,ut){M.onBeforeRender(S,U,k,W,N,ut),M.modelViewMatrix.multiplyMatrices(k.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),N.onBeforeRender(S,U,k,W,M,ut),N.transparent===!0&&N.side===Gn&&N.forceSinglePass===!1?(N.side=Oe,N.needsUpdate=!0,S.renderBufferDirect(k,U,W,N,M,ut),N.side=di,N.needsUpdate=!0,S.renderBufferDirect(k,U,W,N,M,ut),N.side=Gn):S.renderBufferDirect(k,U,W,N,M,ut),M.onAfterRender(S,U,k,W,N,ut)}function cr(M,U,k){U.isScene!==!0&&(U=ue);const W=j.get(M),N=f.state.lights,ut=f.state.shadowsArray,xt=N.state.version,Tt=ht.getParameters(M,N.state,ut,U,k),bt=ht.getProgramCacheKey(Tt);let Ot=W.programs;W.environment=M.isMeshStandardMaterial?U.environment:null,W.fog=U.fog,W.envMap=(M.isMeshStandardMaterial?R:g).get(M.envMap||W.environment),W.envMapRotation=W.environment!==null&&M.envMap===null?U.environmentRotation:M.envMapRotation,Ot===void 0&&(M.addEventListener("dispose",Vt),Ot=new Map,W.programs=Ot);let Gt=Ot.get(bt);if(Gt!==void 0){if(W.currentProgram===Gt&&W.lightsStateVersion===xt)return ec(M,Tt),Gt}else Tt.uniforms=ht.getUniforms(M),M.onBeforeCompile(Tt,S),Gt=ht.acquireProgram(Tt,bt),Ot.set(bt,Gt),W.uniforms=Tt.uniforms;const At=W.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(At.clippingPlanes=at.uniform),ec(M,Tt),W.needsLights=If(M),W.lightsStateVersion=xt,W.needsLights&&(At.ambientLightColor.value=N.state.ambient,At.lightProbe.value=N.state.probe,At.directionalLights.value=N.state.directional,At.directionalLightShadows.value=N.state.directionalShadow,At.spotLights.value=N.state.spot,At.spotLightShadows.value=N.state.spotShadow,At.rectAreaLights.value=N.state.rectArea,At.ltc_1.value=N.state.rectAreaLTC1,At.ltc_2.value=N.state.rectAreaLTC2,At.pointLights.value=N.state.point,At.pointLightShadows.value=N.state.pointShadow,At.hemisphereLights.value=N.state.hemi,At.directionalShadowMap.value=N.state.directionalShadowMap,At.directionalShadowMatrix.value=N.state.directionalShadowMatrix,At.spotShadowMap.value=N.state.spotShadowMap,At.spotLightMatrix.value=N.state.spotLightMatrix,At.spotLightMap.value=N.state.spotLightMap,At.pointShadowMap.value=N.state.pointShadowMap,At.pointShadowMatrix.value=N.state.pointShadowMatrix),W.currentProgram=Gt,W.uniformsList=null,Gt}function tc(M){if(M.uniformsList===null){const U=M.currentProgram.getUniforms();M.uniformsList=Zr.seqWithValue(U.seq,M.uniforms)}return M.uniformsList}function ec(M,U){const k=j.get(M);k.outputColorSpace=U.outputColorSpace,k.batching=U.batching,k.batchingColor=U.batchingColor,k.instancing=U.instancing,k.instancingColor=U.instancingColor,k.instancingMorph=U.instancingMorph,k.skinning=U.skinning,k.morphTargets=U.morphTargets,k.morphNormals=U.morphNormals,k.morphColors=U.morphColors,k.morphTargetsCount=U.morphTargetsCount,k.numClippingPlanes=U.numClippingPlanes,k.numIntersection=U.numClipIntersection,k.vertexAlphas=U.vertexAlphas,k.vertexTangents=U.vertexTangents,k.toneMapping=U.toneMapping}function Df(M,U,k,W,N){U.isScene!==!0&&(U=ue),x.resetTextureUnits();const ut=U.fog,xt=W.isMeshStandardMaterial?U.environment:null,Tt=F===null?S.outputColorSpace:F.isXRRenderTarget===!0?F.texture.colorSpace:Ss,bt=(W.isMeshStandardMaterial?R:g).get(W.envMap||xt),Ot=W.vertexColors===!0&&!!k.attributes.color&&k.attributes.color.itemSize===4,Gt=!!k.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),At=!!k.morphAttributes.position,jt=!!k.morphAttributes.normal,oe=!!k.morphAttributes.color;let le=hi;W.toneMapped&&(F===null||F.isXRRenderTarget===!0)&&(le=S.toneMapping);const Ie=k.morphAttributes.position||k.morphAttributes.normal||k.morphAttributes.color,$t=Ie!==void 0?Ie.length:0,wt=j.get(W),Pn=f.state.lights;if(lt===!0&&(Et===!0||M!==E)){const We=M===E&&W.id===T;at.setState(W,M,We)}let Zt=!1;W.version===wt.__version?(wt.needsLights&&wt.lightsStateVersion!==Pn.state.version||wt.outputColorSpace!==Tt||N.isBatchedMesh&&wt.batching===!1||!N.isBatchedMesh&&wt.batching===!0||N.isBatchedMesh&&wt.batchingColor===!0&&N.colorTexture===null||N.isBatchedMesh&&wt.batchingColor===!1&&N.colorTexture!==null||N.isInstancedMesh&&wt.instancing===!1||!N.isInstancedMesh&&wt.instancing===!0||N.isSkinnedMesh&&wt.skinning===!1||!N.isSkinnedMesh&&wt.skinning===!0||N.isInstancedMesh&&wt.instancingColor===!0&&N.instanceColor===null||N.isInstancedMesh&&wt.instancingColor===!1&&N.instanceColor!==null||N.isInstancedMesh&&wt.instancingMorph===!0&&N.morphTexture===null||N.isInstancedMesh&&wt.instancingMorph===!1&&N.morphTexture!==null||wt.envMap!==bt||W.fog===!0&&wt.fog!==ut||wt.numClippingPlanes!==void 0&&(wt.numClippingPlanes!==at.numPlanes||wt.numIntersection!==at.numIntersection)||wt.vertexAlphas!==Ot||wt.vertexTangents!==Gt||wt.morphTargets!==At||wt.morphNormals!==jt||wt.morphColors!==oe||wt.toneMapping!==le||wt.morphTargetsCount!==$t)&&(Zt=!0):(Zt=!0,wt.__version=W.version);let tn=wt.currentProgram;Zt===!0&&(tn=cr(W,U,N));let zi=!1,ze=!1,bs=!1;const ce=tn.getUniforms(),fn=wt.uniforms;if(K.useProgram(tn.program)&&(zi=!0,ze=!0,bs=!0),W.id!==T&&(T=W.id,ze=!0),zi||E!==M){K.buffers.depth.getReversed()?(pt.copy(M.projectionMatrix),t_(pt),e_(pt),ce.setValue(y,"projectionMatrix",pt)):ce.setValue(y,"projectionMatrix",M.projectionMatrix),ce.setValue(y,"viewMatrix",M.matrixWorldInverse);const Zn=ce.map.cameraPosition;Zn!==void 0&&Zn.setValue(y,Ut.setFromMatrixPosition(M.matrixWorld)),q.logarithmicDepthBuffer&&ce.setValue(y,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&ce.setValue(y,"isOrthographic",M.isOrthographicCamera===!0),E!==M&&(E=M,ze=!0,bs=!0)}if(N.isSkinnedMesh){ce.setOptional(y,N,"bindMatrix"),ce.setOptional(y,N,"bindMatrixInverse");const We=N.skeleton;We&&(We.boneTexture===null&&We.computeBoneTexture(),ce.setValue(y,"boneTexture",We.boneTexture,x))}N.isBatchedMesh&&(ce.setOptional(y,N,"batchingTexture"),ce.setValue(y,"batchingTexture",N._matricesTexture,x),ce.setOptional(y,N,"batchingIdTexture"),ce.setValue(y,"batchingIdTexture",N._indirectTexture,x),ce.setOptional(y,N,"batchingColorTexture"),N._colorsTexture!==null&&ce.setValue(y,"batchingColorTexture",N._colorsTexture,x));const As=k.morphAttributes;if((As.position!==void 0||As.normal!==void 0||As.color!==void 0)&&Lt.update(N,k,tn),(ze||wt.receiveShadow!==N.receiveShadow)&&(wt.receiveShadow=N.receiveShadow,ce.setValue(y,"receiveShadow",N.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(fn.envMap.value=bt,fn.flipEnvMap.value=bt.isCubeTexture&&bt.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&U.environment!==null&&(fn.envMapIntensity.value=U.environmentIntensity),ze&&(ce.setValue(y,"toneMappingExposure",S.toneMappingExposure),wt.needsLights&&Lf(fn,bs),ut&&W.fog===!0&&ot.refreshFogUniforms(fn,ut),ot.refreshMaterialUniforms(fn,W,H,J,f.state.transmissionRenderTarget[M.id]),Zr.upload(y,tc(wt),fn,x)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(Zr.upload(y,tc(wt),fn,x),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&ce.setValue(y,"center",N.center),ce.setValue(y,"modelViewMatrix",N.modelViewMatrix),ce.setValue(y,"normalMatrix",N.normalMatrix),ce.setValue(y,"modelMatrix",N.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const We=W.uniformsGroups;for(let Zn=0,Jn=We.length;Zn<Jn;Zn++){const nc=We[Zn];I.update(nc,tn),I.bind(nc,tn)}}return tn}function Lf(M,U){M.ambientLightColor.needsUpdate=U,M.lightProbe.needsUpdate=U,M.directionalLights.needsUpdate=U,M.directionalLightShadows.needsUpdate=U,M.pointLights.needsUpdate=U,M.pointLightShadows.needsUpdate=U,M.spotLights.needsUpdate=U,M.spotLightShadows.needsUpdate=U,M.rectAreaLights.needsUpdate=U,M.hemisphereLights.needsUpdate=U}function If(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return P},this.getRenderTarget=function(){return F},this.setRenderTargetTextures=function(M,U,k){j.get(M.texture).__webglTexture=U,j.get(M.depthTexture).__webglTexture=k;const W=j.get(M);W.__hasExternalTextures=!0,W.__autoAllocateDepthBuffer=k===void 0,W.__autoAllocateDepthBuffer||X.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),W.__useRenderToTexture=!1)},this.setRenderTargetFramebuffer=function(M,U){const k=j.get(M);k.__webglFramebuffer=U,k.__useDefaultFramebuffer=U===void 0},this.setRenderTarget=function(M,U=0,k=0){F=M,L=U,P=k;let W=!0,N=null,ut=!1,xt=!1;if(M){const bt=j.get(M);if(bt.__useDefaultFramebuffer!==void 0)K.bindFramebuffer(y.FRAMEBUFFER,null),W=!1;else if(bt.__webglFramebuffer===void 0)x.setupRenderTarget(M);else if(bt.__hasExternalTextures)x.rebindTextures(M,j.get(M.texture).__webglTexture,j.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){const At=M.depthTexture;if(bt.__boundDepthTexture!==At){if(At!==null&&j.has(At)&&(M.width!==At.image.width||M.height!==At.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");x.setupDepthRenderbuffer(M)}}const Ot=M.texture;(Ot.isData3DTexture||Ot.isDataArrayTexture||Ot.isCompressedArrayTexture)&&(xt=!0);const Gt=j.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(Gt[U])?N=Gt[U][k]:N=Gt[U],ut=!0):M.samples>0&&x.useMultisampledRTT(M)===!1?N=j.get(M).__webglMultisampledFramebuffer:Array.isArray(Gt)?N=Gt[k]:N=Gt,D.copy(M.viewport),Q.copy(M.scissor),Y=M.scissorTest}else D.copy(yt).multiplyScalar(H).floor(),Q.copy(Dt).multiplyScalar(H).floor(),Y=Kt;if(K.bindFramebuffer(y.FRAMEBUFFER,N)&&W&&K.drawBuffers(M,N),K.viewport(D),K.scissor(Q),K.setScissorTest(Y),ut){const bt=j.get(M.texture);y.framebufferTexture2D(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,y.TEXTURE_CUBE_MAP_POSITIVE_X+U,bt.__webglTexture,k)}else if(xt){const bt=j.get(M.texture),Ot=U||0;y.framebufferTextureLayer(y.FRAMEBUFFER,y.COLOR_ATTACHMENT0,bt.__webglTexture,k||0,Ot)}T=-1},this.readRenderTargetPixels=function(M,U,k,W,N,ut,xt){if(!(M&&M.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Tt=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){K.bindFramebuffer(y.FRAMEBUFFER,Tt);try{const bt=M.texture,Ot=bt.format,Gt=bt.type;if(!q.textureFormatReadable(Ot)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!q.textureTypeReadable(Gt)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}U>=0&&U<=M.width-W&&k>=0&&k<=M.height-N&&y.readPixels(U,k,W,N,zt.convert(Ot),zt.convert(Gt),ut)}finally{const bt=F!==null?j.get(F).__webglFramebuffer:null;K.bindFramebuffer(y.FRAMEBUFFER,bt)}}},this.readRenderTargetPixelsAsync=async function(M,U,k,W,N,ut,xt){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Tt=j.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&xt!==void 0&&(Tt=Tt[xt]),Tt){const bt=M.texture,Ot=bt.format,Gt=bt.type;if(!q.textureFormatReadable(Ot))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!q.textureTypeReadable(Gt))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");if(U>=0&&U<=M.width-W&&k>=0&&k<=M.height-N){K.bindFramebuffer(y.FRAMEBUFFER,Tt);const At=y.createBuffer();y.bindBuffer(y.PIXEL_PACK_BUFFER,At),y.bufferData(y.PIXEL_PACK_BUFFER,ut.byteLength,y.STREAM_READ),y.readPixels(U,k,W,N,zt.convert(Ot),zt.convert(Gt),0);const jt=F!==null?j.get(F).__webglFramebuffer:null;K.bindFramebuffer(y.FRAMEBUFFER,jt);const oe=y.fenceSync(y.SYNC_GPU_COMMANDS_COMPLETE,0);return y.flush(),await Qm(y,oe,4),y.bindBuffer(y.PIXEL_PACK_BUFFER,At),y.getBufferSubData(y.PIXEL_PACK_BUFFER,0,ut),y.deleteBuffer(At),y.deleteSync(oe),ut}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")}},this.copyFramebufferToTexture=function(M,U=null,k=0){M.isTexture!==!0&&(Os("WebGLRenderer: copyFramebufferToTexture function signature has changed."),U=arguments[0]||null,M=arguments[1]);const W=Math.pow(2,-k),N=Math.floor(M.image.width*W),ut=Math.floor(M.image.height*W),xt=U!==null?U.x:0,Tt=U!==null?U.y:0;x.setTexture2D(M,0),y.copyTexSubImage2D(y.TEXTURE_2D,k,0,0,xt,Tt,N,ut),K.unbindTexture()},this.copyTextureToTexture=function(M,U,k=null,W=null,N=0){M.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture function signature has changed."),W=arguments[0]||null,M=arguments[1],U=arguments[2],N=arguments[3]||0,k=null);let ut,xt,Tt,bt,Ot,Gt,At,jt,oe;const le=M.isCompressedTexture?M.mipmaps[N]:M.image;k!==null?(ut=k.max.x-k.min.x,xt=k.max.y-k.min.y,Tt=k.isBox3?k.max.z-k.min.z:1,bt=k.min.x,Ot=k.min.y,Gt=k.isBox3?k.min.z:0):(ut=le.width,xt=le.height,Tt=le.depth||1,bt=0,Ot=0,Gt=0),W!==null?(At=W.x,jt=W.y,oe=W.z):(At=0,jt=0,oe=0);const Ie=zt.convert(U.format),$t=zt.convert(U.type);let wt;U.isData3DTexture?(x.setTexture3D(U,0),wt=y.TEXTURE_3D):U.isDataArrayTexture||U.isCompressedArrayTexture?(x.setTexture2DArray(U,0),wt=y.TEXTURE_2D_ARRAY):(x.setTexture2D(U,0),wt=y.TEXTURE_2D),y.pixelStorei(y.UNPACK_FLIP_Y_WEBGL,U.flipY),y.pixelStorei(y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,U.premultiplyAlpha),y.pixelStorei(y.UNPACK_ALIGNMENT,U.unpackAlignment);const Pn=y.getParameter(y.UNPACK_ROW_LENGTH),Zt=y.getParameter(y.UNPACK_IMAGE_HEIGHT),tn=y.getParameter(y.UNPACK_SKIP_PIXELS),zi=y.getParameter(y.UNPACK_SKIP_ROWS),ze=y.getParameter(y.UNPACK_SKIP_IMAGES);y.pixelStorei(y.UNPACK_ROW_LENGTH,le.width),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,le.height),y.pixelStorei(y.UNPACK_SKIP_PIXELS,bt),y.pixelStorei(y.UNPACK_SKIP_ROWS,Ot),y.pixelStorei(y.UNPACK_SKIP_IMAGES,Gt);const bs=M.isDataArrayTexture||M.isData3DTexture,ce=U.isDataArrayTexture||U.isData3DTexture;if(M.isRenderTargetTexture||M.isDepthTexture){const fn=j.get(M),As=j.get(U),We=j.get(fn.__renderTarget),Zn=j.get(As.__renderTarget);K.bindFramebuffer(y.READ_FRAMEBUFFER,We.__webglFramebuffer),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,Zn.__webglFramebuffer);for(let Jn=0;Jn<Tt;Jn++)bs&&y.framebufferTextureLayer(y.READ_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(M).__webglTexture,N,Gt+Jn),M.isDepthTexture?(ce&&y.framebufferTextureLayer(y.DRAW_FRAMEBUFFER,y.COLOR_ATTACHMENT0,j.get(U).__webglTexture,N,oe+Jn),y.blitFramebuffer(bt,Ot,ut,xt,At,jt,ut,xt,y.DEPTH_BUFFER_BIT,y.NEAREST)):ce?y.copyTexSubImage3D(wt,N,At,jt,oe+Jn,bt,Ot,ut,xt):y.copyTexSubImage2D(wt,N,At,jt,oe+Jn,bt,Ot,ut,xt);K.bindFramebuffer(y.READ_FRAMEBUFFER,null),K.bindFramebuffer(y.DRAW_FRAMEBUFFER,null)}else ce?M.isDataTexture||M.isData3DTexture?y.texSubImage3D(wt,N,At,jt,oe,ut,xt,Tt,Ie,$t,le.data):U.isCompressedArrayTexture?y.compressedTexSubImage3D(wt,N,At,jt,oe,ut,xt,Tt,Ie,le.data):y.texSubImage3D(wt,N,At,jt,oe,ut,xt,Tt,Ie,$t,le):M.isDataTexture?y.texSubImage2D(y.TEXTURE_2D,N,At,jt,ut,xt,Ie,$t,le.data):M.isCompressedTexture?y.compressedTexSubImage2D(y.TEXTURE_2D,N,At,jt,le.width,le.height,Ie,le.data):y.texSubImage2D(y.TEXTURE_2D,N,At,jt,ut,xt,Ie,$t,le);y.pixelStorei(y.UNPACK_ROW_LENGTH,Pn),y.pixelStorei(y.UNPACK_IMAGE_HEIGHT,Zt),y.pixelStorei(y.UNPACK_SKIP_PIXELS,tn),y.pixelStorei(y.UNPACK_SKIP_ROWS,zi),y.pixelStorei(y.UNPACK_SKIP_IMAGES,ze),N===0&&U.generateMipmaps&&y.generateMipmap(wt),K.unbindTexture()},this.copyTextureToTexture3D=function(M,U,k=null,W=null,N=0){return M.isTexture!==!0&&(Os("WebGLRenderer: copyTextureToTexture3D function signature has changed."),k=arguments[0]||null,W=arguments[1]||null,M=arguments[2],U=arguments[3],N=arguments[4]||0),Os('WebGLRenderer: copyTextureToTexture3D function has been deprecated. Use "copyTextureToTexture" instead.'),this.copyTextureToTexture(M,U,k,W,N)},this.initRenderTarget=function(M){j.get(M).__webglFramebuffer===void 0&&x.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?x.setTextureCube(M,0):M.isData3DTexture?x.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?x.setTexture2DArray(M,0):x.setTexture2D(M,0),K.unbindTexture()},this.resetState=function(){L=0,P=0,F=null,K.reset(),te.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;const e=this.getContext();e.drawingBufferColorspace=Yt._getDrawingBufferColorSpace(t),e.unpackColorSpace=Yt._getUnpackColorSpace()}}class hM extends Se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new wn,this.environmentIntensity=1,this.environmentRotation=new wn,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){const e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(e.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(e.object.backgroundIntensity=this.backgroundIntensity),e.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(e.object.environmentIntensity=this.environmentIntensity),e.object.environmentRotation=this.environmentRotation.toArray(),e}}class Yl extends Es{static get type(){return"LineBasicMaterial"}constructor(t){super(),this.isLineBasicMaterial=!0,this.color=new qt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}}const lo=new B,co=new B,Iu=new he,Us=new Wl,Or=new bo,_a=new B,Uu=new B;class fM extends Se{constructor(t=new Rn,e=new Yl){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)lo.fromBufferAttribute(e,s-1),co.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=lo.distanceTo(co);t.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}raycast(t,e){const i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Or.copy(i.boundingSphere),Or.applyMatrix4(s),Or.radius+=r,t.ray.intersectsSphere(Or)===!1)return;Iu.copy(s).invert(),Us.copy(t.ray).applyMatrix4(Iu);const a=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=this.isLineSegments?2:1,u=i.index,d=i.attributes.position;if(u!==null){const m=Math.max(0,o.start),v=Math.min(u.count,o.start+o.count);for(let _=m,p=v-1;_<p;_+=c){const f=u.getX(_),w=u.getX(_+1),A=Br(this,t,Us,l,f,w);A&&e.push(A)}if(this.isLineLoop){const _=u.getX(v-1),p=u.getX(m),f=Br(this,t,Us,l,_,p);f&&e.push(f)}}else{const m=Math.max(0,o.start),v=Math.min(d.count,o.start+o.count);for(let _=m,p=v-1;_<p;_+=c){const f=Br(this,t,Us,l,_,_+1);f&&e.push(f)}if(this.isLineLoop){const _=Br(this,t,Us,l,v-1,m);_&&e.push(_)}}}updateMorphTargets(){const e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){const s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,o=s.length;r<o;r++){const a=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=r}}}}}function Br(n,t,e,i,s,r){const o=n.geometry.attributes.position;if(lo.fromBufferAttribute(o,s),co.fromBufferAttribute(o,r),e.distanceSqToSegment(lo,co,_a,Uu)>i)return;_a.applyMatrix4(n.matrixWorld);const l=t.ray.origin.distanceTo(_a);if(!(l<t.near||l>t.far))return{distance:l,point:Uu.clone().applyMatrix4(n.matrixWorld),index:s,face:null,faceIndex:null,barycoord:null,object:n}}const Nu=new B,Fu=new B;class Rf extends fM{constructor(t,e){super(t,e),this.isLineSegments=!0,this.type="LineSegments"}computeLineDistances(){const t=this.geometry;if(t.index===null){const e=t.attributes.position,i=[];for(let s=0,r=e.count;s<r;s+=2)Nu.fromBufferAttribute(e,s),Fu.fromBufferAttribute(e,s+1),i[s]=s===0?0:i[s-1],i[s+1]=i[s]+Nu.distanceTo(Fu);t.setAttribute("lineDistance",new Ze(i,1))}else console.warn("THREE.LineSegments.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}}const zr=new B,Hr=new B,ga=new B,Vr=new je;class dM extends Rn{constructor(t=null,e=1){if(super(),this.type="EdgesGeometry",this.parameters={geometry:t,thresholdAngle:e},t!==null){const s=Math.pow(10,4),r=Math.cos(Ys*e),o=t.getIndex(),a=t.getAttribute("position"),l=o?o.count:a.count,c=[0,0,0],u=["a","b","c"],h=new Array(3),d={},m=[];for(let v=0;v<l;v+=3){o?(c[0]=o.getX(v),c[1]=o.getX(v+1),c[2]=o.getX(v+2)):(c[0]=v,c[1]=v+1,c[2]=v+2);const{a:_,b:p,c:f}=Vr;if(_.fromBufferAttribute(a,c[0]),p.fromBufferAttribute(a,c[1]),f.fromBufferAttribute(a,c[2]),Vr.getNormal(ga),h[0]=`${Math.round(_.x*s)},${Math.round(_.y*s)},${Math.round(_.z*s)}`,h[1]=`${Math.round(p.x*s)},${Math.round(p.y*s)},${Math.round(p.z*s)}`,h[2]=`${Math.round(f.x*s)},${Math.round(f.y*s)},${Math.round(f.z*s)}`,!(h[0]===h[1]||h[1]===h[2]||h[2]===h[0]))for(let w=0;w<3;w++){const A=(w+1)%3,S=h[w],z=h[A],L=Vr[u[w]],P=Vr[u[A]],F=`${S}_${z}`,T=`${z}_${S}`;T in d&&d[T]?(ga.dot(d[T].normal)<=r&&(m.push(L.x,L.y,L.z),m.push(P.x,P.y,P.z)),d[T]=null):F in d||(d[F]={index0:c[w],index1:c[A],normal:ga.clone()})}}for(const v in d)if(d[v]){const{index0:_,index1:p}=d[v];zr.fromBufferAttribute(a,_),Hr.fromBufferAttribute(a,p),m.push(zr.x,zr.y,zr.z),m.push(Hr.x,Hr.y,Hr.z)}this.setAttribute("position",new Ze(m,3))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}}class pM extends Es{static get type(){return"MeshStandardMaterial"}constructor(t){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.color=new qt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new qt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=lf,this.normalScale=new Wt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new wn,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}}class Cf extends Se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new qt(t),this.intensity=e}dispose(){}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){const e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,this.groundColor!==void 0&&(e.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(e.object.distance=this.distance),this.angle!==void 0&&(e.object.angle=this.angle),this.decay!==void 0&&(e.object.decay=this.decay),this.penumbra!==void 0&&(e.object.penumbra=this.penumbra),this.shadow!==void 0&&(e.object.shadow=this.shadow.toJSON()),this.target!==void 0&&(e.object.target=this.target.uuid),e}}const va=new he,Ou=new B,Bu=new B;class mM{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Wt(512,512),this.map=null,this.mapPass=null,this.matrix=new he,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xl,this._frameExtents=new Wt(1,1),this._viewportCount=1,this._viewports=[new de(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(t){const e=this.camera,i=this.matrix;Ou.setFromMatrixPosition(t.matrixWorld),e.position.copy(Ou),Bu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Bu),e.updateMatrixWorld(),va.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),this._frustum.setFromProjectionMatrix(va),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(va)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.mapSize.copy(t.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const t={};return this.intensity!==1&&(t.intensity=this.intensity),this.bias!==0&&(t.bias=this.bias),this.normalBias!==0&&(t.normalBias=this.normalBias),this.radius!==1&&(t.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(t.mapSize=this.mapSize.toArray()),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}}class _M extends mM{constructor(){super(new Ef(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class gM extends Cf{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Se.DEFAULT_UP),this.updateMatrix(),this.target=new Se,this.shadow=new _M}dispose(){this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}}class vM extends Cf{constructor(t,e){super(t,e),this.isAmbientLight=!0,this.type="AmbientLight"}}class zu{constructor(t=1,e=0,i=0){return this.radius=t,this.phi=e,this.theta=i,this}set(t,e,i){return this.radius=t,this.phi=e,this.theta=i,this}copy(t){return this.radius=t.radius,this.phi=t.phi,this.theta=t.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(t){return this.setFromCartesianCoords(t.x,t.y,t.z)}setFromCartesianCoords(t,e,i){return this.radius=Math.sqrt(t*t+e*e+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(t,i),this.phi=Math.acos(De(e/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}class xM extends Rf{constructor(t=10,e=10,i=4473924,s=8947848){i=new qt(i),s=new qt(s);const r=e/2,o=t/e,a=t/2,l=[],c=[];for(let d=0,m=0,v=-a;d<=e;d++,v+=o){l.push(-a,0,v,a,0,v),l.push(v,0,-a,v,0,a);const _=d===r?i:s;_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3,_.toArray(c,m),m+=3}const u=new Rn;u.setAttribute("position",new Ze(l,3)),u.setAttribute("color",new Ze(c,3));const h=new Yl({vertexColors:!0,toneMapped:!1});super(u,h),this.type="GridHelper"}dispose(){this.geometry.dispose(),this.material.dispose()}}class MM extends Bi{constructor(t,e=null){super(),this.object=t,this.domElement=e,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(){}disconnect(){}dispose(){}update(){}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Ol}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Ol);const Hu={type:"change"},jl={type:"start"},Pf={type:"end"},Gr=new Wl,Vu=new oi,SM=Math.cos(70*Zm.DEG2RAD),_e=new B,Ne=2*Math.PI,ie={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},xa=1e-6;class EM extends MM{constructor(t,e=null){super(t,e),this.state=ie.NONE,this.enabled=!0,this.target=new B,this.cursor=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:us.ROTATE,MIDDLE:us.DOLLY,RIGHT:us.PAN},this.touches={ONE:os.ROTATE,TWO:os.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this._lastPosition=new B,this._lastQuaternion=new Fi,this._lastTargetPosition=new B,this._quat=new Fi().setFromUnitVectors(t.up,new B(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new zu,this._sphericalDelta=new zu,this._scale=1,this._panOffset=new B,this._rotateStart=new Wt,this._rotateEnd=new Wt,this._rotateDelta=new Wt,this._panStart=new Wt,this._panEnd=new Wt,this._panDelta=new Wt,this._dollyStart=new Wt,this._dollyEnd=new Wt,this._dollyDelta=new Wt,this._dollyDirection=new B,this._mouse=new Wt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TM.bind(this),this._onPointerDown=yM.bind(this),this._onPointerUp=bM.bind(this),this._onContextMenu=LM.bind(this),this._onMouseWheel=RM.bind(this),this._onKeyDown=CM.bind(this),this._onTouchStart=PM.bind(this),this._onTouchMove=DM.bind(this),this._onMouseDown=AM.bind(this),this._onMouseMove=wM.bind(this),this._interceptControlDown=IM.bind(this),this._interceptControlUp=UM.bind(this),this.domElement!==null&&this.connect(),this.update()}connect(){this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents(),this.domElement.getRootNode().removeEventListener("keydown",this._interceptControlDown,{capture:!0}),this.domElement.style.touchAction="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(t){t.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=t}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(Hu),this.update(),this.state=ie.NONE}update(t=null){const e=this.object.position;_e.copy(e).sub(this.target),_e.applyQuaternion(this._quat),this._spherical.setFromVector3(_e),this.autoRotate&&this.state===ie.NONE&&this._rotateLeft(this._getAutoRotationAngle(t)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let i=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(i)&&isFinite(s)&&(i<-Math.PI?i+=Ne:i>Math.PI&&(i-=Ne),s<-Math.PI?s+=Ne:s>Math.PI&&(s-=Ne),i<=s?this._spherical.theta=Math.max(i,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(i+s)/2?Math.max(i,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let r=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const o=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),r=o!=this._spherical.radius}if(_e.setFromSpherical(this._spherical),_e.applyQuaternion(this._quatInverse),e.copy(this.target).add(_e),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let o=null;if(this.object.isPerspectiveCamera){const a=_e.length();o=this._clampDistance(a*this._scale);const l=a-o;this.object.position.addScaledVector(this._dollyDirection,l),this.object.updateMatrixWorld(),r=!!l}else if(this.object.isOrthographicCamera){const a=new B(this._mouse.x,this._mouse.y,0);a.unproject(this.object);const l=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),r=l!==this.object.zoom;const c=new B(this._mouse.x,this._mouse.y,0);c.unproject(this.object),this.object.position.sub(c).add(a),this.object.updateMatrixWorld(),o=_e.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;o!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(o).add(this.object.position):(Gr.origin.copy(this.object.position),Gr.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Gr.direction))<SM?this.object.lookAt(this.target):(Vu.setFromNormalAndCoplanarPoint(this.object.up,this.target),Gr.intersectPlane(Vu,this.target))))}else if(this.object.isOrthographicCamera){const o=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),o!==this.object.zoom&&(this.object.updateProjectionMatrix(),r=!0)}return this._scale=1,this._performCursorZoom=!1,r||this._lastPosition.distanceToSquared(this.object.position)>xa||8*(1-this._lastQuaternion.dot(this.object.quaternion))>xa||this._lastTargetPosition.distanceToSquared(this.target)>xa?(this.dispatchEvent(Hu),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(t){return t!==null?Ne/60*this.autoRotateSpeed*t:Ne/60/60*this.autoRotateSpeed}_getZoomScale(t){const e=Math.abs(t*.01);return Math.pow(.95,this.zoomSpeed*e)}_rotateLeft(t){this._sphericalDelta.theta-=t}_rotateUp(t){this._sphericalDelta.phi-=t}_panLeft(t,e){_e.setFromMatrixColumn(e,0),_e.multiplyScalar(-t),this._panOffset.add(_e)}_panUp(t,e){this.screenSpacePanning===!0?_e.setFromMatrixColumn(e,1):(_e.setFromMatrixColumn(e,0),_e.crossVectors(this.object.up,_e)),_e.multiplyScalar(t),this._panOffset.add(_e)}_pan(t,e){const i=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;_e.copy(s).sub(this.target);let r=_e.length();r*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*t*r/i.clientHeight,this.object.matrix),this._panUp(2*e*r/i.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(t*(this.object.right-this.object.left)/this.object.zoom/i.clientWidth,this.object.matrix),this._panUp(e*(this.object.top-this.object.bottom)/this.object.zoom/i.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(t){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=t:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(t,e){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const i=this.domElement.getBoundingClientRect(),s=t-i.left,r=e-i.top,o=i.width,a=i.height;this._mouse.x=s/o*2-1,this._mouse.y=-(r/a)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(t){return Math.max(this.minDistance,Math.min(this.maxDistance,t))}_handleMouseDownRotate(t){this._rotateStart.set(t.clientX,t.clientY)}_handleMouseDownDolly(t){this._updateZoomParameters(t.clientX,t.clientX),this._dollyStart.set(t.clientX,t.clientY)}_handleMouseDownPan(t){this._panStart.set(t.clientX,t.clientY)}_handleMouseMoveRotate(t){this._rotateEnd.set(t.clientX,t.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(t){this._dollyEnd.set(t.clientX,t.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(t){this._panEnd.set(t.clientX,t.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(t){this._updateZoomParameters(t.clientX,t.clientY),t.deltaY<0?this._dollyIn(this._getZoomScale(t.deltaY)):t.deltaY>0&&this._dollyOut(this._getZoomScale(t.deltaY)),this.update()}_handleKeyDown(t){let e=!1;switch(t.code){case this.keys.UP:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,this.keyPanSpeed),e=!0;break;case this.keys.BOTTOM:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateUp(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(0,-this.keyPanSpeed),e=!0;break;case this.keys.LEFT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(this.keyPanSpeed,0),e=!0;break;case this.keys.RIGHT:t.ctrlKey||t.metaKey||t.shiftKey?this._rotateLeft(-Ne*this.rotateSpeed/this.domElement.clientHeight):this._pan(-this.keyPanSpeed,0),e=!0;break}e&&(t.preventDefault(),this.update())}_handleTouchStartRotate(t){if(this._pointers.length===1)this._rotateStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._rotateStart.set(i,s)}}_handleTouchStartPan(t){if(this._pointers.length===1)this._panStart.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panStart.set(i,s)}}_handleTouchStartDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyStart.set(0,r)}_handleTouchStartDollyPan(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enablePan&&this._handleTouchStartPan(t)}_handleTouchStartDollyRotate(t){this.enableZoom&&this._handleTouchStartDolly(t),this.enableRotate&&this._handleTouchStartRotate(t)}_handleTouchMoveRotate(t){if(this._pointers.length==1)this._rotateEnd.set(t.pageX,t.pageY);else{const i=this._getSecondPointerPosition(t),s=.5*(t.pageX+i.x),r=.5*(t.pageY+i.y);this._rotateEnd.set(s,r)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const e=this.domElement;this._rotateLeft(Ne*this._rotateDelta.x/e.clientHeight),this._rotateUp(Ne*this._rotateDelta.y/e.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(t){if(this._pointers.length===1)this._panEnd.set(t.pageX,t.pageY);else{const e=this._getSecondPointerPosition(t),i=.5*(t.pageX+e.x),s=.5*(t.pageY+e.y);this._panEnd.set(i,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(t){const e=this._getSecondPointerPosition(t),i=t.pageX-e.x,s=t.pageY-e.y,r=Math.sqrt(i*i+s*s);this._dollyEnd.set(0,r),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const o=(t.pageX+e.x)*.5,a=(t.pageY+e.y)*.5;this._updateZoomParameters(o,a)}_handleTouchMoveDollyPan(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enablePan&&this._handleTouchMovePan(t)}_handleTouchMoveDollyRotate(t){this.enableZoom&&this._handleTouchMoveDolly(t),this.enableRotate&&this._handleTouchMoveRotate(t)}_addPointer(t){this._pointers.push(t.pointerId)}_removePointer(t){delete this._pointerPositions[t.pointerId];for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId){this._pointers.splice(e,1);return}}_isTrackingPointer(t){for(let e=0;e<this._pointers.length;e++)if(this._pointers[e]==t.pointerId)return!0;return!1}_trackPointer(t){let e=this._pointerPositions[t.pointerId];e===void 0&&(e=new Wt,this._pointerPositions[t.pointerId]=e),e.set(t.pageX,t.pageY)}_getSecondPointerPosition(t){const e=t.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[e]}_customWheelEvent(t){const e=t.deltaMode,i={clientX:t.clientX,clientY:t.clientY,deltaY:t.deltaY};switch(e){case 1:i.deltaY*=16;break;case 2:i.deltaY*=100;break}return t.ctrlKey&&!this._controlActive&&(i.deltaY*=10),i}}function yM(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.addEventListener("pointermove",this._onPointerMove),this.domElement.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n)))}function TM(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function bM(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.removeEventListener("pointermove",this._onPointerMove),this.domElement.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Pf),this.state=ie.NONE;break;case 1:const t=this._pointers[0],e=this._pointerPositions[t];this._onTouchStart({pointerId:t,pageX:e.x,pageY:e.y});break}}function AM(n){let t;switch(n.button){case 0:t=this.mouseButtons.LEFT;break;case 1:t=this.mouseButtons.MIDDLE;break;case 2:t=this.mouseButtons.RIGHT;break;default:t=-1}switch(t){case us.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=ie.DOLLY;break;case us.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}break;case us.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=ie.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=ie.PAN}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(jl)}function wM(n){switch(this.state){case ie.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case ie.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case ie.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function RM(n){this.enabled===!1||this.enableZoom===!1||this.state!==ie.NONE||(n.preventDefault(),this.dispatchEvent(jl),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(Pf))}function CM(n){this.enabled===!1||this.enablePan===!1||this._handleKeyDown(n)}function PM(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case os.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=ie.TOUCH_ROTATE;break;case os.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=ie.TOUCH_PAN;break;default:this.state=ie.NONE}break;case 2:switch(this.touches.TWO){case os.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=ie.TOUCH_DOLLY_PAN;break;case os.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=ie.TOUCH_DOLLY_ROTATE;break;default:this.state=ie.NONE}break;default:this.state=ie.NONE}this.state!==ie.NONE&&this.dispatchEvent(jl)}function DM(n){switch(this._trackPointer(n),this.state){case ie.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case ie.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case ie.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case ie.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=ie.NONE}}function LM(n){this.enabled!==!1&&n.preventDefault()}function IM(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UM(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const NM=(n,t)=>{const e=n.__vccOpts||n;for(const[i,s]of t)e[i]=s;return e},FM={__name:"BeamView",props:{L:Number,B:Number,H:Number},setup(n){const t=n,e=is(null);let i,s,r,o,a,l,c,u=null;function h(){a&&(a.traverse(v=>{var _,p,f;(_=v.geometry)==null||_.dispose(),(f=(p=v.material)==null?void 0:p.dispose)==null||f.call(p)}),s.remove(a))}function d(){const v=Math.max(+t.L||.1,.01),_=Math.max(+t.B||.01,.001),p=Math.max(+t.H||.01,.001);h(),a=new zs;const f=new ys(v,p,_);a.add(new Sn(f,new pM({color:12618320,roughness:.8}))),a.add(new Rf(new dM(f),new Yl({color:4861714})));const w=new xM(Math.max(v*2,4),Math.max(Math.round(v*2),4),8947848,13421772);w.position.y=-p/2-.001,a.add(w),s.add(a),u!==v&&(r.position.set(v*.7,v*.5,v*.9),o.target.set(0,0,0),o.update(),u=v)}function m(){const v=e.value.clientWidth,_=e.value.clientHeight;i.setSize(v,_),r.aspect=v/_,r.updateProjectionMatrix()}return Ul(()=>{s=new hM,s.background=new qt(16054008),r=new Ye(45,1,.01,1e3),i=new uM({antialias:!0}),e.value.appendChild(i.domElement),o=new EM(r,i.domElement),s.add(new vM(16777215,.7));const v=new gM(16777215,1.2);v.position.set(5,10,7),s.add(v),d(),m(),l=new ResizeObserver(m),l.observe(e.value);const _=()=>{c=requestAnimationFrame(_),o.update(),i.render(s,r)};_()}),ks(()=>[t.L,t.B,t.H],()=>s&&d()),Eh(()=>{cancelAnimationFrame(c),l==null||l.disconnect(),h(),o==null||o.dispose(),i==null||i.dispose()}),(v,_)=>(rn(),pn("div",{ref_key:"el",ref:e,class:"beam3d"},null,512))}},OM=NM(FM,[["__scopeId","data-v-9ca567ca"]]),BM={key:0,class:"center"},zM={key:1,class:"center"},HM={key:2,class:"layout"},VM={class:"panel"},GM={class:"result"},kM={key:0,class:"err"},WM=["disabled"],XM={class:"view"},qM={class:"panel hist"},YM={key:0},jM={key:1},Ma="http://localhost:3000/api",KM={__name:"App",setup(n){const t=is("checking"),e=$s({name:"",email:""}),i=$s({L:6,B:.1,H:.3,f:2e4}),s=is(null),r=is(""),o=is([]),a=is("");async function l(){await window.api.checkLicense({name:e.name,email:e.email})&&(localStorage.setItem("user",JSON.stringify({name:e.name,email:e.email})),t.value="app",h(),m())}Ul(()=>{const v=localStorage.getItem("user");v?(Object.assign(e,JSON.parse(v)),l()):t.value="login"});function c(){localStorage.removeItem("user"),e.name="",e.email="",s.value=null,t.value="login"}let u;async function h(){try{const v=await fetch(`${Ma}/calculate`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(i)}),_=await v.json();v.ok?(r.value="",s.value=_):(r.value=_.error,s.value=null)}catch{r.value="Nav savienojuma ar serveri."}}ks(i,()=>{clearTimeout(u),u=setTimeout(h,200)});async function d(){const v=await fetch(`${Ma}/calculations`,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({...i,email:e.email})});a.value=v.ok?"Saglabāts datubāzē.":"Saglabāt neizdevās.",v.ok&&m()}async function m(){try{o.value=await(await fetch(`${Ma}/calculations`)).json()}catch{}}return(v,_)=>t.value==="checking"?(rn(),pn("main",BM,"Pārbauda licenci…")):t.value==="login"?(rn(),pn("main",zM,[It("form",{class:"panel login",onSubmit:im(l,["prevent"])},[_[8]||(_[8]=It("h1",null,"Licences pārbaude",-1)),It("label",null,[_[6]||(_[6]=bi("Vārds ",-1)),Vi(It("input",{"onUpdate:modelValue":_[0]||(_[0]=p=>e.name=p),required:""},null,512),[[Gi,e.name]])]),It("label",null,[_[7]||(_[7]=bi("E-pasts ",-1)),Vi(It("input",{"onUpdate:modelValue":_[1]||(_[1]=p=>e.email=p),type:"email",required:""},null,512),[[Gi,e.email]])]),_[9]||(_[9]=It("button",null,"Turpināt",-1)),_[10]||(_[10]=It("small",null,"Testam: Test User / test@example.com",-1))],32)])):(rn(),pn("main",HM,[It("section",VM,[_[16]||(_[16]=It("h1",null,"Koka sijas nestspēja",-1)),It("small",null,Ge(e.name)+" ("+Ge(e.email)+")",1),It("button",{onClick:c},"Iziet"),It("label",null,[_[11]||(_[11]=bi("Sijas garums, L (m) ",-1)),Vi(It("input",{"onUpdate:modelValue":_[2]||(_[2]=p=>i.L=p),type:"number",step:"0.1",min:"0.1"},null,512),[[Gi,i.L,void 0,{number:!0}]])]),It("label",null,[_[12]||(_[12]=bi("Sijas platums, B (m) ",-1)),Vi(It("input",{"onUpdate:modelValue":_[3]||(_[3]=p=>i.B=p),type:"number",step:"0.01",min:"0.01"},null,512),[[Gi,i.B,void 0,{number:!0}]])]),It("label",null,[_[13]||(_[13]=bi("Sijas augstums, H (m) ",-1)),Vi(It("input",{"onUpdate:modelValue":_[4]||(_[4]=p=>i.H=p),type:"number",step:"0.01",min:"0.01"},null,512),[[Gi,i.H,void 0,{number:!0}]])]),It("label",null,[_[14]||(_[14]=bi("Stiprība, f (kPa) ",-1)),Vi(It("input",{"onUpdate:modelValue":_[5]||(_[5]=p=>i.f=p),type:"number",step:"500",min:"1"},null,512),[[Gi,i.f,void 0,{number:!0}]])]),It("div",GM,[r.value?(rn(),pn("div",kM,Ge(r.value),1)):s.value?(rn(),pn(on,{key:1},[It("span",null,"Pretestības moments W = "+Ge(s.value.W.toFixed(6))+" m³",1),It("strong",null,"q = "+Ge(s.value.q.toFixed(2))+" kN/m",1),_[15]||(_[15]=It("span",null,"pieļaujamā izkliedētā slodze uz sijas",-1))],64)):xp("",!0)]),It("button",{disabled:!s.value,onClick:d},"Saglabāt datubāzē",8,WM),It("small",null,Ge(a.value),1)]),It("section",XM,[yn(OM,{L:i.L,B:i.B,H:i.H},null,8,["L","B","H"])]),It("section",qM,[_[18]||(_[18]=It("h2",null,"Saglabātie aprēķini",-1)),o.value.length?(rn(),pn("table",jM,[_[17]||(_[17]=It("thead",null,[It("tr",null,[It("th",null,"Datums"),It("th",null,"L"),It("th",null,"B"),It("th",null,"H"),It("th",null,"f"),It("th",null,"q, kN/m")])],-1)),It("tbody",null,[(rn(!0),pn(on,null,kd(o.value,p=>(rn(),pn("tr",{key:p.id},[It("td",null,Ge(p.created_at),1),It("td",null,Ge(p.length),1),It("td",null,Ge(p.width),1),It("td",null,Ge(p.height),1),It("td",null,Ge(p.strength),1),It("td",null,Ge(p.q.toFixed(2)),1)]))),128))])])):(rn(),pn("p",YM,"Vēl nav saglabātu aprēķinu."))])]))}};om(KM).mount("#app");
