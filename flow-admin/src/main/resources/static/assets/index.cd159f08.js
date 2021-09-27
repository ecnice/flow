var e=Object.defineProperty,t=Object.defineProperties,s=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable,a=(t,s,i)=>s in t?e(t,s,{enumerable:!0,configurable:!0,writable:!0,value:i}):t[s]=i,o=(e,t)=>{for(var s in t||(t={}))n.call(t,s)&&a(e,s,t[s]);if(i)for(var s of i(t))r.call(t,s)&&a(e,s,t[s]);return e};import{e as c,n as l,m as u,af as d,aW as p,w as m}from"./index.4926e6da.js";import{y as g,N as f,r as h,j as y,Q as v,ai as w,u as x,v as T,bS as b,c8 as S,a0 as P}from"./vendor.880b4c6c.js";const{t:D}=c(),M={value:{type:Boolean,default:!1},isSlot:{type:Boolean,default:!1},text:{type:[String],default:D("component.verify.dragText")},successText:{type:[String],default:D("component.verify.successText")},height:{type:[Number,String],default:40},width:{type:[Number,String],default:220},circle:{type:Boolean,default:!1},wrapStyle:{type:Object,default:{}},contentStyle:{type:Object,default:{}},barStyle:{type:Object,default:{}},actionStyle:{type:Object,default:{}}},O=(I=o({},M),t(I,s({src:{type:String},imgWidth:{type:Number,default:260},imgWrapStyle:{type:Object,default:{}},minDegree:{type:Number,default:90},maxDegree:{type:Number,default:270},diffDegree:{type:Number,default:20}})));var I,$=g({name:"BaseDargVerify",props:M,emits:["success","update:value","change","start","move","end"],setup(e,{emit:t,slots:s,expose:i}){const n=f({isMoving:!1,isPassing:!1,moveDistance:0,toLeft:!1,startTime:0,endTime:0}),r=h(null),a=h(null),c=h(null),p=h(null);l({el:document,name:"mouseup",listener:()=>{n.isMoving&&N()}});const m=y((()=>{const{height:t,actionStyle:s}=e,i=`${parseInt(t)}px`;return o({left:0,width:i,height:i},s)})),g=y((()=>{const{height:t,width:s,circle:i,wrapStyle:n}=e,r=parseInt(t),a=`${parseInt(s)}px`;return o({width:a,height:`${r}px`,lineHeight:`${r}px`,borderRadius:i?r/2+"px":0},n)})),P=y((()=>{const{height:t,circle:s,barStyle:i}=e,n=parseInt(t);return o({height:`${n}px`,borderRadius:s?n/2+"px 0 0 "+n/2+"px":0},i)})),D=y((()=>{const{height:t,width:s,contentStyle:i}=e,n=`${parseInt(t)}px`,r=`${parseInt(s)}px`;return o({height:n,width:r},i)}));function M(e){return e.pageX||e.touches[0].pageX}function O(e){if(n.isPassing)return;const s=x(p);s&&(t("start",e),n.moveDistance=M(e)-parseInt(s.style.left.replace("px",""),10),n.startTime=(new Date).getTime(),n.isMoving=!0)}function I(t){const s=parseInt(t.style.width),{width:i}=e,n=parseInt(i);return{offset:n-s-6,widthNum:n,actionWidth:s}}function $(s){const{isMoving:i,moveDistance:r}=n;if(i){const i=x(p),n=x(a);if(!i||!n)return;const{offset:o,widthNum:c,actionWidth:l}=I(i),u=M(s)-r;t("move",{event:s,moveDistance:r,moveX:u}),u>0&&u<=o?(i.style.left=`${u}px`,n.style.width=`${u+l/2}px`):u>o&&(i.style.left=c-l+"px",n.style.width=c-l/2+"px",e.isSlot||R())}}function j(s){const{isMoving:i,isPassing:r,moveDistance:o}=n;if(i&&!r){t("end",s);const i=x(p),r=x(a);if(!i||!r)return;const l=M(s)-o,{offset:u,widthNum:d,actionWidth:m}=I(i);l<u?e.isSlot?setTimeout((()=>{if(e.value){const e=x(c);e&&(e.style.width=`${parseInt(r.style.width)}px`)}else N()}),0):N():(i.style.left=d-m+"px",r.style.width=d-m/2+"px",R()),n.isMoving=!1}}function R(){e.isSlot?N():(n.endTime=(new Date).getTime(),n.isPassing=!0,n.isMoving=!1)}function N(){n.isMoving=!1,n.isPassing=!1,n.moveDistance=0,n.toLeft=!1,n.startTime=0,n.endTime=0;const e=x(p),t=x(a),s=x(c);e&&t&&s&&(n.toLeft=!0,u((()=>{n.toLeft=!1,e.style.left="0",t.style.width="0"}),300),s.style.width=x(D).width)}return v((()=>n.isPassing),(e=>{if(e){const{startTime:s,endTime:i}=n;t("success",{isPassing:e,time:((i-s)/1e3).toFixed(1)}),t("update:value",e),t("change",e)}})),w((()=>{n.isPassing=!!e.value})),i({resume:N}),()=>T("div",{class:"darg-verify",ref:r,style:x(g),onMousemove:$,onTouchmove:$,onMouseleave:j,onMouseup:j,onTouchend:j},[(()=>{const e=["darg-verify-bar"];return n.toLeft&&e.push("to-left"),T("div",{class:e,ref:a,style:x(P)},null)})(),(()=>{const t=["darg-verify-content"],{isPassing:i}=n,{text:r,successText:a}=e;return i&&t.push("success"),T("div",{class:t,ref:c,style:x(D)},[d(s,"text",i)||(i?a:r)])})(),(()=>{const e=["darg-verify-action"],{toLeft:t,isPassing:i}=n;return t&&e.push("to-left"),T("div",{class:e,onMousedown:O,onTouchstart:O,style:x(m),ref:p},[d(s,"actionIcon",i)||T(i?b:S,{class:"darg-verify-action__icon"},null)])})()])}}),j=g({name:"ImgRotateDragVerify",inheritAttrs:!1,props:O,emits:["success","change","update:value"],setup(e,{emit:t,attrs:s,expose:i}){const n=h(null),r=f({showTip:!1,isPassing:!1,imgStyle:{},randomRotate:0,currentRotate:0,toOrigin:!1,startTime:0,endTime:0,draged:!1}),{t:a}=c();v((()=>r.isPassing),(e=>{if(e){const{startTime:s,endTime:i}=r;t("success",{isPassing:e,time:((i-s)/1e3).toFixed(1)}),t("change",e),t("update:value",e)}}));const l=y((()=>{const{imgWrapStyle:t,imgWidth:s}=e;return o({width:`${s}px`,height:`${s}px`},t)})),d=y((()=>{const{minDegree:t,maxDegree:s}=e;return t===s?Math.floor(1+1*Math.random())/10+1:1}));function m(){r.startTime=(new Date).getTime()}function g(t){r.draged=!0;const{imgWidth:s,height:i,maxDegree:n}=e,{moveX:a}=t,o=Math.ceil(a/(s-parseInt(i))*n*x(d));r.currentRotate=o,r.imgStyle=p("transform",`rotateZ(${r.randomRotate-o}deg)`)}function w(){const{minDegree:t,maxDegree:s}=e,i=Math.floor(t+Math.random()*(s-t));r.randomRotate=i,r.imgStyle=p("transform",`rotateZ(${i}deg)`)}function b(){const{randomRotate:t,currentRotate:s}=r,{diffDegree:i}=e;Math.abs(t-s)>=(i||20)?(r.imgStyle=p("transform",`rotateZ(${t}deg)`),r.toOrigin=!0,u((()=>{r.toOrigin=!1,r.showTip=!0}),300)):(r.isPassing=!0,r.endTime=(new Date).getTime()),r.showTip=!0}function S(){r.showTip=!1;const e=x(n);e&&(r.isPassing=!1,e.resume(),w())}return i({resume:S}),()=>{const{src:t}=e,{toOrigin:i,isPassing:c,startTime:u,endTime:d}=r,p=[];i&&p.push("to-origin");const f=(d-u)/1e3;return T("div",{class:"ir-dv"},[T("div",{class:"ir-dv-img__wrap",style:x(l)},[T("img",{src:t,onLoad:w,width:parseInt(e.width),class:p,style:r.imgStyle,onClick:()=>{S()},alt:"verify"},null),r.showTip&&T("span",{class:["ir-dv-img__tip",r.isPassing?"success":"error"]},[r.isPassing?a("component.verify.time",{time:f.toFixed(1)}):a("component.verify.error")]),!r.showTip&&!r.draged&&T("span",{class:["ir-dv-img__tip","normal"]},[a("component.verify.redoTip")])]),T($,P({class:"ir-dv-drag__bar",onMove:g,onEnd:b,onStart:m,ref:n},o(o({},s),e),{value:c,isSlot:!0}),null)])}}});const R=m($),N=m(j);export{R as B,N as R};
