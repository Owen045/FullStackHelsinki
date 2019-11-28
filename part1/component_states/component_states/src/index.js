//import React from 'react';
import ReactDOM from 'react-dom'

// const Hello = ({name, age}) => {

//     ///const {name, age} = props // destructuring property variables into 2 individual variables

//     const bornYear = () => new Date().getFullYear() - age // helper function defined within another function, not possible in Java, but possible in JS
        
//     // long hand definition of fucntion : const bornYear = () => {
//   //return new Date().getFullYear() - age
// //  }


//     return (
//       <div>
//         <p>
//           Hello {name}, you are {age} years old
//         </p>
//     <p>So you were probably born in {bornYear()}</p>
//       </div>
//     )
//   }
  
//   const App = () => {
//     const name = 'Peter'
//     const age = 10
  
//     return (
//       <div>
//         <h1>Greetings</h1>
//         <Hello name="Maya" age={26 + 10} />
//         <Hello name={name} age={age} />
//       </div>
//     )
//   }

// ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
//serviceWorker.unregister();




/////////////////////////////////// button count clicker

// const App = (props) => {
//     const {counter} = props
//     return (
//       <div>{counter}</div>
//     )
//   }
  
//   let counter = 1

//   const refresh = () => {
//       ReactDOM.render(<App counter={counter} />,
//         document.getElementById('root'))
//   }
  
//   setInterval(() => {   // setInterval adds a delay to the calls to refresh of 1 second, not recommended to re-render components by calling ReactDOm.render multiple times
//       refresh()
//       counter += 1
//   }, 1000)

// //   ReactDOM.render(
// //     <App counter={counter} />, 
// //     document.getElementById('root')
// //   )

// //   refresh()
// //   counter += 1
// //   refresh()
// //   counter += 1
// //   refresh()


/////////////////////////////////////////// stateful component

// components so far have been simple as have not contained any state that changes during lifecycle of component
// can add states using React's state hook

// import React, { useState } from 'react' // import useState function

// const App = (props) => {
//   const [ counter, setCounter ] = useState(0) // function call adds state to the componenet and renders it initialised withthe value of zero, returns array of two items

//   setTimeout(
//     () => setCounter(counter + 1), // incrementer, when state modifying fucntion setCounter is called, React, re-renders component adn so function body get re-executed
//     1000 // 1 second timeout
//   )

//   console.log('rendering...', counter)
//   return (
//     <div>{counter}</div>
//   )
// }

// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )



/////////////////////////////////////////////// Event Handler //////////////////////////////////////

// event handlers are used to respond to users interactions with the site e.g. using buttons
// event handlers are functions
// possible to break function if event handler calls function instead of acts as reference to function, creates infinite loop and breaks callstack
// need to use format: onClick={() => setToValue(0)}, e.g. function which returns a function, can be abbreviated into double arrow function

// import React, { useState } from 'react' // import useState function

// const App = (props) => {
//     const [ counter, setCounter ] = useState(0)
  
//     const increaseByOne = () => {
//         setCounter(counter + 1)
//       console.log('clicked')
//     }

//     const reset = () => setCounter(0)

//     // rewrite reset and increase by One function into one function

//     // const setToValue = (value) => setCounter(value)

//     // rewrite previous function in format of function which returns another function

//     const setToValue = (value) => () => setCounter(value)
        
    
  
//     return ( // handleclick is an event handler function
//       <div>
//         <div>{counter}</div>
//         <button onClick={setToValue(counter + 1)}> 
//           plus
//         </button>

//         <button onClick={setToValue(0)}> 
//         reset
//       </button>

//       </div>
//     )
//   }
// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )

///////////////////////////////////////// Currying in Functional Programming /////////////////////////////////////////

// recommended to write React components that are small and re-usable across the application and/or project

// refactoring previous application to amend heirarchy of components, best practise to lift the state up as high as possible in the component heirarchy, preferably to App root component

// import React, { useState } from 'react' // import useState function

// const App = (props) => {
//     const [ counter, setCounter ] = useState(0)
  
//     const increaseByOne = () => {
//         setCounter(counter + 1)
//       console.log('clicked')
//     }

//     const reset = () => setCounter(0)


//     const setToValue = (value) => () => setCounter(value)
    
//     // component for display
//     const Display = ({counter}) => <div>{counter}</div>
        
//     // generic button components
//     const Button = ({onClick, text}) => (
//         <button onClick={onClick}>
//             {text}
//         </button>
//     )
    
  
//     return ( // handleclick is an event handler function
//       <div>
//         <Display counter={counter}/>
//         <Button onClick={setToValue(counter + 1)} text={'plus'} />
//         <Button onClick={setToValue(counter - 1)} text={'minus'} />
//         <Button onClick={setToValue(0)} text={'reset'} />

//       </div>
//     )
//   }
// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )



///////////////////////////////////// A more complex state, debugging React apps ////////////////////////////////

// Complex state

// what if application state is mmore than simple integer?
// then use useState fucntion mutliple times to create separate pieces of state
// state can be of any data type
// object spread syntax ...<state objects>, attribute you want to change          This is a way of creating a new object which copies old but changes property according to function
// forbidden in React to mutate state directly as can have unexpected side effects, changing state must be done by changing state to new object
// in this example better to store state as 2 separate objects, but sometimes storing together than be beneficial


// import React, { useState } from 'react' // import useState function

// const App = (props) => {
//   const [clicks, setClicks] = useState({
//     left: 0,
//     right: 0
//   })     // multiple peices of state in this application

//   const handleLeftClick = () => {setClicks({
//     ...clicks,  
//     left: clicks.left + 1,
//    })
//   }

//   const handleRightClick = () => {setClicks({
//     ...clicks,
//     right: clicks.right + 1,
//     })
//   }

//   return (
//     <div>
//       <div>
//         {clicks.left}
//         <button onClick={handleLeftClick}>
//           left
//         </button>
//         <button onClick={handleRightClick}>
//           right
//         </button>
//         {clicks.right}
//       </div>
//     </div>
//   )
// }



// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )


// Handling arrays
// use concat method when altering array state instead of push as problems can arise

// import React, { useState } from 'react' // import useState function

//   const Button = ({onClick, text}) => {

//     return (
//       <div>
//           <button onClick={onClick}>{text}</button>
//       </div>
//     )
//   }

//   const History = (props) => {
//     if (props.allClicks.length === 0) {  // example of conditional rendering
//       return (
//         <div>
//           the app is used by pressing the buttons
//         </div>
//       )
//     }
  

//   return (
//     <div>
//       button press history: {props.allClicks.join(' ')}
//     </div>
//   )
// }


// const App = (props) => {
//   const [left, setLeft] = useState(0)
//   const [right, setRight] = useState(0)
//   const [allClicks, setAll] = useState([]) // remembers every click event

//   const handleLeftClick = () => {
//     setAll(allClicks.concat('L'))
//     setLeft(left + 1)
//   }

//   const handleRightClick = () => {
//     setAll(allClicks.concat('R'))
//     setRight(right + 1)
//   }



//   return (
//     <div>
//       <div>
      
//         <Button onClick={handleLeftClick} text='left' />
//         <Button onClick={handleRightClick} text='right' />
        
//         <History allClicks={allClicks} />
//       </div>
//     </div>
//   )
// }


// ReactDOM.render(
//   <App />, 
//   document.getElementById('root')
// )


// Old React

// state hook is a new function in React, prior to this state had to be defined as React class components using JS class syntax


////////////////////////////////////////////////////// Debugging React Applications

// always have console open
// console.log() printing is a good idea
// fomrmat: console.log('props value is', props)

// debugger command anywhere in code pauses the execuation of application, like a breakpoint, allows variable inspection

// add React developer tools extension to chrome


// Rules of Hooks

// useState and useEffect function must not be called from inside of a loop, a conditional or any place that is not a function defining and component


// Event Handling Revisited

// must always be a function or a reference to a function
// never mutate state directly in React, always copy and edit new object
// bad practise to define event handler function directly in attribute of the button


// Return functions revisited

// const App = (props) => {
//   const [value, setValue] = useState(10)

//   const hello = (who) => {
//     const handler = () => console.log('hello', who)
//     return handler
//   }

//   return (
//     <div>
//       {value}
//       <button onClick={hello('world')}>button</button>
//       <button onClick={hello('react')}>button</button>
//     </div>
//   )
// }

// here, an event handler can directly call a function since the function returns another function
// we can add in parameters in order to customise fucntionality having created a generic component
// same technique can be used for event handlers


// Passing Event Handlers to Child Components



import React, { useState } from 'react' // import useState function

const Button = (props) => (
  <button onClick={props.onClick}>{props.text}</button>
)

const Display = props => (
<div>{props.value}</div>
)

const App = (props) => {
  const [value, setValue] = useState(10)

  const setToValue = (newValue) => {
    setValue(newValue)
  }

  return (
    <div>
      <Display value={value} />
      <Button onClick={() => setToValue(1000)} text='1000'/>
      <Button onClick={() => setToValue(0)} text='reset'/>
      <Button onClick={() => setToValue(value + 1)} text={'increment'}/>
    </div>
  )
}


ReactDOM.render(
  <App />, 
  document.getElementById('root')
)


/// NEVER DEFINE COMPONENTS WITHIN OTHER COMPONENTS!!!!!!!!!!!!!!!!!!!!!!!

// This is the right place to define a component
const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = props => {
  const [value, setValue] = useState(10)

  const setToValue = newValue => {
    setValue(newValue)
  }

  // Do not define components inside another component
  const Display = props => <div>{props.value}</div>

  return (
    <div>
      <Display value={value} />
      <Button handleClick={() => setToValue(1000)} text="thousand" />
      <Button handleClick={() => setToValue(0)} text="reset" />
      <Button handleClick={() => setToValue(value + 1)} text="increment" />
    </div>
  )
}