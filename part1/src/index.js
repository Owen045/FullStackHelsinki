import React from 'react'
import ReactDOM from 'react-dom'


const Hello = (props) => {
    return (
        <div>
            <p>GobbledyGookedy {props.name} = {props.age}</p>
        </div>
    ) 
}

// is this a comment? 

const Footer = () => {
    return (
      <div>
        greeting app created by 
        <a href="https://github.com/mluukkai">mluukkai</a>
      </div>
    )
  }


const App = () => {
console.log('hello bro')

const now = new Date()
const a = 10
const b = 20
const name = 'Owen'
const age = 27

return (
  <div>
      <p>The data is: {now.toString()}</p>
      <br />
    <p>Hello world: {a} + {b} = {a+b}</p>
    <br />
    <Hello name={name} age={age} />
    <br />
    < Footer />
  </div>
    )
}






ReactDOM.render(<App />, document.getElementById('root'))