"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1020],{388:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>c});const i=JSON.parse('{"id":"learn/overview/building-blocks","title":"Building Blocks","description":"Ada often uses different terminology than other languages. This overview avoids","source":"@site/docs/learn/overview/building-blocks.md","sourceDirName":"learn/overview","slug":"/learn/overview/building-blocks","permalink":"/docs/learn/overview/building-blocks","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"The Big Five Structural Elements","permalink":"/docs/learn/overview/five-structural-elements"},"next":{"title":"Advanced Techniques","permalink":"/docs/category/advanced-techniques"}}');var t=a(4848),s=a(8453);const o={sidebar_position:2},r="Building Blocks",d={},c=[{value:"Subprograms (functions and procedures)",id:"subprograms-functions-and-procedures",level:2},{value:"Packages",id:"packages",level:2},{value:"Programs are readable from beginning to end",id:"programs-are-readable-from-beginning-to-end",level:2}];function l(e){const n={code:"code",h1:"h1",h2:"h2",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.header,{children:(0,t.jsx)(n.h1,{id:"building-blocks",children:"Building Blocks"})}),"\n",(0,t.jsx)(n.p,{children:'Ada often uses different terminology than other languages. This overview avoids\nAda jargon, only using "subprogram", which refers to functions and procedures, and\n"procedures" which in most C-like language would be a "function" which returns\nnothing (i.e. void).'}),"\n",(0,t.jsx)(n.h1,{id:"packages-the-building-blocks-of-ada",children:"Packages, the Building Blocks of Ada"}),"\n",(0,t.jsx)(n.p,{children:"Ada descends from Pascal, and yet uses many concepts already familiar to C or\nC++ programmers. If you're a C/C++ programmer, you'll find Ada leverages the\nconcepts you're used to in a more formal and often compiler-checked way."}),"\n",(0,t.jsx)(n.h2,{id:"subprograms-functions-and-procedures",children:"Subprograms (functions and procedures)"}),"\n",(0,t.jsxs)(n.p,{children:['Ada draws a line between functions, which return values, and procedures which\ndo not return a value. Collectively referred to as "subprograms", either of\nthese may have input (',(0,t.jsx)(n.code,{children:"in"}),") and output (",(0,t.jsx)(n.code,{children:"out"}),") parameters, with parameters\nbeing allowed to also be both an input and output (",(0,t.jsx)(n.code,{children:"in out"}),"). ",(0,t.jsx)(n.code,{children:"in"})," is\noptional for functions. Note that parameters are separated by semicolons\n(",(0,t.jsx)(n.code,{children:";"}),"), not by commas (",(0,t.jsx)(n.code,{children:","}),")."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:"procedure Rectangle_Area(Width : in Float; Height : in Float; Area : out Float) is\nbegin\n    Area := Width * Height;\nend Rectangle_Area;\n\nfunction Rectangle_Area(Width : Float; Height : Float) return Float is\nbegin\n    return Width * Height;\nend Rectangle_Area;\n"})}),"\n",(0,t.jsxs)(n.p,{children:["Short functions may be written as expressions bounded by parentheses. ",(0,t.jsx)(n.code,{children:"in"})," is\nalso optional for functions, and parameters with the same type can be grouped."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:"function Add (L, R : Integer) return Float2 is (L + R);\n"})}),"\n",(0,t.jsx)(n.p,{children:"Multiple subprograms can exist with the same name, so the one used is determined\nby the types of the parameters and also the returned type. There are no implicit\nconversions between floating point and integer types, which maximize clarity."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:"function Area (Width, Height : in Float) return Float is (Width * Height);\nfunction Area (Width, Height : in Integer) return Integer is (Width * Height);\n"})}),"\n",(0,t.jsxs)(n.p,{children:["The basic operators can be overloaded as well. Assignment (",(0,t.jsx)(n.code,{children:":="}),") is\nnot considered an operator, and therefore cannot be overloaded."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:'type Float2 is record\n    X: Float\n    Y: Float\nend record;\n\nfunction "+"(L, R : Float2) return Float2 is (L.X + R.X, L.Y + R.Y);\n'})}),"\n",(0,t.jsx)(n.h2,{id:"packages",children:"Packages"}),"\n",(0,t.jsx)(n.p,{children:'As the fundamental building block of Ada, "packages" compose Ada programs,\nnamespaces which exhibit the logical and physical interfaces in a manner\nsimilar to C++ header and source files. Most languages don\'t have a concept\nof "physical interface"--it\'s things the compiler needs to know, but\nare not part of the logical interface of the program, such as\nsize details for structs and classes.'}),"\n",(0,t.jsx)(n.p,{children:'Instead of a header files providing an informal spec and an associated source\nfile being the translation unit, in Ada a package is roughly analogous to a\n"header file," and that package\'s body is the "source file", except as if\neverything in each file is in a namespace given by the file name.'}),"\n",(0,t.jsxs)(n.p,{children:["Top-level package specifications, appear in ",(0,t.jsx)(n.code,{children:"*.ads"}),' (Ada specification) files,\nwith their implementations ("bodies") in ',(0,t.jsx)(n.code,{children:"*.adb"})," (Ada body) files, and only\none top-level package specification or package body per file."]}),"\n",(0,t.jsxs)(n.p,{children:["Ada packages can also be nested and support visibility rules for sharing details\nwith child packages. Child packages are given by dotted names; ",(0,t.jsx)(n.code,{children:"A.B"}),"\nis a child of package ",(0,t.jsx)(n.code,{children:"A"}),"."]}),"\n",(0,t.jsx)(n.p,{children:"Packages can also contain initialization code for the package to run at program\nstartup prior to entering the main procedure, with the ability to describe\ndependencies in package start up order. This solves a specific C++ issue in\nwhich static initialization order is not known, while also offering the ability\nto avoid deferred first-time usage costs, such as with singletons."}),"\n",(0,t.jsxs)(n.p,{children:['Ada uses "aspects" to denote additional properites of packages, subprograms, and\ntypes. Along with aspects, compiler pragmas allows description of initialization\ndependencies, as well as providing high level checks, such as ',(0,t.jsx)(n.code,{children:"pragma Preelaborate"}),"\nto ensure a package has no initialization, or the ",(0,t.jsx)(n.code,{children:"with Pure"})," aspect to ensure\nthat a package has no state and subprograms cannot have side effects."]}),"\n",(0,t.jsx)(n.h2,{id:"programs-are-readable-from-beginning-to-end",children:"Programs are readable from beginning to end"}),"\n",(0,t.jsxs)(n.p,{children:["Program text must be clear without having to read ahead, referred to as:\n",(0,t.jsx)(n.strong,{children:'"Linear elaboration of declarations"'}),". A clear demarcation exists between\ndeclarations of things to exist and executable statements which use those things."]}),"\n",(0,t.jsxs)(n.p,{children:['The simplicity backing this is the ability to make any declaration, including\ntypes, variables, functions/procedures, and packages in any declaration block. This means\nthe basic rule of "declare, then use" repeats itself throughout the language,\nin ',(0,t.jsx)(n.code,{children:"package/package body"}),", ",(0,t.jsx)(n.code,{children:"task/task body"}),", subprograms, and executable blocks of code can have a\n",(0,t.jsx)(n.code,{children:"declare ... begin ... end"})," block."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:'package P is\n    -- Not declaring Foo here is like making the subprogram `static` in C or C++ or\n    -- putting it into an anonymous namespace.\n    procedure Foo;\nend P;\n\npackage body P is\n    -- Declarations for the body of P go here.\n\n    procedure Foo is\n        -- Declarations for Foo can go here.\n\n        -- Declare a subprogram, only visible to Foo, to be used to implement Foo.\n        procedure Bar is\n        begin\n            null; -- "null statement" here since this subprogram actually does nothing.\n                -- and one statement is required.\n        end Bar;\n    begin\n        -- Executable statements go here.\n        Ada.Text_IO.Put_Line("Hello, World!");\n\n        declare\n            -- Declare a package here, inside the subprogram, to show that you can.\n            package Wat is\n                -- Declare a new type, which has the same set of possible values\n                -- as a Float, but is different than a Float.\n                type Capricorn is new Float;\n            end Wat;\n\n            -- A constant created using the package defined inside of Foo.\n            -- Temporary variables can be declared here too.\n            Temp: constant Wat.Capricorn := 0.0;\n        begin\n            -- Print "0.0".\n            -- "Image" is the Ada idiomatic equivalent of toString().\n            -- \' is "tick" and is used to access compiler-defined properties of types.\n            Ada.Text_IO.Put_Line(Wat.Capricorn\'Image(Temp));\n\n            -- Call the helper procedure defined in Foo.\n            -- Procedures and functions without parameters are called\n            -- without parentheses.\n            Bar;\n        end;\n    end Foo;\nbegin\n    -- Static initialization body of P.\nend P;\n'})}),"\n",(0,t.jsxs)(n.p,{children:["This nesting of declarations very verbose. It does however makes it straightforward to\nrefactor out behavior while you're working on a subprogram and then you can extract\nthe newly created components into more appropriate places when you're done.\nThe inability to use statements in declarations causes me to sometimes rewrite\nmy declarations in sequential order of constant processing, and overall makes the\ndeclarations feel like a Haskell ",(0,t.jsx)(n.code,{children:"where"})," clause."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:"function Normalize(F : Float2) return Float2 is\n    L : constant F32 := Length(F);\nbegin\n    return F / L;\nend Normalize;\n"})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:'function Evaluate\n    (Ctx : in out Context; Line : in Ada.Strings.Unbounded.Unbounded_String)\n        return Evaluate_Result is\n    use Ada.Containers;\n    use type Ada.Strings.Unbounded.Unbounded_String;\n    Whitespace     : constant Ada.Strings.Maps.Character_Set := Ada.Strings.Maps.To_Set (" ");\n    Sanitized_Line : constant Ada.Strings.Unbounded.Unbounded_String :=\n                        Ada.Strings.Unbounded.Trim (Line, Whitespace, Whitespace);\n    Words          : String_Vectors.Vector := Split (Sanitized_Line);\n    Command        : constant Ada.Strings.Unbounded.Unbounded_String := (if Words.Length > 0 then Words.First_Element else Ada.Strings.Unbounded.Null_Unbounded_String);\nbegin\n    -- ...\n'})}),"\n",(0,t.jsx)(n.p,{children:'Ada does not provide separate syntactical units for classes, structs and\nnamespaces. Instead, packages contain types, constants and related subprograms.\nA lot of specialized syntax goes away due to\nthis, for example there are no "member functions" and "class functions" and\nhence no specialized syntax for things like member function pointers or class\nfunction pointers exist. Namespacing and overloading on parameters and/or the returned type determine\nthe subprogram called.'}),"\n",(0,t.jsxs)(n.p,{children:['What would be "member functions" in C++ have the "controlling type(s)" as the\nfirst parameter(s). "',(0,t.jsx)(n.code,{children:"const"}),' member functions" pass in the type as an ',(0,t.jsx)(n.code,{children:"in"}),' parameter,\nwhich are immutable. "non-',(0,t.jsx)(n.code,{children:"const"}),' member functions (methods)" pass in the type as an\n',(0,t.jsx)(n.code,{children:"in out"})," parameter, allowing the parameter to be modified. This mirrors\nRust's notation wherein it reflects C++-like ",(0,t.jsx)(n.code,{children:"const"})," behavior of member\nfunctions with ",(0,t.jsx)(n.code,{children:"self"}),", ",(0,t.jsx)(n.code,{children:"&self"}),", and ",(0,t.jsx)(n.code,{children:"&mut self"}),' as a first parameter.\nThese are referred to as "primitive operations."']}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:'-- Box "non-const function"\nprocedure Move(Box : in out AABB2; Direction : Float2) is\nbegin\n    Box.Min := Box.Min + Direction;\n    Box.Max := Box.Max + Direction;\nend Move;\n'})}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-ada",children:'-- Box "const function"\nfunction Midpoint(Box : in AABB2) return Float is\nbegin\n    return (Box.Min + Box.Max) / 2.0;\nend Midpoint;\n'})})]})}function h(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(l,{...e})}):l(e)}}}]);