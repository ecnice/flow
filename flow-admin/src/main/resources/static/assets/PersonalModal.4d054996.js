var U=Object.defineProperty;var v=Object.getOwnPropertySymbols;var L=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var C=(e,o,t)=>o in e?U(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,E=(e,o)=>{for(var t in o||(o={}))L.call(o,t)&&C(e,t,o[t]);if(v)for(var t of v(o))$.call(o,t)&&C(e,t,o[t]);return e};var D=(e,o,t)=>new Promise((r,l)=>{var F=s=>{try{u(t.next(s))}catch(d){l(d)}},i=s=>{try{u(t.throw(s))}catch(d){l(d)}},u=s=>s.done?r(s.value):Promise.resolve(s.value).then(F,i);u((t=t.apply(e,o)).next())});import{B as q,a as G}from"./index.c505e96f.js";import{B as O}from"./BasicForm.0ba2e15f.js";import{u as V}from"./useForm.696aa965.js";import{z,ba as J,A as W,c7 as H,bF as Z,bL as K,r as x,u as h,j as Q,a0 as g,B as b,a1 as X,a6 as P,w as I,D as j,a4 as Y,L as ee,N as te,H as ae}from"./vendor.5879c5ca.js";/* empty css               */import{aD as oe,aU as ue,_ as se,h as re}from"./index.e84e956c.js";import{g as w}from"./dept.2ea41d4f.js";import{g as ne}from"./company.54be1035.js";import{c as le,e as ie}from"./personal.2ea6ac2c.js";/* empty css                *//* empty css                */import{a as de}from"./jobGrade.2483baa0.js";import{g as pe}from"./positionInfo.fb28731c.js";const Ne=[{title:"\u59D3\u540D",dataIndex:"name",width:120,align:"left",slots:{customRender:"nameRender"}},{title:"\u5DE5\u53F7",dataIndex:"code",width:100,align:"left"},{title:"\u72B6\u6001",dataIndex:"status",width:60,customRender:({record:e})=>{const t=~~e.status==1,r=t?"green":"red",l=t?"\u5728\u804C":"\u79BB\u804C";return z(J,{color:r},()=>l)}},{title:"\u90AE\u7BB1",dataIndex:"email",width:120,align:"left"},{title:"\u624B\u673A",dataIndex:"mobile",width:120,align:"left"},{title:"\u90E8\u95E8",dataIndex:"deptName",width:120,align:"left"},{title:"\u516C\u53F8",dataIndex:"companyName",width:120,align:"left"},{title:"\u4E0A\u7EA7\u9886\u5BFC",dataIndex:"leaderName",width:140,align:"left",customRender:({record:e})=>e.leaderCode?`${e.leaderName||""}[${e.leaderCode}]`:"\u672A\u8BBE\u7F6E"},{title:"\u89D2\u8272",dataIndex:"roles",width:300,align:"left",slots:{customRender:"rolesRender"}},{title:"\u79BB\u804C\u65E5\u671F",dataIndex:"leaveDate",width:100,customRender:({text:e})=>e?oe(e):""},{title:"\u521B\u5EFA\u65F6\u95F4",dataIndex:"createTime",width:130,customRender:({text:e})=>e?ue(e):""}],Me=[{field:"keyword",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u59D3\u540D/\u5DE5\u53F7/\u624B\u673A/\u90AE\u7BB1"},labelWidth:60,colProps:{span:8,lg:{span:8,offset:0},sm:{span:14,offset:0},xs:{span:16,offset:0}}}],ce=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"name",label:"\u59D3\u540D",component:"Input",required:!0,colProps:{span:9},rules:[{required:!0,whitespace:!0,message:"\u59D3\u540D\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:20,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E20\uFF01"}]},{field:"code",label:"\u5DE5\u53F7",component:"Input",required:!0,colProps:{span:9}},{field:"headImg",label:"",component:"Input",slot:"headImg",colProps:{style:"margin: auto;position: absolute;right: -100px;",span:8}},{field:"sex",label:"\u6027\u522B",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"\u7537",value:1},{label:"\u5973",value:2}]}},{field:"jobGradeCode",label:"\u804C\u7EA7",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"showName",replaceFields:{title:"showName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"positionCode",label:"\u5C97\u4F4D",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"showName",replaceFields:{title:"showName",key:"id",value:"id"},getPopupContainer:()=>document.body}},{field:"companyId",label:"\u6240\u5C5E\u516C\u53F8",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"cname",replaceFields:{title:"cname",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{field:"deptId",label:"\u6240\u5C5E\u90E8\u95E8",component:"TreeSelect",colProps:{span:9},componentProps:{treeNodeFilterProp:"name",replaceFields:{title:"name",key:"id",value:"id"},getPopupContainer:()=>document.body},required:!0},{label:"\u624B\u673A",field:"mobile",component:"Input",required:!0,colProps:{span:9},rules:[{required:!0,whitespace:!0,message:"\u624B\u673A\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\\d{8}$"),type:"string",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u624B\u673A\u53F7\uFF01"},{max:32,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"}]},{label:"\u90AE\u7BB1",field:"email",component:"Input",colProps:{span:9},rules:[{pattern:new RegExp("^\\w+([-+.]\\w+)*@\\w+([-.]\\w+)*\\.\\w+([-.]\\w+)*$"),type:"string",message:"\u8BF7\u8F93\u5165\u6B63\u786E\u7684\u90AE\u7BB1\u5730\u5740\uFF01"},{max:256,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E256\uFF01"}]},{field:"status",label:"\u5728\u804C\u72B6\u6001",component:"RadioButtonGroup",defaultValue:1,componentProps:{options:[{label:"\u5728\u804C",value:1},{label:"\u79BB\u804C",value:0}]}},{label:"\u5730\u5740",field:"address",component:"InputTextArea",rules:[{max:400,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E400\uFF01"}]}];const me=W({name:"PersonalModal",components:{BasicModal:q,BasicForm:O,PlusOutlined:H,LoadingOutlined:Z,Upload:K},emits:["success","register"],setup(e,{emit:o}){const t=x(!0),r=x(""),{createMessage:l}=re(),[F,{setFieldsValue:i,updateSchema:u,resetFields:s,validate:d}]=V({labelWidth:100,schemas:ce,showActionButtonGroup:!1,actionColOptions:{span:23}}),y=a=>[{trigger:"blur",validator:(m,n)=>n?le({id:a.id,field:a.field,fieldValue:n,fieldName:a.fieldName}).then(p=>p?Promise.resolve():Promise.reject(a.fieldName+"\u5DF2\u5B58\u5728\uFF0C\u8BF7\u4FEE\u6539\uFF01")).catch(p=>Promise.reject(p)):Promise.resolve()}],[_,{setModalProps:B,closeModal:R,changeLoading:A}]=G(a=>D(this,null,function*(){A(!0),s(),B({confirmLoading:!1}),t.value=!!(a==null?void 0:a.isUpdate);const m=yield ne(),n=yield de(),p=yield pe();let f=a.record;if(yield u([{field:"jobGradeCode",componentProps:{treeData:n}},{field:"positionCode",componentProps:{treeData:p}},{field:"companyId",componentProps:{treeData:m,onChange:c=>{u([{field:"deptId",componentProps:{treeData:[]}}]),i({deptId:""}),c&&w({companyId:c}).then(k=>{u([{field:"deptId",componentProps:{treeData:k}}])})}}},{field:"code",dynamicRules:()=>[{required:!0,whitespace:!0,message:"\u5DE5\u53F7\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{pattern:new RegExp("^[0-9a-zA-Z-_]{1,}$"),type:"string",message:"\u8BF7\u8F93\u5165\u82F1\u6587\u6216\u6570\u5B57\uFF01"},{max:32,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E32\uFF01"},...y({id:h(t)&&f&&f.id||"",field:"code",fieldValue:"",fieldName:"\u5DE5\u53F7"})]}]),h(t)){const c=yield w({companyId:a.record.companyId});u([{field:"deptId",componentProps:{treeData:c}}]),i(E({},a.record)),r.value=a.record.headImg}else{if(f.companyId){const c=yield w({companyId:f.companyId});u([{field:"deptId",componentProps:{treeData:c}}]),i(E({},f))}r.value=""}A(!1)})),T=Q(()=>h(t)?"\u7F16\u8F91":"\u65B0\u589E"),N=(a,m)=>{const n=new FileReader;n.addEventListener("load",()=>m(n.result)),n.readAsDataURL(a)},M=a=>a.type==="image/jpeg"||a.type==="image/png"?a.size/1024/1024<2?(N(a,p=>{r.value=p}),!1):(l.error("\u56FE\u7247\u4E0D\u80FD\u5927\u4E8E2MB\uFF01"),!1):(l.error("\u53EA\u5141\u8BB8\u4E0A\u4F20JPG\u56FE\u7247\uFF01"),!1);function S(){return D(this,null,function*(){try{B({confirmLoading:!0});const a=yield d();a.headImg=r.value,yield ie(a),R(),o("success")}finally{B({confirmLoading:!1})}})}return{registerModal:_,registerForm:F,getTitle:T,imageUrl:r,handleSubmit:S,beforeUpload:M}}}),fe=e=>(ee("data-v-2ac5de54"),e=e(),te(),e),Fe=["src"],ge={key:1},Be=fe(()=>ae("div",{class:"ant-upload-text"},"\u4E0A\u4F20\u5934\u50CF",-1));function Ee(e,o,t,r,l,F){const i=g("plus-outlined"),u=g("Upload"),s=g("BasicForm"),d=g("BasicModal");return b(),X(d,Y(e.$attrs,{onRegister:e.registerModal,title:e.getTitle,onOk:e.handleSubmit}),{default:P(()=>[I(s,{onRegister:e.registerForm,class:"personalForm"},{headImg:P(({model:y,field:_})=>[I(u,{style:{margin:"auto"},name:"avatar","list-type":"picture-card",class:"avatar-uploader","show-upload-list":!1,"before-upload":e.beforeUpload,multiple:!1},{default:P(()=>[e.imageUrl?(b(),j("img",{key:0,src:e.imageUrl,alt:"avatar"},null,8,Fe)):(b(),j("div",ge,[I(i),Be]))]),_:1},8,["before-upload"])]),_:1},8,["onRegister"])]),_:1},16,["onRegister","title","onOk"])}var De=se(me,[["render",Ee],["__scopeId","data-v-2ac5de54"]]),Se=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:De});export{De as P,Se as a,Ne as c,Me as s};
