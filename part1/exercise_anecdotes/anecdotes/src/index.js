import React, { useState } from 'react'
import ReactDOM from 'react-dom'


const Button = (props) => (
    <div>
        <button onClick={props.onClick}>{props.text}</button>
    </div>
)

const MostVotes = (props) => {
  if (props.maxVotes === null) {

    return (
      <p>No votes</p>
    )
  }
  return (
    <p>{props.anecdotes[props.maxVotes]}</p>
  )
}

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVote] = useState(Array.apply(null, new Array(6)).map(Number.prototype.valueOf,0))
  const [maxVotes, setMax] = useState(null)  

    const genRand = () => {
        setSelected(Math.floor(Math.random() * (+5 - +0)) + +0)
    }

    const vote = () => {
      const copy = [...votes]
      copy[selected] += 1
      setVote(copy)
      

      const max = Math.max(...copy)
      const idx = copy.indexOf(max)
      setMax(idx)

    }



  return (
    <div>
      <h1>Anecdote of the day</h1>
      {props.anecdotes[selected]}
      <p>has {votes[selected]} votes</p>
      <Button onClick={vote} text={'vote'}/>
      <Button onClick={genRand} text={'next anecdote'}/>

      <h2>Anecdote withe most votes</h2>
      <MostVotes maxVotes={maxVotes} anecdotes={props.anecdotes}/>
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]




ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)