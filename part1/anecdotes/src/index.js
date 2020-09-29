import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const Button = ({ handleClick, text }) => (
    <button onClick={handleClick}>
      {text}
    </button>
)

const Display = ({ anecdote, votes }) => (
  <div>
    {anecdote}<br/>has {votes} votes
  </div> 
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(6).fill(0))
  const [maxPointsIndex, setMaxPointsIndex] = useState(0)

  const setValueSelected = () => setSelected(getRandomInt(0, 5))

  const setValuePoints = () => {
    const copy = [...points]
    copy[selected] += 1
    setPoints(copy)

    let largest = Math.max(...copy)
    setMaxPointsIndex(copy.indexOf(largest))
  }

  return (
    <div>
      <h1>
        Anecdote of the day
      </h1>
      <Display anecdote={props.anecdotes[selected]} votes={points[selected]} />
      <Button handleClick={setValuePoints} text={"vote"} />
      <Button handleClick={setValueSelected} text={"next anecdote"} />
      <h1>
        Anecdote with most votes
      </h1>
      <Display anecdote={props.anecdotes[maxPointsIndex]} votes={points[maxPointsIndex]} />
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
