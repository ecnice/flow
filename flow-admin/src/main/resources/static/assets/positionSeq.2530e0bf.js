import{aw as e,b8 as t,aS as i}from"./index.4926e6da.js";var s,o;(o=s||(s={})).GetPositionSeqs="/flow/org/positionSeq/getPositionSeqs",o.SaveOrUpdate="/flow/org/positionSeq/saveOrUpdate",o.Delete="/flow/org/positionSeq/delete",o.CheckEntityExist="/flow/org/positionSeq/checkEntityExist";const r=o=>{const r=e.post({url:s.GetPositionSeqs,params:o});return Promise.resolve(r).then((e=>{const s=t(e,{id:"id",children:"children",pid:"pid"});return i(s,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),s}))},a=t=>e.post({url:s.SaveOrUpdate,params:t}),n=t=>e.post({url:s.CheckEntityExist,params:t}),d=t=>e.post({url:s.Delete,params:t});export{n as c,d,r as g,a as s};
