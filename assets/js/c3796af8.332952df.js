"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6976],{6183:(e,i,t)=>{t.r(i),t.d(i,{assets:()=>p,contentTitle:()=>h,default:()=>m,frontMatter:()=>d,metadata:()=>r,toc:()=>j});const r=JSON.parse('{"id":"arm/AA-D/AA-D.3","title":"D.3 Priority Ceiling Locking","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-D/AA-D.3.mdx","sourceDirName":"arm/AA-D","slug":"/arm/AA-D/AA-D.3","permalink":"/docs/arm/AA-D/AA-D.3","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":157,"frontMatter":{"sidebar_position":157},"sidebar":"referenceManualSidebar","previous":{"title":"D.2 Priority Scheduling","permalink":"/docs/arm/AA-D/AA-D.2"},"next":{"title":"D.4 Entry Queuing Policies","permalink":"/docs/arm/AA-D/AA-D.4"}}');var n=t(4848),s=t(8453),a=t(3842),o=t(1435),c=(t(1432),t(9162)),l=t(4421);const d={sidebar_position:157},h="D.3 Priority Ceiling Locking",p={},j=[{value:"Syntax",id:"syntax",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Post-Compilation Rules",id:"post-compilation-rules",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Bounded (Run-Time) Errors",id:"bounded-run-time-errors",level:4},{value:"Implementation Permissions",id:"implementation-permissions",level:4},{value:"Implementation Advice",id:"implementation-advice",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Wording Changes from Ada 2005",id:"wording-changes-from-ada-2005",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function x(e){const i={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.header,{children:(0,n.jsx)(i.h1,{id:"d3-priority-ceiling-locking",children:"D.3 Priority Ceiling Locking"})}),"\n",(0,n.jsx)(i.admonition,{type:"danger",children:(0,n.jsxs)(i.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.jsx)(i.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,n.jsx)(c.A,{children:"1/3"}),"\n",(0,n.jsx)(l.A,{items:["AI05-0299-1"]}),"\n",(0,n.jsxs)("p",{children:["[This subclause specifies the interactions between priority task scheduling and protected object ceilings. This interaction is based on the concept of the ",(0,n.jsx)("em",{children:"ceiling priority"})," of a protected object.] ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(i.h4,{id:"syntax",children:"Syntax"}),"\n",(0,n.jsx)(c.A,{children:"2"}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["The form of a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Locking","_","Policy is as follows: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"3"}),"\n",(0,n.jsxs)("p",{class:"Indented2",children:["  ",(0,n.jsx)("strong",{children:"pragma"})," Locking","_","Policy(",(0,n.jsxs)("em",{children:["policy","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"); ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(i.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,n.jsx)(c.A,{children:"4"}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsxs)("em",{children:["policy","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})})," shall either be Ceiling","_","Locking or an implementation-defined ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),". ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"4.a"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{}),"Implementation-defined ",(0,n.jsxs)("em",{children:["policy","_"]}),(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.3#S0002",children:"identifier"})}),"s allowed in a ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})})," Locking","_","Policy.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"post-compilation-rules",children:"Post-Compilation Rules"}),"\n",(0,n.jsx)(c.A,{children:"5"}),"\n",(0,n.jsxs)("p",{children:["A Locking","_","Policy pragma is a configuration pragma.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(i.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,n.jsx)(c.A,{children:"6/2"}),"\n",(0,n.jsx)(l.A,{items:["AI95-00091-01","AI95-00327-01"]}),"\n",(0,n.jsxs)("p",{children:["{",(0,n.jsx)("em",{children:"8652/0073"}),"}"," [A locking policy specifies the details of protected object locking. All protected objects have a priority. The locking policy specifies the meaning of the priority of a protected object, and the relationships between these priorities and task priorities. In addition, the policy specifies the state of a task when it executes a protected action, and how its active priority is affected by the locking.] The ",(0,n.jsx)("em",{children:"locking policy"})," is specified by a Locking","_","Policy pragma. For implementation-defined locking policies, the meaning of the priority of a protected object is implementation defined. If no Locking","_","Policy pragma applies to any of the program units comprising a partition, the locking policy for that partition, as well as the meaning of the priority of a protected object, are implementation defined. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"6.a/2"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{}),"The locking policy if no Locking","_","Policy pragma applies to any unit of a partition.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(c.A,{children:"6.1/3"}),"\n",(0,n.jsx)(l.A,{items:["AI95-00327-01","AI05-0229-1"]}),"\n",(0,n.jsxs)("p",{children:["The ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," specified for the Priority or Interrupt","_","Priority aspect (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.1",children:"D.1"}),") is evaluated as part of the creation of the corresponding protected object and converted to the subtype System.Any","_","Priority or System.Interrupt","_","Priority, respectively. The value of the expression is the initial priority of the corresponding protected object. If no Priority or Interrupt","_","Priority aspect is specified for a protected object, the initial priority is specified by the locking policy. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"7"}),"\n",(0,n.jsxs)("p",{children:["There is one predefined locking policy, Ceiling","_","Locking; this policy is defined as follows: ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"8/3"}),"\n",(0,n.jsx)(l.A,{items:["AI95-00327-01","AI05-0229-1"]}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Every protected object has a ",(0,n.jsx)("em",{children:"ceiling priority"}),", which is determined by either a Priority or Interrupt","_","Priority aspect as defined in ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.1",children:"D.1"}),", or by assignment to the Priority attribute as described in ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.5#Subclause_D.5.2",children:"D.5.2"}),". The ceiling priority of a protected object (or ceiling, for short) is an upper bound on the active priority a task can have when it calls protected operations of that protected object.",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"9/2"}),(0,n.jsx)(l.A,{items:["AI95-00327-01"]}),(0,n.jsxs)("li",{children:["The initial ceiling priority of a protected object is equal to the initial priority for that object.",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"10/4"}),(0,n.jsx)(l.A,{items:["AI95-00327-01","AI05-0229-1","AI12-0051-1"]}),(0,n.jsxs)("li",{children:["If an Interrupt","_","Handler or Attach","_","Handler aspect (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-C/AA-C.3#Subclause_C.3.1",children:"C.3.1"}),") is specified for a protected subprogram of a protected type that does not have either the Priority or Interrupt","_","Priority aspect specified, the initial priority of protected objects of that type is implementation defined, but in the range of the subtype System.Interrupt","_","Priority. ",(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"10.a"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{}),"Default ceiling priorities.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(c.A,{children:"11/3"}),"\n",(0,n.jsx)(l.A,{items:["AI95-00327-01","AI05-0229-1"]}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["If neither aspect Priority nor Interrupt","_","Priority is specified for a protected type, and no protected subprogram of the type has aspect Interrupt","_","Handler or Attach","_","Handler specified, then the initial priority of the corresponding protected object is System.Priority'Last.",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"12"}),(0,n.jsxs)("li",{children:["While a task executes a protected action, it inherits the ceiling priority of the corresponding protected object.",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"13"}),(0,n.jsxs)("li",{children:["When a task calls a protected operation, a check is made that its active priority is not higher than the ceiling of the corresponding protected object; Program","_","Error is raised if this check fails.",(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsx)(c.A,{children:"13.1/5"}),"\n",(0,n.jsx)(l.A,{items:["AI12-0230-1","AI12-0404-1"]}),"\n",(0,n.jsxs)("p",{children:["If the task dispatching policy specified for the ceiling priority of a protected object is EDF","_","Within","_","Priorities, the following additional rules apply:",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"13.2/5"}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["Every protected object has a ",(0,n.jsx)("em",{children:"relative deadline"}),", which is determined by a Relative","_","Deadline aspect as defined in ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.2#Subclause_D.2.6",children:"D.2.6"}),", or by assignment to the Relative","_","Deadline attribute as described in ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.5#Subclause_D.5.2",children:"D.5.2"}),". The relative deadline of a protected object represents a lower bound on the relative deadline a task may have when it calls a protected operation of that protected object.",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"13.3/5"}),(0,n.jsxs)("li",{children:["If aspect Relative","_","Deadline is not specified for a protected type then the initial relative deadline of the corresponding protected object is Ada.Real","_","Time.Time","_","Span","_","Zero.",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"13.4/5"}),(0,n.jsxs)("li",{children:["While a task executes a protected action on a protected object ",(0,n.jsx)("em",{children:"P"}),", it inherits the relative deadline of ",(0,n.jsx)("em",{children:"P"}),". In this case, let ",(0,n.jsx)("em",{children:"DF"})," be 'now' ('now' is obtained via a call on Ada.Real","_","Time.Clock at the start of the action) plus the deadline floor of ",(0,n.jsx)("em",{children:"P"}),". If the active deadline of the task is later than ",(0,n.jsx)("em",{children:"DF"}),", its active deadline is reduced to ",(0,n.jsx)("em",{children:"DF"}),"[; the active deadline is unchanged otherwise].",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"13.5/5"}),(0,n.jsxs)("li",{children:["When a task calls a protected operation, a check is made that its active deadline minus its last release time is not less than the relative deadline of the corresponding protected object; Program","_","Error is raised if this check fails. ",(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsx)(i.h4,{id:"bounded-run-time-errors",children:"Bounded (Run-Time) Errors"}),"\n",(0,n.jsx)(c.A,{children:"13.6/5"}),"\n",(0,n.jsx)(l.A,{items:["AI95-00327-01","AI12-0230-1"]}),"\n",(0,n.jsxs)("p",{children:["Following any change of priority, it is a bounded error for the active priority of any task with a call queued on an entry of a protected object to be higher than the ceiling priority of the protected object. In this case one of the following applies:",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"13.7/5"}),"\n",(0,n.jsx)(l.A,{items:["AI12-0404-1"]}),"\n",(0,n.jsxs)("ul",{children:[(0,n.jsxs)("li",{children:["at any time prior to executing the entry body, Program","_","Error is raised in the calling task;",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"13.8/5"}),(0,n.jsx)(l.A,{items:["AI12-0404-1"]}),(0,n.jsxs)("li",{children:["when the entry is open, the entry body is executed at the ceiling priority of the protected object;",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"13.9/5"}),(0,n.jsx)(l.A,{items:["AI12-0404-1"]}),(0,n.jsxs)("li",{children:["when the entry is open, the entry body is executed at the ceiling priority of the protected object and then Program","_","Error is raised in the calling task; or",(0,n.jsx)("br",{})]}),(0,n.jsx)(c.A,{children:"13.10/5"}),(0,n.jsx)(l.A,{items:["AI12-0404-1"]}),(0,n.jsxs)("li",{children:["when the entry is open, the entry body is executed at the ceiling priority of the protected object that was in effect when the entry call was queued. ",(0,n.jsx)("br",{})]})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"13.a.1/2"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"ramification",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{}),"Note that the error is \u201cblamed\u201d on the task that did the entry call, not the task that changed the priority of the task or protected object. This seems to make sense for the case of changing the priority of a task blocked on a call, since if the Set","_","Priority had happened a little bit sooner, before the task queued a call, the entry-calling task would get the error. Similarly, there is no reason not to raise the priority of a task that is executing in an ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-9/AA-9.7#S0283",children:"abortable_part"})}),", so long as its priority is lowered before it gets to the end and needs to cancel the call. The priority might need to be lowered to allow it to remove the call from the entry queue, in order to avoid violating the ceiling. This seems relatively harmless, since there is an error, and the task is about to start raising an exception anyway. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"implementation-permissions",children:"Implementation Permissions"}),"\n",(0,n.jsx)(c.A,{children:"14"}),"\n",(0,n.jsxs)("p",{children:["The implementation is allowed to round all ceilings in a certain subrange of System.Priority or System.Interrupt","_","Priority up to the top of that subrange, uniformly. ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"14.a"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{}),"For example, an implementation might use Priority'Last for all ceilings in Priority, and Interrupt","_","Priority'Last for all ceilings in Interrupt","_","Priority. This would be equivalent to having two ceiling priorities for protected objects, \u201cnonpreemptible\u201d and \u201cnoninterruptible\u201d, and is an allowed behavior.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"14.b"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["Note that the implementation cannot choose a subrange that crosses the boundary between normal and interrupt priorities. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(c.A,{children:"15/5"}),"\n",(0,n.jsx)(l.A,{items:["AI95-00256-01","AI12-0444-1"]}),"\n",(0,n.jsxs)("p",{children:["Implementations are allowed to define other locking policies, but are not required to support specifying more than one locking policy per partition.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsx)(c.A,{children:"16"}),"\n",(0,n.jsxs)("p",{children:["[Since implementations are allowed to place restrictions on code that runs at an interrupt-level active priority (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-C/AA-C.3#Subclause_C.3.1",children:"C.3.1"})," and ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.2#Subclause_D.2.1",children:"D.2.1"}),"), the implementation may implement a language feature in terms of a protected object with an implementation-defined ceiling, but the ceiling shall be no less than Priority'Last.] ",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"16.a"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{}),"The ceiling of any protected object used internally by the implementation.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"16.b"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"proof",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{}),"This permission follows from the fact that the implementation can place restrictions on interrupt handlers and on any other code that runs at an interrupt-level active priority.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"16.c"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["The implementation might protect a storage pool with a protected object whose ceiling is Priority'Last, which would cause ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.8#S0164",children:"allocator"})}),"s to fail when evaluated at interrupt priority. Note that the ceiling of such an object has to be at least Priority'Last, since there is no permission for ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-4/AA-4.8#S0164",children:"allocator"})}),"s to fail when evaluated at a noninterrupt priority. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(i.h4,{id:"implementation-advice",children:"Implementation Advice"}),"\n",(0,n.jsx)(c.A,{children:"17"}),"\n",(0,n.jsxs)("p",{children:["The implementation should use names that end with \u201c","_","Locking\u201d for implementation-defined locking policies.",(0,n.jsx)("br",{})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"17.a/2"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"implementation-advice",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{}),"Names that end with \u201c","_","Locking\u201d should be used for implementation-defined locking policies.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"18"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["NOTE 1   While a task executes in a protected action, it can be preempted only by tasks whose active priorities are higher than the ceiling priority of the protected object.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"19"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["NOTE 2   If a protected object has a ceiling priority in the range of Interrupt","_","Priority, certain interrupts are blocked while protected actions of that object execute. In the extreme, if the ceiling is Interrupt","_","Priority'Last, all blockable interrupts are blocked during that time.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"20/5"}),(0,n.jsx)(l.A,{items:["AI12-0447-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["NOTE 3   As described in ",(0,n.jsx)("a",{href:"/docs/arm/AA-C/AA-C.3#Subclause_C.3.1",children:"C.3.1"}),", whenever an interrupt is handled by one of the protected procedures of a protected object, a check is made that its ceiling priority is in the Interrupt","_","Priority range.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"21/5"}),(0,n.jsx)(l.A,{items:["AI12-0442-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["NOTE 4   When specifying the ceiling of a protected object, a correct value is one that is at least as high as the highest active priority at which tasks can be executing when they call protected operations of that object. In determining this value the following factors, which can affect active priority, are relevant: the effect of Set","_","Priority, nested protected operations, entry calls, task activation, and other implementation-defined factors.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"22"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["NOTE 5   Attaching a protected procedure whose ceiling is below the interrupt hardware priority to an interrupt causes the execution of the program to be erroneous (see ",(0,n.jsx)("a",{href:"/docs/arm/AA-C/AA-C.3#Subclause_C.3.1",children:"C.3.1"}),").",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"23"}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["NOTE 6   On a single processor implementation, the ceiling priority rules guarantee that there is no possibility of deadlock involving only protected subprograms (excluding the case where a protected operation calls another protected operation on the same protected object).",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(i.h4,{id:"extensions-to-ada-95",children:"Extensions to Ada 95"})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"23.a/2"}),(0,n.jsx)(l.A,{items:["AI95-00327-01"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["All protected objects now have a priority, which is the value of the Priority attribute of ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.5#Subclause_D.5.2",children:"D.5.2"}),". How this value is interpreted depends on the locking policy; for instance, the ceiling priority is derived from this value when the locking policy is Ceiling","_","Locking. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(i.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"23.b/2"}),(0,n.jsx)(l.A,{items:["AI95-00091-01"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["{",(0,n.jsx)("em",{children:"8652/0073"}),"}"," ",(0,n.jsx)("strong",{children:"Corrigendum:"})," Corrected the wording to reflect that pragma Locking","_","Policy cannot be inside of a program unit.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"23.c/2"}),(0,n.jsx)(l.A,{items:["AI95-00256-01"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["Clarified that an implementation need support only one locking policy (of any kind, language-defined or otherwise) per partition.",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"23.d/2"}),(0,n.jsx)(l.A,{items:["AI95-00327-01"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["The bounded error for the priority of a task being higher than the ceiling of an object it is currently in was moved here from ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.5",children:"D.5"}),", so that it applies no matter how the situation arises. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(i.h4,{id:"wording-changes-from-ada-2005",children:"Wording Changes from Ada 2005"})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"23.e/3"}),(0,n.jsx)(l.A,{items:["AI05-0229-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["Revised to use aspects Priority and Interrupt","_","Priority as ",(0,n.jsx)("code",{children:(0,n.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})}),"s Priority and Interrupt","_","Priority are now obsolescent. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(i.h4,{id:"extensions-to-ada-2012",children:"Extensions to Ada 2012"})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"23.f/5"}),(0,n.jsx)(l.A,{items:["AI12-0230-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:["All protected objects now have a relative deadline, which is the value of the Relative","_","Deadline attribute of ",(0,n.jsx)("a",{href:"/docs/arm/AA-D/AA-D.5#Subclause_D.5.2",children:"D.5.2"}),". How this value is interpreted depends on the locking policy. ",(0,n.jsx)("br",{})]})})]}),"\n",(0,n.jsx)(o.A,{children:(0,n.jsx)(i.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,n.jsxs)(o.A,{children:[(0,n.jsx)(c.A,{children:"23.g/4"}),(0,n.jsx)(l.A,{items:["AI12-0051-1"]}),(0,n.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,n.jsxs)(i.p,{children:[(0,n.jsx)("strong",{children:"Corrigendum:"})," Clarified that the Priority aspect can be used to set the initial ceiling priority of a protected object that contains an interrupt handler. ",(0,n.jsx)("br",{})]})})]})]})}function m(e={}){const{wrapper:i}={...(0,s.R)(),...e.components};return i?(0,n.jsx)(i,{...e,children:(0,n.jsx)(x,{...e})}):x(e)}}}]);