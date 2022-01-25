import{y as e,ae as t,b5 as i,Z as s,B as n,F as r,a1 as l,v as o,J as a,a8 as p}from"./vendor.3dc066e5.js";/* empty css              */import{P as c}from"./index.55f1fb99.js";import{D as u,u as d}from"./index.8dce9114.js";import{G as g,D as m,S as v}from"./siteSetting.b6bf29aa.js";import"./index.f77a0916.js";/* empty css              *//* empty css              */import"./onMountedOrActivated.c01d8630.js";import"./useWindowSizeFn.308e6090.js";import"./useContentViewHeight.0ff5ff24.js";/* empty css              */var f=e({name:"AboutPage",components:{Description:u,PageWrapper:c},setup(){const{pkg:e,lastBuildTime:s}={pkg:{dependencies:{"@iconify/iconify":"^2.0.3","@logicflow/core":"^0.6.1","@logicflow/extension":"^0.6.1","@vueuse/core":"^5.1.4","@zxcvbn-ts/core":"^1.0.0-beta.0","ant-design-vue":"2.2.2",axios:"^0.21.1",codemirror:"^5.62.2",cropperjs:"^1.5.12","crypto-js":"^4.0.0",echarts:"^5.1.2","intro.js":"^4.1.0","lodash-es":"^4.17.21",mockjs:"^1.1.0",nprogress:"^0.2.0","path-to-regexp":"^6.2.0",pinia:"^2.0.0-beta.5","print-js":"^1.6.0",qrcode:"^1.4.4","resize-observer-polyfill":"^1.5.1",sortablejs:"^1.14.0",tinymce:"^5.8.2",vditor:"^3.8.6",vue:"3.1.5","vue-i18n":"9.1.6","vue-json-pretty":"^2.0.2","vue-router":"^4.0.10","vue-types":"^4.0.0",xlsx:"^0.17.0","bpmn-js":"^8.6.0","camunda-bpmn-moddle":"^5.1.2"},devDependencies:{"@commitlint/cli":"^12.1.4","@commitlint/config-conventional":"^12.1.4","@iconify/json":"^1.1.374","@purge-icons/generated":"^0.7.0","@types/codemirror":"^5.60.2","@types/crypto-js":"^4.0.2","@types/fs-extra":"^9.0.12","@types/inquirer":"^7.3.3","@types/intro.js":"^3.0.2","@types/jest":"^26.0.24","@types/lodash-es":"^4.17.4","@types/mockjs":"^1.0.4","@types/node":"^16.4.0","@types/nprogress":"^0.2.0","@types/qrcode":"^1.4.1","@types/qs":"^6.9.7","@types/sortablejs":"^1.10.7","@typescript-eslint/eslint-plugin":"^4.28.4","@typescript-eslint/parser":"^4.28.4","@vitejs/plugin-legacy":"^1.4.4","@vitejs/plugin-vue":"^1.2.5","@vitejs/plugin-vue-jsx":"^1.1.6","@vue/compiler-sfc":"3.1.5","@vue/test-utils":"^2.0.0-rc.10",autoprefixer:"^10.3.1",commitizen:"^4.2.4","conventional-changelog-cli":"^2.1.1","cross-env":"^7.0.3",dotenv:"^10.0.0",eslint:"^7.31.0","eslint-config-prettier":"^8.3.0","eslint-define-config":"^1.0.9","eslint-plugin-jest":"^24.3.7","eslint-plugin-prettier":"^3.4.0","eslint-plugin-vue":"^7.14.0",esno:"^0.7.3","fs-extra":"^10.0.0","http-server":"^0.12.3",husky:"^7.0.1",inquirer:"^8.1.2","is-ci":"^3.0.0",jest:"^27.0.6",less:"^4.1.1","lint-staged":"^11.0.1","npm-run-all":"^4.1.5",postcss:"^8.3.5",prettier:"^2.3.2","pretty-quick":"^3.1.1",rimraf:"^3.0.2","rollup-plugin-visualizer":"5.5.2",stylelint:"^13.13.1","stylelint-config-prettier":"^8.0.2","stylelint-config-standard":"^22.0.0","stylelint-order":"^4.1.0",tailwindcss:"^2.2.5","ts-jest":"^27.0.4","ts-node":"^10.1.0",typescript:"4.3.5",vite:"2.4.3","vite-plugin-compression":"^0.3.1","vite-plugin-html":"^2.0.7","vite-plugin-imagemin":"^0.4.1","vite-plugin-mock":"^2.9.3","vite-plugin-purge-icons":"^0.7.0","vite-plugin-pwa":"^0.8.1","vite-plugin-style-import":"^1.0.1","vite-plugin-svg-icons":"^1.0.1","vite-plugin-theme":"^0.8.1","vue-eslint-parser":"^7.9.0","vue-tsc":"^0.2.2"},name:"Flow-Front",version:"2.6.1"},lastBuildTime:"2021-09-28 10:42:14"},{dependencies:n,devDependencies:r,name:l,version:o}=e,a=[],p=[],c=e=>s=>t(i,{color:e},(()=>s)),u=e=>i=>t("a",{href:i,target:"_blank"},e),f=[{label:"版本",field:"version",render:c("blue")},{label:"最后编译时间",field:"lastBuildTime",render:c("blue")},{label:"文档地址",field:"doc",render:u("文档地址")},{label:"预览地址",field:"preview",render:u("预览地址")},{label:"Github",field:"github",render:u("Github")}],y={version:o,lastBuildTime:s,doc:m,preview:v,github:g};Object.keys(n).forEach((e=>{a.push({field:e,label:e})})),Object.keys(r).forEach((e=>{p.push({field:e,label:e})}));const[j]=d({title:"生产环境依赖",data:n,schema:a,column:3}),[b]=d({title:"开发环境依赖",data:r,schema:p,column:3}),[h]=d({title:"项目信息",data:y,schema:f,column:2});return{register:j,registerDev:b,infoRegister:h,name:l,GITHUB_URL:g}}});const y={class:"flex justify-between items-center"},j={class:"flex-1"},b=p(" 是一个基于Vue3.0、Vite、 Ant-Design-Vue 、TypeScript 的后台解决方案，目标是为中大型项目开发,提供现成的开箱解决方案及丰富的示例,原则上不会限制任何代码用于商用。 ");f.render=function(e,t,i,p,c,u){const d=s("Description"),g=s("PageWrapper");return n(),r(g,{title:"关于"},{headerContent:l((()=>[o("div",y,[o("span",j,[o("a",{href:e.GITHUB_URL,target:"_blank"},a(e.name),9,["href"]),b])])])),default:l((()=>[o(d,{onRegister:e.infoRegister,class:"enter-y"},null,8,["onRegister"]),o(d,{onRegister:e.register,class:"my-4 enter-y"},null,8,["onRegister"]),o(d,{onRegister:e.registerDev,class:"enter-y"},null,8,["onRegister"])])),_:1})};export default f;
