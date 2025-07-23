const {compile}=require('./compiler');
const readline = require('readline');

// To read the command paltte
const r1=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("--- Welcome to the FunJS Transpiler! ---");
console.log("You can write a simple function and see it transpiled to JavaScript.");
console.log("\n>>> HOW TO WRITE FunJS CODE <<<");
console.log("Use the following format to define a function:");
console.log("fun functionName(param1, param2) -> param1 + param2");
console.log("\n- Start with the 'fun' keyword.");
console.log("- Provide a function name and parameters in parentheses.");
console.log("- Use '->' to point to the function body.");
console.log("- The body should be a simple expression like 'a + b'.");
console.log("\nExample: fun multiply(x, y) -> x * y");
console.log("-----------------------------------------");

r1.question('\n Please enter your FunJs code here: \n> ',(userInput)=>{
    try {
        // Enter user function
        if(!userInput.trim()){
            console.log('\n No input provided. Exiting');
            r1.close();
            return ;
        }

        // Output Js Function
        console.log('\n--- Transpiling your code... ---');
        const jsCode=compile(userInput);

        console.log("\n✅ Success! Here is the JavaScript output:");
        console.log("-----------------------------------------");
        console.log(jsCode);
        console.log("-----------------------------------------");

    } catch (error) {
        // To manage error in this function
        console.error("\n❌ Error during compilation!");
        console.error("-----------------------------------------");
        console.error("It looks like there's a mistake in your code.");
        console.error(`Error message: ${error.message}`);
        console.error("Please check the syntax and try again.");
        console.error("-----------------------------------------");
    }

    // To close readline 
    r1.close();
})