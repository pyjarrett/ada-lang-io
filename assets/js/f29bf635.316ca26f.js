"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[7422],{3889:(e,i,r)=>{r.r(i),r.d(i,{assets:()=>A,contentTitle:()=>x,default:()=>m,frontMatter:()=>l,metadata:()=>s,toc:()=>p});const s=JSON.parse('{"id":"arm/AA-D/AA-D.1","title":"D.1 Task Priorities","description":"This Reference Manual output has not been verified,","source":"@site/docs/arm/AA-D/AA-D.1.mdx","sourceDirName":"arm/AA-D","slug":"/arm/AA-D/AA-D.1","permalink":"/docs/arm/AA-D/AA-D.1","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":155,"frontMatter":{"sidebar_position":155},"sidebar":"referenceManualSidebar","previous":{"title":"Annex D Real-Time Systems","permalink":"/docs/arm/AA-D/"},"next":{"title":"D.2 Priority Scheduling","permalink":"/docs/arm/AA-D/AA-D.2"}}');var t=r(4848),n=r(8453),a=r(3842),o=r(1435),c=r(1432),h=r(9162),d=r(4421);const l={sidebar_position:155},x="D.1 Task Priorities",A={},p=[{value:"Static Semantics",id:"static-semantics",level:4},{value:"Legality Rules",id:"legality-rules",level:4},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Implementation Requirements",id:"implementation-requirements",level:4},{value:"Extensions to Ada 83",id:"extensions-to-ada-83",level:4},{value:"Wording Changes from Ada 83",id:"wording-changes-from-ada-83",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"Extensions to Ada 2005",id:"extensions-to-ada-2005",level:4},{value:"Wording Changes from Ada 2012",id:"wording-changes-from-ada-2012",level:4}];function j(e){const i={a:"a",admonition:"admonition",h1:"h1",h4:"h4",header:"header",p:"p",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(i.header,{children:(0,t.jsx)(i.h1,{id:"d1-task-priorities",children:"D.1 Task Priorities"})}),"\n",(0,t.jsx)(i.admonition,{type:"danger",children:(0,t.jsxs)(i.p,{children:["This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,t.jsx)(i.a,{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20",children:"tracking issue"})]})}),"\n","\n",(0,t.jsx)(h.A,{children:"1/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0299-1"]}),"\n",(0,t.jsxs)("p",{children:["[This subclause specifies the priority model for real-time systems. In addition, the methods for specifying priorities are defined.] ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsxs)("em",{children:["Paragraphs 2 through 6 were moved to ",(0,t.jsx)("a",{href:"/docs/arm/AA-J/",children:"Annex J"}),", \u201c",(0,t.jsx)("a",{href:"/docs/arm/AA-J/",children:"Obsolescent Features"}),"\u201d."]})," ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(i.h4,{id:"static-semantics",children:"Static Semantics"}),"\n",(0,t.jsx)(h.A,{children:"6.1/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:["For a task type (including the anonymous type of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.1#S0245",children:"single_task_declaration"})}),"), protected type (including the anonymous type of a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.4#S0250",children:"single_protected_declaration"})}),"), or subprogram, the following language-defined representation aspects may be specified:",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"6.2/3"}),"\n",(0,t.jsxs)("dt",{children:[(0,t.jsx)("br",{}),"Priority"]}),"\n",(0,t.jsx)("dl",{children:(0,t.jsxs)("dd",{children:["The aspect Priority is an ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),", which shall be of type Integer.",(0,t.jsx)("br",{})]})}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"6.a/3"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{children:"Aspect Description for "}),(0,t.jsx)("strong",{children:"Priority: "}),"Priority of a task object or type, or priority of a protected object or type; the priority is not in the interrupt range.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(h.A,{children:"6.3/3"}),"\n",(0,t.jsxs)("dt",{children:[(0,t.jsx)("br",{}),"Interrupt","_","Priority"]}),"\n",(0,t.jsx)("dl",{children:(0,t.jsxs)("dd",{children:["The aspect Interrupt","_","Priority is an ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})}),", which shall be of type Integer.",(0,t.jsx)("br",{})]})}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"6.b/3"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{children:"Aspect Description for "}),(0,t.jsxs)("strong",{children:["Interrupt","_","Priority: "]}),"Priority of a task object or type, or priority of a protected object or type; the priority is in the interrupt range.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(i.h4,{id:"legality-rules",children:"Legality Rules"}),"\n",(0,t.jsx)(h.A,{children:"7/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("em",{children:"This paragraph was deleted."}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"8/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:["If the Priority aspect is specified for a subprogram, the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," shall be static, and its value shall be in the range of System.Priority. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"8.a"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"reason",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{}),"This value is needed before it gets elaborated, when the environment task starts executing. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(h.A,{children:"8.1/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:["At most one of the Priority and Interrupt","_","Priority aspects may be specified for a given entity.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"8.b/3"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"ramification",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{}),"This includes specifying via pragmas (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-J/AA-J.15#Subclause_J.15.11",children:"J.15.11"}),"). Note that ",(0,t.jsx)("a",{href:"/docs/arm/AA-13/AA-13.1",children:"13.1"})," prevents multiple specifications of a single representation aspect by any means. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(h.A,{children:"8.2/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:["Neither of the Priority or Interrupt","_","Priority aspects shall be specified for a synchronized interface type.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(i.h4,{id:"static-semantics-1",children:"Static Semantics"}),"\n",(0,t.jsx)(h.A,{children:"9"}),"\n",(0,t.jsxs)("p",{children:["The following declarations exist in package System: ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"10"}),"\n",(0,t.jsx)(c.A,{language:"ada",children:(0,t.jsxs)(i.p,{children:["subtype Any","_","Priority is Integer range implementation-defined;","\n","subtype Priority is Any","_","Priority","\n","   range Any","_","Priority'First .. implementation-defined;","\n","subtype Interrupt","_","Priority is Any","_","Priority","\n","   range Priority'Last+1 .. Any","_","Priority'Last;","\n","\n",(0,t.jsx)(h.A,{children:"11"}),"\nDefault","_","Priority : constant Priority := (Priority'First + Priority'Last)/2;","\n"]})}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"11.a"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{}),"The declarations of Any","_","Priority and Priority.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(h.A,{children:"12"}),"\n",(0,t.jsxs)("p",{children:["The full range of priority values supported by an implementation is specified by the subtype Any","_","Priority. The subrange of priority values that are high enough to require the blocking of one or more interrupts is specified by the subtype Interrupt","_","Priority. [The subrange of priority values below System.Interrupt","_","Priority'First is specified by the subtype System.Priority.]",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"13/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:[(0,t.jsx)("em",{children:"This paragraph was deleted."}),(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(i.h4,{id:"dynamic-semantics",children:"Dynamic Semantics"}),"\n",(0,t.jsx)(h.A,{children:"14/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:["The Priority aspect has no effect if it is specified for a subprogram other than the main subprogram; the Priority value is not associated with any task.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"15/5"}),"\n",(0,t.jsx)(d.A,{items:["AI12-0404-1"]}),"\n",(0,t.jsxs)("p",{children:["A ",(0,t.jsx)("em",{children:"task priority"})," is an integer value that indicates a degree of urgency and is the basis for resolving competing demands of tasks for resources. Unless otherwise specified, whenever tasks compete for processors or other implementation-defined resources, the resources are allocated to the task with the highest priority value. The ",(0,t.jsx)("em",{children:"base priority"})," of a task is the priority with which it was created, or to which it was later set by Dynamic","_","Priorities.Set","_","Priority (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.5",children:"D.5"}),"). At all times, a task also has an ",(0,t.jsx)("em",{children:"active priority"}),", which generally is its base priority unless it inherits a priority from other sources. ",(0,t.jsx)("em",{children:"Priority inheritance"})," is the process by which the priority of a task or other entity (for example, a protected object; see ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.3",children:"D.3"}),") is used in the evaluation of another task's active priority. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"15.a"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"implementation-defined",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{}),"Implementation-defined execution resources.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(h.A,{children:"16/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:["The effect of specifying a Priority or Interrupt","_","Priority aspect for a protected type or ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.4#S0250",children:"single_protected_declaration"})})," is discussed in ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.3",children:"D.3"}),".",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"17/4"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1","AI12-0081-1"]}),"\n",(0,t.jsxs)("p",{children:["The ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," specified for the Priority or Interrupt","_","Priority aspect of a task type is evaluated each time an object of the task type is created (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.1",children:"9.1"}),"). For the Priority aspect, the value of the ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-4/AA-4.4#S0132",children:"expression"})})," is converted to the subtype Priority; for the Interrupt","_","Priority aspect, this value is converted to the subtype Any","_","Priority. The priority value is then associated with the task object. ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"18/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:["Likewise, the priority value is associated with the environment task if the aspect is specified for the main subprogram.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"19/3"}),"\n",(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),"\n",(0,t.jsxs)("p",{children:["The initial value of a task's base priority is specified by default or by means of a Priority or Interrupt","_","Priority aspect. [After a task is created, its base priority can be changed only by a call to Dynamic","_","Priorities.Set","_","Priority (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.5",children:"D.5"}),").] The initial base priority of a task in the absence of an aspect is the base priority of the task that creates it at the time of creation (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.1",children:"9.1"}),"). If the aspect Priority is not specified for the main subprogram, the initial base priority of the environment task is System.Default","_","Priority. [The task's active priority is used when the task competes for processors. Similarly, the task's active priority is used to determine the task's position in any queue when Priority","_","Queuing is specified (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.4",children:"D.4"}),").]",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"20/2"}),"\n",(0,t.jsx)(d.A,{items:["AI95-00357-01"]}),"\n",(0,t.jsxs)("p",{children:["At any time, the active priority of a task is the maximum of all the priorities the task is inheriting at that instant. For a task that is not held (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.11",children:"D.11"}),"), its base priority is a source of priority inheritance unless otherwise specified for a particular task dispatching policy. Other sources of priority inheritance are specified under the following conditions: ",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"20.a"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"discussion",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{}),"Other parts of the annex, e.g. ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.11",children:"D.11"}),", define other sources of priority inheritance. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(h.A,{children:"21/1"}),"\n",(0,t.jsx)(d.A,{items:["AI95-00092-01"]}),"\n",(0,t.jsxs)("ul",{children:[(0,t.jsxs)("li",{children:["{",(0,t.jsx)("em",{children:"8652/0072"}),"}"," During activation, a task being activated inherits the active priority that its activator (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.2",children:"9.2"}),") had at the time the activation was initiated.",(0,t.jsx)("br",{})]}),(0,t.jsx)(h.A,{children:"22/1"}),(0,t.jsx)(d.A,{items:["AI95-00092-01"]}),(0,t.jsxs)("li",{children:["{",(0,t.jsx)("em",{children:"8652/0072"}),"}"," During rendezvous, the task accepting the entry call inherits the priority of the entry call (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.5#Subclause_9.5.3",children:"9.5.3"})," and ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.4",children:"D.4"}),").",(0,t.jsx)("br",{})]}),(0,t.jsx)(h.A,{children:"22.1/5"}),(0,t.jsx)(d.A,{items:["AI12-0276-1"]}),(0,t.jsxs)("li",{children:["While starting a protected action on a protected object when the FIFO","_","Spinning admission policy is in effect, a task inherits the ceiling priority of the protected object (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.5",children:"9.5"}),", ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.3",children:"D.3"}),", and ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.4#Subclause_D.4.1",children:"D.4.1"}),").",(0,t.jsx)("br",{})]})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"22.a/5"}),(0,t.jsx)(d.A,{items:["AI12-0005-1","AI12-0276-1"]}),(0,t.jsx)(a.A,{type:"aarm",aarm:"reason",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{}),"Priority inheritance is needed for FIFO","_","Spinning to ensure that lower priority tasks that initiate spin waiting earlier than other higher priority tasks continue to spin to ensure that they can be granted the resource when it becomes available in order to support FIFO ordering. Note that this rule only matters when tasks that can initiate a protected action on an object P can be on a different processor than P. In particular, this rule does not matter on a monoprocessor. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(h.A,{children:"23/5"}),"\n",(0,t.jsx)(d.A,{items:["AI12-0404-1"]}),"\n",(0,t.jsx)("ul",{children:(0,t.jsxs)("li",{children:["While a task executes a protected action on a protected object, the task inherits the ceiling priority of the protected object (see ",(0,t.jsx)("a",{href:"/docs/arm/AA-9/AA-9.5",children:"9.5"})," and ",(0,t.jsx)("a",{href:"/docs/arm/AA-D/AA-D.3",children:"D.3"}),").",(0,t.jsx)("br",{})]})}),"\n",(0,t.jsx)(h.A,{children:"24"}),"\n",(0,t.jsxs)("p",{children:["In all of these cases, the priority ceases to be inherited as soon as the condition calling for the inheritance no longer exists.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(i.h4,{id:"implementation-requirements",children:"Implementation Requirements"}),"\n",(0,t.jsx)(h.A,{children:"25"}),"\n",(0,t.jsxs)("p",{children:["The range of System.Interrupt","_","Priority shall include at least one value.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsx)(h.A,{children:"26"}),"\n",(0,t.jsxs)("p",{children:["The range of System.Priority shall include at least 30 values.",(0,t.jsx)("br",{})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"27"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["NOTE 1   The priority expression can include references to discriminants of the enclosing type.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"28"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["NOTE 2   It is a consequence of the active priority rules that at the point when a task stops inheriting a priority from another source, its active priority is re-evaluated. This is in addition to other instances described in this Annex for such re-evaluation.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29/5"}),(0,t.jsx)(d.A,{items:["AI05-0248-1","AI12-0440-1"]}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["NOTE 3   An implementation can provide a nonstandard mode in which tasks inherit priorities under conditions other than those specified above. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.a/3"}),(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),(0,t.jsx)(a.A,{type:"aarm",aarm:"ramification",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{}),"The use of a Priority or Interrupt","_","Priority aspect does not require the package System to be named in a ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0294",children:"with_clause"})})," for the enclosing ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-10/AA-10.1#S0286",children:"compilation_unit"})}),". ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsx)(i.h4,{id:"extensions-to-ada-83",children:"Extensions to Ada 83"})}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.b"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["The priority of a task is per-object and not per-type.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.c"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["Priorities need not be static anymore (except for the main subprogram).",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsx)(i.h4,{id:"wording-changes-from-ada-83",children:"Wording Changes from Ada 83"})}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.d"}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["The description of the Priority pragma has been moved to this annex.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsx)(i.h4,{id:"wording-changes-from-ada-95",children:"Wording Changes from Ada 95"})}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.e/2"}),(0,t.jsx)(d.A,{items:["AI95-00092-01"]}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["{",(0,t.jsx)("em",{children:"8652/0072"}),"}"," ",(0,t.jsx)("strong",{children:"Corrigendum:"})," Clarified that dynamic priority changes are not transitive - that is, they don't apply to tasks that are being activated by or in rendezvous with the task that had its priority changed.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.f/2"}),(0,t.jsx)(d.A,{items:["AI95-00357-01"]}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["Generalized the definition of priority inheritance to take into account the differences between the existing and new dispatching policies. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsx)(i.h4,{id:"extensions-to-ada-2005",children:"Extensions to Ada 2005"})}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.g/3"}),(0,t.jsx)(d.A,{items:["AI05-0229-1"]}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["Aspects Priority and Interrupt","_","Priority are new; ",(0,t.jsx)("code",{children:(0,t.jsx)("a",{href:"/docs/arm/AA-2/AA-2.8#S0019",children:"pragma"})}),"s Priority and Interrupt","_","Priority are now obsolescent. ",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsx)(o.A,{children:(0,t.jsx)(i.h4,{id:"wording-changes-from-ada-2012",children:"Wording Changes from Ada 2012"})}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.h/4"}),(0,t.jsx)(d.A,{items:["AI12-0081-1"]}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:[(0,t.jsx)("strong",{children:"Corrigendum:"})," Clarified when the Priority and Interrupt","_","Priority aspect expressions are evaluated.",(0,t.jsx)("br",{})]})})]}),"\n",(0,t.jsxs)(o.A,{children:[(0,t.jsx)(h.A,{children:"29.i/5"}),(0,t.jsx)(d.A,{items:["AI12-0276-1"]}),(0,t.jsx)(a.A,{type:"aarm",aarm:"note",children:(0,t.jsxs)(i.p,{children:["Added an additional case of priority inheritance when the new admission policy FIFO","_","Spinning is in effect. ",(0,t.jsx)("br",{})]})})]})]})}function m(e={}){const{wrapper:i}={...(0,n.R)(),...e.components};return i?(0,t.jsx)(i,{...e,children:(0,t.jsx)(j,{...e})}):j(e)}}}]);