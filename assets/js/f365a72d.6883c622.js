"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[2210],{9613:(e,t,o)=>{o.d(t,{Zo:()=>p,kt:()=>f});var r=o(9496);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function i(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function a(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?i(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):i(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)o=i[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var s=r.createContext({}),c=function(e){var t=r.useContext(s),o=t;return e&&(o="function"==typeof e?e(t):a(a({},t),e)),o},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),d=c(o),f=n,g=d["".concat(s,".").concat(f)]||d[f]||u[f]||i;return o?r.createElement(g,a(a({ref:t},p),{},{components:o})):r.createElement(g,a({ref:t},p))}));function f(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=o.length,a=new Array(i);a[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,a[1]=l;for(var c=2;c<i;c++)a[c]=o[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},8726:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>k,contentTitle:()=>f,default:()=>v,frontMatter:()=>d,metadata:()=>g,toc:()=>O});var r=o(9613),n=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,o)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o,u=(e,t)=>{for(var o in t||(t={}))s.call(t,o)&&p(e,o,t[o]);if(l)for(var o of l(t))c.call(t,o)&&p(e,o,t[o]);return e};const d={},f="Gogs",g={unversionedId:"administration/vcs/gogs",id:"version-0.15/administration/vcs/gogs",title:"Gogs",description:"Configuration",source:"@site/versioned_docs/version-0.15/30-administration/11-vcs/70-gogs.md",sourceDirName:"30-administration/11-vcs",slug:"/administration/vcs/gogs",permalink:"/docs/administration/vcs/gogs",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/11-vcs/70-gogs.md",tags:[],version:"0.15",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Bitbucket Server",permalink:"/docs/administration/vcs/bitbucket_server"},next:{title:"Coding",permalink:"/docs/administration/vcs/coding"}},k={},O=[{value:"Configuration",id:"configuration",level:2},{value:"<code>WOODPECKER_GOGS</code>",id:"woodpecker_gogs",level:3},{value:"<code>WOODPECKER_GOGS_URL</code>",id:"woodpecker_gogs_url",level:3},{value:"<code>WOODPECKER_GOGS_GIT_USERNAME</code>",id:"woodpecker_gogs_git_username",level:3},{value:"<code>WOODPECKER_GOGS_GIT_PASSWORD</code>",id:"woodpecker_gogs_git_password",level:3},{value:"<code>WOODPECKER_GOGS_PRIVATE_MODE</code>",id:"woodpecker_gogs_private_mode",level:3},{value:"<code>WOODPECKER_GOGS_SKIP_VERIFY</code>",id:"woodpecker_gogs_skip_verify",level:3}],m={toc:O};function v(e){var t,o=e,{components:n}=o,p=((e,t)=>{var o={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(o[r]=e[r]);return o})(o,["components"]);return(0,r.kt)("wrapper",(t=u(u({},m),p),i(t,a({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",u({},{id:"gogs"}),"Gogs"),(0,r.kt)("h2",u({},{id:"configuration"}),"Configuration"),(0,r.kt)("p",null,"This is a full list of configuration options. Please note that many of these options use default configuration values that should work for the majority of installations."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Enables the Gogs driver."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_url"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_URL")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"https://github.com"))),(0,r.kt)("p",null,"Configures the Gogs server address."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_git_username"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_USERNAME")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"This username is used to authenticate and clone all private repositories."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_git_password"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_GIT_PASSWORD")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,r.kt)("p",null,"The password is used to authenticate and clone all private repositories."),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_private_mode"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_PRIVATE_MODE")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"TODO"),(0,r.kt)("h3",u({},{id:"woodpecker_gogs_skip_verify"}),(0,r.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GOGS_SKIP_VERIFY")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Default: ",(0,r.kt)("inlineCode",{parentName:"p"},"false"))),(0,r.kt)("p",null,"Configure if SSL verification should be skipped."))}v.isMDXComponent=!0}}]);