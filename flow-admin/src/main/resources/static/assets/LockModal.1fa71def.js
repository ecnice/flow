import{c as e,f as r,e as s}from"./index.7fecfddd.js";import{B as a,a as o}from"./index.f287750a.js";import{_ as t}from"./BasicForm.a98eb535.js";import{u as i}from"./useForm.7ff3fa79.js";import{u as n}from"./lock.a6eaee00.js";import{h as d}from"./header.d801b988.js";import{j as l,i as c,K as m,o as f,m as p,Q as u,n as x,q as j,Y as b,N as h}from"./vendor.686fd1d4.js";import"./useWindowSizeFn.d82e06bf.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.099c2235.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c870abce.js";import"./base64Conver.bb012c73.js";import"./index.d2ff26f2.js";var v=l({name:"LockModal",components:{BasicModal:a,BasicForm:t},setup(){const{t:a}=s(),{prefixCls:t}=e("header-lock-modal"),l=r(),m=n(),f=c((()=>{var e;return null==(e=l.getUserInfo)?void 0:e.realName})),[p,{closeModal:u}]=o(),[x,{validateFields:j,resetFields:b}]=i({showActionButtonGroup:!1,schemas:[{field:"password",label:a("layout.header.lockScreenPassword"),component:"InputPassword",required:!0}]});return{t:a,prefixCls:t,getRealName:f,register:p,registerForm:x,handleLock:function(){return e=this,r=null,s=function*(){const e=(yield j()).password;u(),m.setLockInfo({isLock:!0,pwd:e}),yield b()},new Promise(((a,o)=>{var t=e=>{try{n(s.next(e))}catch(r){o(r)}},i=e=>{try{n(s.throw(e))}catch(r){o(r)}},n=e=>e.done?a(e.value):Promise.resolve(e.value).then(t,i);n((s=s.apply(e,r)).next())}));var e,r,s},avatar:c((()=>{const{avatar:e}=l.getUserInfo;return e||d}))}}});v.render=function(e,r,s,a,o,t){const i=m("BasicForm"),n=m("a-button"),d=m("BasicModal");return f(),p(d,h({footer:null,title:e.t("layout.header.lockScreen")},e.$attrs,{class:e.prefixCls,onRegister:e.register}),{default:u((()=>[x("div",{class:`${e.prefixCls}__entry`},[x("div",{class:`${e.prefixCls}__header`},[x("img",{src:e.avatar,class:`${e.prefixCls}__header-img`},null,10,["src"]),x("p",{class:`${e.prefixCls}__header-name`},j(e.getRealName),3)],2),x(i,{onRegister:e.registerForm},null,8,["onRegister"]),x("div",{class:`${e.prefixCls}__footer`},[x(n,{type:"primary",block:"",class:"mt-2",onClick:e.handleLock},{default:u((()=>[b(j(e.t("layout.header.lockScreenBtn")),1)])),_:1},8,["onClick"])],2)],2)])),_:1},16,["title","class","onRegister"])};export default v;