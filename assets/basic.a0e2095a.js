import{B as m}from"./BasicForm.086fec4d.js";import{d as _,u as b,o as F,c as f,a as s,i as u,w as o,j as B,h as E,as as g,_ as h,s as v}from"./index.8bb9f8e1.js";import"./propTypes.5abfbe49.js";import"./DownOutlined.c246ed4b.js";import"./UpOutlined.36e7ee99.js";import"./QuestionCircleOutlined.7eff4913.js";const C={class:"n-layout-page-header"},A={class:"BasicForm"},D=_({__name:"basic",setup(N){const c=[{field:"name",component:"NInput",label:"\u59D3\u540D",labelMessage:"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",onInput:e=>{console.log(e)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"\u624B\u673A",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",showButton:!1,onInput:e=>{console.log(e)}}},{field:"type",component:"NSelect",label:"\u7C7B\u578B",componentProps:{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",options:[{label:"\u8212\u9002\u6027",value:1},{label:"\u7ECF\u6D4E\u6027",value:2}],onUpdateValue:e=>{console.log(e)}}},{field:"makeDate",component:"NDatePicker",label:"\u9884\u7EA6\u65F6\u95F4",defaultValue:118313526e4,componentProps:{type:"date",clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeTime",component:"NTimePicker",label:"\u505C\u7559\u65F6\u95F4",componentProps:{clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeProject",component:"NCheckbox",label:"\u9884\u7EA6\u9879\u76EE",componentProps:{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u9879\u76EE",options:[{label:"\u79CD\u7259",value:1},{label:"\u8865\u7259",value:2},{label:"\u6839\u7BA1",value:3}],onUpdateChecked:e=>{console.log(e)}}},{field:"makeSource",component:"NRadioGroup",label:"\u6765\u6E90",componentProps:{options:[{label:"\u7F51\u4E0A",value:1},{label:"\u95E8\u5E97",value:2}],onUpdateChecked:e=>{console.log(e)}}},{field:"status",label:"\u72B6\u6001",slot:"statusSlot"}],l=b();function p(e){if(!e)return l.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F");console.log(e),l.success(JSON.stringify(e))}function r(e){console.log(e)}return(e,k)=>{const a=g,i=h;return F(),f("div",null,[s("div",C,[u(a,{bordered:!1,title:"\u57FA\u7840\u8868\u5355"},{default:o(()=>[B(" \u57FA\u7840\u8868\u5355\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u8868\u5355\u4FE1\u606F ")]),_:1})]),u(a,{bordered:!1,class:"mt-4 proCard"},{default:o(()=>[s("div",A,[u(E(m),{submitButtonText:"\u63D0\u4EA4\u9884\u7EA6",layout:"horizontal",gridProps:{cols:1},schemas:c,onSubmit:p,onReset:r},{statusSlot:o(({model:t,field:n})=>[u(i,{value:t[n],"onUpdate:value":d=>t[n]=d},null,8,["value","onUpdate:value"])]),_:1})])]),_:1})])}}});const I=v(D,[["__scopeId","data-v-e9382ec2"]]);export{I as default};
