import{_ as k,r as _,g as C,m as t,o as r,q as M,w as n,h as x,a as o,b as a,c as m,s as y,F as H,v,t as L,p as O,f as $}from"./entry.ae0fd91c.js";const w=_(!1),I=_("/assets/kitten-1556444_1920.png"),i=_([{text:"HOW I WORK.",isHover:!1,to:"Blog"},{text:"TODAY'S LOGS.",isHover:!1,to:"Log"},{text:"CONTACT ME.",isHover:!1,to:"ContactMe"}]),E=C({name:"HomeView",components:{},setup(){const e=x();return{menu_list:i,isDark:w,image:I,menuMouseOver:s=>{i.value[s].isHover=!0},menuMouseLeave:s=>{i.value[s].isHover=!1},todestination:s=>{e.push({path:`/${s}`})}}}}),d=e=>(O("data-v-9509ef12"),e=e(),$(),e),S={class:"wrapper mx-5"},T=d(()=>o("p",{class:"smallText"},"Eclipse DEV Insight.",-1)),B=d(()=>o("p",{class:"smallText"},"WELCOME. ALL",-1)),D=["onClick"],V=["onMouseover","onMouseleave"];function z(e,s,A,N,W,j){const u=t("v-col"),f=t("v-img"),g=t("v-row"),h=t("v-container");return r(),M(h,{fluid:""},{default:n(()=>[o("div",S,[a(g,{justify:"center"},{default:n(()=>[a(u,null,{default:n(()=>[T,B]),_:1}),a(u,{cols:"12",class:"justify-center"},{default:n(()=>[(r(!0),m(H,null,y(e.menu_list,(c,l)=>(r(),m("p",{class:"text-decoration-none small-menu",key:l,style:{"z-index":"0"}},[o("span",{class:v({menuHover:c.isHover}),onClick:p=>e.todestination(c.to)},[o("span",{style:{cursor:"pointer"},onMouseover:p=>e.menuMouseOver(l),onMouseleave:p=>e.menuMouseLeave(l)},L(c.text),41,V)],10,D)]))),128)),a(f,{src:"/kitten-1556444_1920.png",class:v([{dark_img:e.isDark},"mainImg small-img"]),style:{"z-index":"0"},onClick:e.checkTheme},null,8,["class","onClick"])]),_:1})]),_:1})])]),_:1})}const R=k(E,[["render",z],["__scopeId","data-v-9509ef12"]]);export{R as default};
