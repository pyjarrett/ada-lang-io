"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7105],{6106:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>m,contentTitle:()=>h,default:()=>u,frontMatter:()=>l,metadata:()=>r,toc:()=>A});const r=JSON.parse('{"id":"arm/AA-12/AA-12.2","title":"12.2 Generic Bodies","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-12/AA-12.2.mdx","sourceDirName":"arm/AA-12","slug":"/arm/AA-12/AA-12.2","permalink":"/docs/arm/AA-12/AA-12.2","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":97,"frontMatter":{"sidebar_position":97},"sidebar":"referenceManualSidebar","previous":{"title":"12.1 Generic Declarations","permalink":"/docs/arm/AA-12/AA-12.1"},"next":{"title":"12.3 Generic Instantiation","permalink":"/docs/arm/AA-12/AA-12.3"}}');var a=i(4848),s=i(8453),t=i(3842),o=i(1435),c=i(1432),d=i(9162);i(4421);const l={sidebar_position:97},h="12.2 Generic Bodies",m={},A=[{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4}];function x(e){const n={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"122-generic-bodies",children:"12.2 Generic Bodies"})}),"\n",(0,a.jsx)(n.admonition,{type:"danger",children:(0,a.jsxs)(n.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.jsx)(n.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,a.jsx)(d.A,{children:"1"}),"\n",(0,a.jsxs)("p",{children:["The body of a generic unit (a ",(0,a.jsx)("em",{children:"generic body"}),") [is a template for the instance bodies. The syntax of a generic body is identical to that of a nongeneric body]. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"1.a"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"ramification",children:(0,a.jsxs)(n.p,{children:[(0,a.jsx)("strong",{}),"We also use terms like \u201cgeneric function body\u201d and \u201cnongeneric package body\u201d. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,a.jsx)(d.A,{children:"2"}),"\n",(0,a.jsxs)("p",{children:["The elaboration of a generic body has no other effect than to establish that the generic unit can from then on be instantiated without failing the Elaboration","_","Check. If the generic body is a child of a generic package, then its elaboration establishes that each corresponding declaration nested in an instance of the parent (see ",(0,a.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#Subclause_10.1.1",children:"10.1.1"}),") can from then on be instantiated without failing the Elaboration","_","Check. ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsxs)(o.A,{children:[(0,a.jsx)(d.A,{children:"3"}),(0,a.jsx)(t.A,{type:"aarm",aarm:"note",children:(0,a.jsxs)(n.p,{children:["NOTE   The syntax of generic subprograms implies that a generic subprogram body is always the completion of a declaration. ",(0,a.jsx)("br",{})]})})]}),"\n",(0,a.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,a.jsx)(d.A,{children:"4"}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:"Example of a generic procedure body:"})," ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(d.A,{children:"5"}),"\n",(0,a.jsx)(c.A,{language:"ada",children:(0,a.jsxs)(n.p,{children:["procedure Exchange(U, V : in out Elem) is  -- see ",(0,a.jsx)("a",{href:"/docs/arm/AA-12/AA-12.1",children:"12.1"}),"\n","   T : Elem;  --  the generic formal type","\n","begin","\n","   T := U;","\n","   U := V;","\n","   V := T;","\n","end Exchange;","\n"]})}),"\n",(0,a.jsx)(d.A,{children:"6"}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:"Example of a generic function body:"})," ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(d.A,{children:"7"}),"\n",(0,a.jsx)(c.A,{language:"ada",children:(0,a.jsxs)(n.p,{children:["function Squaring(X : Item) return Item is  --  see ",(0,a.jsx)("a",{href:"/docs/arm/AA-12/AA-12.1",children:"12.1"}),"\n","begin","\n","   return X","*",'X;  --  the formal operator "',"*",'"',"\n","end Squaring;","\n"]})}),"\n",(0,a.jsx)(d.A,{children:"8"}),"\n",(0,a.jsxs)("p",{children:[(0,a.jsx)("em",{children:"Example of a generic package body:"})," ",(0,a.jsx)("br",{})]}),"\n",(0,a.jsx)(d.A,{children:"9"}),"\n",(0,a.jsx)(c.A,{language:"ada",children:(0,a.jsxs)(n.p,{children:["package body On","_","Vectors is  --  see ",(0,a.jsx)("a",{href:"/docs/arm/AA-12/AA-12.1",children:"12.1"}),"\n","\n",(0,a.jsx)(d.A,{children:"10"}),"\nfunction Sum(A, B : Vector) return Vector is","\n","      Result : Vector(A'Range); --  the formal type Vector","\n","      Bias   : constant Integer := B'First - A'First;","\n","   begin","\n","      if A'Length /= B'Length then","\n","         raise Length","_","Error;","\n","      end if;","\n","\n",(0,a.jsx)(d.A,{children:"11"}),"\nfor N in A'Range loop","\n","         Result(N) := Sum(A(N), B(N + Bias)); -- the formal function Sum","\n","      end loop;","\n","      return Result;","\n","   end Sum;","\n","\n",(0,a.jsx)(d.A,{children:"12"}),"\nfunction Sigma(A : Vector) return Item is","\n","      Total : Item := A(A'First); --  the formal type Item","\n","   begin","\n","      for N in A'First + 1 .. A'Last loop","\n","         Total := Sum(Total, A(N)); --  the formal function Sum","\n","      end loop;","\n","      return Total;","\n","   end Sigma;","\n","end On","_","Vectors;","\n"]})})]})}function u(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(x,{...e})}):x(e)}}}]);