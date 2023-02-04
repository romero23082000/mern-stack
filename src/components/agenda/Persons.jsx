import React from "react";

const Persons = ({ item, deleteUser }) => {
  return (
    <p>
      {item.name} - {item.number}
      <button onClick={() => deleteUser(item.id)}>Delete</button>
    </p>
  );
};

export default Persons;
