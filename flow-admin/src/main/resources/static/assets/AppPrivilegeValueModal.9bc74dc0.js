var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,a=Object.prototype.propertyIsEnumerable,o=(t,r,a)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[r]=a,i=(e,t,r)=>new Promise(((a,o)=>{var i=e=>{try{n(r.next(e))}catch(t){o(t)}},s=e=>{try{n(r.throw(e))}catch(t){o(t)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(i,s);n((r=r.apply(e,t)).next())}));import{B as s,a as n}from"./index.0433a71f.js";import{_ as l}from"./BasicForm.8dd34761.js";import{u as d}from"./useForm.ba0f60da.js";import{s as u}from"./appPrivilegeValue.d3e6bcb6.js";import{y as m,r as c,u as p,j as f,Z as b,B as g,F as h,a2 as v,v as y,a0 as w}from"./vendor.880b4c6c.js";const j=[{title:"名称",dataIndex:"name",width:100,align:"left"},{title:"位",dataIndex:"position",width:100},{title:"排序号",dataIndex:"orderNo",width:100},{title:"备注",dataIndex:"remark",width:400,align:"left"}],x=[{field:"id",label:"ID",component:"Input",show:!1},{field:"name",label:"名称",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:32,message:"字符长度不能大于32！"}]},{field:"position",label:"位",required:!0,component:"InputNumber"},{field:"orderNo",label:"排序",required:!0,component:"InputNumber"},{label:"备注",field:"remark",component:"InputTextArea",rules:[{max:200,message:"字符长度不能大于200！"}]}];var I=m({name:"AppPrivilegeValueModal",components:{BasicModal:s,BasicForm:l},emits:["success","register"],setup(e,{emit:s}){const l=c(!0),[m,{resetFields:b,setFieldsValue:g,validate:h}]=d({labelWidth:100,schemas:x,showActionButtonGroup:!1}),[v,{setModalProps:y,closeModal:w}]=n((e=>i(this,null,(function*(){b(),y({confirmLoading:!1}),l.value=!!(null==e?void 0:e.isUpdate),p(l)&&g(((e,i)=>{for(var s in i||(i={}))r.call(i,s)&&o(e,s,i[s]);if(t)for(var s of t(i))a.call(i,s)&&o(e,s,i[s]);return e})({},e.record))}))));return{registerModal:v,registerForm:m,getTitle:f((()=>p(l)?"修改":"新增")),handleSubmit:function(){return i(this,null,(function*(){try{y({confirmLoading:!0});const e=yield h();yield u(e);w(),s("success")}finally{y({confirmLoading:!1})}}))}}}});I.render=function(e,t,r,a,o,i){const s=b("BasicForm"),n=b("BasicModal");return g(),h(n,w(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[y(s,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var F=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:I});export{F as A,I as _,j as c};
