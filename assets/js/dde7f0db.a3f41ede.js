"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8663],{78515:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>p,contentTitle:()=>l,default:()=>m,frontMatter:()=>c,metadata:()=>h,toc:()=>u});var a=i(74848),t=i(28453),s=i(13842),r=i(91435),d=(i(21432),i(79162)),o=i(34421);const c={sidebar_position:126},l="A.6 Input-Output",h={id:"arm/AA-A/AA-A.6",title:"A.6 Input-Output",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.6.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.6",permalink:"/docs/arm/AA-A/AA-A.6",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:126,frontMatter:{sidebar_position:126},sidebar:"referenceManualSidebar",previous:{title:"A.5 The Numerics Packages",permalink:"/docs/arm/AA-A/AA-A.5"},next:{title:"A.7 External Files and File Objects",permalink:"/docs/arm/AA-A/AA-A.7"}},p={},u=[{value:"Inconsistencies With Ada 83",id:"inconsistencies-with-ada-83",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}];function A(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,t.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"a6-input-output",children:"A.6 Input-Output"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,a.jsx)(d.A,{children:"1/5"}),"\n",(0,a.jsx)(o.A,{items:["AI95-00285-01","AI12-0445-1"]}),"\n",(0,a.jsxs)("p",{children:["[ Input-output is provided through language-defined packages, each of which is a child of the root package Ada. The generic packages Sequential","_","IO and Direct","_","IO define input-output operations applicable to files containing elements of a given type. The generic package Storage","_","IO supports reading from and writing to an in-memory buffer. Additional operations for text input-output are supplied in the packages Text","_","IO, Wide","_","Text","_","IO, and Wide","_","Wide","_","Text","_","IO. Heterogeneous input-output is provided through the child packages Streams.Stream","_","IO and Text","_","IO.Text","_","Streams (see also ",(0,a.jsx)("a",{href:"/docs/arm/AA-13/AA-13.13",children:"13.13"}),"). The package IO","_","Exceptions defines the exceptions used by the predefined input-output packages.] ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(n.h4,{id:"inconsistencies-with-ada-83",children:"Inconsistencies With Ada 83"})}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(d.A,{children:"1.a"}),(0,a.jsx)(s.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["The introduction of Append","_","File as a new element of the enumeration type File","_","Mode in Sequential","_","IO and Text","_","IO, and the introduction of several new declarations in Text","_","IO, may result in name clashes in the presence of ",(0,a.jsx)("strong",{children:"use"})," clauses. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(n.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(d.A,{children:"1.b"}),(0,a.jsx)(s.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["Text","_","IO enhancements (Get","_","Immediate, Look","_","Ahead, Standard","_","Error, Modular","_","IO, Decimal","_","IO), Wide","_","Text","_","IO, and the stream input-output facilities are new in Ada 95. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(n.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(d.A,{children:"1.c"}),(0,a.jsx)(s.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["RM83-14.6, \u201cLow Level Input-Output\u201d, is removed. This has no semantic effect, since the package was entirely implementation defined, nobody actually implemented it, and if they did, they can always provide it as a vendor-supplied package. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(r.A,{children:(0,a.jsx)(n.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,a.jsxs)(r.A,{children:[(0,a.jsx)(d.A,{children:"1.d/2"}),(0,a.jsx)(o.A,{items:["AI95-00285-01"]}),(0,a.jsx)(s.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["Included package Wide","_","Wide","_","Text","_","IO in this description. ",(0,a.jsx)("br",{})]})})]})]})}function m(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}}}]);