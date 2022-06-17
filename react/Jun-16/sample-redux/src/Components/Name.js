import React from 'react'
import { useSelector } from 'react-redux';

const Name = () => {
  const firstName = useSelector(state => state.firstName);
  const lastName  = useSelector(state => state.lastName);  

  return <h1>Name: {firstName} {lastName}</h1>;
}

export default Name