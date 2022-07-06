import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Navigation extends Component {
  render() {
    return (
      <>
        <Link to="/">Index</Link>
        <br />
        <Link to="/detail/abcd">Detail</Link>
      </>
    )
  }
}
