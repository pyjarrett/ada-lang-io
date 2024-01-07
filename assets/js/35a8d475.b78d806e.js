"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9288],{60343:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>b,contentTitle:()=>v,default:()=>A,frontMatter:()=>h,metadata:()=>T,toc:()=>y});var a=t(91716),i=t(21256),r=t(24895),o=t(28090),s=t(48424),l=t(82262),m=Object.defineProperty,d=Object.defineProperties,p=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,k=Object.prototype.propertyIsEnumerable,g=(e,n,t)=>n in e?m(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,x=(e,n)=>{for(var t in n||(n={}))c.call(n,t)&&g(e,t,n[t]);if(u)for(var t of u(n))k.call(n,t)&&g(e,t,n[t]);return e};const h={sidebar_position:137},v="A.17 The Package Environment_Variables",T={unversionedId:"arm/AA-A/AA-A.17",id:"arm/AA-A/AA-A.17",title:"A.17 The Package Environment_Variables",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.17.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.17",permalink:"/docs/arm/AA-A/AA-A.17",draft:!1,tags:[],version:"current",sidebarPosition:137,frontMatter:{sidebar_position:137},sidebar:"referenceManualSidebar",previous:{title:"A.16 The Package Directories",permalink:"/docs/arm/AA-A/AA-A.16"},next:{title:"A.18 Containers",permalink:"/docs/arm/AA-A/AA-A.18"}},b={},y=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Erroneous Execution",id:"erroneous-execution",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"A.17.1  The Packages Wide_Environment_Variables and Wide_Wide_Environment_Variables",id:"a171--the-packages-wide_environment_variables-and-wide_wide_environment_variables",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],f={toc:y};function A(e){var n,t=e,{components:m}=t,g=((e,n)=>{var t={};for(var a in e)c.call(e,a)&&n.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&u)for(var a of u(e))n.indexOf(a)<0&&k.call(e,a)&&(t[a]=e[a]);return t})(t,["components"]);return(0,a.kt)("wrapper",(n=x(x({},f),g),d(n,p({components:m,mdxType:"MDXLayout"}))),(0,a.kt)("h1",x({},{id:"a17-the-package-environment_variables"}),"A.17 The Package Environment_Variables"),(0,a.kt)("admonition",x({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",x({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(s.Z,{mdxType:"MarginText"},"1/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The package Environment_Variables allows a program to read or modify environment variables. Environment variables are name-value pairs, where both the name and value are strings. The definition of what constitutes an ",(0,a.kt)("em",null,"environment variable"),", and the meaning of the name and value, are implementation defined. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"1.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-defined",mdxType:"Admonition"},(0,a.kt)("strong",null),"The definition and meaning of an environment variable.",(0,a.kt)("br",null))),(0,a.kt)("h4",x({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"2/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The library package Environment_Variables has the following declaration: ",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"3/5"),(0,a.kt)(l.Z,{items:["AI12-0241-1","AI12-0302-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"package Ada.Environment_Variables ","\n","   with  Preelaborate, Nonblocking, Global =",">"," in out synchronized is ","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"4/2"),"function Value (Name : in String) return String;","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"4.1/3"),(0,a.kt)(l.Z,{items:["AI05-0285-1"],mdxType:"MarginInfo"}),"function Value (Name : in String; Default : in String) return String;","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"5/2"),"function Exists (Name : in String) return Boolean;","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"6/2"),"procedure Set (Name : in String; Value : in String);","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"7/2"),"procedure Clear (Name : in String);","\n","   procedure Clear;","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"8/5"),(0,a.kt)(l.Z,{items:["AI05-0248-1","AI12-0286-1"],mdxType:"MarginInfo"}),"procedure Iterate","\n","      (Process : not null access procedure (Name, Value : in String))","\n","      with Allows_Exit;","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"9/2"),"end Ada.Environment_Variables;","\n",(0,a.kt)(s.Z,{mdxType:"MarginText"},"10/2"),"function Value (Name : in String) return String;","\n"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"11/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports environment variables, then Value returns the value of the environment variable with the given name. If no environment variable with the given name exists, then Constraint_Error is propagated. If the execution environment does not support environment variables, then Program_Error is propagated.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"11.1/3"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"function Value (Name : in String; Default : in String) return String;","\n"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"11.2/3"),(0,a.kt)(l.Z,{items:["AI05-0285-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports environment variables and an environment variable with the given name currently exists, then Value returns its value; otherwise, it returns Default.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"12/2"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"function Exists (Name : in String) return Boolean;","\n"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"13/3"),(0,a.kt)(l.Z,{items:["AI95-00370-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports environment variables and an environment variable with the given name currently exists, then Exists returns True; otherwise, it returns False.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"14/2"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"procedure Set (Name : in String; Value : in String);","\n"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"15/3"),(0,a.kt)(l.Z,{items:["AI95-00370-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports environment variables, then Set first clears any existing environment variable with the given name, and then defines a single new environment variable with the given name and value. Otherwise, Program_Error is propagated.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"16/2"),(0,a.kt)("p",{class:"Indented4"},"If implementation-defined circumstances prohibit the definition of an environment variable with the given name and value, then Constraint_Error is propagated. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"16.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-defined",mdxType:"Admonition"},(0,a.kt)("strong",null),"The circumstances where an environment variable cannot be defined.",(0,a.kt)("br",null))),(0,a.kt)(s.Z,{mdxType:"MarginText"},"17/2"),(0,a.kt)("p",{class:"Indented4"},"It is implementation defined whether there exist values for which the call Set(Name, Value) has the same effect as Clear (Name). ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"17.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-defined",mdxType:"Admonition"},(0,a.kt)("strong",null),"Environment names for which Set has the effect of Clear.",(0,a.kt)("br",null))),(0,a.kt)(s.Z,{mdxType:"MarginText"},"18/2"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"procedure Clear (Name : in String);","\n"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"19/3"),(0,a.kt)(l.Z,{items:["AI95-00370-01","AI05-0264-1","AI05-0269-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports environment variables, then Clear deletes all existing environment variables with the given name. Otherwise, Program_Error is propagated.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"20/2"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"procedure Clear;","\n"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"21/3"),(0,a.kt)(l.Z,{items:["AI95-00370-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports environment variables, then Clear deletes all existing environment variables. Otherwise, Program_Error is propagated.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"22/5"),(0,a.kt)(l.Z,{items:["AI05-0248-1","AI12-0286-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"procedure Iterate","\n","   (Process : not null access procedure (Name, Value : in String))","\n","      with Allows_Exit;","\n"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"23/3"),(0,a.kt)(l.Z,{items:["AI95-00370-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports environment variables, then Iterate calls the subprogram designated by Process for each existing environment variable, passing the name and value of that environment variable. Otherwise, Program_Error is propagated.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"24/2"),(0,a.kt)("p",{class:"Indented4"},"If several environment variables exist that have the same name, Process is called once for each such variable.",(0,a.kt)("br",null)),(0,a.kt)("h4",x({},{id:"bounded-run-time-errors"}),"Bounded (Run-Time) Errors"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"25/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"It is a bounded error to call Value if more than one environment variable exists with the given name; the possible outcomes are that: ",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"26/2"),(0,a.kt)("ul",null,(0,a.kt)("li",null,"one of the values is returned, and that same value is returned in subsequent calls in the absence of changes to the environment; or",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"27/2"),(0,a.kt)("li",null,"Program_Error is propagated. ",(0,a.kt)("br",null))),(0,a.kt)("h4",x({},{id:"erroneous-execution"}),"Erroneous Execution"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"28/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Making calls to the procedures Set or Clear concurrently with calls to any subprogram of package Environment_Variables, or to any instantiation of Iterate, results in erroneous execution.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"29/2"),(0,a.kt)("p",null,"Making calls to the procedures Set or Clear in the actual subprogram corresponding to the Process parameter of Iterate results in erroneous execution. ",(0,a.kt)("br",null)),(0,a.kt)("h4",x({},{id:"documentation-requirements"}),"Documentation Requirements"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"30/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"An implementation shall document how the operations of this package behave if environment variables are changed by external mechanisms (for instance, calling operating system services). ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"30.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"Documentation Requirement: "),"The behavior of package Environment_Variables when environment variables are changed by external mechanisms.",(0,a.kt)("br",null))),(0,a.kt)("h4",x({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"31/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"An implementation running on a system that does not support environment variables is permitted to define the operations of package Environment_Variables with the semantics corresponding to the case where the external execution environment does support environment variables. In this case, it shall provide a mechanism to initialize a nonempty set of environment variables prior to the execution of a partition. ",(0,a.kt)("br",null)),(0,a.kt)("h4",x({},{id:"implementation-advice"}),"Implementation Advice"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"32/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"If the execution environment supports subprocesses, the currently defined environment variables should be used to initialize the environment variables of a subprocess. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"32.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"If the execution environment supports subprocesses, the current environment variables should be used to initialize the environment variables of a subprocess.",(0,a.kt)("br",null))),(0,a.kt)(s.Z,{mdxType:"MarginText"},"33/2"),(0,a.kt)("p",null,"Changes to the environment variables made outside the control of this package should be reflected immediately in the effect of the operations of this package. Changes to the environment variables made using this package should be reflected immediately in the external execution environment. This package should not perform any buffering of the environment variables. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"33.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-advice",mdxType:"Admonition"},(0,a.kt)("strong",null),"Changes to the environment variables made outside the control of Environment_Variables should be reflected immediately.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",x({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"33.b/2"),(0,a.kt)(l.Z,{items:["AI95-00370-01"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Package Environment_Variables is new. ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",x({},{id:"incompatibilities-with-ada-2005"}),"Incompatibilities With Ada 2005")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"33.c/3"),(0,a.kt)(l.Z,{items:["AI05-0285-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"A new overloaded function Value is added to Environment_Variables. If Environment_Variables is referenced in a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-8/AA-8.4#S0235"},"use_clause")),", and an entity ",(0,a.kt)("em",null,"E")," with the name Value is defined in a package that is also referenced in a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-8/AA-8.4#S0235"},"use_clause")),", the entity ",(0,a.kt)("em",null,"E")," may no longer be use-visible, resulting in errors. This should be rare and is easily fixed if it does occur. ",(0,a.kt)("br",null))),(0,a.kt)("a",{id:"Subclause_A.17.1"}),(0,a.kt)("h2",x({},{id:"a171--the-packages-wide_environment_variables-and-wide_wide_environment_variables"}),"A.17.1  The Packages Wide_Environment_Variables and Wide_Wide_Environment_Variables"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"1/5"),(0,a.kt)(l.Z,{items:["AI12-0021-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The packages Wide_Environment_Variables and Wide_Wide_Environment_Variables allow a program to read or modify environment variables. ",(0,a.kt)("br",null)),(0,a.kt)("h4",x({},{id:"static-semantics-1"}),"Static Semantics"),(0,a.kt)(s.Z,{mdxType:"MarginText"},"2/5"),(0,a.kt)(l.Z,{items:["AI12-0021-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The specification of package Wide_Environment_Variables is the same as for Environment_Variables, except that each occurrence of String is replaced by Wide_String.",(0,a.kt)("br",null)),(0,a.kt)(s.Z,{mdxType:"MarginText"},"3/5"),(0,a.kt)(l.Z,{items:["AI12-0021-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The specification of package Wide_Wide_Environment_Variables is the same as for Environment_Variables, except that each occurrence of String is replaced by Wide_Wide_String. ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",x({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(s.Z,{mdxType:"MarginText"},"3.a/5"),(0,a.kt)(l.Z,{items:["AI12-0021-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"These packages are new. ",(0,a.kt)("br",null))))}A.isMDXComponent=!0}}]);