import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  console.log('Header ', props)
  return <h1>{props.course}</h1>
}

const Part = (props) => {
  console.log('Part ', props)
  return (
    <p>
      {props.part} {props.excercises}
    </p>
  )
  
}

const Content = (props) => {
  console.log('Content ', props)
  return (
    <>
      <Part part={props.part1} excercises={props.excercises1} />
      <Part part={props.part2} excercises={props.excercises2} />
      <Part part={props.part3} excercises={props.excercises3} />
    </>
  )
}

const Total = (props) => {
  console.log('Total ', props)
  return <p>yhteensä {props.total} tehtävää</p>
}

const App = () => {
  const course = 'Half Stack -sovelluskehitys'
  const part1 = {
    name: 'Reactin perusteet',
    exercises: 10
  }
  const part2 = {
    name: 'Tiedonvälitys propseilla',
    exercises: 7
  }
  const part3 = {
    name: 'Komponenttien tila',
    exercises: 14
  }

  return (
    <div>
      <Header course={course} />
      <Content part1={part1.name} part2={part2.name} part3={part3.name} excercises1={part1.exercises} excercises2={part2.exercises} excercises3={part3.exercises} />
      <Total total={part1.exercises + part2.exercises + part3.exercises} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))
