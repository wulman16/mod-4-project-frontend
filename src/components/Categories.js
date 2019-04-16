import React, { Component } from 'react'

class Categories extends Component {
  render() {
    return (
      <div className="categories">
      <h1>Products</h1>
        <ul onClick={(e) => this.props.handleFilter(e.target.innerHTML.toLowerCase())}>
          <li>All</li>
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
      </div>
    )
  }
}

export default Categories