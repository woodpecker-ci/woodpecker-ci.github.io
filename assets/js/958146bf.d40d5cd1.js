"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[3351],{3905:function(e,r,n){n.d(r,{Zo:function(){return c},kt:function(){return m}});var t=n(7294);function o(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function i(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){o(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function p(e,r){if(null==e)return{};var n,t,o=function(e,r){if(null==e)return{};var n,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(o[n]=e[n]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):i(i({},r),e)),n},c=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),u=l(n),m=o,f=u["".concat(s,".").concat(m)]||u[m]||d[m]||a;return n?t.createElement(f,i(i({ref:r},c),{},{components:n})):t.createElement(f,i({ref:r},c))}));function m(e,r){var n=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:o,i[1]=p;for(var l=2;l<a;l++)i[l]=n[l];return t.createElement.apply(null,i)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3673:function(e,r,n){n.r(r),n.d(r,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return p},metadata:function(){return l},toc:function(){return d}});var t=n(3117),o=n(102),a=(n(7294),n(3905)),i=["components"],p={},s="Proxy",l={unversionedId:"administration/proxy",id:"version-0.15/administration/proxy",title:"Proxy",description:"Apache",source:"@site/versioned_docs/version-0.15/30-administration/70-proxy.md",sourceDirName:"30-administration",slug:"/administration/proxy",permalink:"/docs/administration/proxy",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/versioned_docs/version-0.15/30-administration/70-proxy.md",tags:[],version:"0.15",sidebarPosition:70,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"SSL",permalink:"/docs/administration/ssl"},next:{title:"Kubernetes",permalink:"/docs/administration/kubernetes"}},c={},d=[{value:"Apache",id:"apache",level:2},{value:"Nginx",id:"nginx",level:2},{value:"Caddy",id:"caddy",level:2},{value:"Ngrok",id:"ngrok",level:2}],u={toc:d};function m(e){var r=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"proxy"},"Proxy"),(0,a.kt)("h2",{id:"apache"},"Apache"),(0,a.kt)("p",null,"This guide provides a brief overview for installing Woodpecker server behind the Apache2 webserver. This is an example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nohighlight"},'ProxyPreserveHost On\n\nRequestHeader set X-Forwarded-Proto "https"\n\nProxyPass / http://127.0.0.1:8000/\nProxyPassReverse / http://127.0.0.1:8000/\n')),(0,a.kt)("p",null,"You must have the below Apache modules installed."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nohighlight"},"a2enmod proxy\na2enmod proxy_http\n")),(0,a.kt)("p",null,"You must configure Apache to set ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded-Proto")," when using https."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},'ProxyPreserveHost On\n\n+RequestHeader set X-Forwarded-Proto "https"\n\nProxyPass / http://127.0.0.1:8000/\nProxyPassReverse / http://127.0.0.1:8000/\n')),(0,a.kt)("h2",{id:"nginx"},"Nginx"),(0,a.kt)("p",null,"This guide provides a basic overview for installing Woodpecker server behind the nginx webserver. For more advanced configuration options please consult the official nginx ",(0,a.kt)("a",{parentName:"p",href:"https://www.nginx.com/resources/admin-guide/"},"documentation"),"."),(0,a.kt)("p",null,"Example configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nginx"},"server {\n    listen 80;\n    server_name woodpecker.example.com;\n\n    location / {\n        proxy_set_header X-Forwarded-For $remote_addr;\n        proxy_set_header X-Forwarded-Proto $scheme;\n        proxy_set_header Host $http_host;\n\n        proxy_pass http://127.0.0.1:8000;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_buffering off;\n\n        chunked_transfer_encoding off;\n    }\n}\n")),(0,a.kt)("p",null,"You must configure the proxy to set ",(0,a.kt)("inlineCode",{parentName:"p"},"X-Forwarded")," proxy headers:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-diff"},"server {\n    listen 80;\n    server_name woodpecker.example.com;\n\n    location / {\n+       proxy_set_header X-Forwarded-For $remote_addr;\n+       proxy_set_header X-Forwarded-Proto $scheme;\n\n        proxy_pass http://127.0.0.1:8000;\n        proxy_redirect off;\n        proxy_http_version 1.1;\n        proxy_buffering off;\n\n        chunked_transfer_encoding off;\n    }\n}\n")),(0,a.kt)("h2",{id:"caddy"},"Caddy"),(0,a.kt)("p",null,"This guide provides a brief overview for installing Woodpecker server behind the ",(0,a.kt)("a",{parentName:"p",href:"https://caddyserver.com/"},"Caddy webserver"),". This is an example caddyfile proxy configuration:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-nohighlight"},"woodpecker.example.com {\n  reverse_proxy woodpecker-server:8000\n}\n")),(0,a.kt)("h2",{id:"ngrok"},"Ngrok"),(0,a.kt)("p",null,"After installing ",(0,a.kt)("a",{parentName:"p",href:"https://ngrok.com/"},"ngrok"),", open a new console and run:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"ngrok http 8000\n")),(0,a.kt)("p",null,"Set ",(0,a.kt)("inlineCode",{parentName:"p"},"WOODPECKER_HOST")," (for example in ",(0,a.kt)("inlineCode",{parentName:"p"},"docker-compose.yml"),") to the ngrok url (usually xxx.ngrok.io) and start the server."))}m.isMDXComponent=!0}}]);