////////////////////////// Javascript Notes ///////////////////////


// •	Single thread language
//•	Call stack
//•	Asynchronous Callbacks
//•	Web APIS – DOM etc

//•	Official name of JS standard is ECMAScript/ES10 – most up to date

//•	Babel transpiles JS into older more compatible versions for some browsers

//•	Node.js is a runtime environment based on chrome V8 JS engine.

//•	Run command for node.js is node <filename>.js

// Variables

const x = 1           // constant variable
let y = 5               // mutable variable

console.log(x, y)   // 1, 5 are printed
y += 10
console.log(x, y)   // 1, 15 are printed
y = 'sometext'
console.log(x, y)   // 1, sometext are printed
x = 4               // causes an error


// arrays (lists)

const t = [1, -1, 3]

t.push(5)

console.log(t.length)
console.log(t[1])

t.forEach(value => { // forEach recives a function as defined by arrow syntax parameter
    console.log(value) // numbers 1, -1, 3, 5 are printed each to own line
})

// array contents can be modified despite being a const, object remains the same, but contents changes
// functional programming paradigm often used in React and includes use of immutable data structures
// In React it is preferable to use the method concat, this does not add new item to array both creates 
// new array with both the old array with new array added to it

const t = [1, -1, 3]

const t2 = t.concat(5)

console.log(t)  // [1, -1, 3] is printed
console.log(t2) // [1, -1, 3, 5] is printed


// map method

const t = [1, 2, 3]

const m1 = t.map(value => value * 2)
console.log(m1)   // [2, 4, 6] is printed

// creates a new array with a function applied to each value inside array


const m2 = t.map(value => '<li>' + value + '</li>')
console.log(m2)  
// [ '<li>1</li>', '<li>2</li>', '<li>3</li>' ] is printed

// map can also be used to render data into a different format altogether e.g. html elements


// destructuring assignment

const t = [1, 2, 3, 4, 5]

const [first, second, ...rest] = t

console.log(first, second)  // 1, 2 is printed
console.log(rest)          // [3, 4 ,5] is printed

// use of elipsis only assigns two direct variables nad the rest are collected into single var called rest


// Objects (object literals)

const object1 = {
    name: 'Owen Walton',
    age: 27,
    education: 'BSc',
}

const object2 = {
    name: 'Full Stack web application development',
    level: 'intermediate studies',
    size: 5,
  }
  
  const object3 = {
    name: {
      first: 'Dan',
      last: 'Abramov',
    },
    grades: [2, 3, 5, 3],
    department: 'Stanford University',
  }


  // access and assign properties using dot or bracket notation

object1.address = 'Helsinki'
object1['secret number'] = 12341

// Naturally, objects in Javascript can also have methods. However, during this course we do not need to define any objects with methods of their own. 
// This is why they are only discussed briefly during the course.

// Objects can also be defined using so-called constructor functions, which results in a mechanism reminiscent of many other programming languages', e.g. Java's classes. 
// Despite this similarity Javascript does not have classes in the same sense as object-oriented programming languages. 
// There has been, however, an addition of the class syntax starting from version ES6, which in some cases helps structure object-oriented classes.