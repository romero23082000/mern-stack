import React, { Fragment } from "react";

const Course = ({ course }) => {
  return (
    <div>
      {course.map((item) => {
        const total = item.parts.reduce(
          (prev, curr) => prev + curr.exercises,
          0
        );
        console.log(total);
        return (
          <Fragment key={item.id}>
            <h1>{item.name}</h1>
            {item.parts.map((item) => {
              return (
                <Fragment key={item.id}>
                  <p>Name: {item.name}</p>
                  <p>Exercises: {item.exercises}</p>
                </Fragment>
              );
            })}
            <h6>Total exercises: {total}</h6>
          </Fragment>
        );
      })}
    </div>
  );
};

export default Course;
