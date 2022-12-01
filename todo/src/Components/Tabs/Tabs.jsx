import React from 'react'
import { NavLink } from 'react-router-dom'

const Tabs = () => {
  const classes = ({ isActive }) => isActive ? 'active' : ''

  return (
    <div className="react-pills">
      <NavLink end to="/" className={classes}>Home</NavLink>
      <NavLink end to="input" className={classes}>Input</NavLink>
      <NavLink end to="stack" className={classes}>Stack</NavLink>
    </div>
  )
}

export default Tabs
