import{aw as e}from"./index.4926e6da.js";var s,t;(t=s||(s={})).AccountPageList="/flow/privilege/user/getPagerModel",t.GetAllList="/flow/privilege/user/getAll",t.SaveOrUpdate="/flow/privilege/user/saveOrUpdate",t.AllocationRoles="/flow/privilege/user/allocationRoles",t.Delete="/flow/privilege/user/delete",t.SetPassword="/flow/privilege/user/setPassword",t.CheckEntityExist="/flow/privilege/user/checkEntityExist";const a=t=>{const a=t&&{pageNum:t.pageNum,pageSize:t.pageSize};let r=t||{};r&&(delete r.pageNum,delete r.pageSize);const l={query:a,entity:r};return e.post({url:s.AccountPageList,params:l})},r=t=>e.post({url:s.CheckEntityExist,params:t}),l=t=>e.post({url:s.GetAllList,params:t}),o=t=>e.post({url:s.SaveOrUpdate,params:t}),i=t=>{const a=t.userId;return delete t.userId,e.post({url:s.AllocationRoles+"/"+a,params:t.groups})},p=t=>e.post({url:s.SetPassword,params:t}),u=t=>e.post({url:s.Delete,params:t});export{p as a,i as b,r as c,u as d,l as e,a as g,o as s};
