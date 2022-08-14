"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3617],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,i(i({ref:t},p),{},{components:n})):r.createElement(f,i({ref:t},p))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1375:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return c},default:function(){return d},frontMatter:function(){return l},metadata:function(){return s},toc:function(){return u}});var r=n(3117),a=n(102),o=(n(7294),n(3905)),i=["components"],l={},c="Welcome to Woodpecker",s={unversionedId:"intro",id:"intro",title:"Welcome to Woodpecker",description:"Woodpecker is a simple CI engine with great extensibility. It runs your pipelines inside containers, so if you are already using them in your daily workflow, you'll love Woodpecker for sure.",source:"@site/docs/10-intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/intro",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/10-intro.md",tags:[],version:"current",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/usage/intro"}},p={},u=[{value:".woodpecker.yml",id:"woodpeckeryml",level:2},{value:"Build steps are containers",id:"build-steps-are-containers",level:3},{value:"File changes are incremental",id:"file-changes-are-incremental",level:3},{value:"Plugins are straightforward",id:"plugins-are-straightforward",level:2}],m={toc:u};function d(e){var t=e.components,l=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},m,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"welcome-to-woodpecker"},"Welcome to Woodpecker"),(0,o.kt)("p",null,"Woodpecker is a simple CI engine with great extensibility. It runs your pipelines inside ",(0,o.kt)("a",{parentName:"p",href:"https://opencontainers.org/"},"containers"),", so if you are already using them in your daily workflow, you'll love Woodpecker for sure."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"woodpecker",src:n(8185).Z,width:"1920",height:"1003"})),(0,o.kt)("h2",{id:"woodpeckeryml"},".woodpecker.yml"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Place your pipeline in a file named ",(0,o.kt)("inlineCode",{parentName:"li"},".woodpecker.yml")," in your repository"),(0,o.kt)("li",{parentName:"ul"},"Pipeline steps can be named as you like"),(0,o.kt)("li",{parentName:"ul"},"Run any command in the commands section")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'# .woodpecker.yml\npipeline:\n  build:\n    image: debian\n    commands:\n      - echo "This is the build step"\n  a-test-step:\n    image: debian\n    commands:\n      - echo "Testing.."\n')),(0,o.kt)("h3",{id:"build-steps-are-containers"},"Build steps are containers"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Define any container image as context",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"either use your own and install the needed tools in custom image or"),(0,o.kt)("li",{parentName:"ul"},"search for available images that are already tailored for your needs on container registries like ",(0,o.kt)("a",{parentName:"li",href:"https://hub.docker.com/search?type=image"},"Docker Hub")))),(0,o.kt)("li",{parentName:"ul"},"List the commands that should be executed in your container, in order to build or test your application")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-diff"},"pipeline:\n  build:\n-   image: debian\n+   image: mycompany/image-with-awscli\n    commands:\n      - aws help\n")),(0,o.kt)("h3",{id:"file-changes-are-incremental"},"File changes are incremental"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Woodpecker clones the source code in the beginning pipeline"),(0,o.kt)("li",{parentName:"ul"},"Changes to files are persisted through steps as the same volume is mounted to all steps")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# .woodpecker.yml\npipeline:\n  build:\n    image: debian\n    commands:\n      - touch myfile\n  a-test-step:\n    image: debian\n    commands:\n      - cat myfile\n")),(0,o.kt)("h2",{id:"plugins-are-straightforward"},"Plugins are straightforward"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"If you copy the same shell script from project to project"),(0,o.kt)("li",{parentName:"ul"},"Pack it into a plugin instead"),(0,o.kt)("li",{parentName:"ul"},"And make the yaml declarative"),(0,o.kt)("li",{parentName:"ul"},"Plugins are Docker images with your script as an entrypoint")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-Dockerfile"},'# Dockerfile\nFROM laszlocloud/kubectl\nCOPY deploy /usr/local/deploy\nENTRYPOINT ["/usr/local/deploy"]\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"# deploy\nkubectl apply -f $PLUGIN_TEMPLATE\n")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"# .woodpecker.yml\npipeline:\n  deploy-to-k8s:\n    image: laszlocloud/my-k8s-plugin\n    template: config/k8s/service.yml\n")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",{parentName:"p",href:"/docs/usage/plugins/plugins"},"plugin docs"),"."))}d.isMDXComponent=!0},8185:function(e,t,n){t.Z=n.p+"assets/images/woodpecker-4c7b028122f13b47b001c676fbf6917f.png"}}]);