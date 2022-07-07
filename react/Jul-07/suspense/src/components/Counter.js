import React, { Component } from 'react'
import { connect } from 'react-redux';

class Counter extends Component {
  render() {
    return (
      <p>{this.props.counter}</p>
    )
  }
}


const stateFn = (state) => {
  return {
    counter: state.counter
  };
};

export default connect(stateFn, null)(Counter);