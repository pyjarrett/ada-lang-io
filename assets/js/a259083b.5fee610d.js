"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8127],{42857:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>h,contentTitle:()=>A,default:()=>p,frontMatter:()=>c,metadata:()=>l,toc:()=>m});var s=i(74848),r=i(28453),a=i(13842),t=i(91435),d=(i(21432),i(79162)),o=i(34421);const c={sidebar_position:177},A="Annex F Information Systems",l={id:"arm/AA-F/AA-F",title:"Annex F Information Systems",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-F/AA-F.mdx",sourceDirName:"arm/AA-F",slug:"/arm/AA-F/",permalink:"/docs/arm/AA-F/",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:177,frontMatter:{sidebar_position:177},sidebar:"referenceManualSidebar",previous:{title:"E.5 Partition Communication Subsystem",permalink:"/docs/arm/AA-E/AA-E.5"},next:{title:"F.1 Machine_Radix Attribute Definition Clause",permalink:"/docs/arm/AA-F/AA-F.1"}},h={},m=[{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}];function x(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"annex-f-information-systems",children:"Annex F Information Systems"}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,s.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,s.jsx)(d.A,{children:"1"}),"\n",(0,s.jsxs)("p",{children:["This Annex provides a set of facilities relevant to Information Systems programming. These fall into several categories: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(d.A,{children:"2"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["an attribute definition clause specifying Machine","_","Radix for a decimal subtype;",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"3"}),(0,s.jsxs)("li",{children:["the package Decimal, which declares a set of constants defining the implementation's capacity for decimal types, and a generic procedure for decimal division; and",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"4/2"}),(0,s.jsx)(o.A,{items:["AI95-00285-01"]}),(0,s.jsxs)("li",{children:["the child packages Text","_","IO.Editing, Wide","_","Text","_","IO.Editing, and Wide","_","Wide","_","Text","_","IO.Editing, which support formatted and localized output of decimal data, based on \u201cpicture String\u201d values. ",(0,s.jsx)("br",{})]})]}),"\n",(0,s.jsx)(d.A,{children:"5/5"}),"\n",(0,s.jsx)(o.A,{items:["AI95-00434-01","AI12-0449-1"]}),"\n",(0,s.jsxs)("p",{children:["Other relevant facilities can be found in: ",(0,s.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.9",children:"3.5.9"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.9",children:"Fixed Point Types"}),"\u201d; ",(0,s.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.10",children:"3.5.10"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.10",children:"Operations of Fixed Point Types"}),"\u201d; ",(0,s.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6",children:"4.6"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-4/AA-4.6",children:"Type Conversions"}),"\u201d; ",(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.3",children:"13.3"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.3",children:"Operational and Representation Attributes"}),"\u201d; ",(0,s.jsx)("a",{href:"/docs/arm/AA-A/AA-A.10#Subclause_A.10.9",children:"A.10.9"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-A/AA-A.10#Subclause_A.10.9",children:"Input-Output for Real Types"}),"\u201d; ",(0,s.jsx)("a",{href:"/docs/arm/AA-B/AA-B.3",children:"B.3"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-B/AA-B.3",children:"Interfacing with C and C++"}),"\u201d; ",(0,s.jsx)("a",{href:"/docs/arm/AA-B/AA-B.4",children:"B.4"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-B/AA-B.4",children:"Interfacing with COBOL"}),"\u201d; ",(0,s.jsx)("a",{href:"/docs/arm/AA-G/",children:"Annex G"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-G/",children:"Numerics"}),"\u201d.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(d.A,{children:"6"}),"\n",(0,s.jsxs)("p",{children:["The character and string handling packages in ",(0,s.jsx)("a",{href:"/docs/arm/AA-A/",children:"Annex A"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-A/",children:"Predefined Language Environment"}),"\u201d are also relevant for Information Systems. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(n.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,s.jsx)(d.A,{children:"7/3"}),"\n",(0,s.jsx)(o.A,{items:["AI05-0229-1"]}),"\n",(0,s.jsxs)("p",{children:["If COBOL (respectively, C) is widely supported in the target environment, implementations supporting the Information Systems Annex should provide the child package Interfaces.COBOL (respectively, Interfaces.C) specified in ",(0,s.jsx)("a",{href:"/docs/arm/AA-B/",children:"Annex B"})," and should support a ",(0,s.jsxs)("em",{children:["convention","_"]}),(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," of COBOL (respectively, C) for the Convention aspect (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-B/",children:"Annex B"}),"), thus allowing Ada programs to interface with programs written in that language. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"7.a/2"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"implementation-advice",children:(0,s.jsxs)(n.p,{children:[(0,s.jsx)("strong",{}),"If COBOL (respectively, C) is supported in the target environment, then interfacing to COBOL (respectively, C) should be supported as specified in ",(0,s.jsx)("a",{href:"/docs/arm/AA-B/",children:"Annex B"}),".",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(t.A,{children:(0,s.jsx)(n.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"7.b"}),(0,s.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(n.p,{children:["This Annex is new to Ada 95. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(t.A,{children:(0,s.jsx)(n.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"7.c/2"}),(0,s.jsx)(o.A,{items:["AI95-00285-01"]}),(0,s.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(n.p,{children:["Added a mention of Wide","_","Wide","_","Text","_","IO.Editing, part of the support for 32-bit characters. ",(0,s.jsx)("br",{})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(x,{...e})}):x(e)}}}]);