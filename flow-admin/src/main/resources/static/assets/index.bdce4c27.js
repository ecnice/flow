import{_ as e}from"./TableImg.aff6a356.js";import{g as o}from"./BasicForm.8a33b99c.js";import{u as i}from"./useTable.b9ab9434.js";import{c as t}from"./system.4f98581d.js";import{u as r}from"./index.708cf583.js";import{_ as n,c as s,s as a}from"./RoleDrawer.70858aba.js";import{y as d,Z as c,B as l,F as m,v as p,a2 as f,a9 as u}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";import"./index.4926e6da.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.0795d69f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";/* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.0274489c.js";import"./useContextMenu.beb7df71.js";var b=d({name:"RoleManagement",components:{BasicTable:e,RoleDrawer:n,TableAction:o},setup(){const[e,{openDrawer:o}]=r(),[n,{reload:d}]=i({title:"角色列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:a},useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:n,registerDrawer:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=u(" 新增角色 ");b.render=function(e,o,i,t,r,n){const s=c("a-button"),a=c("TableAction"),d=c("BasicTable"),u=c("RoleDrawer");return l(),m("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:f((()=>[j])),_:1},8,["onClick"])])),action:f((({record:o})=>[p(a,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(u,{onRegister:e.registerDrawer,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default b;
