import React, { useEffect, useState } from "react";

const Part2 = ({ anecdotes }) => {
  const [selected, setSelected] = useState(0);
  const [mostVotes, setMostVotes] = useState(0);
  const [points, setPoints] = useState([1, 3, 4, 2, 2, 3]);
  const random = (min, max) => {
    return setSelected(Math.floor(Math.random() * (max - min + 1) + min));
  };
  const vote = () => {
    const copy = [...points];
    copy[selected] += 1;
    setPoints(copy);
  };

  useEffect(() => {
    var max = points.reduce(function (prev, curr) {
      return prev > curr ? prev : curr;
    });
    setMostVotes(points.indexOf(max));
  }, [points]);

  return (
    <>
      <h6>Anecdote of the day</h6>
      <p>{anecdotes[selected]}</p>
      <p>Has {points[selected]} votes</p>
      <button onClick={() => random(0, 5)}>Next anecdote</button>
      <button onClick={() => vote()}>vote</button>
      <h6>Anecdote with most votes</h6>
      {anecdotes[mostVotes]}
    </>
  );
};

export default Part2;
