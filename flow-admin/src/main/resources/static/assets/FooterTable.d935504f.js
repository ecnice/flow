import{_ as e}from"./TableImg.5453971a.js";import"./BasicForm.f252c294.js";import{u as o}from"./useTable.da9f7dda.js";import{getBasicColumns as r}from"./tableData.83d6955e.js";import{d as s}from"./table.6b4349a4.js";import{k as t,K as i,o as n,n as a,q as m}from"./vendor.9d9efc92.js";/* empty css              *//* empty css              */import"./useForm.7c89f4ac.js";import"./index.6992208b.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./useWindowSizeFn.0534066c.js";import"./useModal.11986c6c.js";import"./onMountedOrActivated.b73559bc.js";/* empty css              */import"./useSortable.e73ef165.js";import"./useExpose.0886c4eb.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.14e97884.js";/* empty css              *//* empty css              */import"./download.f95f58dd.js";import"./StrengthMeter.505415db.js";var d=t({components:{BasicTable:e},setup(){const[e]=o({title:"表尾行合计示例",api:s,rowSelection:{type:"checkbox"},columns:r(),showSummary:!0,summaryFunc:function(e){const o=e.reduce(((e,o)=>e+=o.no),0);return[{_row:"合计",_index:"平均值",no:o},{_row:"合计",_index:"平均值",no:o}]},scroll:{x:2e3},canResize:!1});return{registerTable:e}}});const p={class:"p-4"};d.render=function(e,o,r,s,t,d){const c=i("BasicTable");return n(),a("div",p,[m(c,{onRegister:e.registerTable},null,8,["onRegister"])])};export default d;