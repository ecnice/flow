import{y as e,aL as a,r as n,j as s,u as t,X as r,Y as i,Z as o,B as l,F as c,v as p,K as f}from"./vendor.880b4c6c.js";import{p as m,c as d,ad as u}from"./index.8c1d7da4.js";import{u as g}from"./useWindowSizeFn.564cf32e.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:m.string.def("")},setup(){const e=n(!1),a=n(50),o=n(window.innerHeight),l=n(null),{prefixCls:c}=d("iframe-page");g(f,150,{immediate:!0});const p=s((()=>({height:`${t(o)}px`})));function f(){const e=t(l);if(!e)return;let{top:n}=u(e);n+=20,a.value=n,o.value=window.innerHeight-n,document.documentElement.clientHeight,e.style.height="100%"}function m(){e.value=!1,f()}return r((()=>{e.value=!0,i((()=>{const e=t(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{m()})):e.onload=()=>{m()}}))})),{getWrapStyle:p,loading:e,frameRef:l,prefixCls:c}}});const h=f(),y=h(((e,a,n,s,t,r)=>{const i=o("Spin");return l(),c("div",{class:e.prefixCls,style:e.getWrapStyle},[p(i,{wrapperClassName:"custom-spin-container",spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[p("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=y,v.__scopeId="data-v-014eff21";export default v;
