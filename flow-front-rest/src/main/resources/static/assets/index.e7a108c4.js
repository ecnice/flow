import{_ as e}from"./TableImg.4999f0f8.js";import"./useForm.6952a806.js";import{u as s}from"./useTable.56e0200e.js";import{P as a}from"./index.55f1fb99.js";import{y as n,aX as t,b6 as o,am as r,bn as i,c3 as d,bk as m,b5 as c,ak as p,Z as u,B as f,F as l,a1 as j,v as b,a8 as x,J as g,a6 as h,an as v,az as I,a7 as P}from"./vendor.3dc066e5.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import{launchedTableSchema as T,searchFormSchema as w}from"./data.da0edbf9.js";import y from"./ProcessHeader.5bab29be.js";import B from"./LaunchButton.544e0d2e.js";import{i as S,h as k}from"./process.99e51905.js";/* empty css              */import"./index.f77a0916.js";/* empty css              *//* empty css              */import"./useWindowSizeFn.308e6090.js";import"./index.f892cb46.js";import"./onMountedOrActivated.c01d8630.js";import"./useSortable.121e2df4.js";/* empty css              *//* empty css              */import"./index.d12a2c0f.js";import"./download.36d5ff94.js";import"./index.932a5062.js";/* empty css              *//* empty css              */import"./useContentViewHeight.0ff5ff24.js";var A=n({components:{BasicTable:e,ProcessHeader:y,LaunchButton:B,PageWrapper:a,[t.name]:t,[o.name]:o,AEmpty:r,[i.name]:i,[i.Item.name]:i.Item,[d.name]:d,[d.Step.name]:d.Step,[m.name]:m,[m.TabPane.name]:m.TabPane,Tag:c,Popover:p},setup(){const[e,{getForm:a}]=s({api:S,title:"",columns:T,formConfig:{labelWidth:120,schemas:w,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},useSearchForm:!0,pagination:!0,showIndexColumn:!0,canResize:!1});return k().then((e=>{const{updateSchema:s}=a();s({field:"appSn",componentProps:{options:e}})})),{registerLaunchedTable:e}}});const R={class:"m-1 desc-wrap process"};A.render=function(e,s,a,n,t,o){const r=u("launch-button"),i=u("process-header"),d=u("router-link"),m=u("Tag"),c=u("Popover"),p=u("BasicTable"),T=u("PageWrapper");return f(),l(T,{title:"流程中心",contentBackground:"",class:"!mt-4"},{extra:j((()=>[b(r)])),footer:j((()=>[b(i,{current:"launched"})])),default:j((()=>[b("div",R,[b(p,{onRegister:e.registerLaunchedTable},{nameRender:j((({record:e})=>[b(d,{to:`/process/view/${e.processDefinitionKey}?taskId=${e.taskId||""}&procInstId=${e.processInstanceId}&businessKey=${e.businessKey}`},{default:j((()=>[x(g(e.formName),1)])),_:2},1032,["to"])])),currentAssigneesRender:j((({record:e})=>[e.currentAssignees&&e.currentAssignees.length>0?(f(!0),l(h,{key:0},v(e.currentAssignees,(e=>(f(),l(c,{title:"user"===e.type?"人员信息":"角色信息"},I({default:j((()=>[b(m,{color:"warning"},{default:j((()=>[x(g(e.name),1)])),_:2},1024)])),_:2},["user"===e.type?{name:"content",fn:j((()=>[b("div",null,"姓名："+g(e.name),1),b("div",null,"工号："+g(e.code),1),b("div",null,"手机："+g(e.mobile),1)]))}:{name:"content",fn:j((()=>[b("div",null,"名称："+g(e.name),1),b("div",null,"标识："+g(e.code),1)]))}]),1032,["title"])))),256)):P("",!0)])),_:1},8,["onRegister"])])])),_:1})};export default A;
