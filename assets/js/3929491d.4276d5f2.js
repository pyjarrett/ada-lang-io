"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9470],{6004:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>x,contentTitle:()=>A,default:()=>p,frontMatter:()=>h,metadata:()=>a,toc:()=>m});const a=JSON.parse('{"id":"arm/AA-5/AA-5.2","title":"5.2 Assignment Statements","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-5/AA-5.2.mdx","sourceDirName":"arm/AA-5","slug":"/arm/AA-5/AA-5.2","permalink":"/docs/arm/AA-5/AA-5.2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":43,"frontMatter":{"sidebar_position":43},"sidebar":"referenceManualSidebar","previous":{"title":"5.1 Simple and Compound Statements - Sequences of Statements","permalink":"/docs/arm/AA-5/AA-5.1"},"next":{"title":"5.3 If Statements","permalink":"/docs/arm/AA-5/AA-5.3"}}');var i=n(4848),r=n(8453),t=n(3842),d=n(1435),c=n(1432),o=n(9162),l=n(4421);const h={sidebar_position:43},A="5.2 Assignment Statements",x={},m=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Incompatibilities With Ada 95",id:"incompatibilities-with-ada-95",level:4},{value:"5.2.1  Target Name Symbols",id:"521--target-name-symbols",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules-1",level:4},{value:"Legality Rules",id:"legality-rules-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}];function j(e){const s={a:"a",admonition:"admonition",h1:"h1",h2:"h2",h4:"h4",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"52-assignment-statements",children:"5.2 Assignment Statements"})}),"\n",(0,i.jsx)(s.admonition,{type:"danger",children:(0,i.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,i.jsx)(o.A,{children:"1"}),"\n",(0,i.jsxs)("p",{children:["[An ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," replaces the current value of a variable with the result of evaluating an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),".] ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(o.A,{children:"2"}),"\n",(0,i.jsx)(c.A,{children:(0,i.jsxs)(s.p,{children:[(0,i.jsxs)("code",{children:["assignment","_","statement"]}),(0,i.jsx)("a",{id:"S0173"}),(0,i.jsx)("code",{children:" ::= "}),(0,i.jsx)("br",{}),"   ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," := ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),";",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(o.A,{children:"3"}),"\n",(0,i.jsxs)("p",{children:["The execution of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," includes the evaluation of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," and the ",(0,i.jsx)("em",{children:"assignment"})," of the value of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," into the ",(0,i.jsx)("em",{children:"target"}),". [An assignment operation (as opposed to an ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:["assignment","_","statement"]})}),") is performed in other contexts as well, including object initialization and by-copy parameter passing.] The ",(0,i.jsx)("em",{children:"target"})," of an assignment operation is the view of the object to which a value is being assigned; the target of an ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:["assignment","_","statement"]})})," is the variable denoted by the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),". ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"3.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"Don't confuse this notion of the \u201ctarget\u201d of an assignment with the notion of the \u201ctarget object\u201d of an entry call or requeue.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"3.b"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["Don't confuse the term \u201cassignment operation\u201d with the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),". The assignment operation is just one part of the execution of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),". The assignment operation is also a part of the execution of various other constructs; see ",(0,i.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6#Subclause_7.6.1",children:"7.6.1"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6#Subclause_7.6.1",children:"Completion and Finalization"}),"\u201d for a complete list. Note that when we say, \u201csuch-and-such is assigned to so-and-so\u201d, we mean that the assignment operation is being applied, and that so-and-so is the target of the assignment operation. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,i.jsx)(o.A,{children:"4/2"}),"\n",(0,i.jsx)(l.A,{items:["AI95-00287-01"]}),"\n",(0,i.jsxs)("p",{children:["The ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," is expected to be of any type. The expected type for the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is the type of the target. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"4.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"implementation-note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"An ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," as a whole is a \u201ccomplete context\u201d, so if the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," is overloaded, the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," can be used to help disambiguate it. For example: ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"4.b"}),(0,i.jsx)(c.A,{language:"ada",children:(0,i.jsxs)(s.p,{children:["type P1 is access R1;","\n","  type P2 is access R2;","\n","\n",(0,i.jsx)(o.A,{children:"4.c"}),"\nfunction F return P1;","\n","  function F return P2;","\n","\n",(0,i.jsx)(o.A,{children:"4.d"}),"\nX : R1;","\n","begin","\n","  F.all := X;  -- Right hand side helps resolve left hand side","\n"]})})]}),"\n",(0,i.jsx)(s.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,i.jsx)(o.A,{children:"5/2"}),"\n",(0,i.jsx)(l.A,{items:["AI95-00287-01"]}),"\n",(0,i.jsxs)("p",{children:["The target [denoted by the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),"] shall be a variable of a nonlimited type.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(o.A,{children:"6"}),"\n",(0,i.jsxs)("p",{children:["If the target is of a tagged class-wide type ",(0,i.jsx)("em",{children:"T"}),"'Class, then the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," shall either be dynamically tagged, or of type ",(0,i.jsx)("em",{children:"T"})," and tag-indeterminate (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.9#Subclause_3.9.2",children:"3.9.2"}),"). ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"6.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"This is consistent with the general rule that a single dispatching operation shall not have both dynamically tagged and statically tagged operands. Note that for an object initialization (as opposed to the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),"), a statically tagged initialization expression is permitted, since there is no chance for confusion (or Tag","_","Check failure). Also, in an object initialization, tag-indeterminate expressions of any type covered by ",(0,i.jsx)("em",{children:"T"}),"'Class would be allowed, but with an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),", that might not work if the tag of the target was for a type that didn't have one of the dispatching operations in the tag-indeterminate expression. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,i.jsx)(o.A,{children:"7"}),"\n",(0,i.jsxs)("p",{children:["For the execution of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),", the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," and the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," are first evaluated in an arbitrary order. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"7.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"Other rules of the language may require that the bounds of the variable be determined prior to evaluating the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),", but that does not necessarily require evaluation of the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),", as pointed out by the ACID. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(o.A,{children:"8"}),"\n",(0,i.jsxs)("p",{children:["When the type of the target is class-wide: ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(o.A,{children:"9"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:["If the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is tag-indeterminate (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.9#Subclause_3.9.2",children:"3.9.2"}),"), then the controlling tag value for the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is the tag of the target; ",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"9.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"See ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.9#Subclause_3.9.2",children:"3.9.2"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.9#Subclause_3.9.2",children:"Dispatching Operations of Tagged Types"}),"\u201d. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(o.A,{children:"10"}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:["Otherwise [(the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is dynamically tagged)], a check is made that the tag of the value of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is the same as that of the target; if this check fails, Constraint","_","Error is raised. ",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(o.A,{children:"11/5"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0439-1"]}),"\n",(0,i.jsxs)("p",{children:["The value of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is converted to the subtype of the target. [The conversion can raise an exception (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6",children:"4.6"}),").] ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"11.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6",children:"4.6"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6",children:"Type Conversions"}),"\u201d defines what actions and checks are associated with subtype conversion. For non-array subtypes, it is just a constraint check presuming the types match. For array subtypes, it checks the lengths and slides if the target is constrained. \u201cSliding\u201d means the array doesn't have to have the same bounds, so long as it is the same length. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(o.A,{children:"12/5"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0439-1"]}),"\n",(0,i.jsxs)("p",{children:["In cases involving controlled types, the target is finalized, and an anonymous object can be used as an intermediate in the assignment, as described in ",(0,i.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6#Subclause_7.6.1",children:"7.6.1"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6#Subclause_7.6.1",children:"Completion and Finalization"}),"\u201d. In any case, the converted value of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is then ",(0,i.jsx)("em",{children:"assigned"})," to the target, which consists of the following two steps: ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"12.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{children:"To be honest: "}),(0,i.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6#Subclause_7.6.1",children:"7.6.1"})," actually says that finalization happens always, but unless controlled types are involved, this finalization during an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," does nothing. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(o.A,{children:"13"}),"\n",(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["The value of the target becomes the converted value.",(0,i.jsx)("br",{})]}),(0,i.jsx)(o.A,{children:"14/5"}),(0,i.jsx)(l.A,{items:["AI05-0299-1","AI12-0449-1"]}),(0,i.jsxs)("li",{children:["If any part of the target is controlled, its value is adjusted as explained in ",(0,i.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6",children:"7.6"}),". ",(0,i.jsx)("br",{})]})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"14.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"If any parts of the object are controlled, abort is deferred during the assignment operation itself, but not during the rest of the execution of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),". ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"15"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["NOTE   The tag of an object never changes; in particular, an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," does not change the tag of the target.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"16/2"}),(0,i.jsx)(l.A,{items:["AI95-00363-01"]}),(0,i.jsxs)(t.A,{type:"aarm",aarm:"note",children:[(0,i.jsx)("em",{children:"This paragraph was deleted."}),(0,i.jsx)("br",{})]})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"16.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"The implicit subtype conversion described above for ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),"s is performed only for the value of the right-hand side expression as a whole; it is not performed for subcomponents of the value.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"16.b"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["The determination of the type of the variable of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," may require consideration of the expression if the variable name can be interpreted as the name of a variable designated by the access value returned by a function call, and similarly, as a component or slice of such a variable (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-8/AA-8.6",children:"8.6"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-8/AA-8.6",children:"The Context of Overload Resolution"}),"\u201d). ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(o.A,{children:"17"}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("em",{children:"Examples of assignment statements:"})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(o.A,{children:"18"}),"\n",(0,i.jsxs)(c.A,{language:"ada",children:[(0,i.jsxs)(s.p,{children:["Value := Max","_","Value - 1;","\n","Shade := Blue;","\n","\n",(0,i.jsx)(o.A,{children:"19"}),"\nNext","_","Frame(F)(M, N) := 2.5;        -- see ",(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#Subclause_4.1.1",children:"4.1.1"}),"\n","U := Dot","_","Product(V, W);            -- see ",(0,i.jsx)("a",{href:"/docs/arm/AA-6/AA-6.3",children:"6.3"}),"\n","\n",(0,i.jsx)(o.A,{children:"20/4"})]}),(0,i.jsx)(l.A,{items:["AI12-0056-1"]}),(0,i.jsxs)(s.p,{children:["Writer := (Status =",">"," Open, Unit =",">"," Printer, Line","_","Count =",">"," 60);","\n","                                   -- see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#Subclause_3.8.1",children:"3.8.1"}),"\n","Next.all := (72074, null, Head);   -- see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.10#Subclause_3.10.1",children:"3.10.1"}),"\n"]})]}),"\n",(0,i.jsx)(o.A,{children:"21"}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("em",{children:"Examples involving scalar subtype conversions:"})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(o.A,{children:"22"}),"\n",(0,i.jsx)(c.A,{language:"ada",children:(0,i.jsxs)(s.p,{children:["I, J : Integer range 1 .. 10 := 5;","\n","K    : Integer range 1 .. 20 := 15;","\n"," ...","\n","\n",(0,i.jsx)(o.A,{children:"23"}),"\nI := J;  -- identical ranges","\n","K := J;  -- compatible ranges","\n","J := K;  -- will raise Constraint","_","Error if K ",">"," 10","\n"]})}),"\n",(0,i.jsx)(o.A,{children:"24"}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("em",{children:"Examples involving array subtype conversions:"})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(o.A,{children:"25"}),"\n",(0,i.jsx)(c.A,{language:"ada",children:(0,i.jsxs)(s.p,{children:["A : String(1 .. 31);","\n","B : String(3 .. 33);","\n"," ...","\n","\n",(0,i.jsx)(o.A,{children:"26"}),"\nA := B;  -- same number of components","\n","\n",(0,i.jsx)(o.A,{children:"27"}),'\nA(1 .. 9)  := "tar sauce";',"\n",'A(4 .. 12) := A(1 .. 9);  -- A(1 .. 12) = "tartar sauce"',"\n"]})}),"\n",(0,i.jsx)(o.A,{children:"28/5"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0452-1"]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"Assignment_statement"})}),"s are well-defined even in the case of overlapping slices of the same array, because the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," and ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),' are both evaluated before copying the value into the variable. In the above example, an implementation yielding A(1 .. 12) = "tartartartar" would be incorrect.',(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"29.a"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["We now allow user-defined finalization and value adjustment actions as part of ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),"s (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6",children:"7.6"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-7/AA-7.6",children:"Assignment and Finalization"}),"\u201d). ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"29.b"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["The special case of array assignment is subsumed by the concept of a subtype conversion, which is applied for all kinds of types, not just arrays. For arrays it provides \u201csliding\u201d. For numeric types it provides conversion of a value of a universal type to the specific type of the target. For other types, it generally has no run-time effect, other than a constraint check.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"29.c"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["We now cover in a general way in ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.7#Subclause_3.7.2",children:"3.7.2"})," the erroneous execution possible due to changing the value of a discriminant when the variable in an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," is a subcomponent that depends on discriminants. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"incompatibilities-with-ada-95",children:"Incompatibilities With Ada 95"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"29.d/2"}),(0,i.jsx)(l.A,{items:["AI95-00287-01"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["The change of the limited check from a resolution rule to a legality rule is not quite upward compatible. For example ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"29.e/2"}),(0,i.jsx)(c.A,{language:"ada",children:(0,i.jsxs)(s.p,{children:["type AccNonLim is access NonLim;","\n","function Foo (Arg : in Integer) return AccNonLim;","\n","type AccLim is access Lim;","\n","function Foo (Arg : in Integer) return AccLim;","\n","Foo(2).all := Foo(1).all;","\n"]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"29.f/2"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["where NonLim is a nonlimited type and Lim is a limited type. The assignment is legal in Ada 95 (only the first Foo would be considered), and is ambiguous in Ada 2005. We made the change because we want limited types to be as similar to nonlimited types as possible. Limited expressions are now allowed in all other contexts (with a similar incompatibility), and it would be odd if assignments had different resolution rules (which would eliminate ambiguities in some cases). Moreover, examples like this one are rare, as they depend on assigning into overloaded function calls. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)("a",{id:"Subclause_5.2.1"}),"\n",(0,i.jsx)(s.h2,{id:"521--target-name-symbols",children:"5.2.1  Target Name Symbols"}),"\n",(0,i.jsx)(o.A,{children:"1/5_5.2.1"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0125-3"]}),"\n",(0,i.jsxs)("p",{children:["@, known as the ",(0,i.jsx)("em",{children:"target name"})," of an assignment statement, provides an abbreviation to avoid repetition of potentially long names in assignment statements. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(s.h4,{id:"syntax-1",children:"Syntax"}),"\n",(0,i.jsx)(o.A,{children:"2/5_5.2.1"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0125-3"]}),"\n",(0,i.jsx)(c.A,{children:(0,i.jsxs)(s.p,{children:[(0,i.jsxs)("code",{children:["target","_","name"]}),(0,i.jsx)("a",{id:"S0174"}),(0,i.jsx)("code",{children:" ::= "}),"@",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(s.h4,{id:"name-resolution-rules-1",children:"Name Resolution Rules"}),"\n",(0,i.jsx)(o.A,{children:"3/5_5.2.1"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0125-3"]}),"\n",(0,i.jsxs)("p",{children:["[If a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0174",children:"target_name"})})," occurs in an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," ",(0,i.jsx)("em",{children:"A"}),", the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," ",(0,i.jsx)("em",{children:"V"})," of ",(0,i.jsx)("em",{children:"A"})," is a complete context. The target name is a constant view of ",(0,i.jsx)("em",{children:"V"}),", having the nominal subtype of ",(0,i.jsx)("em",{children:"V"}),".]",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"3.a/5_5.2.1"}),(0,i.jsx)(l.A,{items:["AI12-0125-3","AI12-0322-1"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"proof",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"The complete context rule is formally given in ",(0,i.jsx)("a",{href:"/docs/arm/AA-8/AA-8.6",children:"8.6"}),". The constant view rule is formally given in ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.3",children:"3.3"}),"; the nominal subtype is a property taken from the target object as described below in Dynamic Semantics. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"legality-rules-1",children:"Legality Rules"}),"\n",(0,i.jsx)(o.A,{children:"4/5_5.2.1"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0125-3","AI12-0322-1"]}),"\n",(0,i.jsxs)("p",{children:["A ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0174",children:"target_name"})})," shall appear only in the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})}),". ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(s.h4,{id:"dynamic-semantics-1",children:"Dynamic Semantics"}),"\n",(0,i.jsx)(o.A,{children:"5/5_5.2.1"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0125-3","AI12-0322-1","AI12-0449-1"]}),"\n",(0,i.jsxs)("p",{children:["For the execution of an ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," with one or more ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0174",children:"target_name"})}),"s appearing in its ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),", the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," ",(0,i.jsx)("em",{children:"V"})," of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," is evaluated first to determine the object denoted by ",(0,i.jsx)("em",{children:"V"}),", and then the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," is evaluated with the evaluation of each ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0174",children:"target_name"})})," yielding a constant view of the target whose properties are otherwise identical to those of the view provided by ",(0,i.jsx)("em",{children:"V"}),". The remainder of the execution of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0173",children:"assignment_statement"})})," is as given in ",(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2",children:"5.2"}),".",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"5.a/5_5.2.1"}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{children:"To be honest: "}),"The properties here include static properties like whether the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0174",children:"target_name"})})," is aliased and the nominal subtype of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0174",children:"target_name"})}),". It was too weird to give separate rules for static and dynamic properties that said almost the same thing. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"5.b/5_5.2.1"}),(0,i.jsx)(l.A,{items:["AI12-0322-1"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"Use of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0174",children:"target_name"})})," can be erroneous if the ",(0,i.jsxs)("em",{children:["variable","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," ",(0,i.jsx)("em",{children:"V"})," is a discriminant-dependent component, and some other constituent of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," modifies the discriminant governing the component ",(0,i.jsx)("em",{children:"V"}),". The assignment probably would be erroneous anyway, but the use of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.2#S0174",children:"target_name"})})," eliminates the possibility that a later evaluation of ",(0,i.jsx)("em",{children:"V"})," raises an exception before any erroneous execution occurs. See ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.7#Subclause_3.7.2",children:"3.7.2"}),". ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsx)(o.A,{children:"6/5_5.2.1"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0429-1"]}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("em",{children:"Examples of the use of target name symbols:"}),(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(o.A,{children:"7/5_5.2.1"}),"\n",(0,i.jsx)(l.A,{items:["AI12-0125-3","AI12-0379-1","AI12-0442-1"]}),"\n",(0,i.jsxs)(c.A,{language:"ada",children:[(0,i.jsxs)(s.p,{children:["Board(1, 1) := @ + 1.0;","\n","            -- An abbreviation for Board(1, 1) := Board(1, 1) + 1.0;","\n","            -- (Board is declared in ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.6#Subclause_3.6.1",children:"3.6.1"}),").","\n","\n",(0,i.jsx)(o.A,{children:"8/5_5.2.1"})]}),(0,i.jsx)(l.A,{items:["AI12-0125-3"]}),(0,i.jsxs)(s.p,{children:["My","_","Complex","_","Array : array (1 .. Max) of Complex; -- See ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.3#Subclause_3.3.2",children:"3.3.2"}),", ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8",children:"3.8"}),".","\n","...","\n","-- Square the element in the Count (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.3#Subclause_3.3.1",children:"3.3.1"}),") position:","\n","My","_","Complex","_","Array (Count) := (Re =",">"," @.Re","*","*","2 - @.Im","*","*","2,","\n","                             Im =",">"," 2.0 ","*"," @.Re ","*"," @.Im);","\n","   -- A target","_","name can be used multiple times and","\n","   -- as a prefix if desired.","\n"]})]}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"extensions-to-ada-2012",children:"Extensions to Ada 2012"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(o.A,{children:"8.a/5_5.2.1"}),(0,i.jsx)(l.A,{items:["AI12-0125-3","AI12-0322-1"]}),(0,i.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["The target name symbol @ is new. ",(0,i.jsx)("br",{})]})})]})]})}function p(e={}){const{wrapper:s}={...(0,r.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(j,{...e})}):j(e)}}}]);