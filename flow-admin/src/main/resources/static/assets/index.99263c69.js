import{_ as e}from"./TableImg.c9ed598a.js";import{g as o}from"./BasicForm.ae4250e1.js";import{u as t}from"./useTable.26f8956b.js";import{b as n}from"./index.5b995397.js";import{_ as i,g as a,c as r,s,d}from"./LoginLogModal.b895c4cb.js";import{h as c}from"./index.514e05b1.js";import{P as l}from"./perEnum.9a5ef72f.js";import{A as m}from"./index.89e0d22c.js";import{z as u,Z as p,D as f,F as b,w as h,a3 as j,a9 as g}from"./vendor.11d66826.js";/* empty css              *//* empty css              */import"./useForm.213a5276.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.9fecf134.js";import"./onMountedOrActivated.17f3c81d.js";/* empty css              */import"./useSortable.6a86578b.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.6b57f630.js";/* empty css              *//* empty css              *//* empty css              */import"./download.0adfd0af.js";import"./base64Conver.bb012c73.js";import"./index.ceaa815e.js";var x=u({name:"LoginLog",components:{BasicTable:e,TableAction:o,LoginLogModal:i,Authority:m},setup(){const{createMessage:e,createConfirm:o}=c(),[i,{openModal:m}]=n(),[u,{reload:p,getSelectRows:f}]=t({title:"列表",api:a,columns:r,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox",columnWidth:30},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:60,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:l,registerTable:u,registerModal:i,handleCreate:function(){m(!0,{isUpdate:!1})},handleEdit:function(e){m(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d([e.id]).then((()=>{p()}))},handleDeleteAll:function(){const t=f();t&&t.length<=0?e.warn("请选择行！"):o({iconType:"warning",title:"提示",content:"确定要删除所选行吗？",onOk:()=>{return e=this,o=null,n=function*(){const e=t.map((e=>e.id));yield d(e).then((()=>{p()}))},new Promise(((t,i)=>{var a=e=>{try{s(n.next(e))}catch(o){i(o)}},r=e=>{try{s(n.throw(e))}catch(o){i(o)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,r);s((n=n.apply(e,o)).next())}));var e,o,n}})},handleSuccess:function(){p()}}}});const v=g(" 删除 ");x.render=function(e,o,t,n,i,a){const r=p("a-button"),s=p("Authority"),d=p("TableAction"),c=p("BasicTable"),l=p("LoginLogModal");return f(),b("div",null,[h(c,{onRegister:e.registerTable},{toolbar:j((()=>[h(s,{value:this.$options.name+":"+e.PerEnum.DELETE},{default:j((()=>[h(r,{type:"danger",onClick:e.handleDeleteAll},{default:j((()=>[v])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:j((({record:o})=>[h(d,{actions:[{tooltip:"删除",auth:this.$options.name+":"+e.PerEnum.DELETE,icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;