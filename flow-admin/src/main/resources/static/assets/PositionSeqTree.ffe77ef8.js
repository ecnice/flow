var f=(o,c,t)=>new Promise((s,a)=>{var l=e=>{try{n(t.next(e))}catch(r){a(r)}},i=e=>{try{n(t.throw(e))}catch(r){a(r)}},n=e=>e.done?s(e.value):Promise.resolve(e.value).then(l,i);n((t=t.apply(o,c)).next())});import{A as _,aP as m,r as d,_ as v,a0 as h,bo as T,F as b,B as g,D as S,w as D,$ as B,u}from"./vendor.5879c5ca.js";import{_ as j}from"./Tree.vue_vue_type_style_index_0_lang.128b82eb.js";import{_ as x,bd as y}from"./index.e84e956c.js";import{g as $}from"./positionSeq.70e3b26f.js";import"./useContextMenu.44cd9a61.js";/* empty css               */const k=_({name:"PositionSeqTree",components:{BasicTree:j,Spin:m},emits:["select"],setup(o,{emit:c}){const t=d([]),s=d(!1),a=d(null);function l(){return f(this,null,function*(){s.value=!0,$().then(n=>{t.value=n,B(()=>{var e;u(t).length<10&&((e=u(a))==null||e.filterByLevel(1))})}).finally(()=>{s.value=!1})})}function i(n,e){const r=y(t.value,p=>p.id===n[0],{id:"id",pid:"pid",children:"children"});c("select",r)}return v(()=>{l()}),{treeData:t,treeLoading:s,basicTreeRef:a,handleSelect:i}}}),w={class:"bg-white m-4 mr-0 overflow-hidden"};function q(o,c,t,s,a,l){const i=h("BasicTree"),n=T("loading");return b((g(),S("div",w,[D(i,{title:"\u5C97\u4F4D\u5E8F\u5217",toolbar:"",search:"",clickRowToExpand:!1,treeData:o.treeData,replaceFields:{key:"id",title:"name"},onSelect:o.handleSelect,ref:"basicTreeRef"},null,8,["treeData","onSelect"])],512)),[[n,o.treeLoading]])}var N=x(k,[["render",q]]);export{N as default};
