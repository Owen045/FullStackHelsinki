////////////////////////////////////////// Rendering a collection modules/////////////////////////////////////

// separate console.log() statements like: console.log('props value is', props)

// snippets - 

// VS Code plugs

// can define snippets in order to save time writing repetitive code blocks

// e.g. clog

console.log('')

// Callback Functions

// a function which is passed to a higher order function in order to be executed at a later time

// JS is asynchronous and events driven, does not wait for response from functions before proceeding to next function, e.g. setting a Timeout
// can cause the result from a previous function to be output after a second function is called




///////////////////////////////// Functional Programming Concepts /////////////////////////////////////////////

// 1. Higher Order Functions

// First Class Functions

// Functions are objects in JS and other functional programming languages
// you can add properties to a function object but not recommended
// You can pass functions as parameters to other functions, assign to variables and pass around etc

// Higher Order Functions

// Function which takes other function as argument or returns function

// For example, Array.prototype.map, Array.prototype.filter and Array.prototype.reduce are some of the Higher-Order functions built into the language.

// Array.prototype.map

// this takes a callback function and applies to every item in array, then returns into and constructs a new array object

// double array function, no higher order

const arr1 = [1, 2, 3];
const arr2 = [];
for(let i = 0; i < arr1.length; i++) {
  arr2.push(arr1[i] * 2);
}
// prints [ 2, 4, 6 ]
console.log(arr2);


// with higher order function map

const arr1 = [1, 2, 3];
const arr2 = arr1.map(function(item) {
  return item * 2;
});
console.log(arr2);

// OR

const arr1 = [1, 2, 3];
const arr2 = arr1.map(item => item * 2);
console.log(arr2);

// Array.prototype.filter

// this is used to filter an array of values down to values with meet filter requirements

// Array.prototype.reduce

// function accepts an array and returns a single value


