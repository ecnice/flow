import r from"./DetailModal.1fa83868.js";import{_ as e}from"./TableImg.d975601e.js";import{_ as o}from"./useForm.d555d56b.js";import{u as t}from"./useTable.b099d30d.js";import{u as i}from"./index.b437b00c.js";import{e as a,al as s}from"./index.b41e2c0e.js";import{getColumns as n}from"./data.0140212a.js";import{y as l,r as d,Q as c,Y as m,m as u,Z as p,B as f,F as j,a6 as b,an as g,G as x,H as y,v,a1 as E,a8 as h,J as w}from"./vendor.3dc066e5.js";import"./index.8a68fbe0.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./useWindowSizeFn.308e6090.js";import"./onMountedOrActivated.c01d8630.js";/* empty css              */import"./useSortable.be81b66a.js";/* empty css              *//* empty css              *//* empty css              */import"./index.82d0d758.js";import"./download.55ddd36a.js";import"./index.c14dc721.js";var L=l({name:"ErrorHandler",components:{DetailModal:r,BasicTable:e,TableAction:o},setup(){const r=d(),e=d([]),{t:o}=a(),l=s(),[p,{setTableData:f}]=t({title:o("sys.errorLog.tableTitle"),columns:n(),actionColumn:{width:80,title:"Action",dataIndex:"action",slots:{customRender:"action"}}}),[j,{openModal:b}]=i();return c((()=>l.getErrorLogInfoList),(r=>{m((()=>{f(u(r))}))}),{immediate:!0}),{register:p,registerModal:j,handleDetail:function(e){r.value=e,b(!0)},fireVueError:function(){throw new Error("fire vue error!")},fireResourceError:function(){e.value.push(`${(new Date).getTime()}.png`)},fireAjaxError:function(){return r=this,e=null,o=function*(){},new Promise(((t,i)=>{var a=r=>{try{n(o.next(r))}catch(e){i(e)}},s=r=>{try{n(o.throw(r))}catch(e){i(e)}},n=r=>r.done?t(r.value):Promise.resolve(r.value).then(a,s);n((o=o.apply(r,e)).next())}));var r,e,o},imgList:e,rowInfo:r,t:o}}});const T={class:"p-4"};L.render=function(r,e,o,t,i,a){const s=p("DetailModal"),n=p("a-button"),l=p("TableAction"),d=p("BasicTable");return f(),j("div",T,[(f(!0),j(b,null,g(r.imgList,(r=>x((f(),j("img",{key:r,src:r},null,8,["src"])),[[y,!1]]))),128)),v(s,{info:r.rowInfo,onRegister:r.registerModal},null,8,["info","onRegister"]),v(d,{onRegister:r.register,class:"error-handle-table"},{toolbar:E((()=>[v(n,{onClick:r.fireVueError,type:"primary"},{default:E((()=>[h(w(r.t("sys.errorLog.fireVueError")),1)])),_:1},8,["onClick"]),v(n,{onClick:r.fireResourceError,type:"primary"},{default:E((()=>[h(w(r.t("sys.errorLog.fireResourceError")),1)])),_:1},8,["onClick"]),v(n,{onClick:r.fireAjaxError,type:"primary"},{default:E((()=>[h(w(r.t("sys.errorLog.fireAjaxError")),1)])),_:1},8,["onClick"])])),action:E((({record:e})=>[v(l,{actions:[{label:r.t("sys.errorLog.tableActionDesc"),onClick:r.handleDetail.bind(null,e)}]},null,8,["actions"])])),_:1},8,["onRegister"])])};export default L;
