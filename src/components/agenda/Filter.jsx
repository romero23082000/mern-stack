import React from "react";

const Filter = (props) => {
  return (
    <div>
      Filter show with
      <input
        type="text"
        onChange={(event) => props.setFilter(event.target.value)}
      />
    </div>
  );
};

export default Filter;
