import{_ as f}from"./Step1.vue_vue_type_script_setup_true_lang.e033d6c9.js";import{_ as v}from"./Step2.vue_vue_type_script_setup_true_lang.b6a8b0e7.js";import x from"./Step3.893774c0.js";import{s as y,r as u,o as s,c as S,a as g,i as t,w as n,j as h,B as a,A as _,aF as k,dP as N,dQ as B,b9 as F}from"./index.42c72aa9.js";const b={class:"n-layout-page-header"},V={__name:"stepForm",setup(C){const e=u(1),i=u("process");function c(){e.value<3&&(e.value+=1)}function r(){e.value>1&&(e.value-=1)}function l(){e.value=1}return(P,j)=>{const p=k,o=N,d=B,m=F;return s(),S("div",null,[g("div",b,[t(p,{bordered:!1,title:"\u5206\u6B65\u8868\u5355"},{default:n(()=>[h(" \u5C06\u4E00\u4E2A\u5197\u957F\u6216\u7528\u6237\u4E0D\u719F\u6089\u7684\u8868\u5355\u4EFB\u52A1\u5206\u6210\u591A\u4E2A\u6B65\u9AA4\uFF0C\u6307\u5BFC\u7528\u6237\u5B8C\u6210\u3002 ")]),_:1})]),t(p,{bordered:!1,class:"mt-4 proCard"},{default:n(()=>[t(m,{vertical:"",class:"steps",justify:"center"},{default:n(()=>[t(d,{current:e.value,status:i.value},{default:n(()=>[t(o,{title:"\u586B\u5199\u8F6C\u8D26\u4FE1\u606F",description:"\u786E\u4FDD\u586B\u5199\u6B63\u786E"}),t(o,{title:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F",description:"\u786E\u8BA4\u8F6C\u8D26\u4FE1\u606F"}),t(o,{title:"\u5B8C\u6210\u8F6C\u8D26",description:"\u606D\u559C\u60A8\uFF0C\u8F6C\u8D26\u6210\u529F"})]),_:1},8,["current","status"]),e.value===1?(s(),a(f,{key:0,onNextStep:c})):_("",!0),e.value===2?(s(),a(v,{key:1,onNextStep:c,onPrevStep:r})):_("",!0),e.value===3?(s(),a(x,{key:2,onPrevStep:r,onFinish:l})):_("",!0)]),_:1})]),_:1})])}}},E=y(V,[["__scopeId","data-v-5da025d7"]]);export{E as default};
