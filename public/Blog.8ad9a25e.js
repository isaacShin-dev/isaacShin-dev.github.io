import{g as N,r as l,h as R,i as S,j as A,u as F,k as H,l as T,m as U,n as j,q as n,s as E,o as p,v,w as c,b as o,c as I,x as K,F as L,y as P,z as G,A as J,d as y,t as _,a as O,_ as Q}from"./entry.73560efc.js";const W={class:"viewcount--small"},X="http://127.0.0.1:8000/v1/",Y=N({__name:"Blog",setup(Z){const u=l([]),r=l(1),d=l(0),g=l(!1),w=R(),i=S();A();const m=i.query.tag;F({title:"데브 인사이트 | 블로그",meta:[{"http-equiv":"Content-Security-Policy",content:"upgrade-insecure-requests"},{name:"viewport",content:"width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"},{name:"description",content:"데브 인사이트 개발 블로그 | 데브 인사이트"},{name:"keywords",content:"데브 인사이트, 개발 블로그, 데브 인사이트 개발 블로그, 데브 인사이트 블로그"},{property:"article:author",content:"isaac"},{name:"twitter:creator",content:"@isaac"},{name:"twitter:card",content:"/share-banner.png"},{name:"twitter:title",content:"devinsight"},{name:"twitter:description",content:"devinsight"},{name:"twitter:image",content:"/share-banner.png"},{name:"twitter:site",content:"@devinsight.kr"},{name:"og:title",content:"devinsight"},{name:"og:description",content:"데브 인사이트 개발 블로그 | 데브 인사이트"},{name:"og:image",content:"/share-banner.png"},{name:"og:site_name",content:"devinsight"},{name:"og:image",content:"/share-banner.png"},{property:"og:title",content:"데브 인사이트 | 블로그"},{property:"og:image",content:"/share-banner.png"},{property:"og:type",content:"Article"},{property:"og:description",content:"데브 인사이트 개발 블로그 | 데브 인사이트"},{property:"og:site_name",content:"devinsight.kr"},{property:"og:locale",content:"ko_KR"},{property:"og:url",content:"https://devinsight.kr/Blog/"}]});const f=async()=>{const a=i.query.tag?`&tag=${m}`:"";G.get(`/list/?page=${r.value}${a}`).then(e=>{u.value=e.data.results,d.value=Math.ceil(e.data.count/8)}).catch(e=>{console.log(e)})},x=(a,e,s,h)=>{w.push({path:"/Detail",query:{id:a,title:e}})};return H(async()=>{await f()}),T(()=>{i.query.tag!=m&&window.location.reload()}),U(r,async()=>{const a=i.query.tag,e=a?`&tag=${a}`:"";try{const s=await j.get(`${X}list/?page=${r.value}${e}`);u.value=s.data.results}catch(s){console.error(s)}}),(a,e)=>{const s=n("v-img"),h=n("v-card-title"),k=n("v-spacer"),$=n("v-icon"),C=n("v-card-subtitle"),b=n("v-card"),q=n("v-col"),B=n("v-row"),V=n("v-pagination"),D=n("v-container"),z=E("ripple");return p(),v(D,{fluid:"",class:"container--bottom"},{default:c(()=>[o(B,{dense:""},{default:c(()=>[(p(!0),I(L,null,K(u.value,(t,M)=>(p(),v(q,{key:M,sm:"6",md:"4",lg:"3",xl:"2",xxl:"3"},{default:c(()=>[J((p(),v(b,{class:"mx-auto article--card","max-width":"344","min-height":"320",elevation:"3",onClick:ee=>x(t.id,t.title,t.title,t.cover)},{default:c(()=>[o(s,{src:t.cover,"lazy-src":"/loading.gif",height:"200px",cover:""},null,8,["src"]),o(h,{class:"cardTitle"},{default:c(()=>[y(_(t.title),1)]),_:2},1024),o(C,null,{default:c(()=>[y(_(t.created_time.substring(0,10))+" ",1),o(k),o($,{icon:"mdi-eye",size:"x-small"}),O("span",W,_(t.views),1)]),_:2},1024)]),_:2},1032,["onClick"])),[[z]])]),_:2},1024))),128))]),_:1}),o(V,{modelValue:r.value,"onUpdate:modelValue":e[0]||(e[0]=t=>r.value=t),length:d.value,"total-visible":5,color:"grey-darken-1",variant:"elevated",class:P(["paginator",{"paginator--hover":g.value}]),onMouseover:e[1]||(e[1]=t=>g.value=!0),onMouseleave:e[2]||(e[2]=t=>g.value=!1),style:{}},null,8,["modelValue","length","class"])]),_:1})}}});const ne=Q(Y,[["__scopeId","data-v-2acfbaa1"]]);export{ne as default};
