import{k as e,bA as s,K as n,o as t,n as r,q as a,s as i,N as p,x as o}from"./vendor.56d2c57f.js";/* empty css              */import{c as m}from"./index.574e7466.js";import{b as u}from"./index.5c776293.js";import"./useDrawer.05668bc1.js";/* empty css              *//* empty css              */import"./createAsyncComponent.49468e34.js";import"./useFrameKeepAlive.6f9a3db5.js";var d=e({name:"InputNumberItem",components:{InputNumber:s},props:{event:{type:Number},title:{type:String}},setup(e){const{prefixCls:s}=m("setting-input-number-item");return{prefixCls:s,handleChange:function(s){e.event&&u(e.event,s)}}}});const l=o()(((e,s,o,m,u,d)=>{const l=n("InputNumber");return t(),r("div",{class:e.prefixCls},[a("span",null,i(e.title),1),a(l,p(e.$attrs,{size:"small",class:`${e.prefixCls}-input-number`,onChange:e.handleChange}),null,16,["class","onChange"])],2)}));d.render=l,d.__scopeId="data-v-212dae16";export default d;