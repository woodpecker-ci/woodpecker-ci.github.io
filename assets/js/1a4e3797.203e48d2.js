"use strict";(self.webpackChunkwoodpecker=self.webpackChunkwoodpecker||[]).push([[7920],{89343:(e,t,r)=>{r.d(t,{c:()=>u});var a=r(50959),n=r(72468);const l=["zero","one","two","few","many","other"];function s(e){return l.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,n.Z)();return(0,a.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function u(){const e=o();return{selectMessage:(t,r)=>function(e,t,r){const a=e.split("|");if(1===a.length)return a[0];a.length>r.pluralForms.length&&console.error(`For locale=${r.locale}, a maximum of ${r.pluralForms.length} plural forms are expected (${r.pluralForms.join(",")}), but the message contains ${a.length}: ${e}`);const n=r.select(t),l=r.pluralForms.indexOf(n);return a[Math.min(l,a.length-1)]}(r,t,e)}}},76278:(e,t,r)=>{r.r(t),r.d(t,{default:()=>R});var a=r(50959),n=r(72468),l=r(4540),s=r(61786),c=r(83019),o=r(14411),u=r(89343),m=r(45924),h=r(28903),i=r(64970);const p=function(){const e=(0,i.Z)(),t=(0,h.k6)(),r=(0,h.TH)(),{siteConfig:{baseUrl:a}}=(0,n.Z)(),l=e?new URLSearchParams(r.search):null,s=(null==l?void 0:l.get("q"))||"",c=(null==l?void 0:l.get("ctx"))||"",o=(null==l?void 0:l.get("version"))||"",u=e=>{const t=new URLSearchParams(r.search);return e?t.set("q",e):t.delete("q"),t};return{searchValue:s,searchContext:c,searchVersion:o,updateSearchPath:e=>{const r=u(e);t.replace({search:r.toString()})},updateSearchContext:e=>{const a=new URLSearchParams(r.search);a.set("ctx",e),t.replace({search:a.toString()})},generateSearchPageLink:e=>{const t=u(e);return`${a}search?${t.toString()}`}}};var d=r(65456),g=r(3447),f=r(15935),y=r(29010),C=r(32373),E=r(42239),S=r(16920),v=r(73332);const I={searchContextInput:"searchContextInput_qVYA",searchQueryInput:"searchQueryInput_NWhC",searchResultItem:"searchResultItem_rR17",searchResultItemPath:"searchResultItemPath_FtOn",searchResultItemSummary:"searchResultItemSummary_qDfC",searchQueryColumn:"searchQueryColumn_tCA3",searchContextColumn:"searchContextColumn_CPxo"};function x(){const{siteConfig:{baseUrl:e}}=(0,n.Z)(),{selectMessage:t}=(0,u.c)(),{searchValue:r,searchContext:l,searchVersion:c,updateSearchPath:h,updateSearchContext:i}=p(),[f,y]=(0,a.useState)(r),[C,S]=(0,a.useState)(),[x,R]=(0,a.useState)(),P=`${e}${c}`,_=(0,a.useMemo)((()=>f?(0,o.I)({id:"theme.SearchPage.existingResultsTitle",message:'Search results for "{query}"',description:"The search page title for non-empty query"},{query:f}):(0,o.I)({id:"theme.SearchPage.emptyResultsTitle",message:"Search the documentation",description:"The search page title for empty query"})),[f]);(0,a.useEffect)((()=>{h(f),C&&(f?C(f,(e=>{R(e)})):R(void 0))}),[f,C]);const b=(0,a.useCallback)((e=>{y(e.target.value)}),[]);return(0,a.useEffect)((()=>{r&&r!==f&&y(r)}),[r]),(0,a.useEffect)((()=>{!async function(){const{wrappedIndexes:e,zhDictionary:t}=await(0,d.w)(P,l);S((()=>(0,g.v)(e,t,100)))}()}),[l,P]),a.createElement(a.Fragment,null,a.createElement(s.Z,null,a.createElement("meta",{property:"robots",content:"noindex, follow"}),a.createElement("title",null,_)),a.createElement("div",{className:"container margin-vert--lg"},a.createElement("h1",null,_),a.createElement("div",{className:"row"},a.createElement("div",{className:(0,m.Z)("col",{[I.searchQueryColumn]:Array.isArray(v.Kc),"col--9":Array.isArray(v.Kc),"col--12":!Array.isArray(v.Kc)})},a.createElement("input",{type:"search",name:"q",className:I.searchQueryInput,"aria-label":"Search",onChange:b,value:f,autoComplete:"off",autoFocus:!0})),Array.isArray(v.Kc)?a.createElement("div",{className:(0,m.Z)("col","col--3","padding-left--none",I.searchContextColumn)},a.createElement("select",{name:"search-context",className:I.searchContextInput,id:"context-selector",value:l,onChange:e=>i(e.target.value)},a.createElement("option",{value:""},v.pQ?(0,o.I)({id:"theme.SearchPage.searchContext.everywhere",message:"everywhere"}):""),v.Kc.map((e=>a.createElement("option",{key:e,value:e},e))))):null),!C&&f&&a.createElement("div",null,a.createElement(E.Z,null)),x&&(x.length>0?a.createElement("p",null,t(x.length,(0,o.I)({id:"theme.SearchPage.documentsFound.plurals",message:"1 document found|{count} documents found",description:'Pluralized label for "{count} documents found". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)'},{count:x.length}))):a.createElement("p",null,(0,o.I)({id:"theme.SearchPage.noResultsText",message:"No documents were found",description:"The paragraph for empty search result"}))),a.createElement("section",null,x&&x.map((e=>a.createElement(w,{key:e.document.i,searchResult:e}))))))}function w({searchResult:{document:e,type:t,page:r,tokens:n,metadata:l}}){const s=0===t,o=2===t,u=(s?e.b:r.b).slice(),m=o?e.s:e.t;s||u.push(r.t);let h="";if(v.vc&&n.length>0){const e=new URLSearchParams;for(const t of n)e.append("_highlight",t);h=`?${e.toString()}`}return a.createElement("article",{className:I.searchResultItem},a.createElement("h2",null,a.createElement(c.Z,{to:e.u+h+(e.h||""),dangerouslySetInnerHTML:{__html:o?(0,f.C)(m,n):(0,y.o)(m,(0,C.m)(l,"t"),n,100)}})),u.length>0&&a.createElement("p",{className:I.searchResultItemPath},(0,S.e)(u)),o&&a.createElement("p",{className:I.searchResultItemSummary,dangerouslySetInnerHTML:{__html:(0,y.o)(e.t,(0,C.m)(l,"t"),n,100)}}))}const R=function(){return a.createElement(l.Z,null,a.createElement(x,null))}}}]);