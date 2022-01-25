var R=Object.defineProperty;var D=Object.getOwnPropertySymbols;var q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var S=(e,o,a)=>o in e?R(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,w=(e,o)=>{for(var a in o||(o={}))q.call(o,a)&&S(e,a,o[a]);if(D)for(var a of D(o))$.call(o,a)&&S(e,a,o[a]);return e};var m=(e,o,a)=>new Promise((f,d)=>{var F=u=>{try{r(a.next(u))}catch(l){d(l)}},s=u=>{try{r(a.throw(u))}catch(l){d(l)}},r=u=>u.done?f(u.value):Promise.resolve(u.value).then(F,s);r((a=a.apply(e,o)).next())});import{B as V,b as O,a as U}from"./index.309f7e13.js";import{B as W}from"./BasicForm.bfb70ce4.js";import{u as z}from"./useForm.9d0149a6.js";import{c as G,s as J}from"./dept.1a4c42ff.js";import{g as H}from"./company.711332d1.js";import{A as K,aT as Q,ba as X,r as _,u as y,j as Y,a0 as p,B as I,a1 as N,a6 as E,w as b,ae as P,J as M,ad as Z,a4 as ee}from"./vendor.5879c5ca.js";/* empty css               */import ae from"./index.8e79988e.js";import{F as te}from"./constantEnum.82824ec7.js";import{_ as oe}from"./index.aeb7d9f7.js";const Ce=[{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u7F16\u7801",dataIndex:"code",width:120,align:"left"},{title:"\u90E8\u95E8\u9886\u5BFC",dataIndex:"leaderName",width:120,align:"left",customRender:({record:e})=>e.leaderCode?`${e.leaderName||""}[${e.leaderCode}]`:"\u672A\u8BBE\u7F6E"},{title:"\u6240\u5C5E\u516C\u53F8",dataIndex:"companyName",width:120,align:"left"},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:180}],ye=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:6,lg:{span:8,offset:0},sm:{span:14,offset:0},xs:{span:16,offset:0}}}],ue=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"pid",label:"pid",required:!1,component:"Input",show:!1},{field:"name",label:"\u540D\u79F0",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:100,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E100\uFF01"}]},{field:"code",label:"\u7F16\u7801",component:"Input",required:!0},{field:"leaderCode",label:"\u90E8\u95E8\u9886\u5BFC",component:"Input",slot:"settingLeader",required:!1},{field:"leaderName",label:"\u90E8\u95E8\u9886\u5BFC",component:"Input",show:!1},{field:"companyId",label:"\u6240\u5C5E\u516C\u53F8",component:"TreeSelect",componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"orderNo",label:"\u6392\u5E8F\u53F7",required:!1,component:"InputNumber"},{label:"\u5907\u6CE8",field:"note",component:"InputTextArea",rules:[{max:256,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E256\uFF01"}]}],ne=K({name:"DeptModal",components:{BasicModal:V,BasicForm:W,PersonalSelector:ae,Button:Q,Tag:X},emits:["success","register"],setup(e,{emit:o}){const a=_(!0),[f,{openModal:d,setModalProps:F}]=O(),s=_([]),[r,{setFieldsValue:u,updateSchema:l,resetFields:B,validate:c}]=z({labelWidth:100,schemas:ue,showActionButtonGroup:!1,actionColOptions:{span:23}}),g=t=>[{trigger:"blur",validator:(i,n)=>n?G({id:t.id,field:t.field,fieldValue:n,fieldName:t.fieldName}).then(C=>C?Promise.resolve():Promise.reject(t.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(C=>Promise.reject(C)):Promise.resolve()}],[v,{setModalProps:h,closeModal:x}]=U(t=>m(this,null,function*(){yield B(),h({confirmLoading:!1}),a.value=!!(t==null?void 0:t.isUpdate);const i=yield H();let n=t.record;n.id&&n.leaderCode?s.value=[{code:n.leaderCode,name:n.leaderName}]:s.value=[],yield l([{field:"companyId",componentProps:{treeData:i}},{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u7F16\u7801\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp(te.SN),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:64,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E64\uFF01"},...g({id:y(a)&&n&&n.id||"",field:"code",fieldValue:"",fieldName:"\u7F16\u7801"})]}]),y(a)?u(w({},t.record)):n.companyId&&u({companyId:n.companyId})})),j=Y(()=>y(a)?"\u4FEE\u6539\u90E8\u95E8":"\u65B0\u589E\u90E8\u95E8");function A(){d(!0,{selectorProps:{multiSelect:!1,selectedList:s.value}}),F({title:"\u8BBE\u7F6E\u90E8\u95E8\u9886\u5BFC",bodyStyle:{padding:"0px",margin:"0px"},width:850,height:450,showOkBtn:!0,showCancelBtn:!1})}function L(t){return m(this,null,function*(){s.value=t.map(i=>({id:i.id,code:i.code,name:i.name})),t&&t.length>0?u({leaderCode:t[0].code,leaderName:t[0].name}):u({leaderCode:"",leaderName:""})})}function k(){return m(this,null,function*(){u({leaderCode:"",leaderName:""}),s.value=[]})}function T(){return m(this,null,function*(){try{h({confirmLoading:!0});const t=yield c();yield J(t),x(),o("success")}finally{h({confirmLoading:!1})}})}return{registerModal:v,registerForm:r,getTitle:j,registerPersonalModal:f,selectedPersonList:s,handleDeleteLeader:k,handleSettingLeader:A,handleSubmit:T,handleSettingLeaderSuccess:L}}}),se=P("\u8BBE\u7F6E\u9886\u5BFC");function re(e,o,a,f,d,F){const s=p("Tag"),r=p("Button"),u=p("BasicForm"),l=p("PersonalSelector"),B=p("BasicModal");return I(),N(B,ee(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:E(()=>[b(u,{onRegister:e.registerForm},{settingLeader:E(({model:c,field:g})=>[c[g]?(I(),N(s,{key:0,closable:"",onClose:e.handleDeleteLeader},{default:E(()=>[P(M(c.leaderName)+"["+M(c[g])+"] ",1)]),_:2},1032,["onClose"])):Z("",!0),b(r,{style:{width:"110px"},type:"link",onClick:e.handleSettingLeader},{default:E(()=>[se]),_:1},8,["onClick"])]),_:1},8,["onRegister"]),b(l,{onRegister:e.registerPersonalModal,onSuccess:e.handleSettingLeaderSuccess},null,8,["onRegister","onSuccess"])]),_:1},16,["onRegister","title","onOk"])}var le=oe(ne,[["render",re]]),be=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:le});export{le as D,be as a,Ce as c,ye as s};
