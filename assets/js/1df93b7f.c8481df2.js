"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[3237],{7163:(e,t,a)=>{a.r(t),a.d(t,{HomepageHeader:()=>oe,default:()=>ce,getInstallTarget:()=>re,gitHubProjectPage:()=>ne,gitHubReleasePage:()=>le,installTargets:()=>ae});var n=a(6687),l=a(860),r=a(1651),i=a(6198),o=a(3959),c=a(1591),s=a(5232),m=a(2322),d=a(2500),u=a(7567),p=a(1875),g=a(811),b=a(9133),E=a(8842),f=a(1873),h=a(9075),y=a(4461),v=a(584),w=a(8310),k=a(2981),x=a(9450),_=a(3820),N=a(7754);const S="timelineItemTitle_t46M",I="timeline_W6yk",P=new Map([["macos",{download:n.createElement(n.Fragment,null,n.createElement(p.x,{color:"dimmed"},"On macOS, remove the quarantine attribute to avoid getting a message suggesting to move the file to the bin because the developer cannot be verified:"),n.createElement(y.p,{language:"bash"},"xattr -d com.apple.quarantine bin/alr"))}]]);function A({children:e}){return n.createElement(p.x,{size:"sm",className:S},e)}function T(e){const t=(0,n.useCallback)((t=>{const a=(e,t)=>"button"===e.type&&null!==e.onclick||t>0&&null!==e.parentNode&&a(e.parentNode,t-1);null!==t.target&&a(t.target,2)&&e()}),[e]);return(0,N.O)("click",t)}function z(){var e,t;const a=(0,c.Z)(),i=(0,h.i)(),{alireVersion:s}=(0,o.eZ)("ada-lang-alire-version"),m=a&&ae.has(i)?i:null,d=null!=(e=ae.get(m))?e:null,u=null!==d?` for ${d.label}`:"",g=null!==d?re(s,d.urlSuffix):le,[b,E]=(0,n.useState)(-1),f=(0,n.useCallback)((()=>{E(0)}),[E]),w=(0,n.useCallback)((()=>{E(1)}),[E]),k=(0,n.useCallback)((()=>{E(2)}),[E]),N=(0,n.useCallback)((()=>{E(3)}),[E]),S=T(w),z=T(w),O=T(k),D=T(N),C=n.createElement("span",null," ","or view other options on the"," ",n.createElement(r.Z,{onClick:f,to:le},"release page"));return n.createElement(x.T,{active:b,bulletSize:32,lineWidth:3,className:I},n.createElement(x.T.Item,{bullet:n.createElement(v.tEr,{size:16}),title:n.createElement(A,null,"Download Alire")},n.createElement(_.K,{spacing:"sm"},n.createElement(p.x,{color:"dimmed"},"Download"," ",n.createElement(r.Z,{onClick:f,to:g},"Alire ",s,u),null!==d&&C,"."),null!==m&&(null==(t=P.get(m))?void 0:t.download))),n.createElement(x.T.Item,{bullet:n.createElement(l.fF,{size:12}),title:n.createElement(A,null,"Install toolchain")},n.createElement(_.K,{spacing:"sm"},n.createElement(y.p,{ref:S,language:"bash"},"alr toolchain --select"),n.createElement(p.x,{color:"dimmed"},"Select gnat_native and gprbuild."))),n.createElement(x.T.Item,{bullet:n.createElement(v.xoN,{size:16}),title:n.createElement(A,null,"Start coding")},n.createElement(_.K,{spacing:"sm"},n.createElement(p.x,{color:"dimmed"},"Create a crate:"),n.createElement(y.p,{ref:z,language:"bash"},"alr init --bin mycrate && cd mycrate"),n.createElement(p.x,{color:"dimmed"},"Build the crate:"),n.createElement(y.p,{ref:O,language:"bash"},"alr build"))),n.createElement(x.T.Item,{bullet:n.createElement(v.vB0,{size:16}),title:n.createElement(A,null,"Run your application")},n.createElement(_.K,{spacing:"sm"},n.createElement(y.p,{ref:D,language:"bash"},"alr run"))))}var O=a(4923);const D="features_mewZ",C="sectionWrapper_at2H",Z="spark_PAbP",R="description_CMvZ",U="itemWrapper_ESv2",W="itemDescription_fq1O",B="title_osQQ",G="subTitle_DsT5",K="itemIcon_hbuH",M="itemTitle_Aqew",L=JSON.parse('[{"title":"Ada","subTitle":"Readable, correct, performant","description":"Express intent with explicitness, describe properties with predicates and pre/post conditions, and import C/C++ functions or intrinsics.","columns":3,"items":[{"title":"Readable","description":["Express intent with explicitness and keywords over symbols and special structures.","Express concepts like meaning in integers. Use built-in design by contract with pre/post-conditions and invariants. Model problems with typechecks and range constraints."],"icon":"feat-readable"},{"title":"Correct","description":["Build with technology used in 40 years of reliability in planes, trains, and satellites.","Use the SPARK subset to formally verify part or all of your program, and integrate existing SPARK crates available in the Alire package manager."],"icon":"feat-correct"},{"title":"Performant","description":["Build native applications and take advantage of other libraries through binding to C and C++.","Use inline assembly or compiler intrinsics when you need it. Control resources with scope-based resource control (RAII) and your own memory allocators."],"icon":"feat-performant"}]},{"title":"Set-up environment","subTitle":"Package manager + toolchain","description":"Download the Alire package manager and install the compiler.","columns":1},{"title":"SPARK","subTitle":"From memory safety to functional correctness","description":"Gradually adopt the SPARK subset to reach various levels of assurance. Higher levels take more effort, but give more benefits and stronger guarantees.","items":[{"title":"Valid SPARK","description":"Restrict Ada packages to the SPARK subset. Avoids side-effects in functions and parameter aliasing.","icon":"spark-stone"},{"title":"Initialization and correct data flow","description":"No uninitialized variables are read or undesired access to globals occurs.","icon":"spark-bronze"},{"title":"Absence of run-time errors","description":"No buffer and arithmetic overflow, division by zero, or values out of range, among others, can occur.","icon":"spark-silver"},{"title":"Key integrity properties","description":"Verify integrity of data and valid state transitions.","icon":"spark-gold"}]}]');var F=Object.defineProperty,j=Object.getOwnPropertySymbols,H=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable,V=(e,t,a)=>t in e?F(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,q=(e,t)=>{for(var a in t||(t={}))H.call(t,a)&&V(e,a,t[a]);if(j)for(var a of j(t))$.call(t,a)&&V(e,a,t[a]);return e};const X={"feat-readable":n.createElement(v.b2B,null),"feat-correct":n.createElement(v.vr,null),"feat-performant":n.createElement(v.JKp,null),"spark-stone":n.createElement(v.rom,null),"spark-bronze":n.createElement(v.XRi,null),"spark-silver":n.createElement(v.Il9,null),"spark-gold":n.createElement(v.ikh,null),"spark-platinum":n.createElement(v.$FZ,null)};function J({title:e,description:t,icon:a}){return n.createElement("div",{className:U},n.createElement(w.k,{variant:"light",className:K,size:60,radius:"md"},X[a]),n.createElement("div",null,n.createElement(p.x,{weight:700,size:"lg",className:M},e),n.createElement(p.x,{className:W,color:"dimmed"},Array.isArray(t)?t.map(((e,t)=>n.createElement("p",{key:t},e))):t)))}function Q({title:e,subTitle:t,description:a,items:l,className:r,children:i,columns:o=2}){return n.createElement("section",{className:(0,O.Z)(C,{[r]:!!r})},n.createElement(u.W,{size:700},n.createElement(p.x,{className:B},e),n.createElement(d.D,{className:G,order:2},t),n.createElement(u.W,{size:660,p:0},n.createElement(p.x,{color:"dimmed",className:R},a)),n.createElement(k.M,{cols:Number(!!l)+Number(!!i),spacing:"md"},!!l&&n.createElement(k.M,{cols:o,spacing:48,breakpoints:[{maxWidth:475,cols:1,spacing:16},{maxWidth:768,cols:2,spacing:24},{maxWidth:996,cols:Math.min(3,o),spacing:32}]},l.map(((e,t)=>n.createElement(J,q({key:t},e))))),i)))}function Y(){const e=L;return e[1].children=n.createElement(z,null),e[2].className=Z,n.createElement("div",{className:D},e.map(((e,t)=>n.createElement(Q,q({key:t},e)))))}const ee={heroWrapper:"heroWrapper_Lp5O",heroBackground:"heroBackground_aeQU",heroTabs:"heroTabs_oUBJ",heroInner:"heroInner_egXW",title:"title_spfF",description:"description_UIrY",textDownloadLinks:"textDownloadLinks_vHOi",controls:"controls_oqqj",downloadIcon:"downloadIcon_mksw",controlSecondary:"controlSecondary_pt7O",columns:"columns_oYBZ",codeTabPanels:"codeTabPanels_D6yI",codeTabPanel:"codeTabPanel_c50c"},te=[{key:"ada",code:"with Ada.Text_IO;\n\nprocedure Main is\n   type GUID is new String (1 .. 32)\n     with Dynamic_Predicate =>\n       (for all C of GUID => C in '0' .. '9' | 'a' .. 'f');\n\n   ID_1 : constant GUID := \"030000004c050000cc09000011810000\";\nbegin\n   Ada.Text_IO.Put_Line (\"Reading from device \" & String (ID_1) & \"...\");\nend Main;\n"},{key:"spark",code:"with Interfaces;\n\npackage Xoshiro128 with Pure, SPARK_Mode => On is\n   use type Interfaces.Unsigned_64;\n\n   type Generator is limited private;\n\n   procedure Next (S : in out Generator; Value : out Interfaces.Unsigned_32)\n     with Global  => null,\n          Depends => (S => S, Value => S);\n\n   procedure Reset (S : out Generator; Seed : Interfaces.Unsigned_64)\n     with Global  => null,\n          Depends => (S => Seed),\n          Pre     => Seed /= 0;\n\nprivate\n   type Generator is array (0 .. 3) of Interfaces.Unsigned_32;\nend Xoshiro128;\n"},{key:"embedded",code:"with RP.GPIO;\nwith Pico;\n\nprocedure Main is\nbegin\n   Pico.LED.Configure (RP.GPIO.Output);\n   loop\n      Pico.LED.Toggle;\n      delay 0.1;\n   end loop;\nend Main;\n"}],ae=new Map([["windows",{label:"Windows",urlSuffix:"installer-x86_64-windows.exe"}],["macos",{label:"macOS",urlSuffix:"bin-x86_64-macos.zip"}],["linux",{label:"Linux",urlSuffix:"bin-x86_64-linux.zip"}],["appimage",{label:"AppImage",urlSuffix:"x86_64.AppImage"}]]);const ne="https://github.com/alire-project/alire",le=`${ne}/releases`;function re(e,t){return`${ne}/releases/download/${e}/alr-${e.slice(1)}-${t}`}function ie({showLineNumbers:e,children:t}){return n.createElement(y.p,{withLineNumbers:e,language:"ada"},t)}function oe({title:e,description:t}){const a=(0,c.Z)(),i=(0,h.i)(),{alireVersion:s}=(0,o.eZ)("ada-lang-alire-version"),f=a&&ae.has(i)?i:null,y=null!==f?ae.get(f):null,v=null!==y?` for ${y.label}`:"",w=null!==y?re(s,y.urlSuffix):le,k=Array.from(ae.values()).map((({label:e,urlSuffix:t},a)=>n.createElement(r.Z,{key:a,to:re(s,t)},e))),x=(_=", ",k.reduce(((e,t)=>e.length>0?e.concat([_,t]):[t]),[]));var _;const N=n.createElement(r.Z,{to:le},"others");return n.createElement("header",{className:ee.heroWrapper},n.createElement("div",{className:ee.heroBackground},n.createElement("picture",null,n.createElement("source",{srcSet:"/img/unsplash/yZygONrUBe8.avif",type:"image/avif"}),n.createElement("source",{srcSet:"/img/unsplash/yZygONrUBe8.webp",type:"image/webp"}),n.createElement("img",{src:"/img/unsplash/yZygONrUBe8.jpg",width:"1920",height:"1278",alt:"Fancy background image"}))),n.createElement(m.a,{color:"#000",opacity:.65,zIndex:1}),n.createElement("div",{className:ee.heroInner},n.createElement("div",{className:ee.columns},n.createElement("div",null,n.createElement(d.D,{className:ee.title},e),n.createElement(u.W,{size:640},n.createElement(p.x,{size:"lg",className:ee.description},t),n.createElement(p.x,{size:"lg",className:ee.description},"Get started with Alire, the Ada package manager.")),n.createElement(g.Z,{position:"center",className:ee.controls},n.createElement(b.z,{className:ee.controlPrimary,size:"md",component:r.Z,to:w,variant:"gradient",gradient:{from:"blue",to:"cyan"},leftIcon:n.createElement(l.aBF,{className:ee.downloadIcon})},"Download Alire ",s,v),n.createElement(b.z,{className:ee.controlSecondary,size:"md",component:r.Z,to:"/docs/learn/why-ada"},"Get Started")),n.createElement(p.x,{size:"xs",className:ee.textDownloadLinks},"Download for"," ",x.map(((e,t)=>n.createElement("span",{key:t},e))),", or ",N)),n.createElement("div",null,n.createElement("div",{className:ee.heroTabs},n.createElement(E.m,{color:"blue",variant:"pills",defaultValue:"ada"},n.createElement(E.m.List,null,n.createElement(E.m.Tab,{value:"ada"},"Ada"),n.createElement(E.m.Tab,{value:"spark"},"SPARK"),n.createElement(E.m.Tab,{value:"embedded"},"Embedded")),n.createElement("div",{className:ee.codeTabPanels},te.map((({key:e,code:t})=>n.createElement(E.m.Panel,{key:e,value:e,pt:"xs",className:ee.codeTabPanel},n.createElement(ie,{showLineNumbers:!0},t)))))))))))}function ce(){var e;const{siteConfig:t}=(0,i.Z)(),a=null==(e=t.customFields)?void 0:e.description;return n.createElement(f.Me,{theme:{colorScheme:"dark",fontFamily:"var(--ada-lang-font-family)"}},n.createElement(s.Z,{title:t.title,description:a},n.createElement(oe,{title:t.title,description:a}),n.createElement("main",null,n.createElement(Y,null))))}}}]);