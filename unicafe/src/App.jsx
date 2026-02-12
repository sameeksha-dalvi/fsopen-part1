import { useState } from 'react'

const Statistics = ({ good, neutral, bad, total }) => {

  return (
    <>
      <table>
        <tbody>
          <StatisticLine text="good" value={good} />
          <StatisticLine text="neutral" value={neutral} />
          <StatisticLine text="bad" value={bad} />
          <StatisticLine text="all" value={total} />
          <StatisticLine text="average" value={(good - bad) / total} />
          <StatisticLine text="positive" value={(good / total) * 100} />
        </tbody>
      </table>

    </>

  )

}

const StatisticLine = (props) => {
  console.log("Statistics Line props", props);

  if (props.text == "positive") {
    return (
      <>
        <tr>
          <td>{props.text}</td>
          <td>{props.value} %</td>
        </tr>
      </>
    )
  } else {
    return (
      <>
        <tr>
          <td>{props.text}</td>
          <td>{props.value}</td>
        </tr>
      </>
    )
  }

}

const Button = (props) => <button onClick={props.onClick}>{props.text}</button>



const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const total = good + neutral + bad;

  if (total == 0) {
    return (
      <div>
        <h1>Give feedback: </h1>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
        <h1>Statistics:</h1>
        <p>No feedback given</p>
      </div>
    )
  } else {
    return (
      <div>
        <h1>Give feedback: </h1>
        <Button onClick={() => setGood(good + 1)} text="good" />
        <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button onClick={() => setBad(bad + 1)} text="bad" />
        <h1>Statistics:</h1>
        <Statistics good={good} neutral={neutral} bad={bad} total={total} />

      </div>
    )
  }



}

export default App