import{_ as e}from"./TableImg.01909c7a.js";import"./BasicForm.eea5fa1e.js";import{u as s}from"./useTable.01292fb5.js";import{getCustomHeaderColumns as i}from"./tableData.83d6955e.js";import{d as o}from"./table.f92cea09.js";import{an as r}from"./index.521cc965.js";import{j as t,bN as a,K as d,o as m,m as n,n as p,Q as c,Y as j}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import"./useForm.7a8e214e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.d82e06bf.js";import"./index.389b283b.js";import"./onMountedOrActivated.172ad1ec.js";/* empty css              */import"./useSortable.2c598b04.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.65686dd7.js";/* empty css              *//* empty css              *//* empty css              */import"./download.10dab641.js";import"./base64Conver.bb012c73.js";import"./index.98e5d523.js";var b=t({components:{BasicTable:e,FormOutlined:a,BasicHelp:r},setup(){const[e]=s({title:"定高/头部自定义",api:o,columns:i(),canResize:!1,scroll:{y:100}});return{registerTable:e}}});const l={class:"p-4"},f=j(" 姓名 "),u=j(" 地址 ");b.render=function(e,s,i,o,r,t){const a=d("BasicHelp"),j=d("FormOutlined"),b=d("BasicTable");return m(),n("div",l,[p(b,{onRegister:e.registerTable},{customTitle:c((()=>[p("span",null,[f,p(a,{class:"ml-2",text:"姓名"})])])),customAddress:c((()=>[u,p(j,{class:"ml-2"})])),_:1},8,["onRegister"])])};export default b;