import{n as t,af as e,w as i}from"./index.a33a5e4d.js";import{y as s,r,N as a,j as l,u as n,Q as o,X as m,Y as c,v as d,aZ as u,z as h,A as p,Z as g,B as f,F as v,J as b,K as _,a9 as x}from"./vendor.880b4c6c.js";/* empty css              */import{P as H}from"./index.cf1d4223.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.d4b428eb.js";function S(t,e="px"){return null==t||""===t?void 0:isNaN(+t)?String(t):`${Number(t)}${e}`}var N=s({name:"VirtualScroll",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String],bench:{type:[Number,String],default:0},itemHeight:{type:[Number,String],required:!0},items:{type:Array,default:()=>[]}},setup(i,{slots:s}){const u=r(null),h=a({first:0,last:0,scrollTop:0}),p=l((()=>parseInt(i.bench,10))),g=l((()=>parseInt(i.itemHeight,10))),f=l((()=>Math.max(0,h.first-n(p)))),v=l((()=>Math.min((i.items||[]).length,h.last+n(p)))),b=l((()=>({height:S((i.items||[]).length*n(g))}))),_=l((()=>{const t={},e=S(i.height),s=S(i.minHeight),r=S(i.minWidth),a=S(i.maxHeight),l=S(i.maxWidth),n=S(i.width);return e&&(t.height=e),s&&(t.minHeight=s),r&&(t.minWidth=r),a&&(t.maxHeight=a),l&&(t.maxWidth=l),n&&(t.width=n),t}));function x(t){const e=n(u);if(!e)return 0;const s=parseInt(i.height||0,10)||e.clientHeight;return t+Math.ceil(s/n(g))}function H(){const t=n(u);t&&(h.scrollTop=t.scrollTop,h.first=Math.floor(h.scrollTop/n(g)),h.last=x(h.first))}function N(){const{items:t=[]}=i;return t.slice(n(f),n(v)).map(w)}function w(t,i){const r=S((i+=n(f))*n(g));return d("div",{class:"virtual-scroll__item",style:{top:r},key:i},[e(s,"default",{index:i,item:t})])}return o([()=>i.itemHeight,()=>i.height],(()=>{H()})),m((()=>{h.last=x(0),c((()=>{const e=n(u);e&&t({el:e,name:"scroll",listener:H,wait:0})}))})),()=>d("div",{class:"virtual-scroll",style:n(_),ref:u},[d("div",{class:"virtual-scroll__container",style:n(b)},[N()])])}});N.__scopeId="data-v-0610daca";const w=i(N),j=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var y=s({components:{VScroll:w,Divider:u,PageWrapper:H},setup:()=>({data:j})});const W=_();h("data-v-918662a0");const I=x("基础滚动示例"),M={class:"virtual-scroll-demo-wrap"},T={class:"virtual-scroll-demo__item"},V=x("即使不可见，也预先加载50条数据，防止空白"),A={class:"virtual-scroll-demo-wrap"},P={class:"virtual-scroll-demo__item"};p();const z=W(((t,e,i,s,r,a)=>{const l=g("Divider"),n=g("VScroll"),o=g("PageWrapper");return f(),v(o,{class:"virtual-scroll-demo"},{default:W((()=>[d(l,null,{default:W((()=>[I])),_:1}),d("div",M,[d(n,{itemHeight:41,items:t.data,height:300,width:300},{default:W((({item:t})=>[d("div",T,b(t.title),1)])),_:1},8,["items"])]),d(l,null,{default:W((()=>[V])),_:1}),d("div",A,[d(n,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:W((({item:t})=>[d("div",P,b(t.title),1)])),_:1},8,["items"])])])),_:1})}));y.render=z,y.__scopeId="data-v-918662a0";export default y;
