import{b4 as e,q as o,aH as n}from"./vendor.9d9efc92.js";import{r}from"./index.1f477f84.js";function a(a,s={}){const{size:t="small",delay:i=100,timeout:m=3e4,loading:d=!1,retry:l=!0}=s;return e({loader:a,loadingComponent:d?o(n,{spinning:!0,size:t},null):void 0,timeout:m,delay:i,onError:l?(e,o,n,r)=>{e.message.match(/fetch/)&&r<=3?o():n()}:r})}export{a as c};