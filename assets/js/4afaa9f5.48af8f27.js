"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[2340],{50234:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>m,contentTitle:()=>p,default:()=>j,frontMatter:()=>l,metadata:()=>h,toc:()=>x});var a=r(74848),i=r(28453),t=r(13842),s=r(91435),o=r(21432),c=r(79162),d=r(34421);const l={sidebar_position:145},p="B.5 Interfacing with Fortran",h={id:"arm/AA-B/AA-B.5",title:"B.5 Interfacing with Fortran",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-B/AA-B.5.mdx",sourceDirName:"arm/AA-B",slug:"/arm/AA-B/AA-B.5",permalink:"/docs/arm/AA-B/AA-B.5",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:145,frontMatter:{sidebar_position:145},sidebar:"referenceManualSidebar",previous:{title:"B.4 Interfacing with COBOL",permalink:"/docs/arm/AA-B/AA-B.4"},next:{title:"Annex C Systems Programming",permalink:"/docs/arm/AA-C/"}},m={},x=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function A(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,i.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"b5-interfacing-with-fortran",children:"B.5 Interfacing with Fortran"}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,a.jsx)(c.A,{children:"1/3"}),"\n",(0,a.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,a.jsxs)("p",{children:["The facilities relevant to interfacing with the Fortran language are the package Interfaces.Fortran and support for specifying the Convention aspect with ",(0,a.jsxs)("em",{children:["convention","_"]}),(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," Fortran.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(c.A,{children:"2"}),"\n",(0,a.jsxs)("p",{children:["The package Interfaces.Fortran defines Ada types whose representations are identical to the default representations of the Fortran intrinsic types Integer, Real, Double Precision, Complex, Logical, and Character in a supported Fortran implementation. These Ada types can therefore be used to pass objects between Ada and Fortran programs. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,a.jsx)(c.A,{children:"3"}),"\n",(0,a.jsxs)("p",{children:["The library package Interfaces.Fortran has the following declaration: ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(c.A,{children:"4/5"}),"\n",(0,a.jsx)(d.A,{items:["AI12-0414-1"]}),"\n",(0,a.jsxs)(o.A,{language:"ada",children:[(0,a.jsxs)(n.p,{children:["with Ada.Numerics.Generic","_","Complex","_","Types;  -- see ",(0,a.jsx)("a",{href:"/docs/arm/AA-G/AA-G.1#Subclause_G.1.1",children:"G.1.1"}),"\n","pragma Elaborate","_","All(Ada.Numerics.Generic","_","Complex","_","Types);","\n","package Interfaces.Fortran","\n","   with Pure is","\n","\n",(0,a.jsx)(c.A,{children:"5"}),"\ntype Fortran","_","Integer is range implementation-defined;","\n","\n",(0,a.jsx)(c.A,{children:"6"}),"\ntype Real             is digits implementation-defined;","\n","   type Double","_","Precision is digits implementation-defined;","\n","\n",(0,a.jsx)(c.A,{children:"7"}),"\ntype Logical is new Boolean;","\n","\n",(0,a.jsx)(c.A,{children:"8"}),"\npackage Single","_","Precision","_","Complex","_","Types is","\n","      new Ada.Numerics.Generic","_","Complex","_","Types (Real);","\n","\n",(0,a.jsx)(c.A,{children:"9"}),"\ntype Complex is new Single","_","Precision","_","Complex","_","Types.Complex;","\n","\n",(0,a.jsx)(c.A,{children:"10"}),"\nsubtype Imaginary is Single","_","Precision","_","Complex","_","Types.Imaginary;","\n","   i : Imaginary renames Single","_","Precision","_","Complex","_","Types.i;","\n","   j : Imaginary renames Single","_","Precision","_","Complex","_","Types.j;","\n","\n",(0,a.jsx)(c.A,{children:"10.1/5"})]}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsxs)(n.p,{children:["package Double","_","Precision","_","Complex","_","Types is","\n","      new Ada.Numerics.Generic","_","Complex","_","Types (Double","_","Precision);","\n","\n",(0,a.jsx)(c.A,{children:"10.2/5"})]}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsxs)(n.p,{children:["type Double","_","Complex is new Double","_","Precision","_","Complex","_","Types.Complex;","\n","\n",(0,a.jsx)(c.A,{children:"10.3/5"})]}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsxs)(n.p,{children:["subtype Double","_","Imaginary is Double","_","Precision","_","Complex","_","Types.Imaginary;","\n","\n",(0,a.jsx)(c.A,{children:"11"}),"\ntype Character","_","Set is implementation-defined character type;","\n","\n",(0,a.jsx)(c.A,{children:"12/3"})]}),(0,a.jsx)(d.A,{items:["AI05-0229-1"]}),(0,a.jsxs)(n.p,{children:["type Fortran","_","Character is array (Positive range ","<",">",") of Character","_","Set","\n","      with Pack;","\n","\n",(0,a.jsx)(c.A,{children:"13"}),"\nfunction To","_","Fortran (Item : in Character) return Character","_","Set;","\n","   function To","_","Ada (Item : in Character","_","Set) return Character;","\n","\n",(0,a.jsx)(c.A,{children:"14"}),"\nfunction To","_","Fortran (Item : in String) return Fortran","_","Character;","\n","   function To","_","Ada     (Item : in Fortran","_","Character) return String;","\n","\n",(0,a.jsx)(c.A,{children:"15"}),"\nprocedure To","_","Fortran (Item       : in String;","\n","                         Target     : out Fortran","_","Character;","\n","                         Last       : out Natural);","\n","\n",(0,a.jsx)(c.A,{children:"16"}),"\nprocedure To","_","Ada (Item     : in Fortran","_","Character;","\n","                     Target   : out String;","\n","                     Last     : out Natural);","\n","\n",(0,a.jsx)(c.A,{children:"17"}),"\nend Interfaces.Fortran;","\n"]})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{children:"17.a.1/1"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"implementation-defined",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"The types Fortran","_","Integer, Real, Double","_","Precision, and Character","_","Set in Interfaces.Fortran.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{children:"17.a/5"}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"The means by which the Complex and Double","_","Complex types are provided in Interfaces.Fortran creates a dependence of Interfaces.Fortran on Numerics.Generic","_","Complex","_","Types (see ",(0,a.jsx)("a",{href:"/docs/arm/AA-G/AA-G.1#Subclause_G.1.1",children:"G.1.1"}),"). This dependence is intentional and unavoidable, if the Fortran-compatible Complex and Double","_","Complex types are to be useful in Ada code without duplicating facilities defined elsewhere. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(c.A,{children:"18/5"}),"\n",(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),"\n",(0,a.jsxs)("p",{children:["The types Fortran","_","Integer, Real, Double","_","Precision, Logical, Complex, Double","_","Complex, Character","_","Set, and Fortran","_","Character are Fortran-compatible.",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(c.A,{children:"19"}),"\n",(0,a.jsxs)("p",{children:["The To","_","Fortran and To","_","Ada functions map between the Ada type Character and the Fortran type Character","_","Set, and also between the Ada type String and the Fortran type Fortran","_","Character. The To","_","Fortran and To","_","Ada procedures have analogous effects to the string conversion subprograms found in Interfaces.COBOL. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.h4,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,a.jsx)(c.A,{children:"20/3"}),"\n",(0,a.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,a.jsxs)("p",{children:["An implementation shall support specifying aspect Convention with a Fortran ",(0,a.jsx)("em",{children:"convention"}),"_",(0,a.jsx)("code",{children:(0,a.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," for a Fortran-eligible type (see ",(0,a.jsx)("a",{href:"/docs/arm/AA-B/AA-B.1",children:"B.1"}),"). ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(n.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,a.jsx)(c.A,{children:"21/5"}),"\n",(0,a.jsx)(d.A,{items:["AI12-0058-1","AI12-0263-1","AI12-0450-1"]}),"\n",(0,a.jsxs)("p",{children:["An implementation may add additional declarations to the Fortran interface packages. For example, declarations are permitted for the character types corresponding to Fortran character kinds 'ascii' and 'iso","_","10646', which in turn correspond to ISO/IEC 646:1991 and to UCS-4 as specified in ISO/IEC 10646:2020. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{children:"21.a.1/5"}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsx)(t.A,{type:"aarm",aarm:"reason",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"Fortran compilers are required to recognize 'ascii' and 'iso","_","10646' as arguments to the SELECTED","_","CHAR","_","KIND intrinsic function, but are not required to support those kinds. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{children:"21.a/5"}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsx)(t.A,{type:"aarm",aarm:"discussion",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"Implementations may add auxiliary declarations as needed to assist in the declarations of additional Fortran-compatible types. For example,  if a wide character type is defined to match a Fortran 90 wide character type (accessible in Fortran 90 with the Kind attribute), then an auxiliary character set may be declared to serve as its component type. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,a.jsx)(c.A,{children:"22"}),"\n",(0,a.jsxs)("p",{children:["An Ada implementation should support the following interface correspondences between Ada and Fortran: ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(c.A,{children:"23"}),"\n",(0,a.jsxs)("ul",{children:[(0,a.jsxs)("li",{children:["An Ada procedure corresponds to a Fortran subroutine.",(0,a.jsx)("br",{})]}),(0,a.jsx)(c.A,{children:"24"}),(0,a.jsxs)("li",{children:["An Ada function corresponds to a Fortran function.",(0,a.jsx)("br",{})]}),(0,a.jsx)(c.A,{children:"25"}),(0,a.jsxs)("li",{children:["An Ada parameter of an elementary, array, or record type T is passed as a TF argument to a Fortran procedure, where TF is the Fortran type corresponding to the Ada type T, and where the INTENT attribute of the corresponding dummy argument matches the Ada formal parameter mode; the Fortran implementation's parameter passing conventions are used. For elementary types, a local copy is used if necessary to ensure by-copy semantics.",(0,a.jsx)("br",{})]}),(0,a.jsx)(c.A,{children:"26"}),(0,a.jsxs)("li",{children:["An Ada parameter of an access-to-subprogram type is passed as a reference to a Fortran procedure whose interface corresponds to the designated subprogram's specification. ",(0,a.jsx)("br",{})]})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{children:"26.a/2"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"implementation-advice",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"If Fortran interfacing is supported, the interface correspondences between Ada and Fortran should be supported.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{children:"27"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["NOTE 1   An object of a Fortran-compatible record type, declared in a library package or subprogram, can correspond to a Fortran common block; the type also corresponds to a Fortran \u201cderived type\u201d.",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{children:"28/5"}),(0,a.jsx)(d.A,{items:["AI12-0224-1"]}),(0,a.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["NOTE 2   For Fortran facilities not addressed by this subclause, consider using the Fortran to C interoperability features defined in ISO/IEC 1594-1:2018 along with the C interfacing features defined in ",(0,a.jsx)("a",{href:"/docs/arm/AA-B/AA-B.3",children:"B.3"}),".",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(c.A,{children:"29"}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:"Example of Interfaces.Fortran:"})," ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(c.A,{children:"30"}),"\n",(0,a.jsxs)(o.A,{language:"ada",children:[(0,a.jsxs)(n.p,{children:["with Interfaces.Fortran;","\n","use Interfaces.Fortran;","\n","procedure Ada","_","Application is","\n","\n",(0,a.jsx)(c.A,{children:"31/5"})]}),(0,a.jsx)(d.A,{items:["AI05-0229-1","AI12-0178-1"]}),(0,a.jsxs)(n.p,{children:["type Fortran","_","Matrix is ","\n","      array (Fortran","_","Integer range ","<",">",",","\n","             Fortran","_","Integer range ","<",">",") of Double","_","Precision","\n","      with Convention =",">"," Fortran;                  -- stored in Fortran's","\n","                                                   -- column-major order","\n","   procedure Invert (Rank : in Fortran","_","Integer; X : in out Fortran","_","Matrix)","\n","      with Import =",">"," True, Convention =",">"," Fortran; -- a Fortran subroutine","\n","\n",(0,a.jsx)(c.A,{children:"32"}),"\nRank      : constant Fortran","_","Integer := 100;","\n","   My","_","Matrix : Fortran","_","Matrix (1 .. Rank, 1 .. Rank);","\n","\n",(0,a.jsx)(c.A,{children:"33/5"})]}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsxs)(n.p,{children:["Precision: constant := 6;","\n","   type Standard","_","Deviation is digits Precision","\n","      with Convention =",">"," Fortran;","\n","   Deviation : Standard","_","Deviation;","\n","      -- Declarations to match the following Fortran declarations:","\n","      --   integer, parameter :: precision = selected","_","real","_","kind(p=6)","\n","      --   real(precision) :: deviation","\n","\n",(0,a.jsx)(c.A,{children:"34"}),"\nbegin","\n","\n",(0,a.jsx)(c.A,{children:"35"}),"\n...","\n","   My","_","Matrix := ...;","\n","   ...","\n","   Invert (Rank, My","_","Matrix);","\n","   ...","\n","\n",(0,a.jsx)(c.A,{children:"36/5"})]}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsxs)(n.p,{children:["Deviation := ...;","\n","   ...","\n","\n",(0,a.jsx)(c.A,{children:"37"}),"\nend Ada","_","Application;","\n"]})]}),"\n",(0,a.jsx)(s.A,{children:(0,a.jsx)(n.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,a.jsxs)(s.A,{children:[(0,a.jsx)(c.A,{children:"37.a/5"}),(0,a.jsx)(d.A,{items:["AI12-0058-1"]}),(0,a.jsx)(t.A,{type:"aarm",aarm:"correction",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{})," The package Double","_","Precision","_","Complex","_","Types and associated types are added to package Interfaces.Fortran. In unusual circumstances, this could cause an incompatibility; we don't document it as an incompatibility as implementations are allowed to add declarations to this package, so that risk of an incompatibility is present for any move from one version of an implementation to another (not to mention to another implementation). As such, the language-defined additions make no change in the risk of incompatibility. ",(0,a.jsx)("br",{})]})})]})]})}function j(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(A,{...e})}):A(e)}}}]);