"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1992],{49229:(e,i,a)=>{a.r(i),a.d(i,{assets:()=>p,contentTitle:()=>h,default:()=>j,frontMatter:()=>l,metadata:()=>x,toc:()=>A});var s=a(74848),r=a(28453),n=a(13842),t=a(91435),o=a(21432),d=a(79162),c=a(34421);const l={sidebar_position:68},h="8.2 Scope of Declarations",x={id:"arm/AA-8/AA-8.2",title:"8.2 Scope of Declarations",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-8/AA-8.2.mdx",sourceDirName:"arm/AA-8",slug:"/arm/AA-8/AA-8.2",permalink:"/docs/arm/AA-8/AA-8.2",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:68,frontMatter:{sidebar_position:68},sidebar:"referenceManualSidebar",previous:{title:"8.1 Declarative Region",permalink:"/docs/arm/AA-8/AA-8.1"},next:{title:"8.3 Visibility",permalink:"/docs/arm/AA-8/AA-8.3"}},p={},A=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function m(e){const i={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(i.h1,{id:"82-scope-of-declarations",children:"8.2 Scope of Declarations"}),"\n",(0,s.jsx)(i.admonition,{type:"danger",children:(0,s.jsxs)(i.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,s.jsx)(i.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,s.jsx)(d.A,{children:"1"}),"\n",(0,s.jsxs)("p",{children:["[For each declaration, the language rules define a certain portion of the program text called the ",(0,s.jsx)("em",{children:"scope"})," of the declaration. The scope of a declaration is also called the scope of any view or entity declared by the declaration. Within the scope of an entity, and only there, there are places where it is legal to refer to the declared entity. These places are defined by the rules of visibility and overloading.] ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(i.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,s.jsx)(d.A,{children:"2"}),"\n",(0,s.jsxs)("p",{children:["The ",(0,s.jsx)("em",{children:"immediate scope"})," of a declaration is a portion of the declarative region immediately enclosing the declaration. The immediate scope starts at the beginning of the declaration, except in the case of an overloadable declaration, in which case the immediate scope starts just after the place where the profile of the callable entity is determined (which is at the end of the ",(0,s.jsxs)("code",{children:["_","specification"]})," for the callable entity, or at the end of the ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-12/AA-12.3#S0315",children:"generic_instantiation"})})," if an instance). The immediate scope extends to the end of the declarative region, with the following exceptions: ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"2.a"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"reason",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The reason for making overloadable declarations with profiles special is to simplify compilation: until the compiler has determined the profile, it doesn't know which other declarations are homographs of this one, so it doesn't know which ones this one should hide. Without this rule, two passes over the ",(0,s.jsxs)("code",{children:["_","specification"]})," or ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-12/AA-12.3#S0315",children:"generic_instantiation"})})," would be required to resolve names that denote things with the same name as this one. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(d.A,{children:"3"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["The immediate scope of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0287",children:"library_item"})})," includes only its semantic dependents. ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"3.a/3"}),(0,s.jsx)(c.A,{items:["AI05-0299-1"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"reason",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Clause ",(0,s.jsx)("a",{href:"/docs/arm/AA-10/",children:"10"})," defines only a partial ordering of ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0287",children:"library_item"})}),"s. Therefore, it is a good idea to restrict the immediate scope (and the scope, defined below) to semantic dependents.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"3.b"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["Consider also examples like this: ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"3.c"}),(0,s.jsx)(o.A,{language:"ada",children:(0,s.jsxs)(i.p,{children:["package P is end P;","\n","\n",(0,s.jsx)(d.A,{children:"3.d"}),"\npackage P.Q is","\n","    I : Integer := 0;","\n","end P.Q;","\n","\n",(0,s.jsx)(d.A,{children:"3.e/1"}),"\nwith P;","\n","package R is","\n","    package X renames P;","\n","    J : Integer := X.Q.I; -- Illegal!","\n","end R;","\n"]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"3.f"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["The scope of P.Q does not contain R. Hence, neither P.Q nor X.Q are visible within R. However, the name R.X.Q would be visible in some other library unit where both R and P.Q are visible (assuming R were made legal by removing the offending declaration). ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"3.g/2"}),(0,s.jsx)(c.A,{items:["AI95-00217-06"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"This rule applies to limited views as well as \u201cnormal\u201d library items. In that case, the semantic dependents are the units that have a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0295",children:"limited_with_clause"})})," for the limited view. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(d.A,{children:"4"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["The immediate scope of a declaration in the private part of a library unit does not include the visible part of any public descendant of that library unit. ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"4.a"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"In other words, a declaration in the private part can be visible within the visible part, private part and body of a private child unit. On the other hand, such a declaration can be visible within only the private part and body of a public child unit. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"4.b"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"reason",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The purpose of this rule is to prevent children from giving private information to clients. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"4.c/2"}),(0,s.jsx)(c.A,{items:["AI95-00231-01"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"For a public child subprogram, this means that the parent's private part is not visible in the profile of the declaration and of the body. This is true even for ",(0,s.jsxs)("code",{children:["subprogram","_","bodies"]})," that are not completions. For a public child generic unit, it means that the parent's private part is not visible in the ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-12/AA-12.1#S0313",children:"generic_formal_part"})}),", as well as in the first list of ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-3/AA-3.11#S0088",children:"basic_declarative_item"})}),"s (for a generic package), or the (syntactic) profile (for a generic subprogram). ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(d.A,{children:"5"}),"\n",(0,s.jsxs)("p",{children:["[The ",(0,s.jsx)("em",{children:"visible part"})," of (a view of) an entity is a portion of the text of its declaration containing declarations that are visible from outside.] The ",(0,s.jsx)("em",{children:"private part"})," of (a view of) an entity that has a visible part contains all declarations within the declaration of (the view of) the entity, except those in the visible part; [these are not visible from outside. Visible and private parts are defined only for these kinds of entities: callable entities, other program units, and composite types.] ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(d.A,{children:"6"}),"\n",(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["The visible part of a view of a callable entity is its profile.",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"7"}),(0,s.jsxs)("li",{children:["The visible part of a composite type other than a task or protected type consists of the declarations of all components declared [(explicitly or implicitly)] within the ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-3/AA-3.2#S0023",children:"type_declaration"})}),".",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"8"}),(0,s.jsxs)("li",{children:["The visible part of a generic unit includes the ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-12/AA-12.1#S0313",children:"generic_formal_part"})}),". For a generic package, it also includes the first list of ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-3/AA-3.11#S0088",children:"basic_declarative_item"})}),"s of the ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-7/AA-7.1#S0230",children:"package_specification"})}),". For a generic subprogram, it also includes the profile. ",(0,s.jsx)("br",{})]})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"8.a"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"reason",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Although there is no way to reference anything but the formals from outside a generic unit, they are still in the visible part in the sense that the corresponding declarations in an instance can be referenced (at least in some cases). In other words, these declarations have an effect on the outside world. The visible part of a generic unit needs to be defined this way in order to properly support the rule that makes a parent's private part invisible within a public child's visible part. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"8.b"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The visible part of an instance of a generic unit is as defined for packages and subprograms; it is not defined in terms of the visible part of a generic unit. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(d.A,{children:"9"}),"\n",(0,s.jsx)("ul",{children:(0,s.jsxs)("li",{children:["[The visible part of a package, task unit, or protected unit consists of declarations in the program unit's declaration other than those following the reserved word ",(0,s.jsx)("strong",{children:"private"}),", if any; see ",(0,s.jsx)("a",{href:"/docs/arm/AA-7/AA-7.1",children:"7.1"})," and ",(0,s.jsx)("a",{href:"/docs/arm/AA-12/AA-12.7",children:"12.7"})," for packages, ",(0,s.jsx)("a",{href:"/docs/arm/AA-9/AA-9.1",children:"9.1"})," for task units, and ",(0,s.jsx)("a",{href:"/docs/arm/AA-9/AA-9.4",children:"9.4"})," for protected units.] ",(0,s.jsx)("br",{})]})}),"\n",(0,s.jsx)(d.A,{children:"10"}),"\n",(0,s.jsxs)("p",{children:["The scope of a declaration always contains the immediate scope of the declaration. In addition, for a given declaration that occurs immediately within the visible part of an outer declaration, or is a public child of an outer declaration, the scope of the given declaration extends to the end of the scope of the outer declaration, except that the scope of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0287",children:"library_item"})})," includes only its semantic dependents. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"10.a"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"Note the recursion. If a declaration appears in the visible part of a library unit, its scope extends to the end of the scope of the library unit, but since that only includes dependents of the declaration of the library unit, the scope of the inner declaration also only includes those dependents. If X renames library package P, which has a child Q, a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})})," mentioning P.Q is necessary to be able to refer to X.Q, even if P.Q is visible at the place where X is declared. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(d.A,{children:"10.1/3"}),"\n",(0,s.jsx)(c.A,{items:["AI95-00408-01","AI05-0183-1"]}),"\n",(0,s.jsxs)("p",{children:["The scope of an ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.3#S0349",children:"attribute_definition_clause"})})," is identical to the scope of a declaration that would occur at the point of the ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.3#S0349",children:"attribute_definition_clause"})}),". The scope of an ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0346",children:"aspect_specification"})})," is identical to the scope of the associated declaration.",(0,s.jsx)("br",{})]}),"\n",(0,s.jsx)(d.A,{children:"11"}),"\n",(0,s.jsxs)("p",{children:["The immediate scope of a declaration is also the immediate scope of the entity or view declared by the declaration. Similarly, the scope of a declaration is also the scope of the entity or view declared by the declaration. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"11.a"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"The rule for immediate scope implies the following: ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"11.b"}),(0,s.jsxs)("ul",{children:[(0,s.jsxs)("li",{children:["If the declaration is that of a library unit, then the immediate scope includes the declarative region of the declaration itself, but not other places, unless they are within the scope of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})})," that mentions the library unit.",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"11.c"}),(0,s.jsxs)("li",{children:["It is necessary to attach the semantics of ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})}),"s to [immediate] scopes (as opposed to visibility), in order for various rules to work properly. A library unit should hide a homographic implicit declaration that appears in its parent, but only within the scope of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})}),' that mentions the library unit. Otherwise, we would violate the "legality determinable via semantic dependences" rule of ',(0,s.jsx)("a",{href:"/docs/arm/AA-10/",children:"10"}),", \u201c",(0,s.jsx)("a",{href:"/docs/arm/AA-10/",children:"Program Structure and Compilation Issues"}),"\u201d. The declaration of a library unit should be allowed to be a homograph of an explicit declaration in its parent's body, so long as that body does not mention the library unit in a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})}),".",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"11.d"}),(0,s.jsxs)("li",{children:["This means that one cannot denote the declaration of the library unit, but one might still be able to denote the library unit via another view.",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"11.e"}),(0,s.jsxs)("li",{children:["A ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})})," does not make the declaration of a library unit visible; the lack of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})})," prevents it from being visible. Even if a library unit is mentioned in a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})}),", its declaration can still be hidden.",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"11.f"}),(0,s.jsxs)("li",{children:["The completion of the declaration of a library unit (assuming that's also a declaration) is not visible, neither directly nor by selection, outside that completion.",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"11.g"}),(0,s.jsxs)("li",{children:["The immediate scope of a declaration immediately within the body of a library unit does not include any child of that library unit.",(0,s.jsx)("br",{})]}),(0,s.jsx)(d.A,{children:"11.h"}),(0,s.jsxs)("li",{children:["This is needed to prevent children from looking inside their parent's body. The children are in the declarative region of the parent, and they might be after the parent's body. Therefore, the scope of a declaration that occurs immediately within the body might include some children. ",(0,s.jsx)("br",{})]})]})]}),"\n",(0,s.jsx)(d.A,{children:"12/4"}),"\n",(0,s.jsx)(c.A,{items:["AI12-0003-1"]}),"\n",(0,s.jsxs)("p",{children:["The immediate scope of a pragma that is not used as a configuration pragma is defined to be the region extending from immediately after the pragma to the end of the declarative region immediately enclosing the pragma. ",(0,s.jsx)("br",{})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13/3"}),(0,s.jsx)(c.A,{items:["AI05-0299-1"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["NOTE   There are notations for denoting visible declarations that are not directly visible. For example, ",(0,s.jsx)("code",{children:(0,s.jsxs)("a",{href:"/docs/arm/AA-6/AA-6.1#S0207",children:["parameter","_","specification"]})}),"s are in the visible part of a ",(0,s.jsx)("code",{children:(0,s.jsxs)("a",{href:"/docs/arm/AA-6/AA-6.1#S0195",children:["subprogram","_","declaration"]})})," so that they can be used in named-notation calls appearing outside the called subprogram. For another example, declarations of the visible part of a package can be denoted by expanded names appearing outside the package, and can be made directly visible by a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-8/AA-8.4#S0235",children:"use_clause"})}),". ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.a/2"}),(0,s.jsx)(c.A,{items:["AI95-00114-01"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"ramification",children:(0,s.jsxs)(i.p,{children:[(0,s.jsx)("strong",{}),"There are some obscure cases involving generics in which there is no such notation. See Clause ",(0,s.jsx)("a",{href:"/docs/arm/AA-12/",children:"12"}),". ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(t.A,{children:(0,s.jsx)(i.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.b"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["The fact that the immediate scope of an overloadable declaration does not include its profile is new to Ada 95. It replaces RM83-8.3(16), which said that within a subprogram specification and within the formal part of an entry declaration or accept statement, all declarations with the same designator as the subprogram or entry were hidden from all visibility. The RM83-8.3(16) rule seemed to be overkill, and created both implementation difficulties and unnecessary semantic complexity. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(t.A,{children:(0,s.jsx)(i.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.c"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["We no longer need to talk about the scope of notations, ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s, ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.5#S0015",children:"character_literal"})}),"s, and ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-6/AA-6.1#S0202",children:"operator_symbol"})}),"s.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.d/3"}),(0,s.jsx)(c.A,{items:["AI05-0299-1"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:['The notion of "visible part" has been extended in Ada 95. The syntax of task and protected units now allows private parts, thus requiring us to be able to talk about the visible part as well. It was necessary to extend the concept to subprograms and to generic units, in order for the visibility rules related to child library units to work properly. It was necessary to define the concept separately for generic formal packages, since their visible part is slightly different from that of a normal package. Extending the concept to composite types made the definition of scope slightly simpler. We define visible part for some things elsewhere, since it makes a big difference to the user for those things. For composite types and subprograms, however, the concept is used only in arcane visibility rules, so we localize it to this subclause.',(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.e"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["In Ada 83, the semantics of ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})}),"s was described in terms of visibility. It is now described in terms of [immediate] scope.",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.f"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["We have clarified that the following is illegal (where Q and R are library units): ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.g"}),(0,s.jsx)(o.A,{language:"ada",children:(0,s.jsxs)(i.p,{children:["package Q is","\n","    I : Integer := 0;","\n","end Q;","\n","\n",(0,s.jsx)(d.A,{children:"13.h"}),"\npackage R is","\n","    package X renames Standard;","\n","    X.Q.I := 17; -- Illegal!","\n","end R;","\n"]})})]}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.i"}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["even though Q is declared in the declarative region of Standard, because R does not mention Q in a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})}),". ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(t.A,{children:(0,s.jsx)(i.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.j/2"}),(0,s.jsx)(c.A,{items:["AI95-00408-01"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["The scope of an ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.3#S0349",children:"attribute_definition_clause"})})," is defined so that it can be used to define the visibility of such a clause, so ",(0,s.jsx)("em",{children:"that"})," can be used by the stream attribute availability rules (see ",(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.13#Subclause_13.13.2",children:"13.13.2"}),"). ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(t.A,{children:(0,s.jsx)(i.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.k/3"}),(0,s.jsx)(c.A,{items:["AI05-0183-1"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["The scope of an ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1#S0346",children:"aspect_specification"})})," is defined for similar reasons that it was defined for ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-13/AA-13.3#S0349",children:"attribute_definition_clause"})}),"s. ",(0,s.jsx)("br",{})]})})]}),"\n",(0,s.jsx)(t.A,{children:(0,s.jsx)(i.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,s.jsxs)(t.A,{children:[(0,s.jsx)(d.A,{children:"13.l/4"}),(0,s.jsx)(c.A,{items:["AI12-0003-1"]}),(0,s.jsx)(n.A,{type:"aarm",aarm:"note",children:(0,s.jsxs)(i.p,{children:["The immediate scope of a ",(0,s.jsx)("code",{children:(0,s.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," is defined as it is used in other rules in the Reference Manual. ",(0,s.jsx)("br",{})]})})]})]})}function j(e={}){const{wrapper:i}={...(0,r.R)(),...e.components};return i?(0,s.jsx)(i,{...e,children:(0,s.jsx)(m,{...e})}):m(e)}}}]);