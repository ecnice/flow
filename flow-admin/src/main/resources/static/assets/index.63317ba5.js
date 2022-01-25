import{B as x}from"./TableImg.73863b69.js";import{T}from"./BasicForm.6afa01de.js";import{u as _}from"./useTable.7c1e4a10.js";import{g as C}from"./system.0e218a0c.js";import{P as S}from"./index.77f474a0.js";import F from"./DeptTree.fcbeee00.js";import{b as w}from"./index.30115123.js";import{A as B,c as A,s as D}from"./AccountModal.07a1008e.js";import{_ as M,r as y}from"./index.9eb02b52.js";import{A as I,P as E,a0 as t,B as k,a1 as v,a6 as i,w as s,ae as R}from"./vendor.7bee64cc.js";/* empty css                *//* empty css              */import"./useForm.1fd322f5.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css               */import"./useSortable.dd731734.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                */import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";/* empty css                *//* empty css                */import"./useContentViewHeight.52836077.js";import"./Tree.vue_vue&type=style&index=0&lang.43e63f89.js";import"./useContextMenu.e899090d.js";const P=I({name:"AccountManagement",components:{BasicTable:x,PageWrapper:S,DeptTree:F,AccountModal:B,TableAction:T},setup(){const o=y(),[b,{openModal:a}]=w(),r=E({}),[j,{reload:c,updateTableDataRecord:l}]=_({title:"\u8D26\u53F7\u5217\u8868",api:C,rowKey:"id",columns:A,formConfig:{labelWidth:120,schemas:D,autoSubmitOnEnter:!0},useSearchForm:!0,showTableSetting:!0,bordered:!0,handleSearchInfoFn(e){return console.log("handleSearchInfoFn",e),e},actionColumn:{width:120,title:"\u64CD\u4F5C",dataIndex:"action",slots:{customRender:"action"}}});function u(){a(!0,{isUpdate:!1})}function d(e){console.log(e),a(!0,{record:e,isUpdate:!0})}function p(e){console.log(e)}function m({isUpdate:e,values:h}){if(e){const g=l(h.id,h);console.log(g)}else c()}function f(e=""){r.deptId=e,c()}function n(e){o("/system/account_detail/"+e.id)}return{registerTable:j,registerModal:b,handleCreate:u,handleEdit:d,handleDelete:p,handleSuccess:m,handleSelect:f,handleView:n,searchInfo:r}}}),V=R("\u65B0\u589E\u8D26\u53F7");function W(o,b,a,r,j,c){const l=t("DeptTree"),u=t("a-button"),d=t("TableAction"),p=t("BasicTable"),m=t("AccountModal"),f=t("PageWrapper");return k(),v(f,{dense:"",contentFullHeight:"",fixedHeight:"",contentClass:"flex"},{default:i(()=>[s(l,{class:"w-1/4 xl:w-1/5",onSelect:o.handleSelect},null,8,["onSelect"]),s(p,{onRegister:o.registerTable,class:"w-3/4 xl:w-4/5",searchInfo:o.searchInfo},{toolbar:i(()=>[s(u,{type:"primary",onClick:o.handleCreate},{default:i(()=>[V]),_:1},8,["onClick"])]),action:i(({record:n})=>[s(d,{actions:[{icon:"clarity:info-standard-line",tooltip:"\u67E5\u770B\u7528\u6237\u8BE6\u60C5",onClick:o.handleView.bind(null,n)},{icon:"clarity:note-edit-line",tooltip:"\u7F16\u8F91\u7528\u6237\u8D44\u6599",onClick:o.handleEdit.bind(null,n)},{icon:"ant-design:delete-outlined",color:"error",tooltip:"\u5220\u9664\u6B64\u8D26\u53F7",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:o.handleDelete.bind(null,n)}}]},null,8,["actions"])]),_:1},8,["onRegister","searchInfo"]),s(m,{onRegister:o.registerModal,onSuccess:o.handleSuccess},null,8,["onRegister","onSuccess"])]),_:1})}var _e=M(P,[["render",W]]);export{_e as default};
