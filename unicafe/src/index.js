import React, { useState }  from 'react'
import ReactDOM from 'react-dom'
import './index.css'

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
        <button onClick={handleGoodClick}>hyvä</button>
        <button onClick={handleNeutralClick}>neutraali</button>
        <button onClick={handleBadClick}>huono</button>
      </div>
      <h2>statistiikka</h2>
      <p>hyvä {good}</p>
      <p>neutraali {neutral}</p>
      <p>huono {bad}</p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))

