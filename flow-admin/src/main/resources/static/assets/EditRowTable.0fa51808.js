var e=(e,t,i)=>new Promise(((n,o)=>{var a=e=>{try{l(i.next(e))}catch(t){o(t)}},d=e=>{try{l(i.throw(e))}catch(t){o(t)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(a,d);l((i=i.apply(e,t)).next())}));import{_ as t}from"./TableImg.aff6a356.js";import{g as i}from"./BasicForm.8a33b99c.js";import{u as n}from"./useTable.b9ab9434.js";import{o,t as a}from"./tree.6df3f8e0.js";import{d}from"./table.f3d67d62.js";import{y as l,r,Z as s,B as m,F as p,v as c,a2 as u}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./useForm.64c4ba7e.js";import"./index.4926e6da.js";/* empty css              *//* empty css              *//* empty css              */import"./uuid.2b29000c.js";import"./useWindowSizeFn.564cf32e.js";import"./index.0795d69f.js";import"./onMountedOrActivated.8f899bfb.js";/* empty css              */import"./useSortable.4052c204.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */import"./index.115ee23a.js";/* empty css              *//* empty css              *//* empty css              */import"./download.c775db55.js";import"./base64Conver.bb012c73.js";import"./index.7ca90fad.js";const f=[{title:"输入框",dataIndex:"name",editRow:!0,editComponentProps:{prefix:"$"},width:150},{title:"默认输入状态",dataIndex:"name7",editRow:!0,width:150},{title:"输入框校验",dataIndex:"name1",editRow:!0,align:"left",editRule:!0,width:150},{title:"输入框函数校验",dataIndex:"name2",editRow:!0,align:"right",editRule:t=>e(this,null,(function*(){return"2"===t?"不能输入该值":""}))},{title:"数字输入框",dataIndex:"id",editRow:!0,editRule:!0,editComponent:"InputNumber",width:150},{title:"下拉框",dataIndex:"name3",editRow:!0,editComponent:"Select",editComponentProps:{options:[{label:"Option1",value:"1"},{label:"Option2",value:"2"},{label:"Option3",value:"3"}]},width:200},{title:"远程下拉",dataIndex:"name4",editRow:!0,editComponent:"ApiSelect",editComponentProps:{api:o,resultField:"list",labelField:"name",valueField:"id"},width:200},{title:"远程下拉树",dataIndex:"name8",editRow:!0,editComponent:"ApiTreeSelect",editRule:!1,editComponentProps:{api:a,resultField:"list"},width:200},{title:"日期选择",dataIndex:"date",editRow:!0,editComponent:"DatePicker",editComponentProps:{valueFormat:"YYYY-MM-DD",format:"YYYY-MM-DD"},width:150},{title:"时间选择",dataIndex:"time",editRow:!0,editComponent:"TimePicker",editComponentProps:{valueFormat:"HH:mm",format:"HH:mm"},width:100},{title:"勾选框",dataIndex:"name5",editRow:!0,editComponent:"Checkbox",editValueMap:e=>e?"是":"否",width:100},{title:"开关",dataIndex:"name6",editRow:!0,editComponent:"Switch",editValueMap:e=>e?"开":"关",width:100}];var b=l({components:{BasicTable:t,TableAction:i},setup(){const t=r(""),[i]=n({title:"可编辑行示例",titleHelpMessage:["本例中修改[数字输入框]这一列时，同一行的[远程下拉]列的当前编辑数据也会同步发生改变"],api:d,columns:f,showIndexColumn:!1,actionColumn:{width:160,title:"Action",dataIndex:"action",slots:{customRender:"action"}}});function o(e){var i;t.value=e.key,null==(i=e.onEdit)||i.call(e,!0)}function a(e){var i;t.value="",null==(i=e.onEdit)||i.call(e,!1,!1)}function l(i){return e(this,null,(function*(){var e;(yield null==(e=i.onEdit)?void 0:e.call(i,!1,!0))&&(t.value="")}))}return{registerTable:i,handleEdit:o,createActions:function(e,i){return e.editable?[{label:"保存",onClick:l.bind(null,e,i)},{label:"取消",popConfirm:{title:"是否取消编辑",confirm:a.bind(null,e,i)}}]:[{label:"编辑",disabled:!!t.value&&t.value!==e.key,onClick:o.bind(null,e)}]},onEditChange:function({column:e,value:t,record:i}){"id"===e.dataIndex&&(i.editValueRefs.name4.value=`${t}`)}}}});const x={class:"p-4"};b.render=function(e,t,i,n,o,a){const d=s("TableAction"),l=s("BasicTable");return m(),p("div",x,[c(l,{onRegister:e.registerTable,onEditChange:e.onEditChange},{action:u((({record:t,column:i})=>[c(d,{actions:e.createActions(t,i)},null,8,["actions"])])),_:1},8,["onRegister","onEditChange"])])};export default b;
