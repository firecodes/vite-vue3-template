var ae=Object.defineProperty,re=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var H=Object.getOwnPropertySymbols;var de=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable;var J=(e,s,o)=>s in e?ae(e,s,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[s]=o,B=(e,s)=>{for(var o in s||(s={}))de.call(s,o)&&J(e,o,s[o]);if(H)for(var o of H(s))fe.call(s,o)&&J(e,o,s[o]);return e},K=(e,s)=>re(e,ie(s));var S=(e,s,o)=>new Promise((P,c)=>{var g=n=>{try{r(o.next(n))}catch(m){c(m)}},d=n=>{try{r(o.throw(n))}catch(m){c(m)}},r=n=>n.done?P(n.value):Promise.resolve(n.value).then(g,d);r((o=o.apply(e,s)).next())});import{h as u,bf as W,a_ as X,de as ce,be as ee,df as Y,bd as pe,d as _e,r as N,b as me,v as V,b4 as ge,C as be,dg as ye,s as ve,x as A,o as f,B as y,w as a,i as O,c as G,z as Q,F as L,E as Z,bi as R,j as D,t as E,A as T,bq as Be,br as ke,N as Oe,a$ as Pe,dh as Fe,m as we,di as Ce,n as Se,bo as Ne,G as x,D as Ve,b0 as je,l as he,b2 as De,dj as Ee,dk as Me,k as Ue}from"./index.dd65165b.js";import{s as ze,p as I}from"./propTypes.c2b08bc4.js";import{D as Re}from"./DownOutlined.8efc106b.js";import{U as Te}from"./UpOutlined.0bcb38a2.js";import{Q as $e}from"./QuestionCircleOutlined.b15420e1.js";function Ie(e){return e==="NInput"?"\u8BF7\u8F93\u5165":["NPicker","NSelect","NCheckbox","NRadio","NSwitch","NDatePicker","NTimePicker"].includes(e)?"\u8BF7\u9009\u62E9":""}function Ae({emit:e,getProps:s,formModel:o,getSchema:P,formElRef:c,defaultFormModel:g,loadingSub:d,handleFormValues:r}){function n(){return S(this,null,function*(){var l;return(l=u(c))==null?void 0:l.validate()})}function m(l){return S(this,null,function*(){l&&l.preventDefault(),d.value=!0;const{submitFunc:b}=u(s);if(b&&W(b))return yield b(),d.value=!1,!1;if(!u(c))return!1;try{yield n();const p=j();return d.value=!1,e("submit",p),p}catch(p){return e("submit",!1),d.value=!1,console.error(p),!1}})}function F(){return S(this,null,function*(){var l;yield(l=u(c))==null?void 0:l.restoreValidation()})}function M(){return S(this,null,function*(){const{resetFunc:l,submitOnReset:b}=u(s);if(l&&W(l)&&(yield l()),!u(c))return;Object.keys(o).forEach(h=>{o[h]=u(g)[h]||null}),yield F();const p=r(X(u(o)));e("reset",p),b&&(yield m())})}function j(){return u(c)?r(X(u(o))):{}}function U(l){return S(this,null,function*(){const b=u(P).map(v=>v.field).filter(Boolean);Object.keys(l).forEach(v=>{const p=l[v];b.includes(v)&&(o[v]=p)})})}function k(l){d.value=l}return{handleSubmit:m,validate:n,resetFields:M,getFieldsValue:j,clearValidate:F,setFieldsValue:U,setLoading:k}}function Ge({defaultFormModel:e,getSchema:s,formModel:o}){function P(g){if(!ce(g))return{};const d={};for(const r of Object.entries(g)){let[,n]=r;const[m]=r;!m||ee(n)&&n.length===0||W(n)||Y(n)||(pe(n)&&(n=n.trim()),ze(d,m,n))}return d}function c(){const g=u(s),d={};g.forEach(r=>{const{defaultValue:n}=r;Y(n)||(d[r.field]=n,o[r.field]=n)}),e.value=d}return{handleFormValues:P,initDefault:c}}const Qe={labelWidth:{type:[Number,String],default:80},schemas:{type:[Array],default:()=>[]},layout:{type:String,default:"inline"},inline:{type:Boolean,default:!1},size:{type:String,default:"medium"},labelPlacement:{type:String,default:"left"},isFull:{type:Boolean,default:!0},showActionButtonGroup:I.bool.def(!0),showResetButton:I.bool.def(!0),resetButtonOptions:Object,showSubmitButton:I.bool.def(!0),submitButtonOptions:Object,showAdvancedButton:I.bool.def(!0),submitButtonText:{type:String,default:"\u67E5\u8BE2"},resetButtonText:{type:String,default:"\u91CD\u7F6E"},gridProps:Object,giProps:Object,baseGridStyle:{type:Object},collapsed:{type:Boolean,default:!1},collapsedRows:{type:Number,default:1}},Le=_e({name:"BasicForm",components:{DownOutlined:Re,UpOutlined:Te,QuestionCircleOutlined:$e},props:B({},Qe),emits:["reset","submit","register"],setup(e,{emit:s,attrs:o}){const P=N({}),c=me({}),g=N({}),d=N(null),r=N(null),n=N(!0),m=N(!1),F=N(!1),M=V(()=>Object.assign({size:e.size,type:"primary"},e.submitButtonOptions)),j=V(()=>Object.assign({size:e.size,type:"default"},e.resetButtonOptions));function U(i){var C;const w=(C=i.componentProps)!=null?C:{},z=i.component;return B({clearable:!0,placeholder:Ie(u(z))},w)}const k=V(()=>{const i=B(B({},e),u(g)),w={rules:{}};return(i.schemas||[]).forEach(C=>{C.rules&&ee(C.rules)&&(w.rules[C.field]=C.rules)}),B(B({},i),u(w))}),l=V(()=>{const{layout:i}=u(k);return i==="inline"}),b=V(()=>{const{gridProps:i}=u(k);return K(B({},i),{collapsed:l.value?n.value:!1,responsive:"screen"})}),v=V(()=>B(B(B({},o),e),u(k))),p=V(()=>{const i=u(d)||u(k).schemas;for(const w of i){const{defaultValue:z}=w;z&&(w.defaultValue=z)}return i}),{handleFormValues:h,initDefault:$}=Ge({defaultFormModel:P,getSchema:p,formModel:c}),{handleSubmit:t,validate:_,resetFields:q,getFieldsValue:te,clearValidate:ne,setFieldsValue:oe}=Ae({emit:s,getProps:k,formModel:c,getSchema:p,formElRef:r,defaultFormModel:P,loadingSub:m,handleFormValues:h});function le(){n.value=!n.value}function se(i){return S(this,null,function*(){g.value=ye(u(g)||{},i)})}const ue={getFieldsValue:te,setFieldsValue:oe,resetFields:q,validate:_,clearValidate:ne,setProps:se,submit:t};return ge(()=>p.value,i=>{u(F)||i!=null&&i.length&&($(),F.value=!0)}),be(()=>{$(),s("register",ue)}),{formElRef:r,formModel:c,getGrid:b,getProps:k,getBindValue:v,getSchema:p,getSubmitBtnOptions:M,getResetBtnOptions:j,handleSubmit:t,resetFields:q,loadingSub:m,isInline:l,getComponentProps:U,unfoldToggle:le}}});function We(e,s,o,P,c,g){const d=A("QuestionCircleOutlined"),r=Oe,n=je,m=he,F=Pe,M=De,j=Ee,U=Me,k=Ue,l=Fe,b=we,v=A("DownOutlined"),p=A("UpOutlined"),h=Ce,$=Se;return f(),y($,R(e.getBindValue,{model:e.formModel,ref:"formElRef"}),{default:a(()=>[O(h,Be(ke(e.getGrid)),{default:a(()=>[(f(!0),G(L,null,Q(e.getSchema,t=>(f(),y(l,R(t.giProps,{key:t.field}),{default:a(()=>[O(k,{label:t.label,path:t.field},Ne({default:a(()=>[t.slot?x(e.$slots,t.slot,{key:0,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):t.component==="NCheckbox"?(f(),y(M,{key:1,value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_},{default:a(()=>[O(F,null,{default:a(()=>[(f(!0),G(L,null,Q(t.componentProps.options,_=>(f(),y(m,{key:_.value,value:_.value,label:_.label},null,8,["value","label"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):t.component==="NRadioGroup"?(f(),y(U,{key:2,value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_},{default:a(()=>[O(F,null,{default:a(()=>[(f(!0),G(L,null,Q(t.componentProps.options,_=>(f(),y(j,{key:_.value,value:_.value},{default:a(()=>[D(E(_.label),1)]),_:2},1032,["value"]))),128))]),_:2},1024)]),_:2},1032,["value","onUpdate:value"])):(f(),y(Ve(t.component),R({key:3},e.getComponentProps(t),{value:e.formModel[t.field],"onUpdate:value":_=>e.formModel[t.field]=_,class:{isFull:t.isFull!=!1&&e.getProps.isFull}}),null,16,["value","onUpdate:value","class"])),t.suffix?x(e.$slots,t.suffix,{key:4,model:e.formModel,field:t.field,value:e.formModel[t.field]},void 0,!0):T("",!0)]),_:2},[t.labelMessage?{name:"label",fn:a(()=>[D(E(t.label)+" ",1),O(n,{trigger:"hover",style:Z(t.labelMessageStyle)},{trigger:a(()=>[O(r,{size:"18",class:"text-gray-400 cursor-pointer"},{default:a(()=>[O(d)]),_:1})]),default:a(()=>[D(" "+E(t.labelMessage),1)]),_:2},1032,["style"])]),key:"0"}:void 0]),1032,["label","path"])]),_:2},1040))),128)),e.getProps.showActionButtonGroup?(f(),y(l,{key:0,span:e.isInline?"":24,suffix:!!e.isInline},{default:a(({overflow:t})=>[O(F,{align:"center",justify:e.isInline?"end":"start",style:Z({"margin-left":`${e.isInline?12:e.getProps.labelWidth}px`})},{default:a(()=>[e.getProps.showSubmitButton?(f(),y(b,R({key:0},e.getSubmitBtnOptions,{onClick:e.handleSubmit,loading:e.loadingSub}),{default:a(()=>[D(E(e.getProps.submitButtonText),1)]),_:1},16,["onClick","loading"])):T("",!0),e.getProps.showResetButton?(f(),y(b,R({key:1},e.getResetBtnOptions,{onClick:e.resetFields}),{default:a(()=>[D(E(e.getProps.resetButtonText),1)]),_:1},16,["onClick"])):T("",!0),e.isInline&&e.getProps.showAdvancedButton?(f(),y(b,{key:2,type:"primary",text:"","icon-placement":"right",onClick:e.unfoldToggle},{icon:a(()=>[t?(f(),y(r,{key:0,size:"14",class:"unfold-icon"},{default:a(()=>[O(v)]),_:1})):(f(),y(r,{key:1,size:"14",class:"unfold-icon"},{default:a(()=>[O(p)]),_:1}))]),default:a(()=>[D(" "+E(t?"\u5C55\u5F00":"\u6536\u8D77"),1)]),_:2},1032,["onClick"])):T("",!0)]),_:2},1032,["justify","style"])]),_:1},8,["span","suffix"])):T("",!0)]),_:3},16)]),_:3},16,["model"])}const Ze=ve(Le,[["render",We],["__scopeId","data-v-fd343dc0"]]);export{Ze as B};