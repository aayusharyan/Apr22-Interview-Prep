import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { napster } from '../util';

const AlbumsTab = () => {
  const { query } = useParams();
  useEffect(() => {
    (async _ => {
      napster.get(``)
    })();
  }, [query]);
  return (
    <div>AlbumsTab</div>
  )
}

export default AlbumsTab