import{B as x}from"./BasicUpload.f07d5c58.js";import{d as y,dn as U,r as V,u as j,b as c,o as w,c as q,a as f,i as e,w as u,j as r,h as i,au as N,_ as R,k as S,m as P,a$ as T,n as $,dh as G,di as H}from"./index.dd65165b.js";import"./componentSetting.152e7e8a.js";import"./EyeOutlined.616f8fac.js";import"./DeleteOutlined.713f9f47.js";import"./PlusOutlined.2009e4e9.js";const J={class:"n-layout-page-header"},L={style:{"margin-left":"80px"}},O=y({__name:"index",setup(M){const g=U(),F={name:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u59D3\u540D",trigger:"blur"},remark:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u5907\u6CE8",trigger:"blur"},images:{required:!0,type:"array",message:"\u8BF7\u4E0A\u4F20\u75C5\u4F8B\u56FE\u7247",trigger:"change"}},s=V(null),m=j(),{uploadUrl:E}=g,n=c({name:"",mobile:"",images:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]}),C=c({platform:"miniPrograms",timestamp:new Date().getTime(),token:"Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo="});function v(){s.value.validate(o=>{o?m.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):m.success("\u9A8C\u8BC1\u6210\u529F")})}function b(){s.value.restoreValidation()}function h(o){n.images=i(o)}return(o,a)=>{const _=N,p=R,l=S,d=P,A=T,B=$,D=G,k=H;return w(),q("div",null,[f("div",J,[e(_,{bordered:!1,title:"\u4E0A\u4F20\u56FE\u7247"},{default:u(()=>[r(" \u4E0A\u4F20\u56FE\u7247\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u56FE\u7247\u4FE1\u606F ")]),_:1})]),e(_,{bordered:!1,class:"mt-4 proCard"},{default:u(()=>[e(k,{cols:"2 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:u(()=>[e(D,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:u(()=>[e(B,{"label-width":80,model:n,rules:F,"label-placement":"left",ref_key:"formRef",ref:s,class:"py-8"},{default:u(()=>[e(l,{label:"\u9884\u7EA6\u59D3\u540D",path:"name"},{default:u(()=>[e(p,{value:n.name,"onUpdate:value":a[0]||(a[0]=t=>n.name=t),placeholder:"\u8F93\u5165\u59D3\u540D"},null,8,["value"])]),_:1}),e(l,{label:"\u9884\u7EA6\u53F7\u7801",path:"mobile"},{default:u(()=>[e(p,{placeholder:"\u7535\u8BDD\u53F7\u7801",value:n.mobile,"onUpdate:value":a[1]||(a[1]=t=>n.mobile=t)},null,8,["value"])]),_:1}),e(l,{label:"\u75C5\u4F8B\u56FE\u7247",path:"images"},{default:u(()=>[e(i(x),{action:`${i(E)}/v1.0/files`,headers:C,data:{type:0},name:"files",width:100,height:100,onUploadChange:h,value:n.images,"onUpdate:value":a[2]||(a[2]=t=>n.images=t),helpText:"\u5355\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC72MB\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F2010\u4E2A\u6587\u4EF6"},null,8,["action","headers","value"])]),_:1}),f("div",L,[e(A,null,{default:u(()=>[e(d,{type:"primary",onClick:v},{default:u(()=>[r("\u63D0\u4EA4\u9884\u7EA6")]),_:1}),e(d,{onClick:b},{default:u(()=>[r("\u91CD\u7F6E")]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{O as default};
