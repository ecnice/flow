import{_ as e}from"./TableImg.e8129589.js";import{g as o}from"./BasicForm.5cce9782.js";import{u as t}from"./useTable.abd431f8.js";import{b as n}from"./index.acbe981f.js";import{_ as i,g as a,c as r,s,d}from"./LoginLogModal.3cc54522.js";import{h as c}from"./index.8c1d7da4.js";import{P as l}from"./perEnum.9a5ef72f.js";import{A as m}from"./index.44e7af2a.js";import{y as u,Z as p,B as f,F as b,v as h,a2 as j,a9 as g}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.5da8fb25.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.94c9a168.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.57b652cd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.22b91874.js";import"./base64Conver.bb012c73.js";import"./index.30a3342d.js";var x=u({name:"LoginLog",components:{BasicTable:e,TableAction:o,LoginLogModal:i,Authority:m},setup(){const{createMessage:e,createConfirm:o}=c(),[i,{openModal:m}]=n(),[u,{reload:p,getSelectRows:f}]=t({title:"列表",api:a,columns:r,formConfig:{labelWidth:120,schemas:s,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},rowSelection:{type:"checkbox",columnWidth:30},canColDrag:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:60,title:"操作",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});return{PerEnum:l,registerTable:u,registerModal:i,handleCreate:function(){m(!0,{isUpdate:!1})},handleEdit:function(e){m(!0,{record:e,isUpdate:!0})},handleDelete:function(e){d([e.id]).then((()=>{p()}))},handleDeleteAll:function(){const t=f();t&&t.length<=0?e.warn("请选择行！"):o({iconType:"warning",title:"提示",content:"确定要删除所选行吗？",onOk:()=>{return e=this,o=null,n=function*(){const e=t.map((e=>e.id));yield d(e).then((()=>{p()}))},new Promise(((t,i)=>{var a=e=>{try{s(n.next(e))}catch(o){i(o)}},r=e=>{try{s(n.throw(e))}catch(o){i(o)}},s=e=>e.done?t(e.value):Promise.resolve(e.value).then(a,r);s((n=n.apply(e,o)).next())}));var e,o,n}})},handleSuccess:function(){p()}}}});const v=g(" 删除 ");x.render=function(e,o,t,n,i,a){const r=p("a-button"),s=p("Authority"),d=p("TableAction"),c=p("BasicTable"),l=p("LoginLogModal");return f(),b("div",null,[h(c,{onRegister:e.registerTable},{toolbar:j((()=>[h(s,{value:this.$options.name+":"+e.PerEnum.DELETE},{default:j((()=>[h(r,{type:"danger",onClick:e.handleDeleteAll},{default:j((()=>[v])),_:1},8,["onClick"])])),_:1},8,["value"])])),action:j((({record:o})=>[h(d,{actions:[{tooltip:"删除",auth:this.$options.name+":"+e.PerEnum.DELETE,icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"是否确认删除",confirm:e.handleDelete.bind(null,o)}}]},null,8,["actions"])])),_:1},8,["onRegister"]),h(l,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"])])};export default x;
