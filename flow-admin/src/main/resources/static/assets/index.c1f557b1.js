import{B as j,A as x}from"./BasicForm.6afa01de.js";import{_ as k,ah as y,h as w}from"./index.9eb02b52.js";import{P as R}from"./index.77f474a0.js";import{o as B,t as _}from"./tree.fbd69f78.js";import{r as p,j as f,n as E,u as r,A as M,bD as O,T as V,a0 as c,B as U,a1 as q,a6 as t,w as i}from"./vendor.7bee64cc.js";/* empty css               *//* empty css               *//* empty css               *//* empty css                *//* empty css              *//* empty css               *//* empty css                *//* empty css                */import"./index.1445cecb.js";/* empty css                *//* empty css                *//* empty css                */import"./index.30115123.js";import"./useWindowSizeFn.30e15ddc.js";/* empty css                */import"./uuid.2b29000c.js";import"./download.78bd314d.js";import"./base64Conver.bb012c73.js";import"./index.83641cbd.js";/* empty css                *//* empty css                */import"./useContentViewHeight.52836077.js";const C=p([]),A=p([]),b=p([]);for(let e=1;e<10;e++)b.value.push({label:"\u9009\u9879"+e,value:`${e}`});const G=f(()=>E(r(b)).map(e=>(e.disabled=r(A).indexOf(e.value)!==-1,e))),$=f(()=>E(r(b)).map(e=>(e.disabled=r(C).indexOf(e.value)!==-1,e))),v=[{id:"guangdong",label:"\u5E7F\u4E1C\u7701",value:"1",key:"1"},{id:"jiangsu",label:"\u6C5F\u82CF\u7701",value:"2",key:"2"}],g={guangdong:[{label:"\u73E0\u6D77\u5E02",value:"1",key:"1"},{label:"\u6DF1\u5733\u5E02",value:"2",key:"2"},{label:"\u5E7F\u5DDE\u5E02",value:"3",key:"3"}],jiangsu:[{label:"\u5357\u4EAC\u5E02",value:"1",key:"1"},{label:"\u65E0\u9521\u5E02",value:"2",key:"2"},{label:"\u82CF\u5DDE\u5E02",value:"3",key:"3"}]},I=[{field:"divider-basic",component:"Divider",label:"\u57FA\u7840\u5B57\u6BB5"},{field:"field1",component:"Input",label:"\u5B57\u6BB51",colProps:{span:8},componentProps:({schema:e,formModel:a})=>(console.log("form:",e),console.log("formModel:",a),{placeholder:"\u81EA\u5B9A\u4E49placeholder",onChange:o=>{console.log(o)}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"\u5E26\u540E\u7F00",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{console.log(e)}},suffix:"\u5929"},{field:"field3",component:"DatePicker",label:"\u5B57\u6BB53",colProps:{span:8}},{field:"field4",component:"Select",label:"\u5B57\u6BB54",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1",key:"1"},{label:"\u9009\u98792",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"\u5B57\u6BB55",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"\u5B57\u6BB57",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field8",component:"Checkbox",label:"\u5B57\u6BB58",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"\u5B57\u6BB59",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"\u5B57\u6BB510",colProps:{span:8},componentProps:{options:[{label:"\u9009\u98791",value:"1"},{label:"\u9009\u98792",value:"2"}]}},{field:"field11",component:"Cascader",label:"\u5B57\u6BB511",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"divider-api-select",component:"Divider",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6F14\u793A"},{field:"field30",component:"ApiSelect",label:"\u61D2\u52A0\u8F7D\u8FDC\u7A0B\u4E0B\u62C9",required:!0,componentProps:{api:B,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!1,onChange:e=>{console.log("selected:",e)},onOptionsChange:e=>{console.log("get options",e.length,e)}},colProps:{span:8},defaultValue:"0"},{field:"field31",component:"Input",label:"\u4E0B\u62C9\u672C\u5730\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u8FDC\u7A0B\u6570\u636E\u6E90\u672C\u5730\u641C\u7D22","\u53EA\u53D1\u8D77\u4E00\u6B21\u8BF7\u6C42\u83B7\u53D6\u6240\u6709\u9009\u9879"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"Input",label:"\u4E0B\u62C9\u8FDC\u7A0B\u641C\u7D22",helpMessage:["ApiSelect\u7EC4\u4EF6","\u5C06\u5173\u952E\u8BCD\u53D1\u9001\u5230\u63A5\u53E3\u8FDB\u884C\u8FDC\u7A0B\u641C\u7D22"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"ApiTreeSelect",label:"\u8FDC\u7A0B\u4E0B\u62C9\u6811",helpMessage:["ApiTreeSelect\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:_,resultField:"list"},colProps:{span:8}},{field:"field34",component:"ApiRadioGroup",label:"\u8FDC\u7A0BRadio",helpMessage:["ApiRadioGroup\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:B,params:{count:2},resultField:"list",labelField:"name",valueField:"id"},defaultValue:"1",colProps:{span:8}},{field:"field35",component:"ApiRadioGroup",label:"\u8FDC\u7A0BRadio",helpMessage:["ApiRadioGroup\u7EC4\u4EF6","\u4F7F\u7528\u63A5\u53E3\u63D0\u4F9B\u7684\u6570\u636E\u751F\u6210\u9009\u9879"],required:!0,componentProps:{api:B,params:{count:2},resultField:"list",labelField:"name",valueField:"id",isBtn:!0},colProps:{span:8}},{field:"divider-linked",component:"Divider",label:"\u5B57\u6BB5\u8054\u52A8"},{field:"province",component:"Select",label:"\u7701\u4EFD",colProps:{span:8},componentProps:({formModel:e,formActionType:a})=>({options:v,placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8",onChange:o=>{let s=o==1?g[v[0].id]:g[v[1].id];o===void 0&&(s=[]),e.city=void 0;const{updateSchema:d}=a;d({field:"city",componentProps:{options:s}})}})},{field:"city",component:"Select",label:"\u57CE\u5E02",colProps:{span:8},componentProps:{options:[],placeholder:"\u7701\u4EFD\u4E0E\u57CE\u5E02\u8054\u52A8"}},{field:"divider-selects",component:"Divider",label:"\u4E92\u65A5\u591A\u9009",helpMessage:["\u4E24\u4E2ASelect\u5171\u7528\u6570\u636E\u6E90","\u4F46\u4E0D\u53EF\u9009\u62E9\u5BF9\u65B9\u5DF2\u9009\u4E2D\u7684\u9879\u76EE"]},{field:"selectA",component:"Select",label:"\u4E92\u65A5SelectA",slot:"selectA",defaultValue:[],colProps:{span:8}},{field:"selectB",component:"Select",label:"\u4E92\u65A5SelectB",slot:"selectB",defaultValue:[],colProps:{span:8}},{field:"divider-others",component:"Divider",label:"\u5176\u5B83"},{field:"field20",component:"InputNumber",label:"\u5B57\u6BB520",required:!0,colProps:{span:8}},{field:"field21",component:"Slider",label:"\u5B57\u6BB521",componentProps:{min:0,max:100,range:!0,marks:{20:"20\xB0C",60:"60\xB0C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"\u5B57\u6BB522",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}}],W=M({components:{BasicForm:j,CollapseContainer:y,PageWrapper:R,ApiSelect:x,ASelect:O},setup(){const e=p(null),{createMessage:a}=w(),o=p(""),s=f(()=>({keyword:r(o)}));function d(m){o.value=m}return{schemas:I,optionsListApi:B,optionsA:G,optionsB:$,valueSelectA:C,valueSelectB:A,onSearch:V(d,300),searchParams:s,handleReset:()=>{o.value=""},handleSubmit:m=>{a.success("click search,values:"+JSON.stringify(m))},check:e}}});function z(e,a,o,s,d,m){const F=c("a-select"),h=c("ApiSelect"),P=c("BasicForm"),D=c("CollapseContainer"),S=c("PageWrapper");return U(),q(S,{title:"\u8868\u5355\u57FA\u7840\u793A\u4F8B",contentFullHeight:""},{default:t(()=>[i(D,{title:"\u57FA\u7840\u793A\u4F8B"},{default:t(()=>[i(P,{autoFocusFirstItem:"",labelWidth:200,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit,onReset:e.handleReset},{selectA:t(({model:u,field:l})=>[i(F,{options:e.optionsA,mode:"multiple",value:u[l],"onUpdate:value":n=>u[l]=n,onChange:n=>e.valueSelectA=u[l],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),selectB:t(({model:u,field:l})=>[i(F,{options:e.optionsB,mode:"multiple",value:u[l],"onUpdate:value":n=>u[l]=n,onChange:n=>e.valueSelectB=u[l],allowClear:""},null,8,["options","value","onUpdate:value","onChange"])]),localSearch:t(({model:u,field:l})=>[i(h,{api:e.optionsListApi,showSearch:"",value:u[l],"onUpdate:value":n=>u[l]=n,optionFilterProp:"label",resultField:"list",labelField:"name",valueField:"id"},null,8,["api","value","onUpdate:value"])]),remoteSearch:t(({model:u,field:l})=>[i(h,{api:e.optionsListApi,showSearch:"",value:u[l],"onUpdate:value":n=>u[l]=n,filterOption:!1,resultField:"list",labelField:"name",valueField:"id",params:e.searchParams,onSearch:e.onSearch},null,8,["api","value","onUpdate:value","params","onSearch"])]),_:1},8,["schemas","onSubmit","onReset"])]),_:1})]),_:1})}var ve=k(W,[["render",z]]);export{ve as default};
