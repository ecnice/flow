var E=(C,r,i)=>new Promise((u,x)=>{var o=n=>{try{m(i.next(n))}catch(f){x(f)}},b=n=>{try{m(i.throw(n))}catch(f){x(f)}},m=n=>n.done?u(n.value):Promise.resolve(n.value).then(o,b);m((i=i.apply(C,r)).next())});import{A as M,aY as T,an as $,r as k,P as N,j as A,u as e,B as G,D as P,F as j,G as D,w as s,a5 as a,aZ as K,ad as d,J as c,aS as p,a_ as O,H as U,a$ as V,b0 as q,b1 as W,b2 as H,b3 as J,K as Q,b4 as Y,aa as Z,b5 as X,b6 as ee}from"./vendor.5eb38889.js";/* empty css              *//* empty css               *//* empty css               *//* empty css               */import{u as se,a as ae,L as y,_ as te,b as oe}from"./LoginFormTitle.72b73c97.js";import{e as le,a as ne,f as re,h as ie}from"./index.142c38e7.js";const xe=M({setup(C){const r=X,i=ee,u=T.Item,x=$.Password,{t:o}=le(),{notification:b,createErrorModal:m}=ie(),{prefixCls:n}=ne("login"),f=re(),{setLoginState:v,getLoginState:L}=se(),{getFormRules:B}=ae(),_=k(),S=k(!1),F=k(!1),g=N({account:"10000",password:"888888"}),{validForm:h}=oe(_),I=A(()=>e(L)===y.LOGIN);function R(){return E(this,null,function*(){const w=yield h();if(!!w)try{S.value=!0;const t=yield f.login({password:w.password,username:w.account,mode:"none"});t&&b.success({message:o("sys.login.loginSuccessTitle"),description:`${o("sys.login.loginSuccessDesc")}: ${t.realName}`,duration:3})}catch(t){m({title:o("sys.api.errorTip"),content:t.message||o("sys.api.networkExceptionMsg"),getContainer:()=>document.body.querySelector(`.${n}`)||document.body})}finally{S.value=!1}})}return(w,t)=>(G(),P(Z,null,[j(s(te,{class:"enter-x"},null,512),[[D,e(I)]]),j(s(e(T),{class:"p-4 enter-x",model:e(g),rules:e(B),ref:(l,z)=>{z.formRef=l,_.value=l},onKeypress:Y(R,["enter"])},{default:a(()=>[s(e(u),{name:"account",class:"enter-x"},{default:a(()=>[s(e($),{size:"large",value:e(g).account,"onUpdate:value":t[0]||(t[0]=l=>e(g).account=l),placeholder:e(o)("sys.login.userName"),class:"fix-auto-fill"},null,8,["value","placeholder"])]),_:1}),s(e(u),{name:"password",class:"enter-x"},{default:a(()=>[s(e(x),{size:"large",visibilityToggle:"",value:e(g).password,"onUpdate:value":t[1]||(t[1]=l=>e(g).password=l),placeholder:e(o)("sys.login.password")},null,8,["value","placeholder"])]),_:1}),s(e(i),{class:"enter-x"},{default:a(()=>[s(e(r),{span:12},{default:a(()=>[s(e(u),null,{default:a(()=>[s(e(K),{checked:F.value,"onUpdate:checked":t[2]||(t[2]=l=>F.value=l),size:"small"},{default:a(()=>[d(c(e(o)("sys.login.rememberMe")),1)]),_:1},8,["checked"])]),_:1})]),_:1}),s(e(r),{span:12},{default:a(()=>[s(e(u),{style:{"text-align":"right"}},{default:a(()=>[s(e(p),{type:"link",size:"small",onClick:t[3]||(t[3]=l=>e(v)(e(y).RESET_PASSWORD))},{default:a(()=>[d(c(e(o)("sys.login.forgetPassword")),1)]),_:1})]),_:1})]),_:1})]),_:1}),s(e(u),{class:"enter-x"},{default:a(()=>[s(e(p),{type:"primary",size:"large",block:"",onClick:R,loading:S.value},{default:a(()=>[d(c(e(o)("sys.login.loginButton")),1)]),_:1},8,["loading"])]),_:1}),s(e(i),{class:"enter-x"},{default:a(()=>[s(e(r),{md:8,xs:24},{default:a(()=>[s(e(p),{block:"",onClick:t[4]||(t[4]=l=>e(v)(e(y).MOBILE))},{default:a(()=>[d(c(e(o)("sys.login.mobileSignInFormTitle")),1)]),_:1})]),_:1}),s(e(r),{md:8,xs:24,class:"!my-2 !md:my-0 xs:mx-0 md:mx-2"},{default:a(()=>[s(e(p),{block:"",onClick:t[5]||(t[5]=l=>e(v)(e(y).QR_CODE))},{default:a(()=>[d(c(e(o)("sys.login.qrSignInFormTitle")),1)]),_:1})]),_:1}),s(e(r),{md:7,xs:24},{default:a(()=>[s(e(p),{block:"",onClick:t[6]||(t[6]=l=>e(v)(e(y).REGISTER))},{default:a(()=>[d(c(e(o)("sys.login.registerButton")),1)]),_:1})]),_:1})]),_:1}),s(e(O),{class:"enter-x"},{default:a(()=>[d(c(e(o)("sys.login.otherSignIn")),1)]),_:1}),U("div",{class:Q(["flex justify-evenly enter-x",`${e(n)}-sign-in-way`])},[s(e(V)),s(e(q)),s(e(W)),s(e(H)),s(e(J))],2)]),_:1},8,["model","rules","onKeypress"]),[[D,e(I)]])],64))}});export{xe as default};
