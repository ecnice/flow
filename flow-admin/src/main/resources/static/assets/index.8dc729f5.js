import{_ as e}from"./TableImg.aff6a356.js";import{g as o}from"./BasicForm.8a33b99c.js";import{u as i}from"./useTable.b9ab9434.js";import{a as t}from"./system.4f98581d.js";import{b as n}from"./index.0795d69f.js";import{_ as a,c as s,s as r}from"./DeptModal.253024b7.js";import{y as d,Z as c,B as l,F as m,v as p,a2 as f,a9 as b}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";import"./index.4926e6da.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";var u=d({name:"DeptManagement",components:{BasicTable:e,DeptModal:a,TableAction:o},setup(){const[e,{openModal:o}]=n(),[a,{reload:d}]=i({title:"部门列表",api:t,columns:s,formConfig:{labelWidth:120,schemas:r},pagination:!1,striped:!1,useSearchForm:!0,showTableSetting:!0,bordered:!0,showIndexColumn:!1,canResize:!1,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:void 0}});return{registerTable:a,registerModal:e,handleCreate:function(){o(!0,{isUpdate:!1})},handleEdit:function(e){o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){},handleSuccess:function(){d()}}}});const j=b(" 新增部门 ");u.render=function(e,o,i,t,n,a){const s=c("a-button"),r=c("TableAction"),d=c("BasicTable"),b=c("DeptModal");return l(),m("div",null,[p(d,{onRegister:e.registerTable},{toolbar:f((()=>[p(s,{type:"primary",onClick:e.handleCreate},{default:f((()=>[j])),_:1},8,["onClick"])])),action:f((({record:o})=>[p(r,{actions:[{icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),p(b,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default u;
