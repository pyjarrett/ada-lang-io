"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3294],{91333:(e,s,i)=>{i.r(s),i.d(s,{assets:()=>p,contentTitle:()=>l,default:()=>u,frontMatter:()=>d,metadata:()=>x,toc:()=>j});var n=i(74848),t=i(28453),r=i(13842),a=i(91435),o=i(21432),h=i(79162),c=i(34421);const d={sidebar_position:165},l="D.11 Asynchronous Task Control",x={id:"arm/AA-D/AA-D.11",title:"D.11 Asynchronous Task Control",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.11.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.11",permalink:"/docs/arm/AA-D/AA-D.11",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:165,frontMatter:{sidebar_position:165},sidebar:"referenceManualSidebar",previous:{title:"D.10 Synchronous Task Control",permalink:"/docs/arm/AA-D/AA-D.10"},next:{title:"D.12 Other Optimizations and Determinism Rules",permalink:"/docs/arm/AA-D/AA-D.12"}},p={},j=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Erroneous Execution",id:"erroneous-execution",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4}];function m(e){const s={a:"a",admonition:"admonition",h1:"h1",h4:"h4",p:"p",...(0,t.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(s.h1,{id:"d11-asynchronous-task-control",children:"D.11 Asynchronous Task Control"}),"\n",(0,n.jsx)(s.admonition,{type:"danger",children:(0,n.jsxs)(s.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(s.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,n.jsx)(h.A,{children:"1/3"}),"\n",(0,n.jsx)(c.A,{items:["AI05-0299-1"]}),"\n",(0,n.jsxs)("p",{children:["[This subclause introduces a language-defined package to do asynchronous suspend/resume on tasks. It uses a conceptual ",(0,n.jsx)("em",{children:"held priority"})," value to represent the task's ",(0,n.jsx)("em",{children:"held"})," state.] ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,n.jsx)(h.A,{children:"2"}),"\n",(0,n.jsxs)("p",{children:["The following language-defined library package exists: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(h.A,{children:"3/5"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00362-01","AI12-0241-1","AI12-0302-1"]}),"\n",(0,n.jsx)(o.A,{language:"ada",children:(0,n.jsxs)(s.p,{children:["with Ada.Task","_","Identification;","\n","package Ada.Asynchronous","_","Task","_","Control","\n","  with Preelaborate, Nonblocking, Global =",">"," in out synchronized is","\n","  procedure Hold(T : in Ada.Task","_","Identification.Task","_","Id);","\n","  procedure Continue(T : in Ada.Task","_","Identification.Task","_","Id);","\n","  function Is","_","Held(T : Ada.Task","_","Identification.Task","_","Id)","\n","   return Boolean;","\n","end Ada.Asynchronous","_","Task","_","Control;","\n"]})}),"\n",(0,n.jsx)(s.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,n.jsx)(h.A,{children:"4/2"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00357-01"]}),"\n",(0,n.jsxs)("p",{children:["After the Hold operation has been applied to a task, the task becomes ",(0,n.jsx)("em",{children:"held"}),". For each processor there is a conceptual ",(0,n.jsx)("em",{children:"idle task"}),", which is always ready. The base priority of the idle task is below System.Any","_","Priority'First. The ",(0,n.jsx)("em",{children:"held priority"})," is a constant of the type Integer whose value is below the base priority of the idle task. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"4.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"discussion",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"The held state should not be confused with the blocked state as defined in ",(0,n.jsx)("a",{href:"/docs/arm/AA-9/AA-9.2",children:"9.2"}),"; the task is still ready. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(h.A,{children:"4.1/2"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00357-01"]}),"\n",(0,n.jsxs)("p",{children:["For any priority below System.Any","_","Priority'First, the task dispatching policy is FIFO","_","Within","_","Priorities. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"4.b/2"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{children:"To be honest: "}),"This applies even if a Task","_","Dispatching","_","Policy specifies the policy for all of the priorities of the partition. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"4.c/2"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"A task at the held priority never runs, so it is not necessary to implement FIFO","_","Within","_","Priorities for systems that have only one policy (such as EDF","_","Across","_","Priorities). ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(h.A,{children:"5/2"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00357-01"]}),"\n",(0,n.jsxs)("p",{children:["The Hold operation sets the state of T to held. For a held task, the active priority is reevaluated as if the base priority of the task were the held priority. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"5.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"For example, if T is currently inheriting priorities from other sources (e.g. it is executing in a protected action), its active priority does not change, and it continues to execute until it leaves the protected action. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(h.A,{children:"6/2"}),"\n",(0,n.jsx)(c.A,{items:["AI95-00357-01"]}),"\n",(0,n.jsxs)("p",{children:["The Continue operation resets the state of T to not-held; its active priority is then reevaluated as determined by the task dispatching policy associated with its base priority.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(h.A,{children:"7"}),"\n",(0,n.jsxs)("p",{children:["The Is","_","Held function returns True if and only if T is in the held state. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"7.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"discussion",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"Note that the state of T can be changed immediately after Is","_","Held returns. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(h.A,{children:"8"}),"\n",(0,n.jsxs)("p",{children:["As part of these operations, a check is made that the task identified by T is not terminated. Tasking","_","Error is raised if the check fails. Program","_","Error is raised if the value of T is Null","_","Task","_","Id.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"erroneous-execution",children:"Erroneous Execution"}),"\n",(0,n.jsx)(h.A,{children:"9"}),"\n",(0,n.jsxs)("p",{children:["If any operation in this package is called with a parameter T that specifies a task object that no longer exists, the execution of the program is erroneous. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(s.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,n.jsx)(h.A,{children:"10/5"}),"\n",(0,n.jsx)(c.A,{items:["AI12-0444-1"]}),"\n",(0,n.jsxs)("p",{children:["An implementation may omit support for Asynchronous","_","Task","_","Control if it is infeasible to support it in the target environment. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"10.a"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"reason",children:(0,n.jsxs)(s.p,{children:[(0,n.jsx)("strong",{}),"A direct implementation of the Asynchronous","_","Task","_","Control semantics using priorities is not necessarily efficient enough. Thus, we envision implementations that use some other mechanism to set the \u201cheld\u201d state. If there is no other such mechanism, support for Asynchronous","_","Task","_","Control might be infeasible, because an implementation in terms of priority would require one idle task per processor. On some systems, programs are not supposed to know how many processors are available, so creating enough idle tasks would be problematic. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"11"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["NOTE 1   It is a consequence of the priority rules that held tasks cannot be dispatched on any processor in a partition (unless they are inheriting priorities) since their priorities are defined to be below the priority of any idle task.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"12"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["NOTE 2   The effect of calling Get","_","Priority and Set","_","Priority on a Held task is the same as on any other task.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"13"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["NOTE 3   Calling Hold on a held task or Continue on a non-held task has no effect.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"14"}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["NOTE 4   The rules affecting queuing are derived from the above rules, in addition to the normal priority rules: ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"15"}),(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["When a held task is on the ready queue, its priority is so low as to never reach the top of the queue as long as there are other tasks on that queue.",(0,n.jsx)("br",{})]}),(0,n.jsx)(h.A,{children:"16"}),(0,n.jsxs)("li",{children:["If a task is executing in a protected action, inside a rendezvous, or is inheriting priorities from other sources (e.g. when activated), it continues to execute until it is no longer executing the corresponding construct.",(0,n.jsx)("br",{})]}),(0,n.jsx)(h.A,{children:"17"}),(0,n.jsxs)("li",{children:["If a task becomes held while waiting (as a caller) for a rendezvous to complete, the active priority of the accepting task is not affected.",(0,n.jsx)("br",{})]}),(0,n.jsx)(h.A,{children:"18/1"}),(0,n.jsx)(c.A,{items:["AI95-00111-01"]}),(0,n.jsxs)("li",{children:["{",(0,n.jsx)("em",{children:"8652/0077"}),"}"," If a task becomes held while waiting in a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-9/AA-9.7#S0270",children:"selective_accept"})}),", and an entry call is issued to one of the open entries, the corresponding ",(0,n.jsx)("code",{children:(0,n.jsxs)("a",{href:"/docs/arm/AA-9/AA-9.7#S0273",children:["accept","_","alternative"]})})," executes. When the rendezvous completes, the active priority of the accepting task is lowered to the held priority (unless it is still inheriting from other sources), and the task does not execute until another Continue.",(0,n.jsx)("br",{})]}),(0,n.jsx)(h.A,{children:"19"}),(0,n.jsxs)("li",{children:["The same holds if the held task is the only task on a protected entry queue whose barrier becomes open. The corresponding entry body executes.",(0,n.jsx)("br",{})]})]})]}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(s.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"19.a/2"}),(0,n.jsx)(c.A,{items:["AI95-00362-01"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["Asynchronous","_","Task","_","Control is now Preelaborated, so it can be used in preelaborated units. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(a.A,{children:(0,n.jsx)(s.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"19.b/2"}),(0,n.jsx)(c.A,{items:["AI95-00111-01"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["{",(0,n.jsx)("em",{children:"8652/0077"}),"}"," ",(0,n.jsx)("strong",{children:"Corrigendum:"})," Corrected to eliminate the use of the undefined term \u201caccept body\u201d.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(a.A,{children:[(0,n.jsx)(h.A,{children:"19.c/2"}),(0,n.jsx)(c.A,{items:["AI95-00357-01"]}),(0,n.jsx)(r.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(s.p,{children:["The description of held tasks was changed to reflect that the calculation of active priorities depends on the dispatching policy of the base priority. Thus, the policy of the held priority was specified in order to avoid surprises (especially when using the EDF policy). ",(0,n.jsx)("br",{})]})})]})]})}function u(e={}){const{wrapper:s}={...(0,t.R)(),...e.components};return s?(0,n.jsx)(s,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}}}]);