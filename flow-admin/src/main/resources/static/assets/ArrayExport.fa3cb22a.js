import{_ as e}from"./TableImg.e8129589.js";import"./BasicForm.5cce9782.js";import"./index.fd2bdb44.js";import{c as o,d as i,a,b as t,e as s}from"./data.d0bd468b.js";import{P as d}from"./index.5574fcdd.js";import{y as r,Z as n,B as m,F as c,a2 as p,v as j,a9 as f}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.5da8fb25.js";import"./index.8c1d7da4.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.acbe981f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.94c9a168.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.57b652cd.js";/* empty css              *//* empty css              *//* empty css              */import"./download.22b91874.js";import"./base64Conver.bb012c73.js";import"./index.30a3342d.js";/* empty css              *//* empty css              */import"./useContentViewHeight.3c3886fd.js";var b=r({components:{BasicTable:e,PageWrapper:d},setup:()=>({aoaToExcel:function(){a({data:t,header:s,filename:"二维数组方式导出excel.xlsx"})},columns:o,data:i})});const x=f(" 导出 ");b.render=function(e,o,i,a,t,s){const d=n("a-button"),r=n("BasicTable"),f=n("PageWrapper");return m(),c(f,{title:"导出示例",content:"根据数组格式的数据进行导出"},{default:p((()=>[j(r,{title:"基础表格",columns:e.columns,dataSource:e.data},{toolbar:p((()=>[j(d,{onClick:e.aoaToExcel},{default:p((()=>[x])),_:1},8,["onClick"])])),_:1},8,["columns","dataSource"])])),_:1})};export default b;
