import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Header = (props) =>  (
        <h1>{props.title}</h1>
    )

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const Display = (props) => (
    <div>
        <p>{props.text} {props.value}</p>
    </div>
)



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const voteGood = () => {
      setGood(good + 1) 
  }

  const voteNeut = () => {
      setNeutral(neutral + 1)
  }

  const voteBad = () => {
      setBad(bad + 1)
  }


  return (
    <div>
        <Header title={'give feedback'} />
        <Button onClick={voteGood} text={'good'} />
        <Button onClick={voteNeut} text={'neutral'} />
        <Button onClick={voteBad} text={'bad'} />
    

        <Header title={'statistics'} />
        <Display value={good} text={'good'}/>
        <Display value={neutral} text={'neutral'}/>
        <Display value={bad} text={'bad'}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)