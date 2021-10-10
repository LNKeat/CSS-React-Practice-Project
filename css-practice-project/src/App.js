import './App.css';
import React, { useEffect } from 'react'
import { Route, Switch } from 'react-router-dom'
import About from "./About";
import Schedule from "./Schedule";
import AddWorkOut from './AddWorkout';
import NavBar from "./NavBar"

function App() {

  useEffect(() => {
    fetch("http://localhost:5000/exercises")
    .then(res => res.json())
    .then(exercisesData => console.log(exercisesData))
  }, [])


  return (
    <main className="main-wrapper">
      <NavBar />
      <Switch>
        <Route exact path="/schedule">
          <Schedule />
        </Route>
        <Route exact path="/add">
          <AddWorkOut />
        </Route>
        <Route path="/">
          <About />
        </Route>
      </Switch>
    </main>
  )
}

export default App;