var N=(T,E,p)=>new Promise((b,r)=>{var A=a=>{try{i(p.next(a))}catch(F){r(F)}},f=a=>{try{i(p.throw(a))}catch(F){r(F)}},i=a=>a.done?b(a.value):Promise.resolve(a.value).then(A,f);i((p=p.apply(T,E)).next())});import{d as te,r as o,u as ne,aA as le,v as ae,b as oe,C as se,dN as ie,o as C,c as U,a as m,i as e,w as u,j as _,h as d,t as w,B as z,A as _e,dO as j,au as de,N as pe,m as re,bp as ce,a$ as me,_ as fe,dK as Fe,dP as ve,dh as ge,dq as De,k as he,dj as be,dk as ye,n as Be,di as Ce}from"./index.dd65165b.js";import Ee from"./CreateDrawer.03542bd1.js";import{D as Ae}from"./DownOutlined.8efc106b.js";import{A as ke}from"./AlignLeftOutlined.617993de.js";import{S as xe}from"./SearchOutlined.85543930.js";import{F as we}from"./FormOutlined.505b1a69.js";const Te={class:"n-layout-page-header"},Oe={class:"flex items-center"},Ke={class:"flex items-center"},Me={class:"w-full menu"},Ne={class:"py-3 menu-list"},Ue={key:0,class:"flex items-center justify-center py-4"},Ve=te({__name:"menu",setup(T){const E={label:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},path:{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u5F84",trigger:"blur"}},p=o(null),b=o(),r=ne(),A=le();let f=o([]),i=o([]);const a=o([]),F=o(!0),I=o(!1),k=o(!1),v=o(""),x=o(""),O=o(""),S=ae(()=>!f.value.length),R=o([{label:"\u6DFB\u52A0\u9876\u7EA7\u83DC\u5355",key:"home",disabled:!1},{label:"\u6DFB\u52A0\u5B50\u83DC\u5355",key:"son",disabled:S}]),l=oe({type:1,label:"",subtitle:"",path:"",auth:"",openType:1});function $(t){O.value=t==="home"?"\u6DFB\u52A0\u9876\u680F\u83DC\u5355":`\u6DFB\u52A0\u5B50\u83DC\u5355\uFF1A${v.value}`,L()}function L(){const{openDrawer:t}=b.value;t()}function V(t){if(t.length){const n=j(d(a),t[0]);f.value=t,v.value=n.label,Object.assign(l,n),k.value=!0}else k.value=!1,f.value=[],v.value=""}function q(){A.info({title:"\u63D0\u793A",content:"\u60A8\u786E\u5B9A\u60F3\u5220\u9664\u6B64\u6743\u9650\u5417?",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{r.success("\u5220\u9664\u6210\u529F")},onNegativeClick:()=>{r.error("\u5DF2\u53D6\u6D88")}})}function P(){const t=j(d(a),f.value[0]);Object.assign(l,t)}function H(){p.value.validate(t=>{t?r.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):r.error("\u62B1\u6B49\uFF0C\u60A8\u6CA1\u6709\u8BE5\u6743\u9650")})}function G(){i.value.length?i.value=[]:i.value=d(a).map(t=>t.key)}se(()=>N(this,null,function*(){const t=yield ie(),n=t.list.map(g=>g.key);Object.assign(l,n),a.value=t.list,F.value=!1}));function J(t){i.value=t}return(t,n)=>{const g=de,y=pe,D=re,Q=ce,B=me,h=fe,W=Fe,X=ve,K=ge,Y=De,c=he,M=be,Z=ye,ee=Be,ue=Ce;return C(),U("div",null,[m("div",Te,[e(g,{bordered:!1,title:"\u83DC\u5355\u6743\u9650\u7BA1\u7406"},{default:u(()=>[_(" \u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002 ")]),_:1})]),e(ue,{class:"mt-4",cols:"1 s:1 m:1 l:3 xl:3 2xl:3",responsive:"screen","x-gap":12},{default:u(()=>[e(K,{span:"1"},{default:u(()=>[e(g,{segmented:{content:!0},bordered:!1,size:"small"},{header:u(()=>[e(B,null,{default:u(()=>[e(Q,{trigger:"hover",onSelect:$,options:R.value},{default:u(()=>[e(D,{type:"info",ghost:"","icon-placement":"right"},{icon:u(()=>[m("div",Oe,[e(y,{size:"14"},{default:u(()=>[e(d(Ae))]),_:1})])]),default:u(()=>[_(" \u6DFB\u52A0\u83DC\u5355 ")]),_:1})]),_:1},8,["options"]),e(D,{type:"info",ghost:"","icon-placement":"left",onClick:G},{icon:u(()=>[m("div",Ke,[e(y,{size:"14"},{default:u(()=>[e(d(ke))]),_:1})])]),default:u(()=>[_(" \u5168\u90E8"+w(d(i).length?"\u6536\u8D77":"\u5C55\u5F00")+" ",1)]),_:1})]),_:1})]),default:u(()=>[m("div",Me,[e(h,{type:"input",value:x.value,"onUpdate:value":n[0]||(n[0]=s=>x.value=s),placeholder:"\u8F93\u5165\u83DC\u5355\u540D\u79F0\u641C\u7D22"},{suffix:u(()=>[e(y,{size:"18",class:"cursor-pointer"},{default:u(()=>[e(d(xe))]),_:1})]),_:1},8,["value"]),m("div",Ne,[F.value?(C(),U("div",Ue,[e(W,{size:"medium"})])):(C(),z(X,{key:1,"block-line":"",cascade:"",checkable:"","virtual-scroll":!0,pattern:x.value,data:a.value,expandedKeys:d(i),style:{"max-height":"650px",overflow:"hidden"},"onUpdate:selectedKeys":V,"onUpdate:expandedKeys":J},null,8,["pattern","data","expandedKeys"]))])])]),_:1})]),_:1}),e(K,{span:"2"},{default:u(()=>[e(g,{segmented:{content:!0},bordered:!1,size:"small"},{header:u(()=>[e(B,null,{default:u(()=>[e(y,{size:"18"},{default:u(()=>[e(d(we))]),_:1}),m("span",null,"\u7F16\u8F91\u83DC\u5355"+w(v.value?`\uFF1A${v.value}`:""),1)]),_:1})]),default:u(()=>[e(Y,{type:"info",closable:""},{default:u(()=>[_(" \u4ECE\u83DC\u5355\u5217\u8868\u9009\u62E9\u4E00\u9879\u540E\uFF0C\u8FDB\u884C\u7F16\u8F91")]),_:1}),k.value?(C(),z(ee,{key:0,model:l,rules:E,ref_key:"formRef",ref:p,"label-placement":"left","label-width":100,class:"py-4"},{default:u(()=>[e(c,{label:"\u7C7B\u578B",path:"type"},{default:u(()=>[m("span",null,w(l.type===1?"\u4FA7\u8FB9\u680F\u83DC\u5355":""),1)]),_:1}),e(c,{label:"\u6807\u9898",path:"label"},{default:u(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",value:l.label,"onUpdate:value":n[1]||(n[1]=s=>l.label=s)},null,8,["value"])]),_:1}),e(c,{label:"\u526F\u6807\u9898",path:"subtitle"},{default:u(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u526F\u6807\u9898",value:l.subtitle,"onUpdate:value":n[2]||(n[2]=s=>l.subtitle=s)},null,8,["value"])]),_:1}),e(c,{label:"\u8DEF\u5F84",path:"path"},{default:u(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u8DEF\u5F84",value:l.path,"onUpdate:value":n[3]||(n[3]=s=>l.path=s)},null,8,["value"])]),_:1}),e(c,{label:"\u6253\u5F00\u65B9\u5F0F",path:"openType"},{default:u(()=>[e(Z,{value:l.openType,"onUpdate:value":n[4]||(n[4]=s=>l.openType=s),name:"openType"},{default:u(()=>[e(B,null,{default:u(()=>[e(M,{value:1},{default:u(()=>[_("\u5F53\u524D\u7A97\u53E3")]),_:1}),e(M,{value:2},{default:u(()=>[_("\u65B0\u7A97\u53E3")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(c,{label:"\u83DC\u5355\u6743\u9650",path:"auth"},{default:u(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\uFF0C\u591A\u4E2A\u6743\u9650\u7528\uFF0C\u5206\u5272",value:l.auth,"onUpdate:value":n[5]||(n[5]=s=>l.auth=s)},null,8,["value"])]),_:1}),e(c,{path:"auth",style:{"margin-left":"100px"}},{default:u(()=>[e(B,null,{default:u(()=>[e(D,{type:"primary",loading:I.value,onClick:H},{default:u(()=>[_("\u4FDD\u5B58\u4FEE\u6539")]),_:1},8,["loading"]),e(D,{onClick:P},{default:u(()=>[_("\u91CD\u7F6E")]),_:1}),e(D,{onClick:q},{default:u(()=>[_("\u5220\u9664")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):_e("",!0)]),_:1})]),_:1})]),_:1}),e(Ee,{ref_key:"createDrawerRef",ref:b,title:O.value},null,8,["title"])])}}});export{Ve as default};
