import React, { Component } from 'react'
import CartCard from './CartCard'

class Cart extends Component {
  render() {
    return (
      <React.Fragment>
        {this.props.cartItems 
          ? this.props.cartItems.map(item => <CartCard item={item} />)
          : null}
        {this.props.cartItems && this.props.cartItems.length > 0
          ? <button onClick={this.props.handleCheckout}>
              Checkout
            </button>
          : null}
      </React.Fragment>
    )
  }
}

export default Cart