import{_ as C,r as v,g as y,n,o as u,s as H,w as a,h as w,D as L,B as O,j as $,l as I,a as o,b as c,c as f,v as S,F as B,x as g,t as D,p as E,f as T}from"./entry.7737ef7c.js";const _=v(!1),V=v("/assets/kitten-1556444_1920.png"),p=v([{text:"HOW I WORK.",isHover:!1,to:"Blog"},{text:"TODAY'S LOGS.",isHover:!1,to:"Log"},{text:"CONTACT ME.",isHover:!1,to:"ContactMe"}]),j=y({name:"HomeView",components:{},setup(){const e=w(),l=L(),t=O(()=>l.theme);return $(()=>{console.log(t.value),_.value=t.value==="dark"}),I(t,s=>{_.value=s==="dark"}),{menu_list:p,isDark:_,image:V,store:l,menuMouseOver:s=>{p.value[s].isHover=!0},menuMouseLeave:s=>{p.value[s].isHover=!1},todestination:s=>{e.push({path:`/${s}`})}}}}),h=e=>(E("data-v-93ca5331"),e=e(),T(),e),z={class:"wrapper mx-5"},A=h(()=>o("p",{class:"smallText"},"Eclipse DEV Insight.",-1)),N=h(()=>o("p",{class:"smallText"},"WELCOME. ALL",-1)),W=["onClick"],F=["onMouseover","onMouseleave"];function R(e,l,t,s,b,G){const m=n("v-col"),k=n("v-img"),M=n("v-row"),x=n("v-container");return u(),H(x,{fluid:""},{default:a(()=>[o("div",z,[c(M,{justify:"center"},{default:a(()=>[c(m,null,{default:a(()=>[A,N]),_:1}),c(m,{cols:"12",class:"justify-center"},{default:a(()=>[(u(!0),f(B,null,S(e.menu_list,(r,i)=>(u(),f("p",{class:"text-decoration-none small-menu",key:i,style:{"z-index":"0"}},[o("span",{class:g({menuHover:r.isHover}),onClick:d=>e.todestination(r.to)},[o("span",{style:{cursor:"pointer"},onMouseover:d=>e.menuMouseOver(i),onMouseleave:d=>e.menuMouseLeave(i)},D(r.text),41,F)],10,W)]))),128)),c(k,{src:"/kitten-1556444_1920.png",class:g([{dark_img:!e.isDark},"mainImg small-img"]),style:{"z-index":"0"}},null,8,["class"])]),_:1})]),_:1})])]),_:1})}const Y=C(j,[["render",R],["__scopeId","data-v-93ca5331"]]);export{Y as default};
