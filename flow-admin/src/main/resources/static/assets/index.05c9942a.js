import{A as b,bJ as O,j as L,a0 as _,B as C,D as M,w as a,a6 as x,a7 as q,ab as Z,ap as ee,a1 as N,aD as te,a4 as R,aC as ne,K as ae,P as oe,r as j,am as se,u as f,bV as re,ae as Y,bX as ie,bY as le,aQ as ce}from"./vendor.7bee64cc.js";/* empty css                */import{p as ue,a as me,j as de,_ as B,aY as ge}from"./index.9eb02b52.js";import{P as fe}from"./index.77f474a0.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.30e15ddc.js";import"./useContentViewHeight.52836077.js";const pe=b({name:"ImagePreview",components:{Image:O,PreviewGroup:O.PreviewGroup},props:{functional:ue.bool,imageList:{type:Array}},setup(n){const{prefixCls:u}=me("image-preview"),i=L(()=>{const{imageList:r}=n;return r?r.map(t=>de(t)?{src:t,placeholder:!1}:t):[]});return{prefixCls:u,getImageList:i}}});function ve(n,u,i,r,t,h){const d=_("Image"),p=_("PreviewGroup");return C(),M("div",{class:ae(n.prefixCls)},[a(p,null,{default:x(()=>[!n.imageList||n.$slots.default?q(n.$slots,"default",{key:0}):(C(!0),M(Z,{key:1},ee(n.getImageList,l=>(C(),N(d,ne(R({key:l.src},l)),te({_:2},[l.placeholder?{name:"placeholder",fn:x(()=>[a(d,R(l,{src:l.placeholder,preview:!1}),null,16,["src"])])}:void 0]),1040))),128))]),_:3})],2)}var _e=B(pe,[["render",ve]]),he="/assets/resume.6e209205.svg",we="/assets/p-rotate.1d232189.svg",Ie="/assets/scale.8d8ebde4.svg",Le="/assets/unscale.99ad049c.svg",Ce="/assets/unrotate.f9dd5a27.svg",g;(function(n){n[n.LOADING=0]="LOADING",n[n.DONE=1]="DONE",n[n.FAIL=2]="FAIL"})(g||(g={}));const xe={show:{type:Boolean,default:!1},imageList:{type:[Array],default:null},index:{type:Number,default:0},scaleStep:{type:Number},defaultWidth:{type:Number},maskClosable:{type:Boolean},rememberState:{type:Boolean}},s="img-preview";var $e=b({name:"ImagePreview",props:xe,emits:["img-load","img-error"],setup(n,{expose:u,emit:i}){const r=new Map,t=oe({currentUrl:"",imgScale:1,imgRotate:0,imgTop:0,imgLeft:0,status:g.LOADING,currentIndex:0,moveX:0,moveY:0,show:n.show}),h=j(null),d=j(null);function p(){X();const{index:e,imageList:o}=n;if(!o||!o.length)throw new Error("imageList is undefined");t.currentIndex=e,P(o[e])}function l(){t.imgScale=1,t.imgRotate=0,t.imgTop=0,t.imgLeft=0}function X(){const e=f(h);!e||(e.onmousewheel=$,document.body.addEventListener("DOMMouseScroll",$),document.ondragstart=function(){return!1})}const w=L(()=>{var o;const e=(o=n==null?void 0:n.scaleStep)!=null?o:0;return(e!=null?e:0>0)?e/100:t.imgScale/10});function $(e){e=e||window.event,e.delta=e.wheelDelta||-e.detail,e.preventDefault(),e.delta>0&&I(w.value),e.delta<0&&I(-w.value)}function I(e){t.imgScale<=.2&&e<0||(t.imgScale+=e)}function F(e){t.imgRotate+=e}function G(){const e=f(d);!e||(e.onmousemove=null)}function P(e){t.status=g.LOADING;const o=new Image;o.src=e,o.onload=c=>{if(t.currentUrl!==e){const m=c.composedPath();if(n.rememberState){r.set(t.currentUrl,{scale:t.imgScale,top:t.imgTop,left:t.imgLeft,rotate:t.imgRotate});const v=r.get(e);v?(t.imgScale=v.scale,t.imgTop=v.top,t.imgRotate=v.rotate,t.imgLeft=v.left):(l(),n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth))}else n.defaultWidth&&(t.imgScale=n.defaultWidth/m[0].naturalWidth);m&&i("img-load",{index:t.currentIndex,dom:m[0],url:e})}t.currentUrl=e,t.status=g.DONE},o.onerror=c=>{const m=c.composedPath();m&&i("img-error",{index:t.currentIndex,dom:m[0],url:e}),t.status=g.FAIL}}function k(e){e&&e.stopPropagation(),D()}function D(){t.show=!1,document.body.removeEventListener("DOMMouseScroll",$),document.ondragstart=null}function A(){l()}u({resume:A,close:D,prev:S.bind(null,"left"),next:S.bind(null,"right"),setScale:e=>{e>0&&e<=10&&(t.imgScale=e)},setRotate:e=>{t.imgRotate=e}});function S(e){const{currentIndex:o}=t,{imageList:c}=n;e==="left"&&(t.currentIndex--,o<=0&&(t.currentIndex=c.length-1)),e==="right"&&(t.currentIndex++,o>=c.length-1&&(t.currentIndex=0)),P(c[t.currentIndex])}function U(e){e=e||window.event,t.moveX=e.clientX,t.moveY=e.clientY;const o=f(d);o&&(o.onmousemove=V)}function V(e){e=e||window.event,e.preventDefault();const o=e.clientX-t.moveX,c=e.clientY-t.moveY;t.imgLeft+=o,t.imgTop+=c,t.moveX=e.clientX,t.moveY=e.clientY}const z=L(()=>{const{imgScale:e,imgRotate:o,imgTop:c,imgLeft:m}=t;return{transform:`scale(${e}) rotate(${o}deg)`,marginTop:`${c}px`,marginLeft:`${m}px`,maxWidth:n.defaultWidth?"unset":"100%"}}),E=L(()=>{const{imageList:e}=n;return e.length>1});se(()=>{n.show&&p(),n.imageList&&l()});const H=e=>{n.maskClosable&&e.target&&e.target.classList.contains(`${s}-content`)&&k(e)},J=()=>a("div",{class:`${s}__close`,onClick:k},[a(re,{class:`${s}__close-icon`},null)]),K=()=>{if(!f(E))return null;const{currentIndex:e}=t,{imageList:o}=n;return a("div",{class:`${s}__index`},[e+1,Y(" / "),o.length])},Q=()=>a("div",{class:`${s}__controller`},[a("div",{class:`${s}__controller-item`,onClick:()=>I(-w.value)},[a("img",{src:Le},null)]),a("div",{class:`${s}__controller-item`,onClick:()=>I(w.value)},[a("img",{src:Ie},null)]),a("div",{class:`${s}__controller-item`,onClick:A},[a("img",{src:he},null)]),a("div",{class:`${s}__controller-item`,onClick:()=>F(-90)},[a("img",{src:Ce},null)]),a("div",{class:`${s}__controller-item`,onClick:()=>F(90)},[a("img",{src:we},null)])]),W=e=>f(E)?a("div",{class:[`${s}__arrow`,e],onClick:()=>S(e)},[e==="left"?a(ie,null,null):a(le,null,null)]):null;return()=>t.show&&a("div",{class:s,ref:h,onMouseup:G,onClick:H},[a("div",{class:`${s}-content`},[a("img",{style:f(z),class:[`${s}-image`,t.status===g.DONE?"":"hidden"],ref:d,src:t.currentUrl,onMousedown:U},null),J(),K(),Q(),W("left"),W("right")])])}});let y=null;function Se(n){var r;if(!ge)return;const u={},i=document.createElement("div");return Object.assign(u,{show:!0,index:0,scaleStep:100},n),y=a($e,u),ce(y,i),document.body.appendChild(i),(r=y.component)==null?void 0:r.exposed}const T=["https://picsum.photos/id/66/346/216","https://picsum.photos/id/67/346/216","https://picsum.photos/id/68/346/216"],be=b({components:{PageWrapper:fe,ImagePreview:_e},setup(){function n(){Se({imageList:T,defaultWidth:700,rememberState:!0,onImgLoad:({index:i,url:r,dom:t})=>{console.log(`\u7B2C${i+1}\u5F20\u56FE\u7247\u5DF2\u52A0\u8F7D\uFF0CURL\u4E3A\uFF1A${r}`,t)}})}return{imgList:T,openImg:n}}}),ye=Y("\u65E0\u9884\u89C8\u56FE");function Fe(n,u,i,r,t,h){const d=_("ImagePreview"),p=_("a-button"),l=_("PageWrapper");return C(),N(l,{title:"\u56FE\u7247\u9884\u89C8\u793A\u4F8B"},{default:x(()=>[a(d,{imageList:n.imgList},null,8,["imageList"]),a(p,{onClick:n.openImg,type:"primary"},{default:x(()=>[ye]),_:1},8,["onClick"])]),_:1})}var Ne=B(be,[["render",Fe]]);export{Ne as default};
