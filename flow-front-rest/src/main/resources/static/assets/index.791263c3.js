import{y as e,aK as a,r as n,j as t,X as s,u as r,Y as i,Z as o,B as l,F as c,v as p,K as d}from"./vendor.3dc066e5.js";import{p as f,c as m,ad as u}from"./index.b41e2c0e.js";import{u as g}from"./useWindowSizeFn.308e6090.js";var v=e({name:"IFrame",components:{Spin:a},props:{frameSrc:f.string.def("")},setup(){const e=n(!1),a=n(50),o=n(window.innerHeight),l=n(null),{prefixCls:c}=m("iframe-page");g(d,150,{immediate:!0});const p=t((()=>({height:`${r(o)}px`})));function d(){const e=r(l);if(!e)return;let{top:n}=u(e);n+=20,a.value=n,o.value=window.innerHeight-n;const t=document.documentElement.clientHeight-n;e.style.height=`${t}px`}function f(){e.value=!1,d()}return s((()=>{e.value=!0,i((()=>{const e=r(l);if(!e)return;const a=e;a.attachEvent?a.attachEvent("onload",(()=>{f()})):e.onload=()=>{f()}}))})),{getWrapStyle:p,loading:e,frameRef:l,prefixCls:c}}});const h=d(),x=h(((e,a,n,t,s,r)=>{const i=o("Spin");return l(),c("div",{class:e.prefixCls,style:e.getWrapStyle},[p(i,{spinning:e.loading,size:"large",style:e.getWrapStyle},{default:h((()=>[p("iframe",{src:e.frameSrc,class:`${e.prefixCls}__main`,ref:"frameRef"},null,10,["src"])])),_:1},8,["spinning","style"])],6)}));v.render=x,v.__scopeId="data-v-4d9a5dd8";export default v;
