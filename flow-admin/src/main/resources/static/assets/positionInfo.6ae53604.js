import{bc as a,aV as l,ax as s}from"./index.aeb7d9f7.js";var o;(function(e){e.GetPositionInfos="/flow/org/positionInfo/getPositionInfoTree",e.GetPositionInfoTree="/flow/org/positionInfo/getPositionInfoTree",e.GetPagerModel="/flow/org/positionInfo/getPagerModel",e.SaveOrUpdate="/flow/org/positionInfo/saveOrUpdate",e.BatchSaveOrUpdatePositionSeqAndPosition="/flow/org/positionInfo/batchSaveOrUpdatePositionSeqAndPosition",e.Delete="/flow/org/positionInfo/delete",e.CheckEntityExist="/flow/org/positionInfo/checkEntityExist"})(o||(o={}));const c=e=>{const r=s.post({url:o.GetPositionInfoTree,params:e});return Promise.resolve(r).then(i=>{const n=a(i,{id:"id",children:"children",pid:"pid"});return l(n,t=>{t.showName=`${t.name} (${t.code})`,t.sourceType==="1"&&(t.selectable=!1,t.disabled=!0),t.children.length===0&&delete t.children},{id:"id",children:"children",pid:"pid"}),n})},f=e=>{const r=e&&{pageNum:e.pageNum,pageSize:e.pageSize};let i=e||{};i&&(delete i.pageNum,delete i.pageSize);const n={query:r,entity:i};return s.post({url:o.GetPagerModel,params:n})},p=e=>s.post({url:o.SaveOrUpdate,params:e}),g=e=>s.post({url:o.CheckEntityExist,params:e}),u=e=>s.post({url:o.Delete,params:e});export{f as a,g as c,u as d,c as g,p as s};
