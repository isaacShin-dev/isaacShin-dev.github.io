import{r as $,y as X,i as q,I as C,z as H,m as J,A as Q,B as Y,C as Z,D as ee,j as ae,E as te,G as le,k as ne,H as ie,J as se,u as re,K as oe,L as ue,M as ve,N as M,O as ce,v as V,P as p,l as de,e as l,Q as b,R as w,S,T as N,U as T,_ as fe,W as ge,X as z,Y as me,o as B,c as E,w as d,f as ye,g as be,F as _e,Z as pe,$ as I,a0 as xe,a1 as he,V as Ve,a2 as ke,t as Le,a3 as Pe,a as W}from"./index.3d65ed60.js";import{u as we}from"./CommonStore.41dd93bb.js";import{V as Ce}from"./VContainer.3ca794c9.js";import{a as Se,V as Ie}from"./VRow.84df9552.js";function $e(){const e=$([]);X(()=>e.value=[]);function _(s,x){e.value[x]=s}return{refs:e,updateRef:_}}const Ae=q({activeColor:String,start:{type:[Number,String],default:1},modelValue:{type:Number,default:e=>e.start},disabled:Boolean,length:{type:[Number,String],default:1,validator:e=>e%1===0},totalVisible:[Number,String],firstIcon:{type:C,default:"$first"},prevIcon:{type:C,default:"$prev"},nextIcon:{type:C,default:"$next"},lastIcon:{type:C,default:"$last"},ariaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.root"},pageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.page"},currentPageAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.currentPage"},firstAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.first"},previousAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.previous"},nextAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.next"},lastAriaLabel:{type:String,default:"$vuetify.pagination.ariaLabel.last"},ellipsis:{type:String,default:"..."},showFirstLastPage:Boolean,...H(),...J(),...Q(),...Y(),...Z(),...ee(),...ae({tag:"nav"}),...te(),...le({variant:"text"})},"VPagination"),Be=ne()({name:"VPagination",props:Ae(),emits:{"update:modelValue":e=>!0,first:e=>!0,prev:e=>!0,next:e=>!0,last:e=>!0},setup(e,_){let{slots:s,emit:x}=_;const n=ie(e,"modelValue"),{t:f,n:A}=se(),{isRtl:r}=re(),{themeClasses:h}=oe(e),{width:g}=ue(),k=ve(-1);M(void 0,{scoped:!0});const{resizeRef:R}=ce(a=>{if(!a.length)return;const{target:t,contentRect:i}=a[0],v=t.querySelector(".v-pagination__list > *");if(!v)return;const c=i.width,P=v.offsetWidth+parseFloat(getComputedStyle(v).marginRight)*2;k.value=F(c,P)}),o=V(()=>parseInt(e.length,10)),u=V(()=>parseInt(e.start,10)),m=V(()=>e.totalVisible?parseInt(e.totalVisible,10):k.value>=0?k.value:F(g.value,58));function F(a,t){const i=e.showFirstLastPage?5:3;return Math.max(0,Math.floor(+((a-t*i)/t).toFixed(2)))}const K=V(()=>{if(o.value<=0||isNaN(o.value)||o.value>Number.MAX_SAFE_INTEGER)return[];if(m.value<=1)return[n.value];if(o.value<=m.value)return S(o.value,u.value);const a=m.value%2===0,t=a?m.value/2:Math.floor(m.value/2),i=a?t:t+1,v=o.value-t;if(i-n.value>=0)return[...S(Math.max(1,m.value-1),u.value),e.ellipsis,o.value];if(n.value-v>=(a?1:0)){const c=m.value-1,P=o.value-c+u.value;return[u.value,e.ellipsis,...S(c,P)]}else{const c=Math.max(1,m.value-3),P=c===1?n.value:n.value-Math.ceil(c/2)+u.value;return[u.value,e.ellipsis,...S(c,P),e.ellipsis,o.value]}});function L(a,t,i){a.preventDefault(),n.value=t,i&&x(i,t)}const{refs:U,updateRef:j}=$e();M({VPaginationBtn:{color:p(e,"color"),border:p(e,"border"),density:p(e,"density"),size:p(e,"size"),variant:p(e,"variant"),rounded:p(e,"rounded"),elevation:p(e,"elevation")}});const G=V(()=>K.value.map((a,t)=>{const i=v=>j(v,t);if(typeof a=="string")return{isActive:!1,key:`ellipsis-${t}`,page:a,props:{ref:i,ellipsis:!0,icon:!0,disabled:!0}};{const v=a===n.value;return{isActive:v,key:a,page:A(a),props:{ref:i,ellipsis:!1,icon:!0,disabled:!!e.disabled||+e.length<2,color:v?e.activeColor:e.color,ariaCurrent:v,ariaLabel:f(v?e.currentPageAriaLabel:e.pageAriaLabel,a),onClick:c=>L(c,a)}}}})),y=V(()=>{const a=!!e.disabled||n.value<=u.value,t=!!e.disabled||n.value>=u.value+o.value-1;return{first:e.showFirstLastPage?{icon:r.value?e.lastIcon:e.firstIcon,onClick:i=>L(i,u.value,"first"),disabled:a,ariaLabel:f(e.firstAriaLabel),ariaDisabled:a}:void 0,prev:{icon:r.value?e.nextIcon:e.prevIcon,onClick:i=>L(i,n.value-1,"prev"),disabled:a,ariaLabel:f(e.previousAriaLabel),ariaDisabled:a},next:{icon:r.value?e.prevIcon:e.nextIcon,onClick:i=>L(i,n.value+1,"next"),disabled:t,ariaLabel:f(e.nextAriaLabel),ariaDisabled:t},last:e.showFirstLastPage?{icon:r.value?e.firstIcon:e.lastIcon,onClick:i=>L(i,u.value+o.value-1,"last"),disabled:t,ariaLabel:f(e.lastAriaLabel),ariaDisabled:t}:void 0}});function D(){var t;const a=n.value-u.value;(t=U.value[a])==null||t.$el.focus()}function O(a){a.key===N.left&&!e.disabled&&n.value>+e.start?(n.value=n.value-1,T(D)):a.key===N.right&&!e.disabled&&n.value<u.value+o.value-1&&(n.value=n.value+1,T(D))}return de(()=>l(e.tag,{ref:R,class:["v-pagination",h.value,e.class],style:e.style,role:"navigation","aria-label":f(e.ariaLabel),onKeydown:O,"data-test":"v-pagination-root"},{default:()=>[l("ul",{class:"v-pagination__list"},[e.showFirstLastPage&&l("li",{key:"first",class:"v-pagination__first","data-test":"v-pagination-first"},[s.first?s.first(y.value.first):l(b,w({_as:"VPaginationBtn"},y.value.first),null)]),l("li",{key:"prev",class:"v-pagination__prev","data-test":"v-pagination-prev"},[s.prev?s.prev(y.value.prev):l(b,w({_as:"VPaginationBtn"},y.value.prev),null)]),G.value.map((a,t)=>l("li",{key:a.key,class:["v-pagination__item",{"v-pagination__item--is-active":a.isActive}],"data-test":"v-pagination-item"},[s.item?s.item(a):l(b,w({_as:"VPaginationBtn"},a.props),{default:()=>[a.page]})])),l("li",{key:"next",class:"v-pagination__next","data-test":"v-pagination-next"},[s.next?s.next(y.value.next):l(b,w({_as:"VPaginationBtn"},y.value.next),null)]),e.showFirstLastPage&&l("li",{key:"last",class:"v-pagination__last","data-test":"v-pagination-last"},[s.last?s.last(y.value.last):l(b,w({_as:"VPaginationBtn"},y.value.last),null)])])]})),{}}}),Re={__name:"WorkView",setup(e){const _=$([]),s=$(1),x=$(0),f=we().url,A=r=>{W.push({name:"detail",params:{id:r}})};return ge(async()=>{try{const r=await z.get(`${f}/work/?page=${s.value}`);console.log(r.data),_.value=r.data.results,x.value=r.data.count/8}catch(r){console.error(r)}}),me(s,async()=>{try{const r=await z.get(`${f}/work/?page=${s.value}`);_.value=r.data.results}catch(r){console.error(r)}}),(r,h)=>(B(),E(Ce,{fluid:""},{default:d(()=>[l(Se,{dense:""},{default:d(()=>[(B(!0),ye(_e,null,be(_.value,(g,k)=>(B(),E(Ie,{key:k,sm:"6",md:"4",lg:"3",xl:"2",xxl:"3"},{default:d(()=>[l(he,{class:"mx-auto","max-width":"344",elevation:"0"},{default:d(()=>[l(Ve,{src:g.cover_image,height:"200px"},null,8,["src"]),l(ke,{class:"cardTitle"},{default:d(()=>[I(Le(g.title),1)]),_:2},1024),l(Pe,null,{default:d(()=>[l(b,{text:""},{default:d(()=>[I("Share")]),_:1}),l(b,{text:"",onClick:R=>A(g.id)},{default:d(()=>[I("Read More")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1}),l(b,{icon:"",class:"addBtn",position:"fixed",location:"right top",onClick:h[0]||(h[0]=g=>xe(W).push({name:"create"}))},{default:d(()=>[l(pe,null,{default:d(()=>[I("mdi-plus")]),_:1})]),_:1}),l(Be,{modelValue:s.value,"onUpdate:modelValue":h[1]||(h[1]=g=>s.value=g),length:x.value,"total-visible":5,color:"grey-darken-1",variant:"elevated",style:{display:"inline-flex","list-style-type":"none","justify-content":"center",position:"fixed",bottom:"5%",right:"0",left:"0",margin:"0 auto",width:"100%",opacity:"0.6"}},null,8,["modelValue","length"])]),_:1}))}},Te=fe(Re,[["__scopeId","data-v-4e7483d6"]]);export{Te as default};
