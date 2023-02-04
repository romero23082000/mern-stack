import axios from "axios";
import React, { useEffect, useState } from "react";
import Filter from "./Filter";
import Formulario from "./Formulario";
import Persons from "./Persons";
import peopleServices from "../../services/people";

const Agenda = () => {
  const [persons, setPersons] = useState([]);
  const [newUser, setNewUser] = useState({
    name: "",
    number: 0,
  });
  const [filter, setFilter] = useState("");

  const handleNewUser = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setNewUser((values) => ({ ...values, [name]: value }));
  };

  const addUser = (event) => {
    event.preventDefault();
    const userExist = persons.find((item) => item.name === newUser.name);
    if (userExist) {
      const confirm = window.confirm(
        "Seguro de cambiar los datos de este contacto"
      );
      if (confirm) {
        const changedUser = { ...userExist, number: newUser.number };
        peopleServices.update(userExist.id, changedUser).then((response) => {
          setPersons(
            persons.map((item) => (item.id !== userExist.id ? item : response))
          );
        });
      }
    } else {
      peopleServices.create(newUser).then(() => {
        setPersons(persons.concat(newUser));
        setNewUser({
          name: "",
          number: 0,
        });
      });
    }
  };

  useEffect(() => {
    peopleServices.getAll().then((response) => {
      setPersons(response);
    });
  }, []);

  const deleteUser = (id) => {
    const confirm = window.confirm(
      "Seguro de eliminar este usuario de tu lista de contactos"
    );
    if (confirm) {
      peopleServices.deleteUser(id).then((response) => {
        setPersons(persons.filter((item) => item.id !== id));
      });
    }
  };

  return (
    <>
      <h1>Phonebook</h1>
      <Filter setFilter={setFilter} />
      <h1>Add a new</h1>
      <Formulario
        addUser={addUser}
        handleNewUser={handleNewUser}
        newUser={newUser}
      />
      <h1>Numbers</h1>
      {persons
        .filter((item) =>
          item.name.toLowerCase().includes(filter.toLowerCase())
        )
        .map((item) => {
          return (
            <Persons key={item.name} item={item} deleteUser={deleteUser} />
          );
        })}
    </>
  );
};

export default Agenda;
