import{A as r,bb as n,r as i,S as s,a0 as l,B as d,a1 as f,a5 as u,H as m,X as p}from"./vendor.ff87b2f6.js";/* empty css               *//* empty css               *//* empty css               */import{u as h}from"./useECharts.191530ec.js";import{_ as c}from"./index.960d5979.js";const b=r({components:{Card:n},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"300px"}},setup(e){const a=i(null),{setOptions:t}=h(a);return s(()=>e.loading,()=>{e.loading||t({tooltip:{trigger:"item",formatter:"{a} <br/>{b} : {c} ({d}%)"},legend:{show:!0,orient:"vertical",left:"right",data:["S","A","B","C","D","E"]},series:[{color:["#00eebb","#ffeebb","#ff6600","#b6a2de","#fbb000","#00c7c9"],name:"\u4E2A\u4EBA\u7EE9\u6548",type:"pie",avoidLabelOverlap:!1,itemStyle:{borderRadius:4,borderColor:"#fff",borderWidth:2},label:{show:!0,position:"left"},emphasis:{label:{show:!0,fontSize:"12",fontWeight:"bold"},shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"},labelLine:{show:!1},data:[{value:1048,name:"S"},{value:735,name:"A"},{value:580,name:"B"},{value:484,name:"C"},{value:334,name:"D"},{value:484,name:"E"}],animationType:"scale",animationEasing:"exponentialInOut",animationDelay:function(){return Math.random()*100}}]})},{immediate:!0}),{chartRef:a}}});function g(e,a,t,v,E,w){const o=l("Card");return d(),f(o,{title:"\u4E2A\u4EBA\u7EE9\u6548",loading:e.loading},{default:u(()=>[m("div",{ref:"chartRef",style:p({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var A=c(b,[["render",g]]);export{A as default};
