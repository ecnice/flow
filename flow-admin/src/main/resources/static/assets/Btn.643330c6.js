var C=(t,r,a)=>new Promise((c,m)=>{var p=i=>{try{n(a.next(i))}catch(s){m(s)}},_=i=>{try{n(a.throw(i))}catch(s){m(s)}},n=i=>i.done?c(i.value):Promise.resolve(i.value).then(p,_);n((a=a.apply(t,r)).next())});import{A as P,bM as k,b0 as v,j as b,a0 as d,bo as g,B as l,a1 as E,a6 as e,w as u,H as A,J as j,D as x,ad as F,F as h,ab as M,ae as o}from"./vendor.5879c5ca.js";/* empty css                *//* empty css               */import w from"./CurrentPermissionMode.b4c10e4a.js";import{_ as S,am as T,O as $,Y as V,f as N,bb as W}from"./index.aeb7d9f7.js";import{A as H}from"./index.f944d10b.js";import{P as I}from"./index.37a89528.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.6345b5e8.js";const U=P({components:{Alert:k,PageWrapper:I,CurrentPermissionMode:w,Divider:v,Authority:H},setup(){const{hasPermission:t}=T(),r=$(),a=V(),c=N(),m=b(()=>a.getProjectConfig.permissionMode===W.BACK);function p(_){return C(this,null,function*(){const n="fakeToken"+_;c.setToken(n),c.getUserInfoAction(),r.changePermissionCode()})}return{hasPermission:t,permissionStore:r,switchToken:p,isBackPremissionMode:m}}}),z=o(" \u5F53\u524D\u62E5\u6709\u7684code\u5217\u8868: "),J=o(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A2) "),K=o(" \u70B9\u51FB\u5207\u6362\u6309\u94AE\u6743\u9650(\u7528\u6237id\u4E3A1,\u9ED8\u8BA4) "),L=o("\u7EC4\u4EF6\u65B9\u5F0F\u5224\u65AD\u6743\u9650"),O=o(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 "),Y=o(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 "),q=o(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),G=o("\u51FD\u6570\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650"),Q=o(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 "),R=o(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 "),X=o(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 "),Z=o("\u6307\u4EE4\u65B9\u5F0F\u65B9\u5F0F\u5224\u65AD\u6743\u9650(\u8BE5\u65B9\u5F0F\u4E0D\u80FD\u52A8\u6001\u4FEE\u6539\u6743\u9650.)"),ee=o(" \u62E5\u6709code ['1000']\u6743\u9650\u53EF\u89C1 "),ue=o(" \u62E5\u6709code ['2000']\u6743\u9650\u53EF\u89C1 "),se=o(" \u62E5\u6709code ['1000','2000']\u89D2\u8272\u6743\u9650\u53EF\u89C1 ");function oe(t,r,a,c,m,p){const _=d("CurrentPermissionMode"),n=d("Divider"),i=d("Alert"),s=d("a-button"),f=d("Authority"),D=d("PageWrapper"),B=g("auth");return l(),E(D,{contentBackground:"",title:"\u6309\u94AE\u6743\u9650\u63A7\u5236",contentClass:"p-4"},{default:e(()=>[u(_),A("p",null,[z,A("a",null,j(t.permissionStore.getPermCodeList),1)]),u(n),u(i,{class:"mt-4",type:"info",message:"\u70B9\u51FB\u540E\u8BF7\u67E5\u770B\u6309\u94AE\u53D8\u5316(\u5FC5\u987B\u5904\u4E8E\u540E\u53F0\u6743\u9650\u6A21\u5F0F\u624D\u53EF\u6D4B\u8BD5\u6B64\u9875\u9762\u6240\u5C55\u793A\u7684\u529F\u80FD)","show-icon":""}),u(n),u(s,{type:"primary",class:"mr-2",onClick:r[0]||(r[0]=y=>t.switchToken(2)),disabled:!t.isBackPremissionMode},{default:e(()=>[J]),_:1},8,["disabled"]),u(s,{type:"primary",onClick:r[1]||(r[1]=y=>t.switchToken(1)),disabled:!t.isBackPremissionMode},{default:e(()=>[K]),_:1},8,["disabled"]),t.isBackPremissionMode?(l(),x(M,{key:0},[u(n,null,{default:e(()=>[L]),_:1}),u(f,{value:"1000"},{default:e(()=>[u(s,{type:"primary",class:"mx-4"},{default:e(()=>[O]),_:1})]),_:1}),u(f,{value:"2000"},{default:e(()=>[u(s,{color:"success",class:"mx-4"},{default:e(()=>[Y]),_:1})]),_:1}),u(f,{value:["1000","2000"]},{default:e(()=>[u(s,{color:"error",class:"mx-4"},{default:e(()=>[q]),_:1})]),_:1}),u(n,null,{default:e(()=>[G]),_:1}),t.hasPermission("1000")?(l(),E(s,{key:0,type:"primary",class:"mx-4"},{default:e(()=>[Q]),_:1})):F("",!0),t.hasPermission("2000")?(l(),E(s,{key:1,color:"success",class:"mx-4"},{default:e(()=>[R]),_:1})):F("",!0),t.hasPermission(["1000","2000"])?(l(),E(s,{key:2,color:"error",class:"mx-4"},{default:e(()=>[X]),_:1})):F("",!0),u(n,null,{default:e(()=>[Z]),_:1}),h(u(s,{type:"primary",class:"mx-4"},{default:e(()=>[ee]),_:1},512),[[B,"1000"]]),h(u(s,{color:"success",class:"mx-4"},{default:e(()=>[ue]),_:1},512),[[B,"2000"]]),h(u(s,{color:"error",class:"mx-4"},{default:e(()=>[se]),_:1},512),[[B,["1000","2000"]]])],64)):F("",!0)]),_:1})}var Fe=S(U,[["render",oe],["__scopeId","data-v-73faef66"]]);export{Fe as default};
