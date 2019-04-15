import React, { Component } from 'react'
import { Redirect } from 'react-router'
import Settings from './Settings'
import BodyContainer from './BodyContainer'

class Index extends Component {

  state = {
    cartId: null,
    budget: 0
  }

  componentWillMount() {
    if (this.props.userId) {
    fetch(`http://localhost:3000/users/${this.props.userName}`)
      .then(response => response.json())
      .then(data => this.handleActiveCart(data[0].carts))
    }
  }

  handleActiveCart = (carts) => {
    if (carts.filter(cart => cart.active).length > 0) {
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
      this.setState({
        budget: newBudget
      })
    }
  }

  handleCheckout = () => {
    fetch(`http://localhost:3000/carts/${this.state.cartId}`, {
      method: 'PATCH',
      headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      budget: this.state.budget,
      active: false
    })
    }).then(response => response.json())
      .then(data => this.renderResults(data))
  }

  renderResults = (data) => {
    this.setState({
      cartId: null,
      budget: 0
    })
    if (data.budget > data.total) {
      alert(`You won! You came $${data.budget - data.total} under budget!`)
    } else if (data.budget === data.total) {
      alert(`You won! You met your budget exactly!`)
    } else {
      alert(`You lose! You cam $${data.total - data.budget} over budget!`)
    }
  }

  render() {
      return (
        <div>
          {!this.props.userId ? <Redirect push to="/login" /> : null}
          <Settings userId={this.props.userId} cartId={this.state.cartId} toggleCart={this.toggleCart} budget={this.state.budget} handleBudget={this.handleBudget}/>
          <BodyContainer cartId={this.state.cartId} budget={this.state.budget} handleCheckout={this.handleCheckout} />
        </div>
      )
    }
  }

export default Index