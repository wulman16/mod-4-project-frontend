import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import { Redirect } from 'react-router'
import { Table } from 'react-bootstrap';


class Profile extends Component {

  state = {
    carts: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/users/${this.props.userName}`)
    .then(res => res.json())
    .then(data => this.setState({
        carts: data[0].carts
      }))
  }

  render() {
    return (
      <div>
      {!this.props.userId ? <Redirect push to="/login" /> : null}
      <NavLink to="/index"> Index </NavLink>
        <h2>Profile!</h2>
          <Table striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>Cart History</th>
                <th>Margin</th>
                <th>Success</th>
              </tr>
            </thead>
            <tbody>
              {this.state.carts.map(cart => 
              <tr>
                <td>{cart.timestamp}</td>
                <td>${cart.margin}</td>
                <td>{(cart.budget - cart.total) >= 0 ? "Won": "Lost"}</td>
              </tr>)}
            </tbody>
          </Table>
      </div>
    )
  }
}

export default Profile