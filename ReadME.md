FunJS: A Simple Language Transpiler
Welcome to FunJS! This project is a simple transpiler that reads code written in our custom language, "FunJS," and converts it into standard JavaScript.
It's a fun project created to learn how a compiler works from the inside out.
What is a Transpiler?
A transpiler is a special type of compiler that takes source code written in one language and transforms it into source code of another language.
In our case:
Input: FunJS code (fun add(a, b) -> a + b)
Output: JavaScript code (function add(a, b) { return a + b; })
How to Run the Transpiler
You can run this transpiler on your computer easily.
Open your terminal or command prompt.
Navigate to the project folder (funjs-compiler).
Run the following command:
Generated bash
node run.js
Use code with caution.
Bash
The program will then ask you to enter your FunJS code.
How to Write FunJS Code
FunJS has a very simple syntax for creating functions.
The basic structure is:
Generated code
fun <function_name>(<parameter1>, <parameter2>) -> <expression>
Use code with caution.
Always start with the fun keyword.
function_name is the name you want to give your function.
(parameter1, parameter2) are the names of the inputs.
-> is a special arrow that points to the code the function will run.
expression is the calculation you want to perform.
Examples
Here are some examples of what you can write when the program asks for your input.
Example 1: Creating an add function
Your FunJS Code:
Generated code
fun add(num1, num2) -> num1 + num2
Use code with caution.
JavaScript Output:
Generated javascript
function add(num1, num2) { return num1 + num2; }
Use code with caution.
JavaScript
Example 2: Creating a subtract function
Your FunJS Code:
Generated code
fun subtract(x, y) -> x - y
Use code with caution.
JavaScript Output:
Generated javascript
function subtract(x, y) { return x - y; }
Use code with caution.
JavaScript
Example 3: Creating a multiply function
Your FunJS Code:
Generated code
fun multiply(a, b) -> a * b
Use code with caution.
JavaScript Output:
Generated javascript
function multiply(a, b) { return a * b; }```

---

#### Example 4: Using different parameter names

**Your FunJS Code:**
Use code with caution.
JavaScript
fun getArea(width, height) -> width * height
Generated code
**JavaScript Output:**

```javascript
function getArea(width, height) { return width * height; }
Use code with caution.
How It Works (A Simple Explanation)
The transpiler works in three main steps:
Lexer (or Tokenizer): It first reads your code and breaks it down into small pieces called "tokens." For example, fun, add, (, a, ).
Parser: It takes the list of tokens and organizes them into a tree structure called an Abstract Syntax Tree (AST). This tree represents the meaning of your code.
Generator: Finally, it walks through the tree and builds the final JavaScript code string from it.
Enjoy experimenting with your new language