import{A as l,a9 as d,c2 as m,a as _,j as f,a0 as e,B as g,a1 as E,a6 as a,w as c}from"./vendor.5879c5ca.js";/* empty css                */import{_ as C,I as L,b8 as h,b as B,P as b}from"./index.aeb7d9f7.js";const I=l({name:"ErrorAction",components:{Icon:L,Tooltip:d,Badge:m},setup(){const{t:o}=B(),{push:n}=_(),t=h(),r=f(()=>t.getErrorLogListCount);function s(){n(b.ERROR_LOG_PAGE).then(()=>{t.setErrorLogListCount(0)})}return{t:o,getCount:r,handleToErrorList:s}}});function T(o,n,t,r,s,j){const i=e("Icon"),u=e("Badge"),p=e("Tooltip");return g(),E(p,{title:o.t("layout.header.tooltipErrorLog"),placement:"bottom",mouseEnterDelay:.5,onClick:o.handleToErrorList},{default:a(()=>[c(u,{count:o.getCount,offset:[0,10],overflowCount:99},{default:a(()=>[c(i,{icon:"ion:bug-outline"})]),_:1},8,["count"])]),_:1},8,["title","mouseEnterDelay","onClick"])}var R=C(I,[["render",T]]);export{R as default};
