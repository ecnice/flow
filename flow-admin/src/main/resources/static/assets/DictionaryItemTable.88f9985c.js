import{_ as e}from"./TableImg.aff6a356.js";import{g as t}from"./BasicForm.8a33b99c.js";import{u as i}from"./useTable.b9ab9434.js";import{a as o,i as a,b as n,e as r}from"./dictionary.09a7a7f4.js";import{P as s}from"./index.0aed0d9d.js";import{h as d}from"./index.4926e6da.js";import{b as c}from"./index.0795d69f.js";import l from"./DictionaryItemModal.281b71a3.js";import{y as m,r as p,Z as f,B as u,F as b,v as j,a2 as x,a8 as h,a9 as g}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";/* empty css              *//* empty css              */import"./useContentViewHeight.dbded6ea.js";const{createMessage:v}=d();var y=m({name:"DictionaryItemTable",components:{BasicTable:e,DictionaryItemModal:l,PageWrapper:s,TableAction:t},setup(){const[e,{openModal:t,setModalProps:s}]=c(),d=p(""),[l,{reload:m,setProps:f,setTableData:u}]=i({title:"字典项列表",api:o,columns:a,formConfig:{labelWidth:120,schemas:n,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},immediate:!1,useSearchForm:!0,showIndexColumn:!1,showTableSetting:!1,bordered:!0,actionColumn:{width:80,title:"操作",dataIndex:"action",slots:{customRender:"action"}}});return{dictId:d,registerTable:l,registerModal:e,cleanTableData:function(){u([]),d.value=""},handleCreate:function(){""!==d.value?(s({title:"新增字典项"}),t(!0,{record:{mainId:d.value},isUpdate:!1})):v.warning("请选择数据字典！",2)},handleEdit:function(e){s({title:"修改字典项"}),t(!0,{record:e,isUpdate:!0})},filterByDict:function(e){d.value=e,f({searchInfo:{mainId:d.value}}),m({page:1})},handleDelete:function(e){r(e.id).then((()=>{m()}))},handleSuccess:function(){m()}}}});const I={class:"bg-white m-4 mr-0 overflow-hidden dictionary"},T=g("新增");y.render=function(e,t,i,o,a,n){const r=f("a-button"),s=f("TableAction"),d=f("BasicTable"),c=f("DictionaryItemModal");return u(),b("div",I,[j(d,{onRegister:e.registerTable},{toolbar:x((()=>[""!==e.dictId?(u(),b(r,{key:0,type:"primary",onClick:e.handleCreate},{default:x((()=>[T])),_:1},8,["onClick"])):h("",!0)])),action:x((({record:t})=>[j(s,{actions:[{tooltip:"修改字典项",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,t)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,t)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),j(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default y;
