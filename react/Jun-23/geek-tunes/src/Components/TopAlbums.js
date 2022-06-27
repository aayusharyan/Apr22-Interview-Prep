import React, { useEffect, useState } from 'react'
import { getAlbumImage, napster } from '../util';
import { Link } from 'react-router-dom';

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
      <div class="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto">
        {albumList.map((singleAlbum, idx) => {
          if (singleAlbum == -1) {
            return (
              <div class="flex-none w-32 animate-pulse rounded-lg" key={idx}>
                <div class="bg-slate-700 h-28 w-28"></div>
                <div class="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
              </div>
            );
          } else {
            return (
              <Link to={`/album/${singleAlbum.id}`}>
                <div class="flex-none w-32 cursor-pointer" key={idx}>
                  <img className='border-4 border-transparent hover:border-blue-400 rounded-lg' src={getAlbumImage(singleAlbum.id)} />
                  <p class="m-0 text-sm text-gray-600 pl-1">{singleAlbum.name}</p>
                </div>
              </Link>
            );
          }
        })}
      </div>
    </>
  )
}

export default TopAlbums