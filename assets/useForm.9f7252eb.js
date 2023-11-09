import{B as F}from"./BasicForm.79ded4bf.js";import{u as g}from"./useForm.43039822.js";import{d as b,u as f,o as B,c as E,a as n,i as o,w as u,j as h,h as r,aF as P,_ as v,s as C}from"./index.92622b47.js";import"./propTypes.9f776f9a.js";import"./DownOutlined.162bbd90.js";import"./UpOutlined.e0ca4fb4.js";import"./QuestionCircleOutlined.b41416e3.js";const D={class:"n-layout-page-header"},A={class:"BasicForm"},N=b({__name:"useForm",setup(k){const c=[{field:"name",component:"NInput",label:"\u59D3\u540D",labelMessage:"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",giProps:{span:1},componentProps:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D",onInput:e=>{console.log(e)}},rules:[{required:!0,message:"\u8BF7\u8F93\u5165\u59D3\u540D",trigger:["blur"]}]},{field:"mobile",component:"NInputNumber",label:"\u624B\u673A",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u624B\u673A\u53F7\u7801",showButton:!1,onInput:e=>{console.log(e)}}},{field:"type",component:"NSelect",label:"\u7C7B\u578B",giProps:{},componentProps:{placeholder:"\u8BF7\u9009\u62E9\u7C7B\u578B",options:[{label:"\u8212\u9002\u6027",value:1},{label:"\u7ECF\u6D4E\u6027",value:2}],onUpdateValue:e=>{console.log(e)}}},{field:"makeDate",component:"NDatePicker",label:"\u9884\u7EA6\u65F6\u95F4",giProps:{},defaultValue:118313526e4,componentProps:{type:"date",clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeTime",component:"NTimePicker",label:"\u505C\u7559\u65F6\u95F4",giProps:{},componentProps:{clearable:!0,onUpdateValue:e=>{console.log(e)}}},{field:"makeProject",component:"NCheckbox",label:"\u9884\u7EA6\u9879\u76EE",giProps:{},componentProps:{placeholder:"\u8BF7\u9009\u62E9\u9884\u7EA6\u9879\u76EE",options:[{label:"\u79CD\u7259",value:1},{label:"\u8865\u7259",value:2},{label:"\u6839\u7BA1",value:3}],onUpdateChecked:e=>{console.log(e)}}},{field:"makeSource",component:"NRadioGroup",label:"\u6765\u6E90",giProps:{},componentProps:{options:[{label:"\u7F51\u4E0A",value:1},{label:"\u95E8\u5E97",value:2}],onUpdateChecked:e=>{console.log(e)}}},{field:"status",label:"\u72B6\u6001",giProps:{},slot:"statusSlot"}],l=f(),[p,{}]=g({gridProps:{cols:1},collapsedRows:3,labelWidth:120,layout:"horizontal",submitButtonText:"\u63D0\u4EA4\u9884\u7EA6",schemas:c});function i(e){if(!e)return l.error("\u8BF7\u586B\u5199\u5B8C\u6574\u4FE1\u606F");console.log(e),l.success(JSON.stringify(e))}function d(e){console.log(e)}return(e,x)=>{const t=P,m=v;return B(),E("div",null,[n("div",D,[o(t,{bordered:!1,title:"\u57FA\u7840\u8868\u5355"},{default:u(()=>[h(" useForm \u8868\u5355\uFF0C\u7528\u4E8E\u5411\u7528\u6237\u6536\u96C6\u8868\u5355\u4FE1\u606F ")]),_:1})]),o(t,{bordered:!1,class:"mt-4 proCard"},{default:u(()=>[n("div",A,[o(r(F),{onRegister:r(p),onSubmit:i,onReset:d},{statusSlot:u(({model:a,field:s})=>[o(m,{value:a[s],"onUpdate:value":_=>a[s]=_},null,8,["value","onUpdate:value"])]),_:1},8,["onRegister"])])]),_:1})])}}});const T=C(N,[["__scopeId","data-v-df395b3f"]]);export{T as default};
