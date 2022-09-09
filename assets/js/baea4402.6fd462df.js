"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6023],{4340:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>k,contentTitle:()=>h,default:()=>A,frontMatter:()=>p,metadata:()=>b,toc:()=>g});var a=n(1716),i=n(9464),o=Object.defineProperty,r=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))m.call(t,n)&&c(e,n,t[n]);if(s)for(var n of s(t))d.call(t,n)&&c(e,n,t[n]);return e};const p={sidebar_position:144},h="C.1 Access to Machine Operations",b={unversionedId:"arm/AA-C/AA-C.1",id:"arm/AA-C/AA-C.1",title:"C.1 Access to Machine Operations",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-C/AA-C.1.mdx",sourceDirName:"arm/AA-C",slug:"/arm/AA-C/AA-C.1",permalink:"/docs/arm/AA-C/AA-C.1",draft:!1,tags:[],version:"current",sidebarPosition:144,frontMatter:{sidebar_position:144},sidebar:"referenceManualSidebar",previous:{title:"Annex C Systems Programming",permalink:"/docs/arm/AA-C/"},next:{title:"C.2 Required Representation Support",permalink:"/docs/arm/AA-C/AA-C.2"}},k={},g=[{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Implementation Advice",id:"implementation-advice-1",level:4}],f={toc:g};function A(e){var t,n=e,{components:o}=n,c=((e,t)=>{var n={};for(var a in e)m.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&s)for(var a of s(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=u(u({},f),c),r(t,l({components:o,mdxType:"MDXLayout"}))),(0,a.kt)("h1",u({},{id:"c1-access-to-machine-operations"}),"C.1 Access to Machine Operations"),(0,a.kt)("admonition",u({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,a.kt)("a",u({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0299-1"),"}"," [This subclause specifies rules regarding access to machine instructions from within an Ada program.] ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-defined",title:"Implementation defined: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Implementation-defined intrinsic subprograms.",(0,a.kt)("br",null)),(0,a.kt)("h4",u({},{id:"implementation-requirements"}),"Implementation Requirements"),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI12-0320-1"),"}"," The implementation shall support machine code insertions (see 13.8) or intrinsic subprograms (see 6.3.1) (or both). The implementation shall allow the use of Ada entities as operands for such machine code insertions or intrinsic subprograms.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"discussion",title:"Discussion: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"{",(0,a.kt)("em",null,"AI12-0320-1"),"}"," Ada entities could be used as operands in machine code insertions and/or intrinsic subprograms using language-defined attributes (such as address), implementation-defined attributes, or could be directly allowed. ",(0,a.kt)("br",null)),(0,a.kt)("h4",u({},{id:"implementation-advice"}),"Implementation Advice"),(0,a.kt)("p",null,"The machine code or intrinsics support should allow access to all operations normally available to assembly language programmers for the target environment, including privileged instructions, if any. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"The machine code or intrinsics support should allow access to all operations normally available to assembly language programmers for the target environment.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"Of course, on a machine with protection, an attempt to execute a privileged instruction in user mode will probably trap. Nonetheless, we want implementations to provide access to them so that Ada can be used to write systems programs that run in privileged mode. ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0229-1"),"}"," The support for interfacing aspects (see Annex B) should include interface to assembler; the default assembler should be associated with the convention identifier Assembler. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"Interface to assembler should be supported; the default assembler should be associated with the convention identifier Assembler.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"If an entity is exported to assembly language, then the implementation should allocate it at an addressable location, and should ensure that it is retained by the linking process, even if not otherwise referenced from the Ada code. The implementation should assume that any call to a machine code or assembler subprogram is allowed to read or update every object that is specified as exported. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"If an entity is exported to assembly language, then the implementation should allocate it at an addressable location even if not otherwise referenced from the Ada code. A call to a machine code or assembler subprogram should be treated as if it can read or update every object that is specified as exported.",(0,a.kt)("br",null)),(0,a.kt)("h4",u({},{id:"documentation-requirements"}),"Documentation Requirements"),(0,a.kt)("p",null,"The implementation shall document the overhead associated with calling machine-code or intrinsic subprograms, as compared to a fully-inlined call, and to a regular out-of-line call. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null,"Documentation Requirement: "),"The overhead of calling machine-code or intrinsic subprograms.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"The implementation shall document the types of the package System.Machine_Code usable for machine code insertions, and the attributes to be used in machine code insertions for references to Ada entities. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null,"Documentation Requirement: "),"The types and attributes used in machine code insertions.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"{",(0,a.kt)("em",null,"AI05-0229-1"),"}"," The implementation shall document the subprogram calling conventions associated with the convention identifiers available for use with the Convention aspect (Ada and Assembler, at a minimum), including register saving, exception propagation, parameter passing, and function value returning. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null,"Documentation Requirement: "),"The subprogram calling conventions for all supported convention identifiers.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"For exported and imported subprograms, the implementation shall document the mapping between the Link_Name string, if specified, or the Ada designator, if not, and the external link name used for such a subprogram. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("em",null,"This paragraph was deleted."),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,a.kt)("strong",null,"Documentation Requirement: "),"The mapping between the Link_Name or Ada designator and the external link name.",(0,a.kt)("br",null)),(0,a.kt)("h4",u({},{id:"implementation-advice-1"}),"Implementation Advice"),(0,a.kt)("p",null,"The implementation should ensure that little or no overhead is associated with calling intrinsic and machine-code subprograms. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"Little or no overhead should be associated with calling intrinsic and machine-code subprograms.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"It is recommended that intrinsic subprograms be provided for convenient access to any machine operations that provide special capabilities or efficiency and that are not otherwise available through the language constructs. Examples of such instructions include: ",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Atomic read-modify-write operations - e.g., test and set, compare and swap, decrement and test, enqueue/dequeue.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Standard numeric functions - e.g., ",(0,a.kt)("em",null,"sin"),", ",(0,a.kt)("em",null,"log"),".",(0,a.kt)("br",null)),(0,a.kt)("p",null,"String manipulation operations - e.g., translate and test.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Vector operations - e.g., compare vector against thresholds.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Direct operations on I/O ports.",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",title:"Implementation Advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"Intrinsic subprograms should be provided to access any machine operations that provide special capabilities or efficiency not normally available.",(0,a.kt)("br",null)))}A.isMDXComponent=!0}}]);