import{y as t,bt as e,bv as a,cu as i,b5 as s,r as l,j as o,Q as r,u as n,z as p,A as c,Z as d,B as m,F as g,a7 as u,ao as y,v,a9 as b,J as h,a8 as k,K as f,al as j,cv as C,bl as w,bX as x,a2 as T}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import{c as z,k as D,h as G}from"./index.8c1d7da4.js";/* empty css              *//* empty css              *//* empty css              *//* empty css              */const P=[{key:"1",name:"通知",list:[{id:"000000001",avatar:"https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",title:"你收到了 14 份新周报",description:"",datetime:"2017-08-09",type:"1"},{id:"000000002",avatar:"https://gw.alipayobjects.com/zos/rmsportal/OKJXDXrmkNshAMvwtvhu.png",title:"你推荐的 曲妮妮 已通过第三轮面试",description:"",datetime:"2017-08-08",type:"1"},{id:"000000003",avatar:"https://gw.alipayobjects.com/zos/rmsportal/kISTdvpyTAhtGxpovNWd.png",title:"这种模板可以区分多种通知类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000004",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000005",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"标题可以设置自动显示省略号，本例中标题行数已设为1行，如果内容超过1行将自动截断并支持tooltip显示完整标题。",description:"",datetime:"2017-08-07",type:"1"},{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000009",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"},{id:"000000010",avatar:"https://gw.alipayobjects.com/zos/rmsportal/GvqBnKhFgObvnSGkDsje.png",title:"左侧图标用于区分不同的类型",description:"",datetime:"2017-08-07",type:"1"}]},{key:"2",name:"消息",list:[{id:"000000006",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"曲丽丽 评论了你",description:"描述信息描述信息描述信息",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000007",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"朱偏右 回复了你",description:"这种模板用于提醒谁与你发生了互动",datetime:"2017-08-07",type:"2",clickClose:!0},{id:"000000008",avatar:"https://gw.alipayobjects.com/zos/rmsportal/fcHMVNCjPOsbUGdEduuv.jpeg",title:"标题",description:"请将鼠标移动到此处，以便测试超长的消息在此处将如何处理。本例中设置的描述最大行数为2，超过2行的描述内容将被省略并且可以通过tooltip查看完整内容",datetime:"2017-08-07",type:"2",clickClose:!0}]},{key:"3",name:"待办",list:[{id:"000000009",avatar:"",title:"任务名称",description:"任务需要在 2017-01-12 20:00 前启动",datetime:"",extra:"未开始",color:"",type:"3"},{id:"000000010",avatar:"",title:"第三方紧急代码变更",description:"冠霖 需在 2017-01-07 前完成代码变更任务",datetime:"",extra:"马上到期",color:"red",type:"3"},{id:"000000011",avatar:"",title:"信息安全考试",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"已耗时 8 天",color:"gold",type:"3"},{id:"000000012",avatar:"",title:"ABCD 版本发布",description:"指派竹尔于 2017-01-09 前完成更新并发布",datetime:"",extra:"进行中",color:"blue",type:"3"}]}];var S=t({components:{[e.name]:e,[a.name]:a,[a.Item.name]:a.Item,AListItemMeta:a.Item.Meta,ATypographyParagraph:i.Paragraph,[s.name]:s},props:{list:{type:Array,default:()=>[]},pageSize:{type:[Boolean,Number],default:5},currentPage:{type:Number,default:1},titleRows:{type:Number,default:1},descRows:{type:Number,default:2},onTitleClick:{type:Function}},emits:["update:currentPage"],setup(t,{emit:e}){const{prefixCls:a}=z("header-notify-list"),i=l(t.currentPage||1),s=o((()=>{const{pageSize:e,list:a}=t;if(!1===e)return[];let s=D(e)?e:5;return a.slice(s*(n(i)-1),s*n(i))}));r((()=>t.currentPage),(t=>{i.value=t}));const p=o((()=>!!t.onTitleClick));return{prefixCls:a,getPagination:o((()=>{const{list:a,pageSize:s}=t;return!!(s>0&&a&&a.length>s)&&{total:a.length,pageSize:s,current:n(i),onChange(t){i.value=t,e("update:currentPage",t)}}})),getData:s,handleTitleClick:function(e){t.onTitleClick&&t.onTitleClick(e)},isTitleClickable:p}}});const B=f();p("data-v-785743be");const N={class:"title"},O={key:0,class:"extra"},_={key:1},F={key:0,class:"description"},K={class:"datetime"};c();const A=B(((t,e,a,i,s,l)=>{const o=d("a-typography-paragraph"),r=d("a-tag"),n=d("a-avatar"),p=d("a-list-item-meta"),c=d("a-list-item"),f=d("a-list");return m(),g(f,{class:t.prefixCls,bordered:"",pagination:t.getPagination},{default:B((()=>[(m(!0),g(u,null,y(t.getData,(e=>(m(),g(c,{key:e.id,class:"list-item"},{default:B((()=>[v(p,null,{title:B((()=>[v("div",N,[v(o,{onClick:a=>t.handleTitleClick(e),style:[{width:"100%","margin-bottom":"0 !important"},{cursor:t.isTitleClickable?"pointer":""}],delete:!!e.titleDelete,ellipsis:t.$props.titleRows>0&&{rows:t.$props.titleRows,tooltip:e.title},content:e.title},null,8,["onClick","style","delete","ellipsis","content"]),e.extra?(m(),g("div",O,[v(r,{class:"tag",color:e.color},{default:B((()=>[b(h(e.extra),1)])),_:2},1032,["color"])])):k("",!0)])])),avatar:B((()=>[e.avatar?(m(),g(n,{key:0,class:"avatar",src:e.avatar},null,8,["src"])):(m(),g("span",_,h(e.avatar),1))])),description:B((()=>[v("div",null,[e.description?(m(),g("div",F,[v(o,{style:{width:"100%","margin-bottom":"0 !important"},ellipsis:t.$props.descRows>0&&{rows:t.$props.descRows,tooltip:e.description},content:e.description},null,8,["ellipsis","content"])])):k("",!0),v("div",K,h(e.datetime),1)])])),_:2},1024)])),_:2},1024)))),128))])),_:1},8,["class","pagination"])}));S.render=A,S.__scopeId="data-v-785743be";var q=t({components:{Popover:j,BellOutlined:C,Tabs:w,TabPane:w.TabPane,Badge:x,NoticeList:S},setup(){const{prefixCls:t}=z("header-notify"),{createMessage:e}=G();return{prefixCls:t,listData:l(P),count:o((()=>{let t=0;for(let e=0;e<P.length;e++)t+=P[e].list.length;return t})),onNoticeClick:function(t){e.success("你点击了通知，ID="+t.id),t.titleDelete=!t.titleDelete},numberStyle:{}}}});const I={key:0};q.render=function(t,e,a,i,s,l){const o=d("BellOutlined"),r=d("Badge"),n=d("NoticeList"),p=d("TabPane"),c=d("Tabs"),f=d("Popover");return m(),g("div",{class:t.prefixCls},[v(f,{title:"",trigger:"click",overlayClassName:`${t.prefixCls}__overlay`},{content:T((()=>[v(c,null,{default:T((()=>[(m(!0),g(u,null,y(t.listData,(e=>(m(),g(p,{key:e.key},{tab:T((()=>[b(h(e.name)+" ",1),0!==e.list.length?(m(),g("span",I,"("+h(e.list.length)+")",1)):k("",!0)])),default:T((()=>["1"===e.key?(m(),g(n,{key:0,list:e.list,onTitleClick:t.onNoticeClick},null,8,["list","onTitleClick"])):(m(),g(n,{key:1,list:e.list},null,8,["list"]))])),_:2},1024)))),128))])),_:1})])),default:T((()=>[v(r,{count:t.count,dot:"",numberStyle:t.numberStyle},{default:T((()=>[v(o)])),_:1},8,["count","numberStyle"])])),_:1},8,["overlayClassName"])],2)};export default q;
