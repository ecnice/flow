import{o as r}from"./index.aeb7d9f7.js";import{u as c,d as l}from"./base64Conver.bb012c73.js";function m(e,o,a,n){c(e).then(d=>{f(d,o,a,n)})}function f(e,o,a,n){const d=l(e);u(d,o,a,n)}function u(e,o,a,n){const d=typeof n!="undefined"?[n,e]:[e],i=new Blob(d,{type:a||"application/octet-stream"}),s=window.URL.createObjectURL(i),t=document.createElement("a");t.style.display="none",t.href=s,t.setAttribute("download",o),typeof t.download=="undefined"&&t.setAttribute("target","_blank"),document.body.appendChild(t),t.click(),document.body.removeChild(t),window.URL.revokeObjectURL(s)}function p({url:e,target:o="_blank",fileName:a}){const n=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,d=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return console.error("Your browser does not support download!"),!1;if(n||d){const i=document.createElement("a");if(i.href=e,i.target=o,i.download!==void 0&&(i.download=a||e.substring(e.lastIndexOf("/")+1,e.length)),document.createEvent){const s=document.createEvent("MouseEvents");return s.initEvent("click",!0,!0),i.dispatchEvent(s),!0}}return e.indexOf("?")===-1&&(e+="?download"),r(e,{target:o}),!0}export{u as a,f as b,m as c,p as d};
