import{A as r,aS as i,bA as u,a0 as n,B as p,a1 as _,a5 as d,w as f}from"./vendor.5eb38889.js";import{_ as l,r as m}from"./index.142c38e7.js";const B=r({name:"ActionButtons",components:{Button:i,LeftOutlined:u},setup(t,{emit:s}){const o=m();function e(){history.state.back?history.back():o("/process/launch")}return{doBack:e}}});function k(t,s,o,e,h,C){const a=n("LeftOutlined"),c=n("Button");return p(),_(c,{onClick:t.doBack,type:"link",title:"\u8FD4\u56DE"},{icon:d(()=>[f(a)]),_:1},8,["onClick"])}var $=l(B,[["render",k]]);export{$ as default};
