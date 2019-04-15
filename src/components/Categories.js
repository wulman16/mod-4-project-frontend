import React, { Component } from 'react'

class Categories extends Component {
  render() {
    return (
      <React.Fragment>
        <ul onClick={(e) => this.props.handleFilter(e.target.innerHTML.toLowerCase())}>
          <li>Shirts</li>
          <li>Pants</li>
          <li>Shorts</li>
          <li>Skirts</li>
          <li>Dresses</li>
          <li>Jackets</li>
          <li>Shoes</li>
          <li>Socks</li>
          <li>Bags</li>
          <li>Belts</li>
          <li>Hats</li>
        </ul>
      </React.Fragment>
    )
  }
}

export default Categories