import{_ as V,i as j,r as o,z,m as k,j as F,k as H,A as U,B as K,n as a,o as i,c as S,b as s,w as r,s as g,C as $,a as n,F as x,u as Y,d as A,v as G,t as u,p as J,f as O}from"./entry.31ce8688.js";import{M as Q,L as W}from"./index.c7969a4a.js";const B=l=>(J("data-v-f5b239fe"),l=l(),O(),l),X={id:"app",class:"dark-mode"},Z={class:"main--header"},tt={class:"created--at"},et={class:"view--count"},nt={class:"ml-2"},ot=B(()=>n("div",{class:"divider"},null,-1)),at=["innerHTML"],ct=B(()=>n("div",{id:"commentSection"},null,-1)),C="https://eclipseaddict.com/v1/",it={__name:"Detail",props:{article_id:String},setup(l){console.error=()=>{},console.warn=()=>{},new Q;const v=j(),c=v.query.id,T=async()=>{try{const t=await k.get(`${C}article/${c}/`);return console.log(t.data.content),t.data}catch(t){throw console.log(t),t}};async function D(){try{const t=await T();Y({title:"",meta:[{name:"description",content:t.content},{name:"keywords",content:"devinsight, 데브인사이트,"},{name:"twitter:title",content:`devinsight | ${t.title||""}`},{name:"twitter:description",content:t.content||"devinsight"},{name:"twitter:image",content:t.cover||""},{name:"twitter:card",content:t.cover||"summary_large_image"},{name:"twitter:site",content:"@devinsight.kr"},{name:"twitter:creator",content:"@isaac"},{name:"og:title",content:`devinsight | ${t.title||""}`},{name:"og:description",content:"devinsight"},{name:"og:image",content:t.cover||""},{name:"og:url",content:`https://eclipseaddict.com/detail?id=${c}`},{name:"og:site_name",content:"devinsight"},{name:"og:locale",content:"ko_KR"},{name:"og:type",content:"article"},{name:"article:published_time",content:t.created_at||""},{name:"article:modified_time",content:t.created_at||""},{name:"article:author",content:"devinsight"},{property:"og:title",content:`devinsight | ${t.title||""}`},{property:"og:description",content:t.content||"devinsight"},{property:"og:image",content:t.cover||""},{property:"og:url",content:`https://eclipseaddict.com/detail?id=${c}`},{property:"og:site_name",content:"devinsight.kr"},{property:"og:locale",content:"ko_KR"},{property:"og:type",content:"article"},{property:"article:published_time",content:t.created_at||""},{property:"article:modified_time",content:t.created_at||""},{property:"article:author",content:"isaac"}],script:[{src:"https://cdn.rawgit.com/google/code-prettify/master/loader/run_prettify.js?autorun=false&skin=sunburst",async:!0,defer:!0,body:!0}]})}catch(t){console.error(t)}}D();const h=o(null),y=o(null),f=o(null),w=o(null),b=o(null),m=o(null),_=o(!1),I=()=>{window.history.back()};z(()=>{window.scroll(0,0),k.get(`${C}article/${c}/`).then(t=>{h.value=t.data.content,y.value=t.data.title,f.value=t.data.cover,w.value=t.data.created_at,b.value=t.data.views,m.value=t.data.categories,console.log("category_list",m.value)}).catch(t=>{console.log(t)})}),F(()=>{const t=document.createElement("SCRIPT");t.setAttribute("src","https://utteranc.es/client.js"),t.setAttribute("repo","danielkellyio/blog-comments"),t.setAttribute("issue-term","pathname"),t.setAttribute("label","Comment"),t.setAttribute("theme","github-light"),t.setAttribute("crossorigin","anonymous"),t.setAttribute("async","async");const e=document.getElementById("commentSection");console.log(e),e.appendChild(t)}),H(()=>{v.query.id!=c&&window.location.reload(),document.querySelectorAll(".detailContent img").forEach(e=>{e.style.width="100%",e.style.height="auto"});try{PR.prettyPrint()}catch{window.location.reload(!0)}_.value=!0}),U(()=>{console.log("onUnmounted"),document.querySelectorAll("pre").forEach(e=>{e.classList.add("prettyprint")}),PR.prettyPrint()});const L=K(()=>{const t=new Date(w.value),e=t.getFullYear(),d=t.getMonth()+1,p=t.getDate();return`${e}년 ${d}월 ${p}일`});return(t,e)=>{const d=a("v-icon"),p=a("v-btn"),M=a("v-img"),R=a("v-chip"),E=a("v-chip-group"),P=a("v-container");return i(),S(x,null,[s(p,{icon:"",class:"backBtn",onClick:I,elevation:"7"},{default:r(()=>[s(d,null,{default:r(()=>[A(" mdi-arrow-left ")]),_:1})]),_:1}),_.value?$("",!0):(i(),g(W,{key:0})),s(M,{src:f.value,class:"w-100",height:"300",cover:""},null,8,["src"]),n("div",X,[_.value?(i(),g(P,{key:0},{default:r(()=>[s(E,null,{default:r(()=>[(i(!0),S(x,null,G(m.value,(q,N)=>(i(),g(R,{size:"small",class:"mx-1",variant:"outlined",dark:"",key:N},{default:r(()=>[A(u(q),1)]),_:2},1024))),128))]),_:1}),n("h1",Z,u(y.value),1),n("p",tt,"작성일 : "+u(L.value),1),n("p",et,[s(d,{icon:"mdi-eye",size:"x-small"}),n("span",nt,u(b.value),1)]),ot,n("div",{class:"detailContent",innerHTML:h.value},null,8,at)]),_:1})):$("",!0)]),ct],64)}}},lt=V(it,[["__scopeId","data-v-f5b239fe"]]);export{lt as default};
