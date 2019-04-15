import React, { Component } from 'react'
import Card from './Card'

class CardContainer extends Component {

  render() {
    return (
      <div>
        {this.props.clothingItems.map(ci => <Card clothingItem={ci} handleAdd={this.props.handleAdd} />)}
      </div>
    )
  }
}

export default CardContainer