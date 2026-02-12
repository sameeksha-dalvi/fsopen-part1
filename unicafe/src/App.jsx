import { useState } from 'react'

const Statistics = (props) => {
  console.log("Statistics props", props);
  if (props.text == "positive") {
    return (
      <>
        <p>{props.text} {props.value} %</p>
      </>
    )
  } else {
    return (
      <>
        <p>{props.text} {props.value}</p>
      </>
    )
  }

}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad;

  return (
    <div>
      <h1>Give feedback: </h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)} >neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>Statistics:</h1>
      <Statistics text="good" value={good} />
      <Statistics text="neutral" value={neutral} />
      <Statistics text="bad" value={bad} />
      <Statistics text="all" value={total} />
      <Statistics text="average" value={(good - bad) / total} />
      <Statistics text="positive" value={(good / total) * 100} />

    </div>
  )
}

export default App