"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4039],{6101:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>x,contentTitle:()=>A,default:()=>p,frontMatter:()=>l,metadata:()=>i,toc:()=>j});const i=JSON.parse('{"id":"arm/AA-J/AA-J.3","title":"J.3 Reduced Accuracy Subtypes","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-J/AA-J.3.mdx","sourceDirName":"arm/AA-J","slug":"/arm/AA-J/AA-J.3","permalink":"/docs/arm/AA-J/AA-J.3","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":196,"frontMatter":{"sidebar_position":196},"sidebar":"referenceManualSidebar","previous":{"title":"J.2 Allowed Replacements of Characters","permalink":"/docs/arm/AA-J/AA-J.2"},"next":{"title":"J.4 The Constrained Attribute","permalink":"/docs/arm/AA-J/AA-J.4"}}');var r=n(4848),a=n(8453),d=n(3842),t=n(1435),c=n(1432),o=n(9162),h=n(4421);const l={sidebar_position:196},A="J.3 Reduced Accuracy Subtypes",x={},j=[{value:"Syntax",id:"syntax",level:4},{value:"Name Resolution Rules",id:"name-resolution-rules",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function m(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"j3-reduced-accuracy-subtypes",children:"J.3 Reduced Accuracy Subtypes"})}),"\n",(0,r.jsx)(s.admonition,{type:"danger",children:(0,r.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,r.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,r.jsx)(o.A,{children:"1"}),"\n",(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})})," may be used to define a floating point subtype with a new value for its requested decimal precision, as reflected by its Digits attribute. Similarly, a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," may be used to define an ordinary fixed point subtype with a new value for its ",(0,r.jsx)("em",{children:"delta"}),", as reflected by its Delta attribute. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(o.A,{children:"1.a"}),(0,r.jsx)(d.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("strong",{}),"It might be more direct to make these attributes specifiable via an ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-13/AA-13.3#S0349",children:"attribute_definition_clause"})}),", and eliminate the syntax for these ",(0,r.jsxs)("code",{children:["_","constraint"]}),"s. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.h4,{id:"syntax",children:"Syntax"}),"\n",(0,r.jsx)(o.A,{children:"2/4"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0152-1"]}),"\n",(0,r.jsx)(c.A,{children:(0,r.jsxs)(s.p,{children:[(0,r.jsxs)("code",{children:["delta","_","constraint"]}),(0,r.jsx)("a",{id:"S0367"}),(0,r.jsx)("code",{children:" ::= "}),(0,r.jsx)("strong",{children:"delta"})," ",(0,r.jsxs)("em",{children:["static","_"]}),(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0138",children:"simple_expression"})})," [",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:"range_constraint"})}),"]",(0,r.jsx)("br",{})]})}),"\n",(0,r.jsx)(s.h4,{id:"name-resolution-rules",children:"Name Resolution Rules"}),"\n",(0,r.jsx)(o.A,{children:"3/4"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0152-1"]}),"\n",(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0138",children:"simple_expression"})})," of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," is expected to be of any real type. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,r.jsx)(o.A,{children:"4/4"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0152-1"]}),"\n",(0,r.jsxs)("p",{children:["The ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0138",children:"simple_expression"})})," of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," shall be static.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(o.A,{children:"5"}),"\n",(0,r.jsxs)("p",{children:["For a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0027",children:"subtype_indication"})})," with a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})}),", the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})})," shall denote an ordinary fixed point subtype.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(o.A,{children:"6"}),"\n",(0,r.jsxs)("p",{children:["For a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0027",children:"subtype_indication"})})," with a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})}),", the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})})," shall denote either a decimal fixed point subtype or a floating point subtype (notwithstanding the rule given in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.9",children:"3.5.9"})," that only allows a decimal fixed point subtype). ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(o.A,{children:"6.a/2"}),(0,r.jsx)(h.A,{items:["AI95-00114-01"]}),(0,r.jsxs)(d.A,{type:"aarm",aarm:"note",children:[(0,r.jsx)("em",{children:"This paragraph was deleted."}),(0,r.jsx)("br",{})]})]}),"\n",(0,r.jsx)(s.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,r.jsx)(o.A,{children:"7/4"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0152-1"]}),"\n",(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0027",children:"subtype_indication"})})," with a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})})," that denotes an ordinary fixed point subtype and a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," defines an ordinary fixed point subtype with a ",(0,r.jsx)("em",{children:"delta"})," given by the value of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0138",children:"simple_expression"})})," of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})}),". If the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," includes a ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:["range","_","constraint"]})}),", then the ordinary fixed point subtype is constrained by the ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:["range","_","constraint"]})}),".",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(o.A,{children:"8/4"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0152-1"]}),"\n",(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0027",children:"subtype_indication"})})," with a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0028",children:"subtype_mark"})})," that denotes a floating point subtype and a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})})," defines a floating point subtype with a requested decimal precision (as reflected by its Digits attribute) given by the value of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0138",children:"simple_expression"})})," of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})}),". If the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})})," includes a ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:["range","_","constraint"]})}),", then the floating point subtype is constrained by the ",(0,r.jsx)("code",{children:(0,r.jsxs)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:["range","_","constraint"]})}),". ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(s.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,r.jsx)(o.A,{children:"9/4"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0152-1"]}),"\n",(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," is ",(0,r.jsx)("em",{children:"compatible"})," with an ordinary fixed point subtype if the value of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0138",children:"simple_expression"})})," is no less than the ",(0,r.jsx)("em",{children:"delta"})," of the subtype, and the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:"range_constraint"})}),", if any, is compatible with the subtype.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(o.A,{children:"10/4"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0152-1"]}),"\n",(0,r.jsxs)("p",{children:["A ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})})," is ",(0,r.jsx)("em",{children:"compatible"})," with a floating point subtype if the value of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0138",children:"simple_expression"})})," is no greater than the requested decimal precision of the subtype, and the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:"range_constraint"})}),", if any, is compatible with the subtype.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(o.A,{children:"11"}),"\n",(0,r.jsxs)("p",{children:["The elaboration of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," consists of the elaboration of the ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:"range_constraint"})}),", if any. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(o.A,{children:"11.a"}),(0,r.jsx)(d.A,{type:"aarm",aarm:"reason",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("strong",{}),"A numeric subtype is considered \u201cconstrained\u201d only if a range constraint applies to it. The only effect of a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})})," or a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," without a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0036",children:"range_constraint"})})," is to specify the value of the corresponding Digits or Delta attribute in the new subtype. The set of values of the subtype is not \u201cconstrained\u201d in any way by such ",(0,r.jsxs)("code",{children:["_","constraint"]}),"s. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(s.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(o.A,{children:"11.b"}),(0,r.jsx)(d.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:["In Ada 83, a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," is called a fixed","_","point","_","constraint, and a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})})," is called a floating","_","point","_","constraint. We have adopted other terms because ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})}),"s apply primarily to decimal fixed point types now (they apply to floating point types only as an obsolescent feature). ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(t.A,{children:(0,r.jsx)(s.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,r.jsxs)(t.A,{children:[(0,r.jsx)(o.A,{children:"11.c/4"}),(0,r.jsx)(h.A,{items:["AI12-0152-1"]}),(0,r.jsx)(d.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(s.p,{children:[(0,r.jsx)("strong",{children:"Corrigendum:"})," Changed the syntax so that the value following ",(0,r.jsx)("strong",{children:"delta"})," in a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.3#S0367",children:"delta_constraint"})})," is a ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0138",children:"simple_expression"})}),". This is compatible as any expressions that would require extra parentheses are already illegal. The change is necessary to eliminate syntax ambguities in ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.4#S0035",children:"derived_type_definition"})}),"s. The similar change for ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#S0050",children:"digits_constraint"})})," is documented in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.9",children:"3.5.9"}),". ",(0,r.jsx)("br",{})]})})]})]})}function p(e={}){const{wrapper:s}={...(0,a.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}}}]);