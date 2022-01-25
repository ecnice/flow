import{aw as e}from"./index.a33a5e4d.js";const t=[{title:"名称",dataIndex:"cname",align:"left"},{title:"编码",dataIndex:"code",width:120,align:"left"}],a=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/标识"},labelWidth:60,colProps:{span:16}}],i=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"dicTypeId",label:"dicTypeId",required:!1,component:"Input",show:!1},{field:"cname",label:"名称",component:"Input",required:!0,rules:[{whitespace:!0,required:!0,message:"名称不能为空！"},{pattern:new RegExp("^.{1,60}$"),type:"string",message:"字符长度不能大于60！"}]},{field:"code",label:"编码",component:"Input"},{label:"备注",field:"remark",component:"InputTextArea"}],l=[{title:"名称",dataIndex:"cname",align:"left"},{title:"编码",dataIndex:"code",width:120,align:"left"},{title:"排序编号",dataIndex:"orderNo",width:80,align:"left"}],n=[{field:"keyword",label:"关键字",component:"Input",componentProps:{placeholder:"请输入名称/标识"},labelWidth:60,colProps:{span:16}}],o=[{field:"id",label:"ID",required:!1,component:"Input",show:!1},{field:"mainId",label:"mainId",required:!1,component:"Input",show:!1},{field:"cname",label:"名称",component:"Input",required:!0,rules:[{required:!0,whitespace:!0,message:"名称不能为空！"},{max:60,message:"字符长度不能大于60！"}]},{field:"code",label:"编码",component:"Input"},{field:"orderNo",label:"排序号",required:!1,component:"InputNumber"}];var s,r;(r=s||(s={})).DictionaryPageList="/flow/base/dictionary/getPagerModel",r.DictionaryItemPageList="/flow/base/dicItem/getPagerModel",r.SaveOrUpdate="/flow/base/dictionary/saveOrUpdate",r.SaveOrUpdateItem="/flow/base/dicItem/saveOrUpdate",r.Delete="/flow/base/dictionary/delete",r.DeleteItem="/flow/base/dicItem/delete",r.CheckEntityExist="/flow/base/dictionary/checkEntityExist",r.CheckDictItemEntityExist="/flow/base/dicItem/checkEntityExist";const d=t=>{const a=t&&{pageNum:t.pageNum,pageSize:t.pageSize};let i=t||{};i&&(delete i.pageNum,delete i.pageSize);const l={query:a,entity:i};return e.post({url:s.DictionaryPageList,params:l})},p=t=>{const a=t&&{pageNum:t.pageNum,pageSize:t.pageSize};let i=t||{};i&&(delete i.pageNum,delete i.pageSize);const l={query:a,entity:i};return e.post({url:s.DictionaryItemPageList,params:l})},c=t=>e.post({url:s.SaveOrUpdate,params:t}),m=t=>e.post({url:s.SaveOrUpdateItem,params:t}),u=t=>e.post({url:s.Delete+"/",params:t}),I=t=>e.post({url:s.DeleteItem+"/",params:t}),g=t=>e.post({url:s.CheckEntityExist,params:t}),f=t=>e.post({url:s.CheckDictItemEntityExist,params:t});export{p as a,n as b,f as c,o as d,I as e,i as f,g,c as h,l as i,d as j,t as k,a as l,u as m,m as s};
