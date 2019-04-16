import React, { Component } from 'react'
import CartCard from './CartCard'

class Cart extends Component {
  render() {
    return (
      <div className="cart">
        <h1>Cart</h1>
        {this.props.cartItems 
          ? this.props.cartItems.map(item => <CartCard item={item} />)
          : null}
        {this.props.cartItems && this.props.cartItems.length > 0
          ? <button onClick={this.props.handleCheckout}>
              Checkout
            </button>
          : null}
      </div>
    )
  }
}

export default Cart