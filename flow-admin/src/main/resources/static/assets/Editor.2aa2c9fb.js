import{_ as e}from"./BasicForm.950a284a.js";import{ag as i,h as t}from"./index.1bc1d740.js";import{T as a}from"./index.e5fd93fa.js";import{P as s}from"./index.dfbcae78.js";import{z as o,ae as r,Z as n,D as d,F as m,a3 as p,w as c}from"./vendor.11d66826.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.c48a0e31.js";/* empty css              *//* empty css              *//* empty css              */import"./index.037585c2.js";import"./useWindowSizeFn.9fecf134.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.aa9819c7.js";import"./base64Conver.bb012c73.js";import"./index.a66557fe.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              *//* empty css              */import"./useContentViewHeight.a8198af7.js";const l=[{field:"title",component:"Input",label:"title",defaultValue:"defaultValue",rules:[{required:!0}]},{field:"tinymce",component:"Input",label:"tinymce",defaultValue:"defaultValue",rules:[{required:!0}],render:({model:e,field:i})=>r(a,{value:e[i],onChange:t=>{e[i]=t}})}];var f=o({components:{BasicForm:e,CollapseContainer:i,PageWrapper:s},setup(){const{createMessage:e}=t();return{schemas:l,handleSubmit:i=>{e.success("click search,values:"+JSON.stringify(i))}}}});f.render=function(e,i,t,a,s,o){const r=n("BasicForm"),l=n("CollapseContainer"),f=n("PageWrapper");return d(),m(f,{title:"富文本嵌入表单示例"},{default:p((()=>[c(l,{title:"富文本表单"},{default:p((()=>[c(r,{labelWidth:100,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit},null,8,["schemas","onSubmit"])])),_:1})])),_:1})};export default f;