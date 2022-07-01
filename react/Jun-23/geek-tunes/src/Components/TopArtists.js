import React, { useEffect, useState } from 'react'
import { napster } from '../util';
import ArtistList from './ArtistList';

const TopArtists = () => {
  const [artistList, setArtistList] = useState(Array(20).fill(-1));
  useEffect(() => {
    (async _ => {
      const response = await napster.get('/artists/top');
      setArtistList(response.data.artists);
    })();
  }, []);
  return (
    <>
      <h3 className="text-2xl">Top Artists</h3>
      <ArtistList list={artistList} />
    </>
  )
}

export default TopArtists