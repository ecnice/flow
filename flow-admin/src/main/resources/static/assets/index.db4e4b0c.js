import e from"./index.e7adf083.js";import{u as a}from"./useFrameKeepAlive.62e399e2.js";import{y as r,a as t,u as m,r as n,X as s,j as o,Z as i,B as l,F as u,v as d}from"./vendor.880b4c6c.js";import{a0 as f}from"./index.a33a5e4d.js";import{a as c}from"./modelInfo.9e295e64.js";import"./useWindowSizeFn.564cf32e.js";var p=r({name:"BpmnDesigner",components:{FramePage:e},setup(){const{currentRoute:e}=t(),{query:{modelId:r}}=m(e),i=n(""),l=n({}),u=f(),d=t(),p=u.getTabList.find((e=>e.fullPath===d.currentRoute.value.fullPath));s((()=>{0!==p.meta.title.indexOf("设计流程-")&&c(r).then((e=>{p.meta.title&&-1===p.meta.title.indexOf("-"+e.name)&&(p.meta.title=p.meta.title+"-"+e.name)})).catch((()=>{}))})),i.value="/flow-bpmn/index.html/#/bpmn/designer?modelId="+r;const{getFramePages:h,hasRenderFrame:g,showIframe:F}=a(),j=o((()=>m(h).length>0));return{getFramePages:h,hasRenderFrame:g,showIframe:F,showFrame:j,url:i,frame:l}}});p.render=function(e,a,r,t,m,n){const s=i("FramePage");return l(),u("div",null,[d(s,{frameSrc:e.url},null,8,["frameSrc"])])};export default p;
