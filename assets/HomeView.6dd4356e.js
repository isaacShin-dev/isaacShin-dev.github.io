import{_ as f,r as u,d as h,o as c,c as k,w as o,u as g,a as V,b as w,e as a,f as n,g as p,h as C,F as H,V as M,n as d,t as y,p as b,i as O}from"./index.48b3062b.js";import{V as T}from"./VContainer.963ad6ff.js";import{V as _,a as I}from"./VRow.00d8aae0.js";const $=u("../src/assets/kitten-1556444_1920.png"),t=u(!1),i=u([{text:"HOW I WORK.",isHover:!1,to:"works"},{text:"TODAY'S LOGS.",isHover:!1,to:"log"},{text:"CONTACT ME.",isHover:!1,to:"contact"}]),x=h({name:"HomeView",components:{},setup(){const e=g();return V(e.global.current,s=>{s.dark?t.value=!0:t.value=!1}),{theme:e,img_url:$,menu_list:i,isDark:t,menuMouseOver:s=>{i.value[s].isHover=!0},menuMouseLeave:s=>{i.value[s].isHover=!1},todestination:s=>w.push({name:s}),checkTheme:()=>{e.global.current.value.dark?t.value=!0:t.value=!1}}}}),v=e=>(b("data-v-b4e148ca"),e=e(),O(),e),E={class:"wrapper mx-5"},S=v(()=>a("p",{class:"smallText"},"Eclipse Addict.",-1)),D=v(()=>a("p",{class:"smallText"},"WELCOME.",-1)),L=["onClick"],j=["onMouseover","onMouseleave"];function B(e,s,z,A,N,W){return c(),k(T,{fluid:""},{default:o(()=>[a("div",E,[n(I,{justify:"center"},{default:o(()=>[n(_,null,{default:o(()=>[S,D]),_:1}),n(_,{cols:"12",class:"justify-center"},{default:o(()=>[(c(!0),p(H,null,C(e.menu_list,(l,r)=>(c(),p("p",{class:"text-decoration-none small-menu",key:r,style:{"z-index":"0"}},[a("span",{class:d({menuHover:l.isHover}),onClick:m=>e.todestination(l.to)},[a("span",{style:{cursor:"pointer"},onMouseover:m=>e.menuMouseOver(r),onMouseleave:m=>e.menuMouseLeave(r)},y(l.text),41,j)],10,L)]))),128)),n(M,{src:e.img_url,class:d([{dark_img:e.isDark},"mainImg small-img"]),style:{"z-index":"0"},onClick:e.checkTheme},null,8,["src","class","onClick"])]),_:1})]),_:1})])]),_:1})}const K=f(x,[["render",B],["__scopeId","data-v-b4e148ca"],["__file","/Users/isaac/DEV/blogpjt/blogpjt/src/views/HomeView.vue"]]);export{K as default};
