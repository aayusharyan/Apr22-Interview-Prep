import React, { Component } from 'react'
import { DECREMENT, INCREMENT } from '../actions'
import { connect } from 'react-redux'

class Buttons extends Component {
  render() {
    return (
      <>
        <button onClick={this.props.increment}>👍🏻</button>
        <button onClick={this.props.decrement}>👎🏻</button>
      </>
    )
  }
}

const dispatchFn = (dispatch) => {
  return {
    increment: _ => dispatch(INCREMENT),
    decrement: _ => dispatch(DECREMENT)
  };
}

export default connect(null, dispatchFn)(Buttons);