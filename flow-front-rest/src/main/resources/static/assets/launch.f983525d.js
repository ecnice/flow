var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{P as n}from"./index.3e5e5108.js";import{y as a,aX as i,b6 as d,am as c,bn as m,r as p,a as u,u as j,Z as f,B as l,F as b,a1 as x,v as B,ag as v,a8 as y}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{P}from"./index.1492d66b.js";import h from"./ActionButtons.dbab11d6.js";import w from"./BaseActionButtons.df9b0bb5.js";import g from"./ProcessBackButton.1f7f8f84.js";import A from"./ProcessHeader.d2074b3d.js";import{r as O,h as F}from"./index.b41e2c0e.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.c01d8630.js";import"./useWindowSizeFn.308e6090.js";import"./useContentViewHeight.16e0f08b.js";import"./index.0494096e.js";import"./useForm.d555d56b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.82d0d758.js";import"./index.b437b00c.js";import"./download.55ddd36a.js";import"./index.c14dc721.js";/* empty css              */import"./process.424afad8.js";import"./index.3edae848.js";import"./index.f13e7c38.js";/* empty css              *//* empty css              */import"./index.60785bf0.js";import"./Viewer.06f57865.js";var k=a({components:((e,n)=>{for(var a in n||(n={}))r.call(n,a)&&s(e,a,n[a]);if(t)for(var a of t(n))o.call(n,a)&&s(e,a,n[a]);return e})({ProcessHeader:A,PageWrapper:n,[i.name]:i,[d.name]:d,AEmpty:c,[m.name]:m,[m.Item.name]:m.Item,ActionButtons:h,BaseActionButtons:w,ProcessBackButton:g},P),setup(){const e=p(""),t=p(null),{createMessage:r}=F(),o=O(),{currentRoute:s}=u(),{params:{modelKey:n}}=j(s);return e.value=n,{currentView:e,processFormRef:t,doLaunch:function(){return e=this,s=null,n=function*(){yield j(t).doSubmit(),r.success("提交成功！"),o("/process/launched")},new Promise(((t,r)=>{var o=e=>{try{i(n.next(e))}catch(t){r(t)}},a=e=>{try{i(n.throw(e))}catch(t){r(t)}},i=e=>e.done?t(e.value):Promise.resolve(e.value).then(o,a);i((n=n.apply(e,s)).next())}));var e,s,n}}}});const L=y(" 发起流程 "),V={class:"m-1 desc-wrap"};k.render=function(e,t,r,o,s,n){const a=f("ProcessBackButton"),i=f("BaseActionButtons"),d=f("action-buttons"),c=f("PageWrapper");return l(),b(c,{contentBackground:"",class:"!mt-4"},{title:x((()=>[B(a),L,B(i)])),extra:x((()=>[B(d,{onDoLaunch:e.doLaunch},null,8,["onDoLaunch"])])),footer:x((()=>[])),default:x((()=>[B("div",V,[(l(),b(v(e.currentView),{ref:"processFormRef"},null,512))])])),_:1})};export default k;
