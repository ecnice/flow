import{_ as e,a as l}from"./BasicForm.8a33b99c.js";import{ag as o,h as a}from"./index.4926e6da.js";import{P as n}from"./index.0aed0d9d.js";import{o as i,t as s}from"./tree.6df3f8e0.js";import{y as p,r as t,j as r,u as d,R as c,Z as m,B as u,F as f,a2 as b,v as h}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./index.0795d69f.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.dbded6ea.js";const v=[{id:"guangdong",label:"广东省",value:"1",key:"1"},{id:"jiangsu",label:"江苏省",value:"2",key:"2"}],P={guangdong:[{label:"珠海市",value:"1",key:"1"},{label:"深圳市",value:"2",key:"2"},{label:"广州市",value:"3",key:"3"}],jiangsu:[{label:"南京市",value:"1",key:"1"},{label:"无锡市",value:"2",key:"2"},{label:"苏州市",value:"3",key:"3"}]},j=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},componentProps:({schema:e,formModel:l})=>({placeholder:"自定义placeholder",onChange:e=>{}}),renderComponentContent:()=>({prefix:()=>"pSlot",suffix:()=>"sSlot"})},{field:"field2",component:"Input",label:"带后缀",defaultValue:"111",colProps:{span:8},componentProps:{onChange:e=>{}},suffix:"天"},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8}},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]}},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field8",component:"Checkbox",label:"字段8",colProps:{span:8},renderComponentContent:"Check"},{field:"field9",component:"Switch",label:"字段9",colProps:{span:8}},{field:"field10",component:"RadioButtonGroup",label:"字段10",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]}},{field:"field11",component:"Cascader",label:"字段11",colProps:{span:8},componentProps:{options:[{value:"zhejiang",label:"Zhejiang",children:[{value:"hangzhou",label:"Hangzhou",children:[{value:"xihu",label:"West Lake"}]}]},{value:"jiangsu",label:"Jiangsu",children:[{value:"nanjing",label:"Nanjing",children:[{value:"zhonghuamen",label:"Zhong Hua Men"}]}]}]}},{field:"field30",component:"ApiSelect",label:"懒加载远程下拉",required:!0,componentProps:{api:i,params:{id:1},resultField:"list",labelField:"name",valueField:"id",immediate:!1,onChange:e=>{},onOptionsChange:e=>{}},colProps:{span:8},defaultValue:"0"},{field:"field31",component:"Input",label:"下拉本地搜索",helpMessage:["ApiSelect组件","远程数据源本地搜索","只发起一次请求获取所有选项"],required:!0,slot:"localSearch",colProps:{span:8},defaultValue:"0"},{field:"field32",component:"Input",label:"下拉远程搜索",helpMessage:["ApiSelect组件","将关键词发送到接口进行远程搜索"],required:!0,slot:"remoteSearch",colProps:{span:8},defaultValue:"0"},{field:"field33",component:"ApiTreeSelect",label:"远程下拉树",helpMessage:["ApiTreeSelect组件","使用接口提供的数据生成选项"],required:!0,componentProps:{api:s,resultField:"list"},colProps:{span:8}},{field:"field20",component:"InputNumber",label:"字段20",required:!0,colProps:{span:8}},{field:"province",component:"Select",label:"省份",colProps:{span:8},componentProps:({formModel:e,formActionType:l})=>({options:v,placeholder:"省份与城市联动",onChange:o=>{let a=1==o?P[v[0].id]:P[v[1].id];void 0===o&&(a=[]),e.city=void 0;const{updateSchema:n}=l;n({field:"city",componentProps:{options:a}})}})},{field:"city",component:"Select",label:"城市",colProps:{span:8},componentProps:{options:[],placeholder:"省份与城市联动"}},{field:"field21",component:"Slider",label:"字段21",componentProps:{min:0,max:100,range:!0,marks:{20:"20°C",60:"60°C"}},colProps:{span:8}},{field:"field22",component:"Rate",label:"字段22",defaultValue:3,colProps:{span:8},componentProps:{disabled:!1,allowHalf:!0}}];var g=p({components:{BasicForm:e,CollapseContainer:o,PageWrapper:n,ApiSelect:l},setup(){const e=t(null),{createMessage:l}=a(),o=t(""),n=r((()=>({keyword:d(o)})));return{schemas:j,optionsListApi:i,onSearch:c((function(e){o.value=e}),300),searchParams:n,handleReset:()=>{o.value=""},handleSubmit:e=>{l.success("click search,values:"+JSON.stringify(e))},check:e}}});g.render=function(e,l,o,a,n,i){const s=m("ApiSelect"),p=m("BasicForm"),t=m("CollapseContainer"),r=m("PageWrapper");return u(),f(r,{title:"表单基础示例",contentFullHeight:""},{default:b((()=>[h(t,{title:"基础示例"},{default:b((()=>[h(p,{autoFocusFirstItem:"",labelWidth:200,schemas:e.schemas,actionColOptions:{span:24},onSubmit:e.handleSubmit,onReset:e.handleReset},{localSearch:b((({model:l,field:o})=>[h(s,{api:e.optionsListApi,showSearch:"",value:l[o],"onUpdate:value":e=>l[o]=e,optionFilterProp:"label",resultField:"list",labelField:"name",valueField:"id"},null,8,["api","value","onUpdate:value"])])),remoteSearch:b((({model:l,field:o})=>[h(s,{api:e.optionsListApi,showSearch:"",value:l[o],"onUpdate:value":e=>l[o]=e,filterOption:!1,resultField:"list",labelField:"name",valueField:"id",params:e.searchParams,onSearch:e.onSearch},null,8,["api","value","onUpdate:value","params","onSearch"])])),_:1},8,["schemas","onSubmit","onReset"])])),_:1})])),_:1})};export default g;
