"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8373],{4612:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>b,contentTitle:()=>y,default:()=>S,frontMatter:()=>f,metadata:()=>x,toc:()=>T});var a=n(1716),l=n(3050),r=n(3989),o=n(8604),i=n(7318),s=n(4768),d=Object.defineProperty,k=Object.defineProperties,A=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?d(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,h=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(c)for(var n of c(t))m.call(t,n)&&p(e,n,t[n]);return e};const f={sidebar_position:47},y="5.6 Block Statements",x={unversionedId:"arm/AA-5/AA-5.6",id:"arm/AA-5/AA-5.6",title:"5.6 Block Statements",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-5/AA-5.6.mdx",sourceDirName:"arm/AA-5",slug:"/arm/AA-5/AA-5.6",permalink:"/docs/arm/AA-5/AA-5.6",draft:!1,tags:[],version:"current",sidebarPosition:47,frontMatter:{sidebar_position:47},sidebar:"referenceManualSidebar",previous:{title:"5.5 Loop Statements",permalink:"/docs/arm/AA-5/AA-5.5"},next:{title:"5.7 Exit Statements",permalink:"/docs/arm/AA-5/AA-5.7"}},b={},T=[{value:"Syntax",id:"syntax",level:4},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Examples",id:"examples",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"5.6.1  Parallel Block Statements",id:"561--parallel-block-statements",level:2},{value:"Syntax",id:"syntax-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Examples",id:"examples-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],g={toc:T};function S(e){var t,n=e,{components:d}=n,p=((e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&c)for(var a of c(e))t.indexOf(a)<0&&m.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=h(h({},g),p),k(t,A({components:d,mdxType:"MDXLayout"}))),(0,a.kt)("h1",h({},{id:"56-block-statements"}),"5.6 Block Statements"),(0,a.kt)("admonition",h({},{type:"warning"}),(0,a.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,a.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,a.kt)(i.Z,{mdxType:"MarginText"},"1"),(0,a.kt)("p",null,"[A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," encloses a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements"))," optionally preceded by a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),".] ",(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"syntax"}),"Syntax"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"2"),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"block_statement"),(0,a.kt)("a",{id:"S0191"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"   [",(0,a.kt)("em",null,"block_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),":]",(0,a.kt)("br",null),"       [",(0,a.kt)("strong",null,"declare"),(0,a.kt)("br",null),"            ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),"]",(0,a.kt)("br",null),"        ",(0,a.kt)("strong",null,"begin"),(0,a.kt)("br",null),"            ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements")),(0,a.kt)("br",null),"        ",(0,a.kt)("strong",null,"end")," [",(0,a.kt)("em",null,"block_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier")),"];",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"3"),(0,a.kt)("p",null,"If a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," has a ",(0,a.kt)("em",null,"block_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0172"},"statement_identifier")),", then the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," shall be repeated after the ",(0,a.kt)("strong",null,"end"),"; otherwise, there shall not be an ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-2/AA-2.3#S0002"},"identifier"))," after the ",(0,a.kt)("strong",null,"end"),". ",(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"static-semantics"}),"Static Semantics"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"4"),(0,a.kt)("p",null,"A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," that has no explicit ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," has an implicit empty ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part")),". ",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"4.a"),(0,a.kt)(l.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"Thus, other rules can always refer to the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),". ",(0,a.kt)("br",null))),(0,a.kt)("h4",h({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"5"),(0,a.kt)("p",null,"The execution of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," consists of the elaboration of its ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-3/AA-3.11#S0086"},"declarative_part"))," followed by the execution of its ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements")),". ",(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"examples"}),"Examples"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"6"),(0,a.kt)("p",null,(0,a.kt)("em",null,"Example of a block statement with a local variable:")," ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"7"),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"Swap:","\n","   declare","\n","      Temp : Integer;","\n","   begin","\n","      Temp := V; V := U; U := Temp;","\n","   end Swap;","\n"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"7.a"),(0,a.kt)(l.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,a.kt)("strong",null),"If task objects are declared within a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," whose execution is completed, the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," is not left until all its dependent tasks are terminated (see ",(0,a.kt)("a",{href:"../AA-7/AA-7.6"},"7.6"),"). This rule applies to completion caused by a transfer of control.",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"7.b"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Within a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement")),", the block name can be used in expanded names denoting local entities such as Swap.Temp in the above example (see ",(0,a.kt)("a",{href:"../AA-4/AA-4.1#Subclause_4.1.3"},"4.1.3"),"). ",(0,a.kt)("br",null))),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"wording-changes-from-ada-83"}),"Wording Changes from Ada 83")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"7.c"),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The syntax rule for ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0191"},"block_statement"))," now uses the syntactic category ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-11/AA-11.2#S0304"},"handled_sequence_of_statements")),". ",(0,a.kt)("br",null))),(0,a.kt)("a",{id:"Subclause_5.6.1"}),(0,a.kt)("h2",h({},{id:"561--parallel-block-statements"}),"5.6.1  Parallel Block Statements"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"1/5"),(0,a.kt)(s.Z,{items:["AI12-0119-1","AI12-0436-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"[A ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement"))," comprises two or more ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," separated by ",(0,a.kt)("strong",null,"and")," where each represents an independent activity that is intended to proceed concurrently with the others.]",(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"syntax-1"}),"Syntax"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"2/5"),(0,a.kt)(s.Z,{items:["AI12-0119-1","AI12-0427-1","AI12-0436-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{mdxType:"CodeBlock"},(0,a.kt)("code",null,"parallel_block_statement"),(0,a.kt)("a",{id:"S0192"}),(0,a.kt)("code",null," ::= "),(0,a.kt)("br",null),"    ",(0,a.kt)("strong",null,"parallel")," [(",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0180"},"chunk_specification")),")] [",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),"] ",(0,a.kt)("strong",null,"do"),(0,a.kt)("br",null),"       ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),(0,a.kt)("br",null),"    ",(0,a.kt)("strong",null,"and"),(0,a.kt)("br",null),"       ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),(0,a.kt)("br",null),"   ","{",(0,a.kt)("strong",null,"and"),(0,a.kt)("br",null),"       ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements")),"}",(0,a.kt)("br",null),"    ",(0,a.kt)("strong",null,"end do"),";",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"3/5"),(0,a.kt)(s.Z,{items:["AI12-0427-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0180"},"chunk_specification")),", if any, of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement"))," shall be an ",(0,a.kt)("em",null,"integer_"),(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-4/AA-4.4#S0138"},"simple_expression")),". ",(0,a.kt)("br",null)),(0,a.kt)("h4",h({},{id:"dynamic-semantics-1"}),"Dynamic Semantics"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"4/5"),(0,a.kt)(s.Z,{items:["AI12-0119-1","AI12-0427-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"For the execution of a ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement")),", the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0180"},"chunk_specification"))," and the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-13/AA-13.1#S0346"},"aspect_specification")),", if any, are elaborated in an arbitrary order. After elaborating the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0180"},"chunk_specification")),", if any, a check is made that the determined maximum number of chunks is greater than zero. If this check fails, Program_Error is raised. ",(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"5/5"),(0,a.kt)(s.Z,{items:["AI12-0119-1","AI12-0427-1","AI12-0436-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,"Then, the various ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," are grouped into one or more ",(0,a.kt)("em",null,"chunks"),", each with its own logical thread of control (see clause ",(0,a.kt)("a",{href:"../AA-9/"},"9"),"), up to the maximum number of chunks specified by the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.5#S0180"},"chunk_specification")),", if any. Within each chunk every ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of the chunk is executed in turn, in an arbitrary order. The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement"))," is complete once every one of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," has completed, either by reaching the end of its execution, or due to a transfer of control out of the construct by one of the ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," (see ",(0,a.kt)("a",{href:"../AA-5/AA-5.1"},"5.1"),").",(0,a.kt)("br",null)),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"5.a/5"),(0,a.kt)(s.Z,{items:["AI12-0119-1","AI12-0436-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,a.kt)("strong",null),"Although each ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.1#S0166"},"sequence_of_statements"))," of a parallel block represents a separate logical thread of control, the implementation may choose to combine two or more such logical threads of control into a single physical thread of control to reduce the cost of creating numerous physical threads of control. ",(0,a.kt)("br",null))),(0,a.kt)("h4",h({},{id:"examples-1"}),"Examples"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"6/5"),(0,a.kt)(s.Z,{items:["AI12-0429-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,(0,a.kt)("em",null,"Example of a parallel block used to walk a binary tree in parallel:"),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"7/5"),(0,a.kt)(s.Z,{items:["AI12-0119-1","AI12-0404-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"procedure Traverse (T : Expr_Ptr) is -- see ",(0,a.kt)("a",{href:"../AA-3/AA-3.9#Subclause_3.9.1"},"3.9.1"),"\n","begin","\n","   if T /= null and then","\n","      T.all in Binary_Operation'Class -- see ",(0,a.kt)("a",{href:"../AA-3/AA-3.9#Subclause_3.9.1"},"3.9.1"),"\n","   then -- recurse down the binary tree","\n","      parallel do","\n","         Traverse (T.Left);","\n","      and","\n","         Traverse (T.Right);","\n","      and","\n","         Ada.Text_IO.Put_Line","\n",'            ("Processing " & Ada.Tags.Expanded_Name (T\'Tag));',"\n","      end do;","\n","   end if;","\n","end Traverse;","\n"),(0,a.kt)(i.Z,{mdxType:"MarginText"},"8/5"),(0,a.kt)(s.Z,{items:["AI12-0429-1"],mdxType:"MarginInfo"}),(0,a.kt)("p",null,(0,a.kt)("em",null,"Example of a parallel block used to search two halves of a string in parallel:"),(0,a.kt)("br",null)),(0,a.kt)(i.Z,{mdxType:"MarginText"},"9/5"),(0,a.kt)(s.Z,{items:["AI12-0119-1"],mdxType:"MarginInfo"}),(0,a.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"function Search (S : String; Char : Character) return Boolean is","\n","begin","\n","   if S'Length ","<","= 1000 then","\n","       -- Sequential scan","\n","       return (for some C of S =",">"," C = Char);","\n","   else","\n","       -- Parallel divide and conquer","\n","       declare","\n","          Mid : constant Positive := S'First + S'Length/2 - 1;","\n","       begin","\n","          parallel do","\n","             for C of S(S'First .. Mid) loop","\n","                if C = Char then","\n","                   return True;  -- Terminates enclosing do","\n","                end if;","\n","             end loop;","\n","          and","\n","             for C of S(Mid + 1 .. S'Last) loop","\n","                if C = Char then","\n","                   return True;  -- Terminates enclosing do","\n","                end if;","\n","             end loop;","\n","          end do;","\n","          -- Not found","\n","          return False;","\n","       end;","\n","   end if;","\n","end Search;","\n"),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)("h4",h({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012")),(0,a.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,a.kt)(i.Z,{mdxType:"MarginText"},"9.a/5"),(0,a.kt)(s.Z,{items:["AI12-0119-1","AI12-0427-1","AI12-0436-1"],mdxType:"MarginInfo"}),(0,a.kt)(l.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The ",(0,a.kt)("code",null,(0,a.kt)("a",{href:"../AA-5/AA-5.6#S0192"},"parallel_block_statement"))," is new. ",(0,a.kt)("br",null))))}S.isMDXComponent=!0}}]);