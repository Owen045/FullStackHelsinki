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
        <p>{props.text} {props.value} {props.symbol}</p>
    </div>
)



const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  const [pos, setPos] = useState(0)


  const voteGood = () => {
      setGood(good + 1)
      setAll(good + neutral + bad + 1)
      setPos(((good + 1)/(all + 1)) * 100)
      setAvg(((good+1)-(bad))/(all+1) * 100)
  }

  const voteNeut = () => {
      setNeutral(neutral + 1)
      setAll(good + neutral + bad + 1)
      setPos(((good)/(all + 1)) * 100)
      setAvg(((good)-(bad))/(all+1) * 100)
  }

  const voteBad = () => {
      setBad(bad + 1)
      setAll(good + neutral + bad + 1)
      setPos(((good)/(all + 1)) * 100)
      setAvg(((good)-(bad+1))/(all+1) * 100) 
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
        <Display value={all} text={'all'} />
        <Display value={avg} text={'average'} />
        <Display value={pos} text={'positive'} symbol={'%'} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)