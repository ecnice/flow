import o from"./Login.da3748c5.js";import{c as e,f as s,N as r,X as i,b7 as a}from"./index.4926e6da.js";import{y as t,r as n,X as d,ag as m,Z as p,B as c,F as l,v as j,_ as f,K as u}from"./vendor.880b4c6c.js";import"./LoginForm.c25cbe82.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.8397b424.js";import"./ForgetPasswordForm.9d1b13df.js";import"./index.115ee23a.js";import"./RegisterForm.c47d969c.js";import"./index.7ca90fad.js";import"./MobileForm.82aaee92.js";import"./QrCodeForm.e67a7c2f.js";import"./index.22c01241.js";import"./download.c775db55.js";import"./base64Conver.bb012c73.js";var g=t({name:"SessionTimeoutLogin",components:{Login:o},setup(){const{prefixCls:o}=e("st-login"),t=s(),p=r(),c=i(),l=n(0);return d((()=>{var o;l.value=null==(o=t.getUserInfo)?void 0:o.userId})),m((()=>{(l.value&&l.value!==t.getUserInfo.userId||c.getProjectConfig.permissionMode===a.BACK&&0===p.getLastBuildMenuTime)&&document.location.reload()})),{prefixCls:o}}});const b=u(),x=b(((o,e,s,r,i,a)=>{const t=p("Login");return c(),l(f,null,{default:b((()=>[j("div",{class:o.prefixCls},[j(t,{sessionTimeout:""})],2)])),_:1})}));g.render=x,g.__scopeId="data-v-43322cae";export default g;
