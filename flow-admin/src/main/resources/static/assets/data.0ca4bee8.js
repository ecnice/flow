import{w as o,ba as n}from"./vendor.5879c5ca.js";/* empty css               */import{b as d,b9 as r}from"./index.e84e956c.js";const{t}=d();function l(){return[{dataIndex:"type",title:t("sys.errorLog.tableColumnType"),width:80,customRender:({text:e})=>{const a=e===r.VUE?"green":e===r.RESOURCE?"cyan":e===r.PROMISE?"blue":r.AJAX?"red":"purple";return o(n,{color:a},{default:()=>e})}},{dataIndex:"url",title:"URL",width:200},{dataIndex:"time",title:t("sys.errorLog.tableColumnDate"),width:160},{dataIndex:"file",title:t("sys.errorLog.tableColumnFile"),width:200},{dataIndex:"name",title:"Name",width:200},{dataIndex:"message",title:t("sys.errorLog.tableColumnMsg"),width:300},{dataIndex:"stack",title:t("sys.errorLog.tableColumnStackMsg")}]}function u(){return l().map(e=>({field:e.dataIndex,label:e.title}))}export{l as getColumns,u as getDescSchema};
