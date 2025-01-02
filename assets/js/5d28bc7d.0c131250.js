"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7130],{6819:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>x,default:()=>j,frontMatter:()=>h,metadata:()=>r,toc:()=>A});const r=JSON.parse('{"id":"arm/AA-11/AA-11.1","title":"11.1 Exception Declarations","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-11/AA-11.1.mdx","sourceDirName":"arm/AA-11","slug":"/arm/AA-11/AA-11.1","permalink":"/docs/arm/AA-11/AA-11.1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":89,"frontMatter":{"sidebar_position":89},"sidebar":"referenceManualSidebar","previous":{"title":"11 Exceptions","permalink":"/docs/arm/AA-11/"},"next":{"title":"11.2 Exception Handlers","permalink":"/docs/arm/AA-11/AA-11.2"}}');var a=i(4848),s=i(8453),t=i(3842),o=i(1435),c=i(1432),d=i(9162),l=i(4421);const h={sidebar_position:89},x="11.1 Exception Declarations",m={},A=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Inconsistencies With Ada 83",id:"inconsistencies-with-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4}];function p(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"111-exception-declarations",children:"11.1 Exception Declarations"})}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,a.jsx)(d.A,{children:"1"}),"\n",(0,a.jsxs)("p",{children:["An ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})})," declares a name for an exception. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,a.jsx)(d.A,{children:"2/3"}),"\n",(0,a.jsx)(l.A,{items:["AI05-0183-1"]}),"\n",(0,a.jsx)(c.A,{children:(0,a.jsxs)(n.p,{children:[(0,a.jsxs)("code",{children:["exception","_","declaration"]}),(0,a.jsx)("a",{id:"S0303"}),(0,a.jsx)("code",{children:" ::= "}),(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-3/AA-3.3#S0033",children:"defining_identifier_list"})})," : ",(0,a.jsx)("strong",{children:"exception"}),(0,a.jsx)("br",{}),"   [",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0346",children:"aspect_specification"})}),"];",(0,a.jsx)("br",{})]})}),"\n",(0,a.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,a.jsx)(d.A,{children:"3"}),"\n",(0,a.jsxs)("p",{children:["Each single ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})})," declares a name for a different exception. If a generic unit includes an ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})}),", the ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})}),"s implicitly generated by different instantiations of the generic unit refer to distinct exceptions (but all have the same ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-3/AA-3.1#S0022",children:"defining_identifier"})}),"). The particular exception denoted by an exception name is determined at compilation time and is the same regardless of how many times the ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})})," is elaborated. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"3.a"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"We considered removing this requirement inside generic bodies, because it is an implementation burden for implementations that wish to share code among several instances. In the end, it was decided that it would introduce too much implementation dependence. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"3.b"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"Hence, if an ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})})," occurs in a recursive subprogram, the exception name denotes the same exception for all invocations of the recursive subprogram. The reason for this rule is that we allow an exception occurrence to propagate out of its declaration's innermost containing master; if exceptions were created by their declarations like other entities, they would presumably be destroyed upon leaving the master; we would have to do something special to prevent them from propagating to places where they no longer exist. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"3.c"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"Exception identities are unique across all partitions of a program. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(d.A,{children:"4"}),"\n",(0,a.jsxs)("p",{children:["The ",(0,a.jsx)("em",{children:"predefined"})," exceptions are the ones declared in the declaration of package Standard: Constraint","_","Error, Program","_","Error, Storage","_","Error, and Tasking","_","Error[; one of them is raised when a language-defined check fails.] ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"4.a"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"The exceptions declared in the language-defined package IO","_","Exceptions, for example, are not predefined. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,a.jsx)(d.A,{children:"5"}),"\n",(0,a.jsxs)("p",{children:["The elaboration of an ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})})," has no effect.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(d.A,{children:"6/5"}),"\n",(0,a.jsx)(l.A,{items:["AI12-0445-1"]}),"\n",(0,a.jsxs)("p",{children:["The execution of any construct raises Storage","_","Error if there is insufficient storage for that execution. The amount of storage necessary for the execution of constructs is unspecified. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"6.a"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"Note that any execution whatsoever can raise Storage","_","Error. This allows much implementation freedom in storage management. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(d.A,{children:"7"}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:"Examples of user-defined exception declarations:"})," ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(d.A,{children:"8"}),"\n",(0,a.jsx)(c.A,{language:"ada",children:(0,a.jsxs)(n.p,{children:["Singular : exception;","\n","Error    : exception;","\n","Overflow, Underflow : exception;","\n"]})}),"\n",(0,a.jsx)(o.A,{children:(0,a.jsx)(n.h4,{id:"inconsistencies-with-ada-83",children:"Inconsistencies With Ada 83"})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"8.a"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["The exception Numeric","_","Error is now defined in the Obsolescent features Annex, as a rename of Constraint","_","Error. All checks that raise Numeric","_","Error in Ada 83 instead raise Constraint","_","Error in Ada 95. To increase upward compatibility, we also changed the rules to allow the same exception to be named more than once by a given handler. Thus, \u201c",(0,a.jsx)("strong",{children:"when"})," Constraint","_","Error | Numeric","_","Error =",">","\u201d will remain legal in Ada 95, even though Constraint","_","Error and Numeric","_","Error now denote the same exception. However, it will not be legal to have separate handlers for Constraint","_","Error and Numeric","_","Error. This change is inconsistent in the rare case that an existing program explicitly raises Numeric","_","Error at a point where there is a handler for Constraint","_","Error; the exception will now be caught by that handler. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(o.A,{children:(0,a.jsx)(n.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"8.b"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["We explicitly define elaboration for ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})}),"s. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(o.A,{children:(0,a.jsx)(n.h4,{id:"extensions-to-ada-2005",children:"Extensions to Ada 2005"})}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"8.c/3"}),(0,a.jsx)(l.A,{items:["AI05-0183-1"]}),(0,a.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["An optional ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0346",children:"aspect_specification"})})," can be used in a ",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-11/AA-11.1#S0303",children:"exception_declaration"})}),". This is described in ",(0,a.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#Subclause_13.1.1",children:"13.1.1"}),". ",(0,a.jsx)("br",{})]})})]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(p,{...e})}):p(e)}}}]);