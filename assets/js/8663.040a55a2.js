"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[8663],{89855:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(50959),n=a(45924),l=a(95172),o=a(43446),i=a(97289),s=a(69239),c=a(28903),m=a(32524);function u(e){const{pathname:t}=(0,c.TH)();return(0,r.useMemo)((()=>e.filter((e=>function(e,t){return!(e.unlisted&&!(0,m.Mg)(e.permalink,t))}(e,t)))),[e,t])}const d={sidebar:"sidebar_sMMu",sidebarItemTitle:"sidebarItemTitle_osBl",sidebarItemList:"sidebarItemList_W5p2",sidebarItem:"sidebarItem_IEst",sidebarItemLink:"sidebarItemLink_YYgd",sidebarItemLinkActive:"sidebarItemLinkActive_mpEf"};function g({sidebar:e}){const t=u(e.items);return r.createElement("aside",{className:"col col--3"},r.createElement("nav",{className:(0,n.Z)(d.sidebar,"thin-scrollbar"),"aria-label":(0,s.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},r.createElement("div",{className:(0,n.Z)(d.sidebarItemTitle,"margin-bottom--md")},e.title),r.createElement("ul",{className:(0,n.Z)(d.sidebarItemList,"clean-list")},t.map((e=>r.createElement("li",{key:e.permalink,className:d.sidebarItem},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:d.sidebarItemLink,activeClassName:d.sidebarItemLinkActive},e.title)))))))}var p=a(39522);function b({sidebar:e}){const t=u(e.items);return r.createElement("ul",{className:"menu__list"},t.map((e=>r.createElement("li",{key:e.permalink,className:"menu__list-item"},r.createElement(i.Z,{isNavLink:!0,to:e.permalink,className:"menu__link",activeClassName:"menu__link--active"},e.title)))))}function f(e){return r.createElement(p.Zo,{component:b,props:e})}function h({sidebar:e}){const t=(0,o.i)();return(null==e?void 0:e.items.length)?"mobile"===t?r.createElement(f,{sidebar:e}):r.createElement(g,{sidebar:e}):null}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&N(e,a,t[a]);if(E)for(var a of E(t))y.call(t,a)&&N(e,a,t[a]);return e},_=(e,t)=>{var a={};for(var r in e)P.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&E)for(var r of E(e))t.indexOf(r)<0&&y.call(e,r)&&(a[r]=e[r]);return a};function k(e){const t=e,{sidebar:a,toc:o,children:i}=t,s=_(t,["sidebar","toc","children"]),c=a&&a.items.length>0;return r.createElement(l.Z,O({},s),r.createElement("div",{className:"container margin-vert--lg"},r.createElement("div",{className:"row"},r.createElement(h,{sidebar:a}),r.createElement("main",{className:(0,n.Z)("col",{"col--7":c,"col--9 col--offset-1":!c}),itemScope:!0,itemType:"https://schema.org/Blog"},i),o&&r.createElement("div",{className:"col col--2"},o))))}},4125:(e,t,a)=>{a.d(t,{Z:()=>ee});var r=a(50959),n=a(45924),l=a(14512),o=a(98146);function i({children:e,className:t}){var a,n;const{frontMatter:i,assets:s,metadata:{description:c}}=(0,l.C)(),{withBaseUrl:m}=(0,o.C)(),u=null!=(a=s.image)?a:i.image,d=null!=(n=i.keywords)?n:[];return r.createElement("article",{className:t,itemProp:"blogPost",itemScope:!0,itemType:"https://schema.org/BlogPosting"},c&&r.createElement("meta",{itemProp:"description",content:c}),u&&r.createElement("link",{itemProp:"image",href:m(u,{absolute:!0})}),d.length>0&&r.createElement("meta",{itemProp:"keywords",content:d.join(",")}),e)}var s=a(97289);const c={title:"title_ybbn"};function m({className:e}){const{metadata:t,isBlogPostPage:a}=(0,l.C)(),{permalink:o,title:i}=t,m=a?"h1":"h2";return r.createElement(m,{className:(0,n.Z)(c.title,e),itemProp:"headline"},a?i:r.createElement(s.Z,{itemProp:"url",to:o},i))}var u=a(69239),d=a(19199);const g={container:"container_oOd8"};function p({readingTime:e}){const t=function(){const{selectMessage:e}=(0,d.c)();return t=>{const a=Math.ceil(t);return e(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return r.createElement(r.Fragment,null,t(e))}function b({date:e,formattedDate:t}){return r.createElement("time",{dateTime:e,itemProp:"datePublished"},t)}function f(){return r.createElement(r.Fragment,null," \xb7 ")}function h({className:e}){const{metadata:t}=(0,l.C)(),{date:a,formattedDate:o,readingTime:i}=t;return r.createElement("div",{className:(0,n.Z)(g.container,"margin-vert--md",e)},r.createElement(b,{date:a,formattedDate:o}),void 0!==i&&r.createElement(r.Fragment,null,r.createElement(f,null),r.createElement(p,{readingTime:i})))}var v=Object.defineProperty,E=Object.getOwnPropertySymbols,P=Object.prototype.hasOwnProperty,y=Object.prototype.propertyIsEnumerable,N=(e,t,a)=>t in e?v(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,O=(e,t)=>{for(var a in t||(t={}))P.call(t,a)&&N(e,a,t[a]);if(E)for(var a of E(t))y.call(t,a)&&N(e,a,t[a]);return e};function _(e){return e.href?r.createElement(s.Z,O({},e)):r.createElement(r.Fragment,null,e.children)}function k({author:e,className:t}){const{name:a,title:l,url:o,imageURL:i,email:s}=e,c=o||s&&`mailto:${s}`||void 0;return r.createElement("div",{className:(0,n.Z)("avatar margin-bottom--sm",t)},i&&r.createElement(_,{href:c,className:"avatar__photo-link"},r.createElement("img",{className:"avatar__photo",src:i,alt:a,itemProp:"image"})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(_,{href:c,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))}const Z={authorCol:"authorCol_YNtB",imageOnlyAuthorRow:"imageOnlyAuthorRow_gRLR",imageOnlyAuthorCol:"imageOnlyAuthorCol_tcKR"};var w=Object.defineProperty,I=Object.defineProperties,C=Object.getOwnPropertyDescriptors,T=Object.getOwnPropertySymbols,j=Object.prototype.hasOwnProperty,L=Object.prototype.propertyIsEnumerable,x=(e,t,a)=>t in e?w(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,F=(e,t)=>{for(var a in t||(t={}))j.call(t,a)&&x(e,a,t[a]);if(T)for(var a of T(t))L.call(t,a)&&x(e,a,t[a]);return e},R=(e,t)=>I(e,C(t));function B({className:e}){const{metadata:{authors:t},assets:a}=(0,l.C)();if(0===t.length)return null;const o=t.every((({name:e})=>!e));return r.createElement("div",{className:(0,n.Z)("margin-top--md margin-bottom--sm",o?Z.imageOnlyAuthorRow:"row",e)},t.map(((e,t)=>{var l;return r.createElement("div",{className:(0,n.Z)(!o&&"col col--6",o?Z.imageOnlyAuthorCol:Z.authorCol),key:t},r.createElement(k,{author:R(F({},e),{imageURL:null!=(l=a.authorsImageUrls[t])?l:e.imageURL})}))})))}function M(){return r.createElement("header",null,r.createElement(m,null),r.createElement(h,null),r.createElement(B,null))}var A=a(2806),U=a(79928);function D({children:e,className:t}){const{isBlogPostPage:a}=(0,l.C)();return r.createElement("div",{id:a?A.blogPostContainerID:void 0,className:(0,n.Z)("markdown",t),itemProp:"articleBody"},r.createElement(U.Z,null,e))}var S=a(92990),$=a(89543),z=Object.defineProperty,W=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,Y=Object.prototype.propertyIsEnumerable,q=(e,t,a)=>t in e?z(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,G=(e,t)=>{for(var a in t||(t={}))H.call(t,a)&&q(e,a,t[a]);if(W)for(var a of W(t))Y.call(t,a)&&q(e,a,t[a]);return e},J=(e,t)=>{var a={};for(var r in e)H.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&W)for(var r of W(e))t.indexOf(r)<0&&Y.call(e,r)&&(a[r]=e[r]);return a};function K(){return r.createElement("b",null,r.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function V(e){const t=e,{blogPostTitle:a}=t,n=J(t,["blogPostTitle"]);return r.createElement(s.Z,G({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:a})},n),r.createElement(K,null))}const X={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_kaCE"};function Q(){const{metadata:e,isBlogPostPage:t}=(0,l.C)(),{tags:a,title:o,editUrl:i,hasTruncateMarker:s}=e,c=!t&&s,m=a.length>0;return m||c||i?r.createElement("footer",{className:(0,n.Z)("row docusaurus-mt-lg",t&&X.blogPostFooterDetailsFull)},m&&r.createElement("div",{className:(0,n.Z)("col",{"col--9":c})},r.createElement($.Z,{tags:a})),t&&i&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(S.Z,{editUrl:i})),c&&r.createElement("div",{className:(0,n.Z)("col text--right",{"col--3":m})},r.createElement(V,{blogPostTitle:o,to:e.permalink}))):null}function ee({children:e,className:t}){const a=function(){const{isBlogPostPage:e}=(0,l.C)();return e?void 0:"margin-bottom--xl"}();return r.createElement(i,{className:(0,n.Z)(a,t)},r.createElement(M,null),r.createElement(D,null,e),r.createElement(Q,null))}},92990:(e,t,a)=>{a.d(t,{Z:()=>h});var r=a(50959),n=a(69239),l=a(72196),o=a(97289),i=a(45924);const s={iconEdit:"iconEdit_XuL5"};var c=Object.defineProperty,m=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,g=(e,t,a)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&g(e,a,t[a]);if(m)for(var a of m(t))d.call(t,a)&&g(e,a,t[a]);return e},b=(e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&m)for(var r of m(e))t.indexOf(r)<0&&d.call(e,r)&&(a[r]=e[r]);return a};function f(e){var t=e,{className:a}=t,n=b(t,["className"]);return r.createElement("svg",p({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s.iconEdit,a),"aria-hidden":"true"},n),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function h({editUrl:e}){return r.createElement(o.Z,{to:e,className:l.k.common.editThisPage},r.createElement(f,null),r.createElement(n.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},90157:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(50959),n=a(45924),l=a(97289);function o(e){const{permalink:t,title:a,subLabel:o,isNext:i}=e;return r.createElement(l.Z,{className:(0,n.Z)("pagination-nav__link",i?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&r.createElement("div",{className:"pagination-nav__sublabel"},o),r.createElement("div",{className:"pagination-nav__label"},a))}},16018:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(50959),n=a(45924),l=a(97289);const o={tag:"tag_UHGZ",tagRegular:"tagRegular_SVfi",tagWithCount:"tagWithCount_nHrs"};function i({permalink:e,label:t,count:a}){return r.createElement(l.Z,{href:e,className:(0,n.Z)(o.tag,a?o.tagWithCount:o.tagRegular)},t,a&&r.createElement("span",null,a))}},89543:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(50959),n=a(45924),l=a(69239),o=a(16018);const i={tags:"tags_PJ9n",tag:"tag_ndj1"};function s({tags:e}){return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(l.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,n.Z)(i.tags,"padding--none","margin-left--sm")},e.map((({label:e,permalink:t})=>r.createElement("li",{key:t,className:i.tag},r.createElement(o.Z,{label:e,permalink:t}))))))}},14512:(e,t,a)=>{a.d(t,{C:()=>i,n:()=>o});var r=a(50959),n=a(79744);const l=r.createContext(null);function o({children:e,content:t,isBlogPostPage:a=!1}){const n=function({content:e,isBlogPostPage:t}){return(0,r.useMemo)((()=>({metadata:e.metadata,frontMatter:e.frontMatter,assets:e.assets,toc:e.toc,isBlogPostPage:t})),[e,t])}({content:t,isBlogPostPage:a});return r.createElement(l.Provider,{value:n},e)}function i(){const e=(0,r.useContext)(l);if(null===e)throw new n.i6("BlogPostProvider");return e}},19199:(e,t,a)=>{a.d(t,{c:()=>c});var r=a(50959),n=a(94817);const l=["zero","one","two","few","many","other"];function o(e){return l.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function s(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function c(){const e=s();return{selectMessage:(t,a)=>function(e,t,a){const r=e.split("|");if(1===r.length)return r[0];r.length>a.pluralForms.length&&console.error(`For locale=${a.locale}, a maximum of ${a.pluralForms.length} plural forms are expected (${a.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const n=a.select(t),l=a.pluralForms.indexOf(n);return r[Math.min(l,r.length-1)]}(a,t,e)}}}}]);