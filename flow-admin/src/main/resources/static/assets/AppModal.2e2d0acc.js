var v=Object.defineProperty,M=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var g=Object.getOwnPropertySymbols;var y=Object.prototype.hasOwnProperty,C=Object.prototype.propertyIsEnumerable;var B=(s,t,e)=>t in s?v(s,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):s[t]=e,x=(s,t)=>{for(var e in t||(t={}))y.call(t,e)&&B(s,e,t[e]);if(g)for(var e of g(t))C.call(t,e)&&B(s,e,t[e]);return s},b=(s,t)=>M(s,A(t));var f=(s,t,e)=>new Promise((m,a)=>{var c=r=>{try{o(e.next(r))}catch(u){a(u)}},n=r=>{try{o(e.throw(r))}catch(u){a(u)}},o=r=>r.done?m(r.value):Promise.resolve(r.value).then(c,n);o((e=e.apply(s,t)).next())});import{B as D,a as R}from"./index.30115123.js";import{B as P}from"./BasicForm.6afa01de.js";import{u as $}from"./useForm.1fd322f5.js";import{f as k}from"./app.data.561d49ce.js";import{c as N,s as S}from"./app.c495d461.js";import{_ as V}from"./index.9eb02b52.js";import{A as L,r as O,u as F,j as U,a0 as E,B as z,a1 as T,a6 as W,w as q,a4 as G}from"./vendor.7bee64cc.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";const I=L({name:"AppModal",components:{BasicModal:D,BasicForm:P},emits:["success","register"],setup(s,{emit:t}){const e=O(!0),[m,{resetFields:a,updateSchema:c,setFieldsValue:n,validate:o}]=$({labelWidth:100,schemas:k,showActionButtonGroup:!1}),r=i=>[{trigger:"blur",validator:(d,j)=>j?N({id:i.id,field:i.field,fieldValue:j,fieldName:i.fieldName}).then(p=>p?Promise.resolve():Promise.reject(i.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(p=>Promise.reject(p)):Promise.resolve()}],[u,{setModalProps:l,closeModal:h}]=R(i=>f(this,null,function*(){yield a(),l({confirmLoading:!1}),e.value=!!(i==null?void 0:i.isUpdate);let d=i.record;yield c([{field:"sn",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u6807\u8BC6\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:40,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E40\uFF01"},...r({id:F(e)&&d&&d.id||"",field:"sn",fieldValue:"",fieldName:"\u6807\u8BC6"})]}]),F(e)&&n(b(x({},d),{status:d.status===1}))})),_=U(()=>F(e)?"\u4FEE\u6539":"\u65B0\u589E");function w(){return f(this,null,function*(){try{l({confirmLoading:!0});const i=yield o();i.status=i.status?1:0,yield S(i),h(),t("success")}finally{l({confirmLoading:!1})}})}return{registerModal:u,registerForm:m,getTitle:_,handleSubmit:w}}});function Z(s,t,e,m,a,c){const n=E("BasicForm"),o=E("BasicModal");return z(),T(o,G(s.$attrs,{onRegister:s.registerModal,title:s.getTitle,onOk:s.handleSubmit}),{default:W(()=>[q(n,{onRegister:s.registerForm},null,8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var be=V(I,[["render",Z]]);export{be as default};
