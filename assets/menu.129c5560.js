var M=(T,E,p)=>new Promise((b,r)=>{var A=a=>{try{i(p.next(a))}catch(F){r(F)}},f=a=>{try{i(p.throw(a))}catch(F){r(F)}},i=a=>a.done?b(a.value):Promise.resolve(a.value).then(A,f);i((p=p.apply(T,E)).next())});import{d as te,r as o,u as ne,aK as le,v as ae,b as oe,C as se,dX as ie,o as C,c as O,a as m,i as e,w as u,j as _,h as d,t as w,B as N,A as _e,dY as I,aF as de,N as pe,m as re,bz as ce,b9 as me,_ as fe,dU as Fe,dZ as ve,ds as ge,dA as De,k as he,du as be,dv as ye,n as Be,dt as Ce}from"./index.d216646e.js";import Ee from"./CreateDrawer.6a971251.js";import{D as Ae}from"./DownOutlined.31af97b2.js";import{A as ke}from"./AlignLeftOutlined.a755096e.js";import{S as xe}from"./SearchOutlined.755bea9f.js";import{F as we}from"./FormOutlined.967cdfad.js";const Te={class:"n-layout-page-header"},Ue={class:"flex items-center"},ze={class:"flex items-center"},Ke={class:"w-full menu"},Me={class:"py-3 menu-list"},Oe={key:0,class:"flex items-center justify-center py-4"},$e=te({__name:"menu",setup(T){const E={label:{required:!0,message:"\u8BF7\u8F93\u5165\u6807\u9898",trigger:"blur"},path:{required:!0,message:"\u8BF7\u8F93\u5165\u8DEF\u5F84",trigger:"blur"}},p=o(null),b=o(),r=ne(),A=le();let f=o([]),i=o([]);const a=o([]),F=o(!0),S=o(!1),k=o(!1),v=o(""),x=o(""),U=o(""),j=ae(()=>!f.value.length),R=o([{label:"\u6DFB\u52A0\u9876\u7EA7\u83DC\u5355",key:"home",disabled:!1},{label:"\u6DFB\u52A0\u5B50\u83DC\u5355",key:"son",disabled:j}]),l=oe({type:1,label:"",subtitle:"",path:"",auth:"",openType:1});function L(t){U.value=t==="home"?"\u6DFB\u52A0\u9876\u680F\u83DC\u5355":`\u6DFB\u52A0\u5B50\u83DC\u5355\uFF1A${v.value}`,V()}function V(){const{openDrawer:t}=b.value;t()}function $(t){if(t.length){const n=I(d(a),t[0]);f.value=t,v.value=n.label,Object.assign(l,n),k.value=!0}else k.value=!1,f.value=[],v.value=""}function q(){A.info({title:"\u63D0\u793A",content:"\u60A8\u786E\u5B9A\u60F3\u5220\u9664\u6B64\u6743\u9650\u5417?",positiveText:"\u786E\u5B9A",negativeText:"\u53D6\u6D88",onPositiveClick:()=>{r.success("\u5220\u9664\u6210\u529F")},onNegativeClick:()=>{r.error("\u5DF2\u53D6\u6D88")}})}function P(){const t=I(d(a),f.value[0]);Object.assign(l,t)}function H(){p.value.validate(t=>{t?r.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):r.error("\u62B1\u6B49\uFF0C\u60A8\u6CA1\u6709\u8BE5\u6743\u9650")})}function X(){i.value.length?i.value=[]:i.value=d(a).map(t=>t.key)}se(()=>M(this,null,function*(){const t=yield ie(),n=t.list.map(g=>g.key);Object.assign(l,n),a.value=t.list,F.value=!1}));function Y(t){i.value=t}return(t,n)=>{const g=de,y=pe,D=re,Z=ce,B=me,h=fe,G=Fe,J=ve,z=ge,Q=De,c=he,K=be,W=ye,ee=Be,ue=Ce;return C(),O("div",null,[m("div",Te,[e(g,{bordered:!1,title:"\u83DC\u5355\u6743\u9650\u7BA1\u7406"},{default:u(()=>[_(" \u9875\u9762\u6570\u636E\u4E3A Mock \u793A\u4F8B\u6570\u636E\uFF0C\u975E\u771F\u5B9E\u6570\u636E\u3002 ")]),_:1})]),e(ue,{class:"mt-4",cols:"1 s:1 m:1 l:3 xl:3 2xl:3",responsive:"screen","x-gap":12},{default:u(()=>[e(z,{span:"1"},{default:u(()=>[e(g,{segmented:{content:!0},bordered:!1,size:"small"},{header:u(()=>[e(B,null,{default:u(()=>[e(Z,{trigger:"hover",onSelect:L,options:R.value},{default:u(()=>[e(D,{type:"info",ghost:"","icon-placement":"right"},{icon:u(()=>[m("div",Ue,[e(y,{size:"14"},{default:u(()=>[e(d(Ae))]),_:1})])]),default:u(()=>[_(" \u6DFB\u52A0\u83DC\u5355 ")]),_:1})]),_:1},8,["options"]),e(D,{type:"info",ghost:"","icon-placement":"left",onClick:X},{icon:u(()=>[m("div",ze,[e(y,{size:"14"},{default:u(()=>[e(d(ke))]),_:1})])]),default:u(()=>[_(" \u5168\u90E8"+w(d(i).length?"\u6536\u8D77":"\u5C55\u5F00")+" ",1)]),_:1})]),_:1})]),default:u(()=>[m("div",Ke,[e(h,{type:"input",value:x.value,"onUpdate:value":n[0]||(n[0]=s=>x.value=s),placeholder:"\u8F93\u5165\u83DC\u5355\u540D\u79F0\u641C\u7D22"},{suffix:u(()=>[e(y,{size:"18",class:"cursor-pointer"},{default:u(()=>[e(d(xe))]),_:1})]),_:1},8,["value"]),m("div",Me,[F.value?(C(),O("div",Oe,[e(G,{size:"medium"})])):(C(),N(J,{key:1,"block-line":"",cascade:"",checkable:"","virtual-scroll":!0,pattern:x.value,data:a.value,expandedKeys:d(i),style:{"max-height":"650px",overflow:"hidden"},"onUpdate:selectedKeys":$,"onUpdate:expandedKeys":Y},null,8,["pattern","data","expandedKeys"]))])])]),_:1})]),_:1}),e(z,{span:"2"},{default:u(()=>[e(g,{segmented:{content:!0},bordered:!1,size:"small"},{header:u(()=>[e(B,null,{default:u(()=>[e(y,{size:"18"},{default:u(()=>[e(d(we))]),_:1}),m("span",null,"\u7F16\u8F91\u83DC\u5355"+w(v.value?`\uFF1A${v.value}`:""),1)]),_:1})]),default:u(()=>[e(Q,{type:"info",closable:""},{default:u(()=>[_(" \u4ECE\u83DC\u5355\u5217\u8868\u9009\u62E9\u4E00\u9879\u540E\uFF0C\u8FDB\u884C\u7F16\u8F91")]),_:1}),k.value?(C(),N(ee,{key:0,model:l,rules:E,ref_key:"formRef",ref:p,"label-placement":"left","label-width":100,class:"py-4"},{default:u(()=>[e(c,{label:"\u7C7B\u578B",path:"type"},{default:u(()=>[m("span",null,w(l.type===1?"\u4FA7\u8FB9\u680F\u83DC\u5355":""),1)]),_:1}),e(c,{label:"\u6807\u9898",path:"label"},{default:u(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u6807\u9898",value:l.label,"onUpdate:value":n[1]||(n[1]=s=>l.label=s)},null,8,["value"])]),_:1}),e(c,{label:"\u526F\u6807\u9898",path:"subtitle"},{default:u(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u526F\u6807\u9898",value:l.subtitle,"onUpdate:value":n[2]||(n[2]=s=>l.subtitle=s)},null,8,["value"])]),_:1}),e(c,{label:"\u8DEF\u5F84",path:"path"},{default:u(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u8DEF\u5F84",value:l.path,"onUpdate:value":n[3]||(n[3]=s=>l.path=s)},null,8,["value"])]),_:1}),e(c,{label:"\u6253\u5F00\u65B9\u5F0F",path:"openType"},{default:u(()=>[e(W,{value:l.openType,"onUpdate:value":n[4]||(n[4]=s=>l.openType=s),name:"openType"},{default:u(()=>[e(B,null,{default:u(()=>[e(K,{value:1},{default:u(()=>[_("\u5F53\u524D\u7A97\u53E3")]),_:1}),e(K,{value:2},{default:u(()=>[_("\u65B0\u7A97\u53E3")]),_:1})]),_:1})]),_:1},8,["value"])]),_:1}),e(c,{label:"\u83DC\u5355\u6743\u9650",path:"auth"},{default:u(()=>[e(h,{placeholder:"\u8BF7\u8F93\u5165\u6743\u9650\uFF0C\u591A\u4E2A\u6743\u9650\u7528\uFF0C\u5206\u5272",value:l.auth,"onUpdate:value":n[5]||(n[5]=s=>l.auth=s)},null,8,["value"])]),_:1}),e(c,{path:"auth",style:{"margin-left":"100px"}},{default:u(()=>[e(B,null,{default:u(()=>[e(D,{type:"primary",loading:S.value,onClick:H},{default:u(()=>[_("\u4FDD\u5B58\u4FEE\u6539")]),_:1},8,["loading"]),e(D,{onClick:P},{default:u(()=>[_("\u91CD\u7F6E")]),_:1}),e(D,{onClick:q},{default:u(()=>[_("\u5220\u9664")]),_:1})]),_:1})]),_:1})]),_:1},8,["model"])):_e("",!0)]),_:1})]),_:1})]),_:1}),e(Ee,{ref_key:"createDrawerRef",ref:b,title:U.value},null,8,["title"])])}}});export{$e as default};
