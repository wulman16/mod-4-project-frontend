import React, { Component } from 'react'

class Card extends Component {

  render() {
    return (
      <div className='card'>
        {this.props.clothingItem.name}
        <img src={this.props.clothingItem.image} alt="clothing" height='100px' width='100px' className="clothing-image" />
        {this.props.clothingItem.description}
        <br />
        Material: {this.props.clothingItem.material}
        <br />
        Color: {this.props.clothingItem.color}
        <button onClick={() => this.props.handleAdd(this.props.clothingItem.id)}>Add to Cart</button>
      </div>
    )
  }
}

export default Card