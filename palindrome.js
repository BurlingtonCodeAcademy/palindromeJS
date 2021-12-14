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

// console log to check that our input is what we think it is

// put the input back together in case there is more than one word with spaces

// make the input lowercase

// split the lowercased input and reverse it, then put it back together

// check to see if the normal input is the same as the reversed input

    // if it is equal, print that it's a palindrome then exit the program

    // if it is not equal, print that it is not a palindrome then exit the program

/*----------------Async Function-------------*/

// write a function to take in user input and check whether or not it is a palindrome

    // take in user input with an await ask
  
    // sanitize the input by making it lowercase
   
    // split the lowercased input and reverse it, then put it back together
  
    // check to see if the normal input is the same as the reversed input
 
         // if it is equal, print that it's a palindrome
      
        // if it is not equal, print that it is not a palindrome


//call the palindrome function when we want to run the Async version

