var S=Object.defineProperty,b=Object.defineProperties;var h=Object.getOwnPropertyDescriptors;var r=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var d=(e,t,n)=>t in e?S(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))T.call(t,n)&&d(e,n,t[n]);if(r)for(var n of r(t))A.call(t,n)&&d(e,n,t[n]);return e},y=(e,t)=>b(e,h(t));import $ from"./BasicSetting.d7d6129b.js";import w from"./RevealSetting.a328f3a0.js";import z from"./EmailSetting.cc3ddefe.js";import{d as D,b as R,b7 as L,s as N,x as i,o as a,c as E,i as u,w as s,F as V,z as j,B as c,A as p,aF as x,ds as I,dt as M,y as q,j as B,t as g,dM as G}from"./index.92622b47.js";const H=[{name:"\u57FA\u672C\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u5E38\u89C4\u8BBE\u7F6E",key:1},{name:"\u663E\u793A\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u663E\u793A\u8BBE\u7F6E",key:2},{name:"\u90AE\u4EF6\u8BBE\u7F6E",desc:"\u7CFB\u7EDF\u90AE\u4EF6\u8BBE\u7F6E",key:3}],J=D({components:{BasicSetting:$,RevealSetting:w,EmailSetting:z},setup(){const e=R({type:1,typeTitle:"\u57FA\u672C\u8BBE\u7F6E"});function t(n){e.type=n.key,e.typeTitle=n.name}return y(m({},L(e)),{switchType:t,typeTabList:H})}});function K(e,t,n,O,P,Q){const F=G,_=x,l=I,f=i("BasicSetting"),k=i("RevealSetting"),C=i("EmailSetting"),v=M;return a(),E("div",null,[u(v,{"x-gap":24},{default:s(()=>[u(l,{span:"6"},{default:s(()=>[u(_,{bordered:!1,size:"small",class:"proCard"},{default:s(()=>[(a(!0),E(V,null,j(e.typeTabList,o=>(a(),c(F,{class:q(["thing-cell",{"thing-cell-on":e.type===o.key}]),key:o.key,onClick:U=>e.switchType(o)},{header:s(()=>[B(g(o.name),1)]),description:s(()=>[B(g(o.desc),1)]),_:2},1032,["class","onClick"]))),128))]),_:1})]),_:1}),u(l,{span:"18"},{default:s(()=>[u(_,{bordered:!1,size:"small",title:e.typeTitle,class:"proCard"},{default:s(()=>[e.type===1?(a(),c(f,{key:0})):p("",!0),e.type===2?(a(),c(k,{key:1})):p("",!0),e.type===3?(a(),c(C,{key:2})):p("",!0)]),_:1},8,["title"])]),_:1})]),_:1})])}const te=N(J,[["render",K],["__scopeId","data-v-7108b9a9"]]);export{te as default};