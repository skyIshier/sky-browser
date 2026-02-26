/**
* @vue/shared v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Hc(t,e){const n=new Set(t.split(","));return e?i=>n.has(i.toLowerCase()):i=>n.has(i)}const rt={},Dr=[],on=()=>{},b_=()=>!1,Hs=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),zc=t=>t.startsWith("onUpdate:"),gt=Object.assign,Vc=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},T_=Object.prototype.hasOwnProperty,Ye=(t,e)=>T_.call(t,e),Ue=Array.isArray,Ir=t=>zs(t)==="[object Map]",up=t=>zs(t)==="[object Set]",w_=t=>zs(t)==="[object RegExp]",Ne=t=>typeof t=="function",ot=t=>typeof t=="string",Qr=t=>typeof t=="symbol",nt=t=>t!==null&&typeof t=="object",fp=t=>(nt(t)||Ne(t))&&Ne(t.then)&&Ne(t.catch),dp=Object.prototype.toString,zs=t=>dp.call(t),A_=t=>zs(t).slice(8,-1),hp=t=>zs(t)==="[object Object]",Gc=t=>ot(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,Ur=Hc(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),xa=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},R_=/-(\w)/g,Rn=xa(t=>t.replace(R_,(e,n)=>n?n.toUpperCase():"")),C_=/\B([A-Z])/g,es=xa(t=>t.replace(C_,"-$1").toLowerCase()),Vs=xa(t=>t.charAt(0).toUpperCase()+t.slice(1)),$a=xa(t=>t?`on${Vs(t)}`:""),bi=(t,e)=>!Object.is(t,e),gs=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},Qo=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},P_=t=>{const e=parseFloat(t);return isNaN(e)?t:e},pp=t=>{const e=ot(t)?Number(t):NaN;return isNaN(e)?t:e};let Gu;const mp=()=>Gu||(Gu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function Ma(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++){const i=t[n],r=ot(i)?U_(i):Ma(i);if(r)for(const s in r)e[s]=r[s]}return e}else if(ot(t)||nt(t))return t}const L_=/;(?![^(]*\))/g,D_=/:([^]+)/,I_=/\/\*[^]*?\*\//g;function U_(t){const e={};return t.replace(I_,"").split(L_).forEach(n=>{if(n){const i=n.split(D_);i.length>1&&(e[i[0].trim()]=i[1].trim())}}),e}function Ea(t){let e="";if(ot(t))e=t;else if(Ue(t))for(let n=0;n<t.length;n++){const i=Ea(t[n]);i&&(e+=i+" ")}else if(nt(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}function N_(t){if(!t)return null;let{class:e,style:n}=t;return e&&!ot(e)&&(t.class=Ea(e)),n&&(t.style=Ma(n)),t}const O_="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",F_=Hc(O_);function gp(t){return!!t||t===""}const qP=t=>ot(t)?t:t==null?"":Ue(t)||nt(t)&&(t.toString===dp||!Ne(t.toString))?JSON.stringify(t,_p,2):String(t),_p=(t,e)=>e&&e.__v_isRef?_p(t,e.value):Ir(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[i,r],s)=>(n[qa(i,s)+" =>"]=r,n),{})}:up(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>qa(n))}:Qr(e)?qa(e):nt(e)&&!Ue(e)&&!hp(e)?String(e):e,qa=(t,e="")=>{var n;return Qr(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Zt;class vp{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Zt,!e&&Zt&&(this.index=(Zt.scopes||(Zt.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Zt;try{return Zt=this,e()}finally{Zt=n}}}on(){Zt=this}off(){Zt=this.parent}stop(e){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const r=this.parent.scopes.pop();r&&r!==this&&(this.parent.scopes[this.index]=r,r.index=this.index)}this.parent=void 0,this._active=!1}}}function Sa(t){return new vp(t)}function B_(t,e=Zt){e&&e.active&&e.effects.push(t)}function yp(){return Zt}function xp(t){Zt&&Zt.cleanups.push(t)}let Gi;class Wc{constructor(e,n,i,r){this.fn=e,this.trigger=n,this.scheduler=i,this.active=!0,this.deps=[],this._dirtyLevel=4,this._trackId=0,this._runnings=0,this._shouldSchedule=!1,this._depsLength=0,B_(this,r)}get dirty(){if(this._dirtyLevel===2||this._dirtyLevel===3){this._dirtyLevel=1,nr();for(let e=0;e<this._depsLength;e++){const n=this.deps[e];if(n.computed&&(k_(n.computed),this._dirtyLevel>=4))break}this._dirtyLevel===1&&(this._dirtyLevel=0),ir()}return this._dirtyLevel>=4}set dirty(e){this._dirtyLevel=e?4:0}run(){if(this._dirtyLevel=0,!this.active)return this.fn();let e=yi,n=Gi;try{return yi=!0,Gi=this,this._runnings++,Wu(this),this.fn()}finally{Xu(this),this._runnings--,Gi=n,yi=e}}stop(){var e;this.active&&(Wu(this),Xu(this),(e=this.onStop)==null||e.call(this),this.active=!1)}}function k_(t){return t.value}function Wu(t){t._trackId++,t._depsLength=0}function Xu(t){if(t.deps.length>t._depsLength){for(let e=t._depsLength;e<t.deps.length;e++)Mp(t.deps[e],t);t.deps.length=t._depsLength}}function Mp(t,e){const n=t.get(e);n!==void 0&&e._trackId!==n&&(t.delete(e),t.size===0&&t.cleanup())}let yi=!0,Yl=0;const Ep=[];function nr(){Ep.push(yi),yi=!1}function ir(){const t=Ep.pop();yi=t===void 0?!0:t}function Xc(){Yl++}function jc(){for(Yl--;!Yl&&Kl.length;)Kl.shift()()}function Sp(t,e,n){if(e.get(t)!==t._trackId){e.set(t,t._trackId);const i=t.deps[t._depsLength];i!==e?(i&&Mp(i,t),t.deps[t._depsLength++]=e):t._depsLength++}}const Kl=[];function bp(t,e,n){Xc();for(const i of t.keys()){let r;i._dirtyLevel<e&&(r??(r=t.get(i)===i._trackId))&&(i._shouldSchedule||(i._shouldSchedule=i._dirtyLevel===0),i._dirtyLevel=e),i._shouldSchedule&&(r??(r=t.get(i)===i._trackId))&&(i.trigger(),(!i._runnings||i.allowRecurse)&&i._dirtyLevel!==2&&(i._shouldSchedule=!1,i.scheduler&&Kl.push(i.scheduler)))}jc()}const Tp=(t,e)=>{const n=new Map;return n.cleanup=t,n.computed=e,n},ea=new WeakMap,Wi=Symbol(""),Zl=Symbol("");function jt(t,e,n){if(yi&&Gi){let i=ea.get(t);i||ea.set(t,i=new Map);let r=i.get(n);r||i.set(n,r=Tp(()=>i.delete(n))),Sp(Gi,r)}}function Yn(t,e,n,i,r,s){const o=ea.get(t);if(!o)return;let a=[];if(e==="clear")a=[...o.values()];else if(n==="length"&&Ue(t)){const l=Number(i);o.forEach((c,u)=>{(u==="length"||!Qr(u)&&u>=l)&&a.push(c)})}else switch(n!==void 0&&a.push(o.get(n)),e){case"add":Ue(t)?Gc(n)&&a.push(o.get("length")):(a.push(o.get(Wi)),Ir(t)&&a.push(o.get(Zl)));break;case"delete":Ue(t)||(a.push(o.get(Wi)),Ir(t)&&a.push(o.get(Zl)));break;case"set":Ir(t)&&a.push(o.get(Wi));break}Xc();for(const l of a)l&&bp(l,4);jc()}function H_(t,e){var n;return(n=ea.get(t))==null?void 0:n.get(e)}const z_=Hc("__proto__,__v_isRef,__isVue"),wp=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Qr)),ju=V_();function V_(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const i=je(this);for(let s=0,o=this.length;s<o;s++)jt(i,"get",s+"");const r=i[e](...n);return r===-1||r===!1?i[e](...n.map(je)):r}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){nr(),Xc();const i=je(this)[e].apply(this,n);return jc(),ir(),i}}),t}function G_(t){const e=je(this);return jt(e,"has",t),e.hasOwnProperty(t)}class Ap{constructor(e=!1,n=!1){this._isReadonly=e,this._shallow=n}get(e,n,i){const r=this._isReadonly,s=this._shallow;if(n==="__v_isReactive")return!r;if(n==="__v_isReadonly")return r;if(n==="__v_isShallow")return s;if(n==="__v_raw")return i===(r?s?nv:Lp:s?Pp:Cp).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(i)?e:void 0;const o=Ue(e);if(!r){if(o&&Ye(ju,n))return Reflect.get(ju,n,i);if(n==="hasOwnProperty")return G_}const a=Reflect.get(e,n,i);return(Qr(n)?wp.has(n):z_(n))||(r||jt(e,"get",n),s)?a:_t(a)?o&&Gc(n)?a:a.value:nt(a)?r?Yc(a):vt(a):a}}class Rp extends Ap{constructor(e=!1){super(!1,e)}set(e,n,i,r){let s=e[n];if(!this._shallow){const l=Ji(s);if(!ta(i)&&!Ji(i)&&(s=je(s),i=je(i)),!Ue(e)&&_t(s)&&!_t(i))return l?!1:(s.value=i,!0)}const o=Ue(e)&&Gc(n)?Number(n)<e.length:Ye(e,n),a=Reflect.set(e,n,i,r);return e===je(r)&&(o?bi(i,s)&&Yn(e,"set",n,i):Yn(e,"add",n,i)),a}deleteProperty(e,n){const i=Ye(e,n);e[n];const r=Reflect.deleteProperty(e,n);return r&&i&&Yn(e,"delete",n,void 0),r}has(e,n){const i=Reflect.has(e,n);return(!Qr(n)||!wp.has(n))&&jt(e,"has",n),i}ownKeys(e){return jt(e,"iterate",Ue(e)?"length":Wi),Reflect.ownKeys(e)}}class W_ extends Ap{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const X_=new Rp,j_=new W_,$_=new Rp(!0),$c=t=>t,ba=t=>Reflect.getPrototypeOf(t);function ao(t,e,n=!1,i=!1){t=t.__v_raw;const r=je(t),s=je(e);n||(bi(e,s)&&jt(r,"get",e),jt(r,"get",s));const{has:o}=ba(r),a=i?$c:n?Zc:As;if(o.call(r,e))return a(t.get(e));if(o.call(r,s))return a(t.get(s));t!==r&&t.get(e)}function lo(t,e=!1){const n=this.__v_raw,i=je(n),r=je(t);return e||(bi(t,r)&&jt(i,"has",t),jt(i,"has",r)),t===r?n.has(t):n.has(t)||n.has(r)}function co(t,e=!1){return t=t.__v_raw,!e&&jt(je(t),"iterate",Wi),Reflect.get(t,"size",t)}function $u(t){t=je(t);const e=je(this);return ba(e).has.call(e,t)||(e.add(t),Yn(e,"add",t,t)),this}function qu(t,e){e=je(e);const n=je(this),{has:i,get:r}=ba(n);let s=i.call(n,t);s||(t=je(t),s=i.call(n,t));const o=r.call(n,t);return n.set(t,e),s?bi(e,o)&&Yn(n,"set",t,e):Yn(n,"add",t,e),this}function Yu(t){const e=je(this),{has:n,get:i}=ba(e);let r=n.call(e,t);r||(t=je(t),r=n.call(e,t)),i&&i.call(e,t);const s=e.delete(t);return r&&Yn(e,"delete",t,void 0),s}function Ku(){const t=je(this),e=t.size!==0,n=t.clear();return e&&Yn(t,"clear",void 0,void 0),n}function uo(t,e){return function(i,r){const s=this,o=s.__v_raw,a=je(o),l=e?$c:t?Zc:As;return!t&&jt(a,"iterate",Wi),o.forEach((c,u)=>i.call(r,l(c),l(u),s))}}function fo(t,e,n){return function(...i){const r=this.__v_raw,s=je(r),o=Ir(s),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=r[t](...i),u=n?$c:e?Zc:As;return!e&&jt(s,"iterate",l?Zl:Wi),{next(){const{value:f,done:d}=c.next();return d?{value:f,done:d}:{value:a?[u(f[0]),u(f[1])]:u(f),done:d}},[Symbol.iterator](){return this}}}}function ei(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function q_(){const t={get(s){return ao(this,s)},get size(){return co(this)},has:lo,add:$u,set:qu,delete:Yu,clear:Ku,forEach:uo(!1,!1)},e={get(s){return ao(this,s,!1,!0)},get size(){return co(this)},has:lo,add:$u,set:qu,delete:Yu,clear:Ku,forEach:uo(!1,!0)},n={get(s){return ao(this,s,!0)},get size(){return co(this,!0)},has(s){return lo.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:uo(!0,!1)},i={get(s){return ao(this,s,!0,!0)},get size(){return co(this,!0)},has(s){return lo.call(this,s,!0)},add:ei("add"),set:ei("set"),delete:ei("delete"),clear:ei("clear"),forEach:uo(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(s=>{t[s]=fo(s,!1,!1),n[s]=fo(s,!0,!1),e[s]=fo(s,!1,!0),i[s]=fo(s,!0,!0)}),[t,n,e,i]}const[Y_,K_,Z_,J_]=q_();function qc(t,e){const n=e?t?J_:Z_:t?K_:Y_;return(i,r,s)=>r==="__v_isReactive"?!t:r==="__v_isReadonly"?t:r==="__v_raw"?i:Reflect.get(Ye(n,r)&&r in i?n:i,r,s)}const Q_={get:qc(!1,!1)},ev={get:qc(!1,!0)},tv={get:qc(!0,!1)},Cp=new WeakMap,Pp=new WeakMap,Lp=new WeakMap,nv=new WeakMap;function iv(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function rv(t){return t.__v_skip||!Object.isExtensible(t)?0:iv(A_(t))}function vt(t){return Ji(t)?t:Kc(t,!1,X_,Q_,Cp)}function Gs(t){return Kc(t,!1,$_,ev,Pp)}function Yc(t){return Kc(t,!0,j_,tv,Lp)}function Kc(t,e,n,i,r){if(!nt(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const s=r.get(t);if(s)return s;const o=rv(t);if(o===0)return t;const a=new Proxy(t,o===2?i:n);return r.set(t,a),a}function xi(t){return Ji(t)?xi(t.__v_raw):!!(t&&t.__v_isReactive)}function Ji(t){return!!(t&&t.__v_isReadonly)}function ta(t){return!!(t&&t.__v_isShallow)}function Dp(t){return xi(t)||Ji(t)}function je(t){const e=t&&t.__v_raw;return e?je(e):t}function Ta(t){return Object.isExtensible(t)&&Qo(t,"__v_skip",!0),t}const As=t=>nt(t)?vt(t):t,Zc=t=>nt(t)?Yc(t):t;class Ip{constructor(e,n,i,r){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this.effect=new Wc(()=>e(this._value),()=>Wo(this,this.effect._dirtyLevel===2?2:3)),this.effect.computed=this,this.effect.active=this._cacheable=!r,this.__v_isReadonly=i}get value(){const e=je(this);return(!e._cacheable||e.effect.dirty)&&bi(e._value,e._value=e.effect.run())&&Wo(e,4),Up(e),e.effect._dirtyLevel>=2&&Wo(e,2),e._value}set value(e){this._setter(e)}get _dirty(){return this.effect.dirty}set _dirty(e){this.effect.dirty=e}}function sv(t,e,n=!1){let i,r;const s=Ne(t);return s?(i=t,r=on):(i=t.get,r=t.set),new Ip(i,r,s||!r,n)}function Up(t){var e;yi&&Gi&&(t=je(t),Sp(Gi,(e=t.dep)!=null?e:t.dep=Tp(()=>t.dep=void 0,t instanceof Ip?t:void 0)))}function Wo(t,e=4,n){t=je(t);const i=t.dep;i&&bp(i,e)}function _t(t){return!!(t&&t.__v_isRef===!0)}function ct(t){return Np(t,!1)}function en(t){return Np(t,!0)}function Np(t,e){return _t(t)?t:new ov(t,e)}class ov{constructor(e,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?e:je(e),this._value=n?e:As(e)}get value(){return Up(this),this._value}set value(e){const n=this.__v_isShallow||ta(e)||Ji(e);e=n?e:je(e),bi(e,this._rawValue)&&(this._rawValue=e,this._value=n?e:As(e),Wo(this,4))}}function Ze(t){return _t(t)?t.value:t}const av={get:(t,e,n)=>Ze(Reflect.get(t,e,n)),set:(t,e,n,i)=>{const r=t[e];return _t(r)&&!_t(n)?(r.value=n,!0):Reflect.set(t,e,n,i)}};function Op(t){return xi(t)?t:new Proxy(t,av)}function Jc(t){const e=Ue(t)?new Array(t.length):{};for(const n in t)e[n]=Fp(t,n);return e}class lv{constructor(e,n,i){this._object=e,this._key=n,this._defaultValue=i,this.__v_isRef=!0}get value(){const e=this._object[this._key];return e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return H_(je(this._object),this._key)}}class cv{constructor(e){this._getter=e,this.__v_isRef=!0,this.__v_isReadonly=!0}get value(){return this._getter()}}function uv(t,e,n){return _t(t)?t:Ne(t)?new cv(t):nt(t)&&arguments.length>1?Fp(t,e,n):ct(t)}function Fp(t,e,n){const i=t[e];return _t(i)?i:new lv(t,e,n)}/**
* @vue/runtime-core v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Mi(t,e,n,i){try{return i?t(...i):t()}catch(r){ts(r,e,n)}}function cn(t,e,n,i){if(Ne(t)){const s=Mi(t,e,n,i);return s&&fp(s)&&s.catch(o=>{ts(o,e,n)}),s}const r=[];for(let s=0;s<t.length;s++)r.push(cn(t[s],e,n,i));return r}function ts(t,e,n,i=!0){const r=e?e.vnode:null;if(e){let s=e.parent;const o=e.proxy,a=`https://vuejs.org/error-reference/#runtime-${n}`;for(;s;){const c=s.ec;if(c){for(let u=0;u<c.length;u++)if(c[u](t,o,a)===!1)return}s=s.parent}const l=e.appContext.config.errorHandler;if(l){Mi(l,null,10,[t,o,a]);return}}fv(t,n,r,i)}function fv(t,e,n,i=!0){console.error(t)}let Rs=!1,Jl=!1;const It=[];let wn=0;const Nr=[];let ui=null,Hi=0;const Bp=Promise.resolve();let Qc=null;function wi(t){const e=Qc||Bp;return t?e.then(this?t.bind(this):t):e}function dv(t){let e=wn+1,n=It.length;for(;e<n;){const i=e+n>>>1,r=It[i],s=Cs(r);s<t||s===t&&r.pre?e=i+1:n=i}return e}function wa(t){(!It.length||!It.includes(t,Rs&&t.allowRecurse?wn+1:wn))&&(t.id==null?It.push(t):It.splice(dv(t.id),0,t),kp())}function kp(){!Rs&&!Jl&&(Jl=!0,Qc=Bp.then(Hp))}function hv(t){const e=It.indexOf(t);e>wn&&It.splice(e,1)}function Ql(t){Ue(t)?Nr.push(...t):(!ui||!ui.includes(t,t.allowRecurse?Hi+1:Hi))&&Nr.push(t),kp()}function Zu(t,e,n=Rs?wn+1:0){for(;n<It.length;n++){const i=It[n];if(i&&i.pre){if(t&&i.id!==t.uid)continue;It.splice(n,1),n--,i()}}}function na(t){if(Nr.length){const e=[...new Set(Nr)].sort((n,i)=>Cs(n)-Cs(i));if(Nr.length=0,ui){ui.push(...e);return}for(ui=e,Hi=0;Hi<ui.length;Hi++)ui[Hi]();ui=null,Hi=0}}const Cs=t=>t.id==null?1/0:t.id,pv=(t,e)=>{const n=Cs(t)-Cs(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function Hp(t){Jl=!1,Rs=!0,It.sort(pv);try{for(wn=0;wn<It.length;wn++){const e=It[wn];e&&e.active!==!1&&Mi(e,null,14)}}finally{wn=0,It.length=0,na(),Rs=!1,Qc=null,(It.length||Nr.length)&&Hp()}}function mv(t,e,...n){if(t.isUnmounted)return;const i=t.vnode.props||rt;let r=n;const s=e.startsWith("update:"),o=s&&e.slice(7);if(o&&o in i){const u=`${o==="modelValue"?"model":o}Modifiers`,{number:f,trim:d}=i[u]||rt;d&&(r=n.map(h=>ot(h)?h.trim():h)),f&&(r=n.map(P_))}let a,l=i[a=$a(e)]||i[a=$a(Rn(e))];!l&&s&&(l=i[a=$a(es(e))]),l&&cn(l,t,6,r);const c=i[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,cn(c,t,6,r)}}function zp(t,e,n=!1){const i=e.emitsCache,r=i.get(t);if(r!==void 0)return r;const s=t.emits;let o={},a=!1;if(!Ne(t)){const l=c=>{const u=zp(c,e,!0);u&&(a=!0,gt(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!s&&!a?(nt(t)&&i.set(t,null),null):(Ue(s)?s.forEach(l=>o[l]=null):gt(o,s),nt(t)&&i.set(t,o),o)}function Aa(t,e){return!t||!Hs(e)?!1:(e=e.slice(2).replace(/Once$/,""),Ye(t,e[0].toLowerCase()+e.slice(1))||Ye(t,es(e))||Ye(t,e))}let mt=null,Ra=null;function ia(t){const e=mt;return mt=t,Ra=t&&t.type.__scopeId||null,e}function YP(t){Ra=t}function KP(){Ra=null}function ra(t,e=mt,n){if(!e||t._n)return t;const i=(...r)=>{i._d&&df(-1);const s=ia(e);let o;try{o=t(...r)}finally{ia(s),i._d&&df(1)}return o};return i._n=!0,i._c=!0,i._d=!0,i}function Ya(t){const{type:e,vnode:n,proxy:i,withProxy:r,props:s,propsOptions:[o],slots:a,attrs:l,emit:c,render:u,renderCache:f,data:d,setupState:h,ctx:g,inheritAttrs:v}=t;let m,p;const M=ia(t);try{if(n.shapeFlag&4){const S=r||i,x=S;m=rn(u.call(x,S,f,s,h,d,g)),p=l}else{const S=e;m=rn(S.length>1?S(s,{attrs:l,slots:a,emit:c}):S(s,null)),p=e.props?l:_v(l)}}catch(S){vs.length=0,ts(S,t,1),m=$e(Ht)}let _=m;if(p&&v!==!1){const S=Object.keys(p),{shapeFlag:x}=_;S.length&&x&7&&(o&&S.some(zc)&&(p=vv(p,o)),_=Zn(_,p))}return n.dirs&&(_=Zn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),m=_,ia(M),m}function gv(t,e=!0){let n;for(let i=0;i<t.length;i++){const r=t[i];if(Gr(r)){if(r.type!==Ht||r.children==="v-if"){if(n)return;n=r}}else return}return n}const _v=t=>{let e;for(const n in t)(n==="class"||n==="style"||Hs(n))&&((e||(e={}))[n]=t[n]);return e},vv=(t,e)=>{const n={};for(const i in t)(!zc(i)||!(i.slice(9)in e))&&(n[i]=t[i]);return n};function yv(t,e,n){const{props:i,children:r,component:s}=t,{props:o,children:a,patchFlag:l}=e,c=s.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return i?Ju(i,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let f=0;f<u.length;f++){const d=u[f];if(o[d]!==i[d]&&!Aa(c,d))return!0}}}else return(r||a)&&(!a||!a.$stable)?!0:i===o?!1:i?o?Ju(i,o,c):!0:!!o;return!1}function Ju(t,e,n){const i=Object.keys(e);if(i.length!==Object.keys(t).length)return!0;for(let r=0;r<i.length;r++){const s=i[r];if(e[s]!==t[s]&&!Aa(n,s))return!0}return!1}function eu({vnode:t,parent:e},n){for(;e;){const i=e.subTree;if(i.suspense&&i.suspense.activeBranch===t&&(i.el=t.el),i===t)(t=e.vnode).el=n,e=e.parent;else break}}const tu="components",xv="directives";function ZP(t,e){return nu(tu,t,!0,e)||t}const Vp=Symbol.for("v-ndc");function Mv(t){return ot(t)?nu(tu,t,!1)||t:t||Vp}function JP(t){return nu(xv,t)}function nu(t,e,n=!0,i=!1){const r=mt||yt;if(r){const s=r.type;if(t===tu){const a=ac(s,!1);if(a&&(a===e||a===Rn(e)||a===Vs(Rn(e))))return s}const o=Qu(r[t]||s[t],e)||Qu(r.appContext[t],e);return!o&&i?s:o}}function Qu(t,e){return t&&(t[e]||t[Rn(e)]||t[Vs(Rn(e))])}const Gp=t=>t.__isSuspense;let ec=0;const Ev={name:"Suspense",__isSuspense:!0,process(t,e,n,i,r,s,o,a,l,c){if(t==null)Sv(e,n,i,r,s,o,a,l,c);else{if(s&&s.deps>0){e.suspense=t.suspense;return}bv(t,e,n,i,r,o,a,l,c)}},hydrate:Tv,create:ru,normalize:wv},iu=Ev;function Ps(t,e){const n=t.props&&t.props[e];Ne(n)&&n()}function Sv(t,e,n,i,r,s,o,a,l){const{p:c,o:{createElement:u}}=l,f=u("div"),d=t.suspense=ru(t,r,i,e,f,n,s,o,a,l);c(null,d.pendingBranch=t.ssContent,f,null,i,d,s,o),d.deps>0?(Ps(t,"onPending"),Ps(t,"onFallback"),c(null,t.ssFallback,e,n,i,null,s,o),Or(d,t.ssFallback)):d.resolve(!1,!0)}function bv(t,e,n,i,r,s,o,a,{p:l,um:c,o:{createElement:u}}){const f=e.suspense=t.suspense;f.vnode=e,e.el=t.el;const d=e.ssContent,h=e.ssFallback,{activeBranch:g,pendingBranch:v,isInFallback:m,isHydrating:p}=f;if(v)f.pendingBranch=d,yn(d,v)?(l(v,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():m&&(p||(l(g,h,n,i,r,null,s,o,a),Or(f,h)))):(f.pendingId=ec++,p?(f.isHydrating=!1,f.activeBranch=v):c(v,r,f),f.deps=0,f.effects.length=0,f.hiddenContainer=u("div"),m?(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0?f.resolve():(l(g,h,n,i,r,null,s,o,a),Or(f,h))):g&&yn(d,g)?(l(g,d,n,i,r,f,s,o,a),f.resolve(!0)):(l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0&&f.resolve()));else if(g&&yn(d,g))l(g,d,n,i,r,f,s,o,a),Or(f,d);else if(Ps(e,"onPending"),f.pendingBranch=d,d.shapeFlag&512?f.pendingId=d.component.suspenseId:f.pendingId=ec++,l(null,d,f.hiddenContainer,null,r,f,s,o,a),f.deps<=0)f.resolve();else{const{timeout:M,pendingId:_}=f;M>0?setTimeout(()=>{f.pendingId===_&&f.fallback(h)},M):M===0&&f.fallback(h)}}function ru(t,e,n,i,r,s,o,a,l,c,u=!1){const{p:f,m:d,um:h,n:g,o:{parentNode:v,remove:m}}=c;let p;const M=Av(t);M&&e!=null&&e.pendingBranch&&(p=e.pendingId,e.deps++);const _=t.props?pp(t.props.timeout):void 0,S=s,x={vnode:t,parent:e,parentComponent:n,namespace:o,container:i,hiddenContainer:r,deps:0,pendingId:ec++,timeout:typeof _=="number"?_:-1,activeBranch:null,pendingBranch:null,isInFallback:!u,isHydrating:u,isUnmounted:!1,effects:[],resolve(T=!1,L=!1){const{vnode:C,activeBranch:y,pendingBranch:b,pendingId:F,effects:B,parentComponent:I,container:G}=x;let X=!1;x.isHydrating?x.isHydrating=!1:T||(X=y&&b.transition&&b.transition.mode==="out-in",X&&(y.transition.afterLeave=()=>{F===x.pendingId&&(d(b,G,s===S?g(y):s,0),Ql(B))}),y&&(v(y.el)!==x.hiddenContainer&&(s=g(y)),h(y,I,x,!0)),X||d(b,G,s,0)),Or(x,b),x.pendingBranch=null,x.isInFallback=!1;let V=x.parent,W=!1;for(;V;){if(V.pendingBranch){V.effects.push(...B),W=!0;break}V=V.parent}!W&&!X&&Ql(B),x.effects=[],M&&e&&e.pendingBranch&&p===e.pendingId&&(e.deps--,e.deps===0&&!L&&e.resolve()),Ps(C,"onResolve")},fallback(T){if(!x.pendingBranch)return;const{vnode:L,activeBranch:C,parentComponent:y,container:b,namespace:F}=x;Ps(L,"onFallback");const B=g(C),I=()=>{x.isInFallback&&(f(null,T,b,B,y,null,F,a,l),Or(x,T))},G=T.transition&&T.transition.mode==="out-in";G&&(C.transition.afterLeave=I),x.isInFallback=!0,h(C,y,null,!0),G||I()},move(T,L,C){x.activeBranch&&d(x.activeBranch,T,L,C),x.container=T},next(){return x.activeBranch&&g(x.activeBranch)},registerDep(T,L){const C=!!x.pendingBranch;C&&x.deps++;const y=T.vnode.el;T.asyncDep.catch(b=>{ts(b,T,0)}).then(b=>{if(T.isUnmounted||x.isUnmounted||x.pendingId!==T.suspenseId)return;T.asyncResolved=!0;const{vnode:F}=T;oc(T,b,!1),y&&(F.el=y);const B=!y&&T.subTree.el;L(T,F,v(y||T.subTree.el),y?null:g(T.subTree),x,o,l),B&&m(B),eu(T,F.el),C&&--x.deps===0&&x.resolve()})},unmount(T,L){x.isUnmounted=!0,x.activeBranch&&h(x.activeBranch,n,T,L),x.pendingBranch&&h(x.pendingBranch,n,T,L)}};return x}function Tv(t,e,n,i,r,s,o,a,l){const c=e.suspense=ru(e,i,n,t.parentNode,document.createElement("div"),null,r,s,o,a,!0),u=l(t,c.pendingBranch=e.ssContent,n,c,s,o);return c.deps===0&&c.resolve(!1,!0),u}function wv(t){const{shapeFlag:e,children:n}=t,i=e&32;t.ssContent=ef(i?n.default:n),t.ssFallback=i?ef(n.fallback):$e(Ht)}function ef(t){let e;if(Ne(t)){const n=Vr&&t._c;n&&(t._d=!1,vn()),t=t(),n&&(t._d=!0,e=an,fm())}return Ue(t)&&(t=gv(t)),t=rn(t),e&&!t.dynamicChildren&&(t.dynamicChildren=e.filter(n=>n!==t)),t}function Wp(t,e){e&&e.pendingBranch?Ue(t)?e.effects.push(...t):e.effects.push(t):Ql(t)}function Or(t,e){t.activeBranch=e;const{vnode:n,parentComponent:i}=t;let r=e.el;for(;!r&&e.component;)e=e.component.subTree,r=e.el;n.el=r,i&&i.subTree===n&&(i.vnode.el=r,eu(i,r))}function Av(t){var e;return((e=t.props)==null?void 0:e.suspensible)!=null&&t.props.suspensible!==!1}const Rv=Symbol.for("v-scx"),Cv=()=>st(Rv);function Ca(t,e){return su(t,null,e)}const ho={};function Gt(t,e,n){return su(t,e,n)}function su(t,e,{immediate:n,deep:i,flush:r,once:s,onTrack:o,onTrigger:a}=rt){if(e&&s){const T=e;e=(...L)=>{T(...L),x()}}const l=yt,c=T=>i===!0?T:Vi(T,i===!1?1:void 0);let u,f=!1,d=!1;if(_t(t)?(u=()=>t.value,f=ta(t)):xi(t)?(u=()=>c(t),f=!0):Ue(t)?(d=!0,f=t.some(T=>xi(T)||ta(T)),u=()=>t.map(T=>{if(_t(T))return T.value;if(xi(T))return c(T);if(Ne(T))return Mi(T,l,2)})):Ne(t)?e?u=()=>Mi(t,l,2):u=()=>(h&&h(),cn(t,l,3,[g])):u=on,e&&i){const T=u;u=()=>Vi(T())}let h,g=T=>{h=_.onStop=()=>{Mi(T,l,4),h=_.onStop=void 0}},v;if(Ys)if(g=on,e?n&&cn(e,l,3,[u(),d?[]:void 0,g]):u(),r==="sync"){const T=Cv();v=T.__watcherHandles||(T.__watcherHandles=[])}else return on;let m=d?new Array(t.length).fill(ho):ho;const p=()=>{if(!(!_.active||!_.dirty))if(e){const T=_.run();(i||f||(d?T.some((L,C)=>bi(L,m[C])):bi(T,m)))&&(h&&h(),cn(e,l,3,[T,m===ho?void 0:d&&m[0]===ho?[]:m,g]),m=T)}else _.run()};p.allowRecurse=!!e;let M;r==="sync"?M=p:r==="post"?M=()=>wt(p,l&&l.suspense):(p.pre=!0,l&&(p.id=l.uid),M=()=>wa(p));const _=new Wc(u,on,M),S=yp(),x=()=>{_.stop(),S&&Vc(S.effects,_)};return e?n?p():m=_.run():r==="post"?wt(_.run.bind(_),l&&l.suspense):_.run(),v&&v.push(x),x}function Pv(t,e,n){const i=this.proxy,r=ot(t)?t.includes(".")?Xp(i,t):()=>i[t]:t.bind(i,i);let s;Ne(e)?s=e:(s=e.handler,n=e);const o=qs(this),a=su(r,s.bind(i),n);return o(),a}function Xp(t,e){const n=e.split(".");return()=>{let i=t;for(let r=0;r<n.length&&i;r++)i=i[n[r]];return i}}function Vi(t,e,n=0,i){if(!nt(t)||t.__v_skip)return t;if(e&&e>0){if(n>=e)return t;n++}if(i=i||new Set,i.has(t))return t;if(i.add(t),_t(t))Vi(t.value,e,n,i);else if(Ue(t))for(let r=0;r<t.length;r++)Vi(t[r],e,n,i);else if(up(t)||Ir(t))t.forEach(r=>{Vi(r,e,n,i)});else if(hp(t))for(const r in t)Vi(t[r],e,n,i);return t}function QP(t,e){if(mt===null)return t;const n=Da(mt)||mt.proxy,i=t.dirs||(t.dirs=[]);for(let r=0;r<e.length;r++){let[s,o,a,l=rt]=e[r];s&&(Ne(s)&&(s={mounted:s,updated:s}),s.deep&&Vi(o),i.push({dir:s,instance:n,value:o,oldValue:void 0,arg:a,modifiers:l}))}return t}function bn(t,e,n,i){const r=t.dirs,s=e&&e.dirs;for(let o=0;o<r.length;o++){const a=r[o];s&&(a.oldValue=s[o].value);let l=a.dir[i];l&&(nr(),cn(l,n,8,[t.el,a,t,e]),ir())}}const fi=Symbol("_leaveCb"),po=Symbol("_enterCb");function jp(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Xs(()=>{t.isMounted=!0}),js(()=>{t.isUnmounting=!0}),t}const tn=[Function,Array],$p={mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:tn,onEnter:tn,onAfterEnter:tn,onEnterCancelled:tn,onBeforeLeave:tn,onLeave:tn,onAfterLeave:tn,onLeaveCancelled:tn,onBeforeAppear:tn,onAppear:tn,onAfterAppear:tn,onAppearCancelled:tn},Lv={name:"BaseTransition",props:$p,setup(t,{slots:e}){const n=$s(),i=jp();let r;return()=>{const s=e.default&&ou(e.default(),!0);if(!s||!s.length)return;let o=s[0];if(s.length>1){for(const v of s)if(v.type!==Ht){o=v;break}}const a=je(t),{mode:l}=a;if(i.isLeaving)return Ka(o);const c=tf(o);if(!c)return Ka(o);const u=Ls(c,a,i,n);Hr(c,u);const f=n.subTree,d=f&&tf(f);let h=!1;const{getTransitionKey:g}=c.type;if(g){const v=g();r===void 0?r=v:v!==r&&(r=v,h=!0)}if(d&&d.type!==Ht&&(!yn(c,d)||h)){const v=Ls(d,a,i,n);if(Hr(d,v),l==="out-in")return i.isLeaving=!0,v.afterLeave=()=>{i.isLeaving=!1,n.update.active!==!1&&(n.effect.dirty=!0,n.update())},Ka(o);l==="in-out"&&c.type!==Ht&&(v.delayLeave=(m,p,M)=>{const _=qp(i,d);_[String(d.key)]=d,m[fi]=()=>{p(),m[fi]=void 0,delete u.delayedLeave},u.delayedLeave=M})}return o}}},Dv=Lv;function qp(t,e){const{leavingVNodes:n}=t;let i=n.get(e.type);return i||(i=Object.create(null),n.set(e.type,i)),i}function Ls(t,e,n,i){const{appear:r,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:f,onLeave:d,onAfterLeave:h,onLeaveCancelled:g,onBeforeAppear:v,onAppear:m,onAfterAppear:p,onAppearCancelled:M}=e,_=String(t.key),S=qp(n,t),x=(C,y)=>{C&&cn(C,i,9,y)},T=(C,y)=>{const b=y[1];x(C,y),Ue(C)?C.every(F=>F.length<=1)&&b():C.length<=1&&b()},L={mode:s,persisted:o,beforeEnter(C){let y=a;if(!n.isMounted)if(r)y=v||a;else return;C[fi]&&C[fi](!0);const b=S[_];b&&yn(t,b)&&b.el[fi]&&b.el[fi](),x(y,[C])},enter(C){let y=l,b=c,F=u;if(!n.isMounted)if(r)y=m||l,b=p||c,F=M||u;else return;let B=!1;const I=C[po]=G=>{B||(B=!0,G?x(F,[C]):x(b,[C]),L.delayedLeave&&L.delayedLeave(),C[po]=void 0)};y?T(y,[C,I]):I()},leave(C,y){const b=String(t.key);if(C[po]&&C[po](!0),n.isUnmounting)return y();x(f,[C]);let F=!1;const B=C[fi]=I=>{F||(F=!0,y(),I?x(g,[C]):x(h,[C]),C[fi]=void 0,S[b]===t&&delete S[b])};S[b]=t,d?T(d,[C,B]):B()},clone(C){return Ls(C,e,n,i)}};return L}function Ka(t){if(Ws(t))return t=Zn(t),t.children=null,t}function tf(t){return Ws(t)?t.children?t.children[0]:void 0:t}function Hr(t,e){t.shapeFlag&6&&t.component?Hr(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function ou(t,e=!1,n){let i=[],r=0;for(let s=0;s<t.length;s++){let o=t[s];const a=n==null?o.key:String(n)+String(o.key!=null?o.key:s);o.type===Dt?(o.patchFlag&128&&r++,i=i.concat(ou(o.children,e,a))):(e||o.type!==Ht)&&i.push(a!=null?Zn(o,{key:a}):o)}if(r>1)for(let s=0;s<i.length;s++)i[s].patchFlag=-2;return i}/*! #__NO_SIDE_EFFECTS__ */function Pn(t,e){return Ne(t)?gt({name:t.name},e,{setup:t}):t}const Xi=t=>!!t.type.__asyncLoader;/*! #__NO_SIDE_EFFECTS__ */function nf(t){Ne(t)&&(t={loader:t});const{loader:e,loadingComponent:n,errorComponent:i,delay:r=200,timeout:s,suspensible:o=!0,onError:a}=t;let l=null,c,u=0;const f=()=>(u++,l=null,d()),d=()=>{let h;return l||(h=l=e().catch(g=>{if(g=g instanceof Error?g:new Error(String(g)),a)return new Promise((v,m)=>{a(g,()=>v(f()),()=>m(g),u+1)});throw g}).then(g=>h!==l&&l?l:(g&&(g.__esModule||g[Symbol.toStringTag]==="Module")&&(g=g.default),c=g,g)))};return Pn({name:"AsyncComponentWrapper",__asyncLoader:d,get __asyncResolved(){return c},setup(){const h=yt;if(c)return()=>Za(c,h);const g=M=>{l=null,ts(M,h,13,!i)};if(o&&h.suspense||Ys)return d().then(M=>()=>Za(M,h)).catch(M=>(g(M),()=>i?$e(i,{error:M}):null));const v=ct(!1),m=ct(),p=ct(!!r);return r&&setTimeout(()=>{p.value=!1},r),s!=null&&setTimeout(()=>{if(!v.value&&!m.value){const M=new Error(`Async component timed out after ${s}ms.`);g(M),m.value=M}},s),d().then(()=>{v.value=!0,h.parent&&Ws(h.parent.vnode)&&(h.parent.effect.dirty=!0,wa(h.parent.update))}).catch(M=>{g(M),m.value=M}),()=>{if(v.value&&c)return Za(c,h);if(m.value&&i)return $e(i,{error:m.value});if(n&&!p.value)return $e(n)}}})}function Za(t,e){const{ref:n,props:i,children:r,ce:s}=e.vnode,o=$e(t,i,r);return o.ref=n,o.ce=s,delete e.vnode.ce,o}const Ws=t=>t.type.__isKeepAlive,Iv={name:"KeepAlive",__isKeepAlive:!0,props:{include:[String,RegExp,Array],exclude:[String,RegExp,Array],max:[String,Number]},setup(t,{slots:e}){const n=$s(),i=n.ctx;if(!i.renderer)return()=>{const M=e.default&&e.default();return M&&M.length===1?M[0]:M};const r=new Map,s=new Set;let o=null;const a=n.suspense,{renderer:{p:l,m:c,um:u,o:{createElement:f}}}=i,d=f("div");i.activate=(M,_,S,x,T)=>{const L=M.component;c(M,_,S,0,a),l(L.vnode,M,_,S,L,a,x,M.slotScopeIds,T),wt(()=>{L.isDeactivated=!1,L.a&&gs(L.a);const C=M.props&&M.props.onVnodeMounted;C&&Vt(C,L.parent,M)},a)},i.deactivate=M=>{const _=M.component;c(M,d,null,1,a),wt(()=>{_.da&&gs(_.da);const S=M.props&&M.props.onVnodeUnmounted;S&&Vt(S,_.parent,M),_.isDeactivated=!0},a)};function h(M){Ja(M),u(M,n,a,!0)}function g(M){r.forEach((_,S)=>{const x=ac(_.type);x&&(!M||!M(x))&&v(S)})}function v(M){const _=r.get(M);!o||!yn(_,o)?h(_):o&&Ja(o),r.delete(M),s.delete(M)}Gt(()=>[t.include,t.exclude],([M,_])=>{M&&g(S=>ds(M,S)),_&&g(S=>!ds(_,S))},{flush:"post",deep:!0});let m=null;const p=()=>{m!=null&&r.set(m,Qa(n.subTree))};return Xs(p),au(p),js(()=>{r.forEach(M=>{const{subTree:_,suspense:S}=n,x=Qa(_);if(M.type===x.type&&M.key===x.key){Ja(x);const T=x.component.da;T&&wt(T,S);return}h(M)})}),()=>{if(m=null,!e.default)return null;const M=e.default(),_=M[0];if(M.length>1)return o=null,M;if(!Gr(_)||!(_.shapeFlag&4)&&!(_.shapeFlag&128))return o=null,_;let S=Qa(_);const x=S.type,T=ac(Xi(S)?S.type.__asyncResolved||{}:x),{include:L,exclude:C,max:y}=t;if(L&&(!T||!ds(L,T))||C&&T&&ds(C,T))return o=S,_;const b=S.key==null?x:S.key,F=r.get(b);return S.el&&(S=Zn(S),_.shapeFlag&128&&(_.ssContent=S)),m=b,F?(S.el=F.el,S.component=F.component,S.transition&&Hr(S,S.transition),S.shapeFlag|=512,s.delete(b),s.add(b)):(s.add(b),y&&s.size>parseInt(y,10)&&v(s.values().next().value)),S.shapeFlag|=256,o=S,Gp(_.type)?_:S}}},Uv=Iv;function ds(t,e){return Ue(t)?t.some(n=>ds(n,e)):ot(t)?t.split(",").includes(e):w_(t)?t.test(e):!1}function Yp(t,e){Zp(t,"a",e)}function Kp(t,e){Zp(t,"da",e)}function Zp(t,e,n=yt){const i=t.__wdc||(t.__wdc=()=>{let r=n;for(;r;){if(r.isDeactivated)return;r=r.parent}return t()});if(Pa(e,i,n),n){let r=n.parent;for(;r&&r.parent;)Ws(r.parent.vnode)&&Nv(i,e,n,r),r=r.parent}}function Nv(t,e,n,i){const r=Pa(e,t,i,!0);lu(()=>{Vc(i[e],r)},n)}function Ja(t){t.shapeFlag&=-257,t.shapeFlag&=-513}function Qa(t){return t.shapeFlag&128?t.ssContent:t}function Pa(t,e,n=yt,i=!1){if(n){const r=n[t]||(n[t]=[]),s=e.__weh||(e.__weh=(...o)=>{if(n.isUnmounted)return;nr();const a=qs(n),l=cn(e,n,t,o);return a(),ir(),l});return i?r.unshift(s):r.push(s),s}}const Jn=t=>(e,n=yt)=>(!Ys||t==="sp")&&Pa(t,(...i)=>e(...i),n),Ov=Jn("bm"),Xs=Jn("m"),Fv=Jn("bu"),au=Jn("u"),js=Jn("bum"),lu=Jn("um"),Bv=Jn("sp"),kv=Jn("rtg"),Hv=Jn("rtc");function Jp(t,e=yt){Pa("ec",t,e)}function eL(t,e,n,i){let r;const s=n&&n[i];if(Ue(t)||ot(t)){r=new Array(t.length);for(let o=0,a=t.length;o<a;o++)r[o]=e(t[o],o,void 0,s&&s[o])}else if(typeof t=="number"){r=new Array(t);for(let o=0;o<t;o++)r[o]=e(o+1,o,void 0,s&&s[o])}else if(nt(t))if(t[Symbol.iterator])r=Array.from(t,(o,a)=>e(o,a,void 0,s&&s[a]));else{const o=Object.keys(t);r=new Array(o.length);for(let a=0,l=o.length;a<l;a++){const c=o[a];r[a]=e(t[c],c,a,s&&s[a])}}else r=[];return n&&(n[i]=r),r}function tL(t,e,n={},i,r){if(mt.isCE||mt.parent&&Xi(mt.parent)&&mt.parent.isCE)return e!=="default"&&(n.name=e),$e("slot",n,i&&i());let s=t[e];s&&s._c&&(s._d=!1),vn();const o=s&&Qp(s(n)),a=Wn(Dt,{key:n.key||o&&o.key||`_${e}`},o||(i?i():[]),o&&t._===1?64:-2);return!r&&a.scopeId&&(a.slotScopeIds=[a.scopeId+"-s"]),s&&s._c&&(s._d=!0),a}function Qp(t){return t.some(e=>Gr(e)?!(e.type===Ht||e.type===Dt&&!Qp(e.children)):!0)?t:null}const tc=t=>t?_m(t)?Da(t)||t.proxy:tc(t.parent):null,_s=gt(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>tc(t.parent),$root:t=>tc(t.root),$emit:t=>t.emit,$options:t=>cu(t),$forceUpdate:t=>t.f||(t.f=()=>{t.effect.dirty=!0,wa(t.update)}),$nextTick:t=>t.n||(t.n=wi.bind(t.proxy)),$watch:t=>Pv.bind(t)}),el=(t,e)=>t!==rt&&!t.__isScriptSetup&&Ye(t,e),zv={get({_:t},e){const{ctx:n,setupState:i,data:r,props:s,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const h=o[e];if(h!==void 0)switch(h){case 1:return i[e];case 2:return r[e];case 4:return n[e];case 3:return s[e]}else{if(el(i,e))return o[e]=1,i[e];if(r!==rt&&Ye(r,e))return o[e]=2,r[e];if((c=t.propsOptions[0])&&Ye(c,e))return o[e]=3,s[e];if(n!==rt&&Ye(n,e))return o[e]=4,n[e];nc&&(o[e]=0)}}const u=_s[e];let f,d;if(u)return e==="$attrs"&&jt(t,"get",e),u(t);if((f=a.__cssModules)&&(f=f[e]))return f;if(n!==rt&&Ye(n,e))return o[e]=4,n[e];if(d=l.config.globalProperties,Ye(d,e))return d[e]},set({_:t},e,n){const{data:i,setupState:r,ctx:s}=t;return el(r,e)?(r[e]=n,!0):i!==rt&&Ye(i,e)?(i[e]=n,!0):Ye(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(s[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:i,appContext:r,propsOptions:s}},o){let a;return!!n[o]||t!==rt&&Ye(t,o)||el(e,o)||(a=s[0])&&Ye(a,o)||Ye(i,o)||Ye(_s,o)||Ye(r.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Ye(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function rf(t){return Ue(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let nc=!0;function Vv(t){const e=cu(t),n=t.proxy,i=t.ctx;nc=!1,e.beforeCreate&&sf(e.beforeCreate,t,"bc");const{data:r,computed:s,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:f,mounted:d,beforeUpdate:h,updated:g,activated:v,deactivated:m,beforeDestroy:p,beforeUnmount:M,destroyed:_,unmounted:S,render:x,renderTracked:T,renderTriggered:L,errorCaptured:C,serverPrefetch:y,expose:b,inheritAttrs:F,components:B,directives:I,filters:G}=e;if(c&&Gv(c,i,null),o)for(const W in o){const H=o[W];Ne(H)&&(i[W]=H.bind(n))}if(r){const W=r.call(n,n);nt(W)&&(t.data=vt(W))}if(nc=!0,s)for(const W in s){const H=s[W],ce=Ne(H)?H.bind(n,n):Ne(H.get)?H.get.bind(n,n):on,he=!Ne(H)&&Ne(H.set)?H.set.bind(n):on,Ee=Fe({get:ce,set:he});Object.defineProperty(i,W,{enumerable:!0,configurable:!0,get:()=>Ee.value,set:q=>Ee.value=q})}if(a)for(const W in a)em(a[W],i,n,W);if(l){const W=Ne(l)?l.call(n):l;Reflect.ownKeys(W).forEach(H=>{un(H,W[H])})}u&&sf(u,t,"c");function V(W,H){Ue(H)?H.forEach(ce=>W(ce.bind(n))):H&&W(H.bind(n))}if(V(Ov,f),V(Xs,d),V(Fv,h),V(au,g),V(Yp,v),V(Kp,m),V(Jp,C),V(Hv,T),V(kv,L),V(js,M),V(lu,S),V(Bv,y),Ue(b))if(b.length){const W=t.exposed||(t.exposed={});b.forEach(H=>{Object.defineProperty(W,H,{get:()=>n[H],set:ce=>n[H]=ce})})}else t.exposed||(t.exposed={});x&&t.render===on&&(t.render=x),F!=null&&(t.inheritAttrs=F),B&&(t.components=B),I&&(t.directives=I)}function Gv(t,e,n=on){Ue(t)&&(t=ic(t));for(const i in t){const r=t[i];let s;nt(r)?"default"in r?s=st(r.from||i,r.default,!0):s=st(r.from||i):s=st(r),_t(s)?Object.defineProperty(e,i,{enumerable:!0,configurable:!0,get:()=>s.value,set:o=>s.value=o}):e[i]=s}}function sf(t,e,n){cn(Ue(t)?t.map(i=>i.bind(e.proxy)):t.bind(e.proxy),e,n)}function em(t,e,n,i){const r=i.includes(".")?Xp(n,i):()=>n[i];if(ot(t)){const s=e[t];Ne(s)&&Gt(r,s)}else if(Ne(t))Gt(r,t.bind(n));else if(nt(t))if(Ue(t))t.forEach(s=>em(s,e,n,i));else{const s=Ne(t.handler)?t.handler.bind(n):e[t.handler];Ne(s)&&Gt(r,s,t)}}function cu(t){const e=t.type,{mixins:n,extends:i}=e,{mixins:r,optionsCache:s,config:{optionMergeStrategies:o}}=t.appContext,a=s.get(e);let l;return a?l=a:!r.length&&!n&&!i?l=e:(l={},r.length&&r.forEach(c=>sa(l,c,o,!0)),sa(l,e,o)),nt(e)&&s.set(e,l),l}function sa(t,e,n,i=!1){const{mixins:r,extends:s}=e;s&&sa(t,s,n,!0),r&&r.forEach(o=>sa(t,o,n,!0));for(const o in e)if(!(i&&o==="expose")){const a=Wv[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const Wv={data:of,props:af,emits:af,methods:hs,computed:hs,beforeCreate:Bt,created:Bt,beforeMount:Bt,mounted:Bt,beforeUpdate:Bt,updated:Bt,beforeDestroy:Bt,beforeUnmount:Bt,destroyed:Bt,unmounted:Bt,activated:Bt,deactivated:Bt,errorCaptured:Bt,serverPrefetch:Bt,components:hs,directives:hs,watch:jv,provide:of,inject:Xv};function of(t,e){return e?t?function(){return gt(Ne(t)?t.call(this,this):t,Ne(e)?e.call(this,this):e)}:e:t}function Xv(t,e){return hs(ic(t),ic(e))}function ic(t){if(Ue(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Bt(t,e){return t?[...new Set([].concat(t,e))]:e}function hs(t,e){return t?gt(Object.create(null),t,e):e}function af(t,e){return t?Ue(t)&&Ue(e)?[...new Set([...t,...e])]:gt(Object.create(null),rf(t),rf(e??{})):e}function jv(t,e){if(!t)return e;if(!e)return t;const n=gt(Object.create(null),t);for(const i in e)n[i]=Bt(t[i],e[i]);return n}function tm(){return{app:null,config:{isNativeTag:b_,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let $v=0;function qv(t,e){return function(i,r=null){Ne(i)||(i=gt({},i)),r!=null&&!nt(r)&&(r=null);const s=tm(),o=new WeakSet;let a=!1;const l=s.app={_uid:$v++,_component:i,_props:r,_container:null,_context:s,_instance:null,version:ym,get config(){return s.config},set config(c){},use(c,...u){return o.has(c)||(c&&Ne(c.install)?(o.add(c),c.install(l,...u)):Ne(c)&&(o.add(c),c(l,...u))),l},mixin(c){return s.mixins.includes(c)||s.mixins.push(c),l},component(c,u){return u?(s.components[c]=u,l):s.components[c]},directive(c,u){return u?(s.directives[c]=u,l):s.directives[c]},mount(c,u,f){if(!a){const d=$e(i,r);return d.appContext=s,f===!0?f="svg":f===!1&&(f=void 0),u&&e?e(d,c):t(d,c,f),a=!0,l._container=c,c.__vue_app__=l,Da(d.component)||d.component.proxy}},unmount(){a&&(t(null,l._container),delete l._container.__vue_app__)},provide(c,u){return s.provides[c]=u,l},runWithContext(c){const u=Fr;Fr=l;try{return c()}finally{Fr=u}}};return l}}let Fr=null;function un(t,e){if(yt){let n=yt.provides;const i=yt.parent&&yt.parent.provides;i===n&&(n=yt.provides=Object.create(i)),n[t]=e}}function st(t,e,n=!1){const i=yt||mt;if(i||Fr){const r=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Fr._context.provides;if(r&&t in r)return r[t];if(arguments.length>1)return n&&Ne(e)?e.call(i&&i.proxy):e}}function uu(){return!!(yt||mt||Fr)}function Yv(t,e,n,i=!1){const r={},s={};Qo(s,La,1),t.propsDefaults=Object.create(null),nm(t,e,r,s);for(const o in t.propsOptions[0])o in r||(r[o]=void 0);n?t.props=i?r:Gs(r):t.type.props?t.props=r:t.props=s,t.attrs=s}function Kv(t,e,n,i){const{props:r,attrs:s,vnode:{patchFlag:o}}=t,a=je(r),[l]=t.propsOptions;let c=!1;if((i||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let f=0;f<u.length;f++){let d=u[f];if(Aa(t.emitsOptions,d))continue;const h=e[d];if(l)if(Ye(s,d))h!==s[d]&&(s[d]=h,c=!0);else{const g=Rn(d);r[g]=rc(l,a,g,h,t,!1)}else h!==s[d]&&(s[d]=h,c=!0)}}}else{nm(t,e,r,s)&&(c=!0);let u;for(const f in a)(!e||!Ye(e,f)&&((u=es(f))===f||!Ye(e,u)))&&(l?n&&(n[f]!==void 0||n[u]!==void 0)&&(r[f]=rc(l,a,f,void 0,t,!0)):delete r[f]);if(s!==a)for(const f in s)(!e||!Ye(e,f))&&(delete s[f],c=!0)}c&&Yn(t,"set","$attrs")}function nm(t,e,n,i){const[r,s]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(Ur(l))continue;const c=e[l];let u;r&&Ye(r,u=Rn(l))?!s||!s.includes(u)?n[u]=c:(a||(a={}))[u]=c:Aa(t.emitsOptions,l)||(!(l in i)||c!==i[l])&&(i[l]=c,o=!0)}if(s){const l=je(n),c=a||rt;for(let u=0;u<s.length;u++){const f=s[u];n[f]=rc(r,l,f,c[f],t,!Ye(c,f))}}return o}function rc(t,e,n,i,r,s){const o=t[n];if(o!=null){const a=Ye(o,"default");if(a&&i===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Ne(l)){const{propsDefaults:c}=r;if(n in c)i=c[n];else{const u=qs(r);i=c[n]=l.call(null,e),u()}}else i=l}o[0]&&(s&&!a?i=!1:o[1]&&(i===""||i===es(n))&&(i=!0))}return i}function im(t,e,n=!1){const i=e.propsCache,r=i.get(t);if(r)return r;const s=t.props,o={},a=[];let l=!1;if(!Ne(t)){const u=f=>{l=!0;const[d,h]=im(f,e,!0);gt(o,d),h&&a.push(...h)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!s&&!l)return nt(t)&&i.set(t,Dr),Dr;if(Ue(s))for(let u=0;u<s.length;u++){const f=Rn(s[u]);lf(f)&&(o[f]=rt)}else if(s)for(const u in s){const f=Rn(u);if(lf(f)){const d=s[u],h=o[f]=Ue(d)||Ne(d)?{type:d}:gt({},d);if(h){const g=ff(Boolean,h.type),v=ff(String,h.type);h[0]=g>-1,h[1]=v<0||g<v,(g>-1||Ye(h,"default"))&&a.push(f)}}}const c=[o,a];return nt(t)&&i.set(t,c),c}function lf(t){return t[0]!=="$"&&!Ur(t)}function cf(t){return t===null?"null":typeof t=="function"?t.name||"":typeof t=="object"&&t.constructor&&t.constructor.name||""}function uf(t,e){return cf(t)===cf(e)}function ff(t,e){return Ue(e)?e.findIndex(n=>uf(n,t)):Ne(e)&&uf(e,t)?0:-1}const rm=t=>t[0]==="_"||t==="$stable",fu=t=>Ue(t)?t.map(rn):[rn(t)],Zv=(t,e,n)=>{if(e._n)return e;const i=ra((...r)=>fu(e(...r)),n);return i._c=!1,i},sm=(t,e,n)=>{const i=t._ctx;for(const r in t){if(rm(r))continue;const s=t[r];if(Ne(s))e[r]=Zv(r,s,i);else if(s!=null){const o=fu(s);e[r]=()=>o}}},om=(t,e)=>{const n=fu(e);t.slots.default=()=>n},Jv=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=je(e),Qo(e,"_",n)):sm(e,t.slots={})}else t.slots={},e&&om(t,e);Qo(t.slots,La,1)},Qv=(t,e,n)=>{const{vnode:i,slots:r}=t;let s=!0,o=rt;if(i.shapeFlag&32){const a=e._;a?n&&a===1?s=!1:(gt(r,e),!n&&a===1&&delete r._):(s=!e.$stable,sm(e,r)),o=e}else e&&(om(t,e),o={default:1});if(s)for(const a in r)!rm(a)&&o[a]==null&&delete r[a]};function oa(t,e,n,i,r=!1){if(Ue(t)){t.forEach((d,h)=>oa(d,e&&(Ue(e)?e[h]:e),n,i,r));return}if(Xi(i)&&!r)return;const s=i.shapeFlag&4?Da(i.component)||i.component.proxy:i.el,o=r?null:s,{i:a,r:l}=t,c=e&&e.r,u=a.refs===rt?a.refs={}:a.refs,f=a.setupState;if(c!=null&&c!==l&&(ot(c)?(u[c]=null,Ye(f,c)&&(f[c]=null)):_t(c)&&(c.value=null)),Ne(l))Mi(l,a,12,[o,u]);else{const d=ot(l),h=_t(l);if(d||h){const g=()=>{if(t.f){const v=d?Ye(f,l)?f[l]:u[l]:l.value;r?Ue(v)&&Vc(v,s):Ue(v)?v.includes(s)||v.push(s):d?(u[l]=[s],Ye(f,l)&&(f[l]=u[l])):(l.value=[s],t.k&&(u[t.k]=l.value))}else d?(u[l]=o,Ye(f,l)&&(f[l]=o)):h&&(l.value=o,t.k&&(u[t.k]=o))};o?(g.id=-1,wt(g,n)):g()}}}let ti=!1;const e0=t=>t.namespaceURI.includes("svg")&&t.tagName!=="foreignObject",t0=t=>t.namespaceURI.includes("MathML"),mo=t=>{if(e0(t))return"svg";if(t0(t))return"mathml"},go=t=>t.nodeType===8;function n0(t){const{mt:e,p:n,o:{patchProp:i,createText:r,nextSibling:s,parentNode:o,remove:a,insert:l,createComment:c}}=t,u=(_,S)=>{if(!S.hasChildNodes()){n(null,_,S),na(),S._vnode=_;return}ti=!1,f(S.firstChild,_,null,null,null),na(),S._vnode=_,ti&&console.error("Hydration completed but contains mismatches.")},f=(_,S,x,T,L,C=!1)=>{const y=go(_)&&_.data==="[",b=()=>v(_,S,x,T,L,y),{type:F,ref:B,shapeFlag:I,patchFlag:G}=S;let X=_.nodeType;S.el=_,G===-2&&(C=!1,S.dynamicChildren=null);let V=null;switch(F){case zr:X!==3?S.children===""?(l(S.el=r(""),o(_),_),V=_):V=b():(_.data!==S.children&&(ti=!0,_.data=S.children),V=s(_));break;case Ht:M(_)?(V=s(_),p(S.el=_.content.firstChild,_,x)):X!==8||y?V=b():V=s(_);break;case Xo:if(y&&(_=s(_),X=_.nodeType),X===1||X===3){V=_;const W=!S.children.length;for(let H=0;H<S.staticCount;H++)W&&(S.children+=V.nodeType===1?V.outerHTML:V.data),H===S.staticCount-1&&(S.anchor=V),V=s(V);return y?s(V):V}else b();break;case Dt:y?V=g(_,S,x,T,L,C):V=b();break;default:if(I&1)(X!==1||S.type.toLowerCase()!==_.tagName.toLowerCase())&&!M(_)?V=b():V=d(_,S,x,T,L,C);else if(I&6){S.slotScopeIds=L;const W=o(_);if(y?V=m(_):go(_)&&_.data==="teleport start"?V=m(_,_.data,"teleport end"):V=s(_),e(S,W,null,x,T,mo(W),C),Xi(S)){let H;y?(H=$e(Dt),H.anchor=V?V.previousSibling:W.lastChild):H=_.nodeType===3?gm(""):$e("div"),H.el=_,S.component.subTree=H}}else I&64?X!==8?V=b():V=S.type.hydrate(_,S,x,T,L,C,t,h):I&128&&(V=S.type.hydrate(_,S,x,T,mo(o(_)),L,C,t,f))}return B!=null&&oa(B,null,T,S),V},d=(_,S,x,T,L,C)=>{C=C||!!S.dynamicChildren;const{type:y,props:b,patchFlag:F,shapeFlag:B,dirs:I,transition:G}=S,X=y==="input"||y==="option";if(X||F!==-1){I&&bn(S,null,x,"created");let V=!1;if(M(_)){V=lm(T,G)&&x&&x.vnode.props&&x.vnode.props.appear;const H=_.content.firstChild;V&&G.beforeEnter(H),p(H,_,x),S.el=_=H}if(B&16&&!(b&&(b.innerHTML||b.textContent))){let H=h(_.firstChild,S,_,x,T,L,C);for(;H;){ti=!0;const ce=H;H=H.nextSibling,a(ce)}}else B&8&&_.textContent!==S.children&&(ti=!0,_.textContent=S.children);if(b)if(X||!C||F&48)for(const H in b)(X&&(H.endsWith("value")||H==="indeterminate")||Hs(H)&&!Ur(H)||H[0]===".")&&i(_,H,null,b[H],void 0,void 0,x);else b.onClick&&i(_,"onClick",null,b.onClick,void 0,void 0,x);let W;(W=b&&b.onVnodeBeforeMount)&&Vt(W,x,S),I&&bn(S,null,x,"beforeMount"),((W=b&&b.onVnodeMounted)||I||V)&&Wp(()=>{W&&Vt(W,x,S),V&&G.enter(_),I&&bn(S,null,x,"mounted")},T)}return _.nextSibling},h=(_,S,x,T,L,C,y)=>{y=y||!!S.dynamicChildren;const b=S.children,F=b.length;for(let B=0;B<F;B++){const I=y?b[B]:b[B]=rn(b[B]);if(_)_=f(_,I,T,L,C,y);else{if(I.type===zr&&!I.children)continue;ti=!0,n(null,I,x,null,T,L,mo(x),C)}}return _},g=(_,S,x,T,L,C)=>{const{slotScopeIds:y}=S;y&&(L=L?L.concat(y):y);const b=o(_),F=h(s(_),S,b,x,T,L,C);return F&&go(F)&&F.data==="]"?s(S.anchor=F):(ti=!0,l(S.anchor=c("]"),b,F),F)},v=(_,S,x,T,L,C)=>{if(ti=!0,S.el=null,C){const F=m(_);for(;;){const B=s(_);if(B&&B!==F)a(B);else break}}const y=s(_),b=o(_);return a(_),n(null,S,b,y,x,T,mo(b),L),y},m=(_,S="[",x="]")=>{let T=0;for(;_;)if(_=s(_),_&&go(_)&&(_.data===S&&T++,_.data===x)){if(T===0)return s(_);T--}return _},p=(_,S,x)=>{const T=S.parentNode;T&&T.replaceChild(_,S);let L=x;for(;L;)L.vnode.el===S&&(L.vnode.el=L.subTree.el=_),L=L.parent},M=_=>_.nodeType===1&&_.tagName.toLowerCase()==="template";return[u,f]}const wt=Wp;function i0(t){return am(t)}function r0(t){return am(t,n0)}function am(t,e){const n=mp();n.__VUE__=!0;const{insert:i,remove:r,patchProp:s,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:f,nextSibling:d,setScopeId:h=on,insertStaticContent:g}=t,v=(A,P,N,$=null,Z=null,ie=null,le=void 0,ae=null,ge=!!P.dynamicChildren)=>{if(A===P)return;A&&!yn(A,P)&&($=z(A),q(A,Z,ie,!0),A=null),P.patchFlag===-2&&(ge=!1,P.dynamicChildren=null);const{type:ue,ref:w,shapeFlag:E}=P;switch(ue){case zr:m(A,P,N,$);break;case Ht:p(A,P,N,$);break;case Xo:A==null&&M(P,N,$,le);break;case Dt:B(A,P,N,$,Z,ie,le,ae,ge);break;default:E&1?x(A,P,N,$,Z,ie,le,ae,ge):E&6?I(A,P,N,$,Z,ie,le,ae,ge):(E&64||E&128)&&ue.process(A,P,N,$,Z,ie,le,ae,ge,ye)}w!=null&&Z&&oa(w,A&&A.ref,ie,P||A,!P)},m=(A,P,N,$)=>{if(A==null)i(P.el=a(P.children),N,$);else{const Z=P.el=A.el;P.children!==A.children&&c(Z,P.children)}},p=(A,P,N,$)=>{A==null?i(P.el=l(P.children||""),N,$):P.el=A.el},M=(A,P,N,$)=>{[A.el,A.anchor]=g(A.children,P,N,$,A.el,A.anchor)},_=({el:A,anchor:P},N,$)=>{let Z;for(;A&&A!==P;)Z=d(A),i(A,N,$),A=Z;i(P,N,$)},S=({el:A,anchor:P})=>{let N;for(;A&&A!==P;)N=d(A),r(A),A=N;r(P)},x=(A,P,N,$,Z,ie,le,ae,ge)=>{P.type==="svg"?le="svg":P.type==="math"&&(le="mathml"),A==null?T(P,N,$,Z,ie,le,ae,ge):y(A,P,Z,ie,le,ae,ge)},T=(A,P,N,$,Z,ie,le,ae)=>{let ge,ue;const{props:w,shapeFlag:E,transition:O,dirs:ee}=A;if(ge=A.el=o(A.type,ie,w&&w.is,w),E&8?u(ge,A.children):E&16&&C(A.children,ge,null,$,Z,tl(A,ie),le,ae),ee&&bn(A,null,$,"created"),L(ge,A,A.scopeId,le,$),w){for(const D in w)D!=="value"&&!Ur(D)&&s(ge,D,null,w[D],ie,A.children,$,Z,_e);"value"in w&&s(ge,"value",null,w.value,ie),(ue=w.onVnodeBeforeMount)&&Vt(ue,$,A)}ee&&bn(A,null,$,"beforeMount");const ne=lm(Z,O);ne&&O.beforeEnter(ge),i(ge,P,N),((ue=w&&w.onVnodeMounted)||ne||ee)&&wt(()=>{ue&&Vt(ue,$,A),ne&&O.enter(ge),ee&&bn(A,null,$,"mounted")},Z)},L=(A,P,N,$,Z)=>{if(N&&h(A,N),$)for(let ie=0;ie<$.length;ie++)h(A,$[ie]);if(Z){let ie=Z.subTree;if(P===ie){const le=Z.vnode;L(A,le,le.scopeId,le.slotScopeIds,Z.parent)}}},C=(A,P,N,$,Z,ie,le,ae,ge=0)=>{for(let ue=ge;ue<A.length;ue++){const w=A[ue]=ae?di(A[ue]):rn(A[ue]);v(null,w,P,N,$,Z,ie,le,ae)}},y=(A,P,N,$,Z,ie,le)=>{const ae=P.el=A.el;let{patchFlag:ge,dynamicChildren:ue,dirs:w}=P;ge|=A.patchFlag&16;const E=A.props||rt,O=P.props||rt;let ee;if(N&&Pi(N,!1),(ee=O.onVnodeBeforeUpdate)&&Vt(ee,N,P,A),w&&bn(P,A,N,"beforeUpdate"),N&&Pi(N,!0),ue?b(A.dynamicChildren,ue,ae,N,$,tl(P,Z),ie):le||H(A,P,ae,null,N,$,tl(P,Z),ie,!1),ge>0){if(ge&16)F(ae,P,E,O,N,$,Z);else if(ge&2&&E.class!==O.class&&s(ae,"class",null,O.class,Z),ge&4&&s(ae,"style",E.style,O.style,Z),ge&8){const ne=P.dynamicProps;for(let D=0;D<ne.length;D++){const te=ne[D],fe=E[te],J=O[te];(J!==fe||te==="value")&&s(ae,te,fe,J,Z,A.children,N,$,_e)}}ge&1&&A.children!==P.children&&u(ae,P.children)}else!le&&ue==null&&F(ae,P,E,O,N,$,Z);((ee=O.onVnodeUpdated)||w)&&wt(()=>{ee&&Vt(ee,N,P,A),w&&bn(P,A,N,"updated")},$)},b=(A,P,N,$,Z,ie,le)=>{for(let ae=0;ae<P.length;ae++){const ge=A[ae],ue=P[ae],w=ge.el&&(ge.type===Dt||!yn(ge,ue)||ge.shapeFlag&70)?f(ge.el):N;v(ge,ue,w,null,$,Z,ie,le,!0)}},F=(A,P,N,$,Z,ie,le)=>{if(N!==$){if(N!==rt)for(const ae in N)!Ur(ae)&&!(ae in $)&&s(A,ae,N[ae],null,le,P.children,Z,ie,_e);for(const ae in $){if(Ur(ae))continue;const ge=$[ae],ue=N[ae];ge!==ue&&ae!=="value"&&s(A,ae,ue,ge,le,P.children,Z,ie,_e)}"value"in $&&s(A,"value",N.value,$.value,le)}},B=(A,P,N,$,Z,ie,le,ae,ge)=>{const ue=P.el=A?A.el:a(""),w=P.anchor=A?A.anchor:a("");let{patchFlag:E,dynamicChildren:O,slotScopeIds:ee}=P;ee&&(ae=ae?ae.concat(ee):ee),A==null?(i(ue,N,$),i(w,N,$),C(P.children||[],N,w,Z,ie,le,ae,ge)):E>0&&E&64&&O&&A.dynamicChildren?(b(A.dynamicChildren,O,N,Z,ie,le,ae),(P.key!=null||Z&&P===Z.subTree)&&cm(A,P,!0)):H(A,P,N,w,Z,ie,le,ae,ge)},I=(A,P,N,$,Z,ie,le,ae,ge)=>{P.slotScopeIds=ae,A==null?P.shapeFlag&512?Z.ctx.activate(P,N,$,le,ge):G(P,N,$,Z,ie,le,ge):X(A,P,ge)},G=(A,P,N,$,Z,ie,le)=>{const ae=A.component=f0(A,$,Z);if(Ws(A)&&(ae.ctx.renderer=ye),d0(ae),ae.asyncDep){if(Z&&Z.registerDep(ae,V),!A.el){const ge=ae.subTree=$e(Ht);p(null,ge,P,N)}}else V(ae,A,P,N,Z,ie,le)},X=(A,P,N)=>{const $=P.component=A.component;if(yv(A,P,N))if($.asyncDep&&!$.asyncResolved){W($,P,N);return}else $.next=P,hv($.update),$.effect.dirty=!0,$.update();else P.el=A.el,$.vnode=P},V=(A,P,N,$,Z,ie,le)=>{const ae=()=>{if(A.isMounted){let{next:w,bu:E,u:O,parent:ee,vnode:ne}=A;{const Ae=um(A);if(Ae){w&&(w.el=ne.el,W(A,w,le)),Ae.asyncDep.then(()=>{A.isUnmounted||ae()});return}}let D=w,te;Pi(A,!1),w?(w.el=ne.el,W(A,w,le)):w=ne,E&&gs(E),(te=w.props&&w.props.onVnodeBeforeUpdate)&&Vt(te,ee,w,ne),Pi(A,!0);const fe=Ya(A),J=A.subTree;A.subTree=fe,v(J,fe,f(J.el),z(J),A,Z,ie),w.el=fe.el,D===null&&eu(A,fe.el),O&&wt(O,Z),(te=w.props&&w.props.onVnodeUpdated)&&wt(()=>Vt(te,ee,w,ne),Z)}else{let w;const{el:E,props:O}=P,{bm:ee,m:ne,parent:D}=A,te=Xi(P);if(Pi(A,!1),ee&&gs(ee),!te&&(w=O&&O.onVnodeBeforeMount)&&Vt(w,D,P),Pi(A,!0),E&&k){const fe=()=>{A.subTree=Ya(A),k(E,A.subTree,A,Z,null)};te?P.type.__asyncLoader().then(()=>!A.isUnmounted&&fe()):fe()}else{const fe=A.subTree=Ya(A);v(null,fe,N,$,A,Z,ie),P.el=fe.el}if(ne&&wt(ne,Z),!te&&(w=O&&O.onVnodeMounted)){const fe=P;wt(()=>Vt(w,D,fe),Z)}(P.shapeFlag&256||D&&Xi(D.vnode)&&D.vnode.shapeFlag&256)&&A.a&&wt(A.a,Z),A.isMounted=!0,P=N=$=null}},ge=A.effect=new Wc(ae,on,()=>wa(ue),A.scope),ue=A.update=()=>{ge.dirty&&ge.run()};ue.id=A.uid,Pi(A,!0),ue()},W=(A,P,N)=>{P.component=A;const $=A.vnode.props;A.vnode=P,A.next=null,Kv(A,P.props,$,N),Qv(A,P.children,N),nr(),Zu(A),ir()},H=(A,P,N,$,Z,ie,le,ae,ge=!1)=>{const ue=A&&A.children,w=A?A.shapeFlag:0,E=P.children,{patchFlag:O,shapeFlag:ee}=P;if(O>0){if(O&128){he(ue,E,N,$,Z,ie,le,ae,ge);return}else if(O&256){ce(ue,E,N,$,Z,ie,le,ae,ge);return}}ee&8?(w&16&&_e(ue,Z,ie),E!==ue&&u(N,E)):w&16?ee&16?he(ue,E,N,$,Z,ie,le,ae,ge):_e(ue,Z,ie,!0):(w&8&&u(N,""),ee&16&&C(E,N,$,Z,ie,le,ae,ge))},ce=(A,P,N,$,Z,ie,le,ae,ge)=>{A=A||Dr,P=P||Dr;const ue=A.length,w=P.length,E=Math.min(ue,w);let O;for(O=0;O<E;O++){const ee=P[O]=ge?di(P[O]):rn(P[O]);v(A[O],ee,N,null,Z,ie,le,ae,ge)}ue>w?_e(A,Z,ie,!0,!1,E):C(P,N,$,Z,ie,le,ae,ge,E)},he=(A,P,N,$,Z,ie,le,ae,ge)=>{let ue=0;const w=P.length;let E=A.length-1,O=w-1;for(;ue<=E&&ue<=O;){const ee=A[ue],ne=P[ue]=ge?di(P[ue]):rn(P[ue]);if(yn(ee,ne))v(ee,ne,N,null,Z,ie,le,ae,ge);else break;ue++}for(;ue<=E&&ue<=O;){const ee=A[E],ne=P[O]=ge?di(P[O]):rn(P[O]);if(yn(ee,ne))v(ee,ne,N,null,Z,ie,le,ae,ge);else break;E--,O--}if(ue>E){if(ue<=O){const ee=O+1,ne=ee<w?P[ee].el:$;for(;ue<=O;)v(null,P[ue]=ge?di(P[ue]):rn(P[ue]),N,ne,Z,ie,le,ae,ge),ue++}}else if(ue>O)for(;ue<=E;)q(A[ue],Z,ie,!0),ue++;else{const ee=ue,ne=ue,D=new Map;for(ue=ne;ue<=O;ue++){const ve=P[ue]=ge?di(P[ue]):rn(P[ue]);ve.key!=null&&D.set(ve.key,ue)}let te,fe=0;const J=O-ne+1;let Ae=!1,Pe=0;const Le=new Array(J);for(ue=0;ue<J;ue++)Le[ue]=0;for(ue=ee;ue<=E;ue++){const ve=A[ue];if(fe>=J){q(ve,Z,ie,!0);continue}let De;if(ve.key!=null)De=D.get(ve.key);else for(te=ne;te<=O;te++)if(Le[te-ne]===0&&yn(ve,P[te])){De=te;break}De===void 0?q(ve,Z,ie,!0):(Le[De-ne]=ue+1,De>=Pe?Pe=De:Ae=!0,v(ve,P[De],N,null,Z,ie,le,ae,ge),fe++)}const Re=Ae?s0(Le):Dr;for(te=Re.length-1,ue=J-1;ue>=0;ue--){const ve=ne+ue,De=P[ve],Je=ve+1<w?P[ve+1].el:$;Le[ue]===0?v(null,De,N,Je,Z,ie,le,ae,ge):Ae&&(te<0||ue!==Re[te]?Ee(De,N,Je,2):te--)}}},Ee=(A,P,N,$,Z=null)=>{const{el:ie,type:le,transition:ae,children:ge,shapeFlag:ue}=A;if(ue&6){Ee(A.component.subTree,P,N,$);return}if(ue&128){A.suspense.move(P,N,$);return}if(ue&64){le.move(A,P,N,ye);return}if(le===Dt){i(ie,P,N);for(let E=0;E<ge.length;E++)Ee(ge[E],P,N,$);i(A.anchor,P,N);return}if(le===Xo){_(A,P,N);return}if($!==2&&ue&1&&ae)if($===0)ae.beforeEnter(ie),i(ie,P,N),wt(()=>ae.enter(ie),Z);else{const{leave:E,delayLeave:O,afterLeave:ee}=ae,ne=()=>i(ie,P,N),D=()=>{E(ie,()=>{ne(),ee&&ee()})};O?O(ie,ne,D):D()}else i(ie,P,N)},q=(A,P,N,$=!1,Z=!1)=>{const{type:ie,props:le,ref:ae,children:ge,dynamicChildren:ue,shapeFlag:w,patchFlag:E,dirs:O}=A;if(ae!=null&&oa(ae,null,N,A,!0),w&256){P.ctx.deactivate(A);return}const ee=w&1&&O,ne=!Xi(A);let D;if(ne&&(D=le&&le.onVnodeBeforeUnmount)&&Vt(D,P,A),w&6)Se(A.component,N,$);else{if(w&128){A.suspense.unmount(N,$);return}ee&&bn(A,null,P,"beforeUnmount"),w&64?A.type.remove(A,P,N,Z,ye,$):ue&&(ie!==Dt||E>0&&E&64)?_e(ue,P,N,!1,!0):(ie===Dt&&E&384||!Z&&w&16)&&_e(ge,P,N),$&&pe(A)}(ne&&(D=le&&le.onVnodeUnmounted)||ee)&&wt(()=>{D&&Vt(D,P,A),ee&&bn(A,null,P,"unmounted")},N)},pe=A=>{const{type:P,el:N,anchor:$,transition:Z}=A;if(P===Dt){me(N,$);return}if(P===Xo){S(A);return}const ie=()=>{r(N),Z&&!Z.persisted&&Z.afterLeave&&Z.afterLeave()};if(A.shapeFlag&1&&Z&&!Z.persisted){const{leave:le,delayLeave:ae}=Z,ge=()=>le(N,ie);ae?ae(A.el,ie,ge):ge()}else ie()},me=(A,P)=>{let N;for(;A!==P;)N=d(A),r(A),A=N;r(P)},Se=(A,P,N)=>{const{bum:$,scope:Z,update:ie,subTree:le,um:ae}=A;$&&gs($),Z.stop(),ie&&(ie.active=!1,q(le,A,P,N)),ae&&wt(ae,P),wt(()=>{A.isUnmounted=!0},P),P&&P.pendingBranch&&!P.isUnmounted&&A.asyncDep&&!A.asyncResolved&&A.suspenseId===P.pendingId&&(P.deps--,P.deps===0&&P.resolve())},_e=(A,P,N,$=!1,Z=!1,ie=0)=>{for(let le=ie;le<A.length;le++)q(A[le],P,N,$,Z)},z=A=>A.shapeFlag&6?z(A.component.subTree):A.shapeFlag&128?A.suspense.next():d(A.anchor||A.el);let de=!1;const se=(A,P,N)=>{A==null?P._vnode&&q(P._vnode,null,null,!0):v(P._vnode||null,A,P,null,null,null,N),de||(de=!0,Zu(),na(),de=!1),P._vnode=A},ye={p:v,um:q,m:Ee,r:pe,mt:G,mc:C,pc:H,pbc:b,n:z,o:t};let we,k;return e&&([we,k]=e(ye)),{render:se,hydrate:we,createApp:qv(se,we)}}function tl({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Pi({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function lm(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function cm(t,e,n=!1){const i=t.children,r=e.children;if(Ue(i)&&Ue(r))for(let s=0;s<i.length;s++){const o=i[s];let a=r[s];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=r[s]=di(r[s]),a.el=o.el),n||cm(o,a)),a.type===zr&&(a.el=o.el)}}function s0(t){const e=t.slice(),n=[0];let i,r,s,o,a;const l=t.length;for(i=0;i<l;i++){const c=t[i];if(c!==0){if(r=n[n.length-1],t[r]<c){e[i]=r,n.push(i);continue}for(s=0,o=n.length-1;s<o;)a=s+o>>1,t[n[a]]<c?s=a+1:o=a;c<t[n[s]]&&(s>0&&(e[i]=n[s-1]),n[s]=i)}}for(s=n.length,o=n[s-1];s-- >0;)n[s]=o,o=e[o];return n}function um(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:um(e)}const o0=t=>t.__isTeleport,Dt=Symbol.for("v-fgt"),zr=Symbol.for("v-txt"),Ht=Symbol.for("v-cmt"),Xo=Symbol.for("v-stc"),vs=[];let an=null;function vn(t=!1){vs.push(an=t?null:[])}function fm(){vs.pop(),an=vs[vs.length-1]||null}let Vr=1;function df(t){Vr+=t}function dm(t){return t.dynamicChildren=Vr>0?an||Dr:null,fm(),Vr>0&&an&&an.push(t),t}function a0(t,e,n,i,r,s){return dm(pm(t,e,n,i,r,s,!0))}function Wn(t,e,n,i,r){return dm($e(t,e,n,i,r,!0))}function Gr(t){return t?t.__v_isVNode===!0:!1}function yn(t,e){return t.type===e.type&&t.key===e.key}const La="__vInternal",hm=({key:t})=>t??null,jo=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?ot(t)||_t(t)||Ne(t)?{i:mt,r:t,k:e,f:!!n}:t:null);function pm(t,e=null,n=null,i=0,r=null,s=t===Dt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&hm(e),ref:e&&jo(e),scopeId:Ra,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:s,patchFlag:i,dynamicProps:r,dynamicChildren:null,appContext:null,ctx:mt};return a?(du(l,n),s&128&&t.normalize(l)):n&&(l.shapeFlag|=ot(n)?8:16),Vr>0&&!o&&an&&(l.patchFlag>0||s&6)&&l.patchFlag!==32&&an.push(l),l}const $e=l0;function l0(t,e=null,n=null,i=0,r=null,s=!1){if((!t||t===Vp)&&(t=Ht),Gr(t)){const a=Zn(t,e,!0);return n&&du(a,n),Vr>0&&!s&&an&&(a.shapeFlag&6?an[an.indexOf(t)]=a:an.push(a)),a.patchFlag|=-2,a}if(g0(t)&&(t=t.__vccOpts),e){e=mm(e);let{class:a,style:l}=e;a&&!ot(a)&&(e.class=Ea(a)),nt(l)&&(Dp(l)&&!Ue(l)&&(l=gt({},l)),e.style=Ma(l))}const o=ot(t)?1:Gp(t)?128:o0(t)?64:nt(t)?4:Ne(t)?2:0;return pm(t,e,n,i,r,o,s,!0)}function mm(t){return t?Dp(t)||La in t?gt({},t):t:null}function Zn(t,e,n=!1){const{props:i,ref:r,patchFlag:s,children:o}=t,a=e?hu(i||{},e):i;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:a,key:a&&hm(a),ref:e&&e.ref?n&&r?Ue(r)?r.concat(jo(e)):[r,jo(e)]:jo(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:o,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==Dt?s===-1?16:s|16:s,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Zn(t.ssContent),ssFallback:t.ssFallback&&Zn(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function gm(t=" ",e=0){return $e(zr,null,t,e)}function nL(t="",e=!1){return e?(vn(),Wn(Ht,null,t)):$e(Ht,null,t)}function rn(t){return t==null||typeof t=="boolean"?$e(Ht):Ue(t)?$e(Dt,null,t.slice()):typeof t=="object"?di(t):$e(zr,null,String(t))}function di(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Zn(t)}function du(t,e){let n=0;const{shapeFlag:i}=t;if(e==null)e=null;else if(Ue(e))n=16;else if(typeof e=="object")if(i&65){const r=e.default;r&&(r._c&&(r._d=!1),du(t,r()),r._c&&(r._d=!0));return}else{n=32;const r=e._;!r&&!(La in e)?e._ctx=mt:r===3&&mt&&(mt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Ne(e)?(e={default:e,_ctx:mt},n=32):(e=String(e),i&64?(n=16,e=[gm(e)]):n=8);t.children=e,t.shapeFlag|=n}function hu(...t){const e={};for(let n=0;n<t.length;n++){const i=t[n];for(const r in i)if(r==="class")e.class!==i.class&&(e.class=Ea([e.class,i.class]));else if(r==="style")e.style=Ma([e.style,i.style]);else if(Hs(r)){const s=e[r],o=i[r];o&&s!==o&&!(Ue(s)&&s.includes(o))&&(e[r]=s?[].concat(s,o):o)}else r!==""&&(e[r]=i[r])}return e}function Vt(t,e,n,i=null){cn(t,e,7,[n,i])}const c0=tm();let u0=0;function f0(t,e,n){const i=t.type,r=(e?e.appContext:t.appContext)||c0,s={uid:u0++,vnode:t,type:i,parent:e,appContext:r,root:null,next:null,subTree:null,effect:null,update:null,scope:new vp(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(r.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:im(i,r),emitsOptions:zp(i,r),emit:null,emitted:null,propsDefaults:rt,inheritAttrs:i.inheritAttrs,ctx:rt,data:rt,props:rt,attrs:rt,slots:rt,refs:rt,setupState:rt,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return s.ctx={_:s},s.root=e?e.root:s,s.emit=mv.bind(null,s),t.ce&&t.ce(s),s}let yt=null;const $s=()=>yt||mt;let aa,sc;{const t=mp(),e=(n,i)=>{let r;return(r=t[n])||(r=t[n]=[]),r.push(i),s=>{r.length>1?r.forEach(o=>o(s)):r[0](s)}};aa=e("__VUE_INSTANCE_SETTERS__",n=>yt=n),sc=e("__VUE_SSR_SETTERS__",n=>Ys=n)}const qs=t=>{const e=yt;return aa(t),t.scope.on(),()=>{t.scope.off(),aa(e)}},hf=()=>{yt&&yt.scope.off(),aa(null)};function _m(t){return t.vnode.shapeFlag&4}let Ys=!1;function d0(t,e=!1){e&&sc(e);const{props:n,children:i}=t.vnode,r=_m(t);Yv(t,n,r,e),Jv(t,i);const s=r?h0(t,e):void 0;return e&&sc(!1),s}function h0(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=Ta(new Proxy(t.ctx,zv));const{setup:i}=n;if(i){const r=t.setupContext=i.length>1?m0(t):null,s=qs(t);nr();const o=Mi(i,t,0,[t.props,r]);if(ir(),s(),fp(o)){if(o.then(hf,hf),e)return o.then(a=>{oc(t,a,e)}).catch(a=>{ts(a,t,0)});t.asyncDep=o}else oc(t,o,e)}else vm(t,e)}function oc(t,e,n){Ne(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:nt(e)&&(t.setupState=Op(e)),vm(t,n)}let pf;function vm(t,e,n){const i=t.type;if(!t.render){if(!e&&pf&&!i.render){const r=i.template||cu(t).template;if(r){const{isCustomElement:s,compilerOptions:o}=t.appContext.config,{delimiters:a,compilerOptions:l}=i,c=gt(gt({isCustomElement:s,delimiters:a},o),l);i.render=pf(r,c)}}t.render=i.render||on}{const r=qs(t);nr();try{Vv(t)}finally{ir(),r()}}}function p0(t){return t.attrsProxy||(t.attrsProxy=new Proxy(t.attrs,{get(e,n){return jt(t,"get","$attrs"),e[n]}}))}function m0(t){const e=n=>{t.exposed=n||{}};return{get attrs(){return p0(t)},slots:t.slots,emit:t.emit,expose:e}}function Da(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(Op(Ta(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in _s)return _s[n](t)},has(e,n){return n in e||n in _s}}))}function ac(t,e=!0){return Ne(t)?t.displayName||t.name:t.name||e&&t.__name}function g0(t){return Ne(t)&&"__vccOpts"in t}const Fe=(t,e)=>sv(t,e,Ys);function Wt(t,e,n){const i=arguments.length;return i===2?nt(e)&&!Ue(e)?Gr(e)?$e(t,null,[e]):$e(t,e):$e(t,null,e):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&Gr(n)&&(n=[n]),$e(t,e,n))}const ym="3.4.19";/**
* @vue/runtime-dom v3.4.19
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/const _0="http://www.w3.org/2000/svg",v0="http://www.w3.org/1998/Math/MathML",hi=typeof document<"u"?document:null,mf=hi&&hi.createElement("template"),y0={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,i)=>{const r=e==="svg"?hi.createElementNS(_0,t):e==="mathml"?hi.createElementNS(v0,t):hi.createElement(t,n?{is:n}:void 0);return t==="select"&&i&&i.multiple!=null&&r.setAttribute("multiple",i.multiple),r},createText:t=>hi.createTextNode(t),createComment:t=>hi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>hi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,i,r,s){const o=n?n.previousSibling:e.lastChild;if(r&&(r===s||r.nextSibling))for(;e.insertBefore(r.cloneNode(!0),n),!(r===s||!(r=r.nextSibling)););else{mf.innerHTML=i==="svg"?`<svg>${t}</svg>`:i==="mathml"?`<math>${t}</math>`:t;const a=mf.content;if(i==="svg"||i==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},ni="transition",ss="animation",Wr=Symbol("_vtc"),Ia=(t,{slots:e})=>Wt(Dv,Mm(t),e);Ia.displayName="Transition";const xm={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},x0=Ia.props=gt({},$p,xm),Li=(t,e=[])=>{Ue(t)?t.forEach(n=>n(...e)):t&&t(...e)},gf=t=>t?Ue(t)?t.some(e=>e.length>1):t.length>1:!1;function Mm(t){const e={};for(const B in t)B in xm||(e[B]=t[B]);if(t.css===!1)return e;const{name:n="v",type:i,duration:r,enterFromClass:s=`${n}-enter-from`,enterActiveClass:o=`${n}-enter-active`,enterToClass:a=`${n}-enter-to`,appearFromClass:l=s,appearActiveClass:c=o,appearToClass:u=a,leaveFromClass:f=`${n}-leave-from`,leaveActiveClass:d=`${n}-leave-active`,leaveToClass:h=`${n}-leave-to`}=t,g=M0(r),v=g&&g[0],m=g&&g[1],{onBeforeEnter:p,onEnter:M,onEnterCancelled:_,onLeave:S,onLeaveCancelled:x,onBeforeAppear:T=p,onAppear:L=M,onAppearCancelled:C=_}=e,y=(B,I,G)=>{li(B,I?u:a),li(B,I?c:o),G&&G()},b=(B,I)=>{B._isLeaving=!1,li(B,f),li(B,h),li(B,d),I&&I()},F=B=>(I,G)=>{const X=B?L:M,V=()=>y(I,B,G);Li(X,[I,V]),_f(()=>{li(I,B?l:s),zn(I,B?u:a),gf(X)||vf(I,i,v,V)})};return gt(e,{onBeforeEnter(B){Li(p,[B]),zn(B,s),zn(B,o)},onBeforeAppear(B){Li(T,[B]),zn(B,l),zn(B,c)},onEnter:F(!1),onAppear:F(!0),onLeave(B,I){B._isLeaving=!0;const G=()=>b(B,I);zn(B,f),Sm(),zn(B,d),_f(()=>{B._isLeaving&&(li(B,f),zn(B,h),gf(S)||vf(B,i,m,G))}),Li(S,[B,G])},onEnterCancelled(B){y(B,!1),Li(_,[B])},onAppearCancelled(B){y(B,!0),Li(C,[B])},onLeaveCancelled(B){b(B),Li(x,[B])}})}function M0(t){if(t==null)return null;if(nt(t))return[nl(t.enter),nl(t.leave)];{const e=nl(t);return[e,e]}}function nl(t){return pp(t)}function zn(t,e){e.split(/\s+/).forEach(n=>n&&t.classList.add(n)),(t[Wr]||(t[Wr]=new Set)).add(e)}function li(t,e){e.split(/\s+/).forEach(i=>i&&t.classList.remove(i));const n=t[Wr];n&&(n.delete(e),n.size||(t[Wr]=void 0))}function _f(t){requestAnimationFrame(()=>{requestAnimationFrame(t)})}let E0=0;function vf(t,e,n,i){const r=t._endId=++E0,s=()=>{r===t._endId&&i()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Em(t,e);if(!o)return i();const c=o+"end";let u=0;const f=()=>{t.removeEventListener(c,d),s()},d=h=>{h.target===t&&++u>=l&&f()};setTimeout(()=>{u<l&&f()},a+1),t.addEventListener(c,d)}function Em(t,e){const n=window.getComputedStyle(t),i=g=>(n[g]||"").split(", "),r=i(`${ni}Delay`),s=i(`${ni}Duration`),o=yf(r,s),a=i(`${ss}Delay`),l=i(`${ss}Duration`),c=yf(a,l);let u=null,f=0,d=0;e===ni?o>0&&(u=ni,f=o,d=s.length):e===ss?c>0&&(u=ss,f=c,d=l.length):(f=Math.max(o,c),u=f>0?o>c?ni:ss:null,d=u?u===ni?s.length:l.length:0);const h=u===ni&&/\b(transform|all)(,|$)/.test(i(`${ni}Property`).toString());return{type:u,timeout:f,propCount:d,hasTransform:h}}function yf(t,e){for(;t.length<e.length;)t=t.concat(t);return Math.max(...e.map((n,i)=>xf(n)+xf(t[i])))}function xf(t){return t==="auto"?0:Number(t.slice(0,-1).replace(",","."))*1e3}function Sm(){return document.body.offsetHeight}function S0(t,e,n){const i=t[Wr];i&&(e=(e?[e,...i]:[...i]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const Ds=Symbol("_vod"),iL={beforeMount(t,{value:e},{transition:n}){t[Ds]=t.style.display==="none"?"":t.style.display,n&&e?n.beforeEnter(t):os(t,e)},mounted(t,{value:e},{transition:n}){n&&e&&n.enter(t)},updated(t,{value:e,oldValue:n},{transition:i}){!e==!n&&(t.style.display===t[Ds]||!e)||(i?e?(i.beforeEnter(t),os(t,!0),i.enter(t)):i.leave(t,()=>{os(t,!1)}):os(t,e))},beforeUnmount(t,{value:e}){os(t,e)}};function os(t,e){t.style.display=e?t[Ds]:"none"}const b0=Symbol(""),T0=/(^|;)\s*display\s*:/;function w0(t,e,n){const i=t.style,r=ot(n),s=i.display;let o=!1;if(n&&!r){if(e&&!ot(e))for(const a in e)n[a]==null&&lc(i,a,"");for(const a in n)a==="display"&&(o=!0),lc(i,a,n[a])}else if(r){if(e!==n){const a=i[b0];a&&(n+=";"+a),i.cssText=n,o=T0.test(n)}}else e&&t.removeAttribute("style");Ds in t&&(t[Ds]=o?i.display:"",i.display=s)}const Mf=/\s*!important$/;function lc(t,e,n){if(Ue(n))n.forEach(i=>lc(t,e,i));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const i=A0(t,e);Mf.test(n)?t.setProperty(es(i),n.replace(Mf,""),"important"):t[i]=n}}const Ef=["Webkit","Moz","ms"],il={};function A0(t,e){const n=il[e];if(n)return n;let i=Rn(e);if(i!=="filter"&&i in t)return il[e]=i;i=Vs(i);for(let r=0;r<Ef.length;r++){const s=Ef[r]+i;if(s in t)return il[e]=s}return e}const Sf="http://www.w3.org/1999/xlink";function R0(t,e,n,i,r){if(i&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sf,e.slice(6,e.length)):t.setAttributeNS(Sf,e,n);else{const s=F_(e);n==null||s&&!gp(n)?t.removeAttribute(e):t.setAttribute(e,s?"":n)}}function C0(t,e,n,i,r,s,o){if(e==="innerHTML"||e==="textContent"){i&&o(i,r,s),t[e]=n??"";return}const a=t.tagName;if(e==="value"&&a!=="PROGRESS"&&!a.includes("-")){t._value=n;const c=a==="OPTION"?t.getAttribute("value"):t.value,u=n??"";c!==u&&(t.value=u),n==null&&t.removeAttribute(e);return}let l=!1;if(n===""||n==null){const c=typeof t[e];c==="boolean"?n=gp(n):n==null&&c==="string"?(n="",l=!0):c==="number"&&(n=0,l=!0)}try{t[e]=n}catch{}l&&t.removeAttribute(e)}function P0(t,e,n,i){t.addEventListener(e,n,i)}function L0(t,e,n,i){t.removeEventListener(e,n,i)}const bf=Symbol("_vei");function D0(t,e,n,i,r=null){const s=t[bf]||(t[bf]={}),o=s[e];if(i&&o)o.value=i;else{const[a,l]=I0(e);if(i){const c=s[e]=O0(i,r);P0(t,a,c,l)}else o&&(L0(t,a,o,l),s[e]=void 0)}}const Tf=/(?:Once|Passive|Capture)$/;function I0(t){let e;if(Tf.test(t)){e={};let i;for(;i=t.match(Tf);)t=t.slice(0,t.length-i[0].length),e[i[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):es(t.slice(2)),e]}let rl=0;const U0=Promise.resolve(),N0=()=>rl||(U0.then(()=>rl=0),rl=Date.now());function O0(t,e){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;cn(F0(i,n.value),e,5,[i])};return n.value=t,n.attached=N0(),n}function F0(t,e){if(Ue(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(i=>r=>!r._stopped&&i&&i(r))}else return e}const wf=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,B0=(t,e,n,i,r,s,o,a,l)=>{const c=r==="svg";e==="class"?S0(t,i,c):e==="style"?w0(t,n,i):Hs(e)?zc(e)||D0(t,e,n,i,o):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):k0(t,e,i,c))?C0(t,e,i,s,o,a,l):(e==="true-value"?t._trueValue=i:e==="false-value"&&(t._falseValue=i),R0(t,e,i,c))};function k0(t,e,n,i){if(i)return!!(e==="innerHTML"||e==="textContent"||e in t&&wf(e)&&Ne(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const r=t.tagName;if(r==="IMG"||r==="VIDEO"||r==="CANVAS"||r==="SOURCE")return!1}return wf(e)&&ot(n)?!1:e in t}const bm=new WeakMap,Tm=new WeakMap,la=Symbol("_moveCb"),Af=Symbol("_enterCb"),wm={name:"TransitionGroup",props:gt({},x0,{tag:String,moveClass:String}),setup(t,{slots:e}){const n=$s(),i=jp();let r,s;return au(()=>{if(!r.length)return;const o=t.moveClass||`${t.name||"v"}-move`;if(!W0(r[0].el,n.vnode.el,o))return;r.forEach(z0),r.forEach(V0);const a=r.filter(G0);Sm(),a.forEach(l=>{const c=l.el,u=c.style;zn(c,o),u.transform=u.webkitTransform=u.transitionDuration="";const f=c[la]=d=>{d&&d.target!==c||(!d||/transform$/.test(d.propertyName))&&(c.removeEventListener("transitionend",f),c[la]=null,li(c,o))};c.addEventListener("transitionend",f)})}),()=>{const o=je(t),a=Mm(o);let l=o.tag||Dt;r=s,s=e.default?ou(e.default()):[];for(let c=0;c<s.length;c++){const u=s[c];u.key!=null&&Hr(u,Ls(u,a,i,n))}if(r)for(let c=0;c<r.length;c++){const u=r[c];Hr(u,Ls(u,a,i,n)),bm.set(u,u.el.getBoundingClientRect())}return $e(l,null,s)}}},H0=t=>delete t.mode;wm.props;const rL=wm;function z0(t){const e=t.el;e[la]&&e[la](),e[Af]&&e[Af]()}function V0(t){Tm.set(t,t.el.getBoundingClientRect())}function G0(t){const e=bm.get(t),n=Tm.get(t),i=e.left-n.left,r=e.top-n.top;if(i||r){const s=t.el.style;return s.transform=s.webkitTransform=`translate(${i}px,${r}px)`,s.transitionDuration="0s",t}}function W0(t,e,n){const i=t.cloneNode(),r=t[Wr];r&&r.forEach(a=>{a.split(/\s+/).forEach(l=>l&&i.classList.remove(l))}),n.split(/\s+/).forEach(a=>a&&i.classList.add(a)),i.style.display="none";const s=e.nodeType===1?e:e.parentNode;s.appendChild(i);const{hasTransform:o}=Em(i);return s.removeChild(i),o}const X0=["ctrl","shift","alt","meta"],j0={stop:t=>t.stopPropagation(),prevent:t=>t.preventDefault(),self:t=>t.target!==t.currentTarget,ctrl:t=>!t.ctrlKey,shift:t=>!t.shiftKey,alt:t=>!t.altKey,meta:t=>!t.metaKey,left:t=>"button"in t&&t.button!==0,middle:t=>"button"in t&&t.button!==1,right:t=>"button"in t&&t.button!==2,exact:(t,e)=>X0.some(n=>t[`${n}Key`]&&!e.includes(n))},sL=(t,e)=>{const n=t._withMods||(t._withMods={}),i=e.join(".");return n[i]||(n[i]=(r,...s)=>{for(let o=0;o<e.length;o++){const a=j0[e[o]];if(a&&a(r,e))return}return t(r,...s)})},Am=gt({patchProp:B0},y0);let ys,Rf=!1;function $0(){return ys||(ys=i0(Am))}function q0(){return ys=Rf?ys:r0(Am),Rf=!0,ys}const Y0=(...t)=>{const e=$0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Cm(i);if(!r)return;const s=e._component;!Ne(s)&&!s.render&&!s.template&&(s.template=r.innerHTML),r.innerHTML="";const o=n(r,!1,Rm(r));return r instanceof Element&&(r.removeAttribute("v-cloak"),r.setAttribute("data-v-app","")),o},e},K0=(...t)=>{const e=q0().createApp(...t),{mount:n}=e;return e.mount=i=>{const r=Cm(i);if(r)return n(r,!0,Rm(r))},e};function Rm(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Cm(t){return ot(t)?document.querySelector(t):t}const Z0=/#/g,J0=/&/g,Q0=/\//g,ey=/=/g,pu=/\+/g,ty=/%5e/gi,ny=/%60/gi,iy=/%7c/gi,ry=/%20/gi;function sy(t){return encodeURI(""+t).replace(iy,"|")}function cc(t){return sy(typeof t=="string"?t:JSON.stringify(t)).replace(pu,"%2B").replace(ry,"+").replace(Z0,"%23").replace(J0,"%26").replace(ny,"`").replace(ty,"^").replace(Q0,"%2F")}function sl(t){return cc(t).replace(ey,"%3D")}function ca(t=""){try{return decodeURIComponent(""+t)}catch{return""+t}}function oy(t){return ca(t.replace(pu," "))}function ay(t){return ca(t.replace(pu," "))}function ly(t=""){const e={};t[0]==="?"&&(t=t.slice(1));for(const n of t.split("&")){const i=n.match(/([^=]+)=?(.*)/)||[];if(i.length<2)continue;const r=oy(i[1]);if(r==="__proto__"||r==="constructor")continue;const s=ay(i[2]||"");e[r]===void 0?e[r]=s:Array.isArray(e[r])?e[r].push(s):e[r]=[e[r],s]}return e}function cy(t,e){return(typeof e=="number"||typeof e=="boolean")&&(e=String(e)),e?Array.isArray(e)?e.map(n=>`${sl(t)}=${cc(n)}`).join("&"):`${sl(t)}=${cc(e)}`:sl(t)}function uy(t){return Object.keys(t).filter(e=>t[e]!==void 0).map(e=>cy(e,t[e])).filter(Boolean).join("&")}const fy=/^[\s\w\0+.-]{2,}:([/\\]{1,2})/,dy=/^[\s\w\0+.-]{2,}:([/\\]{2})?/,hy=/^([/\\]\s*){2,}[^/\\]/,py=/^[\s\0]*(blob|data|javascript|vbscript):$/i,my=/\/$|\/\?|\/#/,gy=/^\.?\//;function Ks(t,e={}){return typeof e=="boolean"&&(e={acceptRelative:e}),e.strict?fy.test(t):dy.test(t)||(e.acceptRelative?hy.test(t):!1)}function _y(t){return!!t&&py.test(t)}function uc(t="",e){return e?my.test(t):t.endsWith("/")}function mu(t="",e){if(!e)return(uc(t)?t.slice(0,-1):t)||"/";if(!uc(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");r>=0&&(n=t.slice(0,r),i=t.slice(r));const[s,...o]=n.split("?");return(s.slice(0,-1)||"/")+(o.length>0?`?${o.join("?")}`:"")+i}function fc(t="",e){if(!e)return t.endsWith("/")?t:t+"/";if(uc(t,!0))return t||"/";let n=t,i="";const r=t.indexOf("#");if(r>=0&&(n=t.slice(0,r),i=t.slice(r),!n))return i;const[s,...o]=n.split("?");return s+"/"+(o.length>0?`?${o.join("?")}`:"")+i}function vy(t=""){return t.startsWith("/")}function Cf(t=""){return vy(t)?t:"/"+t}function yy(t,e){if(Lm(e)||Ks(t))return t;const n=mu(e);return t.startsWith(n)?t:Zs(n,t)}function Pf(t,e){if(Lm(e))return t;const n=mu(e);if(!t.startsWith(n))return t;const i=t.slice(n.length);return i[0]==="/"?i:"/"+i}function Pm(t,e){const n=Ua(t),i={...ly(n.search),...e};return n.search=uy(i),Ey(n)}function Lm(t){return!t||t==="/"}function xy(t){return t&&t!=="/"}function Zs(t,...e){let n=t||"";for(const i of e.filter(r=>xy(r)))if(n){const r=i.replace(gy,"");n=fc(n)+r}else n=i;return n}function My(t,e,n={}){return n.trailingSlash||(t=fc(t),e=fc(e)),n.leadingSlash||(t=Cf(t),e=Cf(e)),n.encoding||(t=ca(t),e=ca(e)),t===e}const Dm=Symbol.for("ufo:protocolRelative");function Ua(t="",e){const n=t.match(/^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i);if(n){const[,f,d=""]=n;return{protocol:f.toLowerCase(),pathname:d,href:f+d,auth:"",host:"",search:"",hash:""}}if(!Ks(t,{acceptRelative:!0}))return e?Ua(e+t):Lf(t);const[,i="",r,s=""]=t.replace(/\\/g,"/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/)||[],[,o="",a=""]=s.match(/([^#/?]*)(.*)?/)||[],{pathname:l,search:c,hash:u}=Lf(a.replace(/\/(?=[A-Za-z]:)/,""));return{protocol:i.toLowerCase(),auth:r?r.slice(0,Math.max(0,r.length-1)):"",host:o,pathname:l,search:c,hash:u,[Dm]:!i}}function Lf(t=""){const[e="",n="",i=""]=(t.match(/([^#?]*)(\?[^#]*)?(#.*)?/)||[]).splice(1);return{pathname:e,search:n,hash:i}}function Ey(t){const e=t.pathname||"",n=t.search?(t.search.startsWith("?")?"":"?")+t.search:"",i=t.hash||"",r=t.auth?t.auth+"@":"",s=t.host||"";return(t.protocol||t[Dm]?(t.protocol||"")+"//":"")+r+s+e+n+i}const Sy=()=>{var t;return((t=window==null?void 0:window.__NUXT__)==null?void 0:t.config)||{}},ua=Sy().app,by=()=>ua.baseURL,Ty=()=>ua.buildAssetsDir,gu=(...t)=>Zs(Im(),Ty(),...t),Im=(...t)=>{const e=ua.cdnURL||ua.baseURL;return t.length?Zs(e,...t):e};globalThis.__buildAssetsURL=gu,globalThis.__publicAssetsURL=Im;const wy=/"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/,Ay=/"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/,Ry=/^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;function Cy(t,e){if(t==="__proto__"||t==="constructor"&&e&&typeof e=="object"&&"prototype"in e){Py(t);return}return e}function Py(t){console.warn(`[destr] Dropping "${t}" key to prevent prototype pollution.`)}function fa(t,e={}){if(typeof t!="string")return t;const n=t.trim();if(t[0]==='"'&&t.endsWith('"')&&!t.includes("\\"))return n.slice(1,-1);if(n.length<=9){const i=n.toLowerCase();if(i==="true")return!0;if(i==="false")return!1;if(i==="undefined")return;if(i==="null")return null;if(i==="nan")return Number.NaN;if(i==="infinity")return Number.POSITIVE_INFINITY;if(i==="-infinity")return Number.NEGATIVE_INFINITY}if(!Ry.test(t)){if(e.strict)throw new SyntaxError("[destr] Invalid JSON");return t}try{if(wy.test(t)||Ay.test(t)){if(e.strict)throw new Error("[destr] Possible prototype pollution");return JSON.parse(t,Cy)}return JSON.parse(t)}catch(i){if(e.strict)throw i;return t}}class Ly extends Error{constructor(e,n){super(e,n),this.name="FetchError",n!=null&&n.cause&&!this.cause&&(this.cause=n.cause)}}function Dy(t){var l,c,u,f,d;const e=((l=t.error)==null?void 0:l.message)||((c=t.error)==null?void 0:c.toString())||"",n=((u=t.request)==null?void 0:u.method)||((f=t.options)==null?void 0:f.method)||"GET",i=((d=t.request)==null?void 0:d.url)||String(t.request)||"/",r=`[${n}] ${JSON.stringify(i)}`,s=t.response?`${t.response.status} ${t.response.statusText}`:"<no response>",o=`${r}: ${s}${e?` ${e}`:""}`,a=new Ly(o,t.error?{cause:t.error}:void 0);for(const h of["request","options","response"])Object.defineProperty(a,h,{get(){return t[h]}});for(const[h,g]of[["data","_data"],["status","status"],["statusCode","status"],["statusText","statusText"],["statusMessage","statusText"]])Object.defineProperty(a,h,{get(){return t.response&&t.response[g]}});return a}const Iy=new Set(Object.freeze(["PATCH","POST","PUT","DELETE"]));function Df(t="GET"){return Iy.has(t.toUpperCase())}function Uy(t){if(t===void 0)return!1;const e=typeof t;return e==="string"||e==="number"||e==="boolean"||e===null?!0:e!=="object"?!1:Array.isArray(t)?!0:t.buffer?!1:t.constructor&&t.constructor.name==="Object"||typeof t.toJSON=="function"}const Ny=new Set(["image/svg","application/xml","application/xhtml","application/html"]),Oy=/^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;function Fy(t=""){if(!t)return"json";const e=t.split(";").shift()||"";return Oy.test(e)?"json":Ny.has(e)||e.startsWith("text/")?"text":"blob"}function By(t,e,n=globalThis.Headers){const i={...e,...t};if(e!=null&&e.params&&(t!=null&&t.params)&&(i.params={...e==null?void 0:e.params,...t==null?void 0:t.params}),e!=null&&e.query&&(t!=null&&t.query)&&(i.query={...e==null?void 0:e.query,...t==null?void 0:t.query}),e!=null&&e.headers&&(t!=null&&t.headers)){i.headers=new n((e==null?void 0:e.headers)||{});for(const[r,s]of new n((t==null?void 0:t.headers)||{}))i.headers.set(r,s)}return i}const ky=new Set([408,409,425,429,500,502,503,504]),Hy=new Set([101,204,205,304]);function Um(t={}){const{fetch:e=globalThis.fetch,Headers:n=globalThis.Headers,AbortController:i=globalThis.AbortController}=t;async function r(a){const l=a.error&&a.error.name==="AbortError"&&!a.options.timeout||!1;if(a.options.retry!==!1&&!l){let u;typeof a.options.retry=="number"?u=a.options.retry:u=Df(a.options.method)?0:1;const f=a.response&&a.response.status||500;if(u>0&&(Array.isArray(a.options.retryStatusCodes)?a.options.retryStatusCodes.includes(f):ky.has(f))){const d=a.options.retryDelay||0;return d>0&&await new Promise(h=>setTimeout(h,d)),s(a.request,{...a.options,retry:u-1,timeout:a.options.timeout})}}const c=Dy(a);throw Error.captureStackTrace&&Error.captureStackTrace(c,s),c}const s=async function(l,c={}){var d;const u={request:l,options:By(c,t.defaults,n),response:void 0,error:void 0};if(u.options.method=(d=u.options.method)==null?void 0:d.toUpperCase(),u.options.onRequest&&await u.options.onRequest(u),typeof u.request=="string"&&(u.options.baseURL&&(u.request=yy(u.request,u.options.baseURL)),(u.options.query||u.options.params)&&(u.request=Pm(u.request,{...u.options.params,...u.options.query}))),u.options.body&&Df(u.options.method)&&(Uy(u.options.body)?(u.options.body=typeof u.options.body=="string"?u.options.body:JSON.stringify(u.options.body),u.options.headers=new n(u.options.headers||{}),u.options.headers.has("content-type")||u.options.headers.set("content-type","application/json"),u.options.headers.has("accept")||u.options.headers.set("accept","application/json")):("pipeTo"in u.options.body&&typeof u.options.body.pipeTo=="function"||typeof u.options.body.pipe=="function")&&("duplex"in u.options||(u.options.duplex="half"))),!u.options.signal&&u.options.timeout){const h=new i;setTimeout(()=>h.abort(),u.options.timeout),u.options.signal=h.signal}try{u.response=await e(u.request,u.options)}catch(h){return u.error=h,u.options.onRequestError&&await u.options.onRequestError(u),await r(u)}if(u.response.body&&!Hy.has(u.response.status)&&u.options.method!=="HEAD"){const h=(u.options.parseResponse?"json":u.options.responseType)||Fy(u.response.headers.get("content-type")||"");switch(h){case"json":{const g=await u.response.text(),v=u.options.parseResponse||fa;u.response._data=v(g);break}case"stream":{u.response._data=u.response.body;break}default:u.response._data=await u.response[h]()}}return u.options.onResponse&&await u.options.onResponse(u),!u.options.ignoreResponseError&&u.response.status>=400&&u.response.status<600?(u.options.onResponseError&&await u.options.onResponseError(u),await r(u)):u.response},o=async function(l,c){return(await s(l,c))._data};return o.raw=s,o.native=(...a)=>e(...a),o.create=(a={})=>Um({...t,defaults:{...t.defaults,...a}}),o}const _u=function(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("unable to locate global object")}(),zy=_u.fetch||(()=>Promise.reject(new Error("[ofetch] global.fetch is not supported!"))),Vy=_u.Headers,Gy=_u.AbortController,Wy=Um({fetch:zy,Headers:Vy,AbortController:Gy}),Xy=Wy;globalThis.$fetch||(globalThis.$fetch=Xy.create({baseURL:by()}));function dc(t,e={},n){for(const i in t){const r=t[i],s=n?`${n}:${i}`:i;typeof r=="object"&&r!==null?dc(r,e,s):typeof r=="function"&&(e[s]=r)}return e}const jy={run:t=>t()},$y=()=>jy,Nm=typeof console.createTask<"u"?console.createTask:$y;function qy(t,e){const n=e.shift(),i=Nm(n);return t.reduce((r,s)=>r.then(()=>i.run(()=>s(...e))),Promise.resolve())}function Yy(t,e){const n=e.shift(),i=Nm(n);return Promise.all(t.map(r=>i.run(()=>r(...e))))}function ol(t,e){for(const n of[...t])n(e)}class Ky{constructor(){this._hooks={},this._before=void 0,this._after=void 0,this._deprecatedMessages=void 0,this._deprecatedHooks={},this.hook=this.hook.bind(this),this.callHook=this.callHook.bind(this),this.callHookWith=this.callHookWith.bind(this)}hook(e,n,i={}){if(!e||typeof n!="function")return()=>{};const r=e;let s;for(;this._deprecatedHooks[e];)s=this._deprecatedHooks[e],e=s.to;if(s&&!i.allowDeprecated){let o=s.message;o||(o=`${r} hook has been deprecated`+(s.to?`, please use ${s.to}`:"")),this._deprecatedMessages||(this._deprecatedMessages=new Set),this._deprecatedMessages.has(o)||(console.warn(o),this._deprecatedMessages.add(o))}if(!n.name)try{Object.defineProperty(n,"name",{get:()=>"_"+e.replace(/\W+/g,"_")+"_hook_cb",configurable:!0})}catch{}return this._hooks[e]=this._hooks[e]||[],this._hooks[e].push(n),()=>{n&&(this.removeHook(e,n),n=void 0)}}hookOnce(e,n){let i,r=(...s)=>(typeof i=="function"&&i(),i=void 0,r=void 0,n(...s));return i=this.hook(e,r),i}removeHook(e,n){if(this._hooks[e]){const i=this._hooks[e].indexOf(n);i!==-1&&this._hooks[e].splice(i,1),this._hooks[e].length===0&&delete this._hooks[e]}}deprecateHook(e,n){this._deprecatedHooks[e]=typeof n=="string"?{to:n}:n;const i=this._hooks[e]||[];delete this._hooks[e];for(const r of i)this.hook(e,r)}deprecateHooks(e){Object.assign(this._deprecatedHooks,e);for(const n in e)this.deprecateHook(n,e[n])}addHooks(e){const n=dc(e),i=Object.keys(n).map(r=>this.hook(r,n[r]));return()=>{for(const r of i.splice(0,i.length))r()}}removeHooks(e){const n=dc(e);for(const i in n)this.removeHook(i,n[i])}removeAllHooks(){for(const e in this._hooks)delete this._hooks[e]}callHook(e,...n){return n.unshift(e),this.callHookWith(qy,e,...n)}callHookParallel(e,...n){return n.unshift(e),this.callHookWith(Yy,e,...n)}callHookWith(e,n,...i){const r=this._before||this._after?{name:n,args:i,context:{}}:void 0;this._before&&ol(this._before,r);const s=e(n in this._hooks?[...this._hooks[n]]:[],i);return s instanceof Promise?s.finally(()=>{this._after&&r&&ol(this._after,r)}):(this._after&&r&&ol(this._after,r),s)}beforeEach(e){return this._before=this._before||[],this._before.push(e),()=>{if(this._before!==void 0){const n=this._before.indexOf(e);n!==-1&&this._before.splice(n,1)}}}afterEach(e){return this._after=this._after||[],this._after.push(e),()=>{if(this._after!==void 0){const n=this._after.indexOf(e);n!==-1&&this._after.splice(n,1)}}}}function Om(){return new Ky}function Zy(t={}){let e,n=!1;const i=o=>{if(e&&e!==o)throw new Error("Context conflict")};let r;if(t.asyncContext){const o=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;o?r=new o:console.warn("[unctx] `AsyncLocalStorage` is not provided.")}const s=()=>{if(r&&e===void 0){const o=r.getStore();if(o!==void 0)return o}return e};return{use:()=>{const o=s();if(o===void 0)throw new Error("Context is not available");return o},tryUse:()=>s(),set:(o,a)=>{a||i(o),e=o,n=!0},unset:()=>{e=void 0,n=!1},call:(o,a)=>{i(o),e=o;try{return r?r.run(o,a):a()}finally{n||(e=void 0)}},async callAsync(o,a){e=o;const l=()=>{e=o},c=()=>e===o?l:void 0;hc.add(c);try{const u=r?r.run(o,a):a();return n||(e=void 0),await u}finally{hc.delete(c)}}}}function Jy(t={}){const e={};return{get(n,i={}){return e[n]||(e[n]=Zy({...t,...i})),e[n],e[n]}}}const da=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:typeof window<"u"?window:{},If="__unctx__",Qy=da[If]||(da[If]=Jy()),ex=(t,e={})=>Qy.get(t,e),Uf="__unctx_async_handlers__",hc=da[Uf]||(da[Uf]=new Set);function Is(t){const e=[];for(const r of hc){const s=r();s&&e.push(s)}const n=()=>{for(const r of e)r()};let i=t();return i&&typeof i=="object"&&"catch"in i&&(i=i.catch(r=>{throw n(),r})),[i,n]}const Fm=ex("nuxt-app",{asyncContext:!1}),tx="__nuxt_plugin";function nx(t){let e=0;const n={_scope:Sa(),provide:void 0,globalName:"nuxt",versions:{get nuxt(){return"3.10.3"},get vue(){return n.vueApp.version}},payload:vt({data:{},state:{},once:new Set,_errors:{},...window.__NUXT__??{}}),static:{data:{}},runWithContext:r=>n._scope.run(()=>sx(n,r)),isHydrating:!0,deferHydration(){if(!n.isHydrating)return()=>{};e++;let r=!1;return()=>{if(!r&&(r=!0,e--,e===0))return n.isHydrating=!1,n.callHook("app:suspense:resolve")}},_asyncDataPromises:{},_asyncData:{},_payloadRevivers:{},...t};n.hooks=Om(),n.hook=n.hooks.hook,n.callHook=n.hooks.callHook,n.provide=(r,s)=>{const o="$"+r;_o(n,o,s),_o(n.vueApp.config.globalProperties,o,s)},_o(n.vueApp,"$nuxt",n),_o(n.vueApp.config.globalProperties,"$nuxt",n);{window.addEventListener("nuxt.preloadError",s=>{n.callHook("app:chunkError",{error:s.payload})}),window.useNuxtApp=window.useNuxtApp||ut;const r=n.hook("app:error",(...s)=>{console.error("[nuxt] error caught during app initialization",...s)});n.hook("app:mounted",r)}const i=vt(n.payload.config);return n.provide("config",i),n}async function ix(t,e){if(e.hooks&&t.hooks.addHooks(e.hooks),typeof e=="function"){const{provide:n}=await t.runWithContext(()=>e(t))||{};if(n&&typeof n=="object")for(const i in n)t.provide(i,n[i])}}async function rx(t,e){const n=[],i=[],r=[],s=[];let o=0;async function a(l){var u;const c=((u=l.dependsOn)==null?void 0:u.filter(f=>e.some(d=>d._name===f)&&!n.includes(f)))??[];if(c.length>0)i.push([new Set(c),l]);else{const f=ix(t,l).then(async()=>{l._name&&(n.push(l._name),await Promise.all(i.map(async([d,h])=>{d.has(l._name)&&(d.delete(l._name),d.size===0&&(o++,await a(h)))})))});l.parallel?r.push(f.catch(d=>s.push(d))):await f}}for(const l of e)await a(l);if(await Promise.all(r),o)for(let l=0;l<o;l++)await Promise.all(r);if(s.length)throw s[0]}function En(t){if(typeof t=="function")return t;const e=t._name||t.name;return delete t.name,Object.assign(t.setup||(()=>{}),t,{[tx]:!0,_name:e})}function sx(t,e,n){const i=()=>n?e(...n):e();return Fm.set(t),t.vueApp.runWithContext(i)}function ox(){var e;let t;return uu()&&(t=(e=$s())==null?void 0:e.appContext.app.$nuxt),t=t||Fm.tryUse(),t||null}function ut(){const t=ox();if(!t)throw new Error("[nuxt] instance unavailable");return t}function vu(t){return ut().$config}function _o(t,e,n){Object.defineProperty(t,e,{get:()=>n})}function ax(t){return{ctx:{table:t},matchAll:e=>km(e,t)}}function Bm(t){const e={};for(const n in t)e[n]=n==="dynamic"?new Map(Object.entries(t[n]).map(([i,r])=>[i,Bm(r)])):new Map(Object.entries(t[n]));return e}function lx(t){return ax(Bm(t))}function km(t,e){const n=[];for(const[r,s]of Nf(e.wildcard))t.startsWith(r)&&n.push(s);for(const[r,s]of Nf(e.dynamic))if(t.startsWith(r+"/")){const o="/"+t.slice(r.length).split("/").splice(2).join("/");n.push(...km(o,s))}const i=e.static.get(t);return i&&n.push(i),n.filter(Boolean)}function Nf(t){return[...t.entries()].sort((e,n)=>e[0].length-n[0].length)}function al(t){if(t===null||typeof t!="object")return!1;const e=Object.getPrototypeOf(t);return e!==null&&e!==Object.prototype&&Object.getPrototypeOf(e)!==null||Symbol.iterator in t?!1:Symbol.toStringTag in t?Object.prototype.toString.call(t)==="[object Module]":!0}function pc(t,e,n=".",i){if(!al(e))return pc(t,{},n,i);const r=Object.assign({},e);for(const s in t){if(s==="__proto__"||s==="constructor")continue;const o=t[s];o!=null&&(i&&i(r,s,o,n)||(Array.isArray(o)&&Array.isArray(r[s])?r[s]=[...o,...r[s]]:al(o)&&al(r[s])?r[s]=pc(o,r[s],(n?`${n}.`:"")+s.toString(),i):r[s]=o))}return r}function Hm(t){return(...e)=>e.reduce((n,i)=>pc(n,i,"",t),{})}const zm=Hm(),cx=Hm((t,e,n)=>{if(t[e]!==void 0&&typeof n=="function")return t[e]=n(t[e]),!0});function ux(t,e){try{return e in t}catch{return!1}}var fx=Object.defineProperty,dx=(t,e,n)=>e in t?fx(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Fi=(t,e,n)=>(dx(t,typeof e!="symbol"?e+"":e,n),n);class mc extends Error{constructor(e,n={}){super(e,n),Fi(this,"statusCode",500),Fi(this,"fatal",!1),Fi(this,"unhandled",!1),Fi(this,"statusMessage"),Fi(this,"data"),Fi(this,"cause"),n.cause&&!this.cause&&(this.cause=n.cause)}toJSON(){const e={message:this.message,statusCode:_c(this.statusCode,500)};return this.statusMessage&&(e.statusMessage=Vm(this.statusMessage)),this.data!==void 0&&(e.data=this.data),e}}Fi(mc,"__h3_error__",!0);function gc(t){if(typeof t=="string")return new mc(t);if(hx(t))return t;const e=new mc(t.message??t.statusMessage??"",{cause:t.cause||t});if(ux(t,"stack"))try{Object.defineProperty(e,"stack",{get(){return t.stack}})}catch{try{e.stack=t.stack}catch{}}if(t.data&&(e.data=t.data),t.statusCode?e.statusCode=_c(t.statusCode,e.statusCode):t.status&&(e.statusCode=_c(t.status,e.statusCode)),t.statusMessage?e.statusMessage=t.statusMessage:t.statusText&&(e.statusMessage=t.statusText),e.statusMessage){const n=e.statusMessage;Vm(e.statusMessage)!==n&&console.warn("[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default.")}return t.fatal!==void 0&&(e.fatal=t.fatal),t.unhandled!==void 0&&(e.unhandled=t.unhandled),e}function hx(t){var e;return((e=t==null?void 0:t.constructor)==null?void 0:e.__h3_error__)===!0}const px=/[^\u0009\u0020-\u007E]/g;function Vm(t=""){return t.replace(px,"")}function _c(t,e=200){return!t||(typeof t=="string"&&(t=Number.parseInt(t,10)),t<100||t>999)?e:t}const Gm=Symbol("layout-meta"),Js=Symbol("route"),Ln=()=>{var t;return(t=ut())==null?void 0:t.$router},yu=()=>uu()?st(Js,ut()._route):ut()._route;const mx=()=>{try{if(ut()._processingMiddleware)return!0}catch{return!0}return!1},oL=(t,e)=>{t||(t="/");const n=typeof t=="string"?t:Pm(t.path||"/",t.query||{})+(t.hash||"");if(e!=null&&e.open){{const{target:a="_blank",windowFeatures:l={}}=e.open,c=Object.entries(l).filter(([u,f])=>f!==void 0).map(([u,f])=>`${u.toLowerCase()}=${f}`).join(", ");open(n,a,c)}return Promise.resolve()}const i=(e==null?void 0:e.external)||Ks(n,{acceptRelative:!0});if(i){if(!(e!=null&&e.external))throw new Error("Navigating to an external URL is not allowed by default. Use `navigateTo(url, { external: true })`.");const a=Ua(n).protocol;if(a&&_y(a))throw new Error(`Cannot navigate to a URL with '${a}' protocol.`)}const r=mx();if(!i&&r)return t;const s=Ln(),o=ut();return i?(o._scope.stop(),e!=null&&e.replace?location.replace(n):location.href=n,r?o.isHydrating?new Promise(()=>{}):!1:Promise.resolve()):e!=null&&e.replace?s.replace(t):s.push(t)},Wm="__nuxt_error",Na=()=>uv(ut().payload,"error"),Pr=t=>{const e=Oa(t);try{const n=ut(),i=Na();n.hooks.callHook("app:error",e),i.value=i.value||e}catch{throw e}return e},gx=async(t={})=>{const e=ut(),n=Na();e.callHook("app:error:cleared",t),t.redirect&&await Ln().replace(t.redirect),n.value=null},_x=t=>!!t&&typeof t=="object"&&Wm in t,Oa=t=>{const e=gc(t);return Object.defineProperty(e,Wm,{value:!0,configurable:!1,writable:!1}),e},vx="modulepreload",yx=function(t,e){return t[0]==="."?new URL(t,e).href:t},Of={},xx=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){const s=document.getElementsByTagName("link");r=Promise.all(n.map(o=>{if(o=yx(o,i),o in Of)return;Of[o]=!0;const a=o.endsWith(".css"),l=a?'[rel="stylesheet"]':"";if(!!i)for(let f=s.length-1;f>=0;f--){const d=s[f];if(d.href===o&&(!a||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${o}"]${l}`))return;const u=document.createElement("link");if(u.rel=a?"stylesheet":vx,a||(u.as="script",u.crossOrigin=""),u.href=o,document.head.appendChild(u),a)return new Promise((f,d)=>{u.addEventListener("load",f),u.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${o}`)))})}))}return r.then(()=>e()).catch(s=>{const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s})},Gn=(...t)=>xx(...t).catch(e=>{const n=new Event("nuxt.preloadError");throw n.payload=e,window.dispatchEvent(n),e}),Mx=-1,Ex=-2,Sx=-3,bx=-4,Tx=-5,wx=-6;function Ax(t,e){return Rx(JSON.parse(t),e)}function Rx(t,e){if(typeof t=="number")return r(t,!0);if(!Array.isArray(t)||t.length===0)throw new Error("Invalid input");const n=t,i=Array(n.length);function r(s,o=!1){if(s===Mx)return;if(s===Sx)return NaN;if(s===bx)return 1/0;if(s===Tx)return-1/0;if(s===wx)return-0;if(o)throw new Error("Invalid input");if(s in i)return i[s];const a=n[s];if(!a||typeof a!="object")i[s]=a;else if(Array.isArray(a))if(typeof a[0]=="string"){const l=a[0],c=e==null?void 0:e[l];if(c)return i[s]=c(r(a[1]));switch(l){case"Date":i[s]=new Date(a[1]);break;case"Set":const u=new Set;i[s]=u;for(let h=1;h<a.length;h+=1)u.add(r(a[h]));break;case"Map":const f=new Map;i[s]=f;for(let h=1;h<a.length;h+=2)f.set(r(a[h]),r(a[h+1]));break;case"RegExp":i[s]=new RegExp(a[1],a[2]);break;case"Object":i[s]=Object(a[1]);break;case"BigInt":i[s]=BigInt(a[1]);break;case"null":const d=Object.create(null);i[s]=d;for(let h=1;h<a.length;h+=2)d[a[h]]=r(a[h+1]);break;default:throw new Error(`Unknown type ${l}`)}}else{const l=new Array(a.length);i[s]=l;for(let c=0;c<a.length;c+=1){const u=a[c];u!==Ex&&(l[c]=r(u))}}else{const l={};i[s]=l;for(const c in a){const u=a[c];l[c]=r(u)}}return i[s]}return r(0)}function Cx(t){return Array.isArray(t)?t:[t]}const Px=["title","titleTemplate","script","style","noscript"],$o=["base","meta","link","style","script","noscript"],Lx=["title","titleTemplate","templateParams","base","htmlAttrs","bodyAttrs","meta","link","style","script","noscript"],Dx=["base","title","titleTemplate","bodyAttrs","htmlAttrs","templateParams"],Xm=["tagPosition","tagPriority","tagDuplicateStrategy","children","innerHTML","textContent","processTemplateParams"],Ix=typeof window<"u";function xu(t){let e=9;for(let n=0;n<t.length;)e=Math.imul(e^t.charCodeAt(n++),9**9);return((e^e>>>9)+65536).toString(16).substring(1,8).toLowerCase()}function Ff(t){return t._h||xu(t._d?t._d:`${t.tag}:${t.textContent||t.innerHTML||""}:${Object.entries(t.props).map(([e,n])=>`${e}:${String(n)}`).join(",")}`)}function jm(t,e){const{props:n,tag:i}=t;if(Dx.includes(i))return i;if(i==="link"&&n.rel==="canonical")return"canonical";if(n.charset)return"charset";const r=["id"];i==="meta"&&r.push("name","property","http-equiv");for(const s of r)if(typeof n[s]<"u"){const o=String(n[s]);return e&&!e(o)?!1:`${i}:${s}:${o}`}return!1}function Bf(t,e){return t==null?e||null:typeof t=="function"?t(e):t}async function Ux(t,e,n){const i={tag:t,props:await $m(typeof e=="object"&&typeof e!="function"&&!(e instanceof Promise)?{...e}:{[["script","noscript","style"].includes(t)?"innerHTML":"textContent"]:e},["templateParams","titleTemplate"].includes(t))};return Xm.forEach(r=>{const s=typeof i.props[r]<"u"?i.props[r]:n[r];typeof s<"u"&&((!["innerHTML","textContent","children"].includes(r)||Px.includes(i.tag))&&(i[r==="children"?"innerHTML":r]=s),delete i.props[r])}),i.props.body&&(i.tagPosition="bodyClose",delete i.props.body),i.tag==="script"&&typeof i.innerHTML=="object"&&(i.innerHTML=JSON.stringify(i.innerHTML),i.props.type=i.props.type||"application/json"),Array.isArray(i.props.content)?i.props.content.map(r=>({...i,props:{...i.props,content:r}})):i}function Nx(t){return typeof t=="object"&&!Array.isArray(t)&&(t=Object.keys(t).filter(e=>t[e])),(Array.isArray(t)?t.join(" "):t).split(" ").filter(e=>e.trim()).filter(Boolean).join(" ")}async function $m(t,e){for(const n of Object.keys(t)){if(n==="class"){t[n]=Nx(t[n]);continue}if(t[n]instanceof Promise&&(t[n]=await t[n]),!e&&!Xm.includes(n)){const i=String(t[n]),r=n.startsWith("data-");i==="true"||i===""?t[n]=r?"true":!0:t[n]||(r&&i==="false"?t[n]="false":delete t[n])}}return t}const Ox=10;async function Fx(t){const e=[];return Object.entries(t.resolvedInput).filter(([n,i])=>typeof i<"u"&&Lx.includes(n)).forEach(([n,i])=>{const r=Cx(i);e.push(...r.map(s=>Ux(n,s,t)).flat())}),(await Promise.all(e)).flat().filter(Boolean).map((n,i)=>(n._e=t._i,t.mode&&(n._m=t.mode),n._p=(t._i<<Ox)+i,n))}const kf={base:-10,title:10},Hf={critical:-80,high:-10,low:20};function ha(t){let e=100;const n=t.tagPriority;return typeof n=="number"?n:(t.tag==="meta"?(t.props["http-equiv"]==="content-security-policy"&&(e=-30),t.props.charset&&(e=-20),t.props.name==="viewport"&&(e=-15)):t.tag==="link"&&t.props.rel==="preconnect"?e=20:t.tag in kf&&(e=kf[t.tag]),typeof n=="string"&&n in Hf?e+Hf[n]:e)}const Bx=[{prefix:"before:",offset:-1},{prefix:"after:",offset:1}],qm=["onload","onerror","onabort","onprogress","onloadstart"],ii="%separator";function qo(t,e,n){if(typeof t!="string"||!t.includes("%"))return t;function i(o){let a;return["s","pageTitle"].includes(o)?a=e.pageTitle:o.includes(".")?a=o.split(".").reduce((l,c)=>l&&l[c]||void 0,e):a=e[o],typeof a<"u"?(a||"").replace(/"/g,'\\"'):!1}let r=t;try{r=decodeURI(t)}catch{}return(r.match(/%(\w+\.+\w+)|%(\w+)/g)||[]).sort().reverse().forEach(o=>{const a=i(o.slice(1));typeof a=="string"&&(t=t.replace(new RegExp(`\\${o}(\\W|$)`,"g"),(l,c)=>`${a}${c}`).trim())}),t.includes(ii)&&(t.endsWith(ii)&&(t=t.slice(0,-ii.length).trim()),t.startsWith(ii)&&(t=t.slice(ii.length).trim()),t=t.replace(new RegExp(`\\${ii}\\s*\\${ii}`,"g"),ii),t=qo(t,{separator:n},n)),t}async function kx(t){const e={tag:t.tagName.toLowerCase(),props:await $m(t.getAttributeNames().reduce((n,i)=>({...n,[i]:t.getAttribute(i)}),{})),innerHTML:t.innerHTML};return e._d=jm(e),e}async function Ym(t,e={}){var u;const n=e.document||t.resolvedOptions.document;if(!n)return;const i={shouldRender:t.dirty,tags:[]};if(await t.hooks.callHook("dom:beforeRender",i),!i.shouldRender)return;const r=(await t.resolveTags()).map(f=>({tag:f,id:$o.includes(f.tag)?Ff(f):f.tag,shouldRender:!0}));let s=t._dom;if(!s){s={elMap:{htmlAttrs:n.documentElement,bodyAttrs:n.body}};for(const f of["body","head"]){const d=(u=n==null?void 0:n[f])==null?void 0:u.children;for(const h of[...d].filter(g=>$o.includes(g.tagName.toLowerCase())))s.elMap[h.getAttribute("data-hid")||Ff(await kx(h))]=h}}s.pendingSideEffects={...s.sideEffects||{}},s.sideEffects={};function o(f,d,h){const g=`${f}:${d}`;s.sideEffects[g]=h,delete s.pendingSideEffects[g]}function a({id:f,$el:d,tag:h}){const g=h.tag.endsWith("Attrs");s.elMap[f]=d,g||(["textContent","innerHTML"].forEach(v=>{h[v]&&h[v]!==d[v]&&(d[v]=h[v])}),o(f,"el",()=>{s.elMap[f].remove(),delete s.elMap[f]})),Object.entries(h.props).forEach(([v,m])=>{const p=`attr:${v}`;if(v==="class")for(const M of(m||"").split(" ").filter(Boolean))g&&o(f,`${p}:${M}`,()=>d.classList.remove(M)),!d.classList.contains(M)&&d.classList.add(M);else d.getAttribute(v)!==m&&d.setAttribute(v,m===!0?"":String(m)),g&&o(f,p,()=>d.removeAttribute(v))})}const l=[],c={bodyClose:void 0,bodyOpen:void 0,head:void 0};for(const f of r){const{tag:d,shouldRender:h,id:g}=f;if(h){if(d.tag==="title"){n.title=d.textContent;continue}f.$el=f.$el||s.elMap[g],f.$el?a(f):$o.includes(d.tag)&&l.push(f)}}for(const f of l){const d=f.tag.tagPosition||"head";f.$el=n.createElement(f.tag.tag),a(f),c[d]=c[d]||n.createDocumentFragment(),c[d].appendChild(f.$el)}for(const f of r)await t.hooks.callHook("dom:renderTag",f,n,o);c.head&&n.head.appendChild(c.head),c.bodyOpen&&n.body.insertBefore(c.bodyOpen,n.body.firstChild),c.bodyClose&&n.body.appendChild(c.bodyClose),Object.values(s.pendingSideEffects).forEach(f=>f()),t._dom=s,t.dirty=!1,await t.hooks.callHook("dom:rendered",{renders:r})}async function Hx(t,e={}){const n=e.delayFn||(i=>setTimeout(i,10));return t._domUpdatePromise=t._domUpdatePromise||new Promise(i=>n(async()=>{await Ym(t,e),delete t._domUpdatePromise,i()}))}function zx(t){return e=>{var i,r;const n=((r=(i=e.resolvedOptions.document)==null?void 0:i.head.querySelector('script[id="unhead:payload"]'))==null?void 0:r.innerHTML)||!1;return n&&e.push(JSON.parse(n)),{mode:"client",hooks:{"entries:updated":function(s){Hx(s,t)}}}}}const Vx=["templateParams","htmlAttrs","bodyAttrs"],Gx={hooks:{"tag:normalise":function({tag:t}){["hid","vmid","key"].forEach(i=>{t.props[i]&&(t.key=t.props[i],delete t.props[i])});const n=jm(t)||(t.key?`${t.tag}:${t.key}`:!1);n&&(t._d=n)},"tags:resolve":function(t){const e={};t.tags.forEach(i=>{const r=(i.key?`${i.tag}:${i.key}`:i._d)||i._p,s=e[r];if(s){let a=i==null?void 0:i.tagDuplicateStrategy;if(!a&&Vx.includes(i.tag)&&(a="merge"),a==="merge"){const l=s.props;["class","style"].forEach(c=>{l[c]&&(i.props[c]?(c==="style"&&!l[c].endsWith(";")&&(l[c]+=";"),i.props[c]=`${l[c]} ${i.props[c]}`):i.props[c]=l[c])}),e[r].props={...l,...i.props};return}else if(i._e===s._e){s._duped=s._duped||[],i._d=`${s._d}:${s._duped.length+1}`,s._duped.push(i);return}else if(ha(i)>ha(s))return}const o=Object.keys(i.props).length+(i.innerHTML?1:0)+(i.textContent?1:0);if($o.includes(i.tag)&&o===0){delete e[r];return}e[r]=i});const n=[];Object.values(e).forEach(i=>{const r=i._duped;delete i._duped,n.push(i),r&&n.push(...r)}),t.tags=n,t.tags=t.tags.filter(i=>!(i.tag==="meta"&&(i.props.name||i.props.property)&&!i.props.content))}}},Wx={mode:"server",hooks:{"tags:resolve":function(t){const e={};t.tags.filter(n=>["titleTemplate","templateParams","title"].includes(n.tag)&&n._m==="server").forEach(n=>{e[n.tag]=n.tag.startsWith("title")?n.textContent:n.props}),Object.keys(e).length&&t.tags.push({tag:"script",innerHTML:JSON.stringify(e),props:{id:"unhead:payload",type:"application/json"}})}}},Xx=["script","link","bodyAttrs"];function jx(t){const e={},n={};return Object.entries(t.props).forEach(([i,r])=>{i.startsWith("on")&&typeof r=="function"?(qm.includes(i)&&(e[i]=`this.dataset.${i} = true`),n[i]=r):e[i]=r}),{props:e,eventHandlers:n}}const $x=t=>({hooks:{"tags:resolve":function(e){for(const n of e.tags)if(Xx.includes(n.tag)){const{props:i,eventHandlers:r}=jx(n);n.props=i,Object.keys(r).length&&((n.props.src||n.props.href)&&(n.key=n.key||xu(n.props.src||n.props.href)),n._eventHandlers=r)}},"dom:renderTag":function(e,n,i){if(!e.tag._eventHandlers)return;const r=e.tag.tag==="bodyAttrs"?n.defaultView:e.$el;Object.entries(e.tag._eventHandlers).forEach(([s,o])=>{const a=`${e.tag._d||e.tag._p}:${s}`,l=s.slice(2).toLowerCase(),c=`data-h-${l}`;if(i(e.id,a,()=>{}),e.$el.hasAttribute(c))return;e.$el.setAttribute(c,"");let u;const f=d=>{o(d),u==null||u.disconnect()};s in e.$el.dataset?f(new Event(s.replace("on",""))):qm.includes(s)&&typeof MutationObserver<"u"?(u=new MutationObserver(d=>{d.some(g=>g.attributeName===`data-${s}`)&&(f(new Event(s.replace("on",""))),u==null||u.disconnect())}),u.observe(e.$el,{attributes:!0})):r.addEventListener(l,f),i(e.id,a,()=>{u==null||u.disconnect(),r.removeEventListener(l,f),e.$el.removeAttribute(c)})})}}}),qx=["link","style","script","noscript"],Yx={hooks:{"tag:normalise":({tag:t})=>{t.key&&qx.includes(t.tag)&&(t.props["data-hid"]=t._h=xu(t.key))}}},Kx={hooks:{"tags:resolve":t=>{const e=n=>{var i;return(i=t.tags.find(r=>r._d===n))==null?void 0:i._p};for(const{prefix:n,offset:i}of Bx)for(const r of t.tags.filter(s=>typeof s.tagPriority=="string"&&s.tagPriority.startsWith(n))){const s=e(r.tagPriority.replace(n,""));typeof s<"u"&&(r._p=s+i)}t.tags.sort((n,i)=>n._p-i._p).sort((n,i)=>ha(n)-ha(i))}}},Zx={meta:"content",link:"href",htmlAttrs:"lang"},Jx=t=>({hooks:{"tags:resolve":e=>{var a;const{tags:n}=e,i=(a=n.find(l=>l.tag==="title"))==null?void 0:a.textContent,r=n.findIndex(l=>l.tag==="templateParams"),s=r!==-1?n[r].props:{},o=s.separator||"|";delete s.separator,s.pageTitle=qo(s.pageTitle||i||"",s,o);for(const l of n.filter(c=>c.processTemplateParams!==!1)){const c=Zx[l.tag];c&&typeof l.props[c]=="string"?l.props[c]=qo(l.props[c],s,o):(l.processTemplateParams===!0||["titleTemplate","title"].includes(l.tag))&&["innerHTML","textContent"].forEach(u=>{typeof l[u]=="string"&&(l[u]=qo(l[u],s,o))})}t._templateParams=s,t._separator=o,e.tags=n.filter(l=>l.tag!=="templateParams")}}}),Qx={hooks:{"tags:resolve":t=>{const{tags:e}=t;let n=e.findIndex(r=>r.tag==="titleTemplate");const i=e.findIndex(r=>r.tag==="title");if(i!==-1&&n!==-1){const r=Bf(e[n].textContent,e[i].textContent);r!==null?e[i].textContent=r||e[i].textContent:delete e[i]}else if(n!==-1){const r=Bf(e[n].textContent);r!==null&&(e[n].textContent=r,e[n].tag="title",n=-1)}n!==-1&&delete e[n],t.tags=e.filter(Boolean)}}},eM={hooks:{"tags:afterResolve":function(t){for(const e of t.tags)typeof e.innerHTML=="string"&&(e.innerHTML&&["application/ld+json","application/json"].includes(e.props.type)?e.innerHTML=e.innerHTML.replace(/</g,"\\u003C"):e.innerHTML=e.innerHTML.replace(new RegExp(`</${e.tag}`,"g"),`<\\/${e.tag}`))}}};let Km;function tM(t={}){const e=nM(t);return e.use(zx()),Km=e}function zf(t,e){return!t||t==="server"&&e||t==="client"&&!e}function nM(t={}){const e=Om();e.addHooks(t.hooks||{}),t.document=t.document||(Ix?document:void 0);const n=!t.document,i=()=>{a.dirty=!0,e.callHook("entries:updated",a)};let r=0,s=[];const o=[],a={plugins:o,dirty:!1,resolvedOptions:t,hooks:e,headEntries(){return s},use(l){const c=typeof l=="function"?l(a):l;(!c.key||!o.some(u=>u.key===c.key))&&(o.push(c),zf(c.mode,n)&&e.addHooks(c.hooks||{}))},push(l,c){c==null||delete c.head;const u={_i:r++,input:l,...c};return zf(u.mode,n)&&(s.push(u),i()),{dispose(){s=s.filter(f=>f._i!==u._i),e.callHook("entries:updated",a),i()},patch(f){s=s.map(d=>(d._i===u._i&&(d.input=u.input=f),d)),i()}}},async resolveTags(){const l={tags:[],entries:[...s]};await e.callHook("entries:resolve",l);for(const c of l.entries){const u=c.resolvedInput||c.input;if(c.resolvedInput=await(c.transform?c.transform(u):u),c.resolvedInput)for(const f of await Fx(c)){const d={tag:f,entry:c,resolvedOptions:a.resolvedOptions};await e.callHook("tag:normalise",d),l.tags.push(d.tag)}}return await e.callHook("tags:beforeResolve",l),await e.callHook("tags:resolve",l),await e.callHook("tags:afterResolve",l),l.tags},ssr:n};return[Gx,Wx,$x,Yx,Kx,Jx,Qx,eM,...(t==null?void 0:t.plugins)||[]].forEach(l=>a.use(l)),a.hooks.callHook("init",a),a}function iM(){return Km}const rM=ym.startsWith("3");function sM(t){return typeof t=="function"?t():Ze(t)}function vc(t,e=""){if(t instanceof Promise)return t;const n=sM(t);return!t||!n?n:Array.isArray(n)?n.map(i=>vc(i,e)):typeof n=="object"?Object.fromEntries(Object.entries(n).map(([i,r])=>i==="titleTemplate"||i.startsWith("on")?[i,Ze(r)]:[i,vc(r,i)])):n}const oM={hooks:{"entries:resolve":function(t){for(const e of t.entries)e.resolvedInput=vc(e.input)}}},Zm="usehead";function aM(t){return{install(n){rM&&(n.config.globalProperties.$unhead=t,n.config.globalProperties.$head=t,n.provide(Zm,t))}}.install}function lM(t={}){t.domDelayFn=t.domDelayFn||(n=>wi(()=>setTimeout(()=>n(),0)));const e=tM(t);return e.use(oM),e.install=aM(e),e}const yc=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},xc="__unhead_injection_handler__";function cM(t){yc[xc]=t}function aL(){if(xc in yc)return yc[xc]();const t=st(Zm);return t||iM()}const uM={nuxt:{buildId:"c312d815-a0af-4903-b13e-2a496b2046f6"}},fM=cx(uM);function dM(){const t=ut();return t._appConfig||(t._appConfig=vt(fM)),t._appConfig}const hM=!1,Mc=!1,pM=!1,lL={componentName:"NuxtLink"},mM="#__nuxt";let Yo,Jm;function gM(){var e;const t=(e=dM().nuxt)==null?void 0:e.buildId;return Yo=$fetch(gu(`builds/meta/${t}.json`)),Yo.then(n=>{Jm=lx(n.matcher)}),Yo}function Fa(){return Yo||gM()}async function Qm(t){return await Fa(),zm({},...Jm.matchAll(t).reverse())}function Vf(t,e={}){const n=_M(t,e),i=ut(),r=i._payloadCache=i._payloadCache||{};return n in r||(r[n]=vM(t).then(s=>s?eg(n).then(o=>o||(delete r[n],null)):(r[n]=null,null))),r[n]}const Gf="json";function _M(t,e={}){const n=new URL(t,"http://localhost");if(n.host!=="localhost"||Ks(n.pathname,{acceptRelative:!0}))throw new Error("Payload URL must not include hostname: "+t);const i=e.hash||(e.fresh?Date.now():"");return Zs(vu().app.baseURL,n.pathname,i?`_payload.${i}.${Gf}`:`_payload.${Gf}`)}async function eg(t){const e=fetch(t).then(n=>n.text().then(tg));try{return await e}catch(n){console.warn("[nuxt] Cannot load payload ",t,n)}return null}async function vM(t=yu().path){if(t=mu(t),(await Fa()).prerendered.includes(t))return!0;const n=await Qm(t);return!!n.prerender&&!n.redirect}let vo=null;async function yM(){if(vo)return vo;const t=document.getElementById("__NUXT_DATA__");if(!t)return{};const e=await tg(t.textContent||""),n=t.dataset.src?await eg(t.dataset.src):void 0;return vo={...e,...n,...window.__NUXT__},vo}async function tg(t){return await Ax(t,ut()._payloadRevivers)}function xM(t,e){ut()._payloadRevivers[t]=e}const Wf={NuxtError:t=>Oa(t),EmptyShallowRef:t=>en(t==="_"?void 0:t==="0n"?BigInt(0):fa(t)),EmptyRef:t=>ct(t==="_"?void 0:t==="0n"?BigInt(0):fa(t)),ShallowRef:t=>en(t),ShallowReactive:t=>Gs(t),Ref:t=>ct(t),Reactive:t=>vt(t)},MM=En({name:"nuxt:revive-payload:client",order:-30,async setup(t){let e,n;for(const i in Wf)xM(i,Wf[i]);Object.assign(t.payload,([e,n]=Is(()=>t.runWithContext(yM)),e=await e,n(),e)),window.__NUXT__=t.payload}}),EM=[],SM=En({name:"nuxt:head",enforce:"pre",setup(t){const e=lM({plugins:EM});cM(()=>ut().vueApp._context.provides.usehead),t.vueApp.use(e);{let n=!0;const i=async()=>{n=!1,await Ym(e)};e.hooks.hook("dom:beforeRender",r=>{r.shouldRender=!n}),t.hooks.hook("page:start",()=>{n=!0}),t.hooks.hook("page:finish",()=>{t.isHydrating||i()}),t.hooks.hook("app:error",i),t.hooks.hook("app:suspense:resolve",i)}}});/*!
  * vue-router v4.3.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Rr=typeof document<"u";function bM(t){return t.__esModule||t[Symbol.toStringTag]==="Module"}const Qe=Object.assign;function ll(t,e){const n={};for(const i in e){const r=e[i];n[i]=Mn(r)?r.map(t):t(r)}return n}const xs=()=>{},Mn=Array.isArray,ng=/#/g,TM=/&/g,wM=/\//g,AM=/=/g,RM=/\?/g,ig=/\+/g,CM=/%5B/g,PM=/%5D/g,rg=/%5E/g,LM=/%60/g,sg=/%7B/g,DM=/%7C/g,og=/%7D/g,IM=/%20/g;function Mu(t){return encodeURI(""+t).replace(DM,"|").replace(CM,"[").replace(PM,"]")}function UM(t){return Mu(t).replace(sg,"{").replace(og,"}").replace(rg,"^")}function Ec(t){return Mu(t).replace(ig,"%2B").replace(IM,"+").replace(ng,"%23").replace(TM,"%26").replace(LM,"`").replace(sg,"{").replace(og,"}").replace(rg,"^")}function NM(t){return Ec(t).replace(AM,"%3D")}function OM(t){return Mu(t).replace(ng,"%23").replace(RM,"%3F")}function FM(t){return t==null?"":OM(t).replace(wM,"%2F")}function Us(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const BM=/\/$/,kM=t=>t.replace(BM,"");function cl(t,e,n="/"){let i,r={},s="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(i=e.slice(0,l),s=e.slice(l+1,a>-1?a:e.length),r=t(s)),a>-1&&(i=i||e.slice(0,a),o=e.slice(a,e.length)),i=GM(i??e,n),{fullPath:i+(s&&"?")+s+o,path:i,query:r,hash:Us(o)}}function HM(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Xf(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function zM(t,e,n){const i=e.matched.length-1,r=n.matched.length-1;return i>-1&&i===r&&Xr(e.matched[i],n.matched[r])&&ag(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Xr(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function ag(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!VM(t[n],e[n]))return!1;return!0}function VM(t,e){return Mn(t)?jf(t,e):Mn(e)?jf(e,t):t===e}function jf(t,e){return Mn(e)?t.length===e.length&&t.every((n,i)=>n===e[i]):t.length===1&&t[0]===e}function GM(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),i=t.split("/"),r=i[i.length-1];(r===".."||r===".")&&i.push("");let s=n.length-1,o,a;for(o=0;o<i.length;o++)if(a=i[o],a!==".")if(a==="..")s>1&&s--;else break;return n.slice(0,s).join("/")+"/"+i.slice(o).join("/")}var Ns;(function(t){t.pop="pop",t.push="push"})(Ns||(Ns={}));var Ms;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ms||(Ms={}));function WM(t){if(!t)if(Rr){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),kM(t)}const XM=/^[^#]+#/;function jM(t,e){return t.replace(XM,"#")+e}function $M(t,e){const n=document.documentElement.getBoundingClientRect(),i=t.getBoundingClientRect();return{behavior:e.behavior,left:i.left-n.left-(e.left||0),top:i.top-n.top-(e.top||0)}}const Ba=()=>({left:window.scrollX,top:window.scrollY});function qM(t){let e;if("el"in t){const n=t.el,i=typeof n=="string"&&n.startsWith("#"),r=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!r)return;e=$M(r,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function $f(t,e){return(history.state?history.state.position-e:-1)+t}const Sc=new Map;function YM(t,e){Sc.set(t,e)}function KM(t){const e=Sc.get(t);return Sc.delete(t),e}let ZM=()=>location.protocol+"//"+location.host;function lg(t,e){const{pathname:n,search:i,hash:r}=e,s=t.indexOf("#");if(s>-1){let a=r.includes(t.slice(s))?t.slice(s).length:1,l=r.slice(a);return l[0]!=="/"&&(l="/"+l),Xf(l,"")}return Xf(n,t)+i+r}function JM(t,e,n,i){let r=[],s=[],o=null;const a=({state:d})=>{const h=lg(t,location),g=n.value,v=e.value;let m=0;if(d){if(n.value=h,e.value=d,o&&o===g){o=null;return}m=v?d.position-v.position:0}else i(h);r.forEach(p=>{p(n.value,g,{delta:m,type:Ns.pop,direction:m?m>0?Ms.forward:Ms.back:Ms.unknown})})};function l(){o=n.value}function c(d){r.push(d);const h=()=>{const g=r.indexOf(d);g>-1&&r.splice(g,1)};return s.push(h),h}function u(){const{history:d}=window;d.state&&d.replaceState(Qe({},d.state,{scroll:Ba()}),"")}function f(){for(const d of s)d();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:f}}function qf(t,e,n,i=!1,r=!1){return{back:t,current:e,forward:n,replaced:i,position:window.history.length,scroll:r?Ba():null}}function QM(t){const{history:e,location:n}=window,i={value:lg(t,n)},r={value:e.state};r.value||s(i.value,{back:null,current:i.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function s(l,c,u){const f=t.indexOf("#"),d=f>-1?(n.host&&document.querySelector("base")?t:t.slice(f))+l:ZM()+t+l;try{e[u?"replaceState":"pushState"](c,"",d),r.value=c}catch(h){console.error(h),n[u?"replace":"assign"](d)}}function o(l,c){const u=Qe({},e.state,qf(r.value.back,l,r.value.forward,!0),c,{position:r.value.position});s(l,u,!0),i.value=l}function a(l,c){const u=Qe({},r.value,e.state,{forward:l,scroll:Ba()});s(u.current,u,!0);const f=Qe({},qf(i.value,l,null),{position:u.position+1},c);s(l,f,!1),i.value=l}return{location:i,state:r,push:a,replace:o}}function cg(t){t=WM(t);const e=QM(t),n=JM(t,e.state,e.location,e.replace);function i(s,o=!0){o||n.pauseListeners(),history.go(s)}const r=Qe({location:"",base:t,go:i,createHref:jM.bind(null,t)},e,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>e.state.value}),r}function eE(t){return t=location.host?t||location.pathname+location.search:"",t.includes("#")||(t+="#"),cg(t)}function tE(t){return typeof t=="string"||t&&typeof t=="object"}function ug(t){return typeof t=="string"||typeof t=="symbol"}const gn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},fg=Symbol("");var Yf;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Yf||(Yf={}));function jr(t,e){return Qe(new Error,{type:t,[fg]:!0},e)}function In(t,e){return t instanceof Error&&fg in t&&(e==null||!!(t.type&e))}const Kf="[^/]+?",nE={sensitive:!1,strict:!1,start:!0,end:!0},iE=/[.+*?^${}()[\]/\\]/g;function rE(t,e){const n=Qe({},nE,e),i=[];let r=n.start?"^":"";const s=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(r+="/");for(let f=0;f<c.length;f++){const d=c[f];let h=40+(n.sensitive?.25:0);if(d.type===0)f||(r+="/"),r+=d.value.replace(iE,"\\$&"),h+=40;else if(d.type===1){const{value:g,repeatable:v,optional:m,regexp:p}=d;s.push({name:g,repeatable:v,optional:m});const M=p||Kf;if(M!==Kf){h+=10;try{new RegExp(`(${M})`)}catch(S){throw new Error(`Invalid custom RegExp for param "${g}" (${M}): `+S.message)}}let _=v?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;f||(_=m&&c.length<2?`(?:/${_})`:"/"+_),m&&(_+="?"),r+=_,h+=20,m&&(h+=-8),v&&(h+=-20),M===".*"&&(h+=-50)}u.push(h)}i.push(u)}if(n.strict&&n.end){const c=i.length-1;i[c][i[c].length-1]+=.7000000000000001}n.strict||(r+="/?"),n.end?r+="$":n.strict&&(r+="(?:/|$)");const o=new RegExp(r,n.sensitive?"":"i");function a(c){const u=c.match(o),f={};if(!u)return null;for(let d=1;d<u.length;d++){const h=u[d]||"",g=s[d-1];f[g.name]=h&&g.repeatable?h.split("/"):h}return f}function l(c){let u="",f=!1;for(const d of t){(!f||!u.endsWith("/"))&&(u+="/"),f=!1;for(const h of d)if(h.type===0)u+=h.value;else if(h.type===1){const{value:g,repeatable:v,optional:m}=h,p=g in c?c[g]:"";if(Mn(p)&&!v)throw new Error(`Provided param "${g}" is an array but it is not repeatable (* or + modifiers)`);const M=Mn(p)?p.join("/"):p;if(!M)if(m)d.length<2&&(u.endsWith("/")?u=u.slice(0,-1):f=!0);else throw new Error(`Missing required param "${g}"`);u+=M}}return u||"/"}return{re:o,score:i,keys:s,parse:a,stringify:l}}function sE(t,e){let n=0;for(;n<t.length&&n<e.length;){const i=e[n]-t[n];if(i)return i;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function oE(t,e){let n=0;const i=t.score,r=e.score;for(;n<i.length&&n<r.length;){const s=sE(i[n],r[n]);if(s)return s;n++}if(Math.abs(r.length-i.length)===1){if(Zf(i))return 1;if(Zf(r))return-1}return r.length-i.length}function Zf(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const aE={type:0,value:""},lE=/[a-zA-Z0-9_]/;function cE(t){if(!t)return[[]];if(t==="/")return[[aE]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(h){throw new Error(`ERR (${n})/"${c}": ${h}`)}let n=0,i=n;const r=[];let s;function o(){s&&r.push(s),s=[]}let a=0,l,c="",u="";function f(){c&&(n===0?s.push({type:0,value:c}):n===1||n===2||n===3?(s.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function d(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:l==="/"?(c&&f(),o()):l===":"?(f(),n=1):d();break;case 4:d(),n=i;break;case 1:l==="("?n=2:lE.test(l)?d():(f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:f(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),f(),o(),r}function uE(t,e,n){const i=rE(cE(t.path),n),r=Qe(i,{record:t,parent:e,children:[],alias:[]});return e&&!r.record.aliasOf==!e.record.aliasOf&&e.children.push(r),r}function fE(t,e){const n=[],i=new Map;e=ed({strict:!1,end:!0,sensitive:!1},e);function r(u){return i.get(u)}function s(u,f,d){const h=!d,g=dE(u);g.aliasOf=d&&d.record;const v=ed(e,u),m=[g];if("alias"in u){const _=typeof u.alias=="string"?[u.alias]:u.alias;for(const S of _)m.push(Qe({},g,{components:d?d.record.components:g.components,path:S,aliasOf:d?d.record:g}))}let p,M;for(const _ of m){const{path:S}=_;if(f&&S[0]!=="/"){const x=f.record.path,T=x[x.length-1]==="/"?"":"/";_.path=f.record.path+(S&&T+S)}if(p=uE(_,f,v),d?d.alias.push(p):(M=M||p,M!==p&&M.alias.push(p),h&&u.name&&!Qf(p)&&o(u.name)),g.children){const x=g.children;for(let T=0;T<x.length;T++)s(x[T],p,d&&d.children[T])}d=d||p,(p.record.components&&Object.keys(p.record.components).length||p.record.name||p.record.redirect)&&l(p)}return M?()=>{o(M)}:xs}function o(u){if(ug(u)){const f=i.get(u);f&&(i.delete(u),n.splice(n.indexOf(f),1),f.children.forEach(o),f.alias.forEach(o))}else{const f=n.indexOf(u);f>-1&&(n.splice(f,1),u.record.name&&i.delete(u.record.name),u.children.forEach(o),u.alias.forEach(o))}}function a(){return n}function l(u){let f=0;for(;f<n.length&&oE(u,n[f])>=0&&(u.record.path!==n[f].record.path||!dg(u,n[f]));)f++;n.splice(f,0,u),u.record.name&&!Qf(u)&&i.set(u.record.name,u)}function c(u,f){let d,h={},g,v;if("name"in u&&u.name){if(d=i.get(u.name),!d)throw jr(1,{location:u});v=d.record.name,h=Qe(Jf(f.params,d.keys.filter(M=>!M.optional).concat(d.parent?d.parent.keys.filter(M=>M.optional):[]).map(M=>M.name)),u.params&&Jf(u.params,d.keys.map(M=>M.name))),g=d.stringify(h)}else if(u.path!=null)g=u.path,d=n.find(M=>M.re.test(g)),d&&(h=d.parse(g),v=d.record.name);else{if(d=f.name?i.get(f.name):n.find(M=>M.re.test(f.path)),!d)throw jr(1,{location:u,currentLocation:f});v=d.record.name,h=Qe({},f.params,u.params),g=d.stringify(h)}const m=[];let p=d;for(;p;)m.unshift(p.record),p=p.parent;return{name:v,path:g,params:h,matched:m,meta:pE(m)}}return t.forEach(u=>s(u)),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:r}}function Jf(t,e){const n={};for(const i of e)i in t&&(n[i]=t[i]);return n}function dE(t){return{path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:void 0,beforeEnter:t.beforeEnter,props:hE(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}}}function hE(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const i in t.components)e[i]=typeof n=="object"?n[i]:n;return e}function Qf(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function pE(t){return t.reduce((e,n)=>Qe(e,n.meta),{})}function ed(t,e){const n={};for(const i in t)n[i]=i in e?e[i]:t[i];return n}function dg(t,e){return e.children.some(n=>n===t||dg(t,n))}function mE(t){const e={};if(t===""||t==="?")return e;const i=(t[0]==="?"?t.slice(1):t).split("&");for(let r=0;r<i.length;++r){const s=i[r].replace(ig," "),o=s.indexOf("="),a=Us(o<0?s:s.slice(0,o)),l=o<0?null:Us(s.slice(o+1));if(a in e){let c=e[a];Mn(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function td(t){let e="";for(let n in t){const i=t[n];if(n=NM(n),i==null){i!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mn(i)?i.map(s=>s&&Ec(s)):[i&&Ec(i)]).forEach(s=>{s!==void 0&&(e+=(e.length?"&":"")+n,s!=null&&(e+="="+s))})}return e}function gE(t){const e={};for(const n in t){const i=t[n];i!==void 0&&(e[n]=Mn(i)?i.map(r=>r==null?null:""+r):i==null?i:""+i)}return e}const _E=Symbol(""),nd=Symbol(""),Eu=Symbol(""),Su=Symbol(""),bc=Symbol("");function as(){let t=[];function e(i){return t.push(i),()=>{const r=t.indexOf(i);r>-1&&t.splice(r,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function pi(t,e,n,i,r,s=o=>o()){const o=i&&(i.enterCallbacks[r]=i.enterCallbacks[r]||[]);return()=>new Promise((a,l)=>{const c=d=>{d===!1?l(jr(4,{from:n,to:e})):d instanceof Error?l(d):tE(d)?l(jr(2,{from:e,to:d})):(o&&i.enterCallbacks[r]===o&&typeof d=="function"&&o.push(d),a())},u=s(()=>t.call(i&&i.instances[r],e,n,c));let f=Promise.resolve(u);t.length<3&&(f=f.then(c)),f.catch(d=>l(d))})}function ul(t,e,n,i,r=s=>s()){const s=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(vE(l)){const u=(l.__vccOpts||l)[e];u&&s.push(pi(u,n,i,o,a,r))}else{let c=l();s.push(()=>c.then(u=>{if(!u)return Promise.reject(new Error(`Couldn't resolve component "${a}" at "${o.path}"`));const f=bM(u)?u.default:u;o.components[a]=f;const h=(f.__vccOpts||f)[e];return h&&pi(h,n,i,o,a,r)()}))}}return s}function vE(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function id(t){const e=st(Eu),n=st(Su),i=Fe(()=>e.resolve(Ze(t.to))),r=Fe(()=>{const{matched:l}=i.value,{length:c}=l,u=l[c-1],f=n.matched;if(!u||!f.length)return-1;const d=f.findIndex(Xr.bind(null,u));if(d>-1)return d;const h=rd(l[c-2]);return c>1&&rd(u)===h&&f[f.length-1].path!==h?f.findIndex(Xr.bind(null,l[c-2])):d}),s=Fe(()=>r.value>-1&&EE(n.params,i.value.params)),o=Fe(()=>r.value>-1&&r.value===n.matched.length-1&&ag(n.params,i.value.params));function a(l={}){return ME(l)?e[Ze(t.replace)?"replace":"push"](Ze(t.to)).catch(xs):Promise.resolve()}return{route:i,href:Fe(()=>i.value.href),isActive:s,isExactActive:o,navigate:a}}const yE=Pn({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:id,setup(t,{slots:e}){const n=vt(id(t)),{options:i}=st(Eu),r=Fe(()=>({[sd(t.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[sd(t.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const s=e.default&&e.default(n);return t.custom?s:Wt("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:r.value},s)}}}),xE=yE;function ME(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function EE(t,e){for(const n in e){const i=e[n],r=t[n];if(typeof i=="string"){if(i!==r)return!1}else if(!Mn(r)||r.length!==i.length||i.some((s,o)=>s!==r[o]))return!1}return!0}function rd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const sd=(t,e,n)=>t??e??n,SE=Pn({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const i=st(bc),r=Fe(()=>t.route||i.value),s=st(nd,0),o=Fe(()=>{let c=Ze(s);const{matched:u}=r.value;let f;for(;(f=u[c])&&!f.components;)c++;return c}),a=Fe(()=>r.value.matched[o.value]);un(nd,Fe(()=>o.value+1)),un(_E,a),un(bc,r);const l=ct();return Gt(()=>[l.value,a.value,t.name],([c,u,f],[d,h,g])=>{u&&(u.instances[f]=c,h&&h!==u&&c&&c===d&&(u.leaveGuards.size||(u.leaveGuards=h.leaveGuards),u.updateGuards.size||(u.updateGuards=h.updateGuards))),c&&u&&(!h||!Xr(u,h)||!d)&&(u.enterCallbacks[f]||[]).forEach(v=>v(c))},{flush:"post"}),()=>{const c=r.value,u=t.name,f=a.value,d=f&&f.components[u];if(!d)return od(n.default,{Component:d,route:c});const h=f.props[u],g=h?h===!0?c.params:typeof h=="function"?h(c):h:null,m=Wt(d,Qe({},g,e,{onVnodeUnmounted:p=>{p.component.isUnmounted&&(f.instances[u]=null)},ref:l}));return od(n.default,{Component:m,route:c})||m}}});function od(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const hg=SE;function bE(t){const e=fE(t.routes,t),n=t.parseQuery||mE,i=t.stringifyQuery||td,r=t.history,s=as(),o=as(),a=as(),l=en(gn);let c=gn;Rr&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ll.bind(null,z=>""+z),f=ll.bind(null,FM),d=ll.bind(null,Us);function h(z,de){let se,ye;return ug(z)?(se=e.getRecordMatcher(z),ye=de):ye=z,e.addRoute(ye,se)}function g(z){const de=e.getRecordMatcher(z);de&&e.removeRoute(de)}function v(){return e.getRoutes().map(z=>z.record)}function m(z){return!!e.getRecordMatcher(z)}function p(z,de){if(de=Qe({},de||l.value),typeof z=="string"){const P=cl(n,z,de.path),N=e.resolve({path:P.path},de),$=r.createHref(P.fullPath);return Qe(P,N,{params:d(N.params),hash:Us(P.hash),redirectedFrom:void 0,href:$})}let se;if(z.path!=null)se=Qe({},z,{path:cl(n,z.path,de.path).path});else{const P=Qe({},z.params);for(const N in P)P[N]==null&&delete P[N];se=Qe({},z,{params:f(P)}),de.params=f(de.params)}const ye=e.resolve(se,de),we=z.hash||"";ye.params=u(d(ye.params));const k=HM(i,Qe({},z,{hash:UM(we),path:ye.path})),A=r.createHref(k);return Qe({fullPath:k,hash:we,query:i===td?gE(z.query):z.query||{}},ye,{redirectedFrom:void 0,href:A})}function M(z){return typeof z=="string"?cl(n,z,l.value.path):Qe({},z)}function _(z,de){if(c!==z)return jr(8,{from:de,to:z})}function S(z){return L(z)}function x(z){return S(Qe(M(z),{replace:!0}))}function T(z){const de=z.matched[z.matched.length-1];if(de&&de.redirect){const{redirect:se}=de;let ye=typeof se=="function"?se(z):se;return typeof ye=="string"&&(ye=ye.includes("?")||ye.includes("#")?ye=M(ye):{path:ye},ye.params={}),Qe({query:z.query,hash:z.hash,params:ye.path!=null?{}:z.params},ye)}}function L(z,de){const se=c=p(z),ye=l.value,we=z.state,k=z.force,A=z.replace===!0,P=T(se);if(P)return L(Qe(M(P),{state:typeof P=="object"?Qe({},we,P.state):we,force:k,replace:A}),de||se);const N=se;N.redirectedFrom=de;let $;return!k&&zM(i,ye,se)&&($=jr(16,{to:N,from:ye}),Ee(ye,ye,!0,!1)),($?Promise.resolve($):b(N,ye)).catch(Z=>In(Z)?In(Z,2)?Z:he(Z):H(Z,N,ye)).then(Z=>{if(Z){if(In(Z,2))return L(Qe({replace:A},M(Z.to),{state:typeof Z.to=="object"?Qe({},we,Z.to.state):we,force:k}),de||N)}else Z=B(N,ye,!0,A,we);return F(N,ye,Z),Z})}function C(z,de){const se=_(z,de);return se?Promise.reject(se):Promise.resolve()}function y(z){const de=me.values().next().value;return de&&typeof de.runWithContext=="function"?de.runWithContext(z):z()}function b(z,de){let se;const[ye,we,k]=TE(z,de);se=ul(ye.reverse(),"beforeRouteLeave",z,de);for(const P of ye)P.leaveGuards.forEach(N=>{se.push(pi(N,z,de))});const A=C.bind(null,z,de);return se.push(A),_e(se).then(()=>{se=[];for(const P of s.list())se.push(pi(P,z,de));return se.push(A),_e(se)}).then(()=>{se=ul(we,"beforeRouteUpdate",z,de);for(const P of we)P.updateGuards.forEach(N=>{se.push(pi(N,z,de))});return se.push(A),_e(se)}).then(()=>{se=[];for(const P of k)if(P.beforeEnter)if(Mn(P.beforeEnter))for(const N of P.beforeEnter)se.push(pi(N,z,de));else se.push(pi(P.beforeEnter,z,de));return se.push(A),_e(se)}).then(()=>(z.matched.forEach(P=>P.enterCallbacks={}),se=ul(k,"beforeRouteEnter",z,de,y),se.push(A),_e(se))).then(()=>{se=[];for(const P of o.list())se.push(pi(P,z,de));return se.push(A),_e(se)}).catch(P=>In(P,8)?P:Promise.reject(P))}function F(z,de,se){a.list().forEach(ye=>y(()=>ye(z,de,se)))}function B(z,de,se,ye,we){const k=_(z,de);if(k)return k;const A=de===gn,P=Rr?history.state:{};se&&(ye||A?r.replace(z.fullPath,Qe({scroll:A&&P&&P.scroll},we)):r.push(z.fullPath,we)),l.value=z,Ee(z,de,se,A),he()}let I;function G(){I||(I=r.listen((z,de,se)=>{if(!Se.listening)return;const ye=p(z),we=T(ye);if(we){L(Qe(we,{replace:!0}),ye).catch(xs);return}c=ye;const k=l.value;Rr&&YM($f(k.fullPath,se.delta),Ba()),b(ye,k).catch(A=>In(A,12)?A:In(A,2)?(L(A.to,ye).then(P=>{In(P,20)&&!se.delta&&se.type===Ns.pop&&r.go(-1,!1)}).catch(xs),Promise.reject()):(se.delta&&r.go(-se.delta,!1),H(A,ye,k))).then(A=>{A=A||B(ye,k,!1),A&&(se.delta&&!In(A,8)?r.go(-se.delta,!1):se.type===Ns.pop&&In(A,20)&&r.go(-1,!1)),F(ye,k,A)}).catch(xs)}))}let X=as(),V=as(),W;function H(z,de,se){he(z);const ye=V.list();return ye.length?ye.forEach(we=>we(z,de,se)):console.error(z),Promise.reject(z)}function ce(){return W&&l.value!==gn?Promise.resolve():new Promise((z,de)=>{X.add([z,de])})}function he(z){return W||(W=!z,G(),X.list().forEach(([de,se])=>z?se(z):de()),X.reset()),z}function Ee(z,de,se,ye){const{scrollBehavior:we}=t;if(!Rr||!we)return Promise.resolve();const k=!se&&KM($f(z.fullPath,0))||(ye||!se)&&history.state&&history.state.scroll||null;return wi().then(()=>we(z,de,k)).then(A=>A&&qM(A)).catch(A=>H(A,z,de))}const q=z=>r.go(z);let pe;const me=new Set,Se={currentRoute:l,listening:!0,addRoute:h,removeRoute:g,hasRoute:m,getRoutes:v,resolve:p,options:t,push:S,replace:x,go:q,back:()=>q(-1),forward:()=>q(1),beforeEach:s.add,beforeResolve:o.add,afterEach:a.add,onError:V.add,isReady:ce,install(z){const de=this;z.component("RouterLink",xE),z.component("RouterView",hg),z.config.globalProperties.$router=de,Object.defineProperty(z.config.globalProperties,"$route",{enumerable:!0,get:()=>Ze(l)}),Rr&&!pe&&l.value===gn&&(pe=!0,S(r.location).catch(we=>{}));const se={};for(const we in gn)Object.defineProperty(se,we,{get:()=>l.value[we],enumerable:!0});z.provide(Eu,de),z.provide(Su,Gs(se)),z.provide(bc,l);const ye=z.unmount;me.add(z),z.unmount=function(){me.delete(z),me.size<1&&(c=gn,I&&I(),I=null,l.value=gn,pe=!1,W=!1),ye()}}};function _e(z){return z.reduce((de,se)=>de.then(()=>y(se)),Promise.resolve())}return Se}function TE(t,e){const n=[],i=[],r=[],s=Math.max(e.matched.length,t.matched.length);for(let o=0;o<s;o++){const a=e.matched[o];a&&(t.matched.find(c=>Xr(c,a))?i.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Xr(c,l))||r.push(l))}return[n,i,r]}function wE(){return st(Su)}const AE=(t,e)=>e.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var i;return((i=t.params[n.slice(1)])==null?void 0:i.toString())||""}),Tc=(t,e)=>{const n=t.route.matched.find(r=>{var s;return((s=r.components)==null?void 0:s.default)===t.Component.type}),i=e??(n==null?void 0:n.meta.key)??(n&&AE(t.route,n));return typeof i=="function"?i(t.route):i},RE=(t,e)=>({default:()=>t?Wt(Uv,t===!0?{}:t,e):e});function bu(t){return Array.isArray(t)?t:[t]}const fl=null,dl=null,hl=null,pl=null,ml=null,gl=null,ad=[{name:"audio",path:"/audio",meta:{},alias:[],redirect:fl==null?void 0:fl.redirect,component:()=>Gn(()=>import("./audio.DDPyOzj3.js"),__vite__mapDeps([0,1,2,3]),import.meta.url).then(t=>t.default||t)},{name:"index",path:"/",meta:{},alias:[],redirect:dl==null?void 0:dl.redirect,component:()=>Gn(()=>import("./index.B8YJYzMh.js"),__vite__mapDeps([4,5,6,7,1,2,8]),import.meta.url).then(t=>t.default||t)},{name:"ktx",path:"/ktx",meta:{},alias:[],redirect:hl==null?void 0:hl.redirect,component:()=>Gn(()=>import("./ktx.WChLHAoL.js"),__vite__mapDeps([9,10,2,6,11,5,7,12]),import.meta.url).then(t=>t.default||t)},{name:"mesh",path:"/mesh",meta:{},alias:[],redirect:pl==null?void 0:pl.redirect,component:()=>Gn(()=>import("./mesh.CNVSkVvo.js"),__vite__mapDeps([13,6,14,1,2,10,11,15]),import.meta.url).then(t=>t.default||t)},{name:"settings",path:"/settings",meta:{},alias:[],redirect:ml==null?void 0:ml.redirect,component:()=>Gn(()=>import("./settings.DNPR1-oZ.js"),__vite__mapDeps([16,17,1,2,18,19,20]),import.meta.url).then(t=>t.default||t)},{name:"storage",path:"/storage",meta:{},alias:[],redirect:gl==null?void 0:gl.redirect,component:()=>Gn(()=>import("./storage.B7NuKrY7.js"),__vite__mapDeps([21,5,6,7,22,23,1,2]),import.meta.url).then(t=>t.default||t)}],pg=(t,e,n)=>(e=e===!0?{}:e,{default:()=>{var i;return e?Wt(t,e,n):(i=n.default)==null?void 0:i.call(n)}});function ld(t){const e=(t==null?void 0:t.meta.key)??t.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,n=>{var i;return((i=t.params[n.slice(1)])==null?void 0:i.toString())||""});return typeof e=="function"?e(t):e}function CE(t,e){return t===e||e===gn?!1:ld(t)!==ld(e)?!0:!t.matched.every((i,r)=>{var s,o;return i.components&&i.components.default===((o=(s=e.matched[r])==null?void 0:s.components)==null?void 0:o.default)})}const PE={scrollBehavior(t,e,n){var c;const i=ut(),r=((c=Ln().options)==null?void 0:c.scrollBehaviorType)??"auto";let s=n||void 0;const o=typeof t.meta.scrollToTop=="function"?t.meta.scrollToTop(t,e):t.meta.scrollToTop;if(!s&&e&&t&&o!==!1&&CE(t,e)&&(s={left:0,top:0}),t.path===e.path)return e.hash&&!t.hash?{left:0,top:0}:t.hash?{el:t.hash,top:cd(t.hash),behavior:r}:!1;const a=u=>!!(u.meta.pageTransition??Mc),l=a(e)&&a(t)?"page:transition:finish":"page:finish";return new Promise(u=>{i.hooks.hookOnce(l,async()=>{await new Promise(f=>setTimeout(f,0)),t.hash&&(s={el:t.hash,top:cd(t.hash),behavior:r}),u(s)})})}};function cd(t){try{const e=document.querySelector(t);if(e)return parseFloat(getComputedStyle(e).scrollMarginTop)}catch{}return 0}const LE={hashMode:!1,scrollBehaviorType:"auto"},qt={...LE,...PE},DE=async t=>{var l;let e,n;if(!((l=t.meta)!=null&&l.validate))return;const i=ut(),r=Ln();if(([e,n]=Is(()=>Promise.resolve(t.meta.validate(t))),e=await e,n(),e)===!0)return;const o=Oa({statusCode:404,statusMessage:`Page Not Found: ${t.fullPath}`,data:{path:t.fullPath}}),a=r.beforeResolve(c=>{if(a(),c===t){const u=r.afterEach(async()=>{u(),await i.runWithContext(()=>Pr(o)),window.history.pushState({},"",t.fullPath)});return!1}})},IE=async t=>{let e,n;const i=([e,n]=Is(()=>Qm(t.path)),e=await e,n(),e);if(i.redirect)return i.redirect},UE=[DE,IE],Es={};function NE(t,e,n){const{pathname:i,search:r,hash:s}=e,o=t.indexOf("#");if(o>-1){const c=s.includes(t.slice(o))?t.slice(o).length:1;let u=s.slice(c);return u[0]!=="/"&&(u="/"+u),Pf(u,"")}const a=Pf(i,t),l=!n||My(a,n,{trailingSlash:!0})?a:n;return l+(l.includes("?")?"":r)+s}const OE=En({name:"nuxt:router",enforce:"pre",async setup(t){var v,m;let e,n,i=vu().app.baseURL;qt.hashMode&&!i.includes("#")&&(i+="#");const r=((v=qt.history)==null?void 0:v.call(qt,i))??(qt.hashMode?eE(i):cg(i)),s=((m=qt.routes)==null?void 0:m.call(qt,ad))??ad;let o;const a=NE(i,window.location,t.payload.path),l=bE({...qt,scrollBehavior:(p,M,_)=>{if(M===gn){o=_;return}if(qt.scrollBehavior){if(l.options.scrollBehavior=qt.scrollBehavior,"scrollRestoration"in window.history){const S=l.beforeEach(()=>{S(),window.history.scrollRestoration="manual"})}return qt.scrollBehavior(p,gn,o||_)}},history:r,routes:s});"scrollRestoration"in window.history&&(window.history.scrollRestoration="auto"),t.vueApp.use(l);const c=en(l.currentRoute.value);l.afterEach((p,M)=>{c.value=M}),Object.defineProperty(t.vueApp.config.globalProperties,"previousRoute",{get:()=>c.value});const u=en(l.resolve(a)),f=()=>{u.value=l.currentRoute.value};t.hook("page:finish",f),l.afterEach((p,M)=>{var _,S,x,T;((S=(_=p.matched[0])==null?void 0:_.components)==null?void 0:S.default)===((T=(x=M.matched[0])==null?void 0:x.components)==null?void 0:T.default)&&f()});const d={};for(const p in u.value)Object.defineProperty(d,p,{get:()=>u.value[p]});t._route=Gs(d),t._middleware=t._middleware||{global:[],named:{}};const h=Na();try{[e,n]=Is(()=>l.isReady()),await e,n()}catch(p){[e,n]=Is(()=>t.runWithContext(()=>Pr(p))),await e,n()}const g=t.payload.state._layout;return l.beforeEach(async(p,M)=>{var _;await t.callHook("page:loading:start"),p.meta=vt(p.meta),t.isHydrating&&g&&!Ji(p.meta.layout)&&(p.meta.layout=g),t._processingMiddleware=!0;{const S=new Set([...UE,...t._middleware.global]);for(const x of p.matched){const T=x.meta.middleware;if(T)for(const L of bu(T))S.add(L)}for(const x of S){const T=typeof x=="string"?t._middleware.named[x]||await((_=Es[x])==null?void 0:_.call(Es).then(C=>C.default||C)):x;if(!T)throw new Error(`Unknown route middleware: '${x}'.`);const L=await t.runWithContext(()=>T(p,M));if(!t.payload.serverRendered&&t.isHydrating&&(L===!1||L instanceof Error)){const C=L||gc({statusCode:404,statusMessage:`Page Not Found: ${a}`});return await t.runWithContext(()=>Pr(C)),!1}if(L!==!0&&(L||L===!1))return L}}}),l.onError(async()=>{delete t._processingMiddleware,await t.callHook("page:loading:end")}),l.afterEach(async(p,M,_)=>{delete t._processingMiddleware,!t.isHydrating&&h.value&&await t.runWithContext(gx),_&&await t.callHook("page:loading:end"),p.matched.length===0&&await t.runWithContext(()=>Pr(gc({statusCode:404,fatal:!1,statusMessage:`Page not found: ${p.fullPath}`,data:{path:p.fullPath}})))}),t.hooks.hookOnce("app:created",async()=>{try{const p=l.resolve(a);"name"in p&&(p.name=void 0),await l.replace({...p,force:!0}),l.options.scrollBehavior=qt.scrollBehavior}catch(p){await t.runWithContext(()=>Pr(p))}}),{provide:{router:l}}}}),ud=globalThis.requestIdleCallback||(t=>{const e=Date.now(),n={didTimeout:!1,timeRemaining:()=>Math.max(0,50-(Date.now()-e))};return setTimeout(()=>{t(n)},1)}),cL=globalThis.cancelIdleCallback||(t=>{clearTimeout(t)}),mg=t=>{const e=ut();e.isHydrating?e.hooks.hookOnce("app:suspense:resolve",()=>{ud(t)}):ud(t)},FE=En({name:"nuxt:payload",setup(t){Ln().beforeResolve(async(e,n)=>{if(e.path===n.path)return;const i=await Vf(e.path);i&&Object.assign(t.static.data,i.data)}),mg(()=>{var e;t.hooks.hook("link:prefetch",async n=>{Ua(n).protocol||await Vf(n)}),((e=navigator.connection)==null?void 0:e.effectiveType)!=="slow-2g"&&setTimeout(Fa,1e3)})}}),BE=En(t=>{let e;async function n(){const i=await Fa();e&&clearTimeout(e),e=setTimeout(n,1e3*60*60);const r=await $fetch(gu("builds/latest.json")+`?${Date.now()}`);r.id!==i.id&&t.hooks.callHook("app:manifest:update",r)}mg(()=>{e=setTimeout(n,1e3*60*60)})}),kE=!1;/*!
 * pinia v2.1.7
 * (c) 2023 Eduardo San Martin Morote
 * @license MIT
 */let gg;const Qs=t=>gg=t,_g=Symbol();function wc(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ss;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ss||(Ss={}));function HE(){const t=Sa(!0),e=t.run(()=>ct({}));let n=[],i=[];const r=Ta({install(s){Qs(r),r._a=s,s.provide(_g,r),s.config.globalProperties.$pinia=r,i.forEach(o=>n.push(o)),i=[]},use(s){return!this._a&&!kE?i.push(s):n.push(s),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return r}const vg=()=>{};function fd(t,e,n,i=vg){t.push(e);const r=()=>{const s=t.indexOf(e);s>-1&&(t.splice(s,1),i())};return!n&&yp()&&xp(r),r}function ar(t,...e){t.slice().forEach(n=>{n(...e)})}const zE=t=>t();function Ac(t,e){t instanceof Map&&e instanceof Map&&e.forEach((n,i)=>t.set(i,n)),t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const i=e[n],r=t[n];wc(r)&&wc(i)&&t.hasOwnProperty(n)&&!_t(i)&&!xi(i)?t[n]=Ac(r,i):t[n]=i}return t}const VE=Symbol();function GE(t){return!wc(t)||!t.hasOwnProperty(VE)}const{assign:ci}=Object;function WE(t){return!!(_t(t)&&t.effect)}function XE(t,e,n,i){const{state:r,actions:s,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=r?r():{});const u=Jc(n.state.value[t]);return ci(u,s,Object.keys(o||{}).reduce((f,d)=>(f[d]=Ta(Fe(()=>{Qs(n);const h=n._s.get(t);return o[d].call(h,h)})),f),{}))}return l=yg(t,c,e,n,i,!0),l}function yg(t,e,n={},i,r,s){let o;const a=ci({actions:{}},n),l={deep:!0};let c,u,f=[],d=[],h;const g=i.state.value[t];!s&&!g&&(i.state.value[t]={}),ct({});let v;function m(C){let y;c=u=!1,typeof C=="function"?(C(i.state.value[t]),y={type:Ss.patchFunction,storeId:t,events:h}):(Ac(i.state.value[t],C),y={type:Ss.patchObject,payload:C,storeId:t,events:h});const b=v=Symbol();wi().then(()=>{v===b&&(c=!0)}),u=!0,ar(f,y,i.state.value[t])}const p=s?function(){const{state:y}=n,b=y?y():{};this.$patch(F=>{ci(F,b)})}:vg;function M(){o.stop(),f=[],d=[],i._s.delete(t)}function _(C,y){return function(){Qs(i);const b=Array.from(arguments),F=[],B=[];function I(V){F.push(V)}function G(V){B.push(V)}ar(d,{args:b,name:C,store:x,after:I,onError:G});let X;try{X=y.apply(this&&this.$id===t?this:x,b)}catch(V){throw ar(B,V),V}return X instanceof Promise?X.then(V=>(ar(F,V),V)).catch(V=>(ar(B,V),Promise.reject(V))):(ar(F,X),X)}}const S={_p:i,$id:t,$onAction:fd.bind(null,d),$patch:m,$reset:p,$subscribe(C,y={}){const b=fd(f,C,y.detached,()=>F()),F=o.run(()=>Gt(()=>i.state.value[t],B=>{(y.flush==="sync"?u:c)&&C({storeId:t,type:Ss.direct,events:h},B)},ci({},l,y)));return b},$dispose:M},x=vt(S);i._s.set(t,x);const L=(i._a&&i._a.runWithContext||zE)(()=>i._e.run(()=>(o=Sa()).run(e)));for(const C in L){const y=L[C];if(_t(y)&&!WE(y)||xi(y))s||(g&&GE(y)&&(_t(y)?y.value=g[C]:Ac(y,g[C])),i.state.value[t][C]=y);else if(typeof y=="function"){const b=_(C,y);L[C]=b,a.actions[C]=y}}return ci(x,L),ci(je(x),L),Object.defineProperty(x,"$state",{get:()=>i.state.value[t],set:C=>{m(y=>{ci(y,C)})}}),i._p.forEach(C=>{ci(x,o.run(()=>C({store:x,app:i._a,pinia:i,options:a})))}),g&&s&&n.hydrate&&n.hydrate(x.$state,g),c=!0,u=!0,x}function uL(t,e,n){let i,r;const s=typeof e=="function";typeof t=="string"?(i=t,r=s?n:e):(r=t,i=t.id);function o(a,l){const c=uu();return a=a||(c?st(_g,null):null),a&&Qs(a),a=gg,a._s.has(i)||(s?yg(i,e,r,a):XE(i,r,a)),a._s.get(i)}return o.$id=i,o}function jE(t={}){const e=t.path||window.location.pathname;let n={};try{n=fa(sessionStorage.getItem("nuxt:reload")||"{}")}catch{}if(t.force||(n==null?void 0:n.path)!==e||(n==null?void 0:n.expires)<Date.now()){try{sessionStorage.setItem("nuxt:reload",JSON.stringify({path:e,expires:Date.now()+(t.ttl??1e4)}))}catch{}if(t.persistState)try{sessionStorage.setItem("nuxt:reload:state",JSON.stringify({state:ut().payload.state}))}catch{}window.location.pathname!==e?window.location.href=e:window.location.reload()}}const $E=En(t=>{const e=HE();return t.vueApp.use(e),Qs(e),t.payload&&t.payload.pinia&&(e.state.value=t.payload.pinia),{provide:{pinia:e}}}),qE=En({name:"nuxt:global-components"}),mi={default:()=>Gn(()=>import("./default.CVzPXzvk.js"),__vite__mapDeps([24,1,2,14,6,10,18,19,5,7,22,23,25]),import.meta.url).then(t=>t.default||t)},YE=En({name:"nuxt:prefetch",setup(t){const e=Ln();t.hooks.hook("app:mounted",()=>{e.beforeEach(async n=>{var r;const i=(r=n==null?void 0:n.meta)==null?void 0:r.layout;i&&typeof mi[i]=="function"&&await mi[i]()})}),t.hooks.hook("link:prefetch",n=>{if(Ks(n))return;const i=e.resolve(n);if(!i)return;const r=i.meta.layout;let s=bu(i.meta.middleware);s=s.filter(o=>typeof o=="string");for(const o of s)typeof Es[o]=="function"&&Es[o]();r&&typeof mi[r]=="function"&&mi[r]()})}}),KE=En({name:"nuxt:chunk-reload",setup(t){const e=Ln(),n=vu(),i=new Set;e.beforeEach(()=>{i.clear()}),t.hook("app:chunkError",({error:s})=>{i.add(s)});function r(s){const a="href"in s&&s.href[0]==="#"?n.app.baseURL+s.href:Zs(n.app.baseURL,s.fullPath);jE({path:a,persistState:!0})}t.hook("app:manifest:update",()=>{e.beforeResolve(r)}),e.onError((s,o)=>{i.has(s)&&r(o)})}});/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Tu="153",lr={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},cr={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},ZE=0,dd=1,JE=2,xg=1,QE=2,Vn=3,Ti=0,Xt=1,Xn=2,Ei=0,Br=1,hd=2,pd=3,md=4,eS=5,Cr=100,tS=101,nS=102,gd=103,_d=104,iS=200,rS=201,sS=202,oS=203,Mg=204,Eg=205,aS=206,lS=207,cS=208,uS=209,fS=210,dS=0,hS=1,pS=2,Rc=3,mS=4,gS=5,_S=6,vS=7,Sg=0,yS=1,xS=2,Kn=0,MS=1,ES=2,SS=3,bS=4,TS=5,bg=300,$r=301,qr=302,Cc=303,Pc=304,ka=306,Lc=1e3,Jt=1001,Dc=1002,At=1003,vd=1004,_l=1005,Rt=1006,wS=1007,Yr=1008,Si=1009,AS=1010,RS=1011,wu=1012,Tg=1013,gi=1014,_i=1015,Os=1016,wg=1017,Ag=1018,ji=1020,CS=1021,xn=1023,PS=1024,LS=1025,$i=1026,Kr=1027,DS=1028,Rg=1029,IS=1030,Cg=1031,Pg=1033,vl=33776,yl=33777,xl=33778,Ml=33779,yd=35840,xd=35841,Md=35842,Ed=35843,US=36196,Sd=37492,bd=37496,Td=37808,wd=37809,Ad=37810,Rd=37811,Cd=37812,Pd=37813,Ld=37814,Dd=37815,Id=37816,Ud=37817,Nd=37818,Od=37819,Fd=37820,Bd=37821,El=36492,NS=36283,kd=36284,Hd=36285,zd=36286,fL=2300,dL=2301,Lg=3e3,qi=3001,OS=3200,FS=3201,Dg=0,BS=1,Yi="",ze="srgb",Cn="srgb-linear",Ig="display-p3",Sl=7680,kS=519,HS=512,zS=513,VS=514,GS=515,WS=516,XS=517,jS=518,$S=519,Vd=35044,Gd="300 es",Ic=1035,$n=2e3,pa=2001;class rr{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Pt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];let Wd=1234567;const bs=Math.PI/180,Fs=180/Math.PI;function ns(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Pt[t&255]+Pt[t>>8&255]+Pt[t>>16&255]+Pt[t>>24&255]+"-"+Pt[e&255]+Pt[e>>8&255]+"-"+Pt[e>>16&15|64]+Pt[e>>24&255]+"-"+Pt[n&63|128]+Pt[n>>8&255]+"-"+Pt[n>>16&255]+Pt[n>>24&255]+Pt[i&255]+Pt[i>>8&255]+Pt[i>>16&255]+Pt[i>>24&255]).toLowerCase()}function Ct(t,e,n){return Math.max(e,Math.min(n,t))}function Au(t,e){return(t%e+e)%e}function qS(t,e,n,i,r){return i+(t-e)*(r-i)/(n-e)}function YS(t,e,n){return t!==e?(n-t)/(e-t):0}function Ts(t,e,n){return(1-n)*t+n*e}function KS(t,e,n,i){return Ts(t,e,1-Math.exp(-n*i))}function ZS(t,e=1){return e-Math.abs(Au(t,e*2)-e)}function JS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*(3-2*t))}function QS(t,e,n){return t<=e?0:t>=n?1:(t=(t-e)/(n-e),t*t*t*(t*(t*6-15)+10))}function eb(t,e){return t+Math.floor(Math.random()*(e-t+1))}function tb(t,e){return t+Math.random()*(e-t)}function nb(t){return t*(.5-Math.random())}function ib(t){t!==void 0&&(Wd=t);let e=Wd+=1831565813;return e=Math.imul(e^e>>>15,e|1),e^=e+Math.imul(e^e>>>7,e|61),((e^e>>>14)>>>0)/4294967296}function rb(t){return t*bs}function sb(t){return t*Fs}function Uc(t){return(t&t-1)===0&&t!==0}function ob(t){return Math.pow(2,Math.ceil(Math.log(t)/Math.LN2))}function ma(t){return Math.pow(2,Math.floor(Math.log(t)/Math.LN2))}function ab(t,e,n,i,r){const s=Math.cos,o=Math.sin,a=s(n/2),l=o(n/2),c=s((e+i)/2),u=o((e+i)/2),f=s((e-i)/2),d=o((e-i)/2),h=s((i-e)/2),g=o((i-e)/2);switch(r){case"XYX":t.set(a*u,l*f,l*d,a*c);break;case"YZY":t.set(l*d,a*u,l*f,a*c);break;case"ZXZ":t.set(l*f,l*d,a*u,a*c);break;case"XZX":t.set(a*u,l*g,l*h,a*c);break;case"YXY":t.set(l*h,a*u,l*g,a*c);break;case"ZYZ":t.set(l*g,l*h,a*u,a*c);break;default:console.warn("THREE.MathUtils: .setQuaternionFromProperEuler() encountered an unknown order: "+r)}}function ps(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function zt(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}const hL={DEG2RAD:bs,RAD2DEG:Fs,generateUUID:ns,clamp:Ct,euclideanModulo:Au,mapLinear:qS,inverseLerp:YS,lerp:Ts,damp:KS,pingpong:ZS,smoothstep:JS,smootherstep:QS,randInt:eb,randFloat:tb,randFloatSpread:nb,seededRandom:ib,degToRad:rb,radToDeg:sb,isPowerOfTwo:Uc,ceilPowerOfTwo:ob,floorPowerOfTwo:ma,setQuaternionFromProperEuler:ab,normalize:zt,denormalize:ps};class Ve{constructor(e=0,n=0){Ve.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class We{constructor(e,n,i,r,s,o,a,l,c){We.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const u=this.elements;return u[0]=e,u[1]=r,u[2]=a,u[3]=n,u[4]=s,u[5]=l,u[6]=i,u[7]=o,u[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],u=i[4],f=i[7],d=i[2],h=i[5],g=i[8],v=r[0],m=r[3],p=r[6],M=r[1],_=r[4],S=r[7],x=r[2],T=r[5],L=r[8];return s[0]=o*v+a*M+l*x,s[3]=o*m+a*_+l*T,s[6]=o*p+a*S+l*L,s[1]=c*v+u*M+f*x,s[4]=c*m+u*_+f*T,s[7]=c*p+u*S+f*L,s[2]=d*v+h*M+g*x,s[5]=d*m+h*_+g*T,s[8]=d*p+h*S+g*L,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8];return n*o*u-n*a*c-i*s*u+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=u*o-a*c,d=a*l-u*s,h=c*s-o*l,g=n*f+i*d+r*h;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const v=1/g;return e[0]=f*v,e[1]=(r*c-u*i)*v,e[2]=(a*i-r*o)*v,e[3]=d*v,e[4]=(u*n-r*l)*v,e[5]=(r*s-a*n)*v,e[6]=h*v,e[7]=(i*l-c*n)*v,e[8]=(o*n-i*s)*v,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(bl.makeScale(e,n)),this}rotate(e){return this.premultiply(bl.makeRotation(-e)),this}translate(e,n){return this.premultiply(bl.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const bl=new We;function Ug(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Bs(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}const Xd={};function ws(t){t in Xd||(Xd[t]=!0,console.warn(t))}function kr(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function Tl(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}const lb=new We().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),cb=new We().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function ub(t){return t.convertSRGBToLinear().applyMatrix3(cb)}function fb(t){return t.applyMatrix3(lb).convertLinearToSRGB()}const db={[Cn]:t=>t,[ze]:t=>t.convertSRGBToLinear(),[Ig]:ub},hb={[Cn]:t=>t,[ze]:t=>t.convertLinearToSRGB(),[Ig]:fb},dn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(t){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!t},get workingColorSpace(){return Cn},set workingColorSpace(t){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(t,e,n){if(this.enabled===!1||e===n||!e||!n)return t;const i=db[e],r=hb[n];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${n}".`);return r(i(t))},fromWorkingColorSpace:function(t,e){return this.convert(t,this.workingColorSpace,e)},toWorkingColorSpace:function(t,e){return this.convert(t,e,this.workingColorSpace)}};let ur;class Ng{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{ur===void 0&&(ur=Bs("canvas")),ur.width=e.width,ur.height=e.height;const i=ur.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=ur}return n.width>2048||n.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),n.toDataURL("image/jpeg",.6)):n.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Bs("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=kr(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(kr(n[i]/255)*255):n[i]=kr(n[i]);return{data:n,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let pb=0;class Og{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:pb++}),this.uuid=ns(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(wl(r[o].image)):s.push(wl(r[o]))}else s=wl(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function wl(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?Ng.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let mb=0;class Ut extends rr{constructor(e=Ut.DEFAULT_IMAGE,n=Ut.DEFAULT_MAPPING,i=Jt,r=Jt,s=Rt,o=Yr,a=xn,l=Si,c=Ut.DEFAULT_ANISOTROPY,u=Yi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:mb++}),this.uuid=ns(),this.name="",this.source=new Og(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ve(0,0),this.repeat=new Ve(1,1),this.center=new Ve(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new We,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof u=="string"?this.colorSpace=u:(ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=u===qi?ze:Yi),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==bg)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Lc:e.x=e.x-Math.floor(e.x);break;case Jt:e.x=e.x<0?0:1;break;case Dc:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Lc:e.y=e.y-Math.floor(e.y);break;case Jt:e.y=e.y<0?0:1;break;case Dc:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===ze?qi:Lg}set encoding(e){ws("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===qi?ze:Yi}}Ut.DEFAULT_IMAGE=null;Ut.DEFAULT_MAPPING=bg;Ut.DEFAULT_ANISOTROPY=1;class Tt{constructor(e=0,n=0,i=0,r=1){Tt.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],u=l[4],f=l[8],d=l[1],h=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(u-d)<.01&&Math.abs(f-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(u+d)<.1&&Math.abs(f+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+h+p-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(h+1)/2,x=(p+1)/2,T=(u+d)/4,L=(f+v)/4,C=(g+m)/4;return _>S&&_>x?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=T/i,s=L/i):S>x?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=T/r,s=C/r):x<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(x),i=L/s,r=C/s),this.set(i,r,s,n),this}let M=Math.sqrt((m-g)*(m-g)+(f-v)*(f-v)+(d-u)*(d-u));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(f-v)/M,this.z=(d-u)/M,this.w=Math.acos((c+h+p-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this.w=Math.max(e.w,Math.min(n.w,this.w)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this.w=Math.max(e,Math.min(n,this.w)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Qi extends rr{constructor(e=1,n=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=n,this.depth=1,this.scissor=new Tt(0,0,e,n),this.scissorTest=!1,this.viewport=new Tt(0,0,e,n);const r={width:e,height:n,depth:1};i.encoding!==void 0&&(ws("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===qi?ze:Yi),this.texture=new Ut(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Rt,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,n,i=1){(this.width!==e||this.height!==n||this.depth!==i)&&(this.width=e,this.height=n,this.depth=i,this.texture.image.width=e,this.texture.image.height=n,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const n=Object.assign({},e.texture.image);return this.texture.source=new Og(n),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Fg extends Ut{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class gb extends Ut{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=At,this.minFilter=At,this.wrapR=Jt,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class er{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],u=i[r+2],f=i[r+3];const d=s[o+0],h=s[o+1],g=s[o+2],v=s[o+3];if(a===0){e[n+0]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f;return}if(a===1){e[n+0]=d,e[n+1]=h,e[n+2]=g,e[n+3]=v;return}if(f!==v||l!==d||c!==h||u!==g){let m=1-a;const p=l*d+c*h+u*g+f*v,M=p>=0?1:-1,_=1-p*p;if(_>Number.EPSILON){const x=Math.sqrt(_),T=Math.atan2(x,p*M);m=Math.sin(m*T)/x,a=Math.sin(a*T)/x}const S=a*M;if(l=l*m+d*S,c=c*m+h*S,u=u*m+g*S,f=f*m+v*S,m===1-a){const x=1/Math.sqrt(l*l+c*c+u*u+f*f);l*=x,c*=x,u*=x,f*=x}}e[n]=l,e[n+1]=c,e[n+2]=u,e[n+3]=f}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],u=i[r+3],f=s[o],d=s[o+1],h=s[o+2],g=s[o+3];return e[n]=a*g+u*f+l*h-c*d,e[n+1]=l*g+u*d+c*f-a*h,e[n+2]=c*g+u*h+a*d-l*f,e[n+3]=u*g-a*f-l*d-c*h,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),u=a(r/2),f=a(s/2),d=l(i/2),h=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"YXZ":this._x=d*u*f+c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"ZXY":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f-d*h*g;break;case"ZYX":this._x=d*u*f-c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f+d*h*g;break;case"YZX":this._x=d*u*f+c*h*g,this._y=c*h*f+d*u*g,this._z=c*u*g-d*h*f,this._w=c*u*f-d*h*g;break;case"XZY":this._x=d*u*f-c*h*g,this._y=c*h*f-d*u*g,this._z=c*u*g+d*h*f,this._w=c*u*f+d*h*g;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],u=n[6],f=n[10],d=i+a+f;if(d>0){const h=.5/Math.sqrt(d+1);this._w=.25/h,this._x=(u-l)*h,this._y=(s-c)*h,this._z=(o-r)*h}else if(i>a&&i>f){const h=2*Math.sqrt(1+i-a-f);this._w=(u-l)/h,this._x=.25*h,this._y=(r+o)/h,this._z=(s+c)/h}else if(a>f){const h=2*Math.sqrt(1+a-i-f);this._w=(s-c)/h,this._x=(r+o)/h,this._y=.25*h,this._z=(l+u)/h}else{const h=2*Math.sqrt(1+f-i-a);this._w=(o-r)/h,this._x=(s+c)/h,this._y=(l+u)/h,this._z=.25*h}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,u=n._w;return this._x=i*u+o*a+r*c-s*l,this._y=r*u+o*l+s*a-i*c,this._z=s*u+o*c+i*l-r*a,this._w=o*u-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n===0)return this;if(n===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const h=1-n;return this._w=h*o+n*this._w,this._x=h*i+n*this._x,this._y=h*r+n*this._y,this._z=h*s+n*this._z,this.normalize(),this._onChangeCallback(),this}const c=Math.sqrt(l),u=Math.atan2(c,a),f=Math.sin((1-n)*u)/c,d=Math.sin(n*u)/c;return this._w=o*f+this._w*d,this._x=i*f+this._x*d,this._y=r*f+this._y*d,this._z=s*f+this._z*d,this._onChangeCallback(),this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=Math.random(),n=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(n*Math.cos(r),i*Math.sin(s),i*Math.cos(s),n*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class K{constructor(e=0,n=0,i=0){K.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(jd.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(jd.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=l*n+o*r-a*i,u=l*i+a*n-s*r,f=l*r+s*i-o*n,d=-s*n-o*i-a*r;return this.x=c*l+d*-s+u*-a-f*-o,this.y=u*l+d*-o+f*-s-c*-a,this.z=f*l+d*-a+c*-o-u*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=Math.max(e.x,Math.min(n.x,this.x)),this.y=Math.max(e.y,Math.min(n.y,this.y)),this.z=Math.max(e.z,Math.min(n.z,this.z)),this}clampScalar(e,n){return this.x=Math.max(e,Math.min(n,this.x)),this.y=Math.max(e,Math.min(n,this.y)),this.z=Math.max(e,Math.min(n,this.z)),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(n,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(Ct(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,n=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(n),this.y=i*Math.sin(n),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const Al=new K,jd=new er;class eo{constructor(e=new K(1/0,1/0,1/0),n=new K(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(Nn.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(Nn.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=Nn.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),fr.copy(e.boundingBox),fr.applyMatrix4(e.matrixWorld),this.union(fr);else{const r=e.geometry;if(r!==void 0)if(n&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Nn.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Nn)}else r.boundingBox===null&&r.computeBoundingBox(),fr.copy(r.boundingBox),fr.applyMatrix4(e.matrixWorld),this.union(fr)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],n);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Nn),Nn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ls),yo.subVectors(this.max,ls),dr.subVectors(e.a,ls),hr.subVectors(e.b,ls),pr.subVectors(e.c,ls),ri.subVectors(hr,dr),si.subVectors(pr,hr),Di.subVectors(dr,pr);let n=[0,-ri.z,ri.y,0,-si.z,si.y,0,-Di.z,Di.y,ri.z,0,-ri.x,si.z,0,-si.x,Di.z,0,-Di.x,-ri.y,ri.x,0,-si.y,si.x,0,-Di.y,Di.x,0];return!Rl(n,dr,hr,pr,yo)||(n=[1,0,0,0,1,0,0,0,1],!Rl(n,dr,hr,pr,yo))?!1:(xo.crossVectors(ri,si),n=[xo.x,xo.y,xo.z],Rl(n,dr,hr,pr,yo))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Nn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Nn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Un[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Un[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Un[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Un[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Un[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Un[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Un[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Un[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Un),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Un=[new K,new K,new K,new K,new K,new K,new K,new K],Nn=new K,fr=new eo,dr=new K,hr=new K,pr=new K,ri=new K,si=new K,Di=new K,ls=new K,yo=new K,xo=new K,Ii=new K;function Rl(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Ii.fromArray(t,s);const a=r.x*Math.abs(Ii.x)+r.y*Math.abs(Ii.y)+r.z*Math.abs(Ii.z),l=e.dot(Ii),c=n.dot(Ii),u=i.dot(Ii);if(Math.max(-Math.max(l,c,u),Math.min(l,c,u))>a)return!1}return!0}const _b=new eo,cs=new K,Cl=new K;class Ru{constructor(e=new K,n=-1){this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):_b.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;cs.subVectors(e,this.center);const n=cs.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(cs,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Cl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(cs.copy(e.center).add(Cl)),this.expandByPoint(cs.copy(e.center).sub(Cl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const On=new K,Pl=new K,Mo=new K,oi=new K,Ll=new K,Eo=new K,Dl=new K;class vb{constructor(e=new K,n=new K(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,On)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=On.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(On.copy(this.origin).addScaledVector(this.direction,n),On.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){Pl.copy(e).add(n).multiplyScalar(.5),Mo.copy(n).sub(e).normalize(),oi.copy(this.origin).sub(Pl);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Mo),a=oi.dot(this.direction),l=-oi.dot(Mo),c=oi.lengthSq(),u=Math.abs(1-o*o);let f,d,h,g;if(u>0)if(f=o*l-a,d=o*a-l,g=s*u,f>=0)if(d>=-g)if(d<=g){const v=1/u;f*=v,d*=v,h=f*(f+o*d+2*a)+d*(o*f+d+2*l)+c}else d=s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d=-s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;else d<=-g?(f=Math.max(0,-(-o*s+a)),d=f>0?-s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c):d<=g?(f=0,d=Math.min(Math.max(-s,-l),s),h=d*(d+2*l)+c):(f=Math.max(0,-(o*s+a)),d=f>0?s:Math.min(Math.max(-s,-l),s),h=-f*f+d*(d+2*l)+c);else d=o>0?-s:s,f=Math.max(0,-(o*d+a)),h=-f*f+d*(d+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,f),r&&r.copy(Pl).addScaledVector(Mo,d),h}intersectSphere(e,n){On.subVectors(e.center,this.origin);const i=On.dot(this.direction),r=On.dot(On)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,u=1/this.direction.y,f=1/this.direction.z,d=this.origin;return c>=0?(i=(e.min.x-d.x)*c,r=(e.max.x-d.x)*c):(i=(e.max.x-d.x)*c,r=(e.min.x-d.x)*c),u>=0?(s=(e.min.y-d.y)*u,o=(e.max.y-d.y)*u):(s=(e.max.y-d.y)*u,o=(e.min.y-d.y)*u),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),f>=0?(a=(e.min.z-d.z)*f,l=(e.max.z-d.z)*f):(a=(e.max.z-d.z)*f,l=(e.min.z-d.z)*f),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,On)!==null}intersectTriangle(e,n,i,r,s){Ll.subVectors(n,e),Eo.subVectors(i,e),Dl.crossVectors(Ll,Eo);let o=this.direction.dot(Dl),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;oi.subVectors(this.origin,e);const l=a*this.direction.dot(Eo.crossVectors(oi,Eo));if(l<0)return null;const c=a*this.direction.dot(Ll.cross(oi));if(c<0||l+c>o)return null;const u=-a*oi.dot(Dl);return u<0?null:this.at(u/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xt{constructor(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){xt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m)}set(e,n,i,r,s,o,a,l,c,u,f,d,h,g,v,m){const p=this.elements;return p[0]=e,p[4]=n,p[8]=i,p[12]=r,p[1]=s,p[5]=o,p[9]=a,p[13]=l,p[2]=c,p[6]=u,p[10]=f,p[14]=d,p[3]=h,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new xt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){const n=this.elements,i=e.elements,r=1/mr.setFromMatrixColumn(e,0).length(),s=1/mr.setFromMatrixColumn(e,1).length(),o=1/mr.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),u=Math.cos(s),f=Math.sin(s);if(e.order==="XYZ"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=-l*f,n[8]=c,n[1]=h+g*c,n[5]=d-v*c,n[9]=-a*l,n[2]=v-d*c,n[6]=g+h*c,n[10]=o*l}else if(e.order==="YXZ"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d+v*a,n[4]=g*a-h,n[8]=o*c,n[1]=o*f,n[5]=o*u,n[9]=-a,n[2]=h*a-g,n[6]=v+d*a,n[10]=o*l}else if(e.order==="ZXY"){const d=l*u,h=l*f,g=c*u,v=c*f;n[0]=d-v*a,n[4]=-o*f,n[8]=g+h*a,n[1]=h+g*a,n[5]=o*u,n[9]=v-d*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const d=o*u,h=o*f,g=a*u,v=a*f;n[0]=l*u,n[4]=g*c-h,n[8]=d*c+v,n[1]=l*f,n[5]=v*c+d,n[9]=h*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=v-d*f,n[8]=g*f+h,n[1]=f,n[5]=o*u,n[9]=-a*u,n[2]=-c*u,n[6]=h*f+g,n[10]=d-v*f}else if(e.order==="XZY"){const d=o*l,h=o*c,g=a*l,v=a*c;n[0]=l*u,n[4]=-f,n[8]=c*u,n[1]=d*f+v,n[5]=o*u,n[9]=h*f-g,n[2]=g*f-h,n[6]=a*u,n[10]=v*f+d}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(yb,e,xb)}lookAt(e,n,i){const r=this.elements;return Yt.subVectors(e,n),Yt.lengthSq()===0&&(Yt.z=1),Yt.normalize(),ai.crossVectors(i,Yt),ai.lengthSq()===0&&(Math.abs(i.z)===1?Yt.x+=1e-4:Yt.z+=1e-4,Yt.normalize(),ai.crossVectors(i,Yt)),ai.normalize(),So.crossVectors(Yt,ai),r[0]=ai.x,r[4]=So.x,r[8]=Yt.x,r[1]=ai.y,r[5]=So.y,r[9]=Yt.y,r[2]=ai.z,r[6]=So.z,r[10]=Yt.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],u=i[1],f=i[5],d=i[9],h=i[13],g=i[2],v=i[6],m=i[10],p=i[14],M=i[3],_=i[7],S=i[11],x=i[15],T=r[0],L=r[4],C=r[8],y=r[12],b=r[1],F=r[5],B=r[9],I=r[13],G=r[2],X=r[6],V=r[10],W=r[14],H=r[3],ce=r[7],he=r[11],Ee=r[15];return s[0]=o*T+a*b+l*G+c*H,s[4]=o*L+a*F+l*X+c*ce,s[8]=o*C+a*B+l*V+c*he,s[12]=o*y+a*I+l*W+c*Ee,s[1]=u*T+f*b+d*G+h*H,s[5]=u*L+f*F+d*X+h*ce,s[9]=u*C+f*B+d*V+h*he,s[13]=u*y+f*I+d*W+h*Ee,s[2]=g*T+v*b+m*G+p*H,s[6]=g*L+v*F+m*X+p*ce,s[10]=g*C+v*B+m*V+p*he,s[14]=g*y+v*I+m*W+p*Ee,s[3]=M*T+_*b+S*G+x*H,s[7]=M*L+_*F+S*X+x*ce,s[11]=M*C+_*B+S*V+x*he,s[15]=M*y+_*I+S*W+x*Ee,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],u=e[2],f=e[6],d=e[10],h=e[14],g=e[3],v=e[7],m=e[11],p=e[15];return g*(+s*l*f-r*c*f-s*a*d+i*c*d+r*a*h-i*l*h)+v*(+n*l*h-n*c*d+s*o*d-r*o*h+r*c*u-s*l*u)+m*(+n*c*f-n*a*h-s*o*f+i*o*h+s*a*u-i*c*u)+p*(-r*a*u-n*l*f+n*a*d+r*o*f-i*o*d+i*l*u)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],u=e[8],f=e[9],d=e[10],h=e[11],g=e[12],v=e[13],m=e[14],p=e[15],M=f*m*c-v*d*c+v*l*h-a*m*h-f*l*p+a*d*p,_=g*d*c-u*m*c-g*l*h+o*m*h+u*l*p-o*d*p,S=u*v*c-g*f*c+g*a*h-o*v*h-u*a*p+o*f*p,x=g*f*l-u*v*l-g*a*d+o*v*d+u*a*m-o*f*m,T=n*M+i*_+r*S+s*x;if(T===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const L=1/T;return e[0]=M*L,e[1]=(v*d*s-f*m*s-v*r*h+i*m*h+f*r*p-i*d*p)*L,e[2]=(a*m*s-v*l*s+v*r*c-i*m*c-a*r*p+i*l*p)*L,e[3]=(f*l*s-a*d*s-f*r*c+i*d*c+a*r*h-i*l*h)*L,e[4]=_*L,e[5]=(u*m*s-g*d*s+g*r*h-n*m*h-u*r*p+n*d*p)*L,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*p-n*l*p)*L,e[7]=(o*d*s-u*l*s+u*r*c-n*d*c-o*r*h+n*l*h)*L,e[8]=S*L,e[9]=(g*f*s-u*v*s-g*i*h+n*v*h+u*i*p-n*f*p)*L,e[10]=(o*v*s-g*a*s+g*i*c-n*v*c-o*i*p+n*a*p)*L,e[11]=(u*a*s-o*f*s-u*i*c+n*f*c+o*i*h-n*a*h)*L,e[12]=x*L,e[13]=(u*v*r-g*f*r+g*i*d-n*v*d-u*i*m+n*f*m)*L,e[14]=(g*a*r-o*v*r-g*i*l+n*v*l+o*i*m-n*a*m)*L,e[15]=(o*f*r-u*a*r+u*i*l-n*f*l-o*i*d+n*a*d)*L,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,u=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,u*a+i,u*l-r*o,0,c*l-r*a,u*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,u=o+o,f=a+a,d=s*c,h=s*u,g=s*f,v=o*u,m=o*f,p=a*f,M=l*c,_=l*u,S=l*f,x=i.x,T=i.y,L=i.z;return r[0]=(1-(v+p))*x,r[1]=(h+S)*x,r[2]=(g-_)*x,r[3]=0,r[4]=(h-S)*T,r[5]=(1-(d+p))*T,r[6]=(m+M)*T,r[7]=0,r[8]=(g+_)*L,r[9]=(m-M)*L,r[10]=(1-(d+v))*L,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;let s=mr.set(r[0],r[1],r[2]).length();const o=mr.set(r[4],r[5],r[6]).length(),a=mr.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],hn.copy(this);const c=1/s,u=1/o,f=1/a;return hn.elements[0]*=c,hn.elements[1]*=c,hn.elements[2]*=c,hn.elements[4]*=u,hn.elements[5]*=u,hn.elements[6]*=u,hn.elements[8]*=f,hn.elements[9]*=f,hn.elements[10]*=f,n.setFromRotationMatrix(hn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=$n){const l=this.elements,c=2*s/(n-e),u=2*s/(i-r),f=(n+e)/(n-e),d=(i+r)/(i-r);let h,g;if(a===$n)h=-(o+s)/(o-s),g=-2*o*s/(o-s);else if(a===pa)h=-o/(o-s),g=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=c,l[4]=0,l[8]=f,l[12]=0,l[1]=0,l[5]=u,l[9]=d,l[13]=0,l[2]=0,l[6]=0,l[10]=h,l[14]=g,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=$n){const l=this.elements,c=1/(n-e),u=1/(i-r),f=1/(o-s),d=(n+e)*c,h=(i+r)*u;let g,v;if(a===$n)g=(o+s)*f,v=-2*f;else if(a===pa)g=s*f,v=-1*f;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*c,l[4]=0,l[8]=0,l[12]=-d,l[1]=0,l[5]=2*u,l[9]=0,l[13]=-h,l[2]=0,l[6]=0,l[10]=v,l[14]=-g,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const mr=new K,hn=new xt,yb=new K(0,0,0),xb=new K(1,1,1),ai=new K,So=new K,Yt=new K,$d=new xt,qd=new er;class Ha{constructor(e=0,n=0,i=0,r=Ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],u=r[9],f=r[2],d=r[6],h=r[10];switch(n){case"XYZ":this._y=Math.asin(Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-u,h),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(d,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(a,h),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-f,s),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(d,-1,1)),Math.abs(d)<.9999999?(this._y=Math.atan2(-f,h),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-Ct(f,-1,1)),Math.abs(f)<.9999999?(this._x=Math.atan2(d,h),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-u,c),this._y=Math.atan2(-f,s)):(this._x=0,this._y=Math.atan2(a,h));break;case"XZY":this._z=Math.asin(-Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(d,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-u,h),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return $d.makeRotationFromQuaternion(e),this.setFromRotationMatrix($d,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return qd.setFromEuler(this),this.setFromQuaternion(qd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Ha.DEFAULT_ORDER="XYZ";class Bg{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Mb=0;const Yd=new K,gr=new er,Fn=new xt,bo=new K,us=new K,Eb=new K,Sb=new er,Kd=new K(1,0,0),Zd=new K(0,1,0),Jd=new K(0,0,1),bb={type:"added"},Qd={type:"removed"};class Nt extends rr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Mb++}),this.uuid=ns(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Nt.DEFAULT_UP.clone();const e=new K,n=new Ha,i=new er,r=new K(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new xt},normalMatrix:{value:new We}}),this.matrix=new xt,this.matrixWorld=new xt,this.matrixAutoUpdate=Nt.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Bg,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.multiply(gr),this}rotateOnWorldAxis(e,n){return gr.setFromAxisAngle(e,n),this.quaternion.premultiply(gr),this}rotateX(e){return this.rotateOnAxis(Kd,e)}rotateY(e){return this.rotateOnAxis(Zd,e)}rotateZ(e){return this.rotateOnAxis(Jd,e)}translateOnAxis(e,n){return Yd.copy(e).applyQuaternion(this.quaternion),this.position.add(Yd.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(Kd,e)}translateY(e){return this.translateOnAxis(Zd,e)}translateZ(e){return this.translateOnAxis(Jd,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Fn.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?bo.copy(e):bo.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),us.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Fn.lookAt(us,bo,this.up):Fn.lookAt(bo,us,this.up),this.quaternion.setFromRotationMatrix(Fn),r&&(Fn.extractRotation(r.matrixWorld),gr.setFromRotationMatrix(Fn),this.quaternion.premultiply(gr.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(bb)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(Qd)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const n=this.children[e];n.parent=null,n.dispatchEvent(Qd)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),Fn.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Fn.multiply(e.parent.matrixWorld)),e.applyMatrix4(Fn),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n){let i=[];this[e]===n&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,n);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,e,Eb),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(us,Sb,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++){const s=n[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,u=l.length;c<u;c++){const f=l[c];s(e.shapes,f)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),u=o(e.images),f=o(e.shapes),d=o(e.skeletons),h=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),u.length>0&&(i.images=u),f.length>0&&(i.shapes=f),d.length>0&&(i.skeletons=d),h.length>0&&(i.animations=h),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const u=a[c];delete u.metadata,l.push(u)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Nt.DEFAULT_UP=new K(0,1,0);Nt.DEFAULT_MATRIX_AUTO_UPDATE=!0;Nt.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const pn=new K,Bn=new K,Il=new K,kn=new K,_r=new K,vr=new K,eh=new K,Ul=new K,Nl=new K,Ol=new K;let To=!1;class _n{constructor(e=new K,n=new K,i=new K){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),pn.subVectors(e,n),r.cross(pn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){pn.subVectors(r,n),Bn.subVectors(i,n),Il.subVectors(e,n);const o=pn.dot(pn),a=pn.dot(Bn),l=pn.dot(Il),c=Bn.dot(Bn),u=Bn.dot(Il),f=o*c-a*a;if(f===0)return s.set(-2,-1,-1);const d=1/f,h=(c*l-a*u)*d,g=(o*u-a*l)*d;return s.set(1-h-g,g,h)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,kn),kn.x>=0&&kn.y>=0&&kn.x+kn.y<=1}static getUV(e,n,i,r,s,o,a,l){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),this.getInterpolation(e,n,i,r,s,o,a,l)}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,kn),l.setScalar(0),l.addScaledVector(s,kn.x),l.addScaledVector(o,kn.y),l.addScaledVector(a,kn.z),l}static isFrontFacing(e,n,i,r){return pn.subVectors(i,n),Bn.subVectors(e,n),pn.cross(Bn).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return pn.subVectors(this.c,this.b),Bn.subVectors(this.a,this.b),pn.cross(Bn).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _n.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return _n.getBarycoord(e,this.a,this.b,this.c,n)}getUV(e,n,i,r,s){return To===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),To=!0),_n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}getInterpolation(e,n,i,r,s){return _n.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return _n.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _n.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;_r.subVectors(r,i),vr.subVectors(s,i),Ul.subVectors(e,i);const l=_r.dot(Ul),c=vr.dot(Ul);if(l<=0&&c<=0)return n.copy(i);Nl.subVectors(e,r);const u=_r.dot(Nl),f=vr.dot(Nl);if(u>=0&&f<=u)return n.copy(r);const d=l*f-u*c;if(d<=0&&l>=0&&u<=0)return o=l/(l-u),n.copy(i).addScaledVector(_r,o);Ol.subVectors(e,s);const h=_r.dot(Ol),g=vr.dot(Ol);if(g>=0&&h<=g)return n.copy(s);const v=h*c-l*g;if(v<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(vr,a);const m=u*g-h*f;if(m<=0&&f-u>=0&&h-g>=0)return eh.subVectors(s,r),a=(f-u)/(f-u+(h-g)),n.copy(r).addScaledVector(eh,a);const p=1/(m+v+d);return o=v*p,a=d*p,n.copy(i).addScaledVector(_r,o).addScaledVector(vr,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let Tb=0;class to extends rr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Tb++}),this.uuid=ns(),this.name="",this.type="Material",this.blending=Br,this.side=Ti,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=Mg,this.blendDst=Eg,this.blendEquation=Cr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Rc,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=kS,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Sl,this.stencilZFail=Sl,this.stencilZPass=Sl,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){console.warn(`THREE.Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){console.warn(`THREE.Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==Br&&(i.blending=this.blending),this.side!==Ti&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const kg={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},mn={h:0,s:0,l:0},wo={h:0,s:0,l:0};function Fl(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class tt{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=ze){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,dn.toWorkingColorSpace(this,n),this}setRGB(e,n,i,r=dn.workingColorSpace){return this.r=e,this.g=n,this.b=i,dn.toWorkingColorSpace(this,r),this}setHSL(e,n,i,r=dn.workingColorSpace){if(e=Au(e,1),n=Ct(n,0,1),i=Ct(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Fl(o,s,e+1/3),this.g=Fl(o,s,e),this.b=Fl(o,s,e-1/3)}return dn.toWorkingColorSpace(this,r),this}setStyle(e,n=ze){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=ze){const i=kg[e.toLowerCase()];return i!==void 0?this.setHex(i,n):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=kr(e.r),this.g=kr(e.g),this.b=kr(e.b),this}copyLinearToSRGB(e){return this.r=Tl(e.r),this.g=Tl(e.g),this.b=Tl(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ze){return dn.fromWorkingColorSpace(Lt.copy(this),e),Math.round(Ct(Lt.r*255,0,255))*65536+Math.round(Ct(Lt.g*255,0,255))*256+Math.round(Ct(Lt.b*255,0,255))}getHexString(e=ze){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=dn.workingColorSpace){dn.fromWorkingColorSpace(Lt.copy(this),n);const i=Lt.r,r=Lt.g,s=Lt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const u=(a+o)/2;if(a===o)l=0,c=0;else{const f=o-a;switch(c=u<=.5?f/(o+a):f/(2-o-a),o){case i:l=(r-s)/f+(r<s?6:0);break;case r:l=(s-i)/f+2;break;case s:l=(i-r)/f+4;break}l/=6}return e.h=l,e.s=c,e.l=u,e}getRGB(e,n=dn.workingColorSpace){return dn.fromWorkingColorSpace(Lt.copy(this),n),e.r=Lt.r,e.g=Lt.g,e.b=Lt.b,e}getStyle(e=ze){dn.fromWorkingColorSpace(Lt.copy(this),e);const n=Lt.r,i=Lt.g,r=Lt.b;return e!==ze?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(mn),mn.h+=e,mn.s+=n,mn.l+=i,this.setHSL(mn.h,mn.s,mn.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(mn),e.getHSL(wo);const i=Ts(mn.h,wo.h,n),r=Ts(mn.s,wo.s,n),s=Ts(mn.l,wo.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Lt=new tt;tt.NAMES=kg;class Hg extends to{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=Sg,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jn=wb();function wb(){const t=new ArrayBuffer(4),e=new Float32Array(t),n=new Uint32Array(t),i=new Uint32Array(512),r=new Uint32Array(512);for(let l=0;l<256;++l){const c=l-127;c<-27?(i[l]=0,i[l|256]=32768,r[l]=24,r[l|256]=24):c<-14?(i[l]=1024>>-c-14,i[l|256]=1024>>-c-14|32768,r[l]=-c-1,r[l|256]=-c-1):c<=15?(i[l]=c+15<<10,i[l|256]=c+15<<10|32768,r[l]=13,r[l|256]=13):c<128?(i[l]=31744,i[l|256]=64512,r[l]=24,r[l|256]=24):(i[l]=31744,i[l|256]=64512,r[l]=13,r[l|256]=13)}const s=new Uint32Array(2048),o=new Uint32Array(64),a=new Uint32Array(64);for(let l=1;l<1024;++l){let c=l<<13,u=0;for(;!(c&8388608);)c<<=1,u-=8388608;c&=-8388609,u+=947912704,s[l]=c|u}for(let l=1024;l<2048;++l)s[l]=939524096+(l-1024<<13);for(let l=1;l<31;++l)o[l]=l<<23;o[31]=1199570944,o[32]=2147483648;for(let l=33;l<63;++l)o[l]=2147483648+(l-32<<23);o[63]=3347054592;for(let l=1;l<64;++l)l!==32&&(a[l]=1024);return{floatView:e,uint32View:n,baseTable:i,shiftTable:r,mantissaTable:s,exponentTable:o,offsetTable:a}}function Ab(t){Math.abs(t)>65504&&console.warn("THREE.DataUtils.toHalfFloat(): Value out of range."),t=Ct(t,-65504,65504),jn.floatView[0]=t;const e=jn.uint32View[0],n=e>>23&511;return jn.baseTable[n]+((e&8388607)>>jn.shiftTable[n])}function Rb(t){const e=t>>10;return jn.uint32View[0]=jn.mantissaTable[jn.offsetTable[e]+(t&1023)]+jn.exponentTable[e],jn.floatView[0]}const pL={toHalfFloat:Ab,fromHalfFloat:Rb},pt=new K,Ao=new Ve;class An{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=Vd,this.updateRange={offset:0,count:-1},this.gpuType=_i,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Ao.fromBufferAttribute(this,n),Ao.applyMatrix3(e),this.setXY(n,Ao.x,Ao.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix3(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyMatrix4(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.applyNormalMatrix(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)pt.fromBufferAttribute(this,n),pt.transformDirection(e),this.setXYZ(n,pt.x,pt.y,pt.z);return this}set(e,n=0){return this.array.set(e,n),this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=ps(n,this.array)),n}setX(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=ps(n,this.array)),n}setY(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=ps(n,this.array)),n}setZ(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=ps(n,this.array)),n}setW(e,n){return this.normalized&&(n=zt(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=zt(n,this.array),i=zt(i,this.array),r=zt(r,this.array),s=zt(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Vd&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class zg extends An{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class Vg extends An{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ki extends An{constructor(e,n,i){super(new Float32Array(e),n,i)}}let Cb=0;const nn=new xt,Bl=new Nt,yr=new K,Kt=new eo,fs=new eo,bt=new K;class sr extends rr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Cb++}),this.uuid=ns(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ug(e)?Vg:zg)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new We().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return nn.makeRotationFromQuaternion(e),this.applyMatrix4(nn),this}rotateX(e){return nn.makeRotationX(e),this.applyMatrix4(nn),this}rotateY(e){return nn.makeRotationY(e),this.applyMatrix4(nn),this}rotateZ(e){return nn.makeRotationZ(e),this.applyMatrix4(nn),this}translate(e,n,i){return nn.makeTranslation(e,n,i),this.applyMatrix4(nn),this}scale(e,n,i){return nn.makeScale(e,n,i),this.applyMatrix4(nn),this}lookAt(e){return Bl.lookAt(e),Bl.updateMatrix(),this.applyMatrix4(Bl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(yr).negate(),this.translate(yr.x,yr.y,yr.z),this}setFromPoints(e){const n=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];n.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Ki(n,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new eo);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new K(-1/0,-1/0,-1/0),new K(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Kt.setFromBufferAttribute(s),this.morphTargetsRelative?(bt.addVectors(this.boundingBox.min,Kt.min),this.boundingBox.expandByPoint(bt),bt.addVectors(this.boundingBox.max,Kt.max),this.boundingBox.expandByPoint(bt)):(this.boundingBox.expandByPoint(Kt.min),this.boundingBox.expandByPoint(Kt.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ru);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new K,1/0);return}if(e){const i=this.boundingSphere.center;if(Kt.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];fs.setFromBufferAttribute(a),this.morphTargetsRelative?(bt.addVectors(Kt.min,fs.min),Kt.expandByPoint(bt),bt.addVectors(Kt.max,fs.max),Kt.expandByPoint(bt)):(Kt.expandByPoint(fs.min),Kt.expandByPoint(fs.max))}Kt.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)bt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(bt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,u=a.count;c<u;c++)bt.fromBufferAttribute(a,c),l&&(yr.fromBufferAttribute(e,c),bt.add(yr)),r=Math.max(r,i.distanceToSquared(bt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=n.position.array,s=n.normal.array,o=n.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new An(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,c=[],u=[];for(let b=0;b<a;b++)c[b]=new K,u[b]=new K;const f=new K,d=new K,h=new K,g=new Ve,v=new Ve,m=new Ve,p=new K,M=new K;function _(b,F,B){f.fromArray(r,b*3),d.fromArray(r,F*3),h.fromArray(r,B*3),g.fromArray(o,b*2),v.fromArray(o,F*2),m.fromArray(o,B*2),d.sub(f),h.sub(f),v.sub(g),m.sub(g);const I=1/(v.x*m.y-m.x*v.y);isFinite(I)&&(p.copy(d).multiplyScalar(m.y).addScaledVector(h,-v.y).multiplyScalar(I),M.copy(h).multiplyScalar(v.x).addScaledVector(d,-m.x).multiplyScalar(I),c[b].add(p),c[F].add(p),c[B].add(p),u[b].add(M),u[F].add(M),u[B].add(M))}let S=this.groups;S.length===0&&(S=[{start:0,count:i.length}]);for(let b=0,F=S.length;b<F;++b){const B=S[b],I=B.start,G=B.count;for(let X=I,V=I+G;X<V;X+=3)_(i[X+0],i[X+1],i[X+2])}const x=new K,T=new K,L=new K,C=new K;function y(b){L.fromArray(s,b*3),C.copy(L);const F=c[b];x.copy(F),x.sub(L.multiplyScalar(L.dot(F))).normalize(),T.crossVectors(C,F);const I=T.dot(u[b])<0?-1:1;l[b*4]=x.x,l[b*4+1]=x.y,l[b*4+2]=x.z,l[b*4+3]=I}for(let b=0,F=S.length;b<F;++b){const B=S[b],I=B.start,G=B.count;for(let X=I,V=I+G;X<V;X+=3)y(i[X+0]),y(i[X+1]),y(i[X+2])}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new An(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let d=0,h=i.count;d<h;d++)i.setXYZ(d,0,0,0);const r=new K,s=new K,o=new K,a=new K,l=new K,c=new K,u=new K,f=new K;if(e)for(let d=0,h=e.count;d<h;d+=3){const g=e.getX(d+0),v=e.getX(d+1),m=e.getX(d+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,v),o.fromBufferAttribute(n,m),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),a.add(u),l.add(u),c.add(u),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let d=0,h=n.count;d<h;d+=3)r.fromBufferAttribute(n,d+0),s.fromBufferAttribute(n,d+1),o.fromBufferAttribute(n,d+2),u.subVectors(o,s),f.subVectors(r,s),u.cross(f),i.setXYZ(d+0,u.x,u.y,u.z),i.setXYZ(d+1,u.x,u.y,u.z),i.setXYZ(d+2,u.x,u.y,u.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)bt.fromBufferAttribute(e,n),bt.normalize(),e.setXYZ(n,bt.x,bt.y,bt.z)}toNonIndexed(){function e(a,l){const c=a.array,u=a.itemSize,f=a.normalized,d=new c.constructor(l.length*u);let h=0,g=0;for(let v=0,m=l.length;v<m;v++){a.isInterleavedBufferAttribute?h=l[v]*a.data.stride+a.offset:h=l[v]*u;for(let p=0;p<u;p++)d[g++]=c[h++]}return new An(d,u,f)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new sr,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let u=0,f=c.length;u<f;u++){const d=c[u],h=e(d,i);l.push(h)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],u=[];for(let f=0,d=c.length;f<d;f++){const h=c[f];u.push(h.toJSON(e.data))}u.length>0&&(r[l]=u,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(n));const r=e.attributes;for(const c in r){const u=r[c];this.setAttribute(c,u.clone(n))}const s=e.morphAttributes;for(const c in s){const u=[],f=s[c];for(let d=0,h=f.length;d<h;d++)u.push(f[d].clone(n));this.morphAttributes[c]=u}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,u=o.length;c<u;c++){const f=o[c];this.addGroup(f.start,f.count,f.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const th=new xt,Ui=new vb,Ro=new Ru,nh=new K,xr=new K,Mr=new K,Er=new K,kl=new K,Co=new K,Po=new Ve,Lo=new Ve,Do=new Ve,ih=new K,rh=new K,sh=new K,Io=new K,Uo=new K;class vi extends Nt{constructor(e=new sr,n=new Hg){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Co.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const u=a[l],f=s[l];u!==0&&(kl.fromBufferAttribute(f,e),o?Co.addScaledVector(kl,u):Co.addScaledVector(kl.sub(n),u))}n.add(Co)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ro.copy(i.boundingSphere),Ro.applyMatrix4(s),Ui.copy(e.ray).recast(e.near),!(Ro.containsPoint(Ui.origin)===!1&&(Ui.intersectSphere(Ro,nh)===null||Ui.origin.distanceToSquared(nh)>(e.far-e.near)**2))&&(th.copy(s).invert(),Ui.copy(e.ray).applyMatrix4(th),!(i.boundingBox!==null&&Ui.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,Ui)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,u=s.attributes.uv1,f=s.attributes.normal,d=s.groups,h=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(a.count,Math.min(m.start+m.count,h.start+h.count));for(let S=M,x=_;S<x;S+=3){const T=a.getX(S),L=a.getX(S+1),C=a.getX(S+2);r=No(this,p,e,i,c,u,f,T,L,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(a.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=No(this,o,e,i,c,u,f,M,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,v=d.length;g<v;g++){const m=d[g],p=o[m.materialIndex],M=Math.max(m.start,h.start),_=Math.min(l.count,Math.min(m.start+m.count,h.start+h.count));for(let S=M,x=_;S<x;S+=3){const T=S,L=S+1,C=S+2;r=No(this,p,e,i,c,u,f,T,L,C),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,h.start),v=Math.min(l.count,h.start+h.count);for(let m=g,p=v;m<p;m+=3){const M=m,_=m+1,S=m+2;r=No(this,o,e,i,c,u,f,M,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function Pb(t,e,n,i,r,s,o,a){let l;if(e.side===Xt?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ti,a),l===null)return null;Uo.copy(a),Uo.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Uo);return c<n.near||c>n.far?null:{distance:c,point:Uo.clone(),object:t}}function No(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,xr),t.getVertexPosition(l,Mr),t.getVertexPosition(c,Er);const u=Pb(t,e,n,i,xr,Mr,Er,Io);if(u){r&&(Po.fromBufferAttribute(r,a),Lo.fromBufferAttribute(r,l),Do.fromBufferAttribute(r,c),u.uv=_n.getInterpolation(Io,xr,Mr,Er,Po,Lo,Do,new Ve)),s&&(Po.fromBufferAttribute(s,a),Lo.fromBufferAttribute(s,l),Do.fromBufferAttribute(s,c),u.uv1=_n.getInterpolation(Io,xr,Mr,Er,Po,Lo,Do,new Ve),u.uv2=u.uv1),o&&(ih.fromBufferAttribute(o,a),rh.fromBufferAttribute(o,l),sh.fromBufferAttribute(o,c),u.normal=_n.getInterpolation(Io,xr,Mr,Er,ih,rh,sh,new K),u.normal.dot(i.direction)>0&&u.normal.multiplyScalar(-1));const f={a,b:l,c,normal:new K,materialIndex:0};_n.getNormal(xr,Mr,Er,f.normal),u.face=f}return u}class no extends sr{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],u=[],f=[];let d=0,h=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(u,3)),this.setAttribute("uv",new Ki(f,2));function g(v,m,p,M,_,S,x,T,L,C,y){const b=S/L,F=x/C,B=S/2,I=x/2,G=T/2,X=L+1,V=C+1;let W=0,H=0;const ce=new K;for(let he=0;he<V;he++){const Ee=he*F-I;for(let q=0;q<X;q++){const pe=q*b-B;ce[v]=pe*M,ce[m]=Ee*_,ce[p]=G,c.push(ce.x,ce.y,ce.z),ce[v]=0,ce[m]=0,ce[p]=T>0?1:-1,u.push(ce.x,ce.y,ce.z),f.push(q/L),f.push(1-he/C),W+=1}}for(let he=0;he<C;he++)for(let Ee=0;Ee<L;Ee++){const q=d+Ee+X*he,pe=d+Ee+X*(he+1),me=d+(Ee+1)+X*(he+1),Se=d+(Ee+1)+X*he;l.push(q,pe,Se),l.push(pe,me,Se),H+=6}a.addGroup(h,H,y),h+=H,d+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new no(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Zr(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function kt(t){const e={};for(let n=0;n<t.length;n++){const i=Zr(t[n]);for(const r in i)e[r]=i[r]}return e}function Lb(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function Gg(t){return t.getRenderTarget()===null?t.outputColorSpace:Cn}const Db={clone:Zr,merge:kt};var Ib=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Ub=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class tr extends to{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=Ib,this.fragmentShader=Ub,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Zr(e.uniforms),this.uniformsGroups=Lb(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class Wg extends Nt{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new xt,this.projectionMatrix=new xt,this.projectionMatrixInverse=new xt,this.coordinateSystem=$n}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(-n[8],-n[9],-n[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class sn extends Wg{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=Fs*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(bs*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Fs*2*Math.atan(Math.tan(bs*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(bs*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Sr=-90,br=1;class Nb extends Nt{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new sn(Sr,br,e,n);r.layers=this.layers,this.add(r);const s=new sn(Sr,br,e,n);s.layers=this.layers,this.add(s);const o=new sn(Sr,br,e,n);o.layers=this.layers,this.add(o);const a=new sn(Sr,br,e,n);a.layers=this.layers,this.add(a);const l=new sn(Sr,br,e,n);l.layers=this.layers,this.add(l);const c=new sn(Sr,br,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===$n)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===pa)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,c]=this.children,u=e.getRenderTarget(),f=e.toneMapping,d=e.xr.enabled;e.toneMapping=Kn,e.xr.enabled=!1;const h=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(n,r),e.setRenderTarget(i,1),e.render(n,s),e.setRenderTarget(i,2),e.render(n,o),e.setRenderTarget(i,3),e.render(n,a),e.setRenderTarget(i,4),e.render(n,l),i.texture.generateMipmaps=h,e.setRenderTarget(i,5),e.render(n,c),e.setRenderTarget(u),e.toneMapping=f,e.xr.enabled=d,i.texture.needsPMREMUpdate=!0}}class Xg extends Ut{constructor(e,n,i,r,s,o,a,l,c,u){e=e!==void 0?e:[],n=n!==void 0?n:$r,super(e,n,i,r,s,o,a,l,c,u),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Ob extends Qi{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];n.encoding!==void 0&&(ws("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),n.colorSpace=n.encoding===qi?ze:Yi),this.texture=new Xg(r,n.mapping,n.wrapS,n.wrapT,n.magFilter,n.minFilter,n.format,n.type,n.anisotropy,n.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=n.generateMipmaps!==void 0?n.generateMipmaps:!1,this.texture.minFilter=n.minFilter!==void 0?n.minFilter:Rt}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},r=new no(5,5,5),s=new tr({name:"CubemapFromEquirect",uniforms:Zr(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Xt,blending:Ei});s.uniforms.tEquirect.value=n;const o=new vi(r,s),a=n.minFilter;return n.minFilter===Yr&&(n.minFilter=Rt),new Nb(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}const Hl=new K,Fb=new K,Bb=new We;class Bi{constructor(e=new K(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Hl.subVectors(i,n).cross(Fb.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Hl),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||Bb.getNormalMatrix(e),r=this.coplanarPoint(Hl).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Ni=new Ru,Oo=new K;class Cu{constructor(e=new Bi,n=new Bi,i=new Bi,r=new Bi,s=new Bi,o=new Bi){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=$n){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],c=r[4],u=r[5],f=r[6],d=r[7],h=r[8],g=r[9],v=r[10],m=r[11],p=r[12],M=r[13],_=r[14],S=r[15];if(i[0].setComponents(l-s,d-c,m-h,S-p).normalize(),i[1].setComponents(l+s,d+c,m+h,S+p).normalize(),i[2].setComponents(l+o,d+u,m+g,S+M).normalize(),i[3].setComponents(l-o,d-u,m-g,S-M).normalize(),i[4].setComponents(l-a,d-f,m-v,S-_).normalize(),n===$n)i[5].setComponents(l+a,d+f,m+v,S+_).normalize();else if(n===pa)i[5].setComponents(a,f,v,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Ni.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Ni.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Ni)}intersectsSprite(e){return Ni.center.set(0,0,0),Ni.radius=.7071067811865476,Ni.applyMatrix4(e.matrixWorld),this.intersectsSphere(Ni)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Oo.x=r.normal.x>0?e.max.x:e.min.x,Oo.y=r.normal.y>0?e.max.y:e.min.y,Oo.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Oo)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function jg(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function kb(t,e){const n=e.isWebGL2,i=new WeakMap;function r(c,u){const f=c.array,d=c.usage,h=t.createBuffer();t.bindBuffer(u,h),t.bufferData(u,f,d),c.onUploadCallback();let g;if(f instanceof Float32Array)g=t.FLOAT;else if(f instanceof Uint16Array)if(c.isFloat16BufferAttribute)if(n)g=t.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else g=t.UNSIGNED_SHORT;else if(f instanceof Int16Array)g=t.SHORT;else if(f instanceof Uint32Array)g=t.UNSIGNED_INT;else if(f instanceof Int32Array)g=t.INT;else if(f instanceof Int8Array)g=t.BYTE;else if(f instanceof Uint8Array)g=t.UNSIGNED_BYTE;else if(f instanceof Uint8ClampedArray)g=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+f);return{buffer:h,type:g,bytesPerElement:f.BYTES_PER_ELEMENT,version:c.version}}function s(c,u,f){const d=u.array,h=u.updateRange;t.bindBuffer(f,c),h.count===-1?t.bufferSubData(f,0,d):(n?t.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d,h.offset,h.count):t.bufferSubData(f,h.offset*d.BYTES_PER_ELEMENT,d.subarray(h.offset,h.offset+h.count)),h.count=-1),u.onUploadCallback()}function o(c){return c.isInterleavedBufferAttribute&&(c=c.data),i.get(c)}function a(c){c.isInterleavedBufferAttribute&&(c=c.data);const u=i.get(c);u&&(t.deleteBuffer(u.buffer),i.delete(c))}function l(c,u){if(c.isGLBufferAttribute){const d=i.get(c);(!d||d.version<c.version)&&i.set(c,{buffer:c.buffer,type:c.type,bytesPerElement:c.elementSize,version:c.version});return}c.isInterleavedBufferAttribute&&(c=c.data);const f=i.get(c);f===void 0?i.set(c,r(c,u)):f.version<c.version&&(s(f.buffer,c,u),f.version=c.version)}return{get:o,remove:a,update:l}}class Pu extends sr{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,u=l+1,f=e/a,d=n/l,h=[],g=[],v=[],m=[];for(let p=0;p<u;p++){const M=p*d-o;for(let _=0;_<c;_++){const S=_*f-s;g.push(S,-M,0),v.push(0,0,1),m.push(_/a),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let M=0;M<a;M++){const _=M+c*p,S=M+c*(p+1),x=M+1+c*(p+1),T=M+1+c*p;h.push(_,S,T),h.push(S,x,T)}this.setIndex(h),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(v,3)),this.setAttribute("uv",new Ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Pu(e.width,e.height,e.widthSegments,e.heightSegments)}}var Hb=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,zb=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vb=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,Gb=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Wb=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Xb=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,jb="vec3 transformed = vec3( position );",$b=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,qb=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Yb=`#ifdef USE_IRIDESCENCE
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
		float R21 = R12;
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
#endif`,Kb=`#ifdef USE_BUMPMAP
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
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Zb=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
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
#endif`,Jb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Qb=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,eT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,tT=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,nT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,iT=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,rT=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,sT=`#define PI 3.141592653589793
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
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
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
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
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
} // validated`,oT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
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
#endif`,aT=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,lT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,cT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,uT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,fT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,dT="gl_FragColor = linearToOutputTexel( gl_FragColor );",hT=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,pT=`#ifdef USE_ENVMAP
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
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
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
#endif`,mT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,gT=`#ifdef USE_ENVMAP
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
#endif`,_T=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,vT=`#ifdef USE_ENVMAP
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
#endif`,yT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,xT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,MT=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ET=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,ST=`#ifdef USE_GRADIENTMAP
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
}`,bT=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,TT=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,wT=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,AT=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,RT=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
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
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
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
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
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
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
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
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
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
#endif`,CT=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
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
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
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
#endif`,PT=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,LT=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,DT=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,IT=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,UT=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
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
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,NT=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
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
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
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
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
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
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
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
}`,OT=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
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
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getSpotLightInfo( spotLight, geometry, directLight );
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
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
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
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,FT=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,BT=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,kT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,HT=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,zT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,VT=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,GT=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,WT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,XT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,jT=`#if defined( USE_POINTS_UV )
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
#endif`,$T=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,qT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,YT=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,KT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,ZT=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,JT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,QT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
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
vec3 geometryNormal = normal;`,ew=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,tw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,nw=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,iw=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,rw=`#ifdef USE_NORMALMAP
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
#endif`,sw=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,ow=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,aw=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,lw=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,cw=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,uw=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
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
}`,fw=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,dw=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,hw=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,pw=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,mw=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,gw=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,_w=`#if NUM_SPOT_LIGHT_COORDS > 0
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
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
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
		return shadow;
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
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
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
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,vw=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
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
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,yw=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,xw=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,Mw=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,Ew=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,Sw=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,bw=`#ifdef USE_SKINNING
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
#endif`,Tw=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,ww=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,Aw=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,Rw=`#ifndef saturate
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
vec3 OptimizedCineonToneMapping( vec3 color ) {
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,Cw=`#ifdef USE_TRANSMISSION
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
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,Pw=`#ifdef USE_TRANSMISSION
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
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,Lw=`#ifdef USE_UV
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
#endif`,Dw=`#ifdef USE_UV
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
#endif`,Iw=`#ifdef USE_UV
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
#endif`,Uw=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const Nw=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Ow=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,Fw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Bw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,kw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Hw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,zw=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Vw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,Gw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
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
}`,Ww=`#define DISTANCE
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
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,Xw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,jw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,$w=`uniform float scale;
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
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,qw=`uniform vec3 diffuse;
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
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Yw=`#include <common>
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
	#include <morphcolor_vertex>
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
}`,Kw=`uniform vec3 diffuse;
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
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
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
}`,Jw=`#define LAMBERT
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Qw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,eA=`#define MATCAP
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
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tA=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
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
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,nA=`#define NORMAL
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
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,iA=`#define PHONG
varying vec3 vViewPosition;
#include <common>
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
}`,rA=`#define PHONG
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sA=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
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
	#include <morphcolor_vertex>
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
}`,oA=`#define STANDARD
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
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
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aA=`#define TOON
varying vec3 vViewPosition;
#include <common>
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
	#include <morphcolor_vertex>
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
}`,lA=`#define TOON
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
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,cA=`uniform float size;
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
}`,uA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fA=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
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
}`,dA=`uniform vec3 color;
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
	#include <encodings_fragment>
	#include <fog_fragment>
}`,hA=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
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
}`,pA=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,Ge={alphamap_fragment:Hb,alphamap_pars_fragment:zb,alphatest_fragment:Vb,alphatest_pars_fragment:Gb,aomap_fragment:Wb,aomap_pars_fragment:Xb,begin_vertex:jb,beginnormal_vertex:$b,bsdfs:qb,iridescence_fragment:Yb,bumpmap_pars_fragment:Kb,clipping_planes_fragment:Zb,clipping_planes_pars_fragment:Jb,clipping_planes_pars_vertex:Qb,clipping_planes_vertex:eT,color_fragment:tT,color_pars_fragment:nT,color_pars_vertex:iT,color_vertex:rT,common:sT,cube_uv_reflection_fragment:oT,defaultnormal_vertex:aT,displacementmap_pars_vertex:lT,displacementmap_vertex:cT,emissivemap_fragment:uT,emissivemap_pars_fragment:fT,encodings_fragment:dT,encodings_pars_fragment:hT,envmap_fragment:pT,envmap_common_pars_fragment:mT,envmap_pars_fragment:gT,envmap_pars_vertex:_T,envmap_physical_pars_fragment:CT,envmap_vertex:vT,fog_vertex:yT,fog_pars_vertex:xT,fog_fragment:MT,fog_pars_fragment:ET,gradientmap_pars_fragment:ST,lightmap_fragment:bT,lightmap_pars_fragment:TT,lights_lambert_fragment:wT,lights_lambert_pars_fragment:AT,lights_pars_begin:RT,lights_toon_fragment:PT,lights_toon_pars_fragment:LT,lights_phong_fragment:DT,lights_phong_pars_fragment:IT,lights_physical_fragment:UT,lights_physical_pars_fragment:NT,lights_fragment_begin:OT,lights_fragment_maps:FT,lights_fragment_end:BT,logdepthbuf_fragment:kT,logdepthbuf_pars_fragment:HT,logdepthbuf_pars_vertex:zT,logdepthbuf_vertex:VT,map_fragment:GT,map_pars_fragment:WT,map_particle_fragment:XT,map_particle_pars_fragment:jT,metalnessmap_fragment:$T,metalnessmap_pars_fragment:qT,morphcolor_vertex:YT,morphnormal_vertex:KT,morphtarget_pars_vertex:ZT,morphtarget_vertex:JT,normal_fragment_begin:QT,normal_fragment_maps:ew,normal_pars_fragment:tw,normal_pars_vertex:nw,normal_vertex:iw,normalmap_pars_fragment:rw,clearcoat_normal_fragment_begin:sw,clearcoat_normal_fragment_maps:ow,clearcoat_pars_fragment:aw,iridescence_pars_fragment:lw,output_fragment:cw,packing:uw,premultiplied_alpha_fragment:fw,project_vertex:dw,dithering_fragment:hw,dithering_pars_fragment:pw,roughnessmap_fragment:mw,roughnessmap_pars_fragment:gw,shadowmap_pars_fragment:_w,shadowmap_pars_vertex:vw,shadowmap_vertex:yw,shadowmask_pars_fragment:xw,skinbase_vertex:Mw,skinning_pars_vertex:Ew,skinning_vertex:Sw,skinnormal_vertex:bw,specularmap_fragment:Tw,specularmap_pars_fragment:ww,tonemapping_fragment:Aw,tonemapping_pars_fragment:Rw,transmission_fragment:Cw,transmission_pars_fragment:Pw,uv_pars_fragment:Lw,uv_pars_vertex:Dw,uv_vertex:Iw,worldpos_vertex:Uw,background_vert:Nw,background_frag:Ow,backgroundCube_vert:Fw,backgroundCube_frag:Bw,cube_vert:kw,cube_frag:Hw,depth_vert:zw,depth_frag:Vw,distanceRGBA_vert:Gw,distanceRGBA_frag:Ww,equirect_vert:Xw,equirect_frag:jw,linedashed_vert:$w,linedashed_frag:qw,meshbasic_vert:Yw,meshbasic_frag:Kw,meshlambert_vert:Zw,meshlambert_frag:Jw,meshmatcap_vert:Qw,meshmatcap_frag:eA,meshnormal_vert:tA,meshnormal_frag:nA,meshphong_vert:iA,meshphong_frag:rA,meshphysical_vert:sA,meshphysical_frag:oA,meshtoon_vert:aA,meshtoon_frag:lA,points_vert:cA,points_frag:uA,shadow_vert:fA,shadow_frag:dA,sprite_vert:hA,sprite_frag:pA},Me={common:{diffuse:{value:new tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new We}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new We}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new We}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new We},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new We},normalScale:{value:new Ve(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new We},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new We}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new We}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new We}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0},uvTransform:{value:new We}},sprite:{diffuse:{value:new tt(16777215)},opacity:{value:1},center:{value:new Ve(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new We},alphaMap:{value:null},alphaMapTransform:{value:new We},alphaTest:{value:0}}},Tn={basic:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.fog]),vertexShader:Ge.meshbasic_vert,fragmentShader:Ge.meshbasic_frag},lambert:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ge.meshlambert_vert,fragmentShader:Ge.meshlambert_frag},phong:{uniforms:kt([Me.common,Me.specularmap,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},specular:{value:new tt(1118481)},shininess:{value:30}}]),vertexShader:Ge.meshphong_vert,fragmentShader:Ge.meshphong_frag},standard:{uniforms:kt([Me.common,Me.envmap,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.roughnessmap,Me.metalnessmap,Me.fog,Me.lights,{emissive:{value:new tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag},toon:{uniforms:kt([Me.common,Me.aomap,Me.lightmap,Me.emissivemap,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.gradientmap,Me.fog,Me.lights,{emissive:{value:new tt(0)}}]),vertexShader:Ge.meshtoon_vert,fragmentShader:Ge.meshtoon_frag},matcap:{uniforms:kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,Me.fog,{matcap:{value:null}}]),vertexShader:Ge.meshmatcap_vert,fragmentShader:Ge.meshmatcap_frag},points:{uniforms:kt([Me.points,Me.fog]),vertexShader:Ge.points_vert,fragmentShader:Ge.points_frag},dashed:{uniforms:kt([Me.common,Me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ge.linedashed_vert,fragmentShader:Ge.linedashed_frag},depth:{uniforms:kt([Me.common,Me.displacementmap]),vertexShader:Ge.depth_vert,fragmentShader:Ge.depth_frag},normal:{uniforms:kt([Me.common,Me.bumpmap,Me.normalmap,Me.displacementmap,{opacity:{value:1}}]),vertexShader:Ge.meshnormal_vert,fragmentShader:Ge.meshnormal_frag},sprite:{uniforms:kt([Me.sprite,Me.fog]),vertexShader:Ge.sprite_vert,fragmentShader:Ge.sprite_frag},background:{uniforms:{uvTransform:{value:new We},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ge.background_vert,fragmentShader:Ge.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:Ge.backgroundCube_vert,fragmentShader:Ge.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ge.cube_vert,fragmentShader:Ge.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ge.equirect_vert,fragmentShader:Ge.equirect_frag},distanceRGBA:{uniforms:kt([Me.common,Me.displacementmap,{referencePosition:{value:new K},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ge.distanceRGBA_vert,fragmentShader:Ge.distanceRGBA_frag},shadow:{uniforms:kt([Me.lights,Me.fog,{color:{value:new tt(0)},opacity:{value:1}}]),vertexShader:Ge.shadow_vert,fragmentShader:Ge.shadow_frag}};Tn.physical={uniforms:kt([Tn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new We},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new We},clearcoatNormalScale:{value:new Ve(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new We},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new We},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new We},sheen:{value:0},sheenColor:{value:new tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new We},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new We},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new We},transmissionSamplerSize:{value:new Ve},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new We},attenuationDistance:{value:0},attenuationColor:{value:new tt(0)},specularColor:{value:new tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new We},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new We},anisotropyVector:{value:new Ve},anisotropyMap:{value:null},anisotropyMapTransform:{value:new We}}]),vertexShader:Ge.meshphysical_vert,fragmentShader:Ge.meshphysical_frag};const Fo={r:0,b:0,g:0};function mA(t,e,n,i,r,s,o){const a=new tt(0);let l=s===!0?0:1,c,u,f=null,d=0,h=null;function g(m,p){let M=!1,_=p.isScene===!0?p.background:null;switch(_&&_.isTexture&&(_=(p.backgroundBlurriness>0?n:e).get(_)),_===null?v(a,l):_&&_.isColor&&(v(_,1),M=!0),t.xr.getEnvironmentBlendMode()){case"opaque":M=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),M=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),M=!0;break}(t.autoClear||M)&&t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil),_&&(_.isCubeTexture||_.mapping===ka)?(u===void 0&&(u=new vi(new no(1,1,1),new tr({name:"BackgroundCubeMaterial",uniforms:Zr(Tn.backgroundCube.uniforms),vertexShader:Tn.backgroundCube.vertexShader,fragmentShader:Tn.backgroundCube.fragmentShader,side:Xt,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),u.geometry.deleteAttribute("uv"),u.onBeforeRender=function(T,L,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(u.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(u)),u.material.uniforms.envMap.value=_,u.material.uniforms.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,u.material.uniforms.backgroundBlurriness.value=p.backgroundBlurriness,u.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,u.material.toneMapped=_.colorSpace!==ze,(f!==_||d!==_.version||h!==t.toneMapping)&&(u.material.needsUpdate=!0,f=_,d=_.version,h=t.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null)):_&&_.isTexture&&(c===void 0&&(c=new vi(new Pu(2,2),new tr({name:"BackgroundMaterial",uniforms:Zr(Tn.background.uniforms),vertexShader:Tn.background.vertexShader,fragmentShader:Tn.background.fragmentShader,side:Ti,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=_,c.material.uniforms.backgroundIntensity.value=p.backgroundIntensity,c.material.toneMapped=_.colorSpace!==ze,_.matrixAutoUpdate===!0&&_.updateMatrix(),c.material.uniforms.uvTransform.value.copy(_.matrix),(f!==_||d!==_.version||h!==t.toneMapping)&&(c.material.needsUpdate=!0,f=_,d=_.version,h=t.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null))}function v(m,p){m.getRGB(Fo,Gg(t)),i.buffers.color.setClear(Fo.r,Fo.g,Fo.b,p,o)}return{getClearColor:function(){return a},setClearColor:function(m,p=1){a.set(m),l=p,v(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,v(a,l)},render:g}}function gA(t,e,n,i){const r=t.getParameter(t.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let c=l,u=!1;function f(G,X,V,W,H){let ce=!1;if(o){const he=v(W,V,X);c!==he&&(c=he,h(c.object)),ce=p(G,W,V,H),ce&&M(G,W,V,H)}else{const he=X.wireframe===!0;(c.geometry!==W.id||c.program!==V.id||c.wireframe!==he)&&(c.geometry=W.id,c.program=V.id,c.wireframe=he,ce=!0)}H!==null&&n.update(H,t.ELEMENT_ARRAY_BUFFER),(ce||u)&&(u=!1,C(G,X,V,W),H!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,n.get(H).buffer))}function d(){return i.isWebGL2?t.createVertexArray():s.createVertexArrayOES()}function h(G){return i.isWebGL2?t.bindVertexArray(G):s.bindVertexArrayOES(G)}function g(G){return i.isWebGL2?t.deleteVertexArray(G):s.deleteVertexArrayOES(G)}function v(G,X,V){const W=V.wireframe===!0;let H=a[G.id];H===void 0&&(H={},a[G.id]=H);let ce=H[X.id];ce===void 0&&(ce={},H[X.id]=ce);let he=ce[W];return he===void 0&&(he=m(d()),ce[W]=he),he}function m(G){const X=[],V=[],W=[];for(let H=0;H<r;H++)X[H]=0,V[H]=0,W[H]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:X,enabledAttributes:V,attributeDivisors:W,object:G,attributes:{},index:null}}function p(G,X,V,W){const H=c.attributes,ce=X.attributes;let he=0;const Ee=V.getAttributes();for(const q in Ee)if(Ee[q].location>=0){const me=H[q];let Se=ce[q];if(Se===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(Se=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(Se=G.instanceColor)),me===void 0||me.attribute!==Se||Se&&me.data!==Se.data)return!0;he++}return c.attributesNum!==he||c.index!==W}function M(G,X,V,W){const H={},ce=X.attributes;let he=0;const Ee=V.getAttributes();for(const q in Ee)if(Ee[q].location>=0){let me=ce[q];me===void 0&&(q==="instanceMatrix"&&G.instanceMatrix&&(me=G.instanceMatrix),q==="instanceColor"&&G.instanceColor&&(me=G.instanceColor));const Se={};Se.attribute=me,me&&me.data&&(Se.data=me.data),H[q]=Se,he++}c.attributes=H,c.attributesNum=he,c.index=W}function _(){const G=c.newAttributes;for(let X=0,V=G.length;X<V;X++)G[X]=0}function S(G){x(G,0)}function x(G,X){const V=c.newAttributes,W=c.enabledAttributes,H=c.attributeDivisors;V[G]=1,W[G]===0&&(t.enableVertexAttribArray(G),W[G]=1),H[G]!==X&&((i.isWebGL2?t:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](G,X),H[G]=X)}function T(){const G=c.newAttributes,X=c.enabledAttributes;for(let V=0,W=X.length;V<W;V++)X[V]!==G[V]&&(t.disableVertexAttribArray(V),X[V]=0)}function L(G,X,V,W,H,ce,he){he===!0?t.vertexAttribIPointer(G,X,V,H,ce):t.vertexAttribPointer(G,X,V,W,H,ce)}function C(G,X,V,W){if(i.isWebGL2===!1&&(G.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;_();const H=W.attributes,ce=V.getAttributes(),he=X.defaultAttributeValues;for(const Ee in ce){const q=ce[Ee];if(q.location>=0){let pe=H[Ee];if(pe===void 0&&(Ee==="instanceMatrix"&&G.instanceMatrix&&(pe=G.instanceMatrix),Ee==="instanceColor"&&G.instanceColor&&(pe=G.instanceColor)),pe!==void 0){const me=pe.normalized,Se=pe.itemSize,_e=n.get(pe);if(_e===void 0)continue;const z=_e.buffer,de=_e.type,se=_e.bytesPerElement,ye=i.isWebGL2===!0&&(de===t.INT||de===t.UNSIGNED_INT||pe.gpuType===Tg);if(pe.isInterleavedBufferAttribute){const we=pe.data,k=we.stride,A=pe.offset;if(we.isInstancedInterleavedBuffer){for(let P=0;P<q.locationSize;P++)x(q.location+P,we.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=we.meshPerAttribute*we.count)}else for(let P=0;P<q.locationSize;P++)S(q.location+P);t.bindBuffer(t.ARRAY_BUFFER,z);for(let P=0;P<q.locationSize;P++)L(q.location+P,Se/q.locationSize,de,me,k*se,(A+Se/q.locationSize*P)*se,ye)}else{if(pe.isInstancedBufferAttribute){for(let we=0;we<q.locationSize;we++)x(q.location+we,pe.meshPerAttribute);G.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let we=0;we<q.locationSize;we++)S(q.location+we);t.bindBuffer(t.ARRAY_BUFFER,z);for(let we=0;we<q.locationSize;we++)L(q.location+we,Se/q.locationSize,de,me,Se*se,Se/q.locationSize*we*se,ye)}}else if(he!==void 0){const me=he[Ee];if(me!==void 0)switch(me.length){case 2:t.vertexAttrib2fv(q.location,me);break;case 3:t.vertexAttrib3fv(q.location,me);break;case 4:t.vertexAttrib4fv(q.location,me);break;default:t.vertexAttrib1fv(q.location,me)}}}}T()}function y(){B();for(const G in a){const X=a[G];for(const V in X){const W=X[V];for(const H in W)g(W[H].object),delete W[H];delete X[V]}delete a[G]}}function b(G){if(a[G.id]===void 0)return;const X=a[G.id];for(const V in X){const W=X[V];for(const H in W)g(W[H].object),delete W[H];delete X[V]}delete a[G.id]}function F(G){for(const X in a){const V=a[X];if(V[G.id]===void 0)continue;const W=V[G.id];for(const H in W)g(W[H].object),delete W[H];delete V[G.id]}}function B(){I(),u=!0,c!==l&&(c=l,h(c.object))}function I(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:f,reset:B,resetDefaultState:I,dispose:y,releaseStatesOfGeometry:b,releaseStatesOfProgram:F,initAttributes:_,enableAttribute:S,disableUnusedAttributes:T}}function _A(t,e,n,i){const r=i.isWebGL2;let s;function o(c){s=c}function a(c,u){t.drawArrays(s,c,u),n.update(u,s,1)}function l(c,u,f){if(f===0)return;let d,h;if(r)d=t,h="drawArraysInstanced";else if(d=e.get("ANGLE_instanced_arrays"),h="drawArraysInstancedANGLE",d===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}d[h](s,c,u,f),n.update(u,s,f)}this.setMode=o,this.render=a,this.renderInstances=l}function vA(t,e,n){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const L=e.get("EXT_texture_filter_anisotropic");i=t.getParameter(L.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(L){if(L==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";L="mediump"}return L==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&t.constructor.name==="WebGL2RenderingContext";let a=n.precision!==void 0?n.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const c=o||e.has("WEBGL_draw_buffers"),u=n.logarithmicDepthBuffer===!0,f=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),d=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),h=t.getParameter(t.MAX_TEXTURE_SIZE),g=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),v=t.getParameter(t.MAX_VERTEX_ATTRIBS),m=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),p=t.getParameter(t.MAX_VARYING_VECTORS),M=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),_=d>0,S=o||e.has("OES_texture_float"),x=_&&S,T=o?t.getParameter(t.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:c,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:u,maxTextures:f,maxVertexTextures:d,maxTextureSize:h,maxCubemapSize:g,maxAttributes:v,maxVertexUniforms:m,maxVaryings:p,maxFragmentUniforms:M,vertexTextures:_,floatFragmentTextures:S,floatVertexTextures:x,maxSamples:T}}function yA(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Bi,a=new We,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(f,d){const h=f.length!==0||d||i!==0||r;return r=d,i=f.length,h},this.beginShadows=function(){s=!0,u(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(f,d){n=u(f,d,0)},this.setState=function(f,d,h){const g=f.clippingPlanes,v=f.clipIntersection,m=f.clipShadows,p=t.get(f);if(!r||g===null||g.length===0||s&&!m)s?u(null):c();else{const M=s?0:i,_=M*4;let S=p.clippingState||null;l.value=S,S=u(g,d,_,h);for(let x=0;x!==_;++x)S[x]=n[x];p.clippingState=S,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=M}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function u(f,d,h,g){const v=f!==null?f.length:0;let m=null;if(v!==0){if(m=l.value,g!==!0||m===null){const p=h+v*4,M=d.matrixWorldInverse;a.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let _=0,S=h;_!==v;++_,S+=4)o.copy(f[_]).applyMatrix4(M,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=v,e.numIntersection=0,m}}function xA(t){let e=new WeakMap;function n(o,a){return a===Cc?o.mapping=$r:a===Pc&&(o.mapping=qr),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===Cc||a===Pc)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new Ob(l.height/2);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class $g extends Wg{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,u=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=u*this.view.offsetY,l=a-u*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}const Lr=4,oh=[.125,.215,.35,.446,.526,.582],zi=20,zl=new $g,ah=new tt;let Vl=null;const ki=(1+Math.sqrt(5))/2,Tr=1/ki,lh=[new K(1,1,1),new K(-1,1,1),new K(1,1,-1),new K(-1,1,-1),new K(0,ki,Tr),new K(0,ki,-Tr),new K(Tr,0,ki),new K(-Tr,0,ki),new K(ki,Tr,0),new K(-ki,Tr,0)];class ch{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,n=0,i=.1,r=100){Vl=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),n>0&&this._blur(s,0,0,n),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=dh(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=fh(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(Vl),e.scissorTest=!1,Bo(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===$r||e.mapping===qr?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vl=this._renderer.getRenderTarget();const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:Rt,minFilter:Rt,generateMipmaps:!1,type:Os,format:xn,colorSpace:Cn,depthBuffer:!1},r=uh(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=uh(e,n,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=MA(s)),this._blurMaterial=EA(s,e,n)}return r}_compileMaterial(e){const n=new vi(this._lodPlanes[0],e);this._renderer.compile(n,zl)}_sceneToCubeUV(e,n,i,r){const a=new sn(90,1,n,i),l=[1,-1,1,1,1,1],c=[1,1,1,-1,-1,-1],u=this._renderer,f=u.autoClear,d=u.toneMapping;u.getClearColor(ah),u.toneMapping=Kn,u.autoClear=!1;const h=new Hg({name:"PMREM.Background",side:Xt,depthWrite:!1,depthTest:!1}),g=new vi(new no,h);let v=!1;const m=e.background;m?m.isColor&&(h.color.copy(m),e.background=null,v=!0):(h.color.copy(ah),v=!0);for(let p=0;p<6;p++){const M=p%3;M===0?(a.up.set(0,l[p],0),a.lookAt(c[p],0,0)):M===1?(a.up.set(0,0,l[p]),a.lookAt(0,c[p],0)):(a.up.set(0,l[p],0),a.lookAt(0,0,c[p]));const _=this._cubeSize;Bo(r,M*_,p>2?_:0,_,_),u.setRenderTarget(r),v&&u.render(g,a),u.render(e,a)}g.geometry.dispose(),g.material.dispose(),u.toneMapping=d,u.autoClear=f,e.background=m}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===$r||e.mapping===qr;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=dh()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=fh());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new vi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Bo(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,zl)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=lh[(r-1)%lh.length];this._blur(e,r-1,r,s,o)}n.autoClear=i}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const u=3,f=new vi(this._lodPlanes[r],c),d=c.uniforms,h=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*h):2*Math.PI/(2*zi-1),v=s/g,m=isFinite(s)?1+Math.floor(u*v):zi;m>zi&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${zi}`);const p=[];let M=0;for(let L=0;L<zi;++L){const C=L/v,y=Math.exp(-C*C/2);p.push(y),L===0?M+=y:L<m&&(M+=2*y)}for(let L=0;L<p.length;L++)p[L]=p[L]/M;d.envMap.value=e.texture,d.samples.value=m,d.weights.value=p,d.latitudinal.value=o==="latitudinal",a&&(d.poleAxis.value=a);const{_lodMax:_}=this;d.dTheta.value=g,d.mipInt.value=_-i;const S=this._sizeLods[r],x=3*S*(r>_-Lr?r-_+Lr:0),T=4*(this._cubeSize-S);Bo(n,x,T,3*S,2*S),l.setRenderTarget(n),l.render(f,zl)}}function MA(t){const e=[],n=[],i=[];let r=t;const s=t-Lr+1+oh.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);n.push(a);let l=1/a;o>t-Lr?l=oh[o-t+Lr-1]:o===0&&(l=0),i.push(l);const c=1/(a-2),u=-c,f=1+c,d=[u,u,f,u,f,f,u,u,f,f,u,f],h=6,g=6,v=3,m=2,p=1,M=new Float32Array(v*g*h),_=new Float32Array(m*g*h),S=new Float32Array(p*g*h);for(let T=0;T<h;T++){const L=T%3*2/3-1,C=T>2?0:-1,y=[L,C,0,L+2/3,C,0,L+2/3,C+1,0,L,C,0,L+2/3,C+1,0,L,C+1,0];M.set(y,v*g*T),_.set(d,m*g*T);const b=[T,T,T,T,T,T];S.set(b,p*g*T)}const x=new sr;x.setAttribute("position",new An(M,v)),x.setAttribute("uv",new An(_,m)),x.setAttribute("faceIndex",new An(S,p)),e.push(x),r>Lr&&r--}return{lodPlanes:e,sizeLods:n,sigmas:i}}function uh(t,e,n){const i=new Qi(t,e,n);return i.texture.mapping=ka,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Bo(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function EA(t,e,n){const i=new Float32Array(zi),r=new K(0,1,0);return new tr({name:"SphericalGaussianBlur",defines:{n:zi,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function fh(){return new tr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Lu(),fragmentShader:`

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
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function dh(){return new tr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Lu(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Lu(){return`

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
	`}function SA(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===Cc||l===Pc,u=l===$r||l===qr;if(c||u)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let f=e.get(a);return n===null&&(n=new ch(t)),f=c?n.fromEquirectangular(a,f):n.fromCubemap(a,f),e.set(a,f),f.texture}else{if(e.has(a))return e.get(a).texture;{const f=a.image;if(c&&f&&f.height>0||u&&f&&r(f)){n===null&&(n=new ch(t));const d=c?n.fromEquirectangular(a):n.fromCubemap(a);return e.set(a,d),a.addEventListener("dispose",s),d.texture}else return null}}}return a}function r(a){let l=0;const c=6;for(let u=0;u<c;u++)a[u]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function bA(t){const e={};function n(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=t.getExtension("WEBGL_depth_texture")||t.getExtension("MOZ_WEBGL_depth_texture")||t.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=t.getExtension("EXT_texture_filter_anisotropic")||t.getExtension("MOZ_EXT_texture_filter_anisotropic")||t.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=t.getExtension("WEBGL_compressed_texture_s3tc")||t.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=t.getExtension("WEBGL_compressed_texture_pvrtc")||t.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=t.getExtension(i)}return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(i){i.isWebGL2?n("EXT_color_buffer_float"):(n("WEBGL_depth_texture"),n("OES_texture_float"),n("OES_texture_half_float"),n("OES_texture_half_float_linear"),n("OES_standard_derivatives"),n("OES_element_index_uint"),n("OES_vertex_array_object"),n("ANGLE_instanced_arrays")),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture")},get:function(i){const r=n(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function TA(t,e,n,i){const r={},s=new WeakMap;function o(f){const d=f.target;d.index!==null&&e.remove(d.index);for(const g in d.attributes)e.remove(d.attributes[g]);for(const g in d.morphAttributes){const v=d.morphAttributes[g];for(let m=0,p=v.length;m<p;m++)e.remove(v[m])}d.removeEventListener("dispose",o),delete r[d.id];const h=s.get(d);h&&(e.remove(h),s.delete(d)),i.releaseStatesOfGeometry(d),d.isInstancedBufferGeometry===!0&&delete d._maxInstanceCount,n.memory.geometries--}function a(f,d){return r[d.id]===!0||(d.addEventListener("dispose",o),r[d.id]=!0,n.memory.geometries++),d}function l(f){const d=f.attributes;for(const g in d)e.update(d[g],t.ARRAY_BUFFER);const h=f.morphAttributes;for(const g in h){const v=h[g];for(let m=0,p=v.length;m<p;m++)e.update(v[m],t.ARRAY_BUFFER)}}function c(f){const d=[],h=f.index,g=f.attributes.position;let v=0;if(h!==null){const M=h.array;v=h.version;for(let _=0,S=M.length;_<S;_+=3){const x=M[_+0],T=M[_+1],L=M[_+2];d.push(x,T,T,L,L,x)}}else{const M=g.array;v=g.version;for(let _=0,S=M.length/3-1;_<S;_+=3){const x=_+0,T=_+1,L=_+2;d.push(x,T,T,L,L,x)}}const m=new(Ug(d)?Vg:zg)(d,1);m.version=v;const p=s.get(f);p&&e.remove(p),s.set(f,m)}function u(f){const d=s.get(f);if(d){const h=f.index;h!==null&&d.version<h.version&&c(f)}else c(f);return s.get(f)}return{get:a,update:l,getWireframeAttribute:u}}function wA(t,e,n,i){const r=i.isWebGL2;let s;function o(d){s=d}let a,l;function c(d){a=d.type,l=d.bytesPerElement}function u(d,h){t.drawElements(s,h,a,d*l),n.update(h,s,1)}function f(d,h,g){if(g===0)return;let v,m;if(r)v=t,m="drawElementsInstanced";else if(v=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",v===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}v[m](s,h,a,d*l,g),n.update(h,s,g)}this.setMode=o,this.setIndex=c,this.render=u,this.renderInstances=f}function AA(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function RA(t,e){return t[0]-e[0]}function CA(t,e){return Math.abs(e[1])-Math.abs(t[1])}function PA(t,e,n){const i={},r=new Float32Array(8),s=new WeakMap,o=new Tt,a=[];for(let c=0;c<8;c++)a[c]=[c,0];function l(c,u,f){const d=c.morphTargetInfluences;if(e.isWebGL2===!0){const h=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=h!==void 0?h.length:0;let v=s.get(u);if(v===void 0||v.count!==g){let G=function(){B.dispose(),s.delete(u),u.removeEventListener("dispose",G)};v!==void 0&&v.texture.dispose();const M=u.morphAttributes.position!==void 0,_=u.morphAttributes.normal!==void 0,S=u.morphAttributes.color!==void 0,x=u.morphAttributes.position||[],T=u.morphAttributes.normal||[],L=u.morphAttributes.color||[];let C=0;M===!0&&(C=1),_===!0&&(C=2),S===!0&&(C=3);let y=u.attributes.position.count*C,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);const F=new Float32Array(y*b*4*g),B=new Fg(F,y,b,g);B.type=_i,B.needsUpdate=!0;const I=C*4;for(let X=0;X<g;X++){const V=x[X],W=T[X],H=L[X],ce=y*b*4*X;for(let he=0;he<V.count;he++){const Ee=he*I;M===!0&&(o.fromBufferAttribute(V,he),F[ce+Ee+0]=o.x,F[ce+Ee+1]=o.y,F[ce+Ee+2]=o.z,F[ce+Ee+3]=0),_===!0&&(o.fromBufferAttribute(W,he),F[ce+Ee+4]=o.x,F[ce+Ee+5]=o.y,F[ce+Ee+6]=o.z,F[ce+Ee+7]=0),S===!0&&(o.fromBufferAttribute(H,he),F[ce+Ee+8]=o.x,F[ce+Ee+9]=o.y,F[ce+Ee+10]=o.z,F[ce+Ee+11]=H.itemSize===4?o.w:1)}}v={count:g,texture:B,size:new Ve(y,b)},s.set(u,v),u.addEventListener("dispose",G)}let m=0;for(let M=0;M<d.length;M++)m+=d[M];const p=u.morphTargetsRelative?1:1-m;f.getUniforms().setValue(t,"morphTargetBaseInfluence",p),f.getUniforms().setValue(t,"morphTargetInfluences",d),f.getUniforms().setValue(t,"morphTargetsTexture",v.texture,n),f.getUniforms().setValue(t,"morphTargetsTextureSize",v.size)}else{const h=d===void 0?0:d.length;let g=i[u.id];if(g===void 0||g.length!==h){g=[];for(let _=0;_<h;_++)g[_]=[_,0];i[u.id]=g}for(let _=0;_<h;_++){const S=g[_];S[0]=_,S[1]=d[_]}g.sort(CA);for(let _=0;_<8;_++)_<h&&g[_][1]?(a[_][0]=g[_][0],a[_][1]=g[_][1]):(a[_][0]=Number.MAX_SAFE_INTEGER,a[_][1]=0);a.sort(RA);const v=u.morphAttributes.position,m=u.morphAttributes.normal;let p=0;for(let _=0;_<8;_++){const S=a[_],x=S[0],T=S[1];x!==Number.MAX_SAFE_INTEGER&&T?(v&&u.getAttribute("morphTarget"+_)!==v[x]&&u.setAttribute("morphTarget"+_,v[x]),m&&u.getAttribute("morphNormal"+_)!==m[x]&&u.setAttribute("morphNormal"+_,m[x]),r[_]=T,p+=T):(v&&u.hasAttribute("morphTarget"+_)===!0&&u.deleteAttribute("morphTarget"+_),m&&u.hasAttribute("morphNormal"+_)===!0&&u.deleteAttribute("morphNormal"+_),r[_]=0)}const M=u.morphTargetsRelative?1:1-p;f.getUniforms().setValue(t,"morphTargetBaseInfluence",M),f.getUniforms().setValue(t,"morphTargetInfluences",r)}}return{update:l}}function LA(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,u=l.geometry,f=e.get(l,u);return r.get(f)!==c&&(e.update(f),r.set(f,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER)),f}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const qg=new Ut,Yg=new Fg,Kg=new gb,Zg=new Xg,hh=[],ph=[],mh=new Float32Array(16),gh=new Float32Array(9),_h=new Float32Array(4);function is(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=hh[r];if(s===void 0&&(s=new Float32Array(r),hh[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function Mt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Et(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function za(t,e){let n=ph[e];n===void 0&&(n=new Int32Array(e),ph[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function DA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function IA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2fv(this.addr,e),Et(n,e)}}function UA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(Mt(n,e))return;t.uniform3fv(this.addr,e),Et(n,e)}}function NA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4fv(this.addr,e),Et(n,e)}}function OA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;_h.set(i),t.uniformMatrix2fv(this.addr,!1,_h),Et(n,i)}}function FA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;gh.set(i),t.uniformMatrix3fv(this.addr,!1,gh),Et(n,i)}}function BA(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(Mt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Et(n,e)}else{if(Mt(n,i))return;mh.set(i),t.uniformMatrix4fv(this.addr,!1,mh),Et(n,i)}}function kA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function HA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2iv(this.addr,e),Et(n,e)}}function zA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3iv(this.addr,e),Et(n,e)}}function VA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4iv(this.addr,e),Et(n,e)}}function GA(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function WA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(Mt(n,e))return;t.uniform2uiv(this.addr,e),Et(n,e)}}function XA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(Mt(n,e))return;t.uniform3uiv(this.addr,e),Et(n,e)}}function jA(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(Mt(n,e))return;t.uniform4uiv(this.addr,e),Et(n,e)}}function $A(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2D(e||qg,r)}function qA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||Kg,r)}function YA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||Zg,r)}function KA(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||Yg,r)}function ZA(t){switch(t){case 5126:return DA;case 35664:return IA;case 35665:return UA;case 35666:return NA;case 35674:return OA;case 35675:return FA;case 35676:return BA;case 5124:case 35670:return kA;case 35667:case 35671:return HA;case 35668:case 35672:return zA;case 35669:case 35673:return VA;case 5125:return GA;case 36294:return WA;case 36295:return XA;case 36296:return jA;case 35678:case 36198:case 36298:case 36306:case 35682:return $A;case 35679:case 36299:case 36307:return qA;case 35680:case 36300:case 36308:case 36293:return YA;case 36289:case 36303:case 36311:case 36292:return KA}}function JA(t,e){t.uniform1fv(this.addr,e)}function QA(t,e){const n=is(e,this.size,2);t.uniform2fv(this.addr,n)}function eR(t,e){const n=is(e,this.size,3);t.uniform3fv(this.addr,n)}function tR(t,e){const n=is(e,this.size,4);t.uniform4fv(this.addr,n)}function nR(t,e){const n=is(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function iR(t,e){const n=is(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function rR(t,e){const n=is(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function sR(t,e){t.uniform1iv(this.addr,e)}function oR(t,e){t.uniform2iv(this.addr,e)}function aR(t,e){t.uniform3iv(this.addr,e)}function lR(t,e){t.uniform4iv(this.addr,e)}function cR(t,e){t.uniform1uiv(this.addr,e)}function uR(t,e){t.uniform2uiv(this.addr,e)}function fR(t,e){t.uniform3uiv(this.addr,e)}function dR(t,e){t.uniform4uiv(this.addr,e)}function hR(t,e,n){const i=this.cache,r=e.length,s=za(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2D(e[o]||qg,s[o])}function pR(t,e,n){const i=this.cache,r=e.length,s=za(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||Kg,s[o])}function mR(t,e,n){const i=this.cache,r=e.length,s=za(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||Zg,s[o])}function gR(t,e,n){const i=this.cache,r=e.length,s=za(n,r);Mt(i,s)||(t.uniform1iv(this.addr,s),Et(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||Yg,s[o])}function _R(t){switch(t){case 5126:return JA;case 35664:return QA;case 35665:return eR;case 35666:return tR;case 35674:return nR;case 35675:return iR;case 35676:return rR;case 5124:case 35670:return sR;case 35667:case 35671:return oR;case 35668:case 35672:return aR;case 35669:case 35673:return lR;case 5125:return cR;case 36294:return uR;case 36295:return fR;case 36296:return dR;case 35678:case 36198:case 36298:case 36306:case 35682:return hR;case 35679:case 36299:case 36307:return pR;case 35680:case 36300:case 36308:case 36293:return mR;case 36289:case 36303:case 36311:case 36292:return gR}}class vR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.setValue=ZA(n.type)}}class yR{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.size=n.size,this.setValue=_R(n.type)}}class xR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Gl=/(\w+)(\])?(\[|\.)?/g;function vh(t,e){t.seq.push(e),t.map[e.id]=e}function MR(t,e,n){const i=t.name,r=i.length;for(Gl.lastIndex=0;;){const s=Gl.exec(i),o=Gl.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){vh(n,c===void 0?new vR(a,t,e):new yR(a,t,e));break}else{let f=n.map[a];f===void 0&&(f=new xR(a),vh(n,f)),n=f}}}class Ko{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(n,r),o=e.getUniformLocation(n,s.name);MR(s,o,this)}}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function yh(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}let ER=0;function SR(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}function bR(t){switch(t){case Cn:return["Linear","( value )"];case ze:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",t),["Linear","( value )"]}}function xh(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),r=t.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return n.toUpperCase()+`

`+r+`

`+SR(t.getShaderSource(e),o)}else return r}function TR(t,e){const n=bR(e);return"vec4 "+t+"( vec4 value ) { return LinearTo"+n[0]+n[1]+"; }"}function wR(t,e){let n;switch(e){case MS:n="Linear";break;case ES:n="Reinhard";break;case SS:n="OptimizedCineon";break;case bS:n="ACESFilmic";break;case TS:n="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),n="Linear"}return"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}function AR(t){return[t.extensionDerivatives||t.envMapCubeUVHeight||t.bumpMap||t.normalMapTangentSpace||t.clearcoatNormalMap||t.flatShading||t.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(t.extensionFragDepth||t.logarithmicDepthBuffer)&&t.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",t.extensionDrawBuffers&&t.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(t.extensionShaderTextureLOD||t.envMap||t.transmission)&&t.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(ms).join(`
`)}function RR(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function CR(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ms(t){return t!==""}function Mh(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Eh(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const PR=/^[ \t]*#include +<([\w\d./]+)>/gm;function Nc(t){return t.replace(PR,LR)}function LR(t,e){const n=Ge[e];if(n===void 0)throw new Error("Can not resolve #include <"+e+">");return Nc(n)}const DR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function Sh(t){return t.replace(DR,IR)}function IR(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function bh(t){let e="precision "+t.precision+` float;
precision `+t.precision+" int;";return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function UR(t){let e="SHADOWMAP_TYPE_BASIC";return t.shadowMapType===xg?e="SHADOWMAP_TYPE_PCF":t.shadowMapType===QE?e="SHADOWMAP_TYPE_PCF_SOFT":t.shadowMapType===Vn&&(e="SHADOWMAP_TYPE_VSM"),e}function NR(t){let e="ENVMAP_TYPE_CUBE";if(t.envMap)switch(t.envMapMode){case $r:case qr:e="ENVMAP_TYPE_CUBE";break;case ka:e="ENVMAP_TYPE_CUBE_UV";break}return e}function OR(t){let e="ENVMAP_MODE_REFLECTION";if(t.envMap)switch(t.envMapMode){case qr:e="ENVMAP_MODE_REFRACTION";break}return e}function FR(t){let e="ENVMAP_BLENDING_NONE";if(t.envMap)switch(t.combine){case Sg:e="ENVMAP_BLENDING_MULTIPLY";break;case yS:e="ENVMAP_BLENDING_MIX";break;case xS:e="ENVMAP_BLENDING_ADD";break}return e}function BR(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function kR(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=UR(n),c=NR(n),u=OR(n),f=FR(n),d=BR(n),h=n.isWebGL2?"":AR(n),g=RR(s),v=r.createProgram();let m,p,M=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ms).join(`
`),m.length>0&&(m+=`
`),p=[h,"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ms).join(`
`),p.length>0&&(p+=`
`)):(m=[bh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+u:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors&&n.isWebGL2?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0&&n.isWebGL2?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ms).join(`
`),p=[h,bh(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+u:"",n.envMap?"#define "+f:"",d?"#define CUBEUV_TEXEL_WIDTH "+d.texelWidth:"",d?"#define CUBEUV_TEXEL_HEIGHT "+d.texelHeight:"",d?"#define CUBEUV_MAX_MIP "+d.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.useLegacyLights?"#define LEGACY_LIGHTS":"",n.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",n.logarithmicDepthBuffer&&n.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Kn?"#define TONE_MAPPING":"",n.toneMapping!==Kn?Ge.tonemapping_pars_fragment:"",n.toneMapping!==Kn?wR("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",Ge.encodings_pars_fragment,TR("linearToOutputTexel",n.outputColorSpace),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ms).join(`
`)),o=Nc(o),o=Mh(o,n),o=Eh(o,n),a=Nc(a),a=Mh(a,n),a=Eh(a,n),o=Sh(o),a=Sh(a),n.isWebGL2&&n.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",n.glslVersion===Gd?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===Gd?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const _=M+m+o,S=M+p+a,x=yh(r,r.VERTEX_SHADER,_),T=yh(r,r.FRAGMENT_SHADER,S);if(r.attachShader(v,x),r.attachShader(v,T),n.index0AttributeName!==void 0?r.bindAttribLocation(v,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(v,0,"position"),r.linkProgram(v),t.debug.checkShaderErrors){const y=r.getProgramInfoLog(v).trim(),b=r.getShaderInfoLog(x).trim(),F=r.getShaderInfoLog(T).trim();let B=!0,I=!0;if(r.getProgramParameter(v,r.LINK_STATUS)===!1)if(B=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,v,x,T);else{const G=xh(r,x,"vertex"),X=xh(r,T,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(v,r.VALIDATE_STATUS)+`

Program Info Log: `+y+`
`+G+`
`+X)}else y!==""?console.warn("THREE.WebGLProgram: Program Info Log:",y):(b===""||F==="")&&(I=!1);I&&(this.diagnostics={runnable:B,programLog:y,vertexShader:{log:b,prefix:m},fragmentShader:{log:F,prefix:p}})}r.deleteShader(x),r.deleteShader(T);let L;this.getUniforms=function(){return L===void 0&&(L=new Ko(r,v)),L};let C;return this.getAttributes=function(){return C===void 0&&(C=CR(r,v)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(v),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=ER++,this.cacheKey=e,this.usedTimes=1,this.program=v,this.vertexShader=x,this.fragmentShader=T,this}let HR=0;class zR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new VR(e),n.set(e,i)),i}}class VR{constructor(e){this.id=HR++,this.code=e,this.usedTimes=0}}function GR(t,e,n,i,r,s,o){const a=new Bg,l=new zR,c=[],u=r.isWebGL2,f=r.logarithmicDepthBuffer,d=r.vertexTextures;let h=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function v(y){return y===0?"uv":`uv${y}`}function m(y,b,F,B,I){const G=B.fog,X=I.geometry,V=y.isMeshStandardMaterial?B.environment:null,W=(y.isMeshStandardMaterial?n:e).get(y.envMap||V),H=W&&W.mapping===ka?W.image.height:null,ce=g[y.type];y.precision!==null&&(h=r.getMaxPrecision(y.precision),h!==y.precision&&console.warn("THREE.WebGLProgram.getParameters:",y.precision,"not supported, using",h,"instead."));const he=X.morphAttributes.position||X.morphAttributes.normal||X.morphAttributes.color,Ee=he!==void 0?he.length:0;let q=0;X.morphAttributes.position!==void 0&&(q=1),X.morphAttributes.normal!==void 0&&(q=2),X.morphAttributes.color!==void 0&&(q=3);let pe,me,Se,_e;if(ce){const dt=Tn[ce];pe=dt.vertexShader,me=dt.fragmentShader}else pe=y.vertexShader,me=y.fragmentShader,l.update(y),Se=l.getVertexShaderID(y),_e=l.getFragmentShaderID(y);const z=t.getRenderTarget(),de=I.isInstancedMesh===!0,se=!!y.map,ye=!!y.matcap,we=!!W,k=!!y.aoMap,A=!!y.lightMap,P=!!y.bumpMap,N=!!y.normalMap,$=!!y.displacementMap,Z=!!y.emissiveMap,ie=!!y.metalnessMap,le=!!y.roughnessMap,ae=y.anisotropy>0,ge=y.clearcoat>0,ue=y.iridescence>0,w=y.sheen>0,E=y.transmission>0,O=ae&&!!y.anisotropyMap,ee=ge&&!!y.clearcoatMap,ne=ge&&!!y.clearcoatNormalMap,D=ge&&!!y.clearcoatRoughnessMap,te=ue&&!!y.iridescenceMap,fe=ue&&!!y.iridescenceThicknessMap,J=w&&!!y.sheenColorMap,Ae=w&&!!y.sheenRoughnessMap,Pe=!!y.specularMap,Le=!!y.specularColorMap,Re=!!y.specularIntensityMap,ve=E&&!!y.transmissionMap,De=E&&!!y.thicknessMap,Je=!!y.gradientMap,U=!!y.alphaMap,be=y.alphaTest>0,Q=!!y.extensions,xe=!!X.attributes.uv1,Te=!!X.attributes.uv2,Ke=!!X.attributes.uv3;return{isWebGL2:u,shaderID:ce,shaderType:y.type,shaderName:y.name,vertexShader:pe,fragmentShader:me,defines:y.defines,customVertexShaderID:Se,customFragmentShaderID:_e,isRawShaderMaterial:y.isRawShaderMaterial===!0,glslVersion:y.glslVersion,precision:h,instancing:de,instancingColor:de&&I.instanceColor!==null,supportsVertexTextures:d,outputColorSpace:z===null?t.outputColorSpace:z.isXRRenderTarget===!0?z.texture.colorSpace:Cn,map:se,matcap:ye,envMap:we,envMapMode:we&&W.mapping,envMapCubeUVHeight:H,aoMap:k,lightMap:A,bumpMap:P,normalMap:N,displacementMap:d&&$,emissiveMap:Z,normalMapObjectSpace:N&&y.normalMapType===BS,normalMapTangentSpace:N&&y.normalMapType===Dg,metalnessMap:ie,roughnessMap:le,anisotropy:ae,anisotropyMap:O,clearcoat:ge,clearcoatMap:ee,clearcoatNormalMap:ne,clearcoatRoughnessMap:D,iridescence:ue,iridescenceMap:te,iridescenceThicknessMap:fe,sheen:w,sheenColorMap:J,sheenRoughnessMap:Ae,specularMap:Pe,specularColorMap:Le,specularIntensityMap:Re,transmission:E,transmissionMap:ve,thicknessMap:De,gradientMap:Je,opaque:y.transparent===!1&&y.blending===Br,alphaMap:U,alphaTest:be,combine:y.combine,mapUv:se&&v(y.map.channel),aoMapUv:k&&v(y.aoMap.channel),lightMapUv:A&&v(y.lightMap.channel),bumpMapUv:P&&v(y.bumpMap.channel),normalMapUv:N&&v(y.normalMap.channel),displacementMapUv:$&&v(y.displacementMap.channel),emissiveMapUv:Z&&v(y.emissiveMap.channel),metalnessMapUv:ie&&v(y.metalnessMap.channel),roughnessMapUv:le&&v(y.roughnessMap.channel),anisotropyMapUv:O&&v(y.anisotropyMap.channel),clearcoatMapUv:ee&&v(y.clearcoatMap.channel),clearcoatNormalMapUv:ne&&v(y.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:D&&v(y.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&v(y.iridescenceMap.channel),iridescenceThicknessMapUv:fe&&v(y.iridescenceThicknessMap.channel),sheenColorMapUv:J&&v(y.sheenColorMap.channel),sheenRoughnessMapUv:Ae&&v(y.sheenRoughnessMap.channel),specularMapUv:Pe&&v(y.specularMap.channel),specularColorMapUv:Le&&v(y.specularColorMap.channel),specularIntensityMapUv:Re&&v(y.specularIntensityMap.channel),transmissionMapUv:ve&&v(y.transmissionMap.channel),thicknessMapUv:De&&v(y.thicknessMap.channel),alphaMapUv:U&&v(y.alphaMap.channel),vertexTangents:!!X.attributes.tangent&&(N||ae),vertexColors:y.vertexColors,vertexAlphas:y.vertexColors===!0&&!!X.attributes.color&&X.attributes.color.itemSize===4,vertexUv1s:xe,vertexUv2s:Te,vertexUv3s:Ke,pointsUvs:I.isPoints===!0&&!!X.attributes.uv&&(se||U),fog:!!G,useFog:y.fog===!0,fogExp2:G&&G.isFogExp2,flatShading:y.flatShading===!0,sizeAttenuation:y.sizeAttenuation===!0,logarithmicDepthBuffer:f,skinning:I.isSkinnedMesh===!0,morphTargets:X.morphAttributes.position!==void 0,morphNormals:X.morphAttributes.normal!==void 0,morphColors:X.morphAttributes.color!==void 0,morphTargetsCount:Ee,morphTextureStride:q,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:y.dithering,shadowMapEnabled:t.shadowMap.enabled&&F.length>0,shadowMapType:t.shadowMap.type,toneMapping:y.toneMapped?t.toneMapping:Kn,useLegacyLights:t.useLegacyLights,premultipliedAlpha:y.premultipliedAlpha,doubleSided:y.side===Xn,flipSided:y.side===Xt,useDepthPacking:y.depthPacking>=0,depthPacking:y.depthPacking||0,index0AttributeName:y.index0AttributeName,extensionDerivatives:Q&&y.extensions.derivatives===!0,extensionFragDepth:Q&&y.extensions.fragDepth===!0,extensionDrawBuffers:Q&&y.extensions.drawBuffers===!0,extensionShaderTextureLOD:Q&&y.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:u||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:u||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:u||i.has("EXT_shader_texture_lod"),customProgramCacheKey:y.customProgramCacheKey()}}function p(y){const b=[];if(y.shaderID?b.push(y.shaderID):(b.push(y.customVertexShaderID),b.push(y.customFragmentShaderID)),y.defines!==void 0)for(const F in y.defines)b.push(F),b.push(y.defines[F]);return y.isRawShaderMaterial===!1&&(M(b,y),_(b,y),b.push(t.outputColorSpace)),b.push(y.customProgramCacheKey),b.join()}function M(y,b){y.push(b.precision),y.push(b.outputColorSpace),y.push(b.envMapMode),y.push(b.envMapCubeUVHeight),y.push(b.mapUv),y.push(b.alphaMapUv),y.push(b.lightMapUv),y.push(b.aoMapUv),y.push(b.bumpMapUv),y.push(b.normalMapUv),y.push(b.displacementMapUv),y.push(b.emissiveMapUv),y.push(b.metalnessMapUv),y.push(b.roughnessMapUv),y.push(b.anisotropyMapUv),y.push(b.clearcoatMapUv),y.push(b.clearcoatNormalMapUv),y.push(b.clearcoatRoughnessMapUv),y.push(b.iridescenceMapUv),y.push(b.iridescenceThicknessMapUv),y.push(b.sheenColorMapUv),y.push(b.sheenRoughnessMapUv),y.push(b.specularMapUv),y.push(b.specularColorMapUv),y.push(b.specularIntensityMapUv),y.push(b.transmissionMapUv),y.push(b.thicknessMapUv),y.push(b.combine),y.push(b.fogExp2),y.push(b.sizeAttenuation),y.push(b.morphTargetsCount),y.push(b.morphAttributeCount),y.push(b.numDirLights),y.push(b.numPointLights),y.push(b.numSpotLights),y.push(b.numSpotLightMaps),y.push(b.numHemiLights),y.push(b.numRectAreaLights),y.push(b.numDirLightShadows),y.push(b.numPointLightShadows),y.push(b.numSpotLightShadows),y.push(b.numSpotLightShadowsWithMaps),y.push(b.shadowMapType),y.push(b.toneMapping),y.push(b.numClippingPlanes),y.push(b.numClipIntersection),y.push(b.depthPacking)}function _(y,b){a.disableAll(),b.isWebGL2&&a.enable(0),b.supportsVertexTextures&&a.enable(1),b.instancing&&a.enable(2),b.instancingColor&&a.enable(3),b.matcap&&a.enable(4),b.envMap&&a.enable(5),b.normalMapObjectSpace&&a.enable(6),b.normalMapTangentSpace&&a.enable(7),b.clearcoat&&a.enable(8),b.iridescence&&a.enable(9),b.alphaTest&&a.enable(10),b.vertexColors&&a.enable(11),b.vertexAlphas&&a.enable(12),b.vertexUv1s&&a.enable(13),b.vertexUv2s&&a.enable(14),b.vertexUv3s&&a.enable(15),b.vertexTangents&&a.enable(16),b.anisotropy&&a.enable(17),y.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.skinning&&a.enable(4),b.morphTargets&&a.enable(5),b.morphNormals&&a.enable(6),b.morphColors&&a.enable(7),b.premultipliedAlpha&&a.enable(8),b.shadowMapEnabled&&a.enable(9),b.useLegacyLights&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),y.push(a.mask)}function S(y){const b=g[y.type];let F;if(b){const B=Tn[b];F=Db.clone(B.uniforms)}else F=y.uniforms;return F}function x(y,b){let F;for(let B=0,I=c.length;B<I;B++){const G=c[B];if(G.cacheKey===b){F=G,++F.usedTimes;break}}return F===void 0&&(F=new kR(t,b,y,s),c.push(F)),F}function T(y){if(--y.usedTimes===0){const b=c.indexOf(y);c[b]=c[c.length-1],c.pop(),y.destroy()}}function L(y){l.remove(y)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:p,getUniforms:S,acquireProgram:x,releaseProgram:T,releaseShaderCache:L,programs:c,dispose:C}}function WR(){let t=new WeakMap;function e(s){let o=t.get(s);return o===void 0&&(o={},t.set(s,o)),o}function n(s){t.delete(s)}function i(s,o,a){t.get(s)[o]=a}function r(){t=new WeakMap}return{get:e,remove:n,update:i,dispose:r}}function XR(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function Th(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function wh(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(f,d,h,g,v,m){let p=t[e];return p===void 0?(p={id:f.id,object:f,geometry:d,material:h,groupOrder:g,renderOrder:f.renderOrder,z:v,group:m},t[e]=p):(p.id=f.id,p.object=f,p.geometry=d,p.material=h,p.groupOrder=g,p.renderOrder=f.renderOrder,p.z=v,p.group=m),e++,p}function a(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.push(p):h.transparent===!0?r.push(p):n.push(p)}function l(f,d,h,g,v,m){const p=o(f,d,h,g,v,m);h.transmission>0?i.unshift(p):h.transparent===!0?r.unshift(p):n.unshift(p)}function c(f,d){n.length>1&&n.sort(f||XR),i.length>1&&i.sort(d||Th),r.length>1&&r.sort(d||Th)}function u(){for(let f=e,d=t.length;f<d;f++){const h=t[f];if(h.id===null)break;h.id=null,h.object=null,h.geometry=null,h.material=null,h.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:u,sort:c}}function jR(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new wh,t.set(i,[o])):r>=s.length?(o=new wh,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function $R(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new K,color:new tt};break;case"SpotLight":n={position:new K,direction:new K,color:new tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new K,color:new tt,distance:0,decay:0};break;case"HemisphereLight":n={direction:new K,skyColor:new tt,groundColor:new tt};break;case"RectAreaLight":n={color:new tt,position:new K,halfWidth:new K,halfHeight:new K};break}return t[e.id]=n,n}}}function qR(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"SpotLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve};break;case"PointLight":n={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ve,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let YR=0;function KR(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function ZR(t,e){const n=new $R,i=qR(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let u=0;u<9;u++)r.probe.push(new K);const s=new K,o=new xt,a=new xt;function l(u,f){let d=0,h=0,g=0;for(let F=0;F<9;F++)r.probe[F].set(0,0,0);let v=0,m=0,p=0,M=0,_=0,S=0,x=0,T=0,L=0,C=0;u.sort(KR);const y=f===!0?Math.PI:1;for(let F=0,B=u.length;F<B;F++){const I=u[F],G=I.color,X=I.intensity,V=I.distance,W=I.shadow&&I.shadow.map?I.shadow.map.texture:null;if(I.isAmbientLight)d+=G.r*X*y,h+=G.g*X*y,g+=G.b*X*y;else if(I.isLightProbe)for(let H=0;H<9;H++)r.probe[H].addScaledVector(I.sh.coefficients[H],X);else if(I.isDirectionalLight){const H=n.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*y),I.castShadow){const ce=I.shadow,he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,r.directionalShadow[v]=he,r.directionalShadowMap[v]=W,r.directionalShadowMatrix[v]=I.shadow.matrix,S++}r.directional[v]=H,v++}else if(I.isSpotLight){const H=n.get(I);H.position.setFromMatrixPosition(I.matrixWorld),H.color.copy(G).multiplyScalar(X*y),H.distance=V,H.coneCos=Math.cos(I.angle),H.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),H.decay=I.decay,r.spot[p]=H;const ce=I.shadow;if(I.map&&(r.spotLightMap[L]=I.map,L++,ce.updateMatrices(I),I.castShadow&&C++),r.spotLightMatrix[p]=ce.matrix,I.castShadow){const he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,r.spotShadow[p]=he,r.spotShadowMap[p]=W,T++}p++}else if(I.isRectAreaLight){const H=n.get(I);H.color.copy(G).multiplyScalar(X),H.halfWidth.set(I.width*.5,0,0),H.halfHeight.set(0,I.height*.5,0),r.rectArea[M]=H,M++}else if(I.isPointLight){const H=n.get(I);if(H.color.copy(I.color).multiplyScalar(I.intensity*y),H.distance=I.distance,H.decay=I.decay,I.castShadow){const ce=I.shadow,he=i.get(I);he.shadowBias=ce.bias,he.shadowNormalBias=ce.normalBias,he.shadowRadius=ce.radius,he.shadowMapSize=ce.mapSize,he.shadowCameraNear=ce.camera.near,he.shadowCameraFar=ce.camera.far,r.pointShadow[m]=he,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=I.shadow.matrix,x++}r.point[m]=H,m++}else if(I.isHemisphereLight){const H=n.get(I);H.skyColor.copy(I.color).multiplyScalar(X*y),H.groundColor.copy(I.groundColor).multiplyScalar(X*y),r.hemi[_]=H,_++}}M>0&&(e.isWebGL2||t.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_FLOAT_1,r.rectAreaLTC2=Me.LTC_FLOAT_2):t.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=Me.LTC_HALF_1,r.rectAreaLTC2=Me.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=d,r.ambient[1]=h,r.ambient[2]=g;const b=r.hash;(b.directionalLength!==v||b.pointLength!==m||b.spotLength!==p||b.rectAreaLength!==M||b.hemiLength!==_||b.numDirectionalShadows!==S||b.numPointShadows!==x||b.numSpotShadows!==T||b.numSpotMaps!==L)&&(r.directional.length=v,r.spot.length=p,r.rectArea.length=M,r.point.length=m,r.hemi.length=_,r.directionalShadow.length=S,r.directionalShadowMap.length=S,r.pointShadow.length=x,r.pointShadowMap.length=x,r.spotShadow.length=T,r.spotShadowMap.length=T,r.directionalShadowMatrix.length=S,r.pointShadowMatrix.length=x,r.spotLightMatrix.length=T+L-C,r.spotLightMap.length=L,r.numSpotLightShadowsWithMaps=C,b.directionalLength=v,b.pointLength=m,b.spotLength=p,b.rectAreaLength=M,b.hemiLength=_,b.numDirectionalShadows=S,b.numPointShadows=x,b.numSpotShadows=T,b.numSpotMaps=L,r.version=YR++)}function c(u,f){let d=0,h=0,g=0,v=0,m=0;const p=f.matrixWorldInverse;for(let M=0,_=u.length;M<_;M++){const S=u[M];if(S.isDirectionalLight){const x=r.directional[d];x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),d++}else if(S.isSpotLight){const x=r.spot[g];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),x.direction.setFromMatrixPosition(S.matrixWorld),s.setFromMatrixPosition(S.target.matrixWorld),x.direction.sub(s),x.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const x=r.rectArea[v];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),a.identity(),o.copy(S.matrixWorld),o.premultiply(p),a.extractRotation(o),x.halfWidth.set(S.width*.5,0,0),x.halfHeight.set(0,S.height*.5,0),x.halfWidth.applyMatrix4(a),x.halfHeight.applyMatrix4(a),v++}else if(S.isPointLight){const x=r.point[h];x.position.setFromMatrixPosition(S.matrixWorld),x.position.applyMatrix4(p),h++}else if(S.isHemisphereLight){const x=r.hemi[m];x.direction.setFromMatrixPosition(S.matrixWorld),x.direction.transformDirection(p),m++}}}return{setup:l,setupView:c,state:r}}function Ah(t,e){const n=new ZR(t,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(f){i.push(f)}function a(f){r.push(f)}function l(f){n.setup(i,f)}function c(f){n.setupView(i,f)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:n},setupLights:l,setupLightsView:c,pushLight:o,pushShadow:a}}function JR(t,e){let n=new WeakMap;function i(s,o=0){const a=n.get(s);let l;return a===void 0?(l=new Ah(t,e),n.set(s,[l])):o>=a.length?(l=new Ah(t,e),a.push(l)):l=a[o],l}function r(){n=new WeakMap}return{get:i,dispose:r}}class QR extends to{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=OS,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class e1 extends to{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const t1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,n1=`uniform sampler2D shadow_pass;
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
}`;function i1(t,e,n){let i=new Cu;const r=new Ve,s=new Ve,o=new Tt,a=new QR({depthPacking:FS}),l=new e1,c={},u=n.maxTextureSize,f={[Ti]:Xt,[Xt]:Ti,[Xn]:Xn},d=new tr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ve},radius:{value:4}},vertexShader:t1,fragmentShader:n1}),h=d.clone();h.defines.HORIZONTAL_PASS=1;const g=new sr;g.setAttribute("position",new An(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const v=new vi(g,d),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xg;let p=this.type;this.render=function(x,T,L){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||x.length===0)return;const C=t.getRenderTarget(),y=t.getActiveCubeFace(),b=t.getActiveMipmapLevel(),F=t.state;F.setBlending(Ei),F.buffers.color.setClear(1,1,1,1),F.buffers.depth.setTest(!0),F.setScissorTest(!1);const B=p!==Vn&&this.type===Vn,I=p===Vn&&this.type!==Vn;for(let G=0,X=x.length;G<X;G++){const V=x[G],W=V.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",V,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const H=W.getFrameExtents();if(r.multiply(H),s.copy(W.mapSize),(r.x>u||r.y>u)&&(r.x>u&&(s.x=Math.floor(u/H.x),r.x=s.x*H.x,W.mapSize.x=s.x),r.y>u&&(s.y=Math.floor(u/H.y),r.y=s.y*H.y,W.mapSize.y=s.y)),W.map===null||B===!0||I===!0){const he=this.type!==Vn?{minFilter:At,magFilter:At}:{};W.map!==null&&W.map.dispose(),W.map=new Qi(r.x,r.y,he),W.map.texture.name=V.name+".shadowMap",W.camera.updateProjectionMatrix()}t.setRenderTarget(W.map),t.clear();const ce=W.getViewportCount();for(let he=0;he<ce;he++){const Ee=W.getViewport(he);o.set(s.x*Ee.x,s.y*Ee.y,s.x*Ee.z,s.y*Ee.w),F.viewport(o),W.updateMatrices(V,he),i=W.getFrustum(),S(T,L,W.camera,V,this.type)}W.isPointLightShadow!==!0&&this.type===Vn&&M(W,L),W.needsUpdate=!1}p=this.type,m.needsUpdate=!1,t.setRenderTarget(C,y,b)};function M(x,T){const L=e.update(v);d.defines.VSM_SAMPLES!==x.blurSamples&&(d.defines.VSM_SAMPLES=x.blurSamples,h.defines.VSM_SAMPLES=x.blurSamples,d.needsUpdate=!0,h.needsUpdate=!0),x.mapPass===null&&(x.mapPass=new Qi(r.x,r.y)),d.uniforms.shadow_pass.value=x.map.texture,d.uniforms.resolution.value=x.mapSize,d.uniforms.radius.value=x.radius,t.setRenderTarget(x.mapPass),t.clear(),t.renderBufferDirect(T,null,L,d,v,null),h.uniforms.shadow_pass.value=x.mapPass.texture,h.uniforms.resolution.value=x.mapSize,h.uniforms.radius.value=x.radius,t.setRenderTarget(x.map),t.clear(),t.renderBufferDirect(T,null,L,h,v,null)}function _(x,T,L,C){let y=null;const b=L.isPointLight===!0?x.customDistanceMaterial:x.customDepthMaterial;if(b!==void 0)y=b;else if(y=L.isPointLight===!0?l:a,t.localClippingEnabled&&T.clipShadows===!0&&Array.isArray(T.clippingPlanes)&&T.clippingPlanes.length!==0||T.displacementMap&&T.displacementScale!==0||T.alphaMap&&T.alphaTest>0||T.map&&T.alphaTest>0){const F=y.uuid,B=T.uuid;let I=c[F];I===void 0&&(I={},c[F]=I);let G=I[B];G===void 0&&(G=y.clone(),I[B]=G),y=G}if(y.visible=T.visible,y.wireframe=T.wireframe,C===Vn?y.side=T.shadowSide!==null?T.shadowSide:T.side:y.side=T.shadowSide!==null?T.shadowSide:f[T.side],y.alphaMap=T.alphaMap,y.alphaTest=T.alphaTest,y.map=T.map,y.clipShadows=T.clipShadows,y.clippingPlanes=T.clippingPlanes,y.clipIntersection=T.clipIntersection,y.displacementMap=T.displacementMap,y.displacementScale=T.displacementScale,y.displacementBias=T.displacementBias,y.wireframeLinewidth=T.wireframeLinewidth,y.linewidth=T.linewidth,L.isPointLight===!0&&y.isMeshDistanceMaterial===!0){const F=t.properties.get(y);F.light=L}return y}function S(x,T,L,C,y){if(x.visible===!1)return;if(x.layers.test(T.layers)&&(x.isMesh||x.isLine||x.isPoints)&&(x.castShadow||x.receiveShadow&&y===Vn)&&(!x.frustumCulled||i.intersectsObject(x))){x.modelViewMatrix.multiplyMatrices(L.matrixWorldInverse,x.matrixWorld);const B=e.update(x),I=x.material;if(Array.isArray(I)){const G=B.groups;for(let X=0,V=G.length;X<V;X++){const W=G[X],H=I[W.materialIndex];if(H&&H.visible){const ce=_(x,H,C,y);t.renderBufferDirect(L,null,B,ce,x,W)}}}else if(I.visible){const G=_(x,I,C,y);t.renderBufferDirect(L,null,B,G,x,null)}}const F=x.children;for(let B=0,I=F.length;B<I;B++)S(F[B],T,L,C,y)}}function r1(t,e,n){const i=n.isWebGL2;function r(){let U=!1;const be=new Tt;let Q=null;const xe=new Tt(0,0,0,0);return{setMask:function(Te){Q!==Te&&!U&&(t.colorMask(Te,Te,Te,Te),Q=Te)},setLocked:function(Te){U=Te},setClear:function(Te,Ke,at,dt,Ai){Ai===!0&&(Te*=dt,Ke*=dt,at*=dt),be.set(Te,Ke,at,dt),xe.equals(be)===!1&&(t.clearColor(Te,Ke,at,dt),xe.copy(be))},reset:function(){U=!1,Q=null,xe.set(-1,0,0,0)}}}function s(){let U=!1,be=null,Q=null,xe=null;return{setTest:function(Te){Te?z(t.DEPTH_TEST):de(t.DEPTH_TEST)},setMask:function(Te){be!==Te&&!U&&(t.depthMask(Te),be=Te)},setFunc:function(Te){if(Q!==Te){switch(Te){case dS:t.depthFunc(t.NEVER);break;case hS:t.depthFunc(t.ALWAYS);break;case pS:t.depthFunc(t.LESS);break;case Rc:t.depthFunc(t.LEQUAL);break;case mS:t.depthFunc(t.EQUAL);break;case gS:t.depthFunc(t.GEQUAL);break;case _S:t.depthFunc(t.GREATER);break;case vS:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}Q=Te}},setLocked:function(Te){U=Te},setClear:function(Te){xe!==Te&&(t.clearDepth(Te),xe=Te)},reset:function(){U=!1,be=null,Q=null,xe=null}}}function o(){let U=!1,be=null,Q=null,xe=null,Te=null,Ke=null,at=null,dt=null,Ai=null;return{setTest:function(lt){U||(lt?z(t.STENCIL_TEST):de(t.STENCIL_TEST))},setMask:function(lt){be!==lt&&!U&&(t.stencilMask(lt),be=lt)},setFunc:function(lt,Sn,Ot){(Q!==lt||xe!==Sn||Te!==Ot)&&(t.stencilFunc(lt,Sn,Ot),Q=lt,xe=Sn,Te=Ot)},setOp:function(lt,Sn,Ot){(Ke!==lt||at!==Sn||dt!==Ot)&&(t.stencilOp(lt,Sn,Ot),Ke=lt,at=Sn,dt=Ot)},setLocked:function(lt){U=lt},setClear:function(lt){Ai!==lt&&(t.clearStencil(lt),Ai=lt)},reset:function(){U=!1,be=null,Q=null,xe=null,Te=null,Ke=null,at=null,dt=null,Ai=null}}}const a=new r,l=new s,c=new o,u=new WeakMap,f=new WeakMap;let d={},h={},g=new WeakMap,v=[],m=null,p=!1,M=null,_=null,S=null,x=null,T=null,L=null,C=null,y=!1,b=null,F=null,B=null,I=null,G=null;const X=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let V=!1,W=0;const H=t.getParameter(t.VERSION);H.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(H)[1]),V=W>=1):H.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(H)[1]),V=W>=2);let ce=null,he={};const Ee=t.getParameter(t.SCISSOR_BOX),q=t.getParameter(t.VIEWPORT),pe=new Tt().fromArray(Ee),me=new Tt().fromArray(q);function Se(U,be,Q,xe){const Te=new Uint8Array(4),Ke=t.createTexture();t.bindTexture(U,Ke),t.texParameteri(U,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(U,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let at=0;at<Q;at++)i&&(U===t.TEXTURE_3D||U===t.TEXTURE_2D_ARRAY)?t.texImage3D(be,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,Te):t.texImage2D(be+at,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,Te);return Ke}const _e={};_e[t.TEXTURE_2D]=Se(t.TEXTURE_2D,t.TEXTURE_2D,1),_e[t.TEXTURE_CUBE_MAP]=Se(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(_e[t.TEXTURE_2D_ARRAY]=Se(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),_e[t.TEXTURE_3D]=Se(t.TEXTURE_3D,t.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),c.setClear(0),z(t.DEPTH_TEST),l.setFunc(Rc),$(!1),Z(dd),z(t.CULL_FACE),P(Ei);function z(U){d[U]!==!0&&(t.enable(U),d[U]=!0)}function de(U){d[U]!==!1&&(t.disable(U),d[U]=!1)}function se(U,be){return h[U]!==be?(t.bindFramebuffer(U,be),h[U]=be,i&&(U===t.DRAW_FRAMEBUFFER&&(h[t.FRAMEBUFFER]=be),U===t.FRAMEBUFFER&&(h[t.DRAW_FRAMEBUFFER]=be)),!0):!1}function ye(U,be){let Q=v,xe=!1;if(U)if(Q=g.get(be),Q===void 0&&(Q=[],g.set(be,Q)),U.isWebGLMultipleRenderTargets){const Te=U.texture;if(Q.length!==Te.length||Q[0]!==t.COLOR_ATTACHMENT0){for(let Ke=0,at=Te.length;Ke<at;Ke++)Q[Ke]=t.COLOR_ATTACHMENT0+Ke;Q.length=Te.length,xe=!0}}else Q[0]!==t.COLOR_ATTACHMENT0&&(Q[0]=t.COLOR_ATTACHMENT0,xe=!0);else Q[0]!==t.BACK&&(Q[0]=t.BACK,xe=!0);xe&&(n.isWebGL2?t.drawBuffers(Q):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Q))}function we(U){return m!==U?(t.useProgram(U),m=U,!0):!1}const k={[Cr]:t.FUNC_ADD,[tS]:t.FUNC_SUBTRACT,[nS]:t.FUNC_REVERSE_SUBTRACT};if(i)k[gd]=t.MIN,k[_d]=t.MAX;else{const U=e.get("EXT_blend_minmax");U!==null&&(k[gd]=U.MIN_EXT,k[_d]=U.MAX_EXT)}const A={[iS]:t.ZERO,[rS]:t.ONE,[sS]:t.SRC_COLOR,[Mg]:t.SRC_ALPHA,[fS]:t.SRC_ALPHA_SATURATE,[cS]:t.DST_COLOR,[aS]:t.DST_ALPHA,[oS]:t.ONE_MINUS_SRC_COLOR,[Eg]:t.ONE_MINUS_SRC_ALPHA,[uS]:t.ONE_MINUS_DST_COLOR,[lS]:t.ONE_MINUS_DST_ALPHA};function P(U,be,Q,xe,Te,Ke,at,dt){if(U===Ei){p===!0&&(de(t.BLEND),p=!1);return}if(p===!1&&(z(t.BLEND),p=!0),U!==eS){if(U!==M||dt!==y){if((_!==Cr||T!==Cr)&&(t.blendEquation(t.FUNC_ADD),_=Cr,T=Cr),dt)switch(U){case Br:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hd:t.blendFunc(t.ONE,t.ONE);break;case pd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case md:t.blendFuncSeparate(t.ZERO,t.SRC_COLOR,t.ZERO,t.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}else switch(U){case Br:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case hd:t.blendFunc(t.SRC_ALPHA,t.ONE);break;case pd:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case md:t.blendFunc(t.ZERO,t.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",U);break}S=null,x=null,L=null,C=null,M=U,y=dt}return}Te=Te||be,Ke=Ke||Q,at=at||xe,(be!==_||Te!==T)&&(t.blendEquationSeparate(k[be],k[Te]),_=be,T=Te),(Q!==S||xe!==x||Ke!==L||at!==C)&&(t.blendFuncSeparate(A[Q],A[xe],A[Ke],A[at]),S=Q,x=xe,L=Ke,C=at),M=U,y=!1}function N(U,be){U.side===Xn?de(t.CULL_FACE):z(t.CULL_FACE);let Q=U.side===Xt;be&&(Q=!Q),$(Q),U.blending===Br&&U.transparent===!1?P(Ei):P(U.blending,U.blendEquation,U.blendSrc,U.blendDst,U.blendEquationAlpha,U.blendSrcAlpha,U.blendDstAlpha,U.premultipliedAlpha),l.setFunc(U.depthFunc),l.setTest(U.depthTest),l.setMask(U.depthWrite),a.setMask(U.colorWrite);const xe=U.stencilWrite;c.setTest(xe),xe&&(c.setMask(U.stencilWriteMask),c.setFunc(U.stencilFunc,U.stencilRef,U.stencilFuncMask),c.setOp(U.stencilFail,U.stencilZFail,U.stencilZPass)),le(U.polygonOffset,U.polygonOffsetFactor,U.polygonOffsetUnits),U.alphaToCoverage===!0?z(t.SAMPLE_ALPHA_TO_COVERAGE):de(t.SAMPLE_ALPHA_TO_COVERAGE)}function $(U){b!==U&&(U?t.frontFace(t.CW):t.frontFace(t.CCW),b=U)}function Z(U){U!==ZE?(z(t.CULL_FACE),U!==F&&(U===dd?t.cullFace(t.BACK):U===JE?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):de(t.CULL_FACE),F=U}function ie(U){U!==B&&(V&&t.lineWidth(U),B=U)}function le(U,be,Q){U?(z(t.POLYGON_OFFSET_FILL),(I!==be||G!==Q)&&(t.polygonOffset(be,Q),I=be,G=Q)):de(t.POLYGON_OFFSET_FILL)}function ae(U){U?z(t.SCISSOR_TEST):de(t.SCISSOR_TEST)}function ge(U){U===void 0&&(U=t.TEXTURE0+X-1),ce!==U&&(t.activeTexture(U),ce=U)}function ue(U,be,Q){Q===void 0&&(ce===null?Q=t.TEXTURE0+X-1:Q=ce);let xe=he[Q];xe===void 0&&(xe={type:void 0,texture:void 0},he[Q]=xe),(xe.type!==U||xe.texture!==be)&&(ce!==Q&&(t.activeTexture(Q),ce=Q),t.bindTexture(U,be||_e[U]),xe.type=U,xe.texture=be)}function w(){const U=he[ce];U!==void 0&&U.type!==void 0&&(t.bindTexture(U.type,null),U.type=void 0,U.texture=void 0)}function E(){try{t.compressedTexImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function O(){try{t.compressedTexImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ee(){try{t.texSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function ne(){try{t.texSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function D(){try{t.compressedTexSubImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function te(){try{t.compressedTexSubImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function fe(){try{t.texStorage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function J(){try{t.texStorage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Ae(){try{t.texImage2D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Pe(){try{t.texImage3D.apply(t,arguments)}catch(U){console.error("THREE.WebGLState:",U)}}function Le(U){pe.equals(U)===!1&&(t.scissor(U.x,U.y,U.z,U.w),pe.copy(U))}function Re(U){me.equals(U)===!1&&(t.viewport(U.x,U.y,U.z,U.w),me.copy(U))}function ve(U,be){let Q=f.get(be);Q===void 0&&(Q=new WeakMap,f.set(be,Q));let xe=Q.get(U);xe===void 0&&(xe=t.getUniformBlockIndex(be,U.name),Q.set(U,xe))}function De(U,be){const xe=f.get(be).get(U);u.get(be)!==xe&&(t.uniformBlockBinding(be,xe,U.__bindingPointIndex),u.set(be,xe))}function Je(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),i===!0&&(t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null)),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),d={},ce=null,he={},h={},g=new WeakMap,v=[],m=null,p=!1,M=null,_=null,S=null,x=null,T=null,L=null,C=null,y=!1,b=null,F=null,B=null,I=null,G=null,pe.set(0,0,t.canvas.width,t.canvas.height),me.set(0,0,t.canvas.width,t.canvas.height),a.reset(),l.reset(),c.reset()}return{buffers:{color:a,depth:l,stencil:c},enable:z,disable:de,bindFramebuffer:se,drawBuffers:ye,useProgram:we,setBlending:P,setMaterial:N,setFlipSided:$,setCullFace:Z,setLineWidth:ie,setPolygonOffset:le,setScissorTest:ae,activeTexture:ge,bindTexture:ue,unbindTexture:w,compressedTexImage2D:E,compressedTexImage3D:O,texImage2D:Ae,texImage3D:Pe,updateUBOMapping:ve,uniformBlockBinding:De,texStorage2D:fe,texStorage3D:J,texSubImage2D:ee,texSubImage3D:ne,compressedTexSubImage2D:D,compressedTexSubImage3D:te,scissor:Le,viewport:Re,reset:Je}}function s1(t,e,n,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,c=r.maxCubemapSize,u=r.maxTextureSize,f=r.maxSamples,d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,h=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),g=new WeakMap;let v;const m=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function M(w,E){return p?new OffscreenCanvas(w,E):Bs("canvas")}function _(w,E,O,ee){let ne=1;if((w.width>ee||w.height>ee)&&(ne=ee/Math.max(w.width,w.height)),ne<1||E===!0)if(typeof HTMLImageElement<"u"&&w instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&w instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&w instanceof ImageBitmap){const D=E?ma:Math.floor,te=D(ne*w.width),fe=D(ne*w.height);v===void 0&&(v=M(te,fe));const J=O?M(te,fe):v;return J.width=te,J.height=fe,J.getContext("2d").drawImage(w,0,0,te,fe),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+w.width+"x"+w.height+") to ("+te+"x"+fe+")."),J}else return"data"in w&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+w.width+"x"+w.height+")."),w;return w}function S(w){return Uc(w.width)&&Uc(w.height)}function x(w){return a?!1:w.wrapS!==Jt||w.wrapT!==Jt||w.minFilter!==At&&w.minFilter!==Rt}function T(w,E){return w.generateMipmaps&&E&&w.minFilter!==At&&w.minFilter!==Rt}function L(w){t.generateMipmap(w)}function C(w,E,O,ee,ne=!1){if(a===!1)return E;if(w!==null){if(t[w]!==void 0)return t[w];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+w+"'")}let D=E;return E===t.RED&&(O===t.FLOAT&&(D=t.R32F),O===t.HALF_FLOAT&&(D=t.R16F),O===t.UNSIGNED_BYTE&&(D=t.R8)),E===t.RG&&(O===t.FLOAT&&(D=t.RG32F),O===t.HALF_FLOAT&&(D=t.RG16F),O===t.UNSIGNED_BYTE&&(D=t.RG8)),E===t.RGBA&&(O===t.FLOAT&&(D=t.RGBA32F),O===t.HALF_FLOAT&&(D=t.RGBA16F),O===t.UNSIGNED_BYTE&&(D=ee===ze&&ne===!1?t.SRGB8_ALPHA8:t.RGBA8),O===t.UNSIGNED_SHORT_4_4_4_4&&(D=t.RGBA4),O===t.UNSIGNED_SHORT_5_5_5_1&&(D=t.RGB5_A1)),(D===t.R16F||D===t.R32F||D===t.RG16F||D===t.RG32F||D===t.RGBA16F||D===t.RGBA32F)&&e.get("EXT_color_buffer_float"),D}function y(w,E,O){return T(w,O)===!0||w.isFramebufferTexture&&w.minFilter!==At&&w.minFilter!==Rt?Math.log2(Math.max(E.width,E.height))+1:w.mipmaps!==void 0&&w.mipmaps.length>0?w.mipmaps.length:w.isCompressedTexture&&Array.isArray(w.image)?E.mipmaps.length:1}function b(w){return w===At||w===vd||w===_l?t.NEAREST:t.LINEAR}function F(w){const E=w.target;E.removeEventListener("dispose",F),I(E),E.isVideoTexture&&g.delete(E)}function B(w){const E=w.target;E.removeEventListener("dispose",B),X(E)}function I(w){const E=i.get(w);if(E.__webglInit===void 0)return;const O=w.source,ee=m.get(O);if(ee){const ne=ee[E.__cacheKey];ne.usedTimes--,ne.usedTimes===0&&G(w),Object.keys(ee).length===0&&m.delete(O)}i.remove(w)}function G(w){const E=i.get(w);t.deleteTexture(E.__webglTexture);const O=w.source,ee=m.get(O);delete ee[E.__cacheKey],o.memory.textures--}function X(w){const E=w.texture,O=i.get(w),ee=i.get(E);if(ee.__webglTexture!==void 0&&(t.deleteTexture(ee.__webglTexture),o.memory.textures--),w.depthTexture&&w.depthTexture.dispose(),w.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++)t.deleteFramebuffer(O.__webglFramebuffer[ne]),O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer[ne]);else{if(t.deleteFramebuffer(O.__webglFramebuffer),O.__webglDepthbuffer&&t.deleteRenderbuffer(O.__webglDepthbuffer),O.__webglMultisampledFramebuffer&&t.deleteFramebuffer(O.__webglMultisampledFramebuffer),O.__webglColorRenderbuffer)for(let ne=0;ne<O.__webglColorRenderbuffer.length;ne++)O.__webglColorRenderbuffer[ne]&&t.deleteRenderbuffer(O.__webglColorRenderbuffer[ne]);O.__webglDepthRenderbuffer&&t.deleteRenderbuffer(O.__webglDepthRenderbuffer)}if(w.isWebGLMultipleRenderTargets)for(let ne=0,D=E.length;ne<D;ne++){const te=i.get(E[ne]);te.__webglTexture&&(t.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(E[ne])}i.remove(E),i.remove(w)}let V=0;function W(){V=0}function H(){const w=V;return w>=l&&console.warn("THREE.WebGLTextures: Trying to use "+w+" texture units while this GPU supports only "+l),V+=1,w}function ce(w){const E=[];return E.push(w.wrapS),E.push(w.wrapT),E.push(w.wrapR||0),E.push(w.magFilter),E.push(w.minFilter),E.push(w.anisotropy),E.push(w.internalFormat),E.push(w.format),E.push(w.type),E.push(w.generateMipmaps),E.push(w.premultiplyAlpha),E.push(w.flipY),E.push(w.unpackAlignment),E.push(w.colorSpace),E.join()}function he(w,E){const O=i.get(w);if(w.isVideoTexture&&ge(w),w.isRenderTargetTexture===!1&&w.version>0&&O.__version!==w.version){const ee=w.image;if(ee===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ee.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{se(O,w,E);return}}n.bindTexture(t.TEXTURE_2D,O.__webglTexture,t.TEXTURE0+E)}function Ee(w,E){const O=i.get(w);if(w.version>0&&O.__version!==w.version){se(O,w,E);return}n.bindTexture(t.TEXTURE_2D_ARRAY,O.__webglTexture,t.TEXTURE0+E)}function q(w,E){const O=i.get(w);if(w.version>0&&O.__version!==w.version){se(O,w,E);return}n.bindTexture(t.TEXTURE_3D,O.__webglTexture,t.TEXTURE0+E)}function pe(w,E){const O=i.get(w);if(w.version>0&&O.__version!==w.version){ye(O,w,E);return}n.bindTexture(t.TEXTURE_CUBE_MAP,O.__webglTexture,t.TEXTURE0+E)}const me={[Lc]:t.REPEAT,[Jt]:t.CLAMP_TO_EDGE,[Dc]:t.MIRRORED_REPEAT},Se={[At]:t.NEAREST,[vd]:t.NEAREST_MIPMAP_NEAREST,[_l]:t.NEAREST_MIPMAP_LINEAR,[Rt]:t.LINEAR,[wS]:t.LINEAR_MIPMAP_NEAREST,[Yr]:t.LINEAR_MIPMAP_LINEAR},_e={[HS]:t.NEVER,[$S]:t.ALWAYS,[zS]:t.LESS,[GS]:t.LEQUAL,[VS]:t.EQUAL,[jS]:t.GEQUAL,[WS]:t.GREATER,[XS]:t.NOTEQUAL};function z(w,E,O){if(O?(t.texParameteri(w,t.TEXTURE_WRAP_S,me[E.wrapS]),t.texParameteri(w,t.TEXTURE_WRAP_T,me[E.wrapT]),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,me[E.wrapR]),t.texParameteri(w,t.TEXTURE_MAG_FILTER,Se[E.magFilter]),t.texParameteri(w,t.TEXTURE_MIN_FILTER,Se[E.minFilter])):(t.texParameteri(w,t.TEXTURE_WRAP_S,t.CLAMP_TO_EDGE),t.texParameteri(w,t.TEXTURE_WRAP_T,t.CLAMP_TO_EDGE),(w===t.TEXTURE_3D||w===t.TEXTURE_2D_ARRAY)&&t.texParameteri(w,t.TEXTURE_WRAP_R,t.CLAMP_TO_EDGE),(E.wrapS!==Jt||E.wrapT!==Jt)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),t.texParameteri(w,t.TEXTURE_MAG_FILTER,b(E.magFilter)),t.texParameteri(w,t.TEXTURE_MIN_FILTER,b(E.minFilter)),E.minFilter!==At&&E.minFilter!==Rt&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),E.compareFunction&&(t.texParameteri(w,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(w,t.TEXTURE_COMPARE_FUNC,_e[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ee=e.get("EXT_texture_filter_anisotropic");if(E.magFilter===At||E.minFilter!==_l&&E.minFilter!==Yr||E.type===_i&&e.has("OES_texture_float_linear")===!1||a===!1&&E.type===Os&&e.has("OES_texture_half_float_linear")===!1)return;(E.anisotropy>1||i.get(E).__currentAnisotropy)&&(t.texParameterf(w,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,r.getMaxAnisotropy())),i.get(E).__currentAnisotropy=E.anisotropy)}}function de(w,E){let O=!1;w.__webglInit===void 0&&(w.__webglInit=!0,E.addEventListener("dispose",F));const ee=E.source;let ne=m.get(ee);ne===void 0&&(ne={},m.set(ee,ne));const D=ce(E);if(D!==w.__cacheKey){ne[D]===void 0&&(ne[D]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,O=!0),ne[D].usedTimes++;const te=ne[w.__cacheKey];te!==void 0&&(ne[w.__cacheKey].usedTimes--,te.usedTimes===0&&G(E)),w.__cacheKey=D,w.__webglTexture=ne[D].texture}return O}function se(w,E,O){let ee=t.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ee=t.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ee=t.TEXTURE_3D);const ne=de(w,E),D=E.source;n.bindTexture(ee,w.__webglTexture,t.TEXTURE0+O);const te=i.get(D);if(D.version!==te.__version||ne===!0){n.activeTexture(t.TEXTURE0+O),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const fe=x(E)&&S(E.image)===!1;let J=_(E.image,fe,!1,u);J=ue(E,J);const Ae=S(J)||a,Pe=s.convert(E.format,E.colorSpace);let Le=s.convert(E.type),Re=C(E.internalFormat,Pe,Le,E.colorSpace);z(ee,E,Ae);let ve;const De=E.mipmaps,Je=a&&E.isVideoTexture!==!0,U=te.__version===void 0||ne===!0,be=y(E,J,Ae);if(E.isDepthTexture)Re=t.DEPTH_COMPONENT,a?E.type===_i?Re=t.DEPTH_COMPONENT32F:E.type===gi?Re=t.DEPTH_COMPONENT24:E.type===ji?Re=t.DEPTH24_STENCIL8:Re=t.DEPTH_COMPONENT16:E.type===_i&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),E.format===$i&&Re===t.DEPTH_COMPONENT&&E.type!==wu&&E.type!==gi&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),E.type=gi,Le=s.convert(E.type)),E.format===Kr&&Re===t.DEPTH_COMPONENT&&(Re=t.DEPTH_STENCIL,E.type!==ji&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),E.type=ji,Le=s.convert(E.type))),U&&(Je?n.texStorage2D(t.TEXTURE_2D,1,Re,J.width,J.height):n.texImage2D(t.TEXTURE_2D,0,Re,J.width,J.height,0,Pe,Le,null));else if(E.isDataTexture)if(De.length>0&&Ae){Je&&U&&n.texStorage2D(t.TEXTURE_2D,be,Re,De[0].width,De[0].height);for(let Q=0,xe=De.length;Q<xe;Q++)ve=De[Q],Je?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ve.width,ve.height,Pe,Le,ve.data):n.texImage2D(t.TEXTURE_2D,Q,Re,ve.width,ve.height,0,Pe,Le,ve.data);E.generateMipmaps=!1}else Je?(U&&n.texStorage2D(t.TEXTURE_2D,be,Re,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,J.width,J.height,Pe,Le,J.data)):n.texImage2D(t.TEXTURE_2D,0,Re,J.width,J.height,0,Pe,Le,J.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){Je&&U&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Re,De[0].width,De[0].height,J.depth);for(let Q=0,xe=De.length;Q<xe;Q++)ve=De[Q],E.format!==xn?Pe!==null?Je?n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,J.depth,Pe,ve.data,0,0):n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,Q,Re,ve.width,ve.height,J.depth,0,ve.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage3D(t.TEXTURE_2D_ARRAY,Q,0,0,0,ve.width,ve.height,J.depth,Pe,Le,ve.data):n.texImage3D(t.TEXTURE_2D_ARRAY,Q,Re,ve.width,ve.height,J.depth,0,Pe,Le,ve.data)}else{Je&&U&&n.texStorage2D(t.TEXTURE_2D,be,Re,De[0].width,De[0].height);for(let Q=0,xe=De.length;Q<xe;Q++)ve=De[Q],E.format!==xn?Pe!==null?Je?n.compressedTexSubImage2D(t.TEXTURE_2D,Q,0,0,ve.width,ve.height,Pe,ve.data):n.compressedTexImage2D(t.TEXTURE_2D,Q,Re,ve.width,ve.height,0,ve.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Je?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,ve.width,ve.height,Pe,Le,ve.data):n.texImage2D(t.TEXTURE_2D,Q,Re,ve.width,ve.height,0,Pe,Le,ve.data)}else if(E.isDataArrayTexture)Je?(U&&n.texStorage3D(t.TEXTURE_2D_ARRAY,be,Re,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,J.width,J.height,J.depth,Pe,Le,J.data)):n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,J.width,J.height,J.depth,0,Pe,Le,J.data);else if(E.isData3DTexture)Je?(U&&n.texStorage3D(t.TEXTURE_3D,be,Re,J.width,J.height,J.depth),n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,J.width,J.height,J.depth,Pe,Le,J.data)):n.texImage3D(t.TEXTURE_3D,0,Re,J.width,J.height,J.depth,0,Pe,Le,J.data);else if(E.isFramebufferTexture){if(U)if(Je)n.texStorage2D(t.TEXTURE_2D,be,Re,J.width,J.height);else{let Q=J.width,xe=J.height;for(let Te=0;Te<be;Te++)n.texImage2D(t.TEXTURE_2D,Te,Re,Q,xe,0,Pe,Le,null),Q>>=1,xe>>=1}}else if(De.length>0&&Ae){Je&&U&&n.texStorage2D(t.TEXTURE_2D,be,Re,De[0].width,De[0].height);for(let Q=0,xe=De.length;Q<xe;Q++)ve=De[Q],Je?n.texSubImage2D(t.TEXTURE_2D,Q,0,0,Pe,Le,ve):n.texImage2D(t.TEXTURE_2D,Q,Re,Pe,Le,ve);E.generateMipmaps=!1}else Je?(U&&n.texStorage2D(t.TEXTURE_2D,be,Re,J.width,J.height),n.texSubImage2D(t.TEXTURE_2D,0,0,0,Pe,Le,J)):n.texImage2D(t.TEXTURE_2D,0,Re,Pe,Le,J);T(E,Ae)&&L(ee),te.__version=D.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function ye(w,E,O){if(E.image.length!==6)return;const ee=de(w,E),ne=E.source;n.bindTexture(t.TEXTURE_CUBE_MAP,w.__webglTexture,t.TEXTURE0+O);const D=i.get(ne);if(ne.version!==D.__version||ee===!0){n.activeTexture(t.TEXTURE0+O),t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,t.NONE);const te=E.isCompressedTexture||E.image[0].isCompressedTexture,fe=E.image[0]&&E.image[0].isDataTexture,J=[];for(let Q=0;Q<6;Q++)!te&&!fe?J[Q]=_(E.image[Q],!1,!0,c):J[Q]=fe?E.image[Q].image:E.image[Q],J[Q]=ue(E,J[Q]);const Ae=J[0],Pe=S(Ae)||a,Le=s.convert(E.format,E.colorSpace),Re=s.convert(E.type),ve=C(E.internalFormat,Le,Re,E.colorSpace),De=a&&E.isVideoTexture!==!0,Je=D.__version===void 0||ee===!0;let U=y(E,Ae,Pe);z(t.TEXTURE_CUBE_MAP,E,Pe);let be;if(te){De&&Je&&n.texStorage2D(t.TEXTURE_CUBE_MAP,U,ve,Ae.width,Ae.height);for(let Q=0;Q<6;Q++){be=J[Q].mipmaps;for(let xe=0;xe<be.length;xe++){const Te=be[xe];E.format!==xn?Le!==null?De?n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,Te.width,Te.height,Le,Te.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,ve,Te.width,Te.height,0,Te.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,0,0,Te.width,Te.height,Le,Re,Te.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe,ve,Te.width,Te.height,0,Le,Re,Te.data)}}}else{be=E.mipmaps,De&&Je&&(be.length>0&&U++,n.texStorage2D(t.TEXTURE_CUBE_MAP,U,ve,J[0].width,J[0].height));for(let Q=0;Q<6;Q++)if(fe){De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,J[Q].width,J[Q].height,Le,Re,J[Q].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ve,J[Q].width,J[Q].height,0,Le,Re,J[Q].data);for(let xe=0;xe<be.length;xe++){const Ke=be[xe].image[Q].image;De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Ke.width,Ke.height,Le,Re,Ke.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,ve,Ke.width,Ke.height,0,Le,Re,Ke.data)}}else{De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,0,0,Le,Re,J[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,0,ve,Le,Re,J[Q]);for(let xe=0;xe<be.length;xe++){const Te=be[xe];De?n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,0,0,Le,Re,Te.image[Q]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Q,xe+1,ve,Le,Re,Te.image[Q])}}}T(E,Pe)&&L(t.TEXTURE_CUBE_MAP),D.__version=ne.version,E.onUpdate&&E.onUpdate(E)}w.__version=E.version}function we(w,E,O,ee,ne){const D=s.convert(O.format,O.colorSpace),te=s.convert(O.type),fe=C(O.internalFormat,D,te,O.colorSpace);i.get(E).__hasExternalTextures||(ne===t.TEXTURE_3D||ne===t.TEXTURE_2D_ARRAY?n.texImage3D(ne,0,fe,E.width,E.height,E.depth,0,D,te,null):n.texImage2D(ne,0,fe,E.width,E.height,0,D,te,null)),n.bindFramebuffer(t.FRAMEBUFFER,w),ae(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,ee,ne,i.get(O).__webglTexture,0,le(E)):(ne===t.TEXTURE_2D||ne>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ne<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,ee,ne,i.get(O).__webglTexture,0),n.bindFramebuffer(t.FRAMEBUFFER,null)}function k(w,E,O){if(t.bindRenderbuffer(t.RENDERBUFFER,w),E.depthBuffer&&!E.stencilBuffer){let ee=t.DEPTH_COMPONENT16;if(O||ae(E)){const ne=E.depthTexture;ne&&ne.isDepthTexture&&(ne.type===_i?ee=t.DEPTH_COMPONENT32F:ne.type===gi&&(ee=t.DEPTH_COMPONENT24));const D=le(E);ae(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D,ee,E.width,E.height):t.renderbufferStorageMultisample(t.RENDERBUFFER,D,ee,E.width,E.height)}else t.renderbufferStorage(t.RENDERBUFFER,ee,E.width,E.height);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.RENDERBUFFER,w)}else if(E.depthBuffer&&E.stencilBuffer){const ee=le(E);O&&ae(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):ae(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,ee,t.DEPTH24_STENCIL8,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,t.DEPTH_STENCIL,E.width,E.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,w)}else{const ee=E.isWebGLMultipleRenderTargets===!0?E.texture:[E.texture];for(let ne=0;ne<ee.length;ne++){const D=ee[ne],te=s.convert(D.format,D.colorSpace),fe=s.convert(D.type),J=C(D.internalFormat,te,fe,D.colorSpace),Ae=le(E);O&&ae(E)===!1?t.renderbufferStorageMultisample(t.RENDERBUFFER,Ae,J,E.width,E.height):ae(E)?d.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,Ae,J,E.width,E.height):t.renderbufferStorage(t.RENDERBUFFER,J,E.width,E.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function A(w,E){if(E&&E.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(n.bindFramebuffer(t.FRAMEBUFFER,w),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(E.depthTexture).__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),he(E.depthTexture,0);const ee=i.get(E.depthTexture).__webglTexture,ne=le(E);if(E.depthTexture.format===$i)ae(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_ATTACHMENT,t.TEXTURE_2D,ee,0);else if(E.depthTexture.format===Kr)ae(E)?d.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0,ne):t.framebufferTexture2D(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.TEXTURE_2D,ee,0);else throw new Error("Unknown depthTexture format")}function P(w){const E=i.get(w),O=w.isWebGLCubeRenderTarget===!0;if(w.depthTexture&&!E.__autoAllocateDepthBuffer){if(O)throw new Error("target.depthTexture not supported in Cube render targets");A(E.__webglFramebuffer,w)}else if(O){E.__webglDepthbuffer=[];for(let ee=0;ee<6;ee++)n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer[ee]),E.__webglDepthbuffer[ee]=t.createRenderbuffer(),k(E.__webglDepthbuffer[ee],w,!1)}else n.bindFramebuffer(t.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer=t.createRenderbuffer(),k(E.__webglDepthbuffer,w,!1);n.bindFramebuffer(t.FRAMEBUFFER,null)}function N(w,E,O){const ee=i.get(w);E!==void 0&&we(ee.__webglFramebuffer,w,w.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D),O!==void 0&&P(w)}function $(w){const E=w.texture,O=i.get(w),ee=i.get(E);w.addEventListener("dispose",B),w.isWebGLMultipleRenderTargets!==!0&&(ee.__webglTexture===void 0&&(ee.__webglTexture=t.createTexture()),ee.__version=E.version,o.memory.textures++);const ne=w.isWebGLCubeRenderTarget===!0,D=w.isWebGLMultipleRenderTargets===!0,te=S(w)||a;if(ne){O.__webglFramebuffer=[];for(let fe=0;fe<6;fe++)O.__webglFramebuffer[fe]=t.createFramebuffer()}else{if(O.__webglFramebuffer=t.createFramebuffer(),D)if(r.drawBuffers){const fe=w.texture;for(let J=0,Ae=fe.length;J<Ae;J++){const Pe=i.get(fe[J]);Pe.__webglTexture===void 0&&(Pe.__webglTexture=t.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&w.samples>0&&ae(w)===!1){const fe=D?E:[E];O.__webglMultisampledFramebuffer=t.createFramebuffer(),O.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,O.__webglMultisampledFramebuffer);for(let J=0;J<fe.length;J++){const Ae=fe[J];O.__webglColorRenderbuffer[J]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,O.__webglColorRenderbuffer[J]);const Pe=s.convert(Ae.format,Ae.colorSpace),Le=s.convert(Ae.type),Re=C(Ae.internalFormat,Pe,Le,Ae.colorSpace,w.isXRRenderTarget===!0),ve=le(w);t.renderbufferStorageMultisample(t.RENDERBUFFER,ve,Re,w.width,w.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+J,t.RENDERBUFFER,O.__webglColorRenderbuffer[J])}t.bindRenderbuffer(t.RENDERBUFFER,null),w.depthBuffer&&(O.__webglDepthRenderbuffer=t.createRenderbuffer(),k(O.__webglDepthRenderbuffer,w,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(ne){n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),z(t.TEXTURE_CUBE_MAP,E,te);for(let fe=0;fe<6;fe++)we(O.__webglFramebuffer[fe],w,E,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+fe);T(E,te)&&L(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(D){const fe=w.texture;for(let J=0,Ae=fe.length;J<Ae;J++){const Pe=fe[J],Le=i.get(Pe);n.bindTexture(t.TEXTURE_2D,Le.__webglTexture),z(t.TEXTURE_2D,Pe,te),we(O.__webglFramebuffer,w,Pe,t.COLOR_ATTACHMENT0+J,t.TEXTURE_2D),T(Pe,te)&&L(t.TEXTURE_2D)}n.unbindTexture()}else{let fe=t.TEXTURE_2D;(w.isWebGL3DRenderTarget||w.isWebGLArrayRenderTarget)&&(a?fe=w.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),n.bindTexture(fe,ee.__webglTexture),z(fe,E,te),we(O.__webglFramebuffer,w,E,t.COLOR_ATTACHMENT0,fe),T(E,te)&&L(fe),n.unbindTexture()}w.depthBuffer&&P(w)}function Z(w){const E=S(w)||a,O=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let ee=0,ne=O.length;ee<ne;ee++){const D=O[ee];if(T(D,E)){const te=w.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:t.TEXTURE_2D,fe=i.get(D).__webglTexture;n.bindTexture(te,fe),L(te),n.unbindTexture()}}}function ie(w){if(a&&w.samples>0&&ae(w)===!1){const E=w.isWebGLMultipleRenderTargets?w.texture:[w.texture],O=w.width,ee=w.height;let ne=t.COLOR_BUFFER_BIT;const D=[],te=w.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,fe=i.get(w),J=w.isWebGLMultipleRenderTargets===!0;if(J)for(let Ae=0;Ae<E.length;Ae++)n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let Ae=0;Ae<E.length;Ae++){D.push(t.COLOR_ATTACHMENT0+Ae),w.depthBuffer&&D.push(te);const Pe=fe.__ignoreDepthValues!==void 0?fe.__ignoreDepthValues:!1;if(Pe===!1&&(w.depthBuffer&&(ne|=t.DEPTH_BUFFER_BIT),w.stencilBuffer&&(ne|=t.STENCIL_BUFFER_BIT)),J&&t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ae]),Pe===!0&&(t.invalidateFramebuffer(t.READ_FRAMEBUFFER,[te]),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[te])),J){const Le=i.get(E[Ae]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,Le,0)}t.blitFramebuffer(0,0,O,ee,0,0,O,ee,ne,t.NEAREST),h&&t.invalidateFramebuffer(t.READ_FRAMEBUFFER,D)}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),J)for(let Ae=0;Ae<E.length;Ae++){n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.RENDERBUFFER,fe.__webglColorRenderbuffer[Ae]);const Pe=i.get(E[Ae]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,fe.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Ae,t.TEXTURE_2D,Pe,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}}function le(w){return Math.min(f,w.samples)}function ae(w){const E=i.get(w);return a&&w.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function ge(w){const E=o.render.frame;g.get(w)!==E&&(g.set(w,E),w.update())}function ue(w,E){const O=w.colorSpace,ee=w.format,ne=w.type;return w.isCompressedTexture===!0||w.format===Ic||O!==Cn&&O!==Yi&&(O===ze?a===!1?e.has("EXT_sRGB")===!0&&ee===xn?(w.format=Ic,w.minFilter=Rt,w.generateMipmaps=!1):E=Ng.sRGBToLinear(E):(ee!==xn||ne!==Si)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",O)),E}this.allocateTextureUnit=H,this.resetTextureUnits=W,this.setTexture2D=he,this.setTexture2DArray=Ee,this.setTexture3D=q,this.setTextureCube=pe,this.rebindTextures=N,this.setupRenderTarget=$,this.updateRenderTargetMipmap=Z,this.updateMultisampleRenderTarget=ie,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=we,this.useMultisampledRTT=ae}function o1(t,e,n){const i=n.isWebGL2;function r(s,o=Yi){let a;if(s===Si)return t.UNSIGNED_BYTE;if(s===wg)return t.UNSIGNED_SHORT_4_4_4_4;if(s===Ag)return t.UNSIGNED_SHORT_5_5_5_1;if(s===AS)return t.BYTE;if(s===RS)return t.SHORT;if(s===wu)return t.UNSIGNED_SHORT;if(s===Tg)return t.INT;if(s===gi)return t.UNSIGNED_INT;if(s===_i)return t.FLOAT;if(s===Os)return i?t.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===CS)return t.ALPHA;if(s===xn)return t.RGBA;if(s===PS)return t.LUMINANCE;if(s===LS)return t.LUMINANCE_ALPHA;if(s===$i)return t.DEPTH_COMPONENT;if(s===Kr)return t.DEPTH_STENCIL;if(s===Ic)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===DS)return t.RED;if(s===Rg)return t.RED_INTEGER;if(s===IS)return t.RG;if(s===Cg)return t.RG_INTEGER;if(s===Pg)return t.RGBA_INTEGER;if(s===vl||s===yl||s===xl||s===Ml)if(o===ze)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===vl)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===yl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===xl)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===Ml)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===vl)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===yl)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===xl)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===Ml)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===yd||s===xd||s===Md||s===Ed)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===yd)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===xd)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===Md)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===Ed)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===US)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===Sd||s===bd)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===Sd)return o===ze?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===bd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===Td||s===wd||s===Ad||s===Rd||s===Cd||s===Pd||s===Ld||s===Dd||s===Id||s===Ud||s===Nd||s===Od||s===Fd||s===Bd)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===Td)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===wd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===Ad)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===Rd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===Cd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===Pd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===Ld)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===Dd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===Id)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===Ud)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===Nd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Od)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Fd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Bd)return o===ze?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===El)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===El)return o===ze?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===NS||s===kd||s===Hd||s===zd)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===El)return a.COMPRESSED_RED_RGTC1_EXT;if(s===kd)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===Hd)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===zd)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ji?i?t.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):t[s]!==void 0?t[s]:null}return{convert:r}}class a1 extends sn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ko extends Nt{constructor(){super(),this.isGroup=!0,this.type="Group"}}const l1={type:"move"};class Wl{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ko,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ko,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new K,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new K),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ko,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new K,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new K),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const v of e.hand.values()){const m=n.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const u=c.joints["index-finger-tip"],f=c.joints["thumb-tip"],d=u.position.distanceTo(f.position),h=.02,g=.005;c.inputState.pinching&&d>h+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&d<=h-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(l1)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new ko;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class c1 extends Ut{constructor(e,n,i,r,s,o,a,l,c,u){if(u=u!==void 0?u:$i,u!==$i&&u!==Kr)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&u===$i&&(i=gi),i===void 0&&u===Kr&&(i=ji),super(null,r,s,o,a,l,u,i,c),this.isDepthTexture=!0,this.image={width:e,height:n},this.magFilter=a!==void 0?a:At,this.minFilter=l!==void 0?l:At,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class u1 extends rr{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,u=null,f=null,d=null,h=null,g=null;const v=n.getContextAttributes();let m=null,p=null;const M=[],_=[];let S=null;const x=new sn;x.layers.enable(1),x.viewport=new Tt;const T=new sn;T.layers.enable(2),T.viewport=new Tt;const L=[x,T],C=new a1;C.layers.enable(1),C.layers.enable(2);let y=null,b=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(q){S=q},this.getController=function(q){let pe=M[q];return pe===void 0&&(pe=new Wl,M[q]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(q){let pe=M[q];return pe===void 0&&(pe=new Wl,M[q]=pe),pe.getGripSpace()},this.getHand=function(q){let pe=M[q];return pe===void 0&&(pe=new Wl,M[q]=pe),pe.getHandSpace()};function F(q){const pe=_.indexOf(q.inputSource);if(pe===-1)return;const me=M[pe];me!==void 0&&(me.update(q.inputSource,q.frame,c||o),me.dispatchEvent({type:q.type,data:q.inputSource}))}function B(){r.removeEventListener("select",F),r.removeEventListener("selectstart",F),r.removeEventListener("selectend",F),r.removeEventListener("squeeze",F),r.removeEventListener("squeezestart",F),r.removeEventListener("squeezeend",F),r.removeEventListener("end",B),r.removeEventListener("inputsourceschange",I);for(let q=0;q<M.length;q++){const pe=_[q];pe!==null&&(_[q]=null,M[q].disconnect(pe))}y=null,b=null,e.setRenderTarget(m),h=null,d=null,f=null,r=null,p=null,Ee.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return d!==null?d:h},this.getBinding=function(){return f},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",F),r.addEventListener("selectstart",F),r.addEventListener("selectend",F),r.addEventListener("squeeze",F),r.addEventListener("squeezestart",F),r.addEventListener("squeezeend",F),r.addEventListener("end",B),r.addEventListener("inputsourceschange",I),v.xrCompatible!==!0&&await n.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const pe={antialias:r.renderState.layers===void 0?v.antialias:!0,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};h=new XRWebGLLayer(r,n,pe),r.updateRenderState({baseLayer:h}),p=new Qi(h.framebufferWidth,h.framebufferHeight,{format:xn,type:Si,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil})}else{let pe=null,me=null,Se=null;v.depth&&(Se=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,pe=v.stencil?Kr:$i,me=v.stencil?ji:gi);const _e={colorFormat:n.RGBA8,depthFormat:Se,scaleFactor:s};f=new XRWebGLBinding(r,n),d=f.createProjectionLayer(_e),r.updateRenderState({layers:[d]}),p=new Qi(d.textureWidth,d.textureHeight,{format:xn,type:Si,depthTexture:new c1(d.textureWidth,d.textureHeight,me,void 0,void 0,void 0,void 0,void 0,void 0,pe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0});const z=e.properties.get(p);z.__ignoreDepthValues=d.ignoreDepthValues}p.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ee.setContext(r),Ee.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function I(q){for(let pe=0;pe<q.removed.length;pe++){const me=q.removed[pe],Se=_.indexOf(me);Se>=0&&(_[Se]=null,M[Se].disconnect(me))}for(let pe=0;pe<q.added.length;pe++){const me=q.added[pe];let Se=_.indexOf(me);if(Se===-1){for(let z=0;z<M.length;z++)if(z>=_.length){_.push(me),Se=z;break}else if(_[z]===null){_[z]=me,Se=z;break}if(Se===-1)break}const _e=M[Se];_e&&_e.connect(me)}}const G=new K,X=new K;function V(q,pe,me){G.setFromMatrixPosition(pe.matrixWorld),X.setFromMatrixPosition(me.matrixWorld);const Se=G.distanceTo(X),_e=pe.projectionMatrix.elements,z=me.projectionMatrix.elements,de=_e[14]/(_e[10]-1),se=_e[14]/(_e[10]+1),ye=(_e[9]+1)/_e[5],we=(_e[9]-1)/_e[5],k=(_e[8]-1)/_e[0],A=(z[8]+1)/z[0],P=de*k,N=de*A,$=Se/(-k+A),Z=$*-k;pe.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(Z),q.translateZ($),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert();const ie=de+$,le=se+$,ae=P-Z,ge=N+(Se-Z),ue=ye*se/le*ie,w=we*se/le*ie;q.projectionMatrix.makePerspective(ae,ge,ue,w,ie,le),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}function W(q,pe){pe===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(pe.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCameraXR=function(q){if(r===null)return q;S&&(q=S),C.near=T.near=x.near=q.near,C.far=T.far=x.far=q.far,(y!==C.near||b!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),y=C.near,b=C.far);const pe=q.parent,me=C.cameras;W(C,pe);for(let Se=0;Se<me.length;Se++)W(me[Se],pe);return me.length===2?V(C,x,T):C.projectionMatrix.copy(x.projectionMatrix),S&&H(C,pe),C};function H(q,pe){const me=S;pe===null?me.matrix.copy(q.matrixWorld):(me.matrix.copy(pe.matrixWorld),me.matrix.invert(),me.matrix.multiply(q.matrixWorld)),me.matrix.decompose(me.position,me.quaternion,me.scale),me.updateMatrixWorld(!0);const Se=me.children;for(let _e=0,z=Se.length;_e<z;_e++)Se[_e].updateMatrixWorld(!0);me.projectionMatrix.copy(q.projectionMatrix),me.projectionMatrixInverse.copy(q.projectionMatrixInverse),me.isPerspectiveCamera&&(me.fov=Fs*2*Math.atan(1/me.projectionMatrix.elements[5]),me.zoom=1)}this.getFoveation=function(){if(!(d===null&&h===null))return l},this.setFoveation=function(q){l=q,d!==null&&(d.fixedFoveation=q),h!==null&&h.fixedFoveation!==void 0&&(h.fixedFoveation=q)};let ce=null;function he(q,pe){if(u=pe.getViewerPose(c||o),g=pe,u!==null){const me=u.views;h!==null&&(e.setRenderTargetFramebuffer(p,h.framebuffer),e.setRenderTarget(p));let Se=!1;me.length!==C.cameras.length&&(C.cameras.length=0,Se=!0);for(let _e=0;_e<me.length;_e++){const z=me[_e];let de=null;if(h!==null)de=h.getViewport(z);else{const ye=f.getViewSubImage(d,z);de=ye.viewport,_e===0&&(e.setRenderTargetTextures(p,ye.colorTexture,d.ignoreDepthValues?void 0:ye.depthStencilTexture),e.setRenderTarget(p))}let se=L[_e];se===void 0&&(se=new sn,se.layers.enable(_e),se.viewport=new Tt,L[_e]=se),se.matrix.fromArray(z.transform.matrix),se.matrix.decompose(se.position,se.quaternion,se.scale),se.projectionMatrix.fromArray(z.projectionMatrix),se.projectionMatrixInverse.copy(se.projectionMatrix).invert(),se.viewport.set(de.x,de.y,de.width,de.height),_e===0&&(C.matrix.copy(se.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),Se===!0&&C.cameras.push(se)}}for(let me=0;me<M.length;me++){const Se=_[me],_e=M[me];Se!==null&&_e!==void 0&&_e.update(Se,pe,c||o)}ce&&ce(q,pe),pe.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:pe}),g=null}const Ee=new jg;Ee.setAnimationLoop(he),this.setAnimationLoop=function(q){ce=q},this.dispose=function(){}}}function f1(t,e){function n(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,Gg(t)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function r(m,p,M,_,S){p.isMeshBasicMaterial||p.isMeshLambertMaterial?s(m,p):p.isMeshToonMaterial?(s(m,p),f(m,p)):p.isMeshPhongMaterial?(s(m,p),u(m,p)):p.isMeshStandardMaterial?(s(m,p),d(m,p),p.isMeshPhysicalMaterial&&h(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),v(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(o(m,p),p.isLineDashedMaterial&&a(m,p)):p.isPointsMaterial?l(m,p,M,_):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,n(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Xt&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,n(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Xt&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,n(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,n(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,n(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p).envMap;if(M&&(m.envMap.value=M,m.flipEnvMap.value=M.isCubeTexture&&M.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap){m.lightMap.value=p.lightMap;const _=t.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=p.lightMapIntensity*_,n(p.lightMap,m.lightMapTransform)}p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,n(p.aoMap,m.aoMapTransform))}function o(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform))}function a(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,M,_){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=_*.5,p.map&&(m.map.value=p.map,n(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,n(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,n(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function u(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function f(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function d(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,n(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,n(p.roughnessMap,m.roughnessMapTransform)),e.get(p).envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function h(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,n(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,n(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,n(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,n(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,n(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Xt&&m.clearcoatNormalScale.value.negate())),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,n(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,n(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,n(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,n(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,n(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,n(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,n(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function d1(t,e,n,i){let r={},s={},o=[];const a=n.isWebGL2?t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(M,_){const S=_.program;i.uniformBlockBinding(M,S)}function c(M,_){let S=r[M.id];S===void 0&&(g(M),S=u(M),r[M.id]=S,M.addEventListener("dispose",m));const x=_.program;i.updateUBOMapping(M,x);const T=e.render.frame;s[M.id]!==T&&(d(M),s[M.id]=T)}function u(M){const _=f();M.__bindingPointIndex=_;const S=t.createBuffer(),x=M.__size,T=M.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,x,T),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function f(){for(let M=0;M<a;M++)if(o.indexOf(M)===-1)return o.push(M),M;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function d(M){const _=r[M.id],S=M.uniforms,x=M.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let T=0,L=S.length;T<L;T++){const C=S[T];if(h(C,T,x)===!0){const y=C.__offset,b=Array.isArray(C.value)?C.value:[C.value];let F=0;for(let B=0;B<b.length;B++){const I=b[B],G=v(I);typeof I=="number"?(C.__data[0]=I,t.bufferSubData(t.UNIFORM_BUFFER,y+F,C.__data)):I.isMatrix3?(C.__data[0]=I.elements[0],C.__data[1]=I.elements[1],C.__data[2]=I.elements[2],C.__data[3]=I.elements[0],C.__data[4]=I.elements[3],C.__data[5]=I.elements[4],C.__data[6]=I.elements[5],C.__data[7]=I.elements[0],C.__data[8]=I.elements[6],C.__data[9]=I.elements[7],C.__data[10]=I.elements[8],C.__data[11]=I.elements[0]):(I.toArray(C.__data,F),F+=G.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,y,C.__data)}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function h(M,_,S){const x=M.value;if(S[_]===void 0){if(typeof x=="number")S[_]=x;else{const T=Array.isArray(x)?x:[x],L=[];for(let C=0;C<T.length;C++)L.push(T[C].clone());S[_]=L}return!0}else if(typeof x=="number"){if(S[_]!==x)return S[_]=x,!0}else{const T=Array.isArray(S[_])?S[_]:[S[_]],L=Array.isArray(x)?x:[x];for(let C=0;C<T.length;C++){const y=T[C];if(y.equals(L[C])===!1)return y.copy(L[C]),!0}}return!1}function g(M){const _=M.uniforms;let S=0;const x=16;let T=0;for(let L=0,C=_.length;L<C;L++){const y=_[L],b={boundary:0,storage:0},F=Array.isArray(y.value)?y.value:[y.value];for(let B=0,I=F.length;B<I;B++){const G=F[B],X=v(G);b.boundary+=X.boundary,b.storage+=X.storage}if(y.__data=new Float32Array(b.storage/Float32Array.BYTES_PER_ELEMENT),y.__offset=S,L>0){T=S%x;const B=x-T;T!==0&&B-b.boundary<0&&(S+=x-T,y.__offset=S)}S+=b.storage}return T=S%x,T>0&&(S+=x-T),M.__size=S,M.__cache={},this}function v(M){const _={boundary:0,storage:0};return typeof M=="number"?(_.boundary=4,_.storage=4):M.isVector2?(_.boundary=8,_.storage=8):M.isVector3||M.isColor?(_.boundary=16,_.storage=12):M.isVector4?(_.boundary=16,_.storage=16):M.isMatrix3?(_.boundary=48,_.storage=48):M.isMatrix4?(_.boundary=64,_.storage=64):M.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",M),_}function m(M){const _=M.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function p(){for(const M in r)t.deleteBuffer(r[M]);o=[],r={},s={}}return{bind:l,update:c,dispose:p}}function h1(){const t=Bs("canvas");return t.style.display="block",t}class Jg{constructor(e={}){const{canvas:n=h1(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:u="default",failIfMajorPerformanceCaveat:f=!1}=e;this.isWebGLRenderer=!0;let d;i!==null?d=i.getContextAttributes().alpha:d=o;const h=new Uint32Array(4),g=new Int32Array(4);let v=null,m=null;const p=[],M=[];this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=ze,this.useLegacyLights=!0,this.toneMapping=Kn,this.toneMappingExposure=1;const _=this;let S=!1,x=0,T=0,L=null,C=-1,y=null;const b=new Tt,F=new Tt;let B=null;const I=new tt(0);let G=0,X=n.width,V=n.height,W=1,H=null,ce=null;const he=new Tt(0,0,X,V),Ee=new Tt(0,0,X,V);let q=!1;const pe=new Cu;let me=!1,Se=!1,_e=null;const z=new xt,de=new Ve,se=new K,ye={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function we(){return L===null?W:1}let k=i;function A(R,Y){for(let re=0;re<R.length;re++){const j=R[re],oe=n.getContext(j,Y);if(oe!==null)return oe}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:u,failIfMajorPerformanceCaveat:f};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${Tu}`),n.addEventListener("webglcontextlost",be,!1),n.addEventListener("webglcontextrestored",Q,!1),n.addEventListener("webglcontextcreationerror",xe,!1),k===null){const Y=["webgl2","webgl","experimental-webgl"];if(_.isWebGL1Renderer===!0&&Y.shift(),k=A(Y,R),k===null)throw A(Y)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}k instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),k.getShaderPrecisionFormat===void 0&&(k.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let P,N,$,Z,ie,le,ae,ge,ue,w,E,O,ee,ne,D,te,fe,J,Ae,Pe,Le,Re,ve,De;function Je(){P=new bA(k),N=new vA(k,P,e),P.init(N),Re=new o1(k,P,N),$=new r1(k,P,N),Z=new AA(k),ie=new WR,le=new s1(k,P,$,ie,N,Re,Z),ae=new xA(_),ge=new SA(_),ue=new kb(k,N),ve=new gA(k,P,ue,N),w=new TA(k,ue,Z,ve),E=new LA(k,w,ue,Z),Ae=new PA(k,N,le),te=new yA(ie),O=new GR(_,ae,ge,P,N,ve,te),ee=new f1(_,ie),ne=new jR,D=new JR(P,N),J=new mA(_,ae,ge,$,E,d,l),fe=new i1(_,E,N),De=new d1(k,Z,N,$),Pe=new _A(k,P,Z,N),Le=new wA(k,P,Z,N),Z.programs=O.programs,_.capabilities=N,_.extensions=P,_.properties=ie,_.renderLists=ne,_.shadowMap=fe,_.state=$,_.info=Z}Je();const U=new u1(_,k);this.xr=U,this.getContext=function(){return k},this.getContextAttributes=function(){return k.getContextAttributes()},this.forceContextLoss=function(){const R=P.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=P.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(X,V,!1))},this.getSize=function(R){return R.set(X,V)},this.setSize=function(R,Y,re=!0){if(U.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}X=R,V=Y,n.width=Math.floor(R*W),n.height=Math.floor(Y*W),re===!0&&(n.style.width=R+"px",n.style.height=Y+"px"),this.setViewport(0,0,R,Y)},this.getDrawingBufferSize=function(R){return R.set(X*W,V*W).floor()},this.setDrawingBufferSize=function(R,Y,re){X=R,V=Y,W=re,n.width=Math.floor(R*re),n.height=Math.floor(Y*re),this.setViewport(0,0,R,Y)},this.getCurrentViewport=function(R){return R.copy(b)},this.getViewport=function(R){return R.copy(he)},this.setViewport=function(R,Y,re,j){R.isVector4?he.set(R.x,R.y,R.z,R.w):he.set(R,Y,re,j),$.viewport(b.copy(he).multiplyScalar(W).floor())},this.getScissor=function(R){return R.copy(Ee)},this.setScissor=function(R,Y,re,j){R.isVector4?Ee.set(R.x,R.y,R.z,R.w):Ee.set(R,Y,re,j),$.scissor(F.copy(Ee).multiplyScalar(W).floor())},this.getScissorTest=function(){return q},this.setScissorTest=function(R){$.setScissorTest(q=R)},this.setOpaqueSort=function(R){H=R},this.setTransparentSort=function(R){ce=R},this.getClearColor=function(R){return R.copy(J.getClearColor())},this.setClearColor=function(){J.setClearColor.apply(J,arguments)},this.getClearAlpha=function(){return J.getClearAlpha()},this.setClearAlpha=function(){J.setClearAlpha.apply(J,arguments)},this.clear=function(R=!0,Y=!0,re=!0){let j=0;if(R){let oe=!1;if(L!==null){const Ce=L.texture.format;oe=Ce===Pg||Ce===Cg||Ce===Rg}if(oe){const Ce=L.texture.type,Ie=Ce===Si||Ce===gi||Ce===wu||Ce===ji||Ce===wg||Ce===Ag,Oe=J.getClearColor(),Be=J.getClearAlpha(),Xe=Oe.r,ke=Oe.g,He=Oe.b,it=ie.get(L).__webglFramebuffer;Ie?(h[0]=Xe,h[1]=ke,h[2]=He,h[3]=Be,k.clearBufferuiv(k.COLOR,it,h)):(g[0]=Xe,g[1]=ke,g[2]=He,g[3]=Be,k.clearBufferiv(k.COLOR,it,g))}else j|=k.COLOR_BUFFER_BIT}Y&&(j|=k.DEPTH_BUFFER_BIT),re&&(j|=k.STENCIL_BUFFER_BIT),k.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",be,!1),n.removeEventListener("webglcontextrestored",Q,!1),n.removeEventListener("webglcontextcreationerror",xe,!1),ne.dispose(),D.dispose(),ie.dispose(),ae.dispose(),ge.dispose(),E.dispose(),ve.dispose(),De.dispose(),O.dispose(),U.dispose(),U.removeEventListener("sessionstart",lt),U.removeEventListener("sessionend",Sn),_e&&(_e.dispose(),_e=null),Ot.stop()};function be(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),S=!0}function Q(){console.log("THREE.WebGLRenderer: Context Restored."),S=!1;const R=Z.autoReset,Y=fe.enabled,re=fe.autoUpdate,j=fe.needsUpdate,oe=fe.type;Je(),Z.autoReset=R,fe.enabled=Y,fe.autoUpdate=re,fe.needsUpdate=j,fe.type=oe}function xe(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function Te(R){const Y=R.target;Y.removeEventListener("dispose",Te),Ke(Y)}function Ke(R){at(R),ie.remove(R)}function at(R){const Y=ie.get(R).programs;Y!==void 0&&(Y.forEach(function(re){O.releaseProgram(re)}),R.isShaderMaterial&&O.releaseShaderCache(R))}this.renderBufferDirect=function(R,Y,re,j,oe,Ce){Y===null&&(Y=ye);const Ie=oe.isMesh&&oe.matrixWorld.determinant()<0,Oe=x_(R,Y,re,j,oe);$.setMaterial(j,Ie);let Be=re.index,Xe=1;j.wireframe===!0&&(Be=w.getWireframeAttribute(re),Xe=2);const ke=re.drawRange,He=re.attributes.position;let it=ke.start*Xe,ft=(ke.start+ke.count)*Xe;Ce!==null&&(it=Math.max(it,Ce.start*Xe),ft=Math.min(ft,(Ce.start+Ce.count)*Xe)),Be!==null?(it=Math.max(it,0),ft=Math.min(ft,Be.count)):He!=null&&(it=Math.max(it,0),ft=Math.min(ft,He.count));const fn=ft-it;if(fn<0||fn===1/0)return;ve.setup(oe,j,Oe,re,Be);let Dn,ht=Pe;if(Be!==null&&(Dn=ue.get(Be),ht=Le,ht.setIndex(Dn)),oe.isMesh)j.wireframe===!0?($.setLineWidth(j.wireframeLinewidth*we()),ht.setMode(k.LINES)):ht.setMode(k.TRIANGLES);else if(oe.isLine){let qe=j.linewidth;qe===void 0&&(qe=1),$.setLineWidth(qe*we()),oe.isLineSegments?ht.setMode(k.LINES):oe.isLineLoop?ht.setMode(k.LINE_LOOP):ht.setMode(k.LINE_STRIP)}else oe.isPoints?ht.setMode(k.POINTS):oe.isSprite&&ht.setMode(k.TRIANGLES);if(oe.isInstancedMesh)ht.renderInstances(it,fn,oe.count);else if(re.isInstancedBufferGeometry){const qe=re._maxInstanceCount!==void 0?re._maxInstanceCount:1/0,Ga=Math.min(re.instanceCount,qe);ht.renderInstances(it,fn,Ga)}else ht.render(it,fn)},this.compile=function(R,Y){function re(j,oe,Ce){j.transparent===!0&&j.side===Xn&&j.forceSinglePass===!1?(j.side=Xt,j.needsUpdate=!0,oo(j,oe,Ce),j.side=Ti,j.needsUpdate=!0,oo(j,oe,Ce),j.side=Xn):oo(j,oe,Ce)}m=D.get(R),m.init(),M.push(m),R.traverseVisible(function(j){j.isLight&&j.layers.test(Y.layers)&&(m.pushLight(j),j.castShadow&&m.pushShadow(j))}),m.setupLights(_.useLegacyLights),R.traverse(function(j){const oe=j.material;if(oe)if(Array.isArray(oe))for(let Ce=0;Ce<oe.length;Ce++){const Ie=oe[Ce];re(Ie,R,j)}else re(oe,R,j)}),M.pop(),m=null};let dt=null;function Ai(R){dt&&dt(R)}function lt(){Ot.stop()}function Sn(){Ot.start()}const Ot=new jg;Ot.setAnimationLoop(Ai),typeof self<"u"&&Ot.setContext(self),this.setAnimationLoop=function(R){dt=R,U.setAnimationLoop(R),R===null?Ot.stop():Ot.start()},U.addEventListener("sessionstart",lt),U.addEventListener("sessionend",Sn),this.render=function(R,Y){if(Y!==void 0&&Y.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(S===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),U.enabled===!0&&U.isPresenting===!0&&(Y=U.updateCameraXR(Y)),R.isScene===!0&&R.onBeforeRender(_,R,Y,L),m=D.get(R,M.length),m.init(),M.push(m),z.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),pe.setFromProjectionMatrix(z),Se=this.localClippingEnabled,me=te.init(this.clippingPlanes,Se),v=ne.get(R,p.length),v.init(),p.push(v),Fu(R,Y,0,_.sortObjects),v.finish(),_.sortObjects===!0&&v.sort(H,ce),me===!0&&te.beginShadows();const re=m.state.shadowsArray;if(fe.render(re,R,Y),me===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,J.render(v,R),m.setupLights(_.useLegacyLights),Y.isArrayCamera){const j=Y.cameras;for(let oe=0,Ce=j.length;oe<Ce;oe++){const Ie=j[oe];Bu(v,R,Ie,Ie.viewport)}}else Bu(v,R,Y);L!==null&&(le.updateMultisampleRenderTarget(L),le.updateRenderTargetMipmap(L)),R.isScene===!0&&R.onAfterRender(_,R,Y),ve.resetDefaultState(),C=-1,y=null,M.pop(),M.length>0?m=M[M.length-1]:m=null,p.pop(),p.length>0?v=p[p.length-1]:v=null};function Fu(R,Y,re,j){if(R.visible===!1)return;if(R.layers.test(Y.layers)){if(R.isGroup)re=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(Y);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||pe.intersectsSprite(R)){j&&se.setFromMatrixPosition(R.matrixWorld).applyMatrix4(z);const Ie=E.update(R),Oe=R.material;Oe.visible&&v.push(R,Ie,Oe,re,se.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||pe.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==Z.render.frame&&(R.skeleton.update(),R.skeleton.frame=Z.render.frame);const Ie=E.update(R),Oe=R.material;if(j&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),se.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),se.copy(Ie.boundingSphere.center)),se.applyMatrix4(R.matrixWorld).applyMatrix4(z)),Array.isArray(Oe)){const Be=Ie.groups;for(let Xe=0,ke=Be.length;Xe<ke;Xe++){const He=Be[Xe],it=Oe[He.materialIndex];it&&it.visible&&v.push(R,Ie,it,re,se.z,He)}}else Oe.visible&&v.push(R,Ie,Oe,re,se.z,null)}}const Ce=R.children;for(let Ie=0,Oe=Ce.length;Ie<Oe;Ie++)Fu(Ce[Ie],Y,re,j)}function Bu(R,Y,re,j){const oe=R.opaque,Ce=R.transmissive,Ie=R.transparent;m.setupLightsView(re),me===!0&&te.setGlobalState(_.clippingPlanes,re),Ce.length>0&&y_(oe,Ce,Y,re),j&&$.viewport(b.copy(j)),oe.length>0&&so(oe,Y,re),Ce.length>0&&so(Ce,Y,re),Ie.length>0&&so(Ie,Y,re),$.buffers.depth.setTest(!0),$.buffers.depth.setMask(!0),$.buffers.color.setMask(!0),$.setPolygonOffset(!1)}function y_(R,Y,re,j){const oe=N.isWebGL2;_e===null&&(_e=new Qi(1,1,{generateMipmaps:!0,type:P.has("EXT_color_buffer_half_float")?Os:Si,minFilter:Yr,samples:oe&&a===!0?4:0})),_.getDrawingBufferSize(de),oe?_e.setSize(de.x,de.y):_e.setSize(ma(de.x),ma(de.y));const Ce=_.getRenderTarget();_.setRenderTarget(_e),_.getClearColor(I),G=_.getClearAlpha(),G<1&&_.setClearColor(16777215,.5),_.clear();const Ie=_.toneMapping;_.toneMapping=Kn,so(R,re,j),le.updateMultisampleRenderTarget(_e),le.updateRenderTargetMipmap(_e);let Oe=!1;for(let Be=0,Xe=Y.length;Be<Xe;Be++){const ke=Y[Be],He=ke.object,it=ke.geometry,ft=ke.material,fn=ke.group;if(ft.side===Xn&&He.layers.test(j.layers)){const Dn=ft.side;ft.side=Xt,ft.needsUpdate=!0,ku(He,re,j,it,ft,fn),ft.side=Dn,ft.needsUpdate=!0,Oe=!0}}Oe===!0&&(le.updateMultisampleRenderTarget(_e),le.updateRenderTargetMipmap(_e)),_.setRenderTarget(Ce),_.setClearColor(I,G),_.toneMapping=Ie}function so(R,Y,re){const j=Y.isScene===!0?Y.overrideMaterial:null;for(let oe=0,Ce=R.length;oe<Ce;oe++){const Ie=R[oe],Oe=Ie.object,Be=Ie.geometry,Xe=j===null?Ie.material:j,ke=Ie.group;Oe.layers.test(re.layers)&&ku(Oe,Y,re,Be,Xe,ke)}}function ku(R,Y,re,j,oe,Ce){R.onBeforeRender(_,Y,re,j,oe,Ce),R.modelViewMatrix.multiplyMatrices(re.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),oe.onBeforeRender(_,Y,re,j,R,Ce),oe.transparent===!0&&oe.side===Xn&&oe.forceSinglePass===!1?(oe.side=Xt,oe.needsUpdate=!0,_.renderBufferDirect(re,Y,j,oe,R,Ce),oe.side=Ti,oe.needsUpdate=!0,_.renderBufferDirect(re,Y,j,oe,R,Ce),oe.side=Xn):_.renderBufferDirect(re,Y,j,oe,R,Ce),R.onAfterRender(_,Y,re,j,oe,Ce)}function oo(R,Y,re){Y.isScene!==!0&&(Y=ye);const j=ie.get(R),oe=m.state.lights,Ce=m.state.shadowsArray,Ie=oe.state.version,Oe=O.getParameters(R,oe.state,Ce,Y,re),Be=O.getProgramCacheKey(Oe);let Xe=j.programs;j.environment=R.isMeshStandardMaterial?Y.environment:null,j.fog=Y.fog,j.envMap=(R.isMeshStandardMaterial?ge:ae).get(R.envMap||j.environment),Xe===void 0&&(R.addEventListener("dispose",Te),Xe=new Map,j.programs=Xe);let ke=Xe.get(Be);if(ke!==void 0){if(j.currentProgram===ke&&j.lightsStateVersion===Ie)return Hu(R,Oe),ke}else Oe.uniforms=O.getUniforms(R),R.onBuild(re,Oe,_),R.onBeforeCompile(Oe,_),ke=O.acquireProgram(Oe,Be),Xe.set(Be,ke),j.uniforms=Oe.uniforms;const He=j.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(He.clippingPlanes=te.uniform),Hu(R,Oe),j.needsLights=E_(R),j.lightsStateVersion=Ie,j.needsLights&&(He.ambientLightColor.value=oe.state.ambient,He.lightProbe.value=oe.state.probe,He.directionalLights.value=oe.state.directional,He.directionalLightShadows.value=oe.state.directionalShadow,He.spotLights.value=oe.state.spot,He.spotLightShadows.value=oe.state.spotShadow,He.rectAreaLights.value=oe.state.rectArea,He.ltc_1.value=oe.state.rectAreaLTC1,He.ltc_2.value=oe.state.rectAreaLTC2,He.pointLights.value=oe.state.point,He.pointLightShadows.value=oe.state.pointShadow,He.hemisphereLights.value=oe.state.hemi,He.directionalShadowMap.value=oe.state.directionalShadowMap,He.directionalShadowMatrix.value=oe.state.directionalShadowMatrix,He.spotShadowMap.value=oe.state.spotShadowMap,He.spotLightMatrix.value=oe.state.spotLightMatrix,He.spotLightMap.value=oe.state.spotLightMap,He.pointShadowMap.value=oe.state.pointShadowMap,He.pointShadowMatrix.value=oe.state.pointShadowMatrix);const it=ke.getUniforms(),ft=Ko.seqWithValue(it.seq,He);return j.currentProgram=ke,j.uniformsList=ft,ke}function Hu(R,Y){const re=ie.get(R);re.outputColorSpace=Y.outputColorSpace,re.instancing=Y.instancing,re.skinning=Y.skinning,re.morphTargets=Y.morphTargets,re.morphNormals=Y.morphNormals,re.morphColors=Y.morphColors,re.morphTargetsCount=Y.morphTargetsCount,re.numClippingPlanes=Y.numClippingPlanes,re.numIntersection=Y.numClipIntersection,re.vertexAlphas=Y.vertexAlphas,re.vertexTangents=Y.vertexTangents,re.toneMapping=Y.toneMapping}function x_(R,Y,re,j,oe){Y.isScene!==!0&&(Y=ye),le.resetTextureUnits();const Ce=Y.fog,Ie=j.isMeshStandardMaterial?Y.environment:null,Oe=L===null?_.outputColorSpace:L.isXRRenderTarget===!0?L.texture.colorSpace:Cn,Be=(j.isMeshStandardMaterial?ge:ae).get(j.envMap||Ie),Xe=j.vertexColors===!0&&!!re.attributes.color&&re.attributes.color.itemSize===4,ke=!!re.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),He=!!re.morphAttributes.position,it=!!re.morphAttributes.normal,ft=!!re.morphAttributes.color,fn=j.toneMapped?_.toneMapping:Kn,Dn=re.morphAttributes.position||re.morphAttributes.normal||re.morphAttributes.color,ht=Dn!==void 0?Dn.length:0,qe=ie.get(j),Ga=m.state.lights;if(me===!0&&(Se===!0||R!==y)){const $t=R===y&&j.id===C;te.setState(j,R,$t)}let St=!1;j.version===qe.__version?(qe.needsLights&&qe.lightsStateVersion!==Ga.state.version||qe.outputColorSpace!==Oe||oe.isInstancedMesh&&qe.instancing===!1||!oe.isInstancedMesh&&qe.instancing===!0||oe.isSkinnedMesh&&qe.skinning===!1||!oe.isSkinnedMesh&&qe.skinning===!0||qe.envMap!==Be||j.fog===!0&&qe.fog!==Ce||qe.numClippingPlanes!==void 0&&(qe.numClippingPlanes!==te.numPlanes||qe.numIntersection!==te.numIntersection)||qe.vertexAlphas!==Xe||qe.vertexTangents!==ke||qe.morphTargets!==He||qe.morphNormals!==it||qe.morphColors!==ft||qe.toneMapping!==fn||N.isWebGL2===!0&&qe.morphTargetsCount!==ht)&&(St=!0):(St=!0,qe.__version=j.version);let Ri=qe.currentProgram;St===!0&&(Ri=oo(j,Y,oe));let zu=!1,rs=!1,Wa=!1;const Ft=Ri.getUniforms(),Ci=qe.uniforms;if($.useProgram(Ri.program)&&(zu=!0,rs=!0,Wa=!0),j.id!==C&&(C=j.id,rs=!0),zu||y!==R){if(Ft.setValue(k,"projectionMatrix",R.projectionMatrix),N.logarithmicDepthBuffer&&Ft.setValue(k,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),y!==R&&(y=R,rs=!0,Wa=!0),j.isShaderMaterial||j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshStandardMaterial||j.envMap){const $t=Ft.map.cameraPosition;$t!==void 0&&$t.setValue(k,se.setFromMatrixPosition(R.matrixWorld))}(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Ft.setValue(k,"isOrthographic",R.isOrthographicCamera===!0),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial||j.isShadowMaterial||oe.isSkinnedMesh)&&Ft.setValue(k,"viewMatrix",R.matrixWorldInverse)}if(oe.isSkinnedMesh){Ft.setOptional(k,oe,"bindMatrix"),Ft.setOptional(k,oe,"bindMatrixInverse");const $t=oe.skeleton;$t&&(N.floatVertexTextures?($t.boneTexture===null&&$t.computeBoneTexture(),Ft.setValue(k,"boneTexture",$t.boneTexture,le),Ft.setValue(k,"boneTextureSize",$t.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Xa=re.morphAttributes;if((Xa.position!==void 0||Xa.normal!==void 0||Xa.color!==void 0&&N.isWebGL2===!0)&&Ae.update(oe,re,Ri),(rs||qe.receiveShadow!==oe.receiveShadow)&&(qe.receiveShadow=oe.receiveShadow,Ft.setValue(k,"receiveShadow",oe.receiveShadow)),j.isMeshGouraudMaterial&&j.envMap!==null&&(Ci.envMap.value=Be,Ci.flipEnvMap.value=Be.isCubeTexture&&Be.isRenderTargetTexture===!1?-1:1),rs&&(Ft.setValue(k,"toneMappingExposure",_.toneMappingExposure),qe.needsLights&&M_(Ci,Wa),Ce&&j.fog===!0&&ee.refreshFogUniforms(Ci,Ce),ee.refreshMaterialUniforms(Ci,j,W,V,_e),Ko.upload(k,qe.uniformsList,Ci,le)),j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Ko.upload(k,qe.uniformsList,Ci,le),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Ft.setValue(k,"center",oe.center),Ft.setValue(k,"modelViewMatrix",oe.modelViewMatrix),Ft.setValue(k,"normalMatrix",oe.normalMatrix),Ft.setValue(k,"modelMatrix",oe.matrixWorld),j.isShaderMaterial||j.isRawShaderMaterial){const $t=j.uniformsGroups;for(let ja=0,S_=$t.length;ja<S_;ja++)if(N.isWebGL2){const Vu=$t[ja];De.update(Vu,Ri),De.bind(Vu,Ri)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return Ri}function M_(R,Y){R.ambientLightColor.needsUpdate=Y,R.lightProbe.needsUpdate=Y,R.directionalLights.needsUpdate=Y,R.directionalLightShadows.needsUpdate=Y,R.pointLights.needsUpdate=Y,R.pointLightShadows.needsUpdate=Y,R.spotLights.needsUpdate=Y,R.spotLightShadows.needsUpdate=Y,R.rectAreaLights.needsUpdate=Y,R.hemisphereLights.needsUpdate=Y}function E_(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return x},this.getActiveMipmapLevel=function(){return T},this.getRenderTarget=function(){return L},this.setRenderTargetTextures=function(R,Y,re){ie.get(R.texture).__webglTexture=Y,ie.get(R.depthTexture).__webglTexture=re;const j=ie.get(R);j.__hasExternalTextures=!0,j.__hasExternalTextures&&(j.__autoAllocateDepthBuffer=re===void 0,j.__autoAllocateDepthBuffer||P.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),j.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,Y){const re=ie.get(R);re.__webglFramebuffer=Y,re.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(R,Y=0,re=0){L=R,x=Y,T=re;let j=!0,oe=null,Ce=!1,Ie=!1;if(R){const Be=ie.get(R);Be.__useDefaultFramebuffer!==void 0?($.bindFramebuffer(k.FRAMEBUFFER,null),j=!1):Be.__webglFramebuffer===void 0?le.setupRenderTarget(R):Be.__hasExternalTextures&&le.rebindTextures(R,ie.get(R.texture).__webglTexture,ie.get(R.depthTexture).__webglTexture);const Xe=R.texture;(Xe.isData3DTexture||Xe.isDataArrayTexture||Xe.isCompressedArrayTexture)&&(Ie=!0);const ke=ie.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(oe=ke[Y],Ce=!0):N.isWebGL2&&R.samples>0&&le.useMultisampledRTT(R)===!1?oe=ie.get(R).__webglMultisampledFramebuffer:oe=ke,b.copy(R.viewport),F.copy(R.scissor),B=R.scissorTest}else b.copy(he).multiplyScalar(W).floor(),F.copy(Ee).multiplyScalar(W).floor(),B=q;if($.bindFramebuffer(k.FRAMEBUFFER,oe)&&N.drawBuffers&&j&&$.drawBuffers(R,oe),$.viewport(b),$.scissor(F),$.setScissorTest(B),Ce){const Be=ie.get(R.texture);k.framebufferTexture2D(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,k.TEXTURE_CUBE_MAP_POSITIVE_X+Y,Be.__webglTexture,re)}else if(Ie){const Be=ie.get(R.texture),Xe=Y||0;k.framebufferTextureLayer(k.FRAMEBUFFER,k.COLOR_ATTACHMENT0,Be.__webglTexture,re||0,Xe)}C=-1},this.readRenderTargetPixels=function(R,Y,re,j,oe,Ce,Ie){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Oe=ie.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(Oe=Oe[Ie]),Oe){$.bindFramebuffer(k.FRAMEBUFFER,Oe);try{const Be=R.texture,Xe=Be.format,ke=Be.type;if(Xe!==xn&&Re.convert(Xe)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const He=ke===Os&&(P.has("EXT_color_buffer_half_float")||N.isWebGL2&&P.has("EXT_color_buffer_float"));if(ke!==Si&&Re.convert(ke)!==k.getParameter(k.IMPLEMENTATION_COLOR_READ_TYPE)&&!(ke===_i&&(N.isWebGL2||P.has("OES_texture_float")||P.has("WEBGL_color_buffer_float")))&&!He){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=R.width-j&&re>=0&&re<=R.height-oe&&k.readPixels(Y,re,j,oe,Re.convert(Xe),Re.convert(ke),Ce)}finally{const Be=L!==null?ie.get(L).__webglFramebuffer:null;$.bindFramebuffer(k.FRAMEBUFFER,Be)}}},this.copyFramebufferToTexture=function(R,Y,re=0){const j=Math.pow(2,-re),oe=Math.floor(Y.image.width*j),Ce=Math.floor(Y.image.height*j);le.setTexture2D(Y,0),k.copyTexSubImage2D(k.TEXTURE_2D,re,0,0,R.x,R.y,oe,Ce),$.unbindTexture()},this.copyTextureToTexture=function(R,Y,re,j=0){const oe=Y.image.width,Ce=Y.image.height,Ie=Re.convert(re.format),Oe=Re.convert(re.type);le.setTexture2D(re,0),k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,re.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,re.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,re.unpackAlignment),Y.isDataTexture?k.texSubImage2D(k.TEXTURE_2D,j,R.x,R.y,oe,Ce,Ie,Oe,Y.image.data):Y.isCompressedTexture?k.compressedTexSubImage2D(k.TEXTURE_2D,j,R.x,R.y,Y.mipmaps[0].width,Y.mipmaps[0].height,Ie,Y.mipmaps[0].data):k.texSubImage2D(k.TEXTURE_2D,j,R.x,R.y,Ie,Oe,Y.image),j===0&&re.generateMipmaps&&k.generateMipmap(k.TEXTURE_2D),$.unbindTexture()},this.copyTextureToTexture3D=function(R,Y,re,j,oe=0){if(_.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const Ce=R.max.x-R.min.x+1,Ie=R.max.y-R.min.y+1,Oe=R.max.z-R.min.z+1,Be=Re.convert(j.format),Xe=Re.convert(j.type);let ke;if(j.isData3DTexture)le.setTexture3D(j,0),ke=k.TEXTURE_3D;else if(j.isDataArrayTexture)le.setTexture2DArray(j,0),ke=k.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}k.pixelStorei(k.UNPACK_FLIP_Y_WEBGL,j.flipY),k.pixelStorei(k.UNPACK_PREMULTIPLY_ALPHA_WEBGL,j.premultiplyAlpha),k.pixelStorei(k.UNPACK_ALIGNMENT,j.unpackAlignment);const He=k.getParameter(k.UNPACK_ROW_LENGTH),it=k.getParameter(k.UNPACK_IMAGE_HEIGHT),ft=k.getParameter(k.UNPACK_SKIP_PIXELS),fn=k.getParameter(k.UNPACK_SKIP_ROWS),Dn=k.getParameter(k.UNPACK_SKIP_IMAGES),ht=re.isCompressedTexture?re.mipmaps[0]:re.image;k.pixelStorei(k.UNPACK_ROW_LENGTH,ht.width),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,ht.height),k.pixelStorei(k.UNPACK_SKIP_PIXELS,R.min.x),k.pixelStorei(k.UNPACK_SKIP_ROWS,R.min.y),k.pixelStorei(k.UNPACK_SKIP_IMAGES,R.min.z),re.isDataTexture||re.isData3DTexture?k.texSubImage3D(ke,oe,Y.x,Y.y,Y.z,Ce,Ie,Oe,Be,Xe,ht.data):re.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),k.compressedTexSubImage3D(ke,oe,Y.x,Y.y,Y.z,Ce,Ie,Oe,Be,ht.data)):k.texSubImage3D(ke,oe,Y.x,Y.y,Y.z,Ce,Ie,Oe,Be,Xe,ht),k.pixelStorei(k.UNPACK_ROW_LENGTH,He),k.pixelStorei(k.UNPACK_IMAGE_HEIGHT,it),k.pixelStorei(k.UNPACK_SKIP_PIXELS,ft),k.pixelStorei(k.UNPACK_SKIP_ROWS,fn),k.pixelStorei(k.UNPACK_SKIP_IMAGES,Dn),oe===0&&j.generateMipmaps&&k.generateMipmap(ke),$.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?le.setTextureCube(R,0):R.isData3DTexture?le.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?le.setTexture2DArray(R,0):le.setTexture2D(R,0),$.unbindTexture()},this.resetState=function(){x=0,T=0,L=null,$.reset(),ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $n}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===ze?qi:Lg}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===qi?ze:Cn}}class p1 extends Jg{}p1.prototype.isWebGL1Renderer=!0;class mL extends Nt{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class m1 extends Ut{constructor(e=null,n=1,i=1,r,s,o,a,l,c=At,u=At,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class g1 extends Ut{constructor(e,n,i,r,s,o,a,l,c,u,f,d){super(null,o,a,l,c,u,r,s,f,d),this.isCompressedTexture=!0,this.image={width:n,height:i},this.mipmaps=e,this.flipY=!1,this.generateMipmaps=!1}}class gL extends to{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Dg,this.normalScale=new Ve(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}const ga={enabled:!1,files:{},add:function(t,e){this.enabled!==!1&&(this.files[t]=e)},get:function(t){if(this.enabled!==!1)return this.files[t]},remove:function(t){delete this.files[t]},clear:function(){this.files={}}};class _1{constructor(e,n,i){const r=this;let s=!1,o=0,a=0,l;const c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=n,this.onError=i,this.itemStart=function(u){a++,s===!1&&r.onStart!==void 0&&r.onStart(u,o,a),s=!0},this.itemEnd=function(u){o++,r.onProgress!==void 0&&r.onProgress(u,o,a),o===a&&(s=!1,r.onLoad!==void 0&&r.onLoad())},this.itemError=function(u){r.onError!==void 0&&r.onError(u)},this.resolveURL=function(u){return l?l(u):u},this.setURLModifier=function(u){return l=u,this},this.addHandler=function(u,f){return c.push(u,f),this},this.removeHandler=function(u){const f=c.indexOf(u);return f!==-1&&c.splice(f,2),this},this.getHandler=function(u){for(let f=0,d=c.length;f<d;f+=2){const h=c[f],g=c[f+1];if(h.global&&(h.lastIndex=0),h.test(u))return g}return null}}}const v1=new _1;class io{constructor(e){this.manager=e!==void 0?e:v1,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={}}load(){}loadAsync(e,n){const i=this;return new Promise(function(r,s){i.load(e,r,n,s)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}}const Hn={};class y1 extends Error{constructor(e,n){super(e),this.response=n}}class Qg extends io{constructor(e){super(e)}load(e,n,i,r){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=ga.get(e);if(s!==void 0)return this.manager.itemStart(e),setTimeout(()=>{n&&n(s),this.manager.itemEnd(e)},0),s;if(Hn[e]!==void 0){Hn[e].push({onLoad:n,onProgress:i,onError:r});return}Hn[e]=[],Hn[e].push({onLoad:n,onProgress:i,onError:r});const o=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin"}),a=this.mimeType,l=this.responseType;fetch(o).then(c=>{if(c.status===200||c.status===0){if(c.status===0&&console.warn("THREE.FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||c.body===void 0||c.body.getReader===void 0)return c;const u=Hn[e],f=c.body.getReader(),d=c.headers.get("Content-Length")||c.headers.get("X-File-Size"),h=d?parseInt(d):0,g=h!==0;let v=0;const m=new ReadableStream({start(p){M();function M(){f.read().then(({done:_,value:S})=>{if(_)p.close();else{v+=S.byteLength;const x=new ProgressEvent("progress",{lengthComputable:g,loaded:v,total:h});for(let T=0,L=u.length;T<L;T++){const C=u[T];C.onProgress&&C.onProgress(x)}p.enqueue(S),M()}})}}});return new Response(m)}else throw new y1(`fetch for "${c.url}" responded with ${c.status}: ${c.statusText}`,c)}).then(c=>{switch(l){case"arraybuffer":return c.arrayBuffer();case"blob":return c.blob();case"document":return c.text().then(u=>new DOMParser().parseFromString(u,a));case"json":return c.json();default:if(a===void 0)return c.text();{const f=/charset="?([^;"\s]*)"?/i.exec(a),d=f&&f[1]?f[1].toLowerCase():void 0,h=new TextDecoder(d);return c.arrayBuffer().then(g=>h.decode(g))}}}).then(c=>{ga.add(e,c);const u=Hn[e];delete Hn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onLoad&&h.onLoad(c)}}).catch(c=>{const u=Hn[e];if(u===void 0)throw this.manager.itemError(e),c;delete Hn[e];for(let f=0,d=u.length;f<d;f++){const h=u[f];h.onError&&h.onError(c)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}}class _L extends io{constructor(e){super(e)}load(e,n,i,r){const s=this,o=[],a=new g1,l=new Qg(this.manager);l.setPath(this.path),l.setResponseType("arraybuffer"),l.setRequestHeader(this.requestHeader),l.setWithCredentials(s.withCredentials);let c=0;function u(f){l.load(e[f],function(d){const h=s.parse(d,!0);o[f]={width:h.width,height:h.height,format:h.format,mipmaps:h.mipmaps},c+=1,c===6&&(h.mipmapCount===1&&(a.minFilter=Rt),a.image=o,a.format=h.format,a.needsUpdate=!0,n&&n(a))},i,r)}if(Array.isArray(e))for(let f=0,d=e.length;f<d;++f)u(f);else l.load(e,function(f){const d=s.parse(f,!0);if(d.isCubemap){const h=d.mipmaps.length/d.mipmapCount;for(let g=0;g<h;g++){o[g]={mipmaps:[]};for(let v=0;v<d.mipmapCount;v++)o[g].mipmaps.push(d.mipmaps[g*d.mipmapCount+v]),o[g].format=d.format,o[g].width=d.width,o[g].height=d.height}a.image=o}else a.image.width=d.width,a.image.height=d.height,a.mipmaps=d.mipmaps;d.mipmapCount===1&&(a.minFilter=Rt),a.format=d.format,a.needsUpdate=!0,n&&n(a)},i,r);return a}}class x1 extends io{constructor(e){super(e)}load(e,n,i,r){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const s=this,o=ga.get(e);if(o!==void 0)return s.manager.itemStart(e),setTimeout(function(){n&&n(o),s.manager.itemEnd(e)},0),o;const a=Bs("img");function l(){u(),ga.add(e,this),n&&n(this),s.manager.itemEnd(e)}function c(f){u(),r&&r(f),s.manager.itemError(e),s.manager.itemEnd(e)}function u(){a.removeEventListener("load",l,!1),a.removeEventListener("error",c,!1)}return a.addEventListener("load",l,!1),a.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(a.crossOrigin=this.crossOrigin),s.manager.itemStart(e),a.src=e,a}}class vL extends io{constructor(e){super(e)}load(e,n,i,r){const s=this,o=new m1,a=new Qg(this.manager);return a.setResponseType("arraybuffer"),a.setRequestHeader(this.requestHeader),a.setPath(this.path),a.setWithCredentials(s.withCredentials),a.load(e,function(l){const c=s.parse(l);c&&(c.image!==void 0?o.image=c.image:c.data!==void 0&&(o.image.width=c.width,o.image.height=c.height,o.image.data=c.data),o.wrapS=c.wrapS!==void 0?c.wrapS:Jt,o.wrapT=c.wrapT!==void 0?c.wrapT:Jt,o.magFilter=c.magFilter!==void 0?c.magFilter:Rt,o.minFilter=c.minFilter!==void 0?c.minFilter:Rt,o.anisotropy=c.anisotropy!==void 0?c.anisotropy:1,c.colorSpace!==void 0?o.colorSpace=c.colorSpace:c.encoding!==void 0&&(o.encoding=c.encoding),c.flipY!==void 0&&(o.flipY=c.flipY),c.format!==void 0&&(o.format=c.format),c.type!==void 0&&(o.type=c.type),c.mipmaps!==void 0&&(o.mipmaps=c.mipmaps,o.minFilter=Yr),c.mipmapCount===1&&(o.minFilter=Rt),c.generateMipmaps!==void 0&&(o.generateMipmaps=c.generateMipmaps),o.needsUpdate=!0,n&&n(o,c))},i,r),o}}class yL extends io{constructor(e){super(e)}load(e,n,i,r){const s=new Ut,o=new x1(this.manager);return o.setCrossOrigin(this.crossOrigin),o.setPath(this.path),o.load(e,function(a){s.image=a,s.needsUpdate=!0,n!==void 0&&n(s)},i,r),s}}class e_ extends Nt{constructor(e,n=1){super(),this.isLight=!0,this.type="Light",this.color=new tt(e),this.intensity=n}dispose(){}copy(e,n){return super.copy(e,n),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const n=super.toJSON(e);return n.object.color=this.color.getHex(),n.object.intensity=this.intensity,this.groundColor!==void 0&&(n.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(n.object.distance=this.distance),this.angle!==void 0&&(n.object.angle=this.angle),this.decay!==void 0&&(n.object.decay=this.decay),this.penumbra!==void 0&&(n.object.penumbra=this.penumbra),this.shadow!==void 0&&(n.object.shadow=this.shadow.toJSON()),n}}const Xl=new xt,Rh=new K,Ch=new K;class M1{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ve(512,512),this.map=null,this.mapPass=null,this.matrix=new xt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Cu,this._frameExtents=new Ve(1,1),this._viewportCount=1,this._viewports=[new Tt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const n=this.camera,i=this.matrix;Rh.setFromMatrixPosition(e.matrixWorld),n.position.copy(Rh),Ch.setFromMatrixPosition(e.target.matrixWorld),n.lookAt(Ch),n.updateMatrixWorld(),Xl.multiplyMatrices(n.projectionMatrix,n.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Xl),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Xl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}class E1 extends M1{constructor(){super(new $g(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class xL extends e_{constructor(e,n){super(e,n),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Nt.DEFAULT_UP),this.updateMatrix(),this.target=new Nt,this.shadow=new E1}dispose(){this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}}class ML extends e_{constructor(e,n){super(e,n),this.isAmbientLight=!0,this.type="AmbientLight"}}const Du="\\[\\]\\.:\\/",S1=new RegExp("["+Du+"]","g"),Iu="[^"+Du+"]",b1="[^"+Du.replace("\\.","")+"]",T1=/((?:WC+[\/:])*)/.source.replace("WC",Iu),w1=/(WCOD+)?/.source.replace("WCOD",b1),A1=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",Iu),R1=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",Iu),C1=new RegExp("^"+T1+w1+A1+R1+"$"),P1=["material","materials","bones","map"];class L1{constructor(e,n,i){const r=i||et.parseTrackName(n);this._targetGroup=e,this._bindings=e.subscribe_(n,r)}getValue(e,n){this.bind();const i=this._targetGroup.nCachedObjects_,r=this._bindings[i];r!==void 0&&r.getValue(e,n)}setValue(e,n){const i=this._bindings;for(let r=this._targetGroup.nCachedObjects_,s=i.length;r!==s;++r)i[r].setValue(e,n)}bind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].bind()}unbind(){const e=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=e.length;n!==i;++n)e[n].unbind()}}class et{constructor(e,n,i){this.path=n,this.parsedPath=i||et.parseTrackName(n),this.node=et.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,n,i){return e&&e.isAnimationObjectGroup?new et.Composite(e,n,i):new et(e,n,i)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(S1,"")}static parseTrackName(e){const n=C1.exec(e);if(n===null)throw new Error("PropertyBinding: Cannot parse trackName: "+e);const i={nodeName:n[2],objectName:n[3],objectIndex:n[4],propertyName:n[5],propertyIndex:n[6]},r=i.nodeName&&i.nodeName.lastIndexOf(".");if(r!==void 0&&r!==-1){const s=i.nodeName.substring(r+1);P1.indexOf(s)!==-1&&(i.nodeName=i.nodeName.substring(0,r),i.objectName=s)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("PropertyBinding: can not parse propertyName from trackName: "+e);return i}static findNode(e,n){if(n===void 0||n===""||n==="."||n===-1||n===e.name||n===e.uuid)return e;if(e.skeleton){const i=e.skeleton.getBoneByName(n);if(i!==void 0)return i}if(e.children){const i=function(s){for(let o=0;o<s.length;o++){const a=s[o];if(a.name===n||a.uuid===n)return a;const l=i(a.children);if(l)return l}return null},r=i(e.children);if(r)return r}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,n){e[n]=this.targetObject[this.propertyName]}_getValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)e[n++]=i[r]}_getValue_arrayElement(e,n){e[n]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,n){this.resolvedProperty.toArray(e,n)}_setValue_direct(e,n){this.targetObject[this.propertyName]=e[n]}_setValue_direct_setNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,n){this.targetObject[this.propertyName]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++]}_setValue_array_setNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,n){const i=this.resolvedProperty;for(let r=0,s=i.length;r!==s;++r)i[r]=e[n++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,n){this.resolvedProperty[this.propertyIndex]=e[n]}_setValue_arrayElement_setNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty[this.propertyIndex]=e[n],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,n){this.resolvedProperty.fromArray(e,n)}_setValue_fromArray_setNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,n){this.resolvedProperty.fromArray(e,n),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,n){this.bind(),this.getValue(e,n)}_setValue_unbound(e,n){this.bind(),this.setValue(e,n)}bind(){let e=this.node;const n=this.parsedPath,i=n.objectName,r=n.propertyName;let s=n.propertyIndex;if(e||(e=et.findNode(this.rootNode,n.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){console.error("THREE.PropertyBinding: Trying to update node for track: "+this.path+" but it wasn't found.");return}if(i){let c=n.objectIndex;switch(i){case"materials":if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){console.error("THREE.PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){console.error("THREE.PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let u=0;u<e.length;u++)if(e[u].name===c){c=u;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){console.error("THREE.PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){console.error("THREE.PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[i]===void 0){console.error("THREE.PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[i]}if(c!==void 0){if(e[c]===void 0){console.error("THREE.PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}const o=e[r];if(o===void 0){const c=n.nodeName;console.error("THREE.PropertyBinding: Trying to update property for track: "+c+"."+r+" but it wasn't found.",e);return}let a=this.Versioning.None;this.targetObject=e,e.needsUpdate!==void 0?a=this.Versioning.NeedsUpdate:e.matrixWorldNeedsUpdate!==void 0&&(a=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(s!==void 0){if(r==="morphTargetInfluences"){if(!e.geometry){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){console.error("THREE.PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[s]!==void 0&&(s=e.morphTargetDictionary[s])}l=this.BindingType.ArrayElement,this.resolvedProperty=o,this.propertyIndex=s}else o.fromArray!==void 0&&o.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=o):Array.isArray(o)?(l=this.BindingType.EntireArray,this.resolvedProperty=o):this.propertyName=r;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][a]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}}et.Composite=L1;et.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};et.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};et.prototype.GetterByBindingType=[et.prototype._getValue_direct,et.prototype._getValue_array,et.prototype._getValue_arrayElement,et.prototype._getValue_toArray];et.prototype.SetterByBindingTypeAndVersioning=[[et.prototype._setValue_direct,et.prototype._setValue_direct_setNeedsUpdate,et.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[et.prototype._setValue_array,et.prototype._setValue_array_setNeedsUpdate,et.prototype._setValue_array_setMatrixWorldNeedsUpdate],[et.prototype._setValue_arrayElement,et.prototype._setValue_arrayElement_setNeedsUpdate,et.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[et.prototype._setValue_fromArray,et.prototype._setValue_fromArray_setNeedsUpdate,et.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];class t_{constructor(e){this.value=e}clone(){return new t_(this.value.clone===void 0?this.value:this.value.clone())}}class Ph{constructor(e=1,n=0,i=0){return this.radius=e,this.phi=n,this.theta=i,this}set(e,n,i){return this.radius=e,this.phi=n,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,n,i){return this.radius=Math.sqrt(e*e+n*n+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(Ct(n/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Tu}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Tu);function D1(t){return new sn(70,t,.1,1e4)}const Lh={type:"change"},jl={type:"start"},Dh={type:"end"};class I1 extends rr{constructor(e,n){super(),this.object=e,this.domElement=n,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new K,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:lr.ROTATE,MIDDLE:lr.DOLLY,RIGHT:lr.PAN},this.touches={ONE:cr.ROTATE,TWO:cr.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(D){D.addEventListener("keydown",ae),this._domElementKeyEvents=D},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",ae),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(Lh),i.update(),s=r.NONE},this.update=function(){const D=new K,te=new er().setFromUnitVectors(e.up,new K(0,1,0)),fe=te.clone().invert(),J=new K,Ae=new er,Pe=new K,Le=2*Math.PI;return function(){const Re=i.object.position;D.copy(Re).sub(i.target),D.applyQuaternion(te),a.setFromVector3(D),i.autoRotate&&s===r.NONE&&y(L()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let ve=i.minAzimuthAngle,De=i.maxAzimuthAngle;return isFinite(ve)&&isFinite(De)&&(ve<-Math.PI?ve+=Le:ve>Math.PI&&(ve-=Le),De<-Math.PI?De+=Le:De>Math.PI&&(De-=Le),ve<=De?a.theta=Math.max(ve,Math.min(De,a.theta)):a.theta=a.theta>(ve+De)/2?Math.max(ve,a.theta):Math.min(De,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=c,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(u,i.dampingFactor):i.target.add(u),D.setFromSpherical(a),D.applyQuaternion(fe),Re.copy(i.target).add(D),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,u.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),u.set(0,0,0)),c=1,f||J.distanceToSquared(i.object.position)>o||8*(1-Ae.dot(i.object.quaternion))>o||Pe.distanceToSquared(i.target)>0?(i.dispatchEvent(Lh),J.copy(i.object.position),Ae.copy(i.object.quaternion),Pe.copy(i.target),f=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",w),i.domElement.removeEventListener("pointerdown",P),i.domElement.removeEventListener("pointercancel",$),i.domElement.removeEventListener("wheel",le),i.domElement.removeEventListener("pointermove",N),i.domElement.removeEventListener("pointerup",$),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",ae),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new Ph,l=new Ph;let c=1;const u=new K;let f=!1;const d=new Ve,h=new Ve,g=new Ve,v=new Ve,m=new Ve,p=new Ve,M=new Ve,_=new Ve,S=new Ve,x=[],T={};function L(){return 2*Math.PI/60/60*i.autoRotateSpeed}function C(){return Math.pow(.95,i.zoomSpeed)}function y(D){l.theta-=D}function b(D){l.phi-=D}const F=function(){const D=new K;return function(te,fe){D.setFromMatrixColumn(fe,0),D.multiplyScalar(-te),u.add(D)}}(),B=function(){const D=new K;return function(te,fe){i.screenSpacePanning===!0?D.setFromMatrixColumn(fe,1):(D.setFromMatrixColumn(fe,0),D.crossVectors(i.object.up,D)),D.multiplyScalar(te),u.add(D)}}(),I=function(){const D=new K;return function(te,fe){const J=i.domElement;if(i.object.isPerspectiveCamera){const Ae=i.object.position;D.copy(Ae).sub(i.target);let Pe=D.length();Pe*=Math.tan(i.object.fov/2*Math.PI/180),F(2*te*Pe/J.clientHeight,i.object.matrix),B(2*fe*Pe/J.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(F(te*(i.object.right-i.object.left)/i.object.zoom/J.clientWidth,i.object.matrix),B(fe*(i.object.top-i.object.bottom)/i.object.zoom/J.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function G(D){i.object.isPerspectiveCamera?c/=D:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*D)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function X(D){i.object.isPerspectiveCamera?c*=D:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/D)),i.object.updateProjectionMatrix(),f=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function V(D){d.set(D.clientX,D.clientY)}function W(D){M.set(D.clientX,D.clientY)}function H(D){v.set(D.clientX,D.clientY)}function ce(D){h.set(D.clientX,D.clientY),g.subVectors(h,d).multiplyScalar(i.rotateSpeed);const te=i.domElement;y(2*Math.PI*g.x/te.clientHeight),b(2*Math.PI*g.y/te.clientHeight),d.copy(h),i.update()}function he(D){_.set(D.clientX,D.clientY),S.subVectors(_,M),S.y>0?G(C()):S.y<0&&X(C()),M.copy(_),i.update()}function Ee(D){m.set(D.clientX,D.clientY),p.subVectors(m,v).multiplyScalar(i.panSpeed),I(p.x,p.y),v.copy(m),i.update()}function q(D){D.deltaY<0?X(C()):D.deltaY>0&&G(C()),i.update()}function pe(D){let te=!1;switch(D.code){case i.keys.UP:D.ctrlKey||D.metaKey||D.shiftKey?b(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:D.ctrlKey||D.metaKey||D.shiftKey?b(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:D.ctrlKey||D.metaKey||D.shiftKey?y(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:D.ctrlKey||D.metaKey||D.shiftKey?y(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):I(-i.keyPanSpeed,0),te=!0;break}te&&(D.preventDefault(),i.update())}function me(){if(x.length===1)d.set(x[0].pageX,x[0].pageY);else{const D=.5*(x[0].pageX+x[1].pageX),te=.5*(x[0].pageY+x[1].pageY);d.set(D,te)}}function Se(){if(x.length===1)v.set(x[0].pageX,x[0].pageY);else{const D=.5*(x[0].pageX+x[1].pageX),te=.5*(x[0].pageY+x[1].pageY);v.set(D,te)}}function _e(){const D=x[0].pageX-x[1].pageX,te=x[0].pageY-x[1].pageY,fe=Math.sqrt(D*D+te*te);M.set(0,fe)}function z(){i.enableZoom&&_e(),i.enablePan&&Se()}function de(){i.enableZoom&&_e(),i.enableRotate&&me()}function se(D){if(x.length==1)h.set(D.pageX,D.pageY);else{const fe=ne(D),J=.5*(D.pageX+fe.x),Ae=.5*(D.pageY+fe.y);h.set(J,Ae)}g.subVectors(h,d).multiplyScalar(i.rotateSpeed);const te=i.domElement;y(2*Math.PI*g.x/te.clientHeight),b(2*Math.PI*g.y/te.clientHeight),d.copy(h)}function ye(D){if(x.length===1)m.set(D.pageX,D.pageY);else{const te=ne(D),fe=.5*(D.pageX+te.x),J=.5*(D.pageY+te.y);m.set(fe,J)}p.subVectors(m,v).multiplyScalar(i.panSpeed),I(p.x,p.y),v.copy(m)}function we(D){const te=ne(D),fe=D.pageX-te.x,J=D.pageY-te.y,Ae=Math.sqrt(fe*fe+J*J);_.set(0,Ae),S.set(0,Math.pow(_.y/M.y,i.zoomSpeed)),G(S.y),M.copy(_)}function k(D){i.enableZoom&&we(D),i.enablePan&&ye(D)}function A(D){i.enableZoom&&we(D),i.enableRotate&&se(D)}function P(D){i.enabled!==!1&&(x.length===0&&(i.domElement.setPointerCapture(D.pointerId),i.domElement.addEventListener("pointermove",N),i.domElement.addEventListener("pointerup",$)),E(D),D.pointerType==="touch"?ge(D):Z(D))}function N(D){i.enabled!==!1&&(D.pointerType==="touch"?ue(D):ie(D))}function $(D){O(D),x.length===0&&(i.domElement.releasePointerCapture(D.pointerId),i.domElement.removeEventListener("pointermove",N),i.domElement.removeEventListener("pointerup",$)),i.dispatchEvent(Dh),s=r.NONE}function Z(D){let te;switch(D.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case lr.DOLLY:if(i.enableZoom===!1)return;W(D),s=r.DOLLY;break;case lr.ROTATE:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enablePan===!1)return;H(D),s=r.PAN}else{if(i.enableRotate===!1)return;V(D),s=r.ROTATE}break;case lr.PAN:if(D.ctrlKey||D.metaKey||D.shiftKey){if(i.enableRotate===!1)return;V(D),s=r.ROTATE}else{if(i.enablePan===!1)return;H(D),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(jl)}function ie(D){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;ce(D);break;case r.DOLLY:if(i.enableZoom===!1)return;he(D);break;case r.PAN:if(i.enablePan===!1)return;Ee(D);break}}function le(D){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(D.preventDefault(),i.dispatchEvent(jl),q(D),i.dispatchEvent(Dh))}function ae(D){i.enabled===!1||i.enablePan===!1||pe(D)}function ge(D){switch(ee(D),x.length){case 1:switch(i.touches.ONE){case cr.ROTATE:if(i.enableRotate===!1)return;me(),s=r.TOUCH_ROTATE;break;case cr.PAN:if(i.enablePan===!1)return;Se(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case cr.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;z(),s=r.TOUCH_DOLLY_PAN;break;case cr.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;de(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(jl)}function ue(D){switch(ee(D),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;se(D),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;ye(D),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;k(D),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;A(D),i.update();break;default:s=r.NONE}}function w(D){i.enabled!==!1&&D.preventDefault()}function E(D){x.push(D)}function O(D){delete T[D.pointerId];for(let te=0;te<x.length;te++)if(x[te].pointerId==D.pointerId){x.splice(te,1);return}}function ee(D){let te=T[D.pointerId];te===void 0&&(te=new Ve,T[D.pointerId]=te),te.set(D.pageX,D.pageY)}function ne(D){const te=D.pointerId===x[0].pointerId?x[1]:x[0];return T[te.pointerId]}i.domElement.addEventListener("contextmenu",w),i.domElement.addEventListener("pointerdown",P),i.domElement.addEventListener("pointercancel",$),i.domElement.addEventListener("wheel",le,{passive:!1}),this.update()}}function U1(t){const{scene:e,...n}=t,i=1,r=1,s=i/r,o=D1(s);o.position.set(-3,2,-4);const a=new Jg(n);a.setSize(i,r);const l=()=>a.render(e,o),c=new I1(o,a.domElement);return{camera:o,renderer:a,render:l,orbit:c}}const N1=Pn({__name:"perspective",props:{scene:{},antialias:{type:Boolean,default:!0},precision:{default:"highp"},powerPreference:{default:"default"}},setup(t,{expose:e}){const n=t,i=ct(),{orbit:r,render:s,camera:o,renderer:a}=U1(n);e({orbit:r,render:s,camera:o,renderer:a});let l;function c(u,f){const d=u[0],{width:h,height:g}=d.contentRect;o.aspect=h/g,o.updateProjectionMatrix(),a.setSize(h,g-0),s()}return Xs(()=>{if(!i.value)throw new Error("Missing HTMLDivElement!");i.value.appendChild(a.domElement),s(),r.addEventListener("change",s),l=new ResizeObserver(c),l.observe(i.value)}),lu(()=>{r.removeEventListener("change",s),l==null||l.disconnect()}),(u,f)=>(vn(),a0("div",{ref_key:"container",ref:i,class:"three-perspective-container"},null,512))}}),O1=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},F1=O1(N1,[["__scopeId","data-v-1903d6da"]]),B1=En(t=>{t.vueApp.component("Perspective",F1)});function k1(t,e){let n;function i(){n=Sa(),n.run(()=>e.length?e(()=>{n==null||n.stop(),i()}):e())}Gt(t,r=>{r&&!n?i():r||(n==null||n.stop(),n=void 0)},{immediate:!0}),xp(()=>{n==null||n.stop()})}const ln=typeof window<"u",EL=ln&&"IntersectionObserver"in window,H1=ln&&("ontouchstart"in window||window.navigator.maxTouchPoints>0);function z1(t,e,n){const i=e.length-1;if(i<0)return t===void 0?n:t;for(let r=0;r<i;r++){if(t==null)return n;t=t[e[r]]}return t==null||t[e[i]]===void 0?n:t[e[i]]}function V1(t,e){if(t===e)return!0;if(t instanceof Date&&e instanceof Date&&t.getTime()!==e.getTime()||t!==Object(t)||e!==Object(e))return!1;const n=Object.keys(t);return n.length!==Object.keys(e).length?!1:n.every(i=>V1(t[i],e[i]))}function Ih(t,e,n){return t==null||!e||typeof e!="string"?n:t[e]!==void 0?t[e]:(e=e.replace(/\[(\w+)\]/g,".$1"),e=e.replace(/^\./,""),z1(t,e.split("."),n))}function n_(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0;return Array.from({length:t},(n,i)=>e+i)}function Ho(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"px";if(!(t==null||t===""))return isNaN(+t)?String(t):isFinite(+t)?`${Number(t)}${e}`:void 0}function Uh(t){return t!==null&&typeof t=="object"&&!Array.isArray(t)}function Nh(t){if(t&&"$el"in t){const e=t.$el;return(e==null?void 0:e.nodeType)===Node.TEXT_NODE?e.nextElementSibling:e}return t}const SL=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function $l(t,e){return e.every(n=>t.hasOwnProperty(n))}function G1(t,e){const n={},i=new Set(Object.keys(t));for(const r of e)i.has(r)&&(n[r]=t[r]);return n}function bL(t){return t==null?[]:Array.isArray(t)?t:[t]}function W1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1;return Math.max(e,Math.min(n,t))}function Oh(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0";return t+n.repeat(Math.max(0,e-t.length))}function Fh(t,e){return(arguments.length>2&&arguments[2]!==void 0?arguments[2]:"0").repeat(Math.max(0,e-t.length))+t}function X1(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:1;const n=[];let i=0;for(;i<t.length;)n.push(t.substr(i,e)),i+=e;return n}function Qt(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2?arguments[2]:void 0;const i={};for(const r in t)i[r]=t[r];for(const r in e){const s=t[r],o=e[r];if(Uh(s)&&Uh(o)){i[r]=Qt(s,o,n);continue}if(Array.isArray(s)&&Array.isArray(o)&&n){i[r]=n(s,o);continue}i[r]=o}return i}function j1(t){return t.map(e=>e.type===Dt?j1(e.children):e).flat()}function Zi(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"";if(Zi.cache.has(t))return Zi.cache.get(t);const e=t.replace(/[^a-z]/gi,"-").replace(/\B([A-Z])/g,"-$1").toLowerCase();return Zi.cache.set(t,e),e}Zi.cache=new Map;function Zo(t,e){if(!e||typeof e!="object")return[];if(Array.isArray(e))return e.map(n=>Zo(t,n)).flat(1);if(Array.isArray(e.children))return e.children.map(n=>Zo(t,n)).flat(1);if(e.component){if(Object.getOwnPropertySymbols(e.component.provides).includes(t))return[e.component];if(e.component.subTree)return Zo(t,e.component.subTree).flat(1)}return[]}function TL(t){const e=vt({}),n=Fe(t);return Ca(()=>{for(const i in n.value)e[i]=n.value[i]},{flush:"sync"}),Jc(e)}function wL(t,e){return t.includes(e)}function AL(t,e){return e="on"+Vs(e),!!(t[e]||t[`${e}Once`]||t[`${e}Capture`]||t[`${e}OnceCapture`]||t[`${e}CaptureOnce`])}const wr=2.4,Bh=.2126729,kh=.7151522,Hh=.072175,$1=.55,q1=.58,Y1=.57,K1=.62,zo=.03,zh=1.45,Z1=5e-4,J1=1.25,Q1=1.25,Vh=.078,Gh=12.82051282051282,Vo=.06,Wh=.001;function Xh(t,e){const n=(t.r/255)**wr,i=(t.g/255)**wr,r=(t.b/255)**wr,s=(e.r/255)**wr,o=(e.g/255)**wr,a=(e.b/255)**wr;let l=n*Bh+i*kh+r*Hh,c=s*Bh+o*kh+a*Hh;if(l<=zo&&(l+=(zo-l)**zh),c<=zo&&(c+=(zo-c)**zh),Math.abs(c-l)<Z1)return 0;let u;if(c>l){const f=(c**$1-l**q1)*J1;u=f<Wh?0:f<Vh?f-f*Gh*Vo:f-Vo}else{const f=(c**K1-l**Y1)*Q1;u=f>-Wh?0:f>-Vh?f-f*Gh*Vo:f+Vo}return u*100}const _a=.20689655172413793,eC=t=>t>_a**3?Math.cbrt(t):t/(3*_a**2)+4/29,tC=t=>t>_a?t**3:3*_a**2*(t-4/29);function i_(t){const e=eC,n=e(t[1]);return[116*n-16,500*(e(t[0]/.95047)-n),200*(n-e(t[2]/1.08883))]}function r_(t){const e=tC,n=(t[0]+16)/116;return[e(n+t[1]/500)*.95047,e(n),e(n-t[2]/200)*1.08883]}const nC=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],iC=t=>t<=.0031308?t*12.92:1.055*t**(1/2.4)-.055,rC=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],sC=t=>t<=.04045?t/12.92:((t+.055)/1.055)**2.4;function s_(t){const e=Array(3),n=iC,i=nC;for(let r=0;r<3;++r)e[r]=Math.round(W1(n(i[r][0]*t[0]+i[r][1]*t[1]+i[r][2]*t[2]))*255);return{r:e[0],g:e[1],b:e[2]}}function Uu(t){let{r:e,g:n,b:i}=t;const r=[0,0,0],s=sC,o=rC;e=s(e/255),n=s(n/255),i=s(i/255);for(let a=0;a<3;++a)r[a]=o[a][0]*e+o[a][1]*n+o[a][2]*i;return r}function oC(t){return!!t&&/^(#|var\(--|(rgb|hsl)a?\()/.test(t)}function RL(t){return oC(t)&&!/^((rgb|hsl)a?\()?var\(--/.test(t)}const jh=/^(?<fn>(?:rgb|hsl)a?)\((?<values>.+)\)/,aC={rgb:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),rgba:(t,e,n,i)=>({r:t,g:e,b:n,a:i}),hsl:(t,e,n,i)=>$h({h:t,s:e,l:n,a:i}),hsla:(t,e,n,i)=>$h({h:t,s:e,l:n,a:i}),hsv:(t,e,n,i)=>ks({h:t,s:e,v:n,a:i}),hsva:(t,e,n,i)=>ks({h:t,s:e,v:n,a:i})};function qn(t){if(typeof t=="number")return{r:(t&16711680)>>16,g:(t&65280)>>8,b:t&255};if(typeof t=="string"&&jh.test(t)){const{groups:e}=t.match(jh),{fn:n,values:i}=e,r=i.split(/,\s*/).map(s=>s.endsWith("%")&&["hsl","hsla","hsv","hsva"].includes(n)?parseFloat(s)/100:parseFloat(s));return aC[n](...r)}else if(typeof t=="string"){let e=t.startsWith("#")?t.slice(1):t;return[3,4].includes(e.length)?e=e.split("").map(n=>n+n).join(""):[6,8].includes(e.length),cC(e)}else if(typeof t=="object"){if($l(t,["r","g","b"]))return t;if($l(t,["h","s","l"]))return ks(o_(t));if($l(t,["h","s","v"]))return ks(t)}throw new TypeError(`Invalid color: ${t==null?t:String(t)||t.constructor.name}
Expected #hex, #hexa, rgb(), rgba(), hsl(), hsla(), object or number`)}function ks(t){const{h:e,s:n,v:i,a:r}=t,s=a=>{const l=(a+e/60)%6;return i-i*n*Math.max(Math.min(l,4-l,1),0)},o=[s(5),s(3),s(1)].map(a=>Math.round(a*255));return{r:o[0],g:o[1],b:o[2],a:r}}function $h(t){return ks(o_(t))}function o_(t){const{h:e,s:n,l:i,a:r}=t,s=i+n*Math.min(i,1-i),o=s===0?0:2-2*i/s;return{h:e,s:o,v:s,a:r}}function Go(t){const e=Math.round(t).toString(16);return("00".substr(0,2-e.length)+e).toUpperCase()}function lC(t){let{r:e,g:n,b:i,a:r}=t;return`#${[Go(e),Go(n),Go(i),r!==void 0?Go(Math.round(r*255)):""].join("")}`}function cC(t){t=uC(t);let[e,n,i,r]=X1(t,2).map(s=>parseInt(s,16));return r=r===void 0?r:r/255,{r:e,g:n,b:i,a:r}}function uC(t){return t.startsWith("#")&&(t=t.slice(1)),t=t.replace(/([^0-9a-f])/gi,"F"),(t.length===3||t.length===4)&&(t=t.split("").map(e=>e+e).join("")),t.length!==6&&(t=Oh(Oh(t,6),8,"F")),t}function fC(t,e){const n=i_(Uu(t));return n[0]=n[0]+e*10,s_(r_(n))}function dC(t,e){const n=i_(Uu(t));return n[0]=n[0]-e*10,s_(r_(n))}function hC(t){const e=qn(t);return Uu(e)[1]}function pC(t){const e=Math.abs(Xh(qn(0),qn(t)));return Math.abs(Xh(qn(16777215),qn(t)))>Math.min(e,50)?"#fff":"#000"}function or(t,e){return n=>Object.keys(t).reduce((i,r)=>{const o=typeof t[r]=="object"&&t[r]!=null&&!Array.isArray(t[r])?t[r]:{type:t[r]};return n&&r in n?i[r]={...o,default:n[r]}:i[r]=o,e&&!i[r].source&&(i[r].source=e),i},{})}const mC=or({class:[String,Array],style:{type:[String,Array,Object],default:null}},"component"),Jr=Symbol.for("vuetify:defaults");function gC(t){return ct(t)}function Nu(){const t=st(Jr);if(!t)throw new Error("[Vuetify] Could not find defaults instance");return t}function CL(t,e){const n=Nu(),i=ct(t),r=Fe(()=>{if(Ze(e==null?void 0:e.disabled))return n.value;const o=Ze(e==null?void 0:e.scoped),a=Ze(e==null?void 0:e.reset),l=Ze(e==null?void 0:e.root);if(i.value==null&&!(o||a||l))return n.value;let c=Qt(i.value,{prev:n.value});if(o)return c;if(a||l){const u=Number(a||1/0);for(let f=0;f<=u&&!(!c||!("prev"in c));f++)c=c.prev;return c&&typeof l=="string"&&l in c&&(c=Qt(Qt(c,{prev:c}),c[l])),c}return c.prev?Qt(c.prev,c):c});return un(Jr,r),r}function _C(t,e){var n,i;return typeof((n=t.props)==null?void 0:n[e])<"u"||typeof((i=t.props)==null?void 0:i[Zi(e)])<"u"}function vC(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:Nu();const i=Qn("useDefaults");if(e=e??i.type.name??i.type.__name,!e)throw new Error("[Vuetify] Could not determine component name");const r=Fe(()=>{var l;return(l=n.value)==null?void 0:l[t._as??e]}),s=new Proxy(t,{get(l,c){var f,d,h,g;const u=Reflect.get(l,c);return c==="class"||c==="style"?[(f=r.value)==null?void 0:f[c],u].filter(v=>v!=null):typeof c=="string"&&!_C(i.vnode,c)?((d=r.value)==null?void 0:d[c])??((g=(h=n.value)==null?void 0:h.global)==null?void 0:g[c])??u:u}}),o=en();Ca(()=>{if(r.value){const l=Object.entries(r.value).filter(c=>{let[u]=c;return u.startsWith(u[0].toUpperCase())});o.value=l.length?Object.fromEntries(l):void 0}else o.value=void 0});function a(){const l=yC(Jr,i);un(Jr,Fe(()=>o.value?Qt((l==null?void 0:l.value)??{},o.value):l==null?void 0:l.value))}return{props:s,provideSubDefaults:a}}function ro(t){if(t._setup=t._setup??t.setup,!t.name)return t;if(t._setup){t.props=or(t.props??{},t.name)();const e=Object.keys(t.props).filter(n=>n!=="class"&&n!=="style");t.filterProps=function(i){return G1(i,e)},t.props._as=String,t.setup=function(i,r){const s=Nu();if(!s.value)return t._setup(i,r);const{props:o,provideSubDefaults:a}=vC(i,i._as??t.name,s),l=t._setup(o,r);return a(),l}}return t}function a_(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return e=>(t?ro:Pn)(e)}function Qn(t,e){const n=$s();if(!n)throw new Error(`[Vuetify] ${t} ${e||"must be called from inside a setup function"}`);return n}function PL(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"composables";const e=Qn(t).type;return Zi((e==null?void 0:e.aliasName)||(e==null?void 0:e.name))}let l_=0,Jo=new WeakMap;function Ou(){const t=Qn("getUid");if(Jo.has(t))return Jo.get(t);{const e=l_++;return Jo.set(t,e),e}}Ou.reset=()=>{l_=0,Jo=new WeakMap};function yC(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Qn("injectSelf");const{provides:n}=e;if(n&&t in n)return n[t]}function xC(t){const e=Qn("useRender");e.render=t}function MC(t,e,n){let i=arguments.length>3&&arguments[3]!==void 0?arguments[3]:f=>f,r=arguments.length>4&&arguments[4]!==void 0?arguments[4]:f=>f;const s=Qn("useProxiedModel"),o=ct(t[e]!==void 0?t[e]:n),a=Zi(e),c=Fe(a!==e?()=>{var f,d,h,g;return t[e],!!(((f=s.vnode.props)!=null&&f.hasOwnProperty(e)||(d=s.vnode.props)!=null&&d.hasOwnProperty(a))&&((h=s.vnode.props)!=null&&h.hasOwnProperty(`onUpdate:${e}`)||(g=s.vnode.props)!=null&&g.hasOwnProperty(`onUpdate:${a}`)))}:()=>{var f,d;return t[e],!!((f=s.vnode.props)!=null&&f.hasOwnProperty(e)&&((d=s.vnode.props)!=null&&d.hasOwnProperty(`onUpdate:${e}`)))});k1(()=>!c.value,()=>{Gt(()=>t[e],f=>{o.value=f})});const u=Fe({get(){const f=t[e];return i(c.value?f:o.value)},set(f){const d=r(f),h=je(c.value?t[e]:o.value);h===d||i(h)===f||(o.value=d,s==null||s.emit(`update:${e}`,d))}});return Object.defineProperty(u,"externalValue",{get:()=>c.value?t[e]:o.value}),u}const EC={badge:"Badge",open:"Open",close:"Close",confirmEdit:{ok:"OK",cancel:"Cancel"},dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},dateRangeInput:{divider:"to"},datePicker:{itemsSelected:"{0} selected",range:{title:"Select dates",header:"Enter dates"},title:"Select date",header:"Enter date",input:{placeholder:"Enter date"}},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more",today:"Today"},input:{clear:"Clear {0}",prependAction:"{0} prepended action",appendAction:"{0} appended action",otp:"Please enter OTP character {0}"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{root:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Go to page {0}",currentPage:"Page {0}, Current page",first:"First page",last:"Last page"}},stepper:{next:"Next",prev:"Previous"},rating:{ariaLabel:{item:"Rating {0} of {1}"}},loading:"Loading...",infiniteScroll:{loadMore:"Load more",empty:"No more"}},qh="$vuetify.",Yh=(t,e)=>t.replace(/\{(\d+)\}/g,(n,i)=>String(e[+i])),c_=(t,e,n)=>function(i){for(var r=arguments.length,s=new Array(r>1?r-1:0),o=1;o<r;o++)s[o-1]=arguments[o];if(!i.startsWith(qh))return Yh(i,s);const a=i.replace(qh,""),l=t.value&&n.value[t.value],c=e.value&&n.value[e.value];let u=Ih(l,a,null);return u||(`${i}${t.value}`,u=Ih(c,a,null)),u||(u=i),typeof u!="string"&&(u=i),Yh(u,s)};function u_(t,e){return(n,i)=>new Intl.NumberFormat([t.value,e.value],i).format(n)}function ql(t,e,n){const i=MC(t,e,t[e]??n.value);return i.value=t[e]??n.value,Gt(n,r=>{t[e]==null&&(i.value=n.value)}),i}function f_(t){return e=>{const n=ql(e,"locale",t.current),i=ql(e,"fallback",t.fallback),r=ql(e,"messages",t.messages);return{name:"vuetify",current:n,fallback:i,messages:r,t:c_(n,i,r),n:u_(n,i),provide:f_({current:n,fallback:i,messages:r})}}}function SC(t){const e=en((t==null?void 0:t.locale)??"en"),n=en((t==null?void 0:t.fallback)??"en"),i=ct({en:EC,...t==null?void 0:t.messages});return{name:"vuetify",current:e,fallback:n,messages:i,t:c_(e,n,i),n:u_(e,n),provide:f_({current:e,fallback:n,messages:i})}}const Oc=Symbol.for("vuetify:locale");function bC(t){return t.name!=null}function TC(t){const e=t!=null&&t.adapter&&bC(t==null?void 0:t.adapter)?t==null?void 0:t.adapter:SC(t),n=AC(e,t);return{...e,...n}}function wC(){return{af:!1,ar:!0,bg:!1,ca:!1,ckb:!1,cs:!1,de:!1,el:!1,en:!1,es:!1,et:!1,fa:!0,fi:!1,fr:!1,hr:!1,hu:!1,he:!0,id:!1,it:!1,ja:!1,km:!1,ko:!1,lv:!1,lt:!1,nl:!1,no:!1,pl:!1,pt:!1,ro:!1,ru:!1,sk:!1,sl:!1,srCyrl:!1,srLatn:!1,sv:!1,th:!1,tr:!1,az:!1,uk:!1,vi:!1,zhHans:!1,zhHant:!1}}function AC(t,e){const n=ct((e==null?void 0:e.rtl)??wC()),i=Fe(()=>n.value[t.current.value]??!1);return{isRtl:i,rtl:n,rtlClasses:Fe(()=>`v-locale--is-${i.value?"rtl":"ltr"}`)}}function RC(){const t=st(Oc);if(!t)throw new Error("[Vuetify] Could not find injected rtl instance");return{isRtl:t.isRtl,rtlClasses:t.rtlClasses}}const Fc={"001":1,AD:1,AE:6,AF:6,AG:0,AI:1,AL:1,AM:1,AN:1,AR:1,AS:0,AT:1,AU:1,AX:1,AZ:1,BA:1,BD:0,BE:1,BG:1,BH:6,BM:1,BN:1,BR:0,BS:0,BT:0,BW:0,BY:1,BZ:0,CA:0,CH:1,CL:1,CM:1,CN:1,CO:0,CR:1,CY:1,CZ:1,DE:1,DJ:6,DK:1,DM:0,DO:0,DZ:6,EC:1,EE:1,EG:6,ES:1,ET:0,FI:1,FJ:1,FO:1,FR:1,GB:1,"GB-alt-variant":0,GE:1,GF:1,GP:1,GR:1,GT:0,GU:0,HK:0,HN:0,HR:1,HU:1,ID:0,IE:1,IL:0,IN:0,IQ:6,IR:6,IS:1,IT:1,JM:0,JO:6,JP:0,KE:0,KG:1,KH:0,KR:0,KW:6,KZ:1,LA:0,LB:1,LI:1,LK:1,LT:1,LU:1,LV:1,LY:6,MC:1,MD:1,ME:1,MH:0,MK:1,MM:0,MN:1,MO:0,MQ:1,MT:0,MV:5,MX:0,MY:1,MZ:0,NI:0,NL:1,NO:1,NP:0,NZ:1,OM:6,PA:0,PE:0,PH:0,PK:0,PL:1,PR:0,PT:0,PY:0,QA:6,RE:1,RO:1,RS:1,RU:1,SA:0,SD:6,SE:1,SG:0,SI:1,SK:1,SM:1,SV:0,SY:6,TH:0,TJ:1,TM:1,TR:1,TT:0,TW:0,UA:1,UM:0,US:0,UY:1,UZ:1,VA:1,VE:0,VI:0,VN:1,WS:0,XK:1,YE:0,ZA:0,ZW:0};function CC(t,e){const n=[];let i=[];const r=d_(t),s=h_(t),o=(r.getDay()-Fc[e.slice(-2).toUpperCase()]+7)%7,a=(s.getDay()-Fc[e.slice(-2).toUpperCase()]+7)%7;for(let l=0;l<o;l++){const c=new Date(r);c.setDate(c.getDate()-(o-l)),i.push(c)}for(let l=1;l<=s.getDate();l++){const c=new Date(t.getFullYear(),t.getMonth(),l);i.push(c),i.length===7&&(n.push(i),i=[])}for(let l=1;l<7-a;l++){const c=new Date(s);c.setDate(c.getDate()+l),i.push(c)}return i.length>0&&n.push(i),n}function PC(t){const e=new Date(t);for(;e.getDay()!==0;)e.setDate(e.getDate()-1);return e}function LC(t){const e=new Date(t);for(;e.getDay()!==6;)e.setDate(e.getDate()+1);return e}function d_(t){return new Date(t.getFullYear(),t.getMonth(),1)}function h_(t){return new Date(t.getFullYear(),t.getMonth()+1,0)}function DC(t){const e=t.split("-").map(Number);return new Date(e[0],e[1]-1,e[2])}const IC=/^([12]\d{3}-([1-9]|0[1-9]|1[0-2])-([1-9]|0[1-9]|[12]\d|3[01]))$/;function p_(t){if(t==null)return new Date;if(t instanceof Date)return t;if(typeof t=="string"){let e;if(IC.test(t))return DC(t);if(e=Date.parse(t),!isNaN(e))return new Date(e)}return null}const Kh=new Date(2e3,0,2);function UC(t){const e=Fc[t.slice(-2).toUpperCase()];return n_(7).map(n=>{const i=new Date(Kh);return i.setDate(Kh.getDate()+e+n),new Intl.DateTimeFormat(t,{weekday:"narrow"}).format(i)})}function NC(t,e,n,i){const r=p_(t)??new Date,s=i==null?void 0:i[e];if(typeof s=="function")return s(r,e,n);let o={};switch(e){case"fullDateWithWeekday":o={weekday:"long",day:"numeric",month:"long",year:"numeric"};break;case"hours12h":o={hour:"numeric",hour12:!0};break;case"normalDateWithWeekday":o={weekday:"short",day:"numeric",month:"short"};break;case"keyboardDate":o={day:"2-digit",month:"2-digit",year:"numeric"};break;case"monthAndDate":o={month:"long",day:"numeric"};break;case"monthAndYear":o={month:"long",year:"numeric"};break;case"month":o={month:"long"};break;case"monthShort":o={month:"short"};break;case"dayOfMonth":return new Intl.NumberFormat(n).format(r.getDate());case"shortDate":o={year:"2-digit",month:"numeric",day:"numeric"};break;case"weekdayShort":o={weekday:"short"};break;case"year":o={year:"numeric"};break;default:o=s??{timeZone:"UTC",timeZoneName:"short"}}return new Intl.DateTimeFormat(n,o).format(r)}function OC(t,e){const n=t.toJsDate(e),i=n.getFullYear(),r=Fh(String(n.getMonth()+1),2,"0"),s=Fh(String(n.getDate()),2,"0");return`${i}-${r}-${s}`}function FC(t){const[e,n,i]=t.split("-").map(Number);return new Date(e,n-1,i)}function BC(t,e){const n=new Date(t);return n.setMinutes(n.getMinutes()+e),n}function kC(t,e){const n=new Date(t);return n.setHours(n.getHours()+e),n}function HC(t,e){const n=new Date(t);return n.setDate(n.getDate()+e),n}function zC(t,e){const n=new Date(t);return n.setDate(n.getDate()+e*7),n}function VC(t,e){const n=new Date(t);return n.setMonth(n.getMonth()+e),n}function GC(t){return t.getFullYear()}function WC(t){return t.getMonth()}function XC(t){return new Date(t.getFullYear(),t.getMonth()+1,1)}function jC(t){return t.getHours()}function $C(t){return t.getMinutes()}function qC(t){return new Date(t.getFullYear(),0,1)}function YC(t){return new Date(t.getFullYear(),11,31)}function KC(t,e){return Bc(t,e[0])&&JC(t,e[1])}function ZC(t){const e=new Date(t);return e instanceof Date&&!isNaN(e.getTime())}function Bc(t,e){return t.getTime()>e.getTime()}function JC(t,e){return t.getTime()<e.getTime()}function Zh(t,e){return t.getTime()===e.getTime()}function QC(t,e){return t.getDate()===e.getDate()&&t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function eP(t,e){return t.getMonth()===e.getMonth()&&t.getFullYear()===e.getFullYear()}function tP(t,e,n){const i=new Date(t),r=new Date(e);return n==="month"?i.getMonth()-r.getMonth()+(i.getFullYear()-r.getFullYear())*12:Math.floor((i.getTime()-r.getTime())/(1e3*60*60*24))}function nP(t,e){const n=new Date(t);return n.setHours(e),n}function iP(t,e){const n=new Date(t);return n.setMinutes(e),n}function rP(t,e){const n=new Date(t);return n.setMonth(e),n}function sP(t,e){const n=new Date(t);return n.setFullYear(e),n}function oP(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate())}function aP(t){return new Date(t.getFullYear(),t.getMonth(),t.getDate(),23,59,59,999)}class lP{constructor(e){this.locale=e.locale,this.formats=e.formats}date(e){return p_(e)}toJsDate(e){return e}toISO(e){return OC(this,e)}parseISO(e){return FC(e)}addMinutes(e,n){return BC(e,n)}addHours(e,n){return kC(e,n)}addDays(e,n){return HC(e,n)}addWeeks(e,n){return zC(e,n)}addMonths(e,n){return VC(e,n)}getWeekArray(e){return CC(e,this.locale)}startOfWeek(e){return PC(e)}endOfWeek(e){return LC(e)}startOfMonth(e){return d_(e)}endOfMonth(e){return h_(e)}format(e,n){return NC(e,n,this.locale,this.formats)}isEqual(e,n){return Zh(e,n)}isValid(e){return ZC(e)}isWithinRange(e,n){return KC(e,n)}isAfter(e,n){return Bc(e,n)}isBefore(e,n){return!Bc(e,n)&&!Zh(e,n)}isSameDay(e,n){return QC(e,n)}isSameMonth(e,n){return eP(e,n)}setMinutes(e,n){return iP(e,n)}setHours(e,n){return nP(e,n)}setMonth(e,n){return rP(e,n)}setYear(e,n){return sP(e,n)}getDiff(e,n,i){return tP(e,n,i)}getWeekdays(){return UC(this.locale)}getYear(e){return GC(e)}getMonth(e){return WC(e)}getNextMonth(e){return XC(e)}getHours(e){return jC(e)}getMinutes(e){return $C(e)}startOfDay(e){return oP(e)}endOfDay(e){return aP(e)}startOfYear(e){return qC(e)}endOfYear(e){return YC(e)}}const cP=Symbol.for("vuetify:date-options"),Jh=Symbol.for("vuetify:date-adapter");function uP(t,e){const n=Qt({adapter:lP,locale:{af:"af-ZA",bg:"bg-BG",ca:"ca-ES",ckb:"",cs:"cs-CZ",de:"de-DE",el:"el-GR",en:"en-US",et:"et-EE",fa:"fa-IR",fi:"fi-FI",hr:"hr-HR",hu:"hu-HU",he:"he-IL",id:"id-ID",it:"it-IT",ja:"ja-JP",ko:"ko-KR",lv:"lv-LV",lt:"lt-LT",nl:"nl-NL",no:"no-NO",pl:"pl-PL",pt:"pt-PT",ro:"ro-RO",ru:"ru-RU",sk:"sk-SK",sl:"sl-SI",srCyrl:"sr-SP",srLatn:"sr-SP",sv:"sv-SE",th:"th-TH",tr:"tr-TR",az:"az-AZ",uk:"uk-UA",vi:"vi-VN",zhHans:"zh-CN",zhHant:"zh-TW"}},t);return{options:n,instance:fP(n,e)}}function fP(t,e){const n=vt(typeof t.adapter=="function"?new t.adapter({locale:t.locale[e.current.value]??e.current.value,formats:t.formats}):t.adapter);return Gt(e.current,i=>{n.locale=t.locale[i]??i??n.locale}),n}const Qh=Symbol.for("vuetify:display"),ep={mobileBreakpoint:"lg",thresholds:{xs:0,sm:600,md:960,lg:1280,xl:1920,xxl:2560}},dP=function(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:ep;return Qt(ep,t)};function tp(t){return ln&&!t?window.innerWidth:typeof t=="object"&&t.clientWidth||0}function np(t){return ln&&!t?window.innerHeight:typeof t=="object"&&t.clientHeight||0}function ip(t){const e=ln&&!t?window.navigator.userAgent:"ssr";function n(g){return!!e.match(g)}const i=n(/android/i),r=n(/iphone|ipad|ipod/i),s=n(/cordova/i),o=n(/electron/i),a=n(/chrome/i),l=n(/edge/i),c=n(/firefox/i),u=n(/opera/i),f=n(/win/i),d=n(/mac/i),h=n(/linux/i);return{android:i,ios:r,cordova:s,electron:o,chrome:a,edge:l,firefox:c,opera:u,win:f,mac:d,linux:h,touch:H1,ssr:e==="ssr"}}function hP(t,e){const{thresholds:n,mobileBreakpoint:i}=dP(t),r=en(np(e)),s=en(ip(e)),o=vt({}),a=en(tp(e));function l(){r.value=np(),a.value=tp()}function c(){l(),s.value=ip()}return Ca(()=>{const u=a.value<n.sm,f=a.value<n.md&&!u,d=a.value<n.lg&&!(f||u),h=a.value<n.xl&&!(d||f||u),g=a.value<n.xxl&&!(h||d||f||u),v=a.value>=n.xxl,m=u?"xs":f?"sm":d?"md":h?"lg":g?"xl":"xxl",p=typeof i=="number"?i:n[i],M=a.value<p;o.xs=u,o.sm=f,o.md=d,o.lg=h,o.xl=g,o.xxl=v,o.smAndUp=!u,o.mdAndUp=!(u||f),o.lgAndUp=!(u||f||d),o.xlAndUp=!(u||f||d||h),o.smAndDown=!(d||h||g||v),o.mdAndDown=!(h||g||v),o.lgAndDown=!(g||v),o.xlAndDown=!v,o.name=m,o.height=r.value,o.width=a.value,o.mobile=M,o.mobileBreakpoint=i,o.platform=s.value,o.thresholds=n}),ln&&window.addEventListener("resize",l,{passive:!0}),{...Jc(o),update:c,ssr:!!e}}const pP=Symbol.for("vuetify:goto");function mP(){return{container:void 0,duration:300,layout:!1,offset:0,easing:"easeInOutCubic",patterns:{linear:t=>t,easeInQuad:t=>t**2,easeOutQuad:t=>t*(2-t),easeInOutQuad:t=>t<.5?2*t**2:-1+(4-2*t)*t,easeInCubic:t=>t**3,easeOutCubic:t=>--t**3+1,easeInOutCubic:t=>t<.5?4*t**3:(t-1)*(2*t-2)*(2*t-2)+1,easeInQuart:t=>t**4,easeOutQuart:t=>1- --t**4,easeInOutQuart:t=>t<.5?8*t**4:1-8*--t**4,easeInQuint:t=>t**5,easeOutQuint:t=>1+--t**5,easeInOutQuint:t=>t<.5?16*t**5:1+16*--t**5}}}function gP(t,e){return{rtl:e.isRtl,options:Qt(mP(),t)}}const _P={collapse:"mdi-chevron-up",complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close-circle",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-alert-circle",error:"mdi-close-circle",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sortAsc:"mdi-arrow-up",sortDesc:"mdi-arrow-down",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus",calendar:"mdi-calendar",eyeDropper:"mdi-eyedropper"},vP={component:t=>Wt(g_,{...t,class:"mdi"})},yP=[String,Function,Object,Array],kc=Symbol.for("vuetify:icons"),Va=or({icon:{type:yP},tag:{type:String,required:!0}},"icon"),rp=a_()({name:"VComponentIcon",props:Va(),setup(t,e){let{slots:n}=e;return()=>{const i=t.icon;return $e(t.tag,null,{default:()=>{var r;return[t.icon?$e(i,null,null):(r=n.default)==null?void 0:r.call(n)]}})}}}),m_=ro({name:"VSvgIcon",inheritAttrs:!1,props:Va(),setup(t,e){let{attrs:n}=e;return()=>$e(t.tag,hu(n,{style:null}),{default:()=>[$e("svg",{class:"v-icon__svg",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":"true"},[Array.isArray(t.icon)?t.icon.map(i=>Array.isArray(i)?$e("path",{d:i[0],"fill-opacity":i[1]},null):$e("path",{d:i},null)):$e("path",{d:t.icon},null)])]})}});ro({name:"VLigatureIcon",props:Va(),setup(t){return()=>$e(t.tag,null,{default:()=>[t.icon]})}});const g_=ro({name:"VClassIcon",props:Va(),setup(t){return()=>$e(t.tag,{class:t.icon},null)}});function xP(){return{svg:{component:m_},class:{component:g_}}}function MP(t){const e=xP(),n=(t==null?void 0:t.defaultSet)??"mdi";return n==="mdi"&&!e.mdi&&(e.mdi=vP),Qt({defaultSet:n,sets:e,aliases:{..._P,vuetify:["M8.2241 14.2009L12 21L22 3H14.4459L8.2241 14.2009Z",["M7.26303 12.4733L7.00113 12L2 3H12.5261C12.5261 3 12.5261 3 12.5261 3L7.26303 12.4733Z",.6]],"vuetify-outline":"svg:M7.26 12.47 12.53 3H2L7.26 12.47ZM14.45 3 8.22 14.2 12 21 22 3H14.45ZM18.6 5 12 16.88 10.51 14.2 15.62 5ZM7.26 8.35 5.4 5H9.13L7.26 8.35Z"}},t)}const LL=t=>{const e=st(kc);if(!e)throw new Error("Missing Vuetify Icons provide!");return{iconData:Fe(()=>{var l;const i=Ze(t);if(!i)return{component:rp};let r=i;if(typeof r=="string"&&(r=r.trim(),r.startsWith("$")&&(r=(l=e.aliases)==null?void 0:l[r.slice(1)])),!r)throw new Error(`Could not find aliased icon "${i}"`);if(Array.isArray(r))return{component:m_,icon:r};if(typeof r!="string")return{component:rp,icon:r};const s=Object.keys(e.sets).find(c=>typeof r=="string"&&r.startsWith(`${c}:`)),o=s?r.slice(s.length+1):r;return{component:e.sets[s??e.defaultSet].component,icon:o}})}},va=Symbol.for("vuetify:theme"),EP=or({theme:String},"theme");function sp(){return{defaultTheme:"light",variations:{colors:[],lighten:0,darken:0},themes:{light:{dark:!1,colors:{background:"#FFFFFF",surface:"#FFFFFF","surface-bright":"#FFFFFF","surface-light":"#EEEEEE","surface-variant":"#424242","on-surface-variant":"#EEEEEE",primary:"#1867C0","primary-darken-1":"#1F5592",secondary:"#48A9A6","secondary-darken-1":"#018786",error:"#B00020",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#000000","border-opacity":.12,"high-emphasis-opacity":.87,"medium-emphasis-opacity":.6,"disabled-opacity":.38,"idle-opacity":.04,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.12,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#F5F5F5","theme-on-code":"#000000"}},dark:{dark:!0,colors:{background:"#121212",surface:"#212121","surface-bright":"#ccbfd6","surface-light":"#424242","surface-variant":"#a3a3a3","on-surface-variant":"#424242",primary:"#2196F3","primary-darken-1":"#277CC1",secondary:"#54B6B2","secondary-darken-1":"#48A9A6",error:"#CF6679",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},variables:{"border-color":"#FFFFFF","border-opacity":.12,"high-emphasis-opacity":1,"medium-emphasis-opacity":.7,"disabled-opacity":.5,"idle-opacity":.1,"hover-opacity":.04,"focus-opacity":.12,"selected-opacity":.08,"activated-opacity":.12,"pressed-opacity":.16,"dragged-opacity":.08,"theme-kbd":"#212529","theme-on-kbd":"#FFFFFF","theme-code":"#343434","theme-on-code":"#CCCCCC"}}}}}function SP(){var i,r;let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:sp();const e=sp();if(!t)return{...e,isDisabled:!0};const n={};for(const[s,o]of Object.entries(t.themes??{})){const a=o.dark||s==="dark"?(i=e.themes)==null?void 0:i.dark:(r=e.themes)==null?void 0:r.light;n[s]=Qt(a,o)}return Qt(e,{...t,themes:n})}function bP(t){const e=SP(t),n=ct(e.defaultTheme),i=ct(e.themes),r=Fe(()=>{const u={};for(const[f,d]of Object.entries(i.value)){const h=u[f]={...d,colors:{...d.colors}};if(e.variations)for(const g of e.variations.colors){const v=h.colors[g];if(v)for(const m of["lighten","darken"]){const p=m==="lighten"?fC:dC;for(const M of n_(e.variations[m],1))h.colors[`${g}-${m}-${M}`]=lC(p(qn(v),M))}}for(const g of Object.keys(h.colors)){if(/^on-[a-z]/.test(g)||h.colors[`on-${g}`])continue;const v=`on-${g}`,m=qn(h.colors[g]);h.colors[v]=pC(m)}}return u}),s=Fe(()=>r.value[n.value]),o=Fe(()=>{const u=[];s.value.dark&&Oi(u,":root",["color-scheme: dark"]),Oi(u,":root",op(s.value));for(const[g,v]of Object.entries(r.value))Oi(u,`.v-theme--${g}`,[`color-scheme: ${v.dark?"dark":"normal"}`,...op(v)]);const f=[],d=[],h=new Set(Object.values(r.value).flatMap(g=>Object.keys(g.colors)));for(const g of h)/^on-[a-z]/.test(g)?Oi(d,`.${g}`,[`color: rgb(var(--v-theme-${g})) !important`]):(Oi(f,`.bg-${g}`,[`--v-theme-overlay-multiplier: var(--v-theme-${g}-overlay-multiplier)`,`background-color: rgb(var(--v-theme-${g})) !important`,`color: rgb(var(--v-theme-on-${g})) !important`]),Oi(d,`.text-${g}`,[`color: rgb(var(--v-theme-${g})) !important`]),Oi(d,`.border-${g}`,[`--v-border-color: var(--v-theme-${g})`]));return u.push(...f,...d),u.map((g,v)=>v===0?g:`    ${g}`).join("")});function a(){return{style:[{children:o.value,id:"vuetify-theme-stylesheet",nonce:e.cspNonce||!1}]}}function l(u){if(e.isDisabled)return;const f=u._context.provides.usehead;if(f)if(f.push){const d=f.push(a);ln&&Gt(o,()=>{d.patch(a)})}else ln?(f.addHeadObjs(Fe(a)),Ca(()=>f.updateDOM())):f.addHeadObjs(a());else{let h=function(){if(typeof document<"u"&&!d){const g=document.createElement("style");g.type="text/css",g.id="vuetify-theme-stylesheet",e.cspNonce&&g.setAttribute("nonce",e.cspNonce),d=g,document.head.appendChild(d)}d&&(d.innerHTML=o.value)},d=ln?document.getElementById("vuetify-theme-stylesheet"):null;ln?Gt(o,h,{immediate:!0}):h()}}const c=Fe(()=>e.isDisabled?void 0:`v-theme--${n.value}`);return{install:l,isDisabled:e.isDisabled,name:n,themes:i,current:s,computedThemes:r,themeClasses:c,styles:o,global:{name:n,current:s}}}function TP(t){Qn("provideTheme");const e=st(va,null);if(!e)throw new Error("Could not find Vuetify theme injection");const n=Fe(()=>t.theme??e.name.value),i=Fe(()=>e.themes.value[n.value]),r=Fe(()=>e.isDisabled?void 0:`v-theme--${n.value}`),s={...e,name:n,current:i,themeClasses:r};return un(va,s),s}function Oi(t,e,n){t.push(`${e} {
`,...n.map(i=>`  ${i};
`),`}
`)}function op(t){const e=t.dark?2:1,n=t.dark?1:2,i=[];for(const[r,s]of Object.entries(t.colors)){const o=qn(s);i.push(`--v-theme-${r}: ${o.r},${o.g},${o.b}`),r.startsWith("on-")||i.push(`--v-theme-${r}-overlay-multiplier: ${hC(s)>.18?e:n}`)}for(const[r,s]of Object.entries(t.variables)){const o=typeof s=="string"&&s.startsWith("#")?qn(s):void 0,a=o?`${o.r}, ${o.g}, ${o.b}`:void 0;i.push(`--v-${r}: ${a??s}`)}return i}function wP(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"content";const n=ct(),i=ct();if(ln){const r=new ResizeObserver(s=>{t==null||t(s,r),s.length&&(e==="content"?i.value=s[0].contentRect:i.value=s[0].target.getBoundingClientRect())});js(()=>{r.disconnect()}),Gt(n,(s,o)=>{o&&(r.unobserve(Nh(o)),i.value=void 0),s&&r.observe(Nh(s))},{flush:"post"})}return{resizeRef:n,contentRect:Yc(i)}}const ya=Symbol.for("vuetify:layout"),__=Symbol.for("vuetify:layout-item"),ap=1e3,AP=or({overlaps:{type:Array,default:()=>[]},fullHeight:Boolean},"layout"),DL=or({name:{type:String},order:{type:[Number,String],default:0},absolute:Boolean},"layout-item");function IL(){const t=st(ya);if(!t)throw new Error("[Vuetify] Could not find injected layout");return{getLayoutItem:t.getLayoutItem,mainRect:t.mainRect,mainStyles:t.mainStyles}}function UL(t){const e=st(ya);if(!e)throw new Error("[Vuetify] Could not find injected layout");const n=t.id??`layout-item-${Ou()}`,i=Qn("useLayoutItem");un(__,{id:n});const r=en(!1);Kp(()=>r.value=!0),Yp(()=>r.value=!1);const{layoutItemStyles:s,layoutItemScrimStyles:o}=e.register(i,{...t,active:Fe(()=>r.value?!1:t.active.value),id:n});return js(()=>e.unregister(n)),{layoutItemStyles:s,layoutRect:e.layoutRect,layoutItemScrimStyles:o}}const RP=(t,e,n,i)=>{let r={top:0,left:0,right:0,bottom:0};const s=[{id:"",layer:{...r}}];for(const o of t){const a=e.get(o),l=n.get(o),c=i.get(o);if(!a||!l||!c)continue;const u={...r,[a.value]:parseInt(r[a.value],10)+(c.value?parseInt(l.value,10):0)};s.push({id:o,layer:u}),r=u}return s};function CP(t){const e=st(ya,null),n=Fe(()=>e?e.rootZIndex.value-100:ap),i=ct([]),r=vt(new Map),s=vt(new Map),o=vt(new Map),a=vt(new Map),l=vt(new Map),{resizeRef:c,contentRect:u}=wP(),f=Fe(()=>{const T=new Map,L=t.overlaps??[];for(const C of L.filter(y=>y.includes(":"))){const[y,b]=C.split(":");if(!i.value.includes(y)||!i.value.includes(b))continue;const F=r.get(y),B=r.get(b),I=s.get(y),G=s.get(b);!F||!B||!I||!G||(T.set(b,{position:F.value,amount:parseInt(I.value,10)}),T.set(y,{position:B.value,amount:-parseInt(G.value,10)}))}return T}),d=Fe(()=>{const T=[...new Set([...o.values()].map(C=>C.value))].sort((C,y)=>C-y),L=[];for(const C of T){const y=i.value.filter(b=>{var F;return((F=o.get(b))==null?void 0:F.value)===C});L.push(...y)}return RP(L,r,s,a)}),h=Fe(()=>!Array.from(l.values()).some(T=>T.value)),g=Fe(()=>d.value[d.value.length-1].layer),v=Fe(()=>({"--v-layout-left":Ho(g.value.left),"--v-layout-right":Ho(g.value.right),"--v-layout-top":Ho(g.value.top),"--v-layout-bottom":Ho(g.value.bottom),...h.value?void 0:{transition:"none"}})),m=Fe(()=>d.value.slice(1).map((T,L)=>{let{id:C}=T;const{layer:y}=d.value[L],b=s.get(C),F=r.get(C);return{id:C,...y,size:Number(b.value),position:F.value}})),p=T=>m.value.find(L=>L.id===T),M=Qn("createLayout"),_=en(!1);Xs(()=>{_.value=!0}),un(ya,{register:(T,L)=>{let{id:C,order:y,position:b,layoutSize:F,elementSize:B,active:I,disableTransitions:G,absolute:X}=L;o.set(C,y),r.set(C,b),s.set(C,F),a.set(C,I),G&&l.set(C,G);const W=Zo(__,M==null?void 0:M.vnode).indexOf(T);W>-1?i.value.splice(W,0,C):i.value.push(C);const H=Fe(()=>m.value.findIndex(q=>q.id===C)),ce=Fe(()=>n.value+d.value.length*2-H.value*2),he=Fe(()=>{const q=b.value==="left"||b.value==="right",pe=b.value==="right",me=b.value==="bottom",Se={[b.value]:0,zIndex:ce.value,transform:`translate${q?"X":"Y"}(${(I.value?0:-110)*(pe||me?-1:1)}%)`,position:X.value||n.value!==ap?"absolute":"fixed",...h.value?void 0:{transition:"none"}};if(!_.value)return Se;const _e=m.value[H.value];if(!_e)throw new Error(`[Vuetify] Could not find layout item "${C}"`);const z=f.value.get(C);return z&&(_e[z.position]+=z.amount),{...Se,height:q?`calc(100% - ${_e.top}px - ${_e.bottom}px)`:B.value?`${B.value}px`:void 0,left:pe?void 0:`${_e.left}px`,right:pe?`${_e.right}px`:void 0,top:b.value!=="bottom"?`${_e.top}px`:void 0,bottom:b.value!=="top"?`${_e.bottom}px`:void 0,width:q?B.value?`${B.value}px`:void 0:`calc(100% - ${_e.left}px - ${_e.right}px)`}}),Ee=Fe(()=>({zIndex:ce.value-1}));return{layoutItemStyles:he,layoutItemScrimStyles:Ee,zIndex:ce}},unregister:T=>{o.delete(T),r.delete(T),s.delete(T),a.delete(T),l.delete(T),i.value=i.value.filter(L=>L!==T)},mainRect:g,mainStyles:v,getLayoutItem:p,items:m,layoutRect:u,rootZIndex:n});const S=Fe(()=>["v-layout",{"v-layout--full-height":t.fullHeight}]),x=Fe(()=>({zIndex:e?n.value:void 0,position:e?"relative":void 0,overflow:e?"hidden":void 0}));return{layoutClasses:S,layoutStyles:x,getLayoutItem:p,items:m,layoutRect:u,layoutRef:c}}function v_(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};const{blueprint:e,...n}=t,i=Qt(e,n),{aliases:r={},components:s={},directives:o={}}=i,a=gC(i.defaults),l=hP(i.display,i.ssr),c=bP(i.theme),u=MP(i.icons),f=TC(i.locale),d=uP(i.date,f),h=gP(i.goTo,f);return{install:v=>{for(const m in o)v.directive(m,o[m]);for(const m in s)v.component(m,s[m]);for(const m in r)v.component(m,ro({...r[m],name:m,aliasName:r[m].name}));if(c.install(v),v.provide(Jr,a),v.provide(Qh,l),v.provide(va,c),v.provide(kc,u),v.provide(Oc,f),v.provide(cP,d.options),v.provide(Jh,d.instance),v.provide(pP,h),ln&&i.ssr)if(v.$nuxt)v.$nuxt.hook("app:suspense:resolve",()=>{l.update()});else{const{mount:m}=v;v.mount=function(){const p=m(...arguments);return wi(()=>l.update()),v.mount=m,p}}Ou.reset(),v.mixin({computed:{$vuetify(){return vt({defaults:Ar.call(this,Jr),display:Ar.call(this,Qh),theme:Ar.call(this,va),icons:Ar.call(this,kc),locale:Ar.call(this,Oc),date:Ar.call(this,Jh)})}}})},defaults:a,display:l,theme:c,icons:u,locale:f,date:d,goTo:h}}const PP="3.5.6";v_.version=PP;function Ar(t){var i,r;const e=this.$,n=((i=e.parent)==null?void 0:i.provides)??((r=e.vnode.appContext)==null?void 0:r.provides);if(n&&t in n)return n[t]}const LP=En(t=>{const e=v_({ssr:!1,theme:{defaultTheme:"dark"}});t.vueApp.use(e)}),DP=[MM,SM,OE,FE,BE,$E,qE,YE,KE,B1,LP],IP=Pn({props:{vnode:{type:Object,required:!0},route:{type:Object,required:!0},vnodeRef:Object,renderKey:String,trackRootNodes:Boolean},setup(t){const e=t.renderKey,n=t.route,i={};for(const r in t.route)Object.defineProperty(i,r,{get:()=>e===t.renderKey?t.route[r]:n[r]});return un(Js,Gs(i)),()=>Wt(t.vnode,{ref:t.vnodeRef})}}),UP=Pn({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(t,{attrs:e,expose:n}){const i=ut(),r=ct(),s=st(Js,null);let o;n({pageRef:r});const a=st(Gm,null);let l;const c=i.deferHydration();if(i.isHydrating){const u=i.hooks.hookOnce("app:error",c);Ln().beforeEach(u)}return t.pageKey&&Gt(()=>t.pageKey,(u,f)=>{u!==f&&i.callHook("page:loading:start")}),()=>Wt(hg,{name:t.name,route:t.route,...e},{default:u=>{const f=OP(s,u.route,u.Component),d=s&&s.matched.length===u.route.matched.length;if(!u.Component){if(l&&!d)return l;c();return}if(l&&a&&!a.isCurrent(u.route))return l;if(f&&s&&(!a||a!=null&&a.isCurrent(s)))return d?l:null;const h=Tc(u,t.pageKey);!i.isHydrating&&!FP(s,u.route,u.Component)&&o===h&&i.callHook("page:loading:end"),o=h;const g=!!(t.transition??u.route.meta.pageTransition??Mc),v=g&&NP([t.transition,u.route.meta.pageTransition,Mc,{onAfterLeave:()=>{i.callHook("page:transition:finish",u.Component)}}].filter(Boolean)),m=t.keepalive??u.route.meta.keepalive??pM;return l=pg(Ia,g&&v,RE(m,Wt(iu,{suspensible:!0,onPending:()=>i.callHook("page:start",u.Component),onResolve:()=>{wi(()=>i.callHook("page:finish",u.Component).then(()=>i.callHook("page:loading:end")).finally(c))}},{default:()=>{const p=Wt(IP,{key:h||void 0,vnode:u.Component,route:u.route,renderKey:h||void 0,trackRootNodes:g,vnodeRef:r});return m&&(p.type.name=u.Component.type.name||u.Component.type.__name||"RouteProvider"),p}}))).default(),l}})}});function NP(t){const e=t.map(n=>({...n,onAfterLeave:n.onAfterLeave?bu(n.onAfterLeave):void 0}));return zm(...e)}function OP(t,e,n){if(!t)return!1;const i=e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)});return!i||i===-1?!1:e.matched.slice(0,i).some((r,s)=>{var o,a,l;return((o=r.components)==null?void 0:o.default)!==((l=(a=t.matched[s])==null?void 0:a.components)==null?void 0:l.default)})||n&&Tc({route:e,Component:n})!==Tc({route:t,Component:n})}function FP(t,e,n){return t?e.matched.findIndex(r=>{var s;return((s=r.components)==null?void 0:s.default)===(n==null?void 0:n.type)})<e.matched.length-1:!1}const BP=Pn({name:"LayoutLoader",inheritAttrs:!1,props:{name:String,layoutProps:Object},async setup(t,e){const n=await mi[t.name]().then(i=>i.default||i);return()=>Wt(n,t.layoutProps,e.slots)}}),kP=Pn({name:"NuxtLayout",inheritAttrs:!1,props:{name:{type:[String,Boolean,Object],default:null},fallback:{type:[String,Object],default:null}},setup(t,e){const n=ut(),i=st(Js),r=i===yu()?wE():i,s=Fe(()=>{let l=Ze(t.name)??r.meta.layout??"default";return l&&!(l in mi)&&t.fallback&&(l=Ze(t.fallback)),l}),o=ct();e.expose({layoutRef:o});const a=n.deferHydration();if(n.isHydrating){const l=n.hooks.hookOnce("app:error",a);Ln().beforeEach(l)}return()=>{const l=s.value&&s.value in mi,c=r.meta.layoutTransition??hM;return pg(Ia,l&&c,{default:()=>Wt(iu,{suspensible:!0,onResolve:()=>{wi(a)}},{default:()=>Wt(HP,{layoutProps:hu(e.attrs,{ref:o}),key:s.value||void 0,name:s.value,shouldProvide:!t.name,hasTransition:!!c},e.slots)})}).default()}}}),HP=Pn({name:"NuxtLayoutProvider",inheritAttrs:!1,props:{name:{type:[String,Boolean]},layoutProps:{type:Object},hasTransition:{type:Boolean},shouldProvide:{type:Boolean}},setup(t,e){const n=t.name;return t.shouldProvide&&un(Gm,{isCurrent:i=>n===(i.meta.layout??"default")}),()=>{var i,r;return!n||typeof n=="string"&&!(n in mi)?(r=(i=e.slots).default)==null?void 0:r.call(i):Wt(BP,{key:n,layoutProps:t.layoutProps,name:n},e.slots)}}}),zP=(t,e)=>{const n=t.__vccOpts||t;for(const[i,r]of e)n[i]=r;return n},VP=or({...mC(),...AP({fullHeight:!0}),...EP()},"VApp"),GP=a_()({name:"VApp",props:VP(),setup(t,e){let{slots:n}=e;const i=TP(t),{layoutClasses:r,getLayoutItem:s,items:o,layoutRef:a}=CP(t),{rtlClasses:l}=RC();return xC(()=>{var c;return $e("div",{ref:a,class:["v-application",i.themeClasses.value,r.value,l.value,t.class],style:[t.style]},[$e("div",{class:"v-application__wrap"},[(c=n.default)==null?void 0:c.call(n)])])}),{getLayoutItem:s,items:o,theme:i}}}),WP={};function XP(t,e){const n=UP,i=kP;return vn(),Wn(GP,null,{default:ra(()=>[$e(i,null,{default:ra(()=>[$e(n)]),_:1})]),_:1})}const jP=zP(WP,[["render",XP]]),$P={__name:"nuxt-error-page",props:{error:Object},setup(t){const n=t.error;(n.stack||"").split(`
`).splice(1).map(f=>({text:f.replace("webpack:/","").replace(".vue",".js").trim(),internal:f.includes("node_modules")&&!f.includes(".cache")||f.includes("internal")||f.includes("new Promise")})).map(f=>`<span class="stack${f.internal?" internal":""}">${f.text}</span>`).join(`
`);const i=Number(n.statusCode||500),r=i===404,s=n.statusMessage??(r?"Page Not Found":"Internal Server Error"),o=n.message||n.toString(),a=void 0,u=r?nf(()=>Gn(()=>import("./error-404.NPoI0fo6.js"),__vite__mapDeps([26,17,27,28]),import.meta.url).then(f=>f.default||f)):nf(()=>Gn(()=>import("./error-500.CQCG_G8e.js"),__vite__mapDeps([29,27,30]),import.meta.url).then(f=>f.default||f));return(f,d)=>(vn(),Wn(Ze(u),N_(mm({statusCode:Ze(i),statusMessage:Ze(s),description:Ze(o),stack:Ze(a)})),null,16))}},lp={__name:"nuxt-root",setup(t){const e=()=>null,n=ut(),i=n.deferHydration();if(n.isHydrating){const a=n.hooks.hookOnce("app:error",i);Ln().beforeEach(a)}const r=!1;un(Js,yu()),n.hooks.callHookWith(a=>a.map(l=>l()),"vue:setup");const s=Na();Jp((a,l,c)=>{if(n.hooks.callHook("vue:error",a,l,c).catch(u=>console.error("[nuxt] Error in `vue:error` hook",u)),_x(a)&&(a.fatal||a.unhandled))return n.runWithContext(()=>Pr(a)),!1});const o=!1;return(a,l)=>(vn(),Wn(iu,{onResolve:Ze(i)},{default:ra(()=>[Ze(s)?(vn(),Wn(Ze($P),{key:0,error:Ze(s)},null,8,["error"])):Ze(o)?(vn(),Wn(Ze(e),{key:1,context:Ze(o)},null,8,["context"])):Ze(r)?(vn(),Wn(Mv(Ze(r)),{key:2})):(vn(),Wn(Ze(jP),{key:3}))]),_:1},8,["onResolve"]))}};let cp;{let t;cp=async function(){var o,a;if(t)return t;const i=!!((o=window.__NUXT__)!=null&&o.serverRendered||((a=document.getElementById("__NUXT_DATA__"))==null?void 0:a.dataset.ssr)==="true")?K0(lp):Y0(lp),r=nx({vueApp:i});async function s(l){await r.callHook("app:error",l),r.payload.error=r.payload.error||Oa(l)}i.config.errorHandler=s;try{await rx(r,DP)}catch(l){s(l)}try{await r.hooks.callHook("app:created",i),await r.hooks.callHook("app:beforeMount",i),i.mount(mM),await r.hooks.callHook("app:mounted",i),await wi()}catch(l){s(l)}return i.config.errorHandler===s&&(i.config.errorHandler=void 0),i},t=cp().catch(e=>{throw console.error("Error while mounting app:",e),e})}export{Rt as $,ML as A,Gn as B,_L as C,Xn as D,sr as E,Dt as F,Ki as G,je as H,ko as I,Wn as J,F1 as K,QP as L,gL as M,iL as N,Ea as O,Pu as P,xL as Q,Os as R,mL as S,yL as T,Nb as U,vL as V,Ob as W,_i as X,pL as Y,Cn as Z,zP as _,pm as a,wi as a$,Xs as a0,bS as a1,Cc as a2,vu as a3,un as a4,or as a5,mC as a6,a_ as a7,RC as a8,xC as a9,K as aA,g1 as aB,Og as aC,Yi as aD,hL as aE,xn as aF,An as aG,et as aH,fL as aI,xt as aJ,dL as aK,At as aL,vd as aM,_l as aN,wS as aO,Yr as aP,Jt as aQ,Lc as aR,Dc as aS,rL as aT,Ia as aU,hu as aV,EL as aW,uv as aX,Qn as aY,en as aZ,Ov as a_,EP as aa,TP as ab,Ho as ac,Ks as ad,mg as ae,ud as af,cL as ag,Wt as ah,ZP as ai,Zs as aj,Ua as ak,ly as al,lL as am,ut as an,oL as ao,fc as ap,mu as aq,Vs as ar,Rn as as,tr as at,t_ as au,ze as av,sn as aw,Jg as ax,Ut as ay,tt as az,$e as b,JP as b0,CL as b1,W1 as b2,Yc as b3,DL as b4,MC as b5,k1 as b6,UL as b7,IL as b8,tL as b9,yp as bA,xp as bB,uL as ba,_t as bb,wL as bc,PL as bd,TL as be,oC as bf,RL as bg,qn as bh,pC as bi,Ou as bj,st as bk,vt as bl,V1 as bm,bL as bn,Zo as bo,Jc as bp,yP as bq,LL as br,j1 as bs,zr as bt,wP as bu,Mv as bv,AL as bw,Uh as bx,SL as by,sL as bz,a0 as c,gm as d,KP as e,Ca as f,vc as g,Gt as h,aL as i,js as j,Kp as k,Yp as l,$s as m,Pn as n,vn as o,YP as p,Fe as q,ct as r,eL as s,qP as t,Ze as u,nL as v,ra as w,Ln as x,vi as y,m1 as z};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["./audio.DDPyOzj3.js","./apk-store.RSVZAT-b.js","./index._BGoy-tc.js","./audio.Bg7tGHYo.css","./index.B8YJYzMh.js","./drop-zone.DEcQz1zB.js","./index.ely8kfid.js","./drop-zone.Cfxza7i5.css","./index.Cu0BxykH.css","./ktx.WChLHAoL.js","./DataView.bL8bw3ed.js","./client-only.StvJ0LT5.js","./ktx.B25M5HBC.css","./mesh.CNVSkVvo.js","./ui-store.Cdca3RGT.js","./mesh.Bw43kOH3.css","./settings.DNPR1-oZ.js","./nuxt-link.BRbjnblI.js","./VGrid.DBcNMJ2Y.js","./VGrid.DSrKtt0S.css","./settings.nqsxRZhw.css","./storage.B7NuKrY7.js","./drop-overlay.DoPsmUuQ.js","./drop-overlay.Ctfdz237.css","./default.CVzPXzvk.js","./default.DapAYc6u.css","./error-404.NPoI0fo6.js","./vue.f36acd1f.D6XhM9Ux.js","./error-404.CoUbADi5.css","./error-500.CQCG_G8e.js","./error-500.BXQ_YkC0.css"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}
