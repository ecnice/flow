import{y as e,aL as t,r as a,X as n,Y as r,u as i,Z as s,au as l,G as o,B as c,F as d,v as u}from"./vendor.880b4c6c.js";import{_ as m}from"./Tree.vue_vue&type=style&index=0&lang.0274489c.js";import{b9 as p}from"./index.4926e6da.js";import{g as v}from"./positionSeq.2530e0bf.js";import"./useContextMenu.beb7df71.js";/* empty css              */var f=e({name:"PositionSeqTree",components:{BasicTree:m,Spin:t},emits:["select"],setup(e,{emit:t}){const s=a([]),l=a(!1),o=a(null);function c(){return e=this,t=null,a=function*(){l.value=!0,v().then((e=>{s.value=e,r((()=>{var e;i(s).length<10&&(null==(e=i(o))||e.filterByLevel(1))}))})).finally((()=>{l.value=!1}))},new Promise(((n,r)=>{var i=e=>{try{l(a.next(e))}catch(t){r(t)}},s=e=>{try{l(a.throw(e))}catch(t){r(t)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(i,s);l((a=a.apply(e,t)).next())}));var e,t,a}return n((()=>{c()})),{treeData:s,treeLoading:l,basicTreeRef:o,handleSelect:function(e,a){const n=p(s.value,(t=>t.id===e[0]),{id:"id",pid:"pid",children:"children"});t("select",n)}}}});const h={class:"bg-white m-4 mr-0 overflow-hidden"};f.render=function(e,t,a,n,r,i){const m=s("BasicTree"),p=l("loading");return o((c(),d("div",h,[u(m,{title:"岗位序列",toolbar:"",search:"",clickRowToExpand:!1,treeData:e.treeData,replaceFields:{key:"id",title:"name"},onSelect:e.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])],512)),[[p,e.treeLoading]])};export default f;
