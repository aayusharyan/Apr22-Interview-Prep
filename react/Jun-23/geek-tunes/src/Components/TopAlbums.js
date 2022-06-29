import React, { useEffect, useState } from 'react'
import { napster } from '../util';

import HorizontalAlbumList from './HorizontalAlbumList';

const TopAlbums = () => {
  const [albumList, setAlbumList] = useState(Array(20).fill(-1));
  useEffect(() => {
    (async _ => {
      const response = await napster.get('/albums/top');
      setAlbumList(response.data.albums);
    })();
  }, []);
  return (
    <>
      <h3 class="text-2xl">Top Albums</h3>
      <HorizontalAlbumList albumList={albumList} />
    </>
  )
}

export default TopAlbums