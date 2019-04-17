import React, { Component } from 'react'

class CartCard extends Component {
  render() {
    return (
      <div className="cart-card">
        {this.props.item.name}
        <img src={this.props.item.image} alt="cartclothing" height='100px' width='100px' />
      </div>
    )
  }
}

export default CartCard