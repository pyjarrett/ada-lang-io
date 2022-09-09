"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6907],{618:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>y,frontMatter:()=>d,metadata:()=>b,toc:()=>f});var i=a(1716),n=a(9464),o=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,p=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(s)for(var a of s(t))c.call(t,a)&&m(e,a,t[a]);return e};const d={sidebar_position:183},h="H.1 Pragma Normalize_Scalars",b={unversionedId:"arm/AA-H/AA-H.1",id:"arm/AA-H/AA-H.1",title:"H.1 Pragma Normalize_Scalars",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-H/AA-H.1.mdx",sourceDirName:"arm/AA-H",slug:"/arm/AA-H/AA-H.1",permalink:"/docs/arm/AA-H/AA-H.1",draft:!1,tags:[],version:"current",sidebarPosition:183,frontMatter:{sidebar_position:183},sidebar:"referenceManualSidebar",previous:{title:"Annex H High Integrity Systems",permalink:"/docs/arm/AA-H/"},next:{title:"H.2 Documentation of Implementation Decisions",permalink:"/docs/arm/AA-H/AA-H.2"}},k={},f=[{value:"Syntax",id:"syntax",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4}],g={toc:f};function y(e){var t,a=e,{components:o}=a,m=((e,t)=>{var a={};for(var i in e)u.call(e,i)&&t.indexOf(i)<0&&(a[i]=e[i]);if(null!=e&&s)for(var i of s(e))t.indexOf(i)<0&&c.call(e,i)&&(a[i]=e[i]);return a})(a,["components"]);return(0,i.kt)("wrapper",(t=p(p({},g),m),r(t,l({components:o,mdxType:"MDXLayout"}))),(0,i.kt)("h1",p({},{id:"h1-pragma-normalize_scalars"}),"H.1 Pragma Normalize_Scalars"),(0,i.kt)("admonition",p({},{type:"warning"}),(0,i.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,i.kt)("a",p({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,i.kt)("p",null,"This pragma ensures that an otherwise uninitialized scalar object is set to a predictable value, but out of range if possible. ",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"The goal of the pragma is to reduce the impact of a bounded error that results from a reference to an uninitialized scalar object, by having such a reference violate a range check and thus raise Constraint_Error. ",(0,i.kt)("br",null)),(0,i.kt)("h4",p({},{id:"syntax"}),"Syntax"),(0,i.kt)("p",null,"The form of a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Normalize_Scalars is as follows: ",(0,i.kt)("br",null)),(0,i.kt)("p",null,"  ",(0,i.kt)("strong",null,"pragma")," Normalize_Scalars; ",(0,i.kt)("br",null)),(0,i.kt)("h4",p({},{id:"post-compilation-rules"}),"Post-Compilation Rules"),(0,i.kt)("p",null,"Pragma Normalize_Scalars is a configuration pragma. It applies to all ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-10/AA-10.1#S0286"},"compilation_unit")),"s included in a partition. ",(0,i.kt)("br",null)),(0,i.kt)("h4",p({},{id:"documentation-requirements"}),"Documentation Requirements"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00434-01"),"}"," If a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Normalize_Scalars applies, the implementation shall document the implicit initial values for scalar subtypes, and shall identify each case in which such a value is used and is not an invalid representation. ",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("strong",null,"Documentation Requirement: "),"If a ",(0,i.kt)("code",null,(0,i.kt)("a",{href:"../AA-2/AA-2.8#S0019"},"pragma"))," Normalize_Scalars applies, the implicit initial values of scalar subtypes shall be documented. Such a value should be an invalid representation when possible; any cases when is it not shall be documented.",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,i.kt)("strong",null,"To be honest: "),"It's slightly inaccurate to say that the value is a representation, but the point should be clear anyway. ",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"By providing a type with a size specification so that spare bits are present, it is possible to force an implementation of Normalize_Scalars to use an out of range value. This can be tested for by ensuring that Constraint_Error is raised. Similarly, for an unconstrained integer type, in which no spare bit is surely present, one can check that the initialization takes place to the value specified in the documentation of the implementation. For a floating point type, spare bits might not be available, but a range constraint can provide the ability to use an out of range value.",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"If it is difficult to document the general rule for the implicit initial value, the implementation might choose instead to record the value on the object code listing or similar output produced during compilation.",(0,i.kt)("br",null)),(0,i.kt)("h4",p({},{id:"implementation-advice"}),"Implementation Advice"),(0,i.kt)("p",null,"{",(0,i.kt)("em",null,"AI95-00434-01"),"}"," Whenever possible, the implicit initial values for a scalar subtype should be an invalid representation (see 13.9.1). ",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"When an out of range value is used for the initialization, it is likely that constraint checks will detect it. In addition, it can be detected by the Valid attribute.",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"This rule is included in the documentation requirements, and thus does not need a separate summary item.",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   The initialization requirement applies to uninitialized scalar objects that are subcomponents of composite objects, to allocated objects, and to stand-alone objects. It also applies to scalar ",(0,i.kt)("strong",null,"out")," parameters. Scalar subcomponents of composite ",(0,i.kt)("strong",null,"out")," parameters are initialized to the corresponding part of the actual, by virtue of 6.4.1.",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 2   The initialization requirement does not apply to a scalar for which pragma Import has been specified, since initialization of an imported object is performed solely by the foreign language environment (see B.1).",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 3   ","{",(0,i.kt)("em",null,"AI12-0440-1"),"}"," The use of pragma Normalize_Scalars in conjunction with Pragma Restrictions(No_Exceptions) can result in erroneous execution (see H.4). ",(0,i.kt)("br",null)),(0,i.kt)(n.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,i.kt)("strong",null),"Since the effect of an access to an out of range value will often be to raise Constraint_Error, it is clear that suppressing the exception mechanism could result in erroneous execution. In particular, the assignment to an array, with the array index out of range, will result in a write to an arbitrary store location, having unpredictable effects.",(0,i.kt)("br",null)))}y.isMDXComponent=!0}}]);