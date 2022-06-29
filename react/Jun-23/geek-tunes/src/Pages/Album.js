import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { napster } from '../util';
import { useNavigate } from 'react-router-dom';

import AlbumInfo from '../Components/AlbumInfo';
import HorizontalAlbumList from '../Components/HorizontalAlbumList';
import SongList from '../Components/SongList';

const Album = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [albumDetails, setAlbumDetails] = useState({});
  const [trackList, setTrackList] = useState(Array(20).fill(-1));
  const [similarAlbumList, setSimilarAlbumList] = useState(Array(20).fill(-1));
  useEffect(() => {
    setSimilarAlbumList(Array(20).fill(-1));
    setTrackList(Array(20).fill(-1));
    (async _ => {
      try {
        const response = await napster.get(`/albums/${albumId}`);
        setAlbumDetails(response.data?.albums[0]);
        console.log(response.data.albums[0]);

        const tracks_response = await napster.get(`/albums/${albumId}/tracks`);
        setTrackList(tracks_response.data.tracks);

        const similar_response = await napster.get(`albums/${albumId}/similar`);
        setSimilarAlbumList(similar_response.data.albums);
      } catch (e) {
        navigate("/404");
      }
    })();
  }, [albumId])
  return (
    <>
      <AlbumInfo albumDetails={albumDetails} />
      <div className="container mx-auto px-4 relative">

        <div className='py-4'>
          <div className='border-gray-400 w-full border-t'></div>
        </div>

        <SongList list={trackList} />

        {similarAlbumList.length > 1 ? (
          <>
            <p className='text-3xl mt-8'>Similar Albums</p>
            <HorizontalAlbumList albumList={similarAlbumList} />
          </>
        ) : false}

        <p className='text-center mt-5 text-xs text-gray-400'>{albumDetails.copyright}</p>
      </div>
    </>
  )
}

export default Album;