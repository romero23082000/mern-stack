import React, { Fragment } from "react";

const Course = () => {
  const course = [
    {
      name: "Half Stack application development",
      id: 1,
      parts: [
        {
          name: "Fundamentals of React",
          exercises: 10,
          id: 1,
        },
        {
          name: "Using props to pass data",
          exercises: 7,
          id: 2,
        },
        {
          name: "State of a component",
          exercises: 14,
          id: 3,
        },
        {
          name: "Redux",
          exercises: 11,
          id: 4,
        },
      ],
    },
    {
      name: "Node.js",
      id: 2,
      parts: [
        {
          name: "Routing",
          exercises: 3,
          id: 1,
        },
        {
          name: "Middlewares",
          exercises: 7,
          id: 2,
        },
      ],
    },
  ];

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
