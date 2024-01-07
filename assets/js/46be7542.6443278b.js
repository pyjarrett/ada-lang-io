"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6534],{54805:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>A,contentTitle:()=>y,default:()=>b,frontMatter:()=>T,metadata:()=>h,toc:()=>f});var a=n(91716),i=n(21256),o=n(24895),r=n(28090),m=n(48424),s=n(82262),d=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,g=Object.prototype.propertyIsEnumerable,x=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,k=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&x(e,n,t[n]);if(p)for(var n of p(t))g.call(t,n)&&x(e,n,t[n]);return e};const T={sidebar_position:135},y="A.15 The Package Command_Line",h={unversionedId:"arm/AA-A/AA-A.15",id:"arm/AA-A/AA-A.15",title:"A.15 The Package Command_Line",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.15.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.15",permalink:"/docs/arm/AA-A/AA-A.15",draft:!1,tags:[],version:"current",sidebarPosition:135,frontMatter:{sidebar_position:135},sidebar:"referenceManualSidebar",previous:{title:"A.14 File Sharing",permalink:"/docs/arm/AA-A/AA-A.14"},next:{title:"A.16 The Package Directories",permalink:"/docs/arm/AA-A/AA-A.16"}},A={},f=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4},{value:"A.15.1  The Packages Wide_Command_Line and Wide_Wide_Command_Line",id:"a151--the-packages-wide_command_line-and-wide_wide_command_line",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],_={toc:f};function b(e){var t,n=e,{components:d}=n,x=((e,t)=>{var n={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&p)for(var a of p(e))t.indexOf(a)<0&&g.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=k(k({},_),x),l(t,u({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",k({},{id:"a15-the-package-command_line"}),"A.15 The Package Command_Line"),(0,a.kt)("admonition",k({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(m.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"The package Command_Line allows a program to obtain the values of its arguments and to set the exit status code to be returned on normal termination. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(m.Z,{mdxType:"MarginText"},"1.a/2"),(0,a.kt)(i.Z,{type:"aarm",aarm:"implementation-defined",mdxType:"Admonition"},(0,a.kt)("strong",null),"The meaning of Argument_Count, Argument, and Command_Name for package Command_Line. The bounds of type Command_Line.Exit_Status.",(0,a.kt)("br",null))),(0,a.kt)("h4",k({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"2"),(0,a.kt)("p",null,"The library package Ada.Command_Line has the following declaration: ",(0,a.kt)("br",null)),(0,a.kt)(m.Z,{mdxType:"MarginText"},"3/5"),(0,a.kt)(s.Z,{items:["AI12-0241-1"],mdxType:"MarginInfo"}),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"package Ada.Command_Line ","\n","  with  Preelaborate, Nonblocking, Global =",">"," in out synchronized is ","\n",(0,a.kt)(m.Z,{mdxType:"MarginText"},"4"),"function Argument_Count return Natural;","\n",(0,a.kt)(m.Z,{mdxType:"MarginText"},"5"),"function Argument (Number : in Positive) return String;","\n",(0,a.kt)(m.Z,{mdxType:"MarginText"},"6"),"function Command_Name return String;","\n",(0,a.kt)(m.Z,{mdxType:"MarginText"},"7"),"type Exit_Status is implementation-defined integer type;","\n",(0,a.kt)(m.Z,{mdxType:"MarginText"},"8"),"Success : constant Exit_Status;","\n","  Failure : constant Exit_Status;","\n",(0,a.kt)(m.Z,{mdxType:"MarginText"},"9"),"procedure Set_Exit_Status (Code : in Exit_Status);","\n",(0,a.kt)(m.Z,{mdxType:"MarginText"},"10"),"private","\n","  ... -- not specified by the language","\n","end Ada.Command_Line;","\n","\n",(0,a.kt)(m.Z,{mdxType:"MarginText"},"11"),"function Argument_Count return Natural;","\n"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"12/3"),(0,a.kt)(s.Z,{items:["AI05-0264-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports passing arguments to a program, then Argument_Count returns the number of arguments passed to the program invoking the function. Otherwise, it returns 0. The meaning of \u201cnumber of arguments\u201d is implementation defined.",(0,a.kt)("br",null)),(0,a.kt)(m.Z,{mdxType:"MarginText"},"13"),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"function Argument (Number : in Positive) return String;","\n"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"14/5"),(0,a.kt)(s.Z,{items:["AI12-0259-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports passing arguments to a program, then Argument returns an implementation-defined value with lower bound 1 corresponding to the argument at relative position Number. If Number is outside the range 1..Argument_Count, then Constraint_Error is propagated. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(m.Z,{mdxType:"MarginText"},"14.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"If the external execution environment does not support passing arguments to a program, then Argument(N) for any N will raise Constraint_Error, since Argument_Count is 0.",(0,a.kt)("br",null))),(0,a.kt)(m.Z,{mdxType:"MarginText"},"15"),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"function Command_Name return String;","\n"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"16/5"),(0,a.kt)(s.Z,{items:["AI05-0264-1","AI12-0259-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports passing arguments to a program, then Command_Name returns an implementation-defined value with lower bound 1 corresponding to the name of the command invoking the program; otherwise, Command_Name returns the null string.",(0,a.kt)("br",null)),(0,a.kt)(m.Z,{mdxType:"MarginText"},"16.1/1"),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"type Exit_Status is implementation-defined integer type;","\n"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"17"),(0,a.kt)("p",{class:"Indented4"},"The type Exit_Status represents the range of exit status values supported by the external execution environment. The constants Success and Failure correspond to success and failure, respectively.",(0,a.kt)("br",null)),(0,a.kt)(m.Z,{mdxType:"MarginText"},"18"),(0,a.kt)(r.Z,{language:"ada",mdxType:"CodeBlock"},"procedure Set_Exit_Status (Code : in Exit_Status);","\n"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"19"),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment supports returning an exit status from a program, then Set_Exit_Status sets Code as the status. Normal termination of a program returns as the exit status the value most recently set by Set_Exit_Status, or, if no such value has been set, then the value Success. If a program terminates abnormally, the status set by Set_Exit_Status is ignored, and an implementation-defined exit status value is set.",(0,a.kt)("br",null)),(0,a.kt)(m.Z,{mdxType:"MarginText"},"20"),(0,a.kt)("p",{class:"Indented4"},"If the external execution environment does not support returning an exit value from a program, then Set_Exit_Status does nothing. ",(0,a.kt)("br",null)),(0,a.kt)("h4",k({},{id:"implementation-permissions"}),"Implementation Permissions"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"21"),(0,a.kt)("p",null,"An alternative declaration is allowed for package Command_Line if different functionality is appropriate for the external execution environment. ",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(m.Z,{mdxType:"MarginText"},"22"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE   Argument_Count, Argument, and Command_Name correspond to the C language's argc, argv[n] (for n",">","0) and argv[0], respectively. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(m.Z,{mdxType:"MarginText"},"22.a"),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,a.kt)("strong",null,"To be honest: "),"The correspondence of Argument_Count to argc is not direct \u2014 argc would be one more than Argument_Count, since the argc count includes the command name, whereas Argument_Count does not. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",k({},{id:"extensions-to-ada-83"}),"Extensions to Ada 83")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(m.Z,{mdxType:"MarginText"},"22.b/3"),(0,a.kt)(s.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"This subclause is new in Ada 95. ",(0,a.kt)("br",null))),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",k({},{id:"wording-changes-from-ada-2012"}),"Wording Changes from Ada 2012")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(m.Z,{mdxType:"MarginText"},"22.c/5"),(0,a.kt)(s.Z,{items:["AI12-0259-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,a.kt)("strong",null)," Defined the lower bound of functions Argument and Command_Name. This could be inconsistent if someone depended on the lower bound of these routines (and it wasn't 1), but such code was never portable (even to later versions of the same implementation). Thus we don't document it as an inconsistency. ",(0,a.kt)("br",null))),(0,a.kt)("a",{id:"Subclause_A.15.1"}),(0,a.kt)("h2",k({},{id:"a151--the-packages-wide_command_line-and-wide_wide_command_line"}),"A.15.1  The Packages Wide_Command_Line and Wide_Wide_Command_Line"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"1/5"),(0,a.kt)(s.Z,{items:["AI12-0021-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The packages Wide_Command_Line and Wide_Wide_Command_Line allow a program to obtain the values of its arguments and to set the exit status code to be returned on normal termination. ",(0,a.kt)("br",null)),(0,a.kt)("h4",k({},{id:"static-semantics-1"}),"Static Semantics"),(0,a.kt)(m.Z,{mdxType:"MarginText"},"2/5"),(0,a.kt)(s.Z,{items:["AI12-0021-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The specification of package Wide_Command_Line is the same as for Command_Line, except that each occurrence of String is replaced by Wide_String.",(0,a.kt)("br",null)),(0,a.kt)(m.Z,{mdxType:"MarginText"},"3/5"),(0,a.kt)(s.Z,{items:["AI12-0021-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The specification of package Wide_Wide_Command_Line is the same as for Command_Line, except that each occurrence of String is replaced by Wide_Wide_String.",(0,a.kt)("br",null)),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",k({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012")),(0,a.kt)(o.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(m.Z,{mdxType:"MarginText"},"3.a/5"),(0,a.kt)(s.Z,{items:["AI12-0021-1"],mdxType:"MarginInfo"}),(0,a.kt)(i.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"These packages are new. ",(0,a.kt)("br",null))))}b.isMDXComponent=!0}}]);