"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7545],{9613:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>s});var o=n(9496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=o.createContext({}),c=function(e){var t=o.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},k=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,p=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=c(n),s=a,E=k["".concat(p,".").concat(s)]||k[s]||u[s]||r;return n?o.createElement(E,l(l({ref:t},d),{},{components:n})):o.createElement(E,l({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=k;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<r;c++)l[c]=n[c];return o.createElement.apply(null,l)}return o.createElement.apply(null,n)}k.displayName="MDXCreateElement"},6471:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>s,default:()=>O,frontMatter:()=>k,metadata:()=>E,toc:()=>f});var o=n(9613),a=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,d=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&d(e,n,t[n]);if(i)for(var n of i(t))c.call(t,n)&&d(e,n,t[n]);return e};const k={},s="Agent configuration",E={unversionedId:"administration/agent-config",id:"administration/agent-config",title:"Agent configuration",description:"Agents are configured by the command line or environment variables. At the minimum you need the following information:",source:"@site/docs/30-administration/15-agent-config.md",sourceDirName:"30-administration",slug:"/administration/agent-config",permalink:"/docs/next/administration/agent-config",draft:!1,editUrl:"https://github.com/woodpecker-ci/woodpecker/edit/master/docs/docs/30-administration/15-agent-config.md",tags:[],version:"current",sidebarPosition:15,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Coding",permalink:"/docs/next/administration/forges/coding"},next:{title:"Docker backend",permalink:"/docs/next/administration/backends/docker"}},m={},f=[{value:"Processes per agent",id:"processes-per-agent",level:2},{value:"All agent configuration options",id:"all-agent-configuration-options",level:2},{value:"<code>WOODPECKER_SERVER</code>",id:"woodpecker_server",level:3},{value:"<code>WOODPECKER_USERNAME</code>",id:"woodpecker_username",level:3},{value:"<code>WOODPECKER_AGENT_SECRET</code>",id:"woodpecker_agent_secret",level:3},{value:"<code>WOODPECKER_AGENT_SECRET_FILE</code>",id:"woodpecker_agent_secret_file",level:3},{value:"<code>WOODPECKER_LOG_LEVEL</code>",id:"woodpecker_log_level",level:3},{value:"<code>WOODPECKER_DEBUG_PRETTY</code>",id:"woodpecker_debug_pretty",level:3},{value:"<code>WOODPECKER_DEBUG_NOCOLOR</code>",id:"woodpecker_debug_nocolor",level:3},{value:"<code>WOODPECKER_HOSTNAME</code>",id:"woodpecker_hostname",level:3},{value:"<code>WOODPECKER_MAX_PROCS</code>",id:"woodpecker_max_procs",level:3},{value:"<code>WOODPECKER_FILTER_LABELS</code>",id:"woodpecker_filter_labels",level:3},{value:"<code>WOODPECKER_HEALTHCHECK</code>",id:"woodpecker_healthcheck",level:3},{value:"<code>WOODPECKER_KEEPALIVE_TIME</code>",id:"woodpecker_keepalive_time",level:3},{value:"<code>WOODPECKER_KEEPALIVE_TIMEOUT</code>",id:"woodpecker_keepalive_timeout",level:3},{value:"<code>WOODPECKER_GRPC_SECURE</code>",id:"woodpecker_grpc_secure",level:3},{value:"<code>WOODPECKER_GRPC_VERIFY</code>",id:"woodpecker_grpc_verify",level:3},{value:"<code>WOODPECKER_BACKEND</code>",id:"woodpecker_backend",level:3},{value:"<code>WOODPECKER_BACKEND_DOCKER_*</code>",id:"woodpecker_backend_docker_",level:3},{value:"<code>WOODPECKER_BACKEND_SSH_*</code>",id:"woodpecker_backend_ssh_",level:3}],_={toc:f};function O(e){var t,n=e,{components:a}=n,d=((e,t)=>{var n={};for(var o in e)p.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&i)for(var o of i(e))t.indexOf(o)<0&&c.call(e,o)&&(n[o]=e[o]);return n})(n,["components"]);return(0,o.kt)("wrapper",(t=u(u({},_),d),r(t,l({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("h1",u({},{id:"agent-configuration"}),"Agent configuration"),(0,o.kt)("p",null,"Agents are configured by the command line or environment variables. At the minimum you need the following information:"),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n  [...]\n  environment:\n+   - WOODPECKER_SERVER=localhost:9000\n+   - WOODPECKER_AGENT_SECRET=\"your-shared-secret-goes-here\"\n")),(0,o.kt)("p",null,"The following are automatically set and can be overridden:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"WOODPECKER_HOSTNAME if not set, becomes the OS' hostname"),(0,o.kt)("li",{parentName:"ul"},"WOODPECKER_MAX_PROCS if not set, defaults to 1")),(0,o.kt)("h2",u({},{id:"processes-per-agent"}),"Processes per agent"),(0,o.kt)("p",null,"By default the maximum processes that are run per agent is 1. If required you can add ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_MAX_PROCS")," to increase your parallel processing on a per-agent basis."),(0,o.kt)("pre",null,(0,o.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"# docker-compose.yml\nversion: '3'\n\nservices:\n  woodpecker-agent:\n  [...]\n  environment:\n    - WOODPECKER_SERVER=localhost:9000\n    - WOODPECKER_AGENT_SECRET=\"your-shared-secret-goes-here\"\n+    - WOODPECKER_MAX_PROCS=4\n")),(0,o.kt)("h2",u({},{id:"all-agent-configuration-options"}),"All agent configuration options"),(0,o.kt)("p",null,"Here is the full list of configuration options and their default variables."),(0,o.kt)("h3",u({},{id:"woodpecker_server"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_SERVER")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"localhost:9000"))),(0,o.kt)("p",null,"Configures gRPC address of the server."),(0,o.kt)("h3",u({},{id:"woodpecker_username"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_USERNAME")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"x-oauth-basic"))),(0,o.kt)("p",null,"The gRPC username."),(0,o.kt)("h3",u({},{id:"woodpecker_agent_secret"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_SECRET")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"A shared secret used by server and agents to authenticate communication. A secret can be generated by ",(0,o.kt)("inlineCode",{parentName:"p"},"openssl rand -hex 32"),"."),(0,o.kt)("h3",u({},{id:"woodpecker_agent_secret_file"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_AGENT_SECRET_FILE")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Read the value for ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_AGENT_SECRET")," from the specified filepath"),(0,o.kt)("h3",u({},{id:"woodpecker_log_level"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_LOG_LEVEL")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures the logging level. Possible values are ",(0,o.kt)("inlineCode",{parentName:"p"},"trace"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"debug"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"info"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"warn"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"error"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"fatal"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"panic"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"disabled")," and empty."),(0,o.kt)("h3",u({},{id:"woodpecker_debug_pretty"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEBUG_PRETTY")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,"Enable pretty-printed debug output."),(0,o.kt)("h3",u({},{id:"woodpecker_debug_nocolor"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_DEBUG_NOCOLOR")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"))),(0,o.kt)("p",null,"Disable colored debug output."),(0,o.kt)("h3",u({},{id:"woodpecker_hostname"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_HOSTNAME")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures the agent hostname."),(0,o.kt)("h3",u({},{id:"woodpecker_max_procs"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_MAX_PROCS")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"1"))),(0,o.kt)("p",null,"Configures the number of parallel builds."),(0,o.kt)("h3",u({},{id:"woodpecker_filter_labels"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_FILTER_LABELS")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"Configures labels to filter pipeline pick up. Use a list of key-value pairs like ",(0,o.kt)("inlineCode",{parentName:"p"},"key=value,second-key=*"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"*")," can be used as a wildcard. By default agents provide three additional labels ",(0,o.kt)("inlineCode",{parentName:"p"},"platform=os/arch"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"hostname=my-agent")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"repo=*")," which can be overwritten if needed. To learn how labels work check out the ",(0,o.kt)("a",u({parentName:"p"},{href:"/docs/next/usage/pipeline-syntax#labels"}),"pipeline syntax page"),"."),(0,o.kt)("h3",u({},{id:"woodpecker_healthcheck"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_HEALTHCHECK")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"))),(0,o.kt)("p",null,"Enable healthcheck endpoint."),(0,o.kt)("h3",u({},{id:"woodpecker_keepalive_time"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_KEEPALIVE_TIME")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: empty")),(0,o.kt)("p",null,"After a duration of this time of no activity, the agent pings the server to check if the transport is still alive."),(0,o.kt)("h3",u({},{id:"woodpecker_keepalive_timeout"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_KEEPALIVE_TIMEOUT")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"20s"))),(0,o.kt)("p",null,"After pinging for a keepalive check, the agent waits for a duration of this time before closing the connection if no activity."),(0,o.kt)("h3",u({},{id:"woodpecker_grpc_secure"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GRPC_SECURE")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"false"))),(0,o.kt)("p",null,"Configures if the connection to ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_SERVER")," should be made using a secure transport."),(0,o.kt)("h3",u({},{id:"woodpecker_grpc_verify"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_GRPC_VERIFY")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"true"))),(0,o.kt)("p",null,"Configures if the gRPC server certificate should be verified, only valid when ",(0,o.kt)("inlineCode",{parentName:"p"},"WOODPECKER_GRPC_SECURE")," is ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("h3",u({},{id:"woodpecker_backend"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Default: ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-detect"))),(0,o.kt)("p",null,"Configures the backend engine to run pipelines on. Possible values are ",(0,o.kt)("inlineCode",{parentName:"p"},"auto-detect"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"docker"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"local")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"ssh"),"."),(0,o.kt)("h3",u({},{id:"woodpecker_backend_docker_"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_DOCKER_*")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",u({parentName:"p"},{href:"backends/docker/#configuration"}),"Docker backend configuration")),(0,o.kt)("h3",u({},{id:"woodpecker_backend_ssh_"}),(0,o.kt)("inlineCode",{parentName:"h3"},"WOODPECKER_BACKEND_SSH_*")),(0,o.kt)("p",null,"See ",(0,o.kt)("a",u({parentName:"p"},{href:"backends/ssh/#configuration"}),"SSH backend configuration")))}O.isMDXComponent=!0}}]);