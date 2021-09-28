var e=Object.defineProperty,t=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,a,o)=>a in t?e(t,a,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[a]=o,r=(e,t,a)=>new Promise(((o,n)=>{var r=e=>{try{l(a.next(e))}catch(t){n(t)}},i=e=>{try{l(a.throw(e))}catch(t){n(t)}},l=e=>e.done?o(e.value):Promise.resolve(e.value).then(r,i);l((a=a.apply(e,t)).next())}));import{B as i,a as l}from"./index.0433a71f.js";import{_ as s}from"./BasicForm.8dd34761.js";import{u as d}from"./useForm.ba0f60da.js";import{aR as p,aw as c}from"./index.63ccfb82.js";import{y as g,r as m,u,j as f,Z as h,B as b,F as w,a2 as v,v as y,a0 as P}from"./vendor.880b4c6c.js";const I=[{title:"访问IP",dataIndex:"ip",width:100,align:"left"},{title:"操作人ID",dataIndex:"operationId",width:100,align:"left"},{title:"操作人的姓名",dataIndex:"operationUsername",width:100,align:"left"},{title:"操作人姓名",dataIndex:"operationPerson",width:100,align:"left"},{title:"操作内容",dataIndex:"operationContent",width:100,align:"left"},{title:"操作时间",dataIndex:"operationTime",width:100,align:"left",customRender:({text:e})=>p(e)}],x=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/编码"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}},{field:"dateRange",label:"时间范围",component:"RangePicker",componentProps:{placeholder:"选择时间"},labelWidth:80,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],L=[{field:"ip",label:"访问ip",required:!1,component:"Input",show:!0},{field:"operationId",label:"操作人id",required:!1,component:"Input",show:!0},{field:"operationUsername",label:"操作人的姓名",required:!1,component:"Input",show:!0,rules:[{required:!1,whitespace:!0,message:"操作人的姓名不能为空！"},{max:32,message:"字符长度不能大于32！"}]},{field:"operationPerson",label:"操作人姓名",required:!1,component:"Input",show:!0},{field:"operationContent",label:"操作内容",required:!1,component:"Input",show:!0},{field:"operationTime",label:"操作时间",required:!0,component:"DatePicker",show:!0}];var R,O;(O=R||(R={})).LoginLogPageList="/flow/privilege/loginLog/getPagerModel",O.SaveOrUpdate="/flow/privilege/loginLog/saveOrUpdate",O.Delete="/flow/privilege/loginLog/delete";const S=e=>{const t=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let a=e||{};e.dateRange&&e.dateRange.length>0&&(a.startTimeStr=e.dateRange[0],a.endTimeStr=e.dateRange[1]),a&&(delete a.pageNum,delete a.pageSize,delete a.dateRange);const o={query:t,entity:a};return c.post({url:R.LoginLogPageList,params:o})},j=e=>c.post({url:R.Delete,params:e});var F=g({name:"LoginLogModal",components:{BasicModal:i,BasicForm:s},emits:["success","register"],setup(e,{emit:i}){const s=m(!0),[p,{resetFields:g,setFieldsValue:h,validate:b}]=d({labelWidth:100,schemas:L,showActionButtonGroup:!1}),[w,{setModalProps:v,closeModal:y}]=l((e=>r(this,null,(function*(){g(),v({confirmLoading:!1}),s.value=!!(null==e?void 0:e.isUpdate),u(s)&&h(((e,r)=>{for(var i in r||(r={}))a.call(r,i)&&n(e,i,r[i]);if(t)for(var i of t(r))o.call(r,i)&&n(e,i,r[i]);return e})({},e.record))}))));return{registerModal:w,registerForm:p,getTitle:f((()=>u(s)?"修改":"新增")),handleSubmit:function(){return r(this,null,(function*(){try{v({confirmLoading:!0});const t=yield b();yield(e=t,c.post({url:R.SaveOrUpdate,params:e})),y(),i("success")}finally{v({confirmLoading:!1})}var e}))}}}});F.render=function(e,t,a,o,n,r){const i=h("BasicForm"),l=h("BasicModal");return b(),w(l,P(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:v((()=>[y(i,{onRegister:e.registerForm},null,8,["onRegister"])])),_:1},16,["onRegister","title","onOk"])};var M=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:F});export{M as L,F as _,I as c,j as d,S as g,x as s};
