var e=Object.defineProperty,t=Object.defineProperties,n=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,a=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,s=(t,n,l)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:l}):t[n]=l,i=(e,t)=>{for(var n in t||(t={}))a.call(t,n)&&s(e,n,t[n]);if(l)for(var n of l(t))o.call(t,n)&&s(e,n,t[n]);return e},r=(e,l)=>t(e,n(l));import{e as u,c as E,as as _,p as d,V as g,ae as c,aD as O,k as S,j as T,ah as p,aC as C,w as N,J as A,aM as D,aN as M,aO as f,M as R,v as y,aP as I,a2 as m,X as H,aQ as b,aR as h,l as v,aS as L,aT as B,aU as w,aV as U,a1 as P,x as F,b as x,aW as G,aX as k,aY as W,_ as X}from"./index.f77a0916.js";import{y as $,j,Z as V,B as K,F as Y,a6 as Q,a3 as Z,a0 as z,a1 as J,a8 as q,J as ee,a7 as te,c8 as ne,v as le,bi as ae,r as oe,Q as se,u as ie,t as re,Y as ue,ac as Ee,av as _e,az as de,G as ge,an as ce,N as Oe,b2 as Se,aa as Te,aX as pe}from"./vendor.3dc066e5.js";import{c as Ce,u as Ne,a as Ae}from"./index.878d338f.js";/* empty css              */const{t:De}=u(),Me={confirmLoading:{type:Boolean},showCancelBtn:{type:Boolean,default:!0},cancelButtonProps:Object,cancelText:{type:String,default:De("common.cancelText")},showOkBtn:{type:Boolean,default:!0},okButtonProps:Object,okText:{type:String,default:De("common.okText")},okType:{type:String,default:"primary"},showFooter:{type:Boolean},footerHeight:{type:[String,Number],default:60}},fe=i({isDetail:{type:Boolean},title:{type:String,default:""},loadingText:{type:String},showDetailBack:{type:Boolean,default:!0},visible:{type:Boolean},loading:{type:Boolean},maskClosable:{type:Boolean,default:!0},getContainer:{type:[Object,String]},closeFunc:{type:[Function,Object],default:null},destroyOnClose:{type:Boolean}},Me);var Re=$({name:"BasicDrawerFooter",props:r(i({},Me),{height:{type:String,default:"60px"}}),emits:["ok","close"],setup(e,{emit:t}){const{prefixCls:n}=E("basic-drawer-footer");return{handleOk:function(){t("ok")},prefixCls:n,handleClose:function(){t("close")},getStyle:j((()=>{const t=`${e.height}`;return{height:t,lineHeight:t}}))}}});Re.render=function(e,t,n,l,a,o){const s=V("a-button");return e.showFooter||e.$slots.footer?(K(),Y("div",{key:0,class:e.prefixCls,style:e.getStyle},[e.$slots.footer?Z(e.$slots,"footer",{key:1}):(K(),Y(Q,{key:0},[Z(e.$slots,"insertFooter"),e.showCancelBtn?(K(),Y(s,z({key:0},e.cancelButtonProps,{onClick:e.handleClose,class:"mr-2"}),{default:J((()=>[q(ee(e.cancelText),1)])),_:1},16,["onClick"])):te("",!0),Z(e.$slots,"centerFooter"),e.showOkBtn?(K(),Y(s,z({key:1,type:e.okType,onClick:e.handleOk},e.okButtonProps,{class:"mr-2",loading:e.confirmLoading}),{default:J((()=>[q(ee(e.okText),1)])),_:1},16,["type","onClick","loading"])):te("",!0),Z(e.$slots,"appendFooter")],64))],6)):te("",!0)};var ye=$({name:"BasicDrawerHeader",components:{BasicTitle:_,ArrowLeftOutlined:ne},props:{isDetail:d.bool,showDetailBack:d.bool,title:d.string},emits:["close"],setup(e,{emit:t}){const{prefixCls:n}=E("basic-drawer-header");return{prefixCls:n,handleClose:function(){t("close")}}}});const Ie={key:1};ye.render=function(e,t,n,l,a,o){const s=V("BasicTitle"),i=V("ArrowLeftOutlined");return e.isDetail?(K(),Y("div",{key:1,class:[e.prefixCls,`${e.prefixCls}--detail`]},[le("span",{class:`${e.prefixCls}__twrap`},[e.showDetailBack?(K(),Y("span",{key:0,onClick:t[1]||(t[1]=(...t)=>e.handleClose&&e.handleClose(...t))},[le(i,{class:`${e.prefixCls}__back`},null,8,["class"])])):te("",!0),e.title?(K(),Y("span",Ie,ee(e.title),1)):te("",!0)],2),le("span",{class:`${e.prefixCls}__toolbar`},[Z(e.$slots,"titleToolbar")],2)],2)):(K(),Y(s,{key:0,class:e.prefixCls},{default:J((()=>[Z(e.$slots,"title"),q(" "+ee(e.$slots.title?"":e.title),1)])),_:3},8,["class"]))};var me=$({components:{Drawer:ae,ScrollContainer:g,DrawerFooter:Re,DrawerHeader:ye},inheritAttrs:!1,props:fe,emits:["visible-change","ok","close","register"],setup(e,{emit:t}){const n=oe(!1),l=c(),a=oe(null),{t:o}=u(),{prefixVar:s,prefixCls:_}=E("basic-drawer"),d={setDrawerProps:function(e){a.value=O(ie(a)||{},e),Reflect.has(e,"visible")&&(n.value=!!e.visible)},emitVisible:void 0},g=Ee();g&&t("register",d,g.uid);const p=j((()=>O(re(e),ie(a)))),C=j((()=>{const e=r(i(i({placement:"right"},ie(l)),ie(p)),{visible:ie(n)});e.title=void 0;const{isDetail:t,width:a,wrapClassName:o,getContainer:u}=e;if(t){a||(e.width="100%");const t=`${_}__detail`;e.wrapClassName=o?`${o} ${t}`:t,u||(e.getContainer=`.${s}-layout-content`)}return e})),N=j((()=>i(i({},l),ie(C)))),A=j((()=>{const{footerHeight:e,showFooter:t}=ie(C);return t&&e?S(e)?`${e}px`:`${e.replace("px","")}px`:"0px"})),D=j((()=>({position:"relative",height:`calc(100% - ${ie(A)})`}))),M=j((()=>{var e;return!!(null==(e=ie(C))?void 0:e.loading)}));return se((()=>e.visible),((e,t)=>{e!==t&&(n.value=e)}),{deep:!0}),se((()=>n.value),(e=>{ue((()=>{var n;t("visible-change",e),g&&(null==(n=d.emitVisible)||n.call(d,e,g.uid))}))})),{onClose:function(e){return l=this,a=null,o=function*(){const{closeFunc:l}=ie(C);if(t("close",e),l&&T(l)){const e=yield l();n.value=!e}else n.value=!1},new Promise(((t,n)=>{var s=t=>{try{r(o.next(t))}catch(e){n(e)}},i=t=>{try{r(o.throw(t))}catch(e){n(e)}},r=e=>e.done?t(e.value):Promise.resolve(e.value).then(s,i);r((o=o.apply(l,a)).next())}));var l,a,o},t:o,prefixCls:_,getMergeProps:p,getScrollContentStyle:D,getProps:C,getLoading:M,getBindValues:N,getFooterHeight:A,handleOk:function(){t("ok")}}}});me.render=function(e,t,n,l,a,o){const s=V("DrawerHeader"),i=V("ScrollContainer"),r=V("DrawerFooter"),u=V("Drawer"),E=_e("loading");return K(),Y(u,z({class:e.prefixCls,onClose:e.onClose},e.getBindValues),de({default:J((()=>[ge(le(i,{style:e.getScrollContentStyle,"loading-tip":e.loadingText||e.t("common.loadingText")},{default:J((()=>[Z(e.$slots,"default")])),_:3},8,["style","loading-tip"]),[[E,e.getLoading]]),le(r,z(e.getProps,{onClose:e.onClose,onOk:e.handleOk,height:e.getFooterHeight}),de({_:2},[ce(Object.keys(e.$slots),(t=>({name:t,fn:J((n=>[Z(e.$slots,t,n)]))})))]),1040,["onClose","onOk","height"])])),_:2},[e.$slots.title?{name:"title",fn:J((()=>[Z(e.$slots,"title")]))}:{name:"title",fn:J((()=>[le(s,{title:e.getMergeProps.title,isDetail:e.isDetail,showDetailBack:e.showDetailBack,onClose:e.onClose},{titleToolbar:J((()=>[Z(e.$slots,"titleToolbar")])),_:3},8,["title","isDetail","showDetailBack","onClose"])]))}]),1040,["class","onClose"])};const He=Oe({}),be=Oe({});const he=N(me),ve=Ce((()=>A((()=>import("./TypePicker.555d39d1.js")),["assets/TypePicker.555d39d1.js","assets/TypePicker.3c54ced2.css","assets/vendor.3dc066e5.js","assets/vendor.2b13549a.css","assets/index.f77a0916.js","assets/index.3b3929f4.css"]))),Le=Ce((()=>A((()=>import("./ThemeColorPicker.c4cfa5f9.js")),["assets/ThemeColorPicker.c4cfa5f9.js","assets/ThemeColorPicker.3e893b67.css","assets/index.bfbdc44f.css","assets/index.4c61959e.css","assets/index.f77a0916.js","assets/index.3b3929f4.css","assets/vendor.3dc066e5.js","assets/vendor.2b13549a.css","assets/index.878d338f.js","assets/index.e3b45eef.css","assets/index.feffbaff.js","assets/index.140aa9f4.css","assets/useWindowSizeFn.308e6090.js","assets/useContentViewHeight.0ff5ff24.js","assets/useSortable.121e2df4.js","assets/lock.e85a3e5c.js"]))),Be=Ce((()=>A((()=>import("./SettingFooter.a19dbf4e.js")),["assets/SettingFooter.a19dbf4e.js","assets/SettingFooter.92900cc7.css","assets/index.f77a0916.js","assets/index.3b3929f4.css","assets/vendor.3dc066e5.js","assets/vendor.2b13549a.css"]))),we=Ce((()=>A((()=>import("./SwitchItem.d388baf9.js")),["assets/SwitchItem.d388baf9.js","assets/SwitchItem.6322350a.css","assets/index.a8d5be14.css","assets/index.bfbdc44f.css","assets/index.4c61959e.css","assets/vendor.3dc066e5.js","assets/vendor.2b13549a.css","assets/index.f77a0916.js","assets/index.3b3929f4.css","assets/index.878d338f.js","assets/index.e3b45eef.css","assets/index.feffbaff.js","assets/index.140aa9f4.css","assets/useWindowSizeFn.308e6090.js","assets/useContentViewHeight.0ff5ff24.js","assets/useSortable.121e2df4.js","assets/lock.e85a3e5c.js"]))),Ue=Ce((()=>A((()=>import("./SelectItem.3ef99f19.js")),["assets/SelectItem.3ef99f19.js","assets/SelectItem.9d41e7fc.css","assets/index.bfbdc44f.css","assets/index.4c61959e.css","assets/vendor.3dc066e5.js","assets/vendor.2b13549a.css","assets/index.f77a0916.js","assets/index.3b3929f4.css","assets/index.878d338f.js","assets/index.e3b45eef.css","assets/index.feffbaff.js","assets/index.140aa9f4.css","assets/useWindowSizeFn.308e6090.js","assets/useContentViewHeight.0ff5ff24.js","assets/useSortable.121e2df4.js","assets/lock.e85a3e5c.js"]))),Pe=Ce((()=>A((()=>import("./InputNumberItem.054e0e3c.js")),["assets/InputNumberItem.054e0e3c.js","assets/InputNumberItem.581e9e46.css","assets/index.19838f8b.css","assets/index.bfbdc44f.css","assets/index.4c61959e.css","assets/vendor.3dc066e5.js","assets/vendor.2b13549a.css","assets/index.f77a0916.js","assets/index.3b3929f4.css","assets/index.878d338f.js","assets/index.e3b45eef.css","assets/index.feffbaff.js","assets/index.140aa9f4.css","assets/useWindowSizeFn.308e6090.js","assets/useContentViewHeight.0ff5ff24.js","assets/useSortable.121e2df4.js","assets/lock.e85a3e5c.js"]))),{t:Fe}=u();var xe,Ge;(Ge=xe||(xe={}))[Ge.CHANGE_LAYOUT=0]="CHANGE_LAYOUT",Ge[Ge.CHANGE_THEME_COLOR=1]="CHANGE_THEME_COLOR",Ge[Ge.CHANGE_THEME=2]="CHANGE_THEME",Ge[Ge.MENU_HAS_DRAG=3]="MENU_HAS_DRAG",Ge[Ge.MENU_ACCORDION=4]="MENU_ACCORDION",Ge[Ge.MENU_TRIGGER=5]="MENU_TRIGGER",Ge[Ge.MENU_TOP_ALIGN=6]="MENU_TOP_ALIGN",Ge[Ge.MENU_COLLAPSED=7]="MENU_COLLAPSED",Ge[Ge.MENU_COLLAPSED_SHOW_TITLE=8]="MENU_COLLAPSED_SHOW_TITLE",Ge[Ge.MENU_WIDTH=9]="MENU_WIDTH",Ge[Ge.MENU_SHOW_SIDEBAR=10]="MENU_SHOW_SIDEBAR",Ge[Ge.MENU_THEME=11]="MENU_THEME",Ge[Ge.MENU_SPLIT=12]="MENU_SPLIT",Ge[Ge.MENU_FIXED=13]="MENU_FIXED",Ge[Ge.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE=14]="MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE",Ge[Ge.MENU_TRIGGER_MIX_SIDEBAR=15]="MENU_TRIGGER_MIX_SIDEBAR",Ge[Ge.MENU_FIXED_MIX_SIDEBAR=16]="MENU_FIXED_MIX_SIDEBAR",Ge[Ge.HEADER_SHOW=17]="HEADER_SHOW",Ge[Ge.HEADER_THEME=18]="HEADER_THEME",Ge[Ge.HEADER_FIXED=19]="HEADER_FIXED",Ge[Ge.HEADER_SEARCH=20]="HEADER_SEARCH",Ge[Ge.TABS_SHOW_QUICK=21]="TABS_SHOW_QUICK",Ge[Ge.TABS_SHOW_REDO=22]="TABS_SHOW_REDO",Ge[Ge.TABS_SHOW=23]="TABS_SHOW",Ge[Ge.TABS_SHOW_FOLD=24]="TABS_SHOW_FOLD",Ge[Ge.LOCK_TIME=25]="LOCK_TIME",Ge[Ge.FULL_CONTENT=26]="FULL_CONTENT",Ge[Ge.CONTENT_MODE=27]="CONTENT_MODE",Ge[Ge.SHOW_BREADCRUMB=28]="SHOW_BREADCRUMB",Ge[Ge.SHOW_BREADCRUMB_ICON=29]="SHOW_BREADCRUMB_ICON",Ge[Ge.GRAY_MODE=30]="GRAY_MODE",Ge[Ge.COLOR_WEAK=31]="COLOR_WEAK",Ge[Ge.SHOW_LOGO=32]="SHOW_LOGO",Ge[Ge.SHOW_FOOTER=33]="SHOW_FOOTER",Ge[Ge.ROUTER_TRANSITION=34]="ROUTER_TRANSITION",Ge[Ge.OPEN_PROGRESS=35]="OPEN_PROGRESS",Ge[Ge.OPEN_PAGE_LOADING=36]="OPEN_PAGE_LOADING",Ge[Ge.OPEN_ROUTE_TRANSITION=37]="OPEN_ROUTE_TRANSITION";const ke=[{value:D.FULL,label:Fe("layout.setting.contentModeFull")},{value:D.FIXED,label:Fe("layout.setting.contentModeFixed")}],We=[{value:M.CENTER,label:Fe("layout.setting.topMenuAlignRight")},{value:M.START,label:Fe("layout.setting.topMenuAlignLeft")},{value:M.END,label:Fe("layout.setting.topMenuAlignCenter")}],Xe=[f.ZOOM_FADE,f.FADE,f.ZOOM_OUT,f.FADE_SIDE,f.FADE_BOTTOM,f.FADE_SCALE].map((e=>({label:e,value:e}))),$e=[{title:Fe("layout.setting.menuTypeSidebar"),mode:R.INLINE,type:y.SIDEBAR},{title:Fe("layout.setting.menuTypeMix"),mode:R.INLINE,type:y.MIX},{title:Fe("layout.setting.menuTypeTopMenu"),mode:R.HORIZONTAL,type:y.TOP_MENU},{title:Fe("layout.setting.menuTypeMixSidebar"),mode:R.INLINE,type:y.MIX_SIDEBAR}],je=[{value:I.HOVER,label:Fe("layout.setting.triggerHover")},{value:I.CLICK,label:Fe("layout.setting.triggerClick")}];function Ve(e,t){const n=H(),l=function(e,t){const n=H(),{getThemeColor:l,getDarkMode:a}=v();switch(e){case xe.CHANGE_LAYOUT:const{mode:e,type:o,split:s}=t;return{menuSetting:i({mode:e,type:o,collapsed:!1,show:!0,hidden:!1},void 0===s?{split:s}:{})};case xe.CHANGE_THEME_COLOR:return l.value===t?{}:(U(t),{themeColor:t});case xe.CHANGE_THEME:return a.value===t||w(t),{};case xe.MENU_HAS_DRAG:return{menuSetting:{canDrag:t}};case xe.MENU_ACCORDION:return{menuSetting:{accordion:t}};case xe.MENU_TRIGGER:return{menuSetting:{trigger:t}};case xe.MENU_TOP_ALIGN:return{menuSetting:{topMenuAlign:t}};case xe.MENU_COLLAPSED:return{menuSetting:{collapsed:t}};case xe.MENU_WIDTH:return{menuSetting:{menuWidth:t}};case xe.MENU_SHOW_SIDEBAR:return{menuSetting:{show:t}};case xe.MENU_COLLAPSED_SHOW_TITLE:return{menuSetting:{collapsedShowTitle:t}};case xe.MENU_THEME:return h(t),{menuSetting:{bgColor:t}};case xe.MENU_SPLIT:return{menuSetting:{split:t}};case xe.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE:return{menuSetting:{closeMixSidebarOnChange:t}};case xe.MENU_FIXED:return{menuSetting:{fixed:t}};case xe.MENU_TRIGGER_MIX_SIDEBAR:return{menuSetting:{mixSideTrigger:t}};case xe.MENU_FIXED_MIX_SIDEBAR:return{menuSetting:{mixSideFixed:t}};case xe.OPEN_PAGE_LOADING:return n.setPageLoading(!1),{transitionSetting:{openPageLoading:t}};case xe.ROUTER_TRANSITION:return{transitionSetting:{basicTransition:t}};case xe.OPEN_ROUTE_TRANSITION:return{transitionSetting:{enable:t}};case xe.OPEN_PROGRESS:return{transitionSetting:{openNProgress:t}};case xe.LOCK_TIME:return{lockTime:t};case xe.FULL_CONTENT:return{fullContent:t};case xe.CONTENT_MODE:return{contentMode:t};case xe.SHOW_BREADCRUMB:return{showBreadCrumb:t};case xe.SHOW_BREADCRUMB_ICON:return{showBreadCrumbIcon:t};case xe.GRAY_MODE:return B(t),{grayMode:t};case xe.SHOW_FOOTER:return{showFooter:t};case xe.COLOR_WEAK:return L(t),{colorWeak:t};case xe.SHOW_LOGO:return{showLogo:t};case xe.TABS_SHOW_QUICK:return{multiTabsSetting:{showQuick:t}};case xe.TABS_SHOW:return{multiTabsSetting:{show:t}};case xe.TABS_SHOW_REDO:return{multiTabsSetting:{showRedo:t}};case xe.TABS_SHOW_FOLD:return{multiTabsSetting:{showFold:t}};case xe.HEADER_THEME:return b(t),{headerSetting:{bgColor:t}};case xe.HEADER_SEARCH:return{headerSetting:{showSearch:t}};case xe.HEADER_FIXED:return{headerSetting:{fixed:t}};case xe.HEADER_SHOW:return{headerSetting:{show:t}};default:return{}}}(e,t);n.setProjectConfig(l),e===xe.CHANGE_THEME&&(b(),h())}const{t:Ke}=u();var Ye=$({name:"SettingDrawer",setup(e,{attrs:t}){const{getContentMode:n,getShowFooter:l,getShowBreadCrumb:a,getShowBreadCrumbIcon:o,getShowLogo:s,getFullContent:i,getColorWeak:r,getGrayMode:u,getLockTime:E,getShowDarkModeToggle:_,getThemeColor:d}=v(),{getOpenPageLoading:g,getBasicTransition:c,getEnableTransition:O,getOpenNProgress:S}=P(),{getIsHorizontal:T,getShowMenu:p,getMenuType:C,getTrigger:N,getCollapsedShowTitle:A,getMenuFixed:D,getCollapsed:M,getCanDrag:f,getTopMenuAlign:R,getAccordion:I,getMenuWidth:H,getMenuBgColor:b,getIsTopMenu:h,getSplit:L,getIsMixSidebar:B,getCloseMixSidebarOnChange:w,getMixSideTrigger:U,getMixSideFixed:X}=F(),{getShowHeader:$,getFixed:V,getHeaderBgColor:K,getShowSearch:Y}=Ne(),{getShowMultipleTab:Z,getShowQuick:J,getShowRedo:q,getShowFold:ee}=Ae(),te=j((()=>ie(p)&&!ie(T)));function ne(){let e=ie(N);const t=(l=ie(L),[{value:m.NONE,label:Fe("layout.setting.menuTriggerNone")},{value:m.FOOTER,label:Fe("layout.setting.menuTriggerBottom")},...l?[]:[{value:m.HEADER,label:Fe("layout.setting.menuTriggerTop")}]]);var l;return t.some((t=>t.value===e))||(e=m.FOOTER),le(Q,null,[le(we,{title:Ke("layout.setting.splitMenu"),event:xe.MENU_SPLIT,def:ie(L),disabled:!ie(te)||ie(C)!==y.MIX},null),le(we,{title:Ke("layout.setting.mixSidebarFixed"),event:xe.MENU_FIXED_MIX_SIDEBAR,def:ie(X),disabled:!ie(B)},null),le(we,{title:Ke("layout.setting.closeMixSidebarOnChange"),event:xe.MENU_CLOSE_MIX_SIDEBAR_ON_CHANGE,def:ie(w),disabled:!ie(B)},null),le(we,{title:Ke("layout.setting.menuCollapse"),event:xe.MENU_COLLAPSED,def:ie(M),disabled:!ie(te)},null),le(we,{title:Ke("layout.setting.menuDrag"),event:xe.MENU_HAS_DRAG,def:ie(f),disabled:!ie(te)},null),le(we,{title:Ke("layout.setting.menuSearch"),event:xe.HEADER_SEARCH,def:ie(Y),disabled:!ie($)},null),le(we,{title:Ke("layout.setting.menuAccordion"),event:xe.MENU_ACCORDION,def:ie(I),disabled:!ie(te)},null),le(we,{title:Ke("layout.setting.collapseMenuDisplayName"),event:xe.MENU_COLLAPSED_SHOW_TITLE,def:ie(A),disabled:!ie(te)||!ie(M)||ie(B)},null),le(we,{title:Ke("layout.setting.fixedHeader"),event:xe.HEADER_FIXED,def:ie(V),disabled:!ie($)},null),le(we,{title:Ke("layout.setting.fixedSideBar"),event:xe.MENU_FIXED,def:ie(D),disabled:!ie(te)||ie(B)},null),le(Ue,{title:Ke("layout.setting.mixSidebarTrigger"),event:xe.MENU_TRIGGER_MIX_SIDEBAR,def:ie(U),options:je,disabled:!ie(B)},null),le(Ue,{title:Ke("layout.setting.topMenuLayout"),event:xe.MENU_TOP_ALIGN,def:ie(R),options:We,disabled:!ie($)||ie(L)||!ie(h)&&!ie(L)||ie(B)},null),le(Ue,{title:Ke("layout.setting.menuCollapseButton"),event:xe.MENU_TRIGGER,def:e,options:t,disabled:!ie(te)||ie(B)},null),le(Ue,{title:Ke("layout.setting.contentMode"),event:xe.CONTENT_MODE,def:ie(n),options:ke},null),le(Pe,{title:Ke("layout.setting.autoScreenLock"),min:0,event:xe.LOCK_TIME,defaultValue:ie(E),formatter:e=>0===parseInt(e)?`0(${Ke("layout.setting.notAutoScreenLock")})`:`${e}${Ke("layout.setting.minute")}`},null),le(Pe,{title:Ke("layout.setting.expandedMenuWidth"),max:600,min:100,step:10,event:xe.MENU_WIDTH,disabled:!ie(te),defaultValue:ie(H),formatter:e=>`${parseInt(e)}px`},null)])}return()=>le(he,z(t,{title:Ke("layout.setting.drawerTitle"),width:330,wrapClassName:"setting-drawer"}),{default:()=>[ie(_)&&le(pe,null,{default:()=>Ke("layout.setting.darkMode")}),ie(_)&&le(x,{class:"mx-auto"},null),le(pe,null,{default:()=>Ke("layout.setting.navMode")}),le(Q,null,[le(ve,{menuTypeList:$e,handler:e=>{Ve(xe.CHANGE_LAYOUT,{mode:e.mode,type:e.type,split:!ie(T)&&void 0})},def:ie(C)},null)]),le(pe,null,{default:()=>Ke("layout.setting.sysTheme")}),le(Le,{colorList:G,def:ie(d),event:xe.CHANGE_THEME_COLOR},null),le(pe,null,{default:()=>Ke("layout.setting.headerTheme")}),le(Le,{colorList:k,def:ie(K),event:xe.HEADER_THEME},null),le(pe,null,{default:()=>Ke("layout.setting.sidebarTheme")}),le(Le,{colorList:W,def:ie(b),event:xe.MENU_THEME},null),le(pe,null,{default:()=>Ke("layout.setting.interfaceFunction")}),ne(),le(pe,null,{default:()=>Ke("layout.setting.interfaceDisplay")}),le(Q,null,[le(we,{title:Ke("layout.setting.breadcrumb"),event:xe.SHOW_BREADCRUMB,def:ie(a),disabled:!ie($)},null),le(we,{title:Ke("layout.setting.breadcrumbIcon"),event:xe.SHOW_BREADCRUMB_ICON,def:ie(o),disabled:!ie($)},null),le(we,{title:Ke("layout.setting.tabs"),event:xe.TABS_SHOW,def:ie(Z)},null),le(we,{title:Ke("layout.setting.tabsRedoBtn"),event:xe.TABS_SHOW_REDO,def:ie(q),disabled:!ie(Z)},null),le(we,{title:Ke("layout.setting.tabsQuickBtn"),event:xe.TABS_SHOW_QUICK,def:ie(J),disabled:!ie(Z)},null),le(we,{title:Ke("layout.setting.tabsFoldBtn"),event:xe.TABS_SHOW_FOLD,def:ie(ee),disabled:!ie(Z)},null),le(we,{title:Ke("layout.setting.sidebar"),event:xe.MENU_SHOW_SIDEBAR,def:ie(p),disabled:ie(T)},null),le(we,{title:Ke("layout.setting.header"),event:xe.HEADER_SHOW,def:ie($)},null),le(we,{title:"Logo",event:xe.SHOW_LOGO,def:ie(s),disabled:ie(B)},null),le(we,{title:Ke("layout.setting.footer"),event:xe.SHOW_FOOTER,def:ie(l)},null),le(we,{title:Ke("layout.setting.fullContent"),event:xe.FULL_CONTENT,def:ie(i)},null),le(we,{title:Ke("layout.setting.grayMode"),event:xe.GRAY_MODE,def:ie(u)},null),le(we,{title:Ke("layout.setting.colorWeak"),event:xe.COLOR_WEAK,def:ie(r)},null)]),le(pe,null,{default:()=>Ke("layout.setting.animation")}),le(Q,null,[le(we,{title:Ke("layout.setting.progress"),event:xe.OPEN_PROGRESS,def:ie(S)},null),le(we,{title:Ke("layout.setting.switchLoading"),event:xe.OPEN_PAGE_LOADING,def:ie(g)},null),le(we,{title:Ke("layout.setting.switchAnimation"),event:xe.OPEN_ROUTE_TRANSITION,def:ie(O)},null),le(Ue,{title:Ke("layout.setting.animationType"),event:xe.ROUTER_TRANSITION,def:ie(c),options:Xe,disabled:!ie(O)},null)]),le(pe,null,null),le(Be,null,null)]})}}),Qe=$({name:"SettingButton",components:{SettingDrawer:Ye,Icon:X},setup(){const[e,{openDrawer:t}]=function(){if(!Ee())throw new Error("useDrawer() can only be used inside setup() or functional components!");const e=oe(null),t=oe(!1),n=oe(""),l=()=>{const t=ie(e);return t||C("useDrawer instance is undefined!"),t};return[function(l,a){Te((()=>{e.value=null,t.value=null,He[ie(n)]=null})),ie(t)&&p()&&l===ie(e)||(n.value=a,e.value=l,t.value=!0,l.emitVisible=(e,t)=>{be[t]=e})},{setDrawerProps:e=>{var t;null==(t=l())||t.setDrawerProps(e)},getVisible:j((()=>be[~~ie(n)])),openDrawer:(e=!0,t,a=!0)=>{var o;if(null==(o=l())||o.setDrawerProps({visible:e}),t)return a?(He[ie(n)]=null,void(He[ie(n)]=re(t))):void(Se(re(He[ie(n)]),re(t))||(He[ie(n)]=re(t)))},closeDrawer:()=>{var e;null==(e=l())||e.setDrawerProps({visible:!1})}}]}();return{register:e,openDrawer:t}}});Qe.render=function(e,t,n,l,a,o){const s=V("Icon"),i=V("SettingDrawer");return K(),Y("div",{onClick:t[1]||(t[1]=t=>e.openDrawer(!0))},[le(s,{icon:"ion:settings-outline"}),le(i,{onRegister:e.register},null,8,["onRegister"])])};var Ze=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:Qe});export{Ve as b,Ze as i};
