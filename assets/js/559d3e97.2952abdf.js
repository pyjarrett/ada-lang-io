"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8950],{52006:(e,a,i)=>{i.r(a),i.d(a,{assets:()=>x,contentTitle:()=>h,default:()=>j,frontMatter:()=>l,metadata:()=>m,toc:()=>p});var n=i(74848),s=i(28453),t=i(13842),r=i(91435),d=i(21432),c=i(79162),o=i(34421);const l={sidebar_position:178},h="F.1 Machine_Radix Attribute Definition Clause",m={id:"arm/AA-F/AA-F.1",title:"F.1 Machine_Radix Attribute Definition Clause",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-F/AA-F.1.mdx",sourceDirName:"arm/AA-F",slug:"/arm/AA-F/AA-F.1",permalink:"/docs/arm/AA-F/AA-F.1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:178,frontMatter:{sidebar_position:178},sidebar:"referenceManualSidebar",previous:{title:"Annex F Information Systems",permalink:"/docs/arm/AA-F/"},next:{title:"F.2 The Package Decimal",permalink:"/docs/arm/AA-F/AA-F.2"}},x={},p=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function A(e){const a={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(a.h1,{id:"f1-machine_radix-attribute-definition-clause",children:"F.1 Machine_Radix Attribute Definition Clause"}),"\n",(0,n.jsx)(a.admonition,{type:"danger",children:(0,n.jsxs)(a.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(a.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,n.jsx)(a.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,n.jsx)(c.A,{children:"1/5"}),"\n",(0,n.jsx)(o.A,{items:["AI12-0272-1"]}),"\n",(0,n.jsxs)("p",{children:["The representation attribute Machine","_","Radix may be specified for a decimal first subtype (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.9",children:"3.5.9"}),") via an ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-13/AA-13.3#S0349",children:"attribute_definition_clause"})}),"; the expression of such a clause shall be static, and its value shall be 2 or 10. A value of 2 implies a binary base range; a value of 10 implies a decimal base range. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(c.A,{children:"1.a"}),(0,n.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{}),"In the absence of a Machine","_","Radix clause, the choice of 2 versus 10 for S'Machine","_","Radix is not specified. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(c.A,{children:"1.b/3"}),(0,n.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{children:"Aspect Description for "}),(0,n.jsxs)("strong",{children:["Machine","_","Radix: "]}),"Radix (2 or 10) that is used to represent a decimal fixed point type.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(a.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,n.jsx)(c.A,{children:"2"}),"\n",(0,n.jsxs)("p",{children:["Packed decimal should be used as the internal representation for objects of subtype S when S'Machine","_","Radix = 10. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(c.A,{children:"2.a/2"}),(0,n.jsx)(t.A,{type:"aarm",aarm:"implementation-advice",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{}),"Packed decimal should be used as the internal representation for objects of subtype ",(0,n.jsx)("em",{children:"S"})," when ",(0,n.jsx)("em",{children:"S"}),"'Machine","_","Radix = 10.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(c.A,{children:"2.b/3"}),(0,n.jsx)(o.A,{items:["AI05-0229-1"]}),(0,n.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,n.jsxs)(a.p,{children:[(0,n.jsx)("strong",{}),"The intent of a decimal Machine","_","Radix attribute definition clause is to allow the programmer to declare an Ada decimal data object whose representation matches a particular COBOL implementation's representation of packed decimal items. The Ada object may then be passed to an interfaced COBOL program that takes a packed decimal data item as a parameter, assuming that convention COBOL has been specified for the Ada object's type with an aspect Convention.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(c.A,{children:"2.c"}),(0,n.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["Additionally, the Ada compiler may choose to generate arithmetic instructions that exploit the packed decimal representation.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(a.h4,{id:"examples",children:"Examples"}),"\n",(0,n.jsx)(c.A,{children:"3"}),"\n",(0,n.jsxs)("p",{children:[(0,n.jsxs)("em",{children:["Example of Machine","_","Radix attribute definition clause:"]})," ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"4"}),"\n",(0,n.jsx)(d.A,{language:"ada",children:(0,n.jsxs)(a.p,{children:["type Money is delta 0.01 digits 15;","\n","for Money'Machine","_","Radix use 10;","\n"]})}),"\n",(0,n.jsx)(r.A,{children:(0,n.jsx)(a.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,n.jsxs)(r.A,{children:[(0,n.jsx)(c.A,{children:"4.a/5"}),(0,n.jsx)(o.A,{items:["AI12-0272-1"]}),(0,n.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(a.p,{children:["Clarified that Machine","_","Radix is a representation aspect. ",(0,n.jsx)("br",{})]})})]})]})}function j(e={}){const{wrapper:a}={...(0,s.R)(),...e.components};return a?(0,n.jsx)(a,{...e,children:(0,n.jsx)(A,{...e})}):A(e)}}}]);