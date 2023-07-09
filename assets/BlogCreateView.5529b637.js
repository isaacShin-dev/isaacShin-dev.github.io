import{Y as U,d as ge,a5 as ye,r as S,W as he,a6 as Ce,a7 as be,a8 as _e,x as Y,U as T,i as Se,a9 as Ve,aa as ke,ab as we,k as Ee,J as Ie,H as Pe,ac as Ae,v as I,ad as q,l as Be,ae as Fe,af as J,ag as xe,e as r,ah as ze,R as L,F as $,ai as De,aj as Re,ak as Me,_ as ae,al as $e,o as D,c as O,w as p,am as Q,a0 as Ue,an as Oe,b as je,f as Le,g as Ne,$ as N,t as Te,Q as X,X as Ke,ao as Ge,a1 as He}from"./index.3d65ed60.js";import{u as We}from"./CommonStore.41dd93bb.js";import{V as P,a as Z}from"./VRow.84df9552.js";import{V as oe,a as Ye}from"./VChip.f226c17f.js";import{V as qe}from"./VContainer.3ca794c9.js";var Je=["onActivate","onAddUndo","onBeforeAddUndo","onBeforeExecCommand","onBeforeGetContent","onBeforeRenderUI","onBeforeSetContent","onBeforePaste","onBlur","onChange","onClearUndos","onClick","onContextMenu","onCopy","onCut","onDblclick","onDeactivate","onDirty","onDrag","onDragDrop","onDragEnd","onDragGesture","onDragOver","onDrop","onExecCommand","onFocus","onFocusIn","onFocusOut","onGetContent","onHide","onInit","onKeyDown","onKeyPress","onKeyUp","onLoadContent","onMouseDown","onMouseEnter","onMouseLeave","onMouseMove","onMouseOut","onMouseOver","onMouseUp","onNodeChange","onObjectResizeStart","onObjectResized","onObjectSelected","onPaste","onPostProcess","onPostRender","onPreProcess","onProgressState","onRedo","onRemove","onReset","onSaveContent","onSelectionChange","onSetAttrib","onSetContent","onShow","onSubmit","onUndo","onVisualAid"],Qe=function(e){return Je.map(function(t){return t.toLowerCase()}).indexOf(e.toLowerCase())!==-1},Xe=function(e,t,n){Object.keys(t).filter(Qe).forEach(function(l){var a=t[l];typeof a=="function"&&(l==="onInit"?a(e,n):n.on(l.substring(2),function(i){return a(i,n)}))})},Ze=function(e,t,n,l){var a=e.modelEvents?e.modelEvents:null,i=Array.isArray(a)?a.join(" "):a;U(l,function(o,d){n&&typeof o=="string"&&o!==d&&o!==n.getContent({format:e.outputFormat})&&n.setContent(o)}),n.on(i||"change input undo redo",function(){t.emit("update:modelValue",n.getContent({format:e.outputFormat}))})},en=function(e,t,n,l,a,i){l.setContent(i()),n.attrs["onUpdate:modelValue"]&&Ze(t,n,l,a),Xe(e,n.attrs,l)},ee=0,le=function(e){var t=Date.now(),n=Math.floor(Math.random()*1e9);return ee++,e+"_"+n+ee+String(t)},nn=function(e){return e!==null&&e.tagName.toLowerCase()==="textarea"},ne=function(e){return typeof e>"u"||e===""?[]:Array.isArray(e)?e:e.split(" ")},tn=function(e,t){return ne(e).concat(ne(t))},an=function(e){return e==null},te=function(){return{listeners:[],scriptId:le("tiny-script"),scriptLoaded:!1}},on=function(){var e=te(),t=function(a,i,o,d){var s=i.createElement("script");s.referrerPolicy="origin",s.type="application/javascript",s.id=a,s.src=o;var C=function(){s.removeEventListener("load",C),d()};s.addEventListener("load",C),i.head&&i.head.appendChild(s)},n=function(a,i,o){e.scriptLoaded?o():(e.listeners.push(o),a.getElementById(e.scriptId)||t(e.scriptId,a,i,function(){e.listeners.forEach(function(d){return d()}),e.scriptLoaded=!0}))},l=function(){e=te()};return{load:n,reinitialize:l}},ln=on(),rn=function(){return typeof window<"u"?window:global},A=function(){var e=rn();return e&&e.tinymce?e.tinymce:null},un={apiKey:String,cloudChannel:String,id:String,init:Object,initialValue:String,inline:Boolean,modelEvents:[String,Array],plugins:[String,Array],tagName:String,toolbar:[String,Array],modelValue:String,disabled:Boolean,tinymceScriptSrc:String,outputFormat:{type:String,validator:function(e){return e==="html"||e==="text"}}},B=globalThis&&globalThis.__assign||function(){return B=Object.assign||function(e){for(var t,n=1,l=arguments.length;n<l;n++){t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e},B.apply(this,arguments)},sn=function(e,t,n,l){return e(l||"div",{id:t,ref:n})},cn=function(e,t,n){return e("textarea",{id:t,visibility:"hidden",ref:n})},dn=ge({props:un,setup:function(e,t){var n=e.init?B({},e.init):{},l=ye(e),a=l.disabled,i=l.modelValue,o=l.tagName,d=S(null),s=null,C=e.id||le("tiny-vue"),V=e.init&&e.init.inline||e.inline,v=!!t.attrs["onUpdate:modelValue"],c=!0,g=e.initialValue?e.initialValue:"",k="",R=function(m){return v?function(){return i!=null&&i.value?i.value:""}:function(){return m?g:k}},w=function(){var m=R(c),f=B(B({},n),{readonly:e.disabled,target:d.value,plugins:tn(n.plugins,e.plugins),toolbar:e.toolbar||n.toolbar,inline:V,setup:function(h){s=h,h.on("init",function(j){return en(j,e,t,h,i,m)}),typeof n.setup=="function"&&n.setup(h)}});nn(d.value)&&(d.value.style.visibility=""),A().init(f),c=!1};U(a,function(m){var f;s!==null&&(typeof((f=s.mode)===null||f===void 0?void 0:f.set)=="function"?s.mode.set(m?"readonly":"design"):s.setMode(m?"readonly":"design"))}),U(o,function(m){var f;v||(k=s.getContent()),(f=A())===null||f===void 0||f.remove(s),T(function(){return w()})}),he(function(){if(A()!==null)w();else if(d.value&&d.value.ownerDocument){var m=e.cloudChannel?e.cloudChannel:"6",f=e.apiKey?e.apiKey:"no-api-key",h=an(e.tinymceScriptSrc)?"https://cdn.tiny.cloud/1/".concat(f,"/tinymce/").concat(m,"/tinymce.min.js"):e.tinymceScriptSrc;ln.load(d.value.ownerDocument,h,w)}}),Ce(function(){A()!==null&&A().remove(s)}),V||(be(function(){c||w()}),_e(function(){var m;v||(k=s.getContent()),(m=A())===null||m===void 0||m.remove(s)}));var b=function(m){var f;k=s.getContent(),(f=A())===null||f===void 0||f.remove(s),n=B(B({},n),m),T(function(){return w()})};return t.expose({rerender:b,getEditor:function(){return s}}),function(){return V?sn(Y,C,d,e.tagName):cn(Y,C,d)}}});const fn=Se({chips:Boolean,counter:Boolean,counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},multiple:Boolean,showSize:{type:[Boolean,Number],default:!1,validator:e=>typeof e=="boolean"||[1e3,1024].includes(e)},...Ve({prependIcon:"$file"}),modelValue:{type:Array,default:()=>[],validator:e=>ke(e).every(t=>t!=null&&typeof t=="object")},...we({clearable:!0})},"VFileInput"),vn=Ee()({name:"VFileInput",inheritAttrs:!1,props:fn(),emits:{"click:control":e=>!0,"mousedown:control":e=>!0,"update:focused":e=>!0,"update:modelValue":e=>!0},setup(e,t){let{attrs:n,emit:l,slots:a}=t;const{t:i}=Ie(),o=Pe(e,"modelValue"),{isFocused:d,focus:s,blur:C}=Ae(e),V=I(()=>typeof e.showSize!="boolean"?e.showSize:void 0),v=I(()=>{var u;return((u=o.value)!=null?u:[]).reduce((y,_)=>{let{size:F=0}=_;return y+F},0)}),c=I(()=>q(v.value,V.value)),g=I(()=>{var u;return((u=o.value)!=null?u:[]).map(y=>{const{name:_="",size:F=0}=y;return e.showSize?`${_} (${q(F,V.value)})`:_})}),k=I(()=>{var y,_;const u=(_=(y=o.value)==null?void 0:y.length)!=null?_:0;return e.showSize?i(e.counterSizeString,u,c.value):i(e.counterString,u)}),R=S(),w=S(),b=S(),m=I(()=>d.value||e.active),f=I(()=>["plain","underlined"].includes(e.variant));function h(){var u;b.value!==document.activeElement&&((u=b.value)==null||u.focus()),d.value||s()}function j(u){K(u)}function ie(u){l("mousedown:control",u)}function K(u){var y;(y=b.value)==null||y.click(),l("click:control",u)}function re(u){u.stopPropagation(),h(),T(()=>{o.value=[],Me(e["onClick:clear"],u)})}return U(o,u=>{(!Array.isArray(u)||!u.length)&&b.value&&(b.value.value="")}),Be(()=>{const u=!!(a.counter||e.counter),y=!!(u||a.details),[_,F]=Fe(n),[{modelValue:bn,...ue}]=J.filterProps(e),[se]=xe(e);return r(J,L({ref:R,modelValue:o.value,"onUpdate:modelValue":x=>o.value=x,class:["v-file-input",{"v-text-field--plain-underlined":f.value},e.class],style:e.style,"onClick:prepend":j},_,ue,{centerAffix:!f.value,focused:d.value}),{...a,default:x=>{let{id:M,isDisabled:z,isDirty:G,isReadonly:ce,isValid:de}=x;return r(ze,L({ref:w,"prepend-icon":e.prependIcon,onMousedown:ie,onClick:K,"onClick:clear":re,"onClick:prependInner":e["onClick:prependInner"],"onClick:appendInner":e["onClick:appendInner"]},se,{id:M.value,active:m.value||G.value,dirty:G.value,disabled:z.value,focused:d.value,error:de.value===!1}),{...a,default:fe=>{var H;let{props:{class:ve,...me}}=fe;return r($,null,[r("input",L({ref:b,type:"file",readonly:ce.value,disabled:z.value,multiple:e.multiple,name:e.name,onClick:E=>{E.stopPropagation(),h()},onChange:E=>{var W;if(!E.target)return;const pe=E.target;o.value=[...(W=pe.files)!=null?W:[]]},onFocus:h,onBlur:C},me,F),null),r("div",{class:ve},[!!((H=o.value)!=null&&H.length)&&(a.selection?a.selection({fileNames:g.value,totalBytes:v.value,totalBytesReadable:c.value}):e.chips?g.value.map(E=>r(oe,{key:E,size:"small",color:e.color},{default:()=>[E]})):g.value.join(", "))])])}})},details:y?x=>{var M,z;return r($,null,[(M=a.details)==null?void 0:M.call(a,x),u&&r($,null,[r("span",null,null),r(De,{active:!!((z=o.value)!=null&&z.length),value:k.value},a.counter)])])}:void 0})}),Re({},R,w,b)}}),mn={style:{overflow:"scroll"}},pn={__name:"EditorCoponent",setup(e){const t=S(""),n=S(""),l=S(""),a=S([]),i=S(null),o=new FormData,s=We().url,C=v=>{if(console.log(v.target.value),a.value.includes(v.target.value)){alert("\uC774\uBBF8 \uCD94\uAC00\uB41C \uD0DC\uADF8\uC785\uB2C8\uB2E4."),v.target.value="";return}v.key==="Enter"&&(a.value.push(v.target.value),v.target.value="")};$e(()=>{t.value="6conl8wgl1btba56s7d2es1p20vh9x0nskbzl5hlzaso1jxm"});const V=()=>{o.append("title",l.value),o.append("contents",n.value),o.append("tags",a.value),o.append("cover_image",i.value[0]);let v=o.keys();for(const c of v)console.log(c);Ke({method:"POST",url:`${s}/work/`,headers:{Authorization:`Token ${localStorage.getItem("access_token")}`},data:o}).then(c=>{console.log(c)}).catch(c=>{console.log(c)}).catch(c=>{console.log(c)})};return(v,c)=>(D(),O(Z,{class:"editor-wrapper"},{default:p(()=>[r(P,{cols:"12",class:"mt-4"},{default:p(()=>[r(Q,{modelValue:l.value,"onUpdate:modelValue":c[0]||(c[0]=g=>l.value=g),label:"\uC81C\uBAA9"},null,8,["modelValue"])]),_:1}),r(P,{cols:"12"},{default:p(()=>[r(vn,{label:"\uBA54\uC778 \uC774\uBBF8\uC9C0",modelValue:i.value,"onUpdate:modelValue":c[1]||(c[1]=g=>i.value=g)},null,8,["modelValue"])]),_:1}),r(P,null,{default:p(()=>[r(Ue(dn),{style:{height:"700px"},modelValue:n.value,"onUpdate:modelValue":c[2]||(c[2]=g=>n.value=g),"api-key":t.value,init:{plugins:"anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss",toolbar:"undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat",tinycomments_mode:"embedded",tinycomments_author:"Author name",mergetags_list:[{value:"First.Name",title:"First Name"},{value:"Email",title:"Email"}]}},null,8,["modelValue","api-key","init"])]),_:1}),r(P,{cols:"12"},{default:p(()=>[r(Z,null,{default:p(()=>[r(P,{cols:"5"},{default:p(()=>[r(Q,{onKeyup:Oe(C,["enter"]),variant:"underlined",label:"\uD0DC\uADF8 \uC785\uB825"},null,8,["onKeyup"])]),_:1}),r(P,{cols:"6"},{default:p(()=>[je("div",mn,[r(Ye,null,{default:p(()=>[(D(!0),Le($,null,Ne(a.value,(g,k)=>(D(),O(oe,{class:"ma-2",label:"",closable:"",key:k,elevation:"2"},{default:p(()=>[N(Te(g),1)]),_:2},1024))),128))]),_:1})])]),_:1})]),_:1})]),_:1}),r(P,{cols:"12",class:"mb-3"},{default:p(()=>[r(X,{class:"mx-2",onClick:V},{default:p(()=>[N("\uC800\uC7A5")]),_:1}),r(X,{class:"mx-2",onClick:c[3]||(c[3]=g=>v.$emit("closeEditor"))},{default:p(()=>[N("\uCDE8\uC18C")]),_:1})]),_:1})]),_:1}))}},gn=ae(pn,[["__scopeId","data-v-eb5a8f84"]]),yn={name:"App",components:{Editor:gn},methods:{closeEditor(){this.$router.push({name:"works"})}}};function hn(e,t,n,l,a,i){const o=Ge("Editor");return D(),O(qe,{id:"app",class:"mt-2"},{default:p(()=>[r(He,{class:"px-4",elevation:"8",height:"1200"},{default:p(()=>[r(o,{onCloseEditor:i.closeEditor},null,8,["onCloseEditor"])]),_:1})]),_:1})}const Cn=ae(yn,[["render",hn]]),En={__name:"BlogCreateView",setup(e){return(t,n)=>(D(),O(Cn))}};export{En as default};
