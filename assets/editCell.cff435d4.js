var h=Object.defineProperty;var y=Object.getOwnPropertySymbols;var w=Object.prototype.hasOwnProperty,E=Object.prototype.propertyIsEnumerable;var _=(i,t,e)=>t in i?h(i,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):i[t]=e,m=(i,t)=>{for(var e in t||(t={}))w.call(t,e)&&_(i,e,t[e]);if(y)for(var e of y(t))E.call(t,e)&&_(i,e,t[e]);return i};var f=(i,t,e)=>new Promise((s,r)=>{var l=o=>{try{n(e.next(o))}catch(a){r(a)}},d=o=>{try{n(e.throw(o))}catch(a){r(a)}},n=o=>o.done?s(o.value):Promise.resolve(o.value).then(l,d);n((e=e.apply(i,t)).next())});import{B as b}from"./TableAction.vue_vue_type_script_lang.c01b52e4.js";import{g}from"./list.371e1218.js";import{W as v,aJ as B,d as T,r as x,b as D,o as N,B as R,w as p,i as k,j as M,h as C,m as A,aF as H}from"./index.92622b47.js";import"./vuedraggable.umd.91f36162.js";import"./useDesignSetting.9483b2ba.js";import"./VerticalRightOutlined.fd25f1bd.js";import"./propTypes.9f776f9a.js";import"./FormOutlined.51d8452e.js";import"./ReloadOutlined.91fa0059.js";import"./componentSetting.152e7e8a.js";import"./QuestionCircleOutlined.b41416e3.js";import"./DownOutlined.162bbd90.js";const P=[{title:"id",key:"id",width:100},{title:"\u7F16\u7801",key:"no",width:100},{title:"\u540D\u79F0",key:"name",editComponent:"NInput",editRule:!0,edit:!0,width:200},{title:"\u5934\u50CF",key:"avatar",width:100,render(i){return v(B,{size:48,src:i.avatar})}},{title:"\u5730\u5740",key:"address",editComponent:"NSelect",editComponentProps:{options:[{label:"\u5E7F\u4E1C\u7701",value:1},{label:"\u6D59\u6C5F\u7701",value:2}]},edit:!0,width:200,ellipsis:!1},{title:"\u5F00\u59CB\u65E5\u671F",key:"beginTime",edit:!0,width:160,editComponent:"NDatePicker",editComponentProps:{type:"datetime",format:"yyyy-MM-dd HH:mm:ss",valueFormat:"yyyy-MM-dd HH:mm:ss"},ellipsis:!1},{title:"\u7ED3\u675F\u65E5\u671F",key:"endTime",width:160},{title:"\u521B\u5EFA\u65F6\u95F4",key:"date",width:160},{title:"\u505C\u7559\u65F6\u95F4",key:"time",width:80}],O=T({__name:"editCell",setup(i){const t=x(),e=D({pageSize:5,name:"xiaoMa"});function s({column:o,value:a,record:u}){o.key==="id"&&(u.editValueRefs.name4.value=`${a}`),console.log(o,a,u)}const r=o=>f(this,null,function*(){return yield g(m(m({},e),o))});function l(o){console.log(o)}function d(){console.log(t.value),t.value.reload()}function n({record:o,index:a,key:u,value:c}){console.log(c)}return(o,a)=>{const u=A,c=H;return N(),R(c,{bordered:!1,class:"proCard"},{default:p(()=>[k(C(b),{title:"\u8868\u683C\u5217\u8868",titleTooltip:"\u8FD9\u662F\u4E00\u4E2A\u63D0\u793A",columns:C(P),request:r,"row-key":F=>F.id,ref_key:"actionRef",ref:t,onEditEnd:n,onEditChange:s,"onUpdate:checkedRowKeys":l,"scroll-x":1360},{toolbar:p(()=>[k(u,{type:"primary",onClick:d},{default:p(()=>[M("\u5237\u65B0\u6570\u636E")]),_:1})]),_:1},8,["columns","row-key"])]),_:1})}}});export{O as default};
