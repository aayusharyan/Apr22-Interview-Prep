import React from 'react'
import PropTypes from 'prop-types'

const Component3 = (props) => {
  return (
    <>
      <h1>Name: {props.name}</h1>
      <h3>Marks: {props.marks}</h3>
    </>
  )
}

Component3.propTypes = {
  name: PropTypes.string,
  marks: PropTypes.number
}

export default Component3