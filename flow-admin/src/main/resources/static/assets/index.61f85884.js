import{_ as e}from"./TableImg.2c9119a6.js";import{g as o}from"./BasicForm.19c32012.js";import{u as t}from"./useTable.d6fddac6.js";import{g as n,d as i}from"./dept.56a002d4.js";import{P as a}from"./index.16a907f1.js";import r from"./CompanyTree.ab46039a.js";import{h as s}from"./index.e99064e4.js";import{b as d}from"./index.bf73380f.js";import{_ as l,c,s as p}from"./DeptModal.7218c808.js";import{y as m,r as u,u as f,Z as j,B as b,F as h,a2 as x,v as g,a9 as C}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.e45ae65c.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.56c740a0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.45c1baba.js";/* empty css              *//* empty css              *//* empty css              */import"./download.1143de04.js";import"./base64Conver.bb012c73.js";import"./index.d495e6fa.js";/* empty css              *//* empty css              */import"./useContentViewHeight.c21e2e51.js";import"./Tree.vue_vue&type=style&index=0&lang.8179a1d2.js";import"./useContextMenu.91732dca.js";import"./company.6e77c07e.js";import"./index.69458015.js";import"./personal.a4d3dd78.js";import"./OrgTree.504478e3.js";const{createMessage:w}=s();var y=m({name:"DeptManagement",components:{BasicTable:e,PageWrapper:a,CompanyTree:r,DeptModal:l,TableAction:o},setup(){const[e,{openModal:o,setModalProps:a}]=d(),r=u({}),[s,{reload:l}]=t({title:"列表",api:n,columns:c,formConfig:{labelWidth:120,schemas:p,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,useSearchForm:!0,showIndexColumn:!1,bordered:!0,pagination:!1,actionColumn:{width:150,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{registerTable:s,registerModal:e,handleCreate:function(){var e;a({title:"新增部门"}),o(!0,{record:{companyId:null==(e=f(r))?void 0:e.id},isUpdate:!1})},handleEdit:function(e,t){t.stopPropagation(),a({title:"修改部门"}),o(!0,{record:e,isUpdate:!0})},handleCreateChild:function(e,t){t.stopPropagation(),a({title:"新增【"+e.name+"】的子部门"}),e={pid:e.id},o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){e.children&&e.children.length>0?w.warning("有子节点，不能删除！"):i([e.id]).then((e=>{l()}))},handleSuccess:function(){l()},handleSelect:function(e){r.value=e,l({searchInfo:{companyId:e?e.id:""}})},doSearch:function(){l()}}}});const S=C("新增");y.render=function(e,o,t,n,i,a){const r=j("CompanyTree"),s=j("a-button"),d=j("TableAction"),l=j("BasicTable"),c=j("DeptModal"),p=j("PageWrapper");return b(),h(p,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:x((()=>[g(r,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),g(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:x((()=>[g(s,{type:"primary",onClick:e.handleCreate},{default:x((()=>[S])),_:1},8,["onClick"])])),action:x((({record:o})=>[g(d,{actions:[{tooltip:"添加子部门",icon:"ant-design:plus-outlined",onClick:e.handleCreateChild.bind(null,o)},{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default y;