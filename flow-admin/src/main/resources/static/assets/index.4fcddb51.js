var r;import e from"./DetailModal.16c039ce.js";import{_ as o}from"./TableImg.aff6a356.js";import{g as i}from"./BasicForm.8a33b99c.js";import{u as t}from"./useTable.b9ab9434.js";import{b as a}from"./index.0795d69f.js";import{aw as s,e as n,b4 as c}from"./index.4926e6da.js";import{getColumns as l}from"./data.f1b7be76.js";import{y as d,r as m,Q as f,Y as p,m as u,Z as b,B as j,F as x,a7 as g,ao as y,G as v,H as E,v as h,a2 as w,a9 as C,J as D}from"./vendor.880b4c6c.js";import"./index.6ad0cb4c.js";/* empty css              */import"./useDescription.1b80fcc8.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";(r||(r={})).Error="/error";var L=d({name:"ErrorHandler",components:{DetailModal:e,BasicTable:o,TableAction:i},setup(){const e=m(),o=m([]),{t:i}=n(),d=c(),[b,{setTableData:j}]=t({title:i("sys.errorLog.tableTitle"),columns:l(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[x,{openModal:g}]=a();return f((()=>d.getErrorLogInfoList),(r=>{p((()=>{j(u(r))}))}),{immediate:!0}),{register:b,registerModal:x,handleDetail:function(r){e.value=r,g(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){o.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return e=this,o=null,i=function*(){yield s.get({url:r.Error})},new Promise(((r,t)=>{var a=r=>{try{n(i.next(r))}catch(e){t(e)}},s=r=>{try{n(i.throw(r))}catch(e){t(e)}},n=e=>e.done?r(e.value):Promise.resolve(e.value).then(a,s);n((i=i.apply(e,o)).next())}));var e,o,i},imgList:o,rowInfo:e,t:i}}});const T={class:"p-4"};L.render=function(r,e,o,i,t,a){const s=b("DetailModal"),n=b("a-button"),c=b("TableAction"),l=b("BasicTable");return j(),x("div",T,[(j(!0),x(g,null,y(r.imgList,(r=>v((j(),x("img",{key:r,src:r},null,8,["src"])),[[E,!1]]))),128)),h(s,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),h(l,{onRegister:r.register,class:"error-handle-table"},{toolbar:w((()=>[h(n,{onClick:r.fireVueError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireResourceError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),h(n,{onClick:r.fireAjaxError,type:"primary"},{default:w((()=>[C(D(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:w((({record:e})=>[h(c,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default L;
