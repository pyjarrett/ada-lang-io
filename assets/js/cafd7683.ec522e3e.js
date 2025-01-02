"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1217],{4908:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"style-guide/s9/03","title":"9.3 Tagged Type Operations","description":"You can use three options when you define the operations on a tagged","source":"@site/docs/style-guide/s9/03.mdx","sourceDirName":"style-guide/s9","slug":"/style-guide/s9/03","permalink":"/docs/style-guide/s9/03","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"9.3 Tagged Type Operations"},"sidebar":"styleGuideSidebar","previous":{"title":"9.2 Tagged Type Hierarchies","permalink":"/docs/style-guide/s9/02"},"next":{"title":"9.4 Managing Visibility","permalink":"/docs/style-guide/s9/04"}}');var a=t(4848),r=t(8453);const o={title:"9.3 Tagged Type Operations"},s=void 0,c={},d=[{value:"Primitive Operations and Redispatching",id:"primitive-operations-and-redispatching",level:3},{value:"guideline",id:"guideline",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale",level:4},{value:"Class-Wide Operations",id:"class-wide-operations",level:3},{value:"guideline",id:"guideline-1",level:4},{value:"example",id:"example-1",level:4},{value:"rationale",id:"rationale-1",level:4},{value:"Constructors",id:"constructors",level:3},{value:"guideline",id:"guideline-2",level:4},{value:"example",id:"example-2",level:4},{value:"rationale",id:"rationale-2",level:4},{value:"notes",id:"notes",level:4},{value:"Equality",id:"equality",level:3},{value:"guideline",id:"guideline-3",level:4},{value:"example",id:"example-3",level:4},{value:"rationale",id:"rationale-3",level:4},{value:"Polymorphism",id:"polymorphism",level:3},{value:"guideline",id:"guideline-4",level:4},{value:"example",id:"example-4",level:4},{value:"rationale",id:"rationale-4",level:4}];function l(e){const n={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"You can use three options when you define the operations on a tagged\ntype and its descendants. These categories are primitive abstract,\nprimitive nonabstract, and class-wide operations. An abstract operation\nmust be overridden for a nonabstract derived type. A nonabstract\noperation may be redefined for a subclass. A class-wide operation cannot\nbe overridden by a subclass definition. A class-wide operation can be\nredefined for the derivation class rooted in the derived type; however,\nthis practice is discouraged because of the ambiguities it introduces in\nthe code. Through careful usage of these options, you can ensure that\nyour abstractions preserve class-wide properties, as discussed in\nGuideline 9.2.1. As stated above, this principle requires that any type\nthat is visibly derived from some parent type must fully support the\nsemantics of the parent type."}),"\n",(0,a.jsx)(n.h3,{id:"primitive-operations-and-redispatching",children:"Primitive Operations and Redispatching"}),"\n",(0,a.jsx)(n.h4,{id:"guideline",children:"guideline"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'Consider declaring a primitive abstract operation based on the\nabsence of a meaningful "default" behavior.'}),"\n",(0,a.jsx)(n.li,{children:'Consider declaring a primitive nonabstract operation based on the\npresence of a meaningful "default" behavior.'}),"\n",(0,a.jsx)(n.li,{children:"When overriding an operation, the overriding subprogram should not\nraise exceptions that are not known to the users of the overridden\nsubprogram."}),"\n",(0,a.jsx)(n.li,{children:'If redispatching is used in the implementation of the operations of\na type, with the specific intent that some of the redispatched-to\noperations be overridden by specializations for the derived types,\nthen document this intent clearly in the specification as part of\nthe "interface" of a parent type with its derived types.'}),"\n",(0,a.jsx)(n.li,{children:"When redispatching is used (for any reason) in the implementation of\na primitive operation of a tagged type, then document (in some\nproject-consistent way) this use in the body of the operation\nsubprogram so that it can be easily found during maintenance."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example",children:"example"}),"\n",(0,a.jsx)(n.p,{children:"This example (Volan 1994) is intended to show a clean derivation of a\nsquare from a rectangle. You do not want to derive Square from Rectangle\nbecause Rectangle has semantics that are inappropriate for Square. (For\ninstance, you can make a rectangle with any arbitrary height and width,\nbut you should not be able to make a square this way.) Instead, both\nSquare and Rectangle should be derived from some common abstract type,\nsuch as:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"Any_Rectangle:\ntype Figure is abstract tagged\n   record\n      ...\n   end record;\ntype Any_Rectangle is abstract new Figure with private;\n-- No Make function for this; it's abstract.\nfunction Area (R: Any_Rectangle) return Float;\n  -- Overrides abstract Area function inherited from Figure.\n  -- Computes area as Width(R) * Height(R), which it will\n  -- invoke via dispatching calls.\nfunction Width (R: Any_Rectangle) return Float is abstract;\nfunction Height (R: Any_Rectangle) return Float is abstract;\ntype Rectangle is new Any_Rectangle with private;\nfunction Make_Rectangle (Width, Height: Float) return Rectangle;\nfunction Width (R: Rectangle) return Float;\nfunction Height (R: Rectangle) return Float;\n-- Area for Rectangle inherited from Any_Rectangle\ntype Square is new Any_Rectangle with private;\nfunction Make_Square (Side_Length: Float) return Square;\nfunction Side_Length (S: Square) return Float;\nfunction Width (S: Square) return Float;\nfunction Height (S: Square) return Float;\n-- Area for Square inherited from Any_Rectangle\n...\n-- In the body, you could just implement Width and Height for\n-- Square as renamings of Side_Length:\nfunction Width (S: Square) return Float renames Side_Length;\nfunction Height (S: Square) return Float renames Side_Length;\nfunction Area (R: Any_Rectangle) return Float is\nbegin\n  return Width(Any_Rectangle'Class(R)) * Height(Any_Rectangle'Class(R));\n  -- Casting [sic, i.e., converting] to the class-wide type causes the function calls to\n  -- dynamically dispatch on the 'Tag of R.\n  -- [sic, i.e., redispatch on the tag of R.]\nend Area;\n\nAlternatively, you could just wait until defining types Rectangle and Square to provide actual Area functions:\n\ntype Any_Rectangle is abstract new Figure with private;\n-- Inherits abstract Area function from Figure,\n-- but that's okay, Any_Rectangle is abstract too.\nfunction Width (R: Any_Rectangle) return Float is abstract;\nfunction Height (R: Any_Rectangle) return Float is abstract;\ntype Rectangle is new Any_Rectangle with private;\nfunction Make_Rectangle (Width, Height: Float) return Rectangle;\nfunction Width (R: Rectangle) return Float;\nfunction Height (R: Rectangle) return Float;\nfunction Area (R: Rectangle) return Float; -- Overrides Area from Figure\ntype Square is new Any_Rectangle with private;\nfunction Make_Square (Side_Length: Float) return Square;\nfunction Side_Length (S: Square) return Float;\nfunction Width (S: Square) return Float;\nfunction Height (S: Square) return Float;\nfunction Area (S: Square) return Float;  -- Overrides Area from Figure\n...\nfunction Area (R: Rectangle) return Float is\nbegin\n  return Width(R) * Height(R); -- Non-dispatching calls\nend Area;\nfunction Area (S: Square) return Float is\nbegin\n  return Side_Length(S) ** 2;\nend Area;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"rationale",children:"rationale"}),"\n",(0,a.jsx)(n.p,{children:"The behavior of a nonabstract operation can be interpreted as the\nexpected behavior for all members of the class; therefore, the behavior\nmust be a meaningful default for all descendants. If the operation must\nbe tailored based on the descendant abstraction (e.g., computing the\narea of a geometric shape depends on the specific shape), then the\noperation should be primitive and possibly abstract. The effect of\nmaking the operation abstract is that it guarantees that each descendant\nmust define its own version of the operation. Thus, when there is no\nacceptable basic behavior, an abstract operation is appropriate because\na new version of the operation must be provided with each derivation."}),"\n",(0,a.jsx)(n.p,{children:"All operations declared in the same package as the tagged type and\nfollowing the tagged type's declaration but before the next type\ndeclaration are considered its primitive operations. Therefore, when a\nnew type is derived from the tagged type, it inherits the primitive\noperations. If there are any operations that you do not want to be\ninherited, you must choose whether to declare them as class-wide\noperations (see Guideline 9.3.2) or to declare them in a separate\npackage (e.g., a child package)."}),"\n",(0,a.jsx)(n.p,{children:"Exceptions are part of the semantics of the class. By modifying the\nexceptions, you are violating the semantic properties of the class-wide\ntype (see Guideline 9.2.1)."}),"\n",(0,a.jsx)(n.p,{children:'There are (at least) two distinct users of a tagged type and its\nprimitives. The "ordinary" user uses the type and its primitives without\nenhancement. The "extending" user extends the type by deriving a type\nbased on the existing (tagged) type. Extending users and maintainers\nmust determine the ramifications of a possibly incorrect extension. The\nguidelines here try to strike a balance between too much documentation\n(that can then easily get out of synch with the actual code) and an\nappropriate level of documentation to enhance the maintainability of the\ncode.'}),"\n",(0,a.jsx)(n.p,{children:'One of the major maintenance headaches associated with inheritance and\ndynamic binding relates to undocumented interdependencies among\nprimitive (dispatching) operations of tagged types (the equivalent of\n"methods" in typical object-oriented terminology). If a derived type\ninherits some and overrides other primitive operations, there is the\nquestion of what indirect effects on the inherited primitives are\nproduced. If no redispatching is used, the primitives may be inherited\nas "black boxes." If redispatching is used internally, then when\ninherited, the externally visible behavior of an operation may change,\ndepending on what other primitives are overridden. Maintenance problems\n(here, finding and fixing bugs) occur when someone overrides incorrectly\n(on purpose or by accident) an operation used in redispatching. Because\nthis overriding can invalidate the functioning of another operation\ndefined perhaps several levels of inheritance up from the incorrect\noperation, it can be extremely difficult to track down.'}),"\n",(0,a.jsx)(n.p,{children:'In the object-oriented paradigm, redispatching is often used to\nparameterize abstractions. In other words, certain primitives are\nintended to be overridden precisely because they are redispatching.\nThese primitives may even be declared as abstract, requiring that they\nbe overridden. Because they are redispatching, they act as "parameters"\nfor the other operations. Although in Ada much of this parameterization\ncan be done using generics, there are cases where the redispatching\napproach leads to a clearer object-oriented design. When you document\nthe redispatching connection between the operations that are to be\noverridden and the operations that use them, you make the intended use\nof the type much clearer.'}),"\n",(0,a.jsx)(n.p,{children:'Hence, any use of redispatching within a primitive should be considered\npart of the "interface" of the primitive, at least as far as any\ninheritor, and requires documentation at the specification level. The\nalternative (i.e., not providing such documentation in the\nspecification) is to have to delve deep into the code of all the classes\nin the derivation hierarchy in order to map out the redispatching calls.\nSuch detective work compromises the black-box nature of object-oriented\nclass definitions. Note that if you follow Guideline 9.2.1 on preserving\nthe semantics of the class-wide dispatching operations in the extensions\nof derived types, you will minimize or avoid the problems discussed here\nabout redispatching.'}),"\n",(0,a.jsx)(n.h3,{id:"class-wide-operations",children:"Class-Wide Operations"}),"\n",(0,a.jsx)(n.h4,{id:"guideline-1",children:"guideline"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Consider using a class-wide operation (i.e., an operation with\nparameter[s] of a class-wide type) when an operation can be\nwritten, compiled, and tested without knowing all the possible\ndescendants of a given tagged type (Barnes 1996)."}),"\n",(0,a.jsx)(n.li,{children:"Consider using a class-wide operation when you do not want an\noperation to be inherited and/or overridden."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-1",children:"example"}),"\n",(0,a.jsx)(n.p,{children:"The following example is adapted from Barnes (1996) using the geometric\nobjects from the example of Guideline 9.2.1 and declaring the following\nfunctions as primitives in the package specification:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"\nfunction Area (O : in Object) return Float;\n\nfunction Area (C : in Circle) return Float;\n\nfunction Area (S : in Shape) return Float;\n"})}),"\n",(0,a.jsx)(n.p,{children:"A function for computing the moment of a force about a fulcrum can now\nbe created using a class-wide type as follows:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"\nfunction Moment (OC : Object'Class) return Float is\nbegin\n   return OC.X_Coord*Area(OC);\nend Moment;\n"})}),"\n",(0,a.jsx)(n.p,{children:"Because Moment accepts the class-wide formal parameter of Object'Class,\nit can be called with an actual parameter that is any derivation of type\nObject. Assuming that all derivations of type object have defined a\nfunction for Area, Moment will dispatch to the appropriate function when\ncalled. For example:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"C : Circle;\nM : Float;\n\n...\n\n-- Moment will dispatch to the Area function for the Circle type.\nM := Moment(C);\n"})}),"\n",(0,a.jsx)(n.h4,{id:"rationale-1",children:"rationale"}),"\n",(0,a.jsx)(n.p,{children:"The use of class-wide operations avoids unnecessary duplication of code.\nRun-time dispatching may be used where necessary to invoke appropriate\ntype-specific operations based on an operand's tag."}),"\n",(0,a.jsx)(n.p,{children:"See also Guideline 8.4.3 for a discussion of class-wide pointers in an\nobject-oriented programming framework registry."}),"\n",(0,a.jsx)(n.h3,{id:"constructors",children:"Constructors"}),"\n",(0,a.jsx)(n.p,{children:"Ada does not define a unique syntax for constructors. In Ada a\nconstructor for a type is defined as an operation that produces as a\nresult a constructed object, i.e., an initialized instance of the type."}),"\n",(0,a.jsx)(n.h4,{id:"guideline-2",children:"guideline"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Avoid declaring a constructor as a primitive abstract operation."}),"\n",(0,a.jsx)(n.li,{children:"Use a primitive abstract operation to declare an initialization\nfunction or constructor only when objects of the inheriting derived\ntypes will not require additional parameters for initialization."}),"\n",(0,a.jsx)(n.li,{children:"Consider using access discriminants to provide parameters to default\ninitialization."}),"\n",(0,a.jsx)(n.li,{children:"Use constructors for explicit initialization."}),"\n",(0,a.jsx)(n.li,{children:"Consider splitting the initialization and construction of an object."}),"\n",(0,a.jsx)(n.li,{children:"Consider declaring a constructor operation in a child package."}),"\n",(0,a.jsx)(n.li,{children:"Consider declaring a constructor operation to return an access value\nto the constructed object (Dewar 1995)."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-2",children:"example"}),"\n",(0,a.jsx)(n.p,{children:"The following example illustrates the declaration of a constructor in a\nchild package:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"--------------------------------------------------------------------------\npackage Game is\n   type Game_Piece is tagged ...\n   ...\n\nend Game;\n--------------------------------------------------------------------------\npackage Game.Constructors is\n   function Make_Piece return Game_Piece;\n   ...\nend Game.Constructors;\n--------------------------------------------------------------------------\n"})}),"\n",(0,a.jsx)(n.p,{children:"The following example shows how to split the initialization and\nconstruction of an object:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"type Vehicle is tagged ...\n\nprocedure Initialize (Self : in out Vehicle;\n                      Make : in     String);\n\n...\n\ntype Car is new Vehicle with ... ;\ntype Car_Ptr is access all Car'Class;\n\n...\n\nprocedure Initialize (Self  : in out Car_Ptr;\n                      Make  : in     String;\n                      Model : in     String) is\nbegin -- Initialize\n   Initialize (Vehicle (Self.all), Make);\n   ...\n   -- initialization of Car\nend Initialize;\n\nfunction Create (Make  : in String;\n                 Model : in String) return Car_Ptr is\n   Temp_Ptr : Car_Ptr;\nbegin -- Create\n   Temp_Ptr := new Car;\n   Initialize (Temp_Ptr, Make, Model);\n   return Temp_Ptr;\nend Create;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"rationale-2",children:"rationale"}),"\n",(0,a.jsx)(n.p,{children:"Constructor operations for the types in a type hierarchy (assuming\ntagged types and their derivatives) usually differ in their parameter\nprofiles. The constructor will typically need more parameters because of\nthe added components in the descendant types. You run into a problem\nwhen you let constructor operations be inherited because you now have\noperations for which there is no meaningful implementation (default or\noverridden). Effectively, you violate the class-wide properties (see\nGuideline 9.2.1) because the root constructor will not successfully\nconstruct a descendant object. Inherited operations cannot add\nparameters to their parameter profile, so these are inappropriate to use\nas constructors."}),"\n",(0,a.jsx)(n.p,{children:"You cannot initialize a limited type at its declaration, so you may need\nto use an access discriminant and rely on default initialization. For a\ntagged type, however, you should not assume that any default\ninitialization is sufficient, and you should declare constructors. For\nlimited types, the constructors must be separate procedures or functions\nthat return an access to the limited type."}),"\n",(0,a.jsx)(n.p,{children:"The example shows using a constructor in a child package. By declaring\nconstructor operations in either a child package or a nested package,\nyou avoid the problems associated with making them primitive operations.\nBecause they are no longer primitive operations, they cannot be\ninherited. By declaring them in a child package (see also Guidelines\n4.1.6 and 4.2.2 on using child packages versus nested packages), you\ngain the ability to change them without affecting the clients of the\nparent package (Taft 1995b)."}),"\n",(0,a.jsx)(n.p,{children:"You should put the construction logic and initialization logic in\ndistinct subprograms so that you are able to call the initialization\nroutine for the parent tagged type."}),"\n",(0,a.jsx)(n.h4,{id:"notes",children:"notes"}),"\n",(0,a.jsx)(n.p,{children:"When you extend a tagged type (regardless whether it is an abstract\ntype), you can choose to declare as abstract some of the additional\noperations. Doing so, however, means that the derived type must also be\ndeclared as abstract. If this newly derived type has inherited any\nfunctions that name it as the return type, these inherited functions now\nalso become abstract (Barnes 1996). If one of these primitive functions\nserved as the constructor function, you have now violated the first\nguideline in that the constructor has become a primitive abstract\noperation."}),"\n",(0,a.jsx)(n.h3,{id:"equality",children:"Equality"}),"\n",(0,a.jsx)(n.h4,{id:"guideline-3",children:"guideline"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:'When you redefine the "=" operator on a tagged type, make sure that\nit has the expected behavior in extensions of this type and override\nit if necessary.'}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-3",children:"example"}),"\n",(0,a.jsx)(n.p,{children:"The following example is adapted from the discussion of equality and\ninheritance in Barnes (1996):"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:'----------------------------------------------------------------------------\npackage Object_Package is\n\n   Epsilon : constant Float := 0.01;\n\n   type Object is tagged\n      record\n         X_Coordinate : Float;\n         Y_Coordinate : Float;\n      end record;\n\n   function "=" (A, B : Object) return Boolean;\n\nend Object_Package;\n----------------------------------------------------------------------------\npackage body Object_Package is\n\n   -- redefine equality to be when two objects are located within a delta\n   -- of the same point\n   function "=" (A, B : Object) return Boolean is\n   begin\n      return (A.X_Coordinate - B.X_Coordinate) ** 2\n           + (A.Y_Coordinate - B.Y_Coordinate) ** 2 < Epsilon**2;\n   end "=";\n\nend Object_Package;\n\n----------------------------------------------------------------------------\nwith Object_Package;  use Object_Package;\npackage Circle_Package_1 is\n   type Circle is new Object with\n      record\n         Radius : Float;\n      end record;\n  function "=" (A, B : Circle) return Boolean;\nend Circle_Package_1;\n----------------------------------------------------------------------------\npackage body Circle_Package_1 is\n\n   -- Equality is overridden, otherwise two circles must have exactly\n   -- equal radii to be considered equal.\n   function "=" (A, B : Circle) return Boolean is\n   begin\n      return (Object(A) = Object(B)) and\n             (abs (A.Radius - B.Radius) < Epsilon);\n   end "=";\n\nend Circle_Package_1;\n----------------------------------------------------------------------------\nwith Object_Package;  use Object_Package;\npackage Circle_Package_2 is\n\n   type Circle is new Object with\n      record\n         Radius : Float;\n      end record;\n\n   -- don\'t override equality in this package\n\nend Circle_Package_2;\n----------------------------------------------------------------------------\nwith Object_Package;\nwith Circle_Package_1;\nwith Circle_Package_2;\nwith Ada.Text_IO;\nprocedure Equality_Test is\n   use type Object_Package.Object;\n   use type Circle_Package_1.Circle;\n   use type Circle_Package_2.Circle;\n   Object_1 : Object_Package.Object;\n   Object_2 : Object_Package.Object;\n   Circle_1 : Circle_Package_1.Circle;\n   Circle_2 : Circle_Package_1.Circle;\n   Circle_3 : Circle_Package_2.Circle;\n   Circle_4 : Circle_Package_2.Circle;\nbegin\n   Object_1 := (X_Coordinate => 1.000, Y_Coordinate => 2.000);\n   Object_2 := (X_Coordinate => 1.005, Y_Coordinate => 2.000);\n   -- These Objects are considered equal.  Equality has been redefined to be\n   -- when two objects are located within a delta of the same point.\n   if Object_1 = Object_2 then\n      Ada.Text_IO.Put_Line ("Objects equal.");\n   else\n      Ada.Text_IO.Put_Line ("Objects not equal.");\n   end if;\n   Circle_1 := (X_Coordinate => 1.000, Y_Coordinate => 2.000, Radius => 5.000);\n   Circle_2 := (X_Coordinate => 1.005, Y_Coordinate => 2.000, Radius => 5.005);\n   -- These Circles are considered equal.  Equality has been redefined to be\n   -- when the X-Y locations of the circles and their radii are both within\n   -- the delta.\n   if Circle_1 = Circle_2 then\n      Ada.Text_IO.Put_Line ("Circles equal.");\n   else\n      Ada.Text_IO.Put_Line ("Circles not equal.");\n   end if;\n   Circle_3 := (X_Coordinate => 1.000, Y_Coordinate => 2.000, Radius => 5.000);\n   Circle_4 := (X_Coordinate => 1.005, Y_Coordinate => 2.000, Radius => 5.005);\n   -- These Circles are not considered equal because predefined equality of\n   -- the extension component Radius will evaluate to False.\n   if Circle_3 = Circle_4 then\n      Ada.Text_IO.Put_Line ("Circles equal.");\n   else\n      Ada.Text_IO.Put_Line ("Circles not equal.");\n   end if;\nend Equality_Test;\n'})}),"\n",(0,a.jsx)(n.h4,{id:"rationale-3",children:"rationale"}),"\n",(0,a.jsx)(n.p,{children:"Equality is applied to all components of a record. When you extend a\ntagged type and compare two objects of the derived type for equality,\nthe parent components as well as the new extension components will be\ncompared. Therefore, when you redefine equality on a tagged type and\ndefine extensions on this type, the parent components are compared using\nthe redefined equality. The extension components are also compared,\nusing either predefined equality or some other redefined equality if\nappropriate. The behavior of inherited equality differs from the\nbehavior of other inherited operations. When other primitives are\ninherited, if you do not override the inherited primitive, it can only\noperate on the parent components of the object of the extended type.\nEquality, on the other hand, generally does the right thing."}),"\n",(0,a.jsx)(n.h3,{id:"polymorphism",children:"Polymorphism"}),"\n",(0,a.jsx)(n.h4,{id:"guideline-4",children:"guideline"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Consider using class-wide programming to provide run-time, dynamic\npolymorphism when constructing larger, reusable, extensible\nframeworks."}),"\n",(0,a.jsx)(n.li,{children:"When possible, use class-wide programming rather than variant\nrecords."}),"\n",(0,a.jsx)(n.li,{children:"Use class-wide programming to provide a consistent interface across\nthe set of types in the tagged type hierarchy (i.e., class)."}),"\n",(0,a.jsx)(n.li,{children:"Consider using generics to define a new type in terms of an existing\ntype, either as an extension or as a container, collection, or\ncomposite data structure."}),"\n",(0,a.jsx)(n.li,{children:"Avoid using type extensions for parameterized abstractions when\ngenerics provide a more appropriate mechanism."}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"example-4",children:"example"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"  generic\n     type Element is private;\n  package Stack is\n     ...\n  end Stack;\n\nis preferable to:\n\n  package Stack is\n     type Element is tagged null record;\n     -- Elements to be put on the stack must be of a descendant type\n     -- of this type.\n     ...\n  end Stack;\n"})}),"\n",(0,a.jsx)(n.h4,{id:"rationale-4",children:"rationale"}),"\n",(0,a.jsx)(n.p,{children:"Both generics and class-wide types allow a single algorithm to be\napplicable to multiple, specific types. With generics, you achieve\npolymorphism across unrelated types because the type used in the\ninstantiation must match the generic formal part. You specify required\noperations using generic formal subprograms, constructing them as needed\nfor a given instantiation. Generics are ideal for capturing relatively\nsmall, reusable algorithms and programming idioms, for example, sorting\nalgorithms, maps, bags, and iterators. As generics become large,\nhowever, they become unwieldy, and each instantiation may involve\nadditional generated code. Class-wide programming, including class-wide\ntypes and type extension, is more appropriate for building a large\nsubsystem because you avoid the additional generated code and unwieldy\nproperties of generics."}),"\n",(0,a.jsx)(n.p,{children:"Class-wide programming enables you to take a set of heterogeneous data\nstructures and provide a homogeneous-looking interface across the whole\nset. See also Guideline 9.2.1 on using tagged types to describe\nheterogeneous polymorphic data."}),"\n",(0,a.jsx)(n.p,{children:"In object-oriented programming languages without generic capabilities,\nit was common to use inheritance to achieve much the same effect.\nHowever, this technique is generally less clear and more cumbersome to\nuse than the equivalent explicit generic definition. The nongeneric,\ninheritance approach can always be recovered using a specific\ninstantiation of the generic. Also see Guidelines 5.3.2 and 5.4.7 for a\ndiscussion of self-referential data structures."})]})}function h(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);