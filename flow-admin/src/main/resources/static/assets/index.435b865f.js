import{B as f}from"./TableImg.513742d5.js";import{T as j}from"./BasicForm.0ba2e15f.js";import{u as h}from"./useTable.6e5baa13.js";import{g,d as x}from"./company.54be1035.js";import{C as B,c as F,s as _}from"./CompanyModal.893b8c86.js";import{_ as E,h as T}from"./index.e84e956c.js";import{b as w}from"./index.c505e96f.js";import{A as y,a0 as r,B as M,D as S,w as u,a6 as m,ae as k}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";import"./index.ea14bdae.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.ccc8749b.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";const{createMessage:D}=T(),A=y({name:"Company",components:{BasicTable:f,TableAction:j,CompanyModal:B},setup(){const[o,{openModal:n,setModalProps:i}]=w(),[b,{reload:a}]=h({title:"\u5217\u8868",api:g,columns:F,formConfig:{labelWidth:120,schemas:_,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandRowByClick:!0,canColDrag:!0,pagination:!1,useSearchForm:!0,bordered:!0,showIndexColumn:!1,actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"},fixed:!1}});function C(){i({title:"\u65B0\u589E\u516C\u53F8"}),n(!0,{isUpdate:!1})}function l(e,s){s.stopPropagation(),i({title:"\u4FEE\u6539\u516C\u53F8"}),n(!0,{record:e,isUpdate:!0})}function d(e,s){s.stopPropagation(),i({title:"\u65B0\u589E\u3010"+e.cname+"\u3011\u7684\u5B50\u516C\u53F8"}),e={pid:e.id,status:1},n(!0,{record:e,isUpdate:!0})}function p(e){if(e.children&&e.children.length>0){D.warning("\u6709\u5B50\u8282\u70B9\uFF0C\u4E0D\u80FD\u5220\u9664\uFF01");return}x([e.id]).then(s=>{a()})}function c(){a()}function t(){a()}return{registerTable:b,registerModal:o,handleCreate:C,handleEdit:l,handleCreateChild:d,handleDelete:p,handleSuccess:t,doSearch:c}}}),R=k(" \u65B0\u589E ");function v(o,n,i,b,a,C){const l=r("a-button"),d=r("TableAction"),p=r("BasicTable"),c=r("CompanyModal");return M(),S("div",null,[u(p,{onRegister:o.registerTable},{toolbar:m(()=>[u(l,{type:"primary",onClick:o.handleCreate},{default:m(()=>[R]),_:1},8,["onClick"])]),action:m(({record:t})=>[u(d,{actions:[{tooltip:"\u6DFB\u52A0\u5B50\u516C\u53F8",icon:"ant-design:plus-outlined",onClick:o.handleCreateChild.bind(null,t)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:o.handleEdit.bind(null,t)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",onClick:e=>{e.stopPropagation()},popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,t)}}]},null,8,["actions"])]),_:1},8,["onRegister"]),u(c,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])])}var be=E(A,[["render",v]]);export{be as default};
