import o from"./Login.7f040175.js";import{c as e,f as s,N as r,X as i,b2 as t}from"./index.ba319b32.js";import{j as a,r as n,I as d,a3 as m,K as p,o as c,m as j,n as l,T as f,x as b}from"./vendor.686fd1d4.js";import"./LoginForm.12487b13.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.e3bd143d.js";import"./ForgetPasswordForm.b4d8352e.js";import"./index.c3ebc3c0.js";import"./RegisterForm.ae6dc823.js";import"./index.ed23997c.js";import"./MobileForm.cf05a285.js";import"./QrCodeForm.a8e6ab22.js";import"./index.9a104db6.js";import"./download.6c35d74f.js";import"./base64Conver.bb012c73.js";var u=a({name:"SessionTimeoutLogin",components:{Login:o},setup(){const{prefixCls:o}=e("st-login"),a=s(),p=r(),c=i(),j=n(0);return d((()=>{var o;j.value=null==(o=a.getUserInfo)?void 0:o.userId})),m((()=>{(j.value&&j.value!==a.getUserInfo.userId||c.getProjectConfig.permissionMode===t.BACK&&0===p.getLastBuildMenuTime)&&document.location.reload()})),{prefixCls:o}}});const g=b(),x=g(((o,e,s,r,i,t)=>{const a=p("Login");return c(),j(f,null,{default:g((()=>[l("div",{class:o.prefixCls},[l(a,{sessionTimeout:""})],2)])),_:1})}));u.render=x,u.__scopeId="data-v-43322cae";export default u;