"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[6272],{960:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>_,contentTitle:()=>c,default:()=>k,frontMatter:()=>f,metadata:()=>h,toc:()=>A});var o=t(1716),r=t(7556),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,d=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,m=(e,n)=>{for(var t in n||(n={}))d.call(n,t)&&p(e,t,n[t]);if(u)for(var t of u(n))l.call(n,t)&&p(e,t,n[t]);return e};const f={sidebar_position:82},c="9.11 Example of Tasking and Synchronization",h={unversionedId:"arm/AA-9/AA-9.11",id:"arm/AA-9/AA-9.11",title:"9.11 Example of Tasking and Synchronization",description:"We're still working on the Reference manual output.  Internal links are broken,",source:"@site/docs/arm/AA-9/AA-9.11.mdx",sourceDirName:"arm/AA-9",slug:"/arm/AA-9/AA-9.11",permalink:"/docs/arm/AA-9/AA-9.11",draft:!1,tags:[],version:"current",sidebarPosition:82,frontMatter:{sidebar_position:82},sidebar:"referenceManualSidebar",previous:{title:"9.10 Shared Variables",permalink:"/docs/arm/AA-9/AA-9.10"},next:{title:"10 Program Structure and Compilation Issues",permalink:"/docs/arm/AA-10/"}},_={},A=[{value:"Examples",id:"examples",level:4}],P={toc:A};function k(e){var n,t=e,{components:a}=t,p=((e,n)=>{var t={};for(var o in e)d.call(e,o)&&n.indexOf(o)<0&&(t[o]=e[o]);if(null!=e&&u)for(var o of u(e))n.indexOf(o)<0&&l.call(e,o)&&(t[o]=e[o]);return t})(t,["components"]);return(0,o.kt)("wrapper",(n=m(m({},P),p),i(n,s({components:a,mdxType:"MDXLayout"}))),(0,o.kt)("h1",m({},{id:"911-example-of-tasking-and-synchronization"}),"9.11 Example of Tasking and Synchronization"),(0,o.kt)("admonition",m({},{type:"warning"}),(0,o.kt)("p",{parentName:"admonition"},"We're still working on the Reference manual output.  Internal links are broken,\nas are a bunch of other things.\nSee the ",(0,o.kt)("a",m({parentName:"p"},{href:"https://github.com/ada-lang-io/ada-lang-io/issues/20"}),"tracking issue"))),(0,o.kt)("h4",m({},{id:"examples"}),"Examples"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0440-1"),"}"," The following example defines a buffer protected object to smooth variations between the speed of output of a producing task and the speed of input of some consuming task. For instance, the producing task can have the following structure:",(0,o.kt)("br",null)),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"task Producer;","\n","--  ","{","AI95-00433-01","}","\n"," task body Producer is","\n","   Person : Person_Name; -- see 3.10.1","\n","begin","\n","   loop","\n","      ... --  simulate arrival of the next customer","\n","      Buffer.Append_Wait(Person);","\n","      exit when Person = null;","\n","   end loop;","\n","end Producer;","\n"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI12-0440-1"),"}"," and the consuming task can have the following structure:",(0,o.kt)("br",null)),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"task Consumer;","\n","--  ","{","AI95-00433-01","}","\n"," task body Consumer is","\n","   Person : Person_Name;","\n","begin","\n","   loop","\n","      Buffer.Remove_First_Wait(Person);","\n","      exit when Person = null;","\n","      ... --  simulate serving a customer","\n","   end loop;","\n","end Consumer;","\n"),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00433-01"),"}"," The buffer object contains an internal array of person names managed in a round-robin fashion. The array has two indices, an In_Index denoting the index for the next input person name and an Out_Index denoting the index for the next output person name.",(0,o.kt)("br",null)),(0,o.kt)("p",null,"{",(0,o.kt)("em",null,"AI95-00433-01"),"}"," The Buffer is defined as an extension of the Synchronized_Queue interface (see 3.9.4), and as such promises to implement the abstraction defined by that interface. By doing so, the Buffer can be passed to the Transfer class-wide operation defined for objects of a type covered by Queue'Class.",(0,o.kt)("br",null)),(0,o.kt)(r.Z,{mdxType:"CodeBlock"},"--  ","{","AI12-0178-1","}","\n"," type Person_Name_Array is array (Positive range ","<",">",")","\n","   of Person_Name;  -- see 3.10.1","\n","--  ","{","AI95-00433-01","}","\n"," protected Buffer is new Synchronized_Queue with  -- see 3.9.4","\n","   entry Append_Wait(Person : in Person_Name);","\n","   entry Remove_First_Wait(Person : out Person_Name);","\n","   function Cur_Count return Natural;","\n","   function Max_Count return Natural;","\n","   procedure Append(Person : in Person_Name);","\n","   procedure Remove_First(Person : out Person_Name);","\n","private","\n","   Pool      : Person_Name_Array(1 .. 100);","\n","   Count     : Natural := 0;","\n","   In_Index, Out_Index : Positive := 1;","\n","end Buffer;","\n","--  ","{","AI95-00433-01","}","\n"," protected body Buffer is","\n","   entry Append_Wait(Person : in Person_Name)","\n","      when Count ","<"," Pool'Length is","\n","   begin","\n","      Append(Person);","\n","   end Append_Wait;","\n","--  ","{","AI95-00433-01","}","\n","    procedure Append(Person : in Person_Name) is","\n","   begin","\n","      if Count = Pool'Length then","\n",'         raise Queue_Error with "Buffer Full";  -- see 11.3',"\n","      end if;","\n","      Pool(In_Index) := Person;","\n","      In_Index       := (In_Index mod Pool'Length) + 1;","\n","      Count          := Count + 1;","\n","   end Append;","\n","--  ","{","AI95-00433-01","}","\n","    entry Remove_First_Wait(Person : out Person_Name)","\n","      when Count ",">"," 0 is","\n","   begin","\n","      Remove_First(Person);","\n","   end Remove_First_Wait;","\n","--  ","{","AI95-00433-01","}","\n","    procedure Remove_First(Person : out Person_Name) is","\n","   begin","\n","      if Count = 0 then","\n",'         raise Queue_Error with "Buffer Empty"; -- see 11.3',"\n","      end if;","\n","      Person    := Pool(Out_Index);","\n","      Out_Index := (Out_Index mod Pool'Length) + 1;","\n","      Count     := Count - 1;","\n","   end Remove_First;","\n","--  ","{","AI95-00433-01","}","\n","    function Cur_Count return Natural is","\n","   begin","\n","       return Buffer.Count;","\n","   end Cur_Count;","\n","--  ","{","AI95-00433-01","}","\n","    function Max_Count return Natural is","\n","   begin","\n","       return Pool'Length;","\n","   end Max_Count;","\n","end Buffer;","\n"))}k.isMDXComponent=!0}}]);