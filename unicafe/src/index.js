import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const Statistics = ({ good, neutral, bad }) => {

  const averageOfPoints = () => {
    const n = good + neutral + bad
    if (n === 0) {
      return 0
    }
    return ((good - bad) / n).toFixed(2)
  }

  const positivePoints = () => {
    const n = good + neutral + bad
    if (n === 0) {
      return 0
    }
    return (100 * good / n).toFixed() + ' %'
  }

  const showStatistics = () => {
    if (good + neutral + bad > 0) {
      return (
        <div>
          <Statistic text='hyvä' value={good} />
          <Statistic text='neutraali' value={neutral} />
          <Statistic text='huono' value={bad} />
          <Statistic text='keskiarvo' value={averageOfPoints()} />
          <Statistic text='positiivisia' value={positivePoints()} />
        </div>
      )
    }
    return (
      <div>Ei yhtään palautetta annettu</div>
    )
  }

  return (
    <div>
      <h2>statistiikka</h2>
        {showStatistics()}
    </div>
  )
}

const Statistic = ({ text, value }) => {
  return (
    <div>{text} {value}</div>
  )
}

const Button = ({ handleClick, text }) => {
  return (
    <button onClick={handleClick}>{text}</button>
  )
}

const App = () => {
  // tallenna napit omaan tilaansa
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }

  return (
    <div>
      <h2>anna palautetta</h2>
      <div>
        <Button handleClick={handleGoodClick} text='hyvä' />
        <Button handleClick={handleNeutralClick} text='neutraali' />
        <Button handleClick={handleBadClick} text='huono' />
      </div>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

