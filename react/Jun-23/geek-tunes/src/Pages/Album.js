import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { napster, getAlbumImage } from '../util';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Album = () => {
  const { albumId } = useParams();
  const navigate = useNavigate();
  const [albumDetails, setAlbumDetails] = useState({});
  const [trackList, setTrackList] = useState([]);
  useEffect(() => {
    (async _ => {
      try {
        const response = await napster.get(`/albums/${albumId}`);
        setAlbumDetails(response.data?.albums[0]);

        const tracks_response = await napster.get(`/albums/${albumId}/tracks`);
        setTrackList(tracks_response.data.tracks);
      } catch (e) {
        navigate("/404");
      }
    })();
  }, [albumId])
  return (
    <>
      <div className='h-52 z-0 -mt-4' style={{ backgroundImage: `url('${getAlbumImage(albumId)}')`, filter: "blur(5px)", backgroundSize: "cover" }}></div>
      <div className="container mx-auto px-4 -mt-52 z-2 relative">
        <img src={getAlbumImage(albumId)} className="p-8" />

        <p className='text-3xl font-semibold -mt-7 text-center'>{albumDetails.name}</p>
        <Link to={`/artist/${albumDetails.contributingArtists?.primaryArtist}`}>
          <p className='text-lg underline hover:text-blue-700 font-semibold text-center'>{albumDetails.artistName}</p>
        </Link>
        <p className='text-center mt-4'>Released X years ago{albumDetails.originallyReleased}</p>
        <div className='flex justify-center mt-4 gap-2'>{albumDetails.tags?.map((singleTag, idx) => {
          return (
            <div key={idx} className="bg-gray-300 rounded-full px-2 pb-1 inline border-blue-300 border-2">
              <span>{singleTag}</span>
            </div>
          )
        })}</div>

        <div className='py-4'>
          <div className='border-gray-400 w-full border-t'></div>
        </div>

        <div>
          {trackList.map((singleTrack, idx) => {
            return (
              <div key={idx}>
                <p>{singleTrack.name}</p>
              </div>
            );
          })}
        </div>

        <p className='text-center mt-3 text-xs text-gray-400'>{albumDetails.copyright}</p>
      </div>
    </>
  )
}

export default Album;