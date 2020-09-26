import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = ({ handleClick, text }) => (
	<button onClick={handleClick}>
    {text}
  </button>
)

const Statistic = ({ text, value }) => (
  <div>
    {text} {value}
  </div>
)

const Statistics = ({ good, neutral, bad }) => {
  let total = good + neutral + bad
  if (total === 0) {
    return (
      <div>
        No feedback given
      </div>
    )
  }
  else {
    return (
      <div>
        <Statistic text="good" value={good} />
        <Statistic text="neutral" value={neutral} />
        <Statistic text="bad" value={bad} />
        <Statistic text="all" value={total} />
        <Statistic text="average" value={(good - bad) / total} />
        <Statistic text="positive" value={((good / total) * 100) + " %"} />
      </div>
    )
  }
}

const App = () => {
  // save clicks of each button to own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const setValueGood = () => (setGood(good + 1))
  const setValueNeutral = () => (setNeutral(neutral + 1))
  const setValueBad = () => (setBad(bad + 1))

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
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)