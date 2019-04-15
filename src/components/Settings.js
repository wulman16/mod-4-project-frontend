import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Settings extends Component {
  render() {
    return (
      <React.Fragment>
        <label>Budget: ${this.props.budget}</label>
        <input
          id="budget"
          type="range"
          min="100" max="1000"
          value={this.props.budget}
          onChange={(e) => this.props.handleBudget(e.target.value)}
          step="50" />
        <button onClick={this.props.toggleCart}>
          {this.props.cartId ? "Delete Cart" : "New Cart"}
        </button>
        <NavLink to="/profile"> Profile </NavLink>
      </React.Fragment>
    )
  }
}

export default Settings