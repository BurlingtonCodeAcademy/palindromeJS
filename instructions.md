# Palindromes

- Lets create a function that can be used in either an async await or ARGV format

## FUNctionality

- You'll want to create a function that takes the user input, sanitizes it, and compares it forwards and backwards 
- To do so you may want to make sure that what you are comparing is the same as the *reverse* so maybe setting the input values as uppercase or lowercase may help.

## ARGV

- Using `process.argv` allows us to target and manipulate the user input
- As we know, all user input into the console is a string which will look something `node function.js`
- This will be assigned (Zero Indexed) as an array, which we can target and *slice* off the information needed.
- `let input = process.argv` will return ['node','function.js']


## Async/Await

- Now lets use async await functions.
- First you need:
    - ```const readline = require("readline");
         const rl = readline.createInterface(process.stdin, process.stdout);
        function ask(questionText) {
        return new Promise((resolve, reject) => {
        rl.question(questionText, resolve);
        });
         ```
- Next we will need to turn our original function into an async
    - `async function calc() {Code goes here}`