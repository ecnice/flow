import{_ as b,O as k,a as h,a1 as v,f as O,Y as R,e as M,b1 as A,aa as f,aW as B,aX as T,h as j}from"./index.eb81839e.js";import{A as $,cl as w,bp as x,a0 as c,B as D,D as F,w as o,a5 as i,ad as u,J as d,K as N,u as m}from"./vendor.5eb38889.js";const P=$({name:"SettingFooter",components:{CopyOutlined:w,RedoOutlined:x},setup(){const e=k(),{prefixCls:p}=h("setting-footer"),{t:s}=M(),{createSuccessModal:g,createMessage:r}=j(),C=v(),l=O(),t=R();function n(){const{isSuccessRef:a}=A(JSON.stringify(m(t.getProjectConfig),null,2));m(a)&&g({title:s("layout.setting.operatingTitle"),content:s("layout.setting.operatingContent")})}function S(){try{t.setProjectConfig(f);const{colorWeak:a,grayMode:y}=f;B(a),T(y),r.success(s("layout.setting.resetSuccess"))}catch(a){r.error(a)}}function _(){localStorage.clear(),t.resetAllState(),e.resetState(),C.resetState(),l.resetState(),location.reload()}return{prefixCls:p,t:s,handleCopy:n,handleResetSetting:S,handleClearAndRedo:_}}});function W(e,p,s,g,r,C){const l=c("CopyOutlined"),t=c("a-button"),n=c("RedoOutlined");return D(),F("div",{class:N(e.prefixCls)},[o(t,{type:"primary",block:"",onClick:e.handleCopy},{default:i(()=>[o(l,{class:"mr-2"}),u(" "+d(e.t("layout.setting.copyBtn")),1)]),_:1},8,["onClick"]),o(t,{color:"warning",block:"",onClick:e.handleResetSetting,class:"my-3"},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+d(e.t("common.resetText")),1)]),_:1},8,["onClick"]),o(t,{color:"error",block:"",onClick:e.handleClearAndRedo},{default:i(()=>[o(n,{class:"mr-2"}),u(" "+d(e.t("layout.setting.clearBtn")),1)]),_:1},8,["onClick"])],2)}var V=b(P,[["render",W],["__scopeId","data-v-40ca4b3c"]]);export{V as default};
