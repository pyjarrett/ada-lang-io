"use strict";(self.webpackChunkada_lang_io=self.webpackChunkada_lang_io||[]).push([[105],{8456:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>d});const i=JSON.parse('{"id":"learn/tutorial/command-line-arguments","title":"Command Line Arguments","description":"You\'re going to write a program that prints the words you give it.","source":"@site/docs/learn/tutorial/02-command-line-arguments.mdx","sourceDirName":"learn/tutorial","slug":"/learn/tutorial/command-line-arguments","permalink":"/docs/learn/tutorial/command-line-arguments","draft":false,"unlisted":false,"tags":[],"version":"current","sidebarPosition":2,"frontMatter":{"sidebar_position":2},"sidebar":"tutorialSidebar","previous":{"title":"Hello, World!","permalink":"/docs/learn/tutorial/hello-world"},"next":{"title":"Overview","permalink":"/docs/category/overview"}}');var a=t(4848),r=t(8453);const o={sidebar_position:2},s="Command Line Arguments",l={},d=[{value:"Objectives",id:"objectives",level:2},{value:"Start a new project",id:"start-a-new-project",level:2},{value:"Remembering from last time",id:"remembering-from-last-time",level:2},{value:"Comments in code",id:"comments-in-code",level:2},{value:"Making the command line available",id:"making-the-command-line-available",level:2},{value:"Using every argument by looping",id:"using-every-argument-by-looping",level:2},{value:"Command line arguments with Alire",id:"command-line-arguments-with-alire",level:2},{value:"Recap",id:"recap",level:2},{value:"Need help?",id:"need-help",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.header,{children:(0,a.jsx)(n.h1,{id:"command-line-arguments",children:"Command Line Arguments"})}),"\n",(0,a.jsx)(n.p,{children:"You're going to write a program that prints the words you give it."}),"\n",(0,a.jsx)(n.p,{children:'No program runs in isolation, so these inputs are going to be given as\nadditional values when you start the program. These "command line arguments"\nare a common element used when starting programs to change its behavior\ndepending on what you feed it.'}),"\n",(0,a.jsx)(n.p,{children:"This is the first step toward making usable programs."}),"\n",(0,a.jsxs)(n.p,{children:["You've already been using command line arguments! When you've been running\n",(0,a.jsx)(n.code,{children:"alr"})," on the terminal, you are running the Alire program and the things which\nfollow are command line arguments."]}),"\n",(0,a.jsx)(n.h2,{id:"objectives",children:"Objectives"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Write a code comment."}),"\n",(0,a.jsx)(n.li,{children:"Use command line arguments."}),"\n",(0,a.jsxs)(n.li,{children:["Create a ",(0,a.jsx)(n.code,{children:"for"})," loop."]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"start-a-new-project",children:"Start a new project"}),"\n",(0,a.jsx)(n.p,{children:"Let's start another project."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ alr init --bin command_line_arguments\n$ cd command_line_arguments\n"})}),"\n",(0,a.jsxs)(n.p,{children:["You'll notice this time that the name of the ",(0,a.jsx)(n.code,{children:"gpr"})," file is now\n",(0,a.jsx)(n.code,{children:"command_line_arguments.gpr"})," and that the only ",(0,a.jsx)(n.code,{children:".adb"})," file is now called\n",(0,a.jsx)(n.code,{children:"command_line_arguments.adb"}),". Open up ",(0,a.jsx)(n.code,{children:"command_line_arguments.adb"})," to get\nstarted."]}),"\n",(0,a.jsx)(n.h2,{id:"remembering-from-last-time",children:"Remembering from last time"}),"\n",(0,a.jsx)(n.p,{children:"See if you can print a hello message with what you learned from the last\nlesson."}),"\n",(0,a.jsxs)(n.p,{children:["Remember, you want to print a line of text and that capability is within Ada's\nText Input/Output package of ",(0,a.jsx)(n.code,{children:"Ada.Text_IO"}),". Bring that package in as a\ndependency using ",(0,a.jsx)(n.code,{children:"with"})," and then print a hello message."]}),"\n",(0,a.jsx)(n.p,{children:"What you have should look something along the lines of this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:'with Ada.Text_IO;\n\nprocedure Calculate_Sum is\nbegin\n   Ada.Text_IO.Put_Line ("Hello, World!");\nend Calculate_Sum;\n'})}),"\n",(0,a.jsx)(n.h2,{id:"comments-in-code",children:"Comments in code"}),"\n",(0,a.jsx)(n.p,{children:'Most programming languages have a way of writing things in your code that the\ncomputer will ignore. Usually these are called "comments." Programmers use\nthem to write notes for themselves for other programmers in the code to describe\nwhy things are done a certain way, indicate tricky spots, or remind themselves of\nadditional work to do.'}),"\n",(0,a.jsx)(n.p,{children:'Ada comments start with two dashes (negative signs) and continue to the end of\nthe line, and so are called "line comments". Your text editor might highlight\nthe comment a different color to show that it\'s a comment.'}),"\n",(0,a.jsx)(n.p,{children:"I'm going to annotate the above program with comments -- none of the\nthings I added change the meaning of the program, from the computer's point of\nview."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:'--  This is the context clause.\n--  We\'re describing how we depend on the Ada package, and in particular,\n--  the Text_IO package inside of the Ada package.  The period (also called a\n--  "full stop") indicates that the thing on the right is contained in the\n--  thing on the left.\nwith Ada.Text_IO;\n\n--  Our program starts here.\nprocedure Hello_Lucy is\n  --  This is where we\'d describe places to save information, called\n  -- "variables" if they can change, and "constants" if they cannot.\n  --  There\'s a few other things we can put here which we won\'t talk about\n  --  yet.\nbegin  --  The program begins executing statements here\n   Ada.Text_IO.Put_Line ("Hello, World!");  --  Say hello to the world\nend Hello_Lucy; --  end of the program\n--  This line is after the program.\n'})}),"\n",(0,a.jsx)(n.h2,{id:"making-the-command-line-available",children:"Making the command line available"}),"\n",(0,a.jsxs)(n.p,{children:["The command line elements are available in the ",(0,a.jsx)(n.code,{children:"Command_Line"})," package\nwithin the ",(0,a.jsx)(n.code,{children:"Ada"})," package. Make that package available by adding a ",(0,a.jsx)(n.code,{children:"with"}),"\nin the context clause, at the start of your program."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"with Ada.Command_Line;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["There's two functions that you care about in the ",(0,a.jsx)(n.code,{children:"Ada.Command_Line"})," package.\nOne called ",(0,a.jsx)(n.code,{children:"Argument_Count"}),", which gives the number of arguments fed to the\nprogram, and another called ",(0,a.jsx)(n.code,{children:"Argument"})," that gives you back the argument based\non a number you give it."]}),"\n",(0,a.jsx)(n.h2,{id:"using-every-argument-by-looping",children:"Using every argument by looping"}),"\n",(0,a.jsxs)(n.p,{children:["You want to loop over all of the arguments, starting at the first one, and then\neach until you've printed all of them. To do this, you'll use a ",(0,a.jsx)(n.code,{children:"for"}),' loop.\nThis is a type of "control flow statement" that repeats the steps inside a specific\nnumber of times.']}),"\n",(0,a.jsx)(n.p,{children:"Roughly, something like this:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"for Next in First_Value .. Last_Value loop\n   -- these steps\n   -- happen until\n   -- the count\n   -- reaches the value\nend loop;\n"})}),"\n",(0,a.jsx)(n.p,{children:"This is what it breaks down to:"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"for"})," - this loop is going to run over a bunch of individual items"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Next"})," - the name of the item which is changing each round the loop runs"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"in"})," - you're looping over a number of values, given by a range."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"First_Value"})," - the first number in the sequence"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:".."})," - this indicates a range from the value on the left, to the value on the right."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"Last_Value"})," - the last value in the sequence."]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"loop"})," - what follows are the step which will happen every round the loop is run"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:"end loop;"})," - indicates the end of the loop"]}),"\n"]}),"\n",(0,a.jsxs)(n.p,{children:["You want to start at the number 1 for the first argument, with the last value\nbegin the total number of arguments, ",(0,a.jsx)(n.code,{children:"Ada.Command_Line.Argument_Count."})," The\nnext value being used with be available with the identifier, ",(0,a.jsx)(n.code,{children:"Next"}),"."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"for Next in 1 .. Ada.Command_Line.Argument_Count loop\n\nend loop;\n"})}),"\n",(0,a.jsxs)(n.p,{children:["This doesn't do anything yet. You'll want to print the argument. Instead of\ngiving ",(0,a.jsx)(n.code,{children:"Put_Line"}),' a greeting in double quotes, you\'ll just pass the "index" as\na "parameter" to the ',(0,a.jsx)(n.code,{children:"Argument"})," function."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"with Ada.Command_Line;\nwith Ada.Text_IO;\n\nprocedure Command_Line_Arguments is\nbegin\n   for Next in 1 .. Ada.Command_Line.Argument_Count loop\n      Ada.Text_IO.Put_Line (Ada.Command_Line.Argument (Next));\n   end loop;\nend Command_Line_Arguments;\n"})}),"\n",(0,a.jsx)(n.p,{children:"If you try to run this program, nothing seems to happen though!"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ alr run\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"alr run\nNote: Building command_line_arguments/command_line_arguments.gpr...\nCompile\n   [Ada]          command_line_arguments.adb\nBind\n   [gprbind]      command_line_arguments.bexch\n   [Ada]          command_line_arguments.ali\nLink\n   [link]         command_line_arguments.adb\nBuild finished successfully in 1.07 seconds.\n"})}),"\n",(0,a.jsx)(n.p,{children:"You're running your program by telling Alire to run the program for you.\nYou provided the \"run\" command line argument to Alire, but it used that\nand didn't tell your program anything."}),"\n",(0,a.jsxs)(n.p,{children:["If you've been paying extra attention, you've noticed that a directory with\nthe funny name of ",(0,a.jsx)(n.code,{children:"bin/"})," appears after you run ",(0,a.jsx)(n.code,{children:"alr build"})," or ",(0,a.jsx)(n.code,{children:"alr run"}),". This\nis where the executable for our program is actually hiding, it'll be called\n",(0,a.jsx)(n.code,{children:"command_line_arguments"})," on Linux or Mac, or ",(0,a.jsx)(n.code,{children:"command_line_arguments.exe"})," on\nWindows. You can try running this program directly with some extra words to\nprint:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"$ ./bin/command_line_arguments.exe will Ada print these words?\n"})}),"\n",(0,a.jsxs)(n.admonition,{type:"note",children:[(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"."}),' at the front means "the current directory." Terminals use this to\nindicate that the program being run is relative to your current location.']}),(0,a.jsxs)(n.p,{children:["If you're on Windows, you'll be using back slashes (",(0,a.jsx)(n.code,{children:"\\"}),") instead of forward\nslashes (",(0,a.jsx)(n.code,{children:"/"}),")."]})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"will\nAda\nprint\nthese\nwords?\n"})}),"\n",(0,a.jsx)(n.h2,{id:"command-line-arguments-with-alire",children:"Command line arguments with Alire"}),"\n",(0,a.jsx)(n.p,{children:"OK, so we know that it works, but how do you make it work when you run it via\nAlire? It's a good bet that Alire is looking at the command line arguments\ngiven to it and that there's probably a way to pass along the arguments to the\nprogram it's running."}),"\n",(0,a.jsxs)(n.p,{children:["You can ask Alire about what it can do with the ",(0,a.jsx)(n.code,{children:"run"})," command , with:"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ alr help run\n"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"SUMMARY\n   Launch an executable built by the release\n\nUSAGE\n   alr run [options] [executable] [--args=ARGS] [--skip-build] | [--list]\n\nOPTIONS\n   -a (--args=ARGS)   Arguments to pass through (quote them if more than one)\n   --list             List executables produced by current release\n   -s (--skip-build)  Skip building step\n\nGLOBAL OPTIONS\n   -c (--config=ARG)       Override configuration folder location\n   -f (--force)            Keep going after a recoverable troublesome situation\n   -h (--help)             Display general or command-specific help\n   -n (--non-interactive)  Assume default answers for all user prompts\n   --no-color              Disables colors in output\n   --no-tty                Disables control characters in output\n   --prefer-oldest         Prefer oldest versions instead of newest when resolving dependencies\n   --version               Displays version and exits\n   -q                      Limit output to errors\n   -v                      Be more verbose (use twice for extra detail)\n   -d (--debug[])          Enable debug-specific log messages\n\nDESCRIPTION\n   Compiles the crate (unless --skip-build is specified) and then executes the\n   default or given resulting executable.\n\n   With --list, a list of declared executables is produced instead of invoking\n   the compiler, and its location (if already built) is given.\n"})}),"\n",(0,a.jsxs)(n.p,{children:["That ",(0,a.jsx)(n.code,{children:"ARGS"})," looks promising, this is how you'd use it. You need to put your\narguments inside double quotes so the terminal feeds all of them to your\nprogram as a whole."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:'$ alr run --args="will Ada print these words?"\n'})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:'Note: Building command_line_arguments/command_line_arguments.gpr...\ngprbuild: "command_line_arguments.exe" up to date\nBuild finished successfully in 0.69 seconds.\nwill\nAda\nprint\nthese\nwords?\n'})}),"\n",(0,a.jsx)(n.p,{children:"Neat!"}),"\n",(0,a.jsx)(n.p,{children:"As a little exercise, how would you print them backwards?"}),"\n",(0,a.jsxs)(n.p,{children:["You want to flip the two values at the end of the range, but the way ranges\nare written in Ada, you can't actually do it that way. It'd be nice if you\ncould just tell it to ",(0,a.jsx)(n.code,{children:"reverse"})," the order... and you can!"]}),"\n",(0,a.jsxs)(n.p,{children:["If we just add a ",(0,a.jsx)(n.code,{children:"reverse"})," to that for loop..."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"for Next in reverse 1 .. Ada.Command_Line.Argument_Count loop\n"})}),"\n",(0,a.jsx)(n.p,{children:"It prints in reverse!"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-text",children:"Note: Building command_line_arguments/command_line_arguments.gpr...\nCompile\n   [Ada]          command_line_arguments.adb\nBind\n   [gprbind]      command_line_arguments.bexch\n   [Ada]          command_line_arguments.ali\nLink\n   [link]         command_line_arguments.adb\nBuild finished successfully in 1.10 seconds.\nwords?\nthese\nprint\nAda\nwill\n"})}),"\n",(0,a.jsx)(n.h2,{id:"recap",children:"Recap"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"Code comments lets us add notes to our programs that the computer ignores.\nIn Ada, these start with two dashes and then everything until the end of the\nline is ignored:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-ada",children:"    -- This is a code comment!  Everything after the dashes is ignored.\n"})}),"\n",(0,a.jsxs)(n.ol,{start:"2",children:["\n",(0,a.jsx)(n.li,{children:"Command line arguments let you feed a program data when you start it.\nWhen you run your program directly, you'd write:"}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"$ ./bin/my_program these are some command line arguments\n"})}),"\n",(0,a.jsx)(n.p,{children:"When running with Alire, it's a little special since you're asking Alire to hand\noff those arguments, so you put them in quotes:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'$ alr run --args="will Ada print these words?"\n'})}),"\n",(0,a.jsxs)(n.ol,{start:"3",children:["\n",(0,a.jsxs)(n.li,{children:["For loops can be used to do the same steps a certain number of times, given\nby a range. You can reverse the order by adding the word ",(0,a.jsx)(n.code,{children:"reverse"}),"."]}),"\n"]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{children:"for Next in First_Value .. Last_Value loop\n   -- Do these steps.\nend loop;\n"})}),"\n",(0,a.jsx)(n.h2,{id:"need-help",children:"Need help?"}),"\n",(0,a.jsxs)(n.p,{children:["Go to the ",(0,a.jsx)(n.a,{href:"https://gitter.im/ada-lang/Lobby",children:"Ada language gitter"})," if you have\nquestions or need help."]})]})}function c(e={}){const{wrapper:n}={...(0,r.R)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}}}]);