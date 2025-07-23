<h1 align="center">FunJS: A Simple Language Transpiler</h1>
<h3 align="center">A simple transpiler that converts "FunJS" code into standard JavaScript.</h3>
<p align="center">
<img src="https://user-images.githubusercontent.com/8102324/51284128-360a7e00-19d8-11e9-8390-589634c892b1.gif" alt="compiler-gif" width="400">
</p>
This project was built to understand the core principles of how a compiler works. It takes a custom, simplified programming language and converts it into a more common one (JavaScript).
<br>
🧐 What is a Transpiler?
A transpiler is a special type of compiler that translates source code from one high-level language to another.
In our case:
Input (FunJS): fun add(a, b) -> a + b
Output (JavaScript): function add(a, b) { return a + b; }
<br>
🚀 How to Run the Transpiler
Clone or download this project to your computer.
Open your terminal and navigate into the project's root folder.
Run the interactive script with the following command:
Generated bash
node run.js
Use code with caution.
Bash
The program will guide you and ask for your code!
<br>
✍️ How to Write FunJS Code
The syntax for FunJS is designed to be simple and clear. It only supports function creation.
The basic structure is:
Generated code
fun <function_name>(<param1>, <param2>) -> <expression>
Use code with caution.
Start every line with the fun keyword.
Provide a function_name and a list of parameters in parentheses.
Use the arrow -> to separate the definition from the function's body.
The expression is the calculation to perform (e.g., param1 + param2).
<br>
✨ Examples
Here are some examples you can try in the terminal.
Example 1: An add function
Your FunJS Code:
Generated code
fun add(num1, num2) -> num1 + num2
Use code with caution.
JavaScript Output:
Generated javascript
function add(num1, num2) { return num1 + num2; }
Use code with caution.
JavaScript
Example 2: A multiply function
Your FunJS Code:
Generated code
fun multiply(x, y) -> x * y
Use code with caution.
JavaScript Output:
Generated javascript
function multiply(x, y) { return x * y; }
Use code with caution.
JavaScript
Example 3: A getArea function
Your FunJS Code:
Generated code
fun getArea(width, height) -> width * height```
**JavaScript Output:**
```javascript
function getArea(width, height) { return width * height; }
Use code with caution.
<br>
⚙️ How It Works (A Simple Explanation)
The transpiler processes the code in three main stages:
Lexer (Tokenizer): Reads the raw code and breaks it into a list of "tokens." For example, fun, add, (, a, ).
Parser: Takes the tokens and builds a tree structure (an Abstract Syntax Tree or AST) that represents the code's meaning and hierarchy.
Generator: Traverses the AST and builds the final JavaScript code string based on the structure of the tree.
<p align="center">
---
</p>
<p align="center">
<em>Enjoy experimenting with your new language!</em>
</p>