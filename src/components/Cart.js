import React, { Component } from 'react'
import CartCard from './CartCard'

class Cart extends Component {
  render() {
    return (
      <div>
        {this.props.cartItems.map(item => <CartCard item={item} />)}
      </div>
    )
  }
}

export default Cart