import React from "react";

const Formulario = (props) => {
  return (
    <>
      <form onSubmit={props.addUser}>
        <div>
          Name:
          <input
            type="text"
            name="name"
            value={props.newUser.name}
            onChange={props.handleNewUser}
          />
        </div>
        <div>
          Number:
          <input
            type="number"
            name="number"
            value={props.newUser.number}
            onChange={props.handleNewUser}
          />
        </div>
        <button type="submit">Guardar</button>
      </form>
    </>
  );
};

export default Formulario;
