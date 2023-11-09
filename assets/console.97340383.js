var U=Object.defineProperty;var D=Object.getOwnPropertySymbols;var G=Object.prototype.hasOwnProperty,q=Object.prototype.propertyIsEnumerable;var S=(n,s,o)=>s in n?U(n,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):n[s]=o,N=(n,s)=>{for(var o in s||(s={}))G.call(s,o)&&S(n,o,s[o]);if(D)for(var o of D(s))q.call(s,o)&&S(n,o,s[o]);return n};var A=(n,s,o)=>new Promise((h,f)=>{var v=p=>{try{_(o.next(p))}catch(x){f(x)}},b=p=>{try{_(o.throw(p))}catch(x){f(x)}},_=p=>p.done?h(p.value):Promise.resolve(p.value).then(v,b);_((o=o.apply(n,s)).next())});import{aa as H,d as $,r as w,dC as T,v as P,h as u,b5 as J,be as K,C as L,dD as Q,bl as R,s as W,o as t,c as r,t as M,a6 as X,dE as Y,i as e,w as a,j as y,a as l,B as d,F as m,z as Z,aG as ee,N as te,aF as se,ds as le,dF as ae,dt as ne,D as oe,cM as ie,ar as ue,dG as de}from"./index.42c72aa9.js";import ce from"./VisiTab.e2760f65.js";import{a as j,C as E,U as re,B as fe,S as _e,A as pe,b as me,M as ve,T as xe}from"./UsergroupAddOutlined.5b93055e.js";import"./FluxTrend.3597763e.js";import"./props.aee1002a.js";import"./useDesignSetting.4acc34b4.js";import"./VisitAmount.0413a4d6.js";function ye(){return H.request({url:"/dashboard/console",method:"get"})}const he={startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator(n){return n>=0}},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},Ve=$({name:"CountTo",props:he,emits:["onStarted","onFinished"],setup(n,{emit:s}){const o=w(n.startVal),h=w(!1);let f=T(o);const v=P(()=>x(u(f)));J(()=>{o.value=n.startVal}),K([()=>n.startVal,()=>n.endVal],()=>{n.autoplay&&b()}),L(()=>{n.autoplay&&b()});function b(){p(),o.value=n.endVal}function _(){o.value=n.startVal,p()}function p(){f=T(o,N({disabled:h,duration:n.duration,onFinished:()=>s("onFinished"),onStarted:()=>s("onStarted")},n.useEasing?{transition:Q[n.transition]}:{}))}function x(i){if(!i)return"";const{decimals:V,decimal:z,separator:g,suffix:B,prefix:C}=n;i=Number(i).toFixed(V),i+="";const k=i.split(".");let F=k[0];const I=k.length>1?z+k[1]:"",O=/(\d+)(\d{3})/;if(g&&!R(g))for(;O.test(F);)F=F.replace(O,"$1"+g+"$2");return C+F+I+B}return{value:v,start:b,reset:_}}});function ge(n,s,o,h,f,v){return t(),r("span",{style:X({color:n.color})},M(n.value),5)}const ke=W(Ve,[["render",ge]]),c=Y(ke),be={class:"console"},ze={class:"flex justify-between px-1 py-1"},we={class:"flex justify-between px-1 py-1"},Fe={class:"text-sn"},Ce={class:"text-sn"},Be={class:"flex justify-between"},je=l("div",{class:"text-sn"}," \u603B\u8BBF\u95EE\u91CF\uFF1A ",-1),Ee={class:"text-sn"},Oe={class:"flex justify-between px-1 py-1"},De={class:"flex justify-between px-2 py-2"},Se={class:"flex-1 text-sn"},Ne={class:"flex justify-between"},Ae=l("div",{class:"text-sn"}," \u603B\u9500\u552E\u989D\uFF1A ",-1),Te={class:"text-sn"},$e={class:"flex justify-between px-1 py-1"},Le={class:"flex justify-between px-1 py-1"},Me={class:"text-sn"},Ie={class:"text-sn"},Ue={class:"flex justify-between"},Ge=l("div",{class:"text-sn"}," \u8F6C\u5316\u7387\uFF1A ",-1),qe={class:"text-sn"},He={class:"flex justify-between px-1 py-1"},Pe={class:"flex justify-between px-1 py-1"},Je={class:"text-sn"},Ke={class:"text-sn"},Qe={class:"flex justify-between"},Re=l("div",{class:"text-sn"}," \u603B\u6210\u4EA4\u989D\uFF1A ",-1),We={class:"text-sn"},Xe={class:"mt-4"},Ye={key:1,class:"cursor-pointer"},Ze={class:"flex justify-center"},et={class:"flex justify-center"},dt=$({__name:"console",setup(n){const s=w(!0),o=w({}),h=w({}),f=w({}),v=w({}),b=[{icon:re,size:"32",title:"\u7528\u6237",color:"#69c0ff",eventObject:{click:()=>{}}},{icon:fe,size:"32",title:"\u5206\u6790",color:"#69c0ff",eventObject:{click:()=>{}}},{icon:_e,size:"32",title:"\u5546\u54C1",color:"#ff9c6e",eventObject:{click:()=>{}}},{icon:pe,size:"32",title:"\u8BA2\u5355",color:"#b37feb",eventObject:{click:()=>{}}},{icon:me,size:"32",title:"\u7968\u636E",color:"#ffd666",eventObject:{click:()=>{}}},{icon:ve,size:"32",title:"\u6D88\u606F",color:"#5cdbd3",eventObject:{click:()=>{}}},{icon:xe,size:"32",title:"\u6807\u7B7E",color:"#ff85c0",eventObject:{click:()=>{}}},{icon:ue,size:"32",title:"\u914D\u7F6E",color:"#ffc069",eventObject:{click:()=>{}}}];return L(()=>A(this,null,function*(){const _=yield ye();o.value=_.visits,h.value=_.saleroom,f.value=_.orderLarge,v.value=_.volume,s.value=!1})),(_,p)=>{const x=ee,i=de,V=te,z=se,g=le,B=ae,C=ne;return t(),r("div",be,[e(C,{cols:"1 s:2 m:3 l:4 xl:4 2xl:4",responsive:"screen","x-gap":12,"y-gap":8},{default:a(()=>[e(g,null,{default:a(()=>[e(z,{title:"\u8BBF\u95EE\u91CF",segmented:{content:!0,footer:!0},size:"small",bordered:!1},{"header-extra":a(()=>[e(x,{type:"success"},{default:a(()=>[y("\u65E5")]),_:1})]),footer:a(()=>[l("div",Be,[s.value?(t(),d(i,{key:0,text:"",repeat:2})):(t(),r(m,{key:1},[je,l("div",Ee,[e(u(c),{startVal:1,endVal:o.value.amount},null,8,["endVal"])])],64))])]),default:a(()=>[l("div",ze,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),d(u(c),{key:1,startVal:1,endVal:o.value.dayVisits,class:"text-3xl"},null,8,["endVal"]))]),l("div",we,[l("div",Fe,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[y(" \u65E5\u540C\u6BD4 "),e(u(c),{startVal:1,suffix:"%",endVal:o.value.rise},null,8,["endVal"]),e(V,{size:"12",color:"#00ff6f"},{default:a(()=>[e(u(j))]),_:1})],64))]),l("div",Ce,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[y(" \u5468\u540C\u6BD4 "),e(u(c),{startVal:1,suffix:"%",endVal:o.value.decline},null,8,["endVal"]),e(V,{size:"12",color:"#ffde66"},{default:a(()=>[e(u(E))]),_:1})],64))])])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(z,{title:"\u9500\u552E\u989D",segmented:{content:!0,footer:!0},size:"small",bordered:!1},{"header-extra":a(()=>[e(x,{type:"info"},{default:a(()=>[y("\u5468")]),_:1})]),footer:a(()=>[l("div",Ne,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[Ae,l("div",Te,[e(u(c),{prefix:"\uFFE5",startVal:1,endVal:h.value.amount},null,8,["endVal"])])],64))])]),default:a(()=>[l("div",Oe,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),d(u(c),{key:1,prefix:"\uFFE5",startVal:1,endVal:h.value.weekSaleroom,class:"text-3xl"},null,8,["endVal"]))]),l("div",De,[l("div",Se,[e(B,{type:"line",percentage:h.value.degree,"indicator-placement":"inside",processing:""},null,8,["percentage"])])])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(z,{title:"\u8BA2\u5355\u91CF",segmented:{content:!0,footer:!0},size:"small",bordered:!1},{"header-extra":a(()=>[e(x,{type:"warning"},{default:a(()=>[y("\u5468")]),_:1})]),footer:a(()=>[l("div",Ue,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[Ge,l("div",qe,[e(u(c),{startVal:1,suffix:"%",endVal:f.value.amount},null,8,["endVal"])])],64))])]),default:a(()=>[l("div",$e,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),d(u(c),{key:1,startVal:1,endVal:f.value.weekLarge,class:"text-3xl"},null,8,["endVal"]))]),l("div",Le,[l("div",Me,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[y(" \u65E5\u540C\u6BD4 "),e(u(c),{startVal:1,suffix:"%",endVal:f.value.rise},null,8,["endVal"]),e(V,{size:"12",color:"#00ff6f"},{default:a(()=>[e(u(j))]),_:1})],64))]),l("div",Ie,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[y(" \u5468\u540C\u6BD4 "),e(u(c),{startVal:1,suffix:"%",endVal:f.value.rise},null,8,["endVal"]),e(V,{size:"12",color:"#ffde66"},{default:a(()=>[e(u(E))]),_:1})],64))])])]),_:1})]),_:1}),e(g,null,{default:a(()=>[e(z,{title:"\u6210\u4EA4\u989D",segmented:{content:!0,footer:!0},size:"small",bordered:!1},{"header-extra":a(()=>[e(x,{type:"error"},{default:a(()=>[y("\u6708")]),_:1})]),footer:a(()=>[l("div",Qe,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[Re,l("div",We,[e(u(c),{prefix:"\uFFE5",startVal:1,endVal:v.value.amount},null,8,["endVal"])])],64))])]),default:a(()=>[l("div",He,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),d(u(c),{key:1,prefix:"\uFFE5",startVal:1,endVal:v.value.weekLarge,class:"text-3xl"},null,8,["endVal"]))]),l("div",Pe,[l("div",Je,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[y(" \u6708\u540C\u6BD4 "),e(u(c),{startVal:1,suffix:"%",endVal:v.value.rise},null,8,["endVal"]),e(V,{size:"12",color:"#00ff6f"},{default:a(()=>[e(u(j))]),_:1})],64))]),l("div",Ke,[s.value?(t(),d(i,{key:0,width:100,size:"medium"})):(t(),r(m,{key:1},[y(" \u6708\u540C\u6BD4 "),e(u(c),{startVal:1,suffix:"%",endVal:v.value.decline},null,8,["endVal"]),e(V,{size:"12",color:"#ffde66"},{default:a(()=>[e(u(E))]),_:1})],64))])])]),_:1})]),_:1})]),_:1}),l("div",Xe,[e(C,{cols:"1 s:2 m:3 l:8 xl:8 2xl:8",responsive:"screen","x-gap":16,"y-gap":8},{default:a(()=>[(t(),r(m,null,Z(b,(k,F)=>e(g,{key:F},{default:a(()=>[e(z,{"content-style":"padding-top: 0;",size:"small",bordered:!1},{footer:a(()=>[s.value?(t(),d(i,{key:0,size:"medium"})):(t(),r("div",Ye,[l("p",Ze,[l("span",null,[e(V,{size:k.size,class:"flex-1",color:k.color},{default:a(()=>[(t(),d(oe(k.icon),ie(k.eventObject||{}),null,16))]),_:2},1032,["size","color"])])]),l("p",et,[l("span",null,M(k.title),1)])]))]),_:2},1024)]),_:2},1024)),64))]),_:1})]),e(ce)])}}});export{dt as default};
