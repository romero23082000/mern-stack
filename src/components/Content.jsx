import React from "react";
import Course from "./Course";
import Part from "./Part";
import Part2 from "./Part2";

const anecdotes = [
  "If it hurts, do it more often",
  "Adding manpower to a late software project makes it later!",
  "The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
  "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
  "Premature optimization is the root of all evil.",
  "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
];

const Content = ({ course }) => {
  return (
    <div>
      {/* <Part anecdotes={anecdotes} /> */}
      <Part2 anecdotes={anecdotes} />
      <Course course={course} />
    </div>
  );
};

export default Content;
