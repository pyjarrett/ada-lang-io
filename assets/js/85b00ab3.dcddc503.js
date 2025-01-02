"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7004],{7782:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>A,contentTitle:()=>h,default:()=>j,frontMatter:()=>l,metadata:()=>i,toc:()=>x});const i=JSON.parse('{"id":"arm/AA-5/AA-5.7","title":"5.7 Exit Statements","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-5/AA-5.7.mdx","sourceDirName":"arm/AA-5","slug":"/arm/AA-5/AA-5.7","permalink":"/docs/arm/AA-5/AA-5.7","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":48,"frontMatter":{"sidebar_position":48},"sidebar":"referenceManualSidebar","previous":{"title":"5.6 Block Statements","permalink":"/docs/arm/AA-5/AA-5.6"},"next":{"title":"5.8 Goto Statements","permalink":"/docs/arm/AA-5/AA-5.8"}}');var t=s(4848),r=s(8453),a=s(3842),d=s(1435),o=s(1432),c=s(9162);s(4421);const l={sidebar_position:48},h="5.7 Exit Statements",A={},x=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4}];function m(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,r.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"57-exit-statements",children:"5.7 Exit Statements"})}),"\n",(0,t.jsx)(n.admonition,{type:"danger",children:(0,t.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,t.jsx)(c.A,{children:"1"}),"\n",(0,t.jsxs)("p",{children:["[An ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:"exit_statement"})})," is used to complete the execution of an enclosing ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:"loop_statement"})}),"; the completion is conditional if the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:"exit_statement"})})," includes a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#S0150",children:"condition"})}),".] ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h4,{id:"syntax",children:"Syntax"}),"\n",(0,t.jsx)(c.A,{children:"2"}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsxs)(n.p,{children:[(0,t.jsxs)("code",{children:["exit","_","statement"]}),(0,t.jsx)("a",{id:"S0193"}),(0,t.jsx)("code",{children:" ::= "}),(0,t.jsx)("br",{}),"   ",(0,t.jsx)("strong",{children:"exit"})," [",(0,t.jsxs)("em",{children:["loop","_"]}),(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),"] [",(0,t.jsx)("strong",{children:"when"})," ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#S0150",children:"condition"})}),"];",(0,t.jsx)("br",{})]})}),"\n",(0,t.jsx)(n.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,t.jsx)(c.A,{children:"3"}),"\n",(0,t.jsxs)("p",{children:["The ",(0,t.jsxs)("em",{children:["loop","_"]}),(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),", if any, in an ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:"exit_statement"})})," shall resolve to denote a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:"loop_statement"})}),". ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,t.jsx)(c.A,{children:"4"}),"\n",(0,t.jsxs)("p",{children:["Each ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:["exit","_","statement"]})})," ",(0,t.jsx)("em",{children:"applies to"})," a ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:["loop","_","statement"]})}),"; this is the ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:["loop","_","statement"]})})," being exited. An ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:["exit","_","statement"]})})," with a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," is only allowed within the ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:["loop","_","statement"]})})," denoted by the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})}),", and applies to that ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:["loop","_","statement"]})}),". An ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:["exit","_","statement"]})})," without a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.1#S0091",children:"name"})})," is only allowed within a ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:["loop","_","statement"]})}),", and applies to the innermost enclosing one. An ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:["exit","_","statement"]})})," that applies to a given ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:["loop","_","statement"]})})," shall not appear within a body or ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.5#S0258",children:["accept","_","statement"]})}),", if this construct is itself enclosed by the given ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:"loop_statement"})}),". ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(n.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,t.jsx)(c.A,{children:"5"}),"\n",(0,t.jsxs)("p",{children:["For the execution of an ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:"exit_statement"})}),", the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#S0150",children:"condition"})}),", if present, is first evaluated. If the value of the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#S0150",children:"condition"})})," is True, or if there is no ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#S0150",children:"condition"})}),", a transfer of control is done to complete the ",(0,t.jsx)("code",{children:(0,t.jsxs)("a",{href:"/docs/arm/AA-5/AA-5.5#S0178",children:["loop","_","statement"]})}),". If the value of the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.5#S0150",children:"condition"})})," is False, no transfer of control takes place. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(d.A,{children:[(0,t.jsx)(c.A,{children:"6"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(n.p,{children:["NOTE   Several nested loops can be exited by an ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-5/AA-5.7#S0193",children:"exit_statement"})})," that names the outer loop. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,t.jsx)(c.A,{children:"7"}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("em",{children:"Examples of loops with exit statements:"})," ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(c.A,{children:"8"}),"\n",(0,t.jsx)(o.A,{language:"ada",children:(0,t.jsxs)(n.p,{children:["for N in 1 .. Max","_","Num","_","Items loop","\n","   Get","_","New","_","Item(New","_","Item);","\n","   Merge","_","Item(New","_","Item, Storage","_","File);","\n","   exit when New","_","Item = Terminal","_","Item;","\n","end loop;","\n","\n",(0,t.jsx)(c.A,{children:"9"}),"\nMain","_","Cycle:","\n","   loop","\n","      --  initial statements","\n","      exit Main","_","Cycle when Found;","\n","      --  final statements","\n","   end loop Main","_","Cycle;","\n"]})})]})}function j(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}}}]);