import React, { Component } from 'react'
import Categories from './Categories'
import CardContainer from './CardContainer'
import Cart from './Cart'

class BodyContainer extends Component {

  state = {
    cart: {
      id: this.props.cartId,
      items: []
    },
    clothingItems: []
  }

  componentDidMount() {
    fetch(`http://localhost:3000/clothing_items`)
      .then(response => response.json())
      .then(data => this.setState({
        clothingItems: data
      }))
  }

  handleAdd = clothingItemId => {
    if (this.state.cart.id) {
    fetch(`http://localhost:3000/cart_clothing_items`, {
      method: `POST`,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        cart_id: parseInt(this.state.cart.id),
        clothing_item_id: parseInt(clothingItemId)
      })
    }).then(response => response.json())
      .then(data => console.log(data))
  }}

  render() {
    return (
      <React.Fragment>
        <Categories />
        <CardContainer clothingItems={this.state.clothingItems} handleAdd={this.handleAdd}/>
        <Cart cartId={this.state.cart.id} cartItems={this.state.cart.items} budget={this.props.budget} />
      </React.Fragment>
    )
  }
}

export default BodyContainer