import{_ as e}from"./BasicForm.f3cb7023.js";import{u as o}from"./useForm.c6cb6ef5.js";import t from"./PersonTable.61c6b3f1.js";import{P as r}from"./index.cf1d4223.js";import{y as s,b6 as i,r as n,z as a,A as l,Z as p,B as c,F as d,v as m,K as f,a9 as b}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.a33a5e4d.js";import"./index.08ac3aaf.js";/* empty css              *//* empty css              *//* empty css              */import"./index.98d9f37c.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.2ac02f88.js";import"./base64Conver.bb012c73.js";import"./index.ce488518.js";import"./TableImg.2184ae21.js";import"./onMountedOrActivated.8f899bfb.js";import"./useSortable.1c9ace8f.js";/* empty css              */import"./useTable.e98ad9ef.js";/* empty css              *//* empty css              */import"./useContentViewHeight.d4b428eb.js";const u=[{label:"付晓晓",value:"1"},{label:"周毛毛",value:"2"}],j=[{label:"私密",value:"1"},{label:"公开",value:"2"}],P=[{field:"f1",component:"Input",label:"仓库名",required:!0},{field:"f2",component:"Input",label:"仓库域名",required:!0,componentProps:{addonBefore:"http://",addonAfter:"com"},colProps:{offset:2}},{field:"f3",component:"Select",label:"仓库管理员",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"f4",component:"Select",label:"审批人",componentProps:{options:u},required:!0},{field:"f5",component:"RangePicker",label:"生效日期",required:!0,colProps:{offset:2}},{field:"f6",component:"Select",label:"仓库类型",componentProps:{options:j},required:!0,colProps:{offset:2}}],x=[{field:"t1",component:"Input",label:"任务名",required:!0},{field:"t2",component:"Input",label:"任务描述",required:!0,colProps:{offset:2}},{field:"t3",component:"Select",label:"执行人",componentProps:{options:u},required:!0,colProps:{offset:2}},{field:"t4",component:"Select",label:"责任人",componentProps:{options:u},required:!0},{field:"t5",component:"TimePicker",label:"生效日期",required:!0,componentProps:{style:{width:"100%"}},colProps:{offset:2}},{field:"t6",component:"Select",label:"任务类型",componentProps:{options:j},required:!0,colProps:{offset:2}}];var v=s({name:"FormHightPage",components:{BasicForm:e,PersonTable:t,PageWrapper:r,[i.name]:i},setup(){const e=n(null),[t,{validate:r}]=o({baseColProps:{span:6},schemas:P,showActionButtonGroup:!1}),[s,{validate:i}]=o({baseColProps:{span:6},schemas:x,showActionButtonGroup:!1});return{register:t,registerTask:s,submitAll:function(){return o=this,t=null,s=function*(){try{e.value;const[o,t]=yield Promise.all([r(),i()])}catch(o){}},new Promise(((e,r)=>{var i=e=>{try{a(s.next(e))}catch(o){r(o)}},n=e=>{try{a(s.throw(e))}catch(o){r(o)}},a=o=>o.done?e(o.value):Promise.resolve(o.value).then(i,n);a((s=s.apply(o,t)).next())}));var o,t,s},tableRef:e}}});const g=f("data-v-63cb25a8");a("data-v-63cb25a8");const h=b(" 提交 ");l();const q=g(((e,o,t,r,s,i)=>{const n=p("BasicForm"),a=p("a-card"),l=p("PersonTable"),f=p("a-button"),b=p("PageWrapper");return c(),d(b,{class:"high-form",title:"高级表单",content:" 高级表单常见于一次性输入和提交大批量数据的场景。"},{rightFooter:g((()=>[m(f,{type:"primary",onClick:e.submitAll},{default:g((()=>[h])),_:1},8,["onClick"])])),default:g((()=>[m(a,{title:"仓库管理",bordered:!1},{default:g((()=>[m(n,{onRegister:e.register},null,8,["onRegister"])])),_:1}),m(a,{title:"任务管理",bordered:!1,class:"!mt-5"},{default:g((()=>[m(n,{onRegister:e.registerTask},null,8,["onRegister"])])),_:1}),m(a,{title:"成员管理",bordered:!1},{default:g((()=>[m(l,{ref:"tableRef"},null,512)])),_:1})])),_:1})}));v.render=q,v.__scopeId="data-v-63cb25a8";export default v;
