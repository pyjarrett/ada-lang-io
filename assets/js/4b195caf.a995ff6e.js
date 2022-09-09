"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3113],{1417:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>h,default:()=>g,frontMatter:()=>m,metadata:()=>f,toc:()=>k});var r=a(1716),s=a(9464),n=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,d=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))l.call(t,a)&&d(e,a,t[a]);if(c)for(var a of c(t))u.call(t,a)&&d(e,a,t[a]);return e};const m={sidebar_position:112},h="13.10 Unchecked Access Value Creation",f={unversionedId:"arm/AA-13/AA-13.10",id:"arm/AA-13/AA-13.10",title:"13.10 Unchecked Access Value Creation",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-13/AA-13.10.mdx",sourceDirName:"arm/AA-13",slug:"/arm/AA-13/AA-13.10",permalink:"/docs/arm/AA-13/AA-13.10",draft:!1,tags:[],version:"current",sidebarPosition:112,frontMatter:{sidebar_position:112},sidebar:"referenceManualSidebar",previous:{title:"13.9 Unchecked Type Conversions",permalink:"/docs/arm/AA-13/AA-13.9"},next:{title:"13.11 Storage Management",permalink:"/docs/arm/AA-13/AA-13.11"}},b={},k=[{value:"Static Semantics",id:"static-semantics",level:4}],A={toc:k};function g(e){var t,a=e,{components:n}=a,d=((e,t)=>{var a={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a})(a,["components"]);return(0,r.kt)("wrapper",(t=p(p({},A),d),i(t,o({components:n,mdxType:"MDXLayout"}))),(0,r.kt)("h1",p({},{id:"1310-unchecked-access-value-creation"}),"13.10 Unchecked Access Value Creation"),(0,r.kt)("admonition",p({},{type:"warning"}),(0,r.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,r.kt)("a",p({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,r.kt)("p",null,'[The attribute Unchecked_Access is used to create access values in an unsafe manner - the programmer is responsible for preventing "dangling references".] ',(0,r.kt)("br",null)),(0,r.kt)("h4",p({},{id:"static-semantics"}),"Static Semantics"),(0,r.kt)("p",null,"The following attribute is defined for a ",(0,r.kt)("code",null,(0,r.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," X that denotes an aliased view of an object: ",(0,r.kt)("br",null)),(0,r.kt)("p",null,"X'Unchecked_AccessAll rules and semantics that apply to X'Access (see 3.10.2) apply also to X'Unchecked_Access, except that, for the purposes of accessibility rules and checks, it is as if X were declared immediately within a library package. ",(0,r.kt)("br",null)),(0,r.kt)(s.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,r.kt)("strong",null),"{",(0,r.kt)("em",null,"AI05-0005-1"),"}",' We say "rules and semantics" here so that library-level accessibility applies to the value created by X\'Unchecked_Access as well as to the checks needed for the attribute itself. This means that any anonymous access values that inherit the accessibility of this attribute (such as access parameters) also act as if they have library-level accessibility. We don\'t want the "real" accessibility of the created value re-emerging at a later point  that would create hard-to-understand bugs. ',(0,r.kt)("br",null)),(0,r.kt)(s.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'NOTE 1   This attribute is provided to support the situation where a local object is to be inserted into a global linked data structure, when the programmer knows that it will always be removed from the data structure prior to exiting the object\'s scope. The Access attribute would be illegal in this case (see 3.10.2, "Operations of Access Types"). ',(0,r.kt)("br",null)),(0,r.kt)(s.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,r.kt)("strong",null),"The expected type for X'Unchecked_Access is as for X'Access.",(0,r.kt)("br",null)),(0,r.kt)(s.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"If an ",(0,r.kt)("code",null,(0,r.kt)("a",{href:"../AA-4/AA-4.1#S0100"},"attribute_reference"))," with Unchecked_Access is used as the actual parameter for an access parameter, an Accessibility_Check can never fail on that access parameter. ",(0,r.kt)("br",null)),(0,r.kt)(s.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 2   There is no Unchecked_Access attribute for subprograms. ",(0,r.kt)("br",null)),(0,r.kt)(s.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,r.kt)("strong",null),"{",(0,r.kt)("em",null,"AI95-00254-01"),"}",' Such an attribute would allow unsafe "downward closures", where an access value designating a more nested subprogram is passed to a less nested subprogram. (Anonymous access-to-subprogram parameters provide safe "downward closures".) This requires some means of reconstructing the global environment for the more nested subprogram, so that it can do up-level references to objects. The two methods of implementing up-level references are displays and static links. If unsafe downward closures were supported, each access-to-subprogram value would have to carry the static link or display with it. We don\'t want to require the space and time overhead of requiring the extra information for all access-to-subprogram types, especially as including it would make interfacing to other languages (like C) harder.',(0,r.kt)("br",null)),(0,r.kt)(s.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"If desired, an instance of Unchecked_Conversion can be used to create an access value of a global access-to-subprogram type that designates a local subprogram. The semantics of using such a value are not specified by the language. In particular, it is not specified what happens if such subprograms make up-level references; even if the frame being referenced still exists, the up-level reference might go awry if the representation of a value of a global access-to-subprogram type doesn't include a static link. ",(0,r.kt)("br",null)))}g.isMDXComponent=!0}}]);