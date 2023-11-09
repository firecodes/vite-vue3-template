import{dl as T,aU as D,aV as F,dm as L,dn as I}from"./index.d216646e.js";function V(t,r,e,n){if(!T(t))return t;r=D(r,t);for(var i=-1,o=r.length,l=o-1,s=t;s!=null&&++i<o;){var a=F(r[i]),u=e;if(a==="__proto__"||a==="constructor"||a==="prototype")return t;if(i!=l){var d=s[a];u=n?n(d,a,s):void 0,u===void 0&&(u=T(d)?d:L(r[i+1])?[]:{})}I(s,a,u),s=s[a]}return t}function ct(t,r,e){return t==null?t:V(t,r,e)}/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */function $(t){return Object.prototype.toString.call(t)==="[object Object]"}function Y(t){var r,e;return $(t)===!1?!1:(r=t.constructor,r===void 0?!0:(e=r.prototype,!($(e)===!1||e.hasOwnProperty("isPrototypeOf")===!1)))}function O(){return O=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},O.apply(this,arguments)}function P(t,r){if(t==null)return{};var e,n,i={},o=Object.keys(t);for(n=0;n<o.length;n++)r.indexOf(e=o[n])>=0||(i[e]=t[e]);return i}const B={silent:!1,logLevel:"warn"},C=["validator"],S=Object.prototype,q=S.toString,J=S.hasOwnProperty,A=/^\s*function (\w+)/;function w(t){var r;const e=(r=t==null?void 0:t.type)!==null&&r!==void 0?r:t;if(e){const n=e.toString().match(A);return n?n[1]:""}return""}const y=Y,M=t=>t;let c=M;const h=(t,r)=>J.call(t,r),R=Number.isInteger||function(t){return typeof t=="number"&&isFinite(t)&&Math.floor(t)===t},g=Array.isArray||function(t){return q.call(t)==="[object Array]"},b=t=>q.call(t)==="[object Function]",m=t=>y(t)&&h(t,"_vueTypes_name"),N=t=>y(t)&&(h(t,"type")||["_vueTypes_name","validator","default","required"].some(r=>h(t,r)));function _(t,r){return Object.defineProperty(t.bind(r),"__original",{value:t})}function v(t,r,e=!1){let n,i=!0,o="";n=y(t)?t:{type:t};const l=m(n)?n._vueTypes_name+" - ":"";if(N(n)&&n.type!==null){if(n.type===void 0||n.type===!0||!n.required&&r===void 0)return i;g(n.type)?(i=n.type.some(s=>v(s,r,!0)===!0),o=n.type.map(s=>w(s)).join(" or ")):(o=w(n),i=o==="Array"?g(r):o==="Object"?y(r):o==="String"||o==="Number"||o==="Boolean"||o==="Function"?function(s){if(s==null)return"";const a=s.constructor.toString().match(A);return a?a[1]:""}(r)===o:r instanceof n.type)}if(!i){const s=`${l}value "${r}" should be of type "${o}"`;return e===!1?(c(s),!1):s}if(h(n,"validator")&&b(n.validator)){const s=c,a=[];if(c=u=>{a.push(u)},i=n.validator(r),c=s,!i){const u=(a.length>1?"* ":"")+a.join(`
* `);return a.length=0,e===!1?(c(u),i):u}}return i}function f(t,r){const e=Object.defineProperties(r,{_vueTypes_name:{value:t,writable:!0},isRequired:{get(){return this.required=!0,this}},def:{value(i){return i===void 0?(h(this,"default")&&delete this.default,this):b(i)||v(this,i,!0)===!0?(this.default=g(i)?()=>[...i]:y(i)?()=>Object.assign({},i):i,this):(c(`${this._vueTypes_name} - invalid default value: "${i}"`),this)}}}),{validator:n}=e;return b(n)&&(e.validator=_(n,e)),e}function p(t,r){const e=f(t,r);return Object.defineProperty(e,"validate",{value(n){return b(this.validator)&&c(`${this._vueTypes_name} - calling .validate() will overwrite the current custom validator function. Validator info:
${JSON.stringify(this)}`),this.validator=_(n,this),this}})}function x(t,r,e){const n=function(a){const u={};return Object.getOwnPropertyNames(a).forEach(d=>{u[d]=Object.getOwnPropertyDescriptor(a,d)}),Object.defineProperties({},u)}(r);if(n._vueTypes_name=t,!y(e))return n;const{validator:i}=e,o=P(e,C);if(b(i)){let{validator:a}=n;a&&(a=(s=(l=a).__original)!==null&&s!==void 0?s:l),n.validator=_(a?function(u){return a.call(this,u)&&i.call(this,u)}:i,n)}var l,s;return Object.assign(n,o)}function j(t){return t.replace(/^(?!\s*$)/gm,"  ")}const K=()=>p("any",{}),U=()=>p("function",{type:Function}),z=()=>p("boolean",{type:Boolean}),G=()=>p("string",{type:String}),H=()=>p("number",{type:Number}),Q=()=>p("array",{type:Array}),W=()=>p("object",{type:Object}),X=()=>f("integer",{type:Number,validator:t=>R(t)}),Z=()=>f("symbol",{validator:t=>typeof t=="symbol"});function k(t,r="custom validation failed"){if(typeof t!="function")throw new TypeError("[VueTypes error]: You must provide a function as argument");return f(t.name||"<<anonymous function>>",{type:null,validator(e){const n=t(e);return n||c(`${this._vueTypes_name} - ${r}`),n}})}function tt(t){if(!g(t))throw new TypeError("[VueTypes error]: You must provide an array as argument.");const r=`oneOf - value should be one of "${t.join('", "')}".`,e=t.reduce((n,i)=>{if(i!=null){const o=i.constructor;n.indexOf(o)===-1&&n.push(o)}return n},[]);return f("oneOf",{type:e.length>0?e:void 0,validator(n){const i=t.indexOf(n)!==-1;return i||c(r),i}})}function et(t){if(!g(t))throw new TypeError("[VueTypes error]: You must provide an array as argument");let r=!1,e=[];for(let i=0;i<t.length;i+=1){const o=t[i];if(N(o)){if(m(o)&&o._vueTypes_name==="oneOf"&&o.type){e=e.concat(o.type);continue}if(b(o.validator)&&(r=!0),o.type===!0||!o.type){c('oneOfType - invalid usage of "true" or "null" as types.');continue}e=e.concat(o.type)}else e.push(o)}e=e.filter((i,o)=>e.indexOf(i)===o);const n=e.length>0?e:null;return f("oneOfType",r?{type:n,validator(i){const o=[],l=t.some(s=>{const a=v(m(s)&&s._vueTypes_name==="oneOf"?s.type||null:s,i,!0);return typeof a=="string"&&o.push(a),a===!0});return l||c(`oneOfType - provided value does not match any of the ${o.length} passed-in validators:
${j(o.join(`
`))}`),l}}:{type:n})}function rt(t){return f("arrayOf",{type:Array,validator(r){let e="";const n=r.every(i=>(e=v(t,i,!0),e===!0));return n||c(`arrayOf - value validation error:
${j(e)}`),n}})}function nt(t){return f("instanceOf",{type:t})}function it(t){return f("objectOf",{type:Object,validator(r){let e="";const n=Object.keys(r).every(i=>(e=v(t,r[i],!0),e===!0));return n||c(`objectOf - value validation error:
${j(e)}`),n}})}function ot(t){const r=Object.keys(t),e=r.filter(i=>{var o;return!((o=t[i])===null||o===void 0||!o.required)}),n=f("shape",{type:Object,validator(i){if(!y(i))return!1;const o=Object.keys(i);if(e.length>0&&e.some(l=>o.indexOf(l)===-1)){const l=e.filter(s=>o.indexOf(s)===-1);return c(l.length===1?`shape - required property "${l[0]}" is not defined.`:`shape - required properties "${l.join('", "')}" are not defined.`),!1}return o.every(l=>{if(r.indexOf(l)===-1)return this._vueTypes_isLoose===!0||(c(`shape - shape definition does not include a "${l}" property. Allowed keys: "${r.join('", "')}".`),!1);const s=v(t[l],i[l],!0);return typeof s=="string"&&c(`shape - "${l}" property validation error:
 ${j(s)}`),s===!0})}});return Object.defineProperty(n,"_vueTypes_isLoose",{writable:!0,value:!1}),Object.defineProperty(n,"loose",{get(){return this._vueTypes_isLoose=!0,this}}),n}const at=["name","validate","getter"],st=(()=>{var t;return(t=class{static get any(){return K()}static get func(){return U().def(this.defaults.func)}static get bool(){return z().def(this.defaults.bool)}static get string(){return G().def(this.defaults.string)}static get number(){return H().def(this.defaults.number)}static get array(){return Q().def(this.defaults.array)}static get object(){return W().def(this.defaults.object)}static get integer(){return X().def(this.defaults.integer)}static get symbol(){return Z()}static get nullable(){return{type:null}}static extend(r){if(g(r))return r.forEach(a=>this.extend(a)),this;const{name:e,validate:n=!1,getter:i=!1}=r,o=P(r,at);if(h(this,e))throw new TypeError(`[VueTypes error]: Type "${e}" already defined`);const{type:l}=o;if(m(l))return delete o.type,Object.defineProperty(this,e,i?{get:()=>x(e,l,o)}:{value(...a){const u=x(e,l,o);return u.validator&&(u.validator=u.validator.bind(u,...a)),u}});let s;return s=i?{get(){const a=Object.assign({},o);return n?p(e,a):f(e,a)},enumerable:!0}:{value(...a){const u=Object.assign({},o);let d;return d=n?p(e,u):f(e,u),u.validator&&(d.validator=u.validator.bind(d,...a)),d},enumerable:!0},Object.defineProperty(this,e,s)}}).defaults={},t.sensibleDefaults=void 0,t.config=B,t.custom=k,t.oneOf=tt,t.instanceOf=nt,t.oneOfType=et,t.arrayOf=rt,t.objectOf=it,t.shape=ot,t.utils={validate:(r,e)=>v(e,r,!0)===!0,toType:(r,e,n=!1)=>n?p(r,e):f(r,e)},t})();function E(t={func:()=>{},bool:!0,string:"",number:0,array:()=>[],object:()=>({}),integer:0}){var r;return(r=class extends st{static get sensibleDefaults(){return O({},this.defaults)}static set sensibleDefaults(e){this.defaults=e!==!1?O({},e!==!0?e:t):{}}}).defaults=O({},t),r}class ft extends E(){}const ut=E({func:void 0,bool:void 0,string:void 0,number:void 0,object:void 0,integer:void 0});ut.extend([{name:"style",getter:!0,type:[String,Object],default:void 0},{name:"VNodeChild",getter:!0,type:void 0}]);export{ut as p,ct as s};
