var E=Object.defineProperty;var l=Object.getOwnPropertySymbols;var h=Object.prototype.hasOwnProperty,w=Object.prototype.propertyIsEnumerable;var c=(o,s,e)=>s in o?E(o,s,{enumerable:!0,configurable:!0,writable:!0,value:e}):o[s]=e,f=(o,s)=>{for(var e in s||(s={}))h.call(s,e)&&c(o,e,s[e]);if(l)for(var e of l(s))w.call(s,e)&&c(o,e,s[e]);return o};var p=(o,s,e)=>new Promise((d,a)=>{var m=t=>{try{r(e.next(t))}catch(i){a(i)}},u=t=>{try{r(e.throw(t))}catch(i){a(i)}},r=t=>t.done?d(t.value):Promise.resolve(t.value).then(m,u);r((e=e.apply(o,s)).next())});import{B as D,a as A}from"./index.30115123.js";import{B as M}from"./BasicForm.6afa01de.js";import{u as C}from"./useForm.1fd322f5.js";import{A as I,r as _,u as F,j as v,a0 as j,B as y,a1 as S,a6 as q,w as $,a4 as P}from"./vendor.7bee64cc.js";/* empty css               */import{s as R}from"./modelInfo.10317677.js";import{a as k}from"./app.c495d461.js";import{_ as L}from"./index.9eb02b52.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css                *//* empty css                */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";const O=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E200\uFF01"}]},{field:"modelKey",label:"\u6807\u8BC6",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:150,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E150\uFF01"}]},{field:"appSn",label:"\u6240\u5C5E\u7CFB\u7EDF",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}],U=I({name:"ModelInfoModal",components:{BasicModal:D,BasicForm:M},emits:["success","register"],setup(o,{emit:s}){const e=_(!0),[d,{setFieldsValue:a,updateSchema:m,resetFields:u,validate:r}]=C({labelWidth:100,schemas:O,showActionButtonGroup:!1,actionColOptions:{span:23}}),[t,{setModalProps:i,closeModal:g}]=A(n=>p(this,null,function*(){u(),i({confirmLoading:!1}),e.value=!!(n==null?void 0:n.isUpdate);const x=yield k();m([{field:"appSn",componentProps:{options:x,labelField:"id"}}]),F(e)&&a(f({},n.record))})),B=v(()=>F(e)?"\u7F16\u8F91":"\u65B0\u589E");function b(){return p(this,null,function*(){try{i({confirmLoading:!0});const n=yield r();yield R(n),g(),s("success")}finally{i({confirmLoading:!1})}})}return{registerModal:t,registerForm:d,getTitle:B,handleSubmit:b}}});function z(o,s,e,d,a,m){const u=j("BasicForm"),r=j("BasicModal");return y(),S(r,P(o.$attrs,{onRegister:o.registerModal,title:o.getTitle,onOk:o.handleSubmit}),{default:q(()=>[$(u,{onRegister:o.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var fe=L(U,[["render",z]]);export{fe as default};
