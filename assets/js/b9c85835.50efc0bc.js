"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1592],{7967:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>T,contentTitle:()=>y,default:()=>S,frontMatter:()=>f,metadata:()=>g,toc:()=>x});var n=a(91716),i=a(21256),r=a(24895),o=a(28090),s=a(48424),p=a(82262),l=Object.defineProperty,d=Object.defineProperties,m=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,A=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,u=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,h=(e,t)=>{for(var a in t||(t={}))A.call(t,a)&&u(e,a,t[a]);if(c)for(var a of c(t))k.call(t,a)&&u(e,a,t[a]);return e};const f={sidebar_position:203},y="J.10 Specific Suppression of Checks",g={unversionedId:"arm/AA-J/AA-J.10",id:"arm/AA-J/AA-J.10",title:"J.10 Specific Suppression of Checks",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-J/AA-J.10.mdx",sourceDirName:"arm/AA-J",slug:"/arm/AA-J/AA-J.10",permalink:"/docs/arm/AA-J/AA-J.10",draft:!1,tags:[],version:"current",sidebarPosition:203,frontMatter:{sidebar_position:203},sidebar:"referenceManualSidebar",previous:{title:"J.9 The Storage_Size Attribute",permalink:"/docs/arm/AA-J/AA-J.9"},next:{title:"J.11 The Class Attribute of Untagged Incomplete Types",permalink:"/docs/arm/AA-J/AA-J.11"}},T={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],b={toc:x};function S(e){var t,a=e,{components:l}=a,u=((e,t)=>{var a={};for(var n in e)A.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&k.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=h(h({},b),u),d(t,m({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",h({},{id:"j10-specific-suppression-of-checks"}),"J.10 Specific Suppression of Checks"),(0,n.kt)("admonition",h({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)(s.Z,{mdxType:"MarginText"},"1/2"),(0,n.kt)(p.Z,{items:["AI95-00224-01"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"Pragma Suppress can be used to suppress checks on specific entities. ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"syntax"}),"Syntax"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"2/2"),(0,n.kt)(p.Z,{items:["AI95-00224-01"],mdxType:"MarginInfo"}),(0,n.kt)("p",{class:"Indented2"},"The form of a specific Suppress ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," is as follows: ",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"3/2"),(0,n.kt)("p",{class:"Indented2"},"  ",(0,n.kt)("strong",null,"pragma")," Suppress(",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),", [On =",">","] ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name")),"); ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"legality-rules"}),"Legality Rules"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"4/2"),(0,n.kt)(p.Z,{items:["AI95-00224-01"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"The ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall be the name of a check (see ",(0,n.kt)("a",{href:"../AA-11/AA-11.5"},"11.5"),"). The ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," shall statically denote some entity.",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"5/2"),(0,n.kt)(p.Z,{items:["AI95-00224-01"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"For a specific Suppress ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," that is immediately within a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification")),", the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0091"},"name"))," shall denote an entity (or several overloaded subprograms) declared immediately within the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification")),". ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"6/2"),(0,n.kt)(p.Z,{items:["AI95-00224-01"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"A specific Suppress ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," applies to the named check from the place of the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," to the end of the innermost enclosing declarative region, or, if the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," is given in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-7/AA-7.1#S0230"},"package_specification")),", to the end of the scope of the named entity. The ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," applies only to the named entity, or, for a subtype, on objects and values of its type. A specific Suppress ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," suppresses the named check for any entities to which it applies (see ",(0,n.kt)("a",{href:"../AA-11/AA-11.5"},"11.5"),"). Which checks are associated with a specific entity is not defined by this document.",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"6.a/2"),(0,n.kt)(i.Z,{type:"aarm",aarm:"discussion",mdxType:"Admonition"},(0,n.kt)("strong",null),"The language doesn't specify exactly which entities control whether a check is performed. For example, in ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"6.b"),(0,n.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"pragma Suppress (Range_Check, On =",">"," A);","\n","A := B;","\n")),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"6.c"),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"whether or not the range check is performed is not specified. The compiler may require that checks are suppressed on B or on the type of A in order to omit the range check. ",(0,n.kt)("br",null))),(0,n.kt)("h4",h({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"7/2"),(0,n.kt)(p.Z,{items:["AI95-00224-01"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"An implementation is allowed to place restrictions on specific Suppress ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma")),"s. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"8/5"),(0,n.kt)(p.Z,{items:["AI95-00224-01","AI12-0440-1"],mdxType:"MarginInfo"}),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE   An implementation can  support a similar On parameter on ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Unsuppress (see ",(0,n.kt)("a",{href:"../AA-11/AA-11.5"},"11.5"),"). ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)("h4",h({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95")),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"8.a/3"),(0,n.kt)(p.Z,{items:["AI95-00224-01","AI05-0299-1"],mdxType:"MarginInfo"}),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"This subclause is new. This feature was moved here because it is important for pragma Unsuppress that there be an unambiguous meaning for each checking pragma. For instance, in the example ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"8.b"),(0,n.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"pragma Suppress (Range_Check);","\n","pragma Unsuppress (Range_Check, On =",">"," A);","\n","A := B;","\n")),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"8.c"),(0,n.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"the user needs to be able to depend on the range check being made on the assignment. But a compiler survey showed that the interpretation of this feature varied widely; trying to define this carefully was likely to cause a lot of user and implementer pain. Thus the feature was moved here, to emphasize that its use is not portable. ",(0,n.kt)("br",null))))}S.isMDXComponent=!0}}]);