import React, { useEffect, useState } from "react";
import Statistics from "./Statistics";

const Part = ({ anecdotes }) => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [average, setAverage] = useState(0);
  const [positive, setPositive] = useState(0);
  const [all, setAll] = useState(0);

  const handleGood = () => {
    setGood(good + 1);
    setAll(all + 1);
  };
  const handleNeutral = () => {
    setNeutral(neutral + 1);
    setAll(all + 1);
  };
  const handleBad = () => {
    setBad(bad + 1);
    setAll(all + 1);
  };

  useEffect(() => {
    if (all !== 0) {
      setAverage((good - bad) / all);
      setPositive((good * 100) / all);
    }
  }, [all]);

  return (
    <>
      <h2>Give feedback</h2>
      <button onClick={handleGood}>Good</button>
      <button onClick={handleNeutral}>Neutral</button>
      <button onClick={handleBad}>Bad</button>
      <h3>Statistics</h3>
      {anecdotes.length > 0 ? (
        <Statistics
          good={good}
          bad={bad}
          neutral={neutral}
          average={average}
          positive={positive}
          all={all}
        />
      ) : (
        <p>No feedback given</p>
      )}
    </>
  );
};

export default Part;
