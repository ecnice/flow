var D=Object.defineProperty;var f=Object.getOwnPropertySymbols;var g=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable;var x=(s,o,e)=>o in s?D(s,o,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[o]=e,B=(s,o)=>{for(var e in o||(o={}))g.call(o,e)&&x(s,e,o[e]);if(f)for(var e of f(o))k.call(o,e)&&x(s,e,o[e]);return s};var _=(s,o,e)=>new Promise((c,n)=>{var m=t=>{try{a(e.next(t))}catch(i){n(i)}},r=t=>{try{a(e.throw(t))}catch(i){n(i)}},a=t=>t.done?c(t.value):Promise.resolve(t.value).then(m,r);a((e=e.apply(s,o)).next())});import{P as v}from"./index.a7d13475.js";import{A as F,a_ as l,bb as b,ar as V,bv as d,r as h,a as C,u as P,a0 as p,B as w,a1 as A,a5 as u,w as j,H as y,ak as H,ad as L}from"./vendor.5eb38889.js";/* empty css               *//* empty css               *//* empty css               *//* empty css               *//* empty css                */import{P as R}from"./index.c0623dc2.js";import W from"./ActionButtons.315d807b.js";import $ from"./BaseActionButtons.95df3750.js";import E from"./ProcessBackButton.1020d51a.js";import N from"./ProcessHeader.a8ef199e.js";import{_ as I,r as M,h as S}from"./index.eb81839e.js";/* empty css               *//* empty css               */import"./useWindowSizeFn.e269959a.js";import"./useContentViewHeight.2add70b5.js";import"./index.f5e2e0c3.js";import"./useForm.ae28d85e.js";/* empty css               *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.a8dc01b1.js";import"./index.df597b92.js";import"./download.29d0d464.js";import"./index.3a95e68c.js";/* empty css                */import"./process.b4fbb99a.js";import"./index.65f3edd6.js";import"./index.d9514b5c.js";/* empty css                *//* empty css                */import"./index.7772efb2.js";import"./Viewer.3f58b0b7.js";const z=F({components:B({ProcessHeader:N,PageWrapper:v,[l.name]:l,[b.name]:b,AEmpty:V,[d.name]:d,[d.Item.name]:d.Item,ActionButtons:W,BaseActionButtons:$,ProcessBackButton:E},R),setup(){const s=h(""),o=h(null),{createMessage:e}=S(),c=M(),{currentRoute:n}=C(),{params:{modelKey:m}}=P(n);s.value=m;function r(){return _(this,null,function*(){yield P(o).doSubmit(),e.success("\u63D0\u4EA4\u6210\u529F\uFF01"),c("/process/launched")})}return{currentView:s,processFormRef:o,doLaunch:r}}}),G=L(" \u53D1\u8D77\u6D41\u7A0B "),K={class:"m-1 desc-wrap"};function T(s,o,e,c,n,m){const r=p("ProcessBackButton"),a=p("BaseActionButtons"),t=p("action-buttons"),i=p("PageWrapper");return w(),A(i,{contentBackground:"",class:"!mt-4"},{title:u(()=>[j(r),G,j(a)]),extra:u(()=>[j(t,{onDoLaunch:s.doLaunch},null,8,["onDoLaunch"])]),footer:u(()=>[]),default:u(()=>[y("div",K,[(w(),A(H(s.currentView),{ref:"processFormRef"},null,512))])]),_:1})}var Ve=I(z,[["render",T]]);export{Ve as default};
