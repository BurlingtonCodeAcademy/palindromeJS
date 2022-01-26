---
createdDate: 2021-11-29
timeRequired: 1 Hour
topics: instruction,workshop,ASYNC,await,strings,ARGv
---


### Overview

This workshop will help to familiarize you with strings, user inputs, sanitizing those inputs and using async functions by creating a program that checks whether or not a word is a palindrome (a word that is the same forwards and backwards such as "kayak").

To start, open your palindrome.js file and follow along with the comments to begin.


### Objective

Create a function that will accept user input, reverse that input and then check the orignal input against the reversed input then notify the user whether or not their input is a palindrome.

### Topics

> - Strings
> - Async
> - Await
> - ARGV

### Context

In this workshop we'll use two methods of accepting user input to the terminal. The first is ARGV, short for "argument vector", which is essentially a variable that contains the arguments passed to a program through the command line. The inputs are stored as an array and can be accessed and manipulated as such. For example entering "node index.js Matt" in the command line would result in the array [node, index.js, Matt].

The second method is using an Async function to prompt the user for an input and await their response. You will be provided with an "ask" function that you need not understand fully at this point, just know that it is used to take in the user input from the command line. Here is a general definition of async and await from the Mozilla Developer Network

"An async function is a function declared with the async keyword, and the await keyword is permitted within them. The async and await keywords enable asynchronous, promise-based behavior to be written in a cleaner style, avoiding the need to explicitly configure promise chains." 

### Additional Resources

- [What's a Palindrome?](https://en.wikipedia.org/wiki/Palindrome)
- [Async and Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

