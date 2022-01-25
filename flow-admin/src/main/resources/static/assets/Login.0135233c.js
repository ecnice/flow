import{A as e,a as o,b as s,u as r,c as t,d as l,e as i}from"./index.8c1d7da4.js";import n from"./LoginForm.715e1fdd.js";import a from"./ForgetPasswordForm.acefe141.js";import m from"./RegisterForm.4606c32b.js";import d from"./MobileForm.991d833a.js";import x from"./QrCodeForm.e4b84343.js";import{y as p,j as c,Z as f,B as g,F as u,a8 as w,v as b,J as h}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./LoginFormTitle.a8db7349.js";import"./index.57b652cd.js";import"./index.30a3342d.js";import"./index.9ef1215c.js";import"./download.22b91874.js";import"./base64Conver.bb012c73.js";var F=p({name:"Login",components:{AppLogo:e,LoginForm:n,ForgetPasswordForm:a,RegisterForm:m,MobileForm:d,QrCodeForm:x,AppLocalePicker:o,AppDarkModeToggle:s},props:{sessionTimeout:{type:Boolean}},setup(){const e=r(),{prefixCls:o}=t("login"),{t:s}=i(),n=l();return{t:s,prefixCls:o,title:c((()=>{var o;return null!=(o=null==e?void 0:e.title)?o:""})),showLocale:n.getShowPicker}}});const v={class:"-enter-x xl:hidden"},j={class:"container relative h-full py-2 mx-auto sm:px-10"},y={class:"flex h-full"},L={class:"hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12"},k={class:"my-auto"},T={class:"mt-10 font-medium text-white -enter-x"},C={class:"inline-block mt-4 text-3xl"},A={class:"mt-5 font-normal text-white text-md dark:text-gray-500 -enter-x"},P={class:"flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12"};F.render=function(e,o,s,r,t,l){const i=f("AppLocalePicker"),n=f("AppDarkModeToggle"),a=f("AppLogo"),m=f("LoginForm"),d=f("ForgetPasswordForm"),x=f("RegisterForm"),p=f("MobileForm"),c=f("QrCodeForm");return g(),u("div",{class:[e.prefixCls,"relative w-full h-full px-4"]},[!e.sessionTimeout&&e.showLocale?(g(),u(i,{key:0,class:"absolute text-white top-4 right-4 enter-x xl:text-gray-600",showText:!1})):w("",!0),e.sessionTimeout?w("",!0):(g(),u(n,{key:1,class:"absolute top-3 right-7 enter-x"})),b("span",v,[b(a,{alwaysShowTitle:!0})]),b("div",j,[b("div",y,[b("div",L,[b(a,{class:"-enter-x"}),b("div",k,[b("img",{alt:e.title,src:"/assets/login-box-bg.9027741f.svg",class:"w-1/2 -mt-16 -enter-x"},null,8,["alt"]),b("div",T,[b("span",C,h(e.t("sys.login.signInTitle")),1)]),b("div",A,h(e.t("sys.login.signInDesc")),1)])]),b("div",P,[b("div",{class:[`${e.prefixCls}-form`,"\r\n              relative\r\n              w-full\r\n              px-5\r\n              py-8\r\n              mx-auto\r\n              my-auto\r\n              rounded-md\r\n              shadow-md\r\n              xl:ml-16 xl:bg-transparent\r\n              sm:px-8\r\n              xl:p-4 xl:shadow-none\r\n              sm:w-3/4\r\n              lg:w-2/4\r\n              xl:w-auto\r\n              enter-x\r\n            "]},[b(m),b(d),b(x),b(p),b(c)],2)])])])],2)};export default F;
