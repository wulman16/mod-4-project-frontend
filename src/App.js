import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Redirect } from 'react-router'
// import { NavLink } from 'react-router-dom'
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
    redirect: false
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
      .then(data => this.setState({
        user: {
          id: data[0].id,
          name: data[0].name
        }
      }))
  }

  // handleProfileClick = () => {
  //   this.setState({redirect: true})
  // }

  // do a fetch on our backend to see if there's a user who has that name
  // if yes: set state to that user
  // if no: tell them they have the wrong credentials

  render() {
    return (
      <Router>
        <React.Fragment>
          <Title />
          {this.state.redirect ? <Redirect push to="/profile" /> : null}
          <Route exact path="/login"
                 render={(props) => (<Login {...props} userId={this.state.user.id}
                                                      userName={this.state.user.name}
                                                      handleLogin={this.handleLogin} />)} />
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
