import{P as e}from"./index.cf1d4223.js";import{f as t}from"./index.a33a5e4d.js";import"./account.ae71f564.js";import{y as n,Z as o,B as r,F as s,a2 as a,v as i,a9 as c}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.d4b428eb.js";var p=n({name:"TestSessionTimeout",components:{PageWrapper:e},setup(){const e=t();return{test:function(){return t=this,n=null,o=function*(){e.setToken(void 0),e.setSessionTimeout(!0)},new Promise(((e,r)=>{var s=e=>{try{i(o.next(e))}catch(t){r(t)}},a=e=>{try{i(o.throw(e))}catch(t){r(t)}},i=t=>t.done?e(t.value):Promise.resolve(t.value).then(s,a);i((o=o.apply(t,n)).next())}));var t,n,o}}}});const u=c("点击触发用户登录过期");p.render=function(e,t,n,c,p,m){const d=o("a-button"),f=o("PageWrapper");return r(),s(f,{title:"登录过期示例",content:"用户登录过期示例，不再跳转登录页，直接生成页面覆盖当前页面，方便保持过期前的用户状态！"},{default:a((()=>[i(d,{type:"primary",onClick:e.test},{default:a((()=>[u])),_:1},8,["onClick"])])),_:1})};export default p;
