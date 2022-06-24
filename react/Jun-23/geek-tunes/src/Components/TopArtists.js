import React, { useEffect, useState } from 'react'
import { napster, getArtistImage } from '../util';

const TopArtists = () => {
  const [artistList, setArtistList] = useState([]);
  useEffect(() => {
    (async _ => {
      const response = await napster.get('/artists/top');
      setArtistList(response.data.artists);
    })();
  }, []);
  return (
    <>
      <h3 class="text-2xl">Top Artists</h3>
      <div class="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto">
        {artistList.map((singleArtist, idx) => {
          console.log(singleArtist)
          return (
            <div class="flex-none w-32 cursor-pointer" key={idx}>
              <img class="border-4 border-transparent hover:border-blue-400" src={getArtistImage(singleArtist.id)} />
              <p class="m-0 text-sm text-gray-600 pl-1">{singleArtist.name}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default TopArtists