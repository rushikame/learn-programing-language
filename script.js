var T=[["v","Variables","A variable stores a value under a name, so you can use it again later."],["c","Decisions","An if statement runs different code depending on whether a condition is true."],["l","Loops","A loop repeats code. This one counts from 1 to 3."],["f","Functions","A function packages code you can call again and again. This one adds two numbers."]];
var L={
py:{n:"Python",tag:"A readable language where indentation shows structure.",use:"Data science, automation, AI, beginners",run:"python hello.py",h:'print("Hello, world!")',
v:'name = "Sok"\nage = 20\nprint(name, age)',c:'if age >= 18:\n    print("Adult")\nelse:\n    print("Minor")',l:'for i in range(1, 4):\n    print(i)',f:'def add(a, b):\n    return a + b\n\nprint(add(2, 3))',
q:["Which keyword starts a function in Python?",["def","function","fn"],0]},
js:{n:"JavaScript",tag:"The language of the web. It runs in every browser.",use:"Websites, web apps, servers (Node.js)",run:"node hello.js",h:'console.log("Hello, world!");',
v:'let name = "Sok";\nconst age = 20;\nconsole.log(name, age);',c:'if (age >= 18) {\n  console.log("Adult");\n} else {\n  console.log("Minor");\n}',l:'for (let i = 1; i <= 3; i++) {\n  console.log(i);\n}',f:'function add(a, b) {\n  return a + b;\n}\nconsole.log(add(2, 3));',
q:["Which keyword declares a value that cannot be reassigned?",["let","const","var"],1]},
java:{n:"Java",tag:"A strict, object-oriented language that runs on the JVM.",use:"Android apps, banks, large back-end systems",run:"javac Main.java, then java Main",h:'public class Main {\n  public static void main(String[] args) {\n    System.out.println("Hello, world!");\n  }\n}',
v:'String name = "Sok";\nint age = 20;\nSystem.out.println(name + " " + age);',c:'if (age >= 18) {\n  System.out.println("Adult");\n} else {\n  System.out.println("Minor");\n}',l:'for (int i = 1; i <= 3; i++) {\n  System.out.println(i);\n}',f:'static int add(int a, int b) {\n  return a + b;\n}\n// call it: add(2, 3)',
q:["What does a Java program need to start running?",["A main method","A start() loop","An init file"],0]},
cpp:{n:"C++",tag:"A fast, low-level language with full control over memory.",use:"Games, engines, embedded devices, ESP32 and Arduino",run:"g++ hello.cpp -o hello, then ./hello",h:'#include <iostream>\n\nint main() {\n  std::cout << "Hello, world!";\n  return 0;\n}',
v:'std::string name = "Sok";\nint age = 20;\nstd::cout << name << " " << age;',c:'if (age >= 18) {\n  std::cout << "Adult";\n} else {\n  std::cout << "Minor";\n}',l:'for (int i = 1; i <= 3; i++) {\n  std::cout << i << std::endl;\n}',f:'int add(int a, int b) {\n  return a + b;\n}\n// call it: add(2, 3)',
q:["What does std::cout do?",["Prints output","Reads input","Ends the program"],0]},
cs:{n:"C#",tag:"Microsoft's modern language for the .NET platform.",use:"Windows apps, Unity games, web back ends",run:"dotnet run",h:'Console.WriteLine("Hello, world!");',
v:'string name = "Sok";\nint age = 20;\nConsole.WriteLine(name + " " + age);',c:'if (age >= 18) {\n  Console.WriteLine("Adult");\n} else {\n  Console.WriteLine("Minor");\n}',l:'for (int i = 1; i <= 3; i++) {\n  Console.WriteLine(i);\n}',f:'static int Add(int a, int b) {\n  return a + b;\n}\n// call it: Add(2, 3)',
q:["Which line prints text in C#?",["Console.WriteLine()","print()","echo"],0]},
go:{n:"Go",tag:"A small, simple language from Google, built for speed.",use:"Servers, cloud tools, command-line programs",run:"go run main.go",h:'package main\n\nimport "fmt"\n\nfunc main() {\n  fmt.Println("Hello, world!")\n}',
v:'name := "Sok"\nage := 20\nfmt.Println(name, age)',c:'if age >= 18 {\n  fmt.Println("Adult")\n} else {\n  fmt.Println("Minor")\n}',l:'for i := 1; i <= 3; i++ {\n  fmt.Println(i)\n}',f:'func add(a int, b int) int {\n  return a + b\n}',
q:["Which operator creates a variable in short form?",[":=","=>","<-"],0]},
rust:{n:"Rust",tag:"A language that prevents many memory bugs before your code runs.",use:"Systems, browsers, game engines, secure tools",run:"rustc main.rs, then ./main",h:'fn main() {\n  println!("Hello, world!");\n}',
v:'let name = "Sok";\nlet age = 20;\nprintln!("{} {}", name, age);',c:'if age >= 18 {\n  println!("Adult");\n} else {\n  println!("Minor");\n}',l:'for i in 1..=3 {\n  println!("{}", i);\n}',f:'fn add(a: i32, b: i32) -> i32 {\n  a + b\n}',
q:["In Rust, a variable is by default...",["Immutable","Mutable","Global"],0]},
php:{n:"PHP",tag:"A scripting language made for generating web pages.",use:"WordPress, online shops, server-side websites",run:"php hello.php",h:'<?php echo "Hello, world!";',
v:'$name = "Sok";\n$age = 20;\necho $name . " " . $age;',c:'if ($age >= 18) {\n  echo "Adult";\n} else {\n  echo "Minor";\n}',l:'for ($i = 1; $i <= 3; $i++) {\n  echo $i;\n}',f:'function add($a, $b) {\n  return $a + $b;\n}',
q:["Every PHP variable name starts with...",["$","@","#"],0]}
};
var keys=Object.keys(L),cur="py",topic="v",prog={};
try{prog=JSON.parse(localStorage.getItem("lp-progress")||"{}")}catch(e){prog={}}
function save(){try{localStorage.setItem("lp-progress",JSON.stringify(prog))}catch(e){}}
function $(id){return document.getElementById(id)}
function mk(txt,cls,fn,attrs){var b=document.createElement("button");b.className=cls;b.textContent=txt;b.onclick=fn;for(var k in attrs)b.setAttribute(k,attrs[k]);return b}

var hero="py";
function drawHero(){
  var w=$("heroChips");w.innerHTML="";
  keys.forEach(function(k){w.appendChild(mk(L[k].n,"chip",function(){hero=k;drawHero()},{"aria-pressed":String(k===hero)}))});
  $("heroCode").textContent=L[hero].h;
  $("heroRun").textContent="Run: "+L[hero].run;
}
function drawLangs(){
  var w=$("langTabs");w.innerHTML="";
  keys.forEach(function(k){w.appendChild(mk(L[k].n,"chip",function(){cur=k;drawLesson()},{role:"tab","aria-selected":String(k===cur)}))});
}
function drawLesson(){
  var d=L[cur],p=prog[cur]||[];
  drawLangs();
  $("lName").textContent=d.n;$("lTag").textContent=d.tag;$("lUse").textContent=d.use;$("lRun").textContent=d.run;
  var t=$("topicTabs");t.innerHTML="";
  T.forEach(function(x){t.appendChild(mk(x[1]+(p.indexOf(x[0])>-1?" \u2713":""),"chip",function(){topic=x[0];drawLesson()},{role:"tab","aria-selected":String(x[0]===topic)}))});
  var cur_t=T.filter(function(x){return x[0]===topic})[0];
  $("tText").textContent=cur_t[2];
  $("tCode").textContent=d[topic];
  var done=p.indexOf(topic)>-1;
  $("doneBtn").setAttribute("aria-pressed",String(done));
  $("doneBtn").textContent=done?"Done. Undo":"Mark as done";
  $("bar").style.width=(p.length/T.length*100)+"%";
  $("count").textContent=p.length+" of "+T.length+" topics done";
  var q=d.q;$("qText").textContent="Check yourself: "+q[0];$("qMsg").textContent="";
  var o=$("qOpts");o.innerHTML="";
  q[1].forEach(function(s,i){
    var b=mk(s,"opt",function(){
      var all=o.children;
      for(var j=0;j<all.length;j++)all[j].classList.remove("ok","no");
      if(i===q[2]){b.classList.add("ok");$("qMsg").textContent="Correct."}
      else{b.classList.add("no");$("qMsg").textContent="Not quite. Look at the examples above and try again."}
    });
    o.appendChild(b);
  });
}
$("doneBtn").onclick=function(){
  var p=prog[cur]||[],i=p.indexOf(topic);
  if(i>-1)p.splice(i,1);else p.push(topic);
  prog[cur]=p;save();drawLesson();
};
var F=[
["Syntax","Rules for writing code",'# Python uses indentation\nif True:\n    print("Indented code belongs to the if")'],
["Variables","Store information",'score = 10\nscore = score + 5\nprint(score)  # 15'],
["Data types","String, integer, boolean and more",'name = "Sok"      # string\nage = 20         # integer\nprice = 2.5      # float\nactive = True    # boolean'],
["Operators","Perform calculations and comparisons",'print(7 + 3)    # 10\nprint(7 % 3)    # 1 (remainder)\nprint(7 > 3)    # True\nprint(7 > 3 and 2 > 5)  # False'],
["Input and output","Receive and display information",'name = input("Your name: ")\nprint("Hello,", name)'],
["Conditions","Make decisions using if and else",'mark = 72\nif mark >= 50:\n    print("Pass")\nelse:\n    print("Try again")'],
["Loops","Repeat instructions",'count = 0\nwhile count < 3:\n    count += 1\n    print(count)'],
["Functions","Reuse blocks of code",'def square(n):\n    return n * n\n\nprint(square(4))  # 16'],
["Arrays and collections","Store multiple values",'fruits = ["apple", "mango"]\nfruits.append("banana")\nprint(fruits[0], len(fruits))'],
["Strings","Work with text",'text = "Hello World"\nprint(text.upper())\nprint(text.split(" "))\nprint(text[0:5])'],
["Error handling","Handle errors safely",'try:\n    n = int("abc")\nexcept ValueError:\n    print("Not a number")'],
["OOP","Organize code using objects",'class Dog:\n    def __init__(self, name):\n        self.name = name\n    def bark(self):\n        print(self.name, "says woof")\n\nDog("Rex").bark()'],
["Algorithms","Solve problems step by step",'nums = [4, 9, 2]\nbiggest = nums[0]\nfor n in nums:\n    if n > biggest:\n        biggest = n\nprint(biggest)  # 9'],
["Data structures","Organize and manage data",'stack = []\nstack.append(1)\nstack.append(2)\nprint(stack.pop())  # 2 (last in, first out)'],
["File handling","Read and write files",'with open("notes.txt", "w") as f:\n    f.write("Hello file")\n\nwith open("notes.txt") as f:\n    print(f.read())']
];
var E=[
['Syntax is the set of rules for how you write code: which words, symbols and punctuation are allowed, and in what order. Each language has its own syntax, just like each human language has its own grammar.','The computer cannot guess what you mean. One missing bracket or colon causes a syntax error and the program will not run.','Python uses indentation. Java, C++ and JavaScript use curly braces {} and semicolons.'],
['A variable is a named box in memory that holds a value. You give it a name, put a value inside, then read or change it later.','Programs must remember things like a score, a username or a price. Without variables, every value would be fixed in the code.','Use clear names like total_price, not x. In the example, score starts at 10 and then becomes 15.'],
['A data type tells the computer what kind of value it is: text (string), whole number (integer), decimal number (float), or true/false (boolean).','The type decides what you can do with a value. You can add numbers, but adding two pieces of text 5 and 5 gives 55, not 10.','Check the type whenever a result looks strange. Common types: string, integer, float, boolean.'],
['Operators are symbols that act on values. Arithmetic: + - * / and % (remainder). Comparison: > < == !=. Logical: and, or, not.','They let you calculate totals and ask questions, such as is this number bigger than that one. A comparison always gives true or false.','One = stores a value, but == compares two values. Mixing them up is a very common beginner bug.'],
['Output shows information to the user, for example with print. Input receives information from the user, for example with input.','This is how your program talks to people. Without it, nobody can give data to the program or see its result.','Keyboard input usually arrives as text. Convert it with int() before you do math on it.'],
['A condition lets the program choose a path. If the test is true, one block of code runs. Otherwise (else), another block runs.','Real programs must react: log in or reject, pass or fail, show a button or hide it.','Use elif when you have more than two choices. In the example, 72 is 50 or more, so it prints Pass.'],
['A loop repeats a block of code. A while loop repeats as long as a condition is true. A for loop repeats a set number of times, or once for each item in a list.','Instead of writing the same line 100 times, you write it once and let the loop do the work.','Make sure the loop can end. If count never changed, this while loop would run forever.'],
['A function is a named block of code that does one job. It can take inputs (parameters) and send back a result (the return value).','Functions remove repeated code, make programs easier to read, and let you fix a problem in one place.','Define it once with def, then call it as many times as you want. Name it after what it does.'],
['An array or list stores many values in order under one name. Each item has a position number called an index. Other collections include dictionaries (key and value pairs) and sets (no duplicates).','Programs handle many items at once, such as students, products or messages. A list lets you store them and loop over all of them.','The first item is index 0, not 1. In the example, fruits[0] is apple.'],
['A string is text, such as a name or a sentence. You can join strings, change their case, split them into parts, search inside them, and cut out a piece (slicing).','Almost every program works with text: usernames, messages, web pages, file names.','Strings usually cannot be changed in place. A method like upper() gives you a new string.'],
['Errors happen: bad user input, a missing file, no internet. Error handling lets you catch the problem and respond instead of letting the program crash. In Python you use try and except.','A good program stays safe and shows a helpful message even when something goes wrong.','Put only the risky code inside try, and catch the specific error, like ValueError.'],
['Object-oriented programming (OOP) organizes code into objects. A class is the blueprint, and an object is one thing built from it. A class bundles data (attributes) with actions (methods).','Large programs stay organized when each thing, like a User, a Car or a Product, holds its own data and behavior.','The four big ideas are encapsulation, inheritance, polymorphism and abstraction. Start with class, object, attribute and method.'],
['An algorithm is a step-by-step method to solve a problem. To find the biggest number: remember the first one, compare it with every other number, and keep the larger.','Knowing how to break a problem into steps matters more than any language. The same algorithm works in all of them.','Plan in plain words or a flowchart first, then write the code. Learn searching and sorting early.'],
['A data structure is a way of organizing data so it is easy to use. Examples: list, stack (last in, first out), queue (first in, first out), dictionary, tree and graph.','The right structure makes a program faster and simpler. A poor choice can make it slow and hard to change.','In the example, the stack gives back the last item added, like a pile of plates.'],
['File handling lets a program read data from files and write data to files, so information is kept after the program closes.','Without files, everything is lost when the program stops. Files store settings, logs, student lists and more.','Use with open(...) so the file closes automatically. Mode w writes (and replaces), r reads, a adds to the end.']
];
var fp=[];
try{fp=JSON.parse(localStorage.getItem("lp-fund")||"[]")}catch(e){fp=[]}
function drawFund(){
  var w=$("fund"),open={};
  Array.prototype.forEach.call(w.querySelectorAll("details"),function(d,i){open[i]=d.open});
  w.innerHTML="";
  F.forEach(function(x,i){
    var d=document.createElement("details"),ok=fp.indexOf(i)>-1;
    d.open=!!open[i];
    var s=document.createElement("summary");
    s.innerHTML="<b></b><span></span><em class='tick'></em>";
    s.children[0].textContent=(i+1)+". "+x[0];
    s.children[1].textContent=x[1];
    s.children[2].textContent=ok?"\u2713 Done":"";
    var b=document.createElement("div");b.className="body";
    var ex=document.createElement("div");ex.className="exp";
    [["What it is",E[i][0]],["Why it matters",E[i][1]],["Remember",E[i][2]]].forEach(function(r){var q=document.createElement("p"),st=document.createElement("strong");st.textContent=r[0]+": ";q.appendChild(st);q.appendChild(document.createTextNode(r[1]));ex.appendChild(q)});
    var p=document.createElement("pre");p.textContent=x[2];
    var m=mk(ok?"Done. Undo":"Mark as done","done mk",function(){
      var j=fp.indexOf(i);if(j>-1)fp.splice(j,1);else fp.push(i);
      try{localStorage.setItem("lp-fund",JSON.stringify(fp))}catch(e){}
      drawFund();
    },{"aria-pressed":String(ok)});
    b.appendChild(ex);b.appendChild(p);b.appendChild(m);d.appendChild(s);d.appendChild(b);w.appendChild(d);
  });
  $("fBar").style.width=(fp.length/F.length*100)+"%";
  $("fCount").textContent=fp.length+" of "+F.length+" done";
}
drawFund();
drawHero();drawLesson();
