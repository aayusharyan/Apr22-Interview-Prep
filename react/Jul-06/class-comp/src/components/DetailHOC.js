import React from 'react'
import { useParams } from 'react-router-dom'
import Detail from './Detail';

const DetailHOC = () => {
  const {id} = useParams();
  return (
    <Detail path_id={id} />
  )
}

export default DetailHOC