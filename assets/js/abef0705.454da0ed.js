"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8319],{3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return f}});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),s=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(p.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),d=s(t),f=a,m=d["".concat(p,".").concat(f)]||d[f]||u[f]||i;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=d;var c={};for(var p in n)hasOwnProperty.call(n,p)&&(c[p]=n[p]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},2:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return c},metadata:function(){return s},toc:function(){return u}});var r=t(3117),a=t(102),i=(t(7294),t(3905)),o=["components"],c={},p="External Configuration API",s={unversionedId:"administration/external-configuration-api",id:"administration/external-configuration-api",title:"External Configuration API",description:"To provide additional management and preprocessing capabilities for pipeline configurations Woodpecker supports an HTTP api which can be enabled to call an external config service.",source:"@site/docs/30-administration/100-external-configuration-api.md",sourceDirName:"30-administration",slug:"/administration/external-configuration-api",permalink:"/docs/next/administration/external-configuration-api",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/100-external-configuration-api.md",tags:[],version:"current",sidebarPosition:100,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Prometheus",permalink:"/docs/next/administration/prometheus"},next:{title:"CLI",permalink:"/docs/next/cli"}},l={},u=[{value:"Config",id:"config",level:2},{value:"Example request made by Woodpecker",id:"example-request-made-by-woodpecker",level:3},{value:"Example response structure",id:"example-response-structure",level:3}],d={toc:u};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"external-configuration-api"},"External Configuration API"),(0,i.kt)("p",null,"To provide additional management and preprocessing capabilities for pipeline configurations Woodpecker supports an HTTP api which can be enabled to call an external config service.\nBefore the run or restart of any pipeline Woodpecker will make a POST request to an external HTTP api sending the current repository, build information and all current config files retrieved from the repository. The external api can then send back new pipeline configurations that will be used immediately or respond with ",(0,i.kt)("inlineCode",{parentName:"p"},"HTTP 204")," to tell the system to use the existing configuration."),(0,i.kt)("p",null,"Every request sent by Woodpecker is signed using a ",(0,i.kt)("a",{parentName:"p",href:"https://datatracker.ietf.org/doc/html/draft-cavage-http-signatures"},"http-signature")," by a private key (ed25519) generated on the first start of the Woodpecker server. You can get the public key for the verification of the http-signature from ",(0,i.kt)("inlineCode",{parentName:"p"},"http(s)://your-woodpecker-server/api/signature/public-key"),"."),(0,i.kt)("p",null,"A simplistic example configuration service can be found here: ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/woodpecker-ci/example-config-service"},"https://github.com/woodpecker-ci/example-config-service")),(0,i.kt)("h2",{id:"config"},"Config"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"# Server\n# ...\nWOODPECKER_CONFIG_SERVICE_ENDPOINT=https://example.com/ciconfig\n")),(0,i.kt)("h3",{id:"example-request-made-by-woodpecker"},"Example request made by Woodpecker"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "repo": {\n    "id": 100,\n    "uid": "",\n    "user_id": 0,\n    "namespace": "",\n    "name": "woodpecker-testpipe",\n    "slug": "",\n    "scm": "git",\n    "git_http_url": "",\n    "git_ssh_url": "",\n    "link": "",\n    "default_branch": "",\n    "private": true,\n    "visibility": "private",\n    "active": true,\n    "config": "",\n    "trusted": false,\n    "protected": false,\n    "ignore_forks": false,\n    "ignore_pulls": false,\n    "cancel_pulls": false,\n    "timeout": 60,\n    "counter": 0,\n    "synced": 0,\n    "created": 0,\n    "updated": 0,\n    "version": 0\n  },\n  "build": {\n    "author": "myUser",\n    "author_avatar": "https://myforge.com/avatars/d6b3f7787a685fcdf2a44e2c685c7e03",\n    "author_email": "my@email.com",\n    "branch": "master",\n    "changed_files": [\n      "somefilename.txt"\n    ],\n    "commit": "2fff90f8d288a4640e90f05049fe30e61a14fd50",\n    "created_at": 0,\n    "deploy_to": "",\n    "enqueued_at": 0,\n    "error": "",\n    "event": "push",\n    "finished_at": 0,\n    "id": 0,\n    "link_url": "https://myforge.com/myUser/woodpecker-testpipe/commit/2fff90f8d288a4640e90f05049fe30e61a14fd50",\n    "message": "test old config\\n",\n    "number": 0,\n    "parent": 0,\n    "ref": "refs/heads/master",\n    "refspec": "",\n    "remote": "",\n    "reviewed_at": 0,\n    "reviewed_by": "",\n    "sender": "myUser",\n    "signed": false,\n    "started_at": 0,\n    "status": "",\n    "timestamp": 1645962783,\n    "title": "",\n    "updated_at": 0,\n    "verified": false\n  },\n  "configs": [\n    {\n      "name": ".woodpecker.yml",\n      "data": "pipeline:\\n  backend:\\n    image: alpine\\n    commands:\\n      - echo \\"Hello there from Repo (.woodpecekr.yml)\\"\\n"\n    }\n  ]\n}\n')),(0,i.kt)("h3",{id:"example-response-structure"},"Example response structure"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "configs": [\n    {\n      "name": "central-override",\n      "data": "pipeline:\\n  backend:\\n    image: alpine\\n    commands:\\n      - echo \\"Hello there from ConfigAPI\\"\\n"\n    }\n  ]\n}\n')))}f.isMDXComponent=!0}}]);