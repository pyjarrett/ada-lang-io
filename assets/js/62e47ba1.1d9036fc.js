"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[573],{5606:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>x,contentTitle:()=>A,default:()=>f,frontMatter:()=>l,metadata:()=>r,toc:()=>j});const r=JSON.parse('{"id":"arm/AA-5/AA-5.4","title":"5.4 Case Statements","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-5/AA-5.4.mdx","sourceDirName":"arm/AA-5","slug":"/arm/AA-5/AA-5.4","permalink":"/docs/arm/AA-5/AA-5.4","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":45,"frontMatter":{"sidebar_position":45},"sidebar":"referenceManualSidebar","previous":{"title":"5.3 If Statements","permalink":"/docs/arm/AA-5/AA-5.3"},"next":{"title":"5.5 Loop Statements","permalink":"/docs/arm/AA-5/AA-5.5"}}');var i=n(4848),a=n(8453),c=n(3842),d=n(1435),t=n(1432),h=n(9162),o=n(4421);const l={sidebar_position:45},A="5.4 Case Statements",x={},j=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Incompatibilities With Ada 83",id:"incompatibilities-with-ada-83",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function m(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(s.header,{children:(0,i.jsx)(s.h1,{id:"54-case-statements",children:"5.4 Case Statements"})}),"\n",(0,i.jsx)(s.admonition,{type:"danger",children:(0,i.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,i.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,i.jsx)(h.A,{children:"1"}),"\n",(0,i.jsxs)("p",{children:["[A ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," selects for execution one of a number of alternative ",(0,i.jsxs)("code",{children:["sequences","_","of","_","statements"]}),"; the chosen alternative is defined by the value of an expression.] ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,i.jsx)(h.A,{children:"2/3"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0188-1"]}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsxs)(s.p,{children:[(0,i.jsxs)("code",{children:["case","_","statement"]}),(0,i.jsx)("a",{id:"S0176"}),(0,i.jsx)("code",{children:" ::= "}),(0,i.jsx)("br",{}),"   ",(0,i.jsx)("strong",{children:"case"})," ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," ",(0,i.jsx)("strong",{children:"is"}),(0,i.jsx)("br",{}),"       ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0177",children:"case_statement_alternative"})}),(0,i.jsx)("br",{}),"      ","{",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0177",children:"case_statement_alternative"})}),"}",(0,i.jsx)("br",{}),"   ",(0,i.jsx)("strong",{children:"end case"}),";",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(h.A,{children:"3"}),"\n",(0,i.jsx)(t.A,{children:(0,i.jsxs)(s.p,{children:[(0,i.jsxs)("code",{children:["case","_","statement","_","alternative"]}),(0,i.jsx)("a",{id:"S0177"}),(0,i.jsx)("code",{children:" ::= "}),(0,i.jsx)("br",{}),"   ",(0,i.jsx)("strong",{children:"when"})," ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0073",children:"discrete_choice_list"})})," =",">",(0,i.jsx)("br",{}),"      ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:"sequence_of_statements"})}),(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(s.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,i.jsx)(h.A,{children:"4/3"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0188-1"]}),"\n",(0,i.jsxs)("p",{children:["The ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is expected to be of any discrete type. The expected type for each ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})})," is the type of the ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),". ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(s.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,i.jsx)(h.A,{children:"5/3"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0153-3"]}),"\n",(0,i.jsxs)("p",{children:["The ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0133",children:"choice_expression"})}),"s, ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0027",children:"subtype_indication"})}),"s, and ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0037",children:"range"})}),"s given as ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})}),"s of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," shall be static. [A ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})})," ",(0,i.jsx)("strong",{children:"others"}),", if present, shall appear alone and in the last ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0073",children:"discrete_choice_list"})}),".]",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(h.A,{children:"6/3"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0188-1","AI05-0240-1"]}),"\n",(0,i.jsxs)("p",{children:["The possible values of the ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," shall be covered (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#Subclause_3.8.1",children:"3.8.1"}),") as follows: ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"6.a/3"}),(0,i.jsx)(o.A,{items:["AI05-0240-1"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"discussion",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),'The meaning of "covered" here and in the following rules is that of the term "cover a value" that is defined in ',(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#Subclause_3.8.1",children:"3.8.1"}),". ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(h.A,{children:"7/4"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0003-1","AI05-0153-3","AI05-0188-1","AI05-0262-1","AI12-0071-1"]}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:["If the ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," [(including a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6#S0162",children:"type_conversion"})}),", ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})}),", or ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})}),")] having a static and constrained nominal subtype, then each non-",(0,i.jsx)("strong",{children:"others"})," ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})})," shall cover only values in that subtype that satisfy its predicates (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#Subclause_3.2.4",children:"3.2.4"}),"), and each value of that subtype that satisfies its predicates shall be covered by some ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})})," [(either explicitly or by ",(0,i.jsx)("strong",{children:"others"}),")]. ",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"7.a"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"Although not official ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),"s of objects, a value conversion still has a defined nominal subtype, namely its target subtype. See ",(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6",children:"4.6"}),". ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(h.A,{children:"8/3"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0188-1"]}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:["If the type of the ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is ",(0,i.jsxs)("em",{children:["root","_","integer"]}),", ",(0,i.jsxs)("em",{children:["universal","_","integer"]}),", or a descendant of a formal scalar type, then the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," shall have an ",(0,i.jsx)("strong",{children:"others"})," ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})}),". ",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"8.a"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"reason",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"This is because the base range is implementation defined for ",(0,i.jsxs)("em",{children:["root","_","integer"]})," and ",(0,i.jsxs)("em",{children:["universal","_","integer"]}),", and not known statically in the case of a formal scalar type. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(h.A,{children:"9/3"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0188-1"]}),"\n",(0,i.jsx)("ul",{children:(0,i.jsxs)("li",{children:["Otherwise, each value of the base range of the type of the ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," shall be covered [(either explicitly or by ",(0,i.jsx)("strong",{children:"others"}),")]. ",(0,i.jsx)("br",{})]})}),"\n",(0,i.jsx)(h.A,{children:"10"}),"\n",(0,i.jsxs)("p",{children:["Two distinct ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})}),"s of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," shall not cover the same value. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"10.a/3"}),(0,i.jsx)(o.A,{items:["AI05-0188-1"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"The goal of these coverage rules is that any possible value of the ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," should be covered by exactly one ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})})," of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})}),", and that this should be checked at compile time. The goal is achieved in most cases, but there are two minor loopholes: ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"10.b"}),(0,i.jsxs)("ul",{children:[(0,i.jsxs)("li",{children:["If the expression reads an object with an invalid representation (e.g. an uninitialized object), then the value can be outside the covered range. This can happen for static constrained subtypes, as well as nonstatic or unconstrained subtypes. It cannot, however, happen if the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," has the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})})," ",(0,i.jsx)("strong",{children:"others"}),", because ",(0,i.jsx)("strong",{children:"others"})," covers all values, even those outside the subtype.",(0,i.jsx)("br",{})]}),(0,i.jsx)(h.A,{children:"10.c/3"}),(0,i.jsx)(o.A,{items:["AI95-00114-01","AI05-0188-1"]}),(0,i.jsxs)("li",{children:["If the compiler chooses to represent the value of an expression of an unconstrained subtype in a way that includes values outside the bounds of the subtype, then those values can be outside the covered range. For example, if X: Integer := Integer'Last;, and the case ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is X+1, then the implementation might choose to produce the correct value, which is outside the bounds of Integer. (It might raise Constraint","_","Error instead.) This case can only happen for nongeneric subtypes that are either unconstrained or nonstatic (or both). It can only happen if there is no ",(0,i.jsx)("strong",{children:"others"})," ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})}),". ",(0,i.jsx)("br",{})]})]})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"10.d"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["In the uninitialized variable case, the value might be anything; hence, any alternative can be chosen, or Constraint","_","Error can be raised. (We intend to prevent, however, jumping to random memory locations and the like.) In the out-of-range case, the behavior is more sensible: if there is an ",(0,i.jsx)("strong",{children:"others"}),", then the implementation may choose to raise Constraint","_","Error on the evaluation of the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," (as usual), or it may choose to correctly evaluate the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," and therefore choose the ",(0,i.jsx)("strong",{children:"others"})," alternative. Otherwise (no ",(0,i.jsx)("strong",{children:"others"}),"), Constraint","_","Error is raised either way \u2014 on the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," evaluation, or for the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," itself.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"10.e"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["For an enumeration type with a discontiguous set of internal codes (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-13/AA-13.4",children:"13.4"}),"), the only way to get values in between the proper values is via an object with an invalid representation; there is no \u201cout-of-range\u201d situation that can produce them. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,i.jsx)(h.A,{children:"11/3"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0188-1"]}),"\n",(0,i.jsxs)("p",{children:["For the execution of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})}),", the ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is first evaluated.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(h.A,{children:"12/3"}),"\n",(0,i.jsx)(o.A,{items:["AI05-0188-1"]}),"\n",(0,i.jsxs)("p",{children:["If the value of the ",(0,i.jsxs)("em",{children:["selecting","_"]}),(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is covered by the ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"/docs/arm/AA-3/AA-3.8#S0073",children:["discrete","_","choice","_","list"]})})," of some ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.4#S0177",children:["case","_","statement","_","alternative"]})}),", then the ",(0,i.jsx)("code",{children:(0,i.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.1#S0166",children:["sequence","_","of","_","statements"]})})," of the ",(0,i.jsxs)("code",{children:["_","alternative"]})," is executed.",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(h.A,{children:"13"}),"\n",(0,i.jsxs)("p",{children:["Otherwise (the value is not covered by any ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0073",children:"discrete_choice_list"})}),", perhaps due to being outside the base range), Constraint","_","Error is raised. ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"13.a/5"}),(0,i.jsx)(o.A,{items:["AI12-0005-1"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"ramification",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{}),"In this case, the value fails to satisfy its (static) predicate (possible when the predicate is disabled), is outside the base range of its type, or is an invalid representation.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"14/5"}),(0,i.jsx)(o.A,{items:["AI12-0440-1"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["NOTE   The execution of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," chooses one and only one alternative. Qualification of the expression of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," by a static subtype can often be used to limit the number of choices that can be given explicitly. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(s.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsx)(h.A,{children:"15"}),"\n",(0,i.jsxs)("p",{children:[(0,i.jsx)("em",{children:"Examples of case statements:"})," ",(0,i.jsx)("br",{})]}),"\n",(0,i.jsx)(h.A,{children:"16"}),"\n",(0,i.jsx)(t.A,{language:"ada",children:(0,i.jsxs)(s.p,{children:["case Sensor is","\n","   when Elevation\t=",">"," Record","_","Elevation(Sensor","_","Value);","\n","   when Azimuth\t=",">"," Record","_","Azimuth  (Sensor","_","Value);","\n","   when Distance\t=",">"," Record","_","Distance (Sensor","_","Value);","\n","   when others\t=",">"," null;","\n","end case;","\n","\n",(0,i.jsx)(h.A,{children:"17"}),"\ncase Today is","\n","   when Mon\t=",">"," Compute","_","Initial","_","Balance;","\n","   when Fri\t=",">"," Compute","_","Closing","_","Balance;","\n","   when Tue .. Thu\t=",">"," Generate","_","Report(Today);","\n","   when Sat .. Sun\t=",">"," null;","\n","end case;","\n","\n",(0,i.jsx)(h.A,{children:"18"}),"\ncase Bin","_","Number(Count) is","\n","   when 1\t=",">"," Update","_","Bin(1);","\n","   when 2\t=",">"," Update","_","Bin(2);","\n","   when 3 | 4\t=",">","\n","      Empty","_","Bin(1);","\n","      Empty","_","Bin(2);","\n","   when others\t=",">"," raise Error;","\n","end case;","\n"]})}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"incompatibilities-with-ada-83",children:"Incompatibilities With Ada 83"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.a.1/1"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["In Ada 95, ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})}),"s and ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6#S0162",children:"type_conversion"})}),"s are ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),"s, whereas in Ada 83, they were ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),"s. Therefore, if the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," of a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," is a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})})," or ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6#S0162",children:"type_conversion"})}),", and the result subtype is static, it is illegal to specify a choice outside the bounds of the subtype. For this case in Ada 83 choices only are required to be in the base range of the type.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.a.2/1"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["In addition, the rule about which choices must be covered is unchanged in Ada 95. Therefore, for a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," whose ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-6/AA-6.4#S0218",children:"function_call"})})," or ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6#S0162",children:"type_conversion"})}),", Ada 83 required covering all choices in the base range, while Ada 95 only requires covering choices in the bounds of the subtype. If the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," does not include an ",(0,i.jsx)("strong",{children:"others"})," ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})}),", then a legal Ada 83 ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," will be illegal in Ada 95 if the bounds of the subtype are different than the bounds of the base type. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.a"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["In Ada 83, the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," in a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," is not allowed to be of a generic formal type. This restriction is removed in Ada 95; an ",(0,i.jsx)("strong",{children:"others"})," ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})})," is required instead.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.b"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["In Ada 95, a function call is the name of an object; this was not true in Ada 83 (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1",children:"4.1"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1",children:"Names"}),"\u201d). This change makes the following ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})})," legal: ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.c"}),(0,i.jsx)(t.A,{language:"ada",children:(0,i.jsxs)(s.p,{children:["subtype S is Integer range 1..2;","\n","function F return S;","\n","case F is","\n","   when 1 =",">"," ...;","\n","   when 2 =",">"," ...;","\n","   -- No others needed.","\n","end case;","\n"]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.d/3"}),(0,i.jsx)(o.A,{items:["AI05-0005-1"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["Note that the result subtype given in a function ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-8/AA-8.5#S0238",children:"renaming_declaration"})})," is ignored; for a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-5/AA-5.4#S0176",children:"case_statement"})}),' whose expression calls a such a function, the full coverage rules are checked using the result subtype of the original function. Note that predefined operators such as "+" have an unconstrained result subtype (see ',(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#Subclause_4.5.1",children:"4.5.1"}),"). Note that generic formal functions do not have static result subtypes. Note that the result subtype of an inherited subprogram need not correspond to any nameable subtype; there is still a perfectly good result subtype, though. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.e"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["Ada 83 forgot to say what happens for \u201clegally\u201d out-of-bounds values.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.f"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["We take advantage of rules and terms (e.g. ",(0,i.jsx)("em",{children:"cover a value"}),") defined for ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})}),"s and ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0073",children:"discrete_choice_list"})}),"s in ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#Subclause_3.8.1",children:"3.8.1"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#Subclause_3.8.1",children:"Variant Parts and Discrete Choices"}),"\u201d.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.g"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["In the Name Resolution Rule for the case expression, we no longer need RM83-5.4(3)'s \u201cwhich must be determinable independently of the context in which the expression occurs, but using the fact that the expression must be of a discrete type\u201d, because the ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is now a complete context. See ",(0,i.jsx)("a",{href:"/docs/arm/AA-8/AA-8.6",children:"8.6"}),", \u201c",(0,i.jsx)("a",{href:"/docs/arm/AA-8/AA-8.6",children:"The Context of Overload Resolution"}),"\u201d.",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.h"}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["Since ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6#S0162",children:"type_conversion"})}),"s are now defined as ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),"s, their coverage rule is now covered under the general rule for ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),"s, rather than being separated out along with ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})}),"s. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.i/3"}),(0,i.jsx)(o.A,{items:["AI05-0003-1"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["Rewording to reflect that a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.7#S0163",children:"qualified_expression"})})," is now a ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),".",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.j/3"}),(0,i.jsx)(o.A,{items:["AI05-0153-3"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["Revised for changes to ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#S0074",children:"discrete_choice"})}),"s made to allow static predicates (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#Subclause_3.2.4",children:"3.2.4"}),") as case choices (see ",(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.8#Subclause_3.8.1",children:"3.8.1"}),").",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.k/3"}),(0,i.jsx)(o.A,{items:["AI05-0188-1"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:["Added the ",(0,i.jsxs)("em",{children:["selecting","_"]})," prefix to make this wording consistent with ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#S0151",children:"case_expression"})}),", and to clarify which ",(0,i.jsx)("code",{children:(0,i.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is being talked about in the wording. ",(0,i.jsx)("br",{})]})})]}),"\n",(0,i.jsx)(d.A,{children:(0,i.jsx)(s.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,i.jsxs)(d.A,{children:[(0,i.jsx)(h.A,{children:"18.l/4"}),(0,i.jsx)(o.A,{items:["AI12-0071-1"]}),(0,i.jsx)(c.A,{type:"aarm",aarm:"note",children:(0,i.jsxs)(s.p,{children:[(0,i.jsx)("strong",{children:"Corrigendum:"}),' Updated wording of case coverage to use the new term "satisfies the predicates" (see ',(0,i.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#Subclause_3.2.4",children:"3.2.4"}),"). ",(0,i.jsx)("br",{})]})})]})]})}function f(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,i.jsx)(s,{...e,children:(0,i.jsx)(m,{...e})}):m(e)}}}]);