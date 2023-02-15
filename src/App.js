import {
  BrowserRouter as Router,
  Routes, Route, Link, Navigate, useMatch, useNavigate
} from "react-router-dom"
import React, { useState } from 'react'
import Agenda from './components/agenda'
import Home from './pages/Home'
import Users from './pages/Users'
import LoginForm from "./components/login/LoginForm"
import loginService from "./services/login";
import noteService from "./services/notes";
import Notification from "./components/notas/Notification"
import { Button } from "@mui/material"
import { Stack } from "@mui/system"
import styles from "./app-jss"
import { withStyles } from "@mui/styles"
import Notes from "./components/notas/Notes"
import NoteDetail from "./components/notas/NoteDetail"
import Country from "./pages/Country"
import Course from "./pages/Course"
import Anecdotes from "./pages/Anecdotes"

const App = (props) => {
  const { classes } = props
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();

  const notesData = [
    {
      id: 1,
      content: "HTML is easy",
      important: true,
    },
    {
      id: 2,
      content: "Browser can execute only JavaScript",
      important: false,
    },
    {
      id: 3,
      content: "GET and POST are the most important methods of HTTP protocol",
      important: true,
    },
  ]

  const logout = () => {
    setUser(null);
    navigate("/")
    window.localStorage.removeItem("loggedNoteappUser");
  };


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const user = await loginService.login({
        username,
        password,
      });
      window.localStorage.setItem("loggedNoteappUser", JSON.stringify(user));
      noteService.setToken(user.token);
      setUser(user);
      setUsername("");
      setPassword("");
    } catch (exception) {
      setErrorMessage("wrong credentials");
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
    }
  };

  const login = (user) => {
    console.log(user)
    setUser(user)
  }

  const match = useMatch('/notes/:id')
  const note = match
    ? notesData.find(note => note.id === Number(match.params.id))
    : null

  return (

    <div>
      {
        user && (
          <Stack direction="row" alignItems="center"
            justifyContent="space-between" bgcolor="#0A261F" height="50px">
            <div>
              <Link className={classes.linkNavbar} to="/home">Inicio</Link>
              <Link className={classes.linkNavbar} to="/notes">Notas</Link>
              <Link className={classes.linkNavbar} to="/users">Usuarios</Link>
              <Link className={classes.linkNavbar} to="/country">Paises</Link>
              <Link className={classes.linkNavbar} to="/agenda">Agenda</Link>
              <Link className={classes.linkNavbar} to="/course">Curso</Link>
              <Link className={classes.linkNavbar} to="/anecdotes">Anecdotas</Link>
            </div>
            <div>
              {user
                ? <em className={classes.userLoggin}>{user} logged in</em>
                : <Link to="/login">login</Link>
              }
              <Button onClick={() => logout()} className={classes.buttonClose} variant="outlined" size="small">Cerrar sesión</Button>
            </div>
          </Stack>
        )
      }
      <Notification message={errorMessage} />
      <Routes>
        <Route path="/users" element={user ? <Users /> : <Navigate replace to="/login" />} />
        <Route path="/notes" element={<Notes user={user} notes={notesData} />} />
        <Route path="/notes/:id" element={<NoteDetail note={note} />} />
        <Route path="/" element={<LoginForm onLogin={login} />} />
        <Route path="/country" element={<Country />} />
        <Route path="/course" element={<Course />} />
        <Route path="/anecdotes" element={<Anecdotes />} />
        <Route path="/agenda" element={<Agenda />} />
        <Route path="/users" element={<Users />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  )
}

export default withStyles(styles)(App)