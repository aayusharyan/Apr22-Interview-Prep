import React, { useEffect, useState } from 'react'
import { getAlbumImage, napster } from '../util';

const TopAlbums = () => {
  const [albumList, setAlbumList] = useState([]);
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
          return (
            <div class="flex-none w-32 cursor-pointer" key={idx}>
              <img className='border-4 border-transparent hover:border-blue-400' src={getAlbumImage(singleAlbum.id)} />
              <p class="m-0 text-sm text-gray-600 pl-1">{singleAlbum.name}</p>
            </div>
          );
        })}
      </div>
    </>
  )
}

export default TopAlbums