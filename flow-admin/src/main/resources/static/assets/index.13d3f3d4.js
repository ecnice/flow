import{j as s,bz as a,bt as e,aS as t,aR as i,k as l,l as n,K as o,o as r,m as c,x as p,n as d,V as u,ah as m,X as f,q as _,Y as x}from"./vendor.686fd1d4.js";/* empty css              *//* empty css              */import{_ as v}from"./index.44a64fe8.js";import{cardList as j}from"./data.a96915dc.js";import{P as g}from"./index.30fbc9dc.js";/* empty css              */import"./useContentViewHeight.7797c6a9.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.172ad1ec.js";var b=s({components:{Icon:v,Progress:a,PageWrapper:g,[e.name]:e,[e.Item.name]:e.Item,AListItemMeta:e.Item.Meta,[t.name]:t,[i.name]:i},setup:()=>({prefixCls:"list-basic",list:j,pagination:{show:!0,pageSize:3}})});const C=p();l("data-v-de67b38a");const I=d("div",null,"我的待办",-1),w=d("p",null,"8个任务",-1),P=d("div",null,"本周任务平均处理时间",-1),$=d("p",null,"32分钟",-1),h=d("div",null,"本周完成任务数",-1),k=d("p",null,"24个任务",-1),y={key:0,class:"extra"},z={class:"description"},M={class:"info"},S=d("span",null,"Owner",-1),W=d("span",null,"开始时间",-1),A={class:"progress"};n();const O=C(((s,a,e,t,i,l)=>{const n=o("a-col"),p=o("a-row"),v=o("Icon"),j=o("Progress"),g=o("a-list-item-meta"),b=o("a-list-item"),O=o("a-list"),V=o("PageWrapper");return r(),c(V,{class:s.prefixCls,title:"标准列表"},{default:C((()=>[d("div",{class:`${s.prefixCls}__top`},[d(p,{gutter:12},{default:C((()=>[d(n,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[I,w])),_:1},8,["class"]),d(n,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[P,$])),_:1},8,["class"]),d(n,{span:8,class:`${s.prefixCls}__top-col`},{default:C((()=>[h,k])),_:1},8,["class"])])),_:1})],2),d("div",{class:`${s.prefixCls}__content`},[d(O,{pagination:s.pagination},{default:C((()=>[(r(!0),c(u,null,m(s.list,(s=>(r(),c(b,{key:s.id,class:"list"},{default:C((()=>[d(g,null,{avatar:C((()=>[s.icon?(r(),c(v,{key:0,class:"icon",icon:s.icon,color:s.color},null,8,["icon","color"])):f("",!0)])),title:C((()=>[d("span",null,_(s.title),1),s.extra?(r(),c("div",y,_(s.extra),1)):f("",!0)])),description:C((()=>[d("div",z,_(s.description),1),d("div",M,[d("div",null,[S,x(_(s.author),1)]),d("div",null,[W,x(_(s.datetime),1)])]),d("div",A,[d(j,{percent:s.percent,status:"active"},null,8,["percent"])])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["pagination"])],2)])),_:1},8,["class"])}));b.render=O,b.__scopeId="data-v-de67b38a";export default b;