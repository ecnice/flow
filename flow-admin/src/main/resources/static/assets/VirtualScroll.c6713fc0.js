import{k as t}from"./index.407e4786.js";import{c as e}from"./createAsyncComponent.165c6751.js";import{k as a,aV as s,l as r,m as i,K as o,o as l,n as d,q as m,s as c,x as n,Y as p}from"./vendor.56d2c57f.js";/* empty css              */import{_ as u}from"./PageWrapper.745b68b0.js";import"./usePageContext.60e4e10d.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.1a8745f8.js";const _=e((()=>t((()=>import("./VirtualScroll.63d3969b.js")),["/assets/VirtualScroll.63d3969b.js","/assets/VirtualScroll.7ff9340b.css","/assets/index.407e4786.js","/assets/index.69000eb3.css","/assets/vendor.56d2c57f.js","/assets/vendor.70495537.css"]))),f=(()=>{const t=[];for(let e=1;e<2e4;e++)t.push({title:"列表项"+e});return t})();var v=a({components:{VScroll:_,Divider:s,PageWrapper:u},setup:()=>({data:f})});const h=n();r("data-v-918662a0");const j=p("基础滚动示例"),g={class:"virtual-scroll-demo-wrap"},x={class:"virtual-scroll-demo__item"},b=p("即使不可见，也预先加载50条数据，防止空白"),P={class:"virtual-scroll-demo-wrap"},V={class:"virtual-scroll-demo__item"};i();const w=h(((t,e,a,s,r,i)=>{const n=o("Divider"),p=o("VScroll"),u=o("PageWrapper");return l(),d(u,{class:"virtual-scroll-demo"},{default:h((()=>[m(n,null,{default:h((()=>[j])),_:1}),m("div",g,[m(p,{itemHeight:41,items:t.data,height:300,width:300},{default:h((({item:t})=>[m("div",x,c(t.title),1)])),_:1},8,["items"])]),m(n,null,{default:h((()=>[b])),_:1}),m("div",P,[m(p,{itemHeight:41,items:t.data,height:300,width:300,bench:50},{default:h((({item:t})=>[m("div",V,c(t.title),1)])),_:1},8,["items"])])])),_:1})}));v.render=w,v.__scopeId="data-v-918662a0";export default v;