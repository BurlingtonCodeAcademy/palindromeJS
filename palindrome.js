/*----------------------Readline Interface-------------------*/
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


/*--------------ARGV-----------------------*/
// write the logic to allow a user to check whether or not a given word or phrase is a palindrome
// the way to input with argv should be by typing "node palindrome.js 'word' " with 'word' being the word you want to check
// slice the input on the third argument to get the word you want to check
let palinInput = process.argv.slice(2)
// console log to check that our input is what we think it is
console.log(palinInput)
// put the input back together in case there is more than one word with spaces
let answer = palinInput.join(" ")
// make the input lowercase
let inputSani = palinInput.join("").toLowerCase()
// split the lowercased input and reverse it, then put it back together
let reverseInput = inputSani.split("").reverse().join("")
// check to see if the normal input is the same as the reversed input
if(inputSani === reverseInput){
    // if it is equal, print that it's a palindrome then exit the program
    console.log(answer + " is a palindrome!")
    process.exit()
    // if it is not equal, print that it is not a palindrome then exit the program
} else {
    console.log(answer + " is NOT a palindrome!")
    process.exit()
}

/*----------------Async Function-------------*/

// write a function to take in user input and check whether or not it is a palindrome
async function palindrome() {
    // take in user input with an await ask
    let input = await ask("Is your name or phrase a palindrome? ")
    // sanitize the input by making it lowercase
    let forward = input.toLowerCase()
    // split the lowercased input and reverse it, then put it back together
    let reverse = forward.split("").reverse().join("")
    // check to see if the normal input is the same as the reversed input
    if(forward === reverse){
         // if it is equal, print that it's a palindrome
        console.log(input + " is a palindrome!")
        // if it is not equal, print that it is not a palindrome
    } else {
        console.log(input + " is NOT a palindrome!")
    }
    process.exit()
}

//call the palindrome function when we want to run the Async version
palindrome()
