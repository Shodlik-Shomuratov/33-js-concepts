function greeting () {
    sayHi();
}

function sayHi () {
    console.log("Hello, Darling!")
}

greeting();


// 1. Interpreter skip those two function declaration
// 2. Interpreter reaches the line greeting() function called and adds it to the call stack
// 3. Call stack executes greeting() function line by line and reaches the line sayHi() function called
// 4. Interpreter adds sayHi() function to call stack further up
// 5. Call stack executes sayHi() function and takes it off from the stack
// 6. Then call stack gets back to the greeting() function and executes the rest of it.
// 7. After executing, call stack also takes off the greeting function from the stack

function foo () {
    foo();
}

foo();

// This statement create an stack overflow error like this because of the range of the call stack:
// 
// /home/shodlik/Documents/CODING/33-js-concepts/Call Stack/index.js:21
//     foo()
//     ^
// RangeError: Maximum call stack size exceeded
