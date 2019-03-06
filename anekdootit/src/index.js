import React, { useState } from 'react'
import ReactDOM from 'react-dom'
import './index.css'

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(new Array(anecdotes.length).fill(0))
  //console.log(points)

  const getRandomAnecdote = () => {
    const index = Math.floor(Math.random() * anecdotes.length)
    //console.log(index)
    setSelected(index)
  }

  const voteAnecdote = () => {
    const copyOfPoints = [...points]
    copyOfPoints[selected]++;
    setPoints(copyOfPoints)
  }

  const maxIndex = () => {
    let maxInd = 0
    let max = 0
    for (let i = 0; i < points.length; i++) {
      if (points[i] > max) {
        max = points[i]
        maxInd = i
      }
    }
    return maxInd
  }

  return (
    <div>
      <div>
        <h1>Anecdote of the day</h1>
        <div>
          {props.anecdotes[selected]}
        </div>
        <div>
          has {points[selected]} votes
        </div>
        <button onClick={voteAnecdote}>vote</button>
        <button onClick={getRandomAnecdote}>next anecdote</button>
      </div>
      <div>
        <h1>Anecdote with most votes</h1>
        <div>
          {props.anecdotes[maxIndex()]}
        </div>
        <div>
          has {points[maxIndex()]} votes
        </div>
      </div>
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

ReactDOM.render(<App anecdotes={anecdotes} />, document.getElementById('root'))
