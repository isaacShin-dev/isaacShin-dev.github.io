import{g as A,r as u,h as G,i as P,j as J,u as K,k as O,l as Q,m as W,n as x,q as o,s as X,o as c,v as _,w as s,b as n,c as w,x as $,F as k,y as Y,z as Z,d as g,t as v,a as b,_ as ee}from"./entry.2f9a6bf1.js";const te={class:"viewcount--small"},C="https://eclipseaddict.com/v1/",ae=A({__name:"Blog",setup(oe){const p=u([]),r=u(1),f=u(0),d=u(!1),B=G(),i=P(),V=J(),q=i.query.tag;K({meta:[]});const D=async()=>{const l=i.query.tag,t=l?`&tag=${l}`:"";x({url:`${C}list/?page=${r.value}${t}`,method:"GET"}).then(a=>{p.value=a.data.results,f.value=Math.ceil(a.data.count/8)}).catch(a=>{console.log(a)})},z=(l,t,a,m)=>{V.setDetail(t,a,m),B.push({path:"/Detail",query:{id:l}})};return O(async()=>{console.log("mounted",{}.VITE_API_URL),await D()}),Q(()=>{i.query.tag!=q&&window.location.reload()}),W(r,async()=>{const l=i.query.tag,t=l?`&tag=${l}`:"";try{const a=await x.get(`${C}list/?page=${r.value}${t}`);p.value=a.data.results}catch(a){console.error(a)}}),(l,t)=>{const a=o("v-img"),m=o("v-card-title"),M=o("v-spacer"),T=o("v-icon"),y=o("v-card-subtitle"),E=o("v-chip"),I=o("v-chip-group"),N=o("v-card"),R=o("v-col"),U=o("v-row"),F=o("v-pagination"),H=o("v-container"),L=X("ripple");return c(),_(H,{fluid:"",class:"container--bottom"},{default:s(()=>[n(U,{dense:""},{default:s(()=>[(c(!0),w(k,null,$(p.value,(e,S)=>(c(),_(R,{key:S,sm:"6",md:"4",lg:"3",xl:"2",xxl:"3"},{default:s(()=>[Z((c(),_(N,{class:"mx-auto article--card","max-width":"344",elevation:"3",onClick:h=>z(e.id,e.title,e.title,e.cover)},{default:s(()=>[n(a,{src:e.cover,"lazy-src":"/loading.gif",height:"200px",cover:""},null,8,["src"]),n(m,{class:"cardTitle"},{default:s(()=>[g(v(e.title),1)]),_:2},1024),n(y,null,{default:s(()=>[g(v(e.created_time.substring(0,10))+" ",1),n(M),n(T,{icon:"mdi-eye",size:"x-small"}),b("span",te,v(e.views),1)]),_:2},1024),n(y,null,{default:s(()=>[n(I,null,{default:s(()=>[(c(!0),w(k,null,$(e.categories_data,(h,j)=>(c(),_(E,{size:"small",class:"mx-1",dark:"",key:j},{default:s(()=>[g(v(h.category),1)]),_:2},1024))),128))]),_:2},1024)]),_:2},1024)]),_:2},1032,["onClick"])),[[L]])]),_:2},1024))),128))]),_:1}),n(F,{modelValue:r.value,"onUpdate:modelValue":t[0]||(t[0]=e=>r.value=e),length:f.value,"total-visible":5,color:"grey-darken-1",variant:"elevated",class:Y(["paginator",{"paginator--hover":d.value}]),onMouseover:t[1]||(t[1]=e=>d.value=!0),onMouseleave:t[2]||(t[2]=e=>d.value=!1),style:{}},null,8,["modelValue","length","class"])]),_:1})}}});const ne=ee(ae,[["__scopeId","data-v-4a4ce8f1"]]);export{ne as default};
