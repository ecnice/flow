import{aw as e}from"./index.4926e6da.js";var r,s;(s=r||(r={})).PageList="/flow/privilege/group/getPagerModel",s.GetAllList="/flow/privilege/group/getAll",s.SaveOrUpdate="/flow/privilege/group/saveOrUpdate",s.AddUserGroups="/flow/privilege/group/addUserGroups",s.Delete="/flow/privilege/group/delete",s.CheckEntityExist="/flow/privilege/group/checkEntityExist";const t=s=>{const t=s&&{pageNum:s.pageNum,pageSize:s.pageSize};let a=s||{};a&&(delete a.pageNum,delete a.pageSize);const p={query:t,entity:a};return e.post({url:r.PageList,params:p})},a=s=>e.post({url:r.GetAllList,params:s}),p=s=>e.post({url:r.SaveOrUpdate,params:s}),l=s=>e.post({url:r.AddUserGroups+"/"+s.groupId,params:s.users}),o=s=>e.post({url:r.Delete,params:s}),i=s=>e.post({url:r.CheckEntityExist,params:s});export{t as a,l as b,i as c,o as d,a as g,p as s};
