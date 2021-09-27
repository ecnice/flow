import{_ as e}from"./TableImg.aff6a356.js";import{g as o}from"./BasicForm.8a33b99c.js";import{u as i}from"./useTable.b9ab9434.js";import{a as t,d as n}from"./positionInfo.a3986fb8.js";import{P as s}from"./index.0aed0d9d.js";import a from"./PositionSeqTree.b2926af9.js";import{b as r}from"./index.0795d69f.js";import{_ as d,c as l,s as c}from"./PositionInfoModal.8745f8f4.js";import{y as m,az as p,r as f,u,Z as b,B as j,F as x,a2 as h,v as g,a9 as S}from"./vendor.880b4c6c.js";import{h as C}from"./index.4926e6da.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";/* empty css              *//* empty css              */import"./useContentViewHeight.dbded6ea.js";import"./Tree.vue_vue&type=style&index=0&lang.0274489c.js";import"./useContextMenu.beb7df71.js";import"./positionSeq.2530e0bf.js";const{createMessage:P}=C();var w=m({name:"PositionInfo",components:{BasicTable:e,PageWrapper:s,PositionSeqTree:a,PositionInfoModal:d,TableAction:o,Popconfirm:p},setup(){const[e,{openModal:o,setModalProps:s}]=r(),a=f({}),[d,{reload:m,setProps:p}]=i({title:"列表",api:t,columns:l,formConfig:{labelWidth:120,schemas:c,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:100,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function b(e){a.value=e;let o={positionSeqId:e?e.id:""};p({searchInfo:o}),m({searchInfo:o})}return{registerTable:d,registerModal:e,handleCreate:function(){u(a).id?(s({title:"新增岗位"}),o(!0,{record:{positionSeqId:u(a).id,positionSeqCode:u(a).code},isUpdate:!0})):P.warning("请选择岗位序列！",2)},handleEdit:function(e){s({title:"修改岗位"}),o(!0,{record:e,isUpdate:!0})},handleDelete:function(e){n(e.id).then((()=>{m()}))},handleSuccess:function(){b(a.value)},handleSelect:b}}});const I=S("新增");w.render=function(e,o,i,t,n,s){const a=b("PositionSeqTree"),r=b("a-button"),d=b("TableAction"),l=b("BasicTable"),c=b("PositionInfoModal"),m=b("PageWrapper");return j(),x(m,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:h((()=>[g(a,{class:"w-1/4 xl:w-1/5",onSelect:e.handleSelect},null,8,["onSelect"]),g(l,{onRegister:e.registerTable,class:"w-3/4 xl:w-4/5"},{toolbar:h((()=>[g(r,{type:"primary",onClick:e.handleCreate},{default:h((()=>[I])),_:1},8,["onClick"])])),action:h((({record:o})=>[g(d,{actions:[{tooltip:"修改",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,o)},{tooltip:"删除",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),g(c,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])),_:1})};export default w;
