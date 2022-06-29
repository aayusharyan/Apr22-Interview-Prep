import React, { useEffect, useState } from 'react'
import { napster, getArtistImage } from '../util';
import { Link } from 'react-router-dom';

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
      <h3 class="text-2xl">Top Artists</h3>
      <div class="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto">
        {artistList.map((singleArtist, idx) => {
          if (singleArtist == -1) {
            return (
              <div class="flex-none w-32 animate-pulse rounded-lg" key={idx}>
                <div class="bg-slate-700 h-20 w-28"></div>
                <div class="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
              </div>
            );
          } else {
            return (
              <Link to={`/artist/${singleArtist.id}`} key={idx}>
                <div class="flex-none w-32 cursor-pointer">
                  <img class="border-4 border-transparent hover:border-blue-400 rounded-lg" src={getArtistImage(singleArtist.id)} />
                  <p class="m-0 text-sm text-gray-600 pl-1">{singleArtist.name}</p>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  )
}

export default TopArtists