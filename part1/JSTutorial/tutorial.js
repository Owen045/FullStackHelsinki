////////////////////////// Javascript Notes ///////////////////////

// tutorial guide - https://developer.mozilla.org/en-US/docs/Web/JavaScript/A_re-introduction_to_JavaScript

// • Single thread language
//•	Call stack
//•	Asynchronous Callbacks
//•	Web APIS – DOM etc

//•	Official name of JS standard is ECMAScript/ES10 – most up to date

//•	Babel transpiles JS into older more compatible versions for some browsers

//•	Node.js is a runtime environment based on chrome V8 JS engine.

//•	Run command for node.js is node <filename>.js

// Datatypes: Boolean, Null, Undefined, Number, String, Symbol, and Object.

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


// Functions

const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
}

const result = sum(1, 5)
console.log(result)

// single parameter or single expression

const square = p => {
    console.log(p)
    return p * p
  }

const square = p => p * p

// function expression - different way of declaring a function

const average = function(a, b) {
    return (a + b) / 2
  }
  
  const result = average(2, 5)
  // result is now 3.5


// Object methods and "this"

// you can assign methods to an object

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is', this.name) // this keyword parallels self in python
    },
  }

// methods can be retrospectively applied to objects

const arto = {
    name: 'Arto Hellas',
    age: 35,
    education: 'PhD',
    greet: function() {
      console.log('hello, my name is', this.name)
    },
    doAddition: function(a, b) {
      console.log(a + b)
    },
  }
  
  arto.doAddition(1, 4)        // 5 is printed
  
  const referenceToAddition = arto.doAddition
  referenceToAddition(10, 15)   // 25 is printed

  // assign method reference to a variable
  // will not work with .greet function as reference to 'this' is not stored as the variable function becomes a global object

  // setTimeout method

const arto = {
name: 'Arto Hellas',
greet: function() {
    console.log('hello, my name is', this.name)
},
}
  
setTimeout(arto.greet, 1000) // prints undefined this.name

// bind method

setTimeout(arto.greet.bind(arto), 1000) // this binds the method to the object arto independne tof how method called


// Classes

// do not exist in JS but can be simulated


class Person {
    constructor(name, age) {
        this.name = name
        this.age = age
    }
    greet () {
        console.log('hell, my name is', this.name)
    }
}

const adam = new Person('Adam Ondra', 35)
adam.greet()

const janja = new Person('Janja Garnbret', 22)
janja.greet()



