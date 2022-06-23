import React, { useEffect, useState } from 'react'
import { napster, trackImage } from '../util'

const TopSongs = () => {
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    (async _ => {
      const response = await napster.get('/tracks/top');
      setTrackList(response.data.tracks);
    })();
  }, []);
  return (
    <>
      <h3 class="text-2xl">Top Songs</h3>
      <div class="flex flex-nowrap gap-4 mt-4 w-full overflow-x-scroll">
        {trackList.map((singleTrack, idx) => {
          return (
            <div class="flex-none w-32">
              <img src={trackImage(singleTrack.albumId)} />
            </div>
          );
        })}
        {/* <div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div>
        <div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div><div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div><div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div><div class="flex-none w-32">
          <img src='https://api.napster.com/imageserver/v2/albums/Alb.111750366/images/500x500.jpg' />
        </div> */}
      </div>
    </>
  )
}

export default TopSongs