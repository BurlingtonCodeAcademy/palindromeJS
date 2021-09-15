/*----------------------Readline Interface-------------------*/
const readline = require("readline");
const rl = readline.createInterface(process.stdin, process.stdout);

function ask(questionText) {
  return new Promise((resolve, reject) => {
    rl.question(questionText, resolve);
  });
}


/*--------------ARGV-----------------------*/

let palinInput = process.argv.slice(2)
console.log(palinInput)
let answer = palinInput.join(" ")
let inputSani = palinInput.join("").toLowerCase()
let reverseInput = inputSani.split("").reverse().join("")
if(inputSani === reverseInput){
    console.log(answer + " is a palindrome!")
    process.exit()
} else {
    console.log(answer + " is NOT a palindrome!")
    process.exit()
}

/*----------------Async Function-------------*/

// palindrome()
async function palindrome() {
    let input = await ask("Is your name or phrase and palindrome? ")
    let forward = input.toLowerCase()
    let reverse = forward.split("").reverse().join("")
    if(forward === reverse){
        console.log(input + " is a palindrome!")
    } else {
        console.log(input + " is NOT a palindrome!")
    }
    process.exit()
}