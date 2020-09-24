import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>
    {text}
  </button>
)

const Display = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
)

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setValueGood = () => setGood(good + 1)
  const setValueNeutral = () => setNeutral(neutral + 1)
  const setValueBad = () => setBad(bad + 1)

  return (
    <div>
      <h1>
      	give feedback
      </h1>
      <Button handleClick={setValueGood} text="good" />
      <Button handleClick={setValueNeutral} text="neutral" />
      <Button handleClick={setValueBad} text="bad" />
      <h1>
        statistics
      </h1>
      <Display text="good" value={good} />
      <Display text="neutral" value={neutral} />
      <Display text="bad" value={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)