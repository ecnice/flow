import{_ as e}from"./TableImg.c292f6c6.js";import{g as o}from"./BasicForm.8dd34761.js";import{u as i}from"./useTable.28113166.js";import{P as t}from"./index.19a7a7bf.js";import{getBasicColumns as n}from"./tableData.3f3da3f1.js";import{d as a}from"./table.69ec72a6.js";import{y as r,Z as s,B as d,F as p,a2 as c,v as l,J as m}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.ba0f60da.js";import"./index.63ccfb82.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.0433a71f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.7fdc4a8b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";/* empty css              *//* empty css              */import"./useContentViewHeight.0b72030b.js";var f=r({components:{BasicTable:e,TableAction:o,PageWrapper:t},setup(){const[e]=i({api:a,title:"可展开表格演示",titleHelpMessage:["已启用expandRowByClick","已启用stopButtonPropagation"],columns:n(),rowKey:"id",canResize:!1,expandRowByClick:!0,actionColumn:{width:160,title:"Action",slots:{customRender:"action"}}});return{registerTable:e,handleDelete:function(e){},handleOpen:function(e){}}}});f.render=function(e,o,i,t,n,a){const r=s("TableAction"),f=s("BasicTable"),b=s("PageWrapper");return d(),p(b,{title:"可展开表格",content:"不可与scroll共用。TableAction组件可配置stopButtonPropagation来阻止操作按钮的点击事件冒泡，以便配合Table组件的expandRowByClick"},{default:c((()=>[l(f,{onRegister:e.registerTable},{expandedRowRender:c((({record:e})=>[l("span",null,"No: "+m(e.no),1)])),action:c((({record:o})=>[l(r,{stopButtonPropagation:"",actions:[{label:"删除",icon:"ic:outline-delete-outline",onClick:e.handleDelete.bind(null,o)}],dropDownActions:[{label:"启用",popConfirm:{title:"是否启用？",confirm:e.handleOpen.bind(null,o)}}]},null,8,["actions","dropDownActions"])])),_:1},8,["onRegister"])])),_:1})};export default f;
