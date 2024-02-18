"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[9090],{10237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>u,default:()=>k,frontMatter:()=>h,metadata:()=>g,toc:()=>f});var n=a(91716),l=Object.defineProperty,i=Object.defineProperties,r=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,d=(e,t)=>{for(var a in t||(t={}))s.call(t,a)&&c(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&c(e,a,t[a]);return e};const h={sidebar_position:1},u="Installation",g={unversionedId:"learn/getting-started/installation",id:"learn/getting-started/installation",title:"Installation",description:"An Ada development environment consists basically of a toolchain: an Ada compiler and a build manager. In the case of GNAT, the basic build manager gnatmake comes with the compiler, while a more capable one is the separate GNAT Project Manager gprbuild.",source:"@site/docs/learn/getting-started/installation.md",sourceDirName:"learn/getting-started",slug:"/learn/getting-started/installation",permalink:"/docs/learn/getting-started/installation",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Getting started",permalink:"/docs/category/getting-started"},next:{title:"Editors",permalink:"/docs/learn/getting-started/editors"}},m={},f=[{value:"Alire",id:"alire",level:2},{value:"Toolchain",id:"toolchain",level:2}],b={toc:f};function k(e){var t,a=e,{components:l}=a,c=((e,t)=>{var a={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&p.call(e,n)&&(a[n]=e[n]);return a})(a,["components"]);return(0,n.kt)("wrapper",(t=d(d({},b),c),i(t,r({components:l,mdxType:"MDXLayout"}))),(0,n.kt)("h1",d({},{id:"installation"}),"Installation"),(0,n.kt)("p",null,"An Ada development environment consists basically of a toolchain: an Ada compiler and a build manager. In the case of GNAT, the basic build manager ",(0,n.kt)("a",d({parentName:"p"},{href:"https://docs.adacore.com/live/wave/gnat_ugn/html/gnat_ugn/gnat_ugn/building_executable_programs_with_gnat.html#building-with-gnatmake"}),(0,n.kt)("inlineCode",{parentName:"a"},"gnatmake"))," comes with the compiler, while a more capable one is the separate GNAT Project Manager ",(0,n.kt)("a",d({parentName:"p"},{href:"https://docs.adacore.com/live/wave/gprbuild/html/gprbuild_ug/gprbuild_ug.html"}),(0,n.kt)("inlineCode",{parentName:"a"},"gprbuild")),"."),(0,n.kt)("p",null,"By far the easiest way to get hold of an Ada toolchain is to use the Ada package manager ",(0,n.kt)("a",d({parentName:"p"},{href:"https://alire.ada.dev/docs/#introduction"}),"Alire"),"."),(0,n.kt)("h2",d({},{id:"alire"}),"Alire"),(0,n.kt)("p",null,"The Alire website's ",(0,n.kt)("a",d({parentName:"p"},{href:"https://github.com/alire-project/alire/releases"}),"Releases page")," provides Intel builds:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"the current stable build, ",(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/alire-project/alire/releases/tag/v1.2.2"}),"v1.2.2"),","),(0,n.kt)("li",{parentName:"ul"},"the draft ",(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/alire-project/alire/releases/tag/v2.0.0-beta1"}),"v2.0.0 beta 1")," release,"),(0,n.kt)("li",{parentName:"ul"},"a ",(0,n.kt)("a",d({parentName:"li"},{href:"https://github.com/alire-project/alire/releases/tag/nightly"}),"nightly build"),".")),(0,n.kt)("p",null,"Any of these can be installed as described ",(0,n.kt)("a",d({parentName:"p"},{href:"https://alire.ada.dev/docs/#alr-on-macos"}),"here"),"; follow up with these ",(0,n.kt)("a",d({parentName:"p"},{href:"https://alire.ada.dev/docs/#first-steps"}),"first steps")," (this will have the added effect of installing a toolchain for you!)"),(0,n.kt)("h2",d({},{id:"toolchain"}),"Toolchain"),(0,n.kt)("p",null,"Once you have Alire installed, you have a choice of toolchains. You'll normally want to use the latest native toolchain (the one that generates code to run on the machine you're developing on)."),(0,n.kt)("p",null,(0,n.kt)("inlineCode",{parentName:"p"},"alr toolchain --select")," will present you with a list of choices, something like this:"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-none"}),"  1. gnat_native=13.2.1\n  2. None\n  3. gnat_arm_elf=13.2.1\n  4. gnat_avr_elf=13.2.1\n  5. gnat_riscv64_elf=13.2.1\n  6. gnat_arm_elf=13.1.0\n  7. gnat_avr_elf=13.1.0\n  8. gnat_native=13.1.0\n  9. gnat_riscv64_elf=13.1.0\n  0. gnat_arm_elf=12.2.1\n  a. (See more choices...)\nEnter your choice index (first is default):\n>\n")),(0,n.kt)("p",null,"Press ",(0,n.kt)("inlineCode",{parentName:"p"},"<return>")," to choose the latest compiler. The selection tool then looks for a matching ",(0,n.kt)("inlineCode",{parentName:"p"},"gprbuild"),":"),(0,n.kt)("pre",null,(0,n.kt)("code",d({parentName:"pre"},{className:"language-none"}),"Please select the gprbuild version for use with this configuration\n  1. gprbuild=22.0.1\n  2. None\n  3. gprbuild=21.0.2\n  4. gprbuild=21.0.1\nEnter your choice index (first is default):\n>\n")),(0,n.kt)("p",null,"Again, press ",(0,n.kt)("inlineCode",{parentName:"p"},"<return>"),". If necessary, Alire will download the selected tools and install them in the Alire environment."))}k.isMDXComponent=!0}}]);