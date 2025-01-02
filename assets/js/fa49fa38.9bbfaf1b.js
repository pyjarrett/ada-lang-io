"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1903],{5099:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>n,toc:()=>c});const n=JSON.parse('{"id":"style-guide/s9/04","title":"9.4 Managing Visibility","description":"Derived Tagged Types","source":"@site/docs/style-guide/s9/04.mdx","sourceDirName":"style-guide/s9","slug":"/style-guide/s9/04","permalink":"/docs/style-guide/s9/04","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"9.4 Managing Visibility"},"sidebar":"styleGuideSidebar","previous":{"title":"9.3 Tagged Type Operations","permalink":"/docs/style-guide/s9/03"},"next":{"title":"9.5 Multiple Inheritance","permalink":"/docs/style-guide/s9/05"}}');var a=i(4848),r=i(8453);const s={title:"9.4 Managing Visibility"},o=void 0,d={},c=[{value:"Derived Tagged Types",id:"derived-tagged-types",level:3},{value:"guideline",id:"guideline",level:4},{value:"example",id:"example",level:4},{value:"rationale",id:"rationale",level:4}];function l(e){const t={code:"code",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h3,{id:"derived-tagged-types",children:"Derived Tagged Types"}),"\n",(0,a.jsx)(t.h4,{id:"guideline",children:"guideline"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"Consider giving derived tagged types the same visibility to the\nparent type as other clients of the parent."}),"\n",(0,a.jsx)(t.li,{children:"Define a derived tagged type in a child of the package that defines\nthe base type if the implementation of the derived type requires\ngreater visibility into the implementation of the base type than\nother clients of the base type require."}),"\n"]}),"\n",(0,a.jsx)(t.h4,{id:"example",children:"example"}),"\n",(0,a.jsx)(t.p,{children:"The following example illustrates the need for a derived type to have\ngreater visibility into the implementation of the base type than other\nclients of the base type. In this example of a stack class hierarchy,\nPush and Pop routines provide a homogeneous interface for all variations\nof stacks. However, the implementation of these operations requires\ngreater visibility into the base types due to the differences in the\ndata elements. This example is adapted from Barbey, Kempe, and\nStrohmeier (1994):"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ada",children:"generic\n   type Item_Type is private;\npackage Generic_Stack is\n   type Abstract_Stack_Type is abstract tagged limited private;\n   procedure Push (Stack : in out Abstract_Stack_Type;\n                   Item  : in     Item_Type) is abstract;\n   procedure Pop (Stack : in out Abstract_Stack_Type;\n                  Item  :    out Item_Type) is abstract;\n   function Size (Stack : Abstract_Stack_Type) return Natural;\n   Full_Error  : exception; -- May be raised by Push\n   Empty_Error : exception; -- May be raised by Pop\nprivate\n   type Abstract_Stack_Type is abstract tagged limited\n      record\n         Size : Natural := 0;\n      end record;\nend Generic_Stack;\npackage body Generic_Stack is\n   function Size (Stack : Abstract_Stack_Type)\n      return Natural is\n   begin\n      return Stack.Size;\n   end Size;\nend Generic_Stack;\n--\n-- Now, a bounded stack can be derived in a child package as follows:\n--\n----------------------------------------------------------------------\ngeneric\npackage Generic_Stack.Generic_Bounded_Stack is\n   type Stack_Type (Max : Positive) is\n      new Abstract_Stack_Type with private;\n   -- override all abstract subprograms\n   procedure Push (Stack : in out Stack_Type;\n                   Item  : in     Item_Type);\n   procedure Pop (Stack : in out Stack_Type;\n                  Item  :    out Item_Type);\nprivate\n   type Table_Type is array (Positive range <>) of Item_Type;\n   type Stack_Type (Max : Positive) is new Abstract_Stack_Type with\n      record\n         Table : Table_Type (1 .. Max);\n      end record;\nend Generic_Stack.Generic_Bounded_Stack;\n----------------------------------------------------------------------\npackage body Generic_Stack.Generic_Bounded_Stack is\n\n   procedure Push (Stack : in out Stack_Type;\n                   Item  : in     Item_Type) is\n   begin\n\n      -- The new bounded stack needs visibility into the base type\n      --   in order to update the Size element of the stack type\n      --   when adding or removing items.\n\n      if (Stack.Size = Stack.Max) then\n         raise Full_Error;\n      else\n         Stack.Size := Stack.Size + 1;\n         Stack.Table(Stack.Size) := Item;\n      end if;\n   end Push;\n\n   procedure Pop (Stack : in out Stack_Type;\n                  Item  :    out Item_Type) is\n   begin\n      ...\n   end Pop;\n\nend Generic_Stack.Generic_Bounded_Stack;\n"})}),"\n",(0,a.jsx)(t.h4,{id:"rationale",children:"rationale"}),"\n",(0,a.jsx)(t.p,{children:"If the derived type can be defined without any special visibility of the\nbase type, this provides for the best possible decoupling of the\nimplementation of the derived type from changes in the implementation of\nthe base type. On the other hand, the operations of an extension of a\ntagged type may need additional information from the base type that is\nnot commonly needed by other clients."}),"\n",(0,a.jsx)(t.p,{children:"When the implementation of a derived tagged type requires visibility of\nthe implementation of the base type, use a child package to define the\nderived type. Rather than providing additional public operations for\nthis information, it is better to place the definition of the derived\ntype in a child package. This gives the derived type the necessary\nvisibility without risking misuse by other clients."}),"\n",(0,a.jsx)(t.p,{children:"This situation is likely to arise when you build a data structure with a\nhomogeneous interface but whose data elements have a heterogeneous\nimplementation. See also Guidelines 8.4.8, 9.2.1, and 9.3.5."})]})}function p(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}}}]);