import{aw as e,b8 as a,aS as t}from"./index.8c1d7da4.js";var r,s;(s=r||(r={})).CompanyList="/flow/org/company/getCompanies",s.SaveOrUpdate="/flow/org/company/saveOrUpdate",s.Delete="/flow/org/company/delete",s.CheckEntityExist="/flow/org/company/checkEntityExist";const o=s=>{const o=e.post({url:r.CompanyList,params:s});return Promise.resolve(o).then((e=>{const r=a(e,{id:"id",children:"children",pid:"pid"});return t(r,(e=>{0===e.children.length&&delete e.children}),{id:"id",children:"children",pid:"pid"}),r}))},i=a=>e.post({url:r.SaveOrUpdate,params:a}),n=a=>e.post({url:r.Delete,params:a}),p=a=>e.post({url:r.CheckEntityExist,params:a});export{p as c,n as d,o as g,i as s};
