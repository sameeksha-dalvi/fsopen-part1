const Header = (props) => {
  return (
    <>
      <h1>{props.course}</h1>
    </>
  )
}

const Part = (props) => {
  return (
    <>
      <p>
        {props.part} {props.excercise}
      </p>
    </>
  )
}

const Content = (props) => {
  return (
    <>
      <Part part={props.parts[0].name} excercise={props.parts[0].exercises} />
      <Part part={props.parts[1].name} excercise={props.parts[1].exercises} />
      <Part part={props.parts[2].name} excercise={props.parts[2].exercises} />
    </>
  )

}


const Total = (props) => {
  
  return (
    <>
      <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ]

  return (
    <div>
      <Header course={course} />
      <Content parts={parts}
      // part1={parts[0].name} exercises1={parts[0].exercises}
      // part2={parts[1].name} exercises2={parts[1].exercises}
      // part3={parts[2].name} exercises3={parts[2].exercises}
      />
      <Total parts={parts} />
    </div>
  )
}

export default App