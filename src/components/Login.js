import React, { Component } from 'react'
import { Redirect } from 'react-router'

class Login extends Component {

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleLogin(e.target.name.value)
  }

  render() {
    if (this.props.userId) {
      return (<Redirect to="/index" />)
    } else {
      return (
        <React.Fragment>
          <form onSubmit={e => this.handleSubmit(e)}>
            <input type="text" name="name"></input>
            <input type="submit" value="Login"></input>
          </form>
        </React.Fragment>
      )
    }
  }
}

export default Login