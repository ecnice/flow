var p=Object.defineProperty;var o=Object.getOwnPropertySymbols;var l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;var i=(r,e,t)=>e in r?p(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t,u=(r,e)=>{for(var t in e||(e={}))l.call(e,t)&&i(r,t,e[t]);if(o)for(var t of o(e))c.call(e,t)&&i(r,t,e[t]);return r};import{u as d}from"./useECharts.7b226300.js";import{b as h}from"./props.f48aca0b.js";import{A as m,r as f,_ as b,B as x,D as y,X as g}from"./vendor.5879c5ca.js";import"./index.aeb7d9f7.js";const C=m({props:u({},h),setup(r){const e=f(null),{setOptions:t}=d(e);return b(()=>{t({tooltip:{trigger:"axis",axisPointer:{lineStyle:{width:1,color:"#019680"}}},grid:{left:"1%",right:"1%",top:"2  %",bottom:0,containLabel:!0},xAxis:{type:"category",data:["1\u6708","2\u6708","3\u6708","4\u6708","5\u6708","6\u6708","7\u6708","8\u6708","9\u6708","10\u6708","11\u6708","12\u6708"]},yAxis:{type:"value",max:8e3,splitNumber:4},series:[{data:[3e3,2e3,3333,5e3,3200,4200,3200,2100,3e3,5100,6e3,3200,4800],type:"bar",barMaxWidth:80}]})}),(a,j)=>(x(),y("div",{ref:(s,n)=>{n.chartRef=s,e.value=s},style:g({height:a.height,width:a.width})},null,4))}});export{C as default};
