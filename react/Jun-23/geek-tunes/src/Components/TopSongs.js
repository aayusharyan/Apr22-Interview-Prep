import React, { useEffect, useState } from 'react'
import { napster, getAlbumImage } from '../util'
import { useDispatch } from 'react-redux';
import { changePlayingTrack } from '../slice';

const TopSongs = () => {
  const dispatch = useDispatch();
  const [trackList, setTrackList] = useState(Array(20).fill(-1));
  useEffect(() => {
    (async _ => {
      const response = await napster.get('/tracks/top');
      setTrackList(response.data.tracks);
    })();
  }, []);
  return (
    <>
      <h3 class="text-2xl">Top Songs</h3>
      <div class="flex flex-nowrap gap-3 mt-4 w-full overflow-x-auto">
        {trackList.map((singleTrack, idx) => {
          if (singleTrack == -1) {
            return (
              <div class="flex-none w-32 animate-pulse rounded-lg" key={idx}>
                <div class="bg-slate-700 h-28 w-28"></div>
                <div class="h-2 bg-slate-700 rounded mt-2 w-20 mb-3"></div>
              </div>
            );
          } else {
            return (
              <div class="flex-none w-32 cursor-pointer" key={idx} onClick={_ => dispatch(changePlayingTrack(singleTrack.id))}>
                <img class="border-4 border-transparent hover:border-blue-400 rounded-lg" src={getAlbumImage(singleTrack.albumId)} />
                <p class="m-0 text-sm text-gray-600 pl-1">{singleTrack.name}</p>
              </div>
            );
          }
        })}
      </div>
    </>
  )
}

export default TopSongs