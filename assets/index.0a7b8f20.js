import{B as k}from"./BasicUpload.fe4f71f5.js";import{d as x,dy as U,r as V,u as j,b as c,o as w,c as q,a as f,i as e,w as u,j as r,h as m,aF as N,_ as R,k as S,m as P,b9 as T,n as G,ds as H,dt as J}from"./index.42c72aa9.js";import"./componentSetting.152e7e8a.js";import"./EyeOutlined.ecc167af.js";import"./DeleteOutlined.84233d11.js";import"./PlusOutlined.1f2d4cf4.js";const L={class:"n-layout-page-header"},M={style:{"margin-left":"80px"}},O=x({__name:"index",setup(Q){const g=U(),F={name:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u59D3\u540D",trigger:"blur"},remark:{required:!0,message:"\u8BF7\u8F93\u5165\u9884\u7EA6\u5907\u6CE8",trigger:"blur"},images:{required:!0,type:"array",message:"\u8BF7\u4E0A\u4F20\u75C5\u4F8B\u56FE\u7247",trigger:"change"}},s=V(null),_=j(),{uploadUrl:E}=g,n=c({name:"",mobile:"",images:["https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"]}),C=c({platform:"miniPrograms",timestamp:new Date().getTime(),token:"Q6fFCuhc1vkKn5JNFWaCLf6gRAc5n0LQHd08dSnG4qo="});function b(){s.value.validate(o=>{o?_.error("\u9A8C\u8BC1\u5931\u8D25\uFF0C\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F"):_.success("\u9A8C\u8BC1\u6210\u529F")})}function v(){s.value.restoreValidation()}function h(o){n.images=m(o)}return(o,t)=>{const i=N,p=R,l=S,d=P,A=T,B=G,D=H,y=J;return w(),q("div",null,[f("div",L,[e(i,{bordered:!1,title:"\u4E0A\u4F20\u56FE\u7247"},{default:u(()=>[r(" \u4E0A\u4F20\u56FE\u7247\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u56FE\u7247\u4FE1\u606F ")]),_:1})]),e(i,{bordered:!1,class:"mt-4 proCard"},{default:u(()=>[e(y,{cols:"2 s:1 m:3 l:3 xl:3 2xl:3",responsive:"screen"},{default:u(()=>[e(D,{offset:"0 s:0 m:1 l:1 xl:1 2xl:1"},{default:u(()=>[e(B,{"label-width":80,model:n,rules:F,"label-placement":"left",ref_key:"formRef",ref:s,class:"py-8"},{default:u(()=>[e(l,{label:"\u9884\u7EA6\u59D3\u540D",path:"name"},{default:u(()=>[e(p,{value:n.name,"onUpdate:value":t[0]||(t[0]=a=>n.name=a),placeholder:"\u8F93\u5165\u59D3\u540D"},null,8,["value"])]),_:1}),e(l,{label:"\u9884\u7EA6\u53F7\u7801",path:"mobile"},{default:u(()=>[e(p,{placeholder:"\u7535\u8BDD\u53F7\u7801",value:n.mobile,"onUpdate:value":t[1]||(t[1]=a=>n.mobile=a)},null,8,["value"])]),_:1}),e(l,{label:"\u75C5\u4F8B\u56FE\u7247",path:"images"},{default:u(()=>[e(m(k),{action:`${m(E)}/v1.0/files`,headers:C,data:{type:0},name:"files",width:100,height:100,onUploadChange:h,value:n.images,"onUpdate:value":t[2]||(t[2]=a=>n.images=a),helpText:"\u5355\u4E2A\u6587\u4EF6\u4E0D\u8D85\u8FC72MB\uFF0C\u6700\u591A\u53EA\u80FD\u4E0A\u4F2010\u4E2A\u6587\u4EF6"},null,8,["action","headers","value"])]),_:1}),f("div",M,[e(A,null,{default:u(()=>[e(d,{type:"primary",onClick:b},{default:u(()=>[r("\u63D0\u4EA4\u9884\u7EA6")]),_:1}),e(d,{onClick:v},{default:u(()=>[r("\u91CD\u7F6E")]),_:1})]),_:1})])]),_:1},8,["model"])]),_:1})]),_:1})]),_:1})])}}});export{O as default};
