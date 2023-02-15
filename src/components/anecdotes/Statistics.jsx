import React from "react";

const Statistics = ({ good, all, neutral, bad, average, positive }) => {
  return (
    <table>
      <tr>
        <td>Good</td>
        <td>{good}</td>
      </tr>
      <tr>
        <td>Bad</td>
        <td>{bad}</td>
      </tr>
      <tr>
        <td>Neutral</td>
        <td>{neutral}</td>
      </tr>
      <tr>
        <td>All</td>
        <td>{all}</td>
      </tr>
      <tr>
        <td>Average</td>
        <td>{average}</td>
      </tr>
      <tr>
        <td>Positive</td>
        <td>{positive}</td>
      </tr>
    </table>
  );
};

export default Statistics;
