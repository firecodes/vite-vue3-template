var w=(e,s,n)=>new Promise((c,t)=>{var o=l=>{try{r(n.next(l))}catch(i){t(i)}},f=l=>{try{r(n.throw(l))}catch(i){t(i)}},r=l=>l.done?c(l.value):Promise.resolve(l.value).then(o,f);r((n=n.apply(e,s)).next())});import{d as I,v as y,o as u,c as m,a,a6 as B,A as L,a7 as F,y as P,s as C,a8 as U,r as S,a9 as A,aa as W,ab as Y,ac as G,H as J,F as V,z as N,I as K,t as D,p as R,q,ad as O,ae as Q,x as z,i as $,w as d,h as p,B as X,af as Z}from"./index.92622b47.js";const ee=["src"],ae={class:"title"},se={class:"description"},te=I({__name:"banner",props:{image:{},imagePosition:{default:20},video:{},videoPosition:{default:48},blur:{default:0},cdn:{type:Boolean,default:!1},isMobile:{type:Boolean,default:!1}},setup(e){const s=e,n=y(()=>s.image),c=y(()=>n.value?{backgroundImage:`url(${n.value})`,backgroundPositionY:`${s.imagePosition}%`}:{}),t=y(()=>s.video);return(o,f)=>(u(),m("div",{class:P(["banner",{mobile:o.isMobile}])},[a("div",{class:"background",style:B(c.value)},[t.value?(u(),m("video",{key:0,class:"video",loop:"",muted:"",autoplay:"",controls:!1,style:B({objectPosition:`0% ${s.videoPosition}%`}),src:t.value},null,12,ee)):L("",!0)],4),a("div",{class:P(["content",{blur:Boolean(o.blur)}]),style:B({"--blur":`${o.blur}px`})},[a("h2",ae,[F(o.$slots,"title",{},void 0,!0)]),a("div",se,[F(o.$slots,"description",{},void 0,!0)])],6)],2))}});const ne=C(te,[["__scopeId","data-v-5f4ae676"]]),oe=""+new URL("ocean-4.5c9b6453.mp4",import.meta.url).href,le=e=>{const n=(U(e.shallow)?!0:e.shallow)?A:S,c=S(!1),t=S(!1),o=n(e.data);return{data:o,fetching:c,fetched:t,fetch:(...r)=>w(void 0,null,function*(){if(!(e.once&&t.value)){e.preclean&&(o.value=e.data);try{c.value=!0;const l=yield e.fetcher(...r);o.value=l,t.value=!0}finally{c.value=!1}}})}};function j(e){var c,t;const s="id,username,permalink,caption,media_type,media_url,thumbnail_url,timestamp",n={fields:(c=e==null?void 0:e.fields)!=null?c:s,limit:(t=e==null?void 0:e.limit)!=null?t:20};return e!=null&&e.since&&(n.since=e.since),e!=null&&e.after&&(n.after=e.after),W.request({url:"/taskMap",method:"get",params:n})}const ce=Y("taskMap",()=>le({data:null,fetcher:()=>j("instagram_medias")})),ie=e=>({taskMap:ce(e)});function E(){return ie(G)}const H=e=>(R("data-v-aa1b7213"),e=e(),q(),e),re={class:"list-grid"},de={class:"medias"},ue={class:"content"},_e=["data-background-image"],me={class:"mask"},fe={class:"icon"},he=H(()=>a("i",{class:"iconfont icon-music-play"},null,-1)),ve={class:"iconfont icon-camera"},ge=H(()=>a("div",{class:"type-icon"},[a("i",{class:"iconfont icon-camera"})],-1)),pe={class:"date"},ye={class:"iconfont icon-camera"},be=I({__name:"grid",props:{medias:{}},setup(e){return(s,n)=>{const c=J("lozad");return u(),m("div",re,[a("ul",de,[(u(!0),m(V,null,N(s.medias,(t,o)=>(u(),m("li",{class:"item",key:o},[a("div",ue,[K(a("div",{class:"background","data-background-image":t.maxSrc},null,8,_e),[[c]]),a("div",me,[a("span",fe,[he,a("i",ve,D(o),1)])]),ge,a("span",pe,[a("i",ye,D(o),1)])])]))),128))])])}}});const ke=C(be,[["__scopeId","data-v-aa1b7213"]]),h=e=>(R("data-v-74c71c83"),e=e(),q(),e),$e={class:"photography-page"},Se=h(()=>a("span",null,"\u5927\u5343\u540C\u5728\uFF0C\u4E07\u8C61\u5171\u6816",-1)),we=h(()=>a("span",null,"\u5728\u6211\u7684 Instagram \u4E3B\u9875\u67E5\u770B\u66F4\u591A",-1)),Be=h(()=>a("h2",null,"\u7A7A\u6570\u636E",-1)),Ie={key:"loading",class:"module-loading"},Ce=h(()=>a("h2",null,"loading",-1)),xe=h(()=>a("i",{class:"iconfont icon-loadmore"},null,-1)),Me=[xe],Fe=h(()=>a("h2",null,"loading",-1)),Pe=I({__name:"index",setup(e){const{taskMap:s}=E();console.log("fetchStores",s,E());const n=S(!1),c=O([]),t=A(null),o=y(()=>{var l,i;return Boolean(t.value&&!((i=(l=t.value)==null?void 0:l.paging)!=null&&i.next))}),f=y(()=>{var i,_;return[...(_=(i=s==null?void 0:s.data)==null?void 0:i.data)!=null?_:[],...c]}),r=()=>w(this,null,function*(){var l,i,_,b,k,v;try{n.value=!0;const g=yield j({after:(v=(_=(i=(l=t.value)==null?void 0:l.paging)==null?void 0:i.cursors)==null?void 0:_.after)!=null?v:(k=(b=s==null?void 0:s.data)==null?void 0:b.paging)==null?void 0:k.cursors.after,since:f.value.length});c.push(...g.data),t.value=g}finally{n.value=!1}});return Q(()=>s.fetch()),(l,i)=>{const _=Z,b=z("placeholder"),k=z("container");return u(),m("div",$e,[$(ne,{class:"page-banner",video:p(oe),"video-position":68},{title:d(()=>[Se]),description:d(()=>[we]),_:1},8,["video"]),$(k,{class:"page-content"},{default:d(()=>{var v,g,x,M;return[$(b,{taskData:(v=p(s))==null?void 0:v.data,data:(x=(g=p(s))==null?void 0:g.data)==null?void 0:x.data,loading:(M=p(s))==null?void 0:M.fetching},{placeholder:d(()=>[Be]),loading:d(()=>[a("div",Ie,[(u(),m(V,null,N(4*2,T=>a("div",{class:"item",key:T})),64)),Ce])]),default:d(()=>[a("div",null,[$(ke,{medias:f.value},null,8,["medias"]),!p(s).fetching&&!o.value?(u(),X(_,{key:0,class:"loadmore",loading:n.value,onLoadmore:r},{normal:d(()=>[a("button",{class:"normal",onClick:r},Me)]),loading:d(()=>[Fe]),_:1},8,["loading"])):L("",!0)])]),_:1},8,["taskData","data","loading"])]}),_:1})])}}});const Ee=C(Pe,[["__scopeId","data-v-74c71c83"]]);export{Ee as default};
