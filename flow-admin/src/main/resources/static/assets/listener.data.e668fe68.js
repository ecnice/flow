import{ax as u}from"./index.aeb7d9f7.js";import{z as s,ba as n}from"./vendor.5879c5ca.js";/* empty css               */var t;(function(e){e.GetAll="/flow/flowable/flowListener/getList",e.PageList="/flow/flowable/flowListener/getPagerModel",e.SaveOrUpdate="/flow/flowable/flowListener/saveOrUpdate",e.SaveOrUpdateProperties="/flow/flowable/flowListenerParam/saveOrUpdate",e.Delete="/flow/flowable/flowListener/deleteById",e.DeleteListenerParam="/flow/flowable/flowListenerParam/deleteById",e.CheckEntityExist="/flow/flowable/flowListener/checkEntityExist",e.CheckParamEntityExist="/flow/flowable/flowListenerParam/checkEntityExist",e.GetListenerParamList="/flow/flowable/flowListenerParam/getList"})(t||(t={}));const d=e=>u.post({url:t.GetAll,params:e}).then(l=>Promise.resolve(l)),p=e=>u.get({url:t.GetListenerParamList+"/"+e.listenerId}),f=()=>{const e=[{value:"class",label:"java\u7C7B"},{value:"expression",label:"\u8868\u8FBE\u5F0F"},{value:"delegateExpression",label:"\u4EE3\u7406\u8868\u8FBE\u5F0F"}];return Promise.resolve(e)},m=()=>{const e=[{value:"taskListener",label:"\u4EFB\u52A1\u76D1\u542C"},{value:"executionListener",label:"\u6267\u884C\u76D1\u542C"}];return Promise.resolve(e)},c=e=>u.post({url:t.SaveOrUpdate,params:e}),E=e=>u.post({url:t.SaveOrUpdateProperties,params:e}),F=e=>u.post({url:t.CheckEntityExist,params:e}),w=e=>u.post({url:t.CheckParamEntityExist,params:e}),x=e=>u.post({url:t.Delete+"/"+e}),C=e=>u.post({url:t.DeleteListenerParam+"/"+e}),D=[{title:"\u76D1\u542C\u7C7B\u578B",dataIndex:"listenerType",width:180,align:"left",slots:{customRender:"listenerTypeRender"}},{title:"\u7C7B\u578B",dataIndex:"type",width:180,align:"left",slots:{customRender:"typeRender"}},{title:"\u540D\u79F0",dataIndex:"name",align:"left"},{title:"\u503C",dataIndex:"value",align:"left"},{title:"\u5907\u6CE8",dataIndex:"remark",align:"left"},{title:"\u64CD\u4F5C",dataIndex:"option",width:150,align:"left",slots:{customRender:"action"}}],g=[{title:"ID",dataIndex:"id",ifShow:!1},{title:"listenerId",dataIndex:"listenerId",ifShow:!1},{title:"\u64CD\u4F5C",dataIndex:"option",align:"center",width:100,slots:{customRender:"action"}},{title:"\u540D\u79F0",dataIndex:"name",align:"left",editComponent:"Input",editComponentProps:{size:"small"}},{title:"\u503C",dataIndex:"value",align:"left"},{title:"\u7C7B\u578B",dataIndex:"type",align:"left",customRender:({record:e})=>{let l="\u672A\u77E5",a="default";return e.type==="string"?(l="\u5B57\u7B26\u4E32",a="default"):e.type==="expression"&&(l="\u8868\u8FBE\u5F0F",a="processing"),s(n,{color:a},()=>l)}}],B=[{field:"listenerType",label:"\u76D1\u542C\u7C7B\u578B",component:"Select",labelWidth:80,colProps:{span:4,lg:{span:4,offset:0},sm:{span:6,offset:0},xs:{span:8,offset:0}}},{field:"name",label:"\u5173\u952E\u5B57",component:"Input",componentProps:{placeholder:"\u8BF7\u8F93\u5165\u540D\u79F0/\u6807\u8BC6"},labelWidth:60,colProps:{span:6,lg:{span:6,offset:0},sm:{span:10,offset:0},xs:{span:16,offset:0}}}],I=[{field:"id",label:"ID",component:"Input",show:!1},{field:"listenerType",label:"\u76D1\u542C\u7C7B\u578B",required:!0,component:"RadioGroup"},{field:"type",label:"\u7C7B\u578B",required:!0,component:"RadioGroup",defaultValue:"class"},{field:"name",label:"\u540D\u79F0",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:80,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E802\uFF01"}]},{field:"value",label:"\u503C",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u540D\u79F0\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:300,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E300\uFF01"}]},{label:"\u5907\u6CE8",field:"remark",component:"InputTextArea",rules:[{max:255,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E255\uFF01"}]}],b=[{field:"id",label:"ID",component:"Input",show:!1},{field:"listenerId",label:"listenerId",component:"Input",show:!1},{field:"type",label:"\u7C7B\u578B",required:!0,component:"RadioGroup",defaultValue:"string"},{field:"name",label:"\u540D\u79F0",helpMessage:"\u76D1\u542C\u5668\u7684\u5C5E\u6027\u540D",required:!0,component:"Input"},{field:"value",label:"\u503C",helpMessage:"\u76D1\u542C\u5668\u7684\u5C5E\u6027\u503C",required:!0,component:"Input",rules:[{required:!0,whitespace:!0,message:"\u503C\u4E0D\u80FD\u4E3A\u7A7A\uFF01"},{max:255,message:"\u5B57\u7B26\u957F\u5EA6\u4E0D\u80FD\u5927\u4E8E255\uFF01"}]}];export{p as a,f as b,D as c,m as d,x as e,C as f,d as g,I as h,F as i,c as j,b as k,w as l,E as m,g as p,B as s};
