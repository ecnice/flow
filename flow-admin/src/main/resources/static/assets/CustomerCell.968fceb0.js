import{B as l,T as c}from"./TableImg.513742d5.js";import"./BasicForm.0ba2e15f.js";import{u as p}from"./useTable.6e5baa13.js";import{A as x,ba as g,bA as F,a0 as i,B as j,D as b,w as s,a6 as t,ae as a,J as o}from"./vendor.5879c5ca.js";/* empty css               *//* empty css                */import{d as _}from"./table.b682515f.js";import{_ as E}from"./index.e84e956c.js";/* empty css                *//* empty css              */import"./useForm.696aa965.js";import"./index.ea14bdae.js";/* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.ccc8749b.js";/* empty css                *//* empty css                */import"./uuid.2b29000c.js";import"./index.c505e96f.js";/* empty css               */import"./useSortable.a10c06e7.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.8b70aabd.js";/* empty css                *//* empty css                *//* empty css                */import"./download.e6dbd100.js";import"./base64Conver.bb012c73.js";import"./index.e83a4b09.js";const T=[{title:"ID",dataIndex:"id",slots:{customRender:"id"}},{title:"\u5934\u50CF",dataIndex:"avatar",width:100,slots:{customRender:"avatar"}},{title:"\u5206\u7C7B",dataIndex:"category",width:80,align:"center",defaultHidden:!0,slots:{customRender:"category"}},{title:"\u59D3\u540D",dataIndex:"name",width:120},{title:"\u56FE\u7247\u5217\u88681",dataIndex:"imgArr",helpMessage:["\u8FD9\u662F\u7B80\u5355\u6A21\u5F0F\u7684\u56FE\u7247\u5217\u8868","\u53EA\u4F1A\u663E\u793A\u4E00\u5F20\u5728\u8868\u683C\u4E2D","\u4F46\u70B9\u51FB\u53EF\u9884\u89C8\u591A\u5F20\u56FE\u7247"],width:140,slots:{customRender:"img"}},{title:"\u7167\u7247\u5217\u88682",dataIndex:"imgs",width:160,slots:{customRender:"imgs"}},{title:"\u5730\u5740",dataIndex:"address"},{title:"\u7F16\u53F7",dataIndex:"no",slots:{customRender:"no"}},{title:"\u5F00\u59CB\u65F6\u95F4",dataIndex:"beginTime"},{title:"\u7ED3\u675F\u65F6\u95F4",dataIndex:"endTime"}],f=x({components:{BasicTable:l,TableImg:c,Tag:g,Avatar:F},setup(){const[u]=p({title:"\u81EA\u5B9A\u4E49\u5217\u5185\u5BB9",titleHelpMessage:"\u8868\u683C\u4E2D\u6240\u6709\u5934\u50CF\u3001\u56FE\u7247\u5747\u4E3Amock\u751F\u6210\uFF0C\u4EC5\u7528\u4E8E\u6F14\u793A\u56FE\u7247\u5360\u4F4D",api:_,columns:T,bordered:!0,showTableSetting:!0});return{registerTable:u}}}),A={class:"p-4"};function B(u,C,I,h,v,w){const r=i("Tag"),d=i("Avatar"),n=i("TableImg"),m=i("BasicTable");return j(),b("div",A,[s(m,{onRegister:u.registerTable},{id:t(({record:e})=>[a(" ID: "+o(e.id),1)]),no:t(({record:e})=>[s(r,{color:"green"},{default:t(()=>[a(o(e.no),1)]),_:2},1024)]),avatar:t(({record:e})=>[s(d,{size:60,src:e.avatar},null,8,["src"])]),img:t(({text:e})=>[s(n,{size:60,simpleShow:!0,imgList:e},null,8,["imgList"])]),imgs:t(({text:e})=>[s(n,{size:60,imgList:e},null,8,["imgList"])]),category:t(({record:e})=>[s(r,{color:"green"},{default:t(()=>[a(o(e.no),1)]),_:2},1024)]),_:1},8,["onRegister"])])}var ne=E(f,[["render",B]]);export{ne as default};
