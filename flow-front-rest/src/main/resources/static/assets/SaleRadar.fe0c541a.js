import{A as s,bb as r,r as i,S as n,a0 as d,B as l,a1 as m,a5 as p,H as u,X as c}from"./vendor.5eb38889.js";/* empty css               *//* empty css               *//* empty css               */import{u as f}from"./useECharts.8bda4503.js";import{_ as h}from"./index.eb81839e.js";const x=s({components:{Card:r},props:{loading:Boolean,width:{type:String,default:"100%"},height:{type:String,default:"400px"}},setup(e){const t=i(null),{setOptions:a}=f(t);return n(()=>e.loading,()=>{e.loading||a({legend:{bottom:0,data:["Visits","Sales"]},tooltip:{},radar:{radius:"60%",splitNumber:8,indicator:[{text:"2017",max:100},{text:"2017",max:100},{text:"2018",max:100},{text:"2019",max:100},{text:"2020",max:100},{text:"2021",max:100}]},series:[{type:"radar",symbolSize:0,areaStyle:{shadowBlur:0,shadowColor:"rgba(0,0,0,.2)",shadowOffsetX:0,shadowOffsetY:10,opacity:1},data:[{value:[90,50,86,40,50,20],name:"Visits",itemStyle:{color:"#b6a2de"}},{value:[70,75,70,76,20,85],name:"Sales",itemStyle:{color:"#67e0e3"}}]}]})},{immediate:!0}),{chartRef:t}}});function g(e,t,a,S,b,y){const o=d("Card");return l(),m(o,{title:"\u9500\u552E\u7EDF\u8BA1",loading:e.loading},{default:p(()=>[u("div",{ref:"chartRef",style:c({width:e.width,height:e.height})},null,4)]),_:1},8,["loading"])}var E=h(x,[["render",g]]);export{E as default};
