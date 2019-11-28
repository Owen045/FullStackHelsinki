import React from 'react'
import ReactDOM from 'react-dom'

// create new app   $ npx create-react-app <app name>
//                  $ cd part1
// run application  $ npm start


//WARNING create-react-app automatically makes the project a git repository unless the application is created within an already existing 
// repository. Most likely you do not want the project becoming a repository, so run the command rm -rf .git in the root of the project.

// React apps are created in JSX which resembles HTML, JSX is compiled into JS by Babel
// JSX is XML-like so all tags need to be close e.g. <br />


// react-component defined
// const Hello = (props) => { // data can be passed to components using props
//     return (
//         <div>
//             <p>Gobbledy Gookedy {props.name} = {props.age}</p>
//         </div>
//     ) 
// }

// // this is a footer component
// const Footer = () => {
//     return (
//       <div>
//         greeting app created by 
//         <a href="https://github.com/mluukkai">mluukkai</a>
//       </div>
//     )
//   }


//   // this is the main page application with various components contained inside
// const App = () => {
// console.log('hello bro')

// const now = new Date()
// const a = 10
// const b = 20
// const name = 'Owen'
// const age = 27

// // outtermost div element required in order to properly render
// return (
//   <div> 
//       <p>The data is: {now.toString()}</p>
//       <br />
//     <p>Hello world: {a} + {b} = {a+b}</p>
//     <br />
//     <Hello name={name} age={age} />
//     <br />
//     <Hello name={'Geoff'} age={38} />
//     < Footer />
//   </div>
//     )
// }






// ReactDOM.render(<App />, document.getElementById('root')) // this line renders the Reac-component App into the DOM in a div with id='root'
















////// component states and event handlers

const Hello = (props) => {
  return (
    <div>
      <p>
        Hello {props.name}, you are {props.age} years old
      </p>
    </div>
  )
}

const App = () => {
  const name = 'Peter'
  const age = 10

  return (
    <div>
      <h1>Greetings</h1>
      <Hello name="Maya" age={26 + 10} />
      <Hello name={name} age={age} />
    </div>
  )
}


ReactDOM.render(<App />, document.getElementById('root2')) // this line renders the Reac-component App into the DOM in a div with id='root'
