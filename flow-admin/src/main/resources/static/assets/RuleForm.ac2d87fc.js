var e=(e,o,i)=>new Promise(((s,l)=>{var r=e=>{try{a(i.next(e))}catch(o){l(o)}},t=e=>{try{a(i.throw(e))}catch(o){l(o)}},a=e=>e.done?s(e.value):Promise.resolve(e.value).then(r,t);a((i=i.apply(e,o)).next())}));import{_ as o}from"./BasicForm.8dd34761.js";import{u as i}from"./useForm.ba0f60da.js";import{ag as s,h as l}from"./index.63ccfb82.js";import{P as r}from"./index.19a7a7bf.js";import{i as t}from"./system.9d138647.js";import{y as a,Z as n,B as d,F as c,a2 as p,v as m,a9 as u}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.b3d678de.js";/* empty css              *//* empty css              *//* empty css              */import"./index.0433a71f.js";import"./useWindowSizeFn.564cf32e.js";/* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./download.41df5c96.js";import"./base64Conver.bb012c73.js";import"./index.c6f733ce.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useContentViewHeight.0b72030b.js";const f=[{field:"field1",component:"Input",label:"字段1",colProps:{span:8},required:!0},{field:"field2",component:"Input",label:"字段2",colProps:{span:8},required:!0},{field:"id",label:"id",required:!0,defaultValue:0,component:"InputNumber",show:!1},{field:"field3",component:"DatePicker",label:"字段3",colProps:{span:8},required:!0},{field:"field33",component:"DatePicker",label:"字段33",colProps:{span:8},componentProps:{valueFormat:"YYYY-MM-DD"},rules:[{required:!0,type:"string"}]},{field:"field44",component:"InputCountDown",label:"验证码",colProps:{span:8},required:!0},{field:"field4",component:"Select",label:"字段4",colProps:{span:8},componentProps:{mode:"multiple",options:[{label:"选项1",value:"1",key:"1"},{label:"选项2",value:"2",key:"2"}]},rules:[{required:!0,message:"请输入aa",type:"array"}]},{field:"field441",component:"Input",label:"自定义校验",colProps:{span:8},rules:[{required:!0,validator:(o,i)=>e(this,null,(function*(){return i?"1"===i?Promise.reject("值不能为1"):Promise.resolve():Promise.reject("值不能为空")})),trigger:"change"}]},{field:"field5",component:"CheckboxGroup",label:"字段5",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0}]},{field:"field7",component:"RadioGroup",label:"字段7",colProps:{span:8},componentProps:{options:[{label:"选项1",value:"1"},{label:"选项2",value:"2"}]},rules:[{required:!0,message:"覆盖默认生成的校验信息"}]},{field:"field8",component:"Input",label:"后端异步验证",colProps:{span:8},helpMessage:["本字段演示异步验证","本地规则：必须填写","后端规则：不能包含admin"],rules:[{required:!0,message:"请输入数据"},{validator:(e,o)=>new Promise(((e,i)=>{t(o).then((()=>e())).catch((e=>{i(e.message||"验证失败")}))}))}]}];var b=a({components:{BasicForm:o,CollapseContainer:s,PageWrapper:r},setup(){const{createMessage:o}=l(),[s,{validateFields:r,clearValidate:t,getFieldsValue:a,resetFields:n,setFieldsValue:d}]=i({labelWidth:120,schemas:f,actionColOptions:{span:24}});return{register:s,schemas:f,handleSubmit:e=>{o.success("click search,values:"+JSON.stringify(e))},getFormValues:function(){const e=a();o.success("values:"+JSON.stringify(e))},setFormValues:function(){d({field1:1111,field5:["1"],field7:"1",field33:"2020-12-12",field3:"2020-12-12"})},validateForm:function(){return e(this,null,(function*(){try{yield r()}catch(e){}}))},resetValidate:function(){return e(this,null,(function*(){t()}))},resetFields:n}}});const j={class:"mb-4"},v=u(" 手动校验表单 "),P=u(" 清空校验信息 "),g=u(" 获取表单值 "),x=u(" 设置表单值 "),h=u(" 重置 ");b.render=function(e,o,i,s,l,r){const t=n("a-button"),a=n("BasicForm"),u=n("CollapseContainer"),f=n("PageWrapper");return d(),c(f,{title:"表单校验示例"},{default:p((()=>[m("div",j,[m(t,{onClick:e.validateForm,class:"mr-2"},{default:p((()=>[v])),_:1},8,["onClick"]),m(t,{onClick:e.resetValidate,class:"mr-2"},{default:p((()=>[P])),_:1},8,["onClick"]),m(t,{onClick:e.getFormValues,class:"mr-2"},{default:p((()=>[g])),_:1},8,["onClick"]),m(t,{onClick:e.setFormValues,class:"mr-2"},{default:p((()=>[x])),_:1},8,["onClick"]),m(t,{onClick:e.resetFields,class:"mr-2"},{default:p((()=>[h])),_:1},8,["onClick"])]),m(u,{title:"表单校验"},{default:p((()=>[m(a,{onRegister:e.register,onSubmit:e.handleSubmit},null,8,["onRegister","onSubmit"])])),_:1})])),_:1})};export default b;
