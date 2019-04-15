import React, { Component } from 'react'
import { Redirect } from 'react-router'

class Login extends Component {

  handleLoginSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin(e.target.name.value)
  }

  handleSignupSubmit = (e) => {
    e.preventDefault()
    this.props.handleSignup(e.target.name.value)
  }

  render() {
    if (this.props.userId) {
      return (<Redirect to="/index" />)
    } else {
      return (
        <React.Fragment>
          <label>Login</label>
          <form onSubmit={e => this.handleLoginSubmit(e)}>
            <input type="text" name="name" placeholder="Name"></input>
            <input type="submit" value="Login"></input>
          </form>
          <label>Signup</label>
          <form onSubmit={e => this.handleSignupSubmit(e)}>
            <input type="text" name="name" placeholder="Name"></input>
            <input type="submit" value="Signup"></input>
          </form>
        </React.Fragment>
      )
    }
  }
}

export default Login