import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './index.css';
import App from './App';
import Login from './components/Login.js'
import Index from './components/Index.js'
import Profile from './components/Profile.js'
import * as serviceWorker from './serviceWorker';

const Title = () => 
  <h1>Clothing Game</h1>

ReactDOM.render((
  <Router>
    <React.Fragment>
      <Title />
      <Route exact path="/login" render={Login} />
      <Route exact path="/index" render={Index} />
      <Route exact path="/profile" render={Profile} />
    </React.Fragment>
  </Router>),
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
