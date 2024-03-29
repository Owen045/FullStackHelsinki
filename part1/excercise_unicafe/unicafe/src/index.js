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

const Statistic = (props) => (
    <tr>
        <td>{props.text}</td> 
        <td>{props.value} {props.symbol} </td> 
    </tr>
)

const Statistics = (props) => {
    if (props.all === 0) {

     return   (
         <div>
             <p>No feedback given</p>
         </div>
            
        )
    }
    return (
            <div>

                <table>
                    <tbody>
                        <Statistic value={props.good} text={'good'}/>
                        <Statistic value={props.neutral} text={'neutral'}/>
                        <Statistic value={props.bad} text={'bad'}/>
                        <Statistic value={props.all} text={'all'} />

                        <Statistic value={props.avgvalue.toFixed(2)} text={props.avgtext} symbol={props.avgsymbol} />
                        <Statistic value={props.posvalue.toFixed(2)} text={props.postext} symbol={props.symbol} />
                    </tbody>
                </table>
            
            </div>
    )
}


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
        <Statistics good={good} bad={bad} neutral={neutral} all={all} avgvalue={avg} avgtext={'average'}
        posvalue={pos} postext={'positive'} symbol={'%'}/>
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)