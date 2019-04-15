import React, { Component } from 'react'
import Categories from './Categories'
import CardContainer from './CardContainer'
import Cart from './Cart'

class BodyContainer extends Component {

  state = {
    cart: {
      id: null,
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

  componentWillReceiveProps(nextProps) {
    // if(nextProps.cartId) {
    this.setState({
      cart: {
        ...this.state.cart,
        id: nextProps.cartId
      }
    })
    if(nextProps.cartId) {
    fetch(`http://localhost:3000/carts/${nextProps.cartId}`)
      .then(response => response.json())
      .then(data => this.setState({
        cart: {
          ...this.state.cart,
          items: data.clothing_items
        }
      }))
    } else {
      this.setState({
        cart: {
          id: null,
          items: []
        }
      })
    }
    // }
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
    }).then(response => this.handleAddState(clothingItemId))
  }}

  handleAddState = clothingItemId => {
    const addedItem = this.state.clothingItems.find(item => item.id === clothingItemId)
    const newItems = this.state.cart.items.concat(addedItem)
    this.setState({
      cart: {
        ...this.state.cart,
        items: newItems
      }
    })
  }

  render() {
    return (
      <React.Fragment>
        <Categories />
        <CardContainer clothingItems={this.state.clothingItems} handleAdd={this.handleAdd}/>
        <Cart cartId={this.state.cart.id} cartItems={this.state.cart.items} budget={this.props.budget} handleCheckout={this.props.handleCheckout} />
      </React.Fragment>
    )
  }
}

export default BodyContainer