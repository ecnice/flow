var h=Object.defineProperty;var P=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,I=Object.prototype.propertyIsEnumerable;var b=(e,o,s)=>o in e?h(e,o,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[o]=s,y=(e,o)=>{for(var s in o||(o={}))T.call(o,s)&&b(e,s,o[s]);if(P)for(var s of P(o))I.call(o,s)&&b(e,s,o[s]);return e};var R=(e,o,s)=>new Promise((r,a)=>{var g=n=>{try{u(s.next(n))}catch(t){a(t)}},_=n=>{try{u(s.throw(n))}catch(t){a(t)}},u=n=>n.done?r(n.value):Promise.resolve(n.value).then(g,_);u((s=s.apply(e,o)).next())});import{b as O}from"./index.aeb7d9f7.js";import{r as v,j as l,u as c,A as w,B as x,D as E,J as j}from"./vendor.5879c5ca.js";var i;(function(e){e[e.LOGIN=0]="LOGIN",e[e.REGISTER=1]="REGISTER",e[e.RESET_PASSWORD=2]="RESET_PASSWORD",e[e.MOBILE=3]="MOBILE",e[e.QR_CODE=4]="QR_CODE"})(i||(i={}));const F=v(0);function B(){function e(r){F.value=r}const o=l(()=>F.value);function s(){e(0)}return{setLoginState:e,getLoginState:o,handleBackLogin:s}}function D(e){function o(){return R(this,null,function*(){const s=c(e);return s?yield s.validate():void 0})}return{validForm:o}}function k(e){const{t:o}=O(),s=l(()=>f(o("sys.login.accountPlaceholder"))),r=l(()=>f(o("sys.login.passwordPlaceholder"))),a=l(()=>f(o("sys.login.smsPlaceholder"))),g=l(()=>f(o("sys.login.mobilePlaceholder"))),_=(t,d)=>R(this,null,function*(){return d?Promise.resolve():Promise.reject(o("sys.login.policyPlaceholder"))}),u=t=>(d,m)=>R(this,null,function*(){return m?m!==t?Promise.reject(o("sys.login.diffPwd")):Promise.resolve():Promise.reject(o("sys.login.passwordPlaceholder"))});return{getFormRules:l(()=>{const t=c(s),d=c(r),m=c(a),S=c(g),p={sms:m,mobile:S};switch(c(F)){case 1:return y({account:t,password:d,confirmPassword:[{validator:u(e==null?void 0:e.password),trigger:"change"}],policy:[{validator:_,trigger:"change"}]},p);case 2:return y({account:t},p);case 3:return p;default:return{account:t,password:d}}})}}function f(e){return[{required:!0,message:e,trigger:"change"}]}const G={class:"mb-3 text-2xl font-bold text-center xl:text-3xl enter-x xl:text-left"},A=w({setup(e){const{t:o}=O(),{getLoginState:s}=B(),r=l(()=>({[i.RESET_PASSWORD]:o("sys.login.forgetFormTitle"),[i.LOGIN]:o("sys.login.signInFormTitle"),[i.REGISTER]:o("sys.login.signUpFormTitle"),[i.MOBILE]:o("sys.login.mobileSignInFormTitle"),[i.QR_CODE]:o("sys.login.qrSignInFormTitle")})[c(s)]);return(a,g)=>(x(),E("h2",G,j(c(r)),1))}});var N=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:A});export{i as L,A as _,k as a,D as b,N as c,B as u};
