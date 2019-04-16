import React, { Component } from 'react'
import { Redirect } from 'react-router'
import '../index.css';
import { Form } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

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
        <div className="login-container">
          <div className="login-form">
          <Form onSubmit={e => this.handleLoginSubmit(e)}>
            <Form.Group controlId="formBasicName">
              <Form.Label>Login</Form.Label>
              <Form.Control type="text" placeholder="Name" name="name" />
              <br />
              <Button variant="primary" type="submit">Login</Button>
            </Form.Group>
          </Form>
          </div>

        <div className="signup-form">
          <Form onSubmit={e => this.handleSignupSubmit(e)}>
          <Form.Group controlId="formBasicSignUp">
            <Form.Label>Sign Up</Form.Label>
            <Form.Control type="text" placeholder="Name" name="name" />
            <br />
            <Button variant="primary" type="submit">Sign Up</Button>
          </Form.Group>
        </Form>
        </div>
        </div>
      )
    }
  }
}

export default Login



/* <label>Login</label>
          <form onSubmit={e => this.handleLoginSubmit(e)}>
            <input type="text" name="name" placeholder="Name"></input>
            <input type="submit" value="Login"></input>
          </form>
          <label>Signup</label>
          <form onSubmit={e => this.handleSignupSubmit(e)}>
            <input type="text" name="name" placeholder="Name"></input>
            <input type="submit" value="Signup"></input>
          </form> */