    <h1>FunJS: A Simple Language Transpiler</h1>
    <p>
        Welcome to FunJS! This project is a simple <strong>transpiler</strong> that reads code written in our custom language, "FunJS," and converts it into standard JavaScript.
    </p>
    <p>
        It's a fun project created to learn how a compiler works from the inside out.
    </p>

    <h2>What is a Transpiler?</h2>
    <p>
        A transpiler is a special type of compiler that takes source code written in one language and transforms it into source code of another language.
    </p>
    <p>In our case:</p>
    <ul>
        <li><strong>Input:</strong> FunJS code (<code>fun add(a, b) -> a + b</code>)</li>
        <li><strong>Output:</strong> JavaScript code (<code>function add(a, b) { return a + b; }</code>)</li>
    </ul>

    <h2>How to Run the Transpiler</h2>
    <p>You can run this transpiler on your computer easily.</p>
    <ol>
        <li>Open your terminal or command prompt.</li>
        <li>Navigate to the project folder (<code>funjs-compiler</code>).</li>
        <li>Run the following command:</li>
    </ol>
    <pre><code>node run.js</code></pre>
    <p>The program will then ask you to enter your FunJS code.</p>

    <h2>How to Write FunJS Code</h2>
    <p>FunJS has a very simple syntax for creating functions. The basic structure is:</p>
    <pre><code>fun <function_name>(<parameter1>, <parameter2>) -> <expression></code></pre>
    <ul>
        <li>Always start with the <code>fun</code> keyword.</li>
        <li><code>function_name</code> is the name you want to give your function.</li>
        <li><code>(parameter1, parameter2)</code> are the names of the inputs.</li>
        <li><code>-></code> is a special arrow that points to the code the function will run.</li>
        <li><code>expression</code> is the calculation you want to perform.</li>
    </ul>

    <h2>Examples</h2>
    <p>Here are some examples of what you can write when the program asks for your input.</p>

    <hr>

    <h3>Example 1: Creating an <code>add</code> function</h3>
    <p><strong>Your FunJS Code:</strong></p>
    <pre><code>fun add(num1, num2) -> num1 + num2</code></pre>
    <p><strong>JavaScript Output:</strong></p>
    <pre><code>function add(num1, num2) { return num1 + num2; }</code></pre>

    <hr>

    <h3>Example 2: Creating a <code>subtract</code> function</h3>
    <p><strong>Your FunJS Code:</strong></p>
    <pre><code>fun subtract(x, y) -> x - y</code></pre>
    <p><strong>JavaScript Output:</strong></p>
    <pre><code>function subtract(x, y) { return x - y; }</code></pre>

    <hr>

    <h3>Example 3: Creating a <code>multiply</code> function</h3>
    <p><strong>Your FunJS Code:</strong></p>
    <pre><code>fun multiply(a, b) -> a * b</code></pre>
    <p><strong>JavaScript Output:</strong></p>
    <pre><code>function multiply(a, b) { return a * b; }</code></pre>

    <hr>

    <h3>Example 4: Using different parameter names</h3>
    <p><strong>Your FunJS Code:</strong></p>
    <pre><code>fun getArea(width, height) -> width * height</code></pre>
    <p><strong>JavaScript Output:</strong></p>
    <pre><code>function getArea(width, height) { return width * height; }</code></pre>

    <h2>How It Works (A Simple Explanation)</h2>
    <p>The transpiler works in three main steps:</p>
    <ol>
        <li><strong>Lexer (or Tokenizer):</strong> It first reads your code and breaks it down into small pieces called "tokens." For example, <code>fun</code>, <code>add</code>, <code>(</code>, <code>a</code>, <code>)</code>.</li>
        <li><strong>Parser:</strong> It takes the list of tokens and organizes them into a tree structure called an Abstract Syntax Tree (AST). This tree represents the meaning of your code.</li>
        <li><strong>Generator:</strong> Finally, it walks through the tree and builds the final JavaScript code string from it.</li>
    </ol>
    <p>Enjoy experimenting with your new language!</p>
