import{B as k}from"./TableImg.513742d5.js";import"./BasicForm.0ba2e15f.js";import{getBasicColumns as m,getBasicShortColumns as h}from"./tableData.3f3da3f1.js";import{_ as w,h as D}from"./index.e84e956c.js";import{d as R}from"./table.b682515f.js";import{A as E,r as S,a0 as f,B as A,D as T,H as p,w as s,a6 as n,ae as u,u as x}from"./vendor.5879c5ca.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";import"./index.ea14bdae.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.ccc8749b.js";/* empty css                *//* empty css                *//* empty css               */import"./uuid.2b29000c.js";import"./index.c505e96f.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";const L=E({components:{BasicTable:k},setup(){const e=S(null),{createMessage:i}=D();function o(){const d=x(e);if(!d)throw new Error("tableAction is null");return d}function l(){o().setLoading(!0),setTimeout(()=>{o().setLoading(!1)},1e3)}function c(){o().setColumns(h())}function r(){o().setColumns(m()),o().reload({page:1})}function t(){i.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getColumns())}function a(){i.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getDataSource())}function C(){i.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getRawDataSource())}function g(){i.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getPaginationRef())}function _(){o().setPagination({current:2}),o().reload()}function F(){i.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getSelectRows())}function b(){i.info("\u8BF7\u5728\u63A7\u5236\u53F0\u67E5\u770B\uFF01"),console.log(o().getSelectRowKeys())}function B(){o().setSelectedRowKeys(["0","1","2"])}function j(){o().clearSelectedRowKeys()}return{tableRef:e,api:R,columns:m(),changeLoading:l,changeColumns:c,reloadTable:r,getColumn:t,getTableData:a,getTableRawData:C,getPagination:g,setPaginationInfo:_,getSelectRowList:F,getSelectRowKeyList:b,setSelectedRowKeyList:B,clearSelect:j}}}),y={class:"p-4"},K={class:"mb-4"},v=u(" \u8FD8\u539F "),P=u(" \u5F00\u542Floading "),V=u(" \u66F4\u6539Columns "),$=u(" \u83B7\u53D6Columns "),H=u(" \u83B7\u53D6\u8868\u683C\u6570\u636E "),I=u(" \u83B7\u53D6\u63A5\u53E3\u539F\u59CB\u6570\u636E "),M=u(" \u8DF3\u8F6C\u5230\u7B2C2\u9875 "),N={class:"mb-4"},z=u(" \u83B7\u53D6\u9009\u4E2D\u884C "),W=u(" \u83B7\u53D6\u9009\u4E2D\u884CKey "),q=u(" \u8BBE\u7F6E\u9009\u4E2D\u884C "),G=u(" \u6E05\u7A7A\u9009\u4E2D\u884C "),J=u(" \u83B7\u53D6\u5206\u9875\u4FE1\u606F ");function O(e,i,o,l,c,r){const t=f("a-button"),a=f("BasicTable");return A(),T("div",y,[p("div",K,[s(t,{class:"mr-2",onClick:e.reloadTable},{default:n(()=>[v]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.changeLoading},{default:n(()=>[P]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.changeColumns},{default:n(()=>[V]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.getColumn},{default:n(()=>[$]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.getTableData},{default:n(()=>[H]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.getTableRawData},{default:n(()=>[I]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.setPaginationInfo},{default:n(()=>[M]),_:1},8,["onClick"])]),p("div",N,[s(t,{class:"mr-2",onClick:e.getSelectRowList},{default:n(()=>[z]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.getSelectRowKeyList},{default:n(()=>[W]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.setSelectedRowKeyList},{default:n(()=>[q]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.clearSelect},{default:n(()=>[G]),_:1},8,["onClick"]),s(t,{class:"mr-2",onClick:e.getPagination},{default:n(()=>[J]),_:1},8,["onClick"])]),s(a,{canResize:!1,title:"RefTable\u793A\u4F8B",titleHelpMessage:"\u4F7F\u7528Ref\u8C03\u7528\u8868\u683C\u5185\u65B9\u6CD5",ref:"tableRef",api:e.api,columns:e.columns,rowKey:"id",rowSelection:{type:"checkbox"}},null,8,["api","columns"])])}var Ee=w(L,[["render",O]]);export{Ee as default};
