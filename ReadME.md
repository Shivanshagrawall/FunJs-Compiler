<h1 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">FunJS: A Simple Language Transpiler</h1>
    <p>
        Welcome to FunJS! This project is a simple <strong style="color: #111;">transpiler</strong> that reads code written in our custom language, "FunJS," and converts it into standard JavaScript.
    </p>
    <p>
        It's a fun project created to learn how a compiler works from the inside out.
    </p>

    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">What is a Transpiler?</h2>
    <p>
        A transpiler is a special type of compiler that takes source code written in one language and transforms it into source code of another language.
    </p>
    <p>In our case:</p>
    <ul>
        <li><strong style="color: #111;">Input:</strong> FunJS code (<code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">fun add(a, b) -> a + b</code>)</li>
        <li><strong style="color: #111;">Output:</strong> JavaScript code (<code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">function add(a, b) { return a + b; }</code>)</li>
    </ul>

    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">How to Run the Transpiler</h2>
    <p>You can run this transpiler on your computer easily.</p>
    <ol>
        <li>Open your terminal or command prompt.</li>
        <li>Navigate to the project folder (<code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">funjs-compiler</code>).</li>
        <li>Run the following command:</li>
    </ol>
    <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;"><code style="font-family: 'Courier New', Courier, monospace; background-color: transparent; padding: 0; font-size: 1em;">node run.js</code></pre>
    <p>The program will then ask you to enter your FunJS code.</p>

    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">How to Write FunJS Code</h2>
    <p>FunJS has a very simple syntax for creating functions. The basic structure is:</p>
    <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;"><code style="font-family: 'Courier New', Courier, monospace; background-color: transparent; padding: 0; font-size: 1em;">fun <function_name>(<parameter1>, <parameter2>) -> <expression></code></pre>
    <ul>
        <li>Always start with the <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">fun</code> keyword.</li>
        <li><code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">function_name</code> is the name you want to give your function.</li>
        <li><code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">(parameter1, parameter2)</code> are the names of the inputs.</li>
        <li><code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">-></code> is a special arrow that points to the code the function will run.</li>
        <li><code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">expression</code> is the calculation you want to perform.</li>
    </ul>

    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">Examples</h2>
    <p>Here are some examples of what you can write when the program asks for your input.</p>

    <hr style="border: 0; height: 1px; background: #ddd; margin: 40px 0;">
    
    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">Example 1: Creating an <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">add</code> function</h3>
    <p><strong style="color: #111;">Your FunJS Code:</strong></p>
    <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;"><code style="font-family: 'Courier New', Courier, monospace; background-color: transparent; padding: 0; font-size: 1em;">fun add(num1, num2) -> num1 + num2</code></pre>
    <p><strong style="color: #111;">JavaScript Output:</strong></p>
    <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;"><code style="font-family: 'Courier New', Courier, monospace; background-color: transparent; padding: 0; font-size: 1em;">function add(num1, num2) { return num1 + num2; }</code></pre>

    <hr style="border: 0; height: 1px; background: #ddd; margin: 40px 0;">

    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">Example 2: Creating a <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">subtract</code> function</h3>
    <p><strong style="color: #111;">Your FunJS Code:</strong></p>
    <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;"><code style="font-family: 'Courier New', Courier, monospace; background-color: transparent; padding: 0; font-size: 1em;">fun subtract(x, y) -> x - y</code></pre>
    <p><strong style="color: #111;">JavaScript Output:</strong></p>
    <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;"><code style="font-family: 'Courier New', Courier, monospace; background-color: transparent; padding: 0; font-size: 1em;">function subtract(x, y) { return x - y; }</code></pre>

    <hr style="border: 0; height: 1px; background: #ddd; margin: 40px 0;">
    
    <h3 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">Example 3: Creating a <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">multiply</code> function</h3>
    <p><strong style="color: #111;">Your FunJS Code:</strong></p>
    <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;"><code style="font-family: 'Courier New', Courier, monospace; background-color: transparent; padding: 0; font-size: 1em;">fun multiply(a, b) -> a * b</code></pre>
    <p><strong style="color: #111;">JavaScript Output:</strong></p>
    <pre style="background-color: #f4f4f4; padding: 15px; border-radius: 5px; overflow-x: auto;"><code style="font-family: 'Courier New', Courier, monospace; background-color: transparent; padding: 0; font-size: 1em;">function multiply(a, b) { return a * b; }</code></pre>
    
    <hr style="border: 0; height: 1px; background: #ddd; margin: 40px 0;">

    <h2 style="border-bottom: 2px solid #eee; padding-bottom: 10px; margin-top: 40px;">How It Works (A Simple Explanation)</h2>
    <p>The transpiler works in three main steps:</p>
    <ol>
        <li><strong style="color: #111;">Lexer (or Tokenizer):</strong> It first reads your code and breaks it down into small pieces called "tokens." For example, <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">fun</code>, <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">add</code>, <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">(</code>, <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">a</code>, <code style="font-family: 'Courier New', Courier, monospace; background-color: #f4f4f4; padding: 2px 6px; border-radius: 4px; font-size: 0.9em;">)</code>.</li>
        <li><strong style="color: #111;">Parser:</strong> It takes the list of tokens and organizes them into a tree structure called an Abstract Syntax Tree (AST). This tree represents the meaning of your code.</li>
        <li><strong style="color: #111;">Generator:</strong> Finally, it walks through the tree and builds the final JavaScript code string from it.</li>
    </ol>
    <p>Enjoy experimenting with your new language!</p>