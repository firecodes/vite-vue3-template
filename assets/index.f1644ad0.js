import{E,G as y,d as V,H as M,I as z,J as R,v as N,K as U,L as P,M as I,O as C,Q as H,C as O,S as j,U as A,o as $,c as w,a as f,i as c,w as u,j as g,t as h,A as k,h as v,V as F,W as B,m as K}from"./index.d216646e.js";const L=E("text",`
 transition: color .3s var(--n-bezier);
 color: var(--n-text-color);
`,[y("strong",`
 font-weight: var(--n-font-weight-strong);
 `),y("italic",{fontStyle:"italic"}),y("underline",{textDecoration:"underline"}),y("code",`
 line-height: 1.4;
 display: inline-block;
 font-family: var(--n-font-famliy-mono);
 transition: 
 color .3s var(--n-bezier),
 border-color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 box-sizing: border-box;
 padding: .05em .35em 0 .35em;
 border-radius: var(--n-code-border-radius);
 font-size: .9em;
 color: var(--n-code-text-color);
 background-color: var(--n-code-color);
 border: var(--n-code-border);
 `)]),W=Object.assign(Object.assign({},z.props),{code:Boolean,type:{type:String,default:"default"},delete:Boolean,strong:Boolean,italic:Boolean,underline:Boolean,depth:[String,Number],tag:String,as:{type:String,validator:()=>!0,default:void 0}}),G=V({name:"Text",props:W,setup(t){const{mergedClsPrefixRef:i,inlineThemeDisabled:l}=M(t),o=z("Typography","-text",L,R,t,i),s=N(()=>{const{depth:p,type:m}=t,r=m==="default"?p===void 0?"textColor":`textColor${p}Depth`:U("textColor",m),{common:{fontWeightStrong:D,fontFamilyMono:x,cubicBezierEaseInOut:_},self:{codeTextColor:n,codeBorderRadius:a,codeColor:d,codeBorder:b,[r]:S}}=o.value;return{"--n-bezier":_,"--n-text-color":S,"--n-font-weight-strong":D,"--n-font-famliy-mono":x,"--n-code-border-radius":a,"--n-code-text-color":n,"--n-code-color":d,"--n-code-border":b}}),e=l?P("text",N(()=>`${t.type[0]}${t.depth||""}`),s,t):void 0;return{mergedClsPrefix:i,compitableTag:I(t,["as","tag"]),cssVars:l?void 0:s,themeClass:e==null?void 0:e.themeClass,onRender:e==null?void 0:e.onRender}},render(){var t,i,l;const{mergedClsPrefix:o}=this;(t=this.onRender)===null||t===void 0||t.call(this);const s=[`${o}-text`,this.themeClass,{[`${o}-text--code`]:this.code,[`${o}-text--delete`]:this.delete,[`${o}-text--strong`]:this.strong,[`${o}-text--italic`]:this.italic,[`${o}-text--underline`]:this.underline}],e=(l=(i=this.$slots).default)===null||l===void 0?void 0:l.call(i);return this.code?C("code",{class:s,style:this.cssVars},this.delete?C("del",null,e):e):this.delete?C("del",{class:s,style:this.cssVars},e):C(this.compitableTag||"span",{class:s,style:this.cssVars},e)}}),J={class:"menu"},Q={key:0},q={key:1},X={key:2},Z=V({__name:"index",setup(t){const{t:i,locale:l}=H(),o=n=>{l.value=n,localStorage.setItem("lang",n)},s=new Date,{ctx:e}=B(),{proxy:p}=B(),m=B(),{appContext:{config:{globalProperties:r}}}=B(),D=r.$utils,x=r.$cookie("U_NAME"),_=r.$utils.toDateString(new Date,"MM/dd/yyyy HH:mm:ss.SSS");return O(()=>{console.log("vue 1",e,p,r,m),console.log("vue 2 val",D,x,_),console.log("vue 3",m.appContext.config.globalProperties),console.log("vue $i18n",j("ctx"),i("home.hello"),r.$t("login.password"))}),(n,a)=>{const d=G,b=K,S=A("t");return $(),w("div",J,[f("div",null,[c(d,null,{default:u(()=>[g("\u8BED\u8A00\u5207\u6362")]),_:1}),c(b,{onClick:a[0]||(a[0]=T=>o("en"))},{default:u(()=>[g("English")]),_:1}),c(b,{onClick:a[1]||(a[1]=T=>o("zh"))},{default:u(()=>[g("\u4E2D\u6587")]),_:1})]),n.$t("login.password")?($(),w("div",Q,[c(d,null,{default:u(()=>[g(h(n.$t("login.password"))+"333333333333",1)]),_:1})])):k("",!0),n.$utils.isNull(v(s))?k("",!0):($(),w("div",q,[c(d,null,{default:u(()=>[g(h(n.$t("login.password"))+" utils222222",1)]),_:1})])),n.$UtilsFN.isUrl(v(s))?k("",!0):($(),w("div",X,[c(d,null,{default:u(()=>[g(h(n.$t("login.password"))+" UtilsFN1111111111",1)]),_:1})])),F(f("div",null,null,512),[[S,"login.password"]]),f("div",null,h(v(s)),1),f("h1",null,h(v(x)),1),f("div",null,h(v(_)),1)])}}});export{Z as default};
