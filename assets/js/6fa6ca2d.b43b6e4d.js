"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5476],{1716:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var a=r(6687);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=p(r),m=n,g=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?a.createElement(g,i(i({ref:t},c),{},{components:r})):a.createElement(g,i({ref:t},c))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var p=2;p<o;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},3833:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>p});var a=r(9440),n=(r(6687),r(1716));const o={sidebar_position:1},i="The Big Five Structural Elements",s={unversionedId:"overview/five-structural-elements",id:"overview/five-structural-elements",title:"The Big Five Structural Elements",description:"Ada provides five major elements for program organization.",source:"@site/docs/overview/five-structural-elements.md",sourceDirName:"overview",slug:"/overview/five-structural-elements",permalink:"/docs/overview/five-structural-elements",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Overview",permalink:"/docs/category/overview"},next:{title:"Building Blocks",permalink:"/docs/overview/building-blocks"}},l={},p=[],c={toc:p};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"the-big-five-structural-elements"},"The Big Five Structural Elements"),(0,n.kt)("p",null,"Ada provides five major elements for program organization."),(0,n.kt)("p",null,"Unline many languages, general types are not used as namespaces for writing\nfunctions or procedures. While type are important in Ada, they play a\ndifferent role, and are not used as a way to structure program text. Instead\nrelated types and their operations go into a package."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"packages",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"group entities"),(0,n.kt)("li",{parentName:"ul"},"unit of compilation"))),(0,n.kt)("li",{parentName:"ul"},"subprogram",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"reusable sequences of instructions (algorithms)"))),(0,n.kt)("li",{parentName:"ul"},"generics",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Allow writing a package or subprogram across arbitrary types, packages\nand subprograms which meet given specifications."))),(0,n.kt)("li",{parentName:"ul"},"tasks",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"define operations done in parallel"))),(0,n.kt)("li",{parentName:"ul"},"protected objects",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"coordinate access to shared data behind possibly complex guard conditions")))),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null}),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Linear")),(0,n.kt)("th",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"th"},"Concurrent")))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Passive")),(0,n.kt)("td",{parentName:"tr",align:null},"Packages"),(0,n.kt)("td",{parentName:"tr",align:null},"Protected Objects")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("strong",{parentName:"td"},"Active")),(0,n.kt)("td",{parentName:"tr",align:null},"Subprograms"),(0,n.kt)("td",{parentName:"tr",align:null},"Tasks")))),(0,n.kt)("p",null,"Packages and protected objects are passive, whereas tasks and subprograms are\nactive program behavior."),(0,n.kt)("p",null,"Packages provide separation into compilation units and act as\ncontainer for all entitites. Subprograms, whether procedures functions provide\nreusable algorithms and behaviors."),(0,n.kt)("p",null,"It is sometimes useful to write a package around unknown types and subprograms\nto be specified later. Generics provide this mechanism for both packages and subprograms.",(0,n.kt)("br",{parentName:"p"}),"\n","Generics do not provide structure on their own, but expand the capabilities\nof packages and subprograms to apply behavior to arbitrarily defined types,\nsubprograms and even packages."),(0,n.kt)("p",null,"Two structures assist in and provide concurrency. Tasks do concurrent computation,\nselection of operations from a blocked state, and conditional and timed waits.\nCoordination of shared resources is given by protected objects.\nBoth one-off and instantiable versions of tasks and protected types can be created. These\ntypes also following scoping rules and hence have access to elements where they\nwere declared."))}u.isMDXComponent=!0}}]);