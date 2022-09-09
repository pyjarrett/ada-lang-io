"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5857],{4661:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>d,default:()=>k,frontMatter:()=>m,metadata:()=>f,toc:()=>h});var a=t(1716),r=t(9464),i=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,g=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&u(e,t,n[t]);if(c)for(var t of c(n))p.call(n,t)&&u(e,t,n[t]);return e};const m={sidebar_position:93},d="12 Generic Units",f={unversionedId:"arm/AA-12/AA-12",id:"arm/AA-12/AA-12",title:"12 Generic Units",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-12/AA-12.mdx",sourceDirName:"arm/AA-12",slug:"/arm/AA-12/",permalink:"/docs/arm/AA-12/",draft:!1,tags:[],version:"current",sidebarPosition:93,frontMatter:{sidebar_position:93},sidebar:"referenceManualSidebar",previous:{title:"11.6 Exceptions and Optimization",permalink:"/docs/arm/AA-11/AA-11.6"},next:{title:"12.1 Generic Declarations",permalink:"/docs/arm/AA-12/AA-12.1"}},b={},h=[],A={toc:h};function k(e){var n,t=e,{components:i}=t,u=((e,n)=>{var t={};for(var a in e)l.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&c)for(var a of c(e))n.indexOf(a)<0&&p.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=g(g({},A),u),o(n,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",g({},{id:"12-generic-units"}),"12 Generic Units"),(0,a.kt)("admonition",g({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,a.kt)("a",g({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)("p",null,"A ",(0,a.kt)("em",null,"generic unit")," is a program unit that is either a generic subprogram or a generic package. A generic unit is a ",(0,a.kt)("em",null,"template"),"[, which can be parameterized, and from which corresponding (nongeneric) subprograms or packages can be obtained]. The resulting program units are said to be ",(0,a.kt)("em",null,"instances")," of the original generic unit. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{type:"aarm",aarm:"glossary-entry",title:"Glossary entry: ",mdxType:"Admonition"},(0,a.kt)("strong",null),"A generic unit is a template for a (nongeneric) program unit; the template can be parameterized by objects, types, subprograms, and packages. An instance of a generic unit is created by a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-12/AA-12.3#S0315"},"generic_instantiation")),". The rules of the language are enforced when a generic unit is compiled, using a generic contract model; additional checks are performed upon instantiation to verify the contract is met. That is, the declaration of a generic unit represents a contract between the body of the generic and instances of the generic. Generic units can be used to perform the role that macros sometimes play in other languages.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"[A generic unit is declared by a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-12/AA-12.1#S0310"},"generic_declaration")),". This form of declaration has a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-12/AA-12.1#S0313"},"generic_formal_part"))," declaring any generic formal parameters. An instance of a generic unit is obtained as the result of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-12/AA-12.3#S0315"},"generic_instantiation"))," with appropriate generic actual parameters for the generic formal parameters. An instance of a generic subprogram is a subprogram. An instance of a generic package is a package.",(0,a.kt)("br",null)),(0,a.kt)("p",null,"Generic units are templates. As templates they do not have the properties that are specific to their nongeneric counterparts. For example, a generic subprogram can be instantiated but it cannot be called. In contrast, an instance of a generic subprogram is a (nongeneric) subprogram; hence, this instance can be called but it cannot be used to produce further instances.] ",(0,a.kt)("br",null)))}k.isMDXComponent=!0}}]);