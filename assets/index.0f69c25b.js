import{d as E,E as S,C as b,G as B,H as I,o as u,c as r,a as d,i as e,w as s,j as o,t as n,A as p,h as l,I as M,J as g,m as V}from"./index.dd08e32e.js";import{_ as x}from"./text.6ec27fef.js";const A={class:"menu"},H={key:0},F={key:1},P={key:2},j={key:3},L=E({__name:"index",setup(z){const{t:w,locale:h}=S(),m=t=>{h.value=t,localStorage.setItem("lang",t)},c=new Date,{ctx:y}=g(),{proxy:N}=g(),v=g(),{appContext:{config:{globalProperties:a}}}=g(),k=a.$utils,$=a.$cookie("U_NAME"),f=a.$utils.toDateString(new Date,"MM/dd/yyyy HH:mm:ss.SSS");return b(()=>{console.log("vue 1",y,N,a,v),console.log("vue 2 val",k,$,f),console.log("vue 3",v.appContext.config.globalProperties),console.log("vue $i18n",B("ctx"),w("home.hello"),a.$t("login.password"))}),(t,_)=>{const i=x,D=V,C=I("t");return u(),r("div",A,[d("div",null,[e(i,null,{default:s(()=>[o("\u8BED\u8A00\u5207\u6362")]),_:1}),e(D,{onClick:_[0]||(_[0]=U=>m("en"))},{default:s(()=>[o("English")]),_:1}),e(D,{onClick:_[1]||(_[1]=U=>m("zh"))},{default:s(()=>[o("\u4E2D\u6587")]),_:1})]),t.$t("login.password")?(u(),r("div",H,[e(i,null,{default:s(()=>[o(n(t.$t("login.password"))+"333333333333",1)]),_:1})])):p("",!0),t.$utils.isNull(l(c))?p("",!0):(u(),r("div",F,[e(i,null,{default:s(()=>[o(n(t.$t("login.password"))+" $utils.isNull(startDate)",1)]),_:1})])),t.$utils.isUrl(l(c))?p("",!0):(u(),r("div",P,[e(i,null,{default:s(()=>[o(n(t.$t("login.password"))+" $utils.isUrl(startDate)",1)]),_:1})])),t.$UtilsFN.isUrl(l(c))?p("",!0):(u(),r("div",j,[e(i,null,{default:s(()=>[o(n(t.$t("login.password"))+" $UtilsFN.isUrl(startDate)",1)]),_:1})])),M(d("div",null,null,512),[[C,"login.password"]]),d("div",null,n(l(c)),1),d("h1",null,n(l($)),1),d("div",null,n(l(f)),1)])}}});export{L as default};