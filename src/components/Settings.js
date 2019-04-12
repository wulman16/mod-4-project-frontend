import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Settings extends Component {
  render() {
    return (
      <div>
        <NavLink to="/profile"> Profile </NavLink>
      </div>
    )
  }
}

export default Settings