import{_ as e,a as t}from"./useModal.919850c0.js";import{_ as o}from"./TableImg.f5e002b4.js";import{_ as s,f as a}from"./BasicForm.4f71108f.js";import{u as n}from"./useTable.38359fc9.js";import{g as r}from"./role.5bcd63aa.js";import{_ as i}from"./PageWrapper.37b62bcf.js";import l from"./CompanyTree.01117242.js";import{k as d,f as m,K as c,o as p,n as f,Q as u,q as b,N as j}from"./vendor.56d2c57f.js";import"./index.574e7466.js";import"./useWindowSizeFn.d0559e60.js";/* empty css              *//* empty css              */import"./useForm.4c43bf99.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.c53863e7.js";import"./onMountedOrActivated.1a8745f8.js";/* empty css              */import"./useSortable.97253202.js";import"./useExpose.46777d04.js";/* empty css              *//* empty css              *//* empty css              */import"./CountdownInput.8f20570f.js";/* empty css              *//* empty css              */import"./download.89f0e3be.js";import"./StrengthMeter.9b8cee4d.js";import"./usePageContext.568cee97.js";/* empty css              *//* empty css              */import"./Tree.vue_vue&type=style&index=0&lang.75a2cc0f.js";import"./useContextMenu.7d6e6003.js";import"./company.1b8528f5.js";const x=[{title:"名称",dataIndex:"name",width:150,align:"left"},{title:"标识",dataIndex:"sn",width:120,align:"left"},{title:"公司",dataIndex:"companyName",width:120,align:"left"}],h=[{field:"keyword",label:"关键字",component:"Input",labelWidth:60,colProps:{span:12,lg:{span:12,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}];var g=d({name:"RoleSelector",components:{BasicModal:e,BasicForm:s,BasicTable:o,PageWrapper:i,CompanyTree:l,TableAction:a},setup(e,{emit:o}){let s="";const[a,{setModalProps:i,closeModal:l}]=t((e=>{return t=this,o=null,a=function*(){i({wrapClassName:"selector-content"}),s=e.personalId,c({searchInfo:{personalId:s}})},new Promise(((e,s)=>{var n=e=>{try{i(a.next(e))}catch(t){s(t)}},r=e=>{try{i(a.throw(e))}catch(t){s(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(n,r);i((a=a.apply(t,o)).next())}));var t,o,a})),[d,{reload:c,getSelectRows:p}]=n({title:"",api:r,immediate:!1,columns:x,rowSelection:{type:"checkbox",columnWidth:30},formConfig:{labelWidth:60,schemas:h,showResetButton:!1,showAdvancedButton:!1,autoSubmitOnEnter:!0},size:"small",canResize:!1,useSearchForm:!0,showTableSetting:!1,showIndexColumn:!1,bordered:!0,scroll:{y:300}});return{registerTable:d,registerModal:a,getTitle:m((()=>"选择角色")),handleSubmit:function(){const e=p();o("success",e),l()},handleSuccess:function(){c()},handleSelect:function(e){let t={companyId:e?e.id:"",personalId:s};c({searchInfo:t})}}}});g.render=function(e,t,o,s,a,n){const r=c("CompanyTree"),i=c("BasicTable"),l=c("PageWrapper"),d=c("BasicModal");return p(),f(d,j({wrapClassName:"selector-body"},e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:u((()=>[b(l,{dense:"",contentClass:"flex"},{default:u((()=>[b(r,{class:"w-1/4 xl:w-3/10",onSelect:e.handleSelect},null,8,["onSelect"]),b(i,{onRegister:e.registerTable,class:"w-3/4 xl:w-7/10"},null,8,["onRegister"])])),_:1})])),_:1},16,["onRegister","title","onOk"])};export default g;