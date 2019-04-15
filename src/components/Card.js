import React, { Component } from 'react'

class Card extends Component {

  render() {
    return (
      <div onClick={() => this.props.handleAdd(this.props.clothingItem.id)}>
        {this.props.clothingItem.name}
      </div>
    )
  }
}

export default Card