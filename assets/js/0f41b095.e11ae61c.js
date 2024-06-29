"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2504],{5045:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>x,contentTitle:()=>o,default:()=>g,frontMatter:()=>h,metadata:()=>A,toc:()=>j});var n=s(74848),a=s(28453),i=s(13842),d=s(91435),c=s(21432),t=s(79162),l=s(34421);const h={sidebar_position:14},o="2.6 String Literals",A={id:"arm/AA-2/AA-2.6",title:"2.6 String Literals",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-2/AA-2.6.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.6",permalink:"/docs/arm/AA-2/AA-2.6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"referenceManualSidebar",previous:{title:"2.5 Character Literals",permalink:"/docs/arm/AA-2/AA-2.5"},next:{title:"2.7 Comments",permalink:"/docs/arm/AA-2/AA-2.7"}},x={},j=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}];function m(e){const r={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,a.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.h1,{id:"26-string-literals",children:"2.6 String Literals"}),"\n",(0,n.jsx)(r.admonition,{type:"danger",children:(0,n.jsxs)(r.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(r.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,n.jsx)(t.A,{children:"1"}),"\n",(0,n.jsxs)("p",{children:["[A ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," is formed by a sequence of graphic characters (possibly none) enclosed between two quotation marks used as string brackets. They are used to represent ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1#S0202",children:"operator_symbol"})}),"s (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1",children:"6.1"}),"), values of a string type (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.2",children:"4.2"}),"), and array subaggregates (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.3#Subclause_4.3.3",children:"4.3.3"}),"). ]",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(r.h4,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(t.A,{children:"2"}),"\n",(0,n.jsx)(c.A,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsxs)("code",{children:["string","_","literal"]}),(0,n.jsx)("a",{id:"S0016"}),(0,n.jsx)("code",{children:" ::= "}),'"',"{",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0017",children:"string_element"})}),"}",'"',(0,n.jsx)("br",{})]})}),"\n",(0,n.jsx)(t.A,{children:"3"}),"\n",(0,n.jsx)(c.A,{children:(0,n.jsxs)(r.p,{children:[(0,n.jsxs)("code",{children:["string","_","element"]}),(0,n.jsx)("a",{id:"S0017"}),(0,n.jsx)("code",{children:" ::= "}),'"" | ',(0,n.jsxs)("em",{children:["non","_","quotation","_","mark","_"]}),(0,n.jsxs)("code",{children:["graphic","_","character"]}),(0,n.jsx)("br",{})]})}),"\n",(0,n.jsx)(t.A,{children:"4"}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["A ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0017",children:"string_element"})}),' is either a pair of quotation marks (""), or a single ',(0,n.jsxs)("code",{children:["graphic","_","character"]})," other than a quotation mark. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(r.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,n.jsx)(t.A,{children:"5"}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("em",{children:"sequence of characters"})," of a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," is formed from the sequence of ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0017",children:"string_element"})}),"s between the bracketing quotation marks, in the given order, with a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0017",children:"string_element"})}),' that is "" becoming a single quotation mark in the sequence of characters, and any other ',(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0017",children:"string_element"})})," being reproduced in the sequence.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(t.A,{children:"6"}),"\n",(0,n.jsxs)("p",{children:["A ",(0,n.jsx)("em",{children:"null string literal"})," is a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," with no ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0017",children:"string_element"})}),"s between the quotation marks.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(t.A,{children:"7"}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(r.p,{children:["NOTE 1   An end of line cannot appear in a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),".",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(t.A,{children:"7.1/2"}),(0,n.jsx)(l.A,{items:["AI95-00285-01"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(r.p,{children:["NOTE 2   No transformation is performed on the sequence of characters of a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),". ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(r.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(t.A,{children:"8"}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsx)("em",{children:"Examples of string literals:"})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(t.A,{children:"9/2"}),"\n",(0,n.jsx)(l.A,{items:["AI95-00433-01"]}),"\n",(0,n.jsx)(c.A,{language:"ada",children:(0,n.jsxs)(r.p,{children:['"Message of the day:"',"\n","\n",'""                    --  a null string literal',"\n",'" "   "A"   """"      --  three string literals of length 1',"\n","\n",'"Characters such as ',"$",", %, and ","}",' are allowed in string literals"',"\n",'"Archimedes said ""\u0395\u03cd\u03c1\u03b7\u03ba\u03b1"""',"\n",'"Volume of cylinder (\u03c0r\xb2h) = "',"\n"]})}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsx)(r.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(t.A,{children:"9.a"}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(r.p,{children:["The wording has been changed to be strictly lexical. No mention is made of string or character values, since ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),"s are also used to represent ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1#S0202",children:"operator_symbol"})}),"s, which don't have a defined value.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(t.A,{children:"9.b"}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(r.p,{children:["The syntax is described differently. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(d.A,{children:(0,n.jsx)(r.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,n.jsxs)(d.A,{children:[(0,n.jsx)(t.A,{children:"9.c/2"}),(0,n.jsx)(l.A,{items:["AI95-00285-01"]}),(0,n.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(r.p,{children:["We explicitly say that the characters of a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})})," should be used as is. In particular, no normalization or folding should be performed on a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.6#S0016",children:"string_literal"})}),". ",(0,n.jsx)("br",{})]})})]})]})}function g(e={}){const{wrapper:r}={...(0,a.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);