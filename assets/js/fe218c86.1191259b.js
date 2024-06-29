"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6398],{95832:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>f,contentTitle:()=>l,default:()=>u,frontMatter:()=>c,metadata:()=>p,toc:()=>x});var r=t(74848),a=t(28453),i=t(13842),s=t(91435),o=t(21432),d=t(79162),h=t(34421);const c={sidebar_position:121},l="A.1 The Package Standard",p={id:"arm/AA-A/AA-A.1",title:"A.1 The Package Standard",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-A/AA-A.1.mdx",sourceDirName:"arm/AA-A",slug:"/arm/AA-A/AA-A.1",permalink:"/docs/arm/AA-A/AA-A.1",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:121,frontMatter:{sidebar_position:121},sidebar:"referenceManualSidebar",previous:{title:"Annex A Predefined Language Environment",permalink:"/docs/arm/AA-A/"},next:{title:"A.2 The Package Ada",permalink:"/docs/arm/AA-A/AA-A.2"}},f={},x=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4}];function A(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,a.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"a1-the-package-standard",children:"A.1 The Package Standard"}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,r.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,r.jsx)(d.A,{children:"1/3"}),"\n",(0,r.jsx)(h.A,{items:["AI05-0299-1"]}),"\n",(0,r.jsxs)("p",{children:["This subclause outlines the specification of the package Standard containing all predefined identifiers in the language. The corresponding package body is not specified by the language.",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(d.A,{children:"2"}),"\n",(0,r.jsxs)("p",{children:["The operators that are predefined for the types declared in the package Standard are given in comments since they are implicitly declared. Italics are used for pseudo-names of anonymous types (such as ",(0,r.jsxs)("em",{children:["root","_","real"]}),") and for undefined information (such as ",(0,r.jsx)("em",{children:"implementation-defined"}),"). ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"2.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"ramification",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"All of the predefined operators are of convention Intrinsic. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,r.jsx)(d.A,{children:"3"}),"\n",(0,r.jsxs)("p",{children:["The library package Standard has the following declaration: ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"3.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"implementation-defined",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"The names and characteristics of the numeric subtypes declared in the visible part of package Standard.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:"4/5"}),"\n",(0,r.jsx)(h.A,{items:["AI12-0414-1"]}),"\n",(0,r.jsxs)(o.A,{language:"ada",children:[(0,r.jsxs)(n.p,{children:["package Standard","\n","   with Pure is","\n","\n",(0,r.jsx)(d.A,{children:"5"}),"\ntype Boolean is (False, True);","\n","\n",(0,r.jsx)(d.A,{children:"6"}),"\n-- The predefined relational operators for this type are as follows:","\n","\n",(0,r.jsx)(d.A,{children:"7/1"})]}),(0,r.jsx)(h.A,{items:["AI95-00145-01"]}),(0,r.jsxs)(n.p,{children:["{","8652/0028","}",'    -- function "="   (Left, Right : Boolean\'Base) return Boolean;',"\n",'   -- function "/="  (Left, Right : Boolean\'Base) return Boolean;',"\n",'   -- function "',"<","\"   (Left, Right : Boolean'Base) return Boolean;","\n",'   -- function "',"<","=\"  (Left, Right : Boolean'Base) return Boolean;","\n",'   -- function "',">","\"   (Left, Right : Boolean'Base) return Boolean;","\n",'   -- function "',">","=\"  (Left, Right : Boolean'Base) return Boolean;","\n","\n",(0,r.jsx)(d.A,{children:"8"}),"\n-- The predefined logical operators and the predefined logical","\n","   -- negation operator are as follows:","\n","\n",(0,r.jsx)(d.A,{children:"9/1"})]}),(0,r.jsx)(h.A,{items:["AI95-00145-01"]}),(0,r.jsxs)(n.p,{children:["{","8652/0028","}","    -- function \"and\" (Left, Right : Boolean'Base) return Boolean'Base;","\n","   -- function \"or\"  (Left, Right : Boolean'Base) return Boolean'Base;","\n","   -- function \"xor\" (Left, Right : Boolean'Base) return Boolean'Base;","\n","\n",(0,r.jsx)(d.A,{children:"10/1"})]}),(0,r.jsx)(h.A,{items:["AI95-00145-01"]}),(0,r.jsxs)(n.p,{children:["{","8652/0028","}","    -- function \"not\" (Right : Boolean'Base) return Boolean'Base;","\n","\n",(0,r.jsx)(d.A,{children:"11/2"})]}),(0,r.jsx)(h.A,{items:["AI95-00434-01"]}),(0,r.jsxs)(n.p,{children:["-- The integer type root","_","integer and the","\n","   -- corresponding universal type universal","_","integer are predefined.","\n","\n",(0,r.jsx)(d.A,{children:"12"}),"\ntype Integer is range implementation-defined;","\n","\n",(0,r.jsx)(d.A,{children:"13"}),"\nsubtype Natural  is Integer range 0 .. Integer'Last;","\n","   subtype Positive is Integer range 1 .. Integer'Last;","\n","\n",(0,r.jsx)(d.A,{children:"14"}),"\n-- The predefined operators for type Integer are as follows:","\n","\n",(0,r.jsx)(d.A,{children:"15"}),'\n-- function "="  (Left, Right : Integer\'Base) return Boolean;',"\n",'   -- function "/=" (Left, Right : Integer\'Base) return Boolean;',"\n",'   -- function "',"<","\"  (Left, Right : Integer'Base) return Boolean;","\n",'   -- function "',"<","=\" (Left, Right : Integer'Base) return Boolean;","\n",'   -- function "',">","\"  (Left, Right : Integer'Base) return Boolean;","\n",'   -- function "',">","=\" (Left, Right : Integer'Base) return Boolean;","\n","\n",(0,r.jsx)(d.A,{children:"16"}),"\n-- function \"+\"   (Right : Integer'Base) return Integer'Base;","\n","   -- function \"-\"   (Right : Integer'Base) return Integer'Base;","\n","   -- function \"abs\" (Right : Integer'Base) return Integer'Base;","\n","\n",(0,r.jsx)(d.A,{children:"17"}),"\n-- function \"+\"   (Left, Right : Integer'Base) return Integer'Base;","\n","   -- function \"-\"   (Left, Right : Integer'Base) return Integer'Base;","\n",'   -- function "',"*","\"   (Left, Right : Integer'Base) return Integer'Base;","\n","   -- function \"/\"   (Left, Right : Integer'Base) return Integer'Base;","\n","   -- function \"rem\" (Left, Right : Integer'Base) return Integer'Base;","\n","   -- function \"mod\" (Left, Right : Integer'Base) return Integer'Base;","\n","\n",(0,r.jsx)(d.A,{children:"18"}),'\n-- function "',"*","*","\"  (Left : Integer'Base; Right : Natural)","\n","   --                  return Integer'Base;","\n","\n",(0,r.jsx)(d.A,{children:"19"}),"\n-- The specification of each operator for the type","\n","   -- root","_","integer, or for any additional predefined integer","\n","   -- type, is obtained by replacing Integer by the name of the type","\n","   -- in the specification of the corresponding operator of the type","\n","   -- Integer. The right operand of the exponentiation operator","\n","   -- remains as subtype Natural.","\n","\n",(0,r.jsx)(d.A,{children:"20/2"})]}),(0,r.jsx)(h.A,{items:["AI95-00434-01"]}),(0,r.jsxs)(n.p,{children:["-- The floating point type root","_","real and the","\n","   -- corresponding universal type universal","_","real are predefined.","\n","\n",(0,r.jsx)(d.A,{children:"21"}),"\ntype Float is digits implementation-defined;","\n","\n",(0,r.jsx)(d.A,{children:"22"}),"\n-- The predefined operators for this type are as follows:","\n","\n",(0,r.jsx)(d.A,{children:"23"}),'\n-- function "="   (Left, Right : Float) return Boolean;',"\n",'   -- function "/="  (Left, Right : Float) return Boolean;',"\n",'   -- function "',"<",'"   (Left, Right : Float) return Boolean;',"\n",'   -- function "',"<",'="  (Left, Right : Float) return Boolean;',"\n",'   -- function "',">",'"   (Left, Right : Float) return Boolean;',"\n",'   -- function "',">",'="  (Left, Right : Float) return Boolean;',"\n","\n",(0,r.jsx)(d.A,{children:"24"}),'\n-- function "+"   (Right : Float) return Float;',"\n",'   -- function "-"   (Right : Float) return Float;',"\n",'   -- function "abs" (Right : Float) return Float;',"\n","\n",(0,r.jsx)(d.A,{children:"25"}),'\n-- function "+"   (Left, Right : Float) return Float;',"\n",'   -- function "-"   (Left, Right : Float) return Float;',"\n",'   -- function "',"*",'"   (Left, Right : Float) return Float;',"\n",'   -- function "/"   (Left, Right : Float) return Float;',"\n","\n",(0,r.jsx)(d.A,{children:"26"}),'\n-- function "',"*","*","\"  (Left : Float; Right : Integer'Base) return Float;","\n","\n",(0,r.jsx)(d.A,{children:"27"}),"\n-- The specification of each operator for the type root","_","real, or for","\n","   -- any additional predefined floating point type, is obtained by","\n","   -- replacing Float by the name of the type in the specification of the","\n","   -- corresponding operator of the type Float.","\n","\n",(0,r.jsx)(d.A,{children:"28"}),"\n-- In addition, the following operators are predefined for the root","\n","   -- numeric types:","\n","\n",(0,r.jsx)(d.A,{children:"29"}),'\nfunction "',"*",'" (Left : root',"_","integer; Right : root","_","real)","\n","     return root","_","real;","\n","\n",(0,r.jsx)(d.A,{children:"30"}),'\nfunction "',"*",'" (Left : root',"_","real;    Right : root","_","integer)","\n","     return root","_","real;","\n","\n",(0,r.jsx)(d.A,{children:"31"}),'\nfunction "/" (Left : root',"_","real;    Right : root","_","integer)","\n","     return root","_","real;","\n","\n",(0,r.jsx)(d.A,{children:"32"}),"\n-- The type universal","_","fixed is predefined.","\n","   -- The only multiplying operators defined between","\n","   -- fixed point types are","\n","\n",(0,r.jsx)(d.A,{children:"33"}),'\nfunction "',"*",'" (Left : universal',"_","fixed; Right : universal","_","fixed)","\n","     return universal","_","fixed;","\n","\n",(0,r.jsx)(d.A,{children:"34"}),'\nfunction "/" (Left : universal',"_","fixed; Right : universal","_","fixed)","\n","     return universal","_","fixed;","\n","\n",(0,r.jsx)(d.A,{children:"34.1/2"})]}),(0,r.jsx)(h.A,{items:["AI95-00230-01"]}),(0,r.jsxs)(n.p,{children:["-- The type universal","_","access is predefined.","\n","   -- The following equality operators are predefined:","\n","\n",(0,r.jsx)(d.A,{children:"34.2/2"})]}),(0,r.jsx)(h.A,{items:["AI95-00230-01"]}),(0,r.jsxs)(n.p,{children:['function "="  (Left, Right: universal',"_","access) return Boolean;","\n",'   function "/=" (Left, Right: universal',"_","access) return Boolean;","\n","\n",(0,r.jsx)(d.A,{children:"35/3"})]}),(0,r.jsx)(h.A,{items:["AI95-00415-01","AI05-0181-1","AI05-0248-1"]}),(0,r.jsxs)(n.p,{children:["-- The declaration of type Character is based on the standard ISO 8859-1 character set.","\n","\n","      -- There are no character literals corresponding to the positions for control characters.","\n","      -- They are indicated in italics in this definition. See ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.2",children:"3.5.2"}),".","\n","\n","   type Character is","\n","     (nul,\tsoh,\tstx,\tetx,\teot,\tenq,\tack,\tbel,\t--0 (16","#","00","#",") .. 7 (16","#","07","#",")","\n","      bs,\tht,\tlf,\tvt,\tff,\tcr,\tso,\tsi,\t--8 (16","#","08","#",") .. 15 (16","#","0F","#",")","\n","\n","      dle,\tdc1,\tdc2,\tdc3,\tdc4,\tnak,\tsyn,\tetb,\t--16 (16","#","10","#",") .. 23 (16","#","17","#",")","\n","      can,\tem,\tsub,\tesc,\tfs,\tgs,\trs,\tus,\t--24 (16","#","18","#",") .. 31 (16","#","1F","#",")","\n","\n","      ' ',\t'!',\t'\"',\t'","#","',\t'","$","',\t'%',\t'&',\t''',\t--32 (16","#","20","#",") .. 39 (16","#","27","#",")","\n","      '(',\t')',\t'","*","',\t'+',\t',',\t'-',\t'.',\t'/',\t--40 (16","#","28","#",") .. 47 (16","#","2F","#",")","\n","\n","      '0',\t'1',\t'2',\t'3',\t'4',\t'5',\t'6',\t'7',\t--48 (16","#","30","#",") .. 55 (16","#","37","#",")","\n","      '8',\t'9',\t':',\t';',\t'","<","',\t'=',\t'",">","',\t'?',\t--56 (16","#","38","#",") .. 63 (16","#","3F","#",")","\n","\n","      '@',\t'A',\t'B',\t'C',\t'D',\t'E',\t'F',\t'G',\t--64 (16","#","40","#",") .. 71 (16","#","47","#",")","\n","      'H',\t'I',\t'J',\t'K',\t'L',\t'M',\t'N',\t'O',\t--72 (16","#","48","#",") .. 79 (16","#","4F","#",")","\n","\n","      'P',\t'Q',\t'R',\t'S',\t'T',\t'U',\t'V',\t'W',\t--80 (16","#","50","#",") .. 87 (16","#","57","#",")","\n","      'X',\t'Y',\t'Z',\t'[',\t'',\t']',\t'^',\t'","_","',\t--88 (16","#","58","#",") .. 95 (16","#","5F","#",")","\n","\n","      '`',\t'a',\t'b',\t'c',\t'd',\t'e',\t'f',\t'g',\t--96 (16","#","60","#",") .. 103 (16","#","67","#",")","\n","      'h',\t'i',\t'j',\t'k',\t'l',\t'm',\t'n',\t'o',\t--104 (16","#","68","#",") .. 111 (16","#","6F","#",")","\n","\n","      'p',\t'q',\t'r',\t's',\t't',\t'u',\t'v',\t'w',\t--112 (16","#","70","#",") .. 119 (16","#","77","#",")","\n","      'x',\t'y',\t'z',\t'","{","',\t'|',\t'","}","',\t'~',\tdel,\t--120 (16","#","78","#",") .. 127 (16","#","7F","#",")","\n","\n","      reserved","_","128,\treserved","_","129,\tbph,\tnbh,\t\t\t--128 (16","#","80","#",") .. 131 (16","#","83","#",")","\n","      reserved","_","132,\tnel,\tssa,\tesa,\t\t\t\t--132 (16","#","84","#",") .. 135 (16","#","87","#",")","\n","      hts,\thtj,\tvts,\tpld,\tplu,\tri,\tss2,\tss3,\t--136 (16","#","88","#",") .. 143 (16","#","8F","#",")","\n","\n","      dcs,\tpu1,\tpu2,\tsts,\tcch,\tmw,\tspa,\tepa,\t--144 (16","#","90","#",") .. 151 (16","#","97","#",")","\n","      sos,\treserved","_","153,\tsci,\tcsi,\t\t\t\t--152 (16","#","98","#",") .. 155 (16","#","9B","#",")","\n","      st,\tosc,\tpm,\tapc,\t\t\t\t\t--156 (16","#","9C","#",") .. 159 (16","#","9F","#",")","\n","\n","      ' ',\t'\xa1',\t'\xa2',\t'\xa3',\t'\xa4',\t'\xa5',\t'\xa6',\t'\xa7',\t--160 (16","#","A0","#",") .. 167 (16","#","A7","#",")","\n","      '\xa8',\t'\xa9',\t'\xaa',\t'\xab',\t\t\t\t\t--168 (16","#","A8","#",") .. 171 (16","#","AB","#",")","\n","      '\xac',\tsoft","_","hyphen,\t'\xae',\t'\xaf',\t\t\t\t--172 (16","#","AC","#",") .. 175 (16","#","AF","#",")","\n","\n","      '\xb0',\t'\xb1',\t'\xb2',\t'\xb3',\t'\xb4',\t'\xb5',\t'\xb6',\t'\xb7',\t--176 (16","#","B0","#",") .. 183 (16","#","B7","#",")","\n","      '\xb8',\t'\xb9',\t'\xba',\t'\xbb',\t'\xbc',\t'\xbd',\t'\xbe',\t'\xbf',\t--184 (16","#","B8","#",") .. 191 (16","#","BF","#",")","\n","\n","      '\xc0',\t'\xc1',\t'\xc2',\t'\xc3',\t'\xc4',\t'\xc5',\t'\xc6',\t'\xc7',\t--192 (16","#","C0","#",") .. 199 (16","#","C7","#",")","\n","      '\xc8',\t'\xc9',\t'\xca',\t'\xcb',\t'\xcc',\t'\xcd',\t'\xce',\t'\xcf',\t--200 (16","#","C8","#",") .. 207 (16","#","CF","#",")","\n","\n","      '\xd0',\t'\xd1',\t'\xd2',\t'\xd3',\t'\xd4',\t'\xd5',\t'\xd6',\t'\xd7',\t--208 (16","#","D0","#",") .. 215 (16","#","D7","#",")","\n","      '\xd8',\t'\xd9',\t'\xda',\t'\xdb',\t'\xdc',\t'\xdd',\t'\xde',\t'\xdf',\t--216 (16","#","D8","#",") .. 223 (16","#","DF","#",")","\n","\n","      '\xe0',\t'\xe1',\t'\xe2',\t'\xe3',\t'\xe4',\t'\xe5',\t'\xe6',\t'\xe7',\t--224 (16","#","E0","#",") .. 231 (16","#","E7","#",")","\n","      '\xe8',\t'\xe9',\t'\xea',\t'\xeb',\t'\xec',\t'\xed',\t'\xee',\t'\xef',\t--232 (16","#","E8","#",") .. 239 (16","#","EF","#",")","\n","\n","      '\xf0',\t'\xf1',\t'\xf2',\t'\xf3',\t'\xf4',\t'\xf5',\t'\xf6',\t'\xf7',\t--240 (16","#","F0","#",") .. 247 (16","#","F7","#",")","\n","      '\xf8',\t'\xf9',\t'\xfa',\t'\xfb',\t'\xfc',\t'\xfd',\t'\xfe',\t'\xff');--248 (16","#","F8","#",") .. 255 (16","#","FF","#",")","\n","\n",(0,r.jsx)(d.A,{children:"36"}),"\n-- The predefined operators for the type Character are the same as for","\n","   -- any enumeration type.","\n","\n","\n",(0,r.jsx)(d.A,{children:"36.1/5"})]}),(0,r.jsx)(h.A,{items:["AI95-00395-01","AI05-0266-1","AI12-0263-1","AI12-0450-1"]}),(0,r.jsxs)(n.p,{children:["-- The declaration of type Wide","_","Character is based on the standard ISO/IEC 10646:2020 BMP character","\n","   -- set. The first 256 positions have the same contents as type Character. See ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.2",children:"3.5.2"}),".","\n","\n","   type Wide","_","Character is (nul, soh ... Hex","_","0000FFFE, Hex","_","0000FFFF);","\n","\n",(0,r.jsx)(d.A,{children:"36.2/5"})]}),(0,r.jsx)(h.A,{items:["AI95-00285-01","AI95-00395-01","AI05-0266-1","AI12-0263-1","AI12-0450-1"]}),(0,r.jsxs)(n.p,{children:["-- The declaration of type Wide","_","Wide","_","Character is based on the full","\n","   -- ISO/IEC 10646:2020 character set. The first 65536 positions have the","\n","   -- same contents as type Wide","_","Character. See ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.2",children:"3.5.2"}),".","\n","\n","   type Wide","_","Wide","_","Character is (nul, soh ... Hex","_","7FFFFFFE, Hex","_","7FFFFFFF);","\n","   for Wide","_","Wide","_","Character'Size use 32;","\n","\n",(0,r.jsx)(d.A,{children:"36.3/2"}),"\npackage ASCII is ... end ASCII;  --Obsolescent; see ",(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.5",children:"J.5"}),"\n","\n","\n","\n",(0,r.jsx)(d.A,{children:"37/3"})]}),(0,r.jsx)(h.A,{items:["AI05-0229-1"]}),(0,r.jsxs)(n.p,{children:["-- Predefined string types:","\n","\n","   type String is array(Positive range ","<",">",") of Character","\n","      with Pack;","\n","\n",(0,r.jsx)(d.A,{children:"38"}),"\n-- The predefined operators for this type are as follows:","\n","\n",(0,r.jsx)(d.A,{children:"39"}),'\n--     function "="  (Left, Right: String) return Boolean;',"\n",'   --     function "/=" (Left, Right: String) return Boolean;',"\n",'   --     function "',"<",'"  (Left, Right: String) return Boolean;',"\n",'   --     function "',"<",'=" (Left, Right: String) return Boolean;',"\n",'   --     function "',">",'"  (Left, Right: String) return Boolean;',"\n",'   --     function "',">",'=" (Left, Right: String) return Boolean;',"\n","\n",(0,r.jsx)(d.A,{children:"40"}),'\n--     function "&" (Left: String;    Right: String)    return String;',"\n",'   --     function "&" (Left: Character; Right: String)    return String;',"\n",'   --     function "&" (Left: String;    Right: Character) return String;',"\n",'   --     function "&" (Left: Character; Right: Character) return String;',"\n","\n",(0,r.jsx)(d.A,{children:"41/3"})]}),(0,r.jsx)(h.A,{items:["AI05-0229-1"]}),(0,r.jsxs)(n.p,{children:["type Wide","_","String is array(Positive range ","<",">",") of Wide","_","Character","\n","      with Pack;","\n","\n",(0,r.jsx)(d.A,{children:"42"}),"\n-- The predefined operators for this type correspond to those for String.","\n","\n",(0,r.jsx)(d.A,{children:"42.1/3"})]}),(0,r.jsx)(h.A,{items:["AI95-00285-01","AI05-0229-1"]}),(0,r.jsxs)(n.p,{children:["type Wide","_","Wide","_","String is array (Positive range ","<",">",")","\n","      of Wide","_","Wide","_","Character","\n","         with Pack;","\n","\n",(0,r.jsx)(d.A,{children:"42.2/2"})]}),(0,r.jsx)(h.A,{items:["AI95-00285-01"]}),(0,r.jsxs)(n.p,{children:["-- The predefined operators for this type correspond to those for String.","\n","\n",(0,r.jsx)(d.A,{children:"43"}),"\ntype Duration is delta implementation-defined range implementation-defined;","\n","\n",(0,r.jsx)(d.A,{children:"44"}),"\n-- The predefined operators for the type Duration are the same as for","\n","      -- any fixed point type.","\n","\n",(0,r.jsx)(d.A,{children:"45"}),"\n-- The predefined exceptions:","\n","\n",(0,r.jsx)(d.A,{children:"46"}),"\nConstraint","_","Error: exception;","\n","   Program","_","Error   : exception;","\n","   Storage","_","Error   : exception;","\n","   Tasking","_","Error   : exception;","\n","\n",(0,r.jsx)(d.A,{children:"47"}),"\nend Standard;","\n"]})]}),"\n",(0,r.jsx)(d.A,{children:"48"}),"\n",(0,r.jsxs)("p",{children:["Standard has no private part. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"48.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"reason",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"This is important for portability. All library packages are children of Standard, and if Standard had a private part then it would be visible to all of them. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(d.A,{children:"49/2"}),"\n",(0,r.jsx)(h.A,{items:["AI95-00285-01"]}),"\n",(0,r.jsxs)("p",{children:["In each of the types Character, Wide","_","Character, and Wide","_","Wide","_","Character, the character literals for the space character (position 32) and the non-breaking space character (position 160) correspond to different values. Unless indicated otherwise, each occurrence of the character literal ' ' in this Reference Manual refers to the space character. Similarly, the character literals for hyphen (position 45) and soft hyphen (position 173) correspond to different values. Unless indicated otherwise, each occurrence of the character literal '\u2013' in this Reference Manual refers to the hyphen character. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsx)(n.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,r.jsx)(d.A,{children:"50"}),"\n",(0,r.jsxs)("p",{children:["Elaboration of the body of Standard has no effect. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"50.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"Note that the language does not define where this body appears in the environment ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.11#S0086",children:"declarative_part"})})," \u2014 see ",(0,r.jsx)("a",{href:"/docs/arm/AA-10/",children:"10"}),", \u201c",(0,r.jsx)("a",{href:"/docs/arm/AA-10/",children:"Program Structure and Compilation Issues"}),"\u201d. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,r.jsx)(d.A,{children:"51"}),"\n",(0,r.jsxs)("p",{children:["An implementation may provide additional predefined integer types and additional predefined floating point types. Some or all of these types may be anonymous. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"51.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{children:"To be honest: "}),"An implementation may add representation items to package Standard, for example to specify the internal codes of type Boolean, or the Small of type Duration.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(n.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,r.jsx)(d.A,{children:"52"}),"\n",(0,r.jsxs)("p",{children:["If an implementation provides additional named predefined integer types, then the names should end with \u201cInteger\u201d as in \u201cLong","_","Integer\u201d. If an implementation provides additional named predefined floating point types, then the names should end with \u201cFloat\u201d as in \u201cLong","_","Float\u201d. ",(0,r.jsx)("br",{})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"52.a/2"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"implementation-advice",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"If an implementation provides additional named predefined integer types, then the names should end with \u201cInteger\u201d. If an implementation provides additional named predefined floating point types, then the names should end with \u201cFloat\u201d.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"53"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["NOTE 1   Certain aspects of the predefined entities cannot be completely described in the language itself. For example, although the enumeration type Boolean can be written showing the two enumeration literals False and True, the short-circuit control forms cannot be expressed in the language.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"54"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["NOTE 2   As explained in ",(0,r.jsx)("a",{href:"/docs/arm/AA-8/AA-8.1",children:"8.1"}),", \u201c",(0,r.jsx)("a",{href:"/docs/arm/AA-8/AA-8.1",children:"Declarative Region"}),"\u201d and ",(0,r.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#Subclause_10.1.4",children:"10.1.4"}),", \u201c",(0,r.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#Subclause_10.1.4",children:"The Compilation Process"}),"\u201d, the declarative region of the package Standard encloses every library unit and consequently the main subprogram; the declaration of every library unit is assumed to occur within this declarative region. ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0287",children:"Library_item"})}),"s are assumed to be ordered in such a way that there are no forward semantic dependences. However, as explained in ",(0,r.jsx)("a",{href:"/docs/arm/AA-8/AA-8.3",children:"8.3"}),", \u201c",(0,r.jsx)("a",{href:"/docs/arm/AA-8/AA-8.3",children:"Visibility"}),"\u201d, the only library units that are visible within a given compilation unit are the library units named by all ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})}),"s that apply to the given unit, and moreover, within the declarative region of a given library unit, that library unit itself.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"55"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["NOTE 3   If all ",(0,r.jsx)("code",{children:(0,r.jsx)("a",{href:"/docs/arm/AA-5/AA-5.6#S0191",children:"block_statement"})}),"s of a program are named, then the name of each program unit can always be written as an expanded name starting with Standard (unless Standard is itself hidden). The name of a library unit cannot be a homograph of a name (such as Integer) that is already declared in Standard.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["NOTE 4   The exception Standard.Numeric","_","Error is defined in ",(0,r.jsx)("a",{href:"/docs/arm/AA-J/AA-J.6",children:"J.6"}),". ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.a"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),'The declaration of Natural needs to appear between the declaration of Integer and the (implicit) declaration of the "',"*","*",'" operator for Integer, because a formal parameter of "',"*","*","\" is of subtype Natural. This would be impossible in normal code, because the implicit declarations for a type occur immediately after the type declaration, with no possibility of intervening explicit declarations. But we're in Standard, and Standard is somewhat magic anyway.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.b"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:['Using Natural as the subtype of the formal of "',"*","*",'" seems natural; it would be silly to have a textual rule about Constraint',"_","Error being raised when there is a perfectly good subtype that means just that. Furthermore, by not using Integer for that formal, it helps remind the reader that the exponent remains Natural even when the left operand is replaced with the derivative of Integer. It doesn't logically imply that, but it's still useful as a reminder.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.c"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["In any case, declaring these general-purpose subtypes of Integer close to Integer seems more readable than declaring them much later. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(n.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.d"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["Package Standard is declared to be pure. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.e"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"The introduction of the types Wide","_","Character and Wide","_","String is not an Ada 95 extension to Ada 83, since ISO WG9 has approved these as an authorized extension of the original Ada 83 standard that is part of that standard. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(n.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.f"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["Numeric","_","Error is made obsolescent.",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.g"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:['The declarations of Natural and Positive are moved to just after the declaration of Integer, so that "',"*","*","\" can refer to Natural without a forward reference. There's no real need to move Positive, too \u2014 it just came along for the ride. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(n.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.h/2"}),(0,r.jsx)(h.A,{items:["AI95-00285-01"]}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["Types Wide","_","Wide","_","Character and Wide","_","Wide","_","String are new. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.i/2"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"The inconsistencies associated with these types are documented in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5#Subclause_3.5.2",children:"3.5.2"})," and ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.6#Subclause_3.6.3",children:"3.6.3"}),". ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.j/2"}),(0,r.jsx)(h.A,{items:["AI95-00230-01"]}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["Type ",(0,r.jsxs)("em",{children:["universal","_","access"]})," and the equality operations for it are new. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(n.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.k/2"}),(0,r.jsx)(h.A,{items:["AI95-00145-01"]}),(0,r.jsx)(i.A,{type:"aarm",aarm:"note",children:(0,r.jsxs)(n.p,{children:["{",(0,r.jsx)("em",{children:"8652/0028"}),"}"," ",(0,r.jsx)("strong",{children:"Corrigendum:"})," Corrected the parameter type for the Boolean operators declared in Standard. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsx)(s.A,{children:(0,r.jsx)(n.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.l/3"}),(0,r.jsx)(h.A,{items:["AI05-0181-1"]}),(0,r.jsx)(i.A,{type:"aarm",aarm:"correction",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{})," Since soft","_","hyphen (position 173) is defined to be nongraphic, gave it a name. ",(0,r.jsx)("br",{})]})})]}),"\n",(0,r.jsxs)(s.A,{children:[(0,r.jsx)(d.A,{children:"56.m/3"}),(0,r.jsx)(i.A,{type:"aarm",aarm:"discussion",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)("strong",{}),"The inconsistencies associated with this change are documented in ",(0,r.jsx)("a",{href:"/docs/arm/AA-3/AA-3.5",children:"3.5"}),". ",(0,r.jsx)("br",{})]})})]})]})}function u(e={}){const{wrapper:n}={...(0,a.R)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(A,{...e})}):A(e)}}}]);