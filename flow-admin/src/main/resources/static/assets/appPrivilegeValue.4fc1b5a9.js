import{aw as e}from"./index.4926e6da.js";var a,l;(l=a||(a={})).getAppPrivilegeValues="/flow/privilege/pvalue/getAppPrivilegeValues",l.SaveOrUpdate="/flow/privilege/pvalue/saveOrUpdate",l.Delete="/flow/privilege/pvalue/delete",l.CheckEntityExist="/flow/privilege/pvalue/checkEntityExist";const p=()=>e.post({url:a.getAppPrivilegeValues}),t=l=>e.post({url:a.SaveOrUpdate,params:l}),i=l=>e.post({url:a.Delete,params:l});export{i as d,p as g,t as s};
