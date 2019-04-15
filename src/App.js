import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Login from './components/Login.js'
import Index from './components/Index.js'
import Profile from './components/Profile.js'

const Title = () => <h1>Clothing Game</h1>

class App extends Component {

  state = {
    user: {
      id: null,
      name: null
    },
  }

  getUser = (id) => {
    fetch(`http://localhost:3000/users/${id}`)
      .then(response => response.json())
      .then(data => this.setState({
        user: {
          id: data.id,
          name: data.name
      }
    }))
  }

  handleLogin = (name) => {
    fetch(`http://localhost:3000/users/${name}`)
      .then(response => response.json())
      .then(data => this.lookupLogin(data))
  }

  lookupLogin = (data) => {
    if (data.length > 0) {
      this.setState({
        user: {
          id: data[0].id,
          name: data[0].name
        }
      })} else {
        alert(`Invalid login credentials!`)
      }
  }

  handleSignup = (userName) => {
    fetch(`http://localhost:3000/users`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: userName
      })
    }).then(response => response.json())
      .then(data => this.setState({
        user: {
          id: data.id,
          name: data.name
        }
      }))
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <Title />
          <Route exact path="/login"
                 render={(props) => (<Login {...props} userId={this.state.user.id}
                                                      userName={this.state.user.name}
                                                      handleLogin={this.handleLogin}
                                                      handleSignup={this.handleSignup} />)} />
          <Route exact path="/index" 
                 render={(props) => (<Index {...props} userId={this.state.user.id} 
                                                       userName={this.state.user.name} />)} />
          <Route exact path="/profile" 
                 render={(props) => (<Profile {...props} userId={this.state.user.id}
                                                         userName={this.state.user.name} />)} />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
