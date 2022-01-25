var v=(e,g,l)=>new Promise((c,m)=>{var y=o=>{try{i(l.next(o))}catch(r){m(r)}},d=o=>{try{i(l.throw(o))}catch(r){m(r)}},i=o=>o.done?c(o.value):Promise.resolve(o.value).then(y,d);i((l=l.apply(e,g)).next())});import{B as K}from"./TableImg.56f74f95.js";import{T as V}from"./BasicForm.bfb70ce4.js";import{u as H}from"./useTable.df715f1a.js";import{g as N,c as W,s as J,a as q,b as G,d as Q,p as X,e as Y,f as Z}from"./listener.data.e668fe68.js";import{A as ee,ba as te,r as b,_ as ne,u as T,a0 as h,B as x,D as oe,w as p,a6 as a,ae as F,J as M,a1 as B,ad as E}from"./vendor.5879c5ca.js";/* empty css               */import se from"./ListenerModal.4397e25b.js";import ie from"./ListenerPropertiesModal.64314f9f.js";import{b as L}from"./index.309f7e13.js";import{_ as ae}from"./index.aeb7d9f7.js";/* empty css                *//* empty css              */import"./useForm.9d0149a6.js";import"./index.37a89528.js";/* empty css                *//* empty css                */import"./useWindowSizeFn.6a6adedd.js";import"./useContentViewHeight.6345b5e8.js";/* empty css                *//* empty css                */import"./uuid.2b29000c.js";/* empty css               */import"./useSortable.514a2720.js";/* empty css                *//* empty css                *//* empty css               *//* empty css               */import"./index.661e65ad.js";/* empty css                *//* empty css                *//* empty css                */import"./download.6c7231a4.js";import"./base64Conver.bb012c73.js";import"./index.77bdba74.js";const re=ee({name:"FlowListener",components:{Tag:te,BasicTable:K,TableAction:V,ListenerModal:se,ListenerPropertiesModal:ie},setup(){const[e,{openModal:g,setModalProps:l}]=L(),c=b({}),m=b({}),y=b({}),d=b(!1),i=b([]),o=b({}),[r,{openModal:C,setModalProps:P}]=L(),[s,{reload:j,getForm:S,setProps:w}]=H({title:"\u5217\u8868",api:N,columns:W,formConfig:{labelWidth:80,schemas:J,showAdvancedButton:!1,showResetButton:!1,autoSubmitOnEnter:!0},expandedRowKeys:i,expandRowByClick:!0,useSearchForm:!0,bordered:!0,showIndexColumn:!0,showTableSetting:!1,pagination:!1,rowKey:"id",canResize:!0,onExpand:(t,n)=>{t?(i.value=[n.id],o.value=n,f(n.id)):i.value=[]},resizeHeightOffset:-50});function f(t){d.value=!0,q({listenerId:t}).then(n=>{n&&n.length>0?c.value[t]=n:c.value[t]=[]}).finally(()=>{d.value=!1})}function R(){return v(this,null,function*(){const{validate:t}=S(),n=yield t();g(!0,{isUpdate:!1,record:{listenerType:n.listenerType||"taskListener"}}),l({title:"\u65B0\u589E\u76D1\u542C"})})}ne(()=>{G().then(n=>{n.forEach(u=>{T(m)[u.value]=u.label})});const{updateSchema:t}=S();Q().then(n=>{n.forEach(u=>{T(y)[u.value]=u.label}),t([{field:"listenerType",componentProps:{options:n,onChange:Je=>v(this,[Je],function*({target:u}){const{setFieldsValue:z}=S();yield z({name:""}),w({searchInfo:{listenerType:u.value}}),j()})}}])})});function k(t,n){n.stopPropagation(),o.value=t,C(!0,{isUpdate:!1,record:{listenerId:t.id,type:"string"}}),P({title:`\u6DFB\u52A0\u3010${t.name}\u3011\u7684\u5C5E\u6027`})}function A(t){C(!0,{isUpdate:!0,record:t}),P({title:`\u4FEE\u6539\u3010${t.name}\u3011\u7684\u5C5E\u6027`})}function D(t,n){n.stopPropagation(),g(!0,{record:t,isUpdate:!0})}function _(t,n){n.stopPropagation(),Y(t.id).then(()=>{j()})}function O(){j()}function I(){return j(),Promise.resolve(!0)}function U(t){Z(t.id).then(()=>{f(T(o).id)}).finally(()=>{})}function $(){f(T(o).id),i.value=[T(o).id]}return{registerTable:s,registerModal:e,registerPropertiesModal:r,expressionTypeObj:m,listenerTypeObj:y,propertiesColumns:X,listenerPropertiesData:c,propertiesTableLoading:d,handleDeleteProperty:U,handleCloseFunc:I,handleCreate:R,handleEditProperties:A,handleAddProperties:k,handleEdit:D,handleDelete:_,handleSuccess:O,handleUpdateSecretKeySuccess:$}}}),le=F(" \u65B0\u589E ");function de(e,g,l,c,m,y){const d=h("a-button"),i=h("TableAction"),o=h("Tag"),r=h("BasicTable"),C=h("ListenerModal"),P=h("ListenerPropertiesModal");return x(),oe("div",null,[p(r,{onRegister:e.registerTable,dense:"",contentFullHeight:"",fixedHeight:""},{toolbar:a(()=>[p(d,{type:"primary",onClick:e.handleCreate},{default:a(()=>[le]),_:1},8,["onClick"])]),action:a(({record:s})=>[p(i,{actions:[{icon:"ant-design:plus-outlined",tooltip:"\u6DFB\u52A0\u53C2\u6570",onClick:e.handleAddProperties.bind(null,s)},{tooltip:"\u4FEE\u6539",icon:"clarity:note-edit-line",onClick:e.handleEdit.bind(null,s)},{tooltip:"\u5220\u9664",icon:"ant-design:delete-outlined",color:"error",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDelete.bind(null,s)}}]},null,8,["actions"])]),typeRender:a(({record:s})=>[F(M(e.expressionTypeObj[s.type]),1)]),listenerTypeRender:a(({record:s})=>[s.listenerType==="taskListener"?(x(),B(o,{key:0,color:"default"},{default:a(()=>[F(M(e.listenerTypeObj[s.listenerType]),1)]),_:2},1024)):E("",!0),s.listenerType==="executionListener"?(x(),B(o,{key:1,color:"processing"},{default:a(()=>[F(M(e.listenerTypeObj[s.listenerType]),1)]),_:2},1024)):E("",!0)]),expandedRowRender:a(({record:s,index:j,indent:S,expanded:w})=>[p(r,{title:"",size:"small",columns:e.propertiesColumns,useSearchForm:!1,immediate:!1,showIndexColumn:!0,showTableSetting:!1,bordered:!0,pagination:!1,emptyDataIsShowTable:!1,inset:!0,actionColumn:`{\r
            align: 'center'\r
          }`,rowKey:"id",canResize:!1,loading:e.propertiesTableLoading,dataSource:e.listenerPropertiesData[s.id]},{action:a(({record:f})=>[p(i,{actions:[{icon:"clarity:note-edit-line",title:"\u7F16\u8F91",onClick:e.handleEditProperties.bind(null,f)},{icon:"ant-design:delete-outlined",color:"error",title:"\u5220\u9664",popConfirm:{title:"\u662F\u5426\u786E\u8BA4\u5220\u9664",confirm:e.handleDeleteProperty.bind(null,f)}}]},null,8,["actions"])]),_:2},1032,["columns","loading","dataSource"])]),_:1},8,["onRegister"]),p(C,{onRegister:e.registerModal,onSuccess:e.handleSuccess},null,8,["onRegister","onSuccess"]),p(P,{onRegister:e.registerPropertiesModal,onSuccess:e.handleUpdateSecretKeySuccess,closeFunc:e.handleCloseFunc},null,8,["onRegister","onSuccess","closeFunc"])])}var Ne=ae(re,[["render",de]]);export{Ne as default};
