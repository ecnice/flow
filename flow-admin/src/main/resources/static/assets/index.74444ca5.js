import{P as e}from"./index.0aed0d9d.js";import{ag as r,f as a}from"./index.4926e6da.js";import{C as o,a as p}from"./index.63a98925.js";import{u as n}from"./upload.15f5f768.js";import{h as s}from"./header.d801b988.js";import{y as i,r as t,z as d,A as c,Z as l,B as m,F as f,v as u,a8 as v,J as g,K as C}from"./vendor.880b4c6c.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.8f899bfb.js";import"./useWindowSizeFn.564cf32e.js";import"./useContentViewHeight.dbded6ea.js";/* empty css              *//* empty css              *//* empty css              */import"./index.0795d69f.js";import"./base64Conver.bb012c73.js";var j=i({components:{PageWrapper:e,CropperImage:o,CollapseContainer:r,CropperAvatar:p},setup(){var e;const r=t(""),o=t(""),p=t(""),i=t(""),d=a(),c=t((null==(e=d.getUserInfo)?void 0:e.avatar)||"");return{img:s,info:r,circleInfo:p,cropperImg:o,circleImg:i,handleCropend:function({imgBase64:e,imgInfo:a}){r.value=a,o.value=e},handleCircleCropend:function({imgBase64:e,imgInfo:r}){p.value=r,i.value=e},avatar:c,uploadApi:n}}});const I=C();d("data-v-32229492");const x={class:"container p-4"},h={class:"cropper-container mr-10"},b={key:0},y={class:"container p-4"},A={class:"cropper-container mr-10"},w={key:0};c();const _=I(((e,r,a,o,p,n)=>{const s=l("CropperAvatar"),i=l("CollapseContainer"),t=l("CropperImage"),d=l("PageWrapper");return m(),f(d,{title:"图片裁剪示例",content:"需要开启测试接口服务才能进行上传测试！"},{default:I((()=>[u(i,{title:"头像裁剪"},{default:I((()=>[u(s,{uploadApi:e.uploadApi,value:e.avatar},null,8,["uploadApi","value"])])),_:1}),u(i,{title:"矩形裁剪",class:"my-4"},{default:I((()=>[u("div",x,[u("div",h,[u(t,{ref:"refCropper",src:e.img,onCropend:e.handleCropend,style:{width:"40vw"}},null,8,["src","onCropend"])]),e.cropperImg?(m(),f("img",{key:0,src:e.cropperImg,class:"croppered",alt:""},null,8,["src"])):v("",!0)]),e.cropperImg?(m(),f("p",b,"裁剪后图片信息："+g(e.info),1)):v("",!0)])),_:1}),u(i,{title:"圆形裁剪"},{default:I((()=>[u("div",y,[u("div",A,[u(t,{ref:"refCropper",src:e.img,onCropend:e.handleCircleCropend,style:{width:"40vw"},circled:""},null,8,["src","onCropend"])]),e.circleImg?(m(),f("img",{key:0,src:e.circleImg,class:"croppered"},null,8,["src"])):v("",!0)]),e.circleImg?(m(),f("p",w,"裁剪后图片信息："+g(e.circleInfo),1)):v("",!0)])),_:1})])),_:1})}));j.render=_,j.__scopeId="data-v-32229492";export default j;
