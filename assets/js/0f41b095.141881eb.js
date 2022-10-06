"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[4354],{2477:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>x,contentTitle:()=>f,default:()=>S,frontMatter:()=>h,metadata:()=>y,toc:()=>b});var n=a(1716),r=a(3050),i=a(3989),l=a(8604),o=a(7318),s=a(4768),d=Object.defineProperty,A=Object.defineProperties,m=Object.getOwnPropertyDescriptors,k=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))c.call(t,a)&&p(e,a,t[a]);if(k)for(var a of k(t))u.call(t,a)&&p(e,a,t[a]);return e};const h={sidebar_position:14},f="2.6 String Literals",y={unversionedId:"arm/AA-2/AA-2.6",id:"arm/AA-2/AA-2.6",title:"2.6 String Literals",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-2/AA-2.6.mdx",sourceDirName:"arm/AA-2",slug:"/arm/AA-2/AA-2.6",permalink:"/docs/arm/AA-2/AA-2.6",draft:!1,tags:[],version:"current",sidebarPosition:14,frontMatter:{sidebar_position:14},sidebar:"referenceManualSidebar",previous:{title:"2.5 Character Literals",permalink:"/docs/arm/AA-2/AA-2.5"},next:{title:"2.7 Comments",permalink:"/docs/arm/AA-2/AA-2.7"}},x={},b=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}],T={toc:b};function S(e){var t,a=e,{components:d}=a,p=((e,t)=>{var a={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&k)for(var n of k(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=g(g({},T),p),A(t,m({components:d,mdxType:"MDXLayout"}))),(0,n.kt)("h1",g({},{id:"26-string-literals"}),"2.6 String Literals"),(0,n.kt)("admonition",g({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",g({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)(o.Z,{mdxType:"MarginText"},"1"),(0,n.kt)("p",null,"[A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," is formed by a sequence of graphic characters (possibly none) enclosed between two quotation marks used as string brackets. They are used to represent ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"s (see ",(0,n.kt)("a",{href:"../AA-6/AA-6.1"},"6.1"),"), values of a string type (see ",(0,n.kt)("a",{href:"../AA-4/AA-4.2"},"4.2"),"), and array subaggregates (see ",(0,n.kt)("a",{href:"../AA-4/AA-4.3#Subclause_4.3.3"},"4.3.3"),"). ]",(0,n.kt)("br",null)),(0,n.kt)("h4",g({},{id:"syntax"}),"Syntax"),(0,n.kt)(o.Z,{mdxType:"MarginText"},"2"),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},(0,n.kt)("code",null,"string_literal"),(0,n.kt)("a",{id:"S0016"}),(0,n.kt)("code",null," ::= "),'"',"{",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"}",'"',(0,n.kt)("br",null)),(0,n.kt)(o.Z,{mdxType:"MarginText"},"3"),(0,n.kt)(l.Z,{mdxType:"CodeBlock"},(0,n.kt)("code",null,"string_element"),(0,n.kt)("a",{id:"S0017"}),(0,n.kt)("code",null," ::= "),'"" | ',(0,n.kt)("em",null,"non_quotation_mark_"),(0,n.kt)("code",null,"graphic_character"),(0,n.kt)("br",null)),(0,n.kt)(o.Z,{mdxType:"MarginText"},"4"),(0,n.kt)("p",null,"A ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),' is either a pair of quotation marks (""), or a single ',(0,n.kt)("code",null,"graphic_character")," other than a quotation mark. ",(0,n.kt)("br",null)),(0,n.kt)("h4",g({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)(o.Z,{mdxType:"MarginText"},"5"),(0,n.kt)("p",null,"The ",(0,n.kt)("em",null,"sequence of characters")," of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," is formed from the sequence of ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"s between the bracketing quotation marks, in the given order, with a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),' that is "" becoming a single quotation mark in the sequence of characters, and any other ',(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element"))," being reproduced in the sequence.",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{mdxType:"MarginText"},"6"),(0,n.kt)("p",null,"A ",(0,n.kt)("em",null,"null string literal")," is a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," with no ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0017"},"string_element")),"s between the quotation marks.",(0,n.kt)("br",null)),(0,n.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(o.Z,{mdxType:"MarginText"},"7"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   An end of line cannot appear in a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),".",(0,n.kt)("br",null))),(0,n.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(o.Z,{mdxType:"MarginText"},"7.1/2"),(0,n.kt)(s.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   No transformation is performed on the sequence of characters of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),". ",(0,n.kt)("br",null))),(0,n.kt)("h4",g({},{id:"examples"}),"Examples"),(0,n.kt)(o.Z,{mdxType:"MarginText"},"8"),(0,n.kt)("p",null,(0,n.kt)("em",null,"Examples of string literals:")," ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{mdxType:"MarginText"},"9/2"),(0,n.kt)(s.Z,{items:["AI95-00433-01"],mdxType:"MarginInfo"}),(0,n.kt)(l.Z,{language:"ada",mdxType:"CodeBlock"},'"Message of the day:"',"\n","\n",'""                    --  a null string literal',"\n",'" "   "A"   """"      --  three string literals of length 1',"\n","\n",'"Characters such as $, %, and ',"}",' are allowed in string literals"',"\n",'"Archimedes said ""\u0395\u03cd\u03c1\u03b7\u03ba\u03b1"""',"\n",'"Volume of cylinder (\u03c0r\xb2h) = "',"\n"),(0,n.kt)("h4",g({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83"),(0,n.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(o.Z,{mdxType:"MarginText"},"9.a"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The wording has been changed to be strictly lexical. No mention is made of string or character values, since ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),"s are also used to represent ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-6/AA-6.1#S0202"},"operator_symbol")),"s, which don't have a defined value.",(0,n.kt)("br",null))),(0,n.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(o.Z,{mdxType:"MarginText"},"9.b"),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax is described differently. ",(0,n.kt)("br",null))),(0,n.kt)("h4",g({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,n.kt)(i.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(o.Z,{mdxType:"MarginText"},"9.c/2"),(0,n.kt)(s.Z,{items:["AI95-00285-01"],mdxType:"MarginInfo"}),(0,n.kt)(r.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"We explicitly say that the characters of a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal"))," should be used as is. In particular, no normalization or folding should be performed on a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-2/AA-2.6#S0016"},"string_literal")),". ",(0,n.kt)("br",null))))}S.isMDXComponent=!0}}]);