import React, { Component } from 'react'

class CartCard extends Component {
  render() {
    return (
      <div>
        {this.props.item.name}
      </div>
    )
  }
}

export default CartCard