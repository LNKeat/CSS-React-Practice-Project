import React from 'react'
import { NavLink } from 'react-router-dom'

function NavBar(){
  return (
    <header className="nav-bar">
      <h1>workout.com</h1>
      <div className="nav-link-container">
        <NavLink to="/" exact>Home</NavLink>
        <NavLink to="/schedule" exact>Schedule</NavLink>
        <NavLink to="/add" exact>Add Workout</NavLink>
      </div>
    </header>
  )
}
export default NavBar;