"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4028],{56113:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>x,contentTitle:()=>h,default:()=>A,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var r=i(74848),s=i(28453),a=i(13842),t=i(91435),o=i(21432),l=i(79162),d=i(34421);const c={sidebar_position:137},h="A.17 The Package Environment_Variables",m={id:"arm/AA-A/AA-A.17",title:"A.17 The Package Environment_Variables",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.17.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.17",permalink:"/docs/arm/AA-A/AA-A.17",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:137,frontMatter:{sidebar_position:137},sidebar:"referenceManualSidebar",previous:{title:"A.16 The Package Directories",permalink:"/docs/arm/AA-A/AA-A.16"},next:{title:"A.18 Containers",permalink:"/docs/arm/AA-A/AA-A.18"}},x={},u=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Erroneous Execution",id:"erroneous-execution",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Incompatibilities With Ada 2005",id:"incompatibilities-with-ada-2005",level:4},{value:"A.17.1  The Packages Wide_Environment_Variables and Wide_Wide_Environment_Variables",id:"a171--the-packages-wide_environment_variables-and-wide_wide_environment_variables",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}];function j(e){const n={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"a17-the-package-environment_variables",children:"A.17 The Package Environment_Variables"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,r.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,r.jsx)(l.A,{children:"1/2"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),"\n",(0,r.jsxs)("p",{children:["The package Environment","_","Variables allows a program to read or modify environment variables. Environment variables are name-value pairs, where both the name and value are strings. The definition of what constitutes an ",(0,r.jsx)("em",{children:"environment variable"}),", and the meaning of the name and value, are implementation defined. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"1.a/2"}),(0,r.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"The definition and meaning of an environment variable.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,r.jsx)(l.A,{children:"2/2"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),"\n",(0,r.jsxs)("p",{children:["The library package Environment","_","Variables has the following declaration: ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"3/5"}),"\n",(0,r.jsx)(d.A,{items:["AI12-0241-1","AI12-0302-1"]}),"\n",(0,r.jsxs)(o.A,{language:"ada",children:[(0,r.jsxs)(n.p,{children:["package Ada.Environment","_","Variables","\n","   with Preelaborate, Nonblocking, Global =",">"," in out synchronized is","\n","\n",(0,r.jsx)(l.A,{children:"4/2"}),"\nfunction Value (Name : in String) return String;","\n","\n",(0,r.jsx)(l.A,{children:"4.1/3"})]}),(0,r.jsx)(d.A,{items:["AI05-0285-1"]}),(0,r.jsxs)(n.p,{children:["function Value (Name : in String; Default : in String) return String;","\n","\n",(0,r.jsx)(l.A,{children:"5/2"}),"\nfunction Exists (Name : in String) return Boolean;","\n","\n",(0,r.jsx)(l.A,{children:"6/2"}),"\nprocedure Set (Name : in String; Value : in String);","\n","\n",(0,r.jsx)(l.A,{children:"7/2"}),"\nprocedure Clear (Name : in String);","\n","   procedure Clear;","\n","\n",(0,r.jsx)(l.A,{children:"8/5"})]}),(0,r.jsx)(d.A,{items:["AI05-0248-1","AI12-0286-1"]}),(0,r.jsxs)(n.p,{children:["procedure Iterate","\n","      (Process : not null access procedure (Name, Value : in String))","\n","      with Allows","_","Exit;","\n","\n",(0,r.jsx)(l.A,{children:"9/2"}),"\nend Ada.Environment","_","Variables;","\n","\n",(0,r.jsx)(l.A,{children:"10/2"}),"\nfunction Value (Name : in String) return String;","\n"]})]}),"\n",(0,r.jsx)(l.A,{children:"11/2"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If the external execution environment supports environment variables, then Value returns the value of the environment variable with the given name. If no environment variable with the given name exists, then Constraint","_","Error is propagated. If the execution environment does not support environment variables, then Program","_","Error is propagated.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"11.1/3"}),"\n",(0,r.jsx)(o.A,{language:"ada",children:(0,r.jsxs)(n.p,{children:["function Value (Name : in String; Default : in String) return String;","\n"]})}),"\n",(0,r.jsx)(l.A,{children:"11.2/3"}),"\n",(0,r.jsx)(d.A,{items:["AI05-0285-1"]}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If the external execution environment supports environment variables and an environment variable with the given name currently exists, then Value returns its value; otherwise, it returns Default.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"12/2"}),"\n",(0,r.jsx)(o.A,{language:"ada",children:(0,r.jsxs)(n.p,{children:["function Exists (Name : in String) return Boolean;","\n"]})}),"\n",(0,r.jsx)(l.A,{children:"13/3"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01","AI05-0264-1"]}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If the external execution environment supports environment variables and an environment variable with the given name currently exists, then Exists returns True; otherwise, it returns False.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"14/2"}),"\n",(0,r.jsx)(o.A,{language:"ada",children:(0,r.jsxs)(n.p,{children:["procedure Set (Name : in String; Value : in String);","\n"]})}),"\n",(0,r.jsx)(l.A,{children:"15/3"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01","AI05-0264-1"]}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If the external execution environment supports environment variables, then Set first clears any existing environment variable with the given name, and then defines a single new environment variable with the given name and value. Otherwise, Program","_","Error is propagated.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"16/2"}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If implementation-defined circumstances prohibit the definition of an environment variable with the given name and value, then Constraint","_","Error is propagated. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"16.a/2"}),(0,r.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"The circumstances where an environment variable cannot be defined.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"17/2"}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["It is implementation defined whether there exist values for which the call Set(Name, Value) has the same effect as Clear (Name). ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"17.a/2"}),(0,r.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"Environment names for which Set has the effect of Clear.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"18/2"}),"\n",(0,r.jsx)(o.A,{language:"ada",children:(0,r.jsxs)(n.p,{children:["procedure Clear (Name : in String);","\n"]})}),"\n",(0,r.jsx)(l.A,{children:"19/3"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01","AI05-0264-1","AI05-0269-1"]}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If the external execution environment supports environment variables, then Clear deletes all existing environment variables with the given name. Otherwise, Program","_","Error is propagated.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"20/2"}),"\n",(0,r.jsx)(o.A,{language:"ada",children:(0,r.jsxs)(n.p,{children:["procedure Clear;","\n"]})}),"\n",(0,r.jsx)(l.A,{children:"21/3"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01","AI05-0264-1"]}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If the external execution environment supports environment variables, then Clear deletes all existing environment variables. Otherwise, Program","_","Error is propagated.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"22/5"}),"\n",(0,r.jsx)(d.A,{items:["AI05-0248-1","AI12-0286-1"]}),"\n",(0,r.jsx)(o.A,{language:"ada",children:(0,r.jsxs)(n.p,{children:["procedure Iterate","\n","   (Process : not null access procedure (Name, Value : in String))","\n","      with Allows","_","Exit;","\n"]})}),"\n",(0,r.jsx)(l.A,{children:"23/3"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01","AI05-0264-1"]}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If the external execution environment supports environment variables, then Iterate calls the subprogram designated by Process for each existing environment variable, passing the name and value of that environment variable. Otherwise, Program","_","Error is propagated.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"24/2"}),"\n",(0,r.jsxs)("p",{class:"Indented4",children:["If several environment variables exist that have the same name, Process is called once for each such variable.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h4,{id:"bounded-run-time-errors",children:"Bounded (Run-Time) Errors"}),"\n",(0,r.jsx)(l.A,{children:"25/2"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),"\n",(0,r.jsxs)("p",{children:["It is a bounded error to call Value if more than one environment variable exists with the given name; the possible outcomes are that: ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"26/2"}),"\n",(0,r.jsxs)("ul",{children:[(0,r.jsxs)("li",{children:["one of the values is returned, and that same value is returned in subsequent calls in the absence of changes to the environment; or",(0,r.jsx)("br",{})]}),(0,r.jsx)(l.A,{children:"27/2"}),(0,r.jsxs)("li",{children:["Program","_","Error is propagated. ",(0,r.jsx)("br",{})]})]}),"\n",(0,r.jsx)(n.h4,{id:"erroneous-execution",children:"Erroneous Execution"}),"\n",(0,r.jsx)(l.A,{children:"28/2"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),"\n",(0,r.jsxs)("p",{children:["Making calls to the procedures Set or Clear concurrently with calls to any subprogram of package Environment","_","Variables, or to any instantiation of Iterate, results in erroneous execution.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"29/2"}),"\n",(0,r.jsxs)("p",{children:["Making calls to the procedures Set or Clear in the actual subprogram corresponding to the Process parameter of Iterate results in erroneous execution. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h4,{id:"documentation-requirements",children:"Documentation Requirements"}),"\n",(0,r.jsx)(l.A,{children:"30/2"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),"\n",(0,r.jsxs)("p",{children:["An implementation shall document how the operations of this package behave if environment variables are changed by external mechanisms (for instance, calling operating system services). ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"30.a/2"}),(0,r.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{children:"Documentation Requirement: "}),"The behavior of package Environment","_","Variables when environment variables are changed by external mechanisms.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,r.jsx)(l.A,{children:"31/2"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),"\n",(0,r.jsxs)("p",{children:["An implementation running on a system that does not support environment variables is permitted to define the operations of package Environment","_","Variables with the semantics corresponding to the case where the external execution environment does support environment variables. In this case, it shall provide a mechanism to initialize a nonempty set of environment variables prior to the execution of a partition. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,r.jsx)(l.A,{children:"32/2"}),"\n",(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),"\n",(0,r.jsxs)("p",{children:["If the execution environment supports subprocesses, the currently defined environment variables should be used to initialize the environment variables of a subprocess. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"32.a/2"}),(0,r.jsx)(a.A,{type:"aarm",aarm:"implementation-advice",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"If the execution environment supports subprocesses, the current environment variables should be used to initialize the environment variables of a subprocess.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(l.A,{children:"33/2"}),"\n",(0,r.jsxs)("p",{children:["Changes to the environment variables made outside the control of this package should be reflected immediately in the effect of the operations of this package. Changes to the environment variables made using this package should be reflected immediately in the external execution environment. This package should not perform any buffering of the environment variables. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"33.a/2"}),(0,r.jsx)(a.A,{type:"aarm",aarm:"implementation-advice",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"Changes to the environment variables made outside the control of Environment","_","Variables should be reflected immediately.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(n.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"33.b/2"}),(0,r.jsx)(d.A,{items:["AI95-00370-01"]}),(0,r.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["Package Environment","_","Variables is new. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(n.h4,{id:"incompatibilities-with-ada-2005",children:"Incompatibilities With Ada 2005"})}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"33.c/3"}),(0,r.jsx)(d.A,{items:["AI05-0285-1"]}),(0,r.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["A new overloaded function Value is added to Environment","_","Variables. If Environment","_","Variables is referenced in a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-8/AA-8.4#S0235",children:"use_clause"})}),", and an entity ",(0,r.jsx)("em",{children:"E"})," with the name Value is defined in a package that is also referenced in a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-8/AA-8.4#S0235",children:"use_clause"})}),", the entity ",(0,r.jsx)("em",{children:"E"})," may no longer be use-visible, resulting in errors. This should be rare and is easily fixed if it does occur. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)("a",{id:"Subclause_A.17.1"}),"\n",(0,r.jsx)(n.h2,{id:"a171--the-packages-wide_environment_variables-and-wide_wide_environment_variables",children:"A.17.1  The Packages Wide_Environment_Variables and Wide_Wide_Environment_Variables"}),"\n",(0,r.jsx)(l.A,{children:"1/5_A.17.1"}),"\n",(0,r.jsx)(d.A,{items:["AI12-0021-1"]}),"\n",(0,r.jsxs)("p",{children:["The packages Wide","_","Environment","_","Variables and Wide","_","Wide","_","Environment","_","Variables allow a program to read or modify environment variables. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h4,{id:"static-semantics-1",children:"Static Semantics"}),"\n",(0,r.jsx)(l.A,{children:"2/5_A.17.1"}),"\n",(0,r.jsx)(d.A,{items:["AI12-0021-1"]}),"\n",(0,r.jsxs)("p",{children:["The specification of package Wide","_","Environment","_","Variables is the same as for Environment","_","Variables, except that each occurrence of String is replaced by Wide","_","String.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(l.A,{children:"3/5_A.17.1"}),"\n",(0,r.jsx)(d.A,{items:["AI12-0021-1"]}),"\n",(0,r.jsxs)("p",{children:["The specification of package Wide","_","Wide","_","Environment","_","Variables is the same as for Environment","_","Variables, except that each occurrence of String is replaced by Wide","_","Wide","_","String. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(n.h4,{id:"extensions-to-ada-2012",children:"Extensions to Ada 2012"})}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(l.A,{children:"3.a/5_A.17.1"}),(0,r.jsx)(d.A,{items:["AI12-0021-1"]}),(0,r.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["These packages are new. ",(0,r.jsx)("br",{})]})})]})]})}function A(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(j,{...e})}):j(e)}}}]);