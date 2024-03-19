/*! For license information please see c6afb205.5c377e93.js.LICENSE.txt */
"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3660],{18523:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=i(13274),s=i(74169);const o={},t="Welcome to Woodpecker",a={id:"intro",title:"Welcome to Woodpecker",description:"Woodpecker is a simple yet powerful CI/CD engine with great extensibility. It focuses on executing pipelines inside containers.",source:"@site/versioned_docs/version-2.3/10-intro.md",sourceDirName:".",slug:"/intro",permalink:"/docs/2.3/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/main/docs/versioned_docs/version-2.3/10-intro.md",tags:[],version:"2.3",sidebarPosition:10,frontMatter:{},sidebar:"tutorialSidebar",next:{title:"Getting started",permalink:"/docs/2.3/usage/intro"}},l={},c=[{value:"<code>.woodpecker.yaml</code>",id:"woodpeckeryaml",level:2},{value:"Steps are containers",id:"steps-are-containers",level:3},{value:"File changes are incremental",id:"file-changes-are-incremental",level:3},{value:"Plugins are straightforward",id:"plugins-are-straightforward",level:2},{value:"Continue reading",id:"continue-reading",level:2}];function d(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"welcome-to-woodpecker",children:"Welcome to Woodpecker"}),"\n",(0,r.jsxs)(n.p,{children:["Woodpecker is a simple yet powerful CI/CD engine with great extensibility. It focuses on executing pipelines inside ",(0,r.jsx)(n.a,{href:"https://opencontainers.org/",children:"containers"}),".\nIf you are already using containers in your daily workflow, you'll for sure love Woodpecker."]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{alt:"woodpecker",src:i(91410).A+"",width:"1920",height:"1003"})}),"\n",(0,r.jsx)(n.h2,{id:"woodpeckeryaml",children:(0,r.jsx)(n.code,{children:".woodpecker.yaml"})}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Place your pipeline in a file named ",(0,r.jsx)(n.code,{children:".woodpecker.yaml"})," in your repository"]}),"\n",(0,r.jsx)(n.li,{children:"Pipeline steps can be named as you like"}),"\n",(0,r.jsx)(n.li,{children:"Run any command in the commands section"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title=".woodpecker.yaml"',children:'steps:\n  - name: build\n    image: debian\n    commands:\n      - echo "This is the build step"\n  - name: a-test-step\n    image: debian\n    commands:\n      - echo "Testing.."\n'})}),"\n",(0,r.jsx)(n.h3,{id:"steps-are-containers",children:"Steps are containers"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Define any container image as context\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"either use your own and install the needed tools in a custom image"}),"\n",(0,r.jsxs)(n.li,{children:["or search for available images that are already tailored for your needs in image registries like ",(0,r.jsx)(n.a,{href:"https://hub.docker.com/search?type=image",children:"Docker Hub"})]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.li,{children:"List the commands that should be executed in the container"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-diff",children:" steps:\n   - name: build\n-    image: debian\n+    image: mycompany/image-with-awscli\n     commands:\n       - aws help\n"})}),"\n",(0,r.jsx)(n.h3,{id:"file-changes-are-incremental",children:"File changes are incremental"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Woodpecker clones the source code in the beginning"}),"\n",(0,r.jsx)(n.li,{children:"File changes are persisted throughout individual steps as the same volume is being mounted in all steps"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title=".woodpecker.yaml"',children:"steps:\n  - name: build\n    image: debian\n    commands:\n      - touch myfile\n  - name: a-test-step\n    image: debian\n    commands:\n      - cat myfile\n"})}),"\n",(0,r.jsx)(n.h2,{id:"plugins-are-straightforward",children:"Plugins are straightforward"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"If you copy the same shell script from project to project"}),"\n",(0,r.jsx)(n.li,{children:"Pack it into a plugin instead"}),"\n",(0,r.jsx)(n.li,{children:"And make the yaml declarative"}),"\n",(0,r.jsx)(n.li,{children:"Plugins are Docker images with your script as an entrypoint"}),"\n"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-dockerfile",metastring:'title="Dockerfile"',children:'FROM laszlocloud/kubectl\nCOPY deploy /usr/local/deploy\nENTRYPOINT ["/usr/local/deploy"]\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",metastring:'title="deploy"',children:"kubectl apply -f $PLUGIN_TEMPLATE\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-yaml",metastring:'title=".woodpecker.yaml"',children:"steps:\n  deploy-to-k8s:\n    image: laszlocloud/my-k8s-plugin\n    settings:\n      template: config/k8s/service.yaml\n"})}),"\n",(0,r.jsxs)(n.p,{children:["See ",(0,r.jsx)(n.a,{href:"/docs/2.3/usage/plugins/overview",children:"plugin docs"}),"."]}),"\n",(0,r.jsx)(n.h2,{id:"continue-reading",children:"Continue reading"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/2.3/usage/intro",children:"Create a Woodpecker pipeline for your repository"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"/docs/2.3/administration/deployment/overview",children:"Setup your own Woodpecker instance"})}),"\n"]})]})}function p(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},78034:(e,n,i)=>{var r=i(79474),s=Symbol.for("react.element"),o=Symbol.for("react.fragment"),t=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,i){var r,o={},c=null,d=null;for(r in void 0!==i&&(c=""+i),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)t.call(n,r)&&!l.hasOwnProperty(r)&&(o[r]=n[r]);if(e&&e.defaultProps)for(r in n=e.defaultProps)void 0===o[r]&&(o[r]=n[r]);return{$$typeof:s,type:e,key:c,ref:d,props:o,_owner:a.current}}n.Fragment=o,n.jsx=c,n.jsxs=c},13274:(e,n,i)=>{e.exports=i(78034)},91410:(e,n,i)=>{i.d(n,{A:()=>r});const r=i.p+"assets/images/woodpecker-4c7b028122f13b47b001c676fbf6917f.png"},74169:(e,n,i)=>{i.d(n,{R:()=>t,x:()=>a});var r=i(79474);const s={},o=r.createContext(s);function t(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:t(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);