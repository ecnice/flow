import{_ as e}from"./TableImg.aff6a356.js";import{g as i}from"./BasicForm.8a33b99c.js";import{u as n}from"./useTable.b9ab9434.js";import{d as o}from"./system.4f98581d.js";import{u as t}from"./index.708cf583.js";import{_ as s,c as r,s as a}from"./MenuDrawer.3ac33cf8.js";import{y as c,Y as d,Z as m,B as l,F as p,v as f,a2 as u,a9 as b}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";import"./index.4926e6da.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.0795d69f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";/* empty css              */var j=c({name:"MenuManagement",components:{BasicTable:e,MenuDrawer:s,TableAction:i},setup(){const[e,{openDrawer:i}]=t(),[s,{reload:c,expandAll:m}]=n({title:"菜单列表",api:o,columns:r,formConfig:{labelWidth:120,schemas:a},isTreeTable:!0,pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:s,registerDrawer:e,handleCreate:function(){i(!0,{isUpdate:!1})},handleEdit:function(e){i(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){c()},onFetchSuccess:function(){d(m)}}}});const x=b(" 新增菜单 ");j.render=function(e,i,n,o,t,s){const r=m("a-button"),a=m("TableAction"),c=m("BasicTable"),d=m("MenuDrawer");return l(),p("div",null,[f(c,{onRegister:e.registerTable,onFetchSuccess:e.onFetchSuccess},{toolbar:u((()=>[f(r,{type:"primary",onClick:e.handleCreate},{default:u((()=>[x])),_:1},8,["onClick"])])),action:u((({record:i})=>[f(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,i)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,i)}}]},null,8,["actions"])])),_:1},8,["onRegister","onFetchSuccess"]),f(d,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default j;
