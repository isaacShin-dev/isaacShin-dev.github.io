import{_ as v,r as u,d as h,o as i,c as k,w as o,u as g,a as C,b as V,e as t,f as n,g as d,h as H,F as w,V as M,n as p,t as y,p as O,i as T}from"./index.fd5fd308.js";import{V as I}from"./VContainer.29de02e4.js";import{V as _,a as $}from"./VRow.d5d9d50e.js";const a=u(!1),x=u("/assets/kitten-1556444_1920.png"),c=u([{text:"HOW I WORK.",isHover:!1,to:"works"},{text:"TODAY'S LOGS.",isHover:!1,to:"log"},{text:"CONTACT ME.",isHover:!1,to:"contact"}]),S=h({name:"HomeView",components:{},setup(){const e=g();return C(e.global.current,s=>{s.dark?a.value=!0:a.value=!1}),{theme:e,menu_list:c,isDark:a,image:x,menuMouseOver:s=>{c.value[s].isHover=!0},menuMouseLeave:s=>{c.value[s].isHover=!1},todestination:s=>V.push({name:s}),checkTheme:()=>{e.global.current.value.dark?a.value=!0:a.value=!1}}}}),f=e=>(O("data-v-87650af2"),e=e(),T(),e),E={class:"wrapper mx-5"},L=f(()=>t("p",{class:"smallText"},"Eclipse Addict.",-1)),B=f(()=>t("p",{class:"smallText"},"WELCOME.",-1)),D=["onClick"],b=["onMouseover","onMouseleave"];function z(e,s,A,N,W,j){return i(),k(I,{fluid:""},{default:o(()=>[t("div",E,[n($,{justify:"center"},{default:o(()=>[n(_,null,{default:o(()=>[L,B]),_:1}),n(_,{cols:"12",class:"justify-center"},{default:o(()=>[(i(!0),d(w,null,H(e.menu_list,(l,r)=>(i(),d("p",{class:"text-decoration-none small-menu",key:r,style:{"z-index":"0"}},[t("span",{class:p({menuHover:l.isHover}),onClick:m=>e.todestination(l.to)},[t("span",{style:{cursor:"pointer"},onMouseover:m=>e.menuMouseOver(r),onMouseleave:m=>e.menuMouseLeave(r)},y(l.text),41,b)],10,D)]))),128)),n(M,{src:e.image,class:p([{dark_img:e.isDark},"mainImg small-img"]),style:{"z-index":"0"},onClick:e.checkTheme},null,8,["src","class","onClick"])]),_:1})]),_:1})])]),_:1})}const K=v(S,[["render",z],["__scopeId","data-v-87650af2"]]);export{K as default};
