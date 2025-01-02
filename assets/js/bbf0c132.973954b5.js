"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[858],{310:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>r,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>t,toc:()=>d});const t=JSON.parse('{"id":"style-guide/s5/06","title":"5.6 Statements","description":"Careless or convoluted use of statements can make a program hard to read","source":"@site/docs/style-guide/s5/06.mdx","sourceDirName":"style-guide/s5","slug":"/style-guide/s5/06","permalink":"/docs/style-guide/s5/06","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"5.6 Statements"},"sidebar":"styleGuideSidebar","previous":{"title":"5.5 Expressions","permalink":"/docs/style-guide/s5/05"},"next":{"title":"5.7 Visibility","permalink":"/docs/style-guide/s5/07"}}');var s=i(4848),o=i(8453);const a={title:"5.6 Statements"},l=void 0,r={},d=[{value:"Nesting",id:"nesting",level:3},{value:"guideline",id:"guideline",level:4},{value:"instantiation",id:"instantiation",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale",level:4},{value:"notes",id:"notes",level:4},{value:"exceptions",id:"exceptions",level:4},{value:"Slices",id:"slices",level:3},{value:"guideline",id:"guideline-1",level:4},{value:"example",id:"example-1",level:4},{value:"rationale",id:"rationale-1",level:4},{value:"Case Statements",id:"case-statements",level:3},{value:"guideline",id:"guideline-2",level:4},{value:"example",id:"example-2",level:4},{value:"rationale",id:"rationale-2",level:4},{value:"notes",id:"notes-1",level:4},{value:"exceptions",id:"exceptions-1",level:4},{value:"Loops",id:"loops",level:3},{value:"guideline",id:"guideline-3",level:4},{value:"example",id:"example-3",level:4},{value:"rationale",id:"rationale-3",level:4},{value:"Exit Statements",id:"exit-statements",level:3},{value:"guideline",id:"guideline-4",level:4},{value:"example",id:"example-4",level:4},{value:"rationale",id:"rationale-4",level:4},{value:"Recursion and Iteration Bounds",id:"recursion-and-iteration-bounds",level:3},{value:"guideline",id:"guideline-5",level:4},{value:"example",id:"example-5",level:4},{value:"rationale",id:"rationale-5",level:4},{value:"notes",id:"notes-2",level:4},{value:"exceptions",id:"exceptions-2",level:4},{value:"Goto Statements",id:"goto-statements",level:3},{value:"guideline",id:"guideline-6",level:4},{value:"rationale",id:"rationale-6",level:4},{value:"notes",id:"notes-3",level:4},{value:"Return Statements",id:"return-statements",level:3},{value:"guideline",id:"guideline-7",level:4},{value:"example",id:"example-6",level:4},{value:"rationale",id:"rationale-7",level:4},{value:"exceptions",id:"exceptions-3",level:4},{value:"Blocks",id:"blocks",level:3},{value:"guideline",id:"guideline-8",level:4},{value:"example",id:"example-7",level:4},{value:"rationale",id:"rationale-8",level:4},{value:"Aggregates",id:"aggregates",level:3},{value:"guideline",id:"guideline-9",level:4},{value:"example",id:"example-8",level:4},{value:"rationale",id:"rationale-9",level:4}];function c(e){const n={code:"code",em:"em",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,o.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:"Careless or convoluted use of statements can make a program hard to read\nand maintain even if its global structure is well organized. You should\nstrive for simple and consistent use of statements to achieve clarity of\nlocal program structure. Some of the guidelines in this section counsel\nuse or avoidance of particular statements. As pointed out in the\nindividual guidelines, rigid adherence to those guidelines would be\nexcessive, but experience has shown that they generally lead to code\nwith improved reliability and maintainability."}),"\n",(0,s.jsx)(n.h3,{id:"nesting",children:"Nesting"}),"\n",(0,s.jsx)(n.h4,{id:"guideline",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Minimize the depth of nested expressions (Nissen and Wallis 1984 )."}),"\n",(0,s.jsx)(n.li,{children:"Minimize the depth of nested control structures (Nissen and Wallis\n1984 )."}),"\n",(0,s.jsx)(n.li,{children:"Try using simplification heuristics (see the following Notes )."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"instantiation",children:"instantiation"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Do not nest expressions or control structures beyond a nesting level\nof five."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"The following section of code:"}),"\n",(0,s.jsx)(n.p,{children:"if not Condition_1 then\nif Condition_2 then\nAction_A;\nelse  -- not Condition_2\nAction_B;\nend if;\nelse  -- Condition_1\nAction_C;\nend if;"}),"\n",(0,s.jsx)(n.p,{children:"can be rewritten more clearly and with less nesting as:"}),"\n",(0,s.jsx)(n.p,{children:"if Condition_1 then\nAction_C;\nelsif Condition_2 then\nAction_A;\nelse  -- not (Condition_1 or Condition_2)\nAction_B;\nend if;"}),"\n",(0,s.jsx)(n.h4,{id:"rationale",children:"rationale"}),"\n",(0,s.jsxs)(n.p,{children:["Deeply nested structures are confusing, difficult to understand, and\ndifficult to maintain. The problem lies in the difficulty of determining\nwhat part of a program is contained at any given level. For expressions,\nthis is important in achieving the correct placement of balanced\ngrouping symbols and in achieving the desired operator precedence. For\ncontrol structures, the question involves what part is controlled.\nSpecifically, is a given statement at the proper level of nesting, that\nis, is it too deeply or too shallowly nested, or is the given statement\nassociated with the proper choice, for example, for ",(0,s.jsx)(n.code,{children:"if"})," or ",(0,s.jsx)(n.code,{children:"case"}),"\nstatements? Indentation helps, but it is not a panacea. Visually\ninspecting alignment of indented code (mainly intermediate levels) is an\nuncertain job at best. To minimize the complexity of the code, keep the\nmaximum number of nesting levels between three and five."]}),"\n",(0,s.jsx)(n.h4,{id:"notes",children:"notes"}),"\n",(0,s.jsx)(n.p,{children:"Ask yourself the following questions to help you simplify the code:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Can some part of the expression be put into a constant or variable?"}),"\n",(0,s.jsx)(n.li,{children:"Does some part of the lower nested control structures represent a\nsignificant and, perhaps, reusable computation that I can factor\ninto a subprogram ?"}),"\n",(0,s.jsxs)(n.li,{children:["Can I convert these nested ",(0,s.jsx)(n.code,{children:"if"})," statements into a ",(0,s.jsx)(n.code,{children:"case"})," statement?"]}),"\n",(0,s.jsxs)(n.li,{children:["Am I using ",(0,s.jsx)(n.code,{children:"else if"})," where I could be using ",(0,s.jsx)(n.code,{children:"elsif"}),"?"]}),"\n",(0,s.jsx)(n.li,{children:"Can I reorder the conditional expressions controlling this nested\nstructure?"}),"\n",(0,s.jsx)(n.li,{children:"Is there a different design that would be simpler?"}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"exceptions",children:"exceptions"}),"\n",(0,s.jsx)(n.p,{children:"If deep nesting is required frequently, there may be overall design\ndecisions for the code that should be changed. Some algorithms require\ndeeply nested loops and segments controlled by conditional branches.\nTheir continued use can be ascribed to their efficiency, familiarity,\nand time-proven utility. When nesting is required, proceed cautiously\nand take special care with the choice of identifiers and loop and block\nnames."}),"\n",(0,s.jsx)(n.h3,{id:"slices",children:"Slices"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-1",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use slices rather than a loop to copy part of an array."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-1",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"    First  : constant Index := Index'First;\n    Second : constant Index := Index'Succ(First);\n    Third  : constant Index := Index'Succ(Second);\n    type Vector is array (Index range <>) of Element;\n    subtype Column_Vector is Vector (Index);\n    type    Square_Matrix is array  (Index) of Column_Vector;\n    subtype Small_Range  is Index range First .. Third;\n    subtype Diagonals    is Vector (Small_Range);\n    type    Tri_Diagonal is array  (Index) of Diagonals;\n    Markov_Probabilities : Square_Matrix;\n    Diagonal_Data        : Tri_Diagonal;\n    ...\n    -- Remove diagonal and off diagonal elements.\n    Diagonal_Data(Index'First)(First) := Null_Value;\n    Diagonal_Data(Index'First)(Second .. Third) :=\n          Markov_Probabilities(Index'First)(First .. Second);\n    for I in Second .. Index'Pred(Index'Last) loop\n       Diagonal_Data(I) :=\n             Markov_Probabilities(I)(Index'Pred(I) .. Index'Succ(I));\n    end loop;\n    Diagonal_Data(Index'Last)(First .. Second) :=\n          Markov_Probabilities(Index'Last)(Index'Pred(Index'Last) .. Index'Last);\n    Diagonal_Data(Index'Last)(Third) := Null_Value;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rationale-1",children:"rationale"}),"\n",(0,s.jsx)(n.p,{children:"An assignment statement with slices is simpler and clearer than a loop\nand helps the reader see the intended action. See also Guideline 10.5.7\nregarding possible performance issues of slice assignments versus loops."}),"\n",(0,s.jsx)(n.h3,{id:"case-statements",children:"Case Statements"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-2",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Minimize the use of an ",(0,s.jsx)(n.code,{children:"others"})," choice in a ",(0,s.jsx)(n.code,{children:"case"})," statement."]}),"\n",(0,s.jsxs)(n.li,{children:["Do not use ranges of enumeration literals in ",(0,s.jsx)(n.code,{children:"case"})," statements."]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"case"})," statements rather than ",(0,s.jsx)(n.code,{children:"if/elsif"})," statements, wherever\npossible."]}),"\n",(0,s.jsxs)(n.li,{children:["Use type extension and dispatching rather than ",(0,s.jsx)(n.code,{children:"case"})," statements if,\npossible."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-2",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"type Color is (Red, Green, Blue, Purple);\nCar_Color : Color := Red;\n...\ncase Car_Color is\nwhen Red .. Blue => ...\nwhen Purple      => ...\nend case;  -- Car_Color"}),"\n",(0,s.jsx)(n.p,{children:"Now consider a change in the type:"}),"\n",(0,s.jsx)(n.p,{children:"type Color is (Red, Yellow, Green, Blue, Purple);"}),"\n",(0,s.jsxs)(n.p,{children:["This change may have an unnoticed and undesired effect in the ",(0,s.jsx)(n.code,{children:"case"}),"\nstatement. If the choices had been enumerated explicitly, as ",(0,s.jsx)(n.code,{children:"when Red | Green | Blue =>"})," instead of ",(0,s.jsx)(n.code,{children:"when"})," ",(0,s.jsx)(n.code,{children:"Red .. Blue =>"}),", then the ",(0,s.jsx)(n.code,{children:"case"}),"\nstatement would not have compiled. This would have forced the maintainer\nto make a conscious decision about what to do in the case of ",(0,s.jsx)(n.code,{children:"Yellow"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["In the following example, assume that a menu has been posted, and the\nuser is expected to enter one of the four choices. Assume that\n",(0,s.jsx)(n.code,{children:"User_Choice"})," is declared as a ",(0,s.jsx)(n.code,{children:"Character"})," and that ",(0,s.jsx)(n.code,{children:"Terminal_IO.Get"}),"\nhandles errors in user input. The less readable alternative with the\n",(0,s.jsx)(n.code,{children:"if/elsif"})," statement is shown after the ",(0,s.jsx)(n.code,{children:"case"})," statement:"]}),"\n",(0,s.jsx)(n.p,{children:"Do_Menu_Choices_1:\nloop\n..."}),"\n",(0,s.jsx)(n.p,{children:"case User_Choice is\nwhen 'A'    => Item := Terminal_IO.Get (\"Item to add\");\nwhen 'D'    => Item := Terminal_IO.Get (\"Item to delete\");\nwhen 'M'    => Item := Terminal_IO.Get (\"Item to modify\");\nwhen 'Q'    => exit Do_Menu_Choices_1;"}),"\n",(0,s.jsx)(n.p,{children:"when others => -- error has already been signaled to user\nnull;\nend case;\nend loop Do_Menu_Choices_1;"}),"\n",(0,s.jsx)(n.p,{children:"Do_Menu_Choices_2:\nloop\n..."}),"\n",(0,s.jsx)(n.p,{children:"if User_Choice = 'A' then\nItem := Terminal_IO.Get (\"Item to add\");"}),"\n",(0,s.jsx)(n.p,{children:"elsif User_Choice = 'D' then\nItem := Terminal_IO.Get (\"Item to delete\");"}),"\n",(0,s.jsx)(n.p,{children:"elsif User_Choice = 'M' then\nItem := Terminal_IO.Get (\"Item to modify\");"}),"\n",(0,s.jsx)(n.p,{children:"elsif User_Choice = 'Q' then\nexit Do_Menu_Choices_2;"}),"\n",(0,s.jsx)(n.p,{children:"end if;\nend loop Do_Menu_Choices_2;"}),"\n",(0,s.jsx)(n.h4,{id:"rationale-2",children:"rationale"}),"\n",(0,s.jsxs)(n.p,{children:["All possible values for an object should be known and should be assigned\nspecific actions. Use of an ",(0,s.jsx)(n.code,{children:"others"})," clause may prevent the developer\nfrom carefully considering the actions for each value. A compiler warns\nthe user about omitted values if an ",(0,s.jsx)(n.code,{children:"others"})," clause is not used."]}),"\n",(0,s.jsxs)(n.p,{children:["You may not be able to avoid the use of ",(0,s.jsx)(n.code,{children:"others"})," in a ",(0,s.jsx)(n.code,{children:"case"})," statement\nwhen the subtype of the case expression has many values, for example,\n",(0,s.jsx)(n.code,{children:"universal_integer"}),", ",(0,s.jsx)(n.code,{children:"Wide_Character"}),", or ",(0,s.jsx)(n.code,{children:"Character"}),"). If your choice\nof values is small compared to the range of the subtype, you should\nconsider using an ",(0,s.jsx)(n.code,{children:"if/elsif"})," statement. Note that you must supply an\n",(0,s.jsx)(n.code,{children:"others"})," alternative when your ",(0,s.jsx)(n.code,{children:"case"})," expression is of a generic type."]}),"\n",(0,s.jsxs)(n.p,{children:["Each possible value should be explicitly enumerated. Ranges can be\ndangerous because of the possibility that the range could change and the\n",(0,s.jsx)(n.code,{children:"case"})," statement may not be reexamined. If you have declared a subtype\nto correspond to the range of interest, you can consider using this\nnamed subtype."]}),"\n",(0,s.jsxs)(n.p,{children:["In many instances, ",(0,s.jsx)(n.code,{children:"case"})," statements enhance the readability of the\ncode. See Guideline 10.5.3 for a discussion of the performance\nconsiderations. In many implementations, ",(0,s.jsx)(n.code,{children:"case"})," statements may be more\nefficient."]}),"\n",(0,s.jsx)(n.p,{children:"Type extension and dispatching ease the maintenance burden when you add\na new variant to a data structure. See also Guidelines 5.4.2 and 5.4.4 ."}),"\n",(0,s.jsx)(n.h4,{id:"notes-1",children:"notes"}),"\n",(0,s.jsxs)(n.p,{children:["Ranges that are needed in ",(0,s.jsx)(n.code,{children:"case"})," statements can use constrained subtypes\nto enhance maintainability. It is easier to maintain because the\ndeclaration of the range can be placed where it is logically part of the\nabstraction, not buried in a ",(0,s.jsx)(n.code,{children:"case"})," statement in the executable code:"]}),"\n",(0,s.jsx)(n.p,{children:"subtype Lower_Case is Character range 'a' .. 'z';\nsubtype Upper_Case is Character range 'A' .. 'Z';\nsubtype Control    is Character range Ada.Characters.Latin_1.NUL ..\nAda.Characters.Latin_1.US;\nsubtype Numbers    is Character range '0' .. '9';\n...\ncase Input_Char is\nwhen Lower_Case => Capitalize(Input_Char);\nwhen Upper_Case => null;\nwhen Control    => raise Invalid_Input;\nwhen Numbers    => null;\n...\nend case;"}),"\n",(0,s.jsx)(n.h4,{id:"exceptions-1",children:"exceptions"}),"\n",(0,s.jsxs)(n.p,{children:["It is acceptable to use ranges for possible values only when the user is\ncertain that new values will never be inserted among the old ones, as\nfor example, in the range of ASCII characters: ",(0,s.jsx)(n.code,{children:"'a' .. 'z'"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"loops",children:"Loops"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-3",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"for"})," loops, whenever possible."]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"while"})," loops when the number of iterations cannot be calculated\nbefore entering the loop but a simple continuation condition can be\napplied at the top of the loop."]}),"\n",(0,s.jsxs)(n.li,{children:["Use plain loops with ",(0,s.jsx)(n.code,{children:"exit"})," statements for more complex situations."]}),"\n",(0,s.jsxs)(n.li,{children:["Avoid ",(0,s.jsx)(n.code,{children:"exit"})," statements in ",(0,s.jsx)(n.code,{children:"while"})," and ",(0,s.jsx)(n.code,{children:"for"})," loops."]}),"\n",(0,s.jsxs)(n.li,{children:["Minimize the number of ways to ",(0,s.jsx)(n.code,{children:"exit"})," a loop."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-3",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"To iterate over all elements of an array:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"for I in Array_Name'Range loop\n   ...\nend loop;\n"})}),"\n",(0,s.jsx)(n.p,{children:"To iterate over all elements in a linked list:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"Pointer := Head_Of_List;\nwhile Pointer /= null loop\n   ...\n   Pointer := Pointer.Next;\nend loop;\n"})}),"\n",(0,s.jsx)(n.p,{children:'Situations requiring a "loop and a half" arise often. For this, use:'}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"P_And_Q_Processing:\n   loop\n      P;\n      exit P_And_Q_Processing when Condition_Dependent_On_P;\n      Q;\n   end loop P_And_Q_Processing;\n"})}),"\n",(0,s.jsx)(n.p,{children:"rather than:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"P;\nwhile not Condition_Dependent_On_P loop\n   Q;\n   P;\nend loop;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rationale-3",children:"rationale"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"for"}),' loop is bounded, so it cannot be an "infinite loop." This is\nenforced by the Ada language, which requires a finite range in the loop\nspecification and does not allow the loop counter of a ',(0,s.jsx)(n.code,{children:"for"}),"loop to be\nmodified by a statement executed within the loop. This yields a\ncertainty of understanding for the reader and the writer not associated\nwith other forms of loops. A ",(0,s.jsx)(n.code,{children:"for"})," loop is also easier to maintain\nbecause the iteration range can be expressed using attributes of the\ndata structures upon which the loop operates, as shown in the example\nabove where the range changes automatically whenever the declaration of\nthe array is modified. For these reasons, it is best to use the ",(0,s.jsx)(n.code,{children:"for"}),"\nloop whenever possible, that is, whenever simple expressions can be used\nto describe the first and last values of the loop counter."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"while"})," loop has become a very familiar construct to most\nprogrammers. At a glance, it indicates the condition under which the\nloop continues. Use the ",(0,s.jsx)(n.code,{children:"while"})," loop whenever it is not possible to use\nthe ",(0,s.jsx)(n.code,{children:"for"})," loop but when there is a simple Boolean expression describing\nthe conditions under which the loop should continue, as shown in the\nexample above."]}),"\n",(0,s.jsxs)(n.p,{children:["The plain loop statement should be used in more complex situations, even\nif it is possible to contrive a solution using a ",(0,s.jsx)(n.code,{children:"for"})," or ",(0,s.jsx)(n.code,{children:"while"})," loop\nin conjunction with extra flag variables or ",(0,s.jsx)(n.code,{children:"exit"})," statements. The\ncriteria in selecting a loop construct are to be as clear and\nmaintainable as possible. It is a bad idea to use an ",(0,s.jsx)(n.code,{children:"exit"})," statement\nfrom within a ",(0,s.jsx)(n.code,{children:"for"})," or ",(0,s.jsx)(n.code,{children:"while"})," loop because it is misleading to the\nreader after having apparently described the complete set of loop\nconditions at the top of the loop. A reader who encounters a plain loop\nstatement expects to see ",(0,s.jsx)(n.code,{children:"exit"})," statements."]}),"\n",(0,s.jsxs)(n.p,{children:["There are some familiar looping situations that are best achieved with\nthe plain loop statement. For example, the semantics of the Pascal\n",(0,s.jsx)(n.code,{children:"repeat"})," ",(0,s.jsx)(n.code,{children:"until"})," loop, where the loop is always executed at least once\nbefore the termination test occurs, are best achieved by a plain loop\nwith a single ",(0,s.jsx)(n.code,{children:"exit"})," at the end of the loop. Another common situation is\nthe ",(0,s.jsx)(n.em,{children:'"loop and a half" construct, shown in the example above, where a\nloop must terminate somewhere within the sequence of statements of the\nbody. Complicated "loop and a half"'})," constructs simulated with ",(0,s.jsx)(n.code,{children:"while"}),"\nloops often require the introduction of flag variables or duplication of\ncode before and during the loop, as shown in the example. Such\ncontortions make the code more complex and less reliable."]}),"\n",(0,s.jsxs)(n.p,{children:["Minimize the number of ways to ",(0,s.jsx)(n.code,{children:"exit"})," a loop to make the loop more\nunderstandable to the reader. It should be rare that you need more than\ntwo exit paths from a loop. When you do, be sure to use ",(0,s.jsx)(n.code,{children:"exit"}),"\nstatements for all of them, rather than adding an ",(0,s.jsx)(n.code,{children:"exit"})," statement to a\n",(0,s.jsx)(n.code,{children:"for"})," or ",(0,s.jsx)(n.code,{children:"while"})," loop."]}),"\n",(0,s.jsx)(n.h3,{id:"exit-statements",children:"Exit Statements"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-4",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"exit"})," statements to enhance the readability of loop termination\ncode (NASA 1987)."]}),"\n",(0,s.jsxs)(n.li,{children:["Use ",(0,s.jsx)(n.code,{children:"exit when ..."})," rather than",(0,s.jsx)(n.code,{children:"if ... then exit"}),"whenever possible\n(NASA 1987)."]}),"\n",(0,s.jsxs)(n.li,{children:["Review ",(0,s.jsx)(n.code,{children:"exit"})," statement placement."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-4",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"See the examples in Guidelines 5.1.1 and Guidelines 5.6.4."}),"\n",(0,s.jsx)(n.h4,{id:"rationale-4",children:"rationale"}),"\n",(0,s.jsxs)(n.p,{children:["It is more readable to use ",(0,s.jsx)(n.code,{children:"exit"})," statements than to try to add Boolean\nflags to a ",(0,s.jsx)(n.code,{children:"while"})," loop condition to simulate exits from the middle of a\nloop. Even if all ",(0,s.jsx)(n.code,{children:"exit"})," statements would be clustered at the top of the\nloop body, the separation of a complex condition into multiple ",(0,s.jsx)(n.code,{children:"exit"}),"\nstatements can simplify and make it more readable and clear. The\nsequential execution of two ",(0,s.jsx)(n.code,{children:"exit"})," statements is often more clear than\nthe short-circuit control forms."]}),"\n",(0,s.jsxs)(n.p,{children:["The ",(0,s.jsx)(n.code,{children:"exit when"})," form is preferable to the ",(0,s.jsx)(n.code,{children:"if ... then exit"})," form\nbecause it makes the word ",(0,s.jsx)(n.code,{children:"exit"})," more visible by not nesting it inside\nof any control construct. The ",(0,s.jsx)(n.code,{children:"if ... then exit"})," form is needed only in\nthe case where other statements, in addition to the ",(0,s.jsx)(n.code,{children:"exit"})," statement,\nmust be executed conditionally. For example:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"Process_Requests:\n   loop\n      if Status = Done then\n\n         Shut_Down;\n         exit Process_Requests;\n\n      end if;\n\n      ...\n\n   end loop Process_Requests;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Loops with many scattered ",(0,s.jsx)(n.code,{children:"exit"})," statements can indicate fuzzy thinking\nregarding the loop's purpose in the algorithm. Such an algorithm might\nbe coded better some other way, for example, with a series of loops.\nSome rework can often reduce the number of ",(0,s.jsx)(n.code,{children:"exit"})," statements and make\nthe code clearer."]}),"\n",(0,s.jsx)(n.p,{children:"See also Guidelines 5.1.3 and 5.6.4."}),"\n",(0,s.jsx)(n.h3,{id:"recursion-and-iteration-bounds",children:"Recursion and Iteration Bounds"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-5",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Consider specifying bounds on loops ."}),"\n",(0,s.jsx)(n.li,{children:"Consider specifying bounds on recursion ."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-5",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"Establishing an iteration bound:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"Safety_Counter := 0;\nProcess_List:\n   loop\n      exit when Current_Item = null;\n      ...\n      Current_Item := Current_Item.Next;\n      ...\n      Safety_Counter := Safety_Counter + 1;\n      if Safety_Counter > 1_000_000 then\n         raise Safety_Error;\n      end if;\n   end loop Process_List;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Establishing a recursion bound:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"subtype Recursion_Bound is Natural range 0 .. 1_000;\n\nprocedure Depth_First (Root           : in     Tree;\n                       Safety_Counter : in     Recursion_Bound\n                                      := Recursion_Bound'Last) is\nbegin\n   if Root /= null then\n      if Safety_Counter = 0 then\n         raise Recursion_Error;\n      end if;\n      Depth_First (Root           => Root.Left_Branch,\n                   Safety_Counter => Safety_Counter - 1);\n\n      Depth_First (Root           => Root.Right_Branch,\n                   Safety_Counter => Safety_Counter - 1);\n      ... -- normal subprogram body\n   end if;\nend Depth_First;\n"})}),"\n",(0,s.jsx)(n.p,{children:"Following are examples of this subprogram's usage. One call specifies a\nmaximum recursion depth of 50. The second takes the default (1,000). The\nthird uses a computed bound:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"Depth_First(Root => Tree_1, Safety_Counter => 50);\nDepth_First(Tree_2);\nDepth_First(Root => Tree_3, Safety_Counter => Current_Tree_Height);\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rationale-5",children:"rationale"}),"\n",(0,s.jsxs)(n.p,{children:["Recursion, and iteration using structures other than ",(0,s.jsx)(n.code,{children:"for"})," statements,\ncan be infinite because the expected terminating condition does not\narise. Such faults are sometimes quite subtle, may occur rarely, and may\nbe difficult to detect because an external manifestation might be absent\nor substantially delayed."]}),"\n",(0,s.jsx)(n.p,{children:"By including counters and checks on the counter values, in addition to\nthe loops themselves, you can prevent many forms of infinite loops. The\ninclusion of such checks is one aspect of the technique called Safe\nProgramming (Anderson and Witty 1978)."}),"\n",(0,s.jsx)(n.p,{children:'The bounds of these checks do not have to be exact, just realistic. Such\ncounters and checks are not part of the primary control structure of the\nprogram but a benign addition functioning as an execution-time "safety\nnet," allowing error detection and possibly recovery from potential\ninfinite loops or infinite recursion.'}),"\n",(0,s.jsx)(n.h4,{id:"notes-2",children:"notes"}),"\n",(0,s.jsxs)(n.p,{children:["If a loop uses the ",(0,s.jsx)(n.code,{children:"for"})," iteration scheme (Guideline 5.6.4), it follows\nthis guideline."]}),"\n",(0,s.jsx)(n.h4,{id:"exceptions-2",children:"exceptions"}),"\n",(0,s.jsx)(n.p,{children:"Embedded control applications have loops that are intended to be\ninfinite. Only a few loops within such applications should qualify as\nexceptions to this guideline. The exceptions should be deliberate (and\ndocumented ) policy decisions."}),"\n",(0,s.jsx)(n.p,{children:"This guideline is most important to safety critical systems. For other\nsystems, it may be overkill."}),"\n",(0,s.jsx)(n.h3,{id:"goto-statements",children:"Goto Statements"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-6",children:"guideline"}),"\n",(0,s.jsxs)(n.p,{children:["Do not use ",(0,s.jsx)(n.code,{children:"goto"})," statements."]}),"\n",(0,s.jsx)(n.h4,{id:"rationale-6",children:"rationale"}),"\n",(0,s.jsxs)(n.p,{children:["A ",(0,s.jsx)(n.code,{children:"goto"})," statement is an unstructured change in the control flow. Worse,\nthe label does not require an indicator of where the corresponding\n",(0,s.jsx)(n.code,{children:"goto"})," statement(s) are. This makes code unreadable and makes its\ncorrect execution suspect."]}),"\n",(0,s.jsxs)(n.p,{children:["Other languages use ",(0,s.jsx)(n.code,{children:"goto"})," statements to implement loop exits and\nexception handling. Ada's support of these constructs makes the ",(0,s.jsx)(n.code,{children:"goto"}),"\nstatement extremely rare."]}),"\n",(0,s.jsx)(n.h4,{id:"notes-3",children:"notes"}),"\n",(0,s.jsxs)(n.p,{children:["If you should ever use a ",(0,s.jsx)(n.code,{children:"goto"})," statement, highlight both it and the\nlabel with blank space. Indicate at the label where the corresponding\n",(0,s.jsx)(n.code,{children:"goto"})," statement(s) may be found."]}),"\n",(0,s.jsx)(n.h3,{id:"return-statements",children:"Return Statements"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-7",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Minimize the number of ",(0,s.jsx)(n.code,{children:"return"}),"statementsfrom a subprogram (NASA\n1987)."]}),"\n",(0,s.jsxs)(n.li,{children:["Highlight ",(0,s.jsx)(n.code,{children:"return"}),"statements with comments or white space to keep\nthem from being lost in other code."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-6",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"The following code fragment is longer and more complex than necessary:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"if Pointer /= null then\n   if Pointer.Count > 0 then\n      return True;\n   else  -- Pointer.Count = 0\n      return False;\n   end if;\nelse  -- Pointer = null\n   return False;\nend if;\n"})}),"\n",(0,s.jsx)(n.p,{children:"It should be replaced with the shorter, more concise, and clearer\nequivalent line:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"return Pointer /= null and then Pointer.Count > 0;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rationale-7",children:"rationale"}),"\n",(0,s.jsxs)(n.p,{children:["Excessive use of returns can make code confusing and unreadable. Only\nuse ",(0,s.jsx)(n.code,{children:"return"})," statements where warranted. Too many returns from a\nsubprogram may be an indicator of cluttered logic. If the application\nrequires multiple returns, use them at the same level (i.e., as in\ndifferent branches of a ",(0,s.jsx)(n.code,{children:"case"})," statement), rather than scattered\nthroughout the subprogram code. Some rework can often reduce the number\nof ",(0,s.jsx)(n.code,{children:"return"})," statements to one and make the code more clear."]}),"\n",(0,s.jsx)(n.h4,{id:"exceptions-3",children:"exceptions"}),"\n",(0,s.jsxs)(n.p,{children:["Do not avoid ",(0,s.jsx)(n.code,{children:"return"})," statements if it detracts from natural structure\nand code readability."]}),"\n",(0,s.jsx)(n.h3,{id:"blocks",children:"Blocks"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-8",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use blocks to localize the scope of declarations."}),"\n",(0,s.jsx)(n.li,{children:"Use blocks to perform local renaming."}),"\n",(0,s.jsx)(n.li,{children:"Use blocks to define local exception handlers."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-7",children:"example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"with Motion;\nwith Accelerometer_Device;\n...\n\n   ---------------------------------------------------------------------\n   function Maximum_Velocity return Motion.Velocity is\n\n      Cumulative : Motion.Velocity := 0.0;\n\n   begin  -- Maximum_Velocity\n\n      -- Initialize the needed devices\n      ...\n\n      Calculate_Velocity_From_Sample_Data:\n         declare\n            use type Motion.Acceleration;\n\n            Current       : Motion.Acceleration := 0.0;\n            Time_Delta    : Duration;\n\n         begin  -- Calculate_Velocity_From_Sample_Data\n            for I in 1 .. Accelerometer_Device.Sample_Limit loop\n\n               Get_Samples_And_Ignore_Invalid_Data:\n                  begin\n                     Accelerometer_Device.Get_Value(Current, Time_Delta);\n                  exception\n                     when Constraint_Error =>\n                        null; -- Continue trying\n\n                     when Accelerometer_Device.Failure =>\n                        raise Accelerometer_Device_Failed;\n                  end Get_Samples_And_Ignore_Invalid_Data;\n\n               exit when Current <= 0.0; -- Slowing down\n\n               Update_Velocity:\n                  declare\n                     use type Motion.Velocity;\n                     use type Motion.Acceleration;\n\n                  begin\n                     Cumulative := Cumulative + Current * Time_Delta;\n\n                  exception\n                     when Constraint_Error =>\n                        raise Maximum_Velocity_Exceeded;\n                  end Update_Velocity;\n\n            end loop;\n         end Calculate_Velocity_From_Sample_Data;\n\n      return Cumulative;\n\n   end Maximum_Velocity;\n   ---------------------------------------------------------------------\n...\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rationale-8",children:"rationale"}),"\n",(0,s.jsx)(n.p,{children:"Blocks break up large segments of code and isolate details relevant to\neach subsection of code. Variables that are only used in a particular\nsection of code are clearly visible when a declarative block delineates\nthat code."}),"\n",(0,s.jsxs)(n.p,{children:["Renaming may simplify the expression of algorithms and enhance\nreadability for a given section of code. But it is confusing when a\n",(0,s.jsx)(n.code,{children:"renames"})," clause is visually separated from the code to which it\napplies. The declarative region allows the ",(0,s.jsx)(n.code,{children:"renames"})," to be immediately\nvisible when the reader is examining code that uses that abbreviation.\nGuideline 5.7.1 discusses a similar guideline concerning the ",(0,s.jsx)(n.code,{children:"use"}),"\nclause."]}),"\n",(0,s.jsx)(n.p,{children:"Local exception handlers can catch exceptions close to the point of\norigin and allow them to be either handled, propagated, or converted."}),"\n",(0,s.jsx)(n.h3,{id:"aggregates",children:"Aggregates"}),"\n",(0,s.jsx)(n.h4,{id:"guideline-9",children:"guideline"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Use an aggregate instead of a sequence of assignments to assign\nvalues to all components of a record."}),"\n",(0,s.jsx)(n.li,{children:"Use an aggregate instead of a temporary variable when building a\nrecord to pass as an actual parameter."}),"\n",(0,s.jsx)(n.li,{children:"Use positional association only when there is a conventional\nordering of the arguments."}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"example-8",children:"example"}),"\n",(0,s.jsx)(n.p,{children:"It is better to use aggregates:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"Set_Position((X, Y));\nEmployee_Record := (Number     => 42,\n                    Age        => 51,\n                    Department => Software_Engineering);\n"})}),"\n",(0,s.jsx)(n.p,{children:"than to use consecutive assignments or temporary variables:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-ada",children:"Temporary_Position.X := 100;\nTemporary_Position.Y := 200;\nSet_Position(Temporary_Position);\nEmployee_Record.Number     := 42;\nEmployee_Record.Age        := 51;\nEmployee_Record.Department := Software_Engineering;\n"})}),"\n",(0,s.jsx)(n.h4,{id:"rationale-9",children:"rationale"}),"\n",(0,s.jsx)(n.p,{children:"Using aggregates during maintenance is beneficial. If a record structure\nis altered, but the corresponding aggregate is not, the compiler flags\nthe missing field in the aggregate assignment. It would not be able to\ndetect the fact that a new assignment statement should have been added\nto a list of assignment statements."}),"\n",(0,s.jsx)(n.p,{children:"Aggregates can also be a real convenience in combining data items into a\nrecord or array structure required for passing the information as a\nparameter. Named component association makes aggregates more readable."}),"\n",(0,s.jsx)(n.p,{children:"See Guideline 10.4.5 for the performance impact of aggregates."})]})}function h(e={}){const{wrapper:n}={...(0,o.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}}}]);