import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabs = () => (
  <div className="react-pills">
    <NavLink exact to="/" activeClassName="active">Tasks</NavLink>
    <NavLink exact to="/users" activeClassName="active">Users</NavLink>
    <NavLink exact to="/about" activeClassName="active">About</NavLink>
  </div>
)

export default Tabs
