"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6551],{508:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>d,default:()=>h,frontMatter:()=>t,metadata:()=>r,toc:()=>c});const r=JSON.parse('{"id":"style-guide/s10/08","title":"10.8 Summary","description":"- Use the guidelines in this chapter with care; they may be hazardous","source":"@site/docs/style-guide/s10/08.mdx","sourceDirName":"style-guide/s10","slug":"/style-guide/s10/08","permalink":"/docs/style-guide/s10/08","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"10.8 Summary"},"sidebar":"styleGuideSidebar","previous":{"title":"10.7 Pragmas","permalink":"/docs/style-guide/s10/07"},"next":{"title":"11. Complete Example","permalink":"/docs/style-guide/Portable_Dining_Philosophers_Example"}}');var i=s(4848),a=s(8453);const t={title:"10.8 Summary"},d=void 0,l={},c=[{value:"program structure",id:"program-structure",level:4},{value:"data structures",id:"data-structures",level:3},{value:"algorithms",id:"algorithms",level:3},{value:"types",id:"types",level:3},{value:"pragmas",id:"pragmas",level:3}];function o(e){const n={a:"a",admonition:"admonition",h3:"h3",h4:"h4",li:"li",p:"p",ul:"ul",...(0,a.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use the guidelines in this chapter with care; they may be hazardous\nto your software."}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"program-structure",children:"program structure"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use blocks to introduce late initialization when measured\nperformance indicates ."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"data-structures",children:"data structures"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use constrained arrays when measured performance indicates."}),"\n",(0,i.jsx)(n.li,{children:"Use zero-based indexing for arrays when measured performance\nindicates."}),"\n",(0,i.jsx)(n.li,{children:"Use fixed-size components for records when measured performance\nindicates."}),"\n",(0,i.jsx)(n.li,{children:"Define arrays of records as parallel arrays when measured\nperformance indicates."}),"\n",(0,i.jsx)(n.li,{children:"Use a sequence of assignments for an aggregation when measured\nperformance indicates."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"algorithms",children:"algorithms"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use incremental schemes instead of mod and rem when measured\nperformance indicates."}),"\n",(0,i.jsx)(n.li,{children:"Use the short-circuit control form when measured performance\nindicates."}),"\n",(0,i.jsx)(n.li,{children:"Use the case statement when measured performance indicates."}),"\n",(0,i.jsx)(n.li,{children:"Use hard-coded constraint checking when measured performance\nindicates."}),"\n",(0,i.jsx)(n.li,{children:"Use column-first processing of two-dimensional arrays when measured\nperformance indicates."}),"\n",(0,i.jsx)(n.li,{children:"Use overwriting for conditional assignment when measured performance\nindicates."}),"\n",(0,i.jsx)(n.li,{children:"When measured performance indicates, perform packed Boolean array\nshift operations by using slice assignments rather than repeated\nbit-wise assignment."}),"\n",(0,i.jsx)(n.li,{children:"Use static subprogram dispatching when measured performance\nindicates.<"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"types",children:"types"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Use only simple aggregates when measured performance indicates."}),"\n",(0,i.jsx)(n.li,{children:"For mutual exclusion, when measured performance indicates, use\nprotected types as an alternative to tasking rendezvous."}),"\n",(0,i.jsx)(n.li,{children:"To implement an interrupt handler, when measured performance\nindicates, use a protected procedure."}),"\n",(0,i.jsx)(n.li,{children:"Use modular types rather than packed Boolean arrays when measured\nperformance indicates."}),"\n",(0,i.jsx)(n.li,{children:"Use the predefined bounded strings when predictable performance is\nan issue and measured performance indicates."}),"\n",(0,i.jsx)(n.li,{children:"Use the procedural form of the string handling subprograms when\nmeasured performance indicates."}),"\n",(0,i.jsx)(n.li,{children:"Use strong typing with carefully selected constraints to reduce\nrun-time constraint checking when measured performance indicates."}),"\n",(0,i.jsx)(n.li,{children:"For cases where both rendezvous and protected types are inefficient,\nconsider the use of the Real-Time Systems Annex (Ada Reference\nManual 1995, Annex D)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"pragmas",children:"pragmas"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"When measured performance indicates, use pragma Inline when calling\noverhead is a significant portion of the routine's execution time."}),"\n",(0,i.jsx)(n.li,{children:"Use pragma Restrictions to express the user's intent to abide by\ncertain restrictions."}),"\n",(0,i.jsx)(n.li,{children:"Use pragma Preelaborate where allowed."}),"\n",(0,i.jsx)(n.li,{children:"Use pragma Pure where allowed."}),"\n",(0,i.jsx)(n.li,{children:"Use pragma Discard_Names when the names are not needed by the\napplication and data space is at a premium."}),"\n",(0,i.jsx)(n.li,{children:"Use pragma Suppress where necessary to achieve performance\nrequirements."}),"\n",(0,i.jsx)(n.li,{children:"Use pragma Reviewable to aid in the analysis of the generated code."}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:['This page of the "Ada Quality and Style Guide" has been adapted from the\noriginal work at ',(0,i.jsx)(n.a,{href:"https://en.wikibooks.org/wiki/Ada_Style_Guide",children:"https://en.wikibooks.org/wiki/Ada_Style_Guide"}),", which is\nlicensed under the\n",(0,i.jsx)(n.a,{href:"https://creativecommons.org/licenses/by-sa/3.0/",children:"Creative Commons Attribution-ShareAlike License"}),";\nadditional terms may apply. Page not endorsed by Wikibooks or the Ada\nStyle Guide Wikibook authors. This page is licensed under the same license\nas the original work."]})})]})}function h(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(o,{...e})}):o(e)}}}]);