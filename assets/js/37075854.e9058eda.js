"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3118],{5798:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>h,contentTitle:()=>c,default:()=>a,frontMatter:()=>l,metadata:()=>r,toc:()=>x});const r=JSON.parse('{"id":"learn/cheat-sheet","title":"Syntax Cheat Sheet","description":"Names used in examples","source":"@site/docs/learn/cheat-sheet.mdx","sourceDirName":"learn","slug":"/learn/cheat-sheet","permalink":"/docs/learn/cheat-sheet","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":6,"frontMatter":{"sidebar_position":6},"sidebar":"tutorialSidebar","previous":{"title":"UTF-8 encoding in GNAT","permalink":"/docs/learn/how-tos/gnat_and_utf_8"},"next":{"title":"Glossary","permalink":"/docs/learn/glossary"}}');var d=s(4848),i=s(8453),t=s(1432);const l={sidebar_position:6},c="Syntax Cheat Sheet",h={},x=[{value:"Names used in examples",id:"names-used-in-examples",level:2},{value:"Overview",id:"overview",level:2},{value:"Program Structure",id:"program-structure",level:2},{value:"Memory",id:"memory",level:2},{value:"Special Notations",id:"special-notations",level:2},{value:"Expressions",id:"expressions",level:2},{value:"Mathematics",id:"mathematics",level:2},{value:"Control Flow",id:"control-flow",level:2},{value:"Boolean Algebra",id:"boolean-algebra",level:2},{value:"Functions and Procedures",id:"functions-and-procedures",level:2},{value:"Types",id:"types",level:2},{value:"Object-Oriented Programming",id:"object-oriented-programming",level:2}];function j(e){const n={h1:"h1",h2:"h2",header:"header",p:"p",...(0,i.R)(),...e.components};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(n.header,{children:(0,d.jsx)(n.h1,{id:"syntax-cheat-sheet",children:"Syntax Cheat Sheet"})}),"\n","\n",(0,d.jsx)(n.h2,{id:"names-used-in-examples",children:"Names used in examples"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:(0,d.jsx)("strong",{children:"Concept"})}),(0,d.jsx)("td",{children:(0,d.jsx)("strong",{children:"Ada"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:" Reference "}),(0,d.jsx)("td",{children:" Access "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:" Pointer "}),(0,d.jsx)("td",{children:" Access All "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:" Namespace "}),(0,d.jsx)("td",{children:" P, Q, R "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:" Class "}),(0,d.jsx)("td",{children:" Capricorn "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Struct "}),(0,d.jsx)("td",{children:" Scorpio "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Type "}),(0,d.jsx)("td",{children:" S, T, V, W "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Variables "}),(0,d.jsx)("td",{children:" A, B, C "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Function "}),(0,d.jsx)("td",{children:" Foo, Bar "})]})]}),"\n",(0,d.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Identifiers "}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:["Can't start with number or underscore, ",(0,d.jsx)("strong",{children:"case insensitive"})]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Keywords "}),(0,d.jsx)("td",{children:"Case insensitive, usually lower case "})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Naming Conventions(s) "}),(0,d.jsx)("td",{children:(0,d.jsxs)(n.p,{children:[(0,d.jsx)("code",{children:"Ada_Case"}),"(types and functions), ",(0,d.jsx)("code",{children:"keywords"})]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Declaration file "}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"FileName.ads"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Definition file "}),(0,d.jsx)("td",{children:(0,d.jsx)("code",{children:"FileName.adb"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Dependency "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"with Package.Child;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Line comment "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"-- line comment"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Block comment "}),(0,d.jsx)("td",{children:(0,d.jsx)("strong",{children:"N/A"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Inline docs "}),(0,d.jsx)("td",{children:" Line comment before or after element "})]})]}),"\n",(0,d.jsx)(n.h2,{id:"program-structure",children:"Program Structure"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Compile-time config"}),(0,d.jsx)("td",{children:(0,d.jsx)("strong",{children:"N/A"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Static assert"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Assert(cond);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Assert(cond, message);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Namespacing"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"package P"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Child Namespaces"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"package P.R"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Namespacing"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"package P"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Namespace aliasing"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"package TIO renames Ada.Text_IO;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Using namespace"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"use Ada.Text_IO;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Using subprograms of type"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"use type T;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Scope resolution"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"P.Q.R"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"private with Q;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"limited with P;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"private package P;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Ensuring module has no state"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"package P with Pure"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"No module initialization required"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Preelaborate(P);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Ensure elaboration immediately after specification"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Elaborate_Body;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Ensure other package is initialized before this one"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Elaborate(P);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Ensure other package and all dependencies are initialized before this one."}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Elaborate_All(P);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Prevent a dependency on another package"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Restrictions(No_Dependencies => Other_Package)"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"memory",children:"Memory"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Pointer "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr : access all T;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Pointer to allocation from a specific pool"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr : access T;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Pointer deference "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr.all"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Reference "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr : not null access T;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Variable used by Pointer "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A: aliased T;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Address "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr : access T := T'Access(A)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Address "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr : access all T := T'Unchecked_Access(A)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Constant pointer "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr : constant access T;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Pointer to constant "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr : access constant T;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Constant pointer to constant "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Ptr : constant access constant T"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Prevents allocations to anonymous access types."}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Restrictions(No_Implicit_Heap_Allocation)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"pragma Restrictions(No_Anonymous_Allocators)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Dynamic allocation "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A : access T := new T;"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"special-notations",children:"Special Notations"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Equality "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A = B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Inequality "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A /= B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Assignment "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A := B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Array Access "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A(i)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Range "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"min .. max"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:'"Box" '}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"<>"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Exponentiation "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Base ** Exponent"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Discrete type "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"(<>)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:'"Tick" '}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"'"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"String Concatenation"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A & B"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"expressions",children:"Expressions"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"qualified expression "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"for all A of B => expr"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"qualified expression "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"for some A of B => expr"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"if expression "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A : Boolean := (if A then B else C);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"case expression "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["A : Integer = (case Value is","\n   ","when 0 => 1,","\n   ","when 1 => 1,","\n   ","when 2\n.. 4 => 5,","\n   ","when 5 | 9 => 10,","\n   ","when others => 0);"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Expression renaming "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"L2 : Float renames V.Length * V.Length;"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"mathematics",children:"Mathematics"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Modify in-place "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A := A + 1;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Modulus "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"mod"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Remainder "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"rem"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Exponentiation "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A ** B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Bit shifting "}),(0,d.jsx)("td",{children:"In standard library "})]})]}),"\n",(0,d.jsx)(n.h2,{id:"control-flow",children:"Control Flow"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"if "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["if A then","\n   ","statements;","\n","elsif B then","\n   ","statements;","\n","else","\n   ","\nstatements;","\n","end if;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"while "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["while A loop","\n    ","statements;","\n","end loop;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"do-while"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["loop","\n","\n","   ","-- statements","\n","\n","   ","exit when A;","\n","end loop;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"value-based loop"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["for Value in 0 .. 99 loop","\n","\n","   ","statements;","\n","end loop;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"iterator-based loop"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["for Elem of Container loop","\n","\n","   ","statements;","\n","end loop;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Multiple choice"}),(0,d.jsx)("td",{children:(0,d.jsxs)(t.A,{children:[(0,d.jsxs)(n.p,{children:["case Value is","\n","\n","   ","when 0 => Handle_Zero;","\n","\n","   ","when 1 => Handle_One;","\n"]}),"   ",(0,d.jsxs)(n.p,{children:["when 2 .. 4 =>","\n","\n","      ","Handle_Range;","\n","\n","   ","when 7 | 9 =>","\n","\n","      ","Handle_Choices;","\n","\n","   ","when others => Handle_Default;","\n","end case;"]})]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Iterate over enum"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["for Elem in EnumName loop","\n   ","statements;","\n","end loop;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Stop iterating"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"exit"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Start exception handling "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["declare","\n   ","statements;","\n","exception","\n   ","when A =>","\n      ","statements;\n","\n   ","when others =>","\n      ","statements;","\n","end;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Empty statement (pass) "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"null;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Label "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"<<LABEL_NAME>>"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"goto "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"goto LABEL_NAME"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"boolean-algebra",children:"Boolean Algebra"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Equality "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A = B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Inequality "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A /= B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Not "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"not A"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Boolean operators "}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"or "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A or B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"and "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A and B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Short circuiting boolean operators "}),(0,d.jsx)("td",{})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"or"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A or else B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"and"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A and then B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Exclusive-Or (XOR) "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A xor B"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Implies (not A, or B) "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"(if A then B)"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"functions-and-procedures",children:"Functions and Procedures"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Procedure"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["procedure Foo(X: in T; Y: in V) is","\n","\n","   ","begin","\n","\n","   ","statements;","\n","\nend Foo;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Function "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["function Fibonacci(X: Natural) return Natural is","\n","\n","   ","if X = 0 or X = 1 then","\n","\n","      ","return X;","\n","\n","   ","else","\n","\n","      ","return Fibonacci(X - 1) + Fibonacci(X - 2);","\n","\n","   ","end if;","\n","\nend Fibonacci;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Subprogram call (no parameters)"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Subprogram call with named Parameters "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Foo(Bar1 => Value, Baz => Value2)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Override specifier "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"overriding procedure Foo(obj : in Object)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Ensure that a subprogram definition does not override an existing one"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"not overriding procedure Foo(obj : in Object)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Pass by pointer"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"procedure Foo (B : in access Bar)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Pass by reference"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"procedure Foo(B : in Bar)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Inline "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"procedure Foo with Inline"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Using functions for a type unqualified.        "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"use type P.Foo;      -- Make primitive ops visible"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"                         "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"use all type P.Foo;  -- Make all ops visible for type"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Modifiable parameters    "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"procedure Foo(B : in out Bar)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Expression function      "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"function Foo return T is (expr)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Empty procedure          "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"procedure Foo is null;"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"types",children:"Types"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Statically sized array "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type Buffer is array(1 .. 128) of Integer;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Array Access "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A(i)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Multi-dimensional Array "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"Mat4 : array (1 .. 4, 1 .. 4) of Float;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Built-In Variable length array"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type Buffer is array(1 .. N) of Integer;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Semantic type "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type Microseconds is new Integer;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Range checks on type "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type My_Positive is range 1 .. 10;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Size "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"T'Size"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Alignment "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"T'Alignment"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Type Aliasing "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"subtype T is W;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Type parameterized by value (run-time)"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type S(T: t) is record -- ..."})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Enum range "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A'Range"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Membership test "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A in E"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A not in E"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Type invariant checks "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type T is new V with Type_Invariant => Expr(T)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Sum types "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type S is (T, V, W);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Coercion (casting) "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A := B(C);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Coercion with constraint check(casting) "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A := B'(C);"})})]})]}),"\n",(0,d.jsx)(n.h2,{id:"object-oriented-programming",children:"Object-Oriented Programming"}),"\n",(0,d.jsxs)("table",{children:[(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Class-like "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type T is private;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Abstract class "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["type T is interface;","\n\n","\nfunction Foo(A : T) return V is abstract;","\n","\nprocedure Bar(A: in out T) is abstract;"]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Subprogram call of object-like type"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A.B;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Subprogram call of object-like type (alternative function-style form)"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"B (A);"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Member access from pointer"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A.all.B; -- Explicit"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"A.B; -- Implicit"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Prevent copying "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type X is limited type;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Inheritance "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type Foo is Bar with null record;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Dynamic dispatch (virtual function call)"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"procedure Foo(A : T'Class)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Prevent implicit cast "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"type T is new W;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Runtime type checking "}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"if A in T then end if;"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Passing parameter by base class"}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:"procedure Foo(A : BaseClass'Class)"})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Array-like indexing of user-defined type."}),(0,d.jsx)("td",{children:(0,d.jsx)(t.A,{children:(0,d.jsxs)(n.p,{children:["type My_Container is tagged type with","\n   ","Constant_Indexing =>Foo","\n   ","\nVariable_Indexing => Bar","\n   ","-- Foo and Bar are functions defined on the type."]})})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Automatic dereference of a handle-type to the handle's contents."}),(0,d.jsx)("td",{children:(0,d.jsxs)(t.A,{children:[(0,d.jsx)(n.p,{children:"type Handle(Target: not null access Element) is with Implicit_Dereference => Element;"}),"\n",(0,d.jsxs)(n.p,{children:["-- Old usage, calling Foo A_Handle.Target.all.Foo","\n","\n-- New usage A_Handle.Foo","\n"]})]})})]}),(0,d.jsxs)("tr",{children:[(0,d.jsx)("td",{children:"Iterator for loops for user-defined types."}),(0,d.jsx)("td",{children:(0,d.jsxs)(t.A,{children:[(0,d.jsx)(n.p,{children:"type My_Container with Default_Iterator => Iterate, Iterator_Element => Element_Type;"}),"\n",(0,d.jsxs)(n.p,{children:["type Cursor;","\n"]}),"\n",(0,d.jsxs)(n.p,{children:["function First (M : in My_Container) return Cursor;","\n","\nprocedure Next (C : in out Cursor);","\n","\nfunction Has_Element (C : in Cursor) return Boolean;","\n"]})]})})]})]})]})}function a(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,d.jsx)(n,{...e,children:(0,d.jsx)(j,{...e})}):j(e)}}}]);