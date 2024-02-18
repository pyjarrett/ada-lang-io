"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[1278],{21177:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>h,default:()=>b,frontMatter:()=>c,metadata:()=>k,toc:()=>f});var a=n(91716),i=Object.defineProperty,r=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,d=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))d.call(t,n)&&u(e,n,t[n]);return e};const c={sidebar_position:100},h="Issues",k={unversionedId:"learn/getting-started/macos-issues/issues",id:"learn/getting-started/macos-issues/issues",title:"Issues",description:"- Linking error",source:"@site/docs/learn/getting-started/macos-issues/issues.md",sourceDirName:"learn/getting-started/macos-issues",slug:"/learn/getting-started/macos-issues/issues",permalink:"/docs/learn/getting-started/macos-issues/issues",draft:!1,tags:[],version:"current",sidebarPosition:100,frontMatter:{sidebar_position:100},sidebar:"tutorialSidebar",previous:{title:"Crates for macOS",permalink:"/docs/learn/getting-started/macos-issues/crates"},next:{title:"Tips and Tricks",permalink:"/docs/category/tips-and-tricks"}},m={},f=[{value:'<a name="linking-error">Linking error</a>',id:"linking-error",level:2},{value:'<a name="unhandled-exceptions">Unhandled exceptions</a>',id:"unhandled-exceptions",level:2},{value:'<a name="transparent-solution">Transparent solution</a>',id:"transparent-solution",level:2},{value:'<a name="the-future">The future</a>',id:"the-future",level:2}],g={toc:f};function b(e){var t,n=e,{components:i}=n,u=((e,t)=>{var n={};for(var a in e)o.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&l)for(var a of l(e))t.indexOf(a)<0&&d.call(e,a)&&(n[a]=e[a]);return n})(n,["components"]);return(0,a.kt)("wrapper",(t=p(p({},g),u),r(t,s({components:i,mdxType:"MDXLayout"}))),(0,a.kt)("h1",p({},{id:"issues"}),"Issues"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#linking-error"}),"Linking error")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#unhandled-exceptions"}),"Unhandled exceptions")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#transparent-solution"}),"Transparent solution")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"#the-future"}),"The future"))),(0,a.kt)("h2",p({},{id:"linking-error"}),(0,a.kt)("a",{name:"linking-error"},"Linking error")),(0,a.kt)("p",null,"If you're running macOS 13.5 (Ventura) or later, you'll probably have been offered updates to version 15 of Xcode/the Command Line Tools. With version 15.0, we encountered the, rather fundamental, problem that all links failed, with a slew of messages including"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"ld: Assertion failed: (resultIndex < sectData.atoms.size()), function findAtom, file Relocations.cpp, line 1336.\n")),(0,a.kt)("p",null,"This happened because Apple had introduced a new linker (",(0,a.kt)("inlineCode",{parentName:"p"},"ld"),"). A workround for this issue turned out to be to use a version of the older linker included in the SDK, ",(0,a.kt)("inlineCode",{parentName:"p"},"ld-classic"),". You can tell ",(0,a.kt)("inlineCode",{parentName:"p"},"gprbuild")," or ",(0,a.kt)("inlineCode",{parentName:"p"},"gnatmake")," to do this from the command line by adding"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{}),"-largs -Wl,-ld_classic\n")),(0,a.kt)("p",null,"(notice the change from dash to underscore!) This fix doesn't work with older SDKs that don't have ",(0,a.kt)("inlineCode",{parentName:"p"},"ld-classic")," - they would interpret it as looking for a library ",(0,a.kt)("inlineCode",{parentName:"p"},"libd_classic"),"."),(0,a.kt)("p",null,"The updated SDKs (version 15.1) fixed this issue, so you no longer needed the workround."),(0,a.kt)("h2",p({},{id:"unhandled-exceptions"}),(0,a.kt)("a",{name:"unhandled-exceptions"},"Unhandled exceptions")),(0,a.kt)("p",null,"It turns out that there's a more subtle problem than the blatant failure to link: exception handling can be unreliable. If you get unhandled exceptions from code with a clearly visible exception handler, this is what's going on."),(0,a.kt)("p",null,"This issue is also solved by using the classic linker."),(0,a.kt)("h2",p({},{id:"transparent-solution"}),(0,a.kt)("a",{name:"transparent-solution"},"Transparent solution")),(0,a.kt)("p",null,"We have a solution which transparently invokes ",(0,a.kt)("inlineCode",{parentName:"p"},"ld-classic")," if it's present in the SDK. The solution is to place a 'shim' named ",(0,a.kt)("inlineCode",{parentName:"p"},"ld")," where GCC will look for it and invoke it instead of directly calling ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/bin/ld"),"."),(0,a.kt)("p",null,"The latest release of the installer can be found ",(0,a.kt)("a",p({parentName:"p"},{href:"https://github.com/simonjwright/xcode_15_fix/releases"}),"here"),"."),(0,a.kt)("h2",p({},{id:"the-future"}),(0,a.kt)("a",{name:"the-future"},"The future")),(0,a.kt)("p",null,"It turns out that the reason for the issue is that GCC mishandles the Darwin ABI by placing exception handling data in the wrong segment of the executable. This has been fixed in the GCC 14.0.1 pre-release, and it's hoped that it will be backported to GCC 13.3."))}b.isMDXComponent=!0}}]);