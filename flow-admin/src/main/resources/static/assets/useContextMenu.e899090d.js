var $=Object.defineProperty,O=Object.defineProperties;var A=Object.getOwnPropertyDescriptors;var C=Object.getOwnPropertySymbols;var D=Object.prototype.hasOwnProperty,N=Object.prototype.propertyIsEnumerable;var _=(e,t,s)=>t in e?$(e,t,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[t]=s,w=(e,t)=>{for(var s in t||(t={}))D.call(t,s)&&_(e,s,t[s]);if(C)for(var s of C(t))N.call(t,s)&&_(e,s,t[s]);return e},g=(e,t)=>O(e,A(t));import{I as S,aY as P}from"./index.9eb02b52.js";import{A as H,r as j,j as R,_ as V,$ as W,aj as I,u as p,w as c,ab as Y,aA as v,b0 as B,by as F,aQ as Q,ai as T}from"./vendor.7bee64cc.js";/* empty css               */function U(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!F(e)}const b="context-menu",X={width:{type:Number,default:156},customEvent:{type:Object,default:null},styles:{type:Object},showIcon:{type:Boolean,default:!0},axis:{type:Object,default(){return{x:0,y:0}}},items:{type:Array,default(){return[]}}},M=e=>{const{item:t}=e;return c("span",{style:"display: inline-block; width: 100%; ",class:"px-4",onClick:e.handler.bind(null,t)},[e.showIcon&&t.icon&&c(S,{class:"mr-2",icon:t.icon},null),c("span",null,[t.label])])};var q=H({name:"ContextMenu",props:X,setup(e){const t=j(null),s=j(!1),i=R(()=>{const{axis:o,items:n,styles:r,width:l}=e,{x:u,y:m}=o||{x:0,y:0},y=(n||[]).length*40,h=l,x=document.body,E=x.clientWidth<u+h?u-h:u,L=x.clientHeight<m+y?m-y:m;return g(w({},r),{width:`${l}px`,left:`${E+1}px`,top:`${L+1}px`})});V(()=>{W(()=>s.value=!0)}),I(()=>{const o=p(t);o&&document.body.removeChild(o)});function f(o,n){const{handler:r,disabled:l}=o;l||(s.value=!1,n==null||n.stopPropagation(),n==null||n.preventDefault(),r==null||r())}function a(o){return o.map(n=>{const{disabled:r,label:l,children:u,divider:m=!1}=n,y={item:n,handler:f,showIcon:e.showIcon};return!u||u.length===0?c(Y,null,[c(v.Item,{disabled:r,class:`${b}__item`,key:l},{default:()=>[c(M,y,null)]}),m?c(B,{key:`d-${l}`},null):null]):p(s)?c(v.SubMenu,{key:l,disabled:r,popupClassName:`${b}__popup`},{title:()=>c(M,y,null),default:()=>a(u)}):null})}return()=>{let o;if(!p(s))return null;const{items:n}=e;return c(v,{inlineIndent:12,mode:"vertical",class:b,ref:t,style:p(i)},U(o=a(n))?o:{default:()=>[o]})}}});const d={domList:[],resolve:()=>{}},z=function(e){const{event:t}=e||{};if(t&&(t==null||t.preventDefault()),!!P)return new Promise(s=>{const i=document.body,f=document.createElement("div"),a={};e.styles&&(a.styles=e.styles),e.items&&(a.items=e.items),e.event&&(a.customEvent=t,a.axis={x:t.clientX,y:t.clientY});const o=c(q,a);Q(o,f);const n=function(){d.resolve("")};d.domList.push(f);const r=function(){d.domList.forEach(l=>{try{l&&i.removeChild(l)}catch(u){}}),i.removeEventListener("click",n),i.removeEventListener("scroll",n)};d.resolve=function(l){r(),s(l)},r(),i.appendChild(f),i.addEventListener("click",n),i.addEventListener("scroll",n)})},k=function(){d&&(d.resolve(""),d.domList=[])};function ee(e=!0){return T()&&e&&I(()=>{k()}),[z,k]}export{ee as u};
