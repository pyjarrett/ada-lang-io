"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8760],{1716:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>d});var r=n(6687);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),m=p(n),d=i,f=m["".concat(s,".").concat(d)]||m[d]||u[d]||o;return n?r.createElement(f,a(a({ref:t},l),{},{components:n})):r.createElement(f,a({ref:t},l))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2244:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>c,toc:()=>p});var r=n(9440),i=(n(6687),n(1716));const o={sidebar_position:178},a="Annex G Numerics",c={unversionedId:"arm/AA-Annex G",id:"arm/AA-Annex G",title:"Annex G Numerics",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-Annex G.md",sourceDirName:"arm",slug:"/arm/AA-Annex G",permalink:"/docs/arm/AA-Annex G",draft:!1,tags:[],version:"current",sidebarPosition:178,frontMatter:{sidebar_position:178},sidebar:"tutorialSidebar",previous:{title:"F.3  Edited Output for Decimal Types",permalink:"/docs/arm/AA-F.3"},next:{title:"G.1  Complex Arithmetic",permalink:"/docs/arm/AA-G.1"}},s={},p=[{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4}],l={toc:p};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"annex-g-numerics"},"Annex G Numerics"),(0,i.kt)("admonition",{type:"warning"},(0,i.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"},"tracking issue"))),(0,i.kt)("p",null,"The Numerics Annex specifies "),(0,i.kt)("p",null,"features for complex arithmetic, including complex I/O;"),(0,i.kt)("p",null,'a mode ("strict mode"), in which the predefined arithmetic operations of floating point and fixed point types and the functions and operations of various predefined packages have to provide guaranteed accuracy or conform to other numeric performance requirements, which the Numerics Annex also specifies;'),(0,i.kt)("p",null,'{AI12-0445-1} a mode ("relaxed mode"), in which there are no accuracy or other numeric performance requirements to be satisfied, as for implementations not conforming to the Numerics Annex;'),(0,i.kt)("p",null,"{AI95-00296-01} models of floating point and fixed point arithmetic on which the accuracy requirements of strict mode are based;"),(0,i.kt)("p",null,"{AI95-00296-01} the definitions of the model-oriented attributes of floating point types that apply in the strict mode; and"),(0,i.kt)("p",null,"{AI95-00296-01} features for the manipulation of real and complex vectors and matrices. "),(0,i.kt)("h4",{id:"implementation-advice"},"Implementation Advice"),(0,i.kt)("p",null,"{AI05-0229-1} If Fortran (respectively, C) is widely supported in the target environment, implementations supporting the Numerics Annex should provide the child package Interfaces.Fortran (respectively, Interfaces.C) specified in Annex B and should support a convention_",(0,i.kt)("a",{parentName:"p",href:"./AA-2.3#S0002"},"identifier")," of Fortran (respectively, C) for the Convention aspect (see Annex B), thus allowing Ada programs to interface with programs written in that language. "),(0,i.kt)("p",null,"Implementation Advice: If Fortran (respectively, C) is supported in the target environment, then interfacing to Fortran (respectively, C) should be supported as specified in Annex B."),(0,i.kt)("h4",{id:"extensions-to-ada-83"},"Extensions to Ada 83"),(0,i.kt)("p",null,"This Annex is new to Ada 95."))}u.isMDXComponent=!0}}]);