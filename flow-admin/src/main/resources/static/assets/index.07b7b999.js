var t=Object.defineProperty,e=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,n=(e,a,r)=>a in e?t(e,a,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[a]=r;import{k as o,w as s}from"./index.63ccfb82.js";import{y as i,r as l,b7 as u,j as d,u as p,ai as f,Q as c,X as y,b8 as b,B as m,F as v,J as g}from"./vendor.880b4c6c.js";var S=i({name:"CountTo",props:{startVal:{type:Number,default:0},endVal:{type:Number,default:2021},duration:{type:Number,default:1500},autoplay:{type:Boolean,default:!0},decimals:{type:Number,default:0,validator:t=>t>=0},prefix:{type:String,default:""},suffix:{type:String,default:""},separator:{type:String,default:","},decimal:{type:String,default:"."},color:{type:String},useEasing:{type:Boolean,default:!0},transition:{type:String,default:"linear"}},emits:["onStarted","onFinished"],setup(t,{emit:s}){const i=l(t.startVal),m=l(!1);let v=u(i);const g=d((()=>function(e){if(!e&&0!==e)return"";const{decimals:a,decimal:r,separator:n,suffix:s,prefix:i}=t;e=Number(e).toFixed(a);const l=(e+="").split(".");let u=l[0];const d=l.length>1?r+l[1]:"",p=/(\d+)(\d{3})/;if(n&&!o(n))for(;p.test(u);)u=u.replace(p,"$1"+n+"$2");return i+u+d+s}(p(v))));function S(){V(),i.value=t.endVal}function V(){v=u(i,((t,o)=>{for(var s in o||(o={}))a.call(o,s)&&n(t,s,o[s]);if(e)for(var s of e(o))r.call(o,s)&&n(t,s,o[s]);return t})({disabled:m,duration:t.duration,onFinished:()=>s("onFinished"),onStarted:()=>s("onStarted")},t.useEasing?{transition:b[t.transition]}:{}))}return f((()=>{i.value=t.startVal})),c([()=>t.startVal,()=>t.endVal],(()=>{t.autoplay&&S()})),y((()=>{t.autoplay&&S()})),{value:g,start:S,reset:function(){i.value=t.startVal,V()}}}});S.render=function(t,e,a,r,n,o){return m(),v("span",{style:{color:t.color}},g(t.value),5)};const V=s(S);export{V as C};
