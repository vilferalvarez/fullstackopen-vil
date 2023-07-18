import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header=(props)=>{
  return (

    <h1>{props.course}</h1>
  )
}

const Content=(props)=>(
  <div>
      <Part part={props.part1} ex={props.exercises1}/>
      <Part part={props.part2} ex={props.exercises2}/>
      <Part part={props.part3} ex={props.exercises3}/>
  </div>
)

const Total=(props)=>
  (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )

const Part=(props)=>(
  <p>{props.part} {props.ex}</p>
)


ReactDOM.render(<App />, document.getElementById('root'))

