import{B as e}from"./index.0795d69f.js";import{D as t}from"./index.6ad0cb4c.js";import{e as s}from"./index.4926e6da.js";import{getDescSchema as r}from"./data.f1b7be76.js";import{u as o}from"./useDescription.1b80fcc8.js";import{y as i,Z as a,B as n,F as c,a2 as d,v as m,a0 as p}from"./vendor.880b4c6c.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */var f=i({name:"ErrorLogDetailModal",components:{BasicModal:e,Description:t},props:{info:{type:Object,default:null}},setup(){const{t:e}=s(),[t]=o({column:2,schema:r()});return{register:t,useI18n:s,t:e}}});f.render=function(e,t,s,r,o,i){const f=a("Description"),l=a("BasicModal");return n(),c(l,p({width:800,title:e.t("sys.errorLog.tableActionDesc")},e.$attrs),{default:d((()=>[m(f,{data:e.info,onRegister:e.register},null,8,["data","onRegister"])])),_:1},16,["title"])};export default f;
