var e=Object.defineProperty,o=Object.defineProperties,r=Object.getOwnPropertyDescriptors,t=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,s=(o,r,t)=>r in o?e(o,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[r]=t,n=(e,o,r)=>new Promise(((t,i)=>{var a=e=>{try{n(r.next(e))}catch(o){i(o)}},s=e=>{try{n(r.throw(e))}catch(o){i(o)}},n=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,s);n((r=r.apply(e,o)).next())}));import{B as d,a as l}from"./index.0795d69f.js";import{_ as c}from"./BasicForm.8a33b99c.js";import{u as p}from"./useForm.64c4ba7e.js";import{b as m}from"./account.data.a470356e.js";import{b as u}from"./account.c86bdf90.js";import{g as f}from"./group.a5344d41.js";import{y as b,bx as j,r as g,u as v,j as x,Z as y,B as h,F as O,a2 as w,v as F,a0 as B}from"./vendor.880b4c6c.js";import"./index.4926e6da.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";var P=b({name:"AccountModal",components:{BasicModal:d,BasicForm:c,Select:j},emits:["success","register"],setup(e,{emit:d}){const c=g(!0),b=g([]),j=g("设置组"),[y,{setFieldsValue:h,updateSchema:O,resetFields:w,validate:F}]=p({labelWidth:100,schemas:m,showActionButtonGroup:!1,actionColOptions:{span:23}}),[B,{setModalProps:P,closeModal:M}]=l((e=>n(this,null,(function*(){w(),P({confirmLoading:!1,title:"给账号【"+e.record.realName+"("+e.record.username+")】设置组"}),c.value=!!(null==e?void 0:e.isUpdate);const n=yield f();if(n.forEach((e=>{e.label=e.name,e.value=e.id})),b.value=n,v(c)){let n=e.record.groups||[];n=n.map((e=>e.id)),h((d=((e,o)=>{for(var r in o||(o={}))i.call(o,r)&&s(e,r,o[r]);if(t)for(var r of t(o))a.call(o,r)&&s(e,r,o[r]);return e})({},e.record),o(d,r({groups:n}))))}var d}))));return{registerModal:B,registerForm:y,getTitle:x((()=>v(c)?j.value:"新增")),groupOptions:b,handleSubmit:function(){return n(this,null,(function*(){try{P({confirmLoading:!0});const e=yield F();e.groups=e.groups.map((e=>({id:e}))),e.userId=e.id,delete e.id,yield u(e),M(),d("success")}finally{P({confirmLoading:!1})}}))}}}});P.render=function(e,o,r,t,i,a){const s=y("Select"),n=y("BasicForm"),d=y("BasicModal");return h(),O(d,B(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:w((()=>[F(n,{onRegister:e.registerForm},{groups:w((({model:o,field:r})=>[F(s,{value:o[r],"onUpdate:value":e=>o[r]=e,mode:"multiple",style:{width:"100%"},placeholder:"请选择组","option-label-prop":"label",options:e.groupOptions},null,8,["value","onUpdate:value","options"])])),_:1},8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};export default P;
