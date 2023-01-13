"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3238],{9613:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var n=r(9496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),l=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=l(r),m=o,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=p;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:o,i[1]=c;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},8348:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>y,contentTitle:()=>m,default:()=>h,frontMatter:()=>p,metadata:()=>f,toc:()=>b});var n=r(9613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,d=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))l.call(t,r)&&u(e,r,t[r]);return e};const p={},m="Documentation",f={unversionedId:"development/docs",id:"version-0.15/development/docs",title:"Documentation",description:"The documentation is using docusaurus as framework. You can learn more about it from its official documentation.",source:"@site/versioned_docs/version-0.15/92-development/04-docs.md",sourceDirName:"92-development",slug:"/development/docs",permalink:"/docs/development/docs",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/92-development/04-docs.md",tags:[],version:"0.15",sidebarPosition:4,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"UI Development",permalink:"/docs/development/ui"},next:{title:"Architecture",permalink:"/docs/development/architecture"}},y={},b=[],g={toc:b};function h(e){var t,r=e,{components:o}=r,u=((e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r})(r,["components"]);return(0,n.kt)("wrapper",(t=d(d({},g),u),a(t,i({components:o,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"documentation"}),"Documentation"),(0,n.kt)("p",null,"The documentation is using docusaurus as framework. You can learn more about it from its ",(0,n.kt)("a",d({parentName:"p"},{href:"https://docusaurus.io/docs/"}),"official documentation"),"."),(0,n.kt)("p",null,"If you only want to change some text it probably is enough if you just search for the corresponding ",(0,n.kt)("a",d({parentName:"p"},{href:"https://www.markdownguide.org/basic-syntax/"}),"Markdown")," file inside the ",(0,n.kt)("inlineCode",{parentName:"p"},"docs/docs/")," folder and adjust it. If you want to change larger parts and test the rendered documentation you can run docusaurus locally. Similarly to the UI you need to install ",(0,n.kt)("a",d({parentName:"p"},{href:"/docs/development/getting-started#nodejs--yarn"}),"Node.js and Yarn"),". After that you can run and build docusaurus locally by using the following commands:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"cd docs/\n\nyarn install\n\n# build plugins used by the docs\nyarn build:woodpecker-plugins\n\n# start docs with hot-reloading, so you can change the docs and directly see the changes in the browser without reloading it manually\nyarn start\n\n# or build the docs to deploy it to some static page hosting\nyarn build\n")))}h.isMDXComponent=!0}}]);