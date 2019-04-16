import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

class Settings extends Component {
  render() {
    return (
      <div className="settings">
        <NavLink to="/profile">
          <img src='https://static.thenounproject.com/png/630729-200.png' alt="My Profile" height="60px" />
        </NavLink>
        <br />
        <br />
        <label>Budget: ${this.props.budget}</label>
        <input
          id="budget"
          type="range"
          min="100" max="1000"
          value={this.props.budget}
          onChange={(e) => this.props.handleBudget(e.target.value)}
          step="50" />
          <br />
        <button onClick={this.props.toggleCart}>
          {this.props.cartId ? "Delete Cart" : "New Cart"}
        </button>
      </div>
    )
  }
}

export default Settings