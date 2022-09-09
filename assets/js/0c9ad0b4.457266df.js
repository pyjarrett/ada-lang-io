"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[8206],{3312:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>f,contentTitle:()=>k,default:()=>A,frontMatter:()=>p,metadata:()=>y,toc:()=>b});var n=i(1716),o=i(7556),a=i(9464),r=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,i)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,h=(e,t)=>{for(var i in t||(t={}))c.call(t,i)&&u(e,i,t[i]);if(d)for(var i of d(t))m.call(t,i)&&u(e,i,t[i]);return e};const p={sidebar_position:156},k="D.5 Dynamic Priorities",y={unversionedId:"arm/AA-D/AA-D.5",id:"arm/AA-D/AA-D.5",title:"D.5 Dynamic Priorities",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-D/AA-D.5.mdx",sourceDirName:"arm/AA-D",slug:"/arm/AA-D/AA-D.5",permalink:"/docs/arm/AA-D/AA-D.5",draft:!1,tags:[],version:"current",sidebarPosition:156,frontMatter:{sidebar_position:156},sidebar:"referenceManualSidebar",previous:{title:"D.4 Entry Queuing Policies",permalink:"/docs/arm/AA-D/AA-D.4"},next:{title:"D.6 Preemptive Abort",permalink:"/docs/arm/AA-D/AA-D.6"}},f={},b=[{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95",level:4},{value:"D.5.1  Dynamic Priorities for Tasks",id:"d51--dynamic-priorities-for-tasks",level:2},{value:"Static Semantics",id:"static-semantics",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics",level:4},{value:"Erroneous Execution",id:"erroneous-execution",level:4},{value:"Documentation Requirements",id:"documentation-requirements",level:4},{value:"Metrics",id:"metrics",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95",level:4},{value:"Wording Changes from Ada 95",id:"wording-changes-from-ada-95-1",level:4},{value:"D.5.2  Dynamic Priorities for Protected Objects",id:"d52--dynamic-priorities-for-protected-objects",level:2},{value:"Static Semantics",id:"static-semantics-1",level:4},{value:"Dynamic Semantics",id:"dynamic-semantics-1",level:4},{value:"Metrics",id:"metrics-1",level:4},{value:"Extensions to Ada 95",id:"extensions-to-ada-95-1",level:4},{value:"Extensions to Ada 2012",id:"extensions-to-ada-2012",level:4}],g={toc:b};function A(e){var t,i=e,{components:r}=i,u=((e,t)=>{var i={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(i[n]=e[n]);if(null!=e&&d)for(var n of d(e))t.indexOf(n)<0&&m.call(e,n)&&(i[n]=e[n]);return i})(i,["components"]);return(0,n.kt)("wrapper",(t=h(h({},g),u),l(t,s({components:r,mdxType:"MDXLayout"}))),(0,n.kt)("h1",h({},{id:"d5-dynamic-priorities"}),"D.5 Dynamic Priorities"),(0,n.kt)("admonition",h({},{type:"warning"}),(0,n.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,n.kt)("a",h({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," [This subclause describes how the priority of an entity can be modified or queried at run time.] ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"wording-changes-from-ada-95"}),"Wording Changes from Ada 95"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," This subclause is turned into two subclauses. This subclause introduction is new. ",(0,n.kt)("br",null)),(0,n.kt)("h2",h({},{id:"d51--dynamic-priorities-for-tasks"}),"D.5.1  Dynamic Priorities for Tasks"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," [This subclause describes how the base priority of a task can be modified or queried at run time.] ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"static-semantics"}),"Static Semantics"),(0,n.kt)("p",null,"The following language-defined library package exists: ",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{mdxType:"CodeBlock"},"--  ","{","AI95-00362-01","}","\n"," --  ","{","AI12-0241-1","}","\n"," --  ","{","AI12-0302-1","}","\n"," with System;","\n","with Ada.Task_Identification; -- See C.7.1","\n","package Ada.Dynamic_Priorities","\n","    with Preelaborate, Nonblocking, Global =",">"," in out synchronized is","\n","procedure Set_Priority(Priority : in System.Any_Priority;","\n","                           T : in Ada.Task_Identification.Task_Id :=","\n","                           Ada.Task_Identification.Current_Task);","\n","function Get_Priority (T : Ada.Task_Identification.Task_Id :=","\n","                           Ada.Task_Identification.Current_Task)","\n","                           return System.Any_Priority;","\n","end Ada.Dynamic_Priorities;","\n"),(0,n.kt)("h4",h({},{id:"dynamic-semantics"}),"Dynamic Semantics"),(0,n.kt)("p",null,"The procedure Set_Priority sets the base priority of the specified task to the specified Priority value. Set_Priority has no effect if the task is terminated.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"The function Get_Priority returns T's current base priority. Tasking_Error is raised if the task is terminated. ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"There is no harm in setting the priority of a terminated task. A previous version of Ada 9X made this a run-time error. However, there is little difference between setting the priority of a terminated task, and setting the priority of a task that is about to terminate very soon; neither case should be an error. Furthermore, the runtime check is not necessarily feasible to implement on all systems, since priority changes might be deferred due to inter-processor communication overhead, so the error might not be detected until after Set_Priority has returned.",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},'However, we wish to allow implementations to avoid storing "extra" information about terminated tasks. Therefore, we make Get_Priority of a terminated task raise an exception; the implementation need not continue to store the priority of a task that has terminated. ',(0,n.kt)("br",null)),(0,n.kt)("p",null,"Program_Error is raised by Set_Priority and Get_Priority if T is equal to Null_Task_Id.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00188-02"),"}"," On a system with a single processor, the setting of the base priority of a task ",(0,n.kt)("em",null,"T")," to the new value occurs immediately at the first point when ",(0,n.kt)("em",null,"T")," is outside the execution of a protected action.",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"implementation-note",title:"Implementation Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"{",(0,n.kt)("em",null,"AI95-00188-02"),"}"," The priority change is immediate if the target task is on a delay queue or a ready queue outside of a protected action. However, consider when Set_Priority is called by a task T1 to set the priority of T2, if T2 is blocked, waiting on an entry call queued on a protected object, the entry queue needs to be reordered. Since T1 might have a priority that is higher than the ceiling of the protected object, T1 cannot, in general, do the reordering. One way to implement this is to wake T2 up and have T2 do the work. This is similar to the disentangling of queues that needs to happen when a high-priority task aborts a lower-priority task, which might have a call queued on a protected object with a low ceiling. We have an Implementation Permission in D.4 to allow this implementation. We could have required an immediate priority change if on a ready queue during a protected action, but that would have required extra checks for ceiling violations to meet Bounded (Run-Time) Error requirements of D.3 and potentially could cause a protected action to be abandoned in the middle (by raising Program_Error). That seems bad. ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"reason",title:"Reason: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"A previous version of Ada 9X made it a run-time error for a high-priority task to set the priority of a lower-priority task that has a queued call on a protected object with a low ceiling. This was changed because: ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"The check was not feasible to implement on all systems, since priority changes might be deferred due to inter-processor communication overhead. The calling task would continue to execute without finding out whether the operation succeeded or not.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"The runtime check would tend to cause intermittent system failures - how is the caller supposed to know whether the other task happens to have a queued call at any given time? Consider for example an interrupt that needs to trigger a priority change in some task. The interrupt handler could not safely call Set_Priority without knowing exactly what the other task is doing, or without severely restricting the ceilings used in the system. If the interrupt handler wants to hand the job off to a third task whose job is to call Set_Priority, this won't help, because one would normally want the third task to have high priority. ",(0,n.kt)("br",null)),(0,n.kt)("p",null,(0,n.kt)("em",null,"Paragraph 11 was deleted.")," ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"erroneous-execution"}),"Erroneous Execution"),(0,n.kt)("p",null,"If any subprogram in this package is called with a parameter T that specifies a task object that no longer exists, the execution of the program is erroneous. ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"ramification",title:"Ramification: ",mdxType:"Admonition"},(0,n.kt)("strong",null),"Note that this rule overrides the above rule saying that Program_Error is raised on Get_Priority of a terminated task. If the task object still exists, and the task is terminated, Get_Priority raises Program_Error. However, if the task object no longer exists, calling Get_Priority causes erroneous execution. ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"documentation-requirements"}),"Documentation Requirements"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00188-02"),"}"," On a multiprocessor, the implementation shall document any conditions that cause the completion of the setting of the priority of a task to be delayed later than what is specified for a single processor. ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null,"Documentation Requirement: "),"Any conditions that cause the completion of the setting of the priority of a task to be delayed for a multiprocessor.",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"metrics"}),"Metrics"),(0,n.kt)("p",null,"The implementation shall document the following metric: ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"The execution time of a call to Set_Priority, for the nonpreempting case, in processor clock cycles. This is measured for a call that modifies the priority of a ready task that is not running (which cannot be the calling one), where the new base priority of the affected task is lower than the active priority of the calling task, and the affected task is not on any entry queue and is not executing a protected operation. ",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null,"Documentation Requirement: "),"The metrics for Set_Priority.",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ","{",(0,n.kt)("em",null,"AI95-00321-01"),"}"," Setting a task's base priority affects task dispatching. First, it can change the task's active priority. Second, under the FIFO_Within_Priorities policy it always causes the task to move to the tail of the ready queue corresponding to its active priority, even if the new base priority is unchanged.",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 2   Under the priority queuing policy, setting a task's base priority has an effect on a queued entry call if the task is blocked waiting for the call. That is, setting the base priority of a task causes the priority of a queued entry call from that task to be updated and the call to be removed and then reinserted in the entry queue at the new priority (see D.4), unless the call originated from the ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0282"},"triggering_statement"))," of an ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-9/AA-9.7#S0280"},"asynchronous_select")),".",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 3   The effect of two or more Set_Priority calls executed in parallel on the same task is defined as executing these calls in some serial order.",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"proof",title:"Proof: ",mdxType:"Admonition"},(0,n.kt)("strong",null),'This follows from the general reentrancy requirements stated near the beginning of Annex A, "Predefined Language Environment". ',(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 4   ","{",(0,n.kt)("em",null,"AI05-0092-1"),"}"," The rule for when Tasking_Error is raised for Set_Priority or Get_Priority is different from the rule for when Tasking_Error is raised on an entry call (see 9.5.3). In particular, querying the priority of a completed or an abnormal task is allowed, so long as the task is not yet terminated, and setting the priority of a task is allowed for any task state (including for terminated tasks).",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 5   ","{",(0,n.kt)("em",null,"AI12-0442-1"),"}"," Changing the priorities of a set of tasks can be performed by a series of calls to Set_Priority for each task separately. This can be done reliably within a protected operation that has high enough ceiling priority to guarantee that the operation completes without being preempted by any of the affected tasks.",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"extensions-to-ada-95"}),"Extensions to Ada 95"),(0,n.kt)(a.Z,{type:"aarm",aarm:"correction",title:"Correction:",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00188-02"),"}"," ",(0,n.kt)("strong",null,"Amendment ")," Priority changes are now required to be done immediately so long as the target task is not on an entry queue.",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00362-01"),"}"," Dynamic_Priorities is now Preelaborated, so it can be used in preelaborated units. ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"wording-changes-from-ada-95-1"}),"Wording Changes from Ada 95"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," This Ada 95 subclause was moved down a level. The paragraph numbers are the same as those for D.5 in Ada 95.",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00321-01"),"}",' There is no "standard" policy anymore, so that phrase was replaced by the name of a specific policy in the notes.',(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," The bounded error for the priority of a task being higher than the ceiling of an object it is currently in was moved to D.3, so that it applies no matter how the situation arises. ",(0,n.kt)("br",null)),(0,n.kt)("h2",h({},{id:"d52--dynamic-priorities-for-protected-objects"}),"D.5.2  Dynamic Priorities for Protected Objects"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0299-1"),"}"," This subclause specifies how the priority of a protected object can be modified or queried at run time. ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"static-semantics-1"}),"Static Semantics"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI12-0230-1"),"}"," The following attributes are defined for a ",(0,n.kt)("code",null,(0,n.kt)("a",{href:"../AA-4/AA-4.1#S0093"},"prefix"))," P that denotes a protected object:",(0,n.kt)("br",null)),(0,n.kt)("p",null,"P'Priority","{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," Denotes a non-aliased component of the protected object P. This component is of type System.Any_Priority and its value is the priority of P. P'Priority denotes a variable if and only if P denotes a variable. A reference to this attribute shall appear only within the body of P.",(0,n.kt)("br",null)),(0,n.kt)("p",null,"P'Relative_Deadline","{",(0,n.kt)("em",null,"AI12-0230-1"),"}"," Denotes a non-aliased component of the protected object P. This component is of type Ada.Real_Time.Time_Span and its value is the relative deadline of P. P'Relative_Deadline denotes a variable if and only if P denotes a variable. A reference to this attribute shall appear only within the body of P. ",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI12-0230-1"),"}"," The initial value of the attribute Priority is determined by the initial value of the priority of the protected object (see D.3)[, and can be changed by an assignment]. The initial value of the attribute Relative_Deadline is determined by the initial value of the relative deadline of the protected object (see D.3)[, and can be changed by an assignment]. ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"dynamic-semantics-1"}),"Dynamic Semantics"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0264-1"),"}"," If the locking policy Ceiling_Locking (see D.3) is in effect, then the ceiling priority of a protected object ",(0,n.kt)("em",null,"P")," is set to the value of ",(0,n.kt)("em",null,"P"),"'Priority at the end of each protected action of ",(0,n.kt)("em",null,"P"),".",(0,n.kt)("br",null)),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00445-01"),"}"," ","{",(0,n.kt)("em",null,"AI05-0229-1"),"}"," If the locking policy Ceiling_Locking is in effect, then for a protected object ",(0,n.kt)("em",null,"P")," with either an Attach_Handler or Interrupt_Handler aspect specified for one of its procedures, a check is made that the value to be assigned to ",(0,n.kt)("em",null,"P"),"'Priority is in the range System.Interrupt_Priority. If the check fails, Program_Error is raised. ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"metrics-1"}),"Metrics"),(0,n.kt)("p",null,"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," The implementation shall document the following metric:",(0,n.kt)("br",null)),(0,n.kt)("p",null,"The difference in execution time of calls to the following procedures in protected object P:",(0,n.kt)("br",null)),(0,n.kt)(o.Z,{mdxType:"CodeBlock"},"protected P is","\n","   procedure Do_Not_Set_Ceiling (Pr : System.Any_Priority);","\n","   procedure Set_Ceiling (Pr : System.Any_Priority);","\n","end P;","\n","protected body P is","\n","   procedure Do_Not_Set_Ceiling (Pr : System.Any_Priority) is","\n","   begin","\n","      null;","\n","   end;","\n","   procedure Set_Ceiling (Pr : System.Any_Priority) is","\n","   begin","\n","      P'Priority := Pr;","\n","   end;","\n","end P;","\n"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},(0,n.kt)("strong",null,"Documentation Requirement: "),"The metrics for setting the priority of a protected object.",(0,n.kt)("br",null)),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"NOTE 1   ","{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," Since P'Priority is a normal variable, the value following an assignment to the attribute immediately reflects the new value even though its impact on the ceiling priority of P is postponed until completion of the protected action in which it is executed. ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"extensions-to-ada-95-1"}),"Extensions to Ada 95"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI95-00327-01"),"}"," ","{",(0,n.kt)("em",null,"AI95-00445-01"),"}"," The ability to dynamically change and query the priority of a protected object is new. ",(0,n.kt)("br",null)),(0,n.kt)("h4",h({},{id:"extensions-to-ada-2012"}),"Extensions to Ada 2012"),(0,n.kt)(a.Z,{type:"aarm",aarm:"note",title:"Note: ",mdxType:"Admonition"},"{",(0,n.kt)("em",null,"AI12-0230-1"),"}"," The ability to dynamically change and query the relative deadline of a protected object is new. ",(0,n.kt)("br",null)))}A.isMDXComponent=!0}}]);