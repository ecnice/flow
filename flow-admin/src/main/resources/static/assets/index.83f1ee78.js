import{ag as e,a$ as a,h as t}from"./index.a33a5e4d.js";import{P as n}from"./index.cf1d4223.js";import{y as o,r as s,u as r,Z as i,B as l,F as p,a2 as u,v as d,a9 as c}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.d4b428eb.js";var f=o({name:"Copy",components:{CollapseContainer:e,PageWrapper:n},setup(){const e=s(""),{createMessage:n}=t(),{clipboardRef:o,copiedRef:i}=a();return{handleCopy:function(){const a=r(e);a?(o.value=a,r(i)&&n.warning("copy success！")):n.warning("请输入要拷贝的内容！")},value:e}}});const m={class:"flex justify-center"},v=c(" Copy ");f.render=function(e,a,t,n,o,s){const r=i("a-input"),c=i("a-button"),f=i("CollapseContainer"),C=i("PageWrapper");return l(),p(C,{title:"文本复制示例"},{default:u((()=>[d(f,{class:"w-full h-32 bg-white rounded-md",title:"Copy Example"},{default:u((()=>[d("div",m,[d(r,{placeholder:"请输入",value:e.value,"onUpdate:value":a[1]||(a[1]=a=>e.value=a)},null,8,["value"]),d(c,{type:"primary",onClick:e.handleCopy},{default:u((()=>[v])),_:1},8,["onClick"])])])),_:1})])),_:1})};export default f;
