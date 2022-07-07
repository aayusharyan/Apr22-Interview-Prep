import React from 'react'

const Button = ({clickFn}) => {
  return (
    <button onClick={clickFn}>Load the content</button>
  )
}

export default Button