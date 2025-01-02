"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8429],{7823:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>d});const s=JSON.parse('{"id":"learn/overview/five-structural-elements","title":"The Big Five Structural Elements","description":"Ada provides five major elements for program organization.","source":"@site/docs/learn/overview/five-structural-elements.md","sourceDirName":"learn/overview","slug":"/learn/overview/five-structural-elements","permalink":"/docs/learn/overview/five-structural-elements","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":1,"frontMatter":{"sidebar_position":1},"sidebar":"tutorialSidebar","previous":{"title":"Overview","permalink":"/docs/category/overview"},"next":{"title":"Building Blocks","permalink":"/docs/learn/overview/building-blocks"}}');var t=r(4848),i=r(8453);const a={sidebar_position:1},o="The Big Five Structural Elements",l={},d=[];function c(e){const n={br:"br",h1:"h1",header:"header",li:"li",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"the-big-five-structural-elements",children:"The Big Five Structural Elements"})}),"\n",(0,t.jsx)(n.p,{children:"Ada provides five major elements for program organization."}),"\n",(0,t.jsx)(n.p,{children:"Unlike many languages, general types are not used as namespaces for writing\nfunctions or procedures. While types are important in Ada, they play a\ndifferent role, and are not used as a way to structure program text. Instead\nrelated types and their operations go into a package."}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Packages"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"group entities"}),"\n",(0,t.jsx)(n.li,{children:"unit of compilation"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Subprograms"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"reusable sequences of instructions (functions, procedures)"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Generics"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Writing a package or subprogram for arbitrary types which meet certain\nrequirements."}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Tasks"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"define operations done in parallel"}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"Protected objects"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"coordinate access to shared data behind possibly complex guard conditions"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Linear"})}),(0,t.jsx)(n.th,{children:(0,t.jsx)(n.strong,{children:"Concurrent"})})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Passive"})}),(0,t.jsx)(n.td,{children:"Packages"}),(0,t.jsx)(n.td,{children:"Protected Objects"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Active"})}),(0,t.jsx)(n.td,{children:"Subprograms"}),(0,t.jsx)(n.td,{children:"Tasks"})]})]})]}),"\n",(0,t.jsx)(n.p,{children:"Packages and protected objects are passive, whereas tasks and subprograms are\nactive program behavior."}),"\n",(0,t.jsx)(n.p,{children:"Packages provide separation into compilation units and act as\ncontainer for all entities. Subprograms, both procedures and functions, provide\nreusable algorithms and behaviors."}),"\n",(0,t.jsxs)(n.p,{children:["It is sometimes useful to write a package around unknown types and subprograms\nto be specified later. Generics provide this mechanism for both packages and subprograms.",(0,t.jsx)(n.br,{}),"\n","Generics do not provide structure on their own, but expand the capabilities\nof packages and subprograms to apply behavior to arbitrarily defined types,\nsubprograms and even packages."]}),"\n",(0,t.jsx)(n.p,{children:"Two structures provide and assist in concurrency. Tasks do concurrent computation,\nselection of operations from a blocked state, and conditional and timed waits.\nCoordination of shared resources is given by protected objects.\nBoth one-off and instantiable versions of tasks and protected types can be created. These\ntypes also following scoping rules and hence have access to elements where they\nwere declared."})]})}function h(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(c,{...e})}):c(e)}}}]);