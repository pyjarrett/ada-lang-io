"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8206],{3312:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>x,contentTitle:()=>T,default:()=>Z,frontMatter:()=>f,metadata:()=>g,toc:()=>A});var n=i(1716),a=i(3050),r=i(3989),o=i(8604),s=i(7318),d=i(4768),l=Object.defineProperty,m=Object.defineProperties,c=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,h=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,k=(e,t)=>{for(var i in t||(t={}))p.call(t,i)&&u(e,i,t[i]);if(y)for(var i of y(t))h.call(t,i)&&u(e,i,t[i]);return e};const f={sidebar_position:159},T="D.5 Dynamic Priorities",g={unversionedId:"arm/AA-D/AA-D.5",id:"arm/AA-D/AA-D.5",title:"D.5 Dynamic Priorities",description:"This Reference Manual output has not been verified,",source:"@site/docs/arm/AA-D/AA-D.5.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.5",permalink:"/docs/arm/AA-D/AA-D.5",draft:!1,tags:[],version:"current",sidebarPosition:159,frontMatter:{sidebar_position:159},sidebar:"referenceManualSidebar",previous:{title:"D.4 Entry Queuing Policies",permalink:"/docs/arm/AA-D/AA-D.4"},next:{title:"D.6 Preemptive Abort",permalink:"/docs/arm/AA-D/AA-D.6"}},x={},A=[{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"D.5.1  Dynamic Priorities for Tasks",id:"d51--dynamic-priorities-for-tasks",level:2},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Erroneous Execution",id:"erroneous-execution",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95-1",level:4},{value:"D.5.2  Dynamic Priorities for Protected Objects",id:"d52--dynamic-priorities-for-protected-objects",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Metrics",id:"metrics-1",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],b={toc:A};function Z(e){var t,i=e,{components:l}=i,u=((e,t)=>{var i={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&y)for(var n of y(e))t.indexOf(n)<0&&h.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=k(k({},b),u),m(t,c({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",k({},{id:"d5-dynamic-priorities"}),"D.5 Dynamic Priorities"),(0,n.kt)("admonition",k({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"This Reference Manual output has not been verified,\nand may contain omissions or errors.\nReport any problems on the ",(0,n.kt)("a",k({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)(s.Z,{mdxType:"MarginText"},"1/3"),(0,n.kt)(d.Z,{items:["AI95-00327-01","AI05-0299-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"[This subclause describes how the priority of an entity can be modified or queried at run time.] ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)("h4",k({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95")),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"1.a/3"),(0,n.kt)(d.Z,{items:["AI95-00327-01","AI05-0299-1"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"This subclause is turned into two subclauses. This subclause introduction is new. ",(0,n.kt)("br",null))),(0,n.kt)("a",{id:"Subclause_D.5.1"}),(0,n.kt)("h2",k({},{id:"d51--dynamic-priorities-for-tasks"}),"D.5.1  Dynamic Priorities for Tasks"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"1/3"),(0,n.kt)(d.Z,{items:["AI05-0299-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"[This subclause describes how the base priority of a task can be modified or queried at run time.] ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"2"),(0,n.kt)("p",null,"The following language-defined library package exists: ",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"3/5"),(0,n.kt)(d.Z,{items:["AI95-00362-01","AI12-0241-1","AI12-0302-1"],mdxType:"MarginInfo"}),(0,n.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"with System;","\n","with Ada.Task_Identification; -- See ",(0,n.kt)("a",{href:"../AA-C/AA-C.7#Subclause_C.7.1"},"C.7.1"),"\n","package Ada.Dynamic_Priorities ","\n","    with  Preelaborate, Nonblocking, Global =",">"," in out synchronized is ","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"4"),"procedure Set_Priority(Priority : in System.Any_Priority;","\n","                           T : in Ada.Task_Identification.Task_Id :=","\n","                           Ada.Task_Identification.Current_Task);","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"5"),"function Get_Priority (T : Ada.Task_Identification.Task_Id :=","\n","                           Ada.Task_Identification.Current_Task)","\n","                           return System.Any_Priority;","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"6"),"end Ada.Dynamic_Priorities;","\n"),(0,n.kt)("h4",k({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"7"),(0,n.kt)("p",null,"The procedure Set_Priority sets the base priority of the specified task to the specified Priority value. Set_Priority has no effect if the task is terminated.",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"8"),(0,n.kt)("p",null,"The function Get_Priority returns T's current base priority. Tasking_Error is raised if the task is terminated. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"8.a"),(0,n.kt)(a.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,n.kt)("strong",null),"There is no harm in setting the priority of a terminated task. A previous version of Ada 9X made this a run-time error. However, there is little difference between setting the priority of a terminated task, and setting the priority of a task that is about to terminate very soon; neither case should be an error. Furthermore, the runtime check is not necessarily feasible to implement on all systems, since priority changes might be deferred due to inter-processor communication overhead, so the error might not be detected until after Set_Priority has returned.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"8.b"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"However, we wish to allow implementations to avoid storing \u201cextra\u201d information about terminated tasks. Therefore, we make Get_Priority of a terminated task raise an exception; the implementation need not continue to store the priority of a task that has terminated. ",(0,n.kt)("br",null))),(0,n.kt)(s.Z,{mdxType:"MarginText"},"9"),(0,n.kt)("p",null,"Program_Error is raised by Set_Priority and Get_Priority if T is equal to Null_Task_Id.",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"10/2"),(0,n.kt)(d.Z,{items:["AI95-00188-02"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"On a system with a single processor, the setting of the base priority of a task ",(0,n.kt)("em",null,"T")," to the new value occurs immediately at the first point when ",(0,n.kt)("em",null,"T")," is outside the execution of a protected action.",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"10.a/2"),(0,n.kt)(d.Z,{items:["AI95-00188-02"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"implementation-note",mdxType:"Admonition"},(0,n.kt)("strong",null),"The priority change is immediate if the target task is on a delay queue or a ready queue outside of a protected action. However, consider when Set_Priority is called by a task T1 to set the priority of T2, if T2 is blocked, waiting on an entry call queued on a protected object, the entry queue needs to be reordered. Since T1 might have a priority that is higher than the ceiling of the protected object, T1 cannot, in general, do the reordering. One way to implement this is to wake T2 up and have T2 do the work. This is similar to the disentangling of queues that needs to happen when a high-priority task aborts a lower-priority task, which might have a call queued on a protected object with a low ceiling. We have an Implementation Permission in ",(0,n.kt)("a",{href:"../AA-D/AA-D.4"},"D.4")," to allow this implementation. We could have required an immediate priority change if on a ready queue during a protected action, but that would have required extra checks for ceiling violations to meet Bounded (Run-Time) Error requirements of ",(0,n.kt)("a",{href:"../AA-D/AA-D.3"},"D.3")," and potentially could cause a protected action to be abandoned in the middle (by raising Program_Error). That seems bad. ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"10.b"),(0,n.kt)(a.Z,{type:"aarm",aarm:"reason",mdxType:"Admonition"},(0,n.kt)("strong",null),"A previous version of Ada 9X made it a run-time error for a high-priority task to set the priority of a lower-priority task that has a queued call on a protected object with a low ceiling. This was changed because: ",(0,n.kt)("br",null))),(0,n.kt)(s.Z,{mdxType:"MarginText"},"10.c"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"The check was not feasible to implement on all systems, since priority changes might be deferred due to inter-processor communication overhead. The calling task would continue to execute without finding out whether the operation succeeded or not.",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"10.d"),(0,n.kt)("li",null,"The runtime check would tend to cause intermittent system failures \u2014 how is the caller supposed to know whether the other task happens to have a queued call at any given time? Consider for example an interrupt that needs to trigger a priority change in some task. The interrupt handler could not safely call Set_Priority without knowing exactly what the other task is doing, or without severely restricting the ceilings used in the system. If the interrupt handler wants to hand the job off to a third task whose job is to call Set_Priority, this won't help, because one would normally want the third task to have high priority. ",(0,n.kt)("br",null))),(0,n.kt)("p",null,(0,n.kt)("em",null,"Paragraph 11 was deleted.")," ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"erroneous-execution"}),"Erroneous Execution"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"12"),(0,n.kt)("p",null,"If any subprogram in this package is called with a parameter T that specifies a task object that no longer exists, the execution of the program is erroneous. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"12.a"),(0,n.kt)(a.Z,{type:"aarm",aarm:"ramification",mdxType:"Admonition"},(0,n.kt)("strong",null),"Note that this rule overrides the above rule saying that Program_Error is raised on Get_Priority of a terminated task. If the task object still exists, and the task is terminated, Get_Priority raises Program_Error. However, if the task object no longer exists, calling Get_Priority causes erroneous execution. ",(0,n.kt)("br",null))),(0,n.kt)("h4",k({},{id:"documentation-requirements"}),"Documentation Requirements"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"12.1/2"),(0,n.kt)(d.Z,{items:["AI95-00188-02"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"On a multiprocessor, the implementation shall document any conditions that cause the completion of the setting of the priority of a task to be delayed later than what is specified for a single processor. ",(0,n.kt)("br",null)),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"12.a.1/2"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,n.kt)("strong",null,"Documentation Requirement: "),"Any conditions that cause the completion of the setting of the priority of a task to be delayed for a multiprocessor.",(0,n.kt)("br",null))),(0,n.kt)("h4",k({},{id:"metrics"}),"Metrics"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"13"),(0,n.kt)("p",null,"The implementation shall document the following metric: ",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"14"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"The execution time of a call to Set_Priority, for the nonpreempting case, in processor clock cycles. This is measured for a call that modifies the priority of a ready task that is not running (which cannot be the calling one), where the new base priority of the affected task is lower than the active priority of the calling task, and the affected task is not on any entry queue and is not executing a protected operation. ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"14.a/2"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,n.kt)("strong",null,"Documentation Requirement: "),"The metrics for Set_Priority.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"15/2"),(0,n.kt)(d.Z,{items:["AI95-00321-01"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   Setting a task's base priority affects task dispatching. First, it can change the task's active priority. Second, under the FIFO_Within_Priorities policy it always causes the task to move to the tail of the ready queue corresponding to its active priority, even if the new base priority is unchanged.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"16"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 2   Under the priority queuing policy, setting a task's base priority has an effect on a queued entry call if the task is blocked waiting for the call. That is, setting the base priority of a task causes the priority of a queued entry call from that task to be updated and the call to be removed and then reinserted in the entry queue at the new priority (see ",(0,n.kt)("a",{href:"../AA-D/AA-D.4"},"D.4"),"), unless the call originated from the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," of an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),".",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"17"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 3   The effect of two or more Set_Priority calls executed in parallel on the same task is defined as executing these calls in some serial order.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"17.a"),(0,n.kt)(a.Z,{type:"aarm",aarm:"proof",mdxType:"Admonition"},(0,n.kt)("strong",null),"This follows from the general reentrancy requirements stated near the beginning of ",(0,n.kt)("a",{href:"../AA-A/"},"Annex A"),", \u201c",(0,n.kt)("a",{href:"../AA-A/"},"Predefined Language Environment"),"\u201d. ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"18/3"),(0,n.kt)(d.Z,{items:["AI05-0092-1"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 4   The rule for when Tasking_Error is raised for Set_Priority or Get_Priority is different from the rule for when Tasking_Error is raised on an entry call (see ",(0,n.kt)("a",{href:"../AA-9/AA-9.5#Subclause_9.5.3"},"9.5.3"),"). In particular, querying the priority of a completed or an abnormal task is allowed, so long as the task is not yet terminated, and setting the priority of a task is allowed for any task state (including for terminated tasks).",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"19/5"),(0,n.kt)(d.Z,{items:["AI12-0442-1"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 5   Changing the priorities of a set of tasks can be performed by a series of calls to Set_Priority for each task separately. This can be done  reliably  within a protected operation that has high enough ceiling priority to guarantee that the operation completes without being preempted by any of the affected tasks.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)("h4",k({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95")),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"19.a/2"),(0,n.kt)(d.Z,{items:["AI95-00188-02"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"correction",mdxType:"Admonition"},(0,n.kt)("strong",null,"Amendment ")," Priority changes are now required to be done immediately so long as the target task is not on an entry queue.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"19.b/2"),(0,n.kt)(d.Z,{items:["AI95-00362-01"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"Dynamic_Priorities is now Preelaborated, so it can be used in preelaborated units. ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)("h4",k({},{id:"wording-changes-from-ada-95-1"}),"Wording Changes from Ada 95")),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"19.c/3"),(0,n.kt)(d.Z,{items:["AI95-00327-01","AI05-0299-1"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"This Ada 95 subclause was moved down a level. The paragraph numbers are the same as those for ",(0,n.kt)("a",{href:"../AA-D/AA-D.5"},"D.5")," in Ada 95.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"19.d/2"),(0,n.kt)(d.Z,{items:["AI95-00321-01"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"There is no \u201cstandard\u201d policy anymore, so that phrase was replaced by the name of a specific policy in the notes.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"19.e/2"),(0,n.kt)(d.Z,{items:["AI95-00327-01"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The bounded error for the priority of a task being higher than the ceiling of an object it is currently in was moved to ",(0,n.kt)("a",{href:"../AA-D/AA-D.3"},"D.3"),", so that it applies no matter how the situation arises. ",(0,n.kt)("br",null))),(0,n.kt)("a",{id:"Subclause_D.5.2"}),(0,n.kt)("h2",k({},{id:"d52--dynamic-priorities-for-protected-objects"}),"D.5.2  Dynamic Priorities for Protected Objects"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"1/3"),(0,n.kt)(d.Z,{items:["AI95-00327-01","AI05-0299-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"This subclause specifies how the priority of a protected object can be modified or queried at run time. ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"static-semantics-1"}),"Static Semantics"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"2/5"),(0,n.kt)(d.Z,{items:["AI95-00327-01","AI12-0230-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"The following attributes are  defined for a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," P that denotes a protected object:",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"3/2"),(0,n.kt)("dt",null,(0,n.kt)("br",null),"P'Priority"),(0,n.kt)(d.Z,{items:["AI95-00327-01"],mdxType:"MarginInfo"}),(0,n.kt)("dl",null,(0,n.kt)("dd",null,"Denotes a non-aliased component of the protected object P. This component is of type System.Any_Priority and its value is the priority of P. P'Priority denotes a variable if and only if P denotes a variable. A reference to this attribute shall appear only within the body of P.",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"3.1/5"),(0,n.kt)("dt",null,(0,n.kt)("br",null),"P'Relative_Deadline"),(0,n.kt)(d.Z,{items:["AI12-0230-1"],mdxType:"MarginInfo"}),(0,n.kt)("dd",null,"Denotes a non-aliased component of the protected object P. This component is of type Ada.Real_Time.Time_Span and its value is the relative deadline of P. P'Relative_Deadline denotes a variable if and only if P denotes a variable. A reference to this attribute shall appear only within the body of P. ",(0,n.kt)("br",null))),(0,n.kt)(s.Z,{mdxType:"MarginText"},"4/5"),(0,n.kt)(d.Z,{items:["AI95-00327-01","AI12-0230-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"The initial value of the  attribute Priority is determined by the initial value of the priority of the protected object (see ",(0,n.kt)("a",{href:"../AA-D/AA-D.3"},"D.3"),")[, and can be changed by an assignment]. The initial value of the attribute Relative_Deadline is determined by the initial value of the relative deadline of the protected object (see ",(0,n.kt)("a",{href:"../AA-D/AA-D.3"},"D.3"),")[, and can be changed by an assignment]. ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"dynamic-semantics-1"}),"Dynamic Semantics"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"5/3"),(0,n.kt)(d.Z,{items:["AI95-00327-01","AI05-0264-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"If the locking policy Ceiling_Locking (see ",(0,n.kt)("a",{href:"../AA-D/AA-D.3"},"D.3"),") is in effect, then the ceiling priority of a protected object ",(0,n.kt)("em",null,"P")," is set to the value of ",(0,n.kt)("em",null,"P"),"'Priority at the end of each protected action of ",(0,n.kt)("em",null,"P"),".",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"6/3"),(0,n.kt)(d.Z,{items:["AI95-00445-01","AI05-0229-1"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"If the locking policy Ceiling_Locking is in effect, then for a protected object ",(0,n.kt)("em",null,"P")," with either an Attach_Handler or Interrupt_Handler aspect specified for one of its procedures, a check is made that the value to be assigned to ",(0,n.kt)("em",null,"P"),"'Priority is in the range System.Interrupt_Priority. If the check fails, Program_Error is raised. ",(0,n.kt)("br",null)),(0,n.kt)("h4",k({},{id:"metrics-1"}),"Metrics"),(0,n.kt)(s.Z,{mdxType:"MarginText"},"7/2"),(0,n.kt)(d.Z,{items:["AI95-00327-01"],mdxType:"MarginInfo"}),(0,n.kt)("p",null,"The implementation shall document the following metric:",(0,n.kt)("br",null)),(0,n.kt)(s.Z,{mdxType:"MarginText"},"8/2"),(0,n.kt)("ul",null,(0,n.kt)("li",null,"The difference in execution time of calls to the following procedures in protected object P:",(0,n.kt)("br",null))),(0,n.kt)(s.Z,{mdxType:"MarginText"},"9/2"),(0,n.kt)(o.Z,{language:"ada",mdxType:"CodeBlock"},"protected P is","\n","   procedure Do_Not_Set_Ceiling (Pr : System.Any_Priority);","\n","   procedure Set_Ceiling (Pr : System.Any_Priority);","\n","end P;","\n",(0,n.kt)(s.Z,{mdxType:"MarginText"},"10/2"),"protected body P is","\n","   procedure Do_Not_Set_Ceiling (Pr : System.Any_Priority) is","\n","   begin","\n","      null;","\n","   end;","\n","   procedure Set_Ceiling (Pr : System.Any_Priority) is","\n","   begin","\n","      P'Priority := Pr;","\n","   end;","\n","end P;","\n"),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"10.a/2"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},(0,n.kt)("strong",null,"Documentation Requirement: "),"The metrics for setting the priority of a protected object.",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"11/2"),(0,n.kt)(d.Z,{items:["AI95-00327-01"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"NOTE 1   Since P'Priority is a normal variable, the value following an assignment to the attribute immediately reflects the new value even though its impact on the ceiling priority of P is postponed until completion of the protected action in which it is executed. ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)("h4",k({},{id:"extensions-to-ada-95-1"}),"Extensions to Ada 95")),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"11.a/2"),(0,n.kt)(d.Z,{items:["AI95-00327-01","AI95-00445-01"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The ability to dynamically change and query the priority of a protected object is new. ",(0,n.kt)("br",null))),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)("h4",k({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012")),(0,n.kt)(r.Z,{mdxType:"AnnotatedOnly"},(0,n.kt)(s.Z,{mdxType:"MarginText"},"11.b/5"),(0,n.kt)(d.Z,{items:["AI12-0230-1"],mdxType:"MarginInfo"}),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",mdxType:"Admonition"},"The ability to dynamically change and query the relative deadline of a protected object is new. ",(0,n.kt)("br",null))))}Z.isMDXComponent=!0}}]);