import{o as e}from"./index.b41e2c0e.js";function t({url:t,target:n="_blank",fileName:o}){const r=window.navigator.userAgent.toLowerCase().indexOf("chrome")>-1,a=window.navigator.userAgent.toLowerCase().indexOf("safari")>-1;if(/(iP)/g.test(window.navigator.userAgent))return!1;if(r||a){const e=document.createElement("a");if(e.href=t,e.target=n,void 0!==e.download&&(e.download=o||t.substring(t.lastIndexOf("/")+1,t.length)),document.createEvent){const t=document.createEvent("MouseEvents");return t.initEvent("click",!0,!0),e.dispatchEvent(t),!0}}return-1===t.indexOf("?")&&(t+="?download"),e(t,{target:n}),!0}export{t as d};
