import{g as e,_ as s}from"./BasicForm.2565c07e.js";import{u as o,av as a,g as r}from"./index.24f6b3f0.js";import{u as i}from"./useForm.bc6116e1.js";import{_ as n}from"./PageWrapper.f686cbe0.js";import{k as t,bz as p,K as d,o as m,n as l,Q as c,q as f}from"./vendor.56d2c57f.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.c68d08d4.js";import"./uuid.c53863e7.js";/* empty css              */import"./useModal.5069d636.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              */import"./download.61f9d787.js";import"./StrengthMeter.4fd49e87.js";import"./usePageContext.33476434.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";const{uploadUrl:u=""}=o();function j(e,s){return a.uploadFile({url:u,onUploadProgress:s},e)}const g=[{field:"field1",component:"Upload",label:"字段1",colProps:{span:8},rules:[{required:!0,message:"请选择上传文件"}],componentProps:{api:j}}];var x=t({components:{BasicUpload:e,BasicForm:s,PageWrapper:n,[p.name]:p},setup(){const{createMessage:e}=r(),[s]=i({labelWidth:120,schemas:g,actionColOptions:{span:16}});return{handleChange:s=>{e.info(`已上传文件${JSON.stringify(s)}`)},uploadApi:j,register:s}}});x.render=function(e,s,o,a,r,i){const n=d("a-alert"),t=d("BasicUpload"),p=d("BasicForm"),u=d("PageWrapper");return m(),l(u,{title:"上传组件示例"},{default:c((()=>[f(n,{message:"基础示例"}),f(t,{maxSize:20,maxNumber:10,onChange:e.handleChange,api:e.uploadApi,class:"my-5"},null,8,["onChange","api"]),f(n,{message:"嵌入表单,加入表单校验"}),f(p,{onRegister:e.register,class:"my-5"},null,8,["onRegister"])])),_:1})};export default x;