var E=Object.defineProperty;var f=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable;var _=(t,u,e)=>u in t?E(t,u,{enumerable:!0,configurable:!0,writable:!0,value:e}):t[u]=e,d=(t,u)=>{for(var e in u||(u={}))T.call(u,e)&&_(t,e,u[e]);if(f)for(var e of f(u))B.call(u,e)&&_(t,e,u[e]);return t};var h=(t,u,e)=>new Promise((s,r)=>{var l=i=>{try{a(e.next(i))}catch(n){r(n)}},c=i=>{try{a(e.throw(i))}catch(n){r(n)}},a=i=>i.done?s(i.value):Promise.resolve(i.value).then(l,c);a((e=e.apply(t,u)).next())});import{B as A}from"./TableAction.vue_vue_type_script_lang.90c6c5ce.js";import{T as x}from"./TableAction.d0e96236.js";import{g as v}from"./list.b51ac8da.js";import{W as p,aJ as N,aG as R,d as S,u as z,aK as K,r as M,b as F,o as O,B as V,w as m,i as k,j,h as y,m as q,aF as G}from"./index.42c72aa9.js";import{D as J}from"./DeleteOutlined.84233d11.js";import{E as L}from"./EditOutlined.23371761.js";import"./vuedraggable.umd.c4b2afdf.js";import"./useDesignSetting.4acc34b4.js";import"./VerticalRightOutlined.a3aec76a.js";import"./propTypes.1a5bcfd5.js";import"./FormOutlined.8ed72cbb.js";import"./ReloadOutlined.70a90006.js";import"./componentSetting.152e7e8a.js";import"./QuestionCircleOutlined.c3a3ee3a.js";import"./DownOutlined.cbf68a24.js";const P=[{title:"id",key:"id",width:100},{title:"\u7F16\u7801",key:"no",width:100},{title:"\u540D\u79F0",key:"name",width:100},{title:"\u5934\u50CF",key:"avatar",width:100,render(t){return p(N,{size:48,src:t.avatar})}},{title:"\u5730\u5740",key:"address",width:150},{title:"\u5F00\u59CB\u65E5\u671F",key:"beginTime",width:160},{title:"\u7ED3\u675F\u65E5\u671F",key:"endTime",width:160},{title:"\u72B6\u6001",key:"status",width:100,render(t){return p(R,{type:t.status?"success":"error"},{default:()=>t.status?"\u542F\u7528":"\u7981\u7528"})}},{title:"\u521B\u5EFA\u65F6\u95F4",key:"date",width:160},{title:"\u505C\u7559\u65F6\u95F4",key:"time",width:80}],re=S({__name:"basic",setup(t){const u=z(),e=K(),s=M(),r=F({pageSize:5,name:"xiaoMa"}),l=F({width:150,title:"\u64CD\u4F5C",key:"action",fixed:"right",align:"center",render(o){return p(x,{style:"text",actions:c(o)})}});function c(o){return[{label:"\u5220\u9664",type:"error",color:"red",icon:J,onClick:w.bind(null,o),ifShow:()=>!0,auth:["basic_list"]},{label:"\u7F16\u8F91",type:"primary",icon:L,onClick:g.bind(null,o),ifShow:()=>!0,auth:["basic_list"]}]}const a=o=>h(this,null,function*(){return yield v(d(d({},r),o))});function i(o){console.log(o)}function n(){s.value.reload()}function w(o){console.log(o),e.info({title:"\u63D0\u793A",content:`\u60A8\u60F3\u5220\u9664${o.name}`,positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{u.success("\u5220\u9664\u6210\u529F")},onNegativeClick:()=>{}})}function g(o){console.log(o),u.success("\u60A8\u70B9\u51FB\u4E86\u7F16\u8F91\u6309\u94AE")}return(o,U)=>{const b=q,C=G;return O(),V(C,{bordered:!1,class:"proCard"},{default:m(()=>[k(y(A),{title:"\u8868\u683C\u5217\u8868",titleTooltip:"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",columns:y(P),request:a,"row-key":D=>D.id,ref_key:"actionRef",ref:s,actionColumn:l,"scroll-x":1360,"onUpdate:checkedRowKeys":i},{toolbar:m(()=>[k(b,{type:"primary",onClick:n},{default:m(()=>[j("\u5237\u65B0\u6570\u636E")]),_:1})]),_:1},8,["columns","row-key","actionColumn"])]),_:1})}}});export{re as default};