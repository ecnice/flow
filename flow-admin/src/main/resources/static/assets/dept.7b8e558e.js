import{aw as e,b8 as r,aS as t}from"./index.63ccfb82.js";var d,i;(i=d||(d={})).DeptList="/flow/org/department/getAll",i.GetOrgTree="/flow/org/department/getOrgTree",i.SaveOrUpdate="/flow/org/department/saveOrUpdate",i.Delete="/flow/org/department/delete",i.CheckEntityExist="/flow/org/department/checkEntityExist";const n=i=>{const n=e.post({url:d.DeptList,params:i});return Promise.resolve(n).then((e=>{const d=r(e,{id:"id",children:"children",pid:"pid"});return t(d,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),d}))},l=()=>{const i=e.get({url:d.GetOrgTree});return Promise.resolve(i).then((e=>{const d=r(e,{id:"id",children:"children",pid:"pid"});return t(d,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),d}))},s=r=>e.post({url:d.SaveOrUpdate,params:r}),a=r=>e.post({url:d.Delete,params:r}),p=r=>e.post({url:d.CheckEntityExist,params:r});export{l as a,p as c,a as d,n as g,s};
