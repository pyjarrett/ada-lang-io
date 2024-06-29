"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[5840],{74863:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>u,contentTitle:()=>_,default:()=>p,frontMatter:()=>c,metadata:()=>x,toc:()=>h});var d=i(74848),t=i(28453),a=i(13842),s=i(91435),r=(i(21432),i(79162)),o=i(34421);const c={sidebar_position:131},_="A.11 Wide Text Input-Output and Wide Wide Text Input-Output",x={id:"arm/AA-A/AA-A.11",title:"A.11 Wide Text Input-Output and Wide Wide Text Input-Output",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.11.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.11",permalink:"/docs/arm/AA-A/AA-A.11",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:131,frontMatter:{sidebar_position:131},sidebar:"referenceManualSidebar",previous:{title:"A.10 Text Input-Output",permalink:"/docs/arm/AA-A/AA-A.10"},next:{title:"A.12 Stream Input-Output",permalink:"/docs/arm/AA-A/AA-A.12"}},u={},h=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}];function l(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,t.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.h1,{id:"a11-wide-text-input-output-and-wide-wide-text-input-output",children:"A.11 Wide Text Input-Output and Wide Wide Text Input-Output"}),"\n",(0,d.jsx)(n.admonition,{type:"danger",children:(0,d.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,d.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,d.jsx)(r.A,{children:"1/2"}),"\n",(0,d.jsx)(o.A,{items:["AI95-00285-01"]}),"\n",(0,d.jsxs)("p",{children:["The packages Wide","_","Text","_","IO and Wide","_","Wide","_","Text","_","IO provide facilities for input and output in human-readable form. Each file is read or written sequentially, as a sequence of wide characters (or wide wide characters) grouped into lines, and as a sequence of lines grouped into pages. ",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,d.jsx)(r.A,{children:"2/2"}),"\n",(0,d.jsx)(o.A,{items:["AI95-00285-01","AI95-00301-01"]}),"\n",(0,d.jsxs)("p",{children:["The specification of package Wide","_","Text","_","IO is the same as that for Text","_","IO, except that in each Get, Look","_","Ahead, Get","_","Immediate, Get","_","Line, Put, and Put","_","Line subprogram, any occurrence of Character is replaced by Wide","_","Character, and any occurrence of String is replaced by Wide","_","String. Nongeneric equivalents of Wide","_","Text","_","IO.Integer","_","IO and Wide","_","Text","_","IO.Float","_","IO are provided (as for Text","_","IO) for each predefined numeric type, with names such as Ada.Integer","_","Wide","_","Text","_","IO, Ada.Long","_","Integer","_","Wide","_","Text","_","IO, Ada.Float","_","Wide","_","Text","_","IO, Ada.Long","_","Float","_","Wide","_","Text","_","IO.",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(r.A,{children:"3/2"}),"\n",(0,d.jsx)(o.A,{items:["AI95-00285-01","AI95-00301-01"]}),"\n",(0,d.jsxs)("p",{children:["The specification of package Wide","_","Wide","_","Text","_","IO is the same as that for Text","_","IO, except that in each Get, Look","_","Ahead, Get","_","Immediate, Get","_","Line, Put, and Put","_","Line subprogram, any occurrence of Character is replaced by Wide","_","Wide","_","Character, and any occurrence of String is replaced by Wide","_","Wide","_","String. Nongeneric equivalents of Wide","_","Wide","_","Text","_","IO.Integer","_","IO and Wide","_","Wide","_","Text","_","IO.Float","_","IO are provided (as for Text","_","IO) for each predefined numeric type, with names such as Ada.Integer","_","Wide","_","Wide","_","Text","_","IO, Ada.Long","_","Integer","_","Wide","_","Wide","_","Text","_","IO, Ada.Float","_","Wide","_","Wide","_","Text","_","IO, Ada.Long","_","Float","_","Wide","_","Wide","_","Text","_","IO.",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(r.A,{children:"4/3"}),"\n",(0,d.jsx)(o.A,{items:["AI95-00285-01","AI95-00428-01","AI05-0004-1","AI05-0092-1"]}),"\n",(0,d.jsxs)("p",{children:["The specification of package Wide","_","Text","_","IO.Wide","_","Bounded","_","IO is the same as that for Text","_","IO.Bounded","_","IO, except that any occurrence of Bounded","_","String is replaced by Bounded","_","Wide","_","String, and any occurrence of package Bounded is replaced by Wide","_","Bounded. The specification of package Wide","_","Wide","_","Text","_","IO.Wide","_","Wide","_","Bounded","_","IO is the same as that for Text","_","IO.Bounded","_","IO, except that any occurrence of Bounded","_","String is replaced by Bounded","_","Wide","_","Wide","_","String, and any occurrence of package Bounded is replaced by Wide","_","Wide","_","Bounded.",(0,d.jsx)("br",{})]}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(r.A,{children:"4.a/3"}),(0,d.jsx)(o.A,{items:["AI05-0005-1"]}),(0,d.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("strong",{children:"To be honest: "}),"\u201cpackage Bounded\u201d refers to both the package Ada.Strings.Bounded and the formal package parameter named Bounded. ",(0,d.jsx)("br",{})]})})]}),"\n",(0,d.jsx)(r.A,{children:"5/3"}),"\n",(0,d.jsx)(o.A,{items:["AI95-00285-01","AI95-00301-01","AI05-0092-1"]}),"\n",(0,d.jsxs)("p",{children:["The specification of package Wide","_","Text","_","IO.Wide","_","Unbounded","_","IO is the same as that for Text","_","IO.Unbounded","_","IO, except that any occurrence of Unbounded","_","String is replaced by Unbounded","_","Wide","_","String, and any occurrence of package Unbounded is replaced by Wide","_","Unbounded. The specification of package Wide","_","Wide","_","Text","_","IO.Wide","_","Wide","_","Unbounded","_","IO is the same as that for Text","_","IO.Unbounded","_","IO, except that any occurrence of Unbounded","_","String is replaced by Unbounded","_","Wide","_","Wide","_","String, and any occurrence of package Unbounded is replaced by Wide","_","Wide","_","Unbounded. ",(0,d.jsx)("br",{})]}),"\n",(0,d.jsx)(s.A,{children:(0,d.jsx)(n.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(r.A,{children:"5.a"}),(0,d.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,d.jsxs)(n.p,{children:["Support for Wide","_","Character and Wide","_","String I/O is new in Ada 95. ",(0,d.jsx)("br",{})]})})]}),"\n",(0,d.jsx)(s.A,{children:(0,d.jsx)(n.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(r.A,{children:"5.b/2"}),(0,d.jsx)(o.A,{items:["AI95-00285-01"]}),(0,d.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,d.jsxs)(n.p,{children:["Package Wide","_","Wide","_","Text","_","IO is new. Be glad it wasn't called Double","_","Wide","_","Text","_","IO (for use in trailer parks) or Really","_","Wide","_","Text","_","IO.",(0,d.jsx)("br",{})]})})]}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(r.A,{children:"5.c/2"}),(0,d.jsx)(o.A,{items:["AI95-00301-01"]}),(0,d.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,d.jsxs)(n.p,{children:["Packages Wide","_","Text","_","IO.Wide","_","Unbounded","_","IO and Wide","_","Wide","_","Text","_","IO.Wide","_","Wide","_","Unbounded","_","IO are also new.",(0,d.jsx)("br",{})]})})]}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(r.A,{children:"5.d/2"}),(0,d.jsx)(o.A,{items:["AI95-00428-01"]}),(0,d.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,d.jsxs)(n.p,{children:["Packages Wide","_","Text","_","IO.Wide","_","Bounded","_","IO and Wide","_","Wide","_","Text","_","IO.Wide","_","Wide","_","Bounded","_","IO are new as well. ",(0,d.jsx)("br",{})]})})]}),"\n",(0,d.jsx)(s.A,{children:(0,d.jsx)(n.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,d.jsxs)(s.A,{children:[(0,d.jsx)(r.A,{children:"5.e/3"}),(0,d.jsx)(o.A,{items:["AI05-0092-1"]}),(0,d.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("strong",{children:"Correction"}),": Corrected the names of various entities in the above description. Since the previously named entities don't exist and the intent is obvious, this is just considered a presentation change. ",(0,d.jsx)("br",{})]})})]})]})}function p(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(l,{...e})}):l(e)}}}]);