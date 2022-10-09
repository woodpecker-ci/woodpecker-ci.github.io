"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[9514,853],{18:(e,t,n)=>{n.r(t),n.d(t,{default:()=>at});var a=n(9496),r=n(5924),l=n(702),o=n(5676),c=n(3995),i=n(939),s=n(4745),d=n(1898),m=n(7198),u=n(6274),b=n(7662),p=n(1137);const f="backToTopButton_Fhvy",h="backToTopButtonShow_hrVB";function v(){const{shown:e,scrollToTop:t}=function({threshold:e}){const[t,n]=(0,a.useState)(!1),r=(0,a.useRef)(!1),{startScroll:l,cancelScroll:o}=(0,b.Ct)();return(0,b.RF)((({scrollY:t},a)=>{const l=null==a?void 0:a.scrollY;l&&(r.current?r.current=!1:t>=l?(o(),n(!1)):t<e?n(!1):t+window.innerHeight<document.documentElement.scrollHeight&&n(!0))})),(0,p.S)((e=>{e.location.hash&&(r.current=!0,n(!1))})),{shown:t,scrollToTop:()=>l(0)}}({threshold:300});return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,r.Z)("clean-btn",o.k.common.backToTopButton,f,e&&h),type:"button",onClick:t})}var E=n(3578),g=n(717),y=n(9218),k=n(210),_=Object.defineProperty,C=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,O=Object.prototype.propertyIsEnumerable,S=(e,t,n)=>t in e?_(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function w(e){return a.createElement("svg",((e,t)=>{for(var n in t||(t={}))I.call(t,n)&&S(e,n,t[n]);if(C)for(var n of C(t))O.call(t,n)&&S(e,n,t[n]);return e})({width:"20",height:"20","aria-hidden":"true"},e),a.createElement("g",{fill:"#7a7a7a"},a.createElement("path",{d:"M9.992 10.023c0 .2-.062.399-.172.547l-4.996 7.492a.982.982 0 01-.828.454H1c-.55 0-1-.453-1-1 0-.2.059-.403.168-.551l4.629-6.942L.168 3.078A.939.939 0 010 2.528c0-.548.45-.997 1-.997h2.996c.352 0 .649.18.828.45L9.82 9.472c.11.148.172.347.172.55zm0 0"}),a.createElement("path",{d:"M19.98 10.023c0 .2-.058.399-.168.547l-4.996 7.492a.987.987 0 01-.828.454h-3c-.547 0-.996-.453-.996-1 0-.2.059-.403.168-.551l4.625-6.942-4.625-6.945a.939.939 0 01-.168-.55 1 1 0 01.996-.997h3c.348 0 .649.18.828.45l4.996 7.492c.11.148.168.347.168.55zm0 0"})))}const N="collapseSidebarButton_j8nx",x="collapseSidebarButtonIcon_pmXn";function P({onClick:e}){return a.createElement("button",{type:"button",title:(0,u.I)({id:"theme.docs.sidebar.collapseButtonTitle",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.collapseButtonAriaLabel",message:"Collapse sidebar",description:"The title attribute for collapse button of doc sidebar"}),className:(0,r.Z)("button button--secondary button--outline",N),onClick:e},a.createElement(w,{className:x}))}var T=n(1581),j=n(739);const Z=Symbol("EmptyContext"),L=a.createContext(Z);function A({children:e}){const[t,n]=(0,a.useState)(null),r=(0,a.useMemo)((()=>({expandedItem:t,setExpandedItem:n})),[t]);return a.createElement(L.Provider,{value:r},e)}var M=n(4753),F=n(1982),H=n(8003),B=n(676),W=Object.defineProperty,R=Object.getOwnPropertySymbols,D=Object.prototype.hasOwnProperty,V=Object.prototype.propertyIsEnumerable,z=(e,t,n)=>t in e?W(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function U({categoryLabel:e,onClick:t}){return a.createElement("button",{"aria-label":(0,u.I)({id:"theme.DocSidebarItem.toggleCollapsedCategoryAriaLabel",message:"Toggle the collapsible sidebar category '{label}'",description:"The ARIA label to toggle the collapsible sidebar category"},{label:e}),type:"button",className:"clean-btn menu__caret",onClick:t})}function q(e){var t=e,{item:n,onItemClick:l,activePath:c,level:s,index:d}=t,m=((e,t)=>{var n={};for(var a in e)D.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&R)for(var a of R(e))t.indexOf(a)<0&&V.call(e,a)&&(n[a]=e[a]);return n})(t,["item","onItemClick","activePath","level","index"]);const{items:u,label:b,collapsible:p,className:f,href:h}=n,{docs:{sidebar:{autoCollapseCategories:v}}}=(0,y.L)(),E=function(e){const t=(0,B.Z)();return(0,a.useMemo)((()=>e.href?e.href:!t&&e.collapsible?(0,i.Wl)(e):void 0),[e,t])}(n),g=(0,i._F)(n,c),k=(0,F.Mg)(h,c),{collapsed:_,setCollapsed:C}=(0,M.u)({initialState:()=>!!p&&(!g&&n.collapsed)}),{expandedItem:I,setExpandedItem:O}=function(){const e=(0,a.useContext)(L);if(e===Z)throw new j.i6("DocSidebarItemsExpandedStateProvider");return e}(),S=(e=!_)=>{O(e?null:d),C(e)};return function({isActive:e,collapsed:t,updateCollapsed:n}){const r=(0,j.D9)(e);(0,a.useEffect)((()=>{e&&!r&&t&&n(!1)}),[e,r,t,n])}({isActive:g,collapsed:_,updateCollapsed:S}),(0,a.useEffect)((()=>{p&&null!=I&&I!==d&&v&&C(!0)}),[p,I,d,C,v]),a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemCategory,o.k.docs.docSidebarItemCategoryLevel(s),"menu__list-item",{"menu__list-item--collapsed":_},f)},a.createElement("div",{className:(0,r.Z)("menu__list-item-collapsible",{"menu__list-item-collapsible--active":k})},a.createElement(H.Z,((e,t)=>{for(var n in t||(t={}))D.call(t,n)&&z(e,n,t[n]);if(R)for(var n of R(t))V.call(t,n)&&z(e,n,t[n]);return e})({className:(0,r.Z)("menu__link",{"menu__link--sublist":p,"menu__link--sublist-caret":!h&&p,"menu__link--active":g}),onClick:p?e=>{null==l||l(n),h?S(!1):(e.preventDefault(),S())}:()=>{null==l||l(n)},"aria-current":k?"page":void 0,"aria-expanded":p?!_:void 0,href:p?null!=E?E:"#":E},m),b),h&&p&&a.createElement(U,{categoryLabel:b,onClick:e=>{e.preventDefault(),S()}})),a.createElement(M.z,{lazy:!0,as:"ul",className:"menu__list",collapsed:_},a.createElement(ve,{items:u,tabIndex:_?-1:0,onItemClick:l,activePath:c,level:s+1})))}var X=n(3155),Y=n(5168);const G="menuExternalLink_Vin9";var J=Object.defineProperty,K=Object.getOwnPropertySymbols,Q=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,ee=(e,t,n)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,te=(e,t)=>{for(var n in t||(t={}))Q.call(t,n)&&ee(e,n,t[n]);if(K)for(var n of K(t))$.call(t,n)&&ee(e,n,t[n]);return e};function ne(e){var t=e,{item:n,onItemClick:l,activePath:c,level:s,index:d}=t,m=((e,t)=>{var n={};for(var a in e)Q.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&K)for(var a of K(e))t.indexOf(a)<0&&$.call(e,a)&&(n[a]=e[a]);return n})(t,["item","onItemClick","activePath","level","index"]);const{href:u,label:b,className:p,autoAddBaseUrl:f}=n,h=(0,i._F)(n,c),v=(0,X.Z)(u);return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(s),"menu__list-item",p),key:b},a.createElement(H.Z,te(te({className:(0,r.Z)("menu__link",!v&&G,{"menu__link--active":h}),autoAddBaseUrl:f,"aria-current":h?"page":void 0,to:u},v&&{onClick:l?()=>l(n):void 0}),m),b,!v&&a.createElement(Y.Z,null)))}const ae="menuHtmlItem_arMX";function re({item:e,level:t,index:n}){const{value:l,defaultStyle:c,className:i}=e;return a.createElement("li",{className:(0,r.Z)(o.k.docs.docSidebarItemLink,o.k.docs.docSidebarItemLinkLevel(t),c&&[ae,"menu__list-item"],i),key:n,dangerouslySetInnerHTML:{__html:l}})}var le=Object.defineProperty,oe=Object.getOwnPropertySymbols,ce=Object.prototype.hasOwnProperty,ie=Object.prototype.propertyIsEnumerable,se=(e,t,n)=>t in e?le(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,de=(e,t)=>{for(var n in t||(t={}))ce.call(t,n)&&se(e,n,t[n]);if(oe)for(var n of oe(t))ie.call(t,n)&&se(e,n,t[n]);return e};function me(e){var t=e,{item:n}=t,r=((e,t)=>{var n={};for(var a in e)ce.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&oe)for(var a of oe(e))t.indexOf(a)<0&&ie.call(e,a)&&(n[a]=e[a]);return n})(t,["item"]);switch(n.type){case"category":return a.createElement(q,de({item:n},r));case"html":return a.createElement(re,de({item:n},r));default:return a.createElement(ne,de({item:n},r))}}var ue=Object.defineProperty,be=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,fe=Object.prototype.propertyIsEnumerable,he=(e,t,n)=>t in e?ue(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const ve=(0,a.memo)((function(e){var t=e,{items:n}=t,r=((e,t)=>{var n={};for(var a in e)pe.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&be)for(var a of be(e))t.indexOf(a)<0&&fe.call(e,a)&&(n[a]=e[a]);return n})(t,["items"]);return a.createElement(A,null,n.map(((e,t)=>a.createElement(me,((e,t)=>{for(var n in t||(t={}))pe.call(t,n)&&he(e,n,t[n]);if(be)for(var n of be(t))fe.call(t,n)&&he(e,n,t[n]);return e})({key:t,item:e,index:t},r)))))})),Ee="menu_dzul",ge="menuWithAnnouncementBar_TWPW";function ye({path:e,sidebar:t,className:n}){const l=function(){const{isActive:e}=(0,T.nT)(),[t,n]=(0,a.useState)(e);return(0,b.RF)((({scrollY:t})=>{e&&n(0===t)}),[e]),e&&t}();return a.createElement("nav",{className:(0,r.Z)("menu thin-scrollbar",Ee,l&&ge,n)},a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(ve,{items:t,activePath:e,level:1})))}const ke="sidebar_vtEg",_e="sidebarWithHideableNavbar_bX8Q",Ce="sidebarHidden_eLSk",Ie="sidebarLogo_XPGR";const Oe=a.memo((function({path:e,sidebar:t,onCollapse:n,isHidden:l}){const{navbar:{hideOnScroll:o},docs:{sidebar:{hideable:c}}}=(0,y.L)();return a.createElement("div",{className:(0,r.Z)(ke,o&&_e,l&&Ce)},o&&a.createElement(k.Z,{tabIndex:-1,className:Ie}),a.createElement(ye,{path:e,sidebar:t}),c&&a.createElement(P,{onClick:n}))}));var Se=n(527),we=n(4318);const Ne=({sidebar:e,path:t})=>{const n=(0,we.e)();return a.createElement("ul",{className:(0,r.Z)(o.k.docs.docSidebarMenu,"menu__list")},a.createElement(ve,{items:e,activePath:t,onItemClick:e=>{"category"===e.type&&e.href&&n.toggle(),"link"===e.type&&n.toggle()},level:1}))};const xe=a.memo((function(e){return a.createElement(Se.Zo,{component:Ne,props:e})}));var Pe=Object.defineProperty,Te=Object.getOwnPropertySymbols,je=Object.prototype.hasOwnProperty,Ze=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?Pe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,Ae=(e,t)=>{for(var n in t||(t={}))je.call(t,n)&&Le(e,n,t[n]);if(Te)for(var n of Te(t))Ze.call(t,n)&&Le(e,n,t[n]);return e};function Me(e){const t=(0,g.i)(),n="desktop"===t||"ssr"===t,r="mobile"===t;return a.createElement(a.Fragment,null,n&&a.createElement(Oe,Ae({},e)),r&&a.createElement(xe,Ae({},e)))}const Fe="expandButton_FilH",He="expandButtonIcon_D0Uq";function Be({toggleSidebar:e}){return a.createElement("div",{className:Fe,title:(0,u.I)({id:"theme.docs.sidebar.expandButtonTitle",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),"aria-label":(0,u.I)({id:"theme.docs.sidebar.expandButtonAriaLabel",message:"Expand sidebar",description:"The ARIA label and title attribute for expand button of doc sidebar"}),tabIndex:0,role:"button",onKeyDown:e,onClick:e},a.createElement(w,{className:He}))}const We="docSidebarContainer_M0AI",Re="docSidebarContainerHidden_uCTq";function De({children:e}){var t;const n=(0,d.V)();return a.createElement(a.Fragment,{key:null!=(t=null==n?void 0:n.name)?t:"noSidebar"},e)}function Ve({sidebar:e,hiddenSidebarContainer:t,setHiddenSidebarContainer:n}){const{pathname:l}=(0,E.TH)(),[c,i]=(0,a.useState)(!1),s=(0,a.useCallback)((()=>{c&&i(!1),n((e=>!e))}),[n,c]);return a.createElement("aside",{className:(0,r.Z)(o.k.docs.docSidebarContainer,We,t&&Re),onTransitionEnd:e=>{e.currentTarget.classList.contains(We)&&t&&i(!0)}},a.createElement(De,null,a.createElement(Me,{sidebar:e,path:l,onCollapse:s,isHidden:c})),c&&a.createElement(Be,{toggleSidebar:s}))}const ze={docMainContainer:"docMainContainer_WlNH",docMainContainerEnhanced:"docMainContainerEnhanced_w4j9",docItemWrapperEnhanced:"docItemWrapperEnhanced_RJDH"};function Ue({hiddenSidebarContainer:e,children:t}){const n=(0,d.V)();return a.createElement("main",{className:(0,r.Z)(ze.docMainContainer,(e||!n)&&ze.docMainContainerEnhanced)},a.createElement("div",{className:(0,r.Z)("container padding-top--md padding-bottom--lg",ze.docItemWrapper,e&&ze.docItemWrapperEnhanced)},t))}const qe="docPage_nHRo",Xe="docsWrapper_f7HU";function Ye({children:e}){const t=(0,d.V)(),[n,r]=(0,a.useState)(!1);return a.createElement(m.Z,{wrapperClassName:Xe},a.createElement(v,null),a.createElement("div",{className:qe},t&&a.createElement(Ve,{sidebar:t.items,hiddenSidebarContainer:n,setHiddenSidebarContainer:r}),a.createElement(Ue,{hiddenSidebarContainer:n},e)))}var Ge=n(853),Je=n(2413),Ke=Object.defineProperty,Qe=Object.getOwnPropertySymbols,$e=Object.prototype.hasOwnProperty,et=Object.prototype.propertyIsEnumerable,tt=(e,t,n)=>t in e?Ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;function nt(e){const{versionMetadata:t}=e;return a.createElement(a.Fragment,null,a.createElement(Je.Z,{version:t.version,tag:(0,c.os)(t.pluginId,t.version)}),a.createElement(l.d,null,t.noIndex&&a.createElement("meta",{name:"robots",content:"noindex, nofollow"})))}function at(e){const{versionMetadata:t}=e,n=(0,i.hI)(e);if(!n)return a.createElement(Ge.default,null);const{docElement:c,sidebarName:m,sidebarItems:u}=n;return a.createElement(a.Fragment,null,a.createElement(nt,((e,t)=>{for(var n in t||(t={}))$e.call(t,n)&&tt(e,n,t[n]);if(Qe)for(var n of Qe(t))et.call(t,n)&&tt(e,n,t[n]);return e})({},e)),a.createElement(l.FG,{className:(0,r.Z)(o.k.wrapper.docsPages,o.k.page.docsDocPage,e.versionMetadata.className)},a.createElement(s.q,{version:t},a.createElement(d.b,{name:m,items:u},a.createElement(Ye,null,c)))))}},853:(e,t,n)=>{n.r(t),n.d(t,{default:()=>c});var a=n(9496),r=n(6274),l=n(702),o=n(7198);function c(){return a.createElement(a.Fragment,null,a.createElement(l.d,{title:(0,r.I)({id:"theme.NotFound.title",message:"Page Not Found"})}),a.createElement(o.Z,null,a.createElement("main",{className:"container margin-vert--xl"},a.createElement("div",{className:"row"},a.createElement("div",{className:"col col--6 col--offset-3"},a.createElement("h1",{className:"hero__title"},a.createElement(r.Z,{id:"theme.NotFound.title",description:"The title of the 404 page"},"Page Not Found")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p1",description:"The first paragraph of the 404 page"},"We could not find what you were looking for.")),a.createElement("p",null,a.createElement(r.Z,{id:"theme.NotFound.p2",description:"The 2nd paragraph of the 404 page"},"Please contact the owner of the site that linked you to the original URL and let them know their link is broken.")))))))}},4745:(e,t,n)=>{n.d(t,{E:()=>c,q:()=>o});var a=n(9496),r=n(739);const l=a.createContext(null);function o({children:e,version:t}){return a.createElement(l.Provider,{value:t},e)}function c(){const e=(0,a.useContext)(l);if(null===e)throw new r.i6("DocsVersionProvider");return e}}}]);