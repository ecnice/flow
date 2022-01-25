var M=Object.defineProperty;var E=Object.getOwnPropertySymbols;var x=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var h=(a,t,e)=>t in a?M(a,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):a[t]=e,b=(a,t)=>{for(var e in t||(t={}))x.call(t,e)&&h(a,e,t[e]);if(E)for(var e of E(t))A.call(t,e)&&h(a,e,t[e]);return a};var g=(a,t,e)=>new Promise((s,r)=>{var m=u=>{try{n(e.next(u))}catch(i){r(i)}},l=u=>{try{n(e.throw(u))}catch(i){r(i)}},n=u=>u.done?s(u.value):Promise.resolve(u.value).then(m,l);n((e=e.apply(a,t)).next())});import{B as C,a as j}from"./index.309f7e13.js";import{B as P}from"./BasicForm.bfb70ce4.js";import{u as S}from"./useForm.9d0149a6.js";import{z as v,ba as N,A as R,r as q,u as B,j as $,a0 as I,B as k,a1 as K,a6 as L,w as O,a4 as T}from"./vendor.5879c5ca.js";/* empty css               */import{e as z,s as V}from"./modelInfo.8dec6c05.js";import{a as U}from"./app.19f09dd6.js";import{_ as W,r as G}from"./index.aeb7d9f7.js";const re=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"KEY",dataIndex:"modelKey",width:100,align:"left"},{title:"\u5206\u7C7B\u540D\u79F0",dataIndex:"categoryName",width:100,align:"left"},{title:"\u7CFB\u7EDF",dataIndex:"appName",width:100,align:"left"},{title:"\u5E94\u7528\u8303\u56F4",dataIndex:"appliedRangeName",width:100,align:"left"},{title:"\u72B6\u6001",dataIndex:"statusName",width:70,align:"center",customRender:({record:a})=>{const{status:t,statusName:e}=a;var s="";return~~t==2?s="warning":~~t==3?s="success":~~t==4?s="error":s="gray",v(N,{color:s},()=>e)}},{title:"\u66F4\u65B0\u65F6\u95F4",dataIndex:"updateTime",width:120,align:"left"}],le=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u7F16\u7801"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"appSn",label:"\u7CFB\u7EDF",component:"Select",labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],Z=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"categoryCode",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:200,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E200\uFF01"}]},{field:"modelKey",label:"\u6807\u8BC6",component:"Input",required:!0},{field:"appSn",label:"\u6240\u5C5E\u7CFB\u7EDF",component:"Select",componentProps:{getPopupContainer:()=>document.body},required:!0}],Y=R({name:"ModelInfoModal",components:{BasicModal:C,BasicForm:P},emits:["success","register"],setup(a,{emit:t}){const e=q(!0),s=G(),[r,{setFieldsValue:m,updateSchema:l,resetFields:n,validate:u}]=S({labelWidth:100,schemas:Z,showActionButtonGroup:!1,actionColOptions:{span:23}}),i=o=>[{trigger:"blur",validator:(d,c)=>c?z({id:o.id,field:o.field,fieldValue:c,fieldName:o.fieldName}).then(F=>F?Promise.resolve():Promise.reject(o.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(F=>Promise.reject(F)):Promise.resolve()}],[w,{setModalProps:f,changeLoading:p,closeModal:D}]=j(o=>g(this,null,function*(){n(),f({confirmLoading:!1}),e.value=!!(o==null?void 0:o.isUpdate),p(!0);let d=null;try{d=yield U()}finally{p(!1)}let c=o.record;yield l([{field:"appSn",componentProps:{options:d,labelField:"id"}},{field:"modelKey",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[a-zA-Z_]{1,}[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\u4E14\u4EE5\u82F1\u6587\u6216\u4E0B\u5212\u7EBF\u5F00\u5934\uFF01"},{max:150,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E150\uFF01"},...i({id:B(e)&&c&&c.id||"",field:"modelKey",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),B(e)&&m(b({},o.record))})),y=$(()=>B(e)?"\u7F16\u8F91":"\u65B0\u589E");function _(){return g(this,null,function*(){try{f({confirmLoading:!0});const o=yield u(),d=yield V(o);s("/flowable/bpmn/designer?modelId="+d.modelId),D(),t("success")}finally{p(!1),f({confirmLoading:!1})}})}return{registerModal:w,registerForm:r,getTitle:y,handleSubmit:_}}});function H(a,t,e,s,r,m){const l=I("BasicForm"),n=I("BasicModal");return k(),K(n,T(a.$attrs,{onRegister:a.registerModal,title:a.getTitle,onOk:a.handleSubmit}),{default:L(()=>[O(l,{onRegister:a.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var J=W(Y,[["render",H]]),ie=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:J});export{J as M,ie as a,re as c,le as s};
