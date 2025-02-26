import { useState } from "react";

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  let positiveWeight = 1;
  let negativeWeight = -1;

  let totalVotes = good + neutral + bad;
  let average =
    totalVotes !== 0
      ? (
          ((good * positiveWeight + bad * negativeWeight) / totalVotes) *
          100
        ).toFixed(2)
      : 0;

  let positivePercentage =
    totalVotes !== 0 ? ((good / totalVotes) * 100).toFixed(2) : 0;

  return (
    <div>
      <h1>Give Feedback</h1>
      <button onClick={() => setGood(good + 1)}>Good</button>
      <button onClick={() => setNeutral(neutral + 1)}>Neutral</button>
      <button onClick={() => setBad(bad + 1)}>Bad</button>
      <h2>Statistics</h2>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>All Votes: {totalVotes}</p>
      <p>Average: {average}%</p>
      <p>Positive Percentage: {positivePercentage}%</p>
    </div>
  );
};

export default App;
