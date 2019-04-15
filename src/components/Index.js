import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Settings from './Settings'
import BodyContainer from './BodyContainer'

class Index extends Component {

  state = {
    cartId: null,
    budget: null
  }

  componentDidMount() {
    if (this.props.userId) {
    fetch(`http://localhost:3000/users/${this.props.userName}`)
      .then(response => response.json())
      .then(data => this.handleActiveCart(data[0].carts))
    }
  }

  handleActiveCart = (carts) => {
    if (carts.length > 0) {
      this.setState({
        cartId: carts.find(cart => cart.active).id,
        budget: carts.find(cart => cart.active).budget})
    }
  }

  toggleCart = () => {
    if (this.state.cartId === null) {
      fetch(`http://localhost:3000/carts`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          user_id: parseInt(this.props.userId),
          budget: 500,
          active: true
        })
      }).then(response => response.json())
        .then(data => this.setState({
          cartId: data.id,
          budget: data.budget
        }))
    } else {
      fetch(`http://localhost:3000/carts/${this.state.cartId}`, {
        method: 'DELETE'
      }).then(data => this.setState({
        cartId: null,
        budget: 0
      }))
    }
  }

  handleBudget = newBudget => {
    if (this.state.cartId) {
      fetch(`http://localhost:3000/carts/${this.state.cartId}`, {
        method: 'PATCH',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          id: this.state.cartId,
          budget: newBudget
        })
      }).then(response => this.setState({
          budget: newBudget
        }))
    }
  }

  render() {
      return (
        <div>
          {!this.props.userId ? <Redirect push to="/login" /> : null}
          <Settings userId={this.props.userId} cartId={this.state.cartId} toggleCart={this.toggleCart} budget={this.state.budget} handleBudget={this.handleBudget}/>
          <BodyContainer cartId={this.state.cartId} budget={this.state.budget}/>
        </div>
      )
    }
  }

export default Index